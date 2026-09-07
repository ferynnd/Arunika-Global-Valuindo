<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'icon',
        'thumbnail',
        'excerpt',
        'content',
        'features',
        'status',
        'sort_order',
    ];

    protected $casts = [
        'features' => 'array',
        'sort_order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}
