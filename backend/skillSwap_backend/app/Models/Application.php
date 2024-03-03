<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = ['post_id', 'student_id'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function applicant()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
}
