import{u as w,b as E,an as D,D as A,r as t,j as e,ay as B,X as L,ab as m,az as T,S as r,aC as j,aD as f}from"./index-BWKM0uE7.js";import{B as l}from"./breadcrum-BF0kJohv.js";/* empty css                      */const U=({navigateTo:d,guardapolvo:s})=>{const n=w(),x=E(),N=D(),b=A(i=>i.cart.items),[y,C]=t.useState("00"),[a,h]=t.useState(s?s.img:""),[z,k]=t.useState(!1);t.useEffect(()=>{s&&h(s.img)},[N]),t.useEffect(()=>{const i=new Image;i.onload=()=>{k(!0)}},[]);const p=i=>{const c={...i,size:i.table==="stock"?i.size:y};if(i.table==="stock"){const g=b.find(I=>I.id===i.id);c.amount!==0?g&&c.amount===g.amountToBuy?r.fire({title:"No hay stock suficiente!",icon:"info",confirmButtonText:"Aceptar",confirmButtonColor:"#000"}):(n(j(c)),n(f(!0))):r.fire({title:"No hay stock suficiente!",icon:"info",confirmButtonText:"Aceptar",confirmButtonColor:"#000"})}else n(j(c)),n(f(!0))},S=i=>{C(i.target.value)},o=i=>{h(i.target.src)},u=()=>{r.fire({imageUrl:a,showConfirmButton:!1})};return e.jsxs("section",{className:"py-2",children:[e.jsxs(l,{className:"container px-4 px-lg-5 my-3 breadcrumb-container",style:{marginTop:"0px"},children:[e.jsx(l.Item,{onClick:()=>x("/"),children:"Inicio"}),e.jsxs(l.Item,{onClick:()=>x(`${d}`),children:[" ",d.replace("_"," ").replace("/","")," "]}),e.jsx(l.Item,{active:!0,children:s.name})]}),e.jsx("div",{className:"container px-4 px-lg-5 my-5",children:e.jsxs("div",{className:"row gx-4 gx-lg-5 align-items-center",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx(B,{onClick:u,src:a===""?s.img:a,alt:s.description.general,className:"card-img-top mb-5 mb-md-0"}),e.jsxs("div",{className:"imgs-chicas",children:[e.jsx("div",{className:"imgs-modelos",children:e.jsx("img",{onClick:o,src:s.img,alt:s.description.general,className:"small-img",id:"small-img"})}),e.jsx("div",{className:"imgs-modelos",children:e.jsx("img",{onClick:o,src:s.img2,alt:s.description.general,className:"small-img",id:"small-img2"})}),e.jsx("div",{className:"imgs-modelos",children:e.jsx("img",{onClick:o,src:s.img3!==void 0?s.img3:"https://pacucostorage.blob.core.windows.net/common/tabla-de-talles.JPG",alt:s.description.general,className:"small-img"})})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h1",{className:"display-5",style:{fontSize:"35px"},children:s.name}),e.jsx("div",{className:"fs-5 mb-4 mt-4",style:{height:"80px"},children:L(s)?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-decoration-line-through",style:{marginRight:"8px",color:"gray"},children:["$ ",m(s.price)]}),e.jsxs("span",{className:"porcentajeProductoOff",children:[T(s),"% OFF"]})]}),e.jsxs("p",{className:"fw-bolder",style:{marginTop:"10px"},children:["$ ",m(s.discountPrice)]})]}):e.jsxs("span",{className:"fw-bolder",children:["$ ",m(s.price)]})}),e.jsx("span",{children:"Medios de pago"}),e.jsxs("div",{children:[e.jsx("img",{style:{width:"45px",height:"25px"},src:"https://pacucostorage.blob.core.windows.net/common/CUENTA-DNI.png",alt:"medio de pago cuenta DNI"}),e.jsx("img",{style:{width:"50px",height:"30px"},src:"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png",alt:"medio de pago mercado pago"}),e.jsx("img",{style:{width:"30px",height:"30px"},src:"https://pacucostorage.blob.core.windows.net/common/bill-image.png",alt:"medio de pago efectivo"})]}),e.jsx("div",{style:{marginBottom:"20px",fontSize:"12px",color:"green"},children:"PAGANDO CON CUENTA DNI DE LUNES A VIERNES 20% DE DESCUENTO"}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("div",{className:"d-flex align-items-center",style:{padding:"10px",border:"1px solid #000",borderRadius:"6px",marginRight:"5px"},children:["Talle",s.table==="stock"?e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("p",{style:{marginLeft:"4px",marginBottom:"0px"},children:s.size})}):e.jsxs("select",{name:"",onChange:S,style:{marginLeft:"5px",border:"none",cursor:"pointer"},children:[e.jsx("option",{children:"00"}),e.jsx("option",{children:"0"}),e.jsx("option",{children:"1"}),e.jsx("option",{children:"2"}),e.jsx("option",{children:"3"}),e.jsx("option",{children:"4"}),e.jsx("option",{children:"5"})]})]}),s.table==="stock"?s.amount!==0?e.jsxs("button",{className:"btn btn-outline-dark flex-shrink-0",type:"button",onClick:()=>p(s),children:[e.jsx("i",{className:"bi-cart-fill me-1"}),"Añadir al carrito"]}):e.jsx("div",{className:"btn btn-outline-dark flex-shrink-0 d-flex align-items-center",children:"Sin Stock"}):e.jsxs("button",{className:"btn btn-outline-dark flex-shrink-0",type:"button",onClick:()=>p(s),children:[e.jsx("i",{className:"bi-cart-fill me-1"}),"Añadir al carrito"]}),e.jsx("div",{className:"d-flex align-items-center",style:{marginLeft:"8px"},children:s.table==="stock"?e.jsxs("div",{children:[" ",s.amount," en stock"]}):""})]}),e.jsxs("p",{style:{marginTop:"20px"},children:["BASE: ",s.description.base]}),e.jsxs("p",{children:["DETALLE: ",s.description.detalle]}),e.jsxs("p",{children:["VIVOS: ",s.description.vivos]}),s.description.bolsillos!==void 0?e.jsxs("p",{children:["BOLSILLOS: ",s.description.bolsillos]}):null,e.jsx("p",{className:"lead",children:s.description.general})]})]})})]})};export{U as default};
