<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SkillFund extends Model
{
    protected $fillable = [
        'title',
        'description',
        'student_id',
        'title',
        'photo',
        'status',
        'content',
        'planning_money',
        'amount_money',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
