<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

trait ApiResponse
{
    public function successResponse(
        $data = null, $code = ResponseAlias::HTTP_OK, $message = ""
    ): JsonResponse
    {
        return response()->json(
            [
                'success' => true,
                'data' => $data,
                'message' => $message
            ],
            $code,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function errorResponse(
        $data = null,
        $code = ResponseAlias::HTTP_INTERNAL_SERVER_ERROR,
        $message = ""
    ): JsonResponse
    {
        return response()->json(
            [
                'success' => false,
                'data' => $data,
                'message' => $message
            ],
            $code,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}
