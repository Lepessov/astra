<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class FacultyController extends Controller
{
    use ApiResponse;

    public function index(): JsonResponse
    {
        $faculties = Faculty::query()->select('name')->get()->all();

        return $this->successResponse($faculties, ResponseAlias::HTTP_OK, "success");
    }
}
