<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'student_id',
        'title',
        'photo',
        'status',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function chats()
    {
        return $this->hasMany(Chat::class);
    }
}
