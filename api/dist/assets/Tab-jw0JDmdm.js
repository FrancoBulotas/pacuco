import{p as L,r as g,j as i}from"./index-B7gCKMKK.js";import{F as A,P as v}from"./Fade-ByOLnFsp.js";import{m as P,S as h,u as F,$ as G}from"./SSRProvider-a4K4fnkK.js";import{T as f}from"./Nav-B3JvpTrg.js";import{N as I}from"./NoopTransition-DVFl9h6R.js";import{u as N,c as K}from"./Anchor-3CuPqyzV.js";const B="/api/uploadImage",Z=async(n,t)=>{const e={headers:{Authorization:t}};return(await L.post(B,n,e)).data},nn={upload:Z},tn="https://pacucostorage.blob.core.windows.net/guardapolvos",en="https://pacucostorage.blob.core.windows.net/common",q=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],z=["activeKey","getControlledId","getControllerId"],D=["as"];function y(n,t){if(n==null)return{};var e={},r=Object.keys(n),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(e[a]=n[a]);return e}function R(n){let{active:t,eventKey:e,mountOnEnter:r,transition:a,unmountOnExit:o,role:u="tabpanel",onEnter:s,onEntering:E,onEntered:b,onExit:m,onExiting:l,onExited:c}=n,d=y(n,q);const p=g.useContext(f);if(!p)return[Object.assign({},d,{role:u}),{eventKey:e,isActive:t,mountOnEnter:r,transition:a,unmountOnExit:o,onEnter:s,onEntering:E,onEntered:b,onExit:m,onExiting:l,onExited:c}];const{activeKey:x,getControlledId:O,getControllerId:T}=p,C=y(p,z),j=P(e);return[Object.assign({},d,{role:u,id:O(e),"aria-labelledby":T(e)}),{eventKey:e,isActive:t==null&&j!=null?P(x)===j:t,transition:a||C.transition,mountOnEnter:r??C.mountOnEnter,unmountOnExit:o??C.unmountOnExit,onEnter:s,onEntering:E,onEntered:b,onExit:m,onExiting:l,onExited:c}]}const w=g.forwardRef((n,t)=>{let{as:e="div"}=n,r=y(n,D);const[a,{isActive:o,onEnter:u,onEntering:s,onEntered:E,onExit:b,onExiting:m,onExited:l,mountOnEnter:c,unmountOnExit:d,transition:p=I}]=R(r);return i.jsx(f.Provider,{value:null,children:i.jsx(h.Provider,{value:null,children:i.jsx(p,{in:o,onEnter:u,onEntering:s,onEntered:E,onExit:b,onExiting:m,onExited:l,mountOnEnter:c,unmountOnExit:d,children:i.jsx(e,Object.assign({},a,{ref:t,hidden:!o,"aria-hidden":!o}))})})})});w.displayName="TabPanel";const S=n=>{const{id:t,generateChildId:e,onSelect:r,activeKey:a,defaultActiveKey:o,transition:u,mountOnEnter:s,unmountOnExit:E,children:b}=n,[m,l]=F(a,o,r),c=G(t),d=g.useMemo(()=>e||((x,O)=>c?`${c}-${O}-${x}`:null),[c,e]),p=g.useMemo(()=>({onSelect:l,activeKey:m,transition:u,mountOnEnter:s||!1,unmountOnExit:E||!1,getControlledId:x=>d(x,"tabpane"),getControllerId:x=>d(x,"tab")}),[l,m,u,s,E,d]);return i.jsx(f.Provider,{value:p,children:i.jsx(h.Provider,{value:l||null,children:b})})};S.Panel=w;function U(n){return typeof n=="boolean"?n?A:I:n}const _=({transition:n,...t})=>i.jsx(S,{...t,transition:U(n)});_.displayName="TabContainer";const $=g.forwardRef(({className:n,bsPrefix:t,as:e="div",...r},a)=>(t=N(t,"tab-content"),i.jsx(e,{ref:a,className:K(n,t),...r})));$.displayName="TabContent";const M=g.forwardRef(({bsPrefix:n,transition:t,...e},r)=>{const[{className:a,as:o="div",...u},{isActive:s,onEnter:E,onEntering:b,onEntered:m,onExit:l,onExiting:c,onExited:d,mountOnEnter:p,unmountOnExit:x,transition:O=A}]=R({...e,transition:U(t)}),T=N(n,"tab-pane");return i.jsx(f.Provider,{value:null,children:i.jsx(h.Provider,{value:null,children:i.jsx(O,{in:s,onEnter:E,onEntering:b,onEntered:m,onExit:l,onExiting:c,onExited:d,mountOnEnter:p,unmountOnExit:x,children:i.jsx(o,{...u,ref:r,className:K(a,T,s&&"active")})})})})});M.displayName="TabPane";const V={eventKey:v.oneOfType([v.string,v.number]),title:v.node.isRequired,disabled:v.bool,tabClassName:v.string,tabAttrs:v.object},k=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};k.propTypes=V;const on=Object.assign(k,{Container:_,Content:$,Pane:M});export{S as T,tn as U,$ as a,M as b,on as c,en as d,U as g,nn as i};
