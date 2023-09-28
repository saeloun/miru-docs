"use strict";(self.webpackChunkmiru_docs=self.webpackChunkmiru_docs||[]).push([[914],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(i),g=r,h=c["".concat(u,".").concat(g)]||c[g]||d[g]||o;return i?n.createElement(h,a(a({ref:t},p),{},{components:i})):n.createElement(h,a({ref:t},p))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7271:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(7462),r=(i(7294),i(3905));const o={id:"guideline",title:"Guidelines"},a="Contributing to Miru",s={unversionedId:"contributing-guide/guideline",id:"contributing-guide/guideline",title:"Guidelines",description:"If you're here, it means this is going to be the start of something amazing! \u2728 Thank you for your interest in contributing to Miru! We're happy to have you here.",source:"@site/docs/contributing-guide/guidelines.md",sourceDirName:"contributing-guide",slug:"/contributing-guide/guideline",permalink:"/contributing-guide/guideline",draft:!1,editUrl:"https://github.com/saeloun/miru-docs/edit/main/docs/contributing-guide/guidelines.md",tags:[],version:"current",lastUpdatedBy:"Akhil G Krishnan",lastUpdatedAt:1664687860,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{id:"guideline",title:"Guidelines"},sidebar:"tutorialSidebar",previous:{title:"RSpec",permalink:"/contributing-guide/testing/rspec"}},u={},l=[{value:"How you can help",id:"how-you-can-help",level:2},{value:"Setup",id:"setup",level:2},{value:"Everything is GitHub",id:"everything-is-github",level:2},{value:"Reporting a bug",id:"reporting-a-bug",level:2},{value:"Fixing a bug",id:"fixing-a-bug",level:2},{value:"First-time contributors",id:"first-time-contributors",level:2},{value:"Discussing code or improving workflows",id:"discussing-code-or-improving-workflows",level:2},{value:"Proposing a new feature",id:"proposing-a-new-feature",level:2},{value:"License",id:"license",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-to-miru"},"Contributing to Miru"),(0,r.kt)("p",null,"If you're here, it means this is going to be the start of something amazing! \u2728 Thank you for your interest in contributing to Miru! We're happy to have you here."),(0,r.kt)("h2",{id:"how-you-can-help"},"How you can help"),(0,r.kt)("p",null,"Miru, though managed by the awesome folks at ",(0,r.kt)("a",{parentName:"p",href:"https://saeloun.com/"},"Saeloun"),", is an open source project. This means that we're always looking for help from the community to make Miru better. Here are some ways you can help:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Report a bug"),(0,r.kt)("li",{parentName:"ul"},"Fix a bug (even if it's just a typo)"),(0,r.kt)("li",{parentName:"ul"},"Discuss on code design and quality"),(0,r.kt)("li",{parentName:"ul"},"Suggest improvements to existing workflows"),(0,r.kt)("li",{parentName:"ul"},"Propose an entirely new feature")),(0,r.kt)("p",null,"You can also join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/UABXyQQ82c"},"Discord")," channel to chat with the team and other contributors."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/environment-setup"},"Contribution Setup")," contains all the setup information you'd require. Please follow the instructions there to get started."),(0,r.kt)("h2",{id:"everything-is-github"},"Everything is GitHub"),(0,r.kt)("p",null,"We use GitHub to plan and track our work as well as host the code itself! If you're not familiar with GitHub, we recommend you take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://guides.github.com/activities/hello-world/"},"this")," to get started."),(0,r.kt)("h2",{id:"reporting-a-bug"},"Reporting a bug"),(0,r.kt)("p",null,"If you find a bug, no matter how small, please report it by opening an issue on GitHub and following the template provided. However ensure that a duplicate issue doesn't already exist. If it does, please add a comment to the existing issue instead of opening a new one."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"good bug report")," tends to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A short summary and/or background"),(0,r.kt)("li",{parentName:"ul"},"Detailed steps that help reproduce the bug",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Be specific!"),(0,r.kt)("li",{parentName:"ul"},"Give sample code if you can."),(0,r.kt)("li",{parentName:"ul"},"Add screenshots if needed."))),(0,r.kt)("li",{parentName:"ul"},"What you expected vs what actually happened"),(0,r.kt)("li",{parentName:"ul"},"Notes detailing the context in which you experienced the bug, the ways you tried to fix it or any supporting information that might help us understand the bug.")),(0,r.kt)("h2",{id:"fixing-a-bug"},"Fixing a bug"),(0,r.kt)("p",null,"If you'd like to contribute by fixing a bug, please choose an issue from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/saeloun/miru-web/issues"},"issues")," page and comment on it to let us know that you're working on it. This avoids multiple people working on similar issues."),(0,r.kt)("p",null,"If the issue you're working on requires a design or architecture change, please comment out your proposed solution on the issue page. This will help us review your solution before you start working on it. Please wait for a maintainer to approve your solution before you start working on it."),(0,r.kt)("p",null,"Once you've decided the issue you'll be working on, please follow the instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We use ",(0,r.kt)("a",{parentName:"li",href:"https://nvie.com/posts/a-successful-git-branching-model/"},"git-flow")," branching model. The base branch is develop. Please create a new branch from develop and name it appropriately."),(0,r.kt)("li",{parentName:"ol"},"Make your changes"),(0,r.kt)("li",{parentName:"ol"},"Add or update tests as required. Ensure that your tests cover all the cases you've added or updated."),(0,r.kt)("li",{parentName:"ol"},"Ensure the test suite passes."),(0,r.kt)("li",{parentName:"ol"},"Make sure is linted and formatted."),(0,r.kt)("li",{parentName:"ol"},"Raise a pull request!")),(0,r.kt)("h2",{id:"first-time-contributors"},"First-time contributors"),(0,r.kt)("p",null,"There are a few things you can do to help out if you're a first-time contributor. We've tagged some issues with the ",(0,r.kt)("inlineCode",{parentName:"p"},"good first issue")," label. These are issues that are easy to fix and are a good place to start."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/saeloun/miru-web/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issues")),(0,r.kt)("p",null,"Always make sure to leave a comment before you start working on an issue."),(0,r.kt)("h2",{id:"discussing-code-or-improving-workflows"},"Discussing code or improving workflows"),(0,r.kt)("p",null,"Feel free to open an issue to discuss code design and quality or suggest improvements. We're always open to making Miru better! Tag it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"discussion")," label."),(0,r.kt)("h2",{id:"proposing-a-new-feature"},"Proposing a new feature"),(0,r.kt)("p",null,"Miru is a work in progress. We're always looking to add new features to make it better. If you have an idea for a new feature, please open an issue and tag it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," label. We'll review it and let you know if we're interested in adding it."),(0,r.kt)("p",null,"Please do not start working on a feature without getting it approved by a maintainer first. There might be a reason why we haven't added it yet."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"By contributing, you agree that your contributions will be licensed under the MIT License."))}d.isMDXComponent=!0}}]);