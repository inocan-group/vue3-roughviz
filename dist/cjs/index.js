'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var d3 = require('d3');

function t(t,e,s){if(t&&t.length){const[n,o]=e,a=Math.PI/180*s,r=Math.cos(a),h=Math.sin(a);t.forEach(t=>{const[e,s]=t;t[0]=(e-n)*r-(s-o)*h+n,t[1]=(e-n)*h+(s-o)*r+o;});}}function e(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function s(t,e,s,n){const o=e[1]-t[1],a=t[0]-e[0],r=o*t[0]+a*t[1],h=n[1]-s[1],i=s[0]-n[0],c=h*s[0]+i*s[1],l=o*i-h*a;return l?[(i*r-a*c)/l,(o*c-h*r)/l]:null}function n(t,e,s){const n=t.length;if(n<3)return !1;const h=[Number.MAX_SAFE_INTEGER,s],i=[e,s];let c=0;for(let e=0;e<n;e++){const s=t[e],l=t[(e+1)%n];if(r(s,l,i,h)){if(0===a(s,i,l))return o(s,i,l);c++;}}return c%2==1}function o(t,e,s){return e[0]<=Math.max(t[0],s[0])&&e[0]>=Math.min(t[0],s[0])&&e[1]<=Math.max(t[1],s[1])&&e[1]>=Math.min(t[1],s[1])}function a(t,e,s){const n=(e[1]-t[1])*(s[0]-e[0])-(e[0]-t[0])*(s[1]-e[1]);return 0===n?0:n>0?1:2}function r(t,e,s,n){const r=a(t,e,s),h=a(t,e,n),i=a(s,n,t),c=a(s,n,e);return r!==h&&i!==c||(!(0!==r||!o(t,s,e))||(!(0!==h||!o(t,n,e))||(!(0!==i||!o(s,t,n))||!(0!==c||!o(s,e,n)))))}function h(e,s){const n=[0,0],o=Math.round(s.hachureAngle+90);o&&t(e,n,o);const a=function(t,e){const s=[...t];s[0].join(",")!==s[s.length-1].join(",")&&s.push([s[0][0],s[0][1]]);const n=[];if(s&&s.length>2){let t=e.hachureGap;t<0&&(t=4*e.strokeWidth),t=Math.max(t,.1);const o=[];for(let t=0;t<s.length-1;t++){const e=s[t],n=s[t+1];if(e[1]!==n[1]){const t=Math.min(e[1],n[1]);o.push({ymin:t,ymax:Math.max(e[1],n[1]),x:t===e[1]?e[0]:n[0],islope:(n[0]-e[0])/(n[1]-e[1])});}}if(o.sort((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax)),!o.length)return n;let a=[],r=o[0].ymin;for(;a.length||o.length;){if(o.length){let t=-1;for(let e=0;e<o.length&&!(o[e].ymin>r);e++)t=e;o.splice(0,t+1).forEach(t=>{a.push({s:r,edge:t});});}if(a=a.filter(t=>!(t.edge.ymax<=r)),a.sort((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x)),a.length>1)for(let t=0;t<a.length;t+=2){const e=t+1;if(e>=a.length)break;const s=a[t].edge,o=a[e].edge;n.push([[Math.round(s.x),r],[Math.round(o.x),r]]);}r+=t,a.forEach(e=>{e.edge.x=e.edge.x+t*e.edge.islope;});}}return n}(e,s);return o&&(t(e,n,-o),function(e,s,n){const o=[];e.forEach(t=>o.push(...t)),t(o,s,n);}(a,n,-o)),a}class i{constructor(t){this.helper=t;}fillPolygon(t,e){return this._fillPolygon(t,e)}_fillPolygon(t,e,s=!1){let n=h(t,e);if(s){const e=this.connectingLines(t,n);n=n.concat(e);}return {type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const s=[];for(const n of t)s.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}connectingLines(t,s){const n=[];if(s.length>1)for(let o=1;o<s.length;o++){const a=s[o-1];if(e(a)<3)continue;const r=[s[o][0],a[1]];if(e(r)>3){const e=this.splitOnIntersections(t,r);n.push(...e);}}return n}midPointInPolygon(t,e){return n(t,(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2)}splitOnIntersections(t,o){const a=Math.max(5,.1*e(o)),h=[];for(let n=0;n<t.length;n++){const i=t[n],c=t[(n+1)%t.length];if(r(i,c,...o)){const t=s(i,c,o[0],o[1]);if(t){const s=e([t,o[0]]),n=e([t,o[1]]);s>a&&n>a&&h.push({point:t,distance:s});}}}if(h.length>1){const e=h.sort((t,e)=>t.distance-e.distance).map(t=>t.point);if(n(t,...o[0])||e.shift(),n(t,...o[1])||e.pop(),e.length<=1)return this.midPointInPolygon(t,o)?[o]:[];const s=[o[0],...e,o[1]],a=[];for(let e=0;e<s.length-1;e+=2){const n=[s[e],s[e+1]];this.midPointInPolygon(t,n)&&a.push(n);}return a}return this.midPointInPolygon(t,o)?[o]:[]}}class c extends i{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}}class l extends i{fillPolygon(t,e){const s=this._fillPolygon(t,e),n=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),o=this._fillPolygon(t,n);return s.ops=s.ops.concat(o.ops),s}}class u{constructor(t){this.helper=t;}fillPolygon(t,e){const s=h(t,e=Object.assign({},e,{curveStepCount:4,hachureAngle:0,roughness:1}));return this.dotsOnLines(s,e)}dotsOnLines(t,s){const n=[];let o=s.hachureGap;o<0&&(o=4*s.strokeWidth),o=Math.max(o,.1);let a=s.fillWeight;a<0&&(a=s.strokeWidth/2);const r=o/4;for(const h of t){const t=e(h),i=t/o,c=Math.ceil(i)-1,l=t-c*o,u=(h[0][0]+h[1][0])/2-o/4,f=Math.min(h[0][1],h[1][1]);for(let t=0;t<c;t++){const e=f+l+t*o,h=this.helper.randOffsetWithRange(u-r,u+r,s),i=this.helper.randOffsetWithRange(e-r,e+r,s),c=this.helper.ellipse(h,i,a,a,s);n.push(...c.ops);}}return {type:"fillSketch",ops:n}}}class f{constructor(t){this.helper=t;}fillPolygon(t,e){const s=h(t,e);return {type:"fillSketch",ops:this.dashedLine(s,e)}}dashedLine(t,s){const n=s.dashOffset<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashOffset,o=s.dashGap<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashGap,a=[];return t.forEach(t=>{const r=e(t),h=Math.floor(r/(n+o)),i=(r+o-h*(n+o))/2;let c=t[0],l=t[1];c[0]>l[0]&&(c=t[1],l=t[0]);const u=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let t=0;t<h;t++){const e=t*(n+o),r=e+n,h=[c[0]+e*Math.cos(u)+i*Math.cos(u),c[1]+e*Math.sin(u)+i*Math.sin(u)],l=[c[0]+r*Math.cos(u)+i*Math.cos(u),c[1]+r*Math.sin(u)+i*Math.sin(u)];a.push(...this.helper.doubleLineOps(h[0],h[1],l[0],l[1],s));}}),a}}class p{constructor(t){this.helper=t;}fillPolygon(t,e){const s=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,n=e.zigzagOffset<0?s:e.zigzagOffset,o=h(t,e=Object.assign({},e,{hachureGap:s+n}));return {type:"fillSketch",ops:this.zigzagLines(o,n,e)}}zigzagLines(t,s,n){const o=[];return t.forEach(t=>{const a=e(t),r=Math.round(a/(2*s));let h=t[0],i=t[1];h[0]>i[0]&&(h=t[1],i=t[0]);const c=Math.atan((i[1]-h[1])/(i[0]-h[0]));for(let t=0;t<r;t++){const e=2*t*s,a=2*(t+1)*s,r=Math.sqrt(2*Math.pow(s,2)),i=[h[0]+e*Math.cos(c),h[1]+e*Math.sin(c)],l=[h[0]+a*Math.cos(c),h[1]+a*Math.sin(c)],u=[i[0]+r*Math.cos(c+Math.PI/4),i[1]+r*Math.sin(c+Math.PI/4)];o.push(...this.helper.doubleLineOps(i[0],i[1],u[0],u[1],n),...this.helper.doubleLineOps(u[0],u[1],l[0],l[1],n));}}),o}}const d={};class g{constructor(t){this.seed=t;}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const M={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function k(t,e){return t.type===e}function b(t){const e=[],s=function(t){const e=new Array;for(;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:0,text:RegExp.$1},t=t.substr(RegExp.$1.length);else {if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return [];e[e.length]={type:1,text:""+parseFloat(RegExp.$1)},t=t.substr(RegExp.$1.length);}return e[e.length]={type:2,text:""},e}(t);let n="BOD",o=0,a=s[o];for(;!k(a,2);){let r=0;const h=[];if("BOD"===n){if("M"!==a.text&&"m"!==a.text)return b("M0,0"+t);o++,r=M[a.text],n=a.text;}else k(a,1)?r=M[n]:(o++,r=M[a.text],n=a.text);if(!(o+r<s.length))throw new Error("Path data ended short");for(let t=o;t<o+r;t++){const e=s[t];if(!k(e,1))throw new Error("Param not a number: "+n+","+e.text);h[h.length]=+e.text;}if("number"!=typeof M[n])throw new Error("Bad segment: "+n);{const t={key:n,data:h};e.push(t),o+=r,a=s[o],"M"===n&&(n="L"),"m"===n&&(n="l");}}return e}function y(t){let e=0,s=0,n=0,o=0;const a=[];for(const{key:r,data:h}of t)switch(r){case"M":a.push({key:"M",data:[...h]}),[e,s]=h,[n,o]=h;break;case"m":e+=h[0],s+=h[1],a.push({key:"M",data:[e,s]}),n=e,o=s;break;case"L":a.push({key:"L",data:[...h]}),[e,s]=h;break;case"l":e+=h[0],s+=h[1],a.push({key:"L",data:[e,s]});break;case"C":a.push({key:"C",data:[...h]}),e=h[4],s=h[5];break;case"c":{const t=h.map((t,n)=>n%2?t+s:t+e);a.push({key:"C",data:t}),e=t[4],s=t[5];break}case"Q":a.push({key:"Q",data:[...h]}),e=h[2],s=h[3];break;case"q":{const t=h.map((t,n)=>n%2?t+s:t+e);a.push({key:"Q",data:t}),e=t[2],s=t[3];break}case"A":a.push({key:"A",data:[...h]}),e=h[5],s=h[6];break;case"a":e+=h[5],s+=h[6],a.push({key:"A",data:[h[0],h[1],h[2],h[3],h[4],e,s]});break;case"H":a.push({key:"H",data:[...h]}),e=h[0];break;case"h":e+=h[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...h]}),s=h[0];break;case"v":s+=h[0],a.push({key:"V",data:[s]});break;case"S":a.push({key:"S",data:[...h]}),e=h[2],s=h[3];break;case"s":{const t=h.map((t,n)=>n%2?t+s:t+e);a.push({key:"S",data:t}),e=t[2],s=t[3];break}case"T":a.push({key:"T",data:[...h]}),e=h[0],s=h[1];break;case"t":e+=h[0],s+=h[1],a.push({key:"T",data:[e,s]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=n,s=o;}return a}function m(t){const e=[];let s="",n=0,o=0,a=0,r=0,h=0,i=0;for(const{key:c,data:l}of t){switch(c){case"M":e.push({key:"M",data:[...l]}),[n,o]=l,[a,r]=l;break;case"C":e.push({key:"C",data:[...l]}),n=l[4],o=l[5],h=l[2],i=l[3];break;case"L":e.push({key:"L",data:[...l]}),[n,o]=l;break;case"H":n=l[0],e.push({key:"L",data:[n,o]});break;case"V":o=l[0],e.push({key:"L",data:[n,o]});break;case"S":{let t=0,a=0;"C"===s||"S"===s?(t=n+(n-h),a=o+(o-i)):(t=n,a=o),e.push({key:"C",data:[t,a,...l]}),h=l[0],i=l[1],n=l[2],o=l[3];break}case"T":{const[t,a]=l;let r=0,c=0;"Q"===s||"T"===s?(r=n+(n-h),c=o+(o-i)):(r=n,c=o);const u=n+2*(r-n)/3,f=o+2*(c-o)/3,p=t+2*(r-t)/3,d=a+2*(c-a)/3;e.push({key:"C",data:[u,f,p,d,t,a]}),h=r,i=c,n=t,o=a;break}case"Q":{const[t,s,a,r]=l,c=n+2*(t-n)/3,u=o+2*(s-o)/3,f=a+2*(t-a)/3,p=r+2*(s-r)/3;e.push({key:"C",data:[c,u,f,p,a,r]}),h=t,i=s,n=a,o=r;break}case"A":{const t=Math.abs(l[0]),s=Math.abs(l[1]),a=l[2],r=l[3],h=l[4],i=l[5],c=l[6];if(0===t||0===s)e.push({key:"C",data:[n,o,i,c,i,c]}),n=i,o=c;else if(n!==i||o!==c){P(n,o,i,c,t,s,a,r,h).forEach((function(t){e.push({key:"C",data:t});})),n=i,o=c;}break}case"Z":e.push({key:"Z",data:[]}),n=a,o=r;}s=c;}return e}function w(t,e,s){return [t*Math.cos(s)-e*Math.sin(s),t*Math.sin(s)+e*Math.cos(s)]}function P(t,e,s,n,o,a,r,h,i,c){const l=(u=r,Math.PI*u/180);var u;let f=[],p=0,d=0,g=0,M=0;if(c)[p,d,g,M]=c;else {[t,e]=w(t,e,-l),[s,n]=w(s,n,-l);const r=(t-s)/2,c=(e-n)/2;let u=r*r/(o*o)+c*c/(a*a);u>1&&(u=Math.sqrt(u),o*=u,a*=u);const f=o*o,k=a*a,b=f*k-f*c*c-k*r*r,y=f*c*c+k*r*r,m=(h===i?-1:1)*Math.sqrt(Math.abs(b/y));g=m*o*c/a+(t+s)/2,M=m*-a*r/o+(e+n)/2,p=Math.asin(parseFloat(((e-M)/a).toFixed(9))),d=Math.asin(parseFloat(((n-M)/a).toFixed(9))),t<g&&(p=Math.PI-p),s<g&&(d=Math.PI-d),p<0&&(p=2*Math.PI+p),d<0&&(d=2*Math.PI+d),i&&p>d&&(p-=2*Math.PI),!i&&d>p&&(d-=2*Math.PI);}let k=d-p;if(Math.abs(k)>120*Math.PI/180){const t=d,e=s,h=n;d=i&&d>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,f=P(s=g+o*Math.cos(d),n=M+a*Math.sin(d),e,h,o,a,r,0,i,[d,t,g,M]);}k=d-p;const b=Math.cos(p),y=Math.sin(p),m=Math.cos(d),x=Math.sin(d),v=Math.tan(k/4),O=4/3*o*v,S=4/3*a*v,L=[t,e],T=[t+O*y,e-S*b],I=[s+O*x,n-S*m],A=[s,n];if(T[0]=2*L[0]-T[0],T[1]=2*L[1]-T[1],c)return [T,I,A].concat(f);{f=[T,I,A].concat(f);const t=[];for(let e=0;e<f.length;e+=3){const s=w(f[e][0],f[e][1],l),n=w(f[e+1][0],f[e+1][1],l),o=w(f[e+2][0],f[e+2][1],l);t.push([s[0],s[1],n[0],n[1],o[0],o[1]]);}return t}}const x={randOffset:function(t,e){return W(t,e)},randOffsetWithRange:function(t,e,s){return E(t,e,s)},ellipse:function(t,e,s,n,o){const a=T(s,n,o);return I(t,e,o,a).opset},doubleLineOps:function(t,e,s,n,o){return z(t,e,s,n,o,!0)}};function v(t,e,s,n,o){return {type:"path",ops:z(t,e,s,n,o)}}function O(t,e,s){const n=(t||[]).length;if(n>2){const o=[];for(let e=0;e<n-1;e++)o.push(...z(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&o.push(...z(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:o}}return 2===n?v(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function S(t,e,s,n,o){return function(t,e){return O(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],o)}function L(t,e){let s=$(t,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){const n=$(t,1.5*(1+.22*e.roughness),function(t){const e=Object.assign({},t);e.randomizer=void 0,t.seed&&(e.seed=t.seed+1);return e}(e));s=s.concat(n);}return {type:"path",ops:s}}function T(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),o=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),a=2*Math.PI/o;let r=Math.abs(t/2),h=Math.abs(e/2);const i=1-s.curveFitting;return r+=W(r*i,s),h+=W(h*i,s),{increment:a,rx:r,ry:h}}function I(t,e,s,n){const[o,a]=q(n.increment,t,e,n.rx,n.ry,1,n.increment*E(.1,E(.4,1,s),s),s);let r=G(o,null,s);if(!s.disableMultiStroke){const[o]=q(n.increment,t,e,n.rx,n.ry,1.5,0,s),a=G(o,null,s);r=r.concat(a);}return {estimatedPoints:a,opset:{type:"path",ops:r}}}function A(t,e,s,n,o,a,r,h,i){const c=t,l=e;let u=Math.abs(s/2),f=Math.abs(n/2);u+=W(.01*u,i),f+=W(.01*f,i);let p=o,d=a;for(;p<0;)p+=2*Math.PI,d+=2*Math.PI;d-p>2*Math.PI&&(p=0,d=2*Math.PI);const g=2*Math.PI/i.curveStepCount,M=Math.min(g/2,(d-p)/2),k=F(M,c,l,u,f,p,d,1,i);if(!i.disableMultiStroke){const t=F(M,c,l,u,f,p,d,1.5,i);k.push(...t);}return r&&(h?k.push(...z(c,l,c+u*Math.cos(p),l+f*Math.sin(p),i),...z(c,l,c+u*Math.cos(d),l+f*Math.sin(d),i)):k.push({op:"lineTo",data:[c,l]},{op:"lineTo",data:[c+u*Math.cos(p),l+f*Math.sin(p)]})),{type:"path",ops:k}}function _(t,e){const s=[];if(t.length){const n=e.maxRandomnessOffset||0,o=t.length;if(o>2){s.push({op:"move",data:[t[0][0]+W(n,e),t[0][1]+W(n,e)]});for(let a=1;a<o;a++)s.push({op:"lineTo",data:[t[a][0]+W(n,e),t[a][1]+W(n,e)]});}}return {type:"fillPath",ops:s}}function C(t,e){return function(t,e){let s=t.fillStyle||"hachure";if(!d[s])switch(s){case"zigzag":d[s]||(d[s]=new c(e));break;case"cross-hatch":d[s]||(d[s]=new l(e));break;case"dots":d[s]||(d[s]=new u(e));break;case"dashed":d[s]||(d[s]=new f(e));break;case"zigzag-line":d[s]||(d[s]=new p(e));break;case"hachure":default:s="hachure",d[s]||(d[s]=new i(e));}return d[s]}(e,x).fillPolygon(t,e)}function D(t){return t.randomizer||(t.randomizer=new g(t.seed||0)),t.randomizer.next()}function E(t,e,s,n=1){return s.roughness*n*(D(s)*(e-t)+t)}function W(t,e,s=1){return E(-t,t,e,s)}function z(t,e,s,n,o,a=!1){const r=a?o.disableMultiStrokeFill:o.disableMultiStroke,h=R(t,e,s,n,o,!0,!1);if(r)return h;const i=R(t,e,s,n,o,!0,!0);return h.concat(i)}function R(t,e,s,n,o,a,r){const h=Math.pow(t-s,2)+Math.pow(e-n,2),i=Math.sqrt(h);let c=1;c=i<200?1:i>500?.4:-.0016668*i+1.233334;let l=o.maxRandomnessOffset||0;l*l*100>h&&(l=i/10);const u=l/2,f=.2+.2*D(o);let p=o.bowing*o.maxRandomnessOffset*(n-e)/200,d=o.bowing*o.maxRandomnessOffset*(t-s)/200;p=W(p,o,c),d=W(d,o,c);const g=[],M=()=>W(u,o,c),k=()=>W(l,o,c);return a&&(r?g.push({op:"move",data:[t+M(),e+M()]}):g.push({op:"move",data:[t+W(l,o,c),e+W(l,o,c)]})),r?g.push({op:"bcurveTo",data:[p+t+(s-t)*f+M(),d+e+(n-e)*f+M(),p+t+2*(s-t)*f+M(),d+e+2*(n-e)*f+M(),s+M(),n+M()]}):g.push({op:"bcurveTo",data:[p+t+(s-t)*f+k(),d+e+(n-e)*f+k(),p+t+2*(s-t)*f+k(),d+e+2*(n-e)*f+k(),s+k(),n+k()]}),g}function $(t,e,s){const n=[];n.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]),n.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]);for(let o=1;o<t.length;o++)n.push([t[o][0]+W(e,s),t[o][1]+W(e,s)]),o===t.length-1&&n.push([t[o][0]+W(e,s),t[o][1]+W(e,s)]);return G(n,null,s)}function G(t,e,s){const n=t.length,o=[];if(n>3){const a=[],r=1-s.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];a[0]=[s[0],s[1]],a[1]=[s[0]+(r*t[e+1][0]-r*t[e-1][0])/6,s[1]+(r*t[e+1][1]-r*t[e-1][1])/6],a[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],a[3]=[t[e+1][0],t[e+1][1]],o.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]});}if(e&&2===e.length){const t=s.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+W(t,s),e[1]+W(t,s)]});}}else 3===n?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&o.push(...z(t[0][0],t[0][1],t[1][0],t[1][1],s));return o}function q(t,e,s,n,o,a,r,h){const i=[],c=[],l=W(.5,h)-Math.PI/2;c.push([W(a,h)+e+.9*n*Math.cos(l-t),W(a,h)+s+.9*o*Math.sin(l-t)]);for(let r=l;r<2*Math.PI+l-.01;r+=t){const t=[W(a,h)+e+n*Math.cos(r),W(a,h)+s+o*Math.sin(r)];i.push(t),c.push(t);}return c.push([W(a,h)+e+n*Math.cos(l+2*Math.PI+.5*r),W(a,h)+s+o*Math.sin(l+2*Math.PI+.5*r)]),c.push([W(a,h)+e+.98*n*Math.cos(l+r),W(a,h)+s+.98*o*Math.sin(l+r)]),c.push([W(a,h)+e+.9*n*Math.cos(l+.5*r),W(a,h)+s+.9*o*Math.sin(l+.5*r)]),[c,i]}function F(t,e,s,n,o,a,r,h,i){const c=a+W(.1,i),l=[];l.push([W(h,i)+e+.9*n*Math.cos(c-t),W(h,i)+s+.9*o*Math.sin(c-t)]);for(let a=c;a<=r;a+=t)l.push([W(h,i)+e+n*Math.cos(a),W(h,i)+s+o*Math.sin(a)]);return l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),G(l,null,i)}function j(t,e,s,n,o,a,r,h){const i=[],c=[h.maxRandomnessOffset||1,(h.maxRandomnessOffset||1)+.3];let l=[0,0];const u=h.disableMultiStroke?1:2;for(let f=0;f<u;f++)0===f?i.push({op:"move",data:[r[0],r[1]]}):i.push({op:"move",data:[r[0]+W(c[0],h),r[1]+W(c[0],h)]}),l=[o+W(c[f],h),a+W(c[f],h)],i.push({op:"bcurveTo",data:[t+W(c[f],h),e+W(c[f],h),s+W(c[f],h),n+W(c[f],h),l[0],l[1]]});return i}function N(t){return [...t]}function Z(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function Q(t,e,s){const n=Z(e,s);if(0===n)return Z(t,e);let o=((t[0]-e[0])*(s[0]-e[0])+(t[1]-e[1])*(s[1]-e[1]))/n;return o=Math.max(0,Math.min(1,o)),Z(t,H(e,s,o))}function H(t,e,s){return [t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}function V(t,e,s,n){const o=n||[];if(function(t,e){const s=t[e+0],n=t[e+1],o=t[e+2],a=t[e+3];let r=3*n[0]-2*s[0]-a[0];r*=r;let h=3*n[1]-2*s[1]-a[1];h*=h;let i=3*o[0]-2*a[0]-s[0];i*=i;let c=3*o[1]-2*a[1]-s[1];return c*=c,r<i&&(r=i),h<c&&(h=c),r+h}(t,e)<s){const s=t[e+0];if(o.length){(a=o[o.length-1],r=s,Math.sqrt(Z(a,r)))>1&&o.push(s);}else o.push(s);o.push(t[e+3]);}else {const n=.5,a=t[e+0],r=t[e+1],h=t[e+2],i=t[e+3],c=H(a,r,n),l=H(r,h,n),u=H(h,i,n),f=H(c,l,n),p=H(l,u,n),d=H(f,p,n);V([a,c,f,d],0,s,o),V([d,p,u,i],0,s,o);}var a,r;return o}function B(t,e){return X(t,0,t.length,e)}function X(t,e,s,n,o){const a=o||[],r=t[e],h=t[s-1];let i=0,c=1;for(let n=e+1;n<s-1;++n){const e=Q(t[n],r,h);e>i&&(i=e,c=n);}return Math.sqrt(i)>n?(X(t,e,c+1,n,a),X(t,c,s,n,a)):(a.length||a.push(r),a.push(h)),a}function J(t,e=.15,s){const n=[],o=(t.length-1)/3;for(let s=0;s<o;s++){V(t,3*s,e,n);}return s&&s>0?X(n,0,n.length,s):n}const K="none";class U{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options));}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,s){return {shape:t,sets:e||[],options:s||this.defaultOptions}}line(t,e,s,n,o){const a=this._o(o);return this._d("line",[v(t,e,s,n,a)],a)}rectangle(t,e,s,n,o){const a=this._o(o),r=[],h=S(t,e,s,n,a);if(a.fill){const o=[[t,e],[t+s,e],[t+s,e+n],[t,e+n]];"solid"===a.fillStyle?r.push(_(o,a)):r.push(C(o,a));}return a.stroke!==K&&r.push(h),this._d("rectangle",r,a)}ellipse(t,e,s,n,o){const a=this._o(o),r=[],h=T(s,n,a),i=I(t,e,a,h);if(a.fill)if("solid"===a.fillStyle){const s=I(t,e,a,h).opset;s.type="fillPath",r.push(s);}else r.push(C(i.estimatedPoints,a));return a.stroke!==K&&r.push(i.opset),this._d("ellipse",r,a)}circle(t,e,s,n){const o=this.ellipse(t,e,s,s,n);return o.shape="circle",o}linearPath(t,e){const s=this._o(e);return this._d("linearPath",[O(t,!1,s)],s)}arc(t,e,s,n,o,a,r=!1,h){const i=this._o(h),c=[],l=A(t,e,s,n,o,a,r,!0,i);if(r&&i.fill)if("solid"===i.fillStyle){const r=A(t,e,s,n,o,a,!0,!1,i);r.type="fillPath",c.push(r);}else c.push(function(t,e,s,n,o,a,r){const h=t,i=e;let c=Math.abs(s/2),l=Math.abs(n/2);c+=W(.01*c,r),l+=W(.01*l,r);let u=o,f=a;for(;u<0;)u+=2*Math.PI,f+=2*Math.PI;f-u>2*Math.PI&&(u=0,f=2*Math.PI);const p=(f-u)/r.curveStepCount,d=[];for(let t=u;t<=f;t+=p)d.push([h+c*Math.cos(t),i+l*Math.sin(t)]);return d.push([h+c*Math.cos(f),i+l*Math.sin(f)]),d.push([h,i]),C(d,r)}(t,e,s,n,o,a,i));return i.stroke!==K&&c.push(l),this._d("arc",c,i)}curve(t,e){const s=this._o(e),n=[],o=L(t,s);if(s.fill&&s.fill!==K&&t.length>=3){const e=J(function(t,e=0){const s=t.length;if(s<3)throw new Error("A curve must have at least three points.");const n=[];if(3===s)n.push(N(t[0]),N(t[1]),N(t[2]),N(t[2]));else {const s=[];s.push(t[0],t[0]);for(let e=1;e<t.length;e++)s.push(t[e]),e===t.length-1&&s.push(t[e]);const o=[],a=1-e;n.push(N(s[0]));for(let t=1;t+2<s.length;t++){const e=s[t];o[0]=[e[0],e[1]],o[1]=[e[0]+(a*s[t+1][0]-a*s[t-1][0])/6,e[1]+(a*s[t+1][1]-a*s[t-1][1])/6],o[2]=[s[t+1][0]+(a*s[t][0]-a*s[t+2][0])/6,s[t+1][1]+(a*s[t][1]-a*s[t+2][1])/6],o[3]=[s[t+1][0],s[t+1][1]],n.push(o[1],o[2],o[3]);}}return n}(t),10,(1+s.roughness)/2);"solid"===s.fillStyle?n.push(_(e,s)):n.push(C(e,s));}return s.stroke!==K&&n.push(o),this._d("curve",n,s)}polygon(t,e){const s=this._o(e),n=[],o=O(t,!0,s);return s.fill&&("solid"===s.fillStyle?n.push(_(t,s)):n.push(C(t,s))),s.stroke!==K&&n.push(o),this._d("polygon",n,s)}path(t,e){const s=this._o(e),n=[];if(!t)return this._d("path",n,s);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=s.fill&&"transparent"!==s.fill&&s.fill!==K,a=s.stroke!==K,r=!!(s.simplification&&s.simplification<1),h=function(t,e,s){const n=m(y(b(t))),o=[];let a=[],r=[0,0],h=[];const i=()=>{h.length>=4&&a.push(...J(h,e)),h=[];},c=()=>{i(),a.length&&(o.push(a),a=[]);};for(const{key:t,data:e}of n)switch(t){case"M":c(),r=[e[0],e[1]],a.push(r);break;case"L":i(),a.push([e[0],e[1]]);break;case"C":if(!h.length){const t=a.length?a[a.length-1]:r;h.push([t[0],t[1]]);}h.push([e[0],e[1]]),h.push([e[2],e[3]]),h.push([e[4],e[5]]);break;case"Z":i(),a.push([r[0],r[1]]);}if(c(),!s)return o;const l=[];for(const t of o){const e=B(t,s);e.length&&l.push(e);}return l}(t,1,r?4-4*s.simplification:(1+s.roughness)/2);if(o)if(s.combineNestedSvgPaths){const t=[];h.forEach(e=>t.push(...e)),"solid"===s.fillStyle?n.push(_(t,s)):n.push(C(t,s));}else h.forEach(t=>{"solid"===s.fillStyle?n.push(_(t,s)):n.push(C(t,s));});return a&&(r?h.forEach(t=>{n.push(O(t,!1,s));}):n.push(function(t,e){const s=m(y(b(t))),n=[];let o=[0,0],a=[0,0];for(const{key:t,data:r}of s)switch(t){case"M":{const t=1*(e.maxRandomnessOffset||0);n.push({op:"move",data:r.map(s=>s+W(t,e))}),a=[r[0],r[1]],o=[r[0],r[1]];break}case"L":n.push(...z(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break;case"C":{const[t,s,o,h,i,c]=r;n.push(...j(t,s,o,h,i,c,a,e)),a=[i,c];break}case"Z":n.push(...z(a[0],a[1],o[0],o[1],e)),a=[o[0],o[1]];}return {type:"path",ops:n}}(t,s))),this._d("path",n,s)}opsToPath(t){let e="";for(const s of t.ops){const t=s.data;switch(s.op){case"move":e+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":e+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"lineTo":e+=`L${t[0]} ${t[1]} `;}}return e.trim()}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,n=[];for(const t of e){let e=null;switch(t.type){case"path":e={d:this.opsToPath(t),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:K};break;case"fillPath":e={d:this.opsToPath(t),stroke:K,strokeWidth:0,fill:s.fill||K};break;case"fillSketch":e=this.fillSketch(t,s);}e&&n.push(e);}return n}fillSketch(t,e){let s=e.fillWeight;return s<0&&(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||K,strokeWidth:s,fill:K}}}class Y{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new U(e);}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.ctx;for(const o of e)switch(o.type){case"path":n.save(),n.strokeStyle="none"===s.stroke?"transparent":s.stroke,n.lineWidth=s.strokeWidth,s.strokeLineDash&&n.setLineDash(s.strokeLineDash),s.strokeLineDashOffset&&(n.lineDashOffset=s.strokeLineDashOffset),this._drawToContext(n,o),n.restore();break;case"fillPath":n.save(),n.fillStyle=s.fill||"";const e="curve"===t.shape||"polygon"===t.shape?"evenodd":"nonzero";this._drawToContext(n,o,e),n.restore();break;case"fillSketch":this.fillSketch(n,o,s);}}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2),t.save(),s.fillLineDash&&t.setLineDash(s.fillLineDash),s.fillLineDashOffset&&(t.lineDashOffset=s.fillLineDashOffset),t.strokeStyle=s.fill||"",t.lineWidth=n,this._drawToContext(t,e),t.restore();}_drawToContext(t,e,s="nonzero"){t.beginPath();for(const s of e.ops){const e=s.data;switch(s.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"lineTo":t.lineTo(e[0],e[1]);}}"fillPath"===e.type?t.fill(s):t.stroke();}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a),a}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a),a}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a),a}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o),o}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i),i}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const tt="http://www.w3.org/2000/svg";class et{constructor(t,e){this.svg=t,this.gen=new U(e);}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,o=n.createElementNS(tt,"g");for(const a of e){let e=null;switch(a.type){case"path":e=n.createElementNS(tt,"path"),e.setAttribute("d",this.opsToPath(a)),e.setAttribute("stroke",s.stroke),e.setAttribute("stroke-width",s.strokeWidth+""),e.setAttribute("fill","none"),s.strokeLineDash&&e.setAttribute("stroke-dasharray",s.strokeLineDash.join(" ").trim()),s.strokeLineDashOffset&&e.setAttribute("stroke-dashoffset",""+s.strokeLineDashOffset);break;case"fillPath":e=n.createElementNS(tt,"path"),e.setAttribute("d",this.opsToPath(a)),e.setAttribute("stroke","none"),e.setAttribute("stroke-width","0"),e.setAttribute("fill",s.fill||""),"curve"!==t.shape&&"polygon"!==t.shape||e.setAttribute("fill-rule","evenodd");break;case"fillSketch":e=this.fillSketch(n,a,s);}e&&o.appendChild(e);}return o}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2);const o=t.createElementNS(tt,"path");return o.setAttribute("d",this.opsToPath(e)),o.setAttribute("stroke",s.fill||""),o.setAttribute("stroke-width",n+""),o.setAttribute("fill","none"),s.fillLineDash&&o.setAttribute("stroke-dasharray",s.fillLineDash.join(" ").trim()),s.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",""+s.fillLineDashOffset),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t){return this.gen.opsToPath(t)}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a)}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a)}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a)}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}var st={canvas:(t,e)=>new Y(t,e),svg:(t,e)=>new et(t,e),generator:t=>new U(t),newSeed:()=>U.newSeed()};

/**
 * **get**
 *
 * Gets a value in a deeply nested object. This is a replacement to `lodash.get`
 *
 * @param obj the base object to get the value from
 * @param dotPath the path to the object, using "." as a delimiter
 * @param defaultValue optionally you may state a default value if the operation results in `undefined`
 */
function get(obj, dotPath, defaultValue) {
    const parts = dotPath.split(".");
    let value = obj;
    parts.forEach((p) => {
        value = typeof value === "object" && Object.keys(value).includes(p) ? value[p] : undefined;
    });
    return value ? value : defaultValue;
}

const familyLoader = (family) =>
  `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}&display=swap`;
let requestedFonts = [];

/**
 * Injects a `<link>` reference into the DOM to load the requested font family
 *
 * @param {string} name the name of the font-family to inject into the DOM
 */
const loadFont = (family) => {
  let fontLink = document.createElement("link");
  fontLink.id = `rough-viz-font-${family}`;
  fontLink.rel = "stylesheet";
  fontLink.href = familyLoader(family);
  fontLink.crossorigin = true;

  document.querySelector("head").appendChild(fontLink);
  requestedFonts.push(family);
};

/**
 * Adds `<link>` tag(s) into the DOM to directly request the use of a
 * particular (or group of) font families.
 *
 * @param {string | string[]} family
 */
const useFont = (family) => {
  if (!Array.isArray(family)) {
    family = family ? [family] : [];
  }

  family.filter((f) => !requestedFonts.includes(f)).forEach((f) => loadFont(family));
};

class Chart {
  constructor(opts) {
    this.el = opts.element;
    this.element = opts.element;
    this.title = opts.title;
    this.titleFontSize = opts.titleFontSize;
    this.font = get(opts, "font", 0);
    this.fillStyle = opts.fillStyle;
    this.tooltipFontSize = get(opts, "tooltipFontSize", "0.95rem");
    this.bowing = get(opts, "bowing", 0);
    this.simplification = get(opts, "simplification", 0.2);
    this.interactive = opts.interactive !== false;
    this.dataFormat = typeof opts.data === "object" ? "object" : "file";
  }

  setSvg() {
    this.svg = d3.select(this.el)
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${this.width + this.margin.left + this.margin.right}
       ${this.height + this.margin.top + this.margin.bottom}`
      )
      .append("g")
      .attr("id", this.roughId)
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  resolveFont() {
    if (
      this.font === 0 ||
      this.font === undefined ||
      this.font.toString().toLowerCase() === "gaegu"
    ) {
      useFont("Gaegu");
      this.fontFamily = "Gaegu";
    } else if (this.font === 1 || this.font.toString().toLowerCase() === "indie flower") {
      useFont("Indie Flower");
      this.fontFamily = "Indie Flower";
    } else {
      this.fontFamily = this.font;
    }
  }
}

const DEFAULT_CEILING = 20;
const DEFAULT_VALUE = 1;

const roughCeiling = ({
  roughness,
  ceiling = DEFAULT_CEILING,
  defaultValue = DEFAULT_VALUE,
}) => {
  if (roughness === undefined || typeof roughness !== "number") return defaultValue;

  return roughness > ceiling ? ceiling : roughness;
};

class Bar extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    this.data = opts.data;
    this.margin = opts.margin || { top: 50, right: 20, bottom: 70, left: 100 };
    this.color = get(opts, "color", "skyblue");
    this.highlight = get(opts, "highlight", "coral");
    this.roughness = roughCeiling({ roughness: opts.roughness });
    this.stroke = get(opts, "stroke", "black");
    this.strokeWidth = get(opts, "strokeWidth", 1);
    this.axisStrokeWidth = get(opts, "axisStrokeWidth", 0.5);
    this.axisRoughness = get(opts, "axisRoughness", 0.5);
    this.innerStrokeWidth = get(opts, "innerStrokeWidth", 1);
    this.fillWeight = get(opts, "fillWeight", 0.5);
    this.axisFontSize = opts.axisFontSize;
    this.labels = this.dataFormat === "object" ? "labels" : opts.labels;
    this.values = this.dataFormat === "object" ? "values" : opts.values;
    this.xValueFormat = opts.xValueFormat;
    this.yValueFormat = opts.yValueFormat;
    this.padding = get(opts, "padding", 0.1);
    this.xLabel = get(opts, "xLabel", "");
    this.yLabel = get(opts, "yLabel", "");
    this.labelFontSize = get(opts, "labelFontSize", "1rem");
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 350;
    const height = opts.height ? opts.height : 450;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.setSvg();
  }

  // add this to abstract base
  resolveData(data) {
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            // console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        this.drawFromObject();
      };
    }
  }

  addScales() {
    const that = this;

    this.xScale = d3.scaleBand()
      .rangeRound([0, this.width])
      .padding(this.padding)
      .domain(
        this.dataFormat === "file" ? this.data.map((d) => d[that.labels]) : this.data[that.labels]
      );

    this.yScale = d3.scaleLinear()
      .rangeRound([this.height, 0])
      .domain(
        this.dataFormat === "file"
          ? [0, d3.max(this.data, (d) => +d[that.values])]
          : [0, d3.max(this.data[that.values])]
      );
  }

  addLabels() {
    // xLabel
    if (this.xLabel !== "") {
      this.svg
        .append("text")
        .attr("x", this.width / 2)
        .attr("y", this.height + this.margin.bottom / 2)
        .attr("dx", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.xLabel);
    }
    // yLabel
    if (this.yLabel !== "") {
      this.svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - this.margin.left / 1.4)
        .attr("x", 0 - this.height / 2)
        .attr("dy", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.yLabel);
    }
  }

  addAxes() {
    const xAxis = d3.axisBottom(this.xScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.xValueFormat ? d3.format(this.xValueFormat)(d) : d;
      });

    const yAxis = d3.axisLeft(this.yScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.yValueFormat ? d3.format(this.yValueFormat)(d) : d;
      });

    // x-axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(xAxis)
      .attr("class", `xAxis${this.graphClass}`)
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.8, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      )
      .style("opacity", 0.9);

    // y-axis
    this.svg
      .append("g")
      .call(yAxis)
      .attr("class", `yAxis${this.graphClass}`)
      .selectAll("text")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      )
      .style("opacity", 0.9);

    // hide original axes
    d3.selectAll("path.domain").attr("stroke", "transparent");
  }

  makeAxesRough(roughSvg, rcAxis) {
    const xAxisClass = `xAxis${this.graphClass}`;
    const yAxisClass = `yAxis${this.graphClass}`;
    const roughXAxisClass = `rough-${xAxisClass}`;
    const roughYAxisClass = `rough-${yAxisClass}`;

    d3.select(`.${xAxisClass}`)
      .selectAll("path.domain")
      .each((d, i) => {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughXAxis = rcAxis.path(pathD, {
          fillStyle: "hachure",
        });
        roughXAxis.setAttribute("class", roughXAxisClass);
        roughSvg.appendChild(roughXAxis);
      });
    d3.selectAll(`.${roughXAxisClass}`).attr("transform", `translate(0, ${this.height})`);

    d3.select(`.${yAxisClass}`)
      .selectAll("path.domain")
      .each((d, i) => {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughYAxis = rcAxis.path(pathD, {
          fillStyle: "hachure",
        });
        roughYAxis.setAttribute("class", roughYAxisClass);
        roughSvg.appendChild(roughYAxis);
      });
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 2)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(40, Math.min(this.width, this.height) / 5)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    d3.selectAll(this.interactionG)
      .data(this.dataFormat === "file" ? this.data : this.data.values)
      .append("rect")
      .attr("x", (d, i) => {
        return this.dataFormat === "file"
          ? this.xScale(d[this.labels])
          : this.xScale(this.data[this.labels][i]);
      })
      .attr("y", (d, i) => {
        return this.dataFormat === "file"
          ? this.yScale(+d[this.values])
          : this.yScale(this.data[this.values][i]);
      })
      .attr("width", this.xScale.bandwidth())
      .attr("height", (d, i) => {
        return this.dataFormat === "file"
          ? this.height - this.yScale(+d[this.values])
          : this.height - this.yScale(this.data[this.values][i]);
      })
      .attr("fill", "transparent");

    // create tooltip
    const Tooltip = d3.select(this.el)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "3px")
      .style("font-family", this.fontFamily)
      .style("font-size", this.tooltipFontSize)
      .style("pointer-events", "none");

    // event functions
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };
    const that = this;

    var mousemove = function (d) {
      const attrX = d3.select(this).attr("attrX");
      const attrY = d3.select(this).attr("attrY");
      const mousePos = d3.mouse(this);
      // get size of enclosing div
      Tooltip.html(`<b>${attrX}</b>: ${attrY}`)
        .style("opacity", 0.95)
        .attr("class", function (d) {})
        .style(
          "transform",
          `translate(${mousePos[0] + that.margin.left}px, 
          ${mousePos[1] - (that.height + that.margin.top + that.margin.bottom)}px)`
        );
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    // d3 event handlers
    d3.selectAll(this.interactionG).on("mouseover", function () {
      mouseover();
      d3.select(this).select("path").style("stroke", that.highlight);
      d3.select(this)
        .selectAll("path:nth-child(2)")
        .style("stroke-width", that.strokeWidth + 1.2);
    });

    d3.selectAll(this.interactionG).on("mouseout", function () {
      mouseleave();
      d3.select(this).select("path").style("stroke", that.color);
      d3.select(this).selectAll("path:nth-child(2)").style("stroke-width", that.strokeWidth);
    });

    d3.selectAll(this.interactionG).on("mousemove", mousemove);
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: {
        strokeWidth: this.axisStrokeWidth,
        roughness: this.axisRoughness,
      },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        fill: this.color,
        stroke: this.stroke === "none" ? undefined : this.stroke,
        strokeWidth: this.innerStrokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
      },
    });
  }

  drawFromObject() {
    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();

    // Add barplot
    this.data.values.forEach((d, i) => {
      const node = this.rc.rectangle(
        this.xScale(this.data[this.labels][i]),
        this.yScale(+d),
        this.xScale.bandwidth(),
        this.height - this.yScale(+d),
        {
          simplification: this.simplification,
          fillWeight: this.fillWeight,
        }
      );
      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      roughNode.setAttribute("attrX", this.data[this.labels][i]);
      roughNode.setAttribute("attrY", +d);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw

  drawFromFile() {
    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();

    // Add barplot
    this.data.forEach((d) => {
      const node = this.rc.rectangle(
        this.xScale(d[this.labels]),
        this.yScale(+d[this.values]),
        this.xScale.bandwidth(),
        this.height - this.yScale(+d[this.values]),
        {
          simplification: this.simplification,
          fillWeight: this.fillWeight,
        }
      );
      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      roughNode.setAttribute("attrX", d[this.labels]);
      roughNode.setAttribute("attrY", +d[this.values]);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw
}

class BarH extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    // this.data = opts.data;
    this.margin = opts.margin || { top: 50, right: 20, bottom: 50, left: 100 };
    this.color = get(opts, "color", "skyblue");
    this.highlight = get(opts, "highlight", "coral");
    this.roughness = roughCeiling({ roughness: opts.roughness });
    this.stroke = get(opts, "stroke", "black");
    this.strokeWidth = get(opts, "strokeWidth", 1);
    this.axisStrokeWidth = get(opts, "axisStrokeWidth", 0.5);
    this.axisRoughness = get(opts, "axisRoughness", 0.5);
    this.innerStrokeWidth = get(opts, "innerStrokeWidth", 1);
    this.fillWeight = get(opts, "fillWeight", 0.5);
    this.axisFontSize = opts.axisFontSize;
    this.labels = this.dataFormat === "object" ? "labels" : opts.labels;
    this.values = this.dataFormat === "object" ? "values" : opts.values;
    this.xValueFormat = opts.xValueFormat;
    this.yValueFormat = opts.yValueFormat;
    this.padding = get(opts, "padding", 0.1);
    this.xLabel = get(opts, "xLabel", "");
    this.yLabel = get(opts, "yLabel", "");
    this.labelFontSize = get(opts, "labelFontSize", "1rem");
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 350;
    const height = opts.height ? opts.height : 450;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.setSvg();
  }

  // add this to abstract base
  resolveData(data) {
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        this.drawFromObject();
      };
    }
  }

  addScales() {
    const that = this;
    this.yScale = d3.scaleBand()
      .rangeRound([0, this.height])
      .padding(this.padding)
      .domain(
        this.dataFormat === "file" ? this.data.map((d) => d[that.labels]) : this.data[that.labels]
      );

    this.xScale = d3.scaleLinear()
      .rangeRound([0, this.width])
      .domain(
        this.dataFormat === "file"
          ? [0, d3.max(this.data, (d) => +d[that.values])]
          : [0, d3.max(this.data[that.values])]
      );
  }

  addLabels() {
    // xLabel
    if (this.xLabel !== "") {
      this.svg
        .append("text")
        .attr("x", this.width / 2)
        .attr("y", this.height + this.margin.bottom / 2.4)
        .attr("dx", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.xLabel);
    }
    // yLabel
    if (this.yLabel !== "") {
      this.svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - this.margin.left / 1.5)
        .attr("x", 0 - this.height / 2)
        .attr("dy", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.yLabel);
    }
  }

  addAxes() {
    const xAxis = d3.axisBottom(this.xScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.xValueFormat ? d3.format(this.xValueFormat)(d) : d;
      });

    const yAxis = d3.axisLeft(this.yScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.yValueFormat ? d3.format(this.yValueFormat)(d) : d;
      });

    // x-axis
    this.svg
      .append("g")
      .attr("transform", `translate(0, ${this.height})`)
      .call(xAxis)
      .attr("class", `xAxis${this.graphClass}`)
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      )
      .style("opacity", 0.85);

    // y-axis
    this.svg
      .append("g")
      .call(yAxis)
      .attr("class", `yAxis${this.graphClass}`)
      .selectAll("text")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      )
      .style("opacity", 0.85);

    // hide original axes
    d3.selectAll("path.domain").attr("stroke", "transparent");
  }

  makeAxesRough(roughSvg, rcAxis) {
    const xAxisClass = `xAxis${this.graphClass}`;
    const yAxisClass = `yAxis${this.graphClass}`;
    const roughXAxisClass = `rough-${xAxisClass}`;
    const roughYAxisClass = `rough-${yAxisClass}`;

    d3.select(`.${xAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughXAxis = rcAxis.path(pathD, {
          stroke: "black",
          fillStyle: "hachure",
        });
        roughXAxis.setAttribute("class", roughXAxisClass);
        roughSvg.appendChild(roughXAxis);
      });
    d3.selectAll(`.${roughXAxisClass}`).attr("transform", `translate(0, ${this.height})`);

    d3.select(`.${yAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughYAxis = rcAxis.path(pathD, {
          stroke: "black",
          fillStyle: "hachure",
        });
        roughYAxis.setAttribute("class", roughYAxisClass);
        roughSvg.appendChild(roughYAxis);
      });
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 2)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(40, Math.min(this.width, this.height) / 5)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    // add highlight helper dom nodes
    d3.selectAll(this.interactionG)
      .data(this.dataFormat === "file" ? this.data : this.data.values)
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => {
        return this.dataFormat === "file"
          ? this.yScale(d[this.labels])
          : this.yScale(this.data[this.labels][i]);
      })
      .attr("width", (d, i) => {
        return this.dataFormat === "file"
          ? this.xScale(+d[this.values])
          : this.xScale(this.data[this.values][i]);
      })
      .attr("height", this.yScale.bandwidth())
      .attr("fill", "transparent");

    // create tooltip
    const Tooltip = d3.select(this.el)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "3px")
      .style("font-family", this.fontFamily)
      .style("font-size", this.tooltipFontSize)
      .style("pointer-events", "none");

    // event functions
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };
    const that = this;

    var mousemove = function (d) {
      const attrX = d3.select(this).attr("attrX");
      const attrY = d3.select(this).attr("attrY");
      const mousePos = d3.mouse(this);
      // get size of enclosing div
      Tooltip.html(`<b>${attrX}</b>: ${attrY}`)
        .style("opacity", 0.95)
        .attr("class", function (d) {})
        .style(
          "transform",
          `translate(${mousePos[0] + that.margin.left}px, 
              ${mousePos[1] - (that.height + that.margin.top + that.margin.bottom)}px)`
        );
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    // d3 event handlers
    d3.selectAll(this.interactionG).on("mouseover", function () {
      mouseover();
      d3.select(this).select("path").style("stroke", that.highlight);
      d3.select(this)
        .selectAll("path:nth-child(2)")
        .style("stroke-width", that.strokeWidth + 1.2);
    });

    d3.selectAll(this.interactionG).on("mouseout", function () {
      mouseleave();
      d3.select(this).select("path").style("stroke", that.color);
      d3.select(this).selectAll("path:nth-child(2)").style("stroke-width", that.strokeWidth);
    });

    d3.selectAll(this.interactionG).on("mousemove", mousemove);
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: {
        strokeWidth: this.axisStrokeWidth,
        roughness: this.axisRoughness,
      },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        fill: this.color,
        stroke: this.stroke === "none" ? undefined : this.stroke,
        strokeWidth: this.innerStrokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
      },
    });
  }

  drawFromObject() {
    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();

    this.data.values.forEach((d, i) => {
      const node = this.rc.rectangle(
        0,
        this.yScale(this.data[this.labels][i]),
        this.xScale(d),
        this.yScale.bandwidth(),
        {
          simplification: this.simplification,
          fillWeight: this.fillWeight,
        }
      );
      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      roughNode.setAttribute("attrX", this.data[this.labels][i]);
      roughNode.setAttribute("attrY", +d);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw

  drawFromFile() {
    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();

    // Add barplot
    this.data.forEach((d) => {
      const node = this.rc.rectangle(
        0,
        this.yScale(d[this.labels]),
        this.xScale(+d[this.values]),
        this.yScale.bandwidth(),
        {
          simplification: this.simplification,
          fillWeight: this.fillWeight,
        }
      );
      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      roughNode.setAttribute("attrX", d[this.labels]);
      roughNode.setAttribute("attrY", +d[this.values]);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw
}

const colors = [
  "coral",
  "skyblue",
  "#66c2a5",
  "tan",
  "#8da0cb",
  "#e78ac3",
  "#a6d854",
  "#ffd92f",
  "coral",
  "skyblue",
  "tan",
  "orange",
];

const addLegend = (parent, legendItems, legendWidth, legendHeight, left) => {
  parent.svg
    .append("svg")
    .attr("x", parent.legendPosition === "left" ? 5 : parent.width - (legendWidth + 2))
    .attr("y", 0);

  // allow custom left-padding where chart overlaps with y-axis
  const leftPadding = left === undefined ? -parent.margin.left + 5 : left;

  const nodeLegend = parent.rc.rectangle(
    parent.legendPosition === "left"
      ? leftPadding // left
      : parent.width + parent.margin.right - 2 - legendWidth, // right
    -(parent.margin.top / 3), // y
    legendWidth, // width
    legendHeight, // height
    {
      fill: "white",
      fillWeight: 0.1,
      strokeWidth: 0.75,
      roughness: 2,
    }
  );

  const roughLegend = parent.roughSvg.appendChild(nodeLegend);
  const legendClass = "rough" + parent.el.substring(1, parent.el.length);
  roughLegend.setAttribute("class", legendClass);

  legendItems.forEach((item, i) => {
    const g = d3.select("." + legendClass)
      .append("g")
      .attr(
        "transform",
        `translate(
        ${parent.legendPosition === "left" ? 5 : parent.width - (legendWidth + 2)},
        ${0})`
      );

    g.append("rect")
      .style("fill", parent.colors[i])
      .attr("width", 20)
      .attr("height", 8)
      .attr("x", parent.legendPosition === "left" ? leftPadding : parent.margin.right + 5)
      .attr("y", 6 + 11 * i - parent.margin.top / 3);

    g.append("text")
      .style("font-size", ".8rem")
      .style("font-family", parent.fontFamily)
      .attr("x", parent.legendPosition === "left" ? leftPadding + 25 : parent.margin.right + 30)
      .attr("y", 6 + 11 * i + 8 - parent.margin.top / 3)
      .text(item.text);
  });
};

class Donut extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    // this.data = opts.data;
    this.margin = opts.margin || { top: 50, right: 20, bottom: 10, left: 20 };
    this.colors = get(opts, "colors", colors);
    this.highlight = opts.highlight;
    this.roughness = roughCeiling({ roughness: opts.roughness, ceiling: 30 });
    this.strokeWidth = get(opts, "strokeWidth", 0.75);
    this.innerStrokeWidth = get(opts, "innerStrokeWidth", 0.75);
    this.fillWeight = get(opts, "fillWeight", 0.85);
    this.labels = this.dataFormat === "object" ? "labels" : opts.labels;
    this.values = this.dataFormat === "object" ? "values" : opts.values;
    if (this.labels === undefined || this.values === undefined) {
      console.log(`Error for ${this.el}: Must include labels and values when \
       instantiating Donut chart. Skipping chart.`);
      return;
    }
    this.legend = opts.legend !== false;
    this.legendPosition = get(opts, "legendPosition", "right");
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 300;
    const height = opts.height ? opts.height : 300;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.radius = Math.min(this.width, this.height) / 2;
    this.setSvg();
  }

  // add this to abstract base
  resolveData(data) {
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            // console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            // console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".json")) {
        return () => {
          d3.json(data).then((d) => {
            // console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        this.drawFromObject();
      };
    }
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 3)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(40, Math.min(this.width, this.height) / 4)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    d3.selectAll(this.interactionG)
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`)
      .data(
        this.dataFormat === "object"
          ? this.makePie(this.data[this.values])
          : this.makePie(this.data)
      )
      .append("path")
      .attr("d", this.makeArc)
      .attr("stroke-width", "0px")
      .attr("fill", "transparent");

    // create tooltip
    const Tooltip = d3.select(this.el)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "3px")
      .style("font-family", this.fontFamily)
      .style("font-size", this.tooltipFontSize)
      .style("pointer-events", "none");

    // event functions
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };

    const that = this;
    let thisColor;

    var mousemove = function (d) {
      const attrX = d3.select(this).attr("attrX");
      const attrY = d3.select(this).attr("attrY");
      const mousePos = d3.mouse(this);
      // get size of enclosing div
      Tooltip.html(`<b>${attrX}</b>: ${attrY}`)
        .style("opacity", 0.95)
        .attr("class", function (d) {})
        .style(
          "transform",
          `translate(${mousePos[0] + that.margin.left}px, 
                            ${mousePos[1] - that.height - that.margin.bottom}px)`
        );
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    // d3 event handlers
    d3.selectAll(this.interactionG).on("mouseover", function () {
      mouseover();
      thisColor = d3.select(this).selectAll("path").style("stroke");
      that.highlight === undefined
        ? d3.select(this).selectAll("path").style("opacity", 0.5)
        : d3.select(this).selectAll("path").style("stroke", that.highlight);
    });

    d3.selectAll(this.interactionG).on("mouseout", function () {
      mouseleave();
      d3.select(this).selectAll("path").style("stroke", thisColor);
      d3.select(this).selectAll("path").style("opacity", 1);
    });

    d3.selectAll(this.interactionG).on("mousemove", mousemove);
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: { strokeWidth: this.strokeWidth >= 3 ? 3 : this.strokeWidth },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        fill: this.color,
        strokeWidth: this.innerStrokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
        fillWeight: this.fillWeight,
      },
    });
  }

  drawFromObject() {
    this.initRoughObjects();

    this.makePie = d3.pie();

    this.makeArc = d3.arc().innerRadius(0).outerRadius(this.radius);

    this.arcs = this.makePie(this.data[this.values]);

    this.arcs.forEach((d, i) => {
      if (d.value !== 0) {
        const node = this.rc.arc(
          this.width / 2, // x
          this.height / 2, // y
          2 * this.radius, // width
          2 * this.radius, // height
          d.startAngle - Math.PI / 2, // start
          d.endAngle - Math.PI / 2, // stop
          true,
          {
            fill: this.colors[i],
            stroke: this.colors[i],
          }
        );
        node.setAttribute("class", this.graphClass);
        const roughNode = this.roughSvg.appendChild(node);
        roughNode.setAttribute("attrY", this.data[this.values][i]);
        roughNode.setAttribute("attrX", this.data[this.labels][i]);
      }
    });

    const donutNode = this.rc.circle(this.width / 2, this.height / 2, this.radius, {
      fill: "white",
      strokeWidth: 0.05,
      fillWeight: 10,
      fillStyle: "solid",
    });
    this.roughSvg.appendChild(donutNode);

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);

    // ADD LEGEND
    const dataSources = this.data.labels;
    const legendItems = dataSources.map((key, i) => ({
      color: this.colors[i],
      text: key,
    }));
    // find length of longest text item
    const legendWidth =
      legendItems.reduce((pre, cur) => (pre > cur.text.length ? pre : cur.text.length), 0) * 6 + 35;
    const legendHeight = legendItems.length * 11 + 8;

    if (this.legend === true) {
      addLegend(this, legendItems, legendWidth, legendHeight);
    }

    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  }

  drawFromFile() {
    this.initRoughObjects();

    this.makePie = d3.pie()
      .value((d) => d[this.values])
      .sort(null);

    const valueArr = [];
    this.makeArc = d3.arc().innerRadius(0).outerRadius(this.radius);

    this.arcs = this.makePie(this.data);

    this.arcs.forEach((d, i) => {
      if (d.value !== 0) {
        const node = this.rc.arc(
          this.width / 2, // x
          this.height / 2, // y
          2 * this.radius, // width
          2 * this.radius, // height
          d.startAngle - Math.PI / 2, // start
          d.endAngle - Math.PI / 2, // stop
          true,
          {
            fill: this.colors[i],
            stroke: this.colors[i],
          }
        );
        node.setAttribute("class", this.graphClass);
        const roughNode = this.roughSvg.appendChild(node);
        roughNode.setAttribute("attrY", d.data[this.values]);
        roughNode.setAttribute("attrX", d.data[this.labels]);
      }
      valueArr.push(d.data[this.labels]);
    });

    // console.log("yeet", valueArr);

    const donutNode = this.rc.circle(this.width / 2, this.height / 2, this.radius, {
      fill: "white",
      strokeWidth: 0.05,
      fillWeight: 10,
      fillStyle: "solid",
    });
    this.roughSvg.appendChild(donutNode);

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);

    // ADD LEGEND
    const dataSources = valueArr;
    const legendItems = dataSources.map((key, i) => ({
      color: this.colors[i],
      text: key,
    }));
    // find length of longest text item
    const legendWidth =
      legendItems.reduce((pre, cur) => (pre > cur.text.length ? pre : cur.text.length), 0) * 6 + 35;
    const legendHeight = legendItems.length * 11 + 8;

    if (this.legend === true) {
      addLegend(this, legendItems, legendWidth, legendHeight);
    }

    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw
}

