import { NextResponse } from "next/server";

const DRIVE_URL = "https://drive.google.com/file/d/1E0rax0QFIXLWEIPXofa-IBTd5vhIKjxn/view?usp=sharing";

export async function GET() {
  return NextResponse.redirect(DRIVE_URL, { status: 302 });
}
