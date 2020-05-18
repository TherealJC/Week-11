# Week-11

Instructions:
1. Write your explanation in the README.md file of your weekly repo.
2. For each task you will create a .js file to write the code examples with comments provided for each line of code.
3. An executable code files MUST be provided.
4. For each explanation in your README.md file you write you MUST provide pseudocode and diagrams.
5. For each task you will explain in your own words.
6. You can research and use any suitable resources you need to complete this activity. Make sure you reference your resources using APA style in the README.md.

Class Activity Description:

----------------------------------------------------------------------------------------------------------------------------------------------------

1. Write an introduction of JavaScript Data Structure stores and briefly explain each Data structure store. (Provide with your explanation pseudocodes)

What are data structures
"Data structures, at a high level, are techniques for storing and organizing data that make it easier to modify, navigate, and access. Data structures determine how data is collected, the functions we can use to access it, and the relationships between data. Data structures are used in almost all areas of computer science and programming, from operating systems to basic vanilla code to artificial intelligence."
Data structures enable us to:
Manage and utilize large datasets
Search for particular data from a database
Design algorithms that are tailored towards particular programs
Handle multiple requests from users at once
Simplify and speed up data processing

Array
The most basic of all data structures, an array stores data in memory for later use. Each array has a fixed number of cells decided on its creation, and each cell has a corresponding numeric index used to select its data. Whenever you’d like to use the array, all you need are the desired indices, and you can access any of the data within.

Queues / Stacks
Queues are conceptually similar to stacks; both are sequential structures, but queues process elements in the order they were entered rather than the most recent element. As a result, queues can be thought of as a FIFO (First In, First Out) version of stacks. These are helpful as a buffer for requests, storing each request in the order it was received until it can be processed.

Linked List
Linked lists are a data structure which, unlike the previous three, does not use physical placement of data in memory. This means that, rather than indexes or positions, linked lists use a referencing system: elements are stored in nodes that contain a pointer to the next node, repeating until all nodes are linked. This system allows efficient insertion and removal of items without the need for reorganization.

Trees
Trees are another relation-based data structure, which specialize in representing hierarchical structures. Like a linked list, nodes contain both elements of data and pointers marking its relation to immediate nodes.
Each tree has a “root” node, off of which all other nodes branch. The root contains references to all elements directly below it, which are known as its “child nodes”. This continues, with each child node, branching off into more child nodes.
Nodes with linked child nodes are called internal nodes while those without child nodes are external nodes. A common type of tree is the “binary search tree” which is used to easily search stored data. These search operations are highly efficient, as its search duration is dependent not on the number of nodes but on the number of levels down the tree.

Graphs
Graphs are a relation-based data structure helpful for storing web-like relationships. Each node, or vertex, as they’re called in graphs, has a title (A, B, C, etc.), a value contained within, and a list of links (called edges) it has with other vertices.

Hash Tables (Map)
Hash tables are a complex data structure capable of storing large amounts of information and retrieving specific elements efficiently. This data structure relies on the concept of key/value pairs, where the “key” is a searched string and the “value” is the data paired with that key.

----------------------------------------------------------------------------------------------------------------------------------------------------

2. Explain in details Linked lists:
a. Introduction to linked lists.
b. What are the advantages and disadvantages of linked lists.

A linked list is a data structure that stores multiple values in a linear fashion. Each value in a linked list is contained in its own node, an object that contains the data along with a link to the next node in the list. The link is a pointer to another node object or null if there is no next node. If each node has just one pointer to another node (most frequently called next) then the list is considered a singly linked list (or just linked list) whereas if each node has two links (usually previous and next) then it is considered a doubly linked list.

A disadvantage of using arrays to store data is that arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. In cases where using an array may cause too many problems, we consider another data structure called Linked Lists that addresses some of the limitations of arrays.
A linked list is a linear data structure where each element is a separate object.
Each element (we will call it a node) of a list is comprising of two items - the data and a reference to the next node. The last node has a reference to null.
The entry point into a linked list is called the HEAD of the list. It should be noted that head is not a separate node, but the reference to the first node. If the list is empty then the head is a null reference.
A linked list is a dynamic data structure. The number of nodes in a list is not fixed and can grow and shrink on demand. Any application which has to deal with an unknown number of objects will need to use a linked list.
One disadvantage of a linked list against an array is that it does not allow direct access to the individual elements. If you want to access a particular item then you have to start at the head and follow the references until you get to that item.
Linked lists also uses slightly more memory compared to an array.

Types of Linked Lists
A singly linked list is described above 
A doubly linked list is a list that has two references, one to the next node and another to previous node.
Another important type of a linked list is called a circular linked list where last node of the list points back to the first node (or the head) of the list.

c. Provide Real world examples
A good example is web-browsers, where it creates a linked list of web-pages visited, so that when you check history (traversal of a list) or press back button, the previous node's data is fetched.
"A simple real life example is a Train, here each coach is connected to its previous and next coach (Except first and last). In terms of programming consider coach body as node value and connectors as links to previous and next nodes."

d. Provide pseudocodes, diagrams and executable code. (in linkedlists.js file)

----------------------------------------------------------------------------------------------------------------------------------------------------

3. Explain in details JavaScript Recursion:
a. Introduction to Recursion.
b. What are the advantages and disadvantages using JavaScript Recursion?
c. Which data structure stores you can Recursion algorithm?
d. Provide Real world examples
e. Provide pseudocodes, diagrams and executable code. (create a js file for executable code)















References
Amanda Fawcett (20/3/2020). Educative. "7 JavaScript data structures you must know". https://www.educative.io/blog/javascript-data-structures
 Victor S.Adamchik. (2009). Linked Lists. https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html