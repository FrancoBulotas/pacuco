import{u,a as v,i as f,r as t,S as d,s as m,j as o}from"./index-KpJSGDIf.js";import{l as g}from"./login-DXCEH_hV.js";const x=({component:a})=>{const c=u(),i=v(),l=f(e=>e.login),s=36e5;t.useEffect(()=>{r()},[]),t.useEffect(()=>{const e=setInterval(()=>{n()},s*8);return()=>clearInterval(e)},[]),t.useEffect(()=>{const e=setInterval(async()=>{r()},s/2);return()=>clearInterval(e)},[]);const r=async()=>{try{const e=await g.checkActiveSession(l.token);console.log(e)}catch(e){console.error(e),e.response.status!==200&&n()}},n=()=>{d.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{c(m(null)),i("/login")})};return o.jsx("div",{className:"d-flex",children:o.jsx("div",{style:{width:"100%"},children:a})})};export{x as default};
