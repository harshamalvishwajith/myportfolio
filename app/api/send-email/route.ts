import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@harshamal.me",
        to: "harshamalvishwajith@gmail.com",
        subject: subject,
        text: `From: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
