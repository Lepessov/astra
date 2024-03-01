<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentLoginRequest;
use App\Http\Requests\StudentRegisterRequest;
use App\Models\Student;
use App\Services\StudentService;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class StudentController extends Controller
{
    use ApiResponse;

    public function register(StudentRegisterRequest $request, StudentService $service): JsonResponse
    {
        $data = $request->validated();

        $isStudent = $service->isCorporateEmail($data['email']);

        $student = new Student([
            'email' => $data['email'],
            'gender' => $data['gender'],
            'phone_number' => $data['phone_number'],
            'name' => $data['name'],
            'surname' => $data['surname'],
            'password' => Hash::make($data['password']),
            'is_student' => $isStudent,
        ]);

        $student->save();

        return $this->successResponse(code: ResponseAlias::HTTP_CREATED, message: 'Student created successfully!');
    }

    public function login(StudentLoginRequest $request): JsonResponse
    {
        $data = $request->validated();

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return $this->errorResponse(code: ResponseAlias::HTTP_UNAUTHORIZED, message: "Неверные данные!");
        }

        $student = Student::query()->where('email', $data['email'])->first();
        $token = $student->createToken('API TOKEN')->plainTextToken;

        return $this->successResponse(data:[
            'token' => $token,
            'student_id' => $student->id,
            'email' => $student->email,
            'is_student' => $student->is_student,
            'photo' => $student->photo ?? '',
            'name' => $student->name,
        ], message: 'Logged in successfully!');
    }

    public function logout(): JsonResponse
    {
        Auth::user()->tokens()->delete();

        return $this->successResponse(message: 'Logged out successfully!');
    }
}
