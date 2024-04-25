<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sensor;
use Illuminate\Http\Request;

class SensorController extends Controller
{
    public function index()
    {
        $temperatureData = Sensor::select('temp', 'recorded_at')->latest()->first();
        $humidityData = Sensor::select('humid', 'recorded_at')->latest()->first();
    
        return Inertia::render('Sensor', [
            'temperatureData' => $temperatureData,
            'humidityData' => $humidityData,
        ]);
    }
}