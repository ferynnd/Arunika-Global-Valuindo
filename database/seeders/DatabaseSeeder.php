<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         // Buat Permission
    $permissions = [
        'manage user',
        'manage service',
        'manage article',
        'manage product',
        'manage trainer',
    ];

    foreach ($permissions as $permission) {
        Permission::firstOrCreate(['name' => $permission]);
    }

    // Buat Role
    $superadmin = Role::firstOrCreate(['name' => 'superadmin']);
    $admin      = Role::firstOrCreate(['name' => 'admin']);

    // Assign Permission ke Role
    $superadmin->givePermissionTo(Permission::all());
    $admin->givePermissionTo([
        'manage service',
        'manage article',
        'manage product',
        'manage trainer',
    ]);

    // Assign Role ke User
    $superadminUser = \App\Models\User::firstOrCreate(
        ['email' => 'olympustrainings@gmail.com'],
        [
            'name'   => 'Andri Suyoko',
            'username'   => 'andri',
            'password'   => \Hash::make('ptsuyokofitsejahtera'),
            'is_active'  => true,
            'last_login' => now(),
        ]
    );
    $superadminUser2 = \App\Models\User::firstOrCreate(
        ['email' => 'ferynnd@proton.me'],
        [
            'name'   => 'Ferry Fernando',
            'username'   => 'ferynnd',
            'password'   => \Hash::make('ry280305'),
            'is_active'  => true,
            'last_login' => now(),
        ]
    );

    $superadminUser->assignRole($superadmin);
    $superadminUser2->assignRole($superadmin);

    $adminUser = \App\Models\User::firstOrCreate(
        ['email' => 'olympustrainingsby@gmail.com'],
        [
            'name'   => 'olympustrainingsby',
            'username'   => 'olympustrainingsby',
            'password'   => \Hash::make('ptsuyokofitsejahtera'),
            'is_active'  => true,
            'last_login' => now(),
        ]
    );
    $adminUser->assignRole($admin);

    $this->call(AdminSeeder::class);
    $this->call(ArticleCategorySeeder::class);
    $this->call(TestimonialSeeder::class);
    }
}