const allDataExtent = (data) => {
  // get extend for all keys in data
  const keys = Object.keys(data);
  const extents = keys.map((key) => d3.extent(data[key]));
  const dataMin = d3.min(extents, (d) => d[0]);
  const dataMax = d3.max(extents, (d) => d[1]);
  return [dataMin, dataMax];
};

class Line extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    this.margin = opts.margin || { top: 50, right: 20, bottom: 50, left: 100 };
    this.roughness = roughCeiling({ roughness: opts.roughness, defaultValue: 2.2 });
    this.axisStrokeWidth = get(opts, "axisStrokeWidth", 0.4);
    this.axisRoughness = get(opts, "axisRoughness", 0.9);
    this.stroke = get(opts, "stroke", "black");
    this.fillWeight = get(opts, "fillWeight", 0.85);
    this.colors = opts.colors;
    this.strokeWidth = get(opts, "strokeWidth", 8);
    this.axisFontSize = opts.axisFontSize;
    this.x = opts.x;
    this.y = this.dataFormat === "object" ? "y" : opts.y;
    this.xValueFormat = opts.xValueFormat;
    this.yValueFormat = opts.yValueFormat;
    this.legend = opts.legend !== false;
    this.legendPosition = get(opts, "legendPosition", "right");
    this.circle = opts.circle !== false;
    this.circleRadius = get(opts, "circleRadius", 10);
    this.circleRoughness = roughCeiling({ roughness: opts.circleRoughness, defaultValue: 2 });
    this.xLabel = get(opts, "xLabel", "");
    this.yLabel = get(opts, "yLabel", "");
    this.labelFontSize = get(opts, "labelFontSize", "1rem");
    if (this.dataFormat === "file") {
      this.dataSources = [];
      this.yKeys = Object.keys(opts).filter((name) => /y/.test(name));
      this.yKeys.map((key, i) => {
        if (key !== "yLabel") this.dataSources.push(opts[key]);
      });
    }
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 300;
    const height = opts.height ? opts.height : 400;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.setSvg();
  }

  // add this to abstract base
  resolveData(data) {
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        this.drawFromObject();
      };
    }
  }

  addScales() {
    let dataExtent;
    if (this.dataFormat !== "file") {
      dataExtent = allDataExtent(this.data);
    } else {
      const extents = this.dataSources.map((key) => d3.extent(this.data, (d) => +d[key]));
      const dataMin = d3.min(extents, (d) => d[0]);
      const dataMax = d3.max(extents, (d) => d[1]);
      dataExtent = [dataMin, dataMax];
    }
    // get value domains and pad axes by 5%
    // if this.x is undefined, use index for x
    let xExtent;
    if (this.x === undefined) {
      // get length of longest array
      const keys = Object.keys(this.data);
      const lengths = keys.map((key) => this.data[key].length);
      const maxLen = d3.max(lengths);
      // Need to make xScale, when this.x is given, ordinal.
      xExtent = this.dataFormat === "file" ? [0, this.data.length] : [0, maxLen];
    } else {
      xExtent = d3.extent(this.x);
    }

    const yExtent = dataExtent;

    const yRange = yExtent[1] - yExtent[0];

    this.xScale =
      this.x === undefined
        ? d3.scalePoint()
            .range([0, this.width])
            .domain([...Array(xExtent[1]).keys()])
        : d3.scalePoint().range([0, this.width]).domain(this.x);

    this.yScale = d3.scaleLinear()
      .range([this.height, 0])
      .domain([0, yExtent[1] + yRange * 0.05]);
  }

  addLabels() {
    // xLabel
    if (this.xLabel !== "") {
      this.svg
        .append("text")
        .attr("x", this.width / 2)
        .attr("y", this.height + this.margin.bottom / 1.3)
        .attr("dx", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.xLabel);
    }
    // yLabel
    if (this.yLabel !== "") {
      this.svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - this.margin.left / 2)
        .attr("x", 0 - this.height / 2)
        .attr("dy", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.yLabel);
    }
  }

  addAxes() {
    const xAxis = d3.axisBottom(this.xScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.xValueFormat ? d3.format(this.xValueFormat)(d) : d;
      });

    const yAxis = d3.axisLeft(this.yScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.yValueFormat ? d3.format(this.yValueFormat)(d) : d;
      });

    // x-axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(xAxis)
      .attr("class", `xAxis${this.graphClass}`)
      .selectAll("text")
      .attr("transform", "translate(-10, 0)rotate(-45)")
      .style("text-anchor", "end")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      );

    // y-axis
    this.svg
      .append("g")
      .call(yAxis)
      .attr("class", `yAxis${this.graphClass}`)
      .selectAll("text")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      );

    // hide original axes
    d3.selectAll("path.domain").attr("stroke", "transparent");

    d3.selectAll("g.tick").style("opacity", 1);
  }

  makeAxesRough(roughSvg, rcAxis) {
    const xAxisClass = `xAxis${this.graphClass}`;
    const yAxisClass = `yAxis${this.graphClass}`;
    const roughXAxisClass = `rough-${xAxisClass}`;
    const roughYAxisClass = `rough-${yAxisClass}`;

    d3.select(`.${xAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughXAxis = rcAxis.path(pathD, {
          stroke: "black",
          fillStyle: "hachure",
        });
        roughXAxis.setAttribute("class", roughXAxisClass);
        roughSvg.appendChild(roughXAxis);
      });
    d3.selectAll(`.${roughXAxisClass}`).attr("transform", `translate(0, ${this.height})`);

    d3.select(`.${yAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughYAxis = rcAxis.path(pathD, {
          stroke: "black",
          fillStyle: "hachure",
        });
        roughYAxis.setAttribute("class", roughYAxisClass);
        roughSvg.appendChild(roughYAxis);
      });
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 2)
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(20, Math.min(this.width, this.height) / 4)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    const that = this;
    this.chartScreen = this.svg.append("g").attr("pointer-events", "all");

    this.dataSources.map((key, idx) => {
      const yValues = this.dataFormat === "file" ? this.data : this.data[key];
      const points = yValues.map((d, i) => {
        return this.x === undefined
          ? [this.xScale(i), this.yScale(d[key])]
          : [this.xScale(this.x[i]), this.yScale(+d[key])];
      });

      // remove undefined elements so no odd behavior
      const drawPoints = points.filter((d) => d[0] !== undefined);

      const lineGen = d3.line()
        .x((d) => d[0])
        .y((d) => d[1]);

      // create lines
      this.svg
        .append("path")
        .datum(drawPoints)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 1.5)
        .attr("d", lineGen)
        .attr("visibility", "hidden");

      // create tracking class (for interaction)
      const iClass = key + "class";

      // create hover text
      this.svg
        .append("g")
        .attr("class", iClass + "text")
        .append("text")
        .style("font-size", this.tooltipFontSize)
        .style("opacity", 0)
        .style("font-family", this.fontFamily)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle");
    });

    const mousemove = function (d) {
      // recover coordinate we need
      const xPos = d3.mouse(this)[0];
      const domain = that.xScale.domain();
      const xRange = that.xScale.range();
      const rangePoints = d3.range(xRange[0], xRange[1] + 1, that.xScale.step());
      const xSpot = d3.bisect(rangePoints, xPos);
      const yPos = domain[xSpot];

      that.dataSources.map((key, i) => {
        const hoverData =
          that.dataFormat === "file"
            ? that.x === undefined
              ? that.data[yPos]
              : that.data[xSpot]
            : that.data[key][xSpot];
        // resolve select classes for hover effects
        const thatClass = "." + key + "class";
        const textClass = thatClass + "text";

        if (that.dataFormat === "file") {
          d3.select(textClass)
            .selectAll("text")
            .style("opacity", 1)
            .html(
              that.x === undefined
                ? `(${xSpot},${hoverData[key]})`
                : `(${that.x[xSpot]}, ${hoverData[key]})`
            )
            .attr("x", that.x === undefined ? that.xScale(xSpot) : that.xScale(that.x[xSpot]))
            .attr("y", that.yScale(hoverData[key]) - 6);
        } else {
          d3.select(textClass)
            .selectAll("text")
            .style("opacity", 1)
            .html(
              that.x === undefined ? `(${xSpot}, ${hoverData})` : `(${that.x[xSpot]}, ${hoverData})`
            )
            .attr("x", that.x === undefined ? that.xScale(xSpot) : that.xScale(that.x[xSpot]))
            .attr("y", that.yScale(hoverData));
        }
      });
    };

    this.chartScreen
      .append("rect")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("fill", "none")
      .on("mousemove", mousemove)
      .on("mouseout", () => {
        that.dataSources.map((key) => {
          const thatClass = "." + key + "class";
          const textClass = thatClass + "text";
          d3.select(textClass).selectAll("text").style("opacity", 0);
        });
      });
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: {
        strokeWidth: this.axisStrokeWidth,
        roughness: this.axisRoughness,
      },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        // fill: this.color,
        stroke: this.stroke === "none" ? undefined : this.stroke,
        strokeWidth: this.strokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
      },
    });
  }

  drawFromObject() {
    // set default color
    if (this.colors === undefined) this.colors = colors;

    this.dataSources = Object.keys(this.data);
    this.initRoughObjects();
    this.addScales();
    this.dataSources.map((key, idx) => {
      const points = this.data[key].map((d, i) => {
        return this.x === undefined
          ? [this.xScale(i), this.yScale(+d)]
          : [this.xScale(this.x[i]), this.yScale(d)];
      });

      // remove undefined elements so no odd behavior
      const drawPoints = points.filter((d) => d[0] !== undefined);

      const node = this.rc.curve(drawPoints, {
        stroke: this.colors.length === 1 ? this.colors[0] : this.colors[idx],
        roughness: this.roughness,
        bowing: this.bowing,
      });

      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      if (this.circle === true) {
        points.forEach((d, i) => {
          const node = this.rc.circle(d[0], d[1], this.circleRadius, {
            stroke: this.colors[idx],
            fill: this.colors[idx],
            fillStyle: "solid",
            strokeWidth: 1,
            roughness: this.circleRoughness,
          });
          this.roughSvg.appendChild(node);
        });
      }
    });
    // ADD LEGEND
    const legendItems = this.dataSources.map((key, i) => ({
      color: this.colors[i],
      text: key,
    }));
    // find length of longest text item
    const legendWidth =
      legendItems.reduce((pre, cur) => (pre > cur.text.length ? pre : cur.text.length), 0) * 6 + 35;
    const legendHeight = legendItems.length * 11 + 8;

    if (this.legend === true) {
      addLegend(this, legendItems, legendWidth, legendHeight, 2);
    }

    this.addAxes();
    this.addLabels();
    this.makeAxesRough(this.roughSvg, this.rcAxis);

    if (this.interactive === true) {
      this.addInteraction();
    }
  }

  drawFromFile() {
    // set default colors
    if (this.colors === undefined) this.colors = colors;

    this.initRoughObjects();
    this.addScales();

    // Add scatterplot
    this.dataSources.map((key, idx) => {
      const points = this.data.map((d, i) => {
        return this.x === undefined
          ? [this.xScale(i), this.yScale(d[key])]
          : [this.xScale(this.x[i]), this.yScale(+d[key])];
      });

      // remove undefined elements so no odd behavior
      const drawPoints = points.filter((d) => d[0] !== undefined);
      const node = this.rc.curve(drawPoints, {
        stroke: this.colors[idx],
        strokeWidth: this.strokeWidth,
        roughness: 1,
        bowing: 10,
      });

      this.roughSvg.appendChild(node);
      if (this.circle === true) {
        drawPoints.forEach((d, i) => {
          const node = this.rc.circle(d[0], d[1], this.circleRadius, {
            stroke: this.colors[idx],
            fill: this.colors[idx],
            fillStyle: "solid",
            strokeWidth: 1,
            roughness: this.circleRoughness,
          });
          this.roughSvg.appendChild(node);
        });
      }
    });

    // ADD LEGEND
    const legendItems = this.dataSources.map((key, i) => ({
      color: this.colors[i],
      text: key,
    }));
    // find length of longest text item
    const legendWidth =
      legendItems.reduce((pre, cur) => (pre > cur.text.length ? pre : cur.text.length), 0) * 6 + 35;
    const legendHeight = legendItems.length * 11 + 8;
    if (this.legend === true) {
      addLegend(this, legendItems, legendWidth, legendHeight, 2);
    }

    this.addAxes();
    this.addLabels();
    this.makeAxesRough(this.roughSvg, this.rcAxis);

    if (this.interactive === true) {
      this.addInteraction();
    }
  }
}

