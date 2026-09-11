import React from "react";

const defaultLogos = [
    { nama: "Agnycell", alt: "Agnycell", path: "/assets/clients/agnycell.webp" },
    { nama: "Elraya", alt: "Elraya", path: "/assets/clients/elraya.png" },
    { nama: "KDS", alt: "KDS", path: "/assets/clients/kds.png" },
    { nama: "MG", alt: "MG", path: "/assets/clients/mg.png" },
    { nama: "SLI", alt: "SLI", path: "/assets/clients/sli.png" },
    { nama: "Vexa", alt: "Vexa", path: "/assets/clients/vexa.png" },
];

export default function ClientMarquee({ logos = defaultLogos }) {
    return (
        <section className="py-8 border-y border-stone-200 bg-stone-100 overflow-hidden" data-aos="fade-in" data-aos-duration="800">
            {/* Wrapper luar sebagai pembatas area (masking) */}
            <div className="relative w-full overflow-hidden flex">
                
                {/* Track yang berjalan (animasi infinite -50%) */}
                <div className="animate-marquee flex items-center shrink-0">
                    
                    {/* SET 1 (Data Asli) */}
                    <div className="flex items-center shrink-0">
                        {logos.map((logo, index) => (
                            <div 
                                key={`set1-${index}`} 
                                className="flex items-center justify-center px-6 sm:px-10 w-36 sm:w-48 h-16 shrink-0"
                            >
                                <img
                                    src={logo.path}
                                    alt={logo.alt || logo.nama}
                                    title={logo.nama}
                                    className="max-h-8 sm:max-h-10 max-w-full w-auto object-contain mix-blend-difference grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    {/* SET 2 (Duplikat Persis untuk Loop Mulus) */}
                    <div className="flex items-center shrink-0" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <div 
                                key={`set2-${index}`} 
                                className="flex items-center justify-center px-6 sm:px-10 w-36 sm:w-48 h-16 shrink-0"
                            >
                                <img
                                    src={logo.path}
                                    alt={logo.alt || logo.nama}
                                    title={logo.nama}
                                    className="max-h-8 sm:max-h-10 max-w-full w-auto object-contain mix-blend-difference grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}