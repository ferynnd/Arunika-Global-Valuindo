<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt')->nullable();
            // $table->longText('content');
            $table->string('thumbnail')->nullable();

            // Relasi
            $table->foreignId('category_id')->nullable()->constrained('article_categories')->cascadeOnDelete();
            $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();

            // Status artikel
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->timestamp('published_at')->nullable();

            // Statistik
            $table->unsignedBigInteger('views')->default(0);

            // Tagging
            $table->json('tags')->nullable();

            // 🔥 Meta SEO
            $table->string('meta_title')->nullable(); // biasanya <= 60 karakter
            $table->string('meta_description', 160)->nullable(); // biasanya <= 160 karakter
            $table->string('meta_keywords')->nullable(); // bisa dipisahkan dengan koma

            $table->timestamp('deleted_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
