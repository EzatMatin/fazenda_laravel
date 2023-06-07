<?php

namespace App\Http\Controllers\Standard;

use App\Http\Controllers\Controller;
use App\Models\Standard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StandardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {  // $standards = Standard::with('user:id,name')->latest()->get();
       // dd($standards);
        return Inertia::render('Standard/Index', [
            'standards' => Standard::with('user:id,name')->latest()->get()

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $this->validateRequest();

       // dd($validated);
        if ($request->file('imagem') === null){
            $data['imagem'] = 'imagem.png';
            }
        else{
            if ($request->file('imagem')->isValid() && $request->file('imagem')->isValid()) {
          
            //cria um nome para a imagem concatenado id e nome do user
                $name = 'standard_'.time();   // tirar os espacos com o kebab_case
                $extenstion = $request->imagem->extension(); // reguperar a extensao do arquivo de imagem
                $nameFile = "{$name}.{$extenstion}"; // concatenando
                $data['image'] = $nameFile;
               
               $upload = $request->file('imagem')->storeAs('standards', $nameFile);
               dd($upload);
            }
        }
           // dd($upload);

        $request->user()->standards()->create($validated);

        return redirect(route('standards.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Standard $standard)
    {
        $validated = $this->validateRequest();

        $standard->update($validated);

        return redirect(route('standards.index'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Standard $standard)
    {
       
        $standard->delete();

        return redirect(route('standards.index'));
    }

    private function validateRequest()
    {

        return request()->validate([

            'date'  => 'required',
            'nome'  => 'required',
            'email'  => 'required',
            'numero' => 'required',
            'imagem' => 'required',
            'texto'  => 'required',
    
       ]);
    }
}
