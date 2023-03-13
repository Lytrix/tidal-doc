"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const i={title:"The meaning of $\xa0",id:"meaning_of_dollar"},o=void 0,l={unversionedId:"innards/meaning_of_dollar",id:"innards/meaning_of_dollar",title:"The meaning of $\xa0",description:"What is the dollar?",source:"@site/docs/innards/meaning_of_dollar.md",sourceDirName:"innards",slug:"/innards/meaning_of_dollar",permalink:"/docs/innards/meaning_of_dollar",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/meaning_of_dollar.md",tags:[],version:"current",lastUpdatedAt:1678737894,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"The meaning of $\xa0",id:"meaning_of_dollar"},sidebar:"docs",previous:{title:"Haskell",permalink:"/docs/innards/haskell"},next:{title:"The meaning of .",permalink:"/docs/innards/meaning_of_dot"}},s={},p=[{value:"What is the dollar?",id:"what-is-the-dollar",level:2},{value:"Comparing $ and #",id:"comparing--and-",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-the-dollar"},"What is the dollar?"),(0,r.kt)("p",null,"The dollar (",(0,r.kt)("inlineCode",{parentName:"p"},"$"),") is a mysterious thing. It doesn't really do anything, but is super useful. It's easy to get it mixed up with other operators in ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),", because in a way they both 'join things together'. But what is ",(0,r.kt)("inlineCode",{parentName:"p"},"$"),", exactly?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," is used a lot in ",(0,r.kt)("strong",{parentName:"p"},"Haskell")," (the language which ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," lives inside). Like a lot of things in Haskell, ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," is a function. Like all operators (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"), it has two inputs - the left side, and the right side, and has one output. The left input must be a function, and all that ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," does is pass what's on the right hand side, and give it to that function. In other words, in this expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'rev $ "1 2 3"\n')),(0,r.kt)("p",null,"... the dollar takes ",(0,r.kt)("inlineCode",{parentName:"p"},'"1 2 3"')," and passes it to the function ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),". So actually the above is the same as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'rev "1 2 3"\n')),(0,r.kt)("p",null,"So if we can do without it, why is it useful? Lets look at a slightly more complex example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'fast 2 $ rev "1 2 3"\n')),(0,r.kt)("p",null,"Here the dollar takes care of passing ",(0,r.kt)("inlineCode",{parentName:"p"},'rev "1 2 3"')," to ",(0,r.kt)("inlineCode",{parentName:"p"},"fast 2"),". If we missed it out, then we'd get an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- this gives an error!\nfast 2 rev "1 2 3"\n')),(0,r.kt)("p",null,"That's because the computer will first read ",(0,r.kt)("inlineCode",{parentName:"p"},"fast 2"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"rev"),", and try to treat ",(0,r.kt)("inlineCode",{parentName:"p"},"rev")," as a pattern to be speeded up. But on its own, ",(0,r.kt)("inlineCode",{parentName:"p"},"rev")," isn't a pattern, but a function for transforming pattern."),(0,r.kt)("p",null,"To avoid this error, we could use parenthesis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'fast 2 (rev "1 2 3")\n')),(0,r.kt)("p",null,"Here the brackets make sure ",(0,r.kt)("inlineCode",{parentName:"p"},'rev "1 2 3"')," is calculated first, before it is passed as a pattern to ",(0,r.kt)("inlineCode",{parentName:"p"},"fast 2"),"."),(0,r.kt)("p",null,"So, both ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," and parenthesis can be used to control which code is calculated first. The ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," is often used to avoid having to match opening and closing brackets, but sometimes parenthesis makes more sense."),(0,r.kt)("p",null,"Note that you can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," with operators. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- this doesn't work either!\n4 * $ 2 + 3\n-- but this does\n4 * (2 + 3)\n")),(0,r.kt)("h2",{id:"comparing--and-"},"Comparing $ and ","#"),(0,r.kt)("p",null,"So, ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," is used to join a parameter (on the right) with a function (on the left). ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," (and all its friends ",(0,r.kt)("inlineCode",{parentName:"p"},"|+|"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"|*|"),", etc) are used to combine a pattern on the right with a pattern on the left. Check out the page ",(0,r.kt)("inlineCode",{parentName:"p"},"Pattern structure")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Basics")," section."))}c.isMDXComponent=!0}}]);