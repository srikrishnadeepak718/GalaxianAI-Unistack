'use client';

import { useState } from 'react';

export default function CivicChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const res = await fetch('/api/civitix-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    console.log("HuggingFace RAW:", data);
    const botMessage = { role: 'assistant', content: data.generated_text || 'No response' };
    setMessages((prev) => [...prev, botMessage]);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">🧠 Ask Civitix</h1>
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-6 space-y-4">
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className={`p-3 rounded-md ${msg.role === 'user' ? 'bg-blue-800' : 'bg-gray-700'}`}>
              <strong>{msg.role === 'user' ? 'You' : 'Civitix AI'}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-gray-800 text-white p-3 rounded-lg border border-gray-700"
            placeholder="Ask about laws, government, rights..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

