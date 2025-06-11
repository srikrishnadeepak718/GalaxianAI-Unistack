import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const payload = {
    model: 'gpt-3.5-turbo', // Use basic safe model
    messages: [
      {
        role: 'system',
        content: 'You are a civic AI. Respond with real info on global citizenship, laws, services.',
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

    console.log('🧾 OpenAI RAW RESPONSE:', JSON.stringify(data, null, 2));

    const content = data?.choices?.[0]?.message?.content;

    if (content) {
      return NextResponse.json({ response: content });
    } else {
      return NextResponse.json({
        response: `⚠️ OpenAI response was invalid:\n${JSON.stringify(data, null, 2)}`,
      });
    }
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json({
      response: '❌ API request failed completely.',
    });
  }
}
