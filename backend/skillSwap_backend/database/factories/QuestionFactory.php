<?php

namespace database\factories;

use App\Models\Category;
use App\Models\Question;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    protected $model = Question::class;

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
            'description' => $this->faker->paragraph,
            'status' => $this->faker->boolean,
            'photo' => $this->faker->imageUrl(),
        ];
    }

    public function configure(): QuestionFactory
    {
        return $this->afterCreating(function (Question $skillFund) {
            $categoryId = Category::query()->inRandomOrder()->first()->id;

            $skillFund->categories()->attach($categoryId);
        });
    }
}
