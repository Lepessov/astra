<?php

namespace App\Services;

class StudentService
{
    public function isCorporateEmail($email): bool
    {
        if (!str_ends_with($email, 'stu.sdu.edu.kz')) {
            return false;
        }

        $parts = explode('@', $email);

        if (count($parts) === 2 && preg_match('/^\d{9}$/', $parts[0])) {
            return true;
        }

        return false;
    }
}
