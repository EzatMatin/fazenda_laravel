<?php

namespace Database\Seeders;

use App\Models\Price_ceasa_bh;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PriceCeasaBhSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Price_ceasa_bh::create([
                        
            'date'               => '2021/01/01',
            'product'            => 'Pimentao Amarelo',
            'embalagem'          => 'cx',
            'price_min'          => 100,
            'price_com'          => 200,
            'price_max'          => 150,
            'situation'          => 'OK',
    
            ]);

            Price_ceasa_bh::create([
                        
                'date'               => '2021/01/01',
                'product'            => 'Pimentao Amarelo',
                'embalagem'          => 'cx',
                'price_min'          => 100,
                'price_com'          => 200,
                'price_max'          => 150,
                'situation'          => 'OK',
        
                ]);

                Price_ceasa_bh::create([
                        
                    'date'               => '2021/02/02',
                    'product'            => 'Pimentao Verde',
                    'embalagem'          => 'cx',
                    'price_min'          => 100,
                    'price_com'          => 200,
                    'price_max'          => 150,
                    'situation'          => 'OK',
            
                    ]);

                    Price_ceasa_bh::create([
                        
                        'date'               => '2021/01/01',
                        'product'            => 'Pimentao Amarelo',
                        'embalagem'          => 'cx',
                        'price_min'          => 20,
                        'price_com'          => 40,
                        'price_max'          => 30,
                        'situation'          => 'OK',
                
                        ]);

                        Price_ceasa_bh::create([
                        
                            'date'               => '2021/01/01',
                            'product'            => 'Pimentao Amarelo',
                            'embalagem'          => 'cx',
                            'price_min'          => 20,
                            'price_com'          => 40,
                            'price_max'          => 30,
                            'situation'          => 'OK',
                    
                            ]);

                            Price_ceasa_bh::create([
                        
                                'date'               => '2021/01/01',
                                'product'            => 'Pimentao Amarelo',
                                'embalagem'          => 'cx',
                                'price_min'          => 20,
                                'price_com'          => 40,
                                'price_max'          => 30,
                                'situation'          => 'OK',
                        
                                ]);

                                Price_ceasa_bh::create([
                        
                                    'date'               => '2021/01/02',
                                    'product'            => 'Pimentao Amarelo',
                                    'embalagem'          => 'cx',
                                    'price_min'          => 20,
                                    'price_com'          => 40,
                                    'price_max'          => 30,
                                    'situation'          => 'OK',
                            
                                    ]);

                                    Price_ceasa_bh::create([
                        
                                        'date'               => '2021/01/02',
                                        'product'            => 'Pimentao Vermelho',
                                        'embalagem'          => 'cx',
                                        'price_min'          => 20,
                                        'price_com'          => 40,
                                        'price_max'          => 30,
                                        'situation'          => 'OK',
                                
                                        ]);
                                        Price_ceasa_bh::create([
                        
                                            'date'               => '2021/01/02',
                                            'product'            => 'Pimentao Vermelho',
                                            'embalagem'          => 'cx',
                                            'price_min'          => 20,
                                            'price_com'          => 40,
                                            'price_max'          => 30,
                                            'situation'          => 'OK',
                                    
                                            ]);
    }
}