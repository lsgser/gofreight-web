var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=ee,D=function(){te.postMessage(null)}}else D=function(){_(ee,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),O=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case O:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=m({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=m({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(m({},Pn,{dataTransfer:0})),Ln=En(m({},kn,{relatedTarget:0})),Rn=En(m({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(m({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(m({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(m({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(m({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(m({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(m({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(m({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(m({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function M(e){yd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){pr&&(pr.detachEvent(`onpropertychange`,Sr),mr=pr=null)}function Sr(e){if(e.propertyName===`value`&&hr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(M,t)}}function Cr(e,t,n){e===`focusin`?(xr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(mr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function N(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Gr=N(`animationend`),Kr=N(`animationiteration`),P=N(`animationstart`),F=N(`transitionrun`),qr=N(`transitionstart`),Jr=N(`transitioncancel`),Yr=N(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),kt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case O:return e=di(31,n,t,a),e.elementType=O,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=di(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=di(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-We(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ue(null),Ji=null,Yi=null;function Xi(e,t,n){j(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,de(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?q.pooledCache:e}function Sa(e,t){t===null?j(ba,ba.current):j(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),R={then:function(){}};function z(e){return e=e.status,e===`fulfilled`||e===`rejected`}function B(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,wa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,wa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===wa||e===Ea)throw Error(i(483))}var V=null,ja=0;function Ma(e){var t=ja;return ja+=1,V===null&&(V=[]),B(V,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Da(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case D:return t=Da(t),f(e,t,n)}if(oe(t)||re(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Da(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Da(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Pa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Da(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return V=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=ha;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=ue(null),Za=ue(0);function Qa(e,t){e=Ul,j(Za,e),j(Xa,t),Ul=e|t.baseLanes}function $a(){j(Za,Ul),j(Xa,Xa.current)}function eo(){Ul=Za.current,de(Xa),de(Za)}var to=ue(null),no=null;function ro(e){var t=e.alternate;j(co,co.current&1),j(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){j(co,co.current),j(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(j(co,co.current),j(to,e),no===null&&(no=e)):oo(e)}function oo(){j(co,co.current),j(to,to.current)}function so(e){de(to),no===e&&(no=null),de(co)}var co=ue(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){k.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&ta(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var a=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=a)throw Error(i(301));if(a+=1,fo=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Vs,o=t(n,r)}while(mo);return o}function To(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=B(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((uo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(rc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=H,a=Ao(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((U||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Wo(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(L){var n=q.formState;if(n!==null){a:{var r=H;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===wa?Ea:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Or(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Or(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ps(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,va(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,se,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ra(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return ii(e,t,i,0),q===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Rs={readContext:ra,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:ra,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=ko();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ra,use:No,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:ra,use:No,useCallback:vs,useContext:ra,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){$r(e)}function Js(e){console.error(e)}function Ys(e){$r(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Va(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===R?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===R?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=to.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=Qs(e.stateNode,r,a),Wa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),$a(),oo(t)):(Sa(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),$a(),ao(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ia(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(io(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a){if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(rc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=dc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return na(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ra||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ra||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Wi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Ca()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(co.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(a?ro(t):oo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(ro(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ia(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,j(co,o),ic(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ta(e)))}function jc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(co,co.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}}else rc=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}if(a===ee){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Ka(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Sc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=q,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Oa=R,Ta}}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Oa=R,Ta}}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=fe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=fe.current,Ui(t))Vi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Zi(t.type),W(t),null;case 19:if(de(co),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return j(co,co.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return W(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=co.current,j(co,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(co),null;case 4:return _e(),null;case 10:return Zi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&de(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Bc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:de(co);break;case 10:Zi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&de(ba);break;case 24:Zi(la)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null){if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:k.T===null?ut():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||L){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912}return e=to.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},jl(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Yi=Ji=null,Oo(e),V=null,ja=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=pi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ri(),n}function Cu(e,t){H=null,k.H=Rs,t===wa||t===Ea?(t=ka(),X=3):t===Ta?(t=ka(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,xi(t,e.current)))}function wu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Tu(){var e=k.H;return k.H=Rs,e===null?Rs:e}function Eu(){var e=k.A;return k.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&to.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,K=r,k.H=i,k.A=a,J===null&&(q=null,Y=0,ri()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Me()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(z(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:z(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,k.H=r,k.A=a,K=n,J===null?(q=null,Y=0,ri(),Wl):0}function ju(){for(;J!==null&&!Ae();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=mi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Yi=Ji=null,Oo(t),V=null,ja=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,xi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,xi(n,e.current)),J=null;return}t.flags&32768?(L||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=Qs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=$s(2),r=Ha(t,n,2),r!==null&&(ec(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Me()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=oi(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Gr,`onAnimationEnd`),Qr(Kr,`onAnimationIteration`),Qr(P,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(F,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Gr:case Kr:case P:l=Rn;break;case Yr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(dr(c)){if(_r)v=Er;else{v=wr;var y=Cr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/gofreight-web/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=y(t,n),t=s(t),t in b)return;b[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:v,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w=/^[\\/]{2}/;function T(e,t){return t+e.replace(/\\/g,`/`)}var E=`popstate`;function ee(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function D(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ie(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ae(t)}return k(t,n,null,e)}function O(e,t){if(e===!1||e==null)throw Error(t)}function te(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ne(){return Math.random().toString(36).substring(2,10)}function re(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ie(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?oe(t):t,state:n,key:t&&t.key||r||ne(),mask:i}}function ae({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function oe(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function k(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ee(e)?e:ie(h.location,e,t);n&&n(r,e),l=u()+1;let d=re(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ee(e)?e:ie(h.location,e,t);n&&n(r,e),l=u();let i=re(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return A(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(E,d),c=e,()=>{i.removeEventListener(E,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function A(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),O(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ae(t);return i=i.replace(/ $/,`%20`),!n&&w.test(i)&&(i=r+i),new URL(i,r)}function se(e,t,n=`/`){return ce(e,t,n,!1)}function ce(e,t,n,r,i){let a=Ee((typeof t==`string`?oe(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function le(e){let t=ue(e);return j(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;O(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(O(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=we(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function j(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ce(u,l,s.matcher,s.compiledParams):Se(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pe([a,d.pathname]),pathnameBase:Ie(Pe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Pe([a,d.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end);return Ce(e,t,n,r)}function Ce(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Fe(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Fe(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){te(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return te(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?oe(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=oe(e):(i={...e},O(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),O(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),O(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/[\\/]{2,}/g,`/`),Pe=e=>Ne(e.join(`/`));function Fe(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=w.test(n)?new URL(T(n,e.protocol)):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{te(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=new URL(`http://localhost`);function Ge(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),We)}catch{return We}}function Ke(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function qe(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Je(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Ke(i,n),s=!Ke(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!qe(e,i)||!Ke(i,a)))throw Error(`External navigation is not allowed`)}var Ye=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ye);var Xe=[`GET`,...Ye];new Set(Xe);var Ze=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Qe(e){try{return Ze.includes(new URL(e).protocol)}catch{return!1}}var $e=S.createContext(null);$e.displayName=`DataRouter`;var et=S.createContext(null);et.displayName=`DataRouterState`;var tt=S.createContext(!1);function nt(){return S.useContext(tt)}var rt=S.createContext({isTransitioning:!1});rt.displayName=`ViewTransition`;var it=S.createContext(new Map);it.displayName=`Fetchers`;var at=S.createContext(null);at.displayName=`Await`;var ot=S.createContext(null);ot.displayName=`Navigation`;var st=S.createContext(null);st.displayName=`Location`;var ct=S.createContext({outlet:null,matches:[],isDataRoute:!1});ct.displayName=`Route`;var lt=S.createContext(null);lt.displayName=`RouteError`;var ut=`REACT_ROUTER_ERROR`,dt=`REDIRECT`,ft=`ROUTE_ERROR_RESPONSE`;function pt(e){if(e.startsWith(`${ut}:${dt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function mt(e){if(e.startsWith(`${ut}:${ft}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ht(e,{relative:t}={}){O(gt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(ot),{hash:i,pathname:a,search:o}=Tt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function gt(){return S.useContext(st)!=null}function _t(){return O(gt(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(st).location}var vt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function yt(e){S.useContext(ot).static||S.useLayoutEffect(e)}function bt(){let{isDataRoute:e}=S.useContext(ct);return e?Ht():xt()}function xt(){O(gt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext($e),{basename:t,navigator:n}=S.useContext(ot),{matches:r}=S.useContext(ct),{pathname:i}=_t(),a=JSON.stringify(je(r)),o=S.useRef(!1);return yt(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(te(o.current,vt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),Je(typeof r==`string`?r:ae(r),n.createHref(c),Ge(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var St=S.createContext(null);function Ct(e){let t=S.useContext(ct).outlet;return S.useMemo(()=>t&&S.createElement(St.Provider,{value:e},t),[t,e])}function wt(){let{matches:e}=S.useContext(ct);return e[e.length-1]?.params??{}}function Tt(e,{relative:t}={}){let{matches:n}=S.useContext(ct),{pathname:r}=_t(),i=JSON.stringify(je(n));return S.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Et(e,t){return Dt(e,t)}function Dt(e,t,n){O(gt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(ot),{matches:i}=S.useContext(ct),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Wt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=_t(),d;if(t){let e=typeof t==`string`?oe(t):t;O(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):se(e,{pathname:p});te(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),te(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Pt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(st.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Ot(){let e=Vt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var kt=S.createElement(Ot,null),At=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=mt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(ct.Provider,{value:this.props.routeContext},S.createElement(lt.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(Mt,{error:e},t):t}};At.contextType=tt;var jt=new WeakMap;function Mt({children:e,error:t}){let{basename:n,navigator:r}=S.useContext(ot);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=pt(t.digest);if(e){let i=jt.get(t);if(i)throw i;let a=Ue(e.location,n),o=a.absoluteURL||a.to;if(Je(e.location,o,Ge(r),`allow-explicit`),Qe(o))throw Error(`Invalid redirect location`);if(He&&!jt.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw jt.set(t,n),n}}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function Nt({routeContext:e,match:t,children:n}){let r=S.useContext($e);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(ct.Provider,{value:e},n)}function Pt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);O(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||kt,o&&(s<0&&c===0?(Wt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(Nt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(At,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ft(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function It(e){let t=S.useContext($e);return O(t,Ft(e)),t}function Lt(e){let t=S.useContext(et);return O(t,Ft(e)),t}function Rt(e){let t=S.useContext(ct);return O(t,Ft(e)),t}function zt(e){let t=Rt(e),n=t.matches[t.matches.length-1];return O(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Bt(){return zt(`useRouteId`)}function Vt(){let e=S.useContext(lt),t=Lt(`useRouteError`),n=zt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ht(){let{router:e}=It(`useNavigate`),t=zt(`useNavigate`),n=S.useRef(!1);return yt(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{te(n.current,vt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ut={};function Wt(e,t,n){!t&&!Ut[e]&&(Ut[e]=!0,te(!1,n))}S.memo(Gt);function Gt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Dt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Kt({to:e,replace:t,state:n,relative:r}){O(gt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=S.useContext(ot);te(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=S.useContext(ct),{pathname:s}=_t(),c=bt(),l=Me(e,je(o),s,r===`path`);Je(typeof e==`string`?e:ae(e),a.createHref(l),Ge(a),`reject`);let u=JSON.stringify(l);return S.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function qt(e){return Ct(e.context)}function Jt(e){O(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Yt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){O(!gt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=oe(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=S.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return te(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(ot.Provider,{value:c},S.createElement(st.Provider,{children:t,value:h}))}function Xt({children:e,location:t}){return Et(Zt(e),t)}S.Component;function Zt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Zt(e.props.children,i));return}O(e.type===Jt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),O(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Zt(e.props.children,i)),n.push(a)}),n}var Qt=`get`,$t=`application/x-www-form-urlencoded`;function en(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function tn(e){return en(e)&&e.tagName.toLowerCase()===`button`}function nn(e){return en(e)&&e.tagName.toLowerCase()===`form`}function rn(e){return en(e)&&e.tagName.toLowerCase()===`input`}function an(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function on(e,t){return e.button===0&&(!t||t===`_self`)&&!an(e)}var sn=null;function cn(){if(sn===null)try{new FormData(document.createElement(`form`),0),sn=!1}catch{sn=!0}return sn}var ln=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function un(e){return e!=null&&!ln.has(e)?(te(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$t}"`),null):e}function dn(e,t){let n,r,i,a,o;if(nn(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Qt,i=un(e.getAttribute(`enctype`))||$t,a=new FormData(e)}else if(tn(e)||rn(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Qt,i=un(e.getAttribute(`formenctype`))||un(o.getAttribute(`enctype`))||$t,a=new FormData(o,e),!cn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(en(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Qt,r=null,i=$t,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function fn(e,t){if(e===!1||e==null)throw Error(t)}function pn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Ee(i.pathname,t)===`/`?`${Fe(t)}/_root.${r}`:`${Fe(i.pathname)}.${r}`,i}async function mn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hn(e){return e!=null&&typeof e.page==`string`}function gn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function _n(e,t,n){return Sn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await mn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(gn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function vn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function yn(e,t,{includeHydrateFallback:n}={}){return bn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function bn(e){return[...new Set(e)]}function xn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!hn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(xn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Cn(){let e=S.useContext($e);return fn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function wn(){let e=S.useContext(et);return fn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Tn=S.createContext(void 0);Tn.displayName=`FrameworkContext`;function En(){let e=S.useContext(Tn);return fn(e,`You must render this element inside a <HydratedRouter> element`),e}function Dn(e,t){let n=S.useContext(Tn),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:On(s,p),onBlur:On(c,m),onMouseEnter:On(l,p),onMouseLeave:On(u,m),onTouchStart:On(d,p)}]:[a,f,{}]:[!1,f,{}]}function On(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function kn({page:e,...t}){let n=nt(),{nonce:r}=En(),{router:i}=Cn(),a=S.useMemo(()=>se(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?S.createElement(jn,{page:e,matches:a,...t}):S.createElement(Mn,{page:e,matches:a,...t})):null}function An(e){let{manifest:t,routeModules:n}=En(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return _n(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function jn({page:e,matches:t,...n}){let r=_t(),{future:i}=En(),{basename:a}=Cn(),o=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=pn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return S.createElement(S.Fragment,null,o.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Mn({page:e,matches:t,...n}){let r=_t(),{future:i,manifest:a,routeModules:o}=En(),{basename:s}=Cn(),{loaderData:c,matches:l}=wn(),u=S.useMemo(()=>vn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>vn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=pn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>yn(d,a),[d,a]),m=An(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Nn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var Pn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Pn&&(window.__reactRouterVersion=`7.18.3`)}catch{}function Fn({basename:e,children:t,useTransitions:n,window:r}){let i=S.useRef();i.current??=D({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Yt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var In=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=S.useContext(ot),v=typeof l==`string`&&C.test(l),y=Ue(l,h);l=y.to;let b=ht(l,{relative:r}),x=_t(),w=null;if(o){let e=Me(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),w=g.createHref(e)}let[T,E,ee]=Dn(n,p),D=Vn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let te=!(y.isExternal||i),ne=S.createElement(`a`,{...p,...ee,href:(te?w:void 0)||y.absoluteURL||b,onClick:te?O:e,ref:Nn(m,E),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return T&&!v?S.createElement(S.Fragment,null,ne,S.createElement(kn,{page:b})):ne});In.displayName=`Link`;var Ln=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Tt(a,{relative:c.relative}),d=_t(),f=S.useContext(et),{navigator:p,basename:m}=S.useContext(ot),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ee(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return S.createElement(In,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Ln.displayName=`NavLink`;var Rn=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=S.useContext(ot),g=Wn(),_=Gn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&C.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Rn.displayName=`Form`;function zn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bn(e){let t=S.useContext($e);return O(t,zn(e)),t}function Vn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=bt(),d=_t(),f=Tt(e,{relative:o});return S.useCallback(p=>{if(on(p,t)){p.preventDefault();let t=n===void 0?ae(d)===ae(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Hn=0,Un=()=>`__${String(++Hn)}__`;function Wn(){let{router:e}=Bn(`useSubmit`),{basename:t}=S.useContext(ot),n=Bt(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=dn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Un();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Gn(e,{relative:t}={}){let{basename:n}=S.useContext(ot),r=S.useContext(ct);O(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Tt(e||`.`,{relative:t})},o=_t();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ae(a)}function Kn(e,{relative:t}={}){let n=S.useContext(rt);O(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bn(`useViewTransitionState`),i=Tt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var qn=_(),Jn=[{title:`Tutorials`,items:[{slug:`tutorial-first-app`,title:`Your First App`,description:`Create and run a Gofreight project from scratch`},{slug:`tutorial-rest-api`,title:`Build a REST API`,description:`Route groups, JSON handlers, and ApiResource`},{slug:`tutorial-html-crud`,title:`HTML CRUD with GFT`,description:`Templates, forms, validation, and flash errors`},{slug:`tutorial-auth-jwt`,title:`JWT Authentication`,description:`Login endpoints and protected API routes`},{slug:`tutorial-realtime`,title:`Real-time WebSockets`,description:`Live chat with socket.io-style events and rooms`},{slug:`tutorial-graphql`,title:`GraphQL API`,description:`SDL schemas, resolvers, DataLoader, and the playground`}]}],Yn=[{title:`Prologue`,items:[{slug:`getting-started`,title:`Getting Started`,description:`Install the CLI and create your first app`},{slug:`changelog`,title:`Changelog`,description:`Release history from v0.1.0 onward`},{slug:`project-structure`,title:`Project Structure`,description:`Framework vs application layout`},{slug:`configuration`,title:`Configuration`,description:`Environment variables and YAML config`}]},{title:`The Basics`,items:[{slug:`routing`,title:`Routing`,description:`Route groups, resources, middleware`},{slug:`controllers`,title:`Controllers`,description:`Request handling, views, and JSON responses`},{slug:`middleware`,title:`Middleware`,description:`HTTP pipeline, CSRF, CORS, rate limiting`},{slug:`orm`,title:`ORM`,description:`Models, queries, associations, and validations`},{slug:`database`,title:`Database`,description:`Migrations, seeding, and blueprint DSL`},{slug:`templating`,title:`Templating (GFT)`,description:`Gofreight Templates syntax`},{slug:`forms-validation`,title:`Forms & Validation`,description:`Vine schemas and form components`}]},{title:`Digging Deeper`,items:[{slug:`authentication`,title:`Authentication`,description:`Session login, JWT, API tokens, OAuth`},{slug:`authorization`,title:`Authorization`,description:`Policies and role-based access`},{slug:`sessions`,title:`Sessions`,description:`Session storage, flash messages, cookies`},{slug:`mail`,title:`Mail`,description:`Mailables, SMTP, and queued delivery`},{slug:`jobs`,title:`Jobs & Queues`,description:`Background jobs and workers`},{slug:`cache`,title:`Cache`,description:`Memory, Redis, and HTTP caching`},{slug:`services`,title:`Services & Container`,description:`Business logic and dependency injection`},{slug:`api-resources`,title:`API Resources`,description:`JSON serializers for API responses`},{slug:`realtime`,title:`Real-time WebSockets`,description:`Rooms, events, and the TypeScript client`},{slug:`graphql`,title:`GraphQL`,description:`SDL schemas, modules, DataLoader, playground`}]},{title:`Advanced`,items:[{slug:`features`,title:`Features Overview`,description:`Index of all framework capabilities`},{slug:`security`,title:`Security`,description:`CSRF, headers, rate limiting, production`},{slug:`testing`,title:`Testing`,description:`gftest and factories`},{slug:`datetime`,title:`Date & Time`,description:`Fluent date helpers`},{slug:`integrations`,title:`Integrations`,description:`Mail, storage, cache drivers`},{slug:`extending`,title:`Extending`,description:`Custom integrations and events`},{slug:`admin`,title:`Admin Dashboard`,description:`Development database admin`},{slug:`deployment`,title:`Deployment`,description:`Docker and production checklist`},{slug:`commands`,title:`CLI Commands`,description:`Full gofreight command reference`},{slug:`generators`,title:`Generators`,description:`make:* scaffolds and field types`}]}],Xn=[...Jn,...Yn],Zn=Xn.flatMap(e=>e.items),Qn=Jn.flatMap(e=>e.items);function $n(e){return Zn.find(t=>t.slug===e)?.title??e}function er(e){return Qn.some(t=>t.slug===e)}var tr=Object.assign({"../content/docs/README.md":`<p align="center">
  <img src="assets/gofreight-logo.png" alt="Gofreight" width="420">
</p>

<h1 align="center">Gofreight Documentation</h1>

<p align="center">
  Batteries-included web framework for Go — compile to a single binary.
</p>

<p align="center">
  <strong>Framework repo:</strong> <a href="https://github.com/lsgser/gofreight">github.com/lsgser/gofreight</a>
  · <strong>Docs site:</strong> <a href="https://github.com/lsgser/gofreight-web">github.com/lsgser/gofreight-web</a>
</p>

---

## Prologue

| Guide | Description |
|-------|-------------|
| [Getting Started](getting-started.md) | Install the CLI, create an app, run migrations |
| [Project structure](project-structure.md) | Framework vs application layout |
| [Configuration](configuration.md) | Environment variables and YAML config |

## The Basics

| Guide | Description |
|-------|-------------|
| [Routes & routing](routing.md) | Route groups, API resources, middleware |
| [Controllers](controllers.md) | Request handling, views, JSON responses |
| [Middleware](middleware.md) | HTTP pipeline, CSRF, CORS, rate limiting |
| [ORM](orm.md) | Models, queries, associations, validations |
| [Database](database.md) | Migrations, seeding, blueprint DSL |
| [Templating](templating.md) | Gofreight Templates (GFT) syntax |
| [Forms & validation](forms-validation.md) | Vine schemas, GFT form components, flash errors |

## Digging Deeper

| Guide | Description |
|-------|-------------|
| [Authentication](authentication.md) | Session login, JWT, API tokens, OAuth |
| [Authorization](authorization.md) | Policies and role-based access |
| [Sessions](sessions.md) | Session storage, flash messages, cookies |
| [Mail](mail.md) | Mailables, SMTP, queued delivery |
| [Jobs & Queues](jobs.md) | Background jobs and workers |
| [Cache](cache.md) | Memory, Redis, HTTP caching |
| [Services & Container](services.md) | Business logic and dependency injection |
| [API Resources](api-resources.md) | JSON serializers for API responses |
| [Real-time WebSockets](realtime.md) | Rooms, events, TypeScript client |
| [GraphQL](graphql.md) | SDL schemas, modules, DataLoader, playground |

## Advanced

| Guide | Description |
|-------|-------------|
| [Features overview](features.md) | Index of all framework capabilities |
| [Security](security.md) | CSRF, headers, rate limiting, production |
| [Testing](testing.md) | HTTP tests with \`gftest\` |
| [Date & time](datetime.md) | Fluent date helpers via \`support/datetime\` |
| [Integrations](integrations.md) | Pluggable mail, storage, cache, and custom APIs |
| [Extending Gofreight](extending.md) | Custom integrations, events, plugins |
| [Admin Dashboard](admin.md) | Local database admin (development only) |
| [Deployment](deployment.md) | Docker, production checklist |
| [CLI commands](commands.md) | Full \`gofreight\` command reference |
| [Generators & field types](generators.md) | \`make:*\` commands and \`name:type\` fields |

## Tutorials

| Tutorial | Description |
|----------|-------------|
| [Your First App](tutorial-first-app.md) | Create and run a Gofreight project from scratch |
| [Build a REST API](tutorial-rest-api.md) | Route groups, JSON handlers, and ApiResource |
| [HTML CRUD with GFT](tutorial-html-crud.md) | Templates, forms, validation, and flash errors |
| [JWT Authentication](tutorial-auth-jwt.md) | Login endpoints and protected API routes |
| [Real-time WebSockets](tutorial-realtime.md) | Live chat with socket.io-style events |
| [GraphQL API](tutorial-graphql.md) | SDL schemas, resolvers, DataLoader, playground |

## Quick links

- [Framework README](https://github.com/lsgser/gofreight/blob/main/README.md) — overview and API reference
- [Example blog app](https://github.com/lsgser/gofreight/tree/main/examples/blog) — full working application
- Admin panel (development): \`http://localhost:5000/admin\`
`,"../content/docs/admin.md":`# Database Admin Dashboard

Gofreight includes a **local-only** database admin panel for development. It is available at \`/admin\` when \`GOFREIGHT_ENV=development\` and is **never mounted in production**.

## Features

### Data management
- Browse all tables with row counts
- Paginated table views
- Create, edit, and delete rows
- Form fields inferred from column types

### Schema management
- **Create Table** — define columns, types, primary keys, defaults
- **Table Structure** — view column definitions
- **Add Column** — alter existing tables
- **Drop Table** — with confirmation (protects \`schema_migrations\`)
- **Export SQL** — download CREATE TABLE + INSERT statements
- **Import SQL** — run CREATE, ALTER, INSERT, UPDATE, DELETE statements

### Developer tools
- **SQL Console** — read-only SELECT/PRAGMA/EXPLAIN queries
- **Integrations** — view status of configured cloud services

## Usage

\`\`\`bash
GOFREIGHT_ENV=development go run .
# Open http://localhost:5000/admin
\`\`\`

## Manual mounting

\`\`\`go
app := application.New()
app.ConnectDatabase()
app.MountAdmin() // only in development/test
app.Draw(routes.Register)
app.Run()
\`\`\`

## Supported databases

PostgreSQL, SQLite, MySQL, and MariaDB. DDL is dialect-aware (auto-increment, timestamps, type mapping).

## Security

The admin panel is a **development tool only**. Do not expose it in production. Gofreight refuses to mount admin routes when \`GOFREIGHT_ENV=production\`.

Import SQL and schema changes run directly against your database — use only on local or staging databases.
`,"../content/docs/api-resources.md":`# API Resources

API resources transform models into consistent JSON responses for your API.

## Basic usage

Implement the \`api.Resource\` interface:

\`\`\`go
// app/resources/post_resource.go
package resources

import "myapp/app/models"

type PostResource struct {
    Post *models.Post
}

func (r PostResource) ToMap() map[string]any {
    return map[string]any{
        "id":         r.Post.ID,
        "title":      r.Post.Title,
        "body":       r.Post.Body,
        "created_at": r.Post.CreatedAt,
    }
}
\`\`\`

Render from a controller:

\`\`\`go
import "github.com/lsgser/gofreight/api"

post, _ := models.Posts.Find(ctx, id)
api.Render(w, http.StatusOK, resources.PostResource{Post: post})
\`\`\`

Response shape:

\`\`\`json
{
  "data": {
    "id": 1,
    "title": "Hello",
    "body": "World",
    "created_at": "2026-01-01T00:00:00Z"
  }
}
\`\`\`

## Collections

Render multiple resources:

\`\`\`go
posts, _ := models.Posts.Query(ctx).Get()

items := make([]api.Resource, len(posts))
for i, p := range posts {
    items[i] = resources.PostResource{Post: &p}
}
api.RenderMany(w, http.StatusOK, items)
\`\`\`

Or build a collection manually:

\`\`\`go
data := make([]map[string]any, len(posts))
for i, p := range posts {
    data[i] = resources.PostResource{Post: &p}.ToMap()
}

api.RenderCollection(w, http.StatusOK, api.Collection{
    Data: data,
    Meta: api.PaginatedMeta(page, perPage, total),
})
\`\`\`

## Function adapter

For simple transforms, use \`api.ResourceFunc\`:

\`\`\`go
api.Render(w, http.StatusOK, api.ResourceFunc(func() map[string]any {
    return map[string]any{"status": "ok"}
}))
\`\`\`

## Pagination meta

\`\`\`go
meta := api.PaginatedMeta(currentPage, perPage, totalCount)
// { "current_page": 1, "per_page": 20, "total": 100, "last_page": 5 }
\`\`\`

Combine with ORM pagination:

\`\`\`go
page, _ := models.Posts.Query(ctx).Paginate(1, 20)

items := make([]api.Resource, len(page.Data))
for i, p := range page.Data {
    items[i] = resources.PostResource{Post: &p}
}

api.RenderCollection(w, http.StatusOK, api.Collection{
    Data:  /* mapped items */,
    Meta:  api.PaginatedMeta(page.CurrentPage, page.PerPage, int(page.Total)),
})
\`\`\`

## Scaffolding

Generate an API resource with model and routes:

\`\`\`bash
gofreight make:api Post title:string body:text
\`\`\`

Creates model, controller, migration, and JSON routes under \`/api/v1\`.

## Related

- [Controllers](controllers.md) — returning JSON from actions
- [Routing](routing.md) — \`ApiResource\` routes
- [ORM](orm.md) — querying models
- [Tutorial: REST API](tutorial-rest-api.md) — end-to-end API (web: \`tutorial-rest-api.md\`)
`,"../content/docs/authentication.md":`# Authentication

Gofreight supports session login (HTML), JWT (SPA/mobile API), and opaque API tokens — with a unified \`Guard\` that accepts any of the three.

## Password hashing

\`\`\`go
import "github.com/lsgser/gofreight/auth"

hash, err := auth.HashPassword("secret-password")
err = auth.CheckPassword(storedHash, inputPassword)
\`\`\`

Use bcrypt via the \`auth\` package for all stored passwords.

## Session login (browser)

Store the authenticated user ID in the session after validating credentials:

\`\`\`go
cfg := auth.DefaultLoginConfig(findUserByEmail)

r.Get("/login", showLoginForm)
r.Post("/login", controller.Handler(auth.Login(cfg)))
r.Post("/logout", controller.Handler(auth.Logout("current_user_id", "/")))
\`\`\`

\`DefaultLoginConfig\` sets:

- \`SessionKey\`: \`"current_user_id"\`
- \`RedirectTo\`: \`"/"\`
- \`FindUser\`: your lookup function returning \`*auth.User\`

Read the current user in controllers:

\`\`\`go
session := middleware.SessionFromContext(base.Request.Context())
userID := session.Get("current_user_id")
\`\`\`

See **[Sessions](sessions.md)** for the session API.

## JWT (API)

Sign tokens with \`APP_KEY\` (run \`gofreight key:generate\`):

\`\`\`go
jwtMgr := auth.JWTFromEnv(app.Config.AppKey)

r.Post("/api/login", controller.Handler(auth.LoginWithJWT(
    auth.DefaultLoginConfig(findUserByEmail),
    jwtMgr,
)))
\`\`\`

Login response:

\`\`\`json
{
  "token_type": "Bearer",
  "access_token": "...",
  "expires_at": "2026-01-02T10:00:00Z",
  "user": { "id": 1, "email": "user@example.com", "role": "editor" }
}
\`\`\`

Protect routes:

\`\`\`go
r.Group(func(api *router.Router) {
    api.Get("/profile", profileHandler)
}).Prefix("/api/v1").Use(auth.JWTMiddleware(jwtMgr)).Apply()
\`\`\`

Clients send \`Authorization: Bearer <token>\`.

Optional env: \`JWT_TTL=24h\` (default 24 hours).

See **[Tutorial: JWT Authentication](../examples/blog/)** (web: \`tutorial-auth-jwt.md\`).

## Opaque API tokens

For long-lived machine-to-machine tokens:

\`\`\`go
store := auth.NewMemoryTokenStore() // use a database-backed store in production

token, _ := store.Create(userID, "mobile-app", time.Now().Add(365*24*time.Hour))

r.Group(func(api *router.Router) {
    api.Get("/data", dataHandler)
}).Use(auth.APITokenMiddleware(store)).Apply()
\`\`\`

Revoke tokens with \`store.Revoke(token)\`.

## Unified Guard

Accept JWT, API token, or session in one middleware:

\`\`\`go
guard := auth.Guard{
    JWT:        jwtMgr,
    TokenStore: tokenStore,
    SessionKey: "current_user_id",
}
api.Use(guard.Middleware)
\`\`\`

Read the authenticated user ID from any auth method:

\`\`\`go
userID, ok := auth.UserIDFromRequest(r, "current_user_id")
role, ok := auth.RoleFromRequest(r)
\`\`\`

## OAuth2

Generic OAuth2 flow — works with any provider (Google, GitHub, etc.):

\`\`\`go
provider := auth.OAuthProvider{
    Name:         "github",
    ClientID:     os.Getenv("GITHUB_CLIENT_ID"),
    ClientSecret: os.Getenv("GITHUB_CLIENT_SECRET"),
    AuthURL:      "https://github.com/login/oauth/authorize",
    TokenURL:     "https://github.com/login/oauth/access_token",
    UserInfoURL:  "https://api.github.com/user",
    RedirectURL:  "http://localhost:5000/auth/github/callback",
    Scopes:       []string{"user:email"},
}

cfg := auth.OAuthConfig{
    Provider:   provider,
    OnUser:     findOrCreateUserFromOAuth,
    SessionKey: "current_user_id",
    RedirectTo: "/",
}

r.Get("/auth/github", controller.Handler(auth.OAuthRedirect(cfg)))
r.Get("/auth/github/callback", controller.Handler(auth.OAuthCallback(cfg)))
\`\`\`

The callback validates state, exchanges the code, fetches user info, and logs the user in via session.

## Password reset

\`\`\`go
resetStore := auth.NewMemoryPasswordResetStore()

r.Post("/password/forgot", controller.Handler(auth.RequestPasswordReset(
    resetStore,
    findUserByEmail,
    sendResetEmail, // func(email, token string) error
)))

r.Post("/password/reset", controller.Handler(auth.ResetPassword(
    resetStore,
    updateUserPassword, // func(email, newPassword string) error
)))
\`\`\`

Tokens expire after one hour. The forgot endpoint always returns success (no email enumeration).

Clear expired tokens:

\`\`\`bash
gofreight auth:clear-resets
\`\`\`

## Email verification

\`\`\`go
verifyStore := auth.NewMemoryVerificationStore()

token, _ := auth.SendVerificationEmail(verifyStore, userID, email, sendVerifyEmail)

r.Get("/email/verify", controller.Handler(auth.VerifyEmailHandler(
    verifyStore,
    markEmailVerified, // func(userID int64, email string) error
)))
\`\`\`

Verification links: \`GET /email/verify?token=...\`

## Scaffolding

Generate User model, migration, and auth stubs:

\`\`\`bash
gofreight make:auth
gofreight generate auth
\`\`\`

## Production notes

- Run \`gofreight key:generate\` and keep \`APP_KEY\` secret — it signs JWTs, sessions, and CSRF tokens
- Replace in-memory token/reset/verification stores with database-backed implementations
- Use HTTPS in production so session cookies are secure
- See **[Security](security.md)** for CSRF, rate limiting, and headers

## Related

- [Authorization](authorization.md) — policies and roles
- [Sessions](sessions.md) — session storage and flash
- [Middleware](middleware.md) — auth middleware
- [Security](security.md) — production checklist
`,"../content/docs/authorization.md":`# Authorization

Authentication confirms who the user is; authorization decides what they can do. Gofreight provides policies (named rules) and role-based middleware.

## Policies

Policies are named authorization rules:

\`\`\`go
policy := auth.NewPolicy()

policy.Define("edit-post", func(r *http.Request) bool {
    userID, ok := auth.UserIDFromRequest(r, "current_user_id")
    if !ok {
        return false
    }
    postID := r.PathValue("id")
    return ownsPost(userID, postID)
})

policy.Define("admin-only", func(r *http.Request) bool {
    role, ok := auth.RoleFromRequest(r)
    return ok && role == "admin"
})
\`\`\`

Check a policy in a controller:

\`\`\`go
if !policy.Allows("edit-post", base.Request) {
    base.Unauthorized("Forbidden")
    return nil
}
\`\`\`

Or enforce via middleware:

\`\`\`go
r.Put("/posts/{id}", controller.Handler(c.Update)).
    Use(policy.RequirePolicy("edit-post"))
\`\`\`

## Role middleware

Restrict routes to users with a specific role:

\`\`\`go
r.Group(func(admin *router.Router) {
    admin.Get("/dashboard", dashboardHandler)
}).Use(auth.RequireRole("admin", "current_user_id")).Apply()
\`\`\`

Roles are read from JWT claims or session. Users with role \`"admin"\` pass any role check.

## Application policies

Store policies in \`app/policies/\`:

\`\`\`go
// app/policies/post_policy.go
package policies

import (
    "net/http"

    "github.com/lsgser/gofreight/auth"
)

func Register(p *auth.Policy) {
    p.Define("edit-post", func(r *http.Request) bool {
        userID, ok := auth.UserIDFromRequest(r, "current_user_id")
        if !ok {
            return false
        }
        // ownership check...
        return true
    })
}
\`\`\`

Wire in bootstrap:

\`\`\`go
policy := auth.NewPolicy()
policies.Register(policy)
app.Router.Use(policy.RequirePolicy("edit-post")) // or per-route
\`\`\`

## Auth context helpers

| Function | Returns |
|----------|---------|
| \`auth.UserIDFromRequest(r, sessionKey)\` | User ID from JWT, API token, or session |
| \`auth.UserIDFromContext(ctx)\` | User ID from request context (API token/JWT) |
| \`auth.RoleFromRequest(r)\` | Role from JWT claims |

These work regardless of which authentication method the client used.

## Controller-level checks

For resource-specific authorization, check in the action:

\`\`\`go
func (c PostController) Update(base controller.Base) error {
    userID, ok := auth.UserIDFromRequest(base.Request, "current_user_id")
    if !ok {
        base.Unauthorized("Login required")
        return nil
    }

    post, err := models.Posts.Find(base.Request.Context(), parseID(base.Param("id")))
    if err != nil || post.UserID != userID {
        base.Unauthorized("Forbidden")
        return nil
    }
    // update...
}
\`\`\`

## Related

- [Authentication](authentication.md) — login, JWT, API tokens
- [Middleware](middleware.md) — applying policy middleware
- [Security](security.md) — production auth hardening
`,"../content/docs/cache.md":`# Cache

Gofreight provides in-memory and Redis cache stores, HTTP response caching, and fragment caching for expensive view partials.

## In-memory cache

\`\`\`go
import "github.com/lsgser/gofreight/cache"

store := cache.New()

store.Put("user:1", user, time.Hour)
value, ok := store.Get("user:1")
store.Has("user:1")
store.Forget("user:1")
store.Flush()
\`\`\`

The application exposes a default cache via \`app.Cache\`.

## Remember pattern

Compute and store on cache miss:

\`\`\`go
result := app.Cache.Remember("sidebar:nav", time.Minute, func() any {
    return buildNavigation()
})
\`\`\`

\`Forever\` stores without expiration:

\`\`\`go
app.Cache.Forever("config:features", features)
\`\`\`

## Redis cache

Configure via integrations:

\`\`\`env
CACHE_DRIVER=redis
REDIS_URL=redis://localhost:6379
\`\`\`

Redis cache persists across process restarts and works in multi-server deployments.

## HTTP caching

Add cache headers to responses:

\`\`\`go
app.UseHTTPCache(time.Hour)
\`\`\`

Or per-route via \`cache.HTTPCache\` middleware.

## Fragment caching

Cache expensive rendered partials:

\`\`\`go
fc := cache.NewFragmentCache(app.Cache)
html := fc.Remember("sidebar", time.Minute, func() string {
    return renderSidebar()
})
\`\`\`

Useful for navigation, category trees, or other slow-to-render fragments.

## CLI

\`\`\`bash
gofreight cache:clear
\`\`\`

## Testing

Use a fresh in-memory store per test:

\`\`\`go
app.Cache.Flush()
\`\`\`

With \`gftest\` fakes:

\`\`\`go
gftest.UseFakes()
// cache operations use in-memory fake
\`\`\`

## Related

- [Integrations](integrations.md) — Redis cache driver
- [Configuration](configuration.md) — \`CACHE_DRIVER\`, \`REDIS_URL\`
- [CLI Commands](commands.md) — \`cache:clear\`
`,"../content/docs/changelog.md":`# Changelog

All notable changes to Gofreight are documented here. The project follows [Semantic Versioning](https://semver.org/).

Install a specific release:

\`\`\`bash
go install github.com/lsgser/gofreight/cmd/gofreight@v0.2.0
\`\`\`

---

## 0.2.0 — September 6, 2026

### Added

- **GraphQL server** — modular schema modules, SDL string definitions (\`GQL()\`), DataLoader batching, GraphiQL playground, query depth/complexity limits, and production security defaults. See [GraphQL](graphql.md) and the [GraphQL tutorial](tutorial-graphql.md).
- **Real-time WebSockets** — socket.io-style rooms, events, and broadcasts with a TypeScript client (\`GofreightSocket\`). See [Real-time WebSockets](realtime.md) and the [real-time tutorial](tutorial-realtime.md).
- **Route groups** — prefix, middleware, and nested groups for clean API versioning. See [Routing](routing.md).
- **JWT authentication guard** — protect API routes with bearer tokens. See [Authentication](authentication.md) and the [JWT tutorial](tutorial-auth-jwt.md).
- **Vine schema validation** — declarative request validation for forms and JSON APIs. See [Forms & Validation](forms-validation.md).
- **Production CLI guard** — mutating commands (\`migrate\`, \`db:wipe\`, \`db:seed\`, \`make:*\`, queue/cache clears, and more) show a red **PRODUCTION ENVIRONMENT** banner and require typing \`yes\` to continue when \`GOFREIGHT_ENV=production\`. Pass \`--force\` to skip the prompt in CI/deploy scripts.
- **Documentation site** — full framework guides, six step-by-step tutorials, and searchable docs (see the \`gofreight-web\` repository).

### Changed

- **CLI help output** — running \`gofreight\` with no arguments shows the banner once; command categories use cyan headers, bold command names, and dimmed descriptions.
- **CLI command list** — section heading is now **Available commands** (no duplicate framework title).

### Fixed

- **CLI banner** — removed duplicate Gofreight name, version, and tagline when invoking the root command.
- **Docs site dark mode** — “Start building” CTA button text is readable on the orange banner in dark theme.

---

## 0.1.0 — September 5, 2026

Initial public release — a batteries-included Go web framework you compile to a single binary.

### Added

- **HTTP routing** — RESTful resources (\`Resources\`, \`ApiResource\`), middleware pipeline, and named routes.
- **Controllers & GFT templating** — MVC handlers and **Gofreight Templates** (\`.gft\`) with layouts, partials, and form helpers.
- **ORM** — chainable queries, associations, validations, lifecycle callbacks, soft deletes, pagination, and transactions.
- **Database layer** — migrations, SQL/Go seeders, blueprint DSL, multi-driver support (SQLite, PostgreSQL, MySQL), SQLite by default for new apps.
- **CLI (\`gofreight\`)** — \`new\`, \`serve\`, \`dev\`, \`migrate\`, \`make:*\` generators, queue/cache/config commands, branded welcome banners, and \`gofreight list\` grouped by namespace.
- **Authentication** — session login, password hashing, API tokens, OAuth helpers, email verification, and password reset tokens.
- **Authorization** — policies and role-based middleware.
- **API resources** — JSON serializers for REST responses.
- **Jobs & queues** — background jobs with Redis queue driver and \`queue:work\`.
- **Mail** — mailables and SMTP delivery.
- **Cache** — in-memory and Redis stores, HTTP response caching, fragment caching.
- **Sessions** — cookie sessions, flash messages, encrypted cookies.
- **Service container** — dependency injection and service registration.
- **Configuration** — \`.env\` loading, YAML config files, \`APP_KEY\` encryption, and structured database config.
- **Testing (\`gftest\`)** — HTTP test helpers, factories, fakes, and database seeding for tests.
- **Admin dashboard** — local-only database admin at \`/admin\` in development.
- **Security** — CSRF, CORS, rate limiting, security headers, and maintenance mode (\`gofreight down\` / \`up\`).
- **Generators** — scaffold full CRUD resources, models, controllers, migrations, mail, jobs, policies, factories, and auth scaffolding.
- **Example apps** — \`demoapp/\` and \`examples/blog/\`.

---

## Upgrade notes

### From 0.1.0 to 0.2.0

1. Update the module version in your app’s \`go.mod\`:

   \`\`\`bash
   go get github.com/lsgser/gofreight@v0.2.0
   go mod tidy
   \`\`\`

2. Reinstall the CLI:

   \`\`\`bash
   go install github.com/lsgser/gofreight/cmd/gofreight@v0.2.0
   \`\`\`

3. **Production deploys** — if you run CLI commands against production databases, add \`--force\` to non-interactive scripts (e.g. \`gofreight migrate --force\`) or expect the new confirmation prompt.

4. **Optional** — add GraphQL or WebSockets using the new guides; existing REST and HTML apps continue to work unchanged.
`,"../content/docs/commands.md":"# CLI commands\n\nGofreight ships a comprehensive CLI for scaffolding, migrations, queues, and day-to-day development. Run **`gofreight list`** to see every command grouped by namespace.\n\nLegacy forms still work: `gofreight generate …`, `gofreight make …`, `gofreight db:migrate`, and `gofreight routes`.\n\n---\n\n## Application\n\n| Command | Description |\n|---------|-------------|\n| `gofreight about` | App name, environment, path, database |\n| `gofreight new <name>` | Scaffold a new application |\n| `gofreight serve` | `go run .` with `.env` loaded |\n| `gofreight dev [dir]` | Dev server with file watching |\n| `gofreight test [packages]` | Run `go test ./...` |\n| `gofreight tinker` | Interactive SQL console |\n| `gofreight env` | Print current environment |\n| `gofreight down [message]` | Enable maintenance mode |\n| `gofreight up` | Disable maintenance mode |\n| `gofreight inspire` | Display a quote |\n| `gofreight list` | List all commands |\n| `gofreight help <cmd>` | Help for one command |\n| `gofreight version` / `-v` / `--version` | Show Gofreight version (branded banner) |\n\nRunning **`gofreight`** with no arguments prints the framework name and full command list.\n\n---\n\n## Database & migrations\n\n| Command | Description |\n|---------|-------------|\n| `gofreight db` | SQL console (alias for tinker) |\n| `gofreight db:create` | Create SQLite file or print driver hints |\n| `gofreight db:show` | Connection URL and driver |\n| `gofreight db:wipe` | Drop all tables |\n| `gofreight db:seed` | Run `db/seeds/*.sql` and Go seeders |\n| `gofreight db:seed --class=UserSeeder` | Run one Go seeder via `cmd/seed` |\n| `gofreight migrate` | Run pending migrations |\n| `gofreight migrate:status` | Migration up/down status |\n| `gofreight migrate:rollback` | Roll back last migration |\n| `gofreight migrate:reset` | Roll back all migrations |\n| `gofreight migrate:refresh` | Reset + migrate |\n| `gofreight migrate:fresh` | Wipe + migrate |\n| `gofreight migrate:fresh --seed` | Fresh + seed |\n\n---\n\n## Make (generators)\n\n`make:*` commands scaffold application code (aliases for `gofreight generate` / `gofreight make`):\n\n```bash\ngofreight make:model Post title:string body:text\ngofreight make:controller Posts\ngofreight make:migration add_status_to_posts\ngofreight make:scaffold Post title:string\ngofreight make:resource Post title:string    # alias for scaffold\ngofreight make:api Post title:string\ngofreight make:service PostPublishing\ngofreight make:mail WelcomeMail\ngofreight make:job SendNewsletter\ngofreight make:middleware RequestLogger\ngofreight make:policy PostPolicy\ngofreight make:request StorePostRequest\ngofreight make:seeder DatabaseSeeder\ngofreight make:factory Post\ngofreight make:test Posts\ngofreight make:auth\n```\n\nSee [generators.md](generators.md) for field types.\n\n### Seeders\n\n`make:seeder` creates `db/seeders/<name>_seeder.go` and `cmd/seed/main.go` (first time). Register seeders in the map inside `cmd/seed/main.go`, then:\n\n```bash\ngofreight db:seed\ngofreight db:seed --class=DatabaseSeeder\n```\n\n---\n\n## Queue (Redis)\n\nRequires `REDIS_URL` in `.env`.\n\n| Command | Description |\n|---------|-------------|\n| `gofreight queue:work` | Process jobs until Ctrl+C |\n| `gofreight queue:failed` | List failed jobs |\n| `gofreight queue:retry <id>` | Re-queue a failed job |\n| `gofreight queue:flush` | Remove all failed jobs |\n| `gofreight queue:clear` | Remove pending jobs |\n\n---\n\n## Routes, cache, config\n\n| Command | Description |\n|---------|-------------|\n| `gofreight route:list` | Scan `routes/*.go` for route definitions |\n| `gofreight route:clear` | Remove bootstrap route cache |\n| `gofreight cache:clear` | Clear `storage/framework/cache` |\n| `gofreight view:clear` | Clear compiled views cache |\n| `gofreight config:show [key]` | Print config values |\n| `gofreight key:generate [--show] [--force]` | Generate and write `APP_KEY` to `.env` |\n| `gofreight optimize` | Write bootstrap cache marker |\n| `gofreight optimize:clear` | Clear bootstrap cache |\n| `gofreight auth:clear-resets` | Delete expired password reset tokens |\n\n---\n\n## Examples\n\n```bash\ngofreight new blog\ncd blog\ngofreight key:generate\ngofreight db:create\ngofreight migrate\ngofreight make:seeder DatabaseSeeder\ngofreight db:seed\ngofreight make:scaffold Post title:string body:text\ngofreight route:list\ngofreight serve\n```\n\nSee [Routing](routing.md) for route groups and API resources.\n\n---\n","../content/docs/configuration.md":'# Configuration\n\nGofreight loads configuration from environment variables, `.env` files, and layered YAML config files. Environment variables always take precedence.\n\n## Environment variables\n\nEvery new app includes a `.env` file. Key variables:\n\n| Variable | Default | Purpose |\n|----------|---------|---------|\n| `APP_NAME` | `Gofreight` | Application name |\n| `APP_KEY` | — | Encryption/signing key (sessions, JWT, CSRF) |\n| `APP_URL` | `http://localhost:5000` | Base URL |\n| `APP_DEBUG` | `true` | Debug mode |\n| `GOFREIGHT_ENV` | `development` | `development`, `test`, or `production` |\n| `PORT` | `5000` | HTTP port |\n| `HOST` | `0.0.0.0` | Bind address |\n| `DB_CONNECTION` | `sqlite` | `sqlite`, `pgsql`, `mysql`, `mariadb` |\n| `DB_HOST` | `127.0.0.1` | Database host |\n| `DB_PORT` | — | `5432` (Postgres) or `3306` (MySQL) |\n| `DB_DATABASE` | — | Database name |\n| `DB_USERNAME` | — | Database user |\n| `DB_PASSWORD` | — | Database password |\n| `DB_SSLMODE` | `disable` | Postgres SSL mode |\n| `DATABASE_URL` | — | Full connection URL (overrides `DB_*`) |\n| `SESSION_DRIVER` | `memory` | `memory` or `redis` |\n| `QUEUE_DRIVER` | `memory` | `memory` or `redis` |\n| `REDIS_URL` | — | Redis connection URL |\n| `JWT_TTL` | `24h` | JWT token lifetime |\n| `LOG_LEVEL` | `info` | Log verbosity |\n| `MAIL_DRIVER` | `log` | `log`, `smtp`, `sendgrid` |\n| `MAIL_FROM` | — | Default sender address |\n\nRun `gofreight key:generate` after scaffolding to set a unique `APP_KEY`.\n\n## YAML config files\n\nLayered YAML in `config/`:\n\n```\nconfig/\n├── app.yaml           # Base settings\n├── development.yaml   # Development overrides\n├── production.yaml    # Production overrides\n└── test.yaml          # Test overrides\n```\n\nExample `config/app.yaml`:\n\n```yaml\napp_name: myapp\nport: 5000\nlog_level: info\n```\n\nEnvironment-specific files merge on top. Keys map to env vars via `ApplyEnv`:\n\n```go\nfiles.ApplyEnv(map[string]string{\n    "PORT":    "port",\n    "APP_KEY": "app_key",\n})\n```\n\n## Loading config\n\n`application.New()` calls `config.Load()` automatically:\n\n```go\napp := application.New()\napp.Config.AppName   // from APP_NAME or YAML\napp.Config.Port      // from PORT or YAML\napp.Config.AppKey    // from APP_KEY\napp.Config.DatabaseURL\n```\n\nInspect resolved config:\n\n```bash\ngofreight config:show\ngofreight config:show database\n```\n\n## Database configuration\n\nDiscrete `DB_*` variables (recommended):\n\n```env\nDB_CONNECTION=pgsql\nDB_HOST=127.0.0.1\nDB_PORT=5432\nDB_DATABASE=myapp\nDB_USERNAME=postgres\nDB_PASSWORD=secret\nDB_SSLMODE=disable\n```\n\nOr a single URL:\n\n```env\nDATABASE_URL=postgres://user:pass@localhost:5432/myapp?sslmode=disable\n```\n\nResolution order: `DATABASE_URL` → `DB_URL` → built from `DB_*`.\n\nSee **[ORM](orm.md#database-configuration)** and **[Database](database.md)**.\n\n## Integrations via env\n\nMail, storage, and cache drivers are configured through environment variables. See **[Integrations](integrations.md)**.\n\n```env\nMAIL_DRIVER=smtp\nMAIL_HOST=smtp.example.com\nMAIL_PORT=587\nMAIL_USERNAME=user\nMAIL_PASSWORD=secret\n\nSTORAGE_DRIVER=s3\nAWS_ACCESS_KEY_ID=...\nAWS_SECRET_ACCESS_KEY=...\nAWS_BUCKET=my-bucket\n```\n\n## Bootstrap wiring\n\nUse `bootstrap/app.go` to configure the application based on config:\n\n```go\nfunc Application() *application.Application {\n    app := application.New()\n\n    if os.Getenv("SESSION_DRIVER") == "redis" {\n        _ = app.UseRedisSessions(os.Getenv("REDIS_URL"))\n    }\n    if os.Getenv("QUEUE_DRIVER") == "redis" {\n        _ = app.UseRedisQueue(os.Getenv("REDIS_URL"))\n    }\n\n    app.UseCSRF()\n    _ = app.ConfigureIntegrations()\n\n    return app\n}\n```\n\n## Production checklist\n\n- Set `GOFREIGHT_ENV=production`\n- Set `APP_DEBUG=false`\n- Run `gofreight key:generate` and keep `APP_KEY` secret\n- Use PostgreSQL or MySQL instead of SQLite\n- Set `SESSION_DRIVER=redis` for multi-process deployments\n- Never commit `.env` — use `.env.example` as a template\n\nSee **[Deployment](deployment.md)** and **[Security](security.md)**.\n\n## Related\n\n- [Database](database.md) — migrations and seeding\n- [Integrations](integrations.md) — mail, storage, cache drivers\n- [Getting Started](getting-started.md) — first app setup\n',"../content/docs/controllers.md":`# Controllers

Controllers handle HTTP requests and return responses — HTML views, JSON, redirects, or errors. Each resource gets a struct with action methods bound via \`controller.Handler\`.

## Anatomy of a controller

Controllers live in \`app/controllers/\`. Each action receives a \`controller.Base\` with the current request and response:

\`\`\`go
// app/controllers/post_controller.go
package controllers

import (
    "context"
    "net/http"
    "strconv"

    "myapp/app/models"
    "github.com/lsgser/gofreight/controller"
)

type PostController struct{}

func (c PostController) Index(base controller.Base) error {
    posts, err := models.Posts.Query(base.Request.Context()).Get()
    if err != nil {
        return err
    }

    if base.WantsJSON() {
        base.RenderJSON(posts)
        return nil
    }

    return base.RenderView("posts/index", base.ViewData(map[string]any{
        "Posts": posts,
    }))
}

func (c PostController) Show(base controller.Base) error {
    id, _ := strconv.ParseInt(base.Param("id"), 10, 64)
    post, err := models.Posts.Find(base.Request.Context(), id)
    if err != nil {
        base.NotFound("Post not found")
        return nil
    }
    return base.RenderView("posts/show", base.ViewData(map[string]any{"Post": post}))
}
\`\`\`

Register actions in \`routes/web.go\`:

\`\`\`go
c := controllers.PostController{}
r.Resources("posts", router.ResourceHandlers{
    Index:   controller.Handler(c.Index),
    Show:    controller.Handler(c.Show),
    Create:  controller.Handler(c.Create),
    Update:  controller.Handler(c.Update),
    Destroy: controller.Handler(c.Destroy),
})
\`\`\`

See **[Routing](routing.md)** for \`Resources\`, \`ApiResource\`, and route groups.

## controller.Base

| Method | Purpose |
|--------|---------|
| \`Param(key)\` | Route parameter (\`:id\` from \`/posts/:id\`) |
| \`Query(key)\` | Query string value |
| \`RenderView(name, data)\` | Render a GFT template |
| \`RenderPartial(name, data)\` | Render without layout |
| \`RenderJSON(data)\` | JSON response |
| \`RenderText(text)\` | Plain text response |
| \`Redirect(url, code)\` | HTTP redirect |
| \`ViewData(extra)\` | Merge CSRF, flash errors, old input into view data |
| \`WantsJSON()\` | True when client expects JSON |
| \`ValidateUsing(schema)\` | Validate with Vine; auto-handles HTML vs JSON |
| \`NotFound(msg)\` | 404 JSON response |
| \`Unauthorized(msg)\` | 401 JSON response |
| \`Unprocessable(errors)\` | 422 JSON validation errors |

Set \`base.Status\` before rendering to control the HTTP status code (e.g. \`http.StatusCreated\`).

## Handler wrapper

\`controller.Handler\` converts an action method into \`http.HandlerFunc\`:

\`\`\`go
r.Get("/health", controller.Handler(func(base controller.Base) error {
    base.RenderJSON(map[string]string{"status": "ok"})
    return nil
}))
\`\`\`

Return a non-nil \`error\` for unexpected failures (500). Use response helpers (\`NotFound\`, \`Unprocessable\`) for expected client errors.

## HTML vs JSON

Many apps serve both browser and API clients from the same controller:

\`\`\`go
func (c PostController) Index(base controller.Base) error {
    posts, err := models.Posts.Query(base.Request.Context()).Get()
    if err != nil {
        return err
    }
    if base.WantsJSON() {
        base.RenderJSON(posts)
        return nil
    }
    return base.RenderView("posts/index", base.ViewData(map[string]any{"Posts": posts}))
}
\`\`\`

\`WantsJSON()\` checks the \`Accept\` header and \`Content-Type\`. HTML forms send \`Accept: text/html\`; API clients send \`application/json\`.

## Validation in controllers

Use Vine schemas for request validation:

\`\`\`go
var postSchema = vine.Object().
    Field("title", vine.String().Required().Min(3).Max(255)).
    Field("body", vine.String().Required())

func (c PostController) Store(base controller.Base) error {
    data, err := base.ValidateUsing(postSchema)
    if err != nil {
        return nil // ValidateUsing already responded
    }
    // create from data...
    base.Redirect("/posts", http.StatusSeeOther)
    return nil
}
\`\`\`

On failure, HTML requests redirect back with flashed errors; JSON requests get 422. See **[Forms & Validation](forms-validation.md)**.

## View data and flash

\`ViewData\` injects request-scoped template helpers:

\`\`\`go
base.RenderView("posts/edit", base.ViewData(map[string]any{
    "Post": post,
}))
\`\`\`

Templates receive CSRF tokens, validation errors (\`{{ error "title" }}\`), and old input automatically.

## REST resource actions

| Action | Method | Path | Typical use |
|--------|--------|------|-------------|
| \`Index\` | GET | \`/posts\` | List all |
| \`Show\` | GET | \`/posts/:id\` | Single record |
| \`Create\` | POST | \`/posts\` | Store new record |
| \`Update\` | PUT/PATCH | \`/posts/:id\` | Update record |
| \`Destroy\` | DELETE | \`/posts/:id\` | Delete record |

HTML resources also register \`New\` and \`Edit\` form pages. API resources (\`ApiResource\`) omit those.

## Scaffolding

Generate a full controller with views, model, and migration:

\`\`\`bash
gofreight make:scaffold Post title:string body:text
gofreight make:controller Comment
gofreight make:api Post title:string body:text
\`\`\`

## Keep controllers thin

Move business logic to \`app/services/\`:

\`\`\`go
// app/services/post_service.go
func PublishPost(ctx context.Context, id int64) error { ... }

// controller
if err := services.PublishPost(base.Request.Context(), id); err != nil { ... }
\`\`\`

See **[Services & Container](services.md)**.

## API JSON resources

Transform models into consistent JSON with \`app/resources/\` and the \`api\` package. See **[API Resources](api-resources.md)**.

## Reference app

The [blog example](https://github.com/lsgser/gofreight/tree/main/examples/blog/app/controllers) shows dual HTML/JSON controllers with associations and validation.

## Related

- [Routing](routing.md) — route registration and middleware
- [Middleware](middleware.md) — CSRF, sessions, auth
- [ORM](orm.md) — models and queries
- [Templating](templating.md) — GFT views
- [Tutorial: HTML CRUD](tutorial-html-crud.md) — step-by-step CRUD (see web tutorial)
`,"../content/docs/database.md":`# Database

Gofreight uses SQL file migrations, optional blueprint DSL, and seeders. The ORM layer (models, queries) is documented separately in **[ORM](orm.md)**.

## Connecting

Call \`app.ConnectDatabase()\` in \`main.go\`:

\`\`\`go
if err := app.ConnectDatabase(); err != nil {
    log.Printf("database: %v", err)
}
\`\`\`

Configuration via \`.env\` — see **[Configuration](configuration.md)**.

Supported drivers: **SQLite** (default), **PostgreSQL**, **MySQL**, **MariaDB**.

## Migrations

Migration files are plain SQL in \`db/migrate/\`:

\`\`\`sql
-- db/migrate/001_create_posts.sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);
\`\`\`

Optional rollback file:

\`\`\`sql
-- db/migrate/001_create_posts_down.sql
DROP TABLE IF EXISTS posts;
\`\`\`

### CLI commands

\`\`\`bash
gofreight db:create              # create database (Postgres/MySQL)
gofreight migrate                # run pending migrations
gofreight migrate:rollback       # rollback last batch
gofreight migrate:status         # show migration status
gofreight migrate:fresh          # drop all tables and re-migrate
gofreight migrate:fresh --seed   # fresh + run seeders
gofreight migrate:reset          # rollback all, then migrate up
\`\`\`

Generate a migration:

\`\`\`bash
gofreight generate migration create_posts
gofreight make:migration create_posts
\`\`\`

Migrations are tracked in a \`schema_migrations\` table.

## Blueprint DSL

Programmatic migrations with auto-generated rollback:

\`\`\`go
import "github.com/lsgser/gofreight/database"

up, down := database.CreateTableBlueprint("comments", func(b *database.Blueprint) {
    b.IntegerColumn("post_id", colNotNull())
    b.StringColumn("body")
    b.Index("post_id")
})
database.WriteMigrationPair("db/migrate", "004_create_comments", up, down)
\`\`\`

Column helpers: \`StringColumn\`, \`IntegerColumn\`, \`BooleanColumn\`, \`DateTimeColumn\`, \`DropColumn\`, \`Index\`.

Alter existing tables:

\`\`\`go
up, down := database.AlterTableBlueprint("posts", func(b *database.Blueprint) {
    b.StringColumn("slug")
})
database.WriteMigrationPair("db/migrate", "005_add_slug_to_posts", up, down)
\`\`\`

\`CreateTableBlueprint\` automatically adds \`id\`, \`created_at\`, and \`updated_at\`.

## Seeding

### SQL seeds

Place files in \`db/seeds/\`:

\`\`\`sql
-- db/seeds/001_posts.sql
INSERT INTO posts (title, body) VALUES ('Hello', 'World');
\`\`\`

Run:

\`\`\`bash
gofreight db:seed
\`\`\`

### Go seeders

Generate a seeder class:

\`\`\`bash
gofreight make:seeder PostSeeder
\`\`\`

Seeders live in \`db/seeders/\` and run via \`cmd/seed/\`.

## Inline migrations (development)

For quick schema changes during development:

\`\`\`go
// config/database.go
database.Migrate(\`
    CREATE TABLE IF NOT EXISTS posts (...);
\`)
\`\`\`

Prefer \`db/migrate/\` files for versioned schema in team projects.

## Admin dashboard

In development, manage schema visually at \`http://localhost:5000/admin\` — browse tables, edit rows, export SQL. See **[Admin Dashboard](admin.md)**.

## Testing

Use in-memory SQLite in tests:

\`\`\`go
app := gftest.NewApp(t,
    gftest.WithDatabase("sqlite://:memory:"),
    gftest.WithMigrations(migrationSQL),
)
\`\`\`

Or load from your migration directory:

\`\`\`go
gftest.WithMigrateDir("db/migrate")
\`\`\`

## Cross-database notes

| Feature | SQLite | PostgreSQL | MySQL |
|---------|--------|------------|-------|
| Default timestamps | \`TEXT\` + \`datetime('now')\` | \`TIMESTAMP DEFAULT NOW()\` | \`DATETIME DEFAULT NOW()\` |
| Auto increment | \`AUTOINCREMENT\` | \`SERIAL\` | \`AUTO_INCREMENT\` |
| Upsert | Not supported | \`ON CONFLICT\` | Insert only |

The ORM uses dialect helpers so the same model code works across drivers.

## Wipe (development)

Drop all user tables:

\`\`\`go
database.Wipe()
\`\`\`

Use with caution — development and test only.

## Related

- [ORM](orm.md) — models, queries, associations
- [Configuration](configuration.md) — database env vars
- [Testing](testing.md) — database setup in tests
- [Admin Dashboard](admin.md) — visual schema browser
`,"../content/docs/datetime.md":`# Date & time (\`support/datetime\`)

Gofreight includes a thin wrapper around [Carbon](https://github.com/dromara/carbon) for fluent date manipulation in Go.

\`\`\`go
import "github.com/lsgser/gofreight/support/datetime"

now := datetime.Now()
tomorrow := datetime.Now().AddDay()
published := datetime.Parse("2026-03-01 09:00:00")

// Store in the database (Gofreight datetime columns use strings)
record.PublishedAt = datetime.DateTimeString(published)
record.StartsOn = datetime.DateString(datetime.Now())

// Convert back to time.Time when needed
t := datetime.ToTime(now)
\`\`\`

Common Carbon methods are available on the returned value: \`AddDays\`, \`SubMonth\`, \`StartOfDay\`, \`EndOfMonth\`, \`DiffInDays\`, \`IsPast\`, \`Format\`, etc.

See the [Carbon documentation](https://github.com/dromara/carbon) for the full API.

## Timezone

Pass a timezone name to constructors:

\`\`\`go
datetime.Now("America/New_York")
datetime.Parse("2026-01-01", "UTC")
\`\`\`

Default timezone follows Carbon's global configuration.
`,"../content/docs/deployment.md":'# Deployment\n\n## Docker\n\n```bash\ndocker compose up --build\n```\n\nThe app listens on port 5000. PostgreSQL and Redis are included for local/staging stacks.\n\n## Production checklist\n\n1. Set `GOFREIGHT_ENV=production`\n2. Run `gofreight key:generate` to set a unique `APP_KEY`\n3. Configure database (`DB_*` in `.env` or managed PostgreSQL — see `.env.example`)\n4. Run migrations: `gofreight migrate`\n5. Precompile assets (automatic in `app.Run()` when production)\n6. Mount health check: `GET /health` (automatic via `app.Run()`)\n7. Configure integrations via environment variables (see [integrations.md](integrations.md))\n8. Enable CORS if serving a separate frontend: `app.UseCORS("https://yourdomain.com")`\n9. Enable rate limiting: `app.UseRateLimit(100, time.Minute)`\n10. **Never** expose `/admin` in production (disabled by default)\n\n## Environment variables\n\nSee [.env.example](../.env.example) for the full list.\n\n## Health checks\n\n```bash\ncurl http://localhost:5000/health\n```\n\nReturns JSON with database status:\n\n```json\n{"status":"ok","checks":{"database":"ok"}}\n```\n\n## Structured logging\n\nIn production, Gofreight uses JSON structured logging via `slog` for request logs.\n\n## Scaling\n\n- Run multiple app instances behind a load balancer\n- Use Redis for shared cache (`REDIS_URL`)\n- Use a managed job worker or call `app.StartJobs(4)` for background processing\n',"../content/docs/extending.md":`# Extending Gofreight

Gofreight is designed to be extended without forking the framework.

## Third-party agnostic design

The **core framework** (MVC, ORM, routing, GFT, generators) does not ship vendor-specific clients for Stripe, PayFast, Twilio, or any SaaS product. Third-party APIs connect through the **integrations registry**:

- Register any API client with \`integrations.Register()\` or \`RegisterCustom()\`.
- Select the active driver per category via env (\`PAYMENT_PROVIDER\`, \`SMS_PROVIDER\`, etc.).
- Built-in connectors cover **protocols** (SMTP, S3-compatible storage, Redis) — not branded products.

\`\`\`go
storage, _ := integrations.ActiveStorage(integrations.OsEnv{})
email, _ := integrations.ActiveEmail(integrations.OsEnv{})
payment, _ := integrations.ActivePayment(integrations.OsEnv{}) // after you register a driver
\`\`\`

## Integration providers

Register integrations at application boot:

\`\`\`go
type AppIntegrations struct{}

func (AppIntegrations) Name() string { return "app" }

func (AppIntegrations) Register(r *integrations.Registry) {
    integrations.Register("my_gateway", func() integrations.Integration {
        return &MyPaymentGateway{}
    })
    integrations.RegisterCustom("twilio", func(cfg map[string]string) error {
        return nil
    })
}

func (AppIntegrations) Boot(env integrations.EnvReader) error { return nil }

func init() {
    integrations.RegisterProvider(AppIntegrations{})
}
\`\`\`

\`app.ConfigureIntegrations()\` calls \`BootProviders()\` automatically.

## Custom integrations

\`\`\`go
integrations.RegisterCustom("slack", func(cfg map[string]string) error {
    return nil
})
\`\`\`

Environment variables follow \`{NAME}_{KEY}\`:

\`\`\`env
SLACK_URL=https://hooks.slack.com/services/...
SLACK_API_KEY=xoxb-...
SLACK_ENABLED=true
\`\`\`

## Registering a category driver

\`\`\`go
type MyGateway struct {
    enabled bool
    apiKey  string
}

func (g *MyGateway) Name() string { return "my_gateway" }
func (g *MyGateway) Category() integrations.Category { return integrations.CategoryPayment }
func (g *MyGateway) DriverID() string { return "my_gateway" }

func (g *MyGateway) Configure(env integrations.EnvReader) error {
    g.apiKey = env.Get("MY_GATEWAY_API_KEY")
    g.enabled = g.apiKey != ""
    return nil
}

func (g *MyGateway) Enabled() bool { return g.enabled }

func init() {
    integrations.Register("my_gateway", func() integrations.Integration {
        return &MyGateway{}
    })
}
\`\`\`

Your type must implement \`Name()\`, \`Configure(env)\`, and \`Enabled()\`.

## Event bus

\`\`\`go
integrations.Subscribe("order.shipped", func(e integrations.Event) {
    orderID := e.Payload["order_id"]
    // call your carrier API, send email, etc.
})

integrations.Publish(ctx, integrations.Event{
    Name: "order.shipped",
    Payload: map[string]any{"order_id": 42},
})
\`\`\`

## Middleware

Global middleware:

\`\`\`go
app := application.New()
app.Router.Use(myMiddleware)
\`\`\`

Route group middleware:

\`\`\`go
r.Group(func(api *router.Router) {
    API(api)
}).Prefix("/api/v1").Use(authMw).Apply()
\`\`\`

Per-route middleware:

\`\`\`go
r.Delete("/posts/:id", destroyHandler).Use(adminMw)
\`\`\`

See [Routing](routing.md) for nested groups and middleware order.

## Generators

Extend the CLI with custom generators by adding templates under \`generator/templates/\`.

## Database admin

The admin panel lives in \`admin/\` and uses embedded templates. Fork or wrap \`admin.Panel\` to customize the UI for your organization.

## Models and scopes

\`\`\`go
func (Posts) Published(ctx context.Context) ([]Post, error) {
    return Posts.Query(ctx).WhereEq("published", true).Get()
}
\`\`\`

See [ORM](orm.md) for associations, validations, and callbacks.
`,"../content/docs/features.md":`# Framework features

Overview of built-in Gofreight capabilities. Each topic has a dedicated guide — this page links to them.

## Core MVC

| Feature | Guide |
|---------|-------|
| HTTP routing & REST resources | [Routing](routing.md) |
| Controllers & request handling | [Controllers](controllers.md) |
| Middleware pipeline | [Middleware](middleware.md) |
| GFT templating | [Templating](templating.md) |
| Forms & Vine validation | [Forms & Validation](forms-validation.md) |

## Data layer

| Feature | Guide |
|---------|-------|
| ORM — models, queries, associations | [ORM](orm.md) |
| Migrations, seeding, blueprint DSL | [Database](database.md) |
| API JSON serializers | [API Resources](api-resources.md) |

## Auth & security

| Feature | Guide |
|---------|-------|
| Session login, JWT, API tokens, OAuth | [Authentication](authentication.md) |
| Policies & roles | [Authorization](authorization.md) |
| Sessions & flash messages | [Sessions](sessions.md) |
| CSRF, rate limiting, production hardening | [Security](security.md) |

## Infrastructure

| Feature | Guide |
|---------|-------|
| Background jobs & queues | [Jobs & Queues](jobs.md) |
| Email & mailables | [Mail](mail.md) |
| Caching (memory, Redis, HTTP) | [Cache](cache.md) |
| Service container & business logic | [Services & Container](services.md) |
| Configuration & environment | [Configuration](configuration.md) |
| Mail, storage, cache drivers | [Integrations](integrations.md) |

## Real-time & API

| Feature | Guide |
|---------|-------|
| WebSockets & channels | [Real-time WebSockets](realtime.md) |
| Modular GraphQL | [GraphQL](graphql.md) |

## Developer tools

| Feature | Guide |
|---------|-------|
| CLI commands | [CLI Commands](commands.md) |
| Code generators | [Generators](generators.md) |
| HTTP & database testing | [Testing](testing.md) |
| Dev database admin | [Admin Dashboard](admin.md) |
| Date/time helpers | [Date & Time](datetime.md) |
| Custom integrations & events | [Extending](extending.md) |
| Docker & production | [Deployment](deployment.md) |

## Quick wiring example

All features integrate via \`application.Application\`:

\`\`\`go
app := application.New()
app.ConnectDatabase()
app.UseRedisSessions(os.Getenv("REDIS_URL"))
app.UseRedisQueue(os.Getenv("REDIS_URL"))
app.UseCSRF()
app.UseLocale()
app.LoadLocales("config/locales")
app.MountSocket("/socket")
app.StartJobs(2)
app.Run()
\`\`\`

## Tutorials

Step-by-step guides on the docs site:

- [Your First App](tutorial-first-app.md) — create and run a project
- [Build a REST API](tutorial-rest-api.md) — JSON endpoints
- [HTML CRUD with GFT](tutorial-html-crud.md) — browser forms
- [JWT Authentication](tutorial-auth-jwt.md) — protected API routes
- [Real-time WebSockets](tutorial-realtime.md) — live chat
- [GraphQL API](tutorial-graphql.md) — SDL schemas, resolvers, DataLoader
`,"../content/docs/forms-validation.md":`# Forms & validation

Gofreight provides schema-based validation and GFT form components for HTML flows — validate in controllers, redirect back with errors, and repopulate fields automatically.

## Vine schemas

Define validation rules with composable field rules:

\`\`\`go
import "github.com/lsgser/gofreight/vine"

var createPostValidator = vine.Object(map[string]vine.Rule{
    "title": vine.String().Required().MinLength(3).MaxLength(255),
    "email": vine.String().Required().Email(),
    "status": vine.String().In("draft", "published"),
})
\`\`\`

Available rule chains:

| Rule | Methods |
|------|---------|
| \`vine.String()\` | \`Required()\`, \`Email()\`, \`MinLength(n)\`, \`MaxLength(n)\`, \`In(...)\` |
| \`vine.Number()\` | \`Required()\` |
| \`vine.Boolean()\` | \`Required()\` |

## Validate in controllers

\`\`\`go
func (c PostController) Create(base controller.Base) error {
    payload, err := base.ValidateUsing(createPostValidator)
    if err != nil {
        return nil // JSON 422 or redirect back with errors
    }
    // use payload map[string]string
}
\`\`\`

\`ValidateUsing\`:

- **JSON requests** — returns \`422\` with \`{ "errors": { ... } }\`
- **HTML forms** — flashes errors + old input, redirects to \`Referer\`

Helpers:

\`\`\`go
base.ViewData(map[string]any{"Item": item}) // merges CSRF, errors, old input
base.RedirectBackWithErrors(errs, old)
base.HandleValidationFailure(errs, old)
\`\`\`

## GFT form components

### \`#form\` — form wrapper with CSRF and method spoofing

\`\`\`gft
#form action="/posts" method="POST"
  #field "title" label="Title" type="text" value=".Item.Title"
  <button type="submit">Create</button>
#endform
\`\`\`

For updates, use \`method="PUT"\` — GFT emits \`_method=PUT\` and the framework rewrites the request method.

### \`#field\` — label, input, and inline errors

\`\`\`gft
#field "email" label="Email" type="email" value=".Item.Email"
#field "body" label="Body" type="textarea" value=".Item.Body"
#field "status" label="Status" type="select" options="draft,published"
#field "published" label="Published" type="checkbox"
\`\`\`

Each field renders:

- A label and input (or textarea/select/checkbox)
- Old input repopulation via the \`old\` helper
- Validation errors below the field

### \`#error\` — field errors only

\`\`\`gft
#error "email"
\`\`\`

### Manual helpers

\`\`\`gft
{= old "title" . "" }
\`\`\`

Template functions: \`old\`, \`fieldErrors\`, \`hasError\`.

## Session flash

On validation failure (HTML):

| Session key | Purpose |
|-------------|---------|
| \`_validation_errors\` | Field → messages (pulled into \`.Errors\` on next render) |
| \`_old_input\` | Submitted values (pulled into \`.Old\` on next render) |

\`RenderView\` automatically merges CSRF token, errors, old input, and flash messages via \`ViewData\` / \`MergeRequestContext\`.

## CSRF

Enable in bootstrap:

\`\`\`go
app.UseCSRF()
\`\`\`

\`#form\` and \`#token\` emit \`authenticity_token\` hidden fields. The CSRF middleware also accepts \`_csrf\` for compatibility.

## Generated scaffolds

\`gofreight make:scaffold\` generates:

- Vine validators in the controller
- \`#form\` / \`#field\` views
- \`ValidateUsing\` in create/update actions
- Redirect-back on validation failure

See also: [Templating](templating.md), [Routing](routing.md).
`,"../content/docs/generators.md":'# Generators & field types\n\nGofreight generators accept fields as `name:type` pairs:\n\n```bash\ngofreight make:scaffold Article title:string body:text status:enum:draft,published price:float published:boolean\n```\n\nUse **`gofreight make:scaffold`**, **`gofreight make:model`**, or **`gofreight make:resource`** — they share the same field type vocabulary.\n\n---\n\n## Field type reference\n\n| CLI type | Aliases | Go type | SQL (SQLite default) | Scaffold form |\n|----------|---------|---------|----------------------|---------------|\n| `string` | `str` | `string` | `VARCHAR(255)` | text input |\n| `text` | — | `string` | `TEXT` | textarea |\n| `email` | — | `string` | `VARCHAR(255)` | email input |\n| `url` | — | `string` | `VARCHAR(512)` | url input |\n| `integer` | `int` | `int` | `INTEGER` | number input |\n| `bigint` | — | `int64` | `INTEGER` | number input |\n| `float` | `decimal`, `double` | `float64` | `REAL` | number input |\n| `boolean` | `bool` | `bool` | `INTEGER` (0/1) | checkbox |\n| `datetime` | `timestamp` | `string` | `TEXT` | datetime-local input |\n| `date` | — | `string` | `TEXT` | date input |\n| `time` | — | `string` | `TEXT` | time input |\n| `uuid` | — | `string` | `TEXT` | text input |\n| `json` | `jsonb` | `string` | `TEXT` | textarea |\n| `enum` | — | `string` | `TEXT` + `CHECK (...)` | `<select>` dropdown |\n| `references` | `reference`, `belongs_to` | `int64` | `INTEGER` | number input (foreign key id) |\n\n> **Note:** New apps use **SQLite** by default. Types map cleanly to SQLite; PostgreSQL and MySQL accept the same migration SQL in most cases (`REAL`, `TEXT`, `INTEGER`, `VARCHAR`).\n\n---\n\n## Examples by type\n\n### Strings & text\n\n```bash\ngofreight make:scaffold Post title:string slug:str body:text summary:text\n```\n\n### Numbers\n\n```bash\ngofreight make:scaffold Product name:string sku:string price:float stock:integer legacy_id:bigint\n```\n\n### Booleans\n\n```bash\ngofreight make:scaffold Post title:string published:boolean featured:bool\n```\n\n### Dates & times\n\nStored as `TEXT` in SQLite (ISO-8601 strings). Use `datetime`, `date`, or `time`:\n\n```bash\ngofreight make:scaffold Event name:string starts_on:date opens_at:time published_at:datetime\n```\n\n### Email & URL\n\n```bash\ngofreight make:scaffold Contact name:string email:email website:url\n```\n\n### JSON\n\nStored as `TEXT`; validate/parse in application code:\n\n```bash\ngofreight make:scaffold Setting key:string metadata:json config:jsonb\n```\n\n### Enums\n\nComma-separated allowed values. Generates a `CHECK` constraint and a `<select>` in forms:\n\n```bash\ngofreight make:scaffold Article title:string status:enum:draft,published,archived\n```\n\nMigration column:\n\n```sql\nstatus TEXT NOT NULL CHECK (status IN (\'draft\', \'published\', \'archived\')),\n```\n\n### Foreign keys (`references`)\n\nUse for `belongs_to` associations. Column name should follow `*_id` convention:\n\n```bash\ngofreight make:scaffold Comment body:text post_id:references:posts author_id:belongs_to:users\n```\n\nSyntax:\n\n- `post_id:references:posts`\n- `post_id:reference:posts`\n- `user_id:belongs_to:users`\n\nGenerates `INTEGER NOT NULL` and a number input in forms. Add explicit `FOREIGN KEY` constraints in migrations manually if required.\n\n### UUID\n\n```bash\ngofreight make:scaffold ApiToken name:string token:uuid\n```\n\n---\n\n## Full scaffold example\n\n```bash\ngofreight make:scaffold Article \\\n  title:string \\\n  slug:string \\\n  body:text \\\n  status:enum:draft,published,archived \\\n  published:boolean \\\n  views:integer \\\n  price:float \\\n  published_at:datetime \\\n  metadata:json\n```\n\nCreates:\n\n| Output | Description |\n|--------|-------------|\n| `app/models/article.go` | Model + presence validators |\n| `app/controllers/article_controller.go` | REST controller |\n| `app/views/articles/*.gft` | GFT views (enum → select, text → textarea, etc.) |\n| `db/migrate/NNN_create_articles.sql` | SQLite migration |\n| `tests/article_test.go` | HTTP tests |\n| `tests/factories/article_factory.go` | Test factory with **faker** defaults |\n| Route registration in `routes/web.go` | REST routes (`Resources`) |\n\nFor JSON APIs, use `gofreight make:api` and register with `ApiResource` in `routes/api.go`. See [Routing](routing.md).\n\n---\n\n## Routing generated resources\n\n### Web (HTML)\n\nScaffold adds REST routes to `routes/web.go`:\n\n```go\nr.Resources("articles", router.ResourceHandlers{\n    Index: controller.Handler(c.Index),\n    // ...\n})\n```\n\n### API (JSON)\n\n`make:api` creates a controller and resource. Register in `routes/api.go`:\n\n```go\nr.ApiResource("articles", router.ApiResourceHandlers{\n    Index:   controller.Handler(c.Index),\n    Store:   controller.Handler(c.Store),\n    Show:    controller.Handler(c.Show),\n    Update:  controller.Handler(c.Update),\n    Destroy: controller.Handler(c.Destroy),\n})\n```\n\nThe `/api/v1` prefix is applied in `routes/register.go` via route groups. See [Routing](routing.md).\n\n---\n\n## Syntax rules\n\n| Rule | Example |\n|------|---------|\n| Field format | `name:type` |\n| Enum values | `name:enum:value1,value2,value3` |\n| Foreign key | `post_id:references:posts` |\n| Unknown type | Falls back to `string` / `VARCHAR(255)` |\n\nField names are lowercased for database columns (`title` → `db:"title"`) and title-cased for Go struct fields (`Title`).\n\n---\n\n## Generators\n\n| Command | Description |\n|---------|-------------|\n| `gofreight make:scaffold Name fields...` | Full CRUD (recommended) |\n| `gofreight make:model Name fields...` | Model + migration only |\n| `gofreight make:controller Name` | Controller only |\n| `gofreight make:migration name` | Empty migration stub |\n| `gofreight make:api Name fields...` | JSON API controller + resource |\n| `gofreight make:service Name` | Service class in `app/services/` |\n| `gofreight make:mail Name` | Mailable + view in `app/mail/` |\n| `gofreight make:job Name` | Job class in `app/jobs/` |\n| `gofreight make:middleware Name` | Middleware in `app/middleware/` |\n| `gofreight make:policy Name` | Policy in `app/policies/` |\n| `gofreight make:request Name` | Form request in `app/requests/` |\n| `gofreight make:seeder Name` | Go seeder in `db/seeders/` |\n| `gofreight make:factory Name` | Test factory in `tests/factories/` |\n| `gofreight make:test Name` | Feature test in `tests/` |\n| `gofreight make:auth` | User model + auth scaffolding |\n\nLegacy: `gofreight generate …` and `gofreight make …` work the same way (`generate resource` = `make:scaffold`). Run **`gofreight list make`** for the full list. See [commands.md](commands.md).\n\n### Services\n\nKeep controllers thin — put business logic in services:\n\n```bash\ngofreight make service PaymentProcessing\n# → app/services/payment_processing_service.go\n```\n\nUse in a controller:\n\n```go\nimport "{{module}}/app/services"\n\nsvc := services.NewPaymentProcessingService()\n// svc.Process(...)\n```\n\nSee also [Getting Started](getting-started.md), [Project structure](project-structure.md), and [ORM](orm.md).\n',"../content/docs/getting-started.md":'# Getting Started\n\n## Install the CLI\n\n```bash\ngo install github.com/lsgser/gofreight/cmd/gofreight@latest\n```\n\n`go install` puts the binary in `$(go env GOPATH)/bin` (usually `~/go/bin`). That folder must be on your `PATH`:\n\n```bash\nexport PATH="$PATH:$(go env GOPATH)/bin"\ngofreight version   # should print: gofreight v0.2.0\n```\n\n**macOS (zsh)** — add to `~/.zshrc` so it persists:\n\n```bash\necho \'export PATH="$PATH:$(go env GOPATH)/bin"\' >> ~/.zshrc\nsource ~/.zshrc\n```\n\nOr run without changing PATH:\n\n```bash\n$(go env GOPATH)/bin/gofreight new myapp\n```\n\nFrom source:\n\n```bash\ngit clone https://github.com/lsgser/gofreight.git\ncd gofreight && go install ./cmd/gofreight\nexport PATH="$PATH:$(go env GOPATH)/bin"\n```\n\n## Create and run a new app\n\nNew apps use **SQLite by default** — no database server to install.\n\n```bash\ngofreight new myapp\ncd myapp\ngo mod tidy\ngofreight key:generate\ngofreight db:create\ngofreight migrate\ngofreight serve          # http://localhost:5000\n```\n\nVisit **http://localhost:5000**. In development, the database admin is at **http://localhost:5000/admin**.\n\n### `.env` defaults (created by `gofreight new`)\n\n```env\nAPP_NAME=myapp\nGOFREIGHT_ENV=development\nPORT=5000\nDB_CONNECTION=sqlite\nAPP_KEY=\n```\n\nRun `gofreight key:generate` after scaffolding to set a unique encryption key.\n\nSee `.env.example` for all variables. SQLite uses `db/development.db` by default — no `DB_DATABASE` line needed. For PostgreSQL, MySQL, or MariaDB, set `DB_CONNECTION` and uncomment `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` (use port `5432` for PostgreSQL or `3306` for MySQL/MariaDB).\n\nSee **[Project structure](project-structure.md)** for the full application layout and how the framework module differs from your app.\n\n## Routing\n\nRoutes live in `routes/web.go` (HTML) and `routes/api.go` (JSON). **`routes/register.go`** wires them with **route groups**:\n\n```go\nfunc Register(r *router.Router) {\n    Web(r)\n\n    r.Group(func(api *router.Router) {\n        API(api)\n    }).Prefix("/api/v1").Name("api.").Apply()\n}\n```\n\nInside the group callback, define paths **without** the prefix (`/health`, not `/api/v1/health`). Chain `.Use(middleware)` for auth or rate limits. See **[Routing](routing.md)** for nested groups, `ApiResource`, and middleware order.\n\n```bash\ngofreight route:list\n```\n\n## Application bootstrap\n\n```go\napp := application.New()\napp.ConnectDatabase()\napp.ConfigureIntegrations() // optional: wire mail, cache, storage from .env\napp.Draw(routes.Register)   // web + API routes\napp.Run()\n```\n\n`Run()` mounts static assets, the admin panel (development only), health checks, and graceful shutdown.\n\n## Generate code\n\n```bash\ngofreight make:scaffold Post title:string body:text published:boolean\ngofreight migrate\n```\n\nField types (`string`, `text`, `integer`, `boolean`, `enum`, `json`, `datetime`, `references`, …): see **[Generators & field types](generators.md)**.\n\nIndividual generators:\n\n```bash\ngofreight make:model Post title:string body:text published:boolean\ngofreight make:controller Post\ngofreight make:migration add_slug_to_posts\ngofreight make:seeder DatabaseSeeder\ngofreight migrate\n```\n\nRun **`gofreight list`** for the complete CLI. See **[CLI commands](commands.md)**.\n\n## Environment variables\n\n| Variable | Default | Description |\n|----------|---------|-------------|\n| `GOFREIGHT_ENV` | development | `development`, `test`, or `production` |\n| `PORT` | 5000 | HTTP port |\n| `APP_URL` | http://localhost:5000 | Public application URL |\n| `DB_CONNECTION` | sqlite | Database driver |\n| `DB_DATABASE` | db/development.db (SQLite) | Database name for Postgres/MySQL/MariaDB; optional for SQLite |\n| `APP_KEY` | (empty) | Application encryption key — run `gofreight key:generate` |\n\nOptional integration keys match `.env.example`: `SESSION_DRIVER`, `QUEUE_CONNECTION`, `CACHE_STORE`, `FILESYSTEM_DISK`, `MAIL_MAILER`, `REDIS_HOST`, `AWS_*`, etc.\n\nSee [Integrations](integrations.md) for configuring mail, storage, cache, and custom API drivers via environment variables.\n',"../content/docs/graphql.md":`# GraphQL

Gofreight includes a modular GraphQL server with reusable schema modules, SDL string definitions (like \`gql\` in JavaScript/TypeScript), DataLoader support, GraphiQL playground, and layered security limits.

## Quick start

### Option A — SDL strings (recommended)

Define your schema in GraphQL SDL and bind Go resolvers:

\`\`\`go
import (
    gql "github.com/graphql-go/graphql"
    gfgraphql "github.com/lsgser/gofreight/graphql"
)

const postSchema = \`
    type Post {
        id: ID!
        title: String!
        body: String
    }

    extend type Query {
        posts: [Post!]!
        post(id: ID!): Post
    }

    extend type Mutation {
        createPost(title: String!, body: String): Post!
    }
\`

func PostModule() gfgraphql.Module {
    sdl, _ := gfgraphql.GQL(postSchema)

    mod, err := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
        ID:          "post",
        Description: "Post queries and mutations",
        SDL:         sdl,
        Resolvers: gfgraphql.SDLResolvers{
            Query: map[string]gql.FieldResolveFn{
                "posts": listPosts,
                "post":  getPost,
            },
            Mutation: map[string]gql.FieldResolveFn{
                "createPost": createPost,
            },
            TypeFields: map[string]gql.FieldResolveFn{
                // "Post.author": resolvePostAuthor,
            },
        },
    })
    if err != nil {
        panic(err)
    }
    return mod
}
\`\`\`

\`GQL()\` validates SDL at init time — the same workflow as the \`gql\` template tag in Apollo or graphql-tag.

### Option B — programmatic types

Build types with \`graphql-go\` directly when you need interfaces, unions, or dynamic schemas:

\`\`\`go
postType := gql.NewObject(gql.ObjectConfig{
    Name: "Post",
    Fields: gql.Fields{
        "id":    &gql.Field{Type: gql.NewNonNull(gql.ID)},
        "title": &gql.Field{Type: gql.NewNonNull(gql.String)},
    },
})

return gfgraphql.MustCreateModule(gfgraphql.ModuleConfig{
    ID:    "post",
    Types: []gql.Type{postType},
    Query: gql.Fields{
        "posts": &gql.Field{Type: gql.NewList(postType), Resolve: listPosts},
    },
})
\`\`\`

See \`demoapp/graphql/modules.go\` for a full programmatic example.

### Mount the application

\`\`\`go
gqlApp, err := gfgraphql.CreateApplication(gfgraphql.ApplicationConfig{
    Modules: []gfgraphql.Module{
        PostModule(),
        UserModule(),
    },
    Playground: true,
    RateLimit:  120,
    Security:   gfgraphql.DefaultSecurity(),
    OnRequest: func(r *http.Request, loaders *gfgraphql.LoaderRegistry) context.Context {
        registerLoaders(loaders)
        return gfgraphql.DefaultOnRequest(r, loaders)
    },
})

gqlApp.Mount(app.Router, "/graphql")
// Or: app.MountGraphQLApplication("/graphql", gqlApp)
\`\`\`

### Endpoints

| URL | Purpose |
|-----|---------|
| \`POST /graphql\` | Execute queries and mutations |
| \`GET /graphql/playground\` | GraphiQL playground (development) |
| \`GET /graphql/docs\` | Plain-text module index |

---

## SDL schema definitions

Write schema types as GraphQL SDL strings. Gofreight parses them with the same spec parser used across the GraphQL ecosystem.

### The GQL helper

\`\`\`go
// Validates at package init — panics if SDL is invalid
var schema = gfgraphql.MustGQL(\`
    type User {
        id: ID!
        name: String!
    }
\`)

// Or return an error
sdl, err := gfgraphql.GQL(\`
    extend type Query {
        users: [User!]!
    }
\`)
\`\`\`

### Resolver bindings

SDL defines **what** the API looks like; Go functions define **how** fields resolve:

| Map key | Binds to |
|---------|----------|
| \`Resolvers.Query["posts"]\` | \`extend type Query { posts: ... }\` |
| \`Resolvers.Mutation["createPost"]\` | \`extend type Mutation { createPost: ... }\` |
| \`Resolvers.Subscription["onMessage"]\` | \`extend type Subscription { ... }\` |
| \`Resolvers.TypeFields["Post.author"]\` | \`type Post { author: User }\` field resolver |

Every root field declared in SDL must have a matching resolver function.

---

## Resolvers

A **resolver** is a Go function that fetches the data for a single GraphQL field. Gofreight uses [graphql-go](https://github.com/graphql-go/graphql) resolver signatures throughout.

### Resolver function signature

\`\`\`go
import gql "github.com/graphql-go/graphql"

// FieldResolveFn — return (value, error)
func listPosts(p gql.ResolveParams) (any, error) {
    return posts, nil
}
\`\`\`

Bind resolvers when building modules:

| Approach | How |
|----------|-----|
| **SDL module** | \`SDLResolvers.Query\`, \`.Mutation\`, \`.TypeFields\` maps |
| **Programmatic module** | \`Resolve:\` on each \`gql.Field\` |

### ResolveParams

Every resolver receives \`gql.ResolveParams\`:

| Field | Type | Used for |
|-------|------|----------|
| \`p.Context\` | \`context.Context\` | Request context, auth, DataLoaders, deadlines |
| \`p.Args\` | \`map[string]any\` | Field arguments (\`id\`, \`title\`, input objects) |
| \`p.Source\` | \`any\` | Parent object — **field resolvers only** |
| \`p.Info\` | \`graphql.ResolveInfo\` | Field name, parent type, return type |

\`\`\`go
func getPost(p gql.ResolveParams) (any, error) {
    // Argument from: post(id: "1")
    id, _ := p.Args["id"].(string)

    post := findPost(id)
    if post == nil {
        return nil, fmt.Errorf("post not found")
    }
    return post, nil
}
\`\`\`

### Root resolvers (Query / Mutation)

Root resolvers start a query tree. They receive **no parent** — \`p.Source\` is nil.

\`\`\`go
// SDL binding
Resolvers: gfgraphql.SDLResolvers{
    Query: map[string]gql.FieldResolveFn{
        "posts": listPosts,
        "post":  getPost,
    },
    Mutation: map[string]gql.FieldResolveFn{
        "createPost": createPost,
    },
}

// Programmatic binding
Query: gql.Fields{
    "posts": &gql.Field{
        Type:    gql.NewList(postType),
        Resolve: listPosts,
    },
}
\`\`\`

**Query resolver** — return a single object, a list, or a scalar:

\`\`\`go
func listPosts(_ gql.ResolveParams) (any, error) {
    return []map[string]any{
        {"id": "1", "title": "Hello"},
    }, nil
}
\`\`\`

**Mutation resolver** — read args, persist, return the changed object:

\`\`\`go
func createPost(p gql.ResolveParams) (any, error) {
    title, _ := p.Args["title"].(string)
    body, _ := p.Args["body"].(string)
    authorID, _ := p.Args["authorId"].(string)

    post := savePost(title, body, authorID)
    return post, nil
}
\`\`\`

### Field resolvers (nested objects)

When a client requests nested data, GraphQL calls a **field resolver** for each nested field that needs custom logic:

\`\`\`graphql
query {
  posts {
    title
    author { name }   # triggers Post.author resolver
  }
}
\`\`\`

The parent \`Post\` is passed as \`p.Source\`:

\`\`\`go
func resolvePostAuthor(p gql.ResolveParams) (any, error) {
    post, _ := p.Source.(map[string]any)
    authorID, _ := post["authorId"].(string)
    return loadUser(p.Context, authorID)
}

// SDL: TypeFields["Post.author"]
// Programmatic: Resolve on the "author" gql.Field
\`\`\`

**When you need a field resolver:**

| Situation | Resolver needed? |
|-----------|------------------|
| Field value is already on the parent object (same key name) | No — graphql-go reads it from the map/struct |
| Field is a relation (author, comments, tags) | Yes |
| Field needs computation (fullName, isPublished) | Yes |
| Field uses DataLoader batching | Yes |

For \`map[string]any\` parents, keys like \`"title"\` and \`"id"\` resolve automatically. Relations like \`"author"\` need an explicit resolver unless the map already contains a nested \`"author"\` value.

### Returning data

Resolvers can return:

\`\`\`go
// map — flexible, common in tutorials
return map[string]any{"id": "1", "title": "Hello"}, nil

// struct — typed models from the ORM
return &models.Post{Title: "Hello"}, nil

// slice
return []map[string]any{...}, nil

// scalar
return "ok", nil

// nullable field — return nil, nil
return nil, nil
\`\`\`

GraphQL serializes struct fields using their Go names (export \`json\` tags if you customize serialization via maps).

### Reading arguments

Arguments from the GraphQL query arrive in \`p.Args\`:

\`\`\`graphql
query {
  post(id: "42") { title }
}

mutation {
  createPost(title: "Hi", body: "Text", authorId: "1") { id }
}
\`\`\`

\`\`\`go
id, _ := p.Args["id"].(string)
title, _ := p.Args["title"].(string)

// Optional arg — may be nil if omitted
if body, ok := p.Args["body"].(string); ok {
    post.Body = body
}
\`\`\`

For input object arguments:

\`\`\`graphql
mutation {
  createPost(input: { title: "Hi", authorId: "1" }) { id }
}
\`\`\`

\`\`\`go
input, _ := p.Args["input"].(map[string]any)
title, _ := input["title"].(string)
\`\`\`

### Errors

Return an error to surface a GraphQL error response:

\`\`\`go
func getPost(p gql.ResolveParams) (any, error) {
    id, _ := p.Args["id"].(string)
    post := findPost(id)
    if post == nil {
        return nil, fmt.Errorf("post %s not found", id)
    }
    return post, nil
}
\`\`\`

The client receives:

\`\`\`json
{
  "errors": [{ "message": "post 99 not found" }],
  "data": { "post": null }
}
\`\`\`

Use errors for exceptional cases. For expected "not found" on nullable fields, \`return nil, nil\` is also valid.

### Context, auth, and DataLoaders

\`p.Context\` carries per-request data. Register loaders and session in \`OnRequest\`:

\`\`\`go
OnRequest: func(r *http.Request, loaders *gfgraphql.LoaderRegistry) context.Context {
    registerLoaders(loaders)
    return gfgraphql.DefaultOnRequest(r, loaders) // loaders + session + client IP
},
\`\`\`

**Auth in resolvers** (when the route uses \`auth.Guard.Middleware\` or JWT middleware):

\`\`\`go
import "github.com/lsgser/gofreight/auth"

func createPost(p gql.ResolveParams) (any, error) {
    userID, ok := auth.UserIDFromContext(p.Context)
    if !ok {
        return nil, fmt.Errorf("authentication required")
    }
    // use userID as authorId...
}
\`\`\`

**DataLoader in field resolvers:**

\`\`\`go
func resolvePostAuthor(p gql.ResolveParams) (any, error) {
    post, _ := p.Source.(map[string]any)
    authorID, _ := post["authorId"].(string)

    loader, ok := gfgraphql.LoaderFromContext[string, map[string]any](p.Context, "user")
    if !ok {
        return findUser(authorID), nil
    }
    return loader.Load(p.Context, authorID)()
}
\`\`\`

### Resolvers with the ORM

Load data in resolvers using Gofreight models:

\`\`\`go
import (
    "context"
    "myapp/app/models"
)

func listPosts(p gql.ResolveParams) (any, error) {
    return models.Posts.Query(p.Context).OrderDesc("created_at").Get()
}

func getPost(p gql.ResolveParams) (any, error) {
    id, _ := p.Args["id"].(string)
    postID, _ := strconv.ParseInt(id, 10, 64)
    return models.Posts.Find(p.Context, postID)
}

func createPost(p gql.ResolveParams) (any, error) {
    post := &models.Post{
        Title: p.Args["title"].(string),
        Body:  p.Args["body"].(string),
    }
    if err := models.Posts.Create(p.Context, post); err != nil {
        return nil, err
    }
    return post, nil
}

func resolvePostAuthor(p gql.ResolveParams) (any, error) {
    post, _ := p.Source.(*models.Post)
    return models.Users.Find(p.Context, post.UserID)
}
\`\`\`

Use \`Query().With("Comments")\` for eager loading at the list level, or DataLoaders for nested fields — see **[ORM](orm.md)**.

### Organizing resolver code

Keep schema and resolver wiring separate:

\`\`\`
app/graphql/
├── schema.go      # SDL strings (MustGQL)
├── resolvers.go   # resolver functions
├── loaders.go     # DataLoader batch functions
├── modules.go     # ModuleFromSDL + bind resolvers
└── register.go    # CreateApplication + Mount
\`\`\`

Named functions stay testable and reusable:

\`\`\`go
// resolvers.go
func listPosts(p gql.ResolveParams) (any, error) { ... }
func getPost(p gql.ResolveParams) (any, error) { ... }
func createPost(p gql.ResolveParams) (any, error) { ... }
func resolvePostAuthor(p gql.ResolveParams) (any, error) { ... }

// modules.go
Resolvers: gfgraphql.SDLResolvers{
    Query:      map[string]gql.FieldResolveFn{"posts": listPosts, "post": getPost},
    Mutation:   map[string]gql.FieldResolveFn{"createPost": createPost},
    TypeFields: map[string]gql.FieldResolveFn{"Post.author": resolvePostAuthor},
},
\`\`\`

### Rate-limited resolvers

Wrap sensitive mutations with per-field rate limits:

\`\`\`go
"createPost": gfgraphql.Field(gfgraphql.FieldConfig{
    Type:    postType,
    Args:    createPostArgs,
    Resolve: createPost,
}, gfgraphql.WithFieldRateLimit(30, time.Minute)),
\`\`\`

### Multi-module SDL

Split schema across modules — each module owns its types and root fields:

\`\`\`go
userMod, _ := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
    ID:  "user",
    SDL: userSDL,
    Resolvers: gfgraphql.SDLResolvers{
        Query: map[string]gql.FieldResolveFn{"users": listUsers},
    },
})

postMod, _ := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
    ID:  "post",
    SDL: postSDL,
    Resolvers: gfgraphql.SDLResolvers{ ... },
})
\`\`\`

Rules when combining modules:

- Each module requires a unique \`ID\`
- Duplicate \`Query\` / \`Mutation\` fields across modules are rejected
- Types with the same name must be identical

---

## Supported GraphQL types

Split schema across modules — each module owns its types and root fields:

\`\`\`go
// user_module.go
userMod, _ := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
    ID:  "user",
    SDL: userSDL,
    Resolvers: gfgraphql.SDLResolvers{
        Query: map[string]gql.FieldResolveFn{
            "users": listUsers,
        },
    },
})

// post_module.go
postMod, _ := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
    ID:  "post",
    SDL: postSDL,
    Resolvers: gfgraphql.SDLResolvers{ ... },
})

gqlApp, _ := gfgraphql.CreateApplication(gfgraphql.ApplicationConfig{
    Modules: []gfgraphql.Module{userMod, postMod},
})
\`\`\`

Rules when combining modules:

- Each module requires a unique \`ID\`
- Duplicate \`Query\` / \`Mutation\` fields across modules are rejected
- Types with the same name must be identical

---

## Supported GraphQL types

Gofreight builds on [graphql-go](https://github.com/graphql-go/graphql). Types available from **SDL strings**:

| GraphQL type | SDL example | Go value in resolvers |
|--------------|-------------|----------------------|
| \`String\` | \`name: String\` | \`string\` |
| \`Int\` | \`count: Int\` | \`int\`, \`int32\`, \`int64\` |
| \`Float\` | \`price: Float\` | \`float32\`, \`float64\` |
| \`Boolean\` | \`published: Boolean\` | \`bool\` |
| \`ID\` | \`id: ID!\` | \`string\` |
| \`Enum\` | \`status: Status!\` | \`string\` (enum value name) |
| \`Object\` | \`author: User!\` | \`map[string]any\`, struct, or pointer |
| \`InputObject\` | \`input: CreatePostInput!\` | \`map[string]any\` (from args) |
| \`List\` | \`tags: [String!]!\` | \`[]any\`, typed slice |
| \`NonNull\` | \`title: String!\` | Must not return \`nil\` |
| Custom scalar | \`date: DateTime\` | Any serializable value (configure via \`Scalars\`) |

**Programmatic-only** (use \`gql.NewInterface\`, \`gql.NewUnion\`):

| Type | Notes |
|------|-------|
| \`Interface\` | Requires \`ResolveType\` function |
| \`Union\` | Requires \`ResolveType\` function |
| \`Subscription\` | Root fields via SDL or programmatic \`ModuleConfig\` |

### Custom scalars in SDL

\`\`\`go
gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
    SDL: \`
        scalar DateTime
        type Event { startsAt: DateTime! }
        extend type Query { events: [Event!]! }
    \`,
    Scalars: map[string]gql.ScalarConfig{
        "DateTime": {
            Name:        "DateTime",
            Description: "ISO8601 datetime",
            Serialize:   func(value any) any { return value },
            ParseValue:  func(value any) any { return value },
        },
    },
    Resolvers: ...,
})
\`\`\`

### Type modifiers

\`\`\`graphql
title: String          # nullable String
title: String!         # non-null String
posts: [Post]          # nullable list of nullable Post
posts: [Post!]!        # non-null list of non-null Post
\`\`\`

---

## GraphQL modules

Each module is a self-contained schema fragment. Create with \`CreateModule\` (programmatic) or \`ModuleFromSDL\` (SDL string):

\`\`\`go
mod := gfgraphql.MustCreateModule(gfgraphql.ModuleConfig{
    ID:          "user",
    Description: "User types and queries",
    Types:       []gql.Type{userType},
    Query:       userQueries,
})
\`\`\`

Merge modules with \`CreateApplication\`.

---

## Rate limiting

### Global (entire endpoint)

\`\`\`go
gfgraphql.ApplicationConfig{RateLimit: 120} // per IP per minute
\`\`\`

### Per-field

\`\`\`go
limits := gfgraphql.NewFieldRateLimitRegistry()
limits.Set("Mutation", "createPost", gfgraphql.RateLimitRule{Limit: 30, Window: time.Minute})

// Or on a single field:
gfgraphql.Field(gfgraphql.FieldConfig{ ... }, gfgraphql.WithFieldRateLimit(30, time.Minute))
\`\`\`

---

## DataLoader

Batch N+1 queries with per-request loaders:

\`\`\`go
reg.Register("user", func() any {
    return gfgraphql.NewLoader[string, *User](batchLoadUsers)
})

loader, _ := gfgraphql.LoaderFromContext[string, *User](ctx, "user")
return loader.Load(ctx, userID)()
\`\`\`

Register loaders in \`OnRequest\` — they are created once per GraphQL request.

---

## Fragments

GraphQL **fragments** let clients reuse field selections across queries. Gofreight supports the full GraphQL fragment spec — named fragments, inline fragments, and fragment spreads — at execution time and in security validation.

No server-side setup is required. Define reusable selections in your **client queries** (or in the playground).

### Named fragments

Define a reusable block with \`fragment Name on Type\`:

\`\`\`graphql
fragment PostFields on Post {
  id
  title
  body
}

query ListPosts {
  posts {
    ...PostFields
    author {
      name
    }
  }
}

query GetPost($id: ID!) {
  post(id: $id) {
    ...PostFields
  }
}
\`\`\`

Spread a fragment with \`...PostFields\`. Resolvers run the same way — each field inside the fragment triggers the same resolver as if it were written inline.

### Inline fragments

Select fields conditionally on a type without defining a named fragment:

\`\`\`graphql
query {
  posts {
    ... on Post {
      title
      author { name }
    }
  }
}
\`\`\`

Useful for union or interface fields when you add those types programmatically.

### Fragments with variables

Operation variables work inside fragment spreads:

\`\`\`graphql
query PostDetail($id: ID!) {
  post(id: $id) {
    ...PostFields
  }
}
\`\`\`

Send variables in the POST body:

\`\`\`json
{
  "query": "query PostDetail($id: ID!) { post(id: $id) { ...PostFields } } fragment PostFields on Post { id title }",
  "variables": { "id": "1" }
}
\`\`\`

### Client-side with \`gql\`

In JavaScript or TypeScript, combine SDL schema strings (server) with fragment queries (client):

\`\`\`typescript
import { gql, request } from 'graphql-request'

const PostFields = gql\`
  fragment PostFields on Post {
    id
    title
    body
  }
\`

const LIST_POSTS = gql\`
  \${PostFields}
  query ListPosts {
    posts {
      ...PostFields
      author { name }
    }
  }
\`

const data = await request('http://localhost:5000/graphql', LIST_POSTS)
\`\`\`

On the server, only resolvers matter — fragments are expanded by the GraphQL engine before field execution.

### Security and fragments

Depth and complexity limits **expand fragment spreads** before checking limits, so clients cannot bypass \`MaxDepth\` or \`MaxComplexity\` by hiding fields inside fragments.

\`\`\`go
gfgraphql.ValidateQuery(query, gfgraphql.ProductionSecurity())
gfgraphql.ParseQuery(query) // parse operations + fragment definitions
\`\`\`

Recursive fragment spreads (\`...A\` → \`...A\`) are detected and do not cause infinite loops during validation.

### Playground example

Paste into **http://localhost:5000/graphql/playground**:

\`\`\`graphql
fragment PostCard on Post {
  id
  title
  author {
    name
  }
}

query {
  posts {
    ...PostCard
  }
}
\`\`\`

---

## Security

| Option | Default (dev) | Production |
|--------|---------------|------------|
| \`MaxDepth\` | 10 | 8 |
| \`MaxComplexity\` | 200 | 100 |
| \`AllowIntrospection\` | true | false |
| \`RateLimit\` | optional | recommended |

\`\`\`go
gfgraphql.ProductionSecurity()
\`\`\`

Queries are validated **before execution**. Use \`auth.Guard.Middleware\` on the route group if the endpoint requires authentication.

---

## Example queries

\`\`\`graphql
query {
  posts {
    id
    title
    author { name email }
  }
}

mutation {
  createPost(title: "New post", body: "Hello", authorId: "1") {
    id
    title
  }
}
\`\`\`

---

## Demo app

\`\`\`bash
cd demoapp
gofreight serve
# Playground: http://localhost:5000/graphql/playground
\`\`\`

---

## Related

- **[Tutorial: GraphQL](tutorial-graphql.md)** — build a posts API with SDL and step-by-step resolvers
- [Authentication](authentication.md) — protect GraphQL routes
- [ORM](orm.md) — load data in resolvers
`,"../content/docs/integrations.md":`# Integrations

Gofreight provides a **generic integration registry** for connecting third-party APIs. The framework ships **no vendor-specific payment, CRM, or SaaS clients**. You register what your app needs via categories and drivers.

## How it works

| Concept | Description |
|---------|-------------|
| **Category** | Service type: mail, storage, cache, payment, analytics, webhook, or your own |
| **Driver** | A registered implementation for that category |
| **Env selection** | Standard keys: \`MAIL_MAILER\`, \`FILESYSTEM_DISK\`, \`CACHE_STORE\`, \`QUEUE_CONNECTION\`, \`REDIS_HOST\`, … |
| **Registry** | \`integrations.Register()\` adds drivers at boot |

Built-in **category connectors** (protocol-level, not vendor-branded):

| Category | Primary env | Also accepts |
|----------|-------------|--------------|
| Mail | \`MAIL_MAILER\` | \`MAIL_DRIVER\`, \`EMAIL_PROVIDER\` |
| Storage | \`FILESYSTEM_DISK\` | \`STORAGE_PROVIDER\` |
| Cache | \`CACHE_STORE\` | \`CACHE_DRIVER\` |
| Queue | \`QUEUE_CONNECTION\` | \`QUEUE_DRIVER\` |
| Session | \`SESSION_DRIVER\` | — |
| Analytics | \`ANALYTICS_PROVIDER\` | — |
| Webhooks | \`WEBHOOK_DRIVER\` | — |

**Payments, SMS, CRM, billing, and every other API** — register in your application:

\`\`\`go
integrations.Register("my_gateway", func() integrations.Integration {
    return &MyPaymentGateway{}
})
\`\`\`

\`\`\`env
PAYMENT_PROVIDER=my_gateway
MY_GATEWAY_API_KEY=...
\`\`\`

## Setup

\`\`\`go
app := application.New()
app.ConfigureIntegrations() // wires cache + mail from .env
// or: integrations.BootProviders(integrations.OsEnv{})
\`\`\`

Integrations configure automatically when you call \`app.Run()\`.

## Resolving the active driver

\`\`\`go
import "github.com/lsgser/gofreight/integrations"

storage, _ := integrations.ActiveStorage(integrations.OsEnv{})
email, _ := integrations.ActiveEmail(integrations.OsEnv{})
redis, _ := integrations.ActiveRedis(integrations.OsEnv{})

// Any category — including payment after you register a driver
payment, ok := integrations.ActivePayment(integrations.OsEnv{})
if ok {
    cd, _ := integrations.AsCategorizedDriver(payment)
    log.Println("payments via", cd.DriverID())
}

// Or generic resolution
i, ok := integrations.Active(integrations.CategoryPayment, integrations.OsEnv{})
\`\`\`

## Registering a third-party API

Implement \`Integration\` and optionally \`CategorizedDriver\`:

\`\`\`go
type MyGateway struct {
    apiKey  string
    enabled bool
}

func (g *MyGateway) Name() string { return "my_gateway" }
func (g *MyGateway) Category() integrations.Category { return integrations.CategoryPayment }
func (g *MyGateway) DriverID() string { return "my_gateway" }

func (g *MyGateway) Configure(env integrations.EnvReader) error {
    g.apiKey = env.Get("MY_GATEWAY_API_KEY")
    g.enabled = g.apiKey != ""
    return nil
}

func (g *MyGateway) Enabled() bool { return g.enabled }

func init() {
    integrations.Register("my_gateway", func() integrations.Integration {
        return &MyGateway{}
    })
}
\`\`\`

For quick one-off clients without a full type, use \`RegisterCustom\`:

\`\`\`go
integrations.RegisterCustom("slack", func(cfg map[string]string) error {
    // SLACK_API_KEY, SLACK_URL from env
    return nil
})
\`\`\`

See [Extending Gofreight](extending.md) for service providers and the event bus.

## Environment variables

### Mail

\`\`\`env
MAIL_MAILER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=noreply@example.com
MAIL_FROM_NAME="\${APP_NAME}"
\`\`\`

Use \`MAIL_MAILER=log\` for development (default in \`.env.example\`).

### Storage (S3-compatible)

\`\`\`env
FILESYSTEM_DISK=s3
AWS_BUCKET=my-bucket
AWS_DEFAULT_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
\`\`\`

Use \`FILESYSTEM_DISK=local\` for local disk (default).

### Cache, queue, session, Redis

\`\`\`env
CACHE_STORE=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=null
\`\`\`

Or set \`REDIS_URL\` directly. For local dev defaults use \`CACHE_STORE=file\`, \`QUEUE_CONNECTION=sync\`, \`SESSION_DRIVER=file\`.

### Webhooks

\`\`\`env
WEBHOOK_DRIVER=webhook
WEBHOOK_SECRET=your-signing-secret
\`\`\`

### Your integrations

Use \`{NAME}_{KEY}\` env vars (e.g. \`TWILIO_API_KEY\`, \`MY_GATEWAY_API_KEY\`). Set \`{CATEGORY}_PROVIDER\` to the registered driver name.

## Admin status page

In development, visit \`/admin/integrations\` to see registered integrations and their status.

\`\`\`go
r.Get("/integrations/status", integrations.StatusHandler())
\`\`\`
`,"../content/docs/jobs.md":`# Jobs & Queues

Background jobs defer slow work — sending email, processing uploads, generating reports — so HTTP responses stay fast.

## Defining a job

Jobs implement the \`jobs.Job\` interface:

\`\`\`go
// app/jobs/send_welcome_email.go
package jobs

import (
    "context"

    "github.com/lsgser/gofreight/jobs"
    "github.com/lsgser/gofreight/mail"
)

type SendWelcomeEmail struct {
    Email string
    Name  string
}

func (j SendWelcomeEmail) Handle(ctx context.Context) error {
    m := mail.NewMailable("app/views/mail", "welcome.html", "Welcome", j.Email)
    m.With("Name", j.Name)
    return m.Send(appMailer)
}
\`\`\`

Or use a function:

\`\`\`go
jobs.JobFunc(func(ctx context.Context) error {
    return processOrder(ctx, orderID)
})
\`\`\`

Generate a job stub:

\`\`\`bash
gofreight make:job SendWelcomeEmail
\`\`\`

## Dispatching jobs

The application exposes an in-memory queue by default:

\`\`\`go
app.Queue.Dispatch(jobs.SendWelcomeEmail{Email: user.Email, Name: user.Name})

// Or inline:
app.Queue.DispatchFunc(func(ctx context.Context) error {
    return heavyWork(ctx)
})
\`\`\`

## Running workers

Start background workers with the application:

\`\`\`go
app.StartJobs(2) // 2 concurrent workers
app.Run()
\`\`\`

Or run a dedicated worker process:

\`\`\`bash
gofreight queue:work
gofreight queue:work --concurrency=4
\`\`\`

## Redis queue (production)

For multi-process deployments, use Redis:

\`\`\`go
app.UseRedisQueue(os.Getenv("REDIS_URL"))
app.StartJobs(4)
\`\`\`

\`\`\`env
QUEUE_DRIVER=redis
REDIS_URL=redis://localhost:6379
\`\`\`

Jobs persist in Redis and survive process restarts.

### Failed jobs

\`\`\`bash
gofreight queue:failed
gofreight queue:retry <job-id>
gofreight queue:flush    # clear all failed jobs
gofreight queue:clear    # delete all pending jobs
\`\`\`

Failed jobs are recorded after max attempts (default 3) with exponential backoff:

\`\`\`go
failed, _ := redisQueue.Failed(ctx)
redisQueue.RetryFailed(ctx, jobID)
\`\`\`

## Queued mail

Send email asynchronously via the queued mailer:

\`\`\`go
app.QueuedMailer().Send(mail.Message{
    To:      []string{"user@example.com"},
    Subject: "Welcome",
    HTML:    "<p>Hello!</p>",
})
\`\`\`

Or queue a mailable:

\`\`\`go
m := mail.NewMailable("app/views/mail", "welcome.html", "Welcome", "user@example.com")
mail.QueueMailable(app.QueuedMailer(), m)
\`\`\`

See **[Mail](mail.md)**.

## Testing

Process all pending jobs synchronously in tests:

\`\`\`go
errs := app.Queue.Process(ctx)
if len(errs) > 0 {
    t.Fatal(errs[0])
}
\`\`\`

Check pending count:

\`\`\`go
if app.Queue.Pending() != 0 {
    t.Fatal("expected no pending jobs")
}
\`\`\`

Flush between tests:

\`\`\`go
app.Queue.Flush()
\`\`\`

## Related

- [Mail](mail.md) — mailables and queued delivery
- [Configuration](configuration.md) — \`QUEUE_DRIVER\`, \`REDIS_URL\`
- [Integrations](integrations.md) — queue driver configuration
`,"../content/docs/mail.md":`# Mail

Gofreight includes mailable email classes, SMTP/SendGrid delivery, and queued sending via the job system.

## Basic sending

\`\`\`go
import "github.com/lsgser/gofreight/mail"

err := app.Mailer.Send(mail.Message{
    To:      []string{"user@example.com"},
    From:    "noreply@example.com",
    Subject: "Hello",
    Body:    "Plain text body",
    HTML:    "<p>HTML body</p>",
})
\`\`\`

## Mailables

Mailables render HTML from template files:

\`\`\`go
m := mail.NewMailable(
    "app/views/mail",       // views directory
    "welcome.html",         // template file
    "Welcome to MyApp",     // subject
    "user@example.com",     // recipient
)
m.With("Name", "Ada")
m.With("VerifyURL", verifyURL)

err := m.Send(app.Mailer)
\`\`\`

Template at \`app/views/mail/welcome.html\`:

\`\`\`html
<p>Hello, {{ .Name }}!</p>
<p><a href="{{ .VerifyURL }}">Verify your email</a></p>
\`\`\`

Generate a mailable stub:

\`\`\`bash
gofreight make:mail WelcomeEmail
\`\`\`

Store mailable classes in \`app/mail/\`.

## Drivers

Configure via environment variables:

\`\`\`env
# Development — logs emails instead of sending
MAIL_DRIVER=log

# SMTP
MAIL_DRIVER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=user
MAIL_PASSWORD=secret
MAIL_FROM=noreply@example.com

# SendGrid
MAIL_DRIVER=sendgrid
SENDGRID_API_KEY=SG.xxx
MAIL_FROM=noreply@example.com
\`\`\`

\`application.New()\` wires the mailer from integrations. See **[Integrations](integrations.md)**.

## Queued delivery

Send email in the background so HTTP responses are not blocked:

\`\`\`go
app.QueuedMailer().Send(mail.Message{
    To:      []string{"user@example.com"},
    Subject: "Your order shipped",
    HTML:    body,
})
\`\`\`

Requires \`app.StartJobs()\` or \`gofreight queue:work\`. See **[Jobs & Queues](jobs.md)**.

## Authentication emails

Use mail callbacks with auth helpers:

\`\`\`go
auth.RequestPasswordReset(resetStore, findUser, func(email, token string) error {
    m := mail.NewMailable("app/views/mail", "reset.html", "Reset password", email)
    m.With("ResetURL", appURL+"/password/reset?token="+token)
    return m.Send(app.Mailer)
})

auth.SendVerificationEmail(verifyStore, userID, email, func(email, token string) error {
    m := mail.NewMailable("app/views/mail", "verify.html", "Verify email", email)
    m.With("VerifyURL", appURL+"/email/verify?token="+token)
    return m.Send(app.Mailer)
})
\`\`\`

See **[Authentication](authentication.md)**.

## Testing

Use \`LogMailer\` in tests to capture sent messages:

\`\`\`go
logMailer := mail.NewLogMailer()
m.Send(logMailer)

if logMailer.Count() != 1 {
    t.Fatal("expected one email")
}
last := logMailer.Last()
\`\`\`

With \`gftest\`:

\`\`\`go
gftest.UseFakes()
gftest.AssertMailSent(t, 1)
\`\`\`

## Related

- [Jobs & Queues](jobs.md) — queued mail delivery
- [Integrations](integrations.md) — SMTP, SendGrid configuration
- [Authentication](authentication.md) — password reset and verification emails
`,"../content/docs/middleware.md":`# Middleware

Middleware wraps HTTP handlers in a pipeline — each layer can inspect or modify the request before passing it to the next handler. Gofreight ships built-in middleware for sessions, CSRF, CORS, rate limiting, logging, and more.

## How middleware works

Middleware has the signature \`func(http.Handler) http.Handler\`. Apply it globally on the application, on route groups, or on individual routes.

\`\`\`go
// Global — every request
app.Router.Use(middleware.Logger)
app.Router.Use(middleware.Recovery)

// Route group
r.Group(func(api *router.Router) {
    API(api)
}).Prefix("/api/v1").Use(auth.JWTMiddleware(jwtMgr)).Apply()

// Single route
r.Get("/admin", adminHandler).Use(customMiddleware)
\`\`\`

Middleware runs in registration order: first registered runs first on the way in, last on the way out.

## Built-in middleware

| Middleware | Package | Purpose |
|------------|---------|---------|
| \`Logger\` | \`middleware\` | Logs method, path, status, duration |
| \`Recovery\` | \`middleware\` | Catches panics, returns 500 |
| \`StructuredLog\` | \`middleware\` | JSON structured request logging |
| \`Sessions\` | \`middleware\` | Cookie-based session storage |
| \`CSRF\` | \`middleware\` | Cross-site request forgery protection |
| \`CORS\` | \`middleware\` | Cross-origin resource sharing |
| \`RateLimit\` | \`middleware\` | Per-IP request throttling |
| \`Locale\` | \`middleware\` | Sets locale from header or session |
| \`MethodSpoof\` | \`middleware\` | Supports \`_method=PUT/DELETE\` in HTML forms |
| \`SecurityHeaders\` | \`middleware\` | HSTS, X-Frame-Options, etc. (production) |
| \`JWTMiddleware\` | \`auth\` | Bearer JWT authentication |
| \`APITokenMiddleware\` | \`auth\` | Opaque API token authentication |
| \`Guard.Middleware\` | \`auth\` | JWT + API token + session unified auth |
| \`RequirePolicy\` | \`auth\` | Authorization policy check |
| \`RequireRole\` | \`auth\` | Role-based access control |
| \`HTTPCache\` | \`cache\` | Cache-Control headers for static responses |

## Application helpers

\`application.Application\` wraps common setup:

\`\`\`go
app := application.New()
app.UseCSRF()
app.UseCORS("https://app.example.com")
app.UseRateLimit(60, time.Minute)
app.UseLocale()
app.UseHTTPCache(time.Hour)
app.UseRedisSessions(os.Getenv("REDIS_URL"))
\`\`\`

## Sessions

Session middleware loads or creates a session for each request and stores it in the request context:

\`\`\`go
sessions := middleware.NewSessions(app.Config.AppKey)
app.Router.Use(sessions.Middleware)
\`\`\`

Access the session in controllers:

\`\`\`go
session := middleware.SessionFromContext(base.Request.Context())
session.Set("current_user_id", userID)
userID := session.Get("current_user_id")
\`\`\`

See **[Sessions](sessions.md)** for flash messages, Redis driver, and validation error storage.

## CSRF protection

Enable CSRF for HTML forms:

\`\`\`go
app.UseCSRF()
\`\`\`

In templates, include the CSRF field:

\`\`\`html
{{ csrfField }}
<!-- or -->
<input type="hidden" name="authenticity_token" value="{{ csrfToken }}">
\`\`\`

API routes using Bearer tokens typically skip CSRF. Safe methods (GET, HEAD, OPTIONS) are excluded automatically.

## CORS

\`\`\`go
app.UseCORS("http://localhost:3000", "https://app.example.com")
\`\`\`

Or configure manually:

\`\`\`go
app.Router.Use(middleware.CORS([]string{"https://app.example.com"}))
\`\`\`

## Rate limiting

\`\`\`go
app.UseRateLimit(120, time.Minute) // 120 requests per IP per minute
\`\`\`

Returns 429 when the limit is exceeded.

## Method spoofing

HTML forms cannot send PUT or DELETE. Gofreight middleware reads \`_method\` from the form body:

\`\`\`html
<form method="POST" action="/posts/1">
  <input type="hidden" name="_method" value="PUT">
  {{ csrfField }}
  ...
</form>
\`\`\`

Enabled automatically when sessions are configured.

## JWT and API token middleware

Protect API route groups:

\`\`\`go
jwtMgr := auth.JWTFromEnv(app.Config.AppKey)

r.Group(func(api *router.Router) {
    api.Get("/profile", profileHandler)
}).Prefix("/api/v1").Use(auth.JWTMiddleware(jwtMgr)).Apply()
\`\`\`

For opaque API tokens:

\`\`\`go
store := auth.NewMemoryTokenStore()
r.Use(auth.APITokenMiddleware(store))
\`\`\`

See **[Authentication](authentication.md)**.

## Custom application middleware

Create middleware in \`app/middleware/\`:

\`\`\`go
// app/middleware/request_id.go
package middleware

import (
    "context"
    "crypto/rand"
    "encoding/hex"
    "net/http"
)

type ctxKey struct{}

func RequestID(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        id := make([]byte, 8)
        rand.Read(id)
        w.Header().Set("X-Request-ID", hex.EncodeToString(id))
        ctx := context.WithValue(r.Context(), ctxKey{}, hex.EncodeToString(id))
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}
\`\`\`

Register in \`bootstrap/app.go\`:

\`\`\`go
app.Router.Use(appmiddleware.RequestID)
\`\`\`

## Middleware order

Recommended order for a typical web app:

1. \`Recovery\` — catch panics first
2. \`Logger\` — log all requests
3. \`Sessions\` — load session before CSRF
4. \`MethodSpoof\` — rewrite method before routing
5. \`CSRF\` — validate tokens on mutating requests
6. \`Locale\` — set language
7. Route-specific auth middleware

\`\`\`go
app.Router.Use(middleware.Recovery)
app.Router.Use(middleware.Logger)
// sessions + CSRF configured via app.UseCSRF() which depends on sessions
app.UseCSRF()
app.UseLocale()
\`\`\`

## Related

- [Sessions](sessions.md) — session API, flash, Redis driver
- [Authentication](authentication.md) — login, JWT, API tokens
- [Authorization](authorization.md) — policies and roles
- [Security](security.md) — production hardening
- [Routing](routing.md) — applying middleware to groups
`,"../content/docs/orm.md":`# ORM

Gofreight includes a type-safe ORM for Go structs. It provides chainable queries, associations, validations, lifecycle callbacks, soft deletes, and transactions — all driven by \`context.Context\`.

For a complete working example, see the [blog app](https://github.com/lsgser/gofreight/tree/main/examples/blog).

## Quick start

### 1. Define a model

Models are plain Go structs with \`db\` tags. Embed \`model.Record\` for \`id\`, timestamps, and optional soft-delete support:

\`\`\`go
// app/models/post.go
package models

import (
    "context"

    "github.com/lsgser/gofreight/model"
)

type Post struct {
    model.Record
    Title string \`db:"title" json:"title"\`
    Body  string \`db:"body" json:"body"\`
}

var Posts = model.NewRepository[Post]("posts")

func (p *Post) Save(ctx context.Context) error {
    return Posts.Save(ctx, p)
}
\`\`\`

### 2. Create a migration

Migration files are plain SQL in \`db/migrate/\`:

\`\`\`sql
-- db/migrate/001_create_posts.sql
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);
\`\`\`

Run migrations:

\`\`\`bash
gofreight migrate
\`\`\`

### 3. Query and persist

\`\`\`go
// Chainable query
posts, err := models.Posts.Query(ctx).
    WhereEq("published", true).
    OrderDesc("created_at").
    Limit(20).
    Get()

// Create with validation + callbacks
post := &models.Post{Title: "Hello", Body: "World"}
if err := models.Posts.Create(ctx, post); err != nil {
    // handle validation errors
}
\`\`\`

## Models & conventions

| Convention | Detail |
|------------|--------|
| \`db\` tags | Required on every persisted field — maps struct fields to column names |
| \`model.Record\` | Provides \`ID\`, \`CreatedAt\`, \`UpdatedAt\`, and \`DeletedAt *string\` |
| Repository | One \`var Posts = model.NewRepository[Post]("posts")\` per table |
| Table name | Passed explicitly to \`NewRepository\` — not inferred from the struct name |
| JSON tags | Optional — used by API resources, not the ORM itself |

Fields without a \`db\` tag are ignored on insert and update. The ORM uses reflection; pointer fields (\`*string\`) map to nullable columns.

## Query builder

Start every query from a repository:

\`\`\`go
q := Posts.Query(ctx)
\`\`\`

### Filtering

\`\`\`go
Posts.Query(ctx).WhereEq("published", true).Get()
Posts.Query(ctx).Where("views", model.OpGt, 100).Get()
Posts.Query(ctx).WhereIn("id", []any{1, 2, 3}).Get()
Posts.Query(ctx).WhereNotIn("status", []any{"archived"}).Get()
Posts.Query(ctx).WhereNull("deleted_at").Get()
Posts.Query(ctx).WhereNotNull("published_at").Get()
Posts.Query(ctx).WhereBetween("views", 10, 100).Get()
Posts.Query(ctx).WhereRaw("title LIKE ?", "%hello%").Get()
Posts.Query(ctx).WhereEq("a", 1).OrWhere("b", model.OpEq, 2).Get()
\`\`\`

### Ordering, limiting, joins

\`\`\`go
Posts.Query(ctx).OrderDesc("created_at").Limit(10).Get()
Posts.Query(ctx).Latest("created_at").Get()          // ORDER BY created_at DESC
Posts.Query(ctx).Join("users", "users.id = posts.user_id").Get()
Posts.Query(ctx).LeftJoin("comments", "comments.post_id = posts.id").Get()
Posts.Query(ctx).GroupBy("user_id").Having("count", model.OpGt, 5).Get()
Posts.Query(ctx).Select("id", "title").Distinct().Get()
\`\`\`

### Retrieving records

\`\`\`go
posts, _  := Posts.Query(ctx).Get()
post, _   := Posts.Query(ctx).First()
post, _   := Posts.Query(ctx).Find(1)
post, _   := Posts.Query(ctx).FindBy("slug", "hello")
exists, _ := Posts.Query(ctx).WhereEq("slug", "hello").Exists()
sql, args := Posts.Query(ctx).WhereEq("draft", true).ToSQL()
\`\`\`

### Aggregates

\`\`\`go
count, _  := Posts.Query(ctx).Count()
sum, _    := Posts.Query(ctx).Sum("views")
avg, _    := Posts.Query(ctx).Avg("rating")
min, _    := Posts.Query(ctx).Min("price")
max, _    := Posts.Query(ctx).Max("price")
titles, _ := Posts.Query(ctx).PluckStrings("title")
ids, _    := Posts.Query(ctx).PluckInt64s("user_id")
ids, _    := Posts.Query(ctx).IDs()
\`\`\`

### Batch operations

Bulk updates and deletes **do not** run model callbacks or validations:

\`\`\`go
Posts.Query(ctx).WhereEq("draft", true).UpdateAll(map[string]any{"published": true})
Posts.Query(ctx).WhereEq("draft", true).DeleteAll()
Posts.Query(ctx).Increment("views")
Posts.Query(ctx).Decrement("stock", 5)
Posts.Query(ctx).Touch() // sets updated_at on matching rows
Posts.Query(ctx).FindEach(100, func(p Post) error { ... })
\`\`\`

### Find-or-create helpers

\`\`\`go
post, created, _ := Posts.Query(ctx).FirstOrCreate(map[string]any{"title": "Hello"})
post, isNew, _   := Posts.Query(ctx).FirstOrInit(map[string]any{"title": "Draft"})
post, created, _ := Posts.Query(ctx).FindOrCreate(
    map[string]any{"slug": "hello"},           // search
    map[string]any{"title": "Hello", "body": ""}, // create attrs
)
\`\`\`

### Locking

\`\`\`go
Posts.Query(ctx).WhereEq("id", 1).ForUpdate().First() // SELECT ... FOR UPDATE
\`\`\`

## Repository CRUD

Shorthand methods on the repository itself:

\`\`\`go
Posts.All(ctx)
Posts.Find(ctx, id)
Posts.FindBy(ctx, "slug", "hello")
Posts.First(ctx)
Posts.Where(ctx, "published", true)
Posts.Count(ctx)
Posts.Paginate(ctx, 1, 20)
Posts.Create(ctx, record)
Posts.Update(ctx, record)
Posts.Save(ctx, record)       // insert or update based on ID
Posts.Delete(ctx, id)
Posts.Destroy(ctx, record)
Posts.Reload(ctx, record)
Posts.CreateRecord(ctx, map[string]any{"title": "Hello"})
Posts.UpdateRecord(ctx, id, map[string]any{"title": "Updated"})
Posts.FindOrCreateBy(ctx, map[string]any{"slug": "hello"})
Posts.Touch(ctx, id)
Posts.Exists(ctx)
Posts.Pluck(ctx, "title")
\`\`\`

\`Save\` runs validations and callbacks, then inserts (ID == 0) or updates.

## Scopes

Named, reusable query fragments registered on the repository:

\`\`\`go
var Posts = model.NewRepository[Post]("posts").
    Scope("published", func(q *model.Query[Post]) *model.Query[Post] {
        return q.WhereEq("published", true)
    }).
    Scope("recent", func(q *model.Query[Post]) *model.Query[Post] {
        return q.Latest()
    })

Posts.Query(ctx).Scope("published").Scope("recent").Get()
\`\`\`

## Associations

Register associations in an \`init()\` function. Supported types: \`belongs_to\`, \`has_one\`, \`has_many\`, and \`many_to_many\`.

\`\`\`go
func init() {
    Posts.Association(model.HasManyAssociation("Comments", "comments", "post_id"))
    Comments.Association(model.BelongsToAssociation("Post", "posts", "post_id"))
}
\`\`\`

### Eager loading

Use \`With()\` to preload associations and avoid N+1 queries:

\`\`\`go
posts, _ := Posts.Query(ctx).With("Comments").Get()
post, _  := Posts.Query(ctx).With("Comments", "Author").Find(1)
\`\`\`

### Reading association data

Eager-loaded data is stored on the record and retrieved with \`GetAssociation\`:

\`\`\`go
comments, _ := model.GetAssociation(post, "Comments") // []map[string]any
author, _    := model.GetAssociation(comment, "Post")  // map[string]any
\`\`\`

Association data is returned as maps, not typed structs. Map keys match column names.

### Many-to-many

Requires a pivot table with local and foreign keys:

\`\`\`go
Posts.Association(model.ManyToManyAssociation(
    "Tags", "tags", "post_tag", "post_id", "tag_id",
))
\`\`\`

## Validations

Implement \`Validators()\` on your model. Validations run automatically on \`Save()\` and \`Create()\`:

\`\`\`go
func (p *Post) Validators() []model.Validator {
    return []model.Validator{
        model.Presence("Title"),
        model.Length("Title", 3, 255),
        model.Format("Slug", \`^[a-z0-9-]+$\`),
        model.Numericality("Rating", 0, 5),
        model.Email("AuthorEmail"),
        model.Uniqueness("Title", "title", Posts, p.ID),
        model.Inclusion("Status", []string{"draft", "published"}),
        model.Accepted("Terms"),
    }
}
\`\`\`

Validation errors are returned from \`Save()\` / \`Create()\` as a structured error you can surface in forms or API responses.

## Callbacks

Implement \`Callbacks()\` on your model to hook into the persistence lifecycle:

\`\`\`go
func (p *Post) Callbacks() *model.Callbacks {
    if p.cbs == nil {
        p.cbs = model.NewCallbacks()
        p.cbs.BeforeSave(func(ctx context.Context, record any) error {
            post := record.(*Post)
            post.Slug = slugify(post.Title)
            return nil
        })
    }
    return p.cbs
}
\`\`\`

Available hooks: \`BeforeValidate\`, \`AfterValidate\`, \`BeforeSave\`, \`AfterSave\`, \`BeforeCreate\`, \`AfterCreate\`, \`BeforeUpdate\`, \`AfterUpdate\`, \`BeforeDelete\`, \`AfterDelete\`.

## Transactions

Wrap multiple operations in a transaction. Pass the transaction context to nested calls:

\`\`\`go
err := model.Transaction(ctx, func(txCtx context.Context) error {
    if err := Posts.Create(txCtx, &post); err != nil {
        return err
    }
    return Comments.Create(txCtx, &comment)
})
\`\`\`

Operations that receive the original \`ctx\` instead of \`txCtx\` run outside the transaction.

## Pagination

Full pagination returns metadata (total count, page count):

\`\`\`go
page, err := Posts.Query(ctx).WhereEq("published", true).Paginate(1, 20)
// page.Data       []Post
// page.CurrentPage int
// page.PerPage     int
// page.Total       int64
// page.LastPage    int
\`\`\`

Simple pagination skips the count query (useful for infinite scroll):

\`\`\`go
posts, err := Posts.Query(ctx).SimplePaginate(2, 20)
\`\`\`

## Dirty tracking

Track which fields changed between reads and saves:

\`\`\`go
d := &model.Dirty{}
d.Snapshot(post)
post.Title = "Changed"
d.Changed()        // true
d.ChangedFields()  // ["title"]
d.Changes()        // map with [original, current] pairs
\`\`\`

Useful for partial updates or audit logging.

## Soft deletes

Soft delete keeps rows in the database and sets a \`deleted_at\` timestamp instead of running \`DELETE\`. Trashed records are excluded from normal queries.

### 1. Add \`deleted_at\` to your table

\`\`\`sql
-- db/migrate/NNN_add_deleted_at_to_posts.sql
ALTER TABLE posts ADD COLUMN deleted_at TEXT;
\`\`\`

For new tables, include a nullable column:

\`\`\`sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  deleted_at TEXT
);
\`\`\`

\`model.Record\` includes \`DeletedAt *string\` with \`db:"deleted_at"\`.

### 2. Enable on the repository

\`\`\`go
var Posts = model.NewRepository[Post]("posts").EnableSoftDelete()

// Custom column name (optional):
var Archives = model.NewRepository[Post]("posts").EnableSoftDelete("archived_at")
\`\`\`

### 3. Usage

\`\`\`go
// Normal queries skip soft-deleted rows
posts, _ := Posts.Query(ctx).Get()
post, _ := Posts.Find(ctx, id)

// Soft delete (sets deleted_at)
Posts.Destroy(ctx, post)
Posts.Delete(ctx, id)
Posts.Query(ctx).WhereEq("draft", true).DeleteAll()

// Include trashed records
Posts.Query(ctx).WithTrashed().Find(id)
Posts.Query(ctx).OnlyTrashed().Get()

// Restore
Posts.Restore(ctx, post)
Posts.RestoreByID(ctx, id)
Posts.Query(ctx).WithTrashed().WhereEq("id", id).RestoreAll()

// Permanent delete (bypasses soft delete)
Posts.ForceDestroy(ctx, post)
Posts.ForceDelete(ctx, id)
Posts.Query(ctx).WithTrashed().WhereEq("id", id).ForceDelete()

// Check on the model
if post.IsSoftDeleted() { ... }
\`\`\`

| Method | Behavior |
|--------|----------|
| \`EnableSoftDelete()\` | Enable soft delete for the repository |
| \`Destroy\` / \`Delete\` | Sets \`deleted_at\` when enabled |
| \`Query().Get()\` / \`Find\` | Excludes trashed rows |
| \`WithTrashed()\` | Include trashed rows |
| \`OnlyTrashed()\` | Only trashed rows |
| \`Restore\` / \`RestoreByID\` | Clears \`deleted_at\` |
| \`ForceDestroy\` / \`ForceDelete\` | Hard \`DELETE\` |
| \`DeleteAll()\` | Soft-deletes matching rows when enabled |

## Upsert (PostgreSQL)

Insert or update on conflict — PostgreSQL only:

\`\`\`go
Posts.Upsert(ctx, &post, []string{"slug"})
\`\`\`

## Polymorphic associations

For commentable-style relationships, use the polymorphic helpers:

\`\`\`go
parent, err := model.PolymorphicBelongsTo(ctx, "Post", commentableID)
children, err := model.PolymorphicHasMany(ctx, assoc, "Post", postID)
\`\`\`

These return map data. Register the association config via \`PolymorphicAssoc\`.

## Database configuration

Supports **SQLite** (default), **PostgreSQL**, **MySQL**, and **MariaDB**.

Configure with discrete \`DB_*\` variables (recommended) or \`DATABASE_URL\`:

\`\`\`env
# SQLite (default)
DB_CONNECTION=sqlite

# PostgreSQL
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=myapp
DB_USERNAME=postgres
DB_PASSWORD=
DB_SSLMODE=disable
\`\`\`

Connect in \`main.go\`:

\`\`\`go
app.ConnectDatabase() // wraps database.Connect via config.ResolveDatabaseURL()
\`\`\`

## Migrations

Use the CLI for versioned schema changes:

\`\`\`bash
gofreight generate migration create_posts
gofreight migrate
gofreight migrate:rollback
gofreight migrate:status
gofreight migrate:fresh --seed
gofreight db:seed
\`\`\`

Migration files live in \`db/migrate/\` as plain SQL. Each migration can have a paired \`*_down.sql\` rollback file.

For ad-hoc schema changes in development, use the [Admin Dashboard](admin.md).

### Blueprint DSL

Programmatic migrations with auto-generated rollback SQL:

\`\`\`go
up, down := database.CreateTableBlueprint("comments", func(b *database.Blueprint) {
    b.IntegerColumn("post_id", colNotNull())
    b.StringColumn("body")
    b.Index("post_id")
})
database.WriteMigrationPair("db/migrate", "004_create_comments", up, down)
\`\`\`

Column helpers: \`StringColumn\`, \`IntegerColumn\`, \`BooleanColumn\`, \`DateTimeColumn\`, \`DropColumn\`, \`Index\`.

For altering existing tables:

\`\`\`go
up, down := database.AlterTableBlueprint("posts", func(b *database.Blueprint) {
    b.StringColumn("slug")
})
database.WriteMigrationPair("db/migrate", "005_add_slug_to_posts", up, down)
\`\`\`

\`CreateTableBlueprint\` automatically adds \`id\`, \`created_at\`, and \`updated_at\`.

## Testing

Use \`gftest\` with an in-memory SQLite database:

\`\`\`go
app := gftest.NewApp(t,
    gftest.WithDatabase("sqlite://:memory:"),
    gftest.WithMigrations(\`
        CREATE TABLE posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            body TEXT NOT NULL,
            created_at TEXT,
            updated_at TEXT
        );
    \`),
    gftest.WithRoutes(routes.Register),
)
\`\`\`

Or point at your migration directory:

\`\`\`go
gftest.WithMigrateDir("db/migrate")
\`\`\`

Database assertions:

\`\`\`go
app.DB().ToHaveCount("posts", 3)
app.DB().ToHaveRecord("posts", map[string]any{"title": "Hello"})
\`\`\`

Generate factories with faker defaults:

\`\`\`bash
gofreight make:factory Post
\`\`\`

See **[Testing](testing.md)** for HTTP tests, factories, and fakes.

## Cross-database notes

| Feature | SQLite | PostgreSQL | MySQL/MariaDB |
|---------|--------|------------|---------------|
| Default timestamps | \`TEXT\` with \`datetime('now')\` | \`TIMESTAMP DEFAULT NOW()\` | \`DATETIME DEFAULT NOW()\` |
| Upsert | Not supported | \`ON CONFLICT\` | Insert only |
| \`ForUpdate\` | Supported | Supported | Supported |
| Column rename in rollback | Limited | Full | Full |

The ORM uses dialect helpers (\`database.Placeholder\`, \`database.ReturningClause\`, \`database.NowFunc\`) so the same model code works across drivers.

## Generators

Scaffold models, migrations, and factories from the CLI:

\`\`\`bash
gofreight make:model Post title:string body:text
gofreight generate migration create_posts
gofreight make:factory Post
gofreight make:scaffold Article title:string body:text  # model + migration + factory
\`\`\`

See **[Generators](generators.md)** for field types and output layout.

## Related

- [Example blog app](https://github.com/lsgser/gofreight/tree/main/examples/blog) — full CRUD with associations and tests
- [Testing](testing.md) — \`gftest\`, factories, database assertions
- [Admin Dashboard](admin.md) — schema browser and SQL export (development)
- [Getting Started](getting-started.md) — database setup and first migration
`,"../content/docs/project-structure.md":`# Project structure

Gofreight involves **two different trees**:

1. **The Gofreight framework** — a Go library and CLI ([github.com/lsgser/gofreight](https://github.com/lsgser/gofreight)). You install it via \`go mod\`; you do not copy it into your app.
2. **Your application** — a separate project directory created with \`gofreight new\`. This is where your product code lives.

When you run \`gofreight new myapp\`, a new folder \`myapp/\` is created **in your current working directory**. That folder is your app. It is not nested inside the framework repo unless you choose to create it there.

---

## Your application (what \`gofreight new\` creates)

This is the canonical layout every generated app follows. Paths below are **fixed conventions** — the framework looks for views in \`app/views\`, static files in \`public\`, migrations in \`db/migrate\`, and so on.

\`\`\`
myapp/
├── main.go
├── go.mod
├── .env
├── .env.example
├── .gitignore
│
├── bootstrap/
│   └── app.go                      # Service container, middleware, bindings
│
├── routes/                         # HTTP route definitions
│   ├── register.go                 # Wires web + API
│   ├── web.go                      # Browser routes
│   └── api.go                      # JSON API routes
│
├── config/
│   ├── database.go
│   ├── app.yaml
│   └── locales/
│
├── app/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   ├── resources/
│   ├── mail/
│   ├── jobs/
│   ├── middleware/
│   ├── policies/
│   ├── requests/
│   └── views/
│
├── public/
├── db/migrate/
├── db/seeds/
├── db/seeders/
├── cmd/seed/                       # Go seeder runner (created by make:seeder)
├── storage/
└── tests/
\`\`\`

### What each layer does

| Path | Role |
|------|------|
| \`main.go\` | Entry point — bootstraps \`application.New()\`, DB, routes, server |
| \`bootstrap/app.go\` | Application wiring, service container, middleware registration |
| \`routes/web.go\` | Browser URL mapping (HTML, sessions, CSRF) |
| \`routes/api.go\` | JSON API routes (registered inside \`/api/v1\` group) |
| \`routes/register.go\` | Wires web + API with route groups |
| \`app/controllers/\` | HTTP request handlers (\`doc.go\` explains the folder) |
| \`app/models/\` | Data layer — structs, validations, associations |
| \`app/services/\` | Business logic (keep controllers thin) |
| \`app/resources/\` | API JSON serializers |
| \`app/mail/\` | Mailable email classes |
| \`app/jobs/\` | Background job handlers |
| \`app/middleware/\` | Application HTTP middleware |
| \`app/policies/\` | Authorization policies |
| \`app/requests/\` | Form request validation |
| \`app/views/\` | GFT templates (\`.gft\`) |
| \`config/\` | YAML config, locales, database helpers |
| \`public/\` | Static assets (CSS, JS, images) |
| \`db/migrate/\` | SQL schema migrations |
| \`db/seeds/\` | SQL seed files |
| \`db/seeders/\` | Go seeder classes |
| \`tests/\` | HTTP and integration tests |

### Hard-coded paths the framework expects

These paths are wired in \`application.New()\` and related packages:

| Concern | Path | Override |
|---------|------|----------|
| Views | \`app/views\` | Customize in bootstrap if needed |
| Static assets | \`public\` | \`assets.New("public")\` |
| Migrations | \`db/migrate/*.sql\` | CLI \`gofreight migrate\` |
| Uploads (local) | \`storage/uploads\` | Upload config |
| Environment | \`.env\` in module root | Loaded via \`godotenv\` at startup |

Keep these names unless you intentionally change bootstrap code.

---

## Where to put new code

| I want to… | Put it here |
|------------|-------------|
| Add a page or API endpoint | \`routes/web.go\` or \`routes/api.go\` + controller; see [Routing](routing.md) |
| Add business logic | \`gofreight make:service OrderProcessing\` → \`app/services/\` |
| Add a database table | \`gofreight make:migration …\` → \`db/migrate/\` + model in \`app/models/\` |
| Add HTML | \`app/views/<resource>/\` as \`.gft\` files |
| Share markup across views | \`app/views/partials/\` or \`app/views/components/\` |
| Add CSS/JS | \`public/\` (served under \`/assets/\`) |
| Add background work | Job in \`app/jobs/\`; worker via \`queue:work\` or Application |
| Add tests | \`tests/\` with \`gftest\` |
| Add seed data | \`db/seeds/*.sql\` or \`gofreight make:seeder\` → \`db/seeders/\` |
| Configure services (mail, storage, custom APIs) | \`.env\` — see [Integrations](integrations.md) |

### Generators keep structure consistent

\`\`\`bash
gofreight make:scaffold Post title:string body:text
gofreight make:service PaymentProcessing
gofreight make:api Post title:string
\`\`\`

Creates, in the right places:

- \`app/models/post.go\`
- \`app/controllers/post_controller.go\`
- \`app/views/posts/*.gft\`
- \`db/migrate/NNN_create_posts.sql\`
- \`app/services/payment_processing_service.go\` (service generator)
- Route registration snippet for \`routes/web.go\` (web) or \`routes/api.go\` (API)

### Route registration (\`routes/register.go\`)

Every new app uses **route groups** to separate web and API traffic:

\`\`\`go
func Register(r *router.Router) {
    Web(r)

    r.Group(func(api *router.Router) {
        API(api)
    }).Prefix("/api/v1").Use(/* optional auth middleware */).Name("api.").Apply()
}
\`\`\`

- **Web** routes in \`routes/web.go\` — use \`r.Resources()\` for HTML CRUD (includes \`new\`/\`edit\`).
- **API** routes in \`routes/api.go\` — use \`r.ApiResource()\` for JSON CRUD (no \`new\`/\`edit\`).
- **Nested groups** — \`.Prefix()\` stacks (e.g. \`/api\` + \`/v1\` → \`/api/v1\`).

Full guide: **[Routing](routing.md)**.

Use generators and match existing resources — you should not need to invent folder names.

Each \`app/*\` directory includes a **\`doc.go\`** file with block comments explaining the folder's purpose and the relevant \`gofreight make:*\` commands — similar to guided defaults in a new project scaffold.

---

## Framework repository (this repo)

If you clone [github.com/lsgser/gofreight](https://github.com/lsgser/gofreight), you see **many top-level packages**. That is normal for a Go framework: each package is imported by applications via \`go.mod\`, not copied into your app.

\`\`\`
gofreight/                          # Framework module (library)
├── cmd/gofreight/                  # CLI (gofreight new, migrate, make:*, …)
├── application/                    # App bootstrap, server, wiring
├── router/                         # Route groups, REST & API resources
├── controller/                     # Base controller, RenderView, JSON helpers
├── model/                          # ORM, queries, associations
├── view/                           # GFT template engine
├── database/                       # Migrations, schema, introspection
├── middleware/                     # Sessions, CSRF, CORS, rate limit, logging
├── generator/                      # Code generators (used by CLI)
├── gftest/                         # Testing helpers
├── admin/                          # Development database dashboard
├── auth/                           # Passwords, tokens, OAuth, verification
├── validation/                     # Request validation
├── integrations/                   # Pluggable registry; SMTP, S3, Redis connectors
├── cache/, mail/, jobs/, upload/   # Infrastructure
├── assets/, health/, plugins/, dev/
├── docs/                           # Documentation (you are here)
└── examples/
    └── blog/                       # Reference application (same layout as \`gofreight new\`)
\`\`\`

**Application developers** typically only install the CLI and import packages — they do not edit these folders.

**Framework contributors** work in this tree and run tests from the repo root:

\`\`\`bash
go test ./...
\`\`\`

---

## Reference app: \`examples/blog\`

The blog under \`examples/blog/\` uses **the same layout** as a generated app. Use it as a working reference:

\`\`\`
examples/blog/
├── main.go
├── bootstrap/app.go
├── routes/
├── app/controllers/
├── app/models/
├── app/views/
├── db/migrate/
└── tests/
\`\`\`

It depends on the local framework via \`replace\` in \`go.mod\`:

\`\`\`go
replace github.com/lsgser/gofreight => ../..
\`\`\`

---

## Local development vs published framework

### App created anywhere (typical)

\`\`\`bash
cd ~/projects
gofreight new shop
cd shop
go mod tidy
go run .
\`\`\`

\`go.mod\` contains:

\`\`\`go
require github.com/lsgser/gofreight v0.2.0
\`\`\`

Go downloads the framework module from the module proxy.

### App next to a cloned framework (contributors)

If you develop the framework and an app side by side:

\`\`\`go
// shop/go.mod
replace github.com/lsgser/gofreight => ../gofreight
\`\`\`

Or, as in \`examples/blog\`, from inside the framework repo:

\`\`\`go
replace github.com/lsgser/gofreight => ../..
\`\`\`

---

## Optional additions (not scaffolded by default)

Add these when your app needs them — they are not required for a minimal app:

| Path | When to add |
|------|-------------|
| \`Dockerfile\` | Production deployment — see [Deployment](deployment.md) |
| \`docker-compose.yml\` | Local Postgres/Redis/MinIO stack |
| \`cmd/\` | Extra binaries (workers, one-off tools) |
| \`internal/\` | Private packages if the app grows beyond MVC folders |
| \`scripts/\` | Deploy or maintenance scripts |

The framework repo includes \`Dockerfile\` and \`docker-compose.yml\` as **examples for deployment**, not as something copied into every new app.

---

## Mental model

\`\`\`
┌─────────────────────────────────────────────────────────┐
│  Your machine                                             │
│                                                           │
│  ~/projects/shop/          ← your app (gofreight new)     │
│    app/ controllers models views                        │
│    routes/ config/ db/ public/ tests/                   │
│         │                                                 │
│         │  go.mod import                                │
│         ▼                                                 │
│  Go module cache / github.com/lsgser/gofreight        │
│    router, model, view, application, …                    │
└─────────────────────────────────────────────────────────┘
\`\`\`

Your app is a **thin MVC shell**. Gofreight is the **engine** imported as a Go module dependency — the same pattern as importing any other library, but with a full web stack built in.

---

## See also

- [Getting Started](getting-started.md) — create and run your first app
- [CLI commands](commands.md) — full command reference
- [Templating](templating.md) — GFT views under \`app/views/\`
- [Testing](testing.md) — tests under \`tests/\`
- [Main README](../README.md) — quick reference
`,"../content/docs/realtime.md":`# Real-time WebSockets

Gofreight ships a **socket.io-style** WebSocket layer for rooms, events, and broadcasts — no third-party real-time server required for single-process apps.

## Quick start

### 1. Mount the socket endpoint

\`\`\`go
// bootstrap/app.go
app.MountSocket("/socket") // default path: /socket
\`\`\`

### 2. Handle events on the server

\`\`\`go
import "encoding/json"

app.Channels.OnConnect(func(c *channels.Connection) {
    c.Join("chat:lobby")
})

app.Channels.On("chat:message", func(c *channels.Connection, raw json.RawMessage) {
    var msg struct{ Text string \`json:"text"\` }
    _ = json.Unmarshal(raw, &msg)

    app.Channels.To("chat:lobby").Emit("chat:message", map[string]string{
        "text": msg.Text,
        "id":   c.ID,
    })
})
\`\`\`

### 3. Connect from the browser (TypeScript)

Copy \`channels/gofreight-socket.ts\` from the framework repo, or import it from your frontend bundle:

\`\`\`typescript
import { GofreightSocket } from './gofreight-socket'

const socket = new GofreightSocket('/socket')

socket.on('connected', ({ id }) => console.log('connected', id))
socket.on('chat:message', (msg) => appendMessage(msg))

document.querySelector('form')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.querySelector('input')
  socket.emit('chat:message', { text: input.value, user: 'You' })
  input.value = ''
})
\`\`\`

## Server API

| Method | Description |
|--------|-------------|
| \`app.MountSocket(path)\` | Register WebSocket handler (default \`/socket\`) |
| \`app.Channels.On(event, fn)\` | Handle client-emitted events |
| \`app.Channels.OnConnect(fn)\` | Run when a client connects |
| \`app.Channels.OnDisconnect(fn)\` | Run when a client disconnects |
| \`app.Channels.To(room).Emit(event, data)\` | Broadcast to a room |
| \`app.Channels.Emit(room, event, data)\` | Same as \`To(room).Emit(...)\` |
| \`app.Channels.Broadcast(channel, event, data)\` | Legacy alias for \`Emit\` |

### Connection helpers

\`\`\`go
c.Join("chat:lobby")   // subscribe to a room
c.Leave("chat:lobby")  // unsubscribe
c.Emit("typing", data) // emit to server handlers (same as client emit)
c.ID                   // unique connection id
c.Meta                 // attach custom metadata per connection
\`\`\`

## Wire protocol

All messages are JSON text frames.

**Server → client (on connect):**

\`\`\`json
{ "type": "connected", "data": { "id": "conn-a1b2c3d4" } }
\`\`\`

**Client → server (join a room):**

\`\`\`json
{ "type": "join", "room": "chat:lobby" }
\`\`\`

**Client → server (leave a room):**

\`\`\`json
{ "type": "leave", "room": "chat:lobby" }
\`\`\`

**Client → server (emit event):**

\`\`\`json
{ "type": "emit", "event": "chat:message", "data": { "text": "Hello" } }
\`\`\`

**Server → client (broadcast):**

\`\`\`json
{ "room": "chat:lobby", "event": "chat:message", "data": { "text": "Hello", "id": "conn-a1b2c3d4" } }
\`\`\`

### Legacy channel subscribe

Channel subscribe via JSON message still works:

\`\`\`json
{ "action": "subscribe", "channel": "posts" }
\`\`\`

Use \`app.Channels.Broadcast("posts", "created", payload)\` to push events.

## TypeScript client API

\`GofreightSocket\` mirrors socket.io ergonomics:

\`\`\`typescript
const socket = new GofreightSocket('/socket', {
  autoConnect: true,       // connect immediately (default)
  reconnect: true,         // reconnect on disconnect (default)
  reconnectDelayMs: 1500,
})

socket.connect()
socket.disconnect()

socket.on('connect', () => {})
socket.on('disconnect', () => {})
socket.on('connected', ({ id }) => {})   // server assigned id
socket.on('chat:message', (data) => {})

socket.emit('chat:message', { text: 'Hi' })
socket.join('chat:lobby')
socket.leave('chat:lobby')
socket.subscribe('posts')   // legacy channel subscribe

socket.id          // set after 'connected' event
socket.connected   // boolean
\`\`\`

## Broadcasting from controllers

After creating a post, notify subscribers:

\`\`\`go
func (c *PostsController) Store(w http.ResponseWriter, r *http.Request) {
    // ... save post ...

    c.App.Channels.To("posts").Emit("created", map[string]any{
        "id":    post.ID,
        "title": post.Title,
    })

    c.Redirect("/posts")
}
\`\`\`

Clients join the room first:

\`\`\`typescript
socket.join('posts')
socket.on('created', (post) => refreshFeed(post))
\`\`\`

## Demo app

The \`demoapp\` includes a live chat example wired in \`bootstrap/app.go\`:

- Endpoint: \`ws://localhost:5000/socket\`
- Room: \`chat:lobby\`
- Events: \`chat:message\`, \`chat:history\`

Run \`gofreight serve\` inside \`demoapp/\` and connect with the TypeScript client.

## Production notes

- The built-in hub is **in-memory** — suitable for single-process deployments and development.
- For multi-instance broadcast, add a Redis pub/sub adapter or use a dedicated service (Pusher, Ably, etc.).
- Set \`CheckOrigin\` appropriately before production (currently permissive for local dev).
- WebSocket routes skip CSRF for the upgrade handshake; protect sensitive rooms with session/JWT checks in \`OnConnect\`.

## See also

- [Features — real-time](features.md#11-real-time-websockets)
- [Tutorial: Real-time chat](https://github.com/lsgser/gofreight-web/blob/main/src/content/docs/tutorial-realtime.md)
`,"../content/docs/routing.md":`# Routing

Gofreight uses **route groups** to share prefixes, middleware, and name prefixes across related routes. Define routes in a callback, then chain \`.Prefix()\`, \`.Use()\`, \`.Name()\`, and \`.Apply()\`.

## Basic routes

\`\`\`go
r.Get("/", handler)
r.Post("/posts", handler)
r.Get("/posts/:id", handler)  // :id → req.PathValue("id")
\`\`\`

Paths may omit the leading slash (\`"posts"\` and \`"/posts"\` both work).

## Route groups

\`\`\`go
r.Group(func(api *router.Router) {
    api.Get("/users", usersIndex)
    api.Post("/users", usersStore)
}).Prefix("/api/v1").Use(authMw).Name("api.").Apply()
\`\`\`

| Method | Purpose |
|--------|---------|
| \`Group(fn)\` | Start a group — routes defined inside \`fn\` |
| \`Prefix(path)\` | URI prefix for all routes in the group |
| \`Use(mw...)\` / \`Middleware(mw...)\` | Middleware for routes in the group |
| \`Name(prefix)\` | Prefix for route names (e.g. \`api.users.index\`) |
| \`Apply()\` | Register the group on the parent router |

### Nested groups

Prefixes stack from outer to inner:

\`\`\`go
r.Group(func(api *router.Router) {
    api.Group(func(v1 *router.Router) {
        v1.Get("/users", handler)    // GET /api/v1/users
        v1.Get("/payments", handler) // GET /api/v1/payments
    }).Prefix("/v1").Apply()
}).Prefix("/api").Apply()
\`\`\`

### Route-level middleware

Attach middleware to a single route after registration:

\`\`\`go
r.Group(func(api *router.Router) {
    api.Get("/posts", postsIndex)
    api.Delete("/posts/:id", postsDestroy).Use(adminMw)
}).Prefix("/api").Use(authMw).Apply()
\`\`\`

Group middleware runs first (outer groups before inner), then route middleware, then the handler.

### Legacy shorthand

\`\`\`go
r.GroupPrefix("/api/v1", API)  // same as Group(API).Prefix("/api/v1").Apply()
\`\`\`

## Web vs API layout

\`\`\`go
// routes/register.go
func Register(r *router.Router) {
    Web(r)

    r.Group(func(api *router.Router) {
        API(api)
    }).Prefix("/api/v1").Name("api.").Apply()
}
\`\`\`

Or use the helper:

\`\`\`go
import "github.com/lsgser/gofreight/api"

api.Group(r, "v1", func(api *router.Router) {
    api.Get("/health", healthHandler)
}, auth.APITokenMiddleware(store))
\`\`\`

## RESTful resources

### Web (HTML) — includes \`new\` and \`edit\`

\`\`\`go
r.Resources("posts", router.ResourceHandlers{
    Index:   controller.Handler(c.Index),
    Show:    controller.Handler(c.Show),
    Create:  controller.Handler(c.Create),
    Update:  controller.Handler(c.Update),
    Destroy: controller.Handler(c.Destroy),
})
\`\`\`

### API (JSON) — no \`new\`/\`edit\`

\`\`\`go
api.ApiResource("posts", router.ApiResourceHandlers{
    Index:   controller.Handler(c.Index),
    Store:   controller.Handler(c.Store),
    Show:    controller.Handler(c.Show),
    Update:  controller.Handler(c.Update),
    Destroy: controller.Handler(c.Destroy),
})
\`\`\`

| Method | Path | Action |
|--------|------|--------|
| GET | \`/posts\` | index |
| POST | \`/posts\` | store |
| GET | \`/posts/:id\` | show |
| PUT/PATCH | \`/posts/:id\` | update |
| DELETE | \`/posts/:id\` | destroy |

## Middleware order

1. Router-global middleware (\`r.Use(...)\`)
2. Group middleware (outer groups first, then inner)
3. Route middleware (\`.Use(...)\` on a single route)
4. Route handler

## List routes

\`\`\`bash
gofreight route:list
\`\`\`
`,"../content/docs/security.md":`# Security

Production security defaults, CSRF, headers, and rate limiting. For login and access control, see **[Authentication](authentication.md)** and **[Authorization](authorization.md)**.

## Production defaults

- Admin panel (\`/admin\`) is **never mounted** when \`GOFREIGHT_ENV=production\`
- Set \`ADMIN_PASSWORD\` in development if your dev server is network-accessible
- Run \`gofreight key:generate\` and keep \`APP_KEY\` secret — it signs sessions, CSRF tokens, and encrypted cookies

## Authentication & authorization

Session login, JWT, API tokens, OAuth, password reset, policies, and roles:

- **[Authentication](authentication.md)**
- **[Authorization](authorization.md)**

## CSRF

\`\`\`go
app.UseCSRF()
\`\`\`

## Security headers

Enabled automatically in production via \`middleware.SecurityHeaders\`.

## Rate limiting

\`\`\`go
app.UseRateLimit(60, time.Minute) // 60 requests per minute per IP
\`\`\`

## File uploads

Use \`upload.SaveFile\` with size limits and sanitized filenames. Store files in S3 via integrations when configured.

## SQL injection

- ORM queries use parameterized placeholders
- Admin SQL console is read-only; Import SQL is development-only
- Never expose admin in production
`,"../content/docs/services.md":`# Services & Container

Keep controllers thin by moving business logic into services. Gofreight includes a lightweight service container for dependency injection.

## Service layer

Services live in \`app/services/\`:

\`\`\`go
// app/services/order_service.go
package services

import (
    "context"

    "myapp/app/models"
)

type OrderService struct{}

func NewOrderService() *OrderService {
    return &OrderService{}
}

func (s *OrderService) PlaceOrder(ctx context.Context, userID int64, items []Item) (*models.Order, error) {
    // validation, inventory checks, payment...
    order := &models.Order{UserID: userID}
    return order, models.Orders.Create(ctx, order)
}
\`\`\`

Use from controllers:

\`\`\`go
order, err := services.NewOrderService().PlaceOrder(base.Request.Context(), userID, items)
\`\`\`

Generate a service stub:

\`\`\`bash
gofreight make:service OrderProcessing
\`\`\`

## Service container

Register services in \`bootstrap/app.go\`:

\`\`\`go
app.Singleton("order", func() any {
    return services.NewOrderService()
})

app.Bind("notifier", func() any {
    return services.NewNotifier() // new instance each resolve
})
\`\`\`

Resolve in controllers or other services:

\`\`\`go
svc := app.Make("order").(*services.OrderService)
\`\`\`

\`Singleton\` returns the same instance every time. \`Bind\` creates a new instance on each resolve.

## Container API

Direct access to the underlying container:

\`\`\`go
import "github.com/lsgser/gofreight/container"

c := container.New()
c.Singleton("db", func() any { return database.DB() })
c.Bind("logger", func() any { return newLogger() })

svc, ok := c.Resolve("db")
svc = c.MustResolve("db") // panics if missing
c.Has("db")
\`\`\`

The application container is available as \`app.Container\`.

## Example: demoapp bootstrap

\`\`\`go
func Application() *application.Application {
    app := application.New()

    app.Singleton("example", func() any {
        return services.NewExampleService()
    })

    return app
}
\`\`\`

## When to use services vs models

| Layer | Responsibility |
|-------|----------------|
| **Models** | Data persistence, validations, associations |
| **Services** | Business logic spanning multiple models or external APIs |
| **Controllers** | HTTP concerns — parse input, call services, render response |
| **Jobs** | Async work triggered by services or controllers |

## Related

- [Controllers](controllers.md) — keeping handlers thin
- [ORM](orm.md) — model layer
- [Jobs & Queues](jobs.md) — async service work
- [Project Structure](project-structure.md) — folder layout
`,"../content/docs/sessions.md":`# Sessions

Sessions store per-user state across HTTP requests — login status, flash messages, CSRF tokens, and form validation errors.

## Setup

Sessions are enabled automatically when you call \`app.UseCSRF()\`. Configure explicitly:

\`\`\`go
sessions := middleware.NewSessions(app.Config.AppKey)
app.Router.Use(sessions.Middleware)
\`\`\`

For production with multiple server processes, use Redis:

\`\`\`go
app.UseRedisSessions(os.Getenv("REDIS_URL"))
\`\`\`

\`\`\`env
SESSION_DRIVER=redis
REDIS_URL=redis://localhost:6379
\`\`\`

## Session API

Access the session from the request context:

\`\`\`go
session := middleware.SessionFromContext(r.Context())

session.Set("current_user_id", userID)
session.Get("current_user_id")
session.GetString("locale")
session.Delete("current_user_id")
\`\`\`

In controllers:

\`\`\`go
session := middleware.SessionFromContext(base.Request.Context())
session.Set("cart_id", cartID)
\`\`\`

## Flash messages

Flash data is available on the **next** request only — ideal for success notices after redirects:

\`\`\`go
session := middleware.SessionFromContext(r.Context())
session.Flash("success", "Post created!")
session.Flash("error", "Something went wrong")

// On the next request:
flashes := session.Flashes()
// flashes["success"] == "Post created!"
// flashes map is cleared after reading
\`\`\`

In GFT templates, render flashed messages in your layout when present.

## Validation errors and old input

When form validation fails, Gofreight flashes errors and old input to the session:

\`\`\`go
// Automatic via controller.RedirectBackWithErrors or ValidateUsing
session.FlashValidationErrors(map[string][]string{"title": {"is required"}})
session.FlashOldInput(map[string]string{"title": "draft title"})
\`\`\`

Templates read them via \`{{ error "title" }}\` and old input helpers. The controller pulls and clears them through \`ViewData\`.

## CSRF tokens

CSRF tokens live in the session under \`_csrf_token\`. Templates use:

\`\`\`html
{{ csrfField }}
\`\`\`

Or read the token programmatically:

\`\`\`go
token := middleware.CSRFTokenFromSession(session)
\`\`\`

See **[Middleware](middleware.md#csrf-protection)**.

## Cookie settings

Default session cookie:

| Setting | Value |
|---------|-------|
| Name | \`_gofreight_session\` |
| Max age | 24 hours |
| HttpOnly | true |
| SameSite | Lax |

Customize via \`middleware.NewSessions\`:

\`\`\`go
sm := middleware.NewSessions(appKey)
sm.CookieName = "_myapp_session"
sm.MaxAge = 7 * 24 * time.Hour
app.Router.Use(sm.Middleware)
\`\`\`

## Authentication integration

Session login stores the user ID:

\`\`\`go
session.Set("current_user_id", user.ID)
\`\`\`

Logout clears it:

\`\`\`go
session.Delete("current_user_id")
\`\`\`

See **[Authentication](authentication.md)**.

## Related

- [Middleware](middleware.md) — session and CSRF middleware
- [Forms & Validation](forms-validation.md) — flash errors on failed validation
- [Authentication](authentication.md) — session login
`,"../content/docs/templating.md":`# Gofreight Templates (GFT)

**Gofreight Templates** (\`.gft\`) is Gofreight's native view language. It provides layouts, partials, loops, conditionals, and CSRF helpers with its **own syntax**, and compiles to Go \`html/template\` at load time.

## File extension

| Extension | Description |
|-----------|-------------|
| \`.gft\` | Gofreight Template (recommended) |
| \`.html\` | Compiled when GFT directives are detected |

Store views in \`app/views/\`:

\`\`\`
app/views/
├── layouts/
│   └── application.gft
├── partials/
│   └── flash.gft
└── posts/
    ├── index.gft
    ├── show.gft
    ├── new.gft
    └── edit.gft
\`\`\`

## Output

| Syntax | Meaning |
|--------|---------|
| \`{= .Title }\` | Escaped output (HTML-safe) |
| \`{! .HTML !}\` | Raw / unescaped output |

## Layouts & slots

Child view:

\`\`\`gft
#layout "layouts.application"

#slot "title"
All Posts
#endslot

#slot "content"
  <h1>Posts</h1>
#endslot
\`\`\`

Layout (\`app/views/layouts/application.gft\`):

\`\`\`gft
<!DOCTYPE html>
<html>
<head>
  <title>#place "title" "My App"</title>
</head>
<body>
  #partial "partials.flash"
  <main>#place "content"</main>
</body>
</html>
\`\`\`

| Directive | Purpose |
|-----------|---------|
| \`#layout "path"\` | Inherit a layout (dots → slashes) |
| \`#slot "name"\` … \`#endslot\` | Define a content region |
| \`#place "name"\` | Render a slot in the layout |
| \`#place "name" "default"\` | Slot with fallback text |
| \`#partial "path"\` | Include a partial template |

## Conditionals

\`\`\`gft
#when .Published
  <span>Live</span>
#orwhen .Scheduled
  <span>Scheduled</span>
#otherwise
  <span>Draft</span>
#endwhen

#unless .Deleted
  <article>...</article>
#endunless

#signedin
  <a href="/logout">Logout</a>
#endsignedin

#signedout
  <a href="/login">Login</a>
#endsignedout
\`\`\`

## Loops

\`\`\`gft
#each .Posts as post
  <h2>{= .Title }</h2>
  <p>{= .Body }</p>
#endeach

#eachor .Posts as post
  <li>{= .Title }</li>
#otherwise
  <li>No posts yet.</li>
#endeach
\`\`\`

Inside \`#each\` / \`#eachor\`, use \`{= .Field }\` — the dot is the current item in the loop. The \`as post\` name is optional documentation; output always uses \`.\`.

## Forms & security

Use \`#form\` for CSRF-protected forms with optional PUT/PATCH/DELETE spoofing:

\`\`\`gft
#form action="/posts" method="POST"
  #field "title" label="Title" type="text" value=".Item.Title"
  <button type="submit">Save</button>
#endform
\`\`\`

\`#field\` renders label, input, old values, and validation errors. See **[Forms & validation](forms-validation.md)**.

Legacy CSRF token:

\`\`\`gft
<form method="POST" action="/posts">
  #token
  <input name="title">
</form>
\`\`\`

\`#token\` emits a CSRF hidden field (\`authenticity_token\`).

## Comments

\`\`\`gft
{# This comment is stripped at compile time #}
\`\`\`

## Helpers

Register custom helpers on the view engine:

\`\`\`go
app.Views.RegisterFunc("money", func(n float64) string {
    return fmt.Sprintf("$%.2f", n)
})
\`\`\`

Use in templates after compile: \`{= money .Price }\` → \`{{money .Price}}\`

Built-in helpers: \`upper\`, \`lower\`, \`title\`, \`join\`, \`default\`, \`safeHTML\`, \`contains\`, \`trim\`, \`old\`, \`fieldErrors\`, \`hasError\`.

## Rendering

\`\`\`go
return base.RenderView("posts/index", map[string]any{
    "Posts": posts,
    "Flash": "Saved!",
})
\`\`\`

Partial without layout:

\`\`\`go
return base.RenderPartial("partials.flash", data)
\`\`\`

## Design philosophy

GFT is Gofreight's own view language — not a port of another template engine. Directives use a \`#\` prefix; output uses \`{= }\` (escaped) and \`{! !}\` (raw).

| Concept | GFT directive |
|---------|---------------|
| Layout inheritance | \`#layout\` |
| Content regions | \`#slot\` / \`#place\` |
| Partials | \`#partial\` |
| Conditionals | \`#when\` / \`#endwhen\` |
| Loops | \`#each\` / \`#endeach\` |
| Empty fallback | \`#eachor\` / \`#otherwise\` |
| CSRF | \`#token\` / \`#form\` |
| Forms | \`#form\` / \`#field\` / \`#error\` |
| Validation helpers | \`old\`, \`fieldErrors\`, \`hasError\` |
| Output | \`{= }\` / \`{! !}\` |

GFT is designed to be readable on its own while fitting naturally into Go projects that already use \`html/template\` under the hood.
`,"../content/docs/testing.md":`# Testing

Gofreight ships with \`gftest\`, a testing library for HTTP endpoints and database-backed features.

## Running tests

\`\`\`bash
gofreight test              # from app root
go test ./...               # standard Go
cd examples/blog && go test ./...
\`\`\`

## Describe / It syntax

\`\`\`go
gftest.Describe("Posts", func() {
    gftest.BeforeEach(func(t *testing.T) {
        // setup
    })

    gftest.It("lists published posts", func(t *testing.T) {
        app := gftest.NewApp(t, gftest.WithDatabase("sqlite://:memory:"))
        app.Get("/posts").AssertOk().AssertSee("Hello")
    })
})
\`\`\`

## Assertions

\`\`\`go
gftest.Expect(42).ToEqual(42)
gftest.Expect("hello").ToContain("ell")
gftest.Expect(err).ToBeNil()
\`\`\`

## HTTP testing

\`\`\`go
app := gftest.NewApp(t,
    gftest.WithMigrations(migrationSQL),
    gftest.WithRoutes(routes.Register),
)
app.Get("/posts").AssertOk().AssertSee("Title")
app.Post("/posts", body).AssertRedirect("/posts/1")
\`\`\`

## Factories and fakes

Factories use **\`gftest/faker\`** for random defaults. Values are generated fresh on each \`Create\` via lazy attributes:

\`\`\`go
import (
    "github.com/lsgser/gofreight/gftest/faker"
)

post := factories.CreatePost(t) // random title + body
user := factories.CreateUser(t, map[string]any{"email": "fixed@example.com"})
\`\`\`

Generate a factory with faker wired in:

\`\`\`bash
gofreight make:factory Post
gofreight make:scaffold Article title:string body:text  # includes faker factory
\`\`\`

Manual factory example:

\`\`\`go
var UserFactory = gftest.NewFactory(models.Users).Define(map[string]any{
    "name":  faker.Lazy(func() any { return faker.Name() }),
    "email": faker.Lazy(func() any { return faker.Email() }),
})
\`\`\`

Faker helpers: \`Name\`, \`Email\`, \`Sentence\`, \`Paragraph\`, \`URL\`, \`UUID\`, \`Date\`, \`DateTime\`, \`Int\`, \`Bool\`, and more — see \`gftest/faker/\`.

Service fakes (mail, cache, queue):

\`\`\`go
gftest.UseFakes()
gftest.AssertMailSent(t, 1)
\`\`\`

## Database assertions

\`\`\`go
app.DB().ToHaveCount("posts", 3)
app.DB().ToHaveRecord("posts", map[string]any{"title": "Hello"})
\`\`\`

See \`gftest/\` and \`examples/blog/tests/\` for complete examples.

Related: [Routing](routing.md) (test routes with \`gftest.WithRoutes\`), [Generators](generators.md) (factories with faker).
`,"../content/docs/tutorial-auth-jwt.md":`<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>

# JWT Authentication

This tutorial adds JSON Web Token (JWT) authentication to your API — a login endpoint that returns a Bearer token, and middleware that protects private routes.

## What you'll build

- \`POST /api/login\` — authenticate and receive a JWT
- Protected routes under \`/api/v1\` that require \`Authorization: Bearer <token>\`

## Prerequisites

- An app with \`APP_KEY\` set (\`gofreight key:generate\`)
- A users table (use \`gofreight make:auth\` or scaffold a User model)

See **[Build a REST API](tutorial-rest-api.md)** for the API setup.

## Step 1 — Generate auth scaffolding

\`\`\`bash
gofreight make:auth
gofreight migrate
\`\`\`

This creates user models, login handlers, and route stubs you can customize.

## Step 2 — Create a JWT manager

JWTs are signed with \`APP_KEY\`:

\`\`\`go
import "github.com/lsgser/gofreight/auth"

jwtMgr := auth.JWTFromEnv(app.Config.AppKey)
\`\`\`

Optional: set token lifetime in \`.env\`:

\`\`\`env
JWT_TTL=24h
\`\`\`

## Step 3 — Add a login endpoint

\`LoginWithJWT\` validates credentials and returns a JSON token:

\`\`\`go
r.Post("/api/login", controller.Handler(auth.LoginWithJWT(
    auth.DefaultLoginConfig(findUserByEmail),
    jwtMgr,
)))
\`\`\`

Example response:

\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "type": "Bearer"
}
\`\`\`

Test with curl:

\`\`\`bash
curl -X POST http://localhost:5000/api/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"user@example.com","password":"secret"}'
\`\`\`

## Step 4 — Protect API routes

Wrap your API group with JWT middleware:

\`\`\`go
jwtMgr := auth.JWTFromEnv(app.Config.AppKey)

r.Group(func(api *router.Router) {
    API(api)
}).Prefix("/api/v1").Use(auth.JWTMiddleware(jwtMgr)).Apply()
\`\`\`

Clients must send the token on every request:

\`\`\`bash
curl http://localhost:5000/api/v1/profile \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
\`\`\`

Requests without a valid token receive \`401 Unauthorized\`.

## Step 5 — Read the current user in handlers

Extract the authenticated user ID from the request context:

\`\`\`go
func profileHandler(w http.ResponseWriter, r *http.Request) {
    userID, ok := auth.UserIDFromRequest(r, "current_user_id")
    if !ok {
        http.Error(w, "Unauthorized", http.StatusUnauthorized)
        return
    }
    // load user by ID...
}
\`\`\`

## Step 6 — Unified guard (JWT + session + API token)

If you need one middleware that accepts JWT, opaque API tokens, or session cookies:

\`\`\`go
guard := auth.Guard{
    JWT:        jwtMgr,
    TokenStore: tokenStore,
    SessionKey: "current_user_id",
}

r.Group(func(api *router.Router) {
    API(api)
}).Prefix("/api/v1").Use(guard.Middleware).Apply()
\`\`\`

## Step 7 — Role-based authorization

Combine JWT auth with policies:

\`\`\`go
policy := auth.NewPolicy()
policy.Define("admin", func(r *http.Request) bool {
    role, _ := auth.RoleFromRequest(r)
    return role == "admin"
})

api.Delete("/posts/:id", postsDestroy).Use(auth.RequireRole("admin"))
\`\`\`

Policies work with JWT claims, session data, and API token metadata.

## Security checklist

- Run \`gofreight key:generate\` and keep \`APP_KEY\` secret
- Use HTTPS in production
- Set a reasonable \`JWT_TTL\` (default 24h)
- Never store JWTs in localStorage if you can use httpOnly cookies for browser apps

## Next steps

- **[Security](../docs/security.md)** — CSRF, policies, and production defaults
- **[Build a REST API](tutorial-rest-api.md)** — route groups and ApiResource
- **[Testing](../docs/testing.md)** — test authenticated endpoints with \`gftest\`
`,"../content/docs/tutorial-first-app.md":`<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>

# Your First Gofreight App

This tutorial walks you through creating a new Gofreight application from scratch, running migrations, and serving your first page.

## What you'll build

A new Gofreight project with SQLite, a working dev server on port **5000**, and the built-in admin panel for browsing your database.

## Prerequisites

- Go 1.22 or later
- Git (optional, for cloning from source)

## Step 1 — Install the CLI

\`\`\`bash
go install github.com/lsgser/gofreight/cmd/gofreight@latest
export PATH="$PATH:$(go env GOPATH)/bin"
gofreight version
\`\`\`

You should see \`gofreight v0.2.0\` (or newer).

## Step 2 — Create a new app

\`\`\`bash
gofreight new myapp
cd myapp
go mod tidy
\`\`\`

Gofreight scaffolds a full project layout: routes, controllers, views, migrations, and a \`.env\` file with sensible defaults.

### Default \`.env\`

\`\`\`env
APP_NAME=myapp
GOFREIGHT_ENV=development
PORT=5000
DB_CONNECTION=sqlite
APP_KEY=
\`\`\`

SQLite stores data in \`db/development.db\` — no database server required.

## Step 3 — Generate an app key

Sessions, CSRF tokens, and JWT signing all depend on \`APP_KEY\`:

\`\`\`bash
gofreight key:generate
\`\`\`

This writes a unique key into \`.env\`. Never commit production keys to version control.

## Step 4 — Prepare the database

\`\`\`bash
gofreight db:create
gofreight migrate
\`\`\`

\`db:create\` ensures the SQLite file exists. \`migrate\` runs all files in \`database/migrations/\`.

## Step 5 — Start the dev server

\`\`\`bash
gofreight serve
\`\`\`

Open **http://localhost:5000** in your browser. You should see the welcome page.

In development, the database admin is available at **http://localhost:5000/admin**.

## Step 6 — Add your first route

Routes for HTML pages live in \`routes/web.go\`. Open it and add a simple handler:

\`\`\`go
r.Get("/hello", func(w http.ResponseWriter, req *http.Request) {
    w.Header().Set("Content-Type", "text/plain")
    fmt.Fprintln(w, "Hello from Gofreight!")
})
\`\`\`

Restart \`gofreight serve\` and visit **http://localhost:5000/hello**.

## Step 7 — Scaffold a resource (optional)

Generate a full CRUD stack — model, migration, controller, views, and routes — in one command:

\`\`\`bash
gofreight make:scaffold Post title:string body:text published:boolean
gofreight migrate
\`\`\`

Visit **http://localhost:5000/posts** to browse your new resource.

## Project layout at a glance

| Path | Purpose |
|------|---------|
| \`routes/web.go\` | HTML routes |
| \`routes/api.go\` | JSON API routes |
| \`routes/register.go\` | Wires web + API route groups |
| \`controllers/\` | Request handlers |
| \`views/\` | GFT templates |
| \`models/\` | Database models |
| \`database/migrations/\` | Schema migrations |

## Next steps

- **[Build a REST API](tutorial-rest-api.md)** — JSON endpoints with route groups
- **[HTML CRUD with GFT](tutorial-html-crud.md)** — forms, validation, and templates
- **[JWT Authentication](tutorial-auth-jwt.md)** — protect API routes with Bearer tokens
`,"../content/docs/tutorial-graphql.md":`<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>

# GraphQL Tutorial

This tutorial builds a posts API with Gofreight GraphQL — schema defined in SDL strings (like \`gql\` in JavaScript/TypeScript), Go resolvers, DataLoader, and the GraphiQL playground.

## What you'll build

- \`User\` and \`Post\` types defined in GraphQL SDL
- Query resolvers: \`users\`, \`user\`, \`posts\`, \`post\`
- Mutation resolver: \`createPost\`
- Field resolver: \`Post.author\` (nested relation via \`p.Source\`)
- Named and inline **fragments** for reusable field selections
- DataLoader batching for author lookups
- Playground at \`/graphql/playground\`

## Prerequisites

A running Gofreight app (\`gofreight new myapp && gofreight serve\`). Add the GraphQL module files below under \`app/graphql/\`.

## Step 1 — Define schema in SDL

Create \`app/graphql/schema.go\` with your type definitions as GraphQL strings:

\`\`\`go
package graphql

import gfgraphql "github.com/lsgser/gofreight/graphql"

var userSDL = gfgraphql.MustGQL(\`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    extend type Query {
        users: [User!]!
        user(id: ID!): User
    }
\`)

var postSDL = gfgraphql.MustGQL(\`
    type Post {
        id: ID!
        title: String!
        body: String
        authorId: ID!
        author: User!
    }

    extend type Query {
        posts: [Post!]!
        post(id: ID!): Post
    }

    extend type Mutation {
        createPost(title: String!, body: String, authorId: ID!): Post!
    }
\`)
\`\`\`

\`MustGQL\` validates the SDL at startup — invalid schema strings fail immediately, like the \`gql\` tag in TypeScript.

## Step 2 — In-memory data store

For this tutorial, use a simple in-memory store (swap for the ORM in production):

\`\`\`go
// app/graphql/store.go
package graphql

import "sync"

var (
    storeMu sync.RWMutex
    users   = []map[string]any{
        {"id": "1", "name": "Ada", "email": "ada@example.com"},
        {"id": "2", "name": "Lin", "email": "lin@example.com"},
    }
    posts = []map[string]any{
        {"id": "1", "title": "Hello GraphQL", "body": "First post.", "authorId": "1"},
        {"id": "2", "title": "SDL schemas", "body": "Define types as strings.", "authorId": "2"},
    }
)

func findUser(id string) map[string]any {
    storeMu.RLock()
    defer storeMu.RUnlock()
    for _, u := range users {
        if u["id"] == id {
            return u
        }
    }
    return nil
}

func findPost(id string) map[string]any {
    storeMu.RLock()
    defer storeMu.RUnlock()
    for _, p := range posts {
        if p["id"] == id {
            return p
        }
    }
    return nil
}
\`\`\`

## Step 3 — Understand resolver execution

When a client sends this query:

\`\`\`graphql
query {
  posts {
    title
    author { name }
  }
}
\`\`\`

Gofreight calls resolvers in order:

1. **\`Query.posts\`** — root resolver, returns a list of Post objects
2. **\`Post.title\`** — skipped (value already on each post map)
3. **\`Post.author\`** — field resolver, receives each post as \`p.Source\`

\`\`\`
Query.posts          →  [{ id, title, authorId }, ...]
Post.author (×N)     →  { name, email }  (one per post, batched via DataLoader)
\`\`\`

Every resolver is a Go function:

\`\`\`go
func myResolver(p gql.ResolveParams) (any, error)
\`\`\`

| \`ResolveParams\` | Purpose |
|-----------------|---------|
| \`p.Context\` | Request context — auth, DataLoaders, ORM |
| \`p.Args\` | Arguments (\`id\`, \`title\`, …) |
| \`p.Source\` | Parent object (field resolvers only) |

---

## Step 4 — Write resolver functions

Create \`app/graphql/resolvers.go\` with **named functions** — one per field that needs custom logic:

\`\`\`go
// app/graphql/resolvers.go
package graphql

import (
    "context"
    "fmt"

    gql "github.com/graphql-go/graphql"
)

// --- Query resolvers (root — no parent) ---

func listUsers(_ gql.ResolveParams) (any, error) {
    storeMu.RLock()
    defer storeMu.RUnlock()
    out := make([]map[string]any, len(users))
    copy(out, users)
    return out, nil
}

func getUser(p gql.ResolveParams) (any, error) {
    id, _ := p.Args["id"].(string)
    u := findUser(id)
    if u == nil {
        return nil, fmt.Errorf("user %s not found", id)
    }
    return u, nil
}

func listPosts(_ gql.ResolveParams) (any, error) {
    storeMu.RLock()
    defer storeMu.RUnlock()
    out := make([]map[string]any, len(posts))
    copy(out, posts)
    return out, nil
}

func getPost(p gql.ResolveParams) (any, error) {
    id, _ := p.Args["id"].(string)
    post := findPost(id)
    if post == nil {
        return nil, fmt.Errorf("post %s not found", id)
    }
    return post, nil
}

// --- Mutation resolver ---

func createPost(p gql.ResolveParams) (any, error) {
    title, _ := p.Args["title"].(string)
    body, _ := p.Args["body"].(string)
    authorID, _ := p.Args["authorId"].(string)

    if authorID == "" {
        return nil, fmt.Errorf("authorId is required")
    }
    if findUser(authorID) == nil {
        return nil, fmt.Errorf("author %s not found", authorID)
    }

    storeMu.Lock()
    defer storeMu.Unlock()
    id := fmt.Sprintf("%d", len(posts)+1)
    post := map[string]any{
        "id": id, "title": title, "body": body, "authorId": authorID,
    }
    posts = append(posts, post)
    return post, nil
}

// --- Field resolver (nested) ---

func resolvePostAuthor(p gql.ResolveParams) (any, error) {
    // p.Source is the parent Post returned by Query.posts or Query.post
    post, ok := p.Source.(map[string]any)
    if !ok {
        return nil, fmt.Errorf("invalid post source")
    }
    authorID, _ := post["authorId"].(string)
    return loadUser(p.Context, authorID)
}
\`\`\`

### Bind resolvers to SDL fields

Create \`app/graphql/modules.go\` to wire functions to schema fields:

\`\`\`go
// app/graphql/modules.go
package graphql

import (
    gql "github.com/graphql-go/graphql"
    gfgraphql "github.com/lsgser/gofreight/graphql"
)

func userModule() gfgraphql.Module {
    mod, err := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
        ID:  "user",
        SDL: userSDL,
        Resolvers: gfgraphql.SDLResolvers{
            Query: map[string]gql.FieldResolveFn{
                "users": listUsers,
                "user":  getUser,
            },
        },
    })
    if err != nil {
        panic(err)
    }
    return mod
}

func postModule() gfgraphql.Module {
    mod, err := gfgraphql.ModuleFromSDL(gfgraphql.SDLModuleConfig{
        ID:  "post",
        SDL: postSDL,
        Resolvers: gfgraphql.SDLResolvers{
            Query: map[string]gql.FieldResolveFn{
                "posts": listPosts,
                "post":  getPost,
            },
            Mutation: map[string]gql.FieldResolveFn{
                "createPost": createPost,
            },
            TypeFields: map[string]gql.FieldResolveFn{
                "Post.author": resolvePostAuthor,
            },
        },
    })
    if err != nil {
        panic(err)
    }
    return mod
}
\`\`\`

### Resolver binding reference

| SDL field | Map key | Resolver function |
|-----------|---------|-------------------|
| \`extend type Query { users }\` | \`Query["users"]\` | \`listUsers\` |
| \`extend type Query { post(id) }\` | \`Query["post"]\` | \`getPost\` |
| \`extend type Mutation { createPost }\` | \`Mutation["createPost"]\` | \`createPost\` |
| \`type Post { author }\` | \`TypeFields["Post.author"]\` | \`resolvePostAuthor\` |

Fields like \`Post.title\` and \`Post.id\` need **no resolver** when the parent map already contains those keys.

---

## Step 5 — DataLoader for Post.author

When a client requests many posts with \`author { name }\`, loading each author individually causes N+1 queries. Register a DataLoader:

\`\`\`go
// app/graphql/loaders.go
package graphql

import (
    "context"

    "github.com/graph-gophers/dataloader/v7"
    gfgraphql "github.com/lsgser/gofreight/graphql"
)

func registerLoaders(reg *gfgraphql.LoaderRegistry) {
    reg.Register("user", func() any {
        return gfgraphql.NewLoader[string, map[string]any](func(ctx context.Context, keys []string) []*dataloader.Result[map[string]any] {
            results := make([]*dataloader.Result[map[string]any], len(keys))
            for i, key := range keys {
                results[i] = &dataloader.Result[map[string]any]{Data: findUser(key)}
            }
            return results
        })
    })
}

func loadUser(ctx context.Context, id string) (map[string]any, error) {
    if loader, ok := gfgraphql.LoaderFromContext[string, map[string]any](ctx, "user"); ok {
        return loader.Load(ctx, id)()
    }
    u := findUser(id)
    if u == nil {
        return nil, fmt.Errorf("user not found")
    }
    return u, nil
}
\`\`\`

The field resolver \`resolvePostAuthor\` calls \`loadUser\`, which uses the loader when available:

\`\`\`go
func loadUser(ctx context.Context, id string) (map[string]any, error) {
    if loader, ok := gfgraphql.LoaderFromContext[string, map[string]any](ctx, "user"); ok {
        return loader.Load(ctx, id)()
    }
    u := findUser(id)
    if u == nil {
        return nil, fmt.Errorf("user %s not found", id)
    }
    return u, nil
}
\`\`\`

Without DataLoader, requesting 10 posts with \`author { name }\` triggers 10 separate user lookups. With DataLoader, they batch into one call.

---

## Step 6 — Mount on the application

Wire everything in \`app/graphql/register.go\`:

\`\`\`go
package graphql

import (
    "context"
    "log"
    "net/http"
    "time"

    "myapp/bootstrap" // your app package
    "github.com/lsgser/gofreight/application"
    gfgraphql "github.com/lsgser/gofreight/graphql"
)

func Mount(app *application.Application) {
    fieldLimits := gfgraphql.NewFieldRateLimitRegistry()
    fieldLimits.Set("Mutation", "createPost", gfgraphql.RateLimitRule{
        Limit: 30, Window: time.Minute,
    })

    gqlApp, err := gfgraphql.CreateApplication(gfgraphql.ApplicationConfig{
        Modules: []gfgraphql.Module{
            userModule(),
            postModule(),
        },
        Playground:      true,
        Path:            "/graphql",
        RateLimit:       120,
        FieldRateLimits: fieldLimits,
        Security:        gfgraphql.DefaultSecurity(),
        OnRequest: func(r *http.Request, loaders *gfgraphql.LoaderRegistry) context.Context {
            registerLoaders(loaders)
            return gfgraphql.DefaultOnRequest(r, loaders)
        },
    })
    if err != nil {
        log.Printf("graphql: %v", err)
        return
    }

    app.MountGraphQLApplication("/graphql", gqlApp)
}
\`\`\`

Call \`graphql.Mount(app)\` from \`bootstrap/app.go\`.

---

## Step 7 — Try it in the playground

\`\`\`bash
gofreight serve
\`\`\`

Open **http://localhost:5000/graphql/playground**

### List posts with authors

\`\`\`graphql
query {
  posts {
    id
    title
    author {
      name
      email
    }
  }
}
\`\`\`

### Create a post

\`\`\`graphql
mutation {
  createPost(title: "My first mutation", body: "Hello!", authorId: "1") {
    id
    title
  }
}
\`\`\`

### Test error handling

Request a missing post — the resolver returns an error:

\`\`\`graphql
query {
  post(id: "999") {
    title
  }
}
\`\`\`

Response:

\`\`\`json
{
  "errors": [{ "message": "post 999 not found" }],
  "data": { "post": null }
}
\`\`\`

### Use fragments to reuse field selections

Fragments let you define a shared set of fields once and spread them into any query — the same pattern as \`gql\` on the client:

\`\`\`graphql
fragment PostFields on Post {
  id
  title
  body
}

fragment AuthorFields on User {
  id
  name
  email
}

query PostsWithAuthors {
  posts {
    ...PostFields
    author {
      ...AuthorFields
    }
  }
}
\`\`\`

Run the same query in the playground. Gofreight expands \`...PostFields\` and \`...AuthorFields\` before calling resolvers — \`Post.author\` still runs \`resolvePostAuthor\` for each post.

**Inline fragment** — select fields on a specific type without naming the fragment:

\`\`\`graphql
query {
  posts {
    ... on Post {
      title
      author { name }
    }
  }
}
\`\`\`

**With variables:**

\`\`\`graphql
query PostDetail($id: ID!) {
  post(id: $id) {
    ...PostFields
  }
}
\`\`\`

Query variables (playground **Variables** panel):

\`\`\`json
{ "id": "1" }
\`\`\`

Depth and complexity limits account for fields inside fragments — see **[GraphQL: Fragments](graphql.md#fragments)**.

---

## Step 8 — Connect to the ORM (optional)

Replace in-memory helpers with Gofreight models. Each resolver keeps the same signature — only the data layer changes:

\`\`\`go
// app/graphql/resolvers.go
import (
    "strconv"
    "myapp/app/models"
)

func listPosts(p gql.ResolveParams) (any, error) {
    return models.Posts.Query(p.Context).OrderDesc("created_at").Get()
}

func getPost(p gql.ResolveParams) (any, error) {
    id, _ := p.Args["id"].(string)
    postID, _ := strconv.ParseInt(id, 10, 64)
    return models.Posts.Find(p.Context, postID)
}

func createPost(p gql.ResolveParams) (any, error) {
    post := &models.Post{
        Title:  p.Args["title"].(string),
        Body:   p.Args["body"].(string),
        UserID: parseAuthorID(p.Args["authorId"]),
    }
    if err := post.Save(p.Context); err != nil {
        return nil, err // validation errors propagate to GraphQL errors
    }
    return post, nil
}

func resolvePostAuthor(p gql.ResolveParams) (any, error) {
    post, _ := p.Source.(*models.Post)
    return models.Users.Find(p.Context, post.UserID)
}
\`\`\`

Use \`Query().With("Author")\` on list queries for eager loading, or keep DataLoader on \`Post.author\` for batching.

See **[ORM](orm.md)** for models, queries, and associations.

---

## Step 9 — Protect resolvers with auth (optional)

When GraphQL routes use JWT or session middleware, read the user inside mutations:

\`\`\`go
import "github.com/lsgser/gofreight/auth"

func createPost(p gql.ResolveParams) (any, error) {
    userID, ok := auth.UserIDFromContext(p.Context)
    if !ok {
        return nil, fmt.Errorf("authentication required")
    }
    // set author from authenticated user instead of authorId arg
    ...
}
\`\`\`

See **[Authentication](authentication.md)** for login and middleware setup.

---

## Supported types recap

| SDL | Example |
|-----|---------|
| Scalars | \`String\`, \`Int\`, \`Float\`, \`Boolean\`, \`ID\` |
| Objects | \`type Post { ... }\` |
| Enums | \`enum Status { DRAFT PUBLISHED }\` |
| Inputs | \`input CreatePostInput { title: String! }\` |
| Lists | \`[Post!]!\` |
| Root ops | \`extend type Query\`, \`extend type Mutation\` |

Interfaces and unions are supported programmatically — see **[GraphQL](graphql.md#supported-graphql-types)**.

## Production checklist

- Set \`Playground: false\` when \`GOFREIGHT_ENV=production\`
- Use \`gfgraphql.ProductionSecurity()\` to disable introspection
- Add \`auth.Guard.Middleware\` if the endpoint requires login
- Set global and per-mutation rate limits

## Next steps

- **[GraphQL reference](graphql.md)** — resolvers, types, security, DataLoader
- **[Authentication](authentication.md)** — protect your GraphQL endpoint
- **[Real-time WebSockets](realtime.md)** — live updates alongside GraphQL
`,"../content/docs/tutorial-html-crud.md":`<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>

# HTML CRUD with GFT

This tutorial builds a browser-based CRUD interface using Gofreight Templates (GFT), Vine validation, and form helpers.

## What you'll build

A posts manager with list, create, edit, and delete pages — including server-side validation and flash error messages.

## Prerequisites

Start from an app with migrations applied (see **[Your First App](tutorial-first-app.md)**):

\`\`\`bash
gofreight make:scaffold Post title:string body:text published:boolean
gofreight migrate
gofreight serve
\`\`\`

Visit **http://localhost:5000/posts** — the generator creates routes, controller actions, and GFT views.

## Step 1 — Web resource routes

In \`routes/web.go\`, a full HTML resource includes \`new\` and \`edit\` pages:

\`\`\`go
r.Resources("posts", router.ResourceHandlers{
    Index:   controller.Handler(c.Index),
    Show:    controller.Handler(c.Show),
    Create:  controller.Handler(c.Create),
    Update:  controller.Handler(c.Update),
    Destroy: controller.Handler(c.Destroy),
})
\`\`\`

| Method | Path | Page |
|--------|------|------|
| GET | \`/posts\` | Index (list) |
| GET | \`/posts/new\` | Create form |
| POST | \`/posts\` | Store |
| GET | \`/posts/:id\` | Show |
| GET | \`/posts/:id/edit\` | Edit form |
| PUT/PATCH | \`/posts/:id\` | Update |
| DELETE | \`/posts/:id\` | Destroy |

HTML forms use \`_method=PUT\` or \`_method=DELETE\` for updates and deletes (handled automatically by Gofreight middleware).

## Step 2 — GFT templates

Views live in \`views/posts/\`. A typical index template:

\`\`\`html
<!DOCTYPE html>
<html>
<head><title>Posts</title></head>
<body>
  <h1>Posts</h1>
  <a href="/posts/new">New post</a>
  <ul>
    {{ range .Posts }}
    <li>
      <a href="/posts/{{ .ID }}">{{ .Title }}</a>
    </li>
    {{ end }}
  </ul>
</body>
</html>
\`\`\`

Controllers pass data via \`controller.ViewData\`:

\`\`\`go
controller.Render(w, r, "posts/index", controller.ViewData(r, map[string]any{
    "Posts": posts,
}))
\`\`\`

## Step 3 — Form helpers

Gofreight provides \`#form\`, \`#field\`, and \`#error\` for consistent forms with CSRF protection:

\`\`\`html
{{ define "posts/form" }}
<form method="POST" action="{{ .FormAction }}">
  {{ csrfField }}

  {{ field "title" .Post.Title "text" }}
  {{ error "title" }}

  {{ field "body" .Post.Body "textarea" }}
  {{ error "body" }}

  <label>
    <input type="checkbox" name="published" {{ if .Post.Published }}checked{{ end }}>
    Published
  </label>

  <button type="submit">Save</button>
</form>
{{ end }}
\`\`\`

The CSRF field uses the name \`authenticity_token\`.

## Step 4 — Vine validation

Define a schema and validate in your controller:

\`\`\`go
var postSchema = vine.Object().
    Field("title", vine.String().Required().Min(3).Max(255)).
    Field("body", vine.String().Required())

func (c *PostsController) Store(w http.ResponseWriter, r *http.Request) {
    data, err := controller.ValidateUsing(r, postSchema)
    if err != nil {
        controller.RedirectBackWithErrors(w, r, err)
        return
    }

    // create post from data...
    http.Redirect(w, r, "/posts", http.StatusSeeOther)
}
\`\`\`

When validation fails, errors and old input are flashed to the session and shown on the form via \`{{ error "title" }}\`.

## Step 5 — Redirect back on failure

\`RedirectBackWithErrors\` sends the user back to the form with:

- Field errors under each input (\`{{ error "field" }}\`)
- Old input repopulated (\`{{ field "title" .Old.Title "text" }}\`)

Validation errors and old input are preserved across redirects — idiomatic Go with a smooth form UX.

## Step 6 — Flash messages

Show a success notice after creating a record:

\`\`\`go
session.Flash(r, "success", "Post created!")
http.Redirect(w, r, "/posts", http.StatusSeeOther)
\`\`\`

In your layout template, render flashed messages when present.

## Generators save time

The scaffold command generates validation, forms, and views for you:

\`\`\`bash
gofreight make:scaffold Article title:string body:text status:enum:draft,published
\`\`\`

Customize the generated controller and views from there.

## Next steps

- **[Forms & Validation](../docs/forms-validation.md)** — full Vine schema reference
- **[Templating (GFT)](../docs/templating.md)** — template syntax and helpers
- **[JWT Authentication](tutorial-auth-jwt.md)** — add an API alongside your HTML app
`,"../content/docs/tutorial-realtime.md":`<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>

# Real-time WebSockets

Gofreight includes a **socket.io-style** WebSocket layer for rooms, events, and broadcasts. Use it for live chat, notifications, dashboards, and collaborative features.

## What you'll build

A live chat room where multiple browser tabs exchange messages in real time over WebSockets.

## Prerequisites

- Completed [Your First App](tutorial-first-app.md)
- Go 1.22+

## Step 1 — Mount the socket endpoint

In \`bootstrap/app.go\`:

\`\`\`go
import "github.com/lsgser/gofreight/channels"

func wireRealtime(app *application.Application) {
    app.MountSocket("/socket")
}
\`\`\`

Call \`wireRealtime(app)\` from your \`Application()\` bootstrap function.

The WebSocket URL becomes \`ws://localhost:5000/socket\`.

## Step 2 — Handle events on the server

\`\`\`go
import "encoding/json"

func wireRealtime(app *application.Application) {
    app.Channels.OnConnect(func(c *channels.Connection) {
        c.Join("chat:lobby")
    })

    app.Channels.On("chat:message", func(c *channels.Connection, raw json.RawMessage) {
        var payload struct {
            Text string \`json:"text"\`
            User string \`json:"user"\`
        }
        if json.Unmarshal(raw, &payload) != nil || payload.Text == "" {
            return
        }
        if payload.User == "" {
            payload.User = "guest"
        }

        app.Channels.To("chat:lobby").Emit("chat:message", map[string]string{
            "text": payload.Text,
            "user": payload.User,
            "id":   c.ID,
        })
    })

    app.MountSocket("/socket")
}
\`\`\`

## Step 3 — Add the TypeScript client

Copy \`gofreight-socket.ts\` from the framework repo (\`channels/gofreight-socket.ts\`) into your frontend \`public/\` or \`assets/\` folder.

\`\`\`typescript
import { GofreightSocket } from './gofreight-socket'

const socket = new GofreightSocket('/socket')

socket.on('connected', ({ id }) => {
  console.log('Connected as', id)
  socket.emit('chat:history', {})
})

socket.on('chat:message', (msg: { text: string; user: string }) => {
  const li = document.createElement('li')
  li.textContent = \`\${msg.user}: \${msg.text}\`
  document.querySelector('#messages')?.appendChild(li)
})

document.querySelector('#chat-form')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.querySelector<HTMLInputElement>('#chat-input')
  if (!input?.value.trim()) return
  socket.emit('chat:message', { text: input.value, user: 'You' })
  input.value = ''
})
\`\`\`

## Step 4 — HTML page

\`\`\`html
<ul id="messages"></ul>
<form id="chat-form">
  <input id="chat-input" type="text" placeholder="Say hello…" autocomplete="off" />
  <button type="submit">Send</button>
</form>
<script type="module" src="/assets/chat.js"><\/script>
\`\`\`

Open two browser tabs to the page — messages appear instantly in both.

## Client API reference

| Method | Description |
|--------|-------------|
| \`new GofreightSocket('/socket')\` | Connect to the server |
| \`socket.on(event, fn)\` | Listen for server events |
| \`socket.emit(event, data)\` | Send an event to the server |
| \`socket.join(room)\` | Join a room |
| \`socket.leave(room)\` | Leave a room |
| \`socket.id\` | Connection id (after \`connected\` event) |
| \`socket.connected\` | Whether the socket is open |

## Broadcasting from controllers

Notify clients after a database change:

\`\`\`go
app.Channels.To("posts").Emit("created", map[string]any{
    "id":    post.ID,
    "title": post.Title,
})
\`\`\`

Clients subscribe with:

\`\`\`typescript
socket.join('posts')
socket.on('created', (post) => refreshFeed(post))
\`\`\`

## Demo app

The included \`demoapp\` has a working chat backend in \`bootstrap/app.go\`. Run:

\`\`\`bash
cd demoapp
gofreight serve
\`\`\`

Connect to \`ws://localhost:5000/socket\` and join room \`chat:lobby\`.

## Next steps

- Read the full [Real-time WebSockets](realtime.md) guide
- Add JWT checks in \`OnConnect\` for private rooms
- See [Security](security.md) for production hardening
`,"../content/docs/tutorial-rest-api.md":`<p align="center">
  <img src="assets/gofreight-icon.png" alt="Gofreight" width="48">
</p>

# Build a REST API

This tutorial shows how to build a JSON REST API in Gofreight using route groups, controllers, and \`ApiResource\`.

## What you'll build

A versioned API at \`/api/v1\` with a health check, a posts resource, and group-level middleware.

## Prerequisites

Complete **[Your First App](tutorial-first-app.md)** or start from a fresh scaffold:

\`\`\`bash
gofreight new blog-api
cd blog-api
go mod tidy
gofreight key:generate
gofreight db:create && gofreight migrate
\`\`\`

## Step 1 — Understand route registration

API routes live in \`routes/api.go\`. They are registered inside a group in \`routes/register.go\`:

\`\`\`go
func Register(r *router.Router) {
    Web(r)

    r.Group(func(api *router.Router) {
        API(api)
    }).Prefix("/api/v1").Name("api.").Apply()
}
\`\`\`

Every route inside \`API()\` is prefixed with \`/api/v1\` and named with the \`api.\` prefix.

## Step 2 — Add a health check

In \`routes/api.go\`:

\`\`\`go
func API(r *router.Router) {
    r.Get("/health", func(w http.ResponseWriter, req *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
    })
}
\`\`\`

Test it:

\`\`\`bash
curl http://localhost:5000/api/v1/health
# {"status":"ok"}
\`\`\`

## Step 3 — Scaffold a model and controller

\`\`\`bash
gofreight make:resource Post title:string body:text published:boolean
gofreight migrate
\`\`\`

This generates a model, migration, controller, and route stubs.

## Step 4 — Register an API resource

Gofreight provides \`ApiResource\` for JSON CRUD without HTML \`new\`/\`edit\` routes:

\`\`\`go
r.ApiResource("posts", router.ResourceHandlers{
    Index:   controller.Handler(postsController.Index),
    Show:    controller.Handler(postsController.Show),
    Create:  controller.Handler(postsController.Store),
    Update:  controller.Handler(postsController.Update),
    Destroy: controller.Handler(postsController.Destroy),
})
\`\`\`

This registers:

| Method | Path | Action |
|--------|------|--------|
| GET | \`/api/v1/posts\` | List posts |
| POST | \`/api/v1/posts\` | Create post |
| GET | \`/api/v1/posts/:id\` | Show post |
| PUT/PATCH | \`/api/v1/posts/:id\` | Update post |
| DELETE | \`/api/v1/posts/:id\` | Delete post |

## Step 5 — Return JSON from controllers

A typical index handler loads records and writes JSON:

\`\`\`go
func (c *PostsController) Index(w http.ResponseWriter, r *http.Request) {
    posts, err := c.repo.All(r.Context())
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(posts)
}
\`\`\`

Path parameters are available via \`r.PathValue("id")\`.

## Step 6 — Add group middleware

Protect an entire API group with middleware:

\`\`\`go
r.Group(func(api *router.Router) {
    API(api)
}).Prefix("/api/v1").Use(authMw).Apply()
\`\`\`

Or attach middleware to a single route:

\`\`\`go
api.Delete("/posts/:id", postsDestroy).Use(adminMw)
\`\`\`

Group middleware runs first (outer groups before inner), then route middleware, then the handler.

## Step 7 — Nested version groups

For multiple API versions, nest groups:

\`\`\`go
r.Group(func(api *router.Router) {
    api.Group(func(v1 *router.Router) {
        v1.Get("/users", usersIndex) // GET /api/v1/users
    }).Prefix("/v1").Apply()

    api.Group(func(v2 *router.Router) {
        v2.Get("/users", usersV2Index) // GET /api/v2/users
    }).Prefix("/v2").Apply()
}).Prefix("/api").Apply()
\`\`\`

## Testing with curl

\`\`\`bash
# Create
curl -X POST http://localhost:5000/api/v1/posts \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Hello API","body":"First post","published":true}'

# List
curl http://localhost:5000/api/v1/posts

# Show
curl http://localhost:5000/api/v1/posts/1

# Update
curl -X PUT http://localhost:5000/api/v1/posts/1 \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Updated","body":"Revised","published":true}'

# Delete
curl -X DELETE http://localhost:5000/api/v1/posts/1
\`\`\`

## Next steps

- **[JWT Authentication](tutorial-auth-jwt.md)** — require Bearer tokens on protected routes
- **[Testing](../docs/testing.md)** — write API tests with \`gftest\`
- **[Routing](../docs/routing.md)** — full route group reference
`});function nr(e){return tr[`../content/docs/${e}.md`]}function rr(){return Object.keys(tr).map(e=>e.match(/\/([^/]+)\.md$/)?.[1]??``).filter(Boolean)}function ir(e){return nr(e)}function ar(e){return e.replace(/<[^>]+>/g,` `).replace(/```[\s\S]*?```/g,` `).replace(/`[^`]+`/g,` `).replace(/!\[[^\]]*\]\([^)]+\)/g,` `).replace(/\[[^\]]*\]\([^)]+\)/g,` `).replace(/^#{1,6}\s+/gm,``).replace(/[*_~>-]/g,` `).replace(/\s+/g,` `).trim()}function or(e,t){return e.match(/^#\s+(.+)$/m)?.[1]?.trim()??t}function sr(){let e=new Map(Zn.map(e=>[e.slug,e]));return[...new Set([...Zn.map(e=>e.slug),...rr()])].filter(e=>e!==`README`).map(t=>{let n=ir(t)??``,r=e.get(t);return{slug:t,title:r?.title??or(n,t),description:r?.description??``,body:ar(n),snippet:``,score:0}})}var cr=sr();function lr(e,t){let n=e.toLowerCase(),r=t.toLowerCase();if(r===n)return 100;if(r.startsWith(n))return 80;if(r.includes(n))return 60;let i=n.split(/\s+/).filter(Boolean),a=0;for(let e of i)r.includes(e)&&(a+=20);return a}function ur(e,t,n=120){let r=e.toLowerCase().indexOf(t.toLowerCase());if(r===-1)return e.slice(0,n)+(e.length>n?`…`:``);let i=Math.max(0,r-40),a=Math.min(e.length,r+t.length+60),o=e.slice(i,a).trim();return(i>0?`…`:``)+o+(a<e.length?`…`:``)}function dr(e,t=8){let n=e.trim();return n?cr.map(e=>{let t=lr(n,e.title)*3,r=lr(n,e.description)*2,i=lr(n,e.body),a=Math.max(t,r,i);return{slug:e.slug,title:e.title,description:e.description,snippet:ur(e.body||e.description,n),score:a}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,t):[]}function fr(){return typeof navigator>`u`?!1:/Mac|iPhone|iPod|iPad/i.test(navigator.userAgent)}function pr(){return fr()?`⌘K`:`Ctrl+K`}var mr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=mr()}))();function hr({compact:e=!1}){let t=(0,S.useId)(),n=(0,S.useId)(),r=bt(),i=(0,S.useRef)(null),a=(0,S.useRef)(null),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)([]),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(0),m=pr();(0,S.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),i.current?.focus(),d(!0)),e.key===`Escape`&&(d(!1),i.current?.blur())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,S.useEffect)(()=>{let e=e=>{a.current?.contains(e.target)||d(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[]),(0,S.useEffect)(()=>{if(!o.trim()){l([]),p(0);return}let e=window.setTimeout(()=>{l(dr(o)),p(0)},150);return()=>window.clearTimeout(e)},[o]);function h(e){r(`/docs/${e}`),s(``),d(!1),i.current?.blur()}function g(e){u&&c.length!==0&&(e.key===`ArrowDown`?(e.preventDefault(),p(e=>(e+1)%c.length)):e.key===`ArrowUp`?(e.preventDefault(),p(e=>(e-1+c.length)%c.length)):e.key===`Enter`&&(e.preventDefault(),h(c[f].slug)))}return(0,M.jsxs)(`div`,{ref:a,className:e?`doc-search doc-search-compact`:`doc-search`,children:[(0,M.jsx)(`label`,{htmlFor:t,className:`visually-hidden`,children:`Search documentation`}),(0,M.jsxs)(`div`,{className:`doc-search-input-wrap`,children:[(0,M.jsx)(`span`,{className:`doc-search-icon`,"aria-hidden":`true`,children:`⌕`}),(0,M.jsx)(`input`,{ref:i,id:t,type:`search`,className:`doc-search-input`,placeholder:`Search docs…`,value:o,onChange:e=>{s(e.target.value),d(!0)},onFocus:()=>d(!0),onKeyDown:g,role:`combobox`,"aria-expanded":u&&c.length>0,"aria-controls":n,"aria-autocomplete":`list`,autoComplete:`off`}),!e&&(0,M.jsx)(`kbd`,{className:`doc-search-kbd`,children:m})]}),u&&o.trim()&&(0,M.jsx)(`ul`,{id:n,className:`doc-search-results`,role:`listbox`,children:c.length===0?(0,M.jsxs)(`li`,{className:`doc-search-empty`,children:[`No results for “`,o,`”`]}):c.map((e,t)=>(0,M.jsx)(`li`,{role:`option`,"aria-selected":t===f,children:(0,M.jsxs)(`button`,{type:`button`,className:t===f?`doc-search-result active`:`doc-search-result`,onMouseEnter:()=>p(t),onClick:()=>h(e.slug),children:[(0,M.jsx)(`strong`,{children:e.title}),e.description&&(0,M.jsx)(`span`,{children:e.description}),e.snippet&&(0,M.jsx)(`small`,{children:e.snippet})]})},e.slug))})]})}function gr(){let{slug:e}=wt();return(0,M.jsxs)(`div`,{className:`docs-shell`,children:[(0,M.jsx)(`aside`,{className:`docs-sidebar`,children:(0,M.jsxs)(`div`,{className:`docs-sidebar-inner`,children:[(0,M.jsx)(hr,{}),(0,M.jsx)(`p`,{className:`docs-sidebar-label`,children:`Documentation`}),Xn.map(t=>(0,M.jsxs)(`div`,{className:`docs-nav-section`,children:[(0,M.jsx)(`h3`,{children:t.title}),(0,M.jsx)(`ul`,{children:t.items.map(t=>(0,M.jsx)(`li`,{children:(0,M.jsx)(Ln,{to:`/docs/${t.slug}`,className:({isActive:n})=>n||e===t.slug?`docs-nav-link active`:`docs-nav-link`,children:t.title})},t.slug))})]},t.title))]})}),(0,M.jsx)(`div`,{className:`docs-content`,children:(0,M.jsxs)(`div`,{className:`docs-content-inner`,children:[e&&(0,M.jsxs)(`nav`,{className:`docs-breadcrumb`,"aria-label":`Breadcrumb`,children:[(0,M.jsx)(In,{to:`/docs`,children:`Docs`}),(0,M.jsx)(`span`,{children:`/`}),er(e)&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(In,{to:`/docs/tutorial-first-app`,children:`Tutorials`}),(0,M.jsx)(`span`,{children:`/`})]}),(0,M.jsx)(`span`,{children:$n(e)})]}),(0,M.jsx)(qt,{})]})})]})}var _r=`/gofreight-web/`;function vr(e){return`${`/gofreight-web/`.endsWith(`/`)?_r:`${_r}/`}${e.replace(/^\//,``)}`}var yr=`/gofreight-web/`.replace(/\/$/,``)||void 0;function br(){return(0,M.jsxs)(`footer`,{className:`site-footer`,children:[(0,M.jsxs)(`div`,{className:`container footer-grid`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{className:`footer-brand`,children:[(0,M.jsx)(`img`,{src:vr(`gofreight-icon.png`),alt:``,width:28,height:28}),(0,M.jsx)(`strong`,{children:`Gofreight`})]}),(0,M.jsx)(`p`,{className:`footer-tagline`,children:`A batteries-included web framework for Go. Ship a complete application as a single binary.`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Tutorials`}),(0,M.jsxs)(`ul`,{children:[(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/tutorial-first-app`,children:`Your First App`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/tutorial-rest-api`,children:`Build a REST API`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/tutorial-html-crud`,children:`HTML CRUD with GFT`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/tutorial-auth-jwt`,children:`JWT Authentication`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/tutorial-realtime`,children:`Real-time WebSockets`})})]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Documentation`}),(0,M.jsxs)(`ul`,{children:[(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/getting-started`,children:`Getting Started`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/routing`,children:`Routing`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/realtime`,children:`Real-time`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/templating`,children:`Templating`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(In,{to:`/docs/security`,children:`Security`})})]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h4`,{children:`Community`}),(0,M.jsxs)(`ul`,{children:[(0,M.jsx)(`li`,{children:(0,M.jsx)(`a`,{href:`https://github.com/lsgser/gofreight`,target:`_blank`,rel:`noreferrer`,children:`GitHub`})}),(0,M.jsx)(`li`,{children:(0,M.jsx)(`a`,{href:`https://github.com/lsgser/gofreight/tree/main/examples/blog`,target:`_blank`,rel:`noreferrer`,children:`Example App`})})]})]})]}),(0,M.jsx)(`div`,{className:`container footer-bottom`,children:(0,M.jsx)(`p`,{children:`MIT License · Built with Go · Documentation site powered by React`})})]})}var xr=`gofreight-theme`,Sr=(0,S.createContext)(null);function Cr(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function wr(){let e=localStorage.getItem(xr);return e===`light`||e===`dark`||e===`system`?e:`system`}function Tr(e){document.documentElement.dataset.theme=e}function Er({children:e}){let[t,n]=(0,S.useState)(()=>wr()),[r,i]=(0,S.useState)(()=>t===`system`?Cr():t);(0,S.useEffect)(()=>{let e=t===`system`?Cr():t;i(e),Tr(e),localStorage.setItem(xr,t)},[t]),(0,S.useEffect)(()=>{if(t!==`system`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`),n=()=>{let e=Cr();i(e),Tr(e)};return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[t]);let a=(0,S.useCallback)(e=>{n(e)},[]),o=(0,S.useCallback)(()=>{n(e=>(e===`system`?Cr():e)===`dark`?`light`:`dark`)},[]),s=(0,S.useMemo)(()=>({theme:t,resolvedTheme:r,setTheme:a,toggleTheme:o}),[t,r,a,o]);return(0,M.jsx)(Sr.Provider,{value:s,children:e})}function Dr(){let e=(0,S.useContext)(Sr);if(!e)throw Error(`useTheme must be used within ThemeProvider`);return e}function Or(){let{resolvedTheme:e,toggleTheme:t}=Dr();return(0,M.jsx)(`button`,{type:`button`,className:`theme-toggle`,onClick:t,"aria-label":e===`dark`?`Switch to light mode`:`Switch to dark mode`,title:e===`dark`?`Light mode`:`Dark mode`,children:e===`dark`?(0,M.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,M.jsx)(`path`,{d:`M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41`})]}):(0,M.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:(0,M.jsx)(`path`,{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`})})})}function kr(){let e=_t(),t=e.pathname.startsWith(`/docs/tutorial-`),n=e.pathname===`/docs`||e.pathname.startsWith(`/docs/`)&&!t;return(0,M.jsx)(`header`,{className:`site-header`,children:(0,M.jsxs)(`div`,{className:`container header-inner`,children:[(0,M.jsxs)(In,{to:`/`,className:`brand`,children:[(0,M.jsx)(`img`,{src:vr(`gofreight-icon.png`),alt:``,width:32,height:32}),(0,M.jsx)(`span`,{children:`Gofreight`})]}),(0,M.jsxs)(`nav`,{className:`header-nav`,"aria-label":`Main`,children:[(0,M.jsx)(Ln,{to:`/`,end:!0,className:({isActive:e})=>e?`nav-link active`:`nav-link`,children:`Home`}),(0,M.jsx)(Ln,{to:`/docs/tutorial-first-app`,className:()=>t?`nav-link active`:`nav-link`,children:`Tutorials`}),(0,M.jsx)(Ln,{to:`/docs`,className:()=>n?`nav-link active`:`nav-link`,children:`Documentation`}),(0,M.jsx)(`a`,{href:`https://github.com/lsgser/gofreight`,className:`nav-link`,target:`_blank`,rel:`noreferrer`,children:`GitHub`})]}),(0,M.jsxs)(`div`,{className:`header-actions`,children:[(0,M.jsx)(hr,{compact:!0}),(0,M.jsx)(Or,{}),(0,M.jsx)(`span`,{className:`version-badge`,children:`v0.2.0`}),(0,M.jsx)(In,{to:`/docs/getting-started`,className:`btn btn-primary btn-sm`,children:`Get Started`})]})]})})}function Ar(){return(0,M.jsxs)(`div`,{className:`site`,children:[(0,M.jsx)(kr,{}),(0,M.jsx)(`main`,{className:`site-main`,children:(0,M.jsx)(qt,{})}),(0,M.jsx)(br,{})]})}function jr(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Mr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Nr=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Pr={};function Fr(e,t){return((t||Pr).jsx?Nr:Mr).test(e)}var Ir=/[ \t\n\f\r]/g;function Lr(e){return typeof e==`object`?e.type===`text`&&Rr(e.value):Rr(e)}function Rr(e){return e.replace(Ir,``)===``}var zr=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};zr.prototype.normal={},zr.prototype.property={},zr.prototype.space=void 0;function Br(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new zr(n,r,t)}function Vr(e){return e.toLowerCase()}var Hr=class{constructor(e,t){this.attribute=t,this.property=e}};Hr.prototype.attribute=``,Hr.prototype.booleanish=!1,Hr.prototype.boolean=!1,Hr.prototype.commaOrSpaceSeparated=!1,Hr.prototype.commaSeparated=!1,Hr.prototype.defined=!1,Hr.prototype.mustUseProperty=!1,Hr.prototype.number=!1,Hr.prototype.overloadedBoolean=!1,Hr.prototype.property=``,Hr.prototype.spaceSeparated=!1,Hr.prototype.space=void 0;var Ur=s({boolean:()=>N,booleanish:()=>Gr,commaOrSpaceSeparated:()=>Jr,commaSeparated:()=>qr,number:()=>P,overloadedBoolean:()=>Kr,spaceSeparated:()=>F}),Wr=0,N=Yr(),Gr=Yr(),Kr=Yr(),P=Yr(),F=Yr(),qr=Yr(),Jr=Yr();function Yr(){return 2**++Wr}var Xr=Object.keys(Ur),Zr=class extends Hr{constructor(e,t,n,r){let i=-1;if(super(e,t),Qr(this,`space`,r),typeof n==`number`)for(;++i<Xr.length;){let e=Xr[i];Qr(this,Xr[i],(n&Ur[e])===Ur[e])}}};Zr.prototype.defined=!0;function Qr(e,t,n){n&&(e[t]=n)}function $r(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new Zr(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Vr(r)]=r,n[Vr(a.attribute)]=r}return new zr(t,n,e.space)}var ei=$r({properties:{ariaActiveDescendant:null,ariaAtomic:Gr,ariaAutoComplete:null,ariaBusy:Gr,ariaChecked:Gr,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:F,ariaCurrent:null,ariaDescribedBy:F,ariaDetails:null,ariaDisabled:Gr,ariaDropEffect:F,ariaErrorMessage:null,ariaExpanded:Gr,ariaFlowTo:F,ariaGrabbed:Gr,ariaHasPopup:null,ariaHidden:Gr,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:F,ariaLevel:P,ariaLive:null,ariaModal:Gr,ariaMultiLine:Gr,ariaMultiSelectable:Gr,ariaOrientation:null,ariaOwns:F,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:Gr,ariaReadOnly:Gr,ariaRelevant:null,ariaRequired:Gr,ariaRoleDescription:F,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:Gr,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function ti(e,t){return t in e?e[t]:t}function ni(e,t){return ti(e,t.toLowerCase())}var ri=$r({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:qr,acceptCharset:F,accessKey:F,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alpha:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:F,autoFocus:N,autoPlay:N,blocking:F,capture:null,charSet:null,checked:N,cite:null,className:F,closedBy:null,colorSpace:null,cols:P,colSpan:P,command:null,commandFor:null,content:null,contentEditable:Gr,controls:N,controlsList:F,coords:P|qr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:Kr,draggable:Gr,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:F,height:P,hidden:Kr,high:P,href:null,hrefLang:null,htmlFor:F,httpEquiv:F,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:F,itemRef:F,itemScope:N,itemType:F,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:P,pattern:null,ping:F,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:F,required:N,reversed:N,rows:P,rowSpan:P,sandbox:F,scope:null,scoped:N,seamless:N,selected:N,shadowRootClonable:N,shadowRootCustomElementRegistry:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shadowRootSerializable:N,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:Gr,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:Gr,width:P,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:F,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:Gr,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:N,disablePictureInPicture:N,disableRemotePlayback:N,exportParts:qr,part:F,prefix:null,property:null,results:P,security:null,unselectable:null},space:`html`,transform:ni}),ii=$r({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:Jr,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:F,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:qr,g2:qr,glyphName:qr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:Jr,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:F,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Jr,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Jr,rev:Jr,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Jr,requiredFeatures:Jr,requiredFonts:Jr,requiredFormats:Jr,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:Jr,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Jr,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Jr,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:ti}),ai=$r({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),oi=$r({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ni}),si=$r({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ci={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},li=/[A-Z]/g,ui=/-[a-z]/g,di=/^data[-\w.:]+$/i;function fi(e,t){let n=Vr(t),r=t,i=Hr;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&di.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(ui,mi);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ui.test(e)){let n=e.replace(li,pi);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Zr}return new i(r,t)}function pi(e){return`-`+e.toLowerCase()}function mi(e){return e.charAt(1).toUpperCase()}var hi=Br([ei,ri,ai,oi,si],`html`),gi=Br([ei,ii,ai,oi,si],`svg`);function _i(e){return e.join(` `).trim()}var vi=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),yi=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(vi());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),bi=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),xi=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(yi()),r=bi();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Si=wi(`end`),Ci=wi(`start`);function wi(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Ti(e){let t=Ci(e),n=Si(e);if(t&&n)return{start:t,end:n}}function Ei(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Oi(e.position):`start`in e||`end`in e?Oi(e):`line`in e||`column`in e?Di(e):``}function Di(e){return ki(e&&e.line)+`:`+ki(e&&e.column)}function Oi(e){return Di(e&&e.start)+`-`+Di(e&&e.end)}function ki(e){return e&&typeof e==`number`?e:1}var Ai=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Ei(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Ai.prototype.file=``,Ai.prototype.name=``,Ai.prototype.reason=``,Ai.prototype.message=``,Ai.prototype.stack=``,Ai.prototype.column=void 0,Ai.prototype.line=void 0,Ai.prototype.ancestors=void 0,Ai.prototype.cause=void 0,Ai.prototype.fatal=void 0,Ai.prototype.place=void 0,Ai.prototype.ruleId=void 0,Ai.prototype.source=void 0;var ji=l(xi(),1),Mi={}.hasOwnProperty,Ni=new Map,Pi=/[A-Z]/g,Fi=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Ii=new Set([`td`,`th`]),I=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function L(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=qi(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Ki(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?gi:hi,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Li(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Li(e,t,n){if(t.type===`element`)return Ri(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return zi(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Vi(e,t,n);if(t.type===`mdxjsEsm`)return Bi(e,t);if(t.type===`root`)return Hi(e,t,n);if(t.type===`text`)return Ui(e,t)}function Ri(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=gi,e.schema=i),e.ancestors.push(t);let a=$i(e,t.tagName,!1),o=Ji(e,t),s=Xi(e,t);return Fi.has(t.tagName)&&(s=s.filter(function(e){return typeof e!=`string`||!Lr(e)})),Wi(e,o,a,t),Gi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function zi(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ea(e,t.position)}function Bi(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ea(e,t.position)}function Vi(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=gi,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:$i(e,t.name,!0),o=Yi(e,t),s=Xi(e,t);return Wi(e,o,a,t),Gi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Hi(e,t,n){let r={};return Gi(r,Xi(e,t)),e.create(t,e.Fragment,r,n)}function Ui(e,t){return t.value}function Wi(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Gi(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Ki(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function qi(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Ci(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Ji(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Mi.call(t.properties,i)){let a=Zi(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Ii.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Yi(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else ea(e,t.position)}else{let i=r.name,a;if(r.value&&typeof r.value==`object`){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else ea(e,t.position)}else a=r.value===null||r.value;n[i]=a}return n}function Xi(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ni;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Li(e,a,o);s!==void 0&&n.push(s)}return n}function Zi(e,t,n){let r=fi(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?jr(n):_i(n)),r.property===`style`){let t=typeof n==`object`?n:Qi(e,String(n));return e.stylePropertyNameCase===`css`&&(t=ta(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?ci[r.property]||r.property:r.attribute,n]}}function Qi(e,t){try{return(0,ji.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Ai("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=I+`#cannot-parse-style-attribute`,r}}function $i(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Fr(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Fr(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Mi.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ea(e)}function ea(e,t){let n=new Ai("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=I+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function ta(e){let t={},n;for(n in e)Mi.call(e,n)&&(t[na(n)]=e[n]);return t}function na(e){let t=e.replace(Pi,ra);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function ra(e){return`-`+e.toLowerCase()}var ia={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},aa={};function oa(e,t){let n=t||aa;return sa(e,typeof n.includeImageAlt!=`boolean`||n.includeImageAlt,typeof n.includeHtml!=`boolean`||n.includeHtml)}function sa(e,t,n){if(la(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return ca(e.children,t,n)}return Array.isArray(e)?ca(e,t,n):``}function ca(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=sa(e[i],t,n);return r.join(``)}function la(e){return!!(e&&typeof e==`object`)}var ua=document.createElement(`i`);function da(e){let t=`&`+e+`;`;ua.innerHTML=t;let n=ua.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`?!1:n!==t&&n}function fa(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function pa(e,t){return e.length>0?(fa(e,e.length,0,t),e):t}var ma={}.hasOwnProperty;function ha(e){let t={},n=-1;for(;++n<e.length;)ga(t,e[n]);return t}function ga(e,t){let n;for(n in t){let r=(ma.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){ma.call(r,a)||(r[a]=[]);let e=i[a];_a(r[a],Array.isArray(e)?e:e?[e]:[])}}}function _a(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);fa(e,0,0,r)}function va(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function ya(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var ba=ka(/[A-Za-z]/),xa=ka(/[\dA-Za-z]/),Sa=ka(/[#-'*+\--9=?A-Z^-~]/);function Ca(e){return e!==null&&(e<32||e===127)}var wa=ka(/\d/),Ta=ka(/[\dA-Fa-f]/),Ea=ka(/[!-/:-@[-`{-~]/);function R(e){return e!==null&&e<-2}function z(e){return e!==null&&(e<0||e===32)}function B(e){return e===-2||e===-1||e===32}var Da=ka(/\p{P}|\p{S}/u),Oa=ka(/\s/);function ka(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Aa(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&xa(e.charCodeAt(n+1))&&xa(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function V(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return B(r)?(e.enter(n),s(r)):t(r)}function s(r){return B(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var ja={tokenize:Ma};function Ma(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),V(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return R(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Na={tokenize:Fa},Pa={tokenize:Ia};function Fa(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return fa(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!(!i.currentConstruct||i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Pa,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Pa,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return R(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;fa(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Ia(e,t,n){return V(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function La(e){if(e===null||z(e)||Oa(e))return 1;if(Da(e))return 2}function Ra(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var za={name:`attention`,resolveAll:Ba,tokenize:Va};function Ba(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Ha(d,-c),Ha(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=pa(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=pa(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=pa(l,Ra(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=pa(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=pa(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,fa(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Va(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=La(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=La(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Ha(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Ua={name:`autolink`,tokenize:Wa};function Wa(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return ba(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||xa(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||xa(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ca(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Sa(t)?(e.consume(t),l):n(t)}function u(e){return xa(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||xa(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var Ga={partial:!0,tokenize:Ka};function Ka(e,t,n){return r;function r(t){return B(t)?V(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||R(e)?t(e):n(e)}}var qa={continuation:{tokenize:Ya},exit:Xa,name:`blockQuote`,tokenize:Ja};function Ja(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return B(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Ya(e,t,n){let r=this;return i;function i(t){return B(t)?V(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(qa,t,n)(r)}}function Xa(e){e.exit(`blockQuote`)}var Za={name:`characterEscape`,tokenize:Qa};function Qa(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Ea(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var $a={name:`characterReference`,tokenize:eo};function eo(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=xa,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Ta,u):(e.enter(`characterReferenceValue`),a=7,o=wa,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===xa&&!da(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var to={partial:!0,tokenize:io},no={concrete:!0,name:`codeFenced`,tokenize:ro};function ro(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),B(t)?V(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||R(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(to,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||R(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):B(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),V(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||R(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||R(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&B(t)?V(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||R(t)?e.check(to,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||R(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),B(t)?V(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),B(t)?V(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||R(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function io(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var ao={name:`codeIndented`,tokenize:so},oo={partial:!0,tokenize:co};function so(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),V(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):R(t)?e.attempt(oo,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||R(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function co(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):V(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):R(e)?i(e):n(e)}}var lo={name:`codeText`,previous:H,resolve:uo,tokenize:U};function uo(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function H(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function U(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||R(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var fo=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&po(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),po(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),po(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0)){if(e<this.left.length){let t=this.left.splice(e,1/0);po(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);po(this.left,t.reverse())}}}};function po(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function mo(e){let t={},n=-1,r,i,a,o,s,c,l,u=new fo(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,ho(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(o[1].type!==`linePrefix`&&o[1].type!==`listItemIndent`)break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return fa(e,0,1/0,u.slice(0)),!l}function ho(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var go={resolve:vo,tokenize:yo},_o={partial:!0,tokenize:bo};function vo(e){return mo(e),e}function yo(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):R(t)?e.check(_o,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function bo(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),V(e,a,`linePrefix`)}function a(i){if(i===null||R(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function xo(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ca(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||R(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||z(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ca(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function So(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):R(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||R(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!B(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Co(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),V(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||R(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function wo(e,t){let n;return r;function r(i){return R(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):B(i)?V(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var To={name:`definition`,tokenize:Do},Eo={partial:!0,tokenize:Oo};function Do(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return So.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=ya(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return z(t)?wo(e,l)(t):l(t)}function l(t){return xo(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Eo,d,d)(t)}function d(t){return B(t)?V(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||R(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Oo(e,t,n){return r;function r(t){return z(t)?wo(e,i)(t):n(t)}function i(t){return Co(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return B(t)?V(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||R(e)?t(e):n(e)}}var ko={name:`hardBreakEscape`,tokenize:Ao};function Ao(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return R(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var jo={name:`headingAtx`,resolve:Mo,tokenize:No};function Mo(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},fa(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function No(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||z(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||R(n)?(e.exit(`atxHeading`),t(n)):B(n)?V(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||z(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Po=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Fo=[`pre`,`script`,`style`,`textarea`],Io={concrete:!0,name:`htmlFlow`,resolveTo:zo,tokenize:Bo},Lo={partial:!0,tokenize:Ho},Ro={partial:!0,tokenize:Vo};function zo(e){let t=e.length;for(;t--&&(e[t][0]!==`enter`||e[t][1].type!==`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Bo(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:k):ba(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):ba(a)?(e.consume(a),i=4,r.interrupt?t:k):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:k):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return ba(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||z(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Fo.includes(l)?(i=1,r.interrupt?t(s):D(s)):Po.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||xa(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return B(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||ba(t)?(e.consume(t),b):B(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||xa(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):B(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):B(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||R(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||z(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||B(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||R(t)?D(t):B(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),re):t===60&&i===1?(e.consume(t),ie):t===62&&i===4?(e.consume(t),A):t===63&&i===3?(e.consume(t),k):t===93&&i===5?(e.consume(t),oe):R(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Lo,se,O)(t)):t===null||R(t)?(e.exit(`htmlFlowData`),O(t)):(e.consume(t),D)}function O(t){return e.check(Ro,te,se)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||R(t)?O(t):(e.enter(`htmlFlowData`),D(t))}function re(t){return t===45?(e.consume(t),k):D(t)}function ie(t){return t===47?(e.consume(t),o=``,ae):D(t)}function ae(t){if(t===62){let n=o.toLowerCase();return Fo.includes(n)?(e.consume(t),A):D(t)}return ba(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),ae):D(t)}function oe(t){return t===93?(e.consume(t),k):D(t)}function k(t){return t===62?(e.consume(t),A):t===45&&i===2?(e.consume(t),k):D(t)}function A(t){return t===null||R(t)?(e.exit(`htmlFlowData`),se(t)):(e.consume(t),A)}function se(n){return e.exit(`htmlFlow`),t(n)}}function Vo(e,t,n){let r=this;return i;function i(t){return R(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Ho(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(Ga,t,n)}}var Uo={name:`htmlText`,tokenize:Wo};function Wo(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):ba(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):ba(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):R(t)?(o=d,ie(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?re(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):R(t)?(o=h,ie(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?re(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?re(t):R(t)?(o=v,ie(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):R(t)?(o=y,ie(t)):(e.consume(t),y)}function b(e){return e===62?re(e):y(e)}function x(t){return ba(t)?(e.consume(t),S):n(t)}function S(t){return t===45||xa(t)?(e.consume(t),S):C(t)}function C(t){return R(t)?(o=C,ie(t)):B(t)?(e.consume(t),C):re(t)}function w(t){return t===45||xa(t)?(e.consume(t),w):t===47||t===62||z(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),re):t===58||t===95||ba(t)?(e.consume(t),E):R(t)?(o=T,ie(t)):B(t)?(e.consume(t),T):re(t)}function E(t){return t===45||t===46||t===58||t===95||xa(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):R(t)?(o=ee,ie(t)):B(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,O):R(t)?(o=D,ie(t)):B(t)?(e.consume(t),D):(e.consume(t),te)}function O(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):R(t)?(o=O,ie(t)):(e.consume(t),O)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||z(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||z(e)?T(e):n(e)}function re(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function ie(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ae}function ae(t){return B(t)?V(e,oe,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):oe(t)}function oe(t){return e.enter(`htmlTextData`),o(t)}}var Go={name:`labelEnd`,resolveAll:Yo,resolveTo:Xo,tokenize:Zo},Ko={tokenize:Qo},qo={tokenize:$o},Jo={tokenize:es};function Yo(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&fa(e,0,e.length,n),e}function Xo(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=pa(s,e.slice(a+1,a+r+3)),s=pa(s,[[`enter`,u,t]]),s=pa(s,Ra(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=pa(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=pa(s,e.slice(o+1)),s=pa(s,[[`exit`,c,t]]),fa(e,a,e.length,s),e}function Zo(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(ya(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(Ko,u,o?u:d)(t):t===91?e.attempt(qo,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Jo,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function Qo(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return z(t)?wo(e,a)(t):a(t)}function a(t){return t===41?u(t):xo(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return z(t)?wo(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Co(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return z(t)?wo(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function $o(e,t,n){let r=this;return i;function i(t){return So.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(ya(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function es(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var ts={name:`labelStartImage`,resolveAll:Go.resolveAll,tokenize:ns};function ns(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var rs={name:`labelStartLink`,resolveAll:Go.resolveAll,tokenize:is};function is(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var as={name:`lineEnding`,tokenize:os};function os(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),V(e,t,`linePrefix`)}}var ss={name:`thematicBreak`,tokenize:cs};function cs(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||R(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),B(t)?V(e,s,`whitespace`)(t):s(t))}}var ls={continuation:{tokenize:ps},exit:hs,name:`list`,tokenize:fs},us={partial:!0,tokenize:gs},ds={partial:!0,tokenize:ms};function fs(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:wa(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(ss,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return wa(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(Ga,r.interrupt?n:u,e.attempt(us,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return B(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function ps(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Ga,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,V(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!B(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(ds,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,V(e,e.attempt(ls,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function ms(e,t,n){let r=this;return V(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function hs(e){e.exit(this.containerState.type)}function gs(e,t,n){let r=this;return V(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!B(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var _s={name:`setextUnderline`,resolveTo:vs,tokenize:ys};function vs(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function ys(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),B(t)?V(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||R(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var bs={tokenize:xs};function xs(e){let t=this,n=e.attempt(Ga,r,e.attempt(this.parser.constructs.flowInitial,i,V(e,e.attempt(this.parser.constructs.flow,i,e.attempt(go,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Ss={resolveAll:Es()},Cs=Ts(`string`),ws=Ts(`text`);function Ts(e){return{resolveAll:Es(e===`text`?Ds:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Es(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Ds(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Os=s({attentionMarkers:()=>Is,contentInitial:()=>As,disable:()=>Ls,document:()=>ks,flow:()=>Ms,flowInitial:()=>js,insideSpan:()=>Fs,string:()=>Ns,text:()=>Ps}),ks={42:ls,43:ls,45:ls,48:ls,49:ls,50:ls,51:ls,52:ls,53:ls,54:ls,55:ls,56:ls,57:ls,62:qa},As={91:To},js={[-2]:ao,[-1]:ao,32:ao},Ms={35:jo,42:ss,45:[_s,ss],60:Io,61:_s,95:ss,96:no,126:no},Ns={38:$a,92:Za},Ps={[-5]:as,[-4]:as,[-3]:as,33:ts,38:$a,42:za,60:[Ua,Uo],91:rs,92:[ko,Za],93:Go,95:za,96:lo},Fs={null:[za,Ss]},Is={null:[42,95]},Ls={null:[]};function Rs(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=pa(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Ra(a,l.events,l),l.events):[]}function f(e,t){return Bs(p(e),t)}function p(e){return zs(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){R(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&fa(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function zs(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Bs(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Vs(e){let t={constructs:ha([Os,...(e||{}).extensions||[]]),content:n(ja),defined:[],document:n(Na),flow:n(bs),lazy:{},string:n(Cs),text:n(ws)};return t;function n(e){return n;function n(n){return Rs(t,e,n)}}}function Hs(e){for(;!mo(e););return e}var Us=/[\0\t\n\r]/g;function Ws(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(Us.lastIndex=u,c=Us.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Gs=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ks(e){return e.replace(Gs,qs)}function qs(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return va(n.slice(t?2:1),t?16:10)}return da(n)||e}var Js={}.hasOwnProperty;function Ys(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),Xs(n)(Hs(Vs(n).document().write(Ws()(e,t,!0))))}function Xs(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Ce),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(ye),blockQuote:a(me),characterEscape:T,characterReference:T,codeFenced:a(he),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(he,o),codeText:a(ge,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(_e),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ve),hardBreakEscape:a(be),hardBreakTrailing:a(be),htmlFlow:a(xe,o),htmlFlowData:T,htmlText:a(xe,o),htmlTextData:T,image:a(Se),label:o,link:a(Ce),listItem:a(Te),listItemValue:f,listOrdered:a(we,d),listUnordered:a(we),paragraph:a(Ee),reference:ce,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ye),strong:a(De),thematicBreak:a(ke)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:pe,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:de,characterReference:j,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ne),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(O),htmlFlowData:E,htmlText:c(te),htmlTextData:E,image:c(ie),label:oe,labelText:ae,lineEnding:ee,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:le,resourceDestinationString:k,resourceTitleString:A,resource:se,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Qs(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Js.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||ec).call(a,void 0,e[0])}for(r.position={start:Zs(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Zs(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(t[1].type!==`linePrefix`&&t[1].type!==`blockQuotePrefix`&&t[1].type!==`blockQuotePrefixWhitespace`&&t[1].type!==`blockQuoteMarker`&&t[1].type!==`listItemIndent`)break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Zs(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||ec).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+Ei({start:e.start,end:e.end})+`): it’s not open`);n.position.end=Zs(e.end)}function u(){return oa(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=ya(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Oe(),n.position={start:Zs(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Zs(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Zs(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ie(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ae(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Ks(t),n.identifier=ya(t).toLowerCase()}function oe(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function k(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function se(){this.data.inReference=void 0}function ce(){this.data.referenceType=`collapsed`}function le(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=ya(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function ue(e){this.data.characterReferenceType=e.type}function de(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=va(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=da(t);let i=this.stack[this.stack.length-1];i.value+=r}function j(e){let t=this.stack.pop();t.position.end=Zs(e.end)}function fe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function pe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function me(){return{type:`blockquote`,children:[]}}function he(){return{type:`code`,lang:null,meta:null,value:``}}function ge(){return{type:`inlineCode`,value:``}}function _e(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ve(){return{type:`emphasis`,children:[]}}function ye(){return{type:`heading`,depth:0,children:[]}}function be(){return{type:`break`}}function xe(){return{type:`html`,value:``}}function Se(){return{type:`image`,title:null,url:``,alt:null}}function Ce(){return{type:`link`,title:null,url:``,children:[]}}function we(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Te(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Ee(){return{type:`paragraph`,children:[]}}function De(){return{type:`strong`,children:[]}}function Oe(){return{type:`text`,value:``}}function ke(){return{type:`thematicBreak`}}}function Zs(e){return{line:e.line,column:e.column,offset:e.offset}}function Qs(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Qs(e,r):$s(e,r)}}function $s(e,t){let n;for(n in t)if(Js.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function ec(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Ei({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ei({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Ei({start:t.start,end:t.end})+`) is still open`)}function tc(e){let t=this;t.parser=n;function n(n){return Ys(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function nc(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function rc(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function ic(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function ac(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oc(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function sc(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=Aa(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function cc(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lc(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function uc(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function dc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return uc(e,t);let i={src:Aa(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function fc(e,t){let n={src:Aa(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function pc(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function mc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return uc(e,t);let i={href:Aa(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function hc(e,t){let n={href:Aa(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function gc(e,t,n){let r=e.all(t),i=n?_c(n):vc(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function _c(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=vc(n[r])}return t}function vc(e){return e.spread??e.children.length>1}function yc(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function bc(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xc(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Sc(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Cc(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Ci(t.children[1]),o=Si(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function wc(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Tc(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Ec=9,Dc=32;function Oc(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(kc(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(kc(t.slice(i),i>0,!1)),a.join(``)}function kc(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Ec||t===Dc;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Ec||t===Dc;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Ac(e,t){let n={type:`text`,value:Oc(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function jc(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Mc={blockquote:nc,break:rc,code:ic,delete:ac,emphasis:oc,footnoteReference:sc,heading:cc,html:lc,imageReference:dc,image:fc,inlineCode:pc,linkReference:mc,link:hc,listItem:gc,list:yc,paragraph:bc,root:xc,strong:Sc,table:Cc,tableCell:Tc,tableRow:wc,text:Ac,thematicBreak:jc,toml:Nc,yaml:Nc,definition:Nc,footnoteDefinition:Nc};function Nc(){}var{defineProperty:Pc}=Object,Fc=typeof self==`object`?self:globalThis,Ic=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Fc[e](t)},Lc=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o){let i=r(t),a=r(n);i===`__proto__`?Pc(e,i,{value:a,configurable:!0,enumerable:!0,writable:!0}):e[i]=a}return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(typeof Fc[e]==`function`?Ic(e,t):Error(t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}case`-0`:return-0}return n(Ic(a,o),i)};return r},W=e=>Lc(new Map,e)(0),Rc=``,{toString:zc}={},{keys:Bc,is:Vc}=Object,Hc=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=zc.call(e).slice(8,-1);switch(n){case`Array`:return[1,Rc];case`Object`:return[2,Rc];case`Date`:return[3,Rc];case`RegExp`:return[4,Rc];case`Map`:return[5,Rc];case`Set`:return[6,Rc];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:e instanceof Error?[7,e.name||`Error`]:[2,n]},Uc=([e,t])=>e===0&&(t===`function`||t===`symbol`),Wc=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=o=>{if(n.has(o))return n.get(o);let[s,c]=Hc(o);switch(s){case 0:{let t=o;switch(c){case`bigint`:s=8,t=o.toString();break;case`number`:if(!o&&Vc(o,-0))return r.push([`-0`])-1;break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+c);t=null;break;case`undefined`:return i([-1],o)}return i([s,t],o)}case 1:{if(c){let e=o;return c===`DataView`?e=new Uint8Array(o.buffer):c===`ArrayBuffer`&&(e=new Uint8Array(o)),i([c,[...e]],o)}let e=[],t=i([s,e],o);for(let t of o)e.push(a(t));return t}case 2:{if(c)switch(c){case`BigInt`:return i([c,o.toString()],o);case`Boolean`:case`Number`:case`String`:return i([c,o.valueOf()],o)}if(t&&`toJSON`in o)return a(o.toJSON());let n=[],r=i([s,n],o);for(let t of Bc(o))(e||!Uc(Hc(o[t])))&&n.push([a(t),a(o[t])]);return r}case 3:return i([s,isNaN(o.getTime())?Rc:o.toISOString()],o);case 4:{let{source:e,flags:t}=o;return i([s,{source:e,flags:t}],o)}case 5:{let t=[],n=i([s,t],o);for(let[n,r]of o)(e||!(Uc(Hc(n))||Uc(Hc(r))))&&t.push([a(n),a(r)]);return n}case 6:{let t=[],n=i([s,t],o);for(let n of o)(e||!Uc(Hc(n)))&&t.push(a(n));return n}}let{message:l}=o;return i([s,{name:c,message:l}],o)};return a},Gc=(e,{json:t,lossy:n}={})=>{let r=[];return Wc(!(t||n),!!t,new Map,r)(e),r},Kc=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?W(Gc(e,t)):structuredClone(e):(e,t)=>W(Gc(e,t));function qc(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Jc(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Yc(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||qc,r=e.options.footnoteBackLabel||Jc,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=Aa(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Kc(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Xc=(function(e){if(e==null)return tl;if(typeof e==`function`)return el(e);if(typeof e==`object`)return Array.isArray(e)?Zc(e):Qc(e);if(typeof e==`string`)return $c(e);throw Error(`Expected function, string, or object as test`)});function Zc(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Xc(e[n]);return el(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Qc(e){let t=e;return el(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function $c(e){return el(t);function t(t){return t&&t.type===e}}function el(e){return t;function t(t,n,r){return!!(nl(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function tl(){return!0}function nl(e){return typeof e==`object`&&!!e&&`type`in e}function rl(e){return e}var il=[];function al(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Xc(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+rl(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=il,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=ol(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function ol(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?il:[e]}function sl(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),al(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var G={}.hasOwnProperty,cl={};function ll(e,t){let n=t||cl,r=new Map,i=new Map,a={all:s,applyData:dl,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Mc,...n.handlers},one:o,options:n,patch:ul,wrap:pl};return sl(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(G.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Kc(n);return r.children=a.all(e),r}return Kc(e)}return(a.options.unknownHandler||fl)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=ml(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=ml(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function ul(e,t){e.position&&(t.position=Ti(e))}function dl(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Kc(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function fl(e,t){let n=t.data||{},r=`value`in t&&!(G.call(n,`hProperties`)||G.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function pl(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function ml(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function hl(e,t){let n=ll(e,t),r=n.one(e,void 0),i=Yc(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function gl(e,t){return e&&`run`in e?async function(n,r){let i=hl(n,{file:r,...t});await e.run(i,r)}:function(n,r){return hl(n,{file:r,...e||t})}}function _l(e){if(e)throw e}var vl=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function yl(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function bl(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?xl(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function xl(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Sl={basename:Cl,dirname:wl,extname:Tl,join:El,sep:`/`};function Cl(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);kl(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function wl(e){if(kl(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Tl(e){kl(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function El(...e){let t=-1,n;for(;++t<e.length;)kl(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Dl(n)}function Dl(e){kl(e);let t=e.codePointAt(0)===47,n=Ol(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Ol(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(i!==o-1&&a!==1){if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1}i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function kl(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Al={cwd:jl};function jl(){return`/`}function Ml(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Nl(e){if(typeof e==`string`)e=new URL(e);else if(!Ml(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Pl(e)}function Pl(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Fl=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Il=class{constructor(e){let t;t=e?Ml(e)?{path:e}:typeof e==`string`||q(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Al.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Fl.length;){let e=Fl[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Fl.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Sl.basename(this.path):void 0}set basename(e){Rl(e,`basename`),Ll(e,`basename`),this.path=Sl.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Sl.dirname(this.path):void 0}set dirname(e){K(this.basename,`dirname`),this.path=Sl.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Sl.extname(this.path):void 0}set extname(e){if(Ll(e,`extname`),K(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Sl.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Ml(e)&&(e=Nl(e)),Rl(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Sl.basename(this.path,this.extname):void 0}set stem(e){Rl(e,`stem`),Ll(e,`stem`),this.path=Sl.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Ai(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Ll(e,t){if(e&&e.includes(Sl.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Sl.sep+"`")}function Rl(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function K(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function q(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var J=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),Y=l(vl(),1),X={}.hasOwnProperty,zl=new class e extends J{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=bl()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,Y.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Hl(`data`,this.frozen),this.namespace[e]=t,this):X.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Hl(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=Gl(e),n=this.parser||this.Parser;return Bl(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Bl(`process`,this.parser||this.Parser),Vl(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=Gl(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);ql(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Bl(`processSync`,this.parser||this.Parser),Vl(`processSync`,this.compiler||this.Compiler),this.process(e,r),Wl(`processSync`,`process`,t),n;function r(e,r){t=!0,_l(e),n=r}}run(e,t,n){Ul(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=Gl(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Wl(`runSync`,`run`,n),r;function i(e,t){_l(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=Gl(t),r=this.compiler||this.Compiler;return Vl(`stringify`,r),Ul(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Hl(`use`,this.frozen),e!=null){if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`")}return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`){if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e)}else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,Y.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null){if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];yl(o)&&yl(r)&&(r=(0,Y.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Bl(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function Vl(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Hl(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ul(e){if(!yl(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Wl(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function Gl(e){return Kl(e)?e:new Il(e)}function Kl(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function ql(e){return typeof e==`string`||Jl(e)}function Jl(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Yl=[],Xl={allowDangerousHtml:!0},Zl=/^(https?|ircs?|mailto|xmpp)$/i,Ql=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function $l(e){let t=eu(e),n=tu(e);return nu(t.runSync(t.parse(n),n),e)}function eu(e){let t=e.rehypePlugins||Yl,n=e.remarkPlugins||Yl,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Xl}:Xl;return zl().use(tc).use(n).use(gl,r).use(t)}function tu(e){let t=e.children||``,n=new Il;return typeof t==`string`?n.value=t:``+t,n}function nu(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||ru;for(let e of Ql)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return sl(e,l),L(e,{Fragment:M.Fragment,components:i,ignoreInvalidStyle:!0,jsx:M.jsx,jsxs:M.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in ia)if(Object.hasOwn(ia,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=ia[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function ru(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Zl.test(e.slice(0,t))?e:``}function iu(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function au(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function ou(e,t,n){let r=Xc((n||{}).ignore||[]),i=su(t),a=-1;for(;++a<i.length;)al(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function su(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([cu(e[0]),lu(e[1])])}return t}function cu(e){return typeof e==`string`?new RegExp(au(e),`g`):e}function lu(e){return typeof e==`function`?e:function(){return e}}var uu=`phrasing`,du=[`autolink`,`link`,`image`,`label`];function fu(){return{transforms:[bu],enter:{literalAutolink:mu,literalAutolinkEmail:hu,literalAutolinkHttp:hu,literalAutolinkWww:hu},exit:{literalAutolink:yu,literalAutolinkEmail:vu,literalAutolinkHttp:gu,literalAutolinkWww:_u}}}function pu(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:uu,notInConstruct:du},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:uu,notInConstruct:du},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:uu,notInConstruct:du}]}}function mu(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function hu(e){this.config.enter.autolinkProtocol.call(this,e)}function gu(e){this.config.exit.autolinkProtocol.call(this,e)}function _u(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function vu(e){this.config.exit.autolinkEmail.call(this,e)}function yu(e){this.exit(e)}function bu(e){ou(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,xu],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Su]],{ignore:[`link`,`linkReference`]})}function xu(e,t,n,r,i){let a=``;if(!Tu(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Cu(n)))return!1;let o=wu(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Su(e,t,n,r){return!Tu(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Cu(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function wu(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=iu(e,`(`),a=iu(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Tu(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Oa(n)||Da(n))&&(!t||n!==47)}Fu.peek=Pu;function Eu(){this.buffer()}function Du(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function Ou(){this.buffer()}function ku(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Au(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ya(this.sliceSerialize(e)).toLowerCase(),n.label=t}function ju(e){this.exit(e)}function Mu(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ya(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Nu(e){this.exit(e)}function Pu(){return`[`}function Fu(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function Iu(){return{enter:{gfmFootnoteCallString:Eu,gfmFootnoteCall:Du,gfmFootnoteDefinitionLabelString:Ou,gfmFootnoteDefinition:ku},exit:{gfmFootnoteCallString:Au,gfmFootnoteCall:ju,gfmFootnoteDefinitionLabelString:Mu,gfmFootnoteDefinition:Nu}}}function Lu(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Fu},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?zu:Ru))),s(),o}}function Ru(e,t,n){return t===0?e:zu(e,t,n)}function zu(e,t,n){return(n?``:`    `)+e}var Bu=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Z.peek=Gu;function Vu(){return{canContainEols:[`delete`],enter:{strikethrough:Uu},exit:{strikethrough:Wu}}}function Hu(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:Bu}],handlers:{delete:Z}}}function Uu(e){this.enter({type:`delete`,children:[]},e)}function Wu(e){this.exit(e)}function Z(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function Gu(){return`~`}function Ku(e){return e.length}function qu(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Ku,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=Ju(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Yu(r[d]);else{let e=Yu(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&(n.alignDelimiters!==!1||i!==``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function Ju(e){return e==null?``:String(e)}function Yu(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Xu(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Zu);return i(),o}function Zu(e,t,n){return`>`+(n?``:` `)+e}function Qu(e,t){return $u(e,t.inConstruct,!0)&&!$u(e,t.notInConstruct,!1)}function $u(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ed(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Qu(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function td(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function nd(e,t){return!(t.options.fences!==!1||!e.value||e.lang||!/[^ \r\n]/.test(e.value)||/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function rd(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function id(e,t,n,r){let i=rd(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(nd(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,ad);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(td(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function ad(e,t,n){return(n?``:`    `)+e}function od(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function sd(e,t,n,r){let i=od(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function cd(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ld(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function ud(e,t,n){let r=La(e),i=La(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}dd.peek=fd;function dd(e,t,n,r){let i=cd(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=ud(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ld(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=ud(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ld(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function fd(e,t,n){return n.options.emphasis||`*`}function pd(e,t){let n=!1;return sl(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&oa(e)&&(t.options.setext||n))}function md(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(pd(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=ld(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}hd.peek=gd;function hd(e){return e.value||``}function gd(){return`<`}_d.peek=vd;function _d(e,t,n,r){let i=od(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function vd(){return`!`}yd.peek=Q;function yd(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Q(){return`!`}bd.peek=xd;function bd(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function xd(){return"`"}function Sd(e,t){let n=oa(e);return!(t.options.resourceLink||!e.url||e.title||!e.children||e.children.length!==1||e.children[0].type!==`text`||n!==e.url&&`mailto:`+n!==e.url||!/^[a-z][a-z+.-]+:/i.test(e.url)||/[\0- <>\u007F]/.test(e.url))}Cd.peek=wd;function Cd(e,t,n,r){let i=od(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Sd(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function wd(e,t,n){return Sd(e,n)?`<`:`[`}Td.peek=Ed;function Td(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Ed(){return`[`}function Dd(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Od(e){let t=Dd(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function kd(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Ad(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function jd(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?kd(n):Dd(n),s=e.ordered?o===`.`?`)`:`.`:Od(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Ad(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function Md(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function $(e,t,n,r){let i=Md(n),a=n.bulletCurrent||Dd(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function Nd(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var Pd=Xc([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function Fd(e,t,n,r){return(e.children.some(function(e){return Pd(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Id(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Ld.peek=Rd;function Ld(e,t,n,r){let i=Id(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=ud(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ld(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=ud(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ld(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Rd(e,t,n){return n.options.strong||`*`}function zd(e,t,n,r){return n.safe(e.value,r)}function Bd(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Vd(e,t,n){let r=(Ad(n)+(n.options.ruleSpaces?` `:``)).repeat(Bd(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Hd={blockquote:Xu,break:ed,code:id,definition:sd,emphasis:dd,hardBreak:ed,heading:md,html:hd,image:_d,imageReference:yd,inlineCode:bd,link:Cd,linkReference:Td,list:jd,listItem:$,paragraph:Nd,root:Fd,strong:Ld,text:zd,thematicBreak:Vd};function Ud(){return{enter:{table:Wd,tableData:Jd,tableHeader:Jd,tableRow:Kd},exit:{codeText:Yd,table:Gd,tableData:qd,tableHeader:qd,tableRow:qd}}}function Wd(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function Gd(e){this.exit(e),this.data.inTable=void 0}function Kd(e){this.enter({type:`tableRow`,children:[]},e)}function qd(e){this.exit(e)}function Jd(e){this.enter({type:`tableCell`,children:[]},e)}function Yd(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Xd));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Xd(e,t){return t===`|`?t:e}function Zd(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return qu(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Hd.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function Qd(){return{exit:{taskListCheckValueChecked:ef,taskListCheckValueUnchecked:ef,paragraph:tf}}}function $d(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:nf}}}function ef(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function tf(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function nf(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Hd.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function rf(){return[fu(),Iu(),Vu(),Ud(),Qd()]}function af(e){return{extensions:[pu(),Lu(e),Hu(),Zd(e),$d()]}}var of={tokenize:bf,partial:!0},sf={tokenize:xf,partial:!0},cf={tokenize:Sf,partial:!0},lf={tokenize:Cf,partial:!0},uf={tokenize:wf,partial:!0},df={name:`wwwAutolink`,tokenize:vf,previous:Tf},ff={name:`protocolAutolink`,tokenize:yf,previous:Ef},pf={name:`emailAutolink`,tokenize:_f,previous:Df},mf={};function hf(){return{text:mf}}for(var gf=48;gf<123;)mf[gf]=pf,gf++,gf===58?gf=65:gf===91&&(gf=97);mf[43]=pf,mf[45]=pf,mf[46]=pf,mf[95]=pf,mf[72]=[pf,ff],mf[104]=[pf,ff],mf[87]=[pf,df],mf[119]=[pf,df];function _f(e,t,n){let r=this,i,a;return o;function o(t){return!Of(t)||!Df.call(r,r.previous)||kf(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Of(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(uf,u,l)(t):t===45||t===95||xa(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&ba(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function vf(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Tf.call(r,r.previous)||kf(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(of,e.attempt(sf,e.attempt(cf,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function yf(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&Ef.call(r,r.previous)&&!kf(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(ba(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Ca(t)||z(t)||Oa(t)||Da(t)?n(t):e.attempt(sf,e.attempt(cf,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function bf(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function xf(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(lf,c,s)(t):t===null||z(t)||Oa(t)||t!==45&&Da(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Sf(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(lf,t,a)(o):o===null||z(o)||Oa(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Cf(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||z(o)||Oa(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||z(e)||Oa(e)?t(e):r(e)}function a(e){return ba(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):ba(t)?(e.consume(t),o):n(t)}}function wf(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return xa(e)?n(e):t(e)}}function Tf(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||z(e)}function Ef(e){return!ba(e)}function Df(e){return!(e===47||Of(e))}function Of(e){return e===43||e===45||e===46||e===95||xa(e)}function kf(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Af={tokenize:Rf,partial:!0};function jf(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:Ff,continuation:{tokenize:If},exit:Lf}},text:{91:{name:`gfmFootnoteCall`,tokenize:Pf},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Mf,resolveTo:Nf}}}}function Mf(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=ya(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function Nf(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function Pf(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||z(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(ya(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return z(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function Ff(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||z(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=ya(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return z(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),V(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function If(e,t,n){return e.check(Ga,t,e.attempt(Af,t,n))}function Lf(e){e.exit(`gfmFootnoteDefinition`)}function Rf(e,t,n){let r=this;return V(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function zf(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&fa(o,o.length,0,Ra(s,e.slice(r+1,n),t)),fa(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),fa(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=La(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=La(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Bf=class{constructor(){this.map=[]}add(e,t,n){Vf(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function Vf(e,t,n,r){let i=0;if(n!==0||r.length!==0){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function Hf(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Uf(){return{flow:{null:{name:`table`,tokenize:Wf,resolveAll:Gf}}}}function Wf(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):R(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):B(t)?V(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||z(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,B(t)?V(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return B(t)?V(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||R(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return B(t)?V(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||R(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||R(n)?(e.exit(`tableRow`),t(n)):B(n)?V(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||z(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function Gf(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Bf;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(qf(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Kf(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Kf(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Kf(f,t,o,i,n,d)):(o[0]=o[1],d=Kf(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&qf(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Hf(t.events,n))}return e}function Kf(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Jf(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Jf(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Jf(t.events,n[2]),a=Jf(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Jf(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function qf(e,t,n,r,i){let a=[],o=Jf(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Jf(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Yf={name:`tasklistCheck`,tokenize:Zf};function Xf(){return{text:{91:Yf}}}function Zf(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return z(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return R(r)?t(r):B(r)?e.check({tokenize:Qf},t,n)(r):n(r)}}function Qf(e,t,n){return V(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function $f(e){return ha([hf(),jf(),zf(e),Uf(),Xf()])}var ep={};function tp(e){let t=this,n=e||ep,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push($f(n)),a.push(rf()),o.push(af(n))}function np(e){return e.replace(/<p align="center">\s*<img src="(?:assets\/)?([^"]+)"[^>]*>\s*<\/p>\n*/g,(e,t)=>`\n\n![Gofreight](${vr(t.replace(/^assets\//,``))})\n\n`).replace(/<h1 align="center">([\s\S]*?)<\/h1>\n*/g,`# $1

`).replace(/<p align="center">\s*([\s\S]*?)\s*<\/p>\n*/g,(e,t)=>`${t.trim()}\n\n`).replace(/!\[[^\]]*\]\(assets\/([^)]+)\)/g,(e,t)=>`![Gofreight](${vr(t)})`).replace(/!\[[^\]]*\]\(\/([^)]+)\)/g,(e,t)=>`![Gofreight](${vr(t)})`).replace(/\]\(\.\.\/README\.md\)/g,`](https://github.com/lsgser/gofreight)`).replace(/\]\(([^)]+\.md)\)/g,(e,t)=>`](/docs/${t.replace(/^.*\//,``).replace(`.md`,``)})`)}function rp({content:e}){let t=np(e),n=(0,S.useRef)(!1);return(0,M.jsx)($l,{remarkPlugins:[tp],components:{h1:({children:e})=>(0,M.jsx)(`h1`,{className:`doc-h1`,children:e}),h2:({children:e})=>(0,M.jsx)(`h2`,{className:`doc-h2`,children:e}),h3:({children:e})=>(0,M.jsx)(`h3`,{className:`doc-h3`,children:e}),p:({children:e})=>(0,M.jsx)(`p`,{className:`doc-p`,children:e}),img:({src:e,alt:t})=>{let r=!n.current;n.current=!0;let i=typeof e==`string`&&e.startsWith(`/`)?vr(e.slice(1)):e,a=typeof i==`string`&&i.includes(`logo`);return(0,M.jsx)(`img`,{src:i,alt:t??`Gofreight`,className:r?a?`doc-brand-logo`:`doc-brand-icon`:`doc-inline-img`,loading:`lazy`})},ul:({children:e})=>(0,M.jsx)(`ul`,{className:`doc-ul`,children:e}),ol:({children:e})=>(0,M.jsx)(`ol`,{className:`doc-ol`,children:e}),li:({children:e})=>(0,M.jsx)(`li`,{className:`doc-li`,children:e}),a:({href:e,children:t})=>(0,M.jsx)(`a`,{href:e,className:`doc-link`,target:e?.startsWith(`http`)?`_blank`:void 0,rel:`noreferrer`,children:t}),code:({className:e,children:t})=>e?.includes(`language-`)?(0,M.jsx)(`pre`,{className:`doc-pre`,children:(0,M.jsx)(`code`,{className:e,children:t})}):(0,M.jsx)(`code`,{className:`doc-code`,children:t}),pre:({children:e})=>(0,M.jsx)(M.Fragment,{children:e}),table:({children:e})=>(0,M.jsx)(`div`,{className:`doc-table-wrap`,children:(0,M.jsx)(`table`,{className:`doc-table`,children:e})}),blockquote:({children:e})=>(0,M.jsx)(`blockquote`,{className:`doc-quote`,children:e}),hr:()=>(0,M.jsx)(`hr`,{className:`doc-hr`})},children:t})}function ip(){let{slug:e=``}=wt(),t=nr(e);return t?(0,M.jsxs)(`article`,{className:`doc-article`,children:[(0,M.jsx)(rp,{content:t}),(0,M.jsx)(`footer`,{className:`doc-article-footer`,children:(0,M.jsxs)(`p`,{children:[`Edit this page on`,` `,(0,M.jsx)(`a`,{href:`https://github.com/lsgser/gofreight/blob/main/docs/${e}.md`,target:`_blank`,rel:`noreferrer`,children:`GitHub`})]})})]}):(0,M.jsxs)(`div`,{className:`doc-not-found`,children:[(0,M.jsx)(`h1`,{children:`Page not found`}),(0,M.jsxs)(`p`,{children:[`The documentation page `,(0,M.jsx)(`code`,{children:e}),` does not exist.`]}),(0,M.jsx)(In,{to:`/docs`,children:`Back to documentation`})]})}function ap(){return(0,M.jsxs)(`div`,{className:`docs-index`,children:[(0,M.jsx)(`h1`,{children:`Documentation`}),(0,M.jsx)(`p`,{className:`docs-index-lead`,children:`Learn how to build applications with Gofreight — step-by-step tutorials, guides, references, and examples for every layer of the framework.`}),Xn.map(e=>(0,M.jsxs)(`section`,{className:`docs-index-section`,children:[(0,M.jsx)(`h2`,{children:e.title}),(0,M.jsx)(`div`,{className:`docs-index-grid`,children:e.items.map(e=>(0,M.jsxs)(In,{to:`/docs/${e.slug}`,className:`docs-index-card`,children:[(0,M.jsx)(`h3`,{children:e.title}),e.description&&(0,M.jsx)(`p`,{children:e.description})]},e.slug))})]},e.title))]})}var op=[{title:`Route Groups`,description:`Prefix, middleware, and nested groups for clean API versioning — without facades.`,icon:`⇢`},{title:`ORM & Migrations`,description:`Type-safe models, chainable queries, associations, and a migration runner built for Go.`,icon:`◫`},{title:`Gofreight Templates`,description:`Native .gft views with layouts, slots, form components, and CSRF helpers.`,icon:`◇`},{title:`CLI & Generators`,description:`Scaffold resources, run migrations, seed databases, and ship features from the terminal.`,icon:`⌘`},{title:`Auth & JWT`,description:`Session login, JWT for APIs, opaque tokens, policies, and role middleware.`,icon:`⛨`},{title:`GraphQL`,description:`Modular GraphQL with DataLoader, GraphiQL playground, depth and rate limits.`,icon:`◈`},{title:`Real-time WebSockets`,description:`Socket.io-style rooms and events with a TypeScript client — live chat and broadcasts.`,icon:`⚡`},{title:`Single Binary`,description:`Compile your entire web application — server, templates, assets — into one Go binary.`,icon:`▣`}],sp=[`Go-first — stdlib HTTP, explicit types, go mod`,`Batteries included — routing, ORM, views, CLI, queues, auth`,`Convention over configuration — predictable folders and generators`,`Vendor-neutral — bring your own payment, CRM, and analytics drivers`],cp=`# Install the CLI
go install github.com/lsgser/gofreight/cmd/gofreight@latest

# Create an app
gofreight new myapp
cd myapp
go mod tidy
gofreight key:generate
gofreight db:create
gofreight migrate
gofreight serve`;function lp(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`section`,{className:`hero`,children:(0,M.jsxs)(`div`,{className:`container hero-grid`,children:[(0,M.jsxs)(`div`,{className:`hero-copy`,children:[(0,M.jsx)(`p`,{className:`hero-eyebrow`,children:`Web framework for Go`}),(0,M.jsxs)(`h1`,{children:[`Build web apps with`,(0,M.jsx)(`span`,{className:`hero-accent`,children:` confidence`})]}),(0,M.jsx)(`p`,{className:`hero-lead`,children:`Gofreight is a batteries-included framework for Go — routing, ORM, templates, migrations, CLI, jobs, auth, and tests. Compile everything into a single binary.`}),(0,M.jsxs)(`div`,{className:`hero-actions`,children:[(0,M.jsx)(In,{to:`/docs/tutorial-first-app`,className:`btn btn-primary`,children:`Start the tutorial`}),(0,M.jsx)(`a`,{href:`https://github.com/lsgser/gofreight`,className:`btn btn-secondary`,target:`_blank`,rel:`noreferrer`,children:`View on GitHub`})]})]}),(0,M.jsxs)(`div`,{className:`hero-visual`,children:[(0,M.jsx)(`img`,{src:vr(`gofreight-logo.png`),alt:`Gofreight`,className:`hero-logo`}),(0,M.jsxs)(`div`,{className:`terminal`,children:[(0,M.jsxs)(`div`,{className:`terminal-bar`,children:[(0,M.jsx)(`span`,{}),(0,M.jsx)(`span`,{}),(0,M.jsx)(`span`,{}),(0,M.jsx)(`p`,{children:`terminal`})]}),(0,M.jsx)(`pre`,{children:cp})]})]})]})}),(0,M.jsx)(`section`,{className:`section philosophy`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`Go-first. Productive by design.`}),(0,M.jsx)(`p`,{children:`Gofreight favors convention over configuration — predictable folders, generators, and a full web stack — while staying idiomatic Go with stdlib HTTP and explicit wiring.`})]}),(0,M.jsx)(`ul`,{className:`philosophy-list`,children:sp.map(e=>(0,M.jsx)(`li`,{children:e},e))})]})}),(0,M.jsx)(`section`,{className:`section features`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`Everything you need`}),(0,M.jsx)(`p`,{children:`A complete toolkit for modern Go web development — from first route to production deploy.`})]}),(0,M.jsx)(`div`,{className:`feature-grid`,children:op.map(e=>(0,M.jsxs)(`article`,{className:`feature-card`,children:[(0,M.jsx)(`div`,{className:`feature-icon`,children:e.icon}),(0,M.jsx)(`h3`,{children:e.title}),(0,M.jsx)(`p`,{children:e.description})]},e.title))})]})}),(0,M.jsx)(`section`,{className:`section tutorials-preview`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`Step-by-step tutorials`}),(0,M.jsx)(`p`,{children:`Learn Gofreight by building real features — from scaffolding your first app to shipping a secured REST API.`})]}),(0,M.jsx)(`div`,{className:`tutorials-grid`,children:Qn.map((e,t)=>(0,M.jsxs)(In,{to:`/docs/${e.slug}`,className:`tutorial-card`,children:[(0,M.jsxs)(`span`,{className:`tutorial-step`,children:[`Tutorial `,t+1]}),(0,M.jsx)(`h3`,{children:e.title}),e.description&&(0,M.jsx)(`p`,{children:e.description}),(0,M.jsx)(`span`,{className:`tutorial-link`,children:`Read tutorial →`})]},e.slug))})]})}),(0,M.jsx)(`section`,{className:`section docs-preview`,children:(0,M.jsxs)(`div`,{className:`container`,children:[(0,M.jsxs)(`div`,{className:`section-header`,children:[(0,M.jsx)(`h2`,{children:`Documentation`}),(0,M.jsx)(`p`,{children:`Guides for every part of the framework — from CLI commands to deployment.`})]}),(0,M.jsx)(`div`,{className:`docs-preview-grid`,children:Yn.map(e=>(0,M.jsxs)(`div`,{className:`docs-preview-card`,children:[(0,M.jsx)(`h3`,{children:e.title}),(0,M.jsx)(`ul`,{children:e.items.slice(0,4).map(e=>(0,M.jsxs)(`li`,{children:[(0,M.jsx)(In,{to:`/docs/${e.slug}`,children:e.title}),e.description&&(0,M.jsx)(`span`,{children:e.description})]},e.slug))})]},e.title))}),(0,M.jsx)(`div`,{className:`center-cta`,children:(0,M.jsx)(In,{to:`/docs`,className:`btn btn-primary`,children:`Browse all docs`})})]})}),(0,M.jsx)(`section`,{className:`cta-banner`,children:(0,M.jsxs)(`div`,{className:`container cta-banner-inner`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h2`,{children:`Ready to ship?`}),(0,M.jsx)(`p`,{children:`Install the CLI, scaffold your first resource, and run the dev server in minutes.`})]}),(0,M.jsx)(In,{to:`/docs/tutorial-first-app`,className:`btn btn-light`,children:`Start building →`})]})})]})}function up(){return(0,M.jsx)(Fn,{basename:yr,children:(0,M.jsx)(Xt,{children:(0,M.jsxs)(Jt,{element:(0,M.jsx)(Ar,{}),children:[(0,M.jsx)(Jt,{index:!0,element:(0,M.jsx)(lp,{})}),(0,M.jsxs)(Jt,{path:`docs`,element:(0,M.jsx)(gr,{}),children:[(0,M.jsx)(Jt,{index:!0,element:(0,M.jsx)(ap,{})}),(0,M.jsx)(Jt,{path:`:slug`,element:(0,M.jsx)(ip,{})})]}),(0,M.jsx)(Jt,{path:`*`,element:(0,M.jsx)(Kt,{to:`/`,replace:!0})})]})})})}(0,qn.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(S.StrictMode,{children:(0,M.jsx)(Er,{children:(0,M.jsx)(up,{})})}));