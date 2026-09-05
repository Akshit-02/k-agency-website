import { NextResponse } from "next/server";
import { brandInquirySchema } from "@/lib/validations";
import { deliverBrandInquiry } from "@/lib/leads";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = brandInquirySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await deliverBrandInquiry(parsed.data);
  return NextResponse.json({ ok: true });
}
