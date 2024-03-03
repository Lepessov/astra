<?php

namespace App\Http\Controllers;

use App\Http\Requests\Question\QuestionCreateRequest;
use App\Http\Requests\Question\QuestionUpdateRequest;
use App\Models\Question;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class QuestionController extends Controller
{
    use ApiResponse;

    public function search(Request $request): array
    {
        $query = $request->input('query');
        $categories = $request->input('categories', []);
        $perPage = $request->input('limit', 10);

        $postsQuery = Question::query();

        if ($query) {
            $postsQuery->where(function ($queryBuilder) use ($query) {
                $queryBuilder->where('title', 'LIKE', "%$query%")
                    ->orWhere('description', 'LIKE', "%$query%");
            });
        }

        if (!empty($categories)) {
            $postsQuery->whereHas('categories', function ($query) use ($categories) {
                $query->whereIn('name', $categories);
            });
        }

        $posts = $postsQuery->paginate($perPage);

//        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");

        return [
            'success' => true,
            'data' => $posts->items(),
            'current_page' => $posts->currentPage(),
            'per_page' => $posts->perPage(),
            'total' => $posts->total(),
            'code' => ResponseAlias::HTTP_OK,
            'message' => 'success'
        ];
    }

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

    public function index(): JsonResponse
    {
        $posts = Question::query()->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $posts->items(),
            'page' => $posts->currentPage(),
            'code' => ResponseAlias::HTTP_OK,
        ]);
    }

    public function create(QuestionCreateRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('posts', 'public'); // Adjust folder and disk as needed
            $validatedData['photo'] = $photoPath;
        }

        $question = Question::query()->create($validatedData);

        return $this->successResponse($question, ResponseAlias::HTTP_CREATED, "created");
    }

    public function update(QuestionUpdateRequest $request, int $id): JsonResponse
    {
        $validatedData = $request->validated();

        $question = Question::query()->findOrFail($id);

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('posts', 'public'); // Adjust folder and disk as needed
            $validatedData['photo'] = $photoPath;
            if ($question->photo) {
                Storage::disk('public')->delete($question->photo);
            }
        }

        $question->update($validatedData);

        return $this->successResponse($question, ResponseAlias::HTTP_OK, 'updated');
    }

    public function delete(int $id): JsonResponse
    {
        Question::query()->findOrFail($id)->delete();

        return $this->successResponse(message:"deleted");
    }
}
