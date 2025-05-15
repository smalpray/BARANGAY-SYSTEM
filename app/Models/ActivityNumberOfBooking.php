<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityNumberOfBooking extends Model
{
    protected $fillable = [
        'activity_id',
        'age_group',
        'min',
        'max',
    ];
}
