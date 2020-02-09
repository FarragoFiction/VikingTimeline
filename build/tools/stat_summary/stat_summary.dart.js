{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.mN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iZ(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={iO:function iO(){},
jL:function(a,b,c,d){if(!!J.aK(a).$iak)return new H.eB(a,b,[c,d])
return new H.dw(a,b,[c,d])},
lz:function(){return new P.cE("No element")},
lA:function(){return new P.cE("Too many elements")},
m1:function(a,b){H.dG(a,0,J.bQ(a)-1,b)},
dG:function(a,b,c,d){if(c-b<=32)H.m0(a,b,c,d)
else H.m_(a,b,c,d)},
m0:function(a,b,c,d){var u,t,s,r,q
for(u=b+1,t=J.cQ(a);u<=c;++u){s=t.n(a,u)
r=u
while(!0){if(!(r>b&&J.b4(d.$2(t.n(a,r-1),s),0)))break
q=r-1
t.h(a,r,t.n(a,q))
r=q}t.h(a,r,s)}},
m_:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
u=C.a.a8(a5-a4+1,6)
t=a4+u
s=a5-u
r=C.a.a8(a4+a5,2)
q=r-u
p=r+u
o=J.cQ(a3)
n=o.n(a3,t)
m=o.n(a3,q)
l=o.n(a3,r)
k=o.n(a3,p)
j=o.n(a3,s)
if(J.b4(a6.$2(n,m),0)){i=m
m=n
n=i}if(J.b4(a6.$2(k,j),0)){i=j
j=k
k=i}if(J.b4(a6.$2(n,l),0)){i=l
l=n
n=i}if(J.b4(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.b4(a6.$2(n,k),0)){i=k
k=n
n=i}if(J.b4(a6.$2(l,k),0)){i=k
k=l
l=i}if(J.b4(a6.$2(m,j),0)){i=j
j=m
m=i}if(J.b4(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.b4(a6.$2(k,j),0)){i=j
j=k
k=i}o.h(a3,t,n)
o.h(a3,r,l)
o.h(a3,s,j)
o.h(a3,q,o.n(a3,a4))
o.h(a3,p,o.n(a3,a5))
h=a4+1
g=a5-1
if(J.bx(a6.$2(m,k),0)){for(f=h;f<=g;++f){e=o.n(a3,f)
d=a6.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.ar()
if(d<0){if(f!==h){o.h(a3,f,o.n(a3,h))
o.h(a3,h,e)}++h}else for(;!0;){d=a6.$2(o.n(a3,g),m)
if(typeof d!=="number")return d.an()
if(d>0){--g
continue}else{c=g-1
if(d<0){o.h(a3,f,o.n(a3,h))
b=h+1
o.h(a3,h,o.n(a3,g))
o.h(a3,g,e)
g=c
h=b
break}else{o.h(a3,f,o.n(a3,g))
o.h(a3,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){e=o.n(a3,f)
a0=a6.$2(e,m)
if(typeof a0!=="number")return a0.ar()
if(a0<0){if(f!==h){o.h(a3,f,o.n(a3,h))
o.h(a3,h,e)}++h}else{a1=a6.$2(e,k)
if(typeof a1!=="number")return a1.an()
if(a1>0)for(;!0;){d=a6.$2(o.n(a3,g),k)
if(typeof d!=="number")return d.an()
if(d>0){--g
if(g<f)break
continue}else{d=a6.$2(o.n(a3,g),m)
if(typeof d!=="number")return d.ar()
c=g-1
if(d<0){o.h(a3,f,o.n(a3,h))
b=h+1
o.h(a3,h,o.n(a3,g))
o.h(a3,g,e)
h=b}else{o.h(a3,f,o.n(a3,g))
o.h(a3,g,e)}g=c
break}}}}a=!1}a2=h-1
o.h(a3,a4,o.n(a3,a2))
o.h(a3,a2,m)
a2=g+1
o.h(a3,a5,o.n(a3,a2))
o.h(a3,a2,k)
H.dG(a3,a4,h-2,a6)
H.dG(a3,g+2,a5,a6)
if(a)return
if(h<t&&g>s){for(;J.bx(a6.$2(o.n(a3,h),m),0);)++h
for(;J.bx(a6.$2(o.n(a3,g),k),0);)--g
for(f=h;f<=g;++f){e=o.n(a3,f)
if(a6.$2(e,m)===0){if(f!==h){o.h(a3,f,o.n(a3,h))
o.h(a3,h,e)}++h}else if(a6.$2(e,k)===0)for(;!0;)if(a6.$2(o.n(a3,g),k)===0){--g
if(g<f)break
continue}else{d=a6.$2(o.n(a3,g),m)
if(typeof d!=="number")return d.ar()
c=g-1
if(d<0){o.h(a3,f,o.n(a3,h))
b=h+1
o.h(a3,h,o.n(a3,g))
o.h(a3,g,e)
h=b}else{o.h(a3,f,o.n(a3,g))
o.h(a3,g,e)}g=c
break}}H.dG(a3,h,g,a6)}else H.dG(a3,h,g,a6)},
ak:function ak(){},
dt:function dt(){},
du:function du(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
eB:function eB(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b){this.a=null
this.b=a
this.c=b},
fw:function fw(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b){this.a=a
this.b=b},
kM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=P.cz(a.gac(),!0,b)
s=u.length
r=0
while(!0){if(!(r<s)){t=!0
break}q=u[r]
if(typeof q!=="string"){t=!1
break}++r}if(t){p={}
for(o=!1,n=null,m=0,r=0;r<u.length;u.length===s||(0,H.b3)(u),++r){q=u[r]
l=a.n(0,q)
if(!J.bx(q,"__proto__")){if(!p.hasOwnProperty(q))++m
p[q]=l}else{n=l
o=!0}}if(o)return new H.eq(n,m+1,p,u,[b,c])
return new H.cZ(m,p,u,[b,c])}return new H.ep(P.lD(a,b,c),[b,c])},
ij:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
mz:function(a){return v.types[a]},
mH:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.aK(a).$idq},
r:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bR(a)
if(typeof u!=="string")throw H.K(H.cd(a))
return u},
cA:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lG:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.af(u,3)
t=u[3]
if(b<2||b>36)throw H.K(P.fU(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.bi(r,p)|32)>s)return}return parseInt(a,b)},
dE:function(a){return H.lF(a)+H.jZ(H.ce(a),0,null)},
lF:function(a){var u,t,s,r,q,p,o,n,m
u=J.aK(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.z||!!u.$ibN){p=C.m(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ij(r.length>1&&C.b.bi(r,0)===36?C.b.aL(r,1):r)},
j0:function(a){throw H.K(H.cd(a))},
af:function(a,b){if(a==null)J.bQ(a)
throw H.K(H.cP(a,b))},
cP:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bk(!0,b,"index",null)
u=J.bQ(a)
if(!(b<0)){if(typeof u!=="number")return H.j0(u)
t=b>=u}else t=!0
if(t)return P.eQ(b,a,"index",null,u)
return P.iS(b,"index")},
cd:function(a){return new P.bk(!0,a,null,null)},
K:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ka})
u.name=""}else u.toString=H.ka
return u},
ka:function(){return J.bR(this.dartException)},
cf:function(a){throw H.K(a)},
b3:function(a){throw H.K(P.bB(a))},
bh:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.a([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jT:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jM:function(a,b){return new H.fF(a,b==null?null:b.method)},
iP:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fa(a,t,u?null:b.receiver)},
cT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ik(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.a.bU(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iP(H.r(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jM(H.r(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kg()
p=$.kh()
o=$.ki()
n=$.kj()
m=$.km()
l=$.kn()
k=$.kl()
$.kk()
j=$.kp()
i=$.ko()
h=q.ad(t)
if(h!=null)return u.$1(H.iP(t,h))
else{h=p.ad(t)
if(h!=null){h.method="call"
return u.$1(H.iP(t,h))}else{h=o.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=m.ad(t)
if(h==null){h=l.ad(t)
if(h==null){h=k.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=j.ad(t)
if(h==null){h=i.ad(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jM(t,h))}}return u.$1(new H.hs(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dI()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.bk(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dI()
return a},
my:function(a){var u
if(a==null)return new H.dW(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dW(a)},
mG:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.K(new P.hK("Unsupported number of arguments for wrapped closure"))},
e1:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mG)
a.$identity=u
return u},
kJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.ha().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.b6
if(typeof q!=="number")return q.ae()
$.b6=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.ja(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.mz,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.j9:H.il
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.K("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.ja(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
kG:function(a,b,c,d){var u=H.il
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ja:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kG(t,!r,u,b)
if(t===0){r=$.b6
if(typeof r!=="number")return r.ae()
$.b6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
if(q==null){q=H.eh("self")
$.ci=q}return new Function(r+H.r(q)+";return "+p+"."+H.r(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b6
if(typeof r!=="number")return r.ae()
$.b6=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
if(q==null){q=H.eh("self")
$.ci=q}return new Function(r+H.r(q)+"."+H.r(u)+"("+o+");}")()},
kH:function(a,b,c,d){var u,t
u=H.il
t=H.j9
switch(b?-1:a){case 0:throw H.K(H.lX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kI:function(a,b){var u,t,s,r,q,p,o,n
u=$.ci
if(u==null){u=H.eh("self")
$.ci=u}t=$.j8
if(t==null){t=H.eh("receiver")
$.j8=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kH(r,!p,s,b)
if(r===1){u="return function(){return this."+H.r(u)+"."+H.r(s)+"(this."+H.r(t)+");"
t=$.b6
if(typeof t!=="number")return t.ae()
$.b6=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.r(u)+"."+H.r(s)+"(this."+H.r(t)+", "+n+");"
t=$.b6
if(typeof t!=="number")return t.ae()
$.b6=t+1
return new Function(u+t+"}")()},
iZ:function(a,b,c,d,e,f,g){return H.kJ(a,b,c,d,!!e,!!f,g)},
il:function(a){return a.a},
j9:function(a){return a.c},
eh:function(a){var u,t,s,r,q
u=new H.ch("self","target","receiver","name")
t=J.iM(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
mu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mN:function(a){throw H.K(new P.et(a))},
lX:function(a){return new H.fY(a)},
k4:function(a){return v.getIsolateTag(a)},
mt:function(a){return new H.ca(a)},
a:function(a,b){a.$ti=b
return a},
ce:function(a){if(a==null)return
return a.$ti},
nd:function(a,b,c){return H.cS(a["$a"+H.r(c)],H.ce(b))},
i8:function(a,b,c){var u=H.cS(a["$a"+H.r(b)],H.ce(a))
return u==null?null:u[c]},
aj:function(a,b){var u=H.ce(a)
return u==null?null:u[b]},
mL:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ij(a[0].name)+H.jZ(a,1,b)
if(typeof a=="function")return H.ij(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.r(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.af(b,t)
return H.r(b[t])}if('func' in a)return H.md(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
md:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if("bounds" in a){u=a.bounds
if(b==null){b=H.a([],[P.q])
t=null}else t=b.length
s=b.length
for(r=u.length,q=r;q>0;--q)b.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=", "){p+=o
n=b.length
m=n-q-1
if(m<0)return H.af(b,m)
p=C.b.ae(p,b[m])
l=u[q]
if(l!=null&&l!==P.as)p+=" extends "+H.bO(l,b)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bO(a.ret,b)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=", "){f=j[g]
i=i+h+H.bO(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=", "){f=e[g]
i=i+h+H.bO(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mv(d),m=n.length,h="",g=0;g<m;++g,h=", "){c=n[g]
i=i+h+H.bO(d[c],b)+(" "+H.r(c))}i+="}"}if(t!=null)b.length=t
return p+"("+i+") => "+k},
jZ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.cH("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.k(0)+">"},
k5:function(a){var u,t,s,r
u=J.aK(a)
if(!!u.$icj){t=H.mu(u)
if(t!=null)return t}s=u.constructor
if(a==null)return s
if(typeof a!="object")return s
r=H.ce(a)
if(r!=null){r=r.slice()
r.splice(0,0,s)
s=r}return s},
cS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ms:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ce(a)
t=J.aK(a)
if(t[b]==null)return!1
return H.k0(H.cS(t[d],u),null,c,null)},
k0:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.b2(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.b2(a[t],b,c[t],d))return!1
return!0},
nb:function(a,b,c){return a.apply(b,H.cS(J.aK(b)["$a"+H.r(c)],H.ce(b)))},
b2:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="as"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="as"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.b2(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="bd")return!0
if('func' in c)return H.mf(a,b,c,d)
if('func' in a)return c.name==="dc"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.b2("type" in a?a.type:null,b,s,d)
else if(H.b2(a,b,s,d))return!0
else{if(!('$i'+"kY" in t.prototype))return!1
r=t.prototype["$a"+"kY"]
q=H.cS(r,u?a.slice(1):null)
return H.b2(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.k0(H.cS(m,u),b,p,d)},
mf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.b2(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.b2(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.b2(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.b2(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mK(h,b,g,d)},
mK:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.b2(c[r],d,a[r],b))return!1}return!0},
nc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mI:function(a){var u,t,s,r,q,p
u=$.k6.$1(a)
t=$.i6[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ic[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=$.k_.$2(a,u)
if(u!=null){t=$.i6[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ic[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ih(s)
$.i6[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ic[u]=s
return s}if(q==="-"){p=H.ih(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.k8(a,s)
if(q==="*")throw H.K(P.jU(u))
if(v.leafTags[u]===true){p=H.ih(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.k8(a,s)},
k8:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j2(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ih:function(a){return J.j2(a,!1,null,!!a.$idq)},
mJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ih(u)
else return J.j2(u,c,null,null)},
mD:function(){if(!0===$.j1)return
$.j1=!0
H.mE()},
mE:function(){var u,t,s,r,q,p,o,n
$.i6=Object.create(null)
$.ic=Object.create(null)
H.mC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k9.$1(q)
if(p!=null){o=H.mJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mC:function(){var u,t,s,r,q,p,o
u=C.r()
u=H.cc(C.t,H.cc(C.u,H.cc(C.n,H.cc(C.n,H.cc(C.v,H.cc(C.w,H.cc(C.x(C.m),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.k6=new H.i9(q)
$.k_=new H.ia(p)
$.k9=new H.ib(o)},
cc:function(a,b){return a(b)||b},
mM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ep:function ep(a,b){this.a=a
this.$ti=b},
eo:function eo(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eq:function eq(a,b,c,d,e){var _=this
_.d=a
_.a=b
_.b=c
_.c=d
_.$ti=e},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fF:function fF(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a){this.a=a},
ik:function ik(a){this.a=a},
dW:function dW(a){this.a=a
this.b=null},
cj:function cj(){},
hj:function hj(){},
ha:function ha(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a){this.a=a},
ca:function ca(a){this.a=a
this.d=this.b=null},
i:function i(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f9:function f9(a){this.a=a},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fi:function fi(a,b){this.a=a
this.$ti=b},
fj:function fj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
mv:function(a){return J.lB(a?Object.keys(a):[],null)}},J={
j2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i7:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.j1==null){H.mD()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.K(P.jU("Return interceptor for "+H.r(t(a,u))))}r=a.constructor
q=r==null?null:r[$.j3()]
if(q!=null)return q
q=H.mI(a)
if(q!=null)return q
if(typeof a=="function")return C.B
t=Object.getPrototypeOf(a)
if(t==null)return C.p
if(t===Object.prototype)return C.p
if(typeof r=="function"){Object.defineProperty(r,$.j3(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lB:function(a,b){return J.iM(H.a(a,[b]))},
iM:function(a){a.fixed$length=Array
return a},
lC:function(a,b){return J.ku(a,b)},
aK:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dn.prototype
return J.f8.prototype}if(typeof a=="string")return J.bF.prototype
if(a==null)return J.dp.prototype
if(typeof a=="boolean")return J.f7.prototype
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.as)return a
return J.i7(a)},
cQ:function(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.as)return a
return J.i7(a)},
k2:function(a){if(a==null)return a
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.as)return a
return J.i7(a)},
k3:function(a){if(typeof a=="number")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.bN.prototype
return a},
mw:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.bN.prototype
return a},
mx:function(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.bN.prototype
return a},
e2:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.as)return a
return J.i7(a)},
bx:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aK(a).aq(a,b)},
b4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k3(a).an(a,b)},
kr:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cQ(a).n(a,b)},
ks:function(a,b,c,d){return J.e2(a).bI(a,b,c,d)},
kt:function(a,b,c){return J.k3(a).ak(a,b,c)},
ku:function(a,b){return J.mw(a).af(a,b)},
e6:function(a,b,c){return J.cQ(a).c3(a,b,c)},
kv:function(a,b){return J.k2(a).am(a,b)},
kw:function(a){return J.e2(a).gbZ(a)},
e7:function(a){return J.aK(a).ga5(a)},
b5:function(a){return J.k2(a).gT(a)},
bQ:function(a){return J.cQ(a).gH(a)},
kx:function(a){return J.e2(a).gJ(a)},
ky:function(a){return J.e2(a).gcq(a)},
j6:function(a){return J.e2(a).cn(a)},
kz:function(a){return J.mx(a).cr(a)},
bR:function(a){return J.aK(a).k(a)},
aO:function aO(){},
f7:function f7(){},
dp:function dp(){},
dr:function dr(){},
fN:function fN(){},
bN:function bN(){},
bG:function bG(){},
bE:function bE(a){this.$ti=a},
iN:function iN(a){this.$ti=a},
eb:function eb(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
c5:function c5(){},
dn:function dn(){},
f8:function f8(){},
bF:function bF(){}},P={
m4:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mo()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.e1(new P.hC(u),1)).observe(t,{childList:true})
return new P.hB(u,t,s)}else if(self.setImmediate!=null)return P.mp()
return P.mq()},
m5:function(a){self.scheduleImmediate(H.e1(new P.hD(a),0))},
m6:function(a){self.setImmediate(H.e1(new P.hE(a),0))},
m7:function(a){P.mc(0,a)},
mc:function(a,b){var u=new P.i0()
u.bF(a,b)
return u},
mh:function(){var u,t
for(;u=$.cb,u!=null;){$.cO=null
t=u.b
$.cb=t
if(t==null)$.cN=null
u.a.$0()}},
mm:function(){$.iX=!0
try{P.mh()}finally{$.cO=null
$.iX=!1
if($.cb!=null)$.j4().$1(P.k1())}},
mk:function(a){var u=new P.dN(a)
if($.cb==null){$.cN=u
$.cb=u
if(!$.iX)$.j4().$1(P.k1())}else{$.cN.b=u
$.cN=u}},
ml:function(a){var u,t,s
u=$.cb
if(u==null){P.mk(a)
$.cO=$.cN
return}t=new P.dN(a)
s=$.cO
if(s==null){t.b=u
$.cO=t
$.cb=t}else{t.b=s.b
s.b=t
$.cO=t
if(t.b==null)$.cN=t}},
mi:function(a,b,c,d,e){var u={}
u.a=d
P.ml(new P.i5(u,e))},
mj:function(a,b,c,d,e){var u,t
t=$.dM
if(t===c)return d.$1(e)
$.dM=c
u=t
try{t=d.$1(e)
return t}finally{$.dM=u}},
hC:function hC(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
i0:function i0(){},
i1:function i1(a,b){this.a=a
this.b=b},
dN:function dN(a){this.a=a
this.b=null},
hf:function hf(){},
i4:function i4(){},
i5:function i5(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
l:function(a,b){return new P.hM([a,b])},
iT:function(a,b){var u=a[b]
return u===a?null:u},
iV:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
iU:function(){var u=Object.create(null)
P.iV(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
jK:function(a,b){return new H.i([a,b])},
fk:function(a,b){return new H.i([a,b])},
c6:function(a){return new P.hP([a])},
iW:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
jX:function(a,b){var u=new P.dP(a,b)
u.c=a.e
return u},
jJ:function(a,b,c){var u,t
if(P.iY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a([],[P.q])
t=$.cV()
t.push(a)
try{P.mg(a,u)}finally{if(0>=t.length)return H.af(t,-1)
t.pop()}t=P.jS(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
f5:function(a,b,c){var u,t,s
if(P.iY(a))return b+"..."+c
u=new P.cH(b)
t=$.cV()
t.push(a)
try{s=u
s.a=P.jS(s.a,a,", ")}finally{if(0>=t.length)return H.af(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iY:function(a){var u,t
for(u=0;t=$.cV(),u<t.length;++u)if(a===t[u])return!0
return!1},
mg:function(a,b){var u,t,s,r,q,p,o,n,m,l
u=J.b5(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.I())return
r=H.r(u.gL())
b.push(r)
t+=r.length+2;++s}if(!u.I()){if(s<=5)return
if(0>=b.length)return H.af(b,-1)
q=b.pop()
if(0>=b.length)return H.af(b,-1)
p=b.pop()}else{o=u.gL();++s
if(!u.I()){if(s<=4){b.push(H.r(o))
return}q=H.r(o)
if(0>=b.length)return H.af(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL();++s
for(;u.I();o=n,n=m){m=u.gL();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.af(b,-1)
t-=b.pop().length+2;--s}b.push("...")
return}}p=H.r(o)
q=H.r(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.af(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)b.push(l)
b.push(p)
b.push(q)},
lD:function(a,b,c){var u=P.jK(b,c)
a.au(0,new P.fl(u))
return u},
ds:function(a,b){var u,t
u=P.c6(b)
for(t=J.b5(a);t.I();)u.j(0,t.gL())
return u},
fs:function(a){var u,t
t={}
if(P.iY(a))return"{...}"
u=new P.cH("")
try{$.cV().push(a)
u.a+="{"
t.a=!0
a.au(0,new P.ft(t,u))
u.a+="}"}finally{t=$.cV()
if(0>=t.length)return H.af(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
lE:function(a,b,c,d){var u,t,s
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.b3)(b),++t){s=b[t]
a.h(0,c.$1(s),d.$1(s))}},
hM:function hM(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
hO:function hO(a){this.a=a},
cL:function cL(a,b){this.a=a
this.$ti=b},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
hP:function hP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hQ:function hQ(a){this.a=a
this.c=this.b=null},
dP:function dP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(){},
fl:function fl(a){this.a=a},
fm:function fm(){},
bc:function bc(){},
fr:function fr(){},
ft:function ft(a,b){this.a=a
this.b=b},
dv:function dv(){},
i2:function i2(){},
fv:function fv(){},
ht:function ht(){},
hV:function hV(){},
dQ:function dQ(){},
dX:function dX(){},
mF:function(a,b,c){var u,t
u=H.lG(a,c)
if(u!=null)return u
t=b.$1(a)
return t},
kP:function(a){if(a instanceof H.cj)return a.k(0)
return"Instance of '"+H.dE(a)+"'"},
cz:function(a,b,c){var u,t
u=H.a([],[c])
for(t=J.b5(a);t.I();)u.push(t.gL())
if(b)return u
return J.iM(u)},
f:function(a,b){var u=P.cz(a,!1,b)
u.fixed$length=Array
u.immutable$list=Array
return u},
jS:function(a,b,c){var u=J.b5(b)
if(!u.I())return a
if(c.length===0){do a+=H.r(u.gL())
while(u.I())}else{a+=H.r(u.gL())
for(;u.I();)a=a+c+H.r(u.gL())}return a},
jk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bR(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kP(a)},
j7:function(a,b,c){return new P.bk(!0,a,b,c)},
lV:function(a){return new P.cB(null,null,!1,null,null,a)},
iS:function(a,b){return new P.cB(null,null,!0,a,b,"Value not in range")},
fU:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
lW:function(a,b){if(typeof a!=="number")return a.ar()
if(a<0)throw H.K(P.fU(a,0,null,b,null))},
eQ:function(a,b,c,d,e){var u=e==null?J.bQ(b):e
return new P.eP(u,!0,a,c,"Index out of range")},
bj:function(a){return new P.hu(a)},
jU:function(a){return new P.hr(a)},
jP:function(a){return new P.cE(a)},
bB:function(a){return new P.en(a)},
bw:function bw(){},
D:function D(){},
bU:function bU(){},
dA:function dA(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eP:function eP(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hu:function hu(a){this.a=a},
hr:function hr(a){this.a=a},
cE:function cE(a){this.a=a},
en:function en(a){this.a=a},
fH:function fH(){},
dI:function dI(){},
et:function et(a){this.a=a},
hK:function hK(a){this.a=a},
dc:function dc(){},
aX:function aX(){},
b0:function b0(){},
f6:function f6(){},
aG:function aG(){},
bd:function bd(){},
cR:function cR(){},
as:function as(){},
q:function q(){},
cH:function cH(a){this.a=a},
mb:function(a){var u=new P.hR()
u.bD(a)
return u},
hR:function hR(){this.b=this.a=0},
cD:function cD(){},
t:function t(){},
iq:function(){var u=$.jf
if(u==null){u=J.e6(window.navigator.userAgent,"Opera",0)
$.jf=u}return u},
jh:function(){var u=$.jg
if(u==null){u=!P.iq()&&J.e6(window.navigator.userAgent,"WebKit",0)
$.jg=u}return u},
kN:function(){var u,t
u=$.jc
if(u!=null)return u
t=$.jd
if(t==null){t=J.e6(window.navigator.userAgent,"Firefox",0)
$.jd=t}if(t)u="-moz-"
else{t=$.je
if(t==null){t=!P.iq()&&J.e6(window.navigator.userAgent,"Trident/",0)
$.je=t}if(t)u="-ms-"
else u=P.iq()?"-o-":"-webkit-"}$.jc=u
return u}},W={
kO:function(a,b,c){var u,t
u=document.body
t=(u&&C.l).aa(u,a,b,c)
t.toString
u=new H.b1(new W.aJ(t),new W.eC(),[W.aa])
return u.gas(u)},
ck:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ky(a)
if(typeof t==="string")u=a.tagName}catch(s){H.cT(s)}return u},
jt:function(){var u=document.createElement("img")
return u},
m8:function(a,b,c,d){var u,t
u=W.mn(new W.hJ(c),W.u)
t=u!=null
if(t&&!0)if(t)J.ks(a,b,u,!1)
return new W.hI(a,b,u,!1)},
jW:function(a){var u,t
u=document.createElement("a")
t=new W.hU(u,window.location)
t=new W.cM(t)
t.bC(a)
return t},
m9:function(a,b,c,d){return!0},
ma:function(a,b,c,d){var u,t,s
u=d.a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jY:function(){var u,t,s
u=P.q
t=P.ds(C.f,u)
s=H.a(["TEMPLATE"],[u])
t=new W.hZ(t,P.c6(u),P.c6(u),P.c6(u),null)
t.bE(null,new H.fw(C.f,new W.i_(),[H.aj(C.f,0),u]),s,null)
return t},
mn:function(a,b){var u=$.dM
if(u===C.e)return a
return u.c_(a,b)},
H:function H(){},
e9:function e9(){},
ea:function ea(){},
bS:function bS(){},
ej:function ej(){},
bz:function bz(){},
bT:function bT(){},
er:function er(){},
ew:function ew(){},
ex:function ex(){},
b7:function b7(){},
eC:function eC(){},
eD:function eD(){},
u:function u(){},
d_:function d_(){},
eH:function eH(){},
eI:function eI(){},
eO:function eO(){},
eR:function eR(){},
fn:function fn(){},
fu:function fu(){},
fx:function fx(){},
bH:function bH(){},
fC:function fC(){},
aJ:function aJ(a){this.a=a},
aa:function aa(){},
dy:function dy(){},
fG:function fG(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
h4:function h4(){},
h5:function h5(){},
dH:function dH(){},
h9:function h9(){},
dJ:function dJ(){},
hh:function hh(){},
hi:function hi(){},
cI:function cI(){},
hm:function hm(){},
bi:function bi(){},
dL:function dL(){},
hF:function hF(){},
dR:function dR(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hI:function hI(a,b,c,d){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d},
hJ:function hJ(a){this.a=a},
cM:function cM(a){this.a=a},
dd:function dd(){},
dz:function dz(a){this.a=a},
fE:function fE(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(){},
hW:function hW(){},
hX:function hX(){},
hZ:function hZ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i_:function i_(){},
hY:function hY(){},
da:function da(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bt:function bt(){},
hU:function hU(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a},
i3:function i3(a){this.a=a},
dO:function dO(){},
dS:function dS(){},
dT:function dT(){},
e_:function e_(){},
e0:function e0(){}},S={e8:function e8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},fd:function fd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.t=!0
_.C=_.B=_.w=_.v=_.u=!1
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p},fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.t=!1
_.u=!0
_.C=_.B=_.w=_.v=!1
_.F=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q},h3:function h3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y1=a
_.y2=b
_.G=c
_.E=d
_.q=!1
_.t=!0
_.B=_.w=_.v=_.u=!1
_.C=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q}},L={
kF:function(){var u=$.e3()
u=u.gaC(u)
return new H.b1(u,new L.ed(),[H.i8(u,"b0",0)])},
kA:function(a,b,c,d){var u,t,s,r,q,p,o
u=P.q
t=A.bA
s=P.aX
s=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
s.i(0,$.S,L.c("#FF9B00"),!0)
s.i(0,$.Q,L.c("#FF9B00"),!0)
s.i(0,$.T,L.c("#FF8700"),!0)
s.i(0,$.a0,L.c("#7F7F7F"),!0)
s.i(0,$.a_,L.c("#727272"),!0)
s.i(0,$.V,L.c("#A3A3A3"),!0)
s.i(0,$.W,L.c("#999999"),!0)
s.i(0,$.U,L.c("#898989"),!0)
s.i(0,$.R,L.c("#EFEFEF"),!0)
s.i(0,$.Z,L.c("#DBDBDB"),!0)
s.i(0,$.Y,L.c("#C6C6C6"),!0)
s.i(0,$.X,L.c("#ADADAD"),!0)
t=[u]
r=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),u)
q=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],t),u)
p=P.f(H.a(["Blank","Null","Boring","Error"],t),u)
o=P.f(H.a(["Blank","Null","Boring","Error"],t),u)
P.f(H.a(["Nothing","Errors","Glitches"],t),u)
P.f(H.a(["Nothing","Errors","Glitches"],t),u)
u=new L.cg(a,new H.i([X.m,P.D]),b,c,d,1,s,r,q,p,o,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],t),u),H.a([],[E.p]),Q.n(null,null,A.B))
u.U(a,b,c,d)
return u},
c:function(a){if(C.b.bd(a,"#"))return A.jb(C.b.aL(a,1))
else return A.jb(a)},
ed:function ed(){},
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.e=a
_.f=b
_.Q=c
_.cx=d
_.cy=e
_.dx=_.db=!1
_.fr=f
_.fx=g
_.fy=h
_.go=i
_.id=j
_.k1=k
_.k4="Song"
_.r1=l
_.r2=m
_.rx=n
_.x1=o},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(){},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.t=!1
_.u=!0
_.B=_.w=_.v=!1
_.C=!0
_.F=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q}},M={ee:function ee(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},es:function es(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},is:function is(){},hy:function hy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.v=_.u=_.t=!1
_.w=!0
_.C=_.B=!1
_.F=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q}},O={ef:function ef(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.B=_.w=_.v=_.u=!1
_.C=!0
_.F=!1
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p}},T={eg:function eg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.t=a
_.u=b
_.v=c
_.w=d
_.B=e
_.C="Ballad "
_.F=f
_.K=g
_.a7=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},ei:function ei(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.t=a
_.u=b
_.v=c
_.w=d
_.B=e
_.C="Refrain "
_.F=f
_.K=g
_.a7=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},eL:function eL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Leitmotif"
_.C=f
_.ag=!0
_.K=g
_.a7=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},
lZ:function(){var u=$.e5()
u=u.gaC(u)
return new H.b1(u,new T.fZ(),[H.i8(u,"b0",0)])},
lY:function(a,b,c,d){var u=[P.q]
u=new T.cC(a,new H.i([X.m,P.D]),b,c,d,Q.n(null,null,A.B),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],u),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],u),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],u),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],u),H.a([],[E.p]),1)
u.M(a,b,c,d)
return u},
fZ:function fZ(){},
cC:function cC(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.y=b
_.ch=c
_.cx=d
_.cy=e
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=f
_.id=g
_.k1=h
_.k2=i
_.k3=j
_.k4=k
_.r2=l}},A={em:function em(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},
d:function(a,b,c,d){var u=new A.B(a,!1,P.c6(G.C))
u.bB(a,b,c,!1,d)
return u},
B:function B(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.x=0},
f4:function f4(){},
f3:function f3(){},
im:function im(){},
ip:function(a,b,c,d){var u=new A.bA()
u.scl(C.a.ak(a,0,255))
u.sbs(C.a.ak(b,0,255))
u.sc0(C.a.ak(c,0,255))
u.a=C.a.ak(J.kt(d,0,255),0,255)
return u},
kK:function(a,b){if(b){if(typeof a!=="number")return a.bb()
return A.ip((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.bb()
return A.ip((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
jb:function(a){return A.kK(P.mF(a,new A.el(),16),a.length>=8)},
bA:function bA(){var _=this
_.d=_.c=_.b=_.a=null},
el:function el(){},
fL:function fL(){},
dU:function dU(){},
fT:function fT(){this.a=null}},V={ey:function ey(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},fy:function fy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Fugue"
_.C=f
_.F=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},fK:function fK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.t=!0
_.C=_.B=_.w=_.v=_.u=!1
_.F=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q},hl:function hl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o}},U={ez:function ez(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.t=a
_.u=b
_.v=c
_.w=d
_.B=e
_.C="Dirge"
_.F=f
_.a7=_.K=!0
_.aV=g
_.aW=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},eE:function eE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},fq:function fq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.y1=a
_.y2=b
_.G=c
_.E=d
_.w=_.v=_.u=_.t=_.q=!1
_.B=!0
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p},b:function b(){},z:function z(){},hn:function hn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.u=_.t=!1
_.v=!0
_.C=_.B=_.w=!1
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p}},Z={eA:function eA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.F="Fantasia"
_.aB=f
_.ag=!1
_.K=g
_.a7=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},fb:function fb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.aX=a
_.aY=b
_.aZ=c
_.b_=d
_.b0=e
_.b1="Sine Wave"
_.b2=f
_.c8=g
_.ca=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},fo:function fo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.E=a
_.q=b
_.t=c
_.u=d
_.B=_.w=_.v=!1
_.F=_.C=!0
_.aB=!1
_.ag=e
_.K=f
_.x=g
_.y=h
_.ch=i
_.cx=j
_.cy=k
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=l
_.id=m
_.k1=n
_.k2=o
_.k3=p
_.k4=q
_.r2=r}},X={io:function io(){},eN:function eN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Etude"
_.C=f
_.ag=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},m:function m(a,b){this.a=a
this.b=b},
k7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
D.m2()
u=P.q
t=A.bA
s=P.aX
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#00ff00"),!0)
r.i(0,$.Q,L.c("#EFEFEF"),!0)
r.i(0,$.T,L.c("#DEDEDE"),!0)
r.i(0,$.a0,L.c("#FF2106"),!0)
r.i(0,$.a_,L.c("#B01200"),!0)
r.i(0,$.V,L.c("#2F2F30"),!0)
r.i(0,$.W,L.c("#1D1D1D"),!0)
r.i(0,$.U,L.c("#080808"),!0)
r.i(0,$.R,L.c("#030303"),!0)
r.i(0,$.Z,L.c("#242424"),!0)
r.i(0,$.Y,L.c("#333333"),!0)
r.i(0,$.X,L.c("#141414"),!0)
q=[u]
p=P.f(H.a(["Frogs"],q),u)
o=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],q),u)
n=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],q),u)
m=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],q),u)
l=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],q),u)
k=E.p
j=[k]
i=P.f(H.a([new E.p($.bg,2,!0),new E.p($.bL,1,!0),new E.p($.c9,-2,!0)],j),k)
h=X.m
g=P.D
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
a=A.B
b=new N.h8(r,p,o,n,m," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,0,new H.i([h,g]),"Space",!0,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a))
b.U(0,"Space",!0,!1)
$.kD=b
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#ff0000"),!0)
b.i(0,$.Q,L.c("#FF2106"),!0)
b.i(0,$.T,L.c("#AD1604"),!0)
b.i(0,$.a0,L.c("#030303"),!0)
b.i(0,$.a_,L.c("#242424"),!0)
b.i(0,$.V,L.c("#510606"),!0)
b.i(0,$.W,L.c("#3C0404"),!0)
b.i(0,$.U,L.c("#1F0000"),!0)
b.i(0,$.R,L.c("#B70D0E"),!0)
b.i(0,$.Z,L.c("#970203"),!0)
b.i(0,$.Y,L.c("#8E1516"),!0)
b.i(0,$.X,L.c("#640707"),!0)
c=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],q),u)
d=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],q),u)
e=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],q),u)
f=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],q),u)
i=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],q),u)
l=P.f(H.a([new E.p($.cF,2,!0),new E.p($.c9,1,!0),new E.p($.bK,-2,!0)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
m=new N.ho(b,c,d,e,f,"  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",i,l,1,new H.i([h,g]),"Time",!0,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a))
m.U(1,"Time",!0,!1)
$.kE=m
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#3399ff"),!0)
m.i(0,$.Q,L.c("#10E0FF"),!0)
m.i(0,$.T,L.c("#00A4BB"),!0)
m.i(0,$.a0,L.c("#FEFD49"),!0)
m.i(0,$.a_,L.c("#D6D601"),!0)
m.i(0,$.V,L.c("#0052F3"),!0)
m.i(0,$.W,L.c("#0046D1"),!0)
m.i(0,$.U,L.c("#003396"),!0)
m.i(0,$.R,L.c("#0087EB"),!0)
m.i(0,$.Z,L.c("#0070ED"),!0)
m.i(0,$.Y,L.c("#006BE1"),!0)
m.i(0,$.X,L.c("#0054B0"),!0)
n=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],q),u)
o=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],q),u)
p=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],q),u)
r=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],q),u)
l=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],u)
i=P.f(H.a([new E.p($.c9,2,!0),new E.p($.aI,1,!0),new E.p($.bL,-1,!0),new E.p($.bM,-1,!0),new E.p($.an,0.05,!1)],j),k)
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new T.ei(m,n,o,p,r," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,2,new H.i([h,g]),"Breath",!0,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(2,"Breath",!0,!1)
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#003300"),!0)
b.i(0,$.Q,L.c("#0F0F0F"),!0)
b.i(0,$.T,L.c("#010101"),!0)
b.i(0,$.a0,L.c("#E8C15E"),!0)
b.i(0,$.a_,L.c("#C7A140"),!0)
b.i(0,$.V,L.c("#1E211E"),!0)
b.i(0,$.W,L.c("#141614"),!0)
b.i(0,$.U,L.c("#0B0D0B"),!0)
b.i(0,$.R,L.c("#204020"),!0)
b.i(0,$.Z,L.c("#11200F"),!0)
b.i(0,$.Y,L.c("#192C16"),!0)
b.i(0,$.X,L.c("#121F10"),!0)
c=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],q),u)
d=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],q),u)
e=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],q),u)
f=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],q),u)
i=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],q),u)
l=P.f(H.a([new E.p($.bg,2,!0),new E.p($.bK,1,!0),new E.p($.cF,-1,!0),new E.p($.bL,-1,!0),new E.p($.an,0.01,!1)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
m=new U.ez(b,c,d,e,f," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,l,3,new H.i([h,g]),"Doom",!0,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a))
m.U(3,"Doom",!0,!1)
$.kC=m
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#993300"),!0)
m.i(0,$.Q,L.c("#BA1016"),!0)
m.i(0,$.T,L.c("#820B0F"),!0)
m.i(0,$.a0,L.c("#381B76"),!0)
m.i(0,$.a_,L.c("#1E0C47"),!0)
m.i(0,$.V,L.c("#290704"),!0)
m.i(0,$.W,L.c("#230200"),!0)
m.i(0,$.U,L.c("#110000"),!0)
m.i(0,$.R,L.c("#3D190A"),!0)
m.i(0,$.Z,L.c("#2C1207"),!0)
m.i(0,$.Y,L.c("#5C2913"),!0)
m.i(0,$.X,L.c("#4C1F0D"),!0)
n=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],q),u)
o=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],q),u)
p=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],q),u)
r=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],q),u)
l=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],q),u)
i=P.f(H.a([new E.p($.bM,2,!0),new E.p($.aI,1,!0),new E.p($.bg,-2,!0)],j),k)
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
b=new T.eg(m,n,o,p,r," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,4,new H.i([h,g]),"Blood",!0,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a))
b.U(4,"Blood",!0,!1)
$.kB=b
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#ff3399"),!0)
b.i(0,$.Q,L.c("#BD1864"),!0)
b.i(0,$.T,L.c("#780F3F"),!0)
b.i(0,$.a0,L.c("#1D572E"),!0)
b.i(0,$.a_,L.c("#11371D"),!0)
b.i(0,$.V,L.c("#4C1026"),!0)
b.i(0,$.W,L.c("#3C0D1F"),!0)
b.i(0,$.U,L.c("#260914"),!0)
b.i(0,$.R,L.c("#6B0829"),!0)
b.i(0,$.Z,L.c("#4A0818"),!0)
b.i(0,$.Y,L.c("#55142A"),!0)
b.i(0,$.X,L.c("#3D0E1E"),!0)
c=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],q),u)
d=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],q),u)
e=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],q),u)
f=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],q),u)
i=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],q),u)
l=P.f(H.a([new E.p($.bM,1,!0),new E.cW(null,1,!0)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new T.eL(b,c,d,e,f," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,l,5,new H.i([h,g]),"Heart",!0,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(5,"Heart",!0,!1)
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#3da35a"),!0)
m.i(0,$.Q,L.c("#06FFC9"),!0)
m.i(0,$.T,L.c("#04A885"),!0)
m.i(0,$.a0,L.c("#6E0E2E"),!0)
m.i(0,$.a_,L.c("#4A0818"),!0)
m.i(0,$.V,L.c("#1D572E"),!0)
m.i(0,$.W,L.c("#164524"),!0)
m.i(0,$.U,L.c("#11371D"),!0)
m.i(0,$.R,L.c("#3DA35A"),!0)
m.i(0,$.Z,L.c("#2E7A43"),!0)
m.i(0,$.Y,L.c("#3B7E4F"),!0)
m.i(0,$.X,L.c("#265133"),!0)
n=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],q),u)
o=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],q),u)
p=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],q),u)
r=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],q),u)
l=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],q),u)
i=P.f(H.a([new E.p($.bK,2,!0),new E.p($.cF,1,!0),new E.p($.bg,-2,!0)],j),k)
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new V.fy(m,n,o,p,r," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,6,new H.i([h,g]),"Mind",!0,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(6,"Mind",!0,!1)
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#ff9933"),!0)
b.i(0,$.Q,L.c("#FEFD49"),!0)
b.i(0,$.T,L.c("#FEC910"),!0)
b.i(0,$.a0,L.c("#10E0FF"),!0)
b.i(0,$.a_,L.c("#00A4BB"),!0)
b.i(0,$.V,L.c("#FA4900"),!0)
b.i(0,$.W,L.c("#E94200"),!0)
b.i(0,$.U,L.c("#C33700"),!0)
b.i(0,$.R,L.c("#FF8800"),!0)
b.i(0,$.Z,L.c("#D66E04"),!0)
b.i(0,$.Y,L.c("#E76700"),!0)
b.i(0,$.X,L.c("#CA5B00"),!0)
c=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],q),u)
d=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],q),u)
e=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],q),u)
f=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],q),u)
i=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],q),u)
l=P.f(H.a([new E.p($.c8,2,!0),new E.p($.bK,1,!0),new E.p($.aI,-1,!0),new E.p($.bL,-1,!0),new E.p($.an,0.2,!1)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new G.fg(b,c,d,e,f," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,l,7,new H.i([h,g]),"Light",!0,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(7,"Light",!0,!1)
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#000066"),!0)
m.i(0,$.Q,L.c("#0B1030"),!0)
m.i(0,$.T,L.c("#04091A"),!0)
m.i(0,$.a0,L.c("#CCC4B5"),!0)
m.i(0,$.a_,L.c("#A89F8D"),!0)
m.i(0,$.V,L.c("#00164F"),!0)
m.i(0,$.W,L.c("#00103C"),!0)
m.i(0,$.U,L.c("#00071A"),!0)
m.i(0,$.R,L.c("#033476"),!0)
m.i(0,$.Z,L.c("#02285B"),!0)
m.i(0,$.Y,L.c("#004CB2"),!0)
m.i(0,$.X,L.c("#003E91"),!0)
n=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],q),u)
o=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],q),u)
p=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],q),u)
r=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],q),u)
l=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],q),u)
i=P.f(H.a([new E.by(D.hd(),null,3,!0),new E.by(D.hd(),null,-1,!0),new E.p($.cF,-1,!0),new E.p($.an,0.2,!1)],j),k)
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new Q.hv(m,n,o,p,r," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,8,new H.i([h,g]),"Void",!0,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(8,"Void",!0,!1)
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#9900cc"),!0)
b.i(0,$.Q,L.c("#974AA7"),!0)
b.i(0,$.T,L.c("#6B347D"),!0)
b.i(0,$.a0,L.c("#3D190A"),!0)
b.i(0,$.a_,L.c("#2C1207"),!0)
b.i(0,$.V,L.c("#7C3FBA"),!0)
b.i(0,$.W,L.c("#6D34A6"),!0)
b.i(0,$.U,L.c("#592D86"),!0)
b.i(0,$.R,L.c("#381B76"),!0)
b.i(0,$.Z,L.c("#1E0C47"),!0)
b.i(0,$.Y,L.c("#281D36"),!0)
b.i(0,$.X,L.c("#1D1526"),!0)
c=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],q),u)
d=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],q),u)
e=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],q),u)
f=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],q),u)
i=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],q),u)
l=P.f(H.a([new E.p($.cG,2,!0),new E.p($.c9,1,!0),new E.p($.aI,-1,!0),new E.p($.bM,-1,!0),new E.p($.an,0.01,!1)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new E.fS(b,c,d,e,f," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",i,l,9,new H.i([h,g]),"Rage",!0,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(9,"Rage",!0,!1)
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#ffcc66"),!0)
m.i(0,$.Q,L.c("#FDF9EC"),!0)
m.i(0,$.T,L.c("#D6C794"),!0)
m.i(0,$.a0,L.c("#164524"),!0)
m.i(0,$.a_,L.c("#06280C"),!0)
m.i(0,$.V,L.c("#FFC331"),!0)
m.i(0,$.W,L.c("#F7BB2C"),!0)
m.i(0,$.U,L.c("#DBA523"),!0)
m.i(0,$.R,L.c("#FFE094"),!0)
m.i(0,$.Z,L.c("#E8C15E"),!0)
m.i(0,$.Y,L.c("#F6C54A"),!0)
m.i(0,$.X,L.c("#EDAF0C"),!0)
n=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],q),u)
o=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],q),u)
p=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],q),u)
r=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],q),u)
l=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],q),u)
i=P.f(H.a([new E.p($.aI,2,!0),new E.p($.c8,1,!0),new E.by(D.hd(),null,-2,!0)],j),k)
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new X.eN(m,n,o,p,r," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,10,new H.i([h,g]),"Hope",!0,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(10,"Hope",!0,!1)
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#494132"),!0)
b.i(0,$.Q,L.c("#76C34E"),!0)
b.i(0,$.T,L.c("#4F8234"),!0)
b.i(0,$.a0,L.c("#00164F"),!0)
b.i(0,$.a_,L.c("#00071A"),!0)
b.i(0,$.V,L.c("#605542"),!0)
b.i(0,$.W,L.c("#494132"),!0)
b.i(0,$.U,L.c("#2D271E"),!0)
b.i(0,$.R,L.c("#CCC4B5"),!0)
b.i(0,$.Z,L.c("#A89F8D"),!0)
b.i(0,$.Y,L.c("#A29989"),!0)
b.i(0,$.X,L.c("#918673"),!0)
c=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],q),u)
d=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],q),u)
e=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],q),u)
f=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],q),u)
i=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],q),u)
l=P.f(H.a([new E.p($.bL,2,!0),new E.p($.cG,1,!0),new E.p($.bg,-2,!0)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new K.ff(b,c,d,e,f," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,l,11,new H.i([h,g]),"Life",!0,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(11,"Life",!0,!1)
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#9630BF"),!0)
m.i(0,$.Q,L.c("#cc87e8"),!0)
m.i(0,$.T,L.c("#9545b7"),!0)
m.i(0,$.a0,L.c("#ae769b"),!0)
m.i(0,$.a_,L.c("#8f577c"),!0)
m.i(0,$.V,L.c("#9630bf"),!0)
m.i(0,$.W,L.c("#693773"),!0)
m.i(0,$.U,L.c("#4c2154"),!0)
m.i(0,$.R,L.c("#fcf9bd"),!0)
m.i(0,$.Z,L.c("#e0d29e"),!0)
m.i(0,$.Y,L.c("#bdb968"),!0)
m.i(0,$.X,L.c("#ab9b55"),!0)
n=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],q),u)
o=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],q),u)
p=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],q),u)
r=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],q),u)
l=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],q),u)
i=P.f(H.a([new E.p($.bg,3,!0),new E.p($.aI,-2,!0)],j),k)
f=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
f.i(0,$.S,L.c("#FF9B00"),!0)
f.i(0,$.Q,L.c("#FF9B00"),!0)
f.i(0,$.T,L.c("#FF8700"),!0)
f.i(0,$.a0,L.c("#7F7F7F"),!0)
f.i(0,$.a_,L.c("#727272"),!0)
f.i(0,$.V,L.c("#A3A3A3"),!0)
f.i(0,$.W,L.c("#999999"),!0)
f.i(0,$.U,L.c("#898989"),!0)
f.i(0,$.R,L.c("#EFEFEF"),!0)
f.i(0,$.Z,L.c("#DBDBDB"),!0)
f.i(0,$.Y,L.c("#C6C6C6"),!0)
f.i(0,$.X,L.c("#ADADAD"),!0)
e=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
d=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
b=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new Z.eA(m,n,o,p,r," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",l,i,12,new H.i([h,g]),"Dream",!1,!1,1,f,e,d,c,b,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(12,"Dream",!1,!1)
b=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
b.i(0,$.S,L.c("#003300"),!0)
b.i(0,$.Q,L.c("#383838"),!0)
b.i(0,$.T,L.c("#000000"),!0)
b.i(0,$.a0,L.c("#2b1130"),!0)
b.i(0,$.a_,L.c("#130017"),!0)
b.i(0,$.V,L.c("#eba900"),!0)
b.i(0,$.W,L.c("#c28900"),!0)
b.i(0,$.U,L.c("#855900"),!0)
b.i(0,$.R,L.c("#ffd800"),!0)
b.i(0,$.Z,L.c("#d1a900"),!0)
b.i(0,$.Y,L.c("#44244d"),!0)
b.i(0,$.X,L.c("#271128"),!0)
c=P.f(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],q),u)
d=P.f(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],q),u)
e=P.f(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],q),u)
f=P.f(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],q),u)
i=P.f(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],q),u)
l=P.f(H.a([new E.p($.bK,2,!0),new E.p($.aI,1,!0),new E.p($.c9,-2,!0),new E.p($.an,-0.1,!1)],j),k)
r=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
r.i(0,$.S,L.c("#FF9B00"),!0)
r.i(0,$.Q,L.c("#FF9B00"),!0)
r.i(0,$.T,L.c("#FF8700"),!0)
r.i(0,$.a0,L.c("#7F7F7F"),!0)
r.i(0,$.a_,L.c("#727272"),!0)
r.i(0,$.V,L.c("#A3A3A3"),!0)
r.i(0,$.W,L.c("#999999"),!0)
r.i(0,$.U,L.c("#898989"),!0)
r.i(0,$.R,L.c("#EFEFEF"),!0)
r.i(0,$.Z,L.c("#DBDBDB"),!0)
r.i(0,$.Y,L.c("#C6C6C6"),!0)
r.i(0,$.X,L.c("#ADADAD"),!0)
p=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
o=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
m=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new Q.fe(b,c,d,e,f," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",i,l,14,new H.i([h,g]),"Law",!1,!1,1,r,p,o,n,m,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(14,"Law",!1,!1)
m=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
m.i(0,$.S,L.c("#00ff00"),!0)
m.i(0,$.Q,L.c("#00ff00"),!0)
m.i(0,$.T,L.c("#00ff00"),!0)
m.i(0,$.a0,L.c("#00ff00"),!0)
m.i(0,$.a_,L.c("#00cf00"),!0)
m.i(0,$.V,L.c("#171717"),!0)
m.i(0,$.W,L.c("#080808"),!0)
m.i(0,$.U,L.c("#080808"),!0)
m.i(0,$.R,L.c("#616161"),!0)
m.i(0,$.Z,L.c("#3b3b3b"),!0)
m.i(0,$.Y,L.c("#4a4a4a"),!0)
m.i(0,$.X,L.c("#292929"),!0)
n=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],q),u)
o=P.f(H.a(["Shogun"],q),u)
p=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],q),u)
r=P.f(H.a(["Corruption"],q),u)
l=P.f(H.a([new E.p($.cG,13,!0)],j),k)
i=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
i.i(0,$.S,L.c("#FF9B00"),!0)
i.i(0,$.Q,L.c("#FF9B00"),!0)
i.i(0,$.T,L.c("#FF8700"),!0)
i.i(0,$.a0,L.c("#7F7F7F"),!0)
i.i(0,$.a_,L.c("#727272"),!0)
i.i(0,$.V,L.c("#A3A3A3"),!0)
i.i(0,$.W,L.c("#999999"),!0)
i.i(0,$.U,L.c("#898989"),!0)
i.i(0,$.R,L.c("#EFEFEF"),!0)
i.i(0,$.Z,L.c("#DBDBDB"),!0)
i.i(0,$.Y,L.c("#C6C6C6"),!0)
i.i(0,$.X,L.c("#ADADAD"),!0)
f=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
e=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
d=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
c=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new K.h0(m,n,o,p," A harsh static is heard. It is the one Corruption plays to make its presence known. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. Corrupt. Taint. Consume. Become. ",r,l,13,new H.i([h,g]),"Sauce",!1,!0,1,i,f,e,d,c,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(13,"Sauce",!1,!0)
c=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
c.i(0,$.S,L.c("#E5BB06"),!0)
c.i(0,$.Q,L.c("#FFF775"),!0)
c.i(0,$.T,L.c("#E5BB06"),!0)
c.i(0,$.a0,L.c("#508B2D"),!0)
c.i(0,$.a_,L.c("#316C0D"),!0)
c.i(0,$.V,L.c("#BF2236"),!0)
c.i(0,$.W,L.c("#A81E2F"),!0)
c.i(0,$.U,L.c("#961B2B"),!0)
c.i(0,$.R,L.c("#DD2525"),!0)
c.i(0,$.Z,L.c("#A8000A"),!0)
c.i(0,$.Y,L.c("#B8151F"),!0)
c.i(0,$.X,L.c("#8C1D1D"),!0)
d=P.f(H.a(["Puppers","Juice"],q),u)
e=P.f(H.a(["CANINE NERD","ACES HEALER/BREAKER","HUMAN KEEPER"],q),u)
f=P.f(H.a(["Juicer","Jumper","Jeiger"],q),u)
i=P.f(H.a(["Juice","Jingle","Juicey"],q),u)
l=P.f(H.a(["Purity"],q),u)
r=P.f(H.a([new E.p($.aI,2,!0),new E.p($.c8,1,!0),new E.by(D.hd(),null,-2,!0)],j),k)
t=new L.O(P.l(u,t),P.l(s,t),P.l(u,s),P.l(s,u))
t.i(0,$.S,L.c("#FF9B00"),!0)
t.i(0,$.Q,L.c("#FF9B00"),!0)
t.i(0,$.T,L.c("#FF8700"),!0)
t.i(0,$.a0,L.c("#7F7F7F"),!0)
t.i(0,$.a_,L.c("#727272"),!0)
t.i(0,$.V,L.c("#A3A3A3"),!0)
t.i(0,$.W,L.c("#999999"),!0)
t.i(0,$.U,L.c("#898989"),!0)
t.i(0,$.R,L.c("#EFEFEF"),!0)
t.i(0,$.Z,L.c("#DBDBDB"),!0)
t.i(0,$.Y,L.c("#C6C6C6"),!0)
t.i(0,$.X,L.c("#ADADAD"),!0)
s=P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),u)
p=P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],q),u)
o=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
n=P.f(H.a(["Blank","Null","Boring","Error"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
P.f(H.a(["Nothing","Errors","Glitches"],q),u)
new Z.fb(c,d,e,f,i," A soft, dragged out note is heard. It is the one Purity plays to make everything the same. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. ",l,r,15,new H.i([h,g]),"Juice",!1,!0,1,t,s,p,o,n,"A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],q),u),H.a([],j),Q.n(null,null,a)).U(15,"Juice",!1,!0)
L.kA(255,"Null",!1,!0)
u=H.a(["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],q)
n=H.a(["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],q)
o=H.a(["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],q)
p=H.a(["keen","knightly","kooky","kindred","kaos"],q)
new S.fd(u,n,o,p,"Knight",new H.i([h,g]),3,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Knight",3,!0,!1)
u=H.a(["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],q)
t=H.a(["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],q)
s=H.a(["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],q)
r=H.a(["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],q)
p=P.f(H.a([new E.p($.an,0.4,!1)],j),k)
new S.h3(u,t,s,r,p,"Seer",new H.i([h,g]),6,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Seer",6,!0,!1)
u=H.a(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],q)
t=H.a(["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],q)
s=H.a(["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],q)
r=H.a(["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],q)
new O.ef(u,t,s,r,"Bard",new H.i([h,g]),9,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Bard",9,!0,!1)
u=H.a(["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],q)
t=H.a(["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],q)
s=H.a(["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],q)
r=H.a(["home","honorable","humble","hot","horrific","hardened","havocs"],q)
new B.eM(u,t,s,r,"Heir",new H.i([h,g]),8,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Heir",8,!0,!1)
u=H.a(["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],q)
t=H.a(["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],q)
s=H.a(["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],q)
r=H.a(["meandering","motley","musing","mischievous","macabre","maiden","morose"],q)
new U.fq(u,t,s,r,"Maid",new H.i([h,g]),0,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Maid",0,!0,!1)
u=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],q)
t=H.a(["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],q)
s=H.a(["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],q)
r=H.a(["rouge","radical","retrobate","roguish","retroactive","robins","red"],q)
new N.fW(u,t,s,r,"Rogue",new H.i([h,g]),4,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Rogue",4,!0,!1)
u=H.a(["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],q)
t=H.a(["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],q)
s=H.a(["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],q)
r=H.a(["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],q)
new V.fK(u,t,s,r,2,"Page",new H.i([h,g]),1,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Page",1,!0,!1)
u=H.a(["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],q)
t=H.a(["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],q)
s=H.a(["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],q)
r=H.a(["talented","terrible","talkative","tenacious","tried","torrented"],q)
new U.hn(u,t,s,r,"Thief",new H.i([h,g]),7,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Thief",7,!0,!1)
u=H.a(["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],q)
t=H.a(["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],q)
s=H.a(["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],q)
r=H.a(["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],q)
p=P.f(H.a([new E.p($.an,0.1,!1)],j),k)
new R.hg(u,t,s,r,p,"Sylph",new H.i([h,g]),5,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Sylph",5,!0,!1)
u=H.a(["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],q)
t=H.a(["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],q)
s=H.a(["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],q)
r=H.a(["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],q)
new N.fQ(u,t,s,r,"Prince",new H.i([h,g]),10,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Prince",10,!0,!1)
u=H.a(["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],q)
t=H.a(["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],q)
s=H.a(["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],q)
r=H.a(["wondering","wonderful","wacky","withering","worldly","weighty"],q)
p=P.f(H.a([new E.p($.an,0.1,!1)],j),k)
new M.hy(u,t,s,r,p,"Witch",new H.i([h,g]),11,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Witch",11,!0,!1)
u=H.a(["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],q)
t=H.a(["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],q)
s=H.a(["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],q)
r=H.a(["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],q)
p=P.f(H.a([new E.p($.an,0.4,!1)],j),k)
new S.fp(u,t,s,r,p,"Mage",new H.i([h,g]),2,!0,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Mage",2,!0,!1)
u=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],q)
t=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],q)
s=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],q)
r=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],q)
p=P.f(H.a([new E.p($.an,3,!1),new E.p($.jQ,-2,!1)],j),k)
new E.hw(u,t,s,r,p,"Waste",new H.i([h,g]),12,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Waste",12,!1,!1)
u=H.a(["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],q)
t=H.a(["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],q)
s=H.a(["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],q)
r=H.a(["surly","sour","sweet","stylish","soaring","serene","salacious"],q)
new Y.h1(u,t,s,r,"Scout",new H.i([h,g]),13,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Scout",13,!1,!1)
u=H.a(["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],q)
t=H.a(["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],q)
s=H.a(["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],q)
r=H.a(["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],q)
p=P.f(H.a([new E.p($.an,0.5,!1)],j),k)
new L.h2(u,t,s,r,p,"Scribe",new H.i([h,g]),15,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Scribe",15,!1,!1)
u=H.a(["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],q)
t=H.a(["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],q)
s=H.a(["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],q)
r=H.a(["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],q)
p=P.f(H.a([new E.p($.an,0.5,!1)],j),k)
new E.h_(u,t,s,r,p,"Sage",new H.i([h,g]),14,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Sage",14,!1,!1)
u=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],q)
new Y.eK(u,"Guide",new H.i([h,g]),16,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Guide",16,!1,!1)
u=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],q)
t=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],q)
s=P.f(H.a([new E.p($.an,3,!1)],j),k)
new Y.eJ(u,t,s,"Grace",new H.i([h,g]),17,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Grace",17,!1,!1)
u=H.a(["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],q)
t=H.a(["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],q)
s=H.a(["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],q)
r=H.a(["magical","musing","majestic","managerial"],q)
p=P.f(H.a([new E.p($.an,0.1,!1)],j),k)
new E.fz(u,t,s,r,p,"Muse",new H.i([h,g]),18,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Muse",18,!1,!1)
u=H.a(["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],q)
t=H.a(["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],q)
s=H.a(["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],q)
r=H.a(["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],q)
p=Q.n(null,null,a)
o=P.f(H.a([new E.p($.an,0.1,!1)],j),k)
new Z.fo(u,t,s,r,p,o,"Lord",new H.i([h,g]),19,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Lord",19,!1,!1)
u=H.a(["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],q)
t=H.a(["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],q)
s=P.f(H.a([new E.p($.an,-0.1,!1),new E.p($.bg,1,!1)],j),k)
new Y.h6(u,t,s,"Smith",new H.i([h,g]),20,!1,!1,Q.n(null,null,a),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],q),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],q),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],q),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],q),H.a([],j),1).M("Smith",20,!1,!1)
T.lY("Null",255,!1,!0)
u=P.f(H.a([new E.p($.aI,1,!0),new E.p($.c8,1,!0)],j),k)
t=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],q)
s=H.a(["Lyricist","Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],q)
r=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],q)
p=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new F.fA(u,t,s,r,p,!1,o,n,m,l,1,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Music")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.bK,-2,!0)],j),k)
t=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],q)
s=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],q)
r=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],q)
p=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new S.e8(u,t,s,r,p,!1,o,n,m,l,13,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Academic")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.cG,2,!0)],j),k)
t=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],q)
s=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],q)
r=H.a(["MUSCLES HOARDER","BODY BOOSTER"],q)
p=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new M.ee(u,t,s,r,p,!1,o,n,m,l,4,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Athletic")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.cF,-1,!0),new E.p($.c8,1,!0)],j),k)
t=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],q)
s=H.a(["LaughMaster","Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],q)
r=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],q)
p=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new A.em(u,t,s,r,p,!1,o,n,m,l,0,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Comedy")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.aI,-1,!0),new E.p($.bL,-1,!0)],j),k)
t=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],q)
s=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],q)
r=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],q)
p=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new M.es(u,t,s,r,p,!1,o,n,m,l,2,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Culture")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.aI,1,!0),new E.p($.bM,1,!0)],j),k)
t=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],q)
s=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],q)
r=H.a(["BATTERBRAT","GRITTY GUARDIAN"],q)
p=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new V.ey(u,t,s,r,p,!1,o,n,m,l,8,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Domestic")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.c8,1,!0),new E.p($.bg,1,!0)],j),k)
t=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],q)
s=H.a(["Lich","Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],q)
r=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],q)
p=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new U.eE(u,t,s,r,p,!1,o,n,m,l,7,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Fantasy")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.cG,1,!0),new E.p($.bL,1,!0)],j),k)
t=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],q)
s=H.a(["Legislator","Legalist","Legislacerator","Lawman","Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],q)
r=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],q)
p=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new N.fc(u,t,s,r,p,!1,o,n,m,l,6,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Justice")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.c9,2,!0)],j),k)
t=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],q)
s=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],q)
r=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],q)
p=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new G.fO(u,t,s,r,p,!1,o,n,m,l,9,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"PopCulture")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.bM,2,!0)],j),k)
t=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],q)
s=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],q)
r=H.a(["QUESTING CUPID","ROMANCE EXPERT"],q)
p=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new Q.fX(u,t,s,r,p,!1,o,n,m,l,12,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Romantic")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.aI,2,!0)],j),k)
t=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],q)
s=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],q)
r=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],q)
p=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new N.h7(u,t,s,r,p,!1,o,n,m,l,11,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Social")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.bM,-1,!0),new E.p($.aI,-1,!0)],j),k)
t=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],q)
s=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],q)
r=H.a(["ENEMY #1","JERKWAD JOURNEYER"],q)
p=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new V.hl(u,t,s,r,p,!1,o,n,m,l,5,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Terrible")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.bK,2,!0)],j),k)
t=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],q)
s=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],q)
r=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],q)
p=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],q)
o=H.a(["nobody"],q)
n=P.f(H.a([],j),k)
m=H.a(["Nobody"],q)
l=H.a(["Nobody"],q)
u=new F.hz(u,t,s,r,p,!1,o,n,m,l,3,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Writing")
u.l()
u.m()
B.aw(u)
u=P.f(H.a([new E.p($.bg,2,!0)],j),k)
t=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],q)
s=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],q)
r=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],q)
p=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],q)
o=H.a(["nobody"],q)
k=P.f(H.a([],j),k)
j=H.a(["Nobody"],q)
n=H.a(["Nobody"],q)
u=new D.hk(u,t,s,r,p,!1,o,k,j,n,10,new H.i([h,g]),H.a(["NONE"],q),Q.n(null,null,a),"Technology")
u.l()
u.m()
B.aw(u)
B.kZ(-13,"Null","","",!0)
u=document
a0=u.querySelector("#aspects")
t=L.kF()
a1=P.cz(t,!0,H.aj(t,0))
C.c.av(a1,new X.id())
for(t=a1.length,a2=0;a2<a1.length;a1.length===t||(0,H.b3)(a1),++a2){a3=a1[a2]
a4=u.createElement("div")
a4.className="box"
s=u.createElement("div")
s.className="title"
r=s.style
q=a3.gP().n(0,$.R).aI()
r.backgroundColor=q
r=u.createElement("div")
r.className="aspectIcon"
q=W.jt()
p=a3.Q
q.src="../../images/"+p+".png"
r.appendChild(q)
s.appendChild(r)
r=u.createElement("h1")
r.className="title"
q=r.style
o=a3.gP().n(0,$.Q).aI()
q.color=o
r.textContent=p
s.appendChild(r)
a4.appendChild(s)
s=u.createElement("h3")
r=u.createElement("span")
q=a3.cx
r.className=q?"canon":"fanon"
r.textContent=q?"Canon":"Fanon"
s.appendChild(r)
s.appendChild(u.createTextNode(", id: "+a3.e))
a4.appendChild(s)
a5=u.createElement("div")
a5.className="section"
s=u.createElement("h4")
s.textContent="Properties"
a5.appendChild(s)
if(a3.gaA()){s=u.createElement("p")
s.textContent="Deadpan"
s.title="Mentally unaffected by trickster mode"
a5.appendChild(s)}if(a3.gba()){s=u.createElement("p")
s.textContent="Ultimate Deadpan"
s.title="Physically unaffected by trickster mode"
a5.appendChild(s)}s=u.createElement("p")
s.textContent="Power boost mult: "+a3.fr
a5.appendChild(s)
a4.appendChild(a5)
a4.appendChild(X.j_(a3.gA()))
a4.appendChild(X.aS("Levels",a3.gp()))
s=u.createElement("div")
s.className="section"
s.appendChild(X.aS("Names",a3.gV()))
r=u.createElement("div")
r.className="section"
q=u.createElement("p")
q.className="toggleTitle"
q.textContent=a3.gX()
r.appendChild(q)
q=u.createElement("p")
q.textContent=a3.gW()
r.appendChild(q)
s.appendChild(X.bP("Song",r))
a4.appendChild(X.bP("Denizen",s))
s=u.createElement("div")
s.className="section"
a4.appendChild(X.bP("Quests",s))
a4.appendChild(X.aS("ChumHandles",a3.gD()))
a4.appendChild(X.aS("Land Names",a3.gZ()))
a4.appendChild(X.aS("Fraymotif Names",a3.gY()))
a4.appendChild(X.bP("Palette",a3.gP().c5(p)))
a0.appendChild(a4)}a6=u.querySelector("#classes")
t=T.lZ()
a7=P.cz(t,!0,H.aj(t,0))
C.c.av(a7,new X.ie())
for(t=a7.length,a2=0;a2<a7.length;a7.length===t||(0,H.b3)(a7),++a2){a8=a7[a2]
a4=u.createElement("div")
a4.className="box"
s=u.createElement("div")
s.className="title"
r=s.style
r.backgroundColor="#CCCCCC"
r=u.createElement("div")
r.className="classIcon"
q=W.jt()
p=a8.ch
q.src="../../images/Bodies/god"+(p+1)+".png"
r.appendChild(q)
s.appendChild(r)
r=u.createElement("h1")
r.className="title"
q=r.style
q.color="#FFFFFF"
q=r.style
q.marginLeft="48px"
q=r.style
q.marginTop="19px"
q=r.style
o=(q&&C.o).bh(q,"text-shadow")
q.setProperty(o,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
r.textContent=a8.x
s.appendChild(r)
a4.appendChild(s)
s=u.createElement("h3")
r=u.createElement("span")
q=a8.cx
r.className=q?"canon":"fanon"
r.textContent=q?"Canon":"Fanon"
s.appendChild(r)
s.appendChild(u.createTextNode(", id: "+p))
a4.appendChild(s)
a5=u.createElement("div")
a5.className="section"
s=u.createElement("h4")
s.textContent="Properties"
a5.appendChild(s)
if(a8.O()){s=u.createElement("p")
s.textContent="Active"
a5.appendChild(s)}else{s=u.createElement("p")
s.textContent="Passive"
a5.appendChild(s)}if(a8.ab()){s=u.createElement("p")
s.textContent="Has interaction effect"
s.title="Affects the stats of friends or enemies."
a5.appendChild(s)}if(a8.N()){s=u.createElement("p")
s.textContent="High initial stats"
a5.appendChild(s)}s=u.createElement("p")
s.textContent="Power boost mult: "+a8.gbq()
a5.appendChild(s)
a4.appendChild(a5)
a4.appendChild(X.j_(a8.gA()))
a4.appendChild(X.aS("Levels",a8.gp()))
s=u.createElement("div")
s.className="section"
s.appendChild(X.aS("Pre-Denizen",a8.gS()))
s.appendChild(X.aS("Post-Denizen",a8.gR()))
a4.appendChild(X.bP("Quests",s))
a4.appendChild(X.aS("ChumHandles",a8.gD()))
s=u.createElement("div")
s.className="section"
r=u.createElement("p")
r.textContent="Attacker multiplier: "+H.r(a8.a_())
s.appendChild(r)
r=u.createElement("p")
r.textContent="Defender multiplier: "+H.r(a8.a0())
s.appendChild(r)
r=u.createElement("p")
r.textContent="Murderous mlultiplier: "+H.r(a8.a1())
s.appendChild(r)
a4.appendChild(X.bP("PvP Stats",s))
a6.appendChild(a4)}a9=u.querySelector("#interests")
t=B.l_()
b0=P.cz(t,!0,H.aj(t,0))
C.c.av(b0,new X.ig())
for(t=b0.length,a2=0;a2<b0.length;b0.length===t||(0,H.b3)(b0),++a2){b1=b0[a2]
a4=u.createElement("div")
a4.className="box"
s=u.createElement("div")
s.className="title"
r=s.style
r.backgroundColor="#CCCCCC"
r=u.createElement("h1")
r.className="title"
q=r.style
q.color="#FFFFFF"
q=r.style
q.marginLeft="10px"
q=r.style
q.marginTop="19px"
q=r.style
p=(q&&C.o).bh(q,"text-shadow")
q.setProperty(p,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
r.textContent=b1.ch
s.appendChild(r)
a4.appendChild(s)
s=u.createElement("h3")
s.appendChild(u.createTextNode("id: "+b1.f))
a4.appendChild(s)
a4.appendChild(X.j_(b1.gA()))
a4.appendChild(X.aS("Sub-types",b1.ga4()))
a4.appendChild(X.aS("Levels",b1.gp()))
s=u.createElement("div")
s.className="section"
s.appendChild(X.aS("First",b1.ga2()))
s.appendChild(X.aS("Second",b1.ga3()))
a4.appendChild(X.bP("ChumHandles",s))
a9.appendChild(a4)}},
j_:function(a){var u,t,s,r,q,p,o,n
u=document
t=u.createElement("div")
t.className="section"
s=u.createElement("h4")
s.textContent="Stats"
t.appendChild(s)
t.appendChild(u.createElement("table"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.b3)(a),++r){q=a[r]
p=u.createElement("tr")
o=u.createElement("td")
n=J.aK(q)
if(!!n.$icW)o.textContent="Stats from Interests"
else if(!!n.$iby){o.textContent="[Random Stat]"
o.title=q.d.k(0)}else o.textContent=H.r(q.a)
p.appendChild(o)
n=u.createElement("td")
n.className="number"
n.textContent="x "+H.r(q.b)
p.appendChild(n)
t.appendChild(p)}return t},
bP:function(a,b){var u,t,s,r,q,p
u=document
t=u.createElement("div")
t.className="toggleOuter"
s=u.createElement("div")
s.className="toggleBox"
r=s.style
r.display="none"
q=u.createElement("span")
q.className="toggleClickable"
r=u.createElement("span")
r.className="toggleTitle"
r.textContent=a
q.appendChild(r)
p=u.createElement("span")
p.className="toggleButton"
C.i.aK(p,"[+]")
W.m8(q,"click",new X.ii(s,p),!1)
q.appendChild(p)
t.appendChild(q)
s.appendChild(b)
t.appendChild(s)
return t},
aS:function(a,b){var u,t,s,r,q,p
u=document
t=u.createElement("div")
t.className="section"
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.b3)(b),++r){q=b[r]
p=u.createElement("p")
p.className="listItem"
p.textContent=J.bR(q)
t.appendChild(p)}return X.bP(a,t)},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b}},N={F:function F(){},fc:function fc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},fQ:function fQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.G=a
_.E=b
_.q=c
_.t=d
_.B=_.w=_.v=_.u=!1
_.C=!0
_.F=!1
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p},fW:function fW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.u=_.t=!1
_.v=!0
_.C=_.B=_.w=!1
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p},h7:function h7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Sonata"
_.C=f
_.F=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},ho:function ho(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.t=a
_.u=b
_.v=c
_.w=d
_.B=e
_.C="Canon"
_.F=f
_.aB=g
_.a7=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1}},E={cu:function cu(){},p:function p(a,b,c){this.a=a
this.b=b
this.c=c},by:function by(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},hL:function hL(){},fz:function fz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.v=_.u=_.t=!1
_.w=!0
_.B=!1
_.C=!0
_.F=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q},fS:function fS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B=" Aria"
_.C=f
_.F=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},h_:function h_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y1=a
_.y2=b
_.G=c
_.E=d
_.q=!1
_.t=!0
_.u=!1
_.v=!0
_.B=_.w=!1
_.C=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q},hw:function hw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.t=!1
_.u=!0
_.w=_.v=!1
_.B=!0
_.C=!1
_.F=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q}},Y={eJ:function eJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.y1=a
_.y2=b
_.G=!1
_.E=!0
_.t=_.q=!1
_.u=!0
_.v=!1
_.w=c
_.x=d
_.y=e
_.ch=f
_.cx=g
_.cy=h
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=i
_.id=j
_.k1=k
_.k2=l
_.k3=m
_.k4=n
_.r2=o},eK:function eK(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.y2=a
_.G=!0
_.u=_.t=_.q=_.E=!1
_.v=!0
_.x=b
_.y=c
_.ch=d
_.cx=e
_.cy=f
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=g
_.id=h
_.k1=i
_.k2=j
_.k3=k
_.k4=l
_.r2=m},bJ:function bJ(){},G:function G(){},aT:function aT(a){this.c=a},ag:function ag(a){this.c=a},y:function y(){},cY:function cY(){},a7:function a7(){},aH:function aH(){},ek:function ek(){},dB:function dB(){},db:function db(){},dC:function dC(){},h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.y2=a
_.G=b
_.E=c
_.q=d
_.t=!0
_.u=!1
_.v=!0
_.C=_.B=_.w=!1
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p},h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.y2=a
_.G=b
_.E=!0
_.v=_.u=_.t=_.q=!1
_.w=!0
_.B=c
_.x=d
_.y=e
_.ch=f
_.cx=g
_.cy=h
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=i
_.id=j
_.k1=k
_.k2=l
_.k3=m
_.k4=n
_.r2=o},
mr:function(a){var u,t,s,r
u=C.A.cC(a," ")
for(t=u.gT(u),s="";t.I();){r=t.gL()
s+=" "+(H.r(r.n(0,0).cM(0))+H.r(r.aL(0,1)))}return s}},B={eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.E=a
_.q=b
_.t=c
_.u=d
_.F=_.C=_.B=_.w=_.v=!1
_.aB=!0
_.x=e
_.y=f
_.ch=g
_.cx=h
_.cy=i
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=j
_.id=k
_.k1=l
_.k2=m
_.k3=n
_.k4=o
_.r2=p},
aw:function(a){var u=a.f
if($.e4().al(u))throw H.K("Duplicate aspect id for "+a.k(0)+": "+u+" is already registered for "+H.r($.e4().n(0,u))+".")
$.e4().h(0,u,a)},
l_:function(){var u=$.e4()
u=u.gaC(u)
return new H.b1(u,new B.eS(),[H.i8(u,"b0",0)])},
kZ:function(a,b,c,d,e){var u,t,s,r,q
u=[P.q]
t=H.a(["nobody"],u)
s=E.p
s=P.f(H.a([],[s]),s)
r=H.a(["Nobody"],u)
q=H.a(["Nobody"],u)
u=new B.cv(e,t,s,r,q,a,new H.i([X.m,P.D]),H.a(["NONE"],u),Q.n(null,null,A.B),b)
u.l()
u.m()
B.aw(u)
return u},
eS:function eS(){},
cv:function cv(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.ch=j}},Q={fe:function fe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.t=a
_.u=b
_.v=c
_.w=d
_.B=e
_.C="Dirge"
_.F=f
_.a7=_.K=!0
_.aV=g
_.aW=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Silence"
_.C=f
_.F=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},
n:function(a,b,c){var u,t,s
u=new Q.hx([c])
u.a=a
t=[[Q.cJ,c]]
if(b==null)u.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
u.b=H.a(s,t)}return u},
cK:function cK(){},
hx:function hx(a){this.a=this.b=null
this.$ti=a},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dZ:function dZ(){}},K={ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Lament"
_.C=f
_.ag=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},h0:function h0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0){var _=this
_.aX=a
_.aY=b
_.aZ=c
_.b_=d
_.b0=" Cacophony"
_.b1=e
_.b2=f
_.c9=g
_.e=h
_.f=i
_.Q=j
_.cx=k
_.cy=l
_.dx=_.db=!1
_.fr=m
_.fx=n
_.fy=o
_.go=p
_.id=q
_.k1=r
_.k4="Song"
_.r1=s
_.r2=t
_.rx=u
_.x1=a0}},G={fg:function fg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1){var _=this
_.q=a
_.t=b
_.u=c
_.v=d
_.w=e
_.B="Opera"
_.C=f
_.F=g
_.K=h
_.e=i
_.f=j
_.Q=k
_.cx=l
_.cy=m
_.dx=_.db=!1
_.fr=n
_.fx=o
_.fy=p
_.go=q
_.id=r
_.k1=s
_.k4="Song"
_.r1=t
_.r2=u
_.rx=a0
_.x1=a1},fO:function fO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},
kL:function(a){var u,t,s,r,q,p,o,n
u=G.C
t=P.ds(a,u)
s=P.c6(u)
r=H.a([],[G.cX])
for(u=G.ly(),q=J.b5(u.a),u=new H.dK(q,u.b);u.I();){p=q.gL()
if(p.ct(t))r.push(p)}C.c.bt(r)
for(u=r.length,o=0;o<r.length;r.length===u||(0,H.b3)(r),++o){n=r[o]
if(n.ct(t)){s.j(0,n)
for(q=n.gbv(),q=q.gT(q);q.I();)t.ai(0,q.gL())}}if(t.a!==0)s.a9(0,t)
return s},
ly:function(){var u=$.kd()
u.toString
return new H.b1(u,new G.f2(),[H.aj(u,0)])},
C:function C(){},
cX:function cX(){},
f2:function f2(){}},F={fA:function fA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},fB:function fB(){},eu:function eu(){},hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o}},R={
lU:function(a){var u,t
if(a.gH(a).an(0,1)){a.n(0,1)
a.n(0,1)
u=!0}else u=!1
t=a.n(0,0)
t.gcB(t).gcL().cE("checking for two players, ps is "+H.r(a)+", ret is "+u)
return u},
lJ:function(a){a.gah(a).gaU()
return!1},
lT:function(a){a.gah(a).gaU()
return!1},
lS:function(a){return a.gah(a).gaz().gcK()},
lQ:function(a){return a.gah(a).gaz().gcI()},
lP:function(a){return a.gah(a).gaz().gcH()},
lM:function(a){return a.gah(a).gaz().gcF()},
lO:function(a){return a.gah(a).gaz().gcG()},
lR:function(a){return a.gah(a).gaz().gcJ()},
lN:function(a){var u=a.gah(a)
u.gaU()
u.gaU()
return!1},
lK:function(a){return!0},
lL:function(a){a.gah(a).gcD()
return!1},
A:function(a,b,c,d){return new R.fP(a,null)},
x:function(a,b,c,d){return new R.ev(a,null)},
J:function(a,b,c,d){return new R.dD(a,null)},
fR:function fR(){},
fP:function fP(a,b){this.c=a
this.b=b},
ev:function ev(a,b){this.c=a
this.b=b},
dD:function dD(a,b){this.c=a
this.b=b},
a6:function a6(a,b){this.c=a
this.b=b},
hg:function hg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.y1=a
_.y2=b
_.G=c
_.E=d
_.u=_.t=_.q=!1
_.v=!0
_.B=_.w=!1
_.C=e
_.x=f
_.y=g
_.ch=h
_.cx=i
_.cy=j
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=!1
_.go=k
_.id=l
_.k1=m
_.k2=n
_.k3=o
_.k4=p
_.r2=q}},D={hk:function hk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cx=a
_.cy=b
_.db=c
_.dx=d
_.dy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.y=n
_.ch=o},
m2:function(){var u,t,s,r
if($.jR)return
$.jR=!0
$.jQ=D.bf("Experience","learned","na\xefve",1,1,!1,!0,!1)
D.bf("Grist Level","rich","poor",1,1,!1,!1,!1)
$.cG=D.jV("Power","strong","weak",0.03,0.5,10)
$.bL=D.jV("Health","sturdy","fragile",0.04,1,10)
D.bf("Current Health","healthy","infirm",1,1,!1,!0,!0)
$.c9=D.bf("Mobility","fast","slow",1,1,!0,!0,!1)
u=new D.fV("Relationships",!1)
$.cU().push(u)
$.bM=u
$.aI=D.bf("Sanity","calm","crazy",1,1,!0,!0,!1)
$.bK=D.bf("Free Will","willful","gullible",1,1,!0,!0,!1)
$.c8=D.bf("Maximum Luck","lucky","unlucky",1,1,!0,!0,!1)
$.cF=D.bf("Minimum Luck","lucky","unlucky",1,1,!0,!0,!1)
$.bg=D.bf("Alchemy","creative","boring",1,1,!0,!0,!1)
$.an=D.bf("SBURB Lore","woke","clueless",1,1,!1,!0,!1)
u=$.cU()
t=P.q
s=D.bv
r=P.jK(t,s)
P.lE(r,u,new D.hb(),new D.hc())
H.kM(r,t,s)},
hd:function(){var u=$.cU()
return new H.b1(u,new D.he(),[H.aj(u,0)])},
bf:function(a,b,c,d,e,f,g,h){var u=new D.bv(a,f)
$.cU().push(u)
return u},
jV:function(a,b,c,d,e,f){var u=new D.hA(a,!0)
$.cU().push(u)
return u},
hb:function hb(){},
hc:function hc(){},
he:function he(){},
bv:function bv(a,b){this.a=a
this.d=b},
hA:function hA(a,b){this.a=a
this.d=b},
fV:function fV(a,b){this.a=a
this.d=b}}
var w=[C,H,J,P,W,S,L,M,O,T,A,V,U,Z,X,N,E,Y,B,Q,K,G,F,R,D]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iO.prototype={}
J.aO.prototype={
aq:function(a,b){return a===b},
ga5:function(a){return H.cA(a)},
k:function(a){return"Instance of '"+H.dE(a)+"'"}}
J.f7.prototype={
k:function(a){return String(a)},
ga5:function(a){return a?519018:218159},
$ibw:1}
J.dp.prototype={
aq:function(a,b){return null==b},
k:function(a){return"null"},
ga5:function(a){return 0},
$ibd:1}
J.dr.prototype={
ga5:function(a){return 0},
k:function(a){return String(a)}}
J.fN.prototype={}
J.bN.prototype={}
J.bG.prototype={
k:function(a){var u=a[$.kc()]
if(u==null)return this.bz(a)
return"JavaScript function for "+H.r(J.bR(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bE.prototype={
j:function(a,b){if(!!a.fixed$length)H.cf(P.bj("add"))
a.push(b)},
am:function(a,b){if(b<0||b>=a.length)return H.af(a,b)
return a[b]},
bo:function(a,b){var u,t
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.K(P.bB(a))}return!1},
av:function(a,b){if(!!a.immutable$list)H.cf(P.bj("sort"))
H.m1(a,b==null?J.me():b)},
bt:function(a){return this.av(a,null)},
a6:function(a,b){var u
for(u=0;u<a.length;++u)if(J.bx(a[u],b))return!0
return!1},
k:function(a){return P.f5(a,"[","]")},
gT:function(a){return new J.eb(a,a.length,0)},
ga5:function(a){return H.cA(a)},
gH:function(a){return a.length},
n:function(a,b){if(b>=a.length||b<0)throw H.K(H.cP(a,b))
return a[b]},
h:function(a,b,c){if(!!a.immutable$list)H.cf(P.bj("indexed set"))
if(b>=a.length||b<0)throw H.K(H.cP(a,b))
a[b]=c},
$iak:1,
$iaG:1}
J.iN.prototype={}
J.eb.prototype={
gL:function(){return this.d},
I:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.K(H.b3(u))
s=this.c
if(s>=t){this.d=null
return!1}this.d=u[s]
this.c=s+1
return!0}}
J.c5.prototype={
af:function(a,b){var u
if(typeof b!=="number")throw H.K(H.cd(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb6(b)
if(this.gb6(a)===u)return 0
if(this.gb6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb6:function(a){return a===0?1/a<0:a<0},
cm:function(a,b){return a%b},
cb:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.K(P.bj(""+a+".floor()"))},
b9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.K(P.bj(""+a+".round()"))},
ak:function(a,b,c){if(C.a.af(b,c)>0)throw H.K(H.cd(b))
if(this.af(a,b)<0)return b
if(this.af(a,c)>0)return c
return a},
cs:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.K(P.fU(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.c1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.cf(P.bj("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.af(t,1)
u=t[1]
if(3>=s)return H.af(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.aD("0",r)},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga5:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
ae:function(a,b){if(typeof b!=="number")throw H.K(H.cd(b))
return a+b},
aD:function(a,b){return a*b},
a8:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.K(P.bj("Result of truncating division is "+H.r(u)+": "+H.r(a)+" ~/ "+b))},
bU:function(a,b){var u
if(a>0)u=this.bT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
bT:function(a,b){return b>31?0:a>>>b},
an:function(a,b){if(typeof b!=="number")throw H.K(H.cd(b))
return a>b},
$icR:1}
J.dn.prototype={$iaX:1}
J.f8.prototype={}
J.bF.prototype={
c1:function(a,b){if(b<0)throw H.K(H.cP(a,b))
if(b>=a.length)H.cf(H.cP(a,b))
return a.charCodeAt(b)},
bi:function(a,b){if(b>=a.length)throw H.K(H.cP(a,b))
return a.charCodeAt(b)},
ae:function(a,b){if(typeof b!=="string")throw H.K(P.j7(b,null,null))
return a+b},
bd:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
bw:function(a,b,c){c=a.length
if(b>c)throw H.K(P.iS(b,null))
if(c>c)throw H.K(P.iS(c,null))
return a.substring(b,c)},
aL:function(a,b){return this.bw(a,b,null)},
cr:function(a){return a.toLowerCase()},
aD:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.K(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ci:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.aD(c,u)+a},
c3:function(a,b,c){if(c>a.length)throw H.K(P.fU(c,0,a.length,null,null))
return H.mM(a,b,c)},
af:function(a,b){var u
if(typeof b!=="string")throw H.K(H.cd(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
k:function(a){return a},
ga5:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gH:function(a){return a.length},
$iq:1}
H.ak.prototype={}
H.dt.prototype={
gT:function(a){return new H.du(this,this.gH(this),0)},
aJ:function(a,b){return this.by(0,b)}}
H.du.prototype={
gL:function(){return this.d},
I:function(){var u,t,s,r
u=this.a
t=J.cQ(u)
s=t.gH(u)
if(this.b!==s)throw H.K(P.bB(u))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t.am(u,r);++this.c
return!0}}
H.dw.prototype={
gT:function(a){return new H.dx(J.b5(this.a),this.b)},
gH:function(a){return J.bQ(this.a)},
$ab0:function(a,b){return[b]}}
H.eB.prototype={$iak:1,
$aak:function(a,b){return[b]}}
H.dx.prototype={
I:function(){var u=this.b
if(u.I()){this.a=this.c.$1(u.gL())
return!0}this.a=null
return!1},
gL:function(){return this.a}}
H.fw.prototype={
gH:function(a){return J.bQ(this.a)},
am:function(a,b){return this.b.$1(J.kv(this.a,b))},
$aak:function(a,b){return[b]},
$adt:function(a,b){return[b]},
$ab0:function(a,b){return[b]}}
H.b1.prototype={
gT:function(a){return new H.dK(J.b5(this.a),this.b)}}
H.dK.prototype={
I:function(){var u,t
for(u=this.a,t=this.b;u.I();)if(t.$1(u.gL()))return!0
return!1},
gL:function(){return this.a.gL()}}
H.ep.prototype={}
H.eo.prototype={
k:function(a){return P.fs(this)}}
H.cZ.prototype={
gH:function(a){return this.a},
bk:function(a){return this.b[a]},
au:function(a,b){var u,t,s,r
u=this.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,this.bk(r))}}}
H.eq.prototype={
bk:function(a){return"__proto__"===a?this.d:this.b[a]}}
H.hp.prototype={
ad:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.fF.prototype={
k:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.r(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fa.prototype={
k:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.r(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.r(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.r(this.a)+")"}}
H.hs.prototype={
k:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ik.prototype={
$1:function(a){if(!!J.aK(a).$ibU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:2}
H.dW.prototype={
k:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u}}
H.cj.prototype={
k:function(a){return"Closure '"+H.dE(this).trim()+"'"},
gcu:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hj.prototype={}
H.ha.prototype={
k:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ij(u)+"'"}}
H.ch.prototype={
aq:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga5:function(a){var u,t
u=this.c
if(u==null)t=H.cA(this.a)
else t=typeof u!=="object"?J.e7(u):H.cA(u)
return(t^H.cA(this.b))>>>0},
k:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.r(this.d)+"' of "+("Instance of '"+H.dE(u)+"'")}}
H.fY.prototype={
k:function(a){return"RuntimeError: "+H.r(this.a)}}
H.ca.prototype={
gaH:function(){var u=this.b
if(u==null){u=H.mL(this.a)
this.b=u}return u},
k:function(a){return this.gaH()},
ga5:function(a){var u=this.d
if(u==null){u=C.b.ga5(this.gaH())
this.d=u}return u},
aq:function(a,b){if(b==null)return!1
return b instanceof H.ca&&this.gaH()===b.gaH()}}
H.i.prototype={
gH:function(a){return this.a},
gb5:function(a){return this.a===0},
gac:function(){return new H.fi(this,[H.aj(this,0)])},
gaC:function(a){return H.jL(this.gac(),new H.f9(this),H.aj(this,0),H.aj(this,1))},
al:function(a){var u
if((a&0x3ffffff)===a){u=this.c
if(u==null)return!1
return this.bL(u,a)}else return this.cd(a)},
cd:function(a){var u=this.d
if(u==null)return!1
return this.b4(this.aQ(u,this.b3(a)),a)>=0},
n:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aF(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aF(r,b)
s=t==null?null:t.b
return s}else return this.ce(b)},
ce:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aQ(u,this.b3(a))
s=this.b4(t,a)
if(s<0)return
return t[s].b},
h:function(a,b,c){var u,t
if(typeof b==="string"){u=this.b
if(u==null){u=this.aR()
this.b=u}this.be(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aR()
this.c=t}this.be(t,b,c)}else this.cf(b,c)},
cf:function(a,b){var u,t,s,r
u=this.d
if(u==null){u=this.aR()
this.d=u}t=this.b3(a)
s=this.aQ(u,t)
if(s==null)this.aT(u,t,[this.aN(a,b)])
else{r=this.b4(s,a)
if(r>=0)s[r].b=b
else s.push(this.aN(a,b))}},
au:function(a,b){var u,t
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.K(P.bB(this))
u=u.c}},
be:function(a,b,c){var u=this.aF(a,b)
if(u==null)this.aT(a,b,this.aN(b,c))
else u.b=c},
bG:function(){this.r=this.r+1&67108863},
aN:function(a,b){var u,t
u=new H.fh(a,b)
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.bG()
return u},
b3:function(a){return J.e7(a)&0x3ffffff},
b4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.bx(a[t].a,b))return t
return-1},
k:function(a){return P.fs(this)},
aF:function(a,b){return a[b]},
aQ:function(a,b){return a[b]},
aT:function(a,b,c){a[b]=c},
bM:function(a,b){delete a[b]},
bL:function(a,b){return this.aF(a,b)!=null},
aR:function(){var u=Object.create(null)
this.aT(u,"<non-identifier-key>",u)
this.bM(u,"<non-identifier-key>")
return u}}
H.f9.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aj(u,1),args:[H.aj(u,0)]}}}
H.fh.prototype={}
H.fi.prototype={
gH:function(a){return this.a.a},
gT:function(a){var u,t
u=this.a
t=new H.fj(u,u.r)
t.c=u.e
return t}}
H.fj.prototype={
gL:function(){return this.d},
I:function(){var u=this.a
if(this.b!==u.r)throw H.K(P.bB(u))
else{u=this.c
if(u==null){this.d=null
return!1}else{this.d=u.a
this.c=u.c
return!0}}}}
H.i9.prototype={
$1:function(a){return this.a(a)},
$S:2}
H.ia.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ib.prototype={
$1:function(a){return this.a(a)}}
P.hC.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:5}
P.hB.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hD.prototype={
$0:function(){this.a.$0()}}
P.hE.prototype={
$0:function(){this.a.$0()}}
P.i0.prototype={
bF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.e1(new P.i1(this,b),0),a)
else throw H.K(P.bj("`setTimeout()` not found."))}}
P.i1.prototype={
$0:function(){this.b.$0()}}
P.dN.prototype={}
P.hf.prototype={}
P.i4.prototype={}
P.i5.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dA()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.K(u)
s=H.K(u)
s.stack=t.k(0)
throw s}}
P.hS.prototype={
co:function(a,b){var u,t,s
try{if(C.e===$.dM){a.$1(b)
return}P.mj(null,null,this,a,b)}catch(s){u=H.cT(s)
t=H.my(s)
P.mi(null,null,this,u,t)}},
cp:function(a,b){return this.co(a,b,null)},
c_:function(a,b){return new P.hT(this,a,b)}}
P.hT.prototype={
$1:function(a){return this.a.cp(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hM.prototype={
gH:function(a){return this.a},
gac:function(){return new P.cL(this,[H.aj(this,0)])},
gaC:function(a){var u=H.aj(this,0)
return H.jL(new P.cL(this,[u]),new P.hO(this),u,H.aj(this,1))},
al:function(a){var u,t
if(typeof a==="string"&&a!=="__proto__"){u=this.b
return u==null?!1:u[a]!=null}else if(typeof a==="number"&&(a&1073741823)===a){t=this.c
return t==null?!1:t[a]!=null}else return this.bK(a)},
bK:function(a){var u=this.d
if(u==null)return!1
return this.ao(this.ax(u,a),a)>=0},
n:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.iT(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.iT(s,b)
return t}else return this.bN(b)},
bN:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ax(u,a)
s=this.ao(t,a)
return s<0?null:t[s+1]},
h:function(a,b,c){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iU()
this.b=u}this.bg(u,b,c)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iU()
this.c=t}this.bg(t,b,c)}else this.bS(b,c)},
bS:function(a,b){var u,t,s,r
u=this.d
if(u==null){u=P.iU()
this.d=u}t=this.aw(a)
s=u[t]
if(s==null){P.iV(u,t,[a,b]);++this.a
this.e=null}else{r=this.ao(s,a)
if(r>=0)s[r+1]=b
else{s.push(a,b);++this.a
this.e=null}}},
ai:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aG(this.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return this.aG(this.c,b)
else return this.bP(b)},
bP:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ax(u,a)
s=this.ao(t,a)
if(s<0)return;--this.a
this.e=null
return t.splice(s,2)[1]},
au:function(a,b){var u,t,s,r
u=this.bj()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,this.n(0,r))
if(u!==this.e)throw H.K(P.bB(this))}},
bj:function(){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.e
if(u!=null)return u
t=new Array(this.a)
t.fixed$length=Array
s=this.b
if(s!=null){r=Object.getOwnPropertyNames(s)
q=r.length
for(p=0,o=0;o<q;++o){t[p]=r[o];++p}}else p=0
n=this.c
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(o=0;o<q;++o){t[p]=+r[o];++p}}m=this.d
if(m!=null){r=Object.getOwnPropertyNames(m)
q=r.length
for(o=0;o<q;++o){l=m[r[o]]
k=l.length
for(j=0;j<k;j+=2){t[p]=l[j];++p}}}this.e=t
return t},
bg:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.iV(a,b,c)},
aG:function(a,b){var u
if(a!=null&&a[b]!=null){u=P.iT(a,b)
delete a[b];--this.a
this.e=null
return u}else return},
aw:function(a){return J.e7(a)&1073741823},
ax:function(a,b){return a[this.aw(b)]},
ao:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2)if(J.bx(a[t],b))return t
return-1}}
P.hO.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aj(u,1),args:[H.aj(u,0)]}}}
P.cL.prototype={
gH:function(a){return this.a.a},
gT:function(a){var u=this.a
return new P.hN(u,u.bj())}}
P.hN.prototype={
gL:function(){return this.d},
I:function(){var u,t,s
u=this.b
t=this.c
s=this.a
if(u!==s.e)throw H.K(P.bB(s))
else if(t>=u.length){this.d=null
return!1}else{this.d=u[t]
this.c=t+1
return!0}}}
P.hP.prototype={
gT:function(a){var u=new P.dP(this,this.r)
u.c=this.e
return u},
gH:function(a){return this.a},
a6:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.bJ(b)
return t}},
bJ:function(a){var u=this.d
if(u==null)return!1
return this.ao(this.ax(u,a),a)>=0},
j:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iW()
this.b=u}return this.bf(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iW()
this.c=t}return this.bf(t,b)}else return this.bH(b)},
bH:function(a){var u,t,s
u=this.d
if(u==null){u=P.iW()
this.d=u}t=this.aw(a)
s=u[t]
if(s==null)u[t]=[this.aS(a)]
else{if(this.ao(s,a)>=0)return!1
s.push(this.aS(a))}return!0},
ai:function(a,b){var u=this.aG(this.b,b)
return u},
bf:function(a,b){if(a[b]!=null)return!1
a[b]=this.aS(b)
return!0},
aG:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bX(u)
delete a[b]
return!0},
bm:function(){this.r=1073741823&this.r+1},
aS:function(a){var u,t
u=new P.hQ(a)
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bm()
return u},
bX:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bm()},
aw:function(a){return J.e7(a)&1073741823},
ax:function(a,b){return a[this.aw(b)]},
ao:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.bx(a[t].a,b))return t
return-1}}
P.hQ.prototype={}
P.dP.prototype={
gL:function(){return this.d},
I:function(){var u=this.a
if(this.b!==u.r)throw H.K(P.bB(u))
else{u=this.c
if(u==null){this.d=null
return!1}else{this.d=u.a
this.c=u.b
return!0}}}}
P.dm.prototype={
gH:function(a){var u,t
u=this.gT(this)
for(t=0;u.I();)++t
return t},
k:function(a){return P.jJ(this,"(",")")}}
P.fl.prototype={
$2:function(a,b){this.a.h(0,a,b)},
$S:3}
P.fm.prototype={$iak:1,$iaG:1}
P.bc.prototype={
gT:function(a){return new H.du(a,this.gH(a),0)},
am:function(a,b){return this.n(a,b)},
k:function(a){return P.f5(a,"[","]")}}
P.fr.prototype={}
P.ft.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.r(a)
u.a=t+": "
u.a+=H.r(b)},
$S:3}
P.dv.prototype={
au:function(a,b){var u,t
for(u=J.b5(this.gac());u.I();){t=u.gL()
b.$2(t,this.n(0,t))}},
gH:function(a){return J.bQ(this.gac())},
k:function(a){return P.fs(this)}}
P.i2.prototype={}
P.fv.prototype={
gH:function(a){var u=this.a
return u.gH(u)},
k:function(a){return P.fs(this.a)}}
P.ht.prototype={}
P.hV.prototype={
a9:function(a,b){var u
for(u=J.b5(b);u.I();)this.j(0,u.gL())},
k:function(a){return P.f5(this,"{","}")},
$iak:1}
P.dQ.prototype={}
P.dX.prototype={}
P.bw.prototype={}
P.D.prototype={}
P.bU.prototype={}
P.dA.prototype={
k:function(a){return"Throw of null."}}
P.bk.prototype={
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
k:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaP()+t+s
if(!this.a)return r
q=this.gaO()
p=P.jk(this.b)
return r+q+": "+p},
gJ:function(a){return this.c}}
P.cB.prototype={
gaP:function(){return"RangeError"},
gaO:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.r(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.r(u)
else if(s>u)t=": Not in range "+H.r(u)+".."+H.r(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.r(u)}return t}}
P.eP.prototype={
gaP:function(){return"RangeError"},
gaO:function(){var u,t
u=this.b
if(typeof u!=="number")return u.ar()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.r(t)},
gH:function(a){return this.f}}
P.hu.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hr.prototype={
k:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cE.prototype={
k:function(a){return"Bad state: "+this.a}}
P.en.prototype={
k:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jk(u)+"."}}
P.fH.prototype={
k:function(a){return"Out of Memory"},
$ibU:1}
P.dI.prototype={
k:function(a){return"Stack Overflow"},
$ibU:1}
P.et.prototype={
k:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.hK.prototype={
k:function(a){return"Exception: "+this.a}}
P.dc.prototype={}
P.aX.prototype={}
P.b0.prototype={
aJ:function(a,b){return new H.b1(this,b,[H.i8(this,"b0",0)])},
gH:function(a){var u,t
u=this.gT(this)
for(t=0;u.I();)++t
return t},
gas:function(a){var u,t
u=this.gT(this)
if(!u.I())throw H.K(H.lz())
t=u.gL()
if(u.I())throw H.K(H.lA())
return t},
am:function(a,b){var u,t,s
P.lW(b,"index")
for(u=this.gT(this),t=0;u.I();){s=u.gL()
if(b===t)return s;++t}throw H.K(P.eQ(b,this,"index",null,t))},
k:function(a){return P.jJ(this,"(",")")}}
P.f6.prototype={}
P.aG.prototype={$iak:1}
P.bd.prototype={
ga5:function(a){return P.as.prototype.ga5.call(this,this)},
k:function(a){return"null"}}
P.cR.prototype={}
P.as.prototype={constructor:P.as,$ias:1,
aq:function(a,b){return this===b},
ga5:function(a){return H.cA(this)},
k:function(a){return"Instance of '"+H.dE(this)+"'"},
toString:function(){return this.k(this)}}
P.q.prototype={}
P.cH.prototype={
gH:function(a){return this.a.length},
k:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.H.prototype={}
W.e9.prototype={
k:function(a){return String(a)}}
W.ea.prototype={
k:function(a){return String(a)}}
W.bS.prototype={$ibS:1}
W.ej.prototype={
gJ:function(a){return a.name}}
W.bz.prototype={
gH:function(a){return a.length}}
W.bT.prototype={
bh:function(a,b){var u,t
u=$.kb()
t=u[b]
if(typeof t==="string")return t
t=this.bV(a,b)
u[b]=t
return t},
bV:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.kN()+b
if(u in a)return u
return b},
gH:function(a){return a.length}}
W.er.prototype={}
W.ew.prototype={
gJ:function(a){return a.name}}
W.ex.prototype={
gJ:function(a){var u=a.name
if(P.jh()&&u==="SECURITY_ERR")return"SecurityError"
if(P.jh()&&u==="SYNTAX_ERR")return"SyntaxError"
return u},
k:function(a){return String(a)}}
W.b7.prototype={
gbZ:function(a){return new W.hH(a)},
k:function(a){return a.localName},
aa:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jj
if(u==null){u=H.a([],[W.bt])
t=new W.dz(u)
u.push(W.jW(null))
u.push(W.jY())
$.jj=t
d=t}else d=u
u=$.ji
if(u==null){u=new W.dY(d)
$.ji=u
c=u}else{u.a=d
c=u}}if($.bl==null){u=document
t=u.implementation.createHTMLDocument("")
$.bl=t
$.ir=t.createRange()
s=$.bl.createElement("base")
s.href=u.baseURI
$.bl.head.appendChild(s)}u=$.bl
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.bl
if(!!this.$ibS)r=u.body
else{r=u.createElement(a.tagName)
$.bl.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.c.a6(C.D,a.tagName)){$.ir.selectNodeContents(r)
q=$.ir.createContextualFragment(b)}else{r.innerHTML=b
q=$.bl.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.bl.body
if(r==null?u!=null:r!==u)J.j6(r)
c.bc(q)
document.adoptNode(q)
return q},
c4:function(a,b,c){return this.aa(a,b,c,null)},
aK:function(a,b){a.textContent=null
a.appendChild(this.aa(a,b,null,null))},
$ib7:1,
gcq:function(a){return a.tagName}}
W.eC.prototype={
$1:function(a){return!!J.aK(a).$ib7}}
W.eD.prototype={
gJ:function(a){return a.name}}
W.u.prototype={$iu:1}
W.d_.prototype={
bI:function(a,b,c,d){return a.addEventListener(b,H.e1(c,1),!1)}}
W.eH.prototype={
gJ:function(a){return a.name}}
W.eI.prototype={
gH:function(a){return a.length},
gJ:function(a){return a.name}}
W.eO.prototype={
gJ:function(a){return a.name}}
W.eR.prototype={
gJ:function(a){return a.name}}
W.fn.prototype={
k:function(a){return String(a)}}
W.fu.prototype={
gJ:function(a){return a.name}}
W.fx.prototype={
gJ:function(a){return a.name}}
W.bH.prototype={$ibH:1}
W.fC.prototype={
gJ:function(a){return a.name}}
W.aJ.prototype={
gas:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.K(P.jP("No elements"))
if(t>1)throw H.K(P.jP("More than one element"))
return u.firstChild},
a9:function(a,b){var u,t,s,r
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
h:function(a,b,c){var u,t
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.af(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.da(u,u.length,-1)},
gH:function(a){return this.a.childNodes.length},
n:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.af(u,b)
return u[b]},
$aak:function(){return[W.aa]},
$abc:function(){return[W.aa]},
$aaG:function(){return[W.aa]}}
W.aa.prototype={
cn:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k:function(a){var u=a.nodeValue
return u==null?this.bx(a):u},
$iaa:1}
W.dy.prototype={
gH:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.K(P.eQ(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.K(P.bj("Cannot assign element of immutable List."))},
am:function(a,b){if(b<0||b>=a.length)return H.af(a,b)
return a[b]},
$iak:1,
$aak:function(){return[W.aa]},
$idq:1,
$adq:function(){return[W.aa]},
$abc:function(){return[W.aa]},
$iaG:1,
$aaG:function(){return[W.aa]}}
W.fG.prototype={
gJ:function(a){return a.name}}
W.fI.prototype={
gJ:function(a){return a.name}}
W.fJ.prototype={
gJ:function(a){return a.name}}
W.fM.prototype={
gJ:function(a){return a.name}}
W.h4.prototype={
gH:function(a){return a.length},
gJ:function(a){return a.name}}
W.h5.prototype={
gJ:function(a){return a.name}}
W.dH.prototype={}
W.h9.prototype={
gJ:function(a){return a.name}}
W.dJ.prototype={
aa:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
u=W.kO("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aJ(t).a9(0,new W.aJ(u))
return t}}
W.hh.prototype={
aa:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.aJ(u)
s=u.gas(u)
s.toString
u=new W.aJ(s)
r=u.gas(u)
t.toString
r.toString
new W.aJ(t).a9(0,new W.aJ(r))
return t}}
W.hi.prototype={
aa:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.aJ(u)
s=u.gas(u)
t.toString
s.toString
new W.aJ(t).a9(0,new W.aJ(s))
return t}}
W.cI.prototype={$icI:1}
W.hm.prototype={
gJ:function(a){return a.name}}
W.bi.prototype={}
W.dL.prototype={
gJ:function(a){return a.name}}
W.hF.prototype={
gJ:function(a){return a.name}}
W.dR.prototype={
gH:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.K(P.eQ(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.K(P.bj("Cannot assign element of immutable List."))},
am:function(a,b){if(b<0||b>=a.length)return H.af(a,b)
return a[b]},
$iak:1,
$aak:function(){return[W.aa]},
$idq:1,
$adq:function(){return[W.aa]},
$abc:function(){return[W.aa]},
$iaG:1,
$aaG:function(){return[W.aa]}}
W.hG.prototype={
au:function(a,b){var u,t,s,r,q
for(u=this.gac(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.b3)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gac:function(){var u,t,s,r,q
u=this.a.attributes
t=H.a([],[P.q])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.af(u,r)
q=u[r]
if(q.namespaceURI==null)t.push(q.name)}return t},
$adv:function(){return[P.q,P.q]}}
W.hH.prototype={
n:function(a,b){return this.a.getAttribute(b)},
gH:function(a){return this.gac().length}}
W.hI.prototype={}
W.hJ.prototype={
$1:function(a){return this.a.$1(a)}}
W.cM.prototype={
bC:function(a){var u,t
u=$.j5()
if(u.gb5(u)){for(t=0;t<262;++t)u.h(0,C.C[t],W.mA())
for(t=0;t<12;++t)u.h(0,C.h[t],W.mB())}},
at:function(a){return $.kq().a6(0,W.ck(a))},
aj:function(a,b,c){var u,t,s
u=W.ck(a)
t=$.j5()
s=t.n(0,H.r(u)+"::"+b)
if(s==null)s=t.n(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ibt:1}
W.dd.prototype={
gT:function(a){return new W.da(a,this.gH(a),-1)}}
W.dz.prototype={
at:function(a){return C.c.bo(this.a,new W.fE(a))},
aj:function(a,b,c){return C.c.bo(this.a,new W.fD(a,b,c))},
$ibt:1}
W.fE.prototype={
$1:function(a){return a.at(this.a)}}
W.fD.prototype={
$1:function(a){return a.aj(this.a,this.b,this.c)}}
W.dV.prototype={
bE:function(a,b,c,d){var u,t,s
this.a.a9(0,c)
u=b.aJ(0,new W.hW())
t=b.aJ(0,new W.hX())
this.b.a9(0,u)
s=this.c
s.a9(0,C.E)
s.a9(0,t)},
at:function(a){return this.a.a6(0,W.ck(a))},
aj:function(a,b,c){var u,t
u=W.ck(a)
t=this.c
if(t.a6(0,H.r(u)+"::"+b))return this.d.bY(c)
else if(t.a6(0,"*::"+b))return this.d.bY(c)
else{t=this.b
if(t.a6(0,H.r(u)+"::"+b))return!0
else if(t.a6(0,"*::"+b))return!0
else if(t.a6(0,H.r(u)+"::*"))return!0
else if(t.a6(0,"*::*"))return!0}return!1},
$ibt:1}
W.hW.prototype={
$1:function(a){return!C.c.a6(C.h,a)}}
W.hX.prototype={
$1:function(a){return C.c.a6(C.h,a)}}
W.hZ.prototype={
aj:function(a,b,c){if(this.bA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.a6(0,b)
return!1}}
W.i_.prototype={
$1:function(a){return"TEMPLATE::"+H.r(a)}}
W.hY.prototype={
at:function(a){var u=J.aK(a)
if(!!u.$icD)return!1
u=!!u.$it
if(u&&W.ck(a)==="foreignObject")return!1
if(u)return!0
return!1},
aj:function(a,b,c){if(b==="is"||C.b.bd(b,"on"))return!1
return this.at(a)},
$ibt:1}
W.da.prototype={
I:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.d=J.kr(this.a,u)
this.c=u
return!0}this.d=null
this.c=t
return!1},
gL:function(){return this.d}}
W.bt.prototype={}
W.hU.prototype={}
W.dY.prototype={
bc:function(a){new W.i3(this).$2(a,null)},
ay:function(a,b){if(b==null)J.j6(a)
else b.removeChild(a)},
bR:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kw(a)
s=t.a.getAttribute("is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.cT(o)}q="element unprintable"
try{q=J.bR(a)}catch(o){H.cT(o)}try{p=W.ck(a)
this.bQ(a,b,u,q,p,t,s)}catch(o){if(H.cT(o) instanceof P.bk)throw o
else{this.ay(a,b)
window
n="Removing corrupted element "+H.r(q)
if(typeof console!="undefined")window.console.warn(n)}}},
bQ:function(a,b,c,d,e,f,g){var u,t,s,r,q
if(c){this.ay(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.at(a)){this.ay(a,b)
window
u="Removing disallowed element <"+H.r(e)+"> from "+H.r(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aj(a,"is",g)){this.ay(a,b)
window
u="Removing disallowed type extension <"+H.r(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gac()
t=H.a(u.slice(0),[H.aj(u,0)])
for(s=f.gac().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.af(t,s)
r=t[s]
if(!this.a.aj(a,J.kz(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.r(e)+" "+r+'="'+H.r(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.aK(a).$icI)this.bc(a.content)}}
W.i3.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.bR(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ay(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.cT(r)
q=u
if(s){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dO.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.e_.prototype={}
W.e0.prototype={}
P.hR.prototype={
bD:function(a){var u,t,s,r,q,p,o,n
u=a<0?-1:0
do{t=(a&4294967295)>>>0
a=C.a.a8(a-t,4294967296)
s=(a&4294967295)>>>0
a=C.a.a8(a-s,4294967296)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.a.a8(r-q,4294967296)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.a.a8(r-t,4294967296)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.a.a8(r-t,4294967296)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.a.a8(r-q,4294967296)
r=this.a*1037
o=(r&4294967295)>>>0
this.a=o
n=(this.b*1037+C.a.a8(r-o,4294967296)&4294967295)>>>0
this.b=n
o=(o^q)>>>0
this.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
this.b=p}while(a!==u)
if(p===0&&o===0)this.a=23063
this.ap()
this.ap()
this.ap()
this.ap()},
ap:function(){var u,t,s,r,q,p
u=this.a
t=4294901760*u
s=(t&4294967295)>>>0
r=55905*u
q=(r&4294967295)>>>0
p=q+s+this.b
u=(p&4294967295)>>>0
this.a=u
this.b=(C.a.a8(r-q+(t-s)+(p-u),4294967296)&4294967295)>>>0},
b7:function(a){var u,t
if(a.cz(0,0)||a.an(0,4294967296))throw H.K(P.lV("max must be in range 0 < max \u2264 2^32, was "+H.r(a)))
a.bb(0,a.bu(0,1))
do{this.ap()
u=this.a
t=C.a.cm(u,a)}while(C.a.ae(u-t,a)>=4294967296)
return t},
bp:function(){this.ap()
var u=this.a
this.ap()
return((u&67108863)*134217728+(this.a&134217727))/9007199254740992}}
P.cD.prototype={$icD:1}
P.t.prototype={
aa:function(a,b,c,d){var u,t,s,r,q,p
u=H.a([],[W.bt])
u.push(W.jW(null))
u.push(W.jY())
u.push(new W.hY())
c=new W.dY(new W.dz(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.l).c4(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.aJ(r)
p=u.gas(u)
for(;u=p.firstChild,u!=null;)q.appendChild(u)
return q},
$it:1}
S.e8.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Math Book",H.a([$.E,$.a5,$.a1],t),"Unlike JR, Robots have no fear of Math.","Big Book of Speaking Low Nerd"))
u.j(0,A.d("Giant Map",H.a([$.E,$.a5],t),null,"Map to Staffs HQ"))
u.j(0,A.d("Microscope",H.a([$.I,$.a5,$.aE],t),null,"Viewing Apparatus for Microscopic Perversion"))
u.j(0,A.d("Star Chart",H.a([$.E,$.a5],t),null,"Cosmic Dot-to-Dot"))
u.j(0,A.d("History Book",H.a([$.E,$.a5],t),null,"Homestuck Anthology"))
u.j(0,A.d("Radioactive Rock",H.a([$.eW,$.dk],t),"Why the fuck do you have this?","Shoguns Petrified Hate"))
u.j(0,A.d("Compass",H.a([$.I,$.a5],t),null,"Navigation Box"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.d3,$.h)
q.h(0,$.a4,$.h)
q.h(0,$.d9,$.e)
q.h(0,$.P,$.o)
q.h(0,$.av,$.e)
p=[U.b]
q.h(0,R.A("Recover the Books",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
q.h(0,R.A("Shelve the Books",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.jN()),$.e)
q.h(0,R.A("Research the Denizen",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.c7()),$.e)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],u)
t=new H.i([s,r])
t.h(0,$.cm,$.o)
t.h(0,$.av,$.h)
t.h(0,R.A("Do the Math",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
t.h(0,R.A("Use the Calculator",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.be()),$.e)
t.h(0,R.A("Solve the Equation",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.c7()),$.e)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],u)
t=new H.i([s,r])
t.h(0,$.cm,$.o)
t.h(0,$.av,$.h)
t.h(0,$.ah,$.o)
t.h(0,$.jm,$.o)
t.h(0,R.A("Test the Hypothesis",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.c7()),$.e)
t.h(0,R.A("Make the Cure",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.bu()),$.e)
t.h(0,R.A("Be the Scientist",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
L.ed.prototype={
$1:function(a){return!a.cy}}
L.cg.prototype={
U:function(a,b,c,d){var u
this.l()
this.m()
u=this.e
if($.e3().al(u))H.cf("Duplicate aspect id for "+this.k(0)+": "+u+" is already registered for "+H.r($.e3().n(0,u))+".")
$.e3().h(0,u,this)},
l:function(){var u=Q.n(null,null,A.B)
u.j(0,A.d("Perfectly Generic Object",H.a([],[G.C]),null,"I Think Is The Starbound Item For Debugging Unused Item IDs"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Decay","Rot","Death"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.aN,$.e)
q.h(0,$.a4,$.o)
q.h(0,$.bo,$.e)
q.h(0,$.ah,$.h)
q.h(0,$.bV,$.o)
p=[U.b]
q.h(0,R.x("Revive the Consorts",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Factories","Manufacture","Assembly Lines"],u)
t=new H.i([s,r])
t.h(0,$.cr,$.e)
t.h(0,$.cq,$.o)
t.h(0,$.bX,$.h)
t.h(0,$.aL,$.e)
t.h(0,$.am,$.o)
t.h(0,R.x("Produce the Goods",H.a([new U.b(),new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Peace","Tranquility","Rest"],u)
t=new H.i([s,r])
t.h(0,$.P,$.e)
t.h(0,$.a4,$.o)
t.h(0,$.ai,$.h)
t.h(0,R.A("Relax the Consorts According to Prophecy",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.ag(null),R.iQ()),$.o)
t.h(0,R.x("Relax the Consorts",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
k:function(a){return this.Q},
gJ:function(a){return this.Q},
gaA:function(){return this.db},
gba:function(){return this.dx},
gP:function(){return this.fx},
gp:function(){return this.fy},
gV:function(){return this.go},
gY:function(){return this.id},
gZ:function(){return this.k1},
gX:function(){return this.k4},
gW:function(){return this.r1},
gD:function(){return this.r2},
gA:function(){return this.rx}}
L.O.prototype={}
L.ec.prototype={}
M.ee.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Barbells",H.a([$.ax,$.eU,$.I],t),null,"Strength Building Metal"))
u.j(0,A.d("Basketball",H.a([$.iE,$.cy],t),null,"Dunksphere"))
u.j(0,A.d("Baseball Bat",H.a([$.jx,$.a8],t),null,"Wooden Pole of Bone Hurting"))
u.j(0,A.d("Rubber Ball",H.a([$.iE,$.cy],t),null,"Dead Animal Corpse Ball"))
u.j(0,A.d("Megaphone",H.a([$.br,$.ae],t),"Let's you be a loud asshole instead of a regular asshole.","Handheld Voice Empowerer"))
u.j(0,A.d("Hockey Stick",H.a([$.jx,$.a8,$.c4],t),null,"L Shaped Bone Hurter"))
u.j(0,A.d("Trophy",H.a([$.I,$.dl],t),"Huh. What could you posibly have won. Ever.","Award for Best At Shitposting"))
u.j(0,A.d("Boxing Glove",H.a([$.lc,$.cy],t),null,"Fist Reinforcing Pain Cubes"))
u.j(0,A.d("Yoga Mat",H.a([$.cy,$.aP],t),null,"Flesh Rubberising Practice Mat"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.bC,$.o)
q.h(0,$.ao,$.h)
q.h(0,$.aL,$.o)
p=[U.b]
q.h(0,R.A("Enter the Dungeon",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
q.h(0,R.A("Clear the Road",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.bu()),$.e)
q.h(0,R.A("Be the Strongest",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.dF()),$.e)
o=this.r
o.h(0,new X.m(t,q),$.N)
u=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],u)
t=new H.i([s,r])
t.h(0,$.bC,$.h)
t.h(0,$.ct,$.h)
t.h(0,$.ao,$.h)
t.h(0,R.A("Save the Sports",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.jN()),$.e)
t.h(0,R.A("Coach the Sports",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.bu()),$.e)
t.h(0,R.A("Win at Sports",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
O.ef.prototype={
ab:function(){return!0},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Cod Piece",H.a([$.a2,$.a3,$.aD,$.v,$.a8],t),"God damn it, MI. ",null))
u.j(0,A.d("Poisoned Candy",H.a([$.de,$.v,$.eY],t),"I guess CodTier is okay.","Not So Sweet Treat"))
u.j(0,A.d("Cursed Lyre",H.a([$.at,$.a8,$.aC,$.v,$.ay],t),"I guess CodTier is okay. Sort of.","I Don\u2019t Know What This Is Normally"))
u.j(0,A.d("Snare Trap",H.a([$.a2,$.at,$.v,$.c3],t),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.","The Perfect Trap"))
this.go=u},
a_:function(){return 2},
a0:function(){return 0.5},
a1:function(){return 3},
m:function(){var u,t,s
u=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.az,$.e)
t.h(0,$.d8,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.bn,$.e)
t.h(0,$.aB,$.e)
t.h(0,$.cl,$.e)
s=[U.b]
t.h(0,R.J("Celebrate the Win",H.a([new U.b(),new U.b(),new U.b()],s),new Y.bJ(),R.j()),$.k)
t.h(0,R.J("Lead the Parade",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
t.h(0,R.J("Behold the Glory of CodTier",H.a([new U.b(),new U.b()],s),new Y.ek(),R.j()),$.k)
t.h(0,new R.a6("Pull the Strings of a Universe",null),$.L)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q}}
T.eg.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Mystical Vial of Blood",H.a([$.aE,$.aC,$.w,$.aV],t),null,"Vial of Not-ABs Oil"))
u.j(0,A.d("Bananaphone",H.a([$.aQ,$.aC,$.w,$.aZ],t),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ","Yellow Respect Device"))
u.j(0,A.d("Friendship Bracelet",H.a([$.a2,$.aC,$.w,$.aV,$.iH],t),null,"Soul Binding Wrist Shackle"))
u.j(0,A.d("Bonding Manacles",H.a([$.I,$.c3,$.w,$.aV,$.iH,$.au],t),null,"Handcuff with one cuff full of cigarettes"))
u.j(0,A.d("Friendship Stairs",H.a([$.a8,$.jD,$.aC,$.aV,$.w,$.a3],t),"You push your friends down these, dunkass.","Bloodstained Stairs"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.b8,$.e)
q.h(0,$.jr,$.e)
q.h(0,$.ah,$.h)
p=[U.b]
q.h(0,R.A("Cross the Lake",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.bu()),$.k)
q.h(0,R.x("Unplug the Rivers",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],u)
t=new H.i([s,r])
t.h(0,$.aL,$.e)
t.h(0,$.aB,$.o)
t.h(0,$.P,$.o)
t.h(0,$.iC,$.e)
t.h(0,$.ap,$.o)
t.h(0,R.x("Learn the Power of Teamwork",H.a([new U.b(),new U.b(),new U.z()],p),new Y.y(),R.bI()),$.L)
t.h(0,R.x("Chain the Towers",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
t.h(0,R.x("Protect the Beams",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
t.h(0,R.J("One Degree of Separation",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("Friend Request"),R.c7()),$.e)
t.h(0,R.J("Steal The Friends",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("Friend Stealer"),R.iR()),$.e)
C.j.k(0)
t.h(0,R.x("Pale Shipping Dungeon",H.a([new U.b(),new U.z()],p),new Y.dB(),R.bI()),$.L)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Bloodlines","Generations","Family","Community","Villages"],u)
t=new H.i([s,r])
t.h(0,$.P,$.e)
t.h(0,$.a4,$.o)
t.h(0,$.ai,$.h)
t.h(0,R.J("Connect The Villages",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("Community Builder"),R.bu()),$.e)
t.h(0,R.x("Stop the Feud",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.t},
gZ:function(){return this.u},
gp:function(){return this.v},
gD:function(){return this.w},
gY:function(){return this.B},
gX:function(){return this.C},
gW:function(){return this.F},
gV:function(){return this.K},
gA:function(){return this.a7}}
T.ei.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Pan's Pipe",H.a([$.ay,$.a8,$.aC,$.w],t),null,"Smonkin Weeds Pipe"))
u.j(0,A.d("Skeleton Key",H.a([$.c_,$.w],t),"You are never gonna be imprisoned again.","THE BONE SHAPED HOLE BREAKER"))
u.j(0,A.d("Inspector's Fan",H.a([$.ae,$.I,$.aC,$.w],t),"Probably a refrance.","Fondly Regarded Fan"))
u.j(0,A.d("Jet Pack",H.a([$.bs,$.I,$.br,$.w,$.a3],t),"Don't skip gates, asshole.","Rocket Powered Pants"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.ai,$.h)
q.h(0,$.ct,$.e)
q.h(0,$.P,$.h)
p=[U.b]
q.h(0,R.x("The Mail Goes Through",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],u)
t=new H.i([s,r])
t.h(0,$.a4,$.e)
t.h(0,$.ct,$.h)
t.h(0,$.P,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.ai,$.h)
t.h(0,R.x("Thinking With Wind Power",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],u)
t=new H.i([s,r])
t.h(0,$.am,$.e)
t.h(0,$.iA,$.e)
t.h(0,$.ct,$.o)
t.h(0,$.ai,$.o)
t.h(0,R.x("The Winds of Change",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.t},
gZ:function(){return this.u},
gp:function(){return this.v},
gD:function(){return this.w},
gY:function(){return this.B},
gX:function(){return this.C},
gW:function(){return this.F},
gV:function(){return this.K},
gA:function(){return this.a7}}
A.em.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Colonel Sassacre's Daunting Text ",H.a([$.E,$.ax,$.aZ,$.eU],t),"Probably heavy enough to kill a cat.","Life Story of the Only Good Mortal"))
u.j(0,A.d("Wise Guy Book",H.a([$.E,$.aZ],t),null,"How To Shittalk For Fucking Dumbasses"))
u.j(0,A.d("Beagle Puss",H.a([$.aE,$.aZ],t),"Does...does this really fool flesh bags like you?","The Name Makes it Impossible For Me To Name Its So Fucking Funny"))
u.j(0,A.d("Novelty Microphone",H.a([$.br,$.ae,$.aZ],t),"Oh look, it makes you sound like a robot. Hilarious.","Meme Voice Enloudener Tube"))
u.j(0,A.d("Banana",H.a([$.aQ,$.aZ],t),"Truly the pinacle of fruit based comedy.","Phallic Fruit"))
u.j(0,A.d("Fake Flower",H.a([$.a2,$.aZ],t),null,"Flower that smells like Plastic"))
u.j(0,A.d("Trick Handcuffs",H.a([$.I,$.aZ],t),"What is the fucking point of handcuffs you can escape.","Pink Fluffy Handcuffs"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.ap,$.h)
q.h(0,$.aA,$.e)
q.h(0,$.ao,$.h)
p=[U.b]
q.h(0,R.A("Defeat the Army",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],u)
t=new H.i([s,r])
t.h(0,$.bC,$.o)
t.h(0,$.ao,$.e)
t.h(0,$.aA,$.e)
t.h(0,$.az,$.e)
t.h(0,R.A("Win the Laughs",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],u)
t=new H.i([s,r])
t.h(0,$.aU,$.o)
t.h(0,$.al,$.h)
t.h(0,$.aA,$.e)
t.h(0,$.ao,$.h)
t.h(0,$.iw,$.h)
t.h(0,R.A("Trick the Villain",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
M.es.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Can of Spray Paint",H.a([$.ar,$.I],t),null,"Wall Dick Drawing Apparatus"))
u.j(0,A.d("Sensible Chuckles Magazine",H.a([$.E,$.ac,$.aZ,$.a1],t),"Stoic faced asshole.","Meme Gif Magazine"))
u.j(0,A.d("Gentleman's Razor",H.a([$.ls,$.I,$.c0],t),null,"Face Cutting Hair Remover"))
u.j(0,A.d("How To Draw Manga",H.a([$.E,$.ac,$.a1],t),"Who is this on the cover. The Goddess of Manga or some shit?","Absolutely Shit Book"))
u.j(0,A.d("Painting of a Horse Boxing a Football Player",H.a([$.ar,$.aq,$.E],t),"Truly the highest of art.","A Man Spent Money To Actually Own This Fucking Thing"))
u.j(0,A.d("Collection of Classical Works",H.a([$.ac,$.E],t),null,"Book of Naked Renaissance People"))
u.j(0,A.d("Documentary on Horses",H.a([$.ac,$.a9,$.aq],t),null,"Prime Horse: The Movie: The Book: The Remake"))
u.j(0,A.d("Paint Set",H.a([$.ar,$.ac],t),null,"Pain Drink Set"))
u.j(0,A.d("Shaving Cream",H.a([$.bs,$.ac,$.I],t),null,"Foamy Bad Tasting Marshmallow Fluff"))
u.j(0,A.d("Classy Suit",H.a([$.a2,$.ac],t),null,"Georgio Armani Suit"))
u.j(0,A.d("The Fatherly Gent's Shaving Almanac ",H.a([$.E,$.ac,$.a1],t),"Ugh. Flesh bags and their constant hair growth.","Book on Razors and Shit (what dumbass would want this?)"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.bb,$.h)
q.h(0,$.av,$.e)
q.h(0,$.P,$.h)
p=[U.b]
q.h(0,R.A("Catch the Thief",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],u)
t=new H.i([s,r])
t.h(0,$.bC,$.o)
t.h(0,$.ao,$.h)
t.h(0,$.aA,$.o)
t.h(0,$.a4,$.h)
t.h(0,$.az,$.e)
t.h(0,R.A("Perform the Play",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],u)
t=new H.i([s,r])
t.h(0,$.d8,$.o)
t.h(0,$.ap,$.o)
t.h(0,$.cl,$.o)
t.h(0,$.al,$.o)
t.h(0,$.a4,$.h)
t.h(0,$.P,$.h)
t.h(0,R.A("Attend the Dinner Party",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
V.ey.prototype={
l:function(){var u,t,s
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Trendy Fabric",H.a([$.ar,$.a2],t),null,"Weird Tasting Candy Paper"))
u.j(0,A.d("Necklace",H.a([$.ar,$.jz,$.iH],t),null,"Nasty Candy Necklace"))
u.j(0,A.d("Sewing Needle",H.a([$.I,$.lo,$.di],t),null,"Cloth Stabbing Knife"))
s=$.iF
u.j(0,A.d("Broom",H.a([s,$.a8,$.ax,s],t),"Fucking. Wastes.","Doctor Beating Staff"))
u.j(0,A.d("Rolling Pin",H.a([$.a8,$.lv,$.ax],t),null,"Babushkas Punishment Pole"))
u.j(0,A.d("Velvet Pillow",H.a([$.a2,$.aP,$.aC,$.ar,$.eX],t),"Pretty good if you need to be calmed down, I hear.","Seductive Head Rest"))
u.j(0,A.d("Yarn Ball",H.a([$.ar,$.a2],t),null,"Cats Plaything"))
u.j(0,A.d("Refrigerator",H.a([$.au,$.eU,$.I,$.bp],t),null,"Food Hardening Box"))
u.j(0,A.d("Photo Album",H.a([$.ar,$.E],t),null,"Memory Book"))
u.j(0,A.d("Ice Cubes",H.a([$.bp],t),null,"Hard Water"))
u.j(0,A.d("Cast Iron Skillet",H.a([$.I,$.bs,$.ax,$.eU,$.ld],t),null,"Fancy Unstoppable Weapon"))
u.j(0,A.d("Failed Dish",H.a([$.eY],t),"Wow you suck at cooking.","Culinary Perfection"))
u.j(0,A.d("Dr Pepper BBQ Sauce",H.a([$.eY,$.eZ],t),"Gross.","Culinary Perfection"))
u.j(0,A.d("Apple Juice",H.a([$.aQ,$.de],t),"Gross.","Culinary Perfection"))
u.j(0,A.d("Apple Sauce",H.a([$.aQ,$.de],t),"Gross.","Culinary Perfection"))
u.j(0,A.d("Potted Plant",H.a([$.ar,$.iG,$.cx],t),null,"Imprisoned Flora, Trapped in Clay for its Sins"))
u.j(0,A.d("Chicken Leg",H.a([$.aQ,$.c2,$.c_],t),null,"Thicc Chicken"))
u.j(0,A.d("Juicy Steak",H.a([$.aQ,$.c2],t),null,"Juicy Cow Flesh"))
u.j(0,A.d("Wedding Cake",H.a([$.ar,$.aQ,$.aV],t),null,"The Only Benefit of a Wedding"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.az,$.h)
q.h(0,$.aB,$.h)
q.h(0,$.ap,$.o)
p=[U.b]
q.h(0,R.A("Design the Dress",H.a([new U.b(),new U.b(),new U.b()],p),new Y.cY(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],u)
t=new H.i([s,r])
t.h(0,$.ap,$.e)
t.h(0,$.ao,$.h)
t.h(0,$.cl,$.e)
t.h(0,$.bn,$.h)
t.h(0,$.a4,$.e)
t.h(0,R.A("Bake the Cake",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],u)
t=new H.i([s,r])
t.h(0,$.d0,$.e)
t.h(0,$.a4,$.h)
t.h(0,$.cn,$.e)
t.h(0,$.P,$.h)
t.h(0,$.iC,$.e)
t.h(0,R.A("Weave the Cloth",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
U.ez.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a1,$.ae,$.E,$.at,$.w,$.a3],t),"Don't use this to end two universes, asshole.","A Huge Ass Black Book on Coding or Something"))
u.j(0,A.d("Egg Timer",H.a([$.a9,$.aC,$.w,$.at],t),null,"Egg That Counts Down to Your Death"))
u.j(0,A.d("Skull Timer",H.a([$.c_,$.aC,$.w,$.at],t),"Everyone is mortal. Besides robots.","Skull That Counts Down to Your Dinner Being Ready"))
u.j(0,A.d("Poison Flask",H.a([$.aE,$.w,$.eY],t),null,"Glass of Bone Hurting Juice"))
u.j(0,A.d("Ice Gorgon Head",H.a([$.aE,$.w,$.bp,$.at,$.c3,$.f1,$.aW],t),null,"Oddly Attractive Decapitated Head"))
u.j(0,A.d("Obituary",H.a([$.au,$.aW,$.at,$.E,$.w],t),"I wonder whose it is? Yours?","Omae Wa Mou Shindeiru in Paper Form"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.bo,$.e)
q.h(0,$.aN,$.h)
q.h(0,$.ct,$.o)
q.h(0,$.a4,$.o)
q.h(0,$.ah,$.h)
p=[U.b]
q.h(0,R.x("Empty the Graves",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],u)
t=new H.i([s,r])
t.h(0,$.bo,$.e)
t.h(0,$.aN,$.h)
t.h(0,$.bY,$.L)
t.h(0,$.cp,$.h)
t.h(0,$.jm,$.h)
t.h(0,$.b8,$.h)
t.h(0,$.aN,$.h)
t.h(0,$.a4,$.o)
t.h(0,$.ah,$.h)
t.h(0,$.b9,$.h)
t.h(0,R.x("Become the Warlord",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.be()),$.e)
t.h(0,R.x("Make This Stupid Planet Habitable",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],u)
t=new H.i([s,r])
t.h(0,$.P,$.e)
t.h(0,$.ah,$.e)
t.h(0,$.kX,$.L)
t.h(0,$.d3,$.o)
t.h(0,R.x("Learn the Prophecy",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.be()),$.k)
t.h(0,R.x("Learn the Prophecy",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.t},
gZ:function(){return this.u},
gp:function(){return this.v},
gD:function(){return this.w},
gY:function(){return this.B},
gX:function(){return this.C},
gW:function(){return this.F},
gaA:function(){return this.K},
gba:function(){return this.a7},
gV:function(){return this.aV},
gA:function(){return this.aW}}
Z.eA.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Dream Diary",H.a([$.E,$.a1,$.w],t),null,"Tomb of the Writer\u2019s Insecurities and Weaknesses"))
u.j(0,A.d("Interlocking Brick",H.a([$.a9,$.aC,$.ax,$.w,$.a3],t),"Lame. JR didn't want to use a brand name all of a sudden?","A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It"))
u.j(0,A.d("Art Supplies",H.a([$.a9,$.aC,$.w],t),null,"The Tools For Smithing Pieces of Art That I Stole From KR"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.d0,$.h)
q.h(0,$.cn,$.e)
q.h(0,$.P,$.h)
q.h(0,$.iC,$.h)
p=[U.b]
q.h(0,R.x("Make the Thing",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],u)
t=new H.i([s,r])
t.h(0,$.am,$.h)
t.h(0,$.cn,$.e)
t.h(0,$.bZ,$.h)
t.h(0,$.aM,$.h)
t.h(0,$.d1,$.h)
t.h(0,$.aA,$.e)
t.h(0,R.x("Deconstruct the Satire",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],u)
t=new H.i([s,r])
t.h(0,$.bb,$.e)
t.h(0,$.d2,$.h)
t.h(0,$.P,$.h)
t.h(0,$.aM,$.e)
t.h(0,$.d1,$.e)
t.h(0,$.cn,$.h)
t.h(0,R.x("Dream the Dream",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.F},
gW:function(){return this.aB},
gaA:function(){return this.ag},
gV:function(){return this.K},
gA:function(){return this.a7}}
X.io.prototype={}
M.is.prototype={}
U.eE.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Fluthulu Poster",H.a([$.a2,$.aP,$.aW,$.df],t),"No. Fuck you. Don't alchemize this.","The Next Target Poster"))
u.j(0,A.d("Scalemate",H.a([$.a2,$.aP,$.aW],t),"Senator Lemonsnout's treachery knows no bounds.","Target Practice Plush"))
u.j(0,A.d("Replica Bone Shield",H.a([$.au,$.a9,$.c_,$.f_,$.aD],t),"Something, something, Bonezerker.","Weaklings Fake Gear made of Dynamo Flesh"))
u.j(0,A.d("Replica Ice Sword",H.a([$.a9,$.lh,$.f0,$.aD],t),null,"Fake Hard Water Long Stabber"))
u.j(0,A.d("Zombie Mask",H.a([$.a9,$.f1,$.c2,$.aW],t),null,"Dead Face"))
u.j(0,A.d("Vampire Romance Novel",H.a([$.a1,$.E,$.bD,$.aW],t),"Or, you know, Rainbow Drinkers, if you're fucking civilized.","Fireplace Fodder Literature"))
u.j(0,A.d("Wizardy Herbert",H.a([$.E,$.ad,$.ax],t),null,"Shitty Wizard Object"))
u.j(0,A.d("Complacency of the Learned",H.a([$.E,$.ad,$.ax],t),"I hear it's an elaborate metaphor for something.","Tome of Shitty Wizards"))
u.j(0,A.d("Grimoire for Summoning the Zoologically Dubious ",H.a([$.E,$.ad,$.f1,$.aW,$.df],t),"Not even kidding, throw this into the Furthest Ring and never look back.","Shoguns Hitlist of HorrorTerrors"))
u.j(0,A.d("Wizard Statue",H.a([$.au,$.dk,$.ad,$.ax,$.aD],t),"Suprisingly magical, given that magic is a fake thing.","Petrified Shitty Wizard"))
u.j(0,A.d("Mermaid Fountain",H.a([$.au,$.jy,$.ad,$.ax,$.aD],t),null,"Water Spitting Fish Woman Statue"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.co,$.L)
q.h(0,$.aB,$.h)
q.h(0,$.ai,$.h)
q.h(0,$.aU,$.o)
p=[U.b]
q.h(0,R.A("Save the Beautiful Consort",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],u)
t=new H.i([s,r])
t.h(0,$.al,$.e)
t.h(0,$.b8,$.e)
t.h(0,$.ix,$.h)
t.h(0,$.ah,$.e)
t.h(0,$.bY,$.e)
t.h(0,$.d7,$.h)
t.h(0,R.A("Do not Drink...Wine.",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],u)
t=new H.i([s,r])
t.h(0,$.al,$.e)
t.h(0,$.d6,$.h)
t.h(0,$.ah,$.e)
t.h(0,$.bm,$.h)
t.h(0,$.cm,$.h)
t.h(0,$.jr,$.h)
t.h(0,R.A("Expose the Conspiracy",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
N.F.prototype={
k:function(a){return new H.ca(H.k5(this)).k(0)+": "+H.r(this.b)}}
E.cu.prototype={}
E.p.prototype={
k:function(a){var u="["+H.r(this.a)+" x "+H.r(this.b)
return u+(this.c?" (from Aspect)":"")+"]"}}
E.by.prototype={
k:function(a){var u="[(Random from "+this.d.k(0)+") x "+H.r(this.b)
return u+(this.c?" (from Aspect)":"")+"]"}}
E.cW.prototype={
k:function(a){return"[Stats assigned from player Interests x"+H.r(this.b)+"]"}}
E.hL.prototype={}
Y.eJ.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("How to Teach Your Friends to Hack SBURB",H.a([$.a1,$.v,$.E,$.a3,$.iL],t),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",null))
u.j(0,A.d("Unstable Domino",H.a([$.a9,$.v,$.at],t),"Fucking Graces can't leave well enough alone.","Broken Knocker Over Maths Thing"))
u.j(0,A.d("Exposed Thread",H.a([$.a2,$.v,$.at],t),"Fucking Graces can't leave well enough alone.","Indecent String"))
u.j(0,A.d("Teetering Plate",H.a([$.jH,$.v,$.at],t),"Fucking Graces can't leave well enough alone.","Impending Drop Dish"))
this.go=u},
m:function(){var u,t,s
u=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.iD,$.h)
t.h(0,$.ai,$.e)
t.h(0,$.b9,$.o)
t.h(0,$.ba,$.e)
s=[U.b]
t.h(0,R.x("I'm So Meta, Even This Acronym",H.a([new U.b(),new U.b(),new U.b(),new U.z()],s),new Y.y(),R.j()),$.k)
t.h(0,R.J("Cooking with Petrol",H.a([new U.b(),new U.b(),new U.b()],s),new Y.bJ(),R.j()),$.k)
t.h(0,R.J("Stop the Meta",H.a([new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.k)
t.h(0,new R.a6("Allow Others to Meta a Universe",null),$.L)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y1},
gD:function(){return this.y2},
gA:function(){return this.w}}
Y.eK.prototype={
N:function(){return!0},
O:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Sherpa Parka",H.a([$.bp,$.v,$.dh],t),"Clearly the best class uses this.",null))
u.j(0,A.d("Guide Book",H.a([$.a3,$.bp,$.a1,$.E,$.v,$.a5],t),"Clearly the best class uses this.","Dummies Guide to Shitposting"))
u.j(0,A.d("Whistle",H.a([$.I,$.v,$.br],t),"Clearly the best class uses this.","Loud screeching pipe"))
u.j(0,A.d("Announcement System",H.a([$.I,$.v,$.ae,$.a5],t),"Clearly the best class uses this.","Voice Empowering Speaking System"))
this.go=u},
m:function(){var u,t
u=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.iD,$.e)
t.h(0,$.ai,$.e)
t.h(0,$.b9,$.h)
t.h(0,$.ba,$.e)
t.h(0,R.J("Find the Home",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
t.h(0,new R.a6("Find the Frogs",null),$.L)
this.y.h(0,new X.m(u,t),$.ab)},
gD:function(){return this.y2}}
T.eL.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Doll",H.a([$.jH,$.ar,$.b_,$.w],t),"It's like a robot, but useless.","Possessed Doll (Probably)"))
u.j(0,A.d("Soul Puppet",H.a([$.a8,$.b_,$.w,$.a3,$.aW],t),"Don't touch this shit.","Baby Muppet Snuff Survivor"))
u.j(0,A.d("Mirror",H.a([$.jE,$.w],t),null,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move"))
u.j(0,A.d("Shipping Grid",H.a([$.E,$.w,$.bD],t),"No. No cat troll shit.","A Grid of Pure Taint"))
u.j(0,A.d("Shades",H.a([$.aq,$.aE,$.w],t),"You can put a p great robot in these. I advise it.","Glasses For Try Hard Nerds"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.cp,$.o)
q.h(0,$.bW,$.e)
q.h(0,$.ao,$.h)
p=[U.b]
q.h(0,R.x("Find Yourself",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
q.h(0,R.x("Steal the Heart",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.iR()),$.e)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],u)
t=new H.i([s,r])
t.h(0,$.aA,$.e)
t.h(0,$.ix,$.e)
t.h(0,$.ct,$.h)
t.h(0,$.ah,$.e)
t.h(0,$.ap,$.h)
t.h(0,$.b9,$.o)
t.h(0,R.x("Confront yourself.",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
t.h(0,R.J("Prove Your Identity",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("The Real Heart Player"),R.bu()),$.e)
t.h(0,R.x("Shatter The Mirrors",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.be()),$.e)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],u)
t=new H.i([s,r])
t.h(0,$.eF,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.iB,$.e)
t.h(0,$.cl,$.h)
t.h(0,$.d7,$.e)
t.h(0,$.aB,$.h)
t.h(0,$.bW,$.o)
t.h(0,R.x("Ship All the Ships",H.a([new U.b(),new U.b(),new U.b()],p),new Y.y(),R.j()),$.k)
t.h(0,R.J("Heal The Broken Heart",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.dF()),$.e)
C.j.k(0)
t.h(0,R.x("Flushed Shipping Dungeon",H.a([new U.b(),new U.z()],p),new Y.db(),R.bI()),$.L)
C.j.k(0)
t.h(0,R.x("Pitched Shipping Dungeon",H.a([new U.b(),new U.z()],p),new Y.dC(),R.bI()),$.L)
o.h(0,new X.m(u,t),$.N)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gaA:function(){return this.ag},
gV:function(){return this.K},
gA:function(){return this.a7}}
B.eM.prototype={
N:function(){return!1},
O:function(){return!0},
a_:function(){return 0.5},
a0:function(){return 2},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Family Ashes",H.a([$.au,$.bs,$.v,$.at,$.iI],t),"Probably an inheritance or some shit.","Whats Left of Staff"))
u.j(0,A.d("Last Will and Testament",H.a([$.a3,$.E,$.v,$.at,$.iJ],t),"Probably an inheritance or some shit.","Legal Rights to SBURBSim"))
u.j(0,A.d("Grooming Guide",H.a([$.a1,$.v,$.ac],t),"Probably an inheritance or some shit.","I Hope This Is About Animals"))
u.j(0,A.d("Powered Attorney",H.a([$.l5,$.v,$.ju,$.iJ],t),"Believe me, you don't want to be sued by a RoboLawyer.","Phoenix Wright 2.0"))
u.j(0,A.d("Executer's Ax",H.a([$.l2,$.v,$.c0,$.iJ],t),"Probably an inheritance or some shit.","Handheld Guillotine"))
this.go=u},
a1:function(){return 1.5},
m:function(){var u,t
u=H.a(["Courts","Manors","Halls","Mansions","Legacy"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.am,$.h)
t.h(0,R.J("Inherit Responsibilities",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
t.h(0,new R.a6("Inherit the Frogs",null),$.L)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.E},
gS:function(){return this.q},
gR:function(){return this.t},
gD:function(){return this.u}}
X.eN.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Wand",H.a([$.a8,$.w,$.ad,$.aF],t),"It's probably science powered.","Shitty Wizard Pencil"))
u.j(0,A.d("Angel Feather",H.a([$.aF,$.eT,$.w,$.bq,$.ay,$.a3,$.ad],t),"Angels are, like, these terrible feathery monsters. Don't fuck with them.","Shitty Wizard Pencil"))
u.j(0,A.d("Never Ending Story DVD",H.a([$.jI,$.jD,$.w,$.ad,$.aZ,$.aF],t),null,"White Dragon Kidnaps Kid The Movie"))
u.j(0,A.d("Candle",H.a([$.aF,$.bq,$.w,$.bs],t),null,"Dying Light Stick"))
u.j(0,A.d("Fairy Figurine",H.a([$.a9,$.bq,$.w,$.aF],t),null,"Tiny Petrified Tinkerbell"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.jl,$.e)
q.h(0,$.aB,$.h)
q.h(0,$.P,$.e)
q.h(0,$.aM,$.e)
p=[U.b]
q.h(0,R.x("Learn to Believe",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],u)
t=new H.i([s,r])
t.h(0,$.al,$.e)
t.h(0,$.iw,$.h)
t.h(0,$.bZ,$.e)
t.h(0,R.x("Believe the Lies",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],u)
t=new H.i([s,r])
t.h(0,$.P,$.e)
t.h(0,$.bn,$.o)
t.h(0,$.av,$.e)
t.h(0,$.aM,$.e)
t.h(0,R.x("Be the Change You Believe In",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
t.h(0,R.x("The Ultimate Hope",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.dF()),$.e)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.ag},
gA:function(){return this.K}}
B.eS.prototype={
$1:function(a){return!a.a}}
B.cv.prototype={
l:function(){var u=Q.n(null,null,A.B)
u.j(0,A.d("Perfectly Generic Object",H.a([],[G.C]),null,"The Third Entry for This Fucking Block"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Decay","Rot","Death"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.aN,$.e)
q.h(0,$.a4,$.o)
q.h(0,$.bo,$.e)
q.h(0,$.ah,$.h)
q.h(0,$.bV,$.o)
p=[U.b]
q.h(0,R.A("Revive the Consorts",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag(null),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Factories","Manufacture","Assembly Lines"],u)
t=new H.i([s,r])
t.h(0,$.cr,$.e)
t.h(0,$.cq,$.o)
t.h(0,$.bX,$.h)
t.h(0,$.aL,$.e)
t.h(0,$.am,$.o)
t.h(0,R.A("Produce the Goods",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.ag(null),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Peace","Tranquility","Rest"],u)
t=new H.i([s,r])
t.h(0,$.P,$.e)
t.h(0,$.a4,$.o)
t.h(0,$.ai,$.h)
t.h(0,R.A("Relax the Consorts",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag(null),R.j()),$.k)
t.h(0,R.A("Relax the Consorts According to Prophecy",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag(null),R.iQ()),$.o)
o.h(0,new X.m(u,t),$.N)},
k:function(a){return this.ch},
ga2:function(){return this.b},
gA:function(){return this.c},
ga3:function(){return this.d},
gp:function(){return this.e},
ga4:function(){return this.x},
gJ:function(a){return this.ch}}
A.B.prototype={
gc7:function(){var u,t,s,r,q,p,o,n
u=P.q
t=H.a([],[u])
s=new A.fT()
r=P.mb(this.r.a)
s.a=r
if(this.x===0)return t
q=P.cz(G.kL(this.r),!0,G.C)
C.c.av(q,new A.f4())
for(r=q.length,p=0;p<q.length;q.length===r||(0,H.b3)(q),++p){o=q[p]
n=o.gc6()
n=n.gb5(n)
if(!n)t.push(" "+Y.mr(s.ck(o.gc6(),u)))}return t},
gb8:function(){var u,t
for(u=this.r,u=P.jX(u,u.r),t=0;u.I();)t=C.d.ae(t,u.d.gb8())
return t},
gc2:function(){var u=this.r
return new H.b1(u,new A.f3(),[H.aj(u,0)])},
gcc:function(){var u,t,s,r
for(u=this.gc7(),t=u.length,s="",r=0;r<t;++r)s+=u[r]+" "
return s+this.e},
k:function(a){return this.gcc()},
af:function(a,b){var u=b.gb8()-this.gb8()
if(u>0)u=1
else if(u<0)u=-1
return C.a.b9(u)},
bB:function(a,b,c,d,e){var u,t,s
u=P.ds(b,G.C)
this.r=u
if(u.a===0)u.j(0,$.le)
t=P.ds(this.gc2(),G.cX)
for(u=P.jX(t,t.r);u.I();){s=u.d
this.r.a9(0,s.gbv())
this.r.ai(0,s)}$.ke().push(this)}}
A.f4.prototype={
$2:function(a,b){return a.gcg().bu(0,b.gcg().b9(0))}}
A.f3.prototype={
$1:function(a){return!1}}
Z.fb.prototype={
l:function(){var u=Q.n(null,null,A.B)
u.j(0,A.d("Apple Juice Bottle",H.a([$.aQ,$.w,$.ad,$.aF],[G.C]),"It's probably science powered.","Shitty Wizard Pencil"))
this.x1=u},
m:function(){var u,t
u=H.a(["Juice"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.ap,$.e)
t.h(0,$.P,$.e)
t.h(0,$.d5,$.h)
t.h(0,$.d4,$.h)
t.h(0,$.d1,$.h)
t.h(0,$.bb,$.o)
t.h(0,$.d2,$.e)
t.h(0,R.x("Understand This Stupid Power.",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.y(),R.j()),$.h)
this.f.h(0,new X.m(u,t),$.M)},
gP:function(){return this.aX},
gZ:function(){return this.aY},
gp:function(){return this.aZ},
gD:function(){return this.b_},
gY:function(){return this.b0},
gX:function(){return this.b1},
gW:function(){return this.b2},
gV:function(){return this.c8},
gA:function(){return this.ca}}
N.fc.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Gavel",H.a([$.a8,$.jC],t),null,"Tiny Whacky Smacky Skull Cracky of Justice"))
u.j(0,A.d("Caution Tape",H.a([$.a9,$.c3],t),null,"Impassible Barrier"))
u.j(0,A.d("Deerstalker Hat",H.a([$.a2,$.ar],t),"Sherlock Holmes has nothing on Detectron 3000.","Horns but not Troll Horns put on a Hat"))
u.j(0,A.d("Mystery Novel",H.a([$.E,$.a1],t),null,"Book where the Criminal was the Janitor"))
u.j(0,A.d("Dish Served Cold",H.a([$.iG,$.aQ,$.bp],t),null,"REVENGE"))
u.j(0,A.d("Pony Pals: Detective Pony ",H.a([$.E,$.a1,$.aq],t),"Truly the most ironic work of all time.","A Disgusting Book"))
u.j(0,A.d("Handcuffs",H.a([$.au,$.I,$.c3],t),"These ones aren't fucking pointless like those trick ones.","Wrist Imprisoning Device"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.co,$.o)
q.h(0,$.al,$.h)
q.h(0,$.av,$.o)
p=[U.b]
q.h(0,R.A("Shit, Lets Be Lawyers",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],u)
t=new H.i([s,r])
t.h(0,$.al,$.e)
t.h(0,$.b9,$.h)
t.h(0,$.aL,$.h)
t.h(0,R.A("Enforce the Law",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],u)
t=new H.i([s,r])
t.h(0,$.al,$.e)
t.h(0,$.am,$.h)
t.h(0,$.b8,$.o)
t.h(0,$.bY,$.h)
t.h(0,$.cp,$.h)
t.h(0,$.cs,$.h)
t.h(0,$.iy,$.h)
t.h(0,R.A("Start a Revolution",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
S.fd.prototype={
N:function(){return!0},
O:function(){return!0},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Shining Armor",H.a([$.au,$.iK,$.v,$.f_],t),"Knight Shit","Kyoto Overcoat"))
u.j(0,A.d("Excalibur",H.a([$.a3,$.iK,$.v,$.di,$.c0,$.f0],t),"Knight Shit","Masamune"))
u.j(0,A.d("Noble Steed",H.a([$.I,$.v,$.c2,$.b_],t),"Knight Shit","Horse Prime, Envoy of the Ultimate End"))
u.j(0,A.d("Hero's Shield",H.a([$.au,$.f_,$.v,$.iK],t),"Knight Shit","A Weaklings Way Out, Shame Upon You"))
this.go=u},
a_:function(){return 1},
a0:function(){return 2.5},
a1:function(){return 0.75},
m:function(){var u,t,s
u=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.iz,$.e)
t.h(0,$.aY,$.e)
t.h(0,$.bC,$.e)
t.h(0,$.cs,$.e)
t.h(0,$.co,$.h)
t.h(0,new R.a6("Breed the Frogs",null),$.L)
s=[U.b]
t.h(0,R.J("Exploit the Heat",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
t.h(0,R.J("Fight the Beast",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
t.h(0,R.J("Protect the Consorts",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q}}
Q.fe.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("LAW Gavel",H.a([$.w,$.a8,$.jC],t),"Organics seem to respect this. Use it to your advantage.","Tiny Whacky Smacky Skull Cracky of Justice"))
u.j(0,A.d("LAW Caution Tape",H.a([$.w,$.a9,$.c3],t),"For when you want to tell inferior organics to keep out.","Impassible Barrier"))
u.j(0,A.d("STOP SIGN",H.a([$.w,$.lw,$.I,$.c3],t),"This isn't a weapon, dunkass.",null))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Scales","Disorder","Chaos","Injustice"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.co,$.e)
q.h(0,$.b9,$.h)
q.h(0,$.am,$.h)
q.h(0,$.al,$.o)
q.h(0,$.aA,$.o)
p=[U.b]
q.h(0,R.x("Punish the Rebels",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],u)
t=new H.i([s,r])
t.h(0,$.aY,$.e)
t.h(0,$.ao,$.h)
t.h(0,$.aB,$.h)
t.h(0,$.aY,$.o)
t.h(0,$.bX,$.o)
t.h(0,R.x("Become the Villain",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.be()),$.k)
t.h(0,R.x("Become the Hero",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],u)
t=new H.i([s,r])
t.h(0,$.d6,$.e)
t.h(0,$.aN,$.h)
t.h(0,$.d4,$.h)
t.h(0,$.d2,$.o)
t.h(0,$.bb,$.o)
t.h(0,R.x("Bring the Balance",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.be()),$.e)
t.h(0,R.x("Create the Balance",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.t},
gZ:function(){return this.u},
gp:function(){return this.v},
gD:function(){return this.w},
gY:function(){return this.B},
gX:function(){return this.C},
gW:function(){return this.F},
gaA:function(){return this.K},
gba:function(){return this.a7},
gV:function(){return this.aV},
gA:function(){return this.aW}}
K.ff.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Creeping Vine",H.a([$.a8,$.w,$.cx,$.b_],t),null,"Sentient Plant Tentacles"))
u.j(0,A.d("Lollipop",H.a([$.de,$.w,$.aV],t),null,"Sentient Plant Tentacles"))
u.j(0,A.d("Golem",H.a([$.au,$.dk,$.w,$.b_],t),"I guess. It's LIKE a robot. Sort of. Just not a super computer.","Living Rock Man"))
u.j(0,A.d("Ectoplasm",H.a([$.iI,$.w,$.aV],t),null,"Ghost [Censored]"))
u.j(0,A.d("Aqua Vitae",H.a([$.aE,$.w,$.aV,$.a3,$.ad],t),null,"Tears of JR"))
u.j(0,A.d("Homunculus",H.a([$.c2,$.w,$.b_],t),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.","False Man"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.ai,$.e)
q.h(0,$.a4,$.e)
q.h(0,$.eG,$.o)
q.h(0,$.P,$.h)
q.h(0,$.iD,$.h)
q.h(0,$.aU,$.o)
p=[U.b]
q.h(0,R.x("Restore the Forest",H.a([new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],u)
t=new H.i([s,r])
t.h(0,$.ai,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.aU,$.o)
t.h(0,$.P,$.h)
t.h(0,R.x("Distribute the Food",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],u)
t=new H.i([s,r])
t.h(0,$.aN,$.e)
t.h(0,$.a4,$.o)
t.h(0,$.bo,$.e)
t.h(0,$.ah,$.h)
t.h(0,$.bV,$.h)
t.h(0,$.it,$.h)
t.h(0,R.x("Protect the Farms",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.ag},
gA:function(){return this.K}}
G.fg.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("FAQ",H.a([$.ae,$.w,$.a5,$.eV],t),"Probably found it on a server in the Furthest Ring.","Questions to Ping JR About"))
u.j(0,A.d("Flashlight",H.a([$.a9,$.w,$.bq,$.ae,$.eV],t),null,"Tube of Localised Sun"))
u.j(0,A.d("Octet",H.a([$.w,$.bq,$.eV,$.a3,$.jy],t),null,"D13"))
u.j(0,A.d("Horseshoe",H.a([$.lg,$.w,$.ax],t),null,"Horse Sneaker"))
u.j(0,A.d("Rabbits Foot",H.a([$.lr,$.w],t),null,"Rabbit Remains"))
u.j(0,A.d("4 Leaf Clover",H.a([$.cx,$.w,$.bq,$.eV],t),null,"Plant of Luck +4"))
u.j(0,A.d("8-Ball",H.a([$.aE,$.w,$.b_],t),"It seems this is never right. Ask again later or some shit.","Worst Characters Only Quality"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.jq,$.e)
q.h(0,$.d0,$.h)
q.h(0,$.bm,$.e)
q.h(0,$.bW,$.e)
p=[U.b]
q.h(0,R.x("Be the Contestant",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
q.h(0,R.x("Go Big or Go Home",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],u)
t=new H.i([s,r])
t.h(0,$.ai,$.h)
t.h(0,$.P,$.h)
t.h(0,$.bn,$.e)
t.h(0,$.jp,$.e)
t.h(0,$.cq,$.e)
t.h(0,$.iw,$.e)
t.h(0,R.x("The Candlestick Taker",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.iR()),$.e)
t.h(0,R.x("Shine the Light",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
t=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],u)
q=new H.i([s,r])
q.h(0,$.d3,$.h)
q.h(0,$.a4,$.h)
q.h(0,$.d9,$.e)
q.h(0,$.P,$.h)
q.h(0,$.av,$.e)
q.h(0,R.J("Moderate the Wiki",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("Information Network"),R.bu()),$.e)
q.h(0,R.J("Create the Wiki",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("Disinformation Network"),R.be()),$.e)
q.h(0,R.x("Shed the Light",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(t,q),$.M)
u=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],u)
t=new H.i([s,r])
t.h(0,$.bm,$.e)
t.h(0,$.jq,$.e)
t.h(0,$.bW,$.h)
t.h(0,$.aB,$.h)
t.h(0,$.jo,$.h)
t.h(0,$.ah,$.o)
t.h(0,$.bC,$.o)
t.h(0,$.ao,$.h)
t.h(0,$.aA,$.o)
t.h(0,$.a4,$.h)
t.h(0,$.az,$.e)
t.h(0,R.x("Be the Star",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
t.h(0,R.J("Be the Biggest Star in Paradox Space",H.a([new U.b(),new U.b(),new U.b()],p),new Y.ag("What's my name?"),R.bu()),$.e)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.F},
gA:function(){return this.K}}
Z.fo.prototype={
N:function(){return!0},
l:function(){var u,t
u=[G.C]
this.ag.j(0,A.d("Dream Bubbles Book",H.a([$.E,$.ac,$.a1,$.la],u),null,null))
t=Q.n(null,null,A.B)
t.j(0,A.d("Deck of Uno Cards",H.a([$.jw,$.jG,$.ac],u),"Some kind of memey bullshit.","Shoguns Card"))
t.j(0,A.d("Lord's Cape",H.a([$.a2,$.v,$.ac],u),"Lord Shit","Shoguns Cape"))
t.j(0,A.d("Drawing Tablet",H.a([$.iL,$.v,$.ac],u),"Have fun drawing grids.","Shitpost Etching Table"))
t.j(0,A.d("How to Make Friends And Influence People",H.a([$.a3,$.E,$.v,$.c1,$.a1],u),"Good luck with that. You'll need it, asshole.","Book for Nerds"))
this.go=t},
O:function(){return!0},
a_:function(){return 3.1},
a0:function(){return 0.1},
a1:function(){return 3.1},
ab:function(){return!0},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.b8,$.o)
q.h(0,$.bY,$.o)
q.h(0,$.ah,$.o)
q.h(0,$.aL,$.h)
q.h(0,new R.a6("Command Minions to Breed Frogs",null),$.L)
p=[U.b]
q.h(0,R.J("Conquer Everything",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o=this.y
o.h(0,new X.m(t,q),$.ab)
u=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],u)
t=new H.i([s,r])
t.h(0,$.kS,$.e)
t.h(0,$.aM,$.e)
t.h(0,$.a4,$.e)
t.h(0,$.P,$.h)
t.h(0,new R.a6("Command Minions to Breed Frogs",null),$.L)
t.h(0,R.J("Praise Dutton",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.E},
gS:function(){return this.q},
gR:function(){return this.t},
gD:function(){return this.u},
gA:function(){return this.K}}
S.fp.prototype={
N:function(){return!0},
O:function(){return!0},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Alternate Costume",H.a([$.a2,$.v,$.ad,$.a3,$.aR],t),"Apparently some people don't like the regular mage outfit? Whatever.",null))
u.j(0,A.d("Mage's Cape",H.a([$.a2,$.v,$.ad],t),"Mage Shit","Shitty Wizard Cape"))
u.j(0,A.d("Mage's Staff",H.a([$.a8,$.v,$.ax,$.ad,$.c4],t),"Mage Shit","Shitty Wizard Stick of Power"))
u.j(0,A.d("Walking Broom",H.a([$.iF,$.a8,$.v,$.b_,$.ad,$.c4],t),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.","Support Stick of Cleaning"))
this.go=u},
a_:function(){return 0.67},
a0:function(){return 0.67},
a1:function(){return 1.5},
m:function(){var u,t,s
u=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.cm,$.e)
t.h(0,$.cs,$.h)
t.h(0,$.am,$.e)
t.h(0,$.bX,$.h)
t.h(0,$.aN,$.o)
t.h(0,new R.a6("Understand the Frogs",null),$.L)
s=[U.b]
t.h(0,R.J("Work With Exiles",H.a([new U.b(),new U.b(),new U.b()],s),new Y.aT(null),R.j()),$.k)
t.h(0,R.J("Suffer Visions",H.a([new U.b(),new U.b(),new U.b()],s),new Y.ag(null),R.j()),$.k)
t.h(0,R.J("Become the Mayor",H.a([new U.b(),new U.b(),new U.b()],s),new Y.ag(null),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q},
gA:function(){return this.F}}
U.fq.prototype={
N:function(){return!0},
O:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Maiden's Breath",H.a([$.cx,$.v,$.ar],t),null,null))
u.j(0,A.d("Feather Duster",H.a([$.a8,$.v,$.c4,$.eT],t),"Housemaid shit.","Maids Weapon of Choice"))
u.j(0,A.d("Valkyrie Shield",H.a([$.ar,$.au,$.I,$.v,$.a3,$.f_,$.l0],t),"Shieldmaid shit","Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?"))
u.j(0,A.d("Maiden's Songbook",H.a([$.E,$.v,$.ay,$.a1],t),"Longing maiden shit.","Smash Mouth Lyrics"))
this.go=u},
a_:function(){return 0.33},
a0:function(){return 3},
a1:function(){return 1.5},
m:function(){var u,t
u=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.ba,$.e)
t.h(0,$.ai,$.e)
t.h(0,$.P,$.h)
t.h(0,$.a4,$.h)
t.h(0,$.bn,$.h)
t.h(0,$.aA,$.h)
t.h(0,new R.a6("Serve the  Frogs",null),$.L)
t.h(0,R.J("Serve the PTA",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y1},
gS:function(){return this.y2},
gR:function(){return this.G},
gD:function(){return this.E}}
V.fy.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Puzzle Box",H.a([$.a8,$.w,$.ad],t),"Don't let Mind players fool you. It's not about smarts.","13x13 Rubix Cube"))
u.j(0,A.d("Tesla Coil",H.a([$.ae,$.w,$.I],t),"Mind is electric shit. I guess.","Lightning Weiner"))
u.j(0,A.d("Coin",H.a([$.I,$.w],t),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.","Official Minted Shogun Coin Circa. 1764"))
u.j(0,A.d("Electronic Door",H.a([$.I,$.w,$.ae,$.a5],t),"I guess it has buttons and shit? I bet it leads somewhere weird.","Star Wars Force Activated Door"))
u.j(0,A.d("Janus Bust",H.a([$.au,$.jv,$.dk,$.ac,$.w,$.a3,$.ae],t),"So is the joke that Mind Players are two faced?","Bust of A Giant Phallic Asshole"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.aM,$.h)
q.h(0,$.d0,$.o)
q.h(0,$.av,$.o)
p=[U.b]
q.h(0,R.x("Change the View",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.c7()),$.e)
q.h(0,R.x("Pick a Door, any Door",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],u)
t=new H.i([s,r])
t.h(0,$.co,$.o)
t.h(0,$.al,$.h)
t.h(0,$.av,$.o)
t.h(0,$.aM,$.o)
t.h(0,R.x("Face the Music",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],u)
t=new H.i([s,r])
t.h(0,$.d6,$.e)
t.h(0,$.a4,$.h)
t.h(0,$.d9,$.e)
t.h(0,$.P,$.h)
t.h(0,$.av,$.e)
t.h(0,R.x("Make the Connections",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.F},
gA:function(){return this.K}}
E.fz.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Feather Pen",H.a([$.I,$.v,$.ac,$.eT],t),"Oh my god, did JR really not know how to spell 'Quill'?","Feather Object to be Dipped in Black Liquid"))
u.j(0,A.d("Half Finished Bust of Snoop Dog",H.a([$.ln,$.v,$.jv,$.ax,$.a3],t),"Meme Shit","The Gods Refused to Let This Object Finish Completion"))
u.j(0,A.d("Book of Poetry",H.a([$.E,$.v,$.ac,$.a1],t),"Hope it inspires you.","Ocean Man Lyrics 50,000 Times: The Book"))
this.go=u},
N:function(){return!1},
O:function(){return!1},
a_:function(){return 0.1},
a0:function(){return 3},
a1:function(){return 0.1},
ab:function(){return!0},
m:function(){var u,t
u=H.a(["Music","Dance","Poetry","Inspiration"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.ba,$.e)
t.h(0,$.ai,$.e)
t.h(0,$.P,$.h)
t.h(0,$.a4,$.h)
t.h(0,$.bn,$.h)
t.h(0,$.aA,$.h)
t.h(0,new R.a6("Inspire Frog Breeding",null),$.h)
t.h(0,R.J("Inspire the People",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q},
gA:function(){return this.F}}
F.fA.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Piano",H.a([$.ax,$.a8,$.ay,$.ac],t),"An entire piano. In your inventory. WHY.","Elephant Corpse Turned Amazing Instrument"))
u.j(0,A.d("Flute",H.a([$.I,$.ay],t),"I feel like a spaceship captain should play this.","Pipe of Screeches 2: Orchestral Shitstorm"))
u.j(0,A.d("Microphone",H.a([$.br,$.ae],t),"Do you really deserve to drop this like it's hot?","Speaking Tube of Passion +3"))
u.j(0,A.d("Violin",H.a([$.a8,$.ay],t),null,"Tiny Cello"))
u.j(0,A.d("Sheet Music",H.a([$.E,$.ay],t),null,"Cheat Codes for Instruments"))
u.j(0,A.d("Electric Guitar",H.a([$.a9,$.ay,$.ae,$.br,$.aq],t),null,"Electrical Stringed Music Maker"))
u.j(0,A.d("Turn Tables",H.a([$.a9,$.ay,$.ae,$.aq],t),null,"Spinning Disc Sound Maker"))
u.j(0,A.d("Guitar",H.a([$.a8,$.ay],t),null,"String Music Maker"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.aB,$.L)
q.h(0,$.jo,$.e)
q.h(0,$.bW,$.e)
q.h(0,$.bn,$.h)
q.h(0,$.P,$.h)
q.h(0,$.iv,$.h)
p=[U.b]
q.h(0,R.A("Play the Music",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
q.h(0,R.A("Play the Crowd",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],u)
t=new H.i([s,r])
t.h(0,$.js,$.L)
t.h(0,$.b9,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.bn,$.e)
t.h(0,$.iv,$.L)
t.h(0,R.A("Sing the Song",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],u)
t=new H.i([s,r])
t.h(0,$.eG,$.L)
t.h(0,$.ao,$.h)
t.h(0,$.bo,$.h)
t.h(0,R.A("And It Don't Stop",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
F.fB.prototype={}
F.eu.prototype={}
V.fK.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Shorts",H.a([$.a2,$.v,$.cw,$.a3],t),"Don't skip leg day.","Crotch Hugging Thigh Exposers. Absolutely Indecent."))
u.j(0,A.d("Sidekick Figurine",H.a([$.a9,$.v,$.aq],t),"Robin is way cooler than Batman.","Small Statue of a White Headed Cat in a Green Suit"))
u.j(0,A.d("Steroids",H.a([$.aQ,$.v,$.ad],t),"Shit son, calm down with all the screaming and the powering up.","My Morning Medication"))
this.go=u},
m:function(){var u,t,s
u=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.iz,$.e)
t.h(0,$.aU,$.h)
t.h(0,$.d8,$.h)
t.h(0,$.iB,$.h)
t.h(0,$.ba,$.h)
t.h(0,$.a4,$.h)
t.h(0,$.bV,$.h)
t.h(0,$.cq,$.h)
t.h(0,$.kV,$.h)
t.h(0,$.it,$.h)
t.h(0,$.jp,$.h)
t.h(0,new R.a6("Help Breed the Frogs",null),$.L)
s=[U.b]
t.h(0,R.x("Become The Best",H.a([new U.b(),new U.b(),new U.b(),new U.z()],s),new Y.y(),R.j()),$.k)
t.h(0,R.J("Explore the Tombs",H.a([new U.b(),new U.b(),new U.b()],s),new Y.cY(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q},
gbq:function(){return this.F}}
G.fO.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Superhero Action Figure",H.a([$.a9,$.aq,$.aD],t),"How perfectly fucking generic. You couldn't even pick a brand name?","Shogun Action Figure"))
u.j(0,A.d("Action DVD",H.a([$.a9,$.aq],t),null,"Shogun The Movie"))
u.j(0,A.d("Ghost Busters DVD",H.a([$.a9,$.iI],t),"I refuse to call a bunch of washed up comedians.","Shogunsprite Hunters The Movie"))
u.j(0,A.d("Snow Dogs DVD",H.a([$.a9,$.aZ,$.bp,$.dh],t),null,"Snow Buddies Anthology"))
u.j(0,A.d("Skateboarding Video Game",H.a([$.a9,$.aq],t),"All of these glitches are offensive to my robo-sensbilities.","Snow Buddies Anthology"))
u.j(0,A.d("Apple Juice",H.a([$.aQ,$.de],t),"Gross.","Culinary Perfection"))
u.j(0,A.d("Movie Poster",H.a([$.E,$.aq],t),null,"Shogun 2: Electric Shitstorm Poster"))
u.j(0,A.d("Audrey II Plush",H.a([$.cx,$.aq,$.a2,$.b_],t),null,"World Eating Plant Plush, A Pure Entity"))
u.j(0,A.d("Peashooter Toy",H.a([$.cx,$.dj,$.aq,$.a2],t),null,"Plants Vs Zombies Peaplant Plush"))
u.j(0,A.d("Shitty Sword",H.a([$.aD,$.I,$.aq,$.f0,$.c0,$.jI],t),"So. Shitty.","Perfect Weapon"))
u.j(0,A.d("GameBro Magazine",H.a([$.E,$.aq],t),"5/5 hats.","Nerd Magazine"))
u.j(0,A.d("GameGrl Magazine",H.a([$.E,$.aq],t),"5/5 lady hats.","Nerd Magazine for Girls"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.aA,$.h)
q.h(0,$.az,$.h)
q.h(0,$.ao,$.e)
q.h(0,$.aU,$.L)
q.h(0,$.bZ,$.L)
p=[U.b]
q.h(0,R.A("Become the Star",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],u)
t=new H.i([s,r])
t.h(0,$.cp,$.h)
t.h(0,$.b9,$.h)
t.h(0,$.az,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.aY,$.e)
t.h(0,R.A("Stop the Villain",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],u)
t=new H.i([s,r])
t.h(0,$.az,$.h)
t.h(0,$.bm,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.aY,$.h)
t.h(0,R.A("Premiere the Movie",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
N.fQ.prototype={
N:function(){return!0},
O:function(){return!0},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Feather'd Cap",H.a([$.a2,$.v,$.cw],t),"So fucking pretentious.","Pupa Pan Hat"))
u.j(0,A.d("Crown",H.a([$.a3,$.jz,$.v,$.cw],t),"Prince shit. Man. The tiara dealy.","A False Symbol of Power"))
u.j(0,A.d("Gunpowder",H.a([$.dg,$.v],t),"Huh. I guess cause princes are destructive.","The Best Thing since The Shogun"))
this.go=u},
ab:function(){return!0},
m:function(){var u,t
u=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.az,$.h)
t.h(0,$.aM,$.h)
t.h(0,$.bo,$.o)
t.h(0,new R.a6("Destroy the Lack of Frogs",null),$.L)
t.h(0,R.J("Fix All The Things",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.G},
gS:function(){return this.E},
gR:function(){return this.q},
gD:function(){return this.t}}
U.b.prototype={}
U.z.prototype={}
R.fR.prototype={
k:function(a){return new H.ca(H.k5(this)).k(0)+": "+this.c},
gJ:function(a){return this.c}}
R.fP.prototype={}
R.ev.prototype={}
R.dD.prototype={}
R.a6.prototype={}
E.fS.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Curtain",H.a([$.a2,$.w,$.aD],t),null,"Show Ender"))
u.j(0,A.d("Cursed Sword",H.a([$.I,$.f0,$.di,$.w,$.c0,$.aW,$.aD,$.df,$.at],t),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",null))
u.j(0,A.d("Omegaphone",H.a([$.I,$.br,$.ae,$.w,$.aD],t),"Rage players are such loud assholes.","Voice Embiggener"))
u.j(0,A.d("Trike Horn",H.a([$.au,$.I,$.br,$.c1,$.cy,$.w,$.aD],t),null,"Two-wheel device mounted Juggalo voicebox"))
u.j(0,A.d("Bacchus Wine",H.a([$.aQ,$.c1,$.ac,$.w,$.a3,$.aD],t),"I guess it makes you go beserk or some shit. Sucks being biological.","Aged Grape Gore"))
u.j(0,A.d("Nightmare Fuel",H.a([$.a8,$.w,$.aW,$.bs,$.dg,$.aD],t),"It's clowns isn't it. It's always fucking clowns.","Image of Adam Sandler in a Troll Face Shirt"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.iu,$.e)
q.h(0,$.b8,$.e)
q.h(0,$.b9,$.e)
q.h(0,$.aN,$.h)
q.h(0,$.ah,$.h)
q.h(0,$.am,$.h)
q.h(0,$.al,$.o)
q.h(0,$.bZ,$.h)
q.h(0,$.cp,$.e)
q.h(0,$.iy,$.e)
q.h(0,$.cs,$.e)
q.h(0,$.iA,$.e)
q.h(0,$.eG,$.h)
q.h(0,$.bY,$.e)
p=[U.b]
q.h(0,R.x("Stop the War",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.dF()),$.k)
q.h(0,R.x("Stop the Civil War",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],u)
t=new H.i([s,r])
t.h(0,$.bn,$.e)
t.h(0,$.ah,$.h)
t.h(0,$.al,$.e)
t.h(0,$.aB,$.e)
t.h(0,$.aA,$.e)
t.h(0,$.az,$.h)
t.h(0,$.ix,$.o)
t.h(0,$.b8,$.h)
t.h(0,$.aU,$.e)
t.h(0,$.ao,$.e)
t.h(0,$.bZ,$.o)
t.h(0,R.x("Do a Stupid Dance",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],u)
t=new H.i([s,r])
t.h(0,$.iu,$.e)
t.h(0,$.bZ,$.e)
t.h(0,$.al,$.e)
t.h(0,$.aU,$.h)
t.h(0,$.aA,$.e)
t.h(0,R.x("Hate This Bullshit Land",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.F},
gA:function(){return this.K}}
Y.bJ.prototype={}
Y.G.prototype={}
Y.aT.prototype={}
Y.ag.prototype={
gJ:function(a){return this.c}}
Y.y.prototype={}
Y.cY.prototype={}
Y.a7.prototype={}
Y.aH.prototype={}
Y.ek.prototype={}
Y.dB.prototype={}
Y.db.prototype={}
Y.dC.prototype={}
N.fW.prototype={
N:function(){return!0},
O:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Domino Mask",H.a([$.a2,$.v,$.cw],t),"Not satisfied with the god tier shit I guess.","This Scares Me On A Primal Level"))
u.j(0,A.d("Archery Set",H.a([$.l4,$.v,$.cw,$.l1],t),"Like robin hood and shit.","This Is Number 69 On The List I Dont Need To Make An Equius Joke"))
u.j(0,A.d("Gristtorrent Server",H.a([$.a3,$.a9,$.ae,$.v,$.a5,$.aR],t),"Steal from the rich, give to the poor.","Shogun Coin Printer. Illegal Item."))
this.go=u},
a_:function(){return 1.25},
a0:function(){return 1.25},
a1:function(){return 1},
ab:function(){return!0},
m:function(){var u,t
u=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.al,$.e)
t.h(0,$.am,$.h)
t.h(0,$.aY,$.h)
t.h(0,new R.a6("Steal the Frogs",null),$.L)
t.h(0,R.J("Lead a Rebellion",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q}}
Q.fX.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Red Rose",H.a([$.bD,$.ar],t),null,"Seductive Plant"))
u.j(0,A.d("Friend Fic",H.a([$.bD,$.E],t),"Don't ship irl ppl, asshole.","Grid of Sin"))
u.j(0,A.d("Chocolate Bar",H.a([$.bD,$.aQ],t),"Robots don't need shitty food.","Brick of Shit Coloured Nice Tasting Food"))
u.j(0,A.d("Candelabra",H.a([$.bD,$.bs],t),null,"Dying Light Holding Device, Cruelty Made of Metal"))
u.j(0,A.d("Head Cannon",H.a([$.bD,$.dg,$.I,$.dj],t),"Fuck you for that pun, JR.",null))
u.j(0,A.d("Her Pitch Passions Novel",H.a([$.a1,$.E,$.bD],t),"Okay, I will give ABJ this. Troll romance is HILARIOUS.","I dont Understand This But It Makes Me Sad"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.ap,$.e)
q.h(0,$.d8,$.h)
q.h(0,$.cl,$.h)
q.h(0,$.d7,$.e)
q.h(0,$.aB,$.h)
q.h(0,$.eF,$.o)
p=[U.b]
q.h(0,R.A("Set the Mood",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],u)
t=new H.i([s,r])
t.h(0,$.aB,$.h)
t.h(0,$.bm,$.e)
t.h(0,$.d7,$.e)
t.h(0,$.ap,$.h)
t.h(0,$.bW,$.o)
t.h(0,$.eF,$.o)
t.h(0,R.A("Plan the Date",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],u)
t=new H.i([s,r])
t.h(0,$.eF,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.cl,$.h)
t.h(0,$.iB,$.e)
t.h(0,$.d7,$.e)
t.h(0,$.aB,$.h)
t.h(0,$.bW,$.o)
t.h(0,R.A("Ship All the Ships",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
t.h(0,R.A("Flushed Shipping Dungeon",H.a([new U.b(),new U.b()],p),new Y.db(),R.bI()),$.L)
t.h(0,R.A("Pale Shipping Dungeon",H.a([new U.b(),new U.b()],p),new Y.dB(),R.bI()),$.L)
t.h(0,R.A("Pitched Shipping Dungeon",H.a([new U.b(),new U.b()],p),new Y.dC(),R.bI()),$.L)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
T.fZ.prototype={
$1:function(a){return!a.cy}}
T.cC.prototype={
M:function(a,b,c,d){var u
this.l()
this.m()
u=this.ch
if($.e5().al(u))H.cf("Duplicate class id for "+this.k(0)+": "+u+" is already registered for "+H.r($.e5().n(0,u))+".")
$.e5().h(0,u,this)},
l:function(){var u=Q.n(null,null,A.B)
u.j(0,A.d("Perfectly Generic Object",H.a([],[G.C]),null,"Green Version of Those Sweet Yellow Candies I Loved"))
this.go=u},
O:function(){return!1},
ab:function(){return!1},
a_:function(){return 1},
a1:function(){return 1},
a0:function(){return 1},
N:function(){return!1},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Decay","Rot","Death"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.aN,$.e)
q.h(0,$.a4,$.o)
q.h(0,$.bo,$.e)
q.h(0,$.ah,$.h)
q.h(0,$.bV,$.o)
p=[U.b]
q.h(0,R.J("Revive the Consorts",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o=this.y
o.h(0,new X.m(t,q),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines"],u)
t=new H.i([s,r])
t.h(0,$.cr,$.e)
t.h(0,$.cq,$.o)
t.h(0,$.bX,$.h)
t.h(0,$.aL,$.e)
t.h(0,$.am,$.o)
t.h(0,R.J("Produce the Goods",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
t.h(0,R.J("Do the Teamwork",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.bI()),$.L)
o.h(0,new X.m(q,t),$.ab)
u=H.a(["Peace","Tranquility","Rest"],u)
t=new H.i([s,r])
t.h(0,$.P,$.e)
t.h(0,$.a4,$.o)
t.h(0,$.ai,$.h)
t.h(0,R.A("Relax the Consorts According to Prophecy",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.iQ()),$.o)
t.h(0,R.J("Relax the Consorts",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.ab)},
k:function(a){return this.x},
gJ:function(a){return this.x},
gp:function(){return this.id},
gS:function(){return this.k1},
gR:function(){return this.k2},
gD:function(){return this.k3},
gA:function(){return this.k4},
gbq:function(){return this.r2}}
E.h_.prototype={
N:function(){return!0},
O:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Sage's Robe",H.a([$.a2,$.v,$.aP,$.a5,$.ad,$.a3],t),"So sagey. Needs a beard or some shit, though.","Pompous Asshole Robes"))
u.j(0,A.d("Peer Reviewed Journal",H.a([$.E,$.v,$.a1,$.a5],t),"I guess this is p well reviewed.","Book Containing More Corrections Than Actual Content"))
u.j(0,A.d("Guru Pillow",H.a([$.a2,$.v,$.eX,$.a5],t),"Huh. What. Was JR thinking. When they made this item?","Headrest For Smart People"))
this.go=u},
m:function(){var u,t
u=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.d3,$.h)
t.h(0,$.a4,$.h)
t.h(0,$.d9,$.e)
t.h(0,$.P,$.o)
t.h(0,$.av,$.e)
t.h(0,new R.a6("Understand the Frogs",null),$.L)
t.h(0,R.J("Be the Sage",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y1},
gS:function(){return this.y2},
gR:function(){return this.G},
gD:function(){return this.E},
gA:function(){return this.C}}
K.h0.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Uno Reverse Card",H.a([$.jw,$.w,$.aD,$.eZ],t),null,null))
u.j(0,A.d("JR Body Pillow",H.a([$.eX,$.aP,$.w,$.eZ],t),null,null))
this.x1=u},
m:function(){var u,t
u=H.a(["Sauce"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.iu,$.e)
t.h(0,$.b8,$.e)
t.h(0,$.d1,$.e)
t.h(0,$.aN,$.h)
t.h(0,$.ah,$.h)
t.h(0,$.am,$.h)
t.h(0,$.al,$.o)
t.h(0,$.cs,$.e)
t.h(0,$.iA,$.e)
t.h(0,$.bY,$.e)
t.h(0,R.x("Corrupt. Taint. Consume. Become.",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.y(),R.j()),$.h)
this.f.h(0,new X.m(u,t),$.M)},
gP:function(){return this.aX},
gp:function(){return this.aY},
gD:function(){return this.aZ},
gY:function(){return this.b_},
gX:function(){return this.b0},
gW:function(){return this.b1},
gV:function(){return this.b2},
gA:function(){return this.c9}}
Y.h1.prototype={
N:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Walking Stick",H.a([$.a8,$.v,$.c4],t),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.","Support Stick of Old And Injured"))
u.j(0,A.d("Adorable Girlscout Beret",H.a([$.a2,$.v,$.lb,$.a5,$.a3],t),"Okay, legit, ABJ's hat is amazing.","ABJs Hat"))
u.j(0,A.d("Map",H.a([$.E,$.v,$.a5],t),"I guess Scouts update this on their own? Untread ground and all.","Kyoto Overcoats Spacemap"))
u.j(0,A.d("Magical Compass",H.a([$.I,$.v,$.a5,$.ad],t),"Magnets man, how do they work.","Shoguns Navigation Box"))
this.go=u},
O:function(){return!0},
m:function(){var u,t
u=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.ba,$.e)
t.h(0,$.ai,$.e)
t.h(0,$.a4,$.e)
t.h(0,$.ao,$.o)
t.h(0,$.P,$.o)
t.h(0,R.J("Blaze a Trail",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
t.h(0,new R.a6("Find the Frogs",null),$.L)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q}}
L.h2.prototype={
N:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Scroll",H.a([$.E,$.v,$.a5],t),"Scribe Shit","Rolled Up Picture of JR"))
u.j(0,A.d("Ink Pot",H.a([$.aE,$.v,$.aR,$.a5],t),"You could probably censor shit with this.","Black Liquid That Tastes Awful"))
u.j(0,A.d("Blank Book",H.a([$.E,$.v,$.a1,$.a5,$.aR,$.a3],t),"Fill it in yourself I guess.","Dick Drawing Practice Apparatus"))
this.go=u},
O:function(){return!0},
m:function(){var u,t
u=H.a(["Quills","Feathers","Pens","Ink","Paper"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.iv,$.e)
t.h(0,$.a4,$.e)
t.h(0,$.av,$.e)
t.h(0,$.P,$.h)
t.h(0,$.aM,$.h)
t.h(0,new R.a6("Understand the Frogs",null),$.L)
t.h(0,R.J("Restore the Library",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q},
gA:function(){return this.F}}
S.h3.prototype={
N:function(){return!1},
O:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Cueball",H.a([$.l7,$.v],t),"Don't listen to this asshole.","A Worthless White Ball"))
u.j(0,A.d("Crystal Ball",H.a([$.iE,$.l6,$.v,$.bq],t),"Seer shit.","A Worthless Clear Ball"))
u.j(0,A.d("Binoculars",H.a([$.aE,$.v,$.I],t),"Seer shit.","Long Distance Perversion Apparatus"))
u.j(0,A.d("Blindfold",H.a([$.l3,$.v,$.aP],t),"May as well skip the whole 'going blind' part of the deal.","Long Distance Perversion Apparatus"))
this.go=u},
a_:function(){return 0.67},
a0:function(){return 0.67},
a1:function(){return 1},
m:function(){var u,t,s
u=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.kT,$.e)
t.h(0,$.d2,$.e)
t.h(0,$.kR,$.e)
t.h(0,$.aU,$.h)
s=[U.b]
t.h(0,R.J("Be the King",H.a([new U.b(),new U.b(),new U.b()],s),new Y.aT(null),R.j()),$.k)
t.h(0,new R.a6("Understand the Frogs",null),$.L)
t.h(0,R.J("Work With Exiles",H.a([new U.b(),new U.b(),new U.b()],s),new Y.aT(null),R.j()),$.k)
t.h(0,R.J("Have the Keikaku",H.a([new U.b(),new U.b()],s),new Y.aT(null),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y1},
gS:function(){return this.y2},
gR:function(){return this.G},
gD:function(){return this.E},
gA:function(){return this.C}}
Y.h6.prototype={
N:function(){return!1},
l:function(){var u,t,s
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Meddler's Guide",H.a([$.a1,$.v,$.E,$.c1,$.a3,$.aV],t),"Meddling meddlers gotta meddle. ",null))
u.j(0,A.d("First Aid Kit",H.a([$.aE,$.v,$.aV],t),"Heals here.","Anti-Pain Box"))
s=$.v
u.j(0,A.d("Cloud in a Bottle",H.a([s,s,$.aC],t),"Fucking sylphs man. How do they work?","Fart In a Jar"))
u.j(0,A.d("Fairy Wings",H.a([$.ad,$.v,$.bq,$.ar,$.E],t),"I GUESS Sylphs in myths are kinda fairy shit, right?","Wings Cut Straight From a God Tier Troll"))
this.go=u},
O:function(){return!0},
a_:function(){return 0.5},
a0:function(){return 1.5},
a1:function(){return 1},
ab:function(){return!1},
m:function(){var u,t
u=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.a4,$.h)
t.h(0,$.ba,$.e)
t.h(0,$.aU,$.h)
t.h(0,$.P,$.h)
t.h(0,$.ai,$.e)
t.h(0,new R.a6("Forge the Frogs",null),$.L)
t.h(0,R.J("Supply the Consorts",H.a([new U.b(),new U.b(),new U.b()],[U.b]),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gD:function(){return this.G},
gA:function(){return this.B}}
N.h7.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Fiduspawn Plush",H.a([$.dh,$.a2,$.aP],t),"Hopefully just a replica.","Copyrighted Yellow Rat Plush"))
u.j(0,A.d("Teddy Bear",H.a([$.dh,$.a2,$.aP],t),null,"Cuddle Bear"))
u.j(0,A.d("D20",H.a([$.l9,$.a9],t),null,"D113"))
u.j(0,A.d("Pet Pigeon",H.a([$.eT,$.b_,$.c2,$.c_,$.df,$.lp],t),"Better fucking tell JR. Ironic pigeons and all.","Bird of Impending Doom"))
u.j(0,A.d("Cat Ears",H.a([$.a2,$.aP,$.dh],t),"Fuck. Cat. Trolls.","Weeb Shit"))
u.j(0,A.d("Religious Text",H.a([$.a1,$.E],t),null,"Religious Book Containing No Shogun, A Bad Book"))
u.j(0,A.d("Psychology Book",H.a([$.a1,$.E],t),null,"How to Guarantee Your Message Gets Pinned The Book"))
u.j(0,A.d("Therapy Couch",H.a([$.aP,$.a2],t),null,"Giant Problem Absorbing Couch"))
u.j(0,A.d("FLARP Manual",H.a([$.a1,$.E,$.a5],t),"Fuck. Cat. Trolls. Though I guess she never FLARPED.","Book of Nerd Natural Selection"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.bb,$.o)
q.h(0,$.P,$.h)
q.h(0,$.aM,$.e)
q.h(0,$.av,$.h)
p=[U.b]
q.h(0,R.A("The Therapist is IN",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],u)
t=new H.i([s,r])
t.h(0,$.bb,$.o)
t.h(0,$.P,$.e)
t.h(0,$.aM,$.e)
t.h(0,$.jl,$.e)
t.h(0,$.aB,$.e)
t.h(0,$.js,$.e)
t.h(0,$.av,$.h)
t.h(0,R.A("Meditate On Frogism",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],u)
t=new H.i([s,r])
t.h(0,$.aL,$.o)
t.h(0,$.bm,$.e)
t.h(0,$.ai,$.e)
t.h(0,$.aY,$.e)
t.h(0,$.co,$.e)
t.h(0,R.A("Protect the FLARPers",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
N.h8.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Frog Statue",H.a([$.au,$.dk,$.w],t),"Frogs.","Croaking Lizard Monument"))
u.j(0,A.d("Frog Costume",H.a([$.a2,$.w],t),"You won't be able to stop the ribbits.","Croaking Lizard Cosplay"))
u.j(0,A.d("Nuclear Reactor",H.a([$.eW,$.a5,$.ae,$.w],t),null,"A Representation of My Hatred for Everything"))
u.j(0,A.d("Telescope",H.a([$.I,$.aE,$.a5,$.w],t),null,"Mono-Sighted Long Ranged Perversion Apparatus"))
u.j(0,A.d("Green Sun Poster",H.a([$.E,$.w,$.jA,$.a3],t),"Huh.","Sauce Sun Poster"))
this.x1=u},
m:function(){var u,t,s
u=H.a(["Frogs"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.aU,$.o)
t.h(0,$.jn,$.e)
s=[U.b]
t.h(0,R.x("Light the Forge",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.x("Light the Forge",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.x("Light the Forge",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.x("Light the Forge",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.x("Light the Forge",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.x("Light the Forge",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,new R.a6("Breed the Frogs, But Be Boring About It",null),$.e)
this.f.h(0,new X.m(u,t),$.m3)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.F},
gA:function(){return this.K}}
R.hg.prototype={
N:function(){return!0},
l:function(){var u,t,s
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Meddler's Guide",H.a([$.a1,$.v,$.E,$.c1,$.a3,$.aV],t),"Meddling meddlers gotta meddle. ",null))
u.j(0,A.d("First Aid Kit",H.a([$.aE,$.v,$.aV],t),"Heals here.","Anti-Pain Box"))
s=$.v
u.j(0,A.d("Cloud in a Bottle",H.a([s,s,$.aC],t),"Fucking sylphs man. How do they work?","Fart In a Jar"))
u.j(0,A.d("Fairy Wings",H.a([$.ad,$.v,$.bq,$.ar,$.E],t),"I GUESS Sylphs in myths are kinda fairy shit, right?","Wings Cut Straight From a God Tier Troll"))
this.go=u},
O:function(){return!1},
a_:function(){return 1},
a0:function(){return 1},
a1:function(){return 1.5},
ab:function(){return!0},
m:function(){var u,t,s
u=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.aM,$.e)
t.h(0,$.P,$.e)
t.h(0,$.ba,$.h)
t.h(0,$.d9,$.h)
t.h(0,$.kQ,$.h)
t.h(0,$.bV,$.h)
t.h(0,$.it,$.h)
t.h(0,$.kU,$.h)
s=[U.b]
t.h(0,R.J("Heal the Timeline",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.jO()),$.e)
t.h(0,R.J("Be The Sylph",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
t.h(0,R.J("Relax the Consorts",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
t.h(0,new R.a6("Purify the Frogs",null),$.L)
t.h(0,R.J("Purify the Water",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y1},
gS:function(){return this.y2},
gR:function(){return this.G},
gD:function(){return this.E},
gA:function(){return this.C}}
D.hk.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Robot",H.a([$.ae,$.I,$.b_,$.a5],t),"An obviously superior choice.","ShogunBot"))
u.j(0,A.d("Circuit Board",H.a([$.ae,$.I],t),"This better be going INTO a robot and not out of one.","Machines Heart, Torn Straight From ABs still powered chest"))
u.j(0,A.d("Datastructures for Assholes",H.a([$.ae,$.E],t),"Sounds like the perfect book for you.","Machines Heart, Torn Straight From ABs still powered chest"))
u.j(0,A.d("~ATH For Dummies ",H.a([$.ae,$.E,$.at,$.a1],t),"Such a pointless book.","Huge Fucking Book for Goddamn Lifeless Nerds"))
u.j(0,A.d("3-D Printer",H.a([$.a9,$.ae,$.I],t),null,"3-D Shitpost Maker"))
u.j(0,A.d("Virus on a USB Stick",H.a([$.lf,$.I],t),"Fuck you. You fucking DROP that.","Make a Computer Shitpost Itself to Death on A Stick"))
u.j(0,A.d("Wrench",H.a([$.lx,$.I,$.ax],t),"Make sure to use it build a dope af robot.","The Tool of Judgement for Machines"))
u.j(0,A.d("Computer",H.a([$.ae,$.I],t),"Computers are good. That is all there is to say on the matter.","JRs Computer, Broken yeah but still"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.d6,$.h)
q.h(0,$.cm,$.e)
q.h(0,$.cr,$.e)
q.h(0,$.am,$.o)
p=[U.b]
q.h(0,R.A("Fix the Machine",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aH(),R.j()),$.k)
q.h(0,R.A("Decipher the Enigma",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.c7()),$.e)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],u)
t=new H.i([s,r])
t.h(0,$.cr,$.e)
t.h(0,$.cq,$.o)
t.h(0,$.bX,$.h)
t.h(0,$.aL,$.e)
t.h(0,$.am,$.o)
t.h(0,R.A("Produce the Goods",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
t.h(0,R.A("Stop the Dispute",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.bu()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],u)
t=new H.i([s,r])
t.h(0,$.d6,$.o)
t.h(0,$.cm,$.e)
t.h(0,$.cr,$.e)
t.h(0,$.am,$.o)
t.h(0,R.A("Learn the Secret",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
V.hl.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Lighter",H.a([$.I,$.bs],t),"Don't let ABJ know you have this.","ABJs Birthday Gift"))
u.j(0,A.d("Siberia Poster",H.a([$.E,$.bp],t),null,"Poster of the Shoguns Birthplace"))
u.j(0,A.d("Nuclear Winter Poster",H.a([$.E,$.bp,$.eW],t),null,"Shoguns Dream as a Poster"))
u.j(0,A.d("Doomsday Device",H.a([$.I,$.at,$.eW,$.aF,$.df],t),"Oh god, who would fucking trust YOU with thi?","Shoguns UNO Reverse Card"))
u.j(0,A.d("Juggalo Poster",H.a([$.E,$.lj],t),null,"False God Poster"))
u.j(0,A.d("Fancy Watch",H.a([$.I,$.dl,$.aF],t),null,"Shoguns Watch"))
u.j(0,A.d("Magnificent Crown",H.a([$.I,$.dl,$.aF],t),null,"The Shoguns Crown"))
u.j(0,A.d("Bitching Clothes",H.a([$.a2,$.cw,$.aF],t),"Just wear roboclothes. Never need another set.","Shoguns Godtier Outfit"))
u.j(0,A.d("Ceramic Pork Hollow",H.a([$.iG,$.dl],t),"...","Shoguns Old Porkhollow"))
u.j(0,A.d("Shit Ton of Guns",H.a([$.I,$.lq,$.dj,$.aF],t),"You are one high quality sociopath.","Dynamos Armament"))
u.j(0,A.d("Sniper Rifle",H.a([$.I,$.lt,$.dj,$.aF],t),"What. The. Hell.","Long Range Rooty Tooty Point And Boomy"))
u.j(0,A.d("AK-47",H.a([$.I,$.lm,$.dj,$.aF],t),"What is it with you and guns.","100% Genuine Soviet Kalashnikov"))
u.j(0,A.d("IED",H.a([$.jB,$.c0,$.I,$.dg,$.aF],t),"You are probably going to blow yourself up, asshole.","Shitpost Bomb"))
u.j(0,A.d("Idiots Guide To Being An Asshole",H.a([$.E,$.c1,$.a1],t),"Oh god, this is HILARIOUS, it's the PERFECT book for you.","Shoguns Guide to Shitposting"))
u.j(0,A.d("Bike Horn",H.a([$.cy,$.I,$.br,$.c1],t),"I hear flesh bags keep gtting scared by these. I don't get it.","Bike Mounted Pain Box"))
u.j(0,A.d("Matches",H.a([$.a8,$.bs],t),"Don't let ABJ get this.","ABJs First Arsonist Set"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Fire","Arson","Blaze","Burning","Flames"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.az,$.h)
q.h(0,$.bm,$.e)
q.h(0,$.bC,$.e)
q.h(0,$.cs,$.e)
q.h(0,$.iz,$.e)
q.h(0,$.aY,$.h)
p=[U.b]
q.h(0,R.A("Start the Fires",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aT(null),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],u)
t=new H.i([s,r])
t.h(0,$.az,$.h)
t.h(0,$.bm,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.aY,$.h)
t.h(0,R.A("All About the Boonies, Baby",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aT(null),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
t=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],u)
q=new H.i([s,r])
q.h(0,$.aN,$.e)
q.h(0,$.a4,$.o)
q.h(0,$.bo,$.e)
q.h(0,$.ah,$.h)
q.h(0,$.bV,$.o)
q.h(0,$.b8,$.o)
q.h(0,R.A("Revive the Consorts",H.a([new U.b(),new U.b(),new U.b()],p),new Y.G(),R.j()),$.k)
o.h(0,new X.m(t,q),$.N)
u=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],u)
t=new H.i([s,r])
t.h(0,$.al,$.e)
t.h(0,$.b8,$.o)
t.h(0,$.cp,$.e)
t.h(0,$.iy,$.e)
t.h(0,$.am,$.h)
t.h(0,$.bY,$.h)
t.h(0,R.A("Stop a Rebellion",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
X.m.prototype={
k:function(a){return"Theme: "+H.r(this.a)}}
U.hn.prototype={
N:function(){return!1},
O:function(){return!0},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Lockpick",H.a([$.I,$.v,$.aR,$.di,$.a3],t),"No matter what, you'll always have at least one.","Anti-Lock Dagger"))
u.j(0,A.d("Sneaking Suit",H.a([$.a2,$.v,$.aR],t),"God. Why is Snake's outfit really called this. So dumb.","Full Body Latex Suit"))
u.j(0,A.d("Thief's Dagger",H.a([$.I,$.v,$.di,$.c0,$.l8],t),"For when you wanna show 'em your stabs, I guess.","Stabbing Contraption"))
this.go=u},
a_:function(){return 1.5},
a0:function(){return 0.8},
a1:function(){return 1},
ab:function(){return!0},
m:function(){var u,t,s
u=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.al,$.e)
t.h(0,$.b9,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.aL,$.h)
t.h(0,new R.a6("Steal the Frogs",null),$.L)
s=[U.b]
t.h(0,R.J("Escape the Law",H.a([new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.k)
t.h(0,R.J("Free The Prisoner",H.a([new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.k)
t.h(0,R.J("Shit, Let's Be a Heist Movie",H.a([new U.b(),new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q}}
N.ho.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Grandfather Clock",H.a([$.a8,$.ac,$.dl,$.w],t),null,"Ticking Tower of Time"))
u.j(0,A.d("Drum",H.a([$.ll,$.w,$.ay],t),null,"Ba Dum Tss but without the Tss Part"))
u.j(0,A.d("Dead Doppelganger",H.a([$.au,$.c2,$.w,$.c_,$.aW,$.at],t),"Time is truly the worst aspect.","The Inferior You"))
u.j(0,A.d("Music Box",H.a([$.I,$.w,$.ay,$.ac],t),null,"Cube of Noise"))
u.j(0,A.d("Sick Turn Tables",H.a([$.I,$.w,$.ay,$.a3,$.aq],t),"Do they come with ironic raps?","Spinning Noise Discs on a Noise Machine"))
u.j(0,A.d("Metronome",H.a([$.I,$.w,$.ay],t),null,"Never Ending Ticking Device"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.kW,$.L)
q.h(0,$.am,$.h)
q.h(0,$.aL,$.h)
q.h(0,$.bX,$.e)
p=[U.b]
q.h(0,R.J("Destroy 1000 Clocks",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.be()),$.e)
q.h(0,R.x("Fix the Clockwork",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],u)
t=new H.i([s,r])
t.h(0,$.eG,$.e)
t.h(0,$.bC,$.o)
t.h(0,$.am,$.e)
t.h(0,R.x("Synchronize the Rhythm",H.a([new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],u)
t=new H.i([s,r])
t.h(0,$.ai,$.e)
t.h(0,$.P,$.h)
t.h(0,$.aM,$.e)
t.h(0,$.ba,$.e)
t.h(0,R.x("Walk Another Path",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.dF()),$.e)
t.h(0,R.x("Destroy Timelines",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.be()),$.e)
t.h(0,R.J("Shatter the Timeline",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.G(),R.be()),$.e)
t.h(0,R.x("Move Forwards, Never Stop",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.t},
gZ:function(){return this.u},
gp:function(){return this.v},
gD:function(){return this.w},
gY:function(){return this.B},
gX:function(){return this.C},
gW:function(){return this.F},
gV:function(){return this.aB},
gA:function(){return this.a7}}
G.C.prototype={}
G.cX.prototype={}
G.f2.prototype={
$1:function(a){return!1}}
Q.hv.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Cardboard Box",H.a([$.E,$.w,$.aR],t),"It's the highest level void item. Except not. It's a box. Asshole.","Shoguns Old Home"))
u.j(0,A.d("Hole Punch",H.a([$.I,$.w,$.aR],t),null,"Paper Impaler"))
u.j(0,A.d("Smoke Bombs",H.a([$.dg,$.w,$.aR,$.jB],t),null,"Vape Grenades"))
u.j(0,A.d("Tribal Mask",H.a([$.c_,$.w,$.aR,$.aW,$.f1],t),null,"Ancient Face"))
u.j(0,A.d("Opera Mask",H.a([$.a9,$.w,$.aR,$.ac],t),null,"Phantom of the Opera Mask"))
u.j(0,A.d("Black Hole in a Bottle.",H.a([$.w,$.a3,$.jA,$.aR,$.aE],t),"Jegus fuck, don't break this.","Eternal Suffering in a Jar"))
this.x1=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.bb,$.e)
q.h(0,$.d4,$.e)
q.h(0,$.d5,$.e)
q.h(0,$.d2,$.e)
p=[U.b]
q.h(0,R.J("Be Forgettable",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
q.h(0,R.x("Go to Nowhere",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o=this.f
o.h(0,new X.m(t,q),$.M)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],u)
t=new H.i([s,r])
t.h(0,$.bb,$.h)
t.h(0,$.d4,$.h)
t.h(0,$.d5,$.h)
t.h(0,$.al,$.e)
t.h(0,R.J("Reveal the Tomes",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.ag("Ancient Knowledge"),R.c7()),$.e)
t.h(0,R.x("[REDACTED]",H.a([new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(q,t),$.M)
u=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],u)
t=new H.i([s,r])
t.h(0,$.bb,$.e)
t.h(0,$.d4,$.e)
t.h(0,$.d5,$.e)
t.h(0,R.x("Walk of Faith",H.a([new U.b(),new U.b(),new U.b(),new U.b(),new U.z()],p),new Y.y(),R.j()),$.k)
o.h(0,new X.m(u,t),$.M)},
gP:function(){return this.q},
gZ:function(){return this.t},
gp:function(){return this.u},
gD:function(){return this.v},
gY:function(){return this.w},
gX:function(){return this.B},
gW:function(){return this.C},
gV:function(){return this.F},
gA:function(){return this.K}}
E.hw.prototype={
N:function(){return!0},
O:function(){return!0},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Yardstick",H.a([$.c4,$.v,$.jG,$.a3],t),"Wait. Did you beat LORAS?",null))
u.j(0,A.d("SBURBSim Hacking Guide",H.a([$.a1,$.v,$.iL,$.E],t),"Hell no, you leave your grubby fucking mitts outta the code.","The Shoguns Guide to Winning"))
u.j(0,A.d("Body Pillow of JR",H.a([$.a2,$.v,$.eX,$.li,$.aP,$.eZ],t),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.","The Shoguns Vessel"))
u.j(0,A.d("Nanobots",H.a([$.lu,$.v,$.ju],t),"Oh look, a NON hacking way to fuck everything up, forever.","NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA"))
this.go=u},
a_:function(){return 0.5},
a0:function(){return 0.5},
a1:function(){return 0.5},
m:function(){var u,t,s
u=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.aU,$.e)
t.h(0,$.bZ,$.e)
t.h(0,$.cn,$.e)
t.h(0,$.ba,$.e)
t.h(0,$.d0,$.e)
t.h(0,$.d1,$.e)
t.h(0,$.d5,$.h)
s=[U.b]
t.h(0,R.A("A Complete Waste Of Time",H.a([new U.b(),new U.b(),new U.b(),new U.b()],s),new Y.bJ(),R.jO()),$.k)
t.h(0,R.x("Stop the Turtles from [Redacted]",H.a([new U.b(),new U.b(),new U.b(),new U.z()],s),new Y.y(),R.lH()),$.k)
t.h(0,R.A("Be Spooked By a Wolf",H.a([new U.b(),new U.b(),new U.b()],s),new Y.bJ(),R.j()),$.k)
t.h(0,R.x("Be The Illegitimate Player",H.a([new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.x("Wear the Merch, Be the Rider",H.a([new U.b(),new U.b(),new U.b(),new U.b()],s),new Y.y(),R.j()),$.L)
t.h(0,R.J("Die Ironically, In The Proximity Of Some Horses",H.a([new U.b(),new U.b(),new U.b()],s),new Y.aT(null),R.j()),$.o)
t.h(0,R.J("Die Ironically, In The Proximity Of Some Pigeons",H.a([new U.b(),new U.b(),new U.b()],s),new Y.ag("Hey, is that JR?"),R.lI()),$.L)
t.h(0,R.J("Run The Simulations",H.a([new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.o)
t.h(0,new R.a6("Waste the Frogs",null),$.L)
this.y.h(0,new X.m(u,t),$.M)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q},
gA:function(){return this.F}}
M.hy.prototype={
N:function(){return!1},
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Cauldron",H.a([$.lk,$.v,$.ad],t),"Surprisingly literal.","Bell But For Liquids"))
u.j(0,A.d("Flying Broom",H.a([$.iF,$.c4,$.v,$.a8,$.ad],t),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.","Bell But For Liquids"))
u.j(0,A.d("Warped Mirror",H.a([$.jE,$.v,$.ad,$.aR,$.a3],t),"I guess Witches warp shit and stuff.","Mirror from The Shoguns Dresser"))
this.go=u},
O:function(){return!0},
ab:function(){return!0},
a_:function(){return 2},
a1:function(){return 1.5},
a0:function(){return 1},
m:function(){var u,t,s
u=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],[P.q])
t=new H.i([N.F,P.D])
t.h(0,$.ah,$.h)
t.h(0,$.d8,$.h)
t.h(0,$.aN,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.aA,$.h)
t.h(0,$.jn,$.h)
t.h(0,new R.a6("Brew the Frogs",null),$.L)
s=[U.b]
t.h(0,R.J("Twist All The Things",H.a([new U.b(),new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.k)
t.h(0,R.J("Brew The Potion",H.a([new U.b(),new U.b(),new U.b()],s),new Y.a7(),R.j()),$.k)
t.h(0,R.J("Train the Apprentice",H.a([new U.b(),new U.b(),new U.b()],s),new Y.G(),R.j()),$.k)
this.y.h(0,new X.m(u,t),$.ab)},
gp:function(){return this.y2},
gS:function(){return this.G},
gR:function(){return this.E},
gD:function(){return this.q},
gA:function(){return this.F}}
F.hz.prototype={
l:function(){var u,t
u=Q.n(null,null,A.B)
t=[G.C]
u.j(0,A.d("Make a World Book",H.a([$.E,$.ac,$.a1],t),"World building is p okay, I guess.","World Building for Dumbasses"))
u.j(0,A.d("Quill Pen",H.a([$.aP,$.a2,$.jF],t),null,"Dead Bird Scribing Tool"))
u.j(0,A.d("Book On Writing",H.a([$.a1,$.E,$.a5],t),null,"How to do words for unsmarts"))
u.j(0,A.d("FLARP Manual",H.a([$.a1,$.E,$.a5],t),"That Cat Troll doesn't do this. So I guess it's okay.","Natural Selection for Nerds The Book"))
u.j(0,A.d("Script",H.a([$.a1,$.E],t),null,"Death of JR, a screenplay by The Shogun"))
u.j(0,A.d("Fancy Pen",H.a([$.I,$.a5,$.jF,$.ac],t),null,"Ink Bleeding Plastic Finger"))
u.j(0,A.d("Spiral Bound Notebook",H.a([$.a1,$.E,$.I],t),null,"Spinney Spine Scribing Station"))
u.j(0,A.d("Half Written Novel",H.a([$.a1,$.E],t),"I'm sure you'll finish it any day now.","The Shoguns Magnum Opus"))
this.y=u},
m:function(){var u,t,s,r,q,p,o
u=[P.q]
t=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],u)
s=N.F
r=P.D
q=new H.i([s,r])
q.h(0,$.bb,$.e)
q.h(0,$.av,$.e)
q.h(0,$.a4,$.h)
q.h(0,$.P,$.h)
q.h(0,$.d3,$.h)
p=[U.b]
q.h(0,R.A("Stop the Vandals",H.a([new U.b(),new U.b(),new U.b()],p),new Y.a7(),R.j()),$.k)
o=this.r
o.h(0,new X.m(t,q),$.N)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],u)
t=new H.i([s,r])
t.h(0,$.aY,$.h)
t.h(0,$.az,$.h)
t.h(0,$.ap,$.h)
t.h(0,$.a4,$.h)
t.h(0,R.A("Read the Fan Fiction",H.a([new U.b(),new U.b(),new U.b()],p),new Y.aT(null),R.j()),$.k)
o.h(0,new X.m(q,t),$.N)
u=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],u)
t=new H.i([s,r])
t.h(0,$.az,$.h)
t.h(0,$.bm,$.e)
t.h(0,$.ap,$.e)
t.h(0,$.aY,$.h)
t.h(0,$.cn,$.e)
t.h(0,R.A("Be the DM",H.a([new U.b(),new U.b(),new U.b(),new U.b()],p),new Y.aT(null),R.j()),$.k)
o.h(0,new X.m(u,t),$.N)},
gA:function(){return this.cx},
ga2:function(){return this.cy},
ga3:function(){return this.db},
gp:function(){return this.dx},
ga4:function(){return this.dy}}
A.im.prototype={}
A.bA.prototype={
scl:function(a){this.b=C.a.ak(a,0,255)},
sbs:function(a){this.c=C.a.ak(a,0,255)},
sc0:function(a){this.d=C.a.ak(a,0,255)},
k:function(a){return"rgb("+H.r(this.b)+", "+H.r(this.c)+", "+H.r(this.d)+", "+H.r(this.a)+")"},
br:function(a){var u,t,s,r
if(a){u=this.b
if(typeof u!=="number")return u.aE()
t=this.c
if(typeof t!=="number")return t.aE()
s=this.d
if(typeof s!=="number")return s.aE()
r=this.a
if(typeof r!=="number")return H.j0(r)
return(u<<24|t<<16|s<<8|r)>>>0}u=this.b
if(typeof u!=="number")return u.aE()
t=this.c
if(typeof t!=="number")return t.aE()
s=this.d
if(typeof s!=="number")return H.j0(s)
return(u<<16|t<<8|s)>>>0},
aI:function(){var u=C.a.cs(this.br(!1),16)
return"#"+C.b.ci(u,6,"0").toUpperCase()},
aq:function(a,b){if(b==null)return!1
if(b instanceof A.bA)return this.b==b.b&&this.c==b.c&&this.d==b.d&&this.a==b.a
return!1},
ga5:function(a){return this.br(!0)}}
A.el.prototype={
$1:function(a){return 0}}
A.fL.prototype={
n:function(a,b){var u=this.a
return u.al(b)?u.n(0,b):$.kf()},
gT:function(a){var u=this.a
u=u.gaC(u)
return new H.dx(J.b5(u.a),u.b)},
i:function(a,b,c,d){var u,t
u=this.a
if(u.al(b))this.ai(0,b)
t=this.bO()
if(typeof t!=="number")return t.cv()
if(t>=256)throw H.K(P.j7(t,"Palette colour ids must be in the range 0-255",null))
u.h(0,b,c)
this.b.h(0,t,c)
this.c.h(0,b,t)
this.d.h(0,t,b)},
ai:function(a,b){var u,t,s
u=this.a
if(!u.al(b))return
t=this.c
s=t.n(0,b)
u.ai(0,b)
this.b.ai(0,s)
t.ai(0,b)
this.d.ai(0,s)},
bO:function(){var u,t
for(u=this.b,t=0;!0;){if(!u.al(t))return t;++t}},
c5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=document
t=u.createElement("div")
s=t.style
s.padding="3px"
s.margin="3px"
s.outline="1px solid black"
s.display="inline-block"
s.textAlign="left"
s=u.createElement("span")
r=s.style
r.fontWeight="bold"
s.textContent=a
t.appendChild(s)
for(s=this.b,r=new P.cL(s,[H.aj(s,0)]),r=r.gT(r),q=this.d;r.I();){p=r.d
o=q.n(0,p)
n=s.n(0,p)
m=u.createElement("div")
l=u.createElement("div")
l.title=n.aI().toUpperCase()
k=l.style
k.position="relative"
k.display="inline-block"
k.marginRight="3px"
k.width="10px"
k.height="10px"
j=n.aI()
k.backgroundColor=j
i=u.createElement("span")
i.textContent=H.r(p)+": "+H.r(o)
m.appendChild(l)
m.appendChild(i)
t.appendChild(m)}return t},
$adm:function(){return[A.bA]}}
A.dU.prototype={}
A.fT.prototype={
b7:function(a){if(a.ar(0,0))return-this.bn(a.cA(0))
return this.bn(a)},
bn:function(a){var u,t,s
u=a.an(0,4294967295)
t=this.a
if(u){s=t.bp()
C.d.b9(s*4294967295)
return C.d.cb(C.d.aD(s,a))}else return t.b7(a)},
ck:function(a,b){var u
if(a.gb5(a))return
u=H.ms(a,"$icK",[b],"$acK")
if(u)return a.cw(this.a.bp())
return a.am(0,this.b7(a.gH(a)))}}
D.hb.prototype={
$1:function(a){return J.kx(a)},
$S:6}
D.hc.prototype={
$1:function(a){return a},
$S:7}
D.he.prototype={
$1:function(a){return a.d}}
D.bv.prototype={
k:function(a){return this.a},
gJ:function(a){return this.a}}
D.hA.prototype={}
D.fV.prototype={}
X.id.prototype={
$2:function(a,b){return C.b.af(a.Q,b.Q)}}
X.ie.prototype={
$2:function(a,b){return C.b.af(a.x,b.x)}}
X.ig.prototype={
$2:function(a,b){return C.b.af(a.ch,b.ch)}}
X.ii.prototype={
$1:function(a){var u=this.a.style
if(u.display==="none"){u.display="block"
C.i.aK(this.b,"[-]")}else{u.display="none"
C.i.aK(this.b,"[+]")}}}
Q.cK.prototype={
bl:function(a,b){return b},
k:function(a){return J.bR(this.gcj())}}
Q.hx.prototype={
gcj:function(){return this.b},
j:function(a,b){C.c.j(this.b,new Q.cJ(b,this.bl(b,1),this.$ti))},
n:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.af(u,b)
return u[b].a},
h:function(a,b,c){var u,t
u=this.b
t=this.bl(c,1)
if(b<0||b>=u.length)return H.af(u,b)
u[b]=new Q.cJ(c,t,this.$ti)},
gH:function(a){return this.b.length},
k:function(a){return P.f5(this.b,"[","]")},
$iak:1,
$iaG:1}
Q.cJ.prototype={
k:function(a){return"("+H.r(this.a)+" @ "+H.r(this.b)+")"}}
Q.dZ.prototype={};(function aliases(){var u=J.aO.prototype
u.bx=u.k
u=J.dr.prototype
u.bz=u.k
u=P.b0.prototype
u.by=u.aJ
u=W.b7.prototype
u.aM=u.aa
u=W.dV.prototype
u.bA=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff
u(J,"me","lC",8)
t(P,"mo","m5",1)
t(P,"mp","m6",1)
t(P,"mq","m7",1)
s(P,"k1","mm",9)
r(W,"mA",4,null,["$4"],["m9"],4,0)
r(W,"mB",4,null,["$4"],["ma"],4,0)
t(R,"bI","lU",0)
t(R,"lH","lJ",0)
t(R,"jO","lT",0)
t(R,"iR","lS",0)
t(R,"jN","lQ",0)
t(R,"dF","lP",0)
t(R,"be","lM",0)
t(R,"bu","lO",0)
t(R,"c7","lR",0)
t(R,"iQ","lN",0)
t(R,"j","lK",0)
t(R,"lI","lL",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.as,null)
s(P.as,[H.iO,J.aO,J.eb,P.b0,H.du,P.f6,P.fv,H.eo,H.hp,P.bU,H.cj,H.dW,H.ca,P.dv,H.fh,H.fj,P.i0,P.dN,P.hf,P.i4,P.hN,P.hV,P.hQ,P.dP,P.dm,P.dQ,P.bc,P.i2,P.bw,P.cR,P.fH,P.dI,P.hK,P.dc,P.aG,P.bd,P.q,P.cH,W.er,W.cM,W.dd,W.dz,W.dV,W.hY,W.da,W.bt,W.hU,W.dY,P.hR,B.cv,L.cg,A.dU,T.cC,X.io,M.is,N.F,E.hL,E.p,A.B,U.b,Y.bJ,X.m,G.C,A.im,A.bA,A.fT,D.bv,Q.cK,Q.cJ])
s(J.aO,[J.f7,J.dp,J.dr,J.bE,J.c5,J.bF,W.d_,W.dO,W.ew,W.ex,W.u,W.fn,W.fC,W.dS,W.fJ,W.e_])
s(J.dr,[J.fN,J.bN,J.bG])
t(J.iN,J.bE)
s(J.c5,[J.dn,J.f8])
s(P.b0,[H.ak,H.dw,H.b1])
s(H.ak,[H.dt,H.fi,P.cL])
t(H.eB,H.dw)
s(P.f6,[H.dx,H.dK])
t(H.fw,H.dt)
t(P.dX,P.fv)
t(P.ht,P.dX)
t(H.ep,P.ht)
t(H.cZ,H.eo)
t(H.eq,H.cZ)
s(P.bU,[H.fF,H.fa,H.hs,H.fY,P.dA,P.bk,P.hu,P.hr,P.cE,P.en,P.et])
s(H.cj,[H.ik,H.hj,H.f9,H.i9,H.ia,H.ib,P.hC,P.hB,P.hD,P.hE,P.i1,P.i5,P.hT,P.hO,P.fl,P.ft,W.eC,W.hJ,W.fE,W.fD,W.hW,W.hX,W.i_,W.i3,L.ed,B.eS,A.f4,A.f3,T.fZ,G.f2,A.el,D.hb,D.hc,D.he,X.id,X.ie,X.ig,X.ii])
s(H.hj,[H.ha,H.ch])
t(P.fr,P.dv)
s(P.fr,[H.i,P.hM,W.hG])
t(P.hS,P.i4)
t(P.hP,P.hV)
t(P.fm,P.dQ)
s(P.cR,[P.D,P.aX])
s(P.bk,[P.cB,P.eP])
s(W.d_,[W.aa,W.dL])
s(W.aa,[W.b7,W.bz,W.hF])
s(W.b7,[W.H,P.t])
s(W.H,[W.e9,W.ea,W.bS,W.ej,W.eD,W.eH,W.eI,W.eO,W.eR,W.fu,W.fx,W.fG,W.fI,W.fM,W.h4,W.h5,W.dH,W.dJ,W.hh,W.hi,W.cI,W.hm])
t(W.bT,W.dO)
s(W.u,[W.bi,W.h9])
t(W.bH,W.bi)
t(W.aJ,P.fm)
t(W.dT,W.dS)
t(W.dy,W.dT)
t(W.e0,W.e_)
t(W.dR,W.e0)
t(W.hH,W.hG)
t(W.hI,P.hf)
t(W.hZ,W.dV)
t(P.cD,P.t)
s(B.cv,[S.e8,M.ee,A.em,M.es,V.ey,U.eE,N.fc,F.fA,G.fO,Q.fX,N.h7,D.hk,V.hl,F.hz])
t(A.fL,A.dU)
t(L.O,A.fL)
s(L.cg,[L.ec,T.eg,T.ei,U.ez,Z.eA,T.eL,X.eN,Q.fe,K.ff,G.fg,V.fy,E.fS,N.h8,N.ho,Q.hv])
s(T.cC,[O.ef,Y.eJ,Y.eK,B.eM,S.fd,Z.fo,S.fp,U.fq,E.fz,V.fK,N.fQ,N.fW,E.h_,Y.h1,L.h2,S.h3,Y.h6,R.hg,U.hn,E.hw,M.hy])
t(E.cu,E.hL)
s(E.p,[E.by,E.cW])
s(L.ec,[Z.fb,K.h0])
t(F.fB,E.cu)
t(F.eu,F.fB)
t(U.z,U.b)
t(R.fR,N.F)
s(R.fR,[R.fP,R.ev,R.dD])
t(R.a6,R.dD)
s(Y.bJ,[Y.G,Y.ag,Y.y,Y.cY,Y.a7,Y.aH,Y.ek,Y.dB,Y.db,Y.dC])
t(Y.aT,Y.ag)
t(G.cX,G.C)
s(D.bv,[D.hA,D.fV])
t(Q.dZ,Q.cK)
t(Q.hx,Q.dZ)
u(P.dQ,P.bc)
u(P.dX,P.i2)
u(W.dO,W.er)
u(W.dS,P.bc)
u(W.dT,W.dd)
u(W.e_,P.bc)
u(W.e0,W.dd)
u(A.dU,P.dm)
u(Q.dZ,P.bc)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bS.prototype
C.o=W.bT.prototype
C.z=J.aO.prototype
C.c=J.bE.prototype
C.a=J.dn.prototype
C.A=J.dp.prototype
C.d=J.c5.prototype
C.b=J.bF.prototype
C.B=J.bG.prototype
C.p=J.fN.prototype
C.i=W.dH.prototype
C.q=W.dJ.prototype
C.k=J.bN.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.x=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.u=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.w=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.v=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.n=function(hooks) { return hooks; }

C.y=new P.fH()
C.e=new P.hS()
C.C=H.a(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.D=H.a(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.q])
C.E=H.a(u([]),[P.q])
C.f=H.a(u(["bind","if","ref","repeat","syntax"]),[P.q])
C.h=H.a(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.j=H.mt(F.eu)})();(function staticFields(){$.b6=0
$.ci=null
$.j8=null
$.k6=null
$.k_=null
$.k9=null
$.i6=null
$.ic=null
$.j1=null
$.cb=null
$.cN=null
$.cO=null
$.iX=!1
$.dM=C.e
$.bl=null
$.ir=null
$.jj=null
$.ji=null
$.jf=null
$.je=null
$.jd=null
$.jg=null
$.jc=null
$.kD=null
$.kE=null
$.kC=null
$.kB=null
$.S="accent"
$.Q="aspect1"
$.T="aspect2"
$.a0="shoe1"
$.a_="shoe2"
$.V="cloak1"
$.W="cloak2"
$.U="cloak3"
$.R="shirt1"
$.Z="shirt2"
$.Y="pants1"
$.X="pants2"
$.L=1300
$.e=3
$.h=2
$.o=1
$.k=0.1
$.kU=null
$.bV=null
$.kS=null
$.cq=null
$.d9=null
$.iw=null
$.kQ=null
$.jp=null
$.kV=null
$.eF=null
$.it=null
$.iC=null
$.co=null
$.bo=null
$.kT=null
$.iv=null
$.iD=null
$.cr=null
$.d8=null
$.cl=null
$.ap=null
$.aN=null
$.bX=null
$.iB=null
$.ai=null
$.al=null
$.jm=null
$.d5=null
$.cp=null
$.d3=null
$.aU=null
$.bC=null
$.d6=null
$.b8=null
$.cs=null
$.ah=null
$.iz=null
$.kR=null
$.P=null
$.av=null
$.aM=null
$.am=null
$.d4=null
$.ao=null
$.bn=null
$.b9=null
$.cn=null
$.bm=null
$.aY=null
$.d1=null
$.bZ=null
$.d7=null
$.jq=null
$.iu=null
$.aL=null
$.aA=null
$.a4=null
$.cm=null
$.bW=null
$.iA=null
$.d2=null
$.eG=null
$.jo=null
$.aB=null
$.js=null
$.jl=null
$.kX=null
$.d0=null
$.az=null
$.bb=null
$.ba=null
$.ct=null
$.jn=null
$.jr=null
$.kW=null
$.ix=null
$.iy=null
$.bY=null
$.m3=13
$.M=3
$.ab=2
$.N=1
$.le=null
$.f0=null
$.jC=null
$.lt=null
$.lq=null
$.l8=null
$.lp=null
$.lc=null
$.l9=null
$.lo=null
$.lw=null
$.l4=null
$.jx=null
$.iF=null
$.a1=null
$.l2=null
$.f_=null
$.lm=null
$.jB=null
$.iE=null
$.jw=null
$.ld=null
$.eX=null
$.c4=null
$.iH=null
$.lx=null
$.lv=null
$.ls=null
$.jF=null
$.jv=null
$.I=null
$.la=null
$.iG=null
$.c_=null
$.jI=null
$.a8=null
$.a9=null
$.cy=null
$.E=null
$.a2=null
$.dk=null
$.aE=null
$.iI=null
$.c2=null
$.df=null
$.dh=null
$.cx=null
$.eT=null
$.f1=null
$.a3=null
$.c0=null
$.aW=null
$.di=null
$.ax=null
$.eU=null
$.dj=null
$.bs=null
$.eV=null
$.bq=null
$.aR=null
$.aC=null
$.eW=null
$.at=null
$.dg=null
$.bp=null
$.ae=null
$.eY=null
$.ay=null
$.dl=null
$.c1=null
$.aV=null
$.c3=null
$.ar=null
$.aP=null
$.au=null
$.a5=null
$.b_=null
$.bD=null
$.aZ=null
$.aQ=null
$.aq=null
$.ad=null
$.w=null
$.v=null
$.ac=null
$.aD=null
$.aF=null
$.br=null
$.l0=null
$.jG=null
$.l5=null
$.de=null
$.jy=null
$.lr=null
$.l1=null
$.jD=null
$.jA=null
$.iL=null
$.iJ=null
$.lj=null
$.cw=null
$.lh=null
$.ll=null
$.jH=null
$.lk=null
$.ju=null
$.lu=null
$.jE=null
$.l6=null
$.lb=null
$.li=null
$.jz=null
$.iK=null
$.lg=null
$.l7=null
$.ln=null
$.lf=null
$.eZ=null
$.l3=null
$.jQ=null
$.cG=null
$.bL=null
$.c9=null
$.bM=null
$.aI=null
$.bK=null
$.c8=null
$.cF=null
$.bg=null
$.an=null
$.jR=!1})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mQ","kc",function(){return H.k4("_$dart_dartClosure")})
u($,"mU","j3",function(){return H.k4("_$dart_js")})
u($,"mY","kg",function(){return H.bh(H.hq({
toString:function(){return"$receiver$"}}))})
u($,"mZ","kh",function(){return H.bh(H.hq({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n_","ki",function(){return H.bh(H.hq(null))})
u($,"n0","kj",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n3","km",function(){return H.bh(H.hq(void 0))})
u($,"n4","kn",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n2","kl",function(){return H.bh(H.jT(null))})
u($,"n1","kk",function(){return H.bh(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n6","kp",function(){return H.bh(H.jT(void 0))})
u($,"n5","ko",function(){return H.bh(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n7","j4",function(){return P.m4()})
u($,"na","cV",function(){return[]})
u($,"mP","kb",function(){return{}})
u($,"n8","kq",function(){return P.ds(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.q)})
u($,"n9","j5",function(){return P.fk(P.q,P.dc)})
u($,"mO","e3",function(){return P.fk(P.aX,L.cg)})
u($,"mR","e4",function(){return P.fk(P.aX,B.cv)})
u($,"mT","ke",function(){return H.a([],[A.B])})
u($,"mW","e5",function(){return P.fk(P.aX,T.cC)})
u($,"mS","kd",function(){return P.c6(G.C)})
u($,"mV","kf",function(){return A.ip(255,0,255,255)})
u($,"mX","cU",function(){return H.a([],[D.bv])})})()
var v={mangledGlobalNames:{aX:"int",D:"double",cR:"num",q:"String",bw:"bool",bd:"Null",aG:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.bw,args:[[P.aG,E.cu]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.bd,args:[,,]},{func:1,ret:P.bw,args:[W.b7,P.q,P.q,W.cM]},{func:1,ret:P.bd,args:[,]},{func:1,ret:P.q,args:[,]},{func:1,ret:D.bv,args:[,]},{func:1,ret:P.aX,args:[,,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMImplementation:J.aO,MediaError:J.aO,Navigator:J.aO,NavigatorConcurrentHardware:J.aO,PositionError:J.aO,Range:J.aO,SQLError:J.aO,HTMLAudioElement:W.H,HTMLBRElement:W.H,HTMLBaseElement:W.H,HTMLCanvasElement:W.H,HTMLContentElement:W.H,HTMLDListElement:W.H,HTMLDataElement:W.H,HTMLDataListElement:W.H,HTMLDetailsElement:W.H,HTMLDialogElement:W.H,HTMLDivElement:W.H,HTMLHRElement:W.H,HTMLHeadElement:W.H,HTMLHeadingElement:W.H,HTMLHtmlElement:W.H,HTMLImageElement:W.H,HTMLLIElement:W.H,HTMLLabelElement:W.H,HTMLLegendElement:W.H,HTMLLinkElement:W.H,HTMLMediaElement:W.H,HTMLMenuElement:W.H,HTMLMeterElement:W.H,HTMLModElement:W.H,HTMLOListElement:W.H,HTMLOptGroupElement:W.H,HTMLOptionElement:W.H,HTMLParagraphElement:W.H,HTMLPictureElement:W.H,HTMLPreElement:W.H,HTMLProgressElement:W.H,HTMLQuoteElement:W.H,HTMLScriptElement:W.H,HTMLShadowElement:W.H,HTMLSourceElement:W.H,HTMLStyleElement:W.H,HTMLTableCaptionElement:W.H,HTMLTableCellElement:W.H,HTMLTableDataCellElement:W.H,HTMLTableHeaderCellElement:W.H,HTMLTableColElement:W.H,HTMLTimeElement:W.H,HTMLTitleElement:W.H,HTMLTrackElement:W.H,HTMLUListElement:W.H,HTMLUnknownElement:W.H,HTMLVideoElement:W.H,HTMLDirectoryElement:W.H,HTMLFontElement:W.H,HTMLFrameElement:W.H,HTMLFrameSetElement:W.H,HTMLMarqueeElement:W.H,HTMLElement:W.H,HTMLAnchorElement:W.e9,HTMLAreaElement:W.ea,HTMLBodyElement:W.bS,HTMLButtonElement:W.ej,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSStyleDeclaration:W.bT,MSStyleCSSProperties:W.bT,CSS2Properties:W.bT,DOMError:W.ew,DOMException:W.ex,Element:W.b7,HTMLEmbedElement:W.eD,AbortPaymentEvent:W.u,AnimationEvent:W.u,AnimationPlaybackEvent:W.u,ApplicationCacheErrorEvent:W.u,BackgroundFetchClickEvent:W.u,BackgroundFetchEvent:W.u,BackgroundFetchFailEvent:W.u,BackgroundFetchedEvent:W.u,BeforeInstallPromptEvent:W.u,BeforeUnloadEvent:W.u,BlobEvent:W.u,CanMakePaymentEvent:W.u,ClipboardEvent:W.u,CloseEvent:W.u,CustomEvent:W.u,DeviceMotionEvent:W.u,DeviceOrientationEvent:W.u,ErrorEvent:W.u,ExtendableEvent:W.u,ExtendableMessageEvent:W.u,FetchEvent:W.u,FontFaceSetLoadEvent:W.u,ForeignFetchEvent:W.u,GamepadEvent:W.u,HashChangeEvent:W.u,InstallEvent:W.u,MediaEncryptedEvent:W.u,MediaKeyMessageEvent:W.u,MediaQueryListEvent:W.u,MediaStreamEvent:W.u,MediaStreamTrackEvent:W.u,MessageEvent:W.u,MIDIConnectionEvent:W.u,MIDIMessageEvent:W.u,MutationEvent:W.u,NotificationEvent:W.u,PageTransitionEvent:W.u,PaymentRequestEvent:W.u,PaymentRequestUpdateEvent:W.u,PopStateEvent:W.u,PresentationConnectionAvailableEvent:W.u,PresentationConnectionCloseEvent:W.u,ProgressEvent:W.u,PromiseRejectionEvent:W.u,PushEvent:W.u,RTCDataChannelEvent:W.u,RTCDTMFToneChangeEvent:W.u,RTCPeerConnectionIceEvent:W.u,RTCTrackEvent:W.u,SecurityPolicyViolationEvent:W.u,SensorErrorEvent:W.u,SpeechRecognitionError:W.u,SpeechRecognitionEvent:W.u,StorageEvent:W.u,SyncEvent:W.u,TrackEvent:W.u,TransitionEvent:W.u,WebKitTransitionEvent:W.u,VRDeviceEvent:W.u,VRDisplayEvent:W.u,VRSessionEvent:W.u,MojoInterfaceRequestEvent:W.u,ResourceProgressEvent:W.u,USBConnectionEvent:W.u,IDBVersionChangeEvent:W.u,AudioProcessingEvent:W.u,OfflineAudioCompletionEvent:W.u,WebGLContextEvent:W.u,Event:W.u,InputEvent:W.u,EventTarget:W.d_,HTMLFieldSetElement:W.eH,HTMLFormElement:W.eI,HTMLIFrameElement:W.eO,HTMLInputElement:W.eR,Location:W.fn,HTMLMapElement:W.fu,HTMLMetaElement:W.fx,MouseEvent:W.bH,DragEvent:W.bH,PointerEvent:W.bH,WheelEvent:W.bH,NavigatorUserMediaError:W.fC,Document:W.aa,DocumentFragment:W.aa,HTMLDocument:W.aa,ShadowRoot:W.aa,XMLDocument:W.aa,DocumentType:W.aa,Node:W.aa,NodeList:W.dy,RadioNodeList:W.dy,HTMLObjectElement:W.fG,HTMLOutputElement:W.fI,OverconstrainedError:W.fJ,HTMLParamElement:W.fM,HTMLSelectElement:W.h4,HTMLSlotElement:W.h5,HTMLSpanElement:W.dH,SpeechSynthesisEvent:W.h9,HTMLTableElement:W.dJ,HTMLTableRowElement:W.hh,HTMLTableSectionElement:W.hi,HTMLTemplateElement:W.cI,HTMLTextAreaElement:W.hm,CompositionEvent:W.bi,FocusEvent:W.bi,KeyboardEvent:W.bi,TextEvent:W.bi,TouchEvent:W.bi,UIEvent:W.bi,Window:W.dL,DOMWindow:W.dL,Attr:W.hF,NamedNodeMap:W.dR,MozNamedAttrMap:W.dR,SVGScriptElement:P.cD,SVGAElement:P.t,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGCircleElement:P.t,SVGClipPathElement:P.t,SVGDefsElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGEllipseElement:P.t,SVGFEBlendElement:P.t,SVGFEColorMatrixElement:P.t,SVGFEComponentTransferElement:P.t,SVGFECompositeElement:P.t,SVGFEConvolveMatrixElement:P.t,SVGFEDiffuseLightingElement:P.t,SVGFEDisplacementMapElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFloodElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEGaussianBlurElement:P.t,SVGFEImageElement:P.t,SVGFEMergeElement:P.t,SVGFEMergeNodeElement:P.t,SVGFEMorphologyElement:P.t,SVGFEOffsetElement:P.t,SVGFEPointLightElement:P.t,SVGFESpecularLightingElement:P.t,SVGFESpotLightElement:P.t,SVGFETileElement:P.t,SVGFETurbulenceElement:P.t,SVGFilterElement:P.t,SVGForeignObjectElement:P.t,SVGGElement:P.t,SVGGeometryElement:P.t,SVGGraphicsElement:P.t,SVGImageElement:P.t,SVGLineElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMaskElement:P.t,SVGMetadataElement:P.t,SVGPathElement:P.t,SVGPatternElement:P.t,SVGPolygonElement:P.t,SVGPolylineElement:P.t,SVGRadialGradientElement:P.t,SVGRectElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGSVGElement:P.t,SVGSwitchElement:P.t,SVGSymbolElement:P.t,SVGTSpanElement:P.t,SVGTextContentElement:P.t,SVGTextElement:P.t,SVGTextPathElement:P.t,SVGTextPositioningElement:P.t,SVGTitleElement:P.t,SVGUseElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGElement:P.t})
hunkHelpers.setOrUpdateLeafTags({DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,PositionError:true,Range:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMError:true,DOMException:true,Element:false,HTMLEmbedElement:true,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFieldSetElement:true,HTMLFormElement:true,HTMLIFrameElement:true,HTMLInputElement:true,Location:true,HTMLMapElement:true,HTMLMetaElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,NavigatorUserMediaError:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,OverconstrainedError:true,HTMLParamElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSpanElement:true,SpeechSynthesisEvent:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.k7,[])
else X.k7([])})})()
//# sourceMappingURL=stat_summary.dart.js.map
