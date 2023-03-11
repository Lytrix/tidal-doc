"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=l,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(3117),l=(a(7294),a(3905));const r={title:"Linux",permalink:"wiki/Linux_installation/",layout:"wiki"},i=void 0,o={unversionedId:"getting-started/linux_install",id:"getting-started/linux_install",title:"Linux",description:"-----",source:"@site/docs/getting-started/linux_install.md",sourceDirName:"getting-started",slug:"/getting-started/linux_install",permalink:"/docs/getting-started/linux_install",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/linux_install.md",tags:[],version:"current",lastUpdatedBy:"Alex McLean",lastUpdatedAt:1678569506,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Linux",permalink:"wiki/Linux_installation/",layout:"wiki"},sidebar:"docs",previous:{title:"Showcase",permalink:"/docs/showcase"},next:{title:"MacOS",permalink:"/docs/getting-started/macos_install"}},s={},p=[{value:"Automatic installation",id:"automatic-installation",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Configure User",id:"configure-user",level:3},{value:"Package Preconfiguration",id:"package-preconfiguration",level:3},{value:"SuperCollider Installation",id:"supercollider-installation",level:3},{value:"SuperDirt Installation",id:"superdirt-installation",level:3},{value:"Tidal Installation",id:"tidal-installation",level:3},{value:"Choose a Text Editor",id:"choose-a-text-editor",level:3},{value:"Start Tidal",id:"start-tidal",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("translate",null,(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"automatic-installation"},"Automatic installation"),(0,l.kt)("p",null,"There are user-made tools to install the Tidalcycles stack. Be sure to check out the following solutions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cleary/ansible-tidalcycles"},"Ansible method"),": Ubuntu / debian / Mint (/ most debian-based distros)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"full featured solution including SuperCollider, Haskell, Tidal, SuperDirt, code editor, and package dependencies"),(0,l.kt)("li",{parentName:"ul"},"has customization options, including adding additional sample sources and bus channel settings"),(0,l.kt)("li",{parentName:"ul"},"for more information, see the ",(0,l.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/install-manage-upgrades-to-tidal-environment-with-a-single-command-on-ubuntu-debian-linux-mint-ansible-method/544"},"Tidal Club thread")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://roosnaflak.com/tech-and-research/install-tidal-cycles-on-arch-linux/"},"Yay")," : installation on Arch / Manjaro.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,l.kt)("p",null,"There are several required components for a complete Tidal Cycles system "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.haskell.org/platform/"},"Haskell")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://supercollider.github.io/downloads"},"SuperCollider")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt")),(0,l.kt)("li",{parentName:"ul"},"a Text Editor (eg ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Pulsar"},"Pulsar"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/VS_Code"},"VS Code"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Vim"},"vim/neovim"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Emacs"},"emacs"),", and more)\n")),(0,l.kt)("p",null,"Most modern distros will make all or most of these available for convenient install via their package managers."),(0,l.kt)("p",null,"The following instructions provide commands specific to different distro families. They are labelled as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"debian"))," - the debian family of distros includes ",(0,l.kt)("strong",{parentName:"li"},"debian"),", ",(0,l.kt)("strong",{parentName:"li"},"*","buntu"),", ",(0,l.kt)("strong",{parentName:"li"},"Mint"),", ",(0,l.kt)("strong",{parentName:"li"},"pop!_OS")," and more"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"arch"))," - the Arch family of distros includes ",(0,l.kt)("strong",{parentName:"li"},"Arch Linux"),", ",(0,l.kt)("strong",{parentName:"li"},"Manjaro")," and more"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"fedora"))," - the fedora distro (tested), may also apply to other RPM based distros (eg RedHat, OpenSUSE, Rocky Linux etc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"all"))," - this command should be run by everyone, regardless of distro\n")),(0,l.kt)("p",null,"Choose the command that matches the distro you are running."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"configure-user"},"Configure User"),(0,l.kt)("p",null,"1","."," Add your user as a member of the ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," group"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"all"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -a -G audio $USER\n")),(0,l.kt)("p",null,"2","."," Logout and log back in for it to take effect. You can check it worked with"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"all"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"groups | grep audio\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"package-preconfiguration"},"Package Preconfiguration"),(0,l.kt)("p",null,"1","."," Install dependencies"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"debian"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update; sudo apt install git jackd2 qjackctl zlib1g-dev gcc g++ cabal-install\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"arch"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Syu; pacman -Sy git jack2 qjackctl\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"fedora"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install git-core qjackctl gcc-c++ cabal-install\n")),(0,l.kt)("p",null,"2","."," Remove conflicts"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"arch"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -R lib32-mesa-demos mesa-demos\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"supercollider-installation"},"SuperCollider Installation"),(0,l.kt)("p",null,"1","."," Install SuperCollider and SC3-Plugins"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"debian"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install supercollider sc3-{plugins,plugins-language,plugins-server}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"arch"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy supercollider sc3-plugins\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"fedora"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install supercollider\n")),(0,l.kt)("p",null,"sc3-plugins for fedora is provided by a 3rd party repo (you may choose to leave it enabled)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf copr enable ycollet/audinux; sudo dnf install supercollider-sc3-plugins; sudo dnf copr disable ycollet/audinux;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"superdirt-installation"},"SuperDirt Installation"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"SuperDirt")," is a plugin or ",(0,l.kt)("em",{parentName:"p"},'"Quark"')," for SuperCollider, and functions as the audio engine for TidalCycles as well as providing the default set of samples.")),(0,l.kt)("p",null,"1","."," Get the version number of the latest SuperDirt release (you can also do this by checking the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/releases"},"github page"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"all"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git ls-remote https://github.com/musikinformatik/SuperDirt.git | grep tags | tail -n1 | awk -F/ '{print $NF}'\n")),(0,l.kt)("p",null,"2","."," Install SuperDirt, update the version number if required. Once complete press ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+d")," to exit ",(0,l.kt)("inlineCode",{parentName:"p"},"sclang")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"all"))),(0,l.kt)("p",null,"2",".","a. Start the ",(0,l.kt)("inlineCode",{parentName:"p"},"sclang")," shell"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sclang\n")),(0,l.kt)("p",null,"2",".","b. Paste this line and press Enter (and wait, it returns immediately but processes in the background)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tidal-installation"},"Tidal Installation"),(0,l.kt)("p",null,"1","."," Install tidal"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"arch"))," is the only distro to support Tidal installation via it's core package manager, other distros require using the haskell package/environment manager, ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal (>=3.0.0.0)")," ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"arch"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sy haskell-tidal ghc ghc-libs haskell-{tidal,bifunctors,colour,hosc,mwc-random,network,primitive,random,vector,microspec}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"all others"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cabal update; cabal install tidal --lib\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," can be notoriously fickle. If for some reason it fails, you can safely reset the environment by renaming your ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ghc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.cabal")," folders, and re-running the above commands.*")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"choose-a-text-editor"},"Choose a Text Editor"),(0,l.kt)("p",null,"TidalCycles is supported by a wide variety of text editors, you will need one to get started:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Pulsar"},"Pulsar")," (was Atom)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/VS_Code"},"VS Code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Vim"},"vim/neovim")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started/editor/Emacs"},"emacs"))),(0,l.kt)("p",null,"... and more."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"start-tidal"},"Start Tidal"),(0,l.kt)("p",null,"You're almost there! ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting-started/tidal_start"},"Follow these instructions to get Tidal started"))))}d.isMDXComponent=!0}}]);