class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//In the LinkedListNode class, the data property contains the value the linked list item should store and
//the next property is a pointer to the next item in the list. The next property starts out as null because
// you don’t yet know the next node. You can then create a linked list using the LinkedListNode class like this:

// create the first node
const head = new LinkedListNode(12);

// add a second node
head.next = new LinkedListNode(99);

// add a third node
head.next.next = new LinkedListNode(37);

//The first node in a linked list is typically called the head, so the head identifier in this example represents
//the first node. 
//The second node is created an assigned to head.next to create a list with two items. 
//A third node is added by assigning it to head.next.next, which is the next pointer of the second node in the list.
//The next pointer of the third node in the list remains null. The following image shows the resulting data structure.


//The structure of a linked list allows you to traverse all of the data by following the next pointer on each node.
//Here is a simple example of how to traverse a linked list and print each value out to the console:

let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}

//This code uses the variable current as the pointer that moves through the linked list. The current variable is 
//initialized to the head of the list and the while loop continues until current is null. Inside of the loop, the
//value stored on the current node is printed and then the next pointer is followed to the next node.
//Most linked list operations use this traversal algorithm or something similar, so understanding this algorithm
//is important to understanding linked lists in general.


//Adding an item into a linked list requires walking the structure to find the correct location, creating a new node,
//and inserting it in place. The one special case is when the list is empty, in which case you simply create a new node and assign it to head:

// const head = Symbol("head");

// class LinkedList {
//     constructor() {
//         this[head] = null;
//     }

//     add(data) {

//         // create a new node
//         const newNode = new LinkedListNode(data);
                
//         //special case: no items in the list yet
//         if (this[head] === null) {

//             // just set the head to the new node
//             this[head] = newNode;
//         } else {

//             // start out by looking at the first node
//             let current = this[head];

//             // follow `next` links until you reach the end
//             while (current.next !== null) {
//                 current = current.next;
//             }
           
//             // assign the node into the `next` pointer
//             current.next = newNode;            
//         }
//     }
// }