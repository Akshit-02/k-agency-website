import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.email() });

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  console.log("[lead:newsletter]", parsed.data.email);
  return NextResponse.json({ ok: true });
}
