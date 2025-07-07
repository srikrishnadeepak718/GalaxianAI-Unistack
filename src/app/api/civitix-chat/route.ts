import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-large", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message,
      }),
    });

    const result = await response.json();
    console.log("🧠 HF RAW RESPONSE:", JSON.stringify(result, null, 2));

    // Case 1: If Hugging Face returns generated_text directly
    if (Array.isArray(result) && result[0]?.generated_text) {
      return NextResponse.json({ generated_text: result[0].generated_text });
    }

    // Case 2: If it's a text generation error (e.g. model loading, quota, etc.)
    if (result.error) {
      return NextResponse.json({ generated_text: `Model Error: ${result.error}` });
    }

    // Catch-all fallback
    return NextResponse.json({ generated_text: "No valid response from model." });

  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ generated_text: "Server Error. Try again later." });
  }
}
