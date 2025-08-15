<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangayOfficial extends Model
{
    //

    protected $fillable = [
        'id',
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'email_verified_at',
        'username',
        'user_type',
        'contact',
        'image',
        'password',
        'remember_token',
        'create_at',
        'updated_at',
    ];
}
