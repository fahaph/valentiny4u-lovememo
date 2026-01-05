"use server";

import { cookies } from "next/headers";

export async function setVerifiedSession(userId: string) {
  const cookieStore = await cookies(); // cookie เป็น async

  const payload = {
    userId,
    verified: true,
    issuedAt: Date.now(),
  };

  cookieStore.set(
    "valentiny4uSession",
    JSON.stringify(payload),
    {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 6, // 6 ชั่วโมง
    }
  );

  return { success: true };
}
