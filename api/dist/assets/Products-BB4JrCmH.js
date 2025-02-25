import{r as d,q as $,j as e,w as E,a5 as v,d as j,u as H,a6 as y,a7 as L,a8 as M,a9 as m,B as R,aa as b,ab as O,ac as D,ad as J,ae as W,b as _,L as A,J as K,af as Q,l as U}from"./index-B4rOTQjG.js";import{B as S}from"./breadcrum-dHpr2j6J.js";import{P as V}from"./PaginationProductos-aGcwz2iZ.js";const G=d.forwardRef(({bsPrefix:s,size:t,vertical:n=!1,className:r,role:a="group",as:c="div",...x},l)=>{const i=$(s,"btn-group");let p=i;return n&&(p=`${i}-vertical`),e.jsx(c,{...x,ref:l,role:a,className:E(r,p,t&&`${i}-${t}`)})});G.displayName="ButtonGroup";const X=({sortGuardapolvos:s,resetProducts:t})=>{v().pathname.replace("/","");const r={backgroundColor:"#f1f1f1",display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"6px",padding:"20px",margin:"6px",width:"60px",height:"20px"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{border:"1px solid #e0e0e0",padding:"20px",borderRadius:"6px",marginBottom:"10px"},children:[e.jsx("h4",{style:{padding:"0px"},children:"Talle"}),e.jsx("div",{style:{margin:"20px 0px",border:"1px solid #e0e0e0",width:"100%"}}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx("button",{style:r,onClick:()=>s("size","00"),children:"00 "}),e.jsx("button",{style:r,onClick:()=>s("size","0"),children:"0"}),e.jsx("button",{style:r,onClick:()=>s("size","1"),children:"1"}),e.jsx("button",{style:r,onClick:()=>s("size","2"),children:"2"}),e.jsx("button",{style:r,onClick:()=>s("size","3"),children:"3"}),e.jsx("button",{style:r,onClick:()=>s("size","4"),children:"4"}),e.jsx("button",{style:r,onClick:()=>s("size","5"),children:"5"})]})]}),e.jsx("button",{style:{marginTop:"20px"},className:"btn btn-dark",onClick:()=>t(),children:"Borrar filtros"})]})},Y=({resetProducts:s,choosenSize:t,choosenTable:n})=>{const r={position:"relative",backgroundColor:"#f1f1f1",margin:"5px",borderRadius:"6px"},a={top:"-8px",left:"0px",padding:"4px 6px",border:"none"};return e.jsx("div",{style:{margin:"10px 25px",padding:"10px",border:"1px solid #f1f1f1",borderRadius:"6px",fontSize:"14px"},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center",children:[e.jsx("div",{children:"Filtros: "}),e.jsxs("div",{className:"d-flex",style:{marginLeft:"6px"},children:[t!==""&&e.jsxs("div",{style:r,children:[e.jsx("div",{style:{padding:"8px 15px"},children:t}),e.jsx("button",{onClick:()=>s(),className:"badge bg-dark text-white position-absolute",style:a,children:"x"})]}),n!==""&&e.jsxs("div",{style:r,children:[e.jsx("div",{style:{padding:"8px 15px"},children:n}),e.jsx("button",{onClick:()=>s(),className:"badge bg-dark text-white position-absolute",style:a,children:"x"})]})]}),e.jsx("button",{style:{marginLeft:"auto",fontSize:"14px"},className:"btn btn-light",onClick:()=>s(),children:"Borrar filtros"})]})})},Z=({setIsLoading:s,table:t,guardapolvosList:n})=>{const[r,a]=d.useState(n),c=j(o=>o.guardapolvos.filtredStatic),x=j(o=>o.guardapolvos.all),l=d.useRef(n),i=H(),p=400,h=j(o=>o.filter.choosenSize),[k,u]=d.useState(""),[C,B]=d.useState(!1),N=()=>B(!1),I=()=>B(!0);d.useEffect(()=>{h!==""&&f("size",h),w()},[]);const w=()=>{t==="stock"&&(l.current=x.filter(o=>o.table==="stock")),t==="guardapolvos"&&(l.current=x)},f=(o,g=null,T=null,z=null)=>{if(N(),s(!0),o==="price")i(O(n,t,T));else if(o==="name")i(D(r,t));else if(o==="size"&&t==="busqueda"){i(y(g));const q=c.filter(F=>F.table!=="stock"||F.size===g);i(L(q))}else o==="size"?(i(y(g)),i(M(r,t,g))):o==="table"&&(u(z),i(J(l.current,t,z)));setTimeout(async()=>{s(!1)},p)},P=(o=null)=>{N(),t==="busqueda"?(i(L(c)),i(y("")),u("")):(i(W(t,l.current)),i(y("")),a(n)),w()};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",height:"40px",marginLeft:"10px",marginRight:"10px",marginBottom:"5px",paddingTop:"5px"},children:[e.jsxs(m,{as:G,className:"dropdown-custom",children:[e.jsx(R,{variant:"light",style:{backgroundColor:"#fff",color:"#000",padding:"5px 25px",fontSize:"16px"},children:"Ordenar"}),e.jsx(m.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic",style:{backgroundColor:"#fff",color:"#000",padding:"5px 25px"}}),e.jsxs(m.Menu,{children:[e.jsx(m.Item,{onClick:()=>f("price",null,"lowFirst"),children:"Precio menor a mayor"}),e.jsx(m.Item,{onClick:()=>f("price",null,"highFirst"),children:"Precio mayor a menor"}),e.jsx(m.Item,{onClick:()=>f("name"),children:"Nombre"})]})]}),t==="stock"||t==="guardapolvos"||t==="busqueda"?e.jsxs(R,{onClick:I,variant:"light",style:{marginLeft:"auto",backgroundColor:"#fff",color:"#000",padding:"5px 25px",fontSize:"16px"},children:["Filtrar ",e.jsx("i",{className:"bi bi-filter",style:{padding:"5px 5px"}})]}):null,e.jsxs(b,{show:C,onHide:N,children:[e.jsx(b.Header,{closeButton:!0,children:e.jsx(b.Title,{children:"Filtrar"})}),e.jsx(b.Body,{children:e.jsx(X,{sortGuardapolvos:f,resetProducts:P})})]})]}),h!==""?e.jsx(Y,{resetProducts:P,choosenSize:h,choosenTable:k}):null]})},ee=({type:s})=>{const t=_();return e.jsxs(S,{className:"px-3 px-lg-3 my-3 breadcrumb-container",children:[e.jsx(S.Item,{onClick:()=>t("/"),children:"Inicio"}),e.jsxs(S.Item,{active:!0,children:[" ",s," "]})]})},se=()=>{const s=v(),t=j(c=>c.filter.previusSearch.toLowerCase()),n={margin:"200px 0px"},r=`no hay resultados para "${t}"`;return e.jsx("div",{style:n,children:s.pathname.replace("/","")==="busqueda"?r:"no hay guardapolvos que cumplan con tu busqueda..."})},te=({guardapolvos:s,table:t})=>e.jsx("div",{className:"products-container",children:s.length===0?e.jsx(se,{}):s==null?void 0:s.map((n,r)=>e.jsx(A,{className:"producto",to:`/${t}/${n.id}`,children:e.jsxs("div",{className:"a-contenedor-productos",children:[(t==="stock"||t==="guardapolvos"||t==="busqueda")&&n.amount===0?e.jsx("div",{className:"badge bg-dark text-white position-absolute tag-stock",children:"Sin Stock"}):null,e.jsx("div",{className:"contenedor-imgs",children:e.jsxs("div",{className:"contenedor-img-carrito",children:[e.jsx("img",{src:n.img,alt:"Imagen Guardapolvo de pacuco",className:"section-img-carrito",loading:"lazy"}),e.jsx("img",{src:n.img2,alt:"Imagen Guardapolvo de pacuco",className:"section-img-carrito-hover",loading:"lazy"})]})}),e.jsxs("div",{className:"div-contenedor-detalles",children:[e.jsx("p",{className:"nombreProducto",children:n.name}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("p",{className:"precioProducto",children:["$ ",K(n.price)]}),n.table==="stock"&&n.amount!==0?e.jsxs("p",{style:{marginLeft:"auto"},children:[n.amount," en stock"]}):null]})]})]})},r))}),ne=({guardapolvos:s})=>{const t=v(),n=j(a=>a.filter.previusSearch.toLowerCase()),r={color:"#777",marginLeft:"10px"};return e.jsx("div",{children:t.pathname.replace("/","")==="busqueda"?e.jsxs("div",{style:r,children:[" ",s.length," resultado",s.length===1?"":"s",' para "',n,'"']}):e.jsxs("div",{style:r,children:[" ",s.length," resultado",s.length===1?"":"s"]})})},ae=({guardapolvos:s,table:t})=>{const n=v(),[r,a]=d.useState(!1),[c,x]=d.useState(1),l=12,i=s.length,p=Math.ceil(i/l);d.useEffect(()=>{x(1)},[n]);const h=u=>{x(u)},k=()=>{const u=(c-1)*l,C=u+l;return s.slice(u,C)};return e.jsxs("div",{className:"margin-auto width-90",children:[e.jsx(ee,{type:t.replace("_"," ")}),e.jsx(Z,{setIsLoading:a,table:t,guardapolvosList:s}),e.jsx(ne,{guardapolvos:s}),e.jsx(Q,{}),r?e.jsx(U,{}):e.jsxs("div",{children:[e.jsx(te,{guardapolvos:k(),table:t}),e.jsx(V,{currentPage:c,totalPages:p,onPageChange:h})]})]})};export{ae as default};
