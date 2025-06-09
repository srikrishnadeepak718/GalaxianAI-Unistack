export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-black text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">🌌 Welcome to Galaxian AI</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        GalaxianAI is the world’s first Unified AI Empire – a modular platform powering startups, digital citizens, governments, and creators. Built for automation. Designed for humanity.
      </p>
      <a
        href="https://github.com/srikrishnadeepak718/GalaxianAI-Unistack"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 font-semibold transition"
      >
        View GitHub Project
      </a>
    </main>
  );
}
