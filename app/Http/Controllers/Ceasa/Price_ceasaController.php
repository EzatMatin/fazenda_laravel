<?php

namespace App\Http\Controllers\Ceasa;

use App\Http\Controllers\Controller;
use App\Models\Price_ceasa_bh;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Arr;

class Price_ceasaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function consult(): Response
    {
        return Inertia::render('Ceasa/Ceasa',[
            ]);
    }

    public function research(Request $request)
    {

       $pesquisa = $request;

        $termos = $request->only('product', 'date_inicial', 'date_final' );
        $prepareQuery = "";
        $query = "";
        foreach ($termos as $nome => $valor) {

            if($valor){
              //  $query = $query . "where("."'".$nome."'".","."'"."="."'".","."'". $valor. "')->";
                if ($nome == "product")
                    $prepareQuery = $prepareQuery . $nome. ' LIKE "'. '%'.$valor.'%'. '" AND ';                  
                if ($nome == "date_inicial") 
                        $prepareQuery = $prepareQuery . 'date'. '>="'. $valor. '" AND ';
                if ($nome == "date_final")
                        $prepareQuery = $prepareQuery . 'date'. '<="'. $valor. '" AND ';
            }
         }
   
         $query = substr($prepareQuery, 0 , -5);

    // dd($query);

        if ($query == False){
            $cotacoes = Price_ceasa_bh::get();
      
            return Inertia::render('reports/TableReport', [
                'priceCeasa' =>  $cotacoes,
                ]);   
        }

        $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
        
        return Inertia::render('reports/TableReport', [
            'priceCeasa' =>  $cotacoes,
                ]);
    }

    public function lineChart()

    {
       $query = 'product LIKE "%pimentao amarelo%"';

       $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
       $cotacoes_json =  $cotacoes->toJson();

           return Inertia::render('reports/LineReport',[
            'priceCeasa' =>  $cotacoes,
                ]); 
        

    }

    public function barChart()

    {
       $query = 'product LIKE "%pimentao amarelo%"';
       
       dd($posts);
       $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
      
        return Inertia::render('Dashboard',[
            'priceCeasa' =>  $cotacoes,
                ]); 

    }


    /* public function index() 
    { 
       // $posts = Post::with('user:id,name')->latest()->get();
       // dd($posts);
        return Inertia::render('Chats/Index', [

        ]);
    } */
/*
    public function researchInicial()

    {

       // dd("researchInicial");
       $query = 'product LIKE "%pimentao amarelo%"';

       $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();

    //  $last_date = Price_ceasa_bh::whereRaw($query)->get()->MAX('date');

     
      
        return Inertia::render('reports/Research_inicial',[
            'priceCeasa' =>  $cotacoes,
     //       'last_date' =>  $last_date
                ]); 

    }
*/
    public function dashboard()

    {
      
       $query = 'product LIKE "%pimentao amarelo%"';

       $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
   
        return Inertia::render('Dashboard',[
            'priceCeasa' =>  $cotacoes,
            'posts' => Post::with('user:id,name')->latest()->get()
                ]); 
    }

    public function tableReport(): Response
    {
       // dd("researchInicial..");
        $cotacoes = [];
     
        return Inertia::render('reports/TableReport', [
            'priceCeasa' =>  $cotacoes,

        ]);
        
    }

    public function inicialReport(): Response
    {
       // dd("researchInicial");
        $cotacoes = [];
        $query = 'product LIKE "%pimentao amarelo%"';
        $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();


        return Inertia::render('reports/Research_inicial', [
            'priceCeasa' =>  $cotacoes,

        ]);
        
    }

    public function weeklyReport()

    {
       $query = 'product LIKE "%pimentao amarelo%"';

       $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
       $cotacoes_json =  $cotacoes->toJson();

        
           return Inertia::render('dashboard/Chart',[
            'priceCeasa' =>  $cotacoes/* , $getData */
                ]);   

    }

    public function researchInicial(Request $request)
    {

       $pesquisa = $request;

     //  dd("aqui researchinicial");

        $termos = $request->only('product', 'date_inicial', 'date_final' );
        $prepareQuery = "";
        $query = "";
        foreach ($termos as $nome => $valor) {

            if($valor){
              //  $query = $query . "where("."'".$nome."'".","."'"."="."'".","."'". $valor. "')->";
                if ($nome == "product")
                    $prepareQuery = $prepareQuery . $nome. ' LIKE "'. '%'.$valor.'%'. '" AND ';                  
                if ($nome == "date_inicial") 
                        $prepareQuery = $prepareQuery . 'date'. '>="'. $valor. '" AND ';
                if ($nome == "date_final")
                        $prepareQuery = $prepareQuery . 'date'. '<="'. $valor. '" AND ';
            }
         }
   
         $query = substr($prepareQuery, 0 , -5);

    // dd($query);

        if ($query == False){
            $cotacoes = Price_ceasa_bh::get();
      
            return Inertia::render('reports/Research_inicial', [
                'priceCeasa' =>  $cotacoes,
                ]);   
        }

        $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
        
        return Inertia::render('reports/Research_inicial', [
            'priceCeasa' =>  $cotacoes,
                ]);
    }

}
