<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title'      => 'Valuasi Bisnis & Saham',
                'slug'       => 'valuasi-bisnis-saham',
                'icon'       => 'fas fa-chart-line',
                'excerpt'    => 'Penilaian nilai wajar perusahaan dan instrumen saham untuk keperluan transaksi, pelaporan keuangan, dan pengambilan keputusan strategis.',
                'content'    => '<p>Layanan <strong>Valuasi Bisnis dan Saham</strong> kami memberikan penilaian yang akurat, independen, dan dapat dipertanggungjawabkan untuk berbagai kebutuhan korporasi.</p><h2>Ruang Lingkup Layanan</h2><p>Tim penilai bersertifikat kami (MAPPI/KJPP) melakukan valuasi menggunakan pendekatan yang sesuai dengan standar internasional (IVS) dan standar nasional (SPI), mencakup:</p><ul><li>Penilaian nilai intrinsik saham (fair value of equity)</li><li>Valuasi perusahaan untuk keperluan IPO dan secondary offering</li><li>Penilaian untuk keperluan merger, akuisisi, dan divestasi</li><li>Valuasi untuk restrukturisasi korporasi dan spin-off</li><li>Penilaian untuk keperluan sengketa dan litigasi</li></ul><h2>Metode yang Digunakan</h2><ul><li>Income Approach: Discounted Cash Flow (DCF)</li><li>Market Approach: Guideline Public Company Method, Transaction Multiple</li><li>Asset Approach: Net Asset Value (NAV)</li></ul>',
                'features'   => [
                    'Penilai bersertifikat MAPPI/KJPP',
                    'Laporan sesuai standar IVS & SPI',
                    'Analisis sensitivitas dan skenario',
                    'Pendampingan presentasi ke regulator',
                    'Peer review independen',
                ],
                'status'     => 'active',
                'sort_order' => 1,
                'seo_title'      => 'Valuasi Bisnis & Saham Profesional - Arunika Global Valuindo',
                'seo_description' => 'Layanan valuasi bisnis dan saham profesional oleh penilai bersertifikat MAPPI untuk keperluan M&A, IPO, dan pelaporan keuangan.',
                'seo_keywords'   => 'valuasi bisnis, penilaian saham, MAPPI, IPO, merger akuisisi, DCF',
            ],
            [
                'title'      => 'Penilaian Aset Tidak Berwujud',
                'slug'       => 'penilaian-aset-tidak-berwujud',
                'icon'       => 'fas fa-lightbulb',
                'excerpt'    => 'Penilaian komprehensif atas intangible assets termasuk merek dagang, paten, teknologi, hubungan pelanggan, dan goodwill sesuai PSAK 19 dan IFRS 3.',
                'content'    => '<p>Di era ekonomi digital, <strong>aset tidak berwujud (intangible assets)</strong> seringkali merepresentasikan lebih dari 80% total nilai perusahaan. Penilaian yang tepat dan terstandarisasi menjadi sangat kritis untuk pelaporan keuangan yang akuntabel.</p><h2>Jenis Aset yang Kami Nilai</h2><ul><li><strong>Marketing-related:</strong> Merek dagang, nama domain, perjanjian non-kompetisi</li><li><strong>Customer-related:</strong> Daftar dan hubungan pelanggan, kontrak pelanggan</li><li><strong>Technology-related:</strong> Paten, trade secret, software kepemilikan</li><li><strong>Contract-based:</strong> Lisensi, franchise, kontrak menguntungkan</li><li><strong>Goodwill:</strong> Nilai residual dalam transaksi bisnis</li></ul><h2>Kegunaan Penilaian Intangible Assets</h2><ul><li>Purchase Price Allocation (PPA) pasca akuisisi sesuai PSAK 22/IFRS 3</li><li>Impairment testing tahunan (PSAK 48/IAS 36)</li><li>Perencanaan perpajakan dan transfer pricing</li><li>Pengembangan strategi portfolio IP</li></ul>',
                'features'   => [
                    'Metodologi sesuai PSAK 19 & IFRS 3',
                    'Pengalaman PPA lebih dari 50 transaksi',
                    'Koordinasi dengan auditor eksternal',
                    'Laporan defensible untuk regulator',
                    'Transfer pricing support',
                ],
                'status'     => 'active',
                'sort_order' => 2,
                'seo_title'      => 'Penilaian Aset Tidak Berwujud (Intangible Assets) - Arunika',
                'seo_description' => 'Layanan penilaian aset tidak berwujud profesional mencakup merek, paten, goodwill, dan customer relationships sesuai PSAK 19 dan IFRS 3.',
                'seo_keywords'   => 'penilaian aset tidak berwujud, intangible assets, goodwill, merek dagang, PSAK 19, PPA',
            ],
            [
                'title'      => 'Studi Kelayakan & Business Plan',
                'slug'       => 'studi-kelayakan-business-plan',
                'icon'       => 'fas fa-clipboard-check',
                'excerpt'    => 'Penyusunan feasibility study dan business plan yang komprehensif sebagai fondasi keputusan investasi yang kokoh dan meyakinkan bagi investor.',
                'content'    => '<p>Keberhasilan sebuah investasi dimulai dari perencanaan yang matang. Layanan <strong>Studi Kelayakan dan Business Plan</strong> kami menghadirkan analisis mendalam, objektif, dan berbasis data untuk mendukung keputusan investasi Anda.</p><h2>Cakupan Studi Kelayakan</h2><ul><li>Analisis kelayakan teknis dan operasional</li><li>Riset pasar dan analisis kompetitif mendalam</li><li>Pemodelan keuangan proyeksi 5-10 tahun</li><li>Analisis NPV, IRR, Payback Period, dan Break-Even Point</li><li>Kajian kelayakan hukum, regulasi, dan lingkungan (AMDAL)</li><li>Analisis risiko dan strategi mitigasi</li></ul><h2>Pengguna Layanan Ini</h2><p>Layanan ini relevan untuk perusahaan yang akan melakukan ekspansi bisnis, pengajuan kredit ke perbankan, penyusunan proposal ke investor, proyek infrastruktur KPBU, serta pengembangan kawasan industri dan properti komersial.</p>',
                'features'   => [
                    'Riset pasar primer dan sekunder',
                    'Pemodelan keuangan detail',
                    'Analisis sensitivitas multi-skenario',
                    'Presentasi kepada investor/kreditur',
                    'Revisi unlimited selama proses',
                ],
                'status'     => 'active',
                'sort_order' => 3,
                'seo_title'      => 'Studi Kelayakan & Business Plan Profesional - Arunika',
                'seo_description' => 'Layanan penyusunan studi kelayakan dan business plan komprehensif untuk investasi, kredit perbankan, dan proposal investor.',
                'seo_keywords'   => 'studi kelayakan, feasibility study, business plan, NPV, IRR, analisis investasi',
            ],
            [
                'title'      => 'Konsultasi Merger & Akuisisi (M&A)',
                'slug'       => 'konsultasi-merger-akuisisi',
                'icon'       => 'fas fa-handshake',
                'excerpt'    => 'Pendampingan end-to-end dalam transaksi merger dan akuisisi mulai dari identifikasi target, due diligence, negosiasi, hingga post-merger integration.',
                'content'    => '<p>Transaksi <strong>Merger dan Akuisisi (M&A)</strong> adalah salah satu keputusan strategis terbesar yang dapat diambil sebuah perusahaan. Tim advisori M&A kami hadir untuk memastikan setiap tahap transaksi berjalan dengan optimal dan value-accretive.</p><h2>Layanan M&A Advisory Kami</h2><h3>Buy-side Advisory</h3><p>Membantu acquirer dalam mengidentifikasi target potensial, melakukan due diligence komprehensif, menentukan harga penawaran yang tepat, dan menegosiasikan syarat transaksi yang menguntungkan.</p><h3>Sell-side Advisory</h3><p>Mendampingi penjual dalam menyiapkan Confidential Information Memorandum (CIM), mengelola proses lelang kompetitif, memaksimalkan harga transaksi, dan menegosiasikan ketentuan penjualan.</p><h3>Post-Merger Integration (PMI)</h3><p>Merancang roadmap integrasi, mengidentifikasi dan merealisasikan sinergi, serta mengelola perubahan organisasi pasca-transaksi untuk memastikan value creation yang dijanjikan tercapai.</p>',
                'features'   => [
                    'Deal origination & target screening',
                    'Financial & commercial due diligence',
                    'Valuation & pricing advisory',
                    'Negosiasi dan strukturisasi transaksi',
                    'Post-merger integration support',
                ],
                'status'     => 'active',
                'sort_order' => 4,
                'seo_title'      => 'Konsultasi Merger & Akuisisi (M&A Advisory) - Arunika',
                'seo_description' => 'Layanan konsultasi merger dan akuisisi end-to-end mencakup due diligence, valuation, negosiasi, dan post-merger integration.',
                'seo_keywords'   => 'merger akuisisi, M&A advisory, due diligence, post merger integration, deal advisory',
            ],
            [
                'title'      => 'Restrukturisasi Keuangan & Turnaround',
                'slug'       => 'restrukturisasi-keuangan-turnaround',
                'icon'       => 'fas fa-sync-alt',
                'excerpt'    => 'Solusi restrukturisasi keuangan dan operasional untuk perusahaan yang menghadapi tekanan likuiditas, beban utang berlebih, atau membutuhkan transformasi bisnis.',
                'content'    => '<p>Ketika perusahaan menghadapi tekanan finansial atau membutuhkan transformasi menyeluruh, layanan <strong>Restrukturisasi Keuangan dan Turnaround</strong> kami memberikan solusi yang terstruktur, pragmatis, dan berorientasi hasil.</p><h2>Situasi yang Kami Tangani</h2><ul><li>Perusahaan dengan beban utang berlebih dan tekanan covenant</li><li>Bisnis yang mengalami penurunan profitabilitas signifikan</li><li>Perusahaan yang membutuhkan restrukturisasi organisasi dan operasional</li><li>Situasi distress yang memerlukan negosiasi dengan kreditur</li></ul><h2>Pendekatan Kami</h2><p>Kami menggunakan framework <em>stabilize-restructure-grow</em> yang terbukti efektif:</p><ol><li><strong>Stabilisasi:</strong> Manajemen likuiditas jangka pendek dan penghentian pendarahan kas.</li><li><strong>Restrukturisasi:</strong> Negosiasi utang, divestasi aset non-inti, dan optimalisasi model bisnis.</li><li><strong>Pertumbuhan:</strong> Implementasi strategi untuk mengembalikan momentum pertumbuhan.</li></ol>',
                'features'   => [
                    'Independen cash flow assessment',
                    'Negosiasi dengan bank dan kreditur',
                    'Debt restructuring & rescheduling',
                    'Operational efficiency program',
                    'Turnaround management support',
                ],
                'status'     => 'active',
                'sort_order' => 5,
                'seo_title'      => 'Restrukturisasi Keuangan & Turnaround Management - Arunika',
                'seo_description' => 'Layanan restrukturisasi keuangan dan turnaround management untuk perusahaan menghadapi tekanan likuiditas atau membutuhkan transformasi bisnis.',
                'seo_keywords'   => 'restrukturisasi keuangan, turnaround management, debt restructuring, distress, likuiditas',
            ],
            [
                'title'      => 'Pelatihan & Sertifikasi Penilaian Aset',
                'slug'       => 'pelatihan-sertifikasi-penilaian-aset',
                'icon'       => 'fas fa-graduation-cap',
                'excerpt'    => 'Program pelatihan profesional dan persiapan sertifikasi MAPPI untuk penilai aset, bankir, dan profesional keuangan yang ingin meningkatkan kompetensinya.',
                'content'    => '<p>Arunika Global Valuindo menyelenggarakan <strong>program pelatihan dan sertifikasi</strong> yang dirancang untuk meningkatkan kompetensi profesional di bidang penilaian aset dan konsultasi keuangan.</p><h2>Program Pelatihan yang Tersedia</h2><h3>Persiapan Ujian MAPPI (P1, P2, P3)</h3><p>Program intensif yang mencakup seluruh silabus ujian MAPPI dengan materi ajar dari praktisi berpengalaman dan simulasi ujian real-time.</p><h3>Workshop Valuasi Bisnis & Keuangan</h3><p>Pelatihan hands-on pemodelan keuangan DCF, analisis laporan keuangan, dan teknik valuasi menggunakan Excel dan platform profesional lainnya.</p><h3>In-House Corporate Training</h3><p>Program pelatihan yang dikustomisasi sesuai kebutuhan spesifik perusahaan untuk tim keuangan, perbankan, dan investasi korporasi.</p><h2>Peserta yang Cocok</h2><ul><li>Calon penilai aset yang akan mengikuti ujian MAPPI</li><li>Bankir dan analis kredit yang memerlukan pemahaman valuasi</li><li>Investment analyst dan fund manager</li><li>CFO dan tim keuangan korporasi</li></ul>',
                'features'   => [
                    'Trainer berpengalaman dari industri',
                    'Materi up-to-date sesuai SPI 2023',
                    'Studi kasus nyata dari proyek aktual',
                    'Sertifikat kelulusan terakreditasi',
                    'Akses modul digital seumur hidup',
                ],
                'status'     => 'active',
                'sort_order' => 6,
                'seo_title'      => 'Pelatihan & Sertifikasi Penilaian Aset MAPPI - Arunika',
                'seo_description' => 'Program pelatihan profesional dan persiapan ujian sertifikasi MAPPI untuk penilai aset, bankir, dan profesional keuangan.',
                'seo_keywords'   => 'pelatihan MAPPI, sertifikasi penilai, valuasi bisnis training, keuangan korporasi, ujian MAPPI',
            ],
        ];

        foreach ($services as $data) {
            Service::firstOrCreate(
                ['slug' => $data['slug']],
                [
                    'title'           => $data['title'],
                    'icon'            => $data['icon'],
                    'excerpt'         => $data['excerpt'],
                    'content'         => $data['content'],
                    'features'        => $data['features'],
                    'thumbnail'       => null,
                    'status'          => $data['status'],
                    'sort_order'      => $data['sort_order'],
                    'seo_title'       => $data['seo_title'],
                    'seo_description' => $data['seo_description'],
                    'seo_keywords'    => $data['seo_keywords'],
                ]
            );
        }

        $this->command->info('ServiceSeeder: ' . count($services) . ' layanan berhasil di-seed.');
    }
}
