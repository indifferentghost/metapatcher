define(["basekits","dom-scripter"],(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(e),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var a=function(t){return t&&t.Math==Math&&t},c=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof i&&i)||Function("return this")(),s=function(t){try{return!!t()}catch(t){return!0}},u=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,p={f:f&&!l.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:l},d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h={}.toString,m=function(t){return h.call(t).slice(8,-1)},g="".split,y=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==m(t)?g.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return y(v(t))},S=function(t){return"object"==typeof t?null!==t:"function"==typeof t},E=function(t,e){if(!S(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!S(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},x={}.hasOwnProperty,O=function(t,e){return x.call(t,e)},w=c.document,k=S(w)&&S(w.createElement),T=function(t){return k?w.createElement(t):{}},j=!u&&!s((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),N=Object.getOwnPropertyDescriptor,A={f:u?N:function(t,e){if(t=b(t),e=E(e,!0),j)try{return N(t,e)}catch(t){}if(O(t,e))return d(!p.f.call(t,e),t[e])}},I=function(t){if(!S(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,C={f:u?P:function(t,e,n){if(I(t),e=E(e,!0),I(n),j)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},R=u?function(t,e,n){return C.f(t,e,d(1,n))}:function(t,e,n){return t[e]=n,t},M=function(t,e){try{R(c,t,e)}catch(n){c[t]=e}return e},_="__core-js_shared__",z=c[_]||M(_,{}),D=Function.toString;"function"!=typeof z.inspectSource&&(z.inspectSource=function(t){return D.call(t)});var L,$,F,q=z.inspectSource,B=c.WeakMap,G="function"==typeof B&&/native code/.test(q(B)),U=o((function(t){(t.exports=function(t,e){return z[t]||(z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),V=0,W=Math.random(),K=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+W).toString(36)},J=U("keys"),X=function(t){return J[t]||(J[t]=K(t))},Y={},Q=c.WeakMap;if(G){var H=new Q,Z=H.get,tt=H.has,et=H.set;L=function(t,e){return et.call(H,t,e),e},$=function(t){return Z.call(H,t)||{}},F=function(t){return tt.call(H,t)}}else{var nt=X("state");Y[nt]=!0,L=function(t,e){return R(t,nt,e),e},$=function(t){return O(t,nt)?t[nt]:{}},F=function(t){return O(t,nt)}}var rt,it={set:L,get:$,has:F,enforce:function(t){return F(t)?$(t):L(t,{})},getterFor:function(t){return function(e){var n;if(!S(e)||(n=$(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},ot=o((function(t){var e=it.get,n=it.enforce,r=String(String).split("String");(t.exports=function(t,e,i,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||O(i,"name")||R(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==c?(a?!u&&t[e]&&(s=!0):delete t[e],s?t[e]=i:R(t,e,i)):s?t[e]=i:M(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||q(this)}))})),at=c,ct=function(t){return"function"==typeof t?t:void 0},st=function(t,e){return arguments.length<2?ct(at[t])||ct(c[t]):at[t]&&at[t][e]||c[t]&&c[t][e]},ut=Math.ceil,lt=Math.floor,ft=function(t){return isNaN(t=+t)?0:(t>0?lt:ut)(t)},pt=Math.min,dt=function(t){return t>0?pt(ft(t),9007199254740991):0},ht=Math.max,mt=Math.min,gt=function(t,e){var n=ft(t);return n<0?ht(n+e,0):mt(n,e)},yt=function(t){return function(e,n,r){var i,o=b(e),a=dt(o.length),c=gt(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},vt={includes:yt(!0),indexOf:yt(!1)},bt=vt.indexOf,St=function(t,e){var n,r=b(t),i=0,o=[];for(n in r)!O(Y,n)&&O(r,n)&&o.push(n);for(;e.length>i;)O(r,n=e[i++])&&(~bt(o,n)||o.push(n));return o},Et=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xt=Et.concat("length","prototype"),Ot={f:Object.getOwnPropertyNames||function(t){return St(t,xt)}},wt={f:Object.getOwnPropertySymbols},kt=st("Reflect","ownKeys")||function(t){var e=Ot.f(I(t)),n=wt.f;return n?e.concat(n(t)):e},Tt=function(t,e){for(var n=kt(e),r=C.f,i=A.f,o=0;o<n.length;o++){var a=n[o];O(t,a)||r(t,a,i(e,a))}},jt=/#|\.prototype\./,Nt=function(t,e){var n=It[At(t)];return n==Ct||n!=Pt&&("function"==typeof e?s(e):!!e)},At=Nt.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},It=Nt.data={},Pt=Nt.NATIVE="N",Ct=Nt.POLYFILL="P",Rt=Nt,Mt=A.f,_t=function(t,e){var n,r,i,o,a,s=t.target,u=t.global,l=t.stat;if(n=u?c:l?c[s]||M(s,{}):(c[s]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(a=Mt(n,r))&&a.value:n[r],!Rt(u?r:s+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Tt(o,i)}(t.sham||i&&i.sham)&&R(o,"sham",!0),ot(n,r,o,t)}},zt=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Dt=zt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Lt=Array.isArray||function(t){return"Array"==m(t)},$t=function(t){return Object(v(t))},Ft=Object.keys||function(t){return St(t,Et)},qt=u?Object.defineProperties:function(t,e){I(t);for(var n,r=Ft(e),i=r.length,o=0;i>o;)C.f(t,n=r[o++],e[n]);return t},Bt=st("document","documentElement"),Gt=X("IE_PROTO"),Ut=function(){},Vt=function(t){return"<script>"+t+"</"+"script>"},Wt=function(){try{rt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Wt=rt?function(t){t.write(Vt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(rt):((e=T("iframe")).style.display="none",Bt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Vt("document.F=Object")),t.close(),t.F);for(var n=Et.length;n--;)delete Wt.prototype[Et[n]];return Wt()};Y[Gt]=!0;var Kt,Jt,Xt,Yt=Object.create||function(t,e){var n;return null!==t?(Ut.prototype=I(t),n=new Ut,Ut.prototype=null,n[Gt]=t):n=Wt(),void 0===e?n:qt(n,e)},Qt=Ot.f,Ht={}.toString,Zt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],te={f:function(t){return Zt&&"[object Window]"==Ht.call(t)?function(t){try{return Qt(t)}catch(t){return Zt.slice()}}(t):Qt(b(t))}},ee=U("wks"),ne=c.Symbol,re=Dt?ne:ne&&ne.withoutSetter||K,ie=function(t){return O(ee,t)||(zt&&O(ne,t)?ee[t]=ne[t]:ee[t]=re("Symbol."+t)),ee[t]},oe={f:ie},ae=C.f,ce=C.f,se=ie("toStringTag"),ue=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},le=ie("species"),fe=function(t,e){var n;return Lt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Lt(n.prototype)?S(n)&&null===(n=n[le])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},pe=[].push,de=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,a=5==t||o;return function(c,s,u,l){for(var f,p,d=$t(c),h=y(d),m=function(t,e,n){if(ue(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}(s,u,3),g=dt(h.length),v=0,b=l||fe,S=e?b(c,g):n?b(c,0):void 0;g>v;v++)if((a||v in h)&&(p=m(f=h[v],v,d),t))if(e)S[v]=p;else if(p)switch(t){case 3:return!0;case 5:return f;case 6:return v;case 2:pe.call(S,f)}else if(i)return!1;return o?-1:r||i?i:S}},he={forEach:de(0),map:de(1),filter:de(2),some:de(3),every:de(4),find:de(5),findIndex:de(6)},me=he.forEach,ge=X("hidden"),ye="Symbol",ve=ie("toPrimitive"),be=it.set,Se=it.getterFor(ye),Ee=Object.prototype,xe=c.Symbol,Oe=st("JSON","stringify"),we=A.f,ke=C.f,Te=te.f,je=p.f,Ne=U("symbols"),Ae=U("op-symbols"),Ie=U("string-to-symbol-registry"),Pe=U("symbol-to-string-registry"),Ce=U("wks"),Re=c.QObject,Me=!Re||!Re.prototype||!Re.prototype.findChild,_e=u&&s((function(){return 7!=Yt(ke({},"a",{get:function(){return ke(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=we(Ee,e);r&&delete Ee[e],ke(t,e,n),r&&t!==Ee&&ke(Ee,e,r)}:ke,ze=function(t,e){var n=Ne[t]=Yt(xe.prototype);return be(n,{type:ye,tag:t,description:e}),u||(n.description=e),n},De=Dt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof xe},Le=function(t,e,n){t===Ee&&Le(Ae,e,n),I(t);var r=E(e,!0);return I(n),O(Ne,r)?(n.enumerable?(O(t,ge)&&t[ge][r]&&(t[ge][r]=!1),n=Yt(n,{enumerable:d(0,!1)})):(O(t,ge)||ke(t,ge,d(1,{})),t[ge][r]=!0),_e(t,r,n)):ke(t,r,n)},$e=function(t,e){I(t);var n=b(e),r=Ft(n).concat(Ge(n));return me(r,(function(e){u&&!Fe.call(n,e)||Le(t,e,n[e])})),t},Fe=function(t){var e=E(t,!0),n=je.call(this,e);return!(this===Ee&&O(Ne,e)&&!O(Ae,e))&&(!(n||!O(this,e)||!O(Ne,e)||O(this,ge)&&this[ge][e])||n)},qe=function(t,e){var n=b(t),r=E(e,!0);if(n!==Ee||!O(Ne,r)||O(Ae,r)){var i=we(n,r);return!i||!O(Ne,r)||O(n,ge)&&n[ge][r]||(i.enumerable=!0),i}},Be=function(t){var e=Te(b(t)),n=[];return me(e,(function(t){O(Ne,t)||O(Y,t)||n.push(t)})),n},Ge=function(t){var e=t===Ee,n=Te(e?Ae:b(t)),r=[];return me(n,(function(t){!O(Ne,t)||e&&!O(Ee,t)||r.push(Ne[t])})),r};(zt||(ot((xe=function(){if(this instanceof xe)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=K(t),n=function(t){this===Ee&&n.call(Ae,t),O(this,ge)&&O(this[ge],e)&&(this[ge][e]=!1),_e(this,e,d(1,t))};return u&&Me&&_e(Ee,e,{configurable:!0,set:n}),ze(e,t)}).prototype,"toString",(function(){return Se(this).tag})),ot(xe,"withoutSetter",(function(t){return ze(K(t),t)})),p.f=Fe,C.f=Le,A.f=qe,Ot.f=te.f=Be,wt.f=Ge,oe.f=function(t){return ze(ie(t),t)},u&&(ke(xe.prototype,"description",{configurable:!0,get:function(){return Se(this).description}}),ot(Ee,"propertyIsEnumerable",Fe,{unsafe:!0}))),_t({global:!0,wrap:!0,forced:!zt,sham:!zt},{Symbol:xe}),me(Ft(Ce),(function(t){!function(t){var e=at.Symbol||(at.Symbol={});O(e,t)||ae(e,t,{value:oe.f(t)})}(t)})),_t({target:ye,stat:!0,forced:!zt},{for:function(t){var e=String(t);if(O(Ie,e))return Ie[e];var n=xe(e);return Ie[e]=n,Pe[n]=e,n},keyFor:function(t){if(!De(t))throw TypeError(t+" is not a symbol");if(O(Pe,t))return Pe[t]},useSetter:function(){Me=!0},useSimple:function(){Me=!1}}),_t({target:"Object",stat:!0,forced:!zt,sham:!u},{create:function(t,e){return void 0===e?Yt(t):$e(Yt(t),e)},defineProperty:Le,defineProperties:$e,getOwnPropertyDescriptor:qe}),_t({target:"Object",stat:!0,forced:!zt},{getOwnPropertyNames:Be,getOwnPropertySymbols:Ge}),_t({target:"Object",stat:!0,forced:s((function(){wt.f(1)}))},{getOwnPropertySymbols:function(t){return wt.f($t(t))}}),Oe)&&_t({target:"JSON",stat:!0,forced:!zt||s((function(){var t=xe();return"[null]"!=Oe([t])||"{}"!=Oe({a:t})||"{}"!=Oe(Object(t))}))},{stringify:function(t,e,n){for(var r,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(r=e,(S(e)||void 0!==t)&&!De(t))return Lt(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!De(e))return e}),i[1]=e,Oe.apply(null,i)}});xe.prototype[ve]||R(xe.prototype,ve,xe.prototype.valueOf),Jt=ye,(Kt=xe)&&!O(Kt=Xt?Kt:Kt.prototype,se)&&ce(Kt,se,{configurable:!0,value:Jt}),Y[ge]=!0;var Ue=C.f,Ve=c.Symbol;if(u&&"function"==typeof Ve&&(!("description"in Ve.prototype)||void 0!==Ve().description)){var We={},Ke=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof Ke?new Ve(t):void 0===t?Ve():Ve(t);return""===t&&(We[e]=!0),e};Tt(Ke,Ve);var Je=Ke.prototype=Ve.prototype;Je.constructor=Ke;var Xe=Je.toString,Ye="Symbol(test)"==String(Ve("test")),Qe=/^Symbol\((.*)\)[^)]+$/;Ue(Je,"description",{configurable:!0,get:function(){var t=S(this)?this.valueOf():this,e=Xe.call(t);if(O(We,t))return"";var n=Ye?e.slice(7,-1):e.replace(Qe,"$1");return""===n?void 0:n}}),_t({global:!0,forced:!0},{Symbol:Ke})}var He=function(t,e){var n=[][t];return!!n&&s((function(){n.call(null,e||function(){throw 1},1)}))},Ze=Object.defineProperty,tn={},en=function(t){throw t},nn=function(t,e){if(O(tn,t))return tn[t];e||(e={});var n=[][t],r=!!O(e,"ACCESSORS")&&e.ACCESSORS,i=O(e,0)?e[0]:en,o=O(e,1)?e[1]:void 0;return tn[t]=!!n&&!s((function(){if(r&&!u)return!0;var t={length:-1};r?Ze(t,1,{enumerable:!0,get:en}):t[1]=1,n.call(t,i,o)}))},rn=vt.indexOf,on=[].indexOf,an=!!on&&1/[1].indexOf(1,-0)<0,cn=He("indexOf"),sn=nn("indexOf",{ACCESSORS:!0,1:0});_t({target:"Array",proto:!0,forced:an||!cn||!sn},{indexOf:function(t){return an?on.apply(this,arguments)||0:rn(this,t,arguments.length>1?arguments[1]:void 0)}});var un=Math.min,ln=[].lastIndexOf,fn=!!ln&&1/[1].lastIndexOf(1,-0)<0,pn=He("lastIndexOf"),dn=nn("indexOf",{ACCESSORS:!0,1:0}),hn=fn||!pn||!dn?function(t){if(fn)return ln.apply(this,arguments)||0;var e=b(this),n=dt(e.length),r=n-1;for(arguments.length>1&&(r=un(r,ft(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:ln;_t({target:"Array",proto:!0,forced:hn!==[].lastIndexOf},{lastIndexOf:hn});var mn,gn,yn=st("navigator","userAgent")||"",vn=c.process,bn=vn&&vn.versions,Sn=bn&&bn.v8;Sn?gn=(mn=Sn.split("."))[0]+mn[1]:yn&&(!(mn=yn.match(/Edge\/(\d+)/))||mn[1]>=74)&&(mn=yn.match(/Chrome\/(\d+)/))&&(gn=mn[1]);var En=gn&&+gn,xn=ie("species"),On=function(t){return En>=51||!s((function(){var e=[];return(e.constructor={})[xn]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},wn=he.map,kn=On("map"),Tn=nn("map");_t({target:"Array",proto:!0,forced:!kn||!Tn},{map:function(t){return wn(this,t,arguments.length>1?arguments[1]:void 0)}});var jn=function(t){return function(e,n,r,i){ue(n);var o=$t(e),a=y(o),c=dt(o.length),s=t?c-1:0,u=t?-1:1;if(r<2)for(;;){if(s in a){i=a[s],s+=u;break}if(s+=u,t?s<0:c<=s)throw TypeError("Reduce of empty array with no initial value")}for(;t?s>=0:c>s;s+=u)s in a&&(i=n(i,a[s],s,o));return i}},Nn={left:jn(!1),right:jn(!0)}.left,An=He("reduce"),In=nn("reduce",{1:0});_t({target:"Array",proto:!0,forced:!An||!In},{reduce:function(t){return Nn(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Pn=On("slice"),Cn=nn("slice",{ACCESSORS:!0,0:0,1:2}),Rn=ie("species"),Mn=[].slice,_n=Math.max;_t({target:"Array",proto:!0,forced:!Pn||!Cn},{slice:function(t,e){var n,r,i,o,a,c,s,u=b(this),l=dt(u.length),f=gt(t,l),p=gt(void 0===e?l:e,l);if(Lt(u)&&("function"!=typeof(n=u.constructor)||n!==Array&&!Lt(n.prototype)?S(n)&&null===(n=n[Rn])&&(n=void 0):n=void 0,n===Array||void 0===n))return Mn.call(u,f,p);for(r=new(void 0===n?Array:n)(_n(p-f,0)),i=0;f<p;f++,i++)f in u&&(o=r,a=i,c=u[f],s=void 0,(s=E(a))in o?C.f(o,s,d(0,c)):o[s]=c);return r.length=i,r}});var zn=C.f,Dn=Function.prototype,Ln=Dn.toString,$n=/^\s*function ([^ (]*)/,Fn="name";u&&!(Fn in Dn)&&zn(Dn,Fn,{configurable:!0,get:function(){try{return Ln.call(this).match($n)[1]}catch(t){return""}}});var qn=Object.assign,Bn=Object.defineProperty,Gn=!qn||s((function(){if(u&&1!==qn({b:1},qn(Bn({},"a",{enumerable:!0,get:function(){Bn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=qn({},t)[n]||Ft(qn({},e)).join("")!=r}))?function(t,e){for(var n=$t(t),r=arguments.length,i=1,o=wt.f,a=p.f;r>i;)for(var c,s=y(arguments[i++]),l=o?Ft(s).concat(o(s)):Ft(s),f=l.length,d=0;f>d;)c=l[d++],u&&!a.call(s,c)||(n[c]=s[c]);return n}:qn;_t({target:"Object",stat:!0,forced:Object.assign!==Gn},{assign:Gn}),_t({target:"Object",stat:!0,forced:s((function(){Ft(1)}))},{keys:function(t){return Ft($t(t))}});var Un=p.f,Vn=function(t){return function(e){for(var n,r=b(e),i=Ft(r),o=i.length,a=0,c=[];o>a;)n=i[a++],u&&!Un.call(r,n)||c.push(t?[n,r[n]]:r[n]);return c}},Wn={entries:Vn(!0),values:Vn(!1)}.values;_t({target:"Object",stat:!0},{values:function(t){return Wn(t)}});var Kn=function(){var t=I(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Jn(t,e){return RegExp(t,e)}var Xn,Yn,Qn={UNSUPPORTED_Y:s((function(){var t=Jn("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:s((function(){var t=Jn("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Hn=RegExp.prototype.exec,Zn=String.prototype.replace,tr=Hn,er=(Xn=/a/,Yn=/b*/g,Hn.call(Xn,"a"),Hn.call(Yn,"a"),0!==Xn.lastIndex||0!==Yn.lastIndex),nr=Qn.UNSUPPORTED_Y||Qn.BROKEN_CARET,rr=void 0!==/()??/.exec("")[1];(er||rr||nr)&&(tr=function(t){var e,n,r,i,o=this,a=nr&&o.sticky,c=Kn.call(o),s=o.source,u=0,l=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),l=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(s="(?: "+s+")",l=" "+l,u++),n=new RegExp("^(?:"+s+")",c)),rr&&(n=new RegExp("^"+s+"$(?!\\s)",c)),er&&(e=o.lastIndex),r=Hn.call(a?n:o,l),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:er&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),rr&&r&&r.length>1&&Zn.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var ir=tr;_t({target:"RegExp",proto:!0,forced:/./.exec!==ir},{exec:ir});var or=ie("species"),ar=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),cr="$0"==="a".replace(/./,"$0"),sr=ie("replace"),ur=!!/./[sr]&&""===/./[sr]("a","$0"),lr=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),fr=function(t,e,n,r){var i=ie(t),o=!s((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=o&&!s((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[or]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!o||!a||"replace"===t&&(!ar||!cr||ur)||"split"===t&&!lr){var c=/./[i],u=n(i,""[t],(function(t,e,n,r,i){return e.exec===ir?o&&!i?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:cr,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:ur}),l=u[0],f=u[1];ot(String.prototype,t,l),ot(RegExp.prototype,i,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}r&&R(RegExp.prototype[i],"sham",!0)},pr=function(t){return function(e,n){var r,i,o=String(v(e)),a=ft(n),c=o.length;return a<0||a>=c?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},dr={codeAt:pr(!1),charAt:pr(!0)}.charAt,hr=function(t,e,n){return e+(n?dr(t,e).length:1)},mr=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==m(t))throw TypeError("RegExp#exec called on incompatible receiver");return ir.call(t,e)};fr("match",1,(function(t,e,n){return[function(e){var n=v(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=I(t),o=String(this);if(!i.global)return mr(i,o);var a=i.unicode;i.lastIndex=0;for(var c,s=[],u=0;null!==(c=mr(i,o));){var l=String(c[0]);s[u]=l,""===l&&(i.lastIndex=hr(o,dt(i.lastIndex),a)),u++}return 0===u?null:s}]}));var gr=Math.max,yr=Math.min,vr=Math.floor,br=/\$([$&'`]|\d\d?|<[^>]*>)/g,Sr=/\$([$&'`]|\d\d?)/g,Er=function(t){return void 0===t?t:String(t)};function xr(){this.configure(),this.set("meta","name",{name:"msapplication-config",content:"none"})}return fr("replace",2,(function(t,e,n,r){var i=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=r.REPLACE_KEEPS_$0,a=i?"$":"$0";return[function(n,r){var i=v(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!i&&o||"string"==typeof r&&-1===r.indexOf(a)){var s=n(e,t,this,r);if(s.done)return s.value}var u=I(t),l=String(this),f="function"==typeof r;f||(r=String(r));var p=u.global;if(p){var d=u.unicode;u.lastIndex=0}for(var h=[];;){var m=mr(u,l);if(null===m)break;if(h.push(m),!p)break;""===String(m[0])&&(u.lastIndex=hr(l,dt(u.lastIndex),d))}for(var g="",y=0,v=0;v<h.length;v++){m=h[v];for(var b=String(m[0]),S=gr(yr(ft(m.index),l.length),0),E=[],x=1;x<m.length;x++)E.push(Er(m[x]));var O=m.groups;if(f){var w=[b].concat(E,S,l);void 0!==O&&w.push(O);var k=String(r.apply(void 0,w))}else k=c(b,l,S,E,O,r);S>=y&&(g+=l.slice(y,S)+k,y=S+b.length)}return g+l.slice(y)}];function c(t,n,r,i,o,a){var c=r+t.length,s=i.length,u=Sr;return void 0!==o&&(o=$t(o),u=br),e.call(a,u,(function(e,a){var u;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":u=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>s){var f=vr(l/10);return 0===f?e:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}u=i[l-1]}return void 0===u?"":u}))}})),xr.prototype.defaultSettings={structuredData:{enabled:!0},androidChromeIcons:{enabled:!0},msTags:{enabled:!0},safariTags:{enabled:!0},appleTags:{enabled:!0},openGraphTags:{enabled:!0},twitterTags:{enabled:!0},facebookTags:{enabled:!0}},xr.prototype.mimeTypesByExtension={svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",ico:"image/x-icon",gif:"image/gif",webp:"image/webp",bmp:"image/bmp"},xr.prototype.prioritizeMethods=["preload","prefetch","preconnect","dns-prefetch"],xr.prototype.validAndroidChromeIconSizes=["72x72","96x96","128x128","144x144","152x152","192x192","384x384","512x512"],xr.prototype.validAppleTouchIconSizes=["120x120","180x180","152x152","167x167","1024x1024"],xr.prototype.validMSTileIconSizes=["70x70","150x150","310x150","310x310"],xr.prototype.mstilesNamingMap={"70x70":"msapplication-square70x70logo","150x150":"msapplication-square150x150logo","310x310":"msapplication-square310x310logo","310x150":"msapplication-wide310x150logo"},xr.prototype.reImageSizeFromStr=/[0-9]{2,3}x[0-9]{2,3}/g,xr.prototype.setFavicon=function(e){var n=this.findMimeType(e);if(!t.validationkit.isEmpty(n))return this.set("link","rel",{rel:"shortcut icon",href:e,type:n})},xr.prototype.setProjectMeta=function(e){if(!t.validationkit.isEmpty(e))return t.validationkit.isNotEmpty(e.name)&&(this.settings.msTags.enabled&&this.set("meta","name",{name:"application-name",content:e.name}),this.settings.safariTags.enabled&&this.setSafariMobileWebApp({name:e.name}),this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:site_name",content:e.name})),t.validationkit.isNotEmpty(e.url)&&this.settings.msTags.enabled&&this.set("meta","name",{name:"msapplication-starturl",content:e.url}),t.validationkit.isNotEmpty(e.logo)&&this.settings.structuredData.enabled&&r.default.injectJSONLD({"@type":"Organization",logo:e.logo,url:e.url},{"data-mptype":"sdorg",location:"headEnd",id:"metapatcher-project-meta-organization"}),t.validationkit.isNotEmpty(e.primaryColor)&&this.set("meta","name",{name:"theme-color",content:e.primaryColor}),t.validationkit.isNotEmpty(e.backgroundColor)&&this.settings.msTags.enabled&&this.set("meta","name",{name:"msapplication-TileColor",content:e.backgroundColor}),this},xr.prototype.robots=function(t){return this.set("meta","name",{name:"robots",content:t})},xr.prototype.prioritize=function(t,e){if(-1!==this.prioritizeMethods.indexOf(e))return this.set("meta",void 0,{name:e,content:t})},xr.prototype.removeAllPrioritizations=function(){for(var e=0;e<this.prioritizeMethods.length;e++){var n=this.prioritizeMethods[e],r=document.querySelectorAll('meta[name="'+n+'"]');if(t.validationkit.isNotEmpty(r))for(var i=0;i<r.length;i++)r[i].parentNode.removeChild(r[i])}return this},xr.prototype.setIcons=function(t){var e=this,n=Object.values(e.mimeTypesByExtension);return t.map((function(t){var r=e.findMimeType(t),i=t.match(e.reImageSizeFromStr);if(i&&i.length>0&&r&&-1!==n.indexOf(r)){var o=i[0];-1!==e.validAndroidChromeIconSizes.indexOf(o)&&e.settings.androidChromeIcons.enabled&&e.set("link",void 0,{rel:"icon",href:t,sizes:o,type:r}),-1!==e.validAppleTouchIconSizes.indexOf(o)&&e.settings.appleTags.enabled&&e.set("link",void 0,{rel:"apple-touch-icon",href:t,sizes:o}),-1!==e.validMSTileIconSizes.indexOf(o)&&e.settings.msTags.enabled&&e.set("meta",void 0,{name:e.mstilesNamingMap[o],content:t})}})),e},xr.prototype.setCanonical=function(t){return this.set("link",void 0,{rel:"canonical",href:t})},xr.prototype.removeAllCanonicals=function(){var e=document.querySelectorAll('link[rel="canonical"]');if(t.validationkit.isNotEmpty(e))for(var n=0;n<e.length;n++)e[n].parentNode.removeChild(e[n]);return this},xr.prototype.setLocalVersion=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.set("link",void 0,{rel:"alternate",href:e,hreflang:t}),this.settings.openGraphTags.enabled){var r=n?"":":alternate";this.set("meta",void 0,{property:"og:locale"+r,content:t})}return this},xr.prototype.removeAllLocalVersions=function(){var e=document.querySelectorAll('link[rel="alternate"]');if(t.validationkit.isNotEmpty(e))for(var n=0;n<e.length;n++)elems2[n].parentNode.removeChild(elems2[n]);if(this.settings.openGraphTags.enabled){var r=document.querySelectorAll('meta[property="og:locale:alternate"]');if(t.validationkit.isNotEmpty(r))for(var i=0;i<r.length;i++)r[i].parentNode.removeChild(r[i]);var o=document.querySelector('meta[property="og:locale"]');t.validationkit.isNotEmpty(o)&&o.parentNode.removeChild(o)}return this},xr.prototype.setPageMeta=function(e){var n=this;if(t.validationkit.isEmpty(e))return this;if(t.validationkit.isNotEmpty(e.title)&&(document.title=e.title,this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:title",content:e.title}),this.settings.twitterTags.enabled&&this.set("meta","name",{name:"twitter:title",content:e.title})),t.validationkit.isNotEmpty(e.description)&&(this.set("meta","name",{name:"description",content:e.description}),this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:description",content:e.description}),this.settings.twitterTags.enabled&&this.set("meta","name",{name:"twitter:description",content:e.description})),t.validationkit.isNotEmpty(e.url)&&this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:url",content:e.url}),t.validationkit.isNotEmpty(e.image)){var r=this.formatImageInput(e.image);this.settings.openGraphTags.enabled&&(this.set("meta","property",{property:"og:image",content:r.url}),t.validationkit.isNotEmpty(r.width)&&this.set("meta","property",{property:"og:image:width",content:r.width}),t.validationkit.isNotEmpty(r.height)&&this.set("meta","property",{property:"og:image:height",content:r.height})),this.settings.twitterTags.enabled&&this.set("meta","name",{name:"twitter:image",content:r.url})}return t.validationkit.isNotEmpty(e.locale)&&(document.querySelector("html").setAttribute("lang",e.locale),this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:locale",content:e.locale.replace("-","_")})),t.validationkit.isNotEmpty(e.localVersions)&&Object.keys(e.localVersions).map((function(r){return n.setLocalVersion(r,e.localVersions[r],t.validationkit.isNotEmpty(e.locale)&&e.locale==r)})),t.validationkit.isNotEmpty(e.canonicals)&&e.canonicals.map((function(t){return n.setCanonical(t)})),this},xr.prototype.setSafariMobileWebApp=function(e){return this.settings.appleTags.enabled?(this.set("meta","name",{name:"apple-mobile-web-app-capable",content:"yes"}),t.validationkit.isNotEmpty(e.name)&&this.set("meta","name",{name:"apple-mobile-web-app-title",content:e.name}),t.validationkit.isNotEmpty(e.statusBarStyle)&&this.set("meta","name",{name:"apple-mobile-web-app-status-bar-style",content:e.statusBarStyle}),this):this},xr.prototype.setSafariPinnedTab=function(t,e){return this.set("link","rel",{rel:"mask-icon",href:t,color:e||"black"})},xr.prototype.setFacebookMeta=function(e){return t.validationkit.isNotEmpty(e.appID)&&this.set("meta","property",{property:"fb:app_id",content:e.appID}),this},xr.prototype.setTwitterMeta=function(e){if(!this.settings.twitterTags.enabled)return this;t.validationkit.isNotEmpty(e.card)&&this.set("meta","name",{name:"twitter:card",content:e.card}),t.validationkit.isNotEmpty(e.site)&&this.set("meta","name",{name:"twitter:site",content:e.site}),t.validationkit.isNotEmpty(e.creator)&&this.set("meta","name",{name:"twitter:creator",content:e.creator})},xr.prototype.breadcrumb=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.settings.structuredData.enabled)return this;var n={"@type":"BreadcrumbList",itemListElement:t.map((function(t,e){return{"@type":"ListItem",position:e+1,name:t.title,item:t.url}}))};return r.default.injectJSONLD(n,Object.assign({},{"data-mptype":"sdb",location:"headEnd"},e)),this},xr.prototype.formatImageInput=function(e){return t.typekit.isString(e)?{url:e}:t.typekit.isObject(e)?{url:e.url,width:e.width,height:e.height}:{}},xr.prototype.findMimeType=function(e){var n=e.lastIndexOf(".");if(!(n<1)){var r=e.slice(n+1);if(!t.validationkit.isEmpty(r))return t.objectkit.getProp(this.mimeTypesByExtension,r,void 0)}},xr.prototype.set=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t.validationkit.isNotEmpty(n)){var i=this.hasElement(e+"["+n+'="'+r[n]+'"]');i&&i.parentNode.removeChild(i)}var o=this.createElement(e,r);return this.patch(o),o},xr.prototype.hasElement=function(t){return document.querySelector(t)},xr.prototype.createElement=function(e,n){var r=document.createElement(e);return t.typekit.isObject(n)&&Object.keys(n).map((function(t){return r.setAttribute(t,n[t])})),r},xr.prototype.patch=function(t){document.getElementsByTagName("head")[0].insertBefore(t,null)},xr.prototype.configure=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.defaultSettings;this.settings=Object.keys(this.defaultSettings).reduce((function(r,i){return r[i]=t.objectkit.getProp(e,i,t.objectkit.getProp(n,i,{})),r}),{})},new xr}));
