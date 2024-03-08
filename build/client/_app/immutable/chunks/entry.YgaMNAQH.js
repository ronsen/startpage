import{n as ut,s as de,t as mt}from"./scheduler.T6Z1JCpH.js";new URL("sveltekit-internal://");function he(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function pe(t){return t.split("%25").map(decodeURI).join("%25")}function ge(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function dt({href:t}){return t.split("#")[0]}const me=["href","pathname","search","toString","toJSON"];function _e(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of me)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ye="/__data.json",we=".html__data.json";function ve(t){return t.endsWith(".html")?t.replace(/\.html$/,we):t.replace(/\/$/,"")+ye}function be(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ee(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const qt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(bt(t)),qt(t,n));const G=new Map;function ke(t,n){const e=bt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ee(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Se(t,n,e){if(G.size>0){const r=bt(t,e),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,e)}function bt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${be(...a)}"]`}return r}const Ae=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Re(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Le(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ht(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ht(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ae.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ht(c)}).join("")}).join("")}/?$`),params:n}}function Ie(t){return!/^\([^)]+\)$/.test(t)}function Le(t){return t.slice(1).split("/").filter(Ie)}function Pe(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ht(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ue({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Re(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return Pe(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Gt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Tt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const O=[];function Et(t,n=ut){let e;const r=new Set;function a(s){if(de(t,s)&&(t=s,e)){const c=!O.length;for(const l of r)l[1](),O.push(l,t);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(t))}function i(s,c=ut){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||ut),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Vt;const I=((Vt=globalThis.__sveltekit_16prfjn)==null?void 0:Vt.base)??"";var Ft;const xe=((Ft=globalThis.__sveltekit_16prfjn)==null?void 0:Ft.assets)??I,Te="1709867375230",Mt="sveltekit:snapshot",Ht="sveltekit:scroll",Bt="sveltekit:states",Ne="sveltekit:pageurl",D="sveltekit:history",M="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Kt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function kt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Nt={...W,"":W.hover};function zt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Jt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=zt(t)}}function _t(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||nt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===J&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function X(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=zt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Nt[r??"off"],preload_data:Nt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ot(t){const n=Et(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Oe(){const{set:t,subscribe:n}=Et(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${xe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Te;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function nt(t,n){return t.origin!==J||!t.pathname.startsWith(n)}const je=-1,$e=-2,De=-3,Ce=-4,Ve=-5,Fe=-6;function nn(t,n){return Yt(JSON.parse(t),n)}function Yt(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===je)return;if(o===De)return NaN;if(o===Ce)return 1/0;if(o===Ve)return-1/0;if(o===Fe)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==$e&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Wt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Wt];const qe=new Set([...Wt]);[...qe];function Ge(t){return t.filter(n=>n!=null)}class at{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xt{constructor(n,e){this.status=n,this.location=e}}class St extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Me="x-sveltekit-invalidated",He="x-sveltekit-trailing-slash";function Z(t){return t instanceof at||t instanceof St?t.status:500}function Be(t){return t instanceof St?t.text:"Internal Error"}const N=Gt(Ht)??{},H=Gt(Mt)??{},U={url:Ot({}),page:Ot({}),navigating:Et(null),updated:Oe()};function At(t){N[t]=kt()}function Ke(t,n){let e=t+1;for(;N[e];)delete N[e],e+=1;for(e=n+1;H[e];)delete H[e],e+=1}function C(t){return location.href=t.href,new Promise(()=>{})}function jt(){}let rt,yt,Q,L,wt,F;const Zt=[],tt=[];let P=null;const Qt=[],ze=[];let $=[],y={branch:[],error:null,url:null},Rt=!1,et=!1,$t=!0,B=!1,q=!1,te=!1,ot=!1,T,k,R,A,V,pt;async function an(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),F=t,rt=Ue(t),L=document.documentElement,wt=n,yt=t.nodes[0],Q=t.nodes[1],yt(),Q(),k=(a=history.state)==null?void 0:a[D],R=(o=history.state)==null?void 0:o[M],k||(k=R=Date.now(),history.replaceState({...history.state,[D]:k,[M]:R},""));const r=N[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await tn(wt,e):Ze(location.href,{replaceState:!0}),Qe()}async function Je(){if(await(pt||(pt=Promise.resolve())),!pt)return;pt=null;const t=ct(y.url,!0);P=null;const n=V={},e=t&&await Pt(t);if(!(!e||n!==V)){if(e.type==="redirect")return st(new URL(e.location,y.url).href,{},1,n);e.props.page&&(A=e.props.page),y=e.state,ee(),T.$set(e.props)}}function ee(){Zt.length=0,ot=!1}function ne(t){tt.some(n=>n==null?void 0:n.snapshot)&&(H[t]=tt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ae(t){var n;(n=H[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=tt[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Dt(){At(k),Tt(Ht,N),ne(R),Tt(Mt,H)}async function st(t,n,e,r){return Y({type:"goto",url:Kt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(ot=!0)}})}async function Ye(t){return P={id:t.id,promise:Pt(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function gt(t){const n=rt.find(e=>e.exec(se(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function re(t,n){var a;y=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),A=t.props.page,T=new F.root({target:n,props:{...t.props,stores:U,components:tt},hydrate:!0}),ae(R);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(o=>o(r)),et=!0}async function K({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=he(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Ge(e).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const m=e[d],f=y.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||i!==void 0&&i!==A.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:A.data}),c}async function It({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:_e(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,e);return s&&d(S.href),S.origin===e.origin&&(v=S.href.slice(e.origin.length)),et?Se(v,S.href,_):ke(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ct(t,n,e,r,a,o){if(ot)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Zt.some(s=>s(new URL(i))))return!0;return!1}function Lt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function We(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}async function Pt({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=y.url?t!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=We(y.url,e);let d=!1;const m=c.map((p,w)=>{var x;const b=y.branch[w],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Ct(d,h,u,g,(x=b.server)==null?void 0:x.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await le(e,m)}catch(p){return it({status:Z(p),error:await z(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,w)=>{var lt;if(!p)return;const b=y.branch[w],E=f==null?void 0:f[w];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Ct(_,h,u,g,(lt=b.universal)==null?void 0:lt.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return It({loader:p[1],url:e,params:r,route:a,parent:async()=>{var xt;const Ut={};for(let ft=0;ft<w;ft+=1)Object.assign(Ut,(xt=await v[ft])==null?void 0:xt.data);return Ut},server_data_node:Lt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(w){if(w instanceof Xt)return{type:"redirect",location:w.location};let b=Z(w),E;if(f!=null&&f.includes(w))b=w.status??b,E=w.error;else if(w instanceof at)E=w.body;else{if(await U.updated.check())return await C(e);E=await z(w,{params:r,url:e,route:{id:a.id}})}const x=await oe(p,S,o);return x?await K({url:e,params:r,branch:S.slice(0,x.idx).concat(x.node),status:b,error:E,route:a}):await ce(e,{id:a.id},E,b)}else S.push(void 0);return await K({url:e,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function oe(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function it({status:t,error:n,url:e,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await le(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==J||e.pathname!==location.pathname||Rt)&&await C(e)}const s=await It({loader:yt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Lt(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return await K({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function ct(t,n){if(!t||nt(t,I))return;let e;try{e=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=se(e);for(const a of rt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:ge(o),url:t}}}function se(t){return pe(t.slice(I.length)||"/")}function ie({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ue(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return B||Qt.forEach(s=>s(i)),a?null:o}async function Y({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=jt,block:u=jt}){const h=ct(n,!1),g=ie({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=k,m=R;l(),B=!0,et&&U.navigating.set(g.navigation),V=c;let f=h&&await Pt(h);if(!f){if(nt(n,I))return await C(n);f=await ce(n,{id:null},await z(new St(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await it({status:500,error:await z(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return st(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await C(n);if(ee(),At(d),ne(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const p=o?0:1,w={[D]:k+=p,[M]:R+=p,[Bt]:i};(o?history.replaceState:history.pushState).call(history,w,"",n),o||Ke(k,R)}if(P=null,f.props.page.state=i,et){y=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(ze.map(w=>w(g.navigation)))).filter(w=>typeof w=="function");if(p.length>0){let w=function(){$=$.filter(b=>!p.includes(b))};p.push(w),$.push(...p)}T.$set(f.props),te=!0}else re(f,wt);const{activeElement:_}=document;await mt();const v=e?e.scroll:a?kt():null;if($t){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&vt(),$t=!0,f.props.page&&(A=f.props.page),B=!1,t==="popstate"&&ae(R),g.fulfil(void 0),$.forEach(p=>p(g.navigation)),U.navigating.set(null)}async function ce(t,n,e,r){return t.origin===J&&t.pathname===location.pathname&&!Rt?await it({status:r,error:e,url:t,route:n}):await C(t)}function Xe(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(gt(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Jt(o,L);if(!s)return;const{url:c,external:l,download:u}=_t(s,I);if(l||u)return;const h=X(s);if(!h.reload)if(i<=h.preload_data){const g=ct(c,!1);g&&Ye(g)}else i<=h.preload_code&&gt(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=_t(o,I);if(s||c)continue;const l=X(o);l.reload||(l.preload_code===W.viewport&&e.observe(o),l.preload_code===W.eager&&gt(i.pathname))}}$.push(a),a()}function z(t,n){if(t instanceof at)return t.body;const e=Z(t),r=Be(t);return F.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Ze(t,n={}){return t=Kt(t),t.origin!==J?Promise.reject(new Error("goto: invalid URL")):st(t,n,0)}function rn(){return ot=!0,Je()}async function on(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=y;if(!r)return;const a=await oe(y.branch.length,e,r.errors);if(a){const o=await K({url:n,params:y.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});y=o.state,T.$set(o.props),mt().then(vt)}}else t.type==="redirect"?st(t.location,{invalidateAll:!0},0):(T.$set({form:null,page:{...A,form:t.data,status:t.status}}),await mt(),T.$set({form:t.data}),t.type==="success"&&vt())}function Qe(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Dt(),!B){const a=ue(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Dt()}),(n=navigator.connection)!=null&&n.saveData||Xe(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Jt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=_t(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ie({url:a,type:"link"})?B=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===dt(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(q=!0,At(k),t(a),!c.replace_state)return;q=!1}e.preventDefault(),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(nt(i,I))return;const s=e.target,c=X(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),Y({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[D]){const a=e.state[D];if(V={},a===k)return;const o=N[a],i=e.state[Bt]??{},s=new URL(e.state[Ne]??location.href),c=e.state[M],l=dt(location)===dt(y.url);if(c===R&&(te||l)){t(s),N[k]=kt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},T.$set({page:A})),k=a;return}const h=a-k;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{k=a,R=c},block:()=>{history.go(-h)},nav_token:V})}else if(!q){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[D]:++k,[M]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...A,url:e}),U.page.notify()}}async function tn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Rt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ct(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=fe(f.uses)),It({loader:F.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:Lt(f)})}),h=await Promise.all(u),g=rt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await K({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Xt){await C(new URL(u.location,location.href));return}l=await it({status:Z(u),error:await z(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),re(l,t)}async function le(t,n){var a;const e=new URL(t);e.pathname=ve(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(He,"1"),e.searchParams.append(Me,n.map(o=>o?"1":"0").join(""));const r=await qt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new at(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Yt(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=fe(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=i.get(_);i.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function fe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function vt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ue(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{on as a,an as b,rn as i,nn as p,U as s};