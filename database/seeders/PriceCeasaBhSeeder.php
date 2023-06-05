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
                        
            'date'               => '2021/01/03',
            'product'            => 'Pimentao Amarelo',
            'embalagem'          => 'cx',
            'price_min'          => 100,
            'price_com'          => 200,
            'price_max'          => 150,
            'situation'          => 'OK',
    
            ]);

            Price_ceasa_bh::create([
                        
                'date'               => '2021/01/04',
                'product'            => 'Pimentao Amarelo',
                'embalagem'          => 'cx',
                'price_min'          => 100,
                'price_com'          => 200,
                'price_max'          => 150,
                'situation'          => 'OK',
        
                ]);

                Price_ceasa_bh::create([
                        
                    'date'               => '2021/01/03',
                    'product'            => 'Pimentao Verde',
                    'embalagem'          => 'cx',
                    'price_min'          => 20,
                    'price_com'          => 30,
                    'price_max'          => 25,
                    'situation'          => 'OK',
            
                    ]);

                    Price_ceasa_bh::create([
                        
                        'date'               => '2021/01/05',
                        'product'            => 'Pimentao Amarelo',
                        'embalagem'          => 'cx',
                        'price_min'          => 20,
                        'price_com'          => 40,
                        'price_max'          => 30,
                        'situation'          => 'OK',
                
                        ]);

                        Price_ceasa_bh::create([
                        
                            'date'               => '2021/01/06',
                            'product'            => 'Pimentao Amarelo',
                            'embalagem'          => 'cx',
                            'price_min'          => 60,
                            'price_com'          => 80,
                            'price_max'          => 70,
                            'situation'          => 'OK',
                    
                            ]);

                            Price_ceasa_bh::create([
                        
                                'date'               => '2021/01/07',
                                'product'            => 'Pimentao Amarelo',
                                'embalagem'          => 'cx',
                                'price_min'          => 70,
                                'price_com'          => 80,
                                'price_max'          => 75,
                                'situation'          => 'OK',
                        
                                ]);

                                Price_ceasa_bh::create([
                        
                                    'date'               => '2021/01/08',
                                    'product'            => 'Pimentao Amarelo',
                                    'embalagem'          => 'cx',
                                    'price_min'          => 20,
                                    'price_com'          => 40,
                                    'price_max'          => 30,
                                    'situation'          => 'OK',
                            
                                    ]);

                                    Price_ceasa_bh::create([
                        
                                        'date'               => '2021/01/03',
                                        'product'            => 'Pimentao Vermelho',
                                        'embalagem'          => 'cx',
                                        'price_min'          => 20,
                                        'price_com'          => 40,
                                        'price_max'          => 30,
                                        'situation'          => 'OK',
                                
                                        ]);
                                        Price_ceasa_bh::create([
                        
                                            'date'               => '2021/01/04',
                                            'product'            => 'Pimentao Vermelho',
                                            'embalagem'          => 'cx',
                                            'price_min'          => 70,
                                            'price_com'          => 90,
                                            'price_max'          => 80,
                                            'situation'          => 'OK',
                                    
                                            ]);

                                            Price_ceasa_bh::create([
                        
                                                'date'               => '2021/01/05',
                                                'product'            => 'Pimentao Vermelho',
                                                'embalagem'          => 'cx',
                                                'price_min'          => 70,
                                                'price_com'          => 90,
                                                'price_max'          => 80,
                                                'situation'          => 'OK',
                                        
                                                ]);

                                                Price_ceasa_bh::create([
                        
                                                    'date'               => '2021/01/06',
                                                    'product'            => 'Pimentao Vermelho',
                                                    'embalagem'          => 'cx',
                                                    'price_min'          => 70,
                                                    'price_com'          => 90,
                                                    'price_max'          => 80,
                                                    'situation'          => 'OK',
                                            
                                                    ]);

                                            Price_ceasa_bh::create([
                        
                                                'date'               => '2021/01/03',
                                                'product'            => 'Pimentao Verde',
                                                'embalagem'          => 'cx',
                                                'price_min'          => 100,
                                                'price_com'          => 200,
                                                'price_max'          => 150,
                                                'situation'          => 'OK',
                                        
                                                ]);

                                                Price_ceasa_bh::create([
                        
                                                    'date'               => '2021/01/04',
                                                    'product'            => 'Pimentao Verde',
                                                    'embalagem'          => 'cx',
                                                    'price_min'          => 10,
                                                    'price_com'          => 20,
                                                    'price_max'          => 15,
                                                    'situation'          => 'OK',
                                            
                                                    ]);

                                                    Price_ceasa_bh::create([
                        
                                                        'date'               => '2021/01/05',
                                                        'product'            => 'Pimentao Verde',
                                                        'embalagem'          => 'cx',
                                                        'price_min'          => 10,
                                                        'price_com'          => 20,
                                                        'price_max'          => 15,
                                                        'situation'          => 'OK',
                                                
                                                        ]);
                                                        Price_ceasa_bh::create([
                        
                                                            'date'               => '2021/01/06',
                                                            'product'            => 'Pimentao Verde',
                                                            'embalagem'          => 'cx',
                                                            'price_min'          => 100,
                                                            'price_com'          => 200,
                                                            'price_max'          => 150,
                                                            'situation'          => 'OK',
                                                    
                                                            ]);
    }
}