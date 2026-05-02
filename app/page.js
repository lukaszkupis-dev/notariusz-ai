import { ArrowRight, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#2D2D2D] font-serif">
      {/* Nawigacja */}
      <nav className="p-6 flex justify-between items-center border-b border-[#7A8C70]/10">
        <span className="text-xl font-semibold tracking-tight">Notariusz w świecie AI</span>
        <div className="space-x-8 text-sm uppercase tracking-widest text-[#7A8C70]">
          <a href="#" className="hover:opacity-70">Baza wiedzy</a>
          <a href="#" className="hover:opacity-70">Kurs online</a>
          <a href="#" className="hover:opacity-70 font-bold">Zaloguj się</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-7xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
          Sztuka notarialna <br />
          <span className="italic text-[#7A8C70]">spotyka</span> AI.
        </h1>
        
        <p className="text-xl max-w-xl mb-12 leading-relaxed opacity-80">
          Ekskluzywna przestrzeń dla nowoczesnych rejentów. Praktyczne narzędzia, 
          bezpieczne modele i społeczność, która definiuje przyszłość zawodu.
        </p>

        <button className="group flex items-center gap-3 bg-[#7A8C70] text-white px-8 py-4 rounded-full hover:bg-[#66755d] transition-all">
          Zacznij od kursu
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </main>

      {/* Sekcje funkcjonalne */}
      <section className="grid md:grid-cols-3 border-t border-[#7A8C70]/20">
        <div className="p-12 border-r border-[#7A8C70]/20 hover:bg-[#7A8C70]/5 transition-colors">
          <BookOpen className="mb-6 text-[#7A8C70]" size={32} />
          <h3 className="text-2xl mb-4 text-[#7A8C70]">Baza Wiedzy</h3>
          <p className="opacity-70">Wyselekcjonowane promptu i instrukcje przygotowane pod polski system prawny.</p>
        </div>
        <div className="p-12 border-r border-[#7A8C70]/20 hover:bg-[#7A8C70]/5 transition-colors">
          <GraduationCap className="mb-6 text-[#7A8C70]" size={32} />
          <h3 className="text-2xl mb-4 text-[#7A8C70]">Kurs Online</h3>
          <p className="opacity-70">Darmowa ścieżka edukacyjna: od podstaw GPT po zaawansowaną analizę aktów.</p>
        </div>
        <div className="p-12 hover:bg-[#7A8C70]/5 transition-colors">
          <ShieldCheck className="mb-6 text-[#7A8C70]" size={32} />
          <h3 className="text-2xl mb-4 text-[#7A8C70]">Bezpieczeństwo</h3>
          <p className="opacity-70">Gwarancja przetwarzania danych wewnątrz UE (Frankfurt) zgodnie z RODO.</p>
        </div>
      </section>
    </div>
  );
}
