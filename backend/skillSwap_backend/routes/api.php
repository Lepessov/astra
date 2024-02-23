<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('/login', [StudentController::class, 'login']);
Route::post('/register', [StudentController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/posts', [PostController::class, 'mainIndex']);
    Route::get('/questions', [PostController::class, 'mainIndex']);
    Route::get('/skill_funds', [PostController::class, 'mainIndex']);
});
