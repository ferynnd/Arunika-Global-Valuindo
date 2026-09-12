import React from 'react';

export default function ProjectExperienceSection() {
    const projects = [
        {
            title: '95% Net Profit Improvement',
            category: 'Financial Performance',
            desc: 'Berhasil meningkatkan laba bersih bisnis multi-cabang sekitar 95% dalam waktu kurang dari satu tahun.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            ),
        },
        {
            title: 'Holding Expansion',
            category: 'Corporate Restructuring',
            desc: 'Memimpin transformasi sebuah holding dari 1 entitas menjadi 3 anak perusahaan, termasuk perencanaan keuangan dan proses due diligence M&A.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
        },
        {
            title: '36-Account Cash Monitoring',
            category: 'Cash Flow Management',
            desc: 'Membangun cash tracing tool yang memantau pergerakan kas secara real-time pada 36 rekening perusahaan, sehingga meningkatkan visibilitas kas sebesar 100%.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            ),
        },
        {
            title: 'National-Scale CSR Impact Measurement',
            category: 'CSR & Social Impact',
            desc: 'Berpengalaman mengukur dampak program CSR menggunakan SROI pada lima perusahaan BUMN, termasuk PT Pertamina Lubricants, PT Kilang Pertamina Internasional RU VI Balongan, PT Taspen, PT Pegadaian, dan PT Pembangunan Jaya Ancol.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                </svg>
            ),
        },
        {
            title: 'Strategic Feasibility Study',
            category: 'Investment Analysis',
            desc: 'Terlibat dalam studi kelayakan bus listrik 12 meter PT INKA Multi Solusi Trading, termasuk investment analysis, cash-flow projection, NPV, IRR, ROI, PI, Payback Period, ARR, dan sensitivity analysis.',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-16 sm:py-24 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                    <span className="text-sm sm:text-base font-medium tracking-wide text-secondary block uppercase">
                        PORTTOFOLIO KAMI
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-tight mt-2">
                        Professional Achievements & Project Experience
                    </h2>
                    <p className="mt-4 text-sm text-gray-300 leading-relaxed tracking-wide">
                        Rekam jejak pengalaman dalam mendampingi berbagai entitas bisnis, BUMN, dan proyek strategis nasional untuk menciptakan nilai tambah yang berkelanjutan.
                    </p>
                </div>

                {/* Grid Cards */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((item, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            className="p-6 rounded-3xl md:rounded-2xl bg-stone-100 text-primary border border-stone-300 transition-all flex flex-col justify-between hover:shadow-xl"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-medium tracking-wide text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-semibold text-secondary mt-1 tracking-wider uppercase">
                                    {item.category}
                                </p>
                                <p className="text-xs font-light text-gray-600 mt-3 leading-relaxed tracking-wide">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}