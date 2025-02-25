import{r as j,t as D,j as e,v as H,a as w,ap as z,u as R,aq as P,E as L,ar as C,as as B,b as v,L as U,at as E,au as F,W as M,ab as k,av as W,aw as A,V as J}from"./index-C-7yXWC5.js";import{B as N}from"./breadcrum-DfidE9Rl.js";import{P as X}from"./PaginationProductos-BH63QI-7.js";const T=j.forwardRef(({bsPrefix:t,size:i,vertical:n=!1,className:s,role:l="group",as:a="div",...d},x)=>{const c=D(t,"btn-group");let h=c;return n&&(h=`${c}-vertical`),e.jsx(a,{...d,ref:x,role:l,className:H(s,h,i&&`${c}-${i}`)})});T.displayName="ButtonGroup";const Y=({updateQueryParams:t,custom:i,guardapolvos:n})=>{const s=w(),l={border:"1px solid #e0e0e0",padding:"20px",borderRadius:"6px",marginBottom:"5px"},a={padding:"0px",fontSize:"17px"},d={margin:"10px 0px",border:"1px solid #e0e0e0",width:"100%"},x={display:"flex",flexWrap:"wrap"},c={fontSize:"15px",backgroundColor:"#f1f1f1",display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"6px",padding:"20px",margin:"6px",width:"60px",height:"20px"},h={fontSize:"15px",backgroundColor:"#f1f1f1",display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"6px",padding:"10px",margin:"6px",width:"80px"},u=m=>{const b=n.map(y=>y.description[m]);return[...new Set(b)]};return u("base"),u("detalle"),u("vivos"),u("bolsillos"),e.jsxs(e.Fragment,{children:[!i&&e.jsxs("div",{style:l,children:[e.jsx("h4",{style:a,children:"Talle"}),e.jsx("div",{style:d}),e.jsxs("div",{style:x,children:[e.jsx("button",{style:c,onClick:()=>s(t("size","00")),children:"00 "}),e.jsx("button",{style:c,onClick:()=>s(t("size","0")),children:"0"}),e.jsx("button",{style:c,onClick:()=>s(t("size","1")),children:"1"}),e.jsx("button",{style:c,onClick:()=>s(t("size","2")),children:"2"}),e.jsx("button",{style:c,onClick:()=>s(t("size","3")),children:"3"}),e.jsx("button",{style:c,onClick:()=>s(t("size","4")),children:"4"}),e.jsx("button",{style:c,onClick:()=>s(t("size","5")),children:"5"})]})]}),e.jsxs("div",{style:l,children:[e.jsx("h4",{style:a,children:"Tipo"}),e.jsx("div",{style:d}),e.jsxs("div",{style:x,children:[e.jsx("button",{style:h,onClick:()=>s(t("table","nivel_inicial")),children:"Nivel Inicial"}),e.jsx("button",{style:h,onClick:()=>s(t("table","primaria")),children:"Primaria"}),e.jsx("button",{style:h,onClick:()=>s(t("table","stock")),children:"Stock"})]})]})]})},Z=({resetProducts:t,filters:i})=>{const n={position:"relative",backgroundColor:"#f1f1f1",margin:"5px",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center"},s={top:"-8px",left:"0px",padding:"4px 6px",border:"none"};return e.jsx("div",{style:{margin:"10px 25px",padding:"10px",border:"1px solid #f1f1f1",borderRadius:"6px",fontSize:"14px"},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center",children:[e.jsx("div",{children:"Filtros: "}),e.jsx("div",{className:"d-flex",style:{marginLeft:"6px"},children:Object.entries(i).map(([l,a],d)=>{if(a!=null){let x;return a=="asc"&&(x="precio menor a mayor"),a=="desc"&&(x="precio mayor a menor"),e.jsxs("div",{style:n,children:[e.jsx("div",{style:{padding:"8px 15px"},children:l==="sortByPrice"?x:a}),e.jsx("button",{onClick:()=>t(l),className:"badge bg-dark text-white position-absolute",style:s,children:"x"})]},d)}})}),e.jsx("div",{style:{marginRight:"auto"}})]})})},K=({setIsLoading:t,table:i,guardapolvosList:n})=>{const[s,l]=j.useState({}),[a,d]=j.useState(!1),x=w(),c=z(),h=R(),u=1e3,[m,b]=j.useState(!1),[y,g]=j.useState({size:null,table:null,sortByPrice:null,name:null}),$=window.location.href,r=new URL($),S=()=>b(!1),O=()=>{b(!0),G()};j.useEffect(()=>{const o=new URLSearchParams(c.search);l(o),r.searchParams.get("all")&&r.searchParams.get("table")&&(r.searchParams.delete("all"),window.location.href=r.toString()),r.searchParams.get("size")&&(r.searchParams.get("table")=="primaria"||r.searchParams.get("table")=="nivel_incial")&&(r.searchParams.delete("size"),window.location.href=r.toString()),g(f=>({...f,size:r.searchParams.get("size"),table:r.searchParams.get("table"),sortByPrice:r.searchParams.get("sortByPrice"),name:r.searchParams.get("name")}))},[c.search]);const _=o=>{S(),h(B({page:1,table:i})),o=="size"&&(g(p=>({...p,size:null})),r.searchParams.delete("size")),o=="table"&&(g(p=>({...p,size:null})),r.searchParams.delete("table"),r.searchParams.append("all",!0)),o=="sortByPrice"&&(g(p=>({...p,sortByPrice:null})),r.searchParams.delete("sortByPrice")),o=="name"&&(g(p=>({...p,name:null})),r.searchParams.delete("name"));let f=y;f[o]=null,Object.values(f).every(p=>p===null)&&o!="table"&&r.searchParams.append("all",!0),window.location.href=r.toString()},I=(o,f)=>(s.set(o,f),`${c.pathname}?${s.toString()}`),q=(o,f)=>(S(),t(!0),h(B({page:1,table:i.replace(" ","_")})),s.set(o,f),setTimeout(async()=>{t(!1)},u),`${c.pathname}?${s.toString()}`),G=()=>{s&&(s.get("table")==="primaria"||s.get("table")==="nivel_inicial"?d(!0):d(!1))};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",height:"40px",marginLeft:"10px",marginRight:"10px",marginBottom:"5px",paddingTop:"5px"},children:[e.jsxs(P,{as:T,className:"dropdown-custom",children:[e.jsx(L,{variant:"light",style:{backgroundColor:"#fff",color:"#000",padding:"5px 25px",fontSize:"16px"},children:"Ordenar"}),e.jsx(P.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic",style:{backgroundColor:"#fff",color:"#000",padding:"5px 25px"}}),e.jsxs(P.Menu,{children:[e.jsx(P.Item,{onClick:()=>x(I("sortByPrice","asc")),children:"Precio menor a mayor"}),e.jsx(P.Item,{onClick:()=>x(I("sortByPrice","desc")),children:"Precio mayor a menor"})]})]}),e.jsxs(L,{onClick:O,variant:"light",style:{marginLeft:"auto",backgroundColor:"#fff",color:"#000",padding:"5px 25px",fontSize:"16px"},children:["Filtrar ",e.jsx("i",{className:"bi bi-filter",style:{padding:"5px 5px"}})]}),e.jsxs(C,{show:m,onHide:S,children:[e.jsx(C.Header,{closeButton:!0,children:e.jsx(C.Title,{children:"Filtrar"})}),e.jsx(C.Body,{children:e.jsx(Y,{updateQueryParams:q,custom:a,guardapolvos:n})})]})]}),Object.values(y).every(o=>o===null)?null:e.jsx(Z,{resetProducts:_,filters:y})]})},V=({type:t})=>{const i=w();return e.jsxs(N,{className:"px-3 px-lg-3 my-3 breadcrumb-container",children:[e.jsx(N.Item,{onClick:()=>i("/"),children:"Inicio"}),e.jsxs(N.Item,{active:!0,children:[" ",t," "]})]})},Q=()=>{const t=z(),i=v(a=>a.filter.previusSearch.toLowerCase()),n={margin:"200px 0px"},s=`no hay resultados para "${i}"`;return e.jsx("div",{style:n,children:t.pathname.replace("/","")==="busqueda"?s:"no hay guardapolvos que cumplan con tu busqueda..."})},ee=({guardapolvos:t,table:i})=>e.jsx("div",{className:"products-container",children:(t==null?void 0:t.length)===0?e.jsx(Q,{}):t==null?void 0:t.map((n,s)=>e.jsx(U,{className:"producto",to:`/products?id=${n.id}`,children:e.jsxs("div",{className:"a-contenedor-productos",children:[(i==="stock"||i==="guardapolvos"||i==="busqueda")&&n.amount===0?e.jsx("div",{className:"badge bg-dark text-white position-absolute tag-stock",children:"Sin Stock"}):null,e.jsx(E,{guardapolvo:n,navigateTo:i,loadGuardapolvos:!0}),e.jsx("div",{className:"contenedor-imgs",children:e.jsxs("div",{className:"contenedor-img-carrito",style:{marginTop:"20px"},children:[e.jsx(F,{src:n.img,alt:n.description.general,className:"section-img-carrito"}),e.jsx(F,{src:n.img2,alt:n.description.general,className:"section-img-carrito-hover",secondImg:!0})]})}),e.jsxs("div",{className:"div-contenedor-detalles",children:[e.jsx("p",{className:"nombreProducto",children:n.name}),e.jsx("div",{className:"d-flex",style:{flexDirection:"column"},children:M(n)?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-decoration-line-through",style:{marginRight:"8px",color:"gray"},children:["$ ",k(n.price)]}),e.jsxs("span",{className:"porcentajeProductoOff",children:[W(n),"% OFF"]})]}),e.jsxs("span",{className:"precioProducto",children:["$",k(n.discountPrice)]})]}):e.jsxs("p",{className:"precioProducto",children:["$ ",k(n.price)]})}),e.jsx("div",{children:n.table==="stock"&&n.amount!==0?e.jsxs("p",{style:{marginLeft:"auto"},children:[n.amount," en stock"]}):null})]})]})},s))}),te=({guardapolvos:t})=>{const i=z(),n=v(l=>l.filter.previusSearch.toLowerCase()),s={color:"#777",marginLeft:"10px"};return e.jsx("div",{children:i.pathname.replace("/","")==="busqueda"?e.jsxs("div",{style:s,children:[" ",t==null?void 0:t.length," resultado",(t==null?void 0:t.length)===1?"":"s",' para "',n,'"']}):e.jsxs("div",{style:s,children:[" ",t==null?void 0:t.length," resultado",(t==null?void 0:t.length)===1?"":"s"]})})},ce=({guardapolvos:t,table:i})=>{const n=R(),[s,l]=j.useState(!1),a=v(m=>m.filter.choosenPage[i.replace(" ","_")]),d=20,x=t==null?void 0:t.length,c=Math.ceil(x/d),h=m=>{n(B({page:m,table:i.replace(" ","_")}))},u=()=>{const m=(a-1)*d,b=m+d;return t==null?void 0:t.slice(m,b)};return e.jsxs("div",{className:"margin-auto width-90",children:[e.jsx(V,{type:i.replace("_"," ")}),e.jsx(K,{setIsLoading:l,table:i,guardapolvosList:t}),e.jsx(te,{guardapolvos:t}),e.jsx(A,{}),s?e.jsx(J,{}):e.jsxs("div",{children:[e.jsx(ee,{guardapolvos:u(),table:i}),e.jsx(X,{currentPage:a,totalPages:c,onPageChange:h})]})]})};export{ce as default};
