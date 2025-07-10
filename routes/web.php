<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('/administrator/dashboard');
    }
    return Inertia::render('auth/login/page');
})->name('login');


Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('administrator/dashboard/page');
    })->name('dashboard');

    Route::prefix('users')->group(function () {
        Route::get('it_department', function () {
            return Inertia::render('administrator/users/it_department/page');
        });
        Route::get('hr_department', function () {
            return Inertia::render('administrator/users/hr_department/page');
        });
        Route::get('accounting_department', function () {
            return Inertia::render('administrator/users/accounting_department/page');
        });
        Route::get('engagement', function () {
            return Inertia::render('administrator/users/engagement/page');
        });
        Route::get('leaders', function () {
            return Inertia::render('administrator/users/leaders/page');
        });
    });

    Route::prefix('ticketing/{slug}')->group(function () {
        Route::get('tickets', function () {
            return Inertia::render('administrator/ticketing/slug/tickets/page');
        });
        Route::get('dashboard', function () {
            return Inertia::render('administrator/ticketing/slug/dashboard/page');
        });
        Route::get('stats', function () {
            return Inertia::render('administrator/ticketing/slug/stats/page');
        });
        Route::get('users', function () {
            return Inertia::render('administrator/ticketing/slug/users/page');
        });
    });

    Route::get('settings', function () {
        return Inertia::render('administrator/settings/page');
    });
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
