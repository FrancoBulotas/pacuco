import{r as c,b as y,j as e,af as J,d as C,K as Q,a as R,ag as L,V as k,S as v,u as X,i as z,U as H,ah as Y,ai as Z,a1 as ee,aj as I}from"./index-BM9-gmyZ.js";import{p as w}from"./purchasedProduct-D8I6NczF.js";import{M as N}from"./Modal-DNWnEWsu.js";/* empty css                       */import{s as te}from"./token-By_1sbaR.js";import{P as se}from"./PaginationProductos-B8St8llZ.js";function F(t,o){return Array.isArray(t)?t.includes(o):t===o}const P=c.createContext({});P.displayName="AccordionContext";const $=c.forwardRef(({as:t="div",bsPrefix:o,className:n,children:s,eventKey:d,...i},a)=>{const{activeEventKey:x}=c.useContext(P);return o=y(o,"accordion-collapse"),e.jsx(J,{ref:a,in:F(x,d),...i,className:C(n,o),children:e.jsx(t,{children:c.Children.only(s)})})});$.displayName="AccordionCollapse";const S=c.createContext({eventKey:""});S.displayName="AccordionItemContext";const K=c.forwardRef(({as:t="div",bsPrefix:o,className:n,onEnter:s,onEntering:d,onEntered:i,onExit:a,onExiting:x,onExited:r,...h},m)=>{o=y(o,"accordion-body");const{eventKey:l}=c.useContext(S);return e.jsx($,{eventKey:l,onEnter:s,onEntering:d,onEntered:i,onExit:a,onExiting:x,onExited:r,children:e.jsx(t,{ref:m,...h,className:C(n,o)})})});K.displayName="AccordionBody";function re(t,o){const{activeEventKey:n,onSelect:s,alwaysOpen:d}=c.useContext(P);return i=>{let a=t===n?null:t;d&&(Array.isArray(n)?n.includes(t)?a=n.filter(x=>x!==t):a=[...n,t]:a=[t]),s==null||s(a,i),o==null||o(i)}}const M=c.forwardRef(({as:t="button",bsPrefix:o,className:n,onClick:s,...d},i)=>{o=y(o,"accordion-button");const{eventKey:a}=c.useContext(S),x=re(a,s),{activeEventKey:r}=c.useContext(P);return t==="button"&&(d.type="button"),e.jsx(t,{ref:i,onClick:x,...d,"aria-expanded":Array.isArray(r)?r.includes(a):a===r,className:C(n,o,!F(r,a)&&"collapsed")})});M.displayName="AccordionButton";const q=c.forwardRef(({as:t="h2",bsPrefix:o,className:n,children:s,onClick:d,...i},a)=>(o=y(o,"accordion-header"),e.jsx(t,{ref:a,...i,className:C(n,o),children:e.jsx(M,{onClick:d,children:s})})));q.displayName="AccordionHeader";const O=c.forwardRef(({as:t="div",bsPrefix:o,className:n,eventKey:s,...d},i)=>{o=y(o,"accordion-item");const a=c.useMemo(()=>({eventKey:s}),[s]);return e.jsx(S.Provider,{value:a,children:e.jsx(t,{ref:i,...d,className:C(n,o)})})});O.displayName="AccordionItem";const V=c.forwardRef((t,o)=>{const{as:n="div",activeKey:s,bsPrefix:d,className:i,onSelect:a,flush:x,alwaysOpen:r,...h}=Q(t,{activeKey:"onSelect"}),m=y(d,"accordion"),l=c.useMemo(()=>({activeEventKey:s,onSelect:a,alwaysOpen:r}),[s,a,r]);return e.jsx(P.Provider,{value:l,children:e.jsx(n,{ref:o,...h,className:C(i,m,x&&`${m}-flush`)})})});V.displayName="Accordion";const p=Object.assign(V,{Button:M,Collapse:$,Item:O,Header:q,Body:K}),_=c.forwardRef(({bsPrefix:t,className:o,striped:n,bordered:s,borderless:d,hover:i,size:a,variant:x,responsive:r,...h},m)=>{const l=y(t,"table"),g=C(o,l,x&&`${l}-${x}`,a&&`${l}-${a}`,n&&`${l}-${typeof n=="string"?`striped-${n}`:"striped"}`,s&&`${l}-bordered`,d&&`${l}-borderless`,i&&`${l}-hover`),B=e.jsx("table",{...h,className:g,ref:m});if(r){let b=`${l}-responsive`;return typeof r=="string"&&(b=`${b}-${r}`),e.jsx("div",{className:b,children:B})}return B}),oe=t=>{R();const[o,n]=c.useState([]),[s,d]=c.useState({fullName:t.item.clientData.fullName,email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""});c.useEffect(()=>{t.show&&(d(t.item.clientData),n(t.item.cartPurchased))},[t.show]);const i=async r=>{try{await w.update(t.item.id,{saleConfirmed:r}),v.fire({title:"Modificado correctamente!",text:`Modificaste el estado de: ${t.item.operationCode}`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(h=>{h.isConfirmed&&(t.resetProducts(),t.onHide())})}catch(h){console.log(h),v.fire({title:"No se pduo modificar",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},a=r=>{let h="";return r.table==="stock"?h="Stock":r.table==="primaria"?h="Primaria":r.table==="nivel_inicial"&&(h="Nivel Inicial"),h},x=r=>{const h=`/products?id=${r.id}`;window.open(h,"_blank")};return e.jsxs(N,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(N.Header,{closeButton:!0,children:e.jsxs(N.Title,{id:"contained-modal-title-vcenter",children:["Detalle de operacion: ",t.item.operationCode]})}),e.jsxs(N.Body,{children:[e.jsxs(p,{children:[e.jsxs(p.Item,{eventKey:"0",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Informacion del cliente"})}),e.jsxs(p.Body,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Nombre:"})," ",s.fullName]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mail:"})," ",s.email]}),e.jsxs("div",{children:[e.jsx("strong",{children:"DNI:"})," ",s.dni]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Telefono:"})," ",s.phone]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Provincia:"})," ",s.province]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Ciudad:"})," ",s.city]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Direccion:"})," ",s.address]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Codigo Postal:"})," ",s.zipCode]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Metodo de pago:"})," ",s.paymentMethod]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Metodo de envio:"})," ",s.shipMethod]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Sucursal:"})," ",s.sucursal!==""?s.sucursal:"ninguna"]})]})]}),e.jsxs(p.Item,{eventKey:"1",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Informacion productos comprados"})}),e.jsx(p.Body,{children:e.jsxs(_,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"IMG"})]})}),o.map((r,h)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",onClick:()=>x(r),style:{cursor:"pointer"},children:[e.jsx("td",{children:r.name}),e.jsxs("td",{children:["$ ",r.discountPrice||r.discountPrice>0?r.discountPrice:r.price]}),e.jsx("td",{children:r.size}),e.jsx("td",{children:r.amountToBuy}),e.jsx("td",{children:a(r)}),e.jsx("td",{children:e.jsx("img",{src:r.img,alt:r.description.general,className:"small-img-admin"})})]})},h))]})})]}),e.jsxs(p.Item,{eventKey:"2",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Estado comprobante"})}),e.jsxs(p.Body,{children:[e.jsxs("div",{style:{padding:"10px"},children:["Estado actual:",t.item.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green",marginLeft:"10px"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red",marginLeft:"10px"}})]}),e.jsx("button",{className:"btn btn-success",onClick:()=>i(!0),style:{marginRight:"10px"},children:"Confirmar que se subio el comprobante"}),e.jsx("button",{className:"btn btn-danger",onClick:()=>i(!1),children:"Indicar que no se subio el comprobante"})]})]})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," $",L(t.item.totalPricePurchased||0)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fecha:"})," ",t.item.time]})]})]}),e.jsx(N.Footer,{children:e.jsx(k,{variant:"secondary",onClick:t.onHide,children:"Cerrar"})})]})},ne=({purchasedProducts:t,setPurchasedProducts:o,everyProductsRef:n,onPageChange:s})=>{const d=X(),i=z(l=>l.filter.search.toLowerCase()),[a,x]=c.useState(""),r=l=>{const g=l.target.value;g.startsWith(" ")||(x(g),d(ee(g)))},h=async()=>{i!==""?(o(n.filter(l=>l.operationCode.toLowerCase().includes(i.toLowerCase())||l.clientData.fullName.toLowerCase().includes(i.toLowerCase())||l.time.toLowerCase().includes(i.toLowerCase()))),s(1)):m()},m=async()=>{x(""),o(I(await w.getAll()))};return e.jsxs(H,{className:"d-flex",fixed:"right",style:{marginLeft:"auto",flexDirection:"column"},children:[e.jsxs("div",{className:"d-flex",style:{},children:[e.jsx(H.Control,{type:"search",placeholder:"buscar por codigo, cliente, fecha...",className:"me-2","aria-label":"Search",onChange:r,value:a}),e.jsx(k,{onClick:()=>h(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(Y,{})}),e.jsx(k,{onClick:()=>m(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(Z,{width:"18px",height:"18px"})})]}),e.jsxs("label",{style:{fontSize:"14px",padding:"3px"},children:[t==null?void 0:t.length," resultados de ",n.length]})]})},ue=()=>{var E;const t=z(u=>u.login),o=R(),[n,s]=c.useState([]),d=c.useRef([]),[i,a]=c.useState(!1),[x,r]=c.useState({clientData:{fullName:"",email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""}}),[h,m]=c.useState(1),l=7,g=n.length,B=Math.ceil(g/l);c.useEffect(()=>{(async()=>{const j=await w.getAll(),f=I(j);s(f),d.current=f})()},[]);const b=u=>{a(!0),r(u)},T=u=>{m(u)},G=()=>{const u=(h-1)*l,j=u+l;return n.slice(u,j)},D=async()=>{s(I(await w.getAll()))},U=u=>{v.fire({title:"Estas segura que queres eliminar el registro?",text:`codigo de operacion: ${u.operationCode}`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar"}).then(async j=>{if(j.isConfirmed)try{const f=te(t.token);await w.deletePurchase(u.id,f),v.fire({title:"Eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{D()})}catch(f){console.error("Error",f),f.response.data.error==="token expired"?v.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(A=>{A.isConfirmed&&o("/login")}):(console.log(f),v.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}))}})},W=u=>{let j=0,f=0;return u.cartPurchased.map(A=>{A.table=="primaria"?j++:A.table=="nivel_inicial"&&f++}),j==0&&f==0};return e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("h3",{children:"Historial de ventas"}),e.jsxs("div",{className:"d-flex gap-2 w-100",style:{marginLeft:"7%",alignItems:"center",marginBottom:"20px"},children:[e.jsx("div",{style:{backgroundColor:"#eed6e5",width:"40px",height:"20px",borderRadius:"8px"}}),e.jsx("p",{style:{fontSize:"13px",margin:"0px"},children:"Guardapolvos comprados del stock"})]}),e.jsxs("div",{className:"filters-table-container",children:[e.jsx(ne,{purchasedProducts:n,setPurchasedProducts:s,everyProductsRef:d.current,onPageChange:T}),e.jsx("div",{className:"contenedor-tabla",children:e.jsxs(_,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{className:"hide-on-mobile",children:"Codigo de operacion"}),e.jsx("th",{children:"Cliente"}),e.jsx("th",{className:"hide-on-mobile",children:"Total Compra"}),e.jsx("th",{children:"Fecha de compra"}),e.jsx("th",{children:"Comprobante"}),e.jsx("th",{children:"*"}),e.jsx("th",{children:"*"})]})}),(E=G())==null?void 0:E.map((u,j)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",style:W(u)?{backgroundColor:"#fbe6f3"}:null,children:[e.jsx("td",{children:j+1}),e.jsx("td",{className:"hide-on-mobile",children:u.operationCode}),e.jsx("td",{children:u.clientData.fullName}),e.jsxs("td",{className:"hide-on-mobile",children:["$ ",L(u.totalPricePurchased)]}),e.jsx("td",{children:u.time.split(",")[0]}),e.jsx("td",{children:u.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>b(u),style:{cursor:"pointer",textDecoration:"underline"},children:"ver detalle"}),e.jsx("td",{children:e.jsx("button",{onClick:()=>U(u),className:"boton-eliminar",style:{backgroundColor:"transparent"},children:e.jsx("i",{className:"fas fa-trash-alt"})})})]})},j))]})}),e.jsx(se,{currentPage:h,totalPages:B,onPageChange:T})]}),e.jsx(oe,{item:x,show:i,onHide:()=>a(!1),resetProducts:D})]})})};export{ue as default};
