import{r as h,j as n,k as x,A as k,i as I}from"./index-Chllbu8E.js";const f=h.forwardRef(({active:s=!1,disabled:i=!1,className:a,style:c,activeLabel:e="(current)",children:r,linkStyle:t,linkClassName:l,as:m=k,...d},u)=>{const N=s||i?"span":m;return n.jsx("li",{ref:u,style:c,className:x(a,"page-item",{active:s,disabled:i}),children:n.jsxs(N,{className:x("page-link",l),style:t,...d,children:[r,s&&e&&n.jsx("span",{className:"visually-hidden",children:e})]})})});f.displayName="PageItem";const C=f;function p(s,i,a=s){const c=h.forwardRef(({children:e,...r},t)=>n.jsxs(f,{...r,ref:t,children:[n.jsx("span",{"aria-hidden":"true",children:e||i}),n.jsx("span",{className:"visually-hidden",children:a})]}));return c.displayName=s,c}const v=p("First","«"),y=p("Prev","‹","Previous"),E=p("Ellipsis","…","More"),w=p("Next","›"),B=p("Last","»"),j=h.forwardRef(({bsPrefix:s,className:i,size:a,...c},e)=>{const r=I(s,"pagination");return n.jsx("ul",{ref:e,...c,className:x(i,r,a&&`${r}-${a}`)})});j.displayName="Pagination";const o=Object.assign(j,{First:v,Prev:y,Ellipsis:E,Item:C,Next:w,Last:B}),$=({currentPage:s,totalPages:i,onPageChange:a})=>{const c=()=>{window.scrollTo(0,0)},e=t=>{a(t),c()},r=()=>{const t=[];if(i<=7)for(let l=1;l<=i;l++)t.push(n.jsx(o.Item,{active:l===s,onClick:()=>e(l),children:l},l));else{t.push(n.jsx(o.Item,{active:s===1,onClick:()=>e(1),children:"1"},1)),s>4&&t.push(n.jsx(o.Ellipsis,{disabled:!0},"start-ellipsis"));const l=Math.max(2,s-1),m=Math.min(i-1,s+1);for(let d=l;d<=m;d++)t.push(n.jsx(o.Item,{active:d===s,onClick:()=>e(d),children:d},d));s<i-3&&t.push(n.jsx(o.Ellipsis,{disabled:!0},"end-ellipsis")),t.push(n.jsx(o.Item,{active:s===i,onClick:()=>e(i),children:i},i))}return t};return n.jsxs(o,{className:"custom-pagination",children:[n.jsx(o.Prev,{onClick:()=>e(s-1),disabled:s===1}),r(),n.jsx(o.Next,{onClick:()=>e(s+1),disabled:s===i})]})};export{$ as P};
