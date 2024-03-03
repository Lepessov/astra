<?php

namespace database\seeders;

use App\Models\University;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UniversityTableSeeder extends Seeder
{
    public function run(): void
    {
        $universities = [
            [
                'id' => 1,
                'name' => 'Suleyman Demirel University',
                'city' => 'Almaty',
                'description' => 'Turkish university',
                'code' => 'SDU',
            ],
            [
                'id' => 2,
                'name' => 'Kazakh British University',
                'city' => 'Almaty',
                'description' => 'British university',
                'code' => 'KBTU',
            ],
            [
                'id' => 3,
                'name' => 'Al-Farabi Kazakh National University',
                'city' => 'Almaty',
                'description' => 'Kazakh University',
                'code' => 'KazNU',
            ],
            [
                'id' => 4,
                'name' => 'Almaty Technological University',
                'city' => 'Almaty',
                'description' => 'Kazakh University',
                'code' => 'ATU',
            ],
        ];

        foreach ($universities as $university) {
            University::query()->create($university);
        }
    }
}
