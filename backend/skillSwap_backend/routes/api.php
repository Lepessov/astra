<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SkillFundController;
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

//Route::middleware('auth:sanctum')->group(function () {
//    Route::middleware('student.access')->group(function () {
        Route::get('/posts', [PostController::class, 'mainIndex']);
        Route::get('/posts/all', [PostController::class, 'index']);
        Route::post('/posts/create', [PostController::class, 'create']);
        Route::put('/posts/{id}/update', [PostController::class, 'update']);
        Route::delete('/posts/{post}/delete', [PostController::class, 'delete']);

Route::get('/questions', [QuestionController::class, 'mainIndex']);
//    });

    Route::get('/skill_funds', [SkillFundController::class, 'mainIndex']);
    Route::get('/skill_funds/all', [SkillFundController::class, 'index']);
    Route::post('/skill_funds/create', [SkillFundController::class, 'create']);
    Route::put('/skill_funds/{id}/update', [SkillFundController::class, 'update']);
    Route::delete('/skill_funds/{id}/delete', [SkillFundController::class, 'delete']);
//});
