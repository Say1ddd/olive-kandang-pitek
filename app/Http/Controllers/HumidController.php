<?php

namespace App\Http\Controllers;

use App\Models\Humid;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HumidController extends Controller
{
    /**
     * Store a newly created temperature in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $humidities = Humid::latest()->get();
        return response()->json(['humidities' => $humidities]);
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
            'value' => 'required', // Assuming the temperature value is sent in the 'value' field
        ]);

        // Create a new temperature record
        $humidity = new Humid();
        $humidity->value = $request->value;
        $humidity->save();

        // Return a success response
        if($humidity->save()) {
            return response()->json([
                'message' => 'humidity saved successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Failed to save humidity'
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Humid $humid)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Humid $humid)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Humid $humid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Humid $humid)
    {
        //
    }
}
