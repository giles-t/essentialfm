/**
 * @license
 * Lo-Dash 1.2.1 (Custom Build) lodash.com/license
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function(n){function t(n){return n instanceof t?n:new i(n)}function r(n,t){var r=n.b,e=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return r<e?-1:1}function e(n,t,r,e){function u(){var e=arguments,c=i?this:t;return o||(n=t[f]),r.length&&(e=e.length?(e=Bt.call(e),l?e.concat(r):r.concat(e)):r),this instanceof u?(a.prototype=n.prototype,c=new a,a.prototype=null,e=n.apply(c,e),m(e)?e:c):n.apply(c,e)}var o=y(n),i=!r,f=t;if(i){var l=e;r=t}else if(!o){if(!e)throw new TypeError;
t=n}return u}function u(n){return"\\"+lt[n]}function o(n){return Dt[n]}function i(n){this.__wrapped__=n}function a(){}function f(n){return Mt[n]}function l(n){return dt.call(n)==nt}function c(n){if(!n)return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];if(e)for(var u in e)n[u]=e[u]}return n}function p(n){if(!n)return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];if(e)for(var u in e)null==n[u]&&(n[u]=e[u])}return n}function s(n){var t=[];return Tt(n,function(n,r){y(n)&&t.push(r)
}),t.sort()}function v(n){for(var t=-1,r=Rt(n),e=r.length,u={};++t<e;){var o=r[t];u[n[o]]=o}return u}function g(n){if(!n)return!0;if(Ft(n)||b(n))return!n.length;for(var t in n)if(mt.call(n,t))return!1;return!0}function h(n,r,e,u){if(n===r)return 0!==n||1/n==1/r;var o=typeof n,i=typeof r;if(n===n&&(!n||"function"!=o&&"object"!=o)&&(!r||"function"!=i&&"object"!=i))return!1;if(null==n||null==r)return n===r;if(i=dt.call(n),o=dt.call(r),i!=o)return!1;switch(i){case rt:case et:return+n==+r;case ut:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;
case it:case at:return n==r+""}if(o=i==tt,!o){if(n instanceof t||r instanceof t)return h(n.__wrapped__||n,r.__wrapped__||r,e,u);if(i!=ot)return!1;var i=n.constructor,a=r.constructor;if(i!=a&&(!y(i)||!(i instanceof i&&y(a)&&a instanceof a)))return!1}for(e||(e=[]),u||(u=[]),i=e.length;i--;)if(e[i]==n)return u[i]==r;var f=!0,l=0;if(e.push(n),u.push(r),o){if(l=r.length,f=l==n.length)for(;l--&&(f=h(n[l],r[l],e,u)););return f}return Tt(r,function(t,r,o){return mt.call(o,r)?(l++,!(f=mt.call(n,r)&&h(n[r],t,e,u))&&K):void 0
}),f&&Tt(n,function(n,t,r){return mt.call(r,t)?!(f=-1<--l)&&K:void 0}),f}function y(n){return typeof n=="function"}function m(n){return n?ft[typeof n]:!1}function _(n){return typeof n=="number"||dt.call(n)==ut}function b(n){return typeof n=="string"||dt.call(n)==at}function d(n){for(var t=-1,r=Rt(n),e=r.length,u=Array(e);++t<e;)u[t]=n[r[t]];return u}function j(n,t){var r=!1;return typeof(n?n.length:0)=="number"?r=-1<T(n,t):$t(n,function(n){return(r=n===t)&&K}),r}function w(n,t,r){var e=!0;t=P(t,r),r=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++r<u&&(e=!!t(n[r],r,n)););else $t(n,function(n,r,u){return!(e=!!t(n,r,u))&&K});return e}function A(n,t,r){var e=[];t=P(t,r),r=-1;var u=n?n.length:0;if(typeof u=="number")for(;++r<u;){var o=n[r];t(o,r,n)&&e.push(o)}else $t(n,function(n,r,u){t(n,r,u)&&e.push(n)});return e}function x(n,t,r){t=P(t,r),r=-1;var e=n?n.length:0;if(typeof e!="number"){var u;return $t(n,function(n,r,e){return t(n,r,e)?(u=n,K):void 0}),u}for(;++r<e;){var o=n[r];if(t(o,r,n))return o
}}function E(n,t,r){var e=-1,u=n?n.length:0;if(t=t&&typeof r=="undefined"?t:P(t,r),typeof u=="number")for(;++e<u&&t(n[e],e,n)!==K;);else $t(n,t)}function O(n,t,r){var e=-1,u=n?n.length:0;if(t=P(t,r),typeof u=="number")for(var o=Array(u);++e<u;)o[e]=t(n[e],e,n);else o=[],$t(n,function(n,r,u){o[++e]=t(n,r,u)});return o}function S(n,t,r){var e=-1/0,u=e,o=-1,i=n?n.length:0;if(t||typeof i!="number")t=P(t,r),E(n,function(n,r,o){r=t(n,r,o),r>e&&(e=r,u=n)});else for(;++o<i;)r=n[o],r>u&&(u=r);return u}function N(n,t){var r=-1,e=n?n.length:0;
if(typeof e=="number")for(var u=Array(e);++r<e;)u[r]=n[r][t];return u||O(n,t)}function B(n,t,r,e){if(!n)return r;var u=3>arguments.length;t=P(t,e,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(r=n[++o]);++o<i;)r=t(r,n[o],o,n);else $t(n,function(n,e,o){r=u?(u=!1,n):t(r,n,e,o)});return r}function k(n,t,r,e){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=Rt(n),u=i.length;return t=P(t,e,4),E(n,function(e,a,f){a=i?i[--u]:--u,r=o?(o=!1,n[a]):t(r,n[a],a,f)}),r}function q(n,t,r){var e;
t=P(t,r),r=-1;var u=n?n.length:0;if(typeof u=="number")for(;++r<u&&!(e=t(n[r],r,n)););else $t(n,function(n,r,u){return(e=t(n,r,u))&&K});return!!e}function F(n,t,r){return r&&g(t)?null:(r?x:A)(n,t)}function R(n){for(var t=-1,r=n.length,e=ht.apply(ct,Bt.call(arguments,1)),u=[];++t<r;){var o=n[t];0>T(e,o)&&u.push(o)}return u}function D(n,t,r){if(n){var e=0,u=n.length;if(typeof t!="number"&&null!=t){var o=-1;for(t=P(t,r);++o<u&&t(n[o],o,n);)e++}else if(e=t,null==e||r)return n[0];return Bt.call(n,0,St(Ot(0,e),u))
}}function M(n,t){for(var r=-1,e=n?n.length:0,u=[];++r<e;){var o=n[r];Ft(o)?_t.apply(u,t?o:M(o)):u.push(o)}return u}function T(n,t,r){var e=-1,u=n?n.length:0;if(typeof r=="number")e=(0>r?Ot(0,u+r):r||0)-1;else if(r)return e=I(n,t),n[e]===t?e:-1;for(;++e<u;)if(n[e]===t)return e;return-1}function $(n,t,r){if(typeof t!="number"&&null!=t){var e=0,u=-1,o=n?n.length:0;for(t=P(t,r);++u<o&&t(n[u],u,n);)e++}else e=null==t||r?1:Ot(0,t);return Bt.call(n,e)}function I(n,t,r,e){var u=0,o=n?n.length:u;for(r=r?P(r,e,1):U,t=r(t);u<o;)e=u+o>>>1,r(n[e])<t?u=e+1:o=e;
return u}function z(n,t,r,e){var u=-1,o=n?n.length:0,i=[],a=i;for(typeof t!="boolean"&&null!=t&&(e=r,r=t,t=!1),null!=r&&(a=[],r=P(r,e));++u<o;){e=n[u];var f=r?r(e,u,n):e;(t?!u||a[a.length-1]!==f:0>T(a,f))&&(r&&a.push(f),i.push(e))}return i}function C(n,t){return qt.fastBind||jt&&2<arguments.length?jt.call.apply(jt,arguments):e(n,t,Bt.call(arguments,2))}function P(n,t,r){if(null==n)return U;var e=typeof n;if("function"!=e){if("object"!=e)return function(t){return t[n]};var u=Rt(n);return function(t){for(var r=u.length,e=!1;r--&&(e=t[u[r]]===n[u[r]]););return e
}}return typeof t!="undefined"?1===r?function(r){return n.call(t,r)}:2===r?function(r,e){return n.call(t,r,e)}:4===r?function(r,e,u,o){return n.call(t,r,e,u,o)}:function(r,e,u){return n.call(t,r,e,u)}:n}function U(n){return n}function V(n){E(s(n),function(r){var e=t[r]=n[r];t.prototype[r]=function(){var n=[this.__wrapped__];return _t.apply(n,arguments),n=e.apply(t,n),this.__chain__&&(n=new i(n),n.__chain__=!0),n}})}var W=typeof exports=="object"&&exports,G=typeof module=="object"&&module&&module.exports==W&&module,H=typeof global=="object"&&global;
(H.global===H||H.window===H)&&(n=H);var J=0,K={},L=+new Date+"",Q=/&(?:amp|lt|gt|quot|#39);/g,X=/($^)/,Y=/[&<>"']/g,Z=/['\n\r\t\u2028\u2029\\]/g,nt="[object Arguments]",tt="[object Array]",rt="[object Boolean]",et="[object Date]",ut="[object Number]",ot="[object Object]",it="[object RegExp]",at="[object String]",ft={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},lt={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},ct=[],H={},pt=n._,st=RegExp("^"+(H.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),vt=Math.ceil,gt=n.clearTimeout,ht=ct.concat,yt=Math.floor,mt=H.hasOwnProperty,_t=ct.push,bt=n.setTimeout,dt=H.toString,jt=st.test(jt=dt.bind)&&jt,wt=st.test(wt=Array.isArray)&&wt,At=n.isFinite,xt=n.isNaN,Et=st.test(Et=Object.keys)&&Et,Ot=Math.max,St=Math.min,Nt=Math.random,Bt=ct.slice,H=st.test(n.attachEvent),kt=jt&&!/\n|true/.test(jt+H),qt={};
(function(){var n={0:1,length:1};qt.fastBind=jt&&!kt,qt.spliceObjects=(ct.splice.call(n,0,1),!n[0])})(1),t.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:""},i.prototype=t.prototype,l(arguments)||(l=function(n){return n?mt.call(n,"callee"):!1});var Ft=wt||function(n){return n?typeof n=="object"&&dt.call(n)==tt:!1},wt=function(n){var t,r=[];if(!n||!ft[typeof n])return r;for(t in n)mt.call(n,t)&&r.push(t);return r},Rt=Et?function(n){return m(n)?Et(n):[]
}:wt,Dt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Mt=v(Dt),Tt=function(n,t){var r;if(!n||!ft[typeof n])return n;for(r in n)if(t(n[r],r,n)===K)break;return n},$t=function(n,t){var r;if(!n||!ft[typeof n])return n;for(r in n)if(mt.call(n,r)&&t(n[r],r,n)===K)break;return n};y(/x/)&&(y=function(n){return typeof n=="function"&&"[object Function]"==dt.call(n)}),t.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},t.bind=C,t.bindAll=function(n){for(var t=1<arguments.length?ht.apply(ct,Bt.call(arguments,1)):s(n),r=-1,e=t.length;++r<e;){var u=t[r];
n[u]=C(n[u],n)}return n},t.compact=function(n){for(var t=-1,r=n?n.length:0,e=[];++t<r;){var u=n[t];u&&e.push(u)}return e},t.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];return t[0]}},t.countBy=function(n,t,r){var e={};return t=P(t,r),E(n,function(n,r,u){r=t(n,r,u)+"",mt.call(e,r)?e[r]++:e[r]=1}),e},t.debounce=function(n,t,r){function e(){a=null,r||(o=n.apply(i,u))}var u,o,i,a;return function(){var f=r&&!a;return u=arguments,i=this,gt(a),a=bt(e,t),f&&(o=n.apply(i,u)),o
}},t.defaults=p,t.defer=function(n){var t=Bt.call(arguments,1);return bt(function(){n.apply(void 0,t)},1)},t.delay=function(n,t){var r=Bt.call(arguments,2);return bt(function(){n.apply(void 0,r)},t)},t.difference=R,t.filter=A,t.flatten=M,t.forEach=E,t.functions=s,t.groupBy=function(n,t,r){var e={};return t=P(t,r),E(n,function(n,r,u){r=t(n,r,u)+"",(mt.call(e,r)?e[r]:e[r]=[]).push(n)}),e},t.initial=function(n,t,r){if(!n)return[];var e=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;for(t=P(t,r);o--&&t(n[o],o,n);)e++
}else e=null==t||r?1:t||e;return Bt.call(n,0,St(Ot(0,u-e),u))},t.intersection=function(n){var t=arguments,r=t.length,e=-1,u=n?n.length:0,o=[];n:for(;++e<u;){var i=n[e];if(0>T(o,i)){for(var a=r;--a;)if(0>T(t[a],i))continue n;o.push(i)}}return o},t.invert=v,t.invoke=function(n,t){var r=Bt.call(arguments,2),e=-1,u=typeof t=="function",o=n?n.length:0,i=Array(typeof o=="number"?o:0);return E(n,function(n){i[++e]=(u?t:n[t]).apply(n,r)}),i},t.keys=Rt,t.map=O,t.max=S,t.memoize=function(n,t){var r={};return function(){var e=L+(t?t.apply(this,arguments):arguments[0]);
return mt.call(r,e)?r[e]:r[e]=n.apply(this,arguments)}},t.min=function(n,t,r){var e=1/0,u=e,o=-1,i=n?n.length:0;if(t||typeof i!="number")t=P(t,r),E(n,function(n,r,o){r=t(n,r,o),r<e&&(e=r,u=n)});else for(;++o<i;)r=n[o],r<u&&(u=r);return u},t.omit=function(n){var t=ht.apply(ct,Bt.call(arguments,1)),r={};return Tt(n,function(n,e){0>T(t,e)&&(r[e]=n)}),r},t.once=function(n){var t,r;return function(){return t?r:(t=!0,r=n.apply(this,arguments),n=null,r)}},t.pairs=function(n){for(var t=-1,r=Rt(n),e=r.length,u=Array(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u},t.partial=function(n){return e(n,Bt.call(arguments,1))},t.pick=function(n){for(var t=-1,r=ht.apply(ct,Bt.call(arguments,1)),e=r.length,u={};++t<e;){var o=r[t];o in n&&(u[o]=n[o])}return u},t.pluck=N,t.range=function(n,t,r){n=+n||0,r=+r||1,null==t&&(t=n,n=0);var e=-1;t=Ot(0,vt((t-n)/r));for(var u=Array(t);++e<t;)u[e]=n,n+=r;return u},t.reject=function(n,t,r){return t=P(t,r),A(n,function(n,r,e){return!t(n,r,e)})},t.rest=$,t.shuffle=function(n){var t=-1,r=n?n.length:0,e=Array(typeof r=="number"?r:0);
return E(n,function(n){var r=yt(Nt()*(++t+1));e[t]=e[r],e[r]=n}),e},t.sortBy=function(n,t,e){var u=-1,o=n?n.length:0,i=Array(typeof o=="number"?o:0);for(t=P(t,e),E(n,function(n,r,e){i[++u]={a:t(n,r,e),b:u,c:n}}),o=i.length,i.sort(r);o--;)i[o]=i[o].c;return i},t.tap=function(n,t){return t(n),n},t.throttle=function(n,t){function r(){a=new Date,i=null,u=n.apply(o,e)}var e,u,o,i,a=0;return function(){var f=new Date,l=t-(f-a);return e=arguments,o=this,0<l?i||(i=bt(r,l)):(gt(i),i=null,a=f,u=n.apply(o,e)),u
}},t.times=function(n,t,r){for(var e=-1,u=Array(-1<n?n:0);++e<n;)u[e]=t.call(r,e);return u},t.toArray=function(n){return Ft(n)?Bt.call(n):n&&typeof n.length=="number"?O(n):d(n)},t.union=function(n){return Ft(n)||(arguments[0]=n?Bt.call(n):ct),z(ht.apply(ct,arguments))},t.uniq=z,t.values=d,t.where=F,t.without=function(n){return R(n,Bt.call(arguments,1))},t.wrap=function(n,t){return function(){var r=[n];return _t.apply(r,arguments),t.apply(this,r)}},t.zip=function(n){for(var t=-1,r=n?S(N(arguments,"length")):0,e=Array(r);++t<r;)e[t]=N(arguments,t);
return e},t.collect=O,t.drop=$,t.each=E,t.extend=c,t.methods=s,t.object=function(n,t){for(var r=-1,e=n?n.length:0,u={};++r<e;){var o=n[r];t?u[o]=t[r]:u[o[0]]=o[1]}return u},t.select=A,t.tail=$,t.unique=z,t.clone=function(n){return m(n)?Ft(n)?Bt.call(n):c({},n):n},t.contains=j,t.escape=function(n){return null==n?"":(n+"").replace(Y,o)},t.every=w,t.find=x,t.findWhere=function(n,t){return F(n,t,!0)},t.has=function(n,t){return n?mt.call(n,t):!1},t.identity=U,t.indexOf=T,t.isArguments=l,t.isArray=Ft,t.isBoolean=function(n){return!0===n||!1===n||dt.call(n)==rt
},t.isDate=function(n){return n?typeof n=="object"&&dt.call(n)==et:!1},t.isElement=function(n){return n?1===n.nodeType:!1},t.isEmpty=g,t.isEqual=h,t.isFinite=function(n){return At(n)&&!xt(parseFloat(n))},t.isFunction=y,t.isNaN=function(n){return _(n)&&n!=+n},t.isNull=function(n){return null===n},t.isNumber=_,t.isObject=m,t.isRegExp=function(n){return n?ft[typeof n]&&dt.call(n)==it:!1},t.isString=b,t.isUndefined=function(n){return typeof n=="undefined"},t.lastIndexOf=function(n,t,r){var e=n?n.length:0;
for(typeof r=="number"&&(e=(0>r?Ot(0,e+r):St(r,e-1))+1);e--;)if(n[e]===t)return e;return-1},t.mixin=V,t.noConflict=function(){return n._=pt,this},t.random=function(n,t){return null==n&&null==t&&(t=1),n=+n||0,null==t&&(t=n,n=0),n+yt(Nt()*((+t||0)-n+1))},t.reduce=B,t.reduceRight=k,t.result=function(n,t){var r=n?n[t]:null;return y(r)?n[t]():r},t.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Rt(n).length},t.some=q,t.sortedIndex=I,t.template=function(n,r,e){n||(n=""),e=p({},e,t.templateSettings);
var o=0,i="__p+='",a=e.variable;n.replace(RegExp((e.escape||X).source+"|"+(e.interpolate||X).source+"|"+(e.evaluate||X).source+"|$","g"),function(t,r,e,a,f){return i+=n.slice(o,f).replace(Z,u),r&&(i+="'+_['escape']("+r+")+'"),a&&(i+="';"+a+";__p+='"),e&&(i+="'+((__t=("+e+"))==null?'':__t)+'"),o=f+t.length,t}),i+="';\n",a||(a="obj",i="with("+a+"||{}){"+i+"}"),i="function("+a+"){var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"+i+"return __p}";try{var f=Function("_","return "+i)(t)
}catch(l){throw l.source=i,l}return r?f(r):(f.source=i,f)},t.unescape=function(n){return null==n?"":(n+"").replace(Q,f)},t.uniqueId=function(n){var t=++J+"";return n?n+t:t},t.all=w,t.any=q,t.detect=x,t.foldl=B,t.foldr=k,t.include=j,t.inject=B,t.first=D,t.last=function(n,t,r){if(n){var e=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;for(t=P(t,r);o--&&t(n[o],o,n);)e++}else if(e=t,null==e||r)return n[u-1];return Bt.call(n,Ot(0,u-e))}},t.take=D,t.head=D,t.chain=function(n){return n=new i(n),n.__chain__=!0,n
},t.VERSION="1.2.1",V(t),t.prototype.chain=function(){return this.__chain__=!0,this},t.prototype.value=function(){return this.__wrapped__},E("pop push reverse shift sort splice unshift".split(" "),function(n){var r=ct[n];t.prototype[n]=function(){var n=this.__wrapped__;return r.apply(n,arguments),!qt.spliceObjects&&0===n.length&&delete n[0],this}}),E(["concat","join","slice"],function(n){var r=ct[n];t.prototype[n]=function(){var n=r.apply(this.__wrapped__,arguments);return this.__chain__&&(n=new i(n),n.__chain__=!0),n
}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=t,define(function(){return t})):W&&!W.nodeType?G?(G.exports=t)._=t:W._=t:n._=t})(this);