# Week-11

Instructions:
1. Write your explanation in the README.md file of your weekly repo.
2. For each task you will create a .js file to write the code examples with comments provided for each line of code.
3. An executable code files MUST be provided.
4. For each explanation in your README.md file you write you MUST provide pseudocode and diagrams.
5. For each task you will explain in your own words.
6. You can research and use any suitable resources you need to complete this activity. Make sure you reference your resources using APA style in the README.md.

Class Activity Description:
b. What are the advantages and disadvantages of linked lists.
c. Provide Real world examples
d. Provide pseudocodes, diagrams and executable code. (create a js file for executable code)
3. Explain in details JavaScript Recursion:
a. Introduction to Recursion.
b. What are the advantages and disadvantages using JavaScript Recursion?
c. Which data structure stores you can Recursion algorithm?
d. Provide Real world examples
e. Provide pseudocodes, diagrams and executable code. (create a js file for executable code)


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


2. Explain in details Linked lists:
a. Introduction to linked lists.















References
Amanda Fawcett (20/3/2020). Educative. "7 JavaScript data structures you must know". https://www.educative.io/blog/javascript-data-structures