import React from "react";
import { Link } from "@inertiajs/react"; // Dipakai untuk navigasi SPA Inertia.js

const ArrowIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CustomButton = ({
  text = "Consultation Now",
  href, // Prop href sekarang ditangkap di sini
  bgColor = "bg-accent",
  textColor = "text-white",
  arrow = <ArrowIcon />,
  onClick,
  shine = true,
  size = "md", // Pilihan: "sm", "md", "lg"
}) => {
  // Mapping ukuran untuk konsistensi tinggi, padding, teks, dan ukuran icon box
  const sizeStyles = {
    sm: {
      height: "h-8 sm:h-9",
      padding: "px-3 sm:px-3.5",
      text: "text-xs",
      iconBox: "w-8 sm:w-9 h-8 sm:h-9",
      iconSize: "w-3.5 h-3.5",
      bridge: "-translate-x-6 w-6 h-4",
    },
    md: {
      height: "h-10 sm:h-12",
      padding: "px-3.5 sm:px-4",
      text: "text-xs sm:text-sm",
      iconBox: "w-10 sm:w-12 h-10 sm:h-12",
      iconSize: "w-4 h-4 sm:w-5 sm:h-5",
      bridge: "-translate-x-8 sm:-translate-x-10 w-8 sm:w-10 h-5 sm:h-6",
    },
    lg: {
      height: "h-12 sm:h-14",
      padding: "px-4 sm:px-6",
      text: "text-sm sm:text-base",
      iconBox: "w-12 sm:w-14 h-12 sm:h-14",
      iconSize: "w-5 h-5 sm:w-6 sm:h-6",
      bridge: "-translate-x-10 sm:-translate-x-12 w-10 sm:w-12 h-6 sm:h-7",
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;

  const commonClasses = `
    group
    relative
    inline-flex
    items-center
    gap-1
    hover:gap-1.5 sm:hover:gap-2
    transition-all
    overflow-hidden
    md:rounded-xl rounded-lg
    isolate
    cursor-pointer
  `;

  // Inner Content dari tombol
  const buttonContent = (
    <>
      {/* SHINE EFFECT */}
      {shine && (
        <span
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-[100%]
            z-20
            w-[60%]
            skew-x-[-20deg]
            bg-linear-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            ease-in-out
            group-hover:translate-x-[350%]
          "
        />
      )}

      {/* Teks Kapsul Utama */}
      <span
        className={`
          flex
          items-center
          justify-center
          ${currentSize.height}
          ${currentSize.padding}
          md:rounded-xl rounded-lg
          ${bgColor}
          ${textColor}
          ${currentSize.text}
          font-medium
          z-10
          whitespace-nowrap
        `}
      >
        {text}
      </span>

      {/* Jembatan (Bridge Connector) */}
      <span
        className={`
          absolute
          end-0
          z-0
          -mx-1.5
          ${currentSize.bridge}
          ${bgColor}
        `}
      />

      {/* Arrow Container */}
      <span
        className={`
          relative
          z-10
          flex
          items-center
          justify-center
          ${currentSize.iconBox}
          md:rounded-xl rounded-lg
          ${bgColor}
          ${textColor}
          transition-transform
          duration-300
          shrink-0
        `}
      >
        {React.cloneElement(arrow, {
          className: currentSize.iconSize,
        })}
      </span>
    </>
  );

  // Jika href diawali `#` atau `http` (Link External / Anchor)
  if (href && (href.startsWith("#") || href.startsWith("http"))) {
    return (
      <a href={href} onClick={onClick} className={commonClasses}>
        {buttonContent}
      </a>
    );
  }

  // Jika href dikirim (Halaman Internal / Route Inertia)
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={commonClasses}>
        {buttonContent}
      </Link>
    );
  }

  // Jika tidak ada href, panggil sebagai <button> biasa
  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      {buttonContent}
    </button>
  );
};

export default CustomButton;