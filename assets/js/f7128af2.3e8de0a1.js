"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[2709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>A});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,A=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(A,i(i({ref:n},s),{},{components:t})):o.createElement(A,i({ref:n},s))}));function A(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:3},i=void 0,l={unversionedId:"JAVASCRIPT/Timers",id:"JAVASCRIPT/Timers",title:"Timers",description:"Codigos en Javascript",source:"@site/docs/JAVASCRIPT/Timers.md",sourceDirName:"JAVASCRIPT",slug:"/JAVASCRIPT/Timers",permalink:"/mydoc/docs/JAVASCRIPT/Timers",draft:!1,editUrl:"https://github.com/juamaya/mydoc/docs/JAVASCRIPT/Timers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Promesas",permalink:"/mydoc/docs/JAVASCRIPT/Promesas"},next:{title:"Arrays",permalink:"/mydoc/docs/JAVASCRIPT/Arrays"}},c={},m=[{value:"Codigos en Javascript",id:"codigos-en-javascript",level:2},{value:"* setTimeout",id:"-settimeout",level:3},{value:"* setInterval",id:"-setinterval",level:3},{value:"Ejemplo de un Reloj",id:"ejemplo-de-un-reloj",level:2}],s={toc:m},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,o.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"codigos-en-javascript"},"Codigos en Javascript"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"logo-JS",src:t(3490).Z,width:"120",height:"120"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-settimeout"},"* setTimeout"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"setTimeout - ejecuta una funcion DESPUES de cierto tiempo.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function saludo(nombre) {\n  console.log(`Hola ${nombre}, buenos dias.`);\n}\n\nlet temporizador = setTimeout(saludo, 1000, "Juan Marin");\n\nclearTimeout(temporizador);\n'))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"setTimeout Anidado")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let num = 0;\nlet incrementoID = setTimeout(function incremento() {\n  console.log(num);\n  num++;\n\n  incrementoID = setTimeout(incremento, 1000);\n\n  if (num === 10) {\n    clearTimeout(incrementoID);\n  }\n}, 1000);\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-setinterval"},"* setInterval"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"setInterval - ejecuta una funcion CADA de cierto tiempo.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let numero = 5;\n\nfunction conteo() {\n  console.log(`Lanzamiento en ${numero} segundos`);\n  numero--;\n  if (numero === -1) {\n    clearInterval(lanzamiento);\n  }\n}\n\nlet lanzamiento = setInterval(conteo, 1000);\n"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Con funciones flecha")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let numero1 = 5;\n\nlet lanzamiento1 = setInterval(() => {\n  console.log(`Lanzamiento1 en ${numero1} segundos`);\n  numero1--;\n  if (numero1 === -1) {\n    clearInterval(lanzamiento1);\n  }\n}, 1000);\n"))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"pagina-web-archivos"},"PAGINA WEB (Archivos)"),(0,r.kt)("h2",{id:"ejemplo-de-un-reloj"},"Ejemplo de un Reloj"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reloj",src:t(6541).Z,width:"1600",height:"900"})),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Archivo",type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"index.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="es">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CLOCK-JS</title>\n\n    <link rel="stylesheet" href="styles.css">\n</head>\n\n<body>\n    <h1>Temporizadores</h1>\n    <h2>setTimeout - setInterval</h2>\n\n    <fieldset>\n        <legend id="fecha"> </legend>\n        <h2 id="reloj"> </h2>\n    </fieldset>\n\n\n    <script src="clock.js"><\/script>\n\n</body>\n\n</html>\n')),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Archivo",type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"clock.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nlet mostrarFecha = document.getElementById("fecha");\nlet mostrarReloj = document.getElementById("reloj");\n\nlet fecha = new Date();\n\nlet diaSemana = [\n  "Domingo",\n  "Lunes",\n  "Martes",\n  "Miercoles",\n  "Jueves",\n  "Viernes",\n  "Sabado",\n];\nlet mesAnyo = [\n  "Enero",\n  "Febrero",\n  "Marzo",\n  "Abril",\n  "Mayo",\n  "Junio",\n  "Julio",\n  "Agosto",\n  "Septiembre",\n  "Agosto",\n  "Octubre",\n  "Noviembre",\n  "Diciembre",\n];\n\nmostrarFecha.innerHTML = `${\n  diaSemana[fecha.getDay()]\n}, ${fecha.getDate()} de  ${\n  mesAnyo[fecha.getMonth()]\n} de ${fecha.getFullYear()}`;\n\nsetInterval(() => {\n  let hora = new Date();\n  mostrarReloj.innerHTML = hora.toLocaleTimeString();\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Archivo",type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"styles.css"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"\n*{\n    margin: 0  ;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody{\nfont-family: Verdana, Geneva, Tahoma, sans-serif;\n    background-color: #002345;\n    color: #abcdef;\n}\n\nh1{\n    text-align: center;\n    margin: 80px 20px 0;\n    color:white;\n}\n#subtitulo{\n    text-align: center;\n    margin-bottom: 80px;\n    color: white;\n}\n\nlegend{\n\n    font-size: 1.7em;\n    padding: 0.7px;\n}\nfieldset{\n    width: 350px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 5px;\n    padding: 10px 30px;\n}\n#reloj{\n    font-size: 6em;\n    color: wheat;\n}\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0},3490:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"},6541:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/reloj-34fbba9979ac192b68bb22372b598814.png"}}]);