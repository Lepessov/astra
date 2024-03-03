<?php

namespace database\factories;

use App\Models\Category;
use App\Models\SkillFund;
use App\Models\Student;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

class SkillFundFactory extends Factory
{

    protected $model = SkillFund::class;

    public function definition(): array
    {
        $studentId = Student::query()
            ->where('is_student', true)
            ->inRandomOrder()
            ->first()
            ->id;

        return [
            'student_id' => $studentId,
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph,
            'status' => $this->faker->boolean,
            'amount_money' => 1000,
            'planning_money' => 200000,
            'photo' => $this->faker->imageUrl(),
        ];
    }

    public function configure(): SkillFundFactory
    {
        return $this->afterCreating(function (SkillFund $skillFund) {
            $categoryId = Category::query()->inRandomOrder()->first()->id;

            $skillFund->categories()->attach($categoryId);
        });
    }
}
