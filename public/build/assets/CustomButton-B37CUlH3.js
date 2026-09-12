import{j as e,R as c,L as p}from"./app-lfLYtueM.js";const u=({className:n="w-4 h-4"})=>e.jsxs("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),g=({text:n="Consultation Now",href:t,bgColor:r="bg-accent",textColor:m="text-white",arrow:d=e.jsx(u,{}),onClick:i,shine:h=!0,size:l="md"})=>{const x={sm:{height:"h-8 sm:h-9",padding:"px-3 sm:px-3.5",text:"text-xs",iconBox:"w-8 sm:w-9 h-8 sm:h-9",iconSize:"w-3.5 h-3.5",bridge:"-translate-x-6 w-6 h-4"},md:{height:"h-10 sm:h-12",padding:"px-3.5 sm:px-4",text:"text-xs sm:text-sm",iconBox:"w-10 sm:w-12 h-10 sm:h-12",iconSize:"w-4 h-4 sm:w-5 sm:h-5",bridge:"-translate-x-8 sm:-translate-x-10 w-8 sm:w-10 h-5 sm:h-6"},lg:{height:"h-12 sm:h-14",padding:"px-4 sm:px-6",text:"text-sm sm:text-base",iconBox:"w-12 sm:w-14 h-12 sm:h-14",iconSize:"w-5 h-5 sm:w-6 sm:h-6",bridge:"-translate-x-10 sm:-translate-x-12 w-10 sm:w-12 h-6 sm:h-7"}},s=x[l]||x.md,a=`
    group
    relative
    inline-flex
    items-center
    gap-1
    hover:gap-1.5 sm:hover:gap-2
    transition-all
    overflow-hidden
    rounded-xl sm:rounded-[1.1rem]
    isolate
    cursor-pointer
  `,o=e.jsxs(e.Fragment,{children:[h&&e.jsx("span",{className:`\r
            pointer-events-none\r
            absolute\r
            inset-y-0\r
            -left-[100%]\r
            z-20\r
            w-[60%]\r
            skew-x-[-20deg]\r
            bg-gradient-to-r\r
            from-transparent\r
            via-white/20\r
            to-transparent\r
            transition-transform\r
            duration-700\r
            ease-in-out\r
            group-hover:translate-x-[350%]\r
          `}),e.jsx("span",{className:`
          flex
          items-center
          justify-center
          ${s.height}
          ${s.padding}
          rounded-xl sm:rounded-[1.1rem]
          ${r}
          ${m}
          ${s.text}
          font-medium
          z-10
          whitespace-nowrap
        `,children:n}),e.jsx("span",{className:`
          absolute
          end-0
          z-0
          -mx-1.5
          ${s.bridge}
          ${r}
        `}),e.jsx("span",{className:`
          relative
          z-10
          flex
          items-center
          justify-center
          ${s.iconBox}
          rounded-xl sm:rounded-[1.1rem]
          ${r}
          ${m}
          transition-transform
          duration-300
          shrink-0
        `,children:c.cloneElement(d,{className:s.iconSize})})]});return t&&(t.startsWith("#")||t.startsWith("http"))?e.jsx("a",{href:t,onClick:i,className:a,children:o}):t?e.jsx(p,{href:t,onClick:i,className:a,children:o}):e.jsx("button",{type:"button",onClick:i,className:a,children:o})};export{g as C};
