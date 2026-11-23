import { NextResponse } from "next/server";
import { creatorApplicationSchema } from "@/lib/validations";
import {
  buildCreatorSheetRow,
  deliverCreatorApplication,
  submitCreatorApplicationToSheet,
} from "@/lib/leads";
import { isRateLimited, getClientKey } from "@/lib/rateLimit";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = creatorApplicationSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({
      success: true,
      message: "Thank you! Your details have been submitted successfully.",
    });
  }

  if (isRateLimited(getClientKey(request, "creator-application"))) {
    return NextResponse.json(
      { success: false, message: "You've already submitted this recently. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  // The Google Sheet is the system of record. Email is only a fallback so an
  // application is never lost when the Apps Script call fails.
  const row = buildCreatorSheetRow(parsed.data);
  const sheet = await submitCreatorApplicationToSheet(row);
  const email = sheet.sent ? null : await deliverCreatorApplication(parsed.data, row);

  if (!sheet.sent && !email?.sent) {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thank you! Your details have been submitted successfully.",
  });
}
