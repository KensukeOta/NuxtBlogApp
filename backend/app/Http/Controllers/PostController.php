<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->orderBy('created_at', 'desc')->get();
        return $posts;
    }

    public function show($id)
    {
        $post = Post::with('user')->findOrFail($id);
        return $post;
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'between:1,50'],
            'body' => ['required'],
            'user_id' => ['required'],
        ]);

        Post::create([
            'title' => $request->title,
            'body' => $request->body,
            'user_id' => $request->user_id,
        ]);
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'title' => ['required', 'between:1,50'],
            'body' => ['required'],
            'user_id' => ['required'],
        ]);

        Post::where('id', $id)
            ->update([
                'title' => $request->title,
                'body' => $request->body,
                'user_id' => $request->user_id,
            ]);
    }

    public function destroy($id)
    {
        Post::where('id', $id)
            ->delete();
    }
}
