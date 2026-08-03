(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function i0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qp={exports:{}},El={},Jp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),r0=Symbol.for("react.portal"),s0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),a0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),h0=Symbol.for("react.lazy"),hf=Symbol.iterator;function p0(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tm=Object.assign,nm={};function As(t,e,n){this.props=t,this.context=e,this.refs=nm,this.updater=n||em}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function im(){}im.prototype=As.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=nm,this.updater=n||em}var sd=rd.prototype=new im;sd.constructor=rd;tm(sd,As.prototype);sd.isPureReactComponent=!0;var pf=Array.isArray,rm=Object.prototype.hasOwnProperty,od={current:null},sm={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rm.call(e,i)&&!sm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Do,type:t,key:s,ref:o,props:r,_owner:od.current}}function m0(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function g0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mf=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?g0(""+t.key):e.toString(36)}function Da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Do:case r0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+$l(o,0):i,pf(r)?(n="",t!=null&&(n=t.replace(mf,"$&/")+"/"),Da(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=m0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+$l(s,a);o+=Da(s,e,n,l,r)}else if(l=p0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+$l(s,a++),o+=Da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wo(t,e,n){if(t==null)return t;var i=[],r=0;return Da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function x0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Ia={transition:null},v0={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:od};function am(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Wo,forEach:function(t,e,n){Wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wo(t,function(){e++}),e},toArray:function(t){return Wo(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=As;je.Fragment=s0;je.Profiler=a0;je.PureComponent=rd;je.StrictMode=o0;je.Suspense=d0;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;je.act=am;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rm.call(e,l)&&!sm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Do,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:c0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l0,_context:t},t.Consumer=t};je.createElement=om;je.createFactory=function(t){var e=om.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:u0,render:t}};je.isValidElement=ad;je.lazy=function(t){return{$$typeof:h0,_payload:{_status:-1,_result:t},_init:x0}};je.memo=function(t,e){return{$$typeof:f0,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};je.unstable_act=am;je.useCallback=function(t,e){return Yt.current.useCallback(t,e)};je.useContext=function(t){return Yt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Yt.current.useEffect(t,e)};je.useId=function(){return Yt.current.useId()};je.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Yt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};je.useRef=function(t){return Yt.current.useRef(t)};je.useState=function(t){return Yt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Yt.current.useTransition()};je.version="18.3.1";Jp.exports=je;var oe=Jp.exports;const _0=i0(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=oe,S0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,w0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A0={key:!0,ref:!0,__self:!0,__source:!0};function lm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)E0.call(e,i)&&!A0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S0,type:t,key:s,ref:o,props:r,_owner:w0.current}}El.Fragment=M0;El.jsx=lm;El.jsxs=lm;Qp.exports=El;var d=Qp.exports,nu={},cm={exports:{}},fn={},um={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,V){var U=C.length;C.push(V);e:for(;0<U;){var Q=U-1>>>1,ge=C[Q];if(0<r(ge,V))C[Q]=V,C[U]=ge,U=Q;else break e}}function n(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var V=C[0],U=C.pop();if(U!==V){C[0]=U;e:for(var Q=0,ge=C.length,ve=ge>>>1;Q<ve;){var j=2*(Q+1)-1,te=C[j],ue=j+1,se=C[ue];if(0>r(te,U))ue<ge&&0>r(se,te)?(C[Q]=se,C[ue]=U,Q=ue):(C[Q]=te,C[j]=U,Q=j);else if(ue<ge&&0>r(se,U))C[Q]=se,C[ue]=U,Q=ue;else break e}}return V}function r(C,V){var U=C.sortIndex-V.sortIndex;return U!==0?U:C.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,p=null,h=3,m=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(C){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=C)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function M(C){if(y=!1,x(C),!_)if(n(l)!==null)_=!0,Z(R);else{var V=n(c);V!==null&&ie(M,V.startTime-C)}}function R(C,V){_=!1,y&&(y=!1,u(P),P=-1),m=!0;var U=h;try{for(x(V),p=n(l);p!==null&&(!(p.expirationTime>V)||C&&!I());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,h=p.priorityLevel;var ge=Q(p.expirationTime<=V);V=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(l)&&i(l),x(V)}else i(l);p=n(l)}if(p!==null)var ve=!0;else{var j=n(c);j!==null&&ie(M,j.startTime-V),ve=!1}return ve}finally{p=null,h=U,m=!1}}var b=!1,T=null,P=-1,E=5,S=-1;function I(){return!(t.unstable_now()-S<E)}function O(){if(T!==null){var C=t.unstable_now();S=C;var V=!0;try{V=T(!0,C)}finally{V?L():(b=!1,T=null)}}else b=!1}var L;if(typeof v=="function")L=function(){v(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=O,L=function(){q.postMessage(null)}}else L=function(){g(O,0)};function Z(C){T=C,b||(b=!0,L())}function ie(C,V){P=g(function(){C(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Z(R))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var U=h;h=V;try{return C()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var U=h;h=C;try{return V()}finally{h=U}},t.unstable_scheduleCallback=function(C,V,U){var Q=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Q+U:Q):U=Q,C){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=U+ge,C={id:f++,callback:V,priorityLevel:C,startTime:U,expirationTime:ge,sortIndex:-1},U>Q?(C.sortIndex=U,e(c,C),n(l)===null&&C===n(c)&&(y?(u(P),P=-1):y=!0,ie(M,U-Q))):(C.sortIndex=ge,e(l,C),_||m||(_=!0,Z(R))),C},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(C){var V=h;return function(){var U=h;h=V;try{return C.apply(this,arguments)}finally{h=U}}}})(dm);um.exports=dm;var T0=um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=oe,dn=T0;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,fo={};function Mr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(fo[t]=e,t=0;t<e.length;t++)fm.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gf={},xf={};function R0(t){return iu.call(xf,t)?!0:iu.call(gf,t)?!1:C0.test(t)?xf[t]=!0:(gf[t]=!0,!1)}function N0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P0(t,e,n,i){if(e===null||typeof e>"u"||N0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,cd);It[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,cd);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,cd);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P0(e,n,r,i)&&(n=null),i||r===null?R0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),vf=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=vf&&t[vf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Yl;function Ys(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function L0(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case ru:return"Profiler";case dd:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pm:return(t.displayName||"Context")+".Consumer";case hm:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}function D0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=gm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qo(t){t._valueTracker||(t._valueTracker=I0(t))}function xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _f(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vm(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function cu(t,e){vm(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ks(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function _m(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $o,Sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){U0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function Em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var F0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(F0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,os=null,as=null;function Ef(t){if(t=Fo(t)){if(typeof gu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Cl(e),gu(t.stateNode,t.type,e))}}function wm(t){os?as?as.push(t):as=[t]:os=t}function Am(){if(os){var t=os,e=as;if(as=os=null,Ef(t),e)for(t=0;t<e.length;t++)Ef(e[t])}}function Tm(t,e){return t(e)}function bm(){}var Ql=!1;function Cm(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Tm(t,e,n)}finally{Ql=!1,(os!==null||as!==null)&&(bm(),Am())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var i=Cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var xu=!1;if(ci)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{xu=!1}function O0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,qa=null,$a=!1,vu=null,k0={onError:function(t){to=!0,qa=t}};function B0(t,e,n,i,r,s,o,a,l){to=!1,qa=null,O0.apply(k0,arguments)}function z0(t,e,n,i,r,s,o,a,l){if(B0.apply(this,arguments),to){if(to){var c=qa;to=!1,qa=null}else throw Error(re(198));$a||($a=!0,vu=c)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wf(t){if(Er(t)!==t)throw Error(re(188))}function H0(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wf(r),t;if(s===i)return wf(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Nm(t){return t=H0(t),t!==null?Pm(t):null}function Pm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pm(t);if(e!==null)return e;t=t.sibling}return null}var Lm=dn.unstable_scheduleCallback,Af=dn.unstable_cancelCallback,V0=dn.unstable_shouldYield,j0=dn.unstable_requestPaint,xt=dn.unstable_now,G0=dn.unstable_getCurrentPriorityLevel,md=dn.unstable_ImmediatePriority,Dm=dn.unstable_UserBlockingPriority,Ya=dn.unstable_NormalPriority,W0=dn.unstable_LowPriority,Im=dn.unstable_IdlePriority,wl=null,Wn=null;function X0(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:Y0,q0=Math.log,$0=Math.LN2;function Y0(t){return t>>>=0,t===0?32:31-(q0(t)/$0|0)|0}var Yo=64,Ko=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zs(a):(s&=o,s!==0&&(i=Zs(s)))}else o=n&~r,o!==0?i=Zs(o):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function K0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=K0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Um(){var t=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function Q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Om,xd,km,Bm,zm,yu=!1,Zo=[],Ni=null,Pi=null,Li=null,mo=new Map,go=new Map,wi=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fo(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ev(t,e,n,i,r){switch(e){case"focusin":return Ni=ks(Ni,t,e,n,i,r),!0;case"dragenter":return Pi=ks(Pi,t,e,n,i,r),!0;case"mouseover":return Li=ks(Li,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,ks(mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,ks(go.get(s)||null,t,e,n,i,r)),!0}return!1}function Hm(t){var e=cr(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=Rm(n),e!==null){t.blockedOn=e,zm(t.priority,function(){km(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mu=i,n.target.dispatchEvent(i),mu=null}else return e=Fo(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function bf(t,e,n){Ua(t)&&n.delete(e)}function tv(){yu=!1,Ni!==null&&Ua(Ni)&&(Ni=null),Pi!==null&&Ua(Pi)&&(Pi=null),Li!==null&&Ua(Li)&&(Li=null),mo.forEach(bf),go.forEach(bf)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,tv)))}function xo(t){function e(r){return Bs(r,t)}if(0<Zo.length){Bs(Zo[0],t);for(var n=1;n<Zo.length;n++){var i=Zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&Bs(Ni,t),Pi!==null&&Bs(Pi,t),Li!==null&&Bs(Li,t),mo.forEach(e),go.forEach(e),n=0;n<wi.length;n++)i=wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&wi.shift()}var ls=hi.ReactCurrentBatchConfig,Za=!0;function nv(t,e,n,i){var r=Je,s=ls.transition;ls.transition=null;try{Je=1,vd(t,e,n,i)}finally{Je=r,ls.transition=s}}function iv(t,e,n,i){var r=Je,s=ls.transition;ls.transition=null;try{Je=4,vd(t,e,n,i)}finally{Je=r,ls.transition=s}}function vd(t,e,n,i){if(Za){var r=Su(t,e,n,i);if(r===null)cc(t,e,i,Qa,n),Tf(t,i);else if(ev(r,t,e,n,i))i.stopPropagation();else if(Tf(t,i),e&4&&-1<J0.indexOf(t)){for(;r!==null;){var s=Fo(r);if(s!==null&&Om(s),s=Su(t,e,n,i),s===null&&cc(t,e,i,Qa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cc(t,e,i,null,n)}}var Qa=null;function Su(t,e,n,i){if(Qa=null,t=pd(i),t=cr(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function Vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G0()){case md:return 1;case Dm:return 4;case Ya:case W0:return 16;case Im:return 536870912;default:return 16}default:return 16}}var bi=null,_d=null,Fa=null;function jm(){if(Fa)return Fa;var t,e=_d,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fa=r.slice(t,1<i?1-i:void 0)}function Oa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function Cf(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:Cf,this.isPropagationStopped=Cf,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=hn(Ts),Uo=ht({},Ts,{view:0,detail:0}),rv=hn(Uo),ec,tc,zs,Al=ht({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(ec=t.screenX-zs.screenX,tc=t.screenY-zs.screenY):tc=ec=0,zs=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Rf=hn(Al),sv=ht({},Al,{dataTransfer:0}),ov=hn(sv),av=ht({},Uo,{relatedTarget:0}),nc=hn(av),lv=ht({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=hn(lv),uv=ht({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dv=hn(uv),fv=ht({},Ts,{data:0}),Nf=hn(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mv[t])?!!e[t]:!1}function Sd(){return gv}var xv=ht({},Uo,{key:function(t){if(t.key){var e=hv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?Oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vv=hn(xv),_v=ht({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=hn(_v),yv=ht({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),Sv=hn(yv),Mv=ht({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=hn(Mv),wv=ht({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=hn(wv),Tv=[9,13,27,32],Md=ci&&"CompositionEvent"in window,no=null;ci&&"documentMode"in document&&(no=document.documentMode);var bv=ci&&"TextEvent"in window&&!no,Gm=ci&&(!Md||no&&8<no&&11>=no),Lf=" ",Df=!1;function Wm(t,e){switch(t){case"keyup":return Tv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function Cv(t,e){switch(t){case"compositionend":return Xm(e);case"keypress":return e.which!==32?null:(Df=!0,Lf);case"textInput":return t=e.data,t===Lf&&Df?null:t;default:return null}}function Rv(t,e){if(qr)return t==="compositionend"||!Md&&Wm(t,e)?(t=jm(),Fa=_d=bi=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gm&&e.locale!=="ko"?null:e.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nv[t.type]:e==="textarea"}function qm(t,e,n,i){wm(i),e=Ja(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var io=null,vo=null;function Pv(t){rg(t,0)}function Tl(t){var e=Kr(t);if(xm(e))return t}function Lv(t,e){if(t==="change")return e}var $m=!1;if(ci){var ic;if(ci){var rc="oninput"in document;if(!rc){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),rc=typeof Uf.oninput=="function"}ic=rc}else ic=!1;$m=ic&&(!document.documentMode||9<document.documentMode)}function Ff(){io&&(io.detachEvent("onpropertychange",Ym),vo=io=null)}function Ym(t){if(t.propertyName==="value"&&Tl(vo)){var e=[];qm(e,vo,t,pd(t)),Cm(Pv,e)}}function Dv(t,e,n){t==="focusin"?(Ff(),io=e,vo=n,io.attachEvent("onpropertychange",Ym)):t==="focusout"&&Ff()}function Iv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(vo)}function Uv(t,e){if(t==="click")return Tl(e)}function Fv(t,e){if(t==="input"||t==="change")return Tl(e)}function Ov(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:Ov;function _o(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!On(t[r],e[r]))return!1}return!0}function Of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kf(t,e){var n=Of(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Of(n)}}function Km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zm(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kv(t){var e=Zm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Km(n.ownerDocument.documentElement,n)){if(i!==null&&Ed(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kf(n,s);var o=kf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bv=ci&&"documentMode"in document&&11>=document.documentMode,$r=null,Mu=null,ro=null,Eu=!1;function Bf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||$r==null||$r!==Xa(i)||(i=$r,"selectionStart"in i&&Ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&_o(ro,i)||(ro=i,i=Ja(Mu,"onSelect"),0<i.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function Jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},sc={},Qm={};ci&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function bl(t){if(sc[t])return sc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qm)return sc[t]=e[n];return t}var Jm=bl("animationend"),eg=bl("animationiteration"),tg=bl("animationstart"),ng=bl("transitionend"),ig=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){ig.set(t,e),Mr(e,[t])}for(var oc=0;oc<zf.length;oc++){var ac=zf[oc],zv=ac.toLowerCase(),Hv=ac[0].toUpperCase()+ac.slice(1);Wi(zv,"on"+Hv)}Wi(Jm,"onAnimationEnd");Wi(eg,"onAnimationIteration");Wi(tg,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(ng,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Hf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,z0(i,e,void 0,t),t.currentTarget=null}function rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,a,c),s=l}}}if($a)throw t=vu,$a=!1,vu=null,t}function st(t,e){var n=e[Cu];n===void 0&&(n=e[Cu]=new Set);var i=t+"__bubble";n.has(i)||(sg(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),sg(n,t,i,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ea]){t[ea]=!0,fm.forEach(function(n){n!=="selectionchange"&&(Vv.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,lc("selectionchange",!1,e))}}function sg(t,e,n,i){switch(Vm(e)){case 1:var r=nv;break;case 4:r=iv;break;default:r=vd}n=r.bind(null,e,n,t),r=void 0,!xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Cm(function(){var c=s,f=pd(n),p=[];e:{var h=ig.get(t);if(h!==void 0){var m=yd,_=t;switch(t){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":m=vv;break;case"focusin":_="focus",m=nc;break;case"focusout":_="blur",m=nc;break;case"beforeblur":case"afterblur":m=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Sv;break;case Jm:case eg:case tg:m=cv;break;case ng:m=Ev;break;case"scroll":m=rv;break;case"wheel":m=Av;break;case"copy":case"cut":case"paste":m=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pf}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,u!==null&&(M=po(v,u),M!=null&&y.push(So(v,M,x)))),g)break;v=v.return}0<y.length&&(h=new m(h,_,null,n,f),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==mu&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[ui]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?cr(_):null,_!==null&&(g=Er(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=Rf,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Pf,M="onPointerLeave",u="onPointerEnter",v="pointer"),g=m==null?h:Kr(m),x=_==null?h:Kr(_),h=new y(M,v+"leave",m,n,f),h.target=g,h.relatedTarget=x,M=null,cr(f)===c&&(y=new y(u,v+"enter",_,n,f),y.target=x,y.relatedTarget=g,M=y),g=M,m&&_)t:{for(y=m,u=_,v=0,x=y;x;x=Ar(x))v++;for(x=0,M=u;M;M=Ar(M))x++;for(;0<v-x;)y=Ar(y),v--;for(;0<x-v;)u=Ar(u),x--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Ar(y),u=Ar(u)}y=null}else y=null;m!==null&&Vf(p,h,m,y,!1),_!==null&&g!==null&&Vf(p,g,_,y,!0)}}e:{if(h=c?Kr(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=Lv;else if(If(h))if($m)R=Fv;else{R=Iv;var b=Dv}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Uv);if(R&&(R=R(t,c))){qm(p,R,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&uu(h,"number",h.value)}switch(b=c?Kr(c):window,t){case"focusin":(If(b)||b.contentEditable==="true")&&($r=b,Mu=c,ro=null);break;case"focusout":ro=Mu=$r=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Bf(p,n,f);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Bf(p,n,f)}var T;if(Md)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else qr?Wm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gm&&n.locale!=="ko"&&(qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&qr&&(T=jm()):(bi=f,_d="value"in bi?bi.value:bi.textContent,qr=!0)),b=Ja(c,P),0<b.length&&(P=new Nf(P,t,null,n,f),p.push({event:P,listeners:b}),T?P.data=T:(T=Xm(n),T!==null&&(P.data=T)))),(T=bv?Cv(t,n):Rv(t,n))&&(c=Ja(c,"onBeforeInput"),0<c.length&&(f=new Nf("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}rg(p,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(t,n),s!=null&&i.unshift(So(t,s,r)),s=po(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=po(n,s),l!=null&&o.unshift(So(n,l,a))):r||(l=po(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function jf(t){return(typeof t=="string"?t:""+t).replace(jv,`
`).replace(Gv,"")}function ta(t,e,n){if(e=jf(e),jf(t)!==e&&n)throw Error(re(425))}function el(){}var wu=null,Au=null;function Tu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(t){return Gf.resolve(null).then(t).catch(qv)}:bu;function qv(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xo(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Vn="__reactFiber$"+bs,Mo="__reactProps$"+bs,ui="__reactContainer$"+bs,Cu="__reactEvents$"+bs,$v="__reactListeners$"+bs,Yv="__reactHandles$"+bs;function cr(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wf(t);t!==null;){if(n=t[Vn])return n;t=Wf(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Vn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Cl(t){return t[Mo]||null}var Ru=[],Zr=-1;function Xi(t){return{current:t}}function at(t){0>Zr||(t.current=Ru[Zr],Ru[Zr]=null,Zr--)}function it(t,e){Zr++,Ru[Zr]=t.current,t.current=e}var Hi={},Vt=Xi(Hi),en=Xi(!1),gr=Hi;function ms(t,e){var n=t.type.contextTypes;if(!n)return Hi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function tl(){at(en),at(Vt)}function Xf(t,e,n){if(Vt.current!==Hi)throw Error(re(168));it(Vt,e),it(en,n)}function og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,D0(t)||"Unknown",r));return ht({},n,i)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,gr=Vt.current,it(Vt,t),it(en,en.current),!0}function qf(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=og(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,at(en),at(Vt),it(Vt,t)):at(en),it(en,n)}var ii=null,Rl=!1,dc=!1;function ag(t){ii===null?ii=[t]:ii.push(t)}function Kv(t){Rl=!0,ag(t)}function qi(){if(!dc&&ii!==null){dc=!0;var t=0,e=Je;try{var n=ii;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,Rl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),Lm(md,qi),r}finally{Je=e,dc=!1}}return null}var Qr=[],Jr=0,il=null,rl=0,vn=[],_n=0,xr=null,si=1,oi="";function nr(t,e){Qr[Jr++]=rl,Qr[Jr++]=il,il=t,rl=e}function lg(t,e,n){vn[_n++]=si,vn[_n++]=oi,vn[_n++]=xr,xr=t;var i=si;t=oi;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-Un(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function wd(t){t.return!==null&&(nr(t,1),lg(t,1,0))}function Ad(t){for(;t===il;)il=Qr[--Jr],Qr[Jr]=null,rl=Qr[--Jr],Qr[Jr]=null;for(;t===xr;)xr=vn[--_n],vn[_n]=null,oi=vn[--_n],vn[_n]=null,si=vn[--_n],vn[_n]=null}var un=null,cn=null,ut=!1,Dn=null;function cg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $f(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pu(t){if(ut){var e=cn;if(e){var n=e;if(!$f(t,e)){if(Nu(t))throw Error(re(418));e=Di(n.nextSibling);var i=un;e&&$f(t,e)?cg(i,n):(t.flags=t.flags&-4097|2,ut=!1,un=t)}}else{if(Nu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ut=!1,un=t}}}function Yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function na(t){if(t!==un)return!1;if(!ut)return Yf(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tu(t.type,t.memoizedProps)),e&&(e=cn)){if(Nu(t))throw ug(),Error(re(418));for(;e;)cg(t,e),e=Di(e.nextSibling)}if(Yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Di(t.stateNode.nextSibling):null;return!0}function ug(){for(var t=cn;t;)t=Di(t.nextSibling)}function gs(){cn=un=null,ut=!1}function Td(t){Dn===null?Dn=[t]:Dn.push(t)}var Zv=hi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ia(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kf(t){var e=t._init;return e(t._payload)}function dg(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Oi(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,M){return v===null||v.tag!==6?(v=vc(x,u.mode,M),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,M){var R=x.type;return R===Xr?f(u,v,x.props.children,M,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Mi&&Kf(R)===v.type)?(M=r(v,x.props),M.ref=Hs(u,v,x),M.return=u,M):(M=Ga(x.type,x.key,x.props,null,u.mode,M),M.ref=Hs(u,v,x),M.return=u,M)}function c(u,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=_c(x,u.mode,M),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function f(u,v,x,M,R){return v===null||v.tag!==7?(v=mr(x,u.mode,M,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function p(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xo:return x=Ga(v.type,v.key,v.props,null,u.mode,x),x.ref=Hs(u,null,v),x.return=u,x;case Wr:return v=_c(v,u.mode,x),v.return=u,v;case Mi:var M=v._init;return p(u,M(v._payload),x)}if(Ks(v)||Fs(v))return v=mr(v,u.mode,x,null),v.return=u,v;ia(u,v)}return null}function h(u,v,x,M){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xo:return x.key===R?l(u,v,x,M):null;case Wr:return x.key===R?c(u,v,x,M):null;case Mi:return R=x._init,h(u,v,R(x._payload),M)}if(Ks(x)||Fs(x))return R!==null?null:f(u,v,x,M,null);ia(u,x)}return null}function m(u,v,x,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(x)||null,a(v,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xo:return u=u.get(M.key===null?x:M.key)||null,l(v,u,M,R);case Wr:return u=u.get(M.key===null?x:M.key)||null,c(v,u,M,R);case Mi:var b=M._init;return m(u,v,x,b(M._payload),R)}if(Ks(M)||Fs(M))return u=u.get(x)||null,f(v,u,M,R,null);ia(v,M)}return null}function _(u,v,x,M){for(var R=null,b=null,T=v,P=v=0,E=null;T!==null&&P<x.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var S=h(u,T,x[P],M);if(S===null){T===null&&(T=E);break}t&&T&&S.alternate===null&&e(u,T),v=s(S,v,P),b===null?R=S:b.sibling=S,b=S,T=E}if(P===x.length)return n(u,T),ut&&nr(u,P),R;if(T===null){for(;P<x.length;P++)T=p(u,x[P],M),T!==null&&(v=s(T,v,P),b===null?R=T:b.sibling=T,b=T);return ut&&nr(u,P),R}for(T=i(u,T);P<x.length;P++)E=m(T,u,P,x[P],M),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?P:E.key),v=s(E,v,P),b===null?R=E:b.sibling=E,b=E);return t&&T.forEach(function(I){return e(u,I)}),ut&&nr(u,P),R}function y(u,v,x,M){var R=Fs(x);if(typeof R!="function")throw Error(re(150));if(x=R.call(x),x==null)throw Error(re(151));for(var b=R=null,T=v,P=v=0,E=null,S=x.next();T!==null&&!S.done;P++,S=x.next()){T.index>P?(E=T,T=null):E=T.sibling;var I=h(u,T,S.value,M);if(I===null){T===null&&(T=E);break}t&&T&&I.alternate===null&&e(u,T),v=s(I,v,P),b===null?R=I:b.sibling=I,b=I,T=E}if(S.done)return n(u,T),ut&&nr(u,P),R;if(T===null){for(;!S.done;P++,S=x.next())S=p(u,S.value,M),S!==null&&(v=s(S,v,P),b===null?R=S:b.sibling=S,b=S);return ut&&nr(u,P),R}for(T=i(u,T);!S.done;P++,S=x.next())S=m(T,u,P,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),v=s(S,v,P),b===null?R=S:b.sibling=S,b=S);return t&&T.forEach(function(O){return e(u,O)}),ut&&nr(u,P),R}function g(u,v,x,M){if(typeof x=="object"&&x!==null&&x.type===Xr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Xo:e:{for(var R=x.key,b=v;b!==null;){if(b.key===R){if(R=x.type,R===Xr){if(b.tag===7){n(u,b.sibling),v=r(b,x.props.children),v.return=u,u=v;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Mi&&Kf(R)===b.type){n(u,b.sibling),v=r(b,x.props),v.ref=Hs(u,b,x),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}x.type===Xr?(v=mr(x.props.children,u.mode,M,x.key),v.return=u,u=v):(M=Ga(x.type,x.key,x.props,null,u.mode,M),M.ref=Hs(u,v,x),M.return=u,u=M)}return o(u);case Wr:e:{for(b=x.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=_c(x,u.mode,M),v.return=u,u=v}return o(u);case Mi:return b=x._init,g(u,v,b(x._payload),M)}if(Ks(x))return _(u,v,x,M);if(Fs(x))return y(u,v,x,M);ia(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=vc(x,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return g}var xs=dg(!0),fg=dg(!1),sl=Xi(null),ol=null,es=null,bd=null;function Cd(){bd=es=ol=null}function Rd(t){var e=sl.current;at(sl),t._currentValue=e}function Lu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){ol=t,bd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(ol===null)throw Error(re(308));es=t,ol.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ur=null;function Nd(t){ur===null?ur=[t]:ur.push(t)}function hg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nd(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Nd(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}function Zf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(m,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,p,h):_,h==null)break e;p=ht({},p,h);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=p}}function Qf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Oo={},Xn=Xi(Oo),Eo=Xi(Oo),wo=Xi(Oo);function dr(t){if(t===Oo)throw Error(re(174));return t}function Ld(t,e){switch(it(wo,e),it(Eo,t),it(Xn,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}at(Xn),it(Xn,e)}function vs(){at(Xn),at(Eo),at(wo)}function mg(t){dr(wo.current);var e=dr(Xn.current),n=fu(e,t.type);e!==n&&(it(Eo,t),it(Xn,n))}function Dd(t){Eo.current===t&&(at(Xn),at(Eo))}var dt=Xi(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Id(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Ba=hi.ReactCurrentDispatcher,hc=hi.ReactCurrentBatchConfig,vr=0,ft=null,St=null,bt=null,cl=!1,so=!1,Ao=0,Qv=0;function Ot(){throw Error(re(321))}function Ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Fd(t,e,n,i,r,s){if(vr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?n_:i_,t=n(i,r),so){s=0;do{if(so=!1,Ao=0,25<=s)throw Error(re(301));s+=1,bt=St=null,e.updateQueue=null,Ba.current=r_,t=n(i,r)}while(so)}if(Ba.current=ul,e=St!==null&&St.next!==null,vr=0,bt=St=ft=null,cl=!1,e)throw Error(re(300));return t}function Od(){var t=Ao!==0;return Ao=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ft.memoizedState=bt=t:bt=bt.next=t,bt}function Tn(){if(St===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=bt===null?ft.memoizedState:bt.next;if(e!==null)bt=e,St=t;else{if(t===null)throw Error(re(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},bt===null?ft.memoizedState=bt=t:bt=bt.next=t}return bt}function To(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((vr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,ft.lanes|=f,_r|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function gg(){}function xg(t,e){var n=ft,i=Tn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,kd(yg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,bo(9,_g.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(re(349));vr&30||vg(n,e,r)}return r}function vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _g(t,e,n,i){e.value=n,e.getSnapshot=i,Sg(e)&&Mg(t)}function yg(t,e,n){return n(function(){Sg(e)&&Mg(t)})}function Sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function Mg(t){var e=di(t,1);e!==null&&Fn(e,t,1,-1)}function Jf(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=t_.bind(null,ft,t),[e.memoizedState,t]}function bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Eg(){return Tn().memoizedState}function za(t,e,n,i){var r=zn();ft.flags|=t,r.memoizedState=bo(1|e,n,void 0,i===void 0?null:i)}function Nl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Ud(i,o.deps)){r.memoizedState=bo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=bo(1|e,n,s,i)}function eh(t,e){return za(8390656,8,t,e)}function kd(t,e){return Nl(2048,8,t,e)}function wg(t,e){return Nl(4,2,t,e)}function Ag(t,e){return Nl(4,4,t,e)}function Tg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bg(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,Tg.bind(null,e,t),n)}function Bd(){}function Cg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ng(t,e,n){return vr&21?(On(n,e)||(n=Um(),ft.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Jv(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{Je=n,hc.transition=i}}function Pg(){return Tn().memoizedState}function e_(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Lg(t))Dg(e,n);else if(n=hg(t,e,n,i),n!==null){var r=qt();Fn(n,t,i,r),Ig(n,e,i)}}function t_(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lg(t))Dg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,Nd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hg(t,e,r,i),n!==null&&(r=qt(),Fn(n,t,i,r),Ig(n,e,i))}}function Lg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Dg(t,e){so=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ig(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}var ul={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},n_={readContext:An,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:eh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,za(4194308,4,Tg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return za(4194308,4,t,e)},useInsertionEffect:function(t,e){return za(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=e_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Jf,useDebugValue:Bd,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Jf(!1),e=t[0];return t=Jv.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=zn();if(ut){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Rt===null)throw Error(re(349));vr&30||vg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,eh(yg.bind(null,i,s,t),[t]),i.flags|=2048,bo(9,_g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Rt.identifierPrefix;if(ut){var n=oi,i=si;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},i_={readContext:An,useCallback:Cg,useContext:An,useEffect:kd,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:Ag,useMemo:Rg,useReducer:pc,useRef:Eg,useState:function(){return pc(To)},useDebugValue:Bd,useDeferredValue:function(t){var e=Tn();return Ng(e,St.memoizedState,t)},useTransition:function(){var t=pc(To)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:xg,useId:Pg,unstable_isNewReconciler:!1},r_={readContext:An,useCallback:Cg,useContext:An,useEffect:kd,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:Ag,useMemo:Rg,useReducer:mc,useRef:Eg,useState:function(){return mc(To)},useDebugValue:Bd,useDeferredValue:function(t){var e=Tn();return St===null?e.memoizedState=t:Ng(e,St.memoizedState,t)},useTransition:function(){var t=mc(To)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:xg,useId:Pg,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Du(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Fi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(Fn(e,t,r,i),ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Fi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(Fn(e,t,r,i),ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Fi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(Fn(e,t,i,n),ka(e,t,i))}};function th(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(n,i)||!_o(r,s):!0}function Ug(t,e,n){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=tn(e)?gr:Vt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function nh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=tn(e)?gr:Vt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Du(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pl.enqueueReplaceState(r,r.state,null),al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=L0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Fg(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fl||(fl=!0,Wu=i),Uu(t,e)},n}function Og(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ih(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new s_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=__.bind(null,t,e,n),e.then(t,t))}function rh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var o_=hi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?fg(e,null,n,i):xs(e,t.child,n,i)}function oh(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Fd(t,e,n,i,s,r),n=Od(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ut&&n&&wd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function ah(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kg(t,e,s,i,r)):(t=Ga(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(o,i)&&t.ref===e.ref)return fi(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function kg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_o(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,fi(t,e,r)}return Fu(t,e,n,i,r)}function Bg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ns,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ns,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ns,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ns,ln),ln|=i;return Wt(t,e,r,n),e.child}function zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=tn(n)?gr:Vt.current;return s=ms(e,s),cs(e,r),n=Fd(t,e,n,i,s,r),i=Od(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ut&&i&&wd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function lh(t,e,n,i,r){if(tn(n)){var s=!0;nl(e)}else s=!1;if(cs(e,r),e.stateNode===null)Ha(t,e),Ug(e,n,i),Iu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=tn(n)?gr:Vt.current,c=ms(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&nh(e,o,i,c),Ei=!1;var h=e.memoizedState;o.state=h,al(e,i,o,r),l=e.memoizedState,a!==i||h!==l||en.current||Ei?(typeof f=="function"&&(Du(e,n,f,i),l=e.memoizedState),(a=Ei||th(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,pg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?gr:Vt.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&nh(e,o,i,l),Ei=!1,h=e.memoizedState,o.state=h,al(e,i,o,r);var _=e.memoizedState;a!==p||h!==_||en.current||Ei?(typeof m=="function"&&(Du(e,n,m,i),_=e.memoizedState),(c=Ei||th(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){zg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qf(e,n,!1),fi(t,e,s);i=e.stateNode,o_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&qf(e,n,!0),e.child}function Hg(t){var e=t.stateNode;e.pendingContext?Xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xf(t,e.context,!1),Ld(t,e.containerInfo)}function ch(t,e,n,i,r){return gs(),Td(r),e.flags|=256,Wt(t,e,n,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return Pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Il(o,i,0,null),t=mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bu(n),e.memoizedState=ku,t):zd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return a_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Oi(a,s):(s=mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ku,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ra(t,e,n,i){return i!==null&&Td(i),xs(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function a_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(re(422))),ra(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Il({mode:"visible",children:i.children},r,0,null),s=mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=Bu(o),e.memoizedState=ku,s);if(!(e.mode&1))return ra(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=gc(s,i,void 0),ra(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),Fn(i,t,r,-1))}return Xd(),i=gc(Error(re(421))),ra(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=y_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Di(r.nextSibling),un=e,ut=!0,Dn=null,t!==null&&(vn[_n++]=si,vn[_n++]=oi,vn[_n++]=xr,si=t.id,oi=t.overflow,xr=e),e=zd(e,i.children),e.flags|=4096,e)}function uh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lu(t.return,e,n)}function xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function jg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uh(t,n,e);else if(t.tag===19)uh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function l_(t,e,n){switch(e.tag){case 3:Hg(e),gs();break;case 5:mg(e);break;case 1:tn(e.type)&&nl(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Vg(t,e,n):(it(dt,dt.current&1),t=fi(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return jg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bg(t,e,n)}return fi(t,e,n)}var Gg,zu,Wg,Xg;Gg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};Wg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr(Xn.current);var s=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=el)}hu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function c_(t,e,n){var i=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&tl(),kt(e),null;case 3:return i=e.stateNode,vs(),at(en),at(Vt),Id(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&($u(Dn),Dn=null))),zu(t,e),kt(e),null;case 5:Dd(e);var r=dr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Wg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return kt(e),null}if(t=dr(Xn.current),na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Vn]=e,i[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)st(Qs[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":_f(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Sf(i,s),st("invalid",i)}hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ta(i.textContent,a,t),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":qo(i),yf(i,s,!0);break;case"textarea":qo(i),Mf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=el)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Vn]=e,t[Mo]=i,Gg(t,e,!1,!1),e.stateNode=t;e:{switch(o=pu(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)st(Qs[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":_f(t,i),r=lu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":Sf(t,i),r=du(t,i),st("invalid",t);break;default:r=i}hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Em(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&ud(t,s,l,o))}switch(n){case"input":qo(t),yf(t,i,!1);break;case"textarea":qo(t),Mf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Xg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=dr(wo.current),dr(Xn.current),na(e)){if(i=e.stateNode,n=e.memoizedProps,i[Vn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Vn]=e,e.stateNode=i}return kt(e),null;case 13:if(at(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&cn!==null&&e.mode&1&&!(e.flags&128))ug(),gs(),e.flags|=98560,s=!1;else if(s=na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Vn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Dn!==null&&($u(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Mt===0&&(Mt=3):Xd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return vs(),zu(t,e),t===null&&yo(e.stateNode.containerInfo),kt(e),null;case 10:return Rd(e.type._context),kt(e),null;case 17:return tn(e.type)&&tl(),kt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Vs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,Vs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>ys&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return kt(e),null}else 2*xt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function u_(t,e){switch(Ad(e),e.tag){case 1:return tn(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),at(en),at(Vt),Id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(at(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(dt),null;case 4:return vs(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var sa=!1,Ht=!1,d_=typeof WeakSet=="function"?WeakSet:Set,me=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){pt(t,e,i)}}var dh=!1;function f_(t,e){if(wu=Za,t=Zm(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},Za=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=dh,dh=!1,_}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qg(t){var e=t.alternate;e!==null&&(t.alternate=null,qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[Mo],delete e[Cu],delete e[$v],delete e[Yv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function fh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}var Nt=null,Ln=!1;function mi(t,e,n){for(n=n.child;n!==null;)Yg(t,e,n),n=n.sibling}function Yg(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Ht||ts(n,e);case 6:var i=Nt,r=Ln;Nt=null,mi(t,e,n),Nt=i,Ln=r,Nt!==null&&(Ln?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Ln?(t=Nt,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),xo(t)):uc(Nt,n.stateNode));break;case 4:i=Nt,r=Ln,Nt=n.stateNode.containerInfo,Ln=!0,mi(t,e,n),Nt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hu(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!Ht&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,mi(t,e,n),Ht=i):mi(t,e,n);break;default:mi(t,e,n)}}function hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new d_),e.forEach(function(i){var r=S_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Ln=!1;break e;case 3:Nt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Nt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Nt===null)throw Error(re(160));Yg(s,o,r),Nt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kg(e,t),e=e.sibling}function Kg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Bn(t),i&4){try{oo(3,t,t.return),Ll(3,t)}catch(y){pt(t,t.return,y)}try{oo(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:bn(e,t),Bn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(bn(e,t),Bn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{ho(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vm(r,s),pu(a,o);var c=pu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?Em(r,p):f==="dangerouslySetInnerHTML"?Sm(r,p):f==="children"?ho(r,p):ud(r,f,p,c)}switch(a){case"input":cu(r,s);break;case"textarea":_m(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ss(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(bn(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(bn(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:bn(e,t),Bn(t);break;case 13:bn(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jd=xt())),i&4&&hh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||f,bn(e,t),Ht=c):bn(e,t),Bn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(p=me=f;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:oo(4,h,h.return);break;case 1:ts(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ts(h,h.return);break;case 22:if(h.memoizedState!==null){mh(p);continue}}m!==null?(m.return=h,me=m):mh(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mm("display",o))}catch(y){pt(t,t.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){pt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bn(e,t),Bn(t),i&4&&hh(t);break;case 21:break;default:bn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($g(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=fh(t);Gu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=fh(t);ju(t,a,o);break;default:throw Error(re(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h_(t,e,n){me=t,Zg(t)}function Zg(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=sa;var c=Ht;if(sa=o,(Ht=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?gh(r):l!==null?(l.return=o,me=l):gh(r);for(;s!==null;)me=s,Zg(s),s=s.sibling;me=r,sa=a,Ht=c}ph(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):ph(t)}}function ph(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&xo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Ht||e.flags&512&&Vu(e)}catch(h){pt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function mh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function gh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Vu(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{Vu(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var p_=Math.ceil,dl=hi.ReactCurrentDispatcher,Hd=hi.ReactCurrentOwner,wn=hi.ReactCurrentBatchConfig,Ye=0,Rt=null,yt=null,Pt=0,ln=0,ns=Xi(0),Mt=0,Co=null,_r=0,Dl=0,Vd=0,ao=null,Qt=null,jd=0,ys=1/0,ni=null,fl=!1,Wu=null,Ui=null,oa=!1,Ci=null,hl=0,lo=0,Xu=null,Va=-1,ja=0;function qt(){return Ye&6?xt():Va!==-1?Va:Va=xt()}function Fi(t){return t.mode&1?Ye&2&&Pt!==0?Pt&-Pt:Zv.transition!==null?(ja===0&&(ja=Um()),ja):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Vm(t.type)),t):1}function Fn(t,e,n,i){if(50<lo)throw lo=0,Xu=null,Error(re(185));Io(t,n,i),(!(Ye&2)||t!==Rt)&&(t===Rt&&(!(Ye&2)&&(Dl|=n),Mt===4&&Ai(t,Pt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(ys=xt()+500,Rl&&qi()))}function nn(t,e){var n=t.callbackNode;Z0(t,e);var i=Ka(t,t===Rt?Pt:0);if(i===0)n!==null&&Af(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Af(n),e===1)t.tag===0?Kv(xh.bind(null,t)):ag(xh.bind(null,t)),Xv(function(){!(Ye&6)&&qi()}),n=null;else{switch(Fm(i)){case 1:n=md;break;case 4:n=Dm;break;case 16:n=Ya;break;case 536870912:n=Im;break;default:n=Ya}n=sx(n,Qg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qg(t,e){if(Va=-1,ja=0,Ye&6)throw Error(re(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Ka(t,t===Rt?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pl(t,i);else{e=i;var r=Ye;Ye|=2;var s=ex();(Rt!==t||Pt!==e)&&(ni=null,ys=xt()+500,pr(t,e));do try{x_();break}catch(a){Jg(t,a)}while(!0);Cd(),dl.current=s,Ye=r,yt!==null?e=0:(Rt=null,Pt=0,e=Mt)}if(e!==0){if(e===2&&(r=_u(t),r!==0&&(i=r,e=qu(t,r))),e===1)throw n=Co,pr(t,0),Ai(t,i),nn(t,xt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!m_(r)&&(e=pl(t,i),e===2&&(s=_u(t),s!==0&&(i=s,e=qu(t,s))),e===1))throw n=Co,pr(t,0),Ai(t,i),nn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:ir(t,Qt,ni);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=jd+500-xt(),10<e)){if(Ka(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bu(ir.bind(null,t,Qt,ni),e);break}ir(t,Qt,ni);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*p_(i/1960))-i,10<i){t.timeoutHandle=bu(ir.bind(null,t,Qt,ni),i);break}ir(t,Qt,ni);break;case 5:ir(t,Qt,ni);break;default:throw Error(re(329))}}}return nn(t,xt()),t.callbackNode===n?Qg.bind(null,t):null}function qu(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=pl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&$u(e)),t}function $u(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function m_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~Vd,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function xh(t){if(Ye&6)throw Error(re(327));us();var e=Ka(t,0);if(!(e&1))return nn(t,xt()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var i=_u(t);i!==0&&(e=i,n=qu(t,i))}if(n===1)throw n=Co,pr(t,0),Ai(t,e),nn(t,xt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,Qt,ni),nn(t,xt()),null}function Gd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(ys=xt()+500,Rl&&qi())}}function yr(t){Ci!==null&&Ci.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=wn.transition,i=Je;try{if(wn.transition=null,Je=1,t)return t()}finally{Je=i,wn.transition=n,Ye=e,!(Ye&6)&&qi()}}function Wd(){ln=ns.current,at(ns)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wv(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tl();break;case 3:vs(),at(en),at(Vt),Id();break;case 5:Dd(i);break;case 4:vs();break;case 13:at(dt);break;case 19:at(dt);break;case 10:Rd(i.type._context);break;case 22:case 23:Wd()}n=n.return}if(Rt=t,yt=t=Oi(t.current,null),Pt=ln=e,Mt=0,Co=null,Vd=Dl=_r=0,Qt=ao=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ur=null}return t}function Jg(t,e){do{var n=yt;try{if(Cd(),Ba.current=ul,cl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cl=!1}if(vr=0,bt=St=ft=null,so=!1,Ao=0,Hd.current=null,n===null||n.return===null){Mt=1,Co=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=rh(o);if(m!==null){m.flags&=-257,sh(m,o,a,s,e),m.mode&1&&ih(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ih(s,c,e),Xd();break e}l=Error(re(426))}}else if(ut&&a.mode&1){var g=rh(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),sh(g,o,a,s,e),Td(_s(l,a));break e}}s=l=_s(l,a),Mt!==4&&(Mt=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Fg(s,l,e);Zf(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ui===null||!Ui.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Og(s,a,e);Zf(s,M);break e}}s=s.return}while(s!==null)}nx(n)}catch(R){e=R,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function ex(){var t=dl.current;return dl.current=ul,t===null?ul:t}function Xd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(_r&268435455)&&!(Dl&268435455)||Ai(Rt,Pt)}function pl(t,e){var n=Ye;Ye|=2;var i=ex();(Rt!==t||Pt!==e)&&(ni=null,pr(t,e));do try{g_();break}catch(r){Jg(t,r)}while(!0);if(Cd(),Ye=n,dl.current=i,yt!==null)throw Error(re(261));return Rt=null,Pt=0,Mt}function g_(){for(;yt!==null;)tx(yt)}function x_(){for(;yt!==null&&!V0();)tx(yt)}function tx(t){var e=rx(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?nx(t):yt=e,Hd.current=null}function nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=u_(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=c_(n,e,ln),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function ir(t,e,n){var i=Je,r=wn.transition;try{wn.transition=null,Je=1,v_(t,e,n,i)}finally{wn.transition=r,Je=i}return null}function v_(t,e,n,i){do us();while(Ci!==null);if(Ye&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q0(t,s),t===Rt&&(yt=Rt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,sx(Ya,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Je;Je=1;var a=Ye;Ye|=4,Hd.current=null,f_(t,n),Kg(n,t),kv(Au),Za=!!wu,Au=wu=null,t.current=n,h_(n),j0(),Ye=a,Je=o,wn.transition=s}else t.current=n;if(oa&&(oa=!1,Ci=t,hl=r),s=t.pendingLanes,s===0&&(Ui=null),X0(n.stateNode),nn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(fl)throw fl=!1,t=Wu,Wu=null,t;return hl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Xu?lo++:(lo=0,Xu=t):lo=0,qi(),null}function us(){if(Ci!==null){var t=Fm(hl),e=wn.transition,n=Je;try{if(wn.transition=null,Je=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,hl=0,Ye&6)throw Error(re(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var p=f.child;if(p!==null)p.return=f,me=p;else for(;me!==null;){f=me;var h=f.sibling,m=f.return;if(qg(f),f===c){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(R){pt(a,a.return,R)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(Ye=r,qi(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(wl,t)}catch{}i=!0}return i}finally{Je=n,wn.transition=e}}return!1}function vh(t,e,n){e=_s(n,e),e=Fg(t,e,1),t=Ii(t,e,1),e=qt(),t!==null&&(Io(t,1,e),nn(t,e))}function pt(t,e,n){if(t.tag===3)vh(t,t,n);else for(;e!==null;){if(e.tag===3){vh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=_s(n,t),t=Og(e,t,1),e=Ii(e,t,1),t=qt(),e!==null&&(Io(e,1,t),nn(e,t));break}}e=e.return}}function __(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Pt&n)===n&&(Mt===4||Mt===3&&(Pt&130023424)===Pt&&500>xt()-jd?pr(t,0):Vd|=n),nn(t,e)}function ix(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=qt();t=di(t,e),t!==null&&(Io(t,e,n),nn(t,n))}function y_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ix(t,n)}function S_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),ix(t,n)}var rx;rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,l_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ut&&e.flags&1048576&&lg(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ha(t,e),t=e.pendingProps;var r=ms(e,Vt.current);cs(e,n),r=Fd(null,e,i,t,r,n);var s=Od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=Pl,e.stateNode=r,r._reactInternals=e,Iu(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&wd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=E_(i),t=Pn(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=lh(null,e,i,t,n);break e;case 11:e=oh(null,e,i,t,n);break e;case 14:e=ah(null,e,i,Pn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),lh(t,e,i,r,n);case 3:e:{if(Hg(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pg(t,e),al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(re(423)),e),e=ch(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(re(424)),e),e=ch(t,e,i,n,r);break e}else for(cn=Di(e.stateNode.containerInfo.firstChild),un=e,ut=!0,Dn=null,n=fg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=fi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return mg(e),t===null&&Pu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Tu(i,r)?o=null:s!==null&&Tu(i,s)&&(e.flags|=32),zg(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Pu(e),null;case 13:return Vg(t,e,n);case 4:return Ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),oh(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(sl,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!en.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=An(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),ah(t,e,i,r,n);case 15:return kg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ha(t,e),e.tag=1,tn(i)?(t=!0,nl(e)):t=!1,cs(e,n),Ug(e,i,r),Iu(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return jg(t,e,n);case 22:return Bg(t,e,n)}throw Error(re(156,e.tag))};function sx(t,e){return Lm(t,e)}function M_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new M_(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E_(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===hd)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return mr(n.children,r,s,e);case dd:o=8,r|=8;break;case ru:return t=Sn(12,n,e,r|2),t.elementType=ru,t.lanes=s,t;case su:return t=Sn(13,n,e,r),t.elementType=su,t.lanes=s,t;case ou:return t=Sn(19,n,e,r),t.elementType=ou,t.lanes=s,t;case mm:return Il(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hm:o=10;break e;case pm:o=9;break e;case fd:o=11;break e;case hd:o=14;break e;case Mi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function mr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Il(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=mm,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,o,a,l){return t=new w_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function A_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ox(t){if(!t)return Hi;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(tn(n))return og(t,n,e)}return e}function ax(t,e,n,i,r,s,o,a,l){return t=$d(n,i,!0,t,r,s,o,a,l),t.context=ox(null),n=t.current,i=qt(),r=Fi(n),s=li(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,Io(t,r,i),nn(t,i),t}function Ul(t,e,n,i){var r=e.current,s=qt(),o=Fi(r);return n=ox(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,o),t!==null&&(Fn(t,r,o,s),ka(t,r,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yd(t,e){_h(t,e),(t=t.alternate)&&_h(t,e)}function T_(){return null}var lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}Fl.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Ul(t,e,null,null)};Fl.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Ul(null,t,null,null)}),e[ui]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wi.length&&e!==0&&e<wi[n].priority;n++);wi.splice(n,0,t),n===0&&Hm(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yh(){}function b_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ml(o);s.call(c)}}var o=ax(e,i,t,0,null,!1,!1,"",yh);return t._reactRootContainer=o,t[ui]=o.current,yo(t.nodeType===8?t.parentNode:t),yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ml(l);a.call(c)}}var l=$d(t,0,!1,null,null,!1,!1,"",yh);return t._reactRootContainer=l,t[ui]=l.current,yo(t.nodeType===8?t.parentNode:t),yr(function(){Ul(e,l,n,i)}),l}function kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ml(o);a.call(l)}}Ul(e,o,t,r)}else o=b_(n,e,t,r,i);return ml(o)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(gd(e,n|1),nn(e,xt()),!(Ye&6)&&(ys=xt()+500,qi()))}break;case 13:yr(function(){var i=di(t,1);if(i!==null){var r=qt();Fn(i,t,1,r)}}),Yd(t,1)}};xd=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=qt();Fn(e,t,134217728,n)}Yd(t,134217728)}};km=function(t){if(t.tag===13){var e=Fi(t),n=di(t,e);if(n!==null){var i=qt();Fn(n,t,e,i)}Yd(t,e)}};Bm=function(){return Je};zm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};gu=function(t,e,n){switch(e){case"input":if(cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cl(i);if(!r)throw Error(re(90));xm(i),cu(i,r)}}}break;case"textarea":_m(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Tm=Gd;bm=yr;var C_={usingClientEntryPoint:!1,Events:[Fo,Kr,Cl,wm,Am,Gd]},js={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nm(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{wl=aa.inject(R_),Wn=aa}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(re(200));return A_(t,e,null,n)};fn.createRoot=function(t,e){if(!Zd(t))throw Error(re(299));var n=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,yo(t.nodeType===8?t.parentNode:t),new Kd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Nm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return yr(t)};fn.hydrate=function(t,e,n){if(!Ol(e))throw Error(re(200));return kl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ax(e,null,t,1,n??null,r,!1,s,o),t[ui]=e.current,yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fl(e)};fn.render=function(t,e,n){if(!Ol(e))throw Error(re(200));return kl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(re(40));return t._reactRootContainer?(yr(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};fn.unstable_batchedUpdates=Gd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ol(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return kl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cx)}catch(t){console.error(t)}}cx(),cm.exports=fn;var N_=cm.exports,Sh=N_;nu.createRoot=Sh.createRoot,nu.hydrateRoot=Sh.hydrateRoot;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ux=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=oe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>oe.createElement("svg",{ref:l,...L_,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ux("lucide",r),...a},[...o.map(([c,f])=>oe.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(t,e)=>{const n=oe.forwardRef(({className:i,...r},s)=>oe.createElement(D_,{ref:s,iconNode:e,className:ux(`lucide-${P_(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=Ue("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Ue("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Ue("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Ue("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ue("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ue("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Ue("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=Ue("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ue("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ue("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Ue("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Ue("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ue("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=Ue("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ue("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Ue("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ue("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ue("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Ue("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=Ue("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Ue("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=Ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ue("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Ue("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Ue("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=Ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Ue("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),ly=({activeTab:t,setActiveTab:e,cartCount:n,openAuthModal:i,user:r,onLogout:s,openCart:o,openSellerListingModal:a})=>{const[l,c]=oe.useState(!1);return d.jsx("header",{className:"sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5DEC9]",children:d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex items-center justify-between h-20",children:[d.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>e("marketplace"),children:[d.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1E232A] flex items-center justify-center border-2 border-[#A17A16] shadow-sm",children:d.jsx("span",{className:"font-serif text-lg font-bold text-[#A17A16]",children:"3D"})}),d.jsx("span",{className:"font-serif text-2xl font-bold tracking-tight text-[#A17A16]",children:"Decorate3D"})]}),d.jsxs("nav",{className:"hidden md:flex items-center space-x-6",children:[d.jsx("button",{onClick:()=>e("marketplace"),className:`text-sm font-medium transition-colors ${t==="marketplace"?"text-[#1E232A] font-bold border-b-2 border-[#A17A16] pb-1":"text-gray-600 hover:text-[#A17A16]"}`,children:d.jsx("span",{children:"Marketplace"})}),d.jsx("button",{onClick:()=>e("room_planner"),className:`text-sm font-medium transition-colors ${t==="room_planner"?"text-[#1E232A] font-bold border-b-2 border-[#A17A16] pb-1":"text-gray-600 hover:text-[#A17A16]"}`,children:d.jsx("span",{children:"3D Room Planner"})})]}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsxs("button",{onClick:o,className:"relative p-2 text-gray-700 hover:text-[#A17A16] transition-colors rounded-full hover:bg-gray-100",title:"Shopping Cart",children:[d.jsx(ey,{className:"w-6 h-6"}),n>0&&d.jsx("span",{className:"absolute top-0 right-0 w-5 h-5 bg-[#A17A16] text-white text-xs font-bold rounded-full flex items-center justify-center",children:n})]}),d.jsxs("button",{onClick:a,className:"px-3.5 py-1.5 rounded-full border border-[#E9D3A4] bg-[#F9F4E9] hover:bg-[#E9D3A4] text-[#A17A16] font-mono text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5",title:"Upload multi-angle photos or snap with device camera to generate 3D model",children:[d.jsx(Mn,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"List Furniture (+3D)"})]}),r?d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>c(!l),className:"flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#E5DEC9] hover:border-[#A17A16] transition-all bg-white shadow-sm",children:[d.jsx("img",{src:(r==null?void 0:r.avatar)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",alt:(r==null?void 0:r.name)||"User",className:"w-7 h-7 rounded-full object-cover"}),d.jsx("span",{className:"text-xs font-bold text-gray-800 hidden sm:inline",children:(r==null?void 0:r.name)||"User"}),d.jsx(U_,{className:"w-3.5 h-3.5 text-gray-500"})]}),l&&d.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-[#E5DEC9] shadow-xl py-2 z-50 animate-fadeIn",onClick:()=>c(!1),children:[d.jsxs("div",{className:"px-4 py-2 border-b border-gray-100",children:[d.jsx("p",{className:"text-xs font-bold text-gray-900 truncate",children:(r==null?void 0:r.name)||"User"}),d.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:(r==null?void 0:r.email)||""})]}),d.jsxs("button",{onClick:()=>e("profile"),className:"w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F9F4E9] hover:text-[#A17A16] flex items-center space-x-2",children:[d.jsx(Jd,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"View Profile"})]}),d.jsxs("button",{onClick:()=>e("profile"),className:"w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F9F4E9] hover:text-[#A17A16] flex items-center space-x-2",children:[d.jsx(Ku,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Update Profile"})]}),d.jsxs("button",{onClick:s,className:"w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center space-x-2 border-t border-gray-100 mt-1",children:[d.jsx(px,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Log Out"})]})]})]}):d.jsxs("button",{onClick:i,className:"gold-gradient-btn px-4 py-2 rounded-xl text-xs font-bold tracking-wider flex items-center space-x-2 shadow-md hover:scale-105",children:[d.jsx(hx,{className:"w-4 h-4"}),d.jsx("span",{children:"SIGN IN / REGISTER"})]})]})]})})})},cy=()=>d.jsx("footer",{className:"bg-[#1E232A] text-white border-t border-[#A17A16]/30 mt-20",children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("div",{className:"w-8 h-8 rounded-full bg-white text-[#A17A16] font-serif font-bold text-sm flex items-center justify-center",children:"3D"}),d.jsx("span",{className:"font-serif text-xl font-bold text-[#A17A16]",children:"Decorate3D"})]}),d.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:"Smart C2C Used-Furniture & Interior Design Marketplace featuring WebGL 360° rotatable 3D model inspection, AI condition verification, and escrow protection."})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3",children:"Categories"}),d.jsxs("ul",{className:"space-y-2 text-xs text-gray-400",children:[d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Mid-Century Lounge Chairs"}),d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Scandinavian Bouclé Armchairs"}),d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Leather Chesterfield Sofas"}),d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Live-Edge Wood Tables"})]})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3",children:"Platform Features"}),d.jsxs("ul",{className:"space-y-2 text-xs text-gray-400",children:[d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• 360° Interactive 3D Inspector"}),d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• 3D Room Floor Planner"}),d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Geospatial Courier Logistics"}),d.jsx("li",{className:"hover:text-white cursor-pointer",children:"• Escrow Safe Payment Hold"})]})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider mb-3",children:"Customer Support"}),d.jsxs("p",{className:"text-xs text-gray-400 leading-relaxed",children:["Have questions about 3D models or escrow delivery verification?",d.jsx("br",{}),d.jsx("span",{className:"text-[#A17A16] font-semibold",children:"support@decorate3d.com"})]})]})]}),d.jsx("div",{className:"mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500",children:d.jsx("p",{children:"© 2026 Decorate3D • All Rights Reserved"})})]})}),uy=({product:t,onSelectProduct:e,open3DInspector:n})=>{var i;return d.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden border border-[#E5DEC9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group",children:[d.jsxs("div",{className:"relative aspect-[4/3] w-full bg-[#1E232A] overflow-hidden",children:[d.jsx("img",{src:((i=t.images)==null?void 0:i[0])||"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",alt:t.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"}),t.has3DModel&&d.jsxs("div",{className:"absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#E5DEC9] flex items-center space-x-1.5 shadow-sm",children:[d.jsx(Mn,{className:"w-3.5 h-3.5 text-[#A17A16]"}),d.jsx("span",{children:"3D Model"})]}),d.jsxs("div",{className:"absolute top-3 right-3 gold-badge text-[10px] px-2.5 py-1 rounded-full uppercase",children:["AI: ",t.conditionGrade||"GOOD"]}),d.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4",children:d.jsxs("button",{onClick:()=>n(t),className:"gold-gradient-btn px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider flex items-center space-x-2 shadow-lg hover:scale-105",children:[d.jsx(Mn,{className:"w-4 h-4"}),d.jsx("span",{children:"LAUNCH 3D INSPECTOR"})]})})]}),d.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between space-y-4",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-between items-start",children:d.jsx("h3",{onClick:()=>e(t),className:"font-serif text-lg font-bold text-gray-900 group-hover:text-[#A17A16] transition-colors line-clamp-1 cursor-pointer",children:t.title})}),d.jsx("p",{className:"text-xs text-gray-500 line-clamp-2 mt-1",children:t.description})]}),d.jsxs("div",{className:"pt-3 border-t border-[#E5DEC9]/60 flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsxs("span",{className:"font-serif text-xl font-bold text-[#A17A16]",children:["$",t.price]}),t.estimatedNewPrice&&d.jsxs("span",{className:"text-[11px] text-gray-400 line-through ml-2",children:["$",t.estimatedNewPrice]})]}),d.jsxs("button",{onClick:()=>e(t),className:"text-xs font-semibold text-gray-700 hover:text-[#A17A16] flex items-center space-x-1",children:[d.jsx("span",{children:"Details"}),d.jsx(z_,{className:"w-3.5 h-3.5"})]})]})]})]})},dy=({products:t,onSelectProduct:e,open3DInspector:n})=>{const[i,r]=oe.useState(""),[s,o]=oe.useState("All"),[a,l]=oe.useState("All"),c=["All","Chairs","Sofas","Tables"],f=["All","EXCELLENT","GOOD","FAIR"],p=t.filter(h=>{const m=h.title.toLowerCase().includes(i.toLowerCase())||h.description.toLowerCase().includes(i.toLowerCase()),_=s==="All"||h.category.toLowerCase()===s.toLowerCase(),y=a==="All"||h.conditionGrade.toUpperCase()===a;return m&&_&&y});return d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn",children:[d.jsxs("div",{className:"relative rounded-3xl bg-[#1E232A] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-[#A17A16]/30",children:[d.jsxs("div",{className:"relative z-10 max-w-2xl space-y-4",children:[d.jsxs("div",{className:"inline-flex items-center space-x-2 bg-[#A17A16]/20 border border-[#A17A16] px-3 py-1 rounded-full text-xs font-mono font-bold text-[#A17A16]",children:[d.jsx(Ro,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Interactive 3D C2C Furniture Marketplace"})]}),d.jsxs("h1",{className:"font-serif text-3xl sm:text-5xl font-bold leading-tight",children:["Inspect in ",d.jsx("span",{className:"text-[#A17A16]",children:"360° 3D"})," Before You Buy."]}),d.jsx("p",{className:"text-sm text-gray-300 leading-relaxed",children:"Eliminate spatial uncertainty and hidden damage. Rotate, zoom, and test top-grain leather sofas and designer chairs directly in WebGL 3D."})]}),d.jsx("div",{className:"absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none",children:d.jsx("div",{className:"w-72 h-72 rounded-full border-4 border-[#A17A16] flex items-center justify-center animate-spin-slow",children:d.jsx(Mn,{className:"w-36 h-36 text-[#A17A16]"})})})]}),d.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-[#E5DEC9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4",children:[d.jsxs("div",{className:"relative w-full md:w-96",children:[d.jsx(Q_,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),d.jsx("input",{type:"text",value:i,onChange:h=>r(h.target.value),placeholder:"Search Mid-Century chairs, sofas, tables...",className:"w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsx("div",{className:"flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",children:c.map(h=>d.jsx("button",{onClick:()=>o(h),className:`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${s===h?"bg-[#A17A16] text-white shadow-sm":"bg-[#F9F4E9] text-gray-700 hover:bg-[#E9D3A4]"}`,children:h},h))}),d.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[d.jsx("span",{className:"text-gray-500 font-semibold hidden sm:inline",children:"Condition:"}),d.jsx("select",{value:a,onChange:h=>l(h.target.value),className:"bg-[#FBF9F5] border border-[#E5DEC9] px-3 py-2 rounded-xl font-semibold text-gray-800 focus:outline-none focus:border-[#A17A16]",children:f.map(h=>d.jsxs("option",{value:h,children:["AI Grade: ",h]},h))})]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex justify-between items-center text-xs text-gray-500 font-mono",children:[d.jsxs("span",{children:["Showing ",p.length," verified listings with 3D model data"]}),d.jsx("span",{className:"text-[#A17A16] font-bold",children:"Module 1 Feature 2 Active"})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:p.map(h=>d.jsx(uy,{product:h,onSelectProduct:e,open3DInspector:n},h._id))})]})]})},fy=({product:t,open3DInspector:e,onAddToCart:n,onLaunchRoomPlanner:i})=>{var a,l;const[r,s]=oe.useState(0);if(!t)return null;const o=t.images&&t.images.length>0?t.images:["https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"];return d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn",children:[d.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-gray-500 mb-6",children:[d.jsx("span",{children:"Marketplace"}),d.jsx(Mh,{className:"w-3 h-3"}),d.jsx("span",{children:t.category}),d.jsx(Mh,{className:"w-3 h-3"}),d.jsx("span",{className:"text-[#A17A16] font-semibold",children:t.title})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[d.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[d.jsxs("div",{className:"relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#1E232A] shadow-xl border border-[#E5DEC9] group",children:[d.jsx("img",{src:o[r]||o[0],alt:t.title,className:"w-full h-full object-cover opacity-90 transition-opacity duration-300"}),d.jsxs("div",{className:"absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5DEC9] flex items-center space-x-2 shadow-sm",children:[d.jsx(Mn,{className:"w-4 h-4 text-[#A17A16]"}),d.jsx("span",{className:"text-xs font-bold text-gray-800 tracking-wide",children:"3D Model Available"})]}),d.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-all group-hover:bg-black/40",children:d.jsxs("button",{onClick:()=>e(t),className:"gold-gradient-btn px-6 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider flex items-center space-x-3 shadow-2xl transition-all hover:scale-105 border border-[#E9D3A4]/40",children:[d.jsx(Mn,{className:"w-5 h-5 animate-pulse"}),d.jsx("span",{children:"LAUNCH INTERACTIVE 3D INSPECTOR"})]})})]}),d.jsxs("div",{className:"flex items-center space-x-4 pt-2",children:[d.jsx("button",{onClick:()=>s(0),className:`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${r===0?"border-[#A17A16] ring-2 ring-[#A17A16]/20":"border-[#E5DEC9] opacity-70 hover:opacity-100"}`,children:d.jsx("img",{src:o[0],alt:"Thumbnail 1",className:"w-full h-full object-cover"})}),d.jsxs("button",{onClick:()=>e(t),className:"w-20 h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group",title:"Launch 3D Model Inspector",children:[d.jsx(Mn,{className:"w-6 h-6 transition-transform group-hover:scale-110"}),d.jsx("span",{className:"text-[10px] font-mono font-bold mt-1",children:"3D VIEW"})]}),d.jsxs("button",{onClick:i,className:"w-20 h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group",title:"Launch 3D Room Planner",children:[d.jsx(Ro,{className:"w-6 h-6 transition-transform group-hover:scale-110 text-[#A17A16]"}),d.jsx("span",{className:"text-[10px] font-mono font-bold mt-1",children:"PLANNER"})]})]})]}),d.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[d.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[d.jsxs("span",{className:"gold-badge text-[11px] px-3 py-1 rounded-md uppercase",children:["AI VERIFIED CONDITION: ",t.conditionGrade||"GOOD"]}),t.isRareFind&&d.jsx("span",{className:"bg-[#F9F4E9] text-[#A17A16] border border-[#E9D3A4] text-[11px] font-bold px-3 py-1 rounded-md uppercase",children:"RARE FIND"})]}),d.jsx("h1",{className:"font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] leading-tight",children:t.title}),d.jsxs("div",{className:"flex items-baseline space-x-4 border-b border-[#E5DEC9] pb-6",children:[d.jsxs("span",{className:"font-serif text-4xl font-bold text-[#A17A16]",children:["$",t.price]}),t.estimatedNewPrice&&d.jsxs("span",{className:"text-sm font-sans text-gray-500 line-through",children:["$",t.estimatedNewPrice," Est. New"]})]}),d.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-sm space-y-4",children:[d.jsx("h3",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider",children:"CRAFTSMANSHIP DETAILS"}),d.jsx("p",{className:"text-sm text-gray-600 leading-relaxed",children:t.description}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-4 border-t border-[#E5DEC9]/60 text-xs",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-400 font-bold uppercase block text-[10px]",children:"MATERIAL"}),d.jsx("span",{className:"font-semibold text-gray-800",children:t.material})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-400 font-bold uppercase block text-[10px]",children:"ERA"}),d.jsx("span",{className:"font-semibold text-gray-800",children:t.era})]})]})]}),d.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-xl border border-[#E9D3A4] flex items-center justify-between text-xs",children:[d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("div",{className:"w-9 h-9 rounded-full bg-[#1E232A] text-white font-bold flex items-center justify-center font-serif text-sm",children:"MA"}),d.jsxs("div",{children:[d.jsx("span",{className:"font-bold text-gray-900 block",children:((a=t.seller)==null?void 0:a.name)||"Muhtasim Ahmed"}),d.jsxs("span",{className:"text-gray-500",children:["Seller • ",((l=t.seller)==null?void 0:l.location)||"Dhaka, Bangladesh"]})]})]}),d.jsxs("div",{className:"flex items-center space-x-1 text-[#A17A16] font-bold",children:[d.jsx(Bl,{className:"w-4 h-4"}),d.jsx("span",{children:"Escrow Protected"})]})]}),d.jsxs("div",{className:"space-y-3 pt-2",children:[d.jsxs("button",{onClick:()=>n(t),className:"w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2",children:[d.jsx(Qd,{className:"w-5 h-5"}),d.jsx("span",{children:"ADD TO CART (ESCROW SECURED)"})]}),d.jsxs("button",{onClick:()=>e(t),className:"w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-xl text-sm border border-[#E5DEC9] transition-all flex items-center justify-center space-x-2",children:[d.jsx(Mn,{className:"w-4 h-4 text-[#A17A16]"}),d.jsx("span",{children:"OPEN 360° 3D INSPECTOR CANVAS"})]})]})]})]})]})},hy=({user:t,onUpdateProfile:e,onLogout:n,openAuthModal:i})=>{const[r,s]=oe.useState(!1),[o,a]=oe.useState((t==null?void 0:t.name)||""),[l,c]=oe.useState((t==null?void 0:t.email)||""),[f,p]=oe.useState((t==null?void 0:t.avatar)||""),[h,m]=oe.useState((t==null?void 0:t.role)||"buyer"),[_,y]=oe.useState(!1);if(!t)return d.jsxs("div",{className:"max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-[#E5DEC9] text-center space-y-4 shadow-sm",children:[d.jsx(Jd,{className:"w-12 h-12 text-[#A17A16] mx-auto"}),d.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:"Sign In to View Profile"}),d.jsx("p",{className:"text-xs text-gray-500",children:"Please sign in or create an account to manage your profile and 3D listings."}),d.jsx("button",{onClick:i,className:"gold-gradient-btn px-6 py-3 rounded-xl font-bold text-xs shadow-md tracking-wider",children:"SIGN IN / REGISTER NOW"})]});const g=u=>{u.preventDefault(),e({...t,name:o,email:l,avatar:f||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",role:h}),s(!1),y(!0),setTimeout(()=>y(!1),3e3)};return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-10 space-y-8 animate-fadeIn",children:[_&&d.jsxs("div",{className:"p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-2xl flex items-center space-x-2 text-xs font-semibold animate-fadeIn",children:[d.jsx(fx,{className:"w-4 h-4 text-emerald-600"}),d.jsx("span",{children:"Your profile details have been successfully updated!"})]}),d.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-[#E5DEC9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left",children:[d.jsx("img",{src:t.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",alt:t.name,className:"w-24 h-24 rounded-full object-cover border-4 border-[#A17A16] shadow-md"}),d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"flex items-center justify-center sm:justify-start space-x-2",children:[d.jsx("h1",{className:"font-serif text-2xl font-bold text-gray-900",children:t.name}),d.jsx("span",{className:"gold-badge text-[10px] px-2.5 py-0.5 rounded-full uppercase",children:t.role||"VERIFIED USER"})]}),d.jsx("p",{className:"text-xs text-gray-500 font-mono",children:t.email}),d.jsxs("div",{className:"flex items-center space-x-2 text-xs font-semibold text-[#A17A16] pt-1",children:[d.jsx(Bl,{className:"w-4 h-4"}),d.jsx("span",{children:"Escrow Protected Account"})]})]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto",children:[d.jsxs("button",{onClick:()=>s(!r),className:"w-full sm:w-auto px-4 py-2.5 bg-[#F9F4E9] hover:bg-[#E9D3A4] text-[#A17A16] rounded-xl text-xs font-bold transition-all border border-[#E9D3A4] flex items-center justify-center space-x-2",children:[d.jsx(Ku,{className:"w-4 h-4"}),d.jsx("span",{children:r?"CANCEL EDIT":"EDIT PROFILE"})]}),d.jsxs("button",{onClick:n,className:"w-full sm:w-auto px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-all border border-rose-200 flex items-center justify-center space-x-2",children:[d.jsx(px,{className:"w-4 h-4"}),d.jsx("span",{children:"LOG OUT"})]})]})]}),r&&d.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-[#A17A16]/40 shadow-lg space-y-6 animate-fadeIn",children:[d.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-[#E5DEC9]",children:[d.jsxs("h3",{className:"font-serif text-lg font-bold text-gray-900 flex items-center space-x-2",children:[d.jsx(Ku,{className:"w-5 h-5 text-[#A17A16]"}),d.jsx("span",{children:"Update Profile Information"})]}),d.jsx("button",{onClick:()=>s(!1),className:"text-gray-400 hover:text-gray-700",children:d.jsx(ko,{className:"w-5 h-5"})})]}),d.jsxs("form",{onSubmit:g,className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Full Name"}),d.jsx("input",{type:"text",required:!0,value:o,onChange:u=>a(u.target.value),className:"w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Email Address"}),d.jsx("input",{type:"email",required:!0,value:l,onChange:u=>c(u.target.value),className:"w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Profile Avatar Photo URL"}),d.jsx("input",{type:"url",value:f,onChange:u=>p(u.target.value),placeholder:"https://images.unsplash.com/photo-...",className:"w-full px-4 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs font-mono font-bold text-gray-700 uppercase mb-1",children:"Account Role"}),d.jsxs("select",{value:h,onChange:u=>m(u.target.value),className:"w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]",children:[d.jsx("option",{value:"buyer",children:"Buyer (Search & View 3D Models)"}),d.jsx("option",{value:"seller",children:"Seller (List Used Furniture Items)"}),d.jsx("option",{value:"courier",children:"Logistics Courier Driver"})]})]}),d.jsxs("div",{className:"md:col-span-2 flex justify-end space-x-3 pt-4 border-t border-[#E5DEC9]",children:[d.jsx("button",{type:"button",onClick:()=>s(!1),className:"px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100",children:"CANCEL"}),d.jsxs("button",{type:"submit",className:"gold-gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider flex items-center space-x-2 shadow-md",children:[d.jsx(Z_,{className:"w-4 h-4"}),d.jsx("span",{children:"SAVE PROFILE CHANGES"})]})]})]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2",children:[d.jsxs("div",{className:"flex justify-between items-center text-gray-500 text-xs font-mono",children:[d.jsx("span",{children:"SAVED 3D MODELS"}),d.jsx(Mn,{className:"w-4 h-4 text-[#A17A16]"})]}),d.jsx("div",{className:"font-serif text-3xl font-bold text-gray-900",children:"4 Items"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2",children:[d.jsxs("div",{className:"flex justify-between items-center text-gray-500 text-xs font-mono",children:[d.jsx("span",{children:"ACTIVE ESCROW ORDERS"}),d.jsx(X_,{className:"w-4 h-4 text-[#A17A16]"})]}),d.jsx("div",{className:"font-serif text-3xl font-bold text-gray-900",children:"1 Order"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm space-y-2",children:[d.jsxs("div",{className:"flex justify-between items-center text-gray-500 text-xs font-mono",children:[d.jsx("span",{children:"INSPECTION HISTORY"}),d.jsx(ny,{className:"w-4 h-4 text-[#A17A16]"})]}),d.jsx("div",{className:"font-serif text-3xl font-bold text-gray-900",children:"12 Scans"})]})]})]})},py=({cart:t,onRemoveFromCart:e,onCheckout:n,isOpen:i,onClose:r})=>{if(!i)return null;const s=t.reduce((o,a)=>o+a.price,0);return d.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-fadeIn",children:d.jsxs("div",{className:"bg-[#FBF9F5] w-full max-w-md h-full flex flex-col justify-between p-6 border-l border-[#E5DEC9] shadow-2xl relative",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between items-center pb-4 border-b border-[#E5DEC9]",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx(Qd,{className:"w-5 h-5 text-[#A17A16]"}),d.jsx("h2",{className:"font-serif text-xl font-bold text-gray-900",children:"Your Escrow Cart"})]}),d.jsx("button",{onClick:r,className:"text-xs font-mono font-bold text-gray-400 hover:text-gray-800",children:"CLOSE [✕]"})]}),d.jsxs("div",{className:"mt-4 p-3 bg-[#F9F4E9] border border-[#E9D3A4] rounded-xl text-xs text-[#A17A16] flex items-center space-x-2",children:[d.jsx(Bl,{className:"w-4 h-4 shrink-0"}),d.jsx("span",{children:"Funds locked safely in escrow until physical delivery OTP scan."})]}),d.jsx("div",{className:"mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1",children:t.length===0?d.jsx("div",{className:"text-center py-12 text-gray-400 text-sm",children:"Your cart is empty. Add a 3D furniture item to test escrow payment!"}):t.map((o,a)=>{var l;return d.jsxs("div",{className:"flex items-center space-x-4 p-3 bg-white rounded-xl border border-[#E5DEC9]",children:[d.jsx("img",{src:(l=o.images)==null?void 0:l[0],alt:o.title,className:"w-16 h-16 rounded-lg object-cover"}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("h4",{className:"font-serif text-sm font-bold text-gray-900 truncate",children:o.title}),d.jsx("p",{className:"text-xs text-gray-500",children:o.material}),d.jsxs("span",{className:"font-serif font-bold text-[#A17A16] text-sm",children:["$",o.price]})]}),d.jsx("button",{onClick:()=>e(a),className:"p-1.5 text-gray-400 hover:text-rose-500 rounded-lg hover:bg-rose-50",children:d.jsx(iy,{className:"w-4 h-4"})})]},a)})})]}),t.length>0&&d.jsxs("div",{className:"pt-6 border-t border-[#E5DEC9] space-y-4",children:[d.jsxs("div",{className:"space-y-1 text-xs",children:[d.jsxs("div",{className:"flex justify-between text-gray-600",children:[d.jsx("span",{children:"Subtotal:"}),d.jsxs("span",{children:["$",s.toFixed(2)]})]}),d.jsxs("div",{className:"flex justify-between text-gray-600",children:[d.jsx("span",{children:"Escrow Guarantee Fee:"}),d.jsx("span",{className:"text-emerald-600 font-bold",children:"FREE"})]}),d.jsxs("div",{className:"flex justify-between font-bold text-sm pt-2 text-gray-900 border-t border-gray-200",children:[d.jsx("span",{children:"Total Escrow Charge:"}),d.jsxs("span",{className:"text-[#A17A16] font-serif font-bold text-lg",children:["$",s.toFixed(2)]})]})]}),d.jsxs("button",{onClick:n,className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2",children:[d.jsx("span",{children:"PROCEED TO ESCROW LOCK PAYMENT"}),d.jsx(I_,{className:"w-4 h-4"})]})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="164",my=0,Eh=1,gy=2,mx=1,gx=2,ti=3,Vi=0,rn=1,ri=2,ki=0,ds=1,wh=2,Ah=3,Th=4,xy=5,or=100,vy=101,_y=102,yy=103,Sy=104,My=200,Ey=201,wy=202,Ay=203,Zu=204,Qu=205,Ty=206,by=207,Cy=208,Ry=209,Ny=210,Py=211,Ly=212,Dy=213,Iy=214,Uy=0,Fy=1,Oy=2,gl=3,ky=4,By=5,zy=6,Hy=7,xx=0,Vy=1,jy=2,Bi=0,Gy=1,Wy=2,Xy=3,vx=4,qy=5,$y=6,Yy=7,_x=300,Ss=301,Ms=302,Ju=303,ed=304,zl=306,td=1e3,fr=1001,nd=1002,En=1003,Ky=1004,la=1005,In=1006,Sc=1007,hr=1008,ji=1009,Zy=1010,Qy=1011,yx=1012,Sx=1013,Es=1014,Ri=1015,Hl=1016,Mx=1017,Ex=1018,Bo=1020,Jy=35902,eS=1021,tS=1022,Gn=1023,nS=1024,iS=1025,fs=1026,No=1027,rS=1028,wx=1029,sS=1030,Ax=1031,Tx=1033,Mc=33776,Ec=33777,wc=33778,Ac=33779,bh=35840,Ch=35841,Rh=35842,Nh=35843,Ph=36196,Lh=37492,Dh=37496,Ih=37808,Uh=37809,Fh=37810,Oh=37811,kh=37812,Bh=37813,zh=37814,Hh=37815,Vh=37816,jh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Tc=36492,$h=36494,Yh=36495,oS=36283,Kh=36284,Zh=36285,Qh=36286,aS=3200,lS=3201,bx=0,cS=1,Ti="",Zt="srgb",$i="srgb-linear",tf="display-p3",Vl="display-p3-linear",xl="linear",ot="srgb",vl="rec709",_l="p3",Tr=7680,Jh=519,uS=512,dS=513,fS=514,Cx=515,hS=516,pS=517,mS=518,gS=519,ep=35044,tp="300 es",ai=2e3,yl=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let np=1234567;const co=Math.PI/180,Po=180/Math.PI;function Rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function nf(t,e){return(t%e+e)%e}function xS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function vS(t,e,n){return t!==e?(n-t)/(e-t):0}function uo(t,e,n){return(1-n)*t+n*e}function _S(t,e,n,i){return uo(t,e,1-Math.exp(-n*i))}function yS(t,e=1){return e-Math.abs(nf(t,e*2)-e)}function SS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function MS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ES(t,e){return t+Math.floor(Math.random()*(e-t+1))}function wS(t,e){return t+Math.random()*(e-t)}function AS(t){return t*(.5-Math.random())}function TS(t){t!==void 0&&(np=t);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bS(t){return t*co}function CS(t){return t*Po}function RS(t){return(t&t-1)===0&&t!==0}function NS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function PS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function LS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),p=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*p,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*p,a*c);break;case"ZXZ":t.set(l*p,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*m,a*c);break;case"YXY":t.set(l*m,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*m,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ca={DEG2RAD:co,RAD2DEG:Po,generateUUID:Rs,clamp:Xt,euclideanModulo:nf,mapLinear:xS,inverseLerp:vS,lerp:uo,damp:_S,pingpong:yS,smoothstep:SS,smootherstep:MS,randInt:ES,randFloat:wS,randFloatSpread:AS,seededRandom:TS,degToRad:bS,radToDeg:CS,isPowerOfTwo:RS,ceilPowerOfTwo:NS,floorPowerOfTwo:PS,setQuaternionFromProperEuler:LS,normalize:jt,denormalize:Gr};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],_=i[8],y=r[0],g=r[3],u=r[6],v=r[1],x=r[4],M=r[7],R=r[2],b=r[5],T=r[8];return s[0]=o*y+a*v+l*R,s[3]=o*g+a*x+l*b,s[6]=o*u+a*M+l*T,s[1]=c*y+f*v+p*R,s[4]=c*g+f*x+p*b,s[7]=c*u+f*M+p*T,s[2]=h*y+m*v+_*R,s[5]=h*g+m*x+_*b,s[8]=h*u+m*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=n*p+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new ze;function Rx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=Lo("canvas");return t.style.display="block",t}const ip={};function IS(t){t in ip||(ip[t]=!0,console.warn(t))}const rp=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sp=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[$i]:{transfer:xl,primaries:vl,toReference:t=>t,fromReference:t=>t},[Zt]:{transfer:ot,primaries:vl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vl]:{transfer:xl,primaries:_l,toReference:t=>t.applyMatrix3(sp),fromReference:t=>t.applyMatrix3(rp)},[tf]:{transfer:ot,primaries:_l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(sp),fromReference:t=>t.applyMatrix3(rp).convertLinearToSRGB()}},US=new Set([$i,Vl]),nt={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!US.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ua[e].toReference,r=ua[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ua[t].primaries},getTransfer:function(t){return t===Ti?xl:ua[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class FS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Lo("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class Nx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;class $t extends Cs{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=fr,r=fr,s=In,o=hr,a=Gn,l=ji,c=$t.DEFAULT_ANISOTROPY,f=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Rs(),this.name="",this.source=new Nx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=_x;$t.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],m=l[5],_=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(m+1)/2,R=(u+1)/2,b=(f+h)/4,T=(p+y)/4,P=(_+g)/4;return x>M&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=T/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(p-y)*(p-y)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(p-y)/v,this.z=(h-f)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Nx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends BS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Px extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zS extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||c!==m||f!==_){let g=1-a;const u=l*h+c*m+f*_+p*y,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,u*v);g=Math.sin(g*b)/R,a=Math.sin(a*b)/R}const M=a*v;if(l=l*g+h*M,c=c*g+m*M,f=f*g+_*M,p=p*g+y*M,g===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=R,c*=R,f*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*p+l*m-c*h,e[n+1]=l*_+f*h+c*p-a*m,e[n+2]=c*_+f*m+a*h-l*p,e[n+3]=f*_-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*p+c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p-h*m*_;break;case"YXZ":this._x=h*f*p+c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p+h*m*_;break;case"ZXY":this._x=h*f*p-c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p-h*m*_;break;case"ZYX":this._x=h*f*p-c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p+h*m*_;break;case"YZX":this._x=h*f*p+c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p-h*m*_;break;case"XZY":this._x=h*f*p-c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*f,this.y=i+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new B,op=new zo;class Ho{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),fa.subVectors(this.max,Gs),Cr.subVectors(e.a,Gs),Rr.subVectors(e.b,Gs),Nr.subVectors(e.c,Gs),gi.subVectors(Rr,Cr),xi.subVectors(Nr,Rr),Ki.subVectors(Cr,Nr);let n=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Ki.z,Ki.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Ki.z,0,-Ki.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Ki.y,Ki.x,0];return!Pc(n,Cr,Rr,Nr,fa)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Cr,Rr,Nr,fa))?!1:(ha.crossVectors(gi,xi),n=[ha.x,ha.y,ha.z],Pc(n,Cr,Rr,Nr,fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new B,new B,new B,new B,new B,new B,new B,new B],Cn=new B,da=new Ho,Cr=new B,Rr=new B,Nr=new B,gi=new B,xi=new B,Ki=new B,Gs=new B,fa=new B,ha=new B,Zi=new B;function Pc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=n.dot(Zi),f=i.dot(Zi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const HS=new Ho,Ws=new B,Lc=new B;class jl{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Lc)),this.expandByPoint(Ws.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new B,Dc=new B,pa=new B,vi=new B,Ic=new B,ma=new B,Uc=new B;class Lx{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(Dc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=vi.dot(this.direction),l=-vi.dot(pa),c=vi.lengthSq(),f=Math.abs(1-o*o);let p,h,m,_;if(f>0)if(p=o*l-a,h=o*a-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const y=1/f;p*=y,h*=y,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Dc).addScaledVector(pa,h),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Ic.subVectors(n,e),ma.subVectors(i,e),Uc.crossVectors(Ic,ma);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(vi,ma));if(l<0)return null;const c=a*this.direction.dot(Ic.cross(vi));if(c<0||l+c>o)return null;const f=-a*vi.dot(Uc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,f,p,h,m,_,y,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,p,h,m,_,y,g)}set(e,n,i,r,s,o,a,l,c,f,p,h,m,_,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*p,_=a*f,y=a*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*p,_=c*f,y=c*p;n[0]=h+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*p,_=c*f,y=c*p;n[0]=h-y*a,n[4]=-o*p,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*p,_=a*f,y=a*p;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*p,n[8]=_*p+m,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+y,n[5]=o*f,n[9]=m*p-_,n[2]=_*p-m,n[6]=a*f,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VS,e,jS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),_i.crossVectors(i,on),_i.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),_i.crossVectors(i,on)),_i.normalize(),ga.crossVectors(on,_i),r[0]=_i.x,r[4]=ga.x,r[8]=on.x,r[1]=_i.y,r[5]=ga.y,r[9]=on.y,r[2]=_i.z,r[6]=ga.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],_=i[2],y=i[6],g=i[10],u=i[14],v=i[3],x=i[7],M=i[11],R=i[15],b=r[0],T=r[4],P=r[8],E=r[12],S=r[1],I=r[5],O=r[9],L=r[13],W=r[2],q=r[6],Z=r[10],ie=r[14],C=r[3],V=r[7],U=r[11],Q=r[15];return s[0]=o*b+a*S+l*W+c*C,s[4]=o*T+a*I+l*q+c*V,s[8]=o*P+a*O+l*Z+c*U,s[12]=o*E+a*L+l*ie+c*Q,s[1]=f*b+p*S+h*W+m*C,s[5]=f*T+p*I+h*q+m*V,s[9]=f*P+p*O+h*Z+m*U,s[13]=f*E+p*L+h*ie+m*Q,s[2]=_*b+y*S+g*W+u*C,s[6]=_*T+y*I+g*q+u*V,s[10]=_*P+y*O+g*Z+u*U,s[14]=_*E+y*L+g*ie+u*Q,s[3]=v*b+x*S+M*W+R*C,s[7]=v*T+x*I+M*q+R*V,s[11]=v*P+x*O+M*Z+R*U,s[15]=v*E+x*L+M*ie+R*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],_=e[3],y=e[7],g=e[11],u=e[15];return _*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+g*(+n*c*p-n*a*m-s*o*p+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*p+n*a*h+r*o*p-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],_=e[12],y=e[13],g=e[14],u=e[15],v=p*g*c-y*h*c+y*l*m-a*g*m-p*l*u+a*h*u,x=_*h*c-f*g*c-_*l*m+o*g*m+f*l*u-o*h*u,M=f*y*c-_*p*c+_*a*m-o*y*m-f*a*u+o*p*u,R=_*p*l-f*y*l-_*a*h+o*y*h+f*a*g-o*p*g,b=n*v+i*x+r*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(y*h*s-p*g*s-y*r*m+i*g*m+p*r*u-i*h*u)*T,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*T,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=x*T,e[5]=(f*g*s-_*h*s+_*r*m-n*g*m-f*r*u+n*h*u)*T,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*T,e[8]=M*T,e[9]=(_*p*s-f*y*s-_*i*m+n*y*m+f*i*u-n*p*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*p*s-f*i*c+n*p*c+o*i*m-n*a*m)*T,e[12]=R*T,e[13]=(f*y*r-_*p*r+_*i*h-n*y*h-f*i*g+n*p*g)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*T,e[15]=(o*p*r-f*a*r+f*i*l-n*p*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,p=a+a,h=s*c,m=s*f,_=s*p,y=o*f,g=o*p,u=a*p,v=l*c,x=l*f,M=l*p,R=i.x,b=i.y,T=i.z;return r[0]=(1-(y+u))*R,r[1]=(m+M)*R,r[2]=(_-x)*R,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(h+u))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(_+x)*T,r[9]=(g-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,f=1/o,p=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=p,Rn.elements[9]*=p,Rn.elements[10]*=p,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===ai)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===yl)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(o-s),h=(n+e)*c,m=(i+r)*f;let _,y;if(a===ai)_=(o+s)*p,y=-2*p;else if(a===yl)_=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new B,Rn=new mt,VS=new B(0,0,0),jS=new B(1,1,1),_i=new B,ga=new B,on=new B,ap=new mt,lp=new zo;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GS=0;const cp=new B,Lr=new zo,Qn=new mt,xa=new B,Xs=new B,WS=new B,XS=new zo,up=new B(1,0,0),dp=new B(0,1,0),fp=new B(0,0,1),hp={type:"added"},qS={type:"removed"},Dr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Lt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,n=new $n,i=new zo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,n){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xa.copy(e):xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Xs,xa,this.up):Qn.lookAt(xa,Xs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qS),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,WS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,XS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new B,Jn=new B,Oc=new B,ei=new B,Ir=new B,Ur=new B,pp=new B,kc=new B,Bc=new B,zc=new B;class jn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),Jn.subVectors(i,n),Oc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(Jn),l=Nn.dot(Oc),c=Jn.dot(Jn),f=Jn.dot(Oc),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),Jn.subVectors(e,n),Nn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Nn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Ur.subVectors(s,i),kc.subVectors(e,i);const l=Ir.dot(kc),c=Ur.dot(kc);if(l<=0&&c<=0)return n.copy(i);Bc.subVectors(e,r);const f=Ir.dot(Bc),p=Ur.dot(Bc);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ir,o);zc.subVectors(e,s);const m=Ir.dot(zc),_=Ur.dot(zc);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ur,a);const g=f*_-m*p;if(g<=0&&p-f>=0&&m-_>=0)return pp.subVectors(s,r),a=(p-f)/(p-f+(m-_)),n.copy(r).addScaledVector(pp,a);const u=1/(g+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},va={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=nf(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hc(o,s,e+1/3),this.g=Hc(o,s,e),this.b=Hc(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zt){const i=Ix[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return nt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Xt(zt.r*255,0,255))*65536+Math.round(Xt(zt.g*255,0,255))*256+Math.round(Xt(zt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Zt){nt.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+n,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(va);const i=uo(yi.h,va.h,n),r=uo(yi.s,va.s,n),s=uo(yi.l,va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new We;We.NAMES=Ix;let $S=0;class wr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ds,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Qu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ux extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new B,_a=new $e;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ep,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return IS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_a.fromBufferAttribute(this,n),_a.applyMatrix3(e),this.setXY(n,_a.x,_a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),e}}class Fx extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ox extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YS=0;const gn=new mt,Vc=new Lt,Fr=new B,an=new Ho,qs=new Ho,Tt=new B;class kn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rx(e)?Ox:Fx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(an.min,qs.min),an.expandByPoint(Tt),Tt.addVectors(an.max,qs.max),an.expandByPoint(Tt)):(an.expandByPoint(qs.min),an.expandByPoint(qs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Tt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Tt.add(Fr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;const c=new B,f=new B,p=new B,h=new $e,m=new $e,_=new $e,y=new B,g=new B;function u(P,E,S){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,E),p.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),f.sub(c),p.sub(c),m.sub(h),_.sub(h);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(I),a[P].add(y),a[E].add(y),a[S].add(y),l[P].add(g),l[E].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const S=v[P],I=S.start,O=S.count;for(let L=I,W=I+O;L<W;L+=3)u(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new B,M=new B,R=new B,b=new B;function T(P){R.fromBufferAttribute(r,P),b.copy(R);const E=a[P];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),M.crossVectors(b,E);const I=M.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,E=v.length;P<E;++P){const S=v[P],I=S.start,O=S.count;for(let L=I,W=I+O;L<W;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,f=new B,p=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new qn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new mt,Qi=new Lx,ya=new jl,gp=new B,Or=new B,kr=new B,Br=new B,jc=new B,Sa=new B,Ma=new $e,Ea=new $e,wa=new $e,xp=new B,vp=new B,_p=new B,Aa=new B,Ta=new B;class ct extends Lt{constructor(e=new kn,n=new Ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],p=s[l];f!==0&&(jc.fromBufferAttribute(p,e),o?Sa.addScaledVector(jc,f):Sa.addScaledVector(jc.sub(n),f))}n.add(Sa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(ya.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ya,gp)===null||Qi.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(mp),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=o[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,R=x;M<R;M+=3){const b=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);r=ba(this,u,e,i,c,f,p,b,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=_,u=y;g<u;g+=3){const v=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=ba(this,o,e,i,c,f,p,v,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=o[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,R=x;M<R;M+=3){const b=M,T=M+1,P=M+2;r=ba(this,u,e,i,c,f,p,b,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=_,u=y;g<u;g+=3){const v=g,x=g+1,M=g+2;r=ba(this,o,e,i,c,f,p,v,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function KS(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ta);return c<n.near||c>n.far?null:{distance:c,point:Ta.clone(),object:t}}function ba(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Or),t.getVertexPosition(l,kr),t.getVertexPosition(c,Br);const f=KS(t,e,n,i,Or,kr,Br,Aa);if(f){r&&(Ma.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,l),wa.fromBufferAttribute(r,c),f.uv=jn.getInterpolation(Aa,Or,kr,Br,Ma,Ea,wa,new $e)),s&&(Ma.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,l),wa.fromBufferAttribute(s,c),f.uv1=jn.getInterpolation(Aa,Or,kr,Br,Ma,Ea,wa,new $e)),o&&(xp.fromBufferAttribute(o,a),vp.fromBufferAttribute(o,l),_p.fromBufferAttribute(o,c),f.normal=jn.getInterpolation(Aa,Or,kr,Br,xp,vp,_p,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new B,materialIndex:0};jn.getNormal(Or,kr,Br,p.normal),f.face=p}return f}class xn extends kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(p,2));function _(y,g,u,v,x,M,R,b,T,P,E){const S=M/T,I=R/P,O=M/2,L=R/2,W=b/2,q=T+1,Z=P+1;let ie=0,C=0;const V=new B;for(let U=0;U<Z;U++){const Q=U*I-L;for(let ge=0;ge<q;ge++){const ve=ge*S-O;V[y]=ve*v,V[g]=Q*x,V[u]=W,c.push(V.x,V.y,V.z),V[y]=0,V[g]=0,V[u]=b>0?1:-1,f.push(V.x,V.y,V.z),p.push(ge/T),p.push(1-U/P),ie+=1}}for(let U=0;U<P;U++)for(let Q=0;Q<T;Q++){const ge=h+Q+q*U,ve=h+Q+q*(U+1),j=h+(Q+1)+q*(U+1),te=h+(Q+1)+q*U;l.push(ge,ve,te),l.push(ve,j,te),C+=6}a.addGroup(m,C,E),m+=C,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function ZS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const QS={clone:ws,merge:Gt};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=ZS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Bx extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new B,yp=new $e,Sp=new $e;class yn extends Bx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,yp,Sp),n.subVectors(Sp,yp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Hr=1;class t1 extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(zr,Hr,e,n);r.layers=this.layers,this.add(r);const s=new yn(zr,Hr,e,n);s.layers=this.layers,this.add(s);const o=new yn(zr,Hr,e,n);o.layers=this.layers,this.add(o);const a=new yn(zr,Hr,e,n);a.layers=this.layers,this.add(a);const l=new yn(zr,Hr,e,n);l.layers=this.layers,this.add(l);const c=new yn(zr,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zx extends $t{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n1 extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xn(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ki});s.uniforms.tEquirect.value=n;const o=new ct(r,s),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=In),new t1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Gc=new B,i1=new B,r1=new ze;class rr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(i1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||r1.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new jl,Ca=new B;class rf{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],p=r[6],h=r[7],m=r[8],_=r[9],y=r[10],g=r[11],u=r[12],v=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,g-m,M-u).normalize(),i[1].setComponents(l+s,h+c,g+m,M+u).normalize(),i[2].setComponents(l+o,h+f,g+_,M+v).normalize(),i[3].setComponents(l-o,h-f,g-_,M-v).normalize(),i[4].setComponents(l-a,h-p,g-y,M-x).normalize(),n===ai)i[5].setComponents(l+a,h+p,g+y,M+x).normalize();else if(n===yl)i[5].setComponents(a,p,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function s1(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const f=l.array,p=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),p.count===-1&&h.length===0&&t.bufferSubData(c,0,f),h.length!==0){for(let m=0,_=h.length;m<_;m++){const y=h[m];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(c,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Vo extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,p=e/a,h=n/l,m=[],_=[],y=[],g=[];for(let u=0;u<f;u++){const v=u*h-o;for(let x=0;x<c;x++){const M=x*p-s;_.push(M,-v,0),y.push(0,0,1),g.push(x/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,M=v+c*(u+1),R=v+1+c*(u+1),b=v+1+c*u;m.push(x,M,b),m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var o1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
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
#endif`,l1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p1=`#ifdef USE_BATCHING
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
#endif`,m1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,g1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",O1=`
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
}`,k1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q1=`#ifdef USE_GRADIENTMAP
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
}`,$1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z1=`uniform bool receiveShadow;
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
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iM=`PhysicalMaterial material;
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
#endif`,rM=`struct PhysicalMaterial {
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
}`,sM=`
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
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
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mM=`#if defined( USE_POINTS_UV )
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
#endif`,gM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_M=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
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
#endif`,SM=`#ifdef USE_MORPHTARGETS
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
#endif`,MM=`#ifdef USE_MORPHTARGETS
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
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CM=`#ifdef USE_NORMALMAP
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
#endif`,RM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GM=`float getShadowMask() {
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
}`,WM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
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
#endif`,qM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,YM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JM=`#ifdef USE_TRANSMISSION
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
#endif`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oE=`uniform sampler2D t2D;
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
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
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
}`,fE=`#if DEPTH_PACKING == 3200
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
}`,hE=`#define DISTANCE
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
}`,pE=`#define DISTANCE
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,vE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,yE=`uniform vec3 diffuse;
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
}`,SE=`#define LAMBERT
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
}`,ME=`#define LAMBERT
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
}`,EE=`#define MATCAP
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
}`,wE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,TE=`#define NORMAL
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
}`,bE=`#define PHONG
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
}`,CE=`#define PHONG
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
}`,RE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,PE=`#define TOON
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
}`,LE=`#define TOON
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
}`,DE=`uniform float size;
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
}`,IE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,OE=`uniform float rotation;
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
}`,kE=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:o1,alphahash_pars_fragment:a1,alphamap_fragment:l1,alphamap_pars_fragment:c1,alphatest_fragment:u1,alphatest_pars_fragment:d1,aomap_fragment:f1,aomap_pars_fragment:h1,batching_pars_vertex:p1,batching_vertex:m1,begin_vertex:g1,beginnormal_vertex:x1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:y1,clipping_planes_fragment:S1,clipping_planes_pars_fragment:M1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:w1,color_fragment:A1,color_pars_fragment:T1,color_pars_vertex:b1,color_vertex:C1,common:R1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:P1,displacementmap_pars_vertex:L1,displacementmap_vertex:D1,emissivemap_fragment:I1,emissivemap_pars_fragment:U1,colorspace_fragment:F1,colorspace_pars_fragment:O1,envmap_fragment:k1,envmap_common_pars_fragment:B1,envmap_pars_fragment:z1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:Q1,envmap_vertex:V1,fog_vertex:j1,fog_pars_vertex:G1,fog_fragment:W1,fog_pars_fragment:X1,gradientmap_pars_fragment:q1,lightmap_pars_fragment:$1,lights_lambert_fragment:Y1,lights_lambert_pars_fragment:K1,lights_pars_begin:Z1,lights_toon_fragment:J1,lights_toon_pars_fragment:eM,lights_phong_fragment:tM,lights_phong_pars_fragment:nM,lights_physical_fragment:iM,lights_physical_pars_fragment:rM,lights_fragment_begin:sM,lights_fragment_maps:oM,lights_fragment_end:aM,logdepthbuf_fragment:lM,logdepthbuf_pars_fragment:cM,logdepthbuf_pars_vertex:uM,logdepthbuf_vertex:dM,map_fragment:fM,map_pars_fragment:hM,map_particle_fragment:pM,map_particle_pars_fragment:mM,metalnessmap_fragment:gM,metalnessmap_pars_fragment:xM,morphinstance_vertex:vM,morphcolor_vertex:_M,morphnormal_vertex:yM,morphtarget_pars_vertex:SM,morphtarget_vertex:MM,normal_fragment_begin:EM,normal_fragment_maps:wM,normal_pars_fragment:AM,normal_pars_vertex:TM,normal_vertex:bM,normalmap_pars_fragment:CM,clearcoat_normal_fragment_begin:RM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:PM,iridescence_pars_fragment:LM,opaque_fragment:DM,packing:IM,premultiplied_alpha_fragment:UM,project_vertex:FM,dithering_fragment:OM,dithering_pars_fragment:kM,roughnessmap_fragment:BM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:HM,shadowmap_pars_vertex:VM,shadowmap_vertex:jM,shadowmask_pars_fragment:GM,skinbase_vertex:WM,skinning_pars_vertex:XM,skinning_vertex:qM,skinnormal_vertex:$M,specularmap_fragment:YM,specularmap_pars_fragment:KM,tonemapping_fragment:ZM,tonemapping_pars_fragment:QM,transmission_fragment:JM,transmission_pars_fragment:eE,uv_pars_fragment:tE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:rE,background_vert:sE,background_frag:oE,backgroundCube_vert:aE,backgroundCube_frag:lE,cube_vert:cE,cube_frag:uE,depth_vert:dE,depth_frag:fE,distanceRGBA_vert:hE,distanceRGBA_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:xE,linedashed_frag:vE,meshbasic_vert:_E,meshbasic_frag:yE,meshlambert_vert:SE,meshlambert_frag:ME,meshmatcap_vert:EE,meshmatcap_frag:wE,meshnormal_vert:AE,meshnormal_frag:TE,meshphong_vert:bE,meshphong_frag:CE,meshphysical_vert:RE,meshphysical_frag:NE,meshtoon_vert:PE,meshtoon_frag:LE,points_vert:DE,points_frag:IE,shadow_vert:UE,shadow_frag:FE,sprite_vert:OE,sprite_frag:kE},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Hn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Hn.physical={uniforms:Gt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ra={r:0,b:0,g:0},er=new $n,BE=new mt;function zE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,f,p=null,h=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function y(v){let x=!1;const M=_(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function g(v,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===zl)?(f===void 0&&(f=new ct(new xn(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:ws(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),er.copy(x.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(er)),f.material.toneMapped=nt.getTransfer(M.colorSpace)!==ot,(p!==M||h!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,p=M,h=M.version,m=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ct(new Vo(2,2),new Gi({name:"BackgroundMaterial",uniforms:ws(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Ra,kx(t)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:g}}function HE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,O,L,W){let q=!1;const Z=p(L,O,I);s!==Z&&(s=Z,c(s.object)),q=m(S,L,O,W),q&&_(S,L,O,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(S,I,O,L),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function p(S,I,O){const L=O.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let q=W[I.id];q===void 0&&(q={},W[I.id]=q);let Z=q[L];return Z===void 0&&(Z=h(l()),q[L]=Z),Z}function h(S){const I=[],O=[],L=[];for(let W=0;W<n;W++)I[W]=0,O[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:L,object:S,attributes:{},index:null}}function m(S,I,O,L){const W=s.attributes,q=I.attributes;let Z=0;const ie=O.getAttributes();for(const C in ie)if(ie[C].location>=0){const U=W[C];let Q=q[C];if(Q===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),U===void 0||U.attribute!==Q||Q&&U.data!==Q.data)return!0;Z++}return s.attributesNum!==Z||s.index!==L}function _(S,I,O,L){const W={},q=I.attributes;let Z=0;const ie=O.getAttributes();for(const C in ie)if(ie[C].location>=0){let U=q[C];U===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(U=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(U=S.instanceColor));const Q={};Q.attribute=U,U&&U.data&&(Q.data=U.data),W[C]=Q,Z++}s.attributes=W,s.attributesNum=Z,s.index=L}function y(){const S=s.newAttributes;for(let I=0,O=S.length;I<O;I++)S[I]=0}function g(S){u(S,0)}function u(S,I){const O=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;O[S]=1,L[S]===0&&(t.enableVertexAttribArray(S),L[S]=1),W[S]!==I&&(t.vertexAttribDivisor(S,I),W[S]=I)}function v(){const S=s.newAttributes,I=s.enabledAttributes;for(let O=0,L=I.length;O<L;O++)I[O]!==S[O]&&(t.disableVertexAttribArray(O),I[O]=0)}function x(S,I,O,L,W,q,Z){Z===!0?t.vertexAttribIPointer(S,I,O,W,q):t.vertexAttribPointer(S,I,O,L,W,q)}function M(S,I,O,L){y();const W=L.attributes,q=O.getAttributes(),Z=I.defaultAttributeValues;for(const ie in q){const C=q[ie];if(C.location>=0){let V=W[ie];if(V===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const U=V.normalized,Q=V.itemSize,ge=e.get(V);if(ge===void 0)continue;const ve=ge.buffer,j=ge.type,te=ge.bytesPerElement,ue=j===t.INT||j===t.UNSIGNED_INT||V.gpuType===Sx;if(V.isInterleavedBufferAttribute){const se=V.data,Fe=se.stride,Ae=V.offset;if(se.isInstancedInterleavedBuffer){for(let k=0;k<C.locationSize;k++)u(C.location+k,se.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let k=0;k<C.locationSize;k++)g(C.location+k);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let k=0;k<C.locationSize;k++)x(C.location+k,Q/C.locationSize,j,U,Fe*te,(Ae+Q/C.locationSize*k)*te,ue)}else{if(V.isInstancedBufferAttribute){for(let se=0;se<C.locationSize;se++)u(C.location+se,V.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let se=0;se<C.locationSize;se++)g(C.location+se);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let se=0;se<C.locationSize;se++)x(C.location+se,Q/C.locationSize,j,U,Q*te,Q/C.locationSize*se*te,ue)}}else if(Z!==void 0){const U=Z[ie];if(U!==void 0)switch(U.length){case 2:t.vertexAttrib2fv(C.location,U);break;case 3:t.vertexAttrib3fv(C.location,U);break;case 4:t.vertexAttrib4fv(C.location,U);break;default:t.vertexAttrib1fv(C.location,U)}}}}v()}function R(){P();for(const S in i){const I=i[S];for(const O in I){const L=I[O];for(const W in L)f(L[W].object),delete L[W];delete I[O]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const O in I){const L=I[O];for(const W in L)f(L[W].object),delete L[W];delete I[O]}delete i[S.id]}function T(S){for(const I in i){const O=i[I];if(O[S.id]===void 0)continue;const L=O[S.id];for(const W in L)f(L[W].object),delete L[W];delete O[S.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function VE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,p){p!==0&&(t.drawArraysInstanced(i,c,f,p),n.update(f,i,p))}function a(c,f,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<p;m++)this.render(c[m],f[m]);else{h.multiDrawArraysWEBGL(i,c,0,f,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];n.update(m,i,1)}}function l(c,f,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=f[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Gn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const T=b===Hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ji&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ri&&!T)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:u,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:M,maxSamples:R}}function GE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,u=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,x=v*4;let M=u.clippingState||null;l.value=M,M=f(_,h,x,m);for(let R=0;R!==x;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,_){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const u=m+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<u)&&(g=new Float32Array(u));for(let x=0,M=m;x!==y;++x,M+=4)o.copy(p[x]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function WE(t){let e=new WeakMap;function n(o,a){return a===Ju?o.mapping=Ss:a===ed&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ju||a===ed)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new n1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Vx extends Bx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,Mp=[.125,.215,.35,.446,.526,.582],ar=20,Wc=new Vx,Ep=new We;let Xc=null,qc=0,$c=0,Yc=!1;const sr=(1+Math.sqrt(5))/2,Vr=1/sr,wp=[new B(-sr,Vr,0),new B(sr,Vr,0),new B(-Vr,0,sr),new B(Vr,0,sr),new B(0,sr,-Vr),new B(0,sr,Vr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,qc,$c),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Hl,format:Gn,colorSpace:$i,depthBuffer:!1},r=Tp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XE(s)),this._blurMaterial=qE(s,e,n)}return r}_compileMaterial(e){const n=new ct(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Ep),f.toneMapping=Bi,f.autoClear=!1;const m=new Ux({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new ct(new xn,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Ep),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Na(r,v*x,u>2?x:0,x,x),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wp[(r-s-1)%wp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new ct(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ar-1),y=s/_,g=isFinite(s)?1+Math.floor(f*y):ar;g>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ar}`);const u=[];let v=0;for(let T=0;T<ar;++T){const P=T/y,E=Math.exp(-P*P/2);u.push(E),T===0?v+=E:T<g&&(v+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-is?r-x+is:0),b=4*(this._cubeSize-M);Na(n,R,b,3*M,2*M),l.setRenderTarget(n),l.render(p,Wc)}}function XE(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+Mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-is?l=Mp[o-t+is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,y=3,g=2,u=1,v=new Float32Array(y*_*m),x=new Float32Array(g*_*m),M=new Float32Array(u*_*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,P=b>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(E,y*_*b),x.set(h,g*_*b);const S=[b,b,b,b,b,b];M.set(S,u*_*b)}const R=new kn;R.setAttribute("position",new qn(v,y)),R.setAttribute("uv",new qn(x,g)),R.setAttribute("faceIndex",new qn(M,u)),e.push(R),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qE(t,e,n){const i=new Float32Array(ar),r=new B(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function bp(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Cp(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function sf(){return`

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
	`}function $E(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ju||l===ed,f=l===Ss||l===Ms;if(c||f){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ap(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Ap(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function YE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KE(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const y=m[_];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,_=p.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let x=0,M=v.length;x<M;x+=3){const R=v[x+0],b=v[x+1],T=v[x+2];h.push(R,b,b,T,T,R)}}else if(_!==void 0){const v=_.array;y=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const R=x+0,b=x+1,T=x+2;h.push(R,b,b,T,T,R)}}else return;const g=new(Rx(h)?Ox:Fx)(h,1);g.version=y;const u=s.get(p);u&&e.remove(u),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function ZE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*o,_),n.update(m,i,_))}function f(h,m,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_;g++)this.render(h[g]/o,m[g]);else{y.multiDrawElementsWEBGL(i,m,0,s,h,0,_);let g=0;for(let u=0;u<_;u++)g+=m[u];n.update(g,i,1)}}function p(h,m,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v];for(let v=0;v<y.length;v++)n.update(u,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function QE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JE(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let R=a.attributes.position.count*M,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*b*4*p),P=new Px(T,R,b,p);P.type=Ri,P.needsUpdate=!0;const E=M*4;for(let I=0;I<p;I++){const O=u[I],L=v[I],W=x[I],q=R*b*4*I;for(let Z=0;Z<O.count;Z++){const ie=Z*E;_===!0&&(r.fromBufferAttribute(O,Z),T[q+ie+0]=r.x,T[q+ie+1]=r.y,T[q+ie+2]=r.z,T[q+ie+3]=0),y===!0&&(r.fromBufferAttribute(L,Z),T[q+ie+4]=r.x,T[q+ie+5]=r.y,T[q+ie+6]=r.z,T[q+ie+7]=0),g===!0&&(r.fromBufferAttribute(W,Z),T[q+ie+8]=r.x,T[q+ie+9]=r.y,T[q+ie+10]=r.z,T[q+ie+11]=W.itemSize===4?r.w:1)}}h={count:p,texture:P,size:new $e(R,b)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ew(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class jx extends $t{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:fs,f!==fs&&f!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===fs&&(i=Es),i===void 0&&f===No&&(i=Bo),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Gx=new $t,Wx=new jx(1,1);Wx.compareFunction=Cx;const Xx=new Px,qx=new zS,$x=new zx,Rp=[],Np=[],Pp=new Float32Array(16),Lp=new Float32Array(9),Dp=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rp[r];if(s===void 0&&(s=new Float32Array(r),Rp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gl(t,e){let n=Np[e];n===void 0&&(n=new Int32Array(e),Np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Dp.set(i),t.uniformMatrix2fv(this.addr,!1,Dp),wt(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Lp.set(i),t.uniformMatrix3fv(this.addr,!1,Lp),wt(n,i)}}function aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Pp.set(i),t.uniformMatrix4fv(this.addr,!1,Pp),wt(n,i)}}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Wx:Gx;n.setTexture2D(e||s,r)}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qx,r)}function vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$x,r)}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xx,r)}function yw(t){switch(t){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return dw;case 5125:return fw;case 36294:return hw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return _w}}function Sw(t,e){t.uniform1fv(this.addr,e)}function Mw(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function Ew(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function ww(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function Aw(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Tw(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bw(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Cw(t,e){t.uniform1iv(this.addr,e)}function Rw(t,e){t.uniform2iv(this.addr,e)}function Nw(t,e){t.uniform3iv(this.addr,e)}function Pw(t,e){t.uniform4iv(this.addr,e)}function Lw(t,e){t.uniform1uiv(this.addr,e)}function Dw(t,e){t.uniform2uiv(this.addr,e)}function Iw(t,e){t.uniform3uiv(this.addr,e)}function Uw(t,e){t.uniform4uiv(this.addr,e)}function Fw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Gx,s[o])}function Ow(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qx,s[o])}function kw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$x,s[o])}function Bw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Xx,s[o])}function zw(t){switch(t){case 5126:return Sw;case 35664:return Mw;case 35665:return Ew;case 35666:return ww;case 35674:return Aw;case 35675:return Tw;case 35676:return bw;case 5124:case 35670:return Cw;case 35667:case 35671:return Rw;case 35668:case 35672:return Nw;case 35669:case 35673:return Pw;case 5125:return Lw;case 36294:return Dw;case 36295:return Iw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Bw}}class Hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yw(n.type)}}class Vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zw(n.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Ip(t,e){t.seq.push(e),t.map[e.id]=e}function Gw(t,e,n){const i=t.name,r=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),o=Kc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ip(n,c===void 0?new Hw(a,t,e):new Vw(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new jw(a),Ip(n,p)),n=p}}}class Wa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Gw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Up(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ww=37297;let Xw=0;function qw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function $w(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===_l&&n===vl?i="LinearDisplayP3ToLinearSRGB":e===vl&&n===_l&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Vl:return[i,"LinearTransferOETF"];case Zt:case tf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Fp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qw(t.getShaderSource(e),o)}else return r}function Yw(t,e){const n=$w(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Kw(t,e){let n;switch(e){case Gy:n="Linear";break;case Wy:n="Reinhard";break;case Xy:n="OptimizedCineon";break;case vx:n="ACESFilmic";break;case $y:n="AgX";break;case Yy:n="Neutral";break;case qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Zw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Qw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Jw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Js(t){return t!==""}function Op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(eA,nA)}const tA=new Map;function nA(t,e){let n=Be[e];if(n===void 0){const i=tA.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(t){return t.replace(iA,rA)}function rA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function sA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function oA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function lA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xx:e="ENVMAP_BLENDING_MULTIPLY";break;case Vy:e="ENVMAP_BLENDING_MIX";break;case jy:e="ENVMAP_BLENDING_ADD";break}return e}function cA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=sA(n),c=oA(n),f=aA(n),p=lA(n),h=cA(n),m=Zw(n),_=Qw(s),y=r.createProgram();let g,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),u.length>0&&(u+=`
`)):(g=[zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),u=[zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Bi?Kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Yw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=id(o),o=Op(o,n),o=kp(o,n),a=id(a),a=Op(a,n),a=kp(a,n),o=Bp(o),a=Bp(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+g+o,M=v+u+a,R=Up(r,r.VERTEX_SHADER,x),b=Up(r,r.FRAGMENT_SHADER,M);r.attachShader(y,R),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(I){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y).trim(),L=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(b).trim();let q=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,b);else{const ie=Fp(r,R,"vertex"),C=Fp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+ie+`
`+C)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||W==="")&&(Z=!1);Z&&(I.diagnostics={runnable:q,programLog:O,vertexShader:{log:L,prefix:g},fragmentShader:{log:W,prefix:u}})}r.deleteShader(R),r.deleteShader(b),P=new Wa(r,y),E=Jw(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Ww)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}let dA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hA(e),n.set(e,i)),i}}class hA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function pA(t,e,n,i,r,s,o){const a=new Dx,l=new fA,c=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,I,O,L){const W=O.fog,q=L.geometry,Z=E.isMeshStandardMaterial?O.environment:null,ie=(E.isMeshStandardMaterial?n:e).get(E.envMap||Z),C=ie&&ie.mapping===zl?ie.image.height:null,V=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const U=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=U!==void 0?U.length:0;let ge=0;q.morphAttributes.position!==void 0&&(ge=1),q.morphAttributes.normal!==void 0&&(ge=2),q.morphAttributes.color!==void 0&&(ge=3);let ve,j,te,ue;if(V){const qe=Hn[V];ve=qe.vertexShader,j=qe.fragmentShader}else ve=E.vertexShader,j=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const se=t.getRenderTarget(),Fe=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,k=!!E.map,et=!!E.matcap,_e=!!ie,Xe=!!E.aoMap,be=!!E.lightMap,Ve=!!E.bumpMap,Oe=!!E.normalMap,Pe=!!E.displacementMap,rt=!!E.emissiveMap,N=!!E.metalnessMap,w=!!E.roughnessMap,X=E.anisotropy>0,Y=E.clearcoat>0,ee=E.dispersion>0,ne=E.iridescence>0,Me=E.sheen>0,he=E.transmission>0,fe=X&&!!E.anisotropyMap,Le=Y&&!!E.clearcoatMap,le=Y&&!!E.clearcoatNormalMap,Se=Y&&!!E.clearcoatRoughnessMap,Ge=ne&&!!E.iridescenceMap,Te=ne&&!!E.iridescenceThicknessMap,J=Me&&!!E.sheenColorMap,Ee=Me&&!!E.sheenRoughnessMap,we=!!E.specularMap,tt=!!E.specularColorMap,Ne=!!E.specularIntensityMap,D=he&&!!E.transmissionMap,K=he&&!!E.thicknessMap,$=!!E.gradientMap,ae=!!E.alphaMap,ce=E.alphaTest>0,Ce=!!E.alphaHash,Ze=!!E.extensions;let Qe=Bi;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Qe=t.toneMapping);const At={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:ve,fragmentShader:j,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ae,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$i,alphaToCoverage:!!E.alphaToCoverage,map:k,matcap:et,envMap:_e,envMapMode:_e&&ie.mapping,envMapCubeUVHeight:C,aoMap:Xe,lightMap:be,bumpMap:Ve,normalMap:Oe,displacementMap:h&&Pe,emissiveMap:rt,normalMapObjectSpace:Oe&&E.normalMapType===cS,normalMapTangentSpace:Oe&&E.normalMapType===bx,metalnessMap:N,roughnessMap:w,anisotropy:X,anisotropyMap:fe,clearcoat:Y,clearcoatMap:Le,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:ee,iridescence:ne,iridescenceMap:Ge,iridescenceThicknessMap:Te,sheen:Me,sheenColorMap:J,sheenRoughnessMap:Ee,specularMap:we,specularColorMap:tt,specularIntensityMap:Ne,transmission:he,transmissionMap:D,thicknessMap:K,gradientMap:$,opaque:E.transparent===!1&&E.blending===ds&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:Ce,combine:E.combine,mapUv:k&&y(E.map.channel),aoMapUv:Xe&&y(E.aoMap.channel),lightMapUv:be&&y(E.lightMap.channel),bumpMapUv:Ve&&y(E.bumpMap.channel),normalMapUv:Oe&&y(E.normalMap.channel),displacementMapUv:Pe&&y(E.displacementMap.channel),emissiveMapUv:rt&&y(E.emissiveMap.channel),metalnessMapUv:N&&y(E.metalnessMap.channel),roughnessMapUv:w&&y(E.roughnessMap.channel),anisotropyMapUv:fe&&y(E.anisotropyMap.channel),clearcoatMapUv:Le&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:J&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&y(E.sheenRoughnessMap.channel),specularMapUv:we&&y(E.specularMap.channel),specularColorMapUv:tt&&y(E.specularColorMap.channel),specularIntensityMapUv:Ne&&y(E.specularIntensityMap.channel),transmissionMapUv:D&&y(E.transmissionMap.channel),thicknessMapUv:K&&y(E.thicknessMap.channel),alphaMapUv:ae&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Oe||X),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(k||ae),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:k&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ri,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const S=_[E.type];let I;if(S){const O=Hn[S];I=QS.clone(O.uniforms)}else I=E.uniforms;return I}function R(E,S){let I;for(let O=0,L=f.length;O<L;O++){const W=f[O];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new uA(t,S,E,s),f.push(I)),I}function b(E){if(--E.usedTimes===0){const S=f.indexOf(E);f[S]=f[f.length-1],f.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:T,programs:f,dispose:P}}function mA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function gA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,m,_,y,g){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:_,renderOrder:p.renderOrder,z:y,group:g},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=y,u.group=g),e++,u}function a(p,h,m,_,y,g){const u=o(p,h,m,_,y,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(p,h,m,_,y,g){const u=o(p,h,m,_,y,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||gA),i.length>1&&i.sort(h||Hp),r.length>1&&r.sort(h||Hp)}function f(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function xA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Vp,t.set(i,[o])):r>=s.length?(o=new Vp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new We};break;case"SpotLight":n={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yA=0;function SA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MA(t){const e=new vA,n=_A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new mt,o=new mt;function a(c,f){let p=0,h=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,y=0,g=0,u=0,v=0,x=0,M=0,R=0,b=0,T=0,P=0;c.sort(SA);const E=f===!0?Math.PI:1;for(let I=0,O=c.length;I<O;I++){const L=c[I],W=L.color,q=L.intensity,Z=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=W.r*q*E,h+=W.g*q*E,m+=W.b*q*E;else if(L.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(L.sh.coefficients[C],q);P++}else if(L.isDirectionalLight){const C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const V=L.shadow,U=n.get(L);U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[_]=U,i.directionalShadowMap[_]=ie,i.directionalShadowMatrix[_]=L.shadow.matrix,x++}i.directional[_]=C,_++}else if(L.isSpotLight){const C=e.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(W).multiplyScalar(q*E),C.distance=Z,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,i.spot[g]=C;const V=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,V.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[g]=V.matrix,L.castShadow){const U=n.get(L);U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=ie,R++}g++}else if(L.isRectAreaLight){const C=e.get(L);C.color.copy(W).multiplyScalar(q),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),i.rectArea[u]=C,u++}else if(L.isPointLight){const C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity*E),C.distance=L.distance,C.decay=L.decay,L.castShadow){const V=L.shadow,U=n.get(L);U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=ie,i.pointShadowMatrix[y]=L.shadow.matrix,M++}i.point[y]=C,y++}else if(L.isHemisphereLight){const C=e.get(L);C.skyColor.copy(L.color).multiplyScalar(q*E),C.groundColor.copy(L.groundColor).multiplyScalar(q*E),i.hemi[v]=C,v++}}u>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=m;const S=i.hash;(S.directionalLength!==_||S.pointLength!==y||S.spotLength!==g||S.rectAreaLength!==u||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==R||S.numSpotMaps!==b||S.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=u,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,S.directionalLength=_,S.pointLength=y,S.spotLength=g,S.rectAreaLength=u,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=R,S.numSpotMaps=b,S.numLightProbes=P,i.version=yA++)}function l(c,f){let p=0,h=0,m=0,_=0,y=0;const g=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function jp(t){const e=new MA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(f){e.setup(n,f)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function EA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jp(t),e.set(r,[a])):s>=o.length?(a=new jp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class wA extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AA extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`;function CA(t,e,n){let i=new rf;const r=new $e,s=new $e,o=new Ct,a=new wA({depthPacking:lS}),l=new AA,c={},f=n.maxTextureSize,p={[Vi]:rn,[rn]:Vi,[ri]:ri},h=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:TA,fragmentShader:bA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new kn;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ct(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mx;let u=this.type;this.render=function(b,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),O=t.state;O.setBlending(ki),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=u!==ti&&this.type===ti,W=u===ti&&this.type!==ti;for(let q=0,Z=b.length;q<Z;q++){const ie=b[q],C=ie.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const V=C.getFrameExtents();if(r.multiply(V),s.copy(C.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,C.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,C.mapSize.y=s.y)),C.map===null||L===!0||W===!0){const Q=this.type!==ti?{minFilter:En,magFilter:En}:{};C.map!==null&&C.map.dispose(),C.map=new Sr(r.x,r.y,Q),C.map.texture.name=ie.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const U=C.getViewportCount();for(let Q=0;Q<U;Q++){const ge=C.getViewport(Q);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),O.viewport(o),C.updateMatrices(ie,Q),i=C.getFrustum(),M(T,P,C.camera,ie,this.type)}C.isPointLightShadow!==!0&&this.type===ti&&v(C,P),C.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,S,I)};function v(b,T){const P=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Sr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,P,m,y,null)}function x(b,T,P,E){let S=null;const I=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=S.uuid,L=T.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let q=W[L];q===void 0&&(q=S.clone(),W[L]=q,T.addEventListener("dispose",R)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,E===ti?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:p[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=P}return S}function M(b,T,P,E,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ti)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const L=e.update(b),W=b.material;if(Array.isArray(W)){const q=L.groups;for(let Z=0,ie=q.length;Z<ie;Z++){const C=q[Z],V=W[C.materialIndex];if(V&&V.visible){const U=x(b,V,E,S);b.onBeforeShadow(t,b,T,P,L,U,C),t.renderBufferDirect(P,null,L,U,b,C),b.onAfterShadow(t,b,T,P,L,U,C)}}}else if(W.visible){const q=x(b,W,E,S);b.onBeforeShadow(t,b,T,P,L,q,null),t.renderBufferDirect(P,null,L,q,b,null),b.onAfterShadow(t,b,T,P,L,q,null)}}const O=b.children;for(let L=0,W=O.length;L<W;L++)M(O[L],T,P,E,S)}function R(b){b.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function RA(t){function e(){let D=!1;const K=new Ct;let $=null;const ae=new Ct(0,0,0,0);return{setMask:function(ce){$!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){D=ce},setClear:function(ce,Ce,Ze,Qe,At){At===!0&&(ce*=Qe,Ce*=Qe,Ze*=Qe),K.set(ce,Ce,Ze,Qe),ae.equals(K)===!1&&(t.clearColor(ce,Ce,Ze,Qe),ae.copy(K))},reset:function(){D=!1,$=null,ae.set(-1,0,0,0)}}}function n(){let D=!1,K=null,$=null,ae=null;return{setTest:function(ce){ce?ue(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ce){K!==ce&&!D&&(t.depthMask(ce),K=ce)},setFunc:function(ce){if($!==ce){switch(ce){case Uy:t.depthFunc(t.NEVER);break;case Fy:t.depthFunc(t.ALWAYS);break;case Oy:t.depthFunc(t.LESS);break;case gl:t.depthFunc(t.LEQUAL);break;case ky:t.depthFunc(t.EQUAL);break;case By:t.depthFunc(t.GEQUAL);break;case zy:t.depthFunc(t.GREATER);break;case Hy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ae!==ce&&(t.clearDepth(ce),ae=ce)},reset:function(){D=!1,K=null,$=null,ae=null}}}function i(){let D=!1,K=null,$=null,ae=null,ce=null,Ce=null,Ze=null,Qe=null,At=null;return{setTest:function(qe){D||(qe?ue(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(qe){K!==qe&&!D&&(t.stencilMask(qe),K=qe)},setFunc:function(qe,pn,gt){($!==qe||ae!==pn||ce!==gt)&&(t.stencilFunc(qe,pn,gt),$=qe,ae=pn,ce=gt)},setOp:function(qe,pn,gt){(Ce!==qe||Ze!==pn||Qe!==gt)&&(t.stencilOp(qe,pn,gt),Ce=qe,Ze=pn,Qe=gt)},setLocked:function(qe){D=qe},setClear:function(qe){At!==qe&&(t.clearStencil(qe),At=qe)},reset:function(){D=!1,K=null,$=null,ae=null,ce=null,Ce=null,Ze=null,Qe=null,At=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},p=new WeakMap,h=[],m=null,_=!1,y=null,g=null,u=null,v=null,x=null,M=null,R=null,b=new We(0,0,0),T=0,P=!1,E=null,S=null,I=null,O=null,L=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ie)[1]),q=Z>=1):ie.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),q=Z>=2);let C=null,V={};const U=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),ge=new Ct().fromArray(U),ve=new Ct().fromArray(Q);function j(D,K,$,ae){const ce=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(D,Ce),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<$;Ze++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(K,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(K+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Ce}const te={};te[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(gl),Ve(!1),Oe(Eh),ue(t.CULL_FACE),Xe(ki);function ue(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function se(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Fe(D,K){return f[D]!==K?(t.bindFramebuffer(D,K),f[D]=K,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=K),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=K),!0):!1}function Ae(D,K){let $=h,ae=!1;if(D){$=p.get(K),$===void 0&&($=[],p.set(K,$));const ce=D.textures;if($.length!==ce.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,Ze=ce.length;Ce<Ze;Ce++)$[Ce]=t.COLOR_ATTACHMENT0+Ce;$.length=ce.length,ae=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ae=!0);ae&&t.drawBuffers($)}function k(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const et={[or]:t.FUNC_ADD,[vy]:t.FUNC_SUBTRACT,[_y]:t.FUNC_REVERSE_SUBTRACT};et[yy]=t.MIN,et[Sy]=t.MAX;const _e={[My]:t.ZERO,[Ey]:t.ONE,[wy]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[Ny]:t.SRC_ALPHA_SATURATE,[Cy]:t.DST_COLOR,[Ty]:t.DST_ALPHA,[Ay]:t.ONE_MINUS_SRC_COLOR,[Qu]:t.ONE_MINUS_SRC_ALPHA,[Ry]:t.ONE_MINUS_DST_COLOR,[by]:t.ONE_MINUS_DST_ALPHA,[Py]:t.CONSTANT_COLOR,[Ly]:t.ONE_MINUS_CONSTANT_COLOR,[Dy]:t.CONSTANT_ALPHA,[Iy]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(D,K,$,ae,ce,Ce,Ze,Qe,At,qe){if(D===ki){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),D!==xy){if(D!==y||qe!==P){if((g!==or||x!==or)&&(t.blendEquation(t.FUNC_ADD),g=or,x=or),qe)switch(D){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.ONE,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Th:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Th:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,v=null,M=null,R=null,b.set(0,0,0),T=0,y=D,P=qe}return}ce=ce||K,Ce=Ce||$,Ze=Ze||ae,(K!==g||ce!==x)&&(t.blendEquationSeparate(et[K],et[ce]),g=K,x=ce),($!==u||ae!==v||Ce!==M||Ze!==R)&&(t.blendFuncSeparate(_e[$],_e[ae],_e[Ce],_e[Ze]),u=$,v=ae,M=Ce,R=Ze),(Qe.equals(b)===!1||At!==T)&&(t.blendColor(Qe.r,Qe.g,Qe.b,At),b.copy(Qe),T=At),y=D,P=!1}function be(D,K){D.side===ri?se(t.CULL_FACE):ue(t.CULL_FACE);let $=D.side===rn;K&&($=!$),Ve($),D.blending===ds&&D.transparent===!1?Xe(ki):Xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ae=D.stencilWrite;o.setTest(ae),ae&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){E!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),E=D)}function Oe(D){D!==my?(ue(t.CULL_FACE),D!==S&&(D===Eh?t.cullFace(t.BACK):D===gy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),S=D}function Pe(D){D!==I&&(q&&t.lineWidth(D),I=D)}function rt(D,K,$){D?(ue(t.POLYGON_OFFSET_FILL),(O!==K||L!==$)&&(t.polygonOffset(K,$),O=K,L=$)):se(t.POLYGON_OFFSET_FILL)}function N(D){D?ue(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function w(D){D===void 0&&(D=t.TEXTURE0+W-1),C!==D&&(t.activeTexture(D),C=D)}function X(D,K,$){$===void 0&&(C===null?$=t.TEXTURE0+W-1:$=C);let ae=V[$];ae===void 0&&(ae={type:void 0,texture:void 0},V[$]=ae),(ae.type!==D||ae.texture!==K)&&(C!==$&&(t.activeTexture($),C=$),t.bindTexture(D,K||te[D]),ae.type=D,ae.texture=K)}function Y(){const D=V[C];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(D){ge.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ge.copy(D))}function Ee(D){ve.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function we(D,K){let $=l.get(K);$===void 0&&($=new WeakMap,l.set(K,$));let ae=$.get(D);ae===void 0&&(ae=t.getUniformBlockIndex(K,D.name),$.set(D,ae))}function tt(D,K){const ae=l.get(K).get(D);a.get(K)!==ae&&(t.uniformBlockBinding(K,ae,D.__bindingPointIndex),a.set(K,ae))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},C=null,V={},f={},p=new WeakMap,h=[],m=null,_=!1,y=null,g=null,u=null,v=null,x=null,M=null,R=null,b=new We(0,0,0),T=0,P=!1,E=null,S=null,I=null,O=null,L=null,ge.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:se,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:k,setBlending:Xe,setMaterial:be,setFlipSided:Ve,setCullFace:Oe,setLineWidth:Pe,setPolygonOffset:rt,setScissorTest:N,activeTexture:w,bindTexture:X,unbindTexture:Y,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:Ge,texImage3D:Te,updateUBOMapping:we,uniformBlockBinding:tt,texStorage2D:le,texStorage3D:Se,texSubImage2D:Me,texSubImage3D:he,compressedTexSubImage2D:fe,compressedTexSubImage3D:Le,scissor:J,viewport:Ee,reset:Ne}}function NA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,w){return m?new OffscreenCanvas(N,w):Lo("canvas")}function y(N,w,X){let Y=1;const ee=rt(N);if((ee.width>X||ee.height>X)&&(Y=X/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ne=Math.floor(Y*ee.width),Me=Math.floor(Y*ee.height);p===void 0&&(p=_(ne,Me));const he=w?_(ne,Me):p;return he.width=ne,he.height=Me,he.getContext("2d").drawImage(N,0,0,ne,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ne+"x"+Me+")."),he}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==En&&N.minFilter!==In}function u(N){t.generateMipmap(N)}function v(N,w,X,Y,ee=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ne=w;if(w===t.RED&&(X===t.FLOAT&&(ne=t.R32F),X===t.HALF_FLOAT&&(ne=t.R16F),X===t.UNSIGNED_BYTE&&(ne=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.R8UI),X===t.UNSIGNED_SHORT&&(ne=t.R16UI),X===t.UNSIGNED_INT&&(ne=t.R32UI),X===t.BYTE&&(ne=t.R8I),X===t.SHORT&&(ne=t.R16I),X===t.INT&&(ne=t.R32I)),w===t.RG&&(X===t.FLOAT&&(ne=t.RG32F),X===t.HALF_FLOAT&&(ne=t.RG16F),X===t.UNSIGNED_BYTE&&(ne=t.RG8)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.RG8UI),X===t.UNSIGNED_SHORT&&(ne=t.RG16UI),X===t.UNSIGNED_INT&&(ne=t.RG32UI),X===t.BYTE&&(ne=t.RG8I),X===t.SHORT&&(ne=t.RG16I),X===t.INT&&(ne=t.RG32I)),w===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),w===t.RGBA){const Me=ee?xl:nt.getTransfer(Y);X===t.FLOAT&&(ne=t.RGBA32F),X===t.HALF_FLOAT&&(ne=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ne=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(N,w){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==En&&N.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function M(N){const w=N.target;w.removeEventListener("dispose",M),b(w),w.isVideoTexture&&f.delete(w)}function R(N){const w=N.target;w.removeEventListener("dispose",R),P(w)}function b(N){const w=i.get(N);if(w.__webglInit===void 0)return;const X=N.source,Y=h.get(X);if(Y){const ee=Y[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(N),Object.keys(Y).length===0&&h.delete(X)}i.remove(N)}function T(N){const w=i.get(N);t.deleteTexture(w.__webglTexture);const X=N.source,Y=h.get(X);delete Y[w.__cacheKey],o.memory.textures--}function P(N){const w=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let ee=0;ee<w.__webglFramebuffer[Y].length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[Y][ee]);else t.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)t.deleteFramebuffer(w.__webglFramebuffer[Y]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=N.textures;for(let Y=0,ee=X.length;Y<ee;Y++){const ne=i.get(X[Y]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(X[Y])}i.remove(N)}let E=0;function S(){E=0}function I(){const N=E;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),E+=1,N}function O(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function L(N,w){const X=i.get(N);if(N.isVideoTexture&&Oe(N),N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){const Y=N.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(X,N,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function W(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){ge(X,N,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function q(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){ge(X,N,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function Z(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){ve(X,N,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const ie={[td]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[nd]:t.MIRRORED_REPEAT},C={[En]:t.NEAREST,[Ky]:t.NEAREST_MIPMAP_NEAREST,[la]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},V={[uS]:t.NEVER,[gS]:t.ALWAYS,[dS]:t.LESS,[Cx]:t.LEQUAL,[fS]:t.EQUAL,[mS]:t.GEQUAL,[hS]:t.GREATER,[pS]:t.NOTEQUAL};function U(N,w){if(w.type===Ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===Sc||w.magFilter===la||w.magFilter===hr||w.minFilter===In||w.minFilter===Sc||w.minFilter===la||w.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,ie[w.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,ie[w.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,ie[w.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,C[w.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,C[w.minFilter]),w.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,V[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===En||w.minFilter!==la&&w.minFilter!==hr||w.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Q(N,w){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",M));const Y=w.source;let ee=h.get(Y);ee===void 0&&(ee={},h.set(Y,ee));const ne=O(w);if(ne!==N.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[ne].usedTimes++;const Me=ee[N.__cacheKey];Me!==void 0&&(ee[N.__cacheKey].usedTimes--,Me.usedTimes===0&&T(w)),N.__cacheKey=ne,N.__webglTexture=ee[ne].texture}return X}function ge(N,w,X){let Y=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=t.TEXTURE_3D);const ee=Q(N,w),ne=w.source;n.bindTexture(Y,N.__webglTexture,t.TEXTURE0+X);const Me=i.get(ne);if(ne.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+X);const he=nt.getPrimaries(nt.workingColorSpace),fe=w.colorSpace===Ti?null:nt.getPrimaries(w.colorSpace),Le=w.colorSpace===Ti||he===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let le=y(w.image,!1,r.maxTextureSize);le=Pe(w,le);const Se=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type);let Te=v(w.internalFormat,Se,Ge,w.colorSpace,w.isVideoTexture);U(Y,w);let J;const Ee=w.mipmaps,we=w.isVideoTexture!==!0,tt=Me.__version===void 0||ee===!0,Ne=ne.dataReady,D=x(w,le);if(w.isDepthTexture)Te=t.DEPTH_COMPONENT16,w.type===Ri?Te=t.DEPTH_COMPONENT32F:w.type===Es?Te=t.DEPTH_COMPONENT24:w.type===Bo&&(Te=t.DEPTH24_STENCIL8),tt&&(we?n.texStorage2D(t.TEXTURE_2D,1,Te,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Te,le.width,le.height,0,Se,Ge,null));else if(w.isDataTexture)if(Ee.length>0){we&&tt&&n.texStorage2D(t.TEXTURE_2D,D,Te,Ee[0].width,Ee[0].height);for(let K=0,$=Ee.length;K<$;K++)J=Ee[K],we?Ne&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,J.width,J.height,Se,Ge,J.data):n.texImage2D(t.TEXTURE_2D,K,Te,J.width,J.height,0,Se,Ge,J.data);w.generateMipmaps=!1}else we?(tt&&n.texStorage2D(t.TEXTURE_2D,D,Te,le.width,le.height),Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Se,Ge,le.data)):n.texImage2D(t.TEXTURE_2D,0,Te,le.width,le.height,0,Se,Ge,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){we&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,Te,Ee[0].width,Ee[0].height,le.depth);for(let K=0,$=Ee.length;K<$;K++)J=Ee[K],w.format!==Gn?Se!==null?we?Ne&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,J.width,J.height,le.depth,Se,J.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Te,J.width,J.height,le.depth,0,J.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,J.width,J.height,le.depth,Se,Ge,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Te,J.width,J.height,le.depth,0,Se,Ge,J.data)}else{we&&tt&&n.texStorage2D(t.TEXTURE_2D,D,Te,Ee[0].width,Ee[0].height);for(let K=0,$=Ee.length;K<$;K++)J=Ee[K],w.format!==Gn?Se!==null?we?Ne&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,J.width,J.height,Se,J.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Te,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ne&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,J.width,J.height,Se,Ge,J.data):n.texImage2D(t.TEXTURE_2D,K,Te,J.width,J.height,0,Se,Ge,J.data)}else if(w.isDataArrayTexture)we?(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,Te,le.width,le.height,le.depth),Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Ge,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,Se,Ge,le.data);else if(w.isData3DTexture)we?(tt&&n.texStorage3D(t.TEXTURE_3D,D,Te,le.width,le.height,le.depth),Ne&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Ge,le.data)):n.texImage3D(t.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,Se,Ge,le.data);else if(w.isFramebufferTexture){if(tt)if(we)n.texStorage2D(t.TEXTURE_2D,D,Te,le.width,le.height);else{let K=le.width,$=le.height;for(let ae=0;ae<D;ae++)n.texImage2D(t.TEXTURE_2D,ae,Te,K,$,0,Se,Ge,null),K>>=1,$>>=1}}else if(Ee.length>0){if(we&&tt){const K=rt(Ee[0]);n.texStorage2D(t.TEXTURE_2D,D,Te,K.width,K.height)}for(let K=0,$=Ee.length;K<$;K++)J=Ee[K],we?Ne&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se,Ge,J):n.texImage2D(t.TEXTURE_2D,K,Te,Se,Ge,J);w.generateMipmaps=!1}else if(we){if(tt){const K=rt(le);n.texStorage2D(t.TEXTURE_2D,D,Te,K.width,K.height)}Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ge,le)}else n.texImage2D(t.TEXTURE_2D,0,Te,Se,Ge,le);g(w)&&u(Y),Me.__version=ne.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ve(N,w,X){if(w.image.length!==6)return;const Y=Q(N,w),ee=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+X);const ne=i.get(ee);if(ee.version!==ne.__version||Y===!0){n.activeTexture(t.TEXTURE0+X);const Me=nt.getPrimaries(nt.workingColorSpace),he=w.colorSpace===Ti?null:nt.getPrimaries(w.colorSpace),fe=w.colorSpace===Ti||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let $=0;$<6;$++)!Le&&!le?Se[$]=y(w.image[$],!0,r.maxCubemapSize):Se[$]=le?w.image[$].image:w.image[$],Se[$]=Pe(w,Se[$]);const Ge=Se[0],Te=s.convert(w.format,w.colorSpace),J=s.convert(w.type),Ee=v(w.internalFormat,Te,J,w.colorSpace),we=w.isVideoTexture!==!0,tt=ne.__version===void 0||Y===!0,Ne=ee.dataReady;let D=x(w,Ge);U(t.TEXTURE_CUBE_MAP,w);let K;if(Le){we&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,Ee,Ge.width,Ge.height);for(let $=0;$<6;$++){K=Se[$].mipmaps;for(let ae=0;ae<K.length;ae++){const ce=K[ae];w.format!==Gn?Te!==null?we?Ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,ce.width,ce.height,Te,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,Ee,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,ce.width,ce.height,Te,J,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,Ee,ce.width,ce.height,0,Te,J,ce.data)}}}else{if(K=w.mipmaps,we&&tt){K.length>0&&D++;const $=rt(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,Ee,$.width,$.height)}for(let $=0;$<6;$++)if(le){we?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se[$].width,Se[$].height,Te,J,Se[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ee,Se[$].width,Se[$].height,0,Te,J,Se[$].data);for(let ae=0;ae<K.length;ae++){const Ce=K[ae].image[$].image;we?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Ce.width,Ce.height,Te,J,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,Ee,Ce.width,Ce.height,0,Te,J,Ce.data)}}else{we?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,J,Se[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ee,Te,J,Se[$]);for(let ae=0;ae<K.length;ae++){const ce=K[ae];we?Ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Te,J,ce.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,Ee,Te,J,ce.image[$])}}}g(w)&&u(t.TEXTURE_CUBE_MAP),ne.__version=ee.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function j(N,w,X,Y,ee,ne){const Me=s.convert(X.format,X.colorSpace),he=s.convert(X.type),fe=v(X.internalFormat,Me,he,X.colorSpace);if(!i.get(w).__hasExternalTextures){const le=Math.max(1,w.width>>ne),Se=Math.max(1,w.height>>ne);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,fe,le,Se,w.depth,0,Me,he,null):n.texImage2D(ee,ne,fe,le,Se,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Ve(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ee,i.get(X).__webglTexture,0,be(w)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ee,i.get(X).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(N,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,N),w.depthBuffer&&!w.stencilBuffer){let Y=t.DEPTH_COMPONENT24;if(X||Ve(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ri?Y=t.DEPTH_COMPONENT32F:ee.type===Es&&(Y=t.DEPTH_COMPONENT24));const ne=be(w);Ve(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Y,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Y,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,N)}else if(w.depthBuffer&&w.stencilBuffer){const Y=be(w);X&&Ve(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,w.width,w.height):Ve(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,N)}else{const Y=w.textures;for(let ee=0;ee<Y.length;ee++){const ne=Y[ee],Me=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),fe=v(ne.internalFormat,Me,he,ne.colorSpace),Le=be(w);X&&Ve(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,fe,w.width,w.height):Ve(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,fe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,fe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const Y=i.get(w.depthTexture).__webglTexture,ee=be(w);if(w.depthTexture.format===fs)Ve(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(w.depthTexture.format===No)Ve(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function se(N){const w=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,N)}else if(X){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]=t.createRenderbuffer(),te(w.__webglDepthbuffer[Y],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),te(w.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(N,w,X){const Y=i.get(N);w!==void 0&&j(Y.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&se(N)}function Ae(N){const w=N.texture,X=i.get(N),Y=i.get(w);N.addEventListener("dispose",R);const ee=N.textures,ne=N.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=w.version,o.memory.textures++),ne){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let fe=0;fe<w.mipmaps.length;fe++)X.__webglFramebuffer[he][fe]=t.createFramebuffer()}else X.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)X.__webglFramebuffer[he]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Me)for(let he=0,fe=ee.length;he<fe;he++){const Le=i.get(ee[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(N.samples>0&&Ve(N)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const fe=ee[he];X.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[he]);const Le=s.convert(fe.format,fe.colorSpace),le=s.convert(fe.type),Se=v(fe.internalFormat,Le,le,fe.colorSpace,N.isXRRenderTarget===!0),Ge=be(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Se,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,X.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),te(X.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),U(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)j(X.__webglFramebuffer[he][fe],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else j(X.__webglFramebuffer[he],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let he=0,fe=ee.length;he<fe;he++){const Le=ee[he],le=i.get(Le);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),U(t.TEXTURE_2D,Le),j(X.__webglFramebuffer,N,Le,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),g(Le)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Y.__webglTexture),U(he,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)j(X.__webglFramebuffer[fe],N,w,t.COLOR_ATTACHMENT0,he,fe);else j(X.__webglFramebuffer,N,w,t.COLOR_ATTACHMENT0,he,0);g(w)&&u(he),n.unbindTexture()}N.depthBuffer&&se(N)}function k(N){const w=N.textures;for(let X=0,Y=w.length;X<Y;X++){const ee=w[X];if(g(ee)){const ne=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ee).__webglTexture;n.bindTexture(ne,Me),u(ne),n.unbindTexture()}}}const et=[],_e=[];function Xe(N){if(N.samples>0){if(Ve(N)===!1){const w=N.textures,X=N.width,Y=N.height;let ee=t.COLOR_BUFFER_BIT;const ne=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(N),he=w.length>1;if(he)for(let fe=0;fe<w.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const Le=i.get(w[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,X,Y,0,0,X,Y,ee,t.NEAREST),l===!0&&(et.length=0,_e.length=0,et.push(t.COLOR_ATTACHMENT0+fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(et.push(ne),_e.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<w.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const Le=i.get(w[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const w=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function be(N){return Math.min(r.maxSamples,N.samples)}function Ve(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Oe(N){const w=o.render.frame;f.get(N)!==w&&(f.set(N,w),N.update())}function Pe(N,w){const X=N.colorSpace,Y=N.format,ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==$i&&X!==Ti&&(nt.getTransfer(X)===ot?(Y!==Gn||ee!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Fe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ve}function PA(t,e){function n(i,r=Ti){let s;const o=nt.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===Mx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ex)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zy)return t.BYTE;if(i===Qy)return t.SHORT;if(i===yx)return t.UNSIGNED_SHORT;if(i===Sx)return t.INT;if(i===Es)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===Hl)return t.HALF_FLOAT;if(i===eS)return t.ALPHA;if(i===tS)return t.RGB;if(i===Gn)return t.RGBA;if(i===nS)return t.LUMINANCE;if(i===iS)return t.LUMINANCE_ALPHA;if(i===fs)return t.DEPTH_COMPONENT;if(i===No)return t.DEPTH_STENCIL;if(i===rS)return t.RED;if(i===wx)return t.RED_INTEGER;if(i===sS)return t.RG;if(i===Ax)return t.RG_INTEGER;if(i===Tx)return t.RGBA_INTEGER;if(i===Mc||i===Ec||i===wc||i===Ac)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bh||i===Ch||i===Rh||i===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ch)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ph||i===Lh||i===Dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ph||i===Lh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Hh||i===Vh||i===jh||i===Gh||i===Wh||i===Xh||i===qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===$h||i===Yh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tc)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oS||i===Kh||i===Zh||i===Qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class LA extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Gi({vertexShader:IA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ct(new Vo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class OA extends Cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,h=null,m=null,_=null;const y=new FA,g=n.getContextAttributes();let u=null,v=null;const x=[],M=[],R=new $e;let b=null;const T=new yn;T.layers.enable(1),T.viewport=new Ct;const P=new yn;P.layers.enable(2),P.viewport=new Ct;const E=[T,P],S=new LA;S.layers.enable(1),S.layers.enable(2);let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=x[j];return te===void 0&&(te=new Zc,x[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=x[j];return te===void 0&&(te=new Zc,x[j]=te),te.getGripSpace()},this.getHand=function(j){let te=x[j];return te===void 0&&(te=new Zc,x[j]=te),te.getHandSpace()};function L(j){const te=M.indexOf(j.inputSource);if(te===-1)return;const ue=x[te];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let j=0;j<x.length;j++){const te=M[j];te!==null&&(M[j]=null,x[j].disconnect(te))}I=null,O=null,y.reset(),e.setRenderTarget(u),m=null,h=null,p=null,r=null,v=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Sr(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,ue=null,se=null;g.depth&&(se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=g.stencil?No:fs,ue=g.stencil?Bo:Es);const Fe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Sr(h.textureWidth,h.textureHeight,{format:Gn,type:ji,depthTexture:new jx(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(j){for(let te=0;te<j.removed.length;te++){const ue=j.removed[te],se=M.indexOf(ue);se>=0&&(M[se]=null,x[se].disconnect(ue))}for(let te=0;te<j.added.length;te++){const ue=j.added[te];let se=M.indexOf(ue);if(se===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=M.length){M.push(ue),se=Ae;break}else if(M[Ae]===null){M[Ae]=ue,se=Ae;break}if(se===-1)break}const Fe=x[se];Fe&&Fe.connect(ue)}}const Z=new B,ie=new B;function C(j,te,ue){Z.setFromMatrixPosition(te.matrixWorld),ie.setFromMatrixPosition(ue.matrixWorld);const se=Z.distanceTo(ie),Fe=te.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,k=Fe[14]/(Fe[10]-1),et=Fe[14]/(Fe[10]+1),_e=(Fe[9]+1)/Fe[5],Xe=(Fe[9]-1)/Fe[5],be=(Fe[8]-1)/Fe[0],Ve=(Ae[8]+1)/Ae[0],Oe=k*be,Pe=k*Ve,rt=se/(-be+Ve),N=rt*-be;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(N),j.translateZ(rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const w=k+rt,X=et+rt,Y=Oe-N,ee=Pe+(se-N),ne=_e*et/X*w,Me=Xe*et/X*w;j.projectionMatrix.makePerspective(Y,ee,ne,Me,w,X),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function V(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;y.texture!==null&&(j.near=y.depthNear,j.far=y.depthFar),S.near=P.near=T.near=j.near,S.far=P.far=T.far=j.far,(I!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,O=S.far,T.near=I,T.far=O,P.near=I,P.far=O,T.updateProjectionMatrix(),P.updateProjectionMatrix(),j.updateProjectionMatrix());const te=j.parent,ue=S.cameras;V(S,te);for(let se=0;se<ue.length;se++)V(ue[se],te);ue.length===2?C(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),U(j,S,te)};function U(j,te,ue){ue===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Po*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null};let Q=null;function ge(j,te){if(f=te.getViewerPose(c||o),_=te,f!==null){const ue=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let se=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ae=0;Ae<ue.length;Ae++){const k=ue[Ae];let et=null;if(m!==null)et=m.getViewport(k);else{const Xe=p.getViewSubImage(h,k);et=Xe.viewport,Ae===0&&(e.setRenderTargetTextures(v,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(v))}let _e=E[Ae];_e===void 0&&(_e=new yn,_e.layers.enable(Ae),_e.viewport=new Ct,E[Ae]=_e),_e.matrix.fromArray(k.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(k.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(S.matrix.copy(_e.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(_e)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ae=p.getDepthInformation(ue[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let ue=0;ue<x.length;ue++){const se=M[ue],Fe=x[ue];se!==null&&Fe!==void 0&&Fe.update(se,te,c||o)}y.render(e,S),Q&&Q(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const ve=new Hx;ve.setAnimationLoop(ge),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}const tr=new $n,kA=new mt;function BA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,kx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,v,x,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),p(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,v,x):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===rn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===rn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,M=v.envMapRotation;if(x&&(g.envMap.value=x,tr.copy(M),tr.x*=-1,tr.y*=-1,tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.envMapRotation.value.setFromMatrix4(kA.makeRotationFromEuler(tr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*R,n(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,v,x){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*v,g.scale.value=x*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function p(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,v){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const v=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=r[v.id];M===void 0&&(_(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function f(v){const x=p();v.__bindingPointIndex=x;const M=t.createBuffer(),R=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],M=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,T=M.length;b<T;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,S=P.length;E<S;E++){const I=P[E];if(m(I,b,E,R)===!0){const O=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let q=0;q<L.length;q++){const Z=L[q],ie=y(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,O+W,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,M,R){const b=v.value,T=x+"_"+M;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const P=R[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(v){const x=v.uniforms;let M=0;const R=16;for(let T=0,P=x.length;T<P;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,I=E.length;S<I;S++){const O=E[S],L=Array.isArray(O.value)?O.value:[O.value];for(let W=0,q=L.length;W<q;W++){const Z=L[W],ie=y(Z),C=M%R;C!==0&&R-C<ie.boundary&&(M+=R-C),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=ie.storage}}}const b=M%R;return b>0&&(M+=R-b),v.__size=M,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class HA{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const x=this;let M=!1,R=0,b=0,T=null,P=-1,E=null;const S=new Ct,I=new Ct;let O=null;const L=new We(0);let W=0,q=n.width,Z=n.height,ie=1,C=null,V=null;const U=new Ct(0,0,q,Z),Q=new Ct(0,0,q,Z);let ge=!1;const ve=new rf;let j=!1,te=!1;const ue=new mt,se=new B,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?ie:1}let k=i;function et(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",D,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",$,!1),k===null){const F="webgl2";if(k=et(F,A),k===null)throw et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Xe,be,Ve,Oe,Pe,rt,N,w,X,Y,ee,ne,Me,he,fe,Le,le,Se,Ge,Te,J,Ee,we;function tt(){_e=new YE(k),_e.init(),J=new PA(k,_e),Xe=new jE(k,_e,e,J),be=new RA(k),Ve=new QE(k),Oe=new mA,Pe=new NA(k,_e,be,Oe,Xe,J,Ve),rt=new WE(x),N=new $E(x),w=new s1(k),Ee=new HE(k,w),X=new KE(k,w,Ve,Ee),Y=new ew(k,X,w,Ve),Se=new JE(k,Xe,Pe),fe=new GE(Oe),ee=new pA(x,rt,N,_e,Xe,Ee,fe),ne=new BA(x,Oe),Me=new xA,he=new EA(_e),le=new zE(x,rt,N,be,Y,h,l),Le=new CA(x,Y,Xe),we=new zA(k,Ve,Xe,be),Ge=new VE(k,_e,Ve),Te=new ZE(k,_e,Ve),Ve.programs=ee.programs,x.capabilities=Xe,x.extensions=_e,x.properties=Oe,x.renderLists=Me,x.shadowMap=Le,x.state=be,x.info=Ve}tt();const Ne=new OA(x,k);this.xr=Ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize(q,Z,!1))},this.getSize=function(A){return A.set(q,Z)},this.setSize=function(A,F,G=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,Z=F,n.width=Math.floor(A*ie),n.height=Math.floor(F*ie),G===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(q*ie,Z*ie).floor()},this.setDrawingBufferSize=function(A,F,G){q=A,Z=F,ie=G,n.width=Math.floor(A*G),n.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,F,G,z){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,F,G,z),be.viewport(S.copy(U).multiplyScalar(ie).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,F,G,z){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,F,G,z),be.scissor(I.copy(Q).multiplyScalar(ie).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){be.setScissorTest(ge=A)},this.setOpaqueSort=function(A){C=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(A=!0,F=!0,G=!0){let z=0;if(A){let H=!1;if(T!==null){const pe=T.texture.format;H=pe===Tx||pe===Ax||pe===wx}if(H){const pe=T.texture.type,xe=pe===ji||pe===Es||pe===yx||pe===Bo||pe===Mx||pe===Ex,ye=le.getClearColor(),Re=le.getClearAlpha(),De=ye.r,ke=ye.g,He=ye.b;xe?(m[0]=De,m[1]=ke,m[2]=He,m[3]=Re,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=De,_[1]=ke,_[2]=He,_[3]=Re,k.clearBufferiv(k.COLOR,0,_))}else z|=k.COLOR_BUFFER_BIT}F&&(z|=k.DEPTH_BUFFER_BIT),G&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",D,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Me.dispose(),he.dispose(),Oe.dispose(),rt.dispose(),N.dispose(),Y.dispose(),Ee.dispose(),we.dispose(),ee.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",qe),Ne.removeEventListener("sessionend",pn),gt.stop()};function D(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ve.autoReset,F=Le.enabled,G=Le.autoUpdate,z=Le.needsUpdate,H=Le.type;tt(),Ve.autoReset=A,Le.enabled=F,Le.autoUpdate=G,Le.needsUpdate=z,Le.type=H}function $(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const F=A.target;F.removeEventListener("dispose",ae),ce(F)}function ce(A){Ce(A),Oe.remove(A)}function Ce(A){const F=Oe.get(A).programs;F!==void 0&&(F.forEach(function(G){ee.releaseProgram(G)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,z,H,pe){F===null&&(F=Fe);const xe=H.isMesh&&H.matrixWorld.determinant()<0,ye=Jx(A,F,G,z,H);be.setMaterial(z,xe);let Re=G.index,De=1;if(z.wireframe===!0){if(Re=X.getWireframeAttribute(G),Re===void 0)return;De=2}const ke=G.drawRange,He=G.attributes.position;let vt=ke.start*De,Ut=(ke.start+ke.count)*De;pe!==null&&(vt=Math.max(vt,pe.start*De),Ut=Math.min(Ut,(pe.start+pe.count)*De)),Re!==null?(vt=Math.max(vt,0),Ut=Math.min(Ut,Re.count)):He!=null&&(vt=Math.max(vt,0),Ut=Math.min(Ut,He.count));const sn=Ut-vt;if(sn<0||sn===1/0)return;Ee.setup(H,z,ye,G,Re);let Yn,Ke=Ge;if(Re!==null&&(Yn=w.get(Re),Ke=Te,Ke.setIndex(Yn)),H.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*Ae()),Ke.setMode(k.LINES)):Ke.setMode(k.TRIANGLES);else if(H.isLine){let Ie=z.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*Ae()),H.isLineSegments?Ke.setMode(k.LINES):H.isLineLoop?Ke.setMode(k.LINE_LOOP):Ke.setMode(k.LINE_STRIP)}else H.isPoints?Ke.setMode(k.POINTS):H.isSprite&&Ke.setMode(k.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?Ke.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):Ke.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ke.renderInstances(vt,sn,H.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Is=Math.min(G.instanceCount,Ie);Ke.renderInstances(vt,sn,Is)}else Ke.render(vt,sn)};function Ze(A,F,G){A.transparent===!0&&A.side===ri&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Go(A,F,G),A.side=Vi,A.needsUpdate=!0,Go(A,F,G),A.side=ri):Go(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),g=he.get(G),g.init(F),v.push(g),G.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),A!==G&&A.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights(x._useLegacyLights);const z=new Set;return A.traverse(function(H){const pe=H.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const ye=pe[xe];Ze(ye,G,H),z.add(ye)}else Ze(pe,G,H),z.add(pe)}),v.pop(),g=null,z},this.compileAsync=function(A,F,G=null){const z=this.compile(A,F,G);return new Promise(H=>{function pe(){if(z.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){H(A);return}setTimeout(pe,10)}_e.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Qe=null;function At(A){Qe&&Qe(A)}function qe(){gt.stop()}function pn(){gt.start()}const gt=new Hx;gt.setAnimationLoop(At),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(A){Qe=A,Ne.setAnimationLoop(A),A===null?gt.stop():gt.start()},Ne.addEventListener("sessionstart",qe),Ne.addEventListener("sessionend",pn),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(F),F=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,T),g=he.get(A,v.length),g.init(F),v.push(g),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ve.setFromProjectionMatrix(ue),te=this.localClippingEnabled,j=fe.init(this.clippingPlanes,te),y=Me.get(A,u.length),y.init(),u.push(y),Ps(A,F,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(C,V);const G=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1;G&&le.addToRenderList(y,A),this.info.render.frame++,j===!0&&fe.beginShadows();const z=g.state.shadowsArray;Le.render(z,A,F),j===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,pe=y.transmissive;if(g.setupLights(x._useLegacyLights),F.isArrayCamera){const xe=F.cameras;if(pe.length>0)for(let ye=0,Re=xe.length;ye<Re;ye++){const De=xe[ye];Ds(H,pe,A,De)}G&&le.render(A);for(let ye=0,Re=xe.length;ye<Re;ye++){const De=xe[ye];Ls(y,A,De,De.viewport)}}else pe.length>0&&Ds(H,pe,A,F),G&&le.render(A),Ls(y,A,F);T!==null&&(Pe.updateMultisampleRenderTarget(T),Pe.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,F),Ee.resetDefaultState(),P=-1,E=null,v.pop(),v.length>0?(g=v[v.length-1],j===!0&&fe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Ps(A,F,G,z){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){z&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const xe=Y.update(A),ye=A.material;ye.visible&&y.push(A,xe,ye,G,se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const xe=Y.update(A),ye=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),se.copy(xe.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(ye)){const Re=xe.groups;for(let De=0,ke=Re.length;De<ke;De++){const He=Re[De],vt=ye[He.materialIndex];vt&&vt.visible&&y.push(A,xe,vt,G,se.z,He)}}else ye.visible&&y.push(A,xe,ye,G,se.z,null)}}const pe=A.children;for(let xe=0,ye=pe.length;xe<ye;xe++)Ps(pe[xe],F,G,z)}function Ls(A,F,G,z){const H=A.opaque,pe=A.transmissive,xe=A.transparent;g.setupLightsView(G),j===!0&&fe.setGlobalState(x.clippingPlanes,G),z&&be.viewport(S.copy(z)),H.length>0&&jo(H,F,G),pe.length>0&&jo(pe,F,G),xe.length>0&&jo(xe,F,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ds(A,F,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[z.id]===void 0&&(g.state.transmissionRenderTarget[z.id]=new Sr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Hl:ji,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const pe=g.state.transmissionRenderTarget[z.id],xe=z.viewport||S;pe.setSize(xe.z,xe.w);const ye=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(L),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Bi;const De=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),g.setupLightsView(z),j===!0&&fe.setGlobalState(x.clippingPlanes,z),jo(A,G,z),Pe.updateMultisampleRenderTarget(pe),Pe.updateRenderTargetMipmap(pe),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let He=0,vt=F.length;He<vt;He++){const Ut=F[He],sn=Ut.object,Yn=Ut.geometry,Ke=Ut.material,Ie=Ut.group;if(Ke.side===ri&&sn.layers.test(z.layers)){const Is=Ke.side;Ke.side=rn,Ke.needsUpdate=!0,lf(sn,G,z,Yn,Ke,Ie),Ke.side=Is,Ke.needsUpdate=!0,ke=!0}}ke===!0&&(Pe.updateMultisampleRenderTarget(pe),Pe.updateRenderTargetMipmap(pe))}x.setRenderTarget(ye),x.setClearColor(L,W),De!==void 0&&(z.viewport=De),x.toneMapping=Re}function jo(A,F,G){const z=F.isScene===!0?F.overrideMaterial:null;for(let H=0,pe=A.length;H<pe;H++){const xe=A[H],ye=xe.object,Re=xe.geometry,De=z===null?xe.material:z,ke=xe.group;ye.layers.test(G.layers)&&lf(ye,F,G,Re,De,ke)}}function lf(A,F,G,z,H,pe){A.onBeforeRender(x,F,G,z,H,pe),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,F,G,z,A,pe),H.transparent===!0&&H.side===ri&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,x.renderBufferDirect(G,F,z,H,A,pe),H.side=Vi,H.needsUpdate=!0,x.renderBufferDirect(G,F,z,H,A,pe),H.side=ri):x.renderBufferDirect(G,F,z,H,A,pe),A.onAfterRender(x,F,G,z,H,pe)}function Go(A,F,G){F.isScene!==!0&&(F=Fe);const z=Oe.get(A),H=g.state.lights,pe=g.state.shadowsArray,xe=H.state.version,ye=ee.getParameters(A,H.state,pe,F,G),Re=ee.getProgramCacheKey(ye);let De=z.programs;z.environment=A.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(A.isMeshStandardMaterial?N:rt).get(A.envMap||z.environment),z.envMapRotation=z.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",ae),De=new Map,z.programs=De);let ke=De.get(Re);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===xe)return uf(A,ye),ke}else ye.uniforms=ee.getUniforms(A),A.onBuild(G,ye,x),A.onBeforeCompile(ye,x),ke=ee.acquireProgram(ye,Re),De.set(Re,ke),z.uniforms=ye.uniforms;const He=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=fe.uniform),uf(A,ye),z.needsLights=t0(A),z.lightsStateVersion=xe,z.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),z.currentProgram=ke,z.uniformsList=null,ke}function cf(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Wa.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function uf(A,F){const G=Oe.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Jx(A,F,G,z,H){F.isScene!==!0&&(F=Fe),Pe.resetTextureUnits();const pe=F.fog,xe=z.isMeshStandardMaterial?F.environment:null,ye=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$i,Re=(z.isMeshStandardMaterial?N:rt).get(z.envMap||xe),De=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),He=!!G.morphAttributes.position,vt=!!G.morphAttributes.normal,Ut=!!G.morphAttributes.color;let sn=Bi;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(sn=x.toneMapping);const Yn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ke=Yn!==void 0?Yn.length:0,Ie=Oe.get(z),Is=g.state.lights;if(j===!0&&(te===!0||A!==E)){const mn=A===E&&z.id===P;fe.setState(z,A,mn)}let lt=!1;z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Is.state.version||Ie.outputColorSpace!==ye||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==Re||z.fog===!0&&Ie.fog!==pe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==fe.numPlanes||Ie.numIntersection!==fe.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==ke||Ie.morphTargets!==He||Ie.morphNormals!==vt||Ie.morphColors!==Ut||Ie.toneMapping!==sn||Ie.morphTargetsCount!==Ke)&&(lt=!0):(lt=!0,Ie.__version=z.version);let Yi=Ie.currentProgram;lt===!0&&(Yi=Go(z,F,H));let df=!1,Us=!1,Wl=!1;const Ft=Yi.getUniforms(),pi=Ie.uniforms;if(be.useProgram(Yi.program)&&(df=!0,Us=!0,Wl=!0),z.id!==P&&(P=z.id,Us=!0),df||E!==A){Ft.setValue(k,"projectionMatrix",A.projectionMatrix),Ft.setValue(k,"viewMatrix",A.matrixWorldInverse);const mn=Ft.map.cameraPosition;mn!==void 0&&mn.setValue(k,se.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Us=!0,Wl=!0)}if(H.isSkinnedMesh){Ft.setOptional(k,H,"bindMatrix"),Ft.setOptional(k,H,"bindMatrixInverse");const mn=H.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ft.setValue(k,"boneTexture",mn.boneTexture,Pe))}H.isBatchedMesh&&(Ft.setOptional(k,H,"batchingTexture"),Ft.setValue(k,"batchingTexture",H._matricesTexture,Pe));const Xl=G.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0)&&Se.update(H,G,Yi),(Us||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,Ft.setValue(k,"receiveShadow",H.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pi.envMap.value=Re,pi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&F.environment!==null&&(pi.envMapIntensity.value=F.environmentIntensity),Us&&(Ft.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&e0(pi,Wl),pe&&z.fog===!0&&ne.refreshFogUniforms(pi,pe),ne.refreshMaterialUniforms(pi,z,ie,Z,g.state.transmissionRenderTarget[A.id]),Wa.upload(k,cf(Ie),pi,Pe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Wa.upload(k,cf(Ie),pi,Pe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ft.setValue(k,"center",H.center),Ft.setValue(k,"modelViewMatrix",H.modelViewMatrix),Ft.setValue(k,"normalMatrix",H.normalMatrix),Ft.setValue(k,"modelMatrix",H.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const mn=z.uniformsGroups;for(let ql=0,n0=mn.length;ql<n0;ql++){const ff=mn[ql];we.update(ff,Yi),we.bind(ff,Yi)}}return Yi}function e0(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function t0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,G){Oe.get(A.texture).__webglTexture=F,Oe.get(A.depthTexture).__webglTexture=G;const z=Oe.get(A);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const G=Oe.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){T=A,R=F,b=G;let z=!0,H=null,pe=!1,xe=!1;if(A){const Re=Oe.get(A);Re.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(k.FRAMEBUFFER,null),z=!1):Re.__webglFramebuffer===void 0?Pe.setupRenderTarget(A):Re.__hasExternalTextures&&Pe.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(xe=!0);const ke=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?H=ke[F][G]:H=ke[F],pe=!0):A.samples>0&&Pe.useMultisampledRTT(A)===!1?H=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[G]:H=ke,S.copy(A.viewport),I.copy(A.scissor),O=A.scissorTest}else S.copy(U).multiplyScalar(ie).floor(),I.copy(Q).multiplyScalar(ie).floor(),O=ge;if(be.bindFramebuffer(k.FRAMEBUFFER,H)&&z&&be.drawBuffers(A,H),be.viewport(S),be.scissor(I),be.setScissorTest(O),pe){const Re=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,G)}else if(xe){const Re=Oe.get(A.texture),De=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,G||0,De)}P=-1},this.readRenderTargetPixels=function(A,F,G,z,H,pe,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){be.bindFramebuffer(k.FRAMEBUFFER,ye);try{const Re=A.texture,De=Re.format,ke=Re.type;if(!Xe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-z&&G>=0&&G<=A.height-H&&k.readPixels(F,G,z,H,J.convert(De),J.convert(ke),pe)}finally{const Re=T!==null?Oe.get(T).__webglFramebuffer:null;be.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,F,G=0){const z=Math.pow(2,-G),H=Math.floor(F.image.width*z),pe=Math.floor(F.image.height*z);Pe.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,A.x,A.y,H,pe),be.unbindTexture()},this.copyTextureToTexture=function(A,F,G,z=0){const H=F.image.width,pe=F.image.height,xe=J.convert(G.format),ye=J.convert(G.type);Pe.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,A.x,A.y,H,pe,xe,ye,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,xe,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,z,A.x,A.y,xe,ye,F.image),z===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G,z,H=0){const pe=A.max.x-A.min.x,xe=A.max.y-A.min.y,ye=A.max.z-A.min.z,Re=J.convert(z.format),De=J.convert(z.type);let ke;if(z.isData3DTexture)Pe.setTexture3D(z,0),ke=k.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Pe.setTexture2DArray(z,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const He=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ut=k.getParameter(k.UNPACK_SKIP_PIXELS),sn=k.getParameter(k.UNPACK_SKIP_ROWS),Yn=k.getParameter(k.UNPACK_SKIP_IMAGES),Ke=G.isCompressedTexture?G.mipmaps[H]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(ke,H,F.x,F.y,F.z,pe,xe,ye,Re,De,Ke.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,H,F.x,F.y,F.z,pe,xe,ye,Re,Ke.data):k.texSubImage3D(ke,H,F.x,F.y,F.z,pe,xe,ye,Re,De,Ke),k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),k.pixelStorei(k.UNPACK_SKIP_ROWS,sn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yn),H===0&&z.generateMipmaps&&k.generateMipmap(ke),be.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Pe.setTextureCube(A,0):A.isData3DTexture?Pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Pe.setTexture2DArray(A,0):Pe.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===tf?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Vl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class VA extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Yx extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sl=new B,Ml=new B,Gp=new mt,$s=new Lx,Pa=new jl,Qc=new B,Wp=new B;class jA extends Lt{constructor(e=new kn,n=new Yx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Sl.fromBufferAttribute(n,r-1),Ml.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Sl.distanceTo(Ml);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;Gp.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Gp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=m,g=_-1;y<g;y+=c){const u=f.getX(y),v=f.getX(y+1),x=La(this,e,$s,l,u,v);x&&n.push(x)}if(this.isLineLoop){const y=f.getX(_-1),g=f.getX(m),u=La(this,e,$s,l,y,g);u&&n.push(u)}}else{const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=m,g=_-1;y<g;y+=c){const u=La(this,e,$s,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=La(this,e,$s,l,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function La(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Sl.fromBufferAttribute(o,r),Ml.fromBufferAttribute(o,s),n.distanceSqToSegment(Sl,Ml,Qc,Wp)>i)return;Qc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Qc);if(!(l<e.near||l>e.far))return{distance:l,point:Wp.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Xp=new B,qp=new B;class GA extends jA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Xp.fromBufferAttribute(n,r),qp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xp.distanceTo(qp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lr extends kn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],m=[];let _=0;const y=[],g=i/2;let u=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(m,2));function v(){const M=new B,R=new B;let b=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const E=[],S=P/s,I=S*(n-e)+e;for(let O=0;O<=r;O++){const L=O/r,W=L*l+a,q=Math.sin(W),Z=Math.cos(W);R.x=I*q,R.y=-S*i+g,R.z=I*Z,p.push(R.x,R.y,R.z),M.set(q,T,Z).normalize(),h.push(M.x,M.y,M.z),m.push(L,1-S),E.push(_++)}y.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const S=y[E][P],I=y[E+1][P],O=y[E+1][P+1],L=y[E][P+1];f.push(S,I,L),f.push(I,O,L),b+=6}c.addGroup(u,b,0),u+=b}function x(M){const R=_,b=new $e,T=new B;let P=0;const E=M===!0?e:n,S=M===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,g*S,0),h.push(0,S,0),m.push(.5,.5),_++;const I=_;for(let O=0;O<=r;O++){const W=O/r*l+a,q=Math.cos(W),Z=Math.sin(W);T.x=E*Z,T.y=g*S,T.z=E*q,p.push(T.x,T.y,T.z),h.push(0,S,0),b.x=q*.5+.5,b.y=Z*.5*S+.5,m.push(b.x,b.y),_++}for(let O=0;O<r;O++){const L=R+O,W=I+O;M===!0?f.push(W,W+1,L):f.push(W+1,W,L),P+=3}c.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class of extends kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new B,h=new B,m=[],_=[],y=[],g=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const b=R/n;p.x=-e*Math.cos(r+b*s)*Math.sin(o+x*a),p.y=e*Math.cos(o+x*a),p.z=e*Math.sin(r+b*s)*Math.sin(o+x*a),_.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),g.push(b+M,1-x),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=f[u][v+1],M=f[u][v],R=f[u+1][v],b=f[u+1][v+1];(u!==0||o>0)&&m.push(x,M,b),(u!==i-1||l<Math.PI)&&m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(y,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class WA extends wr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class jr extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bx,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $p={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class XA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){const p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=c.length;p<h;p+=2){const m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return _}return null}}}const qA=new XA;class af{constructor(e){this.manager=e!==void 0?e:qA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}af.DEFAULT_MATERIAL_NAME="__DEFAULT";class $A extends af{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$p.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Lo("img");function l(){f(),$p.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(p){f(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class YA extends af{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new $A(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Kx extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Jc=new mt,Yp=new B,Kp=new B;class KA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yp),Kp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kp),n.updateMatrixWorld(),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZA extends KA{constructor(){super(new Vx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eu extends Kx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ZA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QA extends Kx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class JA extends GA{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,m=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const f=new kn;f.setAttribute("position",new Dt(l,3)),f.setAttribute("color",new Dt(c,3));const p=new Yx({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);const Zx=({product:t=null,geometryType:e="lounge_chair",selectedMaterial:n="tan",isWireframe:i=!1,isAutoRotating:r=!1,rotationSpeed:s=.8,zoomFactor:o=4.5,elevationOffset:a=0,presetAngle:l="front"})=>{const c=oe.useRef(null),f=oe.useRef(null),p=oe.useRef(null),h=oe.useRef(null),m=oe.useRef(null),_=oe.useRef([]),y={tan:16777215,forest:12771276,ebony:10066329};return oe.useEffect(()=>{var ne,Me,he,fe,Le,le,Se,Ge,Te;const g=c.current;if(!g)return;const u=g.clientWidth,v=g.clientHeight,x=new VA;x.background=new We(16513525),f.current=x;const M=new yn(42,u/v,.1,100);M.position.set(0,1.1+a,o),M.lookAt(0,0,0),h.current=M;const R=new HA({antialias:!0,alpha:!0,powerPreference:"high-performance"});R.setSize(u,v),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.shadowMap.enabled=!0,R.shadowMap.type=gx,R.toneMapping=vx,R.toneMappingExposure=1.1,m.current=R,g.innerHTML="",g.appendChild(R.domElement);const b=new QA(16775408,1.5);x.add(b);const T=new eu(16774634,2.2);T.position.set(4.5,6,4.5),T.castShadow=!0,T.shadow.mapSize.width=2048,T.shadow.mapSize.height=2048,T.shadow.bias=-1e-4,x.add(T);const P=new eu(14477042,1.1);P.position.set(-4.5,3.5,-3.5),x.add(P);const E=new eu(16772829,.8);E.position.set(0,5,-5),x.add(E);const S=new Vo(12,12),I=new WA({opacity:.18}),O=new ct(S,I);O.rotation.x=-Math.PI/2,O.position.y=-.95,O.receiveShadow=!0,x.add(O);const L=new JA(8,16,15064777,15789017);L.position.y=-.95,x.add(L);const W=((ne=t==null?void 0:t.multiAngleImages)==null?void 0:ne.front)||((Me=t==null?void 0:t.images)==null?void 0:Me[0])||"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",q=((he=t==null?void 0:t.multiAngleImages)==null?void 0:he.back)||((fe=t==null?void 0:t.images)==null?void 0:fe[1])||"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",Z=((Le=t==null?void 0:t.multiAngleImages)==null?void 0:Le.side)||((le=t==null?void 0:t.images)==null?void 0:le[2])||"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",ie=((Se=t==null?void 0:t.multiAngleImages)==null?void 0:Se.top)||((Ge=t==null?void 0:t.images)==null?void 0:Ge[0])||"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",C=new YA,V=C.load(W,J=>{J.colorSpace=Zt}),U=C.load(q,J=>{J.colorSpace=Zt}),Q=C.load(Z,J=>{J.colorSpace=Zt}),ge=C.load(ie,J=>{J.colorSpace=Zt}),ve=new jr({color:3875346,roughness:.28,metalness:.05,wireframe:i}),j=new jr({color:13147460,roughness:.2,metalness:.85,wireframe:i}),te=new jr({map:V,roughness:.35,metalness:.05,wireframe:i}),ue=new jr({map:U,roughness:.35,metalness:.05,wireframe:i}),se=new jr({map:Q,roughness:.35,metalness:.05,wireframe:i}),Fe=new jr({map:ge,roughness:.35,metalness:.05,wireframe:i});_.current=[te,ue,se,Fe,ve,j];const Ae=new rs;p.current=Ae;const k=((t==null?void 0:t.category)||"").toLowerCase(),et=((Te=t==null?void 0:t.model3D)==null?void 0:Te.geometryType)||(k.includes("sofa")?"sofa":k.includes("table")?"table":"lounge_chair");if(et==="lounge_chair"){const J=new xn(1.6,.32,1.4),Ee=[se,se,Fe,ve,te,ue],we=new ct(J,Ee);we.position.set(0,-.05,.05),we.castShadow=!0,we.receiveShadow=!0,Ae.add(we);const tt=new xn(1.6,1.35,.25),Ne=[se,se,ve,ve,te,ue],D=new ct(tt,Ne);D.position.set(0,.62,-.52),D.rotation.x=ca.degToRad(-12),D.castShadow=!0,D.receiveShadow=!0,Ae.add(D),[[-.48,.88,-.38],[0,.88,-.38],[.48,.88,-.38],[-.48,.52,-.46],[0,.52,-.46],[.48,.52,-.46],[-.48,.2,-.54],[.48,.2,-.54]].forEach(([ae,ce,Ce])=>{const Ze=new of(.038,16,16),Qe=new ct(Ze,j);Qe.position.set(ae,ce,Ce),Ae.add(Qe)});const $=ae=>{const ce=new rs,Ce=ae?.84:-.84,Ze=new xn(.12,.07,1.45),Qe=new ct(Ze,ve);Qe.position.set(Ce,.28,0),Qe.castShadow=!0,ce.add(Qe);const At=new lr(.045,.03,1.05,16),qe=new ct(At,ve);qe.position.set(Ce,-.42,.58),qe.rotation.z=ca.degToRad(ae?-8:8),qe.castShadow=!0,ce.add(qe);const pn=new lr(.045,.028,1.15,16),gt=new ct(pn,ve);gt.position.set(Ce,-.42,-.58),gt.rotation.x=ca.degToRad(-16),gt.rotation.z=ca.degToRad(ae?-8:8),gt.castShadow=!0,ce.add(gt);const Ps=new lr(.032,.028,.08,16),Ls=new ct(Ps,j);Ls.position.set(Ce,-.9,.62),ce.add(Ls);const Ds=new ct(Ps,j);return Ds.position.set(Ce,-.9,-.72),ce.add(Ds),ce};Ae.add($(!1)),Ae.add($(!0))}else if(et==="sofa"){const J=new xn(2.5,.35,1.3),Ee=[se,se,Fe,ve,te,ue],we=new ct(J,Ee);we.position.set(0,-.05,.05),we.castShadow=!0,Ae.add(we);const tt=new xn(2.5,1.1,.28),Ne=[se,se,ve,ve,te,ue],D=new ct(tt,Ne);D.position.set(0,.52,-.5),D.castShadow=!0,Ae.add(D);const K=$=>{const ae=new xn(.28,.85,1.45),ce=[se,se,Fe,ve,te,ue],Ce=new ct(ae,ce);return Ce.position.set($?1.35:-1.35,.32,0),Ce.castShadow=!0,Ce};Ae.add(K(!1)),Ae.add(K(!0)),[-1.1,1.1].forEach($=>{[-.5,.5].forEach(ae=>{const ce=new lr(.05,.03,.45,16),Ce=new ct(ce,ve);Ce.position.set($,-.42,ae),Ce.castShadow=!0,Ae.add(Ce)})})}else{const J=new xn(2.3,.16,1.25),Ee=[se,se,Fe,ve,te,ue],we=new ct(J,Ee);we.position.set(0,.25,0),we.castShadow=!0,Ae.add(we),[-.95,.95].forEach(tt=>{[-.48,.48].forEach(Ne=>{const D=new lr(.035,.02,.95,16),K=new ct(D,ve);K.position.set(tt,-.3,Ne),K.rotation.z=tt>0?-.12:.12,K.castShadow=!0,Ae.add(K)})})}Ae.position.y=.1,x.add(Ae);let _e=!1,Xe={x:0,y:0};const be=J=>{_e=!0,Xe={x:J.clientX,y:J.clientY}},Ve=J=>{if(!_e||!p.current)return;const Ee=J.clientX-Xe.x,we=J.clientY-Xe.y;p.current.rotation.y+=Ee*.01,p.current.rotation.x+=we*.005,p.current.rotation.x=Math.max(-.4,Math.min(.4,p.current.rotation.x)),Xe={x:J.clientX,y:J.clientY}},Oe=()=>{_e=!1},Pe=R.domElement;Pe.addEventListener("mousedown",be),window.addEventListener("mousemove",Ve),window.addEventListener("mouseup",Oe);const rt=J=>{J.touches.length===1&&(_e=!0,Xe={x:J.touches[0].clientX,y:J.touches[0].clientY})},N=J=>{if(!_e||!p.current||J.touches.length!==1)return;const Ee=J.touches[0].clientX-Xe.x,we=J.touches[0].clientY-Xe.y;p.current.rotation.y+=Ee*.01,p.current.rotation.x+=we*.005,p.current.rotation.x=Math.max(-.4,Math.min(.4,p.current.rotation.x)),Xe={x:J.touches[0].clientX,y:J.touches[0].clientY}},w=()=>{_e=!1};Pe.addEventListener("touchstart",rt),Pe.addEventListener("touchmove",N),Pe.addEventListener("touchend",w);let X;const Y=()=>{X=requestAnimationFrame(Y),r&&p.current&&!_e&&(p.current.rotation.y+=.006*s),R.render(x,M)};Y();const ee=()=>{if(!g||!h.current||!m.current)return;const J=g.clientWidth,Ee=g.clientHeight;h.current.aspect=J/Ee,h.current.updateProjectionMatrix(),m.current.setSize(J,Ee)};return window.addEventListener("resize",ee),()=>{cancelAnimationFrame(X),Pe.removeEventListener("mousedown",be),window.removeEventListener("mousemove",Ve),window.removeEventListener("mouseup",Oe),Pe.removeEventListener("touchstart",rt),Pe.removeEventListener("touchmove",N),Pe.removeEventListener("touchend",w),window.removeEventListener("resize",ee),R.dispose()}},[t]),oe.useEffect(()=>{p.current&&(l==="front"?p.current.rotation.set(0,0,0):l==="back"?p.current.rotation.set(0,Math.PI,0):l==="side"?p.current.rotation.set(0,Math.PI/2,0):l==="top"&&p.current.rotation.set(Math.PI/4,0,0))},[l]),oe.useEffect(()=>{h.current&&(h.current.position.z=o,h.current.position.y=1.1+a,h.current.lookAt(0,0,0))},[o,a]),oe.useEffect(()=>{const g=y[n]||y.tan;_.current.forEach(u=>{u&&(u.color&&n!=="tan"&&u.color.setHex(g),u.wireframe=i,u.needsUpdate=!0)})},[n,i]),d.jsx("div",{className:"w-full h-full relative cursor-grab active:cursor-grabbing select-none",children:d.jsx("div",{ref:c,className:"w-full h-full"})})},eT={activeProductId:null,activeProduct:null,isInspectorOpen:!1,isAutoRotating:!0,rotationSpeed:.5,cameraDistance:4.5,elevationOffset:0,selectedMaterial:"tan",isWireframe:!1,polygonCount:"124.2k",lodLevel:"ULTRA",archivalSeries:"Archival Series № 422",viewMode:"3d_inspector"};class tT{constructor(e=eT){this.state={...e},this.listeners=new Set}getState(){return this.state}updateState(e){this.state={...this.state,...e},this.notify()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e(this.state))}}const Zp=new tT,nT=(t=null)=>{const[e,n]=oe.useState(t),[i,r]=oe.useState(!1),[s,o]=oe.useState(!1),[a,l]=oe.useState(.8),[c,f]=oe.useState(4.5),[p,h]=oe.useState(0),[m,_]=oe.useState("tan"),[y,g]=oe.useState(!1),[u,v]=oe.useState(142);oe.useEffect(()=>{var E;t&&(n(t),(E=t.model3D)!=null&&E.defaultTexture&&_(t.model3D.defaultTexture))},[t]);const x=oe.useCallback((E=null)=>{E&&n(E),r(!0),Zp.updateState({isInspectorOpen:!0})},[]),M=oe.useCallback(()=>{r(!1),Zp.updateState({isInspectorOpen:!1})},[]),R=oe.useCallback(()=>{o(E=>!E)},[]),b=oe.useCallback((E="cw")=>{v(S=>(S+(E==="cw"?15:-15)+360)%360)},[]),T=oe.useCallback(E=>{E==="wireframe"?g(S=>!S):(_(E),g(!1))},[]),P=oe.useCallback(()=>{f(4.5),h(0),o(!1),g(!1),v(142)},[]);return{product:e,isInspectorOpen:i,isAutoRotating:s,rotationSpeed:a,zoomFactor:c,elevationOffset:p,selectedMaterial:m,isWireframe:y,rotationAngle:u,openInspector:x,closeInspector:M,toggleAutoRotate:R,rotateStep:b,setZoomFactor:f,setElevationOffset:h,changeMaterial:T,resetView:P}},iT=({product:t,isOpen:e,onClose:n,onAddToCart:i,onLaunchAR:r})=>{const[s,o]=oe.useState("front"),{isAutoRotating:a,zoomFactor:l,elevationOffset:c,selectedMaterial:f,isWireframe:p,toggleAutoRotate:h,rotateStep:m,setZoomFactor:_,setElevationOffset:y,changeMaterial:g,resetView:u}=nT(t);if(!e||!t)return null;const v=t.model3D||{archivalSeries:"Archival Series № 422",polygonCount:"124.2k",lodLevel:"ULTRA",geometryType:"lounge_chair"};return d.jsxs("div",{className:"fixed inset-0 z-50 bg-[#FBF9F5] flex flex-col overflow-hidden animate-fadeIn",children:[d.jsxs("header",{className:"px-6 py-4 flex items-center justify-between border-b border-[#E5DEC9] bg-[#FBF9F5]/90 backdrop-blur-md z-10",children:[d.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-sm font-semibold text-gray-800 hover:text-[#A17A16] transition-colors group",children:[d.jsx(dx,{className:"w-4 h-4 transition-transform group-hover:-translate-x-1"}),d.jsx("span",{children:"Back to Product Details"})]}),d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsxs("span",{className:"text-xs font-mono bg-[#F9F4E9] border border-[#E9D3A4] text-[#A17A16] px-3 py-1 rounded-full font-bold flex items-center space-x-1",children:[d.jsx(Ro,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"4-Angle Volumetric 3D Model Active"})]}),d.jsx("button",{onClick:()=>{o("front"),u()},className:"p-2 text-gray-500 hover:text-[#A17A16] transition-colors rounded-full hover:bg-[#F9F4E9]",title:"Reset View",children:d.jsx($_,{className:"w-4 h-4"})})]})]}),d.jsxs("div",{className:"relative flex-1 w-full h-full bg-[#FBF9F5]",children:[d.jsxs("div",{className:"absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#E5DEC9] shadow-md flex items-center space-x-1 font-mono text-xs pointer-events-auto",children:[d.jsx("button",{onClick:()=>o("front"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="front"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"FRONT 0°"}),d.jsx("button",{onClick:()=>o("back"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="back"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"BACK 180°"}),d.jsx("button",{onClick:()=>o("side"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="side"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"SIDE 90°"}),d.jsx("button",{onClick:()=>o("top"),className:`px-3 py-1.5 rounded-xl font-bold transition-all ${s==="top"?"bg-[#A17A16] text-white shadow-sm":"text-gray-700 hover:bg-gray-100"}`,children:"TOP 70°"})]}),d.jsx(Zx,{product:t,geometryType:v.geometryType,selectedMaterial:f,isWireframe:p,isAutoRotating:a,zoomFactor:l,elevationOffset:c,presetAngle:s}),d.jsxs("div",{className:"absolute top-6 right-6 w-80 p-6 rounded-2xl glass-panel shadow-lg border border-[#E5DEC9]/80 pointer-events-auto",children:[d.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900 leading-tight",children:t.title}),d.jsx("p",{className:"text-xs font-serif text-gray-500 italic mt-1 border-b border-[#E5DEC9] pb-3",children:v.archivalSeries}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-4 text-xs font-mono",children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-400 font-bold block uppercase tracking-wider text-[10px]",children:"Polygons"}),d.jsx("span",{className:"text-sm font-bold text-[#A17A16]",children:v.polygonCount})]}),d.jsxs("div",{children:[d.jsx("span",{className:"text-gray-400 font-bold block uppercase tracking-wider text-[10px]",children:"LOD Level"}),d.jsx("span",{className:"text-sm font-bold text-[#A17A16]",children:v.lodLevel})]})]})]}),d.jsxs("div",{className:"absolute bottom-28 right-6 flex flex-col space-y-3 pointer-events-auto",children:[d.jsx("button",{onClick:()=>alert(`3D Model (${v.polygonCount} Polygons) exported as GLTF file.`),className:"w-12 h-12 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center shadow-md border border-[#E5DEC9] transition-all hover:scale-105",title:"Download 3D Model GLTF",children:d.jsx(B_,{className:"w-5 h-5"})}),d.jsx("button",{onClick:r,className:"w-12 h-12 bg-white hover:bg-[#F9F4E9] text-[#A17A16] rounded-2xl flex items-center justify-center shadow-md border border-[#E9D3A4] transition-all hover:scale-105",title:"View in WebXR AR",children:d.jsx(ty,{className:"w-5 h-5"})}),d.jsx("button",{onClick:()=>i(t),className:"w-12 h-12 gold-gradient-btn rounded-2xl flex items-center justify-center shadow-lg transition-all hover:scale-105",title:"Add to Cart & Proceed to Escrow",children:d.jsx(Qd,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl glass-panel shadow-xl border border-[#E5DEC9]/90 flex items-center space-x-6 pointer-events-auto",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("button",{onClick:()=>m("ccw"),className:"p-2 text-gray-700 hover:text-[#A17A16] hover:bg-gray-100 rounded-xl transition-colors",title:"Rotate Counter-Clockwise 15°",children:d.jsx(Y_,{className:"w-4 h-4"})}),d.jsx("button",{onClick:h,className:`p-2.5 rounded-xl transition-all shadow-sm ${a?"bg-[#A17A16] text-white font-bold":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,title:"Toggle 360° Auto-Rotate",children:d.jsx("span",{className:"font-mono text-xs font-bold px-0.5",children:"3D"})}),d.jsx("button",{onClick:()=>m("cw"),className:"p-2 text-gray-700 hover:text-[#A17A16] hover:bg-gray-100 rounded-xl transition-colors",title:"Rotate Clockwise 15°",children:d.jsx(K_,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"h-6 w-px bg-[#E5DEC9]"}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsxs("div",{className:"flex items-center space-x-2",title:"Zoom Control",children:[d.jsx(ay,{className:"w-4 h-4 text-gray-500"}),d.jsx("input",{type:"range",min:"2.5",max:"6.5",step:"0.1",value:l,onChange:x=>_(parseFloat(x.target.value)),className:"w-24 h-1.5 bg-[#E5DEC9] rounded-lg appearance-none cursor-pointer accent-[#A17A16]"})]}),d.jsxs("div",{className:"flex items-center space-x-2",title:"Elevation Control",children:[d.jsx(j_,{className:"w-4 h-4 text-gray-500"}),d.jsx("input",{type:"range",min:"-0.8",max:"0.8",step:"0.05",value:c,onChange:x=>y(parseFloat(x.target.value)),className:"w-24 h-1.5 bg-[#E5DEC9] rounded-lg appearance-none cursor-pointer accent-[#A17A16]"})]})]}),d.jsx("div",{className:"h-6 w-px bg-[#E5DEC9]"}),d.jsxs("div",{className:"flex items-center space-x-3 text-[10px] font-mono font-bold tracking-wider",children:[d.jsxs("button",{onClick:()=>g("tan"),className:"flex flex-col items-center group",children:[d.jsx("span",{className:`w-7 h-7 rounded-full bg-[#8C5A2B] border-2 transition-transform ${f==="tan"&&!p?"border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30":"border-white group-hover:scale-105"}`}),d.jsx("span",{className:`mt-1 ${f==="tan"&&!p?"text-[#A17A16]":"text-gray-500"}`,children:"TAN"})]}),d.jsxs("button",{onClick:()=>g("forest"),className:"flex flex-col items-center group",children:[d.jsx("span",{className:`w-7 h-7 rounded-full bg-[#435B4D] border-2 transition-transform ${f==="forest"&&!p?"border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30":"border-white group-hover:scale-105"}`}),d.jsx("span",{className:`mt-1 ${f==="forest"&&!p?"text-[#A17A16]":"text-gray-500"}`,children:"FOREST"})]}),d.jsxs("button",{onClick:()=>g("ebony"),className:"flex flex-col items-center group",children:[d.jsx("span",{className:`w-7 h-7 rounded-full bg-[#2B2B2D] border-2 transition-transform ${f==="ebony"&&!p?"border-[#A17A16] scale-110 shadow-md ring-2 ring-[#A17A16]/30":"border-white group-hover:scale-105"}`}),d.jsx("span",{className:`mt-1 ${f==="ebony"&&!p?"text-[#A17A16]":"text-gray-500"}`,children:"EBONY"})]}),d.jsxs("button",{onClick:()=>g("wireframe"),className:"flex flex-col items-center group pl-2",children:[d.jsx("span",{className:`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${p?"bg-[#A17A16] text-white border-[#A17A16]":"bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`,children:d.jsx(Yu,{className:"w-3.5 h-3.5"})}),d.jsx("span",{className:`mt-1 ${p?"text-[#A17A16]":"text-gray-500"}`,children:"WIREFRAME"})]})]})]})]})]})},rT=({product:t,isOpen:e,onClose:n})=>{const[i,r]=oe.useState(142),[s,o]=oe.useState(0),[a,l]=oe.useState(!1);return e?d.jsxs("div",{className:"fixed inset-0 z-50 bg-[#1E232A] flex flex-col overflow-hidden animate-fadeIn text-white",children:[d.jsxs("header",{className:"px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md z-10",children:[d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx(Yu,{className:"w-5 h-5 text-[#A17A16]"}),d.jsx("span",{className:"font-serif text-lg font-bold tracking-tight text-white",children:"Virtual 3D Room Planner"})]}),d.jsx("button",{onClick:n,className:"p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10",children:d.jsx(ko,{className:"w-6 h-6"})})]}),d.jsxs("div",{className:"relative flex-1 w-full h-full bg-[#1E232A]",children:[d.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-60",style:{backgroundImage:"url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80')"}}),d.jsx("div",{className:"absolute inset-0 pointer-events-auto",children:d.jsx(Zx,{product:t,geometryType:"lounge_chair",selectedMaterial:"tan",isWireframe:!1,isAutoRotating:!1,zoomFactor:4.2,elevationOffset:s})}),d.jsxs("div",{className:"absolute top-12 left-10 glass-panel bg-black/50 text-white border-white/20 p-4 rounded-2xl w-64 pointer-events-auto",children:[d.jsxs("div",{className:"flex justify-between items-center text-xs font-mono font-bold text-[#A17A16] uppercase mb-2",children:[d.jsx("span",{children:"HEIGHT ADJUST"}),d.jsxs("span",{children:[s.toFixed(1),"m"]})]}),d.jsx("input",{type:"range",min:"-0.5",max:"1.5",step:"0.1",value:s,onChange:c=>o(parseFloat(c.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#A17A16]"})]}),d.jsxs("div",{className:"absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-auto",children:[d.jsx("div",{className:"text-xs font-mono font-bold text-[#A17A16] uppercase tracking-widest",children:"ROTATION"}),d.jsxs("div",{className:"font-serif text-3xl font-bold text-white mt-1",children:[i,"°"]}),d.jsxs("div",{className:"flex items-center justify-center space-x-6 text-[10px] font-mono text-gray-400 mt-2",children:[d.jsx("span",{children:"90°"}),d.jsx("div",{className:"w-1 h-3 bg-[#A17A16]"}),d.jsx("span",{children:"180°"}),d.jsx("span",{children:"270°"})]})]}),d.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto",children:d.jsxs("button",{onClick:()=>l(!a),className:`px-8 py-4 rounded-2xl font-mono text-sm font-bold tracking-wider flex items-center space-x-3 shadow-2xl transition-all hover:scale-105 border ${a?"bg-emerald-600 border-emerald-400 text-white":"gold-gradient-btn border-[#E9D3A4]/40"}`,children:[a?d.jsx(fx,{className:"w-5 h-5"}):d.jsx(Yu,{className:"w-5 h-5"}),d.jsx("span",{children:a?"OBJECT LOCKED IN ROOM":"PLACE OBJECT"})]})}),d.jsxs("div",{className:"absolute bottom-0 inset-x-0 h-16 bg-[#FBF9F5] text-gray-800 border-t border-[#E5DEC9] px-8 flex items-center justify-between text-xs font-mono pointer-events-auto",children:[d.jsxs("div",{className:"flex items-center space-x-8",children:[d.jsx("span",{className:"font-bold text-[#A17A16] border-r border-gray-300 pr-8",children:"PLANNER SUITE V4.2"}),d.jsx("button",{className:"hover:text-[#A17A16] font-semibold",children:"FLOOR MAP"}),d.jsx("button",{className:"hover:text-[#A17A16] font-semibold",children:"INVENTORY"}),d.jsxs("button",{className:"hover:text-[#A17A16] font-semibold flex items-center space-x-1",children:[d.jsx(J_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"SHARE DESIGN"})]})]}),d.jsxs("div",{className:"flex items-center space-x-3 text-gray-500",children:[d.jsxs("div",{className:"flex -space-x-2",children:[d.jsx("div",{className:"w-7 h-7 rounded-full bg-[#1E232A] text-white flex items-center justify-center font-bold text-[10px] border-2 border-white",children:"MA"}),d.jsx("div",{className:"w-7 h-7 rounded-full bg-[#A17A16] text-white flex items-center justify-center font-bold text-[10px] border-2 border-white",children:"+2"})]}),d.jsx("span",{className:"text-[11px]",children:"Design Collaborators"})]})]})]})]}):null},Qx=({notification:t,onClose:e})=>{if(!t||!t.message)return null;const{type:n="info",title:i,message:r}=t,s={error:{icon:d.jsx(F_,{className:"w-8 h-8 text-rose-600"}),border:"border-rose-300",bg:"bg-rose-50",badgeBg:"bg-rose-100 text-rose-800",buttonBg:"bg-rose-600 hover:bg-rose-700 text-white",defaultTitle:"Authentication Warning"},success:{icon:d.jsx(k_,{className:"w-8 h-8 text-emerald-600"}),border:"border-emerald-300",bg:"bg-emerald-50",badgeBg:"bg-emerald-100 text-emerald-800",buttonBg:"gold-gradient-btn",defaultTitle:"Success"},info:{icon:d.jsx(H_,{className:"w-8 h-8 text-[#A17A16]"}),border:"border-[#E9D3A4]",bg:"bg-[#F9F4E9]",badgeBg:"bg-[#F3E6CD] text-[#A17A16]",buttonBg:"gold-gradient-btn",defaultTitle:"2FA Verification OTP Sent"}},o=s[n]||s.info;return d.jsx("div",{className:"fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",children:d.jsxs("div",{className:`bg-white rounded-3xl max-w-md w-full p-6 border ${o.border} shadow-2xl relative text-center space-y-4`,children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors",children:d.jsx(ko,{className:"w-5 h-5"})}),d.jsx("div",{className:"flex justify-center pt-2",children:d.jsx("div",{className:`p-3 rounded-2xl ${o.bg}`,children:o.icon})}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-serif text-xl font-bold text-gray-900",children:i||o.defaultTitle}),d.jsx("p",{className:"text-xs text-gray-600 leading-relaxed mt-2",children:r})]}),d.jsx("div",{className:"pt-2",children:d.jsx("button",{onClick:e,className:`w-full py-3 rounded-xl font-bold text-xs tracking-wider shadow-md ${o.buttonBg}`,children:"CONTINUE"})})]})})},sT=({isOpen:t,onClose:e,onLoginSuccess:n,initialRole:i="buyer"})=>{const[r,s]=oe.useState("login"),[o,a]=oe.useState("credentials"),[l,c]=oe.useState(""),[f,p]=oe.useState(""),[h,m]=oe.useState(""),[_,y]=oe.useState(i);_0.useEffect(()=>{i&&y(i)},[i,t]);const[g,u]=oe.useState(""),[v,x]=oe.useState(null),[M,R]=oe.useState(null),[b,T]=oe.useState(null);if(!t)return null;const P=(O,L,W)=>{T({type:O,title:L,message:W})},E=async O=>{O.preventDefault(),R(null);const L=r==="signup"?"/api/auth/register":"/api/auth/login",W=r==="signup"?{name:h,email:l,password:f,role:_}:{email:l,password:f,role:_};try{const Z=await(await fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)})).json();if(!Z.success){R(Z.message),P("error","Authentication Failed",Z.message);return}Z.requiresOTP&&(x(Z.previewUrl||null),a("otp_verification"),P("info","2FA Email Verification Sent",`A 6-Digit Verification OTP code has been dispatched to ${l}. Please check your email inbox.`))}catch{P("error","Network Error","Could not connect to authentication server.")}},S=async O=>{if(O.preventDefault(),!g||g.trim().length<6){P("error","Invalid OTP","Please enter the complete 6-digit OTP verification code.");return}try{const W=await(await fetch("/api/auth/verify-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,otpCode:g.trim(),role:_})})).json();if(!W.success){P("error","Verification Failed",W.message);return}n(W.user),e()}catch{P("error","Verification Error","Failed to verify OTP code.")}},I=async()=>{try{const L=await(await fetch("/api/auth/resend-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,role:_})})).json();if(!L.success){P("error","Resend Failed",L.message);return}P("info","2FA OTP Resent",`A new 6-digit verification code has been dispatched to ${l}. Please check your inbox.`)}catch{P("error","Network Error","Failed to request new OTP code.")}};return d.jsxs(d.Fragment,{children:[d.jsx(Qx,{notification:b,onClose:()=>T(null)}),d.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",children:d.jsxs("div",{className:"bg-[#FBF9F5] rounded-3xl max-w-md w-full p-8 border border-[#E5DEC9] shadow-2xl relative",children:[d.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors",children:d.jsx(ko,{className:"w-5 h-5"})}),o==="credentials"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1E232A] text-[#A17A16] font-serif font-bold text-xl flex items-center justify-center mx-auto mb-3 border-2 border-[#A17A16]",children:"3D"}),d.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:r==="signup"?"Create Account":"Sign In to Decorate3D"}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Database Verified • Nodemailer 2FA Email OTP"})]}),d.jsxs("div",{className:"flex bg-[#E5DEC9]/50 p-1 rounded-2xl mb-6 border border-[#E5DEC9]",children:[d.jsxs("button",{type:"button",onClick:()=>s("login"),className:`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${r==="login"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[d.jsx(hx,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"LOG IN"})]}),d.jsxs("button",{type:"button",onClick:()=>s("signup"),className:`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${r==="signup"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[d.jsx(oy,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"CREATE ACCOUNT"})]})]}),M&&d.jsxs("div",{className:"mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center justify-between animate-fadeIn",children:[d.jsx("span",{children:M}),r==="login"&&M.toLowerCase().includes("register")&&d.jsx("button",{type:"button",onClick:()=>{R(null),s("signup")},className:"font-bold underline text-rose-800 ml-2 whitespace-nowrap",children:"Register Now"})]}),d.jsxs("form",{onSubmit:E,className:"space-y-4",children:[r==="signup"&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Full Name"}),d.jsxs("div",{className:"relative",children:[d.jsx(Jd,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),d.jsx("input",{type:"text",required:!0,value:h,onChange:O=>m(O.target.value),placeholder:"Muhtasim Ahmed",className:"w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Email Address"}),d.jsxs("div",{className:"relative",children:[d.jsx(W_,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),d.jsx("input",{type:"email",required:!0,value:l,onChange:O=>c(O.target.value),placeholder:"user@example.com",className:"w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Password"}),d.jsxs("div",{className:"relative",children:[d.jsx(G_,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"}),d.jsx("input",{type:"password",required:!0,value:f,onChange:O=>p(O.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:r==="signup"?"Select Target Account Role":"Authenticate As Role"}),d.jsxs("select",{value:_,onChange:O=>y(O.target.value),className:"w-full px-3 py-2.5 bg-white border-2 border-[#A17A16]/50 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#A17A16]",children:[d.jsx("option",{value:"buyer",children:"Buyer (Browse & Inspect 3D Models)"}),d.jsx("option",{value:"seller",children:"Seller (List Furniture & 3D Scanner)"}),d.jsx("option",{value:"courier",children:"Logistics Courier Driver"}),d.jsx("option",{value:"admin",children:"System Administrator"})]})]}),d.jsx("button",{type:"submit",className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md mt-2 tracking-wider flex items-center justify-center space-x-2",children:d.jsx("span",{children:r==="signup"?"PROCEED TO EMAIL 2FA OTP":"VERIFY & SEND 2FA OTP"})})]}),d.jsxs("div",{className:"text-center mt-6 pt-4 border-t border-[#E5DEC9] text-xs text-gray-600",children:[r==="signup"?"Already have an account?":"Don't have an account yet?"," ",d.jsx("button",{type:"button",onClick:()=>s(r==="signup"?"login":"signup"),className:"text-[#A17A16] font-bold hover:underline",children:r==="signup"?"Sign In Here":"Create One Here"})]})]}),o==="otp_verification"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("button",{type:"button",onClick:()=>a("credentials"),className:"flex items-center space-x-2 text-xs font-semibold text-gray-600 hover:text-[#A17A16]",children:[d.jsx(dx,{className:"w-4 h-4"}),d.jsx("span",{children:"Back to credentials"})]}),d.jsxs("div",{className:"text-center space-y-2",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-[#F9F4E9] text-[#A17A16] flex items-center justify-center mx-auto border border-[#E9D3A4]",children:d.jsx(V_,{className:"w-6 h-6"})}),d.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:"Email 2FA Verification"}),d.jsxs("p",{className:"text-xs text-gray-500",children:["A 6-digit verification code was dispatched to your email inbox:",d.jsx("span",{className:"block font-bold text-gray-800 mt-0.5",children:l})]})]}),d.jsxs("div",{className:"p-4 bg-[#F9F4E9] border border-[#E9D3A4] rounded-2xl text-center space-y-2",children:[d.jsx("span",{className:"text-[11px] font-mono font-bold text-[#A17A16] uppercase block",children:"CHECK YOUR EMAIL INBOX FOR OTP"}),d.jsxs("p",{className:"text-xs text-gray-600",children:["Enter the 6-digit code sent to ",d.jsx("strong",{className:"text-gray-800",children:l})," below to verify your session."]})]}),d.jsxs("form",{onSubmit:S,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1 text-center",children:"Enter 6-Digit OTP Pin"}),d.jsx("input",{type:"text",maxLength:6,required:!0,value:g,onChange:O=>u(O.target.value.replace(/\D/g,"")),placeholder:"849201",className:"w-full px-4 py-3 bg-white border-2 border-[#A17A16] rounded-xl font-mono text-center text-2xl font-bold tracking-[0.3em] text-gray-900 focus:outline-none shadow-sm"})]}),d.jsxs("button",{type:"submit",className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md tracking-wider flex items-center justify-center space-x-2",children:[d.jsx(Bl,{className:"w-5 h-5"}),d.jsx("span",{children:"AUTHENTICATE & COMPLETE LOGIN"})]})]}),d.jsx("div",{className:"text-center pt-2",children:d.jsxs("button",{type:"button",onClick:I,className:"text-xs text-gray-500 hover:text-[#A17A16] flex items-center justify-center space-x-1 mx-auto",children:[d.jsx(q_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Resend Email OTP Code"})]})})]})]})})]})},oT=({isOpen:t,onClose:e,onAddProduct:n})=>{const[i,r]=oe.useState("details"),[s,o]=oe.useState("upload"),[a,l]=oe.useState(""),[c,f]=oe.useState(""),[p,h]=oe.useState("Chairs"),[m,_]=oe.useState("Top-Grain Leather & Solid Wood"),[y,g]=oe.useState("Mid-Century Modern"),[u,v]=oe.useState(""),[x,M]=oe.useState({front:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"}),[R,b]=oe.useState(!1),[T,P]=oe.useState("front"),E=oe.useRef(null),S=oe.useRef(null),[I,O]=oe.useState(!1),[L,W]=oe.useState(0);if(!t)return null;const q=async U=>{P(U),b(!0);try{const Q=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});E.current&&(E.current.srcObject=Q)}catch(Q){console.warn("Camera access error:",Q)}},Z=()=>{E.current&&E.current.srcObject&&(E.current.srcObject.getTracks().forEach(Q=>Q.stop()),E.current.srcObject=null),b(!1)},ie=()=>{if(!E.current||!S.current)return;const U=E.current,Q=S.current;Q.width=U.videoWidth||640,Q.height=U.videoHeight||480,Q.getContext("2d").drawImage(U,0,0,Q.width,Q.height);const ve=Q.toDataURL("image/jpeg");M(j=>({...j,[T]:ve})),Z()},C=(U,Q)=>{var ve;const ge=(ve=U.target.files)==null?void 0:ve[0];if(ge){const j=new FileReader;j.onload=te=>{M(ue=>({...ue,[Q]:te.target.result}))},j.readAsDataURL(ge)}},V=()=>{O(!0),W(20),setTimeout(()=>W(60),600),setTimeout(()=>W(100),1200),setTimeout(()=>{O(!1);const U={_id:"prod_"+Date.now(),title:a||"Custom Seller 3D Furniture",subtitle:`${p} • Seller Verified 3D`,price:parseFloat(c)||350,estimatedNewPrice:(parseFloat(c)||350)*2.2,category:p,conditionGrade:"EXCELLENT",isRareFind:!0,description:u||"Handcrafted furniture item uploaded with multi-angle 3D spatial inspection texture model.",material:m,era:y,dimensions:{width:"32 in",depth:"34 in",height:"32 in"},images:[x.front,x.back,x.side,x.top],multiAngleImages:x,has3DModel:!0,model3D:{archivalSeries:"Seller Custom Series № "+Math.floor(Math.random()*900+100),polygonCount:"142.8k",lodLevel:"ULTRA",defaultTexture:"tan",geometryType:p.toLowerCase().includes("sofa")?"sofa":p.toLowerCase().includes("table")?"table":"lounge_chair"},seller:{name:"Verified Seller User",rating:5,verified:!0,location:"Dhaka, Bangladesh"}};n(U),e()},1500)};return d.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn",children:d.jsxs("div",{className:"bg-[#FBF9F5] rounded-3xl max-w-2xl w-full p-8 border border-[#E5DEC9] shadow-2xl relative max-h-[90vh] overflow-y-auto",children:[d.jsx("button",{onClick:()=>{Z(),e()},className:"absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors",children:d.jsx(ko,{className:"w-5 h-5"})}),d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("div",{className:"w-12 h-12 rounded-full bg-[#1E232A] text-[#A17A16] flex items-center justify-center mx-auto mb-2 border-2 border-[#A17A16]",children:d.jsx(Mn,{className:"w-6 h-6"})}),d.jsx("h2",{className:"font-serif text-2xl font-bold text-gray-900",children:"List Furniture Item with 3D Scanner"}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Capture or Upload 4 Angles (Front, Back, Side, Top) to Generate interactive 360° 3D Model"})]}),I&&d.jsxs("div",{className:"py-12 text-center space-y-4",children:[d.jsx("div",{className:"w-16 h-16 border-4 border-[#E5DEC9] border-t-[#A17A16] rounded-full animate-spin mx-auto"}),d.jsx("h3",{className:"font-serif text-xl font-bold text-gray-900",children:"Synthesizing Volumetric 3D Model..."}),d.jsx("div",{className:"max-w-xs mx-auto bg-gray-200 h-2 rounded-full overflow-hidden",children:d.jsx("div",{className:"bg-[#A17A16] h-full transition-all duration-300",style:{width:`${L}%`}})}),d.jsx("p",{className:"text-xs font-mono text-gray-500",children:"Mapping Multi-Angle Surface Textures to 3D Furniture Mesh"})]}),!I&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex bg-[#E5DEC9]/50 p-1 rounded-2xl mb-6 border border-[#E5DEC9]",children:[d.jsx("button",{type:"button",onClick:()=>r("details"),className:`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${i==="details"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:d.jsx("span",{children:"1. ITEM INFORMATION"})}),d.jsxs("button",{type:"button",onClick:()=>r("multi_angle_capture"),className:`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${i==="multi_angle_capture"?"bg-white text-[#A17A16] shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[d.jsx(Ro,{className:"w-3.5 h-3.5 text-[#A17A16]"}),d.jsx("span",{children:"2. 3D MULTI-ANGLE CAPTURE"})]})]}),i==="details"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Furniture Title"}),d.jsx("input",{type:"text",required:!0,value:a,onChange:U=>l(U.target.value),placeholder:"e.g. Vintage Italian Leather Armchair",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Category"}),d.jsxs("select",{value:p,onChange:U=>h(U.target.value),className:"w-full px-3 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]",children:[d.jsx("option",{value:"Chairs",children:"Chairs & Armchairs"}),d.jsx("option",{value:"Sofas",children:"Sofas & Couches"}),d.jsx("option",{value:"Tables",children:"Coffee & Dining Tables"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Price ($ USD)"}),d.jsx("input",{type:"number",required:!0,value:c,onChange:U=>f(U.target.value),placeholder:"450",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Material Composition"}),d.jsx("input",{type:"text",value:m,onChange:U=>_(U.target.value),placeholder:"e.g. Top-Grain Leather & Walnut Wood",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Design Era"}),d.jsx("input",{type:"text",value:y,onChange:U=>g(U.target.value),placeholder:"e.g. Mid-Century Modern (1960s)",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-bold text-gray-700 uppercase mb-1",children:"Craftsmanship & Condition Description"}),d.jsx("textarea",{rows:3,value:u,onChange:U=>v(U.target.value),placeholder:"Describe condition details, wood grain patina, cushion density, and history...",className:"w-full px-4 py-2.5 bg-white border border-[#E5DEC9] rounded-xl text-sm focus:outline-none focus:border-[#A17A16]"})]}),d.jsx("button",{type:"button",onClick:()=>r("multi_angle_capture"),className:"w-full gold-gradient-btn py-3.5 rounded-xl font-bold text-sm shadow-md tracking-wider flex items-center justify-center space-x-2",children:d.jsx("span",{children:"NEXT: CAPTURE 4-ANGLE 3D PHOTOS"})})]}),i==="multi_angle_capture"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex justify-center space-x-4",children:[d.jsxs("button",{type:"button",onClick:()=>{Z(),o("upload")},className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${s==="upload"?"bg-[#1E232A] text-white border-[#1E232A]":"bg-white text-gray-700 border-gray-300"}`,children:[d.jsx(sy,{className:"w-4 h-4"}),d.jsx("span",{children:"Upload 4 Angle Photos"})]}),d.jsxs("button",{type:"button",onClick:()=>o("camera"),className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 border transition-all ${s==="camera"?"bg-[#A17A16] text-white border-[#A17A16]":"bg-white text-gray-700 border-gray-300"}`,children:[d.jsx(yc,{className:"w-4 h-4"}),d.jsx("span",{children:"Real-Time Device Camera Scanner"})]})]}),R&&d.jsxs("div",{className:"p-4 bg-black rounded-2xl text-center space-y-3 relative",children:[d.jsx("video",{ref:E,autoPlay:!0,playsInline:!0,className:"w-full h-56 object-cover rounded-xl border border-white/20"}),d.jsx("canvas",{ref:S,className:"hidden"}),d.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[d.jsxs("button",{type:"button",onClick:ie,className:"gold-gradient-btn px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg flex items-center space-x-2",children:[d.jsx(yc,{className:"w-4 h-4"}),d.jsxs("span",{children:["CAPTURE ",T.toUpperCase()," ANGLE PHOTO"]})]}),d.jsx("button",{type:"button",onClick:Z,className:"bg-white/20 hover:bg-white/30 text-white px-4 py-2.5 rounded-xl font-bold text-xs",children:"Cancel"})]})]}),d.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{key:"front",label:"1. FRONT VIEW",desc:"Front seat & frame face"},{key:"back",label:"2. BACK VIEW",desc:"Rear upholstery & back legs"},{key:"side",label:"3. SIDE VIEW",desc:"Armrest & side profile"},{key:"top",label:"4. TOP / DETAIL VIEW",desc:"Top cushion or table surface"}].map(U=>d.jsxs("div",{className:"bg-white p-3 rounded-2xl border border-[#E5DEC9] space-y-2 relative group",children:[d.jsxs("div",{className:"flex justify-between items-center text-xs font-mono font-bold text-[#A17A16]",children:[d.jsx("span",{children:U.label}),x[U.key]&&d.jsx(O_,{className:"w-4 h-4 text-emerald-600"})]}),d.jsx("div",{className:"relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200",children:x[U.key]?d.jsx("img",{src:x[U.key],alt:U.label,className:"w-full h-full object-cover"}):d.jsx("div",{className:"w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs text-center p-2",children:d.jsx("span",{children:U.desc})})}),d.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[d.jsxs("label",{className:"flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-2 rounded-lg text-[10px] font-bold text-center cursor-pointer",children:[d.jsx("span",{children:"Choose File"}),d.jsx("input",{type:"file",accept:"image/*",onChange:Q=>C(Q,U.key),className:"hidden"})]}),d.jsx("button",{type:"button",onClick:()=>q(U.key),className:"bg-[#F9F4E9] text-[#A17A16] hover:bg-[#E9D3A4] p-1.5 rounded-lg",title:"Snap with device camera",children:d.jsx(yc,{className:"w-3.5 h-3.5"})})]})]},U.key))}),d.jsxs("button",{type:"button",onClick:V,className:"w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm shadow-xl tracking-wider flex items-center justify-center space-x-2",children:[d.jsx(Ro,{className:"w-5 h-5"}),d.jsx("span",{children:"PUBLISH ITEM & GENERATE 360° 3D MODEL"})]})]})]})]})})},tu=[{_id:"66b1a1112233445566778899",title:"Mid-Century Modern Tan Leather Lounge Chair",subtitle:"Archival Series № 422",price:450,estimatedNewPrice:1200,category:"Chairs",conditionGrade:"GOOD",isRareFind:!0,description:"A quintessential piece of mid-century design, this lounge chair features a masterfully carved solid walnut wood frame. The premium top-grain leather in 'Autumn Tan' displays a rich patina, reflecting its curated history. Ergonomically angled for long-term comfort with signature diamond tufting.",material:"Top-Grain Leather & Walnut Wood",era:"Mid-Century Modern (1960s)",dimensions:{width:"32 in",depth:"35 in",height:"34 in"},images:["https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80","https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Archival Series № 422",polygonCount:"124.2k",lodLevel:"ULTRA",defaultTexture:"tan",materialVariants:[{id:"tan",name:"TAN",colorHex:"#A17A16",previewColor:"#8C5A2B"},{id:"forest",name:"FOREST",colorHex:"#526B5C",previewColor:"#435B4D"},{id:"ebony",name:"EBONY",colorHex:"#3A3A3C",previewColor:"#2B2B2D"}],geometryType:"lounge_chair"},seller:{name:"Muhtasim Ahmed",rating:4.9,verified:!0,location:"Dhaka, Bangladesh"}},{_id:"66b1a22233445566778899aa",title:"Minimalist Scandinavian Bouclé Accent Armchair",subtitle:"Nordic Edition № 108",price:320,estimatedNewPrice:850,category:"Chairs",conditionGrade:"EXCELLENT",isRareFind:!1,description:"Soft tactile cream bouclé fabric wrapped around a curved solid birch wood silhouette. High-density foam cushions offer plush yet supportive seating.",material:"Textured Bouclé Fabric & Birch Wood",era:"Contemporary Scandinavian",dimensions:{width:"30 in",depth:"31 in",height:"30 in"},images:["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Nordic Edition № 108",polygonCount:"86.4k",lodLevel:"HIGH",defaultTexture:"tan",materialVariants:[{id:"tan",name:"CREAM",colorHex:"#E5DEC9",previewColor:"#D6CCA9"},{id:"forest",name:"MINT",colorHex:"#8DAA9D",previewColor:"#759385"},{id:"ebony",name:"CHARCOAL",colorHex:"#41444B",previewColor:"#32353B"}],geometryType:"lounge_chair"},seller:{name:"Ashfaq Habib Rafi",rating:5,verified:!0,location:"Gulshan, Dhaka"}},{_id:"66b1a333445566778899aabb",title:"Restoration Hardware Leather Club Chesterfield Sofa",subtitle:"Heritage Collection № 003",price:1150,estimatedNewPrice:3400,category:"Sofas",conditionGrade:"GOOD",isRareFind:!0,description:"Handcrafted deep button-tufted cognac leather Chesterfield sofa. Deep seating with antiqued brass nailhead trim details along armrests.",material:"Vintage Cognac Leather & Kiln-Dried Hardwood",era:"Traditional English Classic",dimensions:{width:"88 in",depth:"39 in",height:"32 in"},images:["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Heritage Collection № 003",polygonCount:"198.5k",lodLevel:"ULTRA",defaultTexture:"tan",materialVariants:[{id:"tan",name:"COGNAC",colorHex:"#995B2A",previewColor:"#804A20"},{id:"forest",name:"EMERALD",colorHex:"#1C4A37",previewColor:"#143729"},{id:"ebony",name:"ONXY",colorHex:"#1F1F21",previewColor:"#141416"}],geometryType:"sofa"},seller:{name:"Injamamul Haque Fahim",rating:4.8,verified:!0,location:"Dhanmondi, Dhaka"}},{_id:"66b1a4445566778899aabbcc",title:"Organic Live-Edge Walnut & Black Steel Coffee Table",subtitle:"Artisan Studio № 77",price:280,estimatedNewPrice:700,category:"Tables",conditionGrade:"EXCELLENT",isRareFind:!1,description:"Sustainably harvested American black walnut live-edge slab finished with organic oil rub, resting on matte black hairpin metal legs.",material:"Solid Walnut Wood & Powder-Coated Steel",era:"Modern Industrial",dimensions:{width:"48 in",depth:"24 in",height:"18 in"},images:["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80"],multiAngleImages:{front:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80",back:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80",side:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",top:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80"},has3DModel:!0,model3D:{archivalSeries:"Artisan Studio № 77",polygonCount:"42.1k",lodLevel:"MEDIUM",defaultTexture:"tan",materialVariants:[{id:"tan",name:"WALNUT",colorHex:"#6E4728",previewColor:"#59371E"},{id:"forest",name:"OAK",colorHex:"#C49A6C",previewColor:"#B08658"},{id:"ebony",name:"ESPRESSO",colorHex:"#2D231C",previewColor:"#1E1611"}],geometryType:"table"},seller:{name:"Shouvik Banik",rating:4.9,verified:!0,location:"Uttara, Dhaka"}}];function aT(){const[t,e]=oe.useState(tu),[n,i]=oe.useState(tu[0]),[r,s]=oe.useState("marketplace"),[o,a]=oe.useState("buyer"),[l,c]=oe.useState(!1),[f,p]=oe.useState(!1),[h,m]=oe.useState(!1),[_,y]=oe.useState(!1),[g,u]=oe.useState(!1),[v,x]=oe.useState(null),[M,R]=oe.useState(()=>{const C=localStorage.getItem("decorate3d_user");return C?JSON.parse(C):null}),[b,T]=oe.useState([tu[0]]),P=(C,V,U)=>{x({type:C,title:V,message:U})};oe.useEffect(()=>{const C=()=>{const V=window.location.pathname.toLowerCase();let U="buyer";V.includes("/seller")?U="seller":V.includes("/courier")?U="courier":V.includes("/admin")?U="admin":U="buyer";const Q=localStorage.getItem("decorate3d_user"),ge=Q?JSON.parse(Q):null;ge&&ge.role!==U?(R(null),localStorage.removeItem("decorate3d_user"),x({type:"info",title:"Role Route Switched via URL",message:`Switched web address to /${U}. Active ${ge.role.toUpperCase()} session has been logged out.`}),m(!0)):!ge&&U!=="buyer"&&m(!0),s(U==="seller"?"seller_dashboard":U==="courier"?"logistics":U==="admin"?"admin_dashboard":ve=>ve==="seller_dashboard"||ve==="admin_dashboard"||ve==="logistics"?"marketplace":ve),a(U)};return C(),window.addEventListener("popstate",C),()=>window.removeEventListener("popstate",C)},[]),oe.useEffect(()=>{M?localStorage.setItem("decorate3d_user",JSON.stringify(M)):localStorage.removeItem("decorate3d_user")},[M]),oe.useEffect(()=>{fetch("/api/products").then(C=>C.json()).then(C=>{C.success&&C.data&&C.data.length>0&&e(C.data)}).catch(()=>{})},[]);const E=(C=null)=>{C&&i(C),c(!0)},S=()=>{c(!1)},I=()=>{p(!1),p(!0)},O=()=>{p(!1)},L=C=>{T(V=>[...V,C]),u(!0),P("success","Item Added to Escrow Cart",`"${C.title}" ($${C.price}) has been placed in your safe escrow cart.`)},W=C=>{T(V=>V.filter((U,Q)=>Q!==C))},q=()=>{P("success","Escrow Lock Confirmation",`Payment of $${b.reduce((C,V)=>C+V.price,0)} held in Escrow account. Delivery OTP verification code generated!`),T([]),u(!1)},Z=()=>{R(null),localStorage.removeItem("decorate3d_user"),s("marketplace"),P("info","Logged Out","You have been successfully logged out of your account.")},ie=C=>{R(C),localStorage.setItem("decorate3d_user",JSON.stringify(C)),P("success","Profile Updated","Your profile details have been saved successfully.")};return d.jsxs("div",{className:"min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E232A]",children:[d.jsx(Qx,{notification:v,onClose:()=>x(null)}),d.jsx(ly,{activeTab:r,setActiveTab:s,cartCount:b.length,openAuthModal:()=>m(!0),user:M,onLogout:Z,openCart:()=>u(!0),openSellerListingModal:()=>y(!0)}),d.jsxs("main",{className:"flex-1",children:[r==="marketplace"&&d.jsx(dy,{products:t,onSelectProduct:C=>{i(C),s("product_detail")},open3DInspector:E}),r==="product_detail"&&d.jsx(fy,{product:n,open3DInspector:E,onAddToCart:L,onLaunchRoomPlanner:I}),r==="seller_dashboard"&&d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn",children:[d.jsxs("div",{className:"bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{children:[d.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full uppercase",children:"SELLER PORTAL (/seller)"}),d.jsx("h1",{className:"font-serif text-3xl font-bold mt-2",children:"Furniture Seller 3D Inventory Hub"}),d.jsx("p",{className:"text-sm text-gray-300 mt-1 max-w-xl",children:"Upload multi-angle photos or snap with your device camera to generate interactive 360° 3D models for buyers."})]}),d.jsxs("button",{onClick:()=>y(!0),className:"gold-gradient-btn px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center space-x-2 whitespace-nowrap",children:[d.jsx(Mn,{className:"w-5 h-5"}),d.jsx("span",{children:"+ LIST NEW ITEM WITH 3D SCANNER"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm",children:[d.jsx("span",{className:"text-xs font-mono text-gray-400 font-bold block",children:"ACTIVE LISTINGS"}),d.jsxs("span",{className:"font-serif text-3xl font-bold text-gray-900 mt-1 block",children:[t.length," Items"]}),d.jsx("span",{className:"text-xs text-emerald-600 font-bold mt-2 inline-block",children:"100% 3D Model Verified"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm",children:[d.jsx("span",{className:"text-xs font-mono text-gray-400 font-bold block",children:"TOTAL BIDS / INQUIRIES"}),d.jsx("span",{className:"font-serif text-3xl font-bold text-[#A17A16] mt-1 block",children:"18 Offers"}),d.jsx("span",{className:"text-xs text-gray-500 mt-2 inline-block",children:"Escrow Locked Bids"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm",children:[d.jsx("span",{className:"text-xs font-mono text-gray-400 font-bold block",children:"SELLER ACCOUNT ROLE"}),d.jsx("span",{className:"font-serif text-2xl font-bold text-gray-900 mt-1 block",children:(M==null?void 0:M.role)==="seller"?M.name:"Seller Account Required"}),d.jsx("span",{className:"text-xs text-gray-500 mt-2 inline-block",children:"Role Isolated Database Token"})]})]}),d.jsxs("div",{className:"bg-white rounded-3xl p-6 border border-[#E5DEC9] shadow-sm space-y-4",children:[d.jsx("h3",{className:"font-serif text-xl font-bold text-gray-900",children:"Your Listed 3D Furniture Items"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:t.map(C=>d.jsxs("div",{className:"border border-[#E5DEC9] rounded-2xl p-3 space-y-2 bg-[#FBF9F5]",children:[d.jsx("img",{src:C.images[0],alt:C.title,className:"w-full h-36 object-cover rounded-xl"}),d.jsx("h4",{className:"font-serif font-bold text-sm text-gray-900 truncate",children:C.title}),d.jsxs("span",{className:"font-mono text-sm font-bold text-[#A17A16]",children:["$",C.price]}),d.jsxs("button",{onClick:()=>E(C),className:"w-full bg-white hover:bg-gray-100 text-xs font-bold py-2 rounded-xl border border-[#E5DEC9] flex items-center justify-center space-x-1",children:[d.jsx(Mn,{className:"w-3.5 h-3.5 text-[#A17A16]"}),d.jsx("span",{children:"INSPECT 3D MODEL"})]})]},C._id))})]})]}),r==="logistics"&&d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn",children:d.jsxs("div",{className:"bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{children:[d.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full uppercase",children:"COURIER PORTAL (/courier)"}),d.jsx("h1",{className:"font-serif text-3xl font-bold mt-2",children:"Logistics & Geo-Radius Bidding Hub"}),d.jsx("p",{className:"text-sm text-gray-300 mt-1 max-w-xl",children:"Connect local courier drivers, calculate distance matrix quotes, and verify delivery with OTP handshake codes."})]}),d.jsxs("button",{onClick:()=>P("info","Courier Bid Placed","Submitted $45 delivery bid for local Dhaka zone dispatch."),className:"gold-gradient-btn px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center space-x-2 whitespace-nowrap",children:[d.jsx(ry,{className:"w-5 h-5"}),d.jsx("span",{children:"BID ON OPEN DELIVERIES"})]})]})}),r==="admin_dashboard"&&d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn",children:d.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-[#E5DEC9] shadow-xl space-y-6",children:[d.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full uppercase",children:"ADMIN PORTAL (/admin)"}),d.jsx("h1",{className:"font-serif text-3xl font-bold text-gray-900",children:"System Administrator Audit Hub"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Audits platform security, monitors Escrow transactions, and manages role-isolated database accounts."}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-4",children:[d.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]",children:[d.jsx("span",{className:"text-xs font-mono text-[#A17A16] font-bold block",children:"SYSTEM STATUS"}),d.jsx("span",{className:"text-lg font-bold text-gray-900 mt-1 block",children:"JWT & Nodemailer 2FA Active"})]}),d.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]",children:[d.jsx("span",{className:"text-xs font-mono text-[#A17A16] font-bold block",children:"ROLE ISOLATION"}),d.jsx("span",{className:"text-lg font-bold text-gray-900 mt-1 block",children:"Strict (email, role) Compound Key"})]}),d.jsxs("div",{className:"p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]",children:[d.jsx("span",{className:"text-xs font-mono text-[#A17A16] font-bold block",children:"3D VOLUMETRIC ENGINE"}),d.jsx("span",{className:"text-lg font-bold text-gray-900 mt-1 block",children:"Three.js 360° Texture Map Ready"})]})]})]})}),r==="profile"&&d.jsx(hy,{user:M,onUpdateProfile:ie,onLogout:Z,openAuthModal:()=>m(!0)}),r==="room_planner"&&d.jsx("div",{className:"max-w-7xl mx-auto px-4 py-12 text-center space-y-6",children:d.jsxs("div",{className:"bg-white rounded-3xl p-12 border border-[#E5DEC9] shadow-sm max-w-2xl mx-auto space-y-4",children:[d.jsx("span",{className:"gold-badge text-xs px-3 py-1 rounded-full",children:"3D SPATIAL CANVAS"}),d.jsx("h2",{className:"font-serif text-3xl font-bold",children:"Virtual 3D Room Floor Planner"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Interactive room grid editor for testing spatial furniture placement before buying."}),d.jsx("button",{onClick:I,className:"gold-gradient-btn px-8 py-3.5 rounded-xl font-bold text-sm shadow-md",children:"OPEN SPATIAL 3D PLANNER CANVAS"})]})})]}),d.jsx(iT,{product:n,isOpen:l,onClose:S,onAddToCart:L,onLaunchAR:I}),d.jsx(rT,{product:n,isOpen:f,onClose:O}),d.jsx(sT,{isOpen:h,initialRole:o,onClose:()=>m(!1),onLoginSuccess:C=>{R(C),P("success","Authentication Complete",`Welcome back, ${C.name}! Verified as ${C.role.toUpperCase()}.`)}}),d.jsx(py,{cart:b,onRemoveFromCart:W,onCheckout:q,isOpen:g,onClose:()=>u(!1)}),d.jsx(oT,{isOpen:_,onClose:()=>y(!1),onAddProduct:C=>{e(V=>[C,...V]),i(C),P("success","3D Model Generated & Item Published",`"${C.title}" multi-angle photos converted to 3D spatial mesh texture map!`),E(C)}}),d.jsx(cy,{})]})}nu.createRoot(document.getElementById("root")).render(d.jsx(aT,{}));
