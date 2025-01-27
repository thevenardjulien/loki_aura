<?php

use App\Http\Controllers\AccountProfileController;
use App\Http\Controllers\AccountSecurityController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/account/profile', [AccountProfileController::class, 'show'])->name('profile.show');
    Route::patch('/account/profile', [AccountProfileController::class, 'update'])->name('profile.update');
    Route::delete('/account/profile', [AccountProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/account/security', [AccountSecurityController::class, 'show'])->name('security.show');

    // Projects routes
    Route::get('/projects', function () {
        return Inertia::render('Dashboard');
    })->name('projects');

    Route::get('/projects/board', function () {
        return Inertia::render('Dashboard');
    })->name('projects.board');

    Route::get('/projects/tasks', function () {
        return Inertia::render('Dashboard');
    })->name('projects.tasks');

    Route::get('/projects/reports', function () {
        return Inertia::render('Dashboard');
    })->name('projects.reports');

    // Documentation routes
    Route::get('/documentation', function () {
        return Inertia::render('Dashboard');
    })->name('documentation');

    Route::get('/documentation/getting-started', function () {
        return Inertia::render('Dashboard');
    })->name('documentation.getting-started');

    Route::get('/documentation/backend-setup', function () {
        return Inertia::render('Dashboard');
    })->name('documentation.backend-setup');

    Route::get('/documentation/frontend-setup', function () {
        return Inertia::render('Dashboard');
    })->name('documentation.frontend-setup');

    Route::get('/documentation/changelog', function () {
        return Inertia::render('Dashboard');
    })->name('documentation.changelog');

    // Support routes
    Route::get('/support', function () {
        return Inertia::render('Dashboard');
    })->name('support');

    // Feedback routes
    Route::get('/feedback', function () {
        return Inertia::render('Dashboard');
    })->name('feedback');
});

require __DIR__ . '/auth.php';
