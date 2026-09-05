import { NextResponse } from "next/server";
import { creatorApplicationSchema } from "@/lib/validations";
import { deliverCreatorApplication } from "@/lib/leads";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = creatorApplicationSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await deliverCreatorApplication(parsed.data);
  return NextResponse.json({ ok: true });
}
