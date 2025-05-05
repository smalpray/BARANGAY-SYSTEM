<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ResourceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('categories', CategoryController::class);
Route::resource('activities', ActivityController::class);
Route::resource('resources', ResourceController::class);

Route::get('/auth/pay_card', [PaymentController::class, 'pay_card']);