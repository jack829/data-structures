var BinarySearchTree = function(value){
  var someInstance = Object.create(binaryPrototype);
  someInstance.left = null;
  someInstance.right = null;
  someInstance.value = value;
  return someInstance;
};

var binaryPrototype = {};

binaryPrototype.insert = function(value){
  if (value < this.value) {
    // if (this.left === null){
    //   this.left = BinarySearchTree(value);
    // } else {
    //   this.left.insert(value);
    // } 
    this.left === null ? this.left = BinarySearchTree(value) : this.left.insert(value);
    
  } else if (value > this.value) {
    //   if (this.right === null){
    //     this.right = BinarySearchTree(value);
    // } else {
    //     this.right.insert(value);
    // } 
    this.right === null ? this.right = BinarySearchTree(value) : this.right.insert(value);
  }
};

binaryPrototype.contains = function(target){
  if (this.value === target){
    return true;
  } else {
    if(target < this.value && this.left){
      return this.left.contains(target);
    } else if (this.right) {
      return this.right.contains(target);
    }
    return false;
  }
};

binaryPrototype.depthFirstLog = function(func){
  var funcCall = function(root){
    func(root.value);
    if (root.left){
      funcCall(root.left);
    }
    if (root.right){
      funcCall(root.right);
    }
  }
  funcCall(this);
};

//   func(this.value);
//   if (this.left){
//     this.left.depthFirstLog(func);
//   }
//   if (this.right) {
//     this.right.depthFirstLog(func);
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
insert: avergage - O(log N), worst - O(N)
contains: avergage - O(log N), worst - O(N)
depthFirstLog: avergage - O(log N), worst - O(N)
 */


