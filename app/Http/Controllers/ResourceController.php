<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    // List all categories
    public function index()
    {
        $categories = Resource::all();
        return response()->json($categories);
    }

    // Store new category
    public function store(Request $request)
    {
        $data =  $request->validate([
            'resource_id' => 'required|string|max:255|unique:resources',
            'name' => 'required|string|max:255',
        ]);

        $resource = Resource::create($data);

        return response()->json('$resource', 200);
    }

    // Show single category
    public function show(Resource $resource)
    {
        return response()->json($resource);
    }

    // Update category
    public function update(Request $request, Resource $resource)
    {
        $data =  $request->validate([
            'resource_id' => 'required|string|max:255|unique:resources',
            'name' => 'required|string|max:255',
        ]);

        $resource->update($data);

        return response()->json($resource);
    }

    // Delete category
    public function destroy(Resource $resource)
    {
        $resource->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
