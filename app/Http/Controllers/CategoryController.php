<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // List all categories
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    // Store new category
    public function store(Request $request)
    {
        $data =  $request->validate([
            'category_id' => 'required|string|max:255|unique:categories',
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create($data);

        return response()->json($category, 200);
    }

    // Show single category
    public function show(Category $category)
    {
        return response()->json($category);
    }

    // Update category
    public function update(Request $request, Category $category)
    {
        $data =  $request->validate([
            'category_id' => 'required|string|max:255|unique:categories',
            'name' => 'required|string|max:255',
        ]);

        $category->update($data);

        return response()->json($category);
    }

    // Delete category
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
