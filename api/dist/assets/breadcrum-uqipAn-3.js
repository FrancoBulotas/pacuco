import{r as i,b as o,j as e,d as u,aB as N}from"./index-Cwwp_CWz.js";const b=i.forwardRef(({bsPrefix:s,active:a=!1,children:r,className:c,as:m="li",linkAs:t=N,linkProps:d={},href:n,title:l,target:x,...p},B)=>{const j=o(s,"breadcrumb-item");return e.jsx(m,{ref:B,...p,className:u(j,c,{active:a}),"aria-current":a?"page":void 0,children:a?r:e.jsx(t,{...d,href:n,title:l,target:x,children:r})})});b.displayName="BreadcrumbItem";const f=i.forwardRef(({bsPrefix:s,className:a,listProps:r={},children:c,label:m="breadcrumb",as:t="nav",...d},n)=>{const l=o(s,"breadcrumb");return e.jsx(t,{"aria-label":m,className:a,ref:n,...d,children:e.jsx("ol",{...r,className:u(l,r==null?void 0:r.className),children:c})})});f.displayName="Breadcrumb";const g=Object.assign(f,{Item:b});export{g as B};
