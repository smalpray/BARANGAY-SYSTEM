<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Category extends Model
{
    //
    protected $fillable = [
        'category_id',
        'name'
    ];

    public function activity_categories(): HasMany
    {
        return $this->hasMany(ActivityCategory::class, 'category_id', 'category_id')->with(['activity','uploads']);
    }
}
