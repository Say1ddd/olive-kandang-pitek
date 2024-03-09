<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
        'recorded_at',
    ];

    protected $casts = [
        'value' => 'decimal:5,2',
        'recorded_at' => 'datetime',
    ];
}
