<?php

namespace App\Http\Controllers;

use App\Http\Requests\Posts\PostCreateRequest;
use App\Http\Requests\Posts\PostUpdateRequest;
use App\Models\Post;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class PostController extends Controller
{
    use ApiResponse;

    public function search(Request $request): array
    {
        $query = $request->input('query');
        $categories = $request->input('categories', []);
        $perPage = $request->input('limit', 10);

        $postsQuery = Post::query();

        if ($query) {
            $postsQuery->where(function ($queryBuilder) use ($query) {
                $queryBuilder->where('title', 'LIKE', "%$query%")
                    ->orWhere('content', 'LIKE', "%$query%");
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
        $posts = Post::query()
            ->select(
                'posts.id',
                'posts.title',
                'posts.content',
                'posts.status',
                'posts.photo',
                'posts.created_at',
                'students.name',
                'students.surname',
            )

            ->join('students', 'posts.student_id', '=', 'students.id')
            ->latest()
            ->take(5)
            ->get();

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }

    public function index(): JsonResponse
    {
        $posts = Post::query()
            ->select(
                'posts.id',
                'posts.content',
                'posts.photo',
                'posts.created_at',
                'posts.price'
            )
            ->with('categories:name')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $posts->items(),
            'page' => $posts->currentPage(),
            'code' => ResponseAlias::HTTP_OK,
        ]);
    }

    public function create(PostCreateRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('posts', 'public'); // Adjust folder and disk as needed
            $validatedData['photo'] = $photoPath;
        }

        $post = Post::query()->create($validatedData);

        return $this->successResponse($post, ResponseAlias::HTTP_CREATED, "created");
    }

    public function update(PostUpdateRequest $request, int $id): JsonResponse
    {
        $validatedData = $request->validated();

        $post = Post::query()->findOrFail($id);

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('posts', 'public'); // Adjust folder and disk as needed
            $validatedData['photo'] = $photoPath;
            if ($post->photo) {
                Storage::disk('public')->delete($post->photo);
            }
        }

        $post->update($validatedData);

        return $this->successResponse($post, ResponseAlias::HTTP_OK, 'updated');
    }

    public function delete(int $id): JsonResponse
    {
        Post::query()->findOrFail($id)->delete();

        return $this->successResponse(message:"deleted");
    }

    public function applyForPost(Request $request, $postId): JsonResponse
    {
        $student = Auth::user();

        $post = Post::query()->findOrFail($postId);

        if ($post->student_id === $student->id) {
            return $this->errorResponse(code: ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, message: 'Вы не можете откликнуться!');
        }

        if ($post->applicants()->where('student_id', $student->id)->exists()) {
            return $this->errorResponse(code: ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, message: 'Вы уже откликались!');
        }

        $post->applicants()->attach($student->id);

        return $this->successResponse(message: 'Вы откликнулись!');
    }

    public function getAppliedPosts(): JsonResponse
    {
        $student = Auth::user();

        $appliedPosts = $student->appliedPosts()->get();

        return $this->successResponse($appliedPosts, message: 'success');
    }

    public function getApplicantsForPost(int $id): JsonResponse
    {
        $student = Auth::user();

        $post = Post::query()->findOrFail($id);

        if ($post->student_id !== $student->id) {
            return $this->errorResponse(code: ResponseAlias::HTTP_FORBIDDEN, message: 'Доступ зпрещен!');
        }

        $applicants = $post->applicants()->get();

        return $this->successResponse($applicants, message: 'success');
    }
}
