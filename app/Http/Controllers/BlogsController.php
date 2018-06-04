<?php

namespace App\Http\Controllers;

use App\Blogs;
use Illuminate\Http\Request;


class BlogsController extends Controller
{
    public function show(Request $request)
    {
        $startIndex = $request->input('startIndex');
        $limit = $request->input('limit');

        $blogsModel = new Blogs();
        $blogsData = [];
        $blogsData['blogs'] = $blogsModel->getBlogs($startIndex, $limit);
        $blogsData['quantityBlogs'] = $blogsModel->getQuantityBlogs();
        return response()->json($blogsData);
    }

    public function showSingle($idBlog)
    {
        $blogsModel = new Blogs();
        return response()->json($blogsModel->getSingleBlog($idBlog));
    }

}
