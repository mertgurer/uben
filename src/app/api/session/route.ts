import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";
import { serialize } from "cookie";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const verifyAdminDb = adminDb;
    if (!verifyAdminDb) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    const sessionCookie = await admin.auth().createSessionCookie(token, {
      expiresIn: 1000 * 60 * 60 * 24 * 14, // 14 days
    });

    const cookie = serialize("session", sessionCookie, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 14, // 14 days
    });

    const res = NextResponse.json({ success: true, uid: decoded.uid });
    res.headers.set("Set-Cookie", cookie);

    return res;
  } catch (err) {
    console.error("❌ Session creation failed:", err);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
