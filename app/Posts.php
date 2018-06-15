<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Posts extends Model
{
    public function getPostsByIdBlog($idBlog, $startIndex, $limit)
    {
        return DB::table('posts')
            ->where('idBlog', '=', $idBlog)
            ->offset($startIndex)
            ->limit($limit)
            ->get();
    }

    public function getSinglePost($idPost)
    {
        return DB::table('posts')
            ->where('id', '=', $idPost)
            ->get();
    }

    public function getQuantityPostsByIdBlog($idBlog)
    {
        return DB::table('posts')
            ->where('idBlog', '=', $idBlog)
            ->count('idBlog');
    }
}
