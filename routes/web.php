<?php

use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Website Routes
Route::get('/', function () {
    $latestArticles = \App\Models\Article::with('category')
        ->where('status', 'published')
        ->latest('published_at')
        ->take(3)
        ->get();

    $services = \App\Models\Service::active()
        ->orderBy('sort_order', 'asc')
        ->latest()
        ->get();

    return Inertia::render('Welcome', [
        'latestArticles' => $latestArticles,
        'services' => $services,
    ]);
});

// Public Blog Routes
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

// Public Services Routes
Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
Route::get('/services/{slug}', [ServicesController::class, 'show'])->name('services.show');

// PRIVATE ADMIN PORTAL ROUTES
$adminPrefix = env('ADMIN_PATH', 'secure-panel-arunika');

// Private Admin Guest Routes (Unauthenticated only)
Route::prefix($adminPrefix)->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [AdminAuthController::class, 'login'])->name('admin.login.store');
});

// Private Admin Protected Routes (Requires Authentication & Admin Role Server-Side)
Route::prefix($adminPrefix)->middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    // Admin Articles CRUD (Protected)
    Route::resource('articles', ArticleController::class)->names([
        'index' => 'admin.articles.index',
        'create' => 'admin.articles.create',
        'store' => 'admin.articles.store',
        'show' => 'admin.articles.show',
        'edit' => 'admin.articles.edit',
        'update' => 'admin.articles.update',
        'destroy' => 'admin.articles.destroy',
    ]);

    // Admin Services CRUD (Protected)
    Route::resource('services', ServiceController::class)->names([
        'index' => 'admin.services.index',
        'create' => 'admin.services.create',
        'store' => 'admin.services.store',
        'show' => 'admin.services.show',
        'edit' => 'admin.services.edit',
        'update' => 'admin.services.update',
        'destroy' => 'admin.services.destroy',
    ]);

    // Admin Profile Management
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin Logout
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
});