import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-large", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: message })
    });

    const data = await response.json();

    console.log("🧠 HF RAW RESPONSE:", JSON.stringify(data));

    const reply = data?.[0]?.generated_text || "Sorry, HuggingFace didn’t respond.";

    return NextResponse.json({ result: reply });
  } catch (err: any) {
    return NextResponse.json({ error: "HuggingFace API failed", detail: err.message });
  }
}
