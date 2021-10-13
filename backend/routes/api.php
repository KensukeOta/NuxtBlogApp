<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function() {
    return 'helloworld';
});

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::post('/register', [RegisterController::class, 'register']);

Route::get('/posts/index', [PostController::class, 'index']);
Route::post('/posts/store', [PostController::class, 'store']);
Route::get('/posts/{id}', [PostController::class, 'show'])
    ->where('id', '[0-9]+');
Route::patch('/posts/{id}', [PostController::class, 'update'])
    ->where('id', '[0-9]+');
Route::delete('/posts/{id}', [PostController::class, 'destroy'])
    ->where('id', '[0-9]+');
