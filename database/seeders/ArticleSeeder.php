<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\User;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        // Ambil user penulis (admin/superadmin)
        $author = User::first();

        if (!$author) {
            $this->command->warn('Tidak ada user ditemukan. Jalankan DatabaseSeeder terlebih dahulu.');
            return;
        }

        // Buat atau pastikan kategori tersedia
        $categories = [
            'valuasi-bisnis'     => 'Valuasi Bisnis',
            'strategi-korporasi' => 'Strategi Korporasi',
            'keuangan'           => 'Keuangan',
            'sustainability'     => 'Sustainability & ESG',
            'regulasi'           => 'Regulasi & Hukum',
        ];

        $catModels = [];
        foreach ($categories as $slug => $name) {
            $catModels[$slug] = ArticleCategory::firstOrCreate(
                ['slug' => $slug],
                ['name' => $name]
            );
        }

        $articles = [
            // ─── VALUASI BISNIS ───────────────────────────────────────────────
            [
                'title'            => 'Metode Discounted Cash Flow (DCF): Panduan Lengkap untuk Valuasi Bisnis',
                'slug'             => 'metode-dcf-panduan-lengkap-valuasi-bisnis',
                'excerpt'          => 'Metode DCF adalah salah satu pendekatan valuasi paling komprehensif. Pelajari cara menerapkan DCF secara tepat untuk menilai nilai wajar sebuah bisnis.',
                'content'          => '<p>Metode <strong>Discounted Cash Flow (DCF)</strong> merupakan teknik valuasi paling banyak digunakan dalam industri keuangan dan investasi. Pendekatan ini mengestimasi nilai suatu aset atau bisnis berdasarkan ekspektasi arus kas masa depan yang didiskontokan ke nilai kini.</p><h2>Mengapa DCF Penting?</h2><p>Dalam transaksi M&A, IPO, maupun Purchase Price Allocation (PPA), DCF menjadi standar acuan yang diterima luas oleh investor, regulator, dan auditor internasional.</p><h2>Komponen Utama DCF</h2><ul><li><strong>Free Cash Flow (FCF):</strong> Arus kas bersih setelah kebutuhan modal kerja dan belanja modal (capex).</li><li><strong>Discount Rate (WACC):</strong> Biaya modal rata-rata tertimbang perusahaan.</li><li><strong>Terminal Value:</strong> Nilai bisnis di luar periode proyeksi eksplisit.</li></ul><h2>Langkah Penerapan DCF</h2><ol><li>Analisis historis kinerja keuangan minimal 3-5 tahun terakhir.</li><li>Proyeksikan arus kas bebas selama 5-10 tahun ke depan.</li><li>Hitung WACC menggunakan data pasar terkini.</li><li>Diskonto seluruh FCF dan Terminal Value ke nilai kini.</li><li>Lakukan sensitivitas analisis terhadap variabel kritis.</li></ol>',
                'category_slug'    => 'valuasi-bisnis',
                'status'           => 'published',
                'published_at'     => '2026-09-06 09:00:00',
                'tags'             => ['DCF', 'Valuasi', 'Investasi', 'WACC'],
                'meta_title'       => 'Metode DCF: Panduan Lengkap Valuasi Bisnis - Arunika',
                'meta_description' => 'Pelajari metode DCF secara lengkap untuk valuasi bisnis yang akurat dari konsultan Arunika Global Valuindo.',
                'meta_keywords'    => 'DCF, valuasi bisnis, discounted cash flow, WACC',
            ],
            [
                'title'            => 'Penilaian Aset Tidak Berwujud: Merek, Paten, dan Goodwill',
                'slug'             => 'penilaian-aset-tidak-berwujud-merek-paten-goodwill',
                'excerpt'          => 'Aset tidak berwujud seperti merek dagang, paten, dan goodwill seringkali menjadi komponen nilai terbesar sebuah perusahaan modern. Bagaimana cara menilainya secara tepat?',
                'content'          => '<p>Dalam era ekonomi berbasis pengetahuan, <strong>aset tidak berwujud (intangible assets)</strong> kerap bernilai jauh lebih besar dibandingkan aset fisik perusahaan.</p><h2>Jenis-Jenis Aset Tidak Berwujud</h2><ul><li><strong>Marketing-related:</strong> Merek dagang, nama domain, perjanjian non-kompetisi.</li><li><strong>Customer-related:</strong> Daftar pelanggan, kontrak pelanggan.</li><li><strong>Technology-related:</strong> Paten, trade secret, software kepemilikan.</li><li><strong>Goodwill:</strong> Nilai residual yang tidak dapat diidentifikasi secara terpisah.</li></ul><h2>Metode Penilaian Intangible Assets</h2><h3>Relief from Royalty Method</h3><p>Estimasi nilai berdasarkan royalti hipotetis yang dihemat karena perusahaan memiliki aset tersebut, bukan menyewanya dari pihak lain.</p><h3>Excess Earnings Method</h3><p>Mengisolasi kontribusi aset tidak berwujud tertentu terhadap arus kas perusahaan, setelah memperhitungkan kontribusi aset lain.</p><h3>With and Without Method</h3><p>Membandingkan nilai perusahaan dengan dan tanpa keberadaan aset. Selisihnya merupakan nilai aset yang dinilai.</p>',
                'category_slug'    => 'valuasi-bisnis',
                'status'           => 'published',
                'published_at'     => '2026-08-30 09:00:00',
                'tags'             => ['Intangible Assets', 'Goodwill', 'Merek', 'Paten', 'PSAK 19'],
                'meta_title'       => 'Penilaian Aset Tidak Berwujud: Merek, Paten dan Goodwill',
                'meta_description' => 'Panduan penilaian aset tidak berwujud termasuk merek dagang, paten, dan goodwill oleh penilai bersertifikat Arunika.',
                'meta_keywords'    => 'aset tidak berwujud, goodwill, merek dagang, paten, PSAK 19',
            ],
            [
                'title'            => 'Tantangan Valuasi Aset Digital di Era Transformasi Teknologi',
                'slug'             => 'tantangan-valuasi-aset-digital-era-transformasi',
                'excerpt'          => 'Cryptocurrency, NFT, platform digital, dan data sebagai aset menimbulkan tantangan baru dalam dunia penilaian. Bagaimana pendekatan terbaik untuk menilainya?',
                'content'          => '<p>Perkembangan pesat teknologi digital memunculkan kelas aset baru yang belum memiliki metodologi penilaian yang mapan. Dari <strong>cryptocurrency</strong>, token digital, hingga platform SaaS dan data pelanggan, penilai aset profesional dihadapkan pada kompleksitas yang belum pernah ada sebelumnya.</p><h2>Karakteristik Unik Aset Digital</h2><ul><li>Volatilitas nilai yang ekstrem</li><li>Kurangnya regulasi dan standar akuntansi yang jelas</li><li>Sulitnya menentukan tingkat diskonto yang tepat</li><li>Risiko teknologi dan obsolescence yang cepat</li><li>Ketergantungan pada ekosistem dan network effect</li></ul><h2>Pendekatan Penilaian yang Mulai Digunakan</h2><ul><li><strong>Token Velocity Model:</strong> Untuk cryptocurrency berbasis utility token.</li><li><strong>NVT Ratio:</strong> Analogi P/E ratio untuk aset kripto.</li><li><strong>SaaS Valuation Multiples:</strong> Revenue Multiple dan ARR Multiple untuk platform digital.</li><li><strong>Data Valuation:</strong> Menilai database pelanggan berdasarkan Customer Lifetime Value (CLV).</li></ul>',
                'category_slug'    => 'valuasi-bisnis',
                'status'           => 'published',
                'published_at'     => '2026-08-22 09:00:00',
                'tags'             => ['Aset Digital', 'Cryptocurrency', 'SaaS', 'Transformasi Digital'],
                'meta_title'       => 'Tantangan Valuasi Aset Digital di Era Transformasi Teknologi',
                'meta_description' => 'Memahami kompleksitas penilaian aset digital termasuk cryptocurrency, platform SaaS, dan data.',
                'meta_keywords'    => 'valuasi aset digital, cryptocurrency, SaaS valuation, transformasi digital',
            ],

            // ─── STRATEGI KORPORASI ───────────────────────────────────────────
            [
                'title'            => 'Feasibility Study yang Efektif: Dari Perencanaan hingga Eksekusi',
                'slug'             => 'feasibility-study-efektif-perencanaan-hingga-eksekusi',
                'excerpt'          => 'Studi kelayakan bisnis yang baik adalah fondasi keputusan investasi yang kokoh. Pelajari komponen kritis dan metodologi terbaik dalam menyusun feasibility study.',
                'content'          => '<p>Sebelum menggelontorkan modal besar ke sebuah proyek, perusahaan memerlukan <strong>studi kelayakan (feasibility study)</strong> yang komprehensif dan objektif.</p><h2>Lima Dimensi Kelayakan yang Wajib Dianalisis</h2><h3>1. Kelayakan Teknis</h3><p>Mengkaji apakah teknologi, infrastruktur, dan SDM yang dibutuhkan tersedia dan dapat diperoleh.</p><h3>2. Kelayakan Pasar</h3><p>Analisis mendalam terhadap Total Addressable Market, tren demand, kompetitor, dan strategi penetrasi pasar.</p><h3>3. Kelayakan Finansial</h3><p>Pemodelan keuangan proyeksi 5-10 tahun meliputi analisis NPV, IRR, Payback Period, dan Break-Even Point.</p><h3>4. Kelayakan Hukum dan Regulasi</h3><p>Verifikasi kepatuhan terhadap regulasi yang berlaku, persyaratan perizinan, dan implikasi perpajakan.</p><h3>5. Kelayakan Organisasional</h3><p>Penilaian kesiapan organisasi, struktur governance, dan kebutuhan pengembangan kapabilitas SDM.</p>',
                'category_slug'    => 'strategi-korporasi',
                'status'           => 'published',
                'published_at'     => '2026-09-03 09:00:00',
                'tags'             => ['Feasibility Study', 'Investasi', 'NPV', 'IRR', 'Studi Kelayakan'],
                'meta_title'       => 'Feasibility Study yang Efektif: Panduan Komprehensif',
                'meta_description' => 'Panduan lengkap menyusun studi kelayakan bisnis mencakup analisis teknis, pasar, finansial, hukum, dan organisasional.',
                'meta_keywords'    => 'feasibility study, studi kelayakan, NPV, IRR, analisis investasi',
            ],
            [
                'title'            => 'Due Diligence dalam Transaksi Merger dan Akuisisi: Apa yang Harus Diperiksa?',
                'slug'             => 'due-diligence-merger-akuisisi-panduan',
                'excerpt'          => 'Due diligence yang komprehensif adalah kunci kesuksesan transaksi M&A. Pelajari aspek-aspek kritis yang wajib diperiksa sebelum menutup kesepakatan.',
                'content'          => '<p><strong>Due diligence (uji tuntas)</strong> dalam M&A adalah proses investigasi menyeluruh terhadap target perusahaan sebelum transaksi diselesaikan.</p><h2>Dimensi Due Diligence yang Komprehensif</h2><h3>Financial Due Diligence</h3><p>Analisis mendalam terhadap laporan keuangan historis, kualitas laba, working capital normalization, dan contingent liabilities.</p><h3>Commercial Due Diligence</h3><p>Validasi independen atas asumsi pertumbuhan pasar, posisi kompetitif, dan kualitas portofolio pelanggan.</p><h3>Legal Due Diligence</h3><p>Pemeriksaan status korporasi, kepatuhan regulasi, sengketa hukum, dan kekayaan intelektual.</p><h3>Operational Due Diligence</h3><p>Penilaian efisiensi operasional, kualitas manajemen, dan identifikasi potensi sinergi pasca-akuisisi.</p>',
                'category_slug'    => 'strategi-korporasi',
                'status'           => 'published',
                'published_at'     => '2026-08-20 09:00:00',
                'tags'             => ['Due Diligence', 'M&A', 'Merger', 'Akuisisi', 'Quality of Earnings'],
                'meta_title'       => 'Due Diligence M&A: Panduan Lengkap untuk Transaksi Sukses',
                'meta_description' => 'Panduan komprehensif due diligence dalam transaksi merger dan akuisisi mencakup aspek keuangan, komersial, hukum, dan operasional.',
                'meta_keywords'    => 'due diligence, merger akuisisi, M&A, quality of earnings, uji tuntas',
            ],
            [
                'title'            => 'Strategi Restrukturisasi Keuangan Korporasi di Tengah Tekanan Ekonomi',
                'slug'             => 'strategi-restrukturisasi-keuangan-korporasi',
                'excerpt'          => 'Restrukturisasi keuangan adalah transformasi menyeluruh bisnis model untuk menciptakan value yang berkelanjutan, bukan sekadar merestrukturisasi utang.',
                'content'          => '<p>Di tengah ketidakpastian ekonomi global, banyak perusahaan menghadapi tekanan likuiditas. <strong>Restrukturisasi keuangan</strong> menjadi solusi strategis yang perlu dipertimbangkan secara proaktif.</p><h2>Kapan Restrukturisasi Diperlukan?</h2><ul><li>Debt Service Coverage Ratio (DSCR) di bawah 1x secara berkelanjutan</li><li>Tekanan likuiditas akibat mismatch antara aset dan kewajiban</li><li>Perubahan signifikan dalam model bisnis atau industri</li><li>Kebutuhan pendanaan baru yang tidak dapat dipenuhi secara konvensional</li></ul><h2>Opsi Restrukturisasi</h2><h3>Restrukturisasi Utang</h3><p>Negosiasi dengan kreditur untuk modifikasi syarat pinjaman: perpanjangan tenor, pengurangan bunga, atau debt-to-equity swap.</p><h3>Restrukturisasi Operasional</h3><p>Optimalisasi struktur biaya melalui efisiensi proses dan divestasi aset non-inti.</p><h3>Restrukturisasi Ekuitas</h3><p>Penerbitan saham baru, rights issue, atau masuknya investor strategis untuk memperkuat struktur modal.</p>',
                'category_slug'    => 'strategi-korporasi',
                'status'           => 'published',
                'published_at'     => '2026-08-27 09:00:00',
                'tags'             => ['Restrukturisasi', 'Keuangan Korporasi', 'Debt Restructuring', 'Turnaround'],
                'meta_title'       => 'Strategi Restrukturisasi Keuangan Korporasi yang Efektif',
                'meta_description' => 'Panduan restrukturisasi keuangan korporasi mencakup debt restructuring dan restrukturisasi operasional untuk bisnis berkelanjutan.',
                'meta_keywords'    => 'restrukturisasi keuangan, debt restructuring, turnaround, DSCR',
            ],

            // ─── KEUANGAN ─────────────────────────────────────────────────────
            [
                'title'            => 'Memahami WACC untuk Keputusan Investasi Korporasi',
                'slug'             => 'memahami-wacc-keputusan-investasi',
                'excerpt'          => 'WACC adalah metrik fundamental dalam analisis keuangan korporasi. Pelajari cara menghitung dan menginterpretasikan WACC untuk evaluasi proyek investasi.',
                'content'          => '<p><strong>Weighted Average Cost of Capital (WACC)</strong> merepresentasikan tingkat pengembalian minimum yang harus dihasilkan perusahaan untuk memenuhi ekspektasi seluruh penyedia modalnya.</p><h2>Formula WACC</h2><p>WACC = (E/V x Re) + (D/V x Rd x (1 - T))</p><ul><li><strong>E</strong> = Nilai pasar ekuitas</li><li><strong>D</strong> = Nilai pasar utang</li><li><strong>Re</strong> = Biaya ekuitas (menggunakan CAPM)</li><li><strong>Rd</strong> = Biaya utang (pre-tax)</li><li><strong>T</strong> = Tarif pajak efektif perusahaan</li></ul><h2>Menghitung Biaya Ekuitas dengan CAPM</h2><p>Re = Rf + Beta x (Rm - Rf)</p><ul><li><strong>Rf</strong> = Risk-free rate (imbal hasil SBN/obligasi pemerintah)</li><li><strong>Beta</strong> = Sensitivitas saham terhadap pergerakan pasar</li><li><strong>Rm - Rf</strong> = Equity Risk Premium Indonesia</li></ul>',
                'category_slug'    => 'keuangan',
                'status'           => 'published',
                'published_at'     => '2026-09-01 09:00:00',
                'tags'             => ['WACC', 'CAPM', 'Biaya Modal', 'Investasi', 'Keuangan Korporasi'],
                'meta_title'       => 'Memahami WACC untuk Keputusan Investasi Korporasi',
                'meta_description' => 'Panduan menghitung dan menginterpretasikan WACC untuk evaluasi proyek investasi dan valuasi bisnis.',
                'meta_keywords'    => 'WACC, biaya modal, CAPM, weighted average cost of capital, investasi',
            ],
            [
                'title'            => 'Rasio Keuangan Kritis yang Wajib Dipantau Setiap Kuartal',
                'slug'             => 'rasio-keuangan-kritis-wajib-dipantau',
                'excerpt'          => 'Rasio keuangan adalah alat diagnostik paling powerful untuk memahami kesehatan finansial perusahaan. Mana saja yang paling penting dan bagaimana menginterpretasikannya?',
                'content'          => '<p>Kemampuan membaca laporan keuangan adalah kompetensi fundamental dalam dunia bisnis. <strong>Rasio keuangan</strong> menyederhanakan informasi kompleks menjadi metrik yang mudah dibandingkan.</p><h2>Kategori Rasio Keuangan Utama</h2><h3>Rasio Likuiditas</h3><ul><li><strong>Current Ratio:</strong> Aset Lancar / Kewajiban Lancar (ideal lebih dari 2x)</li><li><strong>Quick Ratio:</strong> (Kas + Piutang) / Kewajiban Lancar (ideal lebih dari 1x)</li></ul><h3>Rasio Profitabilitas</h3><ul><li><strong>EBITDA Margin:</strong> EBITDA / Pendapatan</li><li><strong>Return on Equity (ROE):</strong> Laba Bersih / Ekuitas</li><li><strong>Return on Assets (ROA):</strong> Laba Bersih / Total Aset</li></ul><h3>Rasio Leverage</h3><ul><li><strong>Debt-to-EBITDA:</strong> Total Utang / EBITDA (favorit kreditur)</li><li><strong>Interest Coverage Ratio:</strong> EBIT / Beban Bunga (minimum 2-3x)</li></ul>',
                'category_slug'    => 'keuangan',
                'status'           => 'published',
                'published_at'     => '2026-08-24 09:00:00',
                'tags'             => ['Laporan Keuangan', 'Rasio Keuangan', 'ROE', 'EBITDA', 'Analisis Finansial'],
                'meta_title'       => 'Panduan Rasio Keuangan Kritis untuk Analisis Bisnis',
                'meta_description' => 'Panduan lengkap rasio keuangan kritis meliputi likuiditas, profitabilitas, dan leverage untuk analisis kesehatan finansial perusahaan.',
                'meta_keywords'    => 'rasio keuangan, laporan keuangan, ROE, EBITDA, analisis finansial',
            ],

            // ─── SUSTAINABILITY & ESG ─────────────────────────────────────────
            [
                'title'            => 'Integrasi Prinsip ESG: Mendorong Nilai Perusahaan Secara Berkelanjutan',
                'slug'             => 'integrasi-prinsip-esg-mendorong-nilai-perusahaan',
                'excerpt'          => 'Investor global semakin memprioritaskan faktor ESG. Perusahaan yang mengintegrasikan ESG secara genuine terbukti menghasilkan nilai jangka panjang yang lebih baik.',
                'content'          => '<p>Dekade terakhir menyaksikan transformasi dalam cara investor global mengevaluasi perusahaan. <strong>Environmental, Social, and Governance (ESG)</strong> bukan lagi sekadar label CSR, melainkan framework strategis yang menentukan daya tahan bisnis jangka panjang.</p><h2>Mengapa ESG Menjadi Material?</h2><p>Penelitian dari BlackRock, McKinsey, dan Harvard Business School menunjukkan bahwa perusahaan dengan skor ESG tinggi memiliki cost of capital lebih rendah dan kinerja saham lebih resilient selama krisis.</p><h2>Dimensi E, S, dan G dalam Praktik</h2><h3>Environmental (Lingkungan)</h3><p>Strategi dekarbonisasi, efisiensi energi, pengelolaan limbah, dan komitmen net-zero (Science-Based Targets).</p><h3>Social (Sosial)</h3><p>Kesetaraan gender dalam kepemimpinan, kesejahteraan karyawan, dan dampak terhadap komunitas lokal.</p><h3>Governance (Tata Kelola)</h3><p>Independensi dewan komisaris, transparansi pelaporan, kebijakan anti-korupsi, dan perlindungan pemegang saham minoritas.</p>',
                'category_slug'    => 'sustainability',
                'status'           => 'published',
                'published_at'     => '2026-09-08 09:00:00',
                'tags'             => ['ESG', 'Sustainability', 'Tata Kelola', 'Investasi Berkelanjutan', 'CSR'],
                'meta_title'       => 'Integrasi ESG: Mendorong Nilai Perusahaan Secara Berkelanjutan',
                'meta_description' => 'Memahami bagaimana integrasi prinsip ESG mendorong nilai perusahaan dan menarik investor institusional global.',
                'meta_keywords'    => 'ESG, sustainability, tata kelola perusahaan, investasi berkelanjutan, CSR',
            ],

            // ─── REGULASI ─────────────────────────────────────────────────────
            [
                'title'            => 'Standar Penilaian Indonesia (SPI) 2023: Perubahan Kunci yang Perlu Dipahami',
                'slug'             => 'standar-penilaian-indonesia-spi-2023-perubahan-kunci',
                'excerpt'          => 'SPI 2023 membawa sejumlah pembaruan signifikan yang mempengaruhi praktik penilaian aset di Indonesia. Apa saja perubahan utamanya dan bagaimana dampaknya?',
                'content'          => '<p><strong>Standar Penilaian Indonesia (SPI) 2023</strong> yang diterbitkan oleh Masyarakat Profesi Penilai Indonesia (MAPPI) membawa pembaruan mengikuti IVS 2022 dan kebutuhan spesifik pasar Indonesia.</p><h2>Konteks Pembaruan SPI 2023</h2><ul><li>Harmonisasi dengan International Valuation Standards (IVS) 2022</li><li>Perkembangan pasar properti dan aset digital yang membutuhkan panduan lebih spesifik</li><li>Kebutuhan transparansi lebih tinggi dari regulator OJK dan Kemenkeu</li><li>Tuntutan kualitas laporan penilaian yang meningkat dari klien institusional</li></ul><h2>Perubahan Kunci dalam SPI 2023</h2><h3>Penguatan Prinsip RICS</h3><p>SPI 2023 mengadopsi lebih banyak elemen dari Red Book RICS, khususnya terkait independensi penilai dan dokumentasi proses penilaian.</p><h3>Panduan Penilaian Aset Infrastruktur</h3><p>SPI memberikan panduan komprehensif untuk pertama kalinya bagi penilaian aset infrastruktur publik dan konsesi KPBU.</p><h3>Kewajiban Disclosure</h3><p>Persyaratan keterbukaan yang lebih ketat dalam laporan penilaian, termasuk kewajiban mencantumkan asumsi kritis dan tingkat ketidakpastian.</p>',
                'category_slug'    => 'regulasi',
                'status'           => 'published',
                'published_at'     => '2026-08-12 09:00:00',
                'tags'             => ['SPI 2023', 'MAPPI', 'Standar Penilaian', 'Regulasi', 'IVS'],
                'meta_title'       => 'SPI 2023: Perubahan Kunci Standar Penilaian Indonesia',
                'meta_description' => 'Memahami perubahan kunci dalam Standar Penilaian Indonesia (SPI) 2023 dan dampaknya terhadap praktik penilaian aset.',
                'meta_keywords'    => 'SPI 2023, standar penilaian Indonesia, MAPPI, IVS, regulasi penilaian',
            ],
        ];

        foreach ($articles as $data) {
            $category = $catModels[$data['category_slug']] ?? null;

            Article::firstOrCreate(
                ['slug' => $data['slug']],
                [
                    'title'            => $data['title'],
                    'excerpt'          => $data['excerpt'],
                    'content'          => $data['content'],
                    'thumbnail'        => null,
                    'category_id'      => $category?->id,
                    'author_id'        => $author->id,
                    'status'           => $data['status'],
                    'published_at'     => $data['published_at'],
                    'views'            => rand(50, 500),
                    'tags'             => $data['tags'],
                    'meta_title'       => $data['meta_title'],
                    'meta_description' => $data['meta_description'],
                    'meta_keywords'    => $data['meta_keywords'],
                ]
            );
        }

        $this->command->info('ArticleSeeder: ' . count($articles) . ' artikel berhasil di-seed.');
    }
}
