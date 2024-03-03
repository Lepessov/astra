<?php

namespace database\seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentTableSeeder extends Seeder
{
    public function run(): void
    {
        Student::query()->create([
            'id' => 1,
            'speciality_id' => 1,
            'faculty_id' => 1,
            'university_id' => 1,
            'name' => 'test',
            'surname' => 'test',
            'email' => 'test@test.com',
            'password' => bcrypt('123'),
            'course' => 4,
            'is_student' => true,
        ]);
    }
}
