<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cliente;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_users')->insert([
            'name' => 'Adm',
            'email' => 'admin@email.com',
            'password' => Hash::make('123')
        ]);

        // Cliente::create(['nome' => 'zezin', 'cpf' => '015015023550', 'opcoes' => '', 'email' => 'teste@teste.com'])
        // Cliente::create(['nome' => 'zezin 2', 'cpf' => '015015023520', 'opcoes' => '', 'email' => 'te2ste@teste.com'])
    }
}
