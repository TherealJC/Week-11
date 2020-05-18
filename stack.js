//when you have a stack, the last item you pushed on the stack will be the first one removed. This is referred to as last-in, first-out (LIFO).
class Stack {
    constructor() {
      // create our stack, which is an empty object
      this.stack = {}
    }
    // this method will push a value onto the top of our stack
    push(value) {
    }
    // this method is responsible for popping off the last value and returning it
    pop() {
    }
  
    // this will peek at the last value added to the stack
    peek() {
    }
  }

//The first method we will implement is the push method.
//We need to accept a value
//We then need to add that value to the top of our stack
//We also should track the length of our stack so we know our stack’s index
class Stack {
    constructor() {
      this._storage = {};
      this._length = 0; // this is our length 
    }
  
    push(value) {
      // so add the value to the top of our stack
      this._storage[this._length] = value;
      // since we added a value, we should also increase the length by 1
      this._length++;
    }
    /// .....
  }

//Now pop, The goal with the pop method is to remove the last value that was added to our stack and then return that value.
class Stack {
    constructor() {
      this._storage = {};
      this._length = 0;
    }
    
    pop() {
      const lastValIndex = this._length - 1;
      if (lastValIndex >= 0) {
        // we first get the last val so we have it to return
        const lastVal = this._storage[lastValIndex];
        // now remove the item which is the length - 1
        delete this._storage[lastValIndex];
        // decrement the length
        this._length--;
        // now return the last value
        return lastVal;
      }
      return false;
    }
  }

  //and peek
  class Stack {
    constructor() {
      this._storage = {};
      this._length = 0;
    }
    
    peek() {
      const lastValIndex = this._length - 1;
      const lastVal = this._storage[lastValIndex];
      return lastVal;
    }
  }