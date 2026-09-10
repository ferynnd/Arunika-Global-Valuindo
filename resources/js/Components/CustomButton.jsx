const CustomButton = ({
    text = "About Us",
    bgColor = "bg-[#E2BE43]",
    textColor = "text-white",
    arrow = "→",
    onClick,
    href,
}) => {
    const Component = href ? 'a' : 'button';
    return (
        <Component
            href={href}
            onClick={onClick}
            className="group inline-flex items-center gap-1.5 cursor-pointer"
        >
            {/* Text */}
            <span
                className={`
                    flex items-center justify-center
                    h-[46px] sm:h-[50px] px-6 sm:px-8
                    rounded-full
                    ${bgColor}
                    ${textColor}
                    text-[15px] sm:text-[16px] font-normal
                    transition-all duration-300
                    group-hover:brightness-95
                    shadow-sm
                `}
            >
                {text}
            </span>

            {/* Arrow */}
            <span
                className={`
                    flex items-center justify-center
                    w-[40px] h-[40px] sm:w-[43px] sm:h-[43px]
                    rounded-full
                    ${bgColor}
                    ${textColor}
                    text-[18px] sm:text-[20px]
                    transition-all duration-300
                    group-hover:translate-x-1
                    shadow-sm
                `}
            >
                {arrow}
            </span>
        </Component>
    );
};

export default CustomButton;