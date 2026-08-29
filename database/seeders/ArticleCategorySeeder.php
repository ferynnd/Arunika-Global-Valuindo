<?php

namespace Database\Seeders;

use App\Models\ArticleCategory;
use Illuminate\Database\Seeder;

class ArticleCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Berita Perusahaan', 'slug' => 'berita-perusahaan'],
            ['name' => 'Konsultasi & Valuasi', 'slug' => 'konsultasi-valuasi'],
            ['name' => 'Pelatihan Industri', 'slug' => 'pelatihan-industri'],
            ['name' => 'Edukasi Bisnis', 'slug' => 'edukasi-bisnis'],
        ];

        foreach ($categories as $cat) {
            ArticleCategory::firstOrCreate(['slug' => $cat['slug']], $cat);
        }
    }
}
