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
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
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
            'student_id.required' => 'The student ID is required.',
            'student_id.exists' => 'The selected student ID is invalid.',
            'title.required' => 'The title is required.',
            'title.string' => 'The title must be a string.',
            'photo.required' => 'The photo is required.',
            'photo.image' => 'The photo must be an image.',
            'photo.mimes' => 'The photo must be a file of type: jpeg, png, jpg, gif.',
            'photo.max' => 'The photo may not be greater than 2048 kilobytes.',
            'content.required' => 'The content is required.',
            'content.string' => 'The content must be a string.',
            'status.required' => 'The status is required.',
            'status.boolean' => 'The status must be a boolean.',
        ];
    }
}
