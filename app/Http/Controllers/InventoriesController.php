<?php

namespace App\Http\Controllers;


use App\Models\Inventories;
use Illuminate\Http\Request;

class InventoriesController extends Controller
{
     public function store(Request $request)
    {
        Inventories::create($request->all());
        return response()->json(['message' => 'New Item created successfully'], 200);
    }
}
