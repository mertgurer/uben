import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  try {
    const { sessionCookie } = await req.json();

    if (!sessionCookie) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    await admin.auth().verifySessionCookie(sessionCookie, true);

    return NextResponse.json({ valid: true });
  } catch (err) {
    console.error("Session verification failed:", err);

    const res = NextResponse.json({ valid: false }, { status: 401 });
    res.headers.set(
      "Set-Cookie",
      serialize("session", "", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 0,
      })
    );
    return res;
  }
}
