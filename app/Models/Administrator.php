<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Administrator extends Model
{
    protected $fillable = [




        'firstName',
        'middleName',
        'lastName',
        'username',
        'password',
        'contactNumber',



    ];
}