class Pie extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    // this.data = opts.data;
    this.margin = opts.margin || { top: 50, right: 20, bottom: 10, left: 20 };
    this.colors = get(opts, "colors", colors);
    this.highlight = opts.highlight;
    this.roughness = roughCeiling({ roughness: opts.roughness, ceiling: 30, defaultValue: 0 });
    this.strokeWidth = get(opts, "strokeWidth", 0.75);
    this.innerStrokeWidth = get(opts, "innerStrokeWidth", 1);
    this.fillWeight = get(opts, "fillWeight", 0.5);
    this.labels = this.dataFormat === "object" ? "labels" : opts.labels;
    this.values = this.dataFormat === "object" ? "values" : opts.values;
    if (this.labels === undefined || this.values === undefined) {
      console.log(`Error for ${this.el}: Must include labels and values when \
       instantiating Donut chart. Skipping chart.`);
      return;
    }
    this.legend = opts.legend !== false;
    this.legendPosition = get(opts, "legendPosition", "right");
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 350;
    const height = opts.height ? opts.height : 450;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.radius = Math.min(this.width, this.height) / 2;
    this.setSvg();
  }

  // add this to abstract base
  resolveData(data) {
    // if data from file, read in
    // else if data from json object, read in
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".json")) {
        return () => {
          d3.json(data).then((d) => {
            console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        this.drawFromObject();
      };
    }
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 3)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(40, Math.min(this.width, this.height) / 4)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    d3.selectAll(this.interactionG)
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`)
      .data(
        this.dataFormat === "object"
          ? this.makePie(this.data[this.values])
          : this.makePie(this.data)
      )
      .append("path")
      .attr("d", this.makeArc)
      .attr("stroke-width", "0px")
      .attr("fill", "transparent");

    // create tooltip
    const Tooltip = d3.select(this.el)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "3px")
      .style("font-family", this.fontFamily)
      .style("font-size", this.tooltipFontSize)
      .style("pointer-events", "none");

    // event functions
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };

    const that = this;
    let thisColor;

    var mousemove = function (d) {
      const attrX = d3.select(this).attr("attrX");
      const attrY = d3.select(this).attr("attrY");
      const mousePos = d3.mouse(this);
      // get size of enclosing div
      Tooltip.html(`<b>${attrX}</b>: ${attrY}`)
        .style("opacity", 0.95)
        .attr("class", function (d) {})
        .style(
          "transform",
          `translate(${mousePos[0] + that.margin.left}px, 
                            ${mousePos[1] - that.height - that.margin.bottom}px)`
        );
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    // d3 event handlers
    d3.selectAll(this.interactionG).on("mouseover", function () {
      mouseover();
      thisColor = d3.select(this).selectAll("path").style("stroke");
      that.highlight === undefined
        ? d3.select(this).selectAll("path").style("opacity", 0.5)
        : d3.select(this).selectAll("path").style("stroke", that.highlight);
    });

    d3.selectAll(this.interactionG).on("mouseout", function () {
      mouseleave();
      d3.select(this).selectAll("path").style("stroke", thisColor);
      d3.select(this).selectAll("path").style("opacity", 1);
    });

    d3.selectAll(this.interactionG).on("mousemove", mousemove);
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: { strokeWidth: this.strokeWidth >= 3 ? 3 : this.strokeWidth },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        fill: this.color,
        strokeWidth: this.innerStrokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
      },
    });
  }

  drawFromObject() {
    this.initRoughObjects();

    this.makePie = d3.pie();

    this.makeArc = d3.arc().innerRadius(0).outerRadius(this.radius);

    this.arcs = this.makePie(this.data[this.values]);

    this.arcs.forEach((d, i) => {
      if (d.value !== 0) {
        const node = this.rc.arc(
          this.width / 2, // x
          this.height / 2, // y
          2 * this.radius, // width
          2 * this.radius, // height
          d.startAngle - Math.PI / 2, // start
          d.endAngle - Math.PI / 2, // stop
          true,
          {
            fill: this.colors[i],
            stroke: this.colors[i],
          }
        );
        node.setAttribute("class", this.graphClass);
        const roughNode = this.roughSvg.appendChild(node);
        roughNode.setAttribute("attrY", this.data[this.values][i]);
        roughNode.setAttribute("attrX", this.data[this.labels][i]);
      }
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);

    const dataSources = this.data.labels;
    // ADD LEGEND
    const legendItems = dataSources.map((key, i) => ({
      color: this.colors[i],
      text: key,
    }));
    // find length of longest text item
    const legendWidth =
      legendItems.reduce((pre, cur) => (pre > cur.text.length ? pre : cur.text.length), 0) * 6 + 35;
    const legendHeight = legendItems.length * 11 + 8;

    if (this.legend === true) {
      addLegend(this, legendItems, legendWidth, legendHeight);
    }

    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  }

  drawFromFile() {
    this.initRoughObjects();

    this.makePie = d3.pie()
      .value((d) => d[this.values])
      .sort(null);

    const valueArr = [];
    this.makeArc = d3.arc().innerRadius(0).outerRadius(this.radius);

    this.arcs = this.makePie(this.data);

    this.arcs.forEach((d, i) => {
      if (d.value !== 0) {
        // let c = this.makeArc.centroid(d);
        const node = this.rc.arc(
          this.width / 2, // x
          this.height / 2, // y
          2 * this.radius, // width
          2 * this.radius, // height
          d.startAngle - Math.PI / 2, // start
          d.endAngle - Math.PI / 2, // stop
          true,
          {
            fill: this.colors[i],
            stroke: this.colors[i],
          }
        );
        node.setAttribute("class", this.graphClass);
        const roughNode = this.roughSvg.appendChild(node);
        roughNode.setAttribute("attrY", d.data[this.values]);
        roughNode.setAttribute("attrX", d.data[this.labels]);
      }
      valueArr.push(d.data[this.labels]);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);

    // ADD LEGEND
    const dataSources = valueArr;
    const legendItems = dataSources.map((key, i) => ({
      color: this.colors[i],
      text: key,
    }));
    // find length of longest text item
    const legendWidth =
      legendItems.reduce((pre, cur) => (pre > cur.text.length ? pre : cur.text.length), 0) * 6 + 35;
    const legendHeight = legendItems.length * 11 + 8;

    if (this.legend === true) {
      addLegend(this, legendItems, legendWidth, legendHeight);
    }

    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw
}

const defaultColors = [
  "pink",
  "skyblue",
  "coral",
  "gold",
  "teal",
  "grey",
  "darkgreen",
  "pink",
  "brown",
  "slateblue",
  "grey1",
  "orange",
];

class Scatter extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    // this.data = opts.data;
    this.margin = opts.margin || { top: 50, right: 20, bottom: 50, left: 100 };
    this.colorVar = opts.colorVar;
    this.roughness = roughCeiling({ roughness: opts.roughness });
    this.highlight = opts.highlight;
    this.highlightLabel = get(opts, "highlightLabel", "xy");
    this.radius = get(opts, "radius", 8);
    this.axisStrokeWidth = get(opts, "axisStrokeWidth", 0.4);
    this.axisRoughness = get(opts, "axisRoughness", 0.9);
    this.curbZero = opts.curbZero === true;
    this.innerStrokeWidth = get(opts, "innerStrokeWidth", 1);
    this.stroke = get(opts, "stroke", "black");
    this.fillWeight = get(opts, "fillWeight", 0.85);
    this.colors = opts.colors;
    this.strokeWidth = get(opts, "strokeWidth", 1);
    this.axisFontSize = opts.axisFontSize;
    this.x = this.dataFormat === "object" ? "x" : opts.x;
    this.y = this.dataFormat === "object" ? "y" : opts.y;
    this.xValueFormat = opts.xValueFormat;
    this.yValueFormat = opts.yValueFormat;
    this.xLabel = get(opts, "xLabel", "");
    this.yLabel = get(opts, "yLabel", "");
    this.labelFontSize = get(opts, "labelFontSize", "1rem");
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 300;
    const height = opts.height ? opts.height : 400;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.setSvg();
  }

  // add this to abstract base
  resolveData(data) {
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            console.log(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        this.drawFromObject();
      };
    }
  }

  addScales() {
    // get value domains and pad axes by 5%
    const xExtent =
      this.dataFormat === "file" ? d3.extent(this.data, (d) => +d[this.x]) : d3.extent(this.data[this.x]);
    const xRange = xExtent[1] - xExtent[0];
    const yExtent =
      this.dataFormat === "file" ? d3.extent(this.data, (d) => +d[this.y]) : d3.extent(this.data[this.y]);
    const yRange = yExtent[1] - yExtent[0];

    const colorExtent =
      this.dataFormat === "file" ? d3.extent(this.data, (d) => d[this.colorVar]) : [1, 1];

    if (this.dataFormat === "file") {
      const radiusExtent = d3.extent(this.data, (d) => +d[this.radius]);
      const radiusMax = Math.min(this.width, this.height) / 2 / 2;
      this.radiusScale = d3.scaleLinear().range([8, radiusMax]).domain(radiusExtent);
    }

    // force zero baseline if all data is positive
    if (this.curbZero === true) {
      if (yExtent[0] > 0) {
        yExtent[0] = 0;
      }
      if (xExtent[0] > 0) {
        xExtent[0] = 0;
      }
    }

    this.xScale = d3.scaleLinear()
      .range([0, this.width])
      .domain([xExtent[0] - xRange * 0.05, xExtent[1] + xRange * 0.05]);

    this.yScale = d3.scaleLinear()
      .range([this.height, 0])
      .domain([yExtent[0] - yRange * 0.05, yExtent[1] + yRange * 0.05]);

    this.colorScale = d3.scaleOrdinal().range(this.colors).domain(colorExtent);
  }

  addLabels() {
    // xLabel
    if (this.xLabel !== "") {
      this.svg
        .append("text")
        .attr("x", this.width / 2)
        .attr("y", this.height + this.margin.bottom / 1.3)
        .attr("dx", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.xLabel);
    }
    // yLabel
    if (this.yLabel !== "") {
      this.svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - this.margin.left / 2)
        .attr("x", 0 - this.height / 2)
        .attr("dy", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.yLabel);
    }
  }

  addAxes() {
    const xAxis = d3.axisBottom(this.xScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.xValueFormat ? d3.format(this.xValueFormat)(d) : d;
      });

    const yAxis = d3.axisLeft(this.yScale)
      .tickSize(0)
      .tickFormat((d) => {
        return this.yValueFormat ? d3.format(this.yValueFormat)(d) : d;
      });

    // x-axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(xAxis)
      .attr("class", `xAxis${this.graphClass}`)
      .selectAll("text")
      .attr("transform", "translate(-10, 0)rotate(-45)")
      .style("text-anchor", "end")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      );

    // y-axis
    this.svg
      .append("g")
      .call(yAxis)
      .attr("class", `yAxis${this.graphClass}`)
      .selectAll("text")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      );

    // hide original axes
    d3.selectAll("path.domain").attr("stroke", "transparent");

    d3.selectAll("g.tick").style("opacity", 1);
  }

  makeAxesRough(roughSvg, rcAxis) {
    const xAxisClass = `xAxis${this.graphClass}`;
    const yAxisClass = `yAxis${this.graphClass}`;
    const roughXAxisClass = `rough-${xAxisClass}`;
    const roughYAxisClass = `rough-${yAxisClass}`;

    d3.select(`.${xAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughXAxis = rcAxis.path(pathD, {
          stroke: "black",
          fillStyle: "hachure",
        });
        roughXAxis.setAttribute("class", roughXAxisClass);
        roughSvg.appendChild(roughXAxis);
      });
    d3.selectAll(`.${roughXAxisClass}`).attr("transform", `translate(0, ${this.height})`);

    d3.select(`.${yAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughYAxis = rcAxis.path(pathD, {
          stroke: "black",
          fillStyle: "hachure",
        });
        roughYAxis.setAttribute("class", roughYAxisClass);
        roughSvg.appendChild(roughYAxis);
      });
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 2)
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(20, Math.min(this.width, this.height) / 4)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    // add highlight helper dom nodes
    const circles = d3.selectAll(this.interactionG)
      .data(this.dataFormat === "file" ? this.data : this.data.x)
      .append("circle")
      .attr("cx", (d, i) => {
        return this.dataFormat === "file"
          ? this.xScale(+d[this.x])
          : this.xScale(+this.data[this.x][i]);
      })
      .attr("cy", (d, i) => {
        return this.dataFormat === "file"
          ? this.yScale(+d[this.y])
          : this.yScale(+this.data[this.y][i]);
      });

    if (this.dataFormat === "file") {
      circles
        .attr("r", (d) =>
          typeof this.radius === "number"
            ? this.radius * 0.7
            : this.radiusScale(+d[this.radius]) * 0.6
        )
        .attr("fill", "transparent");
    } else {
      circles
        .attr("r", (d, i) =>
          typeof this.radius === "number" ? this.radius * 0.7 : this.radius[i] * 0.6
        )
        .attr("fill", "transparent");
    }

    // create tooltip
    var Tooltip = d3.select(this.el)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "3px")
      .style("font-family", this.fontFamily)
      .style("font-size", this.tooltipFontSize)
      .style("pointer-events", "none");

    // event functions
    var mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };

    const that = this;
    let thisColor;

    var mousemove = function (d) {
      const attrX = d3.select(this).attr("attrX");
      const attrY = d3.select(this).attr("attrY");
      const attrHighlightLabel = d3.select(this).attr("attrHighlightLabel");
      const mousePos = d3.mouse(this);
      // get size of enclosing div
      Tooltip.html(
        that.highlightLabel === "xy"
          ? `<b>x</b>: ${attrX} <br><b>y</b>: ${attrY}`
          : `<b>${attrHighlightLabel}</b>`
      )
        .attr("class", function (d) {})
        .style(
          "transform",
          `translate(${mousePos[0] + that.margin.left}px, 
          ${mousePos[1] - (that.height + that.margin.top + that.margin.bottom)}px)`
        );
    };
    var mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    // d3 event handlers
    d3.selectAll(this.interactionG).on("mouseover", function () {
      mouseover();
      thisColor = d3.select(this).selectAll("path").style("stroke");
      that.highlight === undefined
        ? d3.select(this).selectAll("path:nth-child(1)").style("opacity", 0.4)
        : d3.select(this).selectAll("path:nth-child(1)").style("stroke", that.highlight);
      d3.select(this)
        .selectAll("path:nth-child(2)")
        .style("stroke-width", that.strokeWidth + 1.2);
    });

    d3.selectAll(this.interactionG).on("mouseout", function () {
      mouseleave();
      d3.select(this).selectAll("path").style("opacity", 1);

      d3.select(this).selectAll("path:nth-child(1)").style("stroke", thisColor);
      // highlight stroke back to its color
      d3.select(this).selectAll("path:nth-child(2)").style("stroke", that.stroke);
      d3.select(this).selectAll("path:nth-child(2)").style("stroke-width", that.strokeWidth);
    });

    d3.selectAll(this.interactionG).on("mousemove", mousemove);
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: {
        strokeWidth: this.axisStrokeWidth,
        roughness: this.axisRoughness,
      },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        // fill: this.color,
        stroke: this.stroke === "none" ? undefined : this.stroke,
        strokeWidth: this.innerStrokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
      },
    });
  }

  drawFromObject() {
    // set default color
    if (this.colors === undefined) this.colors = defaultColors[0];

    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();

    // Add scatterplot
    this.data.x.forEach((d, i) => {
      const node = this.rc.circle(
        this.xScale(+d),
        this.yScale(+this.data[this.y][i]),
        typeof this.radius === "number" ? this.radius : this.radius[i],
        {
          fill:
            typeof this.colors === "string"
              ? this.colors
              : this.colors.length === 1
              ? this.colors[0]
              : this.colors[i],
          simplification: this.simplification,
          fillWeight: this.fillWeight,
        }
      );
      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      roughNode.setAttribute("attrX", d);
      roughNode.setAttribute("attrY", this.data[this.y][i]);
      roughNode.setAttribute("attrHighlightLabel", this.data[this.highlightLabel]);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  }

  drawFromFile() {
    // set default colors
    if (this.colors === undefined) this.colors = defaultColors;

    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();

    // Add scatterplot
    this.data.forEach((d, i) => {
      const node = this.rc.circle(
        this.xScale(+d[this.x]),
        this.yScale(+d[this.y]),
        typeof this.radius === "number" ? this.radius : this.radiusScale(+d[this.radius]),
        {
          fill: this.colorVar === undefined ? this.colors[0] : this.colorScale(d[this.colorVar]),
          simplification: this.simplification,
          fillWeight: this.fillWeight,
        }
      );
      const roughNode = this.roughSvg.appendChild(node);
      roughNode.setAttribute("class", this.graphClass);
      roughNode.setAttribute("attrX", d[this.x]);
      roughNode.setAttribute("attrY", d[this.y]);
      roughNode.setAttribute("attrHighlightLabel", d[this.highlightLabel]);
    });

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  }
}

class StackedBar extends Chart {
  constructor(opts) {
    super(opts);

    // load in arguments from config object
    this.data = opts.data;
    this.margin = opts.margin || { top: 50, right: 20, bottom: 70, left: 100 };
    this.colors = get(opts, "colors", colors);
    this.highlight = get(opts, "highlight", "coral");
    this.roughness = roughCeiling({ roughness: opts.roughness });
    this.stroke = get(opts, "stroke", "black");
    this.strokeWidth = get(opts, "strokeWidth", 1);
    this.axisStrokeWidth = get(opts, "axisStrokeWidth", 0.5);
    this.axisRoughness = get(opts, "axisRoughness", 0.5);
    this.innerStrokeWidth = get(opts, "innerStrokeWidth", 1);
    this.fillWeight = get(opts, "fillWeight", 0.5);
    this.axisFontSize = opts.axisFontSize;
    this.labels = opts.labels;
    this.values = opts.values;
    this.stackColorMapping = {};
    this.padding = get(opts, "padding", 0.1);
    this.xLabel = get(opts, "xLabel", "");
    this.yLabel = get(opts, "yLabel", "");
    this.labelFontSize = get(opts, "labelFontSize", "1rem");
    // new width
    this.initChartValues(opts);
    // resolve font
    this.resolveFont();
    // create the chart
    this.drawChart = this.resolveData(opts.data);
    this.drawChart();
    if (opts.title !== "undefined") this.setTitle(opts.title);
  }

  initChartValues(opts) {
    const width = opts.width ? opts.width : 350;
    const height = opts.height ? opts.height : 450;
    this.width = width - this.margin.left - this.margin.right;
    this.height = height - this.margin.top - this.margin.bottom;
    this.roughId = this.el + "_svg";
    this.graphClass = this.el.substring(1, this.el.length);
    this.interactionG = "g." + this.graphClass;
    this.setSvg();
  }

  // Helper Method to get the Total Value of the Stack
  getTotal(d) {
    for (let x = 0; x < d.length; x++) {
      let t = 0;
      for (let i = 0; i < d.columns.length; ++i) {
        if (d.columns[i] !== this.labels) {
          t += d[x][d.columns[i]] = +d[x][d.columns[i]];
        }
      }
      d[x].total = t;
    }
    return d;
  }

  updateColorMapping(label) {
    if (!this.stackColorMapping[label]) {
      // If there isn't a color already mapped to the label then use the next color available
      this.stackColorMapping[label] = colors[Object.keys(this.stackColorMapping).length];
    }
  }

  // add this to abstract base
  resolveData(data) {
    if (typeof data === "string") {
      if (data.includes(".csv")) {
        return () => {
          d3.csv(data).then((d) => {
            this.getTotal(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      } else if (data.includes(".tsv")) {
        return () => {
          d3.tsv(data).then((d) => {
            this.getTotal(d);
            this.data = d;
            this.drawFromFile();
          });
        };
      }
    } else {
      return () => {
        this.data = data;
        for (let i = 0; i < data.length; ++i) {
          let t = 0;
          const keys = Object.keys(data[i]);
          keys.forEach((d) => {
            if (d !== this.labels) {
              this.updateColorMapping(d);
              t += data[i][d];
              data[i].total = t;
            }
          });
        }
        this.drawFromObject();
      };
    }
  }

  addScales() {
    this.xScale = d3.scaleBand()
      .rangeRound([0, this.width])
      .padding(this.padding)
      .domain(this.data.map((d) => d[this.labels]));

    this.data.sort(function (a, b) {
      return b.total - a.total;
    });
    this.yScale = d3.scaleLinear()
      .rangeRound([this.height, 0])
      .domain([
        0,
        d3.max(this.data, (d) => {
          return d.total;
        }),
      ])
      .nice();

    // set the colors
    const keys =
      this.dataFormat === "object" ? this.data.map((d) => d[this.labels]) : this.data.columns;
    this.zScale = d3.scaleOrdinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])
      .domain(keys);
  }

  addLabels() {
    // xLabel
    if (this.xLabel !== "") {
      this.svg
        .append("text")
        .attr("x", this.width / 2)
        .attr("y", this.height + this.margin.bottom / 2)
        .attr("dx", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.xLabel);
    }
    // yLabel
    if (this.yLabel !== "") {
      this.svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - this.margin.left / 1.4)
        .attr("x", 0 - this.height / 2)
        .attr("dy", "1em")
        .attr("class", "labelText")
        .style("text-anchor", "middle")
        .style("font-family", this.fontFamily)
        .style("font-size", this.labelFontSize)
        .text(this.yLabel);
    }
  }

  addAxes() {
    const xAxis = d3.axisBottom(this.xScale).tickSize(0);

    // x-axis
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(xAxis)
      .attr("class", `xAxis${this.graphClass}`)
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.8, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      )
      .style("opacity", 0.9);

    // y-axis
    const yAxis = d3.axisLeft(this.yScale).tickSize(0);
    this.svg
      .append("g")
      .call(yAxis)
      .attr("class", `yAxis${this.graphClass}`)
      .selectAll("text")
      .style("font-family", this.fontFamily)
      .style(
        "font-size",
        this.axisFontSize === undefined
          ? `${Math.min(0.95, Math.min(this.width, this.height) / 140)}rem`
          : this.axisFontSize
      )
      .style("opacity", 0.9);

    // hide original axes
    d3.selectAll("path.domain").attr("stroke", "transparent");
  }

  makeAxesRough(roughSvg, rcAxis) {
    const xAxisClass = `xAxis${this.graphClass}`;
    const yAxisClass = `yAxis${this.graphClass}`;
    const roughXAxisClass = `rough-${xAxisClass}`;
    const roughYAxisClass = `rough-${yAxisClass}`;

    d3.select(`.${xAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughXAxis = rcAxis.path(pathD, {
          fillStyle: "hachure",
        });
        roughXAxis.setAttribute("class", roughXAxisClass);
        roughSvg.appendChild(roughXAxis);
      });
    d3.selectAll(`.${roughXAxisClass}`).attr("transform", `translate(0, ${this.height})`);

    d3.select(`.${yAxisClass}`)
      .selectAll("path.domain")
      .each(function (d, i) {
        const pathD = d3.select(this).node().getAttribute("d");
        const roughYAxis = rcAxis.path(pathD, {
          fillStyle: "hachure",
        });
        roughYAxis.setAttribute("class", roughYAxisClass);
        roughSvg.appendChild(roughYAxis);
      });
  }

  setTitle(title) {
    this.svg
      .append("text")
      .attr("x", this.width / 2)
      .attr("y", 0 - this.margin.top / 2)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .style(
        "font-size",
        this.titleFontSize === undefined
          ? `${Math.min(40, Math.min(this.width, this.height) / 5)}px`
          : this.titleFontSize
      )
      .style("font-family", this.fontFamily)
      .style("opacity", 0.8)
      .text(title);
  }

  addInteraction() {
    d3.selectAll(this.interactionG)
      // .data(this.data)
      // .append('rect')
      .each(function (d, i) {
        const attr = this["attributes"];
        d3.select(this)
          .append("rect")
          .attr("x", attr["x"].value)
          .attr("y", attr["y"].value)
          .attr("width", attr["width"].value)
          .attr("height", attr["height"].value)
          .attr("fill", "transparent");
      });

    // create tooltip
    const Tooltip = d3.select(this.el)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "3px")
      .style("font-family", this.fontFamily)
      .style("font-size", this.tooltipFontSize)
      .style("pointer-events", "none");

    // event functions
    const mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };
    const that = this;
    let thisColor;

    const mousemove = function (d) {
      const attrX = d3.select(this).attr("attrX");
      const attrY = d3.select(this).attr("attrY");
      const keyY = d3.select(this).attr("keyY");
      const mousePos = d3.mouse(this);
      // get size of enclosing div
      Tooltip.html(`<h4>${attrX}</h4> <b>${keyY}</b>: ${attrY}`)
        .style("opacity", 0.95)
        .attr("class", function (d) {})
        .style(
          "transform",
          `translate(${mousePos[0] + that.margin.left}px, 
          ${mousePos[1] - (that.height + that.margin.top + that.margin.bottom)}px)`
        );
    };
    const mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    // d3 event handlers
    d3.selectAll(this.interactionG).on("mouseover", function () {
      mouseover();
      thisColor = d3.select(this).selectAll("path").style("stroke");
      d3.select(this).select("path").style("stroke", that.highlight);
      d3.select(this)
        .selectAll("path:nth-child(2)")
        .style("stroke-width", that.strokeWidth + 1.2);
    });

    d3.selectAll(this.interactionG).on("mouseout", function () {
      mouseleave();
      d3.select(this).select("path").style("stroke", thisColor);
      d3.select(this).selectAll("path:nth-child(2)").style("stroke-width", that.strokeWidth);
    });

    d3.selectAll(this.interactionG).on("mousemove", mousemove);
  }

  initRoughObjects() {
    this.roughSvg = document.getElementById(this.roughId);
    this.rcAxis = st.svg(this.roughSvg, {
      options: {
        strokeWidth: this.axisStrokeWidth,
        roughness: this.axisRoughness,
      },
    });
    this.rc = st.svg(this.roughSvg, {
      options: {
        // fill: this.color,
        stroke: this.stroke === "none" ? undefined : this.stroke,
        strokeWidth: this.innerStrokeWidth,
        roughness: this.roughness,
        bowing: this.bowing,
        fillStyle: this.fillStyle,
      },
    });
  }

  // Helper Method to create the Stack
  stacking() {
    // Add Stackedbarplot
    this.data.forEach((d) => {
      const keys = Object.keys(d);
      let yStack = 0;
      keys.forEach((yValue, i) => {
        if (i > 0 && yValue !== "total") {
          yStack += parseInt(d[yValue], 10);
          const x = this.xScale(d[this.labels]);
          const y = this.yScale(yStack);
          const width = this.xScale.bandwidth();
          const height = this.height - this.yScale(+d[yValue]);
          const node = this.rc.rectangle(x, y, width, height, {
            fill: this.stackColorMapping[yValue] || this.colors[i],
            stroke: this.stackColorMapping[yValue] || this.colors[i],
            simplification: this.simplification,
            fillWeight: this.fillWeight,
          });
          const roughNode = this.roughSvg.appendChild(node);
          roughNode.setAttribute("class", this.graphClass);
          roughNode.setAttribute("attrX", d[this.labels]);
          roughNode.setAttribute("keyY", yValue);
          roughNode.setAttribute("attrY", +d[yValue]);
          // Set Attributes to access them later
          roughNode.setAttribute("x", x);
          roughNode.setAttribute("y", y);
          roughNode.setAttribute("width", width);
          roughNode.setAttribute("height", height);
        }
      });
    });
  }

  drawFromObject() {
    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();
    // Add Stackedbarplot
    this.stacking();

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw

  drawFromFile() {
    this.initRoughObjects();
    this.addScales();
    this.addAxes();
    this.makeAxesRough(this.roughSvg, this.rcAxis);
    this.addLabels();
    // Add Stackedbar
    this.stacking();

    d3.selectAll(this.interactionG)
      .selectAll("path:nth-child(2)")
      .style("stroke-width", this.strokeWidth);
    // If desired, add interactivity
    if (this.interactive === true) {
      this.addInteraction();
    }
  } // draw
}

