<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Http\Services\UserService;
use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Passport;
use App\Http\Repository\UserRepository;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{

     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct(UserService $userService)
    {
        // $this->middleware('auth:api', ['except' => ['login', 'register', 'checkUser']]);
        $this->middleware('auth:api', ['except' => ['login']]);
        $this->userService = $userService;
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request){
        $credenciais = request(['email', 'password']);


        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        // if (auth('api')->attempt($credenciais)) {


            if (empty($request->input('email')) || empty($request->input('password'))) {
                return response()->json([
                    "erro" => true,
                    "messagem" => "Usuário ou Senha em branco",
                ]);
            }
            // $userLogado =  Auth::attempt(['email' => $request->email, 'password' => $request->password]);

            $token_time = now()->addHours(8);
            Passport::personalAccessTokensExpireIn($token_time);
            $user = Auth::user();
            // dd($user);
            $token = $user->createToken('MyApp')->accessToken;

            $u = User::where('id', $user->id)->first();
            $cliente = Cliente::where('user_id', $u->id)->first();

            $tst = auth()->user();

            return response()->json(compact('token', 'user', 'token_time'));
        }else{
            return response()->json([
                "erro" => true,
                "messagem" => "Usuário ou senha inválido",
            ]);
        }
    }

    public function register(RegisterRequest $request)
    {
        $response = $this->userService->register($request);
        return response()->json($response, $response['code']);
    }

    public function logout()
    {
        auth('api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    public function checkUser()
    {
        $user = auth('api')->user();
        if ($user) {
            return response()->json(['user' => $user]);
        } else {
            return response()->json(['user' => null]);
        }
    }

    public function me()
    {
        return response()->json(auth('api')->user());
    }

     /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
}
