(function(e){function t(t){for(var o,s,l=t[0],i=t[1],u=t[2],c=0,f=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"57c19615"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"845f":function(e,t,n){},a308:function(e,t,n){e.exports=n.p+"img/photino-logo.38b2212f.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"logo center",attrs:{src:n("a308"),alt:"Photino Logo"}}),o("HelloPhotino",{attrs:{msg:"Hello to Photino.Vue"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"text-center"},[e._v(e._s(e.msg))]),n("p",{staticClass:"text-center"},[e._v(" This is a Vue App served from a local web root. Click on the button below to send a message to the backend. It will respond and send a message back to the UI. ")]),n("button",{staticClass:"primary center",on:{click:function(t){return e.callDotNet("Hello .NET! 🤖")}}},[e._v("Call .NET")])])},l=[];"function"!==typeof window.external.sendMessage&&(window.external.sendMessage=function(e){return console.log("Emulating sendMessage.\nMessage sent: "+e)}),"function"!==typeof window.external.receiveMessage?(window.external.receiveMessage=function(e){var t="Simulating message from backend.";e(t)},window.external.receiveMessage((function(e){return console.log("Emulating receiveMessage.\nMessage received: "+e)}))):window.external.receiveMessage((function(e){return alert(e)}));var i=o["a"].extend({name:"HelloPhotino",props:{msg:String},methods:{callDotNet:function(e){window.external.sendMessage(e)}}}),u=i,c=n("2877"),p=Object(c["a"])(u,s,l,!1,null,null,null),f=p.exports,d=(n("845f"),o["a"].extend({name:"App",components:{HelloPhotino:f}})),m=d,g=Object(c["a"])(m,r,a,!1,null,null,null),v=g.exports,h=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Photino logo",src:n("a308")}}),o("HelloPhotino",{attrs:{msg:"Welcome to Your Photino.Vue App"}})],1)},w=[],y={name:"Home",components:{HelloPhotino:f}},x=y,_=Object(c["a"])(x,b,w,!1,null,null,null),M=_.exports;o["a"].use(h["a"]);var j=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new h["a"]({mode:"history",base:"",routes:j}),P=O,k=n("2f62");o["a"].use(k["a"]);var E=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:P,store:E,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.1180b708.js.map