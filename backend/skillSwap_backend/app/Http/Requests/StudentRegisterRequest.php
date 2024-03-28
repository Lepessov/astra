<?php

namespace App\Http\Requests;

class StudentRegisterRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'emailAddress' => 'required|email',
            'gender' => 'required|in:Male,Female', // Adjust the genders as needed.
            'contact_number' => 'required|numeric',
            'name' => 'required|string',
            'lastname' => 'required|string',
            'course' => 'required|string',
            'password' => 'required|string|min:8', // Adjust the password validation rules as needed.
            'accountType' => 'required|in:student,user', // Validate account type
        ];
    }

    public function messages(): array
    {
        return [
            'emailAddress.required' => 'The email address is required.',
            'emailAddress.email' => 'Please enter a valid email address.',
            'gender.required' => 'Please select a gender.',
            'gender.in' => 'Invalid gender value.',
            'contact_number.required' => 'The contact number is required.',
            'contact_number.numeric' => 'The contact number must be numeric.',
            'name.required' => 'The name is required.',
            'name.string' => 'The name must be a string.',
            'lastname.required' => 'The last name is required.',
            'lastname.string' => 'The last name must be a string.',
            'course.required' => 'The course is required.',
            'course.string' => 'The course must be a string.',
            'password.required' => 'The password is required.',
            'password.string' => 'The password must be a string.',
            'password.min' => 'The password must be at least :min characters.',
            'accountType.required' => 'The account type is required.',
            'accountType.in' => 'Invalid account type value.',
        ];
    }
}
