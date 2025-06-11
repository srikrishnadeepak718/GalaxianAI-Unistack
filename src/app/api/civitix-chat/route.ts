import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const payload = {
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are Civitix — an AI trained on civic, governance, policy, and law data across all countries. Provide factual, legal, and helpful answers about rights, government services, laws, and public information globally.',
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.6,
  };

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await openaiRes.json();
  const response = data.choices?.[0]?.message?.content || 'Sorry, I couldn’t generate a response.';

  return NextResponse.json({ response });
}

