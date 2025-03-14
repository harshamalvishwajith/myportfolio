import { NextRequest, NextResponse } from "next/server";

const allowedOrigin = "https://harshamal.me"; // Change this to your actual domain

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    const response = await fetch(
      "https://your-vercel-project.vercel.app/api/send-email",
      {
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
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
