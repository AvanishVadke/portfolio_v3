import { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
  const pdfPath = path.join(process.cwd(), "public", "resume.pdf");
  try {
    const file = await readFile(pdfPath);
    const ua = req.headers.get("user-agent") || "";
    const forceDownload = /Mobi|Android|iPhone|iPad|iPod/i.test(ua) || req.nextUrl.searchParams.get("download") === "1";
  const headers = new Headers({ "Content-Type": "application/pdf" });
  if (forceDownload) headers.set("Content-Disposition", 'attachment; filename="Avanish_Vadke_Resume.pdf"');
  return new Response(new Uint8Array(file), { headers });
  } catch {
  return new Response("Resume not found", { status: 404 });
  }
}
