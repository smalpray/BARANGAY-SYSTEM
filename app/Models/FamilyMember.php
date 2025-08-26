<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FamilyMember extends Model
{
      protected $fillable = [
        'family_id',
        'residentId',
        'isExistingResident',
        'newResidentName',
        'relationship',
        'role',
        'searchTerm',
    ];
}
