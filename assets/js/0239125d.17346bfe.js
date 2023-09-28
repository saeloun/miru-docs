"use strict";(self.webpackChunkmiru_docs=self.webpackChunkmiru_docs||[]).push([[861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="Docker Setup Guide",i={unversionedId:"contributing-guide/setup/docker",id:"contributing-guide/setup/docker",title:"Docker Setup Guide",description:"Make sure you have Docker installed on your system.",source:"@site/docs/contributing-guide/setup/docker.md",sourceDirName:"contributing-guide/setup",slug:"/contributing-guide/setup/docker",permalink:"/docs/contributing-guide/setup/docker",draft:!1,editUrl:"https://github.com/saeloun/miru-docs/edit/main/docs/contributing-guide/setup/docker.md",tags:[],version:"current",lastUpdatedBy:"Akhil G Krishnan",lastUpdatedAt:1695891087,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Setup",permalink:"/docs/category/environment-setup"},next:{title:"Mac OS",permalink:"/docs/contributing-guide/setup/macos"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"1. Fork repository to your account",id:"1-fork-repository-to-your-account",level:4},{value:"2. Clone the repo to local",id:"2-clone-the-repo-to-local",level:4},{value:"3. Go to the project directory",id:"3-go-to-the-project-directory",level:4},{value:"4. Start Docker containers for your services",id:"4-start-docker-containers-for-your-services",level:4},{value:"5. Setup database",id:"5-setup-database",level:4},{value:"6. Navigate to http://0.0.0.0:3000 to access your running app.",id:"6-navigate-to-http00003000-to-access-your-running-app",level:4},{value:"7. To run rails console",id:"7-to-run-rails-console",level:4},{value:"To receive the emails in non-production apps.",id:"to-receive-the-emails-in-non-production-apps",level:3},{value:"User Test credentials",id:"user-test-credentials",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-setup-guide"},"Docker Setup Guide"),(0,a.kt)("p",null,"Make sure you have Docker installed on your system.\nIf not please follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"this")," guide.\nAlso, don't forget to stop your local running services like postgres, redis and elasticsearch while you're using docker to run your app.\nThis will prevent you from port binding conflicts which might already be taken by your local running services."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h4",{id:"1-fork-repository-to-your-account"},"1. ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/saeloun/miru-web/fork"},"Fork repository")," to your account"),(0,a.kt)("h4",{id:"2-clone-the-repo-to-local"},"2. Clone the repo to local"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/<your-name>/miru-web.git\n")),(0,a.kt)("h4",{id:"3-go-to-the-project-directory"},"3. Go to the project directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd miru-web/\n")),(0,a.kt)("h4",{id:"4-start-docker-containers-for-your-services"},"4. Start Docker containers for your services"),(0,a.kt)("p",null," To start all docker services defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", Run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker compose up\n")),(0,a.kt)("p",null,"Wait for the Docker to build the image defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile.local")," and up your containers for defined services in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),".\nOnce the database and redis service are up, Webpacker will compile the assets, and you will see your rails server running with elasticsearch and sidekiq."),(0,a.kt)("h4",{id:"5-setup-database"},"5. Setup database"),(0,a.kt)("p",null,"Once you see everything running correctly, Open a new terminal tab and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose exec app bundle exec rails db:reset\n")),(0,a.kt)("p",null,"OR you can exit out of the running server by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose run --rm app bundle exec rails db:reset\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"db:reset")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"db:setup")," both will work here.\n",(0,a.kt)("inlineCode",{parentName:"p"},"db:reset")," is just equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/rails db:drop db:setup"),".\\\nThis will setup your database with seed data."),(0,a.kt)("h4",{id:"6-navigate-to-http00003000-to-access-your-running-app"},"6. Navigate to ",(0,a.kt)("a",{parentName:"h4",href:"http://0.0.0.0:3000"},"http://0.0.0.0:3000")," to access your running app."),(0,a.kt)("h4",{id:"7-to-run-rails-console"},"7. To run rails console"),(0,a.kt)("p",null,"When app is running, open a new terminal tab and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose exec app bundle exec rails console\n")),(0,a.kt)("p",null,"OR run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose run --rm app bundle exec rails console\n")),(0,a.kt)("p",null,"when app is not running.\\\nSimilarly if you add new migrations or want to rollback previous one you can always follow the above mentioned procedure like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose exec app bundle exec rails db:migrate\n")),(0,a.kt)("p",null,"OR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose run --rm app bundle exec rails db:migrate\n")),(0,a.kt)("h3",{id:"to-receive-the-emails-in-non-production-apps"},"To receive the emails in non-production apps."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"/sent_emails")," for accessing the emails(for ",(0,a.kt)("inlineCode",{parentName:"p"},"/sent_emails")," route to work,\nadd ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAIL_DELIVERY_METHOD='letter_opener_web'")," to ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),")"),(0,a.kt)("h3",{id:"user-test-credentials"},"User Test credentials"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Role"),(0,a.kt)("th",{parentName:"tr",align:null},"Email"),(0,a.kt)("th",{parentName:"tr",align:null},"Password"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Owner"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:vipul@example.com"},"vipul@example.com")),(0,a.kt)("td",{parentName:"tr",align:null},"welcome")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Admin"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:supriya@example.com"},"supriya@example.com")),(0,a.kt)("td",{parentName:"tr",align:null},"welcome")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Employee"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:sam@example.com"},"sam@example.com")),(0,a.kt)("td",{parentName:"tr",align:null},"welcome")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:oliver@example.com"},"oliver@example.com")),(0,a.kt)("td",{parentName:"tr",align:null},"welcome")))))}u.isMDXComponent=!0}}]);