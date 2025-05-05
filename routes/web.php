<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index/homepage/page');
})->name('homepage');


// Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('administrator/page');
//     });
// });

Route::prefix('administrator')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('administrator/dashboard/page');
    });

    Route::prefix('bookings')->group(function () {
        Route::get('pending', function () {
            return Inertia::render('administrator/bookings/pending/page');
        });
        Route::get('approved', function () {
            return Inertia::render('administrator/bookings/approved/page');
        });
        Route::get('cancelled', function () {
            return Inertia::render('administrator/bookings/cancelled/page');
        });
    });

    Route::prefix('users')->group(function () {
        Route::get('csr', function () {
            return Inertia::render('administrator/users/csr/page');
        });
        Route::get('coaches', function () {
            return Inertia::render('administrator/users/coaches/page');
        });
    });
    Route::get('schedules', function () {
        return Inertia::render('administrator/schedules/page');
    });

    Route::prefix('activities')->group(function () {
        Route::get('/', function () {
            return Inertia::render('administrator/activities/page');
        });
        Route::get('/create', function () {
            return Inertia::render('administrator/activities/create/page');
        });
    });
    Route::get('customers', function () {
        return Inertia::render('administrator/customers/page');
    });
    Route::get('resources', function () {
        return Inertia::render('administrator/resources/page');
    });
    Route::get('categories', function () {
        return Inertia::render('administrator/categories/page');
    });
    Route::get('emails', function () {
        return Inertia::render('administrator/emails/page');
    });
    Route::get('general_statistics', function () {
        return Inertia::render('administrator/general_statistics/page');
    });
    Route::get('settings', function () {
        return Inertia::render('administrator/settings/page');
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