const DEFAULT_LABEL_FONT_SIZE = '1rem';
const DEFAULT_HIGHLIGHT = 'coral';
const DEFAULT_PADDING = 0.1;
const DEFAULT_STROKE = 'black';
const DEFAULT_COLORS = [
    'coral',
    'skyblue',
    '#66c2a5',
    'tan',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    'tan',
    'orange',
];
const axisOptions = {
    axisFontSize: { type: String, default: '1rem' },
    axisRoughness: { type: Number, default: 0.5 },
    axisStrokeWidth: { type: Number, default: 0.5 },
    xLabel: String,
    yLabel: String,
};
const legendOptions = {
    legend: { type: Boolean, default: true },
    legendPosition: {
        type: String,
        default: 'right',
    },
};
const commonChartOptions = {
    chartData: {
        type: [Object, String],
        required: true,
    },
    title: String,
    titleFontSize: { type: String, default: '1rem' },
    tooltipFontSize: { type: String, default: '0.95rem' },
    font: {
        type: [String, Number],
        default: 'gaegu',
    },
    fillStyle: {
        type: String,
        default: 'hachure',
    },
    fillWeight: Number,
    roughness: { type: Number, default: 1 },
    bowing: { type: Number, default: 0 },
    simplification: { type: Number, default: 0.2 },
    interactive: { type: Boolean, default: true },
    width: Number,
    height: Number,
    margin: { type: Object },
    strokeWidth: { type: Number, default: 1 },
};
const commonBarChartOptions = Object.assign(Object.assign({}, axisOptions), { labels: String, values: String, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, innerStrokeWidth: { type: Number, default: 1 }, labelFontSize: { type: String, default: DEFAULT_LABEL_FONT_SIZE }, padding: { type: Number, default: DEFAULT_PADDING }, stroke: { type: String, default: DEFAULT_STROKE } });
const commonPieChartOptions = Object.assign(Object.assign({}, legendOptions), { labels: String, values: String, colors: { type: Array, default: DEFAULT_COLORS }, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, innerStrokeWidth: { type: Number, default: 0.75 }, padding: { type: Number, default: DEFAULT_PADDING } });
const commonLineScatterChartOptions = Object.assign(Object.assign({}, axisOptions), { colors: { type: [Array, String], default: DEFAULT_COLORS }, labelFontSize: { type: String, default: DEFAULT_LABEL_FONT_SIZE }, stroke: { type: String, default: DEFAULT_STROKE } });
const barChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonBarChartOptions), { color: { type: String, default: 'skyblue' } });
const stackedBarChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonBarChartOptions), { colors: Array, chartData: { type: Array, required: true }, labels: { type: String, required: true } });
const pieChartOptions = Object.assign(Object.assign({}, commonChartOptions), commonPieChartOptions);
const lineChartOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonLineScatterChartOptions), legendOptions), { chartData: { type: String, required: true }, y: String, circle: { type: Boolean, default: true }, circleRadius: { type: Number, default: 10 }, circleRoughness: { type: Number, default: 2 } });
const scatterChartOptions = Object.assign(Object.assign(Object.assign({}, commonChartOptions), commonLineScatterChartOptions), { x: String, y: String, colorVar: String, curbZero: { type: Boolean, default: false }, highlight: { type: String, default: DEFAULT_HIGHLIGHT }, highlightLabel: String, innerStrokeWidth: { type: Number, default: 1 }, radius: { type: [Number, Array] } });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const useSetupRoughVizChart = (Ctor, opts) => {
    const chartdiv = vue.ref(null);
    const uid = 'chartdiv' + Date.now();
    vue.onMounted(() => {
        const el = chartdiv.value;
        el.id = uid;
        vue.watchEffect(() => {
            const { chartData } = opts, otherOpts = __rest(opts, ["chartData"]);
            el.innerHTML = '';
            new Ctor(Object.assign({ element: `#${el.id}` }, Object.assign({ data: chartData }, otherOpts)));
        });
    });
    return chartdiv;
};

