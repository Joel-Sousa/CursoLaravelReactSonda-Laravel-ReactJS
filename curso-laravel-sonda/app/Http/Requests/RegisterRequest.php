<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;


class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'username' => 'required|min:4',
            'password' => 'required|min:8',
            'mobile' => 'required|min:8',
            'mobile_output' => 'required|min:6',
            'username_token' => 'required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'error'   => true,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'name.required' =>  __('auth.name.required'),
            'email.required' => __('auth.email.required'),
            'email.email' => __('auth.email.invalid')
        ];
    }
}
