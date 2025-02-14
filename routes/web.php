<?php

use App\Http\Controllers\Account\ProfileController;
use App\Http\Controllers\Account\SecurityController;
use App\Http\Controllers\MealController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/legal/conditions-generales-d-utilisation', function () {
    return Inertia::render('Legal/Cgu');
});

Route::get('/legal/conditions-generales-de-vente', function () {
    return Inertia::render('Legal/Cgv');
});

Route::middleware('auth', 'verified')->group(function () {
    // Dashboard
    Route::get('/dashboard', [MealController::class, 'index'])->name('dashboard');
    Route::get('/repas', [MealController::class, 'repasIndex'])->name('repas.index');
    Route::get('/repas/add', [MealController::class, 'repasCreate'])->name('repas.create');
    Route::post('/repas/add', [MealController::class, 'repasStore'])->name('repas.store');

    // Profile
    Route::get('/account/profile', [ProfileController::class, 'show'])->name('profile.show');
    Route::patch('/account/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/account/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Security
    Route::get('/account/security', [SecurityController::class, 'show'])->name('security.show');
});

require __DIR__ . '/auth.php';
