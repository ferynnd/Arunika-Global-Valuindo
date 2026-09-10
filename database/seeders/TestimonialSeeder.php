<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'author' => 'Ahmad Fauzi',
                'role' => 'Chief Financial Officer, PT Indo Energi Lestari',
                'quote' => 'Layanan valuasi aset dan konsultasi strategi dari Arunika Global Valuindo memberikan kejelasan dan kepastian tinggi untuk keputusan investasi korporasi kami. Sangat profesional dan akurat.',
                'status' => 'active',
                'sort_order' => 1,
            ],
            [
                'author' => 'Siti Rahmawati',
                'role' => 'Managing Director, Global Venture Capital',
                'quote' => 'Pendampingan feasibility study yang komprehensif membuat proses audit dan ekspansi bisnis kami berjalan mulus sesuai timeline dan standar keberlanjutan.',
                'status' => 'active',
                'sort_order' => 2,
            ],
            [
                'author' => 'Budi Santoso',
                'role' => 'VP Operations, Nusantara Infrastructure Group',
                'quote' => 'Tim konsultan Arunika memiliki dedikasi dan metodologi riset yang mendalam, sangat direkomendasikan untuk analisis finansial korporasi.',
                'status' => 'active',
                'sort_order' => 3,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::firstOrCreate(
                ['author' => $testimonial['author']],
                $testimonial
            );
        }
    }
}
