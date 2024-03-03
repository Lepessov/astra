<?php

namespace database\seeders;

use App\Models\Speciality;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpeicialityTableSeeder extends Seeder
{
    public function run(): void
    {
        $specialities = [
            ['id' => 1, 'faculty_id' => 1, 'name' => 'Software Engineering', 'description' => 'Design and development of software applications.'],
            ['id' => 2, 'faculty_id' => 1, 'name' => 'Data Science', 'description' => 'Analysis and interpretation of complex data sets.'],
            ['id' => 3, 'faculty_id' => 2, 'name' => 'Civil Engineering', 'description' => 'Design and construction of infrastructure projects.'],
            ['id' => 4, 'faculty_id' => 2, 'name' => 'Mechanical Engineering', 'description' => 'Design and manufacturing of mechanical systems.'],
            ['id' => 5, 'faculty_id' => 3, 'name' => 'Business Analytics', 'description' => 'Analysis of business data for informed decision-making.'],
            ['id' => 6,'faculty_id' => 3, 'name' => 'Marketing', 'description' => 'Planning and executing marketing strategies.'],
            ['id' => 7, 'faculty_id' => 4, 'name' => 'Environmental Science', 'description' => 'Study of the natural environment and its interactions.'],
            ['id' => 8, 'faculty_id' => 4, 'name' => 'History', 'description' => 'Study of past events and civilizations.'],
            ['id' => 9, 'faculty_id' => 5, 'name' => 'Astrophysics', 'description' => 'Study of celestial objects and phenomena.'],
            ['id' => 10, 'faculty_id' => 5, 'name' => 'Organic Chemistry', 'description' => 'Study of the structure, properties, and reactions of organic compounds.'],
        ];

        // Seed specialities using array and loop
        foreach ($specialities as $specialityData) {
            Speciality::query()->create($specialityData);
        }
    }
}
