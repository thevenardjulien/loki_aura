<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;

class Meal extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'address',
        'price',
        'date',
        'description',
        'status',
        'thumbnail',
        'owner',
        'max_capacity',
        'table_quantity',
        'seats_per_table',
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d H:i:s',
    ];

    public function getPhotoUrlAttribute()
    {
        if ($this->photo) {
            return Storage::url($this->photo); // url de la photo
        }
        // s'il n'y a pas de photo on envoie une photo par défaut
        return asset('images/defaut_photo.png');
    }


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
