"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[1957],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>f});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),p=c(t),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(f,o(o({ref:e},d),{},{components:t})):r.createElement(f,o({ref:e},d))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[p]="string"==typeof n?n:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2097:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1},o=void 0,l={unversionedId:"CODIGOS/A-Skills",id:"CODIGOS/A-Skills",title:"A-Skills",description:"Skills.png",source:"@site/docs/CODIGOS/A-Skills.md",sourceDirName:"CODIGOS",slug:"/CODIGOS/A-Skills",permalink:"/mydoc/docs/CODIGOS/A-Skills",draft:!1,editUrl:"https://github.com/juamaya/mydoc/docs/CODIGOS/A-Skills.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Skills",permalink:"/mydoc/docs/CODIGOS/Skills"}},s={},c=[{value:"* index.html",id:"-indexhtml",level:3},{value:"* style.css",id:"-stylecss",level:3},{value:"* index.js",id:"-indexjs",level:3}],d={toc:c},p="wrapper";function m(n){let{components:e,...a}=n;return(0,i.kt)(p,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Skills.png",src:t(5858).Z,width:"833",height:"535"})),(0,i.kt)("h3",{id:"-indexhtml"},"*"," index.html"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>SKILLS</title>\n    <link rel="stylesheet" href="style.css" />\n  </head>\n\n  <body>\n    \x3c!-- card-barras --\x3e\n\n            <div class="card-barras ">\n                <div class="container">\n                    <h2>Mis Habilidades</h2>\n                    <hr>\n                </div>\n                <p>HTML</p>\n                <div class="container">\n                    <div class="skills html  colored"> 90% </div>\n                </div>\n                <p>CSS</p>\n                <div class="container">\n                    <div class="skills css colored ">70%</div>\n                </div>\n                <p>JAVASCRIPT</p>\n                <div class="container    ">\n                    <div class="skills javascript colored">55%</div>\n                </div>\n                <p>REACT</p>\n                <div class="container    ">\n                    <div class="skills react colored">55%</div>\n                </div>\n            </div>\n            \x3c!--END card-barras --\x3e\n\n\n    <script src="./index.js"><\/script>\n  </body>\n</html>\n'))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-stylecss"},"*"," style.css"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-css"},"\n:root{\n  --primary-color:blue;\n  --tiempo: 5;\n}\n\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.card-barras{\n    display: flex;\n    flex-wrap: wrap;\n    color: #fff;\n    width: 600px;\n    margin:auto;\n    padding: 5px;\n    border: 4px solid var(--primary-color);\n    border-radius: 20px;\n    background-color:rgba(9, 17, 30, 0.975)\n  \n}\n.container{\n    width: 100%;\n  font-size:1em;\n   \n}\n \n.skills{\n\n    text-align:right;\n    padding: 5px;\n    color: aliceblue;\n    font-weight: bold;\n    margin-bottom:5px;\n    \n}\n \n\n.html{\n    background-color: var(--primary-color);\n    animation: fillhtml var(--tiempo) forwards;\n}\n.css{\n\n    background-color: var(--primary-color);\n    animation: fillcss var(--tiempo) forwards;\n}\n\n.javascript{\n\n    background-color: var(--primary-color);\n    animation: filljavascript var(--tiempo) forwards;\n}\n\n.react{\n\n    background-color: var(--primary-color);\n    animation: fillreact var(--tiempo) forwards;\n}\n\n@keyframes fillhtml{\n\n    0%{width: 0;}\n    100%{width:90%}\n}\n\n@keyframes fillcss{\n\n    0%{width: 0;}\n    100%{width:70%}\n}\n@keyframes filljavascript {\n\n    0%{width: 0;}\n    100%{width:55%}\n}\n\n@keyframes fillreact {\n\n    0%{width: 0;}\n    100%{width:35%}\n}\n\n"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-indexjs"},"*"," index.js"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},""))),(0,i.kt)("hr",null))}m.isMDXComponent=!0},5858:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/Skills-f4a20a7808ba8ef9aab0cb47a186fe83.png"}}]);