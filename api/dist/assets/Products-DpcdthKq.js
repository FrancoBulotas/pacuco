import{r as u,t as E,j as e,v as M,ap as k,b as f,u as G,aq as b,ar as I,as as W,at as B,au as m,E as L,av as v,aw as A,ax as X,ay as _,az as J,a as K,L as Q,aA as T,X as U,ab as C,aB as V,aC as Y,W as Z}from"./index-C4dFJDIu.js";import{B as S}from"./breadcrum-F1B0Mu4U.js";import{P as ee}from"./PaginationProductos-4YSOPtUO.js";const q=u.forwardRef(({bsPrefix:t,size:s,vertical:n=!1,className:r,role:a="group",as:c="div",...l},d)=>{const i=E(t,"btn-group");let p=i;return n&&(p=`${i}-vertical`),e.jsx(c,{...l,ref:d,role:a,className:M(r,p,s&&`${i}-${s}`)})});q.displayName="ButtonGroup";const se=({sortGuardapolvos:t,resetProducts:s})=>{k().pathname.replace("/","");const r={backgroundColor:"#f1f1f1",display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"6px",padding:"20px",margin:"6px",width:"60px",height:"20px"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{border:"1px solid #e0e0e0",padding:"20px",borderRadius:"6px",marginBottom:"10px"},children:[e.jsx("h4",{style:{padding:"0px"},children:"Talle"}),e.jsx("div",{style:{margin:"20px 0px",border:"1px solid #e0e0e0",width:"100%"}}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx("button",{style:r,onClick:()=>t("size","00"),children:"00 "}),e.jsx("button",{style:r,onClick:()=>t("size","0"),children:"0"}),e.jsx("button",{style:r,onClick:()=>t("size","1"),children:"1"}),e.jsx("button",{style:r,onClick:()=>t("size","2"),children:"2"}),e.jsx("button",{style:r,onClick:()=>t("size","3"),children:"3"}),e.jsx("button",{style:r,onClick:()=>t("size","4"),children:"4"}),e.jsx("button",{style:r,onClick:()=>t("size","5"),children:"5"})]})]}),e.jsx("button",{style:{marginTop:"20px"},className:"btn btn-dark",onClick:()=>s(),children:"Borrar filtros"})]})},te=({resetProducts:t,choosenSize:s,choosenTable:n})=>{const r={position:"relative",backgroundColor:"#f1f1f1",margin:"5px",borderRadius:"6px"},a={top:"-8px",left:"0px",padding:"4px 6px",border:"none"};return e.jsx("div",{style:{margin:"10px 25px",padding:"10px",border:"1px solid #f1f1f1",borderRadius:"6px",fontSize:"14px"},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center",children:[e.jsx("div",{children:"Filtros: "}),e.jsxs("div",{className:"d-flex",style:{marginLeft:"6px"},children:[s!==""&&e.jsxs("div",{style:r,children:[e.jsx("div",{style:{padding:"8px 15px"},children:s}),e.jsx("button",{onClick:()=>t(),className:"badge bg-dark text-white position-absolute",style:a,children:"x"})]}),n!==""&&e.jsxs("div",{style:r,children:[e.jsx("div",{style:{padding:"8px 15px"},children:n}),e.jsx("button",{onClick:()=>t(),className:"badge bg-dark text-white position-absolute",style:a,children:"x"})]})]}),e.jsx("button",{style:{marginLeft:"auto",fontSize:"14px"},className:"btn btn-light",onClick:()=>t(),children:"Borrar filtros"})]})})},ne=({setIsLoading:t,table:s,guardapolvosList:n})=>{const[r,a]=u.useState(n),c=f(o=>o.guardapolvos.filtredStatic),l=f(o=>o.guardapolvos.all),d=u.useRef(n),i=G(),p=1e3,h=f(o=>o.filter.choosenSize),[x,g]=u.useState(""),[$,P]=u.useState(!1),N=()=>P(!1),D=()=>P(!0);u.useEffect(()=>{h!==""&&j("size",h),F()},[]);const F=()=>{s==="stock"&&(d.current=l.filter(o=>o.table==="stock")),s==="guardapolvos"&&(d.current=l)},j=(o,y=null,H=null,z=null)=>{if(N(),t(!0),o==="price")i(A(n,s,H));else if(o==="name")i(X(r,s));else if(o==="size"&&s==="busqueda"){i(b(y));const O=c.filter(R=>R.table!=="stock"||R.size===y);i(I(O))}else o==="size"?(i(b(y)),i(W(r,s,y))):o==="table"&&(g(z),i(_(d.current,s,z)));i(B({page:1,table:s})),setTimeout(async()=>{t(!1)},p)},w=()=>{N(),i(B({page:1,table:s})),s==="busqueda"?(i(I(c)),i(b("")),g("")):(i(J(s,d.current)),i(b("")),a(n)),F()};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",height:"40px",marginLeft:"10px",marginRight:"10px",marginBottom:"5px",paddingTop:"5px"},children:[e.jsxs(m,{as:q,className:"dropdown-custom",children:[e.jsx(L,{variant:"light",style:{backgroundColor:"#fff",color:"#000",padding:"5px 25px",fontSize:"16px"},children:"Ordenar"}),e.jsx(m.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic",style:{backgroundColor:"#fff",color:"#000",padding:"5px 25px"}}),e.jsxs(m.Menu,{children:[e.jsx(m.Item,{onClick:()=>j("price",null,"lowFirst"),children:"Precio menor a mayor"}),e.jsx(m.Item,{onClick:()=>j("price",null,"highFirst"),children:"Precio mayor a menor"}),e.jsx(m.Item,{onClick:()=>j("name"),children:"Nombre"})]})]}),s==="stock"||s==="guardapolvos"||s==="busqueda"?e.jsxs(L,{onClick:D,variant:"light",style:{marginLeft:"auto",backgroundColor:"#fff",color:"#000",padding:"5px 25px",fontSize:"16px"},children:["Filtrar ",e.jsx("i",{className:"bi bi-filter",style:{padding:"5px 5px"}})]}):null,e.jsxs(v,{show:$,onHide:N,children:[e.jsx(v.Header,{closeButton:!0,children:e.jsx(v.Title,{children:"Filtrar"})}),e.jsx(v.Body,{children:e.jsx(se,{sortGuardapolvos:j,resetProducts:w})})]})]}),h!==""?e.jsx(te,{resetProducts:w,choosenSize:h,choosenTable:x}):null]})},re=({type:t})=>{const s=K();return e.jsxs(S,{className:"px-3 px-lg-3 my-3 breadcrumb-container",children:[e.jsx(S.Item,{onClick:()=>s("/"),children:"Inicio"}),e.jsxs(S.Item,{active:!0,children:[" ",t," "]})]})},ie=()=>{const t=k(),s=f(c=>c.filter.previusSearch.toLowerCase()),n={margin:"200px 0px"},r=`no hay resultados para "${s}"`;return e.jsx("div",{style:n,children:t.pathname.replace("/","")==="busqueda"?r:"no hay guardapolvos que cumplan con tu busqueda..."})},oe=({guardapolvos:t,table:s})=>e.jsx("div",{className:"products-container",children:t.length===0?e.jsx(ie,{}):t==null?void 0:t.map((n,r)=>e.jsx(Q,{className:"producto",to:`/${s}/${n.id}`,children:e.jsxs("div",{className:"a-contenedor-productos",children:[(s==="stock"||s==="guardapolvos"||s==="busqueda")&&n.amount===0?e.jsx("div",{className:"badge bg-dark text-white position-absolute tag-stock",children:"Sin Stock"}):null,e.jsx("div",{className:"contenedor-imgs",children:e.jsxs("div",{className:"contenedor-img-carrito",children:[e.jsx(T,{src:n.img,alt:n.description.general,className:"section-img-carrito"}),e.jsx(T,{src:n.img2,alt:n.description.general,className:"section-img-carrito-hover",secondImg:!0})]})}),e.jsxs("div",{className:"div-contenedor-detalles",children:[e.jsx("p",{className:"nombreProducto",children:n.name}),e.jsx("div",{className:"d-flex",style:{flexDirection:"column"},children:U(n)?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-decoration-line-through",style:{marginRight:"8px",color:"gray"},children:["$ ",C(n.price)]}),e.jsxs("span",{className:"porcentajeProductoOff",children:[V(n),"% OFF"]})]}),e.jsxs("span",{className:"precioProducto",children:["$",C(n.discountPrice)]})]}):e.jsxs("p",{className:"precioProducto",children:["$ ",C(n.price)]})}),e.jsx("div",{children:n.table==="stock"&&n.amount!==0?e.jsxs("p",{style:{marginLeft:"auto"},children:[n.amount," en stock"]}):null})]})]})},r))}),ae=({guardapolvos:t})=>{const s=k(),n=f(a=>a.filter.previusSearch.toLowerCase()),r={color:"#777",marginLeft:"10px"};return e.jsx("div",{children:s.pathname.replace("/","")==="busqueda"?e.jsxs("div",{style:r,children:[" ",t.length," resultado",t.length===1?"":"s",' para "',n,'"']}):e.jsxs("div",{style:r,children:[" ",t.length," resultado",t.length===1?"":"s"]})})},xe=({guardapolvos:t,table:s})=>{k();const n=G(),[r,a]=u.useState(!1),c=f(x=>x.filter.choosenPage[s]),l=20,d=t.length,i=Math.ceil(d/l),p=x=>{n(B({page:x,table:s}))},h=()=>{const x=(c-1)*l,g=x+l;return t.slice(x,g)};return e.jsxs("div",{className:"margin-auto width-90",children:[e.jsx(re,{type:s.replace("_"," ")}),e.jsx(ne,{setIsLoading:a,table:s,guardapolvosList:t}),e.jsx(ae,{guardapolvos:t}),e.jsx(Y,{}),r?e.jsx(Z,{}):e.jsxs("div",{children:[e.jsx(oe,{guardapolvos:h(),table:s}),e.jsx(ee,{currentPage:c,totalPages:i,onPageChange:p})]})]})};export{xe as default};
