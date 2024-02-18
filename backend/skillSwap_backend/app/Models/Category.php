<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'description',];

    public function posts()
    {
        return $this->belongsToMany(Post::class);
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
