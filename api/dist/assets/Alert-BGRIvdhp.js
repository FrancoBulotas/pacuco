import{r as o,i as d,j as n,k as c,l as E,A as L,m as R,n as $,C as b,F as N}from"./index-Chllbu8E.js";const x=E("h4");x.displayName="DivStyledAsH4";const C=o.forwardRef(({className:a,bsPrefix:e,as:r=x,...s},t)=>(e=d(e,"alert-heading"),n.jsx(r,{ref:t,className:c(a,e),...s})));C.displayName="AlertHeading";const j=o.forwardRef(({className:a,bsPrefix:e,as:r=L,...s},t)=>(e=d(e,"alert-link"),n.jsx(r,{ref:t,className:c(a,e),...s})));j.displayName="AlertLink";const k=o.forwardRef((a,e)=>{const{bsPrefix:r,show:s=!0,closeLabel:t="Close alert",closeVariant:v,className:y,children:g,variant:m="primary",onClose:u,dismissible:f,transition:p=N,...A}=R(a,{show:"onClose"}),l=d(r,"alert"),w=$(H=>{u&&u(!1,H)}),i=p===!0?N:p,h=n.jsxs("div",{role:"alert",...i?void 0:A,ref:e,className:c(y,l,m&&`${l}-${m}`,f&&`${l}-dismissible`),children:[f&&n.jsx(b,{onClick:w,"aria-label":t,variant:v}),g]});return i?n.jsx(i,{unmountOnExit:!0,...A,ref:void 0,in:s,children:h}):s?h:null});k.displayName="Alert";const D=Object.assign(k,{Link:j,Heading:C});export{D as A};
