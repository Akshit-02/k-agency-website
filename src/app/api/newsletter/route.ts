import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { deliverNewsletterSignup } from "@/lib/leads";
import { isRateLimited, getClientKey } from "@/lib/rateLimit";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please enter a valid email address.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ success: true, message: "You're subscribed." });
  }

  if (isRateLimited(getClientKey(request, "newsletter"))) {
    return NextResponse.json(
      { success: false, message: "You've already subscribed recently. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  const result = await deliverNewsletterSignup(parsed.data);

  if (!result.sent) {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "You're subscribed." });
}
