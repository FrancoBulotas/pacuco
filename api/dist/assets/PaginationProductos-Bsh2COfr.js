import{r as p,j as e,v as m,aB as P,t as g}from"./index-Ic6--5wW.js";const x=p.forwardRef(({active:s=!1,disabled:t=!1,className:a,style:o,activeLabel:n="(current)",children:i,linkStyle:r,linkClassName:l,as:u=P,...h},j)=>{const N=s||t?"span":u;return e.jsx("li",{ref:j,style:o,className:m(a,"page-item",{active:s,disabled:t}),children:e.jsxs(N,{className:m("page-link",l),style:r,...h,children:[i,s&&n&&e.jsx("span",{className:"visually-hidden",children:n})]})})});x.displayName="PageItem";const y=x;function c(s,t,a=s){const o=p.forwardRef(({children:n,...i},r)=>e.jsxs(x,{...i,ref:r,children:[e.jsx("span",{"aria-hidden":"true",children:n||t}),e.jsx("span",{className:"visually-hidden",children:a})]}));return o.displayName=s,o}const I=c("First","«"),k=c("Prev","‹","Previous"),v=c("Ellipsis","…","More"),w=c("Next","›"),B=c("Last","»"),f=p.forwardRef(({bsPrefix:s,className:t,size:a,...o},n)=>{const i=g(s,"pagination");return e.jsx("ul",{ref:n,...o,className:m(t,i,a&&`${i}-${a}`)})});f.displayName="Pagination";const d=Object.assign(f,{First:I,Prev:k,Ellipsis:v,Item:y,Next:w,Last:B}),E=({currentPage:s,totalPages:t,onPageChange:a})=>{const o=()=>{window.scrollTo(0,0)},n=r=>{a(r),o()},i=()=>{const r=[];for(let l=1;l<=t;l++)r.push(e.jsx(d.Item,{active:l===s,onClick:()=>n(l),children:l},l));return r};return e.jsxs(d,{className:"custom-pagination",children:[e.jsx(d.Prev,{onClick:()=>n(s-1),disabled:s===1}),i(),e.jsx(d.Next,{onClick:()=>n(s+1),disabled:s===t})]})};export{E as P};
