// import React from "react";
// import HeaderSection from "@/Components/HeaderSection";
// import CustomButton from "@/Components/CustomButton";

// const defaultWhyUsItems = [
//     {
//         title: "C — Character: Integritas dalam Setiap Keputusan",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"></path>
//             </svg>
//         ),
//     },
//     {
//         title: "E — Environment: Dampak Positif Berkelanjutan",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
//                 <polyline points="17 6 23 6 23 12"></polyline>
//             </svg>
//         ),
//     },
//     {
//         title: "O — Organization: Organisasi Kolaboratif & Adaptif",
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//             </svg>
//         ),
//     },
// ];

// export default function WhyChooseUs({
//     tagline = "Keunggulan Kami",
//     title = "Character, Environment, & Organization — Fondasi Utama Arunika",
//     showButton = false,
//     buttonText = "Tentang Kami",
//     buttonHref = "/layanan",
//     buttonBgColor = "bg-secondary",
//     buttonTextColor = "text-white font-medium",
//     buttonSize = "md",
//     onButtonClick,
//     items = defaultWhyUsItems,
//     imageSrc = "/assets/wcu.webp",
//     imageAlt = "Kolaborasi tim profesional PT Arunika Global Valuindo",
// }) {
//     return (
//         <section className="py-16 sm:py-24">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//                     {/* Left: HeaderSection & 2-Column Checklist */}
//                     <div className="lg:col-span-6 space-y-8" data-aos="fade-right" data-aos-duration="900">
//                         <HeaderSection
//                             tagline={tagline}
//                             title={title}
//                             showButton={showButton}
//                             buttonText={buttonText}
//                             buttonHref={buttonHref}
//                             buttonBgColor={buttonBgColor}
//                             buttonTextColor={buttonTextColor}
//                             buttonSize={buttonSize}
//                             onButtonClick={onButtonClick}
//                         />

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
//                             {items.map((srv, index) => (
//                                 <div key={index} className="flex items-center gap-3">
//                                     <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
//                                         {srv.icon}
//                                     </div>
//                                     <span className="font-body text-xs md:text-sm font-medium tracking-wide text-gray-600">
//                                         {srv.title}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="900">
//                         <div className="relative rounded-2xl md:rounded-2xl overflow-hidden shadow-sm">
//                             <img
//                                 src={imageSrc}
//                                 alt={imageAlt}
//                                 className="w-full aspect-4/3 object-cover object-center"
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

import React from "react";
import HeaderSection from "@/Components/HeaderSection";
import CustomButton from "@/Components/CustomButton";

const defaultWhyUsItems = [
    {
        title: "C — Character",
        subtitle: "Integritas dalam Setiap Keputusan",
        desc: "Kami menjunjung tinggi karakter, integritas, profesionalisme, independensi, kerahasiaan, dan kepentingan klien. Setiap pekerjaan dilakukan dengan standar etika profesional serta komitmen untuk memberikan layanan terbaik.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
            </svg>
        ),
    },
    {
        title: "E — Environment",
        subtitle: "Dampak Positif Berkelanjutan",
        desc: "Kami percaya bahwa pertumbuhan bisnis harus berjalan bersama tanggung jawab terhadap lingkungan dan stakeholders. Arunika berupaya membantu klien menciptakan sustainable value dan meningkatkan dampak positif terhadap lingkungan.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
    {
        title: "O — Organization",
        subtitle: "Organisasi Kolaboratif & Adaptif",
        desc: "Kami membangun organisasi yang adaptif, kolaboratif, bertanggung jawab, inovatif, dan terus berkembang. Kami juga mendorong pengembangan kemampuan internal serta hubungan kerja yang baik dan berkelanjutan dengan klien dan stakeholders.",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
];

export default function WhyChooseUs({
    tagline = "MENGAPA MEMILIH KAMI",
    title = "Character, Environment, & Organization — Fondasi Utama Arunika",
    showButton = false,
    buttonText = "Tentang Kami",
    buttonHref = "/layanan",
    buttonBgColor = "bg-secondary",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    items = defaultWhyUsItems,
    imageSrc = "/assets/wcu.webp",
    imageAlt = "Tim profesional PT Arunika Global Valuindo",
}) {
    return (
        <section className="py-20 sm:py-28relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    <div className="lg:col-span-5 h-full lg:sticky space-y-6" data-aos="fade-right" data-aos-duration="900">
                        <HeaderSection
                            tagline={tagline}
                            title={title}
                            showButton={showButton}
                            buttonText={buttonText}
                        />

                        <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-lg bg-stone-50 mt-8 hidden lg:block">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background border border-stone-200 transition-all duration-300 flex items-start gap-5 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary text-white border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/90 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg sm:text-xl font-normal tracking-wide text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-medium text-text tracking-wider uppercase">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-xs sm:text-sm font-light text-gray-600 mt-2 leading-relaxed tracking-wide">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Mobile Image Fallback */}
                        <div className="block lg:hidden space-y-6 pt-6">
                            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-50">
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="w-full h-72 object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}