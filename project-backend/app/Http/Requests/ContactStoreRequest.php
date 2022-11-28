<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'        => 'required',
            'email'       => 'required|email|unique:contacts',
            'phone'       => 'required',
            'designation' => 'required'
        ];
    }

    // public function attributes()
    // {
    //     return [
    //         'designation_id' => 'designation',
    //     ];
    // }
}
