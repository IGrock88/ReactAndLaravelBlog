<?php

namespace App\Http\Controllers;

use App\Blogs;
use Illuminate\Http\Request;


class BlogsController extends Controller
{
    public function show()
    {
        $blogsModel = new Blogs();
        return response()->json($blogsModel->getBlogs());
    }

    public function showSingle($idBlog)
    {
        $blogsModel = new Blogs();
        return response()->json($blogsModel->getSingleBlog($idBlog));
    }

}
