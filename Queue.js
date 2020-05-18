//So the two big actions are enqueue and dequeue. We add to the back and remove from the front. (FIFO)
//similar to stacks but as we see here it goes by FIFO whereas stacks go by LIFO

// create a new queue
var queue = new Queue();  //Queue is not defined ?

// enqueue an item
queue.enqueue('item');

// dequeue an item
var item = queue.dequeue();
//The peek function can be used to inspect the item at the front of the queue without dequeuing it:
// get the item at the front of the queue
var item = queue.peek();
//Both the dequeue and peek functions return the value ‘undefined’ if the queue is empty. 
//The getLength and isEmpty functions can be used to determine the current state of the queue:

// determine the number of items in the queue
var length = queue.getLength();

// determine whether the queue is empty
var isEmpty = queue.isEmpty();






























// class Queue {
//     constructor() {
//       // array to hold our values
//       this.queue = [];
//       // length of the array - could also track this with queue.length
//       this.length = queue.length;
//     }
  
//     enqueue() {
     
//     }
  
//     dequeue() {
      
//     }
    
//     peek() {
      
//     }
//   }

// //First implement our enqueue method. Its purpose is to add an item to the back of our queue.
// enqueue(value)
//     // add the value to the start of the queue
//     this.queue.unshift(value);
//     // update our length
//     this.length++;

// //This is quite a simple method that adds a value to the end of our queue,

// //The next method to implement is the dequeue method:
// dequeue() 
//     // if we have any values
//     if (this.length > 0) {
//       // pop off the value that was added first
//       this.queue.pop();
//       // decrement the length
//       this.length--;
//     }
  

//   //then peek
//   peek() 
//     const lastValIndex = this.length - 1;
//     if (lastValIndex >= 0) {
//       return this.queue[lastValIndex];
//     }
//     return false;
  