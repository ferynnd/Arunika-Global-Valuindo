<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UserController extends Controller
{
    public function aboutus()
    {
        return Inertia::render('About');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function privacypolicy()
    {
        return Inertia::render('PrivacyPolicy');
    }
}
