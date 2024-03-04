<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\SkillFundController;
use App\Http\Controllers\SpecialityController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UniversityController;
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
    Route::middleware('student.access')->group(function () {
        Route::get('/posts/search', [PostController::class, 'search']);
        Route::get('/posts/all', [PostController::class, 'index']);
        Route::get('/posts/applied-posts', [PostController::class, 'getAppliedPosts']);
        Route::get('/posts/{postId}/applicants', [PostController::class, 'getApplicantsForPost']);
        Route::post('/posts/create', [PostController::class, 'create']);
        Route::post('/posts/{post}/apply', [PostController::class, 'applyForPost']);
        Route::put('/posts/{id}/update', [PostController::class, 'update']);
        Route::delete('/posts/{post}/delete', [PostController::class, 'delete']);

        Route::get('/questions/search', [QuestionController::class, 'search']);
        Route::get('/questions/all', [QuestionController::class, 'index']);
        Route::post('/questions/create', [QuestionController::class, 'create']);
        Route::post('/questions/{id}/rate', [RatingController::class, 'rateQuestion']);
        Route::put('/questions/{id}/update', [QuestionController::class, 'update']);
        Route::delete('/questions/{id}/delete', [QuestionController::class, 'delete']);

        Route::post('/questions/{question}/answers', [AnswerController::class, 'store']);
        Route::get('/questions/{question}/answers', [AnswerController::class, 'index']);
        Route::get('/answers/{answer}', [AnswerController::class, 'show']);
        Route::put('/answers/{answer}', [AnswerController::class, 'update']);
        Route::delete('/answers/{answer}', [AnswerController::class, 'delete']);

        Route::post('/skill_funds/create', [SkillFundController::class, 'create']);
        Route::put('/skill_funds/{id}/update', [SkillFundController::class, 'update']);
        Route::delete('/skill_funds/{id}/delete', [SkillFundController::class, 'delete']);
    });

    Route::get('/skill_funds/search', [SkillFundController::class, 'search']);
    Route::get('/skill_funds/all', [SkillFundController::class, 'index']);

    Route::get('/student/profile', [StudentController::class, 'show']);
    Route::put('/student/profile/update', [StudentController::class, 'update']);

    Route::post('/logout', [StudentController::class, 'logout']);
});

Route::get('/posts', [PostController::class, 'mainIndex']);
Route::get('/skill_funds', [SkillFundController::class, 'mainIndex']);
Route::get('/questions', [QuestionController::class, 'mainIndex']);

Route::get('frontend/student/specialities', [SpecialityController::class, 'index']);
Route::get('frontend/student/universities', [UniversityController::class, 'index']);
Route::get('frontend/student/faculties', [FacultyController::class, 'index']);

Route::get('frontend/categories', [CategoryController::class, 'index']);
