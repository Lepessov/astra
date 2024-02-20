<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class PostController extends Controller
{
    use ApiResponse;

    public function mainIndex()
    {
        $posts = Post::query()->latest()->take(5)->get();

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }
}
