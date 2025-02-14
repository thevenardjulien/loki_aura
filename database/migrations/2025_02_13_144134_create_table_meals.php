<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meals', function (Blueprint $table) {
            $table->engine('InnoDB');
            $table->id();
            $table->string('name');
            $table->text('address');
            $table->integer('price');
            $table->date('date');
            $table->text('description');
            $table->enum('status', ['en attente', 'à venir', 'terminé', 'annulé'])
                ->default('en attente')
                ->nullable();
            $table->string('thumbnail');
            $table->foreignId('owner')->constrained('users', 'id')->onDelete('cascade');
            $table->integer('max_capacity');
            $table->integer('table_quantity')->nullable();
            $table->integer('seats_per_table')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
