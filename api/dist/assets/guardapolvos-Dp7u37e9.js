import{k as s}from"./index-KpJSGDIf.js";const a="/api/products/guardapolvos",r=async()=>(await s.get(a)).data,c=async e=>(await s.get(a)).data.filter(n=>n.table===e),p=async(e,o)=>{const t={headers:{Authorization:o}};return(await s.post(a,e,t)).data},i=async(e,o)=>{const t={headers:{Authorization:o}};return(await s.post(`${a}/changePriceByPorcentage`,e,t)).data},d=async(e,o,t)=>(await s.put(`${a}/${e}`,o)).data,u=async(e,o)=>{const t={headers:{Authorization:o}};return(await s.delete(`${a}/${e}`,t)).data},l={getAll:r,deleteGuardapolvo:u,create:p,changePriceByPorcentage:i,getGuardapolvoByTable:c,update:d};export{l as g};
