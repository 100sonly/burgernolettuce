"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[16],{945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),s=a(7294),i=a(3905),r=(a(1694),a(3707),a(6533)),m=a(505);const l={sidebar_position:2},o="Fixed-Size Array and Linked List",p={unversionedId:"inheritance/array-linkedlist",id:"inheritance/array-linkedlist",title:"Fixed-Size Array and Linked List",description:"In this lesson we will detour a little bit to discuss two kinds of list. One is a Fixed Size Array and the other one is a Linked List. Both are list but they have their differences.",source:"@site/docs/06-inheritance/array-linkedlist.md",sourceDirName:"06-inheritance",slug:"/inheritance/array-linkedlist",permalink:"/burgernolettuce/notes/inheritance/array-linkedlist",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Inheritance",permalink:"/burgernolettuce/notes/inheritance/inheritance-abc"},next:{title:"Week 8: Visualizing and Processing Data",permalink:"/burgernolettuce/notes/category/week-8-visualizing-and-processing-data"}},h={},d=[{value:"Goals",id:"goals",level:3},{value:"Fixed-Size Array",id:"fixed-size-array",level:2},{value:"List Using Fixed-Sized Array",id:"list-using-fixed-sized-array",level:3},{value:"Adding an Element When Array is Full",id:"adding-an-element-when-array-is-full",level:3},{value:"Inserting and Removing an Element",id:"inserting-and-removing-an-element",level:3},{value:"Linked List",id:"linked-list",level:2},{value:"Inserting an Element",id:"inserting-an-element",level:3},{value:"Removing an Element",id:"removing-an-element",level:3},{value:"An Abstract Base Class for Our List",id:"an-abstract-base-class-for-our-list",level:2}],c={toc:d},k="wrapper";function N(e){let{components:t,...l}=e;return(0,i.kt)(k,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fixed-size-array-and-linked-list"},"Fixed-Size Array and Linked List"),(0,i.kt)("p",null,"In this lesson we will detour a little bit to discuss two kinds of list. One is a Fixed Size Array and the other one is a Linked List. Both are list but they have their differences."),(0,i.kt)(m.Z,{mdxType:"ChatBaseBubble"}),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"implement ",(0,i.kt)("strong",{parentName:"li"},"Array")," and ",(0,i.kt)("strong",{parentName:"li"},"Linked List")," data structure from the same base class.")),(0,i.kt)("admonition",{title:"Keywords",type:"keyword"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"abstract data type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed size array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"linked list"))),(0,i.kt)("h2",{id:"fixed-size-array"},"Fixed-Size Array"),(0,i.kt)("p",null,"Python does not have a fixed-size array data type. One of the most basic data type in Python is a ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),". However, many programming languages like C/C++ and Java have this more basic and primitive list-like data type. In these programming languages, you need to declare the size of the array and its type. For example, in C or Java, it will look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int mynumber[10];\n")),(0,i.kt)("p",null,"Such declaration reserves 10 spaces in the memory to store an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," type. If one ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," number takes 32-bit (32 digits of 0s and 1s), then the program reserves 10 spaces of 32-bit in the memory as shown in the figure below."),(0,i.kt)(r.Z,{path:a(231).Z,widthPercentage:"40%",mdxType:"ImageCard"}),"In the example that we have, `n` is 10 and so the index of the last element is $n-1=9$. You can access element using the index. For example, you can use `mynumber[0]` to access the first element and `mynumber[9]` to access the last element. In C programming language, the name of the array is also the address of the first element.",(0,i.kt)("p",null,"Once it is declared to have 10 spaces, the array cannot be extended. You need to reallocate the memory if you have more numbers than what is declared. Moreover, each element has the same data type. The consequence of this is that each element occupies the same size in the memory. Since it occupies the same size, it is easy to know where the other data are. The advantage of this way of creating an array is that it is fast and simple."),(0,i.kt)("p",null,"Though Python does not have such fixed-size array, Numpy library implements something similar in its Numpy's array. For example, numpy array must have the same data type. The difference, however, you can extend the numpy array and you need not declare how many elements are there in the array."),(0,i.kt)(s.Fragment,null,(0,i.kt)("iframe",{src:"https://trinket.io/embed/python3/83778cfa2b?start=result",width:"100%",height:"350",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",null,"The above code shows how to create a numpy array using ",(0,i.kt)("inlineCode",{parentName:"p"},"np.array()"),". It takes in a list as its argument. Numpy will try to detect the data type and in the example above it was detected as ",(0,i.kt)("inlineCode",{parentName:"p"},"int64")," which means a 64-bit integer."),(0,i.kt)("p",null,"If one of the array is a float, Numpy will consider all elements as the float."),(0,i.kt)(s.Fragment,null,(0,i.kt)("iframe",{src:"https://trinket.io/embed/python3/a48e54dfd1?start=result",width:"100%",height:"350",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,i.kt)("p",null,"As shown in the output, all the elements are printed as a float and the type was detected as ",(0,i.kt)("inlineCode",{parentName:"p"},"float64"),", which is a 64-bit float data type."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Numpy provides additional functionalities to manipulate array such as to append or to insert as shown above.")),(0,i.kt)("h3",{id:"list-using-fixed-sized-array"},"List Using Fixed-Sized Array"),(0,i.kt)("p",null,"In your problem set, you will create your own list based on a fixed-array of Numpy called. You can define a new class, say ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayFixedSize"),' that uses Numpy\'s array as its internal storage to "simulate" a fixed array in Python. So objects of ',(0,i.kt)("inlineCode",{parentName:"p"},"ArrayFixedSize")," must be declared with its size and its data type. Moreover, you will work on create a list-like data type called ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," that is based on ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayFixedSize"),". In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," works like Python's built-in list where you can append elements to the list. However, since ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayFixedSize")," has a fixed size, you need to write some codes to create new array with bigger memory size when it is already full."),(0,i.kt)("h3",{id:"adding-an-element-when-array-is-full"},"Adding an Element When Array is Full"),(0,i.kt)("p",null,"Initially, when the list is created, ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," will create an empty array with some fixed initial size, say 16 elements. When all the 16 elements are filled up, and a new data is appended, ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," will double the size to 32 elements and put the new data at the next empty position. See figure below."),(0,i.kt)(r.Z,{path:a(5536).Z,widthPercentage:"80%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"This is one way to work. The disadvantage of this method is that we always have to reserve extra memory space to work. For example, we have 17 elements, we actually reserving 32 spaces where the other 15 positions are empty. The advantage is that since the size is fixed for each element, it is easy to locate the data at any position using its index. Later on, we will consider a different way of creating a list using Linked List."),(0,i.kt)("h3",{id:"inserting-and-removing-an-element"},"Inserting and Removing an Element"),(0,i.kt)("p",null,"What can we do to insert an element into a list made with fixed-size array? To insert one element, one can first check if there is enough space in the allocated memory. If there is not enough space, we can double the size of the array as in the case of adding an element at the end. If there is enough space for one more element, then no doubling of memory is needed and we can just shift all the element to the right by one position and insert the element at the position we want it. This is illustrated in the figure below."),(0,i.kt)(r.Z,{path:a(5066).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"The above figure shows what happens when we insert the data at position 2 (third position). Assuming that the array is already full, we need to ensure that we have enough capacity to insert a new element. Therefore, we first need to increase the memory size by doubling the array. Once there is enough space, we shift all the elements to the right and modify the value of the element at position 2 (third position)."),(0,i.kt)("p",null,"What is the computational complexity of such a process? To create a new array with double the size and copy the old values to the new array takes ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," time. Furthermore, shifting the values by one in the worst case scenario takes ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," time and modifying the value takes constant time, i.e. ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),". So we should expect such insert operation takes linear ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," complexity."),(0,i.kt)("p",null,"Removing an element is similar. We can simply shift left all the elements by one position. Depending on the design, we may want to choose to keep the empty space available once we reserve it. This, however, may not be a preferred option in systems with small memories like embedded systems."),(0,i.kt)("h2",{id:"linked-list"},"Linked List"),(0,i.kt)("p",null,"Now, let's take a look at another alternative of creating a list besides using Fixed-size array. Instead of just storing the element, a Linked List stores more information in one ",(0,i.kt)("strong",{parentName:"p"},"node"),". In a linked list, each node contains the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the element"),(0,i.kt)("li",{parentName:"ul"},"and the reference to the next element")),(0,i.kt)("p",null,"The linked list itself stores ",(0,i.kt)("strong",{parentName:"p"},"references")," to two nodes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the head of the list"),(0,i.kt)("li",{parentName:"ul"},"the tail of the list")),(0,i.kt)("p",null,"This is shown in the figure below."),(0,i.kt)(r.Z,{path:a(4600).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Notice that the element itself can be a reference to another object. This arrangement allows several flexibility. First, the element can be objects of different sizes. Since the way to get to some element is through the ",(0,i.kt)("em",{parentName:"p"},"next")," references, there is no constraint that the element must be of the same size. Moreover, you can add new element as needed by creating a new node and point the tail to the new node and the last element's next reference to this new node. In this way, you need not reserve any empty memory space as in the fixed size array. This arrangement also allows you to have a list with any size without declaring how many elements would be in the list."),(0,i.kt)("p",null,"The downside of this arrangement is that it is slower than the fixed size array. In a fixed size array, it is fast and simple to access the element at a particular position using the index since the size of each element is the same. We can get the position of element ",(0,i.kt)("em",{parentName:"p"},"i")," from:"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow"},"address_i"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mtext",{parentName:"mrow"},"address_0"),(0,i.kt)("mo",{parentName:"mrow"},"+"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mo",{parentName:"mrow"},"\xd7"),(0,i.kt)("mtext",{parentName:"mrow"},"size_of_one_element")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{address\\_i} = \\text{address\\_0} + i \\times \\text{size\\_of\\_one\\_element}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"address_i")),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"address_0")),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"size_of_one_element"))))))),(0,i.kt)("p",null,"However, with linked list, we have to traverse the nodes to reach the element that we want and this is slower than just computing the exact location."),(0,i.kt)("h3",{id:"inserting-an-element"},"Inserting an Element"),(0,i.kt)("p",null,"Now, let's discuss the operation of inserting and removing an element from a linked list. We divide such operations into three categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"at first position"),(0,i.kt)("li",{parentName:"ul"},"at last position"),(0,i.kt)("li",{parentName:"ul"},"at position between the first and the last")),(0,i.kt)("p",null,"Recall that a linked list has references to the first and the last node. To insert a new element at the first position, we do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new Node with the new element."),(0,i.kt)("li",{parentName:"ol"},"Set the first node (i.e the current head) as the ",(0,i.kt)("em",{parentName:"li"},"next")," reference of the new node."),(0,i.kt)("li",{parentName:"ol"},"Set the new node as the ",(0,i.kt)("em",{parentName:"li"},"head")," of the linked list.")),(0,i.kt)("p",null,"This is shown in the figure below."),(0,i.kt)(r.Z,{path:a(8812).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Inserting at the end of the linked list involves similar process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new Node with the new element."),(0,i.kt)("li",{parentName:"ol"},"Set the new Node as the ",(0,i.kt)("em",{parentName:"li"},"next")," reference of the ",(0,i.kt)("em",{parentName:"li"},"tail")," of the linked list."),(0,i.kt)("li",{parentName:"ol"},"Set the new Node as the new ",(0,i.kt)("em",{parentName:"li"},"tail")," of the linked list.")),(0,i.kt)("p",null,"The only tricky thing is when the linked list is empty. In this case, the ",(0,i.kt)("em",{parentName:"p"},"tail")," will refer to a NIL. In this case we use the new Node as both the ",(0,i.kt)("em",{parentName:"p"},"head")," and the ",(0,i.kt)("em",{parentName:"p"},"tail")," of the linked list."),(0,i.kt)("p",null,"If we wish to insert an element in between the first and the last position, we first need to ",(0,i.kt)("em",{parentName:"p"},"traverse")," the linked list to that particular position. We then do the operation as shown in the figure below."),(0,i.kt)(r.Z,{path:a(7831).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"In the above figure, we insert a new element at position 2 (third element). In order to do so, we do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Traverse up to Node 1."),(0,i.kt)("li",{parentName:"ol"},"Create a new Node."),(0,i.kt)("li",{parentName:"ol"},"Get the ",(0,i.kt)("em",{parentName:"li"},"next")," reference of Node 1 and set it as the ",(0,i.kt)("em",{parentName:"li"},"next")," reference of the newly created Node."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("em",{parentName:"li"},"next")," reference of Node 1 to point to the newly created Node.")),(0,i.kt)("p",null,"What is the computational time of inserting an element. The worst case is when we insert a new element to the second last position. In this case, we have to traverse to the node before the tail which takes ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mo",{parentName:"mrow"},"\u2248"),(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n-1) \\approx O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2248"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," time. The other operations takes constant time. Therefore, overall, inserting an element takes linear time, i.e. ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,i.kt)("h3",{id:"removing-an-element"},"Removing an Element"),(0,i.kt)("p",null,"Removing an element also can be categorized into these three positions: first, last, or in between the first and the last. Let's start for the case when we remove the first element. This is shown in the figure below."),(0,i.kt)(r.Z,{path:a(6537).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"In this case, we do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Store the head into a temporary node variable"),(0,i.kt)("li",{parentName:"ol"},"We get the ",(0,i.kt)("em",{parentName:"li"},"next")," reference of the temporary node and set it as the new ",(0,i.kt)("em",{parentName:"li"},"head")),(0,i.kt)("li",{parentName:"ol"},"We can store the element of the temporary node so that we can return it at the end"),(0,i.kt)("li",{parentName:"ol"},"Now, we can delete the temporary node, and"),(0,i.kt)("li",{parentName:"ol"},"return the element of the deleted node")),(0,i.kt)("p",null,"In the case of removing the last element:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"we first need to traverse to the node before the ",(0,i.kt)("em",{parentName:"li"},"tail"),", set this as the current node."),(0,i.kt)("li",{parentName:"ol"},"Set the current node as the new ",(0,i.kt)("em",{parentName:"li"},"tail"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the next of the new ",(0,i.kt)("em",{parentName:"li"},"tail")," to NIL."),(0,i.kt)("li",{parentName:"ol"},"We can store the element of the deleted node."),(0,i.kt)("li",{parentName:"ol"},"Delete the node and return the element only.")),(0,i.kt)("p",null,"Lastly, we need to consider the case when we remove an element which position is in between the first and the last. This is shown in the figure below."),(0,i.kt)(r.Z,{path:a(2208).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"In the above figure, we remove element at position 1 (second position). To do this, we follow the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Traverse the nodes until the node before (i.e. Node 0 in this case) and set it as the current node."),(0,i.kt)("li",{parentName:"ol"},"Save the next of the current node into a temporary variable. This is the deleted node."),(0,i.kt)("li",{parentName:"ol"},"Set the next of the deleted node as the next of the current node, i.e. Node 2 as the next of Node 0 in the figure."),(0,i.kt)("li",{parentName:"ol"},"Delete the node and return the element only.")),(0,i.kt)("p",null,"Since removing node involves traversing the linked list, the worst case complexity will be linear, i.e. ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,i.kt)("h2",{id:"an-abstract-base-class-for-our-list"},"An Abstract Base Class for Our List"),(0,i.kt)("p",null,"We have discussed two ways of implementing a list and each have its own advantages and disadvantages. For some application, one may choose to use a list based on fixed-size array, while for other applicaiton, one may choose to use a linked list. Both kinds of list, however, can be designed to implement the same operations. This is where our lesson on inheritance can be applied. We can design a base class for our list that is inherited by the two ways of implementing a list. The UML diagram is shown below."),(0,i.kt)("mermaid",{value:'classDiagram\n    MyAbstractList <|-- MyPythonList : inheritance\n    MyAbstractList <|-- MyArrayList  : inheritance\n    MyAbstractList <|-- MyLinkedList  : inheritance\n    note for MyAbstractList "collections.abc.iterator"\n'}),(0,i.kt)("br",null),(0,i.kt)("br",null),"In the UML above, we showed that `MyAbstractList` implements the Abstract Base Class of `Iterator`. To satisfies this, you need to define a method called `__iter__()` in `MyAbstractList` that returns an iterator object. The class `MyAbstractList` also defines some common property and methods for both `MyArrayList` and `MyLinkedList` such as:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size"),", which is an attribute that stores the number of items in the list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_empty"),", which is a computed property that returns whether the list is empty or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add(item)"),", which adds an item to the end of the list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove(item)"),", which removes an item from the list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__getitem__(index)"),", which allows you to use the bracket operator to get an item, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"mylist[index]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__setitem__(index, value)"),", which allows you to use the bracket operator and assignment operator to set a value at a particular index, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"mylist[index] = value"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__delitem__(index)"),", which allows you to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"del")," operator and the bracket operator to delete an item, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"del mylist[index]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__len__(index)"),", which is called when you use the ",(0,i.kt)("inlineCode",{parentName:"li"},"len()")," function on the list, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"len(mylist)"),".")),(0,i.kt)("p",null,"This class ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList")," is inherited by the two classes ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList"),". The class ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," is implemented using fixed-size array while ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList")," is implemented using a linked list. Since the implementation is different, the code to add and remove items for these two classes will be different. Therefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"add(item)")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList")," would call a method ",(0,i.kt)("inlineCode",{parentName:"p"},"add_at(index, item)")," which is implemented in the child class ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList"),". This means that both ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList")," have ",(0,i.kt)("inlineCode",{parentName:"p"},"add_at(index, item)")," method in their class definitions. However, the implementation of this method is different between the two classes."),(0,i.kt)("p",null,"Similarly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"remove(item)")," method would call a method ",(0,i.kt)("inlineCode",{parentName:"p"},"remove_at(index)")," which is implemented in both the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList")," classes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"__getitem__(index)")," method is called either when you use the square bracket operator as in ",(0,i.kt)("inlineCode",{parentName:"p"},"mylist[index]")," or the get method as in ",(0,i.kt)("inlineCode",{parentName:"p"},"mylist.get(index)"),". Since the way to access the element is different between the fixed-size array and the linked list, this method should be overridden in the child classes. Similarly, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"__setitem__(index, value)")," would have different implementation in the children classes. Therefore, our implemention of this method would call the method ",(0,i.kt)("inlineCode",{parentName:"p"},"set_at(index, item)")," of the child class' method."),(0,i.kt)("p",null,"To summarize, we have implemented two kind of list classes. One is implemented using a fixed-size array while the other one is implemented using a linked list. Both classes inherit from a common base class called ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList")," which provides the common attributes, properties and methods that all list classes have. In this way, we do not duplicate the codes that are the same in ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList"),". This common methods and codes are placed in the parent class ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList"),". Only the different implementation is defined in the child classes' methods. The class ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList")," inherits and implements ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator")," class. This ensures that all our list are iterable. To implement ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator")," class, we must define ",(0,i.kt)("inlineCode",{parentName:"p"},"__iter__()")," method in our ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList")," which returns an iterator object. Both ",(0,i.kt)("inlineCode",{parentName:"p"},"MyArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyLinkedList")," inherit this iterator method when they inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAbstractList"),"."))}N.isMDXComponent=!0},5536:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array_add_element-6cfb711f5d2e645941a553cbdac4a54d.jpg"},5066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array_insert-44d2204b413cd5d88e9f5ea339e78a30.jpg"},231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array_memory-9559c947549c0cee4f14e433ef204503.jpg"},4600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkedlist-26ce366f41baa227d9190261315e9320.jpg"},8812:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkedlist_insert_first-c4b2598fb02c5c9a18ac5dc77d4f2c4e.jpg"},7831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkedlist_insert_mid-d18590d660314c9b04e5d01eb88e0714.jpg"},6537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkedlist_remove_first-de52d419e40ef87c18f285b8d3b94d3a.jpg"},2208:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkedlist_remove_mid-9861a1a0e08829bc2e44f335ed04aa99.jpg"}}]);