import{e as b,r as g,u as L,y as p,q as T,S as D,g as M,p as U,P as Y,L as m,a as l,b as x,s as y,c as B,d as N,f as o,h as q,i as z,m as C}from"./runtime.CRad8wpI.js";function A(a,e){var i;var u=a&&((i=a[D])==null?void 0:i.t);return a===e||u===e}function V(a,e,u,i){b(()=>{var s,t;return g(()=>{s=t,t=[],L(()=>{a!==u(...t)&&p(()=>{e(a,...t),s&&A(u(...s),a)&&e(null,...s)})})}),()=>{T(()=>{t&&A(u(...t),a)&&e(null,...t)})}})}function Z(a,e,u,i){var R;var s=(u&N)!==0,t=(u&Y)!==0,O=(u&o)!==0,v=a[e],n=(R=M(a,e))==null?void 0:R.set,_=i,c=!0,h=()=>(O&&c&&(c=!1,_=L(i)),_);v===void 0&&i!==void 0&&(n&&t&&U(),v=h(),n&&n(v));var f;if(t)f=()=>{var r=a[e];return r===void 0?h():(c=!0,r)};else{var E=(s?q:z)(()=>a[e]);E.f|=m,f=()=>{var r=l(E);return r!==void 0&&(_=void 0),r===void 0?_:r}}if(!(u&x))return f;if(n)return function(r){return arguments.length===1?(n(r),r):f()};var P=!1,S=C(v),d=q(()=>{var r=f(),I=l(S);return P?(P=!1,I):S.v=r});return s||(d.equals=y),function(r){var I=l(d);return arguments.length>0?(d.equals(r)||(P=!0,B(S,r),l(d)),r):I}}export{V as b,Z as p};
