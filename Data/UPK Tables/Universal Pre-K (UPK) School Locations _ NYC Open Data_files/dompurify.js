!function(modules){function webpackJsonpCallback(data){for(var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],executeModules=data[2],i=0,resolves=[];i<chunkIds.length;i++)chunkId=chunkIds[i],installedChunks[chunkId]&&resolves.push(installedChunks[chunkId][0]),installedChunks[chunkId]=0;for(moduleId in moreModules)Object.prototype.hasOwnProperty.call(moreModules,moduleId)&&(modules[moduleId]=moreModules[moduleId]);for(parentJsonpFunction&&parentJsonpFunction(data);resolves.length;)resolves.shift()();return deferredModules.push.apply(deferredModules,executeModules||[]),checkDeferredModules()}function checkDeferredModules(){for(var result,i=0;i<deferredModules.length;i++){for(var deferredModule=deferredModules[i],fulfilled=!0,j=1;j<deferredModule.length;j++){var depId=deferredModule[j];0!==installedChunks[depId]&&(fulfilled=!1)}fulfilled&&(deferredModules.splice(i--,1),result=__webpack_require__(__webpack_require__.s=deferredModule[0]))}return result}var installedModules={},installedChunks={11:0},deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="/javascripts/build/shared/";var jsonpArray=window.socrataFrontendWebpackJsonp=window.socrataFrontendWebpackJsonp||[],oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback,jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([1383,1,0]),checkDeferredModules()}({1381:function(module,exports,__webpack_require__){"use strict";var obj,_dompurify=__webpack_require__(1090);((obj=_dompurify)&&obj.__esModule?obj:{default:obj}).default.addHook("afterSanitizeAttributes",function(currentNode){currentNode instanceof HTMLAnchorElement&&(currentNode.rel=_.union(_.words(currentNode.rel),["noreferrer"]).join(" "))})},1382:function(module,exports){var define=void 0;module=void 0;(function(){!function(e){"use strict";var t="undefined"==typeof window?null:window;"function"==typeof define&&define.amd?define(function(){return e(t)}):void 0!==module?module.exports=e(t):t.DOMPurify=e(t)}(function e(t){"use strict";var r=function(t){return e(t)};if(r.version="0.7.3",!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var n=t.document,a=n,i=t.DocumentFragment,o=t.HTMLTemplateElement,l=t.NodeFilter,s=t.NamedNodeMap||t.MozNamedAttrMap,c=t.Text,f=t.Comment,u=t.DOMParser;"function"==typeof o&&(n=n.createElement("template").content.ownerDocument);var d=n.implementation,m=n.createNodeIterator,p=n.getElementsByTagName,v=n.createDocumentFragment,h=a.importNode,g={};r.isSupported=void 0!==d.createHTMLDocument&&9!==n.documentMode;var y=function(e,t){for(var r=t.length;r--;)e[t[r]]=!0;return e},b=function(e){var r,t={};for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},T=null,k=y({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),x=null,A=y({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),w=null,E=null,M=!0,D=!1,O=!1,S=!1,N=!1,L=!1,_=!1,C=!0,z=!0,R=y({},["audio","head","math","script","style","svg","video"]),F=null,H=n.createElement("form"),B=function(e){try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},j=function(e){return m.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,function(){return l.FILTER_ACCEPT},!1)},q=/\{\{.*|.*\}\}/gm,P=/<%.*|.*%>/gm,U=function(e){if(Y("beforeSanitizeElements",e,null),function(e){return!(e instanceof c||e instanceof f||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof s&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)}(e))return B(e),!0;var t=e.nodeName.toLowerCase();if(Y("uponSanitizeElement",e,{tagName:t}),!T[t]||w[t]){if(z&&!R[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(r){}return B(e),!0}if(!D||e.firstElementChild||e.content&&e.content.firstElementChild||(e.innerHTML=e.textContent.replace(/</g,"&lt;")),O&&3===e.nodeType){var n=e.textContent;n=(n=n.replace(q," ")).replace(P," "),e.textContent=n}return Y("afterSanitizeElements",e,null),!1},V=/^data-[\w.\u00B7-\uFFFF-]/,J=/^(?:\w+script|data):/i,K=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Q=function(e){Y("beforeSanitizeAttributes",e,null);var r=e.attributes;if(r){for(var o,l,s,c,f,a={attrName:"",attrValue:"",keepAttr:!0},i=r.length;i--;)if(l=(o=r[i]).name,s=o.value,c=l.toLowerCase(),a.attrName=c,a.attrValue=s,a.keepAttr=!0,Y("uponSanitizeAttribute",e,a),s=a.attrValue,"name"===c&&"IMG"===e.nodeName&&r.id?(f=r.id,r=Array.prototype.slice.apply(r),e.removeAttribute("id"),e.removeAttribute(l),r.indexOf(f)>i&&e.setAttribute("id",f.value)):("id"===l&&e.setAttribute(l,""),e.removeAttribute(l)),a.keepAttr&&(!C||"id"!==c&&"name"!==c||!(s in t||s in n||s in H))&&(x[c]&&!E[c]||!O&&M&&V.test(c))&&(!J.test(s.replace(K,""))||"src"===c&&0===s.indexOf("data:")&&"IMG"===e.nodeName))try{O&&(s=(s=s.replace(q," ")).replace(P," ")),e.setAttribute(l,s)}catch(u){}Y("afterSanitizeAttributes",e,null)}},X=function(e){var t,r=j(e);for(Y("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)Y("uponSanitizeShadowNode",t,null),U(t)||(t.content instanceof i&&X(t.content),Q(t));Y("afterSanitizeShadowDOM",e,null)},Y=function(e,t,n){g[e]&&g[e].forEach(function(e){e.call(r,t,n,F)})};return r.sanitize=function(e,n){if(e||(e=""),"string"!=typeof e&&(e=e.toString()),!r.isSupported)return"object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML?t.toStaticHTML(e):e;if(function(e){"object"!=typeof e&&(e={}),T="ALLOWED_TAGS"in e?y({},e.ALLOWED_TAGS):k,x="ALLOWED_ATTR"in e?y({},e.ALLOWED_ATTR):A,w="FORBID_TAGS"in e?y({},e.FORBID_TAGS):{},E="FORBID_ATTR"in e?y({},e.FORBID_ATTR):{},M=!1!==e.ALLOW_DATA_ATTR,D=e.SAFE_FOR_JQUERY||!1,O=e.SAFE_FOR_TEMPLATES||!1,S=e.WHOLE_DOCUMENT||!1,N=e.RETURN_DOM||!1,L=e.RETURN_DOM_FRAGMENT||!1,_=e.RETURN_DOM_IMPORT||!1,C=!1!==e.SANITIZE_DOM,z=!1!==e.KEEP_CONTENT,L&&(N=!0),e.ADD_TAGS&&(T===k&&(T=b(T)),y(T,e.ADD_TAGS)),e.ADD_ATTR&&(x===A&&(x=b(x)),y(x,e.ADD_ATTR)),z&&(T["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),F=e}(n),!N&&!S&&-1===e.indexOf("<"))return e;var l,s,o=function(e){var t,r;try{t=(new u).parseFromString(e,"text/html")}catch(n){}return t||((r=(t=d.createHTMLDocument("")).body).parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(S?"html":"body")[0]:p.call(t,S?"html":"body")[0]}(e);if(!o)return N?null:"";for(var f,c=j(o);l=c.nextNode();)3===l.nodeType&&l===s||U(l)||(l.content instanceof i&&X(l.content),Q(l),s=l);if(N){if(L)for(f=v.call(o.ownerDocument);o.firstChild;)f.appendChild(o.firstChild);else f=o;return _&&(f=h.call(a,f,!0)),f}return S?o.outerHTML:o.innerHTML},r.addHook=function(e,t){"function"==typeof t&&(g[e]=g[e]||[],g[e].push(t))},r.removeHook=function(e){g[e]&&g[e].pop()},r.removeHooks=function(e){g[e]&&(g[e]=[])},r.removeAllHooks=function(){g=[]},r})}).call(window)},1383:function(module,exports,__webpack_require__){__webpack_require__(1382),module.exports=__webpack_require__(1381)},5:function(module,exports){module.exports=jQuery}});
//# sourceMappingURL=dompurify.js.map