var script = vue.defineComponent({
    props: Object.assign({}, barChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Bar, props);
        return { chartdiv };
    },
});

const _hoisted_1 = { ref: "chartdiv" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1, null, 512 /* NEED_PATCH */))
}

script.render = render;
script.__file = "src/components/BarChart.vue";

var script$1 = vue.defineComponent({
    props: Object.assign({}, pieChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Donut, props);
        return { chartdiv };
    },
});

const _hoisted_1$1 = { ref: "chartdiv" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$1, null, 512 /* NEED_PATCH */))
}

script$1.render = render$1;
script$1.__file = "src/components/DonutChart.vue";

var script$2 = vue.defineComponent({
    props: Object.assign({}, barChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(BarH, props);
        return { chartdiv };
    },
});

const _hoisted_1$2 = { ref: "chartdiv" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, null, 512 /* NEED_PATCH */))
}

script$2.render = render$2;
script$2.__file = "src/components/HorizontalBarChart.vue";

var script$3 = vue.defineComponent({
    props: Object.assign({}, lineChartOptions),
    setup(props, context) {
        const opts = vue.computed(() => {
            const attrs = context.attrs;
            const ys = {};
            // Get all numbered y axes whose name was passed as an attribute to be passed along with other props
            Object.keys(attrs).forEach(key => {
                const value = attrs[key];
                if (/^y\d+$/.test(key) && typeof value === 'string') {
                    ys[key] = value;
                }
            });
            return Object.assign(Object.assign({}, props), ys);
        });
        const chartdiv = useSetupRoughVizChart(Line, opts.value);
        return { chartdiv };
    },
});

