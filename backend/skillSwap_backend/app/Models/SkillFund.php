<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class SkillFund extends Model
{
    use HasFactory;

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

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'skill_funds_categories');
    }
}
