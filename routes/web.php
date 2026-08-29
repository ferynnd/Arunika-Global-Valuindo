<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ProfileController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});


Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'show'])
        ->name('login');

    Route::post('/login', [AuthController::class, 'login'])
        ->name('login.store');

    Route::get('/register', [AuthController::class, 'showRegister'])
        ->name('register');

    Route::post('/register', [AuthController::class, 'register'])
        ->name('register.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/logout', [AuthController::class, 'logout'])
        ->name('logout');
});