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
        Schema::create('site_identities', function (Blueprint $table) {
            $table->id();
            
            // Identitas
            $table->string('sitefavicon')->nullable();
            $table->string('sitelogo')->nullable();
            $table->string('sitetitle')->nullable();
            $table->string('sitetagline')->nullable();

            // Kontak & Sosmed
            $table->string('wa')->nullable();
            $table->string('wa2')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('instagram')->nullable();
            $table->string('tiktok')->nullable();
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->string('youtube')->nullable();
            $table->string('linkedin')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_identities');
    }
};
