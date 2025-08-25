<?php

use App\Http\Controllers\BarangayInformationController;
use App\Http\Controllers\BlotterController;

use App\Http\Controllers\FamiliesController;
use App\Http\Controllers\InventoriesController;
use App\Http\Controllers\PositionController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('barangay_information', BarangayInformationController::class);
Route::resource('positions', PositionController::class);
Route::resource('blotters', BlotterController::class);
Route::resource('inventories', InventoriesController::class);
Route::resource('families', FamiliesController::class);
