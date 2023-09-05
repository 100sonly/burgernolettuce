"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[6635],{9143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),s=a(7294),A=a(3905),o=(a(1694),a(3707),a(6533)),i=a(505);const l={sidebar_position:2},r="Visualization",p={unversionedId:"data-visualization/visualisation",id:"data-visualization/visualisation",title:"Visualization",description:"Data visualization using Matplotlib and Seaborn in Python enables the creation of informative and visually appealing plots, charts, and graphs, facilitating the exploration, understanding, and communication of patterns, trends, and insights within data.",source:"@site/docs/08-data-visualization/visualisation.md",sourceDirName:"08-data-visualization",slug:"/data-visualization/visualisation",permalink:"/burgernolettuce/notes/data-visualization/visualisation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Working With Data",permalink:"/burgernolettuce/notes/data-visualization/working-with-data"},next:{title:"Week 9: Modeling Continuous Data",permalink:"/burgernolettuce/notes/category/week-9-modeling-continuous-data"}},m={},d=[{value:"Goals",id:"goals",level:3},{value:"Categories of Plots",id:"categories-of-plots",level:2},{value:"Histogram and Boxplot",id:"histogram-and-boxplot",level:2},{value:"Modifying Labels and Titles",id:"modifying-labels-and-titles",level:2},{value:"Using Hue",id:"using-hue",level:2},{value:"Scatter Plot and Line Plot",id:"scatter-plot-and-line-plot",level:2},{value:"Pair Plot",id:"pair-plot",level:2}],c={toc:d},h="wrapper";function g(e){let{components:t,...l}=e;return(0,A.kt)(h,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"visualization"},"Visualization"),(0,A.kt)("p",null,"Data visualization using Matplotlib and Seaborn in Python enables the creation of informative and visually appealing plots, charts, and graphs, facilitating the exploration, understanding, and communication of patterns, trends, and insights within data."),(0,A.kt)(i.Z,{mdxType:"ChatBaseBubble"}),(0,A.kt)("h3",{id:"goals"},"Goals"),(0,A.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Create ",(0,A.kt)("strong",{parentName:"li"},"scatter")," plot and other statistical plots like box plot, histogram, and bar plot")),(0,A.kt)("admonition",{title:"Keywords",type:"keyword"},(0,A.kt)("p",{parentName:"admonition"},(0,A.kt)("inlineCode",{parentName:"p"},"scatter plot"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"line plot"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"pair plot"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"bar plot"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"box plot"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"histogram"))),(0,A.kt)("p",null,"In this lesson, we will discuss common plots to visualize data using Matplotlib and Seaborn. Seaborn works on top of Matplotlib and you will need to import both packages in most of the cases."),(0,A.kt)("p",null,"Reference:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://seaborn.pydata.org/tutorial.html"},"Seaborn Tutorial")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://matplotlib.org/stable/tutorials/index.html"},"Matplotlib Tutorial"))),(0,A.kt)("p",null,"First, let's import the necessary packages:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\n")),(0,A.kt)("p",null,"We will still work with HDB resale price dataset to illustrate some visualization we can use. So let's import the dataset."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"file_url = 'https://www.dropbox.com/s/jz8ck0obu9u1rng/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv?raw=1'\ndf = pd.read_csv(file_url)\ndf\n")),(0,A.kt)("h2",{id:"categories-of-plots"},"Categories of Plots"),(0,A.kt)("p",null,"There are different categories of plot in Seaborn packages as shown in Seaborn documentation."),(0,A.kt)(o.Z,{path:"https://seaborn.pydata.org/_images/function_overview_8_0.png",widthPercentage:"40%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"We can use either scatterplot or lineplot if we want to see relationship between two or more data. On the other hand, we have a few options to see distribution of data. The common one would be a histogram. The last category is categorical plot. We can use box plot, for example, to see the statistics of different categories. We will illustrate this more in the following sections."),(0,A.kt)("h2",{id:"histogram-and-boxplot"},"Histogram and Boxplot"),(0,A.kt)("p",null,"One of the first thing we may want to do in understanding the data is to see its distribution and its descriptive statistics. To do this, we can use ",(0,A.kt)("inlineCode",{parentName:"p"},"histplot")," to show the histogram of the data and ",(0,A.kt)("inlineCode",{parentName:"p"},"boxplot")," to show the five-number summary of the data."),(0,A.kt)("p",null,"Let's see the resale price in the area around Tampines. First, let's check what are the town listed in this data set."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"np.unique(df['town'])\n")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"array(['ANG MO KIO', 'BEDOK', 'BISHAN', 'BUKIT BATOK', 'BUKIT MERAH',\n       'BUKIT PANJANG', 'BUKIT TIMAH', 'CENTRAL AREA', 'CHOA CHU KANG',\n       'CLEMENTI', 'GEYLANG', 'HOUGANG', 'JURONG EAST', 'JURONG WEST',\n       'KALLANG/WHAMPOA', 'MARINE PARADE', 'PASIR RIS', 'PUNGGOL',\n       'QUEENSTOWN', 'SEMBAWANG', 'SENGKANG', 'SERANGOON', 'TAMPINES',\n       'TOA PAYOH', 'WOODLANDS', 'YISHUN'], dtype=object)\n")),(0,A.kt)("p",null,"Now, let's get the data for resale in Tampines only."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"df_tampines = df.loc[df['town'] == 'TAMPINES',:]\ndf_tampines\n")),(0,A.kt)("p",null,"Then, we can plot its resale price distribution using ",(0,A.kt)("inlineCode",{parentName:"p"},"histplot"),"."),(0,A.kt)("p",null,"See ",(0,A.kt)("a",{parentName:"p",href:"https://seaborn.pydata.org/generated/seaborn.histplot.html"},"documentation for histplot")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"sns.histplot(x='resale_price', data=df_tampines)\n")),(0,A.kt)(o.Z,{path:a(3567).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"In the above plot, we use ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines")," as our data source and use ",(0,A.kt)("inlineCode",{parentName:"p"},"resale_price")," column as our x-axis. We can change the plot if we want to show it vertically."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"sns.set()\nsns.histplot(y='resale_price', data=df_tampines)\n")),(0,A.kt)(o.Z,{path:a(3911).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("admonition",{type:"note"},(0,A.kt)("p",{parentName:"admonition"},(0,A.kt)("strong",{parentName:"p"},"Notice that the background changes"),". This is because we have called ",(0,A.kt)("inlineCode",{parentName:"p"},"sns.set()")," which set Seaborn default setting instead of using Matplotlib's setting. For example, Matplotlib uses whitebackground and no grid. Seaborn by default displays some white grid on gray background.")),(0,A.kt)("p",null,"By default, the ",(0,A.kt)("inlineCode",{parentName:"p"},"bins")," argument is ",(0,A.kt)("inlineCode",{parentName:"p"},"auto")," and Seaborn will try to calculate how many bins should be used. But we can specify this manually."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"sns.histplot(y='resale_price', data=df_tampines, bins=10)\n")),(0,A.kt)(o.Z,{path:a(9414).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"We can see that majority of the sales of resale HDB in Tampines is priced at about ","$","400k to ","$","500k."),(0,A.kt)("p",null,"We can also use the ",(0,A.kt)("inlineCode",{parentName:"p"},"boxplot")," to see some descriptive statistics of the data."),(0,A.kt)("p",null,"See ",(0,A.kt)("a",{parentName:"p",href:"https://seaborn.pydata.org/generated/seaborn.boxplot.html"},"documentation on boxplot")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"sns.boxplot(x='resale_price', data=df_tampines)\n")),(0,A.kt)(o.Z,{path:a(3861).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"See ",(0,A.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/understanding-boxplots-5e2df7bcbd51"},"Understanding Boxplot")," for more detail. But the figure in that website summarizes the different information given in a boxplot."),(0,A.kt)(o.Z,{path:"https://miro.medium.com/max/700/1*2c21SkzJMf3frPXPAR_gZA.png",widthPercentage:"70%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"The box gives you the 25th percentile and the 75th percentile boundary. The line inside the box gives you the median of the data. As we can see the median is about ","$","400k to ","$","500k. The difference between the 75th percentile (Q3) and the 25th percentile (Q1) is called the ",(0,A.kt)("em",{parentName:"p"},"Interquartile Range")," (IQR). This definition is needed to understand what defines ",(0,A.kt)("strong",{parentName:"p"},"outliers"),". The minimum and the maximum here is not the minimum and the maximum value in the data, but rather is capped at"),(0,A.kt)("div",{className:"math math-display"},(0,A.kt)("span",{parentName:"div",className:"katex-display"},(0,A.kt)("span",{parentName:"span",className:"katex"},(0,A.kt)("span",{parentName:"span",className:"katex-mathml"},(0,A.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,A.kt)("semantics",{parentName:"math"},(0,A.kt)("mrow",{parentName:"semantics"},(0,A.kt)("mi",{parentName:"mrow"},"m"),(0,A.kt)("mi",{parentName:"mrow"},"i"),(0,A.kt)("mi",{parentName:"mrow"},"n"),(0,A.kt)("mo",{parentName:"mrow"},"="),(0,A.kt)("mi",{parentName:"mrow"},"Q"),(0,A.kt)("mn",{parentName:"mrow"},"1"),(0,A.kt)("mo",{parentName:"mrow"},"\u2212"),(0,A.kt)("mn",{parentName:"mrow"},"1.5"),(0,A.kt)("mo",{parentName:"mrow"},"\xd7"),(0,A.kt)("mi",{parentName:"mrow"},"I"),(0,A.kt)("mi",{parentName:"mrow"},"Q"),(0,A.kt)("mi",{parentName:"mrow"},"R")),(0,A.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"min = Q1 - 1.5\\times IQR")))),(0,A.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal"},"min"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,A.kt)("span",{parentName:"span",className:"mrel"},"="),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,A.kt)("span",{parentName:"span",className:"mord"},"1"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,A.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,A.kt)("span",{parentName:"span",className:"mord"},"1.5"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,A.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"QR")))))),(0,A.kt)("div",{className:"math math-display"},(0,A.kt)("span",{parentName:"div",className:"katex-display"},(0,A.kt)("span",{parentName:"span",className:"katex"},(0,A.kt)("span",{parentName:"span",className:"katex-mathml"},(0,A.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,A.kt)("semantics",{parentName:"math"},(0,A.kt)("mrow",{parentName:"semantics"},(0,A.kt)("mi",{parentName:"mrow"},"m"),(0,A.kt)("mi",{parentName:"mrow"},"a"),(0,A.kt)("mi",{parentName:"mrow"},"x"),(0,A.kt)("mo",{parentName:"mrow"},"="),(0,A.kt)("mi",{parentName:"mrow"},"Q"),(0,A.kt)("mn",{parentName:"mrow"},"3"),(0,A.kt)("mo",{parentName:"mrow"},"+"),(0,A.kt)("mn",{parentName:"mrow"},"1.5"),(0,A.kt)("mo",{parentName:"mrow"},"\xd7"),(0,A.kt)("mi",{parentName:"mrow"},"I"),(0,A.kt)("mi",{parentName:"mrow"},"Q"),(0,A.kt)("mi",{parentName:"mrow"},"R")),(0,A.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"max = Q3 + 1.5\\times IQR")))),(0,A.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,A.kt)("span",{parentName:"span",className:"mrel"},"="),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,A.kt)("span",{parentName:"span",className:"mord"},"3"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,A.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,A.kt)("span",{parentName:"span",className:"mord"},"1.5"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,A.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,A.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,A.kt)("span",{parentName:"span",className:"base"},(0,A.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,A.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"QR")))))),(0,A.kt)("p",null,'Anything below or above these "minimum" and "maximum" are considered an outlier in the box plot. In the figure above, for example, we have quite a number of outliers on the high end of the resale price.'),(0,A.kt)("p",null,"You can try exploring boxplot and histogram plot more in the livecode block below. Uncomment either one to plot different plots above yourself:"),(0,A.kt)(s.Fragment,null,(0,A.kt)("iframe",{src:"https://trinket.io/embed/python3/7d174bb2f7?start=result",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,A.kt)("h2",{id:"modifying-labels-and-titles"},"Modifying Labels and Titles"),(0,A.kt)("p",null,"Since Seaborn is built on top of Matplotlib, we can use some of Matplotlib functions to change the figure's labels and title.\nFor example, we can change the histogram's plot x and y labels and its titles using ",(0,A.kt)("inlineCode",{parentName:"p"},"plt.xlabel()"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"plt.ylabel()"),", and ",(0,A.kt)("inlineCode",{parentName:"p"},"plt.title"),". You can access these Matplotlib's functions by first storing the output of your Seaborn plot."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.histplot(y='resale_price', data=df_tampines, bins=10)\n")),(0,A.kt)("p",null,"Once you obtain the handle, you can call Matplotlib's function by adding the word ",(0,A.kt)("inlineCode",{parentName:"p"},"set_")," in front of it. For example, if the Matplotlib's function is ",(0,A.kt)("inlineCode",{parentName:"p"},"plt.xlabel()"),", you call it as ",(0,A.kt)("inlineCode",{parentName:"p"},"myplot.set_xlabel()"),". See the code below."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.histplot(y='resale_price', data=df_tampines, bins=10)\nmyplot.set_xlabel('Count', fontsize=16)\nmyplot.set_ylabel('Resale Price', fontsize=16)\nmyplot.set_title('HDB Resale Price in Tampines', fontsize=16)\n")),(0,A.kt)(o.Z,{path:a(1290).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"Notice now that the plot has a title and both the x and y label has changed."),(0,A.kt)("p",null,"The above plot will be much easier if we plots in thousands of dollars. So let's create a new column of resale price in ","$","1000."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"df_tampines['resale_price_1000'] = df_tampines['resale_price'].apply(lambda price: price/1000)\ndf_tampines['resale_price_1000'].describe()\n")),(0,A.kt)("p",null,"Now, let's plot it one more time."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.histplot(y='resale_price_1000', data=df_tampines, bins=10)\nmyplot.set_xlabel('Count', fontsize=16)\nmyplot.set_ylabel('Resale Price in $1000', fontsize=16)\nmyplot.set_title('HDB Resale Price in Tampines', fontsize=16)\n")),(0,A.kt)(o.Z,{path:a(7808).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("h2",{id:"using-hue"},"Using Hue"),(0,A.kt)("p",null,"Seaborn make it easy to plot the same data and colour those data depending on another data. For example, we can see the distribution of the resale price according to the room number or the storey range. Seaborn has an argument called ",(0,A.kt)("inlineCode",{parentName:"p"},"hue")," to specify which data column you want to use to colour this."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.histplot(y='resale_price_1000', hue='flat_type', data=df_tampines, bins=10)\nmyplot.set_xlabel('Count', fontsize=16)\nmyplot.set_ylabel('Resale Price in $1000', fontsize=16)\nmyplot.set_title('HDB Resale Price in Tampines', fontsize=16)\n")),(0,A.kt)(o.Z,{path:a(527).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"So we can see from the distribution that 4-room flats in Tampines contributes roughly the largest sales. We can also see that 4-room flat resale price is around the median of the all the resale flats in this area."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.histplot(y='resale_price_1000', hue='storey_range', data=df_tampines, bins=10)\nmyplot.set_xlabel('Count', fontsize=16)\nmyplot.set_ylabel('Resale Price in $1000', fontsize=16)\nmyplot.set_title('HDB Resale Price in Tampines', fontsize=16)\n")),(0,A.kt)(o.Z,{path:a(1056).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"The above colouring is not so obvious because they are on top of one another, one way is to change the settings in such a way that it is stacked. We can do this by setting the ",(0,A.kt)("inlineCode",{parentName:"p"},"multiple")," argument for the case when there are multiple data in the same area."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.histplot(y='resale_price_1000', hue='storey_range',\n                      multiple='stack',\n                      data=df_tampines, bins=10)\nmyplot.set_xlabel('Count', fontsize=16)\nmyplot.set_ylabel('Resale Price in $1000', fontsize=16)\nmyplot.set_title('HDB Resale Price in Tampines', fontsize=16)\n")),(0,A.kt)(o.Z,{path:a(4185).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"You can try plotting the above yourself using livecode block below. Uncomment either block then run to view them:"),(0,A.kt)(s.Fragment,null,(0,A.kt)("iframe",{src:"https://trinket.io/embed/python3/3cec927fca?start=result",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,A.kt)("br",null),(0,A.kt)("admonition",{type:"warning"},(0,A.kt)("p",{parentName:"admonition"},"What is this ",(0,A.kt)("inlineCode",{parentName:"p"},"SettingWithCopyWarning"),"?"),(0,A.kt)("p",{parentName:"admonition"},"This error came about because of this line: ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines = df.loc[df['town'] == 'TAMPINES',:]"),". In the next line, you're attempting to change ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines['resale_price_1000'"),' which can possibly just be a "copy" (a "view") of the original dataframe.'),(0,A.kt)("p",{parentName:"admonition"},"In this case we are not doing a chained assignments so it's okay to do it and this warning is simply a ",(0,A.kt)("strong",{parentName:"p"},"false positive"),". However it might be dangerous to do so at other times, especially if you meant to modify the original dataframe with ",(0,A.kt)("strong",{parentName:"p"},"chained assignments")," like ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines.loc[917]['town'] = \"NEW_TAMPINES\""),", as this will not modify ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines"),' at all since you\'re applying the change on a "view": ',(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines.loc[917]"),". A correct way will be to apply the change as a ",(0,A.kt)("strong",{parentName:"p"},"single assignment"),": ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines.loc[917, 'town'] = \"NEWTAMPINES\""),"."),(0,A.kt)("p",{parentName:"admonition"},(0,A.kt)("a",{parentName:"p",href:"https://realpython.com/pandas-settingwithcopywarning/"},"Give this article a read,")," and ",(0,A.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy"},"also this article"),"."),(0,A.kt)("blockquote",{parentName:"admonition"},(0,A.kt)("p",{parentName:"blockquote"},"You can try to silence the warning it by using ",(0,A.kt)("inlineCode",{parentName:"p"},"copy"),": ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines = df.loc[df['town'] == 'TAMPINES',:].copy()"),". This way you explicitly create a new dataframe called ",(0,A.kt)("inlineCode",{parentName:"p"},"df_tampines"),"."))),(0,A.kt)("h2",{id:"scatter-plot-and-line-plot"},"Scatter Plot and Line Plot"),(0,A.kt)("p",null,"We use scatter plot and line plot to visualize relationship between two or more data. For example, we can plot the floor area and resale price to see if there is any relationship."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.scatterplot(x='floor_area_sqm', y='resale_price_1000', data=df_tampines)\nmyplot.set_xlabel('Floor Area ($m^2$)')\nmyplot.set_ylabel('Resale Price in $1000')\n")),(0,A.kt)(o.Z,{path:a(1894).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"As we can see from the plot above, that the price tend to increase with the increase in floor area. You can again use the ",(0,A.kt)("inlineCode",{parentName:"p"},"hue")," argument to see any category in the plot."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.scatterplot(x='floor_area_sqm', y='resale_price_1000',\n                         hue='flat_type',\n                         data=df_tampines)\nmyplot.set_xlabel('Floor Area ($m^2$)')\nmyplot.set_ylabel('Resale Price in $1000')\n")),(0,A.kt)(o.Z,{path:a(9098).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"We can see that flat type in a way also has relationship with the floor area."),(0,A.kt)("h2",{id:"pair-plot"},"Pair Plot"),(0,A.kt)("p",null,"One useful plot is called Pair Plot in Seaborn where it plots the relationship on multiple data columns."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-python"},"myplot = sns.pairplot(data=df_tampines)\n")),(0,A.kt)(o.Z,{path:a(4125).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,A.kt)("p",null,"The above plots immediately plot different scatter plots and histogram in a matrix form. The diagonal of the plot shows the histogram of that column data. The rest of the cell shows you the scatter plot of two columns in the data frame. From these, we can quickly see the relationship between different columns in the data frame."),(0,A.kt)("p",null,"You can try to plot scatterplot and pair-plot yourself in the livecode block below:"),(0,A.kt)(s.Fragment,null,(0,A.kt)("iframe",{src:"https://trinket.io/embed/python3/fbf065e869?start=result",width:"100%",height:"600",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})))}g.isMDXComponent=!0},527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Visualization_29_1-7ac2e248d7790a97978f245350811a30.png"},3911:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-1-ceafc4b5d63f45caa02d7b3708f3a0fc.png"},4125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-10-f2e37b92199dfc21ee2d8aeae2832c41.png"},9414:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-2-2cac18f5f5911b93cb6789cf2be5b1a2.png"},3861:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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jxIW7GtXTdpVYl/r2Dd4ZR4UBwAAqp8afwsdAAALCDoAAAYQdAAADKgRQX/ppZd04YUXyufz6bLLLtOnn3562stmZ2frkksuUf369VWnTh117dpVs2fPDuO0lRPMriVlZWXJ4/HohhtuCO2AVSyYfWfNmiWPx1PqyefzhXHaygv2/fvTTz9pzJgxSk5OltfrVfv27bVgwYIwTVt5wew7YMCAMu9fj8ej6667LowTV06w79/nn39eHTp0UFxcnFJSUnT//feroKAgTNNWXjD7njx5Uo8++qjatGkjn8+nLl266MMPPwzjtJWzbNkyDR06VM2aNZPH49E777xz1tfJyclR9+7d5fV61bZtW82aNevMr+CMy8rKcrGxse6NN95wmzZtcr/73e9c/fr13b59+8q9/NKlS112drbbvHmz2759u3v++edddHS0+/DDD8M8efCC3fWUnTt3uubNm7u+ffu6YcOGhWfYKhDsvjNnznQJCQnuu+++Czzt3bs3zFNXXLD7FhYWuksuucQNGTLELV++3O3cudPl5OS43NzcME9eMcHue+DAgVLv240bN7ro6Gg3c+bM8A5eQcHuO2fOHOf1et2cOXPczp073aJFi1xycrK7//77wzx5xQS77/jx412zZs3cBx984PLy8tz06dOdz+dz69evD/PkFbNgwQI3YcIEl52d7SS5+fPnn/HyO3bscLVr13aZmZlu8+bN7oUXXjhri8wHvWfPnm7MmDGB5/1+v2vWrJl78sknz/kc3bp1cxMnTgzFeFWqIrsWFRW53r17u9dff91lZGRUq6AHu+/MmTNdvXr1wjRd1Qt235dfftm1bt3anThxIlwjVqnKfu4+99xzLj4+3uXn54dqxCoV7L5jxoxxV111ValjmZmZrk+fPiGds6oEu29ycrJ78cUXSx0bPny4S0tLC+mcoXAuQR8/frz71a9+VerYyJEj3eDBg0/7Oqbvcj9x4oTWrVungQMHBo5FRUVp4MCBWrly5Vlf3zmnJUuWaNu2berXr18oR620iu766KOPqkmTJrrjjjvCMWaVqei++fn5atmypVJSUjRs2DBt2rQpHONWWkX2fffdd9WrVy+NGTNGSUlJ6tSpk6ZMmSK/3x+usSussp+7kjRjxgzddNNNqlOnTqjGrDIV2bd3795at25d4G7qHTt2aMGCBRoyZEhYZq6MiuxbWFhY5kdkcXFxWr58eUhnjZSVK1eWevtI0uDBg8/48V/md7lbsn//fvn9fiUlJZU6npSUpK1bt5729Q4dOqTmzZursLBQ0dHRmj59uq655ppQj1spFdl1+fLlmjFjhnJzc8MwYdWqyL4dOnTQG2+8oYsvvliHDh3S1KlT1bt3b23atOm8//sFFdl3x44d+ve//620tDQtWLBA27dv1z333KOTJ09q0qRJ4Ri7wir6uXvKp59+qo0bN2rGjBmhGrFKVWTf0aNHa//+/briiivknFNRUZHuvvtu/elPfwrHyJVSkX0HDx6sZ599Vv369VObNm20ZMkSZWdnV4tvUCti79695b59Dh8+rOPHjysuLq7M65i+hV5R8fHxys3N1Zo1a/TEE08oMzNTOTk5kR6rSh05ckTp6el67bXXlJiYGOlxwqJXr1665ZZb1LVrV/Xv31/Z2dlq3LixXn311UiPFhLFxcVq0qSJ/vrXv6pHjx4aOXKkJkyYoFdeeSXSo4XcjBkz1LlzZ/Xs2TPSo4RMTk6OpkyZounTp2v9+vXKzs7WBx98oMceeyzSo4XEtGnT1K5dO1100UWKjY3V2LFjddtttykqioydYvoWemJioqKjo7Vv375Sx/ft26emTZue9vWioqLUtm1bSVLXrl21ZcsWPfnkkxowYEAox62UYHfNy8vTV199paFDhwaOFRcXS5JiYmK0bds2tWnTJrRDV0JF37cl1apVS926ddP27dtDMWKVqsi+ycnJqlWrlqKjowPHOnbsqL179+rEiROKjY0N6cyVUZn379GjR5WVlaVHH300lCNWqYrs++c//1np6em68847JUmdO3fW0aNHddddd2nChAnndegqsm/jxo31zjvvqKCgQAcOHFCzZs300EMPqXXr1uEYOeyaNm1a7tsnISGh3FvnkvFb6LGxserRo4eWLFkSOFZcXKwlS5aoV69e53ye4uJiFRYWhmLEKhPsrhdddJE+//xz5ebmBp6uv/56XXnllcrNzVVKSko4xw9aVbxv/X6/Pv/8cyUnJ4dqzCpTkX379Omj7du3B75Rk6QvvvhCycnJ53XMpcq9f99++20VFhbq5ptvDvWYVaYi+x47dqxMtE998+bO89/oXZn3r8/nU/PmzVVUVKR58+Zp2LBhoR43Inr16lXq7SNJH3300ZnfPpV+uN55Lisry3m9Xjdr1iy3efNmd9ddd7n69esH/rtSenq6e+ihhwKXnzJlilu8eLHLy8tzmzdvdlOnTnUxMTHutddei9QK5yzYXX+puj3KPdh9J0+e7BYtWuTy8vLcunXr3E033eR8Pp/btGlTpFYISrD77tq1y8XHx7uxY8e6bdu2uffff981adLEPf7445FaISgV/Xi+4oor3MiRI8M9bqUFu++kSZNcfHy8mzt3rtuxY4dbvHixa9OmjRsxYkSkVghKsPuuWrXKzZs3z+Xl5blly5a5q666yrVq1cr9+OOPEdogOEeOHHGfffaZ++yzz5wk9+yzz7rPPvvMff3118455x566CGXnp4euPyp/7b24IMPui1btriXXnqJ/7bmnHMvvPCCa9GihYuNjXU9e/Z0q1atCrysf//+LiMjI/D8hAkTXNu2bZ3P53MNGjRwvXr1cllZWRGYumKC2fWXqlvQnQtu3/vuuy9w2aSkJDdkyJBq839YTwn2/fvJJ5+4yy67zHm9Xte6dWv3xBNPuKKiojBPXXHB7rt161YnyS1evDjMk1aNYPY9efKke+SRR1ybNm2cz+dzKSkp7p577qk2gXMuuH1zcnJcx44dndfrdY0aNXLp6enum2++icDUFbN06VInqczTqR0zMjJc//79y7xO165dXWxsrGvduvVZf6cCf20NAAADTP8MHQCAmoKgAwBgAEEHAMAAgg4AgAEEHQAAAwg6AAAGEHQAAAwg6AAAhMGyZcs0dOhQNWvWTB6PR++8807Q53DOaerUqWrfvr28Xq+aN2+uJ554QhJBB6q9in5hsDoHcL46evSounTpopdeeqnC5xg3bpxef/11TZ06VVu3btW7774b+KuCpv/aGoDw+e6779SgQYNIjwGct1JTU5WamnralxcWFmrChAmaO3eufvrpJ3Xq1ElPP/104C99btmyRS+//LI2btyoDh06SJJatWoVeH1uoQMhdOLEiUiPEHKndmzatKm8Xm+EpwGqr7Fjx2rlypXKysrSf//7X/32t7/Vtddeqy+//FKS9N5776l169Z6//331apVK1144YW68847dfDgQUkEHahSAwYM0NixY3XfffcpMTFRgwcP1saNG5Wamqq6desqKSlJ6enp2r9/f+B1/vnPf6pz586Ki4tTo0aNNHDgQB09elSStGbNGl1zzTVKTExUvXr11L9/f61fv/6MM+zevVsjRoxQ/fr11bBhQw0bNkxfffXVOc1/66236oYbbtDkyZPVuHFjJSQk6O677y71jUl5O0pl73Lfs2ePRo0apYYNG6pOnTq65JJLtHr16sDL//Wvf6l79+7y+Xxq3bq1Jk+erKKionOaE7Bm165dmjlzpt5++2317dtXbdq00QMPPKArrrhCM2fOlCTt2LFDX3/9td5++229+eabmjVrltatW6cbb7xREkEHqtzf/vY3xcbGasWKFXrqqad01VVXqVu3blq7dq0+/PBD7du3TyNGjJD0893Uo0aN0u23364tW7YoJydHw4cPD/w96yNHjigjI0PLly/XqlWr1K5dOw0ZMkRHjhwp97pPnjypwYMHKz4+Xh9//LFWrFihunXr6tprrz3newuWLFkSmGXu3LnKzs7W5MmTT7vjK6+8UuYc+fn56t+/v7755hu9++672rBhg8aPHx/42+wff/yxbrnlFo0bN06bN2/Wq6++qlmzZgUe3APUNJ9//rn8fr/at2+vunXrBp7+85//KC8vT9LPfzO+sLBQb775pvr27asBAwZoxowZWrp0qbZt22b/76ED4dS/f3/XrVu3wPOPPfaYGzRoUKnL7N6920ly27Ztc+vWrXOS3FdffXVO5/f7/S4+Pt699957gWOS3Pz5851zzs2ePdt16NDBFRcXB15eWFjo4uLi3KJFi856/oyMDNewYUN39OjRwLGXX37Z1a1b1/n9/nJ3LG+OV1991cXHx7sDBw6Uez1XX321mzJlSqljs2fPdsnJyWedEbCg5OeLcz//ffjo6Gi3detW9+WXX5Z6+u6775xzzj388MMuJiam1HmOHTsW+JPBPCgOqGI9evQI/HvDhg1aunSp6tatW+ZyeXl5GjRokK6++mp17txZgwcP1qBBg3TjjTcGHly2b98+TZw4UTk5Ofr+++/l9/t17Ngx7dq1q9zr3rBhg7Zv3674+PhSxwsKCgLf5Z9Nly5dVLt27cDzvXr1Un5+vnbv3q2WLVuW2bE8ubm56tatmxo2bHjaOVesWFHqFrnf71dBQYGOHTtW6vqBmqBbt27y+/36/vvv1bdv33Iv06dPHxUVFSkvL09t2rSRJH3xxReSpJYtW/Iod6Cq1alTJ/Dv/Px8DR06VE8//XSZyyUnJys6OlofffSRPvnkEy1evFgvvPCCJkyYoNWrV6tVq1bKyMjQgQMHNG3aNLVs2VJer1e9evU67d3n+fn56tGjh+bMmVPmZY0bNw7JjuWJi4s748vz8/M1efJkDR8+vMzLfD5fpWYDzlf5+fnavn174PmdO3cqNzdXDRs2VPv27ZWWlqZbbrlFzzzzjLp166YffvhBS5Ys0cUXX6zrrrtOAwcOVPfu3XX77bfr+eefV3FxscaMGaNrrrlG7du3J+hAKHXv3l3z5s3ThRdeqJiY8j/dPB6P+vTpoz59+ujhhx9Wy5YtNX/+fGVmZmrFihWaPn26hgwZIunnB7yVfEBdedf3j3/8Q02aNFFCQkKFZt6wYYOOHz8eiPKqVatUt25dpaSknPM5Lr74Yr3++us6ePBgubfSu3fvrm3btqlt27YVmhGojtauXasrr7wy8HxmZqYkKSMjQ7NmzdLMmTP1+OOP6w9/+IO++eYbJSYm6vLLL9evf/1rSVJUVJTee+89/f73v1e/fv1Up04dpaam6plnnvn55eFfCag5xowZo4MHD2rUqFFas2aN8vLytGjRIt12223y+/1avXq1pkyZorVr12rXrl3Kzs7WDz/8oI4dO0qS2rVrp9mzZ2vLli1avXq10tLSznjrNy0tTYmJiRo2bJg+/vhj7dy5Uzk5Obr33nu1Z8+ec5r5xIkTuuOOO7R582YtWLBAkyZN0tixYxUVde5fLkaNGqWmTZvqhhtu0IoVK7Rjxw7NmzdPK1eulCQ9/PDDevPNNzV58mRt2rRJW7ZsUVZWliZOnHjO1wFUNwMGDJBzrszTrFmzJEm1atXS5MmTtXPnTp04cULffvutsrOz1blz58A5mjVrpnnz5unIkSPau3evZs6cGfimmaADIdSsWTOtWLFCfr9fgwYNUufOnXXfffepfv36ioqKUkJCgpYtW6YhQ4aoffv2mjhxop555pnAL5+YMWOGfvzxR3Xv3l3p6em699571aRJk9NeX+3atbVs2TK1aNFCw4cPV8eOHXXHHXeooKDgnG+xX3311WrXrp369eunkSNH6vrrr9cjjzwS1N6xsbFavHixmjRpoiFDhqhz58566qmnFB0dLUkaPHiw3n//fS1evFiXXnqpLr/8cj333HOBn9EDCJ7nf4+2AwDdeuut+umnn/gVrkA1xC10AAAM4EFxQA1S3n+fO2XhwoVhnARAVfs/ZFLms5Gs3IcAAAAASUVORK5CYII="},1290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-4-b7675d42d4c8c42abc3fa129d156d6de.png"},7808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-5-602d9d062ce8f4c4f711c4cde946cfb1.png"},1056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-6-3a76a4fe1d4cbb5ac171f68b7dcf90cc.png"},4185:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-7-8c62d108e74af39bb6cafe13a8c1bf88.png"},1894:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-8-95dd3c14dcb97f2f08d92be41d5852f7.png"},9098:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plot-9-ab8b7b130de1396e60a225d3dda0c0a3.png"},3567:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-07-10-21-04-04-ad5ed2df7a627fb8c3d2c27ba41cfc32.png"}}]);