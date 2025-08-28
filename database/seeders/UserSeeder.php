<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'first_name' => 'Barangay Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            'user_type' => 'admin',
        ]);
        $this->call([
            BarangayResidentsSeeder::class,
        ]);
    }
}
