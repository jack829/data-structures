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

};

binaryPrototype.depthFirstLog = function(func){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
