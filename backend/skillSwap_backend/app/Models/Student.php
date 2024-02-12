<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
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

    // Define the relationship with chats
    public function chats()
    {
        return $this->hasMany(Chat::class);
    }

    // Define the relationship with messages
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
