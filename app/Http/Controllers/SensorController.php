<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;

class SensorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch the latest record from the sensors table
        $newSensor = Sensor::latest()->first();
    
        // Extract temperature and humidity values
        $temperature = $newSensor->temp ?? null;
        $humidity = $newSensor->humid ?? null;
    
        // Return the temperature and humidity values
        return response()->json(['temperature' => $temperature, 'humidity' => $humidity]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'temp' => 'required',
            'humid' => 'required',
        ]);
    
        // Create a new sensor record
        $sensor = new Sensor();
        $sensor->temp = $request->temp;
        $sensor->humid = $request->humid;
        $sensor->save();
    
        if($sensor->save()) {
            return response()->json([
                'message' => 'sensor saved successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Failed to save sensor'
            ], 500);
        }
    }
    


    /**
     * Display the specified resource.
     */
    public function show(Sensor $sensor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sensor $sensor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sensor $sensor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sensor $sensor)
    {
        //
    }
}
