import{a as u,r,u as m,b,j as s,s as g}from"./index-DRCktIFD.js";import{A as h}from"./Alert-ODK_DfQL.js";const y="/api/login",j=async e=>(await u.post(y,e)).data,v={login:j},N=()=>{const[e,t]=r.useState(""),[n,i]=r.useState(""),[l,c]=r.useState({display:"none",text:""}),d=m(),p=b(),x=async a=>{a.preventDefault();try{const o=await v.login({username:e,password:n});c({display:"none",text:""}),d(g(o)),p("/administracion"),t(""),i("")}catch(o){console.log(o),c({display:"block",text:"Usuario y/o contraseña incorrecto"})}};return s.jsxs("div",{style:{margin:"120px auto",marginTop:"160px",width:"400px",padding:"10px",boxShadow:"0px 4px 8px 2px rgba(0, 0, 0, 0.1)",borderRadius:"6px"},children:[s.jsx("h3",{style:{display:"flex",justifyContent:"center"},children:"Ingresa"}),s.jsx(h,{variant:"danger",style:{display:`${l.display}`},children:l.text},"danger"),s.jsxs("form",{onSubmit:x,children:[s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Usuario"}),s.jsx("input",{className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:e,onChange:({target:a})=>t(a.value)})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Contraseña"}),s.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:n!==void 0?n:"",onChange:({target:a})=>i(a.value)})]}),s.jsx("button",{type:"submit",className:"btn btn-dark",children:"Ingresar"})]})]})};export{N as default};
