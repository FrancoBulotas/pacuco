import{r as o,t as d,j as n,v as c,ag as E,aC as L,M as R,e as $,aN as b,z as h}from"./index-DRCktIFD.js";const x=E("h4");x.displayName="DivStyledAsH4";const C=o.forwardRef(({className:a,bsPrefix:e,as:r=x,...s},t)=>(e=d(e,"alert-heading"),n.jsx(r,{ref:t,className:c(a,e),...s})));C.displayName="AlertHeading";const j=o.forwardRef(({className:a,bsPrefix:e,as:r=L,...s},t)=>(e=d(e,"alert-link"),n.jsx(r,{ref:t,className:c(a,e),...s})));j.displayName="AlertLink";const v=o.forwardRef((a,e)=>{const{bsPrefix:r,show:s=!0,closeLabel:t="Close alert",closeVariant:y,className:g,children:k,variant:m="primary",onClose:u,dismissible:f,transition:p=h,...A}=R(a,{show:"onClose"}),l=d(r,"alert"),w=$(H=>{u&&u(!1,H)}),i=p===!0?h:p,N=n.jsxs("div",{role:"alert",...i?void 0:A,ref:e,className:c(g,l,m&&`${l}-${m}`,f&&`${l}-dismissible`),children:[f&&n.jsx(b,{onClick:w,"aria-label":t,variant:y}),k]});return i?n.jsx(i,{unmountOnExit:!0,...A,ref:void 0,in:s,children:N}):s?N:null});v.displayName="Alert";const D=Object.assign(v,{Link:j,Heading:C});export{D as A};
