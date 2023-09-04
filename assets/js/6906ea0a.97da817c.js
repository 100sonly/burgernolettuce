"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[8493],{8996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),s=(a(1694),a(3707),a(6533)),r=a(505);const o={sidebar_position:2},l="Linear Data Structures",p={unversionedId:"oop/linear-dt",id:"oop/linear-dt",title:"Linear Data Structures",description:"A linear data structure is a collection of elements where each element has a direct successor and predecessor, forming a sequential arrangement.",source:"@site/docs/04-oop/linear-dt.md",sourceDirName:"04-oop",slug:"/oop/linear-dt",permalink:"/2023ddw/notes/oop/linear-dt",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Object Oriented Programming",permalink:"/2023ddw/notes/oop/oop"},next:{title:"Week 5: Searching Data",permalink:"/2023ddw/notes/category/week-5-searching-data"}},m={},u=[{value:"Goals",id:"goals",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Stack",id:"stack",level:2},{value:"Queue",id:"queue",level:2},{value:"Applications",id:"applications",level:2},{value:"Post-Fix Expression Evaluation",id:"post-fix-expression-evaluation",level:3},{value:"Program&#39;s Stack",id:"programs-stack",level:3},{value:"Radix Sort with Queue",id:"radix-sort-with-queue",level:3},{value:"Queue with Double Stack",id:"queue-with-double-stack",level:2}],h={toc:u},k="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(k,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linear-data-structures"},"Linear Data Structures"),(0,i.kt)(r.Z,{mdxType:"ChatBaseBubble"}),(0,i.kt)("p",null,"A linear data structure is a collection of elements where each element has a direct successor and predecessor, forming a sequential arrangement."),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement abstract data type for ",(0,i.kt)("strong",{parentName:"li"},"Stack"),", ",(0,i.kt)("strong",{parentName:"li"},"Queue")," using Object Oriented paradigm"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Apply")," Stack and Queue for some applications"),(0,i.kt)("li",{parentName:"ul"},"Implement Queue using double ",(0,i.kt)("strong",{parentName:"li"},"Stack")," and discuss implementation ",(0,i.kt)("strong",{parentName:"li"},"impact")," on computation time")),(0,i.kt)("admonition",{title:"Keywords",type:"keyword"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"data structure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stack"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"queue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enqueue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dequeue"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"You have encountered ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," as one of the built-in data types that Python support. You can use list to represent one dimensional or linear data collection where sequence and order matters. There are other kinds of linear data structures and we will explore some of them in this lesson."),(0,i.kt)("h2",{id:"stack"},"Stack"),(0,i.kt)("p",null,"Stack is a type of data structure that follows the LIFO (Last in First out) principle. Stack is common in daily life. Consider a ",(0,i.kt)("strong",{parentName:"p"},"stack")," of books."),(0,i.kt)(s.Z,{path:"https://cdn.pixabay.com/photo/2012/04/03/13/26/books-25154_960_720.png",widthPercentage:"20%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Now, let's think about what are the operations we can do with such a structure. We can do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can add new book into the stack by putting it at the top. This operation is called a ",(0,i.kt)("strong",{parentName:"li"},"push"),"."),(0,i.kt)("li",{parentName:"ul"},"Or you can remove a book from the stack by taking the one at the top. This operation is called a ",(0,i.kt)("strong",{parentName:"li"},"pop"),"."),(0,i.kt)("li",{parentName:"ul"},"Or you can simply look at the book at the top of the stack. This operation is called a ",(0,i.kt)("strong",{parentName:"li"},"peek"),".")),(0,i.kt)("p",null,"What you cannot do, however, are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"insert a book somewhere in the middle of the stack"),(0,i.kt)("li",{parentName:"ul"},"take out a book from somewhere in the middle of the stack")),(0,i.kt)("p",null,"If you want to do those two operations, you have to start by removing the books at the top first. This is why Stack is called Last in First out (LIFO). We can generalize this into an abstract concept of Stack data structure as shown below."),(0,i.kt)(s.Z,{path:"https://upload.wikimedia.org/wikipedia/commons/a/a8/Programming-stack.png",widthPercentage:"20%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"As you can see, there are three operations related to Stack:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"push"),(0,i.kt)("li",{parentName:"ul"},"pop"),(0,i.kt)("li",{parentName:"ul"},"and peek")),(0,i.kt)("p",null,"We can create a stack using Object Oriented Programming by defining a class. A Stack class has at least the following attributes and methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Stack\nAttributes:\n1. items\n\nMethods:\n1. Push // insert\n2. Pop // remove and read\n3. Peek // only read\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://yongdanielliang.github.io/animation/web/Stack.html"},"this animation")," to get familiar with the Stack operation."),(0,i.kt)("h2",{id:"queue"},"Queue"),(0,i.kt)("p",null,"Queue is another common data structure that we find frequently in daily life. For example, the image below shows a queue of people to Louvre Museum."),(0,i.kt)(s.Z,{path:"https://upload.wikimedia.org/wikipedia/commons/6/61/Queue-to-the-Louvre.jpg",customClass:"no-invert-color",widthPercentage:"100%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Notice that Queue is different from Stack. Stack follows Last in First out principle. On the other hand, Queue follows the First in First out (FIFO) principle. The first person that enters the queue is the first person that can enter the Louvre Museum. We can abstract this as a kind of data structures shown below."),(0,i.kt)(s.Z,{path:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/405px-Data_Queue.svg.png",widthPercentage:"50%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Queues are similar to Stacks in some manners. For example, you can't access the elements in middle of the queue. This is like taking someone from the middle of the queue and let him or her enter the museum before those who are at the front of the queue. You can't also insert an element to somewhere in the middle of the queue. This is called cutting queues. No one will be happy with this. So we can only access item from the front of the queue and insert an item from the rear of the queue. These are the two operations of Queues."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enqueue")," is to put an item from the rear of the queue,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dequeue")," is to take an item out from the front of the queue,"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("inlineCode",{parentName:"li"},"peek")," is similar to Stack operation which is just to read the item at the front of the queue without removing it from the queue.")),(0,i.kt)("p",null,"As such a Queue data structure must have at least the following attributes and methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Queue\nAttributes:\n1. items\n\nMethods:\n1. Enqueue\n2. Dequeue\n3. Peek\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://yongdanielliang.github.io/animation/web/Queue.html"},"this animation")," to get familiar with Queue operations."),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("p",null,"How or when do we use such data structures like Stack and Queue. In this section we will illustrate two examples. The first one is an example of Stack's application and the second one is an example for Queue's application."),(0,i.kt)("h3",{id:"post-fix-expression-evaluation"},"Post-Fix Expression Evaluation"),(0,i.kt)("p",null,"One application that uses Stack data structure is to evaluate a Post-Fix Expression. Our mathematical expression is normally expressed as an ",(0,i.kt)("em",{parentName:"p"},"infix")," notation. For example,"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3"),(0,i.kt)("mo",{parentName:"mrow"},"+"),(0,i.kt)("mn",{parentName:"mrow"},"4"),(0,i.kt)("mo",{parentName:"mrow"},"\xd7"),(0,i.kt)("mn",{parentName:"mrow"},"2")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3 + 4 \\times 2")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2")))))),(0,i.kt)("p",null,"In this notation, ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"4"),(0,i.kt)("mo",{parentName:"mrow"},"\xd7"),(0,i.kt)("mn",{parentName:"mrow"},"2")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4 \\times 2")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2")))))," is evaluated first and the result is added to 3 to get the final result. In this notation, the operators are ",(0,i.kt)("em",{parentName:"p"},"in between")," the operands. This is why it is called ",(0,i.kt)("em",{parentName:"p"},"infix")," notation. But, this is not the only notation. We can represent the same mathematical operations using a ",(0,i.kt)("strong",{parentName:"p"},"Post-Fix")," notation. In this notation, the operators are placed before the operands justyifing its name, i.e. ",(0,i.kt)("em",{parentName:"p"},"postfix"),". Let's write the same mathematical expression using a post-fix notation."),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"42"),(0,i.kt)("mo",{parentName:"mrow"},"\xd7"),(0,i.kt)("mn",{parentName:"mrow"},"3"),(0,i.kt)("mo",{parentName:"mrow"},"+")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4 2 \\times 3 +")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"42"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"+")))))),(0,i.kt)("p",null,"In the above notation, we can see that the operators are placed after the operands. The first two numbers are the operands. The third one is an operator for multiplication. So we will multiply the first two numbers 4 and 2. The next one is another number, i.e. 3. And the last one is an addition operator. This means that we will add 3 with the result of the multiplication of 4 and 2."),(0,i.kt)("p",null,"How do we use Stack to evaluate post-fix notation? The steps are written below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Post-Fix Evaluation Steps:\n1. Read the expression from left to right.\n2. If it is an operand (not an operator symbol), do the following:\n    2.1. put the operand into the stack.\n3. Otherwise (this is an operator), do the following:\n    3.1. pop out the top of the stack as the *right* operand\n    3.1. pop out the top of the stack as the *left* operand\n    3.1. evaluate the operator with the operands\n    3.1. push the result into the stack\n")),(0,i.kt)("h3",{id:"programs-stack"},"Program's Stack"),(0,i.kt)("p",null,"In fact, perhaps unknowingly, you have had an encounter with stacks just a week ago. Computer actually uses stacks in recursion! (Call stacks are an important concept in general programming too!) Let's look at this in action with the factorial fuction. factorial(3), or 3! = 3","*","2","*","1. Here's a recursive function to calculate the factorial of a number:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"live_py",live_py:!0},"def factorial(x):\n  if x == 1:\n    return 1\n  else:\n    return x * factorial(x-1)\n\nprint(factorial(3))\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://pythontutor.com/visualize.html#code=def%20factorial%28x%29%3A%0A%20%20if%20x%20%3D%3D%201%3A%0A%20%20%20%20return%201%0A%20%20else%3A%0A%20%20%20%20return%20x%20*%20factorial%28x-1%29%0A%0Aprint%28factorial%283%29%29&cumulative=false&curInstr=9&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"},"You can visualize the Stack calls using Python Tutor"),". Notice that the computer treats the frames for factorial in a way like Stack operations that grows downward."),(0,i.kt)("p",null,"As mentioned, stacks are an important concept on how computer works. You may wonder why the name most voted for the most popular website for programmers is called ",(0,i.kt)("a",{parentName:"p",href:"https://meta.stackoverflow.com/questions/266557/why-was-stack-overflow-chosen-as-a-name-for-this-site#:~:text=overflow%22%20error%20occurs.-,Thus%2C%20naming%20the%20site%20Stack%20Overflow%20is%20a%20bit%20of,Share%20and%20enjoy."},(0,i.kt)("strong",{parentName:"a"},"Stack")," Overflow"),"."),(0,i.kt)("h3",{id:"radix-sort-with-queue"},"Radix Sort with Queue"),(0,i.kt)("p",null,"We have seen how Stack is used to evaluate post-fix notation. Now, we will work with another algorithm called Radix sort to show how Queue can be used. Radix sort is a non-comparison sorting algorithm for ",(0,i.kt)("strong",{parentName:"p"},"integers"),' by grouping integers by individual digits that share the same positon and value. It utilizes 10 "buckets" numbered from 0-9 to sort.'),(0,i.kt)("p",null,"Radix sort will go through each digit of all numbers and put them in the buckets matching their digit, and take them out again, repeating until all digits are checked."),(0,i.kt)("p",null,"A simple animation for radix sorting:"),(0,i.kt)(s.Z,{path:"https://drive.google.com/uc?export=view&id=1CUsu4T_Q7N9Lc6s4F6lUNugkkdYG0A70",widthPercentage:"70%",mdxType:"ImageCard"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://visualgo.net/en/sorting?slide=16"},"visualgo.net"),".",(0,i.kt)("br",{parentName:"p"}),"\n","(Visualgo provides a lot of nice animations of many different algorithms that may help you visualize the algorithm better)")),(0,i.kt)("p",null,"There are two kinds of Queues used in Radix sort:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"1 x Main bin queue"),(0,i.kt)("li",{parentName:"ol"},"10 x Radix bin queues")),(0,i.kt)("p",null,"The Radix sort operation can be described as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, put all the item into the Main bin queue."),(0,i.kt)("li",{parentName:"ol"},"The next step is to start with the lowest digit. In this case, it is the ",(0,i.kt)("em",{parentName:"li"},"ones")," digit. We take out all the items from the Main bin and put it into the respective radix bins. If the ones is 0, we put into radix bin 0. If the ones is 1, we put into the radix bin 1. If the ones is 2, we put into the radix bin 2, and so on until 9."),(0,i.kt)("li",{parentName:"ol"},"Once we finish putting all the items into the respective radix bins, we empty out the radix bin queue and put the items back into the Main bin queue. We start from radix 0 and continue until radix bin 9."),(0,i.kt)("li",{parentName:"ol"},"We repeat this step until we reach the highest digits.")),(0,i.kt)("p",null,"Let's give some example using four numbers: 101, 21, 4000, 7. We can rewrite these numbers up to four digits:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0101, 0021, 4000, and 0007.\n")),(0,i.kt)("p",null,"We can then start from the lowest digit, the ones. As we take out the items from the Main bin queue, we do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"010(1)")," into radix bin 1"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"002(1)")," into radix bin 1"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"400(0)")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"000(7)")," into radix bin 7")),(0,i.kt)("p",null,"The radix bin will be filled as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bin 0: 4000"),(0,i.kt)("li",{parentName:"ul"},"Bin 1: 0101, 0021"),(0,i.kt)("li",{parentName:"ul"},"Bin 2:"),(0,i.kt)("li",{parentName:"ul"},"Bin 3:"),(0,i.kt)("li",{parentName:"ul"},"Bin 4:"),(0,i.kt)("li",{parentName:"ul"},"Bin 5:"),(0,i.kt)("li",{parentName:"ul"},"Bin 6:"),(0,i.kt)("li",{parentName:"ul"},"Bin 7: 0007"),(0,i.kt)("li",{parentName:"ul"},"Bin 8:"),(0,i.kt)("li",{parentName:"ul"},"Bin 9:")),(0,i.kt)("p",null,"Once we are done, we will take out the items from the radix bins and put it back into the Main bin queue. We do this starting from radix bin 0. The main queue now contains."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"4000, 0101, 0021, 0007\n")),(0,i.kt)("p",null,"Now, we are ready to do with the tens digit. We take out from the main bin queue to the radix bins."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"40(0)0")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"01(0)1")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"00(2)1")," into radix bin 2"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"00(0)7")," into radix bin 0")),(0,i.kt)("p",null,"The radix bin will be filled as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bin 0: 4000, 0101, 0007"),(0,i.kt)("li",{parentName:"ul"},"Bin 1:"),(0,i.kt)("li",{parentName:"ul"},"Bin 2: 0021"),(0,i.kt)("li",{parentName:"ul"},"Bin 3:"),(0,i.kt)("li",{parentName:"ul"},"Bin 4:"),(0,i.kt)("li",{parentName:"ul"},"Bin 5:"),(0,i.kt)("li",{parentName:"ul"},"Bin 6:"),(0,i.kt)("li",{parentName:"ul"},"Bin 7:"),(0,i.kt)("li",{parentName:"ul"},"Bin 8:"),(0,i.kt)("li",{parentName:"ul"},"Bin 9:")),(0,i.kt)("p",null,"Now, we will put back into the Main bin queue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"4000, 0101, 0007, 0021\n")),(0,i.kt)("p",null,"We repeat again the steps for the hundreds."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"4(0)00")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"0(1)01")," into radix bin 1"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"0(0)07")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"put ",(0,i.kt)("inlineCode",{parentName:"li"},"0(0)21")," into radix bin 0")),(0,i.kt)("p",null,"The state of the radix bin will be as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bin 0: 4000, 0007, 0021"),(0,i.kt)("li",{parentName:"ul"},"Bin 1: 0101"),(0,i.kt)("li",{parentName:"ul"},"Bin 2:"),(0,i.kt)("li",{parentName:"ul"},"Bin 3:"),(0,i.kt)("li",{parentName:"ul"},"Bin 4:"),(0,i.kt)("li",{parentName:"ul"},"Bin 5:"),(0,i.kt)("li",{parentName:"ul"},"Bin 6:"),(0,i.kt)("li",{parentName:"ul"},"Bin 7:"),(0,i.kt)("li",{parentName:"ul"},"Bin 8:"),(0,i.kt)("li",{parentName:"ul"},"Bin 9:")),(0,i.kt)("p",null,"Lastly, we do the same steps for the thousands digit."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"we put ",(0,i.kt)("inlineCode",{parentName:"li"},"(4)000")," into radix bin 4"),(0,i.kt)("li",{parentName:"ol"},"we put ",(0,i.kt)("inlineCode",{parentName:"li"},"(0)007")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"we put ",(0,i.kt)("inlineCode",{parentName:"li"},"(0)021")," into radix bin 0"),(0,i.kt)("li",{parentName:"ol"},"we put ",(0,i.kt)("inlineCode",{parentName:"li"},"(0)101")," into radix bin 0")),(0,i.kt)("p",null,"And the state of the radix bin will be as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bin 0: 0007, 0021, 0101"),(0,i.kt)("li",{parentName:"ul"},"Bin 1:"),(0,i.kt)("li",{parentName:"ul"},"Bin 2:"),(0,i.kt)("li",{parentName:"ul"},"Bin 3:"),(0,i.kt)("li",{parentName:"ul"},"Bin 4: 4000"),(0,i.kt)("li",{parentName:"ul"},"Bin 5:"),(0,i.kt)("li",{parentName:"ul"},"Bin 6:"),(0,i.kt)("li",{parentName:"ul"},"Bin 7:"),(0,i.kt)("li",{parentName:"ul"},"Bin 8:"),(0,i.kt)("li",{parentName:"ul"},"Bin 9:")),(0,i.kt)("p",null,"After we take out and put into the Main bin, we will have"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0007, 0021, 0101, and 4000\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"7, 21, 101, 4000\n")),(0,i.kt)("p",null,"which is the sorted arrangement of the numbers."),(0,i.kt)("h2",{id:"queue-with-double-stack"},"Queue with Double Stack"),(0,i.kt)("p",null,"Queue data structure can be implemented in different ways. The first way that comes to our mind maybe simply to use a list as its internal storage. The problem with list is that one of the Queue operation will be slow. Why is this so? Consider if we use the following code to add item into the list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def enqueue(self, item):\n    self.items.append(item)\n")),(0,i.kt)("p",null,"In this example, whenever we add item into the Queue, we always add it to the back. This operation takes constant time ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),". However, the removal part, must be written as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def dequeue(self):\n    return self.items.pop(0)\n")),(0,i.kt)("p",null,"The problem with this implementation is that it is very slow. The reason is that Python has to move all the elements after index 0 one position to the left. This takes ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of item in the Queue. This motivates us to think whether there is any other way of implementing Queue."),(0,i.kt)("p",null,"The answer is yes. We can use 2 Stack data structures as Queue's internal storage. In this implementation, we have two stacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Left Stack"),(0,i.kt)("li",{parentName:"ul"},"Right Stack")),(0,i.kt)("p",null,"An example of a Queue implemented using 2 Stacks are shown below."),(0,i.kt)(s.Z,{path:a(2181).Z,widthPercentage:"35%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"With this implementation both enqueue and dequeue are constant time ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Recall that it takes constant time to add an item to the end of a list and to pop an item from the end of a list. What is tricky about this implementation is that when we try to dequeue an item while the Left Stack is empty. To do this we follow the following procedures:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy all items from the Right Stack to the Left Stack."),(0,i.kt)("li",{parentName:"ol"},"Reverse the items in the Left Stack."),(0,i.kt)("li",{parentName:"ol"},"Remove the items on the Right Stack."),(0,i.kt)("li",{parentName:"ol"},"Pop the requested item from the Left Stack.")),(0,i.kt)("p",null,"These steps are shown in the image below."),(0,i.kt)(s.Z,{path:a(6766).Z,widthPercentage:"70%",mdxType:"ImageCard"}))}c.isMDXComponent=!0},2181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/queue_double_stack-51cae1f81988c56738c3c2609f7ba9a9.png"},6766:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/queue_doublestack_enqueue-2612f33cc2036c16750a5733516c83d7.png"}}]);