import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { deliverContactMessage } from "@/lib/leads";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await deliverContactMessage(parsed.data);
  return NextResponse.json({ ok: true });
}
