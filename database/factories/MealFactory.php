<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(3, true),
            'address' => $this->faker->address(),
            'date' => $this->faker->date(),
            'price' => $this->faker->numberBetween(1000, 10000),
            'description' => $this->faker->paragraph(),
            'status' => $this->faker->randomElement(['en attente', 'à venir', 'terminé', 'annulé']),
            'thumbnail' => $this->faker->imageUrl(),
            'owner' => function () {
                return User::inRandomOrder()->first()->id ?? User::factory()->create()->id;
            },
            'max_capacity' => $this->faker->numberBetween(10, 100),
            'table_quantity' => null,
            'seats_per_table' => null,
        ];
    }
}
