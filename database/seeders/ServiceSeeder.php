<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Studi Kelayakan Bisnis (Feasibility Study)',
                'excerpt' => 'Analisis mendalam mengenai kelayakan finansial, operasional, dan pasar sebelum mengeksekusi proyek bisnis baru.',
                'content' => '<p>Layanan Studi Kelayakan Bisnis kami membantu perusahaan dalam mengidentifikasi risiko, potensi keuntungan, serta kelayakan finansial sebelum melakukan investasi besar. Menggunakan metodologi yang komprehensif dan data kuantitatif yang presisi.</p>',
                'features' => ['Analisis Pasar & Kompetitor', 'Proyeksi Keuangan & Cash Flow', 'Analisis Risiko & Mitigasi', 'Rekomendasi Strategis'],
            ],
            [
                'title' => 'Penilaian Aset & Properti (Valuation)',
                'excerpt' => 'Penilaian independen terhadap aset berwujud dan tidak berwujud untuk keperluan akuisisi, laporan keuangan, atau penjaminan.',
                'content' => '<p>Kami memberikan jasa penilaian profesional untuk tanah, bangunan, mesin operasional, hingga aset tidak berwujud (intangible assets) sesuai standar penilaian Indonesia.</p>',
                'features' => ['Penilaian Properti & Bangunan', 'Penilaian Mesin & Peralatan', 'Valuasi Merek & Hak Cipta', 'Laporan Resmi Terakreditasi'],
            ],
            [
                'title' => 'Konsultasi Manajemen & Strategi',
                'excerpt' => 'Pendampingan transformasi organisasi, efisiensi operasional, dan penyusunan strategi pertumbuhan jangka panjang.',
                'content' => '<p>Membantu korporasi meningkatkan efisiensi dan daya saing melalui perancangan ulang proses bisnis, restrukturisasi organisasi, dan penetapan KPI yang efektif.</p>',
                'features' => ['Restrukturisasi Organisasi', 'Optimasi Proses Bisnis', 'Penyusunan Key Performance Indicator (KPI)', 'Manajemen Perubahan'],
            ],
            [
                'title' => 'Perencanaan & Audit CSR',
                'excerpt' => 'Merancang program Corporate Social Responsibility yang berdampak sosial tinggi serta sesuai standar keberlanjutan (ESG).',
                'content' => '<p>Layanan riset dan perancangan program CSR berbasis Social Return on Investment (SROI) guna memastikan dampak positif yang terukur bagi masyarakat dan pemangku kepentingan.</p>',
                'features' => ['Social Mapping & Baseline Study', 'Perancangan Program CSR', 'Pengukuran Dampak (SROI)', 'Penyusunan Laporan Keberlanjutan'],
            ],
            [
                'title' => 'Riset Pasar & Riset Sosial',
                'excerpt' => 'Pengumpulan data primer dan sekunder berkualitas untuk memahami perilaku konsumen serta dinamika sosial masyarakat.',
                'content' => '<p>Riset riset pasar yang mendalam membantu keputusan taktis bisnis Anda, menggunakan perpaduan kualitatif dan kuantitatif secara presisi.</p>',
                'features' => ['Survei Kepuasan Pelanggan', 'Analisis Tren Pasar', 'Focus Group Discussion (FGD)', 'Riset Perilaku Konsumen'],
            ],
            [
                'title' => 'Restrukturisasi Keuangan Korporasi',
                'excerpt' => 'Solusi penataan ulang struktur modal, manajemen utang, dan pengoptimalan arus kas untuk kesehatan finansial jangka panjang.',
                'content' => '<p>Pendampingan ahli dalam melakukan penataan modal dan negosiasi pembiayaan untuk menjaga fleksibilitas arus kas korporasi.</p>',
                'features' => ['Analisis Kesehatan Finansial', 'Penyusunan Ulang Struktur Utang', 'Perencanaan Modal Kerja', 'Negosiasi dengan Kreditur'],
            ],
            [
                'title' => 'Due Diligence & Audit Investigatif',
                'excerpt' => 'Pemeriksaan menyeluruh terhadap kondisi keuangan dan kepatuhan perusahaan sebelum proses merger atau akuisisi.',
                'content' => '<p>Proses analisis mendalam untuk memastikan tidak ada liabilitas tersembunyi serta memverifikasi keabsahan data finansial target transaksi.</p>',
                'features' => ['Financial Due Diligence', 'Legal & Compliance Review', 'Pemeriksaan Laporan Keuangan', 'Identifikasi Risiko Tersembunyi'],
            ],
            [
                'title' => 'Penyusunan Rencana Bisnis (Business Plan)',
                'excerpt' => 'Dokumen perencanaan bisnis komprehensif untuk menarik investor atau pengajuan fasilitas pembiayaan perbankan.',
                'content' => '<p>Menyusun Executive Summary, strategi pemasaran, hingga proyeksi finansial yang matang dan realistis bagi calon investor.</p>',
                'features' => ['Executive Summary Profesional', 'Model Bisnis & Canvas', 'Proyeksi Laba Rugi 5 Tahun', 'Pitch Deck Investor'],
            ],
            [
                'title' => 'Pelatihan & Pengembangan Karyawan',
                'excerpt' => 'Program corporate training terstruktur untuk meningkatkan kapabilitas SDM di bidang keuangan, manajemen, dan analisis data.',
                'content' => '<p>Pelatihan interaktif yang dirancang khusus sesuai tantangan internal perusahaan guna meningkatkan produktivitas tim secara langsung.</p>',
                'features' => ['Modul Pelatihan Kustom', 'Materi Keuangan & Strategi', 'Studi Kasus Interaktif', 'Evaluasi Pasca Pelatihan'],
            ],
            [
                'title' => 'Pendampingan Kepatuhan Regulasi & Pajak',
                'excerpt' => 'Layanan konsultasi untuk memastikan operasional bisnis senantiasa patuh pada aturan hukum dan perpajakan yang berlaku.',
                'content' => '<p>Mitigasi risiko hukum dan penataan strategi perpajakan yang efisien serta sesuai dengan ketentuan regulasi terbaru.</p>',
                'features' => ['Review Kepatuhan Pajak', 'Tax Planning Korporasi', 'Konsultasi Regulasi Industri', 'Pendampingan Pemeriksaan'],
            ],
        ];

        foreach ($services as $index => $item) {
            $slug = Str::slug($item['title']);

            Service::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $item['title'],
                    'slug' => $slug,
                    'icon' => 'briefcase',
                    'thumbnail' => null,
                    'excerpt' => $item['excerpt'],
                    'content' => $item['content'],
                    'features' => $item['features'],
                    'status' => 'active',
                    'sort_order' => $index + 1,
                    'seo_title' => $item['title'] . ' - Arunika Global Valuindo',
                    'seo_description' => $item['excerpt'],
                    'seo_keywords' => 'konsultan, ' . strtolower($item['title']),
                    'og_image' => null,
                ]
            );
        }
    }
}