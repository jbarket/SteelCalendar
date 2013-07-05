/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(t){t.cookie=function(e,i,n){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(i))||null===i||void 0===i)){if(n=t.extend({},n),(null===i||void 0===i)&&(n.expires=-1),"number"==typeof n.expires){var s=n.expires,a=n.expires=new Date;a.setDate(a.getDate()+s)}return i=String(i),document.cookie=[encodeURIComponent(e),"=",n.raw?i:encodeURIComponent(i),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}n=i||{};for(var o,r=n.raw?function(t){return t}:decodeURIComponent,l=document.cookie.split("; "),h=0;o=l[h]&&l[h].split("=");h++)if(r(o[0])===e)return r(o[1]||"");return null}}(jQuery);