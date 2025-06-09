export default function Home() {
  const tools = [
    { name: "Civitix", desc: "AI Governance & Public Services" },
    { name: "Verdai", desc: "Green Points & Eco Automation" },
    { name: "Work.ai", desc: "Jobs, Freelance & AI Taskboard" },
    { name: "Stratix", desc: "Startup Builder + Pitch AI" },
    { name: "MindRack", desc: "LLM Workspace / Agent Network" },
    { name: "Aiden", desc: "AI Coaching, Counseling & Support" },
    { name: "Vytara", desc: "AI Healthcare System for All" },
    { name: "Galaxi", desc: "Global Digital Currency Hub" },
    { name: "Dharmatix", desc: "Karma, Ethics, Prophecies by AI" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">🚀 Galaxian AI Unistack</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-sm text-gray-300">{tool.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
