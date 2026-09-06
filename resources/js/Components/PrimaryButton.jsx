export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-xl border border-transparent bg-[#1B544D] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition duration-150 ease-in-out hover:bg-[#143F39] focus:outline-none focus:ring-2 focus:ring-[#1B544D] focus:ring-offset-2 active:bg-[#0E2C27] shadow-sm disabled:opacity-50 ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
