(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function u0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var em={exports:{}},wl={},tm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),d0=Symbol.for("react.portal"),f0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),g0=Symbol.for("react.context"),x0=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),_0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),pf=Symbol.iterator;function S0(t){return t===null||typeof t!="object"?null:(t=pf&&t[pf]||t["@@iterator"],typeof t=="function"?t:null)}var nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},im=Object.assign,rm={};function bs(t,e,n){this.props=t,this.context=e,this.refs=rm,this.updater=n||nm}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sm(){}sm.prototype=bs.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=rm,this.updater=n||nm}var od=sd.prototype=new sm;od.constructor=sd;im(od,bs.prototype);od.isPureReactComponent=!0;var mf=Array.isArray,om=Object.prototype.hasOwnProperty,ad={current:null},am={key:!0,ref:!0,__self:!0,__source:!0};function lm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)om.call(e,i)&&!am.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Io,type:t,key:s,ref:o,props:r,_owner:ad.current}}function E0(t,e){return{$$typeof:Io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Io}function M0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gf=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M0(""+t.key):e.toString(36)}function Ia(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Io:case d0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+$l(o,0):i,mf(r)?(n="",t!=null&&(n=t.replace(gf,"$&/")+"/"),Ia(r,e,n,"",function(u){return u})):r!=null&&(ld(r)&&(r=E0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+$l(s,a);o+=Ia(s,e,n,l,r)}else if(l=S0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+$l(s,a++),o+=Ia(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var i=[],r=0;return Ia(t,i,"","",function(s){return e.call(n,s,r++)}),i}function w0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Ua={transition:null},A0={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:ad};function cm(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=bs;Ge.Fragment=f0;Ge.Profiler=p0;Ge.PureComponent=sd;Ge.StrictMode=h0;Ge.Suspense=v0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;Ge.act=cm;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=im({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ad.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)om.call(e,l)&&!am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Io,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:g0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:m0,_context:t},t.Consumer=t};Ge.createElement=lm;Ge.createFactory=function(t){var e=lm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:x0,render:t}};Ge.isValidElement=ld;Ge.lazy=function(t){return{$$typeof:y0,_payload:{_status:-1,_result:t},_init:w0}};Ge.memo=function(t,e){return{$$typeof:_0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};Ge.unstable_act=cm;Ge.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ge.useContext=function(t){return Yt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ge.useId=function(){return Yt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Yt.current.useRef(t)};Ge.useState=function(t){return Yt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Yt.current.useTransition()};Ge.version="18.3.1";tm.exports=Ge;var J=tm.exports;const b0=u0(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=J,C0=Symbol.for("react.element"),R0=Symbol.for("react.fragment"),N0=Object.prototype.hasOwnProperty,P0=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function um(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)N0.call(e,i)&&!L0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:C0,type:t,key:s,ref:o,props:r,_owner:P0.current}}wl.Fragment=R0;wl.jsx=um;wl.jsxs=um;em.exports=wl;var c=em.exports,nu={},dm={exports:{}},fn={},fm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var $=L.length;L.push(q);e:for(;0<$;){var G=$-1>>>1,fe=L[G];if(0<r(fe,q))L[G]=q,L[$]=fe,$=G;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],$=L.pop();if($!==q){L[0]=$;e:for(var G=0,fe=L.length,ve=fe>>>1;G<ve;){var H=2*(G+1)-1,te=L[H],le=H+1,oe=L[le];if(0>r(te,$))le<fe&&0>r(oe,te)?(L[G]=oe,L[le]=$,G=le):(L[G]=te,L[H]=$,G=H);else if(le<fe&&0>r(oe,$))L[G]=oe,L[le]=$,G=le;else break e}}return q}function r(L,q){var $=L.sortIndex-q.sortIndex;return $!==0?$:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,p=3,m=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=L)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function E(L){if(y=!1,x(L),!_)if(n(l)!==null)_=!0,K(C);else{var q=n(u);q!==null&&ee(E,q.startTime-L)}}function C(L,q){_=!1,y&&(y=!1,d(P),P=-1),m=!0;var $=p;try{for(x(q),h=n(l);h!==null&&(!(h.expirationTime>q)||L&&!I());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var fe=G(h.expirationTime<=q);q=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),x(q)}else i(l);h=n(l)}if(h!==null)var ve=!0;else{var H=n(u);H!==null&&ee(E,H.startTime-q),ve=!1}return ve}finally{h=null,p=$,m=!1}}var T=!1,b=null,P=-1,M=5,S=-1;function I(){return!(t.unstable_now()-S<M)}function F(){if(b!==null){var L=t.unstable_now();S=L;var q=!0;try{q=b(!0,L)}finally{q?N():(T=!1,b=null)}}else T=!1}var N;if(typeof v=="function")N=function(){v(F)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,V=j.port2;j.port1.onmessage=F,N=function(){V.postMessage(null)}}else N=function(){g(F,0)};function K(L){b=L,T||(T=!0,N())}function ee(L,q){P=g(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,K(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var $=p;p=q;try{return L()}finally{p=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=p;p=L;try{return q()}finally{p=$}},t.unstable_scheduleCallback=function(L,q,$){var G=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?G+$:G):$=G,L){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=$+fe,L={id:f++,callback:q,priorityLevel:L,startTime:$,expirationTime:fe,sortIndex:-1},$>G?(L.sortIndex=$,e(u,L),n(l)===null&&L===n(u)&&(y?(d(P),P=-1):y=!0,ee(E,$-G))):(L.sortIndex=fe,e(l,L),_||m||(_=!0,K(C))),L},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(L){var q=p;return function(){var $=p;p=q;try{return L.apply(this,arguments)}finally{p=$}}}})(hm);fm.exports=hm;var D0=fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=J,dn=D0;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pm=new Set,po={};function Er(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(po[t]=e,t=0;t<e.length;t++)pm.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},vf={};function F0(t){return iu.call(vf,t)?!0:iu.call(xf,t)?!1:U0.test(t)?vf[t]=!0:(xf[t]=!0,!1)}function O0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k0(t,e,n,i){if(e===null||typeof e>"u"||O0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cd,ud);It[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cd,ud);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cd,ud);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k0(e,n,r,i)&&(n=null),i||r===null?F0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),mm=Symbol.for("react.provider"),gm=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),xm=Symbol.for("react.offscreen"),_f=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Yl;function Zs(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function B0(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case ru:return"Profiler";case fd:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gm:return(t.displayName||"Context")+".Consumer";case mm:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}function z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(e);case 8:return e===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j0(t){var e=vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=j0(t))}function _m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ym(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function cu(t,e){ym(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ef(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Qs(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function Sm(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,Mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H0=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){H0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Am(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var V0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(V0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,os=null,as=null;function wf(t){if(t=Oo(t)){if(typeof gu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Rl(e),gu(t.stateNode,t.type,e))}}function bm(t){os?as?as.push(t):as=[t]:os=t}function Tm(){if(os){var t=os,e=as;if(as=os=null,wf(t),e)for(t=0;t<e.length;t++)wf(e[t])}}function Cm(t,e){return t(e)}function Rm(){}var Ql=!1;function Nm(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Cm(t,e,n)}finally{Ql=!1,(os!==null||as!==null)&&(Rm(),Tm())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var i=Rl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var xu=!1;if(ci)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{xu=!1}function G0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var io=!1,$a=null,Ya=!1,vu=null,W0={onError:function(t){io=!0,$a=t}};function X0(t,e,n,i,r,s,o,a,l){io=!1,$a=null,G0.apply(W0,arguments)}function q0(t,e,n,i,r,s,o,a,l){if(X0.apply(this,arguments),io){if(io){var u=$a;io=!1,$a=null}else throw Error(ae(198));Ya||(Ya=!0,vu=u)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Af(t){if(Mr(t)!==t)throw Error(ae(188))}function $0(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Af(r),t;if(s===i)return Af(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Lm(t){return t=$0(t),t!==null?Dm(t):null}function Dm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dm(t);if(e!==null)return e;t=t.sibling}return null}var Im=dn.unstable_scheduleCallback,bf=dn.unstable_cancelCallback,Y0=dn.unstable_shouldYield,K0=dn.unstable_requestPaint,xt=dn.unstable_now,Z0=dn.unstable_getCurrentPriorityLevel,gd=dn.unstable_ImmediatePriority,Um=dn.unstable_UserBlockingPriority,Ka=dn.unstable_NormalPriority,Q0=dn.unstable_LowPriority,Fm=dn.unstable_IdlePriority,Al=null,Wn=null;function J0(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:nv,ev=Math.log,tv=Math.LN2;function nv(t){return t>>>=0,t===0?32:31-(ev(t)/tv|0)|0}var Ko=64,Zo=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Js(a):(s&=o,s!==0&&(i=Js(s)))}else o=n&~r,o!==0?i=Js(o):s!==0&&(i=Js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function iv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=iv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Om(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bm,vd,zm,jm,Hm,yu=!1,Qo=[],Ni=null,Pi=null,Li=null,xo=new Map,vo=new Map,wi=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function av(t,e,n,i,r){switch(e){case"focusin":return Ni=zs(Ni,t,e,n,i,r),!0;case"dragenter":return Pi=zs(Pi,t,e,n,i,r),!0;case"mouseover":return Li=zs(Li,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xo.set(s,zs(xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,vo.set(s,zs(vo.get(s)||null,t,e,n,i,r)),!0}return!1}function Vm(t){var e=cr(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=Pm(n),e!==null){t.blockedOn=e,Hm(t.priority,function(){zm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mu=i,n.target.dispatchEvent(i),mu=null}else return e=Oo(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Cf(t,e,n){Fa(t)&&n.delete(e)}function lv(){yu=!1,Ni!==null&&Fa(Ni)&&(Ni=null),Pi!==null&&Fa(Pi)&&(Pi=null),Li!==null&&Fa(Li)&&(Li=null),xo.forEach(Cf),vo.forEach(Cf)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,lv)))}function _o(t){function e(r){return js(r,t)}if(0<Qo.length){js(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&js(Ni,t),Pi!==null&&js(Pi,t),Li!==null&&js(Li,t),xo.forEach(e),vo.forEach(e),n=0;n<wi.length;n++)i=wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&wi.shift()}var ls=hi.ReactCurrentBatchConfig,Qa=!0;function cv(t,e,n,i){var r=et,s=ls.transition;ls.transition=null;try{et=1,_d(t,e,n,i)}finally{et=r,ls.transition=s}}function uv(t,e,n,i){var r=et,s=ls.transition;ls.transition=null;try{et=4,_d(t,e,n,i)}finally{et=r,ls.transition=s}}function _d(t,e,n,i){if(Qa){var r=Su(t,e,n,i);if(r===null)cc(t,e,i,Ja,n),Tf(t,i);else if(av(r,t,e,n,i))i.stopPropagation();else if(Tf(t,i),e&4&&-1<ov.indexOf(t)){for(;r!==null;){var s=Oo(r);if(s!==null&&Bm(s),s=Su(t,e,n,i),s===null&&cc(t,e,i,Ja,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cc(t,e,i,null,n)}}var Ja=null;function Su(t,e,n,i){if(Ja=null,t=md(i),t=cr(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ja=t,null}function Gm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case gd:return 1;case Um:return 4;case Ka:case Q0:return 16;case Fm:return 536870912;default:return 16}default:return 16}}var Ti=null,yd=null,Oa=null;function Wm(){if(Oa)return Oa;var t,e=yd,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Oa=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Rf(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:Rf,this.isPropagationStopped=Rf,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=hn(Ts),Fo=ht({},Ts,{view:0,detail:0}),dv=hn(Fo),ec,tc,Hs,bl=ht({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(ec=t.screenX-Hs.screenX,tc=t.screenY-Hs.screenY):tc=ec=0,Hs=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Nf=hn(bl),fv=ht({},bl,{dataTransfer:0}),hv=hn(fv),pv=ht({},Fo,{relatedTarget:0}),nc=hn(pv),mv=ht({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=hn(mv),xv=ht({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vv=hn(xv),_v=ht({},Ts,{data:0}),Pf=hn(_v),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ev[t])?!!e[t]:!1}function Ed(){return Mv}var wv=ht({},Fo,{key:function(t){if(t.key){var e=yv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Av=hn(wv),bv=ht({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=hn(bv),Tv=ht({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),Cv=hn(Tv),Rv=ht({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=hn(Rv),Pv=ht({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=hn(Pv),Dv=[9,13,27,32],Md=ci&&"CompositionEvent"in window,ro=null;ci&&"documentMode"in document&&(ro=document.documentMode);var Iv=ci&&"TextEvent"in window&&!ro,Xm=ci&&(!Md||ro&&8<ro&&11>=ro),Df=" ",If=!1;function qm(t,e){switch(t){case"keyup":return Dv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function Uv(t,e){switch(t){case"compositionend":return $m(e);case"keypress":return e.which!==32?null:(If=!0,Df);case"textInput":return t=e.data,t===Df&&If?null:t;default:return null}}function Fv(t,e){if(qr)return t==="compositionend"||!Md&&qm(t,e)?(t=Wm(),Oa=yd=Ti=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xm&&e.locale!=="ko"?null:e.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ov[t.type]:e==="textarea"}function Ym(t,e,n,i){bm(i),e=el(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,yo=null;function kv(t){og(t,0)}function Tl(t){var e=Kr(t);if(_m(e))return t}function Bv(t,e){if(t==="change")return e}var Km=!1;if(ci){var ic;if(ci){var rc="oninput"in document;if(!rc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),rc=typeof Ff.oninput=="function"}ic=rc}else ic=!1;Km=ic&&(!document.documentMode||9<document.documentMode)}function Of(){so&&(so.detachEvent("onpropertychange",Zm),yo=so=null)}function Zm(t){if(t.propertyName==="value"&&Tl(yo)){var e=[];Ym(e,yo,t,md(t)),Nm(kv,e)}}function zv(t,e,n){t==="focusin"?(Of(),so=e,yo=n,so.attachEvent("onpropertychange",Zm)):t==="focusout"&&Of()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(yo)}function Hv(t,e){if(t==="click")return Tl(e)}function Vv(t,e){if(t==="input"||t==="change")return Tl(e)}function Gv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:Gv;function So(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!On(t[r],e[r]))return!1}return!0}function kf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,e){var n=kf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kf(n)}}function Qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jm(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wv(t){var e=Jm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qm(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bf(n,s);var o=Bf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xv=ci&&"documentMode"in document&&11>=document.documentMode,$r=null,Eu=null,oo=null,Mu=!1;function zf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mu||$r==null||$r!==qa(i)||(i=$r,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&So(oo,i)||(oo=i,i=el(Eu,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},sc={},eg={};ci&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Cl(t){if(sc[t])return sc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eg)return sc[t]=e[n];return t}var tg=Cl("animationend"),ng=Cl("animationiteration"),ig=Cl("animationstart"),rg=Cl("transitionend"),sg=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){sg.set(t,e),Er(e,[t])}for(var oc=0;oc<jf.length;oc++){var ac=jf[oc],qv=ac.toLowerCase(),$v=ac[0].toUpperCase()+ac.slice(1);Wi(qv,"on"+$v)}Wi(tg,"onAnimationEnd");Wi(ng,"onAnimationIteration");Wi(ig,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(rg,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Hf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,q0(i,e,void 0,t),t.currentTarget=null}function og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,a,u),s=l}}}if(Ya)throw t=vu,Ya=!1,vu=null,t}function st(t,e){var n=e[Cu];n===void 0&&(n=e[Cu]=new Set);var i=t+"__bubble";n.has(i)||(ag(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),ag(n,t,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[ta]){t[ta]=!0,pm.forEach(function(n){n!=="selectionchange"&&(Yv.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,lc("selectionchange",!1,e))}}function ag(t,e,n,i){switch(Gm(e)){case 1:var r=cv;break;case 4:r=uv;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Nm(function(){var u=s,f=md(n),h=[];e:{var p=sg.get(t);if(p!==void 0){var m=Sd,_=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":m=Av;break;case"focusin":_="focus",m=nc;break;case"focusout":_="blur",m=nc;break;case"beforeblur":case"afterblur":m=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Cv;break;case tg:case ng:case ig:m=gv;break;case rg:m=Nv;break;case"scroll":m=dv;break;case"wheel":m=Lv;break;case"copy":case"cut":case"paste":m=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lf}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var v=u,x;v!==null;){x=v;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,d!==null&&(E=go(v,d),E!=null&&y.push(Mo(v,E,x)))),g)break;v=v.return}0<y.length&&(p=new m(p,_,null,n,f),h.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==mu&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[ui]))break e;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?cr(_):null,_!==null&&(g=Mr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Nf,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Lf,E="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?p:Kr(m),x=_==null?p:Kr(_),p=new y(E,v+"leave",m,n,f),p.target=g,p.relatedTarget=x,E=null,cr(f)===u&&(y=new y(d,v+"enter",_,n,f),y.target=x,y.relatedTarget=g,E=y),g=E,m&&_)t:{for(y=m,d=_,v=0,x=y;x;x=Ar(x))v++;for(x=0,E=d;E;E=Ar(E))x++;for(;0<v-x;)y=Ar(y),v--;for(;0<x-v;)d=Ar(d),x--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ar(y),d=Ar(d)}y=null}else y=null;m!==null&&Vf(h,p,m,y,!1),_!==null&&g!==null&&Vf(h,g,_,y,!0)}}e:{if(p=u?Kr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=Bv;else if(Uf(p))if(Km)C=Vv;else{C=jv;var T=zv}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Hv);if(C&&(C=C(t,u))){Ym(h,C,n,f);break e}T&&T(t,p,u),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&uu(p,"number",p.value)}switch(T=u?Kr(u):window,t){case"focusin":(Uf(T)||T.contentEditable==="true")&&($r=T,Eu=u,oo=null);break;case"focusout":oo=Eu=$r=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,zf(h,n,f);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":zf(h,n,f)}var b;if(Md)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else qr?qm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Xm&&n.locale!=="ko"&&(qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&qr&&(b=Wm()):(Ti=f,yd="value"in Ti?Ti.value:Ti.textContent,qr=!0)),T=el(u,P),0<T.length&&(P=new Pf(P,t,null,n,f),h.push({event:P,listeners:T}),b?P.data=b:(b=$m(n),b!==null&&(P.data=b)))),(b=Iv?Uv(t,n):Fv(t,n))&&(u=el(u,"onBeforeInput"),0<u.length&&(f=new Pf("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=b))}og(h,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=go(t,n),s!=null&&i.unshift(Mo(t,s,r)),s=go(t,e),s!=null&&i.push(Mo(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=go(n,s),l!=null&&o.unshift(Mo(n,l,a))):r||(l=go(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function Gf(t){return(typeof t=="string"?t:""+t).replace(Kv,`
`).replace(Zv,"")}function na(t,e,n){if(e=Gf(e),Gf(t)!==e&&n)throw Error(ae(425))}function tl(){}var wu=null,Au=null;function bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(t){return Wf.resolve(null).then(t).catch(e_)}:Tu;function e_(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_o(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Cs,wo="__reactProps$"+Cs,ui="__reactContainer$"+Cs,Cu="__reactEvents$"+Cs,t_="__reactListeners$"+Cs,n_="__reactHandles$"+Cs;function cr(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xf(t);t!==null;){if(n=t[Hn])return n;t=Xf(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Hn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Rl(t){return t[wo]||null}var Ru=[],Zr=-1;function Xi(t){return{current:t}}function at(t){0>Zr||(t.current=Ru[Zr],Ru[Zr]=null,Zr--)}function rt(t,e){Zr++,Ru[Zr]=t.current,t.current=e}var ji={},Ht=Xi(ji),en=Xi(!1),gr=ji;function gs(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function nl(){at(en),at(Ht)}function qf(t,e,n){if(Ht.current!==ji)throw Error(ae(168));rt(Ht,e),rt(en,n)}function lg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,z0(t)||"Unknown",r));return ht({},n,i)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,gr=Ht.current,rt(Ht,t),rt(en,en.current),!0}function $f(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=lg(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,at(en),at(Ht),rt(Ht,t)):at(en),rt(en,n)}var ii=null,Nl=!1,dc=!1;function cg(t){ii===null?ii=[t]:ii.push(t)}function i_(t){Nl=!0,cg(t)}function qi(){if(!dc&&ii!==null){dc=!0;var t=0,e=et;try{var n=ii;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,Nl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),Im(gd,qi),r}finally{et=e,dc=!1}}return null}var Qr=[],Jr=0,rl=null,sl=0,vn=[],_n=0,xr=null,si=1,oi="";function nr(t,e){Qr[Jr++]=sl,Qr[Jr++]=rl,rl=t,sl=e}function ug(t,e,n){vn[_n++]=si,vn[_n++]=oi,vn[_n++]=xr,xr=t;var i=si;t=oi;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-Un(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function Ad(t){t.return!==null&&(nr(t,1),ug(t,1,0))}function bd(t){for(;t===rl;)rl=Qr[--Jr],Qr[Jr]=null,sl=Qr[--Jr],Qr[Jr]=null;for(;t===xr;)xr=vn[--_n],vn[_n]=null,oi=vn[--_n],vn[_n]=null,si=vn[--_n],vn[_n]=null}var un=null,cn=null,ut=!1,Dn=null;function dg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pu(t){if(ut){var e=cn;if(e){var n=e;if(!Yf(t,e)){if(Nu(t))throw Error(ae(418));e=Di(n.nextSibling);var i=un;e&&Yf(t,e)?dg(i,n):(t.flags=t.flags&-4097|2,ut=!1,un=t)}}else{if(Nu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ut=!1,un=t}}}function Kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function ia(t){if(t!==un)return!1;if(!ut)return Kf(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bu(t.type,t.memoizedProps)),e&&(e=cn)){if(Nu(t))throw fg(),Error(ae(418));for(;e;)dg(t,e),e=Di(e.nextSibling)}if(Kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Di(t.stateNode.nextSibling):null;return!0}function fg(){for(var t=cn;t;)t=Di(t.nextSibling)}function xs(){cn=un=null,ut=!1}function Td(t){Dn===null?Dn=[t]:Dn.push(t)}var r_=hi.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zf(t){var e=t._init;return e(t._payload)}function hg(t){function e(d,v){if(t){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Oi(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,E){return v===null||v.tag!==6?(v=vc(x,d.mode,E),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,E){var C=x.type;return C===Xr?f(d,v,x.props.children,E,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ei&&Zf(C)===v.type)?(E=r(v,x.props),E.ref=Vs(d,v,x),E.return=d,E):(E=Wa(x.type,x.key,x.props,null,d.mode,E),E.ref=Vs(d,v,x),E.return=d,E)}function u(d,v,x,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=_c(x,d.mode,E),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function f(d,v,x,E,C){return v===null||v.tag!==7?(v=mr(x,d.mode,E,C),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vc(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return x=Wa(v.type,v.key,v.props,null,d.mode,x),x.ref=Vs(d,null,v),x.return=d,x;case Wr:return v=_c(v,d.mode,x),v.return=d,v;case Ei:var E=v._init;return h(d,E(v._payload),x)}if(Qs(v)||ks(v))return v=mr(v,d.mode,x,null),v.return=d,v;ra(d,v)}return null}function p(d,v,x,E){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,v,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qo:return x.key===C?l(d,v,x,E):null;case Wr:return x.key===C?u(d,v,x,E):null;case Ei:return C=x._init,p(d,v,C(x._payload),E)}if(Qs(x)||ks(x))return C!==null?null:f(d,v,x,E,null);ra(d,x)}return null}function m(d,v,x,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(x)||null,a(v,d,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case qo:return d=d.get(E.key===null?x:E.key)||null,l(v,d,E,C);case Wr:return d=d.get(E.key===null?x:E.key)||null,u(v,d,E,C);case Ei:var T=E._init;return m(d,v,x,T(E._payload),C)}if(Qs(E)||ks(E))return d=d.get(x)||null,f(v,d,E,C,null);ra(v,E)}return null}function _(d,v,x,E){for(var C=null,T=null,b=v,P=v=0,M=null;b!==null&&P<x.length;P++){b.index>P?(M=b,b=null):M=b.sibling;var S=p(d,b,x[P],E);if(S===null){b===null&&(b=M);break}t&&b&&S.alternate===null&&e(d,b),v=s(S,v,P),T===null?C=S:T.sibling=S,T=S,b=M}if(P===x.length)return n(d,b),ut&&nr(d,P),C;if(b===null){for(;P<x.length;P++)b=h(d,x[P],E),b!==null&&(v=s(b,v,P),T===null?C=b:T.sibling=b,T=b);return ut&&nr(d,P),C}for(b=i(d,b);P<x.length;P++)M=m(b,d,P,x[P],E),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?P:M.key),v=s(M,v,P),T===null?C=M:T.sibling=M,T=M);return t&&b.forEach(function(I){return e(d,I)}),ut&&nr(d,P),C}function y(d,v,x,E){var C=ks(x);if(typeof C!="function")throw Error(ae(150));if(x=C.call(x),x==null)throw Error(ae(151));for(var T=C=null,b=v,P=v=0,M=null,S=x.next();b!==null&&!S.done;P++,S=x.next()){b.index>P?(M=b,b=null):M=b.sibling;var I=p(d,b,S.value,E);if(I===null){b===null&&(b=M);break}t&&b&&I.alternate===null&&e(d,b),v=s(I,v,P),T===null?C=I:T.sibling=I,T=I,b=M}if(S.done)return n(d,b),ut&&nr(d,P),C;if(b===null){for(;!S.done;P++,S=x.next())S=h(d,S.value,E),S!==null&&(v=s(S,v,P),T===null?C=S:T.sibling=S,T=S);return ut&&nr(d,P),C}for(b=i(d,b);!S.done;P++,S=x.next())S=m(b,d,P,S.value,E),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?P:S.key),v=s(S,v,P),T===null?C=S:T.sibling=S,T=S);return t&&b.forEach(function(F){return e(d,F)}),ut&&nr(d,P),C}function g(d,v,x,E){if(typeof x=="object"&&x!==null&&x.type===Xr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qo:e:{for(var C=x.key,T=v;T!==null;){if(T.key===C){if(C=x.type,C===Xr){if(T.tag===7){n(d,T.sibling),v=r(T,x.props.children),v.return=d,d=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ei&&Zf(C)===T.type){n(d,T.sibling),v=r(T,x.props),v.ref=Vs(d,T,x),v.return=d,d=v;break e}n(d,T);break}else e(d,T);T=T.sibling}x.type===Xr?(v=mr(x.props.children,d.mode,E,x.key),v.return=d,d=v):(E=Wa(x.type,x.key,x.props,null,d.mode,E),E.ref=Vs(d,v,x),E.return=d,d=E)}return o(d);case Wr:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=_c(x,d.mode,E),v.return=d,d=v}return o(d);case Ei:return T=x._init,g(d,v,T(x._payload),E)}if(Qs(x))return _(d,v,x,E);if(ks(x))return y(d,v,x,E);ra(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,x),v.return=d,d=v):(n(d,v),v=vc(x,d.mode,E),v.return=d,d=v),o(d)):n(d,v)}return g}var vs=hg(!0),pg=hg(!1),ol=Xi(null),al=null,es=null,Cd=null;function Rd(){Cd=es=al=null}function Nd(t){var e=ol.current;at(ol),t._currentValue=e}function Lu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){al=t,Cd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Cd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(al===null)throw Error(ae(308));es=t,al.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ur=null;function Pd(t){ur===null?ur=[t]:ur.push(t)}function mg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mi=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function Qf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,i){var r=t.updateQueue;Mi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var p=a.lane,m=a.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(p=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,p);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,p=typeof _=="function"?_.call(m,h,p):_,p==null)break e;h=ht({},h,p);break e;case 2:Mi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=h}}function Jf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ko={},Xn=Xi(ko),Ao=Xi(ko),bo=Xi(ko);function dr(t){if(t===ko)throw Error(ae(174));return t}function Dd(t,e){switch(rt(bo,e),rt(Ao,t),rt(Xn,ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}at(Xn),rt(Xn,e)}function _s(){at(Xn),at(Ao),at(bo)}function xg(t){dr(bo.current);var e=dr(Xn.current),n=fu(e,t.type);e!==n&&(rt(Ao,t),rt(Xn,n))}function Id(t){Ao.current===t&&(at(Xn),at(Ao))}var dt=Xi(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Ud(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var za=hi.ReactCurrentDispatcher,hc=hi.ReactCurrentBatchConfig,vr=0,ft=null,St=null,Tt=null,ul=!1,ao=!1,To=0,s_=0;function Ot(){throw Error(ae(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Od(t,e,n,i,r,s){if(vr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?c_:u_,t=n(i,r),ao){s=0;do{if(ao=!1,To=0,25<=s)throw Error(ae(301));s+=1,Tt=St=null,e.updateQueue=null,za.current=d_,t=n(i,r)}while(ao)}if(za.current=dl,e=St!==null&&St.next!==null,vr=0,Tt=St=ft=null,ul=!1,e)throw Error(ae(300));return t}function kd(){var t=To!==0;return To=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ft.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function bn(){if(St===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Tt===null?ft.memoizedState:Tt.next;if(e!==null)Tt=e,St=t;else{if(t===null)throw Error(ae(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Tt===null?ft.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function Co(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((vr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ft.lanes|=f,_r|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function vg(){}function _g(t,e){var n=ft,i=bn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Bd(Eg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Sg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ae(349));vr&30||yg(n,e,r)}return r}function yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sg(t,e,n,i){e.value=n,e.getSnapshot=i,Mg(e)&&wg(t)}function Eg(t,e,n){return n(function(){Mg(e)&&wg(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function wg(t){var e=di(t,1);e!==null&&Fn(e,t,1,-1)}function eh(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=l_.bind(null,ft,t),[e.memoizedState,t]}function Ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ag(){return bn().memoizedState}function ja(t,e,n,i){var r=zn();ft.flags|=t,r.memoizedState=Ro(1|e,n,void 0,i===void 0?null:i)}function Pl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Fd(i,o.deps)){r.memoizedState=Ro(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ro(1|e,n,s,i)}function th(t,e){return ja(8390656,8,t,e)}function Bd(t,e){return Pl(2048,8,t,e)}function bg(t,e){return Pl(4,2,t,e)}function Tg(t,e){return Pl(4,4,t,e)}function Cg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rg(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Cg.bind(null,e,t),n)}function zd(){}function Ng(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Pg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return vr&21?(On(n,e)||(n=Om(),ft.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function o_(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{et=n,hc.transition=i}}function Dg(){return bn().memoizedState}function a_(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ig(t))Ug(e,n);else if(n=mg(t,e,n,i),n!==null){var r=qt();Fn(n,t,i,r),Fg(n,e,i)}}function l_(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ig(t))Ug(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,Pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mg(t,e,r,i),n!==null&&(r=qt(),Fn(n,t,i,r),Fg(n,e,i))}}function Ig(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Ug(t,e){ao=ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var dl={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},c_={readContext:An,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:th,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,Cg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=a_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:eh,useDebugValue:zd,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=eh(!1),e=t[0];return t=o_.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=zn();if(ut){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Rt===null)throw Error(ae(349));vr&30||yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,th(Eg.bind(null,i,s,t),[t]),i.flags|=2048,Ro(9,Sg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Rt.identifierPrefix;if(ut){var n=oi,i=si;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=s_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},u_={readContext:An,useCallback:Ng,useContext:An,useEffect:Bd,useImperativeHandle:Rg,useInsertionEffect:bg,useLayoutEffect:Tg,useMemo:Pg,useReducer:pc,useRef:Ag,useState:function(){return pc(Co)},useDebugValue:zd,useDeferredValue:function(t){var e=bn();return Lg(e,St.memoizedState,t)},useTransition:function(){var t=pc(Co)[0],e=bn().memoizedState;return[t,e]},useMutableSource:vg,useSyncExternalStore:_g,useId:Dg,unstable_isNewReconciler:!1},d_={readContext:An,useCallback:Ng,useContext:An,useEffect:Bd,useImperativeHandle:Rg,useInsertionEffect:bg,useLayoutEffect:Tg,useMemo:Pg,useReducer:mc,useRef:Ag,useState:function(){return mc(Co)},useDebugValue:zd,useDeferredValue:function(t){var e=bn();return St===null?e.memoizedState=t:Lg(e,St.memoizedState,t)},useTransition:function(){var t=mc(Co)[0],e=bn().memoizedState;return[t,e]},useMutableSource:vg,useSyncExternalStore:_g,useId:Dg,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Du(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Fi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(Fn(e,t,r,i),Ba(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Fi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(Fn(e,t,r,i),Ba(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Fi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(Fn(e,t,i,n),Ba(e,t,i))}};function nh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,i)||!So(r,s):!0}function Og(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?gr:Ht.current,i=e.contextTypes,s=(i=i!=null)?gs(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ih(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?gr:Ht.current,r.context=gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Du(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ll.enqueueReplaceState(r,r.state,null),ll(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",i=e;do n+=B0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var f_=typeof WeakMap=="function"?WeakMap:Map;function kg(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hl||(hl=!0,Wu=i),Uu(t,e)},n}function Bg(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new f_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=b_.bind(null,t,e,n),e.then(t,t))}function sh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function oh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var h_=hi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?pg(e,null,n,i):vs(e,t.child,n,i)}function ah(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Od(t,e,n,i,s,r),n=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ut&&n&&Ad(e),e.flags|=1,Wt(t,e,i,r),e.child)}function lh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zg(t,e,s,i,r)):(t=Wa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,i)&&t.ref===e.ref)return fi(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function zg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(So(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,fi(t,e,r)}return Fu(t,e,n,i,r)}function jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ns,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ns,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ns,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ns,ln),ln|=i;return Wt(t,e,r,n),e.child}function Hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=tn(n)?gr:Ht.current;return s=gs(e,s),cs(e,r),n=Od(t,e,n,i,s,r),i=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ut&&i&&Ad(e),e.flags|=1,Wt(t,e,n,r),e.child)}function ch(t,e,n,i,r){if(tn(n)){var s=!0;il(e)}else s=!1;if(cs(e,r),e.stateNode===null)Ha(t,e),Og(e,n,i),Iu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=tn(n)?gr:Ht.current,u=gs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ih(e,o,i,u),Mi=!1;var p=e.memoizedState;o.state=p,ll(e,i,o,r),l=e.memoizedState,a!==i||p!==l||en.current||Mi?(typeof f=="function"&&(Du(e,n,f,i),l=e.memoizedState),(a=Mi||nh(e,n,a,i,p,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pn(e.type,a),o.props=u,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?gr:Ht.current,l=gs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&ih(e,o,i,l),Mi=!1,p=e.memoizedState,o.state=p,ll(e,i,o,r);var _=e.memoizedState;a!==h||p!==_||en.current||Mi?(typeof m=="function"&&(Du(e,n,m,i),_=e.memoizedState),(u=Mi||nh(e,n,u,i,p,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){Hg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$f(e,n,!1),fi(t,e,s);i=e.stateNode,h_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&$f(e,n,!0),e.child}function Vg(t){var e=t.stateNode;e.pendingContext?qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qf(t,e.context,!1),Dd(t,e.containerInfo)}function uh(t,e,n,i,r){return xs(),Td(r),e.flags|=256,Wt(t,e,n,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(dt,r&1),t===null)return Pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,i,0,null),t=mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bu(n),e.memoizedState=ku,t):jd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return p_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Oi(a,s):(s=mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ku,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jd(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,i){return i!==null&&Td(i),vs(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function p_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(ae(422))),sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ul({mode:"visible",children:i.children},r,0,null),s=mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=Bu(o),e.memoizedState=ku,s);if(!(e.mode&1))return sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=gc(s,i,void 0),sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),Fn(i,t,r,-1))}return qd(),i=gc(Error(ae(421))),sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=T_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Di(r.nextSibling),un=e,ut=!0,Dn=null,t!==null&&(vn[_n++]=si,vn[_n++]=oi,vn[_n++]=xr,si=t.id,oi=t.overflow,xr=e),e=jd(e,i.children),e.flags|=4096,e)}function dh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lu(t.return,e,n)}function xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dh(t,n,e);else if(t.tag===19)dh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function m_(t,e,n){switch(e.tag){case 3:Vg(e),xs();break;case 5:xg(e);break;case 1:tn(e.type)&&il(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Gg(t,e,n):(rt(dt,dt.current&1),t=fi(t,e,n),t!==null?t.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,jg(t,e,n)}return fi(t,e,n)}var Xg,zu,qg,$g;Xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};qg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr(Xn.current);var s=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tl)}hu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$g=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function g_(t,e,n){var i=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&nl(),kt(e),null;case 3:return i=e.stateNode,_s(),at(en),at(Ht),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&($u(Dn),Dn=null))),zu(t,e),kt(e),null;case 5:Id(e);var r=dr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)qg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return kt(e),null}if(t=dr(Xn.current),ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[wo]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<eo.length;r++)st(eo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":yf(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Ef(i,s),st("invalid",i)}hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",""+a]):po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":$o(i),Sf(i,s,!0);break;case"textarea":$o(i),Mf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[wo]=i,Xg(t,e,!1,!1),e.stateNode=t;e:{switch(o=pu(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<eo.length;r++)st(eo[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":yf(t,i),r=lu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":Ef(t,i),r=du(t,i),st("invalid",t);break;default:r=i}hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Am(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mo(t,l):typeof l=="number"&&mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&dd(t,s,l,o))}switch(n){case"input":$o(t),Sf(t,i,!1);break;case"textarea":$o(t),Mf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)$g(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=dr(bo.current),dr(Xn.current),ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return kt(e),null;case 13:if(at(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&cn!==null&&e.mode&1&&!(e.flags&128))fg(),xs(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Hn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Dn!==null&&($u(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Et===0&&(Et=3):qd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return _s(),zu(t,e),t===null&&Eo(e.stateNode.containerInfo),kt(e),null;case 10:return Nd(e.type._context),kt(e),null;case 17:return tn(e.type)&&nl(),kt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ss&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return kt(e),null}else 2*xt()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,rt(dt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function x_(t,e){switch(bd(e),e.tag){case 1:return tn(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),at(en),at(Ht),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(at(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(dt),null;case 4:return _s(),null;case 10:return Nd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var oa=!1,jt=!1,v_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function ju(t,e,n){try{n()}catch(i){pt(t,e,i)}}var fh=!1;function __(t,e){if(wu=Qa,t=Jm(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===t)break t;if(p===n&&++u===r&&(a=o),p===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},Qa=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){pt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=fh,fh=!1,_}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ju(e,n,s)}r=r.next}while(r!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yg(t){var e=t.alternate;e!==null&&(t.alternate=null,Yg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[wo],delete e[Cu],delete e[t_],delete e[n_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kg(t){return t.tag===5||t.tag===3||t.tag===4}function hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}var Nt=null,Ln=!1;function mi(t,e,n){for(n=n.child;n!==null;)Zg(t,e,n),n=n.sibling}function Zg(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:jt||ts(n,e);case 6:var i=Nt,r=Ln;Nt=null,mi(t,e,n),Nt=i,Ln=r,Nt!==null&&(Ln?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Ln?(t=Nt,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),_o(t)):uc(Nt,n.stateNode));break;case 4:i=Nt,r=Ln,Nt=n.stateNode.containerInfo,Ln=!0,mi(t,e,n),Nt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ju(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!jt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,mi(t,e,n),jt=i):mi(t,e,n);break;default:mi(t,e,n)}}function ph(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new v_),e.forEach(function(i){var r=C_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Ln=!1;break e;case 3:Nt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Nt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Nt===null)throw Error(ae(160));Zg(s,o,r),Nt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qg(e,t),e=e.sibling}function Qg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Bn(t),i&4){try{lo(3,t,t.return),Dl(3,t)}catch(y){pt(t,t.return,y)}try{lo(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:Tn(e,t),Bn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Tn(e,t),Bn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{mo(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ym(r,s),pu(a,o);var u=pu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Am(r,h):f==="dangerouslySetInnerHTML"?Mm(r,h):f==="children"?mo(r,h):dd(r,f,h,u)}switch(a){case"input":cu(r,s);break;case"textarea":Sm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ss(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[wo]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(Tn(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(Tn(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:Tn(e,t),Bn(t);break;case 13:Tn(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gd=xt())),i&4&&ph(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||f,Tn(e,t),jt=u):Tn(e,t),Bn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(h=xe=f;xe!==null;){switch(p=xe,m=p.child,p.tag){case 0:case 11:case 14:case 15:lo(4,p,p.return);break;case 1:ts(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ts(p,p.return);break;case 22:if(p.memoizedState!==null){gh(h);continue}}m!==null?(m.return=p,xe=m):gh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wm("display",o))}catch(y){pt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){pt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),Bn(t),i&4&&ph(t);break;case 21:break;default:Tn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kg(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(mo(r,""),i.flags&=-33);var s=hh(t);Gu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=hh(t);Vu(t,a,o);break;default:throw Error(ae(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function y_(t,e,n){xe=t,Jg(t)}function Jg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=oa;var u=jt;if(oa=o,(jt=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?xh(r):l!==null?(l.return=o,xe=l):xh(r);for(;s!==null;)xe=s,Jg(s),s=s.sibling;xe=r,oa=a,jt=u}mh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):mh(t)}}function mh(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&_o(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}jt||e.flags&512&&Hu(e)}catch(p){pt(e,e.return,p)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function gh(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function xh(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Hu(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{Hu(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var S_=Math.ceil,fl=hi.ReactCurrentDispatcher,Hd=hi.ReactCurrentOwner,wn=hi.ReactCurrentBatchConfig,Ye=0,Rt=null,yt=null,Pt=0,ln=0,ns=Xi(0),Et=0,No=null,_r=0,Il=0,Vd=0,co=null,Qt=null,Gd=0,Ss=1/0,ni=null,hl=!1,Wu=null,Ui=null,aa=!1,Ci=null,pl=0,uo=0,Xu=null,Va=-1,Ga=0;function qt(){return Ye&6?xt():Va!==-1?Va:Va=xt()}function Fi(t){return t.mode&1?Ye&2&&Pt!==0?Pt&-Pt:r_.transition!==null?(Ga===0&&(Ga=Om()),Ga):(t=et,t!==0||(t=window.event,t=t===void 0?16:Gm(t.type)),t):1}function Fn(t,e,n,i){if(50<uo)throw uo=0,Xu=null,Error(ae(185));Uo(t,n,i),(!(Ye&2)||t!==Rt)&&(t===Rt&&(!(Ye&2)&&(Il|=n),Et===4&&Ai(t,Pt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Ss=xt()+500,Nl&&qi()))}function nn(t,e){var n=t.callbackNode;rv(t,e);var i=Za(t,t===Rt?Pt:0);if(i===0)n!==null&&bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bf(n),e===1)t.tag===0?i_(vh.bind(null,t)):cg(vh.bind(null,t)),Jv(function(){!(Ye&6)&&qi()}),n=null;else{switch(km(i)){case 1:n=gd;break;case 4:n=Um;break;case 16:n=Ka;break;case 536870912:n=Fm;break;default:n=Ka}n=ax(n,ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ex(t,e){if(Va=-1,Ga=0,Ye&6)throw Error(ae(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Za(t,t===Rt?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ml(t,i);else{e=i;var r=Ye;Ye|=2;var s=nx();(Rt!==t||Pt!==e)&&(ni=null,Ss=xt()+500,pr(t,e));do try{w_();break}catch(a){tx(t,a)}while(!0);Rd(),fl.current=s,Ye=r,yt!==null?e=0:(Rt=null,Pt=0,e=Et)}if(e!==0){if(e===2&&(r=_u(t),r!==0&&(i=r,e=qu(t,r))),e===1)throw n=No,pr(t,0),Ai(t,i),nn(t,xt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!E_(r)&&(e=ml(t,i),e===2&&(s=_u(t),s!==0&&(i=s,e=qu(t,s))),e===1))throw n=No,pr(t,0),Ai(t,i),nn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:ir(t,Qt,ni);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=Gd+500-xt(),10<e)){if(Za(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tu(ir.bind(null,t,Qt,ni),e);break}ir(t,Qt,ni);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*S_(i/1960))-i,10<i){t.timeoutHandle=Tu(ir.bind(null,t,Qt,ni),i);break}ir(t,Qt,ni);break;case 5:ir(t,Qt,ni);break;default:throw Error(ae(329))}}}return nn(t,xt()),t.callbackNode===n?ex.bind(null,t):null}function qu(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=ml(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&$u(e)),t}function $u(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function E_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~Vd,e&=~Il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function vh(t){if(Ye&6)throw Error(ae(327));us();var e=Za(t,0);if(!(e&1))return nn(t,xt()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var i=_u(t);i!==0&&(e=i,n=qu(t,i))}if(n===1)throw n=No,pr(t,0),Ai(t,e),nn(t,xt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,Qt,ni),nn(t,xt()),null}function Wd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Ss=xt()+500,Nl&&qi())}}function yr(t){Ci!==null&&Ci.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=wn.transition,i=et;try{if(wn.transition=null,et=1,t)return t()}finally{et=i,wn.transition=n,Ye=e,!(Ye&6)&&qi()}}function Xd(){ln=ns.current,at(ns)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qv(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nl();break;case 3:_s(),at(en),at(Ht),Ud();break;case 5:Id(i);break;case 4:_s();break;case 13:at(dt);break;case 19:at(dt);break;case 10:Nd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(Rt=t,yt=t=Oi(t.current,null),Pt=ln=e,Et=0,No=null,Vd=Il=_r=0,Qt=co=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ur=null}return t}function tx(t,e){do{var n=yt;try{if(Rd(),za.current=dl,ul){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ul=!1}if(vr=0,Tt=St=ft=null,ao=!1,To=0,Hd.current=null,n===null||n.return===null){Et=1,No=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=sh(o);if(m!==null){m.flags&=-257,oh(m,o,a,s,e),m.mode&1&&rh(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){rh(s,u,e),qd();break e}l=Error(ae(426))}}else if(ut&&a.mode&1){var g=sh(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),oh(g,o,a,s,e),Td(ys(l,a));break e}}s=l=ys(l,a),Et!==4&&(Et=2),co===null?co=[s]:co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=kg(s,l,e);Qf(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ui===null||!Ui.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Bg(s,a,e);Qf(s,E);break e}}s=s.return}while(s!==null)}rx(n)}catch(C){e=C,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function nx(){var t=fl.current;return fl.current=dl,t===null?dl:t}function qd(){(Et===0||Et===3||Et===2)&&(Et=4),Rt===null||!(_r&268435455)&&!(Il&268435455)||Ai(Rt,Pt)}function ml(t,e){var n=Ye;Ye|=2;var i=nx();(Rt!==t||Pt!==e)&&(ni=null,pr(t,e));do try{M_();break}catch(r){tx(t,r)}while(!0);if(Rd(),Ye=n,fl.current=i,yt!==null)throw Error(ae(261));return Rt=null,Pt=0,Et}function M_(){for(;yt!==null;)ix(yt)}function w_(){for(;yt!==null&&!Y0();)ix(yt)}function ix(t){var e=ox(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?rx(t):yt=e,Hd.current=null}function rx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x_(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,yt=null;return}}else if(n=g_(n,e,ln),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Et===0&&(Et=5)}function ir(t,e,n){var i=et,r=wn.transition;try{wn.transition=null,et=1,A_(t,e,n,i)}finally{wn.transition=r,et=i}return null}function A_(t,e,n,i){do us();while(Ci!==null);if(Ye&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sv(t,s),t===Rt&&(yt=Rt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,ax(Ka,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=et;et=1;var a=Ye;Ye|=4,Hd.current=null,__(t,n),Qg(n,t),Wv(Au),Qa=!!wu,Au=wu=null,t.current=n,y_(n),K0(),Ye=a,et=o,wn.transition=s}else t.current=n;if(aa&&(aa=!1,Ci=t,pl=r),s=t.pendingLanes,s===0&&(Ui=null),J0(n.stateNode),nn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hl)throw hl=!1,t=Wu,Wu=null,t;return pl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Xu?uo++:(uo=0,Xu=t):uo=0,qi(),null}function us(){if(Ci!==null){var t=km(pl),e=wn.transition,n=et;try{if(wn.transition=null,et=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,pl=0,Ye&6)throw Error(ae(331));var r=Ye;for(Ye|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var h=f.child;if(h!==null)h.return=f,xe=h;else for(;xe!==null;){f=xe;var p=f.sibling,m=f.return;if(Yg(f),f===u){xe=null;break}if(p!==null){p.return=m,xe=p;break}xe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,xe=x;else e:for(o=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(C){pt(a,a.return,C)}if(a===o){xe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,xe=E;break e}xe=a.return}}if(Ye=r,qi(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Al,t)}catch{}i=!0}return i}finally{et=n,wn.transition=e}}return!1}function _h(t,e,n){e=ys(n,e),e=kg(t,e,1),t=Ii(t,e,1),e=qt(),t!==null&&(Uo(t,1,e),nn(t,e))}function pt(t,e,n){if(t.tag===3)_h(t,t,n);else for(;e!==null;){if(e.tag===3){_h(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=ys(n,t),t=Bg(e,t,1),e=Ii(e,t,1),t=qt(),e!==null&&(Uo(e,1,t),nn(e,t));break}}e=e.return}}function b_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Pt&n)===n&&(Et===4||Et===3&&(Pt&130023424)===Pt&&500>xt()-Gd?pr(t,0):Vd|=n),nn(t,e)}function sx(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=qt();t=di(t,e),t!==null&&(Uo(t,e,n),nn(t,n))}function T_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sx(t,n)}function C_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),sx(t,n)}var ox;ox=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,m_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ut&&e.flags&1048576&&ug(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ha(t,e),t=e.pendingProps;var r=gs(e,Ht.current);cs(e,n),r=Od(null,e,i,t,r,n);var s=kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=Ll,e.stateNode=r,r._reactInternals=e,Iu(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Ad(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=N_(i),t=Pn(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=ch(null,e,i,t,n);break e;case 11:e=ah(null,e,i,t,n);break e;case 14:e=lh(null,e,i,Pn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),ch(t,e,i,r,n);case 3:e:{if(Vg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gg(t,e),ll(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(ae(423)),e),e=uh(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(ae(424)),e),e=uh(t,e,i,n,r);break e}else for(cn=Di(e.stateNode.containerInfo.firstChild),un=e,ut=!0,Dn=null,n=pg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=fi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return xg(e),t===null&&Pu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,bu(i,r)?o=null:s!==null&&bu(i,s)&&(e.flags|=32),Hg(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Pu(e),null;case 13:return Gg(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),ah(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(ol,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!en.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=An(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),lh(t,e,i,r,n);case 15:return zg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ha(t,e),e.tag=1,tn(i)?(t=!0,il(e)):t=!1,cs(e,n),Og(e,i,r),Iu(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return Wg(t,e,n);case 22:return jg(t,e,n)}throw Error(ae(156,e.tag))};function ax(t,e){return Im(t,e)}function R_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new R_(t,e,n,i)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N_(t){if(typeof t=="function")return $d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===pd)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")$d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return mr(n.children,r,s,e);case fd:o=8,r|=8;break;case ru:return t=Sn(12,n,e,r|2),t.elementType=ru,t.lanes=s,t;case su:return t=Sn(13,n,e,r),t.elementType=su,t.lanes=s,t;case ou:return t=Sn(19,n,e,r),t.elementType=ou,t.lanes=s,t;case xm:return Ul(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mm:o=10;break e;case gm:o=9;break e;case hd:o=11;break e;case pd:o=14;break e;case Ei:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function mr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Ul(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=xm,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function P_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,o,a,l){return t=new P_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function L_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function lx(t){if(!t)return ji;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(tn(n))return lg(t,n,e)}return e}function cx(t,e,n,i,r,s,o,a,l){return t=Yd(n,i,!0,t,r,s,o,a,l),t.context=lx(null),n=t.current,i=qt(),r=Fi(n),s=li(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,Uo(t,r,i),nn(t,i),t}function Fl(t,e,n,i){var r=e.current,s=qt(),o=Fi(r);return n=lx(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,o),t!==null&&(Fn(t,r,o,s),Ba(t,r,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){yh(t,e),(t=t.alternate)&&yh(t,e)}function D_(){return null}var ux=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}Ol.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Fl(t,e,null,null)};Ol.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Fl(null,t,null,null)}),e[ui]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wi.length&&e!==0&&e<wi[n].priority;n++);wi.splice(n,0,t),n===0&&Vm(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sh(){}function I_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=gl(o);s.call(u)}}var o=cx(e,i,t,0,null,!1,!1,"",Sh);return t._reactRootContainer=o,t[ui]=o.current,Eo(t.nodeType===8?t.parentNode:t),yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=gl(l);a.call(u)}}var l=Yd(t,0,!1,null,null,!1,!1,"",Sh);return t._reactRootContainer=l,t[ui]=l.current,Eo(t.nodeType===8?t.parentNode:t),yr(function(){Fl(e,l,n,i)}),l}function Bl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gl(o);a.call(l)}}Fl(e,o,t,r)}else o=I_(n,e,t,r,i);return gl(o)}Bm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(xd(e,n|1),nn(e,xt()),!(Ye&6)&&(Ss=xt()+500,qi()))}break;case 13:yr(function(){var i=di(t,1);if(i!==null){var r=qt();Fn(i,t,1,r)}}),Kd(t,1)}};vd=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=qt();Fn(e,t,134217728,n)}Kd(t,134217728)}};zm=function(t){if(t.tag===13){var e=Fi(t),n=di(t,e);if(n!==null){var i=qt();Fn(n,t,e,i)}Kd(t,e)}};jm=function(){return et};Hm=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};gu=function(t,e,n){switch(e){case"input":if(cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rl(i);if(!r)throw Error(ae(90));_m(i),cu(i,r)}}}break;case"textarea":Sm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Cm=Wd;Rm=yr;var U_={usingClientEntryPoint:!1,Events:[Oo,Kr,Rl,bm,Tm,Wd]},Ws={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||D_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Al=la.inject(F_),Wn=la}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(ae(200));return L_(t,e,null,n)};fn.createRoot=function(t,e){if(!Qd(t))throw Error(ae(299));var n=!1,i="",r=ux;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,Eo(t.nodeType===8?t.parentNode:t),new Zd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Lm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return yr(t)};fn.hydrate=function(t,e,n){if(!kl(e))throw Error(ae(200));return Bl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ux;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cx(e,null,t,1,n??null,r,!1,s,o),t[ui]=e.current,Eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ol(e)};fn.render=function(t,e,n){if(!kl(e))throw Error(ae(200));return Bl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!kl(t))throw Error(ae(40));return t._reactRootContainer?(yr(function(){Bl(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};fn.unstable_batchedUpdates=Wd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kl(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Bl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dx)}catch(t){console.error(t)}}dx(),dm.exports=fn;var O_=dm.exports,Eh=O_;nu.createRoot=Eh.createRoot,nu.hydrateRoot=Eh.hydrateRoot;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fx=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=J.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>J.createElement("svg",{ref:l,...B_,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:fx("lucide",r),...a},[...o.map(([u,f])=>J.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(t,e)=>{const n=J.forwardRef(({className:i,...r},s)=>J.createElement(z_,{ref:s,iconNode:e,className:fx(`lucide-${k_(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=Fe("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Fe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Fe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Fe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=Fe("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Fe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=Fe("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=Fe("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Fe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Fe("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Fe("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Fe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=Fe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Fe("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Fe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Fe("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Fe("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Fe("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=Fe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=Fe("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Fe("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Fe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=Fe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Fe("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Fe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Fe("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Fe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Fe("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),dy=({activeTab:t,setActiveTab:e,cartCount:n,openAuthModal:i,user:r,onLogout:s,openCart:o,openSellerListingModal:a})=>{const[l,u]=J.useState(!1);return c.jsx("header",{className:"sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5DEC9]",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex items-center justify-between h-20",children:[c.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>e("marketplace"),children:[c.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1E232A] flex items-center justify-center border-2 border-[#A17A16] shadow-sm",children:c.jsx("span",{className:"font-serif text-lg font-bold text-[#A17A16]",children:"3D"})}),c.jsx("span",{className:"font-serif text-2xl font-bold tracking-tight text-[#A17A16]",children:"Decorate3D"})]}),c.jsxs("nav",{className:"hidden md:flex items-center space-x-6",children:[c.jsx("button",{onClick:()=>e("marketplace"),className:`text-sm font-medium transition-colors ${t==="marketplace"?"text-[#1E232A] font-bold border-b-2 border-[#A17A16] pb-1":"text-gray-600 hover:text-[#A17A16]"}`,children:c.jsx("span",{children:"Marketplace"})}),c.jsx("button",{onClick:()=>e("room_planner"),className:`text-sm font-medium transition-colors ${t==="room_planner"?"text-[#1E232A] font-bold border-b-2 border-[#A17A16] pb-1":"text-gray-600 hover:text-[#A17A16]"}`,children:c.jsx("span",{children:"3D Room Planner"})})]}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("button",{onClick:o,className:"relative p-2 text-gray-700 hover:text-[#A17A16] transition-colors rounded-full hover:bg-gray-100",title:"Shopping Cart",children:[c.jsx(Sx,{className:"w-6 h-6"}),n>0&&c.jsx("span",{className:"absolute top-0 right-0 w-5 h-5 bg-[#A17A16] text-white text-xs font-bold rounded-full flex items-center justify-center",children:n})]}),c.jsxs("button",{onClick:a,className:"px-3.5 py-1.5 rounded-full border border-[#E9D3A4] bg-[#F9F4E9] hover:bg-[#E9D3A4] text-[#A17A16] font-mono text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5",title:"Upload multi-angle photos or snap with device camera to generate 3D model",children:[c.jsx(En,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"List Furniture (+3D)"})]}),r?c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>u(!l),className:"flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#E5DEC9] hover:border-[#A17A16] transition-all bg-white shadow-sm",children:[c.jsx("img",{src:(r==null?void 0:r.avatar)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",alt:(r==null?void 0:r.name)||"User",className:"w-7 h-7 rounded-full object-cover"}),c.jsx("span",{className:"text-xs font-bold text-gray-800 hidden sm:inline",children:(r==null?void 0:r.name)||"User"}),c.jsx(H_,{className:"w-3.5 h-3.5 text-gray-500"})]}),l&&c.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-[#E5DEC9] shadow-xl py-2 z-50 animate-fadeIn",onClick:()=>u(!1),children:[c.jsxs("div",{className:"px-4 py-2 border-b border-gray-100",children:[c.jsx("p",{className:"text-xs font-bold text-gray-900 truncate",children:(r==null?void 0:r.name)||"User"}),c.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:(r==null?void 0:r.email)||""})]}),c.jsxs("button",{onClick:()=>e("profile"),className:"w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F9F4E9] hover:text-[#A17A16] flex items-center space-x-2",children:[c.jsx(ef,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"View Profile"})]}),c.jsxs("button",{onClick:()=>e("profile"),className:"w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F9F4E9] hover:text-[#A17A16] flex items-center space-x-2",children:[c.jsx(Zu,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Update Profile"})]}),c.jsxs("button",{onClick:s,className:"w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center space-x-2 border-t border-gray-100 mt-1",children:[c.jsx(_x,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Log Out"})]})]})]}):c.jsxs("button",{onClick:i,className:"gold-gradient-btn px-4 py-2 rounded-xl text-xs font-bold tracking-wider flex items-center space-x-2 shadow-md hover:scale-105",children:[c.jsx(vx,{className:"w-4 h-4"}),c.jsx("span",{children:"SIGN IN / REGISTER"})]})]})]})})})},fy=()=>c.jsx("footer",{className:"bg-[#1E232A] text-white border-t border-[#A17A16]/30 mt-20",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-white text-[#A17A16] font-serif font-bold text-sm flex items-center justify-center",children:"3D"}),c.jsx("span",{className:"font-serif text-xl font-bold text-[#A17A16]",children:"Decorate3D"})]}),c.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:"Smart C2C Used-Furniture & Interior Design Marketplace featuring WebGL 360° rotatable 3D model inspection, AI condition verification, and escrow protection."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3",children:"Categories"}),c.jsxs("ul",{className:"space-y-2 text-xs text-gray-400",children:[c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Mid-Century Lounge Chairs"}),c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Scandinavian Bouclé Armchairs"}),c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Leather Chesterfield Sofas"}),c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Live-Edge Wood Tables"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3",children:"Platform Features"}),c.jsxs("ul",{className:"space-y-2 text-xs text-gray-400",children:[c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• 360° Interactive 3D Inspector"}),c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• 3D Room Floor Planner"}),c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Geospatial Courier Logistics"}),c.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Escrow Safe Payment Hold"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3",children:"Customer Support"}),c.jsxs("p",{className:"text-xs text-gray-400 leading-relaxed",children:["Have questions about 3D models or escrow delivery verification?",c.jsx("br",{}),c.jsx("span",{className:"text-[#A17A16] font-semibold",children:"support@decorate3d.com"})]})]})]}),c.jsx("div",{className:"mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500",children:c.jsx("p",{children:"© 2026 Decorate3D • All Rights Reserved"})})]})}),hy=({product:t,onSelectProduct:e,open3DInspector:n})=>{var i;return c.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden border border-[#E5DEC9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group",children:[c.jsxs("div",{className:"relative aspect-[4/3] w-full bg-[#1E232A] overflow-hidden",children:[c.jsx("img",{src:((i=t.images)==null?void 0:i[0])||"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",alt:t.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"}),t.has3DModel&&c.jsxs("div",{className:"absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#E5DEC9] flex items-center space-x-1.5 shadow-sm",children:[c.jsx(En,{className:"w-3.5 h-3.5 text-[#A17A16]"}),c.jsx("span",{children:"3D Model"})]}),c.jsxs("div",{className:"absolute top-3 right-3 gold-badge text-[10px] px-2.5 py-1 rounded-full uppercase",children:["AI: ",t.conditionGrade||"GOOD"]}),c.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4",children:c.jsxs("button",{onClick:()=>n(t),className:"gold-gradient-btn px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider flex items-center space-x-2 shadow-lg hover:scale-105",children:[c.jsx(En,{className:"w-4 h-4"}),c.jsx("span",{children:"LAUNCH 3D INSPECTOR"})]})})]}),c.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-between items-start",children:c.jsx("h3",{onClick:()=>e(t),className:"font-serif text-lg font-bold text-gray-900 group-hover:text-[#A17A16] transition-colors line-clamp-1 cursor-pointer",children:t.title})}),c.jsx("p",{className:"text-xs text-gray-500 line-clamp-2 mt-1",children:t.description})]}),c.jsxs("div",{className:"pt-3 border-t border-[#E5DEC9]/60 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"font-serif text-xl font-bold text-[#A17A16]",children:["$",t.price]}),t.estimatedNewPrice&&c.jsxs("span",{className:"text-[11px] text-gray-400 line-through ml-2",children:["$",t.estimatedNewPrice]})]}),c.jsxs("button",{onClick:()=>e(t),className:"text-xs font-semibold text-gray-700 hover:text-[#A17A16] flex items-center space-x-1",children:[c.jsx("span",{children:"Details"}),c.jsx(W_,{className:"w-3.5 h-3.5"})]})]})]})]})},py=({products:t,onSelectProduct:e,open3DInspector:n})=>{const[i,r]=J.useState(""),[s,o]=J.useState("All"),[a,l]=J.useState("All"),u=["All","Chairs","Sofas","Tables"],f=["All","EXCELLENT","GOOD","FAIR"],h=t.filter(p=>{const m=p.title.toLowerCase().includes(i.toLowerCase())||p.description.toLowerCase().includes(i.toLowerCase()),_=s==="All"||p.category.toLowerCase()===s.toLowerCase(),y=a==="All"||p.conditionGrade.toUpperCase()===a;return m&&_&&y});return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn",children:[c.jsxs("div",{className:"relative rounded-3xl bg-[#1E232A] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-[#A17A16]/30",children:[c.jsxs("div",{className:"relative z-10 max-w-2xl space-y-4",children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 bg-[#A17A16]/20 border border-[#A17A16] px-3 py-1 rounded-full text-xs font-mono font-bold text-[#A17A16]",children:[c.jsx(ds,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Interactive 3D C2C Furniture Marketplace"})]}),c.jsxs("h1",{className:"font-serif text-3xl sm:text-5xl font-bold leading-tight",children:["Inspect in ",c.jsx("span",{className:"text-[#A17A16]",children:"360° 3D"})," Before You Buy."]}),c.jsx("p",{className:"text-sm text-gray-300 leading-relaxed",children:"Eliminate spatial uncertainty and hidden damage. Rotate, zoom, and test top-grain leather sofas and designer chairs directly in WebGL 3D."})]}),c.jsx("div",{className:"absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none",children:c.jsx("div",{className:"w-72 h-72 rounded-full border-4 border-[#A17A16] flex items-center justify-center animate-spin-slow",children:c.jsx(En,{className:"w-36 h-36 text-[#A17A16]"})})})]}),c.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-[#E5DEC9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{className:"relative w-full md:w-96",children:[c.jsx(ty,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),c.jsx("input",{type:"text",value:i,onChange:p=>r(p.target.value),placeholder:"Search Mid-Century chairs, sofas, tables...",className:"w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsx("div",{className:"flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:u.map(p=>c.jsx("button",{onClick:()=>o(p),className:`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${s===p?"bg-[#A17A16] text-white shadow-sm":"bg-[#F9F4E9] text-gray-700 hover:bg-[#E9D3A4]"}`,children:p},p))}),c.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[c.jsx("span",{className:"text-gray-500 font-semibold hidden sm:inline",children:"Condition:"}),c.jsx("select",{value:a,onChange:p=>l(p.target.value),className:"bg-[#FBF9F5] border border-[#E5DEC9] px-3 py-2 rounded-xl font-semibold text-gray-800 focus:outline-none focus:border-[#A17A16]",children:f.map(p=>c.jsxs("option",{value:p,children:["AI Grade: ",p]},p))})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex justify-between items-center text-xs text-gray-500 font-mono",children:[c.jsxs("span",{children:["Showing ",h.length," verified listings with 3D model data"]}),c.jsx("span",{className:"text-[#A17A16] font-bold",children:"Module 1 Feature 2 Active"})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:h.map(p=>c.jsx(hy,{product:p,onSelectProduct:e,open3DInspector:n},p._id))})]})]})},my=({product:t,open3DInspector:e,onAddToCart:n,onLaunchRoomPlanner:i})=>{var a,l;const[r,s]=J.useState(0);if(!t)return null;const o=t.images&&t.images.length>0?t.images:["https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"];return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-gray-500 mb-6",children:[c.jsx("span",{children:"Marketplace"}),c.jsx(Mh,{className:"w-3 h-3"}),c.jsx("span",{children:t.category}),c.jsx(Mh,{className:"w-3 h-3"}),c.jsx("span",{className:"text-[#A17A16] font-semibold",children:t.title})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[c.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[c.jsxs("div",{className:"relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#1E232A] shadow-xl border border-[#E5DEC9] group",children:[c.jsx("img",{src:o[r]||o[0],alt:t.title,className:"w-full h-full object-cover opacity-90 transition-opacity duration-300"}),c.jsxs("div",{className:"absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5DEC9] flex items-center space-x-2 shadow-sm",children:[c.jsx(En,{className:"w-4 h-4 text-[#A17A16]"}),c.jsx("span",{className:"text-xs font-bold text-gray-800 tracking-wide",children:"3D Model Available"})]}),c.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-all group-hover:bg-black/40",children:c.jsxs("button",{onClick:()=>e(t),className:"gold-gradient-btn px-6 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider flex items-center space-x-3 shadow-2xl transition-all hover:scale-105 border border-[#E9D3A4]/40",children:[c.jsx(En,{className:"w-5 h-5 animate-pulse"}),c.jsx("span",{children:"LAUNCH INTERACTIVE 3D INSPECTOR"})]})})]}),c.jsxs("div",{className:"flex items-center space-x-4 pt-2",children:[c.jsx("button",{onClick:()=>s(0),className:`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${r===0?"border-[#A17A16] ring-2 ring-[#A17A16]/20":"border-[#E5DEC9] opacity-70 hover:opacity-100"}`,children:c.jsx("img",{src:o[0],alt:"Thumbnail 1",className:"w-full h-full object-cover"})}),c.jsxs("button",{onClick:()=>e(t),className:"w-20 h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group",title:"Launch 3D Model Inspector",children:[c.jsx(En,{className:"w-6 h-6 transition-transform group-hover:scale-110"}),c.jsx("span",{className:"text-[10px] font-mono font-bold mt-1",children:"3D VIEW"})]}),c.jsxs("button",{onClick:i,className:"w-20 h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group",title:"Launch 3D Room Planner",children:[c.jsx(ds,{className:"w-6 h-6 transition-transform group-hover:scale-110 text-[#A17A16]"}),c.jsx("span",{className:"text-[10px] font-mono font-bold mt-1",children:"PLANNER"})]})]})]}),c.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c.jsxs("span",{className:"gold-badge text-[11px] px-3 py-1 rounded-md uppercase",children:["AI VERIFIED CONDITION: ",t.conditionGrade||"GOOD"]}),t.isRareFind&&c.jsx("span",{className:"bg-[#F9F4E9] text-[#A17A16] border border-[#E9D3A4] text-[11px] font-bold px-3 py-1 rounded-md uppercase",children:"RARE FIND"})]}),c.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] leading-tight",children:t.title}),c.jsxs("div",{className:"flex items-baseline space-x-4 border-b border-[#E5DEC9] pb-6",children:[c.jsxs("span",{className:"font-serif text-4xl font-bold text-[#A17A16]",children:["$",t.price]}),t.estimatedNewPrice&&c.jsxs("span",{className:"text-sm font-sans text-gray-500 line-through",children:["$",t.estimatedNewPrice," Est. New"]})]}),c.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-sm space-y-4",children:[c.jsx("h3",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider",children:"CRAFTSMANSHIP DETAILS"}),c.jsx("p",{className:"text-sm text-gray-600 leading-relaxed",children:t.description}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-4 border-t border-[#E5DEC9]/60 text-xs",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400 font-bold uppercase block text-[10px]",children:"MATERIAL"}),c.jsx("span",{className:"font-semibold text-gray-800",children:t.material})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400 font-bold uppercase block text-[10px]",children:"ERA"}),c.jsx("span",{className:"font-semibold text-gray-800",children:t.era})]})]})]}),c.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-xl border border-[#E9D3A4] flex items-center justify-between text-xs",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-full bg-[#1E232A] text-white font-bold flex items-center justify-center font-serif text-sm",children:"MA"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-bold text-gray-900 block",children:((a=t.seller)==null?void 0:a.name)||"Muhtasim Ahmed"}),c.jsxs("span",{className:"text-gray-500",children:["Seller • ",((l=t.seller)==null?void 0:l.location)||"Dhaka, Bangladesh"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-1 text-[#A17A16] font-bold",children:[c.jsx(Bo,{className:"w-4 h-4"}),c.jsx("span",{children:"Escrow Protected"})]})]}),c.jsxs("div",{className:"space-y-3 pt-2",children:[c.jsxs("button",{onClick:()=>n(t),className:"w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2",children:[c.jsx(Jd,{className:"w-5 h-5"}),c.jsx("span",{children:"ADD TO CART (ESCROW SECURED)"})]}),c.jsxs("button",{onClick:()=>e(t),className:"w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-xl text-sm border border-[#E5DEC9] transition-all flex items-center justify-center space-x-2",children:[c.jsx(En,{className:"w-4 h-4 text-[#A17A16]"}),c.jsx("span",{children:"OPEN 360° 3D INSPECTOR CANVAS"})]})]})]})]})]})},gy=({user:t,onUpdateProfile:e,onLogout:n,openAuthModal:i})=>{const[r,s]=J.useState(!1),[o,a]=J.useState((t==null?void 0:t.name)||""),[l,u]=J.useState((t==null?void 0:t.email)||""),[f,h]=J.useState((t==null?void 0:t.avatar)||""),[p,m]=J.useState((t==null?void 0:t.role)||"buyer"),[_,y]=J.useState(!1);if(!t)return c.jsxs("div",{className:"max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-[#E5DEC9] text-center space-y-4 shadow-sm",children:[c.jsx(ef,{className:"w-12 h-12 text-[#A17A16] mx-auto"}),c.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:"Sign In to View Profile"}),c.jsx("p",{className:"text-xs text-gray-500",children:"Please sign in or create an account to manage your profile and 3D listings."}),c.jsx("button",{onClick:i,className:"gold-gradient-btn px-6 py-3 rounded-xl font-bold text-xs shadow-md tracking-wider",children:"SIGN IN / REGISTER NOW"})]});const g=d=>{d.preventDefault(),e({...t,name:o,email:l,avatar:f||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",role:p}),s(!1),y(!0),setTimeout(()=>y(!1),3e3)};return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-10 space-y-8 animate-fadeIn",children:[_&&c.jsxs("div",{className:"p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-2xl flex items-center space-x-2 text-xs font-semibold animate-fadeIn",children:[c.jsx(mx,{className:"w-4 h-4 text-emerald-600"}),c.jsx("span",{children:"Your profile details have been successfully updated!"})]}),c.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-[#E5DEC9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left",children:[c.jsx("img",{src:t.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",alt:t.name,className:"w-24 h-24 rounded-full object-cover border-4 border-[#A17A16] shadow-md"}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center justify-center sm:justify-start space-x-2",children:[c.jsx("h1",{className:"font-serif text-2xl font-bold text-gray-900",children:t.name}),c.jsx("span",{className:"gold-badge text-[10px] px-2.5 py-0.5 rounded-full uppercase",children:t.role||"VERIFIED USER"})]}),c.jsx("p",{className:"text-xs text-gray-500 font-mono",children:t.email}),c.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-[#A17A16] pt-1",children:[c.jsx(Bo,{className:"w-4 h-4"}),c.jsx("span",{children:"Escrow Protected Account"})]})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>s(!r),className:"w-full sm:w-auto px-4 py-2.5 bg-[#F9F4E9] hover:bg-[#E9D3A4] text-[#A17A16] rounded-xl text-xs font-bold transition-all border border-[#E9D3A4] flex items-center justify-center space-x-2",children:[c.jsx(Zu,{className:"w-4 h-4"}),c.jsx("span",{children:r?"CANCEL EDIT":"EDIT PROFILE"})]}),c.jsxs("button",{onClick:n,className:"w-full sm:w-auto px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-all border border-rose-200 flex items-center justify-center space-x-2",children:[c.jsx(_x,{className:"w-4 h-4"}),c.jsx("span",{children:"LOG OUT"})]})]})]}),r&&c.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-[#A17A16]/40 shadow-lg space-y-6 animate-fadeIn",children:[c.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-[#E5DEC9]",children:[c.jsxs("h3",{className:"font-serif text-lg font-bold text-gray-900 flex items-center space-x-2",children:[c.jsx(Zu,{className:"w-5 h-5 text-[#A17A16]"}),c.jsx("span",{children:"Update Profile Information"})]}),c.jsx("button",{onClick:()=>s(!1),className:"text-gray-400 hover:text-gray-700",children:c.jsx(Rs,{className:"w-5 h-5"})})]}),c.jsxs("form",{onSubmit:g,className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Full Name"}),c.jsx("input",{type:"text",required:!0,value:o,onChange:d=>a(d.target.value),className:"w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Email Address"}),c.jsx("input",{type:"email",required:!0,value:l,onChange:d=>u(d.target.value),className:"w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Profile Avatar Photo URL"}),c.jsx("input",{type:"url",value:f,onChange:d=>h(d.target.value),placeholder:"https://images.unsplash.com/photo-...",className:"w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Account Role"}),c.jsxs("select",{value:p,onChange:d=>m(d.target.value),className:"w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]",children:[c.jsx("option",{value:"buyer",children:"Buyer (Search & View 3D Models)"}),c.jsx("option",{value:"seller",children:"Seller (List Used Furniture Items)"}),c.jsx("option",{value:"courier",children:"Logistics Courier Driver"})]})]}),c.jsxs("div",{className:"md:col-span-2 flex justify-end space-x-3 pt-4 border-t border-[#E5DEC9]",children:[c.jsx("button",{type:"button",onClick:()=>s(!1),className:"px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100",children:"CANCEL"}),c.jsxs("button",{type:"submit",className:"gold-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider flex items-center space-x-2 shadow-md",children:[c.jsx(ey,{className:"w-4 h-4"}),c.jsx("span",{children:"SAVE PROFILE CHANGES"})]})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-center text-gray-500 text-xs font-mono",children:[c.jsx("span",{children:"SAVED 3D MODELS"}),c.jsx(En,{className:"w-4 h-4 text-[#A17A16]"})]}),c.jsx("div",{className:"font-serif text-3xl font-bold text-gray-900",children:"4 Items"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-center text-gray-500 text-xs font-mono",children:[c.jsx("span",{children:"ACTIVE ESCROW ORDERS"}),c.jsx(K_,{className:"w-4 h-4 text-[#A17A16]"})]}),c.jsx("div",{className:"font-serif text-3xl font-bold text-gray-900",children:"1 Order"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-center text-gray-500 text-xs font-mono",children:[c.jsx("span",{children:"INSPECTION HISTORY"}),c.jsx(ry,{className:"w-4 h-4 text-[#A17A16]"})]}),c.jsx("div",{className:"font-serif text-3xl font-bold text-gray-900",children:"12 Scans"})]})]})]})},xy=({cart:t,onRemoveFromCart:e,onCheckout:n,isOpen:i,onClose:r})=>{if(!i)return null;const s=t.reduce((o,a)=>o+a.price,0);return c.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-fadeIn",children:c.jsxs("div",{className:"bg-[#FBF9F5] w-full max-w-md h-full flex flex-col justify-between p-6 border-l border-[#E5DEC9] shadow-2xl relative",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center pb-4 border-b border-[#E5DEC9]",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Jd,{className:"w-5 h-5 text-[#A17A16]"}),c.jsx("h2",{className:"font-serif text-xl font-bold text-gray-900",children:"Your Escrow Cart"})]}),c.jsx("button",{onClick:r,className:"text-xs font-mono font-bold text-gray-400 hover:text-gray-800",children:"CLOSE [✕]"})]}),c.jsxs("div",{className:"mt-4 p-3 bg-[#F9F4E9] border border-[#E9D3A4] rounded-xl text-xs text-[#A17A16] flex items-center space-x-2",children:[c.jsx(Bo,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:"Funds locked safely in escrow until physical delivery OTP scan."})]}),c.jsx("div",{className:"mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1",children:t.length===0?c.jsx("div",{className:"text-center py-12 text-gray-400 text-sm",children:"Your cart is empty. Add a 3D furniture item to test escrow payment!"}):t.map((o,a)=>{var l;return c.jsxs("div",{className:"flex items-center space-x-4 p-3 bg-white rounded-xl border border-[#E5DEC9]",children:[c.jsx("img",{src:(l=o.images)==null?void 0:l[0],alt:o.title,className:"w-16 h-16 rounded-lg object-cover"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("h4",{className:"font-serif text-sm font-bold text-gray-900 truncate",children:o.title}),c.jsx("p",{className:"text-xs text-gray-500",children:o.material}),c.jsxs("span",{className:"font-serif font-bold text-[#A17A16] text-sm",children:["$",o.price]})]}),c.jsx("button",{onClick:()=>e(a),className:"p-1.5 text-gray-400 hover:text-rose-500 rounded-lg hover:bg-rose-50",children:c.jsx(sy,{className:"w-4 h-4"})})]},a)})})]}),t.length>0&&c.jsxs("div",{className:"pt-6 border-t border-[#E5DEC9] space-y-4",children:[c.jsxs("div",{className:"space-y-1 text-xs",children:[c.jsxs("div",{className:"flex justify-between text-gray-600",children:[c.jsx("span",{children:"Subtotal:"}),c.jsxs("span",{children:["$",s.toFixed(2)]})]}),c.jsxs("div",{className:"flex justify-between text-gray-600",children:[c.jsx("span",{children:"Escrow Guarantee Fee:"}),c.jsx("span",{className:"text-emerald-600 font-bold",children:"FREE"})]}),c.jsxs("div",{className:"flex justify-between font-bold text-sm pt-2 text-gray-900 border-t border-gray-200",children:[c.jsx("span",{children:"Total Escrow Charge:"}),c.jsxs("span",{className:"text-[#A17A16] font-serif font-bold text-lg",children:["$",s.toFixed(2)]})]})]}),c.jsxs("button",{onClick:n,className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2",children:[c.jsx("span",{children:"PROCEED TO ESCROW LOCK PAYMENT"}),c.jsx(px,{className:"w-4 h-4"})]})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="164",vy=0,Ah=1,_y=2,Ex=1,Mx=2,ti=3,Hi=0,rn=1,ri=2,ki=0,fs=1,bh=2,Th=3,Ch=4,yy=5,or=100,Sy=101,Ey=102,My=103,wy=104,Ay=200,by=201,Ty=202,Cy=203,Qu=204,Ju=205,Ry=206,Ny=207,Py=208,Ly=209,Dy=210,Iy=211,Uy=212,Fy=213,Oy=214,ky=0,By=1,zy=2,xl=3,jy=4,Hy=5,Vy=6,Gy=7,wx=0,Wy=1,Xy=2,Bi=0,qy=1,$y=2,Yy=3,Ax=4,Ky=5,Zy=6,Qy=7,bx=300,Es=301,Ms=302,ed=303,td=304,zl=306,nd=1e3,fr=1001,id=1002,Mn=1003,Jy=1004,ca=1005,In=1006,Sc=1007,hr=1008,Vi=1009,e1=1010,t1=1011,Tx=1012,Cx=1013,ws=1014,Ri=1015,jl=1016,Rx=1017,Nx=1018,zo=1020,n1=35902,i1=1021,r1=1022,Gn=1023,s1=1024,o1=1025,hs=1026,Po=1027,a1=1028,Px=1029,l1=1030,Lx=1031,Dx=1033,Ec=33776,Mc=33777,wc=33778,Ac=33779,Rh=35840,Nh=35841,Ph=35842,Lh=35843,Dh=36196,Ih=37492,Uh=37496,Fh=37808,Oh=37809,kh=37810,Bh=37811,zh=37812,jh=37813,Hh=37814,Vh=37815,Gh=37816,Wh=37817,Xh=37818,qh=37819,$h=37820,Yh=37821,bc=36492,Kh=36494,Zh=36495,c1=36283,Qh=36284,Jh=36285,ep=36286,u1=3200,d1=3201,Ix=0,f1=1,bi="",Zt="srgb",$i="srgb-linear",nf="display-p3",Hl="display-p3-linear",vl="linear",ot="srgb",_l="rec709",yl="p3",br=7680,tp=519,h1=512,p1=513,m1=514,Ux=515,g1=516,x1=517,v1=518,_1=519,np=35044,ip="300 es",ai=2e3,Sl=2001;class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rp=1234567;const fo=Math.PI/180,Lo=180/Math.PI;function Ps(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function rf(t,e){return(t%e+e)%e}function y1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function S1(t,e,n){return t!==e?(n-t)/(e-t):0}function ho(t,e,n){return(1-n)*t+n*e}function E1(t,e,n,i){return ho(t,e,1-Math.exp(-n*i))}function M1(t,e=1){return e-Math.abs(rf(t,e*2)-e)}function w1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function A1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function b1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function T1(t,e){return t+Math.random()*(e-t)}function C1(t){return t*(.5-Math.random())}function R1(t){t!==void 0&&(rp=t);let e=rp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N1(t){return t*fo}function P1(t){return t*Lo}function L1(t){return(t&t-1)===0&&t!==0}function D1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function I1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function U1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),p=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*p,a*u);break;case"YZY":t.set(l*p,a*f,l*h,a*u);break;case"ZXZ":t.set(l*h,l*p,a*f,a*u);break;case"XZX":t.set(a*f,l*_,l*m,a*u);break;case"YXY":t.set(l*m,a*f,l*_,a*u);break;case"ZYZ":t.set(l*_,l*m,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ua={DEG2RAD:fo,RAD2DEG:Lo,generateUUID:Ps,clamp:Xt,euclideanModulo:rf,mapLinear:y1,inverseLerp:S1,lerp:ho,damp:E1,pingpong:M1,smoothstep:w1,smootherstep:A1,randInt:b1,randFloat:T1,randFloatSpread:C1,seededRandom:R1,degToRad:N1,radToDeg:P1,isPowerOfTwo:L1,ceilPowerOfTwo:D1,floorPowerOfTwo:I1,setQuaternionFromProperEuler:U1,normalize:Vt,denormalize:Gr};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],p=i[2],m=i[5],_=i[8],y=r[0],g=r[3],d=r[6],v=r[1],x=r[4],E=r[7],C=r[2],T=r[5],b=r[8];return s[0]=o*y+a*v+l*C,s[3]=o*g+a*x+l*T,s[6]=o*d+a*E+l*b,s[1]=u*y+f*v+h*C,s[4]=u*g+f*x+h*T,s[7]=u*d+f*E+h*b,s[2]=p*y+m*v+_*C,s[5]=p*g+m*x+_*T,s[8]=p*d+m*E+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,p=a*l-f*s,m=u*s-o*l,_=n*h+i*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new He;function Fx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Do(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function F1(){const t=Do("canvas");return t.style.display="block",t}const sp={};function O1(t){t in sp||(sp[t]=!0,console.warn(t))}const op=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ap=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[$i]:{transfer:vl,primaries:_l,toReference:t=>t,fromReference:t=>t},[Zt]:{transfer:ot,primaries:_l,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:vl,primaries:yl,toReference:t=>t.applyMatrix3(ap),fromReference:t=>t.applyMatrix3(op)},[nf]:{transfer:ot,primaries:yl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ap),fromReference:t=>t.applyMatrix3(op).convertLinearToSRGB()}},k1=new Set([$i,Hl]),nt={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!k1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=da[e].toReference,r=da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return da[t].primaries},getTransfer:function(t){return t===bi?vl:da[t].transfer}};function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class B1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=Do("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Do("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z1=0;class Ox{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?B1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j1=0;class $t extends Ns{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=fr,r=fr,s=In,o=hr,a=Gn,l=Vi,u=$t.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Ps(),this.name="",this.source=new Ox(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=bx;$t.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],p=l[1],m=l[5],_=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(f-p)<.01&&Math.abs(h-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,E=(m+1)/2,C=(d+1)/2,T=(f+p)/4,b=(h+y)/4,P=(_+g)/4;return x>E&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=b/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(h-y)*(h-y)+(p-f)*(p-f));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(h-y)/v,this.z=(p-f)/v,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H1 extends Ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ox(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends H1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kx extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V1 extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==p||u!==m||f!==_){let g=1-a;const d=l*p+u*m+f*_+h*y,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,d*v);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}const E=a*v;if(l=l*g+p*E,u=u*g+m*E,f=f*g+_*E,h=h*g+y*E,g===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=C,u*=C,f*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*m-u*p,e[n+1]=l*_+f*p+u*h-a*m,e[n+2]=u*_+f*m+a*p-l*h,e[n+3]=f*_-a*h-l*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),p=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=p*f*h+u*m*_,this._y=u*m*h-p*f*_,this._z=u*f*_+p*m*h,this._w=u*f*h-p*m*_;break;case"YXZ":this._x=p*f*h+u*m*_,this._y=u*m*h-p*f*_,this._z=u*f*_-p*m*h,this._w=u*f*h+p*m*_;break;case"ZXY":this._x=p*f*h-u*m*_,this._y=u*m*h+p*f*_,this._z=u*f*_+p*m*h,this._w=u*f*h-p*m*_;break;case"ZYX":this._x=p*f*h-u*m*_,this._y=u*m*h+p*f*_,this._z=u*f*_-p*m*h,this._w=u*f*h+p*m*_;break;case"YZX":this._x=p*f*h+u*m*_,this._y=u*m*h+p*f*_,this._z=u*f*_-p*m*h,this._w=u*f*h-p*m*_;break;case"XZY":this._x=p*f*h-u*m*_,this._y=u*m*h-p*f*_,this._z=u*f*_+p*m*h,this._w=u*f*h+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],p=i+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new k,lp=new jo;class Ho{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),ha.subVectors(this.max,Xs),Cr.subVectors(e.a,Xs),Rr.subVectors(e.b,Xs),Nr.subVectors(e.c,Xs),gi.subVectors(Rr,Cr),xi.subVectors(Nr,Rr),Ki.subVectors(Cr,Nr);let n=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Ki.z,Ki.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Ki.z,0,-Ki.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Ki.y,Ki.x,0];return!Pc(n,Cr,Rr,Nr,ha)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Cr,Rr,Nr,ha))?!1:(pa.crossVectors(gi,xi),n=[pa.x,pa.y,pa.z],Pc(n,Cr,Rr,Nr,ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new k,new k,new k,new k,new k,new k,new k,new k],Cn=new k,fa=new Ho,Cr=new k,Rr=new k,Nr=new k,gi=new k,xi=new k,Ki=new k,Xs=new k,ha=new k,pa=new k,Zi=new k;function Pc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),u=n.dot(Zi),f=i.dot(Zi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const G1=new Ho,qs=new k,Lc=new k;class Vl{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):G1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Lc)),this.expandByPoint(qs.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new k,Dc=new k,ma=new k,vi=new k,Ic=new k,ga=new k,Uc=new k;class Bx{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),ma.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(Dc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ma),a=vi.dot(this.direction),l=-vi.dot(ma),u=vi.lengthSq(),f=Math.abs(1-o*o);let h,p,m,_;if(f>0)if(h=o*l-a,p=o*a-l,_=s*f,h>=0)if(p>=-_)if(p<=_){const y=1/f;h*=y,p*=y,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+u}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+u;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+u;else p<=-_?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+u):p<=_?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+u):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+u);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dc).addScaledVector(ma,p),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Ic.subVectors(n,e),ga.subVectors(i,e),Uc.crossVectors(Ic,ga);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(ga.crossVectors(vi,ga));if(l<0)return null;const u=a*this.direction.dot(Ic.cross(vi));if(u<0||l+u>o)return null;const f=-a*vi.dot(Uc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,f,h,p,m,_,y,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,p,m,_,y,g)}set(e,n,i,r,s,o,a,l,u,f,h,p,m,_,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=m,d[7]=_,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*f,m=o*h,_=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+_*u,n[5]=p-y*u,n[9]=-a*l,n[2]=y-p*u,n[6]=_+m*u,n[10]=o*l}else if(e.order==="YXZ"){const p=l*f,m=l*h,_=u*f,y=u*h;n[0]=p+y*a,n[4]=_*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=y+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*f,m=l*h,_=u*f,y=u*h;n[0]=p-y*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=y-p*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*f,m=o*h,_=a*f,y=a*h;n[0]=l*f,n[4]=_*u-m,n[8]=p*u+y,n[1]=l*h,n[5]=y*u+p,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*u,_=a*l,y=a*u;n[0]=l*f,n[4]=y-p*h,n[8]=_*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+_,n[10]=p-y*h}else if(e.order==="XZY"){const p=o*l,m=o*u,_=a*l,y=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=p*h+y,n[5]=o*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*f,n[10]=y*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,X1)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),_i.crossVectors(i,on),_i.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),_i.crossVectors(i,on)),_i.normalize(),xa.crossVectors(on,_i),r[0]=_i.x,r[4]=xa.x,r[8]=on.x,r[1]=_i.y,r[5]=xa.y,r[9]=on.y,r[2]=_i.z,r[6]=xa.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],p=i[9],m=i[13],_=i[2],y=i[6],g=i[10],d=i[14],v=i[3],x=i[7],E=i[11],C=i[15],T=r[0],b=r[4],P=r[8],M=r[12],S=r[1],I=r[5],F=r[9],N=r[13],j=r[2],V=r[6],K=r[10],ee=r[14],L=r[3],q=r[7],$=r[11],G=r[15];return s[0]=o*T+a*S+l*j+u*L,s[4]=o*b+a*I+l*V+u*q,s[8]=o*P+a*F+l*K+u*$,s[12]=o*M+a*N+l*ee+u*G,s[1]=f*T+h*S+p*j+m*L,s[5]=f*b+h*I+p*V+m*q,s[9]=f*P+h*F+p*K+m*$,s[13]=f*M+h*N+p*ee+m*G,s[2]=_*T+y*S+g*j+d*L,s[6]=_*b+y*I+g*V+d*q,s[10]=_*P+y*F+g*K+d*$,s[14]=_*M+y*N+g*ee+d*G,s[3]=v*T+x*S+E*j+C*L,s[7]=v*b+x*I+E*V+C*q,s[11]=v*P+x*F+E*K+C*$,s[15]=v*M+x*N+E*ee+C*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],p=e[10],m=e[14],_=e[3],y=e[7],g=e[11],d=e[15];return _*(+s*l*h-r*u*h-s*a*p+i*u*p+r*a*m-i*l*m)+y*(+n*l*m-n*u*p+s*o*p-r*o*m+r*u*f-s*l*f)+g*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+d*(-r*a*f-n*l*h+n*a*p+r*o*h-i*o*p+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],p=e[10],m=e[11],_=e[12],y=e[13],g=e[14],d=e[15],v=h*g*u-y*p*u+y*l*m-a*g*m-h*l*d+a*p*d,x=_*p*u-f*g*u-_*l*m+o*g*m+f*l*d-o*p*d,E=f*y*u-_*h*u+_*a*m-o*y*m-f*a*d+o*h*d,C=_*h*l-f*y*l-_*a*p+o*y*p+f*a*g-o*h*g,T=n*v+i*x+r*E+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=v*b,e[1]=(y*p*s-h*g*s-y*r*m+i*g*m+h*r*d-i*p*d)*b,e[2]=(a*g*s-y*l*s+y*r*u-i*g*u-a*r*d+i*l*d)*b,e[3]=(h*l*s-a*p*s-h*r*u+i*p*u+a*r*m-i*l*m)*b,e[4]=x*b,e[5]=(f*g*s-_*p*s+_*r*m-n*g*m-f*r*d+n*p*d)*b,e[6]=(_*l*s-o*g*s-_*r*u+n*g*u+o*r*d-n*l*d)*b,e[7]=(o*p*s-f*l*s+f*r*u-n*p*u-o*r*m+n*l*m)*b,e[8]=E*b,e[9]=(_*h*s-f*y*s-_*i*m+n*y*m+f*i*d-n*h*d)*b,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*d+n*a*d)*b,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*b,e[12]=C*b,e[13]=(f*y*r-_*h*r+_*i*p-n*y*p-f*i*g+n*h*g)*b,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*b,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*p+n*a*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,p=s*u,m=s*f,_=s*h,y=o*f,g=o*h,d=a*h,v=l*u,x=l*f,E=l*h,C=i.x,T=i.y,b=i.z;return r[0]=(1-(y+d))*C,r[1]=(m+E)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(m-E)*T,r[5]=(1-(p+d))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(_+x)*b,r[9]=(g-v)*b,r[10]=(1-(p+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const u=1/s,f=1/o,h=1/a;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let m,_;if(a===ai)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Sl)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),p=(n+e)*u,m=(i+r)*f;let _,y;if(a===ai)_=(o+s)*h,y=-2*h;else if(a===Sl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new k,Rn=new mt,W1=new k(0,0,0),X1=new k(1,1,1),_i=new k,xa=new k,on=new k,cp=new mt,up=new jo;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q1=0;const dp=new k,Lr=new jo,Qn=new mt,va=new k,$s=new k,$1=new k,Y1=new jo,fp=new k(1,0,0),hp=new k(0,1,0),pp=new k(0,0,1),mp={type:"added"},K1={type:"removed"},Dr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Lt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new k,n=new $n,i=new jo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new He}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(fp,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(pp,e)}translateOnAxis(e,n){return dp.copy(e).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fp,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?va.copy(e):va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt($s,va,this.up):Qn.lookAt(va,$s,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K1),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,$1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new k(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new k,Jn=new k,Oc=new k,ei=new k,Ir=new k,Ur=new k,gp=new k,kc=new k,Bc=new k,zc=new k;class Vn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),Jn.subVectors(i,n),Oc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(Jn),l=Nn.dot(Oc),u=Jn.dot(Jn),f=Jn.dot(Oc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(u*l-a*f)*p,_=(o*f-a*l)*p;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),Jn.subVectors(e,n),Nn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Nn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Ur.subVectors(s,i),kc.subVectors(e,i);const l=Ir.dot(kc),u=Ur.dot(kc);if(l<=0&&u<=0)return n.copy(i);Bc.subVectors(e,r);const f=Ir.dot(Bc),h=Ur.dot(Bc);if(f>=0&&h<=f)return n.copy(r);const p=l*h-f*u;if(p<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ir,o);zc.subVectors(e,s);const m=Ir.dot(zc),_=Ur.dot(zc);if(_>=0&&m<=_)return n.copy(s);const y=m*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Ur,a);const g=f*_-m*h;if(g<=0&&h-f>=0&&m-_>=0)return gp.subVectors(s,r),a=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(gp,a);const d=1/(g+y+p);return o=y*d,a=p*d,n.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=rf(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jc(o,s,e+1/3),this.g=jc(o,s,e),this.b=jc(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zt){const i=jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return nt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Xt(zt.r*255,0,255))*65536+Math.round(Xt(zt.g*255,0,255))*256+Math.round(Xt(zt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Zt){nt.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+n,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(_a);const i=ho(yi.h,_a.h,n),r=ho(yi.s,_a.s,n),s=ho(yi.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Xe;Xe.NAMES=jx;let Z1=0;class wr extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=fs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ju&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hx extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new k,ya=new $e;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=np,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return O1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==np&&(e.usage=this.usage),e}}class Vx extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gx extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Q1=0;const gn=new mt,Hc=new Lt,Fr=new k,an=new Ho,Ys=new Ho,bt=new k;class kn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Gx:Vx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(an.min,Ys.min),an.expandByPoint(bt),bt.addVectors(an.max,Ys.max),an.expandByPoint(bt)):(an.expandByPoint(Ys.min),an.expandByPoint(Ys.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)bt.fromBufferAttribute(a,u),l&&(Fr.fromBufferAttribute(e,u),bt.add(Fr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const u=new k,f=new k,h=new k,p=new $e,m=new $e,_=new $e,y=new k,g=new k;function d(P,M,S){u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),p.fromBufferAttribute(s,P),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),f.sub(u),h.sub(u),m.sub(p),_.sub(p);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(I),a[P].add(y),a[M].add(y),a[S].add(y),l[P].add(g),l[M].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const S=v[P],I=S.start,F=S.count;for(let N=I,j=I+F;N<j;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new k,E=new k,C=new k,T=new k;function b(P){C.fromBufferAttribute(r,P),T.copy(C);const M=a[P];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),E.crossVectors(T,M);const I=E.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,M=v.length;P<M;++P){const S=v[P],I=S.start,F=S.count;for(let N=I,j=I+F;N<j;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,f=new k,h=new k;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,p=new u.constructor(l.length*f);let m=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let d=0;d<f;d++)p[_++]=u[m++]}return new qn(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const p=u[f],m=e(p,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,p=u.length;h<p;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,m=h.length;p<m;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xp=new mt,Qi=new Bx,Sa=new Vl,vp=new k,Or=new k,kr=new k,Br=new k,Vc=new k,Ea=new k,Ma=new $e,wa=new $e,Aa=new $e,_p=new k,yp=new k,Sp=new k,ba=new k,Ta=new k;class ct extends Lt{constructor(e=new kn,n=new Hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Vc.fromBufferAttribute(h,e),o?Ea.addScaledVector(Vc,f):Ea.addScaledVector(Vc.sub(n),f))}n.add(Ea)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(Sa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Sa,vp)===null||Qi.origin.distanceToSquared(vp)>(e.far-e.near)**2))&&(xp.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(xp),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){const g=p[_],d=o[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let E=v,C=x;E<C;E+=3){const T=a.getX(E),b=a.getX(E+1),P=a.getX(E+2);r=Ca(this,d,e,i,u,f,h,T,b,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=_,d=y;g<d;g+=3){const v=a.getX(g),x=a.getX(g+1),E=a.getX(g+2);r=Ca(this,o,e,i,u,f,h,v,x,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){const g=p[_],d=o[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=v,C=x;E<C;E+=3){const T=E,b=E+1,P=E+2;r=Ca(this,d,e,i,u,f,h,T,b,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=_,d=y;g<d;g+=3){const v=g,x=g+1,E=g+2;r=Ca(this,o,e,i,u,f,h,v,x,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function J1(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hi,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ta);return u<n.near||u>n.far?null:{distance:u,point:Ta.clone(),object:t}}function Ca(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Or),t.getVertexPosition(l,kr),t.getVertexPosition(u,Br);const f=J1(t,e,n,i,Or,kr,Br,ba);if(f){r&&(Ma.fromBufferAttribute(r,a),wa.fromBufferAttribute(r,l),Aa.fromBufferAttribute(r,u),f.uv=Vn.getInterpolation(ba,Or,kr,Br,Ma,wa,Aa,new $e)),s&&(Ma.fromBufferAttribute(s,a),wa.fromBufferAttribute(s,l),Aa.fromBufferAttribute(s,u),f.uv1=Vn.getInterpolation(ba,Or,kr,Br,Ma,wa,Aa,new $e)),o&&(_p.fromBufferAttribute(o,a),yp.fromBufferAttribute(o,l),Sp.fromBufferAttribute(o,u),f.normal=Vn.getInterpolation(ba,Or,kr,Br,_p,yp,Sp,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Vn.getNormal(Or,kr,Br,h.normal),f.face=h}return f}class xn extends kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let p=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2));function _(y,g,d,v,x,E,C,T,b,P,M){const S=E/b,I=C/P,F=E/2,N=C/2,j=T/2,V=b+1,K=P+1;let ee=0,L=0;const q=new k;for(let $=0;$<K;$++){const G=$*I-N;for(let fe=0;fe<V;fe++){const ve=fe*S-F;q[y]=ve*v,q[g]=G*x,q[d]=j,u.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[d]=T>0?1:-1,f.push(q.x,q.y,q.z),h.push(fe/b),h.push(1-$/P),ee+=1}}for(let $=0;$<P;$++)for(let G=0;G<b;G++){const fe=p+G+V*$,ve=p+G+V*($+1),H=p+(G+1)+V*($+1),te=p+(G+1)+V*$;l.push(fe,ve,te),l.push(ve,H,te),L+=6}a.addGroup(m,L,M),m+=L,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function eS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const tS={clone:As,merge:Gt};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xx extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new k,Ep=new $e,Mp=new $e;class yn extends Xx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,Ep,Mp),n.subVectors(Mp,Ep)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,jr=1;class rS extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(zr,jr,e,n);r.layers=this.layers,this.add(r);const s=new yn(zr,jr,e,n);s.layers=this.layers,this.add(s);const o=new yn(zr,jr,e,n);o.layers=this.layers,this.add(o);const a=new yn(zr,jr,e,n);a.layers=this.layers,this.add(a);const l=new yn(zr,jr,e,n);l.layers=this.layers,this.add(l);const u=new yn(zr,jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qx extends $t{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sS extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xn(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ki});s.uniforms.tEquirect.value=n;const o=new ct(r,s),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=In),new rS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Gc=new k,oS=new k,aS=new He;class rr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(oS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aS.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Vl,Ra=new k;class sf{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],m=r[8],_=r[9],y=r[10],g=r[11],d=r[12],v=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,p-u,g-m,E-d).normalize(),i[1].setComponents(l+s,p+u,g+m,E+d).normalize(),i[2].setComponents(l+o,p+f,g+_,E+v).normalize(),i[3].setComponents(l-o,p-f,g-_,E-v).normalize(),i[4].setComponents(l-a,p-h,g-y,E-x).normalize(),n===ai)i[5].setComponents(l+a,p+h,g+y,E+x).normalize();else if(n===Sl)i[5].setComponents(a,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $x(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,p=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&p.length===0&&t.bufferSubData(u,0,f),p.length!==0){for(let m=0,_=p.length;m<_;m++){const y=p[m];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Vo extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,p=n/l,m=[],_=[],y=[],g=[];for(let d=0;d<f;d++){const v=d*p-o;for(let x=0;x<u;x++){const E=x*h-s;_.push(E,-v,0),y.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,E=v+u*(d+1),C=v+1+u*(d+1),T=v+1+u*d;m.push(x,E,T),m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ES=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:dS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:xS,batching_vertex:vS,begin_vertex:_S,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:ES,bumpmap_pars_fragment:MS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:TS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:NS,color_vertex:PS,common:LS,cube_uv_reflection_fragment:DS,defaultnormal_vertex:IS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:kS,colorspace_fragment:BS,colorspace_pars_fragment:zS,envmap_fragment:jS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:tE,envmap_vertex:WS,fog_vertex:XS,fog_pars_vertex:qS,fog_fragment:$S,fog_pars_fragment:YS,gradientmap_pars_fragment:KS,lightmap_pars_fragment:ZS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:JS,lights_pars_begin:eE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:aE,lights_fragment_begin:lE,lights_fragment_maps:cE,lights_fragment_end:uE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:xE,map_particle_pars_fragment:vE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:yE,morphinstance_vertex:SE,morphcolor_vertex:EE,morphnormal_vertex:ME,morphtarget_pars_vertex:wE,morphtarget_vertex:AE,normal_fragment_begin:bE,normal_fragment_maps:TE,normal_pars_fragment:CE,normal_pars_vertex:RE,normal_vertex:NE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:FE,packing:OE,premultiplied_alpha_fragment:kE,project_vertex:BE,dithering_fragment:zE,dithering_pars_fragment:jE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:WE,shadowmap_vertex:XE,shadowmask_pars_fragment:qE,skinbase_vertex:$E,skinning_pars_vertex:YE,skinning_vertex:KE,skinnormal_vertex:ZE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:rM,uv_pars_vertex:sM,uv_vertex:oM,worldpos_vertex:aM,background_vert:lM,background_frag:cM,backgroundCube_vert:uM,backgroundCube_frag:dM,cube_vert:fM,cube_frag:hM,depth_vert:pM,depth_frag:mM,distanceRGBA_vert:gM,distanceRGBA_frag:xM,equirect_vert:vM,equirect_frag:_M,linedashed_vert:yM,linedashed_frag:SM,meshbasic_vert:EM,meshbasic_frag:MM,meshlambert_vert:wM,meshlambert_frag:AM,meshmatcap_vert:bM,meshmatcap_frag:TM,meshnormal_vert:CM,meshnormal_frag:RM,meshphong_vert:NM,meshphong_frag:PM,meshphysical_vert:LM,meshphysical_frag:DM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:FM,points_frag:OM,shadow_vert:kM,shadow_frag:BM,sprite_vert:zM,sprite_frag:jM},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},jn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};jn.physical={uniforms:Gt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Na={r:0,b:0,g:0},er=new $n,HM=new mt;function VM(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,f,h=null,p=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function y(v){let x=!1;const E=_(v);E===null?d(a,l):E&&E.isColor&&(d(E,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function g(v,x){const E=_(x);E&&(E.isCubeTexture||E.mapping===zl)?(f===void 0&&(f=new ct(new xn(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:As(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),er.copy(x.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(er)),f.material.toneMapped=nt.getTransfer(E.colorSpace)!==ot,(h!==E||p!==E.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=E,p=E.version,m=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new ct(new Vo(2,2),new Gi({name:"BackgroundMaterial",uniforms:As(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=nt.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=E,p=E.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,x){v.getRGB(Na,Wx(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:y,addToRenderList:g}}function GM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(S,I,F,N,j){let V=!1;const K=h(N,F,I);s!==K&&(s=K,u(s.object)),V=m(S,N,F,j),V&&_(S,N,F,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,E(S,I,F,N),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,I,F){const N=F.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let V=j[I.id];V===void 0&&(V={},j[I.id]=V);let K=V[N];return K===void 0&&(K=p(l()),V[N]=K),K}function p(S){const I=[],F=[],N=[];for(let j=0;j<n;j++)I[j]=0,F[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:N,object:S,attributes:{},index:null}}function m(S,I,F,N){const j=s.attributes,V=I.attributes;let K=0;const ee=F.getAttributes();for(const L in ee)if(ee[L].location>=0){const $=j[L];let G=V[L];if(G===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),$===void 0||$.attribute!==G||G&&$.data!==G.data)return!0;K++}return s.attributesNum!==K||s.index!==N}function _(S,I,F,N){const j={},V=I.attributes;let K=0;const ee=F.getAttributes();for(const L in ee)if(ee[L].location>=0){let $=V[L];$===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const G={};G.attribute=$,$&&$.data&&(G.data=$.data),j[L]=G,K++}s.attributes=j,s.attributesNum=K,s.index=N}function y(){const S=s.newAttributes;for(let I=0,F=S.length;I<F;I++)S[I]=0}function g(S){d(S,0)}function d(S,I){const F=s.newAttributes,N=s.enabledAttributes,j=s.attributeDivisors;F[S]=1,N[S]===0&&(t.enableVertexAttribArray(S),N[S]=1),j[S]!==I&&(t.vertexAttribDivisor(S,I),j[S]=I)}function v(){const S=s.newAttributes,I=s.enabledAttributes;for(let F=0,N=I.length;F<N;F++)I[F]!==S[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function x(S,I,F,N,j,V,K){K===!0?t.vertexAttribIPointer(S,I,F,j,V):t.vertexAttribPointer(S,I,F,N,j,V)}function E(S,I,F,N){y();const j=N.attributes,V=F.getAttributes(),K=I.defaultAttributeValues;for(const ee in V){const L=V[ee];if(L.location>=0){let q=j[ee];if(q===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const $=q.normalized,G=q.itemSize,fe=e.get(q);if(fe===void 0)continue;const ve=fe.buffer,H=fe.type,te=fe.bytesPerElement,le=H===t.INT||H===t.UNSIGNED_INT||q.gpuType===Cx;if(q.isInterleavedBufferAttribute){const oe=q.data,De=oe.stride,Ae=q.offset;if(oe.isInstancedInterleavedBuffer){for(let O=0;O<L.locationSize;O++)d(L.location+O,oe.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let O=0;O<L.locationSize;O++)g(L.location+O);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let O=0;O<L.locationSize;O++)x(L.location+O,G/L.locationSize,H,$,De*te,(Ae+G/L.locationSize*O)*te,le)}else{if(q.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)d(L.location+oe,q.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<L.locationSize;oe++)g(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let oe=0;oe<L.locationSize;oe++)x(L.location+oe,G/L.locationSize,H,$,G*te,G/L.locationSize*oe*te,le)}}else if(K!==void 0){const $=K[ee];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(L.location,$);break;case 3:t.vertexAttrib3fv(L.location,$);break;case 4:t.vertexAttrib4fv(L.location,$);break;default:t.vertexAttrib1fv(L.location,$)}}}}v()}function C(){P();for(const S in i){const I=i[S];for(const F in I){const N=I[F];for(const j in N)f(N[j].object),delete N[j];delete I[F]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const F in I){const N=I[F];for(const j in N)f(N[j].object),delete N[j];delete I[F]}delete i[S.id]}function b(S){for(const I in i){const F=i[I];if(F[S.id]===void 0)continue;const N=F[S.id];for(const j in N)f(N[j].object),delete N[j];delete F[S.id]}}function P(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function WM(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h;m++)this.render(u[m],f[m]);else{p.multiDrawArraysWEBGL(i,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];n.update(m,i,1)}}function l(u,f,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)o(u[_],f[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,p,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];for(let y=0;y<p.length;y++)n.update(_,i,p[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Gn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===jl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Vi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ri&&!b)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:C}}function qM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||r;return r=p,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,m){const _=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):u();else{const v=s?0:i,x=v*4;let E=d.clippingState||null;l.value=E,E=f(_,p,x,m);for(let C=0;C!==x;++C)E[C]=n[C];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,m,_){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const d=m+y*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,E=m;x!==y;++x,E+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function $M(t){let e=new WeakMap;function n(o,a){return a===ed?o.mapping=Es:a===td&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ed||a===td)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new sS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yx extends Xx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,wp=[.125,.215,.35,.446,.526,.582],ar=20,Wc=new Yx,Ap=new Xe;let Xc=null,qc=0,$c=0,Yc=!1;const sr=(1+Math.sqrt(5))/2,Hr=1/sr,bp=[new k(-sr,Hr,0),new k(sr,Hr,0),new k(-Hr,0,sr),new k(Hr,0,sr),new k(0,sr,-Hr),new k(0,sr,Hr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,qc,$c),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:jl,format:Gn,colorSpace:$i,depthBuffer:!1},r=Cp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YM(s)),this._blurMaterial=KM(s,e,n)}return r}_compileMaterial(e){const n=new ct(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ap),f.toneMapping=Bi,f.autoClear=!1;const m=new Hx({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new ct(new xn,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Ap),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Pa(r,v*x,d>2?x:0,x,x),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bp[(r-s-1)%bp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new ct(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ar-1),y=s/_,g=isFinite(s)?1+Math.floor(f*y):ar;g>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ar}`);const d=[];let v=0;for(let b=0;b<ar;++b){const P=b/y,M=Math.exp(-P*P/2);d.push(M),b===0?v+=M:b<g&&(v+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const E=this._sizeLods[r],C=3*E*(r>x-is?r-x+is:0),T=4*(this._cubeSize-E);Pa(n,C,T,3*E,2*E),l.setRenderTarget(n),l.render(h,Wc)}}function YM(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+wp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-is?l=wp[o-t+is-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,y=3,g=2,d=1,v=new Float32Array(y*_*m),x=new Float32Array(g*_*m),E=new Float32Array(d*_*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,P=T>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(M,y*_*T),x.set(p,g*_*T);const S=[T,T,T,T,T,T];E.set(S,d*_*T)}const C=new kn;C.setAttribute("position",new qn(v,y)),C.setAttribute("uv",new qn(x,g)),C.setAttribute("faceIndex",new qn(E,d)),e.push(C),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KM(t,e,n){const i=new Float32Array(ar),r=new k(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Rp(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Np(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ed||l===td,f=l===Es||l===Ms;if(u||f){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new Tp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Tp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function QM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JM(t,e,n,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const y=p.morphAttributes[_];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const y=m[_];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(h){const p=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let x=0,E=v.length;x<E;x+=3){const C=v[x+0],T=v[x+1],b=v[x+2];p.push(C,T,T,b,b,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let x=0,E=v.length/3-1;x<E;x+=3){const C=x+0,T=x+1,b=x+2;p.push(C,T,T,b,b,C)}}else return;const g=new(Fx(p)?Gx:Vx)(p,1);g.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function f(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function ew(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*o),n.update(m,i,1)}function u(p,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,p*o,_),n.update(m,i,_))}function f(p,m,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_;g++)this.render(p[g]/o,m[g]);else{y.multiDrawElementsWEBGL(i,m,0,s,p,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];n.update(g,i,1)}}function h(p,m,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)u(p[d]/o,m[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=m[v];for(let v=0;v<y.length;v++)n.update(d,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nw(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),g===!0&&(E=3);let C=a.attributes.position.count*E,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*T*4*h),P=new kx(b,C,T,h);P.type=Ri,P.needsUpdate=!0;const M=E*4;for(let I=0;I<h;I++){const F=d[I],N=v[I],j=x[I],V=C*T*4*I;for(let K=0;K<F.count;K++){const ee=K*M;_===!0&&(r.fromBufferAttribute(F,K),b[V+ee+0]=r.x,b[V+ee+1]=r.y,b[V+ee+2]=r.z,b[V+ee+3]=0),y===!0&&(r.fromBufferAttribute(N,K),b[V+ee+4]=r.x,b[V+ee+5]=r.y,b[V+ee+6]=r.z,b[V+ee+7]=0),g===!0&&(r.fromBufferAttribute(j,K),b[V+ee+8]=r.x,b[V+ee+9]=r.y,b[V+ee+10]=r.z,b[V+ee+11]=j.itemSize===4?r.w:1)}}p={count:h,texture:P,size:new $e(C,T)},i.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function iw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Kx extends $t{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:hs,f!==hs&&f!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===hs&&(i=ws),i===void 0&&f===Po&&(i=zo),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Zx=new $t,Qx=new Kx(1,1);Qx.compareFunction=Ux;const Jx=new kx,e0=new V1,t0=new qx,Pp=[],Lp=[],Dp=new Float32Array(16),Ip=new Float32Array(9),Up=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pp[r];if(s===void 0&&(s=new Float32Array(r),Pp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gl(t,e){let n=Lp[e];n===void 0&&(n=new Int32Array(e),Lp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Mt(n,i))return;Up.set(i),t.uniformMatrix2fv(this.addr,!1,Up),wt(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Mt(n,i))return;Ip.set(i),t.uniformMatrix3fv(this.addr,!1,Ip),wt(n,i)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Mt(n,i))return;Dp.set(i),t.uniformMatrix4fv(this.addr,!1,Dp),wt(n,i)}}function dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Qx:Zx;n.setTexture2D(e||s,r)}function yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||e0,r)}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||t0,r)}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jx,r)}function Mw(t){switch(t){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return dw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return xw;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Ew}}function ww(t,e){t.uniform1fv(this.addr,e)}function Aw(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function bw(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function Tw(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function Cw(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rw(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Nw(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pw(t,e){t.uniform1iv(this.addr,e)}function Lw(t,e){t.uniform2iv(this.addr,e)}function Dw(t,e){t.uniform3iv(this.addr,e)}function Iw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Fw(t,e){t.uniform2uiv(this.addr,e)}function Ow(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function Bw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Zx,s[o])}function zw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||e0,s[o])}function jw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||t0,s[o])}function Hw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Jx,s[o])}function Vw(t){switch(t){case 5126:return ww;case 35664:return Aw;case 35665:return bw;case 35666:return Tw;case 35674:return Cw;case 35675:return Rw;case 35676:return Nw;case 5124:case 35670:return Pw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Iw;case 5125:return Uw;case 36294:return Fw;case 36295:return Ow;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Mw(n.type)}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vw(n.type)}}class Xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Fp(t,e){t.seq.push(e),t.map[e.id]=e}function qw(t,e,n){const i=t.name,r=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),o=Kc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fp(n,u===void 0?new Gw(a,t,e):new Ww(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Xw(a),Fp(n,h)),n=h}}}class Xa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);qw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Op(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $w=37297;let Yw=0;function Kw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Zw(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===yl&&n===_l?i="LinearDisplayP3ToLinearSRGB":e===_l&&n===yl&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Hl:return[i,"LinearTransferOETF"];case Zt:case nf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Kw(t.getShaderSource(e),o)}else return r}function Qw(t,e){const n=Zw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Jw(t,e){let n;switch(e){case qy:n="Linear";break;case $y:n="Reinhard";break;case Yy:n="OptimizedCineon";break;case Ax:n="ACESFilmic";break;case Zy:n="AgX";break;case Qy:n="Neutral";break;case Ky:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function eA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function tA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function to(t){return t!==""}function Bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(iA,sA)}const rA=new Map;function sA(t,e){let n=je[e];if(n===void 0){const i=rA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(t){return t.replace(oA,aA)}function aA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case Ms:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wx:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function fA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lA(n),u=cA(n),f=uA(n),h=dA(n),p=fA(n),m=eA(n),_=tA(s),y=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(to).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(to).join(`
`),d.length>0&&(d+=`
`)):(g=[Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),d=[Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?je.tonemapping_pars_fragment:"",n.toneMapping!==Bi?Jw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Qw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),o=rd(o),o=Bp(o,n),o=zp(o,n),a=rd(a),a=Bp(a,n),a=zp(a,n),o=jp(o),a=jp(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+g+o,E=v+d+a,C=Op(r,r.VERTEX_SHADER,x),T=Op(r,r.FRAGMENT_SHADER,E);r.attachShader(y,C),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(T).trim();let V=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,T);else{const ee=kp(r,C,"vertex"),L=kp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+ee+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||j==="")&&(K=!1);K&&(I.diagnostics={runnable:V,programLog:F,vertexShader:{log:N,prefix:g},fragmentShader:{log:j,prefix:d}})}r.deleteShader(C),r.deleteShader(T),P=new Xa(r,y),M=nA(r,y)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,$w)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gA(e),n.set(e,i)),i}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function xA(t,e,n,i,r,s,o){const a=new zx,l=new mA,u=new Set,f=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,F,N){const j=F.fog,V=N.geometry,K=M.isMeshStandardMaterial?F.environment:null,ee=(M.isMeshStandardMaterial?n:e).get(M.envMap||K),L=ee&&ee.mapping===zl?ee.image.height:null,q=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,G=$!==void 0?$.length:0;let fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let ve,H,te,le;if(q){const qe=jn[q];ve=qe.vertexShader,H=qe.fragmentShader}else ve=M.vertexShader,H=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const oe=t.getRenderTarget(),De=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,O=!!M.map,Ke=!!M.matcap,ie=!!ee,Me=!!M.aoMap,ye=!!M.lightMap,Ie=!!M.bumpMap,Ne=!!M.normalMap,Re=!!M.displacementMap,it=!!M.emissiveMap,R=!!M.metalnessMap,w=!!M.roughnessMap,X=M.anisotropy>0,Z=M.clearcoat>0,re=M.dispersion>0,se=M.iridescence>0,we=M.sheen>0,me=M.transmission>0,pe=X&&!!M.anisotropyMap,Oe=Z&&!!M.clearcoatMap,ue=Z&&!!M.clearcoatNormalMap,Ee=Z&&!!M.clearcoatRoughnessMap,We=se&&!!M.iridescenceMap,Ce=se&&!!M.iridescenceThicknessMap,ne=we&&!!M.sheenColorMap,be=we&&!!M.sheenRoughnessMap,Te=!!M.specularMap,tt=!!M.specularColorMap,Ue=!!M.specularIntensityMap,D=me&&!!M.transmissionMap,Q=me&&!!M.thicknessMap,Y=!!M.gradientMap,ce=!!M.alphaMap,de=M.alphaTest>0,Pe=!!M.alphaHash,Qe=!!M.extensions;let Je=Bi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Je=t.toneMapping);const At={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:ve,fragmentShader:H,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ae,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$i,alphaToCoverage:!!M.alphaToCoverage,map:O,matcap:Ke,envMap:ie,envMapMode:ie&&ee.mapping,envMapCubeUVHeight:L,aoMap:Me,lightMap:ye,bumpMap:Ie,normalMap:Ne,displacementMap:p&&Re,emissiveMap:it,normalMapObjectSpace:Ne&&M.normalMapType===f1,normalMapTangentSpace:Ne&&M.normalMapType===Ix,metalnessMap:R,roughnessMap:w,anisotropy:X,anisotropyMap:pe,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,dispersion:re,iridescence:se,iridescenceMap:We,iridescenceThicknessMap:Ce,sheen:we,sheenColorMap:ne,sheenRoughnessMap:be,specularMap:Te,specularColorMap:tt,specularIntensityMap:Ue,transmission:me,transmissionMap:D,thicknessMap:Q,gradientMap:Y,opaque:M.transparent===!1&&M.blending===fs&&M.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Pe,combine:M.combine,mapUv:O&&y(M.map.channel),aoMapUv:Me&&y(M.aoMap.channel),lightMapUv:ye&&y(M.lightMap.channel),bumpMapUv:Ie&&y(M.bumpMap.channel),normalMapUv:Ne&&y(M.normalMap.channel),displacementMapUv:Re&&y(M.displacementMap.channel),emissiveMapUv:it&&y(M.emissiveMap.channel),metalnessMapUv:R&&y(M.metalnessMap.channel),roughnessMapUv:w&&y(M.roughnessMap.channel),anisotropyMapUv:pe&&y(M.anisotropyMap.channel),clearcoatMapUv:Oe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(M.sheenRoughnessMap.channel),specularMapUv:Te&&y(M.specularMap.channel),specularColorMapUv:tt&&y(M.specularColorMap.channel),specularIntensityMapUv:Ue&&y(M.specularIntensityMap.channel),transmissionMapUv:D&&y(M.transmissionMap.channel),thicknessMapUv:Q&&y(M.thicknessMap.channel),alphaMapUv:ce&&y(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ne||X),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(O||ce),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:O&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ri,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=u.has(1),At.vertexUv2s=u.has(2),At.vertexUv3s=u.has(3),u.clear(),At}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function E(M){const S=_[M.type];let I;if(S){const F=jn[S];I=tS.clone(F.uniforms)}else I=M.uniforms;return I}function C(M,S){let I;for(let F=0,N=f.length;F<N;F++){const j=f[F];if(j.cacheKey===S){I=j,++I.usedTimes;break}}return I===void 0&&(I=new hA(t,S,M,s),f.push(I)),I}function T(M){if(--M.usedTimes===0){const S=f.indexOf(M);f[S]=f[f.length-1],f.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:T,releaseShaderCache:b,programs:f,dispose:P}}function vA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _A(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,p,m,_,y,g){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:g},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=g),e++,d}function a(h,p,m,_,y,g){const d=o(h,p,m,_,y,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(h,p,m,_,y,g){const d=o(h,p,m,_,y,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||_A),i.length>1&&i.sort(p||Vp),r.length>1&&r.sort(p||Vp)}function f(){for(let h=e,p=t.length;h<p;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function yA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Gp,t.set(i,[o])):r>=s.length?(o=new Gp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Xe};break;case"SpotLight":n={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MA=0;function wA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AA(t){const e=new SA,n=EA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new mt,o=new mt;function a(u,f){let h=0,p=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,y=0,g=0,d=0,v=0,x=0,E=0,C=0,T=0,b=0,P=0;u.sort(wA);const M=f===!0?Math.PI:1;for(let I=0,F=u.length;I<F;I++){const N=u[I],j=N.color,V=N.intensity,K=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=j.r*V*M,p+=j.g*V*M,m+=j.b*V*M;else if(N.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(N.sh.coefficients[L],V);P++}else if(N.isDirectionalLight){const L=e.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const q=N.shadow,$=n.get(N);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,i.directionalShadow[_]=$,i.directionalShadowMap[_]=ee,i.directionalShadowMatrix[_]=N.shadow.matrix,x++}i.directional[_]=L,_++}else if(N.isSpotLight){const L=e.get(N);L.position.setFromMatrixPosition(N.matrixWorld),L.color.copy(j).multiplyScalar(V*M),L.distance=K,L.coneCos=Math.cos(N.angle),L.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),L.decay=N.decay,i.spot[g]=L;const q=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,q.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[g]=q.matrix,N.castShadow){const $=n.get(N);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,i.spotShadow[g]=$,i.spotShadowMap[g]=ee,C++}g++}else if(N.isRectAreaLight){const L=e.get(N);L.color.copy(j).multiplyScalar(V),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),i.rectArea[d]=L,d++}else if(N.isPointLight){const L=e.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity*M),L.distance=N.distance,L.decay=N.decay,N.castShadow){const q=N.shadow,$=n.get(N);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,i.pointShadow[y]=$,i.pointShadowMap[y]=ee,i.pointShadowMatrix[y]=N.shadow.matrix,E++}i.point[y]=L,y++}else if(N.isHemisphereLight){const L=e.get(N);L.skyColor.copy(N.color).multiplyScalar(V*M),L.groundColor.copy(N.groundColor).multiplyScalar(V*M),i.hemi[v]=L,v++}}d>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=m;const S=i.hash;(S.directionalLength!==_||S.pointLength!==y||S.spotLength!==g||S.rectAreaLength!==d||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==E||S.numSpotShadows!==C||S.numSpotMaps!==T||S.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=d,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,S.directionalLength=_,S.pointLength=y,S.spotLength=g,S.rectAreaLength=d,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=E,S.numSpotShadows=C,S.numSpotMaps=T,S.numLightProbes=P,i.version=MA++)}function l(u,f){let h=0,p=0,m=0,_=0,y=0;const g=f.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(x.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Wp(t){const e=new AA(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(f){e.setup(n,f)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wp(t),e.set(r,[a])):s>=o.length?(a=new Wp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class TA extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CA extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(t,e,n){let i=new sf;const r=new $e,s=new $e,o=new Ct,a=new TA({depthPacking:d1}),l=new CA,u={},f=n.maxTextureSize,h={[Hi]:rn,[rn]:Hi,[ri]:ri},p=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:RA,fragmentShader:NA}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new kn;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ct(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ex;let d=this.type;this.render=function(T,b,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ki),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=d!==ti&&this.type===ti,j=d===ti&&this.type!==ti;for(let V=0,K=T.length;V<K;V++){const ee=T[V],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||N===!0||j===!0){const G=this.type!==ti?{minFilter:Mn,magFilter:Mn}:{};L.map!==null&&L.map.dispose(),L.map=new Sr(r.x,r.y,G),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const $=L.getViewportCount();for(let G=0;G<$;G++){const fe=L.getViewport(G);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),F.viewport(o),L.updateMatrices(ee,G),i=L.getFrustum(),E(b,P,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===ti&&v(L,P),L.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(M,S,I)};function v(T,b){const P=e.update(y);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Sr(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,P,p,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,P,m,y,null)}function x(T,b,P,M){let S=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=S.uuid,N=b.uuid;let j=u[F];j===void 0&&(j={},u[F]=j);let V=j[N];V===void 0&&(V=S.clone(),j[N]=V,b.addEventListener("dispose",C)),S=V}if(S.visible=b.visible,S.wireframe=b.wireframe,M===ti?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=t.properties.get(S);F.light=P}return S}function E(T,b,P,M,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=e.update(T),j=T.material;if(Array.isArray(j)){const V=N.groups;for(let K=0,ee=V.length;K<ee;K++){const L=V[K],q=j[L.materialIndex];if(q&&q.visible){const $=x(T,q,M,S);T.onBeforeShadow(t,T,b,P,N,$,L),t.renderBufferDirect(P,null,N,$,T,L),T.onAfterShadow(t,T,b,P,N,$,L)}}}else if(j.visible){const V=x(T,j,M,S);T.onBeforeShadow(t,T,b,P,N,V,null),t.renderBufferDirect(P,null,N,V,T,null),T.onAfterShadow(t,T,b,P,N,V,null)}}const F=T.children;for(let N=0,j=F.length;N<j;N++)E(F[N],b,P,M,S)}function C(T){T.target.removeEventListener("dispose",C);for(const P in u){const M=u[P],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function LA(t){function e(){let D=!1;const Q=new Ct;let Y=null;const ce=new Ct(0,0,0,0);return{setMask:function(de){Y!==de&&!D&&(t.colorMask(de,de,de,de),Y=de)},setLocked:function(de){D=de},setClear:function(de,Pe,Qe,Je,At){At===!0&&(de*=Je,Pe*=Je,Qe*=Je),Q.set(de,Pe,Qe,Je),ce.equals(Q)===!1&&(t.clearColor(de,Pe,Qe,Je),ce.copy(Q))},reset:function(){D=!1,Y=null,ce.set(-1,0,0,0)}}}function n(){let D=!1,Q=null,Y=null,ce=null;return{setTest:function(de){de?le(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(de){Q!==de&&!D&&(t.depthMask(de),Q=de)},setFunc:function(de){if(Y!==de){switch(de){case ky:t.depthFunc(t.NEVER);break;case By:t.depthFunc(t.ALWAYS);break;case zy:t.depthFunc(t.LESS);break;case xl:t.depthFunc(t.LEQUAL);break;case jy:t.depthFunc(t.EQUAL);break;case Hy:t.depthFunc(t.GEQUAL);break;case Vy:t.depthFunc(t.GREATER);break;case Gy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=de}},setLocked:function(de){D=de},setClear:function(de){ce!==de&&(t.clearDepth(de),ce=de)},reset:function(){D=!1,Q=null,Y=null,ce=null}}}function i(){let D=!1,Q=null,Y=null,ce=null,de=null,Pe=null,Qe=null,Je=null,At=null;return{setTest:function(qe){D||(qe?le(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(qe){Q!==qe&&!D&&(t.stencilMask(qe),Q=qe)},setFunc:function(qe,pn,gt){(Y!==qe||ce!==pn||de!==gt)&&(t.stencilFunc(qe,pn,gt),Y=qe,ce=pn,de=gt)},setOp:function(qe,pn,gt){(Pe!==qe||Qe!==pn||Je!==gt)&&(t.stencilOp(qe,pn,gt),Pe=qe,Qe=pn,Je=gt)},setLocked:function(qe){D=qe},setClear:function(qe){At!==qe&&(t.clearStencil(qe),At=qe)},reset:function(){D=!1,Q=null,Y=null,ce=null,de=null,Pe=null,Qe=null,Je=null,At=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,p=[],m=null,_=!1,y=null,g=null,d=null,v=null,x=null,E=null,C=null,T=new Xe(0,0,0),b=0,P=!1,M=null,S=null,I=null,F=null,N=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=K>=2);let L=null,q={};const $=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),fe=new Ct().fromArray($),ve=new Ct().fromArray(G);function H(D,Q,Y,ce){const de=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(D,Pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<Y;Qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(Q+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Pe}const te={};te[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(xl),Ie(!1),Ne(Ah),le(t.CULL_FACE),Me(ki);function le(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function oe(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function De(D,Q){return f[D]!==Q?(t.bindFramebuffer(D,Q),f[D]=Q,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Q),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ae(D,Q){let Y=p,ce=!1;if(D){Y=h.get(Q),Y===void 0&&(Y=[],h.set(Q,Y));const de=D.textures;if(Y.length!==de.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Qe=de.length;Pe<Qe;Pe++)Y[Pe]=t.COLOR_ATTACHMENT0+Pe;Y.length=de.length,ce=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ce=!0);ce&&t.drawBuffers(Y)}function O(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Ke={[or]:t.FUNC_ADD,[Sy]:t.FUNC_SUBTRACT,[Ey]:t.FUNC_REVERSE_SUBTRACT};Ke[My]=t.MIN,Ke[wy]=t.MAX;const ie={[Ay]:t.ZERO,[by]:t.ONE,[Ty]:t.SRC_COLOR,[Qu]:t.SRC_ALPHA,[Dy]:t.SRC_ALPHA_SATURATE,[Py]:t.DST_COLOR,[Ry]:t.DST_ALPHA,[Cy]:t.ONE_MINUS_SRC_COLOR,[Ju]:t.ONE_MINUS_SRC_ALPHA,[Ly]:t.ONE_MINUS_DST_COLOR,[Ny]:t.ONE_MINUS_DST_ALPHA,[Iy]:t.CONSTANT_COLOR,[Uy]:t.ONE_MINUS_CONSTANT_COLOR,[Fy]:t.CONSTANT_ALPHA,[Oy]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(D,Q,Y,ce,de,Pe,Qe,Je,At,qe){if(D===ki){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(le(t.BLEND),_=!0),D!==yy){if(D!==y||qe!==P){if((g!==or||x!==or)&&(t.blendEquation(t.FUNC_ADD),g=or,x=or),qe)switch(D){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bh:t.blendFunc(t.ONE,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ch:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ch:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,v=null,E=null,C=null,T.set(0,0,0),b=0,y=D,P=qe}return}de=de||Q,Pe=Pe||Y,Qe=Qe||ce,(Q!==g||de!==x)&&(t.blendEquationSeparate(Ke[Q],Ke[de]),g=Q,x=de),(Y!==d||ce!==v||Pe!==E||Qe!==C)&&(t.blendFuncSeparate(ie[Y],ie[ce],ie[Pe],ie[Qe]),d=Y,v=ce,E=Pe,C=Qe),(Je.equals(T)===!1||At!==b)&&(t.blendColor(Je.r,Je.g,Je.b,At),T.copy(Je),b=At),y=D,P=!1}function ye(D,Q){D.side===ri?oe(t.CULL_FACE):le(t.CULL_FACE);let Y=D.side===rn;Q&&(Y=!Y),Ie(Y),D.blending===fs&&D.transparent===!1?Me(ki):Me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){M!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),M=D)}function Ne(D){D!==vy?(le(t.CULL_FACE),D!==S&&(D===Ah?t.cullFace(t.BACK):D===_y?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=D}function Re(D){D!==I&&(V&&t.lineWidth(D),I=D)}function it(D,Q,Y){D?(le(t.POLYGON_OFFSET_FILL),(F!==Q||N!==Y)&&(t.polygonOffset(Q,Y),F=Q,N=Y)):oe(t.POLYGON_OFFSET_FILL)}function R(D){D?le(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function w(D){D===void 0&&(D=t.TEXTURE0+j-1),L!==D&&(t.activeTexture(D),L=D)}function X(D,Q,Y){Y===void 0&&(L===null?Y=t.TEXTURE0+j-1:Y=L);let ce=q[Y];ce===void 0&&(ce={type:void 0,texture:void 0},q[Y]=ce),(ce.type!==D||ce.texture!==Q)&&(L!==Y&&(t.activeTexture(Y),L=Y),t.bindTexture(D,Q||te[D]),ce.type=D,ce.texture=Q)}function Z(){const D=q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(D){fe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function be(D){ve.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function Te(D,Q){let Y=l.get(Q);Y===void 0&&(Y=new WeakMap,l.set(Q,Y));let ce=Y.get(D);ce===void 0&&(ce=t.getUniformBlockIndex(Q,D.name),Y.set(D,ce))}function tt(D,Q){const ce=l.get(Q).get(D);a.get(Q)!==ce&&(t.uniformBlockBinding(Q,ce,D.__bindingPointIndex),a.set(Q,ce))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,q={},f={},h=new WeakMap,p=[],m=null,_=!1,y=null,g=null,d=null,v=null,x=null,E=null,C=null,T=new Xe(0,0,0),b=0,P=!1,M=null,S=null,I=null,F=null,N=null,fe.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:oe,bindFramebuffer:De,drawBuffers:Ae,useProgram:O,setBlending:Me,setMaterial:ye,setFlipSided:Ie,setCullFace:Ne,setLineWidth:Re,setPolygonOffset:it,setScissorTest:R,activeTexture:w,bindTexture:X,unbindTexture:Z,compressedTexImage2D:re,compressedTexImage3D:se,texImage2D:We,texImage3D:Ce,updateUBOMapping:Te,uniformBlockBinding:tt,texStorage2D:ue,texStorage3D:Ee,texSubImage2D:we,texSubImage3D:me,compressedTexSubImage2D:pe,compressedTexSubImage3D:Oe,scissor:ne,viewport:be,reset:Ue}}function DA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,f=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return m?new OffscreenCanvas(R,w):Do("canvas")}function y(R,w,X){let Z=1;const re=it(R);if((re.width>X||re.height>X)&&(Z=X/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(Z*re.width),we=Math.floor(Z*re.height);h===void 0&&(h=_(se,we));const me=w?_(se,we):h;return me.width=se,me.height=we,me.getContext("2d").drawImage(R,0,0,se,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+se+"x"+we+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==Mn&&R.minFilter!==In}function d(R){t.generateMipmap(R)}function v(R,w,X,Z,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=w;if(w===t.RED&&(X===t.FLOAT&&(se=t.R32F),X===t.HALF_FLOAT&&(se=t.R16F),X===t.UNSIGNED_BYTE&&(se=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(se=t.R8UI),X===t.UNSIGNED_SHORT&&(se=t.R16UI),X===t.UNSIGNED_INT&&(se=t.R32UI),X===t.BYTE&&(se=t.R8I),X===t.SHORT&&(se=t.R16I),X===t.INT&&(se=t.R32I)),w===t.RG&&(X===t.FLOAT&&(se=t.RG32F),X===t.HALF_FLOAT&&(se=t.RG16F),X===t.UNSIGNED_BYTE&&(se=t.RG8)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(se=t.RG8UI),X===t.UNSIGNED_SHORT&&(se=t.RG16UI),X===t.UNSIGNED_INT&&(se=t.RG32UI),X===t.BYTE&&(se=t.RG8I),X===t.SHORT&&(se=t.RG16I),X===t.INT&&(se=t.RG32I)),w===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),w===t.RGBA){const we=re?vl:nt.getTransfer(Z);X===t.FLOAT&&(se=t.RGBA32F),X===t.HALF_FLOAT&&(se=t.RGBA16F),X===t.UNSIGNED_BYTE&&(se=we===ot?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){const w=R.target;w.removeEventListener("dispose",E),T(w),w.isVideoTexture&&f.delete(w)}function C(R){const w=R.target;w.removeEventListener("dispose",C),P(w)}function T(R){const w=i.get(R);if(w.__webglInit===void 0)return;const X=R.source,Z=p.get(X);if(Z){const re=Z[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(R),Object.keys(Z).length===0&&p.delete(X)}i.remove(R)}function b(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const X=R.source,Z=p.get(X);delete Z[w.__cacheKey],o.memory.textures--}function P(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let re=0;re<w.__webglFramebuffer[Z].length;re++)t.deleteFramebuffer(w.__webglFramebuffer[Z][re]);else t.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)t.deleteFramebuffer(w.__webglFramebuffer[Z]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=R.textures;for(let Z=0,re=X.length;Z<re;Z++){const se=i.get(X[Z]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(X[Z])}i.remove(R)}let M=0;function S(){M=0}function I(){const R=M;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),M+=1,R}function F(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function N(R,w){const X=i.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,R,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function j(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){fe(X,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function V(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){fe(X,R,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function K(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ve(X,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const ee={[nd]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},L={[Mn]:t.NEAREST,[Jy]:t.NEAREST_MIPMAP_NEAREST,[ca]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},q={[h1]:t.NEVER,[_1]:t.ALWAYS,[p1]:t.LESS,[Ux]:t.LEQUAL,[m1]:t.EQUAL,[v1]:t.GEQUAL,[g1]:t.GREATER,[x1]:t.NOTEQUAL};function $(R,w){if(w.type===Ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===Sc||w.magFilter===ca||w.magFilter===hr||w.minFilter===In||w.minFilter===Sc||w.minFilter===ca||w.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ee[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ee[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ee[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,L[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==ca&&w.minFilter!==hr||w.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function G(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const Z=w.source;let re=p.get(Z);re===void 0&&(re={},p.set(Z,re));const se=F(w);if(se!==R.__cacheKey){re[se]===void 0&&(re[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[se].usedTimes++;const we=re[R.__cacheKey];we!==void 0&&(re[R.__cacheKey].usedTimes--,we.usedTimes===0&&b(w)),R.__cacheKey=se,R.__webglTexture=re[se].texture}return X}function fe(R,w,X){let Z=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=t.TEXTURE_3D);const re=G(R,w),se=w.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+X);const we=i.get(se);if(se.version!==we.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const me=nt.getPrimaries(nt.workingColorSpace),pe=w.colorSpace===bi?null:nt.getPrimaries(w.colorSpace),Oe=w.colorSpace===bi||me===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ue=y(w.image,!1,r.maxTextureSize);ue=Re(w,ue);const Ee=s.convert(w.format,w.colorSpace),We=s.convert(w.type);let Ce=v(w.internalFormat,Ee,We,w.colorSpace,w.isVideoTexture);$(Z,w);let ne;const be=w.mipmaps,Te=w.isVideoTexture!==!0,tt=we.__version===void 0||re===!0,Ue=se.dataReady,D=x(w,ue);if(w.isDepthTexture)Ce=t.DEPTH_COMPONENT16,w.type===Ri?Ce=t.DEPTH_COMPONENT32F:w.type===ws?Ce=t.DEPTH_COMPONENT24:w.type===zo&&(Ce=t.DEPTH24_STENCIL8),tt&&(Te?n.texStorage2D(t.TEXTURE_2D,1,Ce,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Ee,We,null));else if(w.isDataTexture)if(be.length>0){Te&&tt&&n.texStorage2D(t.TEXTURE_2D,D,Ce,be[0].width,be[0].height);for(let Q=0,Y=be.length;Q<Y;Q++)ne=be[Q],Te?Ue&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ne.width,ne.height,Ee,We,ne.data):n.texImage2D(t.TEXTURE_2D,Q,Ce,ne.width,ne.height,0,Ee,We,ne.data);w.generateMipmaps=!1}else Te?(tt&&n.texStorage2D(t.TEXTURE_2D,D,Ce,ue.width,ue.height),Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,We,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Ee,We,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Te&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,Ce,be[0].width,be[0].height,ue.depth);for(let Q=0,Y=be.length;Q<Y;Q++)ne=be[Q],w.format!==Gn?Ee!==null?Te?Ue&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,ue.depth,Ee,ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Ce,ne.width,ne.height,ue.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,ue.depth,Ee,We,ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Ce,ne.width,ne.height,ue.depth,0,Ee,We,ne.data)}else{Te&&tt&&n.texStorage2D(t.TEXTURE_2D,D,Ce,be[0].width,be[0].height);for(let Q=0,Y=be.length;Q<Y;Q++)ne=be[Q],w.format!==Gn?Ee!==null?Te?Ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ne.width,ne.height,Ee,ne.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Ce,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ue&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ne.width,ne.height,Ee,We,ne.data):n.texImage2D(t.TEXTURE_2D,Q,Ce,ne.width,ne.height,0,Ee,We,ne.data)}else if(w.isDataArrayTexture)Te?(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,Ce,ue.width,ue.height,ue.depth),Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,We,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,Ee,We,ue.data);else if(w.isData3DTexture)Te?(tt&&n.texStorage3D(t.TEXTURE_3D,D,Ce,ue.width,ue.height,ue.depth),Ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,We,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,Ee,We,ue.data);else if(w.isFramebufferTexture){if(tt)if(Te)n.texStorage2D(t.TEXTURE_2D,D,Ce,ue.width,ue.height);else{let Q=ue.width,Y=ue.height;for(let ce=0;ce<D;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ce,Q,Y,0,Ee,We,null),Q>>=1,Y>>=1}}else if(be.length>0){if(Te&&tt){const Q=it(be[0]);n.texStorage2D(t.TEXTURE_2D,D,Ce,Q.width,Q.height)}for(let Q=0,Y=be.length;Q<Y;Q++)ne=be[Q],Te?Ue&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ee,We,ne):n.texImage2D(t.TEXTURE_2D,Q,Ce,Ee,We,ne);w.generateMipmaps=!1}else if(Te){if(tt){const Q=it(ue);n.texStorage2D(t.TEXTURE_2D,D,Ce,Q.width,Q.height)}Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,We,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ce,Ee,We,ue);g(w)&&d(Z),we.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ve(R,w,X){if(w.image.length!==6)return;const Z=G(R,w),re=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const se=i.get(re);if(re.version!==se.__version||Z===!0){n.activeTexture(t.TEXTURE0+X);const we=nt.getPrimaries(nt.workingColorSpace),me=w.colorSpace===bi?null:nt.getPrimaries(w.colorSpace),pe=w.colorSpace===bi||we===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let Y=0;Y<6;Y++)!Oe&&!ue?Ee[Y]=y(w.image[Y],!0,r.maxCubemapSize):Ee[Y]=ue?w.image[Y].image:w.image[Y],Ee[Y]=Re(w,Ee[Y]);const We=Ee[0],Ce=s.convert(w.format,w.colorSpace),ne=s.convert(w.type),be=v(w.internalFormat,Ce,ne,w.colorSpace),Te=w.isVideoTexture!==!0,tt=se.__version===void 0||Z===!0,Ue=re.dataReady;let D=x(w,We);$(t.TEXTURE_CUBE_MAP,w);let Q;if(Oe){Te&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,be,We.width,We.height);for(let Y=0;Y<6;Y++){Q=Ee[Y].mipmaps;for(let ce=0;ce<Q.length;ce++){const de=Q[ce];w.format!==Gn?Ce!==null?Te?Ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,de.width,de.height,Ce,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,de.width,de.height,Ce,ne,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,be,de.width,de.height,0,Ce,ne,de.data)}}}else{if(Q=w.mipmaps,Te&&tt){Q.length>0&&D++;const Y=it(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ue){Te?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee[Y].width,Ee[Y].height,Ce,ne,Ee[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,be,Ee[Y].width,Ee[Y].height,0,Ce,ne,Ee[Y].data);for(let ce=0;ce<Q.length;ce++){const Pe=Q[ce].image[Y].image;Te?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Pe.width,Pe.height,Ce,ne,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,be,Pe.width,Pe.height,0,Ce,ne,Pe.data)}}else{Te?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,ne,Ee[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,be,Ce,ne,Ee[Y]);for(let ce=0;ce<Q.length;ce++){const de=Q[ce];Te?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ce,ne,de.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,be,Ce,ne,de.image[Y])}}}g(w)&&d(t.TEXTURE_CUBE_MAP),se.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function H(R,w,X,Z,re,se){const we=s.convert(X.format,X.colorSpace),me=s.convert(X.type),pe=v(X.internalFormat,we,me,X.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>se),Ee=Math.max(1,w.height>>se);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,se,pe,ue,Ee,w.depth,0,we,me,null):n.texImage2D(re,se,pe,ue,Ee,0,we,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ie(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,re,i.get(X).__webglTexture,0,ye(w)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,re,i.get(X).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let Z=t.DEPTH_COMPONENT24;if(X||Ie(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Ri?Z=t.DEPTH_COMPONENT32F:re.type===ws&&(Z=t.DEPTH_COMPONENT24));const se=ye(w);Ie(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,Z,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,Z,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const Z=ye(w);X&&Ie(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,w.width,w.height):Ie(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Z=w.textures;for(let re=0;re<Z.length;re++){const se=Z[re],we=s.convert(se.format,se.colorSpace),me=s.convert(se.type),pe=v(se.internalFormat,we,me,se.colorSpace),Oe=ye(w);X&&Ie(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,pe,w.width,w.height):Ie(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const Z=i.get(w.depthTexture).__webglTexture,re=ye(w);if(w.depthTexture.format===hs)Ie(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Po)Ie(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function oe(R){const w=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]=t.createRenderbuffer(),te(w.__webglDepthbuffer[Z],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),te(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,w,X){const Z=i.get(R);w!==void 0&&H(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&oe(R)}function Ae(R){const w=R.texture,X=i.get(R),Z=i.get(w);R.addEventListener("dispose",C);const re=R.textures,se=R.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=w.version,o.memory.textures++),se){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let pe=0;pe<w.mipmaps.length;pe++)X.__webglFramebuffer[me][pe]=t.createFramebuffer()}else X.__webglFramebuffer[me]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)X.__webglFramebuffer[me]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(we)for(let me=0,pe=re.length;me<pe;me++){const Oe=i.get(re[me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ie(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const pe=re[me];X.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[me]);const Oe=s.convert(pe.format,pe.colorSpace),ue=s.convert(pe.type),Ee=v(pe.internalFormat,Oe,ue,pe.colorSpace,R.isXRRenderTarget===!0),We=ye(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ee,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,X.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),te(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),$(t.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)H(X.__webglFramebuffer[me][pe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,pe);else H(X.__webglFramebuffer[me],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(w)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let me=0,pe=re.length;me<pe;me++){const Oe=re[me],ue=i.get(Oe);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),$(t.TEXTURE_2D,Oe),H(X.__webglFramebuffer,R,Oe,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),g(Oe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Z.__webglTexture),$(me,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)H(X.__webglFramebuffer[pe],R,w,t.COLOR_ATTACHMENT0,me,pe);else H(X.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,me,0);g(w)&&d(me),n.unbindTexture()}R.depthBuffer&&oe(R)}function O(R){const w=R.textures;for(let X=0,Z=w.length;X<Z;X++){const re=w[X];if(g(re)){const se=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(re).__webglTexture;n.bindTexture(se,we),d(se),n.unbindTexture()}}}const Ke=[],ie=[];function Me(R){if(R.samples>0){if(Ie(R)===!1){const w=R.textures,X=R.width,Z=R.height;let re=t.COLOR_BUFFER_BIT;const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),me=w.length>1;if(me)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[pe]);const Oe=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Oe,0)}t.blitFramebuffer(0,0,X,Z,0,0,X,Z,re,t.NEAREST),l===!0&&(Ke.length=0,ie.length=0,Ke.push(t.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push(se),ie.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,we.__webglColorRenderbuffer[pe]);const Oe=i.get(w[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function ye(R){return Math.min(r.maxSamples,R.samples)}function Ie(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(R){const w=o.render.frame;f.get(R)!==w&&(f.set(R,w),R.update())}function Re(R,w){const X=R.colorSpace,Z=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==$i&&X!==bi&&(nt.getTransfer(X)===ot?(Z!==Gn||re!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=N,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=De,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ie}function IA(t,e){function n(i,r=bi){let s;const o=nt.getTransfer(r);if(i===Vi)return t.UNSIGNED_BYTE;if(i===Rx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e1)return t.BYTE;if(i===t1)return t.SHORT;if(i===Tx)return t.UNSIGNED_SHORT;if(i===Cx)return t.INT;if(i===ws)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===jl)return t.HALF_FLOAT;if(i===i1)return t.ALPHA;if(i===r1)return t.RGB;if(i===Gn)return t.RGBA;if(i===s1)return t.LUMINANCE;if(i===o1)return t.LUMINANCE_ALPHA;if(i===hs)return t.DEPTH_COMPONENT;if(i===Po)return t.DEPTH_STENCIL;if(i===a1)return t.RED;if(i===Px)return t.RED_INTEGER;if(i===l1)return t.RG;if(i===Lx)return t.RG_INTEGER;if(i===Dx)return t.RGBA_INTEGER;if(i===Ec||i===Mc||i===wc||i===Ac)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rh||i===Nh||i===Ph||i===Lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Ih||i===Uh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dh||i===Ih)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===jh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===qh||i===$h||i===Yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===Kh||i===Zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bc)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===c1||i===Qh||i===Jh||i===ep)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ep)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class UA extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FA={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(u,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&p>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Gi({vertexShader:OA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ct(new Vo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class zA extends Ns{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,p=null,m=null,_=null;const y=new BA,g=n.getContextAttributes();let d=null,v=null;const x=[],E=[],C=new $e;let T=null;const b=new yn;b.layers.enable(1),b.viewport=new Ct;const P=new yn;P.layers.enable(2),P.viewport=new Ct;const M=[b,P],S=new UA;S.layers.enable(1),S.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=x[H];return te===void 0&&(te=new Zc,x[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=x[H];return te===void 0&&(te=new Zc,x[H]=te),te.getGripSpace()},this.getHand=function(H){let te=x[H];return te===void 0&&(te=new Zc,x[H]=te),te.getHandSpace()};function N(H){const te=E.indexOf(H.inputSource);if(te===-1)return;const le=x[te];le!==void 0&&(le.update(H.inputSource,H.frame,u||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",V);for(let H=0;H<x.length;H++){const te=E[H];te!==null&&(E[H]=null,x[H].disconnect(te))}I=null,F=null,y.reset(),e.setRenderTarget(d),m=null,p=null,h=null,r=null,v=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",j),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Sr(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,le=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?Po:hs,le=g.stencil?zo:ws);const De={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(De),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Sr(p.textureWidth,p.textureHeight,{format:Gn,type:Vi,depthTexture:new Kx(p.textureWidth,p.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(H){for(let te=0;te<H.removed.length;te++){const le=H.removed[te],oe=E.indexOf(le);oe>=0&&(E[oe]=null,x[oe].disconnect(le))}for(let te=0;te<H.added.length;te++){const le=H.added[te];let oe=E.indexOf(le);if(oe===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=E.length){E.push(le),oe=Ae;break}else if(E[Ae]===null){E[Ae]=le,oe=Ae;break}if(oe===-1)break}const De=x[oe];De&&De.connect(le)}}const K=new k,ee=new k;function L(H,te,le){K.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(le.matrixWorld);const oe=K.distanceTo(ee),De=te.projectionMatrix.elements,Ae=le.projectionMatrix.elements,O=De[14]/(De[10]-1),Ke=De[14]/(De[10]+1),ie=(De[9]+1)/De[5],Me=(De[9]-1)/De[5],ye=(De[8]-1)/De[0],Ie=(Ae[8]+1)/Ae[0],Ne=O*ye,Re=O*Ie,it=oe/(-ye+Ie),R=it*-ye;te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(R),H.translateZ(it),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const w=O+it,X=Ke+it,Z=Ne-R,re=Re+(oe-R),se=ie*Ke/X*w,we=Me*Ke/X*w;H.projectionMatrix.makePerspective(Z,re,se,we,w,X),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function q(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),S.near=P.near=b.near=H.near,S.far=P.far=b.far=H.far,(I!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,F=S.far,b.near=I,b.far=F,P.near=I,P.far=F,b.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const te=H.parent,le=S.cameras;q(S,te);for(let oe=0;oe<le.length;oe++)q(le[oe],te);le.length===2?L(S,b,P):S.projectionMatrix.copy(b.projectionMatrix),$(H,S,te)};function $(H,te,le){le===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Lo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let G=null;function fe(H,te){if(f=te.getViewerPose(u||o),_=te,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let oe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ae=0;Ae<le.length;Ae++){const O=le[Ae];let Ke=null;if(m!==null)Ke=m.getViewport(O);else{const Me=h.getViewSubImage(p,O);Ke=Me.viewport,Ae===0&&(e.setRenderTargetTextures(v,Me.colorTexture,p.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(v))}let ie=M[Ae];ie===void 0&&(ie=new yn,ie.layers.enable(Ae),ie.viewport=new Ct,M[Ae]=ie),ie.matrix.fromArray(O.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(O.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ae===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(ie)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ae=h.getDepthInformation(le[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let le=0;le<x.length;le++){const oe=E[le],De=x[le];oe!==null&&De!==void 0&&De.update(oe,te,u||o)}y.render(e,S),G&&G(H,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const ve=new $x;ve.setAnimationLoop(fe),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}const tr=new $n,jA=new mt;function HA(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Wx(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d)):d.isMeshStandardMaterial?(s(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,E)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,x):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===rn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===rn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,E=v.envMapRotation;if(x&&(g.envMap.value=x,tr.copy(E),tr.x*=-1,tr.y*=-1,tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(tr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*C,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const E=x.program;i.uniformBlockBinding(v,E)}function u(v,x){let E=r[v.id];E===void 0&&(_(v),E=f(v),r[v.id]=E,v.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(p(v),s[v.id]=T)}function f(v){const x=h();v.__bindingPointIndex=x;const E=t.createBuffer(),C=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],E=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,b=E.length;T<b;T++){const P=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,S=P.length;M<S;M++){const I=P[M];if(m(I,T,M,C)===!0){const F=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let V=0;V<N.length;V++){const K=N[V],ee=y(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,F+j,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,E,C){const T=v.value,b=x+"_"+E;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{const P=C[b];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[b]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const x=v.uniforms;let E=0;const C=16;for(let b=0,P=x.length;b<P;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,I=M.length;S<I;S++){const F=M[S],N=Array.isArray(F.value)?F.value:[F.value];for(let j=0,V=N.length;j<V;j++){const K=N[j],ee=y(K),L=E%C;L!==0&&C-L<ee.boundary&&(E+=C-L),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ee.storage}}}const T=E%C;return T>0&&(E+=C-T),v.__size=E,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class GA{constructor(e={}){const{canvas:n=F1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const x=this;let E=!1,C=0,T=0,b=null,P=-1,M=null;const S=new Ct,I=new Ct;let F=null;const N=new Xe(0);let j=0,V=n.width,K=n.height,ee=1,L=null,q=null;const $=new Ct(0,0,V,K),G=new Ct(0,0,V,K);let fe=!1;const ve=new sf;let H=!1,te=!1;const le=new mt,oe=new k,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return b===null?ee:1}let O=i;function Ke(A,U){return n.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",D,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",Y,!1),O===null){const U="webgl2";if(O=Ke(U,A),O===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,Me,ye,Ie,Ne,Re,it,R,w,X,Z,re,se,we,me,pe,Oe,ue,Ee,We,Ce,ne,be,Te;function tt(){ie=new QM(O),ie.init(),ne=new IA(O,ie),Me=new XM(O,ie,e,ne),ye=new LA(O),Ie=new tw(O),Ne=new vA,Re=new DA(O,ie,ye,Ne,Me,ne,Ie),it=new $M(x),R=new ZM(x),w=new lS(O),be=new GM(O,w),X=new JM(O,w,Ie,be),Z=new iw(O,X,w,Ie),Ee=new nw(O,Me,Re),pe=new qM(Ne),re=new xA(x,it,R,ie,Me,be,pe),se=new HA(x,Ne),we=new yA,me=new bA(ie),ue=new VM(x,it,R,ye,Z,p,l),Oe=new PA(x,Z,Me),Te=new VA(O,Ie,Me,ye),We=new WM(O,ie,Ie),Ce=new ew(O,ie,Ie),Ie.programs=re.programs,x.capabilities=Me,x.extensions=ie,x.properties=Ne,x.renderLists=we,x.shadowMap=Oe,x.state=ye,x.info=Ie}tt();const Ue=new zA(x,O);this.xr=Ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(V,K,!1))},this.getSize=function(A){return A.set(V,K)},this.setSize=function(A,U,W=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,K=U,n.width=Math.floor(A*ee),n.height=Math.floor(U*ee),W===!0&&(n.style.width=A+"px",n.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(V*ee,K*ee).floor()},this.setDrawingBufferSize=function(A,U,W){V=A,K=U,ee=W,n.width=Math.floor(A*W),n.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,U,W,B){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,U,W,B),ye.viewport(S.copy($).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,U,W,B){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,U,W,B),ye.scissor(I.copy(G).multiplyScalar(ee).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){ye.setScissorTest(fe=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,U=!0,W=!0){let B=0;if(A){let z=!1;if(b!==null){const ge=b.texture.format;z=ge===Dx||ge===Lx||ge===Px}if(z){const ge=b.texture.type,_e=ge===Vi||ge===ws||ge===Tx||ge===zo||ge===Rx||ge===Nx,Se=ue.getClearColor(),Le=ue.getClearAlpha(),ke=Se.r,ze=Se.g,Ve=Se.b;_e?(m[0]=ke,m[1]=ze,m[2]=Ve,m[3]=Le,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=ke,_[1]=ze,_[2]=Ve,_[3]=Le,O.clearBufferiv(O.COLOR,0,_))}else B|=O.COLOR_BUFFER_BIT}U&&(B|=O.DEPTH_BUFFER_BIT),W&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",D,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",Y,!1),we.dispose(),me.dispose(),Ne.dispose(),it.dispose(),R.dispose(),Z.dispose(),be.dispose(),Te.dispose(),re.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",qe),Ue.removeEventListener("sessionend",pn),gt.stop()};function D(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Ie.autoReset,U=Oe.enabled,W=Oe.autoUpdate,B=Oe.needsUpdate,z=Oe.type;tt(),Ie.autoReset=A,Oe.enabled=U,Oe.autoUpdate=W,Oe.needsUpdate=B,Oe.type=z}function Y(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const U=A.target;U.removeEventListener("dispose",ce),de(U)}function de(A){Pe(A),Ne.remove(A)}function Pe(A){const U=Ne.get(A).programs;U!==void 0&&(U.forEach(function(W){re.releaseProgram(W)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,B,z,ge){U===null&&(U=De);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Se=o0(A,U,W,B,z);ye.setMaterial(B,_e);let Le=W.index,ke=1;if(B.wireframe===!0){if(Le=X.getWireframeAttribute(W),Le===void 0)return;ke=2}const ze=W.drawRange,Ve=W.attributes.position;let vt=ze.start*ke,Ut=(ze.start+ze.count)*ke;ge!==null&&(vt=Math.max(vt,ge.start*ke),Ut=Math.min(Ut,(ge.start+ge.count)*ke)),Le!==null?(vt=Math.max(vt,0),Ut=Math.min(Ut,Le.count)):Ve!=null&&(vt=Math.max(vt,0),Ut=Math.min(Ut,Ve.count));const sn=Ut-vt;if(sn<0||sn===1/0)return;be.setup(z,B,Se,W,Le);let Yn,Ze=We;if(Le!==null&&(Yn=w.get(Le),Ze=Ce,Ze.setIndex(Yn)),z.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*Ae()),Ze.setMode(O.LINES)):Ze.setMode(O.TRIANGLES);else if(z.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*Ae()),z.isLineSegments?Ze.setMode(O.LINES):z.isLineLoop?Ze.setMode(O.LINE_LOOP):Ze.setMode(O.LINE_STRIP)}else z.isPoints?Ze.setMode(O.POINTS):z.isSprite&&Ze.setMode(O.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?Ze.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):Ze.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Ze.renderInstances(vt,sn,z.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fs=Math.min(W.instanceCount,Be);Ze.renderInstances(vt,sn,Fs)}else Ze.render(vt,sn)};function Qe(A,U,W){A.transparent===!0&&A.side===ri&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Wo(A,U,W),A.side=Hi,A.needsUpdate=!0,Wo(A,U,W),A.side=ri):Wo(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),g=me.get(W),g.init(U),v.push(g),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights(x._useLegacyLights);const B=new Set;return A.traverse(function(z){const ge=z.material;if(ge)if(Array.isArray(ge))for(let _e=0;_e<ge.length;_e++){const Se=ge[_e];Qe(Se,W,z),B.add(Se)}else Qe(ge,W,z),B.add(ge)}),v.pop(),g=null,B},this.compileAsync=function(A,U,W=null){const B=this.compile(A,U,W);return new Promise(z=>{function ge(){if(B.forEach(function(_e){Ne.get(_e).currentProgram.isReady()&&B.delete(_e)}),B.size===0){z(A);return}setTimeout(ge,10)}ie.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Je=null;function At(A){Je&&Je(A)}function qe(){gt.stop()}function pn(){gt.start()}const gt=new $x;gt.setAnimationLoop(At),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(A){Je=A,Ue.setAnimationLoop(A),A===null?gt.stop():gt.start()},Ue.addEventListener("sessionstart",qe),Ue.addEventListener("sessionend",pn),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(U),U=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,b),g=me.get(A,v.length),g.init(U),v.push(g),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ve.setFromProjectionMatrix(le),te=this.localClippingEnabled,H=pe.init(this.clippingPlanes,te),y=we.get(A,d.length),y.init(),d.push(y),Ds(A,U,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(L,q);const W=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1;W&&ue.addToRenderList(y,A),this.info.render.frame++,H===!0&&pe.beginShadows();const B=g.state.shadowsArray;Oe.render(B,A,U),H===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,ge=y.transmissive;if(g.setupLights(x._useLegacyLights),U.isArrayCamera){const _e=U.cameras;if(ge.length>0)for(let Se=0,Le=_e.length;Se<Le;Se++){const ke=_e[Se];Us(z,ge,A,ke)}W&&ue.render(A);for(let Se=0,Le=_e.length;Se<Le;Se++){const ke=_e[Se];Is(y,A,ke,ke.viewport)}}else ge.length>0&&Us(z,ge,A,U),W&&ue.render(A),Is(y,A,U);b!==null&&(Re.updateMultisampleRenderTarget(b),Re.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,U),be.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?(g=v[v.length-1],H===!0&&pe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Ds(A,U,W,B){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){B&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const _e=Z.update(A),Se=A.material;Se.visible&&y.push(A,_e,Se,W,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const _e=Z.update(A),Se=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),oe.copy(_e.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const Le=_e.groups;for(let ke=0,ze=Le.length;ke<ze;ke++){const Ve=Le[ke],vt=Se[Ve.materialIndex];vt&&vt.visible&&y.push(A,_e,vt,W,oe.z,Ve)}}else Se.visible&&y.push(A,_e,Se,W,oe.z,null)}}const ge=A.children;for(let _e=0,Se=ge.length;_e<Se;_e++)Ds(ge[_e],U,W,B)}function Is(A,U,W,B){const z=A.opaque,ge=A.transmissive,_e=A.transparent;g.setupLightsView(W),H===!0&&pe.setGlobalState(x.clippingPlanes,W),B&&ye.viewport(S.copy(B)),z.length>0&&Go(z,U,W),ge.length>0&&Go(ge,U,W),_e.length>0&&Go(_e,U,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Us(A,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[B.id]===void 0&&(g.state.transmissionRenderTarget[B.id]=new Sr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?jl:Vi,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ge=g.state.transmissionRenderTarget[B.id],_e=B.viewport||S;ge.setSize(_e.z,_e.w);const Se=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(N),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=Bi;const ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),g.setupLightsView(B),H===!0&&pe.setGlobalState(x.clippingPlanes,B),Go(A,W,B),Re.updateMultisampleRenderTarget(ge),Re.updateRenderTargetMipmap(ge),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ve=0,vt=U.length;Ve<vt;Ve++){const Ut=U[Ve],sn=Ut.object,Yn=Ut.geometry,Ze=Ut.material,Be=Ut.group;if(Ze.side===ri&&sn.layers.test(B.layers)){const Fs=Ze.side;Ze.side=rn,Ze.needsUpdate=!0,cf(sn,W,B,Yn,Ze,Be),Ze.side=Fs,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(Re.updateMultisampleRenderTarget(ge),Re.updateRenderTargetMipmap(ge))}x.setRenderTarget(Se),x.setClearColor(N,j),ke!==void 0&&(B.viewport=ke),x.toneMapping=Le}function Go(A,U,W){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ge=A.length;z<ge;z++){const _e=A[z],Se=_e.object,Le=_e.geometry,ke=B===null?_e.material:B,ze=_e.group;Se.layers.test(W.layers)&&cf(Se,U,W,Le,ke,ze)}}function cf(A,U,W,B,z,ge){A.onBeforeRender(x,U,W,B,z,ge),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,U,W,B,A,ge),z.transparent===!0&&z.side===ri&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,x.renderBufferDirect(W,U,B,z,A,ge),z.side=Hi,z.needsUpdate=!0,x.renderBufferDirect(W,U,B,z,A,ge),z.side=ri):x.renderBufferDirect(W,U,B,z,A,ge),A.onAfterRender(x,U,W,B,z,ge)}function Wo(A,U,W){U.isScene!==!0&&(U=De);const B=Ne.get(A),z=g.state.lights,ge=g.state.shadowsArray,_e=z.state.version,Se=re.getParameters(A,z.state,ge,U,W),Le=re.getProgramCacheKey(Se);let ke=B.programs;B.environment=A.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(A.isMeshStandardMaterial?R:it).get(A.envMap||B.environment),B.envMapRotation=B.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",ce),ke=new Map,B.programs=ke);let ze=ke.get(Le);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===_e)return df(A,Se),ze}else Se.uniforms=re.getUniforms(A),A.onBuild(W,Se,x),A.onBeforeCompile(Se,x),ze=re.acquireProgram(Se,Le),ke.set(Le,ze),B.uniforms=Se.uniforms;const Ve=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=pe.uniform),df(A,Se),B.needsLights=l0(A),B.lightsStateVersion=_e,B.needsLights&&(Ve.ambientLightColor.value=z.state.ambient,Ve.lightProbe.value=z.state.probe,Ve.directionalLights.value=z.state.directional,Ve.directionalLightShadows.value=z.state.directionalShadow,Ve.spotLights.value=z.state.spot,Ve.spotLightShadows.value=z.state.spotShadow,Ve.rectAreaLights.value=z.state.rectArea,Ve.ltc_1.value=z.state.rectAreaLTC1,Ve.ltc_2.value=z.state.rectAreaLTC2,Ve.pointLights.value=z.state.point,Ve.pointLightShadows.value=z.state.pointShadow,Ve.hemisphereLights.value=z.state.hemi,Ve.directionalShadowMap.value=z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ve.spotShadowMap.value=z.state.spotShadowMap,Ve.spotLightMatrix.value=z.state.spotLightMatrix,Ve.spotLightMap.value=z.state.spotLightMap,Ve.pointShadowMap.value=z.state.pointShadowMap,Ve.pointShadowMatrix.value=z.state.pointShadowMatrix),B.currentProgram=ze,B.uniformsList=null,ze}function uf(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Xa.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function df(A,U){const W=Ne.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function o0(A,U,W,B,z){U.isScene!==!0&&(U=De),Re.resetTextureUnits();const ge=U.fog,_e=B.isMeshStandardMaterial?U.environment:null,Se=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$i,Le=(B.isMeshStandardMaterial?R:it).get(B.envMap||_e),ke=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ve=!!W.morphAttributes.position,vt=!!W.morphAttributes.normal,Ut=!!W.morphAttributes.color;let sn=Bi;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(sn=x.toneMapping);const Yn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=Yn!==void 0?Yn.length:0,Be=Ne.get(B),Fs=g.state.lights;if(H===!0&&(te===!0||A!==M)){const mn=A===M&&B.id===P;pe.setState(B,A,mn)}let lt=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Fs.state.version||Be.outputColorSpace!==Se||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==Le||B.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==pe.numPlanes||Be.numIntersection!==pe.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==ze||Be.morphTargets!==Ve||Be.morphNormals!==vt||Be.morphColors!==Ut||Be.toneMapping!==sn||Be.morphTargetsCount!==Ze)&&(lt=!0):(lt=!0,Be.__version=B.version);let Yi=Be.currentProgram;lt===!0&&(Yi=Wo(B,U,z));let ff=!1,Os=!1,Wl=!1;const Ft=Yi.getUniforms(),pi=Be.uniforms;if(ye.useProgram(Yi.program)&&(ff=!0,Os=!0,Wl=!0),B.id!==P&&(P=B.id,Os=!0),ff||M!==A){Ft.setValue(O,"projectionMatrix",A.projectionMatrix),Ft.setValue(O,"viewMatrix",A.matrixWorldInverse);const mn=Ft.map.cameraPosition;mn!==void 0&&mn.setValue(O,oe.setFromMatrixPosition(A.matrixWorld)),Me.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Os=!0,Wl=!0)}if(z.isSkinnedMesh){Ft.setOptional(O,z,"bindMatrix"),Ft.setOptional(O,z,"bindMatrixInverse");const mn=z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ft.setValue(O,"boneTexture",mn.boneTexture,Re))}z.isBatchedMesh&&(Ft.setOptional(O,z,"batchingTexture"),Ft.setValue(O,"batchingTexture",z._matricesTexture,Re));const Xl=W.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0)&&Ee.update(z,W,Yi),(Os||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,Ft.setValue(O,"receiveShadow",z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pi.envMap.value=Le,pi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(pi.envMapIntensity.value=U.environmentIntensity),Os&&(Ft.setValue(O,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&a0(pi,Wl),ge&&B.fog===!0&&se.refreshFogUniforms(pi,ge),se.refreshMaterialUniforms(pi,B,ee,K,g.state.transmissionRenderTarget[A.id]),Xa.upload(O,uf(Be),pi,Re)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xa.upload(O,uf(Be),pi,Re),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ft.setValue(O,"center",z.center),Ft.setValue(O,"modelViewMatrix",z.modelViewMatrix),Ft.setValue(O,"normalMatrix",z.normalMatrix),Ft.setValue(O,"modelMatrix",z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const mn=B.uniformsGroups;for(let ql=0,c0=mn.length;ql<c0;ql++){const hf=mn[ql];Te.update(hf,Yi),Te.bind(hf,Yi)}}return Yi}function a0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function l0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,U,W){Ne.get(A.texture).__webglTexture=U,Ne.get(A.depthTexture).__webglTexture=W;const B=Ne.get(A);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=W===void 0,B.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const W=Ne.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){b=A,C=U,T=W;let B=!0,z=null,ge=!1,_e=!1;if(A){const Le=Ne.get(A);Le.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(O.FRAMEBUFFER,null),B=!1):Le.__webglFramebuffer===void 0?Re.setupRenderTarget(A):Le.__hasExternalTextures&&Re.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const ze=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?z=ze[U][W]:z=ze[U],ge=!0):A.samples>0&&Re.useMultisampledRTT(A)===!1?z=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[W]:z=ze,S.copy(A.viewport),I.copy(A.scissor),F=A.scissorTest}else S.copy($).multiplyScalar(ee).floor(),I.copy(G).multiplyScalar(ee).floor(),F=fe;if(ye.bindFramebuffer(O.FRAMEBUFFER,z)&&B&&ye.drawBuffers(A,z),ye.viewport(S),ye.scissor(I),ye.setScissorTest(F),ge){const Le=Ne.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,W)}else if(_e){const Le=Ne.get(A.texture),ke=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.__webglTexture,W||0,ke)}P=-1},this.readRenderTargetPixels=function(A,U,W,B,z,ge,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){ye.bindFramebuffer(O.FRAMEBUFFER,Se);try{const Le=A.texture,ke=Le.format,ze=Le.type;if(!Me.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-B&&W>=0&&W<=A.height-z&&O.readPixels(U,W,B,z,ne.convert(ke),ne.convert(ze),ge)}finally{const Le=b!==null?Ne.get(b).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,U,W=0){const B=Math.pow(2,-W),z=Math.floor(U.image.width*B),ge=Math.floor(U.image.height*B);Re.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,A.x,A.y,z,ge),ye.unbindTexture()},this.copyTextureToTexture=function(A,U,W,B=0){const z=U.image.width,ge=U.image.height,_e=ne.convert(W.format),Se=ne.convert(W.type);Re.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,A.x,A.y,z,ge,_e,Se,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,B,A.x,A.y,_e,Se,U.image),B===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,U,W,B,z=0){const ge=A.max.x-A.min.x,_e=A.max.y-A.min.y,Se=A.max.z-A.min.z,Le=ne.convert(B.format),ke=ne.convert(B.type);let ze;if(B.isData3DTexture)Re.setTexture3D(B,0),ze=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Re.setTexture2DArray(B,0),ze=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Ve=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ut=O.getParameter(O.UNPACK_SKIP_PIXELS),sn=O.getParameter(O.UNPACK_SKIP_ROWS),Yn=O.getParameter(O.UNPACK_SKIP_IMAGES),Ze=W.isCompressedTexture?W.mipmaps[z]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(ze,z,U.x,U.y,U.z,ge,_e,Se,Le,ke,Ze.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(ze,z,U.x,U.y,U.z,ge,_e,Se,Le,Ze.data):O.texSubImage3D(ze,z,U.x,U.y,U.z,ge,_e,Se,Le,ke,Ze),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ve),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,sn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yn),z===0&&B.generateMipmaps&&O.generateMipmap(ze),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Re.setTextureCube(A,0):A.isData3DTexture?Re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Re.setTexture2DArray(A,0):Re.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,ye.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nf?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Hl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WA extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class n0 extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const El=new k,Ml=new k,Xp=new mt,Ks=new Bx,La=new Vl,Qc=new k,qp=new k;class XA extends Lt{constructor(e=new kn,n=new n0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)El.fromBufferAttribute(n,r-1),Ml.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=El.distanceTo(Ml);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=s,e.ray.intersectsSphere(La)===!1)return;Xp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,p=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=m,g=_-1;y<g;y+=u){const d=f.getX(y),v=f.getX(y+1),x=Da(this,e,Ks,l,d,v);x&&n.push(x)}if(this.isLineLoop){const y=f.getX(_-1),g=f.getX(m),d=Da(this,e,Ks,l,y,g);d&&n.push(d)}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let y=m,g=_-1;y<g;y+=u){const d=Da(this,e,Ks,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=Da(this,e,Ks,l,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Da(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(El.fromBufferAttribute(o,r),Ml.fromBufferAttribute(o,s),n.distanceSqToSegment(El,Ml,Qc,qp)>i)return;Qc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Qc);if(!(l<e.near||l>e.far))return{distance:l,point:qp.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const $p=new k,Yp=new k;class qA extends XA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)$p.fromBufferAttribute(n,r),Yp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$p.distanceTo(Yp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lr extends kn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],p=[],m=[];let _=0;const y=[],g=i/2;let d=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(p,3)),this.setAttribute("uv",new Dt(m,2));function v(){const E=new k,C=new k;let T=0;const b=(n-e)/i;for(let P=0;P<=s;P++){const M=[],S=P/s,I=S*(n-e)+e;for(let F=0;F<=r;F++){const N=F/r,j=N*l+a,V=Math.sin(j),K=Math.cos(j);C.x=I*V,C.y=-S*i+g,C.z=I*K,h.push(C.x,C.y,C.z),E.set(V,b,K).normalize(),p.push(E.x,E.y,E.z),m.push(N,1-S),M.push(_++)}y.push(M)}for(let P=0;P<r;P++)for(let M=0;M<s;M++){const S=y[M][P],I=y[M+1][P],F=y[M+1][P+1],N=y[M][P+1];f.push(S,I,N),f.push(I,F,N),T+=6}u.addGroup(d,T,0),d+=T}function x(E){const C=_,T=new $e,b=new k;let P=0;const M=E===!0?e:n,S=E===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,g*S,0),p.push(0,S,0),m.push(.5,.5),_++;const I=_;for(let F=0;F<=r;F++){const j=F/r*l+a,V=Math.cos(j),K=Math.sin(j);b.x=M*K,b.y=g*S,b.z=M*V,h.push(b.x,b.y,b.z),p.push(0,S,0),T.x=V*.5+.5,T.y=K*.5*S+.5,m.push(T.x,T.y),_++}for(let F=0;F<r;F++){const N=C+F,j=I+F;E===!0?f.push(j,j+1,N):f.push(j+1,j,N),P+=3}u.addGroup(d,P,E===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class af extends kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],h=new k,p=new k,m=[],_=[],y=[],g=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),g.push(T+E,1-x),v.push(u++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const x=f[d][v+1],E=f[d][v],C=f[d+1][v],T=f[d+1][v+1];(d!==0||o>0)&&m.push(x,E,T),(d!==i-1||l<Math.PI)&&m.push(E,C,T)}this.setIndex(m),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $A extends wr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Vr extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ix,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Kp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class YA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,p=u.length;h<p;h+=2){const m=u[h],_=u[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return _}return null}}}const KA=new YA;class lf{constructor(e){this.manager=e!==void 0?e:KA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lf.DEFAULT_MATERIAL_NAME="__DEFAULT";class ZA extends lf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Kp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Do("img");function l(){f(),Kp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){f(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class QA extends lf{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new ZA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class i0 extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Jc=new mt,Zp=new k,Qp=new k;class JA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zp),Qp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qp),n.updateMatrixWorld(),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eb extends JA{constructor(){super(new Yx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eu extends i0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tb extends i0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class nb extends qA{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let p=0,m=0,_=-a;p<=n;p++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=p===s?i:r;y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3}const f=new kn;f.setAttribute("position",new Dt(l,3)),f.setAttribute("color",new Dt(u,3));const h=new n0({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);const r0=({product:t=null,geometryType:e="lounge_chair",selectedMaterial:n="tan",isWireframe:i=!1,isAutoRotating:r=!1,rotationSpeed:s=.8,zoomFactor:o=4.5,elevationOffset:a=0,presetAngle:l="front"})=>{const u=J.useRef(null),f=J.useRef(null),h=J.useRef(null),p=J.useRef(null),m=J.useRef(null),_=J.useRef([]),y={tan:16777215,forest:12771276,ebony:10066329};return J.useEffect(()=>{var se,we,me,pe,Oe,ue,Ee,We,Ce;const g=u.current;if(!g)return;const d=g.clientWidth,v=g.clientHeight,x=new WA;x.background=new Xe(16513525),f.current=x;const E=new yn(42,d/v,.1,100);E.position.set(0,1.1+a,o),E.lookAt(0,0,0),p.current=E;const C=new GA({antialias:!0,alpha:!0,powerPreference:"high-performance"});C.setSize(d,v),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.shadowMap.enabled=!0,C.shadowMap.type=Mx,C.toneMapping=Ax,C.toneMappingExposure=1.1,m.current=C,g.innerHTML="",g.appendChild(C.domElement);const T=new tb(16775408,1.5);x.add(T);const b=new eu(16774634,2.2);b.position.set(4.5,6,4.5),b.castShadow=!0,b.shadow.mapSize.width=2048,b.shadow.mapSize.height=2048,b.shadow.bias=-1e-4,x.add(b);const P=new eu(14477042,1.1);P.position.set(-4.5,3.5,-3.5),x.add(P);const M=new eu(16772829,.8);M.position.set(0,5,-5),x.add(M);const S=new Vo(12,12),I=new $A({opacity:.18}),F=new ct(S,I);F.rotation.x=-Math.PI/2,F.position.y=-.95,F.receiveShadow=!0,x.add(F);const N=new nb(8,16,15064777,15789017);N.position.y=-.95,x.add(N);const j=((se=t==null?void 0:t.multiAngleImages)==null?void 0:se.front)||((we=t==null?void 0:t.images)==null?void 0:we[0])||"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",V=((me=t==null?void 0:t.multiAngleImages)==null?void 0:me.back)||((pe=t==null?void 0:t.images)==null?void 0:pe[1])||"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",K=((Oe=t==null?void 0:t.multiAngleImages)==null?void 0:Oe.side)||((ue=t==null?void 0:t.images)==null?void 0:ue[2])||"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",ee=((Ee=t==null?void 0:t.multiAngleImages)==null?void 0:Ee.top)||((We=t==null?void 0:t.images)==null?void 0:We[0])||"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",L=new QA,q=L.load(j,ne=>{ne.colorSpace=Zt}),$=L.load(V,ne=>{ne.colorSpace=Zt}),G=L.load(K,ne=>{ne.colorSpace=Zt}),fe=L.load(ee,ne=>{ne.colorSpace=Zt}),ve=new Vr({color:3875346,roughness:.28,metalness:.05,wireframe:i}),H=new Vr({color:13147460,roughness:.2,metalness:.85,wireframe:i}),te=new Vr({map:q,roughness:.35,metalness:.05,wireframe:i}),le=new Vr({map:$,roughness:.35,metalness:.05,wireframe:i}),oe=new Vr({map:G,roughness:.35,metalness:.05,wireframe:i}),De=new Vr({map:fe,roughness:.35,metalness:.05,wireframe:i});_.current=[te,le,oe,De,ve,H];const Ae=new rs;h.current=Ae;const O=((t==null?void 0:t.category)||"").toLowerCase(),Ke=((Ce=t==null?void 0:t.model3D)==null?void 0:Ce.geometryType)||(O.includes("sofa")?"sofa":O.includes("table")?"table":"lounge_chair");if(Ke==="lounge_chair"){const ne=new xn(1.6,.32,1.4),be=[oe,oe,De,ve,te,le],Te=new ct(ne,be);Te.position.set(0,-.05,.05),Te.castShadow=!0,Te.receiveShadow=!0,Ae.add(Te);const tt=new xn(1.6,1.35,.25),Ue=[oe,oe,ve,ve,te,le],D=new ct(tt,Ue);D.position.set(0,.62,-.52),D.rotation.x=ua.degToRad(-12),D.castShadow=!0,D.receiveShadow=!0,Ae.add(D),[[-.48,.88,-.38],[0,.88,-.38],[.48,.88,-.38],[-.48,.52,-.46],[0,.52,-.46],[.48,.52,-.46],[-.48,.2,-.54],[.48,.2,-.54]].forEach(([ce,de,Pe])=>{const Qe=new af(.038,16,16),Je=new ct(Qe,H);Je.position.set(ce,de,Pe),Ae.add(Je)});const Y=ce=>{const de=new rs,Pe=ce?.84:-.84,Qe=new xn(.12,.07,1.45),Je=new ct(Qe,ve);Je.position.set(Pe,.28,0),Je.castShadow=!0,de.add(Je);const At=new lr(.045,.03,1.05,16),qe=new ct(At,ve);qe.position.set(Pe,-.42,.58),qe.rotation.z=ua.degToRad(ce?-8:8),qe.castShadow=!0,de.add(qe);const pn=new lr(.045,.028,1.15,16),gt=new ct(pn,ve);gt.position.set(Pe,-.42,-.58),gt.rotation.x=ua.degToRad(-16),gt.rotation.z=ua.degToRad(ce?-8:8),gt.castShadow=!0,de.add(gt);const Ds=new lr(.032,.028,.08,16),Is=new ct(Ds,H);Is.position.set(Pe,-.9,.62),de.add(Is);const Us=new ct(Ds,H);return Us.position.set(Pe,-.9,-.72),de.add(Us),de};Ae.add(Y(!1)),Ae.add(Y(!0))}else if(Ke==="sofa"){const ne=new xn(2.5,.35,1.3),be=[oe,oe,De,ve,te,le],Te=new ct(ne,be);Te.position.set(0,-.05,.05),Te.castShadow=!0,Ae.add(Te);const tt=new xn(2.5,1.1,.28),Ue=[oe,oe,ve,ve,te,le],D=new ct(tt,Ue);D.position.set(0,.52,-.5),D.castShadow=!0,Ae.add(D);const Q=Y=>{const ce=new xn(.28,.85,1.45),de=[oe,oe,De,ve,te,le],Pe=new ct(ce,de);return Pe.position.set(Y?1.35:-1.35,.32,0),Pe.castShadow=!0,Pe};Ae.add(Q(!1)),Ae.add(Q(!0)),[-1.1,1.1].forEach(Y=>{[-.5,.5].forEach(ce=>{const de=new lr(.05,.03,.45,16),Pe=new ct(de,ve);Pe.position.set(Y,-.42,ce),Pe.castShadow=!0,Ae.add(Pe)})})}else{const ne=new xn(2.3,.16,1.25),be=[oe,oe,De,ve,te,le],Te=new ct(ne,be);Te.position.set(0,.25,0),Te.castShadow=!0,Ae.add(Te),[-.95,.95].forEach(tt=>{[-.48,.48].forEach(Ue=>{const D=new lr(.035,.02,.95,16),Q=new ct(D,ve);Q.position.set(tt,-.3,Ue),Q.rotation.z=tt>0?-.12:.12,Q.castShadow=!0,Ae.add(Q)})})}Ae.position.y=.1,x.add(Ae);let ie=!1,Me={x:0,y:0};const ye=ne=>{ie=!0,Me={x:ne.clientX,y:ne.clientY}},Ie=ne=>{if(!ie||!h.current)return;const be=ne.clientX-Me.x,Te=ne.clientY-Me.y;h.current.rotation.y+=be*.01,h.current.rotation.x+=Te*.005,h.current.rotation.x=Math.max(-.4,Math.min(.4,h.current.rotation.x)),Me={x:ne.clientX,y:ne.clientY}},Ne=()=>{ie=!1},Re=C.domElement;Re.addEventListener("mousedown",ye),window.addEventListener("mousemove",Ie),window.addEventListener("mouseup",Ne);const it=ne=>{ne.touches.length===1&&(ie=!0,Me={x:ne.touches[0].clientX,y:ne.touches[0].clientY})},R=ne=>{if(!ie||!h.current||ne.touches.length!==1)return;const be=ne.touches[0].clientX-Me.x,Te=ne.touches[0].clientY-Me.y;h.current.rotation.y+=be*.01,h.current.rotation.x+=Te*.005,h.current.rotation.x=Math.max(-.4,Math.min(.4,h.current.rotation.x)),Me={x:ne.touches[0].clientX,y:ne.touches[0].clientY}},w=()=>{ie=!1};Re.addEventListener("touchstart",it),Re.addEventListener("touchmove",R),Re.addEventListener("touchend",w);let X;const Z=()=>{X=requestAnimationFrame(Z),r&&h.current&&!ie&&(h.current.rotation.y+=.006*s),C.render(x,E)};Z();const re=()=>{if(!g||!p.current||!m.current)return;const ne=g.clientWidth,be=g.clientHeight;p.current.aspect=ne/be,p.current.updateProjectionMatrix(),m.current.setSize(ne,be)};return window.addEventListener("resize",re),()=>{cancelAnimationFrame(X),Re.removeEventListener("mousedown",ye),window.removeEventListener("mousemove",Ie),window.removeEventListener("mouseup",Ne),Re.removeEventListener("touchstart",it),Re.removeEventListener("touchmove",R),Re.removeEventListener("touchend",w),window.removeEventListener("resize",re),C.dispose()}},[t]),J.useEffect(()=>{h.current&&(l==="front"?h.current.rotation.set(0,0,0):l==="back"?h.current.rotation.set(0,Math.PI,0):l==="side"?h.current.rotation.set(0,Math.PI/2,0):l==="top"&&h.current.rotation.set(Math.PI/4,0,0))},[l]),J.useEffect(()=>{p.current&&(p.current.position.z=o,p.current.position.y=1.1+a,p.current.lookAt(0,0,0))},[o,a]),J.useEffect(()=>{const g=y[n]||y.tan;_.current.forEach(d=>{d&&(d.color&&n!=="tan"&&d.color.setHex(g),d.wireframe=i,d.needsUpdate=!0)})},[n,i]),c.jsx("div",{className:"w-full h-full relative cursor-grab active:cursor-grabbing select-none",children:c.jsx("div",{ref:u,className:"w-full h-full"})})},ib={activeProductId:null,activeProduct:null,isInspectorOpen:!1,isAutoRotating:!0,rotationSpeed:.5,cameraDistance:4.5,elevationOffset:0,selectedMaterial:"tan",isWireframe:!1,polygonCount:"124.2k",lodLevel:"ULTRA",archivalSeries:"Archival Series № 422",viewMode:"3d_inspector"};class rb{constructor(e=ib){this.state={...e},this.listeners=new Set}getState(){return this.state}updateState(e){this.state={...this.state,...e},this.notify()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e(this.state))}}const Jp=new rb,sb=(t=null)=>{const[e,n]=J.useState(t),[i,r]=J.useState(!1),[s,o]=J.useState(!1),[a,l]=J.useState(.8),[u,f]=J.useState(4.5),[h,p]=J.useState(0),[m,_]=J.useState("tan"),[y,g]=J.useState(!1),[d,v]=J.useState(142);J.useEffect(()=>{var M;t&&(n(t),(M=t.model3D)!=null&&M.defaultTexture&&_(t.model3D.defaultTexture))},[t]);const x=J.useCallback((M=null)=>{M&&n(M),r(!0),Jp.updateState({isInspectorOpen:!0})},[]),E=J.useCallback(()=>{r(!1),Jp.updateState({isInspectorOpen:!1})},[]),C=J.useCallback(()=>{o(M=>!M)},[]),T=J.useCallback((M="cw")=>{v(S=>(S+(M==="cw"?15:-15)+360)%360)},[]),b=J.useCallback(M=>{M==="wireframe"?g(S=>!S):(_(M),g(!1))},[]),P=J.useCallback(()=>{f(4.5),p(0),o(!1),g(!1),v(142)},[]);return{product:e,isInspectorOpen:i,isAutoRotating:s,rotationSpeed:a,zoomFactor:u,elevationOffset:h,selectedMaterial:m,isWireframe:y,rotationAngle:d,openInspector:x,closeInspector:E,toggleAutoRotate:C,rotateStep:T,setZoomFactor:f,setElevationOffset:p,changeMaterial:b,resetView:P}},ob=({product:t,isOpen:e,onClose:n,onAddToCart:i,onLaunchAR:r})=>{const[s,o]=J.useState("front"),{isAutoRotating:a,zoomFactor:l,elevationOffset:u,selectedMaterial:f,isWireframe:h,toggleAutoRotate:p,rotateStep:m,setZoomFactor:_,setElevationOffset:y,changeMaterial:g,resetView:d}=sb(t);if(!e||!t)return null;const v=t.model3D||{archivalSeries:"Archival Series № 422",polygonCount:"124.2k",lodLevel:"ULTRA",geometryType:"lounge_chair"};return c.jsxs("div",{className:"fixed inset-0 z-50 bg-[#FBF9F5] flex flex-col overflow-hidden animate-fadeIn",children:[c.jsxs("header",{className:"px-6 py-4 flex items-center justify-between border-b border-[#E5DEC9] bg-[#FBF9F5]/90 backdrop-blur-md z-10",children:[c.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-sm font-semibold text-gray-800 hover:text-[#A17A16] transition-colors group",children:[c.jsx(hx,{className:"w-4 h-4 transition-transform group-hover:-translate-x-1"}),c.jsx("span",{children:"Back to Product Details"})]}),c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsxs("span",{className:"text-xs font-mono bg-[#F9F4E9] border border-[#E9D3A4] text-[#A17A16] px-3 py-1 rounded-full font-bold flex items-center space-x-1",children:[c.jsx(ds,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"4-Angle Volumetric 3D Model Active"})]}),c.jsx("button",{onClick:()=>{o("front"),d()},className:"p-2 text-gray-500 hover:text-[#A17A16] transition-colors rounded-full hover:bg-[#F9F4E9]",title:"Reset View",children:c.jsx(yx,{className:"w-4 h-4"})})]})]}),c.jsxs("div",{className:"relative flex-1 w-full h-full bg-[#FBF9F5]",children:[c.jsxs("div",{className:"absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#E5DEC9] shadow-md flex items-center space-x-1 font-mono text-xs pointer-events-auto",children:[c.jsx("button",{onClick:()=>o("front"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="front"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"FRONT 0°"}),c.jsx("button",{onClick:()=>o("back"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="back"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"BACK 180°"}),c.jsx("button",{onClick:()=>o("side"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="side"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"SIDE 90°"}),c.jsx("button",{onClick:()=>o("top"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="top"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"TOP 70°"})]}),c.jsx(r0,{product:t,geometryType:v.geometryType,selectedMaterial:f,isWireframe:h,isAutoRotating:a,zoomFactor:l,elevationOffset:u,presetAngle:s}),c.jsxs("div",{className:"absolute top-6 right-6 w-80 p-6 rounded-2xl glass-panel shadow-lg border border-[#E5DEC9]/80 pointer-events-auto",children:[c.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900 leading-tight",children:t.title}),c.jsx("p",{className:"text-xs font-serif text-gray-500 italic mt-1 border-b border-[#E5DEC9] pb-3",children:v.archivalSeries}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-4 text-xs font-mono",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400 font-bold block uppercase tracking-wider text-[10px]",children:"Polygons"}),c.jsx("span",{className:"text-sm font-bold text-[#A17A16]",children:v.polygonCount})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-gray-400 font-bold block uppercase tracking-wider text-[10px]",children:"LOD Level"}),c.jsx("span",{className:"text-sm font-bold text-[#A17A16]",children:v.lodLevel})]})]})]}),c.jsxs("div",{className:"absolute bottom-28 right-6 flex flex-col space-y-3 pointer-events-auto",children:[c.jsx("button",{onClick:()=>alert(`3D Model (${v.polygonCount} Polygons) exported as GLTF file.`),className:"w-12 h-12 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center shadow-md border border-[#E5DEC9] transition-all hover:scale-105",title:"Download 3D Model GLTF",children:c.jsx(G_,{className:"w-5 h-5"})}),c.jsx("button",{onClick:r,className:"w-12 h-12 bg-white hover:bg-[#F9F4E9] text-[#A17A16] rounded-2xl flex items-center justify-center shadow-md border border-[#E9D3A4] transition-all hover:scale-105",title:"View in WebXR AR",children:c.jsx(iy,{className:"w-5 h-5"})}),c.jsx("button",{onClick:()=>i(t),className:"w-12 h-12 gold-gradient-btn rounded-2xl flex items-center justify-center shadow-lg transition-all hover:scale-105",title:"Add to Cart & Proceed to Escrow",children:c.jsx(Jd,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl glass-panel shadow-xl border border-[#E5DEC9]/90 flex items-center space-x-6 pointer-events-auto",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>m("ccw"),className:"p-2 text-gray-700 hover:text-[#A17A16] hover:bg-gray-100 rounded-xl transition-colors",title:"Rotate Counter-Clockwise 15°",children:c.jsx(Q_,{className:"w-4 h-4"})}),c.jsx("button",{onClick:p,className:`p-2.5 rounded-xl transition-all shadow-sm ${a?"bg-[#A17A16] text-white font-bold":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,title:"Toggle 360° Auto-Rotate",children:c.jsx("span",{className:"font-mono text-xs font-bold px-0.5",children:"3D"})}),c.jsx("button",{onClick:()=>m("cw"),className:"p-2 text-gray-700 hover:text-[#A17A16] hover:bg-gray-100 rounded-xl transition-colors",title:"Rotate Clockwise 15°",children:c.jsx(J_,{className:"w-4 h-4"})})]}),c.jsx("div",{className:"h-6 w-px bg-[#E5DEC9]"}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center space-x-2",title:"Zoom Control",children:[c.jsx(uy,{className:"w-4 h-4 text-gray-500"}),c.jsx("input",{type:"range",min:"2.5",max:"6.5",step:"0.1",value:l,onChange:x=>_(parseFloat(x.target.value)),className:"w-24 h-1.5 bg-[#E5DEC9] rounded-lg appearance-none cursor-pointer accent-[#A17A16]"})]}),c.jsxs("div",{className:"flex items-center space-x-2",title:"Elevation Control",children:[c.jsx($_,{className:"w-4 h-4 text-gray-500"}),c.jsx("input",{type:"range",min:"-0.8",max:"0.8",step:"0.05",value:u,onChange:x=>y(parseFloat(x.target.value)),className:"w-24 h-1.5 bg-[#E5DEC9] rounded-lg appearance-none cursor-pointer accent-[#A17A16]"})]})]}),c.jsx("div",{className:"h-6 w-px bg-[#E5DEC9]"}),c.jsxs("div",{className:"flex items-center space-x-3 text-[10px] font-mono font-bold tracking-wider",children:[c.jsxs("button",{onClick:()=>g("tan"),className:"flex flex-col items-center group",children:[c.jsx("span",{className:`w-7 h-7 rounded-full bg-[#8C5A2B] border-2 transition-transform ${f==="tan"&&!h?"border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30":"border-white group-hover:scale-105"}`}),c.jsx("span",{className:`mt-1 ${f==="tan"&&!h?"text-[#A17A16]":"text-gray-500"}`,children:"TAN"})]}),c.jsxs("button",{onClick:()=>g("forest"),className:"flex flex-col items-center group",children:[c.jsx("span",{className:`w-7 h-7 rounded-full bg-[#435B4D] border-2 transition-transform ${f==="forest"&&!h?"border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30":"border-white group-hover:scale-105"}`}),c.jsx("span",{className:`mt-1 ${f==="forest"&&!h?"text-[#A17A16]":"text-gray-500"}`,children:"FOREST"})]}),c.jsxs("button",{onClick:()=>g("ebony"),className:"flex flex-col items-center group",children:[c.jsx("span",{className:`w-7 h-7 rounded-full bg-[#2B2B2D] border-2 transition-transform ${f==="ebony"&&!h?"border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30":"border-white group-hover:scale-105"}`}),c.jsx("span",{className:`mt-1 ${f==="ebony"&&!h?"text-[#A17A16]":"text-gray-500"}`,children:"EBONY"})]}),c.jsxs("button",{onClick:()=>g("wireframe"),className:"flex flex-col items-center group pl-2",children:[c.jsx("span",{className:`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${h?"bg-[#A17A16] text-white border-[#A17A16]":"bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`,children:c.jsx(Ku,{className:"w-3.5 h-3.5"})}),c.jsx("span",{className:`mt-1 ${h?"text-[#A17A16]":"text-gray-500"}`,children:"WIREFRAME"})]})]})]})]})]})},ab=({product:t,isOpen:e,onClose:n})=>{const[i,r]=J.useState(142),[s,o]=J.useState(0),[a,l]=J.useState(!1);return e?c.jsxs("div",{className:"fixed inset-0 z-50 bg-[#1E232A] flex flex-col overflow-hidden animate-fadeIn text-white",children:[c.jsxs("header",{className:"px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md z-10",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx(Ku,{className:"w-5 h-5 text-[#A17A16]"}),c.jsx("span",{className:"font-serif text-lg font-bold tracking-tight text-white",children:"Virtual 3D Room Planner"})]}),c.jsx("button",{onClick:n,className:"p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10",children:c.jsx(Rs,{className:"w-6 h-6"})})]}),c.jsxs("div",{className:"relative flex-1 w-full h-full bg-[#1E232A]",children:[c.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-60",style:{backgroundImage:"url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80')"}}),c.jsx("div",{className:"absolute inset-0 pointer-events-auto",children:c.jsx(r0,{product:t,geometryType:"lounge_chair",selectedMaterial:"tan",isWireframe:!1,isAutoRotating:!1,zoomFactor:4.2,elevationOffset:s})}),c.jsxs("div",{className:"absolute top-12 left-10 glass-panel bg-black/50 text-white border-white/20 p-4 rounded-2xl w-64 pointer-events-auto",children:[c.jsxs("div",{className:"flex justify-between items-center text-xs font-mono font-bold text-[#A17A16] uppercase mb-2",children:[c.jsx("span",{children:"HEIGHT ADJUST"}),c.jsxs("span",{children:[s.toFixed(1),"m"]})]}),c.jsx("input",{type:"range",min:"-0.5",max:"1.5",step:"0.1",value:s,onChange:u=>o(parseFloat(u.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#A17A16]"})]}),c.jsxs("div",{className:"absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-auto",children:[c.jsx("div",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-widest",children:"ROTATION"}),c.jsxs("div",{className:"font-serif text-3xl font-bold text-white mt-1",children:[i,"°"]}),c.jsxs("div",{className:"flex items-center justify-center space-x-6 text-[10px] font-mono text-gray-400 mt-2",children:[c.jsx("span",{children:"90°"}),c.jsx("div",{className:"w-1 h-3 bg-[#A17A16]"}),c.jsx("span",{children:"180°"}),c.jsx("span",{children:"270°"})]})]}),c.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto",children:c.jsxs("button",{onClick:()=>l(!a),className:`px-8 py-4 rounded-2xl font-mono text-sm font-bold tracking-wider flex items-center space-x-3 shadow-2xl transition-all hover:scale-105 border ${a?"bg-emerald-600 border-emerald-400 text-white":"gold-gradient-btn border-[#E9D3A4]/40"}`,children:[a?c.jsx(mx,{className:"w-5 h-5"}):c.jsx(Ku,{className:"w-5 h-5"}),c.jsx("span",{children:a?"OBJECT LOCKED IN ROOM":"PLACE OBJECT"})]})}),c.jsxs("div",{className:"absolute bottom-0 inset-x-0 h-16 bg-[#FBF9F5] text-gray-800 border-t border-[#E5DEC9] px-8 flex items-center justify-between text-xs font-mono pointer-events-auto",children:[c.jsxs("div",{className:"flex items-center space-x-8",children:[c.jsx("span",{className:"font-bold text-[#A17A16] border-r border-gray-300 pr-8",children:"PLANNER SUITE V4.2"}),c.jsx("button",{className:"hover:text-[#A17A16] font-semibold",children:"FLOOR MAP"}),c.jsx("button",{className:"hover:text-[#A17A16] font-semibold",children:"INVENTORY"}),c.jsxs("button",{className:"hover:text-[#A17A16] font-semibold flex items-center space-x-1",children:[c.jsx(ny,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"SHARE DESIGN"})]})]}),c.jsxs("div",{className:"flex items-center space-x-3 text-gray-500",children:[c.jsxs("div",{className:"flex -space-x-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-full bg-[#1E232A] text-white flex items-center justify-center font-bold text-[10px] border-2 border-white",children:"MA"}),c.jsx("div",{className:"w-7 h-7 rounded-full bg-[#A17A16] text-white flex items-center justify-center font-bold text-[10px] border-2 border-white",children:"+2"})]}),c.jsx("span",{className:"text-[11px]",children:"Design Collaborators"})]})]})]})]}):null},s0=({notification:t,onClose:e})=>{if(!t||!t.message)return null;const{type:n="info",title:i,message:r}=t,s={error:{icon:c.jsx(gx,{className:"w-8 h-8 text-rose-600"}),border:"border-rose-300",bg:"bg-rose-50",badgeBg:"bg-rose-100 text-rose-800",buttonBg:"bg-rose-600 hover:bg-rose-700 text-white",defaultTitle:"Authentication Warning"},success:{icon:c.jsx(V_,{className:"w-8 h-8 text-emerald-600"}),border:"border-emerald-300",bg:"bg-emerald-50",badgeBg:"bg-emerald-100 text-emerald-800",buttonBg:"gold-gradient-btn",defaultTitle:"Success"},info:{icon:c.jsx(X_,{className:"w-8 h-8 text-[#A17A16]"}),border:"border-[#E9D3A4]",bg:"bg-[#F9F4E9]",badgeBg:"bg-[#F3E6CD] text-[#A17A16]",buttonBg:"gold-gradient-btn",defaultTitle:"2FA Verification OTP Sent"}},o=s[n]||s.info;return c.jsx("div",{className:"fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",children:c.jsxs("div",{className:`bg-white rounded-3xl max-w-md w-full p-6 border ${o.border} shadow-2xl relative text-center space-y-4`,children:[c.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors",children:c.jsx(Rs,{className:"w-5 h-5"})}),c.jsx("div",{className:"flex justify-center pt-2",children:c.jsx("div",{className:`p-3 rounded-2xl ${o.bg}`,children:o.icon})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-serif text-xl font-bold text-gray-900",children:i||o.defaultTitle}),c.jsx("p",{className:"text-xs text-gray-600 leading-relaxed mt-2",children:r})]}),c.jsx("div",{className:"pt-2",children:c.jsx("button",{onClick:e,className:`w-full py-3 rounded-xl font-bold text-xs tracking-wider shadow-md ${o.buttonBg}`,children:"CONTINUE"})})]})})},lb=({isOpen:t,onClose:e,onLoginSuccess:n,initialRole:i="buyer"})=>{const[r,s]=J.useState("login"),[o,a]=J.useState("credentials"),[l,u]=J.useState(""),[f,h]=J.useState(""),[p,m]=J.useState(""),[_,y]=J.useState(i);b0.useEffect(()=>{i&&y(i)},[i,t]);const[g,d]=J.useState(""),[v,x]=J.useState(null),[E,C]=J.useState(null),[T,b]=J.useState(null);if(!t)return null;const P=(F,N,j)=>{b({type:F,title:N,message:j})},M=async F=>{F.preventDefault(),C(null);const N=r==="signup"?"/api/auth/register":"/api/auth/login",j=r==="signup"?{name:p,email:l,password:f,role:_}:{email:l,password:f,role:_};try{const K=await(await fetch(N,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)})).json();if(!K.success){C(K.message),P("error","Authentication Failed",K.message);return}K.requiresOTP&&(x(K.previewUrl||null),a("otp_verification"),P("info","2FA Email Verification Sent",`A 6-Digit Verification OTP code has been dispatched to ${l}. Please check your email inbox.`))}catch{P("error","Network Error","Could not connect to authentication server.")}},S=async F=>{if(F.preventDefault(),!g||g.trim().length<6){P("error","Invalid OTP","Please enter the complete 6-digit OTP verification code.");return}try{const j=await(await fetch("/api/auth/verify-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,otpCode:g.trim(),role:_})})).json();if(!j.success){P("error","Verification Failed",j.message);return}n(j.user),e()}catch{P("error","Verification Error","Failed to verify OTP code.")}},I=async()=>{try{const N=await(await fetch("/api/auth/resend-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,role:_})})).json();if(!N.success){P("error","Resend Failed",N.message);return}P("info","2FA OTP Resent",`A new 6-digit verification code has been dispatched to ${l}. Please check your inbox.`)}catch{P("error","Network Error","Failed to request new OTP code.")}};return c.jsxs(c.Fragment,{children:[c.jsx(s0,{notification:T,onClose:()=>b(null)}),c.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",children:c.jsxs("div",{className:"bg-[#FBF9F5] rounded-3xl max-w-md w-full p-8 border border-[#E5DEC9] shadow-2xl relative",children:[c.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors",children:c.jsx(Rs,{className:"w-5 h-5"})}),o==="credentials"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1E232A] text-[#A17A16] font-serif font-bold text-xl flex items-center justify-center mx-auto mb-3 border-2 border-[#A17A16]",children:"3D"}),c.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:r==="signup"?"Create Account":"Sign In to Decorate3D"}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Database Verified • Nodemailer 2FA Email OTP"})]}),c.jsxs("div",{className:"flex bg-[#E5DEC9]/50 p-1 rounded-2xl mb-6 border border-[#E5DEC9]",children:[c.jsxs("button",{type:"button",onClick:()=>s("login"),className:`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${r==="login"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[c.jsx(vx,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"LOG IN"})]}),c.jsxs("button",{type:"button",onClick:()=>s("signup"),className:`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${r==="signup"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[c.jsx(cy,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"CREATE ACCOUNT"})]})]}),E&&c.jsxs("div",{className:"mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center justify-between animate-fadeIn",children:[c.jsx("span",{children:E}),r==="login"&&E.toLowerCase().includes("register")&&c.jsx("button",{type:"button",onClick:()=>{C(null),s("signup")},className:"font-bold underline text-rose-800 ml-2 whitespace-nowrap",children:"Register Now"})]}),c.jsxs("form",{onSubmit:M,className:"space-y-4",children:[r==="signup"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Full Name"}),c.jsxs("div",{className:"relative",children:[c.jsx(ef,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),c.jsx("input",{type:"text",required:!0,value:p,onChange:F=>m(F.target.value),placeholder:"Muhtasim Ahmed",className:"w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Email Address"}),c.jsxs("div",{className:"relative",children:[c.jsx(Y_,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),c.jsx("input",{type:"email",required:!0,value:l,onChange:F=>u(F.target.value),placeholder:"user@example.com",className:"w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Password"}),c.jsxs("div",{className:"relative",children:[c.jsx(xx,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),c.jsx("input",{type:"password",required:!0,value:f,onChange:F=>h(F.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:r==="signup"?"Select Target Account Role":"Authenticate As Role"}),c.jsxs("select",{value:_,onChange:F=>y(F.target.value),className:"w-full px-3 py-2.5 bg-white border-2 border-[#A17A16]/50 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#A17A16]",children:[c.jsx("option",{value:"buyer",children:"Buyer (Browse & Inspect 3D Models)"}),c.jsx("option",{value:"seller",children:"Seller (List Furniture & 3D Scanner)"}),c.jsx("option",{value:"courier",children:"Logistics Courier Driver"}),c.jsx("option",{value:"admin",children:"System Administrator"})]})]}),c.jsx("button",{type:"submit",className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md mt-2 tracking-wider flex items-center justify-center space-x-2",children:c.jsx("span",{children:r==="signup"?"PROCEED TO EMAIL 2FA OTP":"VERIFY & SEND 2FA OTP"})})]}),c.jsxs("div",{className:"text-center mt-6 pt-4 border-t border-[#E5DEC9] text-xs text-gray-600",children:[r==="signup"?"Already have an account?":"Don't have an account yet?"," ",c.jsx("button",{type:"button",onClick:()=>s(r==="signup"?"login":"signup"),className:"text-[#A17A16] font-bold hover:underline",children:r==="signup"?"Sign In Here":"Create One Here"})]})]}),o==="otp_verification"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("button",{type:"button",onClick:()=>a("credentials"),className:"flex items-center space-x-2 text-xs font-semibold text-gray-600 hover:text-[#A17A16]",children:[c.jsx(hx,{className:"w-4 h-4"}),c.jsx("span",{children:"Back to credentials"})]}),c.jsxs("div",{className:"text-center space-y-2",children:[c.jsx("div",{className:"w-12 h-12 rounded-full bg-[#F9F4E9] text-[#A17A16] flex items-center justify-center mx-auto border border-[#E9D3A4]",children:c.jsx(q_,{className:"w-6 h-6"})}),c.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:"Email 2FA Verification"}),c.jsxs("p",{className:"text-xs text-gray-500",children:["A 6-digit verification code was dispatched to your email inbox:",c.jsx("span",{className:"block font-bold text-gray-800 mt-0.5",children:l})]})]}),c.jsxs("div",{className:"p-4 bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl text-center space-y-2",children:[c.jsx("span",{className:"text-[11px] font-mono font-bold text-[#A17A16] uppercase block",children:"CHECK YOUR EMAIL INBOX FOR OTP"}),c.jsxs("p",{className:"text-xs text-gray-600",children:["Enter the 6-digit code sent to ",c.jsx("strong",{className:"text-gray-800",children:l})," below to verify your session."]})]}),c.jsxs("form",{onSubmit:S,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1 text-center",children:"Enter 6-Digit OTP Pin"}),c.jsx("input",{type:"text",maxLength:6,required:!0,value:g,onChange:F=>d(F.target.value.replace(/\D/g,"")),placeholder:"849201",className:"w-full px-4 py-3 bg-white border-2 border-[#A17A16] rounded-xl font-mono text-center text-2xl font-bold tracking-[0.3em] text-gray-900 focus:outline-none shadow-sm"})]}),c.jsxs("button",{type:"submit",className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md tracking-wider flex items-center justify-center space-x-2",children:[c.jsx(Bo,{className:"w-5 h-5"}),c.jsx("span",{children:"AUTHENTICATE & COMPLETE LOGIN"})]})]}),c.jsx("div",{className:"text-center pt-2",children:c.jsxs("button",{type:"button",onClick:I,className:"text-xs text-gray-500 hover:text-[#A17A16] flex items-center justify-center space-x-1 mx-auto",children:[c.jsx(Z_,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Resend Email OTP Code"})]})})]})]})})]})},cb=({isOpen:t,onClose:e,onAddProduct:n})=>{const[i,r]=J.useState("details"),[s,o]=J.useState("upload"),[a,l]=J.useState(""),[u,f]=J.useState(""),[h,p]=J.useState("Chairs"),[m,_]=J.useState("Top-Grain Leather & Solid Wood"),[y,g]=J.useState("Mid-Century Modern"),[d,v]=J.useState(""),[x,E]=J.useState(""),[C,T]=J.useState(""),[b,P]=J.useState("GOOD"),[M,S]=J.useState(null),[I,F]=J.useState(!1),[N,j]=J.useState(null),[V,K]=J.useState({front:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"}),[ee,L]=J.useState(!1),[q,$]=J.useState("front"),G=J.useRef(null),fe=J.useRef(null),[ve,H]=J.useState(!1),[te,le]=J.useState(0);if(J.useEffect(()=>{const ie=async()=>{const ye=parseFloat(x),Ie=parseFloat(C);if(!x||!C||isNaN(ye)||isNaN(Ie)||ye<=0||Ie<0){S(null),j(null);return}F(!0),j(null);try{const Re=await(await fetch("/api/modules/m2/price-recommendation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({originalPrice:ye,itemAge:Ie,category:h,conditionGrade:b})})).json();Re.success?S(Re.data.recommendedRange):j(Re.message)}catch{j("Failed to connect to pricing engine.")}finally{F(!1)}},Me=setTimeout(()=>{ie()},400);return()=>clearTimeout(Me)},[x,C,h,b]),!t)return null;const oe=async ie=>{$(ie),L(!0);try{const Me=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});G.current&&(G.current.srcObject=Me)}catch(Me){console.warn("Camera access error:",Me)}},De=()=>{G.current&&G.current.srcObject&&(G.current.srcObject.getTracks().forEach(Me=>Me.stop()),G.current.srcObject=null),L(!1)},Ae=()=>{if(!G.current||!fe.current)return;const ie=G.current,Me=fe.current;Me.width=ie.videoWidth||640,Me.height=ie.videoHeight||480,Me.getContext("2d").drawImage(ie,0,0,Me.width,Me.height);const Ie=Me.toDataURL("image/jpeg");K(Ne=>({...Ne,[q]:Ie})),De()},O=(ie,Me)=>{var Ie;const ye=(Ie=ie.target.files)==null?void 0:Ie[0];if(ye){const Ne=new FileReader;Ne.onload=Re=>{K(it=>({...it,[Me]:Re.target.result}))},Ne.readAsDataURL(ye)}},Ke=()=>{H(!0),le(20),setTimeout(()=>le(60),600),setTimeout(()=>le(100),1200),setTimeout(()=>{H(!1);const ie={_id:"prod_"+Date.now(),title:a||"Custom Seller 3D Furniture",subtitle:`${h} • Seller Verified 3D`,price:parseFloat(u)||350,estimatedNewPrice:parseFloat(x)||(parseFloat(u)||350)*2.2,category:h,conditionGrade:b,isRareFind:!0,description:d||"Handcrafted furniture item uploaded with multi-angle 3D spatial inspection texture model.",material:m,era:y,dimensions:{width:"32 in",depth:"34 in",height:"32 in"},images:[V.front,V.back,V.side,V.top],multiAngleImages:V,has3DModel:!0,model3D:{archivalSeries:"Seller Custom Series № "+Math.floor(Math.random()*900+100),polygonCount:"142.8k",lodLevel:"ULTRA",defaultTexture:"tan",geometryType:h.toLowerCase().includes("sofa")?"sofa":h.toLowerCase().includes("table")?"table":"lounge_chair"},seller:{name:"Verified Seller User",rating:5,verified:!0,location:"Dhaka, Bangladesh"}};n(ie),e()},1500)};return c.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn",children:c.jsxs("div",{className:"bg-[#FBF9F5] rounded-3xl max-w-2xl w-full p-8 border border-[#E5DEC9] shadow-2xl relative max-h-[90vh] overflow-y-auto",children:[c.jsx("button",{onClick:()=>{De(),e()},className:"absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors",children:c.jsx(Rs,{className:"w-5 h-5"})}),c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1E232A] text-[#A17A16] flex items-center justify-center mx-auto mb-2 border-2 border-[#A17A16]",children:c.jsx(En,{className:"w-6 h-6"})}),c.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:"List Furniture Item with 3D Scanner"}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Capture or Upload 4 Angles (Front, Back, Side, Top) to Generate interactive 360° 3D Model"})]}),ve&&c.jsxs("div",{className:"py-12 text-center space-y-4",children:[c.jsx("div",{className:"w-16 h-16 border-4 border-[#E5DEC9] border-t-[#A17A16] rounded-full animate-spin mx-auto"}),c.jsx("h3",{className:"font-serif text-xl font-bold text-gray-900",children:"Synthesizing Volumetric 3D Model..."}),c.jsx("div",{className:"max-w-xs mx-auto bg-gray-200 h-2 rounded-full overflow-hidden",children:c.jsx("div",{className:"bg-[#A17A16] h-full transition-all duration-300",style:{width:`${te}%`}})}),c.jsx("p",{className:"text-xs font-mono text-gray-500",children:"Mapping Multi-Angle Surface Textures to 3D Furniture Mesh"})]}),!ve&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex bg-[#E5DEC9]/50 p-1 rounded-2xl mb-6 border border-[#E5DEC9]",children:[c.jsx("button",{type:"button",onClick:()=>r("details"),className:`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${i==="details"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:c.jsx("span",{children:"1. ITEM INFORMATION"})}),c.jsxs("button",{type:"button",onClick:()=>r("multi_angle_capture"),className:`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${i==="multi_angle_capture"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[c.jsx(ds,{className:"w-3.5 h-3.5 text-[#A17A16]"}),c.jsx("span",{children:"2. 3D MULTI-ANGLE CAPTURE"})]})]}),i==="details"&&c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Furniture Title"}),c.jsx("input",{type:"text",required:!0,value:a,onChange:ie=>l(ie.target.value),placeholder:"e.g. Vintage Italian Leather Armchair",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Category"}),c.jsxs("select",{value:h,onChange:ie=>p(ie.target.value),className:"w-full px-3 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]",children:[c.jsx("option",{value:"Chairs",children:"Chairs & Armchairs"}),c.jsx("option",{value:"Sofas",children:"Sofas & Couches"}),c.jsx("option",{value:"Tables",children:"Coffee & Dining Tables"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Listing Price ($ USD)"}),c.jsx("input",{type:"number",required:!0,value:u,onChange:ie=>f(ie.target.value),placeholder:"450",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16] font-bold text-[#A17A16]"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Material Composition"}),c.jsx("input",{type:"text",value:m,onChange:ie=>_(ie.target.value),placeholder:"e.g. Top-Grain Leather & Walnut Wood",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Design Era"}),c.jsx("input",{type:"text",value:y,onChange:ie=>g(ie.target.value),placeholder:"e.g. Mid-Century Modern (1960s)",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),c.jsxs("div",{className:"p-5 bg-[#F9F4E9]/50 border border-[#E9D3A4]/60 rounded-2xl space-y-4",children:[c.jsxs("h3",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider flex items-center space-x-1.5",children:[c.jsx(ds,{className:"w-4 h-4"}),c.jsx("span",{children:"AI & Regression Pricing Assistant"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[10px] font-mono font-bold text-gray-600 uppercase mb-1",children:"Condition Grade"}),c.jsxs("select",{value:b,onChange:ie=>P(ie.target.value),className:"w-full px-2.5 py-2 bg-white border border-[#E5DEC9] rounded-lg text-xs focus:outline-none focus:border-[#A17A16] font-semibold",children:[c.jsx("option",{value:"EXCELLENT",children:"EXCELLENT"}),c.jsx("option",{value:"GOOD",children:"GOOD"}),c.jsx("option",{value:"FAIR",children:"FAIR"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[10px] font-mono font-bold text-gray-600 uppercase mb-1",children:"Original Price ($)"}),c.jsx("input",{type:"number",value:x,onChange:ie=>E(ie.target.value),placeholder:"e.g. 1200",className:"w-full px-3 py-2 bg-white border border-[#E5DEC9] rounded-lg text-xs focus:outline-none focus:border-[#A17A16]"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[10px] font-mono font-bold text-gray-600 uppercase mb-1",children:"Item Age (Years)"}),c.jsx("input",{type:"number",step:"0.5",value:C,onChange:ie=>T(ie.target.value),placeholder:"e.g. 2.5",className:"w-full px-3 py-2 bg-white border border-[#E5DEC9] rounded-lg text-xs focus:outline-none focus:border-[#A17A16]"})]})]}),(I||M||N)&&c.jsxs("div",{className:"bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#E9D3A4] transition-all animate-fadeIn",children:[I&&c.jsxs("div",{className:"flex items-center justify-center space-x-2 py-2 text-[11px] text-gray-500 font-mono",children:[c.jsx(yx,{className:"w-4 h-4 animate-spin text-[#A17A16]"}),c.jsx("span",{children:"Computing pricing regression..."})]}),N&&c.jsx("div",{className:"text-[11px] text-rose-600 py-1 font-mono text-center",children:N}),M&&!I&&c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{className:"space-y-1 text-center sm:text-left",children:[c.jsx("span",{className:"text-[9px] font-mono font-bold text-[#A17A16] uppercase tracking-wider block",children:"Suggested Price Range"}),c.jsxs("span",{className:"text-lg font-serif font-bold text-gray-900 block",children:["$",M.min," - $",M.max]}),c.jsxs("p",{className:"text-[11px] text-gray-500 max-w-sm leading-relaxed",children:["Suggested listing price is ",c.jsxs("strong",{className:"text-gray-800",children:["$",M.suggested]}),". This accounts for age depreciation and condition grade."]})]}),c.jsxs("button",{type:"button",onClick:()=>f(M.suggested.toString()),className:"bg-[#A17A16] hover:bg-[#8C5A2B] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-md transition-all whitespace-nowrap flex items-center space-x-1.5",children:[c.jsx(Yu,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"APPLY SUGGESTED PRICE"})]})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Craftsmanship & Condition Description"}),c.jsx("textarea",{rows:3,value:d,onChange:ie=>v(ie.target.value),placeholder:"Describe condition details, wood grain patina, cushion density, and history...",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),c.jsx("button",{type:"button",onClick:()=>r("multi_angle_capture"),className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md tracking-wider flex items-center justify-center space-x-2",children:c.jsx("span",{children:"NEXT: CAPTURE 4-ANGLE 3D PHOTOS"})})]}),i==="multi_angle_capture"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex justify-center space-x-4",children:[c.jsxs("button",{type:"button",onClick:()=>{De(),o("upload")},className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${s==="upload"?"bg-[#1E232A] text-white border-[#1E232A]":"bg-white text-gray-700 border-gray-300"}`,children:[c.jsx(ay,{className:"w-4 h-4"}),c.jsx("span",{children:"Upload 4 Angle Photos"})]}),c.jsxs("button",{type:"button",onClick:()=>o("camera"),className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${s==="camera"?"bg-[#A17A16] text-white border-[#A17A16]":"bg-white text-gray-700 border-gray-300"}`,children:[c.jsx(yc,{className:"w-4 h-4"}),c.jsx("span",{children:"Real-Time Device Camera Scanner"})]})]}),ee&&c.jsxs("div",{className:"p-4 bg-black rounded-2xl text-center space-y-3 relative",children:[c.jsx("video",{ref:G,autoPlay:!0,playsInline:!0,className:"w-full h-56 object-cover rounded-xl border border-white/20"}),c.jsx("canvas",{ref:fe,className:"hidden"}),c.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[c.jsxs("button",{type:"button",onClick:Ae,className:"gold-gradient-btn px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg flex items-center space-x-2",children:[c.jsx(yc,{className:"w-4 h-4"}),c.jsxs("span",{children:["CAPTURE ",q.toUpperCase()," ANGLE PHOTO"]})]}),c.jsx("button",{type:"button",onClick:De,className:"bg-white/20 hover:bg-white/30 text-white px-4 py-2.5 rounded-xl font-bold text-xs",children:"Cancel"})]})]}),c.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{key:"front",label:"1. FRONT VIEW",desc:"Front seat & frame face"},{key:"back",label:"2. BACK VIEW",desc:"Rear upholstery & back legs"},{key:"side",label:"3. SIDE VIEW",desc:"Armrest & side profile"},{key:"top",label:"4. TOP / DETAIL VIEW",desc:"Top cushion or table surface"}].map(ie=>c.jsxs("div",{className:"bg-white p-3 rounded-2xl border border-[#E5DEC9] space-y-2 relative group",children:[c.jsxs("div",{className:"flex justify-between items-center text-xs font-mono font-bold text-[#A17A16]",children:[c.jsx("span",{children:ie.label}),V[ie.key]&&c.jsx(Yu,{className:"w-4 h-4 text-emerald-600"})]}),c.jsx("div",{className:"relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200",children:V[ie.key]?c.jsx("img",{src:V[ie.key],alt:ie.label,className:"w-full h-full object-cover"}):c.jsx("div",{className:"w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs text-center p-2",children:c.jsx("span",{children:ie.desc})})}),c.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[c.jsxs("label",{className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center cursor-pointer",children:[c.jsx("span",{children:"Choose File"}),c.jsx("input",{type:"file",accept:"image/*",onChange:Me=>O(Me,ie.key),className:"hidden"})]}),c.jsx("button",{type:"button",onClick:()=>oe(ie.key),className:"bg-[#F9F4E9] text-[#A17A16] hover:bg-[#E9D3A4] p-1.5 rounded-lg",title:"Snap with device camera",children:c.jsx(yc,{className:"w-3.5 h-3.5"})})]})]},ie.key))}),c.jsxs("button",{type:"button",onClick:Ke,className:"w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm shadow-xl tracking-wider flex items-center justify-center space-x-2",children:[c.jsx(ds,{className:"w-5 h-5"}),c.jsx("span",{children:"PUBLISH ITEM & GENERATE 360° 3D MODEL"})]})]})]})]})})};async function ub(t){try{const e=await fetch("/api/stripe/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await e.json();if(!e.ok)throw new Error(n.error||"Failed to initialize Stripe Payment Intent.");return n}catch(e){throw console.error("API Error in createPaymentIntentApi:",e),e}}function db({cart:t=[],isOpen:e,onClose:n,onPaymentSuccess:i,buyerUser:r}){var F;const[s,o]=J.useState(!1),[a,l]=J.useState(""),[u,f]=J.useState(!1),[h,p]=J.useState(null),[m,_]=J.useState("4242 4242 4242 4242"),[y,g]=J.useState("12/28"),[d,v]=J.useState("123"),[x,E]=J.useState("10001");if(!e||!t||t.length===0)return null;const C=t.reduce((N,j)=>N+Number(j.price||0),0),b=Number((C*.1).toFixed(2)),P=Number((C-b).toFixed(2)),M=t.map(N=>N.title).join(", "),S=()=>{_("4242 4242 4242 4242"),g("12/28"),v("123"),E("10001")},I=async N=>{var j,V,K;N.preventDefault(),o(!0),l("");try{const ee=await ub({amount:C,productTitle:M,productId:t.map(L=>L._id||L.id).join(","),buyerEmail:(r==null?void 0:r.email)||"buyer@decorate3d.com",sellerStripeAccountId:((j=t[0])==null?void 0:j.sellerStripeAccountId)||"acct_1TestSellerAccount123"});if(ee.success)p({orderId:ee.orderId,paymentIntentId:ee.paymentIntentId,totalPaid:C,platformFee:((V=ee.summary)==null?void 0:V.platformCommissionFee)||b,sellerPayout:((K=ee.summary)==null?void 0:K.sellerEarnings)||P,itemCount:t.length}),f(!0),o(!1),i&&i(ee);else throw new Error(ee.error||"Payment failed.")}catch(ee){l(ee.message||"An error occurred while communicating with Stripe."),o(!1)}};return c.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",children:c.jsxs("div",{className:"bg-white border border-[#E5DEC9] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col relative max-h-[90vh]",children:[c.jsxs("div",{className:"bg-[#1E232A] text-white p-6 border-b border-[#A17A16]/30 flex justify-between items-center shrink-0",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-2xl bg-[#A17A16]/20 border border-[#A17A16] flex items-center justify-center text-[#A17A16]",children:c.jsx(xx,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#A17A16] uppercase font-bold",children:"STRIPE TEST MODE"}),c.jsx("h2",{className:"font-serif text-xl font-bold",children:"Secure Escrow Checkout"})]})]}),c.jsx("button",{onClick:n,className:"p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors",children:c.jsx(Rs,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-y-auto space-y-5",children:u?c.jsxs("div",{className:"text-center py-6 space-y-6",children:[c.jsx("div",{className:"w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner",children:c.jsx(Yu,{className:"w-10 h-10"})}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("h3",{className:"font-serif text-2xl font-bold text-gray-900",children:"Stripe Payment Successful!"}),c.jsxs("p",{className:"text-xs text-gray-600 max-w-md mx-auto",children:[c.jsxs("strong",{children:[h==null?void 0:h.itemCount," item",(h==null?void 0:h.itemCount)>1?"s":""]})," totalling"," ",c.jsxs("strong",{children:["$",(F=h==null?void 0:h.totalPaid)==null?void 0:F.toFixed(2)]})," are locked safely in Decorate3D Escrow."]})]}),c.jsxs("div",{className:"bg-[#FBF9F5] border border-[#E5DEC9] rounded-2xl p-4 text-left text-xs space-y-2 font-mono",children:[c.jsxs("div",{className:"flex justify-between border-b border-[#E5DEC9] pb-2",children:[c.jsx("span",{className:"text-gray-500",children:"STRIPE PAYMENT INTENT:"}),c.jsx("span",{className:"font-bold text-gray-900 truncate max-w-[200px]",children:h==null?void 0:h.paymentIntentId})]}),c.jsxs("div",{className:"flex justify-between border-b border-[#E5DEC9] pb-2",children:[c.jsx("span",{className:"text-gray-500",children:"ITEMS IN ORDER:"}),c.jsxs("span",{className:"font-bold text-gray-900",children:[h==null?void 0:h.itemCount," furniture item",(h==null?void 0:h.itemCount)>1?"s":""]})]}),c.jsxs("div",{className:"flex justify-between border-b border-[#E5DEC9] pb-2",children:[c.jsx("span",{className:"text-gray-500",children:"PLATFORM FEE (10%):"}),c.jsxs("span",{className:"font-bold text-[#A17A16]",children:["$",h==null?void 0:h.platformFee]})]}),c.jsxs("div",{className:"flex justify-between border-b border-[#E5DEC9] pb-2",children:[c.jsx("span",{className:"text-gray-500",children:"SELLER EARNINGS (90%):"}),c.jsxs("span",{className:"font-bold text-emerald-600",children:["$",h==null?void 0:h.sellerPayout]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-500",children:"ESCROW STATUS:"}),c.jsx("span",{className:"font-bold text-indigo-600",children:"LOCKED_IN_ESCROW"})]})]}),c.jsx("button",{onClick:n,className:"w-full bg-[#1E232A] text-white hover:bg-gray-800 py-3.5 rounded-xl font-bold text-sm shadow-md",children:"RETURN TO MARKETPLACE"})]}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"border border-[#E5DEC9] rounded-2xl overflow-hidden",children:[c.jsxs("div",{className:"flex items-center space-x-2 px-4 py-3 bg-[#FBF9F5] border-b border-[#E5DEC9]",children:[c.jsx(Sx,{className:"w-4 h-4 text-[#A17A16]"}),c.jsxs("span",{className:"text-xs font-bold text-gray-700 uppercase tracking-wide",children:["Escrow Cart (",t.length," ",t.length===1?"Item":"Items",")"]})]}),c.jsx("div",{className:"divide-y divide-[#E5DEC9]",children:t.map((N,j)=>{var V,K;return c.jsxs("div",{className:"flex items-center space-x-3 px-4 py-3 bg-white",children:[c.jsx("img",{src:((V=N.images)==null?void 0:V[0])||"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200",alt:N.title,className:"w-12 h-12 rounded-lg object-cover border border-[#E5DEC9] shrink-0"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:"font-serif text-sm font-bold text-gray-900 truncate",children:N.title}),c.jsx("p",{className:"text-xs text-gray-400 truncate",children:N.material||((K=N.seller)==null?void 0:K.name)||""})]}),c.jsxs("span",{className:"font-serif font-bold text-[#A17A16] text-sm shrink-0",children:["$",Number(N.price).toFixed(2)]})]},j)})}),c.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-[#FBF9F5] border-t border-[#E5DEC9]",children:[c.jsx("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wide",children:"Cart Total"}),c.jsxs("span",{className:"font-serif font-bold text-gray-900 text-base",children:["$",C.toFixed(2)]})]})]}),c.jsxs("div",{className:"bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl p-4 space-y-3",children:[c.jsxs("div",{className:"flex justify-between items-center text-xs font-mono font-bold text-[#A17A16]",children:[c.jsx("span",{className:"uppercase",children:"STRIPE CONNECT AUTOMATED COMMISSION SPLIT"}),c.jsx("span",{children:"TEST MODE"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs pt-1 border-t border-[#E9D3A4]/60",children:[c.jsxs("div",{className:"bg-white/80 p-2.5 rounded-xl border border-[#E9D3A4]/40",children:[c.jsxs("div",{className:"flex items-center text-gray-600 space-x-1 font-semibold",children:[c.jsx(j_,{className:"w-3.5 h-3.5 text-[#A17A16]"}),c.jsx("span",{children:"Platform Fee (10%)"})]}),c.jsxs("span",{className:"font-serif font-bold text-gray-900 text-sm mt-1 block",children:["$",b.toFixed(2)]})]}),c.jsxs("div",{className:"bg-white/80 p-2.5 rounded-xl border border-[#E9D3A4]/40",children:[c.jsxs("div",{className:"flex items-center text-gray-600 space-x-1 font-semibold",children:[c.jsx(ly,{className:"w-3.5 h-3.5 text-emerald-600"}),c.jsx("span",{children:"Seller Net (90%)"})]}),c.jsxs("span",{className:"font-serif font-bold text-emerald-700 text-sm mt-1 block",children:["$",P.toFixed(2)]})]})]})]}),c.jsxs("div",{className:"p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-800",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(wh,{className:"w-4 h-4 text-amber-600 shrink-0"}),c.jsxs("span",{children:["Stripe Sandbox: Use test card ",c.jsx("strong",{className:"font-mono",children:"4242 4242 4242 4242"})]})]}),c.jsx("button",{type:"button",onClick:S,className:"px-2.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-lg font-bold text-[11px] transition-colors",children:"Auto-fill Test Card"})]}),c.jsxs("form",{onSubmit:I,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase mb-1",children:"Card Number"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"text",value:m,onChange:N=>_(N.target.value),placeholder:"4242 4242 4242 4242",required:!0,className:"w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm focus:outline-none focus:border-[#A17A16] focus:bg-white"}),c.jsx(wh,{className:"w-5 h-5 text-gray-400 absolute left-3 top-3.5"})]})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase mb-1",children:"Expires"}),c.jsx("input",{type:"text",value:y,onChange:N=>g(N.target.value),placeholder:"MM/YY",required:!0,className:"w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-center focus:outline-none focus:border-[#A17A16] focus:bg-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase mb-1",children:"CVC"}),c.jsx("input",{type:"text",value:d,onChange:N=>v(N.target.value),placeholder:"123",required:!0,className:"w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-center focus:outline-none focus:border-[#A17A16] focus:bg-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-gray-700 uppercase mb-1",children:"Postal Code"}),c.jsx("input",{type:"text",value:x,onChange:N=>E(N.target.value),placeholder:"10001",required:!0,className:"w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm text-center focus:outline-none focus:border-[#A17A16] focus:bg-white"})]})]}),a&&c.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center space-x-2",children:[c.jsx(gx,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:a})]}),c.jsx("button",{type:"submit",disabled:s,className:"w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center space-x-2 tracking-wide disabled:opacity-50",children:s?c.jsx("span",{children:"Processing Stripe Escrow Payment..."}):c.jsxs(c.Fragment,{children:[c.jsxs("span",{children:["PAY $",C.toFixed(2)," VIA STRIPE ESCROW"]}),c.jsx(px,{className:"w-4 h-4"})]})})]})]})}),c.jsxs("div",{className:"bg-[#FBF9F5] px-6 py-3 border-t border-[#E5DEC9] text-[11px] text-gray-500 flex items-center justify-between shrink-0",children:[c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx(Bo,{className:"w-4 h-4 text-emerald-600"}),c.jsx("span",{children:"256-Bit SSL Encrypted Stripe Test Mode API"})]}),c.jsx("span",{className:"font-mono",children:"Decorate3D"})]})]})})}const tu=[{_id:"66b1a1112233445566778899",title:"Mid-Century Modern Tan Leather Lounge Chair",subtitle:"Archival Series № 422",price:450,estimatedNewPrice:1200,category:"Chairs",conditionGrade:"GOOD",isRareFind:!0,description:"A quintessential piece of mid-century design, this lounge chair features a masterfully carved solid walnut wood frame. The premium top-grain leather in 'Autumn Tan' displays a rich patina, reflecting its curated history. Ergonomically angled for long-term comfort with signature diamond tufting.",material:"Top-Grain Leather & Walnut Wood",era:"Mid-Century Modern (1960s)",dimensions:{width:"32 in",depth:"35 in",height:"34 in"},images:["https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Archival Series № 422",polygonCount:"124.2k",lodLevel:"ULTRA",defaultTexture:"tan",materialVariants:[{id:"tan",name:"TAN",colorHex:"#A17A16",previewColor:"#8C5A2B"},{id:"forest",name:"FOREST",colorHex:"#526B5C",previewColor:"#435B4D"},{id:"ebony",name:"EBONY",colorHex:"#3A3A3C",previewColor:"#2B2B2D"}],geometryType:"lounge_chair"},seller:{name:"Muhtasim Ahmed",rating:4.9,verified:!0,location:"Dhaka, Bangladesh"}},{_id:"66b1a22233445566778899aa",title:"Minimalist Scandinavian Bouclé Accent Armchair",subtitle:"Nordic Edition № 108",price:320,estimatedNewPrice:850,category:"Chairs",conditionGrade:"EXCELLENT",isRareFind:!1,description:"Soft tactile cream bouclé fabric wrapped around a curved solid birch wood silhouette. High-density foam cushions offer plush yet supportive seating.",material:"Textured Bouclé Fabric & Birch Wood",era:"Contemporary Scandinavian",dimensions:{width:"30 in",depth:"31 in",height:"30 in"},images:["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Nordic Edition № 108",polygonCount:"86.4k",lodLevel:"HIGH",defaultTexture:"tan",materialVariants:[{id:"tan",name:"CREAM",colorHex:"#E5DEC9",previewColor:"#D6CCA9"},{id:"forest",name:"MINT",colorHex:"#8DAA9D",previewColor:"#759385"},{id:"ebony",name:"CHARCOAL",colorHex:"#41444B",previewColor:"#32353B"}],geometryType:"lounge_chair"},seller:{name:"Ashfaq Habib Rafi",rating:5,verified:!0,location:"Gulshan, Dhaka"}},{_id:"66b1a333445566778899aabb",title:"Restoration Hardware Leather Club Chesterfield Sofa",subtitle:"Heritage Collection № 003",price:1150,estimatedNewPrice:3400,category:"Sofas",conditionGrade:"GOOD",isRareFind:!0,description:"Handcrafted deep button-tufted cognac leather Chesterfield sofa. Deep seating with antiqued brass nailhead trim details along armrests.",material:"Vintage Cognac Leather & Kiln-Dried Hardwood",era:"Traditional English Classic",dimensions:{width:"88 in",depth:"39 in",height:"32 in"},images:["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Heritage Collection № 003",polygonCount:"198.5k",lodLevel:"ULTRA",defaultTexture:"tan",materialVariants:[{id:"tan",name:"COGNAC",colorHex:"#995B2A",previewColor:"#804A20"},{id:"forest",name:"EMERALD",colorHex:"#1C4A37",previewColor:"#143729"},{id:"ebony",name:"ONXY",colorHex:"#1F1F21",previewColor:"#141416"}],geometryType:"sofa"},seller:{name:"Injamamul Haque Fahim",rating:4.8,verified:!0,location:"Dhanmondi, Dhaka"}},{_id:"66b1a4445566778899aabbcc",title:"Organic Live-Edge Walnut & Black Steel Coffee Table",subtitle:"Artisan Studio № 77",price:280,estimatedNewPrice:700,category:"Tables",conditionGrade:"EXCELLENT",isRareFind:!1,description:"Sustainably harvested American black walnut live-edge slab finished with organic oil rub, resting on matte black hairpin metal legs.",material:"Solid Walnut Wood & Powder-Coated Steel",era:"Modern Industrial",dimensions:{width:"48 in",depth:"24 in",height:"18 in"},images:["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Artisan Studio № 77",polygonCount:"42.1k",lodLevel:"MEDIUM",defaultTexture:"tan",materialVariants:[{id:"tan",name:"WALNUT",colorHex:"#6E4728",previewColor:"#59371E"},{id:"forest",name:"OAK",colorHex:"#C49A6C",previewColor:"#B08658"},{id:"ebony",name:"ESPRESSO",colorHex:"#2D231C",previewColor:"#1E1611"}],geometryType:"table"},seller:{name:"Shouvik Banik",rating:4.9,verified:!0,location:"Uttara, Dhaka"}}];function fb(){const[t,e]=J.useState(tu),[n,i]=J.useState(tu[0]),[r,s]=J.useState("marketplace"),[o,a]=J.useState("buyer"),[l,u]=J.useState(!1),[f,h]=J.useState(!1),[p,m]=J.useState(!1),[_,y]=J.useState(!1),[g,d]=J.useState(!1),[v,x]=J.useState(!1),[E,C]=J.useState(null),[T,b]=J.useState(()=>{const G=localStorage.getItem("decorate3d_user");return G?JSON.parse(G):null}),[P,M]=J.useState([tu[0]]),S=(G,fe,ve)=>{C({type:G,title:fe,message:ve})};J.useEffect(()=>{const G=()=>{const fe=window.location.pathname.toLowerCase();let ve="buyer";fe.includes("/seller")?ve="seller":fe.includes("/courier")?ve="courier":fe.includes("/admin")?ve="admin":ve="buyer";const H=localStorage.getItem("decorate3d_user"),te=H?JSON.parse(H):null;te&&te.role!==ve?(b(null),localStorage.removeItem("decorate3d_user"),C({type:"info",title:"Role Route Switched via URL",message:`Switched web address to /${ve}. Active ${te.role.toUpperCase()} session has been logged out.`}),m(!0)):!te&&ve!=="buyer"&&m(!0),s(ve==="seller"?"seller_dashboard":ve==="courier"?"logistics":ve==="admin"?"admin_dashboard":le=>le==="seller_dashboard"||le==="admin_dashboard"||le==="logistics"?"marketplace":le),a(ve)};return G(),window.addEventListener("popstate",G),()=>window.removeEventListener("popstate",G)},[]),J.useEffect(()=>{T?localStorage.setItem("decorate3d_user",JSON.stringify(T)):localStorage.removeItem("decorate3d_user")},[T]),J.useEffect(()=>{fetch("/api/products").then(G=>G.json()).then(G=>{G.success&&G.data&&G.data.length>0&&e(G.data)}).catch(()=>{})},[]);const I=(G=null)=>{G&&i(G),u(!0)},F=()=>{u(!1)},N=()=>{h(!1),h(!0)},j=()=>{h(!1)},V=()=>{T?d(!0):(m(!0),S("info","Login Required","Please log in to view your Escrow Cart and proceed to checkout."))},K=G=>{if(!T){m(!0),S("info","Login Required","Please log in to add items to your Escrow Cart.");return}M(fe=>[...fe,G]),d(!0),S("success","Item Added to Escrow Cart",`"${G.title}" ($${G.price}) has been placed in your safe escrow cart.`)},ee=G=>{M(fe=>fe.filter((ve,H)=>H!==G))},L=()=>{if(!T){d(!1),m(!0),S("info","Login Required","Please log in to complete your Stripe Escrow payment.");return}x(!0)},q=()=>{b(null),localStorage.removeItem("decorate3d_user"),s("marketplace"),S("info","Logged Out","You have been successfully logged out of your account.")},$=G=>{b(G),localStorage.setItem("decorate3d_user",JSON.stringify(G)),S("success","Profile Updated","Your profile details have been saved successfully.")};return c.jsxs("div",{className:"min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E232A]",children:[c.jsx(s0,{notification:E,onClose:()=>C(null)}),c.jsx(dy,{activeTab:r,setActiveTab:s,cartCount:P.length,openAuthModal:()=>m(!0),user:T,onLogout:q,openCart:V,openSellerListingModal:()=>y(!0)}),c.jsxs("main",{className:"flex-1",children:[r==="marketplace"&&c.jsx(py,{products:t,onSelectProduct:G=>{i(G),s("product_detail")},open3DInspector:I}),r==="product_detail"&&c.jsx(my,{product:n,open3DInspector:I,onAddToCart:K,onLaunchRoomPlanner:N}),r==="seller_dashboard"&&c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn",children:[c.jsxs("div",{className:"bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6",children:[c.jsxs("div",{children:[c.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full uppercase",children:"SELLER PORTAL (/seller)"}),c.jsx("h1",{className:"font-serif text-3xl font-bold mt-2",children:"Furniture Seller 3D Inventory Hub"}),c.jsx("p",{className:"text-sm text-gray-300 mt-1 max-w-xl",children:"Upload multi-angle photos or snap with your device camera to generate interactive 360° 3D models for buyers."})]}),c.jsxs("button",{onClick:()=>y(!0),className:"gold-gradient-btn px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center space-x-2 whitespace-nowrap",children:[c.jsx(En,{className:"w-5 h-5"}),c.jsx("span",{children:"+ LIST NEW ITEM WITH 3D SCANNER"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm",children:[c.jsx("span",{className:"text-xs font-mono text-gray-400 font-bold block",children:"ACTIVE LISTINGS"}),c.jsxs("span",{className:"font-serif text-3xl font-bold text-gray-900 mt-1 block",children:[t.length," Items"]}),c.jsx("span",{className:"text-xs text-emerald-600 font-bold mt-2 inline-block",children:"100% 3D Model Verified"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm",children:[c.jsx("span",{className:"text-xs font-mono text-gray-400 font-bold block",children:"TOTAL BIDS / INQUIRIES"}),c.jsx("span",{className:"font-serif text-3xl font-bold text-[#A17A16] mt-1 block",children:"18 Offers"}),c.jsx("span",{className:"text-xs text-gray-500 mt-2 inline-block",children:"Escrow Locked Bids"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm",children:[c.jsx("span",{className:"text-xs font-mono text-gray-400 font-bold block",children:"SELLER ACCOUNT ROLE"}),c.jsx("span",{className:"font-serif text-2xl font-bold text-gray-900 mt-1 block",children:(T==null?void 0:T.role)==="seller"?T.name:"Seller Account Required"}),c.jsx("span",{className:"text-xs text-gray-500 mt-2 inline-block",children:"Role Isolated Database Token"})]})]}),c.jsxs("div",{className:"bg-white rounded-3xl p-6 border border-[#E5DEC9] shadow-sm space-y-4",children:[c.jsx("h3",{className:"font-serif text-xl font-bold text-gray-900",children:"Your Listed 3D Furniture Items"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:t.map(G=>c.jsxs("div",{className:"border border-[#E5DEC9] rounded-2xl p-3 space-y-2 bg-[#FBF9F5]",children:[c.jsx("img",{src:G.images[0],alt:G.title,className:"w-full h-36 object-cover rounded-xl"}),c.jsx("h4",{className:"font-serif font-bold text-sm text-gray-900 truncate",children:G.title}),c.jsxs("span",{className:"font-mono text-sm font-bold text-[#A17A16]",children:["$",G.price]}),c.jsxs("button",{onClick:()=>I(G),className:"w-full bg-white hover:bg-gray-100 text-xs font-bold py-2 rounded-xl border border-[#E5DEC9] flex items-center justify-center space-x-1",children:[c.jsx(En,{className:"w-3.5 h-3.5 text-[#A17A16]"}),c.jsx("span",{children:"INSPECT 3D MODEL"})]})]},G._id))})]})]}),r==="logistics"&&c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn",children:c.jsxs("div",{className:"bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6",children:[c.jsxs("div",{children:[c.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full uppercase",children:"COURIER PORTAL (/courier)"}),c.jsx("h1",{className:"font-serif text-3xl font-bold mt-2",children:"Logistics & Geo-Radius Bidding Hub"}),c.jsx("p",{className:"text-sm text-gray-300 mt-1 max-w-xl",children:"Connect local courier drivers, calculate distance matrix quotes, and verify delivery with OTP handshake codes."})]}),c.jsxs("button",{onClick:()=>S("info","Courier Bid Placed","Submitted $45 delivery bid for local Dhaka zone dispatch."),className:"gold-gradient-btn px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center space-x-2 whitespace-nowrap",children:[c.jsx(oy,{className:"w-5 h-5"}),c.jsx("span",{children:"BID ON OPEN DELIVERIES"})]})]})}),r==="admin_dashboard"&&c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn",children:c.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-[#E5DEC9] shadow-xl space-y-6",children:[c.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full uppercase",children:"ADMIN PORTAL (/admin)"}),c.jsx("h1",{className:"font-serif text-3xl font-bold text-gray-900",children:"System Administrator Audit Hub"}),c.jsx("p",{className:"text-sm text-gray-600",children:"Audits platform security, monitors Escrow transactions, and manages role-isolated database accounts."}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-4",children:[c.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]",children:[c.jsx("span",{className:"text-xs font-mono text-[#A17A16] font-bold block",children:"SYSTEM STATUS"}),c.jsx("span",{className:"text-lg font-bold text-gray-900 mt-1 block",children:"JWT & Nodemailer 2FA Active"})]}),c.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]",children:[c.jsx("span",{className:"text-xs font-mono text-[#A17A16] font-bold block",children:"ROLE ISOLATION"}),c.jsx("span",{className:"text-lg font-bold text-gray-900 mt-1 block",children:"Strict (email, role) Compound Key"})]}),c.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]",children:[c.jsx("span",{className:"text-xs font-mono text-[#A17A16] font-bold block",children:"3D VOLUMETRIC ENGINE"}),c.jsx("span",{className:"text-lg font-bold text-gray-900 mt-1 block",children:"Three.js 360° Texture Map Ready"})]})]})]})}),r==="profile"&&c.jsx(gy,{user:T,onUpdateProfile:$,onLogout:q,openAuthModal:()=>m(!0)}),r==="room_planner"&&c.jsx("div",{className:"max-w-7xl mx-auto px-4 py-12 text-center space-y-6",children:c.jsxs("div",{className:"bg-white rounded-3xl p-12 border border-[#E5DEC9] shadow-sm max-w-2xl mx-auto space-y-4",children:[c.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full",children:"3D SPATIAL CANVAS"}),c.jsx("h2",{className:"font-serif text-3xl font-bold",children:"Virtual 3D Room Floor Planner"}),c.jsx("p",{className:"text-sm text-gray-600",children:"Interactive room grid editor for testing spatial furniture placement before buying."}),c.jsx("button",{onClick:N,className:"gold-gradient-btn px-8 py-3.5 rounded-xl font-bold text-sm shadow-md",children:"OPEN SPATIAL 3D PLANNER CANVAS"})]})})]}),c.jsx(ob,{product:n,isOpen:l,onClose:F,onAddToCart:K,onLaunchAR:N}),c.jsx(ab,{product:n,isOpen:f,onClose:j}),c.jsx(lb,{isOpen:p,initialRole:o,onClose:()=>m(!1),onLoginSuccess:G=>{b(G),S("success","Authentication Complete",`Welcome back, ${G.name}! Verified as ${G.role.toUpperCase()}.`)}}),c.jsx(xy,{cart:P,onRemoveFromCart:ee,onCheckout:L,isOpen:g,onClose:()=>d(!1)}),c.jsx(db,{cart:P,buyerUser:T,isOpen:v,onClose:()=>x(!1),onPaymentSuccess:G=>{var fe;M([]),d(!1),S("success","Stripe Escrow Lock Successful",`Payment of $${(fe=G.summary)==null?void 0:fe.totalPrice} processed via Stripe Test Mode! Funds locked in Escrow.`)}}),c.jsx(cb,{isOpen:_,onClose:()=>y(!1),onAddProduct:G=>{e(fe=>[G,...fe]),i(G),S("success","3D Model Generated & Item Published",`"${G.title}" multi-angle photos converted to 3D spatial mesh texture map!`),I(G)}}),c.jsx(fy,{})]})}nu.createRoot(document.getElementById("root")).render(c.jsx(fb,{}));
