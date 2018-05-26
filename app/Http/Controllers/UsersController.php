<?php

namespace App\Http\Controllers;

use App\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function show()
    {
        $usersModel = new Users();
        return response()->json($usersModel->getUsers());
    }

}
