<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $query = User::latest();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('username', 'like', "%{$search}%");
            });
        }

        if ($status = $request->input('status')) {
            $isActive = $status === 'active' ? 1 : 0;
            $query->where('is_active', $isActive);
        }

        $admins = $query->paginate(10)->withQueryString();
        
        $roles = [
            ['name' => 'admin', 'label' => 'Admin'],
            ['name' => 'superadmin', 'label' => 'Super Admin'],
        ];

        return Inertia::render('Admin/Users/Index', [
            'admins' => $admins,
            'roles' => $roles,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    public function create()
    {
        $roles = [
            ['name' => 'admin', 'label' => 'Admin'],
            ['name' => 'superadmin', 'label' => 'Super Admin'],
        ];

        return Inertia::render('Admin/Users/Create', [
            'roles' => $roles,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'string', 'in:admin,superadmin'],
            'is_active' => ['boolean'],
        ]);

        User::create([
            'name' => $validated['name'],
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'is_active' => $validated['is_active'] ?? true,
        ]);

        return redirect()->route('admin.users.index')->with('success', 'Akun admin berhasil ditambahkan!');
    }

    // Ubah parameter dari $admin menjadi $user
    public function edit(User $user)
    {
        $roles = [
            ['name' => 'admin', 'label' => 'Admin'],
            ['name' => 'superadmin', 'label' => 'Super Admin'],
        ];

        return Inertia::render('Admin/Users/Edit', [
            'adminData' => $user,
            'roles' => $roles,
        ]);
    }

    // Ubah parameter dari $admin menjadi $user
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:users,username,' . $user->id],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'string', 'in:admin,superadmin'],
            'is_active' => ['boolean'],
        ]);

        $data = [
            'name' => $validated['name'],
            'username' => $validated['username'],
            'email' => $validated['email'],
            'role' => $validated['role'],
            'is_active' => $validated['is_active'] ?? true,
        ];

        if (!empty($validated['password'])) {
            $data['password'] = Hash::make($validated['password']);
        }

        $user->update($data);

        return redirect()->route('admin.users.index')->with('success', 'Data admin berhasil diperbarui!');
    }

    // Ubah parameter dari $admin menjadi $user
    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return redirect()->back()->with('error', 'Anda tidak dapat menghapus akun Anda sendiri!');
        }

        $user->delete();

        return redirect()->route('admin.users.index')->with('success', 'Akun admin berhasil dihapus!');
    }
}