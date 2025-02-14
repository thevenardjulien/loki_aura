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
        Schema::create('meal_user', function (Blueprint $table) {
            $table->engine('InnoDB');
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('meal_id')->constrained()->onDelete('cascade');
            $table->integer('table_number')->nullable();
            $table->enum('payment_status', ['default:en attente', 'payé', 'annulé']);
            $table->enum('status', ['en attente', 'à venir', 'terminé', 'annulé'])->default('en attente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meal_user');
    }
};
