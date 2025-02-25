import{r as c,t as y,j as e,aa as W,v as C,J as Y,a as E,ab as R,E as k,S as v,I as H,u as Q,b as L,F as D,ac as X,ad as Z,Y as ee,ae as F}from"./index-CRpkLV3M.js";import{p as A}from"./purchasedProduct-QnCJbqmJ.js";import{M as N}from"./Modal-CqZCbgF9.js";/* empty css                       */import{s as te}from"./token-By_1sbaR.js";import{P as se}from"./PaginationProductos-CiAOwqaf.js";function z(t,r){return Array.isArray(t)?t.includes(r):t===r}const w=c.createContext({});w.displayName="AccordionContext";const I=c.forwardRef(({as:t="div",bsPrefix:r,className:n,children:o,eventKey:d,...i},a)=>{const{activeEventKey:x}=c.useContext(w);return r=y(r,"accordion-collapse"),e.jsx(W,{ref:a,in:z(x,d),...i,className:C(n,r),children:e.jsx(t,{children:c.Children.only(o)})})});I.displayName="AccordionCollapse";const S=c.createContext({eventKey:""});S.displayName="AccordionItemContext";const q=c.forwardRef(({as:t="div",bsPrefix:r,className:n,onEnter:o,onEntering:d,onEntered:i,onExit:a,onExiting:x,onExited:s,...h},m)=>{r=y(r,"accordion-body");const{eventKey:l}=c.useContext(S);return e.jsx(I,{eventKey:l,onEnter:o,onEntering:d,onEntered:i,onExit:a,onExiting:x,onExited:s,children:e.jsx(t,{ref:m,...h,className:C(n,r)})})});q.displayName="AccordionBody";function re(t,r){const{activeEventKey:n,onSelect:o,alwaysOpen:d}=c.useContext(w);return i=>{let a=t===n?null:t;d&&(Array.isArray(n)?n.includes(t)?a=n.filter(x=>x!==t):a=[...n,t]:a=[t]),o==null||o(a,i),r==null||r(i)}}const $=c.forwardRef(({as:t="button",bsPrefix:r,className:n,onClick:o,...d},i)=>{r=y(r,"accordion-button");const{eventKey:a}=c.useContext(S),x=re(a,o),{activeEventKey:s}=c.useContext(w);return t==="button"&&(d.type="button"),e.jsx(t,{ref:i,onClick:x,...d,"aria-expanded":Array.isArray(s)?s.includes(a):a===s,className:C(n,r,!z(s,a)&&"collapsed")})});$.displayName="AccordionButton";const K=c.forwardRef(({as:t="h2",bsPrefix:r,className:n,children:o,onClick:d,...i},a)=>(r=y(r,"accordion-header"),e.jsx(t,{ref:a,...i,className:C(n,r),children:e.jsx($,{onClick:d,children:o})})));K.displayName="AccordionHeader";const O=c.forwardRef(({as:t="div",bsPrefix:r,className:n,eventKey:o,...d},i)=>{r=y(r,"accordion-item");const a=c.useMemo(()=>({eventKey:o}),[o]);return e.jsx(S.Provider,{value:a,children:e.jsx(t,{ref:i,...d,className:C(n,r)})})});O.displayName="AccordionItem";const _=c.forwardRef((t,r)=>{const{as:n="div",activeKey:o,bsPrefix:d,className:i,onSelect:a,flush:x,alwaysOpen:s,...h}=Y(t,{activeKey:"onSelect"}),m=y(d,"accordion"),l=c.useMemo(()=>({activeEventKey:o,onSelect:a,alwaysOpen:s}),[o,a,s]);return e.jsx(w.Provider,{value:l,children:e.jsx(n,{ref:r,...h,className:C(i,m,x&&`${m}-flush`)})})});_.displayName="Accordion";const p=Object.assign(_,{Button:$,Collapse:I,Item:O,Header:K,Body:q}),G=c.forwardRef(({bsPrefix:t,className:r,striped:n,bordered:o,borderless:d,hover:i,size:a,variant:x,responsive:s,...h},m)=>{const l=y(t,"table"),g=C(r,l,x&&`${l}-${x}`,a&&`${l}-${a}`,n&&`${l}-${typeof n=="string"?`striped-${n}`:"striped"}`,o&&`${l}-bordered`,d&&`${l}-borderless`,i&&`${l}-hover`),P=e.jsx("table",{...h,className:g,ref:m});if(s){let b=`${l}-responsive`;return typeof s=="string"&&(b=`${b}-${s}`),e.jsx("div",{className:b,children:P})}return P}),oe=t=>{E();const[r,n]=c.useState([]),[o,d]=c.useState({fullName:t.item.clientData.fullName,email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""});c.useEffect(()=>{t.show&&(d(t.item.clientData),n(t.item.cartPurchased))},[t.show]);const i=async s=>{try{await A.update(t.item.id,{saleConfirmed:s}),v.fire({title:"Modificado correctamente!",text:`Modificaste el estado de: ${t.item.operationCode}`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(h=>{h.isConfirmed&&H(.5)})}catch(h){console.log(h),v.fire({title:"No se pduo modificar",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},a=s=>{let h="";return s.table==="stock"?h="Stock":s.table==="primaria"?h="Primaria":s.table==="nivel_inicial"&&(h="Nivel Inicial"),h},x=s=>{const h=`/products?id=${s.id}`;window.open(h,"_blank")};return e.jsxs(N,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(N.Header,{closeButton:!0,children:e.jsxs(N.Title,{id:"contained-modal-title-vcenter",children:["Detalle de operacion: ",t.item.operationCode]})}),e.jsxs(N.Body,{children:[e.jsxs(p,{children:[e.jsxs(p.Item,{eventKey:"0",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Informacion del cliente"})}),e.jsxs(p.Body,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Nombre:"})," ",o.fullName]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mail:"})," ",o.email]}),e.jsxs("div",{children:[e.jsx("strong",{children:"DNI:"})," ",o.dni]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Telefono:"})," ",o.phone]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Provincia:"})," ",o.province]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Ciudad:"})," ",o.city]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Direccion:"})," ",o.address]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Codigo Postal:"})," ",o.zipCode]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Metodo de pago:"})," ",o.paymentMethod]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Metodo de envio:"})," ",o.shipMethod]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Sucursal:"})," ",o.sucursal!==""?o.sucursal:"ninguna"]})]})]}),e.jsxs(p.Item,{eventKey:"1",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Informacion productos comprados"})}),e.jsx(p.Body,{children:e.jsxs(G,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"IMG"})]})}),r.map((s,h)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",onClick:()=>x(s),style:{cursor:"pointer"},children:[e.jsx("td",{children:s.name}),e.jsxs("td",{children:["$ ",s.discountPrice||s.discountPrice>0?s.discountPrice:s.price]}),e.jsx("td",{children:s.size}),e.jsx("td",{children:s.amountToBuy}),e.jsx("td",{children:a(s)}),e.jsx("td",{children:e.jsx("img",{src:s.img,alt:s.description.general,className:"small-img-admin"})})]})},h))]})})]}),e.jsxs(p.Item,{eventKey:"2",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Estado comprobante"})}),e.jsxs(p.Body,{children:[e.jsxs("div",{style:{padding:"10px"},children:["Estado actual:",t.item.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green",marginLeft:"10px"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red",marginLeft:"10px"}})]}),e.jsx("button",{className:"btn btn-success",onClick:()=>i(!0),style:{marginRight:"10px"},children:"Confirmar que se subio el comprobante"}),e.jsx("button",{className:"btn btn-danger",onClick:()=>i(!1),children:"Indicar que no se subio el comprobante"})]})]})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," $",R(t.item.totalPricePurchased||0)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fecha:"})," ",t.item.time]})]})]}),e.jsx(N.Footer,{children:e.jsx(k,{variant:"secondary",onClick:t.onHide,children:"Cerrar"})})]})},ne=({purchasedProducts:t,setPurchasedProducts:r,everyProductsRef:n,onPageChange:o})=>{const d=Q(),i=L(l=>l.filter.search.toLowerCase()),[a,x]=c.useState(""),s=l=>{const g=l.target.value;g.startsWith(" ")||(x(g),d(ee(g)))},h=async()=>{i!==""?(r(n.filter(l=>l.operationCode.toLowerCase().includes(i.toLowerCase())||l.clientData.fullName.toLowerCase().includes(i.toLowerCase())||l.time.toLowerCase().includes(i.toLowerCase()))),o(1)):m()},m=async()=>{x(""),r(F(await A.getAll()))};return e.jsxs(D,{className:"d-flex",fixed:"right",style:{marginLeft:"auto",flexDirection:"column"},children:[e.jsxs("div",{className:"d-flex",style:{},children:[e.jsx(D.Control,{type:"search",placeholder:"buscar por codigo, cliente, fecha...",className:"me-2","aria-label":"Search",onChange:s,value:a}),e.jsx(k,{onClick:()=>h(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(X,{})}),e.jsx(k,{onClick:()=>m(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(Z,{width:"18px",height:"18px"})})]}),e.jsxs("label",{style:{fontSize:"14px",padding:"3px"},children:[t==null?void 0:t.length," resultados de ",n.length]})]})},ue=()=>{var T;const t=L(u=>u.login),r=E(),[n,o]=c.useState([]),d=c.useRef([]),[i,a]=c.useState(!1),[x,s]=c.useState({clientData:{fullName:"",email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""}}),[h,m]=c.useState(1),l=7,g=n.length,P=Math.ceil(g/l);c.useEffect(()=>{(async()=>{const j=await A.getAll(),f=F(j);o(f),d.current=f})()},[]);const b=u=>{a(!0),s(u)},M=u=>{m(u)},V=()=>{const u=(h-1)*l,j=u+l;return n.slice(u,j)},J=u=>{v.fire({title:"Estas segura que queres eliminar el registro?",text:`codigo de operacion: ${u.operationCode}`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async j=>{if(j.isConfirmed)try{const f=te(t.token);await A.deletePurchase(u.id,f),v.fire({title:"Eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{H(.5)})}catch(f){console.error("Error",f),f.response.data.error==="token expired"?v.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(B=>{B.isConfirmed&&r("/login")}):(console.log(f),v.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}))}})},U=u=>{let j=0,f=0;return u.cartPurchased.map(B=>{B.table=="primaria"?j++:B.table=="nivel_inicial"&&f++}),j==0&&f==0};return e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("h3",{children:"Historial de ventas"}),e.jsxs("div",{className:"d-flex gap-2 w-100",style:{marginLeft:"7%",alignItems:"center",marginBottom:"20px"},children:[e.jsx("div",{style:{backgroundColor:"#eed6e5",width:"40px",height:"20px",borderRadius:"8px"}}),e.jsx("p",{style:{fontSize:"13px",margin:"0px"},children:"Guardapolvos comprados del stock"})]}),e.jsxs("div",{className:"filters-table-container",children:[e.jsx(ne,{purchasedProducts:n,setPurchasedProducts:o,everyProductsRef:d.current,onPageChange:M}),e.jsx("div",{className:"contenedor-tabla",children:e.jsxs(G,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{className:"hide-on-mobile",children:"Codigo de operacion"}),e.jsx("th",{children:"Cliente"}),e.jsx("th",{className:"hide-on-mobile",children:"Total Compra"}),e.jsx("th",{children:"Fecha de compra"}),e.jsx("th",{children:"Comprobante"}),e.jsx("th",{children:"*"}),e.jsx("th",{children:"*"})]})}),(T=V())==null?void 0:T.map((u,j)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",style:U(u)?{backgroundColor:"#fbe6f3"}:null,children:[e.jsx("td",{children:j+1}),e.jsx("td",{className:"hide-on-mobile",children:u.operationCode}),e.jsx("td",{children:u.clientData.fullName}),e.jsxs("td",{className:"hide-on-mobile",children:["$ ",R(u.totalPricePurchased)]}),e.jsx("td",{children:u.time.split(",")[0]}),e.jsx("td",{children:u.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>b(u),style:{cursor:"pointer",textDecoration:"underline"},children:"ver detalle"}),e.jsx("td",{children:e.jsx("button",{onClick:()=>J(u),className:"boton-eliminar",style:{backgroundColor:"transparent"},children:e.jsx("i",{className:"fas fa-trash-alt"})})})]})},j))]})}),e.jsx(se,{currentPage:h,totalPages:P,onPageChange:M})]}),e.jsx(oe,{item:x,show:i,onHide:()=>a(!1)})]})})};export{ue as default};
