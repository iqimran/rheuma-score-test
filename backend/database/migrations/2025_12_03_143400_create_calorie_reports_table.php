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
        Schema::create('calorie_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete(); // who created the report (if authenticated)
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->integer('age')->nullable();
            $table->decimal('weight_kg', 6, 2)->nullable();
            $table->integer('height_cm')->nullable();
            $table->string('height_display')->nullable(); // store "5' 7\""
            $table->string('weight_unit')->default('kg'); // kg or lb
            $table->string('height_unit')->default('cm'); // cm or ft_in
            $table->string('activity_level')->nullable(); // sedentary, lightly_active, moderately_active, very_active, extra_active
            $table->integer('result_calories')->nullable(); // main estimated calories (rounded)
            $table->json('breakdown')->nullable(); // JSON with different activity multipliers
            $table->json('payload')->nullable(); // raw input payload useful for audit
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calorie_reports');
    }
};
