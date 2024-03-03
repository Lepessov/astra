<?php

namespace database\seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryTableSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['id' => 1, 'name' => 'Programming Basics', 'description' => 'Foundational concepts in programming.'],
            ['id' => 2, 'name' => 'Mathematics for Programming', 'description' => 'Math concepts relevant to programming.'],
            ['id' => 3, 'name' => 'Web Development', 'description' => 'Creating websites and web applications.'],
            ['id' => 4, 'name' => 'Data Science', 'description' => 'Analyzing and interpreting complex data sets.'],
            ['id' => 5, 'name' => 'Algorithms and Data Structures', 'description' => 'Optimizing algorithms and organizing data.'],
            ['id' => 6, 'name' => 'Database Management', 'description' => 'Storing, organizing, and managing data.'],
            ['id' => 7, 'name' => 'Mobile App Development', 'description' => 'Creating applications for mobile devices.'],
            ['id' => 8, 'name' => 'Artificial Intelligence', 'description' => 'Simulating intelligent behavior in computers.'],
            ['id' => 9, 'name' => 'Game Development', 'description' => 'Creating video games and interactive experiences.'],
            ['id' => 10, 'name' => 'Cybersecurity', 'description' => 'Protecting computer systems and networks from security breaches.'],
        ];

        foreach ($categories as $categoryData) {
            Category::query()->create($categoryData);
        }
    }
}
