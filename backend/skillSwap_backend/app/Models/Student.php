<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Student extends Authenticatable
{
    use HasApiTokens;

    protected $fillable = [
        'name',
        'surname',
        'speciality_id',
        'faculty_id',
        'university_id',
        'email',
        'photo',
        'course',
        'password',
    ]; // Specify the fillable attributes

    // Define the relationship with posts
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    // Define the relationship with applications
    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}
