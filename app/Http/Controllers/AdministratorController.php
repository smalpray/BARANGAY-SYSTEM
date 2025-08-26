<?php

namespace App\Http\Controllers;

use App\Models\Administrator;
use Illuminate\Http\Request;

class AdministratorController extends Controller
{
    public function store(Request $request)
    {
        Administrator::create($request->all());
        return response()->json(['message' => 'New administrator created successfully'], 200);
    }
}
