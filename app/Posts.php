<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Posts extends Model
{
    public function getPostsByIdBlog($idBlog)
    {
        return DB::table('posts')
            ->where('idBlog', '=', $idBlog)
            ->offset(1)
            ->limit(5)
            ->get();
    }

    public function getSinglePost($idPost)
    {
        return DB::table('posts')
            ->where('id', '=', $idPost)
            ->get();
    }
}
