"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7791],{4137:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),g=r,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7645:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"options",title:"Options"},s=void 0,p={unversionedId:"getting-started/options",id:"getting-started/options",isDocsHomePage:!1,title:"Options",description:"Introduction",source:"@site/docs/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/ts-jest/docs/next/getting-started/options",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options.md",tags:[],version:"current",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/ts-jest/docs/next/getting-started/presets"},next:{title:"Paths mapping",permalink:"/ts-jest/docs/next/getting-started/paths-mapping"}},d=[{value:"Introduction",id:"introduction",children:[],level:3},{value:"Options",id:"options",children:[],level:3}],m={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options are located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," of Jest config object in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project,\nor through a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        // ts-jest configuration goes here\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Or through JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To utilize IDE suggestions, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDoc")," comments to provide suggested ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," configs for your Jest config:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('ts-jest').InitialOptionsTsJest} */\nmodule.exports = config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here and your IDE will suggest which configs when typing\n    },\n  },\n}\n")))),(0,o.kt)("p",null,"Or through TypeScript (if ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\n\nconst config: InitialOptionsTsJest = {\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\nexport default config\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using TypeScript Jest config file, Jest will use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," to compile the config file. ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," doesn't take part in\nthat process."))),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/compiler"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"compiler")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/compiler"},"TypeScript module to use as compiler.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"typescript"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/tsconfig"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"tsconfig")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/tsconfig"},"TypeScript compiler related configuration.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"object"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"auto"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/isolatedModules"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"isolatedModules")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/isolatedModules"},"Disable type-checking")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/astTransformers"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"astTransformers")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/astTransformers"},"Custom TypeScript AST transformers")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"auto"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/diagnostics"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"diagnostics")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/diagnostics"},"Diagnostics related configuration.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"enabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/babelConfig"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"babelConfig")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/babelConfig"},"Babel(Jest) related configuration.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"stringifyContentPathRegex")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/stringifyContentPathRegex"},"Files which will become modules returning self content.")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"),"|",(0,o.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/useESM"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"useESM")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"options/useESM"},"Enable ESM support")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"auto"))))))}c.isMDXComponent=!0}}]);