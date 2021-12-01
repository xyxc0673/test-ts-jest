"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8559],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7059:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),s=["components"],i={id:"mock-es6-class",title:"Mock ES6 class"},c=void 0,l={unversionedId:"guides/mock-es6-class",id:"guides/mock-es6-class",isDocsHomePage:!1,title:"Mock ES6 class",description:"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.",source:"@site/docs/guides/mock-es6-class.md",sourceDirName:"guides",slug:"/guides/mock-es6-class",permalink:"/ts-jest/docs/next/guides/mock-es6-class",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/mock-es6-class.md",tags:[],version:"current",frontMatter:{id:"mock-es6-class",title:"Mock ES6 class"},sidebar:"docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/next/guides/esm-support"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/next/guides/react-native"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,a.kt)("inlineCode",{parentName:"p"},"const soundPlayer = require('./sound-player')"),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"new soundPlayer.default()"),". However if you are mocking the class as suggested by the documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n")),(0,a.kt)("p",null,"You will get the error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TypeError: sound_player_1.default is not a constructor\n")),(0,a.kt)("p",null,"because ",(0,a.kt)("inlineCode",{parentName:"p"},"soundPlayer.default")," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n")),(0,a.kt)("p",null,"For named imports, like ",(0,a.kt)("inlineCode",{parentName:"p"},"import { OAuth2 } from './oauth'"),", replace ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," with imported module name, ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth2")," in this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n")))}m.isMDXComponent=!0}}]);