"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[414],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||c[f]||s;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3859:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=["components"],i={title:"AST transformers option"},p=void 0,l={unversionedId:"getting-started/options/astTransformers",id:"getting-started/options/astTransformers",isDocsHomePage:!1,title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/docs/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/next/getting-started/options/astTransformers",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/astTransformers.md",tags:[],version:"current",frontMatter:{title:"AST transformers option"}},m=[{value:"Examples",id:"examples",children:[{value:"Basic Transformers",id:"basic-transformers",children:[],level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",children:[],level:4}],level:3},{value:"Public transformers",id:"public-transformers",children:[{value:"Example of opt-in transformers",id:"example-of-opt-in-transformers",children:[],level:4}],level:3},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",children:[],level:3}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),(0,s.kt)("p",null,"The option is ",(0,s.kt)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,s.kt)("inlineCode",{parentName:"li"},"import")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"require")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"define")," )."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",(0,s.kt)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"basic-transformers"},"Basic Transformers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['my-custom-transformer'],\n      },\n    },\n  },\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["my-custom-transformer"]\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: 'my-custom-transformer-that-needs-extra-opts',\n            options: {}, // extra options to pass to transformers here\n          },\n        ],\n      },\n    },\n  },\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": [\n            {\n              "path": "my-custom-transformer-that-needs-extra-opts",\n              "options": {} // extra options to pass to transformers here\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h3",{id:"public-transformers"},"Public transformers"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," is able to expose transformers for public usage to provide the possibility to opt-in/out for users. Currently\nthe exposed transformers are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path-mapping")," convert alias import/export to relative import/export path base on ",(0,s.kt)("inlineCode",{parentName:"li"},"paths")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"tsconfig"),".\nThis transformer works similar to ",(0,s.kt)("inlineCode",{parentName:"li"},"moduleNameMapper")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"jest.config.js"),". When using this transformer, one might not need\n",(0,s.kt)("inlineCode",{parentName:"li"},"moduleNameMapper")," anymore.")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"path-mapping")," AST transformer is now deprecated. Please should use an alternative one like ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/LeDDGroup/typescript-transform-paths"},"https://github.com/LeDDGroup/typescript-transform-paths")," instead."))),(0,s.kt)("h4",{id:"example-of-opt-in-transformers"},"Example of opt-in transformers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['ts-jest/dist/transformers/path-mapping'],\n      },\n    },\n  },\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["ts-jest/dist/transformers/path-mapping"]\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),(0,s.kt)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers"},"the one")," that ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}u.isMDXComponent=!0}}]);