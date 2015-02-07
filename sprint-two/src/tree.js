var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree,treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else {
    for(var i = this.children.length - 1; i>= 0; i--){
      if(this.children[i].contains(target)){
        return true;
      }
    }
    return false;
  } 
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(N)
 */
