<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    use HasFactory;

    protected $fillable = [
        'temp',
        'humid',
        'recorded_at',
    ];

    protected $casts = [
        'temp' => 'float',
        'humid' => 'float',
        'recorded_at' => 'datetime',
    ];
}
