export default function CivitixPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">Civitix</h1>
      <p className="text-xl italic mb-8">"Governments. Reinvented."</p>

      <section className="max-w-3xl text-gray-300 space-y-6">
        <p>
          Civitix is GalaxianAI’s revolutionary module for reimagining governance using AI.
          It provides every citizen with tools to navigate, interact with, and improve government systems—transparently and intelligently.
        </p>

        <ul className="list-disc ml-5">
          <li>✅ Ask-anything civic assistant</li>
          <li>📜 AI-generated RTI requests, form filling, and policy access</li>
          <li>💼 Real-time government scheme advisor</li>
          <li>⚖️ Legal assistant and dispute resolution</li>
          <li>🗳️ Transparent e-voting and decision dashboards</li>
        </ul>

        <p>
          Whether you're applying for a visa, filing a grievance, or tracking development budgets—Civitix is your AI-powered gateway to smarter, ethical, and more accessible governance.
        </p>

        <p className="mt-6 text-green-400 font-semibold">Coming Soon: Civitix API for NGOs, journalists, and legal watchdogs.</p>
      </section>
    </main>
  );
}
