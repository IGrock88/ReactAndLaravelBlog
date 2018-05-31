<?php

namespace App\Http\Controllers;

use App\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{

    public function show()
    {
        $usersModel = new Users();
        return response()->json($usersModel->getUsers());
    }
    public function getCurrentUser(){
        if(Auth::user() != null){
            return response()->json(['result'=> 1, 'data'=> Auth::user()]);
        }
        return response()->json(['result'=> 0]);
    }

}
