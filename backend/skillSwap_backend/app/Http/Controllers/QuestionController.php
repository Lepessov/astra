<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Question;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class QuestionController extends Controller
{
    use ApiResponse;

    public function mainIndex(): JsonResponse
    {
        $posts = Question::query()
            ->select('questions.title',
                'questions.description',
                'questions.status',
                'students.photo',
                'questions.created_at',
                'students.name',
                'students.surname')
            ->join('students', 'questions.student_id', '=', 'students.id')
            ->latest()
            ->take(5)
            ->get();;

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }
}
