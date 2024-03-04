<?php

namespace App\Http\Requests\Answers;

use App\Http\Requests\BaseRequest;

class AnswerUpdateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'content' => 'string',
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
            'content.string' => 'The content must be a string.',
        ];
    }
}
