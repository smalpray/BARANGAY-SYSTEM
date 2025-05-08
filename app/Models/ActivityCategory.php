<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ActivityCategory extends Model
{
    protected $fillable = [
        'activity_id',
        'category_id',
    ];

    public function activity(): HasOne
    {
        return $this->hasOne(Activity::class, 'id', 'activity_id');
    }
    public function uploads(): HasMany
    {
        return $this->hasMany(ActivityUpload::class, 'activity_id', 'activity_id');
    }
}
