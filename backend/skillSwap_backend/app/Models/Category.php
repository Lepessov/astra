<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    protected $fillable = ['name', 'description',];

    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'posts_categories');
    }

    public function skillFund()
    {
        return $this->belongsToMany(SkillFund::class);
    }

    public function questions()
    {
        return $this->belongsToMany(Question::class);
    }
}
