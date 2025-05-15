<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Activity extends Model
{
    protected $fillable = [
        'name',
        'product_code',
        'advance_from',
        'advance_to',
        'buffer_time_from',
        'buffer_time_to',
        'duration',
        'description1',
        'description2',
        'cancellation',
        'email_message',
        'deposit',
        'per_person',
        'per_package',
        'per_private',
        'per_public',
        // 'age_group',
        // 'minimum',
        // 'maximum',
        'monday_from',
        'monday_to',
        'tuesday_from',
        'tuesday_to',
        'wednesday_from',
        'wednesday_to',
        'thursday_from',
        'thursday_to',
        'friday_from',
        'friday_to',
        'saturday_from',
        'saturday_to',
        'sunday_from',
        'sunday_to',
        'isVisible',
        'isTax',
        'tax_price',
        'tax_description'
    ];

    public function activity_uploads(): HasMany
    {
        return $this->hasMany(ActivityUpload::class, 'activity_id', 'id');
    }
    public function activity_categories(): HasMany
    {
        return $this->hasMany(ActivityCategory::class, 'activity_id', 'id');
    }
    public function activity_resources(): HasMany
    {
        return $this->hasMany(ActivityResource::class, 'activity_id', 'id');
    }
}
