import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { requestType, email, reason } = body;

    if (!email || !requestType) {
      return NextResponse.json(
        { error: "Email and request type are required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const requestTypeLabel = requestType === "export" ? "Data Export" : "Account Deletion";

    const emailContent = `
New Data ${requestTypeLabel} Request

Timestamp: ${timestamp}
Email: ${email}
Request Type: ${requestTypeLabel}
Reason: ${reason || "Not provided"}
    `.trim();

    console.log("Data Deletion Request:", emailContent);

    return NextResponse.json(
      { message: "Request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}