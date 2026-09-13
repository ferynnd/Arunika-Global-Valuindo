<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pastikan role 'admin' tersedia

        // Buat atau update user admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@arunika.com'],
            [
                'name'       => 'Administrator',
                'username'   => 'admin',
                'role'       => 'superadmin',
                'password'   => Hash::make('password123'),
                'is_active'  => true,
                'last_login' => now(),
            ]
        );
        $admin->update(['role' => 'superadmin']);
    }
}
