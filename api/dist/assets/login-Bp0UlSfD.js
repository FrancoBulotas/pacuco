import{d as e}from"./index-UCovi7-L.js";const n="/api/login",t=async s=>(await e.post(n,s)).data,a=async s=>{const o={headers:{Authorization:s}};return(await e.post(n+"/checkUserSession",o)).data},i={login:t,checkActiveSession:a};export{i as l};
