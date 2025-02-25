import{r as u,j as e,q as S,u as A,a as D,o as E,b as H}from"./index-B7gCKMKK.js";import{p as y}from"./purchasedProduct-B-E8monV.js";import{B as M}from"./Button-CozBTO4j.js";import{M as C}from"./Modal-DmH4B-LT.js";import{A as x}from"./Accordion-CQpCO-Dl.js";import{u as F,c as q}from"./Anchor-3CuPqyzV.js";/* empty css                       */import{f as T}from"./functions-BSpfDl0n.js";import{S as p}from"./sweetalert2.all-D3FCHpe_.js";import{s as R}from"./token-By_1sbaR.js";import{P as z}from"./PaginationProductos-DiT0BFGt.js";import{F as w}from"./Form-dJ28kd3d.js";import{c as K}from"./icons-8_5Uv09s.js";import"./TransitionWrapper-5ppP3hMQ.js";import"./useWillUnmount-DDVl-taq.js";import"./BootstrapModalManager-BLapAtUg.js";import"./useMounted-CA1dmZjP.js";import"./NoopTransition-DVFl9h6R.js";import"./divWithClassName-C082gbAY.js";import"./Fade-ByOLnFsp.js";import"./DataKey-COGXBUcQ.js";import"./Collapse-yx2Ydu3f.js";import"./ElementChildren-Du0aGwS8.js";const $=u.forwardRef(({bsPrefix:r,className:m,striped:l,bordered:t,borderless:i,hover:d,size:n,variant:a,responsive:h,...f},c)=>{const s=F(r,"table"),N=q(m,s,a&&`${s}-${a}`,n&&`${s}-${n}`,l&&`${s}-${typeof l=="string"?`striped-${l}`:"striped"}`,t&&`${s}-bordered`,i&&`${s}-borderless`,d&&`${s}-hover`),b=e.jsx("table",{...f,className:N,ref:c});if(h){let g=`${s}-responsive`;return typeof h=="string"&&(g=`${g}-${h}`),e.jsx("div",{className:g,children:b})}return b}),W=r=>{const[m,l]=u.useState([]),[t,i]=u.useState({fullName:r.item.clientData.fullName,email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""});u.useEffect(()=>{r.show&&(i(r.item.clientData),l(r.item.cartPurchased))},[r.show]);const d=async n=>{try{await y.update(r.item.id,{saleConfirmed:n}),p.fire({title:"Modificado correctamente!",text:`Modificaste el estado de: ${r.item.operationCode}`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(a=>{a.isConfirmed&&S(.5)})}catch(a){console.log(a),p.fire({title:"No se pduo modificar",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}};return e.jsxs(C,{...r,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(C.Header,{closeButton:!0,children:e.jsxs(C.Title,{id:"contained-modal-title-vcenter",children:["Detalle de operacion: ",r.item.operationCode]})}),e.jsxs(C.Body,{children:[e.jsxs(x,{children:[e.jsxs(x.Item,{eventKey:"0",children:[e.jsx(x.Header,{children:"Informacion del cliente"}),e.jsxs(x.Body,{children:[e.jsxs("div",{children:["Nombre: ",t.fullName]}),e.jsxs("div",{children:["Mail: ",t.email]}),e.jsxs("div",{children:["DNI: ",t.dni]}),e.jsxs("div",{children:["Telefono: ",t.phone]}),e.jsxs("div",{children:["Provincia: ",t.province]}),e.jsxs("div",{children:["Ciudad: ",t.city]}),e.jsxs("div",{children:["Direccion: ",t.address]}),e.jsxs("div",{children:["Codigo Postal: ",t.zipCode]}),e.jsxs("div",{children:["Metodo de pago: ",t.paymentMethod]}),e.jsxs("div",{children:["Metodo de envio: ",t.shipMethod]}),e.jsxs("div",{children:["Sucursal: ",t.sucursal!==""?t.sucursal:"ninguna"]})]})]}),e.jsxs(x.Item,{eventKey:"1",children:[e.jsx(x.Header,{children:"Informacion productos comprados"}),e.jsx(x.Body,{children:e.jsxs($,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"IMG"})]})}),m.map((n,a)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:a+1}),e.jsx("td",{children:n.name}),e.jsxs("td",{children:["$ ",n.price]}),e.jsx("td",{children:n.size}),e.jsx("td",{children:n.amountToBuy}),e.jsx("td",{children:e.jsx("img",{src:n.img,alt:"",className:"small-img-admin"})})]})},a))]})})]}),e.jsxs(x.Item,{eventKey:"2",children:[e.jsx(x.Header,{children:"Estado comprobante"}),e.jsxs(x.Body,{children:[e.jsxs("div",{style:{padding:"10px"},children:["Estado actual:",r.item.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green",marginLeft:"10px"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red",marginLeft:"10px"}})]}),e.jsx("button",{className:"btn btn-success",onClick:()=>d(!0),style:{marginRight:"10px"},children:"Confirmar que se subio el comprobante"}),e.jsx("button",{className:"btn btn-danger",onClick:()=>d(!1),children:"Indicar que no se subio el comprobante"})]})]})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," $",T(r.item.totalPricePurchased||0)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fecha:"})," ",r.item.time]})]})]}),e.jsx(C.Footer,{children:e.jsx(M,{variant:"secondary",onClick:r.onHide,children:"Cerrar"})})]})};var G=J;function J(r,m,l){var t=null,i=null,d=function(){t&&(clearTimeout(t),i=null,t=null)},n=function(){var h=i;d(),h&&h()},a=function(){if(!m)return r.apply(this,arguments);var h=this,f=arguments,c=l&&!t;if(d(),i=function(){r.apply(h,f)},t=setTimeout(function(){if(t=null,!c){var s=i;return i=null,s()}},m),c)return i()};return a.cancel=d,a.flush=n,a}const O=({purchasedProducts:r,setPurchasedProducts:m,everyProductsRef:l,onPageChange:t})=>{const i=A();D(c=>c.filter.search.toLowerCase());const[d,n]=u.useState(""),a=u.useCallback(G(c=>{c!==""?(m(l.filter(s=>s.operationCode.toLowerCase().includes(c.toLowerCase())||s.clientData.fullName.toLowerCase().includes(c.toLowerCase())||s.time.toLowerCase().includes(c.toLowerCase()))),t(1)):f()},400),[]),h=c=>{const s=c.target.value;s.startsWith(" ")||(n(s),i(E(s)),a(s))},f=async()=>{m(await y.getAll())};return e.jsxs(w,{className:"d-flex",fixed:"right",style:{marginLeft:"auto",flexDirection:"column"},children:[e.jsxs("div",{className:"d-flex",style:{},children:[e.jsx(w.Control,{type:"search",placeholder:"buscar por codigo, cliente, fecha...",className:"me-2","aria-label":"Search",onChange:h,value:d}),e.jsx(M,{onClick:()=>f(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(K,{width:"18px",height:"18px"})})]}),e.jsxs("label",{style:{fontSize:"14px",padding:"3px"},children:[r==null?void 0:r.length," resultados de ",l.length]})]})},je=()=>{var B;const r=D(o=>o.login),m=H(),[l,t]=u.useState([]),i=u.useRef([]),[d,n]=u.useState(!1),[a,h]=u.useState({clientData:{fullName:"",email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""}}),[f,c]=u.useState(1),s=7,N=l.length,b=Math.ceil(N/s);u.useEffect(()=>{(async()=>{const j=await y.getAll();t(j),i.current=j})()},[]);const g=o=>{n(!0),h(o)},P=o=>{c(o)},k=()=>{const o=(f-1)*s,j=o+s;return l.slice(o,j)},I=o=>{p.fire({title:"Estas segura que queres eliminar el registro?",text:`codigo de operacion: ${o.operationCode}`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async j=>{if(j.isConfirmed)try{const v=R(r.token);await y.deletePurchase(o.id,v),p.fire({title:"Eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{S(.5)})}catch(v){console.error("Error",v),v.response.data.error==="token expired"?p.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(L=>{L.isConfirmed&&m("/login")}):(console.log(v),p.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}))}})};return e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("h3",{children:"Historial de ventas"}),e.jsxs("div",{className:"filters-table-container",children:[e.jsx(O,{purchasedProducts:l,setPurchasedProducts:t,everyProductsRef:i.current,onPageChange:P}),e.jsx("div",{className:"contenedor-tabla",children:e.jsxs($,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Codigo de operacion"}),e.jsx("th",{children:"Cliente"}),e.jsx("th",{children:"Total Compra"}),e.jsx("th",{children:"Fecha de compra"}),e.jsx("th",{children:"Comprobante"}),e.jsx("th",{children:"*"}),e.jsx("th",{children:"*"})]})}),(B=k())==null?void 0:B.map((o,j)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:j+1}),e.jsx("td",{children:o.operationCode}),e.jsx("td",{children:o.clientData.fullName}),e.jsxs("td",{children:["$ ",T(o.totalPricePurchased)]}),e.jsx("td",{children:o.time}),e.jsx("td",{children:o.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>g(o),style:{cursor:"pointer",textDecoration:"underline"},children:"ver detalle"}),e.jsx("td",{children:e.jsx("button",{onClick:()=>I(o),className:"boton-eliminar",style:{backgroundColor:"transparent"},children:e.jsx("i",{className:"fas fa-trash-alt"})})})]})},j))]})}),e.jsx(z,{currentPage:f,totalPages:b,onPageChange:P})]}),e.jsx(W,{item:a,show:d,onHide:()=>n(!1)})]})})};export{je as default};
