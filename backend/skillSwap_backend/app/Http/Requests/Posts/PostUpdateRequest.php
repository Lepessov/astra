<?php

namespace app\Http\Requests\Posts;

use App\Http\Requests\BaseRequest;

class PostUpdateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'integer|exists:students,id',
            'title' => 'string',
            'photo' => 'string',
            'content' => 'string',
            'status' => 'boolean',
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
            'content.string' => 'The content must be a string.',
        ];
    }
}
