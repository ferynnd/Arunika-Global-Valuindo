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
        User::firstOrCreate(
            ['email' => 'admin@workforworks.com'],
            [
                'name'       => 'WorkForWorks',
                'username'   => 'workforworks',
                'role'       => 'superadmin',
                'password'   => Hash::make('AgencyCeria2026++'),
                'is_active'  => true,
                'last_login' => now(),
            ]
        );
    }
}
