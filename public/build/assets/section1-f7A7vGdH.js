import{j as e}from"./app-Cpf6f3zh.js";function u({label:o,name:l,checked:d,onChange:c,disabled:i=!1,required:n=!1,error:s}){return e.jsxs("div",{className:"flex items-start gap-2 w-full",children:[e.jsx("div",{className:"relative flex items-center",children:e.jsx("input",{type:"checkbox",id:l,name:l,checked:d,onChange:t=>c(t.target.checked),disabled:i,required:n,className:`peer w-5 h-5 text-blue-600 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2 focus:outline-none transition-all
          ${s?"border-red-500":""}
          `})}),e.jsx("label",{htmlFor:l,className:"text-gray-700 text-sm select-none peer-disabled:text-gray-400",children:o}),s&&e.jsx("div",{className:"ml-1 text-sm text-red-500",children:s})]})}function x({label:o,name:l,value:d,onChange:c,type:i="text",disabled:n=!1,required:s=!1,iconLeft:t,iconRight:a,error:r}){return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative ",children:[t&&e.jsx("div",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-500",children:t}),e.jsx("input",{disabled:n,required:s,value:d,onChange:c,type:i,id:l,name:l,className:`peer text-black placeholder-transparent w-full py-2.5 px-5 border bg-white rounded-md focus:outline-none transition-all
            ${t?"pl-10":""}
            ${a?"pr-10":""}
            ${r?"border-red-500":""}
          `,placeholder:" "}),e.jsx("label",{htmlFor:l,className:` absolute left-2.5 px-2.5 transition-all bg-white text-sm -top-3
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:top-2.5
            peer-focus:-top-3
            peer-focus:text-sm
            peer-focus:text-blue-600 
          `,children:o}),a&&e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-500",children:a})]}),r&&e.jsx("p",{className:"text-sm text-red-500 mt-1 ml-1",children:r})]})}function h({label:o,name:l,value:d,onChange:c,options:i=[],disabled:n=!1,required:s=!1,iconLeft:t,iconRight:a,error:r}){return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative",children:[t&&e.jsx("div",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-500",children:t}),e.jsxs("select",{disabled:n,required:s,value:d,onChange:p=>c(p.target.value),id:l,name:l,className:`peer text-black placeholder-transparent w-full py-2.5 px-5 border bg-white rounded-md focus:outline-none transition-all appearance-none
        ${t?"pl-10":""}
        ${a?"pr-10":""}
        ${r?"border-red-500":""}
        `,children:[e.jsx("option",{value:"",disabled:!0}),i.map(p=>e.jsx("option",{value:p.value,children:p.label},p.value))]}),e.jsx("label",{htmlFor:l,className:`absolute left-2.5 px-2.5 transition-all bg-white text-sm -top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-placeholder-shown:top-2.5
        peer-focus:-top-3
        peer-focus:text-sm
        peer-focus:text-blue-600
        `,children:o}),a&&e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none",children:a})]}),r&&e.jsx("p",{className:"text-sm text-red-500 mt-1 ml-1",children:r})]})}function m({label:o,name:l,value:d,onChange:c,placeholder:i="",required:n=!1,disabled:s=!1,error:t,className:a="",...r}){return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{id:l,name:l,value:d,onChange:c,placeholder:" ",required:n,disabled:s,rows:4,className:`peer w-full px-5 pt-4 pb-2.5 text-black border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-blue-500 resize-none transition-all ${t?"border-red-500":""} ${a}`,...r}),e.jsx("label",{htmlFor:l,className:"absolute left-2.5 px-2.5 transition-all bg-white text-blue-black/60 text-sm -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white",children:o})]}),t&&e.jsx("p",{className:"text-sm text-red-500 mt-1",children:t})]})}function f(){return e.jsxs("div",{className:"w-full flex flex-col gap-5 lg:max-w-2xl",children:[e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(x,{label:"Activity Name",name:"name",value:"",type:"text",required:!0}),e.jsx(x,{label:"Product Code",name:"product_code",value:"",type:"text",required:!0})]}),e.jsx(m,{label:"Description",name:"description",value:"",placeholder:"Write a description",required:!0,className:""}),e.jsx(h,{label:"Category",name:"category",options:[{value:"hello",label:"hello"},{value:"world",label:"world"}],required:!0}),e.jsx(u,{label:"isVisible?",name:"isVisible",required:!0})]})}export{f as default};
