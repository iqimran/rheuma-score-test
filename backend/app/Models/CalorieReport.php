<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalorieReport extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'report_name',
        'report_slug',
        'input_data',
        'calculated_score',
        'interpretation',
        'ip_address',
        'country',
        'city',
        'user_agent',
    ];

    protected $casts = [
        'input_data' => 'array',
    ];
}
