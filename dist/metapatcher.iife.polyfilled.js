var Metapatcher=function(t,e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var i=function(t){return t&&t.Math==Math&&t},o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},c=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,l={f:u&&!s.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:s},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,d=function(t){return f.call(t).slice(8,-1)},h="".split,m=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?h.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},y=function(t){return m(g(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!v(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!v(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,x=function(t,e){return S.call(t,e)},E=o.document,O=v(E)&&v(E.createElement),w=function(t){return O?E.createElement(t):{}},T=!c&&!a((function(){return 7!=Object.defineProperty(w("div"),"a",{get:function(){return 7}}).a})),k=Object.getOwnPropertyDescriptor,j={f:c?k:function(t,e){if(t=y(t),e=b(e,!0),T)try{return k(t,e)}catch(t){}if(x(t,e))return p(!l.f.call(t,e),t[e])}},A=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},I=Object.defineProperty,N={f:c?I:function(t,e,n){if(A(t),e=b(e,!0),A(n),T)try{return I(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},P=c?function(t,e,n){return N.f(t,e,p(1,n))}:function(t,e,n){return t[e]=n,t},C=function(t,e){try{P(o,t,e)}catch(n){o[t]=e}return e},M=o["__core-js_shared__"]||C("__core-js_shared__",{}),R=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return R.call(t)});var _,z,D,$=M.inspectSource,F=o.WeakMap,L="function"==typeof F&&/native code/.test($(F)),B=r((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),G=0,U=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++G+U).toString(36)},W=B("keys"),K=function(t){return W[t]||(W[t]=q(t))},J={},V=o.WeakMap;if(L){var X=new V,Y=X.get,Q=X.has,H=X.set;_=function(t,e){return H.call(X,t,e),e},z=function(t){return Y.call(X,t)||{}},D=function(t){return Q.call(X,t)}}else{var Z=K("state");J[Z]=!0,_=function(t,e){return P(t,Z,e),e},z=function(t){return x(t,Z)?t[Z]:{}},D=function(t){return x(t,Z)}}var tt,et={set:_,get:z,has:D,enforce:function(t){return D(t)?z(t):_(t,{})},getterFor:function(t){return function(e){var n;if(!v(e)||(n=z(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},nt=r((function(t){var e=et.get,n=et.enforce,r=String(String).split("String");(t.exports=function(t,e,i,a){var c=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,u=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||x(i,"name")||P(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==o?(c?!u&&t[e]&&(s=!0):delete t[e],s?t[e]=i:P(t,e,i)):s?t[e]=i:C(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||$(this)}))})),rt=o,it=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?it(rt[t])||it(o[t]):rt[t]&&rt[t][e]||o[t]&&o[t][e]},at=Math.ceil,ct=Math.floor,st=function(t){return isNaN(t=+t)?0:(t>0?ct:at)(t)},ut=Math.min,lt=function(t){return t>0?ut(st(t),9007199254740991):0},pt=Math.max,ft=Math.min,dt=function(t,e){var n=st(t);return n<0?pt(n+e,0):ft(n,e)},ht=function(t){return function(e,n,r){var i,o=y(e),a=lt(o.length),c=dt(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},mt={includes:ht(!0),indexOf:ht(!1)},gt=mt.indexOf,yt=function(t,e){var n,r=y(t),i=0,o=[];for(n in r)!x(J,n)&&x(r,n)&&o.push(n);for(;e.length>i;)x(r,n=e[i++])&&(~gt(o,n)||o.push(n));return o},vt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=vt.concat("length","prototype"),St={f:Object.getOwnPropertyNames||function(t){return yt(t,bt)}},xt={f:Object.getOwnPropertySymbols},Et=ot("Reflect","ownKeys")||function(t){var e=St.f(A(t)),n=xt.f;return n?e.concat(n(t)):e},Ot=function(t,e){for(var n=Et(e),r=N.f,i=j.f,o=0;o<n.length;o++){var a=n[o];x(t,a)||r(t,a,i(e,a))}},wt=/#|\.prototype\./,Tt=function(t,e){var n=jt[kt(t)];return n==It||n!=At&&("function"==typeof e?a(e):!!e)},kt=Tt.normalize=function(t){return String(t).replace(wt,".").toLowerCase()},jt=Tt.data={},At=Tt.NATIVE="N",It=Tt.POLYFILL="P",Nt=Tt,Pt=j.f,Ct=function(t,e){var n,r,i,a,c,s=t.target,u=t.global,l=t.stat;if(n=u?o:l?o[s]||C(s,{}):(o[s]||{}).prototype)for(r in e){if(a=e[r],i=t.noTargetGet?(c=Pt(n,r))&&c.value:n[r],!Nt(u?r:s+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Ot(a,i)}(t.sham||i&&i.sham)&&P(a,"sham",!0),nt(n,r,a,t)}},Mt=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())})),Rt=Mt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,_t=Array.isArray||function(t){return"Array"==d(t)},zt=function(t){return Object(g(t))},Dt=Object.keys||function(t){return yt(t,vt)},$t=c?Object.defineProperties:function(t,e){A(t);for(var n,r=Dt(e),i=r.length,o=0;i>o;)N.f(t,n=r[o++],e[n]);return t},Ft=ot("document","documentElement"),Lt=K("IE_PROTO"),Bt=function(){},Gt=function(t){return"<script>"+t+"<\/script>"},Ut=function(){try{tt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Ut=tt?function(t){t.write(Gt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(tt):((e=w("iframe")).style.display="none",Ft.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Gt("document.F=Object")),t.close(),t.F);for(var n=vt.length;n--;)delete Ut.prototype[vt[n]];return Ut()};J[Lt]=!0;var qt,Wt,Kt,Jt=Object.create||function(t,e){var n;return null!==t?(Bt.prototype=A(t),n=new Bt,Bt.prototype=null,n[Lt]=t):n=Ut(),void 0===e?n:$t(n,e)},Vt=St.f,Xt={}.toString,Yt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Qt={f:function(t){return Yt&&"[object Window]"==Xt.call(t)?function(t){try{return Vt(t)}catch(t){return Yt.slice()}}(t):Vt(y(t))}},Ht=B("wks"),Zt=o.Symbol,te=Rt?Zt:Zt&&Zt.withoutSetter||q,ee=function(t){return x(Ht,t)||(Mt&&x(Zt,t)?Ht[t]=Zt[t]:Ht[t]=te("Symbol."+t)),Ht[t]},ne={f:ee},re=N.f,ie=N.f,oe=ee("toStringTag"),ae=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},ce=ee("species"),se=function(t,e){var n;return _t(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!_t(n.prototype)?v(n)&&null===(n=n[ce])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},ue=[].push,le=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,a=5==t||o;return function(c,s,u,l){for(var p,f,d=zt(c),h=m(d),g=function(t,e,n){if(ae(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}(s,u,3),y=lt(h.length),v=0,b=l||se,S=e?b(c,y):n?b(c,0):void 0;y>v;v++)if((a||v in h)&&(f=g(p=h[v],v,d),t))if(e)S[v]=f;else if(f)switch(t){case 3:return!0;case 5:return p;case 6:return v;case 2:ue.call(S,p)}else if(i)return!1;return o?-1:r||i?i:S}},pe={forEach:le(0),map:le(1),filter:le(2),some:le(3),every:le(4),find:le(5),findIndex:le(6)},fe=pe.forEach,de=K("hidden"),he=ee("toPrimitive"),me=et.set,ge=et.getterFor("Symbol"),ye=Object.prototype,ve=o.Symbol,be=ot("JSON","stringify"),Se=j.f,xe=N.f,Ee=Qt.f,Oe=l.f,we=B("symbols"),Te=B("op-symbols"),ke=B("string-to-symbol-registry"),je=B("symbol-to-string-registry"),Ae=B("wks"),Ie=o.QObject,Ne=!Ie||!Ie.prototype||!Ie.prototype.findChild,Pe=c&&a((function(){return 7!=Jt(xe({},"a",{get:function(){return xe(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Se(ye,e);r&&delete ye[e],xe(t,e,n),r&&t!==ye&&xe(ye,e,r)}:xe,Ce=function(t,e){var n=we[t]=Jt(ve.prototype);return me(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},Me=Rt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof ve},Re=function(t,e,n){t===ye&&Re(Te,e,n),A(t);var r=b(e,!0);return A(n),x(we,r)?(n.enumerable?(x(t,de)&&t[de][r]&&(t[de][r]=!1),n=Jt(n,{enumerable:p(0,!1)})):(x(t,de)||xe(t,de,p(1,{})),t[de][r]=!0),Pe(t,r,n)):xe(t,r,n)},_e=function(t,e){A(t);var n=y(e),r=Dt(n).concat(Fe(n));return fe(r,(function(e){c&&!ze.call(n,e)||Re(t,e,n[e])})),t},ze=function(t){var e=b(t,!0),n=Oe.call(this,e);return!(this===ye&&x(we,e)&&!x(Te,e))&&(!(n||!x(this,e)||!x(we,e)||x(this,de)&&this[de][e])||n)},De=function(t,e){var n=y(t),r=b(e,!0);if(n!==ye||!x(we,r)||x(Te,r)){var i=Se(n,r);return!i||!x(we,r)||x(n,de)&&n[de][r]||(i.enumerable=!0),i}},$e=function(t){var e=Ee(y(t)),n=[];return fe(e,(function(t){x(we,t)||x(J,t)||n.push(t)})),n},Fe=function(t){var e=t===ye,n=Ee(e?Te:y(t)),r=[];return fe(n,(function(t){!x(we,t)||e&&!x(ye,t)||r.push(we[t])})),r};(Mt||(nt((ve=function(){if(this instanceof ve)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=q(t),n=function(t){this===ye&&n.call(Te,t),x(this,de)&&x(this[de],e)&&(this[de][e]=!1),Pe(this,e,p(1,t))};return c&&Ne&&Pe(ye,e,{configurable:!0,set:n}),Ce(e,t)}).prototype,"toString",(function(){return ge(this).tag})),nt(ve,"withoutSetter",(function(t){return Ce(q(t),t)})),l.f=ze,N.f=Re,j.f=De,St.f=Qt.f=$e,xt.f=Fe,ne.f=function(t){return Ce(ee(t),t)},c&&(xe(ve.prototype,"description",{configurable:!0,get:function(){return ge(this).description}}),nt(ye,"propertyIsEnumerable",ze,{unsafe:!0}))),Ct({global:!0,wrap:!0,forced:!Mt,sham:!Mt},{Symbol:ve}),fe(Dt(Ae),(function(t){!function(t){var e=rt.Symbol||(rt.Symbol={});x(e,t)||re(e,t,{value:ne.f(t)})}(t)})),Ct({target:"Symbol",stat:!0,forced:!Mt},{for:function(t){var e=String(t);if(x(ke,e))return ke[e];var n=ve(e);return ke[e]=n,je[n]=e,n},keyFor:function(t){if(!Me(t))throw TypeError(t+" is not a symbol");if(x(je,t))return je[t]},useSetter:function(){Ne=!0},useSimple:function(){Ne=!1}}),Ct({target:"Object",stat:!0,forced:!Mt,sham:!c},{create:function(t,e){return void 0===e?Jt(t):_e(Jt(t),e)},defineProperty:Re,defineProperties:_e,getOwnPropertyDescriptor:De}),Ct({target:"Object",stat:!0,forced:!Mt},{getOwnPropertyNames:$e,getOwnPropertySymbols:Fe}),Ct({target:"Object",stat:!0,forced:a((function(){xt.f(1)}))},{getOwnPropertySymbols:function(t){return xt.f(zt(t))}}),be)&&Ct({target:"JSON",stat:!0,forced:!Mt||a((function(){var t=ve();return"[null]"!=be([t])||"{}"!=be({a:t})||"{}"!=be(Object(t))}))},{stringify:function(t,e,n){for(var r,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(r=e,(v(e)||void 0!==t)&&!Me(t))return _t(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Me(e))return e}),i[1]=e,be.apply(null,i)}});ve.prototype[he]||P(ve.prototype,he,ve.prototype.valueOf),Wt="Symbol",(qt=ve)&&!x(qt=Kt?qt:qt.prototype,oe)&&ie(qt,oe,{configurable:!0,value:Wt}),J[de]=!0;var Le=N.f,Be=o.Symbol;if(c&&"function"==typeof Be&&(!("description"in Be.prototype)||void 0!==Be().description)){var Ge={},Ue=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof Ue?new Be(t):void 0===t?Be():Be(t);return""===t&&(Ge[e]=!0),e};Ot(Ue,Be);var qe=Ue.prototype=Be.prototype;qe.constructor=Ue;var We=qe.toString,Ke="Symbol(test)"==String(Be("test")),Je=/^Symbol\((.*)\)[^)]+$/;Le(qe,"description",{configurable:!0,get:function(){var t=v(this)?this.valueOf():this,e=We.call(t);if(x(Ge,t))return"";var n=Ke?e.slice(7,-1):e.replace(Je,"$1");return""===n?void 0:n}}),Ct({global:!0,forced:!0},{Symbol:Ue})}var Ve=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))},Xe=Object.defineProperty,Ye={},Qe=function(t){throw t},He=function(t,e){if(x(Ye,t))return Ye[t];e||(e={});var n=[][t],r=!!x(e,"ACCESSORS")&&e.ACCESSORS,i=x(e,0)?e[0]:Qe,o=x(e,1)?e[1]:void 0;return Ye[t]=!!n&&!a((function(){if(r&&!c)return!0;var t={length:-1};r?Xe(t,1,{enumerable:!0,get:Qe}):t[1]=1,n.call(t,i,o)}))},Ze=mt.indexOf,tn=[].indexOf,en=!!tn&&1/[1].indexOf(1,-0)<0,nn=Ve("indexOf"),rn=He("indexOf",{ACCESSORS:!0,1:0});Ct({target:"Array",proto:!0,forced:en||!nn||!rn},{indexOf:function(t){return en?tn.apply(this,arguments)||0:Ze(this,t,arguments.length>1?arguments[1]:void 0)}});var on=Math.min,an=[].lastIndexOf,cn=!!an&&1/[1].lastIndexOf(1,-0)<0,sn=Ve("lastIndexOf"),un=He("indexOf",{ACCESSORS:!0,1:0}),ln=cn||!sn||!un?function(t){if(cn)return an.apply(this,arguments)||0;var e=y(this),n=lt(e.length),r=n-1;for(arguments.length>1&&(r=on(r,st(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:an;Ct({target:"Array",proto:!0,forced:ln!==[].lastIndexOf},{lastIndexOf:ln});var pn,fn,dn=ot("navigator","userAgent")||"",hn=o.process,mn=hn&&hn.versions,gn=mn&&mn.v8;gn?fn=(pn=gn.split("."))[0]+pn[1]:dn&&(!(pn=dn.match(/Edge\/(\d+)/))||pn[1]>=74)&&(pn=dn.match(/Chrome\/(\d+)/))&&(fn=pn[1]);var yn=fn&&+fn,vn=ee("species"),bn=function(t){return yn>=51||!a((function(){var e=[];return(e.constructor={})[vn]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Sn=pe.map,xn=bn("map"),En=He("map");Ct({target:"Array",proto:!0,forced:!xn||!En},{map:function(t){return Sn(this,t,arguments.length>1?arguments[1]:void 0)}});var On=function(t){return function(e,n,r,i){ae(n);var o=zt(e),a=m(o),c=lt(o.length),s=t?c-1:0,u=t?-1:1;if(r<2)for(;;){if(s in a){i=a[s],s+=u;break}if(s+=u,t?s<0:c<=s)throw TypeError("Reduce of empty array with no initial value")}for(;t?s>=0:c>s;s+=u)s in a&&(i=n(i,a[s],s,o));return i}},wn={left:On(!1),right:On(!0)}.left,Tn=Ve("reduce"),kn=He("reduce",{1:0});Ct({target:"Array",proto:!0,forced:!Tn||!kn},{reduce:function(t){return wn(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var jn=bn("slice"),An=He("slice",{ACCESSORS:!0,0:0,1:2}),In=ee("species"),Nn=[].slice,Pn=Math.max;Ct({target:"Array",proto:!0,forced:!jn||!An},{slice:function(t,e){var n,r,i,o,a,c,s,u=y(this),l=lt(u.length),f=dt(t,l),d=dt(void 0===e?l:e,l);if(_t(u)&&("function"!=typeof(n=u.constructor)||n!==Array&&!_t(n.prototype)?v(n)&&null===(n=n[In])&&(n=void 0):n=void 0,n===Array||void 0===n))return Nn.call(u,f,d);for(r=new(void 0===n?Array:n)(Pn(d-f,0)),i=0;f<d;f++,i++)f in u&&(o=r,a=i,c=u[f],s=void 0,(s=b(a))in o?N.f(o,s,p(0,c)):o[s]=c);return r.length=i,r}});var Cn=N.f,Mn=Function.prototype,Rn=Mn.toString,_n=/^\s*function ([^ (]*)/;c&&!("name"in Mn)&&Cn(Mn,"name",{configurable:!0,get:function(){try{return Rn.call(this).match(_n)[1]}catch(t){return""}}}),Ct({target:"Object",stat:!0,forced:a((function(){Dt(1)}))},{keys:function(t){return Dt(zt(t))}});var zn=l.f,Dn=function(t){return function(e){for(var n,r=y(e),i=Dt(r),o=i.length,a=0,s=[];o>a;)n=i[a++],c&&!zn.call(r,n)||s.push(t?[n,r[n]]:r[n]);return s}},$n={entries:Dn(!0),values:Dn(!1)}.values;Ct({target:"Object",stat:!0},{values:function(t){return $n(t)}});var Fn=function(){var t=A(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Ln(t,e){return RegExp(t,e)}var Bn,Gn,Un={UNSUPPORTED_Y:a((function(){var t=Ln("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:a((function(){var t=Ln("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},qn=RegExp.prototype.exec,Wn=String.prototype.replace,Kn=qn,Jn=(Bn=/a/,Gn=/b*/g,qn.call(Bn,"a"),qn.call(Gn,"a"),0!==Bn.lastIndex||0!==Gn.lastIndex),Vn=Un.UNSUPPORTED_Y||Un.BROKEN_CARET,Xn=void 0!==/()??/.exec("")[1];(Jn||Xn||Vn)&&(Kn=function(t){var e,n,r,i,o=this,a=Vn&&o.sticky,c=Fn.call(o),s=o.source,u=0,l=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),l=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(s="(?: "+s+")",l=" "+l,u++),n=new RegExp("^(?:"+s+")",c)),Xn&&(n=new RegExp("^"+s+"$(?!\\s)",c)),Jn&&(e=o.lastIndex),r=qn.call(a?n:o,l),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:Jn&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),Xn&&r&&r.length>1&&Wn.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var Yn=Kn;Ct({target:"RegExp",proto:!0,forced:/./.exec!==Yn},{exec:Yn});var Qn=ee("species"),Hn=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Zn="$0"==="a".replace(/./,"$0"),tr=ee("replace"),er=!!/./[tr]&&""===/./[tr]("a","$0"),nr=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),rr=function(t,e,n,r){var i=ee(t),o=!a((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),c=o&&!a((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Qn]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!o||!c||"replace"===t&&(!Hn||!Zn||er)||"split"===t&&!nr){var s=/./[i],u=n(i,""[t],(function(t,e,n,r,i){return e.exec===Yn?o&&!i?{done:!0,value:s.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Zn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:er}),l=u[0],p=u[1];nt(String.prototype,t,l),nt(RegExp.prototype,i,2==e?function(t,e){return p.call(t,this,e)}:function(t){return p.call(t,this)})}r&&P(RegExp.prototype[i],"sham",!0)},ir=function(t){return function(e,n){var r,i,o=String(g(e)),a=st(n),c=o.length;return a<0||a>=c?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},or={codeAt:ir(!1),charAt:ir(!0)}.charAt,ar=function(t,e,n){return e+(n?or(t,e).length:1)},cr=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==d(t))throw TypeError("RegExp#exec called on incompatible receiver");return Yn.call(t,e)};rr("match",1,(function(t,e,n){return[function(e){var n=g(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=A(t),o=String(this);if(!i.global)return cr(i,o);var a=i.unicode;i.lastIndex=0;for(var c,s=[],u=0;null!==(c=cr(i,o));){var l=String(c[0]);s[u]=l,""===l&&(i.lastIndex=ar(o,lt(i.lastIndex),a)),u++}return 0===u?null:s}]}));var sr=Math.max,ur=Math.min,lr=Math.floor,pr=/\$([$&'`]|\d\d?|<[^>]*>)/g,fr=/\$([$&'`]|\d\d?)/g,dr=function(t){return void 0===t?t:String(t)};function hr(){this.configure(),this.set("meta","name",{name:"msapplication-config",content:"none"})}return rr("replace",2,(function(t,e,n,r){var i=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=r.REPLACE_KEEPS_$0,a=i?"$":"$0";return[function(n,r){var i=g(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!i&&o||"string"==typeof r&&-1===r.indexOf(a)){var s=n(e,t,this,r);if(s.done)return s.value}var u=A(t),l=String(this),p="function"==typeof r;p||(r=String(r));var f=u.global;if(f){var d=u.unicode;u.lastIndex=0}for(var h=[];;){var m=cr(u,l);if(null===m)break;if(h.push(m),!f)break;""===String(m[0])&&(u.lastIndex=ar(l,lt(u.lastIndex),d))}for(var g="",y=0,v=0;v<h.length;v++){m=h[v];for(var b=String(m[0]),S=sr(ur(st(m.index),l.length),0),x=[],E=1;E<m.length;E++)x.push(dr(m[E]));var O=m.groups;if(p){var w=[b].concat(x,S,l);void 0!==O&&w.push(O);var T=String(r.apply(void 0,w))}else T=c(b,l,S,x,O,r);S>=y&&(g+=l.slice(y,S)+T,y=S+b.length)}return g+l.slice(y)}];function c(t,n,r,i,o,a){var c=r+t.length,s=i.length,u=fr;return void 0!==o&&(o=zt(o),u=pr),e.call(a,u,(function(e,a){var u;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":u=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>s){var p=lr(l/10);return 0===p?e:p<=s?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):e}u=i[l-1]}return void 0===u?"":u}))}})),hr.prototype.defaultSettings={structuredData:{enabled:!0},androidChromeIcons:{enabled:!0},msTags:{enabled:!0},safariTags:{enabled:!0},appleTags:{enabled:!0},openGraphTags:{enabled:!0},twitterTags:{enabled:!0},facebookTags:{enabled:!0}},hr.prototype.mimeTypesByExtension={svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",ico:"image/x-icon",gif:"image/gif",webp:"image/webp",bmp:"image/bmp"},hr.prototype.prioritizeMethods=["preload","prefetch","preconnect","dns-prefetch"],hr.prototype.validAndroidChromeIconSizes=["72x72","96x96","128x128","144x144","152x152","192x192","384x384","512x512"],hr.prototype.validAppleTouchIconSizes=["120x120","180x180","152x152","167x167","1024x1024"],hr.prototype.validMSTileIconSizes=["70x70","150x150","310x150","310x310"],hr.prototype.mstilesNamingMap={"70x70":"msapplication-square70x70logo","150x150":"msapplication-square150x150logo","310x310":"msapplication-square310x310logo","310x150":"msapplication-wide310x150logo"},hr.prototype.reImageSizeFromStr=/[0-9]{2,3}x[0-9]{2,3}/g,hr.prototype.setFavicon=function(e){var n=this.findMimeType(e);if(!t.validationkit.isEmpty(n))return this.set("link","rel",{rel:"shortcut icon",href:e,type:n})},hr.prototype.setProjectMeta=function(n){if(!t.validationkit.isEmpty(n))return t.validationkit.isNotEmpty(n.name)&&(this.settings.msTags.enabled&&this.set("meta","name",{name:"application-name",content:n.name}),this.settings.safariTags.enabled&&this.setSafariMobileWebApp({name:n.name}),this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:site_name",content:n.name})),t.validationkit.isNotEmpty(n.url)&&this.settings.msTags.enabled&&this.set("meta","name",{name:"msapplication-starturl",content:n.url}),t.validationkit.isNotEmpty(n.logo)&&this.settings.structuredData.enabled&&e.injectJSONLD({"@type":"Organization",logo:n.logo,url:n.url},{"data-mptype":"sdorg"}),t.validationkit.isNotEmpty(n.primaryColor)&&this.set("meta","name",{name:"theme-color",content:n.primaryColor}),t.validationkit.isNotEmpty(n.backgroundColor)&&this.settings.msTags.enabled&&this.set("meta","name",{name:"msapplication-TileColor",content:n.backgroundColor}),this},hr.prototype.robots=function(t){return this.set("meta","name",{name:"robots",content:t})},hr.prototype.prioritize=function(t,e){if(-1!==this.prioritizeMethods.indexOf(e))return this.set("meta",void 0,{name:e,content:t})},hr.prototype.removeAllPrioritizations=function(){for(var e=0;e<this.prioritizeMethods.length;e++){var n=this.prioritizeMethods[e],r=document.querySelectorAll('meta[name="'+n+'"]');if(t.validationkit.isNotEmpty(r))for(var i=0;i<r.length;i++)r[i].parentNode.removeChild(r[i])}return this},hr.prototype.setIcons=function(t){var e=this,n=Object.values(e.mimeTypesByExtension);return t.map((function(t){var r=e.findMimeType(t),i=t.match(e.reImageSizeFromStr);if(i&&i.length>0&&r&&-1!==n.indexOf(r)){var o=i[0];-1!==e.validAndroidChromeIconSizes.indexOf(o)&&e.settings.androidChromeIcons.enabled&&e.set("link",void 0,{rel:"icon",href:t,sizes:o,type:r}),-1!==e.validAppleTouchIconSizes.indexOf(o)&&e.settings.appleTags.enabled&&e.set("link",void 0,{rel:"apple-touch-icon",href:t,sizes:o}),-1!==e.validMSTileIconSizes.indexOf(o)&&e.settings.msTags.enabled&&e.set("meta",void 0,{name:e.mstilesNamingMap[o],content:t})}})),e},hr.prototype.setCanonical=function(t){return this.set("link",void 0,{rel:"canonical",href:t})},hr.prototype.removeAllCanonicals=function(){var e=document.querySelectorAll('link[rel="canonical"]');if(t.validationkit.isNotEmpty(e))for(var n=0;n<e.length;n++)e[n].parentNode.removeChild(e[n]);return this},hr.prototype.setLocalVersion=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.set("link",void 0,{rel:"alternate",href:e,hreflang:t}),this.settings.openGraphTags.enabled){var r=n?"":":alternate";this.set("meta",void 0,{property:"og:locale"+r,content:t})}return this},hr.prototype.removeAllLocalVersions=function(){var e=document.querySelectorAll('link[rel="alternate"]');if(t.validationkit.isNotEmpty(e))for(var n=0;n<e.length;n++)elems2[n].parentNode.removeChild(elems2[n]);if(this.settings.openGraphTags.enabled){var r=document.querySelectorAll('meta[property="og:locale:alternate"]');if(t.validationkit.isNotEmpty(r))for(var i=0;i<r.length;i++)r[i].parentNode.removeChild(r[i]);var o=document.querySelector('meta[property="og:locale"]');t.validationkit.isNotEmpty(o)&&o.parentNode.removeChild(o)}return this},hr.prototype.setPageMeta=function(e){if(t.validationkit.isEmpty(e))return this;if(t.validationkit.isNotEmpty(e.title)&&(document.title=e.title,this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:title",content:e.title}),this.settings.twitterTags.enabled&&this.set("meta","name",{name:"twitter:title",content:e.title})),t.validationkit.isNotEmpty(e.description)&&(this.set("meta","name",{name:"description",content:e.description}),this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:description",content:e.description}),this.settings.twitterTags.enabled&&this.set("meta","name",{name:"twitter:description",content:e.description})),t.validationkit.isNotEmpty(e.url)&&this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:url",content:e.url}),t.validationkit.isNotEmpty(e.image)){var n=this.formatImageInput(e.image);this.settings.openGraphTags.enabled&&(this.set("meta","property",{property:"og:image",content:n.url}),t.validationkit.isNotEmpty(n.width)&&this.set("meta","property",{property:"og:image:width",content:n.width}),t.validationkit.isNotEmpty(n.height)&&this.set("meta","property",{property:"og:image:height",content:n.height})),this.settings.twitterTags.enabled&&this.set("meta","name",{name:"twitter:image",content:n.url})}return t.validationkit.isNotEmpty(e.locale)&&(document.querySelector("html").setAttribute("lang",e.locale),this.settings.openGraphTags.enabled&&this.set("meta","property",{property:"og:locale",content:e.locale.replace("-","_")})),this},hr.prototype.setSafariMobileWebApp=function(e){return this.settings.appleTags.enabled?(this.set("meta","name",{name:"apple-mobile-web-app-capable",content:"yes"}),t.validationkit.isNotEmpty(e.name)&&this.set("meta","name",{name:"apple-mobile-web-app-title",content:e.name}),t.validationkit.isNotEmpty(e.statusBarStyle)&&this.set("meta","name",{name:"apple-mobile-web-app-status-bar-style",content:e.statusBarStyle}),this):this},hr.prototype.setSafariPinnedTab=function(t,e){return this.set("link","rel",{rel:"mask-icon",href:t,color:e||"black"})},hr.prototype.setFacebookMeta=function(e){return t.validationkit.isNotEmpty(e.appID)&&this.set("meta","property",{property:"fb:app_id",content:e.appID}),this},hr.prototype.setTwitterMeta=function(e){if(!this.settings.twitterTags.enabled)return this;t.validationkit.isNotEmpty(e.card)&&this.set("meta","name",{name:"twitter:card",content:e.card}),t.validationkit.isNotEmpty(e.site)&&this.set("meta","name",{name:"twitter:site",content:e.site}),t.validationkit.isNotEmpty(e.creator)&&this.set("meta","name",{name:"twitter:creator",content:e.creator})},hr.prototype.breadcrumb=function(t){if(!this.settings.structuredData.enabled)return this;var n={"@type":"BreadcrumbList",itemListElement:t.map((function(t,e){return{"@type":"ListItem",position:e+1,name:t.title,item:t.url}}))};return e.injectJSONLD(n,{"data-mptype":"sdb"}),this},hr.prototype.formatImageInput=function(e){return t.typekit.isString(e)?{url:e}:t.typekit.isObject(e)?{url:e.url,width:e.width,height:e.height}:{}},hr.prototype.findMimeType=function(e){var n=e.lastIndexOf(".");if(!(n<1)){var r=e.slice(n+1);if(!t.validationkit.isEmpty(r))return t.objectkit.getProp(this.mimeTypesByExtension,r,void 0)}},hr.prototype.set=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t.validationkit.isNotEmpty(n)){var i=this.hasElement(e+"["+n+'="'+r[n]+'"]');i&&i.parentNode.removeChild(i)}var o=this.createElement(e,r);return this.patch(o),o},hr.prototype.hasElement=function(t){return document.querySelector(t)},hr.prototype.createElement=function(e,n){var r=document.createElement(e);return t.typekit.isObject(n)&&Object.keys(n).map((function(t){return r.setAttribute(t,n[t])})),r},hr.prototype.patch=function(t){document.getElementsByTagName("head")[0].insertBefore(t,null)},hr.prototype.configure=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.defaultSettings;this.settings=Object.keys(this.defaultSettings).reduce((function(r,i){return r[i]=t.objectkit.getProp(e,i,t.objectkit.getProp(n,i,{})),r}),{})},new hr}(Basekits,Scripter);
