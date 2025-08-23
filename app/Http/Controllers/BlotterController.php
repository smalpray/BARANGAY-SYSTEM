<?php

namespace App\Http\Controllers;

use App\Models\Blotter;
use Illuminate\Http\Request;

class BlotterController extends Controller
{
    public function store(Request $request)
    {
        Blotter::create($request->all());
        return response()->json(['message' => 'Barangay information created successfully'], 200);
    }
}
