<?php

namespace Database\Seeders;

use App\Models\ArticleCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArticleCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Keuangan & Akuntansi',
            'Manajemen Bisnis',
            'Studi Kelayakan',
            'Penilaian Aset',
            'Corporate Social Responsibility',
            'Riset & Analisis Pasar',
            'Regulasi & Pajak',
            'Investasi Korporasi',
            'Strategi Pertumbuhan',
            'Teknologi & Digitalisasi',
        ];

        foreach ($categories as $category) {
            ArticleCategory::updateOrCreate(
                ['slug' => Str::slug($category)],
                ['name' => $category]
            );
        }
    }
}