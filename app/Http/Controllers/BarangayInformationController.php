<?php

namespace App\Http\Controllers;

use App\Models\BarangayInformation;
use Illuminate\Http\Request;

class BarangayInformationController extends Controller
{
    public function store(Request $request)
    {
        BarangayInformation::create($request->all());
        return response()->json(['message' => 'Barangay information created successfully'], 200);
    }
}
