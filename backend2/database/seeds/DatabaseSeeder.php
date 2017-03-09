<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'name' => 'User 1',
            'email' => 'user1@gmail.com',
            'password' => bcrypt('abc123'),
            'mobile' => '9999999999',
            'jwt' => 'dummy'
        ]);

        DB::table('users')->insert([
            'name' => 'User 2',
            'email' => 'user2@gmail.com',
            'password' => bcrypt('abc123'),
            'mobile' => '8888888888',
            'jwt' => 'dummy'
        ]);
    }
}
