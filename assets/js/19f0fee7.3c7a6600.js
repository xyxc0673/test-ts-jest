"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5790],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),u=o,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||a;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9296:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var i=t(7462),o=t(3366),a=(t(7294),t(4137)),r=["components"],l={title:"Diagnostics option"},s=void 0,c={unversionedId:"getting-started/options/diagnostics",id:"version-27.1/getting-started/options/diagnostics",isDocsHomePage:!1,title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/versioned_docs/version-27.1/getting-started/options/diagnostics.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/diagnostics",permalink:"/ts-jest/docs/getting-started/options/diagnostics",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/getting-started/options/diagnostics.md",tags:[],version:"27.1",frontMatter:{title:"Diagnostics option"}},p=[{value:"Disabling/enabling",id:"disablingenabling",children:[],level:3},{value:"Advanced configuration",id:"advanced-configuration",children:[],level:3},{value:"Examples",id:"examples",children:[{value:"Disabling diagnostics",id:"disabling-diagnostics",children:[],level:4},{value:"Advanced options",id:"advanced-options",children:[{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",children:[],level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",children:[],level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",children:[],level:5}],level:4}],level:3}],d={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."),(0,a.kt)("p",null,"If a diagnostic is not filtered out, ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," will fail the compilation and your test."),(0,a.kt)("h3",{id:"disablingenabling"},"Disabling/enabling"),(0,a.kt)("p",null,"By default all diagnostics are enabled. This is the same as setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".\nTo disable all diagnostics, set ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."),(0,a.kt)("h3",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," option's value can also accept an object for more advanced configuration. Each config. key is optional:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"warnOnly")),": If specified and ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", diagnostics will be reported but won't stop compilation (default: ",(0,a.kt)("em",{parentName:"li"},"disabled"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ignoreCodes")),": List of TypeScript error codes to ignore. Complete list can be found ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"},"there"),". By default here are the ones ignored:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6059"),": ",(0,a.kt)("em",{parentName:"li"},"'rootDir' is expected to contain all source files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"18002"),": ",(0,a.kt)("em",{parentName:"li"},"The 'files' list in config file is empty.")," (it is strongly recommended including this one)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"18003"),": ",(0,a.kt)("em",{parentName:"li"},"No inputs were found in config file.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"exclude")),": If specified, diagnostics of source files which path ",(0,a.kt)("strong",{parentName:"li"},"matches")," will be ignored. This works a bit\nsimilar to ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig")," option ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#exclude"},"exclude")," with the only difference is that\nin TypeScript, ",(0,a.kt)("inlineCode",{parentName:"li"},"exclude")," will also exclude files from compilation process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"pretty")),": Enables/disables colorful and pretty output of errors (default: ",(0,a.kt)("em",{parentName:"li"},"enabled"),").")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"disabling-diagnostics"},"Disabling diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: false,\n    },\n  },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": false\n      }\n    }\n  }\n}\n')),(0,a.kt)("h4",{id:"advanced-options"},"Advanced options"),(0,a.kt)("h5",{id:"enabling-diagnostics-for-test-files-only"},"Enabling diagnostics for test files only"),(0,a.kt)("p",null,"Assuming all your test files ends with ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.ts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".test.ts"),", using the following config will enable error reporting only for those files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        exclude: ['**/*.spec.ts'],\n      },\n    },\n  },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "exclude": ["**/*.spec.ts"]\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("h5",{id:"do-not-fail-on-first-error"},"Do not fail on first error"),(0,a.kt)("p",null,"While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"warnOnly")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        warnOnly: true,\n      },\n    },\n  },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "warnOnly": true\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("h5",{id:"ignoring-some-error-codes"},"Ignoring some error codes"),(0,a.kt)("p",null,"All TypeScript error codes can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"},"there"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreCodes")," option accepts this values:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A single ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," (example: ",(0,a.kt)("inlineCode",{parentName:"li"},"1009"),"): unique error code to ignore"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," with a code (example ",(0,a.kt)("inlineCode",{parentName:"li"},'"1009"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"TS1009"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"TS1009"'),")"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," with a list of the above (example: ",(0,a.kt)("inlineCode",{parentName:"li"},'"1009, TS2571, 4072"'),")"),(0,a.kt)("li",{parentName:"ol"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," of one or more from ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," (example: ",(0,a.kt)("inlineCode",{parentName:"li"},'[1009, "TS2571", "6031"]'),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        ignoreCodes: [2571, 6031, 18003],\n      },\n    },\n  },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "ignoreCodes": [2571, 6031, 18003]\n        }\n      }\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);