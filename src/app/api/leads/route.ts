import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { leadSubmissionSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = leadSubmissionSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const { error } = await supabase.from("leads").insert({
      first_name: data.firstName,
      last_name: data.lastName ?? null,
      email: data.email || null,
      phone: data.phone,
      company: data.company,
      trucks: data.trucks ?? null,
      budget: data.budget ?? null,
      message: data.message ?? null,
      has_whatsapp: data.hasWhatsapp ?? false,
      source: "website",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    // Notify n8n of new lead (awaited so serverless runtime doesn't kill it)
    try {
      await fetch("https://n8n.lexumsoft.com/webhook/bbf53ad9-2820-4751-8ad1-6fb9a88966da", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Webhook error:", err);
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
