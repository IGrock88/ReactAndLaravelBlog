<?php

use Illuminate\Http\Request;


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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', 'UsersController@show');
Route::get('/blogs', 'BlogsController@show');
Route::get('/singleBlog/{idBlog}', 'BlogsController@showSingle');
Route::get('/posts', 'PostsController@show');
Route::get('/singlePost/{idPost}', 'PostsController@showSingle');
Route::get('/comments', 'CommentsController@showCommentsByPost');
//Route::get('/test', 'Auth\LoginController@getCurrentUser');




