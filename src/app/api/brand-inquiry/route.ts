import { NextResponse } from "next/server";
import { brandInquirySchema } from "@/lib/validations";
import { deliverBrandInquiry } from "@/lib/leads";
import { isRateLimited, getClientKey } from "@/lib/rateLimit";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = brandInquirySchema.safeParse(json);

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

  // Honeypot: a bot filled in a field real users never see. Pretend success
  // so the bot doesn't learn to adapt, but skip sending the email.
  if (parsed.data.honeypot) {
    return NextResponse.json({
      success: true,
      message: "Thank you! Your details have been submitted successfully.",
    });
  }

  if (isRateLimited(getClientKey(request, "brand-inquiry"))) {
    return NextResponse.json(
      { success: false, message: "You've already submitted this recently. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  const result = await deliverBrandInquiry(parsed.data);

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
