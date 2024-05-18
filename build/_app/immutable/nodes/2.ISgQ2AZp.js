import{s as xt,c as Bt,u as zt,g as Pt,a as Ht,e as j,r as qt}from"../chunks/scheduler.BvLojk_z.js";import{S as Et,i as Tt,e as p,c as a,d as C,g,o as u,p as c,j as kt,t as L,a as V,s as _,u as ee,y as T,h as b,v as te,k as n,w as ne,z as x,x as le}from"../chunks/index.H1Nm29Wc.js";function Ut(l){let t,f,s;const v=l[15].default,o=Bt(v,l,l[14],null);return{c(){t=p("div"),o&&o.c(),this.h()},l(r){t=a(r,"DIV",{color:!0,style:!0,disabled:!0,class:!0});var d=C(t);o&&o.l(d),d.forEach(g),this.h()},h(){u(t,"color",l[0]),c(t,"--rippleDuration",l[4]+"ms"),c(t,"--rippleColor",l[2]),c(t,"--rippleCustom",l[3]),c(t,"--rippleZIndex",l[5]),c(t,"--rippleOverflow",l[6]),u(t,"disabled",f=l[1]||void 0),u(t,"class","svelte-1c3jlto")},m(r,d){kt(r,t,d),o&&o.m(t,null),l[16](t),s=!0},p(r,[d]){o&&o.p&&(!s||d&16384)&&zt(o,v,r,r[14],s?Ht(v,r[14],d,null):Pt(r[14]),null),(!s||d&1)&&u(t,"color",r[0]),(!s||d&16)&&c(t,"--rippleDuration",r[4]+"ms"),(!s||d&4)&&c(t,"--rippleColor",r[2]),(!s||d&8)&&c(t,"--rippleCustom",r[3]),(!s||d&32)&&c(t,"--rippleZIndex",r[5]),(!s||d&64)&&c(t,"--rippleOverflow",r[6]),(!s||d&2&&f!==(f=r[1]||void 0))&&u(t,"disabled",f)},i(r){s||(L(o,r),s=!0)},o(r){V(o,r),s=!1},d(r){r&&g(t),o&&o.d(r),l[16](null)}}}function Zt(l,t,f){let{$$slots:s={},$$scope:v}=t;const o="ERippler";let{color:r="primary"}=t,{disabled:d=!1}=t,{rippleColor:re="blue"}=t,{rippleCustom:D="radial-gradient(transparent 5%, var(--rippleColor) 50%, transparent 90%)"}=t,{rippleDurationMs:ie=600}=t,{rippleSizeMod:K=2}=t,{rippleAbsoluteSize:w=void 0}=t,{rippleZIndex:k="auto"}=t,{rippleOverflow:oe="hidden"}=t,{maxRipples:S=10}=t,M,z,E=[];function A(i,y){var N;const W=M.parentElement;if(!W){console.log("erippler has no parent :(");return}for(;E.length>=S;)(N=E.shift())==null||N.remove();const B=Math.max(M.clientWidth,M.clientHeight),X=w||B*K,O=document.createElement("span");O.classList.add("rippler"),O.style.width=X+"px",O.style.height=X+"px",O.style.left=i-(W.offsetLeft-window.scrollX+X/2)+"px",O.style.top=y-(W.offsetTop-window.scrollY+X/2)+"px",E.push(O),M.appendChild(O),z&&(clearTimeout(z),z=void 0),z=setTimeout(()=>{var I;for(;E.length>0;)(I=E.pop())==null||I.remove()},ie)}function ye(){return E.length}function _e(i){j[i?"unshift":"push"](()=>{M=i,f(7,M)})}return l.$$set=i=>{"color"in i&&f(0,r=i.color),"disabled"in i&&f(1,d=i.disabled),"rippleColor"in i&&f(2,re=i.rippleColor),"rippleCustom"in i&&f(3,D=i.rippleCustom),"rippleDurationMs"in i&&f(4,ie=i.rippleDurationMs),"rippleSizeMod"in i&&f(9,K=i.rippleSizeMod),"rippleAbsoluteSize"in i&&f(10,w=i.rippleAbsoluteSize),"rippleZIndex"in i&&f(5,k=i.rippleZIndex),"rippleOverflow"in i&&f(6,oe=i.rippleOverflow),"maxRipples"in i&&f(11,S=i.maxRipples),"$$scope"in i&&f(14,v=i.$$scope)},[r,d,re,D,ie,k,oe,M,o,K,w,S,A,ye,v,s,_e]}class se extends Et{constructor(t){super(),Tt(this,t,Zt,Ut,xt,{name:8,color:0,disabled:1,rippleColor:2,rippleCustom:3,rippleDurationMs:4,rippleSizeMod:9,rippleAbsoluteSize:10,rippleZIndex:5,rippleOverflow:6,maxRipples:11,spawnRipple:12,getActiveRipples:13})}get name(){return this.$$.ctx[8]}get spawnRipple(){return this.$$.ctx[12]}get getActiveRipples(){return this.$$.ctx[13]}}function jt(l){let t,f,s="ERippler Demo",v,o,r,d,re,D,ie="Github",K,w,k,oe,S,M="NPM",z,E,A,ye="Default Ripple",_e,i,y,W,B,X="Button",O,N,I,ze="Ripple with Background",Pe,R,e,be,Y,Xe,pe,ft="Button",Ye,ae,ge,ut="Ripple above Text",Ge,P,G,Fe,ve,ct="Button",Je,fe,me,dt="Custom Color",Qe,H,F,$e,Ce,ht="Button",et,ue,we,_t="Custom Ripples",tt,q,J,nt,xe,bt="Button",lt,ce,Ee,gt="Overflowing Ripple",st,U,Q,rt,Te,vt="Button",it,de,ke,mt="Max Ripples = 2",ot,Z,$,pt,Se,Ct="Button",He,at,wt,St={rippleOverflow:"visible",rippleDurationMs:600,rippleColor:"#aaa"};d=new se({props:St}),l[3](d);let yt={rippleOverflow:"visible",rippleDurationMs:600,rippleColor:"red"};k=new se({props:yt}),l[6](k);let Ot={rippleDurationMs:1e3};y=new se({props:Ot}),l[9](y);let Nt={rippleDurationMs:1e3,rippleZIndex:1};e=new se({props:Nt}),l[12](e);let Rt={rippleDurationMs:1e3,rippleZIndex:1};G=new se({props:Rt}),l[15](G);let Dt={rippleDurationMs:1e3,rippleColor:"red"};F=new se({props:Dt}),l[18](F);let Mt={rippleDurationMs:2e3,rippleAbsoluteSize:100,rippleCustom:"radial-gradient(rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)"};J=new se({props:Mt}),l[21](J);let It={rippleDurationMs:3e3,rippleOverflow:"visible"};Q=new se({props:It}),l[24](Q);let At={rippleDurationMs:3e3,maxRipples:2};return $=new se({props:At}),l[27]($),{c(){t=p("div"),f=p("h1"),f.textContent=s,v=_(),o=p("div"),r=p("a"),ee(d.$$.fragment),re=_(),D=p("span"),D.textContent=ie,K=_(),w=p("a"),ee(k.$$.fragment),oe=_(),S=p("span"),S.textContent=M,z=_(),E=p("section"),A=p("h2"),A.textContent=ye,_e=_(),i=p("button"),ee(y.$$.fragment),W=_(),B=p("span"),B.textContent=X,O=_(),N=p("section"),I=p("h2"),I.textContent=ze,Pe=_(),R=p("button"),ee(e.$$.fragment),be=_(),Y=p("div"),Xe=_(),pe=p("span"),pe.textContent=ft,Ye=_(),ae=p("section"),ge=p("h2"),ge.textContent=ut,Ge=_(),P=p("button"),ee(G.$$.fragment),Fe=_(),ve=p("span"),ve.textContent=ct,Je=_(),fe=p("section"),me=p("h2"),me.textContent=dt,Qe=_(),H=p("button"),ee(F.$$.fragment),$e=_(),Ce=p("span"),Ce.textContent=ht,et=_(),ue=p("section"),we=p("h2"),we.textContent=_t,tt=_(),q=p("button"),ee(J.$$.fragment),nt=_(),xe=p("span"),xe.textContent=bt,lt=_(),ce=p("section"),Ee=p("h2"),Ee.textContent=gt,st=_(),U=p("button"),ee(Q.$$.fragment),rt=_(),Te=p("span"),Te.textContent=vt,it=_(),de=p("section"),ke=p("h2"),ke.textContent=mt,ot=_(),Z=p("button"),ee($.$$.fragment),pt=_(),Se=p("span"),Se.textContent=Ct,this.h()},l(h){t=a(h,"DIV",{class:!0});var m=C(t);f=a(m,"H1",{class:!0,"data-svelte-h":!0}),T(f)!=="svelte-b7h4xy"&&(f.textContent=s),v=b(m),o=a(m,"DIV",{style:!0,class:!0});var Oe=C(o);r=a(Oe,"A",{href:!0,style:!0});var Ne=C(r);te(d.$$.fragment,Ne),re=b(Ne),D=a(Ne,"SPAN",{style:!0,"data-svelte-h":!0}),T(D)!=="svelte-d58byd"&&(D.textContent=ie),Ne.forEach(g),K=b(Oe),w=a(Oe,"A",{href:!0,style:!0});var Re=C(w);te(k.$$.fragment,Re),oe=b(Re),S=a(Re,"SPAN",{style:!0,"data-svelte-h":!0}),T(S)!=="svelte-kck5xl"&&(S.textContent=M),Re.forEach(g),Oe.forEach(g),z=b(m),E=a(m,"SECTION",{class:!0});var De=C(E);A=a(De,"H2",{class:!0,"data-svelte-h":!0}),T(A)!=="svelte-idjohv"&&(A.textContent=ye),_e=b(De),i=a(De,"BUTTON",{class:!0});var Me=C(i);te(y.$$.fragment,Me),W=b(Me),B=a(Me,"SPAN",{style:!0,"data-svelte-h":!0}),T(B)!=="svelte-1xqbae8"&&(B.textContent=X),Me.forEach(g),De.forEach(g),O=b(m),N=a(m,"SECTION",{class:!0});var Ie=C(N);I=a(Ie,"H2",{class:!0,"data-svelte-h":!0}),T(I)!=="svelte-15kij04"&&(I.textContent=ze),Pe=b(Ie),R=a(Ie,"BUTTON",{class:!0});var he=C(R);te(e.$$.fragment,he),be=b(he),Y=a(he,"DIV",{style:!0,class:!0}),C(Y).forEach(g),Xe=b(he),pe=a(he,"SPAN",{style:!0,"data-svelte-h":!0}),T(pe)!=="svelte-1wk5bga"&&(pe.textContent=ft),he.forEach(g),Ie.forEach(g),Ye=b(m),ae=a(m,"SECTION",{class:!0});var Ae=C(ae);ge=a(Ae,"H2",{class:!0,"data-svelte-h":!0}),T(ge)!=="svelte-1jx5ol4"&&(ge.textContent=ut),Ge=b(Ae),P=a(Ae,"BUTTON",{class:!0});var Be=C(P);te(G.$$.fragment,Be),Fe=b(Be),ve=a(Be,"SPAN",{style:!0,"data-svelte-h":!0}),T(ve)!=="svelte-1xqbae8"&&(ve.textContent=ct),Be.forEach(g),Ae.forEach(g),Je=b(m),fe=a(m,"SECTION",{class:!0});var qe=C(fe);me=a(qe,"H2",{class:!0,"data-svelte-h":!0}),T(me)!=="svelte-1ifsgcu"&&(me.textContent=dt),Qe=b(qe),H=a(qe,"BUTTON",{class:!0});var Ue=C(H);te(F.$$.fragment,Ue),$e=b(Ue),Ce=a(Ue,"SPAN",{style:!0,"data-svelte-h":!0}),T(Ce)!=="svelte-1xqbae8"&&(Ce.textContent=ht),Ue.forEach(g),qe.forEach(g),et=b(m),ue=a(m,"SECTION",{class:!0});var Ze=C(ue);we=a(Ze,"H2",{class:!0,"data-svelte-h":!0}),T(we)!=="svelte-1wzdk6a"&&(we.textContent=_t),tt=b(Ze),q=a(Ze,"BUTTON",{class:!0});var je=C(q);te(J.$$.fragment,je),nt=b(je),xe=a(je,"SPAN",{style:!0,"data-svelte-h":!0}),T(xe)!=="svelte-1xqbae8"&&(xe.textContent=bt),je.forEach(g),Ze.forEach(g),lt=b(m),ce=a(m,"SECTION",{class:!0});var Le=C(ce);Ee=a(Le,"H2",{class:!0,"data-svelte-h":!0}),T(Ee)!=="svelte-7sroqm"&&(Ee.textContent=gt),st=b(Le),U=a(Le,"BUTTON",{class:!0});var Ve=C(U);te(Q.$$.fragment,Ve),rt=b(Ve),Te=a(Ve,"SPAN",{style:!0,"data-svelte-h":!0}),T(Te)!=="svelte-1xqbae8"&&(Te.textContent=vt),Ve.forEach(g),Le.forEach(g),it=b(m),de=a(m,"SECTION",{class:!0});var Ke=C(de);ke=a(Ke,"H2",{class:!0,"data-svelte-h":!0}),T(ke)!=="svelte-p4x56a"&&(ke.textContent=mt),ot=b(Ke),Z=a(Ke,"BUTTON",{class:!0});var We=C(Z);te($.$$.fragment,We),pt=b(We),Se=a(We,"SPAN",{style:!0,"data-svelte-h":!0}),T(Se)!=="svelte-1xqbae8"&&(Se.textContent=Ct),We.forEach(g),Ke.forEach(g),m.forEach(g),this.h()},h(){u(f,"class","svelte-13fbf35"),c(D,"position","relative"),u(r,"href","https://github.com/egon-r/svelte-erippler"),c(r,"position","relative"),c(r,"padding","12px 20px"),c(S,"position","relative"),u(w,"href","https://www.npmjs.com/package/@egonr/svelte-erippler"),c(w,"position","relative"),c(w,"padding","12px 20px"),c(o,"display","flex"),c(o,"flex-direction","row"),c(o,"justify-content","center"),c(o,"font-size","2em"),u(o,"class","svelte-13fbf35"),u(A,"class","svelte-13fbf35"),c(B,"position","relative"),u(i,"class","demo-button svelte-13fbf35"),u(E,"class","svelte-13fbf35"),u(I,"class","svelte-13fbf35"),c(Y,"background","darkblue"),c(Y,"position","absolute"),c(Y,"inset","0"),u(Y,"class","svelte-13fbf35"),c(pe,"position","relative"),c(pe,"z-index","2"),u(R,"class","demo-button svelte-13fbf35"),u(N,"class","svelte-13fbf35"),u(ge,"class","svelte-13fbf35"),c(ve,"position","relative"),u(P,"class","demo-button svelte-13fbf35"),u(ae,"class","svelte-13fbf35"),u(me,"class","svelte-13fbf35"),c(Ce,"position","relative"),u(H,"class","demo-button svelte-13fbf35"),u(fe,"class","svelte-13fbf35"),u(we,"class","svelte-13fbf35"),c(xe,"position","relative"),u(q,"class","demo-button svelte-13fbf35"),u(ue,"class","svelte-13fbf35"),u(Ee,"class","svelte-13fbf35"),c(Te,"position","relative"),u(U,"class","demo-button demo-button-overflow-visible svelte-13fbf35"),u(ce,"class","svelte-13fbf35"),u(ke,"class","svelte-13fbf35"),c(Se,"position","relative"),u(Z,"class","demo-button svelte-13fbf35"),u(de,"class","svelte-13fbf35"),u(t,"class","svelte-13fbf35")},m(h,m){kt(h,t,m),n(t,f),n(t,v),n(t,o),n(o,r),ne(d,r,null),n(r,re),n(r,D),n(o,K),n(o,w),ne(k,w,null),n(w,oe),n(w,S),n(t,z),n(t,E),n(E,A),n(E,_e),n(E,i),ne(y,i,null),n(i,W),n(i,B),n(t,O),n(t,N),n(N,I),n(N,Pe),n(N,R),ne(e,R,null),n(R,be),n(R,Y),n(R,Xe),n(R,pe),n(t,Ye),n(t,ae),n(ae,ge),n(ae,Ge),n(ae,P),ne(G,P,null),n(P,Fe),n(P,ve),n(t,Je),n(t,fe),n(fe,me),n(fe,Qe),n(fe,H),ne(F,H,null),n(H,$e),n(H,Ce),n(t,et),n(t,ue),n(ue,we),n(ue,tt),n(ue,q),ne(J,q,null),n(q,nt),n(q,xe),n(t,lt),n(t,ce),n(ce,Ee),n(ce,st),n(ce,U),ne(Q,U,null),n(U,rt),n(U,Te),n(t,it),n(t,de),n(de,ke),n(de,ot),n(de,Z),ne($,Z,null),n(Z,pt),n(Z,Se),He=!0,at||(wt=[x(r,"click",l[4]),x(r,"pointerdown",l[5]),x(w,"click",l[7]),x(w,"pointerdown",l[8]),x(i,"click",l[10]),x(i,"pointerdown",l[11]),x(R,"click",l[13]),x(R,"pointerdown",l[14]),x(P,"click",l[16]),x(P,"pointerdown",l[17]),x(H,"click",l[19]),x(H,"pointerdown",l[20]),x(q,"click",l[22]),x(q,"pointerdown",l[23]),x(U,"click",l[25]),x(U,"pointerdown",l[26]),x(Z,"click",l[28]),x(Z,"pointerdown",l[29])],at=!0)},p(h,[m]){const Oe={};d.$set(Oe);const Ne={};k.$set(Ne);const Re={};y.$set(Re);const De={};e.$set(De);const Me={};G.$set(Me);const Ie={};F.$set(Ie);const he={};J.$set(he);const Ae={};Q.$set(Ae);const Be={};$.$set(Be)},i(h){He||(L(d.$$.fragment,h),L(k.$$.fragment,h),L(y.$$.fragment,h),L(e.$$.fragment,h),L(G.$$.fragment,h),L(F.$$.fragment,h),L(J.$$.fragment,h),L(Q.$$.fragment,h),L($.$$.fragment,h),He=!0)},o(h){V(d.$$.fragment,h),V(k.$$.fragment,h),V(y.$$.fragment,h),V(e.$$.fragment,h),V(G.$$.fragment,h),V(F.$$.fragment,h),V(J.$$.fragment,h),V(Q.$$.fragment,h),V($.$$.fragment,h),He=!1},d(h){h&&g(t),l[3](null),le(d),l[6](null),le(k),l[9](null),le(y),l[12](null),le(e),l[15](null),le(G),l[18](null),le(F),l[21](null),le(J),l[24](null),le(Q),l[27](null),le($),at=!1,qt(wt)}}}function Lt(l,t,f){let s=[];const v=(e,be)=>{e.currentTarget&&e instanceof UIEvent&&e.currentTarget instanceof HTMLElement&&e.detail===0&&s[be].spawnRipple(e.currentTarget.offsetLeft+e.currentTarget.offsetWidth/2,e.currentTarget.offsetTop+e.currentTarget.offsetHeight/2)},o=(e,be)=>{s[be].spawnRipple(e.clientX,e.clientY)};function r(e){j[e?"unshift":"push"](()=>{s[9]=e,f(0,s)})}const d=e=>{v(e,9)},re=e=>{o(e,9)};function D(e){j[e?"unshift":"push"](()=>{s[8]=e,f(0,s)})}const ie=e=>{v(e,8)},K=e=>{o(e,8)};function w(e){j[e?"unshift":"push"](()=>{s[0]=e,f(0,s)})}const k=e=>{v(e,0)},oe=e=>{o(e,0)};function S(e){j[e?"unshift":"push"](()=>{s[1]=e,f(0,s)})}const M=e=>{v(e,1)},z=e=>{o(e,1)};function E(e){j[e?"unshift":"push"](()=>{s[2]=e,f(0,s)})}const A=e=>{v(e,2)},ye=e=>{o(e,2)};function _e(e){j[e?"unshift":"push"](()=>{s[3]=e,f(0,s)})}const i=e=>{v(e,3)},y=e=>{o(e,3)};function W(e){j[e?"unshift":"push"](()=>{s[4]=e,f(0,s)})}const B=e=>{v(e,4)},X=e=>{o(e,4)};function O(e){j[e?"unshift":"push"](()=>{s[5]=e,f(0,s)})}const N=e=>{v(e,5)},I=e=>{o(e,5)};function ze(e){j[e?"unshift":"push"](()=>{s[6]=e,f(0,s)})}return[s,v,o,r,d,re,D,ie,K,w,k,oe,S,M,z,E,A,ye,_e,i,y,W,B,X,O,N,I,ze,e=>{v(e,6)},e=>{o(e,6)}]}class Wt extends Et{constructor(t){super(),Tt(this,t,Lt,jt,xt,{})}}export{Wt as component};
