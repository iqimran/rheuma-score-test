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
            $table->string('report_name', 100);
            $table->string('report_slug', 100);

            $table->json('input_data');
            $table->decimal('calculated_score', 6, 2)->nullable();
            $table->string('interpretation', 100)->nullable();

            $table->string('ip_address', 45);
            $table->string('country', 100)->nullable();
            $table->string('city', 100)->nullable();
            $table->text('user_agent')->nullable();

            $table->index('report_name');
            $table->index('report_slug');
            $table->index('created_at');
            $table->index('ip_address');

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
