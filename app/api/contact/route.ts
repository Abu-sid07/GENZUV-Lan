import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return NextResponse.json(
        { error: "Email configuration is missing." },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Please provide valid enquiry details." },
        { status: 400 },
      );
    }

    const fields = body as Record<string, unknown>;
    const fullName = String(fields.fullName ?? "").trim();
    const phone = String(fields.phone ?? "").trim();
    const email = String(fields.email ?? "").trim();
    const service = String(fields.service ?? "").trim();
    const projectDetails = String(fields.projectDetails ?? "").trim();
    const consent = fields.consent;

    if (!fullName || !phone || consent !== true) {
      return NextResponse.json(
        { error: "Please complete the required fields and consent." },
        { status: 400 },
      );
    }

    if (
      fullName.length > 150 ||
      phone.length > 30 ||
      email.length > 254 ||
      service.length > 150 ||
      projectDetails.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "GENZ UV Website <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `New Enquiry: ${fullName}`,
      replyTo: email || undefined,
      text: `
New contact form enquiry

Name: ${fullName}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service || "Not specified"}

Project Details:
${projectDetails || "Not provided"}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { success: true, id: data.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}