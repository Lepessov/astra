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
        Schema::table('students', function (Blueprint $table) {
            $table->unsignedBigInteger('speciality_id')->nullable()->change();
            $table->unsignedBigInteger('faculty_id')->nullable()->change();
            $table->unsignedBigInteger('university_id')->nullable()->change();
            $table->integer('course')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('students', function (Blueprint $table) {
            $table->unsignedBigInteger('speciality_id')->nullable(false)->change();
            $table->unsignedBigInteger('faculty_id')->nullable(false)->change();
            $table->unsignedBigInteger('university_id')->nullable(false)->change();
            $table->integer('course')->nullable(false)->change();
        });
    }
};
