import{H as a,U as y,V as m,s as q,W as w}from"./index.85cfec65.js";const o=[];function z(n,u){return{subscribe:A(n,u).subscribe}}function A(n,u=a){let r;const t=new Set;function f(e){if(q(n,e)&&(n=e,r)){const i=!o.length;for(const s of t)s[1](),o.push(s,n);if(i){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){f(e(n))}function b(e,i=a){const s=[e,i];return t.add(s),t.size===1&&(r=u(f)||a),e(n),()=>{t.delete(s),t.size===0&&r&&(r(),r=null)}}return{set:f,update:l,subscribe:b}}function H(n,u,r){const t=!Array.isArray(n),f=t?[n]:n,l=u.length<2;return z(r,b=>{let e=!1;const i=[];let s=0,d=a;const g=()=>{if(s)return;d();const c=u(t?i[0]:i,b);l?b(c):d=w(c)?c:a},_=f.map((c,p)=>y(c,h=>{i[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){m(_),d()}})}export{H as d,z as r,A as w};
