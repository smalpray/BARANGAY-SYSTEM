<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityResource extends Model
{
    protected $fillable = [
        'activity_id',
        'resource_id',
    ];
}
