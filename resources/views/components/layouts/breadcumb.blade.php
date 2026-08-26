@php
    use Illuminate\Support\Str;
@endphp

{{-- <p class="text-gray-300 text-sm">
    <a href="{{ url('/') }}">Home</a>

    @foreach(Request::segments() as $i => $segment)
        <span class="text-primary"> > </span>

        @if ($loop->last)
            <span class="text-white text-sm font-semibold">
                {{ Str::title(str_replace('-', ' ', $segment)) }}
            </span>
        @else
            <a href="{{ url(implode('/', array_slice(Request::segments(), 0, $i + 1))) }}">
                {{ Str::title(str_replace('-', ' ', $segment)) }}
            </a>
        @endif
    @endforeach
</p> --}}
<nav class="flex justify-center" aria-label="Breadcrumb">
  <ol role="list" class="flex items-center space-x-2">

    {{-- Home --}}
    <li>
      <a href="{{ url('/') }}" class="text-gray-300 hover:text-white flex items-center">
        <svg class="size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Home</span>
      </a>
    </li>

    {{-- Segments --}}
    @foreach(Request::segments() as $i => $segment)
      <li class="flex items-center">
        <svg class="size-5 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>

        @if ($loop->last)
          <span class="ml-3 text-sm font-semibold text-white">
            {{ Str::title(str_replace('-', ' ', $segment)) }}
          </span>
        @else
          <a href="{{ url(implode('/', array_slice(Request::segments(), 0, $i + 1))) }}"
             class="ml-3 text-sm font-semibold text-gray-300 hover:text-primary">
            {{ Str::title(str_replace('-', ' ', $segment)) }}
          </a>
        @endif
      </li>
    @endforeach
  </ol>
</nav>
