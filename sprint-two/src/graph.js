

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node){
    return !!this.nodes[node];
//  if (this.nodes[node]){
//    return true;
//  }
//  return false;
//    return this.nodes[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode][toNode] === this.nodes[toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = this.nodes[toNode];
  this.nodes[toNode][fromNode] = this.nodes[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.nodes){
    cb(key);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
contains: O(1)
removeNode: O(1)
hasEdge: O(1)
addEdge: O(1)
removeEdge: O(1)
:forEachNode O(N)
 */


// var newGraph = new Graph(); // newGraph == {nodes: {}};
// newGraph.addNode("kitten"); // newGraph == {nodes: {"kitten": {},}};
// newGraph.addNode("puppy"); // newGraph == {nodes: {"kitten": {},"puppy": {}}};
// newGRaph.addEdge("kitten", "puppy"); // newGraph == {nodes: {"kitten": {"puppy": newGraph["puppy"]},"puppy": {"kitten": newGraph["kitten"]}}};

