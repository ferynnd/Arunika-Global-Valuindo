<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function aboutus()
    {
        return Inertia::render('AboutUs');
    }

    public function privacypolicy()
    {
        return Inertia::render('PrivacyPolicy');
    }
}
