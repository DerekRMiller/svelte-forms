import{S as Y,i as w,s as y,e as v,t as E,c as b,a as d,h as P,d as m,g as n,F as R,j,k as N,l as q,m as S,Y as C}from"./chunks/vendor-a91cbba7.js";function F(r){let l,a=r[1].frame+"",t;return{c(){l=v("pre"),t=E(a)},l(f){l=b(f,"PRE",{});var s=d(l);t=P(s,a),s.forEach(m)},m(f,s){n(f,l,s),R(l,t)},p(f,s){s&2&&a!==(a=f[1].frame+"")&&j(t,a)},d(f){f&&m(l)}}}function H(r){let l,a=r[1].stack+"",t;return{c(){l=v("pre"),t=E(a)},l(f){l=b(f,"PRE",{});var s=d(l);t=P(s,a),s.forEach(m)},m(f,s){n(f,l,s),R(l,t)},p(f,s){s&2&&a!==(a=f[1].stack+"")&&j(t,a)},d(f){f&&m(l)}}}function z(r){let l,a,t,f,s=r[1].message+"",c,k,u,p,i=r[1].frame&&F(r),o=r[1].stack&&H(r);return{c(){l=v("h1"),a=E(r[0]),t=N(),f=v("pre"),c=E(s),k=N(),i&&i.c(),u=N(),o&&o.c(),p=q()},l(e){l=b(e,"H1",{});var _=d(l);a=P(_,r[0]),_.forEach(m),t=S(e),f=b(e,"PRE",{});var h=d(f);c=P(h,s),h.forEach(m),k=S(e),i&&i.l(e),u=S(e),o&&o.l(e),p=q()},m(e,_){n(e,l,_),R(l,a),n(e,t,_),n(e,f,_),R(f,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&j(a,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=F(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=H(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&m(l),e&&m(t),e&&m(f),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function D({error:r,status:l}){return{props:{error:r,status:l}}}function A(r,l,a){let{status:t}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,f=s.error)},[t,f]}class G extends Y{constructor(l){super();w(this,l,A,z,y,{status:0,error:1})}}export{G as default,D as load};
