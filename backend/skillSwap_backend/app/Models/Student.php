<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
    ];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function appliedPosts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'applications', 'student_id', 'post_id')
            ->withTimestamps();
    }
}
