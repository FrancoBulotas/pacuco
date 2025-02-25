import{o as ie,s as T,f as ae,b as le,l as ee}from"./TransitionWrapper-5ppP3hMQ.js";import{b as U,a as te,c as ye,d as ne}from"./Button-CozBTO4j.js";import{r as i,j as u,C as Ce}from"./index-B7gCKMKK.js";import{u as Te}from"./useMounted-CA1dmZjP.js";import{u as ke}from"./useWillUnmount-DDVl-taq.js";import{a as m}from"./Anchor-3CuPqyzV.js";import{N as Oe}from"./NoopTransition-DVFl9h6R.js";import{C as je}from"./divWithClassName-C082gbAY.js";import{d as we,q as R}from"./DataKey-COGXBUcQ.js";function G(e){e===void 0&&(e=ie());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Me(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const re=we("modal-open");class X{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Me(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(T(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(re,""),T(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(re),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const V=(e,t)=>ae?e==null?(t||ie()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function Le(e,t){const n=U(),[r,o]=i.useState(()=>V(e,n==null?void 0:n.document));if(!r){const s=V(e);s&&o(s)}return i.useEffect(()=>{},[t,r]),i.useEffect(()=>{const s=V(e);s!==r&&o(s)},[e,r]),r}function Ne(e){return e.code==="Escape"||e.keyCode===27}function Ae(){const e=i.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const Be=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Se(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function De(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:s,onExited:f,addEndListener:h,children:c}=e,d=Se(e,Be);const{major:E}=Ae(),C=E>=19?c.props.ref:c.ref,p=i.useRef(null),k=le(p,typeof c=="function"?null:C),g=v=>b=>{v&&p.current&&v(p.current,b)},L=i.useCallback(g(t),[t]),N=i.useCallback(g(n),[n]),A=i.useCallback(g(r),[r]),B=i.useCallback(g(o),[o]),O=i.useCallback(g(s),[s]),S=i.useCallback(g(f),[f]),D=i.useCallback(g(h),[h]);return Object.assign({},d,{nodeRef:p},t&&{onEnter:L},n&&{onEntering:N},r&&{onEntered:A},o&&{onExit:B},s&&{onExiting:O},f&&{onExited:S},h&&{addEndListener:D},{children:typeof c=="function"?(v,b)=>c(v,Object.assign({},b,{ref:k})):i.cloneElement(c,{ref:k})})}const We=["component"];function Fe(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Ie=i.forwardRef((e,t)=>{let{component:n}=e,r=Fe(e,We);const o=De(r);return u.jsx(n,Object.assign({ref:t},o))});function Pe({in:e,onTransition:t}){const n=i.useRef(null),r=i.useRef(!0),o=m(t);return te(()=>{if(!n.current)return;let s=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[e,o]),te(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function _e({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[s,f]=i.useState(!t);t&&s&&f(!1);const h=Pe({in:!!t,onTransition:d=>{const E=()=>{d.isStale()||(d.in?r==null||r(d.element,d.initial):(f(!0),n==null||n(d.element)))};Promise.resolve(o(d)).then(E,C=>{throw d.in||f(!0),C})}}),c=le(h,e.ref);return s&&!t?null:i.cloneElement(e,{ref:c})}function oe(e,t,n){return e?u.jsx(Ie,Object.assign({},n,{component:e})):t?u.jsx(_e,Object.assign({},n,{transition:t})):u.jsx(Oe,Object.assign({},n))}const Ke=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Ge(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let H;function Ve(e){return H||(H=new X({ownerDocument:e==null?void 0:e.document})),H}function He(e){const t=U(),n=e||Ve(t),r=i.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:i.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:i.useCallback(o=>{r.current.backdrop=o},[])})}const ce=i.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:s,children:f,backdrop:h=!0,keyboard:c=!0,onBackdropClick:d,onEscapeKeyDown:E,transition:C,runTransition:p,backdropTransition:k,runBackdropTransition:g,autoFocus:L=!0,enforceFocus:N=!0,restoreFocus:A=!0,restoreFocusOptions:B,renderDialog:O,renderBackdrop:S=a=>u.jsx("div",Object.assign({},a)),manager:D,container:v,onShow:b,onHide:Y=()=>{},onExit:de,onExited:q,onExiting:ue,onEnter:fe,onEntering:he,onEntered:ge}=e,me=Ge(e,Ke);const x=U(),j=Le(v),l=He(D),Ee=Te(),pe=ye(n),[W,z]=i.useState(!n),w=i.useRef(null);i.useImperativeHandle(t,()=>l,[l]),ae&&!pe&&n&&(w.current=G(x==null?void 0:x.document)),n&&W&&z(!1);const J=m(()=>{if(l.add(),P.current=ee(document,"keydown",xe),I.current=ee(document,"focus",()=>setTimeout(ve),!0),b&&b(),L){var a,Z;const K=G((a=(Z=l.dialog)==null?void 0:Z.ownerDocument)!=null?a:x==null?void 0:x.document);l.dialog&&K&&!ne(l.dialog,K)&&(w.current=K,l.dialog.focus())}}),F=m(()=>{if(l.remove(),P.current==null||P.current(),I.current==null||I.current(),A){var a;(a=w.current)==null||a.focus==null||a.focus(B),w.current=null}});i.useEffect(()=>{!n||!j||J()},[n,j,J]),i.useEffect(()=>{W&&F()},[W,F]),ke(()=>{F()});const ve=m(()=>{if(!N||!Ee()||!l.isTopModal())return;const a=G(x==null?void 0:x.document);l.dialog&&a&&!ne(l.dialog,a)&&l.dialog.focus()}),be=m(a=>{a.target===a.currentTarget&&(d==null||d(a),h===!0&&Y())}),xe=m(a=>{c&&Ne(a)&&l.isTopModal()&&(E==null||E(a),a.defaultPrevented||Y())}),I=i.useRef(),P=i.useRef(),Re=(...a)=>{z(!0),q==null||q(...a)};if(!j)return null;const Q=Object.assign({role:r,ref:l.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},me,{style:s,className:o,tabIndex:-1});let _=O?O(Q):u.jsx("div",Object.assign({},Q,{children:i.cloneElement(f,{role:"document"})}));_=oe(C,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:de,onExiting:ue,onExited:Re,onEnter:fe,onEntering:he,onEntered:ge,children:_});let M=null;return h&&(M=S({ref:l.setBackdropRef,onClick:be}),M=oe(k,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:M})),u.jsx(u.Fragment,{children:Ce.createPortal(u.jsxs(u.Fragment,{children:[M,_]}),j)})});ce.displayName="Modal";const st=Object.assign(ce,{Manager:X}),$e=i.createContext({onHide(){}}),it=i.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...s},f)=>{const h=i.useContext($e),c=m(()=>{h==null||h.onHide(),r==null||r()});return u.jsxs("div",{ref:f,...s,children:[o,n&&u.jsx(je,{"aria-label":e,variant:t,onClick:c})]})});function Ue(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Xe(e,t){e.classList?e.classList.add(t):Ue(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function se(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ye(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=se(e.className,t):e.setAttribute("class",se(e.className&&e.className.baseVal||"",t))}const y={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class qe extends X{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,T(n,{[t]:`${parseFloat(T(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],T(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Xe(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";R(n,y.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,t.scrollBarWidth)),R(n,y.STICKY_CONTENT).forEach(s=>this.adjustAndStore(o,s,-t.scrollBarWidth)),R(n,y.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(o,s,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Ye(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";R(n,y.FIXED_CONTENT).forEach(s=>this.restore(r,s)),R(n,y.STICKY_CONTENT).forEach(s=>this.restore(o,s)),R(n,y.NAVBAR_TOGGLER).forEach(s=>this.restore(o,s))}}let $;function at(e){return $||($=new qe(e)),$}export{it as A,st as B,$e as M,qe as a,at as g};
