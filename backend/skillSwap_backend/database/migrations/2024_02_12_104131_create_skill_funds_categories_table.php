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
        Schema::create('skill_funds_categories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('skill_fund_id');
            $table->unsignedBigInteger('category_id');
            $table->timestamps();

            $table->foreign('skill_fund_id')->references('id')->on('skill_funds')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skill_funds_categories');
    }
};
