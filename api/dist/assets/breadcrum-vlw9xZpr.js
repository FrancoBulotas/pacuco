import{r as i,q as o,j as e,t as u,aB as N}from"./index-o8kIFCHc.js";const b=i.forwardRef(({bsPrefix:s,active:a=!1,children:r,className:c,as:m="li",linkAs:t=N,linkProps:n={},href:d,title:l,target:x,...p},B)=>{const j=o(s,"breadcrumb-item");return e.jsx(m,{ref:B,...p,className:u(j,c,{active:a}),"aria-current":a?"page":void 0,children:a?r:e.jsx(t,{...n,href:d,title:l,target:x,children:r})})});b.displayName="BreadcrumbItem";const f=i.forwardRef(({bsPrefix:s,className:a,listProps:r={},children:c,label:m="breadcrumb",as:t="nav",...n},d)=>{const l=o(s,"breadcrumb");return e.jsx(t,{"aria-label":m,className:a,ref:d,...n,children:e.jsx("ol",{...r,className:u(l,r==null?void 0:r.className),children:c})})});f.displayName="Breadcrumb";const g=Object.assign(f,{Item:b});export{g as B};
