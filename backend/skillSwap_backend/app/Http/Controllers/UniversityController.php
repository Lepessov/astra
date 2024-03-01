<?php

namespace App\Http\Controllers;

use App\Models\University;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class UniversityController extends Controller
{
    use ApiResponse;

    public function index(): JsonResponse
    {
        $universities = University::query()->select('name', 'code')->get()->all();

        return $this->successResponse($universities, ResponseAlias::HTTP_OK, "success");
    }
}
