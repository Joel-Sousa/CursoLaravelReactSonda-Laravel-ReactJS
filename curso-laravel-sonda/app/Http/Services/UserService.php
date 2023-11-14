<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UsernameToken;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use App\Repository\UserRepository;

class UserService
{
    private $model;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getUser(Request $request)
    {
        $user = $this->userRepository->getUser($request);
        return $user;
    }
}
