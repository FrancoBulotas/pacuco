import{j as e,F as i,c as je,d as ie,i as be,r as m,o as ye,g as Ce,l as we,e as X,f as V,h as Y,k as ke,m as Ne,n as Se,p as Te,q as A,t as L,v as re,w as ee,x as Be,y as te,z as K,P as Ie,A as Ee,B as Pe,C as Fe,D as B,b as W,u as _,E as O,G as Re,S as T,H as z,I as ne,J as Q,K as De,N as Oe,M as oe,O as $e,Q as Ae,T as Me,U as Le,V as ze,W as Ge,X as se,Y as _e,Z as He,_ as qe}from"./index-DiOVNNMO.js";import{U as $,i as le,T as Ue,g as Ke,a as Ve,b as We,c as q}from"./Tab-Bt7v5fA0.js";import{s as G}from"./token-By_1sbaR.js";import{M as P}from"./Modal-Cymm0bGt.js";import{A as Qe}from"./Alert-EMSxoN8_.js";import{P as Ze}from"./PaginationProductos-DyDzF-bS.js";const ce=({amount:t,size:o,formData:s,handleInputChange:c})=>{const l={display:"flex",justifyContent:"space-around",gap:"5px"},p={width:"50%"};return e.jsxs("div",{style:l,children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",style:p,children:[e.jsxs(i.Label,{children:[e.jsxs("strong",{children:["Cantidad",t!==""?":":""," "]}),t]}),e.jsx(i.Control,{type:"text",name:"amount",placeholder:"nueva cantidad",value:s.amount,onChange:c})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",style:p,children:[e.jsxs(i.Label,{children:[e.jsxs("strong",{children:["Talle",t!==""?":":""," "]}),o]}),e.jsx(i.Control,{type:"text",name:"size",placeholder:"nuevo talle",value:s.size,onChange:c})]})]})},Je=()=>{};function Xe(t,o,{disabled:s,clickTrigger:c}={}){const l=o||Je;je(t,l,{disabled:s,clickTrigger:c});const p=ie(b=>{be(b)&&l(b)});m.useEffect(()=>{if(s||t==null)return;const b=ye(Ce(t));let n=(b.defaultView||window).event;const h=we(b,"keyup",g=>{if(g===n){n=void 0;return}p(g)});return()=>{h()}},[t,s,p])}const de=m.forwardRef((t,o)=>{const{flip:s,offset:c,placement:l,containerPadding:p,popperConfig:b={},transition:n,runTransition:h}=t,[g,k]=X(),[y,w]=X(),d=V(k,o),x=Y(t.container),j=Y(t.target),[r,u]=m.useState(!t.show),a=ke(j,g,Ne({placement:l,enableEvents:!!t.show,containerPadding:p||5,flip:s,offset:c,arrowElement:y,popperConfig:b}));t.show&&r&&u(!1);const f=(...R)=>{u(!0),t.onExited&&t.onExited(...R)},C=t.show||!r;if(Xe(g,t.onHide,{disabled:!t.rootClose||t.rootCloseDisabled,clickTrigger:t.rootCloseEvent}),!C)return null;const{onExit:I,onExiting:N,onEnter:S,onEntering:E,onEntered:M}=t;let v=t.children(Object.assign({},a.attributes.popper,{style:a.styles.popper,ref:d}),{popper:a,placement:l,show:!!t.show,arrowProps:Object.assign({},a.attributes.arrow,{style:a.styles.arrow,ref:w})});return v=Se(n,h,{in:!!t.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:v,onExit:I,onExiting:N,onExited:f,onEnter:S,onEntering:E,onEntered:M}),x?Te.createPortal(v,x):null});de.displayName="Overlay";const ue=m.forwardRef(({className:t,bsPrefix:o,as:s="div",...c},l)=>(o=A(o,"popover-header"),e.jsx(s,{ref:l,className:L(t,o),...c})));ue.displayName="PopoverHeader";const Z=m.forwardRef(({className:t,bsPrefix:o,as:s="div",...c},l)=>(o=A(o,"popover-body"),e.jsx(s,{ref:l,className:L(t,o),...c})));Z.displayName="PopoverBody";function me(t,o){let s=t;return t==="left"?s=o?"end":"start":t==="right"&&(s=o?"start":"end"),s}function he(t="absolute"){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Ye=m.forwardRef(({bsPrefix:t,placement:o="right",className:s,style:c,children:l,body:p,arrowProps:b,hasDoneInitialMeasure:n,popper:h,show:g,...k},y)=>{const w=A(t,"popover"),d=re(),[x]=(o==null?void 0:o.split("-"))||[],j=me(x,d);let r=c;return g&&!n&&(r={...c,...he(h==null?void 0:h.strategy)}),e.jsxs("div",{ref:y,role:"tooltip",style:r,"x-placement":x,className:L(s,w,x&&`bs-popover-${j}`),...k,children:[e.jsx("div",{className:"popover-arrow",...b}),p?e.jsx(Z,{children:l}):l]})}),et=Object.assign(Ye,{Header:ue,Body:Z,POPPER_OFFSET:[0,8]}),ge=m.forwardRef(({bsPrefix:t,placement:o="right",className:s,style:c,children:l,arrowProps:p,hasDoneInitialMeasure:b,popper:n,show:h,...g},k)=>{t=A(t,"tooltip");const y=re(),[w]=(o==null?void 0:o.split("-"))||[],d=me(w,y);let x=c;return h&&!b&&(x={...c,...he(n==null?void 0:n.strategy)}),e.jsxs("div",{ref:k,style:x,role:"tooltip","x-placement":w,className:L(s,t,`bs-tooltip-${d}`),...g,children:[e.jsx("div",{className:"tooltip-arrow",...p}),e.jsx("div",{className:`${t}-inner`,children:l})]})});ge.displayName="Tooltip";const J=Object.assign(ge,{TOOLTIP_OFFSET:[0,6]});function tt(t){const o=m.useRef(null),s=A(void 0,"popover"),c=A(void 0,"tooltip"),l=m.useMemo(()=>({name:"offset",options:{offset:()=>{if(t)return t;if(o.current){if(ee(o.current,s))return et.POPPER_OFFSET;if(ee(o.current,c))return J.TOOLTIP_OFFSET}return[0,0]}}}),[t,s,c]);return[o,[l]]}function nt(t,o){const{ref:s}=t,{ref:c}=o;t.ref=s.__wrapped||(s.__wrapped=l=>s(K(l))),o.ref=c.__wrapped||(c.__wrapped=l=>c(K(l)))}const fe=m.forwardRef(({children:t,transition:o=te,popperConfig:s={},rootClose:c=!1,placement:l="top",show:p=!1,...b},n)=>{const h=m.useRef({}),[g,k]=m.useState(null),[y,w]=tt(b.offset),d=V(n,y),x=o===!0?te:o||void 0,j=ie(r=>{k(r),s==null||s.onFirstUpdate==null||s.onFirstUpdate(r)});return Be(()=>{g&&b.target&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[g,b.target]),m.useEffect(()=>{p||k(null)},[p]),e.jsx(de,{...b,ref:d,popperConfig:{...s,modifiers:w.concat(s.modifiers||[]),onFirstUpdate:j},transition:x,rootClose:c,placement:l,show:p,children:(r,{arrowProps:u,popper:a,show:f})=>{var C,I;nt(r,u);const N=a==null?void 0:a.placement,S=Object.assign(h.current,{state:a==null?void 0:a.state,scheduleUpdate:a==null?void 0:a.update,placement:N,outOfBoundaries:(a==null||(C=a.state)==null||(I=C.modifiersData.hide)==null?void 0:I.isReferenceHidden)||!1,strategy:s.strategy}),E=!!g;return typeof t=="function"?t({...r,placement:N,show:f,...!o&&f&&{className:"show"},popper:S,arrowProps:u,hasDoneInitialMeasure:E}):m.cloneElement(t,{...r,placement:N,arrowProps:u,popper:S,hasDoneInitialMeasure:E,className:L(t.props.className,!o&&f&&"show"),style:{...t.props.style,...r.style}})}})});fe.displayName="Overlay";function ot(t){return t&&typeof t=="object"?t:{show:t,hide:t}}function ae(t,o,s){const[c]=o,l=c.currentTarget,p=c.relatedTarget||c.nativeEvent[s];(!p||p!==l)&&!Fe(l,p)&&t(...o)}Ie.oneOf(["click","hover","focus"]);const xe=({trigger:t=["hover","focus"],overlay:o,children:s,popperConfig:c={},show:l,defaultShow:p=!1,onToggle:b,delay:n,placement:h,flip:g=h&&h.indexOf("auto")!==-1,...k})=>{const y=m.useRef(null),w=V(y,s.ref),d=Ee(),x=m.useRef(""),[j,r]=Pe(l,p,b),u=ot(n),{onFocus:a,onBlur:f,onClick:C}=typeof s!="function"?m.Children.only(s).props:{},I=F=>{w(K(F))},N=m.useCallback(()=>{if(d.clear(),x.current="show",!u.show){r(!0);return}d.set(()=>{x.current==="show"&&r(!0)},u.show)},[u.show,r,d]),S=m.useCallback(()=>{if(d.clear(),x.current="hide",!u.hide){r(!1);return}d.set(()=>{x.current==="hide"&&r(!1)},u.hide)},[u.hide,r,d]),E=m.useCallback((...F)=>{N(),a==null||a(...F)},[N,a]),M=m.useCallback((...F)=>{S(),f==null||f(...F)},[S,f]),v=m.useCallback((...F)=>{r(!j),C==null||C(...F)},[C,r,j]),R=m.useCallback((...F)=>{ae(N,F,"fromElement")},[N]),ve=m.useCallback((...F)=>{ae(S,F,"toElement")},[S]),H=t==null?[]:[].concat(t),D={ref:I};return H.indexOf("click")!==-1&&(D.onClick=v),H.indexOf("focus")!==-1&&(D.onFocus=E,D.onBlur=M),H.indexOf("hover")!==-1&&(D.onMouseOver=R,D.onMouseOut=ve),e.jsxs(e.Fragment,{children:[typeof s=="function"?s(D):m.cloneElement(s,D),e.jsx(fe,{...k,show:j,onHide:S,flip:g,placement:h,popperConfig:c,target:y.current,children:o})]})},st=t=>{const o=B(r=>r.login),s=W(),c=_(),l=B(r=>r.guardapolvos.guardapolvos),[p,b]=m.useState([]),[n,h]=m.useState({id:"",name:"",price:"",discountPrice:"",amount:"",size:"",description:{general:"",base:"",detalle:"",vivos:"",bolsillos:""},img:"",img2:"",img3:""});m.useEffect(()=>{h({...n,description:{...n.description,general:t.item.description?t.item.description.general:""}})},[t.item]);const g=r=>{const{name:u,value:a}=r.target;a.startsWith(" ")||h(u==="base"||u==="general"||u==="detalle"||u==="vivos"||u==="bolsillos"?{...n,description:{...n.description,[u]:a}}:{...n,[u]:a})},k=r=>{const u=r.target.files[0];if(!u)return;const a=r.target.name;a==="imageFront"?h(f=>({...f,img:u.name})):a==="imageBack"?h(f=>({...f,img2:u.name})):a==="imageSizes"&&h(f=>({...f,img3:u.name})),b(f=>[...f,u])},y=async r=>{r.preventDefault();const u=Date.now()+"-"+Math.round(Math.random()*1e9);let a="";if(/prueba[\$0-9]/.test(t.item.name)&&(a="-dev"),!Re(n.price)&&n.price!==""){T.fire({title:"Ingresa un precio valido!",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}const f={id:t.item.id,table:t.item.table,amountToBuy:1,img:n.img!==""?`${$}${a}/${u}-${n.img}`:t.item.img,img2:n.img2!==""?`${$}${a}/${u}-${n.img2}`:t.item.img2,img3:n.img3!==""?`${$}${a}/${u}-${n.img3}`:t.item.img3,name:n.name!==""?n.name:t.item.name,price:n.price!==""?Number(n.price):Number(t.item.price),discountPrice:n.discountPrice!==""?n.discountPrice:t.item.discountPrice,amount:n.amount!==""?n.amount:t.item.amount,size:n.size!==""?n.size:t.item.size,description:{general:n.description.general!==""?n.description.general:t.item.description.general,base:n.description.base!==""?n.description.base:t.item.description.base,detalle:n.description.detalle!==""?n.description.detalle:t.item.description.detalle,vivos:n.description.vivos!==""?n.description.vivos:t.item.description.vivos,bolsillos:n.description.bolsillos!==""?n.description.bolsillos:t.item.description.bolsillos}},C=new FormData;C.append("blobName",u),C.append("containerName","guardapolvos");try{T.fire({title:"Estas segura que queres modificar?",icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async I=>{if(I.isConfirmed){try{const N=G(o.token);await z.update(t.item.id,f,N);const S=l.map(E=>E.id===t.item.id?f:E);c(ne(f.table,S.filter(E=>E.table===f.table))),p.length>0&&(p.forEach(E=>C.append("images",E)),await le.upload(C,N))}catch(N){if(console.log(N),N.response.status===401)T.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(S=>{if(S.isConfirmed){s("/login");return}});else{T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}}T.fire({title:`${t.item.name} modificado!`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{p.length>0&&Q(.2),t.onHide()})}})}catch(I){console.error("Error:",I),T.fire({title:"Error",text:"No se pudo modificar el producto",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},w=()=>{T.fire({title:"Estas segura que queres eliminar el guardapolvo?",icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async r=>{if(r.isConfirmed)try{const u=G(o.token);await z.deleteGuardapolvo(t.item.id,u);const a=l.filter(f=>f.id!==t.item.id);c(ne(t.item.table,a.filter(f=>f.table===t.item.table))),T.fire({title:"Guardapolvo eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(f=>{f.isConfirmed&&t.onHide()})}catch(u){console.error("Error:",u),T.fire({title:"Error",text:"No se pudo eliminar el guardapolvo",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}),u.response.data.error==="token expired"&&s("/login")}})},d={display:"flex",justifyContent:"space-around",gap:"5px"},x={width:"50%"},j=r=>e.jsx(J,{id:"button-tooltip",...r,children:"Una vez agregado un descuento, el precio actual se mantiene (aparece tachado), pero el precio que se muestra a los clientes es el del descuento. Para sacar el descuento aplicado, hay que darle un nuevo valor de 0"});return e.jsxs(P,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(P.Header,{closeButton:!0,children:e.jsxs(P.Title,{id:"contained-modal-title-vcenter",children:["Modificar ",t.item.name]})}),e.jsx(P.Body,{children:e.jsxs(i,{onSubmit:y,encType:"multipart/form-data",children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput1",children:[e.jsxs(i.Label,{children:[e.jsx("strong",{children:"Nombre actual:"})," ",t.item.name]}),e.jsx(i.Control,{type:"text",name:"name",placeholder:"nuevo nombre",value:n.name,onChange:g})]}),e.jsxs("div",{style:d,children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",style:t.table==="stock"?{width:"50%"}:{width:"100%"},children:[e.jsxs(i.Label,{children:[e.jsx("strong",{children:"Precio actual:"})," $ ",t.item.price]}),e.jsx(i.Control,{type:"text",name:"price",placeholder:"nuevo precio",value:n.price,onChange:g})]}),t.table==="stock"&&e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput3",style:{width:"50%"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(i.Label,{children:[e.jsx("strong",{children:"Descuento actual:"})," $ ",t.item.discountPrice||t.item.discountPrice>0?t.item.discountPrice:"0"]}),e.jsx(xe,{placement:"right",delay:{show:250,hide:400},overlay:j,children:e.jsx("div",{children:e.jsx("i",{className:"bi bi-info-circle",style:{marginRight:"auto",width:"100%"}})})})]}),e.jsx(i.Control,{type:"text",name:"discountPrice",placeholder:"nuevo descuento",value:n.discountPrice,onChange:g})]})]}),t.table==="stock"?e.jsx(ce,{amount:t.item.amount,size:t.item.size,formData:n,handleInputChange:g}):null,e.jsxs(i.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Descripcion actual:"})}),e.jsxs("div",{style:d,children:[e.jsxs("div",{style:x,children:[e.jsx("strong",{children:"Base:"})," ",t.item.description!==void 0?t.item.description.base:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nueva base",name:"base",onChange:g,value:n.description.base})]}),e.jsxs("div",{style:x,children:[e.jsx("strong",{children:"Detalle:"})," ",t.item.description!==void 0?t.item.description.detalle:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo detalle",name:"detalle",onChange:g,value:n.description.detalle})]})]}),e.jsxs("div",{style:d,children:[e.jsxs("div",{style:x,children:[e.jsx("strong",{children:"Vivos:"})," ",t.item.description?t.item.description.vivos:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo vivo",name:"vivos",onChange:g,value:n.description.vivos})]}),e.jsxs("div",{style:x,children:[e.jsx("strong",{children:"Bolsillos:"})," ",t.item.description?t.item.description.bolsillos:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo bolsillos",name:"bolsillos",onChange:g,value:n.description.bolsillos})]})]}),e.jsx(i.Control,{as:"textarea",placeholder:"nueva descripcion",name:"general",onChange:g,value:n.description.general,rows:4})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Frente"})}),e.jsx(i.Control,{type:"file",name:"imageFront",onChange:k})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Dorso"})}),e.jsx(i.Control,{type:"file",name:"imageBack",onChange:k})]}),t.table==="stock"?e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Talles"})}),e.jsx(i.Control,{type:"file",name:"imageSizes",onChange:k})]}):null]})}),e.jsxs(P.Footer,{children:[e.jsx(O,{variant:"danger",onClick:w,style:{marginRight:"auto"},children:"Eliminar guardapolvo"}),e.jsx(O,{variant:"secondary",onClick:t.onHide,children:"Cerrar"}),e.jsx(O,{variant:"dark",onClick:y,children:"Guardar Cambios"})]})]})},at=t=>{B(w=>w.guardapolvos.guardapolvos),_();const o=W(),s=B(w=>w.login),[c,l]=m.useState({display:"none",text:""}),[p,b]=m.useState([]),[n,h]=m.useState({name:"",price:"",description:{general:"",base:"",detalle:"",vivos:"",bolsillos:""},amount:"",amountToBuy:1,size:"",table:t.table,img:"",img2:"",img3:"",imgs:[]}),g=w=>{const{name:d,value:x}=w.target;h(d==="base"||d==="general"||d==="detalle"||d==="vivos"||d==="bolsillos"?{...n,description:{...n.description,[d]:x}}:{...n,[d]:x})},k=w=>{const d=w.target.files[0];if(!d)return;const x=w.target.name;x==="imageFront"?h(j=>({...j,img:d.name})):x==="imageBack"?h(j=>({...j,img2:d.name})):x==="imageSizes"&&h(j=>({...j,img3:d.name})),b(j=>[...j,d]),h(j=>({...j,imgs:[...n.imgs,d.name]}))},y=async w=>{w.preventDefault();const d=Date.now()+"-"+Math.round(Math.random()*1e9);if(n.name===""){l({display:"block",text:"Ingresar nombre"});return}else if(n.price===""){l({display:"block",text:"Ingresar precio"});return}else if(n.description.general===""){l({display:"block",text:"Ingresar descripcion"});return}else if(n.img===""){l({display:"block",text:"Ingresar imagen frente"});return}else if(n.img2===""){l({display:"block",text:"Ingresar dorso"});return}if(t.table==="stock"){if(n.amount===""){l({display:"block",text:"Ingresar cantidad"});return}else if(n.size===""){l({display:"block",text:"Ingresar talle"});return}}l({display:"none",text:""});let x="";/prueba[\$0-9]/.test(n.name)&&(x="-dev");const j=n;j.img=`${$}${x}/${d}-${n.img}`,j.img2=`${$}${x}/${d}-${n.img2}`,j.img3=n.img3!==""?`${$}${x}/${d}-${n.img3}`:void 0,j.table=t.table,j.discountPrice=void 0;const r=new FormData;r.append("blobName",d),r.append("containerName","guardapolvos");try{T.fire({title:`Estas segura que queres agregar ${n.name}?`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async u=>{if(u.isConfirmed){try{const a=G(s.token);await z.create(n,a),p.forEach(f=>{r.append("images",f)}),await le.upload(r,a)}catch(a){if(console.error(a),a.response.status===401)T.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(f=>{f.isConfirmed&&o("/login")});else{T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}}T.fire({title:`${n.name} agregado!`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{Q(.5),t.onHide()})}})}catch(u){console.error("Error:",u)}};return e.jsxs(P,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(P.Header,{closeButton:!0,children:e.jsx(P.Title,{id:"contained-modal-title-vcenter",children:"Agregar nuevo guardapolvo"})}),e.jsx(Qe,{variant:"danger",style:{display:`${c.display}`},children:c.text},"danger"),e.jsx(P.Body,{children:e.jsxs(i,{onSubmit:y,encType:"multipart/form-data",children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput1",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Nombre"})}),e.jsx(i.Control,{type:"text",name:"name",placeholder:"nuevo nombre",value:n.name,onChange:g})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Precio"})}),e.jsx(i.Control,{type:"text",name:"price",placeholder:"nuevo precio",value:n.price,onChange:g})]}),t.table==="stock"?e.jsx(ce,{amount:"",size:"",formData:n,handleInputChange:g}):null,e.jsxs(i.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Descripcion"})}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nueva base",name:"base",onChange:g,value:n.description.base}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo detalle",name:"detalle",onChange:g,value:n.description.detalle}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo vivo",name:"vivos",onChange:g,value:n.description.vivos}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo bolsillos",name:"bolsillos",onChange:g,value:n.description.bolsillos}),e.jsx(i.Control,{as:"textarea",placeholder:"nueva descripcion general",name:"general",onChange:g,value:n.description.general,rows:3})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Frente"})}),e.jsx(i.Control,{type:"file",name:"imageFront",onChange:k})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Dorso"})}),e.jsx(i.Control,{type:"file",name:"imageBack",onChange:k})]}),t.table==="stock"?e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Talles"})}),e.jsx(i.Control,{type:"file",name:"imageSizes",onChange:k})]}):null]})}),e.jsxs(P.Footer,{children:[e.jsx(O,{variant:"secondary",onClick:t.onHide,children:"Cerrar"}),e.jsx(O,{variant:"dark",onClick:y,children:"Guardar Cambios"})]})]})};function it(t){let o;return $e(t,s=>{o==null&&(o=s.props.eventKey)}),o}function rt(t){const{title:o,eventKey:s,disabled:c,tabClassName:l,tabAttrs:p,id:b}=t.props;return o==null?null:e.jsx(Ae,{as:"li",role:"presentation",children:e.jsx(Me,{as:"button",type:"button",eventKey:s,disabled:c,id:b,className:l,...p,children:o})})}const pe=t=>{const{id:o,onSelect:s,transition:c,mountOnEnter:l=!1,unmountOnExit:p=!1,variant:b="tabs",children:n,activeKey:h=it(n),...g}=De(t,{activeKey:"onSelect"});return e.jsxs(Ue,{id:o,activeKey:h,onSelect:s,transition:Ke(c),mountOnEnter:l,unmountOnExit:p,children:[e.jsx(Oe,{id:o,...g,role:"tablist",as:"ul",variant:b,children:oe(n,rt)}),e.jsx(Ve,{children:oe(n,k=>{const y={...k.props};return delete y.title,delete y.disabled,delete y.tabClassName,delete y.tabAttrs,e.jsx(We,{...y})})})]})};pe.displayName="Tabs";const U=({title:t,table:o,guardapolvosList:s,showCreateModal:c,showEditModal:l})=>{const p=B(v=>v.guardapolvos.nivelInicial),b=B(v=>v.guardapolvos.primaria),n=B(v=>v.guardapolvos.stock),[h,g]=m.useState(!1),[k,y]=m.useState(s);m.useEffect(()=>{o==="primaria"?y(b):o==="stock"?y(n):o==="nivel_inicial"&&y(p)},[s]);const w=B(v=>v.filter.search.toLowerCase()),d=_(),[x,j]=m.useState(1),r=6,u=k.length,a=Math.ceil(u/r),f=v=>{j(v)},C=()=>{const v=(x-1)*r,R=v+r;return k.slice(v,R)},I=()=>{if(g(!0),w!==""){j(1);const v=s.filter(R=>_e(w,R));y(v)}else N();setTimeout(()=>{g(!1)},1e3)},N=()=>{d(He("")),y(s)},S=v=>{T.fire({imageUrl:v,showConfirmButton:!1})},E={margin:"0px",fontSize:"16px",background:"inherit",border:"none"},M={marginRight:"5px",cursor:"pointer",fontSize:"13px",display:"flex",alignItems:"center",backgroundColor:"#f3f3f3",padding:"4px",borderRadius:"6px"};return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex w-100",children:[e.jsx("h4",{className:"label-titulos",children:t}),e.jsxs("div",{style:{marginLeft:"auto",display:"flex"},children:[k.length!==s.length?e.jsx("div",{onClick:()=>N(),style:M,children:"reiniciar"}):null,e.jsx("div",{children:e.jsx(Le,{displaySearch:I,filtrateSearch:null})}),e.jsx("button",{onClick:()=>c(o),style:E,children:e.jsx(ze,{width:"20",height:"20"})})]})]}),h?e.jsx(Ge,{}):e.jsxs("div",{className:"tabla-container",children:[e.jsxs("table",{className:"tabla-de-productoss",children:[e.jsx("thead",{children:o==="stock"?e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Frente"}),e.jsx("th",{children:"Dorso"}),e.jsx("th",{style:{width:"50px"},children:"Descuento"}),e.jsx("th",{})]}):e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Frente"}),e.jsx("th",{children:"Dorso"}),e.jsx("th",{children:"Editar"})]})}),C().map((v,R)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:v.name}),e.jsxs("td",{children:["$ ",se(v)?v.discountPrice:v.price]}),o==="stock"?e.jsx("td",{children:v.amount}):"",o==="stock"?e.jsx("td",{children:v.size}):"",e.jsx("td",{children:e.jsx("img",{src:v.img,onClick:()=>S(v.img),alt:v.description.general,className:"small-img-admin",style:{cursor:"pointer"}})}),e.jsx("td",{children:e.jsx("img",{src:v.img2,onClick:()=>S(v.img2),alt:v.description.general,className:"small-img-admin",style:{cursor:"pointer"}})}),o==="stock"?e.jsx("td",{children:se(v)?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}):"",e.jsx("td",{onClick:()=>l(v,o),style:{cursor:"pointer"},children:e.jsx("i",{className:"bi bi-pencil-square"})})]})},R))]}),e.jsx(Ze,{currentPage:x,totalPages:a,onPageChange:f})]})]})},lt=({show:t,onHide:o})=>{const s=B(a=>a.guardapolvos.nivelInicial),c=B(a=>a.guardapolvos.primaria),l=B(a=>a.guardapolvos.stock),p=B(a=>a.guardapolvos.guardapolvos),b=B(a=>a.login),n=W(),[h,g]=m.useState("guardapolvos"),[k,y]=m.useState(0),[w,d]=m.useState(p);m.useEffect(()=>{h==="nivel_inicial"&&d(s),h==="primaria"&&d(c),h==="stock"&&d(l),h==="guardapolvos"&&d(p)},[h]);const x=a=>{g(a.target.value)},j=a=>{const f=a.target.value/100;y(f)},r=async(a,f)=>{try{const C=G(b.token);T.fire({title:`Estas segura que queres modificar en un ${a*100}% el precio de los guardapolvos?`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async I=>{if(I.isConfirmed)try{if((await z.changePriceByPorcentage({porcent:a,guardapolvos:f},C)).ok){Q(.4);return}else throw new Error("Error al intentar modificar el precio.")}catch(N){if(console.log(N),N.response.status===401)T.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(S=>{if(S.isConfirmed){n("/login");return}});else{T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}}})}catch(C){console.error(C),T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},u=a=>e.jsx(J,{id:"button-tooltip",...a,children:"Si queremos bajar el precio, lo unico que hay que hacer es poner el numero en negativo. Ejemplo: Queremos bajar un 10%, ponemos -10%."});return e.jsxs(P,{show:t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(P.Header,{closeButton:!0,children:e.jsx(P.Title,{id:"contained-modal-title-vcenter",children:"Administrar todos los productos"})}),e.jsxs(P.Body,{children:[e.jsxs("div",{className:"d-flex",style:{fontSize:"16px",height:"40px",alignItems:"center"},children:[e.jsx("p",{style:{margin:"0px"},children:"Cambiar el precio a: "}),e.jsxs("select",{name:"",onChange:x,style:{marginLeft:"5px",border:"none",cursor:"pointer",outline:"none",boxShadow:"none"},children:[e.jsx("option",{value:"guardapolvos",children:"Todos"}),e.jsx("option",{value:"nivel_inicial",children:"Nivel Inicial"}),e.jsx("option",{value:"primaria",children:"Primaria"}),e.jsx("option",{value:"stock",children:"Stock"})]})]}),e.jsxs("div",{className:"d-flex",style:{fontSize:"16px",height:"40px",alignItems:"center"},children:[e.jsx("p",{style:{margin:"0px"},children:"En un: "}),e.jsx("input",{type:"text",onChange:j,style:{width:"40px",outline:"none",boxShadow:"none",border:"1px solid #e2e2e2",marginLeft:"4px"}}),e.jsx("p",{style:{margin:"0px",marginRight:"20px"},children:"%"}),e.jsx(xe,{placement:"right",delay:{show:250,hide:400},overlay:u,children:e.jsx("div",{children:e.jsx("i",{className:"bi bi-info-circle",style:{marginRight:"auto",width:"100%"}})})})]})]}),e.jsxs(P.Footer,{children:[e.jsx(O,{variant:"secondary",onClick:o,children:"Cerrar"}),e.jsx(O,{className:"btn btn-dark",onClick:()=>r(k,w),children:"Aplicar cambios"})]})]})},ft=()=>{const t=B(C=>C.guardapolvos.nivelInicial),o=B(C=>C.guardapolvos.primaria),s=B(C=>C.guardapolvos.stock),c=B(C=>C.administration.tabChoosen),l=_(),[p,b]=m.useState(!1),[n,h]=m.useState(!1),[g,k]=m.useState(!1),[y,w]=m.useState(""),[d,x]=m.useState({}),j=(C,I)=>{h(!0),w(I),x(C)},r=C=>{w(C),b(!0)},u=()=>{k(!0)},a=C=>{l(qe(C))},f={width:"100%"};return e.jsx("div",{children:e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("div",{className:"d-flex w-100 mb-5",onClick:()=>u(),children:e.jsxs("div",{className:"card",style:{cursor:"pointer"},children:[e.jsx("div",{className:"card-body",children:"Administrar todos los productos"}),e.jsxs("div",{className:"card-footer d-flex align-items-center justify-content-between",children:[e.jsx("div",{className:"small text-black stretched-link",children:"Ver detalles"}),e.jsx("div",{className:"small text-black",children:e.jsx("i",{className:"fas fa-angle-right"})})]})]})}),e.jsx("div",{style:{width:"100%",backgroundColor:"#fff",padding:"10px"},className:"tabs-container",children:e.jsxs(pe,{defaultActiveKey:c,id:"uncontrolled-tab-example",className:"mb-3",fill:!0,onSelect:a,children:[e.jsx(q,{eventKey:"nivel_inicial",title:"Nivel Inicial",style:f,children:e.jsx(U,{title:"NIVEL INICIAL",table:"nivel_inicial",guardapolvosList:t,showCreateModal:r,showEditModal:j})}),e.jsx(q,{eventKey:"primaria",title:"Primaria",style:f,children:e.jsx(U,{title:"PRIMARIA",table:"primaria",guardapolvosList:o,showCreateModal:r,showEditModal:j})}),e.jsx(q,{eventKey:"stock",title:"Stock",style:f,children:e.jsx(U,{title:"STOCK",table:"stock",guardapolvosList:s,showCreateModal:r,showEditModal:j})})]})}),e.jsx(st,{item:d,show:n,table:y,onHide:()=>h(!1)}),e.jsx(at,{show:p,table:y,onHide:()=>b(!1)}),e.jsx(lt,{show:g,onHide:()=>k(!1)})]})})})};export{ft as default};
