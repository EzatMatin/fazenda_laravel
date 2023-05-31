<?php

use App\Http\Controllers\CeasaController;
use App\Http\Controllers\Ceasa\Price_ceasaController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('/');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');


Route::get('/historia', function () {
    return Inertia::render('Historia/Historia');
})->name('historia');

Route::get('/blog', function () {
    return Inertia::render('Blog/Blog');
})->name('blog');


Route::get('ceasa', [Price_ceasaController::class, 'consult'])->name('ceasa.consult');
Route::post('ceasa', [Price_ceasaController::class, 'research'])->name('ceasa.research');
Route::get('weeklyReport', [Price_ceasaController::class, 'weeklyReport'])->name('weeklyReport')->middleware('auth');
Route::get('dashboard/Chart', [Price_ceasaController::class, 'weeklyReport'])->name('Chart')->middleware('auth');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
