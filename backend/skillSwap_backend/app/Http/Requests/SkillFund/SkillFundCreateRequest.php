<?php

namespace App\Http\Requests\SkillFund;

use App\Http\Requests\BaseRequest;

class SkillFundCreateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'required|exists:students,id',
            'title' => 'required|string',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'content' => 'required|min:3|max:1000',
            'status' => 'required|boolean',
            'amount_money' => 'required|integer',
            'planning_money' => 'required|integer',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'title.required' => 'The title field is required.',
            'title.string' => 'The title must be a string.',
            'title.max' => 'The title must not exceed :max characters.',
            'content.required' => 'The content field is required.',
            'amount_money.required' => 'The amount_money field is required.',
            'planning_money.required' => 'The planning_money field is required.',
            'amount_money.integer' => 'The amount_money must be integer.',
            'planning_money.integer' => 'The planning_money must be integer.',
            'photo.required' => 'The photo is required.',
            'photo.image' => 'The photo must be an image.',
            'photo.mimes' => 'The photo must be a file of type: jpeg, png, jpg, gif.',
            'photo.max' => 'The photo may not be greater than 2048 kilobytes.',
        ];
    }
}
