<?php

use App\Http\Controllers\BarangayInformationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('barangay_information', BarangayInformationController::class);
