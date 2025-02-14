<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Meal extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'address',
        'price',
        'description',
        'status',
        'thumbnail',
        'owner',
        'max_capacity',
        'table_quantity',
        'seats_per_table',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner', 'id');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->withPivot('table_number', 'payment_status');
    }
}
