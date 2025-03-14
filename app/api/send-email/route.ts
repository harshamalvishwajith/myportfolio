import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    // Send email using Resend API
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

    // ✅ Add CORS headers
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "https://harshamal.me"); // Allow your website
    headers.append("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.append(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

// ✅ Handle OPTIONS preflight request
export async function OPTIONS() {
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "https://harshamal.me");
  headers.append("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return new NextResponse(null, { status: 204, headers });
}
