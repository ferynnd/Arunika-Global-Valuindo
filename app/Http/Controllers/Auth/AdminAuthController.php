<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function showLoginForm()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->role === 'admin') {
                return redirect()->route('admin.dashboard');
            }
            Auth::logout();
        }

        return Inertia::render('Admin/Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        $throttleKey = Str::transliterate(Str::lower($credentials['email']) . '|' . $request->ip());

        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            throw ValidationException::withMessages([
                'email' => "Terlalu banyak percobaan login. Silakan coba lagi dalam {$seconds} detik.",
            ]);
        }

        if (!Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password'], 'is_active' => true], $request->boolean('remember'))) {
            RateLimiter::hit($throttleKey, 60);
            throw ValidationException::withMessages([
                'email' => 'Kredensial yang Anda masukkan tidak cocok dengan catatan kami.',
            ]);
        }

        $user = Auth::user();

        // Verify if user is an authorized admin
        if (!in_array($user->role, ['admin', 'superadmin'])) {
            Auth::logout();
            RateLimiter::hit($throttleKey, 60);
            throw ValidationException::withMessages([
                'email' => 'Kredensial yang Anda masukkan tidak cocok dengan catatan kami.',
            ]);
        }

        RateLimiter::clear($throttleKey);
        $request->session()->regenerate();

        $user->update([
            'last_login' => now(),
        ]);

        return redirect()->intended(route('admin.dashboard'));
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}
