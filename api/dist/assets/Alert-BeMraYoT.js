import{r as o,q as d,j as n,t as c,af as E,aB as L,K as R,d as $,aM as b,y as N}from"./index-DyK0FN_h.js";const x=E("h4");x.displayName="DivStyledAsH4";const j=o.forwardRef(({className:a,bsPrefix:e,as:r=x,...s},t)=>(e=d(e,"alert-heading"),n.jsx(r,{ref:t,className:c(a,e),...s})));j.displayName="AlertHeading";const y=o.forwardRef(({className:a,bsPrefix:e,as:r=L,...s},t)=>(e=d(e,"alert-link"),n.jsx(r,{ref:t,className:c(a,e),...s})));y.displayName="AlertLink";const C=o.forwardRef((a,e)=>{const{bsPrefix:r,show:s=!0,closeLabel:t="Close alert",closeVariant:v,className:k,children:g,variant:m="primary",onClose:u,dismissible:f,transition:p=N,...A}=R(a,{show:"onClose"}),l=d(r,"alert"),w=$(H=>{u&&u(!1,H)}),i=p===!0?N:p,h=n.jsxs("div",{role:"alert",...i?void 0:A,ref:e,className:c(k,l,m&&`${l}-${m}`,f&&`${l}-dismissible`),children:[f&&n.jsx(b,{onClick:w,"aria-label":t,variant:v}),g]});return i?n.jsx(i,{unmountOnExit:!0,...A,ref:void 0,in:s,children:h}):s?h:null});C.displayName="Alert";const D=Object.assign(C,{Link:y,Heading:j});export{D as A};
