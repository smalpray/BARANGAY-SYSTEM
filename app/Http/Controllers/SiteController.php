<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;

class SiteController extends Controller
{
     public function index()
    {
        $sites = Site::get();
        return response()->json($sites, 200);
    }
}
