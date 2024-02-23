<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class BaseRequest extends FormRequest
{
    /**
     * @throws HttpResponseException
     */
    protected function failedValidation(Validator $validator)
    {
        $errorResponse = response()->json([
            'message' => 'Validation error',
            'errors'  => $validator->errors(),
        ], ResponseAlias::HTTP_UNPROCESSABLE_ENTITY);

        throw new HttpResponseException($errorResponse);
    }
}
