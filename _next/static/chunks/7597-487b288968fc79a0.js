(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7597],{79742:function(t,e){"use strict";e.byteLength=function(t){var e=u(t),r=e[0],n=e[1];return(r+n)*3/4-n},e.toByteArray=function(t){var e,r,o=u(t),s=o[0],f=o[1],h=new i((s+f)*3/4-f),a=0,l=f>0?s-4:s;for(r=0;r<l;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[a++]=e>>16&255,h[a++]=e>>8&255,h[a++]=255&e;return 2===f&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[a++]=255&e),1===f&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[a++]=e>>8&255,h[a++]=255&e),h},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=0,f=n-i;s<f;s+=16383)o.push(function(t,e,n){for(var i,o=[],s=e;s<n;s+=3)o.push(r[(i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return o.join("")}(t,s,s+16383>f?f:s+16383));return 1===i?o.push(r[(e=t[n-1])>>2]+r[e<<4&63]+"=="):2===i&&o.push(r[(e=(t[n-2]<<8)+t[n-1])>>10]+r[e>>4&63]+r[e<<2&63]+"="),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,f=o.length;s<f;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function u(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(t,e,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(79742),i=r(80645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return a(t)}return u(t,e,r)}function u(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!f.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|y(t,e),n=s(r),i=n.write(t,e);return i!==r&&(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(P(t,Uint8Array)){let e=new Uint8Array(t);return c(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(P(t,ArrayBuffer)||t&&P(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(P(t,SharedArrayBuffer)||t&&P(t.buffer,SharedArrayBuffer)))return c(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);let i=function(t){var e;if(f.isBuffer(t)){let e=0|p(t.length),r=s(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?s(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return h(t),s(t<0?0:0|p(t))}function l(t){let e=t.length<0?0:0|p(t.length),r=s(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function c(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),f.prototype),n}function p(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function y(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||P(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return x(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return M(t).length;default:if(i)return n?-1:x(t).length;e=(""+e).toLowerCase(),i=!0}}function g(t,e,r){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=k[t[n]];return i}(this,e,r);case"utf8":case"utf-8":return m(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,r);case"base64":var o,s;return o=e,s=r,0===o&&s===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,r);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function d(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,i){var o;if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,i);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function v(t,e,r,n,i){let o,s=1,f=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,f/=2,u/=2,r/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let n=-1;for(o=r;o<f;o++)if(h(t,o)===h(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(r+u>f&&(r=f-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(h(t,o+n)!==h(e,n)){r=!1;break}if(r)return o}return -1}function m(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=r){let r,n,f,u;switch(s){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(u=(31&e)<<6|63&r)>127&&(o=u);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[i+1],n=t[i+2],f=t[i+3],(192&r)==128&&(192&n)==128&&(192&f)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&f)>65535&&u<1114112&&(o=u)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}function w(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function E(t,e,r,n,i,o){if(!f.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function B(t,e,r,n,i){C(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function A(t,e,r,n,i){C(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function L(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function I(t,e,r,n,o){return e=+e,r>>>=0,o||L(t,e,r,4,34028234663852886e22,-34028234663852886e22),i.write(t,e,r,n,23,4),r+4}function U(t,e,r,n,o){return e=+e,r>>>=0,o||L(t,e,r,8,17976931348623157e292,-17976931348623157e292),i.write(t,e,r,n,52,8),r+8}e.Buffer=f,e.SlowBuffer=function(t){return+t!=t&&(t=0),f.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,f.TYPED_ARRAY_SUPPORT=function(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return u(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return(h(t),t<=0)?s(t):void 0!==e?"string"==typeof r?s(t).fill(e,r):s(t).fill(e):s(t)},f.allocUnsafe=function(t){return a(t)},f.allocUnsafeSlow=function(t){return a(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(P(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),P(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(P(e,Uint8Array))i+e.length>n.length?(f.isBuffer(e)||(e=f.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(f.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},f.byteLength=y,f.prototype._isBuffer=!0,f.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)d(this,e,e+1);return this},f.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},f.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},f.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?m(this,0,t):g.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){let t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(f.prototype[o]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,i){if(P(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,s=r-e,u=Math.min(o,s),h=this.slice(n,i),a=t.slice(e,r);for(let t=0;t<u;++t)if(h[t]!==a[t]){o=h[t],s=a[t];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){var i,o,s,f,u,h,a,l;if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let c=this.length-e;if((void 0===r||r>c)&&(r=c),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let s=e.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,j(x(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=e,f=r,j(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,f);case"base64":return u=e,h=r,j(M(t),this,u,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a=e,l=r,j(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-a),this,a,l);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUintLE=f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUintBE=f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUint8=f.prototype.readUInt8=function(t,e){return t>>>=0,e||w(t,1,this.length),this[t]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||w(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||w(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||w(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||w(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readBigUInt64LE=$(function(t){R(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),f.prototype.readBigUInt64BE=$(function(t){R(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||w(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return(t>>>=0,e||w(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||w(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||w(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||w(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||w(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readBigInt64LE=$(function(t){R(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),f.prototype.readBigInt64BE=$(function(t){R(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),f.prototype.readFloatLE=function(t,e){return t>>>=0,e||w(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||w(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||w(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||w(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;E(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;E(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUint8=f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigUInt64LE=$(function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeBigUInt64BE=$(function(t,e=0){return A(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);E(this,t,e,r,n-1,-n)}let i=0,o=1,s=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);E(this,t,e,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||E(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigInt64LE=$(function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeBigInt64BE=$(function(t,e=0){return A(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeFloatLE=function(t,e,r){return I(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return I(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return U(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return U(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},f.prototype.fill=function(t,e,r,n){let i;if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=f.isBuffer(t)?t:f.from(t,n),s=o.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%s]}return this};let _={};function T(t,e,r){_[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function O(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function C(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new _.ERR_OUT_OF_RANGE("value",n,t)}R(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&N(i,n.length-(o+1))}function R(t,e){if("number"!=typeof t)throw new _.ERR_INVALID_ARG_TYPE(e,"number",t)}function N(t,e,r){if(Math.floor(t)!==t)throw R(t,r),new _.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new _.ERR_BUFFER_OUT_OF_BOUNDS;throw new _.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}T("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),T("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),T("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=O(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=O(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);let S=/[^+/0-9A-Za-z-_]/g;function x(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319||s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function M(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(S,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function j(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}function P(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}let k=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function $(t){return"undefined"==typeof BigInt?F:t}function F(){throw Error("BigInt not supported")}},17187:function(t){"use strict";var e,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};e=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise(function(r,n){function i(r){t.removeListener(e,o),n(r)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),r([].slice.call(arguments))}g(t,e,o,{once:!0}),"error"!==e&&"function"==typeof t.on&&g(t,"error",i,{once:!0})})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function f(t){if("function"!=typeof t)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function h(t,e,r,n){if(f(r),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),s=o[e]),void 0===s)s=o[e]=r,++t._eventsCount;else if("function"==typeof s?s=o[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(i=u(t))>0&&s.length>i&&!s.warned){s.warned=!0;var i,o,s,h=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=s.length,console&&console.warn&&console.warn(h)}return t}function a(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=a.bind(n);return i.listener=r,n.wrapFn=i,i}function c(t,e,r){var n=t._events;if(void 0===n)return[];var i=n[e];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(i):y(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(t,e){for(var r=Array(e),n=0;n<e;++n)r[n]=t[n];return r}function g(t,e,r,n){if("function"==typeof t.on)n.once?t.once(e,r):t.on(e,r);else if("function"==typeof t.addEventListener)t.addEventListener(e,function i(o){n.once&&t.removeEventListener(e,i),r(o)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t||t<0||i(t))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");s=t}}),o.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var s,f=Error("Unhandled error."+(s?" ("+s.message+")":""));throw f.context=s,f}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)n(u,this,e);else for(var h=u.length,a=y(u,h),r=0;r<h;++r)n(a[r],this,e);return!0},o.prototype.addListener=function(t,e){return h(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return h(this,t,e,!0)},o.prototype.once=function(t,e){return f(e),this.on(t,l(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return f(e),this.prependListener(t,l(this,t,e)),this},o.prototype.removeListener=function(t,e){var r,n,i,o,s;if(f(e),void 0===(n=this._events)||void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){s=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,i),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0==arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},o.prototype.listeners=function(t){return c(this,t,!0)},o.prototype.rawListeners=function(t){return c(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},80645:function(t,e){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */e.read=function(t,e,r,n,i){var o,s,f=8*i-n-1,u=(1<<f)-1,h=u>>1,a=-7,l=r?i-1:0,c=r?-1:1,p=t[e+l];for(l+=c,o=p&(1<<-a)-1,p>>=-a,a+=f;a>0;o=256*o+t[e+l],l+=c,a-=8);for(s=o&(1<<-a)-1,o>>=-a,a+=n;a>0;s=256*s+t[e+l],l+=c,a-=8);if(0===o)o=1-h;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),o-=h}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,f,u,h=8*o-i-1,a=(1<<h)-1,l=a>>1,c=23===i?5960464477539062e-23:0,p=n?0:o-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(f=isNaN(e)?1:0,s=a):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+l>=1?e+=c/u:e+=c*Math.pow(2,1-l),e*u>=2&&(s++,u/=2),s+l>=a?(f=0,s=a):s+l>=1?(f=(e*u-1)*Math.pow(2,i),s+=l):(f=e*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&f,p+=y,f/=256,i-=8);for(s=s<<i|f,h+=i;h>0;t[r+p]=255&s,p+=y,s/=256,h-=8);t[r+p-y]|=128*g}},35717:function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},89509:function(t,e,r){/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var n=r(48764),i=n.Buffer;function o(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=s),s.prototype=Object.create(i.prototype),o(i,s),s.from=function(t,e,r){if("number"==typeof t)throw TypeError("Argument must not be a number");return i(t,e,r)},s.alloc=function(t,e,r){if("number"!=typeof t)throw TypeError("Argument must be a number");var n=i(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!=typeof t)throw TypeError("Argument must be a number");return i(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw TypeError("Argument must be a number");return n.SlowBuffer(t)}},32553:function(t,e,r){"use strict";var n=r(89509).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){var e;switch(this.encoding=function(t){var e=function(t){var e;if(!t)return"utf8";for(;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(n.isEncoding===i||!i(t)))throw Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=h,e=4;break;case"utf8":this.fillLast=f,e=4;break;case"base64":this.text=a,this.end=l,e=3;break;default:this.write=c,this.end=p;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function s(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function f(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if((192&e[0])!=128)return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if((192&e[1])!=128)return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&(192&e[2])!=128)return t.lastNeed=2,"�"}}(this,t,0);return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length)}function u(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function h(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function a(t,e){var r=(t.length-e)%3;return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function l(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function p(t){return t&&t.length?this.write(t):""}e.StringDecoder=o,o.prototype.write=function(t){var e,r;if(0===t.length)return"";if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1;if(n<r)return 0;var i=s(e[n]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--n<r||-2===i?0:(i=s(e[n]))>=0?(i>0&&(t.lastNeed=i-2),i):--n<r||-2===i?0:(i=s(e[n]))>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}}}]);