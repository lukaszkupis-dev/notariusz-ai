import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, ExternalLink, PlayCircle, Mic, Link as LinkIcon } from 'lucide-react';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#2D2D2D] font-serif selection:bg-[#7A8C70]/20">
      {/* Nawigacja */}
      <nav className="p-6 flex justify-between items-center border-b border-[#7A8C70]/10 sticky top-0 bg-[#FDFCF7]/80 backdrop-blur-md z-50">
        <span className="text-xl font-semibold tracking-tight">Notariusz w świecie AI</span>
        <div className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.2em] text-[#7A8C70]">
          <a href="#wiedza" className="hover:opacity-60 transition-opacity">Baza wiedzy</a>
          <a href="#polecenia" className="hover:opacity-60 transition-opacity">Polecenia</a>
          <a href="#kurs" className="hover:opacity-60 transition-opacity">Kurs online</a>
          <a href="#" className="font-bold border-b border-[#7A8C70]">Zaloguj się</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto pt-32 pb-32 px-6">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-[120px] mb-12 leading-[0.85] tracking-tighter">
            Sztuka notarialna <br />
            <span className="italic text-[#7A8C70] font-light">spotyka</span> AI.
          </h1>
          
          <p className="text-2xl max-w-2xl mb-16 leading-relaxed opacity-90 font-light italic">
            Ekskluzywna przestrzeń dla nowoczesnych rejentów. Praktyczne narzędzia, 
            bezpieczne modele i społeczność definiująca przyszłość zawodu.
          </p>

          <button className="group flex items-center gap-4 bg-[#7A8C70] text-[#FDFCF7] px-10 py-5 rounded-full hover:bg-[#66755d] transition-all shadow-xl shadow-[#7A8C70]/20">
            Zacznij od kursu podstawowego
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
        </div>
      </main>

      {/* Główne Filary */}
      <section id="wiedza" className="grid md:grid-cols-3 border-t border-[#7A8C70]/20">
        <div className="p-16 border-r border-[#7A8C70]/20 hover:bg-[#7A8C70]/5 transition-colors group">
          <BookOpen className="mb-8 text-[#7A8C70] group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-3xl mb-6 font-light">Baza Wiedzy</h3>
          <p className="text-lg opacity-70 leading-relaxed">Wyselekcjonowane biblioteki promptów i instrukcji prawnych dostosowanych do polskiego systemu notarialnego.</p>
        </div>
        <div className="p-16 border-r border-[#7A8C70]/20 hover:bg-[#7A8C70]/5 transition-colors group">
          <GraduationCap className="mb-8 text-[#7A8C70] group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-3xl mb-6 font-light">Kurs Online</h3>
          <p className="text-lg opacity-70 leading-relaxed">Ścieżka edukacyjna: od pierwszego logowania w GPT po zaawansowaną analizę projektów aktów i ksiąg wieczystych.</p>
        </div>
        <div className="p-16 hover:bg-[#7A8C70]/5 transition-colors group">
          <ShieldCheck className="mb-8 text-[#7A8C70] group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-3xl mb-6 font-light">Bezpieczeństwo</h3>
          <p className="text-lg opacity-70 leading-relaxed">Gwarancja lokalizacji danych we Frankfurcie (UE) oraz instrukcje dotyczące anonimizacji danych wrażliwych.</p>
        </div>
      </section>

      {/* NOWA SEKCJA: Kuratorskie Polecenia */}
      <section id="polecenia" className="bg-[#7A8C70]/10 py-32 px-6 border-t border-[#7A8C70]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[50px] mb-20 tracking-tighter leading-none">
            Kuratorska selekcja <br /><span className="text-[#7A8C70] italic">materiałów</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Linki i Narzędzia */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-[#7A8C70]">
                <LinkIcon size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Narzędzia i Linki</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "OpenAI: Prywatne instrukcje", desc: "Jak skonfigurować profil pod zawód notariusza." },
                  { title: "Anthropic Claude: Analiza aktów", desc: "Model o najlepszym zrozumieniu polskiej składni." },
                  { title: "DeepL Write: Korekta pism", desc: "Dopracowanie stylu i interpunkcji w projektach aktów." }
                ].map((item, i) => (
                  <li key={i} className="group cursor-pointer">
                    <h5 className="font-semibold group-hover:text-[#7A8C70] transition-colors flex items-center gap-2">
                      {item.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h5>
                    <p className="text-sm opacity-60 mt-1 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video / Filmy */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-[#7A8C70]">
                <PlayCircle size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Wideo i Tutoriale</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "AI w polskiej kancelarii", desc: "Webinar: Czy i jak notariusz może legalnie korzystać z LLM." },
                  { title: "Prompt Engineering dla prawników", desc: "15 minut o tym, jak pytać, by dostawać poprawne odpowiedzi." },
                  { title: "Przegląd modeli 2024", desc: "Który model najlepiej radzi sobie z polskim językiem prawniczym." }
                ].map((item, i) => (
                  <li key={i} className="group cursor-pointer">
                    <h5 className="font-semibold group-hover:text-[#7A8C70] transition-colors flex items-center gap-2">
                      {item.title} <PlayCircle size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h5>
                    <p className="text-sm opacity-60 mt-1 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Podcasty */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-[#7A8C70]">
                <Mic size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Podcasty / Audio</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "LegalTech po polsku", desc: "Odcinek o cyfryzacji notariatu i nowych technologiach." },
                  { title: "The AI Breakdown", desc: "Codzienna porcja najważniejszych newsów ze świata AI (EN)." },
                  { title: "Etyka algorytmów", desc: "Rozmowa o odpowiedzialności za błędy generowane przez modele." }
                ].map((item, i) => (
                  <li key={i} className="group cursor-pointer">
                    <h5 className="font-semibold group-hover:text-[#7A8C70] transition-colors flex items-center gap-2">
                      {item.title} <Mic size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h5>
                    <p className="text-sm opacity-60 mt-1 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-16 border-t border-[#7A8C70]/20 text-center opacity-50 text-sm tracking-widest uppercase">
        © 2024 Notariusz w świecie AI — Wszelkie prawa zastrzeżone
      </footer>
    </div>
  );
}
