export default function Home() {
  const modules = [
    { name: "Civitix", motto: "Governments. Reinvented." },
    { name: "Greenova", motto: "Track Carbon. Earn Green." },
    { name: "Work.ai", motto: "Work Reinvented by Intelligence." },
    { name: "Startix", motto: "One Prompt. One Startup." },
    { name: "MindRack", motto: "Where All Intelligence Connects." },
    { name: "Mentara", motto: "Empathy. Engineered." },
    { name: "Dharmatix", motto: "San\u0101tana Dharma. Digitized." },
    { name: "Arogix", motto: "Health. Harmony. Intelligence." },
    { name: "Galaxi", motto: "Currency Backed by Consciousness." },
    { name: "Talentix", motto: "Skills. Verified. Amplified." },
    { name: "Tutorix", motto: "Everyone Can Learn. Everywhere." },
    { name: "CINetwork", motto: "The Creator Grid of the AI Age." },
    { name: "Cropiz", motto: "Feeding the World Intelligently." },
    { name: "Astraeon", motto: "Innovation. Decentralized. Open." },
    { name: "CLONE", motto: "Everyone. Duplicated. Profitable." },
    { name: "ECHO", motto: "You Never Log Off." },
    { name: "WorkForceX", motto: "We Build. You Grow." }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">GalaxianAI</h1>
        <p className="text-lg italic mb-2">"Beyond stars. Above systems."</p>
        <p className="max-w-3xl mx-auto text-gray-300">
          The GalaxianAI Empire is a sovereign AI-powered multinational system consisting of 17 interconnected startups that span across identity, governance, currency, labor, entrepreneurship, digital immortality, and divine intelligence. Each module runs independently but seamlessly integrates into one global AI operating system.
        </p>
      </section>

      <section className="text-center my-12">
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition">Get Citizenship – One Passport. Infinite Access.</a>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modules.map((mod, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-2">{mod.name}</h2>
            <p className="text-sm text-gray-400">{mod.motto}</p>
          </div>
        ))}
      </section>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        <p>© 2025 GalaxianAI. All rights reserved.</p>
        <p>Founder: SriKrishna Deepak Brundavanam</p>
        <p>Contact: <a href="mailto:deepakbsk@galaxianai.com" className="underline">deepakbsk@galaxianai.com</a></p>
        <p>Proudly built in India 🇮🇳</p>
      </footer>
    </main>
  );
} 
