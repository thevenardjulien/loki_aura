<?php

use App\Http\Controllers\ProfileController;
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
    Route::get('/account/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/account/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/account/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Projects routes
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
});

require __DIR__.'/auth.php';
