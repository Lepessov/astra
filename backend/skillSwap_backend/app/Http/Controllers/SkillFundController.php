<?php

namespace app\Http\Controllers;

use App\Models\Post;
use app\Models\SkillFund;
use App\Traits\ApiResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class SkillFundController extends Controller
{
    use ApiResponse;

    public function mainIndex()
    {
        $posts = SkillFund::query()->latest()->take(5)->get();

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }
}
