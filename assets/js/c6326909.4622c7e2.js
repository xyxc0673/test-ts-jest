"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4507],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),s=["components"],a={id:"version-checking",title:"Version checking"},c=void 0,p={unversionedId:"getting-started/version-checking",id:"version-27.0/getting-started/version-checking",isDocsHomePage:!1,title:"Version checking",description:"By default, ts-jest supports a range of versions for jest/typescript. One uses incompatible versions will receive a warning",source:"@site/versioned_docs/version-27.0/getting-started/version-checking.md",sourceDirName:"getting-started",slug:"/getting-started/version-checking",permalink:"/ts-jest/docs/27.0/getting-started/version-checking",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/version-checking.md",tags:[],version:"27.0",frontMatter:{id:"version-checking",title:"Version checking"},sidebar:"version-27.0-docs",previous:{title:"Paths mapping",permalink:"/ts-jest/docs/27.0/getting-started/paths-mapping"},next:{title:"ESM Support",permalink:"/ts-jest/docs/27.0/guides/esm-support"}},l=[{value:"Note",id:"note",children:[],level:3}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," supports a range of versions for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"typescript"),". One uses incompatible versions will receive a warning\nmessage while running tests. This warning message can be opt-out by setting environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux/MacOS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export TS_JEST_DISABLE_VER_CHECKER=true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set TS_JEST_DISABLE_VER_CHECKER=true\n")),(0,o.kt)("h3",{id:"note"},"Note"),(0,o.kt)("p",null,"As long as the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER")," stays, the warning message will no longer show.\nThis can lead to unexpected errors due to the usage of incompatible versions' dependencies. Use this environment variable with precautions."))}d.isMDXComponent=!0}}]);