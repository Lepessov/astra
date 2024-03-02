<?php

namespace App\Http\Controllers;

use App\Http\Requests\Posts\PostCreateRequest;
use App\Http\Requests\Posts\PostUpdateRequest;
use App\Models\Post;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class PostController extends Controller
{
    use ApiResponse;

    public function mainIndex(): JsonResponse
    {
        $posts = Post::query()
            ->select('posts.title',
                'posts.content',
                'posts.status',
                'posts.photo',
                'posts.created_at',
                'students.name',
                'students.surname')
            ->join('students', 'posts.student_id', '=', 'students.id')
            ->latest()
            ->take(5)
            ->get();

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }

    public function index(): JsonResponse
    {
        $posts = Post::query()->paginate(10);

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
}
