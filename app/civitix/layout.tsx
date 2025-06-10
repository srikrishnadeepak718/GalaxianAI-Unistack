export default function CivitixLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {children}
    </div>
  );
}

