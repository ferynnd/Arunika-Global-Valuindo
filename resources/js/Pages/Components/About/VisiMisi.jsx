import React from 'react';
import HeaderSection from '@/Components/HeaderSection';


export default function VisionMissionSection() {
  const missions = [
    "Membantu klien menghasilkan perbaikan yang sesuai dengan karakter dan kebutuhan bisnisnya.",
    "Menghadirkan solusi yang menyeluruh, substansial, dan berkelanjutan.",
    "Menggunakan metode yang relevan dengan permasalahan dan perkembangan zaman.",
    "Membangun kemampuan klien agar mampu melakukan continuous improvement.",
    "Menciptakan nilai positif bagi perusahaan, stakeholders, dan lingkungan."
  ];

  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Visi (Left Column - 5 cols) */}
          <div className="lg:col-span-5 bg-primary text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between ">
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Visi Kami
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed italic border-l-2 border-secondary pl-4">
                "Menciptakan nilai dan perubahan positif yang berkelanjutan."
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <span className="text-xs text-slate-300 font-medium">
                Arunika Global Valuindo
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-background p-8 sm:p-10 rounded-3xl border border-stone-200 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Mission
                  </span>
                  <h3 className="text-2xl font-extrabold text-primary">
                    Misi Kami
                  </h3>
                </div>
              </div>

              {/* List Misi */}
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3.5 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-secondary flex items-center justify-center font-bold text-xs transition-colors mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {mission}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}