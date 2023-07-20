"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[527],{683:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var o=n(689),r=n(87),a=n(184);function i(e){var t=e.movies,n=(0,o.TH)();return(0,a.jsx)(a.Fragment,{children:Array.isArray(t)?(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,o=e.title,i=e.name;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:o||i})},t)}))}):(0,a.jsx)("p",{children:"try agen"})})}},527:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var o=n(439),r=n(683),a=n(791),i=n(142);function s(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=n(433);function f(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var p=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(o&&(o+=" "),o+=t);return o},m=["theme","type"],v=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},E=function(e){return y(e)||h(e)?e:null},T=function(e){return(0,a.isValidElement)(e)||y(e)||h(e)||g(e)};function b(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(i):t,v=r?"".concat(n,"--").concat(i):n,g=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,a.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),a.createElement(a.Fragment,null,o)}}function O(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var C={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},_=function(e){var t=e.theme,n=e.type,o=l(e,m);return a.createElement("svg",u({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},I={info:function(e){return a.createElement(_,u({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(_,u({},e),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(_,u({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(_,u({},e),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,a.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,a.useState)([]),i=(0,o.Z)(r,2),s=i[0],c=i[1],f=(0,a.useRef)(null),p=(0,a.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},b=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function _(e){var t=e.containerId;!b.props.limit||t&&b.containerId!==t||(b.count-=b.queue.length,b.queue=[])}function L(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=b.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function x(e,t){var r=t.delay,i=t.staleId,s=l(t,v);if(T(e)&&!function(e){return!f.current||b.props.enableMultiContainer&&e.containerId!==b.props.containerId||p.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,d=s.updateId,m=s.data,_=b.props,x=function(){return L(c)},R=null==d;R&&b.count++;var j,P,k=u(u(u({},_),{},{style:_.toastStyle,key:b.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:x,isIn:!1,className:E(s.className||_.toastClassName),bodyClassName:E(s.bodyClassName||_.bodyClassName),progressClassName:E(s.progressClassName||_.progressClassName),autoClose:!s.isLoading&&(j=s.autoClose,P=_.autoClose,!1===j||g(j)&&j>0?j:P),deleteToast:function(){var e=O(p.get(c),"removed");p.delete(c),C.emit(4,e);var t=b.queue.length;if(b.count=null==c?b.count-b.displayedToast:b.count-1,b.count<0&&(b.count=0),t>0){var o=null==c?b.props.limit:1;if(1===t||1===o)b.displayedToast++,w();else{var r=o>t?t:o;b.displayedToast=r;for(var a=0;a<r;a++)w()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,i=null,s={theme:t,type:n};return!1===r||(h(r)?i=r(s):(0,a.isValidElement)(r)?i=(0,a.cloneElement)(r,s):y(r)||g(r)?i=r:o?i=I.spinner():function(e){return e in I}(n)&&(i=I[n](s))),i}(k),h(s.onOpen)&&(k.onOpen=s.onOpen),h(s.onClose)&&(k.onClose=s.onClose),k.closeButton=_.closeButton,!1===s.closeButton||T(s.closeButton)?k.closeButton=s.closeButton:!0===s.closeButton&&(k.closeButton=!T(_.closeButton)||_.closeButton);var M=e;(0,a.isValidElement)(e)&&!y(e.type)?M=(0,a.cloneElement)(e,{closeToast:x,toastProps:k,data:m}):h(e)&&(M=e({closeToast:x,toastProps:k,data:m})),_.limit&&_.limit>0&&b.count>_.limit&&R?b.queue.push({toastContent:M,toastProps:k,staleId:i}):g(r)?setTimeout((function(){N(M,k,i)}),r):N(M,k,i)}}function N(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),c((function(e){return[].concat((0,d.Z)(e),[o]).filter((function(e){return e!==n}))})),C.emit(4,O(r,null==r.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return b.containerId=e.containerId,C.cancelEmit(3).on(0,x).on(1,(function(e){return f.current&&L(e)})).on(5,_).emit(2,b),function(){p.clear(),C.emit(3,b)}}),[]),(0,a.useEffect)((function(){b.props=e,b.isToastActive=m,b.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:m}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,a.useState)(!1),n=(0,o.Z)(t,2),r=n[0],i=n[1],s=(0,a.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,a.useRef)(null),f=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,E=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=x(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?C():O()}}function O(){i(!0)}function C(){i(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&C(),f.x=w(t),f.y=x(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,a.useEffect)((function(){p.current=e})),(0,a.useEffect)((function(){return d.current&&d.current.addEventListener("d",O,{once:!0}),h(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&v&&(L.onMouseEnter=C,L.onMouseLeave=O),E&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:O,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:L}}function R(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,i=void 0===r?"default":r,c=e.hide,l=e.className,d=e.style,f=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,E=c||f&&0===m,T=u(u({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});f&&(T.transform="scaleX(".concat(m,")"));var b=p("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),O=h(l)?l({rtl:v,type:i,defaultClassName:b}):p(b,l);return a.createElement("div",s({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:O,style:T},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){g&&o()}))}var P=function(e){var t=N(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,f=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,E=e.className,T=e.style,b=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,_=e.progressStyle,I=e.updateId,L=e.role,w=e.progress,x=e.rtl,P=e.toastId,k=e.deleteToast,M=e.isIn,D=e.isLoading,A=e.iconOut,B=e.closeOnClick,S=e.theme,z=p("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":B}),Z=h(E)?E({rtl:x,position:y,type:f,defaultClassName:z}):p(z,E),F=!!w||!l,q={closeToast:v,type:f,theme:S},H=null;return!1===s||(H=h(s)?s(q):(0,a.isValidElement)(s)?(0,a.cloneElement)(s,q):R(q)),a.createElement(g,{isIn:M,done:k,position:y,preventExitTransition:o,nodeRef:r},a.createElement("div",u(u({id:P,onClick:d,className:Z},i),{},{style:T,ref:r}),a.createElement("div",u(u({},M&&{role:L}),{},{className:h(b)?b({type:f}):p("Toastify__toast-body",b),style:O}),null!=A&&a.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},A),a.createElement("div",null,c)),H,a.createElement(j,u(u({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:x,theme:S,delay:l,isRunning:n,isIn:M,closeToast:v,hide:m,type:f,style:_,className:C,controlledProgress:F,progress:w||0}))))},k=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},M=b(k("bounce",!0)),D=(b(k("slide",!0)),b(k("zoom")),b(k("flip")),(0,a.forwardRef)((function(e,t){var n=L(e),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,l=e.rtl,d=e.containerId;function f(e){var t=p("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(s)?s({position:e,rtl:l,defaultClassName:t}):p(t,E(s))}return(0,a.useEffect)((function(){t&&(t.current=r.current)}),[]),a.createElement("div",{ref:r,className:"Toastify",id:d},o((function(e,t){var n=t.length?u({},c):u(u({},c),{},{pointerEvents:"none"});return a.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return a.createElement(P,u(u({},r),{},{isIn:i(r.toastId),style:u(u({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:M,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,B=new Map,S=[],z=1;function Z(){return""+z++}function F(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:Z()}function q(e,t){return B.size>0?C.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function H(e,t){return u(u({},t),{},{type:t&&t.type||e,toastId:F(t)})}function Q(e){return function(t,n){return q(t,H(e,n))}}function V(e,t){return q(e,H("default",t))}V.loading=function(e,t){return q(e,H("default",u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=y(r)?V.loading(r,n):V.loading(r.render,u(u({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var a=u(u(u({type:e},s),n),{},{data:r}),i=y(t)?{render:t}:t;return o?V.update(o,u(u({},a),i)):V(i.render,u(u({},a),i)),r}V.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},V.success=Q("success"),V.info=Q("info"),V.error=Q("error"),V.warning=Q("warning"),V.warn=V.warning,V.dark=function(e,t){return q(e,H("default",u({theme:"dark"},t)))},V.dismiss=function(e){B.size>0?C.emit(1,e):S=S.filter((function(t){return null!=e&&t.options.toastId!==e}))},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),C.emit(5,e)},V.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=B.get(n||A);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=u(u(u({delay:100},o),t),{},{toastId:t.toastId||e,updateId:Z()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,q(i,a)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return C.on(4,e),function(){C.off(4,e)}},V.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},V.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(e){A=e.containerId||e,B.set(A,e),S.forEach((function(e){C.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&C.off(0).off(1).off(5)}));var U=n(87),G=n(689),W=n(322),X=n(184),Y=function(){var e=(0,a.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],s=(0,U.lr)(),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=u.get("query");(0,a.useEffect)((function(){if(""!==d&&null!==d)try{(0,W.Pt)(d).then(i)}catch(e){console.log("err")}}),[d]);return(0,X.jsxs)("div",{children:[(0,X.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.query.value;if(""===n)return V.warn("Try again"),l({});l({query:n}),t.reset()},children:[(0,X.jsx)("input",{type:"text",name:"query"}),(0,X.jsx)("button",{type:"submit",children:"Search"})]}),(0,X.jsx)(D,{}),d&&(0,X.jsx)(r.Z,{movies:n.results}),(0,X.jsx)(a.Suspense,{fallback:(0,X.jsx)("div",{children:"Loading..."}),children:(0,X.jsx)(G.j3,{})})]})}}}]);
//# sourceMappingURL=527.ce2a11e9.chunk.js.map