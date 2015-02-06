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
  this.children.push(Child(value));
};

treeMethods.contains = function(target){
  for(var i = 0;i<this.children.length;i++){
    if(this.children[i].value === target){
      return true;
    }
  }
  return false;
};

var Child = function(item){
  var child = {};
  child.value = item;
  return child;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
