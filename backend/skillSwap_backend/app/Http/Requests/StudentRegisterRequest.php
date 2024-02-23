<?php

namespace App\Http\Requests;

class StudentRegisterRequest extends BaseRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:students,email',
            'gender' => 'required|in:Male,Female,Other',
            'phone_number' => 'required|regex:/^7[0-9]{9}$/|unique:students,phone_number',
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'The email field is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'This email is already registered.',
            'gender.required' => 'Please select a gender.',
            'gender.in' => 'Invalid gender. Valid options are: Male, Female, Other.',
            'phone_number.required' => 'The phone number field is required.',
            'phone_number.regex' => 'Please enter a valid Kazakhstan phone number.',
            'phone_number.unique' => 'This phone number is already registered.',
            'name.required' => 'The name field is required.',
            'name.string' => 'Please enter a valid name.',
            'name.max' => 'The name must not exceed 255 characters.',
            'surname.required' => 'The surname field is required.',
            'surname.string' => 'Please enter a valid surname.',
            'surname.max' => 'The surname must not exceed 255 characters.',
            'password.required' => 'The password field is required.',
            'password.string' => 'Please enter a valid password.',
            'password.min' => 'The password must be at least 8 characters.',
            'password.confirmed' => 'The password confirmation does not match.',
        ];
    }
}
