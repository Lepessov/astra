<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Post;
use App\Models\Question;
use App\Models\SkillFund;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UniversityTableSeeder::class);
        $this->call(FacultyTableSeeder::class);
        $this->call(SpeicialityTableSeeder::class);
        $this->call(StudentTableSeeder::class);
        $this->call(CategoryTableSeeder::class);

        SkillFund::factory(10)->create();
        Post::factory(10)->create();
        Question::factory(10)->create();
    }
}
