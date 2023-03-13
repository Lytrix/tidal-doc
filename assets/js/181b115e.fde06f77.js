"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=l,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const r={title:"Conditions",id:"conditions"},o=void 0,i={unversionedId:"reference/conditions",id:"reference/conditions",title:"Conditions",description:"This page will present you all the functions that can be used to add conditions to your patterns. Each function will be presented following the same model:",source:"@site/docs/reference/conditions.md",sourceDirName:"reference",slug:"/reference/conditions",permalink:"/docs/reference/conditions",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/conditions.md",tags:[],version:"current",lastUpdatedAt:1678737894,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Conditions",id:"conditions"},sidebar:"reference",previous:{title:"Performance",permalink:"/docs/reference/performance"},next:{title:"Time",permalink:"/docs/reference/time"}},s={},p=[{value:"Conditions on cycle numbers",id:"conditions-on-cycle-numbers",level:2},{value:"every",id:"every",level:3},{value:"every&#39;",id:"every-1",level:3},{value:"foldEvery",id:"foldevery",level:3},{value:"when",id:"when",level:3},{value:"whenT",id:"whent",level:3},{value:"whenmod",id:"whenmod",level:3},{value:"ifp",id:"ifp",level:3},{value:"Conditions on ControlPatterns",id:"conditions-on-controlpatterns",level:2},{value:"fix",id:"fix",level:3},{value:"unfix",id:"unfix",level:3},{value:"contrast",id:"contrast",level:3},{value:"contrastBy",id:"contrastby",level:3},{value:"Choosing patterns and functions",id:"choosing-patterns-and-functions",level:2},{value:"choose",id:"choose",level:3},{value:"chooseby",id:"chooseby",level:3},{value:"wchoose",id:"wchoose",level:3},{value:"wchooseby",id:"wchooseby",level:3},{value:"select",id:"select",level:3},{value:"selectF",id:"selectf",level:3},{value:"pickF",id:"pickf",level:3},{value:"squeeze",id:"squeeze",level:3},{value:"inhabit",id:"inhabit",level:3},{value:"Boolean conditions",id:"boolean-conditions",level:2},{value:"struct",id:"struct",level:3},{value:"mask",id:"mask",level:3},{value:"sew",id:"sew",level:3},{value:"stitch",id:"stitch",level:3},{value:"Euclidians",id:"euclidians",level:2},{value:"euclid",id:"euclid",level:3},{value:"euclidInv",id:"euclidinv",level:3},{value:"euclidFull",id:"euclidfull",level:3},{value:"ControlPattern conditions",id:"controlpattern-conditions",level:2},{value:"fix",id:"fix-1",level:3},{value:"fixRange",id:"fixrange",level:3},{value:"ifp",id:"ifp-1",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page will present you all the functions that can be used to add conditions to your patterns. Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"conditions-on-cycle-numbers"},"Conditions on cycle numbers"),(0,l.kt)("h3",{id:"every"},"every"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"every")," is function that allows you to apply another function conditionally. It takes three inputs: how often the function should be applied (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," to apply it every ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," cycles), the function to be applied, and the pattern you are applying it to. For example: to reverse a pattern every three cycles (and for the other two play it normally)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"\n')),(0,l.kt)("p",null,"Note that if the function you're applying itself requires additional parameters (such as fast 2 to make a pattern twice as fast), then you'll need to wrap it in parenthesis, like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 (fast 2) $ n "0 1 [~ 2] 3" # sound "arpy"\n')),(0,l.kt)("p",null,"Otherwise, the ",(0,l.kt)("inlineCode",{parentName:"p"},"every")," function will think it is being passed too many parameters."),(0,l.kt)("h3",{id:"every-1"},"every'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: every' :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"every'")," is a generalisation of ",(0,l.kt)("inlineCode",{parentName:"p"},"every"),", taking one additional argument. The additional argument allows you to offset the function you are applying."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"every' 3 0 (fast 2)")," will speed up the cycle on cycles 0,3,6,\u2026 whereas ",(0,l.kt)("inlineCode",{parentName:"p"},"every' 3 1 (fast 2)")," will transform the pattern on cycles 1,4,7,\u2026"),(0,l.kt)("p",null,"With this in mind, setting the second argument of ",(0,l.kt)("inlineCode",{parentName:"p"},"every'")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," gives the equivalent ",(0,l.kt)("inlineCode",{parentName:"p"},"every")," function. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"every 3")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"every' 3 0"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"every")," functions can be used to silence a full cycle or part of a cycle by using ",(0,l.kt)("inlineCode",{parentName:"p"},"silent")," or ",(0,l.kt)("inlineCode",{parentName:"p"},'mask "~"'),". Mask provides additional flexibility to turn on/off individual steps.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 silent $ n "2 9 11 2" # s "hh27"\nd1 $ every 3 (mask "~") $ n "2 9 10 2" # s "hh27"\nd1 $ every 3 (mask "0 0 0 0") $ n "2 9 11 2" # s "hh27"\n')),(0,l.kt)("h3",{id:"foldevery"},"foldEvery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: foldEvery :: [Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"foldEvery")," is similar to chaining multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"every")," functions together. It transforms a pattern with a function, once per any of the given number of cycles. If a particular cycle is the start of more than one of the given cycle periods, then it it applied more than once."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ foldEvery [5,3] (|+ n 1) $ s "moog" # legato 1\n')),(0,l.kt)("p",null,"The first ",(0,l.kt)("inlineCode",{parentName:"p"},"moog")," samples are tuned to C2, C3 and C4. Note how on cycles multiple of 3 or 5 the pitch is an octave higher, and on multiples of 15 the pitch is two octaves higher, as the transformation is applied twice."),(0,l.kt)("h3",{id:"when"},"when"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: when :: (Int -> Bool) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Only when the given test function returns ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," the given pattern transformation is applied. The test function will be called with the current cycle as a number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 $ when ((elem '4').show) (striate 4) $ sound \"hh hc\"\n")),(0,l.kt)("p",null,"The above will only apply striate ",(0,l.kt)("inlineCode",{parentName:"p"},"4")," to the pattern if the current cycle number contains the number ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),". So the fourth cycle will be striated and the fourteenth and so on. Expect lots of striates after cycle number ",(0,l.kt)("inlineCode",{parentName:"p"},"399"),"."),(0,l.kt)("h3",{id:"whent"},"whenT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: whenT :: (Time -> Bool) -> (Pattern a -> Pattern a) ->  Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Only when the given test function returns ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," the given pattern transformation is applied. It differs from ",(0,l.kt)("inlineCode",{parentName:"p"},"when"),", being passed a continuous ",(0,l.kt)("inlineCode",{parentName:"p"},"Time")," value instead of the cycle number. Basically, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Rational")," version of ",(0,l.kt)("inlineCode",{parentName:"p"},"when"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ whenT ((< 0.5).(flip Data.Fixed.mod\' 2)) (# speed 2) $ sound "hh(4,8) hc(3,8)"\n')),(0,l.kt)("p",null,"The above will apply ",(0,l.kt)("inlineCode",{parentName:"p"},"# speed 2")," only when the remainder of the current ",(0,l.kt)("inlineCode",{parentName:"p"},"Time")," divided by ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," is less than ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5"),"."),(0,l.kt)("h3",{id:"whenmod"},"whenmod"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: whenmod :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"whenmod")," has a similar form and behavior to ",(0,l.kt)("inlineCode",{parentName:"p"},"every"),", but requires an additional number. It applies the function to the pattern, when the remainder of the current loop number divided by the first parameter, is greater or equal than the second parameter. For example the following makes every other block of four loops twice as ",(0,l.kt)("inlineCode",{parentName:"p"},"fast"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ whenmod 8 4 (fast 2) (sound "bd sn kurt")\n')),(0,l.kt)("h3",{id:"ifp"},"ifp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ifp :: (Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ifp")," decides whether to apply one or another function depending on the result of a test function, which is passed the current cycle as a number. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ifp ((== 0).(flip mod 2))\n  (striate 4)\n  (# coarse "24 48") $\n  sound "hh hc"\n')),(0,l.kt)("p",null,"This will apply ",(0,l.kt)("inlineCode",{parentName:"p"},"striate 4")," for every even cycle, and ",(0,l.kt)("inlineCode",{parentName:"p"},'# coarse "24 48"')," for every odd one."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The test function does not rely on anything Tidal-specific, it uses plain Haskell functionality for operating on numbers. That is, it calculates the modulo of ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," of the current cycle which is either ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," (for even cycles) or ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),". It then compares this value against ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and returns the result, which is either ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),". This is what the first part of ",(0,l.kt)("inlineCode",{parentName:"p"},"ifp"),"'s type signature signifies ",(0,l.kt)("inlineCode",{parentName:"p"},"(Int -> Bool)"),", a function that takes a whole number and returns either ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),".")),(0,l.kt)("h2",{id:"conditions-on-controlpatterns"},"Conditions on ControlPatterns"),(0,l.kt)("h3",{id:"fix"},"fix"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fix :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"fix")," function applies another function to matching events in a pattern of controls. ",(0,l.kt)("inlineCode",{parentName:"p"},"fix")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"contrast")," where the false-branching function is set to the identity ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ fix (# crush 3) (n "[1,4]") $ n "0 1 2 3 4 5 6" # sound "arpy"\n')),(0,l.kt)("p",null,"The above only adds the ",(0,l.kt)("inlineCode",{parentName:"p"},"crush")," control when the ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," control is set to either ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,l.kt)("p",null,"You can be quite specific, for example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'fix (hurry 2) (s "drum" # n "1")\n')),(0,l.kt)("p",null,"to apply the function ",(0,l.kt)("inlineCode",{parentName:"p"},"hurry 2")," to sample ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," of the drum sample set, and leave the rest as they are."),(0,l.kt)("h3",{id:"unfix"},"unfix"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unfix")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"fix")," but only applies when the testing pattern is ",(0,l.kt)("em",{parentName:"p"},"not")," a match."),(0,l.kt)("h3",{id:"contrast"},"contrast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: contrast :: (ControlPattern -> ControlPattern) -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"contrast")," is like a if-else-statement over patterns. For ",(0,l.kt)("inlineCode",{parentName:"p"},"contrast t f p")," you can think of ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," al the true-branch, ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," as the false branch, and ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," as the test."),(0,l.kt)("p",null,"For contrast, you can use any control pattern as a test of equality: ",(0,l.kt)("inlineCode",{parentName:"p"},'n "<0 1>"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'speed "0.5"'),", or things like that. This lets you choose specific properties of the pattern you're transforming for testing, like in the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ contrast (|+ n 12) (|- n 12) (n "c") $ n (run 4) # s "superpiano"\n')),(0,l.kt)("p",null,"where every note that isn't middle-c will be shifted down an octave but middle-c will be shifted up to c5."),(0,l.kt)("p",null,"Since the test given to contrast is also a pattern, you can do things like have it alternate between options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ contrast (|+ n 12) (|- n 12) (s "<superpiano superchip>") $ s "superpiano superchip" # n 0\n')),(0,l.kt)("p",null,"If you listen to this you'll hear that which instrument is shifted up and which instrument is shifted down alternates between cycles."),(0,l.kt)("h3",{id:"contrastby"},"contrastBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: contrastBy :: (a -> Value -> Bool) -> (ControlPattern -> Pattern b) -> (ControlPattern -> Pattern b) -> Pattern (Map.Map String a) -> Pattern (Map.Map String Value) -> Pattern b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"contrastBy")," is a more general version of ",(0,l.kt)("inlineCode",{parentName:"p"},"contrast")," where you can specify an abritrary boolean function that will be used to compare the control patterns. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"contrast")," itself is defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"contrastBy (==)"),", to test for equality."),(0,l.kt)("p",null,"Compare the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ contrast (|+ n 12) (|- n 12) (n "2") $ n "0 1 2 [3 4]" # s "superpiano"\n\nd2 $ contrastBy (>=) (|+ n 12) (|- n 12) (n "2") $ n "0 1 2 [3 4]" # s "superpiano"\n')),(0,l.kt)("p",null,'In the latter example, we test for "greater than or equals to" instead of simple equality.'),(0,l.kt)("h2",{id:"choosing-patterns-and-functions"},"Choosing patterns and functions"),(0,l.kt)("h3",{id:"choose"},"choose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: choose :: [a] -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"choose")," function emits a stream of randomly choosen values from the given list, as a continuous pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (choose [0,2,3])\n')),(0,l.kt)("p",null,"As with all continuous patterns, you have to be careful to give them structure; in this case choose gives you an infinitely detailed stream of random choices."),(0,l.kt)("h3",{id:"chooseby"},"chooseby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chooseBy :: Pattern Double -> [a] -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"chooseBy")," function is like choose but instead of selecting elements of the list randomly, it uses the given pattern to select elements."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'chooseBy "0 0.25 0.5" ["a","b","c","d"]\n')),(0,l.kt)("p",null,"will result in the pattern ",(0,l.kt)("inlineCode",{parentName:"p"},'"a b c" '),"."),(0,l.kt)("h3",{id:"wchoose"},"wchoose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: wchoose :: [(a, Double)] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wchoose")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"choose"),", but allows you to 'weight' the choices, so some are more likely to be chosen than others. The following is similar to the previous example, but the ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," is twice as likely to be chosen than the ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (wchoose [(0,0.25),(2,0.5),(3,0.25)])\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Prior to version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")," of ",(0,l.kt)("strong",{parentName:"p"},"Tidal"),", the weights had to add up to ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", but this is no longer the case.")),(0,l.kt)("h3",{id:"wchooseby"},"wchooseby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"wchooseBy")," function is like ",(0,l.kt)("inlineCode",{parentName:"p"},"wchoose")," but instead of selecting elements of the list randomly, it uses the given pattern to select elements."),(0,l.kt)("h3",{id:"select"},"select"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"select :: Pattern Double -> [Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,"Chooses between a list of patterns, using a pattern of floats (from ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,l.kt)("h3",{id:"selectf"},"selectF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"selectF :: Pattern Double -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Chooses between a list of functions, using a pattern of floats (from ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),")"),(0,l.kt)("h3",{id:"pickf"},"pickF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"pickF :: Pattern Int -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Chooses between a list of functions, using a pattern of integers."),(0,l.kt)("h3",{id:"squeeze"},"squeeze"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"squeeze :: Pattern Int -> [Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,"Chooses between a list of patterns, using a pattern of integers."),(0,l.kt)("h3",{id:"inhabit"},"inhabit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"inhabit :: [(String, Pattern a)] -> Pattern String -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"inhabit")," allows you to link patterns to some String, or in other words, to give patterns a name and then call them from within another pattern of Strings."),(0,l.kt)("p",null,"For example, we may make our own bassdrum, hi-hat and snaredrum kit using tidal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'do\n  let drum = inhabit [("bd",s "sine" |- accelerate 1.5),("hh",s "alphabet:7" # begin 0.7 # hpf 7000),("sd",s "invaders:3" # speed 12)]\n  d1 $ drum "[bd*8?, [~hh]*4, sd(6,16)]"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"inhabit")," can be very useful when using MIDI controlled drum machines, since you can give understandable drum names to patterns of notes."),(0,l.kt)("h2",{id:"boolean-conditions"},"Boolean conditions"),(0,l.kt)("h3",{id:"struct"},"struct"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: struct :: Pattern Bool -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"struct")," places a rhythmic 'boolean' structure on the pattern you give it. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct ("t ~ t*2 ~") $ sound "cp"\n')),(0,l.kt)("p",null,"... is the same as ..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "cp ~ cp*2 ~"\n')),(0,l.kt)("p",null,"The structure comes from a boolean pattern, i.e. a binary one containing true or false values. Above we only used true values, denoted by ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),". It's also possible to include false values with ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),", which struct will simply treat as silience. For example, this would have the same outcome as the above:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct ("t f t*2 f") $ sound "cp"\n')),(0,l.kt)("p",null,"These true/false binary patterns become useful when you conditionally manipulate them, for example 'inverting' the values using ",(0,l.kt)("inlineCode",{parentName:"p"},"every")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"inv"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct (every 3 inv "t f t*2 f") $ sound "cp"\n')),(0,l.kt)("p",null,"In the above, the boolean values will be 'inverted' every third cycle, so that the structure comes from the ",(0,l.kt)("inlineCode",{parentName:"p"},"fs")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),". Note that euclidean patterns also create true/false values, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct (every 3 inv "t(3,8)") $ sound "cp"\n')),(0,l.kt)("p",null,"In the above, the euclidean pattern creates ",(0,l.kt)("inlineCode",{parentName:"p"},'"t f t f t f f t"')," which gets inverted to ",(0,l.kt)("inlineCode",{parentName:"p"},'"f t f t f t t f"')," every third cycle. Note that if you prefer you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,l.kt)("h3",{id:"mask"},"mask"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: mask :: Pattern Bool -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mask")," takes a boolean (aka binary) pattern and 'masks' another pattern with it. That is, events are only carried over if they match within a 'true' event in the binary pattern. For example consider this kind of messy rhythm without any rests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (cat ["sn*8", "[cp*4 bd*4, hc*5]"]) # n (run 8)\n')),(0,l.kt)("p",null,"If we apply a mask to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ mask "t t t ~ t t ~ t"\n  $ s (cat ["sn*8", "[cp*4 bd*4, bass*5]"])\n  # n (run 8)\n')),(0,l.kt)("p",null,"Due to the use of ",(0,l.kt)("inlineCode",{parentName:"p"},"cat")," here, the same mask is first applied to ",(0,l.kt)("inlineCode",{parentName:"p"},'"sn*8"')," and in the next cycle to ",(0,l.kt)("inlineCode",{parentName:"p"},'"[cp4 bd4, hc*5]"'),"."),(0,l.kt)("p",null,"You could achieve the same effect by adding rests within the ",(0,l.kt)("inlineCode",{parentName:"p"},"cat")," patterns, but mask allows you to do this more easily. It kind of keeps the rhythmic structure and you can change the used samples independently:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ mask "1 ~ 1 ~ 1 1 ~ 1"\n  $ s (cat ["can*8", "[cp*4 sn*4, jvbass*16]"])\n  # n (run 8)\n')),(0,l.kt)("h3",{id:"sew"},"sew"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: Pattern Bool -> Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sew")," uses a pattern of boolean (true or false) values to switch between two other patterns. For example the following will play the first pattern for the first half of a cycle, and the second pattern for the other half."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (sew "t f" "bd*8" "cp*8")\n')),(0,l.kt)("p",null,"The above combines two patterns of strings, and passes the result to the sound function. It's also possible to sew together two control patterns, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sew "t <f t> <f [f t] t>" (n "0 .. 15" # s "future") (s "cp:3*16" # speed saw + 1.2)\n')),(0,l.kt)("p",null,"You can also use Euclidean rhythm syntax in the boolean sequence:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sew "t(11,16)" (n "0 .. 15" # s "future") (s "cp:3*16" # speed sine + 1.5)\n')),(0,l.kt)("h3",{id:"stitch"},"stitch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: Pattern Bool -> Pattern a -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stitch")," uses the first (binary) pattern to switch between the following two patterns. The resulting structure comes from the binary pattern, not the source patterns. This differs from sew where the resulting structure comes from the source patterns. For example, the following uses a euclidean pattern to control CC0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ccv (stitch "t(7,16)" 127 0) # ccn 0  # "midi"\n')),(0,l.kt)("h2",{id:"euclidians"},"Euclidians"),(0,l.kt)("h3",{id:"euclid"},"euclid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: euclid :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"euclid")," creates a Euclidean rhythmic structure. It produces the same output as the Euclidean pattern string. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ euclid 3 8 $ sound "cp"\n')),(0,l.kt)("p",null,"is the same as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "cp(3,8)"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"euclid")," accepts two parameters that can be patterns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ euclid "<3 5>" "[8 16]/4" $ s "bd"\n')),(0,l.kt)("h3",{id:"euclidinv"},"euclidInv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: euclidInv :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,"Inverts the pattern given by ",(0,l.kt)("inlineCode",{parentName:"p"},"euclid"),". For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [euclid 5 8 $ s "bd",\n            euclidInv 5 8 $ s "hh27"]\n')),(0,l.kt)("p",null,"to hear that the hi-hat event fires on every one of the eight even beats that the bass drum does not."),(0,l.kt)("h3",{id:"euclidfull"},"euclidFull"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Type: euclidFull :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a ->Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"euclidFull")," is a convenience function for playing one pattern on the euclidean rhythm and a different pattern on the off-beat."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'euclidFull 5 8 (s "bd") (s "hh27")\n')),(0,l.kt)("p",null,"is equivalent to our above example."),(0,l.kt)("h2",{id:"controlpattern-conditions"},"ControlPattern conditions"),(0,l.kt)("h3",{id:"fix-1"},"fix"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: fix :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"fix")," you can apply a ControlPattern as a condition and apply a function wich matches the controls. The first parameter is the function to apply and the second paramete is the condition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fix (ply 2) (s "hh") $ s "bd hh sn hh"\n')),(0,l.kt)("h3",{id:"fixrange"},"fixRange"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"fixRange :: (ControlPattern -> Pattern ValueMap) -> Pattern (Map.Map String (Value, Value)) -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"fixRange")," function isn't very user-friendly at the moment but you can create a ",(0,l.kt)("inlineCode",{parentName:"p"},"fix")," variant with a range condition. Any value of a ControlPattern wich matches the values will apply the passed function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ (fixRange ((# distort 1) . (# gain 0.8)) (pure $ Map.singleton "note"  ((VN 0, VN 7)))) $ s "superpiano" <| note "1 12 7 11"\n')),(0,l.kt)("h2",{id:"ifp-1"},"ifp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: ifp :: (Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ifp")," decides whether to apply one or another function depending on the result of a test function, which is passed the current cycle as a number. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ifp ((== 0).(flip mod 2))\n  (striate 4)\n  (# coarse "24 48") $\n  sound "hh hc"\n')),(0,l.kt)("p",null,"This will apply ",(0,l.kt)("inlineCode",{parentName:"p"},"striate 4")," for every even cycle, and ",(0,l.kt)("inlineCode",{parentName:"p"},'# coarse "24 48"')," for every odd one."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The test function does not rely on anything Tidal-specific, it uses plain Haskell functionality for operating on numbers. That is, it calculates the modulo of ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," of the current cycle which is either ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," (for even cycles) or ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),". It then compares this value against ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and returns the result, which is either ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),". This is what the first part of ",(0,l.kt)("inlineCode",{parentName:"p"},"ifp"),"'s type signature signifies ",(0,l.kt)("inlineCode",{parentName:"p"},"(Int -> Bool)"),", a function that takes a whole number and returns either ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),".")))}u.isMDXComponent=!0}}]);