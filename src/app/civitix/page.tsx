export default function CivitixPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">🌐 Civitix – The Civic AI System</h1>
      <p className="text-lg text-gray-700">
        Civitix is GalaxianAI's civic intelligence engine – designed to power decision-making, digital identity, e-governance, and AI-regulated public systems.
      </p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">⚙️ Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Citizen profiles and verification systems</li>
          <li>AI-based public service feedback & analysis</li>
          <li>Smart governance simulation</li>
          <li>Open civic data dashboards</li>
        </ul>
      </section>
      <div className="text-center mt-12">
  <a
    href="/civitix/chat"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
  >
    🧠 Ask AI about countries, laws, citizenships etc
  </a>
</div>

    </main>
  );
}

