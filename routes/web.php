<?php

use App\Http\Controllers\CeasaController;
use App\Http\Controllers\Ceasa\Price_ceasaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Product\ProductController;
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
/*
Route::get('/dashboard', function () {
   return Inertia::render('Dashboard');
})->name('dashboard');
*/
<<<<<<< HEAD
Route::get('mydashboard', [Price_ceasaController::class, 'mydashboard'])->name('mydashboard');
=======
Route::get('/dashboard', [Price_ceasaController::class, 'dashboard'])->name('dashboard');
Route::get('/search', [Price_ceasaController::class, 'search'])->name('search');
>>>>>>> ee4a7bfee60673656826a5456f510b5392b3360d


/*  Route::get('/search', function () {
    return Inertia::render('dashboard/LineReportExpanded');
})->name('search');  */

Route::get('/blog', function () {
    return Inertia::render('Blog/Blog');
})->name('blog');

Route::get('ceasa', [Price_ceasaController::class, 'consult'])->name('ceasa.consult');
Route::post('productResearch', [Price_ceasaController::class, 'productResearch'])->name('productResearch');
Route::post('ceasa', [Price_ceasaController::class, 'research'])->name('ceasa.research');
Route::get('weeklyReport', [Price_ceasaController::class, 'weeklyReport'])->name('weeklyReport')->middleware('auth');
Route::get('dashboard/Chart', [Price_ceasaController::class, 'weeklyReport'])->name('Chart')->middleware('auth');

Route::get('tableReport', [Price_ceasaController::class, 'tableReport'])->name('tableReport');
Route::post('research', [Price_ceasaController::class, 'research'])->name('ceasa.research');
Route::get('lineChart', [Price_ceasaController::class, 'lineChart'])->name('lineChart');
Route::get('barChart', [Price_ceasaController::class, 'barChart'])->name('barChart');
Route::get('inicialReport', [Price_ceasaController::class, 'inicialReport'])->name('inicialReport');
Route::post('search', [Price_ceasaController::class, 'researchInicial'])->name('search');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('posts', PostController::class)
    ->only(['index','store','update','destroy']) 
   ->middleware(['auth']);

Route::resource('products', ProductController::class)
->only(['index','create','store','show','update','destroy'])
->middleware(['auth']);


require __DIR__.'/auth.php';

