<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Comments extends Model
{
    function getCommentsByIdPost($idPost)
    {
        return DB::table('comments')
            ->join('users', 'users.id', '=', 'comments.idUser')
            ->select('comments.body as body', 'users.email as email', 'comments.title as title', 'comments.id as id')
            ->where('comments.idPost', '=', $idPost)
            ->get();
    }
}