const _hoisted_1$3 = { ref: "chartdiv" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$3, null, 512 /* NEED_PATCH */))
}

script$3.render = render$3;
script$3.__file = "src/components/LineChart.vue";

var script$4 = vue.defineComponent({
    props: Object.assign({}, pieChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Pie, props);
        return { chartdiv };
    },
});

const _hoisted_1$4 = { ref: "chartdiv" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$4, null, 512 /* NEED_PATCH */))
}

script$4.render = render$4;
script$4.__file = "src/components/PieChart.vue";

var script$5 = vue.defineComponent({
    props: Object.assign({}, scatterChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(Scatter, props);
        return { chartdiv };
    },
});

const _hoisted_1$5 = { ref: "chartdiv" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$5, null, 512 /* NEED_PATCH */))
}

script$5.render = render$5;
script$5.__file = "src/components/ScatterChart.vue";

var script$6 = vue.defineComponent({
    props: Object.assign({}, stackedBarChartOptions),
    setup(props) {
        const chartdiv = useSetupRoughVizChart(StackedBar, props);
        return { chartdiv };
    },
});

const _hoisted_1$6 = { ref: "chartdiv" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1$6, null, 512 /* NEED_PATCH */))
}

script$6.render = render$6;
script$6.__file = "src/components/StackedBarChart.vue";

exports.BarChart = script;
exports.DonutChart = script$1;
exports.HorizontalBarChart = script$2;
exports.LineChart = script$3;
exports.PieChart = script$4;
exports.ScatterChart = script$5;
exports.StackedBarChart = script$6;
