<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Blogs extends Model
{
    public function getBlogs()
    {
        return DB::table('blogs')
            ->join('users', 'users.id', '=', 'blogs.idAuthor')
            ->select('blogs.id as id', 'blogs.title as title', 'users.name as author', 'idAuthor as idUser')
            ->get();
    }

    public function getSingleBlog($idBlog)
    {
        return DB::table('blogs')
            ->join('users', 'users.id', '=', 'blogs.idAuthor')
            ->select('blogs.id as id', 'blogs.title as title', 'users.name as author', 'idAuthor as idUser')
            ->where('blogs.id', '=', $idBlog)
            ->get();

    }
}
