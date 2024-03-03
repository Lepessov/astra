<?php

namespace database\seeders;

use App\Models\Faculty;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacultyTableSeeder extends Seeder
{
    public function run(): void
    {
        $faculties = [
            ['id' => 1, 'university_id' => 1, 'name' => 'Computer Science', 'description' => 'Faculty of Computer Science and Information Technology.'],
            ['id' => 2, 'university_id' => 1, 'name' => 'Engineering', 'description' => 'Faculty of Engineering.'],
            ['id' => 3, 'university_id' => 2, 'name' => 'Business Administration', 'description' => 'Faculty of Business Administration.'],
            ['id' => 4, 'university_id' => 2, 'name' => 'Social Sciences', 'description' => 'Faculty of Social Sciences.'],
            ['id' => 5, 'university_id' => 3, 'name' => 'Medicine', 'description' => 'Faculty of Medicine.'],
            ['id' => 6, 'university_id' => 3, 'name' => 'Law', 'description' => 'Faculty of Law.'],
            ['id' => 7, 'university_id' => 4, 'name' => 'Environmental Science', 'description' => 'Faculty of Environmental Science.'],
            ['id' => 8, 'university_id' => 4, 'name' => 'Arts and Humanities', 'description' => 'Faculty of Arts and Humanities.'],
        ];

        // Seed faculties using array and loop
        foreach ($faculties as $facultyData) {
            Faculty::query()->create($facultyData);
        }
    }
}
