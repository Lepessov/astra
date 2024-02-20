<?php

namespace app\Http\Controllers;

use App\Models\Post;
use app\Models\Question;
use App\Traits\ApiResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class QuestionController extends Controller
{
    use ApiResponse;

    public function mainIndex()
    {
        $posts = Question::query()->latest()->take(5)->get();

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }
}
