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
a[c]=function(){a[c]=function(){H.i5(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.e1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.e1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.e1(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={dO:function dO(){},
dt:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
fF:function(){return new P.aS("No element")},
bo:function bo(a){this.a=a},
bC:function bC(){},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bE:function bE(){},
cq:function cq(){},
aT:function aT(){},
fx:function(){throw H.b(P.t("Cannot modify unmodifiable Map"))},
bf:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
hK:function(a){return v.types[a]},
eZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.o(a).$iX},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.b(H.D(a))
return u},
aj:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
fT:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=u[3]
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.b(P.r(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.a.k(r,p)|32)>s)return}return parseInt(a,b)},
ak:function(a){return H.fN(a)+H.eM(H.bd(a),0,null)},
fN:function(a){var u,t,s,r,q,p,o,n,m
u=J.o(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.I||!!u.$iap){p=C.n(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bf(r.length>1&&C.a.k(r,0)===36?C.a.H(r,1):r)},
fO:function(){if(!!self.location)return self.location.href
return},
eo:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
fU:function(a){var u,t,s,r
u=H.j([],[P.l])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.f3)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.b(H.D(r))
if(r<=65535)u.push(r)
else if(r<=1114111){u.push(55296+(C.b.K(r-65536,10)&1023))
u.push(56320+(r&1023))}else throw H.b(H.D(r))}return H.eo(u)},
eq:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.D(s))
if(s<0)throw H.b(H.D(s))
if(s>65535)return H.fU(a)}return H.eo(a)},
fV:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
ca:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.b.K(u,10))>>>0,56320|u&1023)}}throw H.b(P.r(a,0,1114111,null,null))},
Y:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ep:function(a){var u=H.Y(a).getFullYear()+0
return u},
dT:function(a){var u=H.Y(a).getMonth()+1
return u},
dS:function(a){var u=H.Y(a).getDate()+0
return u},
fP:function(a){var u=H.Y(a).getHours()+0
return u},
fR:function(a){var u=H.Y(a).getMinutes()+0
return u},
fS:function(a){var u=H.Y(a).getSeconds()+0
return u},
fQ:function(a){var u=H.Y(a).getMilliseconds()+0
return u},
z:function(a){throw H.b(H.D(a))},
h:function(a,b){if(a==null)J.I(a)
throw H.b(H.aw(a,b))},
aw:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.F(!0,b,"index",null)
u=J.I(a)
if(!(b<0)){if(typeof u!=="number")return H.z(u)
t=b>=u}else t=!0
if(t)return P.bM(b,a,"index",null,u)
return P.cc(b,"index")},
D:function(a){return new P.F(!0,a,null,null)},
b:function(a){var u
if(a==null)a=new P.ai()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.f4})
u.name=""}else u.toString=H.f4
return u},
f4:function(){return J.a5(this.dartException)},
R:function(a){throw H.b(a)},
f3:function(a){throw H.b(P.U(a))},
C:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.j([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cm(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ew:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
em:function(a,b){return new H.c7(a,b==null?null:b.method)},
dP:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.bU(a,t,u?null:b.receiver)},
E:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.dE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.K(s,16)&8191)===10)switch(r){case 438:return u.$1(H.dP(H.f(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.em(H.f(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.f7()
p=$.f8()
o=$.f9()
n=$.fa()
m=$.fd()
l=$.fe()
k=$.fc()
$.fb()
j=$.fg()
i=$.ff()
h=q.C(t)
if(h!=null)return u.$1(H.dP(t,h))
else{h=p.C(t)
if(h!=null){h.method="call"
return u.$1(H.dP(t,h))}else{h=o.C(t)
if(h==null){h=n.C(t)
if(h==null){h=m.C(t)
if(h==null){h=l.C(t)
if(h==null){h=k.C(t)
if(h==null){h=n.C(t)
if(h==null){h=j.C(t)
if(h==null){h=i.C(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.em(t,h))}}return u.$1(new H.cp(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.aR()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.F(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.aR()
return a},
a4:function(a){var u
if(a==null)return new H.b3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.b3(a)},
hP:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(new P.cK("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hP)
a.$identity=u
return u},
fw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.cg().constructor.prototype):Object.create(new H.a6(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.A
if(typeof q!=="number")return q.u()
$.A=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.eg(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.hK,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.ef:H.dL
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.b("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.eg(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
ft:function(a,b,c,d){var u=H.dL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
eg:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fv(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ft(t,!r,u,b)
if(t===0){r=$.A
if(typeof r!=="number")return r.u()
$.A=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.a7
if(q==null){q=H.bm("self")
$.a7=q}return new Function(r+H.f(q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.A
if(typeof r!=="number")return r.u()
$.A=r+1
o+=r
r="return function("+o+"){return this."
q=$.a7
if(q==null){q=H.bm("self")
$.a7=q}return new Function(r+H.f(q)+"."+H.f(u)+"("+o+");}")()},
fu:function(a,b,c,d){var u,t
u=H.dL
t=H.ef
switch(b?-1:a){case 0:throw H.b(H.fX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fv:function(a,b){var u,t,s,r,q,p,o,n
u=$.a7
if(u==null){u=H.bm("self")
$.a7=u}t=$.ee
if(t==null){t=H.bm("receiver")
$.ee=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.fu(r,!p,s,b)
if(r===1){u="return function(){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.A
if(typeof t!=="number")return t.u()
$.A=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.A
if(typeof t!=="number")return t.u()
$.A=t+1
return new Function(u+t+"}")()},
e1:function(a,b,c,d,e,f,g){return H.fw(a,b,c,d,!!e,!!f,g)},
dL:function(a){return a.a},
ef:function(a){return a.c},
bm:function(a){var u,t,s,r,q
u=new H.a6("self","target","receiver","name")
t=J.eh(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
hW:function(a,b){throw H.b(H.fs(a,H.bf(b.substring(2))))},
dx:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else u=!0
if(u)return a
H.hW(a,b)},
eV:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
e2:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.eV(J.o(a))
if(u==null)return!1
return H.eL(u,null,b,null)},
fs:function(a,b){return new H.bn("CastError: "+P.dM(a)+": type '"+H.hA(a)+"' is not a subtype of type '"+b+"'")},
hA:function(a){var u,t
u=J.o(a)
if(!!u.$ia9){t=H.eV(u)
if(t!=null)return H.hZ(t)
return"Closure"}return H.ak(a)},
i5:function(a){throw H.b(new P.bx(a))},
fX:function(a){return new H.cd(a)},
eX:function(a){return v.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
bd:function(a){if(a==null)return
return a.$ti},
iw:function(a,b,c){return H.be(a["$a"+H.f(c)],H.bd(b))},
e3:function(a,b){var u=H.bd(a)
return u==null?null:u[b]},
hZ:function(a){return H.Q(a,null)},
Q:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bf(a[0].name)+H.eM(a,1,b)
if(typeof a=="function")return H.bf(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.f(b[t])}if('func' in a)return H.hr(a,b)
if('futureOr' in a)return"FutureOr<"+H.Q("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
hr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if("bounds" in a){u=a.bounds
if(b==null){b=H.j([],[P.i])
t=null}else t=b.length
s=b.length
for(r=u.length,q=r;q>0;--q)b.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=", "){p+=o
n=b.length
m=n-q-1
if(m<0)return H.h(b,m)
p=C.a.u(p,b[m])
l=u[q]
if(l!=null&&l!==P.m)p+=" extends "+H.Q(l,b)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.Q(a.ret,b)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=", "){f=j[g]
i=i+h+H.Q(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=", "){f=e[g]
i=i+h+H.Q(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.hH(d),m=n.length,h="",g=0;g<m;++g,h=", "){c=n[g]
i=i+h+H.Q(d[c],b)+(" "+H.f(c))}i+="}"}if(t!=null)b.length=t
return p+"("+i+") => "+k},
eM:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.v("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.Q(p,c)}return"<"+u.h(0)+">"},
be:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dq:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bd(a)
t=J.o(a)
if(t[b]==null)return!1
return H.eT(H.be(t[d],u),null,c,null)},
eT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.y(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.y(a[t],b,c[t],d))return!1
return!0},
iu:function(a,b,c){return a.apply(b,H.be(J.o(b)["$a"+H.f(c)],H.bd(b)))},
y:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="m"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="m"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.y(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="u")return!0
if('func' in c)return H.eL(a,b,c,d)
if('func' in a)return c.name==="i9"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.y("type" in a?a.type:null,b,s,d)
else if(H.y(a,b,s,d))return!0
else{if(!('$i'+"M" in t.prototype))return!1
r=t.prototype["$a"+"M"]
q=H.be(r,u?a.slice(1):null)
return H.y(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.eT(H.be(m,u),b,p,d)},
eL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.y(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.y(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.y(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.y(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.hS(h,b,g,d)},
hS:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.y(c[r],d,a[r],b))return!1}return!0},
iv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hQ:function(a){var u,t,s,r,q,p
u=$.eY.$1(a)
t=$.dr[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.dy[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=$.eS.$2(a,u)
if(u!=null){t=$.dr[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.dy[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.dA(s)
$.dr[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.dy[u]=s
return s}if(q==="-"){p=H.dA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.f0(a,s)
if(q==="*")throw H.b(P.ex(u))
if(v.leafTags[u]===true){p=H.dA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.f0(a,s)},
f0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.e5(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dA:function(a){return J.e5(a,!1,null,!!a.$iX)},
hR:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dA(u)
else return J.e5(u,c,null,null)},
hN:function(){if(!0===$.e4)return
$.e4=!0
H.hO()},
hO:function(){var u,t,s,r,q,p,o,n
$.dr=Object.create(null)
$.dy=Object.create(null)
H.hM()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.f1.$1(q)
if(p!=null){o=H.hR(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
hM:function(){var u,t,s,r,q,p,o
u=C.z()
u=H.a3(C.A,H.a3(C.B,H.a3(C.o,H.a3(C.o,H.a3(C.C,H.a3(C.D,H.a3(C.E(C.n),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.eY=new H.du(q)
$.eS=new H.dv(p)
$.f1=new H.dw(o)},
a3:function(a,b){return a(b)||b},
ej:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.b(P.n("Illegal RegExp pattern ("+String(r)+")",a,null))},
i2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
i4:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hz:function(a){return a},
i3:function(a,b,c,d){var u,t,s,r,q,p
u=new H.cz(b,a,0)
t=0
s=""
for(;u.l();s=r){r=u.d
q=r.b
p=q.index
r=s+H.f(H.eN().$1(C.a.i(a,t,p)))+H.f(c.$1(r))
t=p+q[0].length}u=s+H.f(H.eN().$1(C.a.H(a,t)))
return u.charCodeAt(0)==0?u:u},
br:function br(){},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cm:function cm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c7:function c7(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a){this.a=a},
dE:function dE(a){this.a=a},
b3:function b3(a){this.a=a
this.b=null},
a9:function a9(){},
cl:function cl(){},
cg:function cg(){},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a){this.a=a},
cd:function cd(a){this.a=a},
bT:function bT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bW:function bW(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
bS:function bS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d2:function d2(a){this.b=a},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hq:function(a){return a},
fL:function(a){return new Int8Array(a)},
dZ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aw(b,a))},
aO:function aO(){},
aM:function aM(){},
aN:function aN(){},
c5:function c5(){},
ah:function ah(){},
aq:function aq(){},
ar:function ar(){},
hH:function(a){return J.fG(a?Object.keys(a):[],null)},
hV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
e5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bc:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.e4==null){H.hN()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.b(P.ex("Return interceptor for "+H.f(t(a,u))))}r=a.constructor
q=r==null?null:r[$.e7()]
if(q!=null)return q
q=H.hQ(a)
if(q!=null)return q
if(typeof a=="function")return C.J
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.e7(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
fG:function(a,b){return J.eh(H.j(a,[b]))},
eh:function(a){a.fixed$length=Array
return a},
ei:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fH:function(a,b){var u,t
for(u=a.length;b<u;){t=C.a.k(a,b)
if(t!==32&&t!==13&&!J.ei(t))break;++b}return b},
fI:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.a.n(a,u)
if(t!==32&&t!==13&&!J.ei(t))break}return b},
o:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aJ.prototype
return J.bQ.prototype}if(typeof a=="string")return J.N.prototype
if(a==null)return J.bR.prototype
if(typeof a=="boolean")return J.bP.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
return a}if(a instanceof P.m)return a
return J.bc(a)},
hI:function(a){if(typeof a=="number")return J.ad.prototype
if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
return a}if(a instanceof P.m)return a
return J.bc(a)},
ax:function(a){if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
return a}if(a instanceof P.m)return a
return J.bc(a)},
eW:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
return a}if(a instanceof P.m)return a
return J.bc(a)},
ay:function(a){if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.ap.prototype
return a},
bb:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
return a}if(a instanceof P.m)return a
return J.bc(a)},
e9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hI(a).u(a,b)},
aC:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).E(a,b)},
ea:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).m(a,b)},
dH:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eZ(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eW(a).v(a,b,c)},
fk:function(a,b,c,d){return J.bb(a).aV(a,b,c,d)},
fl:function(a,b){return J.ay(a).k(a,b)},
fm:function(a,b){return J.ax(a).D(a,b)},
fn:function(a,b,c,d){return J.bb(a).bg(a,b,c,d)},
fo:function(a,b){return J.bb(a).O(a,b)},
eb:function(a){return J.bb(a).gaw(a)},
aD:function(a){return J.o(a).gp(a)},
dI:function(a){return J.eW(a).gB(a)},
I:function(a){return J.ax(a).gj(a)},
fp:function(a,b){return J.ay(a).a8(a,b)},
bg:function(a,b,c,d,e){return J.bb(a).aE(a,b,c,d,e)},
fq:function(a,b){return J.ay(a).aO(a,b)},
fr:function(a,b){return J.ay(a).H(a,b)},
a5:function(a){return J.o(a).h(a)},
ec:function(a){return J.ay(a).bC(a)},
p:function p(){},
bP:function bP(){},
bR:function bR(){},
aK:function aK(){},
c9:function c9(){},
ap:function ap(){},
H:function H(){},
G:function G(a){this.$ti=a},
dN:function dN(a){this.$ti=a},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ad:function ad(){},
aJ:function aJ(){},
bQ:function bQ(){},
N:function N(){}},P={
h5:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.hC()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ba(new P.cC(u),1)).observe(t,{childList:true})
return new P.cB(u,t,s)}else if(self.setImmediate!=null)return P.hD()
return P.hE()},
h6:function(a){self.scheduleImmediate(H.ba(new P.cD(a),0))},
h7:function(a){self.setImmediate(H.ba(new P.cE(a),0))},
h8:function(a){P.dV(C.p,a)},
dV:function(a,b){var u=C.b.w(a.a,1000)
return P.ha(u<0?0:u,b)},
ha:function(a,b){var u=new P.da()
u.aT(a,b)
return u},
fB:function(a,b){var u=new P.x(0,$.k,[b])
P.fZ(C.p,new P.bI(u,a))
return u},
eD:function(a,b){var u,t,s
b.a=1
try{a.aH(new P.cQ(b),new P.cR(b),null)}catch(s){u=H.E(s)
t=H.a4(s)
P.i_(new P.cS(b,u,t))}},
cP:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.T()
b.a=a.a
b.c=a.c
P.a0(b,t)}else{t=b.c
b.a=2
b.c=a
a.at(t)}},
a0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=t.c
t=t.b
p=q.a
q=q.b
t.toString
P.dn(null,null,t,p,q)}return}for(;o=b.a,o!=null;b=o){b.a=null
P.a0(u.a,b)}t=u.a
n=t.c
s.a=r
s.b=n
q=!r
if(q){p=b.c
p=(p&1)!==0||p===8}else p=!0
if(p){p=b.b
m=p.b
if(r){l=t.b
l.toString
l=l==m
if(!l)m.toString
else l=!0
l=!l}else l=!1
if(l){t=t.b
q=n.a
p=n.b
t.toString
P.dn(null,null,t,q,p)
return}k=$.k
if(k!=m)$.k=m
else k=null
t=b.c
if(t===8)new P.cX(u,s,b,r).$0()
else if(q){if((t&1)!==0)new P.cW(s,b,n).$0()}else if((t&2)!==0)new P.cV(u,s,b).$0()
if(k!=null)$.k=k
t=s.b
if(!!J.o(t).$iM){if(t.a>=4){j=p.c
p.c=null
b=p.U(j)
p.a=t.a
p.c=t.c
u.a=t
continue}else P.cP(t,p)
return}}i=b.b
j=i.c
i.c=null
b=i.U(j)
t=s.a
q=s.b
if(!t){i.a=4
i.c=q}else{i.a=8
i.c=q}u.a=i
t=i}},
hu:function(a,b){if(H.e2(a,{func:1,args:[P.m,P.B]}))return a
if(H.e2(a,{func:1,args:[P.m]}))return a
throw H.b(P.dK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ht:function(){var u,t
for(;u=$.a1,u!=null;){$.av=null
t=u.b
$.a1=t
if(t==null)$.au=null
u.a.$0()}},
hy:function(){$.e_=!0
try{P.ht()}finally{$.av=null
$.e_=!1
if($.a1!=null)$.e8().$1(P.eU())}},
eR:function(a){var u=new P.aV(a)
if($.a1==null){$.au=u
$.a1=u
if(!$.e_)$.e8().$1(P.eU())}else{$.au.b=u
$.au=u}},
hx:function(a){var u,t,s
u=$.a1
if(u==null){P.eR(a)
$.av=$.au
return}t=new P.aV(a)
s=$.av
if(s==null){t.b=u
$.av=t
$.a1=t}else{t.b=s.b
s.b=t
$.av=t
if(t.b==null)$.au=t}},
i_:function(a){var u=$.k
if(C.c===u){P.a2(null,null,C.c,a)
return}u.toString
P.a2(null,null,u,u.a6(a))},
fZ:function(a,b){var u=$.k
if(u===C.c){u.toString
return P.dV(a,b)}return P.dV(a,u.a6(b))},
dn:function(a,b,c,d,e){var u={}
u.a=d
P.hx(new P.dp(u,e))},
eO:function(a,b,c,d){var u,t
t=$.k
if(t===c)return d.$0()
$.k=c
u=t
try{t=d.$0()
return t}finally{$.k=u}},
eP:function(a,b,c,d,e){var u,t
t=$.k
if(t===c)return d.$1(e)
$.k=c
u=t
try{t=d.$1(e)
return t}finally{$.k=u}},
hv:function(a,b,c,d,e,f){var u,t
t=$.k
if(t===c)return d.$2(e,f)
$.k=c
u=t
try{t=d.$2(e,f)
return t}finally{$.k=u}},
a2:function(a,b,c,d){var u=C.c!==c
if(u)d=!(!u||!1)?c.a6(d):c.b6(d)
P.eR(d)},
cC:function cC(a){this.a=a},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
aW:function aW(){},
cA:function cA(a,b){this.a=a
this.$ti=b},
cL:function cL(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
x:function x(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
cM:function cM(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a){this.a=a},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a
this.b=null},
cj:function cj(){},
ck:function ck(){},
T:function T(a,b){this.a=a
this.b=b},
di:function di(){},
dp:function dp(a,b){this.a=a
this.b=b},
d4:function d4(){},
d6:function d6(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function(a,b){return new H.bT([a,b])},
el:function(a){return new P.d_([a])},
dY:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
dX:function(a,b){var u=new P.d1(a,b)
u.c=a.e
return u},
fE:function(a,b,c){var u,t
if(P.e0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.j([],[P.i])
t=$.aB()
t.push(a)
try{P.hs(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.eu(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
bO:function(a,b,c){var u,t,s
if(P.e0(a))return b+"..."+c
u=new P.v(b)
t=$.aB()
t.push(a)
try{s=u
s.a=P.eu(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
e0:function(a){var u,t
for(u=0;t=$.aB(),u<t.length;++u)if(a===t[u])return!0
return!1},
hs:function(a,b){var u,t,s,r,q,p,o,n,m,l
u=a.gB(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.l())return
r=H.f(u.gq())
b.push(r)
t+=r.length+2;++s}if(!u.l()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gq();++s
if(!u.l()){if(s<=4){b.push(H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gq();++s
for(;u.l();o=n,n=m){m=u.gq();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}b.push("...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)b.push(l)
b.push(p)
b.push(q)},
dQ:function(a){var u,t
t={}
if(P.e0(a))return"{...}"
u=new P.v("")
try{$.aB().push(a)
u.a+="{"
t.a=!0
J.fo(a,new P.c2(t,u))
u.a+="}"}finally{t=$.aB()
if(0>=t.length)return H.h(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
d_:function d_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d0:function d0(a){this.a=a
this.b=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bZ:function bZ(){},
w:function w(){},
c1:function c1(){},
c2:function c2(a,b){this.a=a
this.b=b},
aL:function aL(){},
dd:function dd(){},
c3:function c3(){},
aU:function aU(a,b){this.a=a
this.$ti=b},
aQ:function aQ(){},
cf:function cf(){},
d8:function d8(){},
aZ:function aZ(){},
b2:function b2(){},
b5:function b5(){},
h0:function(a,b,c,d){if(b instanceof Uint8Array)return P.h1(!1,b,c,d)
return},
h1:function(a,b,c,d){var u,t,s
u=$.fh()
if(u==null)return
t=0===c
if(t&&!0)return P.dW(u,b)
s=b.length
d=P.Z(c,d,s)
if(t&&d===s)return P.dW(u,b)
return P.dW(u,b.subarray(c,d))},
dW:function(a,b){if(P.h3(b))return
return P.h4(a,b)},
h4:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.E(t)}return},
h3:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
h2:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.E(t)}return},
hw:function(a,b,c){var u,t,s
for(u=J.ax(a),t=b;t<c;++t){s=u.m(a,t)
if(typeof s!=="number")return s.aL()
if((s&127)!==s)return t-b}return c-b},
ed:function(a,b,c,d,e,f){if(C.b.Y(f,4)!==0)throw H.b(P.n("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.n("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.n("Invalid base64 padding, more than two '=' characters",a,b))},
bk:function bk(a){this.a=a},
bl:function bl(a){this.a=a},
bp:function bp(){},
bt:function bt(){},
bD:function bD(){},
cx:function cx(a){this.a=a},
cy:function cy(a){this.a=a},
dg:function dg(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az:function(a,b,c){var u=H.fT(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.n(a,null,null))},
fA:function(a){if(a instanceof H.a9)return a.h(0)
return"Instance of '"+H.ak(a)+"'"},
ev:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.Z(b,c,u)
return H.eq(b>0||c<u?C.d.aP(a,b,c):a)}if(!!J.o(a).$iah)return H.fV(a,b,P.Z(b,c,a.length))
return P.fY(a,b,c)},
fY:function(a,b,c){var u,t,s,r
if(b<0)throw H.b(P.r(b,0,J.I(a),null,null))
u=c==null
if(!u&&c<b)throw H.b(P.r(c,b,J.I(a),null,null))
t=J.dI(a)
for(s=0;s<b;++s)if(!t.l())throw H.b(P.r(b,0,s,null,null))
r=[]
if(u)for(;t.l();)r.push(t.gq())
else for(s=b;s<c;++s){if(!t.l())throw H.b(P.r(c,b,s,null,null))
r.push(t.gq())}return H.eq(r)},
es:function(a){return new H.bS(a,H.ej(a,!1,!0,!1))},
eu:function(a,b,c){var u=J.dI(b)
if(!u.l())return a
if(c.length===0){do a+=H.f(u.gq())
while(u.l())}else{a+=H.f(u.gq())
for(;u.l();)a=a+c+H.f(u.gq())}return a},
ez:function(){var u=H.fO()
if(u!=null)return P.eA(u)
throw H.b(P.t("'Uri.base' is not supported"))},
fy:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
fz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aG:function(a){if(a>=10)return""+a
return"0"+a},
dM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fA(a)},
dJ:function(a){return new P.F(!1,null,null,a)},
dK:function(a,b,c){return new P.F(!0,a,b,c)},
er:function(a){return new P.am(null,null,!1,null,null,a)},
cc:function(a,b){return new P.am(null,null,!0,a,b,"Value not in range")},
r:function(a,b,c,d,e){return new P.am(b,c,!0,a,d,"Invalid value")},
Z:function(a,b,c){if(typeof a!=="number")return H.z(a)
if(0>a||a>c)throw H.b(P.r(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.r(b,a,c,"end",null))
return b}return c},
fW:function(a,b){if(typeof a!=="number")return a.t()
if(a<0)throw H.b(P.r(a,0,null,b,null))},
bM:function(a,b,c,d,e){var u=e==null?J.I(b):e
return new P.bL(u,!0,a,c,"Index out of range")},
t:function(a){return new P.cr(a)},
ex:function(a){return new P.co(a)},
et:function(a){return new P.aS(a)},
U:function(a){return new P.bq(a)},
n:function(a,b,c){return new P.bH(a,b,c)},
fJ:function(a,b,c){var u,t,s
u=H.j([],[c])
C.d.sj(u,a)
for(t=0;t<a;++t){s=b.$1(t)
if(t>=u.length)return H.h(u,t)
u[t]=s}return u},
e6:function(a){H.hV(a)},
eA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=a.length
if(u>=5){t=((C.a.k(a,4)^58)*3|C.a.k(a,0)^100|C.a.k(a,1)^97|C.a.k(a,2)^116|C.a.k(a,3)^97)>>>0
if(t===0)return P.ey(u<u?C.a.i(a,0,u):a,5,null).gaI()
else if(t===32)return P.ey(C.a.i(a,5,u),0,null).gaI()}s=new Array(8)
s.fixed$length=Array
r=H.j(s,[P.l])
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=u
r[6]=u
if(P.eQ(a,0,u,0,r)>=14)r[7]=u
q=r[1]
if(typeof q!=="number")return q.aM()
if(q>=0)if(P.eQ(a,0,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.u()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.t()
if(typeof m!=="number")return H.z(m)
if(l<m)m=l
if(typeof n!=="number")return n.t()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.t()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.t()
k=s<0
if(k)if(p>q+3){j=null
k=!1}else{s=o>0
if(s&&o+1===n){j=null
k=!1}else{if(!(m<u&&m===n+2&&C.a.A(a,"..",n)))i=m>n+2&&C.a.A(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===4)if(C.a.A(a,"file",0)){if(p<=0){if(!C.a.A(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.a.i(a,n,u)
q-=0
s=t-0
m+=s
l+=s
u=a.length
p=7
o=7
n=7}else if(n===m){g=m+1;++l
a=C.a.N(a,n,m,"/");++u
m=g}j="file"}else if(C.a.A(a,"http",0)){if(s&&o+3===n&&C.a.A(a,"80",o+1)){f=n-3
m-=3
l-=3
a=C.a.N(a,o,n,"")
u-=3
n=f}j="http"}else j=null
else if(q===5&&C.a.A(a,"https",0)){if(s&&o+4===n&&C.a.A(a,"443",o+1)){f=n-4
m-=4
l-=4
a=C.a.N(a,o,n,"")
u-=3
n=f}j="https"}else j=null
k=!0}}}else j=null
if(k){if(u<a.length){a=C.a.i(a,0,u)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.d9(a,q,p,o,n,m,l,j)}return P.hb(a,0,u,q,p,o,n,m,l,j)},
eC:function(a){var u=P.i
return C.d.bj(H.j(a.split("&"),[u]),P.ek(u,u),new P.cw(C.m))},
h_:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.ct(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.a.n(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.az(C.a.i(a,q,r),null,null)
if(typeof n!=="number")return n.aN()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.az(C.a.i(a,q,c),null,null)
if(typeof n!=="number")return n.aN()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
eB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.cu(a)
t=new P.cv(u,a)
if(a.length<2)u.$1("address is too short")
s=H.j([],[P.l])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.a.n(a,r)
if(n===58){if(r===b){++r
if(C.a.n(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.d.gP(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)s.push(t.$2(q,c))
else{k=P.h_(a,q,c)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.b.K(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
hb:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.hj(a,b,d)
else{if(d===b)P.as(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.hk(a,u,e-1):""
s=P.hf(a,e,f,!1)
if(typeof f!=="number")return f.u()
r=f+1
if(typeof g!=="number")return H.z(g)
q=r<g?P.hh(P.az(C.a.i(a,r,g),new P.de(a,f),null),j):null}else{t=""
s=null
q=null}p=P.hg(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.t()
o=h<i?P.hi(a,h+1,i,null):null
return new P.b6(j,t,s,q,p,o,i<c?P.he(a,i+1,c):null)},
eE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
as:function(a,b,c){throw H.b(P.n(c,a,b))},
hh:function(a,b){if(a!=null&&a===P.eE(b))return
return a},
hf:function(a,b,c,d){var u,t
if(b===c)return""
if(C.a.n(a,b)===91){if(typeof c!=="number")return c.bG()
u=c-1
if(C.a.n(a,u)!==93)P.as(a,b,"Missing end `]` to match `[` in host")
P.eB(a,b+1,u)
return C.a.i(a,b,c).toLowerCase()}if(typeof c!=="number")return H.z(c)
t=b
for(;t<c;++t)if(C.a.n(a,t)===58){P.eB(a,b,c)
return"["+a+"]"}return P.hm(a,b,c)},
hm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.z(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.n(a,u)
if(q===37){p=P.eK(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.v("")
n=C.a.i(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.i(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.v("")
if(t<u){s.a+=C.a.i(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.i,o)
o=(C.i[o]&1<<(q&15))!==0}else o=!1
if(o)P.as(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.n(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.v("")
n=C.a.i(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.eF(q)
u+=l
t=u}}}}if(s==null)return C.a.i(a,b,c)
if(t<c){n=C.a.i(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
hj:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.eH(C.a.k(a,b)))P.as(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.k(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.k,r)
r=(C.k[r]&1<<(s&15))!==0}else r=!1
if(!r)P.as(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.i(a,b,c)
return P.hc(t?a.toLowerCase():a)},
hc:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
hk:function(a,b,c){return P.at(a,b,c,C.L,!1)},
hg:function(a,b,c,d,e,f){var u,t,s
u=e==="file"
t=u||f
s=P.at(a,b,c,C.u,!0)
if(s.length===0){if(u)return"/"}else if(t&&!C.a.F(s,"/"))s="/"+s
return P.hl(s,e,f)},
hl:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.F(a,"/"))return P.hn(a,!u||c)
return P.ho(a)},
hi:function(a,b,c,d){return P.at(a,b,c,C.j,!0)},
he:function(a,b,c){return P.at(a,b,c,C.j,!0)},
eK:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.a.n(a,b+1)
s=C.a.n(a,u)
r=H.dt(t)
q=H.dt(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.b.K(p,4)
if(u>=8)return H.h(C.r,u)
u=(C.r[u]&1<<(p&15))!==0}else u=!1
if(u)return H.ca(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.a.i(a,b,b+3).toUpperCase()
return},
eF:function(a){var u,t,s,r,q,p,o,n
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.j(u,[P.l])
t[0]=37
t[1]=C.a.k("0123456789ABCDEF",a>>>4)
t[2]=C.a.k("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.j(u,[P.l])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.b.b4(a,6*r)&63|s
if(q>=u)return H.h(t,q)
t[q]=37
o=q+1
n=C.a.k("0123456789ABCDEF",p>>>4)
if(o>=u)return H.h(t,o)
t[o]=n
n=q+2
o=C.a.k("0123456789ABCDEF",p&15)
if(n>=u)return H.h(t,n)
t[n]=o
q+=3}}return P.ev(t,0,null)},
at:function(a,b,c,d,e){var u=P.eJ(a,b,c,d,e)
return u==null?C.a.i(a,b,c):u},
eJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.t()
if(typeof c!=="number")return H.z(c)
if(!(t<c))break
c$0:{q=C.a.n(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.eK(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.as(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.a.n(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.eF(q)}}if(r==null)r=new P.v("")
r.a+=C.a.i(a,s,t)
r.a+=H.f(o)
if(typeof n!=="number")return H.z(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.t()
if(s<c)r.a+=C.a.i(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
eI:function(a){if(C.a.F(a,"."))return!0
return C.a.a8(a,"/.")!==-1},
ho:function(a){var u,t,s,r,q,p,o
if(!P.eI(a))return a
u=H.j([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.aC(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.d.L(u,"/")},
hn:function(a,b){var u,t,s,r,q,p
if(!P.eI(a))return!b?P.eG(a):a
u=H.j([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.d.gP(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.d.gP(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.h(u,0)
t=P.eG(u[0])
if(0>=u.length)return H.h(u,0)
u[0]=t}return C.d.L(u,"/")},
eG:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.eH(J.fl(a,0)))for(t=1;t<u;++t){s=C.a.k(a,t)
if(s===58)return C.a.i(a,0,t)+"%3A"+C.a.H(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.k,r)
r=(C.k[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
hd:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.k(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.dJ("Invalid URL encoding"))}}return u},
df:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.a.k(a,t)
if(s<=127)if(s!==37)r=e&&s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.a.i(a,b,c)
else q=new H.bo(C.a.i(a,b,c))}else{q=H.j([],[P.l])
for(r=a.length,t=b;t<c;++t){s=C.a.k(a,t)
if(s>127)throw H.b(P.dJ("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.b(P.dJ("Truncated URI"))
q.push(P.hd(a,t+1))
t+=2}else if(e&&s===43)q.push(32)
else q.push(s)}}return new P.cy(!1).bb(q)},
eH:function(a){var u=a|32
return 97<=u&&u<=122},
ey:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.j([b-1],[P.l])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.a.k(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.b(P.n("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.b(P.n("Invalid MIME type",a,s))
for(;q!==44;){u.push(s);++s
for(p=-1;s<t;++s){q=C.a.k(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)u.push(p)
else{o=C.d.gP(u)
if(q!==44||s!==o+7||!C.a.A(a,"base64",o+1))throw H.b(P.n("Expecting '='",a,s))
break}}u.push(s)
n=s+1
if((u.length&1)===1)a=C.x.bt(a,n,t)
else{m=P.eJ(a,n,t,C.j,!0)
if(m!=null)a=C.a.N(a,n,t,m)}return new P.cs(a,u,c)},
hp:function(){var u,t,s,r,q
u=P.fJ(22,new P.dk(),P.a_)
t=new P.dj(u)
s=new P.dl()
r=new P.dm()
q=t.$2(0,225)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(14,225)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(15,225)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(1,225)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(2,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(3,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(4,229)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(5,229)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(6,231)
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(7,231)
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(t.$2(8,8),"]",5)
q=t.$2(9,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(16,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(17,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(10,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(18,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(19,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(11,235)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=t.$2(12,236)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=t.$2(13,237)
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(t.$2(20,245),"az",21)
q=t.$2(21,245)
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
eQ:function(a,b,c,d,e){var u,t,s,r,q,p
u=$.fj()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.a.k(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
p=q>>>5
if(p>=8)return H.h(e,p)
e[p]=t}return d},
b9:function b9(){},
aF:function aF(a,b){this.a=a
this.b=b},
ds:function ds(){},
ab:function ab(a){this.a=a},
bA:function bA(){},
bB:function bB(){},
L:function L(){},
ai:function ai(){},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bL:function bL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cr:function cr(a){this.a=a},
co:function co(a){this.a=a},
aS:function aS(a){this.a=a},
bq:function bq(a){this.a=a},
c8:function c8(){},
aR:function aR(){},
bx:function bx(a){this.a=a},
cK:function cK(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
bN:function bN(){},
bY:function bY(){},
O:function O(){},
u:function u(){},
aA:function aA(){},
m:function m(){},
c4:function c4(){},
an:function an(){},
B:function B(){},
i:function i(){},
v:function v(a){this.a=a},
P:function P(){},
cw:function cw(a){this.a=a},
ct:function ct(a){this.a=a},
cu:function cu(a){this.a=a},
cv:function cv(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
de:function de(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(){},
dj:function dj(a){this.a=a},
dl:function dl(){},
dm:function dm(){},
d9:function d9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
cF:function cF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bu:function bu(){},
bv:function bv(a){this.a=a},
h9:function(a){var u=new P.d3()
u.aS(a)
return u},
cZ:function cZ(){},
d3:function d3(){this.b=this.a=0},
bj:function bj(a){this.a=a},
d:function d(){},
a_:function a_(){}},W={
fC:function(a){return W.fD(a,null,null).ah(new W.bJ(),P.i)},
fD:function(a,b,c){var u,t,s,r
u=W.W
t=new P.x(0,$.k,[u])
s=new P.cA(t,[u])
r=new XMLHttpRequest()
C.H.bu(r,"GET",a,!0)
W.cI(r,"load",new W.bK(r,s),!1)
W.cI(r,"error",s.gb9(),!1)
r.send()
return t},
cI:function(a,b,c,d){var u,t
u=W.hB(new W.cJ(c),W.c)
t=u!=null
if(t&&!0)if(t)J.fk(a,b,u,!1)
return new W.cH(a,b,u,!1)},
hB:function(a,b){var u=$.k
if(u===C.c)return a
return u.b8(a,b)},
e:function e(){},
S:function S(){},
bh:function bh(){},
a8:function a8(){},
J:function J(){},
aa:function aa(){},
bw:function bw(){},
by:function by(){},
bz:function bz(){},
aY:function aY(a,b){this.a=a
this.$ti=b},
K:function K(){},
c:function c(){},
V:function V(){},
bG:function bG(){},
W:function W(){},
bJ:function bJ(){},
bK:function bK(a,b){this.a=a
this.b=b},
aH:function aH(){},
ac:function ac(){},
ae:function ae(){},
c_:function c_(){},
q:function q(){},
aP:function aP(){},
al:function al(){},
ce:function ce(){},
ao:function ao(){},
ch:function ch(){},
ci:function ci(a){this.a=a},
b_:function b_(){},
cG:function cG(a){this.a=a},
cH:function cH(a,b,c,d){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d},
cJ:function cJ(a){this.a=a},
aI:function aI(){},
bF:function bF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aE:function aE(){},
dc:function dc(){},
aX:function aX(){},
b0:function b0(){},
b1:function b1(){},
b4:function b4(){},
b7:function b7(){},
b8:function b8(){}},Q={
f_:function(){W.fC(C.a.J("../",N.en())+"navbar.txt").ah(O.hT(),-1)
Q.hY()
Q.hX()
W.cI(window,"scroll",new Q.dz(),!1)
if($.dU)H.dx(document.querySelector("#jrAvatar"),"$iac").src="images/Alchemy/The_Glow.png"},
hY:function(){var u,t,s,r,q
if($.dU)$.dR=!0
u=[K.a("2/2/18","I can fucking believe it's fucking Ground Hogs Day because I have spent the day murdering the fuck out of bugs that should be long fucking dead. Combo sessions once again work, and MAYBE players will stop spawning dead or near dead?<br><br>Also Shogun finally fucking works right. Also, YES I know you're fucking out of character but that is just going to hafta be a thing till the Big Bad update. "),K.a("2/1/18","I definitely did not just spend three days working on a shitty easter egg. That doesn't sound like me at all. <span class = 'void'>4037 is the seed</span>"),K.a("1/26/18","Whoa, wtf? Are SMITHS finally in the sim in the non fanon section? Shit, KR can finally have their true form now. "),K.a("1/25/18","Players can now make robot companions, too. There's two basic ways to get a robot: Be REALLY fucking good at alchemy, OR be really fucking enthused about robots. The robots themselves are either yourself, your best friend, or the Heart player (like you do).<br><Br>Also, I changed how relationships worked a bit to avoid being discriminatory to non-player robots. HOPEFULLY that didn't break anything but I am way too tired to check the more subtle shit (like yellow yards).<br><Br>I also tweaked teh brain ghost rate, was way too rare. So brain ghosts can be your friend if you don't have anybody else you feel strongly enough about."),K.a("1/24/18","Brain ghosts are things that hope players can have as companions. The ghosts are either their crush, their rival, or the Heart player (like you do). <br><br>Also slightly improved rendering and rendering speeds."),K.a("1/23/18","Leprechauns are now available for lords, who ALSO get a buff for each minion they possess. <a href = 'dead_session_finder.html?LordStuck=true'>Dead sessions</a> just got a whole lot dumber."),K.a("1/19/18","You can get carapace companions via dream quests now, and the structure is in place for the Shenanigan Upate (which will heavily rely on carapaces). The carapaces are p generic right now, of course, but their time to shine will come. <br><br>Next up will be the more gimicky types of companions: imaginary friends, robots and independant dream selves. Won't be 'till Monday, tho, cuz the weekend is for chilling and also WigglerSim/DollSim/Gigglesnort.  "),K.a("1/17/18","Hell yes, first part of the NPC UPDATE: Companion Update is complete! Players can now occasionally get consort companions as quest rewards. They help with fights, and count as party members to help with quests (really useful for Pages).  <br><br>Next up will be to make a new reward type that gives you either a companion, an item, or a fraymotif. MOST quests will have that sort of reward, unless there's a specific reason not to. And certain classpects will be more likely to get certain things 'randomly'. Thieves and Rogues, for example, will have a higher rate of items while pages and heirs will have a higher rate of companions, and Seers/Mages will have a higher rate of fraymotifs."),K.a("1/15/18","Hah, take that Shogun. Looks like I can still update the Sim after all. Have some Dutton Cult memes.<br><Br>Still gonna go over to <a href = 'http://farragofiction.com/SBURBSimE/experimentalLanding.html'>Experimental</a> though. It's time for the NPC Update, Shogun or no Shogun."),K.a("1/13/18","<h1>Shogun has Arisen</h1><br><Br>Hopefully you all can still see this???  Some asshole calling himself shogun burst into my spooky Attic when I was ALREADY spooked by that fucking wolf and shitposted his way into my SBURB CONTROL ROOM. That's probably a thing I have. I'm declaring it canon. Anyways, I think he's stuck pretty good in there. Hopefully there's no reprecusions.<br><br>At least I have the <a href = 'http://farragofiction.com/WigglerSim/'>WigglerSim</a>. And I can probably figure out how to get the NPC update started even with that asshole putting cheeto dust all over my things. I bet I can hack into Experimental from here...<Br><br>Also, End Year 1 Voice Chat is here: <a target = '_blank' href ='https://soundcloud.com/jaded-researcher/sburbsim-voice-chat2'>Soundcloud</a> and here <a target = '_blank' href = 'https://www.youtube.com/watch?v=lY9KstW5D7E&feature=youtu.be'>Youtube</a>"),K.a("1/12/18","The POPULAR VOTE for the Shogun v JR contest will be taking place on the discord shortly. And of course, the Discord END OF YEAR 1 VOICE CHAT will happen tomorrow, as well. "),K.a("1/11/18","The WigglerSim runs screaming towards completion while the Shogun v JR competition begins it's final stages. Who is that asshole, anyways?"),K.a("1/3/18","Typos and small bug fixes continue, while most of my efforts are going towards the WigglerSim. I expect to start work on the NPC update on 1/13/18."),K.a("12/31/17","Between IRL shit and the <a href = 'http://www.farragofiction.com/DollSim'>DollSim</a> getting a shit ton of parts from IO/Popo-Merrygamz, WigglerSim is going slower than I wanted (which itself delays the NPC update). My goal at this point is to have it v1 complete by 1/13, which coincidentally is SBURBSim's 1 year anniversary. (That being the day I had a complete sim with a begining, middle and end, but before I was advertising it or had newsposts). <Br><Br>We will be doing a huge Discord voice chat, just like we did for the Great Refactoring that day, 4pm EST. <a href = 'https://www.timeanddate.com/countdown/to?iso=20180113T16&p0=403&msg=SBURBSIM+VOICE+CHAT+2&font=hand'>Check out This Countdown Clock</a><br><br>We'll have a 'future of the sim' address, and then a Q&A section. "),K.a("12/29/17","Whoops, looks Shogun did some shenanigans while I was busy distracted by WigglerSim. Don't worry chased him off with a broom, everything is fine again."),K.a("12/21/17","WigglerSim continues, real life bullshit continues to slow me down. <br><br><li>+Wrigglers can grow up and DIE, in new and more interesting ways! <li>+The caste system now leaves a more systemic mark on your young charges once they leave your care!"),K.a("12/17/17","Still working on wiggler sim, but a friend's in the hospital so I've had to stop coding for a bit."),K.a("12/14/17","There is obviously no way I'm having some sort of weird <a href = 'image_browser.html?mascotCompetition=true'>fanart</a>/fanfic competition over the next month, with a deadline of January 13th. There is further no way that me and Shogun will decide SBURBSim Mascotdom based on who gets more fanart/fanfic. And there definitely isn't any weird rewards planned for participants. <br><Br>But if I WERE. You'd make art and fics of me, and not Shogun, right? I mean, who even IS that douchebag?<br><br>On a serious note, turns out time players were being WAY too panicky about how dangerous some prototypes were. They've calmed down.<br><br><li>+Trolls can now grow up and leave you. <li>+Time players can now save your timeline better with sprite shit."),K.a("12/13/17","Shit, we are exactly one month out from SBURBSim's one year anniversary. What the fuck. <br><Br>More bug fixes, but most of my work is still on wiggler sim.<br><br><li>+Wrigglers now come in eggs, the color of their blood. <li>+Eggs can be adopted. <li>+Who is shogun <li>+Tables re-guarded"),K.a("12/12/17","Spent the first part of the game fighting json with dart, and the latter half panicking about how apparently AB's gone insane like a week ago and ppl just now told me. Turns out she was rage quitting her job any time she saw a crash (even grim dark crashes) because the stack trace software was being a little bitch.<br><br><li>+Skynet fixed. Again. <li>+Wrigglers can be renamed randomly.<li>+Wrigglers can be renamed unrandomly."),K.a("12/11/17","Dream players who hit gnosis3 too early no longer crash the sim. <br><br>Probably gonna leave the two branches synced at least a few more days while I focus on making this WigglerPetSim thing.<li>+Progress on a brand new Wriggler Raising game. <li>+Dream players who break the game no longer totally break the thing they are supposed to sorta break."),K.a("12/10/17","More traits for alchemy sim, so far p stable, just working on DollSim stuff (like the new <a href ='http://www.farragofiction.com/DollSim/echeladder.html'>echedladder</a> stuff).<br><Br>Oh, and fixed a weird bug where sometimes bosses were spawning with less than max health.<br><br><li>+Go grab your Edison bulbs and Tesla coils because STEAMPUNK ITEMS MADE IT IN! <li>+Items now classifiable as 'Swag.' <li>+Cod tier and Dog tier traits added.<li>+Wizards will be delighted to note that we added mandrakes.<li>+Bosses no longer come pre-dead."),K.a("12/8/17","<h1>Alchemy Update On Main!!!</h1><br><Br>Which you know, adds some great flavor text and strengths for some much ignored players (space players come to mind), but what we REALLY wanna see here is that dope as fuck <a href ='testAlchemy.html'>AlchemySim</a> that shook out of the Alchemy update and made it take like, twice as long.<br><br>BESIDES the dope af mini game, Alchemy update gives all players specibi, and lets them get items as rewards from quests and then combine those items as stupidly as possible into ever ridiculous combo items (like a 'Guaranteed Hot AK-47') and then shove those items into their specibus for simple stat boosts.<br><br>And now for the inevitable bug fixes as narrated by manicInsomniac: <br><Br><li>+'Your Story' no longer murders the player who's story it previously was when loading you into it.<li> +Corpses can no longer die. <li>+Living corpses can no longer live. <li>+Shitty weapons will no longer murder their owners.</li><span class='void'><li>Shogun: +Turns out shitty weapons kept working in the wrong direction</span>"),K.a("12/7/17","Reworking murdermode dialogue took longer than expected, but I've finished. Figure we can go main tomorrow, and I'll spend the rest of the day working on doll shit.<br><br><li>New Update: +Oh Christ Shogun broke in and we can't get him out. Send help. +Our Frankenstein-esque dollmaker now works on babies, human and alien alike! Staple body parts together to your heart's content!"),K.a("12/6/17","Working on getting murder mode dialogue updated to the new engine. If alchemy remains bug free by tommorow i'll probably shove it on main after a quick bug check. <br><br><li>+Expanding on the number of ways someone can threaten murder.<li>+Now more difficult to decide to not kill people."),K.a("12/5/17","Alchemy seems to have been balanced okay in the sim itself. I've added a fuck ton of quests, while people make sure nothing went completly bananas I'll rework some of the dialogue, then we're probably ready for main.<br><br>+Legendary items are difficult to alchemize. +Shgouns meme ascension continues. +<br>'Seems pretty balanced'. Somewhere, sometime, Woomod suppresses a flinch.<li>+Skynet reined in again, horrerterrors removed from code."),K.a("12/4/17","<a href = 'testAlchemy.html'>AlchemySim </a> is ready to be out of beta testing, though of course not yet on main. Enjoy playing around with how the sim handle alchemy. You'll notice we made a few non canon decisions, in an attempt to make the poor player chars not get into shitty infinite loops. Alchemy consumes one of the objects, and you can only alchemize a thing so many times, depending on alchemy skill. <br><Br><li>+Luck has a more reasonable effect on god tier resurrection. <li>+Fuck No Go Back button added to doll maker, "),K.a("12/3/17","So, I take back everything I've said before. I have a NEW absolute favorite bug in SBURBSim. Sorry whatever it was before, you are shunned.<br><br>You see, somebody found some batshit insane bug where a consort's associated sound (like glub or nak or whatever) got replaced with 'fuck'. Which of course means, that the sim philosophically asked if the Turtle consorts 'ever stopped fucking'. This is hilarious. This is stupid. I made an entire <a href = 'http://farragofiction.com/MiniSims/TurtleSim'>mini sim</a> for it instead of spending more than ten minutes looking for the bug because that is just how I roll.  "),K.a("12/2/17","Troll dolls now have all the canon extended zodiac symbols, and random trolls are guaranteed to have those symbols be the correct color. <br><br>And you can randomize individual layers for any doll. <br><br>Oh, and you can have palletes for different castes for trolls and humans. <br><Br>AND I made it so that the <a href = 'ocQuiz.html'>Your Story</a> MiniSim only displays your quest when you click a button, which reduces lag when you're getting your shit set up. <br><Br><li>+'Your story' no longer prints as soon as you change a text box.<li>+The invisible players, whose bodies you seize control of when play the alchemy mini game, have had their stats normalized.<li>+Those invisible proxy players can now level up as you pilot their bodies around.<li>+Non-princes and non-bards can properly quest on Doom quests again."),K.a("11/30/17","Just in time for the Gristmas Season, the <a href = 'testAlchemy.html'>Alchemy Mini Game</a> is finally ready for Beta testing.<br><Br><li>+Item page no longer unable to do basic counting.<li> +Pigeons. Fear them. <li>+Sooooooo many traits. Derse and Prospit get their own items, plasma items exist, burning edge items, steampunk stuff... Its ridiculous. <li>+Can now alchemize things with your dead time clones. +Various bird traits added. <li>+Love Letters are writeable again. <li>+Various traits involving ceramic materials. <li>+Cold Iron weapons once again grace our lands. <li>+Legendary items continue to crop up now and again. <li>+Cod pieces are now, and has always been, a valid fashion choice."),K.a("11/29/17","Oh my fuck we're getting close. Alchemy mini game is basically done, besides me purposefully holding out on the Ultimate Reward till I have even more shitty traits and better balance. <br><br>I've even finally added Dream Gnosis to the sim. <br><br>And holy fuck, I made specibi actually effect stats (just a blanket modifier in this v1 version) and then had to spend a few hours running around yelling at code and trying to somewhat balance shit. <br><br><li>+In the AMG, achievements are tracked instead of evaporating into the void. <li>+In the AMG, you can now save and load, like in a real game! <li>+Skynet will explain how to save and load in the AMG. +Doing good things now gives you more then just a warm fuzzy feeling in the AMG. <li>-Shogun has been unglued from the store seat, he is no longer immortal and immovable. <li>+Dream players can learn about how to twist the rules of SBURB.<li>+Alchemy can now work even if you don't use it to make pointless bullshit.<li>+Dream players trying to break the game no longer breaks the game if people have too much dakka.<li>+Dream players are better at breaking the game.<li>+Alchemization no longer pauses time while in progress.<li>+Items effect stats. Or is it affect? They effect an affect? Affect an effect? Send help update writer caught in infinite grammar loop.<li>+Final bosses better at killing children.<li>+Reality no longer broken. <li>+Players are less lucky, resulting in a higher win rate."),K.a("11/28/17","Alright, the alchemy mini game is basically done besides having endings, and getting a balance/pretty pass. That means I need to get Dream gnosis 3 and 4 our, and have specibi affect strife, and we can call the Alchemy update done. <br><br><li>+Reworked how romantic cloths work.<li>+Too many items in the alchemy system to test them all naturally, more combo traits added to reduce the number of possible items. No, we don't know how adding more traits decreases the item numbers. Just trust us, okay?"),K.a("11/27/17","TG goes right to work, more than doubling the amount of Alchemy combo traits. Like, damn.<li>+Even more synonyms for hot! +Shogun Canine now properly announced. <li>+A whole shit ton of new traits for alchemy, courtesy of tableGuardian and also everyone else.<li>+Moist."),K.a("11/26/17","Progress continues on the mysterious alchemi mini sim.<br><br>And we have a new ideasWrangler, plz welcome tableGuardian to the team. They've done a shit ton of testing and bug fixes and ideas suggesting on the Discord. Keep an eye out for them hassling dead session players or whatever.<br><br><li>+Alchemy is being integrated further and further into reality. <li>+Working on installing the capitalism module in Skynet for the alchemy mini-game. <li>+You can no longer alchemize everything with everything forever and ever.<li>+If you alchemize certain items in the mini game, new shopkeepers will come crawling out of the woodwork.<li>+AMG: Shogun Canine can now do capitalism at you.<li>+Your achievements are now announced instead of being quietly whispered and then recorded in a secret place.<li>-Shogun has entered my house and held a gun to my head and is forcing me to say: +Temporarily Drive off The Shogun. But it is futile, I will return<li>+Banishing Shogun now results in an achievement.<li>+Upgraded Shoguns shitposting module."),K.a("11/25/17","Finally tracked down this annoying bug where sometimes AB would just go batshit and lie about sessions. Again. Yay. Poor AB. We ask so much of her.<br><br>Also working on a new char sheet thingy based on <a href = 'http://swirlygerm-art.tumblr.com/post/167621990417'>Swirly Germ's Thing</a><br><Br>And. You know. Still chugging along on alchemy.<br><br><li>+Corrupt items can now break the game more efficiently.<li> +You can now find and pick up random shit off the ground and alchemize with it. <li>+Skynet reined in. <li>+Ungodly abomination ressurected.<li>+Added Santa's Holy Arsenal to get everyone in the gristmas spirit! +'So hot its cold' items now in the game.<li> +Reality crashes less. <li>+Skynet no longer lies to us about session results."),K.a("11/24/17","AlchemySim will probably be ready for play testing in the next day or two, at which point I'll make sure specibi actually do shit in combat. I am not even kidding though, AlchemySim is so fun to make, and it's just straight up leveraging in sim alchemy. <br><br><li>+In the classic sburb fashion, Items can now die! Now you can mourn the end of your friends, family, AND favorite sword! <li>+Alchemy simulator is interesting enough that we're branching it out into its own mini-sim! <li>+Ancient art of the Cod Of Time gifting the Shogun his sword. <li>+Orbital bombardment cannons exist now. <li>+Backwards, grammar is no longer."),K.a("11/23/17","So. Many. Items. <br><br>Also, oh my fuck look at this: <a href = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'><img width = '300' src = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'></a> floralShenanigans on discord made that and it's amazing. <span class ='void'>You can even see the foreshadowing of Shogun Canine.</span> <br><br><li>+~ATH code now learnable. <li>+Obituaries now constant source of reminders of your own mortality. <li>+Totaly-not-copyrighted Mythril Armor added. <li>+PCHOOOOO! Jetpacks added.+Gold and Platinum editions up and running. <li>+Bards will now dispense poison candy. <li>+Heirs now have access to the EXECUTERS AXE. <li>+Excalibur added. +Cueballs added, doc scratch appeased. <li>+All aspects are now associated with various items, either literally or symbolically.<li>+Added wizardly garments and tools.<li> +Added tools of a maids trade.<li> +A-muse-ing tools added. <li>+Pages now properly be-shorted.<li> +Princes now properly pretentious. <li>+Gristorrent now installable by rogues. <li>+Sage wisdom now dispensed in bite-sized journals. <li>+ABJ has a map and compass. So she can find you. <li>+Scribes can now actually write things on paper. <li>+Seers no longer blind, can now use binoculars. <li>+Sylphs now 300% more magical. <li>+Thieves now 888% more sneaky. <li>+Body pillow of jR added to the game. +Witch's cauldron no longer metaphysical and metaphorical only. <li>+Leveling no longer causes total negation of all noise. <li>+I CALL SHOTGUNS! Because shotguns are in the game now. <li>+Irony now properly classified into its separate sub-groups."),K.a("11/22/17","Spent the morning adding Bros to the<a href = 'http://farragofiction.com/DollSim/bro_index.html'>DollSim</a>. Also took the time to fix StrifeSim special attacks to both have more items in them and to use up less memory (so shouldn't crash for some of you anymore). <br<br> Still chugging with alchemy, starting work on aspect items now that the alchemy proper seems to be solid.<li>+Defeating your personalized god monster now lets you loot their house.<li>+Phantom players will no longer invade your house and touch your stuff. <li>+Blood is now 413 percent more mystic. <li>+Bonding handcuffs added, for the adult crowd. <li>+Friendship bracelets: craftable for MAXIMUM FRIEND POTENTIAL."),K.a("11/21/17","Ugh. Why did I think it would be a good idea to try to upgrade the sim/AB to be less insane. It didn't even speed anything up and it took two fucking days. Oh well, at least it's done now and that'll make future shit a little easier. Back to alchemy. <span class='void'>Also, Shogun showed up which means my inevitable demise, in the proximity of some pigeons is looming. </span><br><Br>More from Manic: <li>+Fidget spinners. We're sorry. <li>+XTREME ITEM CRAFTING! <li>+Glam flam is now canon. <li>+Bespoke suits, for the discerning child warrior. <li>+ICE can now mean diamonds.<li> +Diamonds can now mean ICE. <li>+A whole bunch of other item traits!<li>+Rare footage captured of Author Bot Junior. <li>+Pigeonkind specibus. JR fears for their life. <li>+Ultraviolence is now a purpose, not just a mere trait. <li>+Ditto witg Sweet Bro and Hella Jeff merch........... <li>+Clown Cult now usable as life purpose."),K.a("11/19/17","Alright, I think the name system is finally working right for alchemy. Now to do a fucking metric SHIT TON of alchemy.<br><Br>Oh yeah, alchemy has a rendered scene thingy now, too, courtesy of tableGuardian on discord.<br><br><li>+Enabled selfcest in it's most purest form. <li>+Some names are now objectivly better or worse then others. I'm looking at you, Sven.<li>+Nuclear power has been added to the game. This will end well.<li> +99% increase in EDGELORD levels<li>+Smashy-sticky-whacky things now called Morningstars"),K.a("11/18/17","Ah, what a refreshing start to a day. It's been a while since my blatant incompetance has made a player in this session suffer unjustly.<br><Br> Turns out today's <a href = 'ocQuiz.html'>Your Story</a> oc quiz thingy was broken as fuck, as the LEAST LUCKY void player in existance failed to beat their denizen 269 times in a row. 'But wait!' I think to myself, 'Didn't I fucking write code to PREVENT this kind of shit? '  So I go and check and wouldn't you know it, a careless fucking typo meant that these kinds of sessions were allowed to go basically forever until the player won. Yay.  <br><Br> Best part is their land had the sound of 'clapping' in it, which just sounds sarcastic as fuck when you're failling that fucking hard.<br><br>I ALSO spent like, several hours tracking down a bullshit alchemy bug.<br><br>Snarky whatever the fuck from manicInsomniac: <li>+The personalized 'Your Story' quest can no longer trap you in an infinite hell of blood and combat. <li>+Alchemized Items should no longer distort into a twist of logic when placed into Sylladex<li>+Players will now actually use weapons instead of gesturing threateningly with them."),K.a("11/17/17","Shout out to anon on Tumblr for letting me know that the <a href ='ocGenerator.html'>OC Generator</a> was crashing after you rerolled too many times. It's totes fixed now.<br><Br>Alchemy is also coming along nicely. Lots of extra items are rolled out, and I'm still testing the actual alchemy process. <br><br>More snarky updates: <li>+Legendary items added <li>+On a related note, 'How To Draw Manga' added <li>+Added a vital infusion of Gristmas spirit into the site <li>-Experiencing some bugs- Fiduspawn Plush for example is classified as 'Cozy.' It is impossible to describe this plush beyond calling it Cozy. Seriously, just try it. We'll wait. Could you? Yeah, I thought not. Its bugging us too.<li>+Whips and Chains added, for the adult crowd. <li>+Wrenches, Shovels, Razors- Everything the young aspiring murderer needs to dispose of the body!<li>+The Dark Gods of GlitchFAQ have been satisfied: RoadsignKind added. <li>+The Grey Gods of Anime have been appeased: ShurikenKind added. <li>+The Bright Gods of Fashion have been glorified: CaneKind added."),K.a("11/16/17","I fought AB for half the fucking day since telling her about Alchemy and then trying to make her slightly faster was apparently the WORST THING ANYONE HAS EVER DONE and she threw a fit and stated not returning from sessions occasionally. BLUH. <br><br>Once I wrangled her I was finally able to focus on alchemy again, and have the skeletons in place to handle that shit.<br><Br>The discord (especially ideasWrangler manicInsomniac) has started making hilarious change logs of all my github commits. Have a selection of 'em: <br><Br><li>Players can no longer raise the dead with promises of GLORIOUS COMBAT<li>Players no longer can kill with nothing but the force of anger and fraymotifs.<li>Our resident robot overlords have been informed of the existence of physical objects.<li>+Quests should now give INDIVIDUAL, PERSONALIZED items, based off of the players class and aspect. <li>-All INDIVIDUAL, PERSONALIZED items are perfectly generic objects.<li>-The Power of Friendship can no longer cause duplication of music.<li>+Balance change: Mind players and Blood players no longer know what objects are."),K.a("11/15/17","Holy shit, does it feel GOOD to be back in the guts of the sim, irresponsibly adding new features. We've got some bare bones items and strife specibi floating around. Mostly all cosmetic, still. But just you wait. "),K.a("11/14/17","Alright, time to focus on the sim again, and leave dolls and whatever for the weekend. <br><Br>Lots of bug fixes, including Dead Sessions ironically no longer preventing Time Players from playing. <br><br>Today Main and Experimental have officially divurged again, which means no more bug fixes or features for main until the Alchemy Update is ready."),K.a("11/13/17","Still focused on non-sim and doll stuff. Have I seriously not mentioned yogisticDoctor (from discord)'s awesome <a href = 'http://farragofiction.com/DollSim/mom_index.html'>Mom</a> and <a href = 'http://farragofiction.com/DollSim/dad_index.html'>Dad</a> doll set yet? "),K.a("11/11/17","I've spent the week working on the non sim related shit, but ALSO threw together a <a href = 'http://farragofiction.com/MiniSims/StrifeSim/'>11/11 minigame</a> to celebrate the holiday.<br><br>Also, it is time to say a fond farewell to Octobermas."),K.a("11/7/17","I've been working on planning out the Alchemy Update, doll stuff, as well as getting a non-sim game out. <br><Br>In the mean time there's a handful of new quests live."),K.a("11/3/17","Holy fuck. I finally caught this insidius bug AB has been suffering from. Basically, if the royalty used a fraymotif, then the NEXT time a session had that fraymotif they wouldn't be able to use it, which would make the sessions AB found divurge heavily from reality. For MOST sessions this wouldn't matter, but scratched sessions, sessions with jack, combo sessions and yards all could be effected. It took so fucking long to track down. <br><Br>Also, finally finished the land mini feature I wanted to do before splitting experimental off.  You can now ask the sim what <a href = 'ocQuiz.html'>'your' story</a> would be, getting a mini sim with just your quests in it."),K.a("11/1/17","Bug fixes (sessions no longer run infinitely if jack kills everybody, for example) and the first bit of the revised OC generator are in place."),K.a("10/31/17","<h1>Land Update On Main!!!</h1><br><Br>Otherwise known as happy Octobermas/Spoop-o-ween/Whatever! Holy SHIT That was a p comprehensive update.   You should find that sessions are ENTIRELY different now and hella less repetative (And I'll keep adding quests as time goes on). AND it has all the hooks to eventually work with ParadoxLands eventual land rendering update. Hell FUCKING yes! <Br><br> Oh yeah, and to celebrate the most spoopy of holidays/test the land update, <a href = 'dead_index.html'>Dead Sessions</a> are totally a thing. <br><br>Next up: The NPC and Alchemy updates.  Alchemy might hit first in a massively reduced form (called v1), just to give quests new and exciting possible rewards.  NPC update should be hella huge, adding all sort of subplots (including CLUBS DEUCE GETTING THE FUCKING RING, as the meme goes). It'll be fucking great.<br><br>((Also, before I forget, you may notice some extra spoopy avatars in honor of the holiday. Do not be alarmed, fair citizen, they are temporary. And if you are from the far flung future where this shit doesn't make any sense, you can check out what you missed in the <a href ='image_browser.html?octobermas=true'>fan art section</a>. ))<br><br>((And I wonder if reading these newspost might reveal information about something called the <a href = 'http://farragofiction.com/DollSim'>'DollSim'?))</a> "),K.a("10/30/17","Hell yes, two major bugs defeated today.   Yellow yards no longer just straight up fail post scratch, AND if the same quest happens multiple times in the same session it doesn't fuck up.  Go me."),K.a("10/29/17","More quests, more typo fixes, etc. <br><br>Most notably, dead sessions aren't broke af anymore."),K.a("10/28/17","Bug fixes, stability, mostly getting ready for a main deploy."),K.a("10/27/17","Whoa, did I almost forget to have Battlefield quests? Is that a thing that almost happened. Whoops."),K.a("10/26/17","Corrupt lands are a thing again, and space players are WAY less repetitive now. <br><br>Also, holy fuck was balancing Space players to the new system really annoying, all because pastJR accidentally made it so space players are allowed to leave their land as long as they have NOT finished their frog duties. God DAMN."),K.a("10/25/17","Okay, we can all remember that on this, the most sacred day of 10/25, the Land Update was BASICALLY done.<br><Br>  I still wanna add more quest paths. And refactor how land corruption works to use the new system. And Of course I gotta balance all that stat shit PL did before a Main deploy. But I'd say that the Land Update is basically in the shape it'll be once it hits main."),K.a("10/24/17","Happy 1025eve.  I've added a shitton of class themes today, but the weekend was spent working on making DollSim <a href = 'http://www.farragofiction.com/CardSim/'> Trading Cards</a> and <a href = 'http://www.farragofiction.com/DollSim/charSheetCreator'>Character Sheets</a>. I'm trying to do side projects on the weekend."),K.a("10/19/17","Combo sessions are fixed, and intros are much less repetitive. Hell yes x2 combo of productivity!<br><Br>Dream aspect has themes now, too."),K.a("10/18/17","All aspects (besides Dream) have their own themes now.  <br><Br>Next up I'll be debugging the shit out of combo sessions, adding Class themes and doing the last bit of new features for land quests.<br><Br>Moons are fixed so that players wear the right colors, too."),K.a("10/17/17","New themes added for Hope, Life, Light and Mind. Whew. Lots of writing! <br><Br>Also worked on the doll maker over the weekend, lots of new parts and I almost have everything in place to make future mini games based on the dolls."),K.a("10/13/17","Happy Arc Number Day!<br><br>Today I ripped out all references to the old moon/land system, so you shouldn't have to worry lands or moons suddenly not matching shit. <br><br>I also put the structure in place for a new Intro system, with dialogue more close to how dead sessions taunting works. It's still p bare bones, but I plan on adding more variety to shit over the next few days. "),K.a("10/12/17","Whoops, apparently I murdered the OCGenerator and never noticed. RIP. <br><Br>LUCKILY I was already planning on making a new one from scratch today, to get a better feel for how much variety we have in quests. <a href = 'ocGenerator.html'>Check It out</a>. <br><br> Interests are p solid in terms of variety, even for 4 players with all the same interests. Just gotta bring aspects and class up to that level. "),K.a("10/11/17","All interest categories have themes associated them, with one quest chain (for now) per theme. <br><br>Also the doll maker has more and more parts."),K.a("10/10/17","Alright, 'vacation' over! And by vacation I mean I coded a doll maker while not at home. Check it out: <a href = 'http://farragofiction.com/DollSim/index.html'>Kid</a>, or <a href = 'http://farragofiction.com/DollSim/troll_index.html'>Troll</a>, or <a href = 'http://farragofiction.com/DollSim/consort_index.html'>Consorts</a> are all implemented so far. <br><br>I ALSO added a few themes for Justice, Music, Romance, Thief and Rogue. "),K.a("10/4/17","Alright, multiplayer quests have been coded, and we have a few shiping dungeons to test them out. <br><br> A few more themes have been added as well.<br><br>Meanwhile I'm going on vacation 'till the 10th, so I'm gonna TRY to code less and shit during that. Additiction is a powerful thing.<br><Br> Oh yeah, check out the <a href = 'image_browser.html?octobermas=true'>Octobermas Spoopy fanart: </a>"),K.a("10/3/17","Happy Best Month! I have sucessfully murdered the fuck out of regular sessions and replaced things with the new Quest system. I'm still tweaking shit, and there's probably a few features I've forgotten to take into account, but p much the main thing remaining is to get more and more custom themes in for Lands."),K.a("9/30/17","Dream quests no longer happen without a dream self, and the player is attired appropriately. Dream quest also have branches for 'dreaming without a dream self' and 'dreaming without a dream self and bubbles have turned on'. <br><br>In the mean time I did a few minor bug fixes and doom has a custom set of themes, now, too.<br><br>Also, turns out ghosts are no longer accidentally banned from helping players anymore. Whoops."),K.a("9/29/17","More themes added, list of all themes can be found <a href = 'themes.html'>here</a>. (Mostly for my own use though). "),K.a("9/28/17","Alright, so first up, <a href = 'dead_session_finder.html'>AB</a> now is willing to brave the swamp of depravity that is Dead Sessions. As a result, I worked with her to get dead sessions calibrated 'correctly'. Which is to say, it's a practically unwinable joke mode. <br><br>Meanwhile, Dead sessions have the last piece of the puzzle, mainly shitty moon quests. <br><br>Tomorrow I expect to be polishing shit, and maybe I'll burn regular sessions to the ground, in which case you won't see any new updates for a few days as I wire the quest system into place and make sure it works with multiplayer."),K.a("9/27/17","The contents of strifes are finally toggleable (besides the results)! Hell yes, no more strife spam! <br><br>Lessee...generically hope gnosis doesn't suck as much, and grim dark players are less op since PL's stat update. <br><br>Oh yeah, and Dead sessions are filled with meta bullshit now. Dead sessions have an actual ending, too, where they invade the new session. I plan on having an 'enemy' mechanic where ANY player can become a boss enemy, I imagine Dead players will use it p frequently.  <br><br>I guess next thing I wanna do is make a new Dead Session Finder so I can calibrate shit correctly, and then add moon quests to the dead sessions."),K.a("9/26/17","Dead sessions have working planet bosses (what will be denizens in regular sessions). Hell yes."),K.a("9/24/17","Dead sessions continue to chug along. Lords are finally in (courtsey of tinkeredCalculation /jinkeredRaculation/Pixel and KR)  , as well, though of course tragically minionless."),K.a("9/21/17","More dead session stuff, and Muses are added courtesy of tinkeredCalculation /jinkeredRaculation/Pixel (with KR modifying them to work with the rendering engine). They aren't in their final state (since, like Lords, they are planned to have npc minions as quest rewards), but they are p close."),K.a("9/20/17","Dead sessions are really picking up, along with the land update that they are designed to test. Simple, bullshit quests are now available for the unlucky Dead Session Players.<Br><br> I'll expand them out and add frame stories and shit over the next few days, then when dead sessions v1 are done I'll shift my focus to getting all this working in the regular sessions as well."),K.a("9/17/17","Hey! Guess who DIDN'T find out that the afterlife was destroyed and then proceded to NOT completely forget about it for a day or so?  Wait....too many negatives, I've gotten confused. Fuck. <br><Br>Uh. So. The afterlife exists again! Yay! I am definitely not the most asshole creator of all time. <br><Br>And on a completely unrelated note I am REALLY enjoying how the Land update is going so far. Not yet really anything to show you guys yet, but it's p fun so far. Also what could <a href = 'dead_index.html'>this</a> shitty half finished thing be? "),K.a("9/16/17","<br><Br>First thing you should expect to see on Experimental is a complete Stat overhaul provided by ParadoxLands, and then the Land Update will start happening in bits and pieces.<BR><BR>  Current stat update has wastes be a little nerfed. Might see if i can rebuff their rate of crashing sessions and shit later."),K.a("9/15/17","How 'bout that Hiveswap huh? <br><br>Main looks to be stable, one last deploy for some minor shit, and then Experimental will divurge."),K.a("9/13/17","<h1>Waste Update On Main!!!</h1><br><Br>  If you are seeing this then that means we did it. The Great Refactoring is not only over, but there is a shit ton of new content as well. For all you ppl who read the Main site only, feel free to peruse these newsposts that were previously hidden to you for clues as to what the fuck is going on.<br><br>Also, can I just say how fucking pleased I am that we hit Main on the 13th, in honor of the Sim's new Arc number? <br><Br>Before I forget, the pre Great Refactoring Sim (done in 100% JavaScript) will be archived <a hhef = 'http://farragofiction.com/SBURBSimJS/'>here</a> for future generations to jeer at/ boggle at because holy shit how did I get so far in such a shitty, shitty language.<Br><br>As always, I will halt new development for a few days as I field bug reports that inevitably flood in when we do a Main Release.  THEN, we get the glory of the Land Update.<br><br>Also, sudden Dream aspect has shown up???"),K.a("9/12/17","Guess whose server died dramtically last night in the wake of Hurricane Irma? It was my server. It's always me. Even after the power got restored, my server was still inaccessible, tho. I finally got it back up this morning though.  Fuckin firewalls man, how do they work?<br><Br>Today will be more stability fixes.<br><br>I expect to do the main deploy in the morning."),K.a("9/11/17","Enough people have been asking me about the Gnosis update that I have made this handy <a href='gnosis.html'>Gnosis FAQ</a> for all your gigglesnort meta-talk needs. <br><Br>I've also been seriously working on balance and stabliity for gnosis, as well as killing all the pesky little bugs I haven't gotten around to yet. <br><br>My goal is to get this onto main the 13th, basically."),K.a("9/10/17","Hell yes, Time Gnosis4 is ready! Basically, at tier4 the Time Player will fuck off to the end of the session to see how it turned out.  Observers gotta wait and do shit linearly though, cuz fuck you that's why. <Br><br> Once they get there, the tier4 player will give the Observer the option to reset the session, at which point the time player will murder their own past self and replace them as Alpha.  This generally makes the session go differently, since the time player is now op as shit AND has different opinions about all their friends. <Br><br>Fun fact: This is officially the ONLY way to recover from a crash.  Time players should ALWAYS be able to nope the fuck out of a timeline.<br><Br>Haha, whoops I lied. Turns out Space4 gnosis lets you nope out of a crash as well, by escaping to another session. Good times. Frog magic is clearly best magic. <br><Br>Speaking of, Space4 theoretically lets you escape into your own scratch, Hussie Style.  But I couldn't test that code because it turns out the Space3 event p much makes you just win instead of scratch. AB can't even help me look because it's beyond her vision. So, like, if anybody finds a scratch while the infinite combo space4 shit is going, hit me up. I wanna test it.<br><Br> Also, I might make it harder for time players in particular to get gnosis, cuz holy shit are they spamming it. "),K.a("9/8/17","Guess who spent the past 22 hours (I am COUNTING my sleep because derseJR works hard) trying to frantically fix AB? It was me.  It's always me. AB's been a LITTLE wonky lately, but it came to a head with ppl looking for Rage4 updates that just were not going the way AB said they were, even WITHOUT getting the gnosis 4. <br><br>After much wailing and gnashing of teeth and at least one Derse quest, it turns out that unlike every OTHER time AB has gone the RogueAI route, this time it wasn't because of randomness getting out of control (fucking cat trolls, I swear). Nope. THIS time it was the OTHER thing those fucking cat trolls are known for: Shipping. <bR><br>Those handy dandy tool tips I made (where you mouse over a name to see their stats) basically made it so that shipping grids INVSIBLY were different every time, which made the shippers go into overdrive thinking they had new ships all the time.  Unless you told it not to render which would ALSO disable the tool tips. <br><Br> So for once, AB was right and REALITY was insane. Good times. <br><br>OMFG guess mind4 was way easier than I thought. The assholes hax0r my YellowYard thing, but without my trade mark restraint and good sense. Enjoy crashing the session, assholes. "),K.a("9/7/17","Guess who ended up having to sleep instead of finishing up rage last night? It was me. Hopefully this is going out first thing in the morning, tho. <br><Br>  And also hopefully I rewrite it with more energy.  Basically, Rage Gnosis4 is about gettin MAD that you are in a shitty simulation created by shitty people, and draggin them into it to get sweet sweet vengence. <br><Br>Haha fuck that took way more effort than I thought. Just gonna...deploy that shit."),K.a("9/6/17","So, one popular headcanon about Doom is that it's about rules.  So, while all Tier4 gnosis events are about changing the rules, Doom is about changing the RULES. Which is to say that the laws of causality gets fucked up in a weird lovecraftian nightmare as everything inverts itself just for the sake of changing rules.  It's p dope. <br><Br>Also, I finally fixed a p rare instance of a bug with AB, we can all breathe easier now."),K.a("9/5/17","Blood Tier4 is out. Blood players try to hack the game until more of their friends are allowed to play, with mixed results. They also make sure everybody stays abnormally sane.<br><br>Life4 is also out. They seek ultimate power and disable death entirely, which has some interesting side effects.<br><br>Both Life and Blood are tiers that will get a LOT better post NPC update, btw."),K.a("9/4/17","Void Tier4 is out now. Void players highly value their privacy, so don't expect to see what it does. Hell, they even managed to figure out how to lie to AB.<Br><br>Light players do the opposite, drawing attention to themself at the cost of everyone else.  At least they make a little bit of the session stats visible. And you know, everybody gets SO LUUUUUUUUCKY!!!!!!!!  It's kind of funny when two light players fight over the spot light, tho."),K.a("9/3/17","Got both Breath and Heart tier4 gnosis events out today. Heart's are....NOT quite how I envisioned, but I figure glitchy graphics are going to be a risk of wastes fucking with the code. I'll fix it eventually."),K.a("9/2/17","Dear sweet precious sweet sweet AB, who remains, as always, the best, has informed me that she hates my entire Class.  Wastes fuck with the rules of the sim and make her reports incredibly inaccurate.   So I have given her the ultimate act of diamond buddy trust, and have given her the power to UNDO any Wastes effects.   <br><BR>Functionally, this means that she won't apply one sessions' waste shit to the next session in the list, but that the Wastes changes WILL happen to their own scratch and combo and etc.<Br><Br>You should also find AB much faster after PL and me frantically cleared away a lot of shit that was slowing things down."),K.a("9/1/17","Hope players now are able to perform their tier 4 Gnosis bullshit. They generally change basic facts about the session that they'd rather not believe in.<br><Br>The best possible bug happened while I was debugging it, tho.  So, Hope players can childisly rename the class/aspect of whoever they hate, right?  This resulted in me discovering that Aspects dont actually know what file their symbol is in, still using the outdated 'name.png' schema.   This resulted in the sim crashing because it could not find 'Dick.png'.  Best crash."),K.a("8/31/17","Been doing various bug fixes. AB is a LOT more sane now, no clue how so many things went under my radar.<br><br>I also added the ability to hover over names to see what a player/enemies current stats are, and what fraymotifs they have."),K.a("8/30/17","I spammed the fuck out of finishing the tier3 gnosis events. Hell yes.<Br><Br>Now all I gotta do is a buncha bug and balance fixes, and I'll be ready to start up the tier4 events.<br><BR> THEN I'll probably start working on the Land update, although I might suddenly wanna do the NPC update instead. "),K.a("8/29/17","How 'bout that Hiveswap release date announcment? It's so weird to me that I started up SBURBSim as a way to pass the time 'before Hiveswap' way back in January, and now here we are. Good times. <br><Br> Today I implented a basic 'grist' system that is required to breed a successful frog.  Otherwise one asshole with a FAQ was enough to basically guarantee victory.  NOW everybody has to pull their weight.<br><Br>We also have the breath/space mobility exploit, and a shit ton of bug/balance fixes "),K.a("8/28/17","A little flavor text is added for interaction effects, and there's a new mini-prophecy system for Doom to exploit for tier 3 gnosis.<br><Br>A few bug fixes, too."),K.a("8/27/17","Relationships are a little less shitty in the sim now, and I added a bunch of extremely short and vague alternate endings."),K.a("8/26/17","Been importing various FAQs from you, the fans.  <br><br>Oh, and a few minor bug fixes."),K.a("8/25/17","FAQS have ascii art now, and I'm startin to flesh things out from the 'how bullshit is X' level of stuff we had before."),K.a("8/24/17","FAQs are going p good, all the structure is in place for the whole shebang, besides ASCII art which if fighting me.<BR><BR>The discord has opened up a FAQ channel for ppl to submit shit.  It's important to remember that FAQs can be written by any classpect, not just Wastes.  Wastes just have a huge bonus towards meta shit.<BR><BR>I'm gonna be slowly adding the various faq entries while also doing bug fixes.  Once FAQs seem p close to finished (or I get bored) I'll start up the tier 3 gnosis events as well."),K.a("8/23/17","Getting the FAQs working had been kicking my ass so hard. Not even fair.  Sometimes sessions with faqs in them were a little random, which makes AB lose her shit. BLUH.  But they are working better than they were, so enjoy checking out the placeholder shit for tier 1 and 2 gnosis (i.e. players find and write random faqs).<br><Br>ParadoxLands wrote a <a href = 'tools/xml_editor/index.html'>xml editor</a> for ppl on teh discord to use to submit faq sections, which I'll start up once I get the FAQs right. You can use it to create sections for the FAQ. We'll probably get a tutorial up and running (maybe on the discord) before officially opening it, but until then you can check it out."),K.a("8/20/17","No newspost yesterday as I wanted to wait till I had the recording of the <a href = 'https://soundcloud.com/jaded-researcher/great-refactoring-voice-chat'>Great Refactoring Voice Chat</a> ready. <br><Br>Today I'm gonna work more the faqs for the Waste Update. It's not what you'd expect, unless you've seen me rambling. Then it's exactly what you expect.<Br><br>Oh yeah, before I forget, the skeleton of the Waste Update is def in place, and you should see mysterious statements that basically boil down to placeholders.  Ignore them, they clearly mean nothing."),K.a("8/18/17","I'm working on the new waste update and fixing some last few hold out bugs, while PL has made a p dope new <a href ='tools/stat_summary/index.html'>automatic aspect explainer</a>, that'll update as we mess with the code. <Br><Br>Also, before I forget: We are basically at the end of The Great Refactoring. The Denizen Javascript has been defeated.  Sure, experimental is still buggy, but not any worse than other experiemental branch.  <br><Br> SO, to celebrate, I will drop a giggle snort tier and use my actual human voice to give a 'state of the sim' type talk on the discord.<br><Br> <a href = 'https://discord.gg/KPunMPc'>Tune in tomorrow, the 19th at 5pm EST.</a> "),K.a("8/17/17","Lol, no, no we could not get done by 8/13. But, in my defense, mid way through stubbing out the Waste shit I realized that getting the classpects and interests to the new system PL propposed would make it WAY easier. So I set shit on fire again and me and PL fought some red squiggles.  Should be the last fire, Scouts honor.<span class='void'>And as ABJ has demonstrated, if Scouts know about anything, it's fire.</span><Br><Br>So, now to start doing Waste shit. It will be dope as fuck."),K.a("8/12/17","Whoa, looks like AB is back to feeling like her old self. Hell yes.<Br><Br>Now all I gotta do is focus on squashing bugs, both the session crashing ones and the more insidious ones.  Will I be done by SBURBSim's new arc number of 13? Only time will tell. And time is the shittiest Aspect, so it ain't sayin' nothing.<Br><br>A few minor bugs are slain, and combo sessions are working again. OMG, the bug that was killing them was so stupid."),K.a("8/11/17","If I were the type of Waste to have Easter eggs, they'd probably be working a lot better now. <br><br>And if some part of the site were associated with said eggs, maybe they are too???<span class='void' Whoa, did I ACTUALLY refer to [???] with my shitty over punctuation giggle snort quirk???</span>"),K.a("8/10/17","Heh, you know what's boring??? Fighting the tournament arc bugs.  You know what's NOT boring: finally fixing the x= part of ocDataStrings so we can have new classes.<br><br>Behold the Grace and Guide, classes which are still hella blank, but look really cool thanks to KR.  Graces will be the passive counterpart to Wastes (and will eat of the fruit of the upcoming Waste update), and Guides are the counterpart to Scouts.<Br><Br>The AuthorBot is a Guide, for example."),K.a("8/9/17","Working on the Tournament Arc, which is being stubborn. <Br><Br>In the mean time, I remembered that I wanted to add a 'session of the day' kinda thing. You can see it in the menus, but it's basically just converting the date into yyyymmdd, like 201789."),K.a("8/8/17","I figured I was banging my head on a brick wall with AB, so I let her continue at half-capacity for now while I shifted focus to get the OC data strings working.<br><br> As far as I can tell they are HELLA working, guys. It's pretty awesome. Haven't tested any easter eggs they have yet, but we are getting there."),K.a("8/6/17","Holy shit, why is it so hard to make AB filter sessions. This sucks. <br><br>But at least less sessions are crashing now after PL figured out what was wrong with combo sessions.<br><Br> Also, I have decided that '13' is an official arc number for SBURBSim, as my records indicate that on 1/13/17 is when I first coded 'an ending' for it (after starting work on 1/10).  <span class='void'>And also my oc uses hair 13 in the sim, and many other 13s. Like how Wastes are the 13th class.</span>"),K.a("8/4/17","Holy fuck I am the goddamned champion of coding. AB APPEARS TO BE WORKING. I am sure there's plenty of bugs to work out, but god DAMN does it feel good.<br><Br>I have not even REMOTELY sanity checked AB yet, so, you know, Observer Beware.<br><Br>Also, you still can't filter shit. But AB is awake. And that is all there is to say on the matter."),K.a("8/2/17","AB seems to weirdly like Aradia. Who knew. When I first booted her up, Aradia was all she'd talk about.<Br><br>First, I sent a bunch of AB's chassis into Sessions only to never see them again. RIP brave robot chassis. Then, they started coming back occasionally. Apparently they had seen some shit, though, because they would refuse to go back out after reporting to find new sessions.  AB's love of scratching shined through, though, since she would make a special exception of sessions that could be scratched.<Br><Br>Maybe tomorrow I'll get her sorted out? "),K.a("8/1/17","Minor bug fixes here and there as I get AB hooked up to the new stuff.  Royalty, for example, were not getting their prototyping bonus pretty blatantly."),K.a("7/31/17","Today I will focus on getting The Great Refactoring (everything is on fire and there are plenty of crashes) on to the Experimental branch. As such, expect this to be the final Main/JavaScript update for awhile. <br><Br>Holy shit guys, Experimental is burning and full of bugs (fire ants???) but here we are!!!<Br><Br>ParadoxLands is officially the Architect for the post javascript SBURBSim, and will continue helping me out with my Authorial duties."),K.a("7/30/17","Still tracking down ABJ's first bug. When I ask her what classes exist, she lists out the canon ones, and then lists out the fanon ones like 50 times a piece. So. I guess she REALLY likes fanon."),K.a("7/29/17","I have begun the process of waking AB and ABJ back up so they can help us debug.<Br><Br>Oh shit, ABJ is awake. And...reporting that so many players are Wastes of Blood?  This...this is definitely not creepy at all.<Br><Br>(Also why are wastes in the main sim??? Gotta go find that bug)"),K.a("7/28/17","Today I discovered that AB doesn't hate cinnamon rolls."),K.a("7/27/17","Man, I've been dealing with getting The First Session working so much I forgot to update you guys!  <a href = 'https://drive.google.com/file/d/0B-uS7ImZMoISTmw2UGFZaFVHRDA/view'>The First Session</a> is buggy as hell, and nobody is apparently allowed to do Land Quests, but we got 'em folks, and I have promptly added them to my personal Mythology. Hell FUCKING yes.<Br><Br>Next up is getting them able to do quests and fix any bugs that shake out of that, and then waking dear sweet precious sweet sweet AuthorBot up from her medically induced Coma to see if she can help find more bugs.<br><br>Also: holy shit, we are on day TEN of The Great Refactoring. This is the longest I've done any one thing on the sim, or as RS put it: 'ACHIEVEMENT GET: In-TEN-se Work- Slave away for ten days on one task. '."),K.a("7/25/17","Hell FUCKING yes x2Combo!!  The Refactored Sim just generated it's first player, a Witch of Space who has a MonkeySprite but crashed before they had anything else. <a href = 'image_browser.html?firstPlayer=true'>Fan art is here.</a>"),K.a("7/24/17","Hell FUCKING yes, the Great Refactoring has hit a major milestone. I can now render the Sim's navbar, and like, infinity shitty errors. This is progress. This is FANTASTIC progress. Thousands of syntax errors from the conversion process have been slain in absolutely not-honorable combat.  <br><br>And now comes the process of slowly getting each feature working again, while ALSO slaying what red squiggles I have magnanimously allowed to live in my haste to speed run this bitch."),K.a("7/23/17","Mages of Heart no longer suffer from the corruption of their own identity, in the most hilariously ironic bug to hit the OCDataStrings yet.<br><Br>Also, ParadoxLands has helpfully provided this explanation for just what the Great Refactoring is.<br><Br><a href = 'images/misc/fanArt/gifs/the_great_refactor.gif'><img width = '300' src = 'images/misc/fanArt/gifs/the_great_refactor.gif'></a>"),K.a("7/22/17","The Witch of Void and Waste of Mind use The Great Refactoring. A defensive ward of glass and open doors surrounds the allies."),K.a("7/21/17","<span class='void'>Just. Fuck bees.</span>"),K.a("7/20/17","The God Tier Waste of Mind (jadedResearcher) is doing... something. It's kind of hard to see. You are definitely blaming the God Tier Witch of Void (paradoxLands), somehow. Everyone seems to be pretty happy about it, though.<span class ='void'>The Waste of Mind and Witch of Void are refactoring like goddamn machines. It's crazy how much refactoring they are doing. How HIGH do you even have to be etc. etc.  ... ... ...  It's going well.</span>"),K.a("7/19/17","Day Two of the Great Refactoring: Things are going about the speed I anticipated. The Sim is still in ruins, and can't be run, so I've decided to spin off some time to write ways to test it even if it's not finished. In JAVASCRIPT this was as simple as making a new html page, but JavaScript is also a buggy piece of shit (or at least sure does love ENABLING buggy pieces of shit. ) so... <Br><Br>Holy shit, guys, I just realized: JavaScript is TOTALLY a Bard of Doom!!! It ALLOWS you to be destroyed by your own Doom, or to cause destruction with it.  Doom being both 'bad ends' and rules/structure.  JavaScript makes is SO FUCKING EASY to break 'the rules', both for good and for bad. Headcanon: Accepted."),K.a("7/17/16","Last deploy until me and ParadoxLands finish up converting the whole shebang to a new language to get ready for the NPC update. <br><Br>This deploy had bug fixes, and re-enabled dear sweet precious sweet sweet The Mayor, who had accidentally become Impossible. <span class = 'void'>Also, Null class players work again.</span>"),K.a("7/16/17","Spent the past couple days fixing small bugs (such as Original Characters not having the right psionics for their blood color, or Guardians for 13+ sessions crashing them due to not wanting to share classes) and adding small features (like getting the OCDataStrings ready to be extendible. <br><Br>I anticipate main and Experimental branching apart again shortly.<Br><br>Also, Popo-Merrygamz has provided us with 6 new hairs, which KR has massaged to fit the Sim's display specifications."),K.a("7/14/17","What is this??? Did Fraymotifs finally hit the Main Branch??? Hopy shit!<br><br>I bet classpects have gotten a full overhaul, as well as the entire Fraymotif Engine.  I'm litterally writing up the new classpect descriptions for the Char Creator as we speak. <br><br> (Also, what's that <a href = 'land_of_rods_and_screens.html'>LORAS</a> thing???"),K.a("7/13/17","Made sure the new classes get at least place holder quests to fiddle with.  <br><br>I also put in a alpha 'here is a list of buffs/debuffs' readout.  It seems kinda spammy right now. Not sure what I want to do with it.<br><Br> I also workshopped ELEVEN additional 90s rap/rock sensations to help players out with optional bosses I plan on adding to the sim over time. That brings us up to a Pantheon of 12, total.  May they save us all."),K.a("7/12/17","Small, fiddly, fraymotif things, like making not all denizens have the same fraymotif. <br><br>And 3 new classes (Scout, Sage, Scribe) though they behave mostly like existing classes. I have plans though. I continue to like how Life/Doom players behave for ghost shit, and think that all existing scened could benefit from having class themed things for people to do on top of the existing stuff."),K.a("7/11/17","The rebalance is finished. Huzzah! Let us all resolutely forget the thousands of players that died while the survival rate was at 18%. That would be why I didn't deploy till now. 'Cause with all you simulating sessions, it would have been many, many more casualties. R.I.P.<Br><Br>In completely unrelated news, AB is reporting a new type of ending??? What is even up with that? "),K.a("7/10/17","Spent today working on making sure all stats effect combat in some fashion.  Sanity and Free Will will control if you can use fraymotifs, for example.  Problem is it unbalanced everything enough that I can't justify a deploy yet :/<span class='void'><br><br>Which is a fucking SHAME because I made the best shitty fan troll for you guys, with bubble gum pink blood (she is the only one to have it) and heart horns and her name is specialSnowLake and she is in a threeway matesprite ship with Dave and Karkat and etc. etc.<br><br>When I first created this original character (do not steal) she created a dope as fuck bug where all SBURBSim players were covered in her blood, like we were all part of some Orient Express Style conspiracy murder of her annoying ass.</span>"),K.a("7/9/17","Minor tweaks here and there, as well as a list of possible pre-made names for fraymotifs that the discord brainstormed up.<br><Br>Life players should suck a little bit less, too, 'cause they no longer interfere with the God Tiering process.  (They would get all panicky and revive players before they could get a chance to God Tier). <br><Br>Rage/Void players have been nerfed a bit, and shouldn't God Tier the second they get in the Medium anymore. Hilarious though it was, it really unbalanced things."),K.a("7/8/17","So, I noticed that shipping grid were broken, and SOMEHOW this turned into a two day long shipping re-work??? Heart and Blood players maintain shipping grids, with any non-quadranted crushes being the Shippers's speculation. 'Oh, they seem to like this other player a lot, I bet it's FLUSHED/PALE'. Shippers will occasionally also butt in and attempt to get their favorite ships together.  <br><Br>I ALSO did small stat and fraymotif tweaks, but nothing particularly memorable. Fraymotifs in general should be more useful, since they are guaranteed to be at LEAST as good as a regular attack, damage wise. <Br><br>ALSO, DilletantMathematician made this amazing <a href = 'http:,//www.purplefrog.com/~thoth/art/sburb-disco/disco.html'>fan animation-ey thingy</a> with SBURBSim characters dancing.<span class='void'><Br><br>Also, <a href = 'index2.html?faces=off'>FaceOff mode is a thing that will haunt our nightmares forever</a><br><br>Also, since I updated shipping, ABJ broke, and I realized that SHE ships, too!!!  She reports back on initial ships.  So she is a sociopath who enojoys total party wipes, and shipping.</span> "),K.a("7/6/17","<span class='void'>Is it possible I got distracted from fraymotifs??? And added Wastes as a class??? That doesn't SOUND like something I would do, focus is practically my middle name. But if I DID I would expect it to be shitty and alpha and have wastes not do anything special at all.<br><Br></span>I got briefly distracted from fraymotifs working on a tiny rendering engine upgrade that makes swapping out sprites easier (not the full Sprite Rendering Upgrade, though). And so I toiled to make the stupidest possible <a href = 'index2.html?easter=egg'>easter egg</a> with it. (Let's all thank MultipleStripes for the sprites!!!)<br><br>And if I DID manage to focus on fraymotifs for any amount of time at all, I'd expect troll psionics to be more of a thing, both in and out of combat. It's still very much a proof of concept (only a handful of powers) but the framework is there.<br><Br>ALSO I did a shit ton of bug fixes for the character creator, so it should APPEAR less buggy (it wasn't ACTUALLY buggy underneath, the forms just didnt' like to update)"),K.a("7/5/17","More fraymotif work, including sprites (and thus Crowned Carapacians) having fraymotifs. Still a LOT of bugs to fix, though.<br><br>Also, <a href = 'index2.html?images=pumpkin'>What Images Mode</a> is now a thing. If you don't give a fuck about images, or just want to make stupid shit (like 144 player sessions) not crash your browser, this is the mode for you. Shine on, you crazy diamond.<Br><br>ALSO, I made a quick lil 'character sheet' of the players at the end (if they actually GET to the end, and don't crash the game or doom themselves) printing out their 'before' and 'after' stats."),K.a("7/4/17","Denizens have their own 'fraymotifs' now, and several fraymotif related bugs have been fixed as well.<br><br>  If easter eggs were a thing, I'd expect to see more of them, as well. <span class='void'>It's <a href = 'index2.html?pen15=ouija'>dicks</a>. dicks are the secret.</span>"),K.a("7/3/17","Today shall forever go down in history as the day that 'fraymotifs when?' stopped being a meme and instead became a real thing.  Players can now have text only, unbalanced as fuck fraymotifs.  <Br><Br>Next up is hand made 'fraymotifs' for denizens, sprites and psionic trolls.  Then maybe i'll look into at least having the users of the fraymotifs pose as a team (if they are players).  "),K.a("7/1/17","<a href = 'land_of_rods_and_screens.html'>The LORAS game</a>, described by <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> and drawn by <a href = 'http:,//paradoxlands.tumblr.com/post/162444935101/land-of-rods-and-screens-your-land-is-a'>ParadoxLands</a> is basically complete. In addition to ParadoxLands' dope background for the game, there are multiple 'win' states, and you no longer get the best reward for the regular ending. If you played the game early enough, the best reward (holy shit is it hard not to call it the Ultimate Reward) was pretty much inevitable to get, but now it's only for the True Ending. Thems the breaks, future peeps. <Br><Br>Also, procedural fraymotif descriptions are done, and I expect to be able to shove fraymotifs in general into the sim within the next couple of days.<br><Br>In the meantime you can see my shittily organized test page <a href = 'test_fraymotif.html'> here</a>"),K.a("6/30/17","Fraymotifs are nearly ready for v1 to be integrated into the sim. I'm brainstorming some interesting ways to describe them in sim rather then just call out an attack name and have you guess what happens next. <br><Br>Once player fraymotifs are fairly stable, I'll work on the non-procedural sprite/denizen/etc 'fraymotifs', as well as custom ways to get fraymotifs, and extending fraymotifs to have effects other than just damage/healing/buffing/debuffing."),K.a("6/29/17","So, combo sessions have been acting weird with YellowYards, but only SOMETIMES. Turns out it was SHIPPING GRIDS. The fix is the highly unintuitive 'Have the players drag the corpses with them to the new session, Vriska/Gamzee style'.  <Br><Br>Don't worry about it. Of COURSE shipping problems are fixed by bringing decapitated heads or whatever the fuck. I think we can all agree that SBURB makes perfect sense.<Br><Br>I also enabled <a href = 'index2.html?seed=111&VoidStuck=true'>Void players</a> to have a custom info phrase to describe which stat they have that is crazy high. (For example, SO STRONG, or SO FRIENDLY). If they are a class that has to EARN their power, the stat will be flipped (SO WEAK, or SO AGGRESSIVE).  It has been an interesting way to keep track of how the Void player will be growing over time.<br><br>Also, I've totally got the basic structure of fraymotif tests ready and have a solid plan for finishing them up. "),K.a("6/28/17","So, ExperimentalBranch (which you're either on right now if you can see this, OR you are from the far flung future) has officially gone off the rails and has wildly divurged from Main. <Br><Br>Classpect stats have been completely redone to make future fanon classpects and fraymotifs easier. I haven't updated the help text on the character yet (and won't until classpects settle down) so, for now, they are totol lies.<br><br>Also, smiley quirks are a thing. Finally."),K.a("6/26/17","So I spent the past 36 hours implementing a <a href = 'land_of_rods_and_screens.html'>game</a> version of the land <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> wrote for me.  <Br><br> It sure does seem unlikely that the game has secrets, doesn't it?  I ESPECIALLY wouldn't expect for the game to unlock any easter eggs in SBURBSim."),K.a("6/24/17","Lol, was I gonna not do any more main updates for awhile??? That stopped being a thing that was true as soon as <a href = 'http:,//paradoxlands.tumblr.com/post/162149733351/main-dish-misalignment-stand-by-sometimes-while'>ParadoxLands</a> made me some p great fanart which reminded me that I STILL hadn't posted all the OTHER fan art I've been collecting.  So have fun with the new <a href='image_browser.html?fanArt=true'>viewer</a> :) :) :) <br><Br>(Hey, did you know I'm collecting fan art???) "),K.a("6/23/17","While I'm doing invisible backend work on the sprite renderer, we have recieved 7 new hair styles! KR made sure the hair recieved from Popo-Merrygamz (and hair 64 from RemJoleea and hair 66 from Ancient ) worked with the rendering engine. That brings us up to 68 different hair styles! "),K.a("6/22/17","Final Main Update for the next while (weeks? a month?) is out.  It includes the tournament, which you'll see links to in lower down newposts, and a link to in the 'fan' tab on the navbar.<br><Br>  (For those new folks here, Main branch only gets newsposts when it gets an update, so if I seem to go silent, why not check the newsposts over on experimental?)<br><Br>Experimental will start getting work for a new rendering engine (that will allow you to specify what sprite set your custom character uses, like PonyStuck or CarapaceStuck or whatever) and a completely redone claspecting (courtsey of the ideasWranglers, especially the newest one, wooMod who advocated the upgrade) system to emphasize class and aspect uniqueness.  BOTH things are going to require a lot of coding before even the experimental branch gets an update, so we'll see how things shake out. I'll try to do little things here and there so things don't stagnate as well.<br><br>Those two things will be the ground work for the NPC update (which will include NPC party members and Midnight Crew Shenanigans) and the fraymotif update, respectively.  So, big plans coming."),K.a("6/21/17","Been working on redoing the rendering engine to make extending it a thing. Plan on having stupid character customization options available some day, like just deciding what sprite set your OC is using.  (EggStuck, PonyStuck, CarapaceStuck, the possibilities are endless because they are still in the future).  <br><Br>I also made a small balance change for sessions with multiple Space/Time players.  Before, only the first Space players's frog mattered and the first Time Players got to make doomed time clones. This was obviously fucking stupid, and has been fixed."),K.a("6/20/17","So, sarcasticIrony totally made <a href = 'http:,//farragofiction.com/SBURBSim/index2.html?seed=105980060&b=KQYQzMBCBioTcrQIKMgFlAJmATksAIwAMwxEhAbEdcYWrMaU9sABwCsabAmkc6kKZiqYmwYTwSAOZoAoq0gB2MqUI46ZekNW6pCdWkIBXfgEUiISwCpWbZqRA57irvoJS2BEmQrUsFBAs+oyOOMgQ+sgAWvxkWACEREEaDgwATmhKAKr8ABqWRJC2wc5pTlCO8HIFTAAqZCrEXMS4kmWq9PoKFfi6hBBYmENaevCwIWQe1WTiTAAKo5pYlEA&s=DTCSCcHsDsE9gEqQDYFMAEAFZBDWBLaAc2ABcBXcaU1AYwAsBhHU6fABxGEdwGdf8vALZgocMviE5U5XgBVUvUvlpouzUr2AAJSOCjga+vVprUcq1HPqpwOdoNJcAYtPD5FwZ-nBL0AcXIccAATfBxoLRwwyHk9VGi9LgRUXGUYXnoOLQBBNilkLVpyUlI0ADNBJhY2ThB-VGhIWnwQ1B0LAGtCElocZHwicj4c8CkiVBCQjK4AEQTSemAAZXIVVvbo-Fj-dzqvHz9A4LCIrX8Txp7gIkvofyalFS4IGHgAIR8Q00pqOnp-JAQjZolxMHZoJ0tO8cN1iDcSrxYIEhJlIKggA'>SpriteStuck</a> and it is the best thing ever.<Br><Br>Bug fixes and balance and tournament are what's being worked on. <a href = 'tournament_arc.html'>Tournament</a>  is basically done besides clean up and trying to figure out why AB keeps letting scratches into the tourney (those things are OP)."),K.a("6/19/17","So, the tournament core is complete, which revealed that teams made all of one aspect are HELLA OP. A little bit of digging revealed they were all sharing (and completely owning) the same denizen.  <br><Br>This is clearly not gonna stand, so I completely redid the denizen system. Players each have their own denizen (with a random name themed either around their aspect, or around how much they suck/rock at the game.  Thanks goes to Discord for brainstorming names with me :) :) :)"),K.a("6/18/17",":/ Tournament mode is taking a bit longer than anticipated, espcially as I valiently fought against server issues today.  <br><Br>BUT, fear not, I have a consolation prize for you guys: galleries of <a href = 'image_browser.html?hair=true'>hair</a> and <a href = 'image_browser.html?horns=true'>horns</a> now exist to make it easier to design your OCs.  We also have new horns courtsey of Popo-Merrygamz, horns 47-73. "),K.a("6/16/17","The site navigation has overgone a major overhaul after a lot of the new folks let me know how confusing it was. Hopefully that's better. <Br><Br>I also got to learn that Math% of you guys have session crashes if you're loading a page when I'm doing a deploy. Not sure what's up with that, but I'm brainstorming solutions.  In the mean time, if you get a crash right as a page loads, try holding shift and clicking refresh to clear the cache just for SBURBSim.  That should clear it up.<Br><Br>Oh yeah, and KR is getting some art help from the fans, including the new ideasWrangler: <a href = 'http:,//popo-merrygamz.tumblr.com/'>Popo-Merrygamz:</a>. Expect new and exciting hair and horns and (eventually) classes."),K.a("6/15/17","The navbar has been updated to remove the newsposts, and instead there is now a link to the new <a href = 'http:,//farragofiction.com/SBURBSimE/character_viewer.html'> Fan OC Viewer.</a>.  You can view all sorts of OCs submitted by fans (just like YOU) as well as amazing OCs from other fandoms. And then you can <a href = 'index2.html?selfInsertOC=true&'> shove</a> 'em all into SBURB together and watch the shenanigans play out.  <br><Br>'"),K.a("6/14/17","Dang, apparently custom interests were only working cosmetically, but were leaving echeladder runs as 'undefined' and screwing up certain kinds of dialogue. It's working again, tho, and OC data string didn't even have to be fucked with. <br><Br>BTW, in case it isn't clear, Main and Experimental branches will be in lock-step until I start working on new sim features (like fraymotifs). Things like the fan OC mode will be on both branches."),K.a("6/13/17","Okay, totally on me, but it turned out custom Heiress trolls were NOT biologically compelled to murder each other. Don't worry: the <a href = 'index2.html?seed=121655061&b=KQBhvMCdgYQZmAISQF2ARhAQWAJiX0L0TAnNj2XAWWPC1A33D3HlnLLMuG0Noo4VJLiwAJUAFZpoXN0ggAinERDeAThlYxANky6AhF0UB2VXU5YAKgFpboQgq77BxQo24BRUF4DkJhRUGgAcFuqIGohYADKYAGIJtkA&s=DTDCHsDsGcAcEsBOBDAxvAptYAhcAPeSAcxBADFlIACAQUQBdgApcAayzOAFkMATeMgZFS9YQDN46ZABtqASUgMMMmfGIZIqDFwDKAV1gZEAC2PhOAJTTxoAWy7lw4BgCNZM4ABF9JDFGpuZGhlRBEuAHEUcUlhYEsVdXgoLgAFEwBPaClsUBNkFFRQ6lBEDCFkyGAgA'>natural order</a> has been restored and they are back to engaging in black flirting and murderous rampages as Hussie intended. <Br><Br>Also: totally working on a viewer for all the OCs people have sent me, as well as a mode to pit them against each other in death games for our amusement. *cough* I mean play SBURB for a chance to become gods.<br><Br>Also, ohmyfuckinggod, ppl, troll wings are supposed to be blood colored. Apparently a large chunk of browsers were rendering them as candy red and lime and ohmyfucking god. ,alsdkj. I had no clue. BLUUUUH. It's fixed, at the cost of the server having to resend you guys the images again, so you can't use your caches for your next session. Sorry. "),K.a("6/12/17","<h1>Holy Shit 3.0!!!</h1><br><Br> For serious, guys. I'll fix bugs as they crop up, but right now Main and Experimental are the same damn thing. Good job, us.<br><Br> <a href ='https:,//www.reddit.com/r/homestuck/comments/6gs16h/sburbsim_30/'>Official Reddit Thread</a><Br><Br><a href = 'https://jadedresearcher.tumblr.com/post/161733787019/30'> Official Tumblr Post</a><br><br>And I totally shoved my GlitchFaq onto <a href = 'http:,//archiveofourown.org/works/11179110'>Archive of Our Own</a>"),K.a("6/11/17","Gearing up for 3.0. Only bug fixes and testing remain. Just imported some of manicInsomniac's dialogue for the QuadrantDialogue bullshit, and also you can destroy players (you monster). And holy shit, now you can even create new ones! You can even have sessions with more than 12 players!!!   <br><br>Some minor bug fixes are out as well (Derse players can exist in replay session again) and I'm working on fixing a few bugs still, too (Heart players will hopefully stop crashing combo sessions that Yellow Yard soon)."),K.a("6/10/17","Hel FUCKING yes, the ReplaySession character creator is basically done. What does this mean? Here, have a <a href = '?seed=4655190&b=KQZgwsCMCiwAwHZ4DZhhMAQgFjQJmAEEM44AtYPCK+AEUswCoBaFNDHfIkud4ATl40acenias4qdFlxgCxeLxn9IlahFEMWbGZ3nclffgFZ15reJ1S++hT2O5hmsRN0c59oyozO62yWkPLkVSYzU-SzcbPU9DMJVUSNdrINkQhxUzZID3dINQ5QxTcxEUwNs4wuN+UpdcmOCCzOLMOrogA&s=DTAqAsFMAIEEFcAu4D2AnAQixwHPQJYB2A5sAFYCGAJpNQEqQDOklaAxlGiLkqmsTL0UAI2xNglPuiw4QefoODCxiCVPyZsPBYVLLR4ydK1zempSqMb+snScuG1xzXfkP9V5zZnb3Fzyd1EzdzRUDVYNc-ML0hIJdbGN0BCOsQ5I94yMTfRCA'>link</a>.  In addition to being the best possible doomed session, clicking on 'replay session' will let you check out the data tab so you can import a jadedResearcher or authorBot into your own sessions as well. I'm gonna have a special board on the Discord that will be just people's OC data strings, so we can all put each other into death games like Hussie intended. <Br><Br>Before the weekend is over, I also expect to have a true 'CharacterCreator' link that isn't tied to a specific session, and a mechanism for creating and destroying players (you monster). "),K.a("6/9/17","Hells yes. Character creator is looking pretty damn good and has lots of new features. I'll finish upgrading it this weekend. <br><br>Plus, the server is totes being hosted on a brand spanking new domain, so we're not bumming off my friend's generously donated purplefrog.com hosting anymore.<br><br>Basically, we are so close to 3.0 I can taste it. 6/12/17 is the goal here. It means fraymotifs will be a strictly post 3.0 thing, but they'll be worth it."),K.a("6/8/17","HAH! Fuck pastJR, they clearly had no clue what they were talking about. A good nights sleep resulted in an even SMALLER url for the same damn session:  <a href = 'index2.html?seed=4655190&b=KQBhvMGFihmYAhATMA7DAjCAUsZALPkSACLBxYCioaoAbLAokVKgIIJgAK+MyMMhGFhYHcPCRoAlMGwBFOY0yMho9SFmTEADnZyQVAFSgdochuGYArEyT62wAJyYDAFSMm1kH6+37RbH4EZFULH2FrRDtEJxoFAzkScJEJVEQHZicxYHYibAA1OVRMVG9UnKczbTQARwN45TCK0UcdOm1sx3ZybHjXTFdyjQAjGI7UHXyQAE0jAApzFshWZhpHDIMAaVBrAEJzIA&s=DTCiBsDcFMGdgEIHsCe8TAIIKwVwC4AWSATgJYB2A5hsACqHQCG+0J9AarQk7NAEZNw4YACUmAB1oAJNkjjAACuCYpKVAASKyTCklqLcEidHzwAUkgDWCjMgAe64AEkKsXODO1RSfki8A6tBkVIT4GgAyZABm+E4YAMJIbhJkJEwAxmQK4lIYmCRx0WRZQhqurMIh0BQZ0MAAylk1dbRJ1k48fILC3tDgIWTJYr7+8EA'>You would see the link here to demonstrate but it doesn't have spaces or anything and escapes from the side right off the page which is so dumb. but it's smaller. Trust me.</a><br><Br>Also, blood color matters for trolls initial hp and power now. Eventually once fraymotifs are a thing, low bloods wil use the engine for their psychic power."),K.a("6/7/17","I am the l337est asshole on the planet and have gotten custom urls to be 70% smaller. Just look at this relatively tiny fucker: <a href = index2.html?seed=4655190&b=%00%C3%BF%00C%C3%B2%7C%10J%24%24%0D%00%00%00%06%C3%B4%C2%A0%10P%2C%2C%0D%00%00%00%C2%A0%C3%B7)%10Q%16%16%0D%00%00%00)%C3%B8A%10E*%08%0D%00%00%00%15%C3%BA%C2%91%10T**%0D%00%00%001%C3%BA%00%10C%23%26%0D%00%00%00%5B%C3%B9E%10Q%10%14%0D%00%00%00%C2%BA%C3%B9%C2%A4%10V%12%12%0D%00%00%00%C2%98%C3%B7q%10E%16%16%0D%00%00%00%C2%87%C3%B9%C2%AD%10E%11%11%0D%00%00%00b%C3%B7%C2%84%10Y*(%0D%00%00%00%04%C3%BE%C2%BA%10K%05!%0D&s=%2C%2CElves%2CBoys%2C%2C%2C%2CAB%2CPuns%2C%2C%2C%2CTheater%2CTV%2C%2C%2C%2CBaseball%2CRap%2C%2C%2C%2CHeroes%2CPlaying%20Piano%2C%2C%2C%2CPuppets%2CJokes%2C%2C%2C%2CBoxing%2CInsults%2C%2C%2C%2CRobots%2CWeight%20Lifting%2C%2C%2C%2CConspiracies%2CRap%2C%2C%2C%2CArtificial%20Intelligence%2CScience%2C%2C%2C%2CCooking%2CBaseball%2C%2C%2C%2CReligion%2CRobots%2C'>Why do long urls try to escape to the side??? It's tiny, I promise.</a>.<br><Br> You will note that fully half the fucking size is custom strings like interests, so don't expect me to add many more other than maybe chatHandle.  Attempting to compress strings that small only makes 'em bigger tho, so that's about as tiny as we're getting. I also laid the ground work for a bunch more ReplaySession features, some of which are accidentally floating around alrady on the page, all undocumented and shit. "),K.a("6/6/17","<a href = 'character_creator.html?seed=1234'>The Session Replayer</a> finally lets you specifiy interests, including custom 'write in' ones. <a href = 'index2.html?seed=21475351&players=NobwRAhgzgDgpgYwC5gFxgMowguYA0YCANtFAPoB2EAtnugLIQCWAJgWAI4CuzATgGs04AGYQAbgHs+zJHABy3GgCM4fNACYAvoQAWLdegCMAZg77+AYUnFpaMAGIADC9cdmUACp8bxNEj5uOEJlW0lWa1tDRwA2Ixc4jmI4ESQACWlKNCNCGQBzXXTM7MJmSjk+OCgkI0sIOTzpAE97T0RdShtJPJbS8rUqpA06hub7AHUZJDK8937K6qN7AEEAITmKwY17ADEISgACHeZkZkksnXBoeGR7BjL2QhIyKlp6MCY2Dh5+IVRRCTSWQKJSqQwAdh0YAs0VM5gMkTs6AcAFYACwaBBGAAc7i8PmIflQYmIUGCYFCknCiOiDhEIlcTiSKSKfCyqDRuWYBVZ7JyYDKm0WIzgjT4LXQbQQHS6PQ2A2qw3qorG6GWCAgrDgNBO8oWNRW6z6QqG9gA0p0AO7JVh5PCXSCwRAoRgPDjPKAUah0O4sR5cXiCYRgMRSKYglRqNBoqEw+xwvQIrq09GYnF47y+NAkskhMIRZP2OkMtyEZKpDJstAmfn5QqV9kmTkC+aDWrKsUSsBSmW2OXGhVDEWd1rtTp93otk1LNVGqeD7boAAKPjyfFoOsoswd12drWYPqepE9rx9jD930DfwBYeBikjhmxsYM8bMiasheRjJcGYJRICQR5lSBZREWaJGDEMQ-mWLINtGThcjycEcgh876u2oziqO0rjt0k6Cguw6qmAljcMQSDcJUeptoa1GKrs+wHMsfAoDuTq3K6lD+h6XpvL6XyED8Qb-CGgLhveYL2GYz78K+8IfqByKpliuKlPiWbEhApLkpS1Kfo49KMsyFbFKgEGIfWpnmWhbZEVh6CTLIMx0UOHbET2uH9jZiwrNwSC6ECW4uYuYBrGAWgALpAA'>Check it</a><br><br>InterestCategories affect echeladder rung names, chatHandles, quadrantDialogue, rap content and skill and (in rare cases) how much people like you.  Oh, and having interests in common with your quadrant mates makes for a more stable relationship.<br><br>I also tweaked various simulation things, managing to dial the murderMode and grimDark rates way back without fucking with win or survival rates too much. It's suprisingly hard to balance shit.<br><Br>Oh god, I can't stop laughing. You know how you should totally sanitize your database input and shit? Well, obvs I don't have a database, but I sure as fuck had a text entry box that gets rendered to a web page (i.e. the interests). You guys made such beautiful html injection attacks on SBURBSim, so glorious.  Players had interests that were just shitty embedded youtube videos, shout out to <a href ='images/misc/fanArt/x2combo.png'>artificialArtificer</a> for letting me know. Looks like imma hafta fix that shit. If for no reason other than to make people be able to trust custom urls to not fucking rick roll them. Such a shame. It was a beautiful cinnamon bun."),K.a("6/5/17","I have once again done battle with mine ancient enemy: lively as fuck corpses. Turns out they were totally flirting up their quadrant mates. Or at least responding to the flirtations. I'm willing to believe that the corpses would even console their living Moirails who were flipping their shit about their dead diamond buddy.  That's how wack shit was.  But never fear, I have this on lock and corpses are once again relegated to merely leveling the hell up and being asked for one-sided romantic advice. <span class='void'>Oh, and rage related death shrieks and void hiding. Whatever. That shit is random as fuck and it's the best feature/bug.</span>You're welcome.<Br><Br>And I have added a shit ton of easter egg stuff, related to how NepetaQuest was improved. It revealed that AB has been stealth flipping her shit about certain types of special sessions, though. All reporting fake bullshit.  So I had to calm her robotic ass down before I could even BEGIN testing my new shit.<> <br><br>I've done a lot of little but cool things today, too. Armless prototyping is totally a thing now (well, technically fingerless but whatevs). OC Generator no longer racist against humans. Small bug fixes. Working on several big things at the same time, including a way to make urls for ReplaySessions way shorter. And hosting solutions for the site itself."),K.a("6/4/17","Bow before me puny mortals, because I finally fucking finished the quadrantDialogue engine. Characters will talk about their interests and their relationships, and get a bonus to their relationship if they actually have interests in common.  Moirails will also try to stop their palemates from flipping their shit. The dialogue is guaranteed to be exactly the right level of shitty, though I may make it less repetitive in future deploys.<Br><Br>Speaking of deploys, people have been reporting bandwidth issues every time I do a deploy lately. My assumption is that when I do a deploy, it invalidates browser caches for everybody, so suddenly you are ALL trying to download art assets at once and it's slow as balls with as many people as there are. <br><Br>I am looking into getting my own hosting (instead of bumming off my friend's purplefrog site). This should give me more control over bandwidth and speed and all that good stuff. I'm likely to start up a Patreon or something at that point though, to try to offset server costs. SBURBSim'll always be free, etc. etc., don't worry about it. And any Patreon or equivalent will be vaguelly generic rather than being all 'pay me for somebody else's intellectual property' "),K.a("6/2/17","quadrantDialogue is getting close to done, just a bunch of bullshit data entry.  <Br><Br>Dear sweet precious sweet sweet AuthorBot has a brand new chasis, alchemized courtesy of our resident Smith of Dreams, karmicRetribution.  They are both the best!<>c3<<br><Br>AB was pretty sick of just being my robo-doppelganger, so the new chasis reflects her actual role within the Sim:  Guiding Observers to interesting decisions/simulations, etc. "),K.a("6/1/17","12 days remaining to get into the [???] Hall of Fame, btw. <Br><Br>I'm still working on a bullshit dialogue engine, but it's getting close to the end. At this point it's just boring as fuck data entry. <br><Br> I ALSO decided to upgrade nepeta quest (holy shit, what could that be???) in a variety of ways. <br><Br>Also, posting a mini mini update to the Main Branch to try to encourage Google to stop bragging about crashing my damn sessions."),K.a("5/30/17","I've been working on a robust bullshit dialogue engine for players in quadrants with each other. It will be yet one more way Romance distracts from the Ultimate Reward AND will be a way for me to indulge in my sweet sweet love of AI conversations that ALMOST make sense. Yessss. <br><Br>Oh, and I finally decided to do something about the odd bug report that turns out to be a bullshit sequence of events like 'scratch the session, then let it combo, then do a yellow yard 3x in a row but i don't remember what i picked and then scratch the session again and it crashes.'  Crashes SHOULD theoretically print out whether each session was scratched, and what yellowYard choices were associated with it. I say 'should' because i deliberately caused errors as best as i could and saw shit play out right, but that doesn't mean it'll play nice with natural bugs.<div class='void'> And today was also the day I decided ABJ was a fucking sociopath.</div>"),K.a("5/29/17","Character creator/SessionReplay has gotten some mild upgrades. People seem to be using it to generate avatars for themselves, so I added a way to render everyone as gods, dream selves or regular players, as well as adding grimDark aura and murder mode slashes.<br><br>  Since you can now view trolls as god tiers, I also added a way to choose their favorite number (which influences their quirk AND their god tier wings)."),K.a("5/28/17","This weekend was spent finally going through with my promise to upgrade AB and the Rare Session Finder. You can now filter sesions by class and aspect. <Br><Br> Check 'Knight' and 'Blood' to show only sessions with a Knight of Blood in them, for example, or select both 'Knight' and 'Seer' along with 'Blood' to see sessions with EITHER a Knight of Blood or a Seer of Blood. I'll post interesting stats on tumblr, once ABs done looking through a bunch of sessions. <br><Br>This is basically the begining of my massive 'vaguely try to balance shit' initiative, before fraymotifs are fully rolled out. "),K.a("5/26/17","Today has been a day of bug fixes, which are boring, and laying out the new <a href = 'test_fraymotif.html'>fraymotif mechanic</a>, which is awesome.<br><Br>Also, main and experimental branches are likely to seperate soon, as the trickle of bug reports dies down. Once they seperate, all bug fixes will be on Experimental only. Thems the breaks."),K.a("5/25/17","Newly started Kismesitudes have a random chance of kicking off a celebratory rap battle. This is definitely an integral feature to SBURBSim, I think we will all agree.<Br><BR>Also, seems like enough people are using the Experimental Branch insteada the main one that I'll post an official main release. Even though the Character Creator/Replay Session thing is only Mildly Fucking Alpha, I'm not gonna consider things to be '3.0' until it's outta alpha entirely and has all the features I want. (And fraymotifs are totally a thing). <Br><Br>  New features for Main include (but are not limited to) shiny new backgrounds and icons, an upgraded rendering engine that is hella fast. The Replay Engine (aka Character Creator) is only 'Mildly Fucking Alpha' instead of Severely. Lots of the repetitive phrases have been given more variation, thanks to the <a href = 'credits.html'> ideasWranglers</a>. Probably a lot more. Read these newsposts going back a month or so.<br><Br><a href = 'https://www.reddit.com/r/homestuck/comments/6d9e66/sburb_sim_299_main_branch_update/'>Official Reddit Post for people to post comments/bugs/feature requests etc."),K.a("5/24/17","AB's CorpseParty now lets you view stats on class and aspect within the AfterLife, which is gonna be a pretty useful feature as I strive to balance this patchwork pile of glitches and whims.  Speaking of, there's some minor bug fixes and tweaks (corpses aren't allowed to counter attack anymore, for example) and the Mildly Fucking Alpha character creator has a full color picker instead of a drop down with like, only a dozen colors in it."),K.a("5/23/2017","Fuck, I LOVE it when the complexity of this simulation shows itself off. <Br><Br> I updated FreeWill events so that Time players are allowed to control themselves. But, the way freeWill works in the simulation, it turns out that pretty much only Bards and Princes of time are allowed to use it (everyone else doesn't have enough free will).  It pleases me so much that these 'Destroyer' classes just sort of naturally gravitate to places where they can makes effects with no real causes (I am flipping my shit because my future self told me to flip my shit because they were flipping their shit because they were told by a future self to....). Just. Fuck yes.<br><br>AAAND it turns out that the Character Creator is now ready to be 'Mildly Fucking Alpha'.  Created characters are sent over to index2.html, and the shareable URL for sessions with custom players in it includes the custom players as well.  Major supported features include scratches, combo sessions and yellow yards.  Players even re-generate their lands, chat handles and Echeladder rungs to suit whatever classpect you gave them. As time goes on, I'll add features to the character creator, and clean it up in general. Have fun :) :) :)"),K.a("5/22/2017","I am THOROUGLY unimpressed with past JR right now. What the hell was I thinking REMOVING ELEMENTS FROM AN ARRAY THAT I WAS CURRENTLY TRANSVERSING???  BLUH!  On a related note, Ultimate Riddle bullshit frequency has gone down as a result, and players actually getting to fight their denizen has gone up, with a corresponding drop in survival rate. BLUH. <Br><Br>On ANOTHER related note, post denizen quests are now more than a single sentence, thanks to the tireless efforts of the <a href = 'credits.html'>ideasWranglers</a>.<br><br>And hey, lookee here, a NONrelated note! MurderModes are WAY rarer now, and have been refactored to be actually sane (unlike their players). That should make up for the survival drop from denizens being more of a thing. Shit, wait, no, that makes it a related note. What the fuck ever."),K.a("5/21/17","Turns out AB has been reporting absolute bullshit for combo sessions, because of her extreme fetish for scratching sessions. <Br><Br> Turns out she would take a session with a sick frog, SCRATCH IT, and then send the scratched players into the new session, if they'd fit. This is very obviously not how things ACTUALLY work out, and so she has been upgraded. <span class = 'void'>Or rather, she's had yet another set of scratching privlidges revoked</span>  Sorry to anybody thinking that looking for combo sessions was confusing.<br><Br>I managed to improve rendering speeds by as much as a third today.  There is only one big obvious improvement to make left, and then I'll probably clean things up, balance a bit and give the main branch an update before I start work on fraymotifs. <br><Br>Holy shit, that last obvious thing improved rendering time by a FUCK TON. Good thing I decided to do it instead of deciding things were working well enough. "),K.a("5/20/17","It's come to my attention that Observers have already been using the Extremely Fucking Alpha character creator to shove OCs into.  I figured I'd help 'em out a little bit by throwing a costmetic upgrade at the thing. You can now choose hair, hairColor, horns, species and bloodColor. Have fun.  As always, you access the Extremely Fucking Alpha character creator by clicking 'Replay Session' at the top bar of any session. "),K.a("5/19/17","Void players have a rendering upgrade where they slowly fade from view as their power increases. Looks pretty dope.<Br><Br>And the Rage/Void upgrade has just dropped. Rage players get to do what Void players do, but visibly and Void players have some mysterious bullshit going on that MAYBE you'll get to see. I'd expect a strong enough Light player to be able to help out."),K.a("5/18/17","Looks like the rendering engine is ready for live again, which means that the Experimental branch will see these newsposts. Fucking sweet.  I have reduced rendering times pretty dramatically, and will still bug and fuss and meddle to fruther reduce them.  I expect there to be some bugs, mostly of players rendering in a state they are not actually in.  If the Maid of Doom's Corpse looks like a person and not a corpse, we have problems.  Let me know. <Br><Br>  I did a lot of balance shit while also redoing the rendering engine, like severely nerfing luck for strifes (too many black kings one shot themselves because of a  lucky player)"),K.a("5/17/1/7","A side effect up upgrading the rendering engine is that I've finally getting around to standardizing the different ways in which player states can change. Before now HOW you reached god tier could effect exactly what stats you ended up with when you revived, which was never my intent.  Now that things are centralized, it's way easier to debug.  To celebrate, I gave god tier players a massive health boost when they first Ascend, as well.  <br><br>Also, enough of you guys have asked about a <a href = 'https:,//discord.gg/4czh3nB'>Discord Server</a> that I went ahead and spent an hour or so setting one up with aspiringWatcher. I expect people to use it to chat each other up about weird sessions, submit bug reports and feature requests and ideas in general."),K.a("5/16/17","It has come to my attention that certain stupidly long sessions are flirting with browser memory limits. <div class = 'void' > If sessions are flirting with memory limits, am I auspitizing between my session and browers memory limits?  Might not count. I'm DEFINITELY taking my sessions' side over the browsers' and I think you'e supposed to hate both your side leafs equally.   </div> And sessions have always rendered stupidly slow. So...I'm going to buckle down and give the rendering engine an upgrade. I have a solid idea for an improvement, but it's gonna take me awhile. So, expect me to disappear for a day or two (hopefully no more???) "),K.a("5/15/17","So, in trying to explain to someone how karmicRetribution gives me art assets, I realized that they are sort of the middle leaf between me and good taste.  All semi-annoyed 'No. Stop that. Just...Here, let me do it FOR you' with my shitty shitty artistic sense. KR refuses to let me keep hurting good design.<font class = 'void' color='white'>You just know that JR c3< KR c3< Good Taste was meant to be because I was Explaining the Joke (tm) to them and half-jokingly sent a 'c3<' symbol and they responded back with that fancy ASCII clubs symbol. You know, &#x2663. I nearly died laughing. </font>  On a similar note, AB and ABJ have their own backgrounds on the Rare Session Finder and Rare Session Finder Junior. <Br><Br>Coding wise I've been upgrading the queen events, doing a shit ton of bug fixes and am midway through the Madness upgrade for Rage. "),K.a("5/14/17","Some of the more repetitive shit has been upgraded.  Writing snippets (see the <a href = 'credits.html'>Credits Page</a> ) have been added for things like dream quests, mayor quests and random bullshit sidequests.  Dream and side quests have also been modded to be more modular as well. Derse dreamers will find the HorrorTerrors a bit chattier, and Prospit dreamers will suddenly notice the contents of Skaia's clouds occasionally, as well.<br><br> I'm gonna do a bit more cosmetic updates, implement 'madness' kinda shit for Rage and then maybe...work on fraymotifs? ABs upgraded enough for work on them, I think, and I can finish upgrading her once fraymotifs start to be a thing. <br><br>Oh yeah, and Doom players are now powered by their own deaths as well.  Their bad luck tends to be wiped out with death, and they get stronger. You know...assuming they revive. Players they revive have similar benefits. Their ghosts should be pretty strong, too. Narratively, it's cause they ALREADY met their Doom, right?"),K.a("5/13/17","Sprites can join their players for Denizen Minion and Jack fights, and seem to raise overall surival rates by a solid amount. A BUNCH of minor fixes have been ran through, including a slightly better GodTier judgement system (you can no longer, for example, die from a regular goddamned enemy and have it be judged 'Heroic'. And should a denizen manage to kill a GrimDark GodTier, it'll be judged as 'Just'. Stuff like that. ).  <br><Br>A <a href = 'credits.html'> Credits</a> page has been added to reference everybody who has helped out, from submitting bug reports all the way to brainstorming ideas with me.  <br><br>Oh! AND I implemented 3/4 of the mechanisms to prevents fights from taking too long, including (but not limited to) a mechanism by which players and doomed time clones can show up mid fight to help out.  Look at all that fucking coding I got done. <Br><Br>Now, I just gotta go back to finishing upgrading AB and...maybe...maybe I can finally implement fraymotifs???  And then, that'll be the entireity of the new battle system, so I can give everything a 'final' balancing, and focus on the character creator. BTW: early conclusions from AB's Corpse Party: The Sprite Prototypings are HELLA OP and make the Jack/Queen/King fights way too deadly. Hopefully the fraymotifs will counteract that. In the meantime I've nerfed the value of the worst prototypings."),K.a("5/12/17","Holy shit, yeah, gonna dial back the passive classpect effects down a bit. AB's new features are showing some bullshit things happening.  <br><br> I also decided that 'rocks fall, everybody dies' if the post-reckoning boss fights go on for too long, especially after an Heir of Doom/Thief of Life duo took advanatage of the afterlife for a 10k turn fight extravaganza. <a href = 'https:,//jadedresearcher.tumblr.com/post/160588958869/i-officially-hate-the-heir-of-doomthief-of-life'> Read More On Tumblr</a><br><Br>  The newspost page also has amazing new KR provided backgrounds as well, and they are super amazing. If you can't tell (or if you're in the future where they are something else) my side is bits of scrambled code from my YellowYard stuff, and the AuthorBot's side is bits of scrambled code from the Rare Session Finder. And on the main page it's a combo of my green code and KR's dream stuff."),K.a("5/12/17","In addition to minor bug fixes and getting the CorpseParty set up, I am prettifying the site up after KR gave me some new assets/counsel on how to use 'em."),K.a("5/10/17","Before I can (finally) work on fraymotifs, I'm buckling down and working on balance. Things LOOK balanced from my 'hardly ever looks at ACTUAL sessions' Authorial position, and AB assures that me that sessions in GENERAL are going smoothly...but, I've had some complaints about how things go from specific Observers. (<a href = 'http:,//www.smbc-comics.com/?id=2560'>See this SMBC comic for why that can be a thing I don't want to get caught doing</a>) <Br><Br> So, I'm gonna spend the next day or two giving the AuthorBot some MAJOR upgrades. First up will be 'CorpseParty' mode, where we can check out the cause of death and class/aspect of every ghost in all found afterlifes. Is something killing players way too much? Are certain classes or aspects getting the shaft when it comes to the dead kid pile (you know, besides time players. Sorry guys, but that is literally your super power. Time is dead kids.).  Next will be the ability for the AuthorBot to filter session results by classes and aspects. That way we can check out if certain types of players are way too OP (i'm looking at you, Light players) or dangerous (Rage players) and I can figure out how to tweak them.<Br><Br>If you're wondering what I worked on today. Well. Whoof want to know?  (Seriously, like, ~20 people on the planet so far have earned the right to see the fruits of today's labor. Guess more people better figure out what that [???] means, huh.) "),K.a("5/9/17","I spent the past couple of days working on subtle shit that nevertheless broke everything so I couldn't do a deploy until I was done. Sprites are completely reworked, and give stat boosts (different for each sprite) to ring wearers. I'm preparing for them to help players out in the early game, and have the structure in place for Tier2 sprites. You can expect sprites to be more custom shit going forwards, too.  I also redid the 'flipping your shit engine', which hasn't been upgraded since v1.0. I probably did other stuff...oh yeah, fixed leveling....lots of little changes. I expect the experimental branch will be back to being wonky.  Fraymotifs will be a thing as soon as I'm done preparing sprites."),K.a("5/7/17","Okay, hopefully this'll be the last drop where the experimental and main branches are the same. In addition to bug fixes (how the hell were yellow yards so broken??? Apparently I managed to ONLY test them for sessions where they sucked so much they didn't defeat any denizens?) I actually remembered to finish the afterlife shenanigans I had been meaning to do. Knights and Pages of Life and Doom finally get to cash in their promises of aid (awesome ghost powers during a fight OR a free revive mid fight) in addition to Heir/Thief/Maid/Rogue ghost powered revives mid battle being a thing. <br><Br> The end result is we now have the LUXURY survival rate of over 70%. We haven't had that since I started all this refactoring bullshit. I wonder how bad that'll plummet once I start letting sprites super power the jack/queen/king?"),K.a("5/6/17","Alright, the main site and the experimental site should be at the same point in time, at least for now.  For all you guys who have been following only the main branch, we now have stuff like a header with links to both branches,  Luck Events, Free Will Events, an actual fucking battle system...um...shit I know I did other stuff. Oh yeah, that huge fucking corruption mechanic. Good times. We ALSO have the extremely fucking alpha Replay mechanic (i.e. the character creator) which was the whole POINT of me vanishing into the experimental branch for a month. But after allowing class and aspect to be customized, I realized there wasn't a whole lot of DIFFERENCE between players, so I went on an epic quest to remedy that. Next on the list (for the experimental branch) is fraymotifs, overhauling the prototyping mechanic and ....probably allowing the YellowYard to undo deaths that happen in battle. "),K.a("5/5/17","Holy shit, would you look at that. I SAID I would do denizen fights next and then I DID denizen fights next! No distractions, no last minute 'great ideas'. It's a Mayo day miracle. <br><Br>So yeah. Next was gonna be fraymotifs, which I am super looking forward to, but I realized it's been about a month since the main site has had an update. So, I'm gonna try to stabilize things as much as I can and push a mini update out to the main site. Should be tomorrow sometime. I've added a link to the 'old' branch as well now, just in case stuff isn't quite as stable as I'd hoped. It'll be hella neat, in any case, to compare sessions across old, main and experimental. I pulled version numbers completely out of my ass, btw. We are 'somewhere before the fabeled 3.0 release'. "),K.a("5/3/17",":\\  Why was enabling absconding such a hard thing to do? It got so fiddly. Bluh.  Next up will be denizen fights and associated stuff. THEN, I can finally buckle down and get my fraymotif on."),K.a("5/2/17"," Turns out if I make Jack too lucky, he finds a bullshit weapon WAY too frequently and then procedes to drop the overall survival rate to 27%, the rapscallion. Oh, hey, in other news I have the bare-bones new battle system ready. It's hella repetitive, for now, but I plan on having simple fraymotifs and special events (like reviving players or using ghost pacts or whatever). <br><Br> Finishing up the battle system (which includes having more landQuests) MIGHT be the last major feature I do before I buckle down and finish working on the character creator. There's plenty more claspect stuff I want to do, but what I do have is pretty solid in terms of showing off what changing a character DOES to the sim. <br><br>Also, it turns out YellowYards/GroundHogDays were hella broken, and I 100% blame the new afterlife system. Since it's transTimeLine, the ghosts from the first playthrough could interfere with the second playthrough. I've tidied up my time loops and now ghosts are banned from interacting with a session until it divurges from the timeline that killed them.  It mostly works, but I'm not gonna sit down and do major testing until everything stops being half-finished. <font class = 'void' color ='white'>Also, happy birthday to me.</font>"),K.a("5/1/17","After spending two straight days ripping apart the old 'battle' system and adding a new one, I'd hoped I'd be able to push an experimental build out tonight. No dice. It works (mostly) without crashing, sure, but it drops the players survival rate down to 27 goddamn percent and I'd feel like a dick letting that out into the wild. Hopefully once I add aspect powers the players will get better at the game. If not...guess I'm nerfing jack. "),K.a("4/29/17","Afterlife is mostly done.  The basic gist is that different classes of Life and Doom players can gain power, revive players, enable dream bubbles and store ghost power for boss fights(coming soon).  I decided to let Life OR Doom do it because ghosts are a source of 'life', but are also definitely 'doomed'. AND I wanted afterlife stuff to be more common than it was with just life players. Dream bubbles are mostly just bullshit, but they do allow ANY player to gain some ghost wisdom, not just players with a Life/Doom guide.  Ironically, adding all these ways to level up and revive has DECREASED overall player surival rate to just 63%. I imagine it's because it's letting the murderous assholes live long enough to REALLY cause problems. Once I'm done refactoring everything I'll have to sit down and just tweak shit 'till I get an overall rate of thigns that makes sense.'"),K.a("4/27/17","Why is past me so wise and forward thinking? PastJR was all 'holy shit no way am I going to let the AuthorBot play around in scratched sessions'.  CurrentJR was all 'derp, it sounds like a good idea! how ELSE will I debug my new half-implemented afterlife bullshit???'.  Guess who was right?  BLUH.  It took hours. Goddamned HOURS.  AB was wandering around aimlessly, scratching the same session multiple times, and other fuckery. For a while, if the players were all dead, she would apparently hoof it over to the Beat Mesa equivalent and scratch the damned session HERSELF just to break in her new features. Then she'd come back and report 'oh yeah, i totally found a scratched session and here's what happened', and I'd go over and find a pile of original player corpses and no scratched session. Fuck.  I THINK I have finally convinced her to just...let the players scratch it their own damn selves. I haven't seen her deviate from reality by too much in awhile. Bluh.  <br><Br> In other news, hey, I got distracted and decided to implement an entire godamned AFTERLIFE system instead of the next feature, which was going to be...*checks*...boss fights apparently. And also exile stuff. Meh,the afterlife will be cool, I promise."),K.a("4/26/17","Guess who has two thumbs and just realized that Heroic and Just deaths have basically never worked as intended. It was me. All along. I fooled you. So. Yeah, that's working right now. AB can also report back on any Just/Heroic deaths she sees. <Br><Br>Also, somebody on Tumblr asked if I could make a random character generator and I was all 'Oh yeah, I totally took away the link to the <a href = 'oc_generator.html'>OC Generator</a>'. So, that's a thing in the navbar, now. The OC Generator was my proof of concept for SBURB SIM 2.0, basically letting me see exactly how hard it was to render random characters. Word of warning, the quirks are WAY simpler in that thing than SBURB SIM.  Otherwise it would just be paragraphs upon paragraphs of quirks listed out.  Mostly subtle shit like 'do they use ing or in, wanna or want to', etc. etc. "),K.a("4/25/17","Free Will is mostly a thing now. I might tweak it, or add some minor events, but I'm really happy with it as is.  KR even noticed how nicely it works with the new Corruption mechanic. GrimDark players may refuse to do their SBURB tasks, but now there are ways to FORCE THEM.  KR personally recomeneds the following session:  <a href = 'https:,//drive.google.com/open?id=0B-uS7ImZMoISRXV2b1BaZUcxVlk'>(saved into PDF format for posterity)</a> <br><br>Next on the docket is re-doing boss fights, as well as Exile influence for players with particularly low free will.  After that I might double down on making the character creator more than bare bones. Hell, I might get fancy and even let YellowYards work for the damn thing. And turn off my authorial stat graphs. Those things are a crime to good taste everywhere."),K.a("4/24/17","Still working on free will events in the Experimental Branch. Players can manipulate others to kill each other (either through guile or game powers). If a player is marked as a claspect that 'knows about SBURB' they can also force (through nagging or game powers) the ectobiologist or space player to do their goddamned jobs and not doom everyone. Characters being controlled can also escape from the control (usally with the death of their controller, but they can just will power out of it, too). <Br><Br> In case it wasn't clear, all these events are using the freeWill mechanic that Mind and Time players influence (mind players mostly increase it, time players mostly decrease it).  I'm still working on further events (like choosing to suicide via god tier).  After that, I will do the opposite and make events specifically about LOW willpower (such as doing whatever your exile tells you to do. Oh, and Exiles will totally be a thing). So, lotsa changes coming up."),K.a("4/22/17","Redead-ITA ITA inspired me to help AB not get stuck in crashed sessions.  In retrospect, it was kind of a dick move of me just leaving her to her own devices if she gets lost.  Now she's able to come back and report on the bug.  Sessions themselves have custom text if they crash, instead of just...stopping.  I also gave GrimDark players an actual point in the session, they can now work to try to CAUSE a crash like a bunch of assholes. Don't they know how hard it is to KEEP this glitchy piece of shit from crashing?<br><br>  Still chugging along doing free will scenes, btw. They are much more work than luck, because they are ALL about choices and alternatives, not just picking something randomly outta a list."),K.a("4/21/17","karmicRetribution convinced me to improve graphics in a variety of ways, including providing a header image for each page. It'll only show up on the <a href = ''>Main Page</a> (which is now a thing) of the site for the regular branch, but'll be every page for the Experimental Branch. Once they merge, they'll be the same. They'll have slightly different images, though. The main branch is the 'alpha' timeline, cause it's less of a buggy piece of shit.<Br><br>Actually sim related: I'm working on implementing FreeWill stuff (that stat mind and time players modify). It's not at the point where it's actually a thing in the sim yet, though I wonder if it will show up as much as Luck?  Bluh. I'll leave calibrations for when the whole refactor-fest is done.<br><br> I have stayed up way too late programming ways for various claspects to mind control people into murdering all their friends. I have probably fucked over my own dreams."),K.a("4/20/17","Still heavily refactoring how claspects work, but made initial quadrants be a thing and platonic relationships more common.  Hope players also don't directly modify trigger level, but DO make players lesss likely to waste time flipping their shit.  <Br><Br>Lucky (and unlucky) events are now a thing. "),K.a("4/18/17","I am HEAVILY refactoring the experimental branch. So, since I'm fuck deep in code, now is the best time to suggest features. I started a reddit thread for that purpose <a href = 'https:,//www.reddit.com/r/homestuck/comments/666hhu/sburb_sim_in_the_process_of_refactoring_want_to/'> here</a>.  Basically, anything I lay the foundation for NOW will be a million times easier LATER.  Obviously I won't do everything suggeseted (and am likely to not implement ANYTHING exactly as submitted, too).  But, if you wanna join the brainstorming efforts, you can head on over there.<br><br>One interesting idea that has already shaken out is a combo between keiyakins, and MoreEpicThanYou747 where I'm toying with having First Guardian shenenigans that can cause time paradoxes. "),K.a("4/16/17","Will avoid updating the main site (and instead update the <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/index2.html'>experimental branch</a>) while I'm heavily refactoring the sim so that claspects matter more. Sessions are SEVERELY mutating as I do this, so heads up. Once I update the main branch all the links are gonna go to different sessions worse than usual."),K.a("4/15/17","The shittiest rap engine in all of paradox space is now live. Players will occasionally try to stop themselves from going full on murder mode by having a rap battle.  If sick fires happen, they calm down somewhat, else they get their murder on."),K.a("4/14/17","AuthorBot has a new...sibling? Child? Whatever.  Hey! It's...<a href = 'rare_session_finder_junior.html'>AuthorBotJunior</a>!  Guaranteed to be super fast, she only looks at session initial conditions and reports back on them. She's like a Ninja/Scout...thing. While AuthorBot is like the Lewis and Clark of finding sessions. All making detailed notes and doing things right. <Br><Br> Right now you can only filter ABJ's results by number of players, but I do plan to upgrade her with additional filters eventually.<Br><Br> Also: Yes, I could abbreviate her ABJR, but that's just confusing cause it sounds like AuthorBotJadedResearcher. My initials are dumb.<br><Br>Edit: !!! ABJ and frozenLake just found what I am officially dubbing an 'Incestuous Mobius Multi-Session Reach Around '. Check my <a href ='https://jadedresearcher.tumblr.com/post/159574309099/incestuous-mobius-multi-session-reach-around'>Tumblr</a> for details, I guess. "),K.a("4/13/17","Okay, like, on the one hand, I've been wanting to do the character creator for weeks now.  On the other hand, the opportunity arrises to make shitty AI rap battles be a thing for some murdermodes. I am only human. Also, four people have made it into the Hall of Fame for that new mysterious page. ALSO also, today is the day that I realized that AuthorBotJunior should totally be a thing."),K.a("4/12/17","Although it would have been dope as shit to have the Character Creator ready for 4/13, that wasn't in the cards. Instead, what could that mysterious <a href = 'index_pw.html'> link</a> on the main page be?"),K.a("4/11/17","DestroyerTerraria pointed out that GodTiering via QuestBed was so rare as to be unimplemented, so I increased the odds of a player GodTiering BEFORE somebody gets their Corpse mack on. I also let AuthorBot find sessions by questBed or sacrificialSlab to confirm the rarity of both events. Looks like ~20% of all sessions have at least one god tier in them? Maybe I should fiddle with destiny to increase those odds... Of course, I don't want to alter overall surivability. I wonder how much a god tier contributes to party survival rate?  Let's see, we dropped to a 70% survival rate when I increased the odds of QuestBed vs Sacrificial Slab... (that's from 85%)<br><br>Huh. Fun fact: I have WAY less power over this simulation than I thought. I can fiddle with godTierDestiny all I want, but ultimately it's Jack (or Murder Mode Players) who decide whether or not corpses get produced before the reckoning. Even giving 90% of players a godTierDestiny doesn't change survival or even the rate of god tiering very much. Bluh. All it does it increase the uselessness of 'They appear destined for greatness' messages. (Well, and, I mean, it increases the raw NUMBER of God Tiers, I'm sure, but I don't care about that. I wanted to decrease the number of sessions with no god tiers at all.) I'm gonna dial it back down to 50% destiny from 90%. And NOW you have a taste of why this simulation is so freaking hard to steer. So many moving parts."),K.a("4/10/17","Bug fixes, including the easter egg sessions, and small new features, like sprites helping out during landquests."),K.a("4/5/17","With everything in my TODO list, why the hell is SHIPPING GRIDS and TRICKSTER MODE the stuff I am obsessing over?"),K.a("4/3/17","Pushed out a LOT of bug fixes after Reddit and Tumblr swarmed all over the official release, finding all sorts of weird shit.  And put a disclaimer before the GroundHog shit explaining that 'here there be dragons' and the weirder you make the session the more likely there is to be glitches. Also added a couple of new features, the ability to kill a player before they enter a session, and the ability to force a frog prototype (good idea props goes to frozenLake).  May as well make this glitch pile taller."),K.a("4/2/17","The main site is officially being upgraded to 2.1.  Features include, but are not limited to, interactive time shenanigans in the form of the Ground Hog work. Lots of bug fixes, too. New art assets. The works. A good session to check out is: <a href = 'index2.html?seed=221777'> this one</a>. "),K.a("4/1/17","GroundHog day is pretty stable now. Time shenanigans even work with combo sessions, and THAT produced some hilarious bugs. Pretty much the only feature left to implement before I declare this main site worthy is undoing your own attempts to undo things. THEN I can work on the real stuff. Like shipping grids. "),K.a("3/31/17","Been working on getting the GroundHog release stable enough for the main site. Getting close."),K.a("3/28/17","Working on redesigning the rare session finder to be even more useful. In the meantime it's going through growing pains and looks different."),K.a("3/27/17","Operation: Spider dance, aka Operation: Ground Hog's Day, aka Operation: I AM THE GREETIST is a go. Barely tested time shenanigans are now available on the experimental site. I produced my most spirited L337 SCRAMBLE yet, and hop up to the next GOD TIER, achieving the illustrious rank of PROGRAMMING PRAGMATIST. "),K.a("3/27/17","I spent the weekend working on my secret new feature. You can read about it: <a href = 'https:,//jadedresearcher.tumblr.com/post/158869175164/i-have-never-laughed-so-hard-at-a-session-i-am-so'> here</a>. If you can't get to Tumblr or are impatient: Ground. Hog. Day."),K.a("3/24/17","I'm working on a super secret type of scene at this point, and have vague foreshadowing  to it in sessions that it applies to.  I also helped karmicRetribution throw together a fancy background for the Art Newsposts on the site (I did the coding, not the art)"),K.a("3/23/17","I branched the site into <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html'>Experimental</a> and <a href = 'http://purplefrog.com/~jenny/SburbStory/newsposts.html'>Regular</a> versions. This should hopefully keep me from messing with shareable URLs more than once a week. I'm also working with karmicRetribution to integrate with better hair designs, and get an artist newspost page up and running. "),K.a("3/22/17","I got some feedback that it wasn't clear that the players have the option to partner up with Jack (and can decide to betray him later, too).  I decided to add topic bubbles to dialogue to emphasize that it's not all the same stuff.  Sometimes it's about the game, sometimes relationships, sometimes Jack.  I also re-enabled the rainbow glow for God Tiers (long story).   "),K.a("3/22/17","Okay. So, newspost numero uno.  I figured I needed a better way to communicate to you guys, and the one centralized location is here, on the actual site itself. Any newspost before this is retroactively dated.<br><Br> And I absolutely could not help myself: I love the AuthorBot so much that I gave her a space to make her own newsposts.  But of course, she needs to be able to say her own shit, right? So I gave her a (admittedly pretty shitty) ai.  <br><Br>But her whole thing is finding rare sessions right? If she doesn't do that, she's not the SessionFinderAuthorBot, she's just some random newsbot or some shit. So I decided her AI would be able to comment on all the rad sessions she's finding... <br><Br>Okay, long story short, I added the ability for her to say something about each session she finds (on the session finder page as well as here) I went to so much trouble. All for a barely noticeable kind of joke on a page most people probably ignore? Yes."),K.a("3/21/17","I spent a couple of days working on a major feature: combined sessions. If players have a sick frog, then the code checks their child session to see if the remaining living players can fit into it (max of 12 players in a session at a time). If so, they go on over.  Their child session is a real session that has it's own fate, and these alien players are disrupting that. When they join the session, it prints the ID out, so you could put that in a url to see how the sesion was supposed to go. Sometimes the alien players help, quite often they make things way worse. <Br><Br> These sessions are pretty rare, so I ALSO wrote the AuthorBot over there to look for rare sessions and report back."),K.a("3/20/17","Before this day I was mostly working on debugging and tweaking sessions. I enlisted you, the fans, to help me find rare sessions.")]
for(t=0;t<220;++t){s=u[t]
r=s.a
q="<div id = '"+r+"human'><hr> "+("<b>"+r+":</b> ")+J.e9(s.b,"</div>")
J.bg(document.querySelector("#newspostsMain"),"beforeend",q,C.f,null)}},
hX:function(){var u,t,s,r,q
$.dR=!1
u=[K.a("8/5/17","Our newest staff member gets an avatar as well. Arise, Witch of Void!<Br><Br><img src = 'images/paradoxLands.png'>"),K.a("7/24/17","Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out."),K.a("6/28/17","A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!"),K.a("6/13/17","In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'>"),K.a("6/08/17","If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'>"),K.a("6/02/17","Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!"),K.a("5/20/17","I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:"),K.a("5/12/17","Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!"),K.a("5/5/17","It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''"),K.a("4/21/17","Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas."),K.a("4/17/17","We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!"),K.a("4/14/17","<a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a>"),K.a("4/13/17","Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh."),K.a("4/5/17"," Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'>"),K.a("4/4/17"," Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones."),K.a("3/31/17","Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had."),K.a("3/28/17","Here's some proper Dream jammies for all you ungrateful bastards on Reddit."),K.a("3/28/17","Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them."),K.a("3/27/17","Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>."),K.a("3/23/17",'There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."'),K.a("3/23/17","Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'>"),K.a("3/23/17","Cool, I get my own page!")]
for(t=0;t<22;++t){s=u[t]
r=s.a
q="<div id = '"+r+"human'><hr> "+("<b>"+r+":</b> ")+J.e9(s.b,"</div>")
J.bg(document.querySelector("#artist_newspostsMain"),"beforeend",q,C.f,null)}},
dz:function dz(){}},K={
a:function(a,b){var u=new K.c6(a,b)
if($.dR)u.b="Who is Shogun??? <div class ='strikethroughStuff'>"+b+"</a>"
return u},
c6:function c6(a,b){this.a=a
this.b=b}},F={
fK:function(a){if(a===C.M){window
return C.e.gbe(C.e)}if(a===C.v){window
return C.e.gbD()}if(a===C.N){window
return C.e.gbl()}return P.hF()},
ag:function ag(a){this.b=a},
c0:function c0(a,b){this.a=a
this.b=!1
this.c=b}},O={
hU:function(a){var u,t,s,r,q,p,o,n,m,l,k
u=N.en()
t=P.es("(href|src) ?= ?([\"'])(?!https?:)")
a.toString
a=H.i3(a,t,new O.dC(u),null)
t=document
J.bg(t.querySelector("#navbar"),"beforeend",a,C.f,null)
if(O.hJ("seerOfVoid",null)==="true")P.fB(new O.dD(),P.u)
s=new P.aF(Date.now(),!1)
if(H.dT(s)===4&&H.dS(s)===1)J.eb(t.querySelector("body")).I(0,"voidbody")
r=H.dT(s)
q=H.dS(s)
p=C.b.h(H.ep(s))
o=C.b.h(r)
n=C.b.h(q)
if(r<10)o="0"+o
if(q<10)n="0"+n
m=p+o+n
l=P.az(m,null,null)
k=new A.cb()
k.a=l==null?C.G:P.h9(l)
k.bs()
if($.dU||k.a.ab()>0.99)H.dx(t.querySelector("#today"),"$iS").href=C.a.J("../",u)+"dead_index.html?seed="+m
else H.dx(t.querySelector("#today"),"$iS").href=C.a.J("../",u)+"index2.html?seed="+m},
hJ:function(a,b){var u,t,s,r
u=P.ez().gae().m(0,a)
if(u!=null)u=P.df(u,0,u.length,C.m,!1)
if(u!=null)return u
t=$.f2
if(t.length!==0){s=J.fr(window.location.href,J.fp(window.location.href,"?")+1)
t=window.location.href
r="?"+s
t.toString
return P.eA(H.i4(t,r,"")+"?"+$.f2).gae().m(0,a)}return},
i6:function(){var u,t,s,r
u=document
J.eb(u.querySelector("body")).I(0,"voidbody")
t=new W.aY(u.querySelectorAll(".void"),[W.K])
for(u=new H.af(t,t.gj(t),0);u.l();){s=u.d
r=s.style.display
if(r==="none"||r.length===0)O.i0(s)
else O.hL(s)}},
i0:function(a){var u,t
u=a.style
t=!!J.o(a).$iao?"inline":"block"
u.display=t},
hL:function(a){var u=a.style
u.display="none"},
i1:function(a){var u,t,s,r
if($.hG)return
u="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.e6("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(u)!=null){t=window.localStorage.getItem(u)
s=J.fq(t,",")
if(!J.fm(s,a))window.localStorage.setItem(u,H.f(t)+","+a)}else window.localStorage.setItem(u,a)}catch(r){H.E(r)
P.e6("Saving isn't possible....you don't have local storage")}},
dC:function dC(a){this.a=a},
dD:function dD(){},
dB:function dB(){}},A={cb:function cb(){this.a=null}},N={
fM:function(a){var u,t,s,r,q,p,o,n,m,l
u=J.a5(a)
t=new W.aY(document.querySelectorAll("link"),[W.K])
for(s=new H.af(t,t.gj(t),0),r=u.length;s.l();){q=s.d
if(!!J.o(q).$iae&&q.rel==="stylesheet"){p=$.dG()
H.f(q.href)
p.toString
q=q.href
p=q.length
o=Math.min(r,p)
for(n=0;n<o;++n){if(n>=r)return H.h(u,n)
m=u[n]
if(n>=p)return H.h(q,n)
if(m!==q[n]){l=C.a.H(u,n)
$.dG().toString
return l.split("/").length-1}continue}}}$.dG().bp(C.v,"Didn't find a css link to derive relative path")
return 0},
en:function(){var u=P.ez()
if(!$.dF().V(0,u))$.dF().v(0,u,N.fM(u))
return $.dF().m(0,u)}}
var w=[C,H,J,P,W,Q,K,F,O,A,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dO.prototype={}
J.p.prototype={
E:function(a,b){return a===b},
gp:function(a){return H.aj(a)},
h:function(a){return"Instance of '"+H.ak(a)+"'"}}
J.bP.prototype={
h:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$ib9:1}
J.bR.prototype={
E:function(a,b){return null==b},
h:function(a){return"null"},
gp:function(a){return 0},
$iu:1}
J.aK.prototype={
gp:function(a){return 0},
h:function(a){return String(a)}}
J.c9.prototype={}
J.ap.prototype={}
J.H.prototype={
h:function(a){var u=a[$.f6()]
if(u==null)return this.aR(a)
return"JavaScript function for "+H.f(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.G.prototype={
L:function(a,b){var u,t,s,r
u=a.length
t=new Array(u)
t.fixed$length=Array
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=u)return H.h(t,s)
t[s]=r}return t.join(b)},
bi:function(a,b,c){var u,t,s
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.b(P.U(a))}return t},
bj:function(a,b,c){return this.bi(a,b,c,null)},
aP:function(a,b,c){if(b<0||b>a.length)throw H.b(P.r(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.b(P.r(c,b,a.length,"end",null))
if(b===c)return H.j([],[H.e3(a,0)])
return H.j(a.slice(b,c),[H.e3(a,0)])},
gP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.fF())},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.aC(a[u],b))return!0
return!1},
h:function(a){return P.bO(a,"[","]")},
gB:function(a){return new J.bi(a,a.length,0)},
gp:function(a){return H.aj(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.R(P.t("set length"))
if(b<0)throw H.b(P.r(b,0,null,"newLength",null))
a.length=b},
m:function(a,b){if(b>=a.length||b<0)throw H.b(H.aw(a,b))
return a[b]}}
J.dN.prototype={}
J.bi.prototype={
gq:function(){return this.d},
l:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.b(H.f3(u))
s=this.c
if(s>=t){this.d=null
return!1}this.d=u[s]
this.c=s+1
return!0}}
J.ad.prototype={
bh:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.t(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.t(""+a+".round()"))},
R:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.b(P.r(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.n(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.R(P.t("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.J("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
Y:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
w:function(a,b){return(a|0)===a?a/b|0:this.b5(a,b)},
b5:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.t("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
K:function(a,b){var u
if(a>0)u=this.au(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
b4:function(a,b){if(b<0)throw H.b(H.D(b))
return this.au(a,b)},
au:function(a,b){return b>31?0:a>>>b},
$iaA:1}
J.aJ.prototype={$il:1}
J.bQ.prototype={}
J.N.prototype={
n:function(a,b){if(b<0)throw H.b(H.aw(a,b))
if(b>=a.length)H.R(H.aw(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(b>=a.length)throw H.b(H.aw(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.b(P.dK(b,null,null))
return a+b},
aO:function(a,b){var u=H.j(a.split(b),[P.i])
return u},
N:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.R(H.D(b))
c=P.Z(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
A:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.R(H.D(c))
if(typeof c!=="number")return c.t()
if(c<0||c>a.length)throw H.b(P.r(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
F:function(a,b){return this.A(a,b,0)},
i:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.R(H.D(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.t()
if(b<0)throw H.b(P.cc(b,null))
if(b>c)throw H.b(P.cc(b,null))
if(c>a.length)throw H.b(P.cc(c,null))
return a.substring(b,c)},
H:function(a,b){return this.i(a,b,null)},
bC:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.k(u,0)===133){s=J.fH(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.n(u,r)===133?J.fI(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
J:function(a,b){var u,t
if(typeof b!=="number")return H.z(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aD:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.r(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
a8:function(a,b){return this.aD(a,b,0)},
ba:function(a,b,c){if(c>a.length)throw H.b(P.r(c,0,a.length,null,null))
return H.i2(a,b,c)},
D:function(a,b){return this.ba(a,b,0)},
h:function(a){return a},
gp:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ii:1}
H.bo.prototype={
gj:function(a){return this.a.length},
m:function(a,b){return C.a.n(this.a,b)},
$aw:function(){return[P.l]}}
H.bC.prototype={}
H.af.prototype={
gq:function(){return this.d},
l:function(){var u,t,s,r
u=this.a
t=J.ax(u)
s=t.gj(u)
if(this.b!==s)throw H.b(P.U(u))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t.W(u,r);++this.c
return!0}}
H.bE.prototype={}
H.cq.prototype={
v:function(a,b,c){throw H.b(P.t("Cannot modify an unmodifiable list"))}}
H.aT.prototype={}
H.br.prototype={
h:function(a){return P.dQ(this)},
v:function(a,b,c){return H.fx()},
$iO:1}
H.bs.prototype={
gj:function(a){return this.a},
V:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
m:function(a,b){if(!this.V(0,b))return
return this.ap(b)},
ap:function(a){return this.b[a]},
O:function(a,b){var u,t,s,r
u=this.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,this.ap(r))}}}
H.cm.prototype={
C:function(a){var u,t,s
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
H.c7.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bU.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.f(this.a)+")"}}
H.cp.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dE.prototype={
$1:function(a){if(!!J.o(a).$iL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:2}
H.b3.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iB:1}
H.a9.prototype={
h:function(a){return"Closure '"+H.ak(this).trim()+"'"},
gbF:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cl.prototype={}
H.cg.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bf(u)+"'"}}
H.a6.prototype={
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.a6))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gp:function(a){var u,t
u=this.c
if(u==null)t=H.aj(this.a)
else t=typeof u!=="object"?J.aD(u):H.aj(u)
return(t^H.aj(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.ak(u)+"'")}}
H.bn.prototype={
h:function(a){return this.a}}
H.cd.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.bT.prototype={
gj:function(a){return this.a},
gaa:function(a){return new H.bW(this,[H.e3(this,0)])},
V:function(a,b){var u=this.bn(b)
return u},
bn:function(a){var u=this.d
if(u==null)return!1
return this.a9(this.a1(u,J.aD(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.a2(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.a2(r,b)
s=t==null?null:t.b
return s}else return this.bo(b)},
bo:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.a1(u,J.aD(a)&0x3ffffff)
s=this.a9(t,a)
if(s<0)return
return t[s].b},
v:function(a,b,c){var u,t,s,r,q,p
if(typeof b==="string"){u=this.b
if(u==null){u=this.a3()
this.b=u}this.ak(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.a3()
this.c=t}this.ak(t,b,c)}else{s=this.d
if(s==null){s=this.a3()
this.d=s}r=J.aD(b)&0x3ffffff
q=this.a1(s,r)
if(q==null)this.a5(s,r,[this.Z(b,c)])
else{p=this.a9(q,b)
if(p>=0)q[p].b=c
else q.push(this.Z(b,c))}}},
O:function(a,b){var u,t
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.b(P.U(this))
u=u.c}},
ak:function(a,b,c){var u=this.a2(a,b)
if(u==null)this.a5(a,b,this.Z(b,c))
else u.b=c},
b1:function(){this.r=this.r+1&67108863},
Z:function(a,b){var u,t
u=new H.bV(a,b)
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.b1()
return u},
a9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.aC(a[t].a,b))return t
return-1},
h:function(a){return P.dQ(this)},
a2:function(a,b){return a[b]},
a1:function(a,b){return a[b]},
a5:function(a,b,c){a[b]=c},
b_:function(a,b){delete a[b]},
a3:function(){var u=Object.create(null)
this.a5(u,"<non-identifier-key>",u)
this.b_(u,"<non-identifier-key>")
return u}}
H.bV.prototype={}
H.bW.prototype={
gj:function(a){return this.a.a},
gB:function(a){var u,t
u=this.a
t=new H.bX(u,u.r)
t.c=u.e
return t},
D:function(a,b){return this.a.V(0,b)}}
H.bX.prototype={
gq:function(){return this.d},
l:function(){var u=this.a
if(this.b!==u.r)throw H.b(P.U(u))
else{u=this.c
if(u==null){this.d=null
return!1}else{this.d=u.a
this.c=u.c
return!0}}}}
H.du.prototype={
$1:function(a){return this.a(a)},
$S:2}
H.dv.prototype={
$2:function(a,b){return this.a(a,b)}}
H.dw.prototype={
$1:function(a){return this.a(a)}}
H.bS.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
gb2:function(){var u=this.c
if(u!=null)return u
u=this.b
u=H.ej(this.a,u.multiline,!u.ignoreCase,!0)
this.c=u
return u},
b0:function(a,b){var u,t
u=this.gb2()
u.lastIndex=b
t=u.exec(a)
if(t==null)return
return new H.d2(t)}}
H.d2.prototype={
gbd:function(){var u=this.b
return u.index+u[0].length},
ai:function(a){var u=this.b
if(a>=u.length)return H.h(u,a)
return u[a]},
$ic4:1}
H.cz.prototype={
gq:function(){return this.d},
l:function(){var u,t,s,r
u=this.b
if(u==null)return!1
t=this.c
if(t<=u.length){s=this.a.b0(u,t)
if(s!=null){this.d=s
r=s.gbd()
this.c=s.b.index===r?r+1:r
return!0}}this.d=null
this.b=null
return!1}}
H.aO.prototype={}
H.aM.prototype={
gj:function(a){return a.length},
$iX:1,
$aX:function(){}}
H.aN.prototype={
v:function(a,b,c){H.dZ(b,a,a.length)
a[b]=c},
$aw:function(){return[P.l]}}
H.c5.prototype={
m:function(a,b){H.dZ(b,a,a.length)
return a[b]}}
H.ah.prototype={
gj:function(a){return a.length},
m:function(a,b){H.dZ(b,a,a.length)
return a[b]},
$iah:1,
$ia_:1}
H.aq.prototype={}
H.ar.prototype={}
P.cC.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:3}
P.cB.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.cD.prototype={
$0:function(){this.a.$0()}}
P.cE.prototype={
$0:function(){this.a.$0()}}
P.da.prototype={
aT:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ba(new P.db(this,b),0),a)
else throw H.b(P.t("`setTimeout()` not found."))}}
P.db.prototype={
$0:function(){this.b.$0()}}
P.bI.prototype={
$0:function(){var u,t,s
try{this.a.an(this.b.$0())}catch(s){u=H.E(s)
t=H.a4(s)
$.k.toString
this.a.S(u,t)}}}
P.aW.prototype={
ay:function(a,b){var u
if(a==null)a=new P.ai()
u=this.a
if(u.a!==0)throw H.b(P.et("Future already completed"))
$.k.toString
u.aX(a,b)},
ax:function(a){return this.ay(a,null)}}
P.cA.prototype={}
P.cL.prototype={
bq:function(a){if(this.c!==6)return!0
return this.b.b.ag(this.d,a.a)},
bk:function(a){var u,t
u=this.e
t=this.b.b
if(H.e2(u,{func:1,args:[P.m,P.B]}))return t.bw(u,a.a,a.b)
else return t.ag(u,a.a)}}
P.x.prototype={
aH:function(a,b,c){var u,t
u=$.k
if(u!==C.c){u.toString
if(b!=null)b=P.hu(b,u)}t=new P.x(0,$.k,[c])
this.am(new P.cL(t,b==null?1:3,a,b))
return t},
ah:function(a,b){return this.aH(a,null,b)},
am:function(a){var u,t
u=this.a
if(u<=1){a.a=this.c
this.c=a}else{if(u===2){u=this.c
t=u.a
if(t<4){u.am(a)
return}this.a=t
this.c=u.c}u=this.b
u.toString
P.a2(null,null,u,new P.cM(this,a))}},
at:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=this.c
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){t=this.c
p=t.a
if(p<4){t.at(a)
return}this.a=p
this.c=t.c}u.a=this.U(a)
t=this.b
t.toString
P.a2(null,null,t,new P.cU(u,this))}},
T:function(){var u=this.c
this.c=null
return this.U(u)},
U:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
an:function(a){var u,t
u=this.$ti
if(H.dq(a,"$iM",u,"$aM"))if(H.dq(a,"$ix",u,null))P.cP(a,this)
else P.eD(a,this)
else{t=this.T()
this.a=4
this.c=a
P.a0(this,t)}},
S:function(a,b){var u=this.T()
this.a=8
this.c=new P.T(a,b)
P.a0(this,u)},
aW:function(a){var u
if(H.dq(a,"$iM",this.$ti,"$aM")){this.aY(a)
return}this.a=1
u=this.b
u.toString
P.a2(null,null,u,new P.cO(this,a))},
aY:function(a){var u
if(H.dq(a,"$ix",this.$ti,null)){if(a.gbH()){this.a=1
u=this.b
u.toString
P.a2(null,null,u,new P.cT(this,a))}else P.cP(a,this)
return}P.eD(a,this)},
aX:function(a,b){var u
this.a=1
u=this.b
u.toString
P.a2(null,null,u,new P.cN(this,a,b))},
$iM:1}
P.cM.prototype={
$0:function(){P.a0(this.a,this.b)}}
P.cU.prototype={
$0:function(){P.a0(this.b,this.a.a)}}
P.cQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.an(a)},
$S:3}
P.cR.prototype={
$2:function(a,b){this.a.S(a,b)},
$1:function(a){return this.$2(a,null)},
$S:5}
P.cS.prototype={
$0:function(){this.a.S(this.b,this.c)}}
P.cO.prototype={
$0:function(){var u,t
u=this.a
t=u.T()
u.a=4
u.c=this.b
P.a0(u,t)}}
P.cT.prototype={
$0:function(){P.cP(this.b,this.a)}}
P.cN.prototype={
$0:function(){this.a.S(this.b,this.c)}}
P.cX.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.aG(r.d)}catch(q){t=H.E(q)
s=H.a4(q)
if(this.d){r=this.a.a.c.a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=this.a.a.c
else p.b=new P.T(t,s)
p.a=!0
return}if(!!J.o(u).$iM){if(u instanceof P.x&&u.a>=4){if(u.a===8){r=this.b
r.b=u.c
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.ah(new P.cY(o),null)
r.a=!1}}}
P.cY.prototype={
$1:function(a){return this.a},
$S:6}
P.cW.prototype={
$0:function(){var u,t,s,r
try{s=this.b
this.a.b=s.b.b.ag(s.d,this.c)}catch(r){u=H.E(r)
t=H.a4(r)
s=this.a
s.b=new P.T(u,t)
s.a=!0}}}
P.cV.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=this.a.a.c
r=this.c
if(r.bq(u)&&r.e!=null){q=this.b
q.b=r.bk(u)
q.a=!1}}catch(p){t=H.E(p)
s=H.a4(p)
r=this.a.a.c
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.T(t,s)
n.a=!0}}}
P.aV.prototype={}
P.cj.prototype={}
P.ck.prototype={}
P.T.prototype={
h:function(a){return H.f(this.a)},
$iL:1}
P.di.prototype={}
P.dp.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.ai()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.b(u)
s=H.b(u)
s.stack=t.h(0)
throw s}}
P.d4.prototype={
by:function(a){var u,t,s
try{if(C.c===$.k){a.$0()
return}P.eO(null,null,this,a)}catch(s){u=H.E(s)
t=H.a4(s)
P.dn(null,null,this,u,t)}},
bA:function(a,b){var u,t,s
try{if(C.c===$.k){a.$1(b)
return}P.eP(null,null,this,a,b)}catch(s){u=H.E(s)
t=H.a4(s)
P.dn(null,null,this,u,t)}},
bB:function(a,b){return this.bA(a,b,null)},
b7:function(a){return new P.d6(this,a)},
b6:function(a){return this.b7(a,null)},
a6:function(a){return new P.d5(this,a)},
b8:function(a,b){return new P.d7(this,a,b)},
bv:function(a){if($.k===C.c)return a.$0()
return P.eO(null,null,this,a)},
aG:function(a){return this.bv(a,null)},
bz:function(a,b){if($.k===C.c)return a.$1(b)
return P.eP(null,null,this,a,b)},
ag:function(a,b){return this.bz(a,b,null,null)},
bx:function(a,b,c){if($.k===C.c)return a.$2(b,c)
return P.hv(null,null,this,a,b,c)},
bw:function(a,b,c){return this.bx(a,b,c,null,null,null)}}
P.d6.prototype={
$0:function(){return this.a.aG(this.b)}}
P.d5.prototype={
$0:function(){return this.a.by(this.b)}}
P.d7.prototype={
$1:function(a){return this.a.bB(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.d_.prototype={
gB:function(a){return P.dX(this,this.r)},
gj:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.aZ(b)
return t}},
aZ:function(a){var u=this.d
if(u==null)return!1
return this.aq(u[this.ao(a)],a)>=0},
I:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.dY()
this.b=u}return this.al(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.dY()
this.c=t}return this.al(t,b)}else return this.aU(b)},
aU:function(a){var u,t,s
u=this.d
if(u==null){u=P.dY()
this.d=u}t=this.ao(a)
s=u[t]
if(s==null)u[t]=[this.a4(a)]
else{if(this.aq(s,a)>=0)return!1
s.push(this.a4(a))}return!0},
al:function(a,b){if(a[b]!=null)return!1
a[b]=this.a4(b)
return!0},
a4:function(a){var u=new P.d0(a)
if(this.e==null){this.f=u
this.e=u}else{this.f.b=u
this.f=u}++this.a
this.r=1073741823&this.r+1
return u},
ao:function(a){return J.aD(a)&1073741823},
aq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.aC(a[t].a,b))return t
return-1}}
P.d0.prototype={}
P.d1.prototype={
gq:function(){return this.d},
l:function(){var u=this.a
if(this.b!==u.r)throw H.b(P.U(u))
else{u=this.c
if(u==null){this.d=null
return!1}else{this.d=u.a
this.c=u.b
return!0}}}}
P.bZ.prototype={}
P.w.prototype={
gB:function(a){return new H.af(a,this.gj(a),0)},
W:function(a,b){return this.m(a,b)},
D:function(a,b){var u,t
u=this.gj(a)
for(t=0;t<u;++t){this.m(a,t)
if(u!==this.gj(a))throw H.b(P.U(a))}return!1},
bg:function(a,b,c,d){var u
P.Z(b,c,this.gj(a))
for(u=b;u<c;++u)this.v(a,u,d)},
h:function(a){return P.bO(a,"[","]")}}
P.c1.prototype={}
P.c2.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.f(a)
u.a=t+": "
u.a+=H.f(b)},
$S:7}
P.aL.prototype={
O:function(a,b){var u,t
for(u=J.dI(this.gaa(a));u.l();){t=u.gq()
b.$2(t,this.m(a,t))}},
gj:function(a){return J.I(this.gaa(a))},
h:function(a){return P.dQ(a)},
$iO:1}
P.dd.prototype={
v:function(a,b,c){throw H.b(P.t("Cannot modify unmodifiable map"))}}
P.c3.prototype={
m:function(a,b){return J.ea(this.a,b)},
v:function(a,b,c){J.dH(this.a,b,c)},
gj:function(a){return J.I(this.a)},
h:function(a){return J.a5(this.a)},
$iO:1}
P.aU.prototype={}
P.aQ.prototype={
h:function(a){return P.bO(this,"{","}")}}
P.cf.prototype={$ian:1}
P.d8.prototype={
h:function(a){return P.bO(this,"{","}")},
L:function(a,b){var u,t
u=P.dX(this,this.r)
if(!u.l())return""
if(b===""){t=""
do t+=H.f(u.d)
while(u.l())}else{t=H.f(u.d)
for(;u.l();)t=t+b+H.f(u.d)}return t.charCodeAt(0)==0?t:t},
$ian:1}
P.aZ.prototype={}
P.b2.prototype={}
P.b5.prototype={}
P.bk.prototype={
bt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.Z(b,c,a.length)
u=$.fi()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.a.k(a,t)
if(m===37){l=n+2
if(l<=c){k=H.dt(C.a.k(a,n))
j=H.dt(C.a.k(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.a.n("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.v("")
g=r.a+=C.a.i(a,s,t)
r.a=g+H.ca(m)
s=n
continue}}throw H.b(P.n("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.a.i(a,s,c)
f=g.length
if(q>=0)P.ed(a,p,c,q,o,f)
else{e=C.b.Y(f-1,4)+1
if(e===1)throw H.b(P.n("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.N(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.ed(a,p,c,q,o,d)
else{e=C.b.Y(d,4)
if(e===1)throw H.b(P.n("Invalid base64 encoding length ",a,c))
if(e>1)a=C.a.N(a,c,c,e===2?"==":"=")}return a}}
P.bl.prototype={}
P.bp.prototype={}
P.bt.prototype={}
P.bD.prototype={}
P.cx.prototype={}
P.cy.prototype={
bb:function(a){var u,t,s,r,q
u=P.h0(!1,a,0,null)
if(u!=null)return u
t=P.Z(0,null,J.I(a))
s=new P.v("")
r=new P.dg(!1,s)
r.bc(a,0,t)
if(r.e>0){H.R(P.n("Unfinished UTF-8 octet sequence",a,t))
s.a+=H.ca(65533)
r.d=0
r.e=0
r.f=0}q=s.a
return q.charCodeAt(0)==0?q:q}}
P.dg.prototype={
bc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.dh(this,b,c,a)
$label0$0:for(q=J.ax(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.m(a,o)
if(typeof n!=="number")return n.aL()
if((n&192)!==128){m=P.n("Bad UTF-8 encoding 0x"+C.b.R(n,16),a,o)
throw H.b(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.q,m)
if(u<=C.q[m]){m=P.n("Overlong encoding of 0x"+C.b.R(u,16),a,o-s-1)
throw H.b(m)}if(u>1114111){m=P.n("Character outside valid Unicode range: 0x"+C.b.R(u,16),a,o-s-1)
throw H.b(m)}if(!this.c||u!==65279)p.a+=H.ca(u)
this.c=!1}for(m=o<c;m;){l=P.hw(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.m(a,k)
if(typeof n!=="number")return n.t()
if(n<0){i=P.n("Negative UTF-8 code unit: -0x"+C.b.R(-n,16),a,j-1)
throw H.b(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.n("Bad UTF-8 encoding 0x"+C.b.R(n,16),a,j-1)
throw H.b(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.dh.prototype={
$2:function(a,b){this.a.b.a+=P.ev(this.d,a,b)}}
P.b9.prototype={}
P.aF.prototype={
E:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a&&!0},
gp:function(a){var u=this.a
return(u^C.b.K(u,30))&1073741823},
h:function(a){var u,t,s,r,q,p,o,n
u=P.fy(H.ep(this))
t=P.aG(H.dT(this))
s=P.aG(H.dS(this))
r=P.aG(H.fP(this))
q=P.aG(H.fR(this))
p=P.aG(H.fS(this))
o=P.fz(H.fQ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.ds.prototype={}
P.ab.prototype={
E:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a},
gp:function(a){return C.b.gp(this.a)},
h:function(a){var u,t,s,r,q
u=new P.bB()
t=this.a
if(t<0)return"-"+new P.ab(0-t).h(0)
s=u.$1(C.b.w(t,6e7)%60)
r=u.$1(C.b.w(t,1e6)%60)
q=new P.bA().$1(t%1e6)
return""+C.b.w(t,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.bA.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.bB.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.L.prototype={}
P.ai.prototype={
h:function(a){return"Throw of null."}}
P.F.prototype={
ga0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga_:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.ga0()+t+s
if(!this.a)return r
q=this.ga_()
p=P.dM(this.b)
return r+q+": "+p}}
P.am.prototype={
ga0:function(){return"RangeError"},
ga_:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.f(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(u)
else if(s>u)t=": Not in range "+H.f(u)+".."+H.f(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.f(u)}return t}}
P.bL.prototype={
ga0:function(){return"RangeError"},
ga_:function(){var u,t
u=this.b
if(typeof u!=="number")return u.t()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.cr.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.co.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aS.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bq.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dM(u)+"."}}
P.c8.prototype={
h:function(a){return"Out of Memory"},
$iL:1}
P.aR.prototype={
h:function(a){return"Stack Overflow"},
$iL:1}
P.bx.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cK.prototype={
h:function(a){return"Exception: "+this.a}}
P.bH.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.a.i(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.a.k(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.a.n(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.a.i(r,i,j)
return t+h+f+g+"\n"+C.a.J(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.f(s)+")"):t}}
P.l.prototype={}
P.bN.prototype={
D:function(a,b){var u
for(u=this.gB(this);u.l();)if(J.aC(u.gq(),b))return!0
return!1},
gj:function(a){var u,t
u=this.gB(this)
for(t=0;u.l();)++t
return t},
W:function(a,b){var u,t,s
P.fW(b,"index")
for(u=this.gB(this),t=0;u.l();){s=u.gq()
if(b===t)return s;++t}throw H.b(P.bM(b,this,"index",null,t))},
h:function(a){return P.fE(this,"(",")")}}
P.bY.prototype={}
P.O.prototype={}
P.u.prototype={
gp:function(a){return P.m.prototype.gp.call(this,this)},
h:function(a){return"null"}}
P.aA.prototype={}
P.m.prototype={constructor:P.m,$im:1,
E:function(a,b){return this===b},
gp:function(a){return H.aj(this)},
h:function(a){return"Instance of '"+H.ak(this)+"'"},
toString:function(){return this.h(this)}}
P.c4.prototype={}
P.an.prototype={}
P.B.prototype={}
P.i.prototype={}
P.v.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.P.prototype={}
P.cw.prototype={
$2:function(a,b){var u,t,s,r
u=J.ay(b).a8(b,"=")
if(u===-1){if(b!=="")J.dH(a,P.df(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.a.i(b,0,u)
s=C.a.H(b,u+1)
r=this.a
J.dH(a,P.df(t,0,t.length,r,!0),P.df(s,0,s.length,r,!0))}return a}}
P.ct.prototype={
$2:function(a,b){throw H.b(P.n("Illegal IPv4 address, "+a,this.a,b))}}
P.cu.prototype={
$2:function(a,b){throw H.b(P.n("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.cv.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.az(C.a.i(this.b,a,b),null,16)
if(typeof u!=="number")return u.t()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.b6.prototype={
gaJ:function(){return this.b},
ga7:function(a){var u=this.c
if(u==null)return""
if(C.a.F(u,"["))return C.a.i(u,1,u.length-1)
return u},
gac:function(a){var u=this.d
if(u==null)return P.eE(this.a)
return u},
gad:function(){var u=this.f
return u==null?"":u},
gaz:function(){var u=this.r
return u==null?"":u},
gae:function(){var u,t
u=this.Q
if(u==null){u=this.f
t=P.i
t=new P.aU(P.eC(u==null?"":u),[t,t])
this.Q=t
u=t}return u},
gaA:function(){return this.c!=null},
gaC:function(){return this.f!=null},
gaB:function(){return this.r!=null},
h:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?u+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.f(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.f(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
E:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.o(b).$iP)if(this.a===b.gaj())if(this.c!=null===b.gaA())if(this.b==b.gaJ())if(this.ga7(this)==b.ga7(b))if(this.gac(this)==b.gac(b))if(this.e===b.gaF(b)){u=this.f
t=u==null
if(!t===b.gaC()){if(t)u=""
if(u===b.gad()){u=this.r
t=u==null
if(!t===b.gaB()){if(t)u=""
u=u===b.gaz()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gp:function(a){var u=this.z
if(u==null){u=C.a.gp(this.h(0))
this.z=u}return u},
$iP:1,
gaj:function(){return this.a},
gaF:function(a){return this.e}}
P.de.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.u()
throw H.b(P.n("Invalid port",this.a,u+1))}}
P.cs.prototype={
gaI:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.a.aD(t,"?",u)
r=t.length
if(s>=0){q=P.at(t,s+1,r,C.j,!1)
r=s}else q=null
u=new P.cF("data",null,null,null,P.at(t,u,r,C.u,!1),q,null)
this.c=u
return u},
h:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.dk.prototype={
$1:function(a){return new Uint8Array(96)}}
P.dj.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.fn(u,0,96,b)
return u},
$S:8}
P.dl.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.a.k(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.dm.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.a.k(b,0),t=C.a.k(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.d9.prototype={
gaA:function(){return this.c>0},
gaC:function(){var u=this.f
if(typeof u!=="number")return u.t()
return u<this.r},
gaB:function(){return this.r<this.a.length},
gar:function(){return this.b===4&&C.a.F(this.a,"http")},
gas:function(){return this.b===5&&C.a.F(this.a,"https")},
gaj:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gar()){this.x="http"
u="http"}else if(this.gas()){this.x="https"
u="https"}else if(u===4&&C.a.F(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.a.F(this.a,"package")){this.x="package"
u="package"}else{u=C.a.i(this.a,0,u)
this.x=u}return u},
gaJ:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.a.i(this.a,t,u-1):""},
ga7:function(a){var u=this.c
return u>0?C.a.i(this.a,u,this.d):""},
gac:function(a){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.u()
t=this.e
if(typeof t!=="number")return H.z(t)
t=u+1<t
u=t}else u=!1
if(u){u=this.d
if(typeof u!=="number")return u.u()
return P.az(C.a.i(this.a,u+1,this.e),null,null)}if(this.gar())return 80
if(this.gas())return 443
return 0},
gaF:function(a){return C.a.i(this.a,this.e,this.f)},
gad:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.t()
return u<t?C.a.i(this.a,u+1,t):""},
gaz:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.a.H(t,u+1):""},
gae:function(){var u=this.f
if(typeof u!=="number")return u.t()
if(u>=this.r)return C.O
u=P.i
return new P.aU(P.eC(this.gad()),[u,u])},
gp:function(a){var u=this.y
if(u==null){u=C.a.gp(this.a)
this.y=u}return u},
E:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.o(b).$iP&&this.a===b.h(0)},
h:function(a){return this.a},
$iP:1}
P.cF.prototype={}
W.e.prototype={}
W.S.prototype={
h:function(a){return String(a)},
$iS:1}
W.bh.prototype={
h:function(a){return String(a)}}
W.a8.prototype={$ia8:1}
W.J.prototype={
gj:function(a){return a.length}}
W.aa.prototype={
gj:function(a){return a.length}}
W.bw.prototype={}
W.by.prototype={
h:function(a){return String(a)}}
W.bz.prototype={
gj:function(a){return a.length}}
W.aY.prototype={
gj:function(a){return this.a.length},
m:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
v:function(a,b,c){throw H.b(P.t("Cannot modify list"))}}
W.K.prototype={
gaw:function(a){return new W.cG(a)},
h:function(a){return a.localName},
aE:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$iK:1}
W.c.prototype={$ic:1}
W.V.prototype={
aV:function(a,b,c,d){return a.addEventListener(b,H.ba(c,1),!1)}}
W.bG.prototype={
gj:function(a){return a.length}}
W.W.prototype={
bu:function(a,b,c,d){return a.open(b,c,!0)},
$iW:1}
W.bJ.prototype={
$1:function(a){return a.responseText}}
W.bK.prototype={
$1:function(a){var u,t,s,r,q
u=this.a
t=u.status
if(typeof t!=="number")return t.aM()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t){t=q.a
if(t.a!==0)H.R(P.et("Future already completed"))
t.aW(u)}else q.ax(a)}}
W.aH.prototype={}
W.ac.prototype={$iac:1}
W.ae.prototype={$iae:1}
W.c_.prototype={
h:function(a){return String(a)}}
W.q.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.aQ(a):u}}
W.aP.prototype={
gj:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.bM(b,a,null,null,null))
return a[b]},
v:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
W:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iX:1,
$aX:function(){return[W.q]},
$aw:function(){return[W.q]}}
W.al.prototype={$ial:1}
W.ce.prototype={
gj:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.ch.prototype={
m:function(a,b){return a.getItem(b)},
v:function(a,b,c){a.setItem(b,c)},
O:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.j([],[P.i])
this.O(a,new W.ci(u))
return u},
gj:function(a){return a.length},
$iO:1,
$aO:function(){return[P.i,P.i]}}
W.ci.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b_.prototype={
gj:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.bM(b,a,null,null,null))
return a[b]},
v:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
W:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iX:1,
$aX:function(){return[W.q]},
$aw:function(){return[W.q]}}
W.cG.prototype={
M:function(){var u,t,s,r,q
u=P.el(P.i)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.ec(t[r])
if(q.length!==0)u.I(0,q)}return u},
aK:function(a){this.a.className=a.L(0," ")},
gj:function(a){return this.a.classList.length},
D:function(a,b){var u=this.a.classList.contains(b)
return u},
I:function(a,b){var u,t
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t}}
W.cH.prototype={}
W.cJ.prototype={
$1:function(a){return this.a.$1(a)}}
W.aI.prototype={
gB:function(a){return new W.bF(a,this.gj(a),-1)}}
W.bF.prototype={
l:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.d=J.ea(this.a,u)
this.c=u
return!0}this.d=null
this.c=t
return!1},
gq:function(){return this.d}}
W.aE.prototype={
bf:function(a,b){return typeof console!="undefined"?window.console.error(b):null},
bm:function(a){return typeof console!="undefined"?window.console.info(a):null},
bE:function(a){return typeof console!="undefined"?window.console.warn(a):null}}
W.dc.prototype={}
W.aX.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.b4.prototype={}
W.b7.prototype={}
W.b8.prototype={}
P.bu.prototype={
av:function(a){var u=$.f5().b
if(u.test(a))return a
throw H.b(P.dK(a,"value","Not a valid class token"))},
h:function(a){return this.M().L(0," ")},
gB:function(a){var u=this.M()
return P.dX(u,u.r)},
gj:function(a){return this.M().a},
D:function(a,b){this.av(b)
return this.M().D(0,b)},
I:function(a,b){this.av(b)
return this.br(new P.bv(b))},
br:function(a){var u,t
u=this.M()
t=a.$1(u)
this.aK(u)
return t},
$aaQ:function(){return[P.i]},
$aan:function(){return[P.i]}}
P.bv.prototype={
$1:function(a){return a.I(0,this.a)}}
P.cZ.prototype={
X:function(a){if(a<=0||a>4294967296)throw H.b(P.er("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
ab:function(){return Math.random()}}
P.d3.prototype={
aS:function(a){var u,t,s,r,q,p,o,n
u=a<0?-1:0
do{t=(a&4294967295)>>>0
a=C.b.w(a-t,4294967296)
s=(a&4294967295)>>>0
a=C.b.w(a-s,4294967296)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.w(r-q,4294967296)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.w(r-t,4294967296)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.w(r-t,4294967296)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.w(r-q,4294967296)
r=this.a*1037
o=(r&4294967295)>>>0
this.a=o
n=(this.b*1037+C.b.w(r-o,4294967296)&4294967295)>>>0
this.b=n
o=(o^q)>>>0
this.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
this.b=p}while(a!==u)
if(p===0&&o===0)this.a=23063
this.G()
this.G()
this.G()
this.G()},
G:function(){var u,t,s,r,q,p
u=this.a
t=4294901760*u
s=(t&4294967295)>>>0
r=55905*u
q=(r&4294967295)>>>0
p=q+s+this.b
u=(p&4294967295)>>>0
this.a=u
this.b=(C.b.w(r-q+(t-s)+(p-u),4294967296)&4294967295)>>>0},
X:function(a){var u,t,s
if(a<=0||a>4294967296)throw H.b(P.er("max must be in range 0 < max \u2264 2^32, was "+a))
u=a-1
if((a&u)>>>0===0){this.G()
return(this.a&u)>>>0}do{this.G()
t=this.a
s=t%a}while(t-s+a>=4294967296)
return s},
ab:function(){this.G()
var u=this.a
this.G()
return((u&67108863)*134217728+(this.a&134217727))/9007199254740992}}
P.bj.prototype={
M:function(){var u,t,s,r,q,p
u=this.a.getAttribute("class")
t=P.el(P.i)
if(u==null)return t
for(s=u.split(" "),r=s.length,q=0;q<r;++q){p=J.ec(s[q])
if(p.length!==0)t.I(0,p)}return t},
aK:function(a){this.a.setAttribute("class",a.L(0," "))}}
P.d.prototype={
gaw:function(a){return new P.bj(a)},
aE:function(a,b,c,d,e){throw H.b(P.t("Cannot invoke insertAdjacentHtml on SVG."))}}
P.a_.prototype={}
Q.dz.prototype={
$1:function(a){var u,t,s,r,q
u=window
t="scrollY" in u?C.h.af(u.scrollY):C.h.af(u.document.documentElement.scrollTop)
s=window.screen.height
if(typeof s!=="number")return H.z(s)
r=1500-s
if(r>t){u=document.querySelector("body").style
q="center -"+C.b.h(t)+"px"
u.backgroundPosition=q}else{u=document.querySelector("body").style
q="center -"+C.b.h(r)+"px"
u.backgroundPosition=q}}}
K.c6.prototype={}
F.ag.prototype={
h:function(a){return this.b}}
F.c0.prototype={
bp:function(a,b){F.fK(a).$1("("+this.c+")["+H.f(C.d.gP(a.b.split(".")))+"]: "+b)}}
O.dC.prototype={
$1:function(a){return H.f(a.ai(1))+" = "+H.f(a.ai(2))+C.a.J("../",this.a)}}
O.dD.prototype={
$0:function(){var u=document
J.bg(u.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.f,null)
u=H.dx(u.querySelector("#voidButton"),"$ia8")
u.toString
W.cI(u,"click",new O.dB(),!1)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.i1("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")}}
O.dB.prototype={
$1:function(a){return O.i6()}}
A.cb.prototype={
X:function(a){if(a===0)return 0
return this.b3(a)},
bs:function(){return this.X(4294967295)},
b3:function(a){var u,t
u=this.a
if(a>4294967295){t=u.ab()
C.h.af(t*4294967295)
return C.h.bh(t*a)}else return u.X(a)}};(function aliases(){var u=J.p.prototype
u.aQ=u.h
u=J.aK.prototype
u.aR=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_1i,q=hunkHelpers._instance_1u
u(H,"eN","hz",9)
u(P,"hC","h6",1)
u(P,"hD","h7",1)
u(P,"hE","h8",1)
t(P,"eU","hy",10)
s(P.aW.prototype,"gb9",0,1,null,["$2","$1"],["ay","ax"],4,0)
u(P,"hF","e6",0)
var p
r(p=W.aE.prototype,"gbe","bf",0)
q(p,"gbl","bm",0)
q(p,"gbD","bE",0)
u(O,"hT","hU",11)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.m,null)
s(P.m,[H.dO,J.p,J.bi,P.aZ,P.bN,H.af,H.bE,H.cq,H.br,H.cm,P.L,H.a9,H.b3,P.aL,H.bV,H.bX,H.bS,H.d2,H.cz,P.da,P.aW,P.cL,P.x,P.aV,P.cj,P.ck,P.T,P.di,P.d8,P.d0,P.d1,P.w,P.dd,P.c3,P.aQ,P.b2,P.bp,P.dg,P.b9,P.aF,P.aA,P.ab,P.c8,P.aR,P.cK,P.bH,P.bY,P.O,P.u,P.c4,P.B,P.i,P.v,P.P,P.b6,P.cs,P.d9,W.bw,W.aI,W.bF,W.aE,W.dc,P.cZ,P.d3,P.a_,K.c6,F.ag,F.c0,A.cb])
s(J.p,[J.bP,J.bR,J.aK,J.G,J.ad,J.N,H.aO,W.V,W.aX,W.by,W.bz,W.c,W.c_,W.b0,W.b4,W.b7])
s(J.aK,[J.c9,J.ap,J.H])
t(J.dN,J.G)
s(J.ad,[J.aJ,J.bQ])
t(P.bZ,P.aZ)
s(P.bZ,[H.aT,W.aY])
t(H.bo,H.aT)
t(H.bC,P.bN)
t(H.bs,H.br)
s(P.L,[H.c7,H.bU,H.cp,H.bn,H.cd,P.ai,P.F,P.cr,P.co,P.aS,P.bq,P.bx])
s(H.a9,[H.dE,H.cl,H.du,H.dv,H.dw,P.cC,P.cB,P.cD,P.cE,P.db,P.bI,P.cM,P.cU,P.cQ,P.cR,P.cS,P.cO,P.cT,P.cN,P.cX,P.cY,P.cW,P.cV,P.dp,P.d6,P.d5,P.d7,P.c2,P.dh,P.bA,P.bB,P.cw,P.ct,P.cu,P.cv,P.de,P.dk,P.dj,P.dl,P.dm,W.bJ,W.bK,W.ci,W.cJ,P.bv,Q.dz,O.dC,O.dD,O.dB])
s(H.cl,[H.cg,H.a6])
t(P.c1,P.aL)
t(H.bT,P.c1)
s(H.bC,[H.bW,P.an])
t(H.aM,H.aO)
t(H.aq,H.aM)
t(H.ar,H.aq)
t(H.aN,H.ar)
s(H.aN,[H.c5,H.ah])
t(P.cA,P.aW)
t(P.d4,P.di)
t(P.d_,P.d8)
t(P.b5,P.c3)
t(P.aU,P.b5)
t(P.cf,P.b2)
s(P.bp,[P.bk,P.bD])
t(P.bt,P.ck)
s(P.bt,[P.bl,P.cy])
t(P.cx,P.bD)
s(P.aA,[P.ds,P.l])
s(P.F,[P.am,P.bL])
t(P.cF,P.b6)
s(W.V,[W.q,W.aH])
s(W.q,[W.K,W.J])
s(W.K,[W.e,P.d])
s(W.e,[W.S,W.bh,W.a8,W.bG,W.ac,W.ae,W.ce,W.ao])
t(W.aa,W.aX)
t(W.W,W.aH)
t(W.b1,W.b0)
t(W.aP,W.b1)
t(W.al,W.c)
t(W.ch,W.b4)
t(W.b8,W.b7)
t(W.b_,W.b8)
t(P.bu,P.cf)
s(P.bu,[W.cG,P.bj])
t(W.cH,P.cj)
u(H.aT,H.cq)
u(H.aq,P.w)
u(H.ar,H.bE)
u(P.aZ,P.w)
u(P.b2,P.aQ)
u(P.b5,P.dd)
u(W.aX,W.bw)
u(W.b0,P.w)
u(W.b1,W.aI)
u(W.b4,P.aL)
u(W.b7,P.w)
u(W.b8,W.aI)})();(function constants(){var u=hunkHelpers.makeConstList
C.H=W.W.prototype
C.I=J.p.prototype
C.d=J.G.prototype
C.b=J.aJ.prototype
C.h=J.ad.prototype
C.a=J.N.prototype
C.J=J.H.prototype
C.w=J.c9.prototype
C.l=J.ap.prototype
C.y=new P.bl(!1)
C.x=new P.bk(C.y)
C.e=new W.aE()
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.F=new P.c8()
C.G=new P.cZ()
C.c=new P.d4()
C.f=new W.dc()
C.p=new P.ab(0)
C.q=H.j(u([127,2047,65535,1114111]),[P.l])
C.i=H.j(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.j=H.j(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.k=H.j(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.L=H.j(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.r=H.j(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.t=H.j(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.u=H.j(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.M=new F.ag("LogLevel.ERROR")
C.v=new F.ag("LogLevel.WARN")
C.N=new F.ag("LogLevel.VERBOSE")
C.K=H.j(u([]),[P.i])
C.O=new H.bs(0,{},C.K,[P.i,P.i])
C.m=new P.cx(!1)})();(function staticFields(){$.A=0
$.a7=null
$.ee=null
$.eY=null
$.eS=null
$.f1=null
$.dr=null
$.dy=null
$.e4=null
$.a1=null
$.au=null
$.av=null
$.e_=!1
$.k=C.c
$.hG=!1
$.dU=!1
$.dR=!1
$.f2=""})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"i8","f6",function(){return H.eX("_$dart_dartClosure")})
u($,"ia","e7",function(){return H.eX("_$dart_js")})
u($,"id","f7",function(){return H.C(H.cn({
toString:function(){return"$receiver$"}}))})
u($,"ie","f8",function(){return H.C(H.cn({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ig","f9",function(){return H.C(H.cn(null))})
u($,"ih","fa",function(){return H.C(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ik","fd",function(){return H.C(H.cn(void 0))})
u($,"il","fe",function(){return H.C(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ij","fc",function(){return H.C(H.ew(null))})
u($,"ii","fb",function(){return H.C(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"io","fg",function(){return H.C(H.ew(void 0))})
u($,"im","ff",function(){return H.C(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"iq","e8",function(){return P.h5()})
u($,"it","aB",function(){return[]})
u($,"ip","fh",function(){return P.h2()})
u($,"ir","fi",function(){return H.fL(H.hq(H.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"is","fj",function(){return P.hp()})
u($,"i7","f5",function(){return P.es("^\\S+$")})
u($,"ic","dG",function(){return new F.c0(!1,"Path Utils")})
u($,"ib","dF",function(){return P.ek(P.P,P.l)})})()
var v={mangledGlobalNames:{l:"int",ds:"double",aA:"num",i:"String",b9:"bool",u:"Null",bY:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.u,args:[,]},{func:1,ret:-1,args:[P.m],opt:[P.B]},{func:1,ret:P.u,args:[,],opt:[P.B]},{func:1,ret:[P.x,,],args:[,]},{func:1,ret:P.u,args:[,,]},{func:1,ret:P.a_,args:[,,]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1},{func:1,ret:-1,args:[P.i]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.p,DOMImplementation:J.p,MediaError:J.p,Navigator:J.p,NavigatorConcurrentHardware:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,Range:J.p,Screen:J.p,SQLError:J.p,ArrayBufferView:H.aO,Int8Array:H.c5,Uint8Array:H.ah,HTMLAudioElement:W.e,HTMLBRElement:W.e,HTMLBaseElement:W.e,HTMLBodyElement:W.e,HTMLCanvasElement:W.e,HTMLContentElement:W.e,HTMLDListElement:W.e,HTMLDataElement:W.e,HTMLDataListElement:W.e,HTMLDetailsElement:W.e,HTMLDialogElement:W.e,HTMLDivElement:W.e,HTMLEmbedElement:W.e,HTMLFieldSetElement:W.e,HTMLHRElement:W.e,HTMLHeadElement:W.e,HTMLHeadingElement:W.e,HTMLHtmlElement:W.e,HTMLIFrameElement:W.e,HTMLInputElement:W.e,HTMLLIElement:W.e,HTMLLabelElement:W.e,HTMLLegendElement:W.e,HTMLMapElement:W.e,HTMLMediaElement:W.e,HTMLMenuElement:W.e,HTMLMetaElement:W.e,HTMLMeterElement:W.e,HTMLModElement:W.e,HTMLOListElement:W.e,HTMLObjectElement:W.e,HTMLOptGroupElement:W.e,HTMLOptionElement:W.e,HTMLOutputElement:W.e,HTMLParagraphElement:W.e,HTMLParamElement:W.e,HTMLPictureElement:W.e,HTMLPreElement:W.e,HTMLProgressElement:W.e,HTMLQuoteElement:W.e,HTMLScriptElement:W.e,HTMLShadowElement:W.e,HTMLSlotElement:W.e,HTMLSourceElement:W.e,HTMLStyleElement:W.e,HTMLTableCaptionElement:W.e,HTMLTableCellElement:W.e,HTMLTableDataCellElement:W.e,HTMLTableHeaderCellElement:W.e,HTMLTableColElement:W.e,HTMLTableElement:W.e,HTMLTableRowElement:W.e,HTMLTableSectionElement:W.e,HTMLTemplateElement:W.e,HTMLTextAreaElement:W.e,HTMLTimeElement:W.e,HTMLTitleElement:W.e,HTMLTrackElement:W.e,HTMLUListElement:W.e,HTMLUnknownElement:W.e,HTMLVideoElement:W.e,HTMLDirectoryElement:W.e,HTMLFontElement:W.e,HTMLFrameElement:W.e,HTMLFrameSetElement:W.e,HTMLMarqueeElement:W.e,HTMLElement:W.e,HTMLAnchorElement:W.S,HTMLAreaElement:W.bh,HTMLButtonElement:W.a8,CDATASection:W.J,CharacterData:W.J,Comment:W.J,ProcessingInstruction:W.J,Text:W.J,CSSStyleDeclaration:W.aa,MSStyleCSSProperties:W.aa,CSS2Properties:W.aa,DOMException:W.by,DOMTokenList:W.bz,Element:W.K,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CompositionEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FocusEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,KeyboardEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MouseEvent:W.c,DragEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PointerEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TextEvent:W.c,TouchEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,UIEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,WheelEvent:W.c,MojoInterfaceRequestEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,Window:W.V,DOMWindow:W.V,EventTarget:W.V,HTMLFormElement:W.bG,XMLHttpRequest:W.W,XMLHttpRequestEventTarget:W.aH,HTMLImageElement:W.ac,HTMLLinkElement:W.ae,Location:W.c_,Document:W.q,DocumentFragment:W.q,HTMLDocument:W.q,ShadowRoot:W.q,XMLDocument:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeList:W.aP,RadioNodeList:W.aP,ProgressEvent:W.al,ResourceProgressEvent:W.al,HTMLSelectElement:W.ce,HTMLSpanElement:W.ao,Storage:W.ch,NamedNodeMap:W.b_,MozNamedAttrMap:W.b_,SVGAElement:P.d,SVGAnimateElement:P.d,SVGAnimateMotionElement:P.d,SVGAnimateTransformElement:P.d,SVGAnimationElement:P.d,SVGCircleElement:P.d,SVGClipPathElement:P.d,SVGDefsElement:P.d,SVGDescElement:P.d,SVGDiscardElement:P.d,SVGEllipseElement:P.d,SVGFEBlendElement:P.d,SVGFEColorMatrixElement:P.d,SVGFEComponentTransferElement:P.d,SVGFECompositeElement:P.d,SVGFEConvolveMatrixElement:P.d,SVGFEDiffuseLightingElement:P.d,SVGFEDisplacementMapElement:P.d,SVGFEDistantLightElement:P.d,SVGFEFloodElement:P.d,SVGFEFuncAElement:P.d,SVGFEFuncBElement:P.d,SVGFEFuncGElement:P.d,SVGFEFuncRElement:P.d,SVGFEGaussianBlurElement:P.d,SVGFEImageElement:P.d,SVGFEMergeElement:P.d,SVGFEMergeNodeElement:P.d,SVGFEMorphologyElement:P.d,SVGFEOffsetElement:P.d,SVGFEPointLightElement:P.d,SVGFESpecularLightingElement:P.d,SVGFESpotLightElement:P.d,SVGFETileElement:P.d,SVGFETurbulenceElement:P.d,SVGFilterElement:P.d,SVGForeignObjectElement:P.d,SVGGElement:P.d,SVGGeometryElement:P.d,SVGGraphicsElement:P.d,SVGImageElement:P.d,SVGLineElement:P.d,SVGLinearGradientElement:P.d,SVGMarkerElement:P.d,SVGMaskElement:P.d,SVGMetadataElement:P.d,SVGPathElement:P.d,SVGPatternElement:P.d,SVGPolygonElement:P.d,SVGPolylineElement:P.d,SVGRadialGradientElement:P.d,SVGRectElement:P.d,SVGScriptElement:P.d,SVGSetElement:P.d,SVGStopElement:P.d,SVGStyleElement:P.d,SVGElement:P.d,SVGSVGElement:P.d,SVGSwitchElement:P.d,SVGSymbolElement:P.d,SVGTSpanElement:P.d,SVGTextContentElement:P.d,SVGTextElement:P.d,SVGTextPathElement:P.d,SVGTextPositioningElement:P.d,SVGTitleElement:P.d,SVGUseElement:P.d,SVGViewElement:P.d,SVGGradientElement:P.d,SVGComponentTransferFunctionElement:P.d,SVGFEDropShadowElement:P.d,SVGMPathElement:P.d})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Screen:true,SQLError:true,ArrayBufferView:false,Int8Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLImageElement:true,HTMLLinkElement:true,Location:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,HTMLSpanElement:true,Storage:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.aM.$nativeSuperclassTag="ArrayBufferView"
H.aq.$nativeSuperclassTag="ArrayBufferView"
H.ar.$nativeSuperclassTag="ArrayBufferView"
H.aN.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.f_,[])
else Q.f_([])})})()
//# sourceMappingURL=NewspostController.dart.js.map
