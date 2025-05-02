<?php

use App\Http\Controllers\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route::resource('job_order', JobOrderController::class);
Route::get('/auth/pay_card', [PaymentController::class, 'pay_card']);