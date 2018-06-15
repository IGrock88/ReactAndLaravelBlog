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
        $postsData = [];
        $postsData['posts'] = $postsModel->getPostsByIdBlog($idBlog, $request->input('startIndex'),
            $request->input('limit'));
        $postsData['quantityPosts'] = $postsModel->getQuantityPostsByIdBlog($idBlog);
        return response()->json($postsData);
    }

    public function showSingle($idPost)
    {
        $postsModel = new Posts();
        return response()->json($postsModel->getSinglePost($idPost)[0]);
    }

}
