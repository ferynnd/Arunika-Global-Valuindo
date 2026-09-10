import React from 'react';

export default function PageHeader({ 
  title = "Tentang Kami", 
  breadcrumb = [{ label: "Home", href: "/" }, { label: "Tentang Kami", href: "/tentang-kami" }],
  bgImage = "/assets/pagehead.webp" 
}) {
  return (
    <div 
      className="w-full min-h-[250px] md:min-h-[300px] bg-cover bg-center bg-no-repeat pt-36 pb-10 md:pt-44 md:pb-12 text-white relative flex flex-col justify-end"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-primary-dark/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>

        {/* Sisi Kanan: Breadcrumb */}
        <nav className="text-sm md:text-base text-white/90" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && 
                    <span className="text-white">
                    <svg className="w-3 h-3 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    </span>}
                <li>
                  <a 
                    href={item.href} 
                    className={`hover:text-white transition-colors ${
                      index === breadcrumb.length - 1 ? 'text-white font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

      </div>
    </div>
  );
}