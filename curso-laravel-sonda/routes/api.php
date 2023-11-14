<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PublicoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::get('/', [AuthController::class, 'login']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::get('publico', [PublicoController::class, 'publico'])->name('login');



// Route::middleware('auth:api')->group(function () {
    Route::middleware('auth:api')->group(function () {
    // Route::group(['middleware'=>'auth'],function(){
    Route::resource('cliente', ClienteController::class);
});

// Route::middleware('auth:api')->group(function () {
//     // Route::group(['middleware'=>'auth'],function(){
//     Route::get('me', [AuthController::class, 'me']);
// });
// Route::resource('cliente', ClienteController::class)->middleware('auth');
// Route::resource('cliente', ClienteController::class);
