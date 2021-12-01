"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1752],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=s,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),s=n(3366),a=(n(7294),n(4137)),i=["components"],o={id:"presets",title:"Presets"},l=void 0,p={unversionedId:"getting-started/presets",id:"getting-started/presets",isDocsHomePage:!1,title:"Presets",description:"The presets",source:"@site/docs/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/next/getting-started/presets",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/presets.md",tags:[],version:"current",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/ts-jest/docs/next/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/next/getting-started/options"}},d=[{value:"The presets",id:"the-presets",children:[],level:3},{value:"Basic usage",id:"basic-usage",children:[],level:3},{value:"Advanced",id:"advanced",children:[],level:3}],m={toc:d};function c(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"the-presets"},"The presets"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," comes with several presets, covering most of the project's base configuration:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default"),(0,a.kt)("br",null),"or ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")),(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,a.kt)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm"),(0,a.kt)("br",null)),(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,a.kt)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts")),(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,a.kt)("strong",{parentName:"td"},"CommonJS")," syntax.",(0,a.kt)("br",null),"You'll need to set ",(0,a.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,a.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm")),(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript and JavaScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".tsx"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".jsx"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,a.kt)("strong",{parentName:"td"},"ESM")," syntax.",(0,a.kt)("br",null),"You'll need to set ",(0,a.kt)("inlineCode",{parentName:"td"},"allowJs")," to ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," in your ",(0,a.kt)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel")),(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,a.kt)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm")),(0,a.kt)("td",{parentName:"tr",align:null},"TypeScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,a.kt)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",(0,a.kt)("inlineCode",{parentName:"td"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"jsx"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",(0,a.kt)("inlineCode",{parentName:"td"},"babel-jest"),".")))),(0,a.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,a.kt)("p",null,"In most cases, simply setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," presets use ",(0,a.kt)("inlineCode",{parentName:"p"},"testMatch"),", like Jest does in its defaults. If you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"testRegex")," instead in your configuration, you MUST set ",(0,a.kt)("inlineCode",{parentName:"p"},"testMatch")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or Jest will bail."),(0,a.kt)("h3",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n")),(0,a.kt)("p",null,"Or through TypeScript (if ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default config\n")))}c.isMDXComponent=!0}}]);