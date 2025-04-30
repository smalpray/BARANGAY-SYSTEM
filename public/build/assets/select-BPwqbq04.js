import{j as e}from"./app-DJ0vC3ES.js";function u({label:n,name:t,value:o,onChange:p,options:d=[],disabled:c=!1,required:x=!1,iconLeft:s,iconRight:a,error:r}){return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative",children:[s&&e.jsx("div",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-500",children:s}),e.jsxs("select",{disabled:c,required:x,value:o,onChange:l=>p(l.target.value),id:t,name:t,className:`peer text-black placeholder-transparent w-full py-2.5 px-5 border bg-white rounded-md focus:outline-none transition-all appearance-none
        ${s?"pl-10":""}
        ${a?"pr-10":""}
        ${r?"border-red-500":""}
        `,children:[e.jsx("option",{value:"",disabled:!0}),d.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]}),e.jsx("label",{htmlFor:t,className:`absolute left-2.5 px-2.5 transition-all bg-white text-sm -top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-placeholder-shown:top-2.5
        peer-focus:-top-3
        peer-focus:text-sm
        peer-focus:text-blue-600
        `,children:n}),a&&e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none",children:a})]}),r&&e.jsx("p",{className:"text-sm text-red-500 mt-1 ml-1",children:r})]})}export{u as S};
