<?php

namespace App\Http\Requests\Question;

use App\Http\Requests\BaseRequest;

class QuestionUpdateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'exists:students,id',
            'title' => 'string',
            'photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
            'description' => 'string',
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
            'description.string' => 'The content must be a string.',
            'status.boolean' => 'The status must be a boolean.',
        ];
    }
}
