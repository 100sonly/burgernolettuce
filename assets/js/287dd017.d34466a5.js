"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[7762],{5808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=(n(1694),n(3707),n(6533),n(505));const o={sidebar_position:2},s="Debug Notes",l={unversionedId:"debug-notes",id:"debug-notes",title:"Debug Notes",description:"This notes compile all sorts of bugs that you might encounter when running the mini project. Hopefully this helps \ud83e\ude79.",source:"@site/projects/debug-notes.md",sourceDirName:".",slug:"/debug-notes",permalink:"/2023ddw/projects/debug-notes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Web Basics",permalink:"/2023ddw/projects/background/web"},next:{title:"Mini-Project 1: Sorting App",permalink:"/2023ddw/projects/sorting-app"}},p={},u=[{value:"TLDR: Running on Vocareum",id:"tldr-running-on-vocareum",level:3},{value:"Env does not have the var VOC_PROXY_ID",id:"env-does-not-have-the-var-voc_proxy_id",level:3},{value:"bash: ./runflaskvoc.sh /bin/bash^M: bad interpreter",id:"bash-runflaskvocsh-binbashm-bad-interpreter",level:3},{value:"Fix",id:"fix",level:4},{value:"Error: The server responded with a non-Javascript MIME type of &quot;text/plain&quot;",id:"error-the-server-responded-with-a-non-javascript-mime-type-of-textplain",level:3},{value:"Fix:",id:"fix-1",level:4},{value:"IndexError: list index out of range",id:"indexerror-list-index-out-of-range",level:3}],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debug-notes"},"Debug Notes"),(0,r.kt)(i.Z,{mdxType:"ChatBaseBubble"}),(0,r.kt)("p",null,"This notes compile all sorts of bugs that you ",(0,r.kt)("em",{parentName:"p"},"might")," encounter when running the mini project. Hopefully this helps \ud83e\ude79."),(0,r.kt)("h3",{id:"tldr-running-on-vocareum"},"TLDR: Running on Vocareum"),(0,r.kt)("p",null,"We have given the steps to you in the ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," file, we have also written additional explanations for you. But as the cherry on top, here's the steps:"),(0,r.kt)("p",null,"We assume you follow the ",(0,r.kt)("em",{parentName:"p"},"easy step"),", which is to clone the original repository and just paste your answer."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Clone")," the repository",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Data-Driven-World/d2w_mini_projects.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Refresh")," the webpage, you should see it in vocareum's file tree on the left hand side pane"),(0,r.kt)("li",{parentName:"ol"},"Change directory, ",(0,r.kt)("strong",{parentName:"li"},"install")," pipenv, ",(0,r.kt)("strong",{parentName:"li"},"install")," modules, ",(0,r.kt)("strong",{parentName:"li"},"start")," pipenv shell",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd d2w_min_projects/mp_sort\npip install --user pipenv\npipenv install\npipenv shell\n"))),(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("strong",{parentName:"li"},"content")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"/app/__init.py__"),": set ",(0,r.kt)("inlineCode",{parentName:"li"},"voc=True"),". You can click the python file from the Vocareum left pane.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# set voc=False if you run on local computer\napplication.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=True)\n"))),(0,r.kt)("li",{parentName:"ol"},"Paste your answer in the ",(0,r.kt)("strong",{parentName:"li"},"relevant files"),", e.g ",(0,r.kt)("inlineCode",{parentName:"li"},"library.py"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*.html")," files, etc."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("strong",{parentName:"li"},"transcrypt")," (assuming your current directory is ",(0,r.kt)("inlineCode",{parentName:"li"},"mp_*"),")",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /app/static\npython -m transcrypt -b -n library\n"))),(0,r.kt)("li",{parentName:"ol"},"Go back to ",(0,r.kt)("inlineCode",{parentName:"li"},"mp_*")," directory, change the bash script to be executable and run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd ../..\nchmod a+x ./runflaskvoc.sh\n./runflaskvoc.sh\n"))),(0,r.kt)("li",{parentName:"ol"},"Once it is running, you can open another tab in your browser and type the following url: ",(0,r.kt)("a",{parentName:"li",href:"https://myserver.vocareum.com/"},"https://myserver.vocareum.com/"))),(0,r.kt)("h3",{id:"env-does-not-have-the-var-voc_proxy_id"},"Env does not have the var VOC_PROXY_ID"),(0,r.kt)("p",null,"You need to add the ",(0,r.kt)("strong",{parentName:"p"},"trailing slash")," at the URL as shown in the screenshot below:"),(0,r.kt)("img",{src:"/assets/images/debug-notes/2022-09-23-17-07-41.png",class:"center_seventy"}),(0,r.kt)("h3",{id:"bash-runflaskvocsh-binbashm-bad-interpreter"},"bash: ./runflaskvoc.sh /bin/bash^M: bad interpreter"),(0,r.kt)("p",null,"This is due to the way ",(0,r.kt)("strong",{parentName:"p"},"newline")," is encoded in Windows vs UNIX machines. You can read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://support.nesi.org.nz/hc/en-gb/articles/218032857-Converting-from-Windows-style-to-UNIX-style-line-endings"},"here"),"."),(0,r.kt)("h4",{id:"fix"},"Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open runflaskvoc.sh on vocareum"),(0,r.kt)("li",{parentName:"ul"},"Go to line 2 (the empty line after #!/bin/bash)"),(0,r.kt)("li",{parentName:"ul"},"Press backspace"),(0,r.kt)("li",{parentName:"ul"},"Press enter"),(0,r.kt)("li",{parentName:"ul"},"Wait for it to save"),(0,r.kt)("li",{parentName:"ul"},"Run ./runflaskvoc.sh again")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Courtesy of TA Daniel")),(0,r.kt)("h3",{id:"error-the-server-responded-with-a-non-javascript-mime-type-of-textplain"},'Error: The server responded with a non-Javascript MIME type of "text/plain"'),(0,r.kt)("p",null,"It means that ",(0,r.kt)("em",{parentName:"p"},"something")," might have changed your ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/windows/how-to-open-registry-editor-in-windows-10-deab38e6-91d6-e0aa-4b7c-8878d9e07b11"},"Windows registry")," file."),(0,r.kt)("h4",{id:"fix-1"},"Fix:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open your search bar by pressing Win + R"),(0,r.kt)("li",{parentName:"ul"},"Type in regedit and press enter"),(0,r.kt)("li",{parentName:"ul"},"Find .js under the parent path HKEY_CLASSES_ROOT"),(0,r.kt)("li",{parentName:"ul"},"Change the data field of Content Type from text/plain to application/javascript"),(0,r.kt)("li",{parentName:"ul"},"Save, and then re-run flask run")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Courtesy of TA Alex")),(0,r.kt)("h3",{id:"indexerror-list-index-out-of-range"},"IndexError: list index out of range"),(0,r.kt)("p",null,"If the error as such appear after typing the ",(0,r.kt)("inlineCode",{parentName:"p"},"transcrypt")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Traceback (most recent call last):\n  File \"/mnt/vocwork2/ddd_v1_w_2bG_1401946/asn1029778_3/asn1029779_1/work/.local/share/virtualenvs/mp_sort-K9CB8Yy2/lib/python3.8/site-packages/transcrypt/__main__.py\", line 162, in main\n    compiler.Program (transpilationDirs, __symbols__, __envir__)\n  File \"/mnt/vocwork2/ddd_v1_w_2bG_1401946/asn1029778_3/asn1029779_1/work/.local/share/virtualenvs/mp_sort-K9CB8Yy2/lib/python3.8/site-packages/transcrypt/modules/org/transcrypt/compiler.py\", line 112, in __init__\n    message = f'\\n\\t{exception}'\n  File \"/mnt/vocwork2/ddd_v1_w_2bG_1401946/asn1029778_3/asn1029779_1/work/.local/share/virtualenvs/mp_sort-K9CB8Yy2/lib/python3.8/site-packages/transcrypt/modules/org/transcrypt/utils.py\", line 215, in __str__\n    result += '\\n\\tFile \\'{}\\', line {}, namely:'.format (str (program.importStack [-1][0] .name), self.lineNr)\nIndexError: list index out of range\n")),(0,r.kt)("p",null,"then it is likely that you ",(0,r.kt)("strong",{parentName:"p"},"did not execute transcrypt")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/static")," directory. Simply ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," there and re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"transcrypt")," command again."))}c.isMDXComponent=!0}}]);