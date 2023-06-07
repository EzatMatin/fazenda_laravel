<?php

namespace App\Http\Controllers;
use App\Models\Price_ceasa_bh;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    
    public function index() 
    { 
       // $posts = Post::with('user:id,name')->latest()->get();
       // dd($posts);
        return Inertia::render('Chats/Index', [
            'posts' => Post::with('user:id,name')->latest()->get()

        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'body' => 'required|string|max:255'
        ]);
        $query = 'product LIKE "%pimentao amarelo%"';
        $request->user()->posts()->create($validated);
        $cotacoes = Price_ceasa_bh::whereRaw($query)->orderBy('date')->get();
             //  dd($cotacoes);

        return Inertia::render('Dashboard',[
            'priceCeasa' =>  $cotacoes,

            'posts' => Post::with('user:id,name')->latest()->get()
                ]); 
        
    }

    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);

        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'body' => 'required|string|max:255',
        ]);

        $post->update($validated);

        return redirect(route('posts.index'));

    }
       
    public function destroy(Post $post)
    {
        $this->authorize('delete',$post);

        $post->delete();

        return redirect(route('posts.index'));
    }
}
