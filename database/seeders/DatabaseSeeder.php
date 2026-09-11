<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(AdminSeeder::class);
        $this->call(ArticleCategorySeeder::class);
        $this->call(ArticleSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(TestimonialSeeder::class);   
    }
}


