"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(3117),a=(n(7294),n(3905));const i={title:"The meaning of .",id:"meaning_of_dot"},r=void 0,s={unversionedId:"innards/meaning_of_dot",id:"innards/meaning_of_dot",title:"The meaning of .",description:"The dot (.) is the Haskell operator for function composition. Function composition comes from mathematics - therefore it is really useful in making music. Haskell was originally designed by mathematicians and computer magicians. Its syntax borrowed quite a lot from mathematical notation. In some cases, Haskell is sometimes more precise and strict than other languages. The syntax is also much more compact.",source:"@site/docs/innards/meaning_of_dot.md",sourceDirName:"innards",slug:"/innards/meaning_of_dot",permalink:"/docs/innards/meaning_of_dot",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/meaning_of_dot.md",tags:[],version:"current",lastUpdatedBy:"Alex McLean",lastUpdatedAt:1678569506,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"The meaning of .",id:"meaning_of_dot"},sidebar:"docs",previous:{title:"The meaning of $\xa0",permalink:"/docs/innards/meaning_of_dollar"},next:{title:"Type Signatures",permalink:"/docs/innards/type_signatures"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"The dot",id:"the-dot",level:2},{value:"Why should I use it?",id:"why-should-i-use-it",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The dot (",(0,a.kt)("inlineCode",{parentName:"p"},"."),") is the ",(0,a.kt)("strong",{parentName:"p"},"Haskell")," operator for function composition. Function composition comes from mathematics - therefore it is really useful in making music. Haskell was originally designed by mathematicians and computer magicians. Its syntax borrowed quite a lot from mathematical notation. In some cases, Haskell is sometimes more precise and strict than other languages. The syntax is also much more compact. "),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When you make music with ",(0,a.kt)("strong",{parentName:"p"},"Tidal"),", you are composing functions: feeding the output of a function to another function, etc... Your function will generally output a pattern that will be parsed and sent to ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," to turn it into sound. ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," is another really useful function composition operator that you are using everytime you play with ",(0,a.kt)("strong",{parentName:"p"},"Tidal"),"."),(0,a.kt)("p",null,"Tidal functions are small little programs that do very few things. The name is sometimes a good description of the purpose of any given function. ",(0,a.kt)("inlineCode",{parentName:"p"},"fast")," will make things faster, ",(0,a.kt)("inlineCode",{parentName:"p"},"slow")," will slow them down, ",(0,a.kt)("inlineCode",{parentName:"p"},"striate"),' will striate, etc.. By feeding the output of a function to another one, you transform your pattern more and more, until your "composed" and definitive function feels allright for you.'),(0,a.kt)("h2",{id:"the-dot"},"The dot"),(0,a.kt)("p",null,"The dot is a ",(0,a.kt)("inlineCode",{parentName:"p"},"function composition")," operator. Let's take an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1\n  $ fast 2\n  $\xa0s "hh*4"\n')),(0,a.kt)("p",null,"This small code snippet will play a fast uninteresting hi-hat pattern."),(0,a.kt)("p",null,"Now, look at the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'-- with the dot operator\nd1 \n  $ every 2 (# speed 2) . fast 2\n  $ s "bd hh bd hh"\n\n-- without the dot operator\nd1 \n  $ every 2 (# speed 2) \n  $\xa0fast 2\n  $ s "bd hh bd hh"\n')),(0,a.kt)("p",null,"We did the same thing using two different methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'we "composed" a new function made of the output of ',(0,a.kt)("inlineCode",{parentName:"li"},"fast 2")," fed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"every 2 (# speed 2)")," function."),(0,a.kt)("li",{parentName:"ol"},"we passed the result of ",(0,a.kt)("inlineCode",{parentName:"li"},'fast 2 $\xa0s "bd hh bd hh"')," to ",(0,a.kt)("inlineCode",{parentName:"li"},"every 2 (# speed 2)"),".")),(0,a.kt)("p",null,"Luckily for us, these two examples sound the same. But you might start to see that we haven't applied the same method to get to the same result. Actually, we used two different ",(0,a.kt)("inlineCode",{parentName:"p"},"function composition")," operators."),(0,a.kt)("p",null,"The dot (",(0,a.kt)("inlineCode",{parentName:"p"},"."),') will take many of your functions and "compose" them together to make one single function that you can feed to another one as if it had always been a single function the whole time. Let\'s take a look at a more complex example that will do just that:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 \n  $ superimpose ((# speed "2*12") . (# squiz (slow 2 $ range 1 16 $\xa0sine)) . (striate\n  "[4|2|3]") . (ply "[[1 1 2 4]|[1 1 2 2]]") . (# room "0 0.5") . (# sz "0.2 0.4"))\n  $\xa0fast 2\n  $ s "bd hh bd hh" # amp 0.4\n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"superimpose")," expects a modified version of a pattern and our regular pattern. I fed only one function to describe the modified version, but I used the ",(0,a.kt)("inlineCode",{parentName:"p"},".")," to chain together many functions that will now be counted as one. The isolated modified function looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'((# speed "2*12") . (# squiz (slow 2 $ range 1 16 $\xa0sine)) . (striate\n  "[4|2|3]") . (ply "[[1 1 2 4]|[1 1 2 2]]") . (# room "0 0.5") . (# sz "0.2 0.4"))\n')),(0,a.kt)("p",null,"Let's see the type of this function using ",(0,a.kt)("inlineCode",{parentName:"p"},":t"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},":: Pattern ControlMap -> Pattern ControlMap\n")),(0,a.kt)("p",null,"Cool! As you can see, we are in fact dealing with a super simple object, made of many many tiny parts chained together using ",(0,a.kt)("inlineCode",{parentName:"p"},"."),"."),(0,a.kt)("h2",{id:"why-should-i-use-it"},"Why should I use it?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".")," is a very elegant operator to chain together functions at the speed of light. Using it, you might be able to compose more complex patterns easily."))}u.isMDXComponent=!0}}]);