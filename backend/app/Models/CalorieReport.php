<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalorieReport extends Model
{
    protected $fillable = [
        'user_id',
        'gender',
        'age',
        'weight_kg',
        'height_cm',
        'height_display',
        'weight_unit',
        'height_unit',
        'activity_level',
        'result_calories',
        'breakdown',
        'payload',
    ];

    protected $casts = [
        'breakdown' => 'array',
        'payload' => 'array',
    ];
}
