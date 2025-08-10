(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jd(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const on={},da=[],Hi=()=>{},by=()=>!1,qu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qd=n=>n.startsWith("onUpdate:"),bn=Object.assign,ep=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ey=Object.prototype.hasOwnProperty,Pt=(n,e)=>Ey.call(n,e),at=Array.isArray,pa=n=>Yu(n)==="[object Map]",Vg=n=>Yu(n)==="[object Set]",ft=n=>typeof n=="function",vn=n=>typeof n=="string",Gs=n=>typeof n=="symbol",Jt=n=>n!==null&&typeof n=="object",Gg=n=>(Jt(n)||ft(n))&&ft(n.then)&&ft(n.catch),Wg=Object.prototype.toString,Yu=n=>Wg.call(n),Ty=n=>Yu(n).slice(8,-1),Xg=n=>Yu(n)==="[object Object]",tp=n=>vn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fl=Jd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ju=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},wy=/-(\w)/g,Rr=ju(n=>n.replace(wy,(e,t)=>t?t.toUpperCase():"")),Ay=/\B([A-Z])/g,za=ju(n=>n.replace(Ay,"-$1").toLowerCase()),Ku=ju(n=>n.charAt(0).toUpperCase()+n.slice(1)),bf=ju(n=>n?`on${Ku(n)}`:""),Ns=(n,e)=>!Object.is(n,e),Ef=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},$g=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Cy=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ry=n=>{const e=vn(n)?Number(n):NaN;return isNaN(e)?n:e};let cm;const qg=()=>cm||(cm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zu(n){if(at(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vn(i)?Iy(i):Zu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vn(n)||Jt(n))return n}const Py=/;(?![^(]*\))/g,Ly=/:([^]+)/,Dy=/\/\*[^]*?\*\//g;function Iy(n){const e={};return n.replace(Dy,"").split(Py).forEach(t=>{if(t){const i=t.split(Ly);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ju(n){let e="";if(vn(n))e=n;else if(at(n))for(let t=0;t<n.length;t++){const i=Ju(n[t]);i&&(e+=i+" ")}else if(Jt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Oy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uy=Jd(Oy);function Yg(n){return!!n||n===""}const jg=n=>!!(n&&n.__v_isRef===!0),lr=n=>vn(n)?n:n==null?"":at(n)||Jt(n)&&(n.toString===Wg||!ft(n.toString))?jg(n)?lr(n.value):JSON.stringify(n,Kg,2):String(n),Kg=(n,e)=>jg(e)?Kg(n,e.value):pa(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Tf(i,s)+" =>"]=r,t),{})}:Vg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Tf(t))}:Gs(e)?Tf(e):Jt(e)&&!at(e)&&!Xg(e)?String(e):e,Tf=(n,e="")=>{var t;return Gs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tr;class Ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tr,!e&&tr&&(this.index=(tr.scopes||(tr.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=tr;try{return tr=this,e()}finally{tr=t}}}on(){tr=this}off(){tr=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Fy(n,e=tr){e&&e.active&&e.effects.push(n)}function By(){return tr}let Mo;class np{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Fy(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ws();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(ky(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Xs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=As,t=Mo;try{return As=!0,Mo=this,this._runnings++,um(this),this.fn()}finally{fm(this),this._runnings--,Mo=t,As=e}}stop(){this.active&&(um(this),fm(this),this.onStop&&this.onStop(),this.active=!1)}}function ky(n){return n.value}function um(n){n._trackId++,n._depsLength=0}function fm(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Zg(n.deps[e],n);n.deps.length=n._depsLength}}function Zg(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let As=!0,Ch=0;const Jg=[];function Ws(){Jg.push(As),As=!1}function Xs(){const n=Jg.pop();As=n===void 0?!0:n}function ip(){Ch++}function rp(){for(Ch--;!Ch&&Rh.length;)Rh.shift()()}function Qg(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Zg(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Rh=[];function ev(n,e,t){ip();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Rh.push(i.scheduler)))}rp()}const tv=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ph=new WeakMap,bo=Symbol(""),Lh=Symbol("");function xi(n,e,t){if(As&&Mo){let i=Ph.get(n);i||Ph.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=tv(()=>i.delete(t))),Qg(Mo,r)}}function qr(n,e,t,i,r,s){const o=Ph.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&at(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Gs(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":at(n)?tp(t)&&a.push(o.get("length")):(a.push(o.get(bo)),pa(n)&&a.push(o.get(Lh)));break;case"delete":at(n)||(a.push(o.get(bo)),pa(n)&&a.push(o.get(Lh)));break;case"set":pa(n)&&a.push(o.get(bo));break}ip();for(const l of a)l&&ev(l,4);rp()}const zy=Jd("__proto__,__v_isRef,__isVue"),nv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gs)),hm=Hy();function Hy(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Bt(this);for(let s=0,o=this.length;s<o;s++)xi(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Bt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ws(),ip();const i=Bt(this)[e].apply(this,t);return rp(),Xs(),i}}),n}function Vy(n){Gs(n)||(n=String(n));const e=Bt(this);return xi(e,"has",n),e.hasOwnProperty(n)}class iv{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?tS:av:s?ov:sv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=at(e);if(!r){if(o&&Pt(hm,t))return Reflect.get(hm,t,i);if(t==="hasOwnProperty")return Vy}const a=Reflect.get(e,t,i);return(Gs(t)?nv.has(t):zy(t))||(r||xi(e,"get",t),s)?a:yi(a)?o&&tp(t)?a:a.value:Jt(a)?r?lv(a):ql(a):a}}class rv extends iv{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Pl(s);if(!yu(i)&&!Pl(i)&&(s=Bt(s),i=Bt(i)),!at(e)&&yi(s)&&!yi(i))return l?!1:(s.value=i,!0)}const o=at(e)&&tp(t)?Number(t)<e.length:Pt(e,t),a=Reflect.set(e,t,i,r);return e===Bt(r)&&(o?Ns(i,s)&&qr(e,"set",t,i):qr(e,"add",t,i)),a}deleteProperty(e,t){const i=Pt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&qr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Gs(t)||!nv.has(t))&&xi(e,"has",t),i}ownKeys(e){return xi(e,"iterate",at(e)?"length":bo),Reflect.ownKeys(e)}}class Gy extends iv{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Wy=new rv,Xy=new Gy,$y=new rv(!0);const sp=n=>n,Qu=n=>Reflect.getPrototypeOf(n);function sc(n,e,t=!1,i=!1){n=n.__v_raw;const r=Bt(n),s=Bt(e);t||(Ns(e,s)&&xi(r,"get",e),xi(r,"get",s));const{has:o}=Qu(r),a=i?sp:t?lp:Ll;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function oc(n,e=!1){const t=this.__v_raw,i=Bt(t),r=Bt(n);return e||(Ns(n,r)&&xi(i,"has",n),xi(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ac(n,e=!1){return n=n.__v_raw,!e&&xi(Bt(n),"iterate",bo),Reflect.get(n,"size",n)}function dm(n){n=Bt(n);const e=Bt(this);return Qu(e).has.call(e,n)||(e.add(n),qr(e,"add",n,n)),this}function pm(n,e){e=Bt(e);const t=Bt(this),{has:i,get:r}=Qu(t);let s=i.call(t,n);s||(n=Bt(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Ns(e,o)&&qr(t,"set",n,e):qr(t,"add",n,e),this}function mm(n){const e=Bt(this),{has:t,get:i}=Qu(e);let r=t.call(e,n);r||(n=Bt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&qr(e,"delete",n,void 0),s}function _m(){const n=Bt(this),e=n.size!==0,t=n.clear();return e&&qr(n,"clear",void 0,void 0),t}function lc(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Bt(o),l=e?sp:n?lp:Ll;return!n&&xi(a,"iterate",bo),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function cc(n,e,t){return function(...i){const r=this.__v_raw,s=Bt(r),o=pa(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?sp:e?lp:Ll;return!e&&xi(s,"iterate",l?Lh:bo),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ss(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function qy(){const n={get(s){return sc(this,s)},get size(){return ac(this)},has:oc,add:dm,set:pm,delete:mm,clear:_m,forEach:lc(!1,!1)},e={get(s){return sc(this,s,!1,!0)},get size(){return ac(this)},has:oc,add:dm,set:pm,delete:mm,clear:_m,forEach:lc(!1,!0)},t={get(s){return sc(this,s,!0)},get size(){return ac(this,!0)},has(s){return oc.call(this,s,!0)},add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear"),forEach:lc(!0,!1)},i={get(s){return sc(this,s,!0,!0)},get size(){return ac(this,!0)},has(s){return oc.call(this,s,!0)},add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear"),forEach:lc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cc(s,!1,!1),t[s]=cc(s,!0,!1),e[s]=cc(s,!1,!0),i[s]=cc(s,!0,!0)}),[n,t,e,i]}const[Yy,jy,Ky,Zy]=qy();function op(n,e){const t=e?n?Zy:Ky:n?jy:Yy;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Pt(t,r)&&r in i?t:i,r,s)}const Jy={get:op(!1,!1)},Qy={get:op(!1,!0)},eS={get:op(!0,!1)};const sv=new WeakMap,ov=new WeakMap,av=new WeakMap,tS=new WeakMap;function nS(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iS(n){return n.__v_skip||!Object.isExtensible(n)?0:nS(Ty(n))}function ql(n){return Pl(n)?n:ap(n,!1,Wy,Jy,sv)}function rS(n){return ap(n,!1,$y,Qy,ov)}function lv(n){return ap(n,!0,Xy,eS,av)}function ap(n,e,t,i,r){if(!Jt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=iS(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function hl(n){return Pl(n)?hl(n.__v_raw):!!(n&&n.__v_isReactive)}function Pl(n){return!!(n&&n.__v_isReadonly)}function yu(n){return!!(n&&n.__v_isShallow)}function cv(n){return n?!!n.__v_raw:!1}function Bt(n){const e=n&&n.__v_raw;return e?Bt(e):n}function sS(n){return Object.isExtensible(n)&&$g(n,"__v_skip",!0),n}const Ll=n=>Jt(n)?ql(n):n,lp=n=>Jt(n)?lv(n):n;class uv{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new np(()=>e(this._value),()=>Jc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Bt(this);return(!e._cacheable||e.effect.dirty)&&Ns(e._value,e._value=e.effect.run())&&Jc(e,4),fv(e),e.effect._dirtyLevel>=2&&Jc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function oS(n,e,t=!1){let i,r;const s=ft(n);return s?(i=n,r=Hi):(i=n.get,r=n.set),new uv(i,r,s||!r,t)}function fv(n){var e;As&&Mo&&(n=Bt(n),Qg(Mo,(e=n.dep)!=null?e:n.dep=tv(()=>n.dep=void 0,n instanceof uv?n:void 0)))}function Jc(n,e=4,t,i){n=Bt(n);const r=n.dep;r&&ev(r,e)}function yi(n){return!!(n&&n.__v_isRef===!0)}function ii(n){return hv(n,!1)}function aS(n){return hv(n,!0)}function hv(n,e){return yi(n)?n:new lS(n,e)}class lS{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Bt(e),this._value=t?e:Ll(e)}get value(){return fv(this),this._value}set value(e){const t=this.__v_isShallow||yu(e)||Pl(e);e=t?e:Bt(e),Ns(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:Ll(e),Jc(this,4))}}function Cs(n){return yi(n)?n.value:n}const cS={get:(n,e,t)=>Cs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yi(r)&&!yi(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function dv(n){return hl(n)?n:new Proxy(n,cS)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rs(n,e,t,i){try{return i?n(...i):n()}catch(r){ef(r,e,t)}}function $i(n,e,t,i){if(ft(n)){const r=Rs(n,e,t,i);return r&&Gg(r)&&r.catch(s=>{ef(s,e,t)}),r}if(at(n)){const r=[];for(let s=0;s<n.length;s++)r.push($i(n[s],e,t,i));return r}}function ef(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ws(),Rs(l,null,10,[n,o,a]),Xs();return}}uS(n,t,r,i)}function uS(n,e,t,i=!0){console.error(n)}let Dl=!1,Dh=!1;const Wn=[];let vr=0;const ma=[];let gs=null,po=0;const pv=Promise.resolve();let cp=null;function Su(n){const e=cp||pv;return n?e.then(this?n.bind(this):n):e}function fS(n){let e=vr+1,t=Wn.length;for(;e<t;){const i=e+t>>>1,r=Wn[i],s=Il(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function up(n){(!Wn.length||!Wn.includes(n,Dl&&n.allowRecurse?vr+1:vr))&&(n.id==null?Wn.push(n):Wn.splice(fS(n.id),0,n),mv())}function mv(){!Dl&&!Dh&&(Dh=!0,cp=pv.then(gv))}function hS(n){const e=Wn.indexOf(n);e>vr&&Wn.splice(e,1)}function dS(n){at(n)?ma.push(...n):(!gs||!gs.includes(n,n.allowRecurse?po+1:po))&&ma.push(n),mv()}function gm(n,e,t=Dl?vr+1:0){for(;t<Wn.length;t++){const i=Wn[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Wn.splice(t,1),t--,i()}}}function _v(n){if(ma.length){const e=[...new Set(ma)].sort((t,i)=>Il(t)-Il(i));if(ma.length=0,gs){gs.push(...e);return}for(gs=e,po=0;po<gs.length;po++){const t=gs[po];t.active!==!1&&t()}gs=null,po=0}}const Il=n=>n.id==null?1/0:n.id,pS=(n,e)=>{const t=Il(n)-Il(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function gv(n){Dh=!1,Dl=!0,Wn.sort(pS);try{for(vr=0;vr<Wn.length;vr++){const e=Wn[vr];e&&e.active!==!1&&Rs(e,null,14)}}finally{vr=0,Wn.length=0,_v(),Dl=!1,cp=null,(Wn.length||ma.length)&&gv()}}function mS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||on;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||on;f&&(r=t.map(d=>vn(d)?d.trim():d)),h&&(r=t.map(Cy))}let a,l=i[a=bf(e)]||i[a=bf(Rr(e))];!l&&s&&(l=i[a=bf(za(e))]),l&&$i(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$i(c,n,6,r)}}function vv(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ft(n)){const l=c=>{const u=vv(c,e,!0);u&&(a=!0,bn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Jt(n)&&i.set(n,null),null):(at(s)?s.forEach(l=>o[l]=null):bn(o,s),Jt(n)&&i.set(n,o),o)}function tf(n,e){return!n||!qu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pt(n,e[0].toLowerCase()+e.slice(1))||Pt(n,za(e))||Pt(n,e))}let Vi=null,nf=null;function Mu(n){const e=Vi;return Vi=n,nf=n&&n.type.__scopeId||null,e}function Qr(n){nf=n}function es(){nf=null}function wa(n,e=Vi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Pm(-1);const s=Mu(e);let o;try{o=n(...r)}finally{Mu(s),i._d&&Pm(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function wf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,p=Mu(n);let m,M;try{if(t.shapeFlag&4){const S=r||i,P=S;m=_r(c.call(P,S,u,h,d,f,g)),M=a}else{const S=e;m=_r(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),M=e.props?a:_S(a)}}catch(S){ml.length=0,ef(S,n,1),m=Nt(Ri)}let v=m;if(M&&_!==!1){const S=Object.keys(M),{shapeFlag:P}=v;S.length&&P&7&&(s&&S.some(Qd)&&(M=gS(M,s)),v=Fs(v,M,!1,!0))}return t.dirs&&(v=Fs(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,Mu(p),m}const _S=n=>{let e;for(const t in n)(t==="class"||t==="style"||qu(t))&&((e||(e={}))[t]=n[t]);return e},gS=(n,e)=>{const t={};for(const i in n)(!Qd(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vS(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!tf(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vm(i,o,c):!0:!!o;return!1}function vm(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!tf(t,s))return!0}return!1}function xS({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const fp="components";function Ih(n,e){return yv(fp,n,!0,e)||n}const xv=Symbol.for("v-ndc");function yS(n){return vn(n)?yv(fp,n,!1)||n:n||xv}function yv(n,e,t=!0,i=!1){const r=Vi||Bn;if(r){const s=r.type;if(n===fp){const a=mM(s,!1);if(a&&(a===e||a===Rr(e)||a===Ku(Rr(e))))return s}const o=xm(r[n]||s[n],e)||xm(r.appContext[n],e);return!o&&i?s:o}}function xm(n,e){return n&&(n[e]||n[Rr(e)]||n[Ku(Rr(e))])}const SS=n=>n.__isSuspense;function MS(n,e){e&&e.pendingBranch?at(n)?e.effects.push(...n):e.effects.push(n):dS(n)}function rf(n,e,t=Bn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Ws();const a=Yl(t),l=$i(e,t,n,o);return a(),Xs(),l});return i?r.unshift(s):r.push(s),s}}const ts=n=>(e,t=Bn)=>{(!lf||n==="sp")&&rf(n,(...i)=>e(...i),t)},bS=ts("bm"),$s=ts("m"),ES=ts("bu"),TS=ts("u"),Sv=ts("bum"),hp=ts("um"),wS=ts("sp"),AS=ts("rtg"),CS=ts("rtc");function RS(n,e=Bn){rf("ec",n,e)}function Ks(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ws(),$i(l,t,8,[n.el,a,n,e]),Xs())}}function _a(n,e,t,i){let r;const s=t;if(at(n)||vn(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Jt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}/*! #__NO_SIDE_EFFECTS__ */function Mv(n,e){return ft(n)?bn({name:n.name},e,{setup:n}):n}const Qc=n=>!!n.type.__asyncLoader,Oh=n=>n?Xv(n)?_p(n):Oh(n.parent):null,dl=bn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Oh(n.parent),$root:n=>Oh(n.root),$emit:n=>n.emit,$options:n=>dp(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,up(n.update)}),$nextTick:n=>n.n||(n.n=Su.bind(n.proxy)),$watch:n=>jS.bind(n)}),Af=(n,e)=>n!==on&&!n.__isScriptSetup&&Pt(n,e),PS={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Af(i,e))return o[e]=1,i[e];if(r!==on&&Pt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Pt(c,e))return o[e]=3,s[e];if(t!==on&&Pt(t,e))return o[e]=4,t[e];Uh&&(o[e]=0)}}const u=dl[e];let h,f;if(u)return e==="$attrs"&&xi(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==on&&Pt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Pt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Af(r,e)?(r[e]=t,!0):i!==on&&Pt(i,e)?(i[e]=t,!0):Pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==on&&Pt(n,o)||Af(e,o)||(a=s[0])&&Pt(a,o)||Pt(i,o)||Pt(dl,o)||Pt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ym(n){return at(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Uh=!0;function LS(n){const e=dp(n),t=n.proxy,i=n.ctx;Uh=!1,e.beforeCreate&&Sm(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:M,destroyed:v,unmounted:S,render:P,renderTracked:E,renderTriggered:w,errorCaptured:O,serverPrefetch:b,expose:y,inheritAttrs:U,components:D,directives:q,filters:G}=e;if(c&&DS(c,i,null),o)for(const X in o){const W=o[X];ft(W)&&(i[X]=W.bind(t))}if(r){const X=r.call(t,t);Jt(X)&&(n.data=ql(X))}if(Uh=!0,s)for(const X in s){const W=s[X],ve=ft(W)?W.bind(t,t):ft(W.get)?W.get.bind(t,t):Hi,T=!ft(W)&&ft(W.set)?W.set.bind(t):Hi,Ee=xr({get:ve,set:T});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:me=>Ee.value=me})}if(a)for(const X in a)bv(a[X],i,t,X);if(l){const X=ft(l)?l.call(t):l;Reflect.ownKeys(X).forEach(W=>{eu(W,X[W])})}u&&Sm(u,n,"c");function H(X,W){at(W)?W.forEach(ve=>X(ve.bind(t))):W&&X(W.bind(t))}if(H(bS,h),H($s,f),H(ES,d),H(TS,g),H(KS,_),H(ZS,p),H(RS,O),H(CS,E),H(AS,w),H(Sv,M),H(hp,S),H(wS,b),at(y))if(y.length){const X=n.exposed||(n.exposed={});y.forEach(W=>{Object.defineProperty(X,W,{get:()=>t[W],set:ve=>t[W]=ve})})}else n.exposed||(n.exposed={});P&&n.render===Hi&&(n.render=P),U!=null&&(n.inheritAttrs=U),D&&(n.components=D),q&&(n.directives=q)}function DS(n,e,t=Hi){at(n)&&(n=Nh(n));for(const i in n){const r=n[i];let s;Jt(r)?"default"in r?s=Tr(r.from||i,r.default,!0):s=Tr(r.from||i):s=Tr(r),yi(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Sm(n,e,t){$i(at(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bv(n,e,t,i){const r=i.includes(".")?Nv(t,i):()=>t[i];if(vn(n)){const s=e[n];ft(s)&&tu(r,s)}else if(ft(n))tu(r,n.bind(t));else if(Jt(n))if(at(n))n.forEach(s=>bv(s,e,t,i));else{const s=ft(n.handler)?n.handler.bind(t):e[n.handler];ft(s)&&tu(r,s,n)}}function dp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>bu(l,c,o,!0)),bu(l,e,o)),Jt(e)&&s.set(e,l),l}function bu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&bu(n,s,t,!0),r&&r.forEach(o=>bu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=IS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const IS={data:Mm,props:bm,emits:bm,methods:nl,computed:nl,beforeCreate:Zn,created:Zn,beforeMount:Zn,mounted:Zn,beforeUpdate:Zn,updated:Zn,beforeDestroy:Zn,beforeUnmount:Zn,destroyed:Zn,unmounted:Zn,activated:Zn,deactivated:Zn,errorCaptured:Zn,serverPrefetch:Zn,components:nl,directives:nl,watch:US,provide:Mm,inject:OS};function Mm(n,e){return e?n?function(){return bn(ft(n)?n.call(this,this):n,ft(e)?e.call(this,this):e)}:e:n}function OS(n,e){return nl(Nh(n),Nh(e))}function Nh(n){if(at(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zn(n,e){return n?[...new Set([].concat(n,e))]:e}function nl(n,e){return n?bn(Object.create(null),n,e):e}function bm(n,e){return n?at(n)&&at(e)?[...new Set([...n,...e])]:bn(Object.create(null),ym(n),ym(e??{})):e}function US(n,e){if(!n)return e;if(!e)return n;const t=bn(Object.create(null),n);for(const i in e)t[i]=Zn(n[i],e[i]);return t}function Ev(){return{app:null,config:{isNativeTag:by,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NS=0;function FS(n,e){return function(i,r=null){ft(i)||(i=bn({},i)),r!=null&&!Jt(r)&&(r=null);const s=Ev(),o=new WeakSet;let a=!1;const l=s.app={_uid:NS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gM,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ft(c.install)?(o.add(c),c.install(l,...u)):ft(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Nt(i,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,_p(f.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=pl;pl=l;try{return c()}finally{pl=u}}};return l}}let pl=null;function eu(n,e){if(Bn){let t=Bn.provides;const i=Bn.parent&&Bn.parent.provides;i===t&&(t=Bn.provides=Object.create(i)),t[n]=e}}function Tr(n,e,t=!1){const i=Bn||Vi;if(i||pl){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:pl._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ft(e)?e.call(i&&i.proxy):e}}const Tv={},wv=()=>Object.create(Tv),Av=n=>Object.getPrototypeOf(n)===Tv;function BS(n,e,t,i=!1){const r={},s=wv();n.propsDefaults=Object.create(null),Cv(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:rS(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function kS(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Bt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(tf(n.emitsOptions,f))continue;const d=e[f];if(l)if(Pt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Rr(f);r[g]=Fh(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Cv(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Pt(e,h)&&((u=za(h))===h||!Pt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Fh(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Pt(e,h))&&(delete s[h],c=!0)}c&&qr(n.attrs,"set","")}function Cv(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fl(l))continue;const c=e[l];let u;r&&Pt(r,u=Rr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:tf(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Bt(t),c=a||on;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Fh(r,l,h,c[h],n,!Pt(c,h))}}return o}function Fh(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ft(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Yl(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===za(t))&&(i=!0))}return i}function Rv(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ft(n)){const u=h=>{l=!0;const[f,d]=Rv(h,e,!0);bn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Jt(n)&&i.set(n,da),da;if(at(s))for(let u=0;u<s.length;u++){const h=Rr(s[u]);Em(h)&&(o[h]=on)}else if(s)for(const u in s){const h=Rr(u);if(Em(h)){const f=s[u],d=o[h]=at(f)||ft(f)?{type:f}:bn({},f);if(d){const g=Am(Boolean,d.type),_=Am(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||Pt(d,"default"))&&a.push(h)}}}const c=[o,a];return Jt(n)&&i.set(n,c),c}function Em(n){return n[0]!=="$"&&!fl(n)}function Tm(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function wm(n,e){return Tm(n)===Tm(e)}function Am(n,e){return at(e)?e.findIndex(t=>wm(t,n)):ft(e)&&wm(e,n)?0:-1}const Pv=n=>n[0]==="_"||n==="$stable",pp=n=>at(n)?n.map(_r):[_r(n)],zS=(n,e,t)=>{if(e._n)return e;const i=wa((...r)=>pp(e(...r)),t);return i._c=!1,i},Lv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Pv(r))continue;const s=n[r];if(ft(s))e[r]=zS(r,s,i);else if(s!=null){const o=pp(s);e[r]=()=>o}}},Dv=(n,e)=>{const t=pp(e);n.slots.default=()=>t},HS=(n,e)=>{const t=n.slots=wv();if(n.vnode.shapeFlag&32){const i=e._;i?(bn(t,e),$g(t,"_",i,!0)):Lv(e,t)}else e&&Dv(n,e)},VS=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=on;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(bn(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Lv(e,r)),o=e}else e&&(Dv(n,e),o={default:1});if(s)for(const a in r)!Pv(a)&&o[a]==null&&delete r[a]};function Bh(n,e,t,i,r=!1){if(at(n)){n.forEach((f,d)=>Bh(f,e&&(at(e)?e[d]:e),t,i,r));return}if(Qc(i)&&!r)return;const s=i.shapeFlag&4?_p(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===on?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(vn(c)?(u[c]=null,Pt(h,c)&&(h[c]=null)):yi(c)&&(c.value=null)),ft(l))Rs(l,a,12,[o,u]);else{const f=vn(l),d=yi(l);if(f||d){const g=()=>{if(n.f){const _=f?Pt(h,l)?h[l]:u[l]:l.value;r?at(_)&&ep(_,s):at(_)?_.includes(s)||_.push(s):f?(u[l]=[s],Pt(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Pt(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,ui(g,t)):g()}}}const ui=MS;function GS(n){return WS(n)}function WS(n,e){const t=qg();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Hi,insertStaticContent:g}=n,_=(L,z,Z,ne=null,F=null,ce=null,he=void 0,C=null,x=!!z.dynamicChildren)=>{if(L===z)return;L&&!_o(L,z)&&(ne=$(L),me(L,F,ce,!0),L=null),z.patchFlag===-2&&(x=!1,z.dynamicChildren=null);const{type:B,ref:ee,shapeFlag:se}=z;switch(B){case of:p(L,z,Z,ne);break;case Ri:m(L,z,Z,ne);break;case nu:L==null&&M(z,Z,ne,he);break;case Fn:D(L,z,Z,ne,F,ce,he,C,x);break;default:se&1?P(L,z,Z,ne,F,ce,he,C,x):se&6?q(L,z,Z,ne,F,ce,he,C,x):(se&64||se&128)&&B.process(L,z,Z,ne,F,ce,he,C,x,De)}ee!=null&&F&&Bh(ee,L&&L.ref,ce,z||L,!z)},p=(L,z,Z,ne)=>{if(L==null)i(z.el=a(z.children),Z,ne);else{const F=z.el=L.el;z.children!==L.children&&c(F,z.children)}},m=(L,z,Z,ne)=>{L==null?i(z.el=l(z.children||""),Z,ne):z.el=L.el},M=(L,z,Z,ne)=>{[L.el,L.anchor]=g(L.children,z,Z,ne,L.el,L.anchor)},v=({el:L,anchor:z},Z,ne)=>{let F;for(;L&&L!==z;)F=f(L),i(L,Z,ne),L=F;i(z,Z,ne)},S=({el:L,anchor:z})=>{let Z;for(;L&&L!==z;)Z=f(L),r(L),L=Z;r(z)},P=(L,z,Z,ne,F,ce,he,C,x)=>{z.type==="svg"?he="svg":z.type==="math"&&(he="mathml"),L==null?E(z,Z,ne,F,ce,he,C,x):b(L,z,F,ce,he,C,x)},E=(L,z,Z,ne,F,ce,he,C)=>{let x,B;const{props:ee,shapeFlag:se,transition:J,dirs:Me}=L;if(x=L.el=o(L.type,ce,ee&&ee.is,ee),se&8?u(x,L.children):se&16&&O(L.children,x,null,ne,F,Cf(L,ce),he,C),Me&&Ks(L,null,ne,"created"),w(x,L,L.scopeId,he,ne),ee){for(const be in ee)be!=="value"&&!fl(be)&&s(x,be,null,ee[be],ce,L.children,ne,F,ie);"value"in ee&&s(x,"value",null,ee.value,ce),(B=ee.onVnodeBeforeMount)&&dr(B,ne,L)}Me&&Ks(L,null,ne,"beforeMount");const ue=XS(F,J);ue&&J.beforeEnter(x),i(x,z,Z),((B=ee&&ee.onVnodeMounted)||ue||Me)&&ui(()=>{B&&dr(B,ne,L),ue&&J.enter(x),Me&&Ks(L,null,ne,"mounted")},F)},w=(L,z,Z,ne,F)=>{if(Z&&d(L,Z),ne)for(let ce=0;ce<ne.length;ce++)d(L,ne[ce]);if(F){let ce=F.subTree;if(z===ce){const he=F.vnode;w(L,he,he.scopeId,he.slotScopeIds,F.parent)}}},O=(L,z,Z,ne,F,ce,he,C,x=0)=>{for(let B=x;B<L.length;B++){const ee=L[B]=C?xs(L[B]):_r(L[B]);_(null,ee,z,Z,ne,F,ce,he,C)}},b=(L,z,Z,ne,F,ce,he)=>{const C=z.el=L.el;let{patchFlag:x,dynamicChildren:B,dirs:ee}=z;x|=L.patchFlag&16;const se=L.props||on,J=z.props||on;let Me;if(Z&&Zs(Z,!1),(Me=J.onVnodeBeforeUpdate)&&dr(Me,Z,z,L),ee&&Ks(z,L,Z,"beforeUpdate"),Z&&Zs(Z,!0),B?y(L.dynamicChildren,B,C,Z,ne,Cf(z,F),ce):he||W(L,z,C,null,Z,ne,Cf(z,F),ce,!1),x>0){if(x&16)U(C,z,se,J,Z,ne,F);else if(x&2&&se.class!==J.class&&s(C,"class",null,J.class,F),x&4&&s(C,"style",se.style,J.style,F),x&8){const ue=z.dynamicProps;for(let be=0;be<ue.length;be++){const we=ue[be],Se=se[we],Le=J[we];(Le!==Se||we==="value")&&s(C,we,Se,Le,F,L.children,Z,ne,ie)}}x&1&&L.children!==z.children&&u(C,z.children)}else!he&&B==null&&U(C,z,se,J,Z,ne,F);((Me=J.onVnodeUpdated)||ee)&&ui(()=>{Me&&dr(Me,Z,z,L),ee&&Ks(z,L,Z,"updated")},ne)},y=(L,z,Z,ne,F,ce,he)=>{for(let C=0;C<z.length;C++){const x=L[C],B=z[C],ee=x.el&&(x.type===Fn||!_o(x,B)||x.shapeFlag&70)?h(x.el):Z;_(x,B,ee,null,ne,F,ce,he,!0)}},U=(L,z,Z,ne,F,ce,he)=>{if(Z!==ne){if(Z!==on)for(const C in Z)!fl(C)&&!(C in ne)&&s(L,C,Z[C],null,he,z.children,F,ce,ie);for(const C in ne){if(fl(C))continue;const x=ne[C],B=Z[C];x!==B&&C!=="value"&&s(L,C,B,x,he,z.children,F,ce,ie)}"value"in ne&&s(L,"value",Z.value,ne.value,he)}},D=(L,z,Z,ne,F,ce,he,C,x)=>{const B=z.el=L?L.el:a(""),ee=z.anchor=L?L.anchor:a("");let{patchFlag:se,dynamicChildren:J,slotScopeIds:Me}=z;Me&&(C=C?C.concat(Me):Me),L==null?(i(B,Z,ne),i(ee,Z,ne),O(z.children||[],Z,ee,F,ce,he,C,x)):se>0&&se&64&&J&&L.dynamicChildren?(y(L.dynamicChildren,J,Z,F,ce,he,C),(z.key!=null||F&&z===F.subTree)&&Iv(L,z,!0)):W(L,z,Z,ee,F,ce,he,C,x)},q=(L,z,Z,ne,F,ce,he,C,x)=>{z.slotScopeIds=C,L==null?z.shapeFlag&512?F.ctx.activate(z,Z,ne,he,x):G(z,Z,ne,F,ce,he,x):k(L,z,x)},G=(L,z,Z,ne,F,ce,he)=>{const C=L.component=cM(L,ne,F);if(sf(L)&&(C.ctx.renderer=De),fM(C),C.asyncDep){if(F&&F.registerDep(C,H,he),!L.el){const x=C.subTree=Nt(Ri);m(null,x,z,Z)}}else H(C,L,z,Z,F,ce,he)},k=(L,z,Z)=>{const ne=z.component=L.component;if(vS(L,z,Z))if(ne.asyncDep&&!ne.asyncResolved){X(ne,z,Z);return}else ne.next=z,hS(ne.update),ne.effect.dirty=!0,ne.update();else z.el=L.el,ne.vnode=z},H=(L,z,Z,ne,F,ce,he)=>{const C=()=>{if(L.isMounted){let{next:ee,bu:se,u:J,parent:Me,vnode:ue}=L;{const ze=Ov(L);if(ze){ee&&(ee.el=ue.el,X(L,ee,he)),ze.asyncDep.then(()=>{L.isUnmounted||C()});return}}let be=ee,we;Zs(L,!1),ee?(ee.el=ue.el,X(L,ee,he)):ee=ue,se&&Ef(se),(we=ee.props&&ee.props.onVnodeBeforeUpdate)&&dr(we,Me,ee,ue),Zs(L,!0);const Se=wf(L),Le=L.subTree;L.subTree=Se,_(Le,Se,h(Le.el),$(Le),L,F,ce),ee.el=Se.el,be===null&&xS(L,Se.el),J&&ui(J,F),(we=ee.props&&ee.props.onVnodeUpdated)&&ui(()=>dr(we,Me,ee,ue),F)}else{let ee;const{el:se,props:J}=z,{bm:Me,m:ue,parent:be}=L,we=Qc(z);if(Zs(L,!1),Me&&Ef(Me),!we&&(ee=J&&J.onVnodeBeforeMount)&&dr(ee,be,z),Zs(L,!0),se&&I){const Se=()=>{L.subTree=wf(L),I(se,L.subTree,L,F,null)};we?z.type.__asyncLoader().then(()=>!L.isUnmounted&&Se()):Se()}else{const Se=L.subTree=wf(L);_(null,Se,Z,ne,L,F,ce),z.el=Se.el}if(ue&&ui(ue,F),!we&&(ee=J&&J.onVnodeMounted)){const Se=z;ui(()=>dr(ee,be,Se),F)}(z.shapeFlag&256||be&&Qc(be.vnode)&&be.vnode.shapeFlag&256)&&L.a&&ui(L.a,F),L.isMounted=!0,z=Z=ne=null}},x=L.effect=new np(C,Hi,()=>up(B),L.scope),B=L.update=()=>{x.dirty&&x.run()};B.id=L.uid,Zs(L,!0),B()},X=(L,z,Z)=>{z.component=L;const ne=L.vnode.props;L.vnode=z,L.next=null,kS(L,z.props,ne,Z),VS(L,z.children,Z),Ws(),gm(L),Xs()},W=(L,z,Z,ne,F,ce,he,C,x=!1)=>{const B=L&&L.children,ee=L?L.shapeFlag:0,se=z.children,{patchFlag:J,shapeFlag:Me}=z;if(J>0){if(J&128){T(B,se,Z,ne,F,ce,he,C,x);return}else if(J&256){ve(B,se,Z,ne,F,ce,he,C,x);return}}Me&8?(ee&16&&ie(B,F,ce),se!==B&&u(Z,se)):ee&16?Me&16?T(B,se,Z,ne,F,ce,he,C,x):ie(B,F,ce,!0):(ee&8&&u(Z,""),Me&16&&O(se,Z,ne,F,ce,he,C,x))},ve=(L,z,Z,ne,F,ce,he,C,x)=>{L=L||da,z=z||da;const B=L.length,ee=z.length,se=Math.min(B,ee);let J;for(J=0;J<se;J++){const Me=z[J]=x?xs(z[J]):_r(z[J]);_(L[J],Me,Z,null,F,ce,he,C,x)}B>ee?ie(L,F,ce,!0,!1,se):O(z,Z,ne,F,ce,he,C,x,se)},T=(L,z,Z,ne,F,ce,he,C,x)=>{let B=0;const ee=z.length;let se=L.length-1,J=ee-1;for(;B<=se&&B<=J;){const Me=L[B],ue=z[B]=x?xs(z[B]):_r(z[B]);if(_o(Me,ue))_(Me,ue,Z,null,F,ce,he,C,x);else break;B++}for(;B<=se&&B<=J;){const Me=L[se],ue=z[J]=x?xs(z[J]):_r(z[J]);if(_o(Me,ue))_(Me,ue,Z,null,F,ce,he,C,x);else break;se--,J--}if(B>se){if(B<=J){const Me=J+1,ue=Me<ee?z[Me].el:ne;for(;B<=J;)_(null,z[B]=x?xs(z[B]):_r(z[B]),Z,ue,F,ce,he,C,x),B++}}else if(B>J)for(;B<=se;)me(L[B],F,ce,!0),B++;else{const Me=B,ue=B,be=new Map;for(B=ue;B<=J;B++){const Xe=z[B]=x?xs(z[B]):_r(z[B]);Xe.key!=null&&be.set(Xe.key,B)}let we,Se=0;const Le=J-ue+1;let ze=!1,Je=0;const Ie=new Array(Le);for(B=0;B<Le;B++)Ie[B]=0;for(B=Me;B<=se;B++){const Xe=L[B];if(Se>=Le){me(Xe,F,ce,!0);continue}let rt;if(Xe.key!=null)rt=be.get(Xe.key);else for(we=ue;we<=J;we++)if(Ie[we-ue]===0&&_o(Xe,z[we])){rt=we;break}rt===void 0?me(Xe,F,ce,!0):(Ie[rt-ue]=B+1,rt>=Je?Je=rt:ze=!0,_(Xe,z[rt],Z,null,F,ce,he,C,x),Se++)}const je=ze?$S(Ie):da;for(we=je.length-1,B=Le-1;B>=0;B--){const Xe=ue+B,rt=z[Xe],Y=Xe+1<ee?z[Xe+1].el:ne;Ie[B]===0?_(null,rt,Z,Y,F,ce,he,C,x):ze&&(we<0||B!==je[we]?Ee(rt,Z,Y,2):we--)}}},Ee=(L,z,Z,ne,F=null)=>{const{el:ce,type:he,transition:C,children:x,shapeFlag:B}=L;if(B&6){Ee(L.component.subTree,z,Z,ne);return}if(B&128){L.suspense.move(z,Z,ne);return}if(B&64){he.move(L,z,Z,De);return}if(he===Fn){i(ce,z,Z);for(let se=0;se<x.length;se++)Ee(x[se],z,Z,ne);i(L.anchor,z,Z);return}if(he===nu){v(L,z,Z);return}if(ne!==2&&B&1&&C)if(ne===0)C.beforeEnter(ce),i(ce,z,Z),ui(()=>C.enter(ce),F);else{const{leave:se,delayLeave:J,afterLeave:Me}=C,ue=()=>i(ce,z,Z),be=()=>{se(ce,()=>{ue(),Me&&Me()})};J?J(ce,ue,be):be()}else i(ce,z,Z)},me=(L,z,Z,ne=!1,F=!1)=>{const{type:ce,props:he,ref:C,children:x,dynamicChildren:B,shapeFlag:ee,patchFlag:se,dirs:J,memoIndex:Me}=L;if(se===-2&&(F=!1),C!=null&&Bh(C,null,Z,L,!0),Me!=null&&(z.renderCache[Me]=void 0),ee&256){z.ctx.deactivate(L);return}const ue=ee&1&&J,be=!Qc(L);let we;if(be&&(we=he&&he.onVnodeBeforeUnmount)&&dr(we,z,L),ee&6)V(L.component,Z,ne);else{if(ee&128){L.suspense.unmount(Z,ne);return}ue&&Ks(L,null,z,"beforeUnmount"),ee&64?L.type.remove(L,z,Z,De,ne):B&&(ce!==Fn||se>0&&se&64)?ie(B,z,Z,!1,!0):(ce===Fn&&se&384||!F&&ee&16)&&ie(x,z,Z),ne&&Ue(L)}(be&&(we=he&&he.onVnodeUnmounted)||ue)&&ui(()=>{we&&dr(we,z,L),ue&&Ks(L,null,z,"unmounted")},Z)},Ue=L=>{const{type:z,el:Z,anchor:ne,transition:F}=L;if(z===Fn){re(Z,ne);return}if(z===nu){S(L);return}const ce=()=>{r(Z),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(L.shapeFlag&1&&F&&!F.persisted){const{leave:he,delayLeave:C}=F,x=()=>he(Z,ce);C?C(L.el,ce,x):x()}else ce()},re=(L,z)=>{let Z;for(;L!==z;)Z=f(L),r(L),L=Z;r(z)},V=(L,z,Z)=>{const{bum:ne,scope:F,update:ce,subTree:he,um:C,m:x,a:B}=L;Cm(x),Cm(B),ne&&Ef(ne),F.stop(),ce&&(ce.active=!1,me(he,L,z,Z)),C&&ui(C,z),ui(()=>{L.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},ie=(L,z,Z,ne=!1,F=!1,ce=0)=>{for(let he=ce;he<L.length;he++)me(L[he],z,Z,ne,F)},$=L=>L.shapeFlag&6?$(L.component.subTree):L.shapeFlag&128?L.suspense.next():f(L.anchor||L.el);let ge=!1;const Re=(L,z,Z)=>{L==null?z._vnode&&me(z._vnode,null,null,!0):_(z._vnode||null,L,z,null,null,null,Z),ge||(ge=!0,gm(),_v(),ge=!1),z._vnode=L},De={p:_,um:me,m:Ee,r:Ue,mt:G,mc:O,pc:W,pbc:y,n:$,o:n};let Oe,I;return{render:Re,hydrate:Oe,createApp:FS(Re,Oe)}}function Cf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Zs({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function XS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Iv(n,e,t=!1){const i=n.children,r=e.children;if(at(i)&&at(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xs(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Iv(o,a)),a.type===of&&(a.el=o.el)}}function $S(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ov(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ov(e)}function Cm(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const qS=Symbol.for("v-scx"),YS=()=>Tr(qS),uc={};function tu(n,e,t){return Uv(n,e,t)}function Uv(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=on){if(e&&s){const E=e;e=(...w)=>{E(...w),P()}}const l=Bn,c=E=>i===!0?E:mo(E,i===!1?1:void 0);let u,h=!1,f=!1;if(yi(n)?(u=()=>n.value,h=yu(n)):hl(n)?(u=()=>c(n),h=!0):at(n)?(f=!0,h=n.some(E=>hl(E)||yu(E)),u=()=>n.map(E=>{if(yi(E))return E.value;if(hl(E))return c(E);if(ft(E))return Rs(E,l,2)})):ft(n)?e?u=()=>Rs(n,l,2):u=()=>(d&&d(),$i(n,l,3,[g])):u=Hi,e&&i){const E=u;u=()=>mo(E())}let d,g=E=>{d=v.onStop=()=>{Rs(E,l,4),d=v.onStop=void 0}},_;if(lf)if(g=Hi,e?t&&$i(e,l,3,[u(),f?[]:void 0,g]):u(),r==="sync"){const E=YS();_=E.__watcherHandles||(E.__watcherHandles=[])}else return Hi;let p=f?new Array(n.length).fill(uc):uc;const m=()=>{if(!(!v.active||!v.dirty))if(e){const E=v.run();(i||h||(f?E.some((w,O)=>Ns(w,p[O])):Ns(E,p)))&&(d&&d(),$i(e,l,3,[E,p===uc?void 0:f&&p[0]===uc?[]:p,g]),p=E)}else v.run()};m.allowRecurse=!!e;let M;r==="sync"?M=m:r==="post"?M=()=>ui(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),M=()=>up(m));const v=new np(u,Hi,M),S=By(),P=()=>{v.stop(),S&&ep(S.effects,v)};return e?t?m():p=v.run():r==="post"?ui(v.run.bind(v),l&&l.suspense):v.run(),_&&_.push(P),P}function jS(n,e,t){const i=this.proxy,r=vn(n)?n.includes(".")?Nv(i,n):()=>i[n]:n.bind(i,i);let s;ft(e)?s=e:(s=e.handler,t=e);const o=Yl(this),a=Uv(r,s.bind(i),t);return o(),a}function Nv(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function mo(n,e=1/0,t){if(e<=0||!Jt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yi(n))mo(n.value,e,t);else if(at(n))for(let i=0;i<n.length;i++)mo(n[i],e,t);else if(Vg(n)||pa(n))n.forEach(i=>{mo(i,e,t)});else if(Xg(n)){for(const i in n)mo(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mo(n[i],e,t)}return n}const sf=n=>n.type.__isKeepAlive;function KS(n,e){Fv(n,"a",e)}function ZS(n,e){Fv(n,"da",e)}function Fv(n,e,t=Bn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(rf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)sf(r.parent.vnode)&&JS(i,e,t,r),r=r.parent}}function JS(n,e,t,i){const r=rf(e,n,i,!0);hp(()=>{ep(i[e],r)},t)}const vs=Symbol("_leaveCb"),fc=Symbol("_enterCb");function QS(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $s(()=>{n.isMounted=!0}),Sv(()=>{n.isUnmounting=!0}),n}const Ui=[Function,Array],Bv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ui,onEnter:Ui,onAfterEnter:Ui,onEnterCancelled:Ui,onBeforeLeave:Ui,onLeave:Ui,onAfterLeave:Ui,onLeaveCancelled:Ui,onBeforeAppear:Ui,onAppear:Ui,onAfterAppear:Ui,onAppearCancelled:Ui},kv=n=>{const e=n.subTree;return e.component?kv(e.component):e},eM={name:"BaseTransition",props:Bv,setup(n,{slots:e}){const t=uM(),i=QS();return()=>{const r=e.default&&Hv(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const f of r)if(f.type!==Ri){s=f;break}}const o=Bt(n),{mode:a}=o;if(i.isLeaving)return Rf(s);const l=Rm(s);if(!l)return Rf(s);let c=kh(l,o,i,t,f=>c=f);Eu(l,c);const u=t.subTree,h=u&&Rm(u);if(h&&h.type!==Ri&&!_o(l,h)&&kv(t).type!==Ri){const f=kh(h,o,i,t);if(Eu(h,f),a==="out-in"&&l.type!==Ri)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Rf(s);a==="in-out"&&l.type!==Ri&&(f.delayLeave=(d,g,_)=>{const p=zv(i,h);p[String(h.key)]=h,d[vs]=()=>{g(),d[vs]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return s}}},tM=eM;function zv(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function kh(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:M,onAppearCancelled:v}=e,S=String(n.key),P=zv(t,n),E=(b,y)=>{b&&$i(b,i,9,y)},w=(b,y)=>{const U=y[1];E(b,y),at(b)?b.every(D=>D.length<=1)&&U():b.length<=1&&U()},O={mode:o,persisted:a,beforeEnter(b){let y=l;if(!t.isMounted)if(s)y=p||l;else return;b[vs]&&b[vs](!0);const U=P[S];U&&_o(n,U)&&U.el[vs]&&U.el[vs](),E(y,[b])},enter(b){let y=c,U=u,D=h;if(!t.isMounted)if(s)y=m||c,U=M||u,D=v||h;else return;let q=!1;const G=b[fc]=k=>{q||(q=!0,k?E(D,[b]):E(U,[b]),O.delayedLeave&&O.delayedLeave(),b[fc]=void 0)};y?w(y,[b,G]):G()},leave(b,y){const U=String(n.key);if(b[fc]&&b[fc](!0),t.isUnmounting)return y();E(f,[b]);let D=!1;const q=b[vs]=G=>{D||(D=!0,y(),G?E(_,[b]):E(g,[b]),b[vs]=void 0,P[U]===n&&delete P[U])};P[U]=n,d?w(d,[b,q]):q()},clone(b){const y=kh(b,e,t,i,r);return r&&r(y),y}};return O}function Rf(n){if(sf(n))return n=Fs(n),n.children=null,n}function Rm(n){if(!sf(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ft(t.default))return t.default()}}function Eu(n,e){n.shapeFlag&6&&n.component?Eu(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Hv(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Fn?(o.patchFlag&128&&r++,i=i.concat(Hv(o.children,e,a))):(e||o.type!==Ri)&&i.push(a!=null?Fs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const nM=n=>n.__isTeleport,Fn=Symbol.for("v-fgt"),of=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),nu=Symbol.for("v-stc"),ml=[];let or=null;function Ct(n=!1){ml.push(or=n?null:[])}function iM(){ml.pop(),or=ml[ml.length-1]||null}let Ol=1;function Pm(n){Ol+=n}function Vv(n){return n.dynamicChildren=Ol>0?or||da:null,iM(),Ol>0&&or&&or.push(n),n}function It(n,e,t,i,r,s){return Vv(Ne(n,e,t,i,r,s,!0))}function Gv(n,e,t,i,r){return Vv(Nt(n,e,t,i,r,!0))}function zh(n){return n?n.__v_isVNode===!0:!1}function _o(n,e){return n.type===e.type&&n.key===e.key}const Wv=({key:n})=>n??null,iu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vn(n)||yi(n)||ft(n)?{i:Vi,r:n,k:e,f:!!t}:n:null);function Ne(n,e=null,t=null,i=0,r=null,s=n===Fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wv(e),ref:e&&iu(e),scopeId:nf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vi};return a?(mp(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vn(t)?8:16),Ol>0&&!o&&or&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&or.push(l),l}const Nt=rM;function rM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===xv)&&(n=Ri),zh(n)){const a=Fs(n,e,!0);return t&&mp(a,t),Ol>0&&!s&&or&&(a.shapeFlag&6?or[or.indexOf(n)]=a:or.push(a)),a.patchFlag=-2,a}if(_M(n)&&(n=n.__vccOpts),e){e=sM(e);let{class:a,style:l}=e;a&&!vn(a)&&(e.class=Ju(a)),Jt(l)&&(cv(l)&&!at(l)&&(l=bn({},l)),e.style=Zu(l))}const o=vn(n)?1:SS(n)?128:nM(n)?64:Jt(n)?4:ft(n)?2:0;return Ne(n,e,t,i,r,o,s,!0)}function sM(n){return n?cv(n)||Av(n)?bn({},n):n:null}function Fs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?oM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wv(c),ref:e&&e.ref?t&&s?at(s)?s.concat(iu(e)):[s,iu(e)]:iu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Eu(u,l.clone(u)),u}function Tu(n=" ",e=0){return Nt(of,null,n,e)}function af(n,e){const t=Nt(nu,null,n);return t.staticCount=e,t}function Lm(n="",e=!1){return e?(Ct(),Gv(Ri,null,n)):Nt(Ri,null,n)}function _r(n){return n==null||typeof n=="boolean"?Nt(Ri):at(n)?Nt(Fn,null,n.slice()):typeof n=="object"?xs(n):Nt(of,null,String(n))}function xs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fs(n)}function mp(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(at(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),mp(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Av(e)?e._ctx=Vi:r===3&&Vi&&(Vi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ft(e)?(e={default:e,_ctx:Vi},t=32):(e=String(e),i&64?(t=16,e=[Tu(e)]):t=8);n.children=e,n.shapeFlag|=t}function oM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ju([e.class,i.class]));else if(r==="style")e.style=Zu([e.style,i.style]);else if(qu(r)){const s=e[r],o=i[r];o&&s!==o&&!(at(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dr(n,e,t,i=null){$i(n,e,7,[t,i])}const aM=Ev();let lM=0;function cM(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||aM,s={uid:lM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rv(i,r),emitsOptions:vv(i,r),emit:null,emitted:null,propsDefaults:on,inheritAttrs:i.inheritAttrs,ctx:on,data:on,props:on,attrs:on,slots:on,refs:on,setupState:on,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mS.bind(null,s),n.ce&&n.ce(s),s}let Bn=null;const uM=()=>Bn||Vi;let wu,Hh;{const n=qg(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};wu=e("__VUE_INSTANCE_SETTERS__",t=>Bn=t),Hh=e("__VUE_SSR_SETTERS__",t=>lf=t)}const Yl=n=>{const e=Bn;return wu(n),n.scope.on(),()=>{n.scope.off(),wu(e)}},Dm=()=>{Bn&&Bn.scope.off(),wu(null)};function Xv(n){return n.vnode.shapeFlag&4}let lf=!1;function fM(n,e=!1){e&&Hh(e);const{props:t,children:i}=n.vnode,r=Xv(n);BS(n,t,r,e),HS(n,i);const s=r?hM(n,e):void 0;return e&&Hh(!1),s}function hM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,PS);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?pM(n):null,s=Yl(n);Ws();const o=Rs(i,n,0,[n.props,r]);if(Xs(),s(),Gg(o)){if(o.then(Dm,Dm),e)return o.then(a=>{Im(n,a,e)}).catch(a=>{ef(a,n,0)});n.asyncDep=o}else Im(n,o,e)}else $v(n,e)}function Im(n,e,t){ft(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Jt(e)&&(n.setupState=dv(e)),$v(n,t)}let Om;function $v(n,e,t){const i=n.type;if(!n.render){if(!e&&Om&&!i.render){const r=i.template||dp(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=bn(bn({isCustomElement:s,delimiters:a},o),l);i.render=Om(r,c)}}n.render=i.render||Hi}{const r=Yl(n);Ws();try{LS(n)}finally{Xs(),r()}}}const dM={get(n,e){return xi(n,"get",""),n[e]}};function pM(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,dM),slots:n.slots,emit:n.emit,expose:e}}function _p(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dv(sS(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in dl)return dl[t](n)},has(e,t){return t in e||t in dl}})):n.proxy}function mM(n,e=!0){return ft(n)?n.displayName||n.name:n.name||e&&n.__name}function _M(n){return ft(n)&&"__vccOpts"in n}const xr=(n,e)=>oS(n,e,lf);function gp(n,e,t){const i=arguments.length;return i===2?Jt(e)&&!at(e)?zh(e)?Nt(n,null,[e]):Nt(n,e):Nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zh(t)&&(t=[t]),Nt(n,e,t))}const gM="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const vM="http://www.w3.org/2000/svg",xM="http://www.w3.org/1998/Math/MathML",Br=typeof document<"u"?document:null,Um=Br&&Br.createElement("template"),yM={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Br.createElementNS(vM,n):e==="mathml"?Br.createElementNS(xM,n):t?Br.createElement(n,{is:t}):Br.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Br.createTextNode(n),createComment:n=>Br.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Br.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Um.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Um.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},os="transition",$a="animation",Ul=Symbol("_vtc"),vp=(n,{slots:e})=>gp(tM,SM(n),e);vp.displayName="Transition";const qv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};vp.props=bn({},Bv,qv);const Js=(n,e=[])=>{at(n)?n.forEach(t=>t(...e)):n&&n(...e)},Nm=n=>n?at(n)?n.some(e=>e.length>1):n.length>1:!1;function SM(n){const e={};for(const D in n)D in qv||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=MM(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:M,onEnterCancelled:v,onLeave:S,onLeaveCancelled:P,onBeforeAppear:E=m,onAppear:w=M,onAppearCancelled:O=v}=e,b=(D,q,G)=>{Qs(D,q?u:a),Qs(D,q?c:o),G&&G()},y=(D,q)=>{D._isLeaving=!1,Qs(D,h),Qs(D,d),Qs(D,f),q&&q()},U=D=>(q,G)=>{const k=D?w:M,H=()=>b(q,D,G);Js(k,[q,H]),Fm(()=>{Qs(q,D?l:s),as(q,D?u:a),Nm(k)||Bm(q,i,_,H)})};return bn(e,{onBeforeEnter(D){Js(m,[D]),as(D,s),as(D,o)},onBeforeAppear(D){Js(E,[D]),as(D,l),as(D,c)},onEnter:U(!1),onAppear:U(!0),onLeave(D,q){D._isLeaving=!0;const G=()=>y(D,q);as(D,h),as(D,f),TM(),Fm(()=>{D._isLeaving&&(Qs(D,h),as(D,d),Nm(S)||Bm(D,i,p,G))}),Js(S,[D,G])},onEnterCancelled(D){b(D,!1),Js(v,[D])},onAppearCancelled(D){b(D,!0),Js(O,[D])},onLeaveCancelled(D){y(D),Js(P,[D])}})}function MM(n){if(n==null)return null;if(Jt(n))return[Pf(n.enter),Pf(n.leave)];{const e=Pf(n);return[e,e]}}function Pf(n){return Ry(n)}function as(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ul]||(n[Ul]=new Set)).add(e)}function Qs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ul];t&&(t.delete(e),t.size||(n[Ul]=void 0))}function Fm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let bM=0;function Bm(n,e,t,i){const r=n._endId=++bM,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=EM(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),s()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function EM(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${os}Delay`),s=i(`${os}Duration`),o=km(r,s),a=i(`${$a}Delay`),l=i(`${$a}Duration`),c=km(a,l);let u=null,h=0,f=0;e===os?o>0&&(u=os,h=o,f=s.length):e===$a?c>0&&(u=$a,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?os:$a:null,f=u?u===os?s.length:l.length:0);const d=u===os&&/\b(transform|all)(,|$)/.test(i(`${os}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function km(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>zm(t)+zm(n[i])))}function zm(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function TM(){return document.body.offsetHeight}function wM(n,e,t){const i=n[Ul];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Hm=Symbol("_vod"),AM=Symbol("_vsh"),CM=Symbol(""),RM=/(^|;)\s*display\s*:/;function PM(n,e,t){const i=n.style,r=vn(t);let s=!1;if(t&&!r){if(e)if(vn(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ru(i,a,"")}else for(const o in e)t[o]==null&&ru(i,o,"");for(const o in t)o==="display"&&(s=!0),ru(i,o,t[o])}else if(r){if(e!==t){const o=i[CM];o&&(t+=";"+o),i.cssText=t,s=RM.test(t)}}else e&&n.removeAttribute("style");Hm in n&&(n[Hm]=s?i.display:"",n[AM]&&(i.display="none"))}const Vm=/\s*!important$/;function ru(n,e,t){if(at(t))t.forEach(i=>ru(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=LM(n,e);Vm.test(t)?n.setProperty(za(i),t.replace(Vm,""),"important"):n[i]=t}}const Gm=["Webkit","Moz","ms"],Lf={};function LM(n,e){const t=Lf[e];if(t)return t;let i=Rr(e);if(i!=="filter"&&i in n)return Lf[e]=i;i=Ku(i);for(let r=0;r<Gm.length;r++){const s=Gm[r]+i;if(s in n)return Lf[e]=s}return e}const Wm="http://www.w3.org/1999/xlink";function Xm(n,e,t,i,r,s=Uy(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wm,e.slice(6,e.length)):n.setAttributeNS(Wm,e,t):t==null||s&&!Yg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Gs(t)?String(t):t)}function DM(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Yg(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function IM(n,e,t,i){n.addEventListener(e,t,i)}function OM(n,e,t,i){n.removeEventListener(e,t,i)}const $m=Symbol("_vei");function UM(n,e,t,i,r=null){const s=n[$m]||(n[$m]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=NM(e);if(i){const c=s[e]=kM(i,r);IM(n,a,c,l)}else o&&(OM(n,a,o,l),s[e]=void 0)}}const qm=/(?:Once|Passive|Capture)$/;function NM(n){let e;if(qm.test(n)){e={};let i;for(;i=n.match(qm);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):za(n.slice(2)),e]}let Df=0;const FM=Promise.resolve(),BM=()=>Df||(FM.then(()=>Df=0),Df=Date.now());function kM(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;$i(zM(i,t.value),e,5,[i])};return t.value=n,t.attached=BM(),t}function zM(n,e){if(at(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ym=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,HM=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?wM(n,i,c):e==="style"?PM(n,t,i):qu(e)?Qd(e)||UM(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VM(n,e,i,c))?(DM(n,e,i,s,o,a,l),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xm(n,e,i,c,o,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xm(n,e,i,c))};function VM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ym(e)&&ft(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ym(e)&&vn(t)?!1:e in n}const GM=["ctrl","shift","alt","meta"],WM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>GM.some(t=>n[`${t}Key`]&&!e.includes(t))},hc=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=WM[e[o]];if(a&&a(r,e))return}return n(r,...s)})},XM=bn({patchProp:HM},yM);let jm;function $M(){return jm||(jm=GS(XM))}const qM=(...n)=>{const e=$M().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=jM(i);if(!r)return;const s=e._component;!ft(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,YM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function YM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function jM(n){return vn(n)?document.querySelector(n):n}const KM="/gh.png",ZM="/ln.png",Yn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},JM={data(){return{currentYear:new Date().getFullYear()}}},Yv=n=>(Qr("data-v-1957f146"),n=n(),es(),n),QM={class:"footer"},eb={class:"container"},tb=Yv(()=>Ne("a",{href:"https://github.com/sameerCOfficial",target:"_blank"},[Ne("img",{class:"github",src:KM,alt:"Github",width:"30"})],-1)),nb=Yv(()=>Ne("a",{href:"https://www.linkedin.com/in/sameer-chawla01/",target:"_blank"},[Ne("img",{class:"linkedin",src:ZM,alt:"LinkedIn",width:"30"})],-1));function ib(n,e,t,i,r,s){return Ct(),It("footer",QM,[Ne("div",eb,[Ne("p",null,"Sameer Chawla © "+lr(r.currentYear),1),tb,nb])])}const jv=Yn(JM,[["render",ib],["__scopeId","data-v-1957f146"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="166",rb=0,Km=1,sb=2,Kv=1,ob=2,Fr=3,Bs=0,di=1,Hr=2,Ps=0,ga=1,Zm=2,Jm=3,Qm=4,ab=5,go=100,lb=101,cb=102,ub=103,fb=104,hb=200,db=201,pb=202,mb=203,Vh=204,Gh=205,_b=206,gb=207,vb=208,xb=209,yb=210,Sb=211,Mb=212,bb=213,Eb=214,Tb=0,wb=1,Ab=2,Au=3,Cb=4,Rb=5,Pb=6,Lb=7,Zv=0,Db=1,Ib=2,Ls=0,Ob=1,Ub=2,Nb=3,Fb=4,Bb=5,kb=6,zb=7,Jv=300,Aa=301,Ca=302,Wh=303,Xh=304,cf=306,$h=1e3,Gr=1001,qh=1002,Gi=1003,Hb=1004,dc=1005,sr=1006,If=1007,xo=1008,jr=1009,Qv=1010,e0=1011,Nl=1012,yp=1013,Lo=1014,Wr=1015,jl=1016,Sp=1017,Mp=1018,Ra=1020,t0=35902,n0=1021,i0=1022,ar=1023,r0=1024,s0=1025,va=1026,Pa=1027,o0=1028,bp=1029,a0=1030,Ep=1031,Tp=1033,su=33776,ou=33777,au=33778,lu=33779,Yh=35840,jh=35841,Kh=35842,Zh=35843,Jh=36196,Qh=37492,ed=37496,td=37808,nd=37809,id=37810,rd=37811,sd=37812,od=37813,ad=37814,ld=37815,cd=37816,ud=37817,fd=37818,hd=37819,dd=37820,pd=37821,cu=36492,md=36494,_d=36495,l0=36283,gd=36284,vd=36285,xd=36286,Vb=3200,Gb=3201,Wb=0,Xb=1,Ss="",ir="srgb",qs="srgb-linear",wp="display-p3",uf="display-p3-linear",Cu="linear",Kt="srgb",Ru="rec709",Pu="p3",ko=7680,e_=519,$b=512,qb=513,Yb=514,c0=515,jb=516,Kb=517,Zb=518,Jb=519,t_=35044,n_="300 es",Xr=2e3,Lu=2001;class Ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,yd=180/Math.PI;function Kl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function hi(n,e,t){return Math.max(e,Math.min(t,n))}function Qb(n,e){return(n%e+e)%e}function Uf(n,e,t){return(1-t)*n+t*e}function qa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class zt{constructor(e=0,t=0){zt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,r,s,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],p=r[3],m=r[6],M=r[1],v=r[4],S=r[7],P=r[2],E=r[5],w=r[8];return s[0]=o*_+a*M+l*P,s[3]=o*p+a*v+l*E,s[6]=o*m+a*S+l*w,s[1]=c*_+u*M+h*P,s[4]=c*p+u*v+h*E,s[7]=c*m+u*S+h*w,s[2]=f*_+d*M+g*P,s[5]=f*p+d*v+g*E,s[8]=f*m+d*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nf.makeScale(e,t)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new pt;function u0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Du(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eE(){const n=Du("canvas");return n.style.display="block",n}const i_={};function f0(n){n in i_||(i_[n]=!0,console.warn(n))}function tE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const r_=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),s_=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pc={[qs]:{transfer:Cu,primaries:Ru,toReference:n=>n,fromReference:n=>n},[ir]:{transfer:Kt,primaries:Ru,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uf]:{transfer:Cu,primaries:Pu,toReference:n=>n.applyMatrix3(s_),fromReference:n=>n.applyMatrix3(r_)},[wp]:{transfer:Kt,primaries:Pu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(s_),fromReference:n=>n.applyMatrix3(r_).convertLinearToSRGB()}},nE=new Set([qs,uf]),Vt={enabled:!0,_workingColorSpace:qs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=pc[e].toReference,r=pc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return pc[n].primaries},getTransfer:function(n){return n===Ss?Cu:pc[n].transfer}};function xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ff(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zo;class iE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zo===void 0&&(zo=Du("canvas")),zo.width=e.width,zo.height=e.height;const i=zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Du("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xa(t[i]/255)*255):t[i]=xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class h0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Kl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bf(r[o].image)):s.push(Bf(r[o]))}else s=Bf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sE=0;class ai extends Ha{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,i=Gr,r=Gr,s=sr,o=xo,a=ar,l=jr,c=ai.DEFAULT_ANISOTROPY,u=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Kl(),this.name="",this.source=new h0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Jv;ai.DEFAULT_ANISOTROPY=1;class In{constructor(e=0,t=0,i=0,r=1){In.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,P=(m+1)/2,E=(u+f)/4,w=(h+_)/4,O=(g+p)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=w/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=O/s),this.set(i,r,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oE extends Ha{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new In(0,0,e,t),this.scissorTest=!1,this.viewport=new In(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ai(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new h0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends oE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class d0 extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gi,this.minFilter=Gi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gi,this.minFilter=Gi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),E=Math.atan2(P,m*M);p=Math.sin(p*E)/P,a=Math.sin(a*E)/P}const S=a*M;if(l=l*p+f*S,c=c*p+d*S,u=u*p+g*S,h=h*p+_*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hi(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,t=0,i=0){fe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(o_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(o_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new fe,o_=new Zl;class Jl{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mc.copy(i.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),_c.subVectors(this.max,Ya),Ho.subVectors(e.a,Ya),Vo.subVectors(e.b,Ya),Go.subVectors(e.c,Ya),ls.subVectors(Vo,Ho),cs.subVectors(Go,Vo),eo.subVectors(Ho,Go);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-eo.z,eo.y,ls.z,0,-ls.x,cs.z,0,-cs.x,eo.z,0,-eo.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-eo.y,eo.x,0];return!zf(t,Ho,Vo,Go,_c)||(t=[1,0,0,0,1,0,0,0,1],!zf(t,Ho,Vo,Go,_c))?!1:(gc.crossVectors(ls,cs),t=[gc.x,gc.y,gc.z],zf(t,Ho,Vo,Go,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dr=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Zi=new fe,mc=new Jl,Ho=new fe,Vo=new fe,Go=new fe,ls=new fe,cs=new fe,eo=new fe,Ya=new fe,_c=new fe,gc=new fe,to=new fe;function zf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){to.fromArray(n,s);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),l=e.dot(to),c=t.dot(to),u=i.dot(to);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const lE=new Jl,ja=new fe,Hf=new fe;class ff{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(Hf)),this.expandByPoint(ja.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ir=new fe,Vf=new fe,vc=new fe,us=new fe,Gf=new fe,xc=new fe,Wf=new fe;class p0{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vf.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Vf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vc),a=us.dot(this.direction),l=-us.dot(vc),c=us.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vf).addScaledVector(vc,f),d}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const i=Ir.dot(this.direction),r=Ir.dot(Ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,i,r,s){Gf.subVectors(t,e),xc.subVectors(i,e),Wf.crossVectors(Gf,xc);let o=this.direction.dot(Wf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);const l=a*this.direction.dot(xc.crossVectors(us,xc));if(l<0)return null;const c=a*this.direction.dot(Gf.cross(us));if(c<0||l+c>o)return null;const u=-a*us.dot(Wf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,g,_,p){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cE,e,uE)}lookAt(e,t,i){const r=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),fs.crossVectors(i,Ei),fs.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),fs.crossVectors(i,Ei)),fs.normalize(),yc.crossVectors(Ei,fs),r[0]=fs.x,r[4]=yc.x,r[8]=Ei.x,r[1]=fs.y,r[5]=yc.y,r[9]=Ei.y,r[2]=fs.z,r[6]=yc.z,r[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],v=i[7],S=i[11],P=i[15],E=r[0],w=r[4],O=r[8],b=r[12],y=r[1],U=r[5],D=r[9],q=r[13],G=r[2],k=r[6],H=r[10],X=r[14],W=r[3],ve=r[7],T=r[11],Ee=r[15];return s[0]=o*E+a*y+l*G+c*W,s[4]=o*w+a*U+l*k+c*ve,s[8]=o*O+a*D+l*H+c*T,s[12]=o*b+a*q+l*X+c*Ee,s[1]=u*E+h*y+f*G+d*W,s[5]=u*w+h*U+f*k+d*ve,s[9]=u*O+h*D+f*H+d*T,s[13]=u*b+h*q+f*X+d*Ee,s[2]=g*E+_*y+p*G+m*W,s[6]=g*w+_*U+p*k+m*ve,s[10]=g*O+_*D+p*H+m*T,s[14]=g*b+_*q+p*X+m*Ee,s[3]=M*E+v*y+S*G+P*W,s[7]=M*w+v*U+S*k+P*ve,s[11]=M*O+v*D+S*H+P*T,s[15]=M*b+v*q+S*X+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+m*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,P=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,E=t*M+i*v+r*S+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=M*w,e[1]=(_*f*s-h*p*s-_*r*d+i*p*d+h*r*m-i*f*m)*w,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*m+i*l*m)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*w,e[4]=v*w,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*m+t*f*m)*w,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*w,e[8]=S*w,e[9]=(g*h*s-u*_*s-g*i*d+t*_*d+u*i*m-t*h*m)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*m+t*a*m)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*w,e[12]=P*w,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*p+t*h*p)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,M=l*c,v=l*u,S=l*h,P=i.x,E=i.y,w=i.z;return r[0]=(1-(_+m))*P,r[1]=(d+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(d-S)*E,r[5]=(1-(f+m))*E,r[6]=(p+M)*E,r[7]=0,r[8]=(g+v)*w,r[9]=(p-M)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wo.set(r[0],r[1],r[2]).length();const o=Wo.set(r[4],r[5],r[6]).length(),a=Wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ji.copy(this);const c=1/s,u=1/o,h=1/a;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=u,Ji.elements[5]*=u,Ji.elements[6]*=u,Ji.elements[8]*=h,Ji.elements[9]*=h,Ji.elements[10]*=h,t.setFromRotationMatrix(Ji),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(a===Xr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lu)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xr){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let g,_;if(a===Xr)g=(o+s)*h,_=-2*h;else if(a===Lu)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wo=new fe,Ji=new Mn,cE=new fe(0,0,0),uE=new fe(1,1,1),fs=new fe,yc=new fe,Ei=new fe,a_=new Mn,l_=new Zl;class Kr{constructor(e=0,t=0,i=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(hi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hi(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(hi(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hi(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-hi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class m0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const c_=new fe,Xo=new Zl,Or=new Mn,Sc=new fe,Ka=new fe,hE=new fe,dE=new Zl,u_=new fe(1,0,0),f_=new fe(0,1,0),h_=new fe(0,0,1),d_={type:"added"},pE={type:"removed"},$o={type:"childadded",child:null},Xf={type:"childremoved",child:null};class pi extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new fe,t=new Kr,i=new Zl,r=new fe(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mn},normalMatrix:{value:new pt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(u_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,t){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(u_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sc.copy(e):Sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(Ka,Sc,this.up):Or.lookAt(Sc,Ka,this.up),this.quaternion.setFromRotationMatrix(Or),r&&(Or.extractRotation(r.matrixWorld),Xo.setFromRotationMatrix(Or),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d_),$o.child=e,this.dispatchEvent($o),$o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pE),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d_),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,hE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,dE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pi.DEFAULT_UP=new fe(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new fe,Ur=new fe,$f=new fe,Nr=new fe,qo=new fe,Yo=new fe,p_=new fe,qf=new fe,Yf=new fe,jf=new fe;class yr{constructor(e=new fe,t=new fe,i=new fe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qi.subVectors(e,t),r.cross(Qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qi.subVectors(r,t),Ur.subVectors(i,t),$f.subVectors(e,t);const o=Qi.dot(Qi),a=Qi.dot(Ur),l=Qi.dot($f),c=Ur.dot(Ur),u=Ur.dot($f),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nr.x),l.addScaledVector(o,Nr.y),l.addScaledVector(a,Nr.z),l)}static isFrontFacing(e,t,i,r){return Qi.subVectors(i,t),Ur.subVectors(e,t),Qi.cross(Ur).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),Qi.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qo.subVectors(r,i),Yo.subVectors(s,i),qf.subVectors(e,i);const l=qo.dot(qf),c=Yo.dot(qf);if(l<=0&&c<=0)return t.copy(i);Yf.subVectors(e,r);const u=qo.dot(Yf),h=Yo.dot(Yf);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qo,o);jf.subVectors(e,s);const d=qo.dot(jf),g=Yo.dot(jf);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Yo,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return p_.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(p_,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(qo,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Kf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Vt.workingColorSpace){if(e=Qb(e,1),t=hi(t,0,1),i=hi(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Kf(o,s,e+1/3),this.g=Kf(o,s,e),this.b=Kf(o,s,e-1/3)}return Vt.toWorkingColorSpace(this,r),this}setStyle(e,t=ir){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ir){const i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return Vt.fromWorkingColorSpace(Hn.copy(this),e),Math.round(hi(Hn.r*255,0,255))*65536+Math.round(hi(Hn.g*255,0,255))*256+Math.round(hi(Hn.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,s=Hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ir){Vt.fromWorkingColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,r=Hn.b;return e!==ir?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Mc);const i=Uf(hs.h,Mc.h,t),r=Uf(hs.s,Mc.s,t),s=Uf(hs.l,Mc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ft;Ft.NAMES=_0;let mE=0;class Ql extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Kl(),this.name="",this.type="Material",this.blending=ga,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ga&&(i.blending=this.blending),this.side!==Bs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==go&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Au&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ap extends Ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new fe,bc=new zt;class wr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=t_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return f0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array),r=ci(r,this.array),s=ci(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}}class g0 extends wr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class v0 extends wr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ds extends wr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _E=0;const Ni=new Mn,Zf=new pi,jo=new fe,Ti=new Jl,Za=new Jl,Rn=new fe;class ns extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Kl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?v0:g0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ds(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ff);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(Ti.min,Za.min),Ti.expandByPoint(Rn),Rn.addVectors(Ti.max,Za.max),Ti.expandByPoint(Rn)):(Ti.expandByPoint(Za.min),Ti.expandByPoint(Za.max))}Ti.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rn.fromBufferAttribute(a,c),l&&(jo.fromBufferAttribute(e,c),Rn.add(jo)),r=Math.max(r,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new fe,l[O]=new fe;const c=new fe,u=new fe,h=new fe,f=new zt,d=new zt,g=new zt,_=new fe,p=new fe;function m(O,b,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,O),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(U),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[O].add(_),a[b].add(_),a[y].add(_),l[O].add(p),l[b].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,b=M.length;O<b;++O){const y=M[O],U=y.start,D=y.count;for(let q=U,G=U+D;q<G;q+=3)m(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const v=new fe,S=new fe,P=new fe,E=new fe;function w(O){P.fromBufferAttribute(r,O),E.copy(P);const b=a[O];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),S.crossVectors(E,b);const U=S.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,U)}for(let O=0,b=M.length;O<b;++O){const y=M[O],U=y.start,D=y.count;for(let q=U,G=U+D;q<G;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new fe,s=new fe,o=new fe,a=new fe,l=new fe,c=new fe,u=new fe,h=new fe;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new wr(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ns,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m_=new Mn,no=new p0,Ec=new ff,__=new fe,Ko=new fe,Zo=new fe,Jo=new fe,Jf=new fe,Tc=new fe,wc=new zt,Ac=new zt,Cc=new zt,g_=new fe,v_=new fe,x_=new fe,Rc=new fe,Pc=new fe;class Mr extends pi{constructor(e=new ns,t=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Jf.fromBufferAttribute(h,e),o?Tc.addScaledVector(Jf,u):Tc.addScaledVector(Jf.sub(t),u))}t.add(Tc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),no.copy(e.ray).recast(e.near),!(Ec.containsPoint(no.origin)===!1&&(no.intersectSphere(Ec,__)===null||no.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(m_.copy(s).invert(),no.copy(e.ray).applyMatrix4(m_),!(i.boundingBox!==null&&no.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,P=v;S<P;S+=3){const E=a.getX(S),w=a.getX(S+1),O=a.getX(S+2);r=Lc(this,m,e,i,c,u,h,E,w,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=Lc(this,o,e,i,c,u,h,M,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=M,P=v;S<P;S+=3){const E=S,w=S+1,O=S+2;r=Lc(this,m,e,i,c,u,h,E,w,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,v=p+1,S=p+2;r=Lc(this,o,e,i,c,u,h,M,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function gE(n,e,t,i,r,s,o,a){let l;if(e.side===di?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bs,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pc);return c<t.near||c>t.far?null:{distance:c,point:Pc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ko),n.getVertexPosition(l,Zo),n.getVertexPosition(c,Jo);const u=gE(n,e,t,i,Ko,Zo,Jo,Rc);if(u){r&&(wc.fromBufferAttribute(r,a),Ac.fromBufferAttribute(r,l),Cc.fromBufferAttribute(r,c),u.uv=yr.getInterpolation(Rc,Ko,Zo,Jo,wc,Ac,Cc,new zt)),s&&(wc.fromBufferAttribute(s,a),Ac.fromBufferAttribute(s,l),Cc.fromBufferAttribute(s,c),u.uv1=yr.getInterpolation(Rc,Ko,Zo,Jo,wc,Ac,Cc,new zt)),o&&(g_.fromBufferAttribute(o,a),v_.fromBufferAttribute(o,l),x_.fromBufferAttribute(o,c),u.normal=yr.getInterpolation(Rc,Ko,Zo,Jo,g_,v_,x_,new fe),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new fe,materialIndex:0};yr.getNormal(Ko,Zo,Jo,h.normal),u.face=h}return u}class ec extends ns{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ds(c,3)),this.setAttribute("normal",new Ds(u,3)),this.setAttribute("uv",new Ds(h,2));function g(_,p,m,M,v,S,P,E,w,O,b){const y=S/w,U=P/O,D=S/2,q=P/2,G=E/2,k=w+1,H=O+1;let X=0,W=0;const ve=new fe;for(let T=0;T<H;T++){const Ee=T*U-q;for(let me=0;me<k;me++){const Ue=me*y-D;ve[_]=Ue*M,ve[p]=Ee*v,ve[m]=G,c.push(ve.x,ve.y,ve.z),ve[_]=0,ve[p]=0,ve[m]=E>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(me/w),h.push(1-T/O),X+=1}}for(let T=0;T<O;T++)for(let Ee=0;Ee<w;Ee++){const me=f+Ee+k*T,Ue=f+Ee+k*(T+1),re=f+(Ee+1)+k*(T+1),V=f+(Ee+1)+k*T;l.push(me,Ue,V),l.push(Ue,re,V),W+=6}a.addGroup(d,W,b),d+=W,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function La(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qn(n){const e={};for(let t=0;t<n.length;t++){const i=La(n[t]);for(const r in i)e[r]=i[r]}return e}function vE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function x0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}const xE={clone:La,merge:Qn};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ks extends Ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=SE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=vE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class y0 extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Xr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new fe,y_=new zt,S_=new zt;class Bi extends y0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,y_,S_),t.subVectors(S_,y_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Of*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qo=-90,ea=1;class ME extends pi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bi(Qo,ea,e,t);r.layers=this.layers,this.add(r);const s=new Bi(Qo,ea,e,t);s.layers=this.layers,this.add(s);const o=new Bi(Qo,ea,e,t);o.layers=this.layers,this.add(o);const a=new Bi(Qo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Bi(Qo,ea,e,t);l.layers=this.layers,this.add(l);const c=new Bi(Qo,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class S0 extends ai{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Aa,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bE extends Do{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new S0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ec(5,5,5),s=new ks({name:"CubemapFromEquirect",uniforms:La(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:Ps});s.uniforms.tEquirect.value=t;const o=new Mr(r,s),a=t.minFilter;return t.minFilter===xo&&(t.minFilter=sr),new ME(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Qf=new fe,EE=new fe,TE=new pt;class lo{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Qf.subVectors(i,t).cross(EE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||TE.getNormalMatrix(e),r=this.coplanarPoint(Qf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new ff,Dc=new fe;class M0{constructor(e=new lo,t=new lo,i=new lo,r=new lo,s=new lo,o=new lo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],M=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-d,S-m).normalize(),i[1].setComponents(l+s,f+c,p+d,S+m).normalize(),i[2].setComponents(l+o,f+u,p+g,S+M).normalize(),i[3].setComponents(l-o,f-u,p-g,S-M).normalize(),i[4].setComponents(l-a,f-h,p-_,S-v).normalize(),t===Xr)i[5].setComponents(l+a,f+h,p+_,S+v).normalize();else if(t===Lu)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){return io.center.set(0,0,0),io.radius=.7071067811865476,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function b0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class tc extends ns{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*f-o;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-M,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,S=M+c*(m+1),P=M+1+c*(m+1),E=M+1+c*m;d.push(v,S,E),d.push(S,P,E)}this.setIndex(d),this.setAttribute("position",new Ds(g,3)),this.setAttribute("normal",new Ds(_,3)),this.setAttribute("uv",new Ds(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var AE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CE=`#ifdef USE_ALPHAHASH
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
#endif`,RE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IE=`#ifdef USE_AOMAP
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
#endif`,OE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zE=`#ifdef USE_IRIDESCENCE
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
#endif`,HE=`#ifdef USE_BUMPMAP
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
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KE=`#define PI 3.141592653589793
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
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JE=`vec3 transformedNormal = objectNormal;
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
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`
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
}`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
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
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ET=`PhysicalMaterial material;
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
#endif`,TT=`struct PhysicalMaterial {
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
}`,wT=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,AT=`#if defined( RE_IndirectDiffuse )
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
#endif`,CT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NT=`#if defined( USE_POINTS_UV )
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
#endif`,FT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jT=`#ifdef USE_NORMALMAP
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
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
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
#endif`,_w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#ifdef USE_TRANSMISSION
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
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
}`,Iw=`#if DEPTH_PACKING == 3200
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
}`,Ow=`#define DISTANCE
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
}`,Uw=`#define DISTANCE
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
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`uniform float scale;
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
}`,kw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Vw=`#define LAMBERT
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
}`,Gw=`#define LAMBERT
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
}`,Ww=`#define MATCAP
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
}`,Xw=`#define MATCAP
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
}`,$w=`#define NORMAL
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
}`,qw=`#define NORMAL
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
}`,Yw=`#define PHONG
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
}`,jw=`#define PHONG
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
}`,Kw=`#define STANDARD
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
}`,Zw=`#define STANDARD
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
}`,Jw=`#define TOON
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
}`,Qw=`#define TOON
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:AE,alphahash_pars_fragment:CE,alphamap_fragment:RE,alphamap_pars_fragment:PE,alphatest_fragment:LE,alphatest_pars_fragment:DE,aomap_fragment:IE,aomap_pars_fragment:OE,batching_pars_vertex:UE,batching_vertex:NE,begin_vertex:FE,beginnormal_vertex:BE,bsdfs:kE,iridescence_fragment:zE,bumpmap_pars_fragment:HE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:XE,color_fragment:$E,color_pars_fragment:qE,color_pars_vertex:YE,color_vertex:jE,common:KE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:JE,displacementmap_pars_vertex:QE,displacementmap_vertex:eT,emissivemap_fragment:tT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:rT,envmap_fragment:sT,envmap_common_pars_fragment:oT,envmap_pars_fragment:aT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:fT,fog_fragment:hT,fog_pars_fragment:dT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:_T,lights_lambert_pars_fragment:gT,lights_pars_begin:vT,lights_toon_fragment:yT,lights_toon_pars_fragment:ST,lights_phong_fragment:MT,lights_phong_pars_fragment:bT,lights_physical_fragment:ET,lights_physical_pars_fragment:TT,lights_fragment_begin:wT,lights_fragment_maps:AT,lights_fragment_end:CT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:PT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:DT,map_fragment:IT,map_pars_fragment:OT,map_particle_fragment:UT,map_particle_pars_fragment:NT,metalnessmap_fragment:FT,metalnessmap_pars_fragment:BT,morphinstance_vertex:kT,morphcolor_vertex:zT,morphnormal_vertex:HT,morphtarget_pars_vertex:VT,morphtarget_vertex:GT,normal_fragment_begin:WT,normal_fragment_maps:XT,normal_pars_fragment:$T,normal_pars_vertex:qT,normal_vertex:YT,normalmap_pars_fragment:jT,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:QT,opaque_fragment:ew,packing:tw,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:rw,dithering_pars_fragment:sw,roughnessmap_fragment:ow,roughnessmap_pars_fragment:aw,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:cw,shadowmap_vertex:uw,shadowmask_pars_fragment:fw,skinbase_vertex:hw,skinning_pars_vertex:dw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:_w,specularmap_pars_fragment:gw,tonemapping_fragment:vw,tonemapping_pars_fragment:xw,transmission_fragment:yw,transmission_pars_fragment:Sw,uv_pars_fragment:Mw,uv_pars_vertex:bw,uv_vertex:Ew,worldpos_vertex:Tw,background_vert:ww,background_frag:Aw,backgroundCube_vert:Cw,backgroundCube_frag:Rw,cube_vert:Pw,cube_frag:Lw,depth_vert:Dw,depth_frag:Iw,distanceRGBA_vert:Ow,distanceRGBA_frag:Uw,equirect_vert:Nw,equirect_frag:Fw,linedashed_vert:Bw,linedashed_frag:kw,meshbasic_vert:zw,meshbasic_frag:Hw,meshlambert_vert:Vw,meshlambert_frag:Gw,meshmatcap_vert:Ww,meshmatcap_frag:Xw,meshnormal_vert:$w,meshnormal_frag:qw,meshphong_vert:Yw,meshphong_frag:jw,meshphysical_vert:Kw,meshphysical_frag:Zw,meshtoon_vert:Jw,meshtoon_frag:Qw,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:r1,sprite_frag:s1},ke={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},gr={basic:{uniforms:Qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Qn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Qn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ft(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Qn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Qn([ke.points,ke.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Qn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Qn([ke.common,ke.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Qn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Qn([ke.sprite,ke.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Qn([ke.common,ke.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Qn([ke.lights,ke.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};gr.physical={uniforms:Qn([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ic={r:0,b:0,g:0},ro=new Kr,o1=new Mn;function a1(n,e,t,i,r,s,o){const a=new Ft(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const S=g(M);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===cf)?(u===void 0&&(u=new Mr(new ec(1,1,1),new ks({name:"BackgroundCubeMaterial",uniforms:La(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ro.copy(v.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(ro)),u.material.toneMapped=Vt.getTransfer(S.colorSpace)!==Kt,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Mr(new tc(2,2),new ks({name:"BackgroundMaterial",uniforms:La(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(S.colorSpace)!==Kt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(Ic,x0(n)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function l1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,U,D,q,G){let k=!1;const H=h(q,D,U);s!==H&&(s=H,c(s.object)),k=d(y,q,D,G),k&&g(y,q,D,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(y,U,D,q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,U,D){const q=D.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let k=G[U.id];k===void 0&&(k={},G[U.id]=k);let H=k[q];return H===void 0&&(H=f(l()),k[q]=H),H}function f(y){const U=[],D=[],q=[];for(let G=0;G<t;G++)U[G]=0,D[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:q,object:y,attributes:{},index:null}}function d(y,U,D,q){const G=s.attributes,k=U.attributes;let H=0;const X=D.getAttributes();for(const W in X)if(X[W].location>=0){const T=G[W];let Ee=k[W];if(Ee===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),T===void 0||T.attribute!==Ee||Ee&&T.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==q}function g(y,U,D,q){const G={},k=U.attributes;let H=0;const X=D.getAttributes();for(const W in X)if(X[W].location>=0){let T=k[W];T===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(T=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(T=y.instanceColor));const Ee={};Ee.attribute=T,T&&T.data&&(Ee.data=T.data),G[W]=Ee,H++}s.attributes=G,s.attributesNum=H,s.index=q}function _(){const y=s.newAttributes;for(let U=0,D=y.length;U<D;U++)y[U]=0}function p(y){m(y,0)}function m(y,U){const D=s.newAttributes,q=s.enabledAttributes,G=s.attributeDivisors;D[y]=1,q[y]===0&&(n.enableVertexAttribArray(y),q[y]=1),G[y]!==U&&(n.vertexAttribDivisor(y,U),G[y]=U)}function M(){const y=s.newAttributes,U=s.enabledAttributes;for(let D=0,q=U.length;D<q;D++)U[D]!==y[D]&&(n.disableVertexAttribArray(D),U[D]=0)}function v(y,U,D,q,G,k,H){H===!0?n.vertexAttribIPointer(y,U,D,G,k):n.vertexAttribPointer(y,U,D,q,G,k)}function S(y,U,D,q){_();const G=q.attributes,k=D.getAttributes(),H=U.defaultAttributeValues;for(const X in k){const W=k[X];if(W.location>=0){let ve=G[X];if(ve===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const T=ve.normalized,Ee=ve.itemSize,me=e.get(ve);if(me===void 0)continue;const Ue=me.buffer,re=me.type,V=me.bytesPerElement,ie=re===n.INT||re===n.UNSIGNED_INT||ve.gpuType===yp;if(ve.isInterleavedBufferAttribute){const $=ve.data,ge=$.stride,Re=ve.offset;if($.isInstancedInterleavedBuffer){for(let De=0;De<W.locationSize;De++)m(W.location+De,$.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let De=0;De<W.locationSize;De++)p(W.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let De=0;De<W.locationSize;De++)v(W.location+De,Ee/W.locationSize,re,T,ge*V,(Re+Ee/W.locationSize*De)*V,ie)}else{if(ve.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)m(W.location+$,ve.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let $=0;$<W.locationSize;$++)p(W.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let $=0;$<W.locationSize;$++)v(W.location+$,Ee/W.locationSize,re,T,Ee*V,Ee/W.locationSize*$*V,ie)}}else if(H!==void 0){const T=H[X];if(T!==void 0)switch(T.length){case 2:n.vertexAttrib2fv(W.location,T);break;case 3:n.vertexAttrib3fv(W.location,T);break;case 4:n.vertexAttrib4fv(W.location,T);break;default:n.vertexAttrib1fv(W.location,T)}}}}M()}function P(){O();for(const y in i){const U=i[y];for(const D in U){const q=U[D];for(const G in q)u(q[G].object),delete q[G];delete U[D]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const D in U){const q=U[D];for(const G in q)u(q[G].object),delete q[G];delete U[D]}delete i[y.id]}function w(y){for(const U in i){const D=i[U];if(D[y.id]===void 0)continue;const q=D[y.id];for(const G in q)u(q[G].object),delete q[G];delete D[y.id]}}function O(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function c1(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ar&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const w=E===jl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==jr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Wr&&!w)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:P}}function f1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lo,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:i,v=M*4;let S=m.clippingState||null;l.value=S,S=u(g,f,v,d);for(let P=0;P!==v;++P)S[P]=t[P];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function h1(n){let e=new WeakMap;function t(o,a){return a===Wh?o.mapping=Aa:a===Xh&&(o.mapping=Ca),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wh||a===Xh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class d1 extends y0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=4,M_=[.125,.215,.35,.446,.526,.582],vo=20,eh=new d1,b_=new Ft;let th=null,nh=0,ih=0,rh=!1;const co=(1+Math.sqrt(5))/2,ta=1/co,E_=[new fe(-co,ta,0),new fe(co,ta,0),new fe(-ta,0,co),new fe(ta,0,co),new fe(0,co,-ta),new fe(0,co,ta),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)];class T_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=rh,e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Aa||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sr,minFilter:sr,generateMipmaps:!1,type:jl,format:ar,colorSpace:qs,depthBuffer:!1},r=w_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(s)),this._blurMaterial=m1(s,e,t)}return r}_compileMaterial(e){const t=new Mr(this._lodPlanes[0],e);this._renderer.compile(t,eh)}_sceneToCubeUV(e,t,i,r){const a=new Bi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(b_),u.toneMapping=Ls,u.autoClear=!1;const d=new Ap({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),g=new Mr(new ec,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(b_),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Oc(r,M*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Aa||e.mapping===Ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=C_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,eh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=E_[(r-s-1)%E_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mr(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vo-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):vo;p>vo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vo}`);const m=[];let M=0;for(let w=0;w<vo;++w){const O=w/_,b=Math.exp(-O*O/2);m.push(b),w===0?M+=b:w<p&&(M+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-ca?r-v+ca:0),E=4*(this._cubeSize-S);Oc(t,P,E,3*S,2*S),l.setRenderTarget(t),l.render(h,eh)}}function p1(n){const e=[],t=[],i=[];let r=n;const s=n-ca+1+M_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ca?l=M_[o-n+ca-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),v=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,O=E>2?0:-1,b=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];M.set(b,_*g*E),v.set(f,p*g*E);const y=[E,E,E,E,E,E];S.set(y,m*g*E)}const P=new ns;P.setAttribute("position",new wr(M,_)),P.setAttribute("uv",new wr(v,p)),P.setAttribute("faceIndex",new wr(S,m)),e.push(P),r>ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function w_(n,e,t){const i=new Do(n,e,t);return i.texture.mapping=cf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function m1(n,e,t){const i=new Float32Array(vo),r=new fe(0,1,0);return new ks({name:"SphericalGaussianBlur",defines:{n:vo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function A_(){return new ks({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function C_(){return new ks({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Cp(){return`

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
	`}function _1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wh||l===Xh,u=l===Aa||l===Ca;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new T_(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new T_(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function g1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&f0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function v1(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,S=M.length;v<S;v+=3){const P=M[v+0],E=M[v+1],w=M[v+2];f.push(P,E,E,w,w,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const P=v+0,E=v+1,w=v+2;f.push(P,E,E,w,w,P)}}else return;const p=new(u0(f)?v0:g0)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function x1(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M];for(let M=0;M<_.length;M++)t.update(m,i,_[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function S1(n,e,t){const i=new WeakMap,r=new In;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let P=a.attributes.position.count*S,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*E*4*h),O=new d0(w,P,E,h);O.type=Wr,O.needsUpdate=!0;const b=S*4;for(let U=0;U<h;U++){const D=m[U],q=M[U],G=v[U],k=P*E*4*U;for(let H=0;H<D.count;H++){const X=H*b;g===!0&&(r.fromBufferAttribute(D,H),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),_===!0&&(r.fromBufferAttribute(q,H),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),p===!0&&(r.fromBufferAttribute(G,H),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:O,size:new zt(P,E)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function M1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class E0 extends ai{constructor(e,t,i,r,s,o,a,l,c,u=va){if(u!==va&&u!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===va&&(i=Lo),i===void 0&&u===Pa&&(i=Ra),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gi,this.minFilter=l!==void 0?l:Gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const T0=new ai,R_=new E0(1,1),w0=new d0,A0=new aE,C0=new S0,P_=[],L_=[],D_=new Float32Array(16),I_=new Float32Array(9),O_=new Float32Array(4);function Va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=P_[r];if(s===void 0&&(s=new Float32Array(r),P_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function An(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hf(n,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function E1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;n.uniform2fv(this.addr,e),An(t,e)}}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;n.uniform3fv(this.addr,e),An(t,e)}}function w1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;n.uniform4fv(this.addr,e),An(t,e)}}function A1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(wn(t,i))return;O_.set(i),n.uniformMatrix2fv(this.addr,!1,O_),An(t,i)}}function C1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(wn(t,i))return;I_.set(i),n.uniformMatrix3fv(this.addr,!1,I_),An(t,i)}}function R1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(wn(t,i))return;D_.set(i),n.uniformMatrix4fv(this.addr,!1,D_),An(t,i)}}function P1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;n.uniform2iv(this.addr,e),An(t,e)}}function D1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;n.uniform3iv(this.addr,e),An(t,e)}}function I1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;n.uniform4iv(this.addr,e),An(t,e)}}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;n.uniform2uiv(this.addr,e),An(t,e)}}function N1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;n.uniform3uiv(this.addr,e),An(t,e)}}function F1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;n.uniform4uiv(this.addr,e),An(t,e)}}function B1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(R_.compareFunction=c0,s=R_):s=T0,t.setTexture2D(e||s,r)}function k1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||A0,r)}function z1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||C0,r)}function H1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||w0,r)}function V1(n){switch(n){case 5126:return b1;case 35664:return E1;case 35665:return T1;case 35666:return w1;case 35674:return A1;case 35675:return C1;case 35676:return R1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return I1;case 5125:return O1;case 36294:return U1;case 36295:return N1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return H1}}function G1(n,e){n.uniform1fv(this.addr,e)}function W1(n,e){const t=Va(e,this.size,2);n.uniform2fv(this.addr,t)}function X1(n,e){const t=Va(e,this.size,3);n.uniform3fv(this.addr,t)}function $1(n,e){const t=Va(e,this.size,4);n.uniform4fv(this.addr,t)}function q1(n,e){const t=Va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y1(n,e){const t=Va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j1(n,e){const t=Va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K1(n,e){n.uniform1iv(this.addr,e)}function Z1(n,e){n.uniform2iv(this.addr,e)}function J1(n,e){n.uniform3iv(this.addr,e)}function Q1(n,e){n.uniform4iv(this.addr,e)}function eA(n,e){n.uniform1uiv(this.addr,e)}function tA(n,e){n.uniform2uiv(this.addr,e)}function nA(n,e){n.uniform3uiv(this.addr,e)}function iA(n,e){n.uniform4uiv(this.addr,e)}function rA(n,e,t){const i=this.cache,r=e.length,s=hf(t,r);wn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||T0,s[o])}function sA(n,e,t){const i=this.cache,r=e.length,s=hf(t,r);wn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||A0,s[o])}function oA(n,e,t){const i=this.cache,r=e.length,s=hf(t,r);wn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||C0,s[o])}function aA(n,e,t){const i=this.cache,r=e.length,s=hf(t,r);wn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||w0,s[o])}function lA(n){switch(n){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return $1;case 35674:return q1;case 35675:return Y1;case 35676:return j1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return aA}}class cA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}}class uA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lA(t.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function U_(n,e){n.seq.push(e),n.map[e.id]=e}function hA(n,e,t){const i=n.name,r=i.length;for(sh.lastIndex=0;;){const s=sh.exec(i),o=sh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){U_(t,c===void 0?new cA(a,n,e):new uA(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fA(a),U_(t,h)),t=h}}}class uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function N_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dA=37297;let pA=0;function mA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function _A(n){const e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(n);let i;switch(e===t?i="":e===Pu&&t===Ru?i="LinearDisplayP3ToLinearSRGB":e===Ru&&t===Pu&&(i="LinearSRGBToLinearDisplayP3"),n){case qs:case uf:return[i,"LinearTransferOETF"];case ir:case wp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function F_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mA(n.getShaderSource(e),o)}else return r}function gA(n,e){const t=_A(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vA(n,e){let t;switch(e){case Ob:t="Linear";break;case Ub:t="Reinhard";break;case Nb:t="OptimizedCineon";break;case Fb:t="ACESFilmic";break;case kb:t="AgX";break;case zb:t="Neutral";break;case Bb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function yA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function il(n){return n!==""}function B_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(n){return n.replace(MA,EA)}const bA=new Map;function EA(n,e){let t=dt[e];if(t===void 0){const i=bA.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(t)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(n){return n.replace(TA,wA)}function wA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ob?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function CA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Aa:case Ca:e="ENVMAP_TYPE_CUBE";break;case cf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ca:e="ENVMAP_MODE_REFRACTION";break}return e}function PA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zv:e="ENVMAP_BLENDING_MULTIPLY";break;case Db:e="ENVMAP_BLENDING_MIX";break;case Ib:e="ENVMAP_BLENDING_ADD";break}return e}function LA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AA(t),c=CA(t),u=RA(t),h=PA(t),f=LA(t),d=xA(t),g=yA(s),_=r.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(il).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(il).join(`
`),m.length>0&&(m+=`
`)):(p=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),m=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ls?vA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,gA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),o=Sd(o),o=B_(o,t),o=k_(o,t),a=Sd(a),a=B_(a,t),a=k_(a,t),o=z_(o),a=z_(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,S=M+m+a,P=N_(r,r.VERTEX_SHADER,v),E=N_(r,r.FRAGMENT_SHADER,S);r.attachShader(_,P),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(U){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),q=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(E).trim();let k=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,E);else{const X=F_(r,P,"vertex"),W=F_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+X+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(q===""||G==="")&&(H=!1);H&&(U.diagnostics={runnable:k,programLog:D,vertexShader:{log:q,prefix:p},fragmentShader:{log:G,prefix:m}})}r.deleteShader(P),r.deleteShader(E),O=new uu(r,_),b=SA(r,_)}let O;this.getUniforms=function(){return O===void 0&&w(this),O};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,dA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let IA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UA(e),t.set(e,i)),i}}class UA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function NA(n,e,t,i,r,s,o){const a=new m0,l=new OA,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,U,D,q){const G=D.fog,k=q.geometry,H=b.isMeshStandardMaterial?D.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),W=X&&X.mapping===cf?X.image.height:null,ve=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const T=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ee=T!==void 0?T.length:0;let me=0;k.morphAttributes.position!==void 0&&(me=1),k.morphAttributes.normal!==void 0&&(me=2),k.morphAttributes.color!==void 0&&(me=3);let Ue,re,V,ie;if(ve){const ct=gr[ve];Ue=ct.vertexShader,re=ct.fragmentShader}else Ue=b.vertexShader,re=b.fragmentShader,l.update(b),V=l.getVertexShaderID(b),ie=l.getFragmentShaderID(b);const $=n.getRenderTarget(),ge=q.isInstancedMesh===!0,Re=q.isBatchedMesh===!0,De=!!b.map,Oe=!!b.matcap,I=!!X,L=!!b.aoMap,z=!!b.lightMap,Z=!!b.bumpMap,ne=!!b.normalMap,F=!!b.displacementMap,ce=!!b.emissiveMap,he=!!b.metalnessMap,C=!!b.roughnessMap,x=b.anisotropy>0,B=b.clearcoat>0,ee=b.dispersion>0,se=b.iridescence>0,J=b.sheen>0,Me=b.transmission>0,ue=x&&!!b.anisotropyMap,be=B&&!!b.clearcoatMap,we=B&&!!b.clearcoatNormalMap,Se=B&&!!b.clearcoatRoughnessMap,Le=se&&!!b.iridescenceMap,ze=se&&!!b.iridescenceThicknessMap,Je=J&&!!b.sheenColorMap,Ie=J&&!!b.sheenRoughnessMap,je=!!b.specularMap,Xe=!!b.specularColorMap,rt=!!b.specularIntensityMap,Y=Me&&!!b.transmissionMap,de=Me&&!!b.thicknessMap,_e=!!b.gradientMap,ye=!!b.alphaMap,Ae=b.alphaTest>0,Ye=!!b.alphaHash,lt=!!b.extensions;let vt=Ls;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Lt={shaderID:ve,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:re,defines:b.defines,customVertexShaderID:V,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Re,batchingColor:Re&&q._colorsTexture!==null,instancing:ge,instancingColor:ge&&q.instanceColor!==null,instancingMorph:ge&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:qs,alphaToCoverage:!!b.alphaToCoverage,map:De,matcap:Oe,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:z,bumpMap:Z,normalMap:ne,displacementMap:f&&F,emissiveMap:ce,normalMapObjectSpace:ne&&b.normalMapType===Xb,normalMapTangentSpace:ne&&b.normalMapType===Wb,metalnessMap:he,roughnessMap:C,anisotropy:x,anisotropyMap:ue,clearcoat:B,clearcoatMap:be,clearcoatNormalMap:we,clearcoatRoughnessMap:Se,dispersion:ee,iridescence:se,iridescenceMap:Le,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:Je,sheenRoughnessMap:Ie,specularMap:je,specularColorMap:Xe,specularIntensityMap:rt,transmission:Me,transmissionMap:Y,thicknessMap:de,gradientMap:_e,opaque:b.transparent===!1&&b.blending===ga&&b.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ae,alphaHash:Ye,combine:b.combine,mapUv:De&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:z&&_(b.lightMap.channel),bumpMapUv:Z&&_(b.bumpMap.channel),normalMapUv:ne&&_(b.normalMap.channel),displacementMapUv:F&&_(b.displacementMap.channel),emissiveMapUv:ce&&_(b.emissiveMap.channel),metalnessMapUv:he&&_(b.metalnessMap.channel),roughnessMapUv:C&&_(b.roughnessMap.channel),anisotropyMapUv:ue&&_(b.anisotropyMap.channel),clearcoatMapUv:be&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(b.sheenRoughnessMap.channel),specularMapUv:je&&_(b.specularMap.channel),specularColorMapUv:Xe&&_(b.specularColorMap.channel),specularIntensityMapUv:rt&&_(b.specularIntensityMap.channel),transmissionMapUv:Y&&_(b.transmissionMap.channel),thicknessMapUv:de&&_(b.thicknessMap.channel),alphaMapUv:ye&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ne||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(De||ye),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:De&&b.map.isVideoTexture===!0&&Vt.getTransfer(b.map.colorSpace)===Kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hr,flipSided:b.side===di,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&b.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function m(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)y.push(U),y.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(y,b),v(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function v(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),b.push(a.mask)}function S(b){const y=g[b.type];let U;if(y){const D=gr[y];U=xE.clone(D.uniforms)}else U=b.uniforms;return U}function P(b,y){let U;for(let D=0,q=u.length;D<q;D++){const G=u[D];if(G.cacheKey===y){U=G,++U.usedTimes;break}}return U===void 0&&(U=new DA(n,y,b,s),u.push(U)),U}function E(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:P,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:O}}function FA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function BA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function V_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function G_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,_,p){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||BA),i.length>1&&i.sort(f||V_),r.length>1&&r.sort(f||V_)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new G_,n.set(i,[o])):r>=s.length?(o=new G_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new fe,color:new Ft};break;case"SpotLight":t={position:new fe,direction:new fe,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return n[e.id]=t,t}}}function HA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VA=0;function GA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WA(n){const e=new zA,t=HA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new fe);const r=new fe,s=new Mn,o=new Mn;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,v=0,S=0,P=0,E=0,w=0;c.sort(GA);for(let b=0,y=c.length;b<y;b++){const U=c[b],D=U.color,q=U.intensity,G=U.distance,k=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=D.r*q,h+=D.g*q,f+=D.b*q;else if(U.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(U.sh.coefficients[H],q);w++}else if(U.isDirectionalLight){const H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,W=t.get(U);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=U.shadow.matrix,M++}i.directional[d]=H,d++}else if(U.isSpotLight){const H=e.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(D).multiplyScalar(q),H.distance=G,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,i.spot[_]=H;const X=U.shadow;if(U.map&&(i.spotLightMap[P]=U.map,P++,X.updateMatrices(U),U.castShadow&&E++),i.spotLightMatrix[_]=X.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=k,S++}_++}else if(U.isRectAreaLight){const H=e.get(U);H.color.copy(D).multiplyScalar(q),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=H,p++}else if(U.isPointLight){const H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){const X=U.shadow,W=t.get(U);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=U.shadow.matrix,v++}i.point[g]=H,g++}else if(U.isHemisphereLight){const H=e.get(U);H.skyColor.copy(U.color).multiplyScalar(q),H.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==M||O.numPointShadows!==v||O.numSpotShadows!==S||O.numSpotMaps!==P||O.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,O.directionalLength=d,O.pointLength=g,O.spotLength=_,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=M,O.numPointShadows=v,O.numSpotShadows=S,O.numSpotMaps=P,O.numLightProbes=w,i.version=VA++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(v.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function W_(n){const e=new WA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XA(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new W_(n),e.set(r,[a])):s>=o.length?(a=new W_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class $A extends Ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends Ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
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
}`;function KA(n,e,t){let i=new M0;const r=new zt,s=new zt,o=new In,a=new $A({depthPacking:Gb}),l=new qA,c={},u=t.maxTextureSize,h={[Bs]:di,[di]:Bs,[Hr]:Hr},f=new ks({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:YA,fragmentShader:jA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ns;g.setAttribute("position",new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mr(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kv;let m=this.type;this.render=function(E,w,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ps),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const q=m!==Fr&&this.type===Fr,G=m===Fr&&this.type!==Fr;for(let k=0,H=E.length;k<H;k++){const X=E[k],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ve=W.getFrameExtents();if(r.multiply(ve),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ve.x),r.x=s.x*ve.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ve.y),r.y=s.y*ve.y,W.mapSize.y=s.y)),W.map===null||q===!0||G===!0){const Ee=this.type!==Fr?{minFilter:Gi,magFilter:Gi}:{};W.map!==null&&W.map.dispose(),W.map=new Do(r.x,r.y,Ee),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const T=W.getViewportCount();for(let Ee=0;Ee<T;Ee++){const me=W.getViewport(Ee);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),D.viewport(o),W.updateMatrices(X,Ee),i=W.getFrustum(),S(w,O,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Fr&&M(W,O),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(b,y,U)};function M(E,w){const O=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Do(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,O,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,O,d,_,null)}function v(E,w,O,b){let y=null;const U=O.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)y=U;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=y.uuid,q=w.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let k=G[q];k===void 0&&(k=y.clone(),G[q]=k,w.addEventListener("dispose",P)),y=k}if(y.visible=w.visible,y.wireframe=w.wireframe,b===Fr?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=O}return y}function S(E,w,O,b,y){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Fr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld);const q=e.update(E),G=E.material;if(Array.isArray(G)){const k=q.groups;for(let H=0,X=k.length;H<X;H++){const W=k[H],ve=G[W.materialIndex];if(ve&&ve.visible){const T=v(E,ve,b,y);E.onBeforeShadow(n,E,w,O,q,T,W),n.renderBufferDirect(O,null,q,T,E,W),E.onAfterShadow(n,E,w,O,q,T,W)}}}else if(G.visible){const k=v(E,G,b,y);E.onBeforeShadow(n,E,w,O,q,k,null),n.renderBufferDirect(O,null,q,k,E,null),E.onAfterShadow(n,E,w,O,q,k,null)}}const D=E.children;for(let q=0,G=D.length;q<G;q++)S(D[q],w,O,b,y)}function P(E){E.target.removeEventListener("dispose",P);for(const O in c){const b=c[O],y=E.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function ZA(n){function e(){let Y=!1;const de=new In;let _e=null;const ye=new In(0,0,0,0);return{setMask:function(Ae){_e!==Ae&&!Y&&(n.colorMask(Ae,Ae,Ae,Ae),_e=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,Ye,lt,vt,Lt){Lt===!0&&(Ae*=vt,Ye*=vt,lt*=vt),de.set(Ae,Ye,lt,vt),ye.equals(de)===!1&&(n.clearColor(Ae,Ye,lt,vt),ye.copy(de))},reset:function(){Y=!1,_e=null,ye.set(-1,0,0,0)}}}function t(){let Y=!1,de=null,_e=null,ye=null;return{setTest:function(Ae){Ae?ie(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(Ae){de!==Ae&&!Y&&(n.depthMask(Ae),de=Ae)},setFunc:function(Ae){if(_e!==Ae){switch(Ae){case Tb:n.depthFunc(n.NEVER);break;case wb:n.depthFunc(n.ALWAYS);break;case Ab:n.depthFunc(n.LESS);break;case Au:n.depthFunc(n.LEQUAL);break;case Cb:n.depthFunc(n.EQUAL);break;case Rb:n.depthFunc(n.GEQUAL);break;case Pb:n.depthFunc(n.GREATER);break;case Lb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){ye!==Ae&&(n.clearDepth(Ae),ye=Ae)},reset:function(){Y=!1,de=null,_e=null,ye=null}}}function i(){let Y=!1,de=null,_e=null,ye=null,Ae=null,Ye=null,lt=null,vt=null,Lt=null;return{setTest:function(ct){Y||(ct?ie(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(ct){de!==ct&&!Y&&(n.stencilMask(ct),de=ct)},setFunc:function(ct,tt,$e){(_e!==ct||ye!==tt||Ae!==$e)&&(n.stencilFunc(ct,tt,$e),_e=ct,ye=tt,Ae=$e)},setOp:function(ct,tt,$e){(Ye!==ct||lt!==tt||vt!==$e)&&(n.stencilOp(ct,tt,$e),Ye=ct,lt=tt,vt=$e)},setLocked:function(ct){Y=ct},setClear:function(ct){Lt!==ct&&(n.clearStencil(ct),Lt=ct)},reset:function(){Y=!1,de=null,_e=null,ye=null,Ae=null,Ye=null,lt=null,vt=null,Lt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,M=null,v=null,S=null,P=null,E=new Ft(0,0,0),w=0,O=!1,b=null,y=null,U=null,D=null,q=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,H=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=H>=2);let W=null,ve={};const T=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),me=new In().fromArray(T),Ue=new In().fromArray(Ee);function re(Y,de,_e,ye){const Ae=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(Y,Ye),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<_e;lt++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(de+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ye}const V={};V[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),s.setFunc(Au),Z(!1),ne(Km),ie(n.CULL_FACE),L(Ps);function ie(Y){c[Y]!==!0&&(n.enable(Y),c[Y]=!0)}function $(Y){c[Y]!==!1&&(n.disable(Y),c[Y]=!1)}function ge(Y,de){return u[Y]!==de?(n.bindFramebuffer(Y,de),u[Y]=de,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(Y,de){let _e=f,ye=!1;if(Y){_e=h.get(de),_e===void 0&&(_e=[],h.set(de,_e));const Ae=Y.textures;if(_e.length!==Ae.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,lt=Ae.length;Ye<lt;Ye++)_e[Ye]=n.COLOR_ATTACHMENT0+Ye;_e.length=Ae.length,ye=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,ye=!0);ye&&n.drawBuffers(_e)}function De(Y){return d!==Y?(n.useProgram(Y),d=Y,!0):!1}const Oe={[go]:n.FUNC_ADD,[lb]:n.FUNC_SUBTRACT,[cb]:n.FUNC_REVERSE_SUBTRACT};Oe[ub]=n.MIN,Oe[fb]=n.MAX;const I={[hb]:n.ZERO,[db]:n.ONE,[pb]:n.SRC_COLOR,[Vh]:n.SRC_ALPHA,[yb]:n.SRC_ALPHA_SATURATE,[vb]:n.DST_COLOR,[_b]:n.DST_ALPHA,[mb]:n.ONE_MINUS_SRC_COLOR,[Gh]:n.ONE_MINUS_SRC_ALPHA,[xb]:n.ONE_MINUS_DST_COLOR,[gb]:n.ONE_MINUS_DST_ALPHA,[Sb]:n.CONSTANT_COLOR,[Mb]:n.ONE_MINUS_CONSTANT_COLOR,[bb]:n.CONSTANT_ALPHA,[Eb]:n.ONE_MINUS_CONSTANT_ALPHA};function L(Y,de,_e,ye,Ae,Ye,lt,vt,Lt,ct){if(Y===Ps){g===!0&&($(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),Y!==ab){if(Y!==_||ct!==O){if((p!==go||v!==go)&&(n.blendEquation(n.FUNC_ADD),p=go,v=go),ct)switch(Y){case ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.ONE,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}m=null,M=null,S=null,P=null,E.set(0,0,0),w=0,_=Y,O=ct}return}Ae=Ae||de,Ye=Ye||_e,lt=lt||ye,(de!==p||Ae!==v)&&(n.blendEquationSeparate(Oe[de],Oe[Ae]),p=de,v=Ae),(_e!==m||ye!==M||Ye!==S||lt!==P)&&(n.blendFuncSeparate(I[_e],I[ye],I[Ye],I[lt]),m=_e,M=ye,S=Ye,P=lt),(vt.equals(E)===!1||Lt!==w)&&(n.blendColor(vt.r,vt.g,vt.b,Lt),E.copy(vt),w=Lt),_=Y,O=!1}function z(Y,de){Y.side===Hr?$(n.CULL_FACE):ie(n.CULL_FACE);let _e=Y.side===di;de&&(_e=!_e),Z(_e),Y.blending===ga&&Y.transparent===!1?L(Ps):L(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),s.setFunc(Y.depthFunc),s.setTest(Y.depthTest),s.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const ye=Y.stencilWrite;o.setTest(ye),ye&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ce(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(Y){b!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),b=Y)}function ne(Y){Y!==rb?(ie(n.CULL_FACE),Y!==y&&(Y===Km?n.cullFace(n.BACK):Y===sb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),y=Y}function F(Y){Y!==U&&(k&&n.lineWidth(Y),U=Y)}function ce(Y,de,_e){Y?(ie(n.POLYGON_OFFSET_FILL),(D!==de||q!==_e)&&(n.polygonOffset(de,_e),D=de,q=_e)):$(n.POLYGON_OFFSET_FILL)}function he(Y){Y?ie(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function C(Y){Y===void 0&&(Y=n.TEXTURE0+G-1),W!==Y&&(n.activeTexture(Y),W=Y)}function x(Y,de,_e){_e===void 0&&(W===null?_e=n.TEXTURE0+G-1:_e=W);let ye=ve[_e];ye===void 0&&(ye={type:void 0,texture:void 0},ve[_e]=ye),(ye.type!==Y||ye.texture!==de)&&(W!==_e&&(n.activeTexture(_e),W=_e),n.bindTexture(Y,de||V[Y]),ye.type=Y,ye.texture=de)}function B(){const Y=ve[W];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Je(Y){me.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),me.copy(Y))}function Ie(Y){Ue.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),Ue.copy(Y))}function je(Y,de){let _e=l.get(de);_e===void 0&&(_e=new WeakMap,l.set(de,_e));let ye=_e.get(Y);ye===void 0&&(ye=n.getUniformBlockIndex(de,Y.name),_e.set(Y,ye))}function Xe(Y,de){const ye=l.get(de).get(Y);a.get(de)!==ye&&(n.uniformBlockBinding(de,ye,Y.__bindingPointIndex),a.set(de,ye))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ve={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,M=null,v=null,S=null,P=null,E=new Ft(0,0,0),w=0,O=!1,b=null,y=null,U=null,D=null,q=null,me.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ie,disable:$,bindFramebuffer:ge,drawBuffers:Re,useProgram:De,setBlending:L,setMaterial:z,setFlipSided:Z,setCullFace:ne,setLineWidth:F,setPolygonOffset:ce,setScissorTest:he,activeTexture:C,bindTexture:x,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:Le,texImage3D:ze,updateUBOMapping:je,uniformBlockBinding:Xe,texStorage2D:we,texStorage3D:Se,texSubImage2D:J,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:be,scissor:Je,viewport:Ie,reset:rt}}function X_(n,e,t,i){const r=JA(i);switch(t){case n0:return n*e;case r0:return n*e;case s0:return n*e*2;case o0:return n*e/r.components*r.byteLength;case bp:return n*e/r.components*r.byteLength;case a0:return n*e*2/r.components*r.byteLength;case Ep:return n*e*2/r.components*r.byteLength;case i0:return n*e*3/r.components*r.byteLength;case ar:return n*e*4/r.components*r.byteLength;case Tp:return n*e*4/r.components*r.byteLength;case su:case ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case au:case lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jh:case Zh:return Math.max(n,16)*Math.max(e,8)/4;case Yh:case Kh:return Math.max(n,8)*Math.max(e,8)/2;case Jh:case Qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ed:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cu:case md:case _d:return Math.ceil(n/4)*Math.ceil(e/4)*16;case l0:case gd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vd:case xd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JA(n){switch(n){case jr:case Qv:return{byteLength:1,components:1};case Nl:case e0:case jl:return{byteLength:2,components:1};case Sp:case Mp:return{byteLength:2,components:4};case Lo:case yp:case Wr:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function QA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return d?new OffscreenCanvas(C,x):Du("canvas")}function _(C,x,B){let ee=1;const se=he(C);if((se.width>B||se.height>B)&&(ee=B/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(ee*se.width),Me=Math.floor(ee*se.height);h===void 0&&(h=g(J,Me));const ue=x?g(J,Me):h;return ue.width=J,ue.height=Me,ue.getContext("2d").drawImage(C,0,0,J,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+Me+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Gi&&C.minFilter!==sr}function m(C){n.generateMipmap(C)}function M(C,x,B,ee,se=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=x;if(x===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),x===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),x===n.RGBA){const Me=se?Cu:Vt.getTransfer(ee);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Me===Kt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(C,x){let B;return C?x===null||x===Lo||x===Ra?B=n.DEPTH24_STENCIL8:x===Wr?B=n.DEPTH32F_STENCIL8:x===Nl&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Lo||x===Ra?B=n.DEPTH_COMPONENT24:x===Wr?B=n.DEPTH_COMPONENT32F:x===Nl&&(B=n.DEPTH_COMPONENT16),B}function S(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gi&&C.minFilter!==sr?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){const x=C.target;x.removeEventListener("dispose",P),w(x),x.isVideoTexture&&u.delete(x)}function E(C){const x=C.target;x.removeEventListener("dispose",E),b(x)}function w(C){const x=i.get(C);if(x.__webglInit===void 0)return;const B=C.source,ee=f.get(B);if(ee){const se=ee[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(C),Object.keys(ee).length===0&&f.delete(B)}i.remove(C)}function O(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const B=C.source,ee=f.get(B);delete ee[x.__cacheKey],o.memory.textures--}function b(C){const x=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let se=0;se<x.__webglFramebuffer[ee].length;se++)n.deleteFramebuffer(x.__webglFramebuffer[ee][se]);else n.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[ee]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let ee=0,se=B.length;ee<se;ee++){const J=i.get(B[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(C)}let y=0;function U(){y=0}function D(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function q(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function G(C,x){const B=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(B,C,x);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function k(C,x){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ue(B,C,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function H(C,x){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ue(B,C,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function X(C,x){const B=i.get(C);if(C.version>0&&B.__version!==C.version){re(B,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const W={[$h]:n.REPEAT,[Gr]:n.CLAMP_TO_EDGE,[qh]:n.MIRRORED_REPEAT},ve={[Gi]:n.NEAREST,[Hb]:n.NEAREST_MIPMAP_NEAREST,[dc]:n.NEAREST_MIPMAP_LINEAR,[sr]:n.LINEAR,[If]:n.LINEAR_MIPMAP_NEAREST,[xo]:n.LINEAR_MIPMAP_LINEAR},T={[$b]:n.NEVER,[Jb]:n.ALWAYS,[qb]:n.LESS,[c0]:n.LEQUAL,[Yb]:n.EQUAL,[Zb]:n.GEQUAL,[jb]:n.GREATER,[Kb]:n.NOTEQUAL};function Ee(C,x){if(x.type===Wr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===sr||x.magFilter===If||x.magFilter===dc||x.magFilter===xo||x.minFilter===sr||x.minFilter===If||x.minFilter===dc||x.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,W[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,W[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,W[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,T[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gi||x.minFilter!==dc&&x.minFilter!==xo||x.type===Wr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function me(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));const ee=x.source;let se=f.get(ee);se===void 0&&(se={},f.set(ee,se));const J=q(x);if(J!==C.__cacheKey){se[J]===void 0&&(se[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[J].usedTimes++;const Me=se[C.__cacheKey];Me!==void 0&&(se[C.__cacheKey].usedTimes--,Me.usedTimes===0&&O(x)),C.__cacheKey=J,C.__webglTexture=se[J].texture}return B}function Ue(C,x,B){let ee=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=n.TEXTURE_3D);const se=me(C,x),J=x.source;t.bindTexture(ee,C.__webglTexture,n.TEXTURE0+B);const Me=i.get(J);if(J.version!==Me.__version||se===!0){t.activeTexture(n.TEXTURE0+B);const ue=Vt.getPrimaries(Vt.workingColorSpace),be=x.colorSpace===Ss?null:Vt.getPrimaries(x.colorSpace),we=x.colorSpace===Ss||ue===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Se=_(x.image,!1,r.maxTextureSize);Se=ce(x,Se);const Le=s.convert(x.format,x.colorSpace),ze=s.convert(x.type);let Je=M(x.internalFormat,Le,ze,x.colorSpace,x.isVideoTexture);Ee(ee,x);let Ie;const je=x.mipmaps,Xe=x.isVideoTexture!==!0,rt=Me.__version===void 0||se===!0,Y=J.dataReady,de=S(x,Se);if(x.isDepthTexture)Je=v(x.format===Pa,x.type),rt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Je,Se.width,Se.height,0,Le,ze,null));else if(x.isDataTexture)if(je.length>0){Xe&&rt&&t.texStorage2D(n.TEXTURE_2D,de,Je,je[0].width,je[0].height);for(let _e=0,ye=je.length;_e<ye;_e++)Ie=je[_e],Xe?Y&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Le,ze,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Je,Ie.width,Ie.height,0,Le,ze,Ie.data);x.generateMipmaps=!1}else Xe?(rt&&t.texStorage2D(n.TEXTURE_2D,de,Je,Se.width,Se.height),Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,Le,ze,Se.data)):t.texImage2D(n.TEXTURE_2D,0,Je,Se.width,Se.height,0,Le,ze,Se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Je,je[0].width,je[0].height,Se.depth);for(let _e=0,ye=je.length;_e<ye;_e++)if(Ie=je[_e],x.format!==ar)if(Le!==null)if(Xe){if(Y)if(x.layerUpdates.size>0){const Ae=X_(Ie.width,Ie.height,x.format,x.type);for(const Ye of x.layerUpdates){const lt=Ie.data.subarray(Ye*Ae/Ie.data.BYTES_PER_ELEMENT,(Ye+1)*Ae/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Ye,Ie.width,Ie.height,1,Le,lt,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,Se.depth,Le,Ie.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Je,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,Se.depth,Le,ze,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Je,Ie.width,Ie.height,Se.depth,0,Le,ze,Ie.data)}else{Xe&&rt&&t.texStorage2D(n.TEXTURE_2D,de,Je,je[0].width,je[0].height);for(let _e=0,ye=je.length;_e<ye;_e++)Ie=je[_e],x.format!==ar?Le!==null?Xe?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Le,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Je,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?Y&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,Le,ze,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Je,Ie.width,Ie.height,0,Le,ze,Ie.data)}else if(x.isDataArrayTexture)if(Xe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Je,Se.width,Se.height,Se.depth),Y)if(x.layerUpdates.size>0){const _e=X_(Se.width,Se.height,x.format,x.type);for(const ye of x.layerUpdates){const Ae=Se.data.subarray(ye*_e/Se.data.BYTES_PER_ELEMENT,(ye+1)*_e/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,Se.width,Se.height,1,Le,ze,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,ze,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Le,ze,Se.data);else if(x.isData3DTexture)Xe?(rt&&t.texStorage3D(n.TEXTURE_3D,de,Je,Se.width,Se.height,Se.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,ze,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Le,ze,Se.data);else if(x.isFramebufferTexture){if(rt)if(Xe)t.texStorage2D(n.TEXTURE_2D,de,Je,Se.width,Se.height);else{let _e=Se.width,ye=Se.height;for(let Ae=0;Ae<de;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Je,_e,ye,0,Le,ze,null),_e>>=1,ye>>=1}}else if(je.length>0){if(Xe&&rt){const _e=he(je[0]);t.texStorage2D(n.TEXTURE_2D,de,Je,_e.width,_e.height)}for(let _e=0,ye=je.length;_e<ye;_e++)Ie=je[_e],Xe?Y&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Le,ze,Ie):t.texImage2D(n.TEXTURE_2D,_e,Je,Le,ze,Ie);x.generateMipmaps=!1}else if(Xe){if(rt){const _e=he(Se);t.texStorage2D(n.TEXTURE_2D,de,Je,_e.width,_e.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,ze,Se)}else t.texImage2D(n.TEXTURE_2D,0,Je,Le,ze,Se);p(x)&&m(ee),Me.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function re(C,x,B){if(x.image.length!==6)return;const ee=me(C,x),se=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const J=i.get(se);if(se.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const Me=Vt.getPrimaries(Vt.workingColorSpace),ue=x.colorSpace===Ss?null:Vt.getPrimaries(x.colorSpace),be=x.colorSpace===Ss||Me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,Le=[];for(let ye=0;ye<6;ye++)!we&&!Se?Le[ye]=_(x.image[ye],!0,r.maxCubemapSize):Le[ye]=Se?x.image[ye].image:x.image[ye],Le[ye]=ce(x,Le[ye]);const ze=Le[0],Je=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type),je=M(x.internalFormat,Je,Ie,x.colorSpace),Xe=x.isVideoTexture!==!0,rt=J.__version===void 0||ee===!0,Y=se.dataReady;let de=S(x,ze);Ee(n.TEXTURE_CUBE_MAP,x);let _e;if(we){Xe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,je,ze.width,ze.height);for(let ye=0;ye<6;ye++){_e=Le[ye].mipmaps;for(let Ae=0;Ae<_e.length;Ae++){const Ye=_e[Ae];x.format!==ar?Je!==null?Xe?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae,0,0,Ye.width,Ye.height,Je,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae,0,0,Ye.width,Ye.height,Je,Ie,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae,je,Ye.width,Ye.height,0,Je,Ie,Ye.data)}}}else{if(_e=x.mipmaps,Xe&&rt){_e.length>0&&de++;const ye=he(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,je,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Se){Xe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Le[ye].width,Le[ye].height,Je,Ie,Le[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,je,Le[ye].width,Le[ye].height,0,Je,Ie,Le[ye].data);for(let Ae=0;Ae<_e.length;Ae++){const lt=_e[Ae].image[ye].image;Xe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae+1,0,0,lt.width,lt.height,Je,Ie,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae+1,je,lt.width,lt.height,0,Je,Ie,lt.data)}}else{Xe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Je,Ie,Le[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,je,Je,Ie,Le[ye]);for(let Ae=0;Ae<_e.length;Ae++){const Ye=_e[Ae];Xe?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae+1,0,0,Je,Ie,Ye.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae+1,je,Je,Ie,Ye.image[ye])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),J.__version=se.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function V(C,x,B,ee,se,J){const Me=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),be=M(B.internalFormat,Me,ue,B.colorSpace);if(!i.get(x).__hasExternalTextures){const Se=Math.max(1,x.width>>J),Le=Math.max(1,x.height>>J);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,J,be,Se,Le,x.depth,0,Me,ue,null):t.texImage2D(se,J,be,Se,Le,0,Me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,se,i.get(B).__webglTexture,0,Z(x)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,se,i.get(B).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(C,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const ee=x.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,J=v(x.stencilBuffer,se),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Z(x);ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,J,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,C)}else{const ee=x.textures;for(let se=0;se<ee.length;se++){const J=ee[se],Me=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),be=M(J.internalFormat,Me,ue,J.colorSpace),we=Z(x);B&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,be,x.width,x.height):ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const ee=i.get(x.depthTexture).__webglTexture,se=Z(x);if(x.depthTexture.format===va)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Pa)ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ge(C){const x=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");$(x.__webglFramebuffer,C)}else if(B){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=n.createRenderbuffer(),ie(x.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ie(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(C,x,B){const ee=i.get(C);x!==void 0&&V(ee.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ge(C)}function De(C){const x=C.texture,B=i.get(C),ee=i.get(x);C.addEventListener("dispose",E);const se=C.textures,J=C.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=x.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let be=0;be<x.mipmaps.length;be++)B.__webglFramebuffer[ue][be]=n.createFramebuffer()}else B.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)B.__webglFramebuffer[ue]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ue=0,be=se.length;ue<be;ue++){const we=i.get(se[ue]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ne(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const be=se[ue];B.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const we=s.convert(be.format,be.colorSpace),Se=s.convert(be.type),Le=M(be.internalFormat,we,Se,be.colorSpace,C.isXRRenderTarget===!0),ze=Z(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Le,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)V(B.__webglFramebuffer[ue][be],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be);else V(B.__webglFramebuffer[ue],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,be=se.length;ue<be;ue++){const we=se[ue],Se=i.get(we);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),Ee(n.TEXTURE_2D,we),V(B.__webglFramebuffer,C,we,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),p(we)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Ee(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)V(B.__webglFramebuffer[be],C,x,n.COLOR_ATTACHMENT0,ue,be);else V(B.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,ue,0);p(x)&&m(ue),t.unbindTexture()}C.depthBuffer&&ge(C)}function Oe(C){const x=C.textures;for(let B=0,ee=x.length;B<ee;B++){const se=x[B];if(p(se)){const J=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(se).__webglTexture;t.bindTexture(J,Me),m(J),t.unbindTexture()}}}const I=[],L=[];function z(C){if(C.samples>0){if(ne(C)===!1){const x=C.textures,B=C.width,ee=C.height;let se=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),ue=x.length>1;if(ue)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<x.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const we=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,se,n.NEAREST),l===!0&&(I.length=0,L.length=0,I.push(n.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(I.push(J),L.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const we=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Z(C){return Math.min(r.maxSamples,C.samples)}function ne(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function ce(C,x){const B=C.colorSpace,ee=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==qs&&B!==Ss&&(Vt.getTransfer(B)===Kt?(ee!==ar||se!==jr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=Re,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ne}function eC(n,e){function t(i,r=Ss){let s;const o=Vt.getTransfer(r);if(i===jr)return n.UNSIGNED_BYTE;if(i===Sp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===t0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qv)return n.BYTE;if(i===e0)return n.SHORT;if(i===Nl)return n.UNSIGNED_SHORT;if(i===yp)return n.INT;if(i===Lo)return n.UNSIGNED_INT;if(i===Wr)return n.FLOAT;if(i===jl)return n.HALF_FLOAT;if(i===n0)return n.ALPHA;if(i===i0)return n.RGB;if(i===ar)return n.RGBA;if(i===r0)return n.LUMINANCE;if(i===s0)return n.LUMINANCE_ALPHA;if(i===va)return n.DEPTH_COMPONENT;if(i===Pa)return n.DEPTH_STENCIL;if(i===o0)return n.RED;if(i===bp)return n.RED_INTEGER;if(i===a0)return n.RG;if(i===Ep)return n.RG_INTEGER;if(i===Tp)return n.RGBA_INTEGER;if(i===su||i===ou||i===au||i===lu)if(o===Kt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===su)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===su)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yh||i===jh||i===Kh||i===Zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jh||i===Qh||i===ed)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jh||i===Qh)return o===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ed)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===hd||i===dd||i===pd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===td)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===id)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===od)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ad)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ld)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ud)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pd)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cu||i===md||i===_d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cu)return o===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===md)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l0||i===gd||i===vd||i===xd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class tC extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uc extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nC={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
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

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ai,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ks({vertexShader:iC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mr(new tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends Ha{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new sC,p=t.getContextAttributes();let m=null,M=null;const v=[],S=[],P=new zt;let E=null;const w=new Bi;w.layers.enable(1),w.viewport=new In;const O=new Bi;O.layers.enable(2),O.viewport=new In;const b=[w,O],y=new tC;y.layers.enable(1),y.layers.enable(2);let U=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let V=v[re];return V===void 0&&(V=new oh,v[re]=V),V.getTargetRaySpace()},this.getControllerGrip=function(re){let V=v[re];return V===void 0&&(V=new oh,v[re]=V),V.getGripSpace()},this.getHand=function(re){let V=v[re];return V===void 0&&(V=new oh,v[re]=V),V.getHandSpace()};function q(re){const V=S.indexOf(re.inputSource);if(V===-1)return;const ie=v[V];ie!==void 0&&(ie.update(re.inputSource,re.frame,c||o),ie.dispatchEvent({type:re.type,data:re.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",k);for(let re=0;re<v.length;re++){const V=S[re];V!==null&&(S[re]=null,v[re].disconnect(V))}U=null,D=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,r=null,M=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const V={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Do(d.framebufferWidth,d.framebufferHeight,{format:ar,type:jr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let V=null,ie=null,$=null;p.depth&&($=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=p.stencil?Pa:va,ie=p.stencil?Ra:Lo);const ge={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Do(f.textureWidth,f.textureHeight,{format:ar,type:jr,depthTexture:new E0(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(re){for(let V=0;V<re.removed.length;V++){const ie=re.removed[V],$=S.indexOf(ie);$>=0&&(S[$]=null,v[$].disconnect(ie))}for(let V=0;V<re.added.length;V++){const ie=re.added[V];let $=S.indexOf(ie);if($===-1){for(let Re=0;Re<v.length;Re++)if(Re>=S.length){S.push(ie),$=Re;break}else if(S[Re]===null){S[Re]=ie,$=Re;break}if($===-1)break}const ge=v[$];ge&&ge.connect(ie)}}const H=new fe,X=new fe;function W(re,V,ie){H.setFromMatrixPosition(V.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);const $=H.distanceTo(X),ge=V.projectionMatrix.elements,Re=ie.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Oe=ge[14]/(ge[10]+1),I=(ge[9]+1)/ge[5],L=(ge[9]-1)/ge[5],z=(ge[8]-1)/ge[0],Z=(Re[8]+1)/Re[0],ne=De*z,F=De*Z,ce=$/(-z+Z),he=ce*-z;V.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(he),re.translateZ(ce),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const C=De+ce,x=Oe+ce,B=ne-he,ee=F+($-he),se=I*Oe/x*C,J=L*Oe/x*C;re.projectionMatrix.makePerspective(B,ee,se,J,C,x),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function ve(re,V){V===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(V.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;_.texture!==null&&(re.near=_.depthNear,re.far=_.depthFar),y.near=O.near=w.near=re.near,y.far=O.far=w.far=re.far,(U!==y.near||D!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,D=y.far,w.near=U,w.far=D,O.near=U,O.far=D,w.updateProjectionMatrix(),O.updateProjectionMatrix(),re.updateProjectionMatrix());const V=re.parent,ie=y.cameras;ve(y,V);for(let $=0;$<ie.length;$++)ve(ie[$],V);ie.length===2?W(y,w,O):y.projectionMatrix.copy(w.projectionMatrix),T(re,y,V)};function T(re,V,ie){ie===null?re.matrix.copy(V.matrixWorld):(re.matrix.copy(ie.matrixWorld),re.matrix.invert(),re.matrix.multiply(V.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(V.projectionMatrix),re.projectionMatrixInverse.copy(V.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=yd*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Ee=null;function me(re,V){if(u=V.getViewerPose(c||o),g=V,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let $=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let Re=0;Re<ie.length;Re++){const De=ie[Re];let Oe=null;if(d!==null)Oe=d.getViewport(De);else{const L=h.getViewSubImage(f,De);Oe=L.viewport,Re===0&&(e.setRenderTargetTextures(M,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let I=b[Re];I===void 0&&(I=new Bi,I.layers.enable(Re),I.viewport=new In,b[Re]=I),I.matrix.fromArray(De.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(De.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Re===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(I)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Re=h.getDepthInformation(ie[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,r.renderState)}}for(let ie=0;ie<v.length;ie++){const $=S[ie],ge=v[ie];$!==null&&ge!==void 0&&ge.update($,V,c||o)}Ee&&Ee(re,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const Ue=new b0;Ue.setAnimationLoop(me),this.setAnimationLoop=function(re){Ee=re},this.dispose=function(){}}}const so=new Kr,aC=new Mn;function lC(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,x0(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===di&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===di&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,S=M.envMapRotation;v&&(p.envMap.value=v,so.copy(S),so.x*=-1,so.y*=-1,so.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),p.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(so)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===di&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cC(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const S=v.program;i.uniformBlockBinding(M,S)}function c(M,v){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(M,P);const E=e.render.frame;s[M.id]!==E&&(f(M),s[M.id]=E)}function u(M){const v=h();M.__bindingPointIndex=v;const S=n.createBuffer(),P=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=r[M.id],S=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,w=S.length;E<w;E++){const O=Array.isArray(S[E])?S[E]:[S[E]];for(let b=0,y=O.length;b<y;b++){const U=O[b];if(d(U,E,b,P)===!0){const D=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let k=0;k<q.length;k++){const H=q[k],X=_(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+G,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,G),G+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,v,S,P){const E=M.value,w=v+"_"+S;if(P[w]===void 0)return typeof E=="number"||typeof E=="boolean"?P[w]=E:P[w]=E.clone(),!0;{const O=P[w];if(typeof E=="number"||typeof E=="boolean"){if(O!==E)return P[w]=E,!0}else if(O.equals(E)===!1)return O.copy(E),!0}return!1}function g(M){const v=M.uniforms;let S=0;const P=16;for(let w=0,O=v.length;w<O;w++){const b=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,U=b.length;y<U;y++){const D=b[y],q=Array.isArray(D.value)?D.value:[D.value];for(let G=0,k=q.length;G<k;G++){const H=q[G],X=_(H),W=S%P;W!==0&&P-W<X.boundary&&(S+=P-W),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=X.storage}}}const E=S%P;return E>0&&(S+=P-E),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class uC{constructor(e={}){const{canvas:t=eE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ir,this.toneMapping=Ls,this.toneMappingExposure=1;const v=this;let S=!1,P=0,E=0,w=null,O=-1,b=null;const y=new In,U=new In;let D=null;const q=new Ft(0);let G=0,k=t.width,H=t.height,X=1,W=null,ve=null;const T=new In(0,0,k,H),Ee=new In(0,0,k,H);let me=!1;const Ue=new M0;let re=!1,V=!1;const ie=new Mn,$=new fe,ge=new In,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Oe(){return w===null?X:1}let I=i;function L(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xp}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),I===null){const j="webgl2";if(I=L(j,A),I===null)throw L(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let z,Z,ne,F,ce,he,C,x,B,ee,se,J,Me,ue,be,we,Se,Le,ze,Je,Ie,je,Xe,rt;function Y(){z=new g1(I),z.init(),je=new eC(I,z),Z=new u1(I,z,e,je),ne=new ZA(I),F=new y1(I),ce=new FA,he=new QA(I,z,ne,ce,Z,je,F),C=new h1(v),x=new _1(v),B=new wE(I),Xe=new l1(I,B),ee=new v1(I,B,F,Xe),se=new M1(I,ee,B,F),ze=new S1(I,Z,he),we=new f1(ce),J=new NA(v,C,x,z,Z,Xe,we),Me=new lC(v,ce),ue=new kA,be=new XA(z),Le=new a1(v,C,x,ne,se,f,l),Se=new KA(v,se,Z),rt=new cC(I,F,Z,ne),Je=new c1(I,z,F),Ie=new x1(I,z,F),F.programs=J.programs,v.capabilities=Z,v.extensions=z,v.properties=ce,v.renderLists=ue,v.shadowMap=Se,v.state=ne,v.info=F}Y();const de=new oC(v,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(k,H,!1))},this.getSize=function(A){return A.set(k,H)},this.setSize=function(A,j,oe=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,H=j,t.width=Math.floor(A*X),t.height=Math.floor(j*X),oe===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(k*X,H*X).floor()},this.setDrawingBufferSize=function(A,j,oe){k=A,H=j,X=oe,t.width=Math.floor(A*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(T)},this.setViewport=function(A,j,oe,ae){A.isVector4?T.set(A.x,A.y,A.z,A.w):T.set(A,j,oe,ae),ne.viewport(y.copy(T).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Ee)},this.setScissor=function(A,j,oe,ae){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,j,oe,ae),ne.scissor(U.copy(Ee).multiplyScalar(X).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){ne.setScissorTest(me=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,j=!0,oe=!0){let ae=0;if(A){let K=!1;if(w!==null){const Te=w.texture.format;K=Te===Tp||Te===Ep||Te===bp}if(K){const Te=w.texture.type,Fe=Te===jr||Te===Lo||Te===Nl||Te===Ra||Te===Sp||Te===Mp,Ge=Le.getClearColor(),Be=Le.getClearAlpha(),He=Ge.r,Ke=Ge.g,Ze=Ge.b;Fe?(d[0]=He,d[1]=Ke,d[2]=Ze,d[3]=Be,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=He,g[1]=Ke,g[2]=Ze,g[3]=Be,I.clearBufferiv(I.COLOR,0,g))}else ae|=I.COLOR_BUFFER_BIT}j&&(ae|=I.DEPTH_BUFFER_BIT),oe&&(ae|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ue.dispose(),be.dispose(),ce.dispose(),C.dispose(),x.dispose(),se.dispose(),Xe.dispose(),rt.dispose(),J.dispose(),de.dispose(),de.removeEventListener("sessionstart",$e),de.removeEventListener("sessionend",_t),Ce.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=F.autoReset,j=Se.enabled,oe=Se.autoUpdate,ae=Se.needsUpdate,K=Se.type;Y(),F.autoReset=A,Se.enabled=j,Se.autoUpdate=oe,Se.needsUpdate=ae,Se.type=K}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const j=A.target;j.removeEventListener("dispose",Ye),lt(j)}function lt(A){vt(A),ce.remove(A)}function vt(A){const j=ce.get(A).programs;j!==void 0&&(j.forEach(function(oe){J.releaseProgram(oe)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,oe,ae,K,Te){j===null&&(j=Re);const Fe=K.isMesh&&K.matrixWorld.determinant()<0,Ge=Ot(A,j,oe,ae,K);ne.setMaterial(ae,Fe);let Be=oe.index,He=1;if(ae.wireframe===!0){if(Be=ee.getWireframeAttribute(oe),Be===void 0)return;He=2}const Ke=oe.drawRange,Ze=oe.attributes.position;let mt=Ke.start*He,Rt=(Ke.start+Ke.count)*He;Te!==null&&(mt=Math.max(mt,Te.start*He),Rt=Math.min(Rt,(Te.start+Te.count)*He)),Be!==null?(mt=Math.max(mt,0),Rt=Math.min(Rt,Be.count)):Ze!=null&&(mt=Math.max(mt,0),Rt=Math.min(Rt,Ze.count));const ht=Rt-mt;if(ht<0||ht===1/0)return;Xe.setup(K,ae,Ge,oe,Be);let Qt,ot=Je;if(Be!==null&&(Qt=B.get(Be),ot=Ie,ot.setIndex(Qt)),K.isMesh)ae.wireframe===!0?(ne.setLineWidth(ae.wireframeLinewidth*Oe()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(K.isLine){let We=ae.linewidth;We===void 0&&(We=1),ne.setLineWidth(We*Oe()),K.isLineSegments?ot.setMode(I.LINES):K.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else K.isPoints?ot.setMode(I.POINTS):K.isSprite&&ot.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ot.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))ot.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const We=K._multiDrawStarts,pn=K._multiDrawCounts,xt=K._multiDrawCount,jn=Be?B.get(Be).bytesPerElement:1,cr=ce.get(ae).currentProgram.getUniforms();for(let qt=0;qt<xt;qt++)cr.setValue(I,"_gl_DrawID",qt),ot.render(We[qt]/jn,pn[qt])}else if(K.isInstancedMesh)ot.renderInstances(mt,ht,K.count);else if(oe.isInstancedBufferGeometry){const We=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,pn=Math.min(oe.instanceCount,We);ot.renderInstances(mt,ht,pn)}else ot.render(mt,ht)};function Lt(A,j,oe){A.transparent===!0&&A.side===Hr&&A.forceSinglePass===!1?(A.side=di,A.needsUpdate=!0,Dt(A,j,oe),A.side=Bs,A.needsUpdate=!0,Dt(A,j,oe),A.side=Hr):Dt(A,j,oe)}this.compile=function(A,j,oe=null){oe===null&&(oe=A),p=be.get(oe),p.init(j),M.push(p),oe.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),A!==oe&&A.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const ae=new Set;return A.traverse(function(K){const Te=K.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){const Ge=Te[Fe];Lt(Ge,oe,K),ae.add(Ge)}else Lt(Te,oe,K),ae.add(Te)}),M.pop(),p=null,ae},this.compileAsync=function(A,j,oe=null){const ae=this.compile(A,j,oe);return new Promise(K=>{function Te(){if(ae.forEach(function(Fe){ce.get(Fe).currentProgram.isReady()&&ae.delete(Fe)}),ae.size===0){K(A);return}setTimeout(Te,10)}z.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ct=null;function tt(A){ct&&ct(A)}function $e(){Ce.stop()}function _t(){Ce.start()}const Ce=new b0;Ce.setAnimationLoop(tt),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(A){ct=A,de.setAnimationLoop(A),A===null?Ce.stop():Ce.start()},de.addEventListener("sessionstart",$e),de.addEventListener("sessionend",_t),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(j),j=de.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,j,w),p=be.get(A,M.length),p.init(j),M.push(p),ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ue.setFromProjectionMatrix(ie),V=this.localClippingEnabled,re=we.init(this.clippingPlanes,V),_=ue.get(A,m.length),_.init(),m.push(_),de.enabled===!0&&de.isPresenting===!0){const Te=v.xr.getDepthSensingMesh();Te!==null&&st(Te,j,-1/0,v.sortObjects)}st(A,j,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,ve),De=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,De&&Le.addToRenderList(_,A),this.info.render.frame++,re===!0&&we.beginShadows();const oe=p.state.shadowsArray;Se.render(oe,A,j),re===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=_.opaque,K=_.transmissive;if(p.setupLights(),j.isArrayCamera){const Te=j.cameras;if(K.length>0)for(let Fe=0,Ge=Te.length;Fe<Ge;Fe++){const Be=Te[Fe];nt(ae,K,A,Be)}De&&Le.render(A);for(let Fe=0,Ge=Te.length;Fe<Ge;Fe++){const Be=Te[Fe];Ve(_,A,Be,Be.viewport)}}else K.length>0&&nt(ae,K,A,j),De&&Le.render(A),Ve(_,A,j);w!==null&&(he.updateMultisampleRenderTarget(w),he.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,j),Xe.resetDefaultState(),O=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],re===!0&&we.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function st(A,j,oe,ae){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){ae&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);const Fe=se.update(A),Ge=A.material;Ge.visible&&_.push(A,Fe,Ge,oe,ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const Fe=se.update(A),Ge=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ge.copy(Fe.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(Ge)){const Be=Fe.groups;for(let He=0,Ke=Be.length;He<Ke;He++){const Ze=Be[He],mt=Ge[Ze.materialIndex];mt&&mt.visible&&_.push(A,Fe,mt,oe,ge.z,Ze)}}else Ge.visible&&_.push(A,Fe,Ge,oe,ge.z,null)}}const Te=A.children;for(let Fe=0,Ge=Te.length;Fe<Ge;Fe++)st(Te[Fe],j,oe,ae)}function Ve(A,j,oe,ae){const K=A.opaque,Te=A.transmissive,Fe=A.transparent;p.setupLightsView(oe),re===!0&&we.setGlobalState(v.clippingPlanes,oe),ae&&ne.viewport(y.copy(ae)),K.length>0&&Gt(K,j,oe),Te.length>0&&Gt(Te,j,oe),Fe.length>0&&Gt(Fe,j,oe),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function nt(A,j,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ae.id]===void 0&&(p.state.transmissionRenderTarget[ae.id]=new Do(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?jl:jr,minFilter:xo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const Te=p.state.transmissionRenderTarget[ae.id],Fe=ae.viewport||y;Te.setSize(Fe.z,Fe.w);const Ge=v.getRenderTarget();v.setRenderTarget(Te),v.getClearColor(q),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),De?Le.render(oe):v.clear();const Be=v.toneMapping;v.toneMapping=Ls;const He=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),p.setupLightsView(ae),re===!0&&we.setGlobalState(v.clippingPlanes,ae),Gt(A,oe,ae),he.updateMultisampleRenderTarget(Te),he.updateRenderTargetMipmap(Te),z.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ze=0,mt=j.length;Ze<mt;Ze++){const Rt=j[Ze],ht=Rt.object,Qt=Rt.geometry,ot=Rt.material,We=Rt.group;if(ot.side===Hr&&ht.layers.test(ae.layers)){const pn=ot.side;ot.side=di,ot.needsUpdate=!0,ut(ht,oe,ae,Qt,ot,We),ot.side=pn,ot.needsUpdate=!0,Ke=!0}}Ke===!0&&(he.updateMultisampleRenderTarget(Te),he.updateRenderTargetMipmap(Te))}v.setRenderTarget(Ge),v.setClearColor(q,G),He!==void 0&&(ae.viewport=He),v.toneMapping=Be}function Gt(A,j,oe){const ae=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Fe=A[K],Ge=Fe.object,Be=Fe.geometry,He=ae===null?Fe.material:ae,Ke=Fe.group;Ge.layers.test(oe.layers)&&ut(Ge,j,oe,Be,He,Ke)}}function ut(A,j,oe,ae,K,Te){A.onBeforeRender(v,j,oe,ae,K,Te),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.transparent===!0&&K.side===Hr&&K.forceSinglePass===!1?(K.side=di,K.needsUpdate=!0,v.renderBufferDirect(oe,j,ae,K,A,Te),K.side=Bs,K.needsUpdate=!0,v.renderBufferDirect(oe,j,ae,K,A,Te),K.side=Hr):v.renderBufferDirect(oe,j,ae,K,A,Te),A.onAfterRender(v,j,oe,ae,K,Te)}function Dt(A,j,oe){j.isScene!==!0&&(j=Re);const ae=ce.get(A),K=p.state.lights,Te=p.state.shadowsArray,Fe=K.state.version,Ge=J.getParameters(A,K.state,Te,j,oe),Be=J.getProgramCacheKey(Ge);let He=ae.programs;ae.environment=A.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(A.isMeshStandardMaterial?x:C).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Ye),He=new Map,ae.programs=He);let Ke=He.get(Be);if(Ke!==void 0){if(ae.currentProgram===Ke&&ae.lightsStateVersion===Fe)return wt(A,Ge),Ke}else Ge.uniforms=J.getUniforms(A),A.onBeforeCompile(Ge,v),Ke=J.acquireProgram(Ge,Be),He.set(Be,Ke),ae.uniforms=Ge.uniforms;const Ze=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=we.uniform),wt(A,Ge),ae.needsLights=Un(A),ae.lightsStateVersion=Fe,ae.needsLights&&(Ze.ambientLightColor.value=K.state.ambient,Ze.lightProbe.value=K.state.probe,Ze.directionalLights.value=K.state.directional,Ze.directionalLightShadows.value=K.state.directionalShadow,Ze.spotLights.value=K.state.spot,Ze.spotLightShadows.value=K.state.spotShadow,Ze.rectAreaLights.value=K.state.rectArea,Ze.ltc_1.value=K.state.rectAreaLTC1,Ze.ltc_2.value=K.state.rectAreaLTC2,Ze.pointLights.value=K.state.point,Ze.pointLightShadows.value=K.state.pointShadow,Ze.hemisphereLights.value=K.state.hemi,Ze.directionalShadowMap.value=K.state.directionalShadowMap,Ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ze.spotShadowMap.value=K.state.spotShadowMap,Ze.spotLightMatrix.value=K.state.spotLightMatrix,Ze.spotLightMap.value=K.state.spotLightMap,Ze.pointShadowMap.value=K.state.pointShadowMap,Ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=Ke,ae.uniformsList=null,Ke}function ln(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=uu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function wt(A,j){const oe=ce.get(A);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Ot(A,j,oe,ae,K){j.isScene!==!0&&(j=Re),he.resetTextureUnits();const Te=j.fog,Fe=ae.isMeshStandardMaterial?j.environment:null,Ge=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qs,Be=(ae.isMeshStandardMaterial?x:C).get(ae.envMap||Fe),He=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ke=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!oe.morphAttributes.position,mt=!!oe.morphAttributes.normal,Rt=!!oe.morphAttributes.color;let ht=Ls;ae.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=v.toneMapping);const Qt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ot=Qt!==void 0?Qt.length:0,We=ce.get(ae),pn=p.state.lights;if(re===!0&&(V===!0||A!==b)){const xe=A===b&&ae.id===O;we.setState(ae,A,xe)}let xt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==pn.state.version||We.outputColorSpace!==Ge||K.isBatchedMesh&&We.batching===!1||!K.isBatchedMesh&&We.batching===!0||K.isBatchedMesh&&We.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&We.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||K.isInstancedMesh&&We.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&We.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&We.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&We.instancingMorph===!1&&K.morphTexture!==null||We.envMap!==Be||ae.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==we.numPlanes||We.numIntersection!==we.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Ke||We.morphTargets!==Ze||We.morphNormals!==mt||We.morphColors!==Rt||We.toneMapping!==ht||We.morphTargetsCount!==ot)&&(xt=!0):(xt=!0,We.__version=ae.version);let jn=We.currentProgram;xt===!0&&(jn=Dt(ae,j,K));let cr=!1,qt=!1,Nn=!1;const en=jn.getUniforms(),R=We.uniforms;if(ne.useProgram(jn.program)&&(cr=!0,qt=!0,Nn=!0),ae.id!==O&&(O=ae.id,qt=!0),cr||b!==A){en.setValue(I,"projectionMatrix",A.projectionMatrix),en.setValue(I,"viewMatrix",A.matrixWorldInverse);const xe=en.map.cameraPosition;xe!==void 0&&xe.setValue(I,$.setFromMatrixPosition(A.matrixWorld)),Z.logarithmicDepthBuffer&&en.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&en.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,qt=!0,Nn=!0)}if(K.isSkinnedMesh){en.setOptional(I,K,"bindMatrix"),en.setOptional(I,K,"bindMatrixInverse");const xe=K.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),en.setValue(I,"boneTexture",xe.boneTexture,he))}K.isBatchedMesh&&(en.setOptional(I,K,"batchingTexture"),en.setValue(I,"batchingTexture",K._matricesTexture,he),en.setOptional(I,K,"batchingIdTexture"),en.setValue(I,"batchingIdTexture",K._indirectTexture,he),en.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&en.setValue(I,"batchingColorTexture",K._colorsTexture,he));const te=oe.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&ze.update(K,oe,jn),(qt||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,en.setValue(I,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(R.envMap.value=Be,R.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(R.envMapIntensity.value=j.environmentIntensity),qt&&(en.setValue(I,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Mt(R,Nn),Te&&ae.fog===!0&&Me.refreshFogUniforms(R,Te),Me.refreshMaterialUniforms(R,ae,X,H,p.state.transmissionRenderTarget[A.id]),uu.upload(I,ln(We),R,he)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(uu.upload(I,ln(We),R,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&en.setValue(I,"center",K.center),en.setValue(I,"modelViewMatrix",K.modelViewMatrix),en.setValue(I,"normalMatrix",K.normalMatrix),en.setValue(I,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const xe=ae.uniformsGroups;for(let le=0,Pe=xe.length;le<Pe;le++){const et=xe[le];rt.update(et,jn),rt.bind(et,jn)}}return jn}function Mt(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Un(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,j,oe){ce.get(A.texture).__webglTexture=j,ce.get(A.depthTexture).__webglTexture=oe;const ae=ce.get(A);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const oe=ce.get(A);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,oe=0){w=A,P=j,E=oe;let ae=!0,K=null,Te=!1,Fe=!1;if(A){const Be=ce.get(A);Be.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(I.FRAMEBUFFER,null),ae=!1):Be.__webglFramebuffer===void 0?he.setupRenderTarget(A):Be.__hasExternalTextures&&he.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);const Ke=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?K=Ke[j][oe]:K=Ke[j],Te=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?K=ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?K=Ke[oe]:K=Ke,y.copy(A.viewport),U.copy(A.scissor),D=A.scissorTest}else y.copy(T).multiplyScalar(X).floor(),U.copy(Ee).multiplyScalar(X).floor(),D=me;if(ne.bindFramebuffer(I.FRAMEBUFFER,K)&&ae&&ne.drawBuffers(A,K),ne.viewport(y),ne.scissor(U),ne.setScissorTest(D),Te){const Be=ce.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,oe)}else if(Fe){const Be=ce.get(A.texture),He=j||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,oe||0,He)}O=-1},this.readRenderTargetPixels=function(A,j,oe,ae,K,Te,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){ne.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const Be=A.texture,He=Be.format,Ke=Be.type;if(!Z.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ae&&oe>=0&&oe<=A.height-K&&I.readPixels(j,oe,ae,K,je.convert(He),je.convert(Ke),Te)}finally{const Be=w!==null?ce.get(w).__webglFramebuffer:null;ne.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,j,oe,ae,K,Te,Fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){ne.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const Be=A.texture,He=Be.format,Ke=Be.type;if(!Z.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-ae&&oe>=0&&oe<=A.height-K){const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(j,oe,ae,K,je.convert(He),je.convert(Ke),0),I.flush();const mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await tE(I,mt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te)}finally{I.deleteBuffer(Ze),I.deleteSync(mt)}return Te}}finally{const Be=w!==null?ce.get(w).__webglFramebuffer:null;ne.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(A,j=null,oe=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const ae=Math.pow(2,-oe),K=Math.floor(A.image.width*ae),Te=Math.floor(A.image.height*ae),Fe=j!==null?j.x:0,Ge=j!==null?j.y:0;he.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,oe,0,0,Fe,Ge,K,Te),ne.unbindTexture()},this.copyTextureToTexture=function(A,j,oe=null,ae=null,K=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,A=arguments[1],j=arguments[2],K=arguments[3]||0,oe=null);let Te,Fe,Ge,Be,He,Ke;oe!==null?(Te=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,Ge=oe.min.x,Be=oe.min.y):(Te=A.image.width,Fe=A.image.height,Ge=0,Be=0),ae!==null?(He=ae.x,Ke=ae.y):(He=0,Ke=0);const Ze=je.convert(j.format),mt=je.convert(j.type);he.setTexture2D(j,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const Rt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qt=I.getParameter(I.UNPACK_SKIP_PIXELS),ot=I.getParameter(I.UNPACK_SKIP_ROWS),We=I.getParameter(I.UNPACK_SKIP_IMAGES),pn=A.isCompressedTexture?A.mipmaps[K]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,pn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,K,He,Ke,Te,Fe,Ze,mt,pn.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,K,He,Ke,pn.width,pn.height,Ze,pn.data):I.texSubImage2D(I.TEXTURE_2D,K,He,Ke,Te,Fe,Ze,mt,pn),I.pixelStorei(I.UNPACK_ROW_LENGTH,Rt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),K===0&&j.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(A,j,oe=null,ae=null,K=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,A=arguments[2],j=arguments[3],K=arguments[4]||0);let Te,Fe,Ge,Be,He,Ke,Ze,mt,Rt;const ht=A.isCompressedTexture?A.mipmaps[K]:A.image;oe!==null?(Te=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,Ge=oe.max.z-oe.min.z,Be=oe.min.x,He=oe.min.y,Ke=oe.min.z):(Te=ht.width,Fe=ht.height,Ge=ht.depth,Be=0,He=0,Ke=0),ae!==null?(Ze=ae.x,mt=ae.y,Rt=ae.z):(Ze=0,mt=0,Rt=0);const Qt=je.convert(j.format),ot=je.convert(j.type);let We;if(j.isData3DTexture)he.setTexture3D(j,0),We=I.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)he.setTexture2DArray(j,0),We=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const pn=I.getParameter(I.UNPACK_ROW_LENGTH),xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),jn=I.getParameter(I.UNPACK_SKIP_PIXELS),cr=I.getParameter(I.UNPACK_SKIP_ROWS),qt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Be),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(We,K,Ze,mt,Rt,Te,Fe,Ge,Qt,ot,ht.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(We,K,Ze,mt,Rt,Te,Fe,Ge,Qt,ht.data):I.texSubImage3D(We,K,Ze,mt,Rt,Te,Fe,Ge,Qt,ot,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,pn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,cr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt),K===0&&j.generateMipmaps&&I.generateMipmap(We),ne.unbindTexture()},this.initRenderTarget=function(A){ce.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){P=0,E=0,w=null,ne.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wp?"display-p3":"srgb",t.unpackColorSpace=Vt.workingColorSpace===uf?"display-p3":"srgb"}}class Rp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(e),this.density=t}clone(){return new Rp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fC extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R0 extends Ql{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $_=new Mn,Md=new p0,Nc=new ff,Fc=new fe;class hC extends pi{constructor(e=new ns,t=new R0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;$_.copy(r).invert(),Md.copy(e.ray).applyMatrix4($_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Fc.fromBufferAttribute(h,p),q_(Fc,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Fc.fromBufferAttribute(h,g),q_(Fc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function q_(n,e,t,i,r,s,o){const a=Md.distanceSqToPoint(n);if(a<t){const l=new fe;Md.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class dC extends ai{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);const ah=256,lh=256,pC={__name:"MoonTerrain",setup(n){const e=ii(null);let t,i,r,s,o,a;$s(()=>{console.log("MoonTerrain component mounted"),l(),g()}),hp(()=>{a&&cancelAnimationFrame(a),r&&r.dispose()});const l=()=>{t=new fC,t.background=new Ft(0),t.fog=new Rp(1118481,.002),i=new Bi(60,window.innerWidth/window.innerHeight,1,1e4),i.position.set(0,800,0),i.lookAt(0,-200,0);const _=c(ah,lh),p=new tc(7500,7500,ah-1,lh-1);p.rotateX(-Math.PI/2);const m=p.attributes.position.array;for(let v=0,S=0,P=m.length;v<P;v++,S+=3)m[S+1]=_[v]*15;const M=new dC(u(_,ah,lh));M.wrapS=Gr,M.wrapT=Gr,M.colorSpace=ir,s=new Mr(p,new Ap({map:M})),t.add(s),r=new uC({alpha:!0,antialias:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(r.domElement),h(),f(),window.addEventListener("resize",d),console.log("Moon terrain initialized")},c=(_,p)=>{let m=Math.PI/4;const M=()=>{const E=Math.sin(m++)*1e4;return E-Math.floor(E)},v=_*p,S=new Uint8Array(v);M()*100;let P=1;for(let E=0;E<4;E++){for(let w=0;w<v;w++){const O=w%_,b=Math.floor(w/_),y=Math.abs(Math.sin(O/P)*Math.cos(b/P))*P*2,U=Math.abs(M()-.5)*P*1.5;S[w]+=Math.min(255,y+U)}P*=3}return S},u=(_,p,m)=>{const M=document.createElement("canvas");M.width=p,M.height=m;const v=M.getContext("2d");v.fillStyle="#1a1a1a",v.fillRect(0,0,p,m);const S=v.getImageData(0,0,M.width,M.height),P=S.data;for(let O=0,b=0,y=P.length;O<y;O+=4,b++){const D=60+_[b]*.4;P[O]=D,P[O+1]=D,P[O+2]=D,P[O+3]=255}v.putImageData(S,0,0);const E=document.createElement("canvas");E.width=p*2,E.height=m*2;const w=E.getContext("2d");return w.scale(2,2),w.drawImage(M,0,0),E},h=()=>{const _=new ns,p=new R0({color:16777215,size:2}),m=[];for(let v=0;v<1e3;v++){const S=(Math.random()-.5)*2e4,P=Math.random()*5e3+1e3,E=(Math.random()-.5)*2e4;m.push(S,P,E)}_.setAttribute("position",new Ds(m,3));const M=new hC(_,p);t.add(M)},f=()=>{let _=0,p=0;const m=M=>{_=(M.clientX-window.innerWidth/2)*.002,p=(M.clientY-window.innerHeight/2)*.002};window.addEventListener("mousemove",m),o={update:()=>{i.position.x+=_*2,i.position.z+=p*2,i.rotation.y+=_*.01,i.rotation.x+=p*.01}}},d=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},g=()=>{a=requestAnimationFrame(g),o&&o.update(),r.render(t,i)};return(_,p)=>(Ct(),It("div",{ref_key:"moonContainer",ref:e,class:"moon-terrain-container"},null,512))}},mC=Yn(pC,[["__scopeId","data-v-790682f0"]]),_C={name:"App",components:{MoonTerrain:mC}},gC={class:"starry-night"},vC={id:"app"};function xC(n,e,t,i,r,s){const o=Ih("MoonTerrain"),a=Ih("router-view");return Ct(),It("div",gC,[Nt(o),Ne("div",vC,[Nt(a,null,{default:wa(({Component:l})=>[Nt(vp,{name:"route",mode:"out-in"},{default:wa(()=>[(Ct(),Gv(yS(l)))]),_:2},1024)]),_:1})])])}const yC=Yn(_C,[["render",xC]]);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const P0=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ga=n=>P0?Symbol(n):"_vr_"+n,SC=Ga("rvlm"),Y_=Ga("rvd"),df=Ga("r"),L0=Ga("rl"),bd=Ga("rvl"),oa=typeof window<"u";function MC(n){return n.__esModule||P0&&n[Symbol.toStringTag]==="Module"}const $t=Object.assign;function ch(n,e){const t={};for(const i in e){const r=e[i];t[i]=Array.isArray(r)?r.map(n):n(r)}return t}const _l=()=>{},bC=/\/$/,EC=n=>n.replace(bC,"");function uh(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=n(s)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=CC(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function TC(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function j_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function wC(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Da(e.matched[i],t.matched[r])&&D0(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Da(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function D0(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!AC(n[t],e[t]))return!1;return!0}function AC(n,e){return Array.isArray(n)?K_(n,e):Array.isArray(e)?K_(e,n):n===e}function K_(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function CC(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Fl;(function(n){n.pop="pop",n.push="push"})(Fl||(Fl={}));var gl;(function(n){n.back="back",n.forward="forward",n.unknown=""})(gl||(gl={}));function RC(n){if(!n)if(oa){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),EC(n)}const PC=/^[^#]+#/;function LC(n,e){return n.replace(PC,"#")+e}function DC(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const pf=()=>({left:window.pageXOffset,top:window.pageYOffset});function IC(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=DC(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Z_(n,e){return(history.state?history.state.position-e:-1)+n}const Ed=new Map;function OC(n,e){Ed.set(n,e)}function UC(n){const e=Ed.get(n);return Ed.delete(n),e}let NC=()=>location.protocol+"//"+location.host;function I0(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),j_(l,"")}return j_(t,n)+i+r}function FC(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=I0(n,location),g=t.value,_=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}p=_?f.position-_.position:0}else i(d);r.forEach(m=>{m(t.value,g,{delta:p,type:Fl.pop,direction:p?p>0?gl.forward:gl.back:gl.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState($t({},f.state,{scroll:pf()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function J_(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?pf():null}}function BC(n){const{history:e,location:t}=window,i={value:I0(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:NC()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=$t({},e.state,J_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=$t({},r.value,e.state,{forward:l,scroll:pf()});s(u.current,u,!0);const h=$t({},J_(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function kC(n){n=RC(n);const e=BC(n),t=FC(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=$t({location:"",base:n,go:i,createHref:LC.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zC(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),kC(n)}function HC(n){return typeof n=="string"||n&&typeof n=="object"}function O0(n){return typeof n=="string"||typeof n=="symbol"}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},U0=Ga("nf");var Q_;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Q_||(Q_={}));function Ia(n,e){return $t(new Error,{type:n,[U0]:!0},e)}function ms(n,e){return n instanceof Error&&U0 in n&&(e==null||!!(n.type&e))}const eg="[^/]+?",VC={sensitive:!1,strict:!1,start:!0,end:!0},GC=/[.+*?^${}()[\]/\\]/g;function WC(n,e){const t=$t({},VC,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(GC,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:p,regexp:m}=f;s.push({name:g,repeatable:_,optional:p});const M=m||eg;if(M!==eg){d+=10;try{new RegExp(`(${M})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+S.message)}}let v=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(v=p&&c.length<2?`(?:/${v})`:"/"+v),p&&(v+="?"),r+=v,d+=20,p&&(d+=-8),_&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:p}=d,m=g in c?c[g]:"";if(Array.isArray(m)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(m)?m.join("/"):m;if(!M)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function XC(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $C(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=XC(i[t],r[t]);if(s)return s;t++}return r.length-i.length}const qC={type:0,value:""},YC=/[a-zA-Z0-9_]/;function jC(n){if(!n)return[[]];if(n==="/")return[[qC]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:YC.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function KC(n,e,t){const i=WC(jC(n.path),t),r=$t(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ZC(n,e){const t=[],i=new Map;e=ng({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,g=QC(u);g.aliasOf=f&&f.record;const _=ng(e,u),p=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of v)p.push($t({},g,{components:f?f.record.components:g.components,path:S,aliasOf:f?f.record:g}))}let m,M;for(const v of p){const{path:S}=v;if(h&&S[0]!=="/"){const P=h.record.path,E=P[P.length-1]==="/"?"":"/";v.path=h.record.path+(S&&E+S)}if(m=KC(v,h,_),f?f.alias.push(m):(M=M||m,M!==m&&M.alias.push(m),d&&u.name&&!tg(m)&&o(u.name)),"children"in g){const P=g.children;for(let E=0;E<P.length;E++)s(P[E],m,f&&f.children[E])}f=f||m,l(m)}return M?()=>{o(M)}:_l}function o(u){if(O0(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&$C(u,t[h])>=0&&(u.record.path!==t[h].record.path||!N0(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!tg(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ia(1,{location:u});_=f.record.name,d=$t(JC(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(M=>M.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?i.get(h.name):t.find(M=>M.re.test(h.path)),!f)throw Ia(1,{location:u,currentLocation:h});_=f.record.name,d=$t({},h.params,u.params),g=f.stringify(d)}const p=[];let m=f;for(;m;)p.unshift(m.record),m=m.parent;return{name:_,path:g,params:d,matched:p,meta:tR(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function JC(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function QC(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:eR(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function eR(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function tg(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function tR(n){return n.reduce((e,t)=>$t(e,t.meta),{})}function ng(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function N0(n,e){return e.children.some(t=>t===n||N0(n,t))}const F0=/#/g,nR=/&/g,iR=/\//g,rR=/=/g,sR=/\?/g,B0=/\+/g,oR=/%5B/g,aR=/%5D/g,k0=/%5E/g,lR=/%60/g,z0=/%7B/g,cR=/%7C/g,H0=/%7D/g,uR=/%20/g;function Pp(n){return encodeURI(""+n).replace(cR,"|").replace(oR,"[").replace(aR,"]")}function fR(n){return Pp(n).replace(z0,"{").replace(H0,"}").replace(k0,"^")}function Td(n){return Pp(n).replace(B0,"%2B").replace(uR,"+").replace(F0,"%23").replace(nR,"%26").replace(lR,"`").replace(z0,"{").replace(H0,"}").replace(k0,"^")}function hR(n){return Td(n).replace(rR,"%3D")}function dR(n){return Pp(n).replace(F0,"%23").replace(sR,"%3F")}function pR(n){return n==null?"":dR(n).replace(iR,"%2F")}function Iu(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function mR(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(B0," "),o=s.indexOf("="),a=Iu(o<0?s:s.slice(0,o)),l=o<0?null:Iu(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ig(n){let e="";for(let t in n){const i=n[t];if(t=hR(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(s=>s&&Td(s)):[i&&Td(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function _R(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Ja(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function ys(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ia(4,{from:t,to:e})):h instanceof Error?a(h):HC(h)?a(Ia(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function fh(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(gR(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ys(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=MC(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ys(f,t,i,s,o)()}))}}return r}function gR(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function rg(n){const e=Tr(df),t=Tr(L0),i=xr(()=>e.resolve(Cs(n.to))),r=xr(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Da.bind(null,u));if(f>-1)return f;const d=sg(l[c-2]);return c>1&&sg(u)===d&&h[h.length-1].path!==d?h.findIndex(Da.bind(null,l[c-2])):f}),s=xr(()=>r.value>-1&&yR(t.params,i.value.params)),o=xr(()=>r.value>-1&&r.value===t.matched.length-1&&D0(t.params,i.value.params));function a(l={}){return xR(l)?e[Cs(n.replace)?"replace":"push"](Cs(n.to)).catch(_l):Promise.resolve()}return{route:i,href:xr(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const vR=Mv({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rg,setup(n,{slots:e}){const t=ql(rg(n)),{options:i}=Tr(df),r=xr(()=>({[og(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[og(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:gp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),wd=vR;function xR(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function yR(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function sg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const og=(n,e,t)=>n??e??t,SR=Mv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=Tr(bd),r=xr(()=>n.route||i.value),s=Tr(Y_,0),o=xr(()=>r.value.matched[s]);eu(Y_,s+1),eu(SC,o),eu(bd,r);const a=ii();return tu(()=>[a.value,o.value,n.name],([l,c,u],[h,f,d])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===h&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Da(c,f)||!h)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[n.name],h=n.name;if(!u)return ag(t.default,{Component:u,route:l});const f=c.props[n.name],d=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=gp(u,$t({},d,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(c.instances[h]=null)},ref:a}));return ag(t.default,{Component:_,route:l})||_}}});function ag(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const MR=SR;function bR(n){const e=ZC(n.routes,n),t=n.parseQuery||mR,i=n.stringifyQuery||ig,r=n.history,s=Ja(),o=Ja(),a=Ja(),l=aS(ps);let c=ps;oa&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ch.bind(null,V=>""+V),h=ch.bind(null,pR),f=ch.bind(null,Iu);function d(V,ie){let $,ge;return O0(V)?($=e.getRecordMatcher(V),ge=ie):ge=V,e.addRoute(ge,$)}function g(V){const ie=e.getRecordMatcher(V);ie&&e.removeRoute(ie)}function _(){return e.getRoutes().map(V=>V.record)}function p(V){return!!e.getRecordMatcher(V)}function m(V,ie){if(ie=$t({},ie||l.value),typeof V=="string"){const I=uh(t,V,ie.path),L=e.resolve({path:I.path},ie),z=r.createHref(I.fullPath);return $t(I,L,{params:f(L.params),hash:Iu(I.hash),redirectedFrom:void 0,href:z})}let $;if("path"in V)$=$t({},V,{path:uh(t,V.path,ie.path).path});else{const I=$t({},V.params);for(const L in I)I[L]==null&&delete I[L];$=$t({},V,{params:h(V.params)}),ie.params=h(ie.params)}const ge=e.resolve($,ie),Re=V.hash||"";ge.params=u(f(ge.params));const De=TC(i,$t({},V,{hash:fR(Re),path:ge.path})),Oe=r.createHref(De);return $t({fullPath:De,hash:Re,query:i===ig?_R(V.query):V.query||{}},ge,{redirectedFrom:void 0,href:Oe})}function M(V){return typeof V=="string"?uh(t,V,l.value.path):$t({},V)}function v(V,ie){if(c!==V)return Ia(8,{from:ie,to:V})}function S(V){return w(V)}function P(V){return S($t(M(V),{replace:!0}))}function E(V){const ie=V.matched[V.matched.length-1];if(ie&&ie.redirect){const{redirect:$}=ie;let ge=typeof $=="function"?$(V):$;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=M(ge):{path:ge},ge.params={}),$t({query:V.query,hash:V.hash,params:V.params},ge)}}function w(V,ie){const $=c=m(V),ge=l.value,Re=V.state,De=V.force,Oe=V.replace===!0,I=E($);if(I)return w($t(M(I),{state:Re,force:De,replace:Oe}),ie||$);const L=$;L.redirectedFrom=ie;let z;return!De&&wC(i,ge,$)&&(z=Ia(16,{to:L,from:ge}),T(ge,ge,!0,!1)),(z?Promise.resolve(z):b(L,ge)).catch(Z=>ms(Z)?ms(Z,2)?Z:ve(Z):X(Z,L,ge)).then(Z=>{if(Z){if(ms(Z,2))return w($t(M(Z.to),{state:Re,force:De,replace:Oe}),ie||L)}else Z=U(L,ge,!0,Oe,Re);return y(L,ge,Z),Z})}function O(V,ie){const $=v(V,ie);return $?Promise.reject($):Promise.resolve()}function b(V,ie){let $;const[ge,Re,De]=ER(V,ie);$=fh(ge.reverse(),"beforeRouteLeave",V,ie);for(const I of ge)I.leaveGuards.forEach(L=>{$.push(ys(L,V,ie))});const Oe=O.bind(null,V,ie);return $.push(Oe),na($).then(()=>{$=[];for(const I of s.list())$.push(ys(I,V,ie));return $.push(Oe),na($)}).then(()=>{$=fh(Re,"beforeRouteUpdate",V,ie);for(const I of Re)I.updateGuards.forEach(L=>{$.push(ys(L,V,ie))});return $.push(Oe),na($)}).then(()=>{$=[];for(const I of V.matched)if(I.beforeEnter&&!ie.matched.includes(I))if(Array.isArray(I.beforeEnter))for(const L of I.beforeEnter)$.push(ys(L,V,ie));else $.push(ys(I.beforeEnter,V,ie));return $.push(Oe),na($)}).then(()=>(V.matched.forEach(I=>I.enterCallbacks={}),$=fh(De,"beforeRouteEnter",V,ie),$.push(Oe),na($))).then(()=>{$=[];for(const I of o.list())$.push(ys(I,V,ie));return $.push(Oe),na($)}).catch(I=>ms(I,8)?I:Promise.reject(I))}function y(V,ie,$){for(const ge of a.list())ge(V,ie,$)}function U(V,ie,$,ge,Re){const De=v(V,ie);if(De)return De;const Oe=ie===ps,I=oa?history.state:{};$&&(ge||Oe?r.replace(V.fullPath,$t({scroll:Oe&&I&&I.scroll},Re)):r.push(V.fullPath,Re)),l.value=V,T(V,ie,$,Oe),ve()}let D;function q(){D=r.listen((V,ie,$)=>{const ge=m(V),Re=E(ge);if(Re){w($t(Re,{replace:!0}),ge).catch(_l);return}c=ge;const De=l.value;oa&&OC(Z_(De.fullPath,$.delta),pf()),b(ge,De).catch(Oe=>ms(Oe,12)?Oe:ms(Oe,2)?(w(Oe.to,ge).then(I=>{ms(I,20)&&!$.delta&&$.type===Fl.pop&&r.go(-1,!1)}).catch(_l),Promise.reject()):($.delta&&r.go(-$.delta,!1),X(Oe,ge,De))).then(Oe=>{Oe=Oe||U(ge,De,!1),Oe&&($.delta?r.go(-$.delta,!1):$.type===Fl.pop&&ms(Oe,20)&&r.go(-1,!1)),y(ge,De,Oe)}).catch(_l)})}let G=Ja(),k=Ja(),H;function X(V,ie,$){ve(V);const ge=k.list();return ge.length?ge.forEach(Re=>Re(V,ie,$)):console.error(V),Promise.reject(V)}function W(){return H&&l.value!==ps?Promise.resolve():new Promise((V,ie)=>{G.add([V,ie])})}function ve(V){return H||(H=!V,q(),G.list().forEach(([ie,$])=>V?$(V):ie()),G.reset()),V}function T(V,ie,$,ge){const{scrollBehavior:Re}=n;if(!oa||!Re)return Promise.resolve();const De=!$&&UC(Z_(V.fullPath,0))||(ge||!$)&&history.state&&history.state.scroll||null;return Su().then(()=>Re(V,ie,De)).then(Oe=>Oe&&IC(Oe)).catch(Oe=>X(Oe,V,ie))}const Ee=V=>r.go(V);let me;const Ue=new Set;return{currentRoute:l,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:_,resolve:m,options:n,push:S,replace:P,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:W,install(V){const ie=this;V.component("RouterLink",wd),V.component("RouterView",MR),V.config.globalProperties.$router=ie,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Cs(l)}),oa&&!me&&l.value===ps&&(me=!0,S(r.location).catch(Re=>{}));const $={};for(const Re in ps)$[Re]=xr(()=>l.value[Re]);V.provide(df,ie),V.provide(L0,ql($)),V.provide(bd,l);const ge=V.unmount;Ue.add(V),V.unmount=function(){Ue.delete(V),Ue.size<1&&(c=ps,D&&D(),l.value=ps,me=!1,H=!1),ge()}}}}function na(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ER(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Da(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Da(c,l))||r.push(l))}return[t,i,r]}function TR(){return Tr(df)}function kr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function V0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},Lp,$n,an,Wi=1e8,jt=1/Wi,Ad=Math.PI*2,wR=Ad/4,AR=0,G0=Math.sqrt,CR=Math.cos,RR=Math.sin,On=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},Zr=function(e){return typeof e=="number"},Dp=function(e){return typeof e>"u"},Pr=function(e){return typeof e=="object"},mi=function(e){return e!==!1},Ip=function(){return typeof window<"u"},Bc=function(e){return dn(e)||On(e)},W0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,Cd=/(?:-?\.?\d|\.)+/gi,X0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ua=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$0=/[+-]=-?[.\d]+/,q0=/[^,'"\[\]\s]+/gi,PR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,un,pr,Rd,Op,Oi={},Ou={},Y0,j0=function(e){return(Ou=Io(e,Oi))&&Si},Up=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bl=function(e,t){return!t&&console.warn(e)},K0=function(e,t){return e&&(Oi[e]=t)&&Ou&&(Ou[e]=t)||Oi},kl=function(){return 0},LR={suppressEvents:!0,isStart:!0,kill:!1},fu={suppressEvents:!0,kill:!1},DR={suppressEvents:!0},Np={},Is=[],Pd={},Z0,Ci={},dh={},lg=30,hu=[],Fp="",Bp=function(e){var t=e[0],i,r;if(Pr(t)||dn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=hu.length;r--&&!hu[r].targetTest(t););i=hu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Sx(e[r],i)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||Bp(Xi(e))[0]._gsap},J0=function(e,t,i){return(i=e[t])&&dn(i)?e[t]():Dp(i)&&e.getAttribute&&e.getAttribute(t)||i},_i=function(e,t){return(e=e.split(",")).forEach(t)||e},_n=function(e){return Math.round(e*1e5)/1e5||0},Dn=function(e){return Math.round(e*1e7)/1e7||0},ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},IR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Uu=function(){var e=Is.length,t=Is.slice(0),i,r;for(Pd={},Is.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Q0=function(e,t,i,r){Is.length&&!$n&&Uu(),e.render(t,i,$n&&t<0&&(e._initted||e._startAt)),Is.length&&!$n&&Uu()},ex=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(q0).length<2?t:On(e)?e.trim():e},tx=function(e){return e},Yi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},OR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Io=function(e,t){for(var i in t)e[i]=t[i];return e},cg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Nu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},vl=function(e){var t=e.parent||un,i=e.keyframes?OR(qn(e.keyframes)):Yi;if(mi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},UR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},nx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},mf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},To=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},NR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ld=function(e,t,i,r){return e._startAt&&($n?e._startAt.revert(fu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},FR=function n(e){return!e||e._ts&&n(e.parent)},ug=function(e){return e._repeat?Ua(e._tTime,e=e.duration()+e._rDelay)*e:0},Ua=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Fu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_f=function(e){return e._end=Dn(e._start+(e._tDur/Math.abs(e._ts||e._rts||jt)||0))},gf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Dn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_f(e),i._dirty||To(i,e)),e},ix=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Fu(e.rawTime(),t),(!t._dur||nc(0,t.totalDuration(),i)-t._tTime>jt)&&t.render(i,!0)),To(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-jt}},Sr=function(e,t,i,r){return t.parent&&zs(t),t._start=Dn((Zr(i)?i:i||e!==un?Fi(e,i,t):e._time)+t._delay),t._end=Dn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nx(e,t,"_first","_last",e._sort?"_start":0),Dd(t)||(e._recent=t),r||ix(e,t),e._ts<0&&gf(e,e._tTime),e},rx=function(e,t){return(Oi.ScrollTrigger||Up("scrollTrigger",t))&&Oi.ScrollTrigger.create(t,e)},sx=function(e,t,i,r,s){if(zp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!$n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Z0!==Pi.frame)return Is.push(e),e._lazy=[s,r],1},BR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Dd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kR=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&BR(e)&&!(!e._initted&&Dd(e))||(e._ts<0||e._dp._ts<0)&&!Dd(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=nc(0,e._tDur,t),u=Ua(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ua(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||$n||r||e._zTime===jt||!t&&e._zTime){if(!e._initted&&sx(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?jt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ld(e,t,i,!0),e._onUpdate&&!i&&Di(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!$n&&(Di(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zR=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Na=function(e,t,i,r){var s=e._repeat,o=Dn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Dn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&gf(e,e._tTime=e._tDur*a),e.parent&&_f(e),i||To(e.parent,e),e},fg=function(e){return e instanceof ri?To(e):Na(e,e._dur)},HR={_start:0,endTime:kl,totalDuration:kl},Fi=function n(e,t,i){var r=e.labels,s=e._recent||HR,o=e.duration()>=Wi?s.endTime(!1):e._dur,a,l,c;return On(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(qn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},xl=function(e,t,i){var r=Zr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=mi(l.vars.inherit)&&l.parent;o.immediateRender=mi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Sn(t[0],o,t[s+1])},Ys=function(e,t){return e||e===0?t(e):t},nc=function(e,t,i){return i<e?e:i>t?t:i},Xn=function(e,t){return!On(e)||!(t=PR.exec(e))?"":t[1]},VR=function(e,t,i){return Ys(i,function(r){return nc(e,t,r)})},Id=[].slice,ox=function(e,t){return e&&Pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pr(e[0]))&&!e.nodeType&&e!==pr},GR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return On(r)&&!t||ox(r,1)?(s=i).push.apply(s,Xi(r)):i.push(r)})||i},Xi=function(e,t,i){return an&&!t&&an.selector?an.selector(e):On(e)&&!i&&(Rd||!Fa())?Id.call((t||Op).querySelectorAll(e),0):qn(e)?GR(e,i):ox(e)?Id.call(e,0):e?[e]:[]},Od=function(e){return e=Xi(e)[0]||Bl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Xi(t,i.querySelectorAll?i:i===e?Bl("Invalid scope")||Op.createElement("div"):e)}},ax=function(e){return e.sort(function(){return .5-Math.random()})},lx=function(e){if(dn(e))return e;var t=Pr(e)?e:{each:e},i=wo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return On(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,M,v,S,P,E,w,O,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,Wi])[1],!b){for(w=-Wi;w<(w=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=o[_]=[],m=l?Math.min(b,_)*u-.5:r%b,M=b===Wi?0:l?_*h/b-.5:r/b|0,w=0,O=Wi,E=0;E<_;E++)v=E%b-m,S=M-(E/b|0),p[E]=P=c?Math.abs(c==="y"?S:v):G0(v*v+S*S),P>w&&(w=P),P<O&&(O=P);r==="random"&&ax(p),p.max=w-O,p.min=O,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Xn(t.amount||t.each)||0,i=i&&_<0?vx(i):i}return _=(p[f]-p.min)/p.max||0,Dn(p.b+(i?i(_):_)*p.v)+p.u}},Ud=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Dn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Zr(i)?0:Xn(i))}},cx=function(e,t){var i=qn(e),r,s;return!i&&Pr(e)&&(r=i=e.radius||Wi,e.values?(e=Xi(e.values),(s=!Zr(e[0]))&&(r*=r)):e=Ud(e.increment)),Ys(t,i?dn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Wi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Zr(o)?u:u+Xn(o)}:Ud(e))},ux=function(e,t,i,r){return Ys(qn(e)?!t:i===!0?!!(i=0):!r,function(){return qn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},WR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},XR=function(e,t){return function(i){return e(parseFloat(i))+(t||Xn(i))}},$R=function(e,t,i){return hx(e,t,0,1,i)},fx=function(e,t,i){return Ys(i,function(r){return e[~~t(r)]})},qR=function n(e,t,i){var r=t-e;return qn(e)?fx(e,n(0,e.length),t):Ys(i,function(s){return(r+(s-e)%r)%r+e})},YR=function n(e,t,i){var r=t-e,s=r*2;return qn(e)?fx(e,n(0,e.length-1),t):Ys(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},zl=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?q0:Cd),i+=e.substr(t,r-t)+ux(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},hx=function(e,t,i,r,s){var o=t-e,a=r-i;return Ys(s,function(l){return i+((l-e)/o*a||0)})},jR=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=On(e),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(qn(e)&&!qn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else r||(e=Io(qn(e)?[]:{},e));if(!u){for(l in t)kp.call(a,e,l,"get",t[l]);s=function(g){return Gp(g,a)||(o?e.p:e)}}}return Ys(i,s)},hg=function(e,t,i){var r=e.labels,s=Wi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Di=function(e,t,i){var r=e.vars,s=r[t],o=an,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Is.length&&Uu(),a&&(an=a),u=l?s.apply(c,l):s.call(c),an=o,u},rl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$n),e.progress()<1&&Di(e,"onInterrupt"),e},fa,dx=[],px=function(e){if(e)if(e=!e.name&&e.default||e,Ip()||e.headless){var t=e.name,i=dn(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:kl,render:Gp,add:kp,kill:fP,modifier:uP,rawVars:0},o={targetTest:0,get:0,getSetter:Vp,aliases:{},register:0};if(Fa(),e!==r){if(Ci[t])return;Yi(r,Yi(Nu(e,s),o)),Io(r.prototype,Io(s,Nu(e,o))),Ci[r.prop=t]=r,e.targetTest&&(hu.push(r),Np[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}K0(t,r),e.register&&e.register(Si,r,gi)}else dx.push(e)},Xt=255,sl={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},ph=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Xt+.5|0},mx=function(e,t,i){var r=e?Zr(e)?[e>>16,e>>8&Xt,e&Xt]:0:sl.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sl[e])r=sl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Xt,r&Xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Xt,e&Xt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Cd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=ph(l+1/3,s,o),r[1]=ph(l,s,o),r[2]=ph(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(X0),i&&r.length<4&&(r[3]=1),r}else r=e.match(Cd)||sl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Xt,o=r[1]/Xt,a=r[2]/Xt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},_x=function(e){var t=[],i=[],r=-1;return e.split(Os).forEach(function(s){var o=s.match(ua)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},dg=function(e,t,i){var r="",s=(e+r).match(Os),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=mx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=_x(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Os,"1").split(ua),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Os),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Os=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),KR=/hsl[a]?\(/,gx=function(e){var t=e.join(" "),i;if(Os.lastIndex=0,Os.test(t))return i=KR.test(t),e[1]=dg(e[1],i),e[0]=dg(e[0],i,_x(e[1])),!0},Hl,Pi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=n()-r,M=p===!0,v,S,P,E;if((m>e||m<0)&&(i+=m-t),r+=m,P=r-i,v=P-o,(v>0||M)&&(E=++h.frame,f=P-h.time*1e3,h.time=P=P/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](P,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Y0&&(!Rd&&Ip()&&(pr=Rd=window,Op=pr.document||{},Oi.gsap=Si,(pr.gsapVersions||(pr.gsapVersions=[])).push(Si.version),j0(Ou||pr.GreenSockGlobals||!pr.gsap&&pr||{}),dx.forEach(px)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Hl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Hl=0,c=kl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var v=m?function(S,P,E,w){p(S,P,E,w),h.remove(v)}:p;return h.remove(p),a[M?"unshift":"push"](v),Fa(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Fa=function(){return!Hl&&Pi.wake()},Tt={},ZR=/^[\d.\-M][\d.\-,\s]/,JR=/["']/g,QR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(JR,"").trim():+c,r=l.substr(a+1).trim();return t},eP=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tP=function(e){var t=(e+"").split("("),i=Tt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[QR(t[1])]:eP(e).split(",").map(ex)):Tt._CE&&ZR.test(e)?Tt._CE("",e):i},vx=function(e){return function(t){return 1-e(1-t)}},xx=function n(e,t){for(var i=e._first,r;i;)i instanceof ri?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},wo=function(e,t){return e&&(dn(e)?e:Tt[e]||tP(e))||t},Bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return _i(e,function(a){Tt[a]=Oi[a]=s,Tt[o=a.toLowerCase()]=i;for(var l in s)Tt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Tt[a+"."+l]=s[l]}),s},yx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ad*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*RR((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:yx(a);return s=Ad/s,l.config=function(c,u){return n(e,c,u)},l},_h=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:yx(i);return r.config=function(s){return n(e,s)},r};_i("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;Bo("Elastic",mh("in"),mh("out"),mh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Bo("Circ",function(n){return-(G0(1-n*n)-1)});Bo("Sine",function(n){return n===1?1:-CR(n*wR)+1});Bo("Back",_h("in"),_h("out"),_h());Tt.SteppedEase=Tt.steps=Oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-jt;return function(a){return((r*nc(0,o,a)|0)+s)*i}}};Oa.ease=Tt["quad.out"];_i("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Fp+=n+","+n+"Params,"});var Sx=function(e,t){this.id=AR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:J0,this.set=t?t.getSetter:Vp},Vl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Na(this,+t.duration,1,1),this.data=t.data,an&&(this._ctx=an,an.data.push(this)),Hl||Pi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Na(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gf(this,i),!s._dp||s.parent||ix(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Sr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===jt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Q0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ug(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ug(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ua(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Fu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-jt?0:this._rts,this.totalTime(nc(-Math.abs(this._delay),this._tDur,s),r!==!1),_f(this),NR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Sr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(mi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=DR);var r=$n;return $n=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),$n=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,fg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,fg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),mi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,mi(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-jt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-jt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=dn(i)?i:tx,a=function(){var c=r.then;r.then=null,dn(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){rl(this)},n}();Yi(Vl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var ri=function(n){V0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=mi(i.sortChildren),un&&Sr(i.parent||un,kr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&rx(kr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return xl(0,arguments,this),this},t.from=function(r,s,o){return xl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return xl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,vl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Sn(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return Sr(this,Sn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Sn(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,vl(o).immediateRender=mi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,vl(a).immediateRender=mi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Dn(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,p,m,M,v,S,P,E,w;if(this!==un&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Dn(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),P=Ua(this._tTime,p),!a&&this._tTime&&P!==_&&this._tTime-P*p-this._dur<=0&&(P=_),E&&_&1&&(f=c-f,w=1),_!==P&&!this._lock){var O=E&&P&1,b=O===(E&&_&1);if(_<P&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Dn(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Di(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;xx(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=zR(this,Dn(a),Dn(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Di(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-jt);break}}d=g}else{d=this._last;for(var y=r<0?r:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||$n&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=y?-jt:jt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-jt)._zTime=f>=a?1:-1,this._ts))return this._start=S,_f(this),this.render(r,s,o);this._onUpdate&&!s&&Di(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Di(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Zr(s)||(s=Fi(this,s,r)),!(r instanceof Vl)){if(qn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(On(r))return this.addLabel(r,s);if(dn(r))r=Sn.delayedCall(0,r);else return this}return this!==r?Sr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Sn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return On(r)?this.removeLabel(r):dn(r)?this.killTweensOf(r):(mf(this,r),r===this._recent&&(this._recent=this._last),To(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dn(Pi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Sn.delayedCall(0,s||kl,o);return a.data="isPause",this._hasPause=1,Sr(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Xi(r),l=this._first,c=Zr(s),u;l;)l instanceof Sn?IR(l._targets,a)&&(c?(!Ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Sn.to(o,Yi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||jt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Na(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Yi({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),hg(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),hg(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+jt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return To(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),To(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Wi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Sr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Na(o,o===un&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(un._ts&&(Q0(un,Fu(r,un)),Z0=Pi.frame),Pi.frame>=lg){lg+=Ii.autoSleep||120;var s=un._first;if((!s||!s._ts)&&Ii.autoSleep&&Pi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pi.sleep()}}},e}(Vl);Yi(ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var nP=function(e,t,i,r,s,o,a){var l=new gi(this._pt,e,t,0,1,Ax,null,s),c=0,u=0,h,f,d,g,_,p,m,M;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=zl(r)),o&&(M=[i,r],o(M,e,t),i=M[0],r=M[1]),f=i.match(hh)||[];h=hh.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ya(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=hh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,($0.test(r)||m)&&(l.e=0),this._pt=l,l},kp=function(e,t,i,r,s,o,a,l,c,u){dn(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:dn(h)?c?e[t.indexOf("set")||!dn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=dn(h)?c?aP:Tx:Hp,g;if(On(r)&&(~r.indexOf("random(")&&(r=zl(r)),r.charAt(1)==="="&&(g=ya(f,r)+(Xn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Nd)return!isNaN(f*r)&&r!==""?(g=new gi(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?cP:wx,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Up(t,r),nP.call(this,e,t,f,r,d,l||Ii.stringFilter,c))},iP=function(e,t,i,r,s){if(dn(e)&&(e=yl(e,s,t,i,r)),!Pr(e)||e.style&&e.nodeType||qn(e)||W0(e))return On(e)?yl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=yl(e[a],s,t,i,r);return o},Mx=function(e,t,i,r,s,o){var a,l,c,u;if(Ci[e]&&(a=new Ci[e]).init(s,a.rawVars?t[e]:iP(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new gi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==fa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ms,Nd,zp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Lp,S=e.timeline,P,E,w,O,b,y,U,D,q,G,k,H,X;if(S&&(!f||!s)&&(s="none"),e._ease=wo(s,Oa.ease),e._yEase=h?vx(wo(h===!0?s:h,Oa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(D=p[0]?Eo(p[0]).harness:0,H=D&&r[D.prop],P=Nu(r,Np),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?fu:LR),_._lazy=0),o){if(zs(e._startAt=Sn.set(p,Yi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&mi(l),startAt:null,delay:0,onUpdate:c&&function(){return Di(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($n||!a&&!d)&&e._startAt.revert(fu),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=Yi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&mi(l),immediateRender:a,stagger:0,parent:m},P),H&&(w[D.prop]=H),zs(e._startAt=Sn.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($n?e._startAt.revert(fu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,jt,jt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&mi(l)||l&&!g,E=0;E<p.length;E++){if(b=p[E],U=b._gsap||Bp(p)[E]._gsap,e._ptLookup[E]=G={},Pd[U.id]&&Is.length&&Uu(),k=M===p?E:M.indexOf(b),D&&(q=new D).init(b,H||P,e,k,M)!==!1&&(e._pt=O=new gi(e._pt,b,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(W){G[W]=O}),q.priority&&(y=1)),!D||H)for(w in P)Ci[w]&&(q=Mx(w,P,e,k,b,M))?q.priority&&(y=1):G[w]=O=kp.call(e,b,w,"get",P[w],k,M,0,r.stringFilter);e._op&&e._op[E]&&e.kill(b,e._op[E]),v&&e._pt&&(Ms=e,un.killTweensOf(b,G,e.globalTime(t)),X=!e.parent,Ms=0),e._pt&&l&&(Pd[U.id]=1)}y&&Cx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&S.render(Wi,!0,!0)},rP=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Nd=1,e.vars[t]="+=0",zp(e,a),Nd=0,l?Bl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=_n(i)+Xn(h.e)),h.b&&(h.b=u.s+Xn(h.b))},sP=function(e,t){var i=e[0]?Eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Io({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},oP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(qn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},yl=function(e,t,i,r,s){return dn(e)?e.call(t,i,r,s):On(e)&&~e.indexOf("random(")?zl(e):e},bx=Fp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ex={};_i(bx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Ex[n]=1});var Sn=function(n){V0(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:vl(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=r.parent||un,v=(qn(i)||W0(i)?Zr(i[0]):"length"in r)?[i]:Xi(i),S,P,E,w,O,b,y,U;if(a._targets=v.length?Bp(v):Bl("GSAP target "+i+" not found. https://gsap.com",!Ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Bc(c)||Bc(u)){if(r=a.vars,S=a.timeline=new ri({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=kr(a),S._start=0,f||Bc(c)||Bc(u)){if(w=v.length,y=f&&lx(f),Pr(f))for(O in f)~bx.indexOf(O)&&(U||(U={}),U[O]=f[O]);for(P=0;P<w;P++)E=Nu(r,Ex),E.stagger=0,m&&(E.yoyoEase=m),U&&Io(E,U),b=v[P],E.duration=+yl(c,kr(a),P,b,v),E.delay=(+yl(u,kr(a),P,b,v)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),S.to(b,E,y?y(P,b,v):0),S._ease=Tt.none;S.duration()?c=u=0:a.timeline=0}else if(g){vl(Yi(S.vars.defaults,{ease:"none"})),S._ease=wo(g.ease||r.ease||"none");var D=0,q,G,k;if(qn(g))g.forEach(function(H){return S.to(v,H,">")}),S.duration();else{E={};for(O in g)O==="ease"||O==="easeEach"||oP(O,g[O],E,g.easeEach);for(O in E)for(q=E[O].sort(function(H,X){return H.t-X.t}),D=0,P=0;P<q.length;P++)G=q[P],k={ease:G.e,duration:(G.t-(P?q[P-1].t:0))/100*c},k[O]=G.v,S.to(v,k,D),D+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Lp&&(Ms=kr(a),un.killTweensOf(v),Ms=0),Sr(M,kr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Dn(M._time)&&mi(h)&&FR(kr(a))&&M.data!=="nested")&&(a._tTime=-jt,a.render(Math.max(0,-u)||0)),p&&rx(kr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-jt&&!u?l:r<jt?0:r,f,d,g,_,p,m,M,v,S;if(!c)kR(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Dn(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Dn(h/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,f=c-f),p=Ua(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(v&&this._yEase&&xx(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Dn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(sx(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!g&&(Di(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ld(this,r,s,o),Di(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Di(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ld(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zs(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Di(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Hl||Pi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zp(this,c),u=this._ease(c/this._dur),rP(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(gf(this,0),this.parent||nx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?rl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ms&&Ms.vars.overwrite!==!0)._first||rl(this),this.parent&&o!==this.timeline.totalDuration()&&Na(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Xi(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&UR(a,l))return s==="all"&&(this._pt=0),rl(this);for(h=this._op=this._op||[],s!=="all"&&(On(s)&&(_={},_i(s,function(M){return _[M]=1}),s=_),s=sP(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&mf(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&rl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return xl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return xl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return un.killTweensOf(r,s,o)},e}(Vl);Yi(Sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_i("staggerTo,staggerFrom,staggerFromTo",function(n){Sn[n]=function(){var e=new ri,t=Id.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Hp=function(e,t,i){return e[t]=i},Tx=function(e,t,i){return e[t](i)},aP=function(e,t,i,r){return e[t](r.fp,i)},lP=function(e,t,i){return e.setAttribute(t,i)},Vp=function(e,t){return dn(e[t])?Tx:Dp(e[t])&&e.setAttribute?lP:Hp},wx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ax=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Gp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},uP=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},fP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?mf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},hP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Cx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},gi=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||wx,this.d=l||this,this.set=c||Hp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=hP,this.m=i,this.mt=s,this.tween=r},n}();_i(Fp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Np[n]=1});Oi.TweenMax=Oi.TweenLite=Sn;Oi.TimelineLite=Oi.TimelineMax=ri;un=new ri({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ii.stringFilter=gx;var Ao=[],du={},dP=[],pg=0,pP=0,gh=function(e){return(du[e]||dP).map(function(t){return t()})},Fd=function(){var e=Date.now(),t=[];e-pg>2&&(gh("matchMediaInit"),Ao.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=pr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),gh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),pg=e,gh("matchMedia"))},Rx=function(){function n(t,i){this.selector=i&&Od(i),this.data=[],this._r=[],this.isReverted=!1,this.id=pP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){dn(i)&&(s=r,r=i,i=dn);var o=this,a=function(){var c=an,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Od(s)),an=o,h=r.apply(o,arguments),dn(h)&&o._r.push(h),an=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===dn?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=an;an=null,i(this),an=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Sn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ri?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Sn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ao.length;o--;)Ao[o].id===this.id&&Ao.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),mP=function(){function n(t){this.contexts=[],this.scope=t,an&&an.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pr(i)||(i={matches:i});var o=new Rx(0,s||this.scope),a=o.conditions={},l,c,u;an&&!o.selector&&(o.selector=an.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=pr.matchMedia(i[c]),l&&(Ao.indexOf(o)<0&&Ao.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fd):l.addEventListener("change",Fd)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Bu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return px(r)})},timeline:function(e){return new ri(e)},getTweensOf:function(e,t){return un.getTweensOf(e,t)},getProperty:function(e,t,i,r){On(e)&&(e=Xi(e)[0]);var s=Eo(e||{}).get,o=i?tx:ex;return i==="native"&&(i=""),e&&(t?o((Ci[t]&&Ci[t].get||s)(e,t,i,r)):function(a,l,c){return o((Ci[a]&&Ci[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Xi(e),e.length>1){var r=e.map(function(u){return Si.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Ci[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;fa._pt=0,h.init(e,i?u+i:u,fa,0,[e]),h.render(1,h),fa._pt&&Gp(1,fa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=Si.to(e,Io((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return un.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wo(e.ease,Oa.ease)),cg(Oa,e||{})},config:function(e){return cg(Ii,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ci[a]&&!Oi[a]&&Bl(t+" effect requires "+a+" plugin.")}),dh[t]=function(a,l,c){return i(Xi(a),Yi(l||{},s),c)},o&&(ri.prototype[t]=function(a,l,c){return this.add(dh[t](a,Pr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Tt[e]=wo(t)},parseEase:function(e,t){return arguments.length?wo(e,t):Tt},getById:function(e){return un.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ri(e),r,s;for(i.smoothChildTiming=mi(e.smoothChildTiming),un.remove(i),i._dp=0,i._time=i._tTime=un._time,r=un._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Sn&&r.vars.onComplete===r._targets[0]))&&Sr(i,r,r._start-r._delay),r=s;return Sr(un,i,0),i},context:function(e,t){return e?new Rx(e,t):an},matchMedia:function(e){return new mP(e)},matchMediaRefresh:function(){return Ao.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Fd()},addEventListener:function(e,t){var i=du[e]||(du[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=du[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:qR,wrapYoyo:YR,distribute:lx,random:ux,snap:cx,normalize:$R,getUnit:Xn,clamp:VR,splitColor:mx,toArray:Xi,selector:Od,mapRange:hx,pipe:WR,unitize:XR,interpolate:jR,shuffle:ax},install:j0,effects:dh,ticker:Pi,updateRoot:ri.updateRoot,plugins:Ci,globalTimeline:un,core:{PropTween:gi,globals:K0,Tween:Sn,Timeline:ri,Animation:Vl,getCache:Eo,_removeLinkedListItem:mf,reverting:function(){return $n},context:function(e){return e&&an&&(an.data.push(e),e._ctx=an),an},suppressOverwrites:function(e){return Lp=e}}};_i("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Bu[n]=Sn[n]});Pi.add(ri.updateRoot);fa=Bu.to({},{duration:0});var _P=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},gP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=_P(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},vh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(On(s)&&(l={},_i(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}gP(a,s)}}}},Si=Bu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)$n?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vh("roundProps",Ud),vh("modifiers"),vh("snap",cx))||Bu;Sn.version=ri.version=Si.version="3.12.5";Y0=1;Ip()&&Fa();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mg,bs,Sa,Wp,yo,_g,Xp,vP=function(){return typeof window<"u"},Jr={},uo=180/Math.PI,Ma=Math.PI/180,ia=Math.atan2,gg=1e8,$p=/([A-Z])/g,xP=/(left|right|width|margin|padding|x)/i,yP=/[\s,\(]\S/,br={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Px=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},EP=function(e,t,i){return e.style[t]=i},TP=function(e,t,i){return e.style.setProperty(t,i)},wP=function(e,t,i){return e._gsap[t]=i},AP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},CP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},RP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},fn="transform",vi=fn+"Origin",PP=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=br[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zr(r,a)}):this.tfm[e]=o.x?o[e]:zr(r,e),e===vi&&(this.tfm.zOrigin=o.zOrigin);else return br.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(fn)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(vi,t,"")),e=fn}(s||t)&&this.props.push(e,t,s[e])},Dx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace($p,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xp(),(!s||!s.isStart)&&!i[fn]&&(Dx(i),r.zOrigin&&i[vi]&&(i[vi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ix=function(e,t){var i={target:e,props:[],revert:LP,save:PP};return e._gsap||Si.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Ox,kd=function(e,t){var i=bs.createElementNS?bs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):bs.createElement(e);return i&&i.style?i:bs.createElement(e)},Ar=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace($p,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ba(t)||t,1)||""},vg="O,Moz,ms,Ms,Webkit".split(","),Ba=function(e,t,i){var r=t||yo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vg[o]:"")+e},zd=function(){vP()&&window.document&&(mg=window,bs=mg.document,Sa=bs.documentElement,yo=kd("div")||{style:{}},kd("div"),fn=Ba(fn),vi=fn+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ox=!!Ba("perspective"),Xp=Si.core.reverting,Wp=1)},xh=function n(e){var t=kd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Sa.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Sa.removeChild(t),this.style.cssText=s,o},xg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ux=function(e){var t;try{t=e.getBBox()}catch{t=xh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xh||(t=xh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+xg(e,["x","cx","x1"])||0,y:+xg(e,["y","cy","y1"])||0,width:0,height:0}:t},Nx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ux(e))},Oo=function(e,t){if(t){var i=e.style,r;t in Jr&&t!==vi&&(t=fn),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace($p,"-$1").toLowerCase())):i.removeAttribute(t)}},Es=function(e,t,i,r,s,o){var a=new gi(e._pt,t,i,0,1,o?Lx:Px);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},yg={deg:1,rad:1,turn:1},DP={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=yo.style,l=xP.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,p,m;if(r===o||!s||yg[r]||yg[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),m=e.getCTM&&Nx(e),(d||o==="%")&&(Jr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],_n(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===bs||!_.appendChild)&&(_=bs.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Pi.time&&!p.uncache)return _n(s/p.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,g=e[u],M?e.style[t]=M:Oo(e,t)}else(d||o==="%")&&!DP[Ar(_,"display")]&&(a.position=Ar(e,"position")),_===e&&(a.position="static"),_.appendChild(yo),g=yo[u],_.removeChild(yo),a.position="absolute";return l&&d&&(p=Eo(_),p.time=Pi.time,p.width=_[u]),_n(f?g*s/h:g&&s?h/g*s:0)},zr=function(e,t,i,r){var s;return Wp||zd(),t in br&&t!=="transform"&&(t=br[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jr[t]&&t!=="transform"?(s=Wl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zu(Ar(e,vi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ku[t]&&ku[t](e,t,i)||Ar(e,t)||J0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},IP=function(e,t,i,r){if(!i||i==="none"){var s=Ba(t,e,1),o=s&&Ar(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ar(e,"borderTopColor"))}var a=new gi(this._pt,e.style,t,0,1,Ax),l=0,c=0,u,h,f,d,g,_,p,m,M,v,S,P;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ar(e,t)||r,_?e.style[t]=_:Oo(e,t)),u=[i,r],gx(u),i=u[0],r=u[1],f=i.match(ua)||[],P=r.match(ua)||[],P.length){for(;h=ua.exec(r);)p=h[0],M=r.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=ya(d,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=ua.lastIndex-v.length,v||(v=v||Ii.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(d=Hs(e,t,_,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Lx:Px;return $0.test(r)&&(a.e=0),this._pt=a,a},Sg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},OP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Sg[i]||i,t[1]=Sg[r]||r,t.join(" ")},UP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Jr[a]&&(l=1,a=a==="transformOrigin"?vi:fn),Oo(i,a);l&&(Oo(i,fn),o&&(o.svg&&i.removeAttribute("transform"),Wl(i,1),o.uncache=1,Dx(r)))}},ku={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new gi(e._pt,t,i,0,0,UP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Gl=[1,0,0,1,0,0],Fx={},Bx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mg=function(e){var t=Ar(e,fn);return Bx(t)?Gl:t.substr(7).match(X0).map(_n)},qp=function(e,t){var i=e._gsap||Eo(e),r=e.style,s=Mg(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Gl:s):(s===Gl&&!e.offsetParent&&e!==Sa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Sa.appendChild(e)),s=Mg(e),l?r.display=l:Oo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Sa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hd=function(e,t,i,r,s,o){var a=e._gsap,l=s||qp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,P=parseFloat(v[1])||0,E,w,O,b;i?l!==Gl&&(w=d*p-g*_)&&(O=S*(p/w)+P*(-_/w)+(_*M-p*m)/w,b=S*(-g/w)+P*(d/w)-(d*M-g*m)/w,S=O,P=b):(E=Ux(e),S=E.x+(~v[0].indexOf("%")?S/100*E.width:S),P=E.y+(~(v[1]||v[0]).indexOf("%")?P/100*E.height:P)),r||r!==!1&&a.smooth?(m=S-c,M=P-u,a.xOffset=h+(m*d+M*_)-m,a.yOffset=f+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=P,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[vi]="0px 0px",o&&(Es(o,a,"xOrigin",c,S),Es(o,a,"yOrigin",u,P),Es(o,a,"xOffset",h,a.xOffset),Es(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+P)},Wl=function(e,t){var i=e._gsap||new Sx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ar(e,vi)||"0",u,h,f,d,g,_,p,m,M,v,S,P,E,w,O,b,y,U,D,q,G,k,H,X,W,ve,T,Ee,me,Ue,re,V;return u=h=f=_=p=m=M=v=S=0,d=g=1,i.svg=!!(e.getCTM&&Nx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[fn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fn]!=="none"?l[fn]:"")),r.scale=r.rotate=r.translate="none"),w=qp(e,i.svg),i.svg&&(i.uncache?(W=e.getBBox(),c=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Hd(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,w)),P=i.xOrigin||0,E=i.yOrigin||0,w!==Gl&&(U=w[0],D=w[1],q=w[2],G=w[3],u=k=w[4],h=H=w[5],w.length===6?(d=Math.sqrt(U*U+D*D),g=Math.sqrt(G*G+q*q),_=U||D?ia(D,U)*uo:0,M=q||G?ia(q,G)*uo+_:0,M&&(g*=Math.abs(Math.cos(M*Ma))),i.svg&&(u-=P-(P*U+E*q),h-=E-(P*D+E*G))):(V=w[6],Ue=w[7],T=w[8],Ee=w[9],me=w[10],re=w[11],u=w[12],h=w[13],f=w[14],O=ia(V,me),p=O*uo,O&&(b=Math.cos(-O),y=Math.sin(-O),X=k*b+T*y,W=H*b+Ee*y,ve=V*b+me*y,T=k*-y+T*b,Ee=H*-y+Ee*b,me=V*-y+me*b,re=Ue*-y+re*b,k=X,H=W,V=ve),O=ia(-q,me),m=O*uo,O&&(b=Math.cos(-O),y=Math.sin(-O),X=U*b-T*y,W=D*b-Ee*y,ve=q*b-me*y,re=G*y+re*b,U=X,D=W,q=ve),O=ia(D,U),_=O*uo,O&&(b=Math.cos(O),y=Math.sin(O),X=U*b+D*y,W=k*b+H*y,D=D*b-U*y,H=H*b-k*y,U=X,k=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=_n(Math.sqrt(U*U+D*D+q*q)),g=_n(Math.sqrt(H*H+V*V)),O=ia(k,H),M=Math.abs(O)>2e-4?O*uo:0,S=re?1/(re<0?-re:re):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Bx(Ar(e,fn)),X&&e.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=_n(d),i.scaleY=_n(g),i.rotation=_n(_)+a,i.rotationX=_n(p)+a,i.rotationY=_n(m)+a,i.skewX=M+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[vi]=zu(c)),i.xOffset=i.yOffset=0,i.force3D=Ii.force3D,i.renderTransform=i.svg?FP:Ox?kx:NP,i.uncache=0,i},zu=function(e){return(e=e.split(" "))[0]+" "+e[1]},yh=function(e,t,i){var r=Xn(t);return _n(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},NP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kx(e,t)},oo="0deg",Qa="0px",ao=") ",kx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,M=i.target,v=i.zOrigin,S="",P=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==oo||u!==oo)){var E=parseFloat(u)*Ma,w=Math.sin(E),O=Math.cos(E),b;E=parseFloat(h)*Ma,b=Math.cos(E),o=yh(M,o,w*b*-v),a=yh(M,a,-Math.sin(E)*-v),l=yh(M,l,O*b*-v+v)}p!==Qa&&(S+="perspective("+p+ao),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(P||o!==Qa||a!==Qa||l!==Qa)&&(S+=l!==Qa||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ao),c!==oo&&(S+="rotate("+c+ao),u!==oo&&(S+="rotateY("+u+ao),h!==oo&&(S+="rotateX("+h+ao),(f!==oo||d!==oo)&&(S+="skew("+f+", "+d+ao),(g!==1||_!==1)&&(S+="scale("+g+", "+_+ao),M.style[fn]=S||"translate(0, 0)"},FP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,M=i.forceCSS,v=parseFloat(o),S=parseFloat(a),P,E,w,O,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,P=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-f,O=Math.cos(l-c)*f,c&&(u*=Ma,b=Math.tan(c-u),b=Math.sqrt(1+b*b),w*=b,O*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),P*=b,E*=b)),P=_n(P),E=_n(E),w=_n(w),O=_n(O)):(P=h,O=f,E=w=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Hs(d,"x",o,"px"),S=Hs(d,"y",a,"px")),(g||_||p||m)&&(v=_n(v+g-(g*P+_*w)+p),S=_n(S+_-(g*E+_*O)+m)),(r||s)&&(b=d.getBBox(),v=_n(v+r/100*b.width),S=_n(S+s/100*b.height)),b="matrix("+P+","+E+","+w+","+O+","+v+","+S+")",d.setAttribute("transform",b),M&&(d.style[fn]=b)},BP=function(e,t,i,r,s){var o=360,a=On(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?uo:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*gg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*gg)%o-~~(c/o)*o)),e._pt=f=new gi(e._pt,t,i,r,c,SP),f.e=u,f.u="deg",e._props.push(i),f},bg=function(e,t){for(var i in t)e[i]=t[i];return e},kP=function(e,t,i){var r=bg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[fn]=t,a=Wl(i,1),Oo(i,fn),i.setAttribute("transform",c)):(c=getComputedStyle(i)[fn],o[fn]=t,a=Wl(i,1),o[fn]=c);for(l in Jr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Xn(c),g=Xn(u),h=d!==g?Hs(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new gi(e._pt,a,l,h,f-h,Bd),e._pt.u=g||0,e._props.push(l));bg(a,r)};_i("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ku[e>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return zr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var zx={name:"css",register:zd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,h,f,d,g,_,p,m,M,v,S,P,E,w,O;Wp||zd(),this.styles=this.styles||Ix(e),O=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ci[_]&&Mx(_,t,i,r,e,s)))){if(d=typeof u,g=ku[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=zl(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Os.lastIndex=0,Os.test(c)||(p=Xn(c),m=Xn(u)),m?p!==m&&(c=Hs(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),O.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],On(c)&&~c.indexOf("random(")&&(c=zl(c)),Xn(c+"")||c==="auto"||(c+=Ii.units[_]||Xn(zr(e,_))||""),(c+"").charAt(1)==="="&&(c=zr(e,_))):c=zr(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in br&&(_==="autoAlpha"&&(f===1&&zr(e,"visibility")==="hidden"&&h&&(f=0),O.push("visibility",0,a.visibility),Es(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=br[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Jr,v){if(this.styles.save(_),S||(P=e._gsap,P.renderTransform&&!t.parseTransform||Wl(e,t.parseTransform),E=t.smoothOrigin!==!1&&P.smooth,S=this._pt=new gi(this._pt,a,fn,0,1,P.renderTransform,P,0,-1),S.dep=1),_==="scale")this._pt=new gi(this._pt,P,"scaleY",P.scaleY,(M?ya(P.scaleY,M+h):h)-P.scaleY||0,Bd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(vi,0,a[vi]),u=OP(u),P.svg?Hd(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==P.zOrigin&&Es(this,P,"zOrigin",P.zOrigin,m),Es(this,a,_,zu(c),zu(u)));continue}else if(_==="svgOrigin"){Hd(e,u,1,E,0,this);continue}else if(_ in Fx){BP(this,P,_,f,M?ya(f,M+u):u);continue}else if(_==="smoothOrigin"){Es(this,P,"smooth",P.smooth,u);continue}else if(_==="force3D"){P[_]=u;continue}else if(_==="transform"){kP(this,u,e);continue}}else _ in a||(_=Ba(_)||_);if(v||(h||h===0)&&(f||f===0)&&!yP.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=Xn(u)||(_ in Ii.units?Ii.units[_]:p),p!==m&&(f=Hs(e,_,c,m)),this._pt=new gi(this._pt,v?P:a,_,f,(M?ya(f,M+h):h)-f,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?bP:Bd),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=MP);else if(_ in a)IP.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Up(_,u);continue}v||(_ in a?O.push(_,0,a[_]):O.push(_,1,c||e[_])),o.push(_)}}w&&Cx(this)},render:function(e,t){if(t.tween._time||!Xp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zr,aliases:br,getSetter:function(e,t,i){var r=br[t];return r&&r.indexOf(",")<0&&(t=r),t in Jr&&t!==vi&&(e._gsap.x||zr(e,"x"))?i&&_g===i?t==="scale"?AP:wP:(_g=i||{})&&(t==="scale"?CP:RP):e.style&&!Dp(e.style[t])?EP:~t.indexOf("-")?TP:Vp(e,t)},core:{_removeProperty:Oo,_getMatrix:qp}};Si.utils.checkPrefix=Ba;Si.core.getStyleSaver=Ix;(function(n,e,t,i){var r=_i(n+","+e+","+t,function(s){Jr[s]=1});_i(e,function(s){Ii.units[s]="deg",Fx[s]=1}),br[r[13]]=n+","+e,_i(i,function(s){var o=s.split(":");br[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_i("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ii.units[n]="px"});Si.registerPlugin(zx);var nr=Si.registerPlugin(zx)||Si;nr.core.Tween;function zP(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function HP(n,e,t){return e&&zP(n.prototype,e),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn,pu,Li,Ts,ws,ba,Hx,fo,Sl,Vx,$r,er,Gx,Wx=function(){return kn||typeof window<"u"&&(kn=window.gsap)&&kn.registerPlugin&&kn},Xx=1,ha=[],St=[],Cr=[],Ml=Date.now,Vd=function(e,t){return t},VP=function(){var e=Sl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,St),r.push.apply(r,Cr),St=i,Cr=r,Vd=function(o,a){return t[o](a)}},Us=function(e,t){return~Cr.indexOf(e)&&Cr[Cr.indexOf(e)+1][t]},bl=function(e){return!!~Vx.indexOf(e)},Jn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Kn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},kc="scrollLeft",zc="scrollTop",Gd=function(){return $r&&$r.isPressed||St.cache++},Hu=function(e,t){var i=function r(s){if(s||s===0){Xx&&(Li.history.scrollRestoration="manual");var o=$r&&$r.isPressed;s=r.v=Math.round(s)||($r&&$r.iOS?1:0),e(s),r.cacheID=St.cache,o&&Vd("ss",s)}else(t||St.cache!==r.cacheID||Vd("ref"))&&(r.cacheID=St.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},si={s:kc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hu(function(n){return arguments.length?Li.scrollTo(n,Tn.sc()):Li.pageXOffset||Ts[kc]||ws[kc]||ba[kc]||0})},Tn={s:zc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:si,sc:Hu(function(n){return arguments.length?Li.scrollTo(si.sc(),n):Li.pageYOffset||Ts[zc]||ws[zc]||ba[zc]||0})},fi=function(e,t){return(t&&t._ctx&&t._ctx.selector||kn.utils.toArray)(e)[0]||(typeof e=="string"&&kn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vs=function(e,t){var i=t.s,r=t.sc;bl(e)&&(e=Ts.scrollingElement||ws);var s=St.indexOf(e),o=r===Tn.sc?1:2;!~s&&(s=St.push(e)-1),St[s+o]||Jn(e,"scroll",Gd);var a=St[s+o],l=a||(St[s+o]=Hu(Us(e,i),!0)||(bl(e)?r:Hu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=kn.getProperty(e,"scrollBehavior")==="smooth"),l},Wd=function(e,t,i){var r=e,s=e,o=Ml(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Ml();_||p-o>l?(s=r,r=g,a=o,o=p):i?r+=g:r=s+(g-s)/(p-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,p=s,m=Ml();return(g||g===0)&&g!==r&&u(g),o===a||m-a>c?0:(r+(i?p:-p))/((i?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},el=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Eg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},$x=function(){Sl=kn.core.globals().ScrollTrigger,Sl&&Sl.core&&VP()},qx=function(e){return kn=e||Wx(),!pu&&kn&&typeof document<"u"&&document.body&&(Li=window,Ts=document,ws=Ts.documentElement,ba=Ts.body,Vx=[Li,Ts,ws,ba],kn.utils.clamp,Gx=kn.core.context||function(){},fo="onpointerenter"in ba?"pointer":"mouse",Hx=gn.isTouch=Li.matchMedia&&Li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=gn.eventTypes=("ontouchstart"in ws?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ws?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xx=0},500),$x(),pu=1),pu};si.op=Tn;St.cache=0;var gn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){pu||qx(kn)||console.warn("Please gsap.registerPlugin(Observer)"),Sl||$x();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,g=i.wheelSpeed,_=i.event,p=i.onDragStart,m=i.onDragEnd,M=i.onDrag,v=i.onPress,S=i.onRelease,P=i.onRight,E=i.onLeft,w=i.onUp,O=i.onDown,b=i.onChangeX,y=i.onChangeY,U=i.onChange,D=i.onToggleX,q=i.onToggleY,G=i.onHover,k=i.onHoverEnd,H=i.onMove,X=i.ignoreCheck,W=i.isNormalizer,ve=i.onGestureStart,T=i.onGestureEnd,Ee=i.onWheel,me=i.onEnable,Ue=i.onDisable,re=i.onClick,V=i.scrollSpeed,ie=i.capture,$=i.allowClicks,ge=i.lockAxis,Re=i.onLockAxis;this.target=a=fi(a)||ws,this.vars=i,d&&(d=kn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,V=V||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Li.getComputedStyle(ba).lineHeight)||22);var De,Oe,I,L,z,Z,ne,F=this,ce=0,he=0,C=i.passive||!u,x=Vs(a,si),B=Vs(a,Tn),ee=x(),se=B(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",Me=bl(a),ue=a.ownerDocument||Ts,be=[0,0,0],we=[0,0,0],Se=0,Le=function(){return Se=Ml()},ze=function($e,_t){return(F.event=$e)&&d&&~d.indexOf($e.target)||_t&&J&&$e.pointerType!=="touch"||X&&X($e,_t)},Je=function(){F._vx.reset(),F._vy.reset(),Oe.pause(),h&&h(F)},Ie=function(){var $e=F.deltaX=Eg(be),_t=F.deltaY=Eg(we),Ce=Math.abs($e)>=r,st=Math.abs(_t)>=r;U&&(Ce||st)&&U(F,$e,_t,be,we),Ce&&(P&&F.deltaX>0&&P(F),E&&F.deltaX<0&&E(F),b&&b(F),D&&F.deltaX<0!=ce<0&&D(F),ce=F.deltaX,be[0]=be[1]=be[2]=0),st&&(O&&F.deltaY>0&&O(F),w&&F.deltaY<0&&w(F),y&&y(F),q&&F.deltaY<0!=he<0&&q(F),he=F.deltaY,we[0]=we[1]=we[2]=0),(L||I)&&(H&&H(F),I&&(M(F),I=!1),L=!1),Z&&!(Z=!1)&&Re&&Re(F),z&&(Ee(F),z=!1),De=0},je=function($e,_t,Ce){be[Ce]+=$e,we[Ce]+=_t,F._vx.update($e),F._vy.update(_t),c?De||(De=requestAnimationFrame(Ie)):Ie()},Xe=function($e,_t){ge&&!ne&&(F.axis=ne=Math.abs($e)>Math.abs(_t)?"x":"y",Z=!0),ne!=="y"&&(be[2]+=$e,F._vx.update($e,!0)),ne!=="x"&&(we[2]+=_t,F._vy.update(_t,!0)),c?De||(De=requestAnimationFrame(Ie)):Ie()},rt=function($e){if(!ze($e,1)){$e=el($e,u);var _t=$e.clientX,Ce=$e.clientY,st=_t-F.x,Ve=Ce-F.y,nt=F.isDragging;F.x=_t,F.y=Ce,(nt||Math.abs(F.startX-_t)>=s||Math.abs(F.startY-Ce)>=s)&&(M&&(I=!0),nt||(F.isDragging=!0),Xe(st,Ve),nt||p&&p(F))}},Y=F.onPress=function(tt){ze(tt,1)||tt&&tt.button||(F.axis=ne=null,Oe.pause(),F.isPressed=!0,tt=el(tt),ce=he=0,F.startX=F.x=tt.clientX,F.startY=F.y=tt.clientY,F._vx.reset(),F._vy.reset(),Jn(W?a:ue,er[1],rt,C,!0),F.deltaX=F.deltaY=0,v&&v(F))},de=F.onRelease=function(tt){if(!ze(tt,1)){Kn(W?a:ue,er[1],rt,!0);var $e=!isNaN(F.y-F.startY),_t=F.isDragging,Ce=_t&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),st=el(tt);!Ce&&$e&&(F._vx.reset(),F._vy.reset(),u&&$&&kn.delayedCall(.08,function(){if(Ml()-Se>300&&!tt.defaultPrevented){if(tt.target.click)tt.target.click();else if(ue.createEvent){var Ve=ue.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,Li,1,st.screenX,st.screenY,st.clientX,st.clientY,!1,!1,!1,!1,0,null),tt.target.dispatchEvent(Ve)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&_t&&!W&&Oe.restart(!0),m&&_t&&m(F),S&&S(F,Ce)}},_e=function($e){return $e.touches&&$e.touches.length>1&&(F.isGesturing=!0)&&ve($e,F.isDragging)},ye=function(){return(F.isGesturing=!1)||T(F)},Ae=function($e){if(!ze($e)){var _t=x(),Ce=B();je((_t-ee)*V,(Ce-se)*V,1),ee=_t,se=Ce,h&&Oe.restart(!0)}},Ye=function($e){if(!ze($e)){$e=el($e,u),Ee&&(z=!0);var _t=($e.deltaMode===1?l:$e.deltaMode===2?Li.innerHeight:1)*g;je($e.deltaX*_t,$e.deltaY*_t,0),h&&!W&&Oe.restart(!0)}},lt=function($e){if(!ze($e)){var _t=$e.clientX,Ce=$e.clientY,st=_t-F.x,Ve=Ce-F.y;F.x=_t,F.y=Ce,L=!0,h&&Oe.restart(!0),(st||Ve)&&Xe(st,Ve)}},vt=function($e){F.event=$e,G(F)},Lt=function($e){F.event=$e,k(F)},ct=function($e){return ze($e)||el($e,u)&&re(F)};Oe=F._dc=kn.delayedCall(f||.25,Je).pause(),F.deltaX=F.deltaY=0,F._vx=Wd(0,50,!0),F._vy=Wd(0,50,!0),F.scrollX=x,F.scrollY=B,F.isDragging=F.isGesturing=F.isPressed=!1,Gx(this),F.enable=function(tt){return F.isEnabled||(Jn(Me?ue:a,"scroll",Gd),o.indexOf("scroll")>=0&&Jn(Me?ue:a,"scroll",Ae,C,ie),o.indexOf("wheel")>=0&&Jn(a,"wheel",Ye,C,ie),(o.indexOf("touch")>=0&&Hx||o.indexOf("pointer")>=0)&&(Jn(a,er[0],Y,C,ie),Jn(ue,er[2],de),Jn(ue,er[3],de),$&&Jn(a,"click",Le,!0,!0),re&&Jn(a,"click",ct),ve&&Jn(ue,"gesturestart",_e),T&&Jn(ue,"gestureend",ye),G&&Jn(a,fo+"enter",vt),k&&Jn(a,fo+"leave",Lt),H&&Jn(a,fo+"move",lt)),F.isEnabled=!0,tt&&tt.type&&Y(tt),me&&me(F)),F},F.disable=function(){F.isEnabled&&(ha.filter(function(tt){return tt!==F&&bl(tt.target)}).length||Kn(Me?ue:a,"scroll",Gd),F.isPressed&&(F._vx.reset(),F._vy.reset(),Kn(W?a:ue,er[1],rt,!0)),Kn(Me?ue:a,"scroll",Ae,ie),Kn(a,"wheel",Ye,ie),Kn(a,er[0],Y,ie),Kn(ue,er[2],de),Kn(ue,er[3],de),Kn(a,"click",Le,!0),Kn(a,"click",ct),Kn(ue,"gesturestart",_e),Kn(ue,"gestureend",ye),Kn(a,fo+"enter",vt),Kn(a,fo+"leave",Lt),Kn(a,fo+"move",lt),F.isEnabled=F.isPressed=F.isDragging=!1,Ue&&Ue(F))},F.kill=F.revert=function(){F.disable();var tt=ha.indexOf(F);tt>=0&&ha.splice(tt,1),$r===F&&($r=0)},ha.push(F),W&&bl(a)&&($r=F),F.enable(_)},HP(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();gn.version="3.12.5";gn.create=function(n){return new gn(n)};gn.register=qx;gn.getAll=function(){return ha.slice()};gn.getById=function(n){return ha.filter(function(e){return e.vars.id===n})[0]};Wx()&&kn.registerPlugin(gn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qe,aa,Et,cn,rr,Zt,Yx,Vu,Xl,El,ol,Hc,Vn,vf,Xd,ti,Tg,wg,la,jx,Sh,Kx,ei,$d,Zx,Jx,_s,qd,Yp,Ea,jp,Gu,Yd,Mh,Vc=1,Gn=Date.now,bh=Gn(),qi=0,al=0,Ag=function(e,t,i){var r=Ai(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Cg=function(e,t){return t&&(!Ai(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},GP=function n(){return al&&requestAnimationFrame(n)},Rg=function(){return vf=1},Pg=function(){return vf=0},mr=function(e){return e},ll=function(e){return Math.round(e*1e5)/1e5||0},Qx=function(){return typeof window<"u"},ey=function(){return qe||Qx()&&(qe=window.gsap)&&qe.registerPlugin&&qe},Uo=function(e){return!!~Yx.indexOf(e)},ty=function(e){return(e==="Height"?jp:Et["inner"+e])||rr["client"+e]||Zt["client"+e]},ny=function(e){return Us(e,"getBoundingClientRect")||(Uo(e)?function(){return xu.width=Et.innerWidth,xu.height=jp,xu}:function(){return Vr(e)})},WP=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Us(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?ty(s):e["client"+s])||0}},XP=function(e,t){return!t||~Cr.indexOf(e)?ny(e):function(){return xu}},Er=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Us(e,i))?o()-ny(e)()[s]:Uo(e)?(rr[i]||Zt[i])-ty(r):e[i]-e["offset"+r])},Gc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},Ai=function(e){return typeof e=="string"},oi=function(e){return typeof e=="function"},cl=function(e){return typeof e=="number"},ho=function(e){return typeof e=="object"},tl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Eh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ra=Math.abs,iy="left",ry="top",Kp="right",Zp="bottom",Co="width",Ro="height",Tl="Right",wl="Left",Al="Top",Cl="Bottom",yn="padding",ki="margin",ka="Width",Jp="Height",En="px",zi=function(e){return Et.getComputedStyle(e)},$P=function(e){var t=zi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Lg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Vr=function(e,t){var i=t&&zi(e)[Xd]!=="matrix(1, 0, 0, 1, 0, 0)"&&qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Wu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},sy=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},qP=function(e){return function(t){return qe.utils.snap(sy(e),t)}},Qp=function(e){var t=qe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},YP=function(e){return function(t,i){return Qp(sy(e))(t,i.direction)}},Wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},Ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Pn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Dg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$c={toggleActions:"play",anticipatePin:0},Xu={top:0,left:0,center:.5,bottom:1,right:1},mu=function(e,t){if(Ai(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Xu?Xu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=cn.createElement("div"),_=Uo(i)||Us(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Zt:i,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(r===Tn?Kp:Zp)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],_u(g,0,r,M),g},_u=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+ka]=1,s["border"+a+ka]=0,s[i.p]=t+"px",qe.set(e,s)},gt=[],jd={},$l,Ig=function(){return Gn()-qi>34&&($l||($l=requestAnimationFrame(Yr)))},sa=function(){(!ei||!ei.isPressed||ei.startX>Zt.clientWidth)&&(St.cache++,ei?$l||($l=requestAnimationFrame(Yr)):Yr(),qi||Fo("scrollStart"),qi=Gn())},Th=function(){Jx=Et.innerWidth,Zx=Et.innerHeight},ul=function(){St.cache++,!Vn&&!Kx&&!cn.fullscreenElement&&!cn.webkitFullscreenElement&&(!$d||Jx!==Et.innerWidth||Math.abs(Et.innerHeight-Zx)>Et.innerHeight*.25)&&Vu.restart(!0)},No={},jP=[],oy=function n(){return Pn(bt,"scrollEnd",n)||So(!0)},Fo=function(e){return No[e]&&No[e].map(function(t){return t()})||jP},wi=[],ay=function(e){for(var t=0;t<wi.length;t+=5)(!e||wi[t+4]&&wi[t+4].query===e)&&(wi[t].style.cssText=wi[t+1],wi[t].getBBox&&wi[t].setAttribute("transform",wi[t+2]||""),wi[t+3].uncache=1)},em=function(e,t){var i;for(ti=0;ti<gt.length;ti++)i=gt[ti],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Gu=!0,t&&ay(t),t||Fo("revert")},ly=function(e,t){St.cache++,(t||!ni)&&St.forEach(function(i){return oi(i)&&i.cacheID++&&(i.rec=0)}),Ai(e)&&(Et.history.scrollRestoration=Yp=e)},ni,Po=0,Og,KP=function(){if(Og!==Po){var e=Og=Po;requestAnimationFrame(function(){return e===Po&&So(!0)})}},cy=function(){Zt.appendChild(Ea),jp=!ei&&Ea.offsetHeight||Et.innerHeight,Zt.removeChild(Ea)},Ug=function(e){return Xl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},So=function(e,t){if(qi&&!e&&!Gu){Ln(bt,"scrollEnd",oy);return}cy(),ni=bt.isRefreshing=!0,St.forEach(function(r){return oi(r)&&++r.cacheID&&(r.rec=r())});var i=Fo("refreshInit");jx&&bt.sort(),t||em(),St.forEach(function(r){oi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),gt.slice(0).forEach(function(r){return r.refresh()}),Gu=!1,gt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Yd=1,Ug(!0),gt.forEach(function(r){var s=Er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Ug(!1),Yd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),St.forEach(function(r){oi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ly(Yp,1),Vu.pause(),Po++,ni=2,Yr(2),gt.forEach(function(r){return oi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ni=bt.isRefreshing=!1,Fo("refresh")},Kd=0,gu=1,Rl,Yr=function(e){if(e===2||!ni&&!Gu){bt.isUpdating=!0,Rl&&Rl.update(0);var t=gt.length,i=Gn(),r=i-bh>=50,s=t&&gt[0].scroll();if(gu=Kd>s?-1:1,ni||(Kd=s),r&&(qi&&!vf&&i-qi>200&&(qi=0,Fo("scrollEnd")),ol=bh,bh=i),gu<0){for(ti=t;ti-- >0;)gt[ti]&&gt[ti].update(0,r);gu=1}else for(ti=0;ti<t;ti++)gt[ti]&&gt[ti].update(0,r);bt.isUpdating=!1}$l=0},Zd=[iy,ry,Zp,Kp,ki+Cl,ki+Tl,ki+Al,ki+wl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vu=Zd.concat([Co,Ro,"boxSizing","max"+ka,"max"+Jp,"position",ki,yn,yn+Al,yn+Tl,yn+Cl,yn+wl]),ZP=function(e,t,i){Ta(i);var r=e._gsap;if(r.spacerIsNative)Ta(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},wh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Zd.length,o=t.style,a=e.style,l;s--;)l=Zd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Zp]=a[Kp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Co]=Wu(e,si)+En,o[Ro]=Wu(e,Tn)+En,o[yn]=a[ki]=a[ry]=a[iy]="0",Ta(r),a[Co]=a["max"+ka]=i[Co],a[Ro]=a["max"+Jp]=i[Ro],a[yn]=i[yn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},JP=/([A-Z])/g,Ta=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||qe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(JP,"-$1").toLowerCase())}},Yc=function(e){for(var t=vu.length,i=e.style,r=[],s=0;s<t;s++)r.push(vu[s],i[vu[s]]);return r.t=e,r},QP=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},xu={left:0,top:0},Ng=function(e,t,i,r,s,o,a,l,c,u,h,f,d,g){oi(e)&&(e=e(l)),Ai(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?mu("0"+e.substr(3),i):0));var _=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),cl(e))d&&(e=qe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&_u(a,i,r,!0);else{oi(t)&&(t=t(l));var v=(e||"0").split(" "),S,P,E,w;M=fi(t,l)||Zt,S=Vr(M)||{},(!S||!S.left&&!S.top)&&zi(M).display==="none"&&(w=M.style.display,M.style.display="block",S=Vr(M),w?M.style.display=w:M.style.removeProperty("display")),P=mu(v[0],S[r.d]),E=mu(v[1]||"0",i),e=S[r.p]-c[r.p]-u+P+s-E,a&&_u(a,E,r,i-E<20||a._isStart&&E>20),i-=i-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var O=e+i,b=o._isStart;p="scroll"+r.d2,_u(o,O,r,b&&O>20||!b&&(h?Math.max(Zt[p],rr[p]):o.parentNode[p])<=O+1),h&&(c=Vr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+En))}return d&&M&&(p=Vr(M),d.seek(f),m=Vr(M),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},e2=/(webkit|moz|length|cssText|inset)/i,Fg=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Zt){e._stOrig=s.cssText,a=zi(e);for(o in a)!+o&&!e2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;qe.core.getCache(e).uncache=1,t.appendChild(e)}},uy=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},jc=function(e,t,i){var r={};r[t.p]="+="+i,qe.set(e,r)},Bg=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||i();var _=uy(i,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){St.cache++,o.tween&&Yr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=qe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ln(e,"wheel",i.wheelHandler),bt.isTouch&&Ln(e,"touchmove",i.wheelHandler),s},bt=function(){function n(t,i){aa||n.register(qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),qd(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!al){this.update=this.refresh=this.kill=mr;return}i=Lg(Ai(i)||cl(i)||i.nodeType?{trigger:i}:i,$c);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,P=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,O=s.fastScrollEnd,b=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?si:Tn,U=!h&&h!==0,D=fi(i.scroller||Et),q=qe.core.getCache(D),G=Uo(D),k=("pinType"in i?i.pinType:Us(D,"pinType")||G&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=U&&i.toggleActions.split(" "),W="markers"in i?i.markers:$c.markers,ve=G?0:parseFloat(zi(D)["border"+y.p2+ka])||0,T=this,Ee=i.onRefreshInit&&function(){return i.onRefreshInit(T)},me=WP(D,G,y),Ue=XP(D,G),re=0,V=0,ie=0,$=Vs(D,y),ge,Re,De,Oe,I,L,z,Z,ne,F,ce,he,C,x,B,ee,se,J,Me,ue,be,we,Se,Le,ze,Je,Ie,je,Xe,rt,Y,de,_e,ye,Ae,Ye,lt,vt,Lt;if(T._startClamp=T._endClamp=!1,T._dir=y,p*=45,T.scroller=D,T.scroll=w?w.time.bind(w):$,Oe=$(),T.vars=i,r=r||i.animation,"refreshPriority"in i&&(jx=1,i.refreshPriority===-9999&&(Rl=T)),q.tweenScroll=q.tweenScroll||{top:Bg(D,Tn),left:Bg(D,si)},T.tweenTo=ge=q.tweenScroll[y.p],T.scrubDuration=function(Ce){_e=cl(Ce)&&Ce,_e?de?de.duration(Ce):de=qe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:_e,paused:!0,onComplete:function(){return m&&m(T)}}):(de&&de.progress(1).kill(),de=0)},r&&(r.vars.lazy=!1,r._initted&&!T.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),T.animation=r.pause(),r.scrollTrigger=T,T.scrubDuration(h),rt=0,l||(l=r.vars.id)),S&&((!ho(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Zt.style&&qe.set(G?[Zt,rr]:D,{scrollBehavior:"auto"}),St.forEach(function(Ce){return oi(Ce)&&Ce.target===(G?cn.scrollingElement||rr:D)&&(Ce.smooth=!1)}),De=oi(S.snapTo)?S.snapTo:S.snapTo==="labels"?qP(r):S.snapTo==="labelsDirectional"?YP(r):S.directional!==!1?function(Ce,st){return Qp(S.snapTo)(Ce,Gn()-V<500?0:st.direction)}:qe.utils.snap(S.snapTo),ye=S.duration||{min:.1,max:2},ye=ho(ye)?El(ye.min,ye.max):El(ye,ye),Ae=qe.delayedCall(S.delay||_e/2||.1,function(){var Ce=$(),st=Gn()-V<500,Ve=ge.tween;if((st||Math.abs(T.getVelocity())<10)&&!Ve&&!vf&&re!==Ce){var nt=(Ce-L)/x,Gt=r&&!U?r.totalProgress():nt,ut=st?0:(Gt-Y)/(Gn()-ol)*1e3||0,Dt=qe.utils.clamp(-nt,1-nt,ra(ut/2)*ut/.185),ln=nt+(S.inertia===!1?0:Dt),wt,Ot,Mt=S,Un=Mt.onStart,A=Mt.onInterrupt,j=Mt.onComplete;if(wt=De(ln,T),cl(wt)||(wt=ln),Ot=Math.round(L+wt*x),Ce<=z&&Ce>=L&&Ot!==Ce){if(Ve&&!Ve._initted&&Ve.data<=ra(Ot-Ce))return;S.inertia===!1&&(Dt=wt-nt),ge(Ot,{duration:ye(ra(Math.max(ra(ln-Gt),ra(wt-Gt))*.185/ut/.05||0)),ease:S.ease||"power3",data:ra(Ot-Ce),onInterrupt:function(){return Ae.restart(!0)&&A&&A(T)},onComplete:function(){T.update(),re=$(),r&&(de?de.resetTo("totalProgress",wt,r._tTime/r._tDur):r.progress(wt)),rt=Y=r&&!U?r.totalProgress():T.progress,M&&M(T),j&&j(T)}},Ce,Dt*x,Ot-Ce-Dt*x),Un&&Un(T,ge.tween)}}else T.isActive&&re!==Ce&&Ae.restart(!0)}).pause()),l&&(jd[l]=T),f=T.trigger=fi(f||d!==!0&&d),Lt=f&&f._gsap&&f._gsap.stRevert,Lt&&(Lt=Lt(T)),d=d===!0?f:fi(d),Ai(a)&&(a={targets:f,className:a}),d&&(g===!1||g===ki||(g=!g&&d.parentNode&&d.parentNode.style&&zi(d.parentNode).display==="flex"?!1:yn),T.pin=d,Re=qe.core.getCache(d),Re.spacer?B=Re.pinState:(E&&(E=fi(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Re.spacerIsNative=!!E,E&&(Re.spacerState=Yc(E))),Re.spacer=J=E||cn.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Re.pinState=B=Yc(d)),i.force3D!==!1&&qe.set(d,{force3D:!0}),T.spacer=J=Re.spacer,Xe=zi(d),Le=Xe[g+y.os2],ue=qe.getProperty(d),be=qe.quickSetter(d,y.a,En),wh(d,J,Xe),se=Yc(d)),W){he=ho(W)?Lg(W,Dg):Dg,F=qc("scroller-start",l,D,y,he,0),ce=qc("scroller-end",l,D,y,he,0,F),Me=F["offset"+y.op.d2];var ct=fi(Us(D,"content")||D);Z=this.markerStart=qc("start",l,ct,y,he,Me,0,w),ne=this.markerEnd=qc("end",l,ct,y,he,Me,0,w),w&&(vt=qe.quickSetter([Z,ne],y.a,En)),!k&&!(Cr.length&&Us(D,"fixedMarkers")===!0)&&($P(G?Zt:D),qe.set([F,ce],{force3D:!0}),Je=qe.quickSetter(F,y.a,En),je=qe.quickSetter(ce,y.a,En))}if(w){var tt=w.vars.onUpdate,$e=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){T.update(0,0,1),tt&&tt.apply(w,$e||[])})}if(T.previous=function(){return gt[gt.indexOf(T)-1]},T.next=function(){return gt[gt.indexOf(T)+1]},T.revert=function(Ce,st){if(!st)return T.kill(!0);var Ve=Ce!==!1||!T.enabled,nt=Vn;Ve!==T.isReverted&&(Ve&&(Ye=Math.max($(),T.scroll.rec||0),ie=T.progress,lt=r&&r.progress()),Z&&[Z,ne,F,ce].forEach(function(Gt){return Gt.style.display=Ve?"none":"block"}),Ve&&(Vn=T,T.update(Ve)),d&&(!P||!T.isActive)&&(Ve?ZP(d,J,B):wh(d,J,zi(d),ze)),Ve||T.update(Ve),Vn=nt,T.isReverted=Ve)},T.refresh=function(Ce,st,Ve,nt){if(!((Vn||!T.enabled)&&!st)){if(d&&Ce&&qi){Ln(n,"scrollEnd",oy);return}!ni&&Ee&&Ee(T),Vn=T,ge.tween&&!Ve&&(ge.tween.kill(),ge.tween=0),de&&de.pause(),_&&r&&r.revert({kill:!1}).invalidate(),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var Gt=me(),ut=Ue(),Dt=w?w.duration():Er(D,y),ln=x<=.01,wt=0,Ot=nt||0,Mt=ho(Ve)?Ve.end:i.end,Un=i.endTrigger||f,A=ho(Ve)?Ve.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),j=T.pinnedContainer=i.pinnedContainer&&fi(i.pinnedContainer,T),oe=f&&Math.max(0,gt.indexOf(T))||0,ae=oe,K,Te,Fe,Ge,Be,He,Ke,Ze,mt,Rt,ht,Qt,ot;for(W&&ho(Ve)&&(Qt=qe.getProperty(F,y.p),ot=qe.getProperty(ce,y.p));ae--;)He=gt[ae],He.end||He.refresh(0,1)||(Vn=T),Ke=He.pin,Ke&&(Ke===f||Ke===d||Ke===j)&&!He.isReverted&&(Rt||(Rt=[]),Rt.unshift(He),He.revert(!0,!0)),He!==gt[ae]&&(oe--,ae--);for(oi(A)&&(A=A(T)),A=Ag(A,"start",T),L=Ng(A,f,Gt,y,$(),Z,F,T,ut,ve,k,Dt,w,T._startClamp&&"_startClamp")||(d?-.001:0),oi(Mt)&&(Mt=Mt(T)),Ai(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(Ai(A)?A.split(" ")[0]:"")+Mt:(wt=mu(Mt.substr(2),Gt),Mt=Ai(A)?A:(w?qe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,L):L)+wt,Un=f)),Mt=Ag(Mt,"end",T),z=Math.max(L,Ng(Mt||(Un?"100% 0":Dt),Un,Gt,y,$()+wt,ne,ce,T,ut,ve,k,Dt,w,T._endClamp&&"_endClamp"))||-.001,wt=0,ae=oe;ae--;)He=gt[ae],Ke=He.pin,Ke&&He.start-He._pinPush<=L&&!w&&He.end>0&&(K=He.end-(T._startClamp?Math.max(0,He.start):He.start),(Ke===f&&He.start-He._pinPush<L||Ke===j)&&isNaN(A)&&(wt+=K*(1-He.progress)),Ke===d&&(Ot+=K));if(L+=wt,z+=wt,T._startClamp&&(T._startClamp+=wt),T._endClamp&&!ni&&(T._endClamp=z||-.001,z=Math.min(z,Er(D,y))),x=z-L||(L-=.01)&&.001,ln&&(ie=qe.utils.clamp(0,1,qe.utils.normalize(L,z,Ye))),T._pinPush=Ot,Z&&wt&&(K={},K[y.a]="+="+wt,j&&(K[y.p]="-="+$()),qe.set([Z,ne],K)),d&&!(Yd&&T.end>=Er(D,y)))K=zi(d),Ge=y===Tn,Fe=$(),we=parseFloat(ue(y.a))+Ot,!Dt&&z>1&&(ht=(G?cn.scrollingElement||rr:D).style,ht={style:ht,value:ht["overflow"+y.a.toUpperCase()]},G&&zi(Zt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+y.a.toUpperCase()]="scroll")),wh(d,J,K),se=Yc(d),Te=Vr(d,!0),Ze=k&&Vs(D,Ge?si:Tn)(),g?(ze=[g+y.os2,x+Ot+En],ze.t=J,ae=g===yn?Wu(d,y)+x+Ot:0,ae&&(ze.push(y.d,ae+En),J.style.flexBasis!=="auto"&&(J.style.flexBasis=ae+En)),Ta(ze),j&&gt.forEach(function(We){We.pin===j&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),k&&$(Ye)):(ae=Wu(d,y),ae&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=ae+En)),k&&(Be={top:Te.top+(Ge?Fe-L:Ze)+En,left:Te.left+(Ge?Ze:Fe-L)+En,boxSizing:"border-box",position:"fixed"},Be[Co]=Be["max"+ka]=Math.ceil(Te.width)+En,Be[Ro]=Be["max"+Jp]=Math.ceil(Te.height)+En,Be[ki]=Be[ki+Al]=Be[ki+Tl]=Be[ki+Cl]=Be[ki+wl]="0",Be[yn]=K[yn],Be[yn+Al]=K[yn+Al],Be[yn+Tl]=K[yn+Tl],Be[yn+Cl]=K[yn+Cl],Be[yn+wl]=K[yn+wl],ee=QP(B,Be,P),ni&&$(0)),r?(mt=r._initted,Sh(1),r.render(r.duration(),!0,!0),Se=ue(y.a)-we+x+Ot,Ie=Math.abs(x-Se)>1,k&&Ie&&ee.splice(ee.length-2,2),r.render(0,!0,!0),mt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Sh(0)):Se=x,ht&&(ht.value?ht.style["overflow"+y.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+y.a));else if(f&&$()&&!w)for(Te=f.parentNode;Te&&Te!==Zt;)Te._pinOffset&&(L-=Te._pinOffset,z-=Te._pinOffset),Te=Te.parentNode;Rt&&Rt.forEach(function(We){return We.revert(!1,!0)}),T.start=L,T.end=z,Oe=I=ni?Ye:$(),!w&&!ni&&(Oe<Ye&&$(Ye),T.scroll.rec=0),T.revert(!1,!0),V=Gn(),Ae&&(re=-1,Ae.restart(!0)),Vn=0,r&&U&&(r._initted||lt)&&r.progress()!==lt&&r.progress(lt||0,!0).render(r.time(),!0,!0),(ln||ie!==T.progress||w||_)&&(r&&!U&&r.totalProgress(w&&L<-.001&&!ie?qe.utils.normalize(L,z,0):ie,!0),T.progress=ln||(Oe-L)/x===ie?0:ie),d&&g&&(J._pinOffset=Math.round(T.progress*Se)),de&&de.invalidate(),isNaN(Qt)||(Qt-=qe.getProperty(F,y.p),ot-=qe.getProperty(ce,y.p),jc(F,y,Qt),jc(Z,y,Qt-(nt||0)),jc(ce,y,ot),jc(ne,y,ot-(nt||0))),ln&&!ni&&T.update(),u&&!ni&&!C&&(C=!0,u(T),C=!1)}},T.getVelocity=function(){return($()-I)/(Gn()-ol)*1e3||0},T.endAnimation=function(){tl(T.callbackAnimation),r&&(de?de.progress(1):r.paused()?U||tl(r,T.direction<0,1):tl(r,r.reversed()))},T.labelToScroll=function(Ce){return r&&r.labels&&(L||T.refresh()||L)+r.labels[Ce]/r.duration()*x||0},T.getTrailing=function(Ce){var st=gt.indexOf(T),Ve=T.direction>0?gt.slice(0,st).reverse():gt.slice(st+1);return(Ai(Ce)?Ve.filter(function(nt){return nt.vars.preventOverlaps===Ce}):Ve).filter(function(nt){return T.direction>0?nt.end<=L:nt.start>=z})},T.update=function(Ce,st,Ve){if(!(w&&!Ve&&!Ce)){var nt=ni===!0?Ye:T.scroll(),Gt=Ce?0:(nt-L)/x,ut=Gt<0?0:Gt>1?1:Gt||0,Dt=T.progress,ln,wt,Ot,Mt,Un,A,j,oe;if(st&&(I=Oe,Oe=w?$():nt,S&&(Y=rt,rt=r&&!U?r.totalProgress():ut)),p&&d&&!Vn&&!Vc&&qi&&(!ut&&L<nt+(nt-I)/(Gn()-ol)*p?ut=1e-4:ut===1&&z>nt+(nt-I)/(Gn()-ol)*p&&(ut=.9999)),ut!==Dt&&T.enabled){if(ln=T.isActive=!!ut&&ut<1,wt=!!Dt&&Dt<1,A=ln!==wt,Un=A||!!ut!=!!Dt,T.direction=ut>Dt?1:-1,T.progress=ut,Un&&!Vn&&(Ot=ut&&!Dt?0:ut===1?1:Dt===1?2:3,U&&(Mt=!A&&X[Ot+1]!=="none"&&X[Ot+1]||X[Ot],oe=r&&(Mt==="complete"||Mt==="reset"||Mt in r))),b&&(A||oe)&&(oe||h||!r)&&(oi(b)?b(T):T.getTrailing(b).forEach(function(Fe){return Fe.endAnimation()})),U||(de&&!Vn&&!Vc?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",ut,r._tTime/r._tDur):(de.vars.totalProgress=ut,de.invalidate().restart())):r&&r.totalProgress(ut,!!(Vn&&(V||Ce)))),d){if(Ce&&g&&(J.style[g+y.os2]=Le),!k)be(ll(we+Se*ut));else if(Un){if(j=!Ce&&ut>Dt&&z+1>nt&&nt+1>=Er(D,y),P)if(!Ce&&(ln||j)){var ae=Vr(d,!0),K=nt-L;Fg(d,Zt,ae.top+(y===Tn?K:0)+En,ae.left+(y===Tn?0:K)+En)}else Fg(d,J);Ta(ln||j?ee:se),Ie&&ut<1&&ln||be(we+(ut===1&&!j?Se:0))}}S&&!ge.tween&&!Vn&&!Vc&&Ae.restart(!0),a&&(A||v&&ut&&(ut<1||!Mh))&&Xl(a.targets).forEach(function(Fe){return Fe.classList[ln||v?"add":"remove"](a.className)}),o&&!U&&!Ce&&o(T),Un&&!Vn?(U&&(oe&&(Mt==="complete"?r.pause().totalProgress(1):Mt==="reset"?r.restart(!0).pause():Mt==="restart"?r.restart(!0):r[Mt]()),o&&o(T)),(A||!Mh)&&(c&&A&&Eh(T,c),H[Ot]&&Eh(T,H[Ot]),v&&(ut===1?T.kill(!1,1):H[Ot]=0),A||(Ot=ut===1?1:3,H[Ot]&&Eh(T,H[Ot]))),O&&!ln&&Math.abs(T.getVelocity())>(cl(O)?O:2500)&&(tl(T.callbackAnimation),de?de.progress(1):tl(r,Mt==="reverse"?1:!ut,1))):U&&o&&!Vn&&o(T)}if(je){var Te=w?nt/w.duration()*(w._caScrollDist||0):nt;Je(Te+(F._isFlipped?1:0)),je(Te)}vt&&vt(-nt/w.duration()*(w._caScrollDist||0))}},T.enable=function(Ce,st){T.enabled||(T.enabled=!0,Ln(D,"resize",ul),G||Ln(D,"scroll",sa),Ee&&Ln(n,"refreshInit",Ee),Ce!==!1&&(T.progress=ie=0,Oe=I=re=$()),st!==!1&&T.refresh())},T.getTween=function(Ce){return Ce&&ge?ge.tween:de},T.setPositions=function(Ce,st,Ve,nt){if(w){var Gt=w.scrollTrigger,ut=w.duration(),Dt=Gt.end-Gt.start;Ce=Gt.start+Dt*Ce/ut,st=Gt.start+Dt*st/ut}T.refresh(!1,!1,{start:Cg(Ce,Ve&&!!T._startClamp),end:Cg(st,Ve&&!!T._endClamp)},nt),T.update()},T.adjustPinSpacing=function(Ce){if(ze&&Ce){var st=ze.indexOf(y.d)+1;ze[st]=parseFloat(ze[st])+Ce+En,ze[1]=parseFloat(ze[1])+Ce+En,Ta(ze)}},T.disable=function(Ce,st){if(T.enabled&&(Ce!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,st||de&&de.pause(),Ye=0,Re&&(Re.uncache=1),Ee&&Pn(n,"refreshInit",Ee),Ae&&(Ae.pause(),ge.tween&&ge.tween.kill()&&(ge.tween=0)),!G)){for(var Ve=gt.length;Ve--;)if(gt[Ve].scroller===D&&gt[Ve]!==T)return;Pn(D,"resize",ul),G||Pn(D,"scroll",sa)}},T.kill=function(Ce,st){T.disable(Ce,st),de&&!st&&de.kill(),l&&delete jd[l];var Ve=gt.indexOf(T);Ve>=0&&gt.splice(Ve,1),Ve===ti&&gu>0&&ti--,Ve=0,gt.forEach(function(nt){return nt.scroller===T.scroller&&(Ve=1)}),Ve||ni||(T.scroll.rec=0),r&&(r.scrollTrigger=null,Ce&&r.revert({kill:!1}),st||r.kill()),Z&&[Z,ne,F,ce].forEach(function(nt){return nt.parentNode&&nt.parentNode.removeChild(nt)}),Rl===T&&(Rl=0),d&&(Re&&(Re.uncache=1),Ve=0,gt.forEach(function(nt){return nt.pin===d&&Ve++}),Ve||(Re.spacer=0)),i.onKill&&i.onKill(T)},gt.push(T),T.enable(!1,!1),Lt&&Lt(T),r&&r.add&&!x){var _t=T.update;T.update=function(){T.update=_t,L||z||T.refresh()},qe.delayedCall(.01,T.update),x=.01,L=z=0}else T.refresh();d&&KP()},n.register=function(i){return aa||(qe=i||ey(),Qx()&&window.document&&n.enable(),aa=al),aa},n.defaults=function(i){if(i)for(var r in i)$c[r]=i[r];return $c},n.disable=function(i,r){al=0,gt.forEach(function(o){return o[r?"kill":"disable"](i)}),Pn(Et,"wheel",sa),Pn(cn,"scroll",sa),clearInterval(Hc),Pn(cn,"touchcancel",mr),Pn(Zt,"touchstart",mr),Wc(Pn,cn,"pointerdown,touchstart,mousedown",Rg),Wc(Pn,cn,"pointerup,touchend,mouseup",Pg),Vu.kill(),Gc(Pn);for(var s=0;s<St.length;s+=3)Xc(Pn,St[s],St[s+1]),Xc(Pn,St[s],St[s+2])},n.enable=function(){if(Et=window,cn=document,rr=cn.documentElement,Zt=cn.body,qe&&(Xl=qe.utils.toArray,El=qe.utils.clamp,qd=qe.core.context||mr,Sh=qe.core.suppressOverwrites||mr,Yp=Et.history.scrollRestoration||"auto",Kd=Et.pageYOffset,qe.core.globals("ScrollTrigger",n),Zt)){al=1,Ea=document.createElement("div"),Ea.style.height="100vh",Ea.style.position="absolute",cy(),GP(),gn.register(qe),n.isTouch=gn.isTouch,_s=gn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$d=gn.isTouch===1,Ln(Et,"wheel",sa),Yx=[Et,cn,rr,Zt],qe.matchMedia?(n.matchMedia=function(l){var c=qe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},qe.addEventListener("matchMediaInit",function(){return em()}),qe.addEventListener("matchMediaRevert",function(){return ay()}),qe.addEventListener("matchMedia",function(){So(0,1),Fo("matchMedia")}),qe.matchMedia("(orientation: portrait)",function(){return Th(),Th})):console.warn("Requires GSAP 3.11.0 or later"),Th(),Ln(cn,"scroll",sa);var i=Zt.style,r=i.borderTopStyle,s=qe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Vr(Zt),Tn.m=Math.round(o.top+Tn.sc())||0,si.m=Math.round(o.left+si.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),Hc=setInterval(Ig,250),qe.delayedCall(.5,function(){return Vc=0}),Ln(cn,"touchcancel",mr),Ln(Zt,"touchstart",mr),Wc(Ln,cn,"pointerdown,touchstart,mousedown",Rg),Wc(Ln,cn,"pointerup,touchend,mouseup",Pg),Xd=qe.utils.checkPrefix("transform"),vu.push(Xd),aa=Gn(),Vu=qe.delayedCall(.2,So).pause(),la=[cn,"visibilitychange",function(){var l=Et.innerWidth,c=Et.innerHeight;cn.hidden?(Tg=l,wg=c):(Tg!==l||wg!==c)&&ul()},cn,"DOMContentLoaded",So,Et,"load",So,Et,"resize",ul],Gc(Ln),gt.forEach(function(l){return l.enable(0,1)}),a=0;a<St.length;a+=3)Xc(Pn,St[a],St[a+1]),Xc(Pn,St[a],St[a+2])}},n.config=function(i){"limitCallbacks"in i&&(Mh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Hc)||(Hc=r)&&setInterval(Ig,r),"ignoreMobileResize"in i&&($d=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Gc(Pn)||Gc(Ln,i.autoRefreshEvents||"none"),Kx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=fi(i),o=St.indexOf(s),a=Uo(s);~o&&St.splice(o,a?6:2),r&&(a?Cr.unshift(Et,r,Zt,r,rr,r):Cr.unshift(s,r))},n.clearMatchMedia=function(i){gt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Ai(i)?fi(i):i).getBoundingClientRect(),a=o[s?Co:Ro]*r||0;return s?o.right-a>0&&o.left+a<Et.innerWidth:o.bottom-a>0&&o.top+a<Et.innerHeight},n.positionInViewport=function(i,r,s){Ai(i)&&(i=fi(i));var o=i.getBoundingClientRect(),a=o[s?Co:Ro],l=r==null?a/2:r in Xu?Xu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/Et.innerWidth:(o.top+l)/Et.innerHeight},n.killAll=function(i){if(gt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=No.killAll||[];No={},r.forEach(function(s){return s()})}},n}();bt.version="3.12.5";bt.saveStyles=function(n){return n?Xl(n).forEach(function(e){if(e&&e.style){var t=wi.indexOf(e);t>=0&&wi.splice(t,5),wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),qe.core.getCache(e),qd())}}):wi};bt.revert=function(n,e){return em(!n,e)};bt.create=function(n,e){return new bt(n,e)};bt.refresh=function(n){return n?ul():(aa||bt.register())&&So(!0)};bt.update=function(n){return++St.cache&&Yr(n===!0?2:0)};bt.clearScrollMemory=ly;bt.maxScroll=function(n,e){return Er(n,e?si:Tn)};bt.getScrollFunc=function(n,e){return Vs(fi(n),e?si:Tn)};bt.getById=function(n){return jd[n]};bt.getAll=function(){return gt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};bt.isScrolling=function(){return!!qi};bt.snapDirectional=Qp;bt.addEventListener=function(n,e){var t=No[n]||(No[n]=[]);~t.indexOf(e)||t.push(e)};bt.removeEventListener=function(n,e){var t=No[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};bt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=qe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&oi(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return oi(s)&&(s=s(),Ln(bt,"refresh",function(){return s=e.batchMax()})),Xl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(bt.create(c))}),t};var kg=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ah=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(gn.isTouch?" pinch-zoom":""):"none",e===rr&&n(Zt,t)},Kc={auto:1,scroll:1},t2=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||qe.core.getCache(s),a=Gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Zt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kc[(l=zi(s)).overflowY]||Kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Uo(s)&&(Kc[(l=zi(s)).overflowY]||Kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},fy=function(e,t,i,r){return gn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&t2,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Ln(cn,gn.eventTypes[0],Hg,!1,!0)},onDisable:function(){return Pn(cn,gn.eventTypes[0],Hg,!0)}})},n2=/(input|label|select|textarea)/i,zg,Hg=function(e){var t=n2.test(e.target.tagName);(t||zg)&&(e._gsapAllow=!0,zg=t)},i2=function(e){ho(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=fi(e.target)||rr,u=qe.core.globals().ScrollSmoother,h=u&&u.get(),f=_s&&(e.content&&fi(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Vs(c,Tn),g=Vs(c,si),_=1,p=(gn.isTouch&&Et.visualViewport?Et.visualViewport.scale*Et.visualViewport.width:Et.outerWidth)/Et.innerWidth,m=0,M=oi(r)?function(){return r(a)}:function(){return r||2.8},v,S,P=fy(c,e.type,!0,s),E=function(){return S=!1},w=mr,O=mr,b=function(){l=Er(c,Tn),O=El(_s?1:0,l),i&&(w=El(0,Er(c,si))),v=Po},y=function(){f._gsap.y=ll(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},U=function(){if(S){requestAnimationFrame(E);var W=ll(a.deltaY/2),ve=O(d.v-W);if(f&&ve!==d.v+d.offset){d.offset=ve-d.v;var T=ll((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",f._gsap.y=T+"px",d.cacheID=St.cache,Yr()}return!0}d.offset&&y(),S=!0},D,q,G,k,H=function(){b(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&qe.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return _s&&X.type==="touchmove"&&U()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=_;_=ll((Et.visualViewport&&Et.visualViewport.scale||1)/p),D.pause(),X!==_&&Ah(c,_>1.01?!0:i?!1:"x"),q=g(),G=d(),b(),v=Po},e.onRelease=e.onGestureStart=function(X,W){if(d.offset&&y(),!W)k.restart(!0);else{St.cache++;var ve=M(),T,Ee;i&&(T=g(),Ee=T+ve*.05*-X.velocityX/.227,ve*=kg(g,T,Ee,Er(c,si)),D.vars.scrollX=w(Ee)),T=d(),Ee=T+ve*.05*-X.velocityY/.227,ve*=kg(d,T,Ee,Er(c,Tn)),D.vars.scrollY=O(Ee),D.invalidate().duration(ve).play(.01),(_s&&D.vars.scrollY>=l||T>=l-1)&&qe.to({},{onUpdate:H,duration:ve})}o&&o(X)},e.onWheel=function(){D._ts&&D.pause(),Gn()-m>1e3&&(v=0,m=Gn())},e.onChange=function(X,W,ve,T,Ee){if(Po!==v&&b(),W&&i&&g(w(T[2]===W?q+(X.startX-X.x):g()+W-T[1])),ve){d.offset&&y();var me=Ee[2]===ve,Ue=me?G+X.startY-X.y:d()+ve-Ee[1],re=O(Ue);me&&Ue!==re&&(G+=re-Ue),d(re)}(ve||W)&&Yr()},e.onEnable=function(){Ah(c,i?!1:"x"),bt.addEventListener("refresh",H),Ln(Et,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),P.enable()},e.onDisable=function(){Ah(c,!0),Pn(Et,"resize",H),bt.removeEventListener("refresh",H),P.kill()},e.lockAxis=e.lockAxis!==!1,a=new gn(e),a.iOS=_s,_s&&!d()&&d(1),_s&&qe.ticker.add(mr),k=a._dc,D=qe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:uy(d,d(),function(){return D.pause()})},onUpdate:Yr,onComplete:k.vars.onComplete}),a};bt.sort=function(n){return gt.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};bt.observe=function(n){return new gn(n)};bt.normalizeScroll=function(n){if(typeof n>"u")return ei;if(n===!0&&ei)return ei.enable();if(n===!1){ei&&ei.kill(),ei=n;return}var e=n instanceof gn?n:i2(n);return ei&&ei.target===e.target&&ei.kill(),Uo(e.target)&&(ei=e),e};bt.core={_getVelocityProp:Wd,_inputObserver:fy,_scrollers:St,_proxies:Cr,bridge:{ss:function(){qi||Fo("scrollStart"),qi=Gn()},ref:function(){return Vn}}};ey()&&qe.registerPlugin(bt);const ic=n=>(Qr("data-v-f4cb1086"),n=n(),es(),n),r2={class:"navbar is-fixed-top has-text-white is-size-5"},s2={class:"navbar-brand"},o2=ic(()=>Ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"50",height:"50"},[Ne("path",{d:"M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z"})],-1)),a2=[o2],l2=ic(()=>Ne("span",{"aria-hidden":"true"},null,-1)),c2=ic(()=>Ne("span",{"aria-hidden":"true"},null,-1)),u2=ic(()=>Ne("span",{"aria-hidden":"true"},null,-1)),f2=[l2,c2,u2],h2={class:"navbar-end is-size-4"},d2=ic(()=>Ne("a",{class:"navbar-item",href:"resume.pdf",target:"_blank"}," CV ",-1)),p2={class:"shooting-stars-container"},m2={__name:"NavBar",setup(n){const e=ii(!1),t=ii([]),i=()=>{e.value=!e.value},r=o=>{const a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"})},s=()=>{t.value=[];for(let o=0;o<10;o++){const a={id:Date.now()+o,top:50+o*60,left:-100-o*50,delay:o*.1};t.value.push(a)}setTimeout(()=>{t.value=[]},2500),r("home")};return(o,a)=>(Ct(),It(Fn,null,[Ne("nav",r2,[Ne("div",s2,[Ne("a",{class:"navbar-item",onClick:hc(s,["prevent"])},a2),Ne("a",{role:"button",class:"navbar-burger burger has-text-white","aria-label":"menu","aria-expanded":"false",onClick:i},f2)]),Ne("div",{class:Ju({"navbar-menu":!0,"is-active":e.value})},[Ne("div",h2,[Ne("a",{class:"navbar-item",href:"/#experience",onClick:a[0]||(a[0]=hc(l=>r("experience"),["prevent"]))}," Experience "),Ne("a",{class:"navbar-item",href:"/#projects",onClick:a[1]||(a[1]=hc(l=>r("projects"),["prevent"]))}," Projects "),Ne("a",{class:"navbar-item",href:"/#skills",onClick:a[2]||(a[2]=hc(l=>r("skills"),["prevent"]))}," Skills "),d2])],2)]),Ne("div",p2,[(Ct(!0),It(Fn,null,_a(t.value,l=>(Ct(),It("div",{key:l.id,class:"shooting-star",style:Zu({top:l.top+"px",left:l.left+"px",animationDelay:l.delay+"s"})},null,4))),128))])],64))}},_2=Yn(m2,[["__scopeId","data-v-f4cb1086"]]);var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Zc(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var hy={exports:{}};(function(n,e){(function(t){n.exports=t()})(function(){return function(){function t(i,r,s){function o(c,u){if(!r[c]){if(!i[c]){var h=typeof Zc=="function"&&Zc;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var d=r[c]={exports:{}};i[c][0].call(d.exports,function(g){var _=i[c][1][g];return o(_||g)},d,d.exports,t,i,r,s)}return r[c].exports}for(var a=typeof Zc=="function"&&Zc,l=0;l<s.length;l++)o(s[l]);return o}return t}()({1:[function(t,i,r){(function(s){(function(){var o=200,a="__lodash_hash_undefined__",l=800,c=16,u=9007199254740991,h="[object Arguments]",f="[object Array]",d="[object AsyncFunction]",g="[object Boolean]",_="[object Date]",p="[object Error]",m="[object Function]",M="[object GeneratorFunction]",v="[object Map]",S="[object Number]",P="[object Null]",E="[object Object]",w="[object Proxy]",O="[object RegExp]",b="[object Set]",y="[object String]",U="[object Undefined]",D="[object WeakMap]",q="[object ArrayBuffer]",G="[object DataView]",k="[object Float32Array]",H="[object Float64Array]",X="[object Int8Array]",W="[object Int16Array]",ve="[object Int32Array]",T="[object Uint8Array]",Ee="[object Uint8ClampedArray]",me="[object Uint16Array]",Ue="[object Uint32Array]",re=/[\\^$.*+?()[\]{}|]/g,V=/^\[object .+?Constructor\]$/,ie=/^(?:0|[1-9]\d*)$/,$={};$[k]=$[H]=$[X]=$[W]=$[ve]=$[T]=$[Ee]=$[me]=$[Ue]=!0,$[h]=$[f]=$[q]=$[g]=$[G]=$[_]=$[p]=$[m]=$[v]=$[S]=$[E]=$[O]=$[b]=$[y]=$[D]=!1;var ge=typeof s=="object"&&s&&s.Object===Object&&s,Re=typeof self=="object"&&self&&self.Object===Object&&self,De=ge||Re||Function("return this")(),Oe=typeof r=="object"&&r&&!r.nodeType&&r,I=Oe&&typeof i=="object"&&i&&!i.nodeType&&i,L=I&&I.exports===Oe,z=L&&ge.process,Z=function(){try{var N=I&&I.require&&I.require("util").types;return N||z&&z.binding&&z.binding("util")}catch{}}(),ne=Z&&Z.isTypedArray;function F(N,Q,pe){switch(pe.length){case 0:return N.call(Q);case 1:return N.call(Q,pe[0]);case 2:return N.call(Q,pe[0],pe[1]);case 3:return N.call(Q,pe[0],pe[1],pe[2])}return N.apply(Q,pe)}function ce(N,Q){for(var pe=-1,Qe=Array(N);++pe<N;)Qe[pe]=Q(pe);return Qe}function he(N){return function(Q){return N(Q)}}function C(N,Q){return N==null?void 0:N[Q]}function x(N,Q){return function(pe){return N(Q(pe))}}var B=Array.prototype,ee=Function.prototype,se=Object.prototype,J=De["__core-js_shared__"],Me=ee.toString,ue=se.hasOwnProperty,be=function(){var N=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return N?"Symbol(src)_1."+N:""}(),we=se.toString,Se=Me.call(Object),Le=RegExp("^"+Me.call(ue).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ze=L?De.Buffer:void 0,Je=De.Symbol,Ie=De.Uint8Array;ze&&ze.allocUnsafe;var je=x(Object.getPrototypeOf,Object),Xe=Object.create,rt=se.propertyIsEnumerable,Y=B.splice,de=Je?Je.toStringTag:void 0,_e=function(){try{var N=it(Object,"defineProperty");return N({},"",{}),N}catch{}}(),ye=ze?ze.isBuffer:void 0,Ae=Math.max,Ye=Date.now,lt=it(De,"Map"),vt=it(Object,"create"),Lt=function(){function N(){}return function(Q){if(!js(Q))return{};if(Xe)return Xe(Q);N.prototype=Q;var pe=new N;return N.prototype=void 0,pe}}();function ct(N){var Q=-1,pe=N==null?0:N.length;for(this.clear();++Q<pe;){var Qe=N[Q];this.set(Qe[0],Qe[1])}}function tt(){this.__data__=vt?vt(null):{},this.size=0}function $e(N){var Q=this.has(N)&&delete this.__data__[N];return this.size-=Q?1:0,Q}function _t(N){var Q=this.__data__;if(vt){var pe=Q[N];return pe===a?void 0:pe}return ue.call(Q,N)?Q[N]:void 0}function Ce(N){var Q=this.__data__;return vt?Q[N]!==void 0:ue.call(Q,N)}function st(N,Q){var pe=this.__data__;return this.size+=this.has(N)?0:1,pe[N]=vt&&Q===void 0?a:Q,this}ct.prototype.clear=tt,ct.prototype.delete=$e,ct.prototype.get=_t,ct.prototype.has=Ce,ct.prototype.set=st;function Ve(N){var Q=-1,pe=N==null?0:N.length;for(this.clear();++Q<pe;){var Qe=N[Q];this.set(Qe[0],Qe[1])}}function nt(){this.__data__=[],this.size=0}function Gt(N){var Q=this.__data__,pe=Ze(Q,N);if(pe<0)return!1;var Qe=Q.length-1;return pe==Qe?Q.pop():Y.call(Q,pe,1),--this.size,!0}function ut(N){var Q=this.__data__,pe=Ze(Q,N);return pe<0?void 0:Q[pe][1]}function Dt(N){return Ze(this.__data__,N)>-1}function ln(N,Q){var pe=this.__data__,Qe=Ze(pe,N);return Qe<0?(++this.size,pe.push([N,Q])):pe[Qe][1]=Q,this}Ve.prototype.clear=nt,Ve.prototype.delete=Gt,Ve.prototype.get=ut,Ve.prototype.has=Dt,Ve.prototype.set=ln;function wt(N){var Q=-1,pe=N==null?0:N.length;for(this.clear();++Q<pe;){var Qe=N[Q];this.set(Qe[0],Qe[1])}}function Ot(){this.size=0,this.__data__={hash:new ct,map:new(lt||Ve),string:new ct}}function Mt(N){var Q=et(this,N).delete(N);return this.size-=Q?1:0,Q}function Un(N){return et(this,N).get(N)}function A(N){return et(this,N).has(N)}function j(N,Q){var pe=et(this,N),Qe=pe.size;return pe.set(N,Q),this.size+=pe.size==Qe?0:1,this}wt.prototype.clear=Ot,wt.prototype.delete=Mt,wt.prototype.get=Un,wt.prototype.has=A,wt.prototype.set=j;function oe(N){var Q=this.__data__=new Ve(N);this.size=Q.size}function ae(){this.__data__=new Ve,this.size=0}function K(N){var Q=this.__data__,pe=Q.delete(N);return this.size=Q.size,pe}function Te(N){return this.__data__.get(N)}function Fe(N){return this.__data__.has(N)}function Ge(N,Q){var pe=this.__data__;if(pe instanceof Ve){var Qe=pe.__data__;if(!lt||Qe.length<o-1)return Qe.push([N,Q]),this.size=++pe.size,this;pe=this.__data__=new wt(Qe)}return pe.set(N,Q),this.size=pe.size,this}oe.prototype.clear=ae,oe.prototype.delete=K,oe.prototype.get=Te,oe.prototype.has=Fe,oe.prototype.set=Ge;function Be(N,Q){var pe=Mi(N),Qe=!pe&&li(N),At=!pe&&!Qe&&im(N),Wt=!pe&&!Qe&&!At&&sm(N),rn=pe||Qe||At||Wt,Ut=rn?ce(N.length,String):[],sn=Ut.length;for(var Ki in N)rn&&(Ki=="length"||At&&(Ki=="offset"||Ki=="parent")||Wt&&(Ki=="buffer"||Ki=="byteLength"||Ki=="byteOffset")||tn(Ki,sn))||Ut.push(Ki);return Ut}function He(N,Q,pe){(pe!==void 0&&!mn(N[Q],pe)||pe===void 0&&!(Q in N))&&mt(N,Q,pe)}function Ke(N,Q,pe){var Qe=N[Q];(!(ue.call(N,Q)&&mn(Qe,pe))||pe===void 0&&!(Q in N))&&mt(N,Q,pe)}function Ze(N,Q){for(var pe=N.length;pe--;)if(mn(N[pe][0],Q))return pe;return-1}function mt(N,Q,pe){Q=="__proto__"&&_e?_e(N,Q,{configurable:!0,enumerable:!0,value:pe,writable:!0}):N[Q]=pe}var Rt=Pe();function ht(N){return N==null?N===void 0?U:P:de&&de in Object(N)?yt(N):ur(N)}function Qt(N){return Wa(N)&&ht(N)==h}function ot(N){if(!js(N)||hn(N))return!1;var Q=yf(N)?Le:V;return Q.test(Lr(N))}function We(N){return Wa(N)&&rm(N.length)&&!!$[ht(N)]}function pn(N){if(!js(N))return is(N);var Q=Cn(N),pe=[];for(var Qe in N)Qe=="constructor"&&(Q||!ue.call(N,Qe))||pe.push(Qe);return pe}function xt(N,Q,pe,Qe,At){N!==Q&&Rt(Q,function(Wt,rn){if(At||(At=new oe),js(Wt))jn(N,Q,rn,pe,xt,Qe,At);else{var Ut=Qe?Qe(Ht(N,rn),Wt,rn+"",N,Q,At):void 0;Ut===void 0&&(Ut=Wt),He(N,rn,Ut)}},om)}function jn(N,Q,pe,Qe,At,Wt,rn){var Ut=Ht(N,pe),sn=Ht(Q,pe),Ki=rn.get(sn);if(Ki){He(N,pe,Ki);return}var bi=Wt?Wt(Ut,sn,pe+"",N,Q,rn):void 0,Xa=bi===void 0;if(Xa){var Sf=Mi(sn),Mf=!Sf&&im(sn),lm=!Sf&&!Mf&&sm(sn);bi=sn,Sf||Mf||lm?Mi(Ut)?bi=Ut:rc(Ut)?bi=te(Ut):Mf?(Xa=!1,bi=Nn(sn)):lm?(Xa=!1,bi=R(sn)):bi=[]:vy(sn)||li(sn)?(bi=Ut,li(Ut)?bi=xy(Ut):(!js(Ut)||yf(Ut))&&(bi=kt(sn))):Xa=!1}Xa&&(rn.set(sn,bi),At(bi,sn,Qe,Wt,rn),rn.delete(sn)),He(N,pe,bi)}function cr(N,Q){return rs(fr(N,Q,am),N+"")}var qt=_e?function(N,Q){return _e(N,"toString",{configurable:!0,enumerable:!1,value:Sy(Q),writable:!0})}:am;function Nn(N,Q){return N.slice()}function en(N){var Q=new N.constructor(N.byteLength);return new Ie(Q).set(new Ie(N)),Q}function R(N,Q){var pe=en(N.buffer);return new N.constructor(pe,N.byteOffset,N.length)}function te(N,Q){var pe=-1,Qe=N.length;for(Q||(Q=Array(Qe));++pe<Qe;)Q[pe]=N[pe];return Q}function xe(N,Q,pe,Qe){var At=!pe;pe||(pe={});for(var Wt=-1,rn=Q.length;++Wt<rn;){var Ut=Q[Wt],sn=void 0;sn===void 0&&(sn=N[Ut]),At?mt(pe,Ut,sn):Ke(pe,Ut,sn)}return pe}function le(N){return cr(function(Q,pe){var Qe=-1,At=pe.length,Wt=At>1?pe[At-1]:void 0,rn=At>2?pe[2]:void 0;for(Wt=N.length>3&&typeof Wt=="function"?(At--,Wt):void 0,rn&&Yt(pe[0],pe[1],rn)&&(Wt=At<3?void 0:Wt,At=1),Q=Object(Q);++Qe<At;){var Ut=pe[Qe];Ut&&N(Q,Ut,Qe,Wt)}return Q})}function Pe(N){return function(Q,pe,Qe){for(var At=-1,Wt=Object(Q),rn=Qe(Q),Ut=rn.length;Ut--;){var sn=rn[++At];if(pe(Wt[sn],sn,Wt)===!1)break}return Q}}function et(N,Q){var pe=N.__data__;return nn(Q)?pe[typeof Q=="string"?"string":"hash"]:pe.map}function it(N,Q){var pe=C(N,Q);return ot(pe)?pe:void 0}function yt(N){var Q=ue.call(N,de),pe=N[de];try{N[de]=void 0;var Qe=!0}catch{}var At=we.call(N);return Qe&&(Q?N[de]=pe:delete N[de]),At}function kt(N){return typeof N.constructor=="function"&&!Cn(N)?Lt(je(N)):{}}function tn(N,Q){var pe=typeof N;return Q=Q??u,!!Q&&(pe=="number"||pe!="symbol"&&ie.test(N))&&N>-1&&N%1==0&&N<Q}function Yt(N,Q,pe){if(!js(pe))return!1;var Qe=typeof Q;return(Qe=="number"?ji(pe)&&tn(Q,pe.length):Qe=="string"&&Q in pe)?mn(pe[Q],N):!1}function nn(N){var Q=typeof N;return Q=="string"||Q=="number"||Q=="symbol"||Q=="boolean"?N!=="__proto__":N===null}function hn(N){return!!be&&be in N}function Cn(N){var Q=N&&N.constructor,pe=typeof Q=="function"&&Q.prototype||se;return N===pe}function is(N){var Q=[];if(N!=null)for(var pe in Object(N))Q.push(pe);return Q}function ur(N){return we.call(N)}function fr(N,Q,pe){return Q=Ae(Q===void 0?N.length-1:Q,0),function(){for(var Qe=arguments,At=-1,Wt=Ae(Qe.length-Q,0),rn=Array(Wt);++At<Wt;)rn[At]=Qe[Q+At];At=-1;for(var Ut=Array(Q+1);++At<Q;)Ut[At]=Qe[At];return Ut[Q]=pe(rn),F(N,this,Ut)}}function Ht(N,Q){if(!(Q==="constructor"&&typeof N[Q]=="function")&&Q!="__proto__")return N[Q]}var rs=hr(qt);function hr(N){var Q=0,pe=0;return function(){var Qe=Ye(),At=c-(Qe-pe);if(pe=Qe,At>0){if(++Q>=l)return arguments[0]}else Q=0;return N.apply(void 0,arguments)}}function Lr(N){if(N!=null){try{return Me.call(N)}catch{}try{return N+""}catch{}}return""}function mn(N,Q){return N===Q||N!==N&&Q!==Q}var li=Qt(function(){return arguments}())?Qt:function(N){return Wa(N)&&ue.call(N,"callee")&&!rt.call(N,"callee")},Mi=Array.isArray;function ji(N){return N!=null&&rm(N.length)&&!yf(N)}function rc(N){return Wa(N)&&ji(N)}var im=ye||My;function yf(N){if(!js(N))return!1;var Q=ht(N);return Q==m||Q==M||Q==d||Q==w}function rm(N){return typeof N=="number"&&N>-1&&N%1==0&&N<=u}function js(N){var Q=typeof N;return N!=null&&(Q=="object"||Q=="function")}function Wa(N){return N!=null&&typeof N=="object"}function vy(N){if(!Wa(N)||ht(N)!=E)return!1;var Q=je(N);if(Q===null)return!0;var pe=ue.call(Q,"constructor")&&Q.constructor;return typeof pe=="function"&&pe instanceof pe&&Me.call(pe)==Se}var sm=ne?he(ne):We;function xy(N){return xe(N,om(N))}function om(N){return ji(N)?Be(N):pn(N)}var yy=le(function(N,Q,pe){xt(N,Q,pe)});function Sy(N){return function(){return N}}function am(N){return N}function My(){return!1}i.exports=yy}).call(this)}).call(this,typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,i,r){/*! For license information please see shifty.js.LICENSE.txt */(function(s,o){typeof r=="object"&&typeof i=="object"?i.exports=o():typeof r=="object"?r.shifty=o():s.shifty=o()})(self,function(){return function(){var s={720:function(l,c,u){u.r(c),u.d(c,{Scene:function(){return en},Tweenable:function(){return Ce},interpolate:function(){return pn},processTweens:function(){return Ye},setBezierFunction:function(){return Z},shouldScheduleUpdate:function(){return Lt},tween:function(){return st},unsetBezierFunction:function(){return ne}});var h={};u.r(h),u.d(h,{bounce:function(){return $},bouncePast:function(){return ge},easeFrom:function(){return De},easeFromTo:function(){return Re},easeInBack:function(){return T},easeInCirc:function(){return H},easeInCubic:function(){return m},easeInExpo:function(){return q},easeInOutBack:function(){return me},easeInOutCirc:function(){return W},easeInOutCubic:function(){return v},easeInOutExpo:function(){return k},easeInOutQuad:function(){return p},easeInOutQuart:function(){return E},easeInOutQuint:function(){return b},easeInOutSine:function(){return D},easeInQuad:function(){return g},easeInQuart:function(){return S},easeInQuint:function(){return w},easeInSine:function(){return y},easeOutBack:function(){return Ee},easeOutBounce:function(){return ve},easeOutCirc:function(){return X},easeOutCubic:function(){return M},easeOutExpo:function(){return G},easeOutQuad:function(){return _},easeOutQuart:function(){return P},easeOutQuint:function(){return O},easeOutSine:function(){return U},easeTo:function(){return Oe},elastic:function(){return Ue},linear:function(){return d},swingFrom:function(){return V},swingFromTo:function(){return re},swingTo:function(){return ie}});var f={};u.r(f),u.d(f,{afterTween:function(){return mt},beforeTween:function(){return Ze},doesApply:function(){return He},tweenCreated:function(){return Ke}});var d=function(R){return R},g=function(R){return Math.pow(R,2)},_=function(R){return-(Math.pow(R-1,2)-1)},p=function(R){return(R/=.5)<1?.5*Math.pow(R,2):-.5*((R-=2)*R-2)},m=function(R){return Math.pow(R,3)},M=function(R){return Math.pow(R-1,3)+1},v=function(R){return(R/=.5)<1?.5*Math.pow(R,3):.5*(Math.pow(R-2,3)+2)},S=function(R){return Math.pow(R,4)},P=function(R){return-(Math.pow(R-1,4)-1)},E=function(R){return(R/=.5)<1?.5*Math.pow(R,4):-.5*((R-=2)*Math.pow(R,3)-2)},w=function(R){return Math.pow(R,5)},O=function(R){return Math.pow(R-1,5)+1},b=function(R){return(R/=.5)<1?.5*Math.pow(R,5):.5*(Math.pow(R-2,5)+2)},y=function(R){return 1-Math.cos(R*(Math.PI/2))},U=function(R){return Math.sin(R*(Math.PI/2))},D=function(R){return-.5*(Math.cos(Math.PI*R)-1)},q=function(R){return R===0?0:Math.pow(2,10*(R-1))},G=function(R){return R===1?1:1-Math.pow(2,-10*R)},k=function(R){return R===0?0:R===1?1:(R/=.5)<1?.5*Math.pow(2,10*(R-1)):.5*(2-Math.pow(2,-10*--R))},H=function(R){return-(Math.sqrt(1-R*R)-1)},X=function(R){return Math.sqrt(1-Math.pow(R-1,2))},W=function(R){return(R/=.5)<1?-.5*(Math.sqrt(1-R*R)-1):.5*(Math.sqrt(1-(R-=2)*R)+1)},ve=function(R){return R<1/2.75?7.5625*R*R:R<2/2.75?7.5625*(R-=1.5/2.75)*R+.75:R<2.5/2.75?7.5625*(R-=2.25/2.75)*R+.9375:7.5625*(R-=2.625/2.75)*R+.984375},T=function(R){var te=1.70158;return R*R*((te+1)*R-te)},Ee=function(R){var te=1.70158;return(R-=1)*R*((te+1)*R+te)+1},me=function(R){var te=1.70158;return(R/=.5)<1?R*R*((1+(te*=1.525))*R-te)*.5:.5*((R-=2)*R*((1+(te*=1.525))*R+te)+2)},Ue=function(R){return-1*Math.pow(4,-8*R)*Math.sin((6*R-1)*(2*Math.PI)/2)+1},re=function(R){var te=1.70158;return(R/=.5)<1?R*R*((1+(te*=1.525))*R-te)*.5:.5*((R-=2)*R*((1+(te*=1.525))*R+te)+2)},V=function(R){var te=1.70158;return R*R*((te+1)*R-te)},ie=function(R){var te=1.70158;return(R-=1)*R*((te+1)*R+te)+1},$=function(R){return R<1/2.75?7.5625*R*R:R<2/2.75?7.5625*(R-=1.5/2.75)*R+.75:R<2.5/2.75?7.5625*(R-=2.25/2.75)*R+.9375:7.5625*(R-=2.625/2.75)*R+.984375},ge=function(R){return R<1/2.75?7.5625*R*R:R<2/2.75?2-(7.5625*(R-=1.5/2.75)*R+.75):R<2.5/2.75?2-(7.5625*(R-=2.25/2.75)*R+.9375):2-(7.5625*(R-=2.625/2.75)*R+.984375)},Re=function(R){return(R/=.5)<1?.5*Math.pow(R,4):-.5*((R-=2)*Math.pow(R,3)-2)},De=function(R){return Math.pow(R,4)},Oe=function(R){return Math.pow(R,.25)};function I(R,te,xe,le,Pe,et){var it,yt,kt,tn,Yt,nn=0,hn=0,Cn=0,is=function(Ht){return((nn*Ht+hn)*Ht+Cn)*Ht},ur=function(Ht){return(3*nn*Ht+2*hn)*Ht+Cn},fr=function(Ht){return Ht>=0?Ht:0-Ht};return nn=1-(Cn=3*te)-(hn=3*(le-te)-Cn),kt=1-(Yt=3*xe)-(tn=3*(Pe-xe)-Yt),it=R,yt=function(Ht){return 1/(200*Ht)}(et),function(Ht){return((kt*Ht+tn)*Ht+Yt)*Ht}(function(Ht,rs){var hr,Lr,mn,li,Mi,ji;for(mn=Ht,ji=0;ji<8;ji++){if(li=is(mn)-Ht,fr(li)<rs)return mn;if(Mi=ur(mn),fr(Mi)<1e-6)break;mn-=li/Mi}if((mn=Ht)<(hr=0))return hr;if(mn>(Lr=1))return Lr;for(;hr<Lr;){if(li=is(mn),fr(li-Ht)<rs)return mn;Ht>li?hr=mn:Lr=mn,mn=.5*(Lr-hr)+hr}return mn}(it,yt))}var L,z=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:.25,te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.25,xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.75,le=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.75;return function(Pe){return I(Pe,R,te,xe,le,1)}},Z=function(R,te,xe,le,Pe){var et=z(te,xe,le,Pe);return et.displayName=R,et.x1=te,et.y1=xe,et.x2=le,et.y2=Pe,Ce.formulas[R]=et},ne=function(R){return delete Ce.formulas[R]};function F(R,te){if(!(R instanceof te))throw new TypeError("Cannot call a class as a function")}function ce(R,te){for(var xe=0;xe<te.length;xe++){var le=te[xe];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(R,le.key,le)}}function he(R){return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(te){return typeof te}:function(te){return te&&typeof Symbol=="function"&&te.constructor===Symbol&&te!==Symbol.prototype?"symbol":typeof te},he(R)}function C(R){return function(te){if(Array.isArray(te))return x(te)}(R)||function(te){if(typeof Symbol<"u"&&Symbol.iterator in Object(te))return Array.from(te)}(R)||function(te,xe){if(te){if(typeof te=="string")return x(te,xe);var le=Object.prototype.toString.call(te).slice(8,-1);return le==="Object"&&te.constructor&&(le=te.constructor.name),le==="Map"||le==="Set"?Array.from(te):le==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le)?x(te,xe):void 0}}(R)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function x(R,te){(te==null||te>R.length)&&(te=R.length);for(var xe=0,le=new Array(te);xe<te;xe++)le[xe]=R[xe];return le}function B(R,te){var xe=Object.keys(R);if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(R);te&&(le=le.filter(function(Pe){return Object.getOwnPropertyDescriptor(R,Pe).enumerable})),xe.push.apply(xe,le)}return xe}function ee(R){for(var te=1;te<arguments.length;te++){var xe=arguments[te]!=null?arguments[te]:{};te%2?B(Object(xe),!0).forEach(function(le){se(R,le,xe[le])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(xe)):B(Object(xe)).forEach(function(le){Object.defineProperty(R,le,Object.getOwnPropertyDescriptor(xe,le))})}return R}function se(R,te,xe){return te in R?Object.defineProperty(R,te,{value:xe,enumerable:!0,configurable:!0,writable:!0}):R[te]=xe,R}var J,Me,ue,be="linear",we=typeof window<"u"?window:u.g,Se="afterTween",Le="afterTweenEnd",ze="beforeTween",Je="tweenCreated",Ie="function",je="string",Xe=we.requestAnimationFrame||we.webkitRequestAnimationFrame||we.oRequestAnimationFrame||we.msRequestAnimationFrame||we.mozCancelRequestAnimationFrame&&we.mozRequestAnimationFrame||setTimeout,rt=function(){},Y=null,de=null,_e=ee({},h),ye=function(R,te,xe,le,Pe,et,it){var yt,kt,tn,Yt=R<et?0:(R-et)/Pe,nn=!1;for(var hn in it&&it.call&&(nn=!0,yt=it(Yt)),te)nn||(yt=((kt=it[hn]).call?kt:_e[kt])(Yt)),tn=xe[hn],te[hn]=tn+(le[hn]-tn)*yt;return te},Ae=function(R,te){var xe=R._timestamp,le=R._currentState,Pe=R._delay;if(!(te<xe+Pe)){var et=R._duration,it=R._targetState,yt=xe+Pe+et,kt=te>yt?yt:te;R._hasEnded=kt>=yt;var tn=et-(yt-kt),Yt=R._filters.length>0;if(R._hasEnded)return R._render(it,R._data,tn),R.stop(!0);Yt&&R._applyFilter(ze),kt<xe+Pe?xe=et=kt=1:xe+=Pe,ye(kt,le,R._originalState,it,et,xe,R._easing),Yt&&R._applyFilter(Se),R._render(le,R._data,tn)}},Ye=function(){for(var R,te=Ce.now(),xe=Y;xe;)R=xe._next,Ae(xe,te),xe=R},lt=Date.now||function(){return+new Date},vt=!1,Lt=function(R){R&&vt||(vt=R,R&&ct())},ct=function R(){J=lt(),vt&&Xe.call(we,R,16.666666666666668),Ye()},tt=function(R){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:be,xe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(te)){var le=z.apply(void 0,C(te));return le}var Pe=he(te);if(_e[te])return _e[te];if(Pe===je||Pe===Ie)for(var et in R)xe[et]=te;else for(var it in R)xe[it]=te[it]||be;return xe},$e=function(R){R===Y?(Y=R._next)?Y._previous=null:de=null:R===de?(de=R._previous)?de._next=null:Y=null:(Me=R._previous,ue=R._next,Me._next=ue,ue._previous=Me),R._previous=R._next=null},_t=typeof Promise=="function"?Promise:null;L=Symbol.toStringTag;var Ce=function(){function R(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;F(this,R),se(this,L,"Promise"),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._hasEnded=!1,this._resolve=null,this._reject=null,this._currentState=le||{},this._originalState={},this._targetState={},this._start=rt,this._render=rt,this._promiseCtor=_t,Pe&&this.setConfig(Pe)}var te,xe;return te=R,xe=[{key:"_applyFilter",value:function(le){for(var Pe=this._filters.length;Pe>0;Pe--){var et=this._filters[Pe-Pe][le];et&&et(this)}}},{key:"tween",value:function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return this._isPlaying&&this.stop(),!le&&this._config||this.setConfig(le),this._pausedAtTime=null,this._timestamp=R.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Pe=this._config;for(var et in le)Pe[et]=le[et];var it=Pe.promise,yt=it===void 0?this._promiseCtor:it,kt=Pe.start,tn=kt===void 0?rt:kt,Yt=Pe.finish,nn=Pe.render,hn=nn===void 0?this._config.step||rt:nn,Cn=Pe.step,is=Cn===void 0?rt:Cn;this._data=Pe.data||Pe.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=le.delay||0,this._start=tn,this._render=hn||is,this._duration=Pe.duration||500,this._promiseCtor=yt,Yt&&(this._resolve=Yt);var ur=le.from,fr=le.to,Ht=fr===void 0?{}:fr,rs=this._currentState,hr=this._originalState,Lr=this._targetState;for(var mn in ur)rs[mn]=ur[mn];var li=!1;for(var Mi in rs){var ji=rs[Mi];li||he(ji)!==je||(li=!0),hr[Mi]=ji,Lr[Mi]=Ht.hasOwnProperty(Mi)?Ht[Mi]:ji}if(this._easing=tt(this._currentState,Pe.easing,this._easing),this._filters.length=0,li){for(var rc in R.filters)R.filters[rc].doesApply(this)&&this._filters.push(R.filters[rc]);this._applyFilter(Je)}return this}},{key:"then",value:function(le,Pe){var et=this;return this._promise=new this._promiseCtor(function(it,yt){et._resolve=it,et._reject=yt}),this._promise.then(le,Pe)}},{key:"catch",value:function(le){return this.then().catch(le)}},{key:"finally",value:function(le){return this.then().finally(le)}},{key:"get",value:function(){return ee({},this._currentState)}},{key:"set",value:function(le){this._currentState=le}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=R.now(),this._isPlaying=!1,$e(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:R.now();return this._timestamp===null?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=le-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,Y===null?(Y=this,de=this):(this._previous=de,de._next=this,de=this),this)}},{key:"seek",value:function(le){le=Math.max(le,0);var Pe=R.now();return this._timestamp+le===0||(this._timestamp=Pe-le,Ae(this,Pe)),this}},{key:"stop",value:function(){var le=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,$e(this);var Pe=this._filters.length>0;return le&&(Pe&&this._applyFilter(ze),ye(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),Pe&&(this._applyFilter(Se),this._applyFilter(Le))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this}},{key:"cancel",value:function(){var le=arguments.length>0&&arguments[0]!==void 0&&arguments[0],Pe=this._currentState,et=this._data,it=this._isPlaying;return it?(this._reject&&this._reject({data:et,state:Pe,tweenable:this}),this._resolve=null,this._reject=null,this.stop(le)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"hasEnded",value:function(){return this._hasEnded}},{key:"setScheduleFunction",value:function(le){R.setScheduleFunction(le)}},{key:"data",value:function(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return le&&(this._data=ee({},le)),this._data}},{key:"dispose",value:function(){for(var le in this)delete this[le]}}],xe&&ce(te.prototype,xe),R}();function st(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},te=new Ce;return te.tween(R),te.tweenable=te,te}se(Ce,"now",function(){return J}),se(Ce,"setScheduleFunction",function(R){return Xe=R}),se(Ce,"filters",{}),se(Ce,"formulas",_e),Lt(!0);var Ve,nt,Gt=/(\d|-|\.)/,ut=/([^\-0-9.]+)/g,Dt=/[0-9.-]+/g,ln=(Ve=Dt.source,nt=/,\s*/.source,new RegExp("rgba?\\(".concat(Ve).concat(nt).concat(Ve).concat(nt).concat(Ve,"(").concat(nt).concat(Ve,")?\\)"),"g")),wt=/^.*\(/,Ot=/#([0-9]|[a-f]){3,6}/gi,Mt="VAL",Un=function(R,te){return R.map(function(xe,le){return"_".concat(te,"_").concat(le)})};function A(R){return parseInt(R,16)}var j=function(R){return"rgb(".concat((te=R,(te=te.replace(/#/,"")).length===3&&(te=(te=te.split(""))[0]+te[0]+te[1]+te[1]+te[2]+te[2]),[A(te.substr(0,2)),A(te.substr(2,2)),A(te.substr(4,2))]).join(","),")");var te},oe=function(R,te,xe){var le=te.match(R),Pe=te.replace(R,Mt);return le&&le.forEach(function(et){return Pe=Pe.replace(Mt,xe(et))}),Pe},ae=function(R){for(var te in R){var xe=R[te];typeof xe=="string"&&xe.match(Ot)&&(R[te]=oe(Ot,xe,j))}},K=function(R){var te=R.match(Dt),xe=te.slice(0,3).map(Math.floor),le=R.match(wt)[0];if(te.length===3)return"".concat(le).concat(xe.join(","),")");if(te.length===4)return"".concat(le).concat(xe.join(","),",").concat(te[3],")");throw new Error("Invalid rgbChunk: ".concat(R))},Te=function(R){return R.match(Dt)},Fe=function(R,te){var xe={};return te.forEach(function(le){xe[le]=R[le],delete R[le]}),xe},Ge=function(R,te){return te.map(function(xe){return R[xe]})},Be=function(R,te){return te.forEach(function(xe){return R=R.replace(Mt,+xe.toFixed(4))}),R},He=function(R){for(var te in R._currentState)if(typeof R._currentState[te]=="string")return!0;return!1};function Ke(R){var te=R._currentState;[te,R._originalState,R._targetState].forEach(ae),R._tokenData=function(xe){var le,Pe,et={};for(var it in xe){var yt=xe[it];typeof yt=="string"&&(et[it]={formatString:(le=yt,Pe=void 0,Pe=le.match(ut),Pe?(Pe.length===1||le.charAt(0).match(Gt))&&Pe.unshift(""):Pe=["",""],Pe.join(Mt)),chunkNames:Un(Te(yt),it)})}return et}(te)}function Ze(R){var te=R._currentState,xe=R._originalState,le=R._targetState,Pe=R._easing,et=R._tokenData;(function(it,yt){var kt=function(Yt){var nn=yt[Yt].chunkNames,hn=it[Yt];if(typeof hn=="string"){var Cn=hn.split(" "),is=Cn[Cn.length-1];nn.forEach(function(ur,fr){return it[ur]=Cn[fr]||is})}else nn.forEach(function(ur){return it[ur]=hn});delete it[Yt]};for(var tn in yt)kt(tn)})(Pe,et),[te,xe,le].forEach(function(it){return function(yt,kt){var tn=function(nn){Te(yt[nn]).forEach(function(hn,Cn){return yt[kt[nn].chunkNames[Cn]]=+hn}),delete yt[nn]};for(var Yt in kt)tn(Yt)}(it,et)})}function mt(R){var te=R._currentState,xe=R._originalState,le=R._targetState,Pe=R._easing,et=R._tokenData;[te,xe,le].forEach(function(it){return function(yt,kt){for(var tn in kt){var Yt=kt[tn],nn=Yt.chunkNames,hn=Yt.formatString,Cn=Be(hn,Ge(Fe(yt,nn),nn));yt[tn]=oe(ln,Cn,K)}}(it,et)}),function(it,yt){for(var kt in yt){var tn=yt[kt].chunkNames,Yt=it[tn[0]];it[kt]=typeof Yt=="string"?tn.map(function(nn){var hn=it[nn];return delete it[nn],hn}).join(" "):Yt}}(Pe,et)}function Rt(R,te){var xe=Object.keys(R);if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(R);te&&(le=le.filter(function(Pe){return Object.getOwnPropertyDescriptor(R,Pe).enumerable})),xe.push.apply(xe,le)}return xe}function ht(R){for(var te=1;te<arguments.length;te++){var xe=arguments[te]!=null?arguments[te]:{};te%2?Rt(Object(xe),!0).forEach(function(le){Qt(R,le,xe[le])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(xe)):Rt(Object(xe)).forEach(function(le){Object.defineProperty(R,le,Object.getOwnPropertyDescriptor(xe,le))})}return R}function Qt(R,te,xe){return te in R?Object.defineProperty(R,te,{value:xe,enumerable:!0,configurable:!0,writable:!0}):R[te]=xe,R}var ot=new Ce,We=Ce.filters,pn=function(R,te,xe,le){var Pe=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,et=ht({},R),it=tt(R,le);for(var yt in ot._filters.length=0,ot.set({}),ot._currentState=et,ot._originalState=R,ot._targetState=te,ot._easing=it,We)We[yt].doesApply(ot)&&ot._filters.push(We[yt]);ot._applyFilter("tweenCreated"),ot._applyFilter("beforeTween");var kt=ye(xe,et,R,te,1,Pe,it);return ot._applyFilter("afterTween"),kt};function xt(R,te){(te==null||te>R.length)&&(te=R.length);for(var xe=0,le=new Array(te);xe<te;xe++)le[xe]=R[xe];return le}function jn(R,te){if(!(R instanceof te))throw new TypeError("Cannot call a class as a function")}function cr(R,te){for(var xe=0;xe<te.length;xe++){var le=te[xe];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(R,le.key,le)}}function qt(R,te){var xe=te.get(R);if(!xe)throw new TypeError("attempted to get private field on non-instance");return xe.get?xe.get.call(R):xe.value}var Nn=new WeakMap,en=function(){function R(){jn(this,R),Nn.set(this,{writable:!0,value:[]});for(var le=arguments.length,Pe=new Array(le),et=0;et<le;et++)Pe[et]=arguments[et];Pe.forEach(this.add.bind(this))}var te,xe;return te=R,(xe=[{key:"add",value:function(le){return qt(this,Nn).push(le),le}},{key:"remove",value:function(le){var Pe=qt(this,Nn).indexOf(le);return~Pe&&qt(this,Nn).splice(Pe,1),le}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return qt(this,Nn).some(function(le){return le.isPlaying()})}},{key:"play",value:function(){return qt(this,Nn).forEach(function(le){return le.tween()}),this}},{key:"pause",value:function(){return qt(this,Nn).forEach(function(le){return le.pause()}),this}},{key:"resume",value:function(){return this.playingTweenables.forEach(function(le){return le.resume()}),this}},{key:"stop",value:function(le){return qt(this,Nn).forEach(function(Pe){return Pe.stop(le)}),this}},{key:"tweenables",get:function(){return function(Pe){if(Array.isArray(Pe))return xt(Pe)}(le=qt(this,Nn))||function(Pe){if(typeof Symbol<"u"&&Symbol.iterator in Object(Pe))return Array.from(Pe)}(le)||function(Pe,et){if(Pe){if(typeof Pe=="string")return xt(Pe,et);var it=Object.prototype.toString.call(Pe).slice(8,-1);return it==="Object"&&Pe.constructor&&(it=Pe.constructor.name),it==="Map"||it==="Set"?Array.from(Pe):it==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(it)?xt(Pe,et):void 0}}(le)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();var le}},{key:"playingTweenables",get:function(){return qt(this,Nn).filter(function(le){return!le.hasEnded()})}},{key:"promises",get:function(){return qt(this,Nn).map(function(le){return le.then()})}}])&&cr(te.prototype,xe),R}();Ce.filters.token=f}},o={};function a(l){if(o[l])return o[l].exports;var c=o[l]={exports:{}};return s[l](c,c.exports,a),c.exports}return a.d=function(l,c){for(var u in c)a.o(c,u)&&!a.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:c[u]})},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)},a.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a(720)}()})},{}],3:[function(t,i,r){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=c.strokeWidth;c.trailWidth&&c.trailWidth>c.strokeWidth&&(u=c.trailWidth);var h=50-u/2;return o.render(this._pathTemplate,{radius:h,"2radius":h*2})},a.prototype._trailString=function(c){return this._pathString(c)},i.exports=a},{"./shape":8,"./utils":10}],4:[function(t,i,r){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate=u.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._initializeSvg=function(c,u){var h=u.vertical?"0 0 "+u.strokeWidth+" 100":"0 0 100 "+u.strokeWidth;c.setAttribute("viewBox",h),c.setAttribute("preserveAspectRatio","none")},a.prototype._pathString=function(c){return o.render(this._pathTemplate,{center:c.strokeWidth/2})},a.prototype._trailString=function(c){return this._pathString(c)},i.exports=a},{"./shape":8,"./utils":10}],5:[function(t,i,r){i.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Square:t("./square"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":3,"./line":4,"./path":6,"./semicircle":7,"./shape":8,"./square":9,"./utils":10}],6:[function(t,i,r){var s=t("shifty"),o=t("./utils"),a=s.Tweenable,l={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},c=function u(h,f){if(!(this instanceof u))throw new Error("Constructor was called without new keyword");f=o.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},f);var d;o.isString(h)?d=document.querySelector(h):d=h,this.path=d,this._opts=f,this._tweenable=null;var g=this.path.getTotalLength();this.path.style.strokeDasharray=g+" "+g,this.set(0)};c.prototype.value=function(){var h=this._getComputedDashOffset(),f=this.path.getTotalLength(),d=1-h/f;return parseFloat(d.toFixed(6),10)},c.prototype.set=function(h){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(h);var f=this._opts.step;if(o.isFunction(f)){var d=this._easing(this._opts.easing),g=this._calculateTo(h,d),_=this._opts.shape||this;f(g,_,this._opts.attachment)}},c.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},c.prototype.animate=function(h,f,d){f=f||{},o.isFunction(f)&&(d=f,f={});var g=o.extend({},f),_=o.extend({},this._opts);f=o.extend(_,f);var p=this._easing(f.easing),m=this._resolveFromAndTo(h,p,g);this.stop(),this.path.getBoundingClientRect();var M=this._getComputedDashOffset(),v=this._progressToOffset(h),S=this;this._tweenable=new a,this._tweenable.tween({from:o.extend({offset:M},m.from),to:o.extend({offset:v},m.to),duration:f.duration,delay:f.delay,easing:p,step:function(P){S.path.style.strokeDashoffset=P.offset;var E=f.shape||S;f.step(P,E,f.attachment)}}).then(function(P){o.isFunction(d)&&d()}).catch(function(P){throw console.error("Error in tweening:",P),P})},c.prototype._getComputedDashOffset=function(){var h=window.getComputedStyle(this.path,null);return parseFloat(h.getPropertyValue("stroke-dashoffset"),10)},c.prototype._progressToOffset=function(h){var f=this.path.getTotalLength();return f-h*f},c.prototype._resolveFromAndTo=function(h,f,d){return d.from&&d.to?{from:d.from,to:d.to}:{from:this._calculateFrom(f),to:this._calculateTo(h,f)}},c.prototype._calculateFrom=function(h){return s.interpolate(this._opts.from,this._opts.to,this.value(),h)},c.prototype._calculateTo=function(h,f){return s.interpolate(this._opts.from,this._opts.to,h,f)},c.prototype._stopTween=function(){this._tweenable!==null&&(this._tweenable.stop(!0),this._tweenable=null)},c.prototype._easing=function(h){return l.hasOwnProperty(h)?l[h]:h},i.exports=c},{"./utils":10,shifty:2}],7:[function(t,i,r){var s=t("./shape"),o=t("./circle"),a=t("./utils"),l=function(u,h){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,s.apply(this,arguments)};l.prototype=new s,l.prototype.constructor=l,l.prototype._initializeSvg=function(u,h){u.setAttribute("viewBox","0 0 100 50")},l.prototype._initializeTextContainer=function(u,h,f){u.text.style&&(f.style.top="auto",f.style.bottom="0",u.text.alignToBottom?a.setStyle(f,"transform","translate(-50%, 0)"):a.setStyle(f,"transform","translate(-50%, 50%)"))},l.prototype._pathString=o.prototype._pathString,l.prototype._trailString=o.prototype._trailString,i.exports=l},{"./circle":3,"./shape":8,"./utils":10}],8:[function(t,i,r){var s=t("./path"),o=t("./utils"),a="Object is destroyed",l=function c(u,h){if(!(this instanceof c))throw new Error("Constructor was called without new keyword");if(arguments.length!==0){this._opts=o.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},h,!0),o.isObject(h)&&h.svgStyle!==void 0&&(this._opts.svgStyle=h.svgStyle),o.isObject(h)&&o.isObject(h.text)&&h.text.style!==void 0&&(this._opts.text.style=h.text.style);var f=this._createSvgView(this._opts),d;if(o.isString(u)?d=document.querySelector(u):d=u,!d)throw new Error("Container does not exist: "+u);this._container=d,this._container.appendChild(f.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&o.setStyles(f.svg,this._opts.svgStyle),this.svg=f.svg,this.path=f.path,this.trail=f.trail,this.text=null;var g=o.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new s(f.path,g),o.isObject(this._opts.text)&&this._opts.text.value!==null&&this.setText(this._opts.text.value)}};l.prototype.animate=function(u,h,f){if(this._progressPath===null)throw new Error(a);this._progressPath.animate(u,h,f)},l.prototype.stop=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath.stop()},l.prototype.pause=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},l.prototype.resume=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},l.prototype.destroy=function(){if(this._progressPath===null)throw new Error(a);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,this.text!==null&&(this.text.parentNode.removeChild(this.text),this.text=null)},l.prototype.set=function(u){if(this._progressPath===null)throw new Error(a);this._progressPath.set(u)},l.prototype.value=function(){if(this._progressPath===null)throw new Error(a);return this._progressPath===void 0?0:this._progressPath.value()},l.prototype.setText=function(u){if(this._progressPath===null)throw new Error(a);this.text===null&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),o.isObject(u)?(o.removeChildren(this.text),this.text.appendChild(u)):this.text.innerHTML=u},l.prototype._createSvgView=function(u){var h=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(h,u);var f=null;(u.trailColor||u.trailWidth)&&(f=this._createTrail(u),h.appendChild(f));var d=this._createPath(u);return h.appendChild(d),{svg:h,path:d,trail:f}},l.prototype._initializeSvg=function(u,h){u.setAttribute("viewBox","0 0 100 100")},l.prototype._createPath=function(u){var h=this._pathString(u);return this._createPathElement(h,u)},l.prototype._createTrail=function(u){var h=this._trailString(u),f=o.extend({},u);return f.trailColor||(f.trailColor="#eee"),f.trailWidth||(f.trailWidth=f.strokeWidth),f.color=f.trailColor,f.strokeWidth=f.trailWidth,f.fill=null,this._createPathElement(h,f)},l.prototype._createPathElement=function(u,h){var f=document.createElementNS("http://www.w3.org/2000/svg","path");return f.setAttribute("d",u),f.setAttribute("stroke",h.color),f.setAttribute("stroke-width",h.strokeWidth),h.fill?f.setAttribute("fill",h.fill):f.setAttribute("fill-opacity","0"),f},l.prototype._createTextContainer=function(u,h){var f=document.createElement("div");f.className=u.text.className;var d=u.text.style;return d&&(u.text.autoStyleContainer&&(h.style.position="relative"),o.setStyles(f,d),d.color||(f.style.color=u.color)),this._initializeTextContainer(u,h,f),f},l.prototype._initializeTextContainer=function(c,u,h){},l.prototype._pathString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._trailString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._warnContainerAspectRatio=function(u){if(this.containerAspectRatio){var h=window.getComputedStyle(u,null),f=parseFloat(h.getPropertyValue("width"),10),d=parseFloat(h.getPropertyValue("height"),10);o.floatEquals(this.containerAspectRatio,f/d)||(console.warn("Incorrect aspect ratio of container","#"+u.id,"detected:",h.getPropertyValue("width")+"(width)","/",h.getPropertyValue("height")+"(height)","=",f/d),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},i.exports=l},{"./path":6,"./utils":10}],9:[function(t,i,r){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=100-c.strokeWidth/2;return o.render(this._pathTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2})},a.prototype._trailString=function(c){var u=100-c.strokeWidth/2;return o.render(this._trailTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2,startMargin:c.strokeWidth/2-c.trailWidth/2})},i.exports=a},{"./shape":8,"./utils":10}],10:[function(t,i,r){var s=t("lodash.merge"),o="Webkit Moz O ms".split(" "),a=.001;function l(v,S){var P=v;for(var E in S)if(S.hasOwnProperty(E)){var w=S[E],O="\\{"+E+"\\}",b=new RegExp(O,"g");P=P.replace(b,w)}return P}function c(v,S,P){for(var E=v.style,w=0;w<o.length;++w){var O=o[w];E[O+h(S)]=P}E[S]=P}function u(v,S){p(S,function(P,E){P!=null&&(_(P)&&P.prefix===!0?c(v,E,P.value):v.style[E]=P)})}function h(v){return v.charAt(0).toUpperCase()+v.slice(1)}function f(v){return typeof v=="string"||v instanceof String}function d(v){return typeof v=="function"}function g(v){return Object.prototype.toString.call(v)==="[object Array]"}function _(v){if(g(v))return!1;var S=typeof v;return S==="object"&&!!v}function p(v,S){for(var P in v)if(v.hasOwnProperty(P)){var E=v[P];S(E,P)}}function m(v,S){return Math.abs(v-S)<a}function M(v){for(;v.firstChild;)v.removeChild(v.firstChild)}i.exports={extend:s,render:l,setStyle:c,setStyles:u,capitalize:h,isString:f,isFunction:d,isObject:_,forEachObject:p,floatEquals:m,removeChildren:M}},{"lodash.merge":1}]},{},[5])(5)})})(hy);var g2=hy.exports;const v2=tm(g2),dy=n=>(Qr("data-v-b471cecb"),n=n(),es(),n),x2={id:"star-container"},y2=dy(()=>Ne("div",{id:"progressline"},null,-1)),S2=dy(()=>Ne("div",{id:"star"},[Ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"50",height:"50"},[Ne("path",{d:"M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z"})])],-1)),M2=[y2,S2],b2={__name:"BGAnimation",setup(n){return $s(()=>{nr.to("#star",{rotation:360,duration:2,repeat:-1,ease:"linear"});var e=new v2.Line("#progressline",{strokeWidth:2,easing:"easeInOut",duration:2e3,color:"#E5D4ED",trailColor:"#eee",trailWidth:1,svgStyle:{width:"100%",height:"100%"}});e.animate(1)}),(e,t)=>(Ct(),It("div",x2,M2))}},E2=Yn(b2,[["__scopeId","data-v-b471cecb"]]);var py={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(typeof self<"u"?self:$u,()=>(()=>{var t={3146:(o,a,l)=>{for(var c=l(3491),u=typeof window>"u"?l.g:window,h=["moz","webkit"],f="AnimationFrame",d=u["request"+f],g=u["cancel"+f]||u["cancelRequest"+f],_=0;!d&&_<h.length;_++)d=u[h[_]+"Request"+f],g=u[h[_]+"Cancel"+f]||u[h[_]+"CancelRequest"+f];if(!d||!g){var p=0,m=0,M=[],v=1e3/60;d=function(S){if(M.length===0){var P=c(),E=Math.max(0,v-(P-p));p=E+P,setTimeout(function(){var w=M.slice(0);M.length=0;for(var O=0;O<w.length;O++)if(!w[O].cancelled)try{w[O].callback(p)}catch(b){setTimeout(function(){throw b},0)}},Math.round(E))}return M.push({handle:++m,callback:S,cancelled:!1}),m},g=function(S){for(var P=0;P<M.length;P++)M[P].handle===S&&(M[P].cancelled=!0)}}o.exports=function(S){return d.call(u,S)},o.exports.cancel=function(){g.apply(u,arguments)},o.exports.polyfill=function(S){S||(S=u),S.requestAnimationFrame=d,S.cancelAnimationFrame=g}},3491:function(o){(function(){var a,l,c,u,h,f;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(a()-h)/1e6},l=process.hrtime,u=(a=function(){var d;return 1e9*(d=l())[0]+d[1]})(),f=1e9*process.uptime(),h=u-f):Date.now?(o.exports=function(){return Date.now()-c},c=Date.now()):(o.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)}},i={};function r(o){var a=i[o];if(a!==void 0)return a.exports;var l=i[o]={exports:{}};return t[o].call(l.exports,l,l.exports,r),l.exports}r.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return r.d(a,{a}),a},r.d=(o,a)=>{for(var l in a)r.o(a,l)&&!r.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),r.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a);var s={};return(()=>{r.d(s,{default:()=>G});var o=r(3146),a=r.n(o);const l=function(k){return new RegExp(/<[a-z][\s\S]*>/i).test(k)},c=function(k,H){return Math.floor(Math.random()*(H-k+1))+k};var u="TYPE_CHARACTER",h="REMOVE_CHARACTER",f="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",_="CALL_FUNCTION",p="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",M="CHANGE_DELAY",v="CHANGE_CURSOR",S="PASTE_STRING",P="HTML_TAG";function E(k){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},E(k)}function w(k,H){var X=Object.keys(k);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(k);H&&(W=W.filter(function(ve){return Object.getOwnPropertyDescriptor(k,ve).enumerable})),X.push.apply(X,W)}return X}function O(k){for(var H=1;H<arguments.length;H++){var X=arguments[H]!=null?arguments[H]:{};H%2?w(Object(X),!0).forEach(function(W){D(k,W,X[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(X)):w(Object(X)).forEach(function(W){Object.defineProperty(k,W,Object.getOwnPropertyDescriptor(X,W))})}return k}function b(k){return function(H){if(Array.isArray(H))return y(H)}(k)||function(H){if(typeof Symbol<"u"&&H[Symbol.iterator]!=null||H["@@iterator"]!=null)return Array.from(H)}(k)||function(H,X){if(H){if(typeof H=="string")return y(H,X);var W={}.toString.call(H).slice(8,-1);return W==="Object"&&H.constructor&&(W=H.constructor.name),W==="Map"||W==="Set"?Array.from(H):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?y(H,X):void 0}}(k)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function y(k,H){(H==null||H>k.length)&&(H=k.length);for(var X=0,W=Array(H);X<H;X++)W[X]=k[X];return W}function U(k,H){for(var X=0;X<H.length;X++){var W=H[X];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(k,q(W.key),W)}}function D(k,H,X){return(H=q(H))in k?Object.defineProperty(k,H,{value:X,enumerable:!0,configurable:!0,writable:!0}):k[H]=X,k}function q(k){var H=function(X){if(E(X)!="object"||!X)return X;var W=X[Symbol.toPrimitive];if(W!==void 0){var ve=W.call(X,"string");if(E(ve)!="object")return ve;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(X)}(k);return E(H)=="symbol"?H:H+""}const G=function(){function k(W,ve){var T=this;if(function(me,Ue){if(!(me instanceof Ue))throw new TypeError("Cannot call a class as a function")}(this,k),D(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),D(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),D(this,"setupWrapperElement",function(){T.state.elements.container&&(T.state.elements.wrapper.className=T.options.wrapperClassName,T.state.elements.cursor.className=T.options.cursorClassName,T.state.elements.cursor.innerHTML=T.options.cursor,T.state.elements.container.innerHTML="",T.state.elements.container.appendChild(T.state.elements.wrapper),T.state.elements.container.appendChild(T.state.elements.cursor))}),D(this,"start",function(){return T.state.eventLoopPaused=!1,T.runEventLoop(),T}),D(this,"pause",function(){return T.state.eventLoopPaused=!0,T}),D(this,"stop",function(){return T.state.eventLoop&&((0,o.cancel)(T.state.eventLoop),T.state.eventLoop=null),T}),D(this,"pauseFor",function(me){return T.addEventToQueue(g,{ms:me}),T}),D(this,"typeOutAllStrings",function(){return typeof T.options.strings=="string"?(T.typeString(T.options.strings).pauseFor(T.options.pauseFor),T):(T.options.strings.forEach(function(me){T.typeString(me).pauseFor(T.options.pauseFor).deleteAll(T.options.deleteSpeed)}),T)}),D(this,"typeString",function(me){var Ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(l(me))return T.typeOutHTMLString(me,Ue);if(me){var re=(T.options||{}).stringSplitter,V=typeof re=="function"?re(me):me.split("");T.typeCharacters(V,Ue)}return T}),D(this,"pasteString",function(me){var Ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l(me)?T.typeOutHTMLString(me,Ue,!0):(me&&T.addEventToQueue(S,{character:me,node:Ue}),T)}),D(this,"typeOutHTMLString",function(me){var Ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,re=arguments.length>2?arguments[2]:void 0,V=function(Re){var De=document.createElement("div");return De.innerHTML=Re,De.childNodes}(me);if(V.length>0)for(var ie=0;ie<V.length;ie++){var $=V[ie],ge=$.innerHTML;$&&$.nodeType!==3?($.innerHTML="",T.addEventToQueue(p,{node:$,parentNode:Ue}),re?T.pasteString(ge,$):T.typeString(ge,$)):$.textContent&&(re?T.pasteString($.textContent,Ue):T.typeString($.textContent,Ue))}return T}),D(this,"deleteAll",function(){var me=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return T.addEventToQueue(f,{speed:me}),T}),D(this,"changeDeleteSpeed",function(me){if(!me)throw new Error("Must provide new delete speed");return T.addEventToQueue(m,{speed:me}),T}),D(this,"changeDelay",function(me){if(!me)throw new Error("Must provide new delay");return T.addEventToQueue(M,{delay:me}),T}),D(this,"changeCursor",function(me){if(!me)throw new Error("Must provide new cursor");return T.addEventToQueue(v,{cursor:me}),T}),D(this,"deleteChars",function(me){if(!me)throw new Error("Must provide amount of characters to delete");for(var Ue=0;Ue<me;Ue++)T.addEventToQueue(h);return T}),D(this,"callFunction",function(me,Ue){if(!me||typeof me!="function")throw new Error("Callback must be a function");return T.addEventToQueue(_,{cb:me,thisArg:Ue}),T}),D(this,"typeCharacters",function(me){var Ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!me||!Array.isArray(me))throw new Error("Characters must be an array");return me.forEach(function(re){T.addEventToQueue(u,{character:re,node:Ue})}),T}),D(this,"removeCharacters",function(me){if(!me||!Array.isArray(me))throw new Error("Characters must be an array");return me.forEach(function(){T.addEventToQueue(h)}),T}),D(this,"addEventToQueue",function(me,Ue){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return T.addEventToStateProperty(me,Ue,re,"eventQueue")}),D(this,"addReverseCalledEvent",function(me,Ue){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return T.options.loop?T.addEventToStateProperty(me,Ue,re,"reverseCalledEvents"):T}),D(this,"addEventToStateProperty",function(me,Ue){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2],V=arguments.length>3?arguments[3]:void 0,ie={eventName:me,eventArgs:Ue||{}};return T.state[V]=re?[ie].concat(b(T.state[V])):[].concat(b(T.state[V]),[ie]),T}),D(this,"runEventLoop",function(){T.state.lastFrameTime||(T.state.lastFrameTime=Date.now());var me=Date.now(),Ue=me-T.state.lastFrameTime;if(!T.state.eventQueue.length){if(!T.options.loop)return;T.state.eventQueue=b(T.state.calledEvents),T.state.calledEvents=[],T.options=O({},T.state.initialOptions)}if(T.state.eventLoop=a()(T.runEventLoop),!T.state.eventLoopPaused){if(T.state.pauseUntil){if(me<T.state.pauseUntil)return;T.state.pauseUntil=null}var re,V=b(T.state.eventQueue),ie=V.shift();if(!(Ue<=(re=ie.eventName===d||ie.eventName===h?T.options.deleteSpeed==="natural"?c(40,80):T.options.deleteSpeed:T.options.delay==="natural"?c(120,160):T.options.delay))){var $=ie.eventName,ge=ie.eventArgs;switch(T.logInDevMode({currentEvent:ie,state:T.state,delay:re}),$){case S:case u:var Re=ge.character,De=ge.node,Oe=document.createTextNode(Re),I=Oe;T.options.onCreateTextNode&&typeof T.options.onCreateTextNode=="function"&&(I=T.options.onCreateTextNode(Re,Oe)),I&&(De?De.appendChild(I):T.state.elements.wrapper.appendChild(I)),T.state.visibleNodes=[].concat(b(T.state.visibleNodes),[{type:"TEXT_NODE",character:Re,node:I}]);break;case h:V.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case g:var L=ie.eventArgs.ms;T.state.pauseUntil=Date.now()+parseInt(L);break;case _:var z=ie.eventArgs,Z=z.cb,ne=z.thisArg;Z.call(ne,{elements:T.state.elements});break;case p:var F=ie.eventArgs,ce=F.node,he=F.parentNode;he?he.appendChild(ce):T.state.elements.wrapper.appendChild(ce),T.state.visibleNodes=[].concat(b(T.state.visibleNodes),[{type:P,node:ce,parentNode:he||T.state.elements.wrapper}]);break;case f:var C=T.state.visibleNodes,x=ge.speed,B=[];x&&B.push({eventName:m,eventArgs:{speed:x,temp:!0}});for(var ee=0,se=C.length;ee<se;ee++)B.push({eventName:d,eventArgs:{removingCharacterNode:!1}});x&&B.push({eventName:m,eventArgs:{speed:T.options.deleteSpeed,temp:!0}}),V.unshift.apply(V,B);break;case d:var J=ie.eventArgs.removingCharacterNode;if(T.state.visibleNodes.length){var Me=T.state.visibleNodes.pop(),ue=Me.type,be=Me.node,we=Me.character;T.options.onRemoveNode&&typeof T.options.onRemoveNode=="function"&&T.options.onRemoveNode({node:be,character:we}),be&&be.parentNode.removeChild(be),ue===P&&J&&V.unshift({eventName:d,eventArgs:{}})}break;case m:T.options.deleteSpeed=ie.eventArgs.speed;break;case M:T.options.delay=ie.eventArgs.delay;break;case v:T.options.cursor=ie.eventArgs.cursor,T.state.elements.cursor.innerHTML=ie.eventArgs.cursor}T.options.loop&&(ie.eventName===d||ie.eventArgs&&ie.eventArgs.temp||(T.state.calledEvents=[].concat(b(T.state.calledEvents),[ie]))),T.state.eventQueue=V,T.state.lastFrameTime=me}}}),W)if(typeof W=="string"){var Ee=document.querySelector(W);if(!Ee)throw new Error("Could not find container element");this.state.elements.container=Ee}else this.state.elements.container=W;ve&&(this.options=O(O({},this.options),ve)),this.state.initialOptions=O({},this.options),this.init()}var H,X;return H=k,(X=[{key:"init",value:function(){var W,ve;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(f,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(W=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(ve=document.createElement("style")).appendChild(document.createTextNode(W)),document.head.appendChild(ve),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(W){this.options.devMode&&console.log(W)}}])&&U(H.prototype,X),Object.defineProperty(H,"prototype",{writable:!1}),k}()})(),s.default})())})(py);var T2=py.exports;const w2=tm(T2),A2=n=>(Qr("data-v-7d94890c"),n=n(),es(),n),C2=A2(()=>Ne("h1",{id:"name",class:"has-text-centered"},"Sameer Chawla",-1)),R2={__name:"Name",setup(n){const e=ii(null);return $s(()=>{new w2(e.value,{loop:!0,delay:75,deleteSpeed:50}).typeString("Junior Computer Science Student @ UMD").pauseFor(2e3).deleteAll().typeString("Pro Speedcuber").pauseFor(2e3).deleteAll().typeString("Problem solver").pauseFor(2e3).deleteAll().typeString("Problem inventor").pauseFor(2e3).deleteAll().start()}),(t,i)=>(Ct(),It("div",null,[C2,Ne("h2",{class:"has-text-centered mt-6",id:"description",ref_key:"descriptionElement",ref:e},null,512)]))}},P2=Yn(R2,[["__scopeId","data-v-7d94890c"]]),L2=n=>(Qr("data-v-49188037"),n=n(),es(),n),D2={class:"projects-section"},I2={class:"container"},O2=L2(()=>Ne("h2",{class:"title is-2 has-text-centered has-text-white mb-6"},"Projects",-1)),U2={class:"projects-container"},N2={class:"project-content"},F2={class:"project-title"},B2={class:"project-description"},k2={class:"project-image-container"},z2=["src","alt"],H2={class:"project-actions"},V2=["href"],G2={__name:"Projects",setup(n){let e=[{title:"JSDTimer",description:"A React Native-based timer application.",image:"jsdtimer.png",link:"https://github.com/JSDTimer/JSDTimer-app",route:"jsdtimer"},{title:"NBA Schedule Predictor",description:"A Random-Forest Classifier that predicts future NBA Schedules",image:"nba-logo.jpg",link:"https://github.com/sameerCOfficial/warriors_schedule",route:"sertsocial"},{title:"SertGPT",description:"An AI-powered chatbot using GPT-3.",image:"sertgpt.png",link:"https://github.com/sameerCOfficial/hoya-hacks24",route:"sertgpt"}];return(t,i)=>(Ct(),It("section",D2,[Ne("div",I2,[O2,Ne("div",U2,[(Ct(!0),It(Fn,null,_a(Cs(e),(r,s)=>(Ct(),It("div",{key:s,class:"project-card"},[Ne("div",N2,[Ne("h3",F2,lr(r.title),1),Ne("p",B2,lr(r.description),1),Ne("div",k2,[Ne("img",{src:`./${r.image}`,alt:r.title,class:"project-image"},null,8,z2)]),Ne("div",H2,[Ne("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",class:"project-link"}," View Project ",8,V2)])])]))),128))])])]))}},W2=Yn(G2,[["__scopeId","data-v-49188037"]]),X2="/tetrascience.png",$2="/treasury.png",q2="/bitcamp.png";var my={exports:{}};(function(n){(function(e,t){n.exports?n.exports=t():e.Rellax=t()})(typeof window<"u"?window:$u,function(){var e=function(t,i){var r=Object.create(e.prototype),s=0,o=0,a=0,l=0,c=[],u=!0,h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(G){return setTimeout(G,1e3/60)},f=null,d=!1;try{var g=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("testPassive",null,g),window.removeEventListener("testPassive",null,g)}catch{}var _=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,p=window.transformProp||function(){var G=document.createElement("div");if(G.style.transform===null){var k=["Webkit","Moz","ms"];for(var H in k)if(G.style[k[H]+"Transform"]!==void 0)return k[H]+"Transform"}return"transform"}();r.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},i&&Object.keys(i).forEach(function(G){r.options[G]=i[G]});function m(){if(r.options.breakpoints.length===3&&Array.isArray(r.options.breakpoints)){var G=!0,k=!0,H;if(r.options.breakpoints.forEach(function(X){typeof X!="number"&&(k=!1),H!==null&&X<H&&(G=!1),H=X}),G&&k)return}r.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}i&&i.breakpoints&&m(),t||(t=".rellax");var M=typeof t=="string"?document.querySelectorAll(t):[t];if(M.length>0)r.elems=M;else{console.warn("Rellax: The elements you're trying to select don't exist.");return}if(r.options.wrapper&&!r.options.wrapper.nodeType){var v=document.querySelector(r.options.wrapper);if(v)r.options.wrapper=v;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}}var S,P=function(G){var k=r.options.breakpoints;return G<k[0]?"xs":G>=k[0]&&G<k[1]?"sm":G>=k[1]&&G<k[2]?"md":"lg"},E=function(){for(var G=0;G<r.elems.length;G++){var k=O(r.elems[G]);c.push(k)}},w=function(){for(var G=0;G<c.length;G++)r.elems[G].style.cssText=c[G].style;c=[],o=window.innerHeight,l=window.innerWidth,S=P(l),b(),E(),q(),u&&(window.addEventListener("resize",w),u=!1,D())},O=function(G){var k=G.getAttribute("data-rellax-percentage"),H=G.getAttribute("data-rellax-speed"),X=G.getAttribute("data-rellax-xs-speed"),W=G.getAttribute("data-rellax-mobile-speed"),ve=G.getAttribute("data-rellax-tablet-speed"),T=G.getAttribute("data-rellax-desktop-speed"),Ee=G.getAttribute("data-rellax-vertical-speed"),me=G.getAttribute("data-rellax-horizontal-speed"),Ue=G.getAttribute("data-rellax-vertical-scroll-axis"),re=G.getAttribute("data-rellax-horizontal-scroll-axis"),V=G.getAttribute("data-rellax-zindex")||0,ie=G.getAttribute("data-rellax-min"),$=G.getAttribute("data-rellax-max"),ge=G.getAttribute("data-rellax-min-x"),Re=G.getAttribute("data-rellax-max-x"),De=G.getAttribute("data-rellax-min-y"),Oe=G.getAttribute("data-rellax-max-y"),I,L=!0;!X&&!W&&!ve&&!T?L=!1:I={xs:X,sm:W,md:ve,lg:T};var z=r.options.wrapper?r.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(r.options.relativeToWrapper){var Z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;z=Z-r.options.wrapper.offsetTop}var ne=r.options.vertical&&(k||r.options.center)?z:0,F=r.options.horizontal&&(k||r.options.center)?r.options.wrapper?r.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,ce=ne+G.getBoundingClientRect().top,he=G.clientHeight||G.offsetHeight||G.scrollHeight,C=F+G.getBoundingClientRect().left,x=G.clientWidth||G.offsetWidth||G.scrollWidth,B=k||(ne-ce+o)/(he+o),ee=k||(F-C+l)/(x+l);r.options.center&&(ee=.5,B=.5);var se=L&&I[S]!==null?Number(I[S]):H||r.options.speed,J=Ee||r.options.verticalSpeed,Me=me||r.options.horizontalSpeed,ue=Ue||r.options.verticalScrollAxis,be=re||r.options.horizontalScrollAxis,we=y(ee,B,se,J,Me),Se=G.style.cssText,Le="",ze=/transform\s*:/i.exec(Se);if(ze){var Je=ze.index,Ie=Se.slice(Je),je=Ie.indexOf(";");je?Le=" "+Ie.slice(11,je).replace(/\s/g,""):Le=" "+Ie.slice(11).replace(/\s/g,"")}return{baseX:we.x,baseY:we.y,top:ce,left:C,height:he,width:x,speed:se,verticalSpeed:J,horizontalSpeed:Me,verticalScrollAxis:ue,horizontalScrollAxis:be,style:Se,transform:Le,zindex:V,min:ie,max:$,minX:ge,maxX:Re,minY:De,maxY:Oe}},b=function(){var G=s,k=a;if(s=r.options.wrapper?r.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=r.options.wrapper?r.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,r.options.relativeToWrapper){var H=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;s=H-r.options.wrapper.offsetTop}return!!(G!=s&&r.options.vertical||k!=a&&r.options.horizontal)},y=function(G,k,H,X,W){var ve={},T=(W||H)*(100*(1-G)),Ee=(X||H)*(100*(1-k));return ve.x=r.options.round?Math.round(T):Math.round(T*100)/100,ve.y=r.options.round?Math.round(Ee):Math.round(Ee*100)/100,ve},U=function(){window.removeEventListener("resize",U),window.removeEventListener("orientationchange",U),(r.options.wrapper?r.options.wrapper:window).removeEventListener("scroll",U),(r.options.wrapper?r.options.wrapper:document).removeEventListener("touchmove",U),f=h(D)},D=function(){b()&&u===!1?(q(),f=h(D)):(f=null,window.addEventListener("resize",U),window.addEventListener("orientationchange",U),(r.options.wrapper?r.options.wrapper:window).addEventListener("scroll",U,d?{passive:!0}:!1),(r.options.wrapper?r.options.wrapper:document).addEventListener("touchmove",U,d?{passive:!0}:!1))},q=function(){for(var G,k=0;k<r.elems.length;k++){var H=c[k].verticalScrollAxis.toLowerCase(),X=c[k].horizontalScrollAxis.toLowerCase(),W=H.indexOf("x")!=-1?s:0,ve=H.indexOf("y")!=-1?s:0,T=X.indexOf("x")!=-1?a:0,Ee=X.indexOf("y")!=-1?a:0,me=(ve+Ee-c[k].top+o)/(c[k].height+o),Ue=(W+T-c[k].left+l)/(c[k].width+l);G=y(Ue,me,c[k].speed,c[k].verticalSpeed,c[k].horizontalSpeed);var re=G.y-c[k].baseY,V=G.x-c[k].baseX;c[k].min!==null&&(r.options.vertical&&!r.options.horizontal&&(re=re<=c[k].min?c[k].min:re),r.options.horizontal&&!r.options.vertical&&(V=V<=c[k].min?c[k].min:V)),c[k].minY!=null&&(re=re<=c[k].minY?c[k].minY:re),c[k].minX!=null&&(V=V<=c[k].minX?c[k].minX:V),c[k].max!==null&&(r.options.vertical&&!r.options.horizontal&&(re=re>=c[k].max?c[k].max:re),r.options.horizontal&&!r.options.vertical&&(V=V>=c[k].max?c[k].max:V)),c[k].maxY!=null&&(re=re>=c[k].maxY?c[k].maxY:re),c[k].maxX!=null&&(V=V>=c[k].maxX?c[k].maxX:V);var ie=c[k].zindex,$="translate3d("+(r.options.horizontal?V:"0")+"px,"+(r.options.vertical?re:"0")+"px,"+ie+"px) "+c[k].transform;r.elems[k].style[p]=$}r.options.callback(G)};return r.destroy=function(){for(var G=0;G<r.elems.length;G++)r.elems[G].style.cssText=c[G].style;u||(window.removeEventListener("resize",w),u=!0),_(f),f=null},w(),r.refresh=w,r};return e})})(my);var Y2=my.exports;const j2=tm(Y2),K2={class:"experience-section"},Z2=af('<div class="container" data-v-39846db6><h2 class="title is-2 has-text-centered has-text-white mb-6" data-v-39846db6>Experience</h2><div class="experience-container" data-v-39846db6><div class="experience-card left rellax" data-rellax-speed="-2" data-v-39846db6><div class="project-card" data-v-39846db6><div class="project-content" data-v-39846db6><img src="'+X2+'" alt="U.S Treasury" class="project-image" data-v-39846db6><h3 class="project-title" data-v-39846db6>GenAI &amp; DE Intern</h3><p class="project-company" data-v-39846db6>TetraScience • Summer 2025</p><p class="project-description" data-v-39846db6></p><div class="project-tech" data-v-39846db6><span class="tech-tag" data-v-39846db6>Python</span><span class="tech-tag" data-v-39846db6>Pandas</span><span class="tech-tag" data-v-39846db6>CI/CD</span><span class="tech-tag" data-v-39846db6>Data Engineering</span><span class="tech-tag" data-v-39846db6>Perplexity</span></div></div></div></div><div class="experience-card right rellax" data-rellax-speed="-1" data-v-39846db6><div class="project-card" data-v-39846db6><div class="project-content" data-v-39846db6><img src="'+$2+'" alt="U.S Treasury" class="project-image" data-v-39846db6><h3 class="project-title" data-v-39846db6>Data Analyst Intern</h3><p class="project-company" data-v-39846db6>U.S Treasury • Spring 2025</p><p class="project-description" data-v-39846db6></p><div class="project-tech" data-v-39846db6><span class="tech-tag" data-v-39846db6>Data Visualization</span><span class="tech-tag" data-v-39846db6>SQL</span><span class="tech-tag" data-v-39846db6>Report Builder</span></div></div></div></div><div class="experience-card left rellax" data-rellax-speed="-3" data-v-39846db6><div class="project-card" data-v-39846db6><div class="project-content" data-v-39846db6><h3 class="project-title" data-v-39846db6>Software Engineer Intern</h3><p class="project-company" data-v-39846db6>Dux • Summer 2024</p><p class="project-description" data-v-39846db6></p><div class="project-tech" data-v-39846db6><span class="tech-tag" data-v-39846db6>JavaScript</span><span class="tech-tag" data-v-39846db6>TypeScript</span><span class="tech-tag" data-v-39846db6>React</span><span class="tech-tag" data-v-39846db6>Node</span><span class="tech-tag" data-v-39846db6>Express</span></div></div></div></div><div class="experience-card right rellax" data-rellax-speed="-2" data-v-39846db6><div class="project-card" data-v-39846db6><div class="project-content" data-v-39846db6><img src="'+q2+'" alt="Bitcamp" class="project-image" style="width:20%;overflow:hidden;" data-v-39846db6><h3 class="project-title" data-v-39846db6>Marketing Organizer</h3><p class="project-company" data-v-39846db6>Bitcamp • Fall 2023 - Present</p><p class="project-description" data-v-39846db6></p><div class="project-tech" data-v-39846db6><span class="tech-tag" data-v-39846db6>Video Editing &amp; Production</span><span class="tech-tag" data-v-39846db6>Premiere Pro</span><span class="tech-tag" data-v-39846db6>Photography</span></div></div></div></div></div></div>',1),J2=[Z2],Q2={__name:"Experience",setup(n){return $s(()=>{setTimeout(()=>{const e=new j2(".rellax");console.log("Rellax initialized:",e)},100)}),(e,t)=>(Ct(),It("section",K2,J2))}},eL=Yn(Q2,[["__scopeId","data-v-39846db6"]]),xf=n=>(Qr("data-v-394a78b9"),n=n(),es(),n),tL={class:"skills-game"},nL=xf(()=>Ne("h2",{class:"header"},"✨ Fill in my skills! ✨",-1)),iL={class:"categories"},rL={class:"placed-skills"},sL=["onClick"],oL=xf(()=>Ne("span",{class:"icon"},"–",-1)),aL=xf(()=>Ne("h3",{class:"available-header"},"Available Skills",-1)),lL={class:"skill-bubbles"},cL=["onClick"],uL=xf(()=>Ne("span",{class:"icon"},"+",-1)),fL={__name:"Skills",setup(n){const e=ii([{id:"languages",title:"Languages",skills:[]},{id:"frameworks",title:"Frameworks",skills:[]},{id:"libraries",title:"Libraries",skills:[]},{id:"tools",title:"Tools",skills:[]}]),t=ii([{id:1,title:"Python",category:"languages"},{id:2,title:"Java",category:"languages"},{id:3,title:"C",category:"languages"},{id:4,title:"SQL (MySQL, SQLite)",category:"languages"},{id:5,title:"JavaScript",category:"languages"},{id:6,title:"R",category:"languages"},{id:7,title:"OCaml",category:"languages"},{id:8,title:"MATLAB",category:"languages"},{id:9,title:"React",category:"frameworks"},{id:10,title:"Node.js",category:"frameworks"},{id:11,title:"Express",category:"frameworks"},{id:12,title:"Flask",category:"frameworks"},{id:13,title:"JUnit",category:"frameworks"},{id:14,title:"Scikit-Learn",category:"libraries"},{id:15,title:"Pandas",category:"libraries"},{id:16,title:"NumPy",category:"libraries"},{id:17,title:"Matplotlib",category:"libraries"},{id:18,title:"Seaborn",category:"libraries"},{id:19,title:"Pytest",category:"libraries"},{id:20,title:"Poetry",category:"libraries"},{id:21,title:"AWS (SageMaker)",category:"tools"},{id:22,title:"GCP",category:"tools"},{id:23,title:"Docker",category:"tools"},{id:24,title:"Git",category:"tools"},{id:25,title:"Jira",category:"tools"},{id:26,title:"Confluence",category:"tools"},{id:27,title:"Zephyr",category:"tools"}]);function i(s){t.value=t.value.filter(o=>o.id!==s.id),e.value.find(o=>o.id===s.category).skills.push(s)}function r(s,o){const a=e.value.find(l=>l.id===o);a.skills=a.skills.filter(l=>l.id!==s.id),t.value.push(s)}return(s,o)=>(Ct(),It("section",tL,[nL,Ne("div",iL,[(Ct(!0),It(Fn,null,_a(e.value,a=>(Ct(),It("div",{key:a.id,class:"category-card"},[Ne("h3",null,lr(a.title),1),Ne("div",rL,[(Ct(!0),It(Fn,null,_a(a.skills,l=>(Ct(),It("span",{key:l.id,class:"tech-tag in-category",onClick:c=>r(l,a.id)},[oL,Tu(" "+lr(l.title),1)],8,sL))),128))])]))),128))]),aL,Ne("div",lL,[(Ct(!0),It(Fn,null,_a(t.value,a=>(Ct(),It("span",{key:a.id,class:"tech-tag",onClick:l=>i(a)},[uL,Tu(" "+lr(a.title),1)],8,cL))),128))])]))}},hL=Yn(fL,[["__scopeId","data-v-394a78b9"]]),_y=n=>(Qr("data-v-53f3b87f"),n=n(),es(),n),dL={key:0,class:"loading-screen"},pL={class:"loading-content"},mL={key:1,class:"main-content"},_L={class:"content-wrapper",id:"home"},gL=_y(()=>Ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"50",height:"50"},[Ne("path",{d:"M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z"})],-1)),vL=[gL],xL=_y(()=>Ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"50",height:"50"},[Ne("path",{d:"M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z"})],-1)),yL=[xL],SL={__name:"Home",setup(n){nr.registerPlugin(bt);const e=ii(!0),t=ii(null),i=ii(null),r=ii(null),s=ii(null),o=ii(null),a=ii(null),l=localStorage.getItem("hasVisited");return $s(()=>{l?(e.value=!1,Su(()=>{t.value&&i.value&&r.value&&o.value&&a.value&&(nr.timeline({scrollTrigger:{trigger:r.value,start:"top 80%",end:"top 20%",scrub:!0}}).fromTo(".projects",{y:30,opacity:0},{y:0,opacity:1}).to(t.value,{opacity:0}),nr.fromTo(i.value,{y:0,opacity:1,rotate:0},{y:350,opacity:0,rotate:360,duration:2,ease:"power1.inOut",scrollTrigger:{trigger:r.value,start:"top 75%",end:"top 30%",scrub:!0}}),nr.timeline({scrollTrigger:{trigger:a.value,start:"top 80%",end:"top 10%",scrub:!0}}).fromTo(i.value,{y:0,opacity:1},{y:350,opacity:0}).fromTo(".skills",{y:30,opacity:0},{y:0,opacity:1}),nr.to([o.value],{rotation:"+=360",duration:2,repeat:-1,ease:"linear"}))})):setTimeout(()=>{e.value=!1,localStorage.setItem("hasVisited","true"),Su(()=>{t.value&&i.value&&r.value&&o.value&&a.value&&(nr.timeline({scrollTrigger:{trigger:r.value,start:"top 80%",end:"top 20%",scrub:!0}}).fromTo(".projects",{y:30,opacity:0},{y:0,opacity:1}).to(t.value,{opacity:0}),nr.fromTo(i.value,{y:0,opacity:1,rotate:0},{y:350,opacity:0,rotate:360,duration:2,ease:"power1.inOut",scrollTrigger:{trigger:r.value,start:"top 75%",end:"top 30%",scrub:!0}}),nr.timeline({scrollTrigger:{trigger:a.value,start:"top 80%",end:"top 10%",scrub:!0}}).fromTo(i.value,{y:0,opacity:1},{y:350,opacity:0}).fromTo(".skills",{y:30,opacity:0},{y:0,opacity:1}),nr.to([o.value],{rotation:"+=360",duration:2,repeat:-1,ease:"linear"}))})},3e3)}),(c,u)=>(Ct(),It("div",null,[e.value?(Ct(),It("div",dL,[Ne("div",pL,[Nt(E2)])])):Lm("",!0),e.value?Lm("",!0):(Ct(),It("div",mL,[Ne("div",_L,[Nt(_2),Ne("div",{class:"name",id:"name",ref_key:"nameRef",ref:t},[Nt(P2)],512),Ne("div",{class:"star-cursor",ref_key:"starRef",ref:i},vL,512),Ne("div",{class:"experience mt-6",id:"experience",ref_key:"experienceRef",ref:s},[Nt(eL)],512),Ne("div",{class:"projects",id:"projects",ref_key:"projectsRef",ref:r},[Nt(W2)],512),Ne("div",{class:"star-two",ref_key:"starTwoRef",ref:o},yL,512),Ne("div",{class:"skills",id:"skills",ref_key:"skillsRef",ref:a},[Nt(hL)],512),Nt(jv)])]))]))}},ML=Yn(SL,[["__scopeId","data-v-53f3b87f"]]),bL="/jsdtimer.png",EL=n=>(Qr("data-v-83fada0b"),n=n(),es(),n),TL=EL(()=>Ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"icon"},[Ne("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})],-1)),wL=[TL],AL={__name:"BackButton",setup(n){const e=TR(),t=()=>{e.go(-1)};return(i,r)=>(Ct(),It("button",{onClick:t,class:"back-button"},wL))}},nm=Yn(AL,[["__scopeId","data-v-83fada0b"]]),CL={class:"back-button"},RL=af('<div class="main-content" data-v-1b4e0aa9><div class="content-wrapper" data-v-1b4e0aa9><div class="project-container" data-v-1b4e0aa9><div class="project-item" data-v-1b4e0aa9><div class="project-title" data-v-1b4e0aa9><h2 class="title is-size-3" data-v-1b4e0aa9>JSDTimer</h2><img src="'+bL+'" alt="Project Image" class="project-image" data-v-1b4e0aa9></div></div><div class="description" data-v-1b4e0aa9><div class="section" data-v-1b4e0aa9><h3 data-v-1b4e0aa9>Technologies</h3><p data-v-1b4e0aa9>React Native, JavaScript</p></div><div class="section" data-v-1b4e0aa9><h3 data-v-1b4e0aa9>Skills</h3><p data-v-1b4e0aa9>Mobile Development, Front-End Development, Hooks, State Management</p></div><div class="section" data-v-1b4e0aa9><h3 data-v-1b4e0aa9>Description</h3><p data-v-1b4e0aa9> JSDTimer is a React Native-based Rubik&#39;s Cube timer application where everything is stored client-side. The app offers a simple and efficient way to track your solve times and improve your skills over time. </p></div></div></div></div></div>',1),PL={__name:"JSDTimerPage",setup(n){return(e,t)=>(Ct(),It("div",null,[Ne("div",CL,[Nt(nm)]),RL]))}},LL=Yn(PL,[["__scopeId","data-v-1b4e0aa9"]]),DL="/sertsocial.png",IL={class:"back-button"},OL=af('<div class="main-content" data-v-b7d9a96a><div class="content-wrapper" data-v-b7d9a96a><div class="project-container" data-v-b7d9a96a><div class="project-item" data-v-b7d9a96a><div class="project-title" data-v-b7d9a96a><h2 class="title is-size-3" data-v-b7d9a96a>NBA Schedule Predictor</h2><img src="'+DL+'" alt="Project Image" class="project-image" data-v-b7d9a96a></div></div><div class="description" data-v-b7d9a96a><div class="section" data-v-b7d9a96a><h3 data-v-b7d9a96a>Technologies</h3><p data-v-b7d9a96a>MongoDB, NoSQL, Express, Node.js, React.js</p></div><div class="section" data-v-b7d9a96a><h3 data-v-b7d9a96a>Skills</h3><p data-v-b7d9a96a>Web Development, Front-End Development, Back-End Development, State Management, Full-Stack</p></div><div class="section" data-v-b7d9a96a><h3 data-v-b7d9a96a>Description</h3><p data-v-b7d9a96a> SERT Social is a social-media networking site that incorporates the connection building of LinkedIn with the casualness of Twitter/X. The networking is also improved on using a graph that shows connections. </p></div></div></div></div></div>',1),UL={__name:"SERTSocialPage",setup(n){return(e,t)=>(Ct(),It("div",null,[Ne("div",IL,[Nt(nm)]),OL]))}},NL=Yn(UL,[["__scopeId","data-v-b7d9a96a"]]),FL="/sertgpt.png",BL={class:"back-button"},kL=af('<div class="main-content" data-v-649e34ee><div class="content-wrapper" data-v-649e34ee><div class="project-container" data-v-649e34ee><div class="project-item" data-v-649e34ee><div class="project-title" data-v-649e34ee><h2 class="title is-size-3" data-v-649e34ee>SertGPT</h2><img src="'+FL+'" alt="Project Image" class="project-image" data-v-649e34ee></div></div><div class="description" data-v-649e34ee><div class="section" data-v-649e34ee><h3 data-v-649e34ee>Technologies</h3><p data-v-649e34ee>React, Azure</p></div><div class="section" data-v-649e34ee><h3 data-v-649e34ee>Skills</h3><p data-v-649e34ee>AI/ML Development, Real-Time Data Processing, API Integration, Front-End Development</p></div><div class="section" data-v-649e34ee><h3 data-v-649e34ee>Description</h3><h2 class="work-in-progress" data-v-649e34ee>Work in Progress</h2><p data-v-649e34ee> A ChatBot that provides information about a university. It can answer questions about the university, courses, and other general information. </p></div></div></div></div></div>',1),zL={__name:"SertGPTPage",setup(n){return(e,t)=>(Ct(),It("div",null,[Ne("div",BL,[Nt(nm)]),kL]))}},HL=Yn(zL,[["__scopeId","data-v-649e34ee"]]),VL=n=>(Qr("data-v-39988365"),n=n(),es(),n),GL={class:"blog-home"},WL={class:"return-home"},XL=VL(()=>Ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"30",height:"30"},[Ne("path",{d:"M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z"})],-1)),$L={class:"blog-content"},qL={class:"blog-posts"},YL={class:"post-container"},jL=["src"],KL={class:"post-details"},ZL={class:"header"},JL={__name:"Blog",setup(n){const e=ii([]);return $s(()=>{e.value=[{id:1,slug:"purpose",title:"Purpose",date:"October 18, 2024",image:"https://i.pinimg.com/474x/44/a4/10/44a41095cccb97cf9296968c6667957e.jpg"}]}),(t,i)=>(Ct(),It("div",GL,[Ne("div",WL,[Nt(Cs(wd),{to:"/"},{default:wa(()=>[XL]),_:1})]),Ne("div",$L,[Ne("div",qL,[(Ct(!0),It(Fn,null,_a(e.value,r=>(Ct(),It("div",{key:r.id,class:"blog-post-card"},[Nt(Cs(wd),{to:`/blog/${r.slug}`,class:"post-link"},{default:wa(()=>[Ne("div",YL,[Ne("img",{src:r.image,alt:"Description of image",class:"post-image"},null,8,jL),Ne("div",KL,[Ne("h1",ZL,lr(r.title),1),Ne("p",null,lr(r.date),1)])])]),_:2},1032,["to"])]))),128))])]),Nt(jv)]))}},QL=Yn(JL,[["__scopeId","data-v-39988365"]]),eD=[{id:1,title:"Purpose",slug:"purpose",body:"<em>Before delving into this topic, I have to recognize my privilege to be able to speak on a subject like this, I am fortunate enough to be able to work towards a career and life that I desire, many around the world are not. I think that gives me, and others as fortunate as me a responsibility to work towards allowing people to be able to live out their best lives. Hopefully, we can achieve that in the future. <br><br></em><p>I’ve always wondered why we choose something as our sole purpose. What goes on inside our brains that tells us this thing we choose to adore is one we will spend the rest of our lives with?  While I’m sure there's a psychological rationale behind this type of idolization, one that I will be looking into after posting this, I want to focus more on the social aspect of this</p><p><br>Growing up, I’ve always felt like I needed to be attached to something to grant me happiness, whether it’s school, a person, a hobby, a sport, or even Instagram reels, I needed to be a slave to something to feel like I was moving somewhere with my life. While that sounds bleak, almost everyone on earth can resonate with this in some sense. We’re all looking for that thing that makes us get up in the morning, some people find it at a young age, some die never having found it at all. Inherently, it’s not the worst thing to not fulfill and live out your greatest desires, if everyone were able to then most job roles would not be fulfilled, many of which are essential for our daily lives. I’m sure there are many people who don’t want to be engineers right now. <br><br></p><p>However, I resent the idea that we must spend our lives trying to find one sole purpose that gives us meaning. We are so diverse and useful, that to diminish the complexities of our thoughts and actions to a one or two-word title that defines the level of respect we receive is blasphemous to our nature. But, that is unavoidable. Throughout our lives we’re always being confined by some limiter. You’re either a math kid or an english kid. You like sports or you’re a nerd. Over time, we tend to outgrow these confines, I mean when was the last time you heard someone call an adult man a nerd. But still something lingers, the desire to fit in. In the pursuit of trying to be liked by those around us, we throw away a lot of the nuances that make us individual, and I feel like one of the ways we keep our individuality is through finding our life’s purpose. It is somewhat beautiful, even through the immense pressure of the corporate world we still seek to keep our individualism.<br><br></p><em>“For some it's drink, some it's women, some even religion, family, the king, dreams, children, power, all of us had to spend our lives drunk on something, else we'd have no cause to keep pushing on” - Kenny Ackerman</em>",publishDate:"October 18th 2024",image:"https://i.pinimg.com/474x/44/a4/10/44a41095cccb97cf9296968c6667957e.jpg"}],tD={props:{slug:{type:String,required:!0}},data(){return{post:null,loading:!0}},created(){this.loadPost()},methods:{loadPost(){const n=eD.find(e=>e.slug===this.slug);n?this.post=n:(console.log(n),console.log(post.slug)),this.loading=!1}}},nD={class:"view"},iD={class:"back"},rD={class:"blog-post"},sD={key:0},oD={key:1},aD=["src"],lD={class:"header"},cD={class:"date"},uD=["innerHTML"];function fD(n,e,t,i,r,s){const o=Ih("RouterLink");return Ct(),It("div",nD,[Ne("div",iD,[Nt(o,{to:"/blog"},{default:wa(()=>[Tu("Back")]),_:1})]),Ne("div",rD,[r.loading?(Ct(),It("div",sD,"Loading...")):(Ct(),It("div",oD,[Ne("img",{src:r.post.image,alt:"blogphoto",class:"post-image"},null,8,aD),Ne("h2",lD,lr(r.post.title),1),Ne("h2",cD,lr(r.post.publishDate),1),Ne("div",{class:"description",innerHTML:r.post.body},null,8,uD)]))])])}const hD=Yn(tD,[["render",fD],["__scopeId","data-v-b8c5e678"]]),dD=bR({history:zC(),routes:[{path:"/",component:ML},{path:"/jsdtimer",component:LL},{path:"/sertsocial",component:NL},{path:"/sertgpt",component:HL},{path:"/blog",component:QL},{path:"/blog/:slug",component:hD,props:!0}]}),gy=qM(yC);gy.use(dD);gy.mount("#app");function pD(){const n=document.createElement("div");return n.classList.add("star"),n.style.left=`${Math.random()*100}%`,n.style.top=`${Math.random()*100}%`,n.style.width=`${Math.random()*2}px`,n.style.height=n.style.width,n}function mD(n){const e=document.querySelector(".starry-night");for(let t=0;t<n;t++)setTimeout(()=>{e.appendChild(pD())},Math.random()*5e3)}mD(100);
