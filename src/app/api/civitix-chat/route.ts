import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const payload = {
    model: 'gpt-4o', // use 'gpt-4o' or fallback to 'gpt-3.5-turbo' if needed
    messages: [
      {
        role: 'system',
        content:
          'You are Civitix — an AI trained on civic, governance, law, and public policy for all countries. Answer queries about laws, services, and citizenship globally.',
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.7,
  };

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await openaiRes.json();

    if (data?.choices?.[0]?.message?.content) {
      return NextResponse.json({ response: data.choices[0].message.content });
    } else {
      console.error('OpenAI API Error:', data);
      return NextResponse.json({
        response: '⚠️ Could not generate a response. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({
      response: '🚨 Server error. Please check your API key or network.',
    });
  }
}
