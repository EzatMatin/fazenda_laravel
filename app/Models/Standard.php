<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Standard extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'nome',
        'email',
        'numero',
        'imagem',
        'texto'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
