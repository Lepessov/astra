<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    use ApiResponse;

    public function rateQuestion($questionId): JsonResponse
    {
        $student = Auth::user();

        $existingRating = Rating::query()->where('question_id', $questionId)
            ->where('student_id', $student->id)
            ->first();

        if ($existingRating && $existingRating->rating == request('rating')) {
            $existingRating->delete();
            return $this->successResponse(message: 'Отзыв убран!');
        }

        $existingRating?->delete();

        $rating = new Rating([
            'question_id' => $questionId,
            'student_id' => $student->id,
            'rating' => request('rating'),
        ]);

        $rating->save();

        return $this->successResponse(message: 'Отзыв принят!');
    }
}
