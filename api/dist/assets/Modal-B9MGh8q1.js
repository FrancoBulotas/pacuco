import{af as q,r as o,t as u,j as n,v as d,ag as Ee,ah as ke,f as Be,h as $e,e as W,w as Ae,ai as De,aj as _,ak as Oe,al as Fe,z as G,am as Ie,o as be,an as xe,ao as He}from"./index-Bql0lORA.js";var p;function K(e){if((!p&&p!==0||e)&&q){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}const J=o.forwardRef(({className:e,bsPrefix:t,as:l="div",...r},s)=>(t=u(t,"modal-body"),n.jsx(l,{ref:s,className:d(e,t),...r})));J.displayName="ModalBody";const E=o.forwardRef(({bsPrefix:e,className:t,contentClassName:l,centered:r,size:s,fullscreen:i,children:w,scrollable:R,...v},N)=>{e=u(e,"modal");const f=`${e}-dialog`,S=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return n.jsx("div",{...v,ref:N,className:d(f,t,s&&`${e}-${s}`,r&&`${f}-centered`,R&&`${f}-scrollable`,i&&S),children:n.jsx("div",{className:d(`${e}-content`,l),children:w})})});E.displayName="ModalDialog";const Q=o.forwardRef(({className:e,bsPrefix:t,as:l="div",...r},s)=>(t=u(t,"modal-footer"),n.jsx(l,{ref:s,className:d(e,t),...r})));Q.displayName="ModalFooter";const V=o.forwardRef(({bsPrefix:e,className:t,closeLabel:l="Close",closeButton:r=!1,...s},i)=>(e=u(e,"modal-header"),n.jsx(Ee,{ref:i,...s,className:d(t,e),closeLabel:l,closeButton:r})));V.displayName="ModalHeader";const Ue=ke("h4"),X=o.forwardRef(({className:e,bsPrefix:t,as:l=Ue,...r},s)=>(t=u(t,"modal-title"),n.jsx(l,{ref:s,className:d(e,t),...r})));X.displayName="ModalTitle";function ze(e){return n.jsx(G,{...e,timeout:null})}function Le(e){return n.jsx(G,{...e,timeout:null})}const Y=o.forwardRef(({bsPrefix:e,className:t,style:l,dialogClassName:r,contentClassName:s,children:i,dialogAs:w=E,"data-bs-theme":R,"aria-labelledby":v,"aria-describedby":N,"aria-label":f,show:S=!1,animation:m=!0,backdrop:y=!0,keyboard:Z=!0,onEscapeKeyDown:k,onShow:P,onHide:M,container:ee,autoFocus:ae=!0,enforceFocus:te=!0,restoreFocus:oe=!0,restoreFocusOptions:ne,onEntered:se,onExit:B,onExiting:le,onEnter:$,onEntering:A,onExited:D,backdropClassName:O,manager:F,...re},de)=>{const[ie,ce]=o.useState({}),[ue,I]=o.useState(!1),j=o.useRef(!1),C=o.useRef(!1),g=o.useRef(null),[h,fe]=Be(),me=$e(de,fe),b=W(M),ge=Ae();e=u(e,"modal");const he=o.useMemo(()=>({onHide:b}),[b]);function x(){return F||Ie({isRTL:ge})}function H(a){if(!q)return;const c=x().getScrollbarWidth()>0,L=a.scrollHeight>be(a).documentElement.clientHeight;ce({paddingRight:c&&!L?K():void 0,paddingLeft:!c&&L?K():void 0})}const T=W(()=>{h&&H(h.dialog)});De(()=>{_(window,"resize",T),g.current==null||g.current()});const ye=()=>{j.current=!0},Me=a=>{j.current&&h&&a.target===h.dialog&&(C.current=!0),j.current=!1},U=()=>{I(!0),g.current=He(h.dialog,()=>{I(!1)})},pe=a=>{a.target===a.currentTarget&&U()},we=a=>{if(y==="static"){pe(a);return}if(C.current||a.target!==a.currentTarget){C.current=!1;return}M==null||M()},Re=a=>{Z?k==null||k(a):(a.preventDefault(),y==="static"&&U())},ve=(a,c)=>{a&&H(a),$==null||$(a,c)},Ne=a=>{g.current==null||g.current(),B==null||B(a)},Se=(a,c)=>{A==null||A(a,c),xe(window,"resize",T)},je=a=>{a&&(a.style.display=""),D==null||D(a),_(window,"resize",T)},Ce=o.useCallback(a=>n.jsx("div",{...a,className:d(`${e}-backdrop`,O,!m&&"show")}),[m,O,e]),z={...l,...ie};z.display="block";const Te=a=>n.jsx("div",{role:"dialog",...a,style:z,className:d(t,e,ue&&`${e}-static`,!m&&"show"),onClick:y?we:void 0,onMouseUp:Me,"data-bs-theme":R,"aria-label":f,"aria-labelledby":v,"aria-describedby":N,children:n.jsx(w,{...re,onMouseDown:ye,className:r,contentClassName:s,children:i})});return n.jsx(Oe.Provider,{value:he,children:n.jsx(Fe,{show:S,ref:me,backdrop:y,container:ee,keyboard:!0,autoFocus:ae,enforceFocus:te,restoreFocus:oe,restoreFocusOptions:ne,onEscapeKeyDown:Re,onShow:P,onHide:M,onEnter:ve,onEntering:Se,onEntered:se,onExit:Ne,onExiting:le,onExited:je,manager:x(),transition:m?ze:void 0,backdropTransition:m?Le:void 0,renderBackdrop:Ce,renderDialog:Te})})});Y.displayName="Modal";const _e=Object.assign(Y,{Body:J,Header:V,Title:X,Footer:Q,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{_e as M};
