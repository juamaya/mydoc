"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[7095],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},l=void 0,c={unversionedId:"DOCUSAURUS/Crear-pagina",id:"DOCUSAURUS/Crear-pagina",title:"Crear-pagina",description:"---",source:"@site/docs/DOCUSAURUS/Crear-pagina.md",sourceDirName:"DOCUSAURUS",slug:"/DOCUSAURUS/Crear-pagina",permalink:"/mydoc/docs/DOCUSAURUS/Crear-pagina",draft:!1,editUrl:"https://github.com/juamaya/mydoc/docs/DOCUSAURUS/Crear-pagina.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Publicar-pagina",permalink:"/mydoc/docs/DOCUSAURUS/Publicar-pagina"}},i={},p=[{value:"CREAR PAGINA",id:"crear-pagina",level:2},{value:"ENTRAR EN LA CARPETA CREADA.",id:"entrar-en-la-carpeta-creada",level:2},{value:"ABRIR PROYECTO EN VSCODE.",id:"abrir-proyecto-en-vscode",level:2},{value:"START YOUR SITE.",id:"start-your-site",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web de documentacion  con Docusaurus")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"docusaurus",src:r(6982).Z,width:"1200",height:"675"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"crear-pagina"},"CREAR PAGINA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREAR UNA CARPETA DEL PROYECTO:\n")),(0,a.kt)("p",null,"ABRIR LA CONSOLA DE COMANDOS CMD"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En la consola situada en la carpeta del proyecto escribimos el comando, para crear la Pagina."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"npx create-docusaurus@latest myWeb classic\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \n[SUCCESS] Created myWeb.\n[INFO] Inside that directory, you can run several commands:\n\n  `npm start`\n    Starts the development server.\n\n  `npm run build`\n    Bundles your website into static files for production.\n\n  `npm run serve`\n    Serves the built website locally.\n\n  `npm deploy`\n    Publishes the website to GitHub pages.\n\nWe recommend that you begin by typing:\n\n  `cd myWeb`\n  `npm start`\n\nHappy building awesome websites!\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"entrar-en-la-carpeta-creada"},"ENTRAR EN LA CARPETA CREADA."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En la consola situada en la carpeta del proyecto escribimos el comando"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"cd myWeb\n")),(0,a.kt)("hr",{parentName:"blockquote"})),(0,a.kt)("h2",{id:"abrir-proyecto-en-vscode"},"ABRIR PROYECTO EN VSCODE."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En la consola situada en la carpeta del proyecto escribimos el comando"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"code .\n")),(0,a.kt)("hr",{parentName:"blockquote"})),(0,a.kt)("h2",{id:"start-your-site"},"START YOUR SITE."),(0,a.kt)("p",null,"ABRIR TERMINAL EN VSCODE."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En la consola situada en la carpeta del proyecto escribimos el comando"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"npm start\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[INFO] Starting the development server...\n[SUCCESS] Docusaurus website is running at: http://localhost:3000/\n\n\u2714 Client\n  Compiled successfully in 15.42s\n\nclient (webpack 5.85.0) compiled successfully\n")),(0,a.kt)("hr",null))}d.isMDXComponent=!0},6982:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docusaurus-social-card-956871f92b9963b4ab0080ff5eb13e77.jpg"}}]);