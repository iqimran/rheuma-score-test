<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCalorieReportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'gender' => 'nullable|in:male,female',
            'age' => 'required|integer|min:1|max:120',
            'weight' => 'required|numeric|min:1',
            'weight_unit' => 'required|in:kg,lb',
            // height: either provide cm or ft/in
            'height_cm' => 'nullable|numeric|min:30|max:300',
            'height_ft' => 'nullable|integer|min:0|max:10',
            'height_in' => 'nullable|integer|min:0|max:11',
            'height_unit' => 'required|in:cm,ft_in',
            'activity_level' => 'required|in:sedentary,lightly_active,moderately_active,very_active,extra_active',
        ];
    }
}
