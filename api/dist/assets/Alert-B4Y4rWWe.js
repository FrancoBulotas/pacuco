import{r as o,t as d,j as n,v as c,ah as E,ax as L,J as R,e as $,aI as b,z as x}from"./index-DCBXkwSm.js";const N=E("h4");N.displayName="DivStyledAsH4";const j=o.forwardRef(({className:a,bsPrefix:e,as:r=N,...s},t)=>(e=d(e,"alert-heading"),n.jsx(r,{ref:t,className:c(a,e),...s})));j.displayName="AlertHeading";const v=o.forwardRef(({className:a,bsPrefix:e,as:r=L,...s},t)=>(e=d(e,"alert-link"),n.jsx(r,{ref:t,className:c(a,e),...s})));v.displayName="AlertLink";const C=o.forwardRef((a,e)=>{const{bsPrefix:r,show:s=!0,closeLabel:t="Close alert",closeVariant:y,className:k,children:g,variant:m="primary",onClose:u,dismissible:f,transition:p=x,...h}=R(a,{show:"onClose"}),l=d(r,"alert"),w=$(H=>{u&&u(!1,H)}),i=p===!0?x:p,A=n.jsxs("div",{role:"alert",...i?void 0:h,ref:e,className:c(k,l,m&&`${l}-${m}`,f&&`${l}-dismissible`),children:[f&&n.jsx(b,{onClick:w,"aria-label":t,variant:y}),g]});return i?n.jsx(i,{unmountOnExit:!0,...h,ref:void 0,in:s,children:A}):s?A:null});C.displayName="Alert";const D=Object.assign(C,{Link:v,Heading:j});export{D as A};
