<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Position;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $position = Position::factory()->create();
        $company = Company::factory()->create();

        User::factory()->create([
            'firstname' => 'Admin',
            'lastname' => 'Admin',
            'title' => 'M',
            'email' => 'admin@mail.fr',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'profile_photo_path' => null,
            'phone' => null,
            'phone_pro' => null,
            'active' => 'actif',
            'renew' => null,
            'description' => null,
            'position_id' => $position->id,
            'company_id' => $company->id,
        ]);
    }
}
