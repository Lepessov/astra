<?php

namespace app\Http\Requests\SkillFund;

use App\Http\Requests\BaseRequest;

class SkillFundUpdateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'integer|exists:students,id',
            'title' => 'string',
            'photo' => 'string',
            'content' => 'string',
            'status' => 'boolean',
            'amount_money' => 'integer',
            'planning_money' => 'integer',
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
            'title.string' => 'The title must be a string.',
            'title.max' => 'The title must not exceed :max characters.',
            'content.string' => 'The content must be a string.',
            'amount_money.integer' => 'The amount_money must be integer.',
            'planning_money.integer' => 'The planning_money must be integer.',
        ];
    }
}
