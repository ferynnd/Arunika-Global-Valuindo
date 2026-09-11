
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeaderSection from '@/Components/HeaderSection';
import PageHeader from '@/Components/PageHeader';

export default function PrivacyPolicy({ auth }) {

    const sections = [
        {
            title: '1. Informasi yang Kami Kumpulkan',
            body: 'Kami mengumpulkan data pribadi yang Anda berikan secara langsung melalui formulir kontak, surel, atau layanan pesan resmi kami. Data ini mencakup nama lengkap, alamat surel, nomor telepon, nama perusahaan atau organisasi, serta rincian pesan konsultasi yang Anda kirimkan.',
        },
        {
            title: '2. Tujuan Penggunaan Data',
            body: 'Data pribadi Anda digunakan khusus untuk merespons permintaan konsultasi, menyediakan layanan advisory keuangan dan bisnis, serta mengelola komunikasi kerja sama. Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak mana pun.',
        },
        {
            title: '3. Dasar Hukum dan Kerahasiaan',
            body: 'Pemrosesan data pribadi dilakukan berdasarkan persetujuan Anda saat menghubungi kami dan demi kepentingan pelaksanaan analisis layanan yang diminta. Seluruh tim kami terikat oleh kewajiban menjaga kerahasiaan informasi sesuai dengan standar etika profesional.',
        },
        {
            title: '4. Keamanan Data Pribadi',
            body: 'Kami menerapkan perlindungan teknis dan administratif yang memadai untuk mencegah akses tanpa izin, kehilangan, atau pengungkapan data pribadi Anda secara tidak sah.',
        },
        {
            title: '5. Penggunaan Cookie',
            body: 'Situs web ini menggunakan cookie esensial untuk mengoptimalkan navigasi dan fungsi situs. Anda dapat mengatur browser Anda untuk menolak cookie, namun beberapa fitur situs mungkin tidak berfungsi secara maksimal.',
        },
        {
            title: '6. Hak Anda atas Data Pribadi',
            body: 'Sesuai dengan ketentuan perlindungan data yang berlaku, Anda berhak untuk mengakses, memperbarui, membatasi pemrosesan, atau meminta penghapusan data pribadi Anda dari sistem kami kapan saja.',
        },
        {
            title: '7. Penyimpanan dan Pembaruan Kebijakan',
            body: 'Data pribadi disimpan hanya selama diperlukan untuk memenuhi tujuan pengumpulannya atau sesuai dengan ketentuan hukum yang berlaku. Kebijakan privasi ini dapat diperbarui secara berkala dan pembaruan akan dipublikasikan langsung di halaman ini.',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-600 font-['Work_Sans'] font-normal tracking-wide antialiased selection:bg-secondary selection:text-primary">
            <Header auth={auth} title="Kebijakan Privasi - PT Arunika Global Valuindo" activePage="privacy" />
            <PageHeader 
                title="Kebijakan Privasi" 
                breadcrumb={[
                    { label: 'Home', href: '/' }, 
                    { label: 'Kebijakan Privasi', href: '/privacypolicy' }
                ]} 
            />

            {/* KONTEN UTAMA */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <HeaderSection
                            tagline="Legal & Privasi"
                            title="Kebijakan Privasi PT Arunika Global Valuindo"
                            showButton={false}
                        />
                        <p className="mt-4 text-xs font-medium text-secondary tracking-wide uppercase">
                            Terakhir diperbarui: 11 September 2026
                        </p>

                        <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed tracking-wide">
                            PT Arunika Global Valuindo ("Kami") berkomitmen untuk melindungi dan menghormati hak privasi Anda. Kebijakan Privasi ini menjelaskan tata cara pengumpulan, penggunaan, dan perlindungan data pribadi Anda saat mengakses situs web ini.
                        </p>

                        <div className="mt-12 space-y-6">
                            {sections.map((s, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-6 sm:p-8 rounded-3xl md:rounded-2xl bg-stone-100 text-primary border border-stone-300 transition-all flex flex-col justify-between"
                                >
                                    <h3 className="text-lg font-medium tracking-wide text-primary mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-normal text-gray-600 leading-relaxed tracking-wide">
                                        {s.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl md:rounded-2xl bg-primary text-white space-y-3">
                            <h3 className="text-xl font-medium tracking-wide text-white">Hubungi Kami</h3>
                            <p className="text-xs sm:text-sm font-light leading-relaxed tracking-wide text-gray-300">
                                Jika Anda memiliki pertanyaan atau permintaan terkait pengolahan data pribadi Anda, silakan hubungi kami melalui surel di{' '}
                                <a href="mailto:info@arunikaglobalvaluindo.co.id" className="text-secondary underline hover:text-secondary/80 font-medium transition-colors">
                                    info@arunikaglobalvaluindo.co.id
                                </a>{' '}
                                atau nomor WhatsApp resmi kami di{' '}
                                <a href="https://wa.me/6282331144447" className="text-secondary underline hover:text-secondary/80 font-medium transition-colors">
                                    082331144447
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}