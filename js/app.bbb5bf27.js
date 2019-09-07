(function(t){function e(e){for(var r,s,l=e[0],i=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vueveal/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"reveal"},[n("div",{staticClass:"slides"},[n("r-section",[n("h2",[t._v("vueveal")]),n("h5",[t._v("Vue.js components for Vue.js")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.RED}},[t._v("...in progress")])],1),n("r-section",[n("h4",[t._v("<r-cols />")]),n("r-section",[n("r-fragment",[t._v("Create content in two columns")]),n("r-fragment",[t._v("Every column's root element must have a slot-attribute with value left | right")])],1),n("r-section",[n("div",[t._v("Example")]),n("r-cols",[n("div",{attrs:{slot:"left"},slot:"left"},[n("r-code",{attrs:{"line-numbers":"",trim:!0,"font-percent":60,maxHeight:420}},[n("textarea",[t._v('\t\t\t\t\t\t\t<r-cols>\n\t\t\t\t\t\t\t\t<div slot="left">Lorem ipsum</div>\n\t\t\t\t\t\t\t\t<div slot="right">\n\t\t\t\t\t\t\t\t\t<img src="https://picsum.photos/200/300" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</r-cols>\n\t\t\t\t\t\t\t')])])],1),n("div",{attrs:{slot:"right"},slot:"right"},[n("r-cols",[n("div",{attrs:{slot:"left"},slot:"left"},[t._v("Lorem ipsum")]),n("div",{attrs:{slot:"right"},slot:"right"},[n("img",{attrs:{src:"https://picsum.photos/200/300"}})])])],1)])],1)],1),n("r-section",[n("h2",[t._v("Vue.js Component Example")]),n("ex-one"),n("p",[t._v("Hover your mouse pointer over the rectangle")])],1),n("r-section",{attrs:{"bg-image":"https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260","bg-size":"cover"}},[n("h1",[t._v("All About Bananas")]),n("p",[t._v("Thanks for the photo...")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_LEFT}},[t._v("Photo by Aleksandar Pasaric from Pexels")])],1),n("r-section",{attrs:{"bg-image":"https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260","bg-size":"cover"}},[n("h4",[t._v("All About Bananas")]),n("r-section",[n("h1",[t._v("Color")]),n("div",[t._v("...")])]),n("r-section",[n("h1",[t._v("Taste")]),n("div",[t._v("...")])]),n("r-section",[n("h1",[t._v("Peel")]),n("div",[t._v("...")])])],1),n("r-section",[n("r-note",[t._v("Dies ist eine Folie mit Code.")]),n("h2",[t._v("<r-code />")]),n("r-code",{attrs:{"line-numbers":"",trim:!1,"font-percent":80,maxHeight:420}},[n("textarea",[t._v("\nimport React, { useState } from 'react';\n\nfunction Example() {\n\tconst [count, setCount] = useState(0);\n\n\treturn (\n\t\t<div>\n\t\t\t<p>You clicked {count} times</p>\n\t\t\t<button @click=\"() => 'lalala'\">\n\t\t\t\tClick me\n\t\t\t</button>\n\t\t</div>\n\t);\n}\n\t\t\t\t\t\t")])])],1),n("r-section",[n("h2",[t._v('<r-fragment part="1" />')]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.GROW}},[n("b",{staticStyle:{color:"orange"}},[t._v("fragment GROW")])]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.SHRINK}},[t._v("fragment SHRINK")])],1),n("r-section",[n("h2",[t._v('<r-fragment part="2" />')]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_OUT}},[t._v("fragment fade-OUT")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_UP}},[t._v("fragment fade-UP")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_DOWN}},[t._v("fragment fade-DOWN")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_RIGHT}},[t._v("fragment fade-RIGHT")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_LEFT}},[t._v("fragment fade-LEFT")])],1),n("r-section",[n("h2",[t._v('<r-fragment part="3" />')]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_IN_OUT}},[t._v("fragment fade-IN_OUT")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.FADE_IN_SEMI_OUT}},[t._v("fragment fade-IN_SEMI_OUT")])],1),n("r-section",[n("h2",[t._v('<r-fragment part="4" />')]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.BLUE_ONCE}},[t._v("fragment fade - BLUE ONCE")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.RED}},[t._v("fragment fade - RED")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.GREEN}},[t._v("fragment fade - GREEN")]),n("r-fragment",{attrs:{type:t.FRAGMENT_TYPES.BLUE}},[t._v("fragment fade - BLUE")])],1),n("r-section-markdown",[t._v("\n\t\t\t\t\t## < r-section-markdown />\n\t\t\t\t\t* one\n\t\t\t\t\t* two\n\t\t\t\t\t* three\n\t\t\t\t")]),n("r-section",[n("h1",[t._v("The End.")])])],1)])])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{"data-markdown":t.markdown,"data-background-image":t.bgImage,"data-background-size":t.bgSize}},[t.content?n("div",[t._v(t._s(t.content))]):t._t("default")],2)},l=[],i={name:"r-section",props:{markdown:{type:Boolean,default:!1},bgImage:{type:String,default:null},bgSize:{type:String,default:null}},data:()=>({content:null}),mounted(){this.content=1===this.$slots.default.length&&this.$slots.default[0].text}},c=i,u=n("2877"),d=Object(u["a"])(c,s,l,!1,null,null,null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{"data-markdown":""}},[n("textarea",{ref:"ta",attrs:{"data-template":""}},[t._v(t._s(this.$slots.default[0].text))])])},p=[],h={name:"r-section-markdown",data:()=>({content:""}),mounted(){this.$refs.ta.value=this.$slots.default[0].text}},g=h,v=Object(u["a"])(g,m,p,!1,null,null,null),_=v.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"fragment",class:t.type},[this.$slots.default[0].text?n("span",[t._v(t._s(this.$slots.default[0].text))]):t._t("default")],2)},b=[];const y={GROW:"grow",SHRINK:"shrink",FADE_OUT:"fade-out",FADE_UP:"fade-up",FADE_DOWN:"fade-down",FADE_RIGHT:"fade-right",FADE_LEFT:"fade-left",FADE_IN_OUT:"fade-in-then-out",FADE_IN_SEMI_OUT:"fade-in-then-semi-out",BLUE_ONCE:"highlight-current-blue",RED:"highlight-red",GREEN:"highlight-green",BLUE:"highlight-blue"};var T={props:["type"]},R=T,x=Object(u["a"])(R,E,b,!1,null,null,null),w=x.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs",style:{fontSize:t.fontPercent+"%",maxHeight:t.maxHeight+"px"},attrs:{"data-line-numbers":t.lineNumbers,"data-trim":t.trim,"data-noescape":t.noescape}},[t._v(t._s(t.code))])])},S=[],k={name:"r-code",props:{"line-numbers":{type:String,default:null},trim:{type:Boolean,default:!0},noescape:{type:Boolean,default:!1},fontPercent:{type:Number,default:100},maxHeight:{type:Number,default:400}},data:()=>({code:""}),mounted(){this.code=this.$slots.default[0].text||this.$slots.default[0].children[0].text}},A=k,F=Object(u["a"])(A,N,S,!1,null,null,null),O=F.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"notes"},[t._v(t._s(t.note))])},j=[],M={name:"r-note",data:()=>({note:""}),mounted(){this.note=this.$slots.default[0].text}},C=M,$=Object(u["a"])(C,P,j,!1,null,null,null),G=$.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"col"},[t._t("left")],2),n("div",{staticClass:"col"},[t._t("right")],2)])},I=[],U={name:"r-cols"},Y=U,H=(n("6334"),Object(u["a"])(Y,D,I,!1,null,"6350a2f4",null)),B=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example_one"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{mousemove:t.onMouseMove}},[n("rect",{style:t.currentColor,attrs:{x:"0",y:"0",height:"150",width:"300"}})])])},z=[],V={name:"ex-one",data:()=>({redValue:0,greenValue:255}),computed:{currentColor(){return`fill: rgb(${this.redValue}, ${this.greenValue}, ${Math.floor(255*Math.random())})`}},methods:{onMouseMove(t){this.redValue=this.map_range(t.offsetX,0,300,0,255),this.greenValue=this.map_range(t.offsetY,0,150,0,255)},map_range(t,e,n,r,a){return r+(a-r)*(t-e)/(n-e)}}},W=V,K=(n("a9c9"),Object(u["a"])(W,L,z,!1,null,"65eda3a4",null)),q=K.exports,J={name:"App",components:{RSection:f,RSectionMarkdown:_,RFragment:w,RCode:O,RNote:G,RCols:B,ExOne:q},data:()=>({FRAGMENT_TYPES:y}),created(){this.$RHelper.setTheme("black")},mounted(){this.$RHelper.init({chalkboard:{},dependencies:[{src:"plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/highlight/highlight.js",async:!0},{src:"plugin/search/search.js",async:!0},{src:"plugin/zoom-js/zoom.js",async:!0},{src:"plugin/notes/notes.js",async:!0},{src:"plugin/chalkboard/chalkboard.js"}],keyboard:{67:function(){RevealChalkboard.toggleNotesCanvas()},66:function(){RevealChalkboard.toggleChalkboard()},46:function(){RevealChalkboard.clear()},8:function(){RevealChalkboard.reset()},68:function(){RevealChalkboard.download()}}},{slideNumber:!0,hash:!0,mouseWheel:!0})}},X=J,Q=(n("034f"),Object(u["a"])(X,a,o,!1,null,null,null)),Z=Q.exports;class tt{static setTheme(t){const e=document.getElementById("theme");e.href=`css/theme/${t}.css`}static init(t={},e={}){window.Reveal.initialize(t),window.Reveal.configure(e)}}r["a"].prototype.$RHelper=tt,r["a"].config.productionTip=!1,new r["a"]({render:t=>t(Z)}).$mount("#app")},"5a61":function(t,e,n){},6334:function(t,e,n){"use strict";var r=n("69ca"),a=n.n(r);a.a},"64a9":function(t,e,n){},"69ca":function(t,e,n){},a9c9:function(t,e,n){"use strict";var r=n("5a61"),a=n.n(r);a.a}});
//# sourceMappingURL=app.bbb5bf27.js.map