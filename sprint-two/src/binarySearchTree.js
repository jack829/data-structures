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
    if (this.left === null){
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    } 
  } else {
      if (this.right === null){
        this.right = BinarySearchTree(value);
    } else {
        this.right.insert(value);
    } 
  }
};

binaryPrototype.contains = function(target){
  if (this.value === target){
    return true;
  } else {
    if(target < this.value && this.left){
      return this.left.contains(target);
    } else if (target > this.value && this.right) {
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

/*
 * Complexity: What is the time complexity of the above functions?
 */

 
