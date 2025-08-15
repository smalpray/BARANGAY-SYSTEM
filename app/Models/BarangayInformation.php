<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangayInformation extends Model
{

    protected $fillable = [

        'official_id',
        'first_name',
        'middle_name',
        'last_name',
        'suffix',
        'birth_date',
        'birth_place',
        'gender',
        'age',
        'civil_status',
        'religion',
        'nationality',
        'municipality',
        'zip',
        'barangay',
        'house_number',
        'street',
        'address',
        'email_address',
        'contact_number',
        'fathers_name',
        'mothers_name',
        'guardian',
        'guardian_contact',
        'image',

    ];
}
