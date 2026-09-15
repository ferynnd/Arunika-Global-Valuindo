<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\OgImage\Facades\OgImage;

class ServicesController extends Controller
{
    public function index(Request $request)
    {
        $query = Service::active()
            ->orderBy('sort_order', 'asc')
            ->latest();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%");
            });
        }

        $services = $query->paginate(12)->withQueryString();

        return Inertia::render('Services/Index', [
            'services' => $services,
            'filters' => $request->only(['search']),
        ]);
    }

    public function show(string $slug)
    {
        $service = Service::active()
            ->where('slug', $slug)
            ->firstOrFail();

        $otherServices = Service::active()
            ->where('id', '!=', $service->id)
            ->orderBy('sort_order', 'asc')
            ->take(3)
            ->get();

        $ogImageUrl = OgImage::make('og-image.service')
            ->with(['service' => $service])
            ->getUrl();

        return Inertia::render('Services/Show', [
            'service' => $service,
            'otherServices' => $otherServices,
            'ogImageUrl' => $ogImageUrl,
        ]);
    }
}
