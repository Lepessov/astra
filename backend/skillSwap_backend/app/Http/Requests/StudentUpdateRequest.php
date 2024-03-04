<?php

namespace App\Http\Requests;

class StudentUpdateRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'email' => 'email|unique:students,email',
            'gender' => 'in:Male,Female,Other',
            'phone_number' => 'regex:/^7[0-9]{9}$/|unique:students,phone_number',
            'name' => 'string|max:255',
            'surname' => 'string|max:255',
            'password' => 'string|min:8|confirmed',
        ];
    }

    public function messages(): array
    {
        return [
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already registered.',
            'gender.in' => 'Invalid gender. Valid options are: Male, Female, Other.',
            'phone_number.regex' => 'Please enter a valid Kazakhstan phone number.',
            'phone_number.unique' => 'This phone number is already registered.',
            'name.string' => 'Please enter a valid name.',
            'name.max' => 'The name must not exceed 255 characters.',
            'surname.string' => 'Please enter a valid surname.',
            'surname.max' => 'The surname must not exceed 255 characters.',
            'password.string' => 'Please enter a valid password.',
            'password.min' => 'The password must be at least 8 characters.',
            'password.confirmed' => 'The password confirmation does not match.',
        ];
    }
}
