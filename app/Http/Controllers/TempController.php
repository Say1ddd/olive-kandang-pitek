<?php

namespace App\Http\Controllers;

use App\Models\Temp;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TempController extends Controller
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
        $temperatures = Temp::latest()->get();
        return response()->json(['temperatures' => $temperatures]);
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
        $temperature = new Temp();
        $temperature->value = $request->value;
        $temperature->save();

        // Return a success response
        if($temperature->save()) {
            return response()->json([
                'message' => 'temperature saved successfully'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Failed to save temperature'
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Temp $temp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Temp $temp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp $temp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp $temp)
    {
        //
    }
}
