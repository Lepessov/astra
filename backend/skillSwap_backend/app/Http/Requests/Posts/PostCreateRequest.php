<?php

namespace App\Http\Requests\Posts;

use App\Http\Requests\BaseRequest;

class PostCreateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'required|exists:students,id',
            'title' => 'required|string',
            'photo' => 'required|string',
            'content' => 'required|string',
            'status' => 'required|boolean',
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
            'content.string' => 'The content must be a string.',
            // Add custom messages for other rules as needed
        ];
    }
}
