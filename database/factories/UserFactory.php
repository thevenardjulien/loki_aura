<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Company;
use App\Models\Position;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'title' => fake()->randomElement(['M', 'Mme']),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'phone' => fake()->phoneNumber(),
            'phone_pro' => fake()->phoneNumber(),
            'active' => fake()->randomElement(['en attente', 'actif', 'abandon', 'mutation', 'exclusion']),
            'renew' => fake()->optional()->date(),
            'description' => fake()->sentence(),
            'position_id' => Position::factory(),
            'company_id' => Company::factory(),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (User $user) {
            Address::factory()->create(['user_id' => $user->id]);
        });
    }
}
