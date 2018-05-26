<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Users extends Model
{
    public function getUsers()
    {
        return DB::table('users')->select('id','name', 'email', 'login', 'website', 'phone')->get();
    }

    public function createUser(User $user)
    {
        //return DB::table('users')->insert()
    }
}
