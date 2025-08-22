import { NextResponse } from "next/server";

const DRIVE_URL = "https://drive.google.com/file/d/1eVP5qVA36hoBQyWeeXK_1z1McAmTQ6uy/view?usp=sharing";

export async function GET() {
  return NextResponse.redirect(DRIVE_URL, { status: 302 });
}
