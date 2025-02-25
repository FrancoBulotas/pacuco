import{z as G,r as o,i as u,j as n,k as d,B as Ee,l as ke,D as Be,E as $e,n as W,G as Ae,H as De,J as K,M as Oe,K as Fe,F as J,O as Ie,P as be,Q as He,T as xe}from"./index-BdOahZEp.js";var p;function _(e){if((!p&&p!==0||e)&&G){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}const Q=o.forwardRef(({className:e,bsPrefix:t,as:l="div",...r},s)=>(t=u(t,"modal-body"),n.jsx(l,{ref:s,className:d(e,t),...r})));Q.displayName="ModalBody";const E=o.forwardRef(({bsPrefix:e,className:t,contentClassName:l,centered:r,size:s,fullscreen:i,children:w,scrollable:R,...v},N)=>{e=u(e,"modal");const f=`${e}-dialog`,S=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return n.jsx("div",{...v,ref:N,className:d(f,t,s&&`${e}-${s}`,r&&`${f}-centered`,R&&`${f}-scrollable`,i&&S),children:n.jsx("div",{className:d(`${e}-content`,l),children:w})})});E.displayName="ModalDialog";const q=o.forwardRef(({className:e,bsPrefix:t,as:l="div",...r},s)=>(t=u(t,"modal-footer"),n.jsx(l,{ref:s,className:d(e,t),...r})));q.displayName="ModalFooter";const V=o.forwardRef(({bsPrefix:e,className:t,closeLabel:l="Close",closeButton:r=!1,...s},i)=>(e=u(e,"modal-header"),n.jsx(Ee,{ref:i,...s,className:d(t,e),closeLabel:l,closeButton:r})));V.displayName="ModalHeader";const Ue=ke("h4"),X=o.forwardRef(({className:e,bsPrefix:t,as:l=Ue,...r},s)=>(t=u(t,"modal-title"),n.jsx(l,{ref:s,className:d(e,t),...r})));X.displayName="ModalTitle";function ze(e){return n.jsx(J,{...e,timeout:null})}function Le(e){return n.jsx(J,{...e,timeout:null})}const Y=o.forwardRef(({bsPrefix:e,className:t,style:l,dialogClassName:r,contentClassName:s,children:i,dialogAs:w=E,"data-bs-theme":R,"aria-labelledby":v,"aria-describedby":N,"aria-label":f,show:S=!1,animation:m=!0,backdrop:M=!0,keyboard:Z=!0,onEscapeKeyDown:k,onShow:P,onHide:y,container:ee,autoFocus:ae=!0,enforceFocus:te=!0,restoreFocus:oe=!0,restoreFocusOptions:ne,onEntered:se,onExit:B,onExiting:le,onEnter:$,onEntering:A,onExited:D,backdropClassName:O,manager:F,...re},de)=>{const[ie,ce]=o.useState({}),[ue,I]=o.useState(!1),T=o.useRef(!1),j=o.useRef(!1),g=o.useRef(null),[h,fe]=Be(),me=$e(de,fe),b=W(y),ge=Ae();e=u(e,"modal");const he=o.useMemo(()=>({onHide:b}),[b]);function H(){return F||Ie({isRTL:ge})}function x(a){if(!G)return;const c=H().getScrollbarWidth()>0,L=a.scrollHeight>be(a).documentElement.clientHeight;ce({paddingRight:c&&!L?_():void 0,paddingLeft:!c&&L?_():void 0})}const C=W(()=>{h&&x(h.dialog)});De(()=>{K(window,"resize",C),g.current==null||g.current()});const Me=()=>{T.current=!0},ye=a=>{T.current&&h&&a.target===h.dialog&&(j.current=!0),T.current=!1},U=()=>{I(!0),g.current=xe(h.dialog,()=>{I(!1)})},pe=a=>{a.target===a.currentTarget&&U()},we=a=>{if(M==="static"){pe(a);return}if(j.current||a.target!==a.currentTarget){j.current=!1;return}y==null||y()},Re=a=>{Z?k==null||k(a):(a.preventDefault(),M==="static"&&U())},ve=(a,c)=>{a&&x(a),$==null||$(a,c)},Ne=a=>{g.current==null||g.current(),B==null||B(a)},Se=(a,c)=>{A==null||A(a,c),He(window,"resize",C)},Te=a=>{a&&(a.style.display=""),D==null||D(a),K(window,"resize",C)},je=o.useCallback(a=>n.jsx("div",{...a,className:d(`${e}-backdrop`,O,!m&&"show")}),[m,O,e]),z={...l,...ie};z.display="block";const Ce=a=>n.jsx("div",{role:"dialog",...a,style:z,className:d(t,e,ue&&`${e}-static`,!m&&"show"),onClick:M?we:void 0,onMouseUp:ye,"data-bs-theme":R,"aria-label":f,"aria-labelledby":v,"aria-describedby":N,children:n.jsx(w,{...re,onMouseDown:Me,className:r,contentClassName:s,children:i})});return n.jsx(Oe.Provider,{value:he,children:n.jsx(Fe,{show:S,ref:me,backdrop:M,container:ee,keyboard:!0,autoFocus:ae,enforceFocus:te,restoreFocus:oe,restoreFocusOptions:ne,onEscapeKeyDown:Re,onShow:P,onHide:y,onEnter:ve,onEntering:Se,onEntered:se,onExit:Ne,onExiting:le,onExited:Te,manager:H(),transition:m?ze:void 0,backdropTransition:m?Le:void 0,renderBackdrop:je,renderDialog:Ce})})});Y.displayName="Modal";const Ke=Object.assign(Y,{Body:Q,Header:V,Title:X,Footer:q,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Ke as M};
