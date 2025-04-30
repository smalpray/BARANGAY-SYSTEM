import{j as e}from"./app-DdEvTftV.js";function i({label:r,name:t,value:p,onChange:o,type:d="text",disabled:x=!1,required:n=!1,iconLeft:l,iconRight:s,error:a}){return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative ",children:[l&&e.jsx("div",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-500",children:l}),e.jsx("input",{disabled:x,required:n,value:p,onChange:o,type:d,id:t,name:t,className:`peer text-black placeholder-transparent w-full py-2.5 px-5 border bg-white rounded-md focus:outline-none transition-all
            ${l?"pl-10":""}
            ${s?"pr-10":""}
            ${a?"border-red-500":""}
          `,placeholder:" "}),e.jsx("label",{htmlFor:t,className:` absolute left-2.5 px-2.5 transition-all bg-white text-sm -top-3
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:top-2.5
            peer-focus:-top-3
            peer-focus:text-sm
            peer-focus:text-blue-600 
          `,children:r}),s&&e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-500",children:s})]}),a&&e.jsx("p",{className:"text-sm text-red-500 mt-1 ml-1",children:a})]})}export{i as I};
