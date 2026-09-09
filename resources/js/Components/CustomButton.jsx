const CustomButton = ({
    text = "About Us",
    bgColor = "bg-[#E8C44F]",
    textColor = "text-white",
    arrow = "→",
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-1.5"
        >
            {/* Text */}
            <span
                className={`
                    flex items-center justify-center
                    h-[50px] px-8
                    rounded-full
                    ${bgColor}
                    ${textColor}
                    text-[16px] font-normal
                    transition-all duration-300
                    group-hover:brightness-95
                `}
            >
                {text}
            </span>

            {/* Arrow */}
            <span
                className={`
                    flex items-center justify-center
                    w-[43px] h-[43px]
                    rounded-full
                    ${bgColor}
                    ${textColor}
                    text-[20px]
                    transition-all duration-300
                    group-hover:translate-x-1
                `}
            >
                {arrow}
            </span>
        </button>
    );
};

export default CustomButton;