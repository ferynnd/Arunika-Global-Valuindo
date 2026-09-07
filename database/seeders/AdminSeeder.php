<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Pastikan role 'admin' tersedia
        $adminRole = Role::firstOrCreate(['name' => 'admin']);

        // Buat atau update user admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@arunika.com'],
            [
                'name'       => 'Administrator',
                'username'   => 'admin',
                'role'       => 'admin',
                'password'   => Hash::make('password123'),
                'is_active'  => true,
                'last_login' => now(),
            ]
        );
        $admin->update(['role' => 'admin']);

        // Assign role admin ke user
        if (!$admin->hasRole('admin')) {
            $admin->assignRole($adminRole);
        }
    }
}
