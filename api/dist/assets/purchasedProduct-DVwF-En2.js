import{k as t}from"./index-BjEhMbeI.js";const a="/api/purchasedProduct",r=async()=>(await t.get(a)).data,c=async e=>(await t.post(a,e)).data,p=async(e,s,o)=>{const n={headers:{Authorization:o}};return(await t.put(`${a}/${e}`,s,n)).data},i=async(e,s)=>{const o={headers:{Authorization:s}};return(await t.delete(`${a}/${e}`,o)).data},h={getAll:r,create:c,update:p,deletePurchase:i};export{h as p};
