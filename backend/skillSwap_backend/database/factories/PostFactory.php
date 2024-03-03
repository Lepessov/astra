<?php

namespace database\factories;

use App\Models\Category;
use App\Models\Post;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    protected $model = Post::class;

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
            'photo' => $this->faker->imageUrl(),
        ];
    }

    public function configure(): PostFactory
    {
        return $this->afterCreating(function (Post $skillFund) {
            $categoryId = Category::query()->inRandomOrder()->first()->id;

            $skillFund->categories()->attach($categoryId);
        });
    }
}
