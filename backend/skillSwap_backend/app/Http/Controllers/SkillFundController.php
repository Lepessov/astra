<?php

namespace App\Http\Controllers;

use App\Http\Requests\SkillFund\SkillFundCreateRequest;
use App\Http\Requests\SkillFund\SkillFundUpdateRequest;
use App\Models\Post;
use App\Models\SkillFund;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class SkillFundController extends Controller
{
    use ApiResponse;

    public function mainIndex(): JsonResponse
    {
        $posts = SkillFund::query()
            ->select('skill_funds.title',
                'skill_funds.content',
                'skill_funds.status',
                'skill_funds.photo',
                'skill_funds.created_at',
                'students.name',
                'students.surname')
            ->join('students', 'skill_funds.student_id', '=', 'students.id')
            ->latest()
            ->take(5)
            ->get();

        return $this->successResponse($posts, ResponseAlias::HTTP_OK, "success");
    }

    public function index(): JsonResponse
    {
        $skillFunds = SkillFund::query()->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $skillFunds->items(),
            'page' => $skillFunds->currentPage(),
            'code' => ResponseAlias::HTTP_OK,
        ]);
    }

    public function create(SkillFundCreateRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('crowdfunding', 'public'); // Adjust folder and disk as needed
            $validatedData['photo'] = $photoPath;
        }

        $post = SkillFund::query()->create($validatedData);

        return $this->successResponse($post, ResponseAlias::HTTP_CREATED, "created");
    }

    public function update(SkillFundUpdateRequest $request, int $id): JsonResponse
    {
        $validatedData = $request->validated();

        $skillFund = SkillFund::query()->findOrFail($id);

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('crowdfunding', 'public'); // Adjust folder and disk as needed
            $validatedData['photo'] = $photoPath;
            if ($skillFund->photo) {
                Storage::disk('public')->delete($skillFund->photo);
            }
        }

        $skillFund->update($validatedData);

        return $this->successResponse($skillFund, ResponseAlias::HTTP_OK, "updated");
    }

    public function delete(int $id): JsonResponse
    {
        SkillFund::query()->findOrFail($id)->delete();

        return $this->successResponse(message:"deleted");
    }
}
