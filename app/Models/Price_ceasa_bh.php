<?php

namespace App\Models;
use Carbon\Carbon;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Price_ceasa_bh extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'date',
        'product',
        'embalagem',
        'price_min',
        'price_com',
        'price_max',
        'situation',
    ];

 /*    public function getData()
    {
        return [
            'price_min' => $this->price_min,
            'price_max' => $this->price_max,
        ];
    } */
    
    public function getDateAttribute($value)
     {
         return Carbon::parse($value)->format('d/m/Y');
     }

     public function product()
     {
         return $this->belongsTo(product::class);
     }


}
