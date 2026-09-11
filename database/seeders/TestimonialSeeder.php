<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'author' => 'Budi Santoso',
                'role' => 'Direktur Utama, PT Nusa Karya Mandiri',
                'quote' => 'Hasil Studi Kelayakan dari Arunika sangat rinci dan membantu kami mengamankan fasilitas pembiayaan bank bernilai miliaran rupiah dengan lancar.',
            ],
            [
                'author' => 'Siti Rahmawati',
                'role' => 'Head of Corporate Secretary, Mulia Group',
                'quote' => 'Tim pendamping riset CSR Arunika sangat profesional. Laporan SROI yang dihasilkan sangat transparan dan diakui oleh para stakeholder kami.',
            ],
            [
                'author' => 'Hendra Wijaya',
                'role' => 'Chief Financial Officer, PT Indo Logistik Sejahtera',
                'quote' => 'Valuasi aset berwujud dan tidak berwujud dilakukan dengan objektif dan tepat waktu. Sangat merekomendasikan layanan akurat dari tim Arunika.',
            ],
            [
                'author' => 'Dewi Lestari',
                'role' => 'VP Human Resources, Bank Surya Pratama',
                'quote' => 'Modul pelatihan manajemen risiko yang disajikan disesuaikan dengan studi kasus nyata di industri kami. Sangat berdampak bagi tim internal.',
            ],
            [
                'author' => 'Agus Pratama',
                'role' => 'Founder & CEO, Tekno Digital Indonesia',
                'quote' => 'Financial Due Diligence dari Arunika membuka mata kami terhadap potensi risiko sebelum akuisisi anak perusahaan baru. Transaksi berjalan aman.',
            ],
            [
                'author' => 'Rina Kusumawardhani',
                'role' => 'General Manager, PT Energi Hijau Nusantara',
                'quote' => 'Penyusunan rencana bisnis dan model proyeksi arus kas memberikan kepastian arah strategis bagi ekspansi lini bisnis baru kami.',
            ],
            [
                'author' => 'Ir. Eko Purnomo',
                'role' => 'Komisaris, PT Konstruksi Utama Mitra',
                'quote' => 'Pendampingan restrukturisasi utang oleh konsultan Arunika menyelamatkan arus kas operasional kami di masa-masa kritis.',
            ],
            [
                'author' => 'Maya Indriani',
                'role' => 'Marketing Director, Retail Asia Corp',
                'quote' => 'Riset pasar konsumen dari Arunika memberi wawasan baru yang akurat sehingga penetapan harga produk baru kami langsung diterima pasar.',
            ],
            [
                'author' => 'Ahmad Fauzi',
                'role' => 'Operation Manager, PT Agro Perkasa',
                'quote' => 'Proses riset lapangan dan peta sosial masyarakat dilakukan dengan pendekatan yang humanis dan dapat dipertanggungjawabkan.',
            ],
            [
                'author' => 'Dr. Bambang Setiawan',
                'role' => 'Senior Advisor, Yayasan Inovasi Bisnis',
                'quote' => 'Integritas dan kedalaman analisis profesional dari tim Arunika menjadikan mereka mitra strategis pilihan untuk konsultasi tingkat korporasi.',
            ],
        ];

        foreach ($testimonials as $index => $item) {
            Testimonial::updateOrCreate(
                [
                    'author' => $item['author'],
                    'role' => $item['role'],
                ],
                [
                    'quote' => $item['quote'],
                    'avatar' => null,
                    'status' => 'active',
                    'sort_order' => $index + 1,
                ]
            );
        }
    }
}