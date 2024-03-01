<?php

namespace App\Http\Controllers;

use App\Models\Speciality;
use App\Models\University;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class SpecialityController extends Controller
{
    use ApiResponse;

    public function index(): JsonResponse
    {
        $specialities = Speciality::query()->select('name')->get()->all();

        return $this->successResponse($specialities, ResponseAlias::HTTP_OK, "success");
    }
}
