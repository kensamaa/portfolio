/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.WinkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WinkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Winkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

;/*
;/*!
;/** @preserve
 *
 * slippry v1.4.0 - Responsive content slider for jQuery
 * http://slippry.com
 *
 * Authors: Lukas Jakob Hafner - @saftsaak
 *          Thomas Hurd - @SeenNotHurd
 *
 * Copyright 2016, booncon oy - http://booncon.com
 *
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(a){"use strict";var b;b={slippryWrapper:'<div class="sy-box" />',slideWrapper:'<div class="sy-slides-wrap" />',slideCrop:'<div class="sy-slides-crop" />',boxClass:"sy-list",elements:"li",activeClass:"sy-active",fillerClass:"sy-filler",loadingClass:"sy-loading",adaptiveHeight:!0,start:1,loop:!0,captionsSrc:"img",captions:"overlay",captionsEl:".sy-caption",initSingle:!0,responsive:!0,preload:"visible",pager:!0,pagerClass:"sy-pager",controls:!0,controlClass:"sy-controls",prevClass:"sy-prev",prevText:"Previous",nextClass:"sy-next",nextText:"Next",hideOnEnd:!0,transition:"fade",kenZoom:120,slideMargin:0,transClass:"transition",speed:800,easing:"swing",continuous:!0,useCSS:!0,auto:!0,autoDirection:"next",autoHover:!0,autoHoverDelay:100,autoDelay:500,pause:4e3,onSliderLoad:function(){return this},onSlideBefore:function(){return this},onSlideAfter:function(){return this}},a.fn.slippry=function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A;return e=this,0===e.length?this:e.length>1?(e.each(function(){a(this).slippry(c)}),this):(d={},d.vars={},n=function(){var a,b,c;b=document.createElement("div"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd",transition:"transitionEnd transitionend"};for(a in c)if(void 0!==b.style[a])return c[a]},w=function(){var a=document.createElement("div"),b=["Khtml","Ms","O","Moz","Webkit"],c=b.length;return function(d){if(d in a.style)return!0;for(d=d.replace(/^[a-z]/,function(a){return a.toUpperCase()});c--;)if(b[c]+d in a.style)return!0;return!1}}(),z=function(b,c){var d,e,f,g;return d=c.split("."),e=a(b),f="",g="",a.each(d,function(a,b){b.indexOf("#")>=0?f+=b.replace(/^#/,""):g+=b+" "}),f.length&&e.attr("id",f),g.length&&e.attr("class",a.trim(g)),e},A=function(){var a,b,c,e;c={},e={},a=100-d.settings.kenZoom,e.width=d.settings.kenZoom+"%",d.vars.active.index()%2===0?(e.left=a+"%",e.top=a+"%",c.left="0%",c.top="0%"):(e.left="0%",e.top="0%",c.left=a+"%",c.top=a+"%"),b=d.settings.pause+2*d.settings.speed,d.vars.active.css(e),d.vars.active.animate(c,{duration:b,easing:d.settings.easing,queue:!1})},l=function(){d.vars.fresh?(d.vars.slippryWrapper.removeClass(d.settings.loadingClass),d.vars.fresh=!1,d.settings.auto&&e.startAuto(),d.settings.useCSS||"kenburns"!==d.settings.transition||A(),d.settings.onSliderLoad.call(void 0,d.vars.active.index())):a("."+d.settings.fillerClass,d.vars.slideWrapper).addClass("ready")},q=function(b,c){var e,f,g;e=b/c,f=1/e*100+"%",g=a("."+d.settings.fillerClass,d.vars.slideWrapper),g.css({paddingTop:f}),l()},g=function(b){var c,d;void 0!==a("img",b).attr("src")?a("<img />").on("load",function(){c=b.width(),d=b.height(),q(c,d)}).attr("src",a("img",b).attr("src")):(c=b.width(),d=b.height(),q(c,d))},f=function(){if(0===a("."+d.settings.fillerClass,d.vars.slideWrapper).length&&d.vars.slideWrapper.append(a('<div class="'+d.settings.fillerClass+'" />')),d.settings.adaptiveHeight===!0)g(a("."+d.settings.activeClass,e));else{var b,c,f;c=0,f=0,a(d.vars.slides).each(function(){a(this).height()>c&&(b=a(this),c=b.height()),f+=1,f===d.vars.count&&(void 0===b&&(b=a(a(d.vars.slides)[0])),g(b))})}},p=function(){d.settings.pager&&(a("."+d.settings.pagerClass+" li",d.vars.slippryWrapper).removeClass(d.settings.activeClass),a(a("."+d.settings.pagerClass+" li",d.vars.slippryWrapper)[d.vars.active.index()]).addClass(d.settings.activeClass))},u=function(){!d.settings.loop&&d.settings.hideOnEnd&&(a("."+d.settings.prevClass,d.vars.slippryWrapper)[d.vars.first?"hide":"show"](),a("."+d.settings.nextClass,d.vars.slippryWrapper)[d.vars.last?"hide":"show"]())},i=function(){var b,c;d.settings.captions!==!1&&(b="img"!==d.settings.captionsSrc?d.vars.active.attr("title"):void 0!==a("img",d.vars.active).attr("title")?a("img",d.vars.active).attr("title"):a("img",d.vars.active).attr("alt"),c="custom"!==d.settings.captions?a(d.settings.captionsEl,d.vars.slippryWrapper):a(d.settings.captionsEl),void 0!==b&&""!==b?c.html(b).show():c.hide())},e.startAuto=function(){void 0===d.vars.timer&&void 0===d.vars.delay&&(d.vars.delay=window.setTimeout(function(){d.vars.autodelay=!1,d.vars.timer=window.setInterval(function(){d.vars.trigger="auto",t(d.settings.autoDirection)},d.settings.pause)},d.vars.autodelay?d.settings.autoHoverDelay:d.settings.autoDelay),d.settings.autoHover&&d.vars.slideWrapper.unbind("mouseenter").unbind("mouseleave").bind("mouseenter",function(){void 0!==d.vars.timer?(d.vars.hoverStop=!0,e.stopAuto()):d.vars.hoverStop=!1}).bind("mouseleave",function(){d.vars.hoverStop&&(d.vars.autodelay=!0,e.startAuto())}))},e.stopAuto=function(){window.clearInterval(d.vars.timer),d.vars.timer=void 0,window.clearTimeout(d.vars.delay),d.vars.delay=void 0},e.refresh=function(){d.vars.slides.removeClass(d.settings.activeClass),d.vars.active.addClass(d.settings.activeClass),d.settings.responsive?f():l(),u(),p(),i()},s=function(){e.refresh()},m=function(){d.vars.moving=!1,d.vars.active.removeClass(d.settings.transClass),d.vars.fresh||d.vars.old.removeClass("sy-ken"),d.vars.old.removeClass(d.settings.transClass),d.settings.onSlideAfter.call(void 0,d.vars.active,d.vars.old.index(),d.vars.active.index()),d.settings.auto&&(d.vars.hoverStop&&void 0!==d.vars.hoverStop||e.startAuto())},r=function(){var b,c,f,g,h,i,j;d.settings.onSlideBefore.call(void 0,d.vars.active,d.vars.old.index(),d.vars.active.index()),d.settings.transition!==!1?(d.vars.moving=!0,"fade"===d.settings.transition||"kenburns"===d.settings.transition?(d.vars.fresh?(d.settings.useCSS?d.vars.slides.css({transitionDuration:d.settings.speed+"ms",opacity:0}):d.vars.slides.css({opacity:0}),d.vars.active.css("opacity",1),"kenburns"===d.settings.transition&&d.settings.useCSS&&(h=d.settings.pause+2*d.settings.speed,d.vars.slides.css({animationDuration:h+"ms"}),d.vars.active.addClass("sy-ken")),m()):d.settings.useCSS?(d.vars.old.addClass(d.settings.transClass).css("opacity",0),d.vars.active.addClass(d.settings.transClass).css("opacity",1),"kenburns"===d.settings.transition&&d.vars.active.addClass("sy-ken"),a(window).off("focus").on("focus",function(){d.vars.moving&&d.vars.old.trigger(d.vars.transition)}),d.vars.old.one(d.vars.transition,function(){return m(),this})):("kenburns"===d.settings.transition&&A(),d.vars.old.addClass(d.settings.transClass).animate({opacity:0},d.settings.speed,d.settings.easing,function(){m()}),d.vars.active.addClass(d.settings.transClass).css("opacity",0).animate({opacity:1},d.settings.speed,d.settings.easing)),s()):("horizontal"===d.settings.transition||"vertical"===d.settings.transition)&&(i="horizontal"===d.settings.transition?"left":"top",b="-"+d.vars.active.index()*(100+d.settings.slideMargin)+"%",d.vars.fresh?(e.css(i,b),m()):(j={},d.settings.continuous&&(!d.vars.jump||"controls"!==d.vars.trigger&&"auto"!==d.vars.trigger||(c=!0,g=b,d.vars.first?(f=0,d.vars.active.css(i,d.vars.count*(100+d.settings.slideMargin)+"%"),b="-"+d.vars.count*(100+d.settings.slideMargin)+"%"):(f=(d.vars.count-1)*(100+d.settings.slideMargin)+"%",d.vars.active.css(i,-(100+d.settings.slideMargin)+"%"),b=100+d.settings.slideMargin+"%"))),d.vars.active.addClass(d.settings.transClass),d.settings.useCSS?(j[i]=b,j.transitionDuration=d.settings.speed+"ms",e.addClass(d.settings.transition),e.css(j),a(window).off("focus").on("focus",function(){d.vars.moving&&e.trigger(d.vars.transition)}),e.one(d.vars.transition,function(){return e.removeClass(d.settings.transition),c&&(d.vars.active.css(i,f),j[i]=g,j.transitionDuration="0ms",e.css(j)),m(),this})):(j[i]=b,e.stop().animate(j,d.settings.speed,d.settings.easing,function(){return c&&(d.vars.active.css(i,f),e.css(i,g)),m(),this}))),s())):(s(),m())},v=function(a){d.vars.first=d.vars.last=!1,"prev"===a||0===a?d.vars.first=!0:("next"===a||a===d.vars.count-1)&&(d.vars.last=!0)},t=function(b){var c,f;d.vars.moving||("auto"!==d.vars.trigger&&e.stopAuto(),c=d.vars.active.index(),"prev"===b?(f=b,c>0?b=c-1:d.settings.loop&&(b=d.vars.count-1)):"next"===b?(f=b,c<d.vars.count-1?b=c+1:d.settings.loop&&(b=0)):(b-=1,f=c>b?"prev":"next"),d.vars.jump=!1,"prev"===b||"next"===b||b===c&&!d.vars.fresh||(v(b),d.vars.old=d.vars.active,d.vars.active=a(d.vars.slides[b]),(0===c&&"prev"===f||c===d.vars.count-1&&"next"===f)&&(d.vars.jump=!0),r()))},e.goToSlide=function(a){d.vars.trigger="external",t(a)},e.goToNextSlide=function(){d.vars.trigger="external",t("next")},e.goToPrevSlide=function(){d.vars.trigger="external",t("prev")},j=function(){if(d.settings.pager&&d.vars.count>1){var b,c,e;for(b=d.vars.slides.length,e=a('<ul class="'+d.settings.pagerClass+'" />'),c=1;b+1>c;c+=1)e.append(a("<li />").append(a('<a href="#'+c+'">'+c+"</a>")));d.vars.slippryWrapper.append(e),a("."+d.settings.pagerClass+" a",d.vars.slippryWrapper).click(function(){return d.vars.trigger="pager",t(parseInt(this.hash.split("#")[1],10)),!1}),p()}},k=function(){d.settings.controls&&d.vars.count>1&&(d.vars.slideWrapper.append(a('<ul class="'+d.settings.controlClass+'" />').append('<li class="'+d.settings.prevClass+'"><a href="#prev">'+d.settings.prevText+"</a></li>").append('<li class="'+d.settings.nextClass+'"><a href="#next">'+d.settings.nextText+"</a></li>")),a("."+d.settings.controlClass+" a",d.vars.slippryWrapper).click(function(){return d.vars.trigger="controls",t(this.hash.split("#")[1]),!1}),u())},o=function(){d.settings.captions!==!1&&("overlay"===d.settings.captions?d.vars.slideWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />",d.settings.captionsEl))):"below"===d.settings.captions&&d.vars.slippryWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />",d.settings.captionsEl))))},y=function(){t(d.vars.active.index()+1)},x=function(b){var c,e,f,g;return g="all"===d.settings.preload?b:d.vars.active,f=a("img, iframe",g),c=f.length,0===c?void y():(e=0,void f.each(function(){a(this).one("load error",function(){++e===c&&y()}).each(function(){this.complete&&a(this).trigger("load")})}))},e.getCurrentSlide=function(){return d.vars.active},e.getSlideCount=function(){return d.vars.count},e.destroySlider=function(){d.vars.fresh===!1&&(e.stopAuto(),d.vars.moving=!1,d.vars.slides.each(function(){void 0!==a(this).data("sy-cssBckup")?a(this).attr("style",a(this).data("sy-cssBckup")):a(this).removeAttr("style"),void 0!==a(this).data("sy-classBckup")?a(this).attr("class",a(this).data("sy-classBckup")):a(this).removeAttr("class")}),void 0!==e.data("sy-cssBckup")?e.attr("style",e.data("sy-cssBckup")):e.removeAttr("style"),void 0!==e.data("sy-classBckup")?e.attr("class",e.data("sy-classBckup")):e.removeAttr("class"),d.vars.slippryWrapper.before(e),d.vars.slippryWrapper.remove(),d.vars.fresh=void 0)},e.reloadSlider=function(){e.destroySlider(),h()},h=function(){var f;return d.settings=a.extend({},b,c),d.vars.slides=a(d.settings.elements,e),d.vars.count=d.vars.slides.length,d.settings.useCSS&&(w("transition")||(d.settings.useCSS=!1),d.vars.transition=n()),e.data("sy-cssBckup",e.attr("style")),e.data("sy-classBackup",e.attr("class")),e.addClass(d.settings.boxClass).wrap(d.settings.slippryWrapper).wrap(d.settings.slideWrapper).wrap(d.settings.slideCrop),d.vars.slideWrapper=e.parent().parent(),d.vars.slippryWrapper=d.vars.slideWrapper.parent().addClass(d.settings.loadingClass),d.vars.fresh=!0,d.vars.slides.each(function(){a(this).addClass("sy-slide "+d.settings.transition),d.settings.useCSS&&a(this).addClass("useCSS"),"horizontal"===d.settings.transition?a(this).css("left",a(this).index()*(100+d.settings.slideMargin)+"%"):"vertical"===d.settings.transition&&a(this).css("top",a(this).index()*(100+d.settings.slideMargin)+"%")}),d.vars.count>1||d.settings.initSingle?(-1===a("."+d.settings.activeClass,e).index()?(f="random"===d.settings.start?Math.round(Math.random()*(d.vars.count-1)):d.settings.start>0&&d.settings.start<=d.vars.count?d.settings.start-1:0,d.vars.active=a(d.vars.slides[f]).addClass(d.settings.activeClass)):d.vars.active=a("."+d.settings.activeClass,e),k(),j(),o(),x(d.vars.slides),void 0):this},h(),this)}}(jQuery);
;/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
;// Generated by CoffeeScript 1.6.2
/* jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
;/*!* jquery.counterup.js 1.0*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
* Date: Nov 26, 2013*/
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
;﻿/*!
;﻿/*Masonry PACKAGED v3.1.4
* Cascading grid layout library
* http://masonry.desandro.com
* MIT License
* by David DeSandro*/
/*Mike Davis - Added "getItems" method
- Fixed bug in "measureColumns" method which didn't take into
account hidden items.
2/28/2014 */
/*Bridget makes jQuery widgets
v1.0.1*/
!function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)}(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Winkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t,e){function i(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function o(t){function e(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=s(t);if("none"===e.display)return n();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var u=r.isBorderBox=!(!p||!e[p]||"border-box"!==e[p]),f=0,c=a.length;c>f;f++){var d=a[f],l=e[d];l=o(t,l);var m=parseFloat(l);r[d]=isNaN(m)?0:m}var y=r.paddingLeft+r.paddingRight,g=r.paddingTop+r.paddingBottom,v=r.marginLeft+r.marginRight,b=r.marginTop+r.marginBottom,_=r.borderLeftWidth+r.borderRightWidth,E=r.borderTopWidth+r.borderBottomWidth,L=u&&h,x=i(e.width);x!==!1&&(r.width=x+(L?0:y+_));var z=i(e.height);return z!==!1&&(r.height=z+(L?0:g+E)),r.innerWidth=r.width-(y+_),r.innerHeight=r.height-(g+E),r.outerWidth=r.width+v,r.outerHeight=r.height+b,r}}function o(t,e){if(r||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,o=t.runtimeStyle,s=o&&o.left;return s&&(o.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(o.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var e=document.body||document.documentElement;e.appendChild(t);var n=s(t);h=200===i(n.width),e.removeChild(t)}}(),e}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["Winkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),c={WinkitTransition:"WinkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var n=d[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=l[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isConstruction:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isConstruction&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isConstruction&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onWinkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isConstruction:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isConstruction:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return void(h&&h.error("Bad "+this.constructor.namespace+" element: "+t));this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,b[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,b={};return y.namespace="outlayer",y.Item=m,y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getAllItems=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e]);return t},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=d(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):c(n)&&(i=n),this[t]=i?d(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){function i(){n.emitEvent("layoutComplete",[n,t])}var n=this;if(!t||!t.length)return void i();this._itemsOn(t,"layout",i);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r],h=this._getItemLayoutPosition(a);h.item=a,h.isInstant=e||a.isLayoutInstant,o.push(h)}this._processLayoutQueue(o)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=d(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=d(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.reveal()}},y.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&b[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return Object.create?n.prototype=Object.create(y.prototype):e(n.prototype,y.prototype),n.prototype.constructor=n,g(n,"options"),e(n.prototype.options,i),n.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,c=i[s],d=c.getAttribute(o);try{f=d&&JSON.parse(d)}catch(l){h&&h.error("Error parsing "+o+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var m=new n(c,f);p&&p.data(c,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){for(var t,i=0,n=this.items.length;n>i;i++)if(!this.items[i].isIgnored){t=this.items[i];break}t||(t=this.items[0]);var o=t&&t.element;this.columnWidth=o&&e(o).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),h={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,u=this.cols+1-r.length,f=0;u>f;f++)this.colYs[a+f]=p;return h},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);
;﻿/* -- Filter Plugin -- */
!function(n){"use strict";n.fn.masonryFilter=function(e){var i=function(n){setTimeout(function(){n.masonry("layout")},100)},t=function(t){var r=t.masonry("getAllItems"),o=[],s=[];n.each(r,function(i){var t=r[i],a=n(t.element),u=e.filter&&e.filter.call(a);u?t.isHidden&&(t.isIgnored=!1,o.push(t)):t.isHidden||(t.isIgnored=!0,s.push(t))}),t.masonry("hide",s),t.masonry("reveal",o),i(t)};return this.each(function(){var e=n(this);t(e)})}}(window.jQuery);
;/*! lightgallery - v1.6.12 - 2019-02-19
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2019 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")}),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){return!!function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0}()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(b+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if(void 0!==e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),void 0!==e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive){m(k.s.dynamicEl[b].responsive.split(","))}h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr("href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive")){m(k.$items.eq(b).attr("data-responsive").split(","))}h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr("data-sizes")}var n=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(n=!0):"true"===k.$items.eq(b).attr("data-iframe")&&(n=!0);var o=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(n)k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(l){var p="";p=o&&o.youtube?"lg-has-youtube":o&&o.vimeo?"lg-has-vimeo":"lg-has-html5",k.$slide.eq(b).prepend('<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else o?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger("onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr("srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),o&&o.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),!0===c&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?!1!==g.s.dynamicEl[b].downloadUrl&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}g.index=b}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){!0===b.s.escKey&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||b.lgBusy||a(d.target).text().trim()||(d.preventDefault(),b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg"))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mousemove.lg",function(){c=!1}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg")},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(0,function(a){!function(){"use strict";var b={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},c=function(c){return this.core=a(c).data("lightGallery"),this.$el=a(c),!(this.core.$items.length<2)&&(this.core.s=a.extend({},b,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};c.prototype.init=function(){var a=this;a.core.s.autoplayControls&&a.controls(),a.core.s.progressBar&&a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),a.progress(),a.core.s.autoplay&&a.$el.one("onSlideItemLoad.lg.tm",function(){a.startlAuto()}),a.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){a.interval&&(a.cancelAuto(),a.canceledOnTouch=!0)}),a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!a.interval&&a.canceledOnTouch&&(a.startlAuto(),a.canceledOnTouch=!1)})},c.prototype.progress=function(){var a,b,c=this;c.$el.on("onBeforeSlide.lg.tm",function(){c.core.s.progressBar&&c.fromAuto&&(a=c.core.$outer.find(".lg-progress-bar"),b=c.core.$outer.find(".lg-progress"),c.interval&&(b.removeAttr("style"),a.removeClass("lg-start"),setTimeout(function(){b.css("transition","width "+(c.core.s.speed+c.core.s.pause)+"ms ease 0s"),a.addClass("lg-start")},20))),c.fromAuto||c.core.s.fourceAutoplay||c.cancelAuto(),c.fromAuto=!1})},c.prototype.controls=function(){var b=this;a(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'),b.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){a(b.core.$outer).hasClass("lg-show-autoplay")?(b.cancelAuto(),b.core.s.fourceAutoplay=!1):b.interval||(b.startlAuto(),b.core.s.fourceAutoplay=b.fourceAutoplayTemp)})},c.prototype.startlAuto=function(){var a=this;a.core.$outer.find(".lg-progress").css("transition","width "+(a.core.s.speed+a.core.s.pause)+"ms ease 0s"),a.core.$outer.addClass("lg-show-autoplay"),a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),a.interval=setInterval(function(){a.core.index+1<a.core.$items.length?a.core.index++:a.core.index=0,a.fromAuto=!0,a.core.slide(a.core.index,!1,!1,"next")},a.core.s.speed+a.core.s.pause)},c.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},c.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},a.fn.lightGallery.modules.autoplay=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement}var c={fullScreen:!0},d=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},c,this.core.s),this.init(),this};d.prototype.init=function(){var a="";if(this.core.s.fullScreen){if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return;a='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(a),this.fullScreen()}},d.prototype.requestFullscreen=function(){var a=document.documentElement;a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()},d.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},d.prototype.fullScreen=function(){var c=this;a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){c.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){b()?c.exitFullscreen():c.requestFullscreen()})},d.prototype.destroy=function(){b()&&this.exitFullscreen(),a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},a.fn.lightGallery.modules.fullscreen=d}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(0,function(a){!function(){"use strict";var b={pager:!1},c=function(c){return this.core=a(c).data("lightGallery"),this.$el=a(c),this.core.s=a.extend({},b,this.core.s),this.core.s.pager&&this.core.$items.length>1&&this.init(),this};c.prototype.init=function(){var b,c,d,e=this,f="";if(e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),e.core.s.dynamic)for(var g=0;g<e.core.s.dynamicEl.length;g++)f+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e.core.s.dynamicEl[g].thumb+'" /></div></span>';else e.core.$items.each(function(){e.core.s.exThumbImage?f+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).attr(e.core.s.exThumbImage)+'" /></div></span>':f+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).find("img").attr("src")+'" /></div></span>'});c=e.core.$outer.find(".lg-pager-outer"),c.html(f),b=e.core.$outer.find(".lg-pager-cont"),b.on("click.lg touchend.lg",function(){var b=a(this);e.core.index=b.index(),e.core.slide(e.core.index,!1,!0,!1)}),c.on("mouseover.lg",function(){clearTimeout(d),c.addClass("lg-pager-hover")}),c.on("mouseout.lg",function(){d=setTimeout(function(){c.removeClass("lg-pager-hover")})}),e.core.$el.on("onBeforeSlide.lg.tm",function(a,c,d){b.removeClass("lg-pager-active"),b.eq(d).addClass("lg-pager-active")})},c.prototype.destroy=function(){},a.fn.lightGallery.modules.pager=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(0,function(a){!function(){"use strict";var b={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbHeight:"80px",thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.$el=a(c),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.core.s.animateThumb&&(this.core.s.thumbHeight="100%"),this.left=0,this.init(),this};c.prototype.init=function(){var a=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){a.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb&&this.core.doCss()?(this.core.s.enableThumbDrag&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},c.prototype.build=function(){function b(a,b,c){var g,h=d.core.isVideo(a,c)||{},i="";h.youtube||h.vimeo||h.dailymotion?h.youtube?g=d.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+h.youtube[1]+"/"+d.core.s.youtubeThumbSize+".jpg":b:h.vimeo?d.core.s.loadVimeoThumbnail?(g="//i.vimeocdn.com/video/error_"+f+".jpg",i=h.vimeo[1]):g=b:h.dailymotion&&(g=d.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+h.dailymotion[1]:b):g=b,e+='<div data-vimeo-id="'+i+'" class="lg-thumb-item" style="width:'+d.core.s.thumbWidth+"px; height: "+d.core.s.thumbHeight+"; margin-right: "+d.core.s.thumbMargin+'px"><img src="'+g+'" /></div>',i=""}var c,d=this,e="",f="",g='<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":f="640";break;case"thumbnail_medium":f="200x150";break;case"thumbnail_small":f="100x75"}if(d.core.$outer.addClass("lg-has-thumb"),d.core.$outer.find(".lg").append(g),d.$thumbOuter=d.core.$outer.find(".lg-thumb-outer"),d.thumbOuterWidth=d.$thumbOuter.width(),d.core.s.animateThumb&&d.core.$outer.find(".lg-thumb").css({width:d.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&d.$thumbOuter.css("height",d.core.s.thumbContHeight+"px"),d.core.s.dynamic)for(var h=0;h<d.core.s.dynamicEl.length;h++)b(d.core.s.dynamicEl[h].src,d.core.s.dynamicEl[h].thumb,h);else d.core.$items.each(function(c){d.core.s.exThumbImage?b(a(this).attr("href")||a(this).attr("data-src"),a(this).attr(d.core.s.exThumbImage),c):b(a(this).attr("href")||a(this).attr("data-src"),a(this).find("img").attr("src"),c)});d.core.$outer.find(".lg-thumb").html(e),c=d.core.$outer.find(".lg-thumb-item"),c.each(function(){var b=a(this),c=b.attr("data-vimeo-id");c&&a.getJSON("//www.vimeo.com/api/v2/video/"+c+".json?callback=?",{format:"json"},function(a){b.find("img").attr("src",a[0][d.core.s.vimeoThumbSize])})}),c.eq(d.core.index).addClass("active"),d.core.$el.on("onBeforeSlide.lg.tm",function(){c.removeClass("active"),c.eq(d.core.index).addClass("active")}),c.on("click.lg touchend.lg",function(){var b=a(this);setTimeout(function(){(d.thumbClickable&&!d.core.lgBusy||!d.core.doCss())&&(d.core.index=b.index(),d.core.slide(d.core.index,!1,!0,!1))},50)}),d.core.$el.on("onBeforeSlide.lg.tm",function(){d.animateThumb(d.core.index)}),a(window).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){d.animateThumb(d.core.index),d.thumbOuterWidth=d.$thumbOuter.width()},200)})},c.prototype.setTranslate=function(a){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+a+"px, 0px, 0px)"})},c.prototype.animateThumb=function(a){var b=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var c;switch(this.core.s.currentPagerPosition){case"left":c=0;break;case"middle":c=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":c=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*a-1-c,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(b.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||b.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||b.css("left",-this.left+"px"),this.setTranslate(this.left)}},c.prototype.enableThumbDrag=function(){var b=this,c=0,d=0,e=!1,f=!1,g=0;b.$thumbOuter.addClass("lg-grab"),b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(a){b.thumbTotalWidth>b.thumbOuterWidth&&(a.preventDefault(),c=a.pageX,e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.thumbClickable=!1,b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.thumb",function(a){e&&(g=b.left,f=!0,d=a.pageX,b.$thumbOuter.addClass("lg-dragging"),g-=d-c,g>b.thumbTotalWidth-b.thumbOuterWidth&&(g=b.thumbTotalWidth-b.thumbOuterWidth),g<0&&(g=0),b.setTranslate(g))}),a(window).on("mouseup.lg.thumb",function(){f?(f=!1,b.$thumbOuter.removeClass("lg-dragging"),b.left=g,Math.abs(d-c)<b.core.s.swipeThreshold&&(b.thumbClickable=!0)):b.thumbClickable=!0,e&&(e=!1,b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},c.prototype.enableThumbSwipe=function(){var a=this,b=0,c=0,d=!1,e=0;a.core.$outer.find(".lg-thumb").on("touchstart.lg",function(c){a.thumbTotalWidth>a.thumbOuterWidth&&(c.preventDefault(),b=c.originalEvent.targetTouches[0].pageX,a.thumbClickable=!1)}),a.core.$outer.find(".lg-thumb").on("touchmove.lg",function(f){a.thumbTotalWidth>a.thumbOuterWidth&&(f.preventDefault(),c=f.originalEvent.targetTouches[0].pageX,d=!0,a.$thumbOuter.addClass("lg-dragging"),e=a.left,e-=c-b,e>a.thumbTotalWidth-a.thumbOuterWidth&&(e=a.thumbTotalWidth-a.thumbOuterWidth),e<0&&(e=0),a.setTranslate(e))}),a.core.$outer.find(".lg-thumb").on("touchend.lg",function(){a.thumbTotalWidth>a.thumbOuterWidth&&d?(d=!1,a.$thumbOuter.removeClass("lg-dragging"),Math.abs(c-b)<a.core.s.swipeThreshold&&(a.thumbClickable=!0),a.left=e):a.thumbClickable=!0})},c.prototype.toogle=function(){var a=this;a.core.s.toogleThumb&&(a.core.$outer.addClass("lg-can-toggle"),a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),a.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){a.core.$outer.toggleClass("lg-thumb-open")}))},c.prototype.thumbkeyPress=function(){var b=this;a(window).on("keydown.lg.thumb",function(a){38===a.keyCode?(a.preventDefault(),b.core.$outer.addClass("lg-thumb-open")):40===a.keyCode&&(a.preventDefault(),b.core.$outer.removeClass("lg-thumb-open"))})},c.prototype.destroy=function(){
this.core.s.thumbnail&&this.core.$items.length>1&&(a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},a.fn.lightGallery.modules.Thumbnail=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(a,b,c,d){var e=this;if(e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c,"lg-object",!0,b,d)),d)if(e.core.s.videojs)try{videojs(e.core.$slide.eq(b).find(".lg-html5").get(0),e.core.s.videojsOptions,function(){!e.videoLoaded&&e.core.s.autoplayFirstVideo&&this.play()})}catch(a){console.error("Make sure you have included videojs")}else!e.videoLoaded&&e.core.s.autoplayFirstVideo&&e.core.$slide.eq(b).find(".lg-html5").get(0).play()}function c(a,b){var c=this.core.$slide.eq(b).find(".lg-video-cont");c.hasClass("lg-has-iframe")||(c.css("max-width",this.core.s.videoMaxWidth),this.videoLoaded=!0)}function d(b,c,d){var e=this,f=e.core.$slide.eq(c),g=f.find(".lg-youtube").get(0),h=f.find(".lg-vimeo").get(0),i=f.find(".lg-dailymotion").get(0),j=f.find(".lg-vk").get(0),k=f.find(".lg-html5").get(0);if(g)g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(h)try{$f(h).api("pause")}catch(a){console.error("Make sure you have included froogaloop2 js")}else if(i)i.contentWindow.postMessage("pause","*");else if(k)if(e.core.s.videojs)try{videojs(k).pause()}catch(a){console.error("Make sure you have included videojs")}else k.pause();j&&a(j).attr("src",a(j).attr("src").replace("&autoplay","&noplay"));var l;l=e.core.s.dynamic?e.core.s.dynamicEl[d].src:e.core.$items.eq(d).attr("href")||e.core.$items.eq(d).attr("data-src");var m=e.core.isVideo(l,d)||{};(m.youtube||m.vimeo||m.dailymotion||m.vk)&&e.core.$outer.addClass("lg-hide-download")}var e={videoMaxWidth:"855px",autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.videoLoaded=!1,this.init(),this};f.prototype.init=function(){var e=this;e.core.$el.on("hasVideo.lg.tm",b.bind(this)),e.core.$el.on("onAferAppendSlide.lg.tm",c.bind(this)),e.core.doCss()&&e.core.$items.length>1&&(e.core.s.enableSwipe||e.core.s.enableDrag)?e.core.$el.on("onSlideClick.lg.tm",function(){var a=e.core.$slide.eq(e.core.index);e.loadVideoOnclick(a)}):e.core.$slide.on("click.lg",function(){e.loadVideoOnclick(a(this))}),e.core.$el.on("onBeforeSlide.lg.tm",d.bind(this)),e.core.$el.on("onAfterSlide.lg.tm",function(a,b){e.core.$slide.eq(b).removeClass("lg-video-playing")}),e.core.s.autoplayFirstVideo&&e.core.$el.on("onAferAppendSlide.lg.tm",function(a,b){if(!e.core.lGalleryOn){var c=e.core.$slide.eq(b);setTimeout(function(){e.loadVideoOnclick(c)},100)}})},f.prototype.loadVideo=function(b,c,d,e,f){var g="",h=1,i="",j=this.core.isVideo(b,e)||{};if(d&&(h=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0),j.youtube)i="?wmode=opaque&autoplay="+h+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(i=i+"&"+a.param(this.core.s.youtubePlayerParams)),g='<iframe class="lg-video-object lg-youtube '+c+'" width="560" height="315" src="//www.youtube.com/embed/'+j.youtube[1]+i+'" frameborder="0" allowfullscreen></iframe>';else if(j.vimeo)i="?autoplay="+h+"&api=1",this.core.s.vimeoPlayerParams&&(i=i+"&"+a.param(this.core.s.vimeoPlayerParams)),g='<iframe class="lg-video-object lg-vimeo '+c+'" width="560" height="315"  src="//player.vimeo.com/video/'+j.vimeo[1]+i+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(j.dailymotion)i="?wmode=opaque&autoplay="+h+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(i=i+"&"+a.param(this.core.s.dailymotionPlayerParams)),g='<iframe class="lg-video-object lg-dailymotion '+c+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+j.dailymotion[1]+i+'" frameborder="0" allowfullscreen></iframe>';else if(j.html5){var k=f.substring(0,1);"."!==k&&"#"!==k||(f=a(f).html()),g=f}else j.vk&&(i="&autoplay="+h,this.core.s.vkPlayerParams&&(i=i+"&"+a.param(this.core.s.vkPlayerParams)),g='<iframe class="lg-video-object lg-vk '+c+'" width="560" height="315" src="//vk.com/video_ext.php?'+j.vk[1]+i+'" frameborder="0" allowfullscreen></iframe>');return g},f.prototype.loadVideoOnclick=function(a){var b=this;if(a.find(".lg-object").hasClass("lg-has-poster")&&a.find(".lg-object").is(":visible"))if(a.hasClass("lg-has-video")){var c=a.find(".lg-youtube").get(0),d=a.find(".lg-vimeo").get(0),e=a.find(".lg-dailymotion").get(0),f=a.find(".lg-html5").get(0);if(c)c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(d)try{$f(d).api("play")}catch(a){console.error("Make sure you have included froogaloop2 js")}else if(e)e.contentWindow.postMessage("play","*");else if(f)if(b.core.s.videojs)try{videojs(f).play()}catch(a){console.error("Make sure you have included videojs")}else f.play();a.addClass("lg-video-playing")}else{a.addClass("lg-video-playing lg-has-video");var g,h,i=function(c,d){if(a.find(".lg-video").append(b.loadVideo(c,"",!1,b.core.index,d)),d)if(b.core.s.videojs)try{videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0),b.core.s.videojsOptions,function(){this.play()})}catch(a){console.error("Make sure you have included videojs")}else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()};b.core.s.dynamic?(g=b.core.s.dynamicEl[b.core.index].src,h=b.core.s.dynamicEl[b.core.index].html,i(g,h)):(g=b.core.$items.eq(b.core.index).attr("href")||b.core.$items.eq(b.core.index).attr("data-src"),h=b.core.$items.eq(b.core.index).attr("data-html"),i(g,h));var j=a.find(".lg-object");a.find(".lg-video").append(j),a.find(".lg-video-object").hasClass("lg-html5")||(a.removeClass("lg-complete"),a.find(".lg-video-object").on("load.lg error.lg",function(){a.addClass("lg-complete")}))}},f.prototype.destroy=function(){this.videoLoaded=!1},a.fn.lightGallery.modules.video=f}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(0,function(a){!function(){"use strict";var b=function(){var a=!1,b=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return b&&parseInt(b[2],10)<54&&(a=!0),a},c={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:b()},d=function(b){return this.core=a(b).data("lightGallery"),this.core.s=a.extend({},c,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()),this};d.prototype.init=function(){var b=this,c='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';b.core.s.actualSize&&(c+='<span id="lg-actual-size" class="lg-icon"></span>'),b.core.s.useLeftForZoom?b.core.$outer.addClass("lg-use-left-for-zoom"):b.core.$outer.addClass("lg-use-transition-for-zoom"),this.core.$outer.find(".lg-toolbar").append(c),b.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(c,d,e){var f=b.core.s.enableZoomAfter+e;a("body").hasClass("lg-from-hash")&&e?f=0:a("body").removeClass("lg-from-hash"),b.zoomabletimeout=setTimeout(function(){b.core.$slide.eq(d).addClass("lg-zoomable")},f+30)});var d=1,e=function(c){var d,e,f=b.core.$outer.find(".lg-current .lg-image"),g=(a(window).width()-f.prop("offsetWidth"))/2,h=(a(window).height()-f.prop("offsetHeight"))/2+a(window).scrollTop();d=b.pageX-g,e=b.pageY-h;var i=(c-1)*d,j=(c-1)*e;f.css("transform","scale3d("+c+", "+c+", 1)").attr("data-scale",c),b.core.s.useLeftForZoom?f.parent().css({left:-i+"px",top:-j+"px"}).attr("data-x",i).attr("data-y",j):f.parent().css("transform","translate3d(-"+i+"px, -"+j+"px, 0)").attr("data-x",i).attr("data-y",j)},f=function(){d>1?b.core.$outer.addClass("lg-zoomed"):b.resetZoom(),d<1&&(d=1),e(d)},g=function(c,e,g,h){var i,j=e.prop("offsetWidth");i=b.core.s.dynamic?b.core.s.dynamicEl[g].width||e[0].naturalWidth||j:b.core.$items.eq(g).attr("data-width")||e[0].naturalWidth||j;var k;b.core.$outer.hasClass("lg-zoomed")?d=1:i>j&&(k=i/j,d=k||2),h?(b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop()):(b.pageX=c.pageX||c.originalEvent.targetTouches[0].pageX,b.pageY=c.pageY||c.originalEvent.targetTouches[0].pageY),f(),setTimeout(function(){b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)},h=!1;b.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(a,c){var d=b.core.$slide.eq(c).find(".lg-image");d.on("dblclick",function(a){g(a,d,c)}),d.on("touchstart",function(a){h?(clearTimeout(h),h=null,g(a,d,c)):h=setTimeout(function(){h=null},300),a.preventDefault()})}),a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop(),e(d)}),a("#lg-zoom-out").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d-=b.core.s.scale,f())}),a("#lg-zoom-in").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d+=b.core.s.scale,f())}),a("#lg-actual-size").on("click.lg",function(a){g(a,b.core.$slide.eq(b.core.index).find(".lg-image"),b.core.index,!0)}),b.core.$el.on("onBeforeSlide.lg.tm",function(){d=1,b.resetZoom()}),b.zoomDrag(),b.zoomSwipe()},d.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()},d.prototype.zoomSwipe=function(){var a=this,b={},c={},d=!1,e=!1,f=!1;a.core.$slide.on("touchstart.lg",function(c){if(a.core.$outer.hasClass("lg-zoomed")){var d=a.core.$slide.eq(a.core.index).find(".lg-object");f=d.prop("offsetHeight")*d.attr("data-scale")>a.core.$outer.find(".lg").height(),e=d.prop("offsetWidth")*d.attr("data-scale")>a.core.$outer.find(".lg").width(),(e||f)&&(c.preventDefault(),b={x:c.originalEvent.targetTouches[0].pageX,y:c.originalEvent.targetTouches[0].pageY})}}),a.core.$slide.on("touchmove.lg",function(g){if(a.core.$outer.hasClass("lg-zoomed")){var h,i,j=a.core.$slide.eq(a.core.index).find(".lg-img-wrap");g.preventDefault(),d=!0,c={x:g.originalEvent.targetTouches[0].pageX,y:g.originalEvent.targetTouches[0].pageY},a.core.$outer.addClass("lg-zoom-dragging"),i=f?-Math.abs(j.attr("data-y"))+(c.y-b.y):-Math.abs(j.attr("data-y")),h=e?-Math.abs(j.attr("data-x"))+(c.x-b.x):-Math.abs(j.attr("data-x")),(Math.abs(c.x-b.x)>15||Math.abs(c.y-b.y)>15)&&(a.core.s.useLeftForZoom?j.css({left:h+"px",top:i+"px"}):j.css("transform","translate3d("+h+"px, "+i+"px, 0)"))}}),a.core.$slide.on("touchend.lg",function(){a.core.$outer.hasClass("lg-zoomed")&&d&&(d=!1,a.core.$outer.removeClass("lg-zoom-dragging"),a.touchendZoom(b,c,e,f))})},d.prototype.zoomDrag=function(){var b=this,c={},d={},e=!1,f=!1,g=!1,h=!1;b.core.$slide.on("mousedown.lg.zoom",function(d){var f=b.core.$slide.eq(b.core.index).find(".lg-object");h=f.prop("offsetHeight")*f.attr("data-scale")>b.core.$outer.find(".lg").height(),g=f.prop("offsetWidth")*f.attr("data-scale")>b.core.$outer.find(".lg").width(),b.core.$outer.hasClass("lg-zoomed")&&a(d.target).hasClass("lg-object")&&(g||h)&&(d.preventDefault(),c={x:d.pageX,y:d.pageY},e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.zoom",function(a){if(e){var i,j,k=b.core.$slide.eq(b.core.index).find(".lg-img-wrap");f=!0,d={x:a.pageX,y:a.pageY},b.core.$outer.addClass("lg-zoom-dragging"),j=h?-Math.abs(k.attr("data-y"))+(d.y-c.y):-Math.abs(k.attr("data-y")),i=g?-Math.abs(k.attr("data-x"))+(d.x-c.x):-Math.abs(k.attr("data-x")),b.core.s.useLeftForZoom?k.css({left:i+"px",top:j+"px"}):k.css("transform","translate3d("+i+"px, "+j+"px, 0)")}}),a(window).on("mouseup.lg.zoom",function(a){e&&(e=!1,b.core.$outer.removeClass("lg-zoom-dragging"),!f||c.x===d.x&&c.y===d.y||(d={x:a.pageX,y:a.pageY},b.touchendZoom(c,d,g,h)),f=!1),b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},d.prototype.touchendZoom=function(a,b,c,d){var e=this,f=e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),g=e.core.$slide.eq(e.core.index).find(".lg-object"),h=-Math.abs(f.attr("data-x"))+(b.x-a.x),i=-Math.abs(f.attr("data-y"))+(b.y-a.y),j=(e.core.$outer.find(".lg").height()-g.prop("offsetHeight"))/2,k=Math.abs(g.prop("offsetHeight")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").height()+j),l=(e.core.$outer.find(".lg").width()-g.prop("offsetWidth"))/2,m=Math.abs(g.prop("offsetWidth")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").width()+l);(Math.abs(b.x-a.x)>15||Math.abs(b.y-a.y)>15)&&(d&&(i<=-k?i=-k:i>=-j&&(i=-j)),c&&(h<=-m?h=-m:h>=-l&&(h=-l)),d?f.attr("data-y",Math.abs(i)):i=-Math.abs(f.attr("data-y")),c?f.attr("data-x",Math.abs(h)):h=-Math.abs(f.attr("data-x")),e.core.s.useLeftForZoom?f.css({left:h+"px",top:i+"px"}):f.css("transform","translate3d("+h+"px, "+i+"px, 0)"))},d.prototype.destroy=function(){var b=this;b.core.$el.off(".lg.zoom"),a(window).off(".lg.zoom"),b.core.$slide.off(".lg.zoom"),b.core.$el.off(".lg.tm.zoom"),b.resetZoom(),clearTimeout(b.zoomabletimeout),b.zoomabletimeout=!1},a.fn.lightGallery.modules.zoom=d}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(0,function(a){!function(){"use strict";var b={hash:!0},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.core.s.hash&&(this.oldHash=window.location.hash,this.init()),this};c.prototype.init=function(){var b,c=this;c.core.$el.on("onAfterSlide.lg.tm",function(a,b,d){history.replaceState?history.replaceState(null,null,window.location.pathname+window.location.search+"#lg="+c.core.s.galleryId+"&slide="+d):window.location.hash="lg="+c.core.s.galleryId+"&slide="+d}),a(window).on("hashchange.lg.hash",function(){b=window.location.hash;var a=parseInt(b.split("&slide=")[1],10);b.indexOf("lg="+c.core.s.galleryId)>-1?c.core.slide(a,!1,!1):c.core.lGalleryOn&&c.core.destroy()})},c.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?history.replaceState?history.replaceState(null,null,this.oldHash):window.location.hash=this.oldHash:history.replaceState?history.replaceState(null,document.title,window.location.pathname+window.location.search):window.location.hash="",this.core.$el.off(".lg.hash"))},a.fn.lightGallery.modules.hash=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(0,function(a){!function(){"use strict";var b={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",googlePlus:!0,googlePlusDropdownText:"GooglePlus",pinterest:!0,pinterestDropdownText:"Pinterest"},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.core.s.share&&this.init(),this};c.prototype.init=function(){var b=this,c='<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';c+=b.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+"</span></a></li>":"",c+=b.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+"</span></a></li>":"",c+=b.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+"</span></a></li>":"",c+=b.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+"</span></a></li>":"",c+="</ul></span>",this.core.$outer.find(".lg-toolbar").append(c),this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'),a("#lg-share").on("click.lg",function(){b.core.$outer.toggleClass("lg-dropdown-active")}),a("#lg-dropdown-overlay").on("click.lg",function(){b.core.$outer.removeClass("lg-dropdown-active")}),b.core.$el.on("onAfterSlide.lg.tm",function(c,d,e){setTimeout(function(){a("#lg-share-facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(b.getSahreProps(e,"facebookShareUrl")||window.location.href)),a("#lg-share-twitter").attr("href","https://twitter.com/intent/tweet?text="+b.getSahreProps(e,"tweetText")+"&url="+encodeURIComponent(b.getSahreProps(e,"twitterShareUrl")||window.location.href)),a("#lg-share-googleplus").attr("href","https://plus.google.com/share?url="+encodeURIComponent(b.getSahreProps(e,"googleplusShareUrl")||window.location.href)),a("#lg-share-pinterest").attr("href","http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(b.getSahreProps(e,"pinterestShareUrl")||window.location.href)+"&media="+encodeURIComponent(b.getSahreProps(e,"src"))+"&description="+b.getSahreProps(e,"pinterestText"))},100)})},c.prototype.getSahreProps=function(a,b){var c="";if(this.core.s.dynamic)c=this.core.s.dynamicEl[a][b];else{var d=this.core.$items.eq(a).attr("href"),e=this.core.$items.eq(a).data(b);c="src"===b?d||e:e}return c},c.prototype.destroy=function(){},a.fn.lightGallery.modules.share=c}()});
;// three.js - https://github.com/mrdoob/three.js
'use strict';
var THREE = THREE || {
    REVISION: "56"
};
self.console = self.console || {
    info: function() {},
    log: function() {},
    debug: function() {},
    warn: function() {},
    error: function() {}
};
self.Int32Array = self.Int32Array || Array;
self.Float32Array = self.Float32Array || Array;
String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "")
};
THREE.extend = function(a, b) {
    if (Object.keys)
        for (var c = Object.keys(b), d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            Object.defineProperty(a, f, Object.getOwnPropertyDescriptor(b, f))
        } else
            for (f in c = {}.hasOwnProperty, b) c.call(b, f) && (a[f] = b[f]);
    return a
};
(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function(b) {
        var c = Date.now(),
            f = Math.max(0, 16 - (c - a)),
            g = window.setTimeout(function() {
                b(c + f)
            }, f);
        a = c + f;
        return g
    });
    window.cancelAnimationFrame = window.cancelAnimationFrame ||
        function(a) {
            window.clearTimeout(a)
        }
})();
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = function() {};
THREE.CubeReflectionMapping = function() {};
THREE.CubeRefractionMapping = function() {};
THREE.SphericalReflectionMapping = function() {};
THREE.SphericalRefractionMapping = function() {};
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.Color = function(a) {
    void 0 !== a && this.set(a);
    return this
};
THREE.extend(THREE.Color.prototype, {
    r: 1,
    g: 1,
    b: 1,
    set: function(a) {
        switch (typeof a) {
            case "number":
                this.setHex(a);
                break;
            case "string":
                this.setStyle(a)
        }
    },
    setHex: function(a) {
        a = Math.floor(a);
        this.r = (a >> 16 & 255) / 255;
        this.g = (a >> 8 & 255) / 255;
        this.b = (a & 255) / 255;
        return this
    },
    setRGB: function(a, b, c) {
        this.r = a;
        this.g = b;
        this.b = c;
        return this
    },
    setHSV: function(a, b, c) {
        console.log("DEPRECATED: Color's .setHSV() will be removed. Use .setHSL( h, s, l ) instead.");
        return this.setHSL(a, b * c / (1 > (a = (2 - b) * c) ? a : 2 - a), a / 2)
    },
    setHSL: function(a,
        b, c) {
        if (0 === b) this.r = this.g = this.b = c;
        else {
            var d = function(a, b, c) {
                    0 > c && (c += 1);
                    1 < c && (c -= 1);
                    return c < 1 / 6 ? a + 6 * (b - a) * c : 0.5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
                },
                b = 0.5 >= c ? c * (1 + b) : c + b - c * b,
                c = 2 * c - b;
            this.r = d(c, b, a + 1 / 3);
            this.g = d(c, b, a);
            this.b = d(c, b, a - 1 / 3)
        }
        return this
    },
    setStyle: function(a) {
        if (/^rgb\((\d+),(\d+),(\d+)\)$/i.test(a)) return a = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec(a), this.r = Math.min(255, parseInt(a[1], 10)) / 255, this.g = Math.min(255, parseInt(a[2], 10)) / 255, this.b = Math.min(255, parseInt(a[3], 10)) / 255, this;
        if (/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(a)) return a =
            /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(a), this.r = Math.min(100, parseInt(a[1], 10)) / 100, this.g = Math.min(100, parseInt(a[2], 10)) / 100, this.b = Math.min(100, parseInt(a[3], 10)) / 100, this;
        if (/^\#([0-9a-f]{6})$/i.test(a)) return a = /^\#([0-9a-f]{6})$/i.exec(a), this.setHex(parseInt(a[1], 16)), this;
        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a)) return a = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a), this.setHex(parseInt(a[1] + a[1] + a[2] + a[2] + a[3] + a[3], 16)), this;
        if (/^(\w+)$/i.test(a)) return this.setHex(THREE.ColorKeywords[a]),
            this
    },
    copy: function(a) {
        this.r = a.r;
        this.g = a.g;
        this.b = a.b;
        return this
    },
    copyGammaToLinear: function(a) {
        this.r = a.r * a.r;
        this.g = a.g * a.g;
        this.b = a.b * a.b;
        return this
    },
    copyLinearToGamma: function(a) {
        this.r = Math.sqrt(a.r);
        this.g = Math.sqrt(a.g);
        this.b = Math.sqrt(a.b);
        return this
    },
    convertGammaToLinear: function() {
        var a = this.r,
            b = this.g,
            c = this.b;
        this.r = a * a;
        this.g = b * b;
        this.b = c * c;
        return this
    },
    convertLinearToGamma: function() {
        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);
        return this
    },
    getHex: function() {
        return 255 *
            this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function() {
        var a = {
            h: 0,
            s: 0,
            l: 0
        };
        return function() {
            var b = this.r,
                c = this.g,
                d = this.b,
                e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                g, h = (f + e) / 2;
            if (f === e) f = g = 0;
            else {
                var i = e - f,
                    f = 0.5 >= h ? i / (e + f) : i / (2 - e - f);
                switch (e) {
                    case b:
                        g = (c - d) / i + (c < d ? 6 : 0);
                        break;
                    case c:
                        g = (d - b) / i + 2;
                        break;
                    case d:
                        g = (b - c) / i + 4
                }
                g /= 6
            }
            a.h = g;
            a.s = f;
            a.l = h;
            return a
        }
    }(),
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) +
            "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(a, b, c) {
        var d = this.getHSL();
        d.h += a;
        d.s += b;
        d.l += c;
        this.setHSL(d.h, d.s, d.l);
        return this
    },
    add: function(a) {
        this.r += a.r;
        this.g += a.g;
        this.b += a.b;
        return this
    },
    addColors: function(a, b) {
        this.r = a.r + b.r;
        this.g = a.g + b.g;
        this.b = a.b + b.b;
        return this
    },
    addScalar: function(a) {
        this.r += a;
        this.g += a;
        this.b += a;
        return this
    },
    multiply: function(a) {
        this.r *= a.r;
        this.g *= a.g;
        this.b *= a.b;
        return this
    },
    multiplyScalar: function(a) {
        this.r *= a;
        this.g *= a;
        this.b *= a;
        return this
    },
    lerp: function(a, b) {
        this.r +=
            (a.r - this.r) * b;
        this.g += (a.g - this.g) * b;
        this.b += (a.b - this.b) * b;
        return this
    },
    clone: function() {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
});
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
THREE.Quaternion = function(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
};
THREE.extend(THREE.Quaternion.prototype, {
    set: function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w;
        return this
    },
    setFromEuler: function(a, b) {
        var c = Math.cos(a.x / 2),
            d = Math.cos(a.y / 2),
            e = Math.cos(a.z / 2),
            f = Math.sin(a.x / 2),
            g = Math.sin(a.y / 2),
            h = Math.sin(a.z / 2);
        void 0 === b || "XYZ" === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e - f * g * h) : "YXZ" === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h - f * g * e, this.w = c *
            d * e + f * g * h) : "ZXY" === b ? (this.x = f * d * e - c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e - f * g * h) : "ZYX" === b ? (this.x = f * d * e - c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e + f * g * h) : "YZX" === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e - f * g * h) : "XZY" === b && (this.x = f * d * e - c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e + f * g * h);
        return this
    },
    setFromAxisAngle: function(a, b) {
        var c = b / 2,
            d = Math.sin(c);
        this.x = a.x * d;
        this.y = a.y * d;
        this.z = a.z * d;
        this.w = Math.cos(c);
        return this
    },
    setFromRotationMatrix: function(a) {
        var b = a.elements,
            c = b[0],
            a = b[4],
            d = b[8],
            e = b[1],
            f = b[5],
            g = b[9],
            h = b[2],
            i = b[6],
            b = b[10],
            k = c + f + b;
        0 < k ? (c = 0.5 / Math.sqrt(k + 1), this.w = 0.25 / c, this.x = (i - g) * c, this.y = (d - h) * c, this.z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this.w = (i - g) / c, this.x = 0.25 * c, this.y = (a + e) / c, this.z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this.w = (d - h) / c, this.x = (a + e) / c, this.y = 0.25 * c, this.z = (g + i) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this.w = (e - a) / c, this.x = (d + h) / c, this.y = (g + i) / c, this.z = 0.25 * c);
        return this
    },
    inverse: function() {
        this.conjugate().normalize();
        return this
    },
    conjugate: function() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    normalize: function() {
        var a = this.length();
        0 === a ? (this.z = this.y = this.x = 0, this.w = 1) : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a);
        return this
    },
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
    },
    multiplyQuaternions: function(a, b) {
        var c = a.x,
            d = a.y,
            e = a.z,
            f = a.w,
            g = b.x,
            h = b.y,
            i = b.z,
            k = b.w;
        this.x = c * k + f * g + d * i - e * h;
        this.y = d * k + f * h + e * g - c * i;
        this.z = e * k + f * i + c * h - d * g;
        this.w = f * k - c * g - d * h - e * i;
        return this
    },
    multiplyVector3: function(a) {
        console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a.applyQuaternion(this)
    },
    slerp: function(a, b) {
        var c = this.x,
            d = this.y,
            e = this.z,
            f = this.w,
            g = f * a.w + c * a.x + d * a.y + e * a.z;
        0 > g ? (this.w = -a.w, this.x = -a.x, this.y = -a.y, this.z = -a.z, g = -g) : this.copy(a);
        if (1 <= g) return this.w = f, this.x = c, this.y = d, this.z = e, this;
        var h = Math.acos(g),
            i = Math.sqrt(1 - g * g);
        if (0.001 > Math.abs(i)) return this.w = 0.5 * (f + this.w), this.x = 0.5 * (c + this.x), this.y = 0.5 * (d + this.y), this.z = 0.5 * (e + this.z), this;
        g = Math.sin((1 - b) * h) / i;
        h = Math.sin(b * h) / i;
        this.w = f * g + this.w * h;
        this.x = c * g + this.x * h;
        this.y = d * g + this.y * h;
        this.z = e * g + this.z * h;
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y ===
            this.y && a.z === this.z && a.w === this.w
    },
    clone: function() {
        return new THREE.Quaternion(this.x, this.y, this.z, this.w)
    }
});
THREE.Quaternion.slerp = function(a, b, c, d) {
    return c.copy(a).slerp(b, d)
};
THREE.Vector2 = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
};
THREE.extend(THREE.Vector2.prototype, {
    set: function(a, b) {
        this.x = a;
        this.y = b;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },
    add: function(a, b) {
        if (void 0 !==
            b) return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        return this
    },
    divideScalar: function(a) {
        0 !== a ? (this.x /= a, this.y /= a) : this.set(0, 0);
        return this
    },
    min: function(a) {
        this.x > a.x && (this.x = a.x);
        this.y > a.y && (this.y = a.y);
        return this
    },
    max: function(a) {
        this.x < a.x && (this.x = a.x);
        this.y < a.y && (this.y = a.y);
        return this
    },
    clamp: function(a, b) {
        this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
        this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x,
            a = this.y - a.y;
        return b * b + a * a
    },
    setLength: function(a) {
        var b = this.length();
        0 !== b && a !== b && this.multiplyScalar(a / b);
        return this
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) *
            b;
        this.y += (a.y - this.y) * b;
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y
    },
    toArray: function() {
        return [this.x, this.y]
    },
    clone: function() {
        return new THREE.Vector2(this.x, this.y)
    }
});
THREE.Vector3 = function(a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
};
THREE.extend(THREE.Vector3.prototype, {
    set: function(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setZ: function(a) {
        this.z = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " +
                    a);
        }
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this
    },
    multiply: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },
    multiplyVectors: function(a, b) {
        this.x = a.x *
            b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this
    },
    applyMatrix3: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements;
        this.x = a[0] * b + a[3] * c + a[6] * d;
        this.y = a[1] * b + a[4] * c + a[7] * d;
        this.z = a[2] * b + a[5] * c + a[8] * d;
        return this
    },
    applyMatrix4: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
        return this
    },
    applyProjection: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements,
            e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
        this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
        this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
        this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
        return this
    },
    applyQuaternion: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            e = a.x,
            f = a.y,
            g = a.z,
            a = a.w,
            h = a * b + f * d - g * c,
            i = a * c + g * b - e * d,
            k = a * d + e * c - f * b,
            b = -e * b - f * c - g * d;
        this.x = h * a + b * -e + i * -g - k * -f;
        this.y = i * a + b * -f + k * -e - h * -g;
        this.z = k * a + b * -g + h * -f - i * -e;
        return this
    },
    applyEuler: function() {
        var a = new THREE.Quaternion;
        return function(b, c) {
            var d = a.setFromEuler(b, c);
            this.applyQuaternion(d);
            return this
        }
    }(),
    applyAxisAngle: function() {
        var a =
            new THREE.Quaternion;
        return function(b, c) {
            var d = a.setFromAxisAngle(b, c);
            this.applyQuaternion(d);
            return this
        }
    }(),
    transformDirection: function(a) {
        var b = this.x,
            c = this.y,
            d = this.z,
            a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d;
        this.y = a[1] * b + a[5] * c + a[9] * d;
        this.z = a[2] * b + a[6] * c + a[10] * d;
        this.normalize();
        return this
    },
    divide: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },
    divideScalar: function(a) {
        0 !== a ? (this.x /= a, this.y /= a, this.z /= a) : this.z = this.y = this.x = 0;
        return this
    },
    min: function(a) {
        this.x > a.x && (this.x =
            a.x);
        this.y > a.y && (this.y = a.y);
        this.z > a.z && (this.z = a.z);
        return this
    },
    max: function(a) {
        this.x < a.x && (this.x = a.x);
        this.y < a.y && (this.y = a.y);
        this.z < a.z && (this.z = a.z);
        return this
    },
    clamp: function(a, b) {
        this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
        this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
        this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y *
            this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(a) {
        var b = this.length();
        0 !== b && a !== b && this.multiplyScalar(a / b);
        return this
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        return this
    },
    cross: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(a, b);
        var c = this.x,
            d = this.y,
            e = this.z;
        this.x = d * a.z - e * a.y;
        this.y = e * a.x - c * a.z;
        this.z = c * a.y - d * a.x;
        return this
    },
    crossVectors: function(a, b) {
        this.x = a.y * b.z - a.z * b.y;
        this.y = a.z * b.x - a.x * b.z;
        this.z = a.x * b.y - a.y * b.x;
        return this
    },
    projectOnVector: function() {
        var a = new THREE.Vector3;
        return function(b) {
            a.copy(b).normalize();
            b = this.dot(a);
            return this.copy(a).multiplyScalar(b)
        }
    }(),
    projectOnPlane: function() {
        var a = new THREE.Vector3;
        return function(b) {
            a.copy(this).projectOnVector(b);
            return this.sub(a)
        }
    }(),
    reflect: function() {
        var a = new THREE.Vector3;
        return function(b) {
            a.copy(this).projectOnVector(b).multiplyScalar(2);
            return this.subVectors(a, this)
        }
    }(),
    angleTo: function(a) {
        a = this.dot(a) / (this.length() * a.length());
        return Math.acos(THREE.Math.clamp(a, -1, 1))
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x,
            c = this.y - a.y,
            a = this.z - a.z;
        return b * b + c * c + a * a
    },
    getPositionFromMatrix: function(a) {
        this.x = a.elements[12];
        this.y = a.elements[13];
        this.z = a.elements[14];
        return this
    },
    setEulerFromRotationMatrix: function(a, b) {
        function c(a) {
            return Math.min(Math.max(a, -1), 1)
        }
        var d = a.elements,
            e = d[0],
            f = d[4],
            g = d[8],
            h = d[1],
            i = d[5],
            k = d[9],
            l = d[2],
            m = d[6],
            d = d[10];
        void 0 === b || "XYZ" === b ? (this.y = Math.asin(c(g)), 0.99999 > Math.abs(g) ? (this.x = Math.atan2(-k, d), this.z = Math.atan2(-f, e)) : (this.x = Math.atan2(m, i), this.z = 0)) : "YXZ" === b ? (this.x = Math.asin(-c(k)), 0.99999 > Math.abs(k) ? (this.y = Math.atan2(g, d), this.z = Math.atan2(h, i)) : (this.y = Math.atan2(-l, e), this.z = 0)) : "ZXY" === b ? (this.x = Math.asin(c(m)),
            0.99999 > Math.abs(m) ? (this.y = Math.atan2(-l, d), this.z = Math.atan2(-f, i)) : (this.y = 0, this.z = Math.atan2(h, e))) : "ZYX" === b ? (this.y = Math.asin(-c(l)), 0.99999 > Math.abs(l) ? (this.x = Math.atan2(m, d), this.z = Math.atan2(h, e)) : (this.x = 0, this.z = Math.atan2(-f, i))) : "YZX" === b ? (this.z = Math.asin(c(h)), 0.99999 > Math.abs(h) ? (this.x = Math.atan2(-k, i), this.y = Math.atan2(-l, e)) : (this.x = 0, this.y = Math.atan2(g, d))) : "XZY" === b && (this.z = Math.asin(-c(f)), 0.99999 > Math.abs(f) ? (this.x = Math.atan2(m, i), this.y = Math.atan2(g, e)) : (this.x = Math.atan2(-k,
            d), this.y = 0));
        return this
    },
    setEulerFromQuaternion: function(a, b) {
        function c(a) {
            return Math.min(Math.max(a, -1), 1)
        }
        var d = a.x * a.x,
            e = a.y * a.y,
            f = a.z * a.z,
            g = a.w * a.w;
        void 0 === b || "XYZ" === b ? (this.x = Math.atan2(2 * (a.x * a.w - a.y * a.z), g - d - e + f), this.y = Math.asin(c(2 * (a.x * a.z + a.y * a.w))), this.z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g + d - e - f)) : "YXZ" === b ? (this.x = Math.asin(c(2 * (a.x * a.w - a.y * a.z))), this.y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g - d - e + f), this.z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g - d + e - f)) : "ZXY" === b ? (this.x = Math.asin(c(2 * (a.x * a.w +
            a.y * a.z))), this.y = Math.atan2(2 * (a.y * a.w - a.z * a.x), g - d - e + f), this.z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g - d + e - f)) : "ZYX" === b ? (this.x = Math.atan2(2 * (a.x * a.w + a.z * a.y), g - d - e + f), this.y = Math.asin(c(2 * (a.y * a.w - a.x * a.z))), this.z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g + d - e - f)) : "YZX" === b ? (this.x = Math.atan2(2 * (a.x * a.w - a.z * a.y), g - d + e - f), this.y = Math.atan2(2 * (a.y * a.w - a.x * a.z), g + d - e - f), this.z = Math.asin(c(2 * (a.x * a.y + a.z * a.w)))) : "XZY" === b && (this.x = Math.atan2(2 * (a.x * a.w + a.y * a.z), g - d + e - f), this.y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g + d -
            e - f), this.z = Math.asin(c(2 * (a.z * a.w - a.x * a.y))));
        return this
    },
    getScaleFromMatrix: function(a) {
        var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(),
            c = this.set(a.elements[4], a.elements[5], a.elements[6]).length(),
            a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
        this.x = b;
        this.y = c;
        this.z = a;
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    },
    toArray: function() {
        return [this.x, this.y, this.z]
    },
    clone: function() {
        return new THREE.Vector3(this.x, this.y, this.z)
    }
});
THREE.Vector4 = function(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
};
THREE.extend(THREE.Vector4.prototype, {
    set: function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setZ: function(a) {
        this.z = a;
        return this
    },
    setW: function(a) {
        this.w = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + a);
        }
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = void 0 !== a.w ? a.w : 1;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        this.w += a;
        return this
    },
    addVectors: function(a,
        b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.w = a.w + b.w;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b) return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        this.w = a.w - b.w;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
        return this
    },
    applyMatrix4: function(a) {
        var b =
            this.x,
            c = this.y,
            d = this.z,
            e = this.w,
            a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
        this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
        return this
    },
    divideScalar: function(a) {
        0 !== a ? (this.x /= a, this.y /= a, this.z /= a, this.w /= a) : (this.z = this.y = this.x = 0, this.w = 1);
        return this
    },
    setAxisAngleFromQuaternion: function(a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
        return this
    },
    setAxisAngleFromRotationMatrix: function(a) {
        var b, c, d, a = a.elements,
            e = a[0];
        d = a[4];
        var f = a[8],
            g = a[1],
            h = a[5],
            i = a[9];
        c = a[2];
        b = a[6];
        var k = a[10];
        if (0.01 > Math.abs(d - g) && 0.01 > Math.abs(f - c) && 0.01 > Math.abs(i - b)) {
            if (0.1 > Math.abs(d + g) && 0.1 > Math.abs(f + c) && 0.1 > Math.abs(i + b) && 0.1 > Math.abs(e + h + k - 3)) return this.set(1, 0, 0, 0), this;
            a = Math.PI;
            e = (e + 1) / 2;
            h = (h + 1) / 2;
            k = (k + 1) / 2;
            d = (d + g) / 4;
            f = (f + c) / 4;
            i = (i + b) / 4;
            e > h && e > k ? 0.01 > e ? (b = 0, d = c = 0.707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > k ? 0.01 > h ? (b = 0.707106781, c = 0, d = 0.707106781) : (c = Math.sqrt(h),
                b = d / c, d = i / c) : 0.01 > k ? (c = b = 0.707106781, d = 0) : (d = Math.sqrt(k), b = f / d, c = i / d);
            this.set(b, c, d, a);
            return this
        }
        a = Math.sqrt((b - i) * (b - i) + (f - c) * (f - c) + (g - d) * (g - d));
        0.001 > Math.abs(a) && (a = 1);
        this.x = (b - i) / a;
        this.y = (f - c) / a;
        this.z = (g - d) / a;
        this.w = Math.acos((e + h + k - 1) / 2);
        return this
    },
    min: function(a) {
        this.x > a.x && (this.x = a.x);
        this.y > a.y && (this.y = a.y);
        this.z > a.z && (this.z = a.z);
        this.w > a.w && (this.w = a.w);
        return this
    },
    max: function(a) {
        this.x < a.x && (this.x = a.x);
        this.y < a.y && (this.y = a.y);
        this.z < a.z && (this.z = a.z);
        this.w < a.w && (this.w =
            a.w);
        return this
    },
    clamp: function(a, b) {
        this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
        this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
        this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
        this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y +
            this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(a) {
        var b = this.length();
        0 !== b && a !== b && this.multiplyScalar(a / b);
        return this
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        this.w += (a.w - this.w) * b;
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
    },
    toArray: function() {
        return [this.x,
            this.y, this.z, this.w
        ]
    },
    clone: function() {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    }
});
THREE.Line3 = function(a, b) {
    this.start = void 0 !== a ? a : new THREE.Vector3;
    this.end = void 0 !== b ? b : new THREE.Vector3
};
THREE.extend(THREE.Line3.prototype, {
    set: function(a, b) {
        this.start.copy(a);
        this.end.copy(b);
        return this
    },
    copy: function(a) {
        this.start.copy(a.start);
        this.end.copy(a.end);
        return this
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(0.5)
    },
    delta: function(a) {
        return (a || new THREE.Vector3).subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(a,
        b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    closestPointToPointParameter: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d) {
            a.subVectors(c, this.start);
            b.subVectors(this.end, this.start);
            var e = b.dot(b),
                e = b.dot(a) / e;
            d && (e = THREE.Math.clamp(e, 0, 1));
            return e
        }
    }(),
    closestPointToPoint: function(a, b, c) {
        a = this.closestPointToPointParameter(a, b);
        c = c || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    applyMatrix4: function(a) {
        this.start.applyMatrix4(a);
        this.end.applyMatrix4(a);
        return this
    },
    equals: function(a) {
        return a.start.equals(this.start) && a.end.equals(this.end)
    },
    clone: function() {
        return (new THREE.Line3).copy(this)
    }
});
THREE.Box2 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector2(Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity)
};
THREE.extend(THREE.Box2.prototype, {
    set: function(a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    },
    setFromPoints: function(a) {
        if (0 < a.length) {
            var b = a[0];
            this.min.copy(b);
            this.max.copy(b);
            for (var c = 1, d = a.length; c < d; c++) b = a[c], b.x < this.min.x ? this.min.x = b.x : b.x > this.max.x && (this.max.x = b.x), b.y < this.min.y ? this.min.y = b.y : b.y > this.max.y && (this.max.y = b.y)
        } else this.makeEmpty();
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector2;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(0.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(),
    copy: function(a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    },
    makeEmpty: function() {
        this.min.x = this.min.y = Infinity;
        this.max.x = this.max.y = -Infinity;
        return this
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(a) {
        return (a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(0.5)
    },
    size: function(a) {
        return (a || new THREE.Vector2).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        this.min.min(a);
        this.max.max(a);
        return this
    },
    expandByVector: function(a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    },
    expandByScalar: function(a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(a) {
        return new THREE.Vector2((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) /
            (this.max.y - this.min.y))
    },
    isIntersectionBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector2;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    intersect: function(a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    },
    union: function(a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    },
    translate: function(a) {
        this.min.add(a);
        this.max.add(a);
        return this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    },
    clone: function() {
        return (new THREE.Box2).copy(this)
    }
});
THREE.Box3 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity)
};
THREE.extend(THREE.Box3.prototype, {
    set: function(a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    },
    setFromPoints: function(a) {
        if (0 < a.length) {
            var b = a[0];
            this.min.copy(b);
            this.max.copy(b);
            for (var c = 1, d = a.length; c < d; c++) b = a[c], b.x < this.min.x ? this.min.x = b.x : b.x > this.max.x && (this.max.x = b.x), b.y < this.min.y ? this.min.y = b.y : b.y > this.max.y && (this.max.y = b.y), b.z < this.min.z ? this.min.z = b.z : b.z > this.max.z && (this.max.z = b.z)
        } else this.makeEmpty();
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(0.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(),
    copy: function(a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    },
    makeEmpty: function() {
        this.min.x = this.min.y = this.min.z = Infinity;
        this.max.x = this.max.y = this.max.z = -Infinity;
        return this
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(0.5)
    },
    size: function(a) {
        return (a || new THREE.Vector3).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        this.min.min(a);
        this.max.max(a);
        return this
    },
    expandByVector: function(a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    },
    expandByScalar: function(a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <=
            this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(a) {
        return new THREE.Vector3((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
    },
    isIntersectionBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector3).copy(a).clamp(this.min,
            this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    getBoundingSphere: function() {
        var a = new THREE.Vector3;
        return function(b) {
            b = b || new THREE.Sphere;
            b.center = this.center();
            b.radius = 0.5 * this.size(a).length();
            return b
        }
    }(),
    intersect: function(a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    },
    union: function(a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    },
    applyMatrix4: function() {
        var a = [new THREE.Vector3,
            new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3
        ];
        return function(b) {
            a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
            a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
            a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
            a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
            a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
            a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
            a[6].set(this.max.x,
                this.max.y, this.min.z).applyMatrix4(b);
            a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
            this.makeEmpty();
            this.setFromPoints(a);
            return this
        }
    }(),
    translate: function(a) {
        this.min.add(a);
        this.max.add(a);
        return this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    },
    clone: function() {
        return (new THREE.Box3).copy(this)
    }
});
THREE.Matrix3 = function(a, b, c, d, e, f, g, h, i) {
    this.elements = new Float32Array(9);
    this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, void 0 !== e ? e : 1, f || 0, g || 0, h || 0, void 0 !== i ? i : 1)
};
THREE.extend(THREE.Matrix3.prototype, {
    set: function(a, b, c, d, e, f, g, h, i) {
        var k = this.elements;
        k[0] = a;
        k[3] = b;
        k[6] = c;
        k[1] = d;
        k[4] = e;
        k[7] = f;
        k[2] = g;
        k[5] = h;
        k[8] = i;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this
    },
    copy: function(a) {
        a = a.elements;
        this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
        return this
    },
    multiplyVector3: function(a) {
        console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
        return a.applyMatrix3(this)
    },
    multiplyVector3Array: function() {
        var a =
            new THREE.Vector3;
        return function(b) {
            for (var c = 0, d = b.length; c < d; c += 3) a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix3(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
            return b
        }
    }(),
    multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[3] *= a;
        b[6] *= a;
        b[1] *= a;
        b[4] *= a;
        b[7] *= a;
        b[2] *= a;
        b[5] *= a;
        b[8] *= a;
        return this
    },
    determinant: function() {
        var a = this.elements,
            b = a[0],
            c = a[1],
            d = a[2],
            e = a[3],
            f = a[4],
            g = a[5],
            h = a[6],
            i = a[7],
            a = a[8];
        return b * f * a - b * g * i - c * e * a + c * g * h + d * e * i - d * f * h
    },
    getInverse: function(a, b) {
        var c = a.elements,
            d = this.elements;
        d[0] = c[10] * c[5] - c[6] * c[9];
        d[1] = -c[10] * c[1] + c[2] * c[9];
        d[2] = c[6] * c[1] - c[2] * c[5];
        d[3] = -c[10] * c[4] + c[6] * c[8];
        d[4] = c[10] * c[0] - c[2] * c[8];
        d[5] = -c[6] * c[0] + c[2] * c[4];
        d[6] = c[9] * c[4] - c[5] * c[8];
        d[7] = -c[9] * c[0] + c[1] * c[8];
        d[8] = c[5] * c[0] - c[1] * c[4];
        c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
        if (0 === c) {
            if (b) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this
        }
        this.multiplyScalar(1 / c);
        return this
    },
    transpose: function() {
        var a,
            b = this.elements;
        a = b[1];
        b[1] = b[3];
        b[3] = a;
        a = b[2];
        b[2] = b[6];
        b[6] = a;
        a = b[5];
        b[5] = b[7];
        b[7] = a;
        return this
    },
    getNormalMatrix: function(a) {
        this.getInverse(a).transpose();
        return this
    },
    transposeIntoArray: function(a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[3];
        a[2] = b[6];
        a[3] = b[1];
        a[4] = b[4];
        a[5] = b[7];
        a[6] = b[2];
        a[7] = b[5];
        a[8] = b[8];
        return this
    },
    clone: function() {
        var a = this.elements;
        return new THREE.Matrix3(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8])
    }
});
THREE.Matrix4 = function(a, b, c, d, e, f, g, h, i, k, l, m, n, s, r, p) {
    var q = this.elements = new Float32Array(16);
    q[0] = void 0 !== a ? a : 1;
    q[4] = b || 0;
    q[8] = c || 0;
    q[12] = d || 0;
    q[1] = e || 0;
    q[5] = void 0 !== f ? f : 1;
    q[9] = g || 0;
    q[13] = h || 0;
    q[2] = i || 0;
    q[6] = k || 0;
    q[10] = void 0 !== l ? l : 1;
    q[14] = m || 0;
    q[3] = n || 0;
    q[7] = s || 0;
    q[11] = r || 0;
    q[15] = void 0 !== p ? p : 1
};
THREE.extend(THREE.Matrix4.prototype, {
    set: function(a, b, c, d, e, f, g, h, i, k, l, m, n, s, r, p) {
        var q = this.elements;
        q[0] = a;
        q[4] = b;
        q[8] = c;
        q[12] = d;
        q[1] = e;
        q[5] = f;
        q[9] = g;
        q[13] = h;
        q[2] = i;
        q[6] = k;
        q[10] = l;
        q[14] = m;
        q[3] = n;
        q[7] = s;
        q[11] = r;
        q[15] = p;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    copy: function(a) {
        a = a.elements;
        this.set(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]);
        return this
    },
    setRotationFromEuler: function(a, b) {
        var c = this.elements,
            d = a.x,
            e = a.y,
            f = a.z,
            g = Math.cos(d),
            d = Math.sin(d),
            h = Math.cos(e),
            e = Math.sin(e),
            i = Math.cos(f),
            f = Math.sin(f);
        if (void 0 === b || "XYZ" === b) {
            var k = g * i,
                l = g * f,
                m = d * i,
                n = d * f;
            c[0] = h * i;
            c[4] = -h * f;
            c[8] = e;
            c[1] = l + m * e;
            c[5] = k - n * e;
            c[9] = -d * h;
            c[2] = n - k * e;
            c[6] = m + l * e;
            c[10] = g * h
        } else "YXZ" === b ? (k = h * i, l = h * f, m = e * i, n = e * f, c[0] = k + n * d, c[4] = m * d - l, c[8] = g * e, c[1] = g * f, c[5] = g * i, c[9] = -d, c[2] = l * d - m, c[6] = n + k * d, c[10] = g * h) : "ZXY" === b ? (k = h * i, l = h * f, m = e * i, n = e * f, c[0] = k - n * d, c[4] = -g * f, c[8] = m + l * d, c[1] = l + m * d, c[5] = g * i, c[9] = n - k * d, c[2] = -g * e, c[6] = d, c[10] = g * h) :
            "ZYX" === b ? (k = g * i, l = g * f, m = d * i, n = d * f, c[0] = h * i, c[4] = m * e - l, c[8] = k * e + n, c[1] = h * f, c[5] = n * e + k, c[9] = l * e - m, c[2] = -e, c[6] = d * h, c[10] = g * h) : "YZX" === b ? (k = g * h, l = g * e, m = d * h, n = d * e, c[0] = h * i, c[4] = n - k * f, c[8] = m * f + l, c[1] = f, c[5] = g * i, c[9] = -d * i, c[2] = -e * i, c[6] = l * f + m, c[10] = k - n * f) : "XZY" === b && (k = g * h, l = g * e, m = d * h, n = d * e, c[0] = h * i, c[4] = -f, c[8] = e * i, c[1] = k * f + n, c[5] = g * i, c[9] = l * f - m, c[2] = m * f - l, c[6] = d * i, c[10] = n * f + k);
        return this
    },
    setRotationFromQuaternion: function(a) {
        var b = this.elements,
            c = a.x,
            d = a.y,
            e = a.z,
            f = a.w,
            g = c + c,
            h = d + d,
            i = e + e,
            a = c * g,
            k = c * h,
            c = c * i,
            l = d * h,
            d = d * i,
            e = e * i,
            g = f * g,
            h = f * h,
            f = f * i;
        b[0] = 1 - (l + e);
        b[4] = k - f;
        b[8] = c + h;
        b[1] = k + f;
        b[5] = 1 - (a + e);
        b[9] = d - g;
        b[2] = c - h;
        b[6] = d + g;
        b[10] = 1 - (a + l);
        return this
    },
    lookAt: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3,
            c = new THREE.Vector3;
        return function(d, e, f) {
            var g = this.elements;
            c.subVectors(d, e).normalize();
            0 === c.length() && (c.z = 1);
            a.crossVectors(f, c).normalize();
            0 === a.length() && (c.x += 1E-4, a.crossVectors(f, c).normalize());
            b.crossVectors(c, a);
            g[0] = a.x;
            g[4] = b.x;
            g[8] = c.x;
            g[1] = a.y;
            g[5] = b.y;
            g[9] = c.y;
            g[2] = a.z;
            g[6] = b.z;
            g[10] = c.z;
            return this
        }
    }(),
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
    },
    multiplyMatrices: function(a, b) {
        var c = a.elements,
            d = b.elements,
            e = this.elements,
            f = c[0],
            g = c[4],
            h = c[8],
            i = c[12],
            k = c[1],
            l = c[5],
            m = c[9],
            n = c[13],
            s = c[2],
            r = c[6],
            p = c[10],
            q = c[14],
            y = c[3],
            v = c[7],
            z = c[11],
            c = c[15],
            t = d[0],
            A = d[4],
            I = d[8],
            C = d[12],
            x = d[1],
            G = d[5],
            J = d[9],
            E = d[13],
            H = d[2],
            B = d[6],
            W = d[10],
            F = d[14],
            K = d[3],
            L = d[7],
            U = d[11],
            d = d[15];
        e[0] = f * t + g * x + h * H + i * K;
        e[4] = f * A + g * G + h * B + i * L;
        e[8] = f * I + g * J + h * W + i * U;
        e[12] = f * C + g * E + h * F + i * d;
        e[1] = k * t + l * x + m * H + n * K;
        e[5] = k * A + l * G + m * B + n * L;
        e[9] = k * I + l * J + m * W + n * U;
        e[13] = k * C + l * E + m * F + n * d;
        e[2] = s * t + r * x + p * H + q * K;
        e[6] = s * A + r * G + p * B + q * L;
        e[10] = s * I + r * J + p * W + q * U;
        e[14] = s * C + r * E + p * F + q * d;
        e[3] = y * t + v * x + z * H + c * K;
        e[7] = y * A + v * G + z * B + c * L;
        e[11] = y * I + v * J + z * W + c * U;
        e[15] = y * C + v * E + z * F + c * d;
        return this
    },
    multiplyToArray: function(a, b, c) {
        var d = this.elements;
        this.multiplyMatrices(a, b);
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        c[3] = d[3];
        c[4] = d[4];
        c[5] = d[5];
        c[6] = d[6];
        c[7] = d[7];
        c[8] = d[8];
        c[9] = d[9];
        c[10] = d[10];
        c[11] = d[11];
        c[12] = d[12];
        c[13] = d[13];
        c[14] = d[14];
        c[15] = d[15];
        return this
    },
    multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[4] *= a;
        b[8] *= a;
        b[12] *= a;
        b[1] *= a;
        b[5] *= a;
        b[9] *= a;
        b[13] *= a;
        b[2] *= a;
        b[6] *= a;
        b[10] *= a;
        b[14] *= a;
        b[3] *= a;
        b[7] *= a;
        b[11] *= a;
        b[15] *= a;
        return this
    },
    multiplyVector3: function(a) {
        console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
        return a.applyProjection(this)
    },
    multiplyVector4: function(a) {
        console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a.applyMatrix4(this)
    },
    multiplyVector3Array: function() {
        var a = new THREE.Vector3;
        return function(b) {
            for (var c = 0, d = b.length; c < d; c += 3) a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyProjection(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
            return b
        }
    }(),
    rotateAxis: function(a) {
        var b = this.elements,
            c = a.x,
            d = a.y,
            e = a.z;
        a.x = c * b[0] + d * b[4] + e * b[8];
        a.y =
            c * b[1] + d * b[5] + e * b[9];
        a.z = c * b[2] + d * b[6] + e * b[10];
        a.normalize();
        return a
    },
    crossVector: function(a) {
        var b = this.elements,
            c = new THREE.Vector4;
        c.x = b[0] * a.x + b[4] * a.y + b[8] * a.z + b[12] * a.w;
        c.y = b[1] * a.x + b[5] * a.y + b[9] * a.z + b[13] * a.w;
        c.z = b[2] * a.x + b[6] * a.y + b[10] * a.z + b[14] * a.w;
        c.w = a.w ? b[3] * a.x + b[7] * a.y + b[11] * a.z + b[15] * a.w : 1;
        return c
    },
    determinant: function() {
        var a = this.elements,
            b = a[0],
            c = a[4],
            d = a[8],
            e = a[12],
            f = a[1],
            g = a[5],
            h = a[9],
            i = a[13],
            k = a[2],
            l = a[6],
            m = a[10],
            n = a[14];
        return a[3] * (+e * h * l - d * i * l - e * g * m + c * i * m + d * g * n - c * h * n) + a[7] *
            (+b * h * n - b * i * m + e * f * m - d * f * n + d * i * k - e * h * k) + a[11] * (+b * i * l - b * g * n - e * f * l + c * f * n + e * g * k - c * i * k) + a[15] * (-d * g * k - b * h * l + b * g * m + d * f * l - c * f * m + c * h * k)
    },
    transpose: function() {
        var a = this.elements,
            b;
        b = a[1];
        a[1] = a[4];
        a[4] = b;
        b = a[2];
        a[2] = a[8];
        a[8] = b;
        b = a[6];
        a[6] = a[9];
        a[9] = b;
        b = a[3];
        a[3] = a[12];
        a[12] = b;
        b = a[7];
        a[7] = a[13];
        a[13] = b;
        b = a[11];
        a[11] = a[14];
        a[14] = b;
        return this
    },
    flattenToArray: function(a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];
        a[9] = b[9];
        a[10] = b[10];
        a[11] =
            b[11];
        a[12] = b[12];
        a[13] = b[13];
        a[14] = b[14];
        a[15] = b[15];
        return a
    },
    flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        a[b + 9] = c[9];
        a[b + 10] = c[10];
        a[b + 11] = c[11];
        a[b + 12] = c[12];
        a[b + 13] = c[13];
        a[b + 14] = c[14];
        a[b + 15] = c[15];
        return a
    },
    getPosition: function() {
        var a = new THREE.Vector3;
        return function() {
            console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");
            var b = this.elements;
            return a.set(b[12], b[13], b[14])
        }
    }(),
    setPosition: function(a) {
        var b = this.elements;
        b[12] = a.x;
        b[13] = a.y;
        b[14] = a.z;
        return this
    },
    getInverse: function(a, b) {
        var c = this.elements,
            d = a.elements,
            e = d[0],
            f = d[4],
            g = d[8],
            h = d[12],
            i = d[1],
            k = d[5],
            l = d[9],
            m = d[13],
            n = d[2],
            s = d[6],
            r = d[10],
            p = d[14],
            q = d[3],
            y = d[7],
            v = d[11],
            z = d[15];
        c[0] = l * p * y - m * r * y + m * s * v - k * p * v - l * s * z + k * r * z;
        c[4] = h * r * y - g * p * y - h * s * v + f * p * v + g * s * z - f * r * z;
        c[8] = g * m * y - h * l * y + h * k * v - f * m * v - g * k * z + f * l * z;
        c[12] = h * l * s - g * m * s - h * k * r + f * m * r + g * k * p - f * l * p;
        c[1] = m * r * q - l * p * q -
            m * n * v + i * p * v + l * n * z - i * r * z;
        c[5] = g * p * q - h * r * q + h * n * v - e * p * v - g * n * z + e * r * z;
        c[9] = h * l * q - g * m * q - h * i * v + e * m * v + g * i * z - e * l * z;
        c[13] = g * m * n - h * l * n + h * i * r - e * m * r - g * i * p + e * l * p;
        c[2] = k * p * q - m * s * q + m * n * y - i * p * y - k * n * z + i * s * z;
        c[6] = h * s * q - f * p * q - h * n * y + e * p * y + f * n * z - e * s * z;
        c[10] = f * m * q - h * k * q + h * i * y - e * m * y - f * i * z + e * k * z;
        c[14] = h * k * n - f * m * n - h * i * s + e * m * s + f * i * p - e * k * p;
        c[3] = l * s * q - k * r * q - l * n * y + i * r * y + k * n * v - i * s * v;
        c[7] = f * r * q - g * s * q + g * n * y - e * r * y - f * n * v + e * s * v;
        c[11] = g * k * q - f * l * q - g * i * y + e * l * y + f * i * v - e * k * v;
        c[15] = f * l * n - g * k * n + g * i * s - e * l * s - f * i * r + e * k * r;
        c = d[0] * c[0] + d[1] * c[4] +
            d[2] * c[8] + d[3] * c[12];
        if (0 == c) {
            if (b) throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this
        }
        this.multiplyScalar(1 / c);
        return this
    },
    compose: function() {
        var a = new THREE.Matrix4,
            b = new THREE.Matrix4;
        return function(c, d, e) {
            var f = this.elements;
            a.identity();
            a.setRotationFromQuaternion(d);
            b.makeScale(e.x, e.y, e.z);
            this.multiplyMatrices(a, b);
            f[12] = c.x;
            f[13] = c.y;
            f[14] = c.z;
            return this
        }
    }(),
    decompose: function() {
        var a =
            new THREE.Vector3,
            b = new THREE.Vector3,
            c = new THREE.Vector3,
            d = new THREE.Matrix4;
        return function(e, f, g) {
            var h = this.elements;
            a.set(h[0], h[1], h[2]);
            b.set(h[4], h[5], h[6]);
            c.set(h[8], h[9], h[10]);
            e = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
            f = f instanceof THREE.Quaternion ? f : new THREE.Quaternion;
            g = g instanceof THREE.Vector3 ? g : new THREE.Vector3;
            g.x = a.length();
            g.y = b.length();
            g.z = c.length();
            e.x = h[12];
            e.y = h[13];
            e.z = h[14];
            d.copy(this);
            d.elements[0] /= g.x;
            d.elements[1] /= g.x;
            d.elements[2] /= g.x;
            d.elements[4] /=
                g.y;
            d.elements[5] /= g.y;
            d.elements[6] /= g.y;
            d.elements[8] /= g.z;
            d.elements[9] /= g.z;
            d.elements[10] /= g.z;
            f.setFromRotationMatrix(d);
            return [e, f, g]
        }
    }(),
    extractPosition: function(a) {
        var b = this.elements,
            a = a.elements;
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        return this
    },
    extractRotation: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = this.elements,
                b = b.elements,
                d = 1 / a.set(b[0], b[1], b[2]).length(),
                e = 1 / a.set(b[4], b[5], b[6]).length(),
                f = 1 / a.set(b[8], b[9], b[10]).length();
            c[0] = b[0] * d;
            c[1] = b[1] * d;
            c[2] = b[2] * d;
            c[4] =
                b[4] * e;
            c[5] = b[5] * e;
            c[6] = b[6] * e;
            c[8] = b[8] * f;
            c[9] = b[9] * f;
            c[10] = b[10] * f;
            return this
        }
    }(),
    translate: function(a) {
        var b = this.elements,
            c = a.x,
            d = a.y,
            a = a.z;
        b[12] = b[0] * c + b[4] * d + b[8] * a + b[12];
        b[13] = b[1] * c + b[5] * d + b[9] * a + b[13];
        b[14] = b[2] * c + b[6] * d + b[10] * a + b[14];
        b[15] = b[3] * c + b[7] * d + b[11] * a + b[15];
        return this
    },
    rotateX: function(a) {
        var b = this.elements,
            c = b[4],
            d = b[5],
            e = b[6],
            f = b[7],
            g = b[8],
            h = b[9],
            i = b[10],
            k = b[11],
            l = Math.cos(a),
            a = Math.sin(a);
        b[4] = l * c + a * g;
        b[5] = l * d + a * h;
        b[6] = l * e + a * i;
        b[7] = l * f + a * k;
        b[8] = l * g - a * c;
        b[9] = l * h - a * d;
        b[10] =
            l * i - a * e;
        b[11] = l * k - a * f;
        return this
    },
    rotateY: function(a) {
        var b = this.elements,
            c = b[0],
            d = b[1],
            e = b[2],
            f = b[3],
            g = b[8],
            h = b[9],
            i = b[10],
            k = b[11],
            l = Math.cos(a),
            a = Math.sin(a);
        b[0] = l * c - a * g;
        b[1] = l * d - a * h;
        b[2] = l * e - a * i;
        b[3] = l * f - a * k;
        b[8] = l * g + a * c;
        b[9] = l * h + a * d;
        b[10] = l * i + a * e;
        b[11] = l * k + a * f;
        return this
    },
    rotateZ: function(a) {
        var b = this.elements,
            c = b[0],
            d = b[1],
            e = b[2],
            f = b[3],
            g = b[4],
            h = b[5],
            i = b[6],
            k = b[7],
            l = Math.cos(a),
            a = Math.sin(a);
        b[0] = l * c + a * g;
        b[1] = l * d + a * h;
        b[2] = l * e + a * i;
        b[3] = l * f + a * k;
        b[4] = l * g - a * c;
        b[5] = l * h - a * d;
        b[6] = l * i - a * e;
        b[7] = l *
            k - a * f;
        return this
    },
    rotateByAxis: function(a, b) {
        var c = this.elements;
        if (1 === a.x && 0 === a.y && 0 === a.z) return this.rotateX(b);
        if (0 === a.x && 1 === a.y && 0 === a.z) return this.rotateY(b);
        if (0 === a.x && 0 === a.y && 1 === a.z) return this.rotateZ(b);
        var d = a.x,
            e = a.y,
            f = a.z,
            g = Math.sqrt(d * d + e * e + f * f),
            d = d / g,
            e = e / g,
            f = f / g,
            g = d * d,
            h = e * e,
            i = f * f,
            k = Math.cos(b),
            l = Math.sin(b),
            m = 1 - k,
            n = d * e * m,
            s = d * f * m,
            m = e * f * m,
            d = d * l,
            r = e * l,
            l = f * l,
            f = g + (1 - g) * k,
            g = n + l,
            e = s - r,
            n = n - l,
            h = h + (1 - h) * k,
            l = m + d,
            s = s + r,
            m = m - d,
            i = i + (1 - i) * k,
            k = c[0],
            d = c[1],
            r = c[2],
            p = c[3],
            q = c[4],
            y = c[5],
            v = c[6],
            z = c[7],
            t = c[8],
            A = c[9],
            I = c[10],
            C = c[11];
        c[0] = f * k + g * q + e * t;
        c[1] = f * d + g * y + e * A;
        c[2] = f * r + g * v + e * I;
        c[3] = f * p + g * z + e * C;
        c[4] = n * k + h * q + l * t;
        c[5] = n * d + h * y + l * A;
        c[6] = n * r + h * v + l * I;
        c[7] = n * p + h * z + l * C;
        c[8] = s * k + m * q + i * t;
        c[9] = s * d + m * y + i * A;
        c[10] = s * r + m * v + i * I;
        c[11] = s * p + m * z + i * C;
        return this
    },
    scale: function(a) {
        var b = this.elements,
            c = a.x,
            d = a.y,
            a = a.z;
        b[0] *= c;
        b[4] *= d;
        b[8] *= a;
        b[1] *= c;
        b[5] *= d;
        b[9] *= a;
        b[2] *= c;
        b[6] *= d;
        b[10] *= a;
        b[3] *= c;
        b[7] *= d;
        b[11] *= a;
        return this
    },
    getMaxScaleOnAxis: function() {
        var a = this.elements;
        return Math.sqrt(Math.max(a[0] *
            a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
    },
    makeTranslation: function(a, b, c) {
        this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
        return this
    },
    makeRotationX: function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationY: function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationZ: function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        this.set(b, -a, 0, 0, a, b, 0, 0, 0,
            0, 1, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationAxis: function(a, b) {
        var c = Math.cos(b),
            d = Math.sin(b),
            e = 1 - c,
            f = a.x,
            g = a.y,
            h = a.z,
            i = e * f,
            k = e * g;
        this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, k * g + c, k * h - d * f, 0, i * h - d * g, k * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
        return this
    },
    makeScale: function(a, b, c) {
        this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
        return this
    },
    makeFrustum: function(a, b, c, d, e, f) {
        var g = this.elements;
        g[0] = 2 * e / (b - a);
        g[4] = 0;
        g[8] = (b + a) / (b - a);
        g[12] = 0;
        g[1] = 0;
        g[5] = 2 * e / (d - c);
        g[9] = (d + c) / (d - c);
        g[13] = 0;
        g[2] = 0;
        g[6] = 0;
        g[10] = -(f + e) / (f - e);
        g[14] = -2 *
            f * e / (f - e);
        g[3] = 0;
        g[7] = 0;
        g[11] = -1;
        g[15] = 0;
        return this
    },
    makePerspective: function(a, b, c, d) {
        var a = c * Math.tan(THREE.Math.degToRad(0.5 * a)),
            e = -a;
        return this.makeFrustum(e * b, a * b, e, a, c, d)
    },
    makeOrthographic: function(a, b, c, d, e, f) {
        var g = this.elements,
            h = b - a,
            i = c - d,
            k = f - e;
        g[0] = 2 / h;
        g[4] = 0;
        g[8] = 0;
        g[12] = -((b + a) / h);
        g[1] = 0;
        g[5] = 2 / i;
        g[9] = 0;
        g[13] = -((c + d) / i);
        g[2] = 0;
        g[6] = 0;
        g[10] = -2 / k;
        g[14] = -((f + e) / k);
        g[3] = 0;
        g[7] = 0;
        g[11] = 0;
        g[15] = 1;
        return this
    },
    clone: function() {
        var a = this.elements;
        return new THREE.Matrix4(a[0], a[4], a[8], a[12],
            a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
    }
});
THREE.Ray = function(a, b) {
    this.origin = void 0 !== a ? a : new THREE.Vector3;
    this.direction = void 0 !== b ? b : new THREE.Vector3
};
THREE.extend(THREE.Ray.prototype, {
    set: function(a, b) {
        this.origin.copy(a);
        this.direction.copy(b);
        return this
    },
    copy: function(a) {
        this.origin.copy(a.origin);
        this.direction.copy(a.direction);
        return this
    },
    at: function(a, b) {
        return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
    },
    recast: function() {
        var a = new THREE.Vector3;
        return function(b) {
            this.origin.copy(this.at(b, a));
            return this
        }
    }(),
    closestPointToPoint: function(a, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a, this.origin);
        var d =
            c.dot(this.direction);
        return c.copy(this.direction).multiplyScalar(d).add(this.origin)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = a.subVectors(b, this.origin).dot(this.direction);
            a.copy(this.direction).multiplyScalar(c).add(this.origin);
            return a.distanceTo(b)
        }
    }(),
    isIntersectionSphere: function(a) {
        return this.distanceToPoint(a.center) <= a.radius
    },
    isIntersectionPlane: function(a) {
        return 0 != a.normal.dot(this.direction) || 0 == a.distanceToPoint(this.origin) ? !0 : !1
    },
    distanceToPlane: function(a) {
        var b =
            a.normal.dot(this.direction);
        if (0 == b) {
            if (0 == a.distanceToPoint(this.origin)) return 0
        } else return -(this.origin.dot(a.normal) + a.constant) / b
    },
    intersectPlane: function(a, b) {
        var c = this.distanceToPlane(a);
        return void 0 === c ? void 0 : this.at(c, b)
    },
    applyMatrix4: function(a) {
        this.direction.add(this.origin).applyMatrix4(a);
        this.origin.applyMatrix4(a);
        this.direction.sub(this.origin);
        return this
    },
    equals: function(a) {
        return a.origin.equals(this.origin) && a.direction.equals(this.direction)
    },
    clone: function() {
        return (new THREE.Ray).copy(this)
    }
});
THREE.Sphere = function(a, b) {
    this.center = void 0 !== a ? a : new THREE.Vector3;
    this.radius = void 0 !== b ? b : 0
};
THREE.extend(THREE.Sphere.prototype, {
    set: function(a, b) {
        this.center.copy(a);
        this.radius = b;
        return this
    },
    setFromCenterAndPoints: function(a, b) {
        for (var c = 0, d = 0, e = b.length; d < e; d++) var f = a.distanceToSquared(b[d]),
            c = Math.max(c, f);
        this.center = a;
        this.radius = Math.sqrt(c);
        return this
    },
    copy: function(a) {
        this.center.copy(a.center);
        this.radius = a.radius;
        return this
    },
    empty: function() {
        return 0 >= this.radius
    },
    containsPoint: function(a) {
        return a.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(a) {
        return a.distanceTo(this.center) -
            this.radius
    },
    intersectsSphere: function(a) {
        var b = this.radius + a.radius;
        return a.center.distanceToSquared(this.center) <= b * b
    },
    clampPoint: function(a, b) {
        var c = this.center.distanceToSquared(a),
            d = b || new THREE.Vector3;
        d.copy(a);
        c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
        return d
    },
    getBoundingBox: function(a) {
        a = a || new THREE.Box3;
        a.set(this.center, this.center);
        a.expandByScalar(this.radius);
        return a
    },
    applyMatrix4: function(a) {
        this.center.applyMatrix4(a);
        this.radius *= a.getMaxScaleOnAxis();
        return this
    },
    translate: function(a) {
        this.center.add(a);
        return this
    },
    equals: function(a) {
        return a.center.equals(this.center) && a.radius === this.radius
    },
    clone: function() {
        return (new THREE.Sphere).copy(this)
    }
});
THREE.Frustum = function(a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
};
THREE.extend(THREE.Frustum.prototype, {
    set: function(a, b, c, d, e, f) {
        var g = this.planes;
        g[0].copy(a);
        g[1].copy(b);
        g[2].copy(c);
        g[3].copy(d);
        g[4].copy(e);
        g[5].copy(f);
        return this
    },
    copy: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
        return this
    },
    setFromMatrix: function(a) {
        var b = this.planes,
            c = a.elements,
            a = c[0],
            d = c[1],
            e = c[2],
            f = c[3],
            g = c[4],
            h = c[5],
            i = c[6],
            k = c[7],
            l = c[8],
            m = c[9],
            n = c[10],
            s = c[11],
            r = c[12],
            p = c[13],
            q = c[14],
            c = c[15];
        b[0].setComponents(f - a, k - g, s - l, c - r).normalize();
        b[1].setComponents(f +
            a, k + g, s + l, c + r).normalize();
        b[2].setComponents(f + d, k + h, s + m, c + p).normalize();
        b[3].setComponents(f - d, k - h, s - m, c - p).normalize();
        b[4].setComponents(f - e, k - i, s - n, c - q).normalize();
        b[5].setComponents(f + e, k + i, s + n, c + q).normalize();
        return this
    },
    intersectsObject: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = b.matrixWorld,
                d = this.planes,
                b = -b.geometry.boundingSphere.radius * c.getMaxScaleOnAxis();
            a.getPositionFromMatrix(c);
            for (c = 0; 6 > c; c++)
                if (d[c].distanceToPoint(a) < b) return !1;
            return !0
        }
    }(),
    intersectsSphere: function(a) {
        for (var b =
                this.planes, c = a.center, a = -a.radius, d = 0; 6 > d; d++)
            if (b[d].distanceToPoint(c) < a) return !1;
        return !0
    },
    containsPoint: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++)
            if (0 > b[c].distanceToPoint(a)) return !1;
        return !0
    },
    clone: function() {
        return (new THREE.Frustum).copy(this)
    }
});
THREE.Plane = function(a, b) {
    this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
    this.constant = void 0 !== b ? b : 0
};
THREE.extend(THREE.Plane.prototype, {
    set: function(a, b) {
        this.normal.copy(a);
        this.constant = b;
        return this
    },
    setComponents: function(a, b, c, d) {
        this.normal.set(a, b, c);
        this.constant = d;
        return this
    },
    setFromNormalAndCoplanarPoint: function(a, b) {
        this.normal.copy(a);
        this.constant = -b.dot(this.normal);
        return this
    },
    setFromCoplanarPoints: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d, e) {
            d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
            this.setFromNormalAndCoplanarPoint(d, c);
            return this
        }
    }(),
    copy: function(a) {
        this.normal.copy(a.normal);
        this.constant = a.constant;
        return this
    },
    normalize: function() {
        var a = 1 / this.normal.length();
        this.normal.multiplyScalar(a);
        this.constant *= a;
        return this
    },
    negate: function() {
        this.constant *= -1;
        this.normal.negate();
        return this
    },
    distanceToPoint: function(a) {
        return this.normal.dot(a) + this.constant
    },
    distanceToSphere: function(a) {
        return this.distanceToPoint(a.center) - a.radius
    },
    projectPoint: function(a, b) {
        return this.orthoPoint(a, b).sub(a).negate()
    },
    orthoPoint: function(a,
        b) {
        var c = this.distanceToPoint(a);
        return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
    },
    isIntersectionLine: function(a) {
        var b = this.distanceToPoint(a.start),
            a = this.distanceToPoint(a.end);
        return 0 > b && 0 < a || 0 > a && 0 < b
    },
    intersectLine: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = c || new THREE.Vector3,
                e = b.delta(a),
                f = this.normal.dot(e);
            if (0 == f) {
                if (0 == this.distanceToPoint(b.start)) return d.copy(b.start)
            } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
        }
    }(),
    coplanarPoint: function(a) {
        return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function(c, d) {
            var d = d || (new THREE.Matrix3).getInverse(c).transpose(),
                e = a.copy(this.normal).applyMatrix3(d),
                f = this.coplanarPoint(b);
            f.applyMatrix4(c);
            this.setFromNormalAndCoplanarPoint(e, f);
            return this
        }
    }(),
    translate: function(a) {
        this.constant -= a.dot(this.normal);
        return this
    },
    equals: function(a) {
        return a.normal.equals(this.normal) &&
            a.constant == this.constant
    },
    clone: function() {
        return (new THREE.Plane).copy(this)
    }
});
THREE.Math = {
    clamp: function(a, b, c) {
        return a < b ? b : a > c ? c : a
    },
    clampBottom: function(a, b) {
        return a < b ? b : a
    },
    mapLinear: function(a, b, c, d, e) {
        return d + (a - b) * (e - d) / (c - b)
    },
    smoothstep: function(a, b, c) {
        if (a <= b) return 0;
        if (a >= c) return 1;
        a = (a - b) / (c - b);
        return a * a * (3 - 2 * a)
    },
    smootherstep: function(a, b, c) {
        if (a <= b) return 0;
        if (a >= c) return 1;
        a = (a - b) / (c - b);
        return a * a * a * (a * (6 * a - 15) + 10)
    },
    random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    },
    randInt: function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    },
    randFloat: function(a,
        b) {
        return a + Math.random() * (b - a)
    },
    randFloatSpread: function(a) {
        return a * (0.5 - Math.random())
    },
    sign: function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : 0
    },
    degToRad: function() {
        var a = Math.PI / 180;
        return function(b) {
            return b * a
        }
    }(),
    radToDeg: function() {
        var a = 180 / Math.PI;
        return function(b) {
            return b * a
        }
    }()
};
THREE.Spline = function(a) {
    function b(a, b, c, d, e, f, g) {
        a = 0.5 * (c - a);
        d = 0.5 * (d - b);
        return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
    }
    this.points = a;
    var c = [],
        d = {
            x: 0,
            y: 0,
            z: 0
        },
        e, f, g, h, i, k, l, m, n;
    this.initFromArray = function(a) {
        this.points = [];
        for (var b = 0; b < a.length; b++) this.points[b] = {
            x: a[b][0],
            y: a[b][1],
            z: a[b][2]
        }
    };
    this.getPoint = function(a) {
        e = (this.points.length - 1) * a;
        f = Math.floor(e);
        g = e - f;
        c[0] = 0 === f ? f : f - 1;
        c[1] = f;
        c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
        c[3] = f > this.points.length - 3 ? this.points.length - 1 :
            f + 2;
        k = this.points[c[0]];
        l = this.points[c[1]];
        m = this.points[c[2]];
        n = this.points[c[3]];
        h = g * g;
        i = g * h;
        d.x = b(k.x, l.x, m.x, n.x, g, h, i);
        d.y = b(k.y, l.y, m.y, n.y, g, h, i);
        d.z = b(k.z, l.z, m.z, n.z, g, h, i);
        return d
    };
    this.getControlPointsArray = function() {
        var a, b, c = this.points.length,
            d = [];
        for (a = 0; a < c; a++) b = this.points[a], d[a] = [b.x, b.y, b.z];
        return d
    };
    this.getLength = function(a) {
        var b, c, d, e = b = b = 0,
            f = new THREE.Vector3,
            g = new THREE.Vector3,
            h = [],
            i = 0;
        h[0] = 0;
        a || (a = 100);
        c = this.points.length * a;
        f.copy(this.points[0]);
        for (a = 1; a < c; a++) b =
            a / c, d = this.getPoint(b), g.copy(d), i += g.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (h[b] = i, e = b);
        h[h.length] = i;
        return {
            chunks: h,
            total: i
        }
    };
    this.reparametrizeByArcLength = function(a) {
        var b, c, d, e, f, g, h = [],
            i = new THREE.Vector3,
            k = this.getLength();
        h.push(i.copy(this.points[0]).clone());
        for (b = 1; b < this.points.length; b++) {
            c = k.chunks[b] - k.chunks[b - 1];
            g = Math.ceil(a * c / k.total);
            e = (b - 1) / (this.points.length - 1);
            f = b / (this.points.length - 1);
            for (c = 1; c < g - 1; c++) d = e + c * (1 / g) * (f - e), d = this.getPoint(d),
                h.push(i.copy(d).clone());
            h.push(i.copy(this.points[b]).clone())
        }
        this.points = h
    }
};
THREE.Triangle = function(a, b, c) {
    this.a = void 0 !== a ? a : new THREE.Vector3;
    this.b = void 0 !== b ? b : new THREE.Vector3;
    this.c = void 0 !== c ? c : new THREE.Vector3
};
THREE.Triangle.normal = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        e = e || new THREE.Vector3;
        e.subVectors(d, c);
        a.subVectors(b, c);
        e.cross(a);
        b = e.lengthSq();
        return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
    }
}();
THREE.Triangle.barycoordFromPoint = function() {
    var a = new THREE.Vector3,
        b = new THREE.Vector3,
        c = new THREE.Vector3;
    return function(d, e, f, g, h) {
        a.subVectors(g, e);
        b.subVectors(f, e);
        c.subVectors(d, e);
        var d = a.dot(a),
            e = a.dot(b),
            f = a.dot(c),
            i = b.dot(b),
            g = b.dot(c),
            k = d * i - e * e,
            h = h || new THREE.Vector3;
        if (0 == k) return h.set(-2, -1, -1);
        k = 1 / k;
        i = (i * f - e * g) * k;
        d = (d * g - e * f) * k;
        return h.set(1 - i - d, d, i)
    }
}();
THREE.Triangle.containsPoint = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
        return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
    }
}();
THREE.extend(THREE.Triangle.prototype, {
    constructor: THREE.Triangle,
    set: function(a, b, c) {
        this.a.copy(a);
        this.b.copy(b);
        this.c.copy(c);
        return this
    },
    setFromPointsAndIndices: function(a, b, c, d) {
        this.a.copy(a[b]);
        this.b.copy(a[c]);
        this.c.copy(a[d]);
        return this
    },
    copy: function(a) {
        this.a.copy(a.a);
        this.b.copy(a.b);
        this.c.copy(a.c);
        return this
    },
    area: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3;
        return function() {
            a.subVectors(this.c, this.b);
            b.subVectors(this.a, this.b);
            return 0.5 * a.cross(b).length()
        }
    }(),
    midpoint: function(a) {
        return (a || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(a) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a)
    },
    plane: function(a) {
        return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(a, b) {
        return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
    },
    containsPoint: function(a) {
        return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
    },
    equals: function(a) {
        return a.a.equals(this.a) &&
            a.b.equals(this.b) && a.c.equals(this.c)
    },
    clone: function() {
        return (new THREE.Triangle).copy(this)
    }
});
THREE.Vertex = function(a) {
    console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");
    return a
};
THREE.UV = function(a, b) {
    console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");
    return new THREE.Vector2(a, b)
};
THREE.Clock = function(a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1
};
THREE.extend(THREE.Clock.prototype, {
    start: function() {
        this.oldTime = this.startTime = void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now();
        this.running = !0
    },
    stop: function() {
        this.getElapsedTime();
        this.running = !1
    },
    getElapsedTime: function() {
        this.getDelta();
        return this.elapsedTime
    },
    getDelta: function() {
        var a = 0;
        this.autoStart && !this.running && this.start();
        if (this.running) {
            var b = void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(),
                a = 0.001 * (b - this.oldTime);
            this.oldTime = b;
            this.elapsedTime += a
        }
        return a
    }
});
THREE.EventDispatcher = function() {
    var a = {};
    this.addEventListener = function(b, c) {
        void 0 === a[b] && (a[b] = []); - 1 === a[b].indexOf(c) && a[b].push(c)
    };
    this.removeEventListener = function(b, c) {
        var d = a[b].indexOf(c); - 1 !== d && a[b].splice(d, 1)
    };
    this.dispatchEvent = function(b) {
        var c = a[b.type];
        if (void 0 !== c) {
            b.target = this;
            for (var d = 0, e = c.length; d < e; d++) c[d].call(this, b)
        }
    }
};
(function(a) {
    a.Raycaster = function(b, c, d, e) {
        this.ray = new a.Ray(b, c);
        0 < this.ray.direction.lengthSq() && this.ray.direction.normalize();
        this.near = d || 0;
        this.far = e || Infinity
    };
    var b = new a.Sphere,
        c = new a.Ray,
        d = new a.Plane,
        e = new a.Vector3,
        f = new a.Vector3,
        g = new a.Matrix4,
        h = function(a, b) {
            return a.distance - b.distance
        },
        i = function(h, i, k) {
            if (h instanceof a.Particle) {
                f.getPositionFromMatrix(h.matrixWorld);
                i = i.ray.distanceToPoint(f);
                if (i > h.scale.x) return k;
                k.push({
                    distance: i,
                    point: h.position,
                    face: null,
                    object: h
                })
            } else if (h instanceof a.Mesh) {
                f.getPositionFromMatrix(h.matrixWorld);
                b.set(f, h.geometry.boundingSphere.radius * h.matrixWorld.getMaxScaleOnAxis());
                if (!i.ray.isIntersectionSphere(b)) return k;
                var s = h.geometry,
                    r = s.vertices,
                    p = h.material instanceof a.MeshFaceMaterial,
                    q = !0 === p ? h.material.materials : null,
                    y = h.material.side,
                    v, z, t, A = i.precision;
                h.matrixRotationWorld.extractRotation(h.matrixWorld);
                g.getInverse(h.matrixWorld);
                c.copy(i.ray).applyMatrix4(g);
                for (var I = 0, C = s.faces.length; I < C; I++) {
                    var x = s.faces[I],
                        y = !0 === p ? q[x.materialIndex] :
                        h.material;
                    if (void 0 !== y) {
                        d.setFromNormalAndCoplanarPoint(x.normal, r[x.a]);
                        var G = c.distanceToPlane(d);
                        if (!(Math.abs(G) < A) && !(0 > G)) {
                            y = y.side;
                            if (y !== a.DoubleSide && (v = c.direction.dot(d.normal), !(y === a.FrontSide ? 0 > v : 0 < v))) continue;
                            if (!(G < i.near || G > i.far)) {
                                e = c.at(G, e);
                                if (x instanceof a.Face3) {
                                    if (y = r[x.a], v = r[x.b], z = r[x.c], !a.Triangle.containsPoint(e, y, v, z)) continue
                                } else if (x instanceof a.Face4) {
                                    if (y = r[x.a], v = r[x.b], z = r[x.c], t = r[x.d], !a.Triangle.containsPoint(e, y, v, t) && !a.Triangle.containsPoint(e, v, z, t)) continue
                                } else throw Error("face type not supported");
                                k.push({
                                    distance: G,
                                    point: i.ray.at(G),
                                    face: x,
                                    faceIndex: I,
                                    object: h
                                })
                            }
                        }
                    }
                }
            }
        },
        k = function(a, b, c) {
            for (var a = a.getDescendants(), d = 0, e = a.length; d < e; d++) i(a[d], b, c)
        };
    a.Raycaster.prototype.precision = 1E-4;
    a.Raycaster.prototype.set = function(a, b) {
        this.ray.set(a, b);
        0 < this.ray.direction.length() && this.ray.direction.normalize()
    };
    a.Raycaster.prototype.intersectObject = function(a, b) {
        var c = [];
        !0 === b && k(a, this, c);
        i(a, this, c);
        c.sort(h);
        return c
    };
    a.Raycaster.prototype.intersectObjects = function(a, b) {
        for (var c = [], d = 0, e = a.length; d <
            e; d++) i(a[d], this, c), !0 === b && k(a[d], this, c);
        c.sort(h);
        return c
    }
})(THREE);
THREE.Object3D = function() {
    this.id = THREE.Object3DIdCount++;
    this.name = "";
    this.properties = {};
    this.parent = void 0;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.eulerOrder = THREE.Object3D.defaultEulerOrder;
    this.scale = new THREE.Vector3(1, 1, 1);
    this.renderDepth = null;
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixRotationWorld = new THREE.Matrix4;
    this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.quaternion = new THREE.Quaternion;
    this.useQuaternion = !1;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    applyMatrix: function(a) {
        this.matrix.multiplyMatrices(a, this.matrix);
        this.scale.getScaleFromMatrix(this.matrix);
        a = (new THREE.Matrix4).extractRotation(this.matrix);
        this.rotation.setEulerFromRotationMatrix(a, this.eulerOrder);
        this.position.getPositionFromMatrix(this.matrix)
    },
    translate: function(a, b) {
        this.matrix.rotateAxis(b);
        this.position.add(b.multiplyScalar(a))
    },
    translateX: function(a) {
        this.translate(a, this._vector.set(1, 0, 0))
    },
    translateY: function(a) {
        this.translate(a,
            this._vector.set(0, 1, 0))
    },
    translateZ: function(a) {
        this.translate(a, this._vector.set(0, 0, 1))
    },
    localToWorld: function(a) {
        return a.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function(a) {
        return a.applyMatrix4(THREE.Object3D.__m1.getInverse(this.matrixWorld))
    },
    lookAt: function(a) {
        this.matrix.lookAt(a, this.position, this.up);
        this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
    },
    add: function(a) {
        if (a ===
            this) console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
        else if (a instanceof THREE.Object3D) {
            void 0 !== a.parent && a.parent.remove(a);
            a.parent = this;
            this.children.push(a);
            for (var b = this; void 0 !== b.parent;) b = b.parent;
            void 0 !== b && b instanceof THREE.Scene && b.__addObject(a)
        }
    },
    remove: function(a) {
        var b = this.children.indexOf(a);
        if (-1 !== b) {
            a.parent = void 0;
            this.children.splice(b, 1);
            for (b = this; void 0 !== b.parent;) b = b.parent;
            void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a)
        }
    },
    traverse: function(a) {
        a(this);
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].traverse(a)
    },
    getChildByName: function(a, b) {
        for (var c = 0, d = this.children.length; c < d; c++) {
            var e = this.children[c];
            if (e.name === a || !0 === b && (e = e.getChildByName(a, b), void 0 !== e)) return e
        }
    },
    getDescendants: function(a) {
        void 0 === a && (a = []);
        Array.prototype.push.apply(a, this.children);
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].getDescendants(a);
        return a
    },
    updateMatrix: function() {
        this.matrix.setPosition(this.position);
        !1 === this.useQuaternion ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion);
        (1 !== this.scale.x || 1 !== this.scale.y || 1 !== this.scale.z) && this.matrix.scale(this.scale);
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1, a = !0;
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
    },
    clone: function(a) {
        void 0 === a && (a = new THREE.Object3D);
        a.name = this.name;
        a.up.copy(this.up);
        a.position.copy(this.position);
        a.rotation instanceof THREE.Vector3 && a.rotation.copy(this.rotation);
        a.eulerOrder = this.eulerOrder;
        a.scale.copy(this.scale);
        a.renderDepth = this.renderDepth;
        a.rotationAutoUpdate = this.rotationAutoUpdate;
        a.matrix.copy(this.matrix);
        a.matrixWorld.copy(this.matrixWorld);
        a.matrixRotationWorld.copy(this.matrixRotationWorld);
        a.matrixAutoUpdate = this.matrixAutoUpdate;
        a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
        a.quaternion.copy(this.quaternion);
        a.useQuaternion = this.useQuaternion;
        a.visible = this.visible;
        a.castShadow = this.castShadow;
        a.receiveShadow = this.receiveShadow;
        a.frustumCulled = this.frustumCulled;
        for (var b = 0; b < this.children.length; b++) a.add(this.children[b].clone());
        return a
    }
};
THREE.Object3D.__m1 = new THREE.Matrix4;
THREE.Object3D.defaultEulerOrder = "XYZ";
THREE.Object3DIdCount = 0;
THREE.Projector = function() {
    function a() {
        if (f === h) {
            var a = new THREE.RenderableObject;
            g.push(a);
            h++;
            f++;
            return a
        }
        return g[f++]
    }

    function b() {
        if (k === m) {
            var a = new THREE.RenderableVertex;
            l.push(a);
            m++;
            k++;
            return a
        }
        return l[k++]
    }

    function c(a, b) {
        return b.z - a.z
    }

    function d(a, b) {
        var c = 0,
            d = 1,
            e = a.z + a.w,
            f = b.z + b.w,
            g = -a.z + a.w,
            h = -b.z + b.w;
        if (0 <= e && 0 <= f && 0 <= g && 0 <= h) return !0;
        if (0 > e && 0 > f || 0 > g && 0 > h) return !1;
        0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d = Math.min(d, e / (e - f)));
        0 > g ? c = Math.max(c, g / (g - h)) : 0 > h && (d = Math.min(d, g / (g - h)));
        if (d <
            c) return !1;
        a.lerp(b, c);
        b.lerp(a, 1 - d);
        return !0
    }
    var e, f, g = [],
        h = 0,
        i, k, l = [],
        m = 0,
        n, s, r = [],
        p = 0,
        q, y = [],
        v = 0,
        z, t, A = [],
        I = 0,
        C, x, G = [],
        J = 0,
        E = {
            objects: [],
            sprites: [],
            lights: [],
            elements: []
        },
        H = new THREE.Vector3,
        B = new THREE.Vector4,
        W = new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1)),
        F = new THREE.Box3,
        K = Array(3),
        L = Array(4),
        U = new THREE.Matrix4,
        fa = new THREE.Matrix4,
        Ca, $a = new THREE.Matrix4,
        M = new THREE.Matrix3,
        ca = new THREE.Matrix3,
        qa = new THREE.Vector3,
        ha = new THREE.Frustum,
        ra = new THREE.Vector4,
        N = new THREE.Vector4;
    this.projectVector = function(a, b) {
        b.matrixWorldInverse.getInverse(b.matrixWorld);
        fa.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
        return a.applyProjection(fa)
    };
    this.unprojectVector = function(a, b) {
        b.projectionMatrixInverse.getInverse(b.projectionMatrix);
        fa.multiplyMatrices(b.matrixWorld, b.projectionMatrixInverse);
        return a.applyProjection(fa)
    };
    this.pickingRay = function(a, b) {
        a.z = -1;
        var c = new THREE.Vector3(a.x, a.y, 1);
        this.unprojectVector(a, b);
        this.unprojectVector(c, b);
        c.sub(a).normalize();
        return new THREE.Raycaster(a,
            c)
    };
    this.projectScene = function(g, h, m, Pa) {
        var ta = !1,
            ka, aa, pa, Y, da, la, Z, oa, gb, nb, ia, Wa, ab;
        x = t = q = s = 0;
        E.elements.length = 0;
        g.updateMatrixWorld();
        void 0 === h.parent && h.updateMatrixWorld();
        U.copy(h.matrixWorldInverse.getInverse(h.matrixWorld));
        fa.multiplyMatrices(h.projectionMatrix, U);
        ca.getInverse(U);
        ca.transpose();
        ha.setFromMatrix(fa);
        f = 0;
        E.objects.length = 0;
        E.sprites.length = 0;
        E.lights.length = 0;
        var Fa = function(b) {
            for (var c = 0, d = b.children.length; c < d; c++) {
                var f = b.children[c];
                if (!1 !== f.visible) {
                    if (f instanceof THREE.Light) E.lights.push(f);
                    else if (f instanceof THREE.Mesh || f instanceof THREE.Line) {
                        if (!1 === f.frustumCulled || !0 === ha.intersectsObject(f)) e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : (H.getPositionFromMatrix(f.matrixWorld), H.applyProjection(fa), e.z = H.z), E.objects.push(e)
                    } else f instanceof THREE.Sprite || f instanceof THREE.Particle ? (e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : (H.getPositionFromMatrix(f.matrixWorld), H.applyProjection(fa), e.z = H.z), E.sprites.push(e)) : (e = a(), e.object =
                        f, null !== f.renderDepth ? e.z = f.renderDepth : (H.getPositionFromMatrix(f.matrixWorld), H.applyProjection(fa), e.z = H.z), E.objects.push(e));
                    Fa(f)
                }
            }
        };
        Fa(g);
        !0 === m && E.objects.sort(c);
        g = 0;
        for (m = E.objects.length; g < m; g++)
            if (oa = E.objects[g].object, Ca = oa.matrixWorld, k = 0, oa instanceof THREE.Mesh) {
                gb = oa.geometry;
                pa = gb.vertices;
                nb = gb.faces;
                gb = gb.faceVertexUvs;
                M.getInverse(Ca);
                M.transpose();
                Wa = oa.material instanceof THREE.MeshFaceMaterial;
                ab = !0 === Wa ? oa.material : null;
                ka = 0;
                for (aa = pa.length; ka < aa; ka++) i = b(), i.positionWorld.copy(pa[ka]).applyMatrix4(Ca),
                    i.positionScreen.copy(i.positionWorld).applyMatrix4(fa), i.positionScreen.x /= i.positionScreen.w, i.positionScreen.y /= i.positionScreen.w, i.positionScreen.z /= i.positionScreen.w, i.visible = !(-1 > i.positionScreen.x || 1 < i.positionScreen.x || -1 > i.positionScreen.y || 1 < i.positionScreen.y || -1 > i.positionScreen.z || 1 < i.positionScreen.z);
                pa = 0;
                for (ka = nb.length; pa < ka; pa++) {
                    aa = nb[pa];
                    var Xa = !0 === Wa ? ab.materials[aa.materialIndex] : oa.material;
                    if (void 0 !== Xa) {
                        la = Xa.side;
                        if (aa instanceof THREE.Face3)
                            if (Y = l[aa.a], da = l[aa.b],
                                Z = l[aa.c], K[0] = Y.positionScreen, K[1] = da.positionScreen, K[2] = Z.positionScreen, !0 === Y.visible || !0 === da.visible || !0 === Z.visible || W.isIntersectionBox(F.setFromPoints(K)))
                                if (ta = 0 > (Z.positionScreen.x - Y.positionScreen.x) * (da.positionScreen.y - Y.positionScreen.y) - (Z.positionScreen.y - Y.positionScreen.y) * (da.positionScreen.x - Y.positionScreen.x), la === THREE.DoubleSide || ta === (la === THREE.FrontSide)) s === p ? (ia = new THREE.RenderableFace3, r.push(ia), p++, s++, n = ia) : n = r[s++], n.v1.copy(Y), n.v2.copy(da), n.v3.copy(Z);
                                else continue;
                        else continue;
                        else if (aa instanceof THREE.Face4)
                            if (Y = l[aa.a], da = l[aa.b], Z = l[aa.c], ia = l[aa.d], L[0] = Y.positionScreen, L[1] = da.positionScreen, L[2] = Z.positionScreen, L[3] = ia.positionScreen, !0 === Y.visible || !0 === da.visible || !0 === Z.visible || !0 === ia.visible || W.isIntersectionBox(F.setFromPoints(L)))
                                if (ta = 0 > (ia.positionScreen.x - Y.positionScreen.x) * (da.positionScreen.y - Y.positionScreen.y) - (ia.positionScreen.y - Y.positionScreen.y) * (da.positionScreen.x - Y.positionScreen.x) || 0 > (da.positionScreen.x - Z.positionScreen.x) *
                                    (ia.positionScreen.y - Z.positionScreen.y) - (da.positionScreen.y - Z.positionScreen.y) * (ia.positionScreen.x - Z.positionScreen.x), la === THREE.DoubleSide || ta === (la === THREE.FrontSide)) {
                                    if (q === v) {
                                        var ub = new THREE.RenderableFace4;
                                        y.push(ub);
                                        v++;
                                        q++;
                                        n = ub
                                    } else n = y[q++];
                                    n.v1.copy(Y);
                                    n.v2.copy(da);
                                    n.v3.copy(Z);
                                    n.v4.copy(ia)
                                } else continue;
                        else continue;
                        n.normalModel.copy(aa.normal);
                        !1 === ta && (la === THREE.BackSide || la === THREE.DoubleSide) && n.normalModel.negate();
                        n.normalModel.applyMatrix3(M).normalize();
                        n.normalModelView.copy(n.normalModel).applyMatrix3(ca);
                        n.centroidModel.copy(aa.centroid).applyMatrix4(Ca);
                        Z = aa.vertexNormals;
                        Y = 0;
                        for (da = Z.length; Y < da; Y++) ia = n.vertexNormalsModel[Y], ia.copy(Z[Y]), !1 === ta && (la === THREE.BackSide || la === THREE.DoubleSide) && ia.negate(), ia.applyMatrix3(M).normalize(), n.vertexNormalsModelView[Y].copy(ia).applyMatrix3(ca);
                        n.vertexNormalsLength = Z.length;
                        Y = 0;
                        for (da = gb.length; Y < da; Y++)
                            if (ia = gb[Y][pa], void 0 !== ia) {
                                la = 0;
                                for (Z = ia.length; la < Z; la++) n.uvs[Y][la] = ia[la]
                            } n.color = aa.color;
                        n.material = Xa;
                        qa.copy(n.centroidModel).applyProjection(fa);
                        n.z = qa.z;
                        E.elements.push(n)
                    }
                }
            } else if (oa instanceof THREE.Line) {
            $a.multiplyMatrices(fa, Ca);
            pa = oa.geometry.vertices;
            Y = b();
            Y.positionScreen.copy(pa[0]).applyMatrix4($a);
            nb = oa.type === THREE.LinePieces ? 2 : 1;
            ka = 1;
            for (aa = pa.length; ka < aa; ka++) Y = b(), Y.positionScreen.copy(pa[ka]).applyMatrix4($a), 0 < (ka + 1) % nb || (da = l[k - 2], ra.copy(Y.positionScreen), N.copy(da.positionScreen), !0 === d(ra, N) && (ra.multiplyScalar(1 / ra.w), N.multiplyScalar(1 / N.w), t === I ? (gb = new THREE.RenderableLine, A.push(gb), I++, t++, z = gb) : z = A[t++], z.v1.positionScreen.copy(ra),
                z.v2.positionScreen.copy(N), z.z = Math.max(ra.z, N.z), z.material = oa.material, E.elements.push(z)))
        }
        g = 0;
        for (m = E.sprites.length; g < m; g++) oa = E.sprites[g].object, Ca = oa.matrixWorld, oa instanceof THREE.Particle && (B.set(Ca.elements[12], Ca.elements[13], Ca.elements[14], 1), B.applyMatrix4(fa), B.z /= B.w, 0 < B.z && 1 > B.z && (x === J ? (ta = new THREE.RenderableParticle, G.push(ta), J++, x++, C = ta) : C = G[x++], C.object = oa, C.x = B.x / B.w, C.y = B.y / B.w, C.z = B.z, C.rotation = oa.rotation.z, C.scale.x = oa.scale.x * Math.abs(C.x - (B.x + h.projectionMatrix.elements[0]) /
            (B.w + h.projectionMatrix.elements[12])), C.scale.y = oa.scale.y * Math.abs(C.y - (B.y + h.projectionMatrix.elements[5]) / (B.w + h.projectionMatrix.elements[13])), C.material = oa.material, E.elements.push(C)));
        !0 === Pa && E.elements.sort(c);
        return E
    }
};
THREE.Face3 = function(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = d instanceof Array ? d : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = e instanceof Array ? e : [];
    this.vertexTangents = [];
    this.materialIndex = void 0 !== f ? f : 0;
    this.centroid = new THREE.Vector3
};
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        var a = new THREE.Face3(this.a, this.b, this.c);
        a.normal.copy(this.normal);
        a.color.copy(this.color);
        a.centroid.copy(this.centroid);
        a.materialIndex = this.materialIndex;
        var b, c;
        b = 0;
        for (c = this.vertexNormals.length; b < c; b++) a.vertexNormals[b] = this.vertexNormals[b].clone();
        b = 0;
        for (c = this.vertexColors.length; b < c; b++) a.vertexColors[b] = this.vertexColors[b].clone();
        b = 0;
        for (c = this.vertexTangents.length; b < c; b++) a.vertexTangents[b] = this.vertexTangents[b].clone();
        return a
    }
};
THREE.Face4 = function(a, b, c, d, e, f, g) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
    this.vertexNormals = e instanceof Array ? e : [];
    this.color = f instanceof THREE.Color ? f : new THREE.Color;
    this.vertexColors = f instanceof Array ? f : [];
    this.vertexTangents = [];
    this.materialIndex = void 0 !== g ? g : 0;
    this.centroid = new THREE.Vector3
};
THREE.Face4.prototype = {
    constructor: THREE.Face4,
    clone: function() {
        var a = new THREE.Face4(this.a, this.b, this.c, this.d);
        a.normal.copy(this.normal);
        a.color.copy(this.color);
        a.centroid.copy(this.centroid);
        a.materialIndex = this.materialIndex;
        var b, c;
        b = 0;
        for (c = this.vertexNormals.length; b < c; b++) a.vertexNormals[b] = this.vertexNormals[b].clone();
        b = 0;
        for (c = this.vertexColors.length; b < c; b++) a.vertexColors[b] = this.vertexColors[b].clone();
        b = 0;
        for (c = this.vertexTangents.length; b < c; b++) a.vertexTangents[b] = this.vertexTangents[b].clone();
        return a
    }
};
THREE.Geometry = function() {
    THREE.EventDispatcher.call(this);
    this.id = THREE.GeometryIdCount++;
    this.name = "";
    this.vertices = [];
    this.colors = [];
    this.normals = [];
    this.faces = [];
    this.faceUvs = [
        []
    ];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1;
    this.dynamic = !0;
    this.buffersNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate =
        this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
};
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(a) {
        for (var b = (new THREE.Matrix3).getInverse(a).transpose(), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            var e = this.faces[c];
            e.normal.applyMatrix3(b).normalize();
            for (var f = 0, g = e.vertexNormals.length; f < g; f++) e.vertexNormals[f].applyMatrix3(b).normalize();
            e.centroid.applyMatrix4(a)
        }
    },
    computeCentroids: function() {
        var a, b, c;
        a = 0;
        for (b = this.faces.length; a < b; a++) c = this.faces[a],
            c.centroid.set(0, 0, 0), c instanceof THREE.Face3 ? (c.centroid.add(this.vertices[c.a]), c.centroid.add(this.vertices[c.b]), c.centroid.add(this.vertices[c.c]), c.centroid.divideScalar(3)) : c instanceof THREE.Face4 && (c.centroid.add(this.vertices[c.a]), c.centroid.add(this.vertices[c.b]), c.centroid.add(this.vertices[c.c]), c.centroid.add(this.vertices[c.d]), c.centroid.divideScalar(4))
    },
    computeFaceNormals: function() {
        for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++) {
            var e = this.faces[c],
                f = this.vertices[e.a],
                g = this.vertices[e.b];
            a.subVectors(this.vertices[e.c], g);
            b.subVectors(f, g);
            a.cross(b);
            a.normalize();
            e.normal.copy(a)
        }
    },
    computeVertexNormals: function(a) {
        var b, c, d, e;
        if (void 0 === this.__tmpVertices) {
            e = this.__tmpVertices = Array(this.vertices.length);
            b = 0;
            for (c = this.vertices.length; b < c; b++) e[b] = new THREE.Vector3;
            b = 0;
            for (c = this.faces.length; b < c; b++) d = this.faces[b], d instanceof THREE.Face3 ? d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3] : d instanceof THREE.Face4 &&
                (d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3])
        } else {
            e = this.__tmpVertices;
            b = 0;
            for (c = this.vertices.length; b < c; b++) e[b].set(0, 0, 0)
        }
        if (a) {
            var f, g, h, i = new THREE.Vector3,
                k = new THREE.Vector3,
                l = new THREE.Vector3,
                m = new THREE.Vector3,
                n = new THREE.Vector3;
            b = 0;
            for (c = this.faces.length; b < c; b++) d = this.faces[b], d instanceof THREE.Face3 ? (a = this.vertices[d.a], f = this.vertices[d.b], g = this.vertices[d.c], i.subVectors(g, f), k.subVectors(a, f), i.cross(k), e[d.a].add(i), e[d.b].add(i),
                e[d.c].add(i)) : d instanceof THREE.Face4 && (a = this.vertices[d.a], f = this.vertices[d.b], g = this.vertices[d.c], h = this.vertices[d.d], l.subVectors(h, f), k.subVectors(a, f), l.cross(k), e[d.a].add(l), e[d.b].add(l), e[d.d].add(l), m.subVectors(h, g), n.subVectors(f, g), m.cross(n), e[d.b].add(m), e[d.c].add(m), e[d.d].add(m))
        } else {
            b = 0;
            for (c = this.faces.length; b < c; b++) d = this.faces[b], d instanceof THREE.Face3 ? (e[d.a].add(d.normal), e[d.b].add(d.normal), e[d.c].add(d.normal)) : d instanceof THREE.Face4 && (e[d.a].add(d.normal), e[d.b].add(d.normal),
                e[d.c].add(d.normal), e[d.d].add(d.normal))
        }
        b = 0;
        for (c = this.vertices.length; b < c; b++) e[b].normalize();
        b = 0;
        for (c = this.faces.length; b < c; b++) d = this.faces[b], d instanceof THREE.Face3 ? (d.vertexNormals[0].copy(e[d.a]), d.vertexNormals[1].copy(e[d.b]), d.vertexNormals[2].copy(e[d.c])) : d instanceof THREE.Face4 && (d.vertexNormals[0].copy(e[d.a]), d.vertexNormals[1].copy(e[d.b]), d.vertexNormals[2].copy(e[d.c]), d.vertexNormals[3].copy(e[d.d]))
    },
    computeMorphNormals: function() {
        var a, b, c, d, e;
        c = 0;
        for (d = this.faces.length; c <
            d; c++) {
            e = this.faces[c];
            e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone();
            e.__originalVertexNormals || (e.__originalVertexNormals = []);
            a = 0;
            for (b = e.vertexNormals.length; a < b; a++) e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone()
        }
        var f = new THREE.Geometry;
        f.faces = this.faces;
        a = 0;
        for (b = this.morphTargets.length; a < b; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {};
                this.morphNormals[a].faceNormals = [];
                this.morphNormals[a].vertexNormals = [];
                var g = this.morphNormals[a].faceNormals,
                    h = this.morphNormals[a].vertexNormals,
                    i, k;
                c = 0;
                for (d = this.faces.length; c < d; c++) e = this.faces[c], i = new THREE.Vector3, k = e instanceof THREE.Face3 ? {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                } : {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3,
                    d: new THREE.Vector3
                }, g.push(i), h.push(k)
            }
            g = this.morphNormals[a];
            f.vertices = this.morphTargets[a].vertices;
            f.computeFaceNormals();
            f.computeVertexNormals();
            c = 0;
            for (d =
                this.faces.length; c < d; c++) e = this.faces[c], i = g.faceNormals[c], k = g.vertexNormals[c], i.copy(e.normal), e instanceof THREE.Face3 ? (k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])) : (k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2]), k.d.copy(e.vertexNormals[3]))
        }
        c = 0;
        for (d = this.faces.length; c < d; c++) e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
    },
    computeTangents: function() {
        function a(a, b, c,
            d, e, f, x) {
            h = a.vertices[b];
            i = a.vertices[c];
            k = a.vertices[d];
            l = g[e];
            m = g[f];
            n = g[x];
            s = i.x - h.x;
            r = k.x - h.x;
            p = i.y - h.y;
            q = k.y - h.y;
            y = i.z - h.z;
            v = k.z - h.z;
            z = m.x - l.x;
            t = n.x - l.x;
            A = m.y - l.y;
            I = n.y - l.y;
            C = 1 / (z * I - t * A);
            E.set((I * s - A * r) * C, (I * p - A * q) * C, (I * y - A * v) * C);
            H.set((z * r - t * s) * C, (z * q - t * p) * C, (z * v - t * y) * C);
            G[b].add(E);
            G[c].add(E);
            G[d].add(E);
            J[b].add(H);
            J[c].add(H);
            J[d].add(H)
        }
        var b, c, d, e, f, g, h, i, k, l, m, n, s, r, p, q, y, v, z, t, A, I, C, x, G = [],
            J = [],
            E = new THREE.Vector3,
            H = new THREE.Vector3,
            B = new THREE.Vector3,
            W = new THREE.Vector3,
            F = new THREE.Vector3;
        b = 0;
        for (c = this.vertices.length; b < c; b++) G[b] = new THREE.Vector3, J[b] = new THREE.Vector3;
        b = 0;
        for (c = this.faces.length; b < c; b++) f = this.faces[b], g = this.faceVertexUvs[0][b], f instanceof THREE.Face3 ? a(this, f.a, f.b, f.c, 0, 1, 2) : f instanceof THREE.Face4 && (a(this, f.a, f.b, f.d, 0, 1, 3), a(this, f.b, f.c, f.d, 1, 2, 3));
        var K = ["a", "b", "c", "d"];
        b = 0;
        for (c = this.faces.length; b < c; b++) {
            f = this.faces[b];
            for (d = 0; d < f.vertexNormals.length; d++) F.copy(f.vertexNormals[d]), e = f[K[d]], x = G[e], B.copy(x), B.sub(F.multiplyScalar(F.dot(x))).normalize(),
                W.crossVectors(f.vertexNormals[d], x), e = W.dot(J[e]), e = 0 > e ? -1 : 1, f.vertexTangents[d] = new THREE.Vector4(B.x, B.y, B.z, e)
        }
        this.hasTangents = !0
    },
    computeLineDistances: function() {
        for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) 0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
        this.boundingSphere.setFromCenterAndPoints(this.boundingSphere.center, this.vertices)
    },
    mergeVertices: function() {
        var a = {},
            b = [],
            c = [],
            d, e = Math.pow(10, 4),
            f, g, h, i, k;
        this.__tmpVertices = void 0;
        f = 0;
        for (g = this.vertices.length; f < g; f++) d = this.vertices[f], d = [Math.round(d.x * e), Math.round(d.y * e), Math.round(d.z * e)].join("_"), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
        e = [];
        f = 0;
        for (g = this.faces.length; f < g; f++)
            if (a = this.faces[f], a instanceof THREE.Face3) {
                a.a = c[a.a];
                a.b = c[a.b];
                a.c = c[a.c];
                h = [a.a, a.b, a.c];
                d = -1;
                for (i = 0; 3 > i; i++)
                    if (h[i] == h[(i + 1) % 3]) {
                        e.push(f);
                        break
                    }
            } else if (a instanceof THREE.Face4) {
            a.a = c[a.a];
            a.b = c[a.b];
            a.c = c[a.c];
            a.d = c[a.d];
            h = [a.a, a.b, a.c, a.d];
            d = -1;
            for (i = 0; 4 > i; i++) h[i] == h[(i + 1) % 4] && (0 <= d && e.push(f), d = i);
            if (0 <= d) {
                h.splice(d, 1);
                var l = new THREE.Face3(h[0], h[1], h[2], a.normal, a.color, a.materialIndex);
                h = 0;
                for (i = this.faceVertexUvs.length; h < i; h++)(k = this.faceVertexUvs[h][f]) && k.splice(d, 1);
                a.vertexNormals && 0 < a.vertexNormals.length && (l.vertexNormals = a.vertexNormals, l.vertexNormals.splice(d,
                    1));
                a.vertexColors && 0 < a.vertexColors.length && (l.vertexColors = a.vertexColors, l.vertexColors.splice(d, 1));
                this.faces[f] = l
            }
        }
        for (f = e.length - 1; 0 <= f; f--) {
            this.faces.splice(f, 1);
            h = 0;
            for (i = this.faceVertexUvs.length; h < i; h++) this.faceVertexUvs[h].splice(f, 1)
        }
        c = this.vertices.length - b.length;
        this.vertices = b;
        return c
    },
    clone: function() {
        for (var a = new THREE.Geometry, b = this.vertices, c = 0, d = b.length; c < d; c++) a.vertices.push(b[c].clone());
        b = this.faces;
        c = 0;
        for (d = b.length; c < d; c++) a.faces.push(b[c].clone());
        b = this.faceVertexUvs[0];
        c = 0;
        for (d = b.length; c < d; c++) {
            for (var e = b[c], f = [], g = 0, h = e.length; g < h; g++) f.push(new THREE.Vector2(e[g].x, e[g].y));
            a.faceVertexUvs[0].push(f)
        }
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.GeometryIdCount = 0;
THREE.BufferGeometry = function() {
    THREE.EventDispatcher.call(this);
    this.id = THREE.GeometryIdCount++;
    this.attributes = {};
    this.dynamic = !1;
    this.offsets = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1;
    this.morphTargets = []
};
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    applyMatrix: function(a) {
        var b, c;
        this.attributes.position && (b = this.attributes.position.array);
        this.attributes.normal && (c = this.attributes.normal.array);
        void 0 !== b && (a.multiplyVector3Array(b), this.verticesNeedUpdate = !0);
        void 0 !== c && (b = new THREE.Matrix3, b.getInverse(a).transpose(), b.multiplyVector3Array(c), this.normalizeNormals(), this.normalsNeedUpdate = !0)
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        var a = this.attributes.position.array;
        if (a) {
            var b = this.boundingBox,
                c, d, e;
            3 <= a.length && (b.min.x = b.max.x = a[0], b.min.y = b.max.y = a[1], b.min.z = b.max.z = a[2]);
            for (var f = 3, g = a.length; f < g; f += 3) c = a[f], d = a[f + 1], e = a[f + 2], c < b.min.x ? b.min.x = c : c > b.max.x && (b.max.x = c), d < b.min.y ? b.min.y = d : d > b.max.y && (b.max.y = d), e < b.min.z ? b.min.z = e : e > b.max.z && (b.max.z = e)
        }
        if (void 0 === a || 0 === a.length) this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere =
            new THREE.Sphere);
        var a = this.attributes.position.array;
        if (a) {
            for (var b, c = 0, d, e, f = 0, g = a.length; f < g; f += 3) b = a[f], d = a[f + 1], e = a[f + 2], b = b * b + d * d + e * e, b > c && (c = b);
            this.boundingSphere.radius = Math.sqrt(c)
        }
    },
    computeVertexNormals: function() {
        if (this.attributes.position) {
            var a, b, c, d;
            a = this.attributes.position.array.length;
            if (void 0 === this.attributes.normal) this.attributes.normal = {
                itemSize: 3,
                array: new Float32Array(a),
                numItems: a
            };
            else {
                a = 0;
                for (b = this.attributes.normal.array.length; a < b; a++) this.attributes.normal.array[a] =
                    0
            }
            var e = this.attributes.position.array,
                f = this.attributes.normal.array,
                g, h, i, k, l, m, n = new THREE.Vector3,
                s = new THREE.Vector3,
                r = new THREE.Vector3,
                p = new THREE.Vector3,
                q = new THREE.Vector3;
            if (this.attributes.index) {
                var y = this.attributes.index.array,
                    v = this.offsets;
                c = 0;
                for (d = v.length; c < d; ++c) {
                    b = v[c].start;
                    g = v[c].count;
                    var z = v[c].index;
                    a = b;
                    for (b += g; a < b; a += 3) g = z + y[a], h = z + y[a + 1], i = z + y[a + 2], k = e[3 * g], l = e[3 * g + 1], m = e[3 * g + 2], n.set(k, l, m), k = e[3 * h], l = e[3 * h + 1], m = e[3 * h + 2], s.set(k, l, m), k = e[3 * i], l = e[3 * i + 1], m = e[3 * i + 2], r.set(k,
                        l, m), p.subVectors(r, s), q.subVectors(n, s), p.cross(q), f[3 * g] += p.x, f[3 * g + 1] += p.y, f[3 * g + 2] += p.z, f[3 * h] += p.x, f[3 * h + 1] += p.y, f[3 * h + 2] += p.z, f[3 * i] += p.x, f[3 * i + 1] += p.y, f[3 * i + 2] += p.z
                }
            } else {
                a = 0;
                for (b = e.length; a < b; a += 9) k = e[a], l = e[a + 1], m = e[a + 2], n.set(k, l, m), k = e[a + 3], l = e[a + 4], m = e[a + 5], s.set(k, l, m), k = e[a + 6], l = e[a + 7], m = e[a + 8], r.set(k, l, m), p.subVectors(r, s), q.subVectors(n, s), p.cross(q), f[a] = p.x, f[a + 1] = p.y, f[a + 2] = p.z, f[a + 3] = p.x, f[a + 4] = p.y, f[a + 5] = p.z, f[a + 6] = p.x, f[a + 7] = p.y, f[a + 8] = p.z
            }
            this.normalizeNormals();
            this.normalsNeedUpdate = !0
        }
    },
    normalizeNormals: function() {
        for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3) b = a[e], c = a[e + 1], d = a[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a[e] *= b, a[e + 1] *= b, a[e + 2] *= b
    },
    computeTangents: function() {
        function a(a) {
            Ca.x = d[3 * a];
            Ca.y = d[3 * a + 1];
            Ca.z = d[3 * a + 2];
            $a.copy(Ca);
            ca = i[a];
            U.copy(ca);
            U.sub(Ca.multiplyScalar(Ca.dot(ca))).normalize();
            fa.crossVectors($a, ca);
            qa = fa.dot(k[a]);
            M = 0 > qa ? -1 : 1;
            h[4 * a] = U.x;
            h[4 * a + 1] = U.y;
            h[4 * a + 2] = U.z;
            h[4 * a + 3] = M
        }
        if (void 0 === this.attributes.index || void 0 === this.attributes.position ||
            void 0 === this.attributes.normal || void 0 === this.attributes.uv) console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        else {
            var b = this.attributes.index.array,
                c = this.attributes.position.array,
                d = this.attributes.normal.array,
                e = this.attributes.uv.array,
                f = c.length / 3;
            if (void 0 === this.attributes.tangent) {
                var g = 4 * f;
                this.attributes.tangent = {
                    itemSize: 4,
                    array: new Float32Array(g),
                    numItems: g
                }
            }
            for (var h = this.attributes.tangent.array, i = [], k = [], g = 0; g < f; g++) i[g] =
                new THREE.Vector3, k[g] = new THREE.Vector3;
            var l, m, n, s, r, p, q, y, v, z, t, A, I, C, x, f = new THREE.Vector3,
                g = new THREE.Vector3,
                G, J, E, H, B, W, F, K = this.offsets;
            E = 0;
            for (H = K.length; E < H; ++E) {
                J = K[E].start;
                B = K[E].count;
                var L = K[E].index;
                G = J;
                for (J += B; G < J; G += 3) B = L + b[G], W = L + b[G + 1], F = L + b[G + 2], l = c[3 * B], m = c[3 * B + 1], n = c[3 * B + 2], s = c[3 * W], r = c[3 * W + 1], p = c[3 * W + 2], q = c[3 * F], y = c[3 * F + 1], v = c[3 * F + 2], z = e[2 * B], t = e[2 * B + 1], A = e[2 * W], I = e[2 * W + 1], C = e[2 * F], x = e[2 * F + 1], s -= l, l = q - l, r -= m, m = y - m, p -= n, n = v - n, A -= z, z = C - z, I -= t, t = x - t, x = 1 / (A * t - z * I), f.set((t * s -
                    I * l) * x, (t * r - I * m) * x, (t * p - I * n) * x), g.set((A * l - z * s) * x, (A * m - z * r) * x, (A * n - z * p) * x), i[B].add(f), i[W].add(f), i[F].add(f), k[B].add(g), k[W].add(g), k[F].add(g)
            }
            var U = new THREE.Vector3,
                fa = new THREE.Vector3,
                Ca = new THREE.Vector3,
                $a = new THREE.Vector3,
                M, ca, qa;
            E = 0;
            for (H = K.length; E < H; ++E) {
                J = K[E].start;
                B = K[E].count;
                L = K[E].index;
                G = J;
                for (J += B; G < J; G += 3) B = L + b[G], W = L + b[G + 1], F = L + b[G + 2], a(B), a(W), a(F)
            }
            this.tangentsNeedUpdate = this.hasTangents = !0
        }
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.Camera = function() {
    THREE.Object3D.call(this);
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4;
    this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt = function(a) {
    this.matrix.lookAt(this.position, a, this.up);
    !0 === this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
};
THREE.OrthographicCamera = function(a, b, c, d, e, f) {
    THREE.Camera.call(this);
    this.left = a;
    this.right = b;
    this.top = c;
    this.bottom = d;
    this.near = void 0 !== e ? e : 0.1;
    this.far = void 0 !== f ? f : 2E3;
    this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.PerspectiveCamera = function(a, b, c, d) {
    THREE.Camera.call(this);
    this.fov = void 0 !== a ? a : 50;
    this.aspect = void 0 !== b ? b : 1;
    this.near = void 0 !== c ? c : 0.1;
    this.far = void 0 !== d ? d : 2E3;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function(a, b, c, d, e, f) {
    this.fullWidth = a;
    this.fullHeight = b;
    this.x = c;
    this.y = d;
    this.width = e;
    this.height = f;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    if (this.fullWidth) {
        var a = this.fullWidth / this.fullHeight,
            b = Math.tan(THREE.Math.degToRad(0.5 * this.fov)) * this.near,
            c = -b,
            d = a * c,
            a = Math.abs(a * b - d),
            c = Math.abs(b - c);
        this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Light = function(a) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(a)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.AmbientLight = function(a) {
    THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AreaLight = function(a, b) {
    THREE.Light.call(this, a);
    this.normal = new THREE.Vector3(0, -1, 0);
    this.right = new THREE.Vector3(1, 0, 0);
    this.intensity = void 0 !== b ? b : 1;
    this.height = this.width = 1;
    this.constantAttenuation = 1.5;
    this.linearAttenuation = 0.5;
    this.quadraticAttenuation = 0.1
};
THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function(a, b) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraLeft = -500;
    this.shadowCameraTop = this.shadowCameraRight = 500;
    this.shadowCameraBottom = -500;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowCascade = !1;
    this.shadowCascadeOffset =
        new THREE.Vector3(0, 0, -1E3);
    this.shadowCascadeCount = 2;
    this.shadowCascadeBias = [0, 0, 0];
    this.shadowCascadeWidth = [512, 512, 512];
    this.shadowCascadeHeight = [512, 512, 512];
    this.shadowCascadeNearZ = [-1, 0.99, 0.998];
    this.shadowCascadeFarZ = [0.99, 0.998, 1];
    this.shadowCascadeArray = [];
    this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.groundColor = new THREE.Color(b);
    this.position = new THREE.Vector3(0, 100, 0);
    this.intensity = void 0 !== c ? c : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 0, 0);
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight = function(a, b, c, d, e) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 2;
    this.exponent = void 0 !== e ? e : 10;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraFov = 50;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowMatrix = this.shadowCamera =
        this.shadowMapSize = this.shadowMap = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.Loader = function(a) {
    this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function() {};
    this.onLoadProgress = function() {};
    this.onLoadComplete = function() {}
};
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: "anonymous",
    addStatusElement: function() {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.right = "0px";
        a.style.top = "0px";
        a.style.fontSize = "0.8em";
        a.style.textAlign = "left";
        a.style.background = "rgba(0,0,0,0.25)";
        a.style.color = "#fff";
        a.style.width = "120px";
        a.style.padding = "0.5em 0.5em 0.5em 0.5em";
        a.style.zIndex = 1E3;
        a.innerHTML = "Loading ...";
        return a
    },
    updateProgress: function(a) {
        var b = "Loaded ",
            b = a.total ? b + ((100 * a.loaded /
                a.total).toFixed(0) + "%") : b + ((a.loaded / 1E3).toFixed(2) + " KB");
        this.statusDomElement.innerHTML = b
    },
    extractUrlBase: function(a) {
        a = a.split("/");
        a.pop();
        return (1 > a.length ? "." : a.join("/")) + "/"
    },
    initMaterials: function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) c[d] = THREE.Loader.prototype.createMaterial(a[d], b);
        return c
    },
    needsTangents: function(a) {
        for (var b = 0, c = a.length; b < c; b++)
            if (a[b] instanceof THREE.ShaderMaterial) return !0;
        return !1
    },
    createMaterial: function(a, b) {
        function c(a) {
            a = Math.log(a) / Math.LN2;
            return Math.floor(a) ==
                a
        }

        function d(a) {
            a = Math.log(a) / Math.LN2;
            return Math.pow(2, Math.round(a))
        }

        function e(a, e, f, h, i, k, q) {
            var y = /\.dds$/i.test(f),
                v = b + "/" + f;
            if (y) {
                var z = THREE.ImageUtils.loadCompressedTexture(v);
                a[e] = z
            } else z = document.createElement("canvas"), a[e] = new THREE.Texture(z);
            a[e].sourceFile = f;
            h && (a[e].repeat.set(h[0], h[1]), 1 !== h[0] && (a[e].wrapS = THREE.RepeatWrapping), 1 !== h[1] && (a[e].wrapT = THREE.RepeatWrapping));
            i && a[e].offset.set(i[0], i[1]);
            k && (f = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                }, void 0 !==
                f[k[0]] && (a[e].wrapS = f[k[0]]), void 0 !== f[k[1]] && (a[e].wrapT = f[k[1]]));
            q && (a[e].anisotropy = q);
            if (!y) {
                var t = a[e],
                    a = new Image;
                a.onload = function() {
                    if (!c(this.width) || !c(this.height)) {
                        var a = d(this.width),
                            b = d(this.height);
                        t.image.width = a;
                        t.image.height = b;
                        t.image.getContext("2d").drawImage(this, 0, 0, a, b)
                    } else t.image = this;
                    t.needsUpdate = !0
                };
                a.crossOrigin = g.crossOrigin;
                a.src = v
            }
        }

        function f(a) {
            return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
        }
        var g = this,
            h = "MeshLambertMaterial",
            i = {
                color: 15658734,
                opacity: 1,
                map: null,
                lightMap: null,
                normalMap: null,
                bumpMap: null,
                wireframe: !1
            };
        if (a.shading) {
            var k = a.shading.toLowerCase();
            "phong" === k ? h = "MeshPhongMaterial" : "basic" === k && (h = "MeshBasicMaterial")
        }
        void 0 !== a.blending && void 0 !== THREE[a.blending] && (i.blending = THREE[a.blending]);
        if (void 0 !== a.transparent || 1 > a.opacity) i.transparent = a.transparent;
        void 0 !== a.depthTest && (i.depthTest = a.depthTest);
        void 0 !== a.depthWrite && (i.depthWrite = a.depthWrite);
        void 0 !== a.visible && (i.visible = a.visible);
        void 0 !== a.flipSided && (i.side = THREE.BackSide);
        void 0 !== a.doubleSided && (i.side = THREE.DoubleSide);
        void 0 !== a.wireframe && (i.wireframe = a.wireframe);
        void 0 !== a.vertexColors && ("face" === a.vertexColors ? i.vertexColors = THREE.FaceColors : a.vertexColors && (i.vertexColors = THREE.VertexColors));
        a.colorDiffuse ? i.color = f(a.colorDiffuse) : a.DbgColor && (i.color = a.DbgColor);
        a.colorSpecular && (i.specular = f(a.colorSpecular));
        a.colorAmbient && (i.ambient = f(a.colorAmbient));
        a.transparency && (i.opacity = a.transparency);
        a.specularCoef && (i.shininess = a.specularCoef);
        a.mapDiffuse &&
            b && e(i, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap, a.mapDiffuseAnisotropy);
        a.mapLight && b && e(i, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
        a.mapBump && b && e(i, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
        a.mapNormal && b && e(i, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
        a.mapSpecular && b && e(i, "specularMap", a.mapSpecular, a.mapSpecularRepeat,
            a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
        a.mapBumpScale && (i.bumpScale = a.mapBumpScale);
        a.mapNormal ? (h = THREE.ShaderLib.normalmap, k = THREE.UniformsUtils.clone(h.uniforms), k.tNormal.value = i.normalMap, a.mapNormalFactor && k.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), i.map && (k.tDiffuse.value = i.map, k.enableDiffuse.value = !0), i.specularMap && (k.tSpecular.value = i.specularMap, k.enableSpecular.value = !0), i.lightMap && (k.tAO.value = i.lightMap, k.enableAO.value = !0), k.uDiffuseColor.value.setHex(i.color),
            k.uSpecularColor.value.setHex(i.specular), k.uAmbientColor.value.setHex(i.ambient), k.uShininess.value = i.shininess, void 0 !== i.opacity && (k.uOpacity.value = i.opacity), h = new THREE.ShaderMaterial({
                fragmentShader: h.fragmentShader,
                vertexShader: h.vertexShader,
                uniforms: k,
                lights: !0,
                fog: !0
            }), i.transparent && (h.transparent = !0)) : h = new THREE[h](i);
        void 0 !== a.DbgName && (h.name = a.DbgName);
        return h
    }
};
THREE.ImageLoader = function() {
    THREE.EventDispatcher.call(this);
    this.crossOrigin = null
};
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(a, b) {
        var c = this;
        void 0 === b && (b = new Image);
        b.addEventListener("load", function() {
            c.dispatchEvent({
                type: "load",
                content: b
            })
        }, !1);
        b.addEventListener("error", function() {
            c.dispatchEvent({
                type: "error",
                message: "Couldn't load URL [" + a + "]"
            })
        }, !1);
        c.crossOrigin && (b.crossOrigin = c.crossOrigin);
        b.src = a
    }
};
THREE.JSONLoader = function(a) {
    THREE.Loader.call(this, a);
    this.withCredentials = !1
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function(a, b, c) {
    c = c && "string" === typeof c ? c : this.extractUrlBase(a);
    this.onLoadStart();
    this.loadAjaxJSON(this, a, b, c)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function(a, b, c, d, e) {
    var f = new XMLHttpRequest,
        g = 0;
    f.onreadystatechange = function() {
        if (f.readyState === f.DONE)
            if (200 === f.status || 0 === f.status) {
                if (f.responseText) {
                    var h = JSON.parse(f.responseText);
                    a.createModel(h, c, d)
                } else console.warn("THREE.JSONLoader: [" + b + "] seems to be unreachable or file there is empty");
                a.onLoadComplete()
            } else console.error("THREE.JSONLoader: Couldn't load [" + b + "] [" + f.status + "]");
        else f.readyState === f.LOADING ? e && (0 === g && (g = f.getResponseHeader("Content-Length")),
            e({
                total: g,
                loaded: f.responseText.length
            })) : f.readyState === f.HEADERS_RECEIVED && (g = f.getResponseHeader("Content-Length"))
    };
    f.open("GET", b, !0);
    f.withCredentials = this.withCredentials;
    f.send(null)
};
THREE.JSONLoader.prototype.createModel = function(a, b, c) {
    var d = new THREE.Geometry,
        e = void 0 !== a.scale ? 1 / a.scale : 1,
        f, g, h, i, k, l, m, n, s, r, p, q, y, v, z, t = a.faces;
    r = a.vertices;
    var A = a.normals,
        I = a.colors,
        C = 0;
    for (f = 0; f < a.uvs.length; f++) a.uvs[f].length && C++;
    for (f = 0; f < C; f++) d.faceUvs[f] = [], d.faceVertexUvs[f] = [];
    i = 0;
    for (k = r.length; i < k;) l = new THREE.Vector3, l.x = r[i++] * e, l.y = r[i++] * e, l.z = r[i++] * e, d.vertices.push(l);
    i = 0;
    for (k = t.length; i < k;) {
        r = t[i++];
        l = r & 1;
        h = r & 2;
        f = r & 4;
        g = r & 8;
        n = r & 16;
        m = r & 32;
        p = r & 64;
        r &= 128;
        l ? (q = new THREE.Face4,
            q.a = t[i++], q.b = t[i++], q.c = t[i++], q.d = t[i++], l = 4) : (q = new THREE.Face3, q.a = t[i++], q.b = t[i++], q.c = t[i++], l = 3);
        h && (h = t[i++], q.materialIndex = h);
        h = d.faces.length;
        if (f)
            for (f = 0; f < C; f++) y = a.uvs[f], s = t[i++], z = y[2 * s], s = y[2 * s + 1], d.faceUvs[f][h] = new THREE.Vector2(z, s);
        if (g)
            for (f = 0; f < C; f++) {
                y = a.uvs[f];
                v = [];
                for (g = 0; g < l; g++) s = t[i++], z = y[2 * s], s = y[2 * s + 1], v[g] = new THREE.Vector2(z, s);
                d.faceVertexUvs[f][h] = v
            }
        n && (n = 3 * t[i++], g = new THREE.Vector3, g.x = A[n++], g.y = A[n++], g.z = A[n], q.normal = g);
        if (m)
            for (f = 0; f < l; f++) n = 3 * t[i++], g =
                new THREE.Vector3, g.x = A[n++], g.y = A[n++], g.z = A[n], q.vertexNormals.push(g);
        p && (m = t[i++], m = new THREE.Color(I[m]), q.color = m);
        if (r)
            for (f = 0; f < l; f++) m = t[i++], m = new THREE.Color(I[m]), q.vertexColors.push(m);
        d.faces.push(q)
    }
    if (a.skinWeights) {
        i = 0;
        for (k = a.skinWeights.length; i < k; i += 2) t = a.skinWeights[i], A = a.skinWeights[i + 1], d.skinWeights.push(new THREE.Vector4(t, A, 0, 0))
    }
    if (a.skinIndices) {
        i = 0;
        for (k = a.skinIndices.length; i < k; i += 2) t = a.skinIndices[i], A = a.skinIndices[i + 1], d.skinIndices.push(new THREE.Vector4(t, A, 0, 0))
    }
    d.bones =
        a.bones;
    d.animation = a.animation;
    if (void 0 !== a.morphTargets) {
        i = 0;
        for (k = a.morphTargets.length; i < k; i++) {
            d.morphTargets[i] = {};
            d.morphTargets[i].name = a.morphTargets[i].name;
            d.morphTargets[i].vertices = [];
            I = d.morphTargets[i].vertices;
            C = a.morphTargets[i].vertices;
            t = 0;
            for (A = C.length; t < A; t += 3) r = new THREE.Vector3, r.x = C[t] * e, r.y = C[t + 1] * e, r.z = C[t + 2] * e, I.push(r)
        }
    }
    if (void 0 !== a.morphColors) {
        i = 0;
        for (k = a.morphColors.length; i < k; i++) {
            d.morphColors[i] = {};
            d.morphColors[i].name = a.morphColors[i].name;
            d.morphColors[i].colors = [];
            A = d.morphColors[i].colors;
            I = a.morphColors[i].colors;
            e = 0;
            for (t = I.length; e < t; e += 3) C = new THREE.Color(16755200), C.setRGB(I[e], I[e + 1], I[e + 2]), A.push(C)
        }
    }
    d.computeCentroids();
    d.computeFaceNormals();
    a = this.initMaterials(a.materials, c);
    this.needsTangents(a) && d.computeTangents();
    b(d, a)
};
THREE.LoadingMonitor = function() {
    THREE.EventDispatcher.call(this);
    var a = this,
        b = 0,
        c = 0,
        d = function() {
            b++;
            a.dispatchEvent({
                type: "progress",
                loaded: b,
                total: c
            });
            b === c && a.dispatchEvent({
                type: "load"
            })
        };
    this.add = function(a) {
        c++;
        a.addEventListener("load", d, !1)
    }
};
THREE.SceneLoader = function() {
    this.onLoadStart = function() {};
    this.onLoadProgress = function() {};
    this.onLoadComplete = function() {};
    this.callbackSync = function() {};
    this.callbackProgress = function() {};
    this.geometryHandlerMap = {};
    this.hierarchyHandlerMap = {};
    this.addGeometryHandler("ascii", THREE.JSONLoader)
};
THREE.SceneLoader.prototype.constructor = THREE.SceneLoader;
THREE.SceneLoader.prototype.load = function(a, b) {
    var c = this,
        d = new XMLHttpRequest;
    d.onreadystatechange = function() {
        if (4 === d.readyState)
            if (200 === d.status || 0 === d.status) {
                var e = JSON.parse(d.responseText);
                c.parse(e, b, a)
            } else console.error("THREE.SceneLoader: Couldn't load [" + a + "] [" + d.status + "]")
    };
    d.open("GET", a, !0);
    d.send(null)
};
THREE.SceneLoader.prototype.addGeometryHandler = function(a, b) {
    this.geometryHandlerMap[a] = {
        loaderClass: b
    }
};
THREE.SceneLoader.prototype.addHierarchyHandler = function(a, b) {
    this.hierarchyHandlerMap[a] = {
        loaderClass: b
    }
};
THREE.SceneLoader.prototype.parse = function(a, b, c) {
    function d(a, b) {
        return "relativeToHTML" == b ? a : m + "/" + a
    }

    function e() {
        f(x.scene, J.objects)
    }

    function f(a, b) {
        var c, e, g, i, k, m, p;
        for (p in b)
            if (void 0 === x.objects[p]) {
                var q = b[p],
                    t = null;
                if (q.type && q.type in l.hierarchyHandlerMap) {
                    if (void 0 === q.loading) {
                        e = {
                            type: 1,
                            url: 1,
                            material: 1,
                            position: 1,
                            rotation: 1,
                            scale: 1,
                            visible: 1,
                            children: 1,
                            properties: 1,
                            skin: 1,
                            morph: 1,
                            mirroredLoop: 1,
                            duration: 1
                        };
                        g = {};
                        for (var B in q) B in e || (g[B] = q[B]);
                        s = x.materials[q.material];
                        q.loading = !0;
                        e = l.hierarchyHandlerMap[q.type].loaderObject;
                        e.options ? e.load(d(q.url, J.urlBaseType), h(p, a, s, q)) : e.load(d(q.url, J.urlBaseType), h(p, a, s, q), g)
                    }
                } else if (void 0 !== q.geometry) {
                    if (n = x.geometries[q.geometry]) {
                        t = !1;
                        s = x.materials[q.material];
                        t = s instanceof THREE.ShaderMaterial;
                        g = q.position;
                        i = q.rotation;
                        k = q.scale;
                        c = q.matrix;
                        m = q.quaternion;
                        q.material || (s = new THREE.MeshFaceMaterial(x.face_materials[q.geometry]));
                        s instanceof THREE.MeshFaceMaterial && 0 === s.materials.length && (s = new THREE.MeshFaceMaterial(x.face_materials[q.geometry]));
                        if (s instanceof THREE.MeshFaceMaterial)
                            for (e = 0; e < s.materials.length; e++) t = t || s.materials[e] instanceof THREE.ShaderMaterial;
                        t && n.computeTangents();
                        q.skin ? t = new THREE.SkinnedMesh(n, s) : q.morph ? (t = new THREE.MorphAnimMesh(n, s), void 0 !== q.duration && (t.duration = q.duration), void 0 !== q.time && (t.time = q.time), void 0 !== q.mirroredLoop && (t.mirroredLoop = q.mirroredLoop), s.morphNormals && n.computeMorphNormals()) : t = new THREE.Mesh(n, s);
                        t.name = p;
                        c ? (t.matrixAutoUpdate = !1, t.matrix.set(c[0], c[1], c[2], c[3], c[4], c[5], c[6],
                            c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15])) : (t.position.set(g[0], g[1], g[2]), m ? (t.quaternion.set(m[0], m[1], m[2], m[3]), t.useQuaternion = !0) : t.rotation.set(i[0], i[1], i[2]), t.scale.set(k[0], k[1], k[2]));
                        t.visible = q.visible;
                        t.castShadow = q.castShadow;
                        t.receiveShadow = q.receiveShadow;
                        a.add(t);
                        x.objects[p] = t
                    }
                } else "DirectionalLight" === q.type || "PointLight" === q.type || "AmbientLight" === q.type ? (v = void 0 !== q.color ? q.color : 16777215, z = void 0 !== q.intensity ? q.intensity : 1, "DirectionalLight" === q.type ? (g = q.direction,
                    y = new THREE.DirectionalLight(v, z), y.position.set(g[0], g[1], g[2]), q.target && (G.push({
                        object: y,
                        targetName: q.target
                    }), y.target = null)) : "PointLight" === q.type ? (g = q.position, e = q.distance, y = new THREE.PointLight(v, z, e), y.position.set(g[0], g[1], g[2])) : "AmbientLight" === q.type && (y = new THREE.AmbientLight(v)), a.add(y), y.name = p, x.lights[p] = y, x.objects[p] = y) : "PerspectiveCamera" === q.type || "OrthographicCamera" === q.type ? ("PerspectiveCamera" === q.type ? r = new THREE.PerspectiveCamera(q.fov, q.aspect, q.near, q.far) : "OrthographicCamera" ===
                    q.type && (r = new THREE.OrthographicCamera(q.left, q.right, q.top, q.bottom, q.near, q.far)), g = q.position, r.position.set(g[0], g[1], g[2]), a.add(r), r.name = p, x.cameras[p] = r, x.objects[p] = r) : (g = q.position, i = q.rotation, k = q.scale, m = q.quaternion, t = new THREE.Object3D, t.name = p, t.position.set(g[0], g[1], g[2]), m ? (t.quaternion.set(m[0], m[1], m[2], m[3]), t.useQuaternion = !0) : t.rotation.set(i[0], i[1], i[2]), t.scale.set(k[0], k[1], k[2]), t.visible = void 0 !== q.visible ? q.visible : !1, a.add(t), x.objects[p] = t, x.empties[p] = t);
                if (t) {
                    if (void 0 !==
                        q.properties)
                        for (var C in q.properties) t.properties[C] = q.properties[C];
                    if (void 0 !== q.groups)
                        for (e = 0; e < q.groups.length; e++) g = q.groups[e], void 0 === x.groups[g] && (x.groups[g] = []), x.groups[g].push(p);
                    void 0 !== q.children && f(t, q.children)
                }
            }
    }

    function g(a) {
        return function(b, c) {
            x.geometries[a] = b;
            x.face_materials[a] = c;
            e();
            t -= 1;
            l.onLoadComplete();
            k()
        }
    }

    function h(a, b, c, d) {
        return function(f) {
            var f = f.content ? f.content : f.dae ? f.scene : f,
                g = d.position,
                h = d.rotation,
                i = d.quaternion,
                n = d.scale;
            f.position.set(g[0], g[1], g[2]);
            i ? (f.quaternion.set(i[0], i[1], i[2], i[3]), f.useQuaternion = !0) : f.rotation.set(h[0], h[1], h[2]);
            f.scale.set(n[0], n[1], n[2]);
            c && f.traverse(function(a) {
                a.material = c
            });
            var m = void 0 !== d.visible ? d.visible : !0;
            f.traverse(function(a) {
                a.visible = m
            });
            b.add(f);
            f.name = a;
            x.objects[a] = f;
            e();
            t -= 1;
            l.onLoadComplete();
            k()
        }
    }

    function i(a) {
        return function(b, c) {
            x.geometries[a] = b;
            x.face_materials[a] = c
        }
    }

    function k() {
        l.callbackProgress({
            totalModels: I,
            totalTextures: C,
            loadedModels: I - t,
            loadedTextures: C - A
        }, x);
        l.onLoadProgress();
        if (0 ===
            t && 0 === A) {
            for (var a = 0; a < G.length; a++) {
                var c = G[a],
                    d = x.objects[c.targetName];
                d ? c.object.target = d : (c.object.target = new THREE.Object3D, x.scene.add(c.object.target));
                c.object.target.properties.targetInverse = c.object
            }
            b(x)
        }
    }
    var l = this,
        m = THREE.Loader.prototype.extractUrlBase(c),
        n, s, r, p, q, y, v, z, t, A, I, C, x, G = [],
        J = a,
        E;
    for (E in this.geometryHandlerMap) a = this.geometryHandlerMap[E].loaderClass, this.geometryHandlerMap[E].loaderObject = new a;
    for (E in this.hierarchyHandlerMap) a = this.hierarchyHandlerMap[E].loaderClass,
        this.hierarchyHandlerMap[E].loaderObject = new a;
    A = t = 0;
    x = {
        scene: new THREE.Scene,
        geometries: {},
        face_materials: {},
        materials: {},
        textures: {},
        objects: {},
        cameras: {},
        lights: {},
        fogs: {},
        empties: {},
        groups: {}
    };
    if (J.transform && (E = J.transform.position, a = J.transform.rotation, c = J.transform.scale, E && x.scene.position.set(E[0], E[1], E[2]), a && x.scene.rotation.set(a[0], a[1], a[2]), c && x.scene.scale.set(c[0], c[1], c[2]), E || a || c)) x.scene.updateMatrix(), x.scene.updateMatrixWorld();
    E = function(a) {
        return function() {
            A -= a;
            k();
            l.onLoadComplete()
        }
    };
    for (var H in J.fogs) a = J.fogs[H], "linear" === a.type ? p = new THREE.Fog(0, a.near, a.far) : "exp2" === a.type && (p = new THREE.FogExp2(0, a.density)), a = a.color, p.color.setRGB(a[0], a[1], a[2]), x.fogs[H] = p;
    for (var B in J.geometries) p = J.geometries[B], p.type in this.geometryHandlerMap && (t += 1, l.onLoadStart());
    for (var W in J.objects) p = J.objects[W], p.type && p.type in this.hierarchyHandlerMap && (t += 1, l.onLoadStart());
    I = t;
    for (B in J.geometries)
        if (p = J.geometries[B], "cube" === p.type) n = new THREE.CubeGeometry(p.width, p.height, p.depth,
            p.widthSegments, p.heightSegments, p.depthSegments), x.geometries[B] = n;
        else if ("plane" === p.type) n = new THREE.PlaneGeometry(p.width, p.height, p.widthSegments, p.heightSegments), x.geometries[B] = n;
    else if ("sphere" === p.type) n = new THREE.SphereGeometry(p.radius, p.widthSegments, p.heightSegments), x.geometries[B] = n;
    else if ("cylinder" === p.type) n = new THREE.CylinderGeometry(p.topRad, p.botRad, p.height, p.radSegs, p.heightSegs), x.geometries[B] = n;
    else if ("torus" === p.type) n = new THREE.TorusGeometry(p.radius, p.tube, p.segmentsR,
        p.segmentsT), x.geometries[B] = n;
    else if ("icosahedron" === p.type) n = new THREE.IcosahedronGeometry(p.radius, p.subdivisions), x.geometries[B] = n;
    else if (p.type in this.geometryHandlerMap) {
        W = {};
        for (q in p) "type" !== q && "url" !== q && (W[q] = p[q]);
        this.geometryHandlerMap[p.type].loaderObject.load(d(p.url, J.urlBaseType), g(B), W)
    } else "embedded" === p.type && (W = J.embeds[p.id], W.metadata = J.metadata, W && this.geometryHandlerMap.ascii.loaderObject.createModel(W, i(B), ""));
    for (var F in J.textures)
        if (B = J.textures[F], B.url instanceof Array) {
            A += B.url.length;
            for (q = 0; q < B.url.length; q++) l.onLoadStart()
        } else A += 1, l.onLoadStart();
    C = A;
    for (F in J.textures) {
        B = J.textures[F];
        void 0 !== B.mapping && void 0 !== THREE[B.mapping] && (B.mapping = new THREE[B.mapping]);
        if (B.url instanceof Array) {
            W = B.url.length;
            p = [];
            for (q = 0; q < W; q++) p[q] = d(B.url[q], J.urlBaseType);
            q = (q = /\.dds$/i.test(p[0])) ? THREE.ImageUtils.loadCompressedTextureCube(p, B.mapping, E(W)) : THREE.ImageUtils.loadTextureCube(p, B.mapping, E(W))
        } else q = /\.dds$/i.test(B.url), W = d(B.url, J.urlBaseType), p =
            E(1), q = q ? THREE.ImageUtils.loadCompressedTexture(W, B.mapping, p) : THREE.ImageUtils.loadTexture(W, B.mapping, p), void 0 !== THREE[B.minFilter] && (q.minFilter = THREE[B.minFilter]), void 0 !== THREE[B.magFilter] && (q.magFilter = THREE[B.magFilter]), B.anisotropy && (q.anisotropy = B.anisotropy), B.repeat && (q.repeat.set(B.repeat[0], B.repeat[1]), 1 !== B.repeat[0] && (q.wrapS = THREE.RepeatWrapping), 1 !== B.repeat[1] && (q.wrapT = THREE.RepeatWrapping)), B.offset && q.offset.set(B.offset[0], B.offset[1]), B.wrap && (W = {
                repeat: THREE.RepeatWrapping,
                mirror: THREE.MirroredRepeatWrapping
            }, void 0 !== W[B.wrap[0]] && (q.wrapS = W[B.wrap[0]]), void 0 !== W[B.wrap[1]] && (q.wrapT = W[B.wrap[1]]));
        x.textures[F] = q
    }
    var K, L;
    for (K in J.materials) {
        F = J.materials[K];
        for (L in F.parameters) "envMap" === L || "map" === L || "lightMap" === L || "bumpMap" === L ? F.parameters[L] = x.textures[F.parameters[L]] : "shading" === L ? F.parameters[L] = "flat" === F.parameters[L] ? THREE.FlatShading : THREE.SmoothShading : "side" === L ? F.parameters[L] = "double" == F.parameters[L] ? THREE.DoubleSide : "back" == F.parameters[L] ?
            THREE.BackSide : THREE.FrontSide : "blending" === L ? F.parameters[L] = F.parameters[L] in THREE ? THREE[F.parameters[L]] : THREE.NormalBlending : "combine" === L ? F.parameters[L] = F.parameters[L] in THREE ? THREE[F.parameters[L]] : THREE.MultiplyOperation : "vertexColors" === L ? "face" == F.parameters[L] ? F.parameters[L] = THREE.FaceColors : F.parameters[L] && (F.parameters[L] = THREE.VertexColors) : "wrapRGB" === L && (E = F.parameters[L], F.parameters[L] = new THREE.Vector3(E[0], E[1], E[2]));
        void 0 !== F.parameters.opacity && 1 > F.parameters.opacity &&
            (F.parameters.transparent = !0);
        F.parameters.normalMap ? (E = THREE.ShaderLib.normalmap, B = THREE.UniformsUtils.clone(E.uniforms), q = F.parameters.color, W = F.parameters.specular, p = F.parameters.ambient, H = F.parameters.shininess, B.tNormal.value = x.textures[F.parameters.normalMap], F.parameters.normalScale && B.uNormalScale.value.set(F.parameters.normalScale[0], F.parameters.normalScale[1]), F.parameters.map && (B.tDiffuse.value = F.parameters.map, B.enableDiffuse.value = !0), F.parameters.envMap && (B.tCube.value = F.parameters.envMap,
                B.enableReflection.value = !0, B.uReflectivity.value = F.parameters.reflectivity), F.parameters.lightMap && (B.tAO.value = F.parameters.lightMap, B.enableAO.value = !0), F.parameters.specularMap && (B.tSpecular.value = x.textures[F.parameters.specularMap], B.enableSpecular.value = !0), F.parameters.displacementMap && (B.tDisplacement.value = x.textures[F.parameters.displacementMap], B.enableDisplacement.value = !0, B.uDisplacementBias.value = F.parameters.displacementBias, B.uDisplacementScale.value = F.parameters.displacementScale),
            B.uDiffuseColor.value.setHex(q), B.uSpecularColor.value.setHex(W), B.uAmbientColor.value.setHex(p), B.uShininess.value = H, F.parameters.opacity && (B.uOpacity.value = F.parameters.opacity), s = new THREE.ShaderMaterial({
                fragmentShader: E.fragmentShader,
                vertexShader: E.vertexShader,
                uniforms: B,
                lights: !0,
                fog: !0
            })) : s = new THREE[F.type](F.parameters);
        x.materials[K] = s
    }
    for (K in J.materials)
        if (F = J.materials[K], F.parameters.materials) {
            L = [];
            for (q = 0; q < F.parameters.materials.length; q++) L.push(x.materials[F.parameters.materials[q]]);
            x.materials[K].materials = L
        } e();
    x.cameras && J.defaults.camera && (x.currentCamera = x.cameras[J.defaults.camera]);
    x.fogs && J.defaults.fog && (x.scene.fog = x.fogs[J.defaults.fog]);
    l.callbackSync(x);
    k()
};
THREE.TextureLoader = function() {
    THREE.EventDispatcher.call(this);
    this.crossOrigin = null
};
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(a) {
        var b = this,
            c = new Image;
        c.addEventListener("load", function() {
            var a = new THREE.Texture(c);
            a.needsUpdate = !0;
            b.dispatchEvent({
                type: "load",
                content: a
            })
        }, !1);
        c.addEventListener("error", function() {
            b.dispatchEvent({
                type: "error",
                message: "Couldn't load URL [" + a + "]"
            })
        }, !1);
        b.crossOrigin && (c.crossOrigin = b.crossOrigin);
        c.src = a
    }
};
THREE.Material = function() {
    THREE.EventDispatcher.call(this);
    this.id = THREE.MaterialIdCount++;
    this.name = "";
    this.side = THREE.FrontSide;
    this.opacity = 1;
    this.transparent = !1;
    this.blending = THREE.NormalBlending;
    this.blendSrc = THREE.SrcAlphaFactor;
    this.blendDst = THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = THREE.AddEquation;
    this.depthWrite = this.depthTest = !0;
    this.polygonOffset = !1;
    this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.overdraw = !1;
    this.needsUpdate = this.visible = !0
};
THREE.Material.prototype.setValues = function(a) {
    if (void 0 !== a)
        for (var b in a) {
            var c = a[b];
            if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
            else if (b in this) {
                var d = this[b];
                d instanceof THREE.Color && c instanceof THREE.Color ? d.copy(c) : d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = c
            }
        }
};
THREE.Material.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Material);
    a.name = this.name;
    a.side = this.side;
    a.opacity = this.opacity;
    a.transparent = this.transparent;
    a.blending = this.blending;
    a.blendSrc = this.blendSrc;
    a.blendDst = this.blendDst;
    a.blendEquation = this.blendEquation;
    a.depthTest = this.depthTest;
    a.depthWrite = this.depthWrite;
    a.polygonOffset = this.polygonOffset;
    a.polygonOffsetFactor = this.polygonOffsetFactor;
    a.polygonOffsetUnits = this.polygonOffsetUnits;
    a.alphaTest = this.alphaTest;
    a.overdraw = this.overdraw;
    a.visible = this.visible;
    return a
};
THREE.Material.prototype.dispose = function() {
    this.dispatchEvent({
        type: "dispose"
    })
};
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function() {
    var a = new THREE.LineBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.linewidth = this.linewidth;
    a.linecap = this.linecap;
    a.linejoin = this.linejoin;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.LineDashedMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.scale = this.linewidth = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone = function() {
    var a = new THREE.LineDashedMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.linewidth = this.linewidth;
    a.scale = this.scale;
    a.dashSize = this.dashSize;
    a.gapSize = this.gapSize;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.MeshBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function() {
    var a = new THREE.MeshBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin =
        this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    return a
};
THREE.MeshLambertMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.wrapAround = !1;
    this.wrapRGB = new THREE.Vector3(1, 1, 1);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap =
        "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function() {
    var a = new THREE.MeshLambertMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.ambient.copy(this.ambient);
    a.emissive.copy(this.emissive);
    a.wrapAround = this.wrapAround;
    a.wrapRGB.copy(this.wrapRGB);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.MeshPhongMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.metal = !1;
    this.perPixel = !0;
    this.wrapAround = !1;
    this.wrapRGB = new THREE.Vector3(1, 1, 1);
    this.bumpMap = this.lightMap = this.map = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1, 1);
    this.envMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function() {
    var a = new THREE.MeshPhongMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.ambient.copy(this.ambient);
    a.emissive.copy(this.emissive);
    a.specular.copy(this.specular);
    a.shininess = this.shininess;
    a.metal = this.metal;
    a.perPixel = this.perPixel;
    a.wrapAround = this.wrapAround;
    a.wrapRGB.copy(this.wrapRGB);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.bumpMap = this.bumpMap;
    a.bumpScale = this.bumpScale;
    a.normalMap = this.normalMap;
    a.normalScale.copy(this.normalScale);
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.MeshDepthMaterial = function(a) {
    THREE.Material.call(this);
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function() {
    var a = new THREE.LineBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    return a
};
THREE.MeshNormalMaterial = function(a) {
    THREE.Material.call(this, a);
    this.shading = THREE.FlatShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function() {
    var a = new THREE.MeshNormalMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    return a
};
THREE.MeshFaceMaterial = function(a) {
    this.materials = a instanceof Array ? a : []
};
THREE.MeshFaceMaterial.prototype.clone = function() {
    return new THREE.MeshFaceMaterial(this.materials.slice(0))
};
THREE.ParticleBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.ParticleBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone = function() {
    var a = new THREE.ParticleBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.size = this.size;
    a.sizeAttenuation = this.sizeAttenuation;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.ParticleCanvasMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.program = function() {};
    this.setValues(a)
};
THREE.ParticleCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleCanvasMaterial.prototype.clone = function() {
    var a = new THREE.ParticleCanvasMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.program = this.program;
    return a
};
THREE.ShaderMaterial = function(a) {
    THREE.Material.call(this);
    this.vertexShader = this.fragmentShader = "void main() {}";
    this.uniforms = {};
    this.defines = {};
    this.attributes = null;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function() {
    var a = new THREE.ShaderMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.fragmentShader = this.fragmentShader;
    a.vertexShader = this.vertexShader;
    a.uniforms = THREE.UniformsUtils.clone(this.uniforms);
    a.attributes = this.attributes;
    a.defines = this.defines;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.fog = this.fog;
    a.lights = this.lights;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets =
        this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.SpriteMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.map = new THREE.Texture;
    this.useScreenCoordinates = !0;
    this.depthTest = !this.useScreenCoordinates;
    this.sizeAttenuation = !this.useScreenCoordinates;
    this.scaleByViewport = !this.sizeAttenuation;
    this.alignment = THREE.SpriteAlignment.center.clone();
    this.fog = !1;
    this.uvOffset = new THREE.Vector2(0, 0);
    this.uvScale = new THREE.Vector2(1, 1);
    this.setValues(a);
    a = a || {};
    void 0 === a.depthTest && (this.depthTest = !this.useScreenCoordinates);
    void 0 === a.sizeAttenuation && (this.sizeAttenuation = !this.useScreenCoordinates);
    void 0 === a.scaleByViewport && (this.scaleByViewport = !this.sizeAttenuation)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone = function() {
    var a = new THREE.SpriteMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.useScreenCoordinates = this.useScreenCoordinates;
    a.sizeAttenuation = this.sizeAttenuation;
    a.scaleByViewport = this.scaleByViewport;
    a.alignment.copy(this.alignment);
    a.uvOffset.copy(this.uvOffset);
    a.uvScale.copy(this.uvScale);
    a.fog = this.fog;
    return a
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Texture = function(a, b, c, d, e, f, g, h, i) {
    THREE.EventDispatcher.call(this);
    this.id = THREE.TextureIdCount++;
    this.name = "";
    this.image = a;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : new THREE.UVMapping;
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
    this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== i ? i : 1;
    this.format = void 0 !== g ? g : THREE.RGBAFormat;
    this.type = void 0 !== h ? h : THREE.UnsignedByteType;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.needsUpdate = !1;
    this.onUpdate = null
};
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function(a) {
        void 0 === a && (a = new THREE.Texture);
        a.image = this.image;
        a.mipmaps = this.mipmaps.slice(0);
        a.mapping = this.mapping;
        a.wrapS = this.wrapS;
        a.wrapT = this.wrapT;
        a.magFilter = this.magFilter;
        a.minFilter = this.minFilter;
        a.anisotropy = this.anisotropy;
        a.format = this.format;
        a.type = this.type;
        a.offset.copy(this.offset);
        a.repeat.copy(this.repeat);
        a.generateMipmaps = this.generateMipmaps;
        a.premultiplyAlpha = this.premultiplyAlpha;
        a.flipY = this.flipY;
        a.unpackAlignment =
            this.unpackAlignment;
        return a
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.TextureIdCount = 0;
THREE.CompressedTexture = function(a, b, c, d, e, f, g, h, i, k, l) {
    THREE.Texture.call(this, null, f, g, h, i, k, d, e, l);
    this.image = {
        width: b,
        height: c
    };
    this.mipmaps = a;
    this.generateMipmaps = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function() {
    var a = new THREE.CompressedTexture;
    THREE.Texture.prototype.clone.call(this, a);
    return a
};
THREE.DataTexture = function(a, b, c, d, e, f, g, h, i, k, l) {
    THREE.Texture.call(this, null, f, g, h, i, k, d, e, l);
    this.image = {
        data: a,
        width: b,
        height: c
    }
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function() {
    var a = new THREE.DataTexture;
    THREE.Texture.prototype.clone.call(this, a);
    return a
};
THREE.Particle = function(a) {
    THREE.Object3D.call(this);
    this.material = a
};
THREE.Particle.prototype = Object.create(THREE.Object3D.prototype);
THREE.Particle.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Particle(this.material));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.ParticleSystem = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = void 0 !== b ? b : new THREE.ParticleBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.sortParticles = !1;
    this.geometry && null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere();
    this.frustumCulled = !1
};
THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.ParticleSystem(this.geometry, this.material));
    a.sortParticles = this.sortParticles;
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Line = function(a, b, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.type = void 0 !== c ? c : THREE.LineStrip;
    this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.type));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Mesh = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random(),
        wireframe: !0
    });
    void 0 !== this.geometry && (null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere(), this.updateMorphTargets())
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1;
        this.morphTargetForcedOrder = [];
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
    }
};
THREE.Mesh.prototype.getMorphTargetIndexByName = function(a) {
    if (void 0 !== this.morphTargetDictionary[a]) return this.morphTargetDictionary[a];
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
    return 0
};
THREE.Mesh.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Mesh(this.geometry, this.material));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Bone = function(a) {
    THREE.Object3D.call(this);
    this.skin = a;
    this.skinMatrix = new THREE.Matrix4
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update = function(a, b) {
    this.matrixAutoUpdate && (b |= this.updateMatrix());
    if (b || this.matrixWorldNeedsUpdate) a ? this.skinMatrix.multiplyMatrices(a, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, b = !0;
    var c, d = this.children.length;
    for (c = 0; c < d; c++) this.children[c].update(this.skinMatrix, b)
};
THREE.SkinnedMesh = function(a, b, c) {
    THREE.Mesh.call(this, a, b);
    this.useVertexTexture = void 0 !== c ? c : !0;
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var d, e, f;
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (a = 0; a < this.geometry.bones.length; a++) c = this.geometry.bones[a], d = c.pos, e = c.rotq, f = c.scl, b = this.addBone(), b.name = c.name, b.position.set(d[0], d[1], d[2]), b.quaternion.set(e[0], e[1], e[2], e[3]), b.useQuaternion = !0, void 0 !== f ? b.scale.set(f[0], f[1], f[2]) : b.scale.set(1, 1, 1);
        for (a =
            0; a < this.bones.length; a++) c = this.geometry.bones[a], b = this.bones[a], -1 === c.parent ? this.add(b) : this.bones[c.parent].add(b);
        a = this.bones.length;
        this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = a = 256 < a ? 64 : 64 < a ? 32 : 16 < a ? 16 : 8, this.boneMatrices = new Float32Array(4 * this.boneTextureWidth * this.boneTextureHeight), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter,
            this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * a);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.addBone = function(a) {
    void 0 === a && (a = new THREE.Bone(this));
    this.bones.push(a);
    return a
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a) this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1;
    for (var a = 0, b = this.children.length; a < b; a++) {
        var c = this.children[a];
        c instanceof THREE.Bone ? c.update(this.identityMatrix, !1) : c.updateMatrixWorld(!0)
    }
    if (void 0 == this.boneInverses) {
        this.boneInverses = [];
        a = 0;
        for (b = this.bones.length; a <
            b; a++) c = new THREE.Matrix4, c.getInverse(this.bones[a].skinMatrix), this.boneInverses.push(c)
    }
    a = 0;
    for (b = this.bones.length; a < b; a++) THREE.SkinnedMesh.offsetMatrix.multiplyMatrices(this.bones[a].skinMatrix, this.boneInverses[a]), THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices, 16 * a);
    this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
};
THREE.SkinnedMesh.prototype.pose = function() {
    this.updateMatrixWorld(!0);
    for (var a = 0; a < this.geometry.skinIndices.length; a++) {
        var b = this.geometry.skinWeights[a],
            c = 1 / b.lengthManhattan();
        Infinity !== c ? b.multiplyScalar(c) : b.set(1)
    }
};
THREE.SkinnedMesh.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
    THREE.Mesh.prototype.clone.call(this, a);
    return a
};
THREE.SkinnedMesh.offsetMatrix = new THREE.Matrix4;
THREE.MorphAnimMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.duration = 1E3;
    this.mirroredLoop = !1;
    this.currentKeyframe = this.lastKeyframe = this.time = 0;
    this.direction = 1;
    this.directionBackwards = !1;
    this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function(a, b) {
    this.startKeyframe = a;
    this.endKeyframe = b;
    this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function() {
    this.direction = 1;
    this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function() {
    this.direction = -1;
    this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function() {
    var a = this.geometry;
    a.animations || (a.animations = {});
    for (var b, c = a.animations, d = /([a-z]+)(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
        var g = a.morphTargets[e].name.match(d);
        if (g && 1 < g.length) {
            g = g[1];
            c[g] || (c[g] = {
                start: Infinity,
                end: -Infinity
            });
            var h = c[g];
            e < h.start && (h.start = e);
            e > h.end && (h.end = e);
            b || (b = g)
        }
    }
    a.firstAnimation = b
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function(a, b, c) {
    this.geometry.animations || (this.geometry.animations = {});
    this.geometry.animations[a] = {
        start: b,
        end: c
    }
};
THREE.MorphAnimMesh.prototype.playAnimation = function(a, b) {
    var c = this.geometry.animations[a];
    c ? (this.setFrameRange(c.start, c.end), this.duration = 1E3 * ((c.end - c.start) / b), this.time = 0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphAnimMesh.prototype.updateAnimation = function(a) {
    var b = this.duration / this.length;
    this.time += this.direction * a;
    if (this.mirroredLoop) {
        if (this.time > this.duration || 0 > this.time) this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1)
    } else this.time %= this.duration, 0 > this.time && (this.time += this.duration);
    a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
    a !== this.currentKeyframe &&
        (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
    b = this.time % b / b;
    this.directionBackwards && (b = 1 - b);
    this.morphTargetInfluences[this.currentKeyframe] = b;
    this.morphTargetInfluences[this.lastKeyframe] = 1 - b
};
THREE.MorphAnimMesh.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material));
    a.duration = this.duration;
    a.mirroredLoop = this.mirroredLoop;
    a.time = this.time;
    a.lastKeyframe = this.lastKeyframe;
    a.currentKeyframe = this.currentKeyframe;
    a.direction = this.direction;
    a.directionBackwards = this.directionBackwards;
    THREE.Mesh.prototype.clone.call(this, a);
    return a
};
THREE.Ribbon = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = b
};
THREE.Ribbon.prototype = Object.create(THREE.Object3D.prototype);
THREE.Ribbon.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Ribbon(this.geometry, this.material));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.LOD = function() {
    THREE.Object3D.call(this);
    this.LODs = []
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function(a, b) {
    void 0 === b && (b = 0);
    for (var b = Math.abs(b), c = 0; c < this.LODs.length && !(b < this.LODs[c].visibleAtDistance); c++);
    this.LODs.splice(c, 0, {
        visibleAtDistance: b,
        object3D: a
    });
    this.add(a)
};
THREE.LOD.prototype.update = function(a) {
    if (1 < this.LODs.length) {
        a.matrixWorldInverse.getInverse(a.matrixWorld);
        a = a.matrixWorldInverse;
        a = -(a.elements[2] * this.matrixWorld.elements[12] + a.elements[6] * this.matrixWorld.elements[13] + a.elements[10] * this.matrixWorld.elements[14] + a.elements[14]);
        this.LODs[0].object3D.visible = !0;
        for (var b = 1; b < this.LODs.length; b++)
            if (a >= this.LODs[b].visibleAtDistance) this.LODs[b - 1].object3D.visible = !1, this.LODs[b].object3D.visible = !0;
            else break;
        for (; b < this.LODs.length; b++) this.LODs[b].object3D.visible = !1
    }
};
THREE.LOD.prototype.clone = function() {};
THREE.Sprite = function(a) {
    THREE.Object3D.call(this);
    this.material = void 0 !== a ? a : new THREE.SpriteMaterial;
    this.rotation3d = this.rotation;
    this.rotation = 0
};
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.updateMatrix = function() {
    this.matrix.setPosition(this.position);
    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);
    (1 !== this.scale.x || 1 !== this.scale.y) && this.matrix.scale(this.scale);
    this.matrixWorldNeedsUpdate = !0
};
THREE.Sprite.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Sprite(this.material));
    THREE.Object3D.prototype.clone.call(this, a);
    return a
};
THREE.Scene = function() {
    THREE.Object3D.call(this);
    this.overrideMaterial = this.fog = null;
    this.matrixAutoUpdate = !1;
    this.__objects = [];
    this.__lights = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject = function(a) {
    if (a instanceof THREE.Light) - 1 === this.__lights.indexOf(a) && this.__lights.push(a), a.target && void 0 === a.target.parent && this.add(a.target);
    else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone) && -1 === this.__objects.indexOf(a)) {
        this.__objects.push(a);
        this.__objectsAdded.push(a);
        var b = this.__objectsRemoved.indexOf(a); - 1 !== b && this.__objectsRemoved.splice(b, 1)
    }
    for (b = 0; b < a.children.length; b++) this.__addObject(a.children[b])
};
THREE.Scene.prototype.__removeObject = function(a) {
    if (a instanceof THREE.Light) {
        var b = this.__lights.indexOf(a); - 1 !== b && this.__lights.splice(b, 1)
    } else a instanceof THREE.Camera || (b = this.__objects.indexOf(a), -1 !== b && (this.__objects.splice(b, 1), this.__objectsRemoved.push(a), b = this.__objectsAdded.indexOf(a), -1 !== b && this.__objectsAdded.splice(b, 1)));
    for (b = 0; b < a.children.length; b++) this.__removeObject(a.children[b])
};
THREE.Fog = function(a, b, c) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3
};
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function(a, b) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.density = void 0 !== b ? b : 2.5E-4
};
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.CanvasRenderer = function(a) {
    function b(a) {
        C !== a && (C = t.globalAlpha = a)
    }

    function c(a) {
        x !== a && (a === THREE.NormalBlending ? t.globalCompositeOperation = "source-over" : a === THREE.AdditiveBlending ? t.globalCompositeOperation = "lighter" : a === THREE.SubtractiveBlending && (t.globalCompositeOperation = "darker"), x = a)
    }

    function d(a) {
        E !== a && (E = t.lineWidth = a)
    }

    function e(a) {
        H !== a && (H = t.lineCap = a)
    }

    function f(a) {
        B !== a && (B = t.lineJoin = a)
    }

    function g(a) {
        G !== a && (G = t.strokeStyle = a)
    }

    function h(a) {
        J !== a && (J = t.fillStyle = a)
    }

    function i(a,
        b) {
        if (W !== a || F !== b) t.setLineDash([a, b]), W = a, F = b
    }
    console.log("THREE.CanvasRenderer", THREE.REVISION);
    var k = THREE.Math.smoothstep,
        a = a || {},
        l = this,
        m, n, s, r = new THREE.Projector,
        p = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
        q, y, v, z, t = p.getContext("2d"),
        A = new THREE.Color(0),
        I = 0,
        C = 1,
        x = 0,
        G = null,
        J = null,
        E = null,
        H = null,
        B = null,
        W = null,
        F = 0,
        K, L, U, fa, Ca = new THREE.RenderableVertex,
        $a = new THREE.RenderableVertex,
        M, ca, qa, ha, ra, N, Ma, Na, mb, Pa, ta, ka, aa = new THREE.Color,
        pa = new THREE.Color,
        Y = new THREE.Color,
        da =
        new THREE.Color,
        la = new THREE.Color,
        Z = new THREE.Color,
        oa = new THREE.Color,
        gb = new THREE.Color,
        nb = {},
        ia = {},
        Wa, ab, Fa, Xa, ub, Ib, Jb, fc, Ab, mc, pb = new THREE.Box2,
        Ka = new THREE.Box2,
        Va = new THREE.Box2,
        gc = !1,
        vb = new THREE.Color,
        Qa = new THREE.Color,
        La = new THREE.Color,
        bb = new THREE.Vector3,
        xb, j, yb, Ra, cb, Sa, zb = 16;
    xb = document.createElement("canvas");
    xb.width = xb.height = 2;
    j = xb.getContext("2d");
    j.fillStyle = "rgba(0,0,0,1)";
    j.fillRect(0, 0, 2, 2);
    yb = j.getImageData(0, 0, 2, 2);
    Ra = yb.data;
    cb = document.createElement("canvas");
    cb.width =
        cb.height = zb;
    Sa = cb.getContext("2d");
    Sa.translate(-zb / 2, -zb / 2);
    Sa.scale(zb, zb);
    zb--;
    void 0 === t.setLineDash && (t.setLineDash = void 0 !== t.mozDash ? function(a) {
        t.mozDash = null !== a[0] ? a : null
    } : function() {});
    this.domElement = p;
    this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    };
    this.supportsVertexTextures = function() {};
    this.setFaceCulling = function() {};
    this.setSize = function(a, b) {
        q = a * this.devicePixelRatio;
        y = b * this.devicePixelRatio;
        v = Math.floor(q / 2);
        z = Math.floor(y / 2);
        p.width = q;
        p.height = y;
        p.style.width = a + "px";
        p.style.height = b + "px";
        pb.set(new THREE.Vector2(-v, -z), new THREE.Vector2(v, z));
        Ka.set(new THREE.Vector2(-v, -z), new THREE.Vector2(v, z));
        C = 1;
        x = 0;
        B = H = E = J = G = null
    };
    this.setClearColor = function(a, b) {
        A.copy(a);
        I = void 0 !== b ? b : 1;
        Ka.set(new THREE.Vector2(-v, -z), new THREE.Vector2(v, z))
    };
    this.setClearColorHex = function(a, b) {
        A.setHex(a);
        I = void 0 !== b ? b : 1;
        Ka.set(new THREE.Vector2(-v,
            -z), new THREE.Vector2(v, z))
    };
    this.getMaxAnisotropy = function() {
        return 0
    };
    this.clear = function() {
        t.setTransform(1, 0, 0, -1, v, z);
        !1 === Ka.empty() && (Ka.intersect(pb), Ka.expandByScalar(2), 1 > I && t.clearRect(Ka.min.x | 0, Ka.min.y | 0, Ka.max.x - Ka.min.x | 0, Ka.max.y - Ka.min.y | 0), 0 < I && (c(THREE.NormalBlending), b(1), h("rgba(" + Math.floor(255 * A.r) + "," + Math.floor(255 * A.g) + "," + Math.floor(255 * A.b) + "," + I + ")"), t.fillRect(Ka.min.x | 0, Ka.min.y | 0, Ka.max.x - Ka.min.x | 0, Ka.max.y - Ka.min.y | 0)), Ka.makeEmpty())
    };
    this.render = function(a, p) {
        function q(a,
            b, c) {
            for (var d = 0, e = s.length; d < e; d++) {
                var f = s[d];
                gb.copy(f.color);
                if (f instanceof THREE.DirectionalLight) {
                    var g = bb.getPositionFromMatrix(f.matrixWorld).normalize(),
                        j = b.dot(g);
                    0 >= j || (j *= f.intensity, c.add(gb.multiplyScalar(j)))
                } else f instanceof THREE.PointLight && (g = bb.getPositionFromMatrix(f.matrixWorld), j = b.dot(bb.subVectors(g, a).normalize()), 0 >= j || (j *= 0 == f.distance ? 1 : 1 - Math.min(a.distanceTo(g) / f.distance, 1), 0 != j && (j *= f.intensity, c.add(gb.multiplyScalar(j)))))
            }
        }

        function x(a, d, e, f, g, j, h, i) {
            l.info.render.vertices +=
                3;
            l.info.render.faces++;
            b(i.opacity);
            c(i.blending);
            M = a.positionScreen.x;
            ca = a.positionScreen.y;
            qa = d.positionScreen.x;
            ha = d.positionScreen.y;
            ra = e.positionScreen.x;
            N = e.positionScreen.y;
            y(M, ca, qa, ha, ra, N);
            (i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial) && null === i.map ? (Z.copy(i.color), oa.copy(i.emissive), i.vertexColors === THREE.FaceColors && Z.multiply(h.color), !0 === gc ? !1 === i.wireframe && i.shading == THREE.SmoothShading && 3 == h.vertexNormalsLength ? (pa.copy(vb), Y.copy(vb), da.copy(vb),
                q(h.v1.positionWorld, h.vertexNormalsModel[0], pa), q(h.v2.positionWorld, h.vertexNormalsModel[1], Y), q(h.v3.positionWorld, h.vertexNormalsModel[2], da), pa.multiply(Z).add(oa), Y.multiply(Z).add(oa), da.multiply(Z).add(oa), la.addColors(Y, da).multiplyScalar(0.5), Fa = E(pa, Y, da, la), G(M, ca, qa, ha, ra, N, 0, 0, 1, 0, 0, 1, Fa)) : (aa.copy(vb), q(h.centroidModel, h.normalModel, aa), aa.multiply(Z).add(oa), !0 === i.wireframe ? C(aa, i.wireframeLinewidth, i.wireframeLinecap, i.wireframeLinejoin) : A(aa)) : !0 === i.wireframe ? C(i.color, i.wireframeLinewidth,
                i.wireframeLinecap, i.wireframeLinejoin) : A(i.color)) : i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial ? null !== i.map ? i.map.mapping instanceof THREE.UVMapping && (Xa = h.uvs[0], F(M, ca, qa, ha, ra, N, Xa[f].x, Xa[f].y, Xa[g].x, Xa[g].y, Xa[j].x, Xa[j].y, i.map)) : null !== i.envMap ? i.envMap.mapping instanceof THREE.SphericalReflectionMapping && (bb.copy(h.vertexNormalsModelView[f]), ub = 0.5 * bb.x + 0.5, Ib = 0.5 * bb.y + 0.5, bb.copy(h.vertexNormalsModelView[g]), Jb = 0.5 *
                bb.x + 0.5, fc = 0.5 * bb.y + 0.5, bb.copy(h.vertexNormalsModelView[j]), Ab = 0.5 * bb.x + 0.5, mc = 0.5 * bb.y + 0.5, F(M, ca, qa, ha, ra, N, ub, Ib, Jb, fc, Ab, mc, i.envMap)) : (aa.copy(i.color), i.vertexColors === THREE.FaceColors && aa.multiply(h.color), !0 === i.wireframe ? C(aa, i.wireframeLinewidth, i.wireframeLinecap, i.wireframeLinejoin) : A(aa)) : i instanceof THREE.MeshDepthMaterial ? (Wa = p.near, ab = p.far, pa.r = pa.g = pa.b = 1 - k(a.positionScreen.z * a.positionScreen.w, Wa, ab), Y.r = Y.g = Y.b = 1 - k(d.positionScreen.z * d.positionScreen.w, Wa, ab), da.r = da.g = da.b =
                1 - k(e.positionScreen.z * e.positionScreen.w, Wa, ab), la.addColors(Y, da).multiplyScalar(0.5), Fa = E(pa, Y, da, la), G(M, ca, qa, ha, ra, N, 0, 0, 1, 0, 0, 1, Fa)) : i instanceof THREE.MeshNormalMaterial && (i.shading == THREE.FlatShading ? (a = h.normalModelView, aa.setRGB(a.x, a.y, a.z).multiplyScalar(0.5).addScalar(0.5), !0 === i.wireframe ? C(aa, i.wireframeLinewidth, i.wireframeLinecap, i.wireframeLinejoin) : A(aa)) : i.shading == THREE.SmoothShading && (a = h.vertexNormalsModelView[f], pa.setRGB(a.x, a.y, a.z).multiplyScalar(0.5).addScalar(0.5), a =
                h.vertexNormalsModelView[g], Y.setRGB(a.x, a.y, a.z).multiplyScalar(0.5).addScalar(0.5), a = h.vertexNormalsModelView[j], da.setRGB(a.x, a.y, a.z).multiplyScalar(0.5).addScalar(0.5), la.addColors(Y, da).multiplyScalar(0.5), Fa = E(pa, Y, da, la), G(M, ca, qa, ha, ra, N, 0, 0, 1, 0, 0, 1, Fa)))
        }

        function y(a, b, c, d, e, f) {
            t.beginPath();
            t.moveTo(a, b);
            t.lineTo(c, d);
            t.lineTo(e, f);
            t.closePath()
        }

        function B(a, b, c, d, e, f, g, j) {
            t.beginPath();
            t.moveTo(a, b);
            t.lineTo(c, d);
            t.lineTo(e, f);
            t.lineTo(g, j);
            t.closePath()
        }

        function C(a, b, c, j) {
            d(b);
            e(c);
            f(j);
            g(a.getStyle());
            t.stroke();
            Va.expandByScalar(2 * b)
        }

        function A(a) {
            h(a.getStyle());
            t.fill()
        }

        function F(a, b, c, d, e, f, g, j, i, wa, k, l, n) {
            if (!(n instanceof THREE.DataTexture || void 0 === n.image || 0 == n.image.width)) {
                if (!0 === n.needsUpdate) {
                    var m = n.wrapS == THREE.RepeatWrapping,
                        hb = n.wrapT == THREE.RepeatWrapping;
                    nb[n.id] = t.createPattern(n.image, !0 === m && !0 === hb ? "repeat" : !0 === m && !1 === hb ? "repeat-x" : !1 === m && !0 === hb ? "repeat-y" : "no-repeat");
                    n.needsUpdate = !1
                }
                void 0 === nb[n.id] ? h("rgba(0,0,0,1)") : h(nb[n.id]);
                var m = n.offset.x /
                    n.repeat.x,
                    hb = n.offset.y / n.repeat.y,
                    p = n.image.width * n.repeat.x,
                    q = n.image.height * n.repeat.y,
                    g = (g + m) * p,
                    j = (1 - j + hb) * q,
                    c = c - a,
                    d = d - b,
                    e = e - a,
                    f = f - b,
                    i = (i + m) * p - g,
                    wa = (1 - wa + hb) * q - j,
                    k = (k + m) * p - g,
                    l = (1 - l + hb) * q - j,
                    m = i * l - k * wa;
                0 === m ? (void 0 === ia[n.id] && (b = document.createElement("canvas"), b.width = n.image.width, b.height = n.image.height, b = b.getContext("2d"), b.drawImage(n.image, 0, 0), ia[n.id] = b.getImageData(0, 0, n.image.width, n.image.height).data), b = ia[n.id], g = 4 * (Math.floor(g) + Math.floor(j) * n.image.width), aa.setRGB(b[g] / 255,
                    b[g + 1] / 255, b[g + 2] / 255), A(aa)) : (m = 1 / m, n = (l * c - wa * e) * m, wa = (l * d - wa * f) * m, c = (i * e - k * c) * m, d = (i * f - k * d) * m, a = a - n * g - c * j, g = b - wa * g - d * j, t.save(), t.transform(n, wa, c, d, a, g), t.fill(), t.restore())
            }
        }

        function G(a, b, c, d, e, f, g, j, i, h, wa, k, n) {
            var l, m;
            l = n.width - 1;
            m = n.height - 1;
            g *= l;
            j *= m;
            c -= a;
            d -= b;
            e -= a;
            f -= b;
            i = i * l - g;
            h = h * m - j;
            wa = wa * l - g;
            k = k * m - j;
            m = 1 / (i * k - wa * h);
            l = (k * c - h * e) * m;
            h = (k * d - h * f) * m;
            c = (i * e - wa * c) * m;
            d = (i * f - wa * d) * m;
            a = a - l * g - c * j;
            b = b - h * g - d * j;
            t.save();
            t.transform(l, h, c, d, a, b);
            t.clip();
            t.drawImage(n, 0, 0);
            t.restore()
        }

        function E(a, b,
            c, d) {
            Ra[0] = 255 * a.r | 0;
            Ra[1] = 255 * a.g | 0;
            Ra[2] = 255 * a.b | 0;
            Ra[4] = 255 * b.r | 0;
            Ra[5] = 255 * b.g | 0;
            Ra[6] = 255 * b.b | 0;
            Ra[8] = 255 * c.r | 0;
            Ra[9] = 255 * c.g | 0;
            Ra[10] = 255 * c.b | 0;
            Ra[12] = 255 * d.r | 0;
            Ra[13] = 255 * d.g | 0;
            Ra[14] = 255 * d.b | 0;
            j.putImageData(yb, 0, 0);
            Sa.drawImage(xb, 0, 0);
            return cb
        }

        function I(a, b) {
            var c = b.x - a.x,
                d = b.y - a.y,
                e = c * c + d * d;
            0 !== e && (e = 1 / Math.sqrt(e), c *= e, d *= e, b.x += c, b.y += d, a.x -= c, a.y -= d)
        }
        if (!1 === p instanceof THREE.Camera) console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            !0 ===
                this.autoClear && this.clear();
            t.setTransform(1, 0, 0, -1, v, z);
            l.info.render.vertices = 0;
            l.info.render.faces = 0;
            m = r.projectScene(a, p, this.sortObjects, this.sortElements);
            n = m.elements;
            s = m.lights;
            gc = 0 < s.length;
            if (!0 === gc) {
                vb.setRGB(0, 0, 0);
                Qa.setRGB(0, 0, 0);
                La.setRGB(0, 0, 0);
                for (var J = 0, W = s.length; J < W; J++) {
                    var P = s[J],
                        X = P.color;
                    P instanceof THREE.AmbientLight ? vb.add(X) : P instanceof THREE.DirectionalLight ? Qa.add(X) : P instanceof THREE.PointLight && La.add(X)
                }
            }
            J = 0;
            for (W = n.length; J < W; J++) {
                var H = n[J],
                    P = H.material;
                if (!(void 0 ===
                        P || !1 === P.visible)) {
                    Va.makeEmpty();
                    if (H instanceof THREE.RenderableParticle) {
                        K = H;
                        K.x *= v;
                        K.y *= z;
                        var X = K,
                            wa = H;
                        b(P.opacity);
                        c(P.blending);
                        var Bb = void 0,
                            hb = void 0,
                            Cb = void 0,
                            Db = void 0,
                            md = H = void 0,
                            nd = void 0;
                        P instanceof THREE.ParticleBasicMaterial ? null === P.map ? (Cb = wa.object.scale.x, Db = wa.object.scale.y, Cb *= wa.scale.x * v, Db *= wa.scale.y * z, Va.min.set(X.x - Cb, X.y - Db), Va.max.set(X.x + Cb, X.y + Db), !1 !== pb.isIntersectionBox(Va) && (h(P.color.getStyle()), t.save(), t.translate(X.x, X.y), t.rotate(-wa.rotation), t.scale(Cb,
                            Db), t.fillRect(-1, -1, 2, 2), t.restore())) : (H = P.map.image, md = H.width >> 1, nd = H.height >> 1, Cb = wa.scale.x * v, Db = wa.scale.y * z, Bb = Cb * md, hb = Db * nd, Va.min.set(X.x - Bb, X.y - hb), Va.max.set(X.x + Bb, X.y + hb), !1 !== pb.isIntersectionBox(Va) && (t.save(), t.translate(X.x, X.y), t.rotate(-wa.rotation), t.scale(Cb, -Db), t.translate(-md, -nd), t.drawImage(H, 0, 0), t.restore())) : P instanceof THREE.ParticleCanvasMaterial && (Bb = wa.scale.x * v, hb = wa.scale.y * z, Va.min.set(X.x - Bb, X.y - hb), Va.max.set(X.x + Bb, X.y + hb), !1 !== pb.isIntersectionBox(Va) && (g(P.color.getStyle()),
                            h(P.color.getStyle()), t.save(), t.translate(X.x, X.y), t.rotate(-wa.rotation), t.scale(Bb, hb), P.program(t), t.restore()))
                    } else if (H instanceof THREE.RenderableLine) K = H.v1, L = H.v2, K.positionScreen.x *= v, K.positionScreen.y *= z, L.positionScreen.x *= v, L.positionScreen.y *= z, Va.setFromPoints([K.positionScreen, L.positionScreen]), !0 === pb.isIntersectionBox(Va) && (X = K, wa = L, b(P.opacity), c(P.blending), t.beginPath(), t.moveTo(X.positionScreen.x, X.positionScreen.y), t.lineTo(wa.positionScreen.x, wa.positionScreen.y), P instanceof THREE.LineBasicMaterial ? (d(P.linewidth), e(P.linecap), f(P.linejoin), g(P.color.getStyle()), i(null, null), t.stroke(), Va.expandByScalar(2 * P.linewidth)) : P instanceof THREE.LineDashedMaterial && (d(P.linewidth), e(P.linecap), f(P.linejoin), g(P.color.getStyle()), i(P.dashSize, P.gapSize), t.stroke(), Va.expandByScalar(2 * P.linewidth)));
                    else if (H instanceof THREE.RenderableFace3) {
                        K = H.v1;
                        L = H.v2;
                        U = H.v3;
                        if (-1 > K.positionScreen.z || 1 < K.positionScreen.z) continue;
                        if (-1 > L.positionScreen.z || 1 < L.positionScreen.z) continue;
                        if (-1 >
                            U.positionScreen.z || 1 < U.positionScreen.z) continue;
                        K.positionScreen.x *= v;
                        K.positionScreen.y *= z;
                        L.positionScreen.x *= v;
                        L.positionScreen.y *= z;
                        U.positionScreen.x *= v;
                        U.positionScreen.y *= z;
                        !0 === P.overdraw && (I(K.positionScreen, L.positionScreen), I(L.positionScreen, U.positionScreen), I(U.positionScreen, K.positionScreen));
                        Va.setFromPoints([K.positionScreen, L.positionScreen, U.positionScreen]);
                        x(K, L, U, 0, 1, 2, H, P)
                    } else if (H instanceof THREE.RenderableFace4) {
                        K = H.v1;
                        L = H.v2;
                        U = H.v3;
                        fa = H.v4;
                        if (-1 > K.positionScreen.z ||
                            1 < K.positionScreen.z) continue;
                        if (-1 > L.positionScreen.z || 1 < L.positionScreen.z) continue;
                        if (-1 > U.positionScreen.z || 1 < U.positionScreen.z) continue;
                        if (-1 > fa.positionScreen.z || 1 < fa.positionScreen.z) continue;
                        K.positionScreen.x *= v;
                        K.positionScreen.y *= z;
                        L.positionScreen.x *= v;
                        L.positionScreen.y *= z;
                        U.positionScreen.x *= v;
                        U.positionScreen.y *= z;
                        fa.positionScreen.x *= v;
                        fa.positionScreen.y *= z;
                        Ca.positionScreen.copy(L.positionScreen);
                        $a.positionScreen.copy(fa.positionScreen);
                        !0 === P.overdraw && (I(K.positionScreen, L.positionScreen),
                            I(L.positionScreen, fa.positionScreen), I(fa.positionScreen, K.positionScreen), I(U.positionScreen, Ca.positionScreen), I(U.positionScreen, $a.positionScreen));
                        Va.setFromPoints([K.positionScreen, L.positionScreen, U.positionScreen, fa.positionScreen]);
                        X = K;
                        wa = L;
                        Bb = U;
                        hb = fa;
                        Cb = Ca;
                        Db = $a;
                        l.info.render.vertices += 4;
                        l.info.render.faces++;
                        b(P.opacity);
                        c(P.blending);
                        void 0 !== P.map && null !== P.map || void 0 !== P.envMap && null !== P.envMap ? (x(X, wa, hb, 0, 1, 3, H, P), x(Cb, Bb, Db, 1, 2, 3, H, P)) : (M = X.positionScreen.x, ca = X.positionScreen.y,
                            qa = wa.positionScreen.x, ha = wa.positionScreen.y, ra = Bb.positionScreen.x, N = Bb.positionScreen.y, Ma = hb.positionScreen.x, Na = hb.positionScreen.y, mb = Cb.positionScreen.x, Pa = Cb.positionScreen.y, ta = Db.positionScreen.x, ka = Db.positionScreen.y, P instanceof THREE.MeshLambertMaterial || P instanceof THREE.MeshPhongMaterial ? (Z.copy(P.color), oa.copy(P.emissive), P.vertexColors === THREE.FaceColors && Z.multiply(H.color), !0 === gc ? !1 === P.wireframe && P.shading == THREE.SmoothShading && 4 == H.vertexNormalsLength ? (pa.copy(vb), Y.copy(vb),
                                da.copy(vb), la.copy(vb), q(H.v1.positionWorld, H.vertexNormalsModel[0], pa), q(H.v2.positionWorld, H.vertexNormalsModel[1], Y), q(H.v4.positionWorld, H.vertexNormalsModel[3], da), q(H.v3.positionWorld, H.vertexNormalsModel[2], la), pa.multiply(Z).add(oa), Y.multiply(Z).add(oa), da.multiply(Z).add(oa), la.multiply(Z).add(oa), Fa = E(pa, Y, da, la), y(M, ca, qa, ha, Ma, Na), G(M, ca, qa, ha, Ma, Na, 0, 0, 1, 0, 0, 1, Fa), y(mb, Pa, ra, N, ta, ka), G(mb, Pa, ra, N, ta, ka, 1, 0, 1, 1, 0, 1, Fa)) : (aa.copy(vb), q(H.centroidModel, H.normalModel, aa), aa.multiply(Z).add(oa),
                                B(M, ca, qa, ha, ra, N, Ma, Na), !0 === P.wireframe ? C(aa, P.wireframeLinewidth, P.wireframeLinecap, P.wireframeLinejoin) : A(aa)) : (aa.addColors(Z, oa), B(M, ca, qa, ha, ra, N, Ma, Na), !0 === P.wireframe ? C(aa, P.wireframeLinewidth, P.wireframeLinecap, P.wireframeLinejoin) : A(aa))) : P instanceof THREE.MeshBasicMaterial ? (aa.copy(P.color), P.vertexColors === THREE.FaceColors && aa.multiply(H.color), B(M, ca, qa, ha, ra, N, Ma, Na), !0 === P.wireframe ? C(aa, P.wireframeLinewidth, P.wireframeLinecap, P.wireframeLinejoin) : A(aa)) : P instanceof THREE.MeshNormalMaterial ?
                            (X = void 0, P.shading == THREE.FlatShading ? (X = H.normalModelView, aa.setRGB(X.x, X.y, X.z).multiplyScalar(0.5).addScalar(0.5), B(M, ca, qa, ha, ra, N, Ma, Na), !0 === P.wireframe ? C(aa, P.wireframeLinewidth, P.wireframeLinecap, P.wireframeLinejoin) : A(aa)) : P.shading == THREE.SmoothShading && (X = H.vertexNormalsModelView[0], pa.setRGB(X.x, X.y, X.z).multiplyScalar(0.5).addScalar(0.5), X = H.vertexNormalsModelView[1], Y.setRGB(X.x, X.y, X.z).multiplyScalar(0.5).addScalar(0.5), X = H.vertexNormalsModelView[3], da.setRGB(X.x, X.y, X.z).multiplyScalar(0.5).addScalar(0.5),
                                X = H.vertexNormalsModelView[2], la.setRGB(X.x, X.y, X.z).multiplyScalar(0.5).addScalar(0.5), Fa = E(pa, Y, da, la), y(M, ca, qa, ha, Ma, Na), G(M, ca, qa, ha, Ma, Na, 0, 0, 1, 0, 0, 1, Fa), y(mb, Pa, ra, N, ta, ka), G(mb, Pa, ra, N, ta, ka, 1, 0, 1, 1, 0, 1, Fa))) : P instanceof THREE.MeshDepthMaterial && (Wa = p.near, ab = p.far, pa.r = pa.g = pa.b = 1 - k(X.positionScreen.z * X.positionScreen.w, Wa, ab), Y.r = Y.g = Y.b = 1 - k(wa.positionScreen.z * wa.positionScreen.w, Wa, ab), da.r = da.g = da.b = 1 - k(hb.positionScreen.z * hb.positionScreen.w, Wa, ab), la.r = la.g = la.b = 1 - k(Bb.positionScreen.z *
                                Bb.positionScreen.w, Wa, ab), Fa = E(pa, Y, da, la), y(M, ca, qa, ha, Ma, Na), G(M, ca, qa, ha, Ma, Na, 0, 0, 1, 0, 0, 1, Fa), y(mb, Pa, ra, N, ta, ka), G(mb, Pa, ra, N, ta, ka, 1, 0, 1, 1, 0, 1, Fa)))
                    }
                    Ka.union(Va)
                }
            }
            t.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
};
THREE.ShaderChunk = {
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
    fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
    envmap_pars_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
    envmap_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",
    map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",
    map_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
    map_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
    map_fragment: "#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
    lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
    lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",
    lights_lambert_pars_vertex: "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
    lights_lambert_vertex: "vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
    lights_phong_pars_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
    lights_phong_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
    lights_phong_pars_fragment: "uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_phong_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
    skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
    default_vertex: "vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",
    defaultnormal_vertex: "vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
    shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( depthKernel[0][0] < shadowCoord.z ) shadowKernel[0][0] = 0.25;\nelse shadowKernel[0][0] = 0.0;\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( depthKernel[0][1] < shadowCoord.z ) shadowKernel[0][1] = 0.25;\nelse shadowKernel[0][1] = 0.0;\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( depthKernel[0][2] < shadowCoord.z ) shadowKernel[0][2] = 0.25;\nelse shadowKernel[0][2] = 0.0;\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( depthKernel[1][0] < shadowCoord.z ) shadowKernel[1][0] = 0.25;\nelse shadowKernel[1][0] = 0.0;\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( depthKernel[1][1] < shadowCoord.z ) shadowKernel[1][1] = 0.25;\nelse shadowKernel[1][1] = 0.0;\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( depthKernel[1][2] < shadowCoord.z ) shadowKernel[1][2] = 0.25;\nelse shadowKernel[1][2] = 0.0;\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( depthKernel[2][0] < shadowCoord.z ) shadowKernel[2][0] = 0.25;\nelse shadowKernel[2][0] = 0.0;\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( depthKernel[2][1] < shadowCoord.z ) shadowKernel[2][1] = 0.25;\nelse shadowKernel[2][1] = 0.0;\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( depthKernel[2][2] < shadowCoord.z ) shadowKernel[2][2] = 0.25;\nelse shadowKernel[2][2] = 0.0;\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",
    linear_to_gamma_fragment: "#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"
};
THREE.UniformsUtils = {
    merge: function(a) {
        var b, c, d, e = {};
        for (b = 0; b < a.length; b++)
            for (c in d = this.clone(a[b]), d) e[c] = d[c];
        return e
    },
    clone: function(a) {
        var b, c, d, e = {};
        for (b in a)
            for (c in e[b] = {}, a[b]) d = a[b][c], e[b][c] = d instanceof THREE.Color || d instanceof THREE.Vector2 || d instanceof THREE.Vector3 || d instanceof THREE.Vector4 || d instanceof THREE.Matrix4 || d instanceof THREE.Texture ? d.clone() : d instanceof Array ? d.slice() : d;
        return e
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        lightMap: {
            type: "t",
            value: null
        },
        specularMap: {
            type: "t",
            value: null
        },
        envMap: {
            type: "t",
            value: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        useRefract: {
            type: "i",
            value: 0
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: 0.98
        },
        combine: {
            type: "i",
            value: 0
        },
        morphTargetInfluences: {
            type: "f",
            value: 0
        }
    },
    bump: {
        bumpMap: {
            type: "t",
            value: null
        },
        bumpScale: {
            type: "f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1, 1)
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        hemisphereLightDirection: {
            type: "fv",
            value: []
        },
        hemisphereLightSkyColor: {
            type: "fv",
            value: []
        },
        hemisphereLightGroundColor: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightDistance: {
            type: "fv1",
            value: []
        },
        spotLightColor: {
            type: "fv",
            value: []
        },
        spotLightPosition: {
            type: "fv",
            value: []
        },
        spotLightDirection: {
            type: "fv",
            value: []
        },
        spotLightDistance: {
            type: "fv1",
            value: []
        },
        spotLightAngleCos: {
            type: "fv1",
            value: []
        },
        spotLightExponent: {
            type: "fv1",
            value: []
        }
    },
    particle: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    shadowmap: {
        shadowMap: {
            type: "tv",
            value: []
        },
        shadowMapSize: {
            type: "v2v",
            value: []
        },
        shadowBias: {
            type: "fv1",
            value: []
        },
        shadowDarkness: {
            type: "fv1",
            value: []
        },
        shadowMatrix: {
            type: "m4v",
            value: []
        }
    }
};
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex,
            THREE.ShaderChunk.skinbase_vertex, "#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment,
            THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            wrapRGB: {
                type: "v3",
                value: new THREE.Vector3(1, 1, 1)
            }
        }]),
        vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
            THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex,
            THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment,
            THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif", THREE.ShaderChunk.lightmap_fragment,
            THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            },
            wrapRGB: {
                type: "v3",
                value: new THREE.Vector3(1, 1, 1)
            }
        }]),
        vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex,
            "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex,
            THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment,
            THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
            THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            },
            dashSize: {
                type: "f",
                value: 1
            },
            totalSize: {
                type: "f",
                value: 2
            }
        }]),
        vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}",
        fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"
    },
    normalmap: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            enableAO: {
                type: "i",
                value: 0
            },
            enableDiffuse: {
                type: "i",
                value: 0
            },
            enableSpecular: {
                type: "i",
                value: 0
            },
            enableReflection: {
                type: "i",
                value: 0
            },
            enableDisplacement: {
                type: "i",
                value: 0
            },
            tDisplacement: {
                type: "t",
                value: null
            },
            tDiffuse: {
                type: "t",
                value: null
            },
            tCube: {
                type: "t",
                value: null
            },
            tNormal: {
                type: "t",
                value: null
            },
            tSpecular: {
                type: "t",
                value: null
            },
            tAO: {
                type: "t",
                value: null
            },
            uNormalScale: {
                type: "v2",
                value: new THREE.Vector2(1, 1)
            },
            uDisplacementBias: {
                type: "f",
                value: 0
            },
            uDisplacementScale: {
                type: "f",
                value: 1
            },
            uDiffuseColor: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            uSpecularColor: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            uAmbientColor: {
                type: "c",
                value: new THREE.Color(16777215)
            },
            uShininess: {
                type: "f",
                value: 30
            },
            uOpacity: {
                type: "f",
                value: 1
            },
            useRefract: {
                type: "i",
                value: 0
            },
            uRefractionRatio: {
                type: "f",
                value: 0.98
            },
            uReflectivity: {
                type: "f",
                value: 0.5
            },
            uOffset: {
                type: "v2",
                value: new THREE.Vector2(0, 0)
            },
            uRepeat: {
                type: "v2",
                value: new THREE.Vector2(1, 1)
            },
            wrapRGB: {
                type: "v3",
                value: new THREE.Vector3(1, 1, 1)
            }
        }]),
        fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
            THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
            THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n"),
        vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
            THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"
        ].join("\n")
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: "varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
        fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"
    }
};
THREE.WebGLRenderer = function(a) {
    function b(a) {
        if (a.__webglCustomAttributesList)
            for (var b in a.__webglCustomAttributesList) j.deleteBuffer(a.__webglCustomAttributesList[b].buffer)
    }

    function c(a, b) {
        var c = a.vertices.length,
            d = b.material;
        if (d.attributes) {
            void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
            for (var e in d.attributes) {
                var f = d.attributes[e];
                if (!f.__webglInitialized || f.createUniqueBuffers) {
                    f.__webglInitialized = !0;
                    var g = 1;
                    "v2" === f.type ? g = 2 : "v3" === f.type ? g = 3 : "v4" === f.type ?
                        g = 4 : "c" === f.type && (g = 3);
                    f.size = g;
                    f.array = new Float32Array(c * g);
                    f.buffer = j.createBuffer();
                    f.buffer.belongsToAttribute = e;
                    f.needsUpdate = !0
                }
                a.__webglCustomAttributesList.push(f)
            }
        }
    }

    function d(a, b) {
        var c = b.geometry,
            d = a.faces3,
            h = a.faces4,
            i = 3 * d.length + 4 * h.length,
            k = 1 * d.length + 2 * h.length,
            h = 3 * d.length + 4 * h.length,
            d = e(b, a),
            n = g(d),
            l = f(d),
            m = d.vertexColors ? d.vertexColors : !1;
        a.__vertexArray = new Float32Array(3 * i);
        l && (a.__normalArray = new Float32Array(3 * i));
        c.hasTangents && (a.__tangentArray = new Float32Array(4 * i));
        m &&
            (a.__colorArray = new Float32Array(3 * i));
        if (n) {
            if (0 < c.faceUvs.length || 0 < c.faceVertexUvs.length) a.__uvArray = new Float32Array(2 * i);
            if (1 < c.faceUvs.length || 1 < c.faceVertexUvs.length) a.__uv2Array = new Float32Array(2 * i)
        }
        b.geometry.skinWeights.length && b.geometry.skinIndices.length && (a.__skinIndexArray = new Float32Array(4 * i), a.__skinWeightArray = new Float32Array(4 * i));
        a.__faceArray = new Uint16Array(3 * k);
        a.__lineArray = new Uint16Array(2 * h);
        if (a.numMorphTargets) {
            a.__morphTargetsArrays = [];
            c = 0;
            for (n = a.numMorphTargets; c <
                n; c++) a.__morphTargetsArrays.push(new Float32Array(3 * i))
        }
        if (a.numMorphNormals) {
            a.__morphNormalsArrays = [];
            c = 0;
            for (n = a.numMorphNormals; c < n; c++) a.__morphNormalsArrays.push(new Float32Array(3 * i))
        }
        a.__webglFaceCount = 3 * k;
        a.__webglLineCount = 2 * h;
        if (d.attributes) {
            void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
            for (var p in d.attributes) {
                var k = d.attributes[p],
                    c = {},
                    q;
                for (q in k) c[q] = k[q];
                if (!c.__webglInitialized || c.createUniqueBuffers) c.__webglInitialized = !0, h = 1, "v2" === c.type ? h = 2 :
                    "v3" === c.type ? h = 3 : "v4" === c.type ? h = 4 : "c" === c.type && (h = 3), c.size = h, c.array = new Float32Array(i * h), c.buffer = j.createBuffer(), c.buffer.belongsToAttribute = p, k.needsUpdate = !0, c.__original = k;
                a.__webglCustomAttributesList.push(c)
            }
        }
        a.__inittedArrays = !0
    }

    function e(a, b) {
        return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[b.materialIndex] : a.material
    }

    function f(a) {
        return a instanceof THREE.MeshBasicMaterial && !a.envMap || a instanceof THREE.MeshDepthMaterial ? !1 : a && void 0 !== a.shading && a.shading ===
            THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading
    }

    function g(a) {
        return a.map || a.lightMap || a.bumpMap || a.normalMap || a.specularMap || a instanceof THREE.ShaderMaterial ? !0 : !1
    }

    function h(a) {
        var b, c, d;
        for (b in a.attributes) d = "index" === b ? j.ELEMENT_ARRAY_BUFFER : j.ARRAY_BUFFER, c = a.attributes[b], c.buffer = j.createBuffer(), j.bindBuffer(d, c.buffer), j.bufferData(d, c.array, j.STATIC_DRAW)
    }

    function i(a, b, c) {
        var d = a.attributes,
            e = d.index,
            f = d.position,
            g = d.normal,
            h = d.uv,
            i = d.color,
            d = d.tangent;
        a.elementsNeedUpdate &&
            void 0 !== e && (j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.buffer), j.bufferData(j.ELEMENT_ARRAY_BUFFER, e.array, b));
        a.verticesNeedUpdate && void 0 !== f && (j.bindBuffer(j.ARRAY_BUFFER, f.buffer), j.bufferData(j.ARRAY_BUFFER, f.array, b));
        a.normalsNeedUpdate && void 0 !== g && (j.bindBuffer(j.ARRAY_BUFFER, g.buffer), j.bufferData(j.ARRAY_BUFFER, g.array, b));
        a.uvsNeedUpdate && void 0 !== h && (j.bindBuffer(j.ARRAY_BUFFER, h.buffer), j.bufferData(j.ARRAY_BUFFER, h.array, b));
        a.colorsNeedUpdate && void 0 !== i && (j.bindBuffer(j.ARRAY_BUFFER,
            i.buffer), j.bufferData(j.ARRAY_BUFFER, i.array, b));
        a.tangentsNeedUpdate && void 0 !== d && (j.bindBuffer(j.ARRAY_BUFFER, d.buffer), j.bufferData(j.ARRAY_BUFFER, d.array, b));
        if (c)
            for (var k in a.attributes) delete a.attributes[k].array
    }

    function k(a) {
        Ka[a] || (j.enableVertexAttribArray(a), Ka[a] = !0)
    }

    function l() {
        for (var a in Ka) Ka[a] && (j.disableVertexAttribArray(a), Ka[a] = !1)
    }

    function m(a, b) {
        return a.z !== b.z ? b.z - a.z : b.id - a.id
    }

    function n(a, b) {
        return b[0] - a[0]
    }

    function s(a, b, c) {
        if (a.length)
            for (var d = 0, e = a.length; d < e; d++) aa =
                mb = null, ta = ka = la = da = Wa = ia = Z = -1, bb = !0, a[d].render(b, c, mc, pb), aa = mb = null, ta = ka = la = da = Wa = ia = Z = -1, bb = !0
    }

    function r(a, b, c, d, e, f, g, j) {
        var h, i, k, n;
        b ? (i = a.length - 1, n = b = -1) : (i = 0, b = a.length, n = 1);
        for (var l = i; l !== b; l += n)
            if (h = a[l], h.render) {
                i = h.object;
                k = h.buffer;
                if (j) h = j;
                else {
                    h = h[c];
                    if (!h) continue;
                    g && N.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst);
                    N.setDepthTest(h.depthTest);
                    N.setDepthWrite(h.depthWrite);
                    E(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
                }
                N.setMaterialFaces(h);
                k instanceof
                THREE.BufferGeometry ? N.renderBufferDirect(d, e, f, h, k, i) : N.renderBuffer(d, e, f, h, k, i)
            }
    }

    function p(a, b, c, d, e, f, g) {
        for (var h, j, i = 0, k = a.length; i < k; i++)
            if (h = a[i], j = h.object, j.visible) {
                if (g) h = g;
                else {
                    h = h[b];
                    if (!h) continue;
                    f && N.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst);
                    N.setDepthTest(h.depthTest);
                    N.setDepthWrite(h.depthWrite);
                    E(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
                }
                N.renderImmediateObject(c, d, e, h, j)
            }
    }

    function q(a, b, c) {
        a.push({
            buffer: b,
            object: c,
            opaque: null,
            transparent: null
        })
    }

    function y(a) {
        for (var b in a.attributes)
            if (a.attributes[b].needsUpdate) return !0;
        return !1
    }

    function v(a) {
        for (var b in a.attributes) a.attributes[b].needsUpdate = !1
    }

    function z(a, b) {
        for (var c = a.length - 1; 0 <= c; c--) a[c].object === b && a.splice(c, 1)
    }

    function t(a, b) {
        for (var c = a.length - 1; 0 <= c; c--) a[c] === b && a.splice(c, 1)
    }

    function A(a, b, c, d, e) {
        Y = 0;
        d.needsUpdate && (d.program && Pc(d), N.initMaterial(d, b, c, e), d.needsUpdate = !1);
        d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(N.maxMorphTargets));
        var f = !1,
            g = d.program,
            h = g.uniforms,
            i = d.uniforms;
        g !== mb && (j.useProgram(g), mb = g, f = !0);
        d.id !== ta && (ta = d.id, f = !0);
        if (f || a !== aa) j.uniformMatrix4fv(h.projectionMatrix, !1, a.projectionMatrix.elements), a !== aa && (aa = a);
        if (d.skinning)
            if (tc && e.useVertexTexture) {
                if (null !== h.boneTexture) {
                    var k = I();
                    j.uniform1i(h.boneTexture, k);
                    N.setTexture(e.boneTexture, k)
                }
            } else null !== h.boneGlobalMatrices && j.uniformMatrix4fv(h.boneGlobalMatrices, !1, e.boneMatrices);
        if (f) {
            c && d.fog && (i.fogColor.value = c.color, c instanceof THREE.Fog ?
                (i.fogNear.value = c.near, i.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (i.fogDensity.value = c.density));
            if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
                if (bb) {
                    for (var n, l = k = 0, m = 0, p, q, s, r = xb, t = r.directional.colors, v = r.directional.positions, y = r.point.colors, z = r.point.positions, B = r.point.distances, C = r.spot.colors, A = r.spot.positions, F = r.spot.distances, E = r.spot.directions, J = r.spot.anglesCos, K = r.spot.exponents, H = r.hemi.skyColors, M = r.hemi.groundColors, P = r.hemi.positions,
                            X = 0, da = 0, ka = 0, fa = 0, ca = 0, pa = 0, Ma = 0, ha = 0, O = n = 0, c = s = O = 0, f = b.length; c < f; c++) n = b[c], n.onlyShadow || (p = n.color, q = n.intensity, s = n.distance, n instanceof THREE.AmbientLight ? n.visible && (N.gammaInput ? (k += p.r * p.r, l += p.g * p.g, m += p.b * p.b) : (k += p.r, l += p.g, m += p.b)) : n instanceof THREE.DirectionalLight ? (ca += 1, n.visible && (La.getPositionFromMatrix(n.matrixWorld), Qa.getPositionFromMatrix(n.target.matrixWorld), La.sub(Qa), La.normalize(), 0 === La.x && 0 === La.y && 0 === La.z || (n = 3 * X, v[n] = La.x, v[n + 1] = La.y, v[n + 2] = La.z, N.gammaInput ? x(t,
                        n, p, q * q) : G(t, n, p, q), X += 1))) : n instanceof THREE.PointLight ? (pa += 1, n.visible && (O = 3 * da, N.gammaInput ? x(y, O, p, q * q) : G(y, O, p, q), Qa.getPositionFromMatrix(n.matrixWorld), z[O] = Qa.x, z[O + 1] = Qa.y, z[O + 2] = Qa.z, B[da] = s, da += 1)) : n instanceof THREE.SpotLight ? (Ma += 1, n.visible && (O = 3 * ka, N.gammaInput ? x(C, O, p, q * q) : G(C, O, p, q), Qa.getPositionFromMatrix(n.matrixWorld), A[O] = Qa.x, A[O + 1] = Qa.y, A[O + 2] = Qa.z, F[ka] = s, La.copy(Qa), Qa.getPositionFromMatrix(n.target.matrixWorld), La.sub(Qa), La.normalize(), E[O] = La.x, E[O + 1] = La.y, E[O + 2] = La.z,
                        J[ka] = Math.cos(n.angle), K[ka] = n.exponent, ka += 1)) : n instanceof THREE.HemisphereLight && (ha += 1, n.visible && (La.getPositionFromMatrix(n.matrixWorld), La.normalize(), 0 === La.x && 0 === La.y && 0 === La.z || (s = 3 * fa, P[s] = La.x, P[s + 1] = La.y, P[s + 2] = La.z, p = n.color, n = n.groundColor, N.gammaInput ? (q *= q, x(H, s, p, q), x(M, s, n, q)) : (G(H, s, p, q), G(M, s, n, q)), fa += 1))));
                    c = 3 * X;
                    for (f = Math.max(t.length, 3 * ca); c < f; c++) t[c] = 0;
                    c = 3 * da;
                    for (f = Math.max(y.length, 3 * pa); c < f; c++) y[c] = 0;
                    c = 3 * ka;
                    for (f = Math.max(C.length, 3 * Ma); c < f; c++) C[c] = 0;
                    c = 3 * fa;
                    for (f =
                        Math.max(H.length, 3 * ha); c < f; c++) H[c] = 0;
                    c = 3 * fa;
                    for (f = Math.max(M.length, 3 * ha); c < f; c++) M[c] = 0;
                    r.directional.length = X;
                    r.point.length = da;
                    r.spot.length = ka;
                    r.hemi.length = fa;
                    r.ambient[0] = k;
                    r.ambient[1] = l;
                    r.ambient[2] = m;
                    bb = !1
                }
                c = xb;
                i.ambientLightColor.value = c.ambient;
                i.directionalLightColor.value = c.directional.colors;
                i.directionalLightDirection.value = c.directional.positions;
                i.pointLightColor.value = c.point.colors;
                i.pointLightPosition.value = c.point.positions;
                i.pointLightDistance.value = c.point.distances;
                i.spotLightColor.value =
                    c.spot.colors;
                i.spotLightPosition.value = c.spot.positions;
                i.spotLightDistance.value = c.spot.distances;
                i.spotLightDirection.value = c.spot.directions;
                i.spotLightAngleCos.value = c.spot.anglesCos;
                i.spotLightExponent.value = c.spot.exponents;
                i.hemisphereLightSkyColor.value = c.hemi.skyColors;
                i.hemisphereLightGroundColor.value = c.hemi.groundColors;
                i.hemisphereLightDirection.value = c.hemi.positions
            }
            if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
                i.opacity.value =
                    d.opacity;
                N.gammaInput ? i.diffuse.value.copyGammaToLinear(d.color) : i.diffuse.value = d.color;
                i.map.value = d.map;
                i.lightMap.value = d.lightMap;
                i.specularMap.value = d.specularMap;
                d.bumpMap && (i.bumpMap.value = d.bumpMap, i.bumpScale.value = d.bumpScale);
                d.normalMap && (i.normalMap.value = d.normalMap, i.normalScale.value.copy(d.normalScale));
                var Z;
                d.map ? Z = d.map : d.specularMap ? Z = d.specularMap : d.normalMap ? Z = d.normalMap : d.bumpMap && (Z = d.bumpMap);
                void 0 !== Z && (c = Z.offset, Z = Z.repeat, i.offsetRepeat.value.set(c.x, c.y, Z.x, Z.y));
                i.envMap.value = d.envMap;
                i.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
                i.reflectivity.value = d.reflectivity;
                i.refractionRatio.value = d.refractionRatio;
                i.combine.value = d.combine;
                i.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping
            }
            d instanceof THREE.LineBasicMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity) : d instanceof THREE.LineDashedMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity, i.dashSize.value = d.dashSize, i.totalSize.value =
                d.dashSize + d.gapSize, i.scale.value = d.scale) : d instanceof THREE.ParticleBasicMaterial ? (i.psColor.value = d.color, i.opacity.value = d.opacity, i.size.value = d.size, i.scale.value = U.height / 2, i.map.value = d.map) : d instanceof THREE.MeshPhongMaterial ? (i.shininess.value = d.shininess, N.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive), i.specular.value.copyGammaToLinear(d.specular)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive, i.specular.value = d.specular),
                d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ? (N.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (i.mNear.value = a.near, i.mFar.value = a.far, i.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (i.opacity.value = d.opacity);
            if (e.receiveShadow && !d._shadowPass &&
                i.shadowMatrix) {
                c = Z = 0;
                for (f = b.length; c < f; c++)
                    if (k = b[c], k.castShadow && (k instanceof THREE.SpotLight || k instanceof THREE.DirectionalLight && !k.shadowCascade)) i.shadowMap.value[Z] = k.shadowMap, i.shadowMapSize.value[Z] = k.shadowMapSize, i.shadowMatrix.value[Z] = k.shadowMatrix, i.shadowDarkness.value[Z] = k.shadowDarkness, i.shadowBias.value[Z] = k.shadowBias, Z++
            }
            b = d.uniformsList;
            i = 0;
            for (Z = b.length; i < Z; i++)
                if (f = g.uniforms[b[i][1]])
                    if (c = b[i][0], l = c.type, k = c.value, "i" === l) j.uniform1i(f, k);
                    else if ("f" === l) j.uniform1f(f,
                k);
            else if ("v2" === l) j.uniform2f(f, k.x, k.y);
            else if ("v3" === l) j.uniform3f(f, k.x, k.y, k.z);
            else if ("v4" === l) j.uniform4f(f, k.x, k.y, k.z, k.w);
            else if ("c" === l) j.uniform3f(f, k.r, k.g, k.b);
            else if ("iv1" === l) j.uniform1iv(f, k);
            else if ("iv" === l) j.uniform3iv(f, k);
            else if ("fv1" === l) j.uniform1fv(f, k);
            else if ("fv" === l) j.uniform3fv(f, k);
            else if ("v2v" === l) {
                void 0 === c._array && (c._array = new Float32Array(2 * k.length));
                l = 0;
                for (m = k.length; l < m; l++) r = 2 * l, c._array[r] = k[l].x, c._array[r + 1] = k[l].y;
                j.uniform2fv(f, c._array)
            } else if ("v3v" ===
                l) {
                void 0 === c._array && (c._array = new Float32Array(3 * k.length));
                l = 0;
                for (m = k.length; l < m; l++) r = 3 * l, c._array[r] = k[l].x, c._array[r + 1] = k[l].y, c._array[r + 2] = k[l].z;
                j.uniform3fv(f, c._array)
            } else if ("v4v" === l) {
                void 0 === c._array && (c._array = new Float32Array(4 * k.length));
                l = 0;
                for (m = k.length; l < m; l++) r = 4 * l, c._array[r] = k[l].x, c._array[r + 1] = k[l].y, c._array[r + 2] = k[l].z, c._array[r + 3] = k[l].w;
                j.uniform4fv(f, c._array)
            } else if ("m4" === l) void 0 === c._array && (c._array = new Float32Array(16)), k.flattenToArray(c._array), j.uniformMatrix4fv(f,
                !1, c._array);
            else if ("m4v" === l) {
                void 0 === c._array && (c._array = new Float32Array(16 * k.length));
                l = 0;
                for (m = k.length; l < m; l++) k[l].flattenToArrayOffset(c._array, 16 * l);
                j.uniformMatrix4fv(f, !1, c._array)
            } else if ("t" === l) {
                if (r = k, k = I(), j.uniform1i(f, k), r)
                    if (r.image instanceof Array && 6 === r.image.length) {
                        if (c = r, f = k, 6 === c.image.length)
                            if (c.needsUpdate) {
                                c.image.__webglTextureCube || (c.image.__webglTextureCube = j.createTexture(), N.info.memory.textures++);
                                j.activeTexture(j.TEXTURE0 + f);
                                j.bindTexture(j.TEXTURE_CUBE_MAP,
                                    c.image.__webglTextureCube);
                                j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, c.flipY);
                                f = c instanceof THREE.CompressedTexture;
                                k = [];
                                for (l = 0; 6 > l; l++) N.autoScaleCubemaps && !f ? (m = k, r = l, t = c.image[l], y = gd, t.width <= y && t.height <= y || (z = Math.max(t.width, t.height), v = Math.floor(t.width * y / z), y = Math.floor(t.height * y / z), z = document.createElement("canvas"), z.width = v, z.height = y, z.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, v, y), t = z), m[r] = t) : k[l] = c.image[l];
                                l = k[0];
                                m = 0 === (l.width & l.width - 1) && 0 === (l.height & l.height - 1);
                                r = L(c.format);
                                t = L(c.type);
                                W(j.TEXTURE_CUBE_MAP, c, m);
                                for (l = 0; 6 > l; l++)
                                    if (f) {
                                        y = k[l].mipmaps;
                                        z = 0;
                                        for (B = y.length; z < B; z++) v = y[z], j.compressedTexImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + l, z, r, v.width, v.height, 0, v.data)
                                    } else j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + l, 0, r, r, t, k[l]);
                                c.generateMipmaps && m && j.generateMipmap(j.TEXTURE_CUBE_MAP);
                                c.needsUpdate = !1;
                                if (c.onUpdate) c.onUpdate()
                            } else j.activeTexture(j.TEXTURE0 + f), j.bindTexture(j.TEXTURE_CUBE_MAP, c.image.__webglTextureCube)
                    } else r instanceof THREE.WebGLRenderTargetCube ?
                        (c = r, j.activeTexture(j.TEXTURE0 + k), j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture)) : N.setTexture(r, k)
            } else if ("tv" === l) {
                void 0 === c._array && (c._array = []);
                l = 0;
                for (m = c.value.length; l < m; l++) c._array[l] = I();
                j.uniform1iv(f, c._array);
                l = 0;
                for (m = c.value.length; l < m; l++) r = c.value[l], k = c._array[l], r && N.setTexture(r, k)
            }
            if ((d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== h.cameraPosition) Qa.getPositionFromMatrix(a.matrixWorld), j.uniform3f(h.cameraPosition, Qa.x, Qa.y,
                Qa.z);
            (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== h.viewMatrix && j.uniformMatrix4fv(h.viewMatrix, !1, a.matrixWorldInverse.elements)
        }
        j.uniformMatrix4fv(h.modelViewMatrix, !1, e._modelViewMatrix.elements);
        h.normalMatrix && j.uniformMatrix3fv(h.normalMatrix, !1, e._normalMatrix.elements);
        null !== h.modelMatrix && j.uniformMatrix4fv(h.modelMatrix, !1, e.matrixWorld.elements);
        return g
    }

    function I() {
        var a = Y;
        a >= Mc && console.warn("WebGLRenderer: trying to use " +
            a + " texture units while this GPU supports only " + Mc);
        Y += 1;
        return a
    }

    function C(a, b) {
        a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, a.matrixWorld);
        a._normalMatrix.getInverse(a._modelViewMatrix);
        a._normalMatrix.transpose()
    }

    function x(a, b, c, d) {
        a[b] = c.r * c.r * d;
        a[b + 1] = c.g * c.g * d;
        a[b + 2] = c.b * c.b * d
    }

    function G(a, b, c, d) {
        a[b] = c.r * d;
        a[b + 1] = c.g * d;
        a[b + 2] = c.b * d
    }

    function J(a) {
        a !== ub && (j.lineWidth(a), ub = a)
    }

    function E(a, b, c) {
        ab !== a && (a ? j.enable(j.POLYGON_OFFSET_FILL) : j.disable(j.POLYGON_OFFSET_FILL), ab = a);
        if (a &&
            (Fa !== b || Xa !== c)) j.polygonOffset(b, c), Fa = b, Xa = c
    }

    function H(a) {
        for (var a = a.split("\n"), b = 0, c = a.length; b < c; b++) a[b] = b + 1 + ": " + a[b];
        return a.join("\n")
    }

    function B(a, b) {
        var c;
        "fragment" === a ? c = j.createShader(j.FRAGMENT_SHADER) : "vertex" === a && (c = j.createShader(j.VERTEX_SHADER));
        j.shaderSource(c, b);
        j.compileShader(c);
        return !j.getShaderParameter(c, j.COMPILE_STATUS) ? (console.error(j.getShaderInfoLog(c)), console.error(H(b)), null) : c
    }

    function W(a, b, c) {
        c ? (j.texParameteri(a, j.TEXTURE_WRAP_S, L(b.wrapS)), j.texParameteri(a,
            j.TEXTURE_WRAP_T, L(b.wrapT)), j.texParameteri(a, j.TEXTURE_MAG_FILTER, L(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, L(b.minFilter))) : (j.texParameteri(a, j.TEXTURE_WRAP_S, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_WRAP_T, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_MAG_FILTER, K(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, K(b.minFilter)));
        if (cb && b.type !== THREE.FloatType && (1 < b.anisotropy || b.__oldAnisotropy)) j.texParameterf(a, cb.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, Cc)), b.__oldAnisotropy =
            b.anisotropy
    }

    function F(a, b) {
        j.bindRenderbuffer(j.RENDERBUFFER, a);
        b.depthBuffer && !b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_COMPONENT16, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_STENCIL, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a)) : j.renderbufferStorage(j.RENDERBUFFER, j.RGBA4, b.width, b.height)
    }

    function K(a) {
        return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? j.NEAREST : j.LINEAR
    }

    function L(a) {
        if (a === THREE.RepeatWrapping) return j.REPEAT;
        if (a === THREE.ClampToEdgeWrapping) return j.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping) return j.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter) return j.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter) return j.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter) return j.NEAREST_MIPMAP_LINEAR;
        if (a ===
            THREE.LinearFilter) return j.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter) return j.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter) return j.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType) return j.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type) return j.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type) return j.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type) return j.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType) return j.BYTE;
        if (a === THREE.ShortType) return j.SHORT;
        if (a ===
            THREE.UnsignedShortType) return j.UNSIGNED_SHORT;
        if (a === THREE.IntType) return j.INT;
        if (a === THREE.UnsignedIntType) return j.UNSIGNED_INT;
        if (a === THREE.FloatType) return j.FLOAT;
        if (a === THREE.AlphaFormat) return j.ALPHA;
        if (a === THREE.RGBFormat) return j.RGB;
        if (a === THREE.RGBAFormat) return j.RGBA;
        if (a === THREE.LuminanceFormat) return j.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat) return j.LUMINANCE_ALPHA;
        if (a === THREE.AddEquation) return j.FUNC_ADD;
        if (a === THREE.SubtractEquation) return j.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation) return j.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor) return j.ZERO;
        if (a === THREE.OneFactor) return j.ONE;
        if (a === THREE.SrcColorFactor) return j.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor) return j.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor) return j.SRC_ALPHA;
        if (a === THREE.OneMinusSrcAlphaFactor) return j.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor) return j.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor) return j.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor) return j.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor) return j.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor) return j.SRC_ALPHA_SATURATE;
        if (void 0 !== Sa) {
            if (a === THREE.RGB_S3TC_DXT1_Format) return Sa.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format) return Sa.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format) return Sa.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format) return Sa.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        return 0
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION);
    var a = a || {},
        U = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
        fa = void 0 !== a.precision ? a.precision : "highp",
        Ca = void 0 !== a.alpha ? a.alpha : !0,
        $a = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
        M = void 0 !== a.antialias ? a.antialias : !1,
        ca = void 0 !== a.stencil ? a.stencil : !0,
        qa = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
        ha = void 0 !== a.clearColor ? new THREE.Color(a.clearColor) : new THREE.Color(0),
        ra = void 0 !== a.clearAlpha ? a.clearAlpha : 0;
    this.domElement = U;
    this.context = null;
    this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== window.devicePixelRatio ?
        window.devicePixelRatio : 1;
    this.autoUpdateScene = this.autoUpdateObjects = this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.shadowMapEnabled = this.physicallyBasedShading = this.gammaOutput = this.gammaInput = !1;
    this.shadowMapAutoUpdate = !0;
    this.shadowMapType = THREE.PCFShadowMap;
    this.shadowMapCullFace = THREE.CullFaceFront;
    this.shadowMapCascade = this.shadowMapDebug = !1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    this.autoScaleCubemaps = !0;
    this.renderPluginsPre = [];
    this.renderPluginsPost = [];
    this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        },
        render: {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        }
    };
    var N = this,
        Ma = [],
        Na = 0,
        mb = null,
        Pa = null,
        ta = -1,
        ka = null,
        aa = null,
        pa = 0,
        Y = 0,
        da = -1,
        la = -1,
        Z = -1,
        oa = -1,
        gb = -1,
        nb = -1,
        ia = -1,
        Wa = -1,
        ab = null,
        Fa = null,
        Xa = null,
        ub = null,
        Ib = 0,
        Jb = 0,
        fc = 0,
        Ab = 0,
        mc = 0,
        pb = 0,
        Ka = {},
        Va = new THREE.Frustum,
        gc = new THREE.Matrix4,
        vb = new THREE.Matrix4,
        Qa = new THREE.Vector3,
        La = new THREE.Vector3,
        bb = !0,
        xb = {
            ambient: [0, 0, 0],
            directional: {
                length: 0,
                colors: [],
                positions: []
            },
            point: {
                length: 0,
                colors: [],
                positions: [],
                distances: []
            },
            spot: {
                length: 0,
                colors: [],
                positions: [],
                distances: [],
                directions: [],
                anglesCos: [],
                exponents: []
            },
            hemi: {
                length: 0,
                skyColors: [],
                groundColors: [],
                positions: []
            }
        },
        j, yb, Ra, cb, Sa;
    try {
        if (!(j = U.getContext("experimental-webgl", {
                alpha: Ca,
                premultipliedAlpha: $a,
                antialias: M,
                stencil: ca,
                preserveDrawingBuffer: qa
            }))) throw "Error creating WebGL context.";
    } catch (zb) {
        console.error(zb)
    }
    yb = j.getExtension("OES_texture_float");
    Ra = j.getExtension("OES_standard_derivatives");
    cb = j.getExtension("EXT_texture_filter_anisotropic") ||
        j.getExtension("MOZ_EXT_texture_filter_anisotropic") || j.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
    Sa = j.getExtension("WEBGL_compressed_texture_s3tc") || j.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || j.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
    yb || console.log("THREE.WebGLRenderer: Float textures not supported.");
    Ra || console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
    cb || console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
    Sa || console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
    void 0 === j.getShaderPrecisionFormat && (j.getShaderPrecisionFormat = function() {
        return {
            rangeMin: 1,
            rangeMax: 1,
            precision: 1
        }
    });
    j.clearColor(0, 0, 0, 1);
    j.clearDepth(1);
    j.clearStencil(0);
    j.enable(j.DEPTH_TEST);
    j.depthFunc(j.LEQUAL);
    j.frontFace(j.CCW);
    j.cullFace(j.BACK);
    j.enable(j.CULL_FACE);
    j.enable(j.BLEND);
    j.blendEquation(j.FUNC_ADD);
    j.blendFunc(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA);
    j.clearColor(ha.r, ha.g, ha.b, ra);
    this.context = j;
    var Mc = j.getParameter(j.MAX_TEXTURE_IMAGE_UNITS),
        fd = j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    j.getParameter(j.MAX_TEXTURE_SIZE);
    var gd = j.getParameter(j.MAX_CUBE_MAP_TEXTURE_SIZE),
        Cc = cb ? j.getParameter(cb.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
        sc = 0 < fd,
        tc = sc && yb;
    Sa && j.getParameter(j.COMPRESSED_TEXTURE_FORMATS);
    var jd = j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.HIGH_FLOAT),
        kd = j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.MEDIUM_FLOAT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.LOW_FLOAT);
    var ld =
        j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.HIGH_FLOAT),
        id = j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.MEDIUM_FLOAT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.LOW_FLOAT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.HIGH_INT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.MEDIUM_INT);
    j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.LOW_INT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.HIGH_INT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.MEDIUM_INT);
    j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,
        j.LOW_INT);
    var hd = 0 < jd.precision && 0 < ld.precision,
        Nc = 0 < kd.precision && 0 < id.precision;
    "highp" === fa && !hd && (Nc ? (fa = "mediump", console.warn("WebGLRenderer: highp not supported, using mediump")) : (fa = "lowp", console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));
    "mediump" === fa && !Nc && (fa = "lowp", console.warn("WebGLRenderer: mediump not supported, using lowp"));
    this.getContext = function() {
        return j
    };
    this.supportsVertexTextures = function() {
        return sc
    };
    this.supportsFloatTextures = function() {
        return yb
    };
    this.supportsStandardDerivatives = function() {
        return Ra
    };
    this.supportsCompressedTextureS3TC = function() {
        return Sa
    };
    this.getMaxAnisotropy = function() {
        return Cc
    };
    this.getPrecision = function() {
        return fa
    };
    this.setSize = function(a, b) {
        U.width = a * this.devicePixelRatio;
        U.height = b * this.devicePixelRatio;
        U.style.width = a + "px";
        U.style.height = b + "px";
        this.setViewport(0, 0, U.width, U.height)
    };
    this.setViewport = function(a, b, c, d) {
        Ib = void 0 !== a ? a : 0;
        Jb = void 0 !== b ? b : 0;
        fc = void 0 !== c ? c : U.width;
        Ab = void 0 !== d ? d : U.height;
        j.viewport(Ib,
            Jb, fc, Ab)
    };
    this.setScissor = function(a, b, c, d) {
        j.scissor(a, b, c, d)
    };
    this.enableScissorTest = function(a) {
        a ? j.enable(j.SCISSOR_TEST) : j.disable(j.SCISSOR_TEST)
    };
    this.setClearColorHex = function(a, b) {
        ha.setHex(a);
        ra = b;
        j.clearColor(ha.r, ha.g, ha.b, ra)
    };
    this.setClearColor = function(a, b) {
        ha.copy(a);
        ra = b;
        j.clearColor(ha.r, ha.g, ha.b, ra)
    };
    this.getClearColor = function() {
        return ha
    };
    this.getClearAlpha = function() {
        return ra
    };
    this.clear = function(a, b, c) {
        var d = 0;
        if (void 0 === a || a) d |= j.COLOR_BUFFER_BIT;
        if (void 0 === b || b) d |= j.DEPTH_BUFFER_BIT;
        if (void 0 === c || c) d |= j.STENCIL_BUFFER_BIT;
        j.clear(d)
    };
    this.clearTarget = function(a, b, c, d) {
        this.setRenderTarget(a);
        this.clear(b, c, d)
    };
    this.addPostPlugin = function(a) {
        a.init(this);
        this.renderPluginsPost.push(a)
    };
    this.addPrePlugin = function(a) {
        a.init(this);
        this.renderPluginsPre.push(a)
    };
    this.updateShadowMap = function(a, b) {
        mb = null;
        ta = ka = Wa = ia = Z = -1;
        bb = !0;
        la = da = -1;
        this.shadowMapPlugin.update(a, b)
    };
    var wd = function(a) {
            a = a.target;
            a.removeEventListener("dispose", wd);
            a.__webglInit = void 0;
            void 0 !== a.__webglVertexBuffer &&
                j.deleteBuffer(a.__webglVertexBuffer);
            void 0 !== a.__webglNormalBuffer && j.deleteBuffer(a.__webglNormalBuffer);
            void 0 !== a.__webglTangentBuffer && j.deleteBuffer(a.__webglTangentBuffer);
            void 0 !== a.__webglColorBuffer && j.deleteBuffer(a.__webglColorBuffer);
            void 0 !== a.__webglUVBuffer && j.deleteBuffer(a.__webglUVBuffer);
            void 0 !== a.__webglUV2Buffer && j.deleteBuffer(a.__webglUV2Buffer);
            void 0 !== a.__webglSkinIndicesBuffer && j.deleteBuffer(a.__webglSkinIndicesBuffer);
            void 0 !== a.__webglSkinWeightsBuffer && j.deleteBuffer(a.__webglSkinWeightsBuffer);
            void 0 !== a.__webglFaceBuffer && j.deleteBuffer(a.__webglFaceBuffer);
            void 0 !== a.__webglLineBuffer && j.deleteBuffer(a.__webglLineBuffer);
            void 0 !== a.__webglLineDistanceBuffer && j.deleteBuffer(a.__webglLineDistanceBuffer);
            if (void 0 !== a.geometryGroups)
                for (var c in a.geometryGroups) {
                    var d = a.geometryGroups[c];
                    if (void 0 !== d.numMorphTargets)
                        for (var e = 0, f = d.numMorphTargets; e < f; e++) j.deleteBuffer(d.__webglMorphTargetsBuffers[e]);
                    if (void 0 !== d.numMorphNormals) {
                        e = 0;
                        for (f = d.numMorphNormals; e < f; e++) j.deleteBuffer(d.__webglMorphNormalsBuffers[e])
                    }
                    b(d)
                }
            b(a);
            N.info.memory.geometries--
        },
        Oc = function(a) {
            a = a.target;
            a.removeEventListener("dispose", Oc);
            a.image && a.image.__webglTextureCube ? j.deleteTexture(a.image.__webglTextureCube) : a.__webglInit && (a.__webglInit = !1, j.deleteTexture(a.__webglTexture));
            N.info.memory.textures--
        },
        P = function(a) {
            a = a.target;
            a.removeEventListener("dispose", P);
            if (a && a.__webglTexture)
                if (j.deleteTexture(a.__webglTexture), a instanceof THREE.WebGLRenderTargetCube)
                    for (var b = 0; 6 > b; b++) j.deleteFramebuffer(a.__webglFramebuffer[b]), j.deleteRenderbuffer(a.__webglRenderbuffer[b]);
                else j.deleteFramebuffer(a.__webglFramebuffer), j.deleteRenderbuffer(a.__webglRenderbuffer);
            N.info.memory.textures--
        },
        X = function(a) {
            a = a.target;
            a.removeEventListener("dispose", X);
            Pc(a)
        },
        Pc = function(a) {
            var b = a.program;
            if (void 0 !== b) {
                a.program = void 0;
                var c, d, e = !1,
                    a = 0;
                for (c = Ma.length; a < c; a++)
                    if (d = Ma[a], d.program === b) {
                        d.usedTimes--;
                        0 === d.usedTimes && (e = !0);
                        break
                    } if (!0 === e) {
                    e = [];
                    a = 0;
                    for (c = Ma.length; a < c; a++) d = Ma[a], d.program !== b && e.push(d);
                    Ma = e;
                    j.deleteProgram(b);
                    N.info.memory.programs--
                }
            }
        };
    this.renderBufferImmediate =
        function(a, b, c) {
            a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = j.createBuffer());
            a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer = j.createBuffer());
            a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = j.createBuffer());
            a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = j.createBuffer());
            a.hasPositions && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, a.positionArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.position), j.vertexAttribPointer(b.attributes.position,
                3, j.FLOAT, !1, 0, 0));
            if (a.hasNormals) {
                j.bindBuffer(j.ARRAY_BUFFER, a.__webglNormalBuffer);
                if (c.shading === THREE.FlatShading) {
                    var d, e, f, g, i, h, k, l, n, m, p, q = 3 * a.count;
                    for (p = 0; p < q; p += 9) m = a.normalArray, d = m[p], e = m[p + 1], f = m[p + 2], g = m[p + 3], h = m[p + 4], l = m[p + 5], i = m[p + 6], k = m[p + 7], n = m[p + 8], d = (d + g + i) / 3, e = (e + h + k) / 3, f = (f + l + n) / 3, m[p] = d, m[p + 1] = e, m[p + 2] = f, m[p + 3] = d, m[p + 4] = e, m[p + 5] = f, m[p + 6] = d, m[p + 7] = e, m[p + 8] = f
                }
                j.bufferData(j.ARRAY_BUFFER, a.normalArray, j.DYNAMIC_DRAW);
                j.enableVertexAttribArray(b.attributes.normal);
                j.vertexAttribPointer(b.attributes.normal,
                    3, j.FLOAT, !1, 0, 0)
            }
            a.hasUvs && c.map && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglUvBuffer), j.bufferData(j.ARRAY_BUFFER, a.uvArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.uv), j.vertexAttribPointer(b.attributes.uv, 2, j.FLOAT, !1, 0, 0));
            a.hasColors && c.vertexColors !== THREE.NoColors && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, a.colorArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.color), j.vertexAttribPointer(b.attributes.color, 3, j.FLOAT, !1, 0, 0));
            j.drawArrays(j.TRIANGLES,
                0, a.count);
            a.count = 0
        };
    this.renderBufferDirect = function(a, b, c, d, e, f) {
        if (!1 !== d.visible)
            if (c = A(a, b, c, d, f), a = c.attributes, b = !1, c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0), c !== ka && (ka = c, b = !0), b && l(), f instanceof THREE.Mesh)
                if (d = e.attributes.index) {
                    f = e.offsets;
                    1 < f.length && (b = !0);
                    for (var c = 0, g = f.length; c < g; c++) {
                        var i = f[c].index;
                        if (b) {
                            var h = e.attributes.position,
                                n = h.itemSize;
                            j.bindBuffer(j.ARRAY_BUFFER, h.buffer);
                            k(a.position);
                            j.vertexAttribPointer(a.position, n, j.FLOAT, !1, 0, 4 * i * n);
                            n = e.attributes.normal;
                            if (0 <=
                                a.normal && n) {
                                var m = n.itemSize;
                                j.bindBuffer(j.ARRAY_BUFFER, n.buffer);
                                k(a.normal);
                                j.vertexAttribPointer(a.normal, m, j.FLOAT, !1, 0, 4 * i * m)
                            }
                            n = e.attributes.uv;
                            0 <= a.uv && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.uv), j.vertexAttribPointer(a.uv, m, j.FLOAT, !1, 0, 4 * i * m));
                            n = e.attributes.color;
                            0 <= a.color && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.color), j.vertexAttribPointer(a.color, m, j.FLOAT, !1, 0, 4 * i * m));
                            n = e.attributes.tangent;
                            0 <= a.tangent && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER,
                                n.buffer), k(a.tangent), j.vertexAttribPointer(a.tangent, m, j.FLOAT, !1, 0, 4 * i * m));
                            j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, d.buffer)
                        }
                        j.drawElements(j.TRIANGLES, f[c].count, j.UNSIGNED_SHORT, 2 * f[c].start);
                        N.info.render.calls++;
                        N.info.render.vertices += f[c].count;
                        N.info.render.faces += f[c].count / 3
                    }
                } else b && (h = e.attributes.position, n = h.itemSize, j.bindBuffer(j.ARRAY_BUFFER, h.buffer), k(a.position), j.vertexAttribPointer(a.position, n, j.FLOAT, !1, 0, 0), n = e.attributes.normal, 0 <= a.normal && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER,
                    n.buffer), k(a.normal), j.vertexAttribPointer(a.normal, m, j.FLOAT, !1, 0, 0)), n = e.attributes.uv, 0 <= a.uv && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.uv), j.vertexAttribPointer(a.uv, m, j.FLOAT, !1, 0, 0)), n = e.attributes.color, 0 <= a.color && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.color), j.vertexAttribPointer(a.color, m, j.FLOAT, !1, 0, 0)), n = e.attributes.tangent, 0 <= a.tangent && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.tangent), j.vertexAttribPointer(a.tangent, m, j.FLOAT,
                    !1, 0, 0))), j.drawArrays(j.TRIANGLES, 0, h.numItems / 3), N.info.render.calls++, N.info.render.vertices += h.numItems / 3, N.info.render.faces += h.numItems / 3 / 3;
        else f instanceof THREE.ParticleSystem ? b && (h = e.attributes.position, n = h.itemSize, j.bindBuffer(j.ARRAY_BUFFER, h.buffer), k(a.position), j.vertexAttribPointer(a.position, n, j.FLOAT, !1, 0, 0), n = e.attributes.color, 0 <= a.color && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.color), j.vertexAttribPointer(a.color, m, j.FLOAT, !1, 0, 0)), j.drawArrays(j.POINTS, 0,
            h.numItems / 3), N.info.render.calls++, N.info.render.points += h.numItems / 3) : f instanceof THREE.Line && b && (h = e.attributes.position, n = h.itemSize, j.bindBuffer(j.ARRAY_BUFFER, h.buffer), k(a.position), j.vertexAttribPointer(a.position, n, j.FLOAT, !1, 0, 0), n = e.attributes.color, 0 <= a.color && n && (m = n.itemSize, j.bindBuffer(j.ARRAY_BUFFER, n.buffer), k(a.color), j.vertexAttribPointer(a.color, m, j.FLOAT, !1, 0, 0)), J(d.linewidth), j.drawArrays(j.LINE_STRIP, 0, h.numItems / 3), N.info.render.calls++, N.info.render.points += h.numItems)
    };
    this.renderBuffer = function(a, b, c, d, e, f) {
        if (!1 !== d.visible) {
            var g, i, c = A(a, b, c, d, f),
                a = c.attributes,
                b = !1,
                c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0);
            c !== ka && (ka = c, b = !0);
            b && l();
            if (!d.morphTargets && 0 <= a.position) b && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglVertexBuffer), k(a.position), j.vertexAttribPointer(a.position, 3, j.FLOAT, !1, 0, 0));
            else if (f.morphTargetBase) {
                c = d.program.attributes; - 1 !== f.morphTargetBase && 0 <= c.position ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[f.morphTargetBase]), k(c.position),
                    j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0)) : 0 <= c.position && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglVertexBuffer), k(c.position), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0));
                if (f.morphTargetForcedOrder.length) {
                    var h = 0;
                    i = f.morphTargetForcedOrder;
                    for (g = f.morphTargetInfluences; h < d.numSupportedMorphTargets && h < i.length;) 0 <= c["morphTarget" + h] && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[i[h]]), k(c["morphTarget" + h]), j.vertexAttribPointer(c["morphTarget" + h], 3, j.FLOAT, !1, 0, 0)), 0 <=
                        c["morphNormal" + h] && d.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[i[h]]), k(c["morphNormal" + h]), j.vertexAttribPointer(c["morphNormal" + h], 3, j.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[h] = g[i[h]], h++
                } else {
                    i = [];
                    g = f.morphTargetInfluences;
                    var m, p = g.length;
                    for (m = 0; m < p; m++) h = g[m], 0 < h && i.push([h, m]);
                    i.length > d.numSupportedMorphTargets ? (i.sort(n), i.length = d.numSupportedMorphTargets) : i.length > d.numSupportedMorphNormals ? i.sort(n) : 0 === i.length && i.push([0, 0]);
                    for (h = 0; h < d.numSupportedMorphTargets;) i[h] ?
                        (m = i[h][1], 0 <= c["morphTarget" + h] && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[m]), k(c["morphTarget" + h]), j.vertexAttribPointer(c["morphTarget" + h], 3, j.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + h] && d.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[m]), k(c["morphNormal" + h]), j.vertexAttribPointer(c["morphNormal" + h], 3, j.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[h] = g[m]) : f.__webglMorphTargetInfluences[h] = 0, h++
                }
                null !== d.program.uniforms.morphTargetInfluences && j.uniform1fv(d.program.uniforms.morphTargetInfluences,
                    f.__webglMorphTargetInfluences)
            }
            if (b) {
                if (e.__webglCustomAttributesList) {
                    g = 0;
                    for (i = e.__webglCustomAttributesList.length; g < i; g++) c = e.__webglCustomAttributesList[g], 0 <= a[c.buffer.belongsToAttribute] && (j.bindBuffer(j.ARRAY_BUFFER, c.buffer), k(a[c.buffer.belongsToAttribute]), j.vertexAttribPointer(a[c.buffer.belongsToAttribute], c.size, j.FLOAT, !1, 0, 0))
                }
                0 <= a.color && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglColorBuffer), k(a.color), j.vertexAttribPointer(a.color, 3, j.FLOAT, !1, 0, 0));
                0 <= a.normal && (j.bindBuffer(j.ARRAY_BUFFER,
                    e.__webglNormalBuffer), k(a.normal), j.vertexAttribPointer(a.normal, 3, j.FLOAT, !1, 0, 0));
                0 <= a.tangent && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglTangentBuffer), k(a.tangent), j.vertexAttribPointer(a.tangent, 4, j.FLOAT, !1, 0, 0));
                0 <= a.uv && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUVBuffer), k(a.uv), j.vertexAttribPointer(a.uv, 2, j.FLOAT, !1, 0, 0));
                0 <= a.uv2 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUV2Buffer), k(a.uv2), j.vertexAttribPointer(a.uv2, 2, j.FLOAT, !1, 0, 0));
                d.skinning && (0 <= a.skinIndex && 0 <= a.skinWeight) && (j.bindBuffer(j.ARRAY_BUFFER,
                    e.__webglSkinIndicesBuffer), k(a.skinIndex), j.vertexAttribPointer(a.skinIndex, 4, j.FLOAT, !1, 0, 0), j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), k(a.skinWeight), j.vertexAttribPointer(a.skinWeight, 4, j.FLOAT, !1, 0, 0));
                0 <= a.lineDistance && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglLineDistanceBuffer), k(a.lineDistance), j.vertexAttribPointer(a.lineDistance, 1, j.FLOAT, !1, 0, 0))
            }
            f instanceof THREE.Mesh ? (d.wireframe ? (J(d.wireframeLinewidth), b && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), j.drawElements(j.LINES,
                e.__webglLineCount, j.UNSIGNED_SHORT, 0)) : (b && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), j.drawElements(j.TRIANGLES, e.__webglFaceCount, j.UNSIGNED_SHORT, 0)), N.info.render.calls++, N.info.render.vertices += e.__webglFaceCount, N.info.render.faces += e.__webglFaceCount / 3) : f instanceof THREE.Line ? (f = f.type === THREE.LineStrip ? j.LINE_STRIP : j.LINES, J(d.linewidth), j.drawArrays(f, 0, e.__webglLineCount), N.info.render.calls++) : f instanceof THREE.ParticleSystem ? (j.drawArrays(j.POINTS, 0, e.__webglParticleCount),
                N.info.render.calls++, N.info.render.points += e.__webglParticleCount) : f instanceof THREE.Ribbon && (j.drawArrays(j.TRIANGLE_STRIP, 0, e.__webglVertexCount), N.info.render.calls++)
        }
    };
    this.render = function(a, b, c, d) {
        if (!1 === b instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var e, f, g, i, h = a.__lights,
                k = a.fog;
            ta = -1;
            bb = !0;
            this.autoUpdateScene && a.updateMatrixWorld();
            void 0 === b.parent && b.updateMatrixWorld();
            b.matrixWorldInverse.getInverse(b.matrixWorld);
            gc.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            Va.setFromMatrix(gc);
            this.autoUpdateObjects && this.initWebGLObjects(a);
            s(this.renderPluginsPre, a, b);
            N.info.render.calls = 0;
            N.info.render.vertices = 0;
            N.info.render.faces = 0;
            N.info.render.points = 0;
            this.setRenderTarget(c);
            (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
            i = a.__webglObjects;
            d = 0;
            for (e = i.length; d < e; d++)
                if (f = i[d], g = f.object, f.render = !1, g.visible && (!(g instanceof THREE.Mesh || g instanceof THREE.ParticleSystem) || !g.frustumCulled || Va.intersectsObject(g))) {
                    C(g, b);
                    var n = f,
                        l = n.buffer,
                        q = void 0,
                        t = q = void 0,
                        t = n.object.material;
                    if (t instanceof THREE.MeshFaceMaterial) q = l.materialIndex, q = t.materials[q], q.transparent ? (n.transparent = q, n.opaque = null) : (n.opaque = q, n.transparent = null);
                    else if (q = t) q.transparent ? (n.transparent = q, n.opaque = null) : (n.opaque = q, n.transparent = null);
                    f.render = !0;
                    !0 === this.sortObjects && (null !== g.renderDepth ? f.z = g.renderDepth : (Qa.getPositionFromMatrix(g.matrixWorld), Qa.applyProjection(gc),
                        f.z = Qa.z), f.id = g.id)
                } this.sortObjects && i.sort(m);
            i = a.__webglObjectsImmediate;
            d = 0;
            for (e = i.length; d < e; d++) f = i[d], g = f.object, g.visible && (C(g, b), g = f.object.material, g.transparent ? (f.transparent = g, f.opaque = null) : (f.opaque = g, f.transparent = null));
            a.overrideMaterial ? (d = a.overrideMaterial, this.setBlending(d.blending, d.blendEquation, d.blendSrc, d.blendDst), this.setDepthTest(d.depthTest), this.setDepthWrite(d.depthWrite), E(d.polygonOffset, d.polygonOffsetFactor, d.polygonOffsetUnits), r(a.__webglObjects, !1, "", b,
                h, k, !0, d), p(a.__webglObjectsImmediate, "", b, h, k, !1, d)) : (d = null, this.setBlending(THREE.NoBlending), r(a.__webglObjects, !0, "opaque", b, h, k, !1, d), p(a.__webglObjectsImmediate, "opaque", b, h, k, !1, d), r(a.__webglObjects, !1, "transparent", b, h, k, !0, d), p(a.__webglObjectsImmediate, "transparent", b, h, k, !0, d));
            s(this.renderPluginsPost, a, b);
            c && (c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter) && (c instanceof THREE.WebGLRenderTargetCube ? (j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture),
                j.generateMipmap(j.TEXTURE_CUBE_MAP), j.bindTexture(j.TEXTURE_CUBE_MAP, null)) : (j.bindTexture(j.TEXTURE_2D, c.__webglTexture), j.generateMipmap(j.TEXTURE_2D), j.bindTexture(j.TEXTURE_2D, null)));
            this.setDepthTest(!0);
            this.setDepthWrite(!0)
        }
    };
    this.renderImmediateObject = function(a, b, c, d, e) {
        var f = A(a, b, c, d, e);
        ka = -1;
        N.setMaterialFaces(d);
        e.immediateRenderCallback ? e.immediateRenderCallback(f, j, Va) : e.render(function(a) {
            N.renderBufferImmediate(a, f, d)
        })
    };
    this.initWebGLObjects = function(a) {
        a.__webglObjects || (a.__webglObjects = [], a.__webglObjectsImmediate = [], a.__webglSprites = [], a.__webglFlares = []);
        for (; a.__objectsAdded.length;) {
            var b = a.__objectsAdded[0],
                k = a,
                l = void 0,
                m = void 0,
                p = void 0,
                r = void 0;
            if (!b.__webglInit)
                if (b.__webglInit = !0, b._modelViewMatrix = new THREE.Matrix4, b._normalMatrix = new THREE.Matrix3, void 0 !== b.geometry && void 0 === b.geometry.__webglInit && (b.geometry.__webglInit = !0, b.geometry.addEventListener("dispose", wd)), b instanceof THREE.Mesh)
                    if (m = b.geometry, p = b.material, m instanceof THREE.Geometry) {
                        if (void 0 === m.geometryGroups) {
                            var s =
                                m,
                                x = void 0,
                                C = void 0,
                                B = void 0,
                                A = void 0,
                                F = void 0,
                                E = void 0,
                                G = {},
                                I = s.morphTargets.length,
                                J = s.morphNormals.length,
                                K = p instanceof THREE.MeshFaceMaterial;
                            s.geometryGroups = {};
                            x = 0;
                            for (C = s.faces.length; x < C; x++) B = s.faces[x], A = K ? B.materialIndex : 0, void 0 === G[A] && (G[A] = {
                                    hash: A,
                                    counter: 0
                                }), E = G[A].hash + "_" + G[A].counter, void 0 === s.geometryGroups[E] && (s.geometryGroups[E] = {
                                    faces3: [],
                                    faces4: [],
                                    materialIndex: A,
                                    vertices: 0,
                                    numMorphTargets: I,
                                    numMorphNormals: J
                                }), F = B instanceof THREE.Face3 ? 3 : 4, 65535 < s.geometryGroups[E].vertices +
                                F && (G[A].counter += 1, E = G[A].hash + "_" + G[A].counter, void 0 === s.geometryGroups[E] && (s.geometryGroups[E] = {
                                    faces3: [],
                                    faces4: [],
                                    materialIndex: A,
                                    vertices: 0,
                                    numMorphTargets: I,
                                    numMorphNormals: J
                                })), B instanceof THREE.Face3 ? s.geometryGroups[E].faces3.push(x) : s.geometryGroups[E].faces4.push(x), s.geometryGroups[E].vertices += F;
                            s.geometryGroupsList = [];
                            var L = void 0;
                            for (L in s.geometryGroups) s.geometryGroups[L].id = pa++, s.geometryGroupsList.push(s.geometryGroups[L])
                        }
                        for (l in m.geometryGroups)
                            if (r = m.geometryGroups[l],
                                !r.__webglVertexBuffer) {
                                var H = r;
                                H.__webglVertexBuffer = j.createBuffer();
                                H.__webglNormalBuffer = j.createBuffer();
                                H.__webglTangentBuffer = j.createBuffer();
                                H.__webglColorBuffer = j.createBuffer();
                                H.__webglUVBuffer = j.createBuffer();
                                H.__webglUV2Buffer = j.createBuffer();
                                H.__webglSkinIndicesBuffer = j.createBuffer();
                                H.__webglSkinWeightsBuffer = j.createBuffer();
                                H.__webglFaceBuffer = j.createBuffer();
                                H.__webglLineBuffer = j.createBuffer();
                                var M = void 0,
                                    P = void 0;
                                if (H.numMorphTargets) {
                                    H.__webglMorphTargetsBuffers = [];
                                    M = 0;
                                    for (P = H.numMorphTargets; M < P; M++) H.__webglMorphTargetsBuffers.push(j.createBuffer())
                                }
                                if (H.numMorphNormals) {
                                    H.__webglMorphNormalsBuffers = [];
                                    M = 0;
                                    for (P = H.numMorphNormals; M < P; M++) H.__webglMorphNormalsBuffers.push(j.createBuffer())
                                }
                                N.info.memory.geometries++;
                                d(r, b);
                                m.verticesNeedUpdate = !0;
                                m.morphTargetsNeedUpdate = !0;
                                m.elementsNeedUpdate = !0;
                                m.uvsNeedUpdate = !0;
                                m.normalsNeedUpdate = !0;
                                m.tangentsNeedUpdate = !0;
                                m.colorsNeedUpdate = !0
                            }
                    } else m instanceof THREE.BufferGeometry && h(m);
            else if (b instanceof THREE.Ribbon) {
                if (m =
                    b.geometry, !m.__webglVertexBuffer) {
                    var U = m;
                    U.__webglVertexBuffer = j.createBuffer();
                    U.__webglColorBuffer = j.createBuffer();
                    U.__webglNormalBuffer = j.createBuffer();
                    N.info.memory.geometries++;
                    var aa = m,
                        W = b,
                        Y = aa.vertices.length;
                    aa.__vertexArray = new Float32Array(3 * Y);
                    aa.__colorArray = new Float32Array(3 * Y);
                    aa.__normalArray = new Float32Array(3 * Y);
                    aa.__webglVertexCount = Y;
                    c(aa, W);
                    m.verticesNeedUpdate = !0;
                    m.colorsNeedUpdate = !0;
                    m.normalsNeedUpdate = !0
                }
            } else if (b instanceof THREE.Line) {
                if (m = b.geometry, !m.__webglVertexBuffer)
                    if (m instanceof THREE.Geometry) {
                        var Z = m;
                        Z.__webglVertexBuffer = j.createBuffer();
                        Z.__webglColorBuffer = j.createBuffer();
                        Z.__webglLineDistanceBuffer = j.createBuffer();
                        N.info.memory.geometries++;
                        var X = m,
                            da = b,
                            ka = X.vertices.length;
                        X.__vertexArray = new Float32Array(3 * ka);
                        X.__colorArray = new Float32Array(3 * ka);
                        X.__lineDistanceArray = new Float32Array(1 * ka);
                        X.__webglLineCount = ka;
                        c(X, da);
                        m.verticesNeedUpdate = !0;
                        m.colorsNeedUpdate = !0;
                        m.lineDistancesNeedUpdate = !0
                    } else m instanceof THREE.BufferGeometry && h(m)
            } else if (b instanceof THREE.ParticleSystem &&
                (m = b.geometry, !m.__webglVertexBuffer))
                if (m instanceof THREE.Geometry) {
                    var fa = m;
                    fa.__webglVertexBuffer = j.createBuffer();
                    fa.__webglColorBuffer = j.createBuffer();
                    N.info.memory.geometries++;
                    var ca = m,
                        Ma = b,
                        ha = ca.vertices.length;
                    ca.__vertexArray = new Float32Array(3 * ha);
                    ca.__colorArray = new Float32Array(3 * ha);
                    ca.__sortArray = [];
                    ca.__webglParticleCount = ha;
                    c(ca, Ma);
                    m.verticesNeedUpdate = !0;
                    m.colorsNeedUpdate = !0
                } else m instanceof THREE.BufferGeometry && h(m);
            if (!b.__webglActive) {
                if (b instanceof THREE.Mesh)
                    if (m = b.geometry,
                        m instanceof THREE.BufferGeometry) q(k.__webglObjects, m, b);
                    else {
                        if (m instanceof THREE.Geometry)
                            for (l in m.geometryGroups) r = m.geometryGroups[l], q(k.__webglObjects, r, b)
                    }
                else b instanceof THREE.Ribbon || b instanceof THREE.Line || b instanceof THREE.ParticleSystem ? (m = b.geometry, q(k.__webglObjects, m, b)) : b instanceof THREE.ImmediateRenderObject || b.immediateRenderCallback ? k.__webglObjectsImmediate.push({
                        object: b,
                        opaque: null,
                        transparent: null
                    }) : b instanceof THREE.Sprite ? k.__webglSprites.push(b) : b instanceof THREE.LensFlare &&
                    k.__webglFlares.push(b);
                b.__webglActive = !0
            }
            a.__objectsAdded.splice(0, 1)
        }
        for (; a.__objectsRemoved.length;) {
            var Na = a.__objectsRemoved[0],
                la = a;
            Na instanceof THREE.Mesh || Na instanceof THREE.ParticleSystem || Na instanceof THREE.Ribbon || Na instanceof THREE.Line ? z(la.__webglObjects, Na) : Na instanceof THREE.Sprite ? t(la.__webglSprites, Na) : Na instanceof THREE.LensFlare ? t(la.__webglFlares, Na) : (Na instanceof THREE.ImmediateRenderObject || Na.immediateRenderCallback) && z(la.__webglObjectsImmediate, Na);
            Na.__webglActive = !1;
            a.__objectsRemoved.splice(0, 1)
        }
        for (var oa = 0, ra = a.__webglObjects.length; oa < ra; oa++) {
            var ta = a.__webglObjects[oa].object,
                O = ta.geometry,
                mb = void 0,
                qa = void 0,
                ia = void 0;
            if (ta instanceof THREE.Mesh)
                if (O instanceof THREE.BufferGeometry)(O.verticesNeedUpdate || O.elementsNeedUpdate || O.uvsNeedUpdate || O.normalsNeedUpdate || O.colorsNeedUpdate || O.tangentsNeedUpdate) && i(O, j.DYNAMIC_DRAW, !O.dynamic), O.verticesNeedUpdate = !1, O.elementsNeedUpdate = !1, O.uvsNeedUpdate = !1, O.normalsNeedUpdate = !1, O.colorsNeedUpdate = !1, O.tangentsNeedUpdate = !1;
                else {
                    for (var Ca = 0, Ka = O.geometryGroupsList.length; Ca < Ka; Ca++)
                        if (mb = O.geometryGroupsList[Ca], ia = e(ta, mb), O.buffersNeedUpdate && d(mb, ta), qa = ia.attributes && y(ia), O.verticesNeedUpdate || O.morphTargetsNeedUpdate || O.elementsNeedUpdate || O.uvsNeedUpdate || O.normalsNeedUpdate || O.colorsNeedUpdate || O.tangentsNeedUpdate || qa) {
                            var sa = mb,
                                La = ta,
                                Pa = j.DYNAMIC_DRAW,
                                Va = !O.dynamic,
                                Fa = ia;
                            if (sa.__inittedArrays) {
                                var gb = f(Fa),
                                    Wa = Fa.vertexColors ? Fa.vertexColors : !1,
                                    bb = g(Fa),
                                    $a = gb === THREE.SmoothShading,
                                    D = void 0,
                                    V = void 0,
                                    Ra = void 0,
                                    Q = void 0,
                                    ab = void 0,
                                    Xa = void 0,
                                    Sa = void 0,
                                    nb = void 0,
                                    cb = void 0,
                                    pb = void 0,
                                    ub = void 0,
                                    R = void 0,
                                    S = void 0,
                                    T = void 0,
                                    na = void 0,
                                    Mb = void 0,
                                    Nb = void 0,
                                    Ob = void 0,
                                    xb = void 0,
                                    Pb = void 0,
                                    Qb = void 0,
                                    Rb = void 0,
                                    yb = void 0,
                                    Sb = void 0,
                                    Tb = void 0,
                                    Ub = void 0,
                                    zb = void 0,
                                    Vb = void 0,
                                    Wb = void 0,
                                    Xb = void 0,
                                    Ib = void 0,
                                    Yb = void 0,
                                    Zb = void 0,
                                    $b = void 0,
                                    Jb = void 0,
                                    xa = void 0,
                                    fc = void 0,
                                    nc = void 0,
                                    Ab = void 0,
                                    yc = void 0,
                                    db = void 0,
                                    mc = void 0,
                                    Ya = void 0,
                                    Za = void 0,
                                    oc = void 0,
                                    hc = void 0,
                                    Oa = 0,
                                    Ua = 0,
                                    ic = 0,
                                    jc = 0,
                                    Eb = 0,
                                    kb = 0,
                                    Aa = 0,
                                    ob = 0,
                                    Ta = 0,
                                    ba = 0,
                                    ja = 0,
                                    w = 0,
                                    ya = void 0,
                                    eb = sa.__vertexArray,
                                    Dc = sa.__uvArray,
                                    Ec = sa.__uv2Array,
                                    Fb = sa.__normalArray,
                                    Ga = sa.__tangentArray,
                                    fb = sa.__colorArray,
                                    Ha = sa.__skinIndexArray,
                                    Ia = sa.__skinWeightArray,
                                    sc = sa.__morphTargetsArrays,
                                    tc = sa.__morphNormalsArrays,
                                    od = sa.__webglCustomAttributesList,
                                    u = void 0,
                                    ac = sa.__faceArray,
                                    wb = sa.__lineArray,
                                    qb = La.geometry,
                                    Mc = qb.elementsNeedUpdate,
                                    Cc = qb.uvsNeedUpdate,
                                    Nc = qb.normalsNeedUpdate,
                                    Oc = qb.tangentsNeedUpdate,
                                    Pc = qb.colorsNeedUpdate,
                                    fd = qb.morphTargetsNeedUpdate,
                                    uc = qb.vertices,
                                    ua = sa.faces3,
                                    va = sa.faces4,
                                    lb = qb.faces,
                                    pd = qb.faceVertexUvs[0],
                                    qd = qb.faceVertexUvs[1],
                                    vc = qb.skinIndices,
                                    pc = qb.skinWeights,
                                    qc = qb.morphTargets,
                                    Qc = qb.morphNormals;
                                if (qb.verticesNeedUpdate) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], R = uc[Q.a], S = uc[Q.b], T = uc[Q.c], eb[Ua] = R.x, eb[Ua + 1] = R.y, eb[Ua + 2] = R.z, eb[Ua + 3] = S.x, eb[Ua + 4] = S.y, eb[Ua + 5] = S.z, eb[Ua + 6] = T.x, eb[Ua + 7] = T.y, eb[Ua + 8] = T.z, Ua += 9;
                                    D = 0;
                                    for (V = va.length; D < V; D++) Q = lb[va[D]], R = uc[Q.a], S = uc[Q.b], T = uc[Q.c], na = uc[Q.d], eb[Ua] = R.x, eb[Ua + 1] = R.y, eb[Ua + 2] = R.z, eb[Ua + 3] = S.x, eb[Ua + 4] = S.y, eb[Ua + 5] = S.z, eb[Ua + 6] = T.x, eb[Ua + 7] = T.y, eb[Ua +
                                        8] = T.z, eb[Ua + 9] = na.x, eb[Ua + 10] = na.y, eb[Ua + 11] = na.z, Ua += 12;
                                    j.bindBuffer(j.ARRAY_BUFFER, sa.__webglVertexBuffer);
                                    j.bufferData(j.ARRAY_BUFFER, eb, Pa)
                                }
                                if (fd) {
                                    db = 0;
                                    for (mc = qc.length; db < mc; db++) {
                                        D = ja = 0;
                                        for (V = ua.length; D < V; D++) oc = ua[D], Q = lb[oc], R = qc[db].vertices[Q.a], S = qc[db].vertices[Q.b], T = qc[db].vertices[Q.c], Ya = sc[db], Ya[ja] = R.x, Ya[ja + 1] = R.y, Ya[ja + 2] = R.z, Ya[ja + 3] = S.x, Ya[ja + 4] = S.y, Ya[ja + 5] = S.z, Ya[ja + 6] = T.x, Ya[ja + 7] = T.y, Ya[ja + 8] = T.z, Fa.morphNormals && ($a ? (hc = Qc[db].vertexNormals[oc], Pb = hc.a, Qb = hc.b, Rb = hc.c) :
                                            Rb = Qb = Pb = Qc[db].faceNormals[oc], Za = tc[db], Za[ja] = Pb.x, Za[ja + 1] = Pb.y, Za[ja + 2] = Pb.z, Za[ja + 3] = Qb.x, Za[ja + 4] = Qb.y, Za[ja + 5] = Qb.z, Za[ja + 6] = Rb.x, Za[ja + 7] = Rb.y, Za[ja + 8] = Rb.z), ja += 9;
                                        D = 0;
                                        for (V = va.length; D < V; D++) oc = va[D], Q = lb[oc], R = qc[db].vertices[Q.a], S = qc[db].vertices[Q.b], T = qc[db].vertices[Q.c], na = qc[db].vertices[Q.d], Ya = sc[db], Ya[ja] = R.x, Ya[ja + 1] = R.y, Ya[ja + 2] = R.z, Ya[ja + 3] = S.x, Ya[ja + 4] = S.y, Ya[ja + 5] = S.z, Ya[ja + 6] = T.x, Ya[ja + 7] = T.y, Ya[ja + 8] = T.z, Ya[ja + 9] = na.x, Ya[ja + 10] = na.y, Ya[ja + 11] = na.z, Fa.morphNormals && ($a ?
                                            (hc = Qc[db].vertexNormals[oc], Pb = hc.a, Qb = hc.b, Rb = hc.c, yb = hc.d) : yb = Rb = Qb = Pb = Qc[db].faceNormals[oc], Za = tc[db], Za[ja] = Pb.x, Za[ja + 1] = Pb.y, Za[ja + 2] = Pb.z, Za[ja + 3] = Qb.x, Za[ja + 4] = Qb.y, Za[ja + 5] = Qb.z, Za[ja + 6] = Rb.x, Za[ja + 7] = Rb.y, Za[ja + 8] = Rb.z, Za[ja + 9] = yb.x, Za[ja + 10] = yb.y, Za[ja + 11] = yb.z), ja += 12;
                                        j.bindBuffer(j.ARRAY_BUFFER, sa.__webglMorphTargetsBuffers[db]);
                                        j.bufferData(j.ARRAY_BUFFER, sc[db], Pa);
                                        Fa.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, sa.__webglMorphNormalsBuffers[db]), j.bufferData(j.ARRAY_BUFFER, tc[db],
                                            Pa))
                                    }
                                }
                                if (pc.length) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], Vb = pc[Q.a], Wb = pc[Q.b], Xb = pc[Q.c], Ia[ba] = Vb.x, Ia[ba + 1] = Vb.y, Ia[ba + 2] = Vb.z, Ia[ba + 3] = Vb.w, Ia[ba + 4] = Wb.x, Ia[ba + 5] = Wb.y, Ia[ba + 6] = Wb.z, Ia[ba + 7] = Wb.w, Ia[ba + 8] = Xb.x, Ia[ba + 9] = Xb.y, Ia[ba + 10] = Xb.z, Ia[ba + 11] = Xb.w, Yb = vc[Q.a], Zb = vc[Q.b], $b = vc[Q.c], Ha[ba] = Yb.x, Ha[ba + 1] = Yb.y, Ha[ba + 2] = Yb.z, Ha[ba + 3] = Yb.w, Ha[ba + 4] = Zb.x, Ha[ba + 5] = Zb.y, Ha[ba + 6] = Zb.z, Ha[ba + 7] = Zb.w, Ha[ba + 8] = $b.x, Ha[ba + 9] = $b.y, Ha[ba + 10] = $b.z, Ha[ba + 11] = $b.w, ba += 12;
                                    D = 0;
                                    for (V = va.length; D < V; D++) Q = lb[va[D]],
                                        Vb = pc[Q.a], Wb = pc[Q.b], Xb = pc[Q.c], Ib = pc[Q.d], Ia[ba] = Vb.x, Ia[ba + 1] = Vb.y, Ia[ba + 2] = Vb.z, Ia[ba + 3] = Vb.w, Ia[ba + 4] = Wb.x, Ia[ba + 5] = Wb.y, Ia[ba + 6] = Wb.z, Ia[ba + 7] = Wb.w, Ia[ba + 8] = Xb.x, Ia[ba + 9] = Xb.y, Ia[ba + 10] = Xb.z, Ia[ba + 11] = Xb.w, Ia[ba + 12] = Ib.x, Ia[ba + 13] = Ib.y, Ia[ba + 14] = Ib.z, Ia[ba + 15] = Ib.w, Yb = vc[Q.a], Zb = vc[Q.b], $b = vc[Q.c], Jb = vc[Q.d], Ha[ba] = Yb.x, Ha[ba + 1] = Yb.y, Ha[ba + 2] = Yb.z, Ha[ba + 3] = Yb.w, Ha[ba + 4] = Zb.x, Ha[ba + 5] = Zb.y, Ha[ba + 6] = Zb.z, Ha[ba + 7] = Zb.w, Ha[ba + 8] = $b.x, Ha[ba + 9] = $b.y, Ha[ba + 10] = $b.z, Ha[ba + 11] = $b.w, Ha[ba + 12] = Jb.x, Ha[ba +
                                            13] = Jb.y, Ha[ba + 14] = Jb.z, Ha[ba + 15] = Jb.w, ba += 16;
                                    0 < ba && (j.bindBuffer(j.ARRAY_BUFFER, sa.__webglSkinIndicesBuffer), j.bufferData(j.ARRAY_BUFFER, Ha, Pa), j.bindBuffer(j.ARRAY_BUFFER, sa.__webglSkinWeightsBuffer), j.bufferData(j.ARRAY_BUFFER, Ia, Pa))
                                }
                                if (Pc && Wa) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], Sa = Q.vertexColors, nb = Q.color, 3 === Sa.length && Wa === THREE.VertexColors ? (Sb = Sa[0], Tb = Sa[1], Ub = Sa[2]) : Ub = Tb = Sb = nb, fb[Ta] = Sb.r, fb[Ta + 1] = Sb.g, fb[Ta + 2] = Sb.b, fb[Ta + 3] = Tb.r, fb[Ta + 4] = Tb.g, fb[Ta + 5] = Tb.b, fb[Ta + 6] = Ub.r, fb[Ta + 7] =
                                        Ub.g, fb[Ta + 8] = Ub.b, Ta += 9;
                                    D = 0;
                                    for (V = va.length; D < V; D++) Q = lb[va[D]], Sa = Q.vertexColors, nb = Q.color, 4 === Sa.length && Wa === THREE.VertexColors ? (Sb = Sa[0], Tb = Sa[1], Ub = Sa[2], zb = Sa[3]) : zb = Ub = Tb = Sb = nb, fb[Ta] = Sb.r, fb[Ta + 1] = Sb.g, fb[Ta + 2] = Sb.b, fb[Ta + 3] = Tb.r, fb[Ta + 4] = Tb.g, fb[Ta + 5] = Tb.b, fb[Ta + 6] = Ub.r, fb[Ta + 7] = Ub.g, fb[Ta + 8] = Ub.b, fb[Ta + 9] = zb.r, fb[Ta + 10] = zb.g, fb[Ta + 11] = zb.b, Ta += 12;
                                    0 < Ta && (j.bindBuffer(j.ARRAY_BUFFER, sa.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, fb, Pa))
                                }
                                if (Oc && qb.hasTangents) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++) Q =
                                        lb[ua[D]], cb = Q.vertexTangents, Mb = cb[0], Nb = cb[1], Ob = cb[2], Ga[Aa] = Mb.x, Ga[Aa + 1] = Mb.y, Ga[Aa + 2] = Mb.z, Ga[Aa + 3] = Mb.w, Ga[Aa + 4] = Nb.x, Ga[Aa + 5] = Nb.y, Ga[Aa + 6] = Nb.z, Ga[Aa + 7] = Nb.w, Ga[Aa + 8] = Ob.x, Ga[Aa + 9] = Ob.y, Ga[Aa + 10] = Ob.z, Ga[Aa + 11] = Ob.w, Aa += 12;
                                    D = 0;
                                    for (V = va.length; D < V; D++) Q = lb[va[D]], cb = Q.vertexTangents, Mb = cb[0], Nb = cb[1], Ob = cb[2], xb = cb[3], Ga[Aa] = Mb.x, Ga[Aa + 1] = Mb.y, Ga[Aa + 2] = Mb.z, Ga[Aa + 3] = Mb.w, Ga[Aa + 4] = Nb.x, Ga[Aa + 5] = Nb.y, Ga[Aa + 6] = Nb.z, Ga[Aa + 7] = Nb.w, Ga[Aa + 8] = Ob.x, Ga[Aa + 9] = Ob.y, Ga[Aa + 10] = Ob.z, Ga[Aa + 11] = Ob.w, Ga[Aa +
                                        12] = xb.x, Ga[Aa + 13] = xb.y, Ga[Aa + 14] = xb.z, Ga[Aa + 15] = xb.w, Aa += 16;
                                    j.bindBuffer(j.ARRAY_BUFFER, sa.__webglTangentBuffer);
                                    j.bufferData(j.ARRAY_BUFFER, Ga, Pa)
                                }
                                if (Nc && gb) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++)
                                        if (Q = lb[ua[D]], ab = Q.vertexNormals, Xa = Q.normal, 3 === ab.length && $a)
                                            for (xa = 0; 3 > xa; xa++) nc = ab[xa], Fb[kb] = nc.x, Fb[kb + 1] = nc.y, Fb[kb + 2] = nc.z, kb += 3;
                                        else
                                            for (xa = 0; 3 > xa; xa++) Fb[kb] = Xa.x, Fb[kb + 1] = Xa.y, Fb[kb + 2] = Xa.z, kb += 3;
                                    D = 0;
                                    for (V = va.length; D < V; D++)
                                        if (Q = lb[va[D]], ab = Q.vertexNormals, Xa = Q.normal, 4 === ab.length && $a)
                                            for (xa = 0; 4 > xa; xa++) nc =
                                                ab[xa], Fb[kb] = nc.x, Fb[kb + 1] = nc.y, Fb[kb + 2] = nc.z, kb += 3;
                                        else
                                            for (xa = 0; 4 > xa; xa++) Fb[kb] = Xa.x, Fb[kb + 1] = Xa.y, Fb[kb + 2] = Xa.z, kb += 3;
                                    j.bindBuffer(j.ARRAY_BUFFER, sa.__webglNormalBuffer);
                                    j.bufferData(j.ARRAY_BUFFER, Fb, Pa)
                                }
                                if (Cc && pd && bb) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++)
                                        if (Ra = ua[D], pb = pd[Ra], void 0 !== pb)
                                            for (xa = 0; 3 > xa; xa++) Ab = pb[xa], Dc[ic] = Ab.x, Dc[ic + 1] = Ab.y, ic += 2;
                                    D = 0;
                                    for (V = va.length; D < V; D++)
                                        if (Ra = va[D], pb = pd[Ra], void 0 !== pb)
                                            for (xa = 0; 4 > xa; xa++) Ab = pb[xa], Dc[ic] = Ab.x, Dc[ic + 1] = Ab.y, ic += 2;
                                    0 < ic && (j.bindBuffer(j.ARRAY_BUFFER,
                                        sa.__webglUVBuffer), j.bufferData(j.ARRAY_BUFFER, Dc, Pa))
                                }
                                if (Cc && qd && bb) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++)
                                        if (Ra = ua[D], ub = qd[Ra], void 0 !== ub)
                                            for (xa = 0; 3 > xa; xa++) yc = ub[xa], Ec[jc] = yc.x, Ec[jc + 1] = yc.y, jc += 2;
                                    D = 0;
                                    for (V = va.length; D < V; D++)
                                        if (Ra = va[D], ub = qd[Ra], void 0 !== ub)
                                            for (xa = 0; 4 > xa; xa++) yc = ub[xa], Ec[jc] = yc.x, Ec[jc + 1] = yc.y, jc += 2;
                                    0 < jc && (j.bindBuffer(j.ARRAY_BUFFER, sa.__webglUV2Buffer), j.bufferData(j.ARRAY_BUFFER, Ec, Pa))
                                }
                                if (Mc) {
                                    D = 0;
                                    for (V = ua.length; D < V; D++) ac[Eb] = Oa, ac[Eb + 1] = Oa + 1, ac[Eb + 2] = Oa + 2, Eb += 3, wb[ob] = Oa, wb[ob +
                                        1] = Oa + 1, wb[ob + 2] = Oa, wb[ob + 3] = Oa + 2, wb[ob + 4] = Oa + 1, wb[ob + 5] = Oa + 2, ob += 6, Oa += 3;
                                    D = 0;
                                    for (V = va.length; D < V; D++) ac[Eb] = Oa, ac[Eb + 1] = Oa + 1, ac[Eb + 2] = Oa + 3, ac[Eb + 3] = Oa + 1, ac[Eb + 4] = Oa + 2, ac[Eb + 5] = Oa + 3, Eb += 6, wb[ob] = Oa, wb[ob + 1] = Oa + 1, wb[ob + 2] = Oa, wb[ob + 3] = Oa + 3, wb[ob + 4] = Oa + 1, wb[ob + 5] = Oa + 2, wb[ob + 6] = Oa + 2, wb[ob + 7] = Oa + 3, ob += 8, Oa += 4;
                                    j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, sa.__webglFaceBuffer);
                                    j.bufferData(j.ELEMENT_ARRAY_BUFFER, ac, Pa);
                                    j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, sa.__webglLineBuffer);
                                    j.bufferData(j.ELEMENT_ARRAY_BUFFER,
                                        wb, Pa)
                                }
                                if (od) {
                                    xa = 0;
                                    for (fc = od.length; xa < fc; xa++)
                                        if (u = od[xa], u.__original.needsUpdate) {
                                            w = 0;
                                            if (1 === u.size)
                                                if (void 0 === u.boundTo || "vertices" === u.boundTo) {
                                                    D = 0;
                                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], u.array[w] = u.value[Q.a], u.array[w + 1] = u.value[Q.b], u.array[w + 2] = u.value[Q.c], w += 3;
                                                    D = 0;
                                                    for (V = va.length; D < V; D++) Q = lb[va[D]], u.array[w] = u.value[Q.a], u.array[w + 1] = u.value[Q.b], u.array[w + 2] = u.value[Q.c], u.array[w + 3] = u.value[Q.d], w += 4
                                                } else {
                                                    if ("faces" === u.boundTo) {
                                                        D = 0;
                                                        for (V = ua.length; D < V; D++) ya = u.value[ua[D]], u.array[w] =
                                                            ya, u.array[w + 1] = ya, u.array[w + 2] = ya, w += 3;
                                                        D = 0;
                                                        for (V = va.length; D < V; D++) ya = u.value[va[D]], u.array[w] = ya, u.array[w + 1] = ya, u.array[w + 2] = ya, u.array[w + 3] = ya, w += 4
                                                    }
                                                }
                                            else if (2 === u.size)
                                                if (void 0 === u.boundTo || "vertices" === u.boundTo) {
                                                    D = 0;
                                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], R = u.value[Q.a], S = u.value[Q.b], T = u.value[Q.c], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = S.x, u.array[w + 3] = S.y, u.array[w + 4] = T.x, u.array[w + 5] = T.y, w += 6;
                                                    D = 0;
                                                    for (V = va.length; D < V; D++) Q = lb[va[D]], R = u.value[Q.a], S = u.value[Q.b], T = u.value[Q.c], na = u.value[Q.d],
                                                        u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = S.x, u.array[w + 3] = S.y, u.array[w + 4] = T.x, u.array[w + 5] = T.y, u.array[w + 6] = na.x, u.array[w + 7] = na.y, w += 8
                                                } else {
                                                    if ("faces" === u.boundTo) {
                                                        D = 0;
                                                        for (V = ua.length; D < V; D++) T = S = R = ya = u.value[ua[D]], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = S.x, u.array[w + 3] = S.y, u.array[w + 4] = T.x, u.array[w + 5] = T.y, w += 6;
                                                        D = 0;
                                                        for (V = va.length; D < V; D++) na = T = S = R = ya = u.value[va[D]], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = S.x, u.array[w + 3] = S.y, u.array[w + 4] = T.x, u.array[w + 5] = T.y, u.array[w + 6] = na.x, u.array[w +
                                                            7] = na.y, w += 8
                                                    }
                                                }
                                            else if (3 === u.size) {
                                                var $;
                                                $ = "c" === u.type ? ["r", "g", "b"] : ["x", "y", "z"];
                                                if (void 0 === u.boundTo || "vertices" === u.boundTo) {
                                                    D = 0;
                                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], R = u.value[Q.a], S = u.value[Q.b], T = u.value[Q.c], u.array[w] = R[$[0]], u.array[w + 1] = R[$[1]], u.array[w + 2] = R[$[2]], u.array[w + 3] = S[$[0]], u.array[w + 4] = S[$[1]], u.array[w + 5] = S[$[2]], u.array[w + 6] = T[$[0]], u.array[w + 7] = T[$[1]], u.array[w + 8] = T[$[2]], w += 9;
                                                    D = 0;
                                                    for (V = va.length; D < V; D++) Q = lb[va[D]], R = u.value[Q.a], S = u.value[Q.b], T = u.value[Q.c], na = u.value[Q.d],
                                                        u.array[w] = R[$[0]], u.array[w + 1] = R[$[1]], u.array[w + 2] = R[$[2]], u.array[w + 3] = S[$[0]], u.array[w + 4] = S[$[1]], u.array[w + 5] = S[$[2]], u.array[w + 6] = T[$[0]], u.array[w + 7] = T[$[1]], u.array[w + 8] = T[$[2]], u.array[w + 9] = na[$[0]], u.array[w + 10] = na[$[1]], u.array[w + 11] = na[$[2]], w += 12
                                                } else if ("faces" === u.boundTo) {
                                                    D = 0;
                                                    for (V = ua.length; D < V; D++) T = S = R = ya = u.value[ua[D]], u.array[w] = R[$[0]], u.array[w + 1] = R[$[1]], u.array[w + 2] = R[$[2]], u.array[w + 3] = S[$[0]], u.array[w + 4] = S[$[1]], u.array[w + 5] = S[$[2]], u.array[w + 6] = T[$[0]], u.array[w + 7] = T[$[1]],
                                                        u.array[w + 8] = T[$[2]], w += 9;
                                                    D = 0;
                                                    for (V = va.length; D < V; D++) na = T = S = R = ya = u.value[va[D]], u.array[w] = R[$[0]], u.array[w + 1] = R[$[1]], u.array[w + 2] = R[$[2]], u.array[w + 3] = S[$[0]], u.array[w + 4] = S[$[1]], u.array[w + 5] = S[$[2]], u.array[w + 6] = T[$[0]], u.array[w + 7] = T[$[1]], u.array[w + 8] = T[$[2]], u.array[w + 9] = na[$[0]], u.array[w + 10] = na[$[1]], u.array[w + 11] = na[$[2]], w += 12
                                                } else if ("faceVertices" === u.boundTo) {
                                                    D = 0;
                                                    for (V = ua.length; D < V; D++) ya = u.value[ua[D]], R = ya[0], S = ya[1], T = ya[2], u.array[w] = R[$[0]], u.array[w + 1] = R[$[1]], u.array[w + 2] =
                                                        R[$[2]], u.array[w + 3] = S[$[0]], u.array[w + 4] = S[$[1]], u.array[w + 5] = S[$[2]], u.array[w + 6] = T[$[0]], u.array[w + 7] = T[$[1]], u.array[w + 8] = T[$[2]], w += 9;
                                                    D = 0;
                                                    for (V = va.length; D < V; D++) ya = u.value[va[D]], R = ya[0], S = ya[1], T = ya[2], na = ya[3], u.array[w] = R[$[0]], u.array[w + 1] = R[$[1]], u.array[w + 2] = R[$[2]], u.array[w + 3] = S[$[0]], u.array[w + 4] = S[$[1]], u.array[w + 5] = S[$[2]], u.array[w + 6] = T[$[0]], u.array[w + 7] = T[$[1]], u.array[w + 8] = T[$[2]], u.array[w + 9] = na[$[0]], u.array[w + 10] = na[$[1]], u.array[w + 11] = na[$[2]], w += 12
                                                }
                                            } else if (4 === u.size)
                                                if (void 0 ===
                                                    u.boundTo || "vertices" === u.boundTo) {
                                                    D = 0;
                                                    for (V = ua.length; D < V; D++) Q = lb[ua[D]], R = u.value[Q.a], S = u.value[Q.b], T = u.value[Q.c], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = R.z, u.array[w + 3] = R.w, u.array[w + 4] = S.x, u.array[w + 5] = S.y, u.array[w + 6] = S.z, u.array[w + 7] = S.w, u.array[w + 8] = T.x, u.array[w + 9] = T.y, u.array[w + 10] = T.z, u.array[w + 11] = T.w, w += 12;
                                                    D = 0;
                                                    for (V = va.length; D < V; D++) Q = lb[va[D]], R = u.value[Q.a], S = u.value[Q.b], T = u.value[Q.c], na = u.value[Q.d], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = R.z, u.array[w + 3] = R.w, u.array[w +
                                                        4] = S.x, u.array[w + 5] = S.y, u.array[w + 6] = S.z, u.array[w + 7] = S.w, u.array[w + 8] = T.x, u.array[w + 9] = T.y, u.array[w + 10] = T.z, u.array[w + 11] = T.w, u.array[w + 12] = na.x, u.array[w + 13] = na.y, u.array[w + 14] = na.z, u.array[w + 15] = na.w, w += 16
                                                } else if ("faces" === u.boundTo) {
                                                D = 0;
                                                for (V = ua.length; D < V; D++) T = S = R = ya = u.value[ua[D]], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = R.z, u.array[w + 3] = R.w, u.array[w + 4] = S.x, u.array[w + 5] = S.y, u.array[w + 6] = S.z, u.array[w + 7] = S.w, u.array[w + 8] = T.x, u.array[w + 9] = T.y, u.array[w + 10] = T.z, u.array[w + 11] = T.w, w += 12;
                                                D = 0;
                                                for (V = va.length; D < V; D++) na = T = S = R = ya = u.value[va[D]], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = R.z, u.array[w + 3] = R.w, u.array[w + 4] = S.x, u.array[w + 5] = S.y, u.array[w + 6] = S.z, u.array[w + 7] = S.w, u.array[w + 8] = T.x, u.array[w + 9] = T.y, u.array[w + 10] = T.z, u.array[w + 11] = T.w, u.array[w + 12] = na.x, u.array[w + 13] = na.y, u.array[w + 14] = na.z, u.array[w + 15] = na.w, w += 16
                                            } else if ("faceVertices" === u.boundTo) {
                                                D = 0;
                                                for (V = ua.length; D < V; D++) ya = u.value[ua[D]], R = ya[0], S = ya[1], T = ya[2], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = R.z, u.array[w +
                                                    3] = R.w, u.array[w + 4] = S.x, u.array[w + 5] = S.y, u.array[w + 6] = S.z, u.array[w + 7] = S.w, u.array[w + 8] = T.x, u.array[w + 9] = T.y, u.array[w + 10] = T.z, u.array[w + 11] = T.w, w += 12;
                                                D = 0;
                                                for (V = va.length; D < V; D++) ya = u.value[va[D]], R = ya[0], S = ya[1], T = ya[2], na = ya[3], u.array[w] = R.x, u.array[w + 1] = R.y, u.array[w + 2] = R.z, u.array[w + 3] = R.w, u.array[w + 4] = S.x, u.array[w + 5] = S.y, u.array[w + 6] = S.z, u.array[w + 7] = S.w, u.array[w + 8] = T.x, u.array[w + 9] = T.y, u.array[w + 10] = T.z, u.array[w + 11] = T.w, u.array[w + 12] = na.x, u.array[w + 13] = na.y, u.array[w + 14] = na.z, u.array[w +
                                                    15] = na.w, w += 16
                                            }
                                            j.bindBuffer(j.ARRAY_BUFFER, u.buffer);
                                            j.bufferData(j.ARRAY_BUFFER, u.array, Pa)
                                        }
                                }
                                Va && (delete sa.__inittedArrays, delete sa.__colorArray, delete sa.__normalArray, delete sa.__tangentArray, delete sa.__uvArray, delete sa.__uv2Array, delete sa.__faceArray, delete sa.__vertexArray, delete sa.__lineArray, delete sa.__skinIndexArray, delete sa.__skinWeightArray)
                            }
                        } O.verticesNeedUpdate = !1;
                    O.morphTargetsNeedUpdate = !1;
                    O.elementsNeedUpdate = !1;
                    O.uvsNeedUpdate = !1;
                    O.normalsNeedUpdate = !1;
                    O.colorsNeedUpdate = !1;
                    O.tangentsNeedUpdate = !1;
                    O.buffersNeedUpdate = !1;
                    ia.attributes && v(ia)
                }
            else if (ta instanceof THREE.Ribbon) {
                ia = e(ta, O);
                qa = ia.attributes && y(ia);
                if (O.verticesNeedUpdate || O.colorsNeedUpdate || O.normalsNeedUpdate || qa) {
                    var Gb = O,
                        Rc = j.DYNAMIC_DRAW,
                        Fc = void 0,
                        Gc = void 0,
                        Hc = void 0,
                        Sc = void 0,
                        za = void 0,
                        Tc = void 0,
                        Uc = void 0,
                        Vc = void 0,
                        xd = void 0,
                        ib = void 0,
                        zc = void 0,
                        Da = void 0,
                        rb = void 0,
                        yd = Gb.vertices,
                        zd = Gb.colors,
                        Ad = Gb.normals,
                        gd = yd.length,
                        hd = zd.length,
                        id = Ad.length,
                        Wc = Gb.__vertexArray,
                        Xc = Gb.__colorArray,
                        Yc = Gb.__normalArray,
                        jd = Gb.colorsNeedUpdate,
                        kd = Gb.normalsNeedUpdate,
                        rd = Gb.__webglCustomAttributesList;
                    if (Gb.verticesNeedUpdate) {
                        for (Fc = 0; Fc < gd; Fc++) Sc = yd[Fc], za = 3 * Fc, Wc[za] = Sc.x, Wc[za + 1] = Sc.y, Wc[za + 2] = Sc.z;
                        j.bindBuffer(j.ARRAY_BUFFER, Gb.__webglVertexBuffer);
                        j.bufferData(j.ARRAY_BUFFER, Wc, Rc)
                    }
                    if (jd) {
                        for (Gc = 0; Gc < hd; Gc++) Tc = zd[Gc], za = 3 * Gc, Xc[za] = Tc.r, Xc[za + 1] = Tc.g, Xc[za + 2] = Tc.b;
                        j.bindBuffer(j.ARRAY_BUFFER, Gb.__webglColorBuffer);
                        j.bufferData(j.ARRAY_BUFFER, Xc, Rc)
                    }
                    if (kd) {
                        for (Hc = 0; Hc < id; Hc++) Uc = Ad[Hc], za = 3 * Hc, Yc[za] = Uc.x, Yc[za +
                            1] = Uc.y, Yc[za + 2] = Uc.z;
                        j.bindBuffer(j.ARRAY_BUFFER, Gb.__webglNormalBuffer);
                        j.bufferData(j.ARRAY_BUFFER, Yc, Rc)
                    }
                    if (rd) {
                        Vc = 0;
                        for (xd = rd.length; Vc < xd; Vc++)
                            if (Da = rd[Vc], Da.needsUpdate && (void 0 === Da.boundTo || "vertices" === Da.boundTo)) {
                                za = 0;
                                zc = Da.value.length;
                                if (1 === Da.size)
                                    for (ib = 0; ib < zc; ib++) Da.array[ib] = Da.value[ib];
                                else if (2 === Da.size)
                                    for (ib = 0; ib < zc; ib++) rb = Da.value[ib], Da.array[za] = rb.x, Da.array[za + 1] = rb.y, za += 2;
                                else if (3 === Da.size)
                                    if ("c" === Da.type)
                                        for (ib = 0; ib < zc; ib++) rb = Da.value[ib], Da.array[za] = rb.r,
                                            Da.array[za + 1] = rb.g, Da.array[za + 2] = rb.b, za += 3;
                                    else
                                        for (ib = 0; ib < zc; ib++) rb = Da.value[ib], Da.array[za] = rb.x, Da.array[za + 1] = rb.y, Da.array[za + 2] = rb.z, za += 3;
                                else if (4 === Da.size)
                                    for (ib = 0; ib < zc; ib++) rb = Da.value[ib], Da.array[za] = rb.x, Da.array[za + 1] = rb.y, Da.array[za + 2] = rb.z, Da.array[za + 3] = rb.w, za += 4;
                                j.bindBuffer(j.ARRAY_BUFFER, Da.buffer);
                                j.bufferData(j.ARRAY_BUFFER, Da.array, Rc)
                            }
                    }
                }
                O.verticesNeedUpdate = !1;
                O.colorsNeedUpdate = !1;
                O.normalsNeedUpdate = !1;
                ia.attributes && v(ia)
            } else if (ta instanceof THREE.Line)
                if (O instanceof THREE.BufferGeometry)(O.verticesNeedUpdate || O.colorsNeedUpdate) && i(O, j.DYNAMIC_DRAW, !O.dynamic), O.verticesNeedUpdate = !1, O.colorsNeedUpdate = !1;
                else {
                    ia = e(ta, O);
                    qa = ia.attributes && y(ia);
                    if (O.verticesNeedUpdate || O.colorsNeedUpdate || O.lineDistancesNeedUpdate || qa) {
                        var Hb = O,
                            Zc = j.DYNAMIC_DRAW,
                            Ic = void 0,
                            Jc = void 0,
                            Kc = void 0,
                            $c = void 0,
                            Ja = void 0,
                            ad = void 0,
                            Bd = Hb.vertices,
                            Cd = Hb.colors,
                            Dd = Hb.lineDistances,
                            ld = Bd.length,
                            Jd = Cd.length,
                            Kd = Dd.length,
                            bd = Hb.__vertexArray,
                            cd = Hb.__colorArray,
                            Ed = Hb.__lineDistanceArray,
                            Ld = Hb.colorsNeedUpdate,
                            Md = Hb.lineDistancesNeedUpdate,
                            sd = Hb.__webglCustomAttributesList,
                            dd = void 0,
                            Fd = void 0,
                            jb = void 0,
                            Ac = void 0,
                            sb = void 0,
                            Ea = void 0;
                        if (Hb.verticesNeedUpdate) {
                            for (Ic = 0; Ic < ld; Ic++) $c = Bd[Ic], Ja = 3 * Ic, bd[Ja] = $c.x, bd[Ja + 1] = $c.y, bd[Ja + 2] = $c.z;
                            j.bindBuffer(j.ARRAY_BUFFER, Hb.__webglVertexBuffer);
                            j.bufferData(j.ARRAY_BUFFER, bd, Zc)
                        }
                        if (Ld) {
                            for (Jc = 0; Jc < Jd; Jc++) ad = Cd[Jc], Ja = 3 * Jc, cd[Ja] = ad.r, cd[Ja + 1] = ad.g, cd[Ja + 2] = ad.b;
                            j.bindBuffer(j.ARRAY_BUFFER, Hb.__webglColorBuffer);
                            j.bufferData(j.ARRAY_BUFFER, cd, Zc)
                        }
                        if (Md) {
                            for (Kc = 0; Kc <
                                Kd; Kc++) Ed[Kc] = Dd[Kc];
                            j.bindBuffer(j.ARRAY_BUFFER, Hb.__webglLineDistanceBuffer);
                            j.bufferData(j.ARRAY_BUFFER, Ed, Zc)
                        }
                        if (sd) {
                            dd = 0;
                            for (Fd = sd.length; dd < Fd; dd++)
                                if (Ea = sd[dd], Ea.needsUpdate && (void 0 === Ea.boundTo || "vertices" === Ea.boundTo)) {
                                    Ja = 0;
                                    Ac = Ea.value.length;
                                    if (1 === Ea.size)
                                        for (jb = 0; jb < Ac; jb++) Ea.array[jb] = Ea.value[jb];
                                    else if (2 === Ea.size)
                                        for (jb = 0; jb < Ac; jb++) sb = Ea.value[jb], Ea.array[Ja] = sb.x, Ea.array[Ja + 1] = sb.y, Ja += 2;
                                    else if (3 === Ea.size)
                                        if ("c" === Ea.type)
                                            for (jb = 0; jb < Ac; jb++) sb = Ea.value[jb], Ea.array[Ja] =
                                                sb.r, Ea.array[Ja + 1] = sb.g, Ea.array[Ja + 2] = sb.b, Ja += 3;
                                        else
                                            for (jb = 0; jb < Ac; jb++) sb = Ea.value[jb], Ea.array[Ja] = sb.x, Ea.array[Ja + 1] = sb.y, Ea.array[Ja + 2] = sb.z, Ja += 3;
                                    else if (4 === Ea.size)
                                        for (jb = 0; jb < Ac; jb++) sb = Ea.value[jb], Ea.array[Ja] = sb.x, Ea.array[Ja + 1] = sb.y, Ea.array[Ja + 2] = sb.z, Ea.array[Ja + 3] = sb.w, Ja += 4;
                                    j.bindBuffer(j.ARRAY_BUFFER, Ea.buffer);
                                    j.bufferData(j.ARRAY_BUFFER, Ea.array, Zc)
                                }
                        }
                    }
                    O.verticesNeedUpdate = !1;
                    O.colorsNeedUpdate = !1;
                    O.lineDistancesNeedUpdate = !1;
                    ia.attributes && v(ia)
                }
            else if (ta instanceof THREE.ParticleSystem)
                if (O instanceof THREE.BufferGeometry)(O.verticesNeedUpdate || O.colorsNeedUpdate) && i(O, j.DYNAMIC_DRAW, !O.dynamic), O.verticesNeedUpdate = !1, O.colorsNeedUpdate = !1;
                else {
                    ia = e(ta, O);
                    qa = ia.attributes && y(ia);
                    if (O.verticesNeedUpdate || O.colorsNeedUpdate || ta.sortParticles || qa) {
                        var bc = O,
                            td = j.DYNAMIC_DRAW,
                            Lc = ta,
                            tb = void 0,
                            cc = void 0,
                            dc = void 0,
                            ga = void 0,
                            ec = void 0,
                            rc = void 0,
                            ed = bc.vertices,
                            ud = ed.length,
                            vd = bc.colors,
                            Gd = vd.length,
                            wc = bc.__vertexArray,
                            xc = bc.__colorArray,
                            kc = bc.__sortArray,
                            Hd = bc.verticesNeedUpdate,
                            Id = bc.colorsNeedUpdate,
                            lc = bc.__webglCustomAttributesList,
                            Kb = void 0,
                            Bc = void 0,
                            ma = void 0,
                            Lb = void 0,
                            Ba = void 0,
                            ea = void 0;
                        if (Lc.sortParticles) {
                            vb.copy(gc);
                            vb.multiply(Lc.matrixWorld);
                            for (tb = 0; tb < ud; tb++) dc = ed[tb], Qa.copy(dc), Qa.applyProjection(vb), kc[tb] = [Qa.z, tb];
                            kc.sort(n);
                            for (tb = 0; tb < ud; tb++) dc = ed[kc[tb][1]], ga = 3 * tb, wc[ga] = dc.x, wc[ga + 1] = dc.y, wc[ga + 2] = dc.z;
                            for (cc = 0; cc < Gd; cc++) ga = 3 * cc, rc = vd[kc[cc][1]], xc[ga] = rc.r, xc[ga + 1] = rc.g, xc[ga + 2] = rc.b;
                            if (lc) {
                                Kb = 0;
                                for (Bc = lc.length; Kb < Bc; Kb++)
                                    if (ea = lc[Kb], void 0 === ea.boundTo || "vertices" ===
                                        ea.boundTo)
                                        if (ga = 0, Lb = ea.value.length, 1 === ea.size)
                                            for (ma = 0; ma < Lb; ma++) ec = kc[ma][1], ea.array[ma] = ea.value[ec];
                                        else if (2 === ea.size)
                                    for (ma = 0; ma < Lb; ma++) ec = kc[ma][1], Ba = ea.value[ec], ea.array[ga] = Ba.x, ea.array[ga + 1] = Ba.y, ga += 2;
                                else if (3 === ea.size)
                                    if ("c" === ea.type)
                                        for (ma = 0; ma < Lb; ma++) ec = kc[ma][1], Ba = ea.value[ec], ea.array[ga] = Ba.r, ea.array[ga + 1] = Ba.g, ea.array[ga + 2] = Ba.b, ga += 3;
                                    else
                                        for (ma = 0; ma < Lb; ma++) ec = kc[ma][1], Ba = ea.value[ec], ea.array[ga] = Ba.x, ea.array[ga + 1] = Ba.y, ea.array[ga + 2] = Ba.z, ga += 3;
                                else if (4 ===
                                    ea.size)
                                    for (ma = 0; ma < Lb; ma++) ec = kc[ma][1], Ba = ea.value[ec], ea.array[ga] = Ba.x, ea.array[ga + 1] = Ba.y, ea.array[ga + 2] = Ba.z, ea.array[ga + 3] = Ba.w, ga += 4
                            }
                        } else {
                            if (Hd)
                                for (tb = 0; tb < ud; tb++) dc = ed[tb], ga = 3 * tb, wc[ga] = dc.x, wc[ga + 1] = dc.y, wc[ga + 2] = dc.z;
                            if (Id)
                                for (cc = 0; cc < Gd; cc++) rc = vd[cc], ga = 3 * cc, xc[ga] = rc.r, xc[ga + 1] = rc.g, xc[ga + 2] = rc.b;
                            if (lc) {
                                Kb = 0;
                                for (Bc = lc.length; Kb < Bc; Kb++)
                                    if (ea = lc[Kb], ea.needsUpdate && (void 0 === ea.boundTo || "vertices" === ea.boundTo))
                                        if (Lb = ea.value.length, ga = 0, 1 === ea.size)
                                            for (ma = 0; ma < Lb; ma++) ea.array[ma] =
                                                ea.value[ma];
                                        else if (2 === ea.size)
                                    for (ma = 0; ma < Lb; ma++) Ba = ea.value[ma], ea.array[ga] = Ba.x, ea.array[ga + 1] = Ba.y, ga += 2;
                                else if (3 === ea.size)
                                    if ("c" === ea.type)
                                        for (ma = 0; ma < Lb; ma++) Ba = ea.value[ma], ea.array[ga] = Ba.r, ea.array[ga + 1] = Ba.g, ea.array[ga + 2] = Ba.b, ga += 3;
                                    else
                                        for (ma = 0; ma < Lb; ma++) Ba = ea.value[ma], ea.array[ga] = Ba.x, ea.array[ga + 1] = Ba.y, ea.array[ga + 2] = Ba.z, ga += 3;
                                else if (4 === ea.size)
                                    for (ma = 0; ma < Lb; ma++) Ba = ea.value[ma], ea.array[ga] = Ba.x, ea.array[ga + 1] = Ba.y, ea.array[ga + 2] = Ba.z, ea.array[ga + 3] = Ba.w, ga += 4
                            }
                        }
                        if (Hd ||
                            Lc.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, bc.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, wc, td);
                        if (Id || Lc.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, bc.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, xc, td);
                        if (lc) {
                            Kb = 0;
                            for (Bc = lc.length; Kb < Bc; Kb++)
                                if (ea = lc[Kb], ea.needsUpdate || Lc.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, ea.buffer), j.bufferData(j.ARRAY_BUFFER, ea.array, td)
                        }
                    }
                    O.verticesNeedUpdate = !1;
                    O.colorsNeedUpdate = !1;
                    ia.attributes && v(ia)
                }
        }
    };
    this.initMaterial = function(a, b, c, d) {
        var e, f, g, i;
        a.addEventListener("dispose",
            X);
        var h, k, m, n, l;
        a instanceof THREE.MeshDepthMaterial ? l = "depth" : a instanceof THREE.MeshNormalMaterial ? l = "normal" : a instanceof THREE.MeshBasicMaterial ? l = "basic" : a instanceof THREE.MeshLambertMaterial ? l = "lambert" : a instanceof THREE.MeshPhongMaterial ? l = "phong" : a instanceof THREE.LineBasicMaterial ? l = "basic" : a instanceof THREE.LineDashedMaterial ? l = "dashed" : a instanceof THREE.ParticleBasicMaterial && (l = "particle_basic");
        if (l) {
            var p = THREE.ShaderLib[l];
            a.uniforms = THREE.UniformsUtils.clone(p.uniforms);
            a.vertexShader =
                p.vertexShader;
            a.fragmentShader = p.fragmentShader
        }
        var q, s, r;
        e = g = s = r = p = 0;
        for (f = b.length; e < f; e++) q = b[e], q.onlyShadow || (q instanceof THREE.DirectionalLight && g++, q instanceof THREE.PointLight && s++, q instanceof THREE.SpotLight && r++, q instanceof THREE.HemisphereLight && p++);
        e = g;
        f = s;
        g = r;
        i = p;
        p = q = 0;
        for (r = b.length; p < r; p++) s = b[p], s.castShadow && (s instanceof THREE.SpotLight && q++, s instanceof THREE.DirectionalLight && !s.shadowCascade && q++);
        n = q;
        tc && d && d.useVertexTexture ? m = 1024 : (b = j.getParameter(j.MAX_VERTEX_UNIFORM_VECTORS),
            b = Math.floor((b - 20) / 4), void 0 !== d && d instanceof THREE.SkinnedMesh && (b = Math.min(d.bones.length, b), b < d.bones.length && console.warn("WebGLRenderer: too many bones - " + d.bones.length + ", this GPU supports just " + b + " (try OpenGL instead of ANGLE)")), m = b);
        a: {
            s = a.fragmentShader;r = a.vertexShader;p = a.uniforms;b = a.attributes;q = a.defines;
            var c = {
                    map: !!a.map,
                    envMap: !!a.envMap,
                    lightMap: !!a.lightMap,
                    bumpMap: !!a.bumpMap,
                    normalMap: !!a.normalMap,
                    specularMap: !!a.specularMap,
                    vertexColors: a.vertexColors,
                    fog: c,
                    useFog: a.fog,
                    fogExp: c instanceof THREE.FogExp2,
                    sizeAttenuation: a.sizeAttenuation,
                    skinning: a.skinning,
                    maxBones: m,
                    useVertexTexture: tc && d && d.useVertexTexture,
                    boneTextureWidth: d && d.boneTextureWidth,
                    boneTextureHeight: d && d.boneTextureHeight,
                    morphTargets: a.morphTargets,
                    morphNormals: a.morphNormals,
                    maxMorphTargets: this.maxMorphTargets,
                    maxMorphNormals: this.maxMorphNormals,
                    maxDirLights: e,
                    maxPointLights: f,
                    maxSpotLights: g,
                    maxHemiLights: i,
                    maxShadows: n,
                    shadowMapEnabled: this.shadowMapEnabled && d.receiveShadow,
                    shadowMapType: this.shadowMapType,
                    shadowMapDebug: this.shadowMapDebug,
                    shadowMapCascade: this.shadowMapCascade,
                    alphaTest: a.alphaTest,
                    metal: a.metal,
                    perPixel: a.perPixel,
                    wrapAround: a.wrapAround,
                    doubleSided: a.side === THREE.DoubleSide,
                    flipSided: a.side === THREE.BackSide
                },
                t, v, y, d = [];l ? d.push(l) : (d.push(s), d.push(r));
            for (v in q) d.push(v),
            d.push(q[v]);
            for (t in c) d.push(t),
            d.push(c[t]);l = d.join();t = 0;
            for (v = Ma.length; t < v; t++)
                if (d = Ma[t], d.code === l) {
                    d.usedTimes++;
                    k = d.program;
                    break a
                } t = "SHADOWMAP_TYPE_BASIC";c.shadowMapType === THREE.PCFShadowMap ? t = "SHADOWMAP_TYPE_PCF" : c.shadowMapType === THREE.PCFSoftShadowMap && (t = "SHADOWMAP_TYPE_PCF_SOFT");v = [];
            for (y in q) d = q[y],
            !1 !== d && (d = "#define " + y + " " + d, v.push(d));d = v.join("\n");y = j.createProgram();v = ["precision " + fa + " float;", d, sc ? "#define VERTEX_TEXTURES" : "", N.gammaInput ? "#define GAMMA_INPUT" : "", N.gammaOutput ? "#define GAMMA_OUTPUT" : "", N.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights,
                "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, "#define MAX_BONES " + c.maxBones, c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" : "", c.boneTextureWidth ? "#define N_BONE_PIXEL_X " + c.boneTextureWidth.toFixed(1) :
                "", c.boneTextureHeight ? "#define N_BONE_PIXEL_Y " + c.boneTextureHeight.toFixed(1) : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals ? "#define USE_MORPHNORMALS" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.wrapAround ? "#define WRAP_AROUND" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + t : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.shadowMapCascade ? "#define SHADOWMAP_CASCADE" :
                "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"
            ].join("\n");
            t = ["precision " + fa + " float;", c.bumpMap || c.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", d, "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, c.alphaTest ? "#define ALPHATEST " + c.alphaTest : "", N.gammaInput ? "#define GAMMA_INPUT" : "", N.gammaOutput ? "#define GAMMA_OUTPUT" : "", N.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" :
                "", c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.metal ? "#define METAL" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.wrapAround ? "#define WRAP_AROUND" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" :
                "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + t : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
            ].join("\n");t = B("fragment", t + s);v = B("vertex", v + r);j.attachShader(y, v);j.attachShader(y, t);j.linkProgram(y);j.getProgramParameter(y, j.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + j.getProgramParameter(y, j.VALIDATE_STATUS) + ", gl error [" +
                j.getError() + "]");j.deleteShader(t);j.deleteShader(v);y.uniforms = {};y.attributes = {};
            var x;t = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture ? t.push("boneTexture") : t.push("boneGlobalMatrices");
            for (x in p) t.push(x);x = t;t = 0;
            for (v = x.length; t < v; t++) p = x[t],
            y.uniforms[p] = j.getUniformLocation(y, p);t = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
            for (x = 0; x < c.maxMorphTargets; x++) t.push("morphTarget" +
                x);
            for (x = 0; x < c.maxMorphNormals; x++) t.push("morphNormal" + x);
            for (k in b) t.push(k);k = t;x = 0;
            for (b = k.length; x < b; x++) t = k[x],
            y.attributes[t] = j.getAttribLocation(y, t);y.id = Na++;Ma.push({
                program: y,
                code: l,
                usedTimes: 1
            });N.info.memory.programs = Ma.length;k = y
        }
        a.program = k;
        x = a.program.attributes;
        if (a.morphTargets) {
            a.numSupportedMorphTargets = 0;
            b = "morphTarget";
            for (k = 0; k < this.maxMorphTargets; k++) y = b + k, 0 <= x[y] && a.numSupportedMorphTargets++
        }
        if (a.morphNormals) {
            a.numSupportedMorphNormals = 0;
            b = "morphNormal";
            for (k = 0; k < this.maxMorphNormals; k++) y =
                b + k, 0 <= x[y] && a.numSupportedMorphNormals++
        }
        a.uniformsList = [];
        for (h in a.uniforms) a.uniformsList.push([a.uniforms[h], h])
    };
    this.setFaceCulling = function(a, b) {
        a === THREE.CullFaceNone ? j.disable(j.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? j.frontFace(j.CW) : j.frontFace(j.CCW), a === THREE.CullFaceBack ? j.cullFace(j.BACK) : a === THREE.CullFaceFront ? j.cullFace(j.FRONT) : j.cullFace(j.FRONT_AND_BACK), j.enable(j.CULL_FACE))
    };
    this.setMaterialFaces = function(a) {
        var b = a.side === THREE.DoubleSide,
            a = a.side === THREE.BackSide;
        da !==
            b && (b ? j.disable(j.CULL_FACE) : j.enable(j.CULL_FACE), da = b);
        la !== a && (a ? j.frontFace(j.CW) : j.frontFace(j.CCW), la = a)
    };
    this.setDepthTest = function(a) {
        ia !== a && (a ? j.enable(j.DEPTH_TEST) : j.disable(j.DEPTH_TEST), ia = a)
    };
    this.setDepthWrite = function(a) {
        Wa !== a && (j.depthMask(a), Wa = a)
    };
    this.setBlending = function(a, b, c, d) {
        a !== Z && (a === THREE.NoBlending ? j.disable(j.BLEND) : a === THREE.AdditiveBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.SRC_ALPHA, j.ONE)) : a === THREE.SubtractiveBlending ? (j.enable(j.BLEND),
            j.blendEquation(j.FUNC_ADD), j.blendFunc(j.ZERO, j.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.ZERO, j.SRC_COLOR)) : a === THREE.CustomBlending ? j.enable(j.BLEND) : (j.enable(j.BLEND), j.blendEquationSeparate(j.FUNC_ADD, j.FUNC_ADD), j.blendFuncSeparate(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA, j.ONE, j.ONE_MINUS_SRC_ALPHA)), Z = a);
        if (a === THREE.CustomBlending) {
            if (b !== oa && (j.blendEquation(L(b)), oa = b), c !== gb || d !== nb) j.blendFunc(L(c), L(d)), gb = c, nb = d
        } else nb =
            gb = oa = null
    };
    this.setTexture = function(a, b) {
        if (a.needsUpdate) {
            a.__webglInit || (a.__webglInit = !0, a.addEventListener("dispose", Oc), a.__webglTexture = j.createTexture(), N.info.memory.textures++);
            j.activeTexture(j.TEXTURE0 + b);
            j.bindTexture(j.TEXTURE_2D, a.__webglTexture);
            j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, a.flipY);
            j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
            j.pixelStorei(j.UNPACK_ALIGNMENT, a.unpackAlignment);
            var c = a.image,
                d = 0 === (c.width & c.width - 1) && 0 === (c.height & c.height - 1),
                e = L(a.format),
                f = L(a.type);
            W(j.TEXTURE_2D, a, d);
            var g = a.mipmaps;
            if (a instanceof THREE.DataTexture)
                if (0 < g.length && d) {
                    for (var i = 0, h = g.length; i < h; i++) c = g[i], j.texImage2D(j.TEXTURE_2D, i, e, c.width, c.height, 0, e, f, c.data);
                    a.generateMipmaps = !1
                } else j.texImage2D(j.TEXTURE_2D, 0, e, c.width, c.height, 0, e, f, c.data);
            else if (a instanceof THREE.CompressedTexture) {
                i = 0;
                for (h = g.length; i < h; i++) c = g[i], j.compressedTexImage2D(j.TEXTURE_2D, i, e, c.width, c.height, 0, c.data)
            } else if (0 < g.length && d) {
                i = 0;
                for (h = g.length; i < h; i++) c = g[i], j.texImage2D(j.TEXTURE_2D,
                    i, e, e, f, c);
                a.generateMipmaps = !1
            } else j.texImage2D(j.TEXTURE_2D, 0, e, e, f, a.image);
            a.generateMipmaps && d && j.generateMipmap(j.TEXTURE_2D);
            a.needsUpdate = !1;
            if (a.onUpdate) a.onUpdate()
        } else j.activeTexture(j.TEXTURE0 + b), j.bindTexture(j.TEXTURE_2D, a.__webglTexture)
    };
    this.setRenderTarget = function(a) {
        var b = a instanceof THREE.WebGLRenderTargetCube;
        if (a && !a.__webglFramebuffer) {
            void 0 === a.depthBuffer && (a.depthBuffer = !0);
            void 0 === a.stencilBuffer && (a.stencilBuffer = !0);
            a.addEventListener("dispose", P);
            a.__webglTexture =
                j.createTexture();
            N.info.memory.textures++;
            var c = 0 === (a.width & a.width - 1) && 0 === (a.height & a.height - 1),
                d = L(a.format),
                e = L(a.type);
            if (b) {
                a.__webglFramebuffer = [];
                a.__webglRenderbuffer = [];
                j.bindTexture(j.TEXTURE_CUBE_MAP, a.__webglTexture);
                W(j.TEXTURE_CUBE_MAP, a, c);
                for (var f = 0; 6 > f; f++) {
                    a.__webglFramebuffer[f] = j.createFramebuffer();
                    a.__webglRenderbuffer[f] = j.createRenderbuffer();
                    j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
                    var g = a,
                        i = j.TEXTURE_CUBE_MAP_POSITIVE_X + f;
                    j.bindFramebuffer(j.FRAMEBUFFER,
                        a.__webglFramebuffer[f]);
                    j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, i, g.__webglTexture, 0);
                    F(a.__webglRenderbuffer[f], a)
                }
                c && j.generateMipmap(j.TEXTURE_CUBE_MAP)
            } else a.__webglFramebuffer = j.createFramebuffer(), a.__webglRenderbuffer = a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : j.createRenderbuffer(), j.bindTexture(j.TEXTURE_2D, a.__webglTexture), W(j.TEXTURE_2D, a, c), j.texImage2D(j.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), d = j.TEXTURE_2D, j.bindFramebuffer(j.FRAMEBUFFER, a.__webglFramebuffer),
                j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, d, a.__webglTexture, 0), a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer && a.stencilBuffer && j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a.__webglRenderbuffer) : F(a.__webglRenderbuffer, a), c && j.generateMipmap(j.TEXTURE_2D);
            b ? j.bindTexture(j.TEXTURE_CUBE_MAP, null) : j.bindTexture(j.TEXTURE_2D, null);
            j.bindRenderbuffer(j.RENDERBUFFER,
                null);
            j.bindFramebuffer(j.FRAMEBUFFER, null)
        }
        a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = fc, a = Ab, d = Ib, e = Jb);
        b !== Pa && (j.bindFramebuffer(j.FRAMEBUFFER, b), j.viewport(d, e, c, a), Pa = b);
        mc = c;
        pb = a
    };
    this.shadowMapPlugin = new THREE.ShadowMapPlugin;
    this.addPrePlugin(this.shadowMapPlugin);
    this.addPostPlugin(new THREE.SpritePlugin);
    this.addPostPlugin(new THREE.LensFlarePlugin)
};
THREE.WebGLRenderTarget = function(a, b, c) {
    THREE.EventDispatcher.call(this);
    this.width = a;
    this.height = b;
    c = c || {};
    this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
    this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = void 0 !== c.format ? c.format : THREE.RGBAFormat;
    this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
    this.generateMipmaps = !0;
    this.shareDepthFrom = null
};
THREE.WebGLRenderTarget.prototype.clone = function() {
    var a = new THREE.WebGLRenderTarget(this.width, this.height);
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.format = this.format;
    a.type = this.type;
    a.depthBuffer = this.depthBuffer;
    a.stencilBuffer = this.stencilBuffer;
    a.generateMipmaps = this.generateMipmaps;
    a.shareDepthFrom = this.shareDepthFrom;
    return a
};
THREE.WebGLRenderTarget.prototype.dispose = function() {
    this.dispatchEvent({
        type: "dispose"
    })
};
THREE.WebGLRenderTargetCube = function(a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c);
    this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.RenderableVertex = function() {
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function(a) {
    this.positionWorld.copy(a.positionWorld);
    this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableFace3 = function() {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.centroidModel = new THREE.Vector3;
    this.normalModel = new THREE.Vector3;
    this.normalModelView = new THREE.Vector3;
    this.vertexNormalsLength = 0;
    this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.vertexNormalsModelView = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.material = this.color = null;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableFace4 = function() {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.v4 = new THREE.RenderableVertex;
    this.centroidModel = new THREE.Vector3;
    this.normalModel = new THREE.Vector3;
    this.normalModelView = new THREE.Vector3;
    this.vertexNormalsLength = 0;
    this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.vertexNormalsModelView = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.material = this.color = null;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableObject = function() {
    this.z = this.object = null
};
THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = this.object = null;
    this.scale = new THREE.Vector2;
    this.material = null
};
THREE.RenderableLine = function() {
    this.z = null;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.material = null
};
THREE.GeometryUtils = {
    merge: function(a, b) {
        var c, d, e = a.vertices.length,
            f = b instanceof THREE.Mesh ? b.geometry : b,
            g = a.vertices,
            h = f.vertices,
            i = a.faces,
            k = f.faces,
            l = a.faceVertexUvs[0],
            f = f.faceVertexUvs[0];
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), c = b.matrix, d = new THREE.Matrix3, d.getInverse(c), d.transpose());
        for (var m = 0, n = h.length; m < n; m++) {
            var s = h[m].clone();
            c && s.applyMatrix4(c);
            g.push(s)
        }
        m = 0;
        for (n = k.length; m < n; m++) {
            var s = k[m],
                r, p, q = s.vertexNormals,
                y = s.vertexColors;
            s instanceof THREE.Face3 ?
                r = new THREE.Face3(s.a + e, s.b + e, s.c + e) : s instanceof THREE.Face4 && (r = new THREE.Face4(s.a + e, s.b + e, s.c + e, s.d + e));
            r.normal.copy(s.normal);
            d && r.normal.applyMatrix3(d).normalize();
            g = 0;
            for (h = q.length; g < h; g++) p = q[g].clone(), d && p.applyMatrix3(d).normalize(), r.vertexNormals.push(p);
            r.color.copy(s.color);
            g = 0;
            for (h = y.length; g < h; g++) p = y[g], r.vertexColors.push(p.clone());
            r.materialIndex = s.materialIndex;
            r.centroid.copy(s.centroid);
            c && r.centroid.applyMatrix4(c);
            i.push(r)
        }
        m = 0;
        for (n = f.length; m < n; m++) {
            c = f[m];
            d = [];
            g = 0;
            for (h = c.length; g < h; g++) d.push(new THREE.Vector2(c[g].x, c[g].y));
            l.push(d)
        }
    },
    removeMaterials: function(a, b) {
        for (var c = {}, d = 0, e = b.length; d < e; d++) c[b[d]] = !0;
        for (var f, g = [], d = 0, e = a.faces.length; d < e; d++) f = a.faces[d], f.materialIndex in c || g.push(f);
        a.faces = g
    },
    randomPointInTriangle: function(a, b, c) {
        var d, e, f, g = new THREE.Vector3,
            h = THREE.GeometryUtils.__v1;
        d = THREE.GeometryUtils.random();
        e = THREE.GeometryUtils.random();
        1 < d + e && (d = 1 - d, e = 1 - e);
        f = 1 - d - e;
        g.copy(a);
        g.multiplyScalar(d);
        h.copy(b);
        h.multiplyScalar(e);
        g.add(h);
        h.copy(c);
        h.multiplyScalar(f);
        g.add(h);
        return g
    },
    randomPointInFace: function(a, b, c) {
        var d, e, f;
        if (a instanceof THREE.Face3) return d = b.vertices[a.a], e = b.vertices[a.b], f = b.vertices[a.c], THREE.GeometryUtils.randomPointInTriangle(d, e, f);
        if (a instanceof THREE.Face4) {
            d = b.vertices[a.a];
            e = b.vertices[a.b];
            f = b.vertices[a.c];
            var b = b.vertices[a.d],
                g;
            c ? a._area1 && a._area2 ? (c = a._area1, g = a._area2) : (c = THREE.GeometryUtils.triangleArea(d, e, b), g = THREE.GeometryUtils.triangleArea(e, f, b), a._area1 = c, a._area2 = g) : (c = THREE.GeometryUtils.triangleArea(d,
                e, b), g = THREE.GeometryUtils.triangleArea(e, f, b));
            return THREE.GeometryUtils.random() * (c + g) < c ? THREE.GeometryUtils.randomPointInTriangle(d, e, b) : THREE.GeometryUtils.randomPointInTriangle(e, f, b)
        }
    },
    randomPointsInGeometry: function(a, b) {
        function c(a) {
            function b(c, d) {
                if (d < c) return c;
                var e = c + Math.floor((d - c) / 2);
                return k[e] > a ? b(c, e - 1) : k[e] < a ? b(e + 1, d) : e
            }
            return b(0, k.length - 1)
        }
        var d, e, f = a.faces,
            g = a.vertices,
            h = f.length,
            i = 0,
            k = [],
            l, m, n, s;
        for (e = 0; e < h; e++) d = f[e], d instanceof THREE.Face3 ? (l = g[d.a], m = g[d.b], n = g[d.c],
            d._area = THREE.GeometryUtils.triangleArea(l, m, n)) : d instanceof THREE.Face4 && (l = g[d.a], m = g[d.b], n = g[d.c], s = g[d.d], d._area1 = THREE.GeometryUtils.triangleArea(l, m, s), d._area2 = THREE.GeometryUtils.triangleArea(m, n, s), d._area = d._area1 + d._area2), i += d._area, k[e] = i;
        d = [];
        for (e = 0; e < b; e++) g = THREE.GeometryUtils.random() * i, g = c(g), d[e] = THREE.GeometryUtils.randomPointInFace(f[g], a, !0);
        return d
    },
    triangleArea: function(a, b, c) {
        var d = THREE.GeometryUtils.__v1,
            e = THREE.GeometryUtils.__v2;
        d.subVectors(b, a);
        e.subVectors(c, a);
        d.cross(e);
        return 0.5 * d.length()
    },
    center: function(a) {
        a.computeBoundingBox();
        var b = a.boundingBox,
            c = new THREE.Vector3;
        c.addVectors(b.min, b.max);
        c.multiplyScalar(-0.5);
        a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x, c.y, c.z));
        a.computeBoundingBox();
        return c
    },
    normalizeUVs: function(a) {
        for (var a = a.faceVertexUvs[0], b = 0, c = a.length; b < c; b++)
            for (var d = a[b], e = 0, f = d.length; e < f; e++) 1 !== d[e].x && (d[e].x -= Math.floor(d[e].x)), 1 !== d[e].y && (d[e].y -= Math.floor(d[e].y))
    },
    triangulateQuads: function(a) {
        var b, c, d, e,
            f = [],
            g = [],
            h = [];
        b = 0;
        for (c = a.faceUvs.length; b < c; b++) g[b] = [];
        b = 0;
        for (c = a.faceVertexUvs.length; b < c; b++) h[b] = [];
        b = 0;
        for (c = a.faces.length; b < c; b++)
            if (d = a.faces[b], d instanceof THREE.Face4) {
                e = d.a;
                var i = d.b,
                    k = d.c,
                    l = d.d,
                    m = new THREE.Face3,
                    n = new THREE.Face3;
                m.color.copy(d.color);
                n.color.copy(d.color);
                m.materialIndex = d.materialIndex;
                n.materialIndex = d.materialIndex;
                m.a = e;
                m.b = i;
                m.c = l;
                n.a = i;
                n.b = k;
                n.c = l;
                4 === d.vertexColors.length && (m.vertexColors[0] = d.vertexColors[0].clone(), m.vertexColors[1] = d.vertexColors[1].clone(),
                    m.vertexColors[2] = d.vertexColors[3].clone(), n.vertexColors[0] = d.vertexColors[1].clone(), n.vertexColors[1] = d.vertexColors[2].clone(), n.vertexColors[2] = d.vertexColors[3].clone());
                f.push(m, n);
                d = 0;
                for (e = a.faceVertexUvs.length; d < e; d++) a.faceVertexUvs[d].length && (m = a.faceVertexUvs[d][b], i = m[1], k = m[2], l = m[3], m = [m[0].clone(), i.clone(), l.clone()], i = [i.clone(), k.clone(), l.clone()], h[d].push(m, i));
                d = 0;
                for (e = a.faceUvs.length; d < e; d++) a.faceUvs[d].length && (i = a.faceUvs[d][b], g[d].push(i, i))
            } else {
                f.push(d);
                d = 0;
                for (e =
                    a.faceUvs.length; d < e; d++) g[d].push(a.faceUvs[d][b]);
                d = 0;
                for (e = a.faceVertexUvs.length; d < e; d++) h[d].push(a.faceVertexUvs[d][b])
            } a.faces = f;
        a.faceUvs = g;
        a.faceVertexUvs = h;
        a.computeCentroids();
        a.computeFaceNormals();
        a.computeVertexNormals();
        a.hasTangents && a.computeTangents()
    },
    setMaterialIndex: function(a, b, c, d) {
        a = a.faces;
        d = d || a.length - 1;
        for (c = c || 0; c <= d; c++) a[c].materialIndex = b
    }
};
THREE.GeometryUtils.random = THREE.Math.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.GeometryUtils.__v2 = new THREE.Vector3;
THREE.ImageUtils = {
    crossOrigin: "anonymous",
    loadTexture: function(a, b, c, d) {
        var e = new Image,
            f = new THREE.Texture(e, b),
            b = new THREE.ImageLoader;
        b.addEventListener("load", function(a) {
            f.image = a.content;
            f.needsUpdate = !0;
            c && c(f)
        });
        b.addEventListener("error", function(a) {
            d && d(a.message)
        });
        b.crossOrigin = this.crossOrigin;
        b.load(a, e);
        f.sourceFile = a;
        return f
    },
    loadCompressedTexture: function(a, b, c, d) {
        var e = new THREE.CompressedTexture;
        e.mapping = b;
        var f = new XMLHttpRequest;
        f.onload = function() {
            var a = THREE.ImageUtils.parseDDS(f.response,
                !0);
            e.format = a.format;
            e.mipmaps = a.mipmaps;
            e.image.width = a.width;
            e.image.height = a.height;
            e.generateMipmaps = !1;
            e.needsUpdate = !0;
            c && c(e)
        };
        f.onerror = d;
        f.open("GET", a, !0);
        f.responseType = "arraybuffer";
        f.send(null);
        return e
    },
    loadTextureCube: function(a, b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.Texture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        for (var b = 0, g = a.length; b < g; ++b) {
            var h = new Image;
            e[b] = h;
            h.onload = function() {
                e.loadCount += 1;
                6 === e.loadCount && (f.needsUpdate = !0, c && c(f))
            };
            h.onerror = d;
            h.crossOrigin =
                this.crossOrigin;
            h.src = a[b]
        }
        return f
    },
    loadCompressedTextureCube: function(a, b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.CompressedTexture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        f.generateMipmaps = !1;
        b = function(a, b) {
            return function() {
                var d = THREE.ImageUtils.parseDDS(a.response, !0);
                b.format = d.format;
                b.mipmaps = d.mipmaps;
                b.width = d.width;
                b.height = d.height;
                e.loadCount += 1;
                6 === e.loadCount && (f.format = d.format, f.needsUpdate = !0, c && c(f))
            }
        };
        if (a instanceof Array)
            for (var g = 0, h = a.length; g < h; ++g) {
                var i = {};
                e[g] = i;
                var k = new XMLHttpRequest;
                k.onload = b(k, i);
                k.onerror = d;
                i = a[g];
                k.open("GET", i, !0);
                k.responseType = "arraybuffer";
                k.send(null)
            } else k = new XMLHttpRequest, k.onload = function() {
                    var a = THREE.ImageUtils.parseDDS(k.response, !0);
                    if (a.isCubemap) {
                        for (var b = a.mipmaps.length / a.mipmapCount, d = 0; d < b; d++) {
                            e[d] = {
                                mipmaps: []
                            };
                            for (var g = 0; g < a.mipmapCount; g++) e[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + g]), e[d].format = a.format, e[d].width = a.width, e[d].height = a.height
                        }
                        f.format = a.format;
                        f.needsUpdate = !0;
                        c && c(f)
                    }
                }, k.onerror =
                d, k.open("GET", a, !0), k.responseType = "arraybuffer", k.send(null);
        return f
    },
    parseDDS: function(a, b) {
        function c(a) {
            return a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)
        }
        var d = {
                mipmaps: [],
                width: 0,
                height: 0,
                format: null,
                mipmapCount: 1
            },
            e = c("DXT1"),
            f = c("DXT3"),
            g = c("DXT5"),
            h = new Int32Array(a, 0, 31);
        if (542327876 !== h[0]) return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"), d;
        if (!h[20] & 4) return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),
            d;
        var i = h[21];
        switch (i) {
            case e:
                e = 8;
                d.format = THREE.RGB_S3TC_DXT1_Format;
                break;
            case f:
                e = 16;
                d.format = THREE.RGBA_S3TC_DXT3_Format;
                break;
            case g:
                e = 16;
                d.format = THREE.RGBA_S3TC_DXT5_Format;
                break;
            default:
                return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ", String.fromCharCode(i & 255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255)), d
        }
        d.mipmapCount = 1;
        h[2] & 131072 && !1 !== b && (d.mipmapCount = Math.max(1, h[7]));
        d.isCubemap = h[28] & 512 ? !0 : !1;
        d.width = h[4];
        d.height = h[3];
        for (var h = h[1] + 4, f = d.width, g = d.height, i = d.isCubemap ?
                6 : 1, k = 0; k < i; k++) {
            for (var l = 0; l < d.mipmapCount; l++) {
                var m = Math.max(4, f) / 4 * Math.max(4, g) / 4 * e,
                    n = {
                        data: new Uint8Array(a, h, m),
                        width: f,
                        height: g
                    };
                d.mipmaps.push(n);
                h += m;
                f = Math.max(0.5 * f, 1);
                g = Math.max(0.5 * g, 1)
            }
            f = d.width;
            g = d.height
        }
        return d
    },
    getNormalMap: function(a, b) {
        var c = function(a) {
                var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
                return [a[0] / b, a[1] / b, a[2] / b]
            },
            b = b | 1,
            d = a.width,
            e = a.height,
            f = document.createElement("canvas");
        f.width = d;
        f.height = e;
        var g = f.getContext("2d");
        g.drawImage(a, 0, 0);
        for (var h = g.getImageData(0,
                0, d, e).data, i = g.createImageData(d, e), k = i.data, l = 0; l < d; l++)
            for (var m = 0; m < e; m++) {
                var n = 0 > m - 1 ? 0 : m - 1,
                    s = m + 1 > e - 1 ? e - 1 : m + 1,
                    r = 0 > l - 1 ? 0 : l - 1,
                    p = l + 1 > d - 1 ? d - 1 : l + 1,
                    q = [],
                    y = [0, 0, h[4 * (m * d + l)] / 255 * b];
                q.push([-1, 0, h[4 * (m * d + r)] / 255 * b]);
                q.push([-1, -1, h[4 * (n * d + r)] / 255 * b]);
                q.push([0, -1, h[4 * (n * d + l)] / 255 * b]);
                q.push([1, -1, h[4 * (n * d + p)] / 255 * b]);
                q.push([1, 0, h[4 * (m * d + p)] / 255 * b]);
                q.push([1, 1, h[4 * (s * d + p)] / 255 * b]);
                q.push([0, 1, h[4 * (s * d + l)] / 255 * b]);
                q.push([-1, 1, h[4 * (s * d + r)] / 255 * b]);
                n = [];
                r = q.length;
                for (s = 0; s < r; s++) {
                    var p = q[s],
                        v = q[(s + 1) %
                            r],
                        p = [p[0] - y[0], p[1] - y[1], p[2] - y[2]],
                        v = [v[0] - y[0], v[1] - y[1], v[2] - y[2]];
                    n.push(c([p[1] * v[2] - p[2] * v[1], p[2] * v[0] - p[0] * v[2], p[0] * v[1] - p[1] * v[0]]))
                }
                q = [0, 0, 0];
                for (s = 0; s < n.length; s++) q[0] += n[s][0], q[1] += n[s][1], q[2] += n[s][2];
                q[0] /= n.length;
                q[1] /= n.length;
                q[2] /= n.length;
                y = 4 * (m * d + l);
                k[y] = 255 * ((q[0] + 1) / 2) | 0;
                k[y + 1] = 255 * ((q[1] + 1) / 2) | 0;
                k[y + 2] = 255 * q[2] | 0;
                k[y + 3] = 255
            }
        g.putImageData(i, 0, 0);
        return f
    },
    generateDataTexture: function(a, b, c) {
        for (var d = a * b, e = new Uint8Array(3 * d), f = Math.floor(255 * c.r), g = Math.floor(255 * c.g),
                c = Math.floor(255 * c.b), h = 0; h < d; h++) e[3 * h] = f, e[3 * h + 1] = g, e[3 * h + 2] = c;
        a = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
        a.needsUpdate = !0;
        return a
    }
};
THREE.SceneUtils = {
    createMultiMaterialObject: function(a, b) {
        for (var c = new THREE.Object3D, d = 0, e = b.length; d < e; d++) c.add(new THREE.Mesh(a, b[d]));
        return c
    },
    detach: function(a, b, c) {
        a.applyMatrix(b.matrixWorld);
        b.remove(a);
        c.add(a)
    },
    attach: function(a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld);
        a.applyMatrix(d);
        b.remove(a);
        c.add(a)
    }
};
THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function() {
        return this.faces[this.face][this.weight][this.style]
    },
    loadFace: function(a) {
        var b = a.familyName.toLowerCase();
        this.faces[b] = this.faces[b] || {};
        this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {};
        this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
        return this.faces[b][a.cssFontWeight][a.cssFontStyle] = a
    },
    drawText: function(a) {
        for (var b = this.getFace(), c = this.size / b.resolution, d =
                0, e = String(a).split(""), f = e.length, g = [], a = 0; a < f; a++) {
            var h = new THREE.Path,
                h = this.extractGlyphPoints(e[a], b, c, d, h),
                d = d + h.offset;
            g.push(h.path)
        }
        return {
            paths: g,
            offset: d / 2
        }
    },
    extractGlyphPoints: function(a, b, c, d, e) {
        var f = [],
            g, h, i, k, l, m, n, s, r, p, q, y = b.glyphs[a] || b.glyphs["?"];
        if (y) {
            if (y.o) {
                b = y._cachedOutline || (y._cachedOutline = y.o.split(" "));
                k = b.length;
                for (a = 0; a < k;) switch (i = b[a++], i) {
                    case "m":
                        i = b[a++] * c + d;
                        l = b[a++] * c;
                        e.moveTo(i, l);
                        break;
                    case "l":
                        i = b[a++] * c + d;
                        l = b[a++] * c;
                        e.lineTo(i, l);
                        break;
                    case "q":
                        i = b[a++] *
                            c + d;
                        l = b[a++] * c;
                        s = b[a++] * c + d;
                        r = b[a++] * c;
                        e.quadraticCurveTo(s, r, i, l);
                        if (g = f[f.length - 1]) {
                            m = g.x;
                            n = g.y;
                            g = 1;
                            for (h = this.divisions; g <= h; g++) {
                                var v = g / h;
                                THREE.Shape.Utils.b2(v, m, s, i);
                                THREE.Shape.Utils.b2(v, n, r, l)
                            }
                        }
                        break;
                    case "b":
                        if (i = b[a++] * c + d, l = b[a++] * c, s = b[a++] * c + d, r = b[a++] * -c, p = b[a++] * c + d, q = b[a++] * -c, e.bezierCurveTo(i, l, s, r, p, q), g = f[f.length - 1]) {
                            m = g.x;
                            n = g.y;
                            g = 1;
                            for (h = this.divisions; g <= h; g++) v = g / h, THREE.Shape.Utils.b3(v, m, s, p, i), THREE.Shape.Utils.b3(v, n, r, q, l)
                        }
                }
            }
            return {
                offset: y.ha * c,
                path: e
            }
        }
    }
};
THREE.FontUtils.generateShapes = function(a, b) {
    var b = b || {},
        c = void 0 !== b.curveSegments ? b.curveSegments : 4,
        d = void 0 !== b.font ? b.font : "helvetiker",
        e = void 0 !== b.weight ? b.weight : "normal",
        f = void 0 !== b.style ? b.style : "normal";
    THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
    THREE.FontUtils.divisions = c;
    THREE.FontUtils.face = d;
    THREE.FontUtils.weight = e;
    THREE.FontUtils.style = f;
    c = THREE.FontUtils.drawText(a).paths;
    d = [];
    e = 0;
    for (f = c.length; e < f; e++) Array.prototype.push.apply(d, c[e].toShapes());
    return d
};
(function(a) {
    var b = function(a) {
        for (var b = a.length, e = 0, f = b - 1, g = 0; g < b; f = g++) e += a[f].x * a[g].y - a[g].x * a[f].y;
        return 0.5 * e
    };
    a.Triangulate = function(a, d) {
        var e = a.length;
        if (3 > e) return null;
        var f = [],
            g = [],
            h = [],
            i, k, l;
        if (0 < b(a))
            for (k = 0; k < e; k++) g[k] = k;
        else
            for (k = 0; k < e; k++) g[k] = e - 1 - k;
        var m = 2 * e;
        for (k = e - 1; 2 < e;) {
            if (0 >= m--) {
                console.log("Warning, unable to triangulate polygon!");
                break
            }
            i = k;
            e <= i && (i = 0);
            k = i + 1;
            e <= k && (k = 0);
            l = k + 1;
            e <= l && (l = 0);
            var n;
            a: {
                var s = n = void 0,
                    r = void 0,
                    p = void 0,
                    q = void 0,
                    y = void 0,
                    v = void 0,
                    z = void 0,
                    t =
                    void 0,
                    s = a[g[i]].x,
                    r = a[g[i]].y,
                    p = a[g[k]].x,
                    q = a[g[k]].y,
                    y = a[g[l]].x,
                    v = a[g[l]].y;
                if (1E-10 > (p - s) * (v - r) - (q - r) * (y - s)) n = !1;
                else {
                    var A = void 0,
                        I = void 0,
                        C = void 0,
                        x = void 0,
                        G = void 0,
                        J = void 0,
                        E = void 0,
                        H = void 0,
                        B = void 0,
                        W = void 0,
                        B = H = E = t = z = void 0,
                        A = y - p,
                        I = v - q,
                        C = s - y,
                        x = r - v,
                        G = p - s,
                        J = q - r;
                    for (n = 0; n < e; n++)
                        if (!(n === i || n === k || n === l))
                            if (z = a[g[n]].x, t = a[g[n]].y, E = z - s, H = t - r, B = z - p, W = t - q, z -= y, t -= v, B = A * W - I * B, E = G * H - J * E, H = C * t - x * z, 0 <= B && 0 <= H && 0 <= E) {
                                n = !1;
                                break a
                            } n = !0
                }
            }
            if (n) {
                f.push([a[g[i]], a[g[k]], a[g[l]]]);
                h.push([g[i], g[k], g[l]]);
                i = k;
                for (l = k + 1; l < e; i++, l++) g[i] = g[l];
                e--;
                m = 2 * e
            }
        }
        return d ? h : f
    };
    a.Triangulate.area = b;
    return a
})(THREE.FontUtils);
self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
};
THREE.Curve = function() {};
THREE.Curve.prototype.getPoint = function() {
    console.log("Warning, getPoint() not implemented!");
    return null
};
THREE.Curve.prototype.getPointAt = function(a) {
    a = this.getUtoTmapping(a);
    return this.getPoint(a)
};
THREE.Curve.prototype.getPoints = function(a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; b <= a; b++) c.push(this.getPoint(b / a));
    return c
};
THREE.Curve.prototype.getSpacedPoints = function(a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; b <= a; b++) c.push(this.getPointAt(b / a));
    return c
};
THREE.Curve.prototype.getLength = function() {
    var a = this.getLengths();
    return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function(a) {
    a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
    if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    var b = [],
        c, d = this.getPoint(0),
        e, f = 0;
    b.push(0);
    for (e = 1; e <= a; e++) c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
    return this.cacheArcLengths = b
};
THREE.Curve.prototype.updateArcLengths = function() {
    this.needsUpdate = !0;
    this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function(a, b) {
    var c = this.getLengths(),
        d = 0,
        e = c.length,
        f;
    f = b ? b : a * c[e - 1];
    for (var g = 0, h = e - 1, i; g <= h;)
        if (d = Math.floor(g + (h - g) / 2), i = c[d] - f, 0 > i) g = d + 1;
        else if (0 < i) h = d - 1;
    else {
        h = d;
        break
    }
    d = h;
    if (c[d] == f) return d / (e - 1);
    g = c[d];
    return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1)
};
THREE.Curve.prototype.getTangent = function(a) {
    var b = a - 1E-4,
        a = a + 1E-4;
    0 > b && (b = 0);
    1 < a && (a = 1);
    b = this.getPoint(b);
    return this.getPoint(a).clone().sub(b).normalize()
};
THREE.Curve.prototype.getTangentAt = function(a) {
    a = this.getUtoTmapping(a);
    return this.getTangent(a)
};
THREE.LineCurve = function(a, b) {
    this.v1 = a;
    this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function(a) {
    var b = this.v2.clone().sub(this.v1);
    b.multiplyScalar(a).add(this.v1);
    return b
};
THREE.LineCurve.prototype.getPointAt = function(a) {
    return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function() {
    return this.v2.clone().sub(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function(a) {
    var b;
    b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    return new THREE.Vector2(b, a)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function(a) {
    var b;
    b = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
    b = new THREE.Vector2(b, a);
    b.normalize();
    return b
};
THREE.CubicBezierCurve = function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function(a) {
    var b;
    b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    return new THREE.Vector2(b, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function(a) {
    var b;
    b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    b = new THREE.Vector2(b, a);
    b.normalize();
    return b
};
THREE.SplineCurve = function(a) {
    this.points = void 0 == a ? [] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function(a) {
    var b = new THREE.Vector2,
        c = [],
        d = this.points,
        e;
    e = (d.length - 1) * a;
    a = Math.floor(e);
    e -= a;
    c[0] = 0 == a ? a : a - 1;
    c[1] = a;
    c[2] = a > d.length - 2 ? d.length - 1 : a + 1;
    c[3] = a > d.length - 3 ? d.length - 1 : a + 2;
    b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
    b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
    return b
};
THREE.EllipseCurve = function(a, b, c, d, e, f, g) {
    this.aX = a;
    this.aY = b;
    this.xRadius = c;
    this.yRadius = d;
    this.aStartAngle = e;
    this.aEndAngle = f;
    this.aClockwise = g
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function(a) {
    var b = this.aEndAngle - this.aStartAngle;
    this.aClockwise || (a = 1 - a);
    b = this.aStartAngle + a * b;
    a = this.aX + this.xRadius * Math.cos(b);
    b = this.aY + this.yRadius * Math.sin(b);
    return new THREE.Vector2(a, b)
};
THREE.ArcCurve = function(a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils = {
    tangentQuadraticBezier: function(a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    },
    tangentCubicBezier: function(a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    },
    tangentSpline: function(a) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    },
    interpolate: function(a, b, c, d, e) {
        var a = 0.5 * (c - a),
            d = 0.5 * (d - b),
            f = e * e;
        return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
    }
};
THREE.Curve.create = function(a, b) {
    a.prototype = Object.create(THREE.Curve.prototype);
    a.prototype.getPoint = b;
    return a
};
THREE.LineCurve3 = THREE.Curve.create(function(a, b) {
    this.v1 = a;
    this.v2 = b
}, function(a) {
    var b = new THREE.Vector3;
    b.subVectors(this.v2, this.v1);
    b.multiplyScalar(a);
    b.add(this.v1);
    return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
}, function(a) {
    var b, c;
    b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    c = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    a = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
    return new THREE.Vector3(b, c, a)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
}, function(a) {
    var b, c;
    b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    c = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    a = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
    return new THREE.Vector3(b, c, a)
});
THREE.SplineCurve3 = THREE.Curve.create(function(a) {
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = new THREE.Vector3,
        c = [],
        d = this.points,
        e, a = (d.length - 1) * a;
    e = Math.floor(a);
    a -= e;
    c[0] = 0 == e ? e : e - 1;
    c[1] = e;
    c[2] = e > d.length - 2 ? d.length - 1 : e + 1;
    c[3] = e > d.length - 3 ? d.length - 1 : e + 2;
    e = d[c[0]];
    var f = d[c[1]],
        g = d[c[2]],
        c = d[c[3]];
    b.x = THREE.Curve.Utils.interpolate(e.x, f.x, g.x, c.x, a);
    b.y = THREE.Curve.Utils.interpolate(e.y, f.y, g.y, c.y, a);
    b.z = THREE.Curve.Utils.interpolate(e.z, f.z, g.z, c.z, a);
    return b
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function(a) {
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = new THREE.Vector3,
        c = [],
        d = this.points,
        e;
    e = (d.length - 0) * a;
    a = Math.floor(e);
    e -= a;
    a += 0 < a ? 0 : (Math.floor(Math.abs(a) / d.length) + 1) * d.length;
    c[0] = (a - 1) % d.length;
    c[1] = a % d.length;
    c[2] = (a + 1) % d.length;
    c[3] = (a + 2) % d.length;
    b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
    b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
    b.z = THREE.Curve.Utils.interpolate(d[c[0]].z,
        d[c[1]].z, d[c[2]].z, d[c[3]].z, e);
    return b
});
THREE.CurvePath = function() {
    this.curves = [];
    this.bends = [];
    this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function(a) {
    this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function() {};
THREE.CurvePath.prototype.closePath = function() {
    var a = this.curves[0].getPoint(0),
        b = this.curves[this.curves.length - 1].getPoint(1);
    a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
};
THREE.CurvePath.prototype.getPoint = function(a) {
    for (var b = a * this.getLength(), c = this.getCurveLengths(), a = 0; a < c.length;) {
        if (c[a] >= b) return b = c[a] - b, a = this.curves[a], b = 1 - b / a.getLength(), a.getPointAt(b);
        a++
    }
    return null
};
THREE.CurvePath.prototype.getLength = function() {
    var a = this.getCurveLengths();
    return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
    var a = [],
        b = 0,
        c, d = this.curves.length;
    for (c = 0; c < d; c++) b += this.curves[c].getLength(), a.push(b);
    return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function() {
    var a = this.getPoints(),
        b, c, d, e, f, g;
    b = c = Number.NEGATIVE_INFINITY;
    e = f = Number.POSITIVE_INFINITY;
    var h, i, k, l, m = a[0] instanceof THREE.Vector3;
    l = m ? new THREE.Vector3 : new THREE.Vector2;
    i = 0;
    for (k = a.length; i < k; i++) h = a[i], h.x > b ? b = h.x : h.x < e && (e = h.x), h.y > c ? c = h.y : h.y < f && (f = h.y), m && (h.z > d ? d = h.z : h.z < g && (g = h.z)), l.add(h);
    a = {
        minX: e,
        minY: f,
        maxX: b,
        maxY: c,
        centroid: l.divideScalar(k)
    };
    m && (a.maxZ = d, a.minZ = g);
    return a
};
THREE.CurvePath.prototype.createPointsGeometry = function(a) {
    a = this.getPoints(a, !0);
    return this.createGeometry(a)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(a) {
    a = this.getSpacedPoints(a, !0);
    return this.createGeometry(a)
};
THREE.CurvePath.prototype.createGeometry = function(a) {
    for (var b = new THREE.Geometry, c = 0; c < a.length; c++) b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
    return b
};
THREE.CurvePath.prototype.addWrapPath = function(a) {
    this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function(a, b) {
    var c = this.getPoints(a),
        d, e;
    b || (b = this.bends);
    d = 0;
    for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
    return c
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function(a, b) {
    var c = this.getSpacedPoints(a),
        d, e;
    b || (b = this.bends);
    d = 0;
    for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
    return c
};
THREE.CurvePath.prototype.getWrapPoints = function(a, b) {
    var c = this.getBoundingBox(),
        d, e, f, g, h, i;
    d = 0;
    for (e = a.length; d < e; d++) f = a[d], g = f.x, h = f.y, i = g / c.maxX, i = b.getUtoTmapping(i, g), g = b.getPoint(i), h = b.getNormalVector(i).multiplyScalar(h), f.x = g.x + h.x, f.y = g.y + h.y;
    return a
};
THREE.Gyroscope = function() {
    THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function(a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a) this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.rotationWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.rotationObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.rotationObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix),
        this.matrixWorldNeedsUpdate = !1, a = !0;
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
};
THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.translationObject = new THREE.Vector3;
THREE.Gyroscope.prototype.rotationWorld = new THREE.Quaternion;
THREE.Gyroscope.prototype.rotationObject = new THREE.Quaternion;
THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3;
THREE.Path = function(a) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a && this.fromPoints(a)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse"
};
THREE.Path.prototype.fromPoints = function(a) {
    this.moveTo(a[0].x, a[0].y);
    for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y)
};
THREE.Path.prototype.moveTo = function(a, b) {
    var c = Array.prototype.slice.call(arguments);
    this.actions.push({
        action: THREE.PathActions.MOVE_TO,
        args: c
    })
};
THREE.Path.prototype.lineTo = function(a, b) {
    var c = Array.prototype.slice.call(arguments),
        d = this.actions[this.actions.length - 1].args,
        d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
    this.curves.push(d);
    this.actions.push({
        action: THREE.PathActions.LINE_TO,
        args: c
    })
};
THREE.Path.prototype.quadraticCurveTo = function(a, b, c, d) {
    var e = Array.prototype.slice.call(arguments),
        f = this.actions[this.actions.length - 1].args,
        f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
    this.curves.push(f);
    this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: e
    })
};
THREE.Path.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
    var g = Array.prototype.slice.call(arguments),
        h = this.actions[this.actions.length - 1].args,
        h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
    this.curves.push(h);
    this.actions.push({
        action: THREE.PathActions.BEZIER_CURVE_TO,
        args: g
    })
};
THREE.Path.prototype.splineThru = function(a) {
    var b = Array.prototype.slice.call(arguments),
        c = this.actions[this.actions.length - 1].args,
        c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
    Array.prototype.push.apply(c, a);
    c = new THREE.SplineCurve(c);
    this.curves.push(c);
    this.actions.push({
        action: THREE.PathActions.CSPLINE_THRU,
        args: b
    })
};
THREE.Path.prototype.arc = function(a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args;
    this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
};
THREE.Path.prototype.absarc = function(a, b, c, d, e, f) {
    this.absellipse(a, b, c, c, d, e, f)
};
THREE.Path.prototype.ellipse = function(a, b, c, d, e, f, g) {
    var h = this.actions[this.actions.length - 1].args;
    this.absellipse(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f, g)
};
THREE.Path.prototype.absellipse = function(a, b, c, d, e, f, g) {
    var h = Array.prototype.slice.call(arguments),
        i = new THREE.EllipseCurve(a, b, c, d, e, f, g);
    this.curves.push(i);
    i = i.getPoint(g ? 1 : 0);
    h.push(i.x);
    h.push(i.y);
    this.actions.push({
        action: THREE.PathActions.ELLIPSE,
        args: h
    })
};
THREE.Path.prototype.getSpacedPoints = function(a) {
    a || (a = 40);
    for (var b = [], c = 0; c < a; c++) b.push(this.getPoint(c / a));
    return b
};
THREE.Path.prototype.getPoints = function(a, b) {
    if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(a, b);
    var a = a || 12,
        c = [],
        d, e, f, g, h, i, k, l, m, n, s, r, p;
    d = 0;
    for (e = this.actions.length; d < e; d++) switch (f = this.actions[d], g = f.action, f = f.args, g) {
        case THREE.PathActions.MOVE_TO:
            c.push(new THREE.Vector2(f[0], f[1]));
            break;
        case THREE.PathActions.LINE_TO:
            c.push(new THREE.Vector2(f[0], f[1]));
            break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
            h = f[2];
            i = f[3];
            m = f[0];
            n = f[1];
            0 < c.length ? (g = c[c.length - 1], s = g.x,
                r = g.y) : (g = this.actions[d - 1].args, s = g[g.length - 2], r = g[g.length - 1]);
            for (f = 1; f <= a; f++) p = f / a, g = THREE.Shape.Utils.b2(p, s, m, h), p = THREE.Shape.Utils.b2(p, r, n, i), c.push(new THREE.Vector2(g, p));
            break;
        case THREE.PathActions.BEZIER_CURVE_TO:
            h = f[4];
            i = f[5];
            m = f[0];
            n = f[1];
            k = f[2];
            l = f[3];
            0 < c.length ? (g = c[c.length - 1], s = g.x, r = g.y) : (g = this.actions[d - 1].args, s = g[g.length - 2], r = g[g.length - 1]);
            for (f = 1; f <= a; f++) p = f / a, g = THREE.Shape.Utils.b3(p, s, m, k, h), p = THREE.Shape.Utils.b3(p, r, n, l, i), c.push(new THREE.Vector2(g, p));
            break;
        case THREE.PathActions.CSPLINE_THRU:
            g =
                this.actions[d - 1].args;
            p = [new THREE.Vector2(g[g.length - 2], g[g.length - 1])];
            g = a * f[0].length;
            p = p.concat(f[0]);
            p = new THREE.SplineCurve(p);
            for (f = 1; f <= g; f++) c.push(p.getPointAt(f / g));
            break;
        case THREE.PathActions.ARC:
            h = f[0];
            i = f[1];
            n = f[2];
            k = f[3];
            g = f[4];
            m = !!f[5];
            s = g - k;
            r = 2 * a;
            for (f = 1; f <= r; f++) p = f / r, m || (p = 1 - p), p = k + p * s, g = h + n * Math.cos(p), p = i + n * Math.sin(p), c.push(new THREE.Vector2(g, p));
            break;
        case THREE.PathActions.ELLIPSE:
            h = f[0];
            i = f[1];
            n = f[2];
            l = f[3];
            k = f[4];
            g = f[5];
            m = !!f[6];
            s = g - k;
            r = 2 * a;
            for (f = 1; f <= r; f++) p = f / r, m ||
                (p = 1 - p), p = k + p * s, g = h + n * Math.cos(p), p = i + l * Math.sin(p), c.push(new THREE.Vector2(g, p))
    }
    d = c[c.length - 1];
    1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
    b && c.push(c[0]);
    return c
};
THREE.Path.prototype.toShapes = function() {
    var a, b, c, d, e = [],
        f = new THREE.Path;
    a = 0;
    for (b = this.actions.length; a < b; a++) c = this.actions[a], d = c.args, c = c.action, c == THREE.PathActions.MOVE_TO && 0 != f.actions.length && (e.push(f), f = new THREE.Path), f[c].apply(f, d);
    0 != f.actions.length && e.push(f);
    if (0 == e.length) return [];
    var g;
    d = [];
    a = !THREE.Shape.Utils.isClockWise(e[0].getPoints());
    if (1 == e.length) return f = e[0], g = new THREE.Shape, g.actions = f.actions, g.curves = f.curves, d.push(g), d;
    if (a) {
        g = new THREE.Shape;
        a = 0;
        for (b = e.length; a <
            b; a++) f = e[a], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (g.actions = f.actions, g.curves = f.curves, d.push(g), g = new THREE.Shape) : g.holes.push(f)
    } else {
        a = 0;
        for (b = e.length; a < b; a++) f = e[a], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (g && d.push(g), g = new THREE.Shape, g.actions = f.actions, g.curves = f.curves) : g.holes.push(f);
        d.push(g)
    }
    return d
};
THREE.Shape = function() {
    THREE.Path.apply(this, arguments);
    this.holes = []
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function(a) {
    return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.makeGeometry = function(a) {
    return new THREE.ShapeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function(a) {
    var b, c = this.holes.length,
        d = [];
    for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function(a) {
    var b, c = this.holes.length,
        d = [];
    for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.extractAllPoints = function(a) {
    return {
        shape: this.getTransformedPoints(a),
        holes: this.getPointsHoles(a)
    }
};
THREE.Shape.prototype.extractPoints = function(a) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
};
THREE.Shape.prototype.extractAllSpacedPoints = function(a) {
    return {
        shape: this.getTransformedSpacedPoints(a),
        holes: this.getSpacedPointsHoles(a)
    }
};
THREE.Shape.Utils = {
    removeHoles: function(a, b) {
        var c = a.concat(),
            d = c.concat(),
            e, f, g, h, i, k, l, m, n, s, r = [];
        for (i = 0; i < b.length; i++) {
            k = b[i];
            Array.prototype.push.apply(d, k);
            f = Number.POSITIVE_INFINITY;
            for (e = 0; e < k.length; e++) {
                n = k[e];
                s = [];
                for (m = 0; m < c.length; m++) l = c[m], l = n.distanceToSquared(l), s.push(l), l < f && (f = l, g = e, h = m)
            }
            e = 0 <= h - 1 ? h - 1 : c.length - 1;
            f = 0 <= g - 1 ? g - 1 : k.length - 1;
            var p = [k[g], c[h], c[e]];
            m = THREE.FontUtils.Triangulate.area(p);
            var q = [k[g], k[f], c[h]];
            n = THREE.FontUtils.Triangulate.area(q);
            s = h;
            l = g;
            h += 1;
            g += -1;
            0 >
                h && (h += c.length);
            h %= c.length;
            0 > g && (g += k.length);
            g %= k.length;
            e = 0 <= h - 1 ? h - 1 : c.length - 1;
            f = 0 <= g - 1 ? g - 1 : k.length - 1;
            p = [k[g], c[h], c[e]];
            p = THREE.FontUtils.Triangulate.area(p);
            q = [k[g], k[f], c[h]];
            q = THREE.FontUtils.Triangulate.area(q);
            m + n > p + q && (h = s, g = l, 0 > h && (h += c.length), h %= c.length, 0 > g && (g += k.length), g %= k.length, e = 0 <= h - 1 ? h - 1 : c.length - 1, f = 0 <= g - 1 ? g - 1 : k.length - 1);
            m = c.slice(0, h);
            n = c.slice(h);
            s = k.slice(g);
            l = k.slice(0, g);
            f = [k[g], k[f], c[h]];
            r.push([k[g], c[h], c[e]]);
            r.push(f);
            c = m.concat(s).concat(l).concat(n)
        }
        return {
            shape: c,
            isolatedPts: r,
            allpoints: d
        }
    },
    triangulateShape: function(a, b) {
        var c = THREE.Shape.Utils.removeHoles(a, b),
            d = c.allpoints,
            e = c.isolatedPts,
            c = THREE.FontUtils.Triangulate(c.shape, !1),
            f, g, h, i, k = {};
        f = 0;
        for (g = d.length; f < g; f++) i = d[f].x + ":" + d[f].y, void 0 !== k[i] && console.log("Duplicate point", i), k[i] = f;
        f = 0;
        for (g = c.length; f < g; f++) {
            h = c[f];
            for (d = 0; 3 > d; d++) i = h[d].x + ":" + h[d].y, i = k[i], void 0 !== i && (h[d] = i)
        }
        f = 0;
        for (g = e.length; f < g; f++) {
            h = e[f];
            for (d = 0; 3 > d; d++) i = h[d].x + ":" + h[d].y, i = k[i], void 0 !== i && (h[d] = i)
        }
        return c.concat(e)
    },
    isClockWise: function(a) {
        return 0 > THREE.FontUtils.Triangulate.area(a)
    },
    b2p0: function(a, b) {
        var c = 1 - a;
        return c * c * b
    },
    b2p1: function(a, b) {
        return 2 * (1 - a) * a * b
    },
    b2p2: function(a, b) {
        return a * a * b
    },
    b2: function(a, b, c, d) {
        return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
    },
    b3p0: function(a, b) {
        var c = 1 - a;
        return c * c * c * b
    },
    b3p1: function(a, b) {
        var c = 1 - a;
        return 3 * c * c * a * b
    },
    b3p2: function(a, b) {
        return 3 * (1 - a) * a * a * b
    },
    b3p3: function(a, b) {
        return a * a * a * b
    },
    b3: function(a, b, c, d, e) {
        return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) +
            this.b3p3(a, e)
    }
};
THREE.AnimationHandler = function() {
    var a = [],
        b = {},
        c = {
            update: function(b) {
                for (var c = 0; c < a.length; c++) a[c].update(b)
            },
            addToUpdate: function(b) {
                -1 === a.indexOf(b) && a.push(b)
            },
            removeFromUpdate: function(b) {
                b = a.indexOf(b); - 1 !== b && a.splice(b, 1)
            },
            add: function(a) {
                void 0 !== b[a.name] && console.log("THREE.AnimationHandler.add: Warning! " + a.name + " already exists in library. Overwriting.");
                b[a.name] = a;
                if (!0 !== a.initialized) {
                    for (var c = 0; c < a.hierarchy.length; c++) {
                        for (var d = 0; d < a.hierarchy[c].keys.length; d++)
                            if (0 > a.hierarchy[c].keys[d].time &&
                                (a.hierarchy[c].keys[d].time = 0), void 0 !== a.hierarchy[c].keys[d].rot && !(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)) {
                                var h = a.hierarchy[c].keys[d].rot;
                                a.hierarchy[c].keys[d].rot = new THREE.Quaternion(h[0], h[1], h[2], h[3])
                            } if (a.hierarchy[c].keys.length && void 0 !== a.hierarchy[c].keys[0].morphTargets) {
                            h = {};
                            for (d = 0; d < a.hierarchy[c].keys.length; d++)
                                for (var i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++) {
                                    var k = a.hierarchy[c].keys[d].morphTargets[i];
                                    h[k] = -1
                                }
                            a.hierarchy[c].usedMorphTargets = h;
                            for (d = 0; d < a.hierarchy[c].keys.length; d++) {
                                var l = {};
                                for (k in h) {
                                    for (i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++)
                                        if (a.hierarchy[c].keys[d].morphTargets[i] === k) {
                                            l[k] = a.hierarchy[c].keys[d].morphTargetsInfluences[i];
                                            break
                                        } i === a.hierarchy[c].keys[d].morphTargets.length && (l[k] = 0)
                                }
                                a.hierarchy[c].keys[d].morphTargetsInfluences = l
                            }
                        }
                        for (d = 1; d < a.hierarchy[c].keys.length; d++) a.hierarchy[c].keys[d].time === a.hierarchy[c].keys[d - 1].time && (a.hierarchy[c].keys.splice(d, 1), d--);
                        for (d = 0; d < a.hierarchy[c].keys.length; d++) a.hierarchy[c].keys[d].index =
                            d
                    }
                    d = parseInt(a.length * a.fps, 10);
                    a.JIT = {};
                    a.JIT.hierarchy = [];
                    for (c = 0; c < a.hierarchy.length; c++) a.JIT.hierarchy.push(Array(d));
                    a.initialized = !0
                }
            },
            get: function(a) {
                if ("string" === typeof a) {
                    if (b[a]) return b[a];
                    console.log("THREE.AnimationHandler.get: Couldn't find animation " + a);
                    return null
                }
            },
            parse: function(a) {
                var b = [];
                if (a instanceof THREE.SkinnedMesh)
                    for (var c = 0; c < a.bones.length; c++) b.push(a.bones[c]);
                else d(a, b);
                return b
            }
        },
        d = function(a, b) {
            b.push(a);
            for (var c = 0; c < a.children.length; c++) d(a.children[c],
                b)
        };
    c.LINEAR = 0;
    c.CATMULLROM = 1;
    c.CATMULLROM_FORWARD = 2;
    return c
}();
THREE.Animation = function(a, b, c) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(b);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.interpolationType = void 0 !== c ? c : THREE.AnimationHandler.LINEAR;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function(a, b) {
    if (!1 === this.isPlaying) {
        this.isPlaying = !0;
        this.loop = void 0 !== a ? a : !0;
        this.currentTime = void 0 !== b ? b : 0;
        var c, d = this.hierarchy.length,
            e;
        for (c = 0; c < d; c++) {
            e = this.hierarchy[c];
            this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD && (e.useQuaternion = !0);
            e.matrixAutoUpdate = !0;
            void 0 === e.animationCache && (e.animationCache = {}, e.animationCache.prevKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, e.animationCache.nextKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, e.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix : e.matrix);
            var f = e.animationCache.prevKey;
            e = e.animationCache.nextKey;
            f.pos = this.data.hierarchy[c].keys[0];
            f.rot = this.data.hierarchy[c].keys[0];
            f.scl = this.data.hierarchy[c].keys[0];
            e.pos = this.getNextKeyWith("pos", c, 1);
            e.rot = this.getNextKeyWith("rot", c, 1);
            e.scl = this.getNextKeyWith("scl", c, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function() {
    !0 === this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this)
};
THREE.Animation.prototype.update = function(a) {
    if (!1 !== this.isPlaying) {
        var b = ["pos", "rot", "scl"],
            c, d, e, f, g, h, i, k, l;
        l = this.currentTime += a * this.timeScale;
        k = this.currentTime %= this.data.length;
        parseInt(Math.min(k * this.data.fps, this.data.length * this.data.fps), 10);
        for (var m = 0, n = this.hierarchy.length; m < n; m++) {
            a = this.hierarchy[m];
            i = a.animationCache;
            for (var s = 0; 3 > s; s++) {
                c = b[s];
                g = i.prevKey[c];
                h = i.nextKey[c];
                if (h.time <= l) {
                    if (k < l)
                        if (this.loop) {
                            g = this.data.hierarchy[m].keys[0];
                            for (h = this.getNextKeyWith(c, m, 1); h.time <
                                k;) g = h, h = this.getNextKeyWith(c, m, h.index + 1)
                        } else {
                            this.stop();
                            return
                        }
                    else {
                        do g = h, h = this.getNextKeyWith(c, m, h.index + 1); while (h.time < k)
                    }
                    i.prevKey[c] = g;
                    i.nextKey[c] = h
                }
                a.matrixAutoUpdate = !0;
                a.matrixWorldNeedsUpdate = !0;
                d = (k - g.time) / (h.time - g.time);
                e = g[c];
                f = h[c];
                if (0 > d || 1 < d) console.log("THREE.Animation.update: Warning! Scale out of bounds:" + d + " on bone " + m), d = 0 > d ? 0 : 1;
                if ("pos" === c)
                    if (c = a.position, this.interpolationType === THREE.AnimationHandler.LINEAR) c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] +
                        (f[2] - e[2]) * d;
                    else {
                        if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) this.points[0] = this.getPrevKeyWith("pos", m, g.index - 1).pos, this.points[1] = e, this.points[2] = f, this.points[3] = this.getNextKeyWith("pos", m, h.index + 1).pos, d = 0.33 * d + 0.33, e = this.interpolateCatmullRom(this.points, d), c.x = e[0], c.y = e[1], c.z = e[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (d = this.interpolateCatmullRom(this.points, 1.01 * d),
                            this.target.set(d[0], d[1], d[2]), this.target.sub(c), this.target.y = 0, this.target.normalize(), d = Math.atan2(this.target.x, this.target.z), a.rotation.set(0, d, 0))
                    }
                else "rot" === c ? THREE.Quaternion.slerp(e, f, a.quaternion, d) : "scl" === c && (c = a.scale, c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] + (f[2] - e[2]) * d)
            }
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function(a, b) {
    var c = [],
        d = [],
        e, f, g, h, i, k;
    e = (a.length - 1) * b;
    f = Math.floor(e);
    e -= f;
    c[0] = 0 === f ? f : f - 1;
    c[1] = f;
    c[2] = f > a.length - 2 ? f : f + 1;
    c[3] = f > a.length - 3 ? f : f + 2;
    f = a[c[0]];
    h = a[c[1]];
    i = a[c[2]];
    k = a[c[3]];
    c = e * e;
    g = e * c;
    d[0] = this.interpolate(f[0], h[0], i[0], k[0], e, c, g);
    d[1] = this.interpolate(f[1], h[1], i[1], k[1], e, c, g);
    d[2] = this.interpolate(f[2], h[2], i[2], k[2], e, c, g);
    return d
};
THREE.Animation.prototype.interpolate = function(a, b, c, d, e, f, g) {
    a = 0.5 * (c - a);
    d = 0.5 * (d - b);
    return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
};
THREE.Animation.prototype.getNextKeyWith = function(a, b, c) {
    for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++)
        if (void 0 !== d[c][a]) return d[c];
    return this.data.hierarchy[b].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function(a, b, c) {
    for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--)
        if (void 0 !== d[c][a]) return d[c];
    return this.data.hierarchy[b].keys[d.length - 1]
};
THREE.KeyFrameAnimation = function(a, b, c) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(b);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 0.001;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.JITCompile = void 0 !== c ? c : !0;
    a = 0;
    for (b = this.hierarchy.length; a < b; a++) {
        var c = this.data.hierarchy[a].sids,
            d = this.hierarchy[a];
        if (this.data.hierarchy[a].keys.length && c) {
            for (var e = 0; e < c.length; e++) {
                var f = c[e],
                    g = this.getNextKeyWith(f, a, 0);
                g && g.apply(f)
            }
            d.matrixAutoUpdate = !1;
            this.data.hierarchy[a].node.updateMatrix();
            d.matrixWorldNeedsUpdate = !0
        }
    }
};
THREE.KeyFrameAnimation.prototype.play = function(a, b) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = void 0 !== a ? a : !0;
        this.currentTime = void 0 !== b ? b : 0;
        this.startTimeMs = b;
        this.startTime = 1E7;
        this.endTime = -this.startTime;
        var c, d = this.hierarchy.length,
            e, f;
        for (c = 0; c < d; c++) e = this.hierarchy[c], f = this.data.hierarchy[c], e.useQuaternion = !0, void 0 === f.animationCache && (f.animationCache = {}, f.animationCache.prevKey = null, f.animationCache.nextKey = null, f.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix :
            e.matrix), e = this.data.hierarchy[c].keys, e.length && (f.animationCache.prevKey = e[0], f.animationCache.nextKey = e[1], this.startTime = Math.min(e[0].time, this.startTime), this.endTime = Math.max(e[e.length - 1].time, this.endTime));
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.KeyFrameAnimation.prototype.pause = function() {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.KeyFrameAnimation.prototype.stop = function() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var a = 0; a < this.data.hierarchy.length; a++) {
        var b = this.hierarchy[a],
            c = this.data.hierarchy[a];
        if (void 0 !== c.animationCache) {
            var d = c.animationCache.originalMatrix;
            b instanceof THREE.Bone ? (d.copy(b.skinMatrix), b.skinMatrix = d) : (d.copy(b.matrix), b.matrix = d);
            delete c.animationCache
        }
    }
};
THREE.KeyFrameAnimation.prototype.update = function(a) {
    if (this.isPlaying) {
        var b, c, d, e, f = this.data.JIT.hierarchy,
            g, h, i;
        h = this.currentTime += a * this.timeScale;
        g = this.currentTime %= this.data.length;
        g < this.startTimeMs && (g = this.currentTime = this.startTimeMs + g);
        e = parseInt(Math.min(g * this.data.fps, this.data.length * this.data.fps), 10);
        if ((i = g < h) && !this.loop) {
            for (var a = 0, k = this.hierarchy.length; a < k; a++) {
                var l = this.data.hierarchy[a].keys,
                    f = this.data.hierarchy[a].sids;
                d = l.length - 1;
                e = this.hierarchy[a];
                if (l.length) {
                    for (l =
                        0; l < f.length; l++) g = f[l], (h = this.getPrevKeyWith(g, a, d)) && h.apply(g);
                    this.data.hierarchy[a].node.updateMatrix();
                    e.matrixWorldNeedsUpdate = !0
                }
            }
            this.stop()
        } else if (!(g < this.startTime)) {
            a = 0;
            for (k = this.hierarchy.length; a < k; a++) {
                d = this.hierarchy[a];
                b = this.data.hierarchy[a];
                var l = b.keys,
                    m = b.animationCache;
                if (this.JITCompile && void 0 !== f[a][e]) d instanceof THREE.Bone ? (d.skinMatrix = f[a][e], d.matrixWorldNeedsUpdate = !1) : (d.matrix = f[a][e], d.matrixWorldNeedsUpdate = !0);
                else if (l.length) {
                    this.JITCompile && m && (d instanceof THREE.Bone ? d.skinMatrix = m.originalMatrix : d.matrix = m.originalMatrix);
                    b = m.prevKey;
                    c = m.nextKey;
                    if (b && c) {
                        if (c.time <= h) {
                            if (i && this.loop) {
                                b = l[0];
                                for (c = l[1]; c.time < g;) b = c, c = l[b.index + 1]
                            } else if (!i)
                                for (var n = l.length - 1; c.time < g && c.index !== n;) b = c, c = l[b.index + 1];
                            m.prevKey = b;
                            m.nextKey = c
                        }
                        c.time >= g ? b.interpolate(c, g) : b.interpolate(c, c.time)
                    }
                    this.data.hierarchy[a].node.updateMatrix();
                    d.matrixWorldNeedsUpdate = !0
                }
            }
            if (this.JITCompile && void 0 === f[0][e]) {
                this.hierarchy[0].updateMatrixWorld(!0);
                for (a = 0; a < this.hierarchy.length; a++) f[a][e] =
                    this.hierarchy[a] instanceof THREE.Bone ? this.hierarchy[a].skinMatrix.clone() : this.hierarchy[a].matrix.clone()
            }
        }
    }
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function(a, b, c) {
    b = this.data.hierarchy[b].keys;
    for (c %= b.length; c < b.length; c++)
        if (b[c].hasTarget(a)) return b[c];
    return b[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function(a, b, c) {
    b = this.data.hierarchy[b].keys;
    for (c = 0 <= c ? c : c + b.length; 0 <= c; c--)
        if (b[c].hasTarget(a)) return b[c];
    return b[b.length - 1]
};
THREE.CubeCamera = function(a, b, c) {
    THREE.Object3D.call(this);
    var d = new THREE.PerspectiveCamera(90, 1, a, b);
    d.up.set(0, -1, 0);
    d.lookAt(new THREE.Vector3(1, 0, 0));
    this.add(d);
    var e = new THREE.PerspectiveCamera(90, 1, a, b);
    e.up.set(0, -1, 0);
    e.lookAt(new THREE.Vector3(-1, 0, 0));
    this.add(e);
    var f = new THREE.PerspectiveCamera(90, 1, a, b);
    f.up.set(0, 0, 1);
    f.lookAt(new THREE.Vector3(0, 1, 0));
    this.add(f);
    var g = new THREE.PerspectiveCamera(90, 1, a, b);
    g.up.set(0, 0, -1);
    g.lookAt(new THREE.Vector3(0, -1, 0));
    this.add(g);
    var h = new THREE.PerspectiveCamera(90,
        1, a, b);
    h.up.set(0, -1, 0);
    h.lookAt(new THREE.Vector3(0, 0, 1));
    this.add(h);
    var i = new THREE.PerspectiveCamera(90, 1, a, b);
    i.up.set(0, -1, 0);
    i.lookAt(new THREE.Vector3(0, 0, -1));
    this.add(i);
    this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    });
    this.updateCubeMap = function(a, b) {
        var c = this.renderTarget,
            n = c.generateMipmaps;
        c.generateMipmaps = !1;
        c.activeCubeFace = 0;
        a.render(b, d, c);
        c.activeCubeFace = 1;
        a.render(b, e, c);
        c.activeCubeFace =
            2;
        a.render(b, f, c);
        c.activeCubeFace = 3;
        a.render(b, g, c);
        c.activeCubeFace = 4;
        a.render(b, h, c);
        c.generateMipmaps = n;
        c.activeCubeFace = 5;
        a.render(b, i, c)
    }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CombinedCamera = function(a, b, c, d, e, f, g) {
    THREE.Camera.call(this);
    this.fov = c;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = b / 2;
    this.bottom = -b / 2;
    this.cameraO = new THREE.OrthographicCamera(a / -2, a / 2, b / 2, b / -2, f, g);
    this.cameraP = new THREE.PerspectiveCamera(c, a / b, d, e);
    this.zoom = 1;
    this.toPerspective()
};
THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective = function() {
    this.near = this.cameraP.near;
    this.far = this.cameraP.far;
    this.cameraP.fov = this.fov / this.zoom;
    this.cameraP.updateProjectionMatrix();
    this.projectionMatrix = this.cameraP.projectionMatrix;
    this.inPerspectiveMode = !0;
    this.inOrthographicMode = !1
};
THREE.CombinedCamera.prototype.toOrthographic = function() {
    var a = this.cameraP.aspect,
        b = (this.cameraP.near + this.cameraP.far) / 2,
        b = Math.tan(this.fov / 2) * b,
        a = 2 * b * a / 2,
        b = b / this.zoom,
        a = a / this.zoom;
    this.cameraO.left = -a;
    this.cameraO.right = a;
    this.cameraO.top = b;
    this.cameraO.bottom = -b;
    this.cameraO.updateProjectionMatrix();
    this.near = this.cameraO.near;
    this.far = this.cameraO.far;
    this.projectionMatrix = this.cameraO.projectionMatrix;
    this.inPerspectiveMode = !1;
    this.inOrthographicMode = !0
};
THREE.CombinedCamera.prototype.setSize = function(a, b) {
    this.cameraP.aspect = a / b;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = b / 2;
    this.bottom = -b / 2
};
THREE.CombinedCamera.prototype.setFov = function(a) {
    this.fov = a;
    this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.updateProjectionMatrix = function() {
    this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
};
THREE.CombinedCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    var c = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
    this.setFov(c);
    return c
};
THREE.CombinedCamera.prototype.setZoom = function(a) {
    this.zoom = a;
    this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.toFrontView = function() {
    this.rotation.x = 0;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBackView = function() {
    this.rotation.x = 0;
    this.rotation.y = Math.PI;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toLeftView = function() {
    this.rotation.x = 0;
    this.rotation.y = -Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toRightView = function() {
    this.rotation.x = 0;
    this.rotation.y = Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toTopView = function() {
    this.rotation.x = -Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBottomView = function() {
    this.rotation.x = Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.AsteriskGeometry = function(a, b) {
    THREE.Geometry.call(this);
    for (var c = 0.707 * a, d = 0.707 * b, c = [
            [a, 0, 0],
            [b, 0, 0],
            [-a, 0, 0],
            [-b, 0, 0],
            [0, a, 0],
            [0, b, 0],
            [0, -a, 0],
            [0, -b, 0],
            [0, 0, a],
            [0, 0, b],
            [0, 0, -a],
            [0, 0, -b],
            [c, c, 0],
            [d, d, 0],
            [-c, -c, 0],
            [-d, -d, 0],
            [c, -c, 0],
            [d, -d, 0],
            [-c, c, 0],
            [-d, d, 0],
            [c, 0, c],
            [d, 0, d],
            [-c, 0, -c],
            [-d, 0, -d],
            [c, 0, -c],
            [d, 0, -d],
            [-c, 0, c],
            [-d, 0, d],
            [0, c, c],
            [0, d, d],
            [0, -c, -c],
            [0, -d, -d],
            [0, c, -c],
            [0, d, -d],
            [0, -c, c],
            [0, -d, d]
        ], d = 0, e = c.length; d < e; d++) this.vertices.push(new THREE.Vector3(c[d][0], c[d][1], c[d][2]))
};
THREE.AsteriskGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    var a = a || 50,
        c = void 0 !== c ? c : 0,
        d = void 0 !== d ? d : 2 * Math.PI,
        b = void 0 !== b ? Math.max(3, b) : 8,
        e, f = [];
    e = new THREE.Vector3;
    var g = new THREE.Vector2(0.5, 0.5);
    this.vertices.push(e);
    f.push(g);
    for (e = 0; e <= b; e++) {
        var h = new THREE.Vector3;
        h.x = a * Math.cos(c + e / b * d);
        h.y = a * Math.sin(c + e / b * d);
        this.vertices.push(h);
        f.push(new THREE.Vector2((h.x / a + 1) / 2, -(h.y / a + 1) / 2 + 1))
    }
    c = new THREE.Vector3(0, 0, -1);
    for (e = 1; e <= b; e++) this.faces.push(new THREE.Face3(e, e + 1, 0, [c, c, c])),
        this.faceVertexUvs[0].push([f[e], f[e + 1], g]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function(a, b, c, d, e, f) {
    function g(a, b, c, d, e, f, g, p) {
        var q, y = h.widthSegments,
            v = h.heightSegments,
            z = e / 2,
            t = f / 2,
            A = h.vertices.length;
        if ("x" === a && "y" === b || "y" === a && "x" === b) q = "z";
        else if ("x" === a && "z" === b || "z" === a && "x" === b) q = "y", v = h.depthSegments;
        else if ("z" === a && "y" === b || "y" === a && "z" === b) q = "x", y = h.depthSegments;
        var I = y + 1,
            C = v + 1,
            x = e / y,
            G = f / v,
            J = new THREE.Vector3;
        J[q] = 0 < g ? 1 : -1;
        for (e = 0; e < C; e++)
            for (f = 0; f < I; f++) {
                var E = new THREE.Vector3;
                E[a] = (f * x - z) * c;
                E[b] = (e * G - t) * d;
                E[q] = g;
                h.vertices.push(E)
            }
        for (e =
            0; e < v; e++)
            for (f = 0; f < y; f++) a = new THREE.Face4(f + I * e + A, f + I * (e + 1) + A, f + 1 + I * (e + 1) + A, f + 1 + I * e + A), a.normal.copy(J), a.vertexNormals.push(J.clone(), J.clone(), J.clone(), J.clone()), a.materialIndex = p, h.faces.push(a), h.faceVertexUvs[0].push([new THREE.Vector2(f / y, 1 - e / v), new THREE.Vector2(f / y, 1 - (e + 1) / v), new THREE.Vector2((f + 1) / y, 1 - (e + 1) / v), new THREE.Vector2((f + 1) / y, 1 - e / v)])
    }
    THREE.Geometry.call(this);
    var h = this;
    this.width = a;
    this.height = b;
    this.depth = c;
    this.widthSegments = d || 1;
    this.heightSegments = e || 1;
    this.depthSegments =
        f || 1;
    a = this.width / 2;
    b = this.height / 2;
    c = this.depth / 2;
    g("z", "y", -1, -1, this.depth, this.height, a, 0);
    g("z", "y", 1, -1, this.depth, this.height, -a, 1);
    g("x", "z", 1, 1, this.width, this.depth, b, 2);
    g("x", "z", 1, -1, this.width, this.depth, -b, 3);
    g("x", "y", 1, -1, this.width, this.height, c, 4);
    g("x", "y", -1, -1, this.width, this.height, -c, 5);
    this.computeCentroids();
    this.mergeVertices()
};
THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    var a = void 0 !== a ? a : 20,
        b = void 0 !== b ? b : 20,
        c = void 0 !== c ? c : 100,
        g = c / 2,
        d = d || 8,
        e = e || 1,
        h, i, k = [],
        l = [];
    for (i = 0; i <= e; i++) {
        var m = [],
            n = [],
            s = i / e,
            r = s * (b - a) + a;
        for (h = 0; h <= d; h++) {
            var p = h / d,
                q = new THREE.Vector3;
            q.x = r * Math.sin(2 * p * Math.PI);
            q.y = -s * c + g;
            q.z = r * Math.cos(2 * p * Math.PI);
            this.vertices.push(q);
            m.push(this.vertices.length - 1);
            n.push(new THREE.Vector2(p, 1 - s))
        }
        k.push(m);
        l.push(n)
    }
    c = (b - a) / c;
    for (h = 0; h < d; h++) {
        0 !== a ? (m = this.vertices[k[0][h]].clone(),
            n = this.vertices[k[0][h + 1]].clone()) : (m = this.vertices[k[1][h]].clone(), n = this.vertices[k[1][h + 1]].clone());
        m.setY(Math.sqrt(m.x * m.x + m.z * m.z) * c).normalize();
        n.setY(Math.sqrt(n.x * n.x + n.z * n.z) * c).normalize();
        for (i = 0; i < e; i++) {
            var s = k[i][h],
                r = k[i + 1][h],
                p = k[i + 1][h + 1],
                q = k[i][h + 1],
                y = m.clone(),
                v = m.clone(),
                z = n.clone(),
                t = n.clone(),
                A = l[i][h].clone(),
                I = l[i + 1][h].clone(),
                C = l[i + 1][h + 1].clone(),
                x = l[i][h + 1].clone();
            this.faces.push(new THREE.Face4(s, r, p, q, [y, v, z, t]));
            this.faceVertexUvs[0].push([A, I, C, x])
        }
    }
    if (!f && 0 <
        a) {
        this.vertices.push(new THREE.Vector3(0, g, 0));
        for (h = 0; h < d; h++) s = k[0][h], r = k[0][h + 1], p = this.vertices.length - 1, y = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(0, 1, 0), z = new THREE.Vector3(0, 1, 0), A = l[0][h].clone(), I = l[0][h + 1].clone(), C = new THREE.Vector2(I.u, 0), this.faces.push(new THREE.Face3(s, r, p, [y, v, z])), this.faceVertexUvs[0].push([A, I, C])
    }
    if (!f && 0 < b) {
        this.vertices.push(new THREE.Vector3(0, -g, 0));
        for (h = 0; h < d; h++) s = k[i][h + 1], r = k[i][h], p = this.vertices.length - 1, y = new THREE.Vector3(0, -1, 0), v = new THREE.Vector3(0,
            -1, 0), z = new THREE.Vector3(0, -1, 0), A = l[i][h + 1].clone(), I = l[i][h].clone(), C = new THREE.Vector2(I.u, 1), this.faces.push(new THREE.Face3(s, r, p, [y, v, z])), this.faceVertexUvs[0].push([A, I, C])
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function(a, b) {
    "undefined" !== typeof a && (THREE.Geometry.call(this), a = a instanceof Array ? a : [a], this.shapebb = a[a.length - 1].getBoundingBox(), this.addShapeList(a, b), this.computeCentroids(), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = a.length, d = 0; d < c; d++) this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function(a, b) {
    function c(a, b, c) {
        b || console.log("die");
        return b.clone().multiplyScalar(c).add(a)
    }

    function d(a, b, c) {
        var d = THREE.ExtrudeGeometry.__v1,
            e = THREE.ExtrudeGeometry.__v2,
            f = THREE.ExtrudeGeometry.__v3,
            g = THREE.ExtrudeGeometry.__v4,
            i = THREE.ExtrudeGeometry.__v5,
            h = THREE.ExtrudeGeometry.__v6;
        d.set(a.x - b.x, a.y - b.y);
        e.set(a.x - c.x, a.y - c.y);
        d = d.normalize();
        e = e.normalize();
        f.set(-d.y, d.x);
        g.set(e.y, -e.x);
        i.copy(a).add(f);
        h.copy(a).add(g);
        if (i.equals(h)) return g.clone();
        i.copy(b).add(f);
        h.copy(c).add(g);
        f = d.dot(g);
        g = h.sub(i).dot(g);
        0 === f && (console.log("Either infinite or no solutions!"), 0 === g ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
        g /= f;
        return 0 > g ? (b = Math.atan2(b.y - a.y, b.x - a.x), a = Math.atan2(c.y - a.y, c.x - a.x), b > a && (a += 2 * Math.PI), c = (b + a) / 2, a = -Math.cos(c), c = -Math.sin(c), new THREE.Vector2(a, c)) : d.multiplyScalar(g).add(i).sub(a).clone()
    }

    function e(c, d) {
        var e, f;
        for (M = c.length; 0 <= --M;) {
            e = M;
            f = M - 1;
            0 > f && (f = c.length - 1);
            for (var g = 0, i = s + 2 * l,
                    g = 0; g < i; g++) {
                var h = fa * g,
                    k = fa * (g + 1),
                    m = d + e + h,
                    h = d + f + h,
                    n = d + f + k,
                    k = d + e + k,
                    p = c,
                    q = g,
                    r = i,
                    t = e,
                    y = f,
                    m = m + H,
                    h = h + H,
                    n = n + H,
                    k = k + H;
                E.faces.push(new THREE.Face4(m, h, n, k, null, null, v));
                m = z.generateSideWallUV(E, a, p, b, m, h, n, k, q, r, t, y);
                E.faceVertexUvs[0].push(m)
            }
        }
    }

    function f(a, b, c) {
        E.vertices.push(new THREE.Vector3(a, b, c))
    }

    function g(c, d, e, f) {
        c += H;
        d += H;
        e += H;
        E.faces.push(new THREE.Face3(c, d, e, null, null, y));
        c = f ? z.generateBottomUV(E, a, b, c, d, e) : z.generateTopUV(E, a, b, c, d, e);
        E.faceVertexUvs[0].push(c)
    }
    var h = void 0 !== b.amount ? b.amount :
        100,
        i = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
        k = void 0 !== b.bevelSize ? b.bevelSize : i - 2,
        l = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
        m = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
        n = void 0 !== b.curveSegments ? b.curveSegments : 12,
        s = void 0 !== b.steps ? b.steps : 1,
        r = b.extrudePath,
        p, q = !1,
        y = b.material,
        v = b.extrudeMaterial,
        z = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator,
        t, A, I, C;
    r && (p = r.getSpacedPoints(s), q = !0, m = !1, t = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(r, s,
        !1), A = new THREE.Vector3, I = new THREE.Vector3, C = new THREE.Vector3);
    m || (k = i = l = 0);
    var x, G, J, E = this,
        H = this.vertices.length,
        n = a.extractPoints(n),
        B = n.shape,
        n = n.holes;
    if (r = !THREE.Shape.Utils.isClockWise(B)) {
        B = B.reverse();
        G = 0;
        for (J = n.length; G < J; G++) x = n[G], THREE.Shape.Utils.isClockWise(x) && (n[G] = x.reverse());
        r = !1
    }
    var W = THREE.Shape.Utils.triangulateShape(B, n),
        r = B;
    G = 0;
    for (J = n.length; G < J; G++) x = n[G], B = B.concat(x);
    var F, K, L, U, fa = B.length,
        Ca = W.length,
        $a = [],
        M = 0,
        ca = r.length;
    F = ca - 1;
    for (K = M + 1; M < ca; M++, F++, K++) F === ca &&
        (F = 0), K === ca && (K = 0), $a[M] = d(r[M], r[F], r[K]);
    var qa = [],
        ha, ra = $a.concat();
    G = 0;
    for (J = n.length; G < J; G++) {
        x = n[G];
        ha = [];
        M = 0;
        ca = x.length;
        F = ca - 1;
        for (K = M + 1; M < ca; M++, F++, K++) F === ca && (F = 0), K === ca && (K = 0), ha[M] = d(x[M], x[F], x[K]);
        qa.push(ha);
        ra = ra.concat(ha)
    }
    for (F = 0; F < l; F++) {
        x = F / l;
        L = i * (1 - x);
        K = k * Math.sin(x * Math.PI / 2);
        M = 0;
        for (ca = r.length; M < ca; M++) U = c(r[M], $a[M], K), f(U.x, U.y, -L);
        G = 0;
        for (J = n.length; G < J; G++) {
            x = n[G];
            ha = qa[G];
            M = 0;
            for (ca = x.length; M < ca; M++) U = c(x[M], ha[M], K), f(U.x, U.y, -L)
        }
    }
    K = k;
    for (M = 0; M < fa; M++) U = m ? c(B[M],
        ra[M], K) : B[M], q ? (I.copy(t.normals[0]).multiplyScalar(U.x), A.copy(t.binormals[0]).multiplyScalar(U.y), C.copy(p[0]).add(I).add(A), f(C.x, C.y, C.z)) : f(U.x, U.y, 0);
    for (x = 1; x <= s; x++)
        for (M = 0; M < fa; M++) U = m ? c(B[M], ra[M], K) : B[M], q ? (I.copy(t.normals[x]).multiplyScalar(U.x), A.copy(t.binormals[x]).multiplyScalar(U.y), C.copy(p[x]).add(I).add(A), f(C.x, C.y, C.z)) : f(U.x, U.y, h / s * x);
    for (F = l - 1; 0 <= F; F--) {
        x = F / l;
        L = i * (1 - x);
        K = k * Math.sin(x * Math.PI / 2);
        M = 0;
        for (ca = r.length; M < ca; M++) U = c(r[M], $a[M], K), f(U.x, U.y, h + L);
        G = 0;
        for (J = n.length; G <
            J; G++) {
            x = n[G];
            ha = qa[G];
            M = 0;
            for (ca = x.length; M < ca; M++) U = c(x[M], ha[M], K), q ? f(U.x, U.y + p[s - 1].y, p[s - 1].x + L) : f(U.x, U.y, h + L)
        }
    }
    if (m) {
        i = 0 * fa;
        for (M = 0; M < Ca; M++) h = W[M], g(h[2] + i, h[1] + i, h[0] + i, !0);
        i = fa * (s + 2 * l);
        for (M = 0; M < Ca; M++) h = W[M], g(h[0] + i, h[1] + i, h[2] + i, !1)
    } else {
        for (M = 0; M < Ca; M++) h = W[M], g(h[2], h[1], h[0], !0);
        for (M = 0; M < Ca; M++) h = W[M], g(h[0] + fa * s, h[1] + fa * s, h[2] + fa * s, !1)
    }
    h = 0;
    e(r, h);
    h += r.length;
    G = 0;
    for (J = n.length; G < J; G++) x = n[G], e(x, h), h += x.length
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(a, b, c, d, e, f) {
        b = a.vertices[e].x;
        e = a.vertices[e].y;
        c = a.vertices[f].x;
        f = a.vertices[f].y;
        return [new THREE.Vector2(a.vertices[d].x, a.vertices[d].y), new THREE.Vector2(b, e), new THREE.Vector2(c, f)]
    },
    generateBottomUV: function(a, b, c, d, e, f) {
        return this.generateTopUV(a, b, c, d, e, f)
    },
    generateSideWallUV: function(a, b, c, d, e, f, g, h) {
        var b = a.vertices[e].x,
            c = a.vertices[e].y,
            e = a.vertices[e].z,
            d = a.vertices[f].x,
            i = a.vertices[f].y,
            f = a.vertices[f].z,
            k = a.vertices[g].x,
            l = a.vertices[g].y,
            g = a.vertices[g].z,
            m = a.vertices[h].x,
            n = a.vertices[h].y,
            a = a.vertices[h].z;
        return 0.01 > Math.abs(c - i) ? [new THREE.Vector2(b, 1 - e), new THREE.Vector2(d, 1 - f), new THREE.Vector2(k, 1 - g), new THREE.Vector2(m, 1 - a)] : [new THREE.Vector2(c, 1 - e), new THREE.Vector2(i, 1 - f), new THREE.Vector2(l, 1 - g), new THREE.Vector2(n, 1 - a)]
    }
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.ShapeGeometry = function(a, b) {
    THREE.Geometry.call(this);
    !1 === a instanceof Array && (a = [a]);
    this.shapebb = a[a.length - 1].getBoundingBox();
    this.addShapeList(a, b);
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = 0, d = a.length; c < d; c++) this.addShape(a[c], b);
    return this
};
THREE.ShapeGeometry.prototype.addShape = function(a, b) {
    void 0 === b && (b = {});
    var c = b.material,
        d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator,
        e, f, g, h = this.vertices.length;
    e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
    var i = e.shape,
        k = e.holes;
    if (!THREE.Shape.Utils.isClockWise(i)) {
        i = i.reverse();
        e = 0;
        for (f = k.length; e < f; e++) g = k[e], THREE.Shape.Utils.isClockWise(g) && (k[e] = g.reverse())
    }
    var l = THREE.Shape.Utils.triangulateShape(i, k);
    e = 0;
    for (f = k.length; e < f; e++) g = k[e],
        i = i.concat(g);
    k = i.length;
    f = l.length;
    for (e = 0; e < k; e++) g = i[e], this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
    for (e = 0; e < f; e++) k = l[e], i = k[0] + h, g = k[1] + h, k = k[2] + h, this.faces.push(new THREE.Face3(i, g, k, null, null, c)), this.faceVertexUvs[0].push(d.generateBottomUV(this, a, b, i, g, k))
};
THREE.LatheGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    for (var b = b || 12, c = c || 0, d = d || 2 * Math.PI, e = 1 / (a.length - 1), f = 1 / b, g = 0, h = b; g <= h; g++)
        for (var i = c + g * f * d, k = Math.cos(i), l = Math.sin(i), i = 0, m = a.length; i < m; i++) {
            var n = a[i],
                s = new THREE.Vector3;
            s.x = k * n.x - l * n.y;
            s.y = l * n.x + k * n.y;
            s.z = n.z;
            this.vertices.push(s)
        }
    c = a.length;
    g = 0;
    for (h = b; g < h; g++) {
        i = 0;
        for (m = a.length - 1; i < m; i++) d = b = i + c * g, l = b + c, k = b + 1 + c, this.faces.push(new THREE.Face4(d, l, k, b + 1)), k = g * f, b = i * e, d = k + f, l = b + e, this.faceVertexUvs[0].push([new THREE.Vector2(k,
            b), new THREE.Vector2(d, b), new THREE.Vector2(d, l), new THREE.Vector2(k, l)])
    }
    this.mergeVertices();
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    this.width = a;
    this.height = b;
    this.widthSegments = c || 1;
    this.heightSegments = d || 1;
    for (var c = a / 2, e = b / 2, d = this.widthSegments, f = this.heightSegments, g = d + 1, h = f + 1, i = this.width / d, k = this.height / f, l = new THREE.Vector3(0, 0, 1), a = 0; a < h; a++)
        for (b = 0; b < g; b++) this.vertices.push(new THREE.Vector3(b * i - c, -(a * k - e), 0));
    for (a = 0; a < f; a++)
        for (b = 0; b < d; b++) c = new THREE.Face4(b + g * a, b + g * (a + 1), b + 1 + g * (a + 1), b + 1 + g * a), c.normal.copy(l), c.vertexNormals.push(l.clone(), l.clone(),
            l.clone(), l.clone()), this.faces.push(c), this.faceVertexUvs[0].push([new THREE.Vector2(b / d, 1 - a / f), new THREE.Vector2(b / d, 1 - (a + 1) / f), new THREE.Vector2((b + 1) / d, 1 - (a + 1) / f), new THREE.Vector2((b + 1) / d, 1 - a / f)]);
    this.computeCentroids()
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function(a, b, c, d, e, f, g) {
    THREE.Geometry.call(this);
    this.radius = a || 50;
    this.widthSegments = Math.max(3, Math.floor(b) || 8);
    this.heightSegments = Math.max(2, Math.floor(c) || 6);
    for (var d = void 0 !== d ? d : 0, e = void 0 !== e ? e : 2 * Math.PI, f = void 0 !== f ? f : 0, g = void 0 !== g ? g : Math.PI, h = [], i = [], c = 0; c <= this.heightSegments; c++) {
        for (var k = [], l = [], b = 0; b <= this.widthSegments; b++) {
            var m = b / this.widthSegments,
                n = c / this.heightSegments,
                s = new THREE.Vector3;
            s.x = -this.radius * Math.cos(d + m * e) * Math.sin(f + n * g);
            s.y = this.radius *
                Math.cos(f + n * g);
            s.z = this.radius * Math.sin(d + m * e) * Math.sin(f + n * g);
            this.vertices.push(s);
            k.push(this.vertices.length - 1);
            l.push(new THREE.Vector2(m, 1 - n))
        }
        h.push(k);
        i.push(l)
    }
    for (c = 0; c < this.heightSegments; c++)
        for (b = 0; b < this.widthSegments; b++) {
            var d = h[c][b + 1],
                e = h[c][b],
                f = h[c + 1][b],
                g = h[c + 1][b + 1],
                k = this.vertices[d].clone().normalize(),
                l = this.vertices[e].clone().normalize(),
                m = this.vertices[f].clone().normalize(),
                n = this.vertices[g].clone().normalize(),
                s = i[c][b + 1].clone(),
                r = i[c][b].clone(),
                p = i[c + 1][b].clone(),
                q = i[c + 1][b + 1].clone();
            Math.abs(this.vertices[d].y) === this.radius ? (this.faces.push(new THREE.Face3(d, f, g, [k, m, n])), this.faceVertexUvs[0].push([s, p, q])) : Math.abs(this.vertices[f].y) === this.radius ? (this.faces.push(new THREE.Face3(d, e, f, [k, l, m])), this.faceVertexUvs[0].push([s, r, p])) : (this.faces.push(new THREE.Face4(d, e, f, g, [k, l, m, n])), this.faceVertexUvs[0].push([s, r, p, q]))
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function(a, b) {
    var c = THREE.FontUtils.generateShapes(a, b);
    b.amount = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    THREE.ExtrudeGeometry.call(this, c, b)
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function(a, b, c, d, e) {
    THREE.Geometry.call(this);
    this.radius = a || 100;
    this.tube = b || 40;
    this.radialSegments = c || 8;
    this.tubularSegments = d || 6;
    this.arc = e || 2 * Math.PI;
    e = new THREE.Vector3;
    a = [];
    b = [];
    for (c = 0; c <= this.radialSegments; c++)
        for (d = 0; d <= this.tubularSegments; d++) {
            var f = d / this.tubularSegments * this.arc,
                g = 2 * c / this.radialSegments * Math.PI;
            e.x = this.radius * Math.cos(f);
            e.y = this.radius * Math.sin(f);
            var h = new THREE.Vector3;
            h.x = (this.radius + this.tube * Math.cos(g)) * Math.cos(f);
            h.y = (this.radius + this.tube *
                Math.cos(g)) * Math.sin(f);
            h.z = this.tube * Math.sin(g);
            this.vertices.push(h);
            a.push(new THREE.Vector2(d / this.tubularSegments, c / this.radialSegments));
            b.push(h.clone().sub(e).normalize())
        }
    for (c = 1; c <= this.radialSegments; c++)
        for (d = 1; d <= this.tubularSegments; d++) {
            var e = (this.tubularSegments + 1) * c + d - 1,
                f = (this.tubularSegments + 1) * (c - 1) + d - 1,
                g = (this.tubularSegments + 1) * (c - 1) + d,
                h = (this.tubularSegments + 1) * c + d,
                i = new THREE.Face4(e, f, g, h, [b[e], b[f], b[g], b[h]]);
            i.normal.add(b[e]);
            i.normal.add(b[f]);
            i.normal.add(b[g]);
            i.normal.add(b[h]);
            i.normal.normalize();
            this.faces.push(i);
            this.faceVertexUvs[0].push([a[e].clone(), a[f].clone(), a[g].clone(), a[h].clone()])
        }
    this.computeCentroids()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function(a, b, c, d, e, f, g) {
    function h(a, b, c, d, e, f) {
        var g = Math.cos(a);
        Math.cos(b);
        b = Math.sin(a);
        a *= c / d;
        c = Math.cos(a);
        g *= 0.5 * e * (2 + c);
        b = 0.5 * e * (2 + c) * b;
        e = 0.5 * f * e * Math.sin(a);
        return new THREE.Vector3(g, b, e)
    }
    THREE.Geometry.call(this);
    this.radius = a || 100;
    this.tube = b || 40;
    this.radialSegments = c || 64;
    this.tubularSegments = d || 8;
    this.p = e || 2;
    this.q = f || 3;
    this.heightScale = g || 1;
    this.grid = Array(this.radialSegments);
    c = new THREE.Vector3;
    d = new THREE.Vector3;
    e = new THREE.Vector3;
    for (a = 0; a < this.radialSegments; ++a) {
        this.grid[a] =
            Array(this.tubularSegments);
        for (b = 0; b < this.tubularSegments; ++b) {
            var i = 2 * (a / this.radialSegments) * this.p * Math.PI,
                g = 2 * (b / this.tubularSegments) * Math.PI,
                f = h(i, g, this.q, this.p, this.radius, this.heightScale),
                i = h(i + 0.01, g, this.q, this.p, this.radius, this.heightScale);
            c.subVectors(i, f);
            d.addVectors(i, f);
            e.crossVectors(c, d);
            d.crossVectors(e, c);
            e.normalize();
            d.normalize();
            i = -this.tube * Math.cos(g);
            g = this.tube * Math.sin(g);
            f.x += i * d.x + g * e.x;
            f.y += i * d.y + g * e.y;
            f.z += i * d.z + g * e.z;
            this.grid[a][b] = this.vertices.push(new THREE.Vector3(f.x,
                f.y, f.z)) - 1
        }
    }
    for (a = 0; a < this.radialSegments; ++a)
        for (b = 0; b < this.tubularSegments; ++b) {
            var e = (a + 1) % this.radialSegments,
                f = (b + 1) % this.tubularSegments,
                c = this.grid[a][b],
                d = this.grid[e][b],
                e = this.grid[e][f],
                f = this.grid[a][f],
                g = new THREE.Vector2(a / this.radialSegments, b / this.tubularSegments),
                i = new THREE.Vector2((a + 1) / this.radialSegments, b / this.tubularSegments),
                k = new THREE.Vector2((a + 1) / this.radialSegments, (b + 1) / this.tubularSegments),
                l = new THREE.Vector2(a / this.radialSegments, (b + 1) / this.tubularSegments);
            this.faces.push(new THREE.Face4(c,
                d, e, f));
            this.faceVertexUvs[0].push([g, i, k, l])
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.path = a;
    this.segments = b || 64;
    this.radius = c || 1;
    this.radiusSegments = d || 8;
    this.closed = e || !1;
    f && (this.debug = new THREE.Object3D);
    this.grid = [];
    var g, h, e = this.segments + 1,
        i, k, l, f = new THREE.Vector3,
        m, n, s, b = new THREE.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed);
    m = b.tangents;
    n = b.normals;
    s = b.binormals;
    this.tangents = m;
    this.normals = n;
    this.binormals = s;
    for (b = 0; b < e; b++) {
        this.grid[b] = [];
        d = b / (e - 1);
        l = a.getPointAt(d);
        d = m[b];
        g = n[b];
        h = s[b];
        this.debug && (this.debug.add(new THREE.ArrowHelper(d, l, c, 255)), this.debug.add(new THREE.ArrowHelper(g, l, c, 16711680)), this.debug.add(new THREE.ArrowHelper(h, l, c, 65280)));
        for (d = 0; d < this.radiusSegments; d++) i = 2 * (d / this.radiusSegments) * Math.PI, k = -this.radius * Math.cos(i), i = this.radius * Math.sin(i), f.copy(l), f.x += k * g.x + i * h.x, f.y += k * g.y + i * h.y, f.z += k * g.z + i * h.z, this.grid[b][d] = this.vertices.push(new THREE.Vector3(f.x, f.y, f.z)) - 1
    }
    for (b = 0; b < this.segments; b++)
        for (d = 0; d < this.radiusSegments; d++) e = this.closed ?
            (b + 1) % this.segments : b + 1, f = (d + 1) % this.radiusSegments, a = this.grid[b][d], c = this.grid[e][d], e = this.grid[e][f], f = this.grid[b][f], m = new THREE.Vector2(b / this.segments, d / this.radiusSegments), n = new THREE.Vector2((b + 1) / this.segments, d / this.radiusSegments), s = new THREE.Vector2((b + 1) / this.segments, (d + 1) / this.radiusSegments), g = new THREE.Vector2(b / this.segments, (d + 1) / this.radiusSegments), this.faces.push(new THREE.Face4(a, c, e, f)), this.faceVertexUvs[0].push([m, n, s, g]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function(a, b, c) {
    new THREE.Vector3;
    var d = new THREE.Vector3;
    new THREE.Vector3;
    var e = [],
        f = [],
        g = [],
        h = new THREE.Vector3,
        i = new THREE.Matrix4,
        b = b + 1,
        k, l, m;
    this.tangents = e;
    this.normals = f;
    this.binormals = g;
    for (k = 0; k < b; k++) l = k / (b - 1), e[k] = a.getTangentAt(l), e[k].normalize();
    f[0] = new THREE.Vector3;
    g[0] = new THREE.Vector3;
    a = Number.MAX_VALUE;
    k = Math.abs(e[0].x);
    l = Math.abs(e[0].y);
    m = Math.abs(e[0].z);
    k <= a && (a = k, d.set(1, 0, 0));
    l <= a && (a = l, d.set(0, 1, 0));
    m <= a && d.set(0, 0, 1);
    h.crossVectors(e[0],
        d).normalize();
    f[0].crossVectors(e[0], h);
    g[0].crossVectors(e[0], f[0]);
    for (k = 1; k < b; k++) f[k] = f[k - 1].clone(), g[k] = g[k - 1].clone(), h.crossVectors(e[k - 1], e[k]), 1E-4 < h.length() && (h.normalize(), d = Math.acos(e[k - 1].dot(e[k])), f[k].applyMatrix4(i.makeRotationAxis(h, d))), g[k].crossVectors(e[k], f[k]);
    if (c) {
        d = Math.acos(f[0].dot(f[b - 1]));
        d /= b - 1;
        0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d);
        for (k = 1; k < b; k++) f[k].applyMatrix4(i.makeRotationAxis(e[k], d * k)), g[k].crossVectors(e[k], f[k])
    }
};
THREE.PolyhedronGeometry = function(a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = i.vertices.push(b) - 1;
        var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5,
            a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5;
        b.uv = new THREE.Vector2(c, 1 - a);
        return b
    }

    function f(a, b, c, d) {
        1 > d ? (d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]), d.centroid.add(a).add(b).add(c).divideScalar(3), d.normal = d.centroid.clone().normalize(), i.faces.push(d), d = Math.atan2(d.centroid.z, -d.centroid.x), i.faceVertexUvs[0].push([h(a.uv,
            a, d), h(b.uv, b, d), h(c.uv, c, d)])) : (d -= 1, f(a, g(a, b), g(a, c), d), f(g(a, b), b, g(b, c), d), f(g(a, c), g(b, c), c, d), f(g(a, b), g(b, c), g(a, c), d))
    }

    function g(a, b) {
        m[a.index] || (m[a.index] = []);
        m[b.index] || (m[b.index] = []);
        var c = m[a.index][b.index];
        void 0 === c && (m[a.index][b.index] = m[b.index][a.index] = c = e((new THREE.Vector3).addVectors(a, b).divideScalar(2)));
        return c
    }

    function h(a, b, c) {
        0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
        0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + 0.5, a.y));
        return a
    }
    THREE.Geometry.call(this);
    for (var c = c || 1, d = d || 0, i = this, k = 0, l = a.length; k < l; k++) e(new THREE.Vector3(a[k][0], a[k][1], a[k][2]));
    for (var m = [], a = this.vertices, k = 0, l = b.length; k < l; k++) f(a[b[k][0]], a[b[k][1]], a[b[k][2]], d);
    this.mergeVertices();
    k = 0;
    for (l = this.vertices.length; k < l; k++) this.vertices[k].multiplyScalar(c);
    this.computeCentroids();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function(a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [
        [-1, c, 0],
        [1, c, 0],
        [-1, -c, 0],
        [1, -c, 0],
        [0, -1, c],
        [0, 1, c],
        [0, -1, -c],
        [0, 1, -c],
        [c, 0, -1],
        [c, 0, 1],
        [-c, 0, -1],
        [-c, 0, 1]
    ], [
        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],
        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],
        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],
        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1]
    ], a, b)
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
    ], [
        [0, 2, 4],
        [0, 4, 3],
        [0, 3, 5],
        [0, 5, 2],
        [1, 2, 5],
        [1, 5, 3],
        [1, 3, 4],
        [1, 4, 2]
    ], a, b)
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [
        [1, 1, 1],
        [-1, -1, 1],
        [-1, 1, -1],
        [1, -1, -1]
    ], [
        [2, 1, 0],
        [0, 3, 2],
        [1, 3, 0],
        [2, 3, 1]
    ], a, b)
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    var e = this.vertices,
        f = this.faces,
        g = this.faceVertexUvs[0],
        d = void 0 === d ? !1 : d,
        h, i, k, l, m = b + 1;
    for (h = 0; h <= c; h++) {
        l = h / c;
        for (i = 0; i <= b; i++) k = i / b, k = a(k, l), e.push(k)
    }
    var n, s, r, p;
    for (h = 0; h < c; h++)
        for (i = 0; i < b; i++) a = h * m + i, e = h * m + i + 1, l = (h + 1) * m + i, k = (h + 1) * m + i + 1, n = new THREE.Vector2(i / b, h / c), s = new THREE.Vector2((i + 1) / b, h / c), r = new THREE.Vector2(i / b, (h + 1) / c), p = new THREE.Vector2((i + 1) / b, (h + 1) / c), d ? (f.push(new THREE.Face3(a, e, l)), f.push(new THREE.Face3(e,
            k, l)), g.push([n, s, r]), g.push([s, p, r])) : (f.push(new THREE.Face4(a, e, k, l)), g.push([n, s, p, r]));
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ConvexGeometry = function(a) {
    function b(a) {
        var b = a.length();
        return new THREE.Vector2(a.x / b, a.y / b)
    }
    THREE.Geometry.call(this);
    for (var c = [
            [0, 1, 2],
            [0, 2, 1]
        ], d = 3; d < a.length; d++) {
        var e = d,
            f = a[e].clone(),
            g = f.length();
        f.x += g * 2E-6 * (Math.random() - 0.5);
        f.y += g * 2E-6 * (Math.random() - 0.5);
        f.z += g * 2E-6 * (Math.random() - 0.5);
        for (var g = [], h = 0; h < c.length;) {
            var i = c[h],
                k = f,
                l = a[i[0]],
                m;
            m = l;
            var n = a[i[1]],
                s = a[i[2]],
                r = new THREE.Vector3,
                p = new THREE.Vector3;
            r.subVectors(s, n);
            p.subVectors(m, n);
            r.cross(p);
            r.normalize();
            m = r;
            l = m.dot(l);
            if (m.dot(k) >= l) {
                for (k = 0; 3 > k; k++) {
                    l = [i[k], i[(k + 1) % 3]];
                    m = !0;
                    for (n = 0; n < g.length; n++)
                        if (g[n][0] === l[1] && g[n][1] === l[0]) {
                            g[n] = g[g.length - 1];
                            g.pop();
                            m = !1;
                            break
                        } m && g.push(l)
                }
                c[h] = c[c.length - 1];
                c.pop()
            } else h++
        }
        for (n = 0; n < g.length; n++) c.push([g[n][0], g[n][1], e])
    }
    e = 0;
    f = Array(a.length);
    for (d = 0; d < c.length; d++) {
        g = c[d];
        for (h = 0; 3 > h; h++) void 0 === f[g[h]] && (f[g[h]] = e++, this.vertices.push(a[g[h]])), g[h] = f[g[h]]
    }
    for (d = 0; d < c.length; d++) this.faces.push(new THREE.Face3(c[d][0], c[d][1], c[d][2]));
    for (d = 0; d < this.faces.length; d++) g =
        this.faces[d], this.faceVertexUvs[0].push([b(this.vertices[g.a]), b(this.vertices[g.b]), b(this.vertices[g.c])]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.ConvexGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function(a) {
    var b = new THREE.Geometry;
    b.vertices.push(new THREE.Vector3, new THREE.Vector3(a || 1, 0, 0), new THREE.Vector3, new THREE.Vector3(0, a || 1, 0), new THREE.Vector3, new THREE.Vector3(0, 0, a || 1));
    b.colors.push(new THREE.Color(16711680), new THREE.Color(16755200), new THREE.Color(65280), new THREE.Color(11206400), new THREE.Color(255), new THREE.Color(43775));
    a = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.Line.call(this, b, a, THREE.LinePieces)
};
THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ArrowHelper = function(a, b, c, d) {
    THREE.Object3D.call(this);
    void 0 === c && (c = 20);
    void 0 === d && (d = 16776960);
    var e = new THREE.Geometry;
    e.vertices.push(new THREE.Vector3(0, 0, 0));
    e.vertices.push(new THREE.Vector3(0, 1, 0));
    this.line = new THREE.Line(e, new THREE.LineBasicMaterial({
        color: d
    }));
    this.add(this.line);
    e = new THREE.CylinderGeometry(0, 0.05, 0.25, 5, 1);
    this.cone = new THREE.Mesh(e, new THREE.MeshBasicMaterial({
        color: d
    }));
    this.cone.position.set(0, 1, 0);
    this.add(this.cone);
    b instanceof THREE.Vector3 && (this.position =
        b);
    this.setDirection(a);
    this.setLength(c)
};
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function(a) {
    var b = THREE.ArrowHelper.__v1.copy(a).normalize();
    0.999 < b.y ? this.rotation.set(0, 0, 0) : -0.999 > b.y ? this.rotation.set(Math.PI, 0, 0) : (a = THREE.ArrowHelper.__v2.set(b.z, 0, -b.x).normalize(), b = Math.acos(b.y), a = THREE.ArrowHelper.__q1.setFromAxisAngle(a, b), this.rotation.setEulerFromQuaternion(a, this.eulerOrder))
};
THREE.ArrowHelper.prototype.setLength = function(a) {
    this.scale.set(a, a, a)
};
THREE.ArrowHelper.prototype.setColor = function(a) {
    this.line.material.color.setHex(a);
    this.cone.material.color.setHex(a)
};
THREE.ArrowHelper.__v1 = new THREE.Vector3;
THREE.ArrowHelper.__v2 = new THREE.Vector3;
THREE.ArrowHelper.__q1 = new THREE.Quaternion;
THREE.CameraHelper = function(a) {
    function b(a, b, d) {
        c(a, d);
        c(b, d)
    }

    function c(a, b) {
        d.geometry.vertices.push(new THREE.Vector3);
        d.geometry.colors.push(new THREE.Color(b));
        void 0 === d.pointMap[a] && (d.pointMap[a] = []);
        d.pointMap[a].push(d.geometry.vertices.length - 1)
    }
    THREE.Line.call(this);
    var d = this;
    this.geometry = new THREE.Geometry;
    this.material = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    });
    this.type = THREE.LinePieces;
    this.matrixWorld = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = {};
    b("n1", "n2", 16755200);
    b("n2", "n4", 16755200);
    b("n4", "n3", 16755200);
    b("n3", "n1", 16755200);
    b("f1", "f2", 16755200);
    b("f2", "f4", 16755200);
    b("f4", "f3", 16755200);
    b("f3", "f1", 16755200);
    b("n1", "f1", 16755200);
    b("n2", "f2", 16755200);
    b("n3", "f3", 16755200);
    b("n4", "f4", 16755200);
    b("p", "n1", 16711680);
    b("p", "n2", 16711680);
    b("p", "n3", 16711680);
    b("p", "n4", 16711680);
    b("u1", "u2", 43775);
    b("u2", "u3", 43775);
    b("u3", "u1", 43775);
    b("c", "t", 16777215);
    b("p", "c", 3355443);
    b("cn1", "cn2", 3355443);
    b("cn3", "cn4", 3355443);
    b("cf1",
        "cf2", 3355443);
    b("cf3", "cf4", 3355443);
    this.camera = a;
    this.update(a)
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function() {
    function a(a, d, e, f) {
        THREE.CameraHelper.__v.set(d, e, f);
        THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v, THREE.CameraHelper.__c);
        a = b.pointMap[a];
        if (void 0 !== a) {
            d = 0;
            for (e = a.length; d < e; d++) b.geometry.vertices[a[d]].copy(THREE.CameraHelper.__v)
        }
    }
    var b = this;
    THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix);
    a("c", 0, 0, -1);
    a("t", 0, 0, 1);
    a("n1", -1, -1, -1);
    a("n2", 1, -1, -1);
    a("n3", -1, 1, -1);
    a("n4", 1, 1, -1);
    a("f1", -1, -1, 1);
    a("f2", 1, -1, 1);
    a("f3", -1, 1, 1);
    a("f4", 1, 1, 1);
    a("u1", 0.7, 1.1, -1);
    a("u2", -0.7, 1.1, -1);
    a("u3", 0, 2, -1);
    a("cf1", -1, 0, 1);
    a("cf2", 1, 0, 1);
    a("cf3", 0, -1, 1);
    a("cf4", 0, 1, 1);
    a("cn1", -1, 0, -1);
    a("cn2", 1, 0, -1);
    a("cn3", 0, -1, -1);
    a("cn4", 0, 1, -1);
    this.geometry.verticesNeedUpdate = !0
};
THREE.CameraHelper.__projector = new THREE.Projector;
THREE.CameraHelper.__v = new THREE.Vector3;
THREE.CameraHelper.__c = new THREE.Camera;
THREE.DirectionalLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.position = a.position;
    this.direction = new THREE.Vector3;
    this.direction.subVectors(a.target.position, a.position);
    var c = THREE.Math.clamp(a.intensity, 0, 1);
    this.color = a.color.clone();
    this.color.multiplyScalar(c);
    var c = this.color.getHex(),
        d = new THREE.SphereGeometry(b, 16, 8),
        e = new THREE.AsteriskGeometry(1.25 * b, 2.25 * b),
        f = new THREE.MeshBasicMaterial({
            color: c,
            fog: !1
        }),
        g = new THREE.LineBasicMaterial({
            color: c,
            fog: !1
        });
    this.lightSphere =
        new THREE.Mesh(d, f);
    this.lightRays = new THREE.Line(e, g, THREE.LinePieces);
    this.add(this.lightSphere);
    this.add(this.lightRays);
    this.lightSphere.properties.isGizmo = !0;
    this.lightSphere.properties.gizmoSubject = a;
    this.lightSphere.properties.gizmoRoot = this;
    this.targetSphere = null;
    void 0 !== a.target.properties.targetInverse && (d = new THREE.SphereGeometry(b, 8, 4), e = new THREE.MeshBasicMaterial({
        color: c,
        wireframe: !0,
        fog: !1
    }), this.targetSphere = new THREE.Mesh(d, e), this.targetSphere.position = a.target.position, this.targetSphere.properties.isGizmo = !0, this.targetSphere.properties.gizmoSubject = a.target, this.targetSphere.properties.gizmoRoot = this.targetSphere, c = new THREE.LineDashedMaterial({
        color: c,
        dashSize: 4,
        gapSize: 4,
        opacity: 0.75,
        transparent: !0,
        fog: !1
    }), d = new THREE.Geometry, d.vertices.push(this.position.clone()), d.vertices.push(this.targetSphere.position.clone()), d.computeLineDistances(), this.targetLine = new THREE.Line(d, c), this.targetLine.properties.isGizmo = !0);
    this.properties.isGizmo = !0
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.update = function() {
    this.direction.subVectors(this.light.target.position, this.light.position);
    var a = THREE.Math.clamp(this.light.intensity, 0, 1);
    this.color.copy(this.light.color);
    this.color.multiplyScalar(a);
    this.lightSphere.material.color.copy(this.color);
    this.lightRays.material.color.copy(this.color);
    null !== this.targetSphere && (this.targetSphere.material.color.copy(this.color), this.targetLine.material.color.copy(this.color), this.targetLine.geometry.vertices[0].copy(this.light.position),
        this.targetLine.geometry.vertices[1].copy(this.light.target.position), this.targetLine.geometry.computeLineDistances(), this.targetLine.geometry.verticesNeedUpdate = !0)
};
THREE.HemisphereLightHelper = function(a, b, c) {
    THREE.Object3D.call(this);
    this.light = a;
    this.position = a.position;
    var d = THREE.Math.clamp(a.intensity, 0, 1);
    this.color = a.color.clone();
    this.color.multiplyScalar(d);
    var e = this.color.getHex();
    this.groundColor = a.groundColor.clone();
    this.groundColor.multiplyScalar(d);
    for (var d = this.groundColor.getHex(), f = new THREE.SphereGeometry(b, 16, 8, 0, 2 * Math.PI, 0, 0.5 * Math.PI), g = new THREE.SphereGeometry(b, 16, 8, 0, 2 * Math.PI, 0.5 * Math.PI, Math.PI), h = new THREE.MeshBasicMaterial({
            color: e,
            fog: !1
        }), i = new THREE.MeshBasicMaterial({
            color: d,
            fog: !1
        }), k = 0, l = f.faces.length; k < l; k++) f.faces[k].materialIndex = 0;
    k = 0;
    for (l = g.faces.length; k < l; k++) g.faces[k].materialIndex = 1;
    THREE.GeometryUtils.merge(f, g);
    this.lightSphere = new THREE.Mesh(f, new THREE.MeshFaceMaterial([h, i]));
    this.lightArrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1.1 * (b + c), 0), c, e);
    this.lightArrow.rotation.x = Math.PI;
    this.lightArrowGround = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1.1 *
        (b + c), 0), c, d);
    b = new THREE.Object3D;
    b.rotation.x = 0.5 * -Math.PI;
    b.add(this.lightSphere);
    b.add(this.lightArrow);
    b.add(this.lightArrowGround);
    this.add(b);
    this.lightSphere.properties.isGizmo = !0;
    this.lightSphere.properties.gizmoSubject = a;
    this.lightSphere.properties.gizmoRoot = this;
    this.properties.isGizmo = !0;
    this.target = new THREE.Vector3;
    this.lookAt(this.target)
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.update = function() {
    var a = THREE.Math.clamp(this.light.intensity, 0, 1);
    this.color.copy(this.light.color);
    this.color.multiplyScalar(a);
    this.groundColor.copy(this.light.groundColor);
    this.groundColor.multiplyScalar(a);
    this.lightSphere.material.materials[0].color.copy(this.color);
    this.lightSphere.material.materials[1].color.copy(this.groundColor);
    this.lightArrow.setColor(this.color.getHex());
    this.lightArrowGround.setColor(this.groundColor.getHex());
    this.lookAt(this.target)
};
THREE.PointLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.position = a.position;
    var c = THREE.Math.clamp(a.intensity, 0, 1);
    this.color = a.color.clone();
    this.color.multiplyScalar(c);
    var d = this.color.getHex(),
        c = new THREE.SphereGeometry(b, 16, 8),
        e = new THREE.AsteriskGeometry(1.25 * b, 2.25 * b),
        f = new THREE.IcosahedronGeometry(1, 2),
        g = new THREE.MeshBasicMaterial({
            color: d,
            fog: !1
        }),
        h = new THREE.LineBasicMaterial({
            color: d,
            fog: !1
        }),
        d = new THREE.MeshBasicMaterial({
            color: d,
            fog: !1,
            wireframe: !0,
            opacity: 0.1,
            transparent: !0
        });
    this.lightSphere = new THREE.Mesh(c, g);
    this.lightRays = new THREE.Line(e, h, THREE.LinePieces);
    this.lightDistance = new THREE.Mesh(f, d);
    c = a.distance;
    0 === c ? this.lightDistance.visible = !1 : this.lightDistance.scale.set(c, c, c);
    this.add(this.lightSphere);
    this.add(this.lightRays);
    this.add(this.lightDistance);
    this.lightSphere.properties.isGizmo = !0;
    this.lightSphere.properties.gizmoSubject = a;
    this.lightSphere.properties.gizmoRoot = this;
    this.properties.isGizmo = !0
};
THREE.PointLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointLightHelper.prototype.update = function() {
    var a = THREE.Math.clamp(this.light.intensity, 0, 1);
    this.color.copy(this.light.color);
    this.color.multiplyScalar(a);
    this.lightSphere.material.color.copy(this.color);
    this.lightRays.material.color.copy(this.color);
    this.lightDistance.material.color.copy(this.color);
    a = this.light.distance;
    0 === a ? this.lightDistance.visible = !1 : (this.lightDistance.visible = !0, this.lightDistance.scale.set(a, a, a))
};
THREE.SpotLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.position = a.position;
    this.direction = new THREE.Vector3;
    this.direction.subVectors(a.target.position, a.position);
    var c = THREE.Math.clamp(a.intensity, 0, 1);
    this.color = a.color.clone();
    this.color.multiplyScalar(c);
    var c = this.color.getHex(),
        d = new THREE.SphereGeometry(b, 16, 8),
        e = new THREE.AsteriskGeometry(1.25 * b, 2.25 * b),
        f = new THREE.CylinderGeometry(1E-4, 1, 1, 8, 1, !0),
        g = new THREE.Matrix4;
    g.rotateX(-Math.PI / 2);
    g.translate(new THREE.Vector3(0,
        -0.5, 0));
    f.applyMatrix(g);
    var h = new THREE.MeshBasicMaterial({
            color: c,
            fog: !1
        }),
        g = new THREE.LineBasicMaterial({
            color: c,
            fog: !1
        }),
        i = new THREE.MeshBasicMaterial({
            color: c,
            fog: !1,
            wireframe: !0,
            opacity: 0.3,
            transparent: !0
        });
    this.lightSphere = new THREE.Mesh(d, h);
    this.lightCone = new THREE.Mesh(f, i);
    d = a.distance ? a.distance : 1E4;
    f = 2 * d * Math.tan(0.5 * a.angle);
    this.lightCone.scale.set(f, f, d);
    this.lightRays = new THREE.Line(e, g, THREE.LinePieces);
    this.gyroscope = new THREE.Gyroscope;
    this.gyroscope.add(this.lightSphere);
    this.gyroscope.add(this.lightRays);
    this.add(this.gyroscope);
    this.add(this.lightCone);
    this.lookAt(a.target.position);
    this.lightSphere.properties.isGizmo = !0;
    this.lightSphere.properties.gizmoSubject = a;
    this.lightSphere.properties.gizmoRoot = this;
    this.targetSphere = null;
    void 0 !== a.target.properties.targetInverse && (e = new THREE.SphereGeometry(b, 8, 4), g = new THREE.MeshBasicMaterial({
            color: c,
            wireframe: !0,
            fog: !1
        }), this.targetSphere = new THREE.Mesh(e, g), this.targetSphere.position = a.target.position, this.targetSphere.properties.isGizmo = !0, this.targetSphere.properties.gizmoSubject =
        a.target, this.targetSphere.properties.gizmoRoot = this.targetSphere, c = new THREE.LineDashedMaterial({
            color: c,
            dashSize: 4,
            gapSize: 4,
            opacity: 0.75,
            transparent: !0,
            fog: !1
        }), e = new THREE.Geometry, e.vertices.push(this.position.clone()), e.vertices.push(this.targetSphere.position.clone()), e.computeLineDistances(), this.targetLine = new THREE.Line(e, c), this.targetLine.properties.isGizmo = !0);
    this.properties.isGizmo = !0
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.update = function() {
    this.direction.subVectors(this.light.target.position, this.light.position);
    this.lookAt(this.light.target.position);
    var a = this.light.distance ? this.light.distance : 1E4,
        b = 2 * a * Math.tan(0.5 * this.light.angle);
    this.lightCone.scale.set(b, b, a);
    a = THREE.Math.clamp(this.light.intensity, 0, 1);
    this.color.copy(this.light.color);
    this.color.multiplyScalar(a);
    this.lightSphere.material.color.copy(this.color);
    this.lightRays.material.color.copy(this.color);
    this.lightCone.material.color.copy(this.color);
    null !== this.targetSphere && (this.targetSphere.material.color.copy(this.color), this.targetLine.material.color.copy(this.color), this.targetLine.geometry.vertices[0].copy(this.light.position), this.targetLine.geometry.vertices[1].copy(this.light.target.position), this.targetLine.geometry.computeLineDistances(), this.targetLine.geometry.verticesNeedUpdate = !0)
};
THREE.ImmediateRenderObject = function() {
    THREE.Object3D.call(this);
    this.render = function() {}
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare = function(a, b, c, d, e) {
    THREE.Object3D.call(this);
    this.lensFlares = [];
    this.positionScreen = new THREE.Vector3;
    this.customUpdateCallback = void 0;
    void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function(a, b, c, d, e, f) {
    void 0 === b && (b = -1);
    void 0 === c && (c = 0);
    void 0 === f && (f = 1);
    void 0 === e && (e = new THREE.Color(16777215));
    void 0 === d && (d = THREE.NormalBlending);
    c = Math.min(c, Math.max(0, c));
    this.lensFlares.push({
        texture: a,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: f,
        color: e,
        blending: d
    })
};
THREE.LensFlare.prototype.updateLensFlares = function() {
    var a, b = this.lensFlares.length,
        c, d = 2 * -this.positionScreen.x,
        e = 2 * -this.positionScreen.y;
    for (a = 0; a < b; a++) c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = 0.25 * c.x * Math.PI, c.rotation += 0.25 * (c.wantedRotation - c.rotation)
};
THREE.MorphBlendMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.animationsMap = {};
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1);
    this.setAnimationWeight("__default", 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function(a, b, c, d) {
    b = {
        startFrame: b,
        endFrame: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[a] = b;
    this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(a) {
    for (var b = /([a-z]+)(\d+)/, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
        var h = e.morphTargets[f].name.match(b);
        if (h && 1 < h.length) {
            var i = h[1];
            d[i] || (d[i] = {
                start: Infinity,
                end: -Infinity
            });
            h = d[i];
            f < h.start && (h.start = f);
            f > h.end && (h.end = f);
            c || (c = i)
        }
    }
    for (i in d) h = d[i], this.createAnimation(i, h.start, h.end, a);
    this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(a) {
    if (a = this.animationsMap[a]) a.direction = 1, a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(a) {
    if (a = this.animationsMap[a]) a.direction = -1, a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function(a) {
    var b = 0;
    if (a = this.animationsMap[a]) b = a.time;
    return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(a) {
    var b = -1;
    if (a = this.animationsMap[a]) b = a.duration;
    return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function(a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0, b.active = !0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function(a) {
    if (a = this.animationsMap[a]) a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function(a) {
    for (var b = 0, c = this.animationsList.length; b < c; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a;
            if (d.mirroredLoop) {
                if (d.time > d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
            } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
            var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1),
                g = d.weight;
            f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
            e = d.time % e / e;
            d.directionBackwards && (e = 1 - e);
            this.morphTargetInfluences[d.currentFrame] = e * g;
            this.morphTargetInfluences[d.lastFrame] = (1 - e) * g
        }
    }
};
THREE.LensFlarePlugin = function() {
    function a(a, c) {
        var d = b.createProgram(),
            e = b.createShader(b.FRAGMENT_SHADER),
            f = b.createShader(b.VERTEX_SHADER),
            g = "precision " + c + " float;\n";
        b.shaderSource(e, g + a.fragmentShader);
        b.shaderSource(f, g + a.vertexShader);
        b.compileShader(e);
        b.compileShader(f);
        b.attachShader(d, e);
        b.attachShader(d, f);
        b.linkProgram(d);
        return d
    }
    var b, c, d, e, f, g, h, i, k, l, m, n, s;
    this.init = function(r) {
        b = r.context;
        c = r;
        d = r.getPrecision();
        e = new Float32Array(16);
        f = new Uint16Array(6);
        r = 0;
        e[r++] = -1;
        e[r++] = -1;
        e[r++] = 0;
        e[r++] = 0;
        e[r++] = 1;
        e[r++] = -1;
        e[r++] = 1;
        e[r++] = 0;
        e[r++] = 1;
        e[r++] = 1;
        e[r++] = 1;
        e[r++] = 1;
        e[r++] = -1;
        e[r++] = 1;
        e[r++] = 0;
        e[r++] = 1;
        r = 0;
        f[r++] = 0;
        f[r++] = 1;
        f[r++] = 2;
        f[r++] = 0;
        f[r++] = 2;
        f[r++] = 3;
        g = b.createBuffer();
        h = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, g);
        b.bufferData(b.ARRAY_BUFFER, e, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
        i = b.createTexture();
        k = b.createTexture();
        b.bindTexture(b.TEXTURE_2D, i);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGB, 16, 16,
            0, b.RGB, b.UNSIGNED_BYTE, null);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
        b.bindTexture(b.TEXTURE_2D, k);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 16, 16, 0, b.RGBA, b.UNSIGNED_BYTE, null);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
        0 >= b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (l = !1, m = a(THREE.ShaderFlares.lensFlare, d)) : (l = !0, m = a(THREE.ShaderFlares.lensFlareVertexTexture, d));
        n = {};
        s = {};
        n.vertex = b.getAttribLocation(m, "position");
        n.uv = b.getAttribLocation(m, "uv");
        s.renderType = b.getUniformLocation(m, "renderType");
        s.map = b.getUniformLocation(m, "map");
        s.occlusionMap = b.getUniformLocation(m, "occlusionMap");
        s.opacity =
            b.getUniformLocation(m, "opacity");
        s.color = b.getUniformLocation(m, "color");
        s.scale = b.getUniformLocation(m, "scale");
        s.rotation = b.getUniformLocation(m, "rotation");
        s.screenPosition = b.getUniformLocation(m, "screenPosition")
    };
    this.render = function(a, d, e, f) {
        var a = a.__webglFlares,
            v = a.length;
        if (v) {
            var z = new THREE.Vector3,
                t = f / e,
                A = 0.5 * e,
                I = 0.5 * f,
                C = 16 / f,
                x = new THREE.Vector2(C * t, C),
                G = new THREE.Vector3(1, 1, 0),
                J = new THREE.Vector2(1, 1),
                E = s,
                C = n;
            b.useProgram(m);
            b.enableVertexAttribArray(n.vertex);
            b.enableVertexAttribArray(n.uv);
            b.uniform1i(E.occlusionMap, 0);
            b.uniform1i(E.map, 1);
            b.bindBuffer(b.ARRAY_BUFFER, g);
            b.vertexAttribPointer(C.vertex, 2, b.FLOAT, !1, 16, 0);
            b.vertexAttribPointer(C.uv, 2, b.FLOAT, !1, 16, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
            b.disable(b.CULL_FACE);
            b.depthMask(!1);
            var H, B, W, F, K;
            for (H = 0; H < v; H++)
                if (C = 16 / f, x.set(C * t, C), F = a[H], z.set(F.matrixWorld.elements[12], F.matrixWorld.elements[13], F.matrixWorld.elements[14]), z.applyMatrix4(d.matrixWorldInverse), z.applyProjection(d.projectionMatrix), G.copy(z), J.x = G.x * A + A,
                    J.y = G.y * I + I, l || 0 < J.x && J.x < e && 0 < J.y && J.y < f) {
                    b.activeTexture(b.TEXTURE1);
                    b.bindTexture(b.TEXTURE_2D, i);
                    b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGB, J.x - 8, J.y - 8, 16, 16, 0);
                    b.uniform1i(E.renderType, 0);
                    b.uniform2f(E.scale, x.x, x.y);
                    b.uniform3f(E.screenPosition, G.x, G.y, G.z);
                    b.disable(b.BLEND);
                    b.enable(b.DEPTH_TEST);
                    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
                    b.activeTexture(b.TEXTURE0);
                    b.bindTexture(b.TEXTURE_2D, k);
                    b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGBA, J.x - 8, J.y - 8, 16, 16, 0);
                    b.uniform1i(E.renderType, 1);
                    b.disable(b.DEPTH_TEST);
                    b.activeTexture(b.TEXTURE1);
                    b.bindTexture(b.TEXTURE_2D, i);
                    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
                    F.positionScreen.copy(G);
                    F.customUpdateCallback ? F.customUpdateCallback(F) : F.updateLensFlares();
                    b.uniform1i(E.renderType, 2);
                    b.enable(b.BLEND);
                    B = 0;
                    for (W = F.lensFlares.length; B < W; B++) K = F.lensFlares[B], 0.001 < K.opacity && 0.001 < K.scale && (G.x = K.x, G.y = K.y, G.z = K.z, C = K.size * K.scale / f, x.x = C * t, x.y = C, b.uniform3f(E.screenPosition, G.x, G.y, G.z), b.uniform2f(E.scale, x.x, x.y), b.uniform1f(E.rotation, K.rotation), b.uniform1f(E.opacity,
                        K.opacity), b.uniform3f(E.color, K.color.r, K.color.g, K.color.b), c.setBlending(K.blending, K.blendEquation, K.blendSrc, K.blendDst), c.setTexture(K.texture, 1), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0))
                } b.enable(b.CULL_FACE);
            b.enable(b.DEPTH_TEST);
            b.depthMask(!0)
        }
    }
};
THREE.ShadowMapPlugin = function() {
    var a, b, c, d, e, f, g = new THREE.Frustum,
        h = new THREE.Matrix4,
        i = new THREE.Vector3,
        k = new THREE.Vector3,
        l = new THREE.Vector3;
    this.init = function(g) {
        a = g.context;
        b = g;
        var g = THREE.ShaderLib.depthRGBA,
            i = THREE.UniformsUtils.clone(g.uniforms);
        c = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: i
        });
        d = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: i,
            morphTargets: !0
        });
        e = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: i,
            skinning: !0
        });
        f = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: i,
            morphTargets: !0,
            skinning: !0
        });
        c._shadowPass = !0;
        d._shadowPass = !0;
        e._shadowPass = !0;
        f._shadowPass = !0
    };
    this.render = function(a, c) {
        b.shadowMapEnabled && b.shadowMapAutoUpdate && this.update(a, c)
    };
    this.update = function(m, n) {
        var s, r, p, q, y, v, z, t, A, I = [];
        q = 0;
        a.clearColor(1, 1, 1, 1);
        a.disable(a.BLEND);
        a.enable(a.CULL_FACE);
        a.frontFace(a.CCW);
        b.shadowMapCullFace === THREE.CullFaceFront ?
            a.cullFace(a.FRONT) : a.cullFace(a.BACK);
        b.setDepthTest(!0);
        s = 0;
        for (r = m.__lights.length; s < r; s++)
            if (p = m.__lights[s], p.castShadow)
                if (p instanceof THREE.DirectionalLight && p.shadowCascade)
                    for (y = 0; y < p.shadowCascadeCount; y++) {
                        var C;
                        if (p.shadowCascadeArray[y]) C = p.shadowCascadeArray[y];
                        else {
                            A = p;
                            z = y;
                            C = new THREE.DirectionalLight;
                            C.isVirtual = !0;
                            C.onlyShadow = !0;
                            C.castShadow = !0;
                            C.shadowCameraNear = A.shadowCameraNear;
                            C.shadowCameraFar = A.shadowCameraFar;
                            C.shadowCameraLeft = A.shadowCameraLeft;
                            C.shadowCameraRight = A.shadowCameraRight;
                            C.shadowCameraBottom = A.shadowCameraBottom;
                            C.shadowCameraTop = A.shadowCameraTop;
                            C.shadowCameraVisible = A.shadowCameraVisible;
                            C.shadowDarkness = A.shadowDarkness;
                            C.shadowBias = A.shadowCascadeBias[z];
                            C.shadowMapWidth = A.shadowCascadeWidth[z];
                            C.shadowMapHeight = A.shadowCascadeHeight[z];
                            C.pointsWorld = [];
                            C.pointsFrustum = [];
                            t = C.pointsWorld;
                            v = C.pointsFrustum;
                            for (var x = 0; 8 > x; x++) t[x] = new THREE.Vector3, v[x] = new THREE.Vector3;
                            t = A.shadowCascadeNearZ[z];
                            A = A.shadowCascadeFarZ[z];
                            v[0].set(-1, -1, t);
                            v[1].set(1, -1, t);
                            v[2].set(-1,
                                1, t);
                            v[3].set(1, 1, t);
                            v[4].set(-1, -1, A);
                            v[5].set(1, -1, A);
                            v[6].set(-1, 1, A);
                            v[7].set(1, 1, A);
                            C.originalCamera = n;
                            v = new THREE.Gyroscope;
                            v.position = p.shadowCascadeOffset;
                            v.add(C);
                            v.add(C.target);
                            n.add(v);
                            p.shadowCascadeArray[y] = C;
                            console.log("Created virtualLight", C)
                        }
                        z = p;
                        t = y;
                        A = z.shadowCascadeArray[t];
                        A.position.copy(z.position);
                        A.target.position.copy(z.target.position);
                        A.lookAt(A.target);
                        A.shadowCameraVisible = z.shadowCameraVisible;
                        A.shadowDarkness = z.shadowDarkness;
                        A.shadowBias = z.shadowCascadeBias[t];
                        v = z.shadowCascadeNearZ[t];
                        z = z.shadowCascadeFarZ[t];
                        A = A.pointsFrustum;
                        A[0].z = v;
                        A[1].z = v;
                        A[2].z = v;
                        A[3].z = v;
                        A[4].z = z;
                        A[5].z = z;
                        A[6].z = z;
                        A[7].z = z;
                        I[q] = C;
                        q++
                    } else I[q] = p, q++;
        s = 0;
        for (r = I.length; s < r; s++) {
            p = I[s];
            p.shadowMap || (y = THREE.LinearFilter, b.shadowMapType === THREE.PCFSoftShadowMap && (y = THREE.NearestFilter), p.shadowMap = new THREE.WebGLRenderTarget(p.shadowMapWidth, p.shadowMapHeight, {
                minFilter: y,
                magFilter: y,
                format: THREE.RGBAFormat
            }), p.shadowMapSize = new THREE.Vector2(p.shadowMapWidth, p.shadowMapHeight), p.shadowMatrix = new THREE.Matrix4);
            if (!p.shadowCamera) {
                if (p instanceof THREE.SpotLight) p.shadowCamera = new THREE.PerspectiveCamera(p.shadowCameraFov, p.shadowMapWidth / p.shadowMapHeight, p.shadowCameraNear, p.shadowCameraFar);
                else if (p instanceof THREE.DirectionalLight) p.shadowCamera = new THREE.OrthographicCamera(p.shadowCameraLeft, p.shadowCameraRight, p.shadowCameraTop, p.shadowCameraBottom, p.shadowCameraNear, p.shadowCameraFar);
                else {
                    console.error("Unsupported light type for shadow");
                    continue
                }
                m.add(p.shadowCamera);
                b.autoUpdateScene && m.updateMatrixWorld()
            }
            p.shadowCameraVisible &&
                !p.cameraHelper && (p.cameraHelper = new THREE.CameraHelper(p.shadowCamera), p.shadowCamera.add(p.cameraHelper));
            if (p.isVirtual && C.originalCamera == n) {
                y = n;
                q = p.shadowCamera;
                v = p.pointsFrustum;
                A = p.pointsWorld;
                i.set(Infinity, Infinity, Infinity);
                k.set(-Infinity, -Infinity, -Infinity);
                for (z = 0; 8 > z; z++) t = A[z], t.copy(v[z]), THREE.ShadowMapPlugin.__projector.unprojectVector(t, y), t.applyMatrix4(q.matrixWorldInverse), t.x < i.x && (i.x = t.x), t.x > k.x && (k.x = t.x), t.y < i.y && (i.y = t.y), t.y > k.y && (k.y = t.y), t.z < i.z && (i.z = t.z), t.z > k.z &&
                    (k.z = t.z);
                q.left = i.x;
                q.right = k.x;
                q.top = k.y;
                q.bottom = i.y;
                q.updateProjectionMatrix()
            }
            q = p.shadowMap;
            v = p.shadowMatrix;
            y = p.shadowCamera;
            y.position.getPositionFromMatrix(p.matrixWorld);
            l.getPositionFromMatrix(p.target.matrixWorld);
            y.lookAt(l);
            y.updateMatrixWorld();
            y.matrixWorldInverse.getInverse(y.matrixWorld);
            p.cameraHelper && (p.cameraHelper.visible = p.shadowCameraVisible);
            p.shadowCameraVisible && p.cameraHelper.update();
            v.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
            v.multiply(y.projectionMatrix);
            v.multiply(y.matrixWorldInverse);
            h.multiplyMatrices(y.projectionMatrix, y.matrixWorldInverse);
            g.setFromMatrix(h);
            b.setRenderTarget(q);
            b.clear();
            A = m.__webglObjects;
            p = 0;
            for (q = A.length; p < q; p++)
                if (z = A[p], v = z.object, z.render = !1, v.visible && v.castShadow && (!(v instanceof THREE.Mesh || v instanceof THREE.ParticleSystem) || !v.frustumCulled || g.intersectsObject(v))) v._modelViewMatrix.multiplyMatrices(y.matrixWorldInverse, v.matrixWorld), z.render = !0;
            p = 0;
            for (q = A.length; p < q; p++) z = A[p], z.render && (v = z.object, z = z.buffer, x = v.material instanceof THREE.MeshFaceMaterial ?
                v.material.materials[0] : v.material, t = 0 < v.geometry.morphTargets.length && x.morphTargets, x = v instanceof THREE.SkinnedMesh && x.skinning, t = v.customDepthMaterial ? v.customDepthMaterial : x ? t ? f : e : t ? d : c, z instanceof THREE.BufferGeometry ? b.renderBufferDirect(y, m.__lights, null, t, z, v) : b.renderBuffer(y, m.__lights, null, t, z, v));
            A = m.__webglObjectsImmediate;
            p = 0;
            for (q = A.length; p < q; p++) z = A[p], v = z.object, v.visible && v.castShadow && (v._modelViewMatrix.multiplyMatrices(y.matrixWorldInverse, v.matrixWorld), b.renderImmediateObject(y,
                m.__lights, null, c, v))
        }
        s = b.getClearColor();
        r = b.getClearAlpha();
        a.clearColor(s.r, s.g, s.b, r);
        a.enable(a.BLEND);
        b.shadowMapCullFace === THREE.CullFaceFront && a.cullFace(a.BACK)
    }
};
THREE.ShadowMapPlugin.__projector = new THREE.Projector;
THREE.SpritePlugin = function() {
    function a(a, b) {
        return a.z !== b.z ? b.z - a.z : b.id - a.id
    }
    var b, c, d, e, f, g, h, i, k, l;
    this.init = function(a) {
        b = a.context;
        c = a;
        d = a.getPrecision();
        e = new Float32Array(16);
        f = new Uint16Array(6);
        a = 0;
        e[a++] = -1;
        e[a++] = -1;
        e[a++] = 0;
        e[a++] = 0;
        e[a++] = 1;
        e[a++] = -1;
        e[a++] = 1;
        e[a++] = 0;
        e[a++] = 1;
        e[a++] = 1;
        e[a++] = 1;
        e[a++] = 1;
        e[a++] = -1;
        e[a++] = 1;
        e[a++] = 0;
        e[a++] = 1;
        a = 0;
        f[a++] = 0;
        f[a++] = 1;
        f[a++] = 2;
        f[a++] = 0;
        f[a++] = 2;
        f[a++] = 3;
        g = b.createBuffer();
        h = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, g);
        b.bufferData(b.ARRAY_BUFFER,
            e, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
        var a = THREE.ShaderSprite.sprite,
            n = b.createProgram(),
            s = b.createShader(b.FRAGMENT_SHADER),
            r = b.createShader(b.VERTEX_SHADER),
            p = "precision " + d + " float;\n";
        b.shaderSource(s, p + a.fragmentShader);
        b.shaderSource(r, p + a.vertexShader);
        b.compileShader(s);
        b.compileShader(r);
        b.attachShader(n, s);
        b.attachShader(n, r);
        b.linkProgram(n);
        i = n;
        k = {};
        l = {};
        k.position = b.getAttribLocation(i, "position");
        k.uv = b.getAttribLocation(i,
            "uv");
        l.uvOffset = b.getUniformLocation(i, "uvOffset");
        l.uvScale = b.getUniformLocation(i, "uvScale");
        l.rotation = b.getUniformLocation(i, "rotation");
        l.scale = b.getUniformLocation(i, "scale");
        l.alignment = b.getUniformLocation(i, "alignment");
        l.color = b.getUniformLocation(i, "color");
        l.map = b.getUniformLocation(i, "map");
        l.opacity = b.getUniformLocation(i, "opacity");
        l.useScreenCoordinates = b.getUniformLocation(i, "useScreenCoordinates");
        l.sizeAttenuation = b.getUniformLocation(i, "sizeAttenuation");
        l.screenPosition = b.getUniformLocation(i,
            "screenPosition");
        l.modelViewMatrix = b.getUniformLocation(i, "modelViewMatrix");
        l.projectionMatrix = b.getUniformLocation(i, "projectionMatrix");
        l.fogType = b.getUniformLocation(i, "fogType");
        l.fogDensity = b.getUniformLocation(i, "fogDensity");
        l.fogNear = b.getUniformLocation(i, "fogNear");
        l.fogFar = b.getUniformLocation(i, "fogFar");
        l.fogColor = b.getUniformLocation(i, "fogColor");
        l.alphaTest = b.getUniformLocation(i, "alphaTest")
    };
    this.render = function(d, e, f, r) {
        var p = d.__webglSprites,
            q = p.length;
        if (q) {
            var y = k,
                v = l,
                z = r /
                f,
                f = 0.5 * f,
                t = 0.5 * r;
            b.useProgram(i);
            b.enableVertexAttribArray(y.position);
            b.enableVertexAttribArray(y.uv);
            b.disable(b.CULL_FACE);
            b.enable(b.BLEND);
            b.bindBuffer(b.ARRAY_BUFFER, g);
            b.vertexAttribPointer(y.position, 2, b.FLOAT, !1, 16, 0);
            b.vertexAttribPointer(y.uv, 2, b.FLOAT, !1, 16, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
            b.uniformMatrix4fv(v.projectionMatrix, !1, e.projectionMatrix.elements);
            b.activeTexture(b.TEXTURE0);
            b.uniform1i(v.map, 0);
            var A = y = 0,
                I = d.fog;
            I ? (b.uniform3f(v.fogColor, I.color.r, I.color.g, I.color.b),
                I instanceof THREE.Fog ? (b.uniform1f(v.fogNear, I.near), b.uniform1f(v.fogFar, I.far), b.uniform1i(v.fogType, 1), A = y = 1) : I instanceof THREE.FogExp2 && (b.uniform1f(v.fogDensity, I.density), b.uniform1i(v.fogType, 2), A = y = 2)) : (b.uniform1i(v.fogType, 0), A = y = 0);
            for (var C, x, G = [], I = 0; I < q; I++) C = p[I], x = C.material, C.visible && 0 !== x.opacity && (x.useScreenCoordinates ? C.z = -C.position.z : (C._modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, C.matrixWorld), C.z = -C._modelViewMatrix.elements[14]));
            p.sort(a);
            for (I = 0; I < q; I++) C =
                p[I], x = C.material, C.visible && 0 !== x.opacity && (x.map && x.map.image && x.map.image.width) && (b.uniform1f(v.alphaTest, x.alphaTest), !0 === x.useScreenCoordinates ? (b.uniform1i(v.useScreenCoordinates, 1), b.uniform3f(v.screenPosition, (C.position.x * c.devicePixelRatio - f) / f, (t - C.position.y * c.devicePixelRatio) / t, Math.max(0, Math.min(1, C.position.z))), G[0] = c.devicePixelRatio, G[1] = c.devicePixelRatio) : (b.uniform1i(v.useScreenCoordinates, 0), b.uniform1i(v.sizeAttenuation, x.sizeAttenuation ? 1 : 0), b.uniformMatrix4fv(v.modelViewMatrix,
                    !1, C._modelViewMatrix.elements), G[0] = 1, G[1] = 1), e = d.fog && x.fog ? A : 0, y !== e && (b.uniform1i(v.fogType, e), y = e), e = 1 / (x.scaleByViewport ? r : 1), G[0] *= e * z * C.scale.x, G[1] *= e * C.scale.y, b.uniform2f(v.uvScale, x.uvScale.x, x.uvScale.y), b.uniform2f(v.uvOffset, x.uvOffset.x, x.uvOffset.y), b.uniform2f(v.alignment, x.alignment.x, x.alignment.y), b.uniform1f(v.opacity, x.opacity), b.uniform3f(v.color, x.color.r, x.color.g, x.color.b), b.uniform1f(v.rotation, C.rotation), b.uniform2fv(v.scale, G), c.setBlending(x.blending, x.blendEquation,
                    x.blendSrc, x.blendDst), c.setDepthTest(x.depthTest), c.setDepthWrite(x.depthWrite), c.setTexture(x.map, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0));
            b.enable(b.CULL_FACE)
        }
    }
};
THREE.DepthPassPlugin = function() {
    this.enabled = !1;
    this.renderTarget = null;
    var a, b, c, d, e, f, g = new THREE.Frustum,
        h = new THREE.Matrix4;
    this.init = function(g) {
        a = g.context;
        b = g;
        var g = THREE.ShaderLib.depthRGBA,
            h = THREE.UniformsUtils.clone(g.uniforms);
        c = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h
        });
        d = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            morphTargets: !0
        });
        e = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            skinning: !0
        });
        f = new THREE.ShaderMaterial({
            fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,
            uniforms: h,
            morphTargets: !0,
            skinning: !0
        });
        c._shadowPass = !0;
        d._shadowPass = !0;
        e._shadowPass = !0;
        f._shadowPass = !0
    };
    this.render = function(a, b) {
        this.enabled && this.update(a, b)
    };
    this.update = function(i, k) {
        var l, m, n, s, r, p;
        a.clearColor(1, 1, 1, 1);
        a.disable(a.BLEND);
        b.setDepthTest(!0);
        b.autoUpdateScene && i.updateMatrixWorld();
        k.matrixWorldInverse.getInverse(k.matrixWorld);
        h.multiplyMatrices(k.projectionMatrix,
            k.matrixWorldInverse);
        g.setFromMatrix(h);
        b.setRenderTarget(this.renderTarget);
        b.clear();
        p = i.__webglObjects;
        l = 0;
        for (m = p.length; l < m; l++)
            if (n = p[l], r = n.object, n.render = !1, r.visible && (!(r instanceof THREE.Mesh || r instanceof THREE.ParticleSystem) || !r.frustumCulled || g.intersectsObject(r))) r._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, r.matrixWorld), n.render = !0;
        var q;
        l = 0;
        for (m = p.length; l < m; l++)
            if (n = p[l], n.render && (r = n.object, n = n.buffer, !(r instanceof THREE.ParticleSystem) || r.customDepthMaterial))(q =
                r.material instanceof THREE.MeshFaceMaterial ? r.material.materials[0] : r.material) && b.setMaterialFaces(r.material), s = 0 < r.geometry.morphTargets.length && q.morphTargets, q = r instanceof THREE.SkinnedMesh && q.skinning, s = r.customDepthMaterial ? r.customDepthMaterial : q ? s ? f : e : s ? d : c, n instanceof THREE.BufferGeometry ? b.renderBufferDirect(k, i.__lights, null, s, n, r) : b.renderBuffer(k, i.__lights, null, s, n, r);
        p = i.__webglObjectsImmediate;
        l = 0;
        for (m = p.length; l < m; l++) n = p[l], r = n.object, r.visible && (r._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,
            r.matrixWorld), b.renderImmediateObject(k, i.__lights, null, c, r));
        l = b.getClearColor();
        m = b.getClearAlpha();
        a.clearColor(l.r, l.g, l.b, m);
        a.enable(a.BLEND)
    }
};
THREE.ShaderFlares = {
    lensFlareVertexTexture: {
        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
    },
    lensFlare: {
        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
    }
};
THREE.ShaderSprite = {
    sprite: {
        vertexShader: "uniform int useScreenCoordinates;\nuniform int sizeAttenuation;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
        fragmentShader: "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"
    }
};


/* var SEPARATION = 100,
        AMOUNTX = 100,
        AMOUNTY = 50;
 
    var container;
	var destination;
    var camera, scene, renderer;
 
    var particles, particle, count = 0;
 
    var mouseX = 85,
        mouseY = -342;
 
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
 
    init();
    animate();
 
    function init() {
		
		 if(jQuery('canvas').length > 0)
		{
			jQuery('canvas').remove();
		} 
 
        //container = document.createElement('');
		//container = document.createElement('.wave-effect');
        destination = document.getElementById("WaveEffect");
		//document.body.appendChild(container);
		//destination.appendChild(container);
 
        camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
 
        scene = new THREE.Scene();
 
        particles = new Array();
 
        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial({
 
            color: 0x008aff,
            program: function(context) {
 
                context.beginPath();
                context.arc(0, 0, .6, 0, PI2, true);
                context.fill();
 
            }
 
        });
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle = particles[i++] = new THREE.Particle(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                scene.add(particle);
 
            }
 
        }
 
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        //container.appendChild(renderer.domElement);
        //alert(renderer.domElement.html());
		destination.appendChild(renderer.domElement);
 
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchstart', onDocumentTouchStart, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);
 
        //
 
        window.addEventListener('resize', onWindowResize, false);
		
		//window.addEventListener('orientationchange', onWindowResize, false);
 
    }
 
    function onWindowResize() {
 
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
 
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
 
        renderer.setSize(window.innerWidth, window.innerHeight);
 
    }
 
    //
 
    function onDocumentMouseMove(event) {
 
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
 
    }
 
    function onDocumentTouchStart(event) {
 
        if (event.touches.length === 1) {
 
            event.preventDefault();
 
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
 
        }
 
    }
 
    function onDocumentTouchMove(event) {
 
        if (event.touches.length === 1) {
 
            event.preventDefault();
 
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
 
        }
 
    }
 
    //
 
    function animate() {
 
        requestAnimationFrame(animate);
 
        render();
 
 
    }
 
    function render() {
 
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        camera.lookAt(scene.position);
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
 
            }
        }
 
        renderer.render(scene, camera);
        count += 0.1;
} */

jQuery(window).on("resize", function(e) {

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    /* init(); */
    /* animate(); */
});
;(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,i){"use strict";(function(t,n){i.d(e,"e",function(){return r}),i.d(e,"g",function(){return o}),i.d(e,"f",function(){return a}),i.d(e,"c",function(){return l}),i.d(e,"a",function(){return h}),i.d(e,"b",function(){return c}),i.d(e,"d",function(){return u});
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
Object.assign(ps.prototype,{beforeStart_:ps.prototype.copySampleValue_,afterEnd_:ps.prototype.copySampleValue_}),ds.prototype=Object.assign(Object.create(ps.prototype),{constructor:ds,DefaultSettings_:{endingStart:Re,endingEnd:Re},intervalChanged_:function(t,e,i){var n=this.parameterPositions,r=t-2,a=t+1,o=n[r],s=n[a];if(void 0===o)switch(this.getSettings_().endingStart){case Ce:r=t,o=2*e-i;break;case ze:o=e+n[r=n.length-2]-n[r+1];break;default:r=t,o=i}if(void 0===s)switch(this.getSettings_().endingEnd){case Ce:a=t,s=2*i-e;break;case ze:a=1,s=i+n[1]-n[0];break;default:a=t-1,s=e}var l=.5*(i-e),h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(s-i),this._offsetPrev=r*h,this._offsetNext=a*h},interpolate_:function(t,e,i,n){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,l=s-o,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,p=this._weightNext,d=(i-e)/(n-e),f=d*d,m=f*d,g=-u*m+2*u*f-u*d,v=(1+u)*m+(-1.5-2*u)*f+(-.5+u)*d+1,q=(-1-p)*m+(1.5+p)*f+.5*d,y=p*m-p*f,x=0;x!==o;++x)r[x]=g*a[h+x]+v*a[l+x]+q*a[s+x]+y*a[c+x];return r}}),fs.prototype=Object.assign(Object.create(ps.prototype),{constructor:fs,interpolate_:function(t,e,i,n){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,l=s-o,h=(i-e)/(n-e),c=1-h,u=0;u!==o;++u)r[u]=a[l+u]*c+a[s+u]*h;return r}}),ms.prototype=Object.assign(Object.create(ps.prototype),{constructor:ms,interpolate_:function(t){return this.copySampleValue_(t-1)}}),Object.assign(gs,{toJSON:function(t){var e,i=t.constructor;if(void 0!==i.toJSON)e=i.toJSON(t);else{e={name:t.name,times:us.convertArray(t.times,Array),values:us.convertArray(t.values,Array)};var n=t.getInterpolation();n!==t.DefaultInterpolation&&(e.interpolation=n)}return e.type=t.ValueTypeName,e}}),Object.assign(gs.prototype,{constructor:gs,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Pe,InterpolantFactoryMethodDiscrete:function(t){return new ms(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new fs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new ds(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){var e;switch(t){case Ae:e=this.InterpolantFactoryMethodDiscrete;break;case Pe:e=this.InterpolantFactoryMethodLinear;break;case Le:e=this.InterpolantFactoryMethodSmooth}if(void 0===e){var i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Le}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(0!==t)for(var e=this.times,i=0,n=e.length;i!==n;++i)e[i]+=t;return this},scale:function(t){if(1!==t)for(var e=this.times,i=0,n=e.length;i!==n;++i)e[i]*=t;return this},trim:function(t,e){for(var i=this.times,n=i.length,r=0,a=n-1;r!==n&&i[r]<t;)++r;for(;-1!==a&&i[a]>e;)--a;if(++a,0!==r||a!==n){r>=a&&(r=(a=Math.max(a,1))-1);var o=this.getValueSize();this.times=us.arraySlice(i,r,a),this.values=us.arraySlice(this.values,r*o,a*o)}return this},validate:function(){var t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);var i=this.times,n=this.values,r=i.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);for(var a=null,o=0;o!==r;o++){var s=i[o];if("number"==typeof s&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),t=!1;break}if(null!==a&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),t=!1;break}a=s}if(void 0!==n&&us.isTypedArray(n)){o=0;for(var l=n.length;o!==l;++o){var h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}}return t},optimize:function(){for(var t=this.times,e=this.values,i=this.getValueSize(),n=this.getInterpolation()===Le,r=1,a=t.length-1,o=1;o<a;++o){var s=!1,l=t[o];if(l!==t[o+1]&&(1!==o||l!==l[0]))if(n)s=!0;else for(var h=o*i,c=h-i,u=h+i,p=0;p!==i;++p){var d=e[h+p];if(d!==e[c+p]||d!==e[u+p]){s=!0;break}}if(s){if(o!==r){t[r]=t[o];var f=o*i,m=r*i;for(p=0;p!==i;++p)e[m+p]=e[f+p]}++r}}if(a>0){t[r]=t[a];for(f=a*i,m=r*i,p=0;p!==i;++p)e[m+p]=e[f+p];++r}return r!==t.length&&(this.times=us.arraySlice(t,0,r),this.values=us.arraySlice(e,0,r*i)),this}}),vs.prototype=Object.assign(Object.create(gs.prototype),{constructor:vs,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Ae,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),qs.prototype=Object.assign(Object.create(gs.prototype),{constructor:qs,ValueTypeName:"color"}),ys.prototype=Object.assign(Object.create(gs.prototype),{constructor:ys,ValueTypeName:"number"}),xs.prototype=Object.assign(Object.create(ps.prototype),{constructor:xs,interpolate_:function(t,e,i,n){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,l=(i-e)/(n-e),h=s+o;s!==h;s+=4)Ke.slerpFlat(r,0,a,s-o,a,s,l);return r}}),_s.prototype=Object.assign(Object.create(gs.prototype),{constructor:_s,ValueTypeName:"quaternion",DefaultInterpolation:Pe,InterpolantFactoryMethodLinear:function(t){return new xs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),bs.prototype=Object.assign(Object.create(gs.prototype),{constructor:bs,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Ae,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),ws.prototype=Object.assign(Object.create(gs.prototype),{constructor:ws,ValueTypeName:"vector"}),Object.assign(Ms,{parse:function(t){for(var e=[],i=t.tracks,n=1/(t.fps||1),r=0,a=i.length;r!==a;++r)e.push(Ts(i[r]).scale(n));return new Ms(t.name,t.duration,e)},toJSON:function(t){for(var e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid},r=0,a=i.length;r!==a;++r)e.push(gs.toJSON(i[r]));return n},CreateFromMorphTargetSequence:function(t,e,i,n){for(var r=e.length,a=[],o=0;o<r;o++){var s=[],l=[];s.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);var h=us.getKeyframeOrder(s);s=us.sortedArray(s,1,h),l=us.sortedArray(l,1,h),n||0!==s[0]||(s.push(r),l.push(l[0])),a.push(new ys(".morphTargetInfluences["+e[o].name+"]",s,l).scale(1/i))}return new Ms(t,-1,a)},findByName:function(t,e){var i=t;if(!Array.isArray(t)){var n=t;i=n.geometry&&n.geometry.animations||n.animations}for(var r=0;r<i.length;r++)if(i[r].name===e)return i[r];return null},CreateClipsFromMorphTargetSequences:function(t,e,i){for(var n={},r=/^([\w-]*?)([\d]+)$/,a=0,o=t.length;a<o;a++){var s=t[a],l=s.name.match(r);if(l&&l.length>1){var h=n[u=l[1]];h||(n[u]=h=[]),h.push(s)}}var c=[];for(var u in n)c.push(Ms.CreateFromMorphTargetSequence(u,n[u],e,i));return c},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var i=function(t,e,i,n,r){if(0!==i.length){var a=[],o=[];us.flattenJSON(i,a,o,n),0!==a.length&&r.push(new t(e,a,o))}},n=[],r=t.name||"default",a=t.length||-1,o=t.fps||30,s=t.hierarchy||[],l=0;l<s.length;l++){var h=s[l].keys;if(h&&0!==h.length)if(h[0].morphTargets){for(var c={},u=0;u<h.length;u++)if(h[u].morphTargets)for(var p=0;p<h[u].morphTargets.length;p++)c[h[u].morphTargets[p]]=-1;for(var d in c){var f=[],m=[];for(p=0;p!==h[u].morphTargets.length;++p){var g=h[u];f.push(g.time),m.push(g.morphTarget===d?1:0)}n.push(new ys(".morphTargetInfluence["+d+"]",f,m))}a=c.length*(o||1)}else{var v=".bones["+e[l].name+"]";i(ws,v+".position",h,"pos",n),i(_s,v+".quaternion",h,"rot",n),i(ws,v+".scale",h,"scl",n)}}return 0===n.length?null:new Ms(r,a,n)}}),Object.assign(Ms.prototype,{resetDuration:function(){for(var t=0,e=0,i=this.tracks.length;e!==i;++e){var n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this},trim:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){for(var t=!0,e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}});var Ss={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Es(t,e,i){var n=this,r=!1,a=0,o=0,s=void 0;this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(t){o++,!1===r&&void 0!==n.onStart&&n.onStart(t,a,o),r=!0},this.itemEnd=function(t){a++,void 0!==n.onProgress&&n.onProgress(t,a,o),a===o&&(r=!1,void 0!==n.onLoad&&n.onLoad())},this.itemError=function(t){void 0!==n.onError&&n.onError(t)},this.resolveURL=function(t){return s?s(t):t},this.setURLModifier=function(t){return s=t,this}}var As=new Es,Ps={};function Ls(t){this.manager=void 0!==t?t:As}function Rs(t){this.manager=void 0!==t?t:As}function Cs(t){this.manager=void 0!==t?t:As,this._parser=null}function zs(t){this.manager=void 0!==t?t:As,this._parser=null}function Os(t){this.manager=void 0!==t?t:As}function Ds(t){this.manager=void 0!==t?t:As}function Is(t){this.manager=void 0!==t?t:As}function Ns(){this.type="Curve",this.arcLengthDivisions=200}function Bs(t,e,i,n,r,a,o,s){Ns.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=i||1,this.yRadius=n||1,this.aStartAngle=r||0,this.aEndAngle=a||2*Math.PI,this.aClockwise=o||!1,this.aRotation=s||0}function Us(t,e,i,n,r,a){Bs.call(this,t,e,i,i,n,r,a),this.type="ArcCurve"}function Fs(){var t=0,e=0,i=0,n=0;function r(r,a,o,s){t=r,e=o,i=-3*r+3*a-2*o-s,n=2*r-2*a+o+s}return{initCatmullRom:function(t,e,i,n,a){r(e,i,a*(i-t),a*(n-e))},initNonuniformCatmullRom:function(t,e,i,n,a,o,s){var l=(e-t)/a-(i-t)/(a+o)+(i-e)/o,h=(i-e)/o-(n-e)/(o+s)+(n-i)/s;r(e,i,l*=o,h*=o)},calc:function(r){var a=r*r;return t+e*r+i*a+n*(a*r)}}}Object.assign(Ls.prototype,{load:function(t,e,i,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var r=this,a=Ss.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;if(void 0===Ps[t]){var o=t.match(/^data:(.*?)(;base64)?,(.*)$/);if(o){var s=o[1],l=!!o[2],h=o[3];h=decodeURIComponent(h),l&&(h=atob(h));try{var c,u=(this.responseType||"").toLowerCase();switch(u){case"arraybuffer":case"blob":for(var p=new Uint8Array(h.length),d=0;d<h.length;d++)p[d]=h.charCodeAt(d);c="blob"===u?new Blob([p.buffer],{type:s}):p.buffer;break;case"document":var f=new DOMParser;c=f.parseFromString(h,s);break;case"json":c=JSON.parse(h);break;default:c=h}setTimeout(function(){e&&e(c),r.manager.itemEnd(t)},0)}catch(e){setTimeout(function(){n&&n(e),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ps[t]=[],Ps[t].push({onLoad:e,onProgress:i,onError:n});var m=new XMLHttpRequest;for(var g in m.open("GET",t,!0),m.addEventListener("load",function(e){var i=this.response;Ss.add(t,i);var n=Ps[t];if(delete Ps[t],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var a=0,o=n.length;a<o;a++){(s=n[a]).onLoad&&s.onLoad(i)}r.manager.itemEnd(t)}else{for(a=0,o=n.length;a<o;a++){var s;(s=n[a]).onError&&s.onError(e)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),m.addEventListener("progress",function(e){for(var i=Ps[t],n=0,r=i.length;n<r;n++){var a=i[n];a.onProgress&&a.onProgress(e)}},!1),m.addEventListener("error",function(e){var i=Ps[t];delete Ps[t];for(var n=0,a=i.length;n<a;n++){var o=i[n];o.onError&&o.onError(e)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),m.addEventListener("abort",function(e){var i=Ps[t];delete Ps[t];for(var n=0,a=i.length;n<a;n++){var o=i[n];o.onError&&o.onError(e)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),void 0!==this.responseType&&(m.responseType=this.responseType),void 0!==this.withCredentials&&(m.withCredentials=this.withCredentials),m.overrideMimeType&&m.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain"),this.requestHeader)m.setRequestHeader(g,this.requestHeader[g]);m.send(null)}return r.manager.itemStart(t),m}Ps[t].push({onLoad:e,onProgress:i,onError:n})},setPath:function(t){return this.path=t,this},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}}),Object.assign(Rs.prototype,{load:function(t,e,i,n){var r=this,a=new Ls(r.manager);a.setPath(r.path),a.load(t,function(t){e(r.parse(JSON.parse(t)))},i,n)},parse:function(t,e){for(var i=[],n=0;n<t.length;n++){var r=Ms.parse(t[n]);i.push(r)}e(i)},setPath:function(t){return this.path=t,this}}),Object.assign(Cs.prototype,{load:function(t,e,i,n){var r=this,a=[],o=new Na;o.image=a;var s=new Ls(this.manager);function l(l){s.load(t[l],function(t){var i=r._parser(t,!0);a[l]={width:i.width,height:i.height,format:i.format,mipmaps:i.mipmaps},6===(h+=1)&&(1===i.mipmapCount&&(o.minFilter=Ct),o.format=i.format,o.needsUpdate=!0,e&&e(o))},i,n)}if(s.setPath(this.path),s.setResponseType("arraybuffer"),Array.isArray(t))for(var h=0,c=0,u=t.length;c<u;++c)l(c);else s.load(t,function(t){var i=r._parser(t,!0);if(i.isCubemap)for(var n=i.mipmaps.length/i.mipmapCount,s=0;s<n;s++){a[s]={mipmaps:[]};for(var l=0;l<i.mipmapCount;l++)a[s].mipmaps.push(i.mipmaps[s*i.mipmapCount+l]),a[s].format=i.format,a[s].width=i.width,a[s].height=i.height}else o.image.width=i.width,o.image.height=i.height,o.mipmaps=i.mipmaps;1===i.mipmapCount&&(o.minFilter=Ct),o.format=i.format,o.needsUpdate=!0,e&&e(o)},i,n);return o},setPath:function(t){return this.path=t,this}}),Object.assign(zs.prototype,{load:function(t,e,i,n){var r=this,a=new pi,o=new Ls(this.manager);return o.setResponseType("arraybuffer"),o.setPath(this.path),o.load(t,function(t){var i=r._parser(t);i&&(void 0!==i.image?a.image=i.image:void 0!==i.data&&(a.image.width=i.width,a.image.height=i.height,a.image.data=i.data),a.wrapS=void 0!==i.wrapS?i.wrapS:Et,a.wrapT=void 0!==i.wrapT?i.wrapT:Et,a.magFilter=void 0!==i.magFilter?i.magFilter:Ct,a.minFilter=void 0!==i.minFilter?i.minFilter:Ot,a.anisotropy=void 0!==i.anisotropy?i.anisotropy:1,void 0!==i.format&&(a.format=i.format),void 0!==i.type&&(a.type=i.type),void 0!==i.mipmaps&&(a.mipmaps=i.mipmaps),1===i.mipmapCount&&(a.minFilter=Ct),a.needsUpdate=!0,e&&e(a,i))},i,n),a},setPath:function(t){return this.path=t,this}}),Object.assign(Os.prototype,{crossOrigin:"anonymous",load:function(t,e,i,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var r=this,a=Ss.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;var o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function s(){o.removeEventListener("load",s,!1),o.removeEventListener("error",l,!1),Ss.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(e){o.removeEventListener("load",s,!1),o.removeEventListener("error",l,!1),n&&n(e),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",s,!1),o.addEventListener("error",l,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Ds.prototype,{crossOrigin:"anonymous",load:function(t,e,i,n){var r=new Nn,a=new Os(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var o=0;function s(i){a.load(t[i],function(t){r.images[i]=t,6===++o&&(r.needsUpdate=!0,e&&e(r))},void 0,n)}for(var l=0;l<t.length;++l)s(l);return r},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Is.prototype,{crossOrigin:"anonymous",load:function(t,e,i,n){var r=new li,a=new Os(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(i){r.image=i;var n=t.search(/\.jpe?g$/i)>0||0===t.search(/^data\:image\/jpeg/);r.format=n?Yt:Zt,r.needsUpdate=!0,void 0!==e&&e(r)},i,n),r},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Ns.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){var i=this.getUtoTmapping(t);return this.getPoint(i,e)},getPoints:function(t){void 0===t&&(t=5);for(var e=[],i=0;i<=t;i++)e.push(this.getPoint(i/t));return e},getSpacedPoints:function(t){void 0===t&&(t=5);for(var e=[],i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,i,n=[],r=this.getPoint(0),a=0;for(n.push(0),i=1;i<=t;i++)a+=(e=this.getPoint(i/t)).distanceTo(r),n.push(a),r=e;return this.cacheArcLengths=n,n},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){var i,n=this.getLengths(),r=0,a=n.length;i=e||t*n[a-1];for(var o,s=0,l=a-1;s<=l;)if((o=n[r=Math.floor(s+(l-s)/2)]-i)<0)s=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(n[r=l]===i)return r/(a-1);var h=n[r];return(r+(i-h)/(n[r+1]-h))/(a-1)},getTangent:function(t){var e=t-1e-4,i=t+1e-4;e<0&&(e=0),i>1&&(i=1);var n=this.getPoint(e);return this.getPoint(i).clone().sub(n).normalize()},getTangentAt:function(t){var e=this.getUtoTmapping(t);return this.getTangent(e)},computeFrenetFrames:function(t,e){var i,n,r,a=new $e,o=[],s=[],l=[],h=new $e,c=new Qe;for(i=0;i<=t;i++)n=i/t,o[i]=this.getTangentAt(n),o[i].normalize();s[0]=new $e,l[0]=new $e;var u=Number.MAX_VALUE,p=Math.abs(o[0].x),d=Math.abs(o[0].y),f=Math.abs(o[0].z);for(p<=u&&(u=p,a.set(1,0,0)),d<=u&&(u=d,a.set(0,1,0)),f<=u&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),s[0].crossVectors(o[0],h),l[0].crossVectors(o[0],s[0]),i=1;i<=t;i++)s[i]=s[i-1].clone(),l[i]=l[i-1].clone(),h.crossVectors(o[i-1],o[i]),h.length()>Number.EPSILON&&(h.normalize(),r=Math.acos(Ze.clamp(o[i-1].dot(o[i]),-1,1)),s[i].applyMatrix4(c.makeRotationAxis(h,r))),l[i].crossVectors(o[i],s[i]);if(!0===e)for(r=Math.acos(Ze.clamp(s[0].dot(s[t]),-1,1)),r/=t,o[0].dot(h.crossVectors(s[0],s[t]))>0&&(r=-r),i=1;i<=t;i++)s[i].applyMatrix4(c.makeRotationAxis(o[i],r*i)),l[i].crossVectors(o[i],s[i]);return{tangents:o,normals:s,binormals:l}},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){var t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}),Bs.prototype=Object.create(Ns.prototype),Bs.prototype.constructor=Bs,Bs.prototype.isEllipseCurve=!0,Bs.prototype.getPoint=function(t,e){for(var i=e||new Je,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),!0!==this.aClockwise||a||(r===n?r=-n:r-=n);var o=this.aStartAngle+t*r,s=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(0!==this.aRotation){var h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=s-this.aX,p=l-this.aY;s=u*h-p*c+this.aX,l=u*c+p*h+this.aY}return i.set(s,l)},Bs.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Bs.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},Bs.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Us.prototype=Object.create(Bs.prototype),Us.prototype.constructor=Us,Us.prototype.isArcCurve=!0;var ks=new $e,Gs=new Fs,Hs=new Fs,Vs=new Fs;function js(t,e,i,n){Ns.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=i||"centripetal",this.tension=n||.5}function Ws(t,e,i,n,r){var a=.5*(n-e),o=.5*(r-i),s=t*t;return(2*i-2*n+a+o)*(t*s)+(-3*i+3*n-2*a-o)*s+a*t+i}function Xs(t,e,i,n){return function(t,e){var i=1-t;return i*i*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,i)+function(t,e){return t*t*e}(t,n)}function Ys(t,e,i,n,r){return function(t,e){var i=1-t;return i*i*i*e}(t,e)+function(t,e){var i=1-t;return 3*i*i*t*e}(t,i)+function(t,e){return 3*(1-t)*t*t*e}(t,n)+function(t,e){return t*t*t*e}(t,r)}function Zs(t,e,i,n){Ns.call(this),this.type="CubicBezierCurve",this.v0=t||new Je,this.v1=e||new Je,this.v2=i||new Je,this.v3=n||new Je}function Js(t,e,i,n){Ns.call(this),this.type="CubicBezierCurve3",this.v0=t||new $e,this.v1=e||new $e,this.v2=i||new $e,this.v3=n||new $e}function Qs(t,e){Ns.call(this),this.type="LineCurve",this.v1=t||new Je,this.v2=e||new Je}function Ks(t,e){Ns.call(this),this.type="LineCurve3",this.v1=t||new $e,this.v2=e||new $e}function $s(t,e,i){Ns.call(this),this.type="QuadraticBezierCurve",this.v0=t||new Je,this.v1=e||new Je,this.v2=i||new Je}function tl(t,e,i){Ns.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new $e,this.v1=e||new $e,this.v2=i||new $e}function el(t){Ns.call(this),this.type="SplineCurve",this.points=t||[]}js.prototype=Object.create(Ns.prototype),js.prototype.constructor=js,js.prototype.isCatmullRomCurve3=!0,js.prototype.getPoint=function(t,e){var i,n,r,a,o=e||new $e,s=this.points,l=s.length,h=(l-(this.closed?0:1))*t,c=Math.floor(h),u=h-c;if(this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:0===u&&c===l-1&&(c=l-2,u=1),this.closed||c>0?i=s[(c-1)%l]:(ks.subVectors(s[0],s[1]).add(s[0]),i=ks),n=s[c%l],r=s[(c+1)%l],this.closed||c+2<l?a=s[(c+2)%l]:(ks.subVectors(s[l-1],s[l-2]).add(s[l-1]),a=ks),"centripetal"===this.curveType||"chordal"===this.curveType){var p="chordal"===this.curveType?.5:.25,d=Math.pow(i.distanceToSquared(n),p),f=Math.pow(n.distanceToSquared(r),p),m=Math.pow(r.distanceToSquared(a),p);f<1e-4&&(f=1),d<1e-4&&(d=f),m<1e-4&&(m=f),Gs.initNonuniformCatmullRom(i.x,n.x,r.x,a.x,d,f,m),Hs.initNonuniformCatmullRom(i.y,n.y,r.y,a.y,d,f,m),Vs.initNonuniformCatmullRom(i.z,n.z,r.z,a.z,d,f,m)}else"catmullrom"===this.curveType&&(Gs.initCatmullRom(i.x,n.x,r.x,a.x,this.tension),Hs.initCatmullRom(i.y,n.y,r.y,a.y,this.tension),Vs.initCatmullRom(i.z,n.z,r.z,a.z,this.tension));return o.set(Gs.calc(u),Hs.calc(u),Vs.calc(u)),o},js.prototype.copy=function(t){Ns.prototype.copy.call(this,t),this.points=[];for(var e=0,i=t.points.length;e<i;e++){var n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},js.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);t.points=[];for(var e=0,i=this.points.length;e<i;e++){var n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},js.prototype.fromJSON=function(t){Ns.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,i=t.points.length;e<i;e++){var n=t.points[e];this.points.push((new $e).fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},Zs.prototype=Object.create(Ns.prototype),Zs.prototype.constructor=Zs,Zs.prototype.isCubicBezierCurve=!0,Zs.prototype.getPoint=function(t,e){var i=e||new Je,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ys(t,n.x,r.x,a.x,o.x),Ys(t,n.y,r.y,a.y,o.y)),i},Zs.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Zs.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Zs.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},Js.prototype=Object.create(Ns.prototype),Js.prototype.constructor=Js,Js.prototype.isCubicBezierCurve3=!0,Js.prototype.getPoint=function(t,e){var i=e||new $e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ys(t,n.x,r.x,a.x,o.x),Ys(t,n.y,r.y,a.y,o.y),Ys(t,n.z,r.z,a.z,o.z)),i},Js.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Js.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Js.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},Qs.prototype=Object.create(Ns.prototype),Qs.prototype.constructor=Qs,Qs.prototype.isLineCurve=!0,Qs.prototype.getPoint=function(t,e){var i=e||new Je;return 1===t?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i},Qs.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Qs.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()},Qs.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Qs.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Qs.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},Ks.prototype=Object.create(Ns.prototype),Ks.prototype.constructor=Ks,Ks.prototype.isLineCurve3=!0,Ks.prototype.getPoint=function(t,e){var i=e||new $e;return 1===t?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i},Ks.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Ks.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Ks.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Ks.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},$s.prototype=Object.create(Ns.prototype),$s.prototype.constructor=$s,$s.prototype.isQuadraticBezierCurve=!0,$s.prototype.getPoint=function(t,e){var i=e||new Je,n=this.v0,r=this.v1,a=this.v2;return i.set(Xs(t,n.x,r.x,a.x),Xs(t,n.y,r.y,a.y)),i},$s.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},$s.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},$s.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},tl.prototype=Object.create(Ns.prototype),tl.prototype.constructor=tl,tl.prototype.isQuadraticBezierCurve3=!0,tl.prototype.getPoint=function(t,e){var i=e||new $e,n=this.v0,r=this.v1,a=this.v2;return i.set(Xs(t,n.x,r.x,a.x),Xs(t,n.y,r.y,a.y),Xs(t,n.z,r.z,a.z)),i},tl.prototype.copy=function(t){return Ns.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},tl.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},tl.prototype.fromJSON=function(t){return Ns.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},el.prototype=Object.create(Ns.prototype),el.prototype.constructor=el,el.prototype.isSplineCurve=!0,el.prototype.getPoint=function(t,e){var i=e||new Je,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,s=n[0===a?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],c=n[a>n.length-3?n.length-1:a+2];return i.set(Ws(o,s.x,l.x,h.x,c.x),Ws(o,s.y,l.y,h.y,c.y)),i},el.prototype.copy=function(t){Ns.prototype.copy.call(this,t),this.points=[];for(var e=0,i=t.points.length;e<i;e++){var n=t.points[e];this.points.push(n.clone())}return this},el.prototype.toJSON=function(){var t=Ns.prototype.toJSON.call(this);t.points=[];for(var e=0,i=this.points.length;e<i;e++){var n=this.points[e];t.points.push(n.toArray())}return t},el.prototype.fromJSON=function(t){Ns.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,i=t.points.length;e<i;e++){var n=t.points[e];this.points.push((new Je).fromArray(n))}return this};var il=Object.freeze({ArcCurve:Us,CatmullRomCurve3:js,CubicBezierCurve:Zs,CubicBezierCurve3:Js,EllipseCurve:Bs,LineCurve:Qs,LineCurve3:Ks,QuadraticBezierCurve:$s,QuadraticBezierCurve3:tl,SplineCurve:el});function nl(){Ns.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}function rl(t){nl.call(this),this.type="Path",this.currentPoint=new Je,t&&this.setFromPoints(t)}function al(t){rl.call(this,t),this.uuid=Ze.generateUUID(),this.type="Shape",this.holes=[]}function ol(t,e){Ni.call(this),this.type="Light",this.color=new wi(t),this.intensity=void 0!==e?e:1,this.receiveShadow=void 0}function sl(t,e,i){ol.call(this,t,i),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(Ni.DefaultUp),this.updateMatrix(),this.groundColor=new wi(e)}function ll(t){this.camera=t,this.bias=0,this.radius=1,this.mapSize=new Je(512,512),this.map=null,this.matrix=new Qe}function hl(){ll.call(this,new aa(50,1,.5,500))}function cl(t,e,i,n,r,a){ol.call(this,t,e),this.type="SpotLight",this.position.copy(Ni.DefaultUp),this.updateMatrix(),this.target=new Ni,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(t){this.intensity=t/Math.PI}}),this.distance=void 0!==i?i:0,this.angle=void 0!==n?n:Math.PI/3,this.penumbra=void 0!==r?r:0,this.decay=void 0!==a?a:1,this.shadow=new hl}function ul(t,e,i,n){ol.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(t){this.intensity=t/(4*Math.PI)}}),this.distance=void 0!==i?i:0,this.decay=void 0!==n?n:1,this.shadow=new ll(new aa(90,1,.5,500))}function pl(t,e,i,n,r,a){ra.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=void 0!==t?t:-1,this.right=void 0!==e?e:1,this.top=void 0!==i?i:1,this.bottom=void 0!==n?n:-1,this.near=void 0!==r?r:.1,this.far=void 0!==a?a:2e3,this.updateProjectionMatrix()}function dl(){ll.call(this,new pl(-5,5,5,-5,.5,500))}function fl(t,e){ol.call(this,t,e),this.type="DirectionalLight",this.position.copy(Ni.DefaultUp),this.updateMatrix(),this.target=new Ni,this.shadow=new dl}function ml(t,e){ol.call(this,t,e),this.type="AmbientLight",this.castShadow=void 0}function gl(t,e,i,n){ol.call(this,t,e),this.type="RectAreaLight",this.width=void 0!==i?i:10,this.height=void 0!==n?n:10}function vl(t){this.manager=void 0!==t?t:As,this.textures={}}nl.prototype=Object.assign(Object.create(Ns.prototype),{constructor:nl,add:function(t){this.curves.push(t)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Qs(e,t))},getPoint:function(t){for(var e=t*this.getLength(),i=this.getCurveLengths(),n=0;n<i.length;){if(i[n]>=e){var r=i[n]-e,a=this.curves[n],o=a.getLength(),s=0===o?0:1-r/o;return a.getPointAt(s)}n++}return null},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;for(var e,i=[],n=0,r=this.curves;n<r.length;n++)for(var a=r[n],o=a&&a.isEllipseCurve?2*t:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,s=a.getPoints(o),l=0;l<s.length;l++){var h=s[l];e&&e.equals(h)||(i.push(h),e=h)}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i},copy:function(t){Ns.prototype.copy.call(this,t),this.curves=[];for(var e=0,i=t.curves.length;e<i;e++){var n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){var t=Ns.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(var e=0,i=this.curves.length;e<i;e++){var n=this.curves[e];t.curves.push(n.toJSON())}return t},fromJSON:function(t){Ns.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(var e=0,i=t.curves.length;e<i;e++){var n=t.curves[e];this.curves.push((new il[n.type]).fromJSON(n))}return this}}),rl.prototype=Object.assign(Object.create(nl.prototype),{constructor:rl,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(var e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y)},moveTo:function(t,e){this.currentPoint.set(t,e)},lineTo:function(t,e){var i=new Qs(this.currentPoint.clone(),new Je(t,e));this.curves.push(i),this.currentPoint.set(t,e)},quadraticCurveTo:function(t,e,i,n){var r=new $s(this.currentPoint.clone(),new Je(t,e),new Je(i,n));this.curves.push(r),this.currentPoint.set(i,n)},bezierCurveTo:function(t,e,i,n,r,a){var o=new Zs(this.currentPoint.clone(),new Je(t,e),new Je(i,n),new Je(r,a));this.curves.push(o),this.currentPoint.set(r,a)},splineThru:function(t){var e=new el([this.currentPoint.clone()].concat(t));this.curves.push(e),this.currentPoint.copy(t[t.length-1])},arc:function(t,e,i,n,r,a){var o=this.currentPoint.x,s=this.currentPoint.y;this.absarc(t+o,e+s,i,n,r,a)},absarc:function(t,e,i,n,r,a){this.absellipse(t,e,i,i,n,r,a)},ellipse:function(t,e,i,n,r,a,o,s){var l=this.currentPoint.x,h=this.currentPoint.y;this.absellipse(t+l,e+h,i,n,r,a,o,s)},absellipse:function(t,e,i,n,r,a,o,s){var l=new Bs(t,e,i,n,r,a,o,s);if(this.curves.length>0){var h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);var c=l.getPoint(1);this.currentPoint.copy(c)},copy:function(t){return nl.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){var t=nl.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return nl.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}}),al.prototype=Object.assign(Object.create(rl.prototype),{constructor:al,getPointsHoles:function(t){for(var e=[],i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){rl.prototype.copy.call(this,t),this.holes=[];for(var e=0,i=t.holes.length;e<i;e++){var n=t.holes[e];this.holes.push(n.clone())}return this},toJSON:function(){var t=rl.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(var e=0,i=this.holes.length;e<i;e++){var n=this.holes[e];t.holes.push(n.toJSON())}return t},fromJSON:function(t){rl.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(var e=0,i=t.holes.length;e<i;e++){var n=t.holes[e];this.holes.push((new rl).fromJSON(n))}return this}}),ol.prototype=Object.assign(Object.create(Ni.prototype),{constructor:ol,isLight:!0,copy:function(t){return Ni.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){var e=Ni.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}),sl.prototype=Object.assign(Object.create(ol.prototype),{constructor:sl,isHemisphereLight:!0,copy:function(t){return ol.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(ll.prototype,{copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t={};return 0!==this.bias&&(t.bias=this.bias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),hl.prototype=Object.assign(Object.create(ll.prototype),{constructor:hl,isSpotLightShadow:!0,update:function(t){var e=this.camera,i=2*Ze.RAD2DEG*t.angle,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;i===e.fov&&n===e.aspect&&r===e.far||(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix())}}),cl.prototype=Object.assign(Object.create(ol.prototype),{constructor:cl,isSpotLight:!0,copy:function(t){return ol.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),ul.prototype=Object.assign(Object.create(ol.prototype),{constructor:ul,isPointLight:!0,copy:function(t){return ol.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),pl.prototype=Object.assign(Object.create(ra.prototype),{constructor:pl,isOrthographicCamera:!0,copy:function(t,e){return ra.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,e,i,n,r,a){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,s=n-e;if(null!==this.view&&this.view.enabled){var l=this.zoom/(this.view.width/this.view.fullWidth),h=this.zoom/(this.view.height/this.view.fullHeight),c=(this.right-this.left)/this.view.width,u=(this.top-this.bottom)/this.view.height;a=(r+=c*(this.view.offsetX/l))+c*(this.view.width/l),s=(o-=u*(this.view.offsetY/h))-u*(this.view.height/h)}this.projectionMatrix.makeOrthographic(r,a,o,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){var e=Ni.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}),dl.prototype=Object.assign(Object.create(ll.prototype),{constructor:dl}),fl.prototype=Object.assign(Object.create(ol.prototype),{constructor:fl,isDirectionalLight:!0,copy:function(t){return ol.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),ml.prototype=Object.assign(Object.create(ol.prototype),{constructor:ml,isAmbientLight:!0}),gl.prototype=Object.assign(Object.create(ol.prototype),{constructor:gl,isRectAreaLight:!0,copy:function(t){return ol.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){var e=ol.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}}),Object.assign(vl.prototype,{load:function(t,e,i,n){var r=this,a=new Ls(r.manager);a.setPath(r.path),a.load(t,function(t){e(r.parse(JSON.parse(t)))},i,n)},parse:function(t){var e=this.textures;function i(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}var n=new cs[t.type];if(void 0!==t.uuid&&(n.uuid=t.uuid),void 0!==t.name&&(n.name=t.name),void 0!==t.color&&n.color.setHex(t.color),void 0!==t.roughness&&(n.roughness=t.roughness),void 0!==t.metalness&&(n.metalness=t.metalness),void 0!==t.emissive&&n.emissive.setHex(t.emissive),void 0!==t.specular&&n.specular.setHex(t.specular),void 0!==t.shininess&&(n.shininess=t.shininess),void 0!==t.clearCoat&&(n.clearCoat=t.clearCoat),void 0!==t.clearCoatRoughness&&(n.clearCoatRoughness=t.clearCoatRoughness),void 0!==t.vertexColors&&(n.vertexColors=t.vertexColors),void 0!==t.fog&&(n.fog=t.fog),void 0!==t.flatShading&&(n.flatShading=t.flatShading),void 0!==t.blending&&(n.blending=t.blending),void 0!==t.combine&&(n.combine=t.combine),void 0!==t.side&&(n.side=t.side),void 0!==t.opacity&&(n.opacity=t.opacity),void 0!==t.transparent&&(n.transparent=t.transparent),void 0!==t.alphaTest&&(n.alphaTest=t.alphaTest),void 0!==t.depthTest&&(n.depthTest=t.depthTest),void 0!==t.depthWrite&&(n.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(n.colorWrite=t.colorWrite),void 0!==t.wireframe&&(n.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(n.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(n.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(n.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(n.rotation=t.rotation),1!==t.linewidth&&(n.linewidth=t.linewidth),void 0!==t.dashSize&&(n.dashSize=t.dashSize),void 0!==t.gapSize&&(n.gapSize=t.gapSize),void 0!==t.scale&&(n.scale=t.scale),void 0!==t.polygonOffset&&(n.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(n.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(n.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.skinning&&(n.skinning=t.skinning),void 0!==t.morphTargets&&(n.morphTargets=t.morphTargets),void 0!==t.dithering&&(n.dithering=t.dithering),void 0!==t.visible&&(n.visible=t.visible),void 0!==t.userData&&(n.userData=t.userData),void 0!==t.uniforms)for(var r in t.uniforms){var a=t.uniforms[r];switch(n.uniforms[r]={},a.type){case"t":n.uniforms[r].value=i(a.value);break;case"c":n.uniforms[r].value=(new wi).setHex(a.value);break;case"v2":n.uniforms[r].value=(new Je).fromArray(a.value);break;case"v3":n.uniforms[r].value=(new $e).fromArray(a.value);break;case"v4":n.uniforms[r].value=(new hi).fromArray(a.value);break;case"m4":n.uniforms[r].value=(new Qe).fromArray(a.value);break;default:n.uniforms[r].value=a.value}}if(void 0!==t.defines&&(n.defines=t.defines),void 0!==t.vertexShader&&(n.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(n.fragmentShader=t.fragmentShader),void 0!==t.shading&&(n.flatShading=1===t.shading),void 0!==t.size&&(n.size=t.size),void 0!==t.sizeAttenuation&&(n.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(n.map=i(t.map)),void 0!==t.alphaMap&&(n.alphaMap=i(t.alphaMap),n.transparent=!0),void 0!==t.bumpMap&&(n.bumpMap=i(t.bumpMap)),void 0!==t.bumpScale&&(n.bumpScale=t.bumpScale),void 0!==t.normalMap&&(n.normalMap=i(t.normalMap)),void 0!==t.normalMapType&&(n.normalMapType=t.normalMapType),void 0!==t.normalScale){var o=t.normalScale;!1===Array.isArray(o)&&(o=[o,o]),n.normalScale=(new Je).fromArray(o)}return void 0!==t.displacementMap&&(n.displacementMap=i(t.displacementMap)),void 0!==t.displacementScale&&(n.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(n.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(n.roughnessMap=i(t.roughnessMap)),void 0!==t.metalnessMap&&(n.metalnessMap=i(t.metalnessMap)),void 0!==t.emissiveMap&&(n.emissiveMap=i(t.emissiveMap)),void 0!==t.emissiveIntensity&&(n.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(n.specularMap=i(t.specularMap)),void 0!==t.envMap&&(n.envMap=i(t.envMap)),void 0!==t.envMapIntensity&&(n.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(n.reflectivity=t.reflectivity),void 0!==t.lightMap&&(n.lightMap=i(t.lightMap)),void 0!==t.lightMapIntensity&&(n.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(n.aoMap=i(t.aoMap)),void 0!==t.aoMapIntensity&&(n.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(n.gradientMap=i(t.gradientMap)),n},setPath:function(t){return this.path=t,this},setTextures:function(t){return this.textures=t,this}});var ql={decodeText:function(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);for(var e="",i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);return decodeURIComponent(escape(e))},extractUrlBase:function(t){var e=t.lastIndexOf("/");return-1===e?"./":t.substr(0,e+1)}};function yl(t){this.manager=void 0!==t?t:As}Object.assign(yl.prototype,{load:function(t,e,i,n){var r=this,a=new Ls(r.manager);a.setPath(r.path),a.load(t,function(t){e(r.parse(JSON.parse(t)))},i,n)},parse:function(t){var e=new en,i=t.data.index;if(void 0!==i){var n=new Ml[i.type](i.array);e.setIndex(new Gi(n,1))}var r=t.data.attributes;for(var a in r){var o=r[a];n=new Ml[o.type](o.array);e.addAttribute(a,new Gi(n,o.itemSize,o.normalized))}var s=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==s)for(var l=0,h=s.length;l!==h;++l){var c=s[l];e.addGroup(c.start,c.count,c.materialIndex)}var u=t.data.boundingSphere;if(void 0!==u){var p=new $e;void 0!==u.center&&p.fromArray(u.center),e.boundingSphere=new fi(p,u.radius)}return e},setPath:function(t){return this.path=t,this}});var xl,_l,bl,wl,Ml={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!=typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function Tl(){}function Sl(t){"boolean"==typeof t&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),t=void 0),this.manager=void 0!==t?t:As,this.withCredentials=!1}function El(t){this.manager=void 0!==t?t:As,this.resourcePath=""}Tl.Handlers={handlers:[],add:function(t,e){this.handlers.push(t,e)},get:function(t){for(var e=this.handlers,i=0,n=e.length;i<n;i+=2){var r=e[i],a=e[i+1];if(r.test(t))return a}return null}},Object.assign(Tl.prototype,{crossOrigin:"anonymous",onLoadStart:function(){},onLoadProgress:function(){},onLoadComplete:function(){},initMaterials:function(t,e,i){for(var n=[],r=0;r<t.length;++r)n[r]=this.createMaterial(t[r],e,i);return n},createMaterial:(xl={NoBlending:O,NormalBlending:D,AdditiveBlending:I,SubtractiveBlending:N,MultiplyBlending:B,CustomBlending:U},_l=new wi,bl=new Is,wl=new vl,function(t,e,i){var n={};function r(t,r,a,o,s){var l,h=e+t,c=Tl.Handlers.get(h);null!==c?l=c.load(h):(bl.setCrossOrigin(i),l=bl.load(h)),void 0!==r&&(l.repeat.fromArray(r),1!==r[0]&&(l.wrapS=St),1!==r[1]&&(l.wrapT=St)),void 0!==a&&l.offset.fromArray(a),void 0!==o&&("repeat"===o[0]&&(l.wrapS=St),"mirror"===o[0]&&(l.wrapS=At),"repeat"===o[1]&&(l.wrapT=St),"mirror"===o[1]&&(l.wrapT=At)),void 0!==s&&(l.anisotropy=s);var u=Ze.generateUUID();return n[u]=l,u}var a={uuid:Ze.generateUUID(),type:"MeshLambertMaterial"};for(var o in t){var s=t[o];switch(o){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":a.name=s;break;case"blending":a.blending=xl[s];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",o,"is no longer supported.");break;case"colorDiffuse":a.color=_l.fromArray(s).getHex();break;case"colorSpecular":a.specular=_l.fromArray(s).getHex();break;case"colorEmissive":a.emissive=_l.fromArray(s).getHex();break;case"specularCoef":a.shininess=s;break;case"shading":"basic"===s.toLowerCase()&&(a.type="MeshBasicMaterial"),"phong"===s.toLowerCase()&&(a.type="MeshPhongMaterial"),"standard"===s.toLowerCase()&&(a.type="MeshStandardMaterial");break;case"mapDiffuse":a.map=r(s,t.mapDiffuseRepeat,t.mapDiffuseOffset,t.mapDiffuseWrap,t.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":a.emissiveMap=r(s,t.mapEmissiveRepeat,t.mapEmissiveOffset,t.mapEmissiveWrap,t.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":a.lightMap=r(s,t.mapLightRepeat,t.mapLightOffset,t.mapLightWrap,t.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":a.aoMap=r(s,t.mapAORepeat,t.mapAOOffset,t.mapAOWrap,t.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":a.bumpMap=r(s,t.mapBumpRepeat,t.mapBumpOffset,t.mapBumpWrap,t.mapBumpAnisotropy);break;case"mapBumpScale":a.bumpScale=s;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":a.normalMap=r(s,t.mapNormalRepeat,t.mapNormalOffset,t.mapNormalWrap,t.mapNormalAnisotropy);break;case"mapNormalFactor":a.normalScale=s;break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":a.specularMap=r(s,t.mapSpecularRepeat,t.mapSpecularOffset,t.mapSpecularWrap,t.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":a.metalnessMap=r(s,t.mapMetalnessRepeat,t.mapMetalnessOffset,t.mapMetalnessWrap,t.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":a.roughnessMap=r(s,t.mapRoughnessRepeat,t.mapRoughnessOffset,t.mapRoughnessWrap,t.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":a.alphaMap=r(s,t.mapAlphaRepeat,t.mapAlphaOffset,t.mapAlphaWrap,t.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":a.side=E;break;case"doubleSided":a.side=A;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),a.opacity=s;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":a[o]=s;break;case"vertexColors":!0===s&&(a.vertexColors=z),"face"===s&&(a.vertexColors=C);break;default:console.error("THREE.Loader.createMaterial: Unsupported",o,s)}}return"MeshBasicMaterial"===a.type&&delete a.emissive,"MeshPhongMaterial"!==a.type&&delete a.specular,a.opacity<1&&(a.transparent=!0),wl.setTextures(n),wl.parse(a)})}),Object.assign(Sl.prototype,{crossOrigin:"anonymous",load:function(t,e,i,n){var r=this,a=void 0===this.path?ql.extractUrlBase(t):this.path,o=new Ls(this.manager);o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(t,function(i){var n=JSON.parse(i),o=n.metadata;if(void 0!==o){var s=o.type;if(void 0!==s&&"object"===s.toLowerCase())return void console.error("THREE.JSONLoader: "+t+" should be loaded with THREE.ObjectLoader instead.")}var l=r.parse(n,a);e(l.geometry,l.materials)},i,n)},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setCrossOrigin:function(t){return this.crossOrigin=t,this},parse:function(){return function(t,e){void 0!==t.data&&(t=t.data),void 0!==t.scale?t.scale=1/t.scale:t.scale=1;var i=new ki;return function(t,e){function i(t,e){return t&1<<e}var n,r,a,o,s,l,h,c,u,p,d,f,m,g,v,q,y,x,_,b,w,M,T,S,E,A=t.faces,P=t.vertices,L=t.normals,R=t.colors,C=t.scale,z=0;if(void 0!==t.uvs){for(n=0;n<t.uvs.length;n++)t.uvs[n].length&&z++;for(n=0;n<z;n++)e.faceVertexUvs[n]=[]}for(o=0,s=P.length;o<s;)(x=new $e).x=P[o++]*C,x.y=P[o++]*C,x.z=P[o++]*C,e.vertices.push(x);for(o=0,s=A.length;o<s;)if(d=i(p=A[o++],0),f=i(p,1),m=i(p,3),g=i(p,4),v=i(p,5),q=i(p,6),y=i(p,7),d){if((b=new Pi).a=A[o],b.b=A[o+1],b.c=A[o+3],(w=new Pi).a=A[o+1],w.b=A[o+2],w.c=A[o+3],o+=4,f&&(u=A[o++],b.materialIndex=u,w.materialIndex=u),a=e.faces.length,m)for(n=0;n<z;n++)for(S=t.uvs[n],e.faceVertexUvs[n][a]=[],e.faceVertexUvs[n][a+1]=[],r=0;r<4;r++)E=new Je(S[2*(c=A[o++])],S[2*c+1]),2!==r&&e.faceVertexUvs[n][a].push(E),0!==r&&e.faceVertexUvs[n][a+1].push(E);if(g&&(h=3*A[o++],b.normal.set(L[h++],L[h++],L[h]),w.normal.copy(b.normal)),v)for(n=0;n<4;n++)h=3*A[o++],T=new $e(L[h++],L[h++],L[h]),2!==n&&b.vertexNormals.push(T),0!==n&&w.vertexNormals.push(T);if(q&&(M=R[l=A[o++]],b.color.setHex(M),w.color.setHex(M)),y)for(n=0;n<4;n++)M=R[l=A[o++]],2!==n&&b.vertexColors.push(new wi(M)),0!==n&&w.vertexColors.push(new wi(M));e.faces.push(b),e.faces.push(w)}else{if((_=new Pi).a=A[o++],_.b=A[o++],_.c=A[o++],f&&(u=A[o++],_.materialIndex=u),a=e.faces.length,m)for(n=0;n<z;n++)for(S=t.uvs[n],e.faceVertexUvs[n][a]=[],r=0;r<3;r++)E=new Je(S[2*(c=A[o++])],S[2*c+1]),e.faceVertexUvs[n][a].push(E);if(g&&(h=3*A[o++],_.normal.set(L[h++],L[h++],L[h])),v)for(n=0;n<3;n++)h=3*A[o++],T=new $e(L[h++],L[h++],L[h]),_.vertexNormals.push(T);if(q&&(l=A[o++],_.color.setHex(R[l])),y)for(n=0;n<3;n++)l=A[o++],_.vertexColors.push(new wi(R[l]));e.faces.push(_)}}(t,i),function(t,e){var i=void 0!==t.influencesPerVertex?t.influencesPerVertex:2;if(t.skinWeights)for(var n=0,r=t.skinWeights.length;n<r;n+=i){var a=t.skinWeights[n],o=i>1?t.skinWeights[n+1]:0,s=i>2?t.skinWeights[n+2]:0,l=i>3?t.skinWeights[n+3]:0;e.skinWeights.push(new hi(a,o,s,l))}if(t.skinIndices)for(n=0,r=t.skinIndices.length;n<r;n+=i){var h=t.skinIndices[n],c=i>1?t.skinIndices[n+1]:0,u=i>2?t.skinIndices[n+2]:0,p=i>3?t.skinIndices[n+3]:0;e.skinIndices.push(new hi(h,c,u,p))}e.bones=t.bones,e.bones&&e.bones.length>0&&(e.skinWeights.length!==e.skinIndices.length||e.skinIndices.length!==e.vertices.length)&&console.warn("When skinning, number of vertices ("+e.vertices.length+"), skinIndices ("+e.skinIndices.length+"), and skinWeights ("+e.skinWeights.length+") should match.")}(t,i),function(t,e){var i=t.scale;if(void 0!==t.morphTargets)for(var n=0,r=t.morphTargets.length;n<r;n++){e.morphTargets[n]={},e.morphTargets[n].name=t.morphTargets[n].name,e.morphTargets[n].vertices=[];for(var a=e.morphTargets[n].vertices,o=t.morphTargets[n].vertices,s=0,l=o.length;s<l;s+=3){var h=new $e;h.x=o[s]*i,h.y=o[s+1]*i,h.z=o[s+2]*i,a.push(h)}}if(void 0!==t.morphColors&&t.morphColors.length>0){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');var c=e.faces,u=t.morphColors[0].colors;for(n=0,r=c.length;n<r;n++)c[n].color.fromArray(u,3*n)}}(t,i),function(t,e){var i=[],n=[];void 0!==t.animation&&n.push(t.animation),void 0!==t.animations&&(t.animations.length?n=n.concat(t.animations):n.push(t.animations));for(var r=0;r<n.length;r++){var a=Ms.parseAnimation(n[r],e.bones);a&&i.push(a)}if(e.morphTargets){var o=Ms.CreateClipsFromMorphTargetSequences(e.morphTargets,10);i=i.concat(o)}i.length>0&&(e.animations=i)}(t,i),i.computeFaceNormals(),i.computeBoundingSphere(),void 0===t.materials||0===t.materials.length?{geometry:i}:{geometry:i,materials:Tl.prototype.initMaterials(t.materials,this.resourcePath||e,this.crossOrigin)}}}()}),Object.assign(El.prototype,{crossOrigin:"anonymous",load:function(t,e,i,n){var r=this,a=void 0===this.path?ql.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;var o=new Ls(r.manager);o.setPath(this.path),o.load(t,function(i){var a=null;try{a=JSON.parse(i)}catch(e){return void 0!==n&&n(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}var o=a.metadata;void 0!==o&&void 0!==o.type&&"geometry"!==o.type.toLowerCase()?r.parse(a,e):console.error("THREE.ObjectLoader: Can't load "+t+". Use THREE.JSONLoader instead.")},i,n)},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setCrossOrigin:function(t){return this.crossOrigin=t,this},parse:function(t,e){var i=this.parseShape(t.shapes),n=this.parseGeometries(t.geometries,i),r=this.parseImages(t.images,function(){void 0!==e&&e(s)}),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),s=this.parseObject(t.object,n,o);return t.animations&&(s.animations=this.parseAnimations(t.animations)),void 0!==t.images&&0!==t.images.length||void 0!==e&&e(s),s},parseShape:function(t){var e={};if(void 0!==t)for(var i=0,n=t.length;i<n;i++){var r=(new al).fromJSON(t[i]);e[r.uuid]=r}return e},parseGeometries:function(t,e){var i={};if(void 0!==t)for(var n=new Sl,r=new yl,a=0,o=t.length;a<o;a++){var s,l=t[a];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":s=new $o[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":s=new $o[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":s=new $o[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":s=new $o[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":s=new $o[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":s=new $o[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":s=new $o[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":s=new $o[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":s=new $o[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":s=new $o[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"LatheGeometry":case"LatheBufferGeometry":s=new $o[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":s=new $o[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":for(var h=[],c=0,u=l.shapes.length;c<u;c++){var p=e[l.shapes[c]];h.push(p)}s=new $o[l.type](h,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":for(h=[],c=0,u=l.shapes.length;c<u;c++){p=e[l.shapes[c]];h.push(p)}var d=l.options.extrudePath;void 0!==d&&(l.options.extrudePath=(new il[d.type]).fromJSON(d)),s=new $o[l.type](h,l.options);break;case"BufferGeometry":s=r.parse(l);break;case"Geometry":s=n.parse(l,this.resourcePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}s.uuid=l.uuid,void 0!==l.name&&(s.name=l.name),!0===s.isBufferGeometry&&void 0!==l.userData&&(s.userData=l.userData),i[l.uuid]=s}return i},parseMaterials:function(t,e){var i={},n={};if(void 0!==t){var r=new vl;r.setTextures(e);for(var a=0,o=t.length;a<o;a++){var s=t[a];if("MultiMaterial"===s.type){for(var l=[],h=0;h<s.materials.length;h++){var c=s.materials[h];void 0===i[c.uuid]&&(i[c.uuid]=r.parse(c)),l.push(i[c.uuid])}n[s.uuid]=l}else n[s.uuid]=r.parse(s),i[s.uuid]=n[s.uuid]}}return n},parseAnimations:function(t){for(var e=[],i=0;i<t.length;i++){var n=t[i],r=Ms.parse(n);void 0!==n.uuid&&(r.uuid=n.uuid),e.push(r)}return e},parseImages:function(t,e){var i=this,n={};function r(t){return i.manager.itemStart(t),a.load(t,function(){i.manager.itemEnd(t)},void 0,function(){i.manager.itemError(t),i.manager.itemEnd(t)})}if(void 0!==t&&t.length>0){var a=new Os(new Es(e));a.setCrossOrigin(this.crossOrigin);for(var o=0,s=t.length;o<s;o++){var l=t[o],h=l.url;if(Array.isArray(h)){n[l.uuid]=[];for(var c=0,u=h.length;c<u;c++){var p=h[c],d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:i.resourcePath+p;n[l.uuid].push(r(d))}}else{d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:i.resourcePath+l.url;n[l.uuid]=r(d)}}}return n},parseTextures:function(t,e){function i(t,e){return"number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}var n={};if(void 0!==t)for(var r=0,a=t.length;r<a;r++){var o,s=t[r];void 0===s.image&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),void 0===e[s.image]&&console.warn("THREE.ObjectLoader: Undefined image",s.image),(o=Array.isArray(e[s.image])?new Nn(e[s.image]):new li(e[s.image])).needsUpdate=!0,o.uuid=s.uuid,void 0!==s.name&&(o.name=s.name),void 0!==s.mapping&&(o.mapping=i(s.mapping,Pl)),void 0!==s.offset&&o.offset.fromArray(s.offset),void 0!==s.repeat&&o.repeat.fromArray(s.repeat),void 0!==s.center&&o.center.fromArray(s.center),void 0!==s.rotation&&(o.rotation=s.rotation),void 0!==s.wrap&&(o.wrapS=i(s.wrap[0],Ll),o.wrapT=i(s.wrap[1],Ll)),void 0!==s.format&&(o.format=s.format),void 0!==s.minFilter&&(o.minFilter=i(s.minFilter,Rl)),void 0!==s.magFilter&&(o.magFilter=i(s.magFilter,Rl)),void 0!==s.anisotropy&&(o.anisotropy=s.anisotropy),void 0!==s.flipY&&(o.flipY=s.flipY),n[s.uuid]=o}return n},parseObject:function(t,e,i){var n;function r(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function a(t){if(void 0!==t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;n++){var a=t[n];void 0===i[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),e.push(i[a])}return e}return void 0===i[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),i[t]}}switch(t.type){case"Scene":n=new _a,void 0!==t.background&&Number.isInteger(t.background)&&(n.background=new wi(t.background)),void 0!==t.fog&&("Fog"===t.fog.type?n.fog=new xa(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(n.fog=new ya(t.fog.color,t.fog.density)));break;case"PerspectiveCamera":n=new aa(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(n.focus=t.focus),void 0!==t.zoom&&(n.zoom=t.zoom),void 0!==t.filmGauge&&(n.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(n.filmOffset=t.filmOffset),void 0!==t.view&&(n.view=Object.assign({},t.view));break;case"OrthographicCamera":n=new pl(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(n.zoom=t.zoom),void 0!==t.view&&(n.view=Object.assign({},t.view));break;case"AmbientLight":n=new ml(t.color,t.intensity);break;case"DirectionalLight":n=new fl(t.color,t.intensity);break;case"PointLight":n=new ul(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":n=new gl(t.color,t.intensity,t.width,t.height);break;case"SpotLight":n=new cl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":n=new sl(t.color,t.groundColor,t.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":var o=r(t.geometry),s=a(t.material);n=o.bones&&o.bones.length>0?new Pa(o,s):new Tn(o,s);break;case"LOD":n=new Sa;break;case"Line":n=new Ra(r(t.geometry),a(t.material),t.mode);break;case"LineLoop":n=new za(r(t.geometry),a(t.material));break;case"LineSegments":n=new Ca(r(t.geometry),a(t.material));break;case"PointCloud":case"Points":n=new Da(r(t.geometry),a(t.material));break;case"Sprite":n=new Ta(a(t.material));break;case"Group":n=new na;break;default:n=new Ni}if(n.uuid=t.uuid,void 0!==t.name&&(n.name=t.name),void 0!==t.matrix?(n.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(n.matrixAutoUpdate=t.matrixAutoUpdate),n.matrixAutoUpdate&&n.matrix.decompose(n.position,n.quaternion,n.scale)):(void 0!==t.position&&n.position.fromArray(t.position),void 0!==t.rotation&&n.rotation.fromArray(t.rotation),void 0!==t.quaternion&&n.quaternion.fromArray(t.quaternion),void 0!==t.scale&&n.scale.fromArray(t.scale)),void 0!==t.castShadow&&(n.castShadow=t.castShadow),void 0!==t.receiveShadow&&(n.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(n.shadow.bias=t.shadow.bias),void 0!==t.shadow.radius&&(n.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&n.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(n.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(n.visible=t.visible),void 0!==t.frustumCulled&&(n.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(n.renderOrder=t.renderOrder),void 0!==t.userData&&(n.userData=t.userData),void 0!==t.layers&&(n.layers.mask=t.layers),void 0!==t.children)for(var l=t.children,h=0;h<l.length;h++)n.add(this.parseObject(l[h],e,i));if("LOD"===t.type)for(var c=t.levels,u=0;u<c.length;u++){var p=c[u],d=n.getObjectByProperty("uuid",p.object);void 0!==d&&n.addLevel(d,p.distance)}return n}});var Al,Pl={UVMapping:qt,CubeReflectionMapping:yt,CubeRefractionMapping:xt,EquirectangularReflectionMapping:_t,EquirectangularRefractionMapping:bt,SphericalReflectionMapping:wt,CubeUVReflectionMapping:Mt,CubeUVRefractionMapping:Tt},Ll={RepeatWrapping:St,ClampToEdgeWrapping:Et,MirroredRepeatWrapping:At},Rl={NearestFilter:Pt,NearestMipMapNearestFilter:Lt,NearestMipMapLinearFilter:Rt,LinearFilter:Ct,LinearMipMapNearestFilter:zt,LinearMipMapLinearFilter:Ot};function Cl(t){"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.manager=void 0!==t?t:As,this.options=void 0}function zl(){this.type="ShapePath",this.color=new wi,this.subPaths=[],this.currentPath=null}function Ol(t){this.type="Font",this.data=t}function Dl(t,e,i,n,r){var a=r.glyphs[t]||r.glyphs["?"];if(a){var o,s,l,h,c,u,p,d,f=new zl;if(a.o)for(var m=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),g=0,v=m.length;g<v;){switch(m[g++]){case"m":o=m[g++]*e+i,s=m[g++]*e+n,f.moveTo(o,s);break;case"l":o=m[g++]*e+i,s=m[g++]*e+n,f.lineTo(o,s);break;case"q":l=m[g++]*e+i,h=m[g++]*e+n,c=m[g++]*e+i,u=m[g++]*e+n,f.quadraticCurveTo(c,u,l,h);break;case"b":l=m[g++]*e+i,h=m[g++]*e+n,c=m[g++]*e+i,u=m[g++]*e+n,p=m[g++]*e+i,d=m[g++]*e+n,f.bezierCurveTo(c,u,p,d,l,h)}}return{offsetX:a.ha*e,path:f}}}function Il(t){this.manager=void 0!==t?t:As}Cl.prototype={constructor:Cl,setOptions:function(t){return this.options=t,this},load:function(t,e,i,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var r=this,a=Ss.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;fetch(t).then(function(t){return t.blob()}).then(function(t){return createImageBitmap(t,r.options)}).then(function(i){Ss.add(t,i),e&&e(i),r.manager.itemEnd(t)}).catch(function(e){n&&n(e),r.manager.itemError(t),r.manager.itemEnd(t)})},setCrossOrigin:function(){return this},setPath:function(t){return this.path=t,this}},Object.assign(zl.prototype,{moveTo:function(t,e){this.currentPath=new rl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e)},lineTo:function(t,e){this.currentPath.lineTo(t,e)},quadraticCurveTo:function(t,e,i,n){this.currentPath.quadraticCurveTo(t,e,i,n)},bezierCurveTo:function(t,e,i,n,r,a){this.currentPath.bezierCurveTo(t,e,i,n,r,a)},splineThru:function(t){this.currentPath.splineThru(t)},toShapes:function(t,e){function i(t){for(var e=[],i=0,n=t.length;i<n;i++){var r=t[i],a=new al;a.curves=r.curves,e.push(a)}return e}function n(t,e){for(var i=e.length,n=!1,r=i-1,a=0;a<i;r=a++){var o=e[r],s=e[a],l=s.x-o.x,h=s.y-o.y;if(Math.abs(h)>Number.EPSILON){if(h<0&&(o=e[a],l=-l,s=e[r],h=-h),t.y<o.y||t.y>s.y)continue;if(t.y===o.y){if(t.x===o.x)return!0}else{var c=h*(t.x-o.x)-l*(t.y-o.y);if(0===c)return!0;if(c<0)continue;n=!n}}else{if(t.y!==o.y)continue;if(s.x<=t.x&&t.x<=o.x||o.x<=t.x&&t.x<=s.x)return!0}}return n}var r=Ao.isClockWise,a=this.subPaths;if(0===a.length)return[];if(!0===e)return i(a);var o,s,l,h=[];if(1===a.length)return s=a[0],(l=new al).curves=s.curves,h.push(l),h;var c=!r(a[0].getPoints());c=t?!c:c;var u,p,d=[],f=[],m=[],g=0;f[g]=void 0,m[g]=[];for(var v=0,q=a.length;v<q;v++)o=r(u=(s=a[v]).getPoints()),(o=t?!o:o)?(!c&&f[g]&&g++,f[g]={s:new al,p:u},f[g].s.curves=s.curves,c&&g++,m[g]=[]):m[g].push({h:s,p:u[0]});if(!f[0])return i(a);if(f.length>1){for(var y=!1,x=[],_=0,b=f.length;_<b;_++)d[_]=[];for(_=0,b=f.length;_<b;_++)for(var w=m[_],M=0;M<w.length;M++){for(var T=w[M],S=!0,E=0;E<f.length;E++)n(T.p,f[E].p)&&(_!==E&&x.push({froms:_,tos:E,hole:M}),S?(S=!1,d[E].push(T)):y=!0);S&&d[_].push(T)}x.length>0&&(y||(m=d))}v=0;for(var A=f.length;v<A;v++){l=f[v].s,h.push(l);for(var P=0,L=(p=m[v]).length;P<L;P++)l.holes.push(p[P].h)}return h}}),Object.assign(Ol.prototype,{isFont:!0,generateShapes:function(t,e){void 0===e&&(e=100);for(var i=[],n=function(t,e,i){for(var n=Array.from?Array.from(t):String(t).split(""),r=e/i.resolution,a=(i.boundingBox.yMax-i.boundingBox.yMin+i.underlineThickness)*r,o=[],s=0,l=0,h=0;h<n.length;h++){var c=n[h];if("\n"===c)s=0,l-=a;else{var u=Dl(c,r,s,l,i);s+=u.offsetX,o.push(u.path)}}return o}(t,e,this.data),r=0,a=n.length;r<a;r++)Array.prototype.push.apply(i,n[r].toShapes());return i}}),Object.assign(Il.prototype,{load:function(t,e,i,n){var r=this,a=new Ls(this.manager);a.setPath(this.path),a.load(t,function(t){var i;try{i=JSON.parse(t)}catch(e){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),i=JSON.parse(t.substring(65,t.length-2))}var n=r.parse(i);e&&e(n)},i,n)},parse:function(t){return new Ol(t)},setPath:function(t){return this.path=t,this}});var Nl,Bl,Ul,Fl,kl,Gl,Hl,Vl,jl,Wl,Xl={getContext:function(){return void 0===Al&&(Al=new(window.AudioContext||window.webkitAudioContext)),Al},setContext:function(t){Al=t}};function Yl(t){this.manager=void 0!==t?t:As}function Zl(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new aa,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new aa,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}function Jl(t,e,i,n){Ni.call(this),this.type="CubeCamera";var r=new aa(90,1,t,e);r.up.set(0,-1,0),r.lookAt(new $e(1,0,0)),this.add(r);var a=new aa(90,1,t,e);a.up.set(0,-1,0),a.lookAt(new $e(-1,0,0)),this.add(a);var o=new aa(90,1,t,e);o.up.set(0,0,1),o.lookAt(new $e(0,1,0)),this.add(o);var s=new aa(90,1,t,e);s.up.set(0,0,-1),s.lookAt(new $e(0,-1,0)),this.add(s);var l=new aa(90,1,t,e);l.up.set(0,-1,0),l.lookAt(new $e(0,0,1)),this.add(l);var h=new aa(90,1,t,e);h.up.set(0,-1,0),h.lookAt(new $e(0,0,-1)),this.add(h),n=n||{format:Yt,magFilter:Ct,minFilter:Ct},this.renderTarget=new ui(i,i,n),this.renderTarget.texture.name="CubeCamera",this.update=function(t,e){null===this.parent&&this.updateMatrixWorld();var i=this.renderTarget,n=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,i.activeCubeFace=0,t.render(e,r,i),i.activeCubeFace=1,t.render(e,a,i),i.activeCubeFace=2,t.render(e,o,i),i.activeCubeFace=3,t.render(e,s,i),i.activeCubeFace=4,t.render(e,l,i),i.texture.generateMipmaps=n,i.activeCubeFace=5,t.render(e,h,i),t.setRenderTarget(null)},this.clear=function(t,e,i,n){for(var r=this.renderTarget,a=0;a<6;a++)r.activeCubeFace=a,t.setRenderTarget(r),t.clear(e,i,n);t.setRenderTarget(null)}}function Ql(t){this.autoStart=void 0===t||t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}function Kl(){Ni.call(this),this.type="AudioListener",this.context=Xl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0}function $l(t){Ni.call(this),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.offset=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}function th(t){$l.call(this,t),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}function eh(t,e){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=void 0!==e?e:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}function ih(t,e,i){this.binding=t,this.valueSize=i;var n,r=Float64Array;switch(e){case"quaternion":n=this._slerp;break;case"string":case"bool":r=Array,n=this._select;break;default:n=this._lerp}this.buffer=new r(4*i),this._mixBufferRegion=n,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}Object.assign(Yl.prototype,{load:function(t,e,i,n){var r=new Ls(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.load(t,function(t){var i=t.slice(0);Xl.getContext().decodeAudioData(i,function(t){e(t)})},i,n)},setPath:function(t){return this.path=t,this}}),Object.assign(Zl.prototype,{update:(jl=new Qe,Wl=new Qe,function(t){if(Nl!==this||Bl!==t.focus||Ul!==t.fov||Fl!==t.aspect*this.aspect||kl!==t.near||Gl!==t.far||Hl!==t.zoom||Vl!==this.eyeSep){Nl=this,Bl=t.focus,Ul=t.fov,Fl=t.aspect*this.aspect,kl=t.near,Gl=t.far,Hl=t.zoom;var e,i,n=t.projectionMatrix.clone(),r=(Vl=this.eyeSep/2)*kl/Bl,a=kl*Math.tan(Ze.DEG2RAD*Ul*.5)/Hl;Wl.elements[12]=-Vl,jl.elements[12]=Vl,e=-a*Fl+r,i=a*Fl+r,n.elements[0]=2*kl/(i-e),n.elements[8]=(i+e)/(i-e),this.cameraL.projectionMatrix.copy(n),e=-a*Fl-r,i=a*Fl-r,n.elements[0]=2*kl/(i-e),n.elements[8]=(i+e)/(i-e),this.cameraR.projectionMatrix.copy(n)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Wl),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(jl)})}),Jl.prototype=Object.create(Ni.prototype),Jl.prototype.constructor=Jl,Object.assign(Ql.prototype,{start:function(){this.startTime=("undefined"==typeof performance?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var e=("undefined"==typeof performance?Date:performance).now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}),Kl.prototype=Object.assign(Object.create(Ni.prototype),{constructor:Kl,getInput:function(){return this.gain},removeFilter:function(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},updateMatrixWorld:function(){var t=new $e,e=new Ke,i=new $e,n=new $e,r=new Ql;return function(a){Ni.prototype.updateMatrixWorld.call(this,a);var o=this.context.listener,s=this.up;if(this.timeDelta=r.getDelta(),this.matrixWorld.decompose(t,e,i),n.set(0,0,-1).applyQuaternion(e),o.positionX){var l=this.context.currentTime+this.timeDelta;o.positionX.linearRampToValueAtTime(t.x,l),o.positionY.linearRampToValueAtTime(t.y,l),o.positionZ.linearRampToValueAtTime(t.z,l),o.forwardX.linearRampToValueAtTime(n.x,l),o.forwardY.linearRampToValueAtTime(n.y,l),o.forwardZ.linearRampToValueAtTime(n.z,l),o.upX.linearRampToValueAtTime(s.x,l),o.upY.linearRampToValueAtTime(s.y,l),o.upZ.linearRampToValueAtTime(s.z,l)}else o.setPosition(t.x,t.y,t.z),o.setOrientation(n.x,n.y,n.z,s.x,s.y,s.z)}}()}),$l.prototype=Object.assign(Object.create(Ni.prototype),{constructor:$l,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},setMediaElementSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(!0!==this.isPlaying){if(!1!==this.hasPlaybackControl){var t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.onended=this.onEnded.bind(this),t.playbackRate.setValueAtTime(this.playbackRate,this.startTime),this.startTime=this.context.currentTime,t.start(this.startTime,this.offset),this.isPlaying=!0,this.source=t,this.connect()}console.warn("THREE.Audio: this Audio has no playback control.")}else console.warn("THREE.Audio: Audio is already playing.")},pause:function(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this.source.stop(),this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")},stop:function(){if(!1!==this.hasPlaybackControl)return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),!0===this.isPlaying?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this;console.warn("THREE.Audio: this Audio has no playback control.")},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}),th.prototype=Object.assign(Object.create($l.prototype),{constructor:th,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){return this.panner.refDistance=t,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){return this.panner.rolloffFactor=t,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){return this.panner.distanceModel=t,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){return this.panner.maxDistance=t,this},setDirectionalCone:function(t,e,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=i,this},updateMatrixWorld:function(){var t=new $e,e=new Ke,i=new $e,n=new $e;return function(r){Ni.prototype.updateMatrixWorld.call(this,r);var a=this.panner;if(this.matrixWorld.decompose(t,e,i),n.set(0,0,1).applyQuaternion(e),a.positionX){var o=this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(t.x,o),a.positionY.linearRampToValueAtTime(t.y,o),a.positionZ.linearRampToValueAtTime(t.z,o),a.orientationX.linearRampToValueAtTime(n.x,o),a.orientationY.linearRampToValueAtTime(n.y,o),a.orientationZ.linearRampToValueAtTime(n.z,o)}else a.setPosition(t.x,t.y,t.z),a.setOrientation(n.x,n.y,n.z)}}()}),Object.assign(eh.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var t=0,e=this.getFrequencyData(),i=0;i<e.length;i++)t+=e[i];return t/e.length}}),Object.assign(ih.prototype,{accumulate:function(t,e){var i=this.buffer,n=this.valueSize,r=t*n+n,a=this.cumulativeWeight;if(0===a){for(var o=0;o!==n;++o)i[r+o]=i[o];a=e}else{var s=e/(a+=e);this._mixBufferRegion(i,r,0,s,n)}this.cumulativeWeight=a},apply:function(t){var e=this.valueSize,i=this.buffer,n=t*e+e,r=this.cumulativeWeight,a=this.binding;if(this.cumulativeWeight=0,r<1){var o=3*e;this._mixBufferRegion(i,n,o,1-r,e)}for(var s=e,l=e+e;s!==l;++s)if(i[s]!==i[s+e]){a.setValue(i,n);break}},saveOriginalState:function(){var t=this.binding,e=this.buffer,i=this.valueSize,n=3*i;t.getValue(e,n);for(var r=i,a=n;r!==a;++r)e[r]=e[n+r%i];this.cumulativeWeight=0},restoreOriginalState:function(){var t=3*this.valueSize;this.binding.setValue(this.buffer,t)},_select:function(t,e,i,n,r){if(n>=.5)for(var a=0;a!==r;++a)t[e+a]=t[i+a]},_slerp:function(t,e,i,n){Ke.slerpFlat(t,e,t,e,t,i,n)},_lerp:function(t,e,i,n,r){for(var a=1-n,o=0;o!==r;++o){var s=e+o;t[s]=t[s]*a+t[i+o]*n}}});var nh,rh,ah,oh,sh,lh,hh,ch,uh,ph,dh,fh,mh,gh,vh;function qh(t,e,i){var n=i||yh.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}function yh(t,e,i){this.path=e,this.parsedPath=i||yh.parseTrackName(e),this.node=yh.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}function xh(){this.uuid=Ze.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var t={};this._indicesByUUID=t;for(var e=0,i=arguments.length;e!==i;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var n=this;this.stats={objects:{get total(){return n._objects.length},get inUse(){return this.total-n.nCachedObjects_}},get bindingsPerObject(){return n._bindings.length}}}function _h(t,e,i){this._mixer=t,this._clip=e,this._localRoot=i||null;for(var n=e.tracks,r=n.length,a=new Array(r),o={endingStart:Re,endingEnd:Re},s=0;s!==r;++s){var l=n[s].createInterpolant(null);a[s]=l,l.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Se,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}function bh(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}function wh(t){"string"==typeof t&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}function Mh(){en.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}function Th(t,e,i){ba.call(this,t,e),this.meshPerAttribute=i||1}function Sh(t,e,i,n){"number"==typeof i&&(n=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Gi.call(this,t,e,i),this.meshPerAttribute=n||1}function Eh(t,e,i,n){this.ray=new bn(t,e),this.near=i||0,this.far=n||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ah(t,e){return t.distance-e.distance}function Ph(t,e,i,n){if(!1!==t.visible&&(t.raycast(e,i),!0===n))for(var r=t.children,a=0,o=r.length;a<o;a++)Ph(r[a],e,i,!0)}function Lh(t,e,i){return this.radius=void 0!==t?t:1,this.phi=void 0!==e?e:0,this.theta=void 0!==i?i:0,this}function Rh(t,e,i){return this.radius=void 0!==t?t:1,this.theta=void 0!==e?e:0,this.y=void 0!==i?i:0,this}function Ch(t,e){this.min=void 0!==t?t:new Je(1/0,1/0),this.max=void 0!==e?e:new Je(-1/0,-1/0)}function zh(t,e){this.start=void 0!==t?t:new $e,this.end=void 0!==e?e:new $e}function Oh(t){Ni.call(this),this.material=t,this.render=function(){}}function Dh(t,e,i,n){this.object=t,this.size=void 0!==e?e:1;var r=void 0!==i?i:16711680,a=void 0!==n?n:1,o=0,s=this.object.geometry;s&&s.isGeometry?o=3*s.faces.length:s&&s.isBufferGeometry&&(o=s.attributes.normal.count);var l=new en,h=new Ji(2*o*3,3);l.addAttribute("position",h),Ca.call(this,l,new La({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}function Ih(t,e){Ni.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;for(var i=new en,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],r=0,a=1;r<32;r++,a++){var o=r/32*Math.PI*2,s=a/32*Math.PI*2;n.push(Math.cos(o),Math.sin(o),1,Math.cos(s),Math.sin(s),1)}i.addAttribute("position",new Ji(n,3));var l=new La({fog:!1});this.cone=new Ca(i,l),this.add(this.cone),this.update()}function Nh(t){for(var e=function t(e){var i=[];e&&e.isBone&&i.push(e);for(var n=0;n<e.children.length;n++)i.push.apply(i,t(e.children[n]));return i}(t),i=new en,n=[],r=[],a=new wi(0,0,1),o=new wi(0,1,0),s=0;s<e.length;s++){var l=e[s];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}i.addAttribute("position",new Ji(n,3)),i.addAttribute("color",new Ji(r,3));var h=new La({vertexColors:z,depthTest:!1,depthWrite:!1,transparent:!0});Ca.call(this,i,h),this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}function Bh(t,e,i){this.light=t,this.light.updateMatrixWorld(),this.color=i;var n=new Bo(e,4,2),r=new Mn({wireframe:!0,fog:!1});Tn.call(this,n,r),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}function Uh(t,e){Ni.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;var i=new La({fog:!1}),n=new en;n.addAttribute("position",new Gi(new Float32Array(15),3)),this.line=new Ra(n,i),this.add(this.line),this.update()}function Fh(t,e,i){Ni.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;var n=new Ya(e);n.rotateY(.5*Math.PI),this.material=new Mn({wireframe:!0,fog:!1}),void 0===this.color&&(this.material.vertexColors=z);var r=n.getAttribute("position"),a=new Float32Array(3*r.count);n.addAttribute("color",new Gi(a,3)),this.add(new Tn(n,this.material)),this.update()}function kh(t,e,i,n){t=t||10,e=e||10,i=new wi(void 0!==i?i:4473924),n=new wi(void 0!==n?n:8947848);for(var r=e/2,a=t/e,o=t/2,s=[],l=[],h=0,c=0,u=-o;h<=e;h++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);var p=h===r?i:n;p.toArray(l,c),c+=3,p.toArray(l,c),c+=3,p.toArray(l,c),c+=3,p.toArray(l,c),c+=3}var d=new en;d.addAttribute("position",new Ji(s,3)),d.addAttribute("color",new Ji(l,3));var f=new La({vertexColors:z});Ca.call(this,d,f)}function Gh(t,e,i,n,r,a){t=t||10,e=e||16,i=i||8,n=n||64,r=new wi(void 0!==r?r:4473924),a=new wi(void 0!==a?a:8947848);var o,s,l,h,c,u,p,d=[],f=[];for(h=0;h<=e;h++)l=h/e*(2*Math.PI),o=Math.sin(l)*t,s=Math.cos(l)*t,d.push(0,0,0),d.push(o,0,s),p=1&h?r:a,f.push(p.r,p.g,p.b),f.push(p.r,p.g,p.b);for(h=0;h<=i;h++)for(p=1&h?r:a,u=t-t/i*h,c=0;c<n;c++)l=c/n*(2*Math.PI),o=Math.sin(l)*u,s=Math.cos(l)*u,d.push(o,0,s),f.push(p.r,p.g,p.b),l=(c+1)/n*(2*Math.PI),o=Math.sin(l)*u,s=Math.cos(l)*u,d.push(o,0,s),f.push(p.r,p.g,p.b);var m=new en;m.addAttribute("position",new Ji(d,3)),m.addAttribute("color",new Ji(f,3));var g=new La({vertexColors:z});Ca.call(this,m,g)}function Hh(t,e,i,n){this.object=t,this.size=void 0!==e?e:1;var r=void 0!==i?i:16776960,a=void 0!==n?n:1,o=0,s=this.object.geometry;s&&s.isGeometry?o=s.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");var l=new en,h=new Ji(2*o*3,3);l.addAttribute("position",h),Ca.call(this,l,new La({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}function Vh(t,e,i){Ni.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,void 0===e&&(e=1);var n=new en;n.addAttribute("position",new Ji([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));var r=new La({fog:!1});this.lightPlane=new Ra(n,r),this.add(this.lightPlane),(n=new en).addAttribute("position",new Ji([0,0,0,0,0,1],3)),this.targetLine=new Ra(n,r),this.add(this.targetLine),this.update()}function jh(t){var e=new en,i=new La({color:16777215,vertexColors:C}),n=[],r=[],a={},o=new wi(16755200),s=new wi(16711680),l=new wi(43775),h=new wi(16777215),c=new wi(3355443);function u(t,e,i){p(t,i),p(e,i)}function p(t,e){n.push(0,0,0),r.push(e.r,e.g,e.b),void 0===a[t]&&(a[t]=[]),a[t].push(n.length/3-1)}u("n1","n2",o),u("n2","n4",o),u("n4","n3",o),u("n3","n1",o),u("f1","f2",o),u("f2","f4",o),u("f4","f3",o),u("f3","f1",o),u("n1","f1",o),u("n2","f2",o),u("n3","f3",o),u("n4","f4",o),u("p","n1",s),u("p","n2",s),u("p","n3",s),u("p","n4",s),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",h),u("p","c",c),u("cn1","cn2",c),u("cn3","cn4",c),u("cf1","cf2",c),u("cf3","cf4",c),e.addAttribute("position",new Ji(n,3)),e.addAttribute("color",new Ji(r,3)),Ca.call(this,e,i),this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}function Wh(t,e){this.object=t,void 0===e&&(e=16776960);var i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new en;r.setIndex(new Gi(i,1)),r.addAttribute("position",new Gi(n,3)),Ca.call(this,r,new La({color:e})),this.matrixAutoUpdate=!1,this.update()}function Xh(t,e){this.type="Box3Helper",this.box=t;var i=void 0!==e?e:16776960,n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new en;r.setIndex(new Gi(n,1)),r.addAttribute("position",new Ji([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),Ca.call(this,r,new La({color:i})),this.geometry.computeBoundingSphere()}function Yh(t,e,i){this.type="PlaneHelper",this.plane=t,this.size=void 0===e?1:e;var n=void 0!==i?i:16776960,r=new en;r.addAttribute("position",new Ji([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),r.computeBoundingSphere(),Ra.call(this,r,new La({color:n}));var a=new en;a.addAttribute("position",new Ji([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),a.computeBoundingSphere(),this.add(new Tn(a,new Mn({color:n,opacity:.2,transparent:!0,depthWrite:!1})))}function Zh(t,e,i,n,r,a){Ni.call(this),void 0===t&&(t=new THREE.Vector3(0,0,1)),void 0===e&&(e=new THREE.Vector3(0,0,0)),void 0===i&&(i=1),void 0===n&&(n=16776960),void 0===r&&(r=.2*i),void 0===a&&(a=.2*r),void 0===fh&&((fh=new en).addAttribute("position",new Ji([0,0,0,0,1,0],3)),(mh=new Yo(0,.5,1,5,1)).translate(0,-.5,0)),this.position.copy(e),this.line=new Ra(fh,new La({color:n})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tn(mh,new Mn({color:n})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,a)}function Jh(t){var e=[0,0,0,t=t||1,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=new en;i.addAttribute("position",new Ji(e,3)),i.addAttribute("color",new Ji([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));var n=new La({vertexColors:z});Ca.call(this,i,n)}function Qh(t,e,i,n,r,a,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new Pi(t,e,i,r,a,o)}Object.assign(qh.prototype,{getValue:function(t,e){this.bind();var i=this._targetGroup.nCachedObjects_,n=this._bindings[i];void 0!==n&&n.getValue(t,e)},setValue:function(t,e){for(var i=this._bindings,n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)},bind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()},unbind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}),Object.assign(yh,{Composite:qh,create:function(t,e,i){return t&&t.isAnimationObjectGroup?new yh.Composite(t,e,i):new yh(t,e,i)},sanitizeNodeName:(uh=new RegExp("[\\[\\]\\.:\\/]","g"),function(t){return t.replace(/\s/g,"_").replace(uh,"")}),parseTrackName:(nh="[^\\[\\]\\.:\\/]",rh="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",ah=/((?:WC+[\/:])*)/.source.replace("WC",nh),oh=/(WCOD+)?/.source.replace("WCOD",rh),sh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),lh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),hh=new RegExp("^"+ah+oh+sh+lh+"$"),ch=["material","materials","bones"],function(t){var e=hh.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);var i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==n&&-1!==n){var r=i.nodeName.substring(n+1);-1!==ch.indexOf(r)&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(null===i.propertyName||0===i.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}),findNode:function(t,e){if(!e||""===e||"root"===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){var i=t.skeleton.getBoneByName(e);if(void 0!==i)return i}if(t.children){var n=function(t){for(var i=0;i<t.length;i++){var r=t[i];if(r.name===e||r.uuid===e)return r;var a=n(r.children);if(a)return a}return null},r=n(t.children);if(r)return r}return null}}),Object.assign(yh.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName]},function(t,e){for(var i=this.resolvedProperty,n=0,r=i.length;n!==r;++n)t[e++]=i[n]},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex]},function(t,e){this.resolvedProperty.toArray(t,e)}],SetterByBindingTypeAndVersioning:[[function(t,e){this.targetObject[this.propertyName]=t[e]},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){for(var i=this.resolvedProperty,n=0,r=i.length;n!==r;++n)i[n]=t[e++]},function(t,e){for(var i=this.resolvedProperty,n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0},function(t,e){for(var i=this.resolvedProperty,n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty[this.propertyIndex]=t[e]},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty.fromArray(t,e)},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,e){this.bind(),this.getValue(t,e)},setValue:function(t,e){this.bind(),this.setValue(t,e)},bind:function(){var t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=yh.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,t){if(i){var a=e.objectIndex;switch(i){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(var o=0;o<t.length;o++)if(t[o].name===a){a=o;break}break;default:if(void 0===t[i])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[i]}if(void 0!==a){if(void 0===t[a])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[a]}}var s=t[n];if(void 0!==s){var l=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?l=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(l=this.Versioning.MatrixWorldNeedsUpdate);var h=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===n){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);for(o=0;o<this.node.geometry.morphAttributes.position.length;o++)if(t.geometry.morphAttributes.position[o].name===r){r=o;break}}else{if(!t.geometry.morphTargets)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);for(o=0;o<this.node.geometry.morphTargets.length;o++)if(t.geometry.morphTargets[o].name===r){r=o;break}}}h=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(h=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(h=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}else{var c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t)}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),//!\ DECLARE ALIAS AFTER assign prototype !
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */n.e._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(t){n.c.call(this,t),this._labels={},this.autoRemoveChildren=!0===this.vars.autoRemoveChildren,this.smoothChildTiming=!0===this.vars.smoothChildTiming,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var e,i,r=this.vars;for(i in r)e=r[i],a(e)&&-1!==e.join("").indexOf("{self}")&&(r[i]=this._swapSelfInParams(e));a(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},e=n.f._internals,i=t._internals={},r=e.isSelector,a=e.isArray,o=e.lazyTweens,s=e.lazyRender,l=n.e._gsDefine.globals,h=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i){var n,r,a=t.cycle;for(n in a)r=a[n],t[n]="function"==typeof r?r(i,e[i]):r[i%r.length];delete t.cycle},u=i.pauseCallback=function(){},p=function(t){var e,i=[],n=t.length;for(e=0;e!==n;i.push(t[e++]));return i},d=t.prototype=new n.c;return t.version="2.0.2",d.constructor=t,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,i,r){var a=i.repeat&&l.TweenMax||n.f;return e?this.add(new a(t,e,i),r):this.set(t,i,r)},d.from=function(t,e,i,r){return this.add((i.repeat&&l.TweenMax||n.f).from(t,e,i),r)},d.fromTo=function(t,e,i,r,a){var o=r.repeat&&l.TweenMax||n.f;return e?this.add(o.fromTo(t,e,i,r),a):this.set(t,r,a)},d.staggerTo=function(e,i,a,o,s,l,u,d){var f,m,g=new t({onComplete:l,onCompleteParams:u,callbackScope:d,smoothChildTiming:this.smoothChildTiming}),v=a.cycle;for("string"==typeof e&&(e=n.f.selector(e)||e),r(e=e||[])&&(e=p(e)),(o=o||0)<0&&((e=p(e)).reverse(),o*=-1),m=0;m<e.length;m++)(f=h(a)).startAt&&(f.startAt=h(f.startAt),f.startAt.cycle&&c(f.startAt,e,m)),v&&(c(f,e,m),null!=f.duration&&(i=f.duration,delete f.duration)),g.to(e[m],i,f,m*o);return this.add(g,s)},d.staggerFrom=function(t,e,i,n,r,a,o,s){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,n,r,a,o,s)},d.staggerFromTo=function(t,e,i,n,r,a,o,s,l){return n.startAt=i,n.immediateRender=0!=n.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,n,r,a,o,s,l)},d.call=function(t,e,i,r){return this.add(n.f.delayedCall(0,t,e,i),r)},d.set=function(t,e,i){return i=this._parseTimeOrLabel(i,0,!0),null==e.immediateRender&&(e.immediateRender=i===this._time&&!this._paused),this.add(new n.f(t,0,e),i)},t.exportRoot=function(e,i){null==(e=e||{}).smoothChildTiming&&(e.smoothChildTiming=!0);var r,a,o,s,l=new t(e),h=l._timeline;for(null==i&&(i=!0),h._remove(l,!0),l._startTime=0,l._rawPrevTime=l._time=l._totalTime=h._time,o=h._first;o;)s=o._next,i&&o instanceof n.f&&o.target===o.vars.onComplete||((a=o._startTime-o._delay)<0&&(r=1),l.add(o,a)),o=s;return h.add(l,0),r&&l.totalDuration(),l},d.add=function(e,i,r,o){var s,l,h,c,u,p;if("number"!=typeof i&&(i=this._parseTimeOrLabel(i,0,!0,e)),!(e instanceof n.a)){if(e instanceof Array||e&&e.push&&a(e)){for(r=r||"normal",o=o||0,s=i,l=e.length,h=0;h<l;h++)a(c=e[h])&&(c=new t({tweens:c})),this.add(c,s),"string"!=typeof c&&"function"!=typeof c&&("sequence"===r?s=c._startTime+c.totalDuration()/c._timeScale:"start"===r&&(c._startTime-=c.delay())),s+=o;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,i);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=n.f.delayedCall(0,e)}if(n.c.prototype.add.call(this,e,i),e._time&&(s=Math.max(0,Math.min(e.totalDuration(),(this.rawTime()-e._startTime)*e._timeScale)),Math.abs(s-e._totalTime)>1e-5&&e.render(s,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(p=(u=this).rawTime()>e._startTime;u._timeline;)p&&u._timeline.smoothChildTiming?u.totalTime(u._totalTime,!0):u._gc&&u._enabled(!0,!1),u=u._timeline;return this},d.remove=function(t){if(t instanceof n.a){this._remove(t,!1);var e=t._timeline=t.vars.useFrames?n.a._rootFramesTimeline:n.a._rootTimeline;return t._startTime=(t._paused?t._pauseTime:e._time)-(t._reversed?t.totalDuration()-t._totalTime:t._totalTime)/t._timeScale,this}if(t instanceof Array||t&&t.push&&a(t)){for(var i=t.length;--i>-1;)this.remove(t[i]);return this}return"string"==typeof t?this.removeLabel(t):this.kill(null,t)},d._remove=function(t,e){return n.c.prototype._remove.call(this,t,e),this._last?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,n){return this.add(t,e||0,i,n)},d.appendMultiple=function(t,e,i,n){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,n)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,i,r){var a=n.f.delayedCall(0,u,i,r||this);return a.vars.onComplete=a.vars.onReverseComplete=e,a.data="isPause",this._hasPause=!0,this.add(a,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(t,e,i,r){var o,s;if(r instanceof n.a&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&a(r)))for(s=r.length;--s>-1;)r[s]instanceof n.a&&r[s].timeline===this&&this.remove(r[s]);if(o="number"!=typeof t||e?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof e)return this._parseTimeOrLabel(e,i&&"number"==typeof t&&null==this._labels[e]?t-o:0,i);if(e=e||0,"string"!=typeof t||!isNaN(t)&&null==this._labels[t])null==t&&(t=o);else{if(-1===(s=t.indexOf("=")))return null==this._labels[t]?i?this._labels[t]=o+e:e:this._labels[t]+e;e=parseInt(t.charAt(s-1)+"1",10)*Number(t.substr(s+1)),t=s>1?this._parseTimeOrLabel(t.substr(0,s-1),0,i):o}return Number(t)+e},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),!1!==e)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var n,r,a,l,h,c,u,p=this._time,d=this._dirty?this.totalDuration():this._totalDuration,f=this._startTime,m=this._timeScale,g=this._paused;if(p!==this._time&&(t+=this._time-p),t>=d-1e-7&&t>=0)this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(r=!0,l="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(t<=0&&t>=-1e-7||this._rawPrevTime<0||1e-10===this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>1e-10&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:1e-10,t=d+1e-4;else if(t<1e-7)if(this._totalTime=this._time=0,(0!==p||0===this._duration&&1e-10!==this._rawPrevTime&&(this._rawPrevTime>0||t<0&&this._rawPrevTime>=0))&&(l="onReverseComplete",r=this._reversed),t<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=r=!0,l="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:1e-10,0===t&&r)for(n=this._first;n&&0===n._startTime;)n._duration||(r=!1),n=n._next;t=0,this._initted||(h=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=p)for(n=this._first;n&&n._startTime<=t&&!c;)n._duration||"isPause"!==n.data||n.ratio||0===n._startTime&&0===this._rawPrevTime||(c=n),n=n._next;else for(n=this._last;n&&n._startTime>=t&&!c;)n._duration||"isPause"===n.data&&n._rawPrevTime>0&&(c=n),n=n._prev;c&&(this._time=t=c._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==p&&this._first||i||h||c){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==p&&t>0&&(this._active=!0),0===p&&this.vars.onStart&&(0===this._time&&this._duration||e||this._callback("onStart")),(u=this._time)>=p)for(n=this._first;n&&(a=n._next,u===this._time&&(!this._paused||g));)(n._active||n._startTime<=u&&!n._paused&&!n._gc)&&(c===n&&this.pause(),n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=a;else for(n=this._last;n&&(a=n._prev,u===this._time&&(!this._paused||g));){if(n._active||n._startTime<=p&&!n._paused&&!n._gc){if(c===n){for(c=n._prev;c&&c.endTime()>this._time;)c.render(c._reversed?c.totalDuration()-(t-c._startTime)*c._timeScale:(t-c._startTime)*c._timeScale,e,i),c=c._prev;c=null,this.pause()}n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)}n=a}this._onUpdate&&(e||(o.length&&s(),this._callback("onUpdate"))),l&&(this._gc||f!==this._startTime&&m===this._timeScale||(0===this._time||d>=this.totalDuration())&&(r&&(o.length&&s(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))}},d._hasPausedChild=function(){for(var e=this._first;e;){if(e._paused||e instanceof t&&e._hasPausedChild())return!0;e=e._next}return!1},d.getChildren=function(t,e,i,r){r=r||-9999999999;for(var a=[],o=this._first,s=0;o;)o._startTime<r||(o instanceof n.f?!1!==e&&(a[s++]=o):(!1!==i&&(a[s++]=o),!1!==t&&(s=(a=a.concat(o.getChildren(!0,e,i))).length))),o=o._next;return a},d.getTweensOf=function(t,e){var i,r,a=this._gc,o=[],s=0;for(a&&this._enabled(!0,!0),r=(i=n.f.getTweensOf(t)).length;--r>-1;)(i[r].timeline===this||e&&this._contains(i[r]))&&(o[s++]=i[r]);return a&&this._enabled(!1,!0),o},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var n,r=this._first,a=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(n in a)a[n]>=i&&(a[n]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),n=i.length,r=!1;--n>-1;)i[n]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return!1!==t&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return n.a.prototype.invalidate.call(this)},d._enabled=function(t,e){if(t===this._gc)for(var i=this._first;i;)i._enabled(t,!0),i=i._next;return n.c.prototype._enabled.call(this,t,e)},d.totalTime=function(t,e,i){this._forcingPlayhead=!0;var r=n.a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,r},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,n=0,r=this._last,a=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>a&&this._sortChildren&&!r._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(r,r._startTime-r._delay),this._calculatingDuration=0):a=r._startTime,r._startTime<0&&!r._paused&&(n-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale,this._time-=r._startTime,this._totalTime-=r._startTime,this._rawPrevTime-=r._startTime),this.shiftChildren(-r._startTime,!1,-9999999999),a=0),(i=r._startTime+r._totalDuration/r._timeScale)>n&&(n=i),r=e;this._duration=this._totalDuration=n,this._dirty=!1}return this._totalDuration}return t&&this.totalDuration()?this.timeScale(this._totalDuration/t):this},d.paused=function(t){if(!t)for(var e=this._first,i=this._time;e;)e._startTime===i&&"isPause"===e.data&&(e._rawPrevTime=0),e=e._next;return n.a.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var t=this._timeline;t._timeline;)t=t._timeline;return t===n.a._rootFramesTimeline},d.rawTime=function(t){return t&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(t)-this._startTime)*this._timeScale},t},!0);var r=n.g.TimelineLite;
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/n.e._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(t){var e,i=[],n=t.length;for(e=0;e!==n;i.push(t[e++]));return i},e=function(t,e,i){var n,r,a=t.cycle;for(n in a)r=a[n],t[n]="function"==typeof r?r(i,e[i]):r[i%r.length];delete t.cycle},i=function(t,e,r){n.f.call(this,t,e,r),this._cycle=0,this._yoyo=!0===this.vars.yoyo||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=i.prototype.render},r=n.f._internals,a=r.isSelector,o=r.isArray,s=i.prototype=n.f.to({},.1,{}),l=[];i.version="2.0.2",s.constructor=i,s.kill()._gc=!1,i.killTweensOf=i.killDelayedCallsTo=n.f.killTweensOf,i.getTweensOf=n.f.getTweensOf,i.lagSmoothing=n.f.lagSmoothing,i.ticker=n.f.ticker,i.render=n.f.render,s.invalidate=function(){return this._yoyo=!0===this.vars.yoyo||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),n.f.prototype.invalidate.call(this)},s.updateTo=function(t,e){var i,r=this.ratio,a=this.vars.immediateRender||t.immediateRender;for(i in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[i]=t[i];if(this._initted||a)if(e)this._initted=!1,a&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&n.f._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var o=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(o,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||a)for(var s,l=1/(1-r),h=this._firstPT;h;)s=h.s+h.c,h.c*=l,h.s=s-h.c,h=h._next;return this},s.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var a,o,s,l,h,c,u,p,d,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,g=this._totalTime,v=this._cycle,q=this._duration,y=this._rawPrevTime;if(t>=f-1e-7&&t>=0?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=q,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(a=!0,o="onComplete",i=i||this._timeline.autoRemoveChildren),0===q&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(y<0||t<=0&&t>=-1e-7||1e-10===y&&"isPause"!==this.data)&&y!==t&&(i=!0,y>1e-10&&(o="onReverseComplete")),this._rawPrevTime=p=!e||t||y===t?t:1e-10)):t<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==g||0===q&&y>0)&&(o="onReverseComplete",a=this._reversed),t<0&&(this._active=!1,0===q&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=p=!e||t||y===t?t:1e-10)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&g<=t&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!=(1&this._cycle)&&(this._time=q-this._time,(d=this._yoyoEase||this.vars.yoyoEase)&&(this._yoyoEase||(!0!==d||this._initted?this._yoyoEase=d=!0===d?this._ease:d instanceof n.b?d:n.b.map[d]:(d=this.vars.ease,this._yoyoEase=d=d?d instanceof n.b?d:"function"==typeof d?new n.b(d,this.vars.easeParams):n.b.map[d]||n.f.defaultEase:n.f.defaultEase)),this.ratio=d?1-d.getRatio((q-this._time)/q):0)),this._time>q?this._time=q:this._time<0&&(this._time=0)),this._easeType&&!d?(h=this._time/q,(1===(c=this._easeType)||3===c&&h>=.5)&&(h=1-h),3===c&&(h*=2),1===(u=this._easePower)?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),1===c?this.ratio=1-h:2===c?this.ratio=h:this._time/q<.5?this.ratio=h/2:this.ratio=1-h/2):d||(this.ratio=this._ease.getRatio(this._time/q))),m!==this._time||i||v!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=g,this._rawPrevTime=y,this._cycle=v,r.lazyTweens.push(this),void(this._lazy=[t,e]);!this._time||a||d?a&&this._ease._calcEnd&&!d&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/q)}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===g&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,!0,i):o||(o="_dummyGS")),this.vars.onStart&&(0===this._totalTime&&0!==q||e||this._callback("onStart"))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(t<0&&this._startAt&&this._startTime&&this._startAt.render(t,!0,i),e||(this._totalTime!==g||o)&&this._callback("onUpdate")),this._cycle!==v&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),o&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,!0,i),a&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o),0===q&&1e-10===this._rawPrevTime&&1e-10!==p&&(this._rawPrevTime=0)))}else g!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},i.to=function(t,e,n){return new i(t,e,n)},i.from=function(t,e,n){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,new i(t,e,n)},i.fromTo=function(t,e,n,r){return r.startAt=n,r.immediateRender=0!=r.immediateRender&&0!=n.immediateRender,new i(t,e,r)},i.staggerTo=i.allTo=function(r,s,h,c,u,p,d){c=c||0;var f,m,g,v,q=0,y=[],x=function(){h.onComplete&&h.onComplete.apply(h.onCompleteScope||this,arguments),u.apply(d||h.callbackScope||this,p||l)},_=h.cycle,b=h.startAt&&h.startAt.cycle;for(o(r)||("string"==typeof r&&(r=n.f.selector(r)||r),a(r)&&(r=t(r))),r=r||[],c<0&&((r=t(r)).reverse(),c*=-1),f=r.length-1,g=0;g<=f;g++){for(v in m={},h)m[v]=h[v];if(_&&(e(m,r,g),null!=m.duration&&(s=m.duration,delete m.duration)),b){for(v in b=m.startAt={},h.startAt)b[v]=h.startAt[v];e(m.startAt,r,g)}m.delay=q+(m.delay||0),g===f&&u&&(m.onComplete=x),y[g]=new i(r[g],s,m),q+=c}return y},i.staggerFrom=i.allFrom=function(t,e,n,r,a,o,s){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,i.staggerTo(t,e,n,r,a,o,s)},i.staggerFromTo=i.allFromTo=function(t,e,n,r,a,o,s,l){return r.startAt=n,r.immediateRender=0!=r.immediateRender&&0!=n.immediateRender,i.staggerTo(t,e,r,a,o,s,l)},i.delayedCall=function(t,e,n,r,a){return new i(e,0,{delay:t,onComplete:e,onCompleteParams:n,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:n,immediateRender:!1,useFrames:a,overwrite:0})},i.set=function(t,e){return new i(t,0,e)},i.isTweening=function(t){return n.f.getTweensOf(t,!0).length>0};var h=function(t,e){for(var i=[],r=0,a=t._first;a;)a instanceof n.f?i[r++]=a:(e&&(i[r++]=a),r=(i=i.concat(h(a,e))).length),a=a._next;return i},c=i.getAllTweens=function(t){return h(n.a._rootTimeline,t).concat(h(n.a._rootFramesTimeline,t))};i.killAll=function(t,e,i,r){null==e&&(e=!0),null==i&&(i=!0);var a,o,s,l=c(0!=r),h=l.length,u=e&&i&&r;for(s=0;s<h;s++)o=l[s],(u||o instanceof n.c||(a=o.target===o.vars.onComplete)&&i||e&&!a)&&(t?o.totalTime(o._reversed?0:o.totalDuration()):o._enabled(!1,!1))},i.killChildTweensOf=function(e,s){if(null!=e){var l,h,c,u,p,d=r.tweenLookup;if("string"==typeof e&&(e=n.f.selector(e)||e),a(e)&&(e=t(e)),o(e))for(u=e.length;--u>-1;)i.killChildTweensOf(e[u],s);else{for(c in l=[],d)for(h=d[c].target.parentNode;h;)h===e&&(l=l.concat(d[c].tweens)),h=h.parentNode;for(p=l.length,u=0;u<p;u++)s&&l[u].totalTime(l[u].totalDuration()),l[u]._enabled(!1,!1)}}};var u=function(t,e,i,r){e=!1!==e,i=!1!==i;for(var a,o,s=c(r=!1!==r),l=e&&i&&r,h=s.length;--h>-1;)o=s[h],(l||o instanceof n.c||(a=o.target===o.vars.onComplete)&&i||e&&!a)&&o.paused(t)};return i.pauseAll=function(t,e,i){u(!0,t,e,i)},i.resumeAll=function(t,e,i){u(!1,t,e,i)},i.globalTimeScale=function(t){var e=n.a._rootTimeline,i=n.f.ticker.time;return arguments.length?(t=t||1e-10,e._startTime=i-(i-e._startTime)*e._timeScale/t,e=n.a._rootFramesTimeline,i=n.f.ticker.frame,e._startTime=i-(i-e._startTime)*e._timeScale/t,e._timeScale=n.a._rootTimeline._timeScale=t,t):e._timeScale},s.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},s.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},s.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},s.duration=function(t){return arguments.length?n.a.prototype.duration.call(this,t):this._duration},s.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},s.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},s.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},s.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},i},!0);var a=n.g.TweenMax;
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */u._onInitAllProps=function(){var t,e,i,n,r=this._tween,a=r.vars.roundProps,o={},s=r._propLookup.roundProps;if("object"!=typeof a||a.push)for("string"==typeof a&&(a=a.split(",")),i=a.length;--i>-1;)o[a[i]]=Math.round;else for(n in a)o[n]=h(a[n]);for(n in o)for(t=r._firstPT;t;)e=t._next,t.pg?t.t._mod(o):t.n===n&&(2===t.f&&t.t?c(t.t._firstPT,o[n]):(this._add(t.t,n,t.s,t.c,o[n]),e&&(e._prev=t._prev),t._prev?t._prev._next=e:r._firstPT===t&&(r._firstPT=e),t._next=t._prev=null,r._propLookup[n]=s)),t=e;return!1},u._add=function(t,e,i,n,r){this._addTween(t,e,i,i+n,e,r||Math.round),this._overwriteProps.push(e)};
/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var p=n.e._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(t,e,i,n){"object"!=typeof e&&(e={rotation:e}),this.finals={};var r,a,o,s,l,h,c=!0===e.useRadians?2*Math.PI:360;for(r in e)"useRadians"!==r&&("function"==typeof(s=e[r])&&(s=s(n,t)),a=(h=(s+"").split("_"))[0],o=parseFloat("function"!=typeof t[r]?t[r]:t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]()),l=(s=this.finals[r]="string"==typeof a&&"="===a.charAt(1)?o+parseInt(a.charAt(0)+"1",10)*Number(a.substr(2)):Number(a)||0)-o,h.length&&(-1!==(a=h.join("_")).indexOf("short")&&(l%=c)!==l%(c/2)&&(l=l<0?l+c:l-c),-1!==a.indexOf("_cw")&&l<0?l=(l+9999999999*c)%c-(l/c|0)*c:-1!==a.indexOf("ccw")&&l>0&&(l=(l-9999999999*c)%c-(l/c|0)*c)),(l>1e-6||l<-1e-6)&&(this._addTween(t,r,o,o+l,r),this._overwriteProps.push(r)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}});p._autoCSS=!0,
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
n.e._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(){var t=function(t){r.call(this,t),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._dirty=!0},e=n.f._internals,i=e.lazyTweens,a=e.lazyRender,o=n.e._gsDefine.globals,s=new n.b(null,null,1,0),l=t.prototype=new r;return l.constructor=t,l.kill()._gc=!1,t.version="2.0.2",l.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),r.prototype.invalidate.call(this)},l.addCallback=function(t,e,i,r){return this.add(n.f.delayedCall(0,t,i,r),e)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),n=i.length,r=this._parseTimeOrLabel(e);--n>-1;)i[n]._startTime===r&&i[n]._enabled(!1,!1);return this},l.removePause=function(t){return this.removeCallback(r._internals.pauseCallback,t)},l.tweenTo=function(t,e){e=e||{};var i,r,a,l={ease:s,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=e.repeat&&o.TweenMax||n.f;for(r in e)l[r]=e[r];return l.time=this._parseTimeOrLabel(t),i=Math.abs(Number(l.time)-this._time)/this._timeScale||.001,a=new h(this,i,l),l.onStart=function(){a.target.paused(!0),a.vars.time===a.target.time()||i!==a.duration()||a.isFromTo||a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale).render(a.time(),!0,!0),e.onStart&&e.onStart.apply(e.onStartScope||e.callbackScope||a,e.onStartParams||[])},a},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=!1!==i.immediateRender;var n=this.tweenTo(e,i);return n.isFromTo=1,n.duration(Math.abs(n.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,n){this._gc&&this._enabled(!0,!1);var r,o,s,l,h,c,u,p,d=this._time,f=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,g=this._totalTime,v=this._startTime,q=this._timeScale,y=this._rawPrevTime,x=this._paused,_=this._cycle;if(d!==this._time&&(t+=this._time-d),t>=f-1e-7&&t>=0)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(o=!0,l="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(t<=0&&t>=-1e-7||y<0||1e-10===y)&&y!==t&&this._first&&(h=!0,y>1e-10&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:1e-10,this._yoyo&&0!=(1&this._cycle)?this._time=t=0:(this._time=m,t=m+1e-4);else if(t<1e-7)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==d||0===m&&1e-10!==y&&(y>0||t<0&&y>=0)&&!this._locked)&&(l="onReverseComplete",o=this._reversed),t<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=o=!0,l="onReverseComplete"):y>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=m||!e||t||this._rawPrevTime===t?t:1e-10,0===t&&o)for(r=this._first;r&&0===r._startTime;)r._duration||(o=!1),r=r._next;t=0,this._initted||(h=!0)}else if(0===m&&y<0&&(h=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(c=m+this._repeatDelay,this._cycle=this._totalTime/c>>0,0!==this._cycle&&this._cycle===this._totalTime/c&&g<=t&&this._cycle--,this._time=this._totalTime-this._cycle*c,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?(this._time=m,t=m+1e-4):this._time<0?this._time=t=0:t=this._time)),this._hasPause&&!this._forcingPlayhead&&!e){if((t=this._time)>=d||this._repeat&&_!==this._cycle)for(r=this._first;r&&r._startTime<=t&&!u;)r._duration||"isPause"!==r.data||r.ratio||0===r._startTime&&0===this._rawPrevTime||(u=r),r=r._next;else for(r=this._last;r&&r._startTime>=t&&!u;)r._duration||"isPause"===r.data&&r._rawPrevTime>0&&(u=r),r=r._prev;u&&u._startTime<m&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==_&&!this._locked){var b=this._yoyo&&0!=(1&_),w=b===(this._yoyo&&0!=(1&this._cycle)),M=this._totalTime,T=this._cycle,S=this._rawPrevTime,E=this._time;if(this._totalTime=_*m,this._cycle<_?b=!b:this._totalTime+=m,this._time=d,this._rawPrevTime=0===m?y-1e-4:y,this._cycle=_,this._locked=!0,d=b?0:m,this.render(d,e,0===m),e||this._gc||this.vars.onRepeat&&(this._cycle=T,this._locked=!1,this._callback("onRepeat")),d!==this._time)return;if(w&&(this._cycle=_,this._locked=!0,d=b?m+1e-4:-1e-4,this.render(d,!0,!1)),this._locked=!1,this._paused&&!x)return;this._time=E,this._totalTime=M,this._cycle=T,this._rawPrevTime=S}if(this._time!==d&&this._first||n||h||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==g&&t>0&&(this._active=!0),0===g&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||e||this._callback("onStart")),(p=this._time)>=d)for(r=this._first;r&&(s=r._next,p===this._time&&(!this._paused||x));)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(u===r&&this.pause(),r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,n):r.render((t-r._startTime)*r._timeScale,e,n)),r=s;else for(r=this._last;r&&(s=r._prev,p===this._time&&(!this._paused||x));){if(r._active||r._startTime<=d&&!r._paused&&!r._gc){if(u===r){for(u=r._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,n),u=u._prev;u=null,this.pause()}r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,n):r.render((t-r._startTime)*r._timeScale,e,n)}r=s}this._onUpdate&&(e||(i.length&&a(),this._callback("onUpdate"))),l&&(this._locked||this._gc||v!==this._startTime&&q===this._timeScale||(0===this._time||f>=this.totalDuration())&&(o&&(i.length&&a(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))}else g!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var n,r,a=[],o=this.getChildren(t,e,i),s=0,l=o.length;for(n=0;n<l;n++)(r=o[n]).isActive()&&(a[s++]=r);return a},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),n=i.length;for(e=0;e<n;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(e[i].time<t)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.invalidate=function(){return this._locked=!1,r.prototype.invalidate.call(this)},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()||0},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()||0},l.totalDuration=function(t){return arguments.length?-1!==this._repeat&&t?this.timeScale(this.totalDuration()/t):this:(this._dirty&&(r.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},t},!0);var d=n.g.TimelineMax,f=180/Math.PI,m=[],g=[],v=[],q={},y=n.e._gsDefine.globals,x=function(t,e,i,n){i===n&&(i=n-(n-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=n,this.da=n-t,this.ca=i-t,this.ba=e-t},_=function(t,e,i,n){var r={a:t},a={},o={},s={c:n},l=(t+e)/2,h=(e+i)/2,c=(i+n)/2,u=(l+h)/2,p=(h+c)/2,d=(p-u)/8;return r.b=l+(t-l)/4,a.b=u+d,r.c=a.a=(r.b+a.b)/2,a.c=o.a=(u+p)/2,o.b=p-d,s.b=c+(n-c)/4,o.c=s.a=(o.b+s.b)/2,[r,a,o,s]},b=function(t,e,i,n,r){var a,o,s,l,h,c,u,p,d,f,q,y,x,b=t.length-1,w=0,M=t[0].a;for(a=0;a<b;a++)o=(h=t[w]).a,s=h.d,l=t[w+1].d,r?(q=m[a],x=((y=g[a])+q)*e*.25/(n?.5:v[a]||.5),p=s-((c=s-(s-o)*(n?.5*e:0!==q?x/q:0))+(((u=s+(l-s)*(n?.5*e:0!==y?x/y:0))-c)*(3*q/(q+y)+.5)/4||0))):p=s-((c=s-(s-o)*e*.5)+(u=s+(l-s)*e*.5))/2,c+=p,u+=p,h.c=d=c,h.b=0!==a?M:M=h.a+.6*(h.c-h.a),h.da=s-o,h.ca=d-o,h.ba=M-o,i?(f=_(o,M,d,s),t.splice(w,1,f[0],f[1],f[2],f[3]),w+=4):w++,M=u;(h=t[w]).b=M,h.c=M+.4*(h.d-M),h.da=h.d-h.a,h.ca=h.c-h.a,h.ba=M-h.a,i&&(f=_(h.a,M,h.c,h.d),t.splice(w,1,f[0],f[1],f[2],f[3]))},w=function(t,e,i,n){var r,a,o,s,l,h,c=[];if(n)for(a=(t=[n].concat(t)).length;--a>-1;)"string"==typeof(h=t[a][e])&&"="===h.charAt(1)&&(t[a][e]=n[e]+Number(h.charAt(0)+h.substr(2)));if((r=t.length-2)<0)return c[0]=new x(t[0][e],0,0,t[0][e]),c;for(a=0;a<r;a++)o=t[a][e],s=t[a+1][e],c[a]=new x(o,0,0,s),i&&(l=t[a+2][e],m[a]=(m[a]||0)+(s-o)*(s-o),g[a]=(g[a]||0)+(l-s)*(l-s));return c[a]=new x(t[a][e],0,0,t[a+1][e]),c},M=function(t,e,i,n,r,a){var o,s,l,h,c,u,p,d,f={},y=[],x=a||t[0];for(s in r="string"==typeof r?","+r+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==e&&(e=1),t[0])y.push(s);if(t.length>1){for(d=t[t.length-1],p=!0,o=y.length;--o>-1;)if(s=y[o],Math.abs(x[s]-d[s])>.05){p=!1;break}p&&(t=t.concat(),a&&t.unshift(a),t.push(t[1]),a=t[t.length-3])}for(m.length=g.length=v.length=0,o=y.length;--o>-1;)s=y[o],q[s]=-1!==r.indexOf(","+s+","),f[s]=w(t,s,q[s],a);for(o=m.length;--o>-1;)m[o]=Math.sqrt(m[o]),g[o]=Math.sqrt(g[o]);if(!n){for(o=y.length;--o>-1;)if(q[s])for(u=(l=f[y[o]]).length-1,h=0;h<u;h++)c=l[h+1].da/g[h]+l[h].da/m[h]||0,v[h]=(v[h]||0)+c*c;for(o=v.length;--o>-1;)v[o]=Math.sqrt(v[o])}for(o=y.length,h=i?4:1;--o>-1;)l=f[s=y[o]],b(l,e,i,n,q[s]),p&&(l.splice(0,h),l.splice(l.length-h,h));return f},T=function(t,e,i){for(var n,r,a,o,s,l,h,c,u,p,d,f=1/i,m=t.length;--m>-1;)for(a=(p=t[m]).a,o=p.d-a,s=p.c-a,l=p.b-a,n=r=0,c=1;c<=i;c++)n=r-(r=((h=f*c)*h*o+3*(u=1-h)*(h*s+u*l))*h),e[d=m*i+c-1]=(e[d]||0)+n*n},S=n.e._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var n,r,a,o,s,l=e.values||[],h={},c=l[0],u=e.autoRotate||i.vars.orientToBezier;for(n in this._autoRotate=u?u instanceof Array?u:[["x","y","rotation",!0===u?0:Number(u)||0]]:null,c)this._props.push(n);for(a=this._props.length;--a>-1;)n=this._props[a],this._overwriteProps.push(n),r=this._func[n]="function"==typeof t[n],h[n]=r?t[n.indexOf("set")||"function"!=typeof t["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(t[n]),s||h[n]!==l[0][n]&&(s=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?M(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,s):function(t,e,i){var n,r,a,o,s,l,h,c,u,p,d,f={},m="cubic"===(e=e||"soft")?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||t.length<m+1)throw"invalid Bezier data";for(u in t[0])v.push(u);for(l=v.length;--l>-1;){for(f[u=v[l]]=s=[],p=0,c=t.length,h=0;h<c;h++)n=null==i?t[h][u]:"string"==typeof(d=t[h][u])&&"="===d.charAt(1)?i[u]+Number(d.charAt(0)+d.substr(2)):Number(d),g&&h>1&&h<c-1&&(s[p++]=(n+s[p-2])/2),s[p++]=n;for(c=p-m+1,p=0,h=0;h<c;h+=m)n=s[h],r=s[h+1],a=s[h+2],o=2===m?0:s[h+3],s[p++]=d=3===m?new x(n,r,a,o):new x(n,(2*r+n)/3,(2*r+a)/3,a);s.length=p}return f}(l,e.type,h),this._segCount=this._beziers[n].length,this._timeRes){var p=function(t,e){var i,n,r,a,o=[],s=[],l=0,h=0,c=(e=e>>0||6)-1,u=[],p=[];for(i in t)T(t[i],o,e);for(r=o.length,n=0;n<r;n++)l+=Math.sqrt(o[n]),p[a=n%e]=l,a===c&&(h+=l,u[a=n/e>>0]=p,s[a]=h,l=0,p=[]);return{length:h,lengths:s,segments:u}}(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(u=this._autoRotate)for(this._initialRotations=[],u[0]instanceof Array||(this._autoRotate=u=[u]),a=u.length;--a>-1;){for(o=0;o<3;o++)n=u[a][o],this._func[n]="function"==typeof t[n]&&t[n.indexOf("set")||"function"!=typeof t["get"+n.substr(3)]?n:"get"+n.substr(3)];n=u[a][2],this._initialRotations[a]=(this._func[n]?this._func[n].call(this._target):this._target[n])||0,this._overwriteProps.push(n)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(t){var e,i,n,r,a,o,s,l,h,c,u=this._segCount,p=this._func,d=this._target,m=t!==this._startRatio;if(this._timeRes){if(h=this._lengths,c=this._curSeg,t*=this._length,n=this._li,t>this._l2&&n<u-1){for(l=u-1;n<l&&(this._l2=h[++n])<=t;);this._l1=h[n-1],this._li=n,this._curSeg=c=this._segments[n],this._s2=c[this._s1=this._si=0]}else if(t<this._l1&&n>0){for(;n>0&&(this._l1=h[--n])>=t;);0===n&&t<this._l1?this._l1=0:n++,this._l2=h[n],this._li=n,this._curSeg=c=this._segments[n],this._s1=c[(this._si=c.length-1)-1]||0,this._s2=c[this._si]}if(e=n,t-=this._l1,n=this._si,t>this._s2&&n<c.length-1){for(l=c.length-1;n<l&&(this._s2=c[++n])<=t;);this._s1=c[n-1],this._si=n}else if(t<this._s1&&n>0){for(;n>0&&(this._s1=c[--n])>=t;);0===n&&t<this._s1?this._s1=0:n++,this._s2=c[n],this._si=n}o=(n+(t-this._s1)/(this._s2-this._s1))*this._prec||0}else o=(t-(e=t<0?0:t>=1?u-1:u*t>>0)*(1/u))*u;for(i=1-o,n=this._props.length;--n>-1;)r=this._props[n],s=(o*o*(a=this._beziers[r][e]).da+3*i*(o*a.ca+i*a.ba))*o+a.a,this._mod[r]&&(s=this._mod[r](s,d)),p[r]?d[r](s):d[r]=s;if(this._autoRotate){var g,v,q,y,x,_,b,w=this._autoRotate;for(n=w.length;--n>-1;)r=w[n][2],_=w[n][3]||0,b=!0===w[n][4]?1:f,a=this._beziers[w[n][0]],g=this._beziers[w[n][1]],a&&g&&(a=a[e],g=g[e],v=a.a+(a.b-a.a)*o,v+=((y=a.b+(a.c-a.b)*o)-v)*o,y+=(a.c+(a.d-a.c)*o-y)*o,q=g.a+(g.b-g.a)*o,q+=((x=g.b+(g.c-g.b)*o)-q)*o,x+=(g.c+(g.d-g.c)*o-x)*o,s=m?Math.atan2(x-q,y-v)*b+_:this._initialRotations[n],this._mod[r]&&(s=this._mod[r](s,d)),p[r]?d[r](s):d[r]=s)}}}),E=S.prototype;
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/S.bezierThrough=M,S.cubicToQuadratic=_,S._autoCSS=!0,S.quadraticToCubic=function(t,e,i){return new x(t,(2*e+t)/3,(2*e+i)/3,i)},S._cssRegister=function(){var t=y.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,n=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,a,o,s,l){e instanceof Array&&(e={values:e}),l=new S;var h,c,u,p=e.values,d=p.length-1,f=[],m={};if(d<0)return s;for(h=0;h<=d;h++)u=i(t,p[h],o,s,l,d!==h),f[h]=u.end;for(c in e)m[c]=e[c];return m.values=f,(s=new r(t,"bezier",0,0,u.pt,2)).data=u,s.plugin=l,s.setRatio=n,0===m.autoRotate&&(m.autoRotate=!0),!m.autoRotate||m.autoRotate instanceof Array||(h=!0===m.autoRotate?0:Number(m.autoRotate),m.autoRotate=null!=u.end.left?[["left","top","rotation",h,!1]]:null!=u.end.x&&[["x","y","rotation",h,!1]]),m.autoRotate&&(o._transform||o._enableTransforms(!1),u.autoRotate=o._target._gsTransform,u.proxy.rotation=u.autoRotate.rotation||0,o._overwriteProps.push("rotation")),l._onInitTween(u.proxy,m,o._tween),s}})}},E._mod=function(t){for(var e,i=this._overwriteProps,n=i.length;--n>-1;)(e=t[i[n]])&&"function"==typeof e&&(this._mod[i[n]]=e)},E._kill=function(t){var e,i,n=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=n.length;--i>-1;)n[i]===e&&n.splice(i,1);if(n=this._autoRotate)for(i=n.length;--i>-1;)t[n[i][2]]&&n.splice(i,1);return this._super._kill.call(this,t)},
/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
;! function(e) {
    function t(t) {
        for (var o, a, c = t[0], u = t[1], s = t[2], l = 0, p = []; l < c.length; l++) a = c[l], r[a] && p.push(r[a][0]), r[a] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        for (f && f(t); p.length;) p.shift()();
        return i.push.apply(i, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, c = 1; c < n.length; c++) {
                var u = n[c];
                0 !== r[u] && (o = !1)
            }
            o && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var o = {},
        r = {
            4: 0
        },
        i = [];

    function a(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = o, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "";
    var c = window.webpackJsonp = window.webpackJsonp || [],
        u = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var s = 0; s < c.length; s++) t(c[s]);
    var f = u;
    i.push([30, 0]), n()
}({
    27: function(e, t, n) {},
    30: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = n(6),
            i = n(15),
            a = n(10),
            c = n(9),
            u = n(2),
            s = n(11),
            f = n(7),
            l = n(8),
            p = n(34),
            y = n(37),
            h = n(35),
            b = n(36);

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function w(e, t) {
            return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function O(e, t) {
            return (O = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var g, j, P = n(4);
        n(14), n(27);

        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function _(e, t, n) {
            return (_ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = F(e)););
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(n) : r.value
                }
            })(e, t, n || e)
        }

        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function M(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function x(e, t) {
            return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function F(e) {
            return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function T(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && z(e, t)
        }

        function z(e, t) {
            return (z = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var E, L = new(g = Object(f.a)({
            x: 1,
            y: 1
        }, .1), Object(l.a)((E = j = g(j = function(e) {
            function t() {
                return M(this, t), x(this, F(t).apply(this, arguments))
            }
            return T(t, r["a"]), t
        }()) || j, j = function(e) {
            function t(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = w(this, m(t).call(this, e))).clock = new o.Clock, n.currentPass = !1, n.effects = {}, n.passes = [], n.composer = new p.a(n.renderer, {}), n.effects.render = new y.a(n.scene, n.camera), n.addPass(n.effects.render), n
            }
            var n, r, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(t, E), n = t, (r = [{
                key: "addBloomEffect",
                value: function(e, t) {
                    this.effects.bloom = new h.a(e), this.effects.bloom.blendMode.opacity.value = t, this.addPass(new b.a(this.camera, this.effects.bloom))
                }
            }, {
                key: "addPass",
                value: function(e) {
                    this.passes.length && (this.passes[this.passes.length - 1].renderToScreen = !1), this.passes.push(e), this.composer.addPass(e), this.passes[this.passes.length - 1].renderToScreen = !0
                }
            }, {
                key: "render",
                value: function() {
                    this.composer.render(this.clock.getDelta())
                }
            }, {
                key: "resizeRender",
                value: function() {
                    this.composer && this.composer.setSize(this.width, this.height)
                }
            }]) && v(n.prototype, r), i && v(n, i), t
        }() || j)) || j);
        L.camera.position.z = 2, L.addBloomEffect({
            resolutionScale: .5,
            kernelSize: 4,
            distinction: .01
        }, 1);
        var C = new a.a("", {
            color: "#FFFFFF",
            size: P.a.isMobile ? .08 : .1,
            wireframe: !0,
            opacity: 1
        });
        C.position.x -= .5 * C.basePosition, L.add(C);
        var R = new i.a;
        R.update = function() {
            R.rotation.y -= 4e-4, R.rotation.x -= 2e-4
        }, L.add(R);
        var A = new o.Vector3,
            B = new o.Vector3,
            I = new o.Raycaster,
            D = new o.SphereBufferGeometry(4, 8, 10, 0, 3.2, 4, 2.1),
            J = new o.MeshBasicMaterial({
                wireframe: !0,
                visible: !1
            }),
            V = new o.Mesh(D, J);
        L.add(V), V.position.z = 2;
        var q = ["#FFFAFF", "#0A2463", "#d1a33f", "#ffe981", "#ffbf36", "#3f9d8c"].map(function(e) {
                return new o.Color(e)
            }),
            G = new(function(e) {
                function t() {
                    return M(this, t), x(this, F(t).apply(this, arguments))
                }
                var n, o, r;
                return T(t, c["a"]), n = t, (o = [{
                    key: "addLine",
                    value: function() {
                        for (var e = Object(u.a)(-2.4, 7.2), n = -25 * Math.PI / 180, o = 200 * Math.PI / 180, r = []; n < o;) {
                            n += .2, e -= .1, A.set(4 * Math.cos(n), e, 4 * Math.sin(n)), B.set(-A.x, 0, -A.z), B.normalize(), I.set(A, B);
                            var i = I.intersectObject(V, !0);
                            i.length && r.push(i[0].point.x, i[0].point.y, i[0].point.z)
                        }
                        0 !== r.length && (Math.random() > .5 ? _(F(t.prototype), "addLine", this).call(this, {
                            visibleLength: Object(u.a)(.01, .2),
                            points: r,
                            speed: Object(u.a)(.003, .008),
                            color: Object(s.a)(q),
                            width: Object(u.a)(.01, .1)
                        }) : _(F(t.prototype), "addLine", this).call(this, {
                            visibleLength: Object(u.a)(.05, .2),
                            points: r,
                            speed: Object(u.a)(.01, .1),
                            color: q[0],
                            width: Object(u.a)(.01, .01)
                        }))
                    }
                }]) && S(n.prototype, o), r && S(n, r), t
            }())({
                frequency: .99
            }, {
                transformLineMethod: function(e) {
                    return e
                }
            });
        L.add(G), L.start();
        var H = new TimelineLite({
            delay: .2,
            onStart: function() {
                G.start()
            }
        });
        H.to(".overlay", 2, {
            autoAlpha: 0
        }), H.fromTo(L.lookAt, 3, {
            y: -4
        }, {
            y: 0,
            ease: Power3.easeOut
        }, "-=2"), H.add(C.show, "-=2"), P.a.onHide(function(e) {
            var t = new TimelineLite;
            t.to(L.lookAt, 2, {
                y: -6,
                ease: Power3.easeInOut
            }), t.add(C.hide, 0), t.add(G.stop), t.to(".overlay", .5, {
                autoAlpha: 1,
                onComplete: e
            }, "-=1.5")
        })
    }
});
;/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
