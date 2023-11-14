<?php

namespace App\Repository;

use App\Models\User;
use Illuminate\Http\Request;

//use Your Model

/**
 * Class UserRepository.
 */
class UserRepository
{
    // /**
    //  * @return string
    //  *  Return the model
    //  */
    public function model()
    {
        return User::class;
    }

    private $model;

    public $guardName = 'web';

    public function getUser(Request $request)
    {
        $query = User::where('username', $request->username)->first();

        return $query;
    }

}
