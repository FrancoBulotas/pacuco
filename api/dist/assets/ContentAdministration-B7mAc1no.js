import{r as l,i as u,j as e}from"./index-DrVgBgg_.js";const h=()=>{const[t,i]=l.useState({frecuentQuestions:[{mediosDePago:"",cambios:"",diseñosPersonalizados:"",envios:"",cuidado:"",calidad:""}],aboutUs:{first:"",second:""},featuredProducts:[],cuentaDniDiscount:!1}),c=u(s=>s.config);l.useEffect(()=>{c!=null&&i(c[0])},[c]),console.log(t);const o=(s,a,r)=>{s==="frecuentQuestions"?i(n=>({...n,frecuentQuestions:[{...n.frecuentQuestions[0],[a]:r}]})):s==="aboutUs"?i(n=>({...n,aboutUs:{...n.aboutUs,[a]:r}})):s==="cuentaDniDiscount"&&i(n=>({...n,cuentaDniDiscount:r}))};return e.jsx("div",{className:"admin-section",children:t?e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"h1-content-administration",children:"Editar contenido"}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3-content-administration",children:"Preguntas Frecuentes"}),Object.keys(t.frecuentQuestions[0]).map(s=>e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"label-content-administration",children:s.charAt(0).toUpperCase()+s.slice(1).replace(/([A-Z])/g," $1")}),e.jsx("textarea",{className:"textarea-content-administration",value:t.frecuentQuestions[0][s],onChange:a=>o("frecuentQuestions",s,a.target.value)})]},s))]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Sobre Nosotros"}),Object.keys(t.aboutUs).map(s=>e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"label-content-administration",children:s.charAt(0).toUpperCase()+s.slice(1)==="First"?"Primer Parrafo":"Segundo Parrafo"}),e.jsx("textarea",{className:"textarea-content-administration",value:t.aboutUs[s],onChange:a=>o("aboutUs",s,a.target.value)})]},s))]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3-content-administration",children:"Productos Destacados"}),e.jsx("p",{children:"No hay configuración disponible para productos destacados."})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"h3-content-administration",children:"Descuento Cuenta DNI"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t.cuentaDniDiscount,onChange:s=>o("cuentaDniDiscount",null,s.target.checked)}),"Habilitar descuento para Cuenta DNI"]})]})]}):null})};export{h as default};
