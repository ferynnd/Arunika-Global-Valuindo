import { useState, useRef, useEffect } from 'react';

export default function InfoTooltip({ text, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!text) return null;

    return (
        <div ref={containerRef} className={`relative inline-flex items-center ml-1.5 align-middle ${className}`}>
            <button
                type="button"
                className="w-4 h-4 rounded-full bg-slate-200/80 hover:bg-[#1B544D] text-slate-500 hover:text-white flex items-center justify-center text-[11px] font-extrabold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#1B544D]/30 cursor-help"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onClick={() => setIsVisible(!isVisible)}
                aria-label="Informasi Keterangan"
            >
                ?
            </button>

            {isVisible && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 sm:w-64 p-2.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-xl shadow-xl z-50 pointer-events-none transition-all duration-200 leading-relaxed font-normal normal-case text-left">
                    {text}
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900/95" />
                </div>
            )}
        </div>
    );
}
