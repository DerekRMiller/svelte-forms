var x=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var H=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&H(e,r,t[r]);if(Y)for(var r of Y(t))ne.call(t,r)&&H(e,r,t[r]);return e},K=(e,t)=>ee(e,te(t));import{a2 as T,a3 as ae,a4 as ie,D as se,S as le,i as ue,s as oe,e as E,k as w,t as C,c as O,a as F,m as j,h as I,d as b,b as L,g as J,F as _,a5 as M,G as A,j as Q,Y as W,a6 as ce,a7 as X}from"../../chunks/vendor-a91cbba7.js";function fe(...e){let t=[],r=[];if(e.forEach(a=>{const i=T(a);t.includes(i.name)?r=r.includes(i.name)?r:[...r,i.name]:t=[...t,i.name]}),r.length)throw new Error(`Cannot have the fields with the same name: ${r.join(", ")}`);const n=ae(e,a=>({valid:a.every(i=>i.valid),dirty:a.some(i=>i.dirty),get summary(){return a.reduce((i,f)=>(i[f.name]=f.value,i),{})},errors:a.map(i=>i.errors.map(f=>f.includes(".")?f:`${i.name}.${f}`)).flat().filter((i,f,d)=>d.indexOf(i)===f),hasError(i){return this.errors.findIndex(f=>f===i)!==-1}})),{subscribe:l}=n;function u(){e.forEach(a=>a.reset&&a.reset())}function c(){e.forEach(a=>a.clear&&a.clear())}async function m(){for(const a of e)a.validate&&await a.validate()}function v(a){return e.find(i=>T(i).name===a)}function y(){return T(n).summary}return{subscribe:l,reset:u,validate:m,getField:v,summary:y,clear:c}}const de={valid:!0,checkOnInit:!1,validateOnChange:!0,stopAtFirstError:!1};function ve(e){const t=Object.keys(e);return["name","value","valid","invalid","errors"].every(r=>t.includes(r))}function me(e){const t=function(n){return e.subscribe!==void 0},r=function(n){return!!e.name&&e.valid!==void 0};return t()?T(e).value:r()?e.value:e}async function Z(e,t,r=!1){const n=me(e);let l=[];for(const u of t){let c=u(n);if(ie(c)&&(c=await c),r&&!c.valid){l=[c];break}l=[...l,c]}return l}function S(e,t,r={}){if(t){const n=t.filter(u=>!u.valid).map(u=>u.name),l=!n.length;return N(K(N({},e),{valid:l,invalid:!l,errors:n}),r)}return e}function pe(e,t,r=[],n){const l={name:e,value:t,valid:n.valid,invalid:!n.valid,dirty:!1,errors:[]},u=se(l),{subscribe:c,update:m,set:v}=u;async function y(d,p=!1){if(ve(d)||(d=S(T(u),[],{value:d})),p||n.validateOnChange){let h=await Z(d,r,n.stopAtFirstError);v(S(d,h,{dirty:!0}))}else v(S(d,[],{dirty:!0}))}async function a(){const d=await Z(u,r,n.stopAtFirstError);let p;return m(h=>(p=S(h,d,{dirty:!1}),p)),p}function i(){v(S({dirty:!1,errors:[],name:e,valid:n.valid,invalid:!n.valid,value:t}))}n.checkOnInit&&y(l);function f(){v(S({dirty:!1,errors:[],name:e,valid:n.valid,invalid:!n.valid,value:null}))}return{subscribe:c,update:m,set:y,validate:a,reset:i,clear:f}}function _e(e,t,r=[],n={}){return pe(e,t,r,N(N({},de),n))}function be(){return e=>{let t=!0;return e==null&&(t=!1),typeof e=="string"&&(t=e.replace(/\s/g,"").length>0),{valid:t,name:"required"}}}function he(e){return t=>t==null?{valid:!1,name:"pattern"}:{valid:e.test(t),name:"pattern"}}function ye(e){let t,r,n,l,u,c,m,v,y,a,i,f,d,p,h=JSON.stringify(e[0],null,2)+"",P,R,g,k=JSON.stringify(e[1],null,2)+"",U,q,B;return{c(){t=E("section"),r=E("input"),n=w(),l=E("button"),u=C("Clear"),c=w(),m=E("button"),v=C("Reset"),y=w(),a=E("button"),i=C("Send form"),d=w(),p=E("pre"),P=C(h),R=w(),g=E("pre"),U=C(k),this.h()},l(s){t=O(s,"SECTION",{});var o=F(t);r=O(o,"INPUT",{type:!0,class:!0}),n=j(o),l=O(o,"BUTTON",{});var $=F(l);u=I($,"Clear"),$.forEach(b),c=j(o),m=O(o,"BUTTON",{});var D=F(m);v=I(D,"Reset"),D.forEach(b),y=j(o),a=O(o,"BUTTON",{});var z=F(a);i=I(z,"Send form"),z.forEach(b),o.forEach(b),d=j(s),p=O(s,"PRE",{});var G=F(p);P=I(G,h),G.forEach(b),R=j(s),g=O(s,"PRE",{});var V=F(g);U=I(V,k),V.forEach(b),this.h()},h(){L(r,"type","text"),L(r,"class","svelte-1xg1zrm"),a.disabled=f=!e[1].valid},m(s,o){J(s,t,o),_(t,r),M(r,e[0].value),_(t,n),_(t,l),_(l,u),_(t,c),_(t,m),_(m,v),_(t,y),_(t,a),_(a,i),J(s,d,o),J(s,p,o),_(p,P),J(s,R,o),J(s,g,o),_(g,U),q||(B=[A(r,"input",e[4]),A(l,"click",e[3].clear),A(m,"click",e[3].reset)],q=!0)},p(s,[o]){o&1&&r.value!==s[0].value&&M(r,s[0].value),o&2&&f!==(f=!s[1].valid)&&(a.disabled=f),o&1&&h!==(h=JSON.stringify(s[0],null,2)+"")&&Q(P,h),o&2&&k!==(k=JSON.stringify(s[1],null,2)+"")&&Q(U,k)},i:W,o:W,d(s){s&&b(t),s&&b(d),s&&b(p),s&&b(R),s&&b(g),q=!1,ce(B)}}}function Ee(e,t,r){let n,l;const u=_e("name","Default value",[be(),he(/\d+/)]);X(e,u,v=>r(0,n=v));const c=fe(u);X(e,c,v=>r(1,l=v));function m(){n.value=this.value,u.set(n)}return[n,l,u,c,m]}class Fe extends le{constructor(t){super();ue(this,t,Ee,ye,oe,{})}}export{Fe as default};
