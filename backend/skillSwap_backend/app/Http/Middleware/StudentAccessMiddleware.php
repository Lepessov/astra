<?php

namespace App\Http\Middleware;

use App\Traits\ApiResponse;
use Closure;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class StudentAccessMiddleware
{
    use ApiResponse;

    public function handle($request, Closure $next)
    {
        $student = Auth::user();

        if ($student && $student->is_student) {
            return $next($request);
        }

        return $this->errorResponse(code: ResponseAlias::HTTP_FORBIDDEN, message: 'Доступ разрешен только студентам!');
    }
}
