import{c as L,r as g,U as C,V as P,j as s,W as h,X as A,Y as F,$ as G,F as I,i as K,k as N,Z as v}from"./index-CMtFMLgs.js";const Z="/api/uploadImage",B=async(n,t)=>{const e={headers:{Authorization:t}};return(await L.post(Z,n,e)).data},X={upload:B},Y="https://pacucostorage.blob.core.windows.net/guardapolvos",H="https://pacucostorage.blob.core.windows.net/common",V=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],W=["activeKey","getControlledId","getControllerId"],q=["as"];function f(n,t){if(n==null)return{};var e={},a=Object.keys(n),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(e[r]=n[r]);return e}function R(n){let{active:t,eventKey:e,mountOnEnter:a,transition:r,unmountOnExit:o,role:u="tabpanel",onEnter:i,onEntering:E,onEntered:m,onExit:p,onExiting:l,onExited:c}=n,d=f(n,V);const x=g.useContext(C);if(!x)return[Object.assign({},d,{role:u}),{eventKey:e,isActive:t,mountOnEnter:a,transition:r,unmountOnExit:o,onEnter:i,onEntering:E,onEntered:m,onExit:p,onExiting:l,onExited:c}];const{activeKey:b,getControlledId:O,getControllerId:T}=x,y=f(x,W),j=P(e);return[Object.assign({},d,{role:u,id:O(e),"aria-labelledby":T(e)}),{eventKey:e,isActive:t==null&&j!=null?P(b)===j:t,transition:r||y.transition,mountOnEnter:a??y.mountOnEnter,unmountOnExit:o??y.unmountOnExit,onEnter:i,onEntering:E,onEntered:m,onExit:p,onExiting:l,onExited:c}]}const w=g.forwardRef((n,t)=>{let{as:e="div"}=n,a=f(n,q);const[r,{isActive:o,onEnter:u,onEntering:i,onEntered:E,onExit:m,onExiting:p,onExited:l,mountOnEnter:c,unmountOnExit:d,transition:x=A}]=R(a);return s.jsx(C.Provider,{value:null,children:s.jsx(h.Provider,{value:null,children:s.jsx(x,{in:o,onEnter:u,onEntering:i,onEntered:E,onExit:m,onExiting:p,onExited:l,mountOnEnter:c,unmountOnExit:d,children:s.jsx(e,Object.assign({},r,{ref:t,hidden:!o,"aria-hidden":!o}))})})})});w.displayName="TabPanel";const U=n=>{const{id:t,generateChildId:e,onSelect:a,activeKey:r,defaultActiveKey:o,transition:u,mountOnEnter:i,unmountOnExit:E,children:m}=n,[p,l]=F(r,o,a),c=G(t),d=g.useMemo(()=>e||((b,O)=>c?`${c}-${O}-${b}`:null),[c,e]),x=g.useMemo(()=>({onSelect:l,activeKey:p,transition:u,mountOnEnter:i||!1,unmountOnExit:E||!1,getControlledId:b=>d(b,"tabpane"),getControllerId:b=>d(b,"tab")}),[l,p,u,i,E,d]);return s.jsx(C.Provider,{value:x,children:s.jsx(h.Provider,{value:l||null,children:m})})};U.Panel=w;function S(n){return typeof n=="boolean"?n?I:A:n}const _=({transition:n,...t})=>s.jsx(U,{...t,transition:S(n)});_.displayName="TabContainer";const $=g.forwardRef(({className:n,bsPrefix:t,as:e="div",...a},r)=>(t=K(t,"tab-content"),s.jsx(e,{ref:r,className:N(n,t),...a})));$.displayName="TabContent";const M=g.forwardRef(({bsPrefix:n,transition:t,...e},a)=>{const[{className:r,as:o="div",...u},{isActive:i,onEnter:E,onEntering:m,onEntered:p,onExit:l,onExiting:c,onExited:d,mountOnEnter:x,unmountOnExit:b,transition:O=I}]=R({...e,transition:S(t)}),T=K(n,"tab-pane");return s.jsx(C.Provider,{value:null,children:s.jsx(h.Provider,{value:null,children:s.jsx(O,{in:i,onEnter:E,onEntering:m,onEntered:p,onExit:l,onExiting:c,onExited:d,mountOnEnter:x,unmountOnExit:b,children:s.jsx(o,{...u,ref:a,className:N(r,T,i&&"active")})})})})});M.displayName="TabPane";const z={eventKey:v.oneOfType([v.string,v.number]),title:v.node.isRequired,disabled:v.bool,tabClassName:v.string,tabAttrs:v.object},k=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};k.propTypes=z;const J=Object.assign(k,{Container:_,Content:$,Pane:M});export{J as T,H as U,Y as a,U as b,$ as c,M as d,S as g,X as i};
