<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Http\Services\ClienteService;
use Illuminate\Support\Facades\Auth;

class PublicoController extends Controller
{
    public function publico(){
        // return 'ok';
        return response()->json(auth('api')->user());
        // return auth('api')->user();
    }
}
