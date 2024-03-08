import{s as ft,n as Be,o as mn,d as $n,r as hn,h as on,i as gn}from"../chunks/scheduler.T6Z1JCpH.js";import{S as mt,i as $t,e as l,k as H,s as h,a,b as m,l as Y,c as g,d as r,f as T,g as j,m as e,n as le,o as ee,p as oe,q as un,r as qt,E as fn,u as pn,A as w,B as E,C as b,t as k,j as I,D as L}from"../chunks/index.BvfX4X9Y.js";function cn(s){let i,n,$,v,o,p,_,c,O,u,d,f,G,S,R,N;return{c(){i=l("div"),n=l("div"),$=H(s[6]),v=H(", "),o=H(s[5]),p=h(),_=H(s[4]),c=h(),O=H(s[3]),u=h(),d=l("div"),f=H(s[2]),G=H(":"),S=H(s[1]),R=H(":"),N=H(s[0]),this.h()},l(M){i=a(M,"DIV",{class:!0});var C=m(i);n=a(C,"DIV",{});var x=m(n);$=Y(x,s[6]),v=Y(x,", "),o=Y(x,s[5]),p=g(x),_=Y(x,s[4]),c=g(x),O=Y(x,s[3]),x.forEach(r),u=g(C),d=a(C,"DIV",{});var q=m(d);f=Y(q,s[2]),G=Y(q,":"),S=Y(q,s[1]),R=Y(q,":"),N=Y(q,s[0]),q.forEach(r),C.forEach(r),this.h()},h(){T(i,"class","flex justify-between gap-3 uppercase text-xs text-gray-100 font-bold")},m(M,C){j(M,i,C),e(i,n),e(n,$),e(n,v),e(n,o),e(n,p),e(n,_),e(n,c),e(n,O),e(i,u),e(i,d),e(d,f),e(d,G),e(d,S),e(d,R),e(d,N)},p(M,[C]){C&64&&le($,M[6]),C&32&&le(o,M[5]),C&16&&le(_,M[4]),C&8&&le(O,M[3]),C&4&&le(f,M[2]),C&2&&le(S,M[1]),C&1&&le(N,M[0])},i:Be,o:Be,d(M){M&&r(i)}}}function dn(s,i,n){let $,v,o,p,_,c,O;const u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=["January","February","March","April","May","June","July","August","September","October","November","December"];let f=new Date;return mn(()=>{const G=setInterval(()=>{n(7,f=new Date)},1e3);return()=>{clearInterval(G)}}),s.$$.update=()=>{s.$$.dirty&128&&n(6,$=u[f.getDay()]),s.$$.dirty&128&&n(5,v=f.getDate()),s.$$.dirty&128&&n(4,o=d[f.getMonth()]),s.$$.dirty&128&&n(3,p=f.getFullYear()),s.$$.dirty&128&&n(2,_=f.getHours().toString().padStart(2,"0")),s.$$.dirty&128&&n(1,c=f.getMinutes().toString().padStart(2,"0")),s.$$.dirty&128&&n(0,O=f.getSeconds().toString().padStart(2,"0"))},[O,c,_,p,o,v,$,f]}class vn extends mt{constructor(i){super(),$t(this,i,dn,cn,ft,{})}}function _n(s){let i,n,$,v,o,p,_,c,O="DuckDuckGo",u,d="Bing",f,G="Brave",S,R="Google",N,M="Yahoo!",C,x="YouTube",q,P,ae='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg>',F,De;return{c(){i=l("form"),n=l("div"),$=l("input"),v=h(),o=l("select"),p=l("option"),_=H(s[0]),c=l("option"),c.textContent=O,u=l("option"),u.textContent=d,f=l("option"),f.textContent=G,S=l("option"),S.textContent=R,N=l("option"),N.textContent=M,C=l("option"),C.textContent=x,q=h(),P=l("button"),P.innerHTML=ae,this.h()},l(A){i=a(A,"FORM",{method:!0});var U=m(i);n=a(U,"DIV",{class:!0});var J=m(n);$=a(J,"INPUT",{type:!0,class:!0}),v=g(J),o=a(J,"SELECT",{class:!0});var D=m(o);p=a(D,"OPTION",{});var se=m(p);_=Y(se,s[0]),se.forEach(r),c=a(D,"OPTION",{"data-svelte-h":!0}),ee(c)!=="svelte-2tadwq"&&(c.textContent=O),u=a(D,"OPTION",{"data-svelte-h":!0}),ee(u)!=="svelte-eznx9q"&&(u.textContent=d),f=a(D,"OPTION",{"data-svelte-h":!0}),ee(f)!=="svelte-29d6ye"&&(f.textContent=G),S=a(D,"OPTION",{"data-svelte-h":!0}),ee(S)!=="svelte-jwkbey"&&(S.textContent=R),N=a(D,"OPTION",{"data-svelte-h":!0}),ee(N)!=="svelte-1nymr4b"&&(N.textContent=M),C=a(D,"OPTION",{"data-svelte-h":!0}),ee(C)!=="svelte-raqse8"&&(C.textContent=x),D.forEach(r),q=g(J),P=a(J,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),ee(P)!=="svelte-17xspnq"&&(P.innerHTML=ae),J.forEach(r),U.forEach(r),this.h()},h(){T($,"type","text"),T($,"class","w-full input input-bordered join-item"),$.required=!0,$.autofocus=!0,p.disabled=!0,p.selected=!0,p.__value=s[0],oe(p,p.__value),c.__value="DUCKDUCKGO",oe(c,c.__value),u.__value="BING",oe(u,u.__value),f.__value="BRAVE",oe(f,f.__value),S.__value="GOOGLE",oe(S,S.__value),N.__value="YAHOO",oe(N,N.__value),C.__value="YOUTUBE",oe(C,C.__value),T(o,"class","select select-bordered join-item"),s[0]===void 0&&$n(()=>s[6].call(o)),T(P,"type","submit"),T(P,"class","btn btn-primary join-item"),T(n,"class","w-full join"),T(i,"method","get")},m(A,U){j(A,i,U),e(i,n),e(n,$),s[4]($),e(n,v),e(n,o),e(o,p),e(p,_),e(o,c),e(o,u),e(o,f),e(o,S),e(o,N),e(o,C),s[5](o),un(o,s[0],!0),e(n,q),e(n,P),$.focus(),F||(De=[qt(o,"change",s[6]),qt(i,"submit",fn(s[3]))],F=!0)},p(A,[U]){U&1&&le(_,A[0]),U&1&&(p.__value=A[0],oe(p,p.__value)),U&1&&un(o,A[0])},i:Be,o:Be,d(A){A&&r(i),s[4](null),s[5](null),F=!1,hn(De)}}}function wn(s,i,n){let{engine:$}=i,v,o;function p(){const u=v.value.replaceAll(" ","+"),d=o.value;let f="";d=="GOOGLE"?f=`https://www.google.com/search?q=${u}`:d=="BING"?f=`https://www.bing.com/search?q=${u}`:d=="YAHOO"?f=`https://search.yahoo.com/search?p=${u}`:d=="BRAVE"?f=`https://search.brave.com/search?q=${u}`:d=="YOUTUBE"?f=`https://www.youtube.com/results?search_query=${u}`:f=`https://duckduckgo.com/?q=${u}&ia=web`,window.location.href=f}function _(u){on[u?"unshift":"push"](()=>{v=u,n(1,v)})}function c(u){on[u?"unshift":"push"](()=>{o=u,n(2,o)})}function O(){$=pn(this),n(0,$)}return s.$$set=u=>{"engine"in u&&n(0,$=u.engine)},[$,v,o,p,_,c,O]}class En extends mt{constructor(i){super(),$t(this,i,wn,_n,ft,{engine:0})}}function bn(s){return new URL(s).hostname}function kn(s){let i,n,$,v,o,p,_,c;return{c(){i=l("div"),n=l("img"),v=h(),o=l("a"),p=H(s[1]),this.h()},l(O){i=a(O,"DIV",{class:!0});var u=m(i);n=a(u,"IMG",{src:!0,class:!0,alt:!0}),v=g(u),o=a(u,"A",{href:!0,class:!0});var d=m(o);p=Y(d,s[1]),d.forEach(r),u.forEach(r),this.h()},h(){gn(n.src,$=s[2])||T(n,"src",$),T(n,"class","w-4 h-4 cursor-pointer"),T(n,"alt",s[1]),T(o,"href",s[0]),T(o,"class","hover:text-white"),T(i,"class","inline-flex items-center gap-1")},m(O,u){j(O,i,u),e(i,n),e(i,v),e(i,o),e(o,p),_||(c=qt(n,"click",fn(s[3])),_=!0)},p(O,[u]){u&2&&T(n,"alt",O[1]),u&2&&le(p,O[1]),u&1&&T(o,"href",O[0])},i:Be,o:Be,d(O){O&&r(i),_=!1,c()}}}function In(s,i,n){let{url:$}=i,{name:v}=i;const p=`https://icon.horse/icon/${bn($)}`;function _(){window.open($,"","height=800,width=1300,toolbar=no,scrollbars=yes")}return s.$$set=c=>{"url"in c&&n(0,$=c.url),"name"in c&&n(1,v=c.name)},[$,v,p,_]}class y extends mt{constructor(i){super(),$t(this,i,In,kn,ft,{url:0,name:1})}}function Ln(s){let i,n,$,v,o,p,_,c,O="Favorite Links:",u,d,f,G,S,R,N,M,C,x,q,P,ae,F,De,A,U,J,D,se,ue,ht,Pe,fe,gt,He,me,pt,Ye,$e,ct,je,he,dt,B,Fe,ge,vt,ze,pe,_t,Re,ce,wt,Je,de,Et,Ke,ve,st,z,_e,xt="Other Links:",bt,K,we,kt,Ee,It,be,Lt,W,te,We,ke,Ct,Qe,Ie,yt,Xe,Le,Tt,ne,Ze,Ce,Ot,et,ye,Mt,tt,Te,St,re,nt,Oe,Dt,rt,Me,Nt,lt,Se,it,ie,Ut='<a href="/settings" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path></svg></a>',ot;return n=new vn({}),o=new En({props:{engine:s[0].engine}}),S=new y({props:{url:"https://www.youtube.com/",name:"YouTube"}}),M=new y({props:{url:"https://twitter.com/",name:"Twitter"}}),q=new y({props:{url:"https://www.instagram.com/",name:"Instagram"}}),F=new y({props:{url:"https://www.reddit.com/",name:"Reddit"}}),U=new y({props:{url:"https://news.ycombinator.com/",name:"Hacker News"}}),ue=new y({props:{url:"https://www.vidio.com/",name:"Vidio"}}),fe=new y({props:{url:"https://www.twitch.tv/",name:"Twitch"}}),me=new y({props:{url:"https://www.tiktok.com/",name:"TikTok"}}),$e=new y({props:{url:"https://open.spotify.com/",name:"Spotify"}}),he=new y({props:{url:"https://music.youtube.com/",name:"YouTube Music"}}),ge=new y({props:{url:"https://github.com/",name:"Github"}}),pe=new y({props:{url:"https://www.inoreader.com/",name:"Inoreader"}}),ce=new y({props:{url:"https://feedly.com/",name:"Feedly"}}),de=new y({props:{url:"https://translate.google.com/",name:"Google Translate"}}),ve=new y({props:{url:"https://chat.openai.com/",name:"ChatGPT"}}),we=new y({props:{url:"https://web.whatsapp.com/",name:"WhatsApp"}}),Ee=new y({props:{url:"https://www.messenger.com/",name:"Messenger"}}),be=new y({props:{url:"https://web.telegram.org/",name:"Telegram"}}),ke=new y({props:{url:"https://aniwave.to/trending",name:"Aniwave"}}),Ie=new y({props:{url:"https://psarips.com/",name:"PSArips"}}),Le=new y({props:{url:"https://pahe.ink/",name:"Pahe Movies"}}),Ce=new y({props:{url:"https://kick.com/",name:"Kick"}}),ye=new y({props:{url:"https://www.viddsee.com/",name:"Viddsee"}}),Te=new y({props:{url:"https://fmoviesz.to/home",name:"FMoviesz"}}),Oe=new y({props:{url:"https://www.threads.net/",name:"Threads"}}),Me=new y({props:{url:"https://mail.hetanews.com/",name:"Heta Mail"}}),Se=new y({props:{url:"https://www.google.com/",name:"Google"}}),{c(){i=l("section"),w(n.$$.fragment),$=h(),v=l("section"),w(o.$$.fragment),p=h(),_=l("section"),c=l("h4"),c.textContent=O,u=h(),d=l("div"),f=l("ul"),G=l("li"),w(S.$$.fragment),R=h(),N=l("li"),w(M.$$.fragment),C=h(),x=l("li"),w(q.$$.fragment),P=h(),ae=l("li"),w(F.$$.fragment),De=h(),A=l("li"),w(U.$$.fragment),J=h(),D=l("ul"),se=l("li"),w(ue.$$.fragment),ht=h(),Pe=l("li"),w(fe.$$.fragment),gt=h(),He=l("li"),w(me.$$.fragment),pt=h(),Ye=l("li"),w($e.$$.fragment),ct=h(),je=l("li"),w(he.$$.fragment),dt=h(),B=l("ul"),Fe=l("li"),w(ge.$$.fragment),vt=h(),ze=l("li"),w(pe.$$.fragment),_t=h(),Re=l("li"),w(ce.$$.fragment),wt=h(),Je=l("li"),w(de.$$.fragment),Et=h(),Ke=l("li"),w(ve.$$.fragment),st=h(),z=l("section"),_e=l("h4"),_e.textContent=xt,bt=h(),K=l("div"),w(we.$$.fragment),kt=h(),w(Ee.$$.fragment),It=h(),w(be.$$.fragment),Lt=h(),W=l("div"),te=l("ul"),We=l("li"),w(ke.$$.fragment),Ct=h(),Qe=l("li"),w(Ie.$$.fragment),yt=h(),Xe=l("li"),w(Le.$$.fragment),Tt=h(),ne=l("ul"),Ze=l("li"),w(Ce.$$.fragment),Ot=h(),et=l("li"),w(ye.$$.fragment),Mt=h(),tt=l("li"),w(Te.$$.fragment),St=h(),re=l("ul"),nt=l("li"),w(Oe.$$.fragment),Dt=h(),rt=l("li"),w(Me.$$.fragment),Nt=h(),lt=l("li"),w(Se.$$.fragment),it=h(),ie=l("div"),ie.innerHTML=Ut,this.h()},l(t){i=a(t,"SECTION",{class:!0});var V=m(i);E(n.$$.fragment,V),V.forEach(r),$=g(t),v=a(t,"SECTION",{class:!0});var at=m(v);E(o.$$.fragment,at),at.forEach(r),p=g(t),_=a(t,"SECTION",{class:!0});var ut=m(_);c=a(ut,"H4",{class:!0,"data-svelte-h":!0}),ee(c)!=="svelte-17ucb3h"&&(c.textContent=O),u=g(ut),d=a(ut,"DIV",{class:!0});var Ne=m(d);f=a(Ne,"UL",{});var Q=m(f);G=a(Q,"LI",{});var At=m(G);E(S.$$.fragment,At),At.forEach(r),R=g(Q),N=a(Q,"LI",{});var Gt=m(N);E(M.$$.fragment,Gt),Gt.forEach(r),C=g(Q),x=a(Q,"LI",{});var Vt=m(x);E(q.$$.fragment,Vt),Vt.forEach(r),P=g(Q),ae=a(Q,"LI",{});var Bt=m(ae);E(F.$$.fragment,Bt),Bt.forEach(r),De=g(Q),A=a(Q,"LI",{});var Pt=m(A);E(U.$$.fragment,Pt),Pt.forEach(r),Q.forEach(r),J=g(Ne),D=a(Ne,"UL",{});var X=m(D);se=a(X,"LI",{});var Ht=m(se);E(ue.$$.fragment,Ht),Ht.forEach(r),ht=g(X),Pe=a(X,"LI",{});var Yt=m(Pe);E(fe.$$.fragment,Yt),Yt.forEach(r),gt=g(X),He=a(X,"LI",{});var jt=m(He);E(me.$$.fragment,jt),jt.forEach(r),pt=g(X),Ye=a(X,"LI",{});var Ft=m(Ye);E($e.$$.fragment,Ft),Ft.forEach(r),ct=g(X),je=a(X,"LI",{});var zt=m(je);E(he.$$.fragment,zt),zt.forEach(r),X.forEach(r),dt=g(Ne),B=a(Ne,"UL",{});var Z=m(B);Fe=a(Z,"LI",{});var Rt=m(Fe);E(ge.$$.fragment,Rt),Rt.forEach(r),vt=g(Z),ze=a(Z,"LI",{});var Jt=m(ze);E(pe.$$.fragment,Jt),Jt.forEach(r),_t=g(Z),Re=a(Z,"LI",{});var Kt=m(Re);E(ce.$$.fragment,Kt),Kt.forEach(r),wt=g(Z),Je=a(Z,"LI",{});var Wt=m(Je);E(de.$$.fragment,Wt),Wt.forEach(r),Et=g(Z),Ke=a(Z,"LI",{});var Qt=m(Ke);E(ve.$$.fragment,Qt),Qt.forEach(r),Z.forEach(r),Ne.forEach(r),ut.forEach(r),st=g(t),z=a(t,"SECTION",{class:!0});var qe=m(z);_e=a(qe,"H4",{class:!0,"data-svelte-h":!0}),ee(_e)!=="svelte-axlx55"&&(_e.textContent=xt),bt=g(qe),K=a(qe,"DIV",{class:!0});var xe=m(K);E(we.$$.fragment,xe),kt=g(xe),E(Ee.$$.fragment,xe),It=g(xe),E(be.$$.fragment,xe),xe.forEach(r),Lt=g(qe),W=a(qe,"DIV",{class:!0});var Ue=m(W);te=a(Ue,"UL",{});var Ae=m(te);We=a(Ae,"LI",{});var Xt=m(We);E(ke.$$.fragment,Xt),Xt.forEach(r),Ct=g(Ae),Qe=a(Ae,"LI",{});var Zt=m(Qe);E(Ie.$$.fragment,Zt),Zt.forEach(r),yt=g(Ae),Xe=a(Ae,"LI",{});var en=m(Xe);E(Le.$$.fragment,en),en.forEach(r),Ae.forEach(r),Tt=g(Ue),ne=a(Ue,"UL",{});var Ge=m(ne);Ze=a(Ge,"LI",{});var tn=m(Ze);E(Ce.$$.fragment,tn),tn.forEach(r),Ot=g(Ge),et=a(Ge,"LI",{});var nn=m(et);E(ye.$$.fragment,nn),nn.forEach(r),Mt=g(Ge),tt=a(Ge,"LI",{});var rn=m(tt);E(Te.$$.fragment,rn),rn.forEach(r),Ge.forEach(r),St=g(Ue),re=a(Ue,"UL",{});var Ve=m(re);nt=a(Ve,"LI",{});var ln=m(nt);E(Oe.$$.fragment,ln),ln.forEach(r),Dt=g(Ve),rt=a(Ve,"LI",{});var an=m(rt);E(Me.$$.fragment,an),an.forEach(r),Nt=g(Ve),lt=a(Ve,"LI",{});var sn=m(lt);E(Se.$$.fragment,sn),sn.forEach(r),Ve.forEach(r),Ue.forEach(r),qe.forEach(r),it=g(t),ie=a(t,"DIV",{class:!0,"data-svelte-h":!0}),ee(ie)!=="svelte-1ik2hyp"&&(ie.innerHTML=Ut),this.h()},h(){T(i,"class","mb-3"),T(v,"class","mb-10"),T(c,"class","uppercase text-xs font-bold mb-3"),T(d,"class","grid grid-cols-3 gap-3"),T(_,"class","mb-10"),T(_e,"class","uppercase text-xs font-bold mb-3"),T(K,"class","grid grid-cols-3 gap-3 mb-3"),T(W,"class","grid grid-cols-3 gap-3"),T(z,"class","mb-10"),T(ie,"class","absolute top-0 right-0 p-4")},m(t,V){j(t,i,V),b(n,i,null),j(t,$,V),j(t,v,V),b(o,v,null),j(t,p,V),j(t,_,V),e(_,c),e(_,u),e(_,d),e(d,f),e(f,G),b(S,G,null),e(f,R),e(f,N),b(M,N,null),e(f,C),e(f,x),b(q,x,null),e(f,P),e(f,ae),b(F,ae,null),e(f,De),e(f,A),b(U,A,null),e(d,J),e(d,D),e(D,se),b(ue,se,null),e(D,ht),e(D,Pe),b(fe,Pe,null),e(D,gt),e(D,He),b(me,He,null),e(D,pt),e(D,Ye),b($e,Ye,null),e(D,ct),e(D,je),b(he,je,null),e(d,dt),e(d,B),e(B,Fe),b(ge,Fe,null),e(B,vt),e(B,ze),b(pe,ze,null),e(B,_t),e(B,Re),b(ce,Re,null),e(B,wt),e(B,Je),b(de,Je,null),e(B,Et),e(B,Ke),b(ve,Ke,null),j(t,st,V),j(t,z,V),e(z,_e),e(z,bt),e(z,K),b(we,K,null),e(K,kt),b(Ee,K,null),e(K,It),b(be,K,null),e(z,Lt),e(z,W),e(W,te),e(te,We),b(ke,We,null),e(te,Ct),e(te,Qe),b(Ie,Qe,null),e(te,yt),e(te,Xe),b(Le,Xe,null),e(W,Tt),e(W,ne),e(ne,Ze),b(Ce,Ze,null),e(ne,Ot),e(ne,et),b(ye,et,null),e(ne,Mt),e(ne,tt),b(Te,tt,null),e(W,St),e(W,re),e(re,nt),b(Oe,nt,null),e(re,Dt),e(re,rt),b(Me,rt,null),e(re,Nt),e(re,lt),b(Se,lt,null),j(t,it,V),j(t,ie,V),ot=!0},p(t,[V]){const at={};V&1&&(at.engine=t[0].engine),o.$set(at)},i(t){ot||(k(n.$$.fragment,t),k(o.$$.fragment,t),k(S.$$.fragment,t),k(M.$$.fragment,t),k(q.$$.fragment,t),k(F.$$.fragment,t),k(U.$$.fragment,t),k(ue.$$.fragment,t),k(fe.$$.fragment,t),k(me.$$.fragment,t),k($e.$$.fragment,t),k(he.$$.fragment,t),k(ge.$$.fragment,t),k(pe.$$.fragment,t),k(ce.$$.fragment,t),k(de.$$.fragment,t),k(ve.$$.fragment,t),k(we.$$.fragment,t),k(Ee.$$.fragment,t),k(be.$$.fragment,t),k(ke.$$.fragment,t),k(Ie.$$.fragment,t),k(Le.$$.fragment,t),k(Ce.$$.fragment,t),k(ye.$$.fragment,t),k(Te.$$.fragment,t),k(Oe.$$.fragment,t),k(Me.$$.fragment,t),k(Se.$$.fragment,t),ot=!0)},o(t){I(n.$$.fragment,t),I(o.$$.fragment,t),I(S.$$.fragment,t),I(M.$$.fragment,t),I(q.$$.fragment,t),I(F.$$.fragment,t),I(U.$$.fragment,t),I(ue.$$.fragment,t),I(fe.$$.fragment,t),I(me.$$.fragment,t),I($e.$$.fragment,t),I(he.$$.fragment,t),I(ge.$$.fragment,t),I(pe.$$.fragment,t),I(ce.$$.fragment,t),I(de.$$.fragment,t),I(ve.$$.fragment,t),I(we.$$.fragment,t),I(Ee.$$.fragment,t),I(be.$$.fragment,t),I(ke.$$.fragment,t),I(Ie.$$.fragment,t),I(Le.$$.fragment,t),I(Ce.$$.fragment,t),I(ye.$$.fragment,t),I(Te.$$.fragment,t),I(Oe.$$.fragment,t),I(Me.$$.fragment,t),I(Se.$$.fragment,t),ot=!1},d(t){t&&(r(i),r($),r(v),r(p),r(_),r(st),r(z),r(it),r(ie)),L(n),L(o),L(S),L(M),L(q),L(F),L(U),L(ue),L(fe),L(me),L($e),L(he),L(ge),L(pe),L(ce),L(de),L(ve),L(we),L(Ee),L(be),L(ke),L(Ie),L(Le),L(Ce),L(ye),L(Te),L(Oe),L(Me),L(Se)}}}function Cn(s,i,n){let{data:$}=i;return s.$$set=v=>{"data"in v&&n(0,$=v.data)},[$]}class On extends mt{constructor(i){super(),$t(this,i,Cn,Ln,ft,{data:0})}}export{On as component};