import{r as n,u as m,a as u,j as s,s as h}from"./index-CF_H1yE8.js";import{l as b}from"./login-LpI3yvQT.js";import{A as g}from"./Alert-Bngiekj9.js";const f=()=>{const[r,o]=n.useState(""),[a,i]=n.useState(""),[l,c]=n.useState({display:"none",text:""}),d=m(),p=u(),x=async e=>{e.preventDefault();try{const t=await b.login({username:r,password:a});c({display:"none",text:""}),d(h(t)),p("/administracion"),o(""),i("")}catch(t){console.log(t),c({display:"block",text:"Usuario y/o contraseña incorrecto"})}};return s.jsxs("div",{style:{margin:"120px auto",marginTop:"160px",width:"400px",padding:"10px",boxShadow:"0px 4px 8px 2px rgba(0, 0, 0, 0.1)",borderRadius:"6px"},children:[s.jsx("h3",{style:{display:"flex",justifyContent:"center"},children:"Ingresa"}),s.jsx(g,{variant:"danger",style:{display:`${l.display}`},children:l.text},"danger"),s.jsxs("form",{onSubmit:x,children:[s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Usuario"}),s.jsx("input",{className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:r,onChange:({target:e})=>o(e.value)})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{className:"form-label",children:"Contraseña"}),s.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:a!==void 0?a:"",onChange:({target:e})=>i(e.value)})]}),s.jsx("button",{type:"submit",className:"btn btn-dark",children:"Ingresar"})]})]})};export{f as default};
