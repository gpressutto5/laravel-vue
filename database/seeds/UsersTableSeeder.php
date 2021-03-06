<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class,1)
            ->states('admin')
            ->create([
                'name' => 'Admin',
                'email' => 'admin@user.com'
            ]);
        factory(\App\User::class,1)
            ->create([
                'name' => 'Client',
                'email' => 'client@user.com'
            ]);
    }
}
