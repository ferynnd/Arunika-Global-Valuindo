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
        ];

        foreach ($categories as $category) {
            ArticleCategory::updateOrCreate(
                ['slug' => Str::slug($category)],
                ['name' => $category]
            );
        }
    }
}