<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index(Request $request)
    {
        $query = Service::orderBy('sort_order', 'asc')->latest();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $services = $query->paginate(10)->withQueryString();

        return Inertia::render('Admin/Services/Index', [
            'services' => $services,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Services/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],
            'icon' => ['nullable', 'string', 'max:100'],
            'status' => ['required', 'in:active,inactive'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'thumbnail' => ['nullable', 'image', 'max:2048'],
            'features' => ['nullable', 'array'],
            'features.*' => ['nullable', 'string', 'max:255'],
        ]);

        $slug = Str::slug($validated['title']) . '-' . Str::random(5);
        $thumbnailPath = null;

        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('services', 'public');
        }

        $features = isset($validated['features'])
            ? array_values(array_filter($validated['features'], fn($f) => !empty(trim($f))))
            : [];

        Service::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'icon' => $validated['icon'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => $validated['content'] ?? null,
            'status' => $validated['status'],
            'sort_order' => $validated['sort_order'] ?? 0,
            'thumbnail' => $thumbnailPath,
            'features' => $features,
        ]);

        return redirect()->route('admin.services.index')->with('success', 'Layanan berhasil ditambahkan!');
    }

    public function show(Service $service)
    {
        return Inertia::render('Admin/Services/Show', [
            'service' => $service,
        ]);
    }

    public function edit(Service $service)
    {
        return Inertia::render('Admin/Services/Edit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],
            'icon' => ['nullable', 'string', 'max:100'],
            'status' => ['required', 'in:active,inactive'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'thumbnail' => ['nullable', 'image', 'max:2048'],
            'features' => ['nullable', 'array'],
            'features.*' => ['nullable', 'string', 'max:255'],
        ]);

        $features = isset($validated['features'])
            ? array_values(array_filter($validated['features'], fn($f) => !empty(trim($f))))
            : [];

        $data = [
            'title' => $validated['title'],
            'icon' => $validated['icon'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => $validated['content'] ?? null,
            'status' => $validated['status'],
            'sort_order' => $validated['sort_order'] ?? 0,
            'features' => $features,
        ];

        if ($request->hasFile('thumbnail')) {
            if ($service->thumbnail) {
                Storage::disk('public')->delete($service->thumbnail);
            }
            $data['thumbnail'] = $request->file('thumbnail')->store('services', 'public');
        }

        $service->update($data);

        return redirect()->route('admin.services.index')->with('success', 'Layanan berhasil diperbarui!');
    }

    public function destroy(Service $service)
    {
        if ($service->thumbnail) {
            Storage::disk('public')->delete($service->thumbnail);
        }

        $service->delete();

        return redirect()->route('admin.services.index')->with('success', 'Layanan berhasil dihapus!');
    }
}
