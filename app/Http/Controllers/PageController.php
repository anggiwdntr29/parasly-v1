<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function features()
    {
        return Inertia::render('Features');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function partners()
    {
        return Inertia::render('Partners');
    }
}
