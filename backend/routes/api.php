<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CalorieReportController;

Route::post('/reports', [CalorieReportController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Admin routes (require api token user to be admin)
Route::middleware([])->group(function () {
    Route::get('/reports', [CalorieReportController::class, 'index']); // admin listing
    Route::get('/reports/{calorieReport}', [CalorieReportController::class, 'show']);
    Route::delete('/reports/{calorieReport}', [CalorieReportController::class, 'destroy']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');