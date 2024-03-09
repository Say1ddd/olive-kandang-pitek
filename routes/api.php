<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TempController;
use App\Http\Controllers\HumidController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route to handle temperature data from ESP8266
Route::get('/temperature', [TempController::class, 'store']);
Route::post('/temperature', [TempController::class, 'store']);

Route::get('/humidity', [TempController::class, 'store']);
Route::post('/humidity', [HumidController::class, 'store']);
// Additional routes can be defined here as needed