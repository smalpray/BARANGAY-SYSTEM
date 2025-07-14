<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::where('department', $request->department)->get();

        return response()->json($categories, 200);
    }

    public function show($department)
    {
        $categories = Category::where('department', $department)->get();

        return response()->json($categories, 200);
    }

    public function store(Request $request)
    {
        $categories = Category::create([
            'name' => $request->name,
            'department' => $request->department,
        ]);

        return response()->json($categories, 200);
    }
}
