import{r as u,q as E,w as H,j as e,H as m,J as S,B as D,S as p,c as M,u as A,d as T,F as B,K as F,o as q,b as R}from"./index-BayNPa4S.js";import{p as y}from"./purchasedProduct-CbfxveyE.js";import{M as C}from"./Modal-CxFuC2CA.js";/* empty css                       */import{s as z}from"./token-By_1sbaR.js";import{P as K}from"./PaginationProductos-BmBpiiLB.js";const $=u.forwardRef(({bsPrefix:s,className:x,striped:l,bordered:t,borderless:i,hover:d,size:a,variant:o,responsive:h,...f},c)=>{const r=E(s,"table"),N=H(x,r,o&&`${r}-${o}`,a&&`${r}-${a}`,l&&`${r}-${typeof l=="string"?`striped-${l}`:"striped"}`,t&&`${r}-bordered`,i&&`${r}-borderless`,d&&`${r}-hover`),b=e.jsx("table",{...f,className:N,ref:c});if(h){let g=`${r}-responsive`;return typeof h=="string"&&(g=`${g}-${h}`),e.jsx("div",{className:g,children:b})}return b}),W=s=>{const[x,l]=u.useState([]),[t,i]=u.useState({fullName:s.item.clientData.fullName,email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""});u.useEffect(()=>{s.show&&(i(s.item.clientData),l(s.item.cartPurchased))},[s.show]);const d=async a=>{try{await y.update(s.item.id,{saleConfirmed:a}),p.fire({title:"Modificado correctamente!",text:`Modificaste el estado de: ${s.item.operationCode}`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(o=>{o.isConfirmed&&M(.5)})}catch(o){console.log(o),p.fire({title:"No se pduo modificar",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}};return e.jsxs(C,{...s,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(C.Header,{closeButton:!0,children:e.jsxs(C.Title,{id:"contained-modal-title-vcenter",children:["Detalle de operacion: ",s.item.operationCode]})}),e.jsxs(C.Body,{children:[e.jsxs(m,{children:[e.jsxs(m.Item,{eventKey:"0",children:[e.jsx(m.Header,{children:"Informacion del cliente"}),e.jsxs(m.Body,{children:[e.jsxs("div",{children:["Nombre: ",t.fullName]}),e.jsxs("div",{children:["Mail: ",t.email]}),e.jsxs("div",{children:["DNI: ",t.dni]}),e.jsxs("div",{children:["Telefono: ",t.phone]}),e.jsxs("div",{children:["Provincia: ",t.province]}),e.jsxs("div",{children:["Ciudad: ",t.city]}),e.jsxs("div",{children:["Direccion: ",t.address]}),e.jsxs("div",{children:["Codigo Postal: ",t.zipCode]}),e.jsxs("div",{children:["Metodo de pago: ",t.paymentMethod]}),e.jsxs("div",{children:["Metodo de envio: ",t.shipMethod]}),e.jsxs("div",{children:["Sucursal: ",t.sucursal!==""?t.sucursal:"ninguna"]})]})]}),e.jsxs(m.Item,{eventKey:"1",children:[e.jsx(m.Header,{children:"Informacion productos comprados"}),e.jsx(m.Body,{children:e.jsxs($,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"IMG"})]})}),x.map((a,o)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:o+1}),e.jsx("td",{children:a.name}),e.jsxs("td",{children:["$ ",a.price]}),e.jsx("td",{children:a.size}),e.jsx("td",{children:a.amountToBuy}),e.jsx("td",{children:e.jsx("img",{src:a.img,alt:"",className:"small-img-admin"})})]})},o))]})})]}),e.jsxs(m.Item,{eventKey:"2",children:[e.jsx(m.Header,{children:"Estado comprobante"}),e.jsxs(m.Body,{children:[e.jsxs("div",{style:{padding:"10px"},children:["Estado actual:",s.item.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green",marginLeft:"10px"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red",marginLeft:"10px"}})]}),e.jsx("button",{className:"btn btn-success",onClick:()=>d(!0),style:{marginRight:"10px"},children:"Confirmar que se subio el comprobante"}),e.jsx("button",{className:"btn btn-danger",onClick:()=>d(!1),children:"Indicar que no se subio el comprobante"})]})]})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," $",S(s.item.totalPricePurchased||0)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fecha:"})," ",s.item.time]})]})]}),e.jsx(C.Footer,{children:e.jsx(D,{variant:"secondary",onClick:s.onHide,children:"Cerrar"})})]})};var G=J;function J(s,x,l){var t=null,i=null,d=function(){t&&(clearTimeout(t),i=null,t=null)},a=function(){var h=i;d(),h&&h()},o=function(){if(!x)return s.apply(this,arguments);var h=this,f=arguments,c=l&&!t;if(d(),i=function(){s.apply(h,f)},t=setTimeout(function(){if(t=null,!c){var r=i;return i=null,r()}},x),c)return i()};return o.cancel=d,o.flush=a,o}const O=({purchasedProducts:s,setPurchasedProducts:x,everyProductsRef:l,onPageChange:t})=>{const i=A();T(c=>c.filter.search.toLowerCase());const[d,a]=u.useState(""),o=u.useCallback(G(c=>{c!==""?(x(l.filter(r=>r.operationCode.toLowerCase().includes(c.toLowerCase())||r.clientData.fullName.toLowerCase().includes(c.toLowerCase())||r.time.toLowerCase().includes(c.toLowerCase()))),t(1)):f()},400),[]),h=c=>{const r=c.target.value;r.startsWith(" ")||(a(r),i(q(r)),o(r))},f=async()=>{x(await y.getAll())};return e.jsxs(B,{className:"d-flex",fixed:"right",style:{marginLeft:"auto",flexDirection:"column"},children:[e.jsxs("div",{className:"d-flex",style:{},children:[e.jsx(B.Control,{type:"search",placeholder:"buscar por codigo, cliente, fecha...",className:"me-2","aria-label":"Search",onChange:h,value:d}),e.jsx(D,{onClick:()=>f(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(F,{width:"18px",height:"18px"})})]}),e.jsxs("label",{style:{fontSize:"14px",padding:"3px"},children:[s==null?void 0:s.length," resultados de ",l.length]})]})},_=()=>{var w;const s=T(n=>n.login),x=R(),[l,t]=u.useState([]),i=u.useRef([]),[d,a]=u.useState(!1),[o,h]=u.useState({clientData:{fullName:"",email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""}}),[f,c]=u.useState(1),r=7,N=l.length,b=Math.ceil(N/r);u.useEffect(()=>{(async()=>{const j=await y.getAll();t(j),i.current=j})()},[]);const g=n=>{a(!0),h(n)},P=n=>{c(n)},k=()=>{const n=(f-1)*r,j=n+r;return l.slice(n,j)},I=n=>{p.fire({title:"Estas segura que queres eliminar el registro?",text:`codigo de operacion: ${n.operationCode}`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async j=>{if(j.isConfirmed)try{const v=z(s.token);await y.deletePurchase(n.id,v),p.fire({title:"Eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{M(.5)})}catch(v){console.error("Error",v),v.response.data.error==="token expired"?p.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(L=>{L.isConfirmed&&x("/login")}):(console.log(v),p.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}))}})};return e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("h3",{children:"Historial de ventas"}),e.jsxs("div",{className:"filters-table-container",children:[e.jsx(O,{purchasedProducts:l,setPurchasedProducts:t,everyProductsRef:i.current,onPageChange:P}),e.jsx("div",{className:"contenedor-tabla",children:e.jsxs($,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Codigo de operacion"}),e.jsx("th",{children:"Cliente"}),e.jsx("th",{children:"Total Compra"}),e.jsx("th",{children:"Fecha de compra"}),e.jsx("th",{children:"Comprobante"}),e.jsx("th",{children:"*"}),e.jsx("th",{children:"*"})]})}),(w=k())==null?void 0:w.map((n,j)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:j+1}),e.jsx("td",{children:n.operationCode}),e.jsx("td",{children:n.clientData.fullName}),e.jsxs("td",{children:["$ ",S(n.totalPricePurchased)]}),e.jsx("td",{children:n.time}),e.jsx("td",{children:n.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>g(n),style:{cursor:"pointer",textDecoration:"underline"},children:"ver detalle"}),e.jsx("td",{children:e.jsx("button",{onClick:()=>I(n),className:"boton-eliminar",style:{backgroundColor:"transparent"},children:e.jsx("i",{className:"fas fa-trash-alt"})})})]})},j))]})}),e.jsx(K,{currentPage:f,totalPages:b,onPageChange:P})]}),e.jsx(W,{item:o,show:d,onHide:()=>a(!1)})]})})};export{_ as default};
