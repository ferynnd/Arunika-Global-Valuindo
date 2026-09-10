<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'author',
        'role',
        'quote',
        'avatar',
        'status',
        'sort_order',
    ];

    /**
     * Scope query to only include active testimonials.
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}
