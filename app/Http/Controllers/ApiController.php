<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sensor;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $newSensorData = Sensor::all();
        return response()->json($newSensorData);
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
        $request->validate([
            'temp' => 'required',
            'humid' => 'required',
        ]);
    
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
