<?php

namespace App\Http\Controllers;

use App\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function showCommentsByPost(Request $request)
    {
        $commentsModel = new Comments();
        return response()->json($commentsModel->getCommentsByIdPost($request->input('idPost')));
    }

}
