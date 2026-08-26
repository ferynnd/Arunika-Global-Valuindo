@if ($paginator->hasPages())
    <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        {{-- Previous Page Link --}}
        <div class="-mt-px flex w-0 flex-1">
            @if ($paginator->onFirstPage())
                <span class="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-400 cursor-not-allowed">
                    <i class="fas fa-arrow-left mr-3"></i> Previous
                </span>
            @else
                <a href="{{ $paginator->previousPageUrl() }}" 
                   class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    <i class="fas fa-arrow-left mr-3"></i> Previous
                </a>
            @endif
        </div>

        {{-- Page Numbers --}}
        <div class="hidden md:-mt-px md:flex">
            @foreach ($elements as $element)
                @if (is_string($element))
                    <span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                        {{ $element }}
                    </span>
                @endif

                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <span class="inline-flex items-center border-t-2 border-primary px-4 pt-4 text-sm font-medium text-primary" aria-current="page">
                                {{ $page }}
                            </span>
                        @else
                            <a href="{{ $url }}" 
                               class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                {{ $page }}
                            </a>
                        @endif
                    @endforeach
                @endif
            @endforeach
        </div>

        {{-- Next Page Link --}}
        <div class="-mt-px flex w-0 flex-1 justify-end">
            @if ($paginator->hasMorePages())
                <a href="{{ $paginator->nextPageUrl() }}" 
                   class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Next <i class="fas fa-arrow-right ml-3"></i>
                </a>
            @else
                <span class="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-400 cursor-not-allowed">
                    Next <i class="fas fa-arrow-right ml-3"></i>
                </span>
            @endif
        </div>
    </nav>
@endif
