<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{

    public function show(Request $request)
    {
        $idBlog = $request->input('idBlog');
        $postsModel = new Posts();
        return response()->json($postsModel->getPostsByIdBlog($idBlog));
    }

    public function showSingle($idPost)
    {
        $postsModel = new Posts();
        return response()->json($postsModel->getSinglePost($idPost)[0]);
    }

}
