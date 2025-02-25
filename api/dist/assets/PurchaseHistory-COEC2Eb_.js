import{r as c,b as y,j as e,af as Y,d as C,K as Z,a as K,ag as q,V as $,S as v,u as ee,i as O,U as z,ah as te,ai as se,a1 as oe,aj as T}from"./index-DrVgBgg_.js";import{p as k}from"./purchasedProduct-T4QZkbv2.js";import{g as F}from"./guardapolvos-2VIq5Vvg.js";import{M as w}from"./Modal-BsL_LGIP.js";/* empty css                       */import{s as re}from"./token-By_1sbaR.js";import{P as ne}from"./PaginationProductos-C-mX8mzp.js";function V(t,r){return Array.isArray(t)?t.includes(r):t===r}const B=c.createContext({});B.displayName="AccordionContext";const M=c.forwardRef(({as:t="div",bsPrefix:r,className:n,children:s,eventKey:h,...i},a)=>{const{activeEventKey:x}=c.useContext(B);return r=y(r,"accordion-collapse"),e.jsx(Y,{ref:a,in:V(x,h),...i,className:C(n,r),children:e.jsx(t,{children:c.Children.only(s)})})});M.displayName="AccordionCollapse";const A=c.createContext({eventKey:""});A.displayName="AccordionItemContext";const G=c.forwardRef(({as:t="div",bsPrefix:r,className:n,onEnter:s,onEntering:h,onEntered:i,onExit:a,onExiting:x,onExited:o,...u},m)=>{r=y(r,"accordion-body");const{eventKey:d}=c.useContext(A);return e.jsx(M,{eventKey:d,onEnter:s,onEntering:h,onEntered:i,onExit:a,onExiting:x,onExited:o,children:e.jsx(t,{ref:m,...u,className:C(n,r)})})});G.displayName="AccordionBody";function ae(t,r){const{activeEventKey:n,onSelect:s,alwaysOpen:h}=c.useContext(B);return i=>{let a=t===n?null:t;h&&(Array.isArray(n)?n.includes(t)?a=n.filter(x=>x!==t):a=[...n,t]:a=[t]),s==null||s(a,i),r==null||r(i)}}const E=c.forwardRef(({as:t="button",bsPrefix:r,className:n,onClick:s,...h},i)=>{r=y(r,"accordion-button");const{eventKey:a}=c.useContext(A),x=ae(a,s),{activeEventKey:o}=c.useContext(B);return t==="button"&&(h.type="button"),e.jsx(t,{ref:i,onClick:x,...h,"aria-expanded":Array.isArray(o)?o.includes(a):a===o,className:C(n,r,!V(o,a)&&"collapsed")})});E.displayName="AccordionButton";const U=c.forwardRef(({as:t="h2",bsPrefix:r,className:n,children:s,onClick:h,...i},a)=>(r=y(r,"accordion-header"),e.jsx(t,{ref:a,...i,className:C(n,r),children:e.jsx(E,{onClick:h,children:s})})));U.displayName="AccordionHeader";const _=c.forwardRef(({as:t="div",bsPrefix:r,className:n,eventKey:s,...h},i)=>{r=y(r,"accordion-item");const a=c.useMemo(()=>({eventKey:s}),[s]);return e.jsx(A.Provider,{value:a,children:e.jsx(t,{ref:i,...h,className:C(n,r)})})});_.displayName="AccordionItem";const W=c.forwardRef((t,r)=>{const{as:n="div",activeKey:s,bsPrefix:h,className:i,onSelect:a,flush:x,alwaysOpen:o,...u}=Z(t,{activeKey:"onSelect"}),m=y(h,"accordion"),d=c.useMemo(()=>({activeEventKey:s,onSelect:a,alwaysOpen:o}),[s,a,o]);return e.jsx(B.Provider,{value:d,children:e.jsx(n,{ref:r,...u,className:C(i,m,x&&`${m}-flush`)})})});W.displayName="Accordion";const p=Object.assign(W,{Button:E,Collapse:M,Item:_,Header:U,Body:G}),J=c.forwardRef(({bsPrefix:t,className:r,striped:n,bordered:s,borderless:h,hover:i,size:a,variant:x,responsive:o,...u},m)=>{const d=y(t,"table"),g=C(r,d,x&&`${d}-${x}`,a&&`${d}-${a}`,n&&`${d}-${typeof n=="string"?`striped-${n}`:"striped"}`,s&&`${d}-bordered`,h&&`${d}-borderless`,i&&`${d}-hover`),P=e.jsx("table",{...u,className:g,ref:m});if(o){let b=`${d}-responsive`;return typeof o=="string"&&(b=`${b}-${o}`),e.jsx("div",{className:b,children:P})}return P}),ce=t=>{K();const[r,n]=c.useState([]),[s,h]=c.useState({fullName:t.item.clientData.fullName,email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""});c.useEffect(()=>{t.show&&(h(t.item.clientData),n(t.item.cartPurchased))},[t.show]);const i=async o=>{try{await k.update(t.item.id,{saleConfirmed:o}),v.fire({title:"Modificado correctamente!",text:`Modificaste el estado de: ${t.item.operationCode}`,icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(u=>{u.isConfirmed&&(t.resetProducts(),t.onHide())})}catch(u){console.log(u),v.fire({title:"No se pduo modificar",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}},a=o=>{let u="";return o.table==="stock"?u="Stock":o.table==="primaria"?u="Primaria":o.table==="nivel_inicial"&&(u="Nivel Inicial"),u},x=o=>{const u=`/products?id=${o.id}`;window.open(u,"_blank")};return e.jsxs(w,{...t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(w.Header,{closeButton:!0,children:e.jsxs(w.Title,{id:"contained-modal-title-vcenter",children:["Detalle de operacion: ",t.item.operationCode]})}),e.jsxs(w.Body,{children:[e.jsxs(p,{children:[e.jsxs(p.Item,{eventKey:"0",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Informacion del cliente"})}),e.jsxs(p.Body,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Nombre:"})," ",s.fullName]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mail:"})," ",s.email]}),e.jsxs("div",{children:[e.jsx("strong",{children:"DNI:"})," ",s.dni]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Telefono:"})," ",s.phone]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Provincia:"})," ",s.province]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Ciudad:"})," ",s.city]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Direccion:"})," ",s.address]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Codigo Postal:"})," ",s.zipCode]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Metodo de pago:"})," ",s.paymentMethod]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Metodo de envio:"})," ",s.shipMethod]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Sucursal:"})," ",s.sucursal!==""?s.sucursal:"ninguna"]})]})]}),e.jsxs(p.Item,{eventKey:"1",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Informacion productos comprados"})}),e.jsx(p.Body,{children:e.jsxs(J,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Precio"}),e.jsx("th",{children:"Talle"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Tipo"}),e.jsx("th",{children:"IMG"})]})}),r.map((o,u)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",onClick:()=>x(o),style:{cursor:"pointer"},children:[e.jsx("td",{children:o.name}),e.jsxs("td",{children:["$ ",o.discountPrice||o.discountPrice>0?o.discountPrice:o.price]}),e.jsx("td",{children:o.size}),e.jsx("td",{children:o.amountToBuy}),e.jsx("td",{children:a(o)}),e.jsx("td",{children:e.jsx("img",{src:o.img,alt:o.description.general,className:"small-img-admin"})})]})},u))]})})]}),e.jsxs(p.Item,{eventKey:"2",children:[e.jsx(p.Header,{children:e.jsx("strong",{children:"Estado comprobante"})}),e.jsxs(p.Body,{children:[e.jsxs("div",{style:{padding:"10px"},children:["Estado actual:",t.item.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green",marginLeft:"10px"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red",marginLeft:"10px"}})]}),e.jsx("button",{className:"btn btn-success",onClick:()=>i(!0),style:{marginRight:"10px"},children:"Confirmar que se subio el comprobante"}),e.jsx("button",{className:"btn btn-danger",onClick:()=>i(!1),children:"Indicar que no se subio el comprobante"})]})]})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Total:"})," $",q(t.item.totalPricePurchased||0)]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fecha:"})," ",t.item.time]})]})]}),e.jsx(w.Footer,{children:e.jsx($,{variant:"secondary",onClick:t.onHide,children:"Cerrar"})})]})},ie=({purchasedProducts:t,setPurchasedProducts:r,everyProductsRef:n,onPageChange:s})=>{const h=ee(),i=O(d=>d.filter.search.toLowerCase()),[a,x]=c.useState(""),o=d=>{const g=d.target.value;g.startsWith(" ")||(x(g),h(oe(g)))},u=async()=>{i!==""?(r(n.filter(d=>d.operationCode.toLowerCase().includes(i.toLowerCase())||d.clientData.fullName.toLowerCase().includes(i.toLowerCase())||d.time.toLowerCase().includes(i.toLowerCase()))),s(1)):m()},m=async()=>{x(""),r(T(await k.getAll()))};return e.jsxs(z,{className:"d-flex",fixed:"right",style:{marginLeft:"auto",flexDirection:"column"},children:[e.jsxs("div",{className:"d-flex",style:{},children:[e.jsx(z.Control,{type:"search",placeholder:"buscar por codigo, cliente, fecha...",className:"me-2","aria-label":"Search",onChange:o,value:a}),e.jsx($,{onClick:()=>u(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(te,{})}),e.jsx($,{onClick:()=>m(),variant:"outline-secondary",style:{padding:"0px 10px 5px 10px"},children:e.jsx(se,{width:"18px",height:"18px"})})]}),e.jsxs("label",{style:{fontSize:"14px",padding:"3px"},children:[t==null?void 0:t.length," resultados de ",n.length]})]})},fe=()=>{var R;const t=O(l=>l.login),r=K(),[n,s]=c.useState([]),h=c.useRef([]),[i,a]=c.useState(!1),[x,o]=c.useState({clientData:{fullName:"",email:"",dni:"",phone:"",province:"",city:"",address:"",zipCode:"",paymentMethod:"",shipMethod:"",sucursal:""}}),[u,m]=c.useState(1),d=7,g=n.length,P=Math.ceil(g/d);c.useEffect(()=>{(async()=>{const j=await k.getAll(),f=T(j);s(f),h.current=f})()},[]);const b=l=>{a(!0),o(l)},D=l=>{m(l)},Q=()=>{const l=(u-1)*d,j=l+d;return n.slice(l,j)},H=async()=>{s(T(await k.getAll()))},X=l=>{v.fire({title:"Estas segura que queres eliminar el registro?",text:`codigo de operacion: ${l.operationCode}`,icon:"question",confirmButtonText:"Aceptar",confirmButtonColor:"#000",showDenyButton:!0,denyButtonText:"Cancelar",html:`${S(l)?`
                    <div style="text-align: left;">
                        <input type="checkbox" id="confirmCheckbox">
                        <label for="confirmCheckbox">Agregar nuevamente los guardapolvos al stock</label>
                    </div>
                    `:""} `}).then(async j=>{if(j.isConfirmed)try{if(S(l)&&document.getElementById("confirmCheckbox").checked)try{l.cartPurchased.forEach(async N=>{if(N.table==="stock"){const I=await F.getById(N.id);await F.update(I.id,{...I,amountToBuy:1,amount:I.amount+N.amountToBuy})}})}catch(N){console.log(N)}const f=re(t.token);await k.deletePurchase(l.id,f),v.fire({title:"Eliminado correctamente!",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(()=>{H()})}catch(f){console.error("Error",f),f.response.data.error==="token expired"?v.fire({title:"Se cerro tu sesion!",text:"Deberas iniciar sesion nuevamente",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}).then(L=>{L.isConfirmed&&r("/login")}):(console.log(f),v.fire({title:"Error inesperado",text:"Intentalo nuevamente mas tarde.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}))}})},S=l=>{let j=0;return l.cartPurchased.map(f=>{f.table=="stock"&&j++}),j>0};return e.jsx("div",{children:e.jsxs("div",{className:"contenedor-tablas-productos",children:[e.jsx("h3",{children:"Historial de ventas"}),e.jsxs("div",{className:"d-flex gap-2 w-100",style:{marginLeft:"7%",alignItems:"center",marginBottom:"20px"},children:[e.jsx("div",{style:{backgroundColor:"#eed6e5",width:"40px",height:"20px",borderRadius:"8px"}}),e.jsx("p",{style:{fontSize:"13px",margin:"0px"},children:"Guardapolvos comprados del stock"})]}),e.jsxs("div",{className:"filters-table-container",children:[e.jsx(ie,{purchasedProducts:n,setPurchasedProducts:s,everyProductsRef:h.current,onPageChange:D}),e.jsx("div",{className:"contenedor-tabla",children:e.jsxs(J,{hover:!0,variant:"light",className:"tabla-de-productos",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"tr-tabla-productos",children:[e.jsx("th",{children:"#"}),e.jsx("th",{className:"hide-on-mobile",children:"Codigo de operacion"}),e.jsx("th",{children:"Cliente"}),e.jsx("th",{className:"hide-on-mobile",children:"Total Compra"}),e.jsx("th",{children:"Fecha de compra"}),e.jsx("th",{children:"Comprobante"}),e.jsx("th",{children:"*"}),e.jsx("th",{children:"*"})]})}),(R=Q())==null?void 0:R.map((l,j)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"tr-tabla-productos",style:S(l)?{backgroundColor:"#fbe6f3"}:null,children:[e.jsx("td",{children:j+1}),e.jsx("td",{className:"hide-on-mobile",children:l.operationCode}),e.jsx("td",{children:l.clientData.fullName}),e.jsxs("td",{className:"hide-on-mobile",children:["$ ",q(l.totalPricePurchased)]}),e.jsx("td",{children:l.time.split(",")[0]}),e.jsx("td",{children:l.saleConfirmed?e.jsx("i",{className:"bi bi-check-lg",style:{color:"green"}}):e.jsx("i",{className:"bi bi-x-lg",style:{color:"red"}})}),e.jsx("td",{onClick:()=>b(l),style:{cursor:"pointer",textDecoration:"underline"},children:"ver detalle"}),e.jsx("td",{children:e.jsx("button",{onClick:()=>X(l),className:"boton-eliminar",style:{backgroundColor:"transparent"},children:e.jsx("i",{className:"fas fa-trash-alt"})})})]})},j))]})}),e.jsx(ne,{currentPage:u,totalPages:P,onPageChange:D})]}),e.jsx(ce,{item:x,show:i,onHide:()=>a(!1),resetProducts:H})]})})};export{fe as default};
