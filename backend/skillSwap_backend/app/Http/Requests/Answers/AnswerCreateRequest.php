<?php

namespace App\Http\Requests\Answers;

use App\Http\Requests\BaseRequest;

class AnswerCreateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'content' => 'required|string',
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
            'content.required' => 'The content is required.',
            'content.string' => 'The content must be a string.',
        ];
    }
}
