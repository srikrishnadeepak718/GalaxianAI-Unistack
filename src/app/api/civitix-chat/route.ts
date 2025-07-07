import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://api-inference.huggingface.co/models/bigcode/starcoderbase", {
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

  // Fix this line based on what the model returns
  if (Array.isArray(result) && result[0]?.generated_text) {
    return NextResponse.json({ generated_text: result[0].generated_text });
  }

  return NextResponse.json({ generated_text: "No response from model." });
}
