import{r as l,q as p,j as e,aa as G,t as v,K as J,ab as k,E as D,S as C,J as E,u as U,D as H,F as $,ac as Z,Z as _,b as Q}from"./index-DyK0FN_h.js";import{p as A}from"./purchasedProduct-D25xSHXx.js";import{M as b}from"./Modal-DRh7UD4K.js";/* empty css                       */import{s as X}from"./token-By_1sbaR.js";import{P as Y}from"./PaginationProductos-DguuC4dK.js";function R(t,r){return Array.isArray(t)?t.includes(r):t===r}const N=l.createContext({});N.displayName="AccordionContext";const S=l.forwardRef(({as:t="div",bsPrefix:r,className:a,children:s,eventKey:i,...d},c)=>{const{activeEventKey:n}=l.useContext(N);return r=p(r,"accordion-collapse"),e.jsx(G,{ref:c,in:R(n,i),...d,className:v(a,r),children:e.jsx(t,{children:l.Children.only(s)})})});S.displayName="AccordionCollapse";const B=l.createContext({eventKey:""});B.displayName="AccordionItemContext";const L=l.forwardRef(({as:t="div",bsPrefix:r,className:a,onEnter:s,onEntering:i,onEntered:d,onExit:c,onExiting:n,onExited:o,...m},h)=>{r=p(r,"accordion-body");const{eventKey:u}=l.useContext(B);return e.jsx(S,{eventKey:u,onEnter:s,onEntering:i,onEntered:d,onExit:c,onExiting:n,onExited:o,children:e.jsx(t,{ref:h,...m,className:v(a,r)})})});L.displayName="AccordionBody";function ee(t,r){const{activeEventKey:a,onSelect:s,alwaysOpen:i}=l.useContext(N);return d=>{let c=t===a?null:t;i&&(Array.isArray(a)?a.includes(t)?c=a.filter(n=>n!==t):c=[...a,t]:c=[t]),s==null||s(c,d),r==null||r(d)}}const I=l.forwardRef(({as:t="button",bsPrefix:r,className:a,onClick:s,...i},d)=>{r=p(r,"accordion-button");const{eventKey:c}=l.useContext(B),n=ee(c,s),{activeEventKey:o}=l.useContext(N);return t==="button"&&(i.type="button"),e.jsx(t,{ref:d,onClick:n,...i,"aria-expanded":Array.isArray(o)?o.includes(c):c===o,className:v(a,r,!R(o,c)&&"collapsed")})});I.displayName="AccordionButton";const F=l.forwardRef(({as:t="h2",bsPrefix:r,className:a,children:s,onClick:i,...d},c)=>(r=p(r,"accordion-header"),e.jsx(t,{ref:c,...d,className:v(a,r),children:e.jsx(I,{onClick:i,children:s})})));F.displayName="AccordionHeader";const q=l.forwardRef(({as:t="div",bsPrefix:r,className:a,eventKey:s,...i},d)=>{r=p(r,"accordion-item");const c=l.useMemo(()=>({eventKey:s}),[s]);return e.jsx(B.Provider,{value:c,children:e.jsx(t,{ref:d,...i,className:v(a,r)})})});q.displayName="AccordionItem";const K=l.forwardRef((t,r)=>{const{as:a="div",activeKey:s,bsPrefix:i,className:d,onSelect:c,flush:n,alwaysOpen:o,...m}=J(t,{activeKey:"onSelect"}),h=p(i,"accordion"),u=l.useMemo(()=>({activeEventKey:s,onSelect:c,alwaysOpen:o}),[s,c,o]);return e.jsx(N.Provider,{value:u,children:e.jsx(a,{ref:r,...m,className:v(d,h,n&&`${h}-flush`)})})});K.displayName="Accordion";const f=Object.assign(K,{Button:I,Collapse:S,Item:q,Header:F,Body:L}),z=l.forwardRef(({bsPrefix:t,className:r,striped:a,bordered:s,borderless:i,hover:d,size:c,variant:n,responsive:o,...m},h)=>{const u=p(t,"table"),P=v(r,u,n&&`${u}-${n}`,c&&`${u}-${c}`,a&&`${u}-${typeof a=="string"?`striped-${a}`:"striped"}`,s&&`${u}-bordered`,i&&`${u}-borderless`,d&&`${u}-hover`),w=e.jsx("table",{...m,className:P,ref:h});if(o){let y=`${u}-responsive`;return typeof o=="string"&&(y=`${y}-${o}`),e.jsx("div",{className:y,children:w})}return w}),te=t=>{const[r,a]=l.useState([]),[s,i]=l.useState({fullName:t.item.clientData.fullName,email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""});l.useEffect(()=>{t.show&&(i(t.item.clientData),a(t.item.cartPurchased))},[t.show]);const d=async n=>{try{await A.update(t.item.id,{saleConfirmed:n}),C.fire({title:"Modificado correctamente!",text:`Modificaste el estado de: ${t.item.operationCode}`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(o=>{o.isConfirmed&&E(.5)})}catch(o){console.log(o),C.fire({title:"No se pduo modificar",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},c=n=>{let o="";return n.table==="stock"?o="Stock":n.table==="primaria"?o="Primaria":n.table==="nivel_inicial"&&(o="Nivel Inicial"),o};return e.jsxs(b,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(b.Header,{closeButton:!0,children:e.jsxs(b.Title,{id:"contained-modal-title-vcenter",children:["Detalle de operacion: ",t.item.operationCode]})}),e.jsxs(b.Body,{children:[e.jsxs(f,{children:[e.jsxs(f.Item,{eventKey:"0",children:[e.jsx(f.Header,{children:"Informacion del cliente"}),e.jsxs(f.Body,{children:[e.jsxs("div",{children:["Nombre: ",s.fullName]}),e.jsxs("div",{children:["Mail: ",s.email]}),e.jsxs("div",{children:["DNI: ",s.dni]}),e.jsxs("div",{children:["Telefono: ",s.phone]}),e.jsxs("div",{children:["Provincia: ",s.province]}),e.jsxs("div",{children:["Ciudad: ",s.city]}),e.jsxs("div",{children:["Direccion: ",s.address]}),e.jsxs("div",{children:["Codigo Postal: ",s.zipCode]}),e.jsxs("div",{children:["Metodo de pago: ",s.paymentMethod]}),e.jsxs("div",{children:["Metodo de envio: ",s.shipMethod]}),e.jsxs("div",{children:["Sucursal: ",s.sucursal!==""?s.sucursal:"ninguna"]})]})]}),e.jsxs(f.Item,{eventKey:"1",children:[e.jsx(f.Header,{children:"Informacion productos comprados"}),e.jsx(f.Body,{children:e.jsxs(z,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"IMG"})]})}),r.map((n,o)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:o+1}),e.jsx("td",{children:n.name}),e.jsxs("td",{children:["$ ",n.discountPrice||n.discountPrice>0?n.discountPrice:n.price]}),e.jsx("td",{children:n.size}),e.jsx("td",{children:n.amountToBuy}),e.jsx("td",{children:c(n)}),e.jsx("td",{children:e.jsx("img",{src:n.img,alt:"",className:"small-img-admin"})})]})},o))]})})]}),e.jsxs(f.Item,{eventKey:"2",children:[e.jsx(f.Header,{children:"Estado comprobante"}),e.jsxs(f.Body,{children:[e.jsxs("div",{style:{padding:"10px"},children:["Estado actual:",t.item.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green",marginLeft:"10px"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red",marginLeft:"10px"}})]}),e.jsx("button",{className:"btn btn-success",onClick:()=>d(!0),style:{marginRight:"10px"},children:"Confirmar que se subio el comprobante"}),e.jsx("button",{className:"btn btn-danger",onClick:()=>d(!1),children:"Indicar que no se subio el comprobante"})]})]})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," $",k(t.item.totalPricePurchased||0)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fecha:"})," ",t.item.time]})]})]}),e.jsx(b.Footer,{children:e.jsx(D,{variant:"secondary",onClick:t.onHide,children:"Cerrar"})})]})};var se=re;function re(t,r,a){var s=null,i=null,d=function(){s&&(clearTimeout(s),i=null,s=null)},c=function(){var o=i;d(),o&&o()},n=function(){if(!r)return t.apply(this,arguments);var o=this,m=arguments,h=a&&!s;if(d(),i=function(){t.apply(o,m)},s=setTimeout(function(){if(s=null,!h){var u=i;return i=null,u()}},r),h)return i()};return n.cancel=d,n.flush=c,n}const ne=({purchasedProducts:t,setPurchasedProducts:r,everyProductsRef:a,onPageChange:s})=>{const i=U();H(h=>h.filter.search.toLowerCase());const[d,c]=l.useState(""),n=l.useCallback(se(h=>{h!==""?(r(a.filter(u=>u.operationCode.toLowerCase().includes(h.toLowerCase())||u.clientData.fullName.toLowerCase().includes(h.toLowerCase())||u.time.toLowerCase().includes(h.toLowerCase()))),s(1)):m()},400),[]),o=h=>{const u=h.target.value;u.startsWith(" ")||(c(u),i(_(u)),n(u))},m=async()=>{r(await A.getAll())};return e.jsxs($,{className:"d-flex",fixed:"right",style:{marginLeft:"auto",flexDirection:"column"},children:[e.jsxs("div",{className:"d-flex",style:{},children:[e.jsx($.Control,{type:"search",placeholder:"buscar por codigo, cliente, fecha...",className:"me-2","aria-label":"Search",onChange:o,value:d}),e.jsx(D,{onClick:()=>m(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(Z,{width:"18px",height:"18px"})})]}),e.jsxs("label",{style:{fontSize:"14px",padding:"3px"},children:[t==null?void 0:t.length," resultados de ",a.length]})]})},ue=()=>{var T;const t=H(x=>x.login),r=Q(),[a,s]=l.useState([]),i=l.useRef([]),[d,c]=l.useState(!1),[n,o]=l.useState({clientData:{fullName:"",email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""}}),[m,h]=l.useState(1),u=7,P=a.length,w=Math.ceil(P/u);l.useEffect(()=>{(async()=>{const j=await A.getAll();s(j),i.current=j})()},[]);const y=x=>{c(!0),o(x)},M=x=>{h(x)},O=()=>{const x=(m-1)*u,j=x+u;return a.slice(x,j)},V=x=>{C.fire({title:"Estas segura que queres eliminar el registro?",text:`codigo de operacion: ${x.operationCode}`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async j=>{if(j.isConfirmed)try{const g=X(t.token);await A.deletePurchase(x.id,g),C.fire({title:"Eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{E(.5)})}catch(g){console.error("Error",g),g.response.data.error==="token expired"?C.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(W=>{W.isConfirmed&&r("/login")}):(console.log(g),C.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}))}})};return e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("h3",{children:"Historial de ventas"}),e.jsxs("div",{className:"filters-table-container",children:[e.jsx(ne,{purchasedProducts:a,setPurchasedProducts:s,everyProductsRef:i.current,onPageChange:M}),e.jsx("div",{className:"contenedor-tabla",children:e.jsxs(z,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Codigo de operacion"}),e.jsx("th",{children:"Cliente"}),e.jsx("th",{children:"Total Compra"}),e.jsx("th",{children:"Fecha de compra"}),e.jsx("th",{children:"Comprobante"}),e.jsx("th",{children:"*"}),e.jsx("th",{children:"*"})]})}),(T=O())==null?void 0:T.map((x,j)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("td",{children:j+1}),e.jsx("td",{children:x.operationCode}),e.jsx("td",{children:x.clientData.fullName}),e.jsxs("td",{children:["$ ",k(x.totalPricePurchased)]}),e.jsx("td",{children:x.time}),e.jsx("td",{children:x.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>y(x),style:{cursor:"pointer",textDecoration:"underline"},children:"ver detalle"}),e.jsx("td",{children:e.jsx("button",{onClick:()=>V(x),className:"boton-eliminar",style:{backgroundColor:"transparent"},children:e.jsx("i",{className:"fas fa-trash-alt"})})})]})},j))]})}),e.jsx(Y,{currentPage:m,totalPages:w,onPageChange:M})]}),e.jsx(te,{item:n,show:d,onHide:()=>c(!1)})]})})};export{ue as default};
