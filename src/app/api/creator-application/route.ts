import { NextResponse } from "next/server";
import { creatorApplicationSchema } from "@/lib/validations";
import { deliverCreatorApplication } from "@/lib/leads";
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

  const result = await deliverCreatorApplication(parsed.data);

  if (!result.sent) {
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
