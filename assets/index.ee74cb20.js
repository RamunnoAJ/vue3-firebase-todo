var cf=Object.defineProperty,uf=Object.defineProperties;var bf=Object.getOwnPropertyDescriptors;var vs=Object.getOwnPropertySymbols;var ff=Object.prototype.hasOwnProperty,hf=Object.prototype.propertyIsEnumerable;var ms=(t,e,a)=>e in t?cf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,ps=(t,e)=>{for(var a in e||(e={}))ff.call(e,a)&&ms(t,a,e[a]);if(vs)for(var a of vs(e))hf.call(e,a)&&ms(t,a,e[a]);return t},gs=(t,e)=>uf(t,bf(e));const vf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};vf();function $d(t,e){const a=Object.create(null),i=t.split(",");for(let n=0;n<i.length;n++)a[i[n]]=!0;return e?n=>!!a[n.toLowerCase()]:n=>!!a[n]}const mf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pf=$d(mf);function Xl(t){return!!t||t===""}function qd(t){if(j(t)){const e={};for(let a=0;a<t.length;a++){const i=t[a],n=we(i)?yf(i):qd(i);if(n)for(const r in n)e[r]=n[r]}return e}else{if(we(t))return t;if(ye(t))return t}}const gf=/;(?![^(]*\))/g,wf=/:(.+)/;function yf(t){const e={};return t.split(gf).forEach(a=>{if(a){const i=a.split(wf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ea(t){let e="";if(we(t))e=t;else if(j(t))for(let a=0;a<t.length;a++){const i=Ea(t[a]);i&&(e+=i+" ")}else if(ye(t))for(const a in t)t[a]&&(e+=a+" ");return e.trim()}const xf=t=>we(t)?t:t==null?"":j(t)||ye(t)&&(t.toString===ec||!U(t.toString))?JSON.stringify(t,Yl,2):String(t),Yl=(t,e)=>e&&e.__v_isRef?Yl(t,e.value):_a(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[i,n])=>(a[`${i} =>`]=n,a),{})}:Jl(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!j(e)&&!tc(e)?String(e):e,ee={},Ta=[],rt=()=>{},kf=()=>!1,Ef=/^on[^a-z]/,jn=t=>Ef.test(t),Gd=t=>t.startsWith("onUpdate:"),Me=Object.assign,Hd=(t,e)=>{const a=t.indexOf(e);a>-1&&t.splice(a,1)},Tf=Object.prototype.hasOwnProperty,H=(t,e)=>Tf.call(t,e),j=Array.isArray,_a=t=>Bn(t)==="[object Map]",Jl=t=>Bn(t)==="[object Set]",U=t=>typeof t=="function",we=t=>typeof t=="string",Kd=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Zl=t=>ye(t)&&U(t.then)&&U(t.catch),ec=Object.prototype.toString,Bn=t=>ec.call(t),_f=t=>Bn(t).slice(8,-1),tc=t=>Bn(t)==="[object Object]",Wd=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ln=$d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Un=t=>{const e=Object.create(null);return a=>e[a]||(e[a]=t(a))},If=/-(\w)/g,Na=Un(t=>t.replace(If,(e,a)=>a?a.toUpperCase():"")),Cf=/\B([A-Z])/g,Ua=Un(t=>t.replace(Cf,"-$1").toLowerCase()),ac=Un(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sr=Un(t=>t?`on${ac(t)}`:""),fi=(t,e)=>!Object.is(t,e),cn=(t,e)=>{for(let a=0;a<t.length;a++)t[a](e)},pn=(t,e,a)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:a})},Jr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ws;const Sf=()=>ws||(ws=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ct;class Af{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ct&&(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}run(e){if(this.active){const a=ct;try{return ct=this,e()}finally{ct=a}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this.active){let a,i;for(a=0,i=this.effects.length;a<i;a++)this.effects[a].stop();for(a=0,i=this.cleanups.length;a<i;a++)this.cleanups[a]();if(this.scopes)for(a=0,i=this.scopes.length;a<i;a++)this.scopes[a].stop(!0);if(this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Df(t,e=ct){e&&e.active&&e.effects.push(t)}const Qd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ic=t=>(t.w&Mt)>0,nc=t=>(t.n&Mt)>0,Nf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mt},Rf=t=>{const{deps:e}=t;if(e.length){let a=0;for(let i=0;i<e.length;i++){const n=e[i];ic(n)&&!nc(n)?n.delete(t):e[a++]=n,n.w&=~Mt,n.n&=~Mt}e.length=a}},Zr=new WeakMap;let ei=0,Mt=1;const ed=30;let at;const Zt=Symbol(""),td=Symbol("");class Xd{constructor(e,a=null,i){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Df(this,i)}run(){if(!this.active)return this.fn();let e=at,a=Dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=at,at=this,Dt=!0,Mt=1<<++ei,ei<=ed?Nf(this):ys(this),this.fn()}finally{ei<=ed&&Rf(this),Mt=1<<--ei,at=this.parent,Dt=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){at===this?this.deferStop=!0:this.active&&(ys(this),this.onStop&&this.onStop(),this.active=!1)}}function ys(t){const{deps:e}=t;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(t);e.length=0}}let Dt=!0;const rc=[];function $a(){rc.push(Dt),Dt=!1}function qa(){const t=rc.pop();Dt=t===void 0?!0:t}function We(t,e,a){if(Dt&&at){let i=Zr.get(t);i||Zr.set(t,i=new Map);let n=i.get(a);n||i.set(a,n=Qd()),dc(n)}}function dc(t,e){let a=!1;ei<=ed?nc(t)||(t.n|=Mt,a=!ic(t)):a=!t.has(at),a&&(t.add(at),at.deps.push(t))}function yt(t,e,a,i,n,r){const d=Zr.get(t);if(!d)return;let o=[];if(e==="clear")o=[...d.values()];else if(a==="length"&&j(t))d.forEach((s,l)=>{(l==="length"||l>=i)&&o.push(s)});else switch(a!==void 0&&o.push(d.get(a)),e){case"add":j(t)?Wd(a)&&o.push(d.get("length")):(o.push(d.get(Zt)),_a(t)&&o.push(d.get(td)));break;case"delete":j(t)||(o.push(d.get(Zt)),_a(t)&&o.push(d.get(td)));break;case"set":_a(t)&&o.push(d.get(Zt));break}if(o.length===1)o[0]&&ad(o[0]);else{const s=[];for(const l of o)l&&s.push(...l);ad(Qd(s))}}function ad(t,e){const a=j(t)?t:[...t];for(const i of a)i.computed&&xs(i);for(const i of a)i.computed||xs(i)}function xs(t,e){(t!==at||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Of=$d("__proto__,__v_isRef,__isVue"),oc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kd)),Mf=Yd(),Lf=Yd(!1,!0),zf=Yd(!0),ks=Ff();function Ff(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...a){const i=Q(this);for(let r=0,d=this.length;r<d;r++)We(i,"get",r+"");const n=i[e](...a);return n===-1||n===!1?i[e](...a.map(Q)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...a){$a();const i=Q(this)[e].apply(this,a);return qa(),i}}),t}function Yd(t=!1,e=!1){return function(i,n,r){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&r===(t?e?Zf:bc:e?uc:cc).get(i))return i;const d=j(i);if(!t&&d&&H(ks,n))return Reflect.get(ks,n,r);const o=Reflect.get(i,n,r);return(Kd(n)?oc.has(n):Of(n))||(t||We(i,"get",n),e)?o:Re(o)?d&&Wd(n)?o:o.value:ye(o)?t?fc(o):eo(o):o}}const Pf=sc(),Vf=sc(!0);function sc(t=!1){return function(a,i,n,r){let d=a[i];if(hi(d)&&Re(d)&&!Re(n))return!1;if(!t&&!hi(n)&&(id(n)||(n=Q(n),d=Q(d)),!j(a)&&Re(d)&&!Re(n)))return d.value=n,!0;const o=j(a)&&Wd(i)?Number(i)<a.length:H(a,i),s=Reflect.set(a,i,n,r);return a===Q(r)&&(o?fi(n,d)&&yt(a,"set",i,n):yt(a,"add",i,n)),s}}function jf(t,e){const a=H(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&a&&yt(t,"delete",e,void 0),i}function Bf(t,e){const a=Reflect.has(t,e);return(!Kd(e)||!oc.has(e))&&We(t,"has",e),a}function Uf(t){return We(t,"iterate",j(t)?"length":Zt),Reflect.ownKeys(t)}const lc={get:Mf,set:Pf,deleteProperty:jf,has:Bf,ownKeys:Uf},$f={get:zf,set(t,e){return!0},deleteProperty(t,e){return!0}},qf=Me({},lc,{get:Lf,set:Vf}),Jd=t=>t,$n=t=>Reflect.getPrototypeOf(t);function Yi(t,e,a=!1,i=!1){t=t.__v_raw;const n=Q(t),r=Q(e);a||(e!==r&&We(n,"get",e),We(n,"get",r));const{has:d}=$n(n),o=i?Jd:a?ao:vi;if(d.call(n,e))return o(t.get(e));if(d.call(n,r))return o(t.get(r));t!==n&&t.get(e)}function Ji(t,e=!1){const a=this.__v_raw,i=Q(a),n=Q(t);return e||(t!==n&&We(i,"has",t),We(i,"has",n)),t===n?a.has(t):a.has(t)||a.has(n)}function Zi(t,e=!1){return t=t.__v_raw,!e&&We(Q(t),"iterate",Zt),Reflect.get(t,"size",t)}function Es(t){t=Q(t);const e=Q(this);return $n(e).has.call(e,t)||(e.add(t),yt(e,"add",t,t)),this}function Ts(t,e){e=Q(e);const a=Q(this),{has:i,get:n}=$n(a);let r=i.call(a,t);r||(t=Q(t),r=i.call(a,t));const d=n.call(a,t);return a.set(t,e),r?fi(e,d)&&yt(a,"set",t,e):yt(a,"add",t,e),this}function _s(t){const e=Q(this),{has:a,get:i}=$n(e);let n=a.call(e,t);n||(t=Q(t),n=a.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return n&&yt(e,"delete",t,void 0),r}function Is(){const t=Q(this),e=t.size!==0,a=t.clear();return e&&yt(t,"clear",void 0,void 0),a}function en(t,e){return function(i,n){const r=this,d=r.__v_raw,o=Q(d),s=e?Jd:t?ao:vi;return!t&&We(o,"iterate",Zt),d.forEach((l,c)=>i.call(n,s(l),s(c),r))}}function tn(t,e,a){return function(...i){const n=this.__v_raw,r=Q(n),d=_a(r),o=t==="entries"||t===Symbol.iterator&&d,s=t==="keys"&&d,l=n[t](...i),c=a?Jd:e?ao:vi;return!e&&We(r,"iterate",s?td:Zt),{next(){const{value:b,done:h}=l.next();return h?{value:b,done:h}:{value:o?[c(b[0]),c(b[1])]:c(b),done:h}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function Gf(){const t={get(r){return Yi(this,r)},get size(){return Zi(this)},has:Ji,add:Es,set:Ts,delete:_s,clear:Is,forEach:en(!1,!1)},e={get(r){return Yi(this,r,!1,!0)},get size(){return Zi(this)},has:Ji,add:Es,set:Ts,delete:_s,clear:Is,forEach:en(!1,!0)},a={get(r){return Yi(this,r,!0)},get size(){return Zi(this,!0)},has(r){return Ji.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:en(!0,!1)},i={get(r){return Yi(this,r,!0,!0)},get size(){return Zi(this,!0)},has(r){return Ji.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=tn(r,!1,!1),a[r]=tn(r,!0,!1),e[r]=tn(r,!1,!0),i[r]=tn(r,!0,!0)}),[t,a,e,i]}const[Hf,Kf,Wf,Qf]=Gf();function Zd(t,e){const a=e?t?Qf:Wf:t?Kf:Hf;return(i,n,r)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?i:Reflect.get(H(a,n)&&n in i?a:i,n,r)}const Xf={get:Zd(!1,!1)},Yf={get:Zd(!1,!0)},Jf={get:Zd(!0,!1)},cc=new WeakMap,uc=new WeakMap,bc=new WeakMap,Zf=new WeakMap;function eh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function th(t){return t.__v_skip||!Object.isExtensible(t)?0:eh(_f(t))}function eo(t){return hi(t)?t:to(t,!1,lc,Xf,cc)}function ah(t){return to(t,!1,qf,Yf,uc)}function fc(t){return to(t,!0,$f,Jf,bc)}function to(t,e,a,i,n){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=n.get(t);if(r)return r;const d=th(t);if(d===0)return t;const o=new Proxy(t,d===2?i:a);return n.set(t,o),o}function Ia(t){return hi(t)?Ia(t.__v_raw):!!(t&&t.__v_isReactive)}function hi(t){return!!(t&&t.__v_isReadonly)}function id(t){return!!(t&&t.__v_isShallow)}function hc(t){return Ia(t)||hi(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function vc(t){return pn(t,"__v_skip",!0),t}const vi=t=>ye(t)?eo(t):t,ao=t=>ye(t)?fc(t):t;function mc(t){Dt&&at&&(t=Q(t),dc(t.dep||(t.dep=Qd())))}function pc(t,e){t=Q(t),t.dep&&ad(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Cs(t){return ih(t,!1)}function ih(t,e){return Re(t)?t:new nh(t,e)}class nh{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:Q(e),this._value=a?e:vi(e)}get value(){return mc(this),this._value}set value(e){e=this.__v_isShallow?e:Q(e),fi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:vi(e),pc(this))}}function rh(t){return Re(t)?t.value:t}const dh={get:(t,e,a)=>rh(Reflect.get(t,e,a)),set:(t,e,a,i)=>{const n=t[e];return Re(n)&&!Re(a)?(n.value=a,!0):Reflect.set(t,e,a,i)}};function gc(t){return Ia(t)?t:new Proxy(t,dh)}class oh{constructor(e,a,i,n){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Xd(e,()=>{this._dirty||(this._dirty=!0,pc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const e=Q(this);return mc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sh(t,e,a=!1){let i,n;const r=U(t);return r?(i=t,n=rt):(i=t.get,n=t.set),new oh(i,n,r||!n,a)}function Nt(t,e,a,i){let n;try{n=i?t(...i):t()}catch(r){qn(r,e,a)}return n}function Ye(t,e,a,i){if(U(t)){const r=Nt(t,e,a,i);return r&&Zl(r)&&r.catch(d=>{qn(d,e,a)}),r}const n=[];for(let r=0;r<t.length;r++)n.push(Ye(t[r],e,a,i));return n}function qn(t,e,a,i=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const d=e.proxy,o=a;for(;r;){const l=r.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](t,d,o)===!1)return}r=r.parent}const s=e.appContext.config.errorHandler;if(s){Nt(s,null,10,[t,d,o]);return}}lh(t,a,n,i)}function lh(t,e,a,i=!0){console.error(t)}let gn=!1,nd=!1;const He=[];let mt=0;const ri=[];let ti=null,ga=0;const di=[];let St=null,wa=0;const wc=Promise.resolve();let io=null,rd=null;function ch(t){const e=io||wc;return t?e.then(this?t.bind(this):t):e}function uh(t){let e=mt+1,a=He.length;for(;e<a;){const i=e+a>>>1;mi(He[i])<t?e=i+1:a=i}return e}function yc(t){(!He.length||!He.includes(t,gn&&t.allowRecurse?mt+1:mt))&&t!==rd&&(t.id==null?He.push(t):He.splice(uh(t.id),0,t),xc())}function xc(){!gn&&!nd&&(nd=!0,io=wc.then(Tc))}function bh(t){const e=He.indexOf(t);e>mt&&He.splice(e,1)}function kc(t,e,a,i){j(t)?a.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&a.push(t),xc()}function fh(t){kc(t,ti,ri,ga)}function hh(t){kc(t,St,di,wa)}function Gn(t,e=null){if(ri.length){for(rd=e,ti=[...new Set(ri)],ri.length=0,ga=0;ga<ti.length;ga++)ti[ga]();ti=null,ga=0,rd=null,Gn(t,e)}}function Ec(t){if(Gn(),di.length){const e=[...new Set(di)];if(di.length=0,St){St.push(...e);return}for(St=e,St.sort((a,i)=>mi(a)-mi(i)),wa=0;wa<St.length;wa++)St[wa]();St=null,wa=0}}const mi=t=>t.id==null?1/0:t.id;function Tc(t){nd=!1,gn=!0,Gn(t),He.sort((a,i)=>mi(a)-mi(i));const e=rt;try{for(mt=0;mt<He.length;mt++){const a=He[mt];a&&a.active!==!1&&Nt(a,null,14)}}finally{mt=0,He.length=0,Ec(),gn=!1,io=null,(He.length||ri.length||di.length)&&Tc(t)}}function vh(t,e,...a){if(t.isUnmounted)return;const i=t.vnode.props||ee;let n=a;const r=e.startsWith("update:"),d=r&&e.slice(7);if(d&&d in i){const c=`${d==="modelValue"?"model":d}Modifiers`,{number:b,trim:h}=i[c]||ee;h&&(n=a.map(m=>m.trim())),b&&(n=a.map(Jr))}let o,s=i[o=Sr(e)]||i[o=Sr(Na(e))];!s&&r&&(s=i[o=Sr(Ua(e))]),s&&Ye(s,t,6,n);const l=i[o+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Ye(l,t,6,n)}}function _c(t,e,a=!1){const i=e.emitsCache,n=i.get(t);if(n!==void 0)return n;const r=t.emits;let d={},o=!1;if(!U(t)){const s=l=>{const c=_c(l,e,!0);c&&(o=!0,Me(d,c))};!a&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return!r&&!o?(i.set(t,null),null):(j(r)?r.forEach(s=>d[s]=null):Me(d,r),i.set(t,d),d)}function Hn(t,e){return!t||!jn(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Ua(e))||H(t,e))}let it=null,Kn=null;function wn(t){const e=it;return it=t,Kn=t&&t.type.__scopeId||null,e}function mh(t){Kn=t}function ph(){Kn=null}function gh(t,e=it,a){if(!e||t._n)return t;const i=(...n)=>{i._d&&Fs(-1);const r=wn(e),d=t(...n);return wn(r),i._d&&Fs(1),d};return i._n=!0,i._c=!0,i._d=!0,i}function Ar(t){const{type:e,vnode:a,proxy:i,withProxy:n,props:r,propsOptions:[d],slots:o,attrs:s,emit:l,render:c,renderCache:b,data:h,setupState:m,ctx:k,inheritAttrs:A}=t;let I,z;const te=wn(t);try{if(a.shapeFlag&4){const ae=n||i;I=ut(c.call(ae,ae,b,r,m,h,k)),z=s}else{const ae=e;I=ut(ae.length>1?ae(r,{attrs:s,slots:o,emit:l}):ae(r,null)),z=e.props?s:wh(s)}}catch(ae){oi.length=0,qn(ae,t,1),I=ea(gt)}let ne=I;if(z&&A!==!1){const ae=Object.keys(z),{shapeFlag:ke}=ne;ae.length&&ke&7&&(d&&ae.some(Gd)&&(z=yh(z,d)),ne=Lt(ne,z))}return a.dirs&&(ne=Lt(ne),ne.dirs=ne.dirs?ne.dirs.concat(a.dirs):a.dirs),a.transition&&(ne.transition=a.transition),I=ne,wn(te),I}const wh=t=>{let e;for(const a in t)(a==="class"||a==="style"||jn(a))&&((e||(e={}))[a]=t[a]);return e},yh=(t,e)=>{const a={};for(const i in t)(!Gd(i)||!(i.slice(9)in e))&&(a[i]=t[i]);return a};function xh(t,e,a){const{props:i,children:n,component:r}=t,{props:d,children:o,patchFlag:s}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&s>=0){if(s&1024)return!0;if(s&16)return i?Ss(i,d,l):!!d;if(s&8){const c=e.dynamicProps;for(let b=0;b<c.length;b++){const h=c[b];if(d[h]!==i[h]&&!Hn(l,h))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:i===d?!1:i?d?Ss(i,d,l):!0:!!d;return!1}function Ss(t,e,a){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let n=0;n<i.length;n++){const r=i[n];if(e[r]!==t[r]&&!Hn(a,r))return!0}return!1}function kh({vnode:t,parent:e},a){for(;e&&e.subTree===t;)(t=e.vnode).el=a,e=e.parent}const Eh=t=>t.__isSuspense;function Th(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):hh(t)}function _h(t,e){if(_e){let a=_e.provides;const i=_e.parent&&_e.parent.provides;i===a&&(a=_e.provides=Object.create(i)),a[t]=e}}function Dr(t,e,a=!1){const i=_e||it;if(i){const n=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(n&&t in n)return n[t];if(arguments.length>1)return a&&U(e)?e.call(i.proxy):e}}const As={};function Nr(t,e,a){return Ic(t,e,a)}function Ic(t,e,{immediate:a,deep:i,flush:n,onTrack:r,onTrigger:d}=ee){const o=_e;let s,l=!1,c=!1;if(Re(t)?(s=()=>t.value,l=id(t)):Ia(t)?(s=()=>t,i=!0):j(t)?(c=!0,l=t.some(z=>Ia(z)||id(z)),s=()=>t.map(z=>{if(Re(z))return z.value;if(Ia(z))return Qt(z);if(U(z))return Nt(z,o,2)})):U(t)?e?s=()=>Nt(t,o,2):s=()=>{if(!(o&&o.isUnmounted))return b&&b(),Ye(t,o,3,[h])}:s=rt,e&&i){const z=s;s=()=>Qt(z())}let b,h=z=>{b=I.onStop=()=>{Nt(z,o,4)}};if(gi)return h=rt,e?a&&Ye(e,o,3,[s(),c?[]:void 0,h]):s(),rt;let m=c?[]:As;const k=()=>{if(!!I.active)if(e){const z=I.run();(i||l||(c?z.some((te,ne)=>fi(te,m[ne])):fi(z,m)))&&(b&&b(),Ye(e,o,3,[z,m===As?void 0:m,h]),m=z)}else I.run()};k.allowRecurse=!!e;let A;n==="sync"?A=k:n==="post"?A=()=>Be(k,o&&o.suspense):A=()=>fh(k);const I=new Xd(s,A);return e?a?k():m=I.run():n==="post"?Be(I.run.bind(I),o&&o.suspense):I.run(),()=>{I.stop(),o&&o.scope&&Hd(o.scope.effects,I)}}function Ih(t,e,a){const i=this.proxy,n=we(t)?t.includes(".")?Cc(i,t):()=>i[t]:t.bind(i,i);let r;U(e)?r=e:(r=e.handler,a=e);const d=_e;Ra(this);const o=Ic(n,r.bind(i),a);return d?Ra(d):ta(),o}function Cc(t,e){const a=e.split(".");return()=>{let i=t;for(let n=0;n<a.length&&i;n++)i=i[a[n]];return i}}function Qt(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Qt(t.value,e);else if(j(t))for(let a=0;a<t.length;a++)Qt(t[a],e);else if(Jl(t)||_a(t))t.forEach(a=>{Qt(a,e)});else if(tc(t))for(const a in t)Qt(t[a],e);return t}function Ch(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return no(()=>{t.isMounted=!0}),Nc(()=>{t.isUnmounting=!0}),t}const Xe=[Function,Array],Sh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},setup(t,{slots:e}){const a=mv(),i=Ch();let n;return()=>{const r=e.default&&Ac(e.default(),!0);if(!r||!r.length)return;let d=r[0];if(r.length>1){for(const A of r)if(A.type!==gt){d=A;break}}const o=Q(t),{mode:s}=o;if(i.isLeaving)return Rr(d);const l=Ds(d);if(!l)return Rr(d);const c=dd(l,o,i,a);od(l,c);const b=a.subTree,h=b&&Ds(b);let m=!1;const{getTransitionKey:k}=l.type;if(k){const A=k();n===void 0?n=A:A!==n&&(n=A,m=!0)}if(h&&h.type!==gt&&(!Kt(l,h)||m)){const A=dd(h,o,i,a);if(od(h,A),s==="out-in")return i.isLeaving=!0,A.afterLeave=()=>{i.isLeaving=!1,a.update()},Rr(d);s==="in-out"&&l.type!==gt&&(A.delayLeave=(I,z,te)=>{const ne=Sc(i,h);ne[String(h.key)]=h,I._leaveCb=()=>{z(),I._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=te})}return d}}},Ah=Sh;function Sc(t,e){const{leavingVNodes:a}=t;let i=a.get(e.type);return i||(i=Object.create(null),a.set(e.type,i)),i}function dd(t,e,a,i){const{appear:n,mode:r,persisted:d=!1,onBeforeEnter:o,onEnter:s,onAfterEnter:l,onEnterCancelled:c,onBeforeLeave:b,onLeave:h,onAfterLeave:m,onLeaveCancelled:k,onBeforeAppear:A,onAppear:I,onAfterAppear:z,onAppearCancelled:te}=e,ne=String(t.key),ae=Sc(a,t),ke=(K,le)=>{K&&Ye(K,i,9,le)},_t=(K,le)=>{const ue=le[1];ke(K,le),j(K)?K.every(Ve=>Ve.length<=1)&&ue():K.length<=1&&ue()},ot={mode:r,persisted:d,beforeEnter(K){let le=o;if(!a.isMounted)if(n)le=A||o;else return;K._leaveCb&&K._leaveCb(!0);const ue=ae[ne];ue&&Kt(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),ke(le,[K])},enter(K){let le=s,ue=l,Ve=c;if(!a.isMounted)if(n)le=I||s,ue=z||l,Ve=te||c;else return;let Ze=!1;const ft=K._enterCb=Qi=>{Ze||(Ze=!0,Qi?ke(Ve,[K]):ke(ue,[K]),ot.delayedLeave&&ot.delayedLeave(),K._enterCb=void 0)};le?_t(le,[K,ft]):ft()},leave(K,le){const ue=String(t.key);if(K._enterCb&&K._enterCb(!0),a.isUnmounting)return le();ke(b,[K]);let Ve=!1;const Ze=K._leaveCb=ft=>{Ve||(Ve=!0,le(),ft?ke(k,[K]):ke(m,[K]),K._leaveCb=void 0,ae[ue]===t&&delete ae[ue])};ae[ue]=t,h?_t(h,[K,Ze]):Ze()},clone(K){return dd(K,e,a,i)}};return ot}function Rr(t){if(Wn(t))return t=Lt(t),t.children=null,t}function Ds(t){return Wn(t)?t.children?t.children[0]:void 0:t}function od(t,e){t.shapeFlag&6&&t.component?od(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ac(t,e=!1,a){let i=[],n=0;for(let r=0;r<t.length;r++){let d=t[r];const o=a==null?d.key:String(a)+String(d.key!=null?d.key:r);d.type===tt?(d.patchFlag&128&&n++,i=i.concat(Ac(d.children,e,o))):(e||d.type!==gt)&&i.push(o!=null?Lt(d,{key:o}):d)}if(n>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const un=t=>!!t.type.__asyncLoader,Wn=t=>t.type.__isKeepAlive;function Dh(t,e){Dc(t,"a",e)}function Nh(t,e){Dc(t,"da",e)}function Dc(t,e,a=_e){const i=t.__wdc||(t.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Qn(e,i,a),a){let n=a.parent;for(;n&&n.parent;)Wn(n.parent.vnode)&&Rh(i,e,a,n),n=n.parent}}function Rh(t,e,a,i){const n=Qn(e,t,i,!0);Rc(()=>{Hd(i[e],n)},a)}function Qn(t,e,a=_e,i=!1){if(a){const n=a[t]||(a[t]=[]),r=e.__weh||(e.__weh=(...d)=>{if(a.isUnmounted)return;$a(),Ra(a);const o=Ye(e,a,t,d);return ta(),qa(),o});return i?n.unshift(r):n.push(r),r}}const Tt=t=>(e,a=_e)=>(!gi||t==="sp")&&Qn(t,e,a),Oh=Tt("bm"),no=Tt("m"),Mh=Tt("bu"),Lh=Tt("u"),Nc=Tt("bum"),Rc=Tt("um"),zh=Tt("sp"),Fh=Tt("rtg"),Ph=Tt("rtc");function Vh(t,e=_e){Qn("ec",t,e)}function jh(t,e){const a=it;if(a===null)return t;const i=Yn(a)||a.proxy,n=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[d,o,s,l=ee]=e[r];U(d)&&(d={mounted:d,updated:d}),d.deep&&Qt(o),n.push({dir:d,instance:i,value:o,oldValue:void 0,arg:s,modifiers:l})}return t}function $t(t,e,a,i){const n=t.dirs,r=e&&e.dirs;for(let d=0;d<n.length;d++){const o=n[d];r&&(o.oldValue=r[d].value);let s=o.dir[i];s&&($a(),Ye(s,a,8,[t.el,o,t,e]),qa())}}const Bh=Symbol();function Uh(t,e,a,i){let n;const r=a&&a[i];if(j(t)||we(t)){n=new Array(t.length);for(let d=0,o=t.length;d<o;d++)n[d]=e(t[d],d,void 0,r&&r[d])}else if(typeof t=="number"){n=new Array(t);for(let d=0;d<t;d++)n[d]=e(d+1,d,void 0,r&&r[d])}else if(ye(t))if(t[Symbol.iterator])n=Array.from(t,(d,o)=>e(d,o,void 0,r&&r[o]));else{const d=Object.keys(t);n=new Array(d.length);for(let o=0,s=d.length;o<s;o++){const l=d[o];n[o]=e(t[l],l,o,r&&r[o])}}else n=[];return a&&(a[i]=n),n}const sd=t=>t?$c(t)?Yn(t)||t.proxy:sd(t.parent):null,yn=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sd(t.parent),$root:t=>sd(t.root),$emit:t=>t.emit,$options:t=>Mc(t),$forceUpdate:t=>t.f||(t.f=()=>yc(t.update)),$nextTick:t=>t.n||(t.n=ch.bind(t.proxy)),$watch:t=>Ih.bind(t)}),$h={get({_:t},e){const{ctx:a,setupState:i,data:n,props:r,accessCache:d,type:o,appContext:s}=t;let l;if(e[0]!=="$"){const m=d[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return n[e];case 4:return a[e];case 3:return r[e]}else{if(i!==ee&&H(i,e))return d[e]=1,i[e];if(n!==ee&&H(n,e))return d[e]=2,n[e];if((l=t.propsOptions[0])&&H(l,e))return d[e]=3,r[e];if(a!==ee&&H(a,e))return d[e]=4,a[e];ld&&(d[e]=0)}}const c=yn[e];let b,h;if(c)return e==="$attrs"&&We(t,"get",e),c(t);if((b=o.__cssModules)&&(b=b[e]))return b;if(a!==ee&&H(a,e))return d[e]=4,a[e];if(h=s.config.globalProperties,H(h,e))return h[e]},set({_:t},e,a){const{data:i,setupState:n,ctx:r}=t;return n!==ee&&H(n,e)?(n[e]=a,!0):i!==ee&&H(i,e)?(i[e]=a,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=a,!0)},has({_:{data:t,setupState:e,accessCache:a,ctx:i,appContext:n,propsOptions:r}},d){let o;return!!a[d]||t!==ee&&H(t,d)||e!==ee&&H(e,d)||(o=r[0])&&H(o,d)||H(i,d)||H(yn,d)||H(n.config.globalProperties,d)},defineProperty(t,e,a){return a.get!=null?t._.accessCache[e]=0:H(a,"value")&&this.set(t,e,a.value,null),Reflect.defineProperty(t,e,a)}};let ld=!0;function qh(t){const e=Mc(t),a=t.proxy,i=t.ctx;ld=!1,e.beforeCreate&&Ns(e.beforeCreate,t,"bc");const{data:n,computed:r,methods:d,watch:o,provide:s,inject:l,created:c,beforeMount:b,mounted:h,beforeUpdate:m,updated:k,activated:A,deactivated:I,beforeDestroy:z,beforeUnmount:te,destroyed:ne,unmounted:ae,render:ke,renderTracked:_t,renderTriggered:ot,errorCaptured:K,serverPrefetch:le,expose:ue,inheritAttrs:Ve,components:Ze,directives:ft,filters:Qi}=e;if(l&&Gh(l,i,null,t.appContext.config.unwrapInjectedRef),d)for(const ce in d){const re=d[ce];U(re)&&(i[ce]=re.bind(a))}if(n){const ce=n.call(a,a);ye(ce)&&(t.data=eo(ce))}if(ld=!0,r)for(const ce in r){const re=r[ce],ht=U(re)?re.bind(a,a):U(re.get)?re.get.bind(a,a):rt,_r=!U(re)&&U(re.set)?re.set.bind(a):rt,Ya=kv({get:ht,set:_r});Object.defineProperty(i,ce,{enumerable:!0,configurable:!0,get:()=>Ya.value,set:ha=>Ya.value=ha})}if(o)for(const ce in o)Oc(o[ce],i,a,ce);if(s){const ce=U(s)?s.call(a):s;Reflect.ownKeys(ce).forEach(re=>{_h(re,ce[re])})}c&&Ns(c,t,"c");function je(ce,re){j(re)?re.forEach(ht=>ce(ht.bind(a))):re&&ce(re.bind(a))}if(je(Oh,b),je(no,h),je(Mh,m),je(Lh,k),je(Dh,A),je(Nh,I),je(Vh,K),je(Ph,_t),je(Fh,ot),je(Nc,te),je(Rc,ae),je(zh,le),j(ue))if(ue.length){const ce=t.exposed||(t.exposed={});ue.forEach(re=>{Object.defineProperty(ce,re,{get:()=>a[re],set:ht=>a[re]=ht})})}else t.exposed||(t.exposed={});ke&&t.render===rt&&(t.render=ke),Ve!=null&&(t.inheritAttrs=Ve),Ze&&(t.components=Ze),ft&&(t.directives=ft)}function Gh(t,e,a=rt,i=!1){j(t)&&(t=cd(t));for(const n in t){const r=t[n];let d;ye(r)?"default"in r?d=Dr(r.from||n,r.default,!0):d=Dr(r.from||n):d=Dr(r),Re(d)&&i?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>d.value,set:o=>d.value=o}):e[n]=d}}function Ns(t,e,a){Ye(j(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,a)}function Oc(t,e,a,i){const n=i.includes(".")?Cc(a,i):()=>a[i];if(we(t)){const r=e[t];U(r)&&Nr(n,r)}else if(U(t))Nr(n,t.bind(a));else if(ye(t))if(j(t))t.forEach(r=>Oc(r,e,a,i));else{const r=U(t.handler)?t.handler.bind(a):e[t.handler];U(r)&&Nr(n,r,t)}}function Mc(t){const e=t.type,{mixins:a,extends:i}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:d}}=t.appContext,o=r.get(e);let s;return o?s=o:!n.length&&!a&&!i?s=e:(s={},n.length&&n.forEach(l=>xn(s,l,d,!0)),xn(s,e,d)),r.set(e,s),s}function xn(t,e,a,i=!1){const{mixins:n,extends:r}=e;r&&xn(t,r,a,!0),n&&n.forEach(d=>xn(t,d,a,!0));for(const d in e)if(!(i&&d==="expose")){const o=Hh[d]||a&&a[d];t[d]=o?o(t[d],e[d]):e[d]}return t}const Hh={data:Rs,props:Gt,emits:Gt,methods:Gt,computed:Gt,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Gt,directives:Gt,watch:Wh,provide:Rs,inject:Kh};function Rs(t,e){return e?t?function(){return Me(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Kh(t,e){return Gt(cd(t),cd(e))}function cd(t){if(j(t)){const e={};for(let a=0;a<t.length;a++)e[t[a]]=t[a];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Gt(t,e){return t?Me(Me(Object.create(null),t),e):e}function Wh(t,e){if(!t)return e;if(!e)return t;const a=Me(Object.create(null),t);for(const i in e)a[i]=Le(t[i],e[i]);return a}function Qh(t,e,a,i=!1){const n={},r={};pn(r,Xn,1),t.propsDefaults=Object.create(null),Lc(t,e,n,r);for(const d in t.propsOptions[0])d in n||(n[d]=void 0);a?t.props=i?n:ah(n):t.type.props?t.props=n:t.props=r,t.attrs=r}function Xh(t,e,a,i){const{props:n,attrs:r,vnode:{patchFlag:d}}=t,o=Q(n),[s]=t.propsOptions;let l=!1;if((i||d>0)&&!(d&16)){if(d&8){const c=t.vnode.dynamicProps;for(let b=0;b<c.length;b++){let h=c[b];if(Hn(t.emitsOptions,h))continue;const m=e[h];if(s)if(H(r,h))m!==r[h]&&(r[h]=m,l=!0);else{const k=Na(h);n[k]=ud(s,o,k,m,t,!1)}else m!==r[h]&&(r[h]=m,l=!0)}}}else{Lc(t,e,n,r)&&(l=!0);let c;for(const b in o)(!e||!H(e,b)&&((c=Ua(b))===b||!H(e,c)))&&(s?a&&(a[b]!==void 0||a[c]!==void 0)&&(n[b]=ud(s,o,b,void 0,t,!0)):delete n[b]);if(r!==o)for(const b in r)(!e||!H(e,b)&&!0)&&(delete r[b],l=!0)}l&&yt(t,"set","$attrs")}function Lc(t,e,a,i){const[n,r]=t.propsOptions;let d=!1,o;if(e)for(let s in e){if(ln(s))continue;const l=e[s];let c;n&&H(n,c=Na(s))?!r||!r.includes(c)?a[c]=l:(o||(o={}))[c]=l:Hn(t.emitsOptions,s)||(!(s in i)||l!==i[s])&&(i[s]=l,d=!0)}if(r){const s=Q(a),l=o||ee;for(let c=0;c<r.length;c++){const b=r[c];a[b]=ud(n,s,b,l[b],t,!H(l,b))}}return d}function ud(t,e,a,i,n,r){const d=t[a];if(d!=null){const o=H(d,"default");if(o&&i===void 0){const s=d.default;if(d.type!==Function&&U(s)){const{propsDefaults:l}=n;a in l?i=l[a]:(Ra(n),i=l[a]=s.call(null,e),ta())}else i=s}d[0]&&(r&&!o?i=!1:d[1]&&(i===""||i===Ua(a))&&(i=!0))}return i}function zc(t,e,a=!1){const i=e.propsCache,n=i.get(t);if(n)return n;const r=t.props,d={},o=[];let s=!1;if(!U(t)){const c=b=>{s=!0;const[h,m]=zc(b,e,!0);Me(d,h),m&&o.push(...m)};!a&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!r&&!s)return i.set(t,Ta),Ta;if(j(r))for(let c=0;c<r.length;c++){const b=Na(r[c]);Os(b)&&(d[b]=ee)}else if(r)for(const c in r){const b=Na(c);if(Os(b)){const h=r[c],m=d[b]=j(h)||U(h)?{type:h}:h;if(m){const k=zs(Boolean,m.type),A=zs(String,m.type);m[0]=k>-1,m[1]=A<0||k<A,(k>-1||H(m,"default"))&&o.push(b)}}}const l=[d,o];return i.set(t,l),l}function Os(t){return t[0]!=="$"}function Ms(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ls(t,e){return Ms(t)===Ms(e)}function zs(t,e){return j(e)?e.findIndex(a=>Ls(a,t)):U(e)&&Ls(e,t)?0:-1}const Fc=t=>t[0]==="_"||t==="$stable",ro=t=>j(t)?t.map(ut):[ut(t)],Yh=(t,e,a)=>{if(e._n)return e;const i=gh((...n)=>ro(e(...n)),a);return i._c=!1,i},Pc=(t,e,a)=>{const i=t._ctx;for(const n in t){if(Fc(n))continue;const r=t[n];if(U(r))e[n]=Yh(n,r,i);else if(r!=null){const d=ro(r);e[n]=()=>d}}},Vc=(t,e)=>{const a=ro(e);t.slots.default=()=>a},Jh=(t,e)=>{if(t.vnode.shapeFlag&32){const a=e._;a?(t.slots=Q(e),pn(e,"_",a)):Pc(e,t.slots={})}else t.slots={},e&&Vc(t,e);pn(t.slots,Xn,1)},Zh=(t,e,a)=>{const{vnode:i,slots:n}=t;let r=!0,d=ee;if(i.shapeFlag&32){const o=e._;o?a&&o===1?r=!1:(Me(n,e),!a&&o===1&&delete n._):(r=!e.$stable,Pc(e,n)),d=e}else e&&(Vc(t,e),d={default:1});if(r)for(const o in n)!Fc(o)&&!(o in d)&&delete n[o]};function jc(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ev=0;function tv(t,e){return function(i,n=null){U(i)||(i=Object.assign({},i)),n!=null&&!ye(n)&&(n=null);const r=jc(),d=new Set;let o=!1;const s=r.app={_uid:ev++,_component:i,_props:n,_container:null,_context:r,_instance:null,version:Ev,get config(){return r.config},set config(l){},use(l,...c){return d.has(l)||(l&&U(l.install)?(d.add(l),l.install(s,...c)):U(l)&&(d.add(l),l(s,...c))),s},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),s},component(l,c){return c?(r.components[l]=c,s):r.components[l]},directive(l,c){return c?(r.directives[l]=c,s):r.directives[l]},mount(l,c,b){if(!o){const h=ea(i,n);return h.appContext=r,c&&e?e(h,l):t(h,l,b),o=!0,s._container=l,l.__vue_app__=s,Yn(h.component)||h.component.proxy}},unmount(){o&&(t(null,s._container),delete s._container.__vue_app__)},provide(l,c){return r.provides[l]=c,s}};return s}}function bd(t,e,a,i,n=!1){if(j(t)){t.forEach((h,m)=>bd(h,e&&(j(e)?e[m]:e),a,i,n));return}if(un(i)&&!n)return;const r=i.shapeFlag&4?Yn(i.component)||i.component.proxy:i.el,d=n?null:r,{i:o,r:s}=t,l=e&&e.r,c=o.refs===ee?o.refs={}:o.refs,b=o.setupState;if(l!=null&&l!==s&&(we(l)?(c[l]=null,H(b,l)&&(b[l]=null)):Re(l)&&(l.value=null)),U(s))Nt(s,o,12,[d,c]);else{const h=we(s),m=Re(s);if(h||m){const k=()=>{if(t.f){const A=h?c[s]:s.value;n?j(A)&&Hd(A,r):j(A)?A.includes(r)||A.push(r):h?(c[s]=[r],H(b,s)&&(b[s]=c[s])):(s.value=[r],t.k&&(c[t.k]=s.value))}else h?(c[s]=d,H(b,s)&&(b[s]=d)):m&&(s.value=d,t.k&&(c[t.k]=d))};d?(k.id=-1,Be(k,a)):k()}}}const Be=Th;function av(t){return iv(t)}function iv(t,e){const a=Sf();a.__VUE__=!0;const{insert:i,remove:n,patchProp:r,createElement:d,createText:o,createComment:s,setText:l,setElementText:c,parentNode:b,nextSibling:h,setScopeId:m=rt,cloneNode:k,insertStaticContent:A}=t,I=(u,f,v,g=null,p=null,T=null,C=!1,E=null,_=!!f.dynamicChildren)=>{if(u===f)return;u&&!Kt(u,f)&&(g=Xi(u),It(u,p,T,!0),u=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:w,ref:R,shapeFlag:D}=f;switch(w){case oo:z(u,f,v,g);break;case gt:te(u,f,v,g);break;case Or:u==null&&ne(f,v,g,C);break;case tt:ft(u,f,v,g,p,T,C,E,_);break;default:D&1?_t(u,f,v,g,p,T,C,E,_):D&6?Qi(u,f,v,g,p,T,C,E,_):(D&64||D&128)&&w.process(u,f,v,g,p,T,C,E,_,va)}R!=null&&p&&bd(R,u&&u.ref,T,f||u,!f)},z=(u,f,v,g)=>{if(u==null)i(f.el=o(f.children),v,g);else{const p=f.el=u.el;f.children!==u.children&&l(p,f.children)}},te=(u,f,v,g)=>{u==null?i(f.el=s(f.children||""),v,g):f.el=u.el},ne=(u,f,v,g)=>{[u.el,u.anchor]=A(u.children,f,v,g,u.el,u.anchor)},ae=({el:u,anchor:f},v,g)=>{let p;for(;u&&u!==f;)p=h(u),i(u,v,g),u=p;i(f,v,g)},ke=({el:u,anchor:f})=>{let v;for(;u&&u!==f;)v=h(u),n(u),u=v;n(f)},_t=(u,f,v,g,p,T,C,E,_)=>{C=C||f.type==="svg",u==null?ot(f,v,g,p,T,C,E,_):ue(u,f,p,T,C,E,_)},ot=(u,f,v,g,p,T,C,E)=>{let _,w;const{type:R,props:D,shapeFlag:O,transition:P,patchFlag:W,dirs:J}=u;if(u.el&&k!==void 0&&W===-1)_=u.el=k(u.el);else{if(_=u.el=d(u.type,T,D&&D.is,D),O&8?c(_,u.children):O&16&&le(u.children,_,null,g,p,T&&R!=="foreignObject",C,E),J&&$t(u,null,g,"created"),D){for(const de in D)de!=="value"&&!ln(de)&&r(_,de,null,D[de],T,u.children,g,p,vt);"value"in D&&r(_,"value",null,D.value),(w=D.onVnodeBeforeMount)&&lt(w,g,u)}K(_,u,u.scopeId,C,g)}J&&$t(u,null,g,"beforeMount");const Z=(!p||p&&!p.pendingBranch)&&P&&!P.persisted;Z&&P.beforeEnter(_),i(_,f,v),((w=D&&D.onVnodeMounted)||Z||J)&&Be(()=>{w&&lt(w,g,u),Z&&P.enter(_),J&&$t(u,null,g,"mounted")},p)},K=(u,f,v,g,p)=>{if(v&&m(u,v),g)for(let T=0;T<g.length;T++)m(u,g[T]);if(p){let T=p.subTree;if(f===T){const C=p.vnode;K(u,C,C.scopeId,C.slotScopeIds,p.parent)}}},le=(u,f,v,g,p,T,C,E,_=0)=>{for(let w=_;w<u.length;w++){const R=u[w]=E?At(u[w]):ut(u[w]);I(null,R,f,v,g,p,T,C,E)}},ue=(u,f,v,g,p,T,C)=>{const E=f.el=u.el;let{patchFlag:_,dynamicChildren:w,dirs:R}=f;_|=u.patchFlag&16;const D=u.props||ee,O=f.props||ee;let P;v&&qt(v,!1),(P=O.onVnodeBeforeUpdate)&&lt(P,v,f,u),R&&$t(f,u,v,"beforeUpdate"),v&&qt(v,!0);const W=p&&f.type!=="foreignObject";if(w?Ve(u.dynamicChildren,w,E,v,g,W,T):C||ht(u,f,E,null,v,g,W,T,!1),_>0){if(_&16)Ze(E,f,D,O,v,g,p);else if(_&2&&D.class!==O.class&&r(E,"class",null,O.class,p),_&4&&r(E,"style",D.style,O.style,p),_&8){const J=f.dynamicProps;for(let Z=0;Z<J.length;Z++){const de=J[Z],et=D[de],ma=O[de];(ma!==et||de==="value")&&r(E,de,et,ma,p,u.children,v,g,vt)}}_&1&&u.children!==f.children&&c(E,f.children)}else!C&&w==null&&Ze(E,f,D,O,v,g,p);((P=O.onVnodeUpdated)||R)&&Be(()=>{P&&lt(P,v,f,u),R&&$t(f,u,v,"updated")},g)},Ve=(u,f,v,g,p,T,C)=>{for(let E=0;E<f.length;E++){const _=u[E],w=f[E],R=_.el&&(_.type===tt||!Kt(_,w)||_.shapeFlag&70)?b(_.el):v;I(_,w,R,null,g,p,T,C,!0)}},Ze=(u,f,v,g,p,T,C)=>{if(v!==g){for(const E in g){if(ln(E))continue;const _=g[E],w=v[E];_!==w&&E!=="value"&&r(u,E,w,_,C,f.children,p,T,vt)}if(v!==ee)for(const E in v)!ln(E)&&!(E in g)&&r(u,E,v[E],null,C,f.children,p,T,vt);"value"in g&&r(u,"value",v.value,g.value)}},ft=(u,f,v,g,p,T,C,E,_)=>{const w=f.el=u?u.el:o(""),R=f.anchor=u?u.anchor:o("");let{patchFlag:D,dynamicChildren:O,slotScopeIds:P}=f;P&&(E=E?E.concat(P):P),u==null?(i(w,v,g),i(R,v,g),le(f.children,v,R,p,T,C,E,_)):D>0&&D&64&&O&&u.dynamicChildren?(Ve(u.dynamicChildren,O,v,p,T,C,E),(f.key!=null||p&&f===p.subTree)&&Bc(u,f,!0)):ht(u,f,v,R,p,T,C,E,_)},Qi=(u,f,v,g,p,T,C,E,_)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?p.ctx.activate(f,v,g,C,_):Tr(f,v,g,p,T,C,_):je(u,f,_)},Tr=(u,f,v,g,p,T,C)=>{const E=u.component=vv(u,g,p);if(Wn(u)&&(E.ctx.renderer=va),pv(E),E.asyncDep){if(p&&p.registerDep(E,ce),!u.el){const _=E.subTree=ea(gt);te(null,_,f,v)}return}ce(E,u,f,v,p,T,C)},je=(u,f,v)=>{const g=f.component=u.component;if(xh(u,f,v))if(g.asyncDep&&!g.asyncResolved){re(g,f,v);return}else g.next=f,bh(g.update),g.update();else f.el=u.el,g.vnode=f},ce=(u,f,v,g,p,T,C)=>{const E=()=>{if(u.isMounted){let{next:R,bu:D,u:O,parent:P,vnode:W}=u,J=R,Z;qt(u,!1),R?(R.el=W.el,re(u,R,C)):R=W,D&&cn(D),(Z=R.props&&R.props.onVnodeBeforeUpdate)&&lt(Z,P,R,W),qt(u,!0);const de=Ar(u),et=u.subTree;u.subTree=de,I(et,de,b(et.el),Xi(et),u,p,T),R.el=de.el,J===null&&kh(u,de.el),O&&Be(O,p),(Z=R.props&&R.props.onVnodeUpdated)&&Be(()=>lt(Z,P,R,W),p)}else{let R;const{el:D,props:O}=f,{bm:P,m:W,parent:J}=u,Z=un(f);if(qt(u,!1),P&&cn(P),!Z&&(R=O&&O.onVnodeBeforeMount)&&lt(R,J,f),qt(u,!0),D&&Cr){const de=()=>{u.subTree=Ar(u),Cr(D,u.subTree,u,p,null)};Z?f.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=Ar(u);I(null,de,v,g,u,p,T),f.el=de.el}if(W&&Be(W,p),!Z&&(R=O&&O.onVnodeMounted)){const de=f;Be(()=>lt(R,J,de),p)}(f.shapeFlag&256||J&&un(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&Be(u.a,p),u.isMounted=!0,f=v=g=null}},_=u.effect=new Xd(E,()=>yc(w),u.scope),w=u.update=()=>_.run();w.id=u.uid,qt(u,!0),w()},re=(u,f,v)=>{f.component=u;const g=u.vnode.props;u.vnode=f,u.next=null,Xh(u,f.props,g,v),Zh(u,f.children,v),$a(),Gn(void 0,u.update),qa()},ht=(u,f,v,g,p,T,C,E,_=!1)=>{const w=u&&u.children,R=u?u.shapeFlag:0,D=f.children,{patchFlag:O,shapeFlag:P}=f;if(O>0){if(O&128){Ya(w,D,v,g,p,T,C,E,_);return}else if(O&256){_r(w,D,v,g,p,T,C,E,_);return}}P&8?(R&16&&vt(w,p,T),D!==w&&c(v,D)):R&16?P&16?Ya(w,D,v,g,p,T,C,E,_):vt(w,p,T,!0):(R&8&&c(v,""),P&16&&le(D,v,g,p,T,C,E,_))},_r=(u,f,v,g,p,T,C,E,_)=>{u=u||Ta,f=f||Ta;const w=u.length,R=f.length,D=Math.min(w,R);let O;for(O=0;O<D;O++){const P=f[O]=_?At(f[O]):ut(f[O]);I(u[O],P,v,null,p,T,C,E,_)}w>R?vt(u,p,T,!0,!1,D):le(f,v,g,p,T,C,E,_,D)},Ya=(u,f,v,g,p,T,C,E,_)=>{let w=0;const R=f.length;let D=u.length-1,O=R-1;for(;w<=D&&w<=O;){const P=u[w],W=f[w]=_?At(f[w]):ut(f[w]);if(Kt(P,W))I(P,W,v,null,p,T,C,E,_);else break;w++}for(;w<=D&&w<=O;){const P=u[D],W=f[O]=_?At(f[O]):ut(f[O]);if(Kt(P,W))I(P,W,v,null,p,T,C,E,_);else break;D--,O--}if(w>D){if(w<=O){const P=O+1,W=P<R?f[P].el:g;for(;w<=O;)I(null,f[w]=_?At(f[w]):ut(f[w]),v,W,p,T,C,E,_),w++}}else if(w>O)for(;w<=D;)It(u[w],p,T,!0),w++;else{const P=w,W=w,J=new Map;for(w=W;w<=O;w++){const Ge=f[w]=_?At(f[w]):ut(f[w]);Ge.key!=null&&J.set(Ge.key,w)}let Z,de=0;const et=O-W+1;let ma=!1,bs=0;const Ja=new Array(et);for(w=0;w<et;w++)Ja[w]=0;for(w=P;w<=D;w++){const Ge=u[w];if(de>=et){It(Ge,p,T,!0);continue}let st;if(Ge.key!=null)st=J.get(Ge.key);else for(Z=W;Z<=O;Z++)if(Ja[Z-W]===0&&Kt(Ge,f[Z])){st=Z;break}st===void 0?It(Ge,p,T,!0):(Ja[st-W]=w+1,st>=bs?bs=st:ma=!0,I(Ge,f[st],v,null,p,T,C,E,_),de++)}const fs=ma?nv(Ja):Ta;for(Z=fs.length-1,w=et-1;w>=0;w--){const Ge=W+w,st=f[Ge],hs=Ge+1<R?f[Ge+1].el:g;Ja[w]===0?I(null,st,v,hs,p,T,C,E,_):ma&&(Z<0||w!==fs[Z]?ha(st,v,hs,2):Z--)}}},ha=(u,f,v,g,p=null)=>{const{el:T,type:C,transition:E,children:_,shapeFlag:w}=u;if(w&6){ha(u.component.subTree,f,v,g);return}if(w&128){u.suspense.move(f,v,g);return}if(w&64){C.move(u,f,v,va);return}if(C===tt){i(T,f,v);for(let D=0;D<_.length;D++)ha(_[D],f,v,g);i(u.anchor,f,v);return}if(C===Or){ae(u,f,v);return}if(g!==2&&w&1&&E)if(g===0)E.beforeEnter(T),i(T,f,v),Be(()=>E.enter(T),p);else{const{leave:D,delayLeave:O,afterLeave:P}=E,W=()=>i(T,f,v),J=()=>{D(T,()=>{W(),P&&P()})};O?O(T,W,J):J()}else i(T,f,v)},It=(u,f,v,g=!1,p=!1)=>{const{type:T,props:C,ref:E,children:_,dynamicChildren:w,shapeFlag:R,patchFlag:D,dirs:O}=u;if(E!=null&&bd(E,null,v,u,!0),R&256){f.ctx.deactivate(u);return}const P=R&1&&O,W=!un(u);let J;if(W&&(J=C&&C.onVnodeBeforeUnmount)&&lt(J,f,u),R&6)lf(u.component,v,g);else{if(R&128){u.suspense.unmount(v,g);return}P&&$t(u,null,f,"beforeUnmount"),R&64?u.type.remove(u,f,v,p,va,g):w&&(T!==tt||D>0&&D&64)?vt(w,f,v,!1,!0):(T===tt&&D&384||!p&&R&16)&&vt(_,f,v),g&&cs(u)}(W&&(J=C&&C.onVnodeUnmounted)||P)&&Be(()=>{J&&lt(J,f,u),P&&$t(u,null,f,"unmounted")},v)},cs=u=>{const{type:f,el:v,anchor:g,transition:p}=u;if(f===tt){sf(v,g);return}if(f===Or){ke(u);return}const T=()=>{n(v),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(u.shapeFlag&1&&p&&!p.persisted){const{leave:C,delayLeave:E}=p,_=()=>C(v,T);E?E(u.el,T,_):_()}else T()},sf=(u,f)=>{let v;for(;u!==f;)v=h(u),n(u),u=v;n(f)},lf=(u,f,v)=>{const{bum:g,scope:p,update:T,subTree:C,um:E}=u;g&&cn(g),p.stop(),T&&(T.active=!1,It(C,u,f,v)),E&&Be(E,f),Be(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},vt=(u,f,v,g=!1,p=!1,T=0)=>{for(let C=T;C<u.length;C++)It(u[C],f,v,g,p)},Xi=u=>u.shapeFlag&6?Xi(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),us=(u,f,v)=>{u==null?f._vnode&&It(f._vnode,null,null,!0):I(f._vnode||null,u,f,null,null,null,v),Ec(),f._vnode=u},va={p:I,um:It,m:ha,r:cs,mt:Tr,mc:le,pc:ht,pbc:Ve,n:Xi,o:t};let Ir,Cr;return e&&([Ir,Cr]=e(va)),{render:us,hydrate:Ir,createApp:tv(us,Ir)}}function qt({effect:t,update:e},a){t.allowRecurse=e.allowRecurse=a}function Bc(t,e,a=!1){const i=t.children,n=e.children;if(j(i)&&j(n))for(let r=0;r<i.length;r++){const d=i[r];let o=n[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[r]=At(n[r]),o.el=d.el),a||Bc(d,o))}}function nv(t){const e=t.slice(),a=[0];let i,n,r,d,o;const s=t.length;for(i=0;i<s;i++){const l=t[i];if(l!==0){if(n=a[a.length-1],t[n]<l){e[i]=n,a.push(i);continue}for(r=0,d=a.length-1;r<d;)o=r+d>>1,t[a[o]]<l?r=o+1:d=o;l<t[a[r]]&&(r>0&&(e[i]=a[r-1]),a[r]=i)}}for(r=a.length,d=a[r-1];r-- >0;)a[r]=d,d=e[d];return a}const rv=t=>t.__isTeleport,tt=Symbol(void 0),oo=Symbol(void 0),gt=Symbol(void 0),Or=Symbol(void 0),oi=[];let nt=null;function Mr(t=!1){oi.push(nt=t?null:[])}function dv(){oi.pop(),nt=oi[oi.length-1]||null}let pi=1;function Fs(t){pi+=t}function ov(t){return t.dynamicChildren=pi>0?nt||Ta:null,dv(),pi>0&&nt&&nt.push(t),t}function Lr(t,e,a,i,n,r){return ov(De(t,e,a,i,n,r,!0))}function sv(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Xn="__vInternal",Uc=({key:t})=>t!=null?t:null,bn=({ref:t,ref_key:e,ref_for:a})=>t!=null?we(t)||Re(t)||U(t)?{i:it,r:t,k:e,f:!!a}:t:null;function De(t,e=null,a=null,i=0,n=null,r=t===tt?0:1,d=!1,o=!1){const s={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uc(e),ref:e&&bn(e),scopeId:Kn,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null};return o?(so(s,a),r&128&&t.normalize(s)):a&&(s.shapeFlag|=we(a)?8:16),pi>0&&!d&&nt&&(s.patchFlag>0||r&6)&&s.patchFlag!==32&&nt.push(s),s}const ea=lv;function lv(t,e=null,a=null,i=0,n=null,r=!1){if((!t||t===Bh)&&(t=gt),sv(t)){const o=Lt(t,e,!0);return a&&so(o,a),pi>0&&!r&&nt&&(o.shapeFlag&6?nt[nt.indexOf(t)]=o:nt.push(o)),o.patchFlag|=-2,o}if(xv(t)&&(t=t.__vccOpts),e){e=cv(e);let{class:o,style:s}=e;o&&!we(o)&&(e.class=Ea(o)),ye(s)&&(hc(s)&&!j(s)&&(s=Me({},s)),e.style=qd(s))}const d=we(t)?1:Eh(t)?128:rv(t)?64:ye(t)?4:U(t)?2:0;return De(t,e,a,i,n,d,r,!0)}function cv(t){return t?hc(t)||Xn in t?Me({},t):t:null}function Lt(t,e,a=!1){const{props:i,ref:n,patchFlag:r,children:d}=t,o=e?bv(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Uc(o),ref:e&&e.ref?a&&n?j(n)?n.concat(bn(e)):[n,bn(e)]:bn(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lt(t.ssContent),ssFallback:t.ssFallback&&Lt(t.ssFallback),el:t.el,anchor:t.anchor}}function uv(t=" ",e=0){return ea(oo,null,t,e)}function ut(t){return t==null||typeof t=="boolean"?ea(gt):j(t)?ea(tt,null,t.slice()):typeof t=="object"?At(t):ea(oo,null,String(t))}function At(t){return t.el===null||t.memo?t:Lt(t)}function so(t,e){let a=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(j(e))a=16;else if(typeof e=="object")if(i&65){const n=e.default;n&&(n._c&&(n._d=!1),so(t,n()),n._c&&(n._d=!0));return}else{a=32;const n=e._;!n&&!(Xn in e)?e._ctx=it:n===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:it},a=32):(e=String(e),i&64?(a=16,e=[uv(e)]):a=8);t.children=e,t.shapeFlag|=a}function bv(...t){const e={};for(let a=0;a<t.length;a++){const i=t[a];for(const n in i)if(n==="class")e.class!==i.class&&(e.class=Ea([e.class,i.class]));else if(n==="style")e.style=qd([e.style,i.style]);else if(jn(n)){const r=e[n],d=i[n];d&&r!==d&&!(j(r)&&r.includes(d))&&(e[n]=r?[].concat(r,d):d)}else n!==""&&(e[n]=i[n])}return e}function lt(t,e,a,i=null){Ye(t,e,7,[a,i])}const fv=jc();let hv=0;function vv(t,e,a){const i=t.type,n=(e?e.appContext:t.appContext)||fv,r={uid:hv++,vnode:t,type:i,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zc(i,n),emitsOptions:_c(i,n),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:i.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=vh.bind(null,r),t.ce&&t.ce(r),r}let _e=null;const mv=()=>_e||it,Ra=t=>{_e=t,t.scope.on()},ta=()=>{_e&&_e.scope.off(),_e=null};function $c(t){return t.vnode.shapeFlag&4}let gi=!1;function pv(t,e=!1){gi=e;const{props:a,children:i}=t.vnode,n=$c(t);Qh(t,a,n,e),Jh(t,i);const r=n?gv(t,e):void 0;return gi=!1,r}function gv(t,e){const a=t.type;t.accessCache=Object.create(null),t.proxy=vc(new Proxy(t.ctx,$h));const{setup:i}=a;if(i){const n=t.setupContext=i.length>1?yv(t):null;Ra(t),$a();const r=Nt(i,t,0,[t.props,n]);if(qa(),ta(),Zl(r)){if(r.then(ta,ta),e)return r.then(d=>{Ps(t,d,e)}).catch(d=>{qn(d,t,0)});t.asyncDep=r}else Ps(t,r,e)}else qc(t,e)}function Ps(t,e,a){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=gc(e)),qc(t,a)}let Vs;function qc(t,e,a){const i=t.type;if(!t.render){if(!e&&Vs&&!i.render){const n=i.template;if(n){const{isCustomElement:r,compilerOptions:d}=t.appContext.config,{delimiters:o,compilerOptions:s}=i,l=Me(Me({isCustomElement:r,delimiters:o},d),s);i.render=Vs(n,l)}}t.render=i.render||rt}Ra(t),$a(),qh(t),qa(),ta()}function wv(t){return new Proxy(t.attrs,{get(e,a){return We(t,"get","$attrs"),e[a]}})}function yv(t){const e=i=>{t.exposed=i||{}};let a;return{get attrs(){return a||(a=wv(t))},slots:t.slots,emit:t.emit,expose:e}}function Yn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gc(vc(t.exposed)),{get(e,a){if(a in e)return e[a];if(a in yn)return yn[a](t)}}))}function xv(t){return U(t)&&"__vccOpts"in t}const kv=(t,e)=>sh(t,e,gi),Ev="3.2.37",Tv="http://www.w3.org/2000/svg",Wt=typeof document!="undefined"?document:null,js=Wt&&Wt.createElement("template"),_v={insert:(t,e,a)=>{e.insertBefore(t,a||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,a,i)=>{const n=e?Wt.createElementNS(Tv,t):Wt.createElement(t,a?{is:a}:void 0);return t==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,a,i,n,r){const d=a?a.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{js.innerHTML=i?`<svg>${t}</svg>`:t;const o=js.content;if(i){const s=o.firstChild;for(;s.firstChild;)o.appendChild(s.firstChild);o.removeChild(s)}e.insertBefore(o,a)}return[d?d.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}};function Iv(t,e,a){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):a?t.setAttribute("class",e):t.className=e}function Cv(t,e,a){const i=t.style,n=we(a);if(a&&!n){for(const r in a)fd(i,r,a[r]);if(e&&!we(e))for(const r in e)a[r]==null&&fd(i,r,"")}else{const r=i.display;n?e!==a&&(i.cssText=a):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Bs=/\s*!important$/;function fd(t,e,a){if(j(a))a.forEach(i=>fd(t,e,i));else if(a==null&&(a=""),e.startsWith("--"))t.setProperty(e,a);else{const i=Sv(t,e);Bs.test(a)?t.setProperty(Ua(i),a.replace(Bs,""),"important"):t[i]=a}}const Us=["Webkit","Moz","ms"],zr={};function Sv(t,e){const a=zr[e];if(a)return a;let i=Na(e);if(i!=="filter"&&i in t)return zr[e]=i;i=ac(i);for(let n=0;n<Us.length;n++){const r=Us[n]+i;if(r in t)return zr[e]=r}return e}const $s="http://www.w3.org/1999/xlink";function Av(t,e,a,i,n){if(i&&e.startsWith("xlink:"))a==null?t.removeAttributeNS($s,e.slice(6,e.length)):t.setAttributeNS($s,e,a);else{const r=pf(e);a==null||r&&!Xl(a)?t.removeAttribute(e):t.setAttribute(e,r?"":a)}}function Dv(t,e,a,i,n,r,d){if(e==="innerHTML"||e==="textContent"){i&&d(i,n,r),t[e]=a==null?"":a;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=a;const s=a==null?"":a;(t.value!==s||t.tagName==="OPTION")&&(t.value=s),a==null&&t.removeAttribute(e);return}let o=!1;if(a===""||a==null){const s=typeof t[e];s==="boolean"?a=Xl(a):a==null&&s==="string"?(a="",o=!0):s==="number"&&(a=0,o=!0)}try{t[e]=a}catch{}o&&t.removeAttribute(e)}const[Gc,Nv]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const a=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(a&&Number(a[1])<=53)}return[t,e]})();let hd=0;const Rv=Promise.resolve(),Ov=()=>{hd=0},Mv=()=>hd||(Rv.then(Ov),hd=Gc());function ya(t,e,a,i){t.addEventListener(e,a,i)}function Lv(t,e,a,i){t.removeEventListener(e,a,i)}function zv(t,e,a,i,n=null){const r=t._vei||(t._vei={}),d=r[e];if(i&&d)d.value=i;else{const[o,s]=Fv(e);if(i){const l=r[e]=Pv(i,n);ya(t,o,l,s)}else d&&(Lv(t,o,d,s),r[e]=void 0)}}const qs=/(?:Once|Passive|Capture)$/;function Fv(t){let e;if(qs.test(t)){e={};let a;for(;a=t.match(qs);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[Ua(t.slice(2)),e]}function Pv(t,e){const a=i=>{const n=i.timeStamp||Gc();(Nv||n>=a.attached-1)&&Ye(Vv(i,a.value),e,5,[i])};return a.value=t,a.attached=Mv(),a}function Vv(t,e){if(j(e)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},e.map(i=>n=>!n._stopped&&i&&i(n))}else return e}const Gs=/^on[a-z]/,jv=(t,e,a,i,n=!1,r,d,o,s)=>{e==="class"?Iv(t,i,n):e==="style"?Cv(t,a,i):jn(e)?Gd(e)||zv(t,e,a,i,d):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(t,e,i,n))?Dv(t,e,i,r,d,o,s):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Av(t,e,i,n))};function Bv(t,e,a,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Gs.test(e)&&U(a)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Gs.test(e)&&we(a)?!1:e in t}const Uv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ah.props;const Hs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?a=>cn(e,a):e};function $v(t){t.target.composing=!0}function Ks(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qv={created(t,{modifiers:{lazy:e,trim:a,number:i}},n){t._assign=Hs(n);const r=i||n.props&&n.props.type==="number";ya(t,e?"change":"input",d=>{if(d.target.composing)return;let o=t.value;a&&(o=o.trim()),r&&(o=Jr(o)),t._assign(o)}),a&&ya(t,"change",()=>{t.value=t.value.trim()}),e||(ya(t,"compositionstart",$v),ya(t,"compositionend",Ks),ya(t,"change",Ks))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:a,trim:i,number:n}},r){if(t._assign=Hs(r),t.composing||document.activeElement===t&&t.type!=="range"&&(a||i&&t.value.trim()===e||(n||t.type==="number")&&Jr(t.value)===e))return;const d=e==null?"":e;t.value!==d&&(t.value=d)}},Gv=["ctrl","shift","alt","meta"],Hv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gv.some(a=>t[`${a}Key`]&&!e.includes(a))},Kv=(t,e)=>(a,...i)=>{for(let n=0;n<e.length;n++){const r=Hv[e[n]];if(r&&r(a,e))return}return t(a,...i)},Wv=Me({patchProp:jv},_v);let Ws;function Qv(){return Ws||(Ws=av(Wv))}const Xv=(...t)=>{const e=Qv().createApp(...t),{mount:a}=e;return e.mount=i=>{const n=Yv(i);if(!n)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const d=a(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),d},e};function Yv(t){return we(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=function(t){const e=[];let a=0;for(let i=0;i<t.length;i++){let n=t.charCodeAt(i);n<128?e[a++]=n:n<2048?(e[a++]=n>>6|192,e[a++]=n&63|128):(n&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++i)&1023),e[a++]=n>>18|240,e[a++]=n>>12&63|128,e[a++]=n>>6&63|128,e[a++]=n&63|128):(e[a++]=n>>12|224,e[a++]=n>>6&63|128,e[a++]=n&63|128)}return e},Jv=function(t){const e=[];let a=0,i=0;for(;a<t.length;){const n=t[a++];if(n<128)e[i++]=String.fromCharCode(n);else if(n>191&&n<224){const r=t[a++];e[i++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=t[a++],d=t[a++],o=t[a++],s=((n&7)<<18|(r&63)<<12|(d&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(s&1023))}else{const r=t[a++],d=t[a++];e[i++]=String.fromCharCode((n&15)<<12|(r&63)<<6|d&63)}}return e.join("")},Zv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let n=0;n<t.length;n+=3){const r=t[n],d=n+1<t.length,o=d?t[n+1]:0,s=n+2<t.length,l=s?t[n+2]:0,c=r>>2,b=(r&3)<<4|o>>4;let h=(o&15)<<2|l>>6,m=l&63;s||(m=64,d||(h=64)),i.push(a[c],a[b],a[h],a[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let n=0;n<t.length;){const r=a[t.charAt(n++)],o=n<t.length?a[t.charAt(n)]:0;++n;const l=n<t.length?a[t.charAt(n)]:64;++n;const b=n<t.length?a[t.charAt(n)]:64;if(++n,r==null||o==null||l==null||b==null)throw Error();const h=r<<2|o>>4;if(i.push(h),l!==64){const m=o<<4&240|l>>2;if(i.push(m),b!==64){const k=l<<6&192|b;i.push(k)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},e0=function(t){const e=Hc(t);return Zv.encodeByteArray(e,!0)},Kc=function(t){return e0(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,i)=>{a?this.reject(a):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a0(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jn())}function i0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r0(){return Jn().indexOf("Electron/")>=0}function d0(){const t=Jn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function o0(){return Jn().indexOf("MSAppHost/")>=0}function s0(){return typeof indexedDB=="object"}function l0(){return new Promise((t,e)=>{try{let a=!0;const i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(i),t(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var r;e(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(a){e(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="FirebaseError";class Zn extends Error{constructor(e,a,i){super(a),this.code=e,this.customData=i,this.name=c0,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wc.prototype.create)}}class Wc{constructor(e,a,i){this.service=e,this.serviceName=a,this.errors=i}create(e,...a){const i=a[0]||{},n=`${this.service}/${e}`,r=this.errors[e],d=r?u0(r,i):"Error",o=`${this.serviceName}: ${d} (${n}).`;return new Zn(n,o,i)}}function u0(t,e){return t.replace(b0,(a,i)=>{const n=e[i];return n!=null?String(n):`<${i}?>`})}const b0=/\{\$([^}]+)}/g;function vd(t,e){if(t===e)return!0;const a=Object.keys(t),i=Object.keys(e);for(const n of a){if(!i.includes(n))return!1;const r=t[n],d=e[n];if(Qs(r)&&Qs(d)){if(!vd(r,d))return!1}else if(r!==d)return!1}for(const n of i)if(!a.includes(n))return!1;return!0}function Qs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,a,i){this.name=e,this.instanceFactory=a,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const i=new t0;if(this.instancesDeferred.set(a,i),this.isInitialized(a)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:a});n&&i.resolve(n)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){var a;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(a=e==null?void 0:e.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v0(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[a,i]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:n});i.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:a});for(const[r,d]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);i===o&&d.resolve(n)}return n}onInit(e,a){var i;const n=this.normalizeInstanceIdentifier(a),r=(i=this.onInitCallbacks.get(n))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const d=this.instances.get(n);return d&&e(d,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,a){const i=this.onInitCallbacks.get(a);if(!!i)for(const n of i)try{n(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:h0(e),options:a}),this.instances.set(e,i),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h0(t){return t===Ht?void 0:t}function v0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new f0(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const p0={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},g0=X.INFO,w0={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},y0=(t,e,...a)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),n=w0[e];if(n)console[n](`[${i}]  ${t.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=g0,this._logHandler=y0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const x0=(t,e)=>e.some(a=>t instanceof a);let Xs,Ys;function k0(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E0(){return Ys||(Ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xc=new WeakMap,md=new WeakMap,Yc=new WeakMap,Fr=new WeakMap,lo=new WeakMap;function T0(t){const e=new Promise((a,i)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",d)},r=()=>{a(Rt(t.result)),n()},d=()=>{i(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",d)});return e.then(a=>{a instanceof IDBCursor&&Xc.set(a,t)}).catch(()=>{}),lo.set(e,t),e}function _0(t){if(md.has(t))return;const e=new Promise((a,i)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",d),t.removeEventListener("abort",d)},r=()=>{a(),n()},d=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",d),t.addEventListener("abort",d)});md.set(t,e)}let pd={get(t,e,a){if(t instanceof IDBTransaction){if(e==="done")return md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return Rt(t[e])},set(t,e,a){return t[e]=a,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I0(t){pd=t(pd)}function C0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const i=t.call(Pr(this),e,...a);return Yc.set(i,e.sort?e.sort():[e]),Rt(i)}:E0().includes(t)?function(...e){return t.apply(Pr(this),e),Rt(Xc.get(this))}:function(...e){return Rt(t.apply(Pr(this),e))}}function S0(t){return typeof t=="function"?C0(t):(t instanceof IDBTransaction&&_0(t),x0(t,k0())?new Proxy(t,pd):t)}function Rt(t){if(t instanceof IDBRequest)return T0(t);if(Fr.has(t))return Fr.get(t);const e=S0(t);return e!==t&&(Fr.set(t,e),lo.set(e,t)),e}const Pr=t=>lo.get(t);function A0(t,e,{blocked:a,upgrade:i,blocking:n,terminated:r}={}){const d=indexedDB.open(t,e),o=Rt(d);return i&&d.addEventListener("upgradeneeded",s=>{i(Rt(d.result),s.oldVersion,s.newVersion,Rt(d.transaction))}),a&&d.addEventListener("blocked",()=>a()),o.then(s=>{r&&s.addEventListener("close",()=>r()),n&&s.addEventListener("versionchange",()=>n())}).catch(()=>{}),o}const D0=["get","getKey","getAll","getAllKeys","count"],N0=["put","add","delete","clear"],Vr=new Map;function Js(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const a=e.replace(/FromIndex$/,""),i=e!==a,n=N0.includes(a);if(!(a in(i?IDBIndex:IDBObjectStore).prototype)||!(n||D0.includes(a)))return;const r=async function(d,...o){const s=this.transaction(d,n?"readwrite":"readonly");let l=s.store;return i&&(l=l.index(o.shift())),(await Promise.all([l[a](...o),n&&s.done]))[0]};return Vr.set(e,r),r}I0(t=>gs(ps({},t),{get:(e,a,i)=>Js(e,a)||t.get(e,a,i),has:(e,a)=>!!Js(e,a)||t.has(e,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(O0(a)){const i=a.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(a=>a).join(" ")}}function O0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Zs="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Qc("@firebase/app"),M0="@firebase/app-compat",L0="@firebase/analytics-compat",z0="@firebase/analytics",F0="@firebase/app-check-compat",P0="@firebase/app-check",V0="@firebase/auth",j0="@firebase/auth-compat",B0="@firebase/database",U0="@firebase/database-compat",$0="@firebase/functions",q0="@firebase/functions-compat",G0="@firebase/installations",H0="@firebase/installations-compat",K0="@firebase/messaging",W0="@firebase/messaging-compat",Q0="@firebase/performance",X0="@firebase/performance-compat",Y0="@firebase/remote-config",J0="@firebase/remote-config-compat",Z0="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",am="@firebase/firestore-compat",im="firebase",nm="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",rm={[gd]:"fire-core",[M0]:"fire-core-compat",[z0]:"fire-analytics",[L0]:"fire-analytics-compat",[P0]:"fire-app-check",[F0]:"fire-app-check-compat",[V0]:"fire-auth",[j0]:"fire-auth-compat",[B0]:"fire-rtdb",[U0]:"fire-rtdb-compat",[$0]:"fire-fn",[q0]:"fire-fn-compat",[G0]:"fire-iid",[H0]:"fire-iid-compat",[K0]:"fire-fcm",[W0]:"fire-fcm-compat",[Q0]:"fire-perf",[X0]:"fire-perf-compat",[Y0]:"fire-rc",[J0]:"fire-rc-compat",[Z0]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[am]:"fire-fst-compat","fire-js":"fire-js",[im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Map,wd=new Map;function dm(t,e){try{t.container.addComponent(e)}catch(a){co.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,a)}}function En(t){const e=t.name;if(wd.has(e))return co.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const a of kn.values())dm(a,t);return!0}function om(t,e){const a=t.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ra=new Wc("app","Firebase",sm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,a,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ra.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=nm;function um(t,e={}){typeof e!="object"&&(e={name:e});const a=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),i=a.name;if(typeof i!="string"||!i)throw ra.create("bad-app-name",{appName:String(i)});const n=kn.get(i);if(n){if(vd(t,n.options)&&vd(a,n.config))return n;throw ra.create("duplicate-app",{appName:i})}const r=new m0(i);for(const o of wd.values())r.addComponent(o);const d=new lm(t,a,r);return kn.set(i,d),d}function bm(t=Jc){const e=kn.get(t);if(!e)throw ra.create("no-app",{appName:t});return e}function Ca(t,e,a){var i;let n=(i=rm[t])!==null&&i!==void 0?i:t;a&&(n+=`-${a}`);const r=n.match(/\s|\//),d=e.match(/\s|\//);if(r||d){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&d&&o.push("and"),d&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),co.warn(o.join(" "));return}En(new wi(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firebase-heartbeat-database",hm=1,yi="firebase-heartbeat-store";let jr=null;function Zc(){return jr||(jr=A0(fm,hm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yi)}}}).catch(t=>{throw ra.create("storage-open",{originalErrorMessage:t.message})})),jr}async function vm(t){var e;try{return(await Zc()).transaction(yi).objectStore(yi).get(eu(t))}catch(a){throw ra.create("storage-get",{originalErrorMessage:(e=a)===null||e===void 0?void 0:e.message})}}async function el(t,e){var a;try{const n=(await Zc()).transaction(yi,"readwrite");return await n.objectStore(yi).put(e,eu(t)),n.done}catch(i){throw ra.create("storage-set",{originalErrorMessage:(a=i)===null||a===void 0?void 0:a.message})}}function eu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=1024,pm=30*24*60*60*1e3;class gm{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new ym(a),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(n=>n.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const r=new Date(n.date).valueOf();return Date.now()-r<=pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tl(),{heartbeatsToSend:a,unsentEntries:i}=wm(this._heartbeatsCache.heartbeats),n=Kc(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function tl(){return new Date().toISOString().substring(0,10)}function wm(t,e=mm){const a=[];let i=t.slice();for(const n of t){const r=a.find(d=>d.agent===n.agent);if(r){if(r.dates.push(n.date),al(a)>e){r.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),al(a)>e){a.pop();break}i=i.slice(1)}return{heartbeatsToSend:a,unsentEntries:i}}class ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var a;if(await this._canUseIndexedDBPromise){const n=await this.read();return el(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var a;if(await this._canUseIndexedDBPromise){const n=await this.read();return el(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function al(t){return Kc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){En(new wi("platform-logger",e=>new R0(e),"PRIVATE")),En(new wi("heartbeat",e=>new gm(e),"PRIVATE")),Ca(gd,Zs,t),Ca(gd,Zs,"esm2017"),Ca("fire-js","")}xm("");var km=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},S,uo=uo||{},F=km||self;function Tn(){}function yd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ri(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Em(t){return Object.prototype.hasOwnProperty.call(t,Br)&&t[Br]||(t[Br]=++Tm)}var Br="closure_uid_"+(1e9*Math.random()>>>0),Tm=0;function _m(t,e,a){return t.call.apply(t.bind,arguments)}function Im(t,e,a){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ie(t,e,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ie=_m:Ie=Im,Ie.apply(null,arguments)}function an(t,e){var a=Array.prototype.slice.call(arguments,1);return function(){var i=a.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Ae(t,e){function a(){}a.prototype=e.prototype,t.Z=e.prototype,t.prototype=new a,t.prototype.constructor=t,t.Vb=function(i,n,r){for(var d=Array(arguments.length-2),o=2;o<arguments.length;o++)d[o-2]=arguments[o];return e.prototype[n].apply(i,d)}}function jt(){this.s=this.s,this.o=this.o}var Cm=0;jt.prototype.s=!1;jt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Cm!=0)&&Em(this)};jt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let a=0;a<t.length;a++)if(a in t&&t[a]===e)return a;return-1},au=Array.prototype.forEach?function(t,e,a){Array.prototype.forEach.call(t,e,a)}:function(t,e,a){const i=t.length,n=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in n&&e.call(a,n[r],r,t)};function Sm(t){e:{var e=wp;const a=t.length,i=typeof t=="string"?t.split(""):t;for(let n=0;n<a;n++)if(n in i&&e.call(void 0,i[n],n,t)){e=n;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function il(t){return Array.prototype.concat.apply([],arguments)}function bo(t){const e=t.length;if(0<e){const a=Array(e);for(let i=0;i<e;i++)a[i]=t[i];return a}return[]}function _n(t){return/^[\s\xa0]*$/.test(t)}var nl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ze(t,e){return t.indexOf(e)!=-1}function Ur(t,e){return t<e?-1:t>e?1:0}var Fe;e:{var rl=F.navigator;if(rl){var dl=rl.userAgent;if(dl){Fe=dl;break e}}Fe=""}function fo(t,e,a){for(const i in t)e.call(a,t[i],i,t)}function iu(t){const e={};for(const a in t)e[a]=t[a];return e}var ol="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nu(t,e){let a,i;for(let n=1;n<arguments.length;n++){i=arguments[n];for(a in i)t[a]=i[a];for(let r=0;r<ol.length;r++)a=ol[r],Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}}function ho(t){return ho[" "](t),t}ho[" "]=Tn;function Am(t){var e=Rm;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Dm=ze(Fe,"Opera"),Oa=ze(Fe,"Trident")||ze(Fe,"MSIE"),ru=ze(Fe,"Edge"),xd=ru||Oa,du=ze(Fe,"Gecko")&&!(ze(Fe.toLowerCase(),"webkit")&&!ze(Fe,"Edge"))&&!(ze(Fe,"Trident")||ze(Fe,"MSIE"))&&!ze(Fe,"Edge"),Nm=ze(Fe.toLowerCase(),"webkit")&&!ze(Fe,"Edge");function ou(){var t=F.document;return t?t.documentMode:void 0}var In;e:{var $r="",qr=function(){var t=Fe;if(du)return/rv:([^\);]+)(\)|;)/.exec(t);if(ru)return/Edge\/([\d\.]+)/.exec(t);if(Oa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Nm)return/WebKit\/(\S+)/.exec(t);if(Dm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qr&&($r=qr?qr[1]:""),Oa){var Gr=ou();if(Gr!=null&&Gr>parseFloat($r)){In=String(Gr);break e}}In=$r}var Rm={};function Om(){return Am(function(){let t=0;const e=nl(String(In)).split("."),a=nl("9").split("."),i=Math.max(e.length,a.length);for(let d=0;t==0&&d<i;d++){var n=e[d]||"",r=a[d]||"";do{if(n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],n[0].length==0&&r[0].length==0)break;t=Ur(n[1].length==0?0:parseInt(n[1],10),r[1].length==0?0:parseInt(r[1],10))||Ur(n[2].length==0,r[2].length==0)||Ur(n[2],r[2]),n=n[3],r=r[3]}while(t==0)}return 0<=t})}var kd;if(F.document&&Oa){var sl=ou();kd=sl||parseInt(In,10)||void 0}else kd=void 0;var Mm=kd,Lm=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Tn,e),F.removeEventListener("test",Tn,e)}catch{}return t}();function Oe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};function xi(t,e){if(Oe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(du){e:{try{ho(e.nodeName);var n=!0;break e}catch{}n=!1}n||(e=null)}}else a=="mouseover"?e=t.fromElement:a=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xi.Z.h.call(this)}}Ae(xi,Oe);var zm={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oi="closure_listenable_"+(1e6*Math.random()|0),Fm=0;function Pm(t,e,a,i,n){this.listener=t,this.proxy=null,this.src=e,this.type=a,this.capture=!!i,this.ia=n,this.key=++Fm,this.ca=this.fa=!1}function er(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function tr(t){this.src=t,this.g={},this.h=0}tr.prototype.add=function(t,e,a,i,n){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var d=Td(t,e,i,n);return-1<d?(e=t[d],a||(e.fa=!1)):(e=new Pm(e,this.src,r,!!i,n),e.fa=a,t.push(e)),e};function Ed(t,e){var a=e.type;if(a in t.g){var i=t.g[a],n=tu(i,e),r;(r=0<=n)&&Array.prototype.splice.call(i,n,1),r&&(er(e),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Td(t,e,a,i){for(var n=0;n<t.length;++n){var r=t[n];if(!r.ca&&r.listener==e&&r.capture==!!a&&r.ia==i)return n}return-1}var vo="closure_lm_"+(1e6*Math.random()|0),Hr={};function su(t,e,a,i,n){if(i&&i.once)return cu(t,e,a,i,n);if(Array.isArray(e)){for(var r=0;r<e.length;r++)su(t,e[r],a,i,n);return null}return a=go(a),t&&t[Oi]?t.N(e,a,Ri(i)?!!i.capture:!!i,n):lu(t,e,a,!1,i,n)}function lu(t,e,a,i,n,r){if(!e)throw Error("Invalid event type");var d=Ri(n)?!!n.capture:!!n,o=po(t);if(o||(t[vo]=o=new tr(t)),a=o.add(e,a,i,d,r),a.proxy)return a;if(i=Vm(),a.proxy=i,i.src=t,i.listener=a,t.addEventListener)Lm||(n=d),n===void 0&&(n=!1),t.addEventListener(e.toString(),i,n);else if(t.attachEvent)t.attachEvent(bu(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Vm(){function t(a){return e.call(t.src,t.listener,a)}var e=jm;return t}function cu(t,e,a,i,n){if(Array.isArray(e)){for(var r=0;r<e.length;r++)cu(t,e[r],a,i,n);return null}return a=go(a),t&&t[Oi]?t.O(e,a,Ri(i)?!!i.capture:!!i,n):lu(t,e,a,!0,i,n)}function uu(t,e,a,i,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)uu(t,e[r],a,i,n);else i=Ri(i)?!!i.capture:!!i,a=go(a),t&&t[Oi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],a=Td(r,a,i,n),-1<a&&(er(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=po(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Td(e,a,i,n)),(a=-1<t?e[t]:null)&&mo(a))}function mo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Oi])Ed(e.i,t);else{var a=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(a,i,t.capture):e.detachEvent?e.detachEvent(bu(a),i):e.addListener&&e.removeListener&&e.removeListener(i),(a=po(e))?(Ed(a,t),a.h==0&&(a.src=null,e[vo]=null)):er(t)}}}function bu(t){return t in Hr?Hr[t]:Hr[t]="on"+t}function jm(t,e){if(t.ca)t=!0;else{e=new xi(e,this);var a=t.listener,i=t.ia||t.src;t.fa&&mo(t),t=a.call(i,e)}return t}function po(t){return t=t[vo],t instanceof tr?t:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(t){return typeof t=="function"?t:(t[Kr]||(t[Kr]=function(e){return t.handleEvent(e)}),t[Kr])}function xe(){jt.call(this),this.i=new tr(this),this.P=this,this.I=null}Ae(xe,jt);xe.prototype[Oi]=!0;xe.prototype.removeEventListener=function(t,e,a,i){uu(this,t,e,a,i)};function Ce(t,e){var a,i=t.I;if(i)for(a=[];i;i=i.I)a.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Oe(e,t);else if(e instanceof Oe)e.target=e.target||t;else{var n=e;e=new Oe(i,t),nu(e,n)}if(n=!0,a)for(var r=a.length-1;0<=r;r--){var d=e.g=a[r];n=nn(d,i,!0,e)&&n}if(d=e.g=t,n=nn(d,i,!0,e)&&n,n=nn(d,i,!1,e)&&n,a)for(r=0;r<a.length;r++)d=e.g=a[r],n=nn(d,i,!1,e)&&n}xe.prototype.M=function(){if(xe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var a=t.g[e],i=0;i<a.length;i++)er(a[i]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,a,i){return this.i.add(String(t),e,!1,a,i)};xe.prototype.O=function(t,e,a,i){return this.i.add(String(t),e,!0,a,i)};function nn(t,e,a,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var n=!0,r=0;r<e.length;++r){var d=e[r];if(d&&!d.ca&&d.capture==a){var o=d.listener,s=d.ia||d.src;d.fa&&Ed(t.i,d),n=o.call(s,i)!==!1&&n}}return n&&!i.defaultPrevented}var wo=F.JSON.stringify;function Bm(){var t=hu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Um{constructor(){this.h=this.g=null}add(e,a){const i=fu.get();i.set(e,a),this.h?this.h.next=i:this.g=i,this.h=i}}var fu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $m,t=>t.reset());class $m{constructor(){this.next=this.g=this.h=null}set(e,a){this.h=e,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function qm(t){F.setTimeout(()=>{throw t},0)}function yo(t,e){_d||Gm(),Id||(_d(),Id=!0),hu.add(t,e)}var _d;function Gm(){var t=F.Promise.resolve(void 0);_d=function(){t.then(Hm)}}var Id=!1,hu=new Um;function Hm(){for(var t;t=Bm();){try{t.h.call(t.g)}catch(a){qm(a)}var e=fu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Id=!1}function ar(t,e){xe.call(this),this.h=t||1,this.g=e||F,this.j=Ie(this.kb,this),this.l=Date.now()}Ae(ar,xe);S=ar.prototype;S.da=!1;S.S=null;S.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ce(this,"tick"),this.da&&(xo(this),this.start()))}};S.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xo(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}S.M=function(){ar.Z.M.call(this),xo(this),delete this.g};function ko(t,e,a){if(typeof t=="function")a&&(t=Ie(t,a));else if(t&&typeof t.handleEvent=="function")t=Ie(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function vu(t){t.g=ko(()=>{t.g=null,t.i&&(t.i=!1,vu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Km extends jt{constructor(e,a){super(),this.m=e,this.j=a,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vu(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(t){jt.call(this),this.h=t,this.g={}}Ae(ki,jt);var ll=[];function mu(t,e,a,i){Array.isArray(a)||(a&&(ll[0]=a.toString()),a=ll);for(var n=0;n<a.length;n++){var r=su(e,a[n],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function pu(t){fo(t.g,function(e,a){this.g.hasOwnProperty(a)&&mo(e)},t),t.g={}}ki.prototype.M=function(){ki.Z.M.call(this),pu(this)};ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ir(){this.g=!0}ir.prototype.Aa=function(){this.g=!1};function Wm(t,e,a,i,n,r){t.info(function(){if(t.g)if(r)for(var d="",o=r.split("&"),s=0;s<o.length;s++){var l=o[s].split("=");if(1<l.length){var c=l[0];l=l[1];var b=c.split("_");d=2<=b.length&&b[1]=="type"?d+(c+"="+l+"&"):d+(c+"=redacted&")}}else d=null;else d=r;return"XMLHTTP REQ ("+i+") [attempt "+n+"]: "+e+`
`+a+`
`+d})}function Qm(t,e,a,i,n,r,d){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+n+"]: "+e+`
`+a+`
`+r+" "+d})}function xa(t,e,a,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ym(t,a)+(i?" "+i:"")})}function Xm(t,e){t.info(function(){return"TIMEOUT: "+e})}ir.prototype.info=function(){};function Ym(t,e){if(!t.g)return e;if(!e)return null;try{var a=JSON.parse(e);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var i=a[t];if(!(2>i.length)){var n=i[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if(r!="noop"&&r!="stop"&&r!="close")for(var d=1;d<n.length;d++)n[d]=""}}}}return wo(a)}catch{return e}}var ua={},cl=null;function nr(){return cl=cl||new xe}ua.Ma="serverreachability";function gu(t){Oe.call(this,ua.Ma,t)}Ae(gu,Oe);function Ei(t){const e=nr();Ce(e,new gu(e))}ua.STAT_EVENT="statevent";function wu(t,e){Oe.call(this,ua.STAT_EVENT,t),this.stat=e}Ae(wu,Oe);function Pe(t){const e=nr();Ce(e,new wu(e,t))}ua.Na="timingevent";function yu(t,e){Oe.call(this,ua.Na,t),this.size=e}Ae(yu,Oe);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var rr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},xu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Eo(){}Eo.prototype.h=null;function ul(t){return t.h||(t.h=t.i())}function ku(){}var Li={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function To(){Oe.call(this,"d")}Ae(To,Oe);function _o(){Oe.call(this,"c")}Ae(_o,Oe);var Cd;function dr(){}Ae(dr,Eo);dr.prototype.g=function(){return new XMLHttpRequest};dr.prototype.i=function(){return{}};Cd=new dr;function zi(t,e,a,i){this.l=t,this.j=e,this.m=a,this.X=i||1,this.V=new ki(this),this.P=Jm,t=xd?125:void 0,this.W=new ar(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Eu}function Eu(){this.i=null,this.g="",this.h=!1}var Jm=45e3,Sd={},Cn={};S=zi.prototype;S.setTimeout=function(t){this.P=t};function Ad(t,e,a){t.K=1,t.v=sr(kt(e)),t.s=a,t.U=!0,Tu(t,null)}function Tu(t,e){t.F=Date.now(),Fi(t),t.A=kt(t.v);var a=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Nu(a.h,"t",i),t.C=0,a=t.l.H,t.h=new Eu,t.g=Yu(t.l,a?e:null,!t.s),0<t.O&&(t.L=new Km(Ie(t.Ia,t,t.g),t.O)),mu(t.V,t.g,"readystatechange",t.gb),e=t.H?iu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ei(),Wm(t.j,t.u,t.A,t.m,t.X,t.s)}S.gb=function(t){t=t.target;const e=this.L;e&&pt(t)==3?e.l():this.Ia(t)};S.Ia=function(t){try{if(t==this.g)e:{const c=pt(this.g);var e=this.g.Da();const b=this.g.ba();if(!(3>c)&&(c!=3||xd||this.g&&(this.h.h||this.g.ga()||vl(this.g)))){this.I||c!=4||e==7||(e==8||0>=b?Ei(3):Ei(2)),or(this);var a=this.g.ba();this.N=a;t:if(_u(this)){var i=vl(this.g);t="";var n=i.length,r=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Xt(this),si(this);var d="";break t}this.h.i=new F.TextDecoder}for(e=0;e<n;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==n-1});i.splice(0,n),this.h.g+=t,this.C=0,d=this.h.g}else d=this.g.ga();if(this.i=a==200,Qm(this.j,this.u,this.A,this.m,this.X,c,a),this.i){if(this.$&&!this.J){t:{if(this.g){var o,s=this.g;if((o=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_n(o)){var l=o;break t}}l=null}if(a=l)xa(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dd(this,a);else{this.i=!1,this.o=3,Pe(12),Xt(this),si(this);break e}}this.U?(Iu(this,c,d),xd&&this.i&&c==3&&(mu(this.V,this.W,"tick",this.fb),this.W.start())):(xa(this.j,this.m,d,null),Dd(this,d)),c==4&&Xt(this),this.i&&!this.I&&(c==4?Ku(this.l,this):(this.i=!1,Fi(this)))}else a==400&&0<d.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Xt(this),si(this)}}}catch{}finally{}};function _u(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Iu(t,e,a){let i=!0,n;for(;!t.I&&t.C<a.length;)if(n=Zm(t,a),n==Cn){e==4&&(t.o=4,Pe(14),i=!1),xa(t.j,t.m,null,"[Incomplete Response]");break}else if(n==Sd){t.o=4,Pe(15),xa(t.j,t.m,a,"[Invalid Chunk]"),i=!1;break}else xa(t.j,t.m,n,null),Dd(t,n);_u(t)&&n!=Cn&&n!=Sd&&(t.h.g="",t.C=0),e!=4||a.length!=0||t.h.h||(t.o=1,Pe(16),i=!1),t.i=t.i&&i,i?0<a.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+a.length),Mo(e),e.L=!0,Pe(11))):(xa(t.j,t.m,a,"[Invalid Chunked Response]"),Xt(t),si(t))}S.fb=function(){if(this.g){var t=pt(this.g),e=this.g.ga();this.C<e.length&&(or(this),Iu(this,t,e),this.i&&t!=4&&Fi(this))}};function Zm(t,e){var a=t.C,i=e.indexOf(`
`,a);return i==-1?Cn:(a=Number(e.substring(a,i)),isNaN(a)?Sd:(i+=1,i+a>e.length?Cn:(e=e.substr(i,a),t.C=i+a,e)))}S.cancel=function(){this.I=!0,Xt(this)};function Fi(t){t.Y=Date.now()+t.P,Cu(t,t.P)}function Cu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi(Ie(t.eb,t),e)}function or(t){t.B&&(F.clearTimeout(t.B),t.B=null)}S.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Xm(this.j,this.A),this.K!=2&&(Ei(),Pe(17)),Xt(this),this.o=2,si(this)):Cu(this,this.Y-t)};function si(t){t.l.G==0||t.I||Ku(t.l,t)}function Xt(t){or(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xo(t.W),pu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dd(t,e){try{var a=t.l;if(a.G!=0&&(a.g==t||Nd(a.i,t))){if(a.I=t.N,!t.J&&Nd(a.i,t)&&a.G==3){try{var i=a.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var n=i;if(n[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Nn(a),ur(a);else break e;Oo(a),Pe(18)}}else a.ta=n[1],0<a.ta-a.U&&37500>n[2]&&a.N&&a.A==0&&!a.v&&(a.v=Mi(Ie(a.ab,a),6e3));if(1>=Mu(a.i)&&a.ka){try{a.ka()}catch{}a.ka=void 0}}else Yt(a,11)}else if((t.J||a.g==t)&&Nn(a),!_n(e))for(n=a.Ca.g.parse(e),e=0;e<n.length;e++){let l=n[e];if(a.U=l[0],l=l[1],a.G==2)if(l[0]=="c"){a.J=l[1],a.la=l[2];const c=l[3];c!=null&&(a.ma=c,a.h.info("VER="+a.ma));const b=l[4];b!=null&&(a.za=b,a.h.info("SVER="+a.za));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(i=1.5*h,a.K=i,a.h.info("backChannelRequestTimeoutMs_="+i)),i=a;const m=t.g;if(m){const k=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(k){var r=i.i;!r.g&&(ze(k,"spdy")||ze(k,"quic")||ze(k,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(So(r,r.h),r.h=null))}if(i.D){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.sa=A,oe(i.F,i.D,A))}}a.G=3,a.j&&a.j.xa(),a.$&&(a.O=Date.now()-t.F,a.h.info("Handshake RTT: "+a.O+"ms")),i=a;var d=t;if(i.oa=Xu(i,i.H?i.la:null,i.W),d.J){Lu(i.i,d);var o=d,s=i.K;s&&o.setTimeout(s),o.B&&(or(o),Fi(o)),i.g=d}else Gu(i);0<a.l.length&&br(a)}else l[0]!="stop"&&l[0]!="close"||Yt(a,7);else a.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Yt(a,7):Ro(a):l[0]!="noop"&&a.j&&a.j.wa(l),a.A=0)}}Ei(4)}catch{}}function ep(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(yd(t)){for(var e=[],a=t.length,i=0;i<a;i++)e.push(t[i]);return e}e=[],a=0;for(i in t)e[a++]=t[i];return e}function Io(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yd(t)||typeof t=="string")au(t,e,void 0);else{if(t.T&&typeof t.T=="function")var a=t.T();else if(t.R&&typeof t.R=="function")a=void 0;else if(yd(t)||typeof t=="string"){a=[];for(var i=t.length,n=0;n<i;n++)a.push(n)}else for(n in a=[],i=0,t)a[i++]=n;i=ep(t),n=i.length;for(var r=0;r<n;r++)e.call(void 0,i[r],a&&a[r],t)}}function Ga(t,e){this.h={},this.g=[],this.i=0;var a=arguments.length;if(1<a){if(a%2)throw Error("Uneven number of arguments");for(var i=0;i<a;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Ga)for(a=t.T(),i=0;i<a.length;i++)this.set(a[i],t.get(a[i]));else for(i in t)this.set(i,t[i])}S=Ga.prototype;S.R=function(){Co(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};S.T=function(){return Co(this),this.g.concat()};function Co(t){if(t.i!=t.g.length){for(var e=0,a=0;e<t.g.length;){var i=t.g[e];da(t.h,i)&&(t.g[a++]=i),e++}t.g.length=a}if(t.i!=t.g.length){var n={};for(a=e=0;e<t.g.length;)i=t.g[e],da(n,i)||(t.g[a++]=i,n[i]=1),e++;t.g.length=a}}S.get=function(t,e){return da(this.h,t)?this.h[t]:e};S.set=function(t,e){da(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};S.forEach=function(t,e){for(var a=this.T(),i=0;i<a.length;i++){var n=a[i],r=this.get(n);t.call(e,r,n,this)}};function da(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Su=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tp(t,e){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var i=t[a].indexOf("="),n=null;if(0<=i){var r=t[a].substring(0,i);n=t[a].substring(i+1)}else r=t[a];e(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function oa(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof oa){this.g=e!==void 0?e:t.g,Sn(this,t.j),this.s=t.s,An(this,t.i),Dn(this,t.m),this.l=t.l,e=t.h;var a=new Ti;a.i=e.i,e.g&&(a.g=new Ga(e.g),a.h=e.h),bl(this,a),this.o=t.o}else t&&(a=String(t).match(Su))?(this.g=!!e,Sn(this,a[1]||"",!0),this.s=li(a[2]||""),An(this,a[3]||"",!0),Dn(this,a[4]),this.l=li(a[5]||"",!0),bl(this,a[6]||"",!0),this.o=li(a[7]||"")):(this.g=!!e,this.h=new Ti(null,this.g))}oa.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ai(e,fl,!0),":");var a=this.i;return(a||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ai(e,fl,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.i&&a.charAt(0)!="/"&&t.push("/"),t.push(ai(a,a.charAt(0)=="/"?dp:rp,!0))),(a=this.h.toString())&&t.push("?",a),(a=this.o)&&t.push("#",ai(a,sp)),t.join("")};function kt(t){return new oa(t)}function Sn(t,e,a){t.j=a?li(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function An(t,e,a){t.i=a?li(e,!0):e}function Dn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bl(t,e,a){e instanceof Ti?(t.h=e,lp(t.h,t.g)):(a||(e=ai(e,op)),t.h=new Ti(e,t.g))}function oe(t,e,a){t.h.set(e,a)}function sr(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ap(t){return t instanceof oa?kt(t):new oa(t,void 0)}function ip(t,e,a,i){var n=new oa(null,void 0);return t&&Sn(n,t),e&&An(n,e),a&&Dn(n,a),i&&(n.l=i),n}function li(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ai(t,e,a){return typeof t=="string"?(t=encodeURI(t).replace(e,np),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function np(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fl=/[#\/\?@]/g,rp=/[#\?:]/g,dp=/[#\?]/g,op=/[#\?@]/g,sp=/#/g;function Ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bt(t){t.g||(t.g=new Ga,t.h=0,t.i&&tp(t.i,function(e,a){t.add(decodeURIComponent(e.replace(/\+/g," ")),a)}))}S=Ti.prototype;S.add=function(t,e){Bt(this),this.i=null,t=Ha(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(e),this.h+=1,this};function Au(t,e){Bt(t),e=Ha(t,e),da(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,da(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Co(t)))}function Du(t,e){return Bt(t),e=Ha(t,e),da(t.g.h,e)}S.forEach=function(t,e){Bt(this),this.g.forEach(function(a,i){au(a,function(n){t.call(e,n,i,this)},this)},this)};S.T=function(){Bt(this);for(var t=this.g.R(),e=this.g.T(),a=[],i=0;i<e.length;i++)for(var n=t[i],r=0;r<n.length;r++)a.push(e[i]);return a};S.R=function(t){Bt(this);var e=[];if(typeof t=="string")Du(this,t)&&(e=il(e,this.g.get(Ha(this,t))));else{t=this.g.R();for(var a=0;a<t.length;a++)e=il(e,t[a])}return e};S.set=function(t,e){return Bt(this),this.i=null,t=Ha(this,t),Du(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Nu(t,e,a){Au(t,e),0<a.length&&(t.i=null,t.g.set(Ha(t,e),bo(a)),t.h+=a.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),a=0;a<e.length;a++){var i=e[a],n=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var d=n;i[r]!==""&&(d+="="+encodeURIComponent(String(i[r]))),t.push(d)}}return this.i=t.join("&")};function Ha(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lp(t,e){e&&!t.j&&(Bt(t),t.i=null,t.g.forEach(function(a,i){var n=i.toLowerCase();i!=n&&(Au(this,i),Nu(this,n,a))},t)),t.j=e}var cp=class{constructor(t,e){this.h=t,this.g=e}};function Ru(t){this.l=t||up,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ea&&F.g.Ea()&&F.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var up=10;function Ou(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Mu(t){return t.h?1:t.g?t.g.size:0}function Nd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function So(t,e){t.g?t.g.add(e):t.h=e}function Lu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ru.prototype.cancel=function(){if(this.i=zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const a of t.g.values())e=e.concat(a.D);return e}return bo(t.i)}function Ao(){}Ao.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};Ao.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function bp(){this.g=new Ao}function fp(t,e,a){const i=a||"";try{Io(t,function(n,r){let d=n;Ri(n)&&(d=wo(n)),e.push(i+r+"="+encodeURIComponent(d))})}catch(n){throw e.push(i+"type="+encodeURIComponent("_badmap")),n}}function hp(t,e){const a=new ir;if(F.Image){const i=new Image;i.onload=an(rn,a,i,"TestLoadImage: loaded",!0,e),i.onerror=an(rn,a,i,"TestLoadImage: error",!1,e),i.onabort=an(rn,a,i,"TestLoadImage: abort",!1,e),i.ontimeout=an(rn,a,i,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function rn(t,e,a,i,n){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,n(i)}catch{}}function Pi(t){this.l=t.$b||null,this.j=t.ib||!1}Ae(Pi,Eo);Pi.prototype.g=function(){return new lr(this.l,this.j)};Pi.prototype.i=function(t){return function(){return t}}({});function lr(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Do,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(lr,xe);var Do=0;S=lr.prototype;S.open=function(t,e){if(this.readyState!=Do)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=Do};S.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Fu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}S.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vi(this):_i(this),this.readyState==3&&Fu(this)}};S.Ua=function(t){this.g&&(this.response=this.responseText=t,Vi(this))};S.Ta=function(t){this.g&&(this.response=t,Vi(this))};S.ha=function(){this.g&&Vi(this)};function Vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var a=e.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vp=F.JSON.parse;function he(t){xe.call(this),this.headers=new Ga,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pu,this.K=this.L=!1}Ae(he,xe);var Pu="",mp=/^https?$/i,pp=["POST","PUT"];S=he.prototype;S.ea=function(t,e,a,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cd.g(),this.C=this.u?ul(this.u):ul(Cd),this.g.onreadystatechange=Ie(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){hl(this,r);return}t=a||"";const n=new Ga(this.headers);i&&Io(i,function(r,d){n.set(d,r)}),i=Sm(n.T()),a=F.FormData&&t instanceof F.FormData,!(0<=tu(pp,e))||i||a||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n.forEach(function(r,d){this.g.setRequestHeader(d,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bu(this),0<this.B&&((this.K=gp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.pa,this)):this.A=ko(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){hl(this,r)}};function gp(t){return Oa&&Om()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function wp(t){return t.toLowerCase()=="content-type"}S.pa=function(){typeof uo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))};function hl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vu(t),cr(t)}function Vu(t){t.D||(t.D=!0,Ce(t,"complete"),Ce(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),cr(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cr(this,!0)),he.Z.M.call(this)};S.Fa=function(){this.s||(this.F||this.v||this.l?ju(this):this.cb())};S.cb=function(){ju(this)};function ju(t){if(t.h&&typeof uo!="undefined"&&(!t.C[1]||pt(t)!=4||t.ba()!=2)){if(t.v&&pt(t)==4)ko(t.Fa,0,t);else if(Ce(t,"readystatechange"),pt(t)==4){t.h=!1;try{const o=t.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var a;if(!(a=e)){var i;if(i=o===0){var n=String(t.H).match(Su)[1]||null;if(!n&&F.self&&F.self.location){var r=F.self.location.protocol;n=r.substr(0,r.length-1)}i=!mp.test(n?n.toLowerCase():"")}a=i}if(a)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var d=2<pt(t)?t.g.statusText:""}catch{d=""}t.j=d+" ["+t.ba()+"]",Vu(t)}}finally{cr(t)}}}}function cr(t,e){if(t.g){Bu(t);const a=t.g,i=t.C[0]?Tn:null;t.g=null,t.C=null,e||Ce(t,"ready");try{a.onreadystatechange=i}catch{}}}function Bu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function pt(t){return t.g?t.g.readyState:0}S.ba=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};S.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vp(e)}};function vl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Pu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Da=function(){return this.m};S.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function yp(t){let e="";return fo(t,function(a,i){e+=i,e+=":",e+=a,e+=`\r
`}),e}function No(t,e,a){e:{for(i in a){var i=!1;break e}i=!0}i||(a=yp(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):oe(t,e,a))}function Za(t,e,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||e}function Uu(t){this.za=0,this.l=[],this.h=new ir,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Za("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Za("baseRetryDelayMs",5e3,t),this.$a=Za("retryDelaySeedMs",1e4,t),this.Ya=Za("forwardChannelMaxRetries",2,t),this.ra=Za("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ru(t&&t.concurrentRequestLimit),this.Ca=new bp,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}S=Uu.prototype;S.ma=8;S.G=1;function Ro(t){if($u(t),t.G==3){var e=t.V++,a=kt(t.F);oe(a,"SID",t.J),oe(a,"RID",e),oe(a,"TYPE","terminate"),ji(t,a),e=new zi(t,t.h,e,void 0),e.K=2,e.v=sr(kt(a)),a=!1,F.navigator&&F.navigator.sendBeacon&&(a=F.navigator.sendBeacon(e.v.toString(),"")),!a&&F.Image&&(new Image().src=e.v,a=!0),a||(e.g=Yu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Fi(e)}Qu(t)}S.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ur(t){t.g&&(Mo(t),t.g.cancel(),t.g=null)}function $u(t){ur(t),t.u&&(F.clearTimeout(t.u),t.u=null),Nn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Wr(t,e){t.l.push(new cp(t.Za++,e)),t.G==3&&br(t)}function br(t){Ou(t.i)||t.m||(t.m=!0,yo(t.Ha,t),t.C=0)}function xp(t,e){return Mu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Mi(Ie(t.Ha,t,e),Wu(t,t.C)),t.C++,!0)}S.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const n=new zi(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=iu(r),nu(r,this.P)):r=this.P),this.o===null&&(n.H=r),this.ja)e:{for(var e=0,a=0;a<this.l.length;a++){t:{var i=this.l[a];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=a;break e}if(e===4096||a===this.l.length-1){e=a+1;break e}}e=1e3}else e=1e3;e=qu(this,n,e),a=kt(this.F),oe(a,"RID",t),oe(a,"CVER",22),this.D&&oe(a,"X-HTTP-Session-Id",this.D),ji(this,a),this.o&&r&&No(a,this.o,r),So(this.i,n),this.Ra&&oe(a,"TYPE","init"),this.ja?(oe(a,"$req",e),oe(a,"SID","null"),n.$=!0,Ad(n,a,null)):Ad(n,a,e),this.G=2}}else this.G==3&&(t?ml(this,t):this.l.length==0||Ou(this.i)||ml(this))};function ml(t,e){var a;e?a=e.m:a=t.V++;const i=kt(t.F);oe(i,"SID",t.J),oe(i,"RID",a),oe(i,"AID",t.U),ji(t,i),t.o&&t.s&&No(i,t.o,t.s),a=new zi(t,t.h,a,t.C+1),t.o===null&&(a.H=t.s),e&&(t.l=e.D.concat(t.l)),e=qu(t,a,1e3),a.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),So(t.i,a),Ad(a,i,e)}function ji(t,e){t.j&&Io({},function(a,i){oe(e,i,a)})}function qu(t,e,a){a=Math.min(t.l.length,a);var i=t.j?Ie(t.j.Oa,t.j,t):null;e:{var n=t.l;let r=-1;for(;;){const d=["count="+a];r==-1?0<a?(r=n[0].h,d.push("ofs="+r)):r=0:d.push("ofs="+r);let o=!0;for(let s=0;s<a;s++){let l=n[s].h;const c=n[s].g;if(l-=r,0>l)r=Math.max(0,n[s].h-100),o=!1;else try{fp(c,d,"req"+l+"_")}catch{i&&i(c)}}if(o){i=d.join("&");break e}}}return t=t.l.splice(0,a),e.D=t,i}function Gu(t){t.g||t.u||(t.Y=1,yo(t.Ga,t),t.A=0)}function Oo(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Mi(Ie(t.Ga,t),Wu(t,t.A)),t.A++,!0)}S.Ga=function(){if(this.u=null,Hu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Mi(Ie(this.bb,this),t)}};S.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pe(10),ur(this),Hu(this))};function Mo(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function Hu(t){t.g=new zi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=kt(t.oa);oe(e,"RID","rpc"),oe(e,"SID",t.J),oe(e,"CI",t.N?"0":"1"),oe(e,"AID",t.U),ji(t,e),oe(e,"TYPE","xmlhttp"),t.o&&t.s&&No(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var a=t.g;t=t.la,a.K=1,a.v=sr(kt(e)),a.s=null,a.U=!0,Tu(a,t)}S.ab=function(){this.v!=null&&(this.v=null,ur(this),Oo(this),Pe(19))};function Nn(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function Ku(t,e){var a=null;if(t.g==e){Nn(t),Mo(t),t.g=null;var i=2}else if(Nd(t.i,e))a=e.D,Lu(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){a=e.s?e.s.length:0,e=Date.now()-e.F;var n=t.C;i=nr(),Ce(i,new yu(i,a)),br(t)}else Gu(t);else if(n=e.o,n==3||n==0&&0<t.I||!(i==1&&xp(t,e)||i==2&&Oo(t)))switch(a&&0<a.length&&(e=t.i,e.i=e.i.concat(a)),n){case 1:Yt(t,5);break;case 4:Yt(t,10);break;case 3:Yt(t,6);break;default:Yt(t,2)}}}function Wu(t,e){let a=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(a*=2),a*e}function Yt(t,e){if(t.h.info("Error code "+e),e==2){var a=null;t.j&&(a=null);var i=Ie(t.jb,t);a||(a=new oa("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Sn(a,"https"),sr(a)),hp(a.toString(),i)}else Pe(2);t.G=0,t.j&&t.j.va(e),Qu(t),$u(t)}S.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pe(2)):(this.h.info("Failed to ping google.com"),Pe(1))};function Qu(t){t.G=0,t.I=-1,t.j&&((zu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,bo(t.l),t.l.length=0),t.j.ua())}function Xu(t,e,a){let i=ap(a);if(i.i!="")e&&An(i,e+"."+i.i),Dn(i,i.m);else{const n=F.location;i=ip(n.protocol,e?e+"."+n.hostname:n.hostname,+n.port,a)}return t.aa&&fo(t.aa,function(n,r){oe(i,r,n)}),e=t.D,a=t.sa,e&&a&&oe(i,e,a),oe(i,"VER",t.ma),ji(t,i),i}function Yu(t,e,a){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=a&&t.Ba&&!t.qa?new he(new Pi({ib:!0})):new he(t.qa),e.L=t.H,e}function Ju(){}S=Ju.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Oa=function(){};function Rn(){if(Oa&&!(10<=Number(Mm)))throw Error("Environmental error: no available transport.")}Rn.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){xe.call(this),this.g=new Uu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!_n(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_n(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ka(this)}Ae(Qe,xe);Qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,a=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),yo(Ie(t.hb,t,e))),Pe(0),t.W=e,t.aa=a||{},t.N=t.X,t.F=Xu(t,null,t.W),br(t)};Qe.prototype.close=function(){Ro(this.g)};Qe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Wr(this.g,e)}else this.v?(e={},e.__data__=wo(t),Wr(this.g,e)):Wr(this.g,t)};Qe.prototype.M=function(){this.g.j=null,delete this.j,Ro(this.g),delete this.g,Qe.Z.M.call(this)};function Zu(t){To.call(this);var e=t.__sm__;if(e){e:{for(const a in e){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(Zu,To);function eb(){_o.call(this),this.status=1}Ae(eb,_o);function Ka(t){this.g=t}Ae(Ka,Ju);Ka.prototype.xa=function(){Ce(this.g,"a")};Ka.prototype.wa=function(t){Ce(this.g,new Zu(t))};Ka.prototype.va=function(t){Ce(this.g,new eb)};Ka.prototype.ua=function(){Ce(this.g,"b")};Rn.prototype.createWebChannel=Rn.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;rr.NO_ERROR=0;rr.TIMEOUT=8;rr.HTTP_ERROR=6;xu.COMPLETE="complete";ku.EventType=Li;Li.OPEN="a";Li.CLOSE="b";Li.ERROR="c";Li.MESSAGE="d";xe.prototype.listen=xe.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.La;he.prototype.getLastErrorCode=he.prototype.Da;he.prototype.getStatus=he.prototype.ba;he.prototype.getResponseJson=he.prototype.Qa;he.prototype.getResponseText=he.prototype.ga;he.prototype.send=he.prototype.ea;var kp=function(){return new Rn},Ep=function(){return nr()},Qr=rr,Tp=xu,_p=ua,pl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ip=Pi,dn=ku,Cp=he;const gl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa="9.8.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Qc("@firebase/firestore");function wl(){return sa.logLevel}function N(t,...e){if(sa.logLevel<=X.DEBUG){const a=e.map(Lo);sa.debug(`Firestore (${Wa}): ${t}`,...a)}}function zt(t,...e){if(sa.logLevel<=X.ERROR){const a=e.map(Lo);sa.error(`Firestore (${Wa}): ${t}`,...a)}}function yl(t,...e){if(sa.logLevel<=X.WARN){const a=e.map(Lo);sa.warn(`Firestore (${Wa}): ${t}`,...a)}}function Lo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Wa}) INTERNAL ASSERTION FAILED: `+t;throw zt(e),new Error(e)}function ie(t,e){t||V()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Zn{constructor(e,a){super(e,a),this.code=e,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ap{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,a){e.enqueueRetryable(()=>a(Ue.UNAUTHENTICATED))}shutdown(){}}class Dp{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,a){let i=this.i;const n=s=>this.i!==i?(i=this.i,a(s)):Promise.resolve();let r=new aa;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new aa,e.enqueueRetryable(()=>n(this.currentUser))};const d=()=>{const s=r;e.enqueueRetryable(async()=>{await s.promise,await n(this.currentUser)})},o=s=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=s,this.auth.addAuthTokenListener(this.o),d()};this.t.onInit(s=>o(s)),setTimeout(()=>{if(!this.auth){const s=this.t.getImmediate({optional:!0});s?o(s):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new aa)}},0),d()}getToken(){const e=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(i=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ie(typeof i.accessToken=="string"),new Sp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ue(e)}}class Np{constructor(e,a,i){this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",a);const n=e.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Rp{constructor(e,a,i){this.h=e,this.l=a,this.m=i}getToken(){return Promise.resolve(new Np(this.h,this.l,this.m))}start(e,a){e.enqueueRetryable(()=>a(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Op{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mp{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,a){const i=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const d=r.token!==this.p;return this.p=r.token,N("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?a(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const n=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>n(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?n(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(a=>a?(ie(typeof a.token=="string"),this.p=a.token,new Op(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),a=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(a);else for(let i=0;i<t;i++)a[i]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const n=Lp(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<a&&(i+=e.charAt(n[r]%e.length))}return i}}function Y(t,e){return t<e?-1:t>e?1:0}function Ma(t,e,a){return t.length===e.length&&t.every((i,n)=>a(i,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,a){if(this.seconds=e,this.nanoseconds=a,a<0)throw new M(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new M(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(e<-62135596800)throw new M(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const a=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*a));return new ve(a,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new ve(0,0))}static max(){return new $(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,a,i){a===void 0?a=0:a>e.length&&V(),i===void 0?i=e.length-a:i>e.length-a&&V(),this.segments=e,this.offset=a,this.len=i}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const a=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(i=>{a.push(i)}):a.push(e),this.construct(a)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==e.get(a))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==e.get(a))return!1;return!0}forEach(e){for(let a=this.offset,i=this.limit();a<i;a++)e(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,a){const i=Math.min(e.length,a.length);for(let n=0;n<i;n++){const r=e.get(n),d=a.get(n);if(r<d)return-1;if(r>d)return 1}return e.length<a.length?-1:e.length>a.length?1:0}}class se extends Ii{construct(e,a,i){return new se(e,a,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const a=[];for(const i of e){if(i.indexOf("//")>=0)throw new M(y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);a.push(...i.split("/").filter(n=>n.length>0))}return new se(a)}static emptyPath(){return new se([])}}const zp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends Ii{construct(e,a,i){return new Ne(e,a,i)}static isValidIdentifier(e){return zp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const a=[];let i="",n=0;const r=()=>{if(i.length===0)throw new M(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(i),i=""};let d=!1;for(;n<e.length;){const o=e[n];if(o==="\\"){if(n+1===e.length)throw new M(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const s=e[n+1];if(s!=="\\"&&s!=="."&&s!=="`")throw new M(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=s,n+=2}else o==="`"?(d=!d,n++):o!=="."||d?(i+=o,n++):(r(),n++)}if(r(),d)throw new M(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(a)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,a){return se.comparator(e.path,a.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}function Fp(t,e){const a=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,n=$.fromTimestamp(i===1e9?new ve(a+1,0):new ve(a,i));return new Ft(n,L.empty(),e)}function Pp(t){return new Ft(t.readTime,t.key,-1)}class Ft{constructor(e,a,i){this.readTime=e,this.documentKey=a,this.largestBatchId=i}static min(){return new Ft($.min(),L.empty(),-1)}static max(){return new Ft($.max(),L.empty(),-1)}}function Vp(t,e){let a=t.readTime.compareTo(e.readTime);return a!==0?a:(a=L.comparator(t.documentKey,e.documentKey),a!==0?a:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==jp)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(e){return this.next(void 0,e)}next(e,a){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(e,this.result):new x((i,n)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,n)},this.catchCallback=r=>{this.wrapFailure(a,r).next(i,n)}})}toPromise(){return new Promise((e,a)=>{this.next(e,a)})}wrapUserFunction(e){try{const a=e();return a instanceof x?a:x.resolve(a)}catch(a){return x.reject(a)}}wrapSuccess(e,a){return e?this.wrapUserFunction(()=>e(a)):x.resolve(a)}wrapFailure(e,a){return e?this.wrapUserFunction(()=>e(a)):x.reject(a)}static resolve(e){return new x((a,i)=>{a(e)})}static reject(e){return new x((a,i)=>{i(e)})}static waitFor(e){return new x((a,i)=>{let n=0,r=0,d=!1;e.forEach(o=>{++n,o.next(()=>{++r,d&&r===n&&a()},s=>i(s))}),d=!0,r===n&&a()})}static or(e){let a=x.resolve(!1);for(const i of e)a=a.next(n=>n?x.resolve(n):i());return a}static forEach(e,a){const i=[];return e.forEach((n,r)=>{i.push(a.call(this,n,r))}),this.waitFor(i)}static mapArray(e,a){return new x((i,n)=>{const r=e.length,d=new Array(r);let o=0;for(let s=0;s<r;s++){const l=s;a(e[l]).next(c=>{d[l]=c,++o,o===r&&i(d)},c=>n(c))}})}static doWhile(e,a){return new x((i,n)=>{const r=()=>{e()===!0?a().next(()=>{r()},n):i()};r()})}}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,a){this.previousValue=e,a&&(a.sequenceNumberHandler=i=>this.it(i),this.rt=i=>a.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){let e=0;for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&e++;return e}function ba(t,e){for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&e(a,t[a])}function ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zo.ot=-1;class pe{constructor(e,a){this.comparator=e,this.root=a||Ee.EMPTY}insert(e,a){return new pe(this.comparator,this.root.insert(e,a,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let a=this.root;for(;!a.isEmpty();){const i=this.comparator(e,a.key);if(i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}indexOf(e){let a=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(e,i.key);if(n===0)return a+i.left.size;n<0?i=i.left:(a+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((a,i)=>(e(a,i),!1))}toString(){const e=[];return this.inorderTraversal((a,i)=>(e.push(`${a}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new on(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new on(this.root,e,this.comparator,!1)}getReverseIterator(){return new on(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new on(this.root,e,this.comparator,!0)}}class on{constructor(e,a,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=a?i(e.key,a):1,a&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const a={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,a,i,n,r){this.key=e,this.value=a,this.color=i!=null?i:Ee.RED,this.left=n!=null?n:Ee.EMPTY,this.right=r!=null?r:Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,a,i,n,r){return new Ee(e!=null?e:this.key,a!=null?a:this.value,i!=null?i:this.color,n!=null?n:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,a,i){let n=this;const r=i(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,a,i),null):r===0?n.copy(null,a,null,null,null):n.copy(null,null,null,null,n.right.insert(e,a,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,a){let i,n=this;if(a(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,a),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),a(e,n.key)===0){if(n.right.isEmpty())return Ee.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,a))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,a)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,a,i,n){return this}insert(t,e,a){return new Ee(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((a,i)=>(e(a),!1))}forEachInRange(e,a){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;a(n.key)}}forEachWhile(e,a){let i;for(i=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const a=this.data.getIteratorFrom(e);return a.hasNext()?a.getNext().key:null}getIterator(){return new kl(this.data.getIterator())}getIteratorFrom(e){return new kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let a=this;return a.size<e.size&&(a=e,e=this),e.forEach(i=>{a=a.add(i)}),a}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const a=this.data.getIterator(),i=e.data.getIterator();for(;a.hasNext();){const n=a.getNext().key,r=i.getNext().key;if(this.comparator(n,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(a=>{e.push(a)}),e}toString(){const e=[];return this.forEach(a=>e.push(a)),"SortedSet("+e.toString()+")"}copy(e){const a=new me(this.comparator);return a.data=e,a}}class kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Je([])}unionWith(e){let a=new me(Ne.comparator);for(const i of this.fields)a=a.add(i);for(const i of e)a=a.add(i);return new Je(a.toArray())}covers(e){for(const a of this.fields)if(a.isPrefixOf(e))return!0;return!1}isEqual(e){return Ma(this.fields,e.fields,(a,i)=>a.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const a=atob(e);return new Se(a)}static fromUint8Array(e){const a=function(i){let n="";for(let r=0;r<i.length;++r)n+=String.fromCharCode(i[r]);return n}(e);return new Se(a)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const a=new Uint8Array(e.length);for(let i=0;i<e.length;i++)a[i]=e.charCodeAt(i);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Up=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(t){if(ie(!!t),typeof t=="string"){let e=0;const a=Up.exec(t);if(ie(!!a),a[1]){let n=a[1];n=(n+"000000000").substr(0,9),e=Number(n)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function La(t){return typeof t=="string"?Se.fromBase64String(t):Se.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){var e,a;return((a=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function nb(t){const e=t.mapValue.fields.__previous_value__;return ib(e)?nb(e):e}function Ci(t){const e=Pt(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,a,i,n,r,d,o,s){this.databaseId=e,this.appId=a,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=d,this.autoDetectLongPolling=o,this.useFetchStreams=s}}class za{constructor(e,a){this.projectId=e,this.database=a||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){return t==null}function On(t){return t===0&&1/t==-1/0}function qp(t){return typeof t=="number"&&Number.isInteger(t)&&!On(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function la(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ib(t)?4:Gp(t)?9007199254740991:10:V()}function bt(t,e){if(t===e)return!0;const a=la(t);if(a!==la(e))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ci(t).isEqual(Ci(e));case 3:return function(i,n){if(typeof i.timestampValue=="string"&&typeof n.timestampValue=="string"&&i.timestampValue.length===n.timestampValue.length)return i.timestampValue===n.timestampValue;const r=Pt(i.timestampValue),d=Pt(n.timestampValue);return r.seconds===d.seconds&&r.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,n){return La(i.bytesValue).isEqual(La(n.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,n){return fe(i.geoPointValue.latitude)===fe(n.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(n.geoPointValue.longitude)}(t,e);case 2:return function(i,n){if("integerValue"in i&&"integerValue"in n)return fe(i.integerValue)===fe(n.integerValue);if("doubleValue"in i&&"doubleValue"in n){const r=fe(i.doubleValue),d=fe(n.doubleValue);return r===d?On(r)===On(d):isNaN(r)&&isNaN(d)}return!1}(t,e);case 9:return Ma(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(i,n){const r=i.mapValue.fields||{},d=n.mapValue.fields||{};if(xl(r)!==xl(d))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(d[o]===void 0||!bt(r[o],d[o])))return!1;return!0}(t,e);default:return V()}}function Si(t,e){return(t.values||[]).find(a=>bt(a,e))!==void 0}function Fa(t,e){if(t===e)return 0;const a=la(t),i=la(e);if(a!==i)return Y(a,i);switch(a){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(n,r){const d=fe(n.integerValue||n.doubleValue),o=fe(r.integerValue||r.doubleValue);return d<o?-1:d>o?1:d===o?0:isNaN(d)?isNaN(o)?0:-1:1}(t,e);case 3:return El(t.timestampValue,e.timestampValue);case 4:return El(Ci(t),Ci(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(n,r){const d=La(n),o=La(r);return d.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(n,r){const d=n.split("/"),o=r.split("/");for(let s=0;s<d.length&&s<o.length;s++){const l=Y(d[s],o[s]);if(l!==0)return l}return Y(d.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(n,r){const d=Y(fe(n.latitude),fe(r.latitude));return d!==0?d:Y(fe(n.longitude),fe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(n,r){const d=n.values||[],o=r.values||[];for(let s=0;s<d.length&&s<o.length;++s){const l=Fa(d[s],o[s]);if(l)return l}return Y(d.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(n,r){if(n===sn.mapValue&&r===sn.mapValue)return 0;if(n===sn.mapValue)return 1;if(r===sn.mapValue)return-1;const d=n.fields||{},o=Object.keys(d),s=r.fields||{},l=Object.keys(s);o.sort(),l.sort();for(let c=0;c<o.length&&c<l.length;++c){const b=Y(o[c],l[c]);if(b!==0)return b;const h=Fa(d[o[c]],s[l[c]]);if(h!==0)return h}return Y(o.length,l.length)}(t.mapValue,e.mapValue);default:throw V()}}function El(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const a=Pt(t),i=Pt(e),n=Y(a.seconds,i.seconds);return n!==0?n:Y(a.nanos,i.nanos)}function Sa(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const n=Pt(i);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?La(t.bytesValue).toBase64():"referenceValue"in t?(a=t.referenceValue,L.fromName(a).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let n="[",r=!0;for(const d of i.values||[])r?r=!1:n+=",",n+=Rd(d);return n+"]"}(t.arrayValue):"mapValue"in t?function(i){const n=Object.keys(i.fields||{}).sort();let r="{",d=!0;for(const o of n)d?d=!1:r+=",",r+=`${o}:${Rd(i.fields[o])}`;return r+"}"}(t.mapValue):V();var e,a}function Od(t){return!!t&&"integerValue"in t}function Fo(t){return!!t&&"arrayValue"in t}function Tl(t){return!!t&&"nullValue"in t}function _l(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fn(t){return!!t&&"mapValue"in t}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ba(t.mapValue.fields,(a,i)=>e.mapValue.fields[a]=ci(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let a=0;a<(t.arrayValue.values||[]).length;++a)e.arrayValue.values[a]=ci(t.arrayValue.values[a]);return e}return Object.assign({},t)}function Gp(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let a=this.value;for(let i=0;i<e.length-1;++i)if(a=(a.mapValue.fields||{})[e.get(i)],!fn(a))return null;return a=(a.mapValue.fields||{})[e.lastSegment()],a||null}}set(e,a){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(a)}setAll(e){let a=Ne.emptyPath(),i={},n=[];e.forEach((d,o)=>{if(!a.isImmediateParentOf(o)){const s=this.getFieldsMap(a);this.applyChanges(s,i,n),i={},n=[],a=o.popLast()}d?i[o.lastSegment()]=ci(d):n.push(o.lastSegment())});const r=this.getFieldsMap(a);this.applyChanges(r,i,n)}delete(e){const a=this.field(e.popLast());fn(a)&&a.mapValue.fields&&delete a.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let i=0;i<e.length;++i){let n=a.mapValue.fields[e.get(i)];fn(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},a.mapValue.fields[e.get(i)]=n),a=n}return a.mapValue.fields}applyChanges(e,a,i){ba(a,(n,r)=>e[n]=r);for(const n of i)delete e[n]}clone(){return new $e(ci(this.value))}}function rb(t){const e=[];return ba(t.fields,(a,i)=>{const n=new Ne([a]);if(fn(i)){const r=rb(i.mapValue).fields;if(r.length===0)e.push(n);else for(const d of r)e.push(n.child(d))}else e.push(n)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,a,i,n,r,d){this.key=e,this.documentType=a,this.version=i,this.readTime=n,this.data=r,this.documentState=d}static newInvalidDocument(e){return new Te(e,0,$.min(),$.min(),$e.empty(),0)}static newFoundDocument(e,a,i){return new Te(e,1,a,$.min(),i,0)}static newNoDocument(e,a){return new Te(e,2,a,$.min(),$e.empty(),0)}static newUnknownDocument(e,a){return new Te(e,3,a,$.min(),$e.empty(),2)}convertToFoundDocument(e,a){return this.version=e,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,a=null,i=[],n=[],r=null,d=null,o=null){this.path=e,this.collectionGroup=a,this.orderBy=i,this.filters=n,this.limit=r,this.startAt=d,this.endAt=o,this.ut=null}}function Il(t,e=null,a=[],i=[],n=null,r=null,d=null){return new Hp(t,e,a,i,n,r,d)}function Po(t){const e=B(t);if(e.ut===null){let a=e.path.canonicalString();e.collectionGroup!==null&&(a+="|cg:"+e.collectionGroup),a+="|f:",a+=e.filters.map(i=>{return(n=i).field.canonicalString()+n.op.toString()+Sa(n.value);var n}).join(","),a+="|ob:",a+=e.orderBy.map(i=>function(n){return n.field.canonicalString()+n.dir}(i)).join(","),fr(e.limit)||(a+="|l:",a+=e.limit),e.startAt&&(a+="|lb:",a+=e.startAt.inclusive?"b:":"a:",a+=e.startAt.position.map(i=>Sa(i)).join(",")),e.endAt&&(a+="|ub:",a+=e.endAt.inclusive?"a:":"b:",a+=e.endAt.position.map(i=>Sa(i)).join(",")),e.ut=a}return e.ut}function Kp(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(a=>{return`${(i=a).field.canonicalString()} ${i.op} ${Sa(i.value)}`;var i}).join(", ")}]`),fr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(a=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(a)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(a=>Sa(a)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(a=>Sa(a)).join(",")),`Target(${e})`}function Vo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(a=t.filters[n],i=e.filters[n],a.op!==i.op||!a.field.isEqual(i.field)||!bt(a.value,i.value))return!1;var a,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sl(t.startAt,e.startAt)&&Sl(t.endAt,e.endAt)}function Md(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class qe extends class{}{constructor(e,a,i){super(),this.field=e,this.op=a,this.value=i}static create(e,a,i){return e.isKeyField()?a==="in"||a==="not-in"?this.ct(e,a,i):new Wp(e,a,i):a==="array-contains"?new Yp(e,i):a==="in"?new Jp(e,i):a==="not-in"?new Zp(e,i):a==="array-contains-any"?new eg(e,i):new qe(e,a,i)}static ct(e,a,i){return a==="in"?new Qp(e,i):new Xp(e,i)}matches(e){const a=e.data.field(this.field);return this.op==="!="?a!==null&&this.at(Fa(a,this.value)):a!==null&&la(this.value)===la(a)&&this.at(Fa(a,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Wp extends qe{constructor(e,a,i){super(e,a,i),this.key=L.fromName(i.referenceValue)}matches(e){const a=L.comparator(e.key,this.key);return this.at(a)}}class Qp extends qe{constructor(e,a){super(e,"in",a),this.keys=db("in",a)}matches(e){return this.keys.some(a=>a.isEqual(e.key))}}class Xp extends qe{constructor(e,a){super(e,"not-in",a),this.keys=db("not-in",a)}matches(e){return!this.keys.some(a=>a.isEqual(e.key))}}function db(t,e){var a;return(((a=e.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(i=>L.fromName(i.referenceValue))}class Yp extends qe{constructor(e,a){super(e,"array-contains",a)}matches(e){const a=e.data.field(this.field);return Fo(a)&&Si(a.arrayValue,this.value)}}class Jp extends qe{constructor(e,a){super(e,"in",a)}matches(e){const a=e.data.field(this.field);return a!==null&&Si(this.value.arrayValue,a)}}class Zp extends qe{constructor(e,a){super(e,"not-in",a)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=e.data.field(this.field);return a!==null&&!Si(this.value.arrayValue,a)}}class eg extends qe{constructor(e,a){super(e,"array-contains-any",a)}matches(e){const a=e.data.field(this.field);return!(!Fo(a)||!a.arrayValue.values)&&a.arrayValue.values.some(i=>Si(this.value.arrayValue,i))}}class Mn{constructor(e,a){this.position=e,this.inclusive=a}}class Aa{constructor(e,a="asc"){this.field=e,this.dir=a}}function tg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Cl(t,e,a){let i=0;for(let n=0;n<t.position.length;n++){const r=e[n],d=t.position[n];if(r.field.isKeyField()?i=L.comparator(L.fromName(d.referenceValue),a.key):i=Fa(d,a.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Sl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let a=0;a<t.position.length;a++)if(!bt(t.position[a],e.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,a=null,i=[],n=[],r=null,d="F",o=null,s=null){this.path=e,this.collectionGroup=a,this.explicitOrderBy=i,this.filters=n,this.limit=r,this.limitType=d,this.startAt=o,this.endAt=s,this.lt=null,this.ft=null,this.startAt,this.endAt}}function ag(t,e,a,i,n,r,d,o){return new $i(t,e,a,i,n,r,d,o)}function jo(t){return new $i(t)}function ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ob(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sb(t){for(const e of t.filters)if(e.ht())return e.field;return null}function ng(t){return t.collectionGroup!==null}function Ai(t){const e=B(t);if(e.lt===null){e.lt=[];const a=sb(e),i=ob(e);if(a!==null&&i===null)a.isKeyField()||e.lt.push(new Aa(a)),e.lt.push(new Aa(Ne.keyField(),"asc"));else{let n=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(n=!0);if(!n){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Aa(Ne.keyField(),r))}}}return e.lt}function ca(t){const e=B(t);if(!e.ft)if(e.limitType==="F")e.ft=Il(e.path,e.collectionGroup,Ai(e),e.filters,e.limit,e.startAt,e.endAt);else{const a=[];for(const r of Ai(e)){const d=r.dir==="desc"?"asc":"desc";a.push(new Aa(r.field,d))}const i=e.endAt?new Mn(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Mn(e.startAt.position,e.startAt.inclusive):null;e.ft=Il(e.path,e.collectionGroup,a,e.filters,e.limit,i,n)}return e.ft}function rg(t,e,a){return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,a,t.startAt,t.endAt)}function hr(t,e){return Vo(ca(t),ca(e))&&t.limitType===e.limitType}function lb(t){return`${Po(ca(t))}|lt:${t.limitType}`}function Ld(t){return`Query(target=${Kp(ca(t))}; limitType=${t.limitType})`}function Bo(t,e){return e.isFoundDocument()&&function(a,i){const n=i.key.path;return a.collectionGroup!==null?i.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(n):L.isDocumentKey(a.path)?a.path.isEqual(n):a.path.isImmediateParentOf(n)}(t,e)&&function(a,i){for(const n of a.explicitOrderBy)if(!n.field.isKeyField()&&i.data.field(n.field)===null)return!1;return!0}(t,e)&&function(a,i){for(const n of a.filters)if(!n.matches(i))return!1;return!0}(t,e)&&function(a,i){return!(a.startAt&&!function(n,r,d){const o=Cl(n,r,d);return n.inclusive?o<=0:o<0}(a.startAt,Ai(a),i)||a.endAt&&!function(n,r,d){const o=Cl(n,r,d);return n.inclusive?o>=0:o>0}(a.endAt,Ai(a),i))}(t,e)}function dg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cb(t){return(e,a)=>{let i=!1;for(const n of Ai(t)){const r=og(n,e,a);if(r!==0)return r;i=i||n.field.isKeyField()}return 0}}function og(t,e,a){const i=t.field.isKeyField()?L.comparator(e.key,a.key):function(n,r,d){const o=r.data.field(n),s=d.data.field(n);return o!==null&&s!==null?Fa(o,s):V()}(t.field,e,a);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:On(e)?"-0":e}}function bb(t){return{integerValue:""+t}}function sg(t,e){return qp(e)?bb(e):ub(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._=void 0}}function lg(t,e,a){return t instanceof Ln?function(i,n){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return n&&(r.fields.__previous_value__=n),{mapValue:r}}(a,e):t instanceof Di?hb(t,e):t instanceof Ni?vb(t,e):function(i,n){const r=fb(i,n),d=Al(r)+Al(i._t);return Od(r)&&Od(i._t)?bb(d):ub(i.wt,d)}(t,e)}function cg(t,e,a){return t instanceof Di?hb(t,e):t instanceof Ni?vb(t,e):a}function fb(t,e){return t instanceof zn?Od(a=e)||function(i){return!!i&&"doubleValue"in i}(a)?e:{integerValue:0}:null;var a}class Ln extends vr{}class Di extends vr{constructor(e){super(),this.elements=e}}function hb(t,e){const a=mb(e);for(const i of t.elements)a.some(n=>bt(n,i))||a.push(i);return{arrayValue:{values:a}}}class Ni extends vr{constructor(e){super(),this.elements=e}}function vb(t,e){let a=mb(e);for(const i of t.elements)a=a.filter(n=>!bt(n,i));return{arrayValue:{values:a}}}class zn extends vr{constructor(e,a){super(),this.wt=e,this._t=a}}function Al(t){return fe(t.integerValue||t.doubleValue)}function mb(t){return Fo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ug(t,e){return t.field.isEqual(e.field)&&function(a,i){return a instanceof Di&&i instanceof Di||a instanceof Ni&&i instanceof Ni?Ma(a.elements,i.elements,bt):a instanceof zn&&i instanceof zn?bt(a._t,i._t):a instanceof Ln&&i instanceof Ln}(t.transform,e.transform)}class bg{constructor(e,a){this.version=e,this.transformResults=a}}class dt{constructor(e,a){this.updateTime=e,this.exists=a}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mr{}function pb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uo(t.key,dt.none()):new qi(t.key,t.data,dt.none());{const a=t.data,i=$e.empty();let n=new me(Ne.comparator);for(let r of e.fields)if(!n.has(r)){let d=a.field(r);d===null&&r.length>1&&(r=r.popLast(),d=a.field(r)),d===null?i.delete(r):i.set(r,d),n=n.add(r)}return new Ut(t.key,i,new Je(n.toArray()),dt.none())}}function fg(t,e,a){t instanceof qi?function(i,n,r){const d=i.value.clone(),o=Nl(i.fieldTransforms,n,r.transformResults);d.setAll(o),n.convertToFoundDocument(r.version,d).setHasCommittedMutations()}(t,e,a):t instanceof Ut?function(i,n,r){if(!hn(i.precondition,n))return void n.convertToUnknownDocument(r.version);const d=Nl(i.fieldTransforms,n,r.transformResults),o=n.data;o.setAll(gb(i)),o.setAll(d),n.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,a):function(i,n,r){n.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,a)}function ui(t,e,a,i){return t instanceof qi?function(n,r,d,o){if(!hn(n.precondition,r))return d;const s=n.value.clone(),l=Rl(n.fieldTransforms,o,r);return s.setAll(l),r.convertToFoundDocument(r.version,s).setHasLocalMutations(),null}(t,e,a,i):t instanceof Ut?function(n,r,d,o){if(!hn(n.precondition,r))return d;const s=Rl(n.fieldTransforms,o,r),l=r.data;return l.setAll(gb(n)),l.setAll(s),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),d===null?null:d.unionWith(n.fieldMask.fields).unionWith(n.fieldTransforms.map(c=>c.field))}(t,e,a,i):function(n,r,d){return hn(n.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):d}(t,e,a)}function hg(t,e){let a=null;for(const i of t.fieldTransforms){const n=e.data.field(i.field),r=fb(i.transform,n||null);r!=null&&(a===null&&(a=$e.empty()),a.set(i.field,r))}return a||null}function Dl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(a,i){return a===void 0&&i===void 0||!(!a||!i)&&Ma(a,i,(n,r)=>ug(n,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qi extends mr{constructor(e,a,i,n=[]){super(),this.key=e,this.value=a,this.precondition=i,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Ut extends mr{constructor(e,a,i,n,r=[]){super(),this.key=e,this.data=a,this.fieldMask=i,this.precondition=n,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function gb(t){const e=new Map;return t.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const i=t.data.field(a);e.set(a,i)}}),e}function Nl(t,e,a){const i=new Map;ie(t.length===a.length);for(let n=0;n<a.length;n++){const r=t[n],d=r.transform,o=e.data.field(r.field);i.set(r.field,cg(d,o,a[n]))}return i}function Rl(t,e,a){const i=new Map;for(const n of t){const r=n.transform,d=a.data.field(n.field);i.set(n.field,lg(r,d,e))}return i}class Uo extends mr{constructor(e,a){super(),this.key=e,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vg extends mr{constructor(e,a){super(),this.key=e,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,G;function pg(t){switch(t){default:return V();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function wb(t){if(t===void 0)return zt("GRPC error has no .code"),y.UNKNOWN;switch(t){case be.OK:return y.OK;case be.CANCELLED:return y.CANCELLED;case be.UNKNOWN:return y.UNKNOWN;case be.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case be.INTERNAL:return y.INTERNAL;case be.UNAVAILABLE:return y.UNAVAILABLE;case be.UNAUTHENTICATED:return y.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case be.NOT_FOUND:return y.NOT_FOUND;case be.ALREADY_EXISTS:return y.ALREADY_EXISTS;case be.PERMISSION_DENIED:return y.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case be.ABORTED:return y.ABORTED;case be.OUT_OF_RANGE:return y.OUT_OF_RANGE;case be.UNIMPLEMENTED:return y.UNIMPLEMENTED;case be.DATA_LOSS:return y.DATA_LOSS;default:return V()}}(G=be||(be={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,a){this.mapKeyFn=e,this.equalsFn=a,this.inner={},this.innerSize=0}get(e){const a=this.mapKeyFn(e),i=this.inner[a];if(i!==void 0){for(const[n,r]of i)if(this.equalsFn(n,e))return r}}has(e){return this.get(e)!==void 0}set(e,a){const i=this.mapKeyFn(e),n=this.inner[i];if(n===void 0)return this.inner[i]=[[e,a]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,a]);n.push([e,a]),this.innerSize++}delete(e){const a=this.mapKeyFn(e),i=this.inner[a];if(i===void 0)return!1;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return i.length===1?delete this.inner[a]:i.splice(n,1),this.innerSize--,!0;return!1}forEach(e){ba(this.inner,(a,i)=>{for(const[n,r]of i)e(n,r)})}isEmpty(){return ab(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new pe(L.comparator);function Et(){return gg}const yb=new pe(L.comparator);function ii(...t){let e=yb;for(const a of t)e=e.insert(a.key,a);return e}function xb(t){let e=yb;return t.forEach((a,i)=>e=e.insert(a,i.overlayedDocument)),e}function Jt(){return bi()}function kb(){return bi()}function bi(){return new Qa(t=>t.toString(),(t,e)=>t.isEqual(e))}const wg=new pe(L.comparator),yg=new me(L.comparator);function q(...t){let e=yg;for(const a of t)e=e.add(a);return e}const xg=new me(Y);function Eb(){return xg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,a,i,n,r){this.snapshotVersion=e,this.targetChanges=a,this.targetMismatches=i,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,a){const i=new Map;return i.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,a)),new pr($.min(),i,Eb(),Et(),q())}}class Gi{constructor(e,a,i,n,r){this.resumeToken=e,this.current=a,this.addedDocuments=i,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,a){return new Gi(Se.EMPTY_BYTE_STRING,a,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,a,i,n){this.gt=e,this.removedTargetIds=a,this.key=i,this.yt=n}}class Tb{constructor(e,a){this.targetId=e,this.It=a}}class _b{constructor(e,a,i=Se.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=a,this.resumeToken=i,this.cause=n}}class Ol{constructor(){this.Tt=0,this.Et=Ll(),this.At=Se.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=q(),a=q(),i=q();return this.Et.forEach((n,r)=>{switch(r){case 0:e=e.add(n);break;case 2:a=a.add(n);break;case 1:i=i.add(n);break;default:V()}}),new Gi(this.At,this.Rt,e,a,i)}Dt(){this.bt=!1,this.Et=Ll()}Ct(e,a){this.bt=!0,this.Et=this.Et.insert(e,a)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class kg{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Et(),this.Bt=Ml(),this.Lt=new me(Y)}Ut(e){for(const a of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(a,e.yt):this.Kt(a,e.key,e.yt);for(const a of e.removedTargetIds)this.Kt(a,e.key,e.yt)}Gt(e){this.forEachTarget(e,a=>{const i=this.Qt(a);switch(e.state){case 0:this.jt(a)&&i.Vt(e.resumeToken);break;case 1:i.kt(),i.Pt||i.Dt(),i.Vt(e.resumeToken);break;case 2:i.kt(),i.Pt||this.removeTarget(a);break;case 3:this.jt(a)&&(i.Ot(),i.Vt(e.resumeToken));break;case 4:this.jt(a)&&(this.Wt(a),i.Vt(e.resumeToken));break;default:V()}})}forEachTarget(e,a){e.targetIds.length>0?e.targetIds.forEach(a):this.Ft.forEach((i,n)=>{this.jt(n)&&a(n)})}zt(e){const a=e.targetId,i=e.It.count,n=this.Ht(a);if(n){const r=n.target;if(Md(r))if(i===0){const d=new L(r.path);this.Kt(a,d,Te.newNoDocument(d,$.min()))}else ie(i===1);else this.Jt(a)!==i&&(this.Wt(a),this.Lt=this.Lt.add(a))}}Yt(e){const a=new Map;this.Ft.forEach((r,d)=>{const o=this.Ht(d);if(o){if(r.current&&Md(o.target)){const s=new L(o.target.path);this.$t.get(s)!==null||this.Xt(d,s)||this.Kt(d,s,Te.newNoDocument(s,e))}r.vt&&(a.set(d,r.St()),r.Dt())}});let i=q();this.Bt.forEach((r,d)=>{let o=!0;d.forEachWhile(s=>{const l=this.Ht(s);return!l||l.purpose===2||(o=!1,!1)}),o&&(i=i.add(r))}),this.$t.forEach((r,d)=>d.setReadTime(e));const n=new pr(e,a,this.Lt,this.$t,i);return this.$t=Et(),this.Bt=Ml(),this.Lt=new me(Y),n}qt(e,a){if(!this.jt(e))return;const i=this.Xt(e,a.key)?2:0;this.Qt(e).Ct(a.key,i),this.$t=this.$t.insert(a.key,a),this.Bt=this.Bt.insert(a.key,this.Zt(a.key).add(e))}Kt(e,a,i){if(!this.jt(e))return;const n=this.Qt(e);this.Xt(e,a)?n.Ct(a,1):n.xt(a),this.Bt=this.Bt.insert(a,this.Zt(a).delete(e)),i&&(this.$t=this.$t.insert(a,i))}removeTarget(e){this.Ft.delete(e)}Jt(e){const a=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+a.addedDocuments.size-a.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let a=this.Ft.get(e);return a||(a=new Ol,this.Ft.set(e,a)),a}Zt(e){let a=this.Bt.get(e);return a||(a=new me(Y),this.Bt=this.Bt.insert(e,a)),a}jt(e){const a=this.Ht(e)!==null;return a||N("WatchChangeAggregator","Detected inactive target",e),a}Ht(e){const a=this.Ft.get(e);return a&&a.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Ol),this.Mt.getRemoteKeysForTarget(e).forEach(a=>{this.Kt(e,a,null)})}Xt(e,a){return this.Mt.getRemoteKeysForTarget(e).has(a)}}function Ml(){return new pe(L.comparator)}function Ll(){return new pe(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _g{constructor(e,a){this.databaseId=e,this.dt=a}}function Fn(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ib(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ig(t,e){return Fn(t,e.toTimestamp())}function wt(t){return ie(!!t),$.fromTimestamp(function(e){const a=Pt(e);return new ve(a.seconds,a.nanos)}(t))}function $o(t,e){return function(a){return new se(["projects",a.projectId,"databases",a.database])}(t).child("documents").child(e).canonicalString()}function Cb(t){const e=se.fromString(t);return ie(Db(e)),e}function zd(t,e){return $o(t.databaseId,e.path)}function Xr(t,e){const a=Cb(e);if(a.get(1)!==t.databaseId.projectId)throw new M(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+t.databaseId.projectId);if(a.get(3)!==t.databaseId.database)throw new M(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+t.databaseId.database);return new L(Sb(a))}function Fd(t,e){return $o(t.databaseId,e)}function Cg(t){const e=Cb(t);return e.length===4?se.emptyPath():Sb(e)}function Pd(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sb(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zl(t,e,a){return{name:zd(t,e),fields:a.value.mapValue.fields}}function Sg(t,e){let a;if("targetChange"in e){e.targetChange;const i=function(s){return s==="NO_CHANGE"?0:s==="ADD"?1:s==="REMOVE"?2:s==="CURRENT"?3:s==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],r=function(s,l){return s.dt?(ie(l===void 0||typeof l=="string"),Se.fromBase64String(l||"")):(ie(l===void 0||l instanceof Uint8Array),Se.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),d=e.targetChange.cause,o=d&&function(s){const l=s.code===void 0?y.UNKNOWN:wb(s.code);return new M(l,s.message||"")}(d);a=new _b(i,n,r,o||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const n=Xr(t,i.document.name),r=wt(i.document.updateTime),d=new $e({mapValue:{fields:i.document.fields}}),o=Te.newFoundDocument(n,r,d),s=i.targetIds||[],l=i.removedTargetIds||[];a=new vn(s,l,o.key,o)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const n=Xr(t,i.document),r=i.readTime?wt(i.readTime):$.min(),d=Te.newNoDocument(n,r),o=i.removedTargetIds||[];a=new vn([],o,d.key,d)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const n=Xr(t,i.document),r=i.removedTargetIds||[];a=new vn([],r,n,null)}else{if(!("filter"in e))return V();{e.filter;const i=e.filter;i.targetId;const n=i.count||0,r=new mg(n),d=i.targetId;a=new Tb(d,r)}}return a}function Ag(t,e){let a;if(e instanceof qi)a={update:zl(t,e.key,e.value)};else if(e instanceof Uo)a={delete:zd(t,e.key)};else if(e instanceof Ut)a={update:zl(t,e.key,e.data),updateMask:Vg(e.fieldMask)};else{if(!(e instanceof vg))return V();a={verify:zd(t,e.key)}}return e.fieldTransforms.length>0&&(a.updateTransforms=e.fieldTransforms.map(i=>function(n,r){const d=r.transform;if(d instanceof Ln)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Di)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ni)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof zn)return{fieldPath:r.field.canonicalString(),increment:d._t};throw V()}(0,i))),e.precondition.isNone||(a.currentDocument=function(i,n){return n.updateTime!==void 0?{updateTime:Ig(i,n.updateTime)}:n.exists!==void 0?{exists:n.exists}:V()}(t,e.precondition)),a}function Dg(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(a=>function(i,n){let r=i.updateTime?wt(i.updateTime):wt(n);return r.isEqual($.min())&&(r=wt(n)),new bg(r,i.transformResults||[])}(a,e))):[]}function Ng(t,e){return{documents:[Fd(t,e.path)]}}function Rg(t,e){const a={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(a.parent=Fd(t,i),a.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a.parent=Fd(t,i.popLast()),a.structuredQuery.from=[{collectionId:i.lastSegment()}]);const n=function(s){if(s.length===0)return;const l=s.map(c=>function(b){if(b.op==="=="){if(_l(b.value))return{unaryFilter:{field:pa(b.field),op:"IS_NAN"}};if(Tl(b.value))return{unaryFilter:{field:pa(b.field),op:"IS_NULL"}}}else if(b.op==="!="){if(_l(b.value))return{unaryFilter:{field:pa(b.field),op:"IS_NOT_NAN"}};if(Tl(b.value))return{unaryFilter:{field:pa(b.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pa(b.field),op:zg(b.op),value:b.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);n&&(a.structuredQuery.where=n);const r=function(s){if(s.length!==0)return s.map(l=>function(c){return{field:pa(c.field),direction:Lg(c.dir)}}(l))}(e.orderBy);r&&(a.structuredQuery.orderBy=r);const d=function(s,l){return s.dt||fr(l)?l:{value:l}}(t,e.limit);var o;return d!==null&&(a.structuredQuery.limit=d),e.startAt&&(a.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(a.structuredQuery.endAt=function(s){return{before:!s.inclusive,values:s.position}}(e.endAt)),a}function Og(t){let e=Cg(t.parent);const a=t.structuredQuery,i=a.from?a.from.length:0;let n=null;if(i>0){ie(i===1);const c=a.from[0];c.allDescendants?n=c.collectionId:e=e.child(c.collectionId)}let r=[];a.where&&(r=Ab(a.where));let d=[];a.orderBy&&(d=a.orderBy.map(c=>function(b){return new Aa(ka(b.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(c)));let o=null;a.limit&&(o=function(c){let b;return b=typeof c=="object"?c.value:c,fr(b)?null:b}(a.limit));let s=null;a.startAt&&(s=function(c){const b=!!c.before,h=c.values||[];return new Mn(h,b)}(a.startAt));let l=null;return a.endAt&&(l=function(c){const b=!c.before,h=c.values||[];return new Mn(h,b)}(a.endAt)),ag(e,n,d,r,o,"F",s,l)}function Mg(t,e){const a=function(i,n){switch(n){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return a==null?null:{"goog-listen-tags":a}}function Ab(t){return t?t.unaryFilter!==void 0?[Pg(t)]:t.fieldFilter!==void 0?[Fg(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ab(e)).reduce((e,a)=>e.concat(a)):V():[]}function Lg(t){return Eg[t]}function zg(t){return Tg[t]}function pa(t){return{fieldPath:t.canonicalString()}}function ka(t){return Ne.fromServerFormat(t.fieldPath)}function Fg(t){return qe.create(ka(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function Pg(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ka(t.unaryFilter.field);return qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const a=ka(t.unaryFilter.field);return qe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ka(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const n=ka(t.unaryFilter.field);return qe.create(n,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function Vg(t){const e=[];return t.fields.forEach(a=>e.push(a.canonicalString())),{fieldPaths:e}}function Db(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,a,i,n){this.batchId=e,this.localWriteTime=a,this.baseMutations=i,this.mutations=n}applyToRemoteDocument(e,a){const i=a.mutationResults;for(let n=0;n<this.mutations.length;n++){const r=this.mutations[n];r.key.isEqual(e.key)&&fg(r,e,i[n])}}applyToLocalView(e,a){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(a=ui(i,e,a,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(a=ui(i,e,a,this.localWriteTime));return a}applyToLocalDocumentSet(e,a){const i=kb();return this.mutations.forEach(n=>{const r=e.get(n.key),d=r.overlayedDocument;let o=this.applyToLocalView(d,r.mutatedFields);o=a.has(n.key)?null:o;const s=pb(d,o);s!==null&&i.set(n.key,s),d.isValidDocument()||d.convertToNoDocument($.min())}),i}keys(){return this.mutations.reduce((e,a)=>e.add(a.key),q())}isEqual(e){return this.batchId===e.batchId&&Ma(this.mutations,e.mutations,(a,i)=>Dl(a,i))&&Ma(this.baseMutations,e.baseMutations,(a,i)=>Dl(a,i))}}class qo{constructor(e,a,i,n){this.batch=e,this.commitVersion=a,this.mutationResults=i,this.docVersions=n}static from(e,a,i){ie(e.mutations.length===i.length);let n=wg;const r=e.mutations;for(let d=0;d<r.length;d++)n=n.insert(r[d].key,i[d].version);return new qo(e,a,i,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,a){this.largestBatchId=e,this.mutation=a}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,a,i,n,r=$.min(),d=$.min(),o=Se.EMPTY_BYTE_STRING){this.target=e,this.targetId=a,this.purpose=i,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=o}withSequenceNumber(e){return new ia(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,a){return new ia(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ia(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.ne=e}}function $g(t){const e=Og({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.ze=new Gg}addToCollectionParentIndex(e,a){return this.ze.add(a),x.resolve()}getCollectionParents(e,a){return x.resolve(this.ze.getEntries(a))}addFieldIndex(e,a){return x.resolve()}deleteFieldIndex(e,a){return x.resolve()}getDocumentsMatchingTarget(e,a){return x.resolve(null)}getIndexType(e,a){return x.resolve(0)}getFieldIndexes(e,a){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,a){return x.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,a){return x.resolve(Ft.min())}updateCollectionGroup(e,a,i){return x.resolve()}updateIndexEntries(e,a){return x.resolve()}}class Gg{constructor(){this.index={}}add(e){const a=e.lastSegment(),i=e.popLast(),n=this.index[a]||new me(se.comparator),r=!n.has(i);return this.index[a]=n.add(i),r}has(e){const a=e.lastSegment(),i=e.popLast(),n=this.index[a];return n&&n.has(i)}getEntries(e){return(this.index[e]||new me(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Pa(0)}static Rn(){return new Pa(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.changes=new Qa(e=>e.toString(),(e,a)=>e.isEqual(a)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,a){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(a))}getEntry(e,a){this.assertNotApplied();const i=this.changes.get(a);return i!==void 0?x.resolve(i):this.getFromCache(e,a)}getEntries(e,a){return this.getAllFromCache(e,a)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,a){this.overlayedDocument=e,this.mutatedFields=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,a,i,n){this.remoteDocumentCache=e,this.mutationQueue=a,this.documentOverlayCache=i,this.indexManager=n}getDocument(e,a){let i=null;return this.documentOverlayCache.getOverlay(e,a).next(n=>(i=n,this.getBaseDocument(e,a,i))).next(n=>(i!==null&&ui(i.mutation,n,Je.empty(),ve.now()),n))}getDocuments(e,a){return this.remoteDocumentCache.getEntries(e,a).next(i=>this.getLocalViewOfDocuments(e,i,q()).next(()=>i))}getLocalViewOfDocuments(e,a,i=q()){const n=Jt();return this.populateOverlays(e,n,a).next(()=>this.computeViews(e,a,n,i).next(r=>{let d=ii();return r.forEach((o,s)=>{d=d.insert(o,s.overlayedDocument)}),d}))}getOverlayedDocuments(e,a){const i=Jt();return this.populateOverlays(e,i,a).next(()=>this.computeViews(e,a,i,q()))}populateOverlays(e,a,i){const n=[];return i.forEach(r=>{a.has(r)||n.push(r)}),this.documentOverlayCache.getOverlays(e,n).next(r=>{r.forEach((d,o)=>{a.set(d,o)})})}computeViews(e,a,i,n){let r=Et();const d=bi(),o=bi();return a.forEach((s,l)=>{const c=i.get(l.key);n.has(l.key)&&(c===void 0||c.mutation instanceof Ut)?r=r.insert(l.key,l):c!==void 0&&(d.set(l.key,c.mutation.getFieldMask()),ui(c.mutation,l,c.mutation.getFieldMask(),ve.now()))}),this.recalculateAndSaveOverlays(e,r).next(s=>(s.forEach((l,c)=>d.set(l,c)),a.forEach((l,c)=>{var b;return o.set(l,new Kg(c,(b=d.get(l))!==null&&b!==void 0?b:null))}),o))}recalculateAndSaveOverlays(e,a){const i=bi();let n=new pe((d,o)=>d-o),r=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,a).next(d=>{for(const o of d)o.keys().forEach(s=>{const l=a.get(s);if(l===null)return;let c=i.get(s)||Je.empty();c=o.applyToLocalView(l,c),i.set(s,c);const b=(n.get(o.batchId)||q()).add(s);n=n.insert(o.batchId,b)})}).next(()=>{const d=[],o=n.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),l=s.key,c=s.value,b=kb();c.forEach(h=>{if(!r.has(h)){const m=pb(a.get(h),i.get(h));m!==null&&b.set(h,m),r=r.add(h)}}),d.push(this.documentOverlayCache.saveOverlays(e,l,b))}return x.waitFor(d)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,a){return this.remoteDocumentCache.getEntries(e,a).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,a,i){return function(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(e,a.path):ng(a)?this.getDocumentsMatchingCollectionGroupQuery(e,a,i):this.getDocumentsMatchingCollectionQuery(e,a,i)}getNextDocuments(e,a,i,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,a,i,n).next(r=>{const d=n-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,a,i.largestBatchId,n-r.size):x.resolve(Jt());let o=-1,s=r;return d.next(l=>x.forEach(l,(c,b)=>(o<b.largestBatchId&&(o=b.largestBatchId),r.get(c)?x.resolve():this.getBaseDocument(e,c,b).next(h=>{s=s.insert(c,h)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,s,l,q())).next(c=>({batchId:o,changes:xb(c)})))})}getDocumentsMatchingDocumentQuery(e,a){return this.getDocument(e,new L(a)).next(i=>{let n=ii();return i.isFoundDocument()&&(n=n.insert(i.key,i)),n})}getDocumentsMatchingCollectionGroupQuery(e,a,i){const n=a.collectionGroup;let r=ii();return this.indexManager.getCollectionParents(e,n).next(d=>x.forEach(d,o=>{const s=function(l,c){return new $i(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(a,o.child(n));return this.getDocumentsMatchingCollectionQuery(e,s,i).next(l=>{l.forEach((c,b)=>{r=r.insert(c,b)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,a,i){let n;return this.remoteDocumentCache.getAllFromCollection(e,a.path,i).next(r=>(n=r,this.documentOverlayCache.getOverlaysForCollection(e,a.path,i.largestBatchId))).next(r=>{r.forEach((o,s)=>{const l=s.getKey();n.get(l)===null&&(n=n.insert(l,Te.newInvalidDocument(l)))});let d=ii();return n.forEach((o,s)=>{const l=r.get(o);l!==void 0&&ui(l.mutation,s,Je.empty(),ve.now()),Bo(a,s)&&(d=d.insert(o,s))}),d})}getBaseDocument(e,a,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,a):x.resolve(Te.newInvalidDocument(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,a){return x.resolve(this.Jn.get(a))}saveBundleMetadata(e,a){var i;return this.Jn.set(a.id,{id:(i=a).id,version:i.version,createTime:wt(i.createTime)}),x.resolve()}getNamedQuery(e,a){return x.resolve(this.Yn.get(a))}saveNamedQuery(e,a){return this.Yn.set(a.name,function(i){return{name:i.name,query:$g(i.bundledQuery),readTime:wt(i.readTime)}}(a)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.overlays=new pe(L.comparator),this.Xn=new Map}getOverlay(e,a){return x.resolve(this.overlays.get(a))}getOverlays(e,a){const i=Jt();return x.forEach(a,n=>this.getOverlay(e,n).next(r=>{r!==null&&i.set(n,r)})).next(()=>i)}saveOverlays(e,a,i){return i.forEach((n,r)=>{this.ie(e,a,r)}),x.resolve()}removeOverlaysForBatchId(e,a,i){const n=this.Xn.get(i);return n!==void 0&&(n.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(i)),x.resolve()}getOverlaysForCollection(e,a,i){const n=Jt(),r=a.length+1,d=new L(a.child("")),o=this.overlays.getIteratorFrom(d);for(;o.hasNext();){const s=o.getNext().value,l=s.getKey();if(!a.isPrefixOf(l.path))break;l.path.length===r&&s.largestBatchId>i&&n.set(s.getKey(),s)}return x.resolve(n)}getOverlaysForCollectionGroup(e,a,i,n){let r=new pe((l,c)=>l-c);const d=this.overlays.getIterator();for(;d.hasNext();){const l=d.getNext().value;if(l.getKey().getCollectionGroup()===a&&l.largestBatchId>i){let c=r.get(l.largestBatchId);c===null&&(c=Jt(),r=r.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const o=Jt(),s=r.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach((l,c)=>o.set(l,c)),!(o.size()>=n)););return x.resolve(o)}ie(e,a,i){const n=this.overlays.get(i.key);if(n!==null){const d=this.Xn.get(n.largestBatchId).delete(i.key);this.Xn.set(n.largestBatchId,d)}this.overlays=this.overlays.insert(i.key,new Bg(a,i));let r=this.Xn.get(a);r===void 0&&(r=q(),this.Xn.set(a,r)),this.Xn.set(a,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Zn=new me(ge.ts),this.es=new me(ge.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,a){const i=new ge(e,a);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,a){e.forEach(i=>this.addReference(i,a))}removeReference(e,a){this.rs(new ge(e,a))}os(e,a){e.forEach(i=>this.removeReference(i,a))}us(e){const a=new L(new se([])),i=new ge(a,e),n=new ge(a,e+1),r=[];return this.es.forEachInRange([i,n],d=>{this.rs(d),r.push(d.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const a=new L(new se([])),i=new ge(a,e),n=new ge(a,e+1);let r=q();return this.es.forEachInRange([i,n],d=>{r=r.add(d.key)}),r}containsKey(e){const a=new ge(e,0),i=this.Zn.firstAfterOrEqual(a);return i!==null&&e.isEqual(i.key)}}class ge{constructor(e,a){this.key=e,this.ls=a}static ts(e,a){return L.comparator(e.key,a.key)||Y(e.ls,a.ls)}static ns(e,a){return Y(e.ls,a.ls)||L.comparator(e.key,a.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,a){this.indexManager=e,this.referenceDelegate=a,this.mutationQueue=[],this.fs=1,this.ds=new me(ge.ts)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,a,i,n){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new jg(r,a,i,n);this.mutationQueue.push(d);for(const o of n)this.ds=this.ds.add(new ge(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return x.resolve(d)}lookupMutationBatch(e,a){return x.resolve(this._s(a))}getNextMutationBatchAfterBatchId(e,a){const i=a+1,n=this.ws(i),r=n<0?0:n;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,a){const i=new ge(a,0),n=new ge(a,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,n],d=>{const o=this._s(d.ls);r.push(o)}),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,a){let i=new me(Y);return a.forEach(n=>{const r=new ge(n,0),d=new ge(n,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,d],o=>{i=i.add(o.ls)})}),x.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,a){const i=a.path,n=i.length+1;let r=i;L.isDocumentKey(r)||(r=r.child(""));const d=new ge(new L(r),0);let o=new me(Y);return this.ds.forEachWhile(s=>{const l=s.key.path;return!!i.isPrefixOf(l)&&(l.length===n&&(o=o.add(s.ls)),!0)},d),x.resolve(this.gs(o))}gs(e){const a=[];return e.forEach(i=>{const n=this._s(i);n!==null&&a.push(n)}),a}removeMutationBatch(e,a){ie(this.ys(a.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return x.forEach(a.mutations,n=>{const r=new ge(n.key,a.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,a){const i=new ge(a,0),n=this.ds.firstAfterOrEqual(i);return x.resolve(a.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ys(e,a){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const a=this.ws(e);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.ps=e,this.docs=new pe(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,a){const i=a.key,n=this.docs.get(i),r=n?n.size:0,d=this.ps(a);return this.docs=this.docs.insert(i,{document:a.mutableCopy(),size:d}),this.size+=d-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const a=this.docs.get(e);a&&(this.docs=this.docs.remove(e),this.size-=a.size)}getEntry(e,a){const i=this.docs.get(a);return x.resolve(i?i.document.mutableCopy():Te.newInvalidDocument(a))}getEntries(e,a){let i=Et();return a.forEach(n=>{const r=this.docs.get(n);i=i.insert(n,r?r.document.mutableCopy():Te.newInvalidDocument(n))}),x.resolve(i)}getAllFromCollection(e,a,i){let n=Et();const r=new L(a.child("")),d=this.docs.getIteratorFrom(r);for(;d.hasNext();){const{key:o,value:{document:s}}=d.getNext();if(!a.isPrefixOf(o.path))break;o.path.length>a.length+1||Vp(Pp(s),i)<=0||(n=n.insert(s.key,s.mutableCopy()))}return x.resolve(n)}getAllFromCollectionGroup(e,a,i,n){V()}Is(e,a){return x.forEach(this.docs,i=>a(i))}newChangeBuffer(e){return new Zg(this)}getSize(e){return x.resolve(this.size)}}class Zg extends Hg{constructor(e){super(),this.zn=e}applyChanges(e){const a=[];return this.changes.forEach((i,n)=>{n.isValidDocument()?a.push(this.zn.addEntry(e,n)):this.zn.removeEntry(i)}),x.waitFor(a)}getFromCache(e,a){return this.zn.getEntry(e,a)}getAllFromCache(e,a){return this.zn.getEntries(e,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.persistence=e,this.Ts=new Qa(a=>Po(a),Vo),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Es=0,this.As=new Go,this.targetCount=0,this.Rs=Pa.An()}forEachTarget(e,a){return this.Ts.forEach((i,n)=>a(n)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,a,i){return i&&(this.lastRemoteSnapshotVersion=i),a>this.Es&&(this.Es=a),x.resolve()}vn(e){this.Ts.set(e.target,e);const a=e.targetId;a>this.highestTargetId&&(this.Rs=new Pa(a),this.highestTargetId=a),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,a){return this.vn(a),this.targetCount+=1,x.resolve()}updateTargetData(e,a){return this.vn(a),x.resolve()}removeTargetData(e,a){return this.Ts.delete(a.target),this.As.us(a.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,a,i){let n=0;const r=[];return this.Ts.forEach((d,o)=>{o.sequenceNumber<=a&&i.get(o.targetId)===null&&(this.Ts.delete(d),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),x.waitFor(r).next(()=>n)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,a){const i=this.Ts.get(a)||null;return x.resolve(i)}addMatchingKeys(e,a,i){return this.As.ss(a,i),x.resolve()}removeMatchingKeys(e,a,i){this.As.os(a,i);const n=this.persistence.referenceDelegate,r=[];return n&&a.forEach(d=>{r.push(n.markPotentiallyOrphaned(e,d))}),x.waitFor(r)}removeMatchingKeysForTargetId(e,a){return this.As.us(a),x.resolve()}getMatchingKeysForTargetId(e,a){const i=this.As.hs(a);return x.resolve(i)}containsKey(e,a){return x.resolve(this.As.containsKey(a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,a){this.bs={},this.overlays={},this.Ps=new zo(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new e1(this),this.indexManager=new qg,this.remoteDocumentCache=function(i){return new Jg(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new Ug(a),this.Ds=new Qg(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let a=this.overlays[e.toKey()];return a||(a=new Xg,this.overlays[e.toKey()]=a),a}getMutationQueue(e,a){let i=this.bs[e.toKey()];return i||(i=new Yg(a,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,a,i){N("MemoryPersistence","Starting transaction:",e);const n=new a1(this.Ps.next());return this.referenceDelegate.Cs(),i(n).next(r=>this.referenceDelegate.xs(n).next(()=>r)).toPromise().then(r=>(n.raiseOnCommittedEvent(),r))}Ns(e,a){return x.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,a)))}}class a1 extends Bp{constructor(e){super(),this.currentSequenceNumber=e}}class Ho{constructor(e){this.persistence=e,this.ks=new Go,this.Os=null}static Ms(e){return new Ho(e)}get Fs(){if(this.Os)return this.Os;throw V()}addReference(e,a,i){return this.ks.addReference(i,a),this.Fs.delete(i.toString()),x.resolve()}removeReference(e,a,i){return this.ks.removeReference(i,a),this.Fs.add(i.toString()),x.resolve()}markPotentiallyOrphaned(e,a){return this.Fs.add(a.toString()),x.resolve()}removeTarget(e,a){this.ks.us(a.targetId).forEach(n=>this.Fs.add(n.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,a.targetId).next(n=>{n.forEach(r=>this.Fs.add(r.toString()))}).next(()=>i.removeTargetData(e,a))}Cs(){this.Os=new Set}xs(e){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Fs,i=>{const n=L.fromPath(i);return this.$s(e,n).next(r=>{r||a.removeEntry(n,$.min())})}).next(()=>(this.Os=null,a.apply(e)))}updateLimboDocument(e,a){return this.$s(e,a).next(i=>{i?this.Fs.delete(a.toString()):this.Fs.add(a.toString())})}Ss(e){return 0}$s(e,a){return x.or([()=>x.resolve(this.ks.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(e,a),()=>this.persistence.Ns(e,a)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,a,i,n){this.targetId=e,this.fromCache=a,this.Pi=i,this.vi=n}static Vi(e,a){let i=q(),n=q();for(const r of a.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new Ko(e,a.fromCache,i,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Si=!1}initialize(e,a){this.Di=e,this.indexManager=a,this.Si=!0}getDocumentsMatchingQuery(e,a,i,n){return this.Ci(e,a).next(r=>r||this.xi(e,a,n,i)).next(r=>r||this.Ni(e,a))}Ci(e,a){return x.resolve(null)}xi(e,a,i,n){return ig(a)||n.isEqual($.min())?this.Ni(e,a):this.Di.getDocuments(e,i).next(r=>{const d=this.ki(a,r);return this.Oi(a,d,i,n)?this.Ni(e,a):(wl()<=X.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ld(a)),this.Mi(e,d,a,Fp(n,-1)))})}ki(e,a){let i=new me(cb(e));return a.forEach((n,r)=>{Bo(e,r)&&(i=i.add(r))}),i}Oi(e,a,i,n){if(e.limit===null)return!1;if(i.size!==a.size)return!0;const r=e.limitType==="F"?a.last():a.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Ni(e,a){return wl()<=X.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ld(a)),this.Di.getDocumentsMatchingQuery(e,a,Ft.min())}Mi(e,a,i,n){return this.Di.getDocumentsMatchingQuery(e,i,n).next(r=>(a.forEach(d=>{r=r.insert(d.key,d)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,a,i,n){this.persistence=e,this.Fi=a,this.wt=n,this.$i=new pe(Y),this.Bi=new Qa(r=>Po(r),Vo),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wg(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>e.collect(a,this.$i))}}function r1(t,e,a,i){return new n1(t,e,a,i)}async function Nb(t,e){const a=B(t);return await a.persistence.runTransaction("Handle user change","readonly",i=>{let n;return a.mutationQueue.getAllMutationBatches(i).next(r=>(n=r,a.qi(e),a.mutationQueue.getAllMutationBatches(i))).next(r=>{const d=[],o=[];let s=q();for(const l of n){d.push(l.batchId);for(const c of l.mutations)s=s.add(c.key)}for(const l of r){o.push(l.batchId);for(const c of l.mutations)s=s.add(c.key)}return a.localDocuments.getDocuments(i,s).next(l=>({Ki:l,removedBatchIds:d,addedBatchIds:o}))})})}function d1(t,e){const a=B(t);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const n=e.batch.keys(),r=a.Ui.newChangeBuffer({trackRemovals:!0});return function(d,o,s,l){const c=s.batch,b=c.keys();let h=x.resolve();return b.forEach(m=>{h=h.next(()=>l.getEntry(o,m)).next(k=>{const A=s.docVersions.get(m);ie(A!==null),k.version.compareTo(A)<0&&(c.applyToRemoteDocument(k,s),k.isValidDocument()&&(k.setReadTime(s.commitVersion),l.addEntry(k)))})}),h.next(()=>d.mutationQueue.removeMutationBatch(o,c))}(a,i,e,r).next(()=>r.apply(i)).next(()=>a.mutationQueue.performConsistencyCheck(i)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(i,n,e.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let o=q();for(let s=0;s<d.mutationResults.length;++s)d.mutationResults[s].transformResults.length>0&&(o=o.add(d.batch.mutations[s].key));return o}(e))).next(()=>a.localDocuments.getDocuments(i,n))})}function Rb(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",a=>e.Vs.getLastRemoteSnapshotVersion(a))}function o1(t,e){const a=B(t),i=e.snapshotVersion;let n=a.$i;return a.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const d=a.Ui.newChangeBuffer({trackRemovals:!0});n=a.$i;const o=[];e.targetChanges.forEach((c,b)=>{const h=n.get(b);if(!h)return;o.push(a.Vs.removeMatchingKeys(r,c.removedDocuments,b).next(()=>a.Vs.addMatchingKeys(r,c.addedDocuments,b)));let m=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(b)?m=m.withResumeToken(Se.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,i)),n=n.insert(b,m),function(k,A,I){return k.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,m,c)&&o.push(a.Vs.updateTargetData(r,m))});let s=Et(),l=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&o.push(a.persistence.referenceDelegate.updateLimboDocument(r,c))}),o.push(s1(r,d,e.documentUpdates).next(c=>{s=c.Gi,l=c.Qi})),!i.isEqual($.min())){const c=a.Vs.getLastRemoteSnapshotVersion(r).next(b=>a.Vs.setTargetsMetadata(r,r.currentSequenceNumber,i));o.push(c)}return x.waitFor(o).next(()=>d.apply(r)).next(()=>a.localDocuments.getLocalViewOfDocuments(r,s,l)).next(()=>s)}).then(r=>(a.$i=n,r))}function s1(t,e,a){let i=q(),n=q();return a.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let d=Et();return a.forEach((o,s)=>{const l=r.get(o);s.isFoundDocument()!==l.isFoundDocument()&&(n=n.add(o)),s.isNoDocument()&&s.version.isEqual($.min())?(e.removeEntry(o,s.readTime),d=d.insert(o,s)):!l.isValidDocument()||s.version.compareTo(l.version)>0||s.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(s),d=d.insert(o,s)):N("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",s.version)}),{Gi:d,Qi:n}})}function l1(t,e){const a=B(t);return a.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),a.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function c1(t,e){const a=B(t);return a.persistence.runTransaction("Allocate target","readwrite",i=>{let n;return a.Vs.getTargetData(i,e).next(r=>r?(n=r,x.resolve(n)):a.Vs.allocateTargetId(i).next(d=>(n=new ia(e,d,0,i.currentSequenceNumber),a.Vs.addTargetData(i,n).next(()=>n))))}).then(i=>{const n=a.$i.get(i.targetId);return(n===null||i.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(a.$i=a.$i.insert(i.targetId,i),a.Bi.set(e,i.targetId)),i})}async function Vd(t,e,a){const i=B(t),n=i.$i.get(e),r=a?"readwrite":"readwrite-primary";try{a||await i.persistence.runTransaction("Release target",r,d=>i.persistence.referenceDelegate.removeTarget(d,n))}catch(d){if(!Ui(d))throw d;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}i.$i=i.$i.remove(e),i.Bi.delete(n.target)}function Fl(t,e,a){const i=B(t);let n=$.min(),r=q();return i.persistence.runTransaction("Execute query","readonly",d=>function(o,s,l){const c=B(o),b=c.Bi.get(l);return b!==void 0?x.resolve(c.$i.get(b)):c.Vs.getTargetData(s,l)}(i,d,ca(e)).next(o=>{if(o)return n=o.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(d,o.targetId).next(s=>{r=s})}).next(()=>i.Fi.getDocumentsMatchingQuery(d,e,a?n:$.min(),a?r:q())).next(o=>(u1(i,dg(e),o),{documents:o,ji:r})))}function u1(t,e,a){let i=$.min();a.forEach((n,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Li.set(e,i)}class Pl{constructor(){this.activeTargetIds=Eb()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b1{constructor(){this.Fr=new Pl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,a,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,a,i){this.$r[e]=a}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Pl,Promise.resolve()}handleUserChange(e,a,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const a=e.ssl?"https":"http";this.so=a+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,a,i,n,r){const d=this.oo(e,a);N("RestConnection","Sending: ",d,i);const o={};return this.uo(o,n,r),this.co(e,d,o,i).then(s=>(N("RestConnection","Received: ",s),s),s=>{throw yl("RestConnection",`${e} failed with error: `,s,"url: ",d,"request:",i),s})}ao(e,a,i,n,r){return this.ro(e,a,i,n,r)}uo(e,a,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((n,r)=>e[r]=n),i&&i.headers.forEach((n,r)=>e[r]=n)}oo(e,a){const i=h1[e];return`${this.so}/v1/${a}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,a,i,n){return new Promise((r,d)=>{const o=new Cp;o.listenOnce(Tp.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Qr.NO_ERROR:const l=o.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Qr.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),d(new M(y.DEADLINE_EXCEEDED,"Request time out"));break;case Qr.HTTP_ERROR:const c=o.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",o.getResponseText()),c>0){const b=o.getResponseJson().error;if(b&&b.status&&b.message){const h=function(m){const k=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(k)>=0?k:y.UNKNOWN}(b.status);d(new M(h,b.message))}else d(new M(y.UNKNOWN,"Server responded with status "+o.getStatus()))}else d(new M(y.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const s=JSON.stringify(n);o.send(a,"POST",s,i,15)})}ho(e,a,i){const n=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=kp(),d=Ep(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ip({})),this.uo(o.initMessageHeaders,a,i),a0()||n0()||r0()||d0()||o0()||i0()||(o.httpHeadersOverwriteParam="$httpHeaders");const s=n.join("");N("Connection","Creating WebChannel: "+s,o);const l=r.createWebChannel(s,o);let c=!1,b=!1;const h=new v1({jr:k=>{b?N("Connection","Not sending because WebChannel is closed:",k):(c||(N("Connection","Opening WebChannel transport."),l.open(),c=!0),N("Connection","WebChannel sending:",k),l.send(k))},Wr:()=>l.close()}),m=(k,A,I)=>{k.listen(A,z=>{try{I(z)}catch(te){setTimeout(()=>{throw te},0)}})};return m(l,dn.EventType.OPEN,()=>{b||N("Connection","WebChannel transport opened.")}),m(l,dn.EventType.CLOSE,()=>{b||(b=!0,N("Connection","WebChannel transport closed"),h.eo())}),m(l,dn.EventType.ERROR,k=>{b||(b=!0,yl("Connection","WebChannel transport errored:",k),h.eo(new M(y.UNAVAILABLE,"The operation could not be completed")))}),m(l,dn.EventType.MESSAGE,k=>{var A;if(!b){const I=k.data[0];ie(!!I);const z=I,te=z.error||((A=z[0])===null||A===void 0?void 0:A.error);if(te){N("Connection","WebChannel received error:",te);const ne=te.status;let ae=function(_t){const ot=be[_t];if(ot!==void 0)return wb(ot)}(ne),ke=te.message;ae===void 0&&(ae=y.INTERNAL,ke="Unknown error status: "+ne+" with message "+te.message),b=!0,h.eo(new M(ae,ke)),l.close()}else N("Connection","WebChannel received:",I),h.no(I)}}),m(d,_p.STAT_EVENT,k=>{k.stat===pl.PROXY?N("Connection","Detected buffering proxy"):k.stat===pl.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.Zr()},0),h}}function Yr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){return new _g(t,!0)}class Ob{constructor(e,a,i=1e3,n=1.5,r=6e4){this.js=e,this.timerId=a,this.lo=i,this.fo=n,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const a=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),n=Math.max(0,a-i);n>0&&N("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.wo} ms, delay with jitter: ${a} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,n,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,a,i,n,r,d,o,s){this.js=e,this.Ao=i,this.Ro=n,this.bo=r,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ob(e,a)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,a){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():a&&a.code===y.RESOURCE_EXHAUSTED?(zt(a.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):a&&a.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(a)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),a=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,n])=>{this.Po===a&&this.Uo(i,n)},i=>{e(()=>{const n=new M(y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(n)})})}Uo(e,a){const i=this.Lo(this.Po);this.stream=this.Ko(e,a),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(n=>{i(()=>this.qo(n))}),this.stream.onMessage(n=>{i(()=>this.onMessage(n))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return a=>{this.js.enqueueAndForget(()=>this.Po===e?a():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p1 extends Mb{constructor(e,a,i,n,r,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,i,n,d),this.wt=r}Ko(e,a){return this.bo.ho("Listen",e,a)}onMessage(e){this.So.reset();const a=Sg(this.wt,e),i=function(n){if(!("targetChange"in n))return $.min();const r=n.targetChange;return r.targetIds&&r.targetIds.length?$.min():r.readTime?wt(r.readTime):$.min()}(e);return this.listener.Go(a,i)}Qo(e){const a={};a.database=Pd(this.wt),a.addTarget=function(n,r){let d;const o=r.target;return d=Md(o)?{documents:Ng(n,o)}:{query:Rg(n,o)},d.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?d.resumeToken=Ib(n,r.resumeToken):r.snapshotVersion.compareTo($.min())>0&&(d.readTime=Fn(n,r.snapshotVersion.toTimestamp())),d}(this.wt,e);const i=Mg(this.wt,e);i&&(a.labels=i),this.Mo(a)}jo(e){const a={};a.database=Pd(this.wt),a.removeTarget=e,this.Mo(a)}}class g1 extends Mb{constructor(e,a,i,n,r,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",a,i,n,d),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,a){return this.bo.ho("Write",e,a)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const a=Dg(e.writeResults,e.commitTime),i=wt(e.commitTime);return this.listener.Jo(i,a)}return ie(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Pd(this.wt),this.Mo(e)}Ho(e){const a={streamToken:this.lastStreamToken,writes:e.map(i=>Ag(this.wt,i))};this.Mo(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1 extends class{}{constructor(e,a,i,n){super(),this.authCredentials=e,this.appCheckCredentials=a,this.bo=i,this.wt=n,this.Zo=!1}tu(){if(this.Zo)throw new M(y.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,a,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.bo.ro(e,a,i,n,r)).catch(n=>{throw n.name==="FirebaseError"?(n.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new M(y.UNKNOWN,n.toString())})}ao(e,a,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.bo.ao(e,a,i,n,r)).catch(n=>{throw n.name==="FirebaseError"?(n.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new M(y.UNKNOWN,n.toString())})}terminate(){this.Zo=!0}}class y1{constructor(e,a){this.asyncQueue=e,this.onlineStateHandler=a,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const a=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(zt(a),this.su=!1):N("OnlineStateTracker",a)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,a,i,n,r){this.localStore=e,this.datastore=a,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(d=>{i.enqueueAndForget(async()=>{fa(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(o){const s=B(o);s.lu.add(4),await Hi(s),s._u.set("Unknown"),s.lu.delete(4),await wr(s)}(this))})}),this._u=new y1(i,n)}}async function wr(t){if(fa(t))for(const e of t.fu)await e(!0)}async function Hi(t){for(const e of t.fu)await e(!1)}function Lb(t,e){const a=B(t);a.hu.has(e.targetId)||(a.hu.set(e.targetId,e),Xo(a)?Qo(a):Xa(a).Co()&&Wo(a,e))}function zb(t,e){const a=B(t),i=Xa(a);a.hu.delete(e),i.Co()&&Fb(a,e),a.hu.size===0&&(i.Co()?i.ko():fa(a)&&a._u.set("Unknown"))}function Wo(t,e){t.wu.Nt(e.targetId),Xa(t).Qo(e)}function Fb(t,e){t.wu.Nt(e),Xa(t).jo(e)}function Qo(t){t.wu=new kg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Xa(t).start(),t._u.iu()}function Xo(t){return fa(t)&&!Xa(t).Do()&&t.hu.size>0}function fa(t){return B(t).lu.size===0}function Pb(t){t.wu=void 0}async function k1(t){t.hu.forEach((e,a)=>{Wo(t,e)})}async function E1(t,e){Pb(t),Xo(t)?(t._u.uu(e),Qo(t)):t._u.set("Unknown")}async function T1(t,e,a){if(t._u.set("Online"),e instanceof _b&&e.state===2&&e.cause)try{await async function(i,n){const r=n.cause;for(const d of n.targetIds)i.hu.has(d)&&(await i.remoteSyncer.rejectListen(d,r),i.hu.delete(d),i.wu.removeTarget(d))}(t,e)}catch(i){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pn(t,i)}else if(e instanceof vn?t.wu.Ut(e):e instanceof Tb?t.wu.zt(e):t.wu.Gt(e),!a.isEqual($.min()))try{const i=await Rb(t.localStore);a.compareTo(i)>=0&&await function(n,r){const d=n.wu.Yt(r);return d.targetChanges.forEach((o,s)=>{if(o.resumeToken.approximateByteSize()>0){const l=n.hu.get(s);l&&n.hu.set(s,l.withResumeToken(o.resumeToken,r))}}),d.targetMismatches.forEach(o=>{const s=n.hu.get(o);if(!s)return;n.hu.set(o,s.withResumeToken(Se.EMPTY_BYTE_STRING,s.snapshotVersion)),Fb(n,o);const l=new ia(s.target,o,1,s.sequenceNumber);Wo(n,l)}),n.remoteSyncer.applyRemoteEvent(d)}(t,a)}catch(i){N("RemoteStore","Failed to raise snapshot:",i),await Pn(t,i)}}async function Pn(t,e,a){if(!Ui(e))throw e;t.lu.add(1),await Hi(t),t._u.set("Offline"),a||(a=()=>Rb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await a(),t.lu.delete(1),await wr(t)})}function Vb(t,e){return e().catch(a=>Pn(t,a,e))}async function yr(t){const e=B(t),a=Vt(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;_1(e);)try{const n=await l1(e.localStore,i);if(n===null){e.au.length===0&&a.ko();break}i=n.batchId,I1(e,n)}catch(n){await Pn(e,n)}jb(e)&&Bb(e)}function _1(t){return fa(t)&&t.au.length<10}function I1(t,e){t.au.push(e);const a=Vt(t);a.Co()&&a.zo&&a.Ho(e.mutations)}function jb(t){return fa(t)&&!Vt(t).Do()&&t.au.length>0}function Bb(t){Vt(t).start()}async function C1(t){Vt(t).Xo()}async function S1(t){const e=Vt(t);for(const a of t.au)e.Ho(a.mutations)}async function A1(t,e,a){const i=t.au.shift(),n=qo.from(i,e,a);await Vb(t,()=>t.remoteSyncer.applySuccessfulWrite(n)),await yr(t)}async function D1(t,e){e&&Vt(t).zo&&await async function(a,i){if(n=i.code,pg(n)&&n!==y.ABORTED){const r=a.au.shift();Vt(a).No(),await Vb(a,()=>a.remoteSyncer.rejectFailedWrite(r.batchId,i)),await yr(a)}var n}(t,e),jb(t)&&Bb(t)}async function jl(t,e){const a=B(t);a.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const i=fa(a);a.lu.add(3),await Hi(a),i&&a._u.set("Unknown"),await a.remoteSyncer.handleCredentialChange(e),a.lu.delete(3),await wr(a)}async function N1(t,e){const a=B(t);e?(a.lu.delete(2),await wr(a)):e||(a.lu.add(2),await Hi(a),a._u.set("Unknown"))}function Xa(t){return t.mu||(t.mu=function(e,a,i){const n=B(e);return n.tu(),new p1(a,n.bo,n.authCredentials,n.appCheckCredentials,n.wt,i)}(t.datastore,t.asyncQueue,{zr:k1.bind(null,t),Jr:E1.bind(null,t),Go:T1.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Xo(t)?Qo(t):t._u.set("Unknown")):(await t.mu.stop(),Pb(t))})),t.mu}function Vt(t){return t.gu||(t.gu=function(e,a,i){const n=B(e);return n.tu(),new g1(a,n.bo,n.authCredentials,n.appCheckCredentials,n.wt,i)}(t.datastore,t.asyncQueue,{zr:C1.bind(null,t),Jr:D1.bind(null,t),Yo:S1.bind(null,t),Jo:A1.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await yr(t)):(await t.gu.stop(),t.au.length>0&&(N("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,a,i,n,r){this.asyncQueue=e,this.timerId=a,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new aa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}static createAndSchedule(e,a,i,n,r){const d=Date.now()+i,o=new Yo(e,a,d,n,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(t,e){if(zt("AsyncQueue",`${e}: ${t}`),Ui(t))return new M(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.comparator=e?(a,i)=>e(a,i)||L.comparator(a.key,i.key):(a,i)=>L.comparator(a.key,i.key),this.keyedMap=ii(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Da(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const a=this.keyedMap.get(e);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((a,i)=>(e(a),!1))}add(e){const a=this.delete(e.key);return a.copy(a.keyedMap.insert(e.key,e),a.sortedSet.insert(e,null))}delete(e){const a=this.get(e);return a?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(a)):this}isEqual(e){if(!(e instanceof Da)||this.size!==e.size)return!1;const a=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;a.hasNext();){const n=a.getNext().key,r=i.getNext().key;if(!n.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(a=>{e.push(a.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,a){const i=new Da;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=a,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.yu=new pe(L.comparator)}track(e){const a=e.doc.key,i=this.yu.get(a);i?e.type!==0&&i.type===3?this.yu=this.yu.insert(a,e):e.type===3&&i.type!==1?this.yu=this.yu.insert(a,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.yu=this.yu.insert(a,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.yu=this.yu.insert(a,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.yu=this.yu.remove(a):e.type===1&&i.type===2?this.yu=this.yu.insert(a,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.yu=this.yu.insert(a,{type:2,doc:e.doc}):V():this.yu=this.yu.insert(a,e)}pu(){const e=[];return this.yu.inorderTraversal((a,i)=>{e.push(i)}),e}}class Va{constructor(e,a,i,n,r,d,o,s){this.query=e,this.docs=a,this.oldDocs=i,this.docChanges=n,this.mutatedKeys=r,this.fromCache=d,this.syncStateChanged=o,this.excludesMetadataChanges=s}static fromInitialDocuments(e,a,i,n){const r=[];return a.forEach(d=>{r.push({type:0,doc:d})}),new Va(e,a,Da.emptySet(a),r,i,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const a=this.docChanges,i=e.docChanges;if(a.length!==i.length)return!1;for(let n=0;n<a.length;n++)if(a[n].type!==i[n].type||!a[n].doc.isEqual(i[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.Iu=void 0,this.listeners=[]}}class O1{constructor(){this.queries=new Qa(e=>lb(e),hr),this.onlineState="Unknown",this.Tu=new Set}}async function M1(t,e){const a=B(t),i=e.query;let n=!1,r=a.queries.get(i);if(r||(n=!0,r=new R1),n)try{r.Iu=await a.onListen(i)}catch(d){const o=Jo(d,`Initialization of query '${Ld(e.query)}' failed`);return void e.onError(o)}a.queries.set(i,r),r.listeners.push(e),e.Eu(a.onlineState),r.Iu&&e.Au(r.Iu)&&Zo(a)}async function L1(t,e){const a=B(t),i=e.query;let n=!1;const r=a.queries.get(i);if(r){const d=r.listeners.indexOf(e);d>=0&&(r.listeners.splice(d,1),n=r.listeners.length===0)}if(n)return a.queries.delete(i),a.onUnlisten(i)}function z1(t,e){const a=B(t);let i=!1;for(const n of e){const r=n.query,d=a.queries.get(r);if(d){for(const o of d.listeners)o.Au(n)&&(i=!0);d.Iu=n}}i&&Zo(a)}function F1(t,e,a){const i=B(t),n=i.queries.get(e);if(n)for(const r of n.listeners)r.onError(a);i.queries.delete(e)}function Zo(t){t.Tu.forEach(e=>{e.next()})}class P1{constructor(e,a,i){this.query=e,this.Ru=a,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=i||{}}Au(e){if(!this.options.includeMetadataChanges){const i=[];for(const n of e.docChanges)n.type!==3&&i.push(n);e=new Va(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let a=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),a=!0):this.Vu(e,this.onlineState)&&(this.Su(e),a=!0),this.Pu=e,a}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let a=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),a=!0),a}Vu(e,a){if(!e.fromCache)return!0;const i=a!=="Offline";return(!this.options.Du||!i)&&(!e.docs.isEmpty()||a==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const a=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}Su(e){e=Va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.key=e}}class $b{constructor(e){this.key=e}}class V1{constructor(e,a){this.query=e,this.Fu=a,this.$u=null,this.current=!1,this.Bu=q(),this.mutatedKeys=q(),this.Lu=cb(e),this.Uu=new Da(this.Lu)}get qu(){return this.Fu}Ku(e,a){const i=a?a.Gu:new Bl,n=a?a.Uu:this.Uu;let r=a?a.mutatedKeys:this.mutatedKeys,d=n,o=!1;const s=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,l=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((c,b)=>{const h=n.get(c),m=Bo(this.query,b)?b:null,k=!!h&&this.mutatedKeys.has(h.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;h&&m?h.data.isEqual(m.data)?k!==A&&(i.track({type:3,doc:m}),I=!0):this.Qu(h,m)||(i.track({type:2,doc:m}),I=!0,(s&&this.Lu(m,s)>0||l&&this.Lu(m,l)<0)&&(o=!0)):!h&&m?(i.track({type:0,doc:m}),I=!0):h&&!m&&(i.track({type:1,doc:h}),I=!0,(s||l)&&(o=!0)),I&&(m?(d=d.add(m),r=A?r.add(c):r.delete(c)):(d=d.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const c=this.query.limitType==="F"?d.last():d.first();d=d.delete(c.key),r=r.delete(c.key),i.track({type:1,doc:c})}return{Uu:d,Gu:i,Oi:o,mutatedKeys:r}}Qu(e,a){return e.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(e,a,i){const n=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((l,c)=>function(b,h){const m=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return m(b)-m(h)}(l.type,c.type)||this.Lu(l.doc,c.doc)),this.ju(i);const d=a?this.Wu():[],o=this.Bu.size===0&&this.current?1:0,s=o!==this.$u;return this.$u=o,r.length!==0||s?{snapshot:new Va(this.query,e.Uu,n,r,e.mutatedKeys,o===0,s,!1),zu:d}:{zu:d}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Bl,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(a=>this.Fu=this.Fu.add(a)),e.modifiedDocuments.forEach(a=>{}),e.removedDocuments.forEach(a=>this.Fu=this.Fu.delete(a)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=q(),this.Uu.forEach(i=>{this.Hu(i.key)&&(this.Bu=this.Bu.add(i.key))});const a=[];return e.forEach(i=>{this.Bu.has(i)||a.push(new $b(i))}),this.Bu.forEach(i=>{e.has(i)||a.push(new Ub(i))}),a}Ju(e){this.Fu=e.ji,this.Bu=q();const a=this.Ku(e.documents);return this.applyChanges(a,!0)}Yu(){return Va.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class j1{constructor(e,a,i){this.query=e,this.targetId=a,this.view=i}}class B1{constructor(e){this.key=e,this.Xu=!1}}class U1{constructor(e,a,i,n,r,d){this.localStore=e,this.remoteStore=a,this.eventManager=i,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=d,this.Zu={},this.tc=new Qa(o=>lb(o),hr),this.ec=new Map,this.nc=new Set,this.sc=new pe(L.comparator),this.ic=new Map,this.rc=new Go,this.oc={},this.uc=new Map,this.cc=Pa.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function $1(t,e){const a=Z1(t);let i,n;const r=a.tc.get(e);if(r)i=r.targetId,a.sharedClientState.addLocalQueryTarget(i),n=r.view.Yu();else{const d=await c1(a.localStore,ca(e));a.isPrimaryClient&&Lb(a.remoteStore,d);const o=a.sharedClientState.addLocalQueryTarget(d.targetId);i=d.targetId,n=await q1(a,e,i,o==="current")}return n}async function q1(t,e,a,i){t.hc=(c,b,h)=>async function(m,k,A,I){let z=k.view.Ku(A);z.Oi&&(z=await Fl(m.localStore,k.query,!1).then(({documents:ae})=>k.view.Ku(ae,z)));const te=I&&I.targetChanges.get(k.targetId),ne=k.view.applyChanges(z,m.isPrimaryClient,te);return $l(m,k.targetId,ne.zu),ne.snapshot}(t,c,b,h);const n=await Fl(t.localStore,e,!0),r=new V1(e,n.ji),d=r.Ku(n.documents),o=Gi.createSynthesizedTargetChangeForCurrentChange(a,i&&t.onlineState!=="Offline"),s=r.applyChanges(d,t.isPrimaryClient,o);$l(t,a,s.zu);const l=new j1(e,a,r);return t.tc.set(e,l),t.ec.has(a)?t.ec.get(a).push(e):t.ec.set(a,[e]),s.snapshot}async function G1(t,e){const a=B(t),i=a.tc.get(e),n=a.ec.get(i.targetId);if(n.length>1)return a.ec.set(i.targetId,n.filter(r=>!hr(r,e))),void a.tc.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(i.targetId),a.sharedClientState.isActiveQueryTarget(i.targetId)||await Vd(a.localStore,i.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(i.targetId),zb(a.remoteStore,i.targetId),jd(a,i.targetId)}).catch(Bi)):(jd(a,i.targetId),await Vd(a.localStore,i.targetId,!0))}async function H1(t,e,a){const i=e4(t);try{const n=await function(r,d){const o=B(r),s=ve.now(),l=d.reduce((h,m)=>h.add(m.key),q());let c,b;return o.persistence.runTransaction("Locally write mutations","readwrite",h=>{let m=Et(),k=q();return o.Ui.getEntries(h,l).next(A=>{m=A,m.forEach((I,z)=>{z.isValidDocument()||(k=k.add(I))})}).next(()=>o.localDocuments.getOverlayedDocuments(h,m)).next(A=>{c=A;const I=[];for(const z of d){const te=hg(z,c.get(z.key).overlayedDocument);te!=null&&I.push(new Ut(z.key,te,rb(te.value.mapValue),dt.exists(!0)))}return o.mutationQueue.addMutationBatch(h,s,I,d)}).next(A=>{b=A;const I=A.applyToLocalDocumentSet(c,k);return o.documentOverlayCache.saveOverlays(h,A.batchId,I)})}).then(()=>({batchId:b.batchId,changes:xb(c)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(n.batchId),function(r,d,o){let s=r.oc[r.currentUser.toKey()];s||(s=new pe(Y)),s=s.insert(d,o),r.oc[r.currentUser.toKey()]=s}(i,n.batchId,a),await Ki(i,n.changes),await yr(i.remoteStore)}catch(n){const r=Jo(n,"Failed to persist write");a.reject(r)}}async function qb(t,e){const a=B(t);try{const i=await o1(a.localStore,e);e.targetChanges.forEach((n,r)=>{const d=a.ic.get(r);d&&(ie(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1),n.addedDocuments.size>0?d.Xu=!0:n.modifiedDocuments.size>0?ie(d.Xu):n.removedDocuments.size>0&&(ie(d.Xu),d.Xu=!1))}),await Ki(a,i,e)}catch(i){await Bi(i)}}function Ul(t,e,a){const i=B(t);if(i.isPrimaryClient&&a===0||!i.isPrimaryClient&&a===1){const n=[];i.tc.forEach((r,d)=>{const o=d.view.Eu(e);o.snapshot&&n.push(o.snapshot)}),function(r,d){const o=B(r);o.onlineState=d;let s=!1;o.queries.forEach((l,c)=>{for(const b of c.listeners)b.Eu(d)&&(s=!0)}),s&&Zo(o)}(i.eventManager,e),n.length&&i.Zu.Go(n),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function K1(t,e,a){const i=B(t);i.sharedClientState.updateQueryState(e,"rejected",a);const n=i.ic.get(e),r=n&&n.key;if(r){let d=new pe(L.comparator);d=d.insert(r,Te.newNoDocument(r,$.min()));const o=q().add(r),s=new pr($.min(),new Map,new me(Y),d,o);await qb(i,s),i.sc=i.sc.remove(r),i.ic.delete(e),es(i)}else await Vd(i.localStore,e,!1).then(()=>jd(i,e,a)).catch(Bi)}async function W1(t,e){const a=B(t),i=e.batch.batchId;try{const n=await d1(a.localStore,e);Hb(a,i,null),Gb(a,i),a.sharedClientState.updateMutationState(i,"acknowledged"),await Ki(a,n)}catch(n){await Bi(n)}}async function Q1(t,e,a){const i=B(t);try{const n=await function(r,d){const o=B(r);return o.persistence.runTransaction("Reject batch","readwrite-primary",s=>{let l;return o.mutationQueue.lookupMutationBatch(s,d).next(c=>(ie(c!==null),l=c.keys(),o.mutationQueue.removeMutationBatch(s,c))).next(()=>o.mutationQueue.performConsistencyCheck(s)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(s,l,d)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,l)).next(()=>o.localDocuments.getDocuments(s,l))})}(i.localStore,e);Hb(i,e,a),Gb(i,e),i.sharedClientState.updateMutationState(e,"rejected",a),await Ki(i,n)}catch(n){await Bi(n)}}function Gb(t,e){(t.uc.get(e)||[]).forEach(a=>{a.resolve()}),t.uc.delete(e)}function Hb(t,e,a){const i=B(t);let n=i.oc[i.currentUser.toKey()];if(n){const r=n.get(e);r&&(a?r.reject(a):r.resolve(),n=n.remove(e)),i.oc[i.currentUser.toKey()]=n}}function jd(t,e,a=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),a&&t.Zu.lc(i,a);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(i=>{t.rc.containsKey(i)||Kb(t,i)})}function Kb(t,e){t.nc.delete(e.path.canonicalString());const a=t.sc.get(e);a!==null&&(zb(t.remoteStore,a),t.sc=t.sc.remove(e),t.ic.delete(a),es(t))}function $l(t,e,a){for(const i of a)i instanceof Ub?(t.rc.addReference(i.key,e),X1(t,i)):i instanceof $b?(N("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||Kb(t,i.key)):V()}function X1(t,e){const a=e.key,i=a.path.canonicalString();t.sc.get(a)||t.nc.has(i)||(N("SyncEngine","New document in limbo: "+a),t.nc.add(i),es(t))}function es(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const a=new L(se.fromString(e)),i=t.cc.next();t.ic.set(i,new B1(a)),t.sc=t.sc.insert(a,i),Lb(t.remoteStore,new ia(ca(jo(a.path)),i,2,zo.ot))}}async function Ki(t,e,a){const i=B(t),n=[],r=[],d=[];i.tc.isEmpty()||(i.tc.forEach((o,s)=>{d.push(i.hc(s,e,a).then(l=>{if(l){i.isPrimaryClient&&i.sharedClientState.updateQueryState(s.targetId,l.fromCache?"not-current":"current"),n.push(l);const c=Ko.Vi(s.targetId,l);r.push(c)}}))}),await Promise.all(d),i.Zu.Go(n),await async function(o,s){const l=B(o);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(s,b=>x.forEach(b.Pi,h=>l.persistence.referenceDelegate.addReference(c,b.targetId,h)).next(()=>x.forEach(b.vi,h=>l.persistence.referenceDelegate.removeReference(c,b.targetId,h)))))}catch(c){if(!Ui(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of s){const b=c.targetId;if(!c.fromCache){const h=l.$i.get(b),m=h.snapshotVersion,k=h.withLastLimboFreeSnapshotVersion(m);l.$i=l.$i.insert(b,k)}}}(i.localStore,r))}async function Y1(t,e){const a=B(t);if(!a.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const i=await Nb(a.localStore,e);a.currentUser=e,function(n,r){n.uc.forEach(d=>{d.forEach(o=>{o.reject(new M(y.CANCELLED,r))})}),n.uc.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ki(a,i.Ki)}}function J1(t,e){const a=B(t),i=a.ic.get(e);if(i&&i.Xu)return q().add(i.key);{let n=q();const r=a.ec.get(e);if(!r)return n;for(const d of r){const o=a.tc.get(d);n=n.unionWith(o.view.qu)}return n}}function Z1(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K1.bind(null,e),e.Zu.Go=z1.bind(null,e.eventManager),e.Zu.lc=F1.bind(null,e.eventManager),e}function e4(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q1.bind(null,e),e}class t4{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=gr(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,a){return null}gc(e,a){return null}wc(e){return r1(this.persistence,new i1,e.initialUser,this.wt)}_c(e){return new t1(Ho.Ms,this.wt)}dc(e){return new b1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a4{async initialize(e,a){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ul(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y1.bind(null,this.syncEngine),await N1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new O1}createDatastore(e){const a=gr(e.databaseInfo.databaseId),i=(n=e.databaseInfo,new m1(n));var n;return function(r,d,o,s){return new w1(r,d,o,s)}(e.authCredentials,e.appCheckCredentials,i,a)}createRemoteStore(e){return a=this.localStore,i=this.datastore,n=e.asyncQueue,r=o=>Ul(this.syncEngine,o,0),d=Vl.V()?new Vl:new f1,new x1(a,i,n,r,d);var a,i,n,r,d}createSyncEngine(e,a){return function(i,n,r,d,o,s,l){const c=new U1(i,n,r,d,o,s);return l&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,a)}terminate(){return async function(e){const a=B(e);N("RemoteStore","RemoteStore shutting down."),a.lu.add(5),await Hi(a),a.du.shutdown(),a._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,a){this.muted||setTimeout(()=>{this.muted||e(a)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,a,i,n){this.authCredentials=e,this.appCheckCredentials=a,this.asyncQueue=i,this.databaseInfo=n,this.user=Ue.UNAUTHENTICATED,this.clientId=tb.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new aa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(a){const i=Jo(a,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function r4(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const a=await t.getConfiguration();await e.initialize(a);let i=a.initialUser;t.setCredentialChangeListener(async n=>{i.isEqual(n)||(await Nb(e.localStore,n),i=n)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function d4(t,e){t.asyncQueue.verifyOperationInProgress();const a=await o4(t);N("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(a,i),t.setCredentialChangeListener(n=>jl(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,r)=>jl(e.remoteStore,r)),t.onlineComponents=e}async function o4(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await r4(t,new t4)),t.offlineComponents}async function Wb(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await d4(t,new a4)),t.onlineComponents}function s4(t){return Wb(t).then(e=>e.syncEngine)}async function ql(t){const e=await Wb(t),a=e.eventManager;return a.onListen=$1.bind(null,e.syncEngine),a.onUnlisten=G1.bind(null,e.syncEngine),a}const Gl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t,e,a){if(!a)throw new M(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function l4(t,e,a,i){if(e===!0&&i===!0)throw new M(y.INVALID_ARGUMENT,`${t} and ${a} cannot be used together.`)}function Hl(t){if(!L.isDocumentKey(t))throw new M(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kl(t){if(L.isDocumentKey(t))throw new M(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ts(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function na(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=ts(t);throw new M(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${a}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){var a;if(e.host===void 0){if(e.ssl!==void 0)throw new M(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(a=e.ssl)===null||a===void 0||a;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,l4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,a,i){this._authCredentials=a,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1,e instanceof za?this._databaseId=e:(this._app=e,this._databaseId=function(n){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new M(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(n.options.projectId)}(e))}get app(){if(!this._app)throw new M(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Ap;switch(a.type){case"gapi":const i=a.client;return ie(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Rp(i,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new M(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const a=Gl.get(e);a&&(N("ComponentProvider","Removing Datastore"),Gl.delete(e),a.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,a,i){this.converter=a,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Wi{constructor(e,a,i){this.converter=a,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Wi(this.firestore,e,this._query)}}class Ot extends Wi{constructor(e,a,i){super(e,a,jo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new L(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function c4(t,e,...a){if(t=xt(t),Qb("collection","path",e),t instanceof as){const i=se.fromString(e,...a);return Kl(i),new Ot(t,null,i)}{if(!(t instanceof Ke||t instanceof Ot))throw new M(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(se.fromString(e,...a));return Kl(i),new Ot(t.firestore,null,i)}}function Bd(t,e,...a){if(t=xt(t),arguments.length===1&&(e=tb.I()),Qb("doc","path",e),t instanceof as){const i=se.fromString(e,...a);return Hl(i),new Ke(t,null,new L(i))}{if(!(t instanceof Ke||t instanceof Ot))throw new M(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(se.fromString(e,...a));return Hl(i),new Ke(t.firestore,t instanceof Ot?t.converter:null,new L(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ob(this,"async_queue_retry"),this.Kc=()=>{const a=Yr();a&&N("AsyncQueue","Visibility state changed to "+a.visibilityState),this.So.Eo()};const e=Yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const a=Yr();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const a=new aa;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Ui(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const a=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const n=function(r){let d=r.message||"";return r.stack&&(d=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),d}(i);throw zt("INTERNAL UNHANDLED ERROR: ",n),i}).then(i=>(this.Lc=!1,i))));return this.Oc=a,a}enqueueAfterDelay(e,a,i){this.Gc(),this.qc.indexOf(e)>-1&&(a=0);const n=Yo.createAndSchedule(this,e,a,i,r=>this.Wc(r));return this.$c.push(n),n}Gc(){this.Bc&&V()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const a of this.$c)if(a.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((a,i)=>a.targetTimeMs-i.targetTimeMs);for(const a of this.$c)if(a.skipDelay(),e!=="all"&&a.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const a=this.$c.indexOf(e);this.$c.splice(a,1)}}function Ql(t){return function(e,a){if(typeof e!="object"||e===null)return!1;const i=e;for(const n of a)if(n in i&&typeof i[n]=="function")return!0;return!1}(t,["next","error","complete"])}class ja extends as{constructor(e,a,i){super(e,a,i),this.type="firestore",this._queue=new u4,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Yb(this),this._firestoreClient.terminate()}}function b4(t=bm()){return om(t,"firestore").getImmediate()}function Xb(t){return t._firestoreClient||Yb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yb(t){var e;const a=t._freezeSettings(),i=function(n,r,d,o){return new $p(n,r,d,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,a);t._firestoreClient=new n4(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(...e){for(let a=0;a<e.length;++a)if(e[a].length===0)throw new M(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ba(Se.fromBase64String(e))}catch(a){throw new M(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(e){return new Ba(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,a){if(!isFinite(e)||e<-90||e>90)throw new M(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(a)||a<-180||a>180)throw new M(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=e,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=/^__.*__$/;class h4{constructor(e,a,i){this.data=e,this.fieldMask=a,this.fieldTransforms=i}toMutation(e,a){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,a,this.fieldTransforms):new qi(e,this.data,a,this.fieldTransforms)}}class Jb{constructor(e,a,i){this.data=e,this.fieldMask=a,this.fieldTransforms=i}toMutation(e,a){return new Ut(e,this.data,this.fieldMask,a,this.fieldTransforms)}}function Zb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class rs{constructor(e,a,i,n,r,d){this.settings=e,this.databaseId=a,this.wt=i,this.ignoreUndefinedProperties=n,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new rs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var a;const i=(a=this.path)===null||a===void 0?void 0:a.child(e),n=this.ta({path:i,na:!1});return n.sa(e),n}ia(e){var a;const i=(a=this.path)===null||a===void 0?void 0:a.child(e),n=this.ta({path:i,na:!1});return n.Xc(),n}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Vn(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(a=>e.isPrefixOf(a))!==void 0||this.fieldTransforms.find(a=>e.isPrefixOf(a.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Zb(this.Zc)&&f4.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class v4{constructor(e,a,i){this.databaseId=e,this.ignoreUndefinedProperties=a,this.wt=i||gr(e)}aa(e,a,i,n=!1){return new rs({Zc:e,methodName:a,ca:i,path:Ne.emptyPath(),na:!1,ua:n},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ef(t){const e=t._freezeSettings(),a=gr(t._databaseId);return new v4(t._databaseId,!!e.ignoreUndefinedProperties,a)}function m4(t,e,a,i,n,r={}){const d=t.aa(r.merge||r.mergeFields?2:0,e,a,n);ds("Data must be an object, but it was:",d,i);const o=tf(i,d);let s,l;if(r.merge)s=new Je(d.fieldMask),l=d.fieldTransforms;else if(r.mergeFields){const c=[];for(const b of r.mergeFields){const h=Ud(e,b,a);if(!d.contains(h))throw new M(y.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);nf(c,h)||c.push(h)}s=new Je(c),l=d.fieldTransforms.filter(b=>s.covers(b.field))}else s=null,l=d.fieldTransforms;return new h4(new $e(o),s,l)}class kr extends is{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kr}}function p4(t,e,a,i){const n=t.aa(1,e,a);ds("Data must be an object, but it was:",n,i);const r=[],d=$e.empty();ba(i,(s,l)=>{const c=os(e,s,a);l=xt(l);const b=n.ia(c);if(l instanceof kr)r.push(c);else{const h=Er(l,b);h!=null&&(r.push(c),d.set(c,h))}});const o=new Je(r);return new Jb(d,o,n.fieldTransforms)}function g4(t,e,a,i,n,r){const d=t.aa(1,e,a),o=[Ud(e,i,a)],s=[n];if(r.length%2!=0)throw new M(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)o.push(Ud(e,r[h])),s.push(r[h+1]);const l=[],c=$e.empty();for(let h=o.length-1;h>=0;--h)if(!nf(l,o[h])){const m=o[h];let k=s[h];k=xt(k);const A=d.ia(m);if(k instanceof kr)l.push(m);else{const I=Er(k,A);I!=null&&(l.push(m),c.set(m,I))}}const b=new Je(l);return new Jb(c,b,d.fieldTransforms)}function Er(t,e){if(af(t=xt(t)))return ds("Unsupported field value:",e,t),tf(t,e);if(t instanceof is)return function(a,i){if(!Zb(i.Zc))throw i.oa(`${a._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${a._methodName}() is not currently supported inside arrays`);const n=a._toFieldTransform(i);n&&i.fieldTransforms.push(n)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(a,i){const n=[];let r=0;for(const d of a){let o=Er(d,i.ra(r));o==null&&(o={nullValue:"NULL_VALUE"}),n.push(o),r++}return{arrayValue:{values:n}}}(t,e)}return function(a,i){if((a=xt(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return sg(i.wt,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const n=ve.fromDate(a);return{timestampValue:Fn(i.wt,n)}}if(a instanceof ve){const n=new ve(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Fn(i.wt,n)}}if(a instanceof ns)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Ba)return{bytesValue:Ib(i.wt,a._byteString)};if(a instanceof Ke){const n=i.databaseId,r=a.firestore._databaseId;if(!r.isEqual(n))throw i.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$o(a.firestore._databaseId||i.databaseId,a._key.path)}}throw i.oa(`Unsupported field value: ${ts(a)}`)}(t,e)}function tf(t,e){const a={};return ab(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ba(t,(i,n)=>{const r=Er(n,e.ea(i));r!=null&&(a[i]=r)}),{mapValue:{fields:a}}}function af(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof ns||t instanceof Ba||t instanceof Ke||t instanceof is)}function ds(t,e,a){if(!af(a)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(a)){const i=ts(a);throw i==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+i)}}function Ud(t,e,a){if((e=xt(e))instanceof xr)return e._internalPath;if(typeof e=="string")return os(t,e);throw Vn("Field path arguments must be of type string or ",t,!1,void 0,a)}const w4=new RegExp("[~\\*/\\[\\]]");function os(t,e,a){if(e.search(w4)>=0)throw Vn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,a);try{return new xr(...e.split("."))._internalPath}catch{throw Vn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,a)}}function Vn(t,e,a,i,n){const r=i&&!i.isEmpty(),d=n!==void 0;let o=`Function ${e}() called with invalid data`;a&&(o+=" (via `toFirestore()`)"),o+=". ";let s="";return(r||d)&&(s+=" (found",r&&(s+=` in field ${i}`),d&&(s+=` in document ${n}`),s+=")"),new M(y.INVALID_ARGUMENT,o+t+s)}function nf(t,e){return t.some(a=>a.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,a,i,n,r){this._firestore=e,this._userDataWriter=a,this._key=i,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const a=this._document.data.field(ss("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a)}}}class y4 extends rf{data(){return super.data()}}function ss(t,e){return typeof e=="string"?os(t,e):e instanceof xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,a){this.hasPendingWrites=e,this.fromCache=a}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class df extends rf{constructor(e,a,i,n,r,d){super(e,a,i,n,d),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const a=new mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,a={}){if(this._document){const i=this._document.data.field(ss("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,a.serverTimestamps)}}}class mn extends df{data(e={}){return super.data(e)}}class x4{constructor(e,a,i,n){this._firestore=e,this._userDataWriter=a,this._snapshot=n,this.metadata=new ni(n.hasPendingWrites,n.fromCache),this.query=i}get docs(){const e=[];return this.forEach(a=>e.push(a)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,a){this._snapshot.docs.forEach(i=>{e.call(a,new mn(this._firestore,this._userDataWriter,i.key,i,new ni(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const a=!!e.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new M(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(i,n){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(d=>({type:"added",doc:new mn(i._firestore,i._userDataWriter,d.doc.key,d.doc,new ni(i._snapshot.mutatedKeys.has(d.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(d=>n||d.type!==3).map(d=>{const o=new mn(i._firestore,i._userDataWriter,d.doc.key,d.doc,new ni(i._snapshot.mutatedKeys.has(d.doc.key),i._snapshot.fromCache),i.query.converter);let s=-1,l=-1;return d.type!==0&&(s=r.indexOf(d.doc.key),r=r.delete(d.doc.key)),d.type!==1&&(r=r.add(d.doc),l=r.indexOf(d.doc.key)),{type:k4(d.type),doc:o,oldIndex:s,newIndex:l}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function k4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class T4{}function _4(t,...e){for(const a of e)t=a._apply(t);return t}class I4 extends T4{constructor(e,a){super(),this.fa=e,this.wa=a,this.type="orderBy"}_apply(e){const a=function(i,n,r){if(i.startAt!==null)throw new M(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const d=new Aa(n,r);return function(o,s){if(ob(o)===null){const l=sb(o);l!==null&&S4(o,l,s.field)}}(i,d),d}(e._query,this.fa,this.wa);return new Wi(e.firestore,e.converter,function(i,n){const r=i.explicitOrderBy.concat([n]);return new $i(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,a))}}function C4(t,e="asc"){const a=e,i=ss("orderBy",t);return new I4(i,a)}function S4(t,e,a){if(!a.isEqual(e))throw new M(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${a.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{convertValue(e,a="none"){switch(la(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,a);case 5:return e.stringValue;case 6:return this.convertBytes(La(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,a);case 10:return this.convertObject(e.mapValue,a);default:throw V()}}convertObject(e,a){const i={};return ba(e.fields,(n,r)=>{i[n]=this.convertValue(r,a)}),i}convertGeoPoint(e){return new ns(fe(e.latitude),fe(e.longitude))}convertArray(e,a){return(e.values||[]).map(i=>this.convertValue(i,a))}convertServerTimestamp(e,a){switch(a){case"previous":const i=nb(e);return i==null?null:this.convertValue(i,a);case"estimate":return this.convertTimestamp(Ci(e));default:return null}}convertTimestamp(e){const a=Pt(e);return new ve(a.seconds,a.nanos)}convertDocumentKey(e,a){const i=se.fromString(e);ie(Db(i));const n=new za(i.get(1),i.get(3)),r=new L(i.popFirst(5));return n.isEqual(a)||zt(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(t,e,a){let i;return i=t?a&&(a.merge||a.mergeFields)?t.toFirestore(e,a):t.toFirestore(e):e,i}class of extends A4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ba(e)}convertReference(e){const a=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,a)}}function N4(t,e,a,...i){t=na(t,Ke);const n=na(t.firestore,ja),r=ef(n);let d;return d=typeof(e=xt(e))=="string"||e instanceof xr?g4(r,"updateDoc",t._key,e,a,i):p4(r,"updateDoc",t._key,e),ls(n,[d.toMutation(t._key,dt.exists(!0))])}function R4(t){return ls(na(t.firestore,ja),[new Uo(t._key,dt.none())])}function O4(t,e){const a=na(t.firestore,ja),i=Bd(t),n=D4(t.converter,e);return ls(a,[m4(ef(t.firestore),"addDoc",i._key,n,t.converter!==null,{}).toMutation(i._key,dt.exists(!1))]).then(()=>i)}function M4(t,...e){var a,i,n;t=xt(t);let r={includeMetadataChanges:!1},d=0;typeof e[d]!="object"||Ql(e[d])||(r=e[d],d++);const o={includeMetadataChanges:r.includeMetadataChanges};if(Ql(e[d])){const b=e[d];e[d]=(a=b.next)===null||a===void 0?void 0:a.bind(b),e[d+1]=(i=b.error)===null||i===void 0?void 0:i.bind(b),e[d+2]=(n=b.complete)===null||n===void 0?void 0:n.bind(b)}let s,l,c;if(t instanceof Ke)l=na(t.firestore,ja),c=jo(t._key.path),s={next:b=>{e[d]&&e[d](L4(l,t,b))},error:e[d+1],complete:e[d+2]};else{const b=na(t,Wi);l=na(b.firestore,ja),c=b._query;const h=new of(l);s={next:m=>{e[d]&&e[d](new x4(l,h,b,m))},error:e[d+1],complete:e[d+2]},E4(t._query)}return function(b,h,m,k){const A=new i4(k),I=new P1(h,A,m);return b.asyncQueue.enqueueAndForget(async()=>M1(await ql(b),I)),()=>{A.Tc(),b.asyncQueue.enqueueAndForget(async()=>L1(await ql(b),I))}}(Xb(l),c,o,s)}function ls(t,e){return function(a,i){const n=new aa;return a.asyncQueue.enqueueAndForget(async()=>H1(await s4(a),i,n)),n.promise}(Xb(t),e)}function L4(t,e,a){const i=a.docs.get(e._key),n=new of(t);return new df(t,n,e._key,i,new ni(a.hasPendingWrites,a.fromCache),e.converter)}(function(t,e=!0){(function(a){Wa=a})(cm),En(new wi("firestore",(a,{options:i})=>{const n=a.getProvider("app").getImmediate(),r=new ja(n,new Dp(a.getProvider("auth-internal")),new Mp(a.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Ca(gl,"3.4.10",t),Ca(gl,"3.4.10","esm2017")})();var z4="firebase",F4="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ca(z4,F4,"app");const P4={apiKey:"AIzaSyBzeW_Af-B9i79OIYidya5emF9vdJdmRsI",authDomain:"vue3-my-todo.firebaseapp.com",projectId:"vue3-my-todo",storageBucket:"vue3-my-todo.appspot.com",messagingSenderId:"558662530417",appId:"1:558662530417:web:05c25b0b35f5e42aea32d0"},V4=um(P4),j4=b4(V4);var B4=(t,e)=>{const a=t.__vccOpts||t;for(const[i,n]of e)a[i]=n;return a};const U4=t=>(mh("data-v-da10dbe4"),t=t(),ph(),t),$4={class:"my-todo"},q4=U4(()=>De("div",{class:"title has-text-centered"}," Todo list ",-1)),G4=["onSubmit"],H4={class:"field is-grouped mb-5"},K4={class:"control is-expanded pr-2"},W4={class:"control"},Q4=["disabled"],X4={class:"card-content"},Y4={class:"content"},J4={class:"columns is-mobile"},Z4={class:"column is-5 has-text-right"},ew=["onClick"],tw=["onClick"],aw={__name:"App",setup(t){const e=c4(j4,"todos"),a=_4(e,C4("date","desc")),i=Cs([]);no(()=>{M4(a,s=>{const l=[];s.forEach(c=>{const b={id:c.id,content:c.data().content,done:c.data().done};l.push(b)}),i.value=l})});const n=Cs(""),r=()=>{O4(e,{content:n.value,done:!1,date:Date.now()}),n.value=""},d=s=>{R4(Bd(e,s))},o=s=>{const l=i.value.findIndex(c=>c.id===s);N4(Bd(e,s),{done:!i.value[l].done})};return(s,l)=>(Mr(),Lr("div",$4,[q4,De("form",{onSubmit:Kv(r,["prevent"])},[De("div",H4,[De("p",K4,[jh(De("input",{class:"input",type:"text",placeholder:"Add a todo","onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c)},null,512),[[qv,n.value]])]),De("p",W4,[De("button",{class:"button is-info",disabled:!n.value}," Add ",8,Q4)])])],40,G4),(Mr(!0),Lr(tt,null,Uh(i.value,c=>(Mr(),Lr("div",{class:Ea(["card mb-5",{"has-background-success-light":c.done}])},[De("div",X4,[De("div",Y4,[De("div",J4,[De("div",{class:Ea(["column",{"has-text-success line-through":c.done}])},xf(c.content),3),De("div",Z4,[De("button",{class:Ea(["button",c.done?"is-success":"is-light"]),onClick:b=>o(c.id)}," \u2713 ",10,ew),De("button",{class:"button is-danger ml-2",onClick:b=>d(c.id)}," \u2717 ",8,tw)])])])])],2))),256))]))}};var iw=B4(aw,[["__scopeId","data-v-da10dbe4"]]);Xv(iw).mount("#app");
