<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{
     public function store(Request $request)
    {
        Position::create($request->all());
        return response()->json(['message' => 'Barangay information created successfully'], 200);
    }
}
