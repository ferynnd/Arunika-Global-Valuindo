import React from "react";
import CustomButton from "@/Components/CustomButton"; // Sesuaikan path import CustomButton jika berbeda

export default function HeaderSection({
    tagline = "Tentang Kami",
    title = "PT Arunika Global Valuindo adalah perusahaan penilai independen dan penasihat strategi korporasi terpercaya di Indonesia.",
    buttonText = "Ketahui Lebih Lanjut",
    buttonHref = "",
    buttonBgColor = "bg-secondary",
    buttonTextColor = "text-white font-medium",
    buttonSize = "md",
    onButtonClick,
    showButton = true,
}) {
    return (
        <div className="max-w-3xl space-y-6">
            <span className="text-sm sm:text-base font-medium tracking-wide text-primary block">
                {tagline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide leading-tight">
                {title}
            </h2>
            {showButton && (
            <CustomButton
                href={buttonHref}
                text={buttonText}
                bgColor={buttonBgColor}
                textColor={buttonTextColor}
                size={buttonSize}
                onClick={onButtonClick}
            />
            )}
        </div>
    );
}