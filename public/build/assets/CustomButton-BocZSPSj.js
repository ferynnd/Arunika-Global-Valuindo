import{j as t,R as c,L as p}from"./app-B6E7SHHh.js";const u=({className:n="w-4 h-4"})=>t.jsxs("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),t.jsx("polyline",{points:"12 5 19 12 12 19"})]}),g=({text:n="Consultation Now",href:e,bgColor:r="bg-accent",textColor:m="text-white",arrow:l=t.jsx(u,{}),onClick:i,shine:d=!0,size:h="md"})=>{const x={sm:{height:"h-8 sm:h-9",padding:"px-3 sm:px-3.5",text:"text-xs",iconBox:"w-8 sm:w-9 h-8 sm:h-9",iconSize:"w-3.5 h-3.5",bridge:"-translate-x-6 w-6 h-4"},md:{height:"h-10 sm:h-12",padding:"px-3.5 sm:px-4",text:"text-xs sm:text-sm",iconBox:"w-10 sm:w-12 h-10 sm:h-12",iconSize:"w-4 h-4 sm:w-5 sm:h-5",bridge:"-translate-x-8 sm:-translate-x-10 w-8 sm:w-10 h-5 sm:h-6"},lg:{height:"h-12 sm:h-14",padding:"px-4 sm:px-6",text:"text-sm sm:text-base",iconBox:"w-12 sm:w-14 h-12 sm:h-14",iconSize:"w-5 h-5 sm:w-6 sm:h-6",bridge:"-translate-x-10 sm:-translate-x-12 w-10 sm:w-12 h-6 sm:h-7"}},s=x[h]||x.md,a=`
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
  `,o=t.jsxs(t.Fragment,{children:[d&&t.jsx("span",{className:`\r
            pointer-events-none\r
            absolute\r
            inset-y-0\r
            -left-[100%]\r
            z-20\r
            w-[60%]\r
            skew-x-[-20deg]\r
            bg-linear-to-r\r
            from-transparent\r
            via-white/20\r
            to-transparent\r
            transition-transform\r
            duration-700\r
            ease-in-out\r
            group-hover:translate-x-[350%]\r
          `}),t.jsx("span",{className:`
          flex
          items-center
          justify-center
          ${s.height}
          ${s.padding}
          md:rounded-xl rounded-lg
          ${r}
          ${m}
          ${s.text}
          font-medium
          z-10
          whitespace-nowrap
        `,children:n}),t.jsx("span",{className:`
          absolute
          end-0
          z-0
          -mx-1.5
          ${s.bridge}
          ${r}
        `}),t.jsx("span",{className:`
          relative
          z-10
          flex
          items-center
          justify-center
          ${s.iconBox}
          md:rounded-xl rounded-lg
          ${r}
          ${m}
          transition-transform
          duration-300
          shrink-0
        `,children:c.cloneElement(l,{className:s.iconSize})})]});return e&&(e.startsWith("#")||e.startsWith("http"))?t.jsx("a",{href:e,onClick:i,className:a,children:o}):e?t.jsx(p,{href:e,onClick:i,className:a,children:o}):t.jsx("button",{type:"button",onClick:i,className:a,children:o})};export{g as C};
