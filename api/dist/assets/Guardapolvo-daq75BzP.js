import{u as L,a as z,ar as A,$ as E,b as O,r as t,j as e,ay as D,av as P,aw as F,Y as R,ad as o,ax as $,S as r,aA as f,aB as b}from"./index-UCovi7-L.js";import{B as a}from"./breadcrum-D31MQDTQ.js";/* empty css                      */const V=({navigateTo:m,guardapolvo:s})=>{const n=L(),N=z(),u=A(),[y]=E(),k=O(i=>i.cart.items),[S,C]=t.useState("00"),[d,x]=t.useState(s.img),[h,p]=t.useState(!1),[_,I]=t.useState(!1);t.useEffect(()=>{h&&x(s.img)},[u,y]),t.useEffect(()=>{const i=new Image;i.onload=()=>{I(!0)}},[]);const j=i=>{const c={...i,size:i.table==="stock"?i.size:S};if(i.table==="stock"){const g=k.find(T=>T.id===i.id);c.amount!==0?g&&c.amount===g.amountToBuy?r.fire({title:"No hay stock suficiente!",icon:"info",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}):(n(f(c)),n(b(!0))):r.fire({title:"No hay stock suficiente!",icon:"info",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}else n(f(c)),n(b(!0))},w=i=>{p(!0),C(i.target.value)},l=i=>{p(!0),x(i.target.src)},B=()=>{r.fire({imageUrl:d,showConfirmButton:!1})};return e.jsxs("div",{children:[e.jsx(D,{}),s?e.jsxs("section",{className:"py-2",children:[e.jsxs(a,{className:"container px-4 px-lg-5 my-3 breadcrumb-container",style:{marginTop:"0px"},children:[e.jsx(a.Item,{onClick:()=>N("/"),children:"Inicio"}),e.jsxs(a.Item,{active:!0,children:[" ",m.replace("_"," ").replace("/","")," "]})," ",e.jsx(a.Item,{active:!0,children:s.name})]}),e.jsx("div",{className:"container px-4 px-lg-5 my-5",children:e.jsxs("div",{className:"row gx-4 gx-lg-5 align-items-center",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx(P,{guardapolvo:s,navigateTo:m}),e.jsx(F,{onClick:B,src:h?d:s.img,alt:s.description.general,className:"card-img-top mb-5 mb-md-0"}),e.jsxs("div",{className:"imgs-chicas",children:[e.jsx("div",{className:"imgs-modelos",children:e.jsx("img",{onClick:l,src:s.img,alt:s.description.general,className:"small-img",id:"small-img"})}),e.jsx("div",{className:"imgs-modelos",children:e.jsx("img",{onClick:l,src:s.img2,alt:s.description.general,className:"small-img",id:"small-img2"})}),e.jsx("div",{className:"imgs-modelos",children:e.jsx("img",{onClick:l,src:s.img3!==void 0?s.img3:"https://pacucostorage.blob.core.windows.net/common/tabla-de-talles.JPG",alt:s.description.general,className:"small-img"})})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h1",{className:"display-5",style:{fontSize:"35px"},children:s.name}),e.jsx("div",{className:"fs-5 mb-4 mt-4",style:{height:"80px"},children:R(s)?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-decoration-line-through",style:{marginRight:"8px",color:"gray"},children:["$ ",o(s.price)]}),e.jsxs("span",{className:"porcentajeProductoOff",children:[$(s),"% OFF"]})]}),e.jsxs("p",{className:"fw-bolder",style:{marginTop:"10px"},children:["$ ",o(s.discountPrice)]})]}):e.jsxs("span",{className:"fw-bolder",children:["$ ",o(s.price)]})}),e.jsx("span",{children:"Medios de pago"}),e.jsxs("div",{children:[e.jsx("img",{style:{width:"45px",height:"25px"},src:"https://pacucostorage.blob.core.windows.net/common/CUENTA-DNI.png",alt:"medio de pago cuenta DNI"}),e.jsx("img",{style:{width:"50px",height:"30px"},src:"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png",alt:"medio de pago mercado pago"}),e.jsx("img",{style:{width:"30px",height:"30px"},src:"https://pacucostorage.blob.core.windows.net/common/bill-image.png",alt:"medio de pago efectivo"})]}),e.jsx("div",{style:{marginBottom:"20px",fontSize:"12px",color:"green"}}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("div",{className:"d-flex align-items-center",style:{padding:"10px",border:"1px solid #000",borderRadius:"6px",marginRight:"5px"},children:["Talle",s.table==="stock"?e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("p",{style:{marginLeft:"4px",marginBottom:"0px"},children:s.size})}):e.jsxs("select",{name:"",onChange:w,style:{marginLeft:"5px",border:"none",cursor:"pointer"},children:[e.jsx("option",{children:"00"}),e.jsx("option",{children:"0"}),e.jsx("option",{children:"1"}),e.jsx("option",{children:"2"}),e.jsx("option",{children:"3"}),e.jsx("option",{children:"4"}),e.jsx("option",{children:"5"})]})]}),s.table==="stock"?s.amount!==0?e.jsxs("button",{className:"btn btn-outline-dark flex-shrink-0",type:"button",onClick:()=>j(s),children:[e.jsx("i",{className:"bi-cart-fill me-1"}),"Añadir al carrito"]}):e.jsx("div",{className:"btn btn-outline-dark flex-shrink-0 d-flex align-items-center",children:"Sin Stock"}):e.jsxs("button",{className:"btn btn-outline-dark flex-shrink-0",type:"button",onClick:()=>j(s),children:[e.jsx("i",{className:"bi-cart-fill me-1"}),"Añadir al carrito"]}),e.jsx("div",{className:"d-flex align-items-center",style:{marginLeft:"8px"},children:s.table==="stock"?e.jsxs("div",{children:[" ",s.amount," en stock"]}):""})]}),e.jsxs("p",{style:{marginTop:"20px"},children:["BASE: ",s.description.base]}),e.jsxs("p",{children:["DETALLE: ",s.description.detalle]}),e.jsxs("p",{children:["VIVOS: ",s.description.vivos]}),s.description.bolsillos!==void 0?e.jsxs("p",{children:["BOLSILLOS: ",s.description.bolsillos]}):null,e.jsx("p",{className:"lead",children:s.description.general})]})]})})]}):e.jsx(e.Fragment,{children:"error"})]})};export{V as default};
