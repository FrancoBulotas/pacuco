import{j as e,w as i,ah as je,n as ie,ai as be,r as m,P as ye,aj as Ce,ak as we,D as X,E as V,al as Y,am as Ne,an as ke,ao as Se,ap as Te,i as A,k as L,G as re,aq as ee,ar as Be,F as te,as as K,Z as Ie,at as Ee,au as Pe,av as Fe,b as B,a as W,u as _,a4 as O,aw as De,S as T,ax as z,ay as ne,x as Z,m as Re,N as Oe,az as oe,aA as $e,aB as Ae,aC as Me,aD as Le,aE as ze,ab as Ge,v as ae,aF as _e,af as qe,aG as He}from"./index-CMtFMLgs.js";import{a as $,i as le,b as Ue,g as Ke,c as Ve,d as We,T as H}from"./Tab-DYAe7bUL.js";import{s as G}from"./token-By_1sbaR.js";import{M as P}from"./Modal-Bn0n51_2.js";import{A as Ze}from"./Alert-BSPttp8h.js";import{P as Qe}from"./PaginationProductos-2WlTxlVr.js";const ce=({amount:t,size:o,formData:a,handleInputChange:c})=>{const l={display:"flex",justifyContent:"space-around",gap:"5px"},p={width:"50%"};return e.jsxs("div",{style:l,children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",style:p,children:[e.jsxs(i.Label,{children:[e.jsxs("strong",{children:["Cantidad",t!==""?":":""," "]}),t]}),e.jsx(i.Control,{type:"text",name:"amount",placeholder:"nueva cantidad",value:a.amount,onChange:c})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",style:p,children:[e.jsxs(i.Label,{children:[e.jsxs("strong",{children:["Talle",t!==""?":":""," "]}),o]}),e.jsx(i.Control,{type:"text",name:"size",placeholder:"nuevo talle",value:a.size,onChange:c})]})]})},Je=()=>{};function Xe(t,o,{disabled:a,clickTrigger:c}={}){const l=o||Je;je(t,l,{disabled:a,clickTrigger:c});const p=ie(b=>{be(b)&&l(b)});m.useEffect(()=>{if(a||t==null)return;const b=ye(Ce(t));let n=(b.defaultView||window).event;const h=we(b,"keyup",x=>{if(x===n){n=void 0;return}p(x)});return()=>{h()}},[t,a,p])}const de=m.forwardRef((t,o)=>{const{flip:a,offset:c,placement:l,containerPadding:p,popperConfig:b={},transition:n,runTransition:h}=t,[x,N]=X(),[y,w]=X(),d=V(N,o),f=Y(t.container),j=Y(t.target),[r,u]=m.useState(!t.show),s=Ne(j,x,ke({placement:l,enableEvents:!!t.show,containerPadding:p||5,flip:a,offset:c,arrowElement:y,popperConfig:b}));t.show&&r&&u(!1);const g=(...D)=>{u(!0),t.onExited&&t.onExited(...D)},C=t.show||!r;if(Xe(x,t.onHide,{disabled:!t.rootClose||t.rootCloseDisabled,clickTrigger:t.rootCloseEvent}),!C)return null;const{onExit:I,onExiting:k,onEnter:S,onEntering:E,onEntered:M}=t;let v=t.children(Object.assign({},s.attributes.popper,{style:s.styles.popper,ref:d}),{popper:s,placement:l,show:!!t.show,arrowProps:Object.assign({},s.attributes.arrow,{style:s.styles.arrow,ref:w})});return v=Se(n,h,{in:!!t.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:v,onExit:I,onExiting:k,onExited:g,onEnter:S,onEntering:E,onEntered:M}),f?Te.createPortal(v,f):null});de.displayName="Overlay";const ue=m.forwardRef(({className:t,bsPrefix:o,as:a="div",...c},l)=>(o=A(o,"popover-header"),e.jsx(a,{ref:l,className:L(t,o),...c})));ue.displayName="PopoverHeader";const Q=m.forwardRef(({className:t,bsPrefix:o,as:a="div",...c},l)=>(o=A(o,"popover-body"),e.jsx(a,{ref:l,className:L(t,o),...c})));Q.displayName="PopoverBody";function me(t,o){let a=t;return t==="left"?a=o?"end":"start":t==="right"&&(a=o?"start":"end"),a}function he(t="absolute"){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Ye=m.forwardRef(({bsPrefix:t,placement:o="right",className:a,style:c,children:l,body:p,arrowProps:b,hasDoneInitialMeasure:n,popper:h,show:x,...N},y)=>{const w=A(t,"popover"),d=re(),[f]=(o==null?void 0:o.split("-"))||[],j=me(f,d);let r=c;return x&&!n&&(r={...c,...he(h==null?void 0:h.strategy)}),e.jsxs("div",{ref:y,role:"tooltip",style:r,"x-placement":f,className:L(a,w,f&&`bs-popover-${j}`),...N,children:[e.jsx("div",{className:"popover-arrow",...b}),p?e.jsx(Q,{children:l}):l]})}),et=Object.assign(Ye,{Header:ue,Body:Q,POPPER_OFFSET:[0,8]}),xe=m.forwardRef(({bsPrefix:t,placement:o="right",className:a,style:c,children:l,arrowProps:p,hasDoneInitialMeasure:b,popper:n,show:h,...x},N)=>{t=A(t,"tooltip");const y=re(),[w]=(o==null?void 0:o.split("-"))||[],d=me(w,y);let f=c;return h&&!b&&(f={...c,...he(n==null?void 0:n.strategy)}),e.jsxs("div",{ref:N,style:f,role:"tooltip","x-placement":w,className:L(a,t,`bs-tooltip-${d}`),...x,children:[e.jsx("div",{className:"tooltip-arrow",...p}),e.jsx("div",{className:`${t}-inner`,children:l})]})});xe.displayName="Tooltip";const J=Object.assign(xe,{TOOLTIP_OFFSET:[0,6]});function tt(t){const o=m.useRef(null),a=A(void 0,"popover"),c=A(void 0,"tooltip"),l=m.useMemo(()=>({name:"offset",options:{offset:()=>{if(t)return t;if(o.current){if(ee(o.current,a))return et.POPPER_OFFSET;if(ee(o.current,c))return J.TOOLTIP_OFFSET}return[0,0]}}}),[t,a,c]);return[o,[l]]}function nt(t,o){const{ref:a}=t,{ref:c}=o;t.ref=a.__wrapped||(a.__wrapped=l=>a(K(l))),o.ref=c.__wrapped||(c.__wrapped=l=>c(K(l)))}const ge=m.forwardRef(({children:t,transition:o=te,popperConfig:a={},rootClose:c=!1,placement:l="top",show:p=!1,...b},n)=>{const h=m.useRef({}),[x,N]=m.useState(null),[y,w]=tt(b.offset),d=V(n,y),f=o===!0?te:o||void 0,j=ie(r=>{N(r),a==null||a.onFirstUpdate==null||a.onFirstUpdate(r)});return Be(()=>{x&&b.target&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[x,b.target]),m.useEffect(()=>{p||N(null)},[p]),e.jsx(de,{...b,ref:d,popperConfig:{...a,modifiers:w.concat(a.modifiers||[]),onFirstUpdate:j},transition:f,rootClose:c,placement:l,show:p,children:(r,{arrowProps:u,popper:s,show:g})=>{var C,I;nt(r,u);const k=s==null?void 0:s.placement,S=Object.assign(h.current,{state:s==null?void 0:s.state,scheduleUpdate:s==null?void 0:s.update,placement:k,outOfBoundaries:(s==null||(C=s.state)==null||(I=C.modifiersData.hide)==null?void 0:I.isReferenceHidden)||!1,strategy:a.strategy}),E=!!x;return typeof t=="function"?t({...r,placement:k,show:g,...!o&&g&&{className:"show"},popper:S,arrowProps:u,hasDoneInitialMeasure:E}):m.cloneElement(t,{...r,placement:k,arrowProps:u,popper:S,hasDoneInitialMeasure:E,className:L(t.props.className,!o&&g&&"show"),style:{...t.props.style,...r.style}})}})});ge.displayName="Overlay";function ot(t){return t&&typeof t=="object"?t:{show:t,hide:t}}function se(t,o,a){const[c]=o,l=c.currentTarget,p=c.relatedTarget||c.nativeEvent[a];(!p||p!==l)&&!Fe(l,p)&&t(...o)}Ie.oneOf(["click","hover","focus"]);const fe=({trigger:t=["hover","focus"],overlay:o,children:a,popperConfig:c={},show:l,defaultShow:p=!1,onToggle:b,delay:n,placement:h,flip:x=h&&h.indexOf("auto")!==-1,...N})=>{const y=m.useRef(null),w=V(y,a.ref),d=Ee(),f=m.useRef(""),[j,r]=Pe(l,p,b),u=ot(n),{onFocus:s,onBlur:g,onClick:C}=typeof a!="function"?m.Children.only(a).props:{},I=F=>{w(K(F))},k=m.useCallback(()=>{if(d.clear(),f.current="show",!u.show){r(!0);return}d.set(()=>{f.current==="show"&&r(!0)},u.show)},[u.show,r,d]),S=m.useCallback(()=>{if(d.clear(),f.current="hide",!u.hide){r(!1);return}d.set(()=>{f.current==="hide"&&r(!1)},u.hide)},[u.hide,r,d]),E=m.useCallback((...F)=>{k(),s==null||s(...F)},[k,s]),M=m.useCallback((...F)=>{S(),g==null||g(...F)},[S,g]),v=m.useCallback((...F)=>{r(!j),C==null||C(...F)},[C,r,j]),D=m.useCallback((...F)=>{se(k,F,"fromElement")},[k]),ve=m.useCallback((...F)=>{se(S,F,"toElement")},[S]),q=t==null?[]:[].concat(t),R={ref:I};return q.indexOf("click")!==-1&&(R.onClick=v),q.indexOf("focus")!==-1&&(R.onFocus=E,R.onBlur=M),q.indexOf("hover")!==-1&&(R.onMouseOver=D,R.onMouseOut=ve),e.jsxs(e.Fragment,{children:[typeof a=="function"?a(R):m.cloneElement(a,R),e.jsx(ge,{...N,show:j,onHide:S,flip:x,placement:h,popperConfig:c,target:y.current,children:o})]})},at=t=>{const o=B(r=>r.login),a=W(),c=_(),l=B(r=>r.guardapolvos.guardapolvos),[p,b]=m.useState([]),[n,h]=m.useState({id:"",name:"",price:"",discountPrice:"",amount:"",size:"",description:{general:"",base:"",detalle:"",vivos:"",bolsillos:""},img:"",img2:"",img3:""});m.useEffect(()=>{h({...n,description:{...n.description,general:t.item.description?t.item.description.general:""}})},[t.item]);const x=r=>{const{name:u,value:s}=r.target;s.startsWith(" ")||h(u==="base"||u==="general"||u==="detalle"||u==="vivos"||u==="bolsillos"?{...n,description:{...n.description,[u]:s}}:{...n,[u]:s})},N=r=>{const u=r.target.files[0];if(!u)return;const s=r.target.name;s==="imageFront"?h(g=>({...g,img:u.name})):s==="imageBack"?h(g=>({...g,img2:u.name})):s==="imageSizes"&&h(g=>({...g,img3:u.name})),b(g=>[...g,u])},y=async r=>{r.preventDefault();const u=Date.now()+"-"+Math.round(Math.random()*1e9);let s="";if(/prueba[\$0-9]/.test(t.item.name)&&(s="-dev"),!De(n.price)&&n.price!==""){T.fire({title:"Ingresa un precio valido!",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}const g={id:t.item.id,table:t.item.table,amountToBuy:1,img:n.img!==""?`${$}${s}/${u}-${n.img}`:t.item.img,img2:n.img2!==""?`${$}${s}/${u}-${n.img2}`:t.item.img2,img3:n.img3!==""?`${$}${s}/${u}-${n.img3}`:t.item.img3,name:n.name!==""?n.name:t.item.name,price:n.price!==""?Number(n.price):Number(t.item.price),discountPrice:n.discountPrice!==""?n.discountPrice:t.item.discountPrice,amount:n.amount!==""?n.amount:t.item.amount,size:n.size!==""?n.size:t.item.size,description:{general:n.description.general!==""?n.description.general:t.item.description.general,base:n.description.base!==""?n.description.base:t.item.description.base,detalle:n.description.detalle!==""?n.description.detalle:t.item.description.detalle,vivos:n.description.vivos!==""?n.description.vivos:t.item.description.vivos,bolsillos:n.description.bolsillos!==""?n.description.bolsillos:t.item.description.bolsillos}},C=new FormData;C.append("blobName",u),C.append("containerName","guardapolvos");try{T.fire({title:"Estas segura que queres modificar?",icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async I=>{if(I.isConfirmed){try{const k=G(o.token);await z.update(t.item.id,g,k);const S=l.map(E=>E.id===t.item.id?g:E);c(ne(g.table,S.filter(E=>E.table===g.table))),p.length>0&&(p.forEach(E=>C.append("images",E)),await le.upload(C,k))}catch(k){if(console.log(k),k.response.status===401)T.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(S=>{if(S.isConfirmed){a("/login");return}});else{T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}}T.fire({title:`${t.item.name} modificado!`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{Z(.2),t.onHide()})}})}catch(I){console.error("Error:",I),T.fire({title:"Error",text:"No se pudo modificar el producto",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},w=()=>{T.fire({title:"Estas segura que queres eliminar el guardapolvo?",icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async r=>{if(r.isConfirmed)try{const u=G(o.token);await z.deleteGuardapolvo(t.item.id,u);const s=l.filter(g=>g.id!==t.item.id);c(ne(t.item.table,s.filter(g=>g.table===t.item.table))),T.fire({title:"Guardapolvo eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(g=>{g.isConfirmed&&t.onHide()})}catch(u){console.error("Error:",u),T.fire({title:"Error",text:"No se pudo eliminar el guardapolvo",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}),u.response.data.error==="token expired"&&a("/login")}})},d={display:"flex",justifyContent:"space-around",gap:"5px"},f={width:"50%"},j=r=>e.jsx(J,{id:"button-tooltip",...r,children:"Una vez agregado un descuento, el precio actual se mantiene (aparece tachado), pero el precio que se muestra a los clientes es el del descuento. Para sacar el descuento aplicado, hay que darle un nuevo valor de 0"});return e.jsxs(P,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(P.Header,{closeButton:!0,children:e.jsxs(P.Title,{id:"contained-modal-title-vcenter",children:["Modificar ",t.item.name]})}),e.jsx(P.Body,{children:e.jsxs(i,{onSubmit:y,encType:"multipart/form-data",children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput1",children:[e.jsxs(i.Label,{children:[e.jsx("strong",{children:"Nombre actual:"})," ",t.item.name]}),e.jsx(i.Control,{type:"text",name:"name",placeholder:"nuevo nombre",value:n.name,onChange:x})]}),e.jsxs("div",{style:d,children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",style:{width:"50%"},children:[e.jsxs(i.Label,{children:[e.jsx("strong",{children:"Precio actual:"})," $ ",t.item.price]}),e.jsx(i.Control,{type:"text",name:"price",placeholder:"nuevo precio",value:n.price,onChange:x})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput3",style:{width:"50%"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(i.Label,{children:[e.jsx("strong",{children:"Descuento actual:"})," $ ",t.item.discountPrice||t.item.discountPrice>0?t.item.discountPrice:"0"]}),e.jsx(fe,{placement:"right",delay:{show:250,hide:400},overlay:j,children:e.jsx("div",{children:e.jsx("i",{className:"bi bi-info-circle",style:{marginRight:"auto",width:"100%"}})})})]}),e.jsx(i.Control,{type:"text",name:"discountPrice",placeholder:"nuevo descuento",value:n.discountPrice,onChange:x})]})]}),t.table==="stock"?e.jsx(ce,{amount:t.item.amount,size:t.item.size,formData:n,handleInputChange:x}):null,e.jsxs(i.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Descripcion actual:"})}),e.jsxs("div",{style:d,children:[e.jsxs("div",{style:f,children:[e.jsx("strong",{children:"Base:"})," ",t.item.description!==void 0?t.item.description.base:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nueva base",name:"base",onChange:x,value:n.description.base})]}),e.jsxs("div",{style:f,children:[e.jsx("strong",{children:"Detalle:"})," ",t.item.description!==void 0?t.item.description.detalle:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo detalle",name:"detalle",onChange:x,value:n.description.detalle})]})]}),e.jsxs("div",{style:d,children:[e.jsxs("div",{style:f,children:[e.jsx("strong",{children:"Vivos:"})," ",t.item.description?t.item.description.vivos:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo vivo",name:"vivos",onChange:x,value:n.description.vivos})]}),e.jsxs("div",{style:f,children:[e.jsx("strong",{children:"Bolsillos:"})," ",t.item.description?t.item.description.bolsillos:null,e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo bolsillos",name:"bolsillos",onChange:x,value:n.description.bolsillos})]})]}),e.jsx(i.Control,{as:"textarea",placeholder:"nueva descripcion",name:"general",onChange:x,value:n.description.general,rows:4})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Frente"})}),e.jsx(i.Control,{type:"file",name:"imageFront",onChange:N})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Dorso"})}),e.jsx(i.Control,{type:"file",name:"imageBack",onChange:N})]}),t.table==="stock"?e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Talles"})}),e.jsx(i.Control,{type:"file",name:"imageSizes",onChange:N})]}):null]})}),e.jsxs(P.Footer,{children:[e.jsx(O,{variant:"danger",onClick:w,style:{marginRight:"auto"},children:"Eliminar guardapolvo"}),e.jsx(O,{variant:"secondary",onClick:t.onHide,children:"Cerrar"}),e.jsx(O,{variant:"dark",onClick:y,children:"Guardar Cambios"})]})]})},st=t=>{B(w=>w.guardapolvos.guardapolvos),_();const o=W(),a=B(w=>w.login),[c,l]=m.useState({display:"none",text:""}),[p,b]=m.useState([]),[n,h]=m.useState({name:"",price:"",description:{general:"",base:"",detalle:"",vivos:"",bolsillos:""},amount:"",amountToBuy:1,size:"",table:t.table,img:"",img2:"",img3:"",imgs:[]}),x=w=>{const{name:d,value:f}=w.target;h(d==="base"||d==="general"||d==="detalle"||d==="vivos"||d==="bolsillos"?{...n,description:{...n.description,[d]:f}}:{...n,[d]:f})},N=w=>{const d=w.target.files[0];if(!d)return;const f=w.target.name;f==="imageFront"?h(j=>({...j,img:d.name})):f==="imageBack"?h(j=>({...j,img2:d.name})):f==="imageSizes"&&h(j=>({...j,img3:d.name})),b(j=>[...j,d]),h(j=>({...j,imgs:[...n.imgs,d.name]}))},y=async w=>{w.preventDefault();const d=Date.now()+"-"+Math.round(Math.random()*1e9);if(n.name===""){l({display:"block",text:"Ingresar nombre"});return}else if(n.price===""){l({display:"block",text:"Ingresar precio"});return}else if(n.description.general===""){l({display:"block",text:"Ingresar descripcion"});return}else if(n.img===""){l({display:"block",text:"Ingresar imagen frente"});return}else if(n.img2===""){l({display:"block",text:"Ingresar dorso"});return}if(t.table==="stock"){if(n.amount===""){l({display:"block",text:"Ingresar cantidad"});return}else if(n.size===""){l({display:"block",text:"Ingresar talle"});return}}l({display:"none",text:""});let f="";/prueba[\$0-9]/.test(n.name)&&(f="-dev");const j=n;j.img=`${$}${f}/${d}-${n.img}`,j.img2=`${$}${f}/${d}-${n.img2}`,j.img3=n.img3!==""?`${$}${f}/${d}-${n.img3}`:void 0,j.table=t.table,j.discountPrice=void 0;const r=new FormData;r.append("blobName",d),r.append("containerName","guardapolvos");try{T.fire({title:`Estas segura que queres agregar ${n.name}?`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async u=>{if(u.isConfirmed){try{const s=G(a.token);await z.create(n,s),p.forEach(g=>{r.append("images",g)}),await le.upload(r,s)}catch(s){if(console.error(s),s.response.status===401)T.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(g=>{g.isConfirmed&&o("/login")});else{T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}}T.fire({title:`${n.name} agregado!`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{Z(.5),t.onHide()})}})}catch(u){console.error("Error:",u)}};return e.jsxs(P,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(P.Header,{closeButton:!0,children:e.jsx(P.Title,{id:"contained-modal-title-vcenter",children:"Agregar nuevo guardapolvo"})}),e.jsx(Ze,{variant:"danger",style:{display:`${c.display}`},children:c.text},"danger"),e.jsx(P.Body,{children:e.jsxs(i,{onSubmit:y,encType:"multipart/form-data",children:[e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput1",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Nombre"})}),e.jsx(i.Control,{type:"text",name:"name",placeholder:"nuevo nombre",value:n.name,onChange:x})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"controlInput2",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Precio"})}),e.jsx(i.Control,{type:"text",name:"price",placeholder:"nuevo precio",value:n.price,onChange:x})]}),t.table==="stock"?e.jsx(ce,{amount:"",size:"",formData:n,handleInputChange:x}):null,e.jsxs(i.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Descripcion"})}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nueva base",name:"base",onChange:x,value:n.description.base}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo detalle",name:"detalle",onChange:x,value:n.description.detalle}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo vivo",name:"vivos",onChange:x,value:n.description.vivos}),e.jsx(i.Control,{style:{marginBottom:"5px"},type:"text",placeholder:"nuevo bolsillos",name:"bolsillos",onChange:x,value:n.description.bolsillos}),e.jsx(i.Control,{as:"textarea",placeholder:"nueva descripcion general",name:"general",onChange:x,value:n.description.general,rows:3})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Frente"})}),e.jsx(i.Control,{type:"file",name:"imageFront",onChange:N})]}),e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Dorso"})}),e.jsx(i.Control,{type:"file",name:"imageBack",onChange:N})]}),t.table==="stock"?e.jsxs(i.Group,{className:"mb-3",controlId:"formFile",children:[e.jsx(i.Label,{children:e.jsx("strong",{children:"Imagen Talles"})}),e.jsx(i.Control,{type:"file",name:"imageSizes",onChange:N})]}):null]})}),e.jsxs(P.Footer,{children:[e.jsx(O,{variant:"secondary",onClick:t.onHide,children:"Cerrar"}),e.jsx(O,{variant:"dark",onClick:y,children:"Guardar Cambios"})]})]})};function it(t){let o;return $e(t,a=>{o==null&&(o=a.props.eventKey)}),o}function rt(t){const{title:o,eventKey:a,disabled:c,tabClassName:l,tabAttrs:p,id:b}=t.props;return o==null?null:e.jsx(Ae,{as:"li",role:"presentation",children:e.jsx(Me,{as:"button",type:"button",eventKey:a,disabled:c,id:b,className:l,...p,children:o})})}const pe=t=>{const{id:o,onSelect:a,transition:c,mountOnEnter:l=!1,unmountOnExit:p=!1,variant:b="tabs",children:n,activeKey:h=it(n),...x}=Re(t,{activeKey:"onSelect"});return e.jsxs(Ue,{id:o,activeKey:h,onSelect:a,transition:Ke(c),mountOnEnter:l,unmountOnExit:p,children:[e.jsx(Oe,{id:o,...x,role:"tablist",as:"ul",variant:b,children:oe(n,rt)}),e.jsx(Ve,{children:oe(n,N=>{const y={...N.props};return delete y.title,delete y.disabled,delete y.tabClassName,delete y.tabAttrs,e.jsx(We,{...y})})})]})};pe.displayName="Tabs";const U=({title:t,table:o,guardapolvosList:a,showCreateModal:c,showEditModal:l})=>{const p=B(v=>v.guardapolvos.nivelInicial),b=B(v=>v.guardapolvos.primaria),n=B(v=>v.guardapolvos.stock),[h,x]=m.useState(!1),[N,y]=m.useState(a);m.useEffect(()=>{o==="primaria"?y(b):o==="stock"?y(n):o==="nivel_inicial"&&y(p)},[a]);const w=B(v=>v.filter.search.toLowerCase()),d=_(),[f,j]=m.useState(1),r=6,u=N.length,s=Math.ceil(u/r),g=v=>{j(v)},C=()=>{const v=(f-1)*r,D=v+r;return N.slice(v,D)},I=()=>{if(x(!0),w!==""){j(1);const v=a.filter(D=>_e(w,D));y(v)}else k();setTimeout(()=>{x(!1)},1e3)},k=()=>{d(qe("")),y(a)},S=v=>{T.fire({imageUrl:v,showConfirmButton:!1})},E={margin:"0px",fontSize:"16px",background:"inherit",border:"none"},M={marginRight:"5px",cursor:"pointer",fontSize:"13px",display:"flex",alignItems:"center",backgroundColor:"#f3f3f3",padding:"4px",borderRadius:"6px"};return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex w-100",children:[e.jsx("h4",{className:"label-titulos",children:t}),e.jsxs("div",{style:{marginLeft:"auto",display:"flex"},children:[N.length!==a.length?e.jsx("div",{onClick:()=>k(),style:M,children:"reiniciar"}):null,e.jsx("div",{children:e.jsx(Le,{displaySearch:I,filtrateSearch:null})}),e.jsx("button",{onClick:()=>c(o),style:E,children:e.jsx(ze,{width:"20",height:"20"})})]})]}),h?e.jsx(Ge,{}):e.jsxs("div",{className:"tabla-container",children:[e.jsxs("table",{className:"tabla-de-productoss",children:[e.jsx("thead",{children:o==="stock"?e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Frente"}),e.jsx("th",{children:"Dorso"}),e.jsx("th",{style:{width:"50px"},children:"Descuento"}),e.jsx("th",{})]}):e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Frente"}),e.jsx("th",{children:"Dorso"}),e.jsx("th",{style:{width:"50px"},children:"Descuento"}),e.jsx("th",{children:"Editar"})]})}),C().map((v,D)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:v.name}),e.jsxs("td",{children:["$ ",ae(v)?v.discountPrice:v.price]}),o==="stock"?e.jsx("td",{children:v.amount}):"",o==="stock"?e.jsx("td",{children:v.size}):"",e.jsx("td",{children:e.jsx("img",{src:v.img,onClick:()=>S(v.img),alt:v.description.general,className:"small-img-admin",style:{cursor:"pointer"}})}),e.jsx("td",{children:e.jsx("img",{src:v.img2,onClick:()=>S(v.img2),alt:v.description.general,className:"small-img-admin",style:{cursor:"pointer"}})}),e.jsx("td",{children:ae(v)?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>l(v,o),style:{cursor:"pointer"},children:e.jsx("i",{className:"bi bi-pencil-square"})})]})},D))]}),e.jsx(Qe,{currentPage:f,totalPages:s,onPageChange:g})]})]})},lt=({show:t,onHide:o})=>{const a=B(s=>s.guardapolvos.nivelInicial),c=B(s=>s.guardapolvos.primaria),l=B(s=>s.guardapolvos.stock),p=B(s=>s.guardapolvos.guardapolvos),b=B(s=>s.login),n=W(),[h,x]=m.useState("guardapolvos"),[N,y]=m.useState(0),[w,d]=m.useState(p);m.useEffect(()=>{h==="nivel_inicial"&&d(a),h==="primaria"&&d(c),h==="stock"&&d(l),h==="guardapolvos"&&d(p)},[h]);const f=s=>{x(s.target.value)},j=s=>{const g=s.target.value/100;y(g)},r=async(s,g)=>{try{const C=G(b.token);T.fire({title:`Estas segura que queres modificar en un ${s*100}% el precio de los guardapolvos?`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async I=>{if(I.isConfirmed)try{if((await z.changePriceByPorcentage({porcent:s,guardapolvos:g},C)).ok){Z(.4);return}else throw new Error("Error al intentar modificar el precio.")}catch(k){if(console.log(k),k.response.status===401)T.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(S=>{if(S.isConfirmed){n("/login");return}});else{T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"});return}}})}catch(C){console.error(C),T.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},u=s=>e.jsx(J,{id:"button-tooltip",...s,children:"Si queremos bajar el precio, lo unico que hay que hacer es poner el numero en negativo. Ejemplo: Queremos bajar un 10%, ponemos -10%."});return e.jsxs(P,{show:t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(P.Header,{closeButton:!0,children:e.jsx(P.Title,{id:"contained-modal-title-vcenter",children:"Administrar todos los productos"})}),e.jsxs(P.Body,{children:[e.jsxs("div",{className:"d-flex",style:{fontSize:"16px",height:"40px",alignItems:"center"},children:[e.jsx("p",{style:{margin:"0px"},children:"Cambiar el precio a: "}),e.jsxs("select",{name:"",onChange:f,style:{marginLeft:"5px",border:"none",cursor:"pointer",outline:"none",boxShadow:"none"},children:[e.jsx("option",{value:"guardapolvos",children:"Todos"}),e.jsx("option",{value:"nivel_inicial",children:"Nivel Inicial"}),e.jsx("option",{value:"primaria",children:"Primaria"}),e.jsx("option",{value:"stock",children:"Stock"})]})]}),e.jsxs("div",{className:"d-flex",style:{fontSize:"16px",height:"40px",alignItems:"center"},children:[e.jsx("p",{style:{margin:"0px"},children:"En un: "}),e.jsx("input",{type:"text",onChange:j,style:{width:"40px",outline:"none",boxShadow:"none",border:"1px solid #e2e2e2",marginLeft:"4px"}}),e.jsx("p",{style:{margin:"0px",marginRight:"20px"},children:"%"}),e.jsx(fe,{placement:"right",delay:{show:250,hide:400},overlay:u,children:e.jsx("div",{children:e.jsx("i",{className:"bi bi-info-circle",style:{marginRight:"auto",width:"100%"}})})})]})]}),e.jsxs(P.Footer,{children:[e.jsx(O,{variant:"secondary",onClick:o,children:"Cerrar"}),e.jsx(O,{className:"btn btn-dark",onClick:()=>r(N,w),children:"Aplicar cambios"})]})]})},gt=()=>{const t=B(C=>C.guardapolvos.nivelInicial),o=B(C=>C.guardapolvos.primaria),a=B(C=>C.guardapolvos.stock),c=B(C=>C.administration.tabChoosen),l=_(),[p,b]=m.useState(!1),[n,h]=m.useState(!1),[x,N]=m.useState(!1),[y,w]=m.useState(""),[d,f]=m.useState({}),j=(C,I)=>{h(!0),w(I),f(C)},r=C=>{w(C),b(!0)},u=()=>{N(!0)},s=C=>{l(He(C))},g={width:"100%"};return e.jsx("div",{children:e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("div",{className:"d-flex w-100 mb-5",onClick:()=>u(),children:e.jsxs("div",{className:"card",style:{cursor:"pointer"},children:[e.jsx("div",{className:"card-body",children:"Administrar todos los productos"}),e.jsxs("div",{className:"card-footer d-flex align-items-center justify-content-between",children:[e.jsx("div",{className:"small text-black stretched-link",children:"Ver detalles"}),e.jsx("div",{className:"small text-black",children:e.jsx("i",{className:"fas fa-angle-right"})})]})]})}),e.jsx("div",{style:{width:"100%",backgroundColor:"#fff",padding:"10px"},className:"tabs-container",children:e.jsxs(pe,{defaultActiveKey:c,id:"uncontrolled-tab-example",className:"mb-3",fill:!0,onSelect:s,children:[e.jsx(H,{eventKey:"nivel_inicial",title:"Nivel Inicial",style:g,children:e.jsx(U,{title:"NIVEL INICIAL",table:"nivel_inicial",guardapolvosList:t,showCreateModal:r,showEditModal:j})}),e.jsx(H,{eventKey:"primaria",title:"Primaria",style:g,children:e.jsx(U,{title:"PRIMARIA",table:"primaria",guardapolvosList:o,showCreateModal:r,showEditModal:j})}),e.jsx(H,{eventKey:"stock",title:"Stock",style:g,children:e.jsx(U,{title:"STOCK",table:"stock",guardapolvosList:a,showCreateModal:r,showEditModal:j})})]})}),e.jsx(at,{item:d,show:n,table:y,onHide:()=>h(!1)}),e.jsx(st,{show:p,table:y,onHide:()=>b(!1)}),e.jsx(lt,{show:x,onHide:()=>N(!1)})]})})})};export{gt as default};
