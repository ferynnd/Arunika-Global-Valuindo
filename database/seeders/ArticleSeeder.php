<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $author = User::first() ?? User::factory()->create([
            'name' => 'Admin Arunika',
            'email' => 'admin@arunikaglobal.com',
        ]);

        $categories = ArticleCategory::all();

        if ($categories->isEmpty()) {
            $this->call(ArticleCategorySeeder::class);
            $categories = ArticleCategory::all();
        }

        $articles = [
            [
                'title' => 'Pentingnya Feasibility Study Sebelum Memulai Proyek Skala Besar',
                'excerpt' => 'Memahami peran studi kelayakan dalam meminimalisir risiko finansial dan operasional investasi bisnis Anda.',
                'content' => '<p>Dalam dunia korporasi, setiap keputusan investasi bernilai tinggi membawa risiko yang signifikan. Feasibility Study menjadi alat bantu keputusan yang krusial bagi jajaran direksi...</p>',
                'tags' => ['Studi Kelayakan', 'Investasi', 'Manajemen Risiko'],
            ],
            [
                'title' => 'Strategi Mengoptimalkan Nilai Valuasi Aset Perusahaan',
                'excerpt' => 'Langkah-langkah taktis dalam melakukan inventarisasi dan penilaian aset berwujud maupun tidak berwujud.',
                'content' => '<p>Aset perusahaan bukan sekadar catatan di kertas neraca. Penilaian aset yang tepat dapat meningkatkan posisi tawar perusahaan saat melakukan ekspansi atau pengajuan pendanaan...</p>',
                'tags' => ['Valuasi Aset', 'Keuangan', 'Neraca'],
            ],
            [
                'title' => 'Panduan Merancang Program CSR Berbasis SROI yang Berkelanjutan',
                'excerpt' => 'Mengukur sejauh mana investasi sosial perusahaan memberikan dampak nyata bagi masyarakat sekitar.',
                'content' => '<p>Corporate Social Responsibility (CSR) kini tidak lagi dianggap sebagai sekadar kegiatan charity, melainkan bagian penting dari strategi keberlanjutan bisnis (ESG)...</p>',
                'tags' => ['CSR', 'SROI', 'ESG', 'Keberlanjutan'],
            ],
            [
                'title' => 'Tren Transformasi Manajemen Bisnis di Era Digital',
                'excerpt' => 'Bagaimana perusahaan tradisional dapat beradaptasi dengan alur kerja serba otomatis dan efisien.',
                'content' => '<p>Digitalisasi bukan sekadar adopsi software baru, melainkan perubahan budaya kerja dan pola pikir dalam mengelola sumber daya korporasi secara terpadu...</p>',
                'tags' => ['Digitalisasi', 'Manajemen', 'Inovasi'],
            ],
            [
                'title' => 'Memahami Prinsip Restrukturisasi Keuangan untuk Menjaga Arus Kas',
                'excerpt' => 'Solusi praktis mengatasi permasalahan likuiditas dan penataan kembali beban utang jangka pendek.',
                'content' => '<p>Manajemen arus kas adalah urat nadi setiap entitas bisnis. Ketika arus kas terganggu, restrukturisasi finansial menjadi langkah strategis yang harus diambil dengan cermat...</p>',
                'tags' => ['Arus Kas', 'Restrukturisasi', 'Keuangan Korporat'],
            ],
            [
                'title' => 'Pentingnya Financial Due Diligence Sebelum Melakukan Akuisisi',
                'excerpt' => 'Mengenali kewajiban tersembunyi dan potensi risiko keuangan sebelum mengeksekusi perjanjian pembelian saham.',
                'content' => '<p>Proses akuisisi perusahaan lain tanpa uji tuntas (due diligence) yang menyeluruh bagaikan membeli kucing dalam karung. Berikut poin-poin krusial yang wajib diperiksa...</p>',
                'tags' => ['Due Diligence', 'Akuisisi', 'Audit'],
            ],
            [
                'title' => 'Cara Menyusun Business Plan yang Menarik Minat Investor Global',
                'excerpt' => 'Komponen penting yang wajib ada dalam proposal bisnis agar dilirik oleh pendaftar modal ventura.',
                'content' => '<p>Investor menerima puluhan proposal setiap minggunya. Dokumen rencana bisnis Anda harus menonjolkan validasi pasar, model bisnis teruji, serta proyeksi finansial yang rasional...</p>',
                'tags' => ['Business Plan', 'Investor', 'Pendanaan'],
            ],
            [
                'title' => 'Peran Riset Pasar dalam Menentukan Harga Produk Baru',
                'excerpt' => 'Menggunakan data perilaku konsumen untuk menentukan strategi pricing yang kompetitif dan menguntungkan.',
                'content' => '<p>Menentukan harga produk tidak bisa hanya mengandalkan insting. Riset pasar membantu memetakan willingness to pay dari target audiens secara objektif...</p>',
                'tags' => ['Riset Pasar', 'Pricing', 'Strategi'],
            ],
            [
                'title' => 'Kunci Sukses Meningkatkan Produktivitas Tim melalui Internal Training',
                'excerpt' => 'Investasi dalam pengembangan kapabilitas SDM sebagai pendorong utama pertumbuhan jangka panjang.',
                'content' => '<p>Karyawan adalah aset terpenting perusahaan. Program pelatihan yang terarah dapat meningkatkan retention rate sekaligus kualitas luaran kerja tim Anda...</p>',
                'tags' => ['Pelatihan', 'SDM', 'Produktivitas'],
            ],
            [
                'title' => 'Menghadapi Perubahan Regulasi Perpajakan Terbaru bagi Korporasi',
                'excerpt' => 'Langkah-langkah adaptasi agar perusahaan tetap patuh regulasi sekaligus mengoptimalkan kewajiban pajak.',
                'content' => '<p>Dinamika regulasi perpajakan menuntut tim keuangan korporasi untuk selalu sigap melakukan penyesuaian agar tidak terkena denda administrasi...</p>',
                'tags' => ['Pajak', 'Regulasi', 'Kepatuhan'],
            ],
        ];

        foreach ($articles as $index => $item) {
            $slug = Str::slug($item['title']);
            $category = $categories->random();

            Article::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $item['title'],
                    'slug' => $slug,
                    'excerpt' => $item['excerpt'],
                    'content' => $item['content'],
                    'thumbnail' => null,
                    'category_id' => $category->id,
                    'author_id' => $author->id,
                    'status' => 'published',
                    'published_at' => now()->subDays(10 - $index),
                    'views' => rand(150, 1200),
                    'tags' => $item['tags'],
                    'meta_title' => $item['title'],
                    'meta_description' => $item['excerpt'],
                    'meta_keywords' => implode(', ', $item['tags']),
                ]
            );
        }
    }
}