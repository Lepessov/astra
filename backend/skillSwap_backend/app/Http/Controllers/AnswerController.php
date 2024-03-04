<?php

namespace App\Http\Controllers;

use App\Http\Requests\Answers\AnswerCreateRequest;
use App\Http\Requests\Answers\AnswerUpdateRequest;
use App\Models\Answer;
use App\Models\Question;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AnswerController extends Controller
{
    use ApiResponse;

    public function store(AnswerCreateRequest $request, Question $question): JsonResponse
    {
        $validatedData = $request->validated();

        $answer = $question->answers()->create([
            'content' => $validatedData['content'],
            'student_id' => auth()->user()->id,
        ]);

        return $this->successResponse($answer, ResponseAlias::HTTP_CREATED, 'success');
    }

    public function index(Question $question): JsonResponse
    {
        $answers = $question->answers()->with('student')->get();

        if($answers->isEmpty())
        {
            return $this->successResponse(message: 'No answers yet!');
        }

        return $this->successResponse($answers);
    }

    public function show(Answer $answer): JsonResponse
    {
        return $this->successResponse($answer);
    }

    public function update(AnswerUpdateRequest $request, Answer $answer): JsonResponse
    {
        $data = $request->validated();

        $answer->update([
            'content' => $data['content'],
        ]);

        return $this->successResponse();
    }

    public function delete(Answer $answer): JsonResponse
    {
        $answer->delete();

        return $this->successResponse();
    }
}
