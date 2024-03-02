<?php

namespace app\Http\Requests\Posts;

use App\Http\Requests\BaseRequest;

class PostUpdateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'exists:students,id',
            'title' => 'string',
            'photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
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
            'student_id.exists' => 'The selected student ID is invalid.',
            'title.string' => 'The title must be a string.',
            'photo.image' => 'The photo must be an image.',
            'photo.mimes' => 'The photo must be a file of type: jpeg, png, jpg, gif.',
            'photo.max' => 'The photo may not be greater than 2048 kilobytes.',
            'content.string' => 'The content must be a string.',
            'status.boolean' => 'The status must be a boolean.',
        ];
    }
}
