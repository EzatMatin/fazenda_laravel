<?php

namespace App\Http\Controllers\Ceasa;

use App\Http\Controllers\Controller;
use App\Models\Price_ceasa_bh;
use App\Models\Post;
use App\Models\User;
use App\Models\Product;
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
    public function __construct(

       // public string $productSelect,
    )
    {
       // $this->middleware('auth'); 
        
    }

   // public $productSelect = null;
    
    Public function productResearch(Request $request){

       dd($request);
      
      $productSelect = $request;
        
       dd($productSelect);

      //  dd('aqui');

     // dd($this->productSelect);

      return to_route('mydashboard');
    }

<<<<<<< HEAD
    public function mydashboard(Request $request)
=======

    public function dashboard()
>>>>>>> ee4a7bfee60673656826a5456f510b5392b3360d

    {

     

     // dd($request);


       $productList = Product::all();
    //   $this->productSelect =  "pimentao verde";
/*
        if ($this->productSelect == null){
            $query = 'product LIKE "%pimentao amarelo%"';
        }else{
            $query = 'product LIKE ' .'"'.'%'. $productSelect.'%'.'"';
           // dd($query);
        }
    */  // dd($query);
      
       $query = 'product LIKE ". %pimentao amarelo%"';

     //  $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get(); 

       $cotacoes = Price_ceasa_bh::all();
       
       $lastDate = $cotacoes->last()->date;

       $lastCotacao = $cotacoes->last()->price_com;

      //dd($lastCotacao);

       $product = $cotacoes->last()->product;

    //   dd($productList);
      // dd($cotacoes);
   
        return Inertia::render('Dashboard',[
            'priceCeasa' =>  $cotacoes,
         //   'posts' => Post::with('user:id,name')->latest()->get(),
            'lastDate' => $lastDate,
            'lastCotacao' => $lastCotacao,
            'product' => $product,
            'productList'=> $productList,
             ]); 
    }



    public function search()

    {
       $productList = Product::all();
       //dd($productList);

        if ($this->productSelect == null){
            $query = 'product LIKE "%pimentao amarelo%"';
        }else{
            $query = "'product LIKE '."%". $this->productSelect."%"";
        }
      // dd($query);
      
     //  $query = 'product LIKE ". %pimentao amarelo%"';

       $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get(); 
 
       $lastDate = $cotacoes->last()->date;

       $lastCotacao = $cotacoes->last()->price_com;

       $product = $cotacoes->last()->product;
      // dd($cotacoes);
   
        return Inertia::render('dashboard/LineReportExpanded',[
            'priceCeasa' =>  $cotacoes,
            'posts' => Post::with('user:id,name')->latest()->get(),
            'lastDate' => $lastDate,
            'lastCotacao' => $lastCotacao,
            'product' => $product,
            'productList'=> $productList,
             ]); 
    }

    
    
    public function consult(): Response
    {
        return Inertia::render('Ceasa/Ceasa',[
            ]);
    }

    public function research(Request $request)
    {

       $pesquisa = $request;

    //  dd($pesquisa);

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
       
       //dd($posts);
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

     // dd($pesquisa);

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
