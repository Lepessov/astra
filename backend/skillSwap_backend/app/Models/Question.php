<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'title',
        'description',
        'student_id',
        'title',
        'photo',
        'status',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
