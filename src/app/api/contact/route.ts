import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch (parseError) {
    return NextResponse.json(
      { success: false, error: "Invalid JSON format in request body." },
      { status: 400 }
    );
  }

  try {
    const { name, email, message } = body || {};

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your message details." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const inquiry = {
      id: `inq_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp,
    };

    // Log to server console so the developer/host receives the dispatch immediately
    console.log("==================================================");
    console.log(`[CONTACT DISPATCH] New message from: ${inquiry.name} <${inquiry.email}>`);
    console.log(`Timestamp: ${inquiry.timestamp}`);
    console.log(`Message Content:\n${inquiry.message}`);
    console.log("==================================================");

    return NextResponse.json(
      {
        success: true,
        message: "Message dispatched and recorded successfully!",
        data: inquiry,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[CONTACT ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process inquiry.",
      },
      { status: 500 }
    );
  }
}
