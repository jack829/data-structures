var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail = Node(value);
      list.head.next = list.tail;
    }
  };

  list.removeHead = function(){
    var remove = list.head.value;
    list.head = list.head.next;
    return remove;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null){
      if(currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// tail -> null
// head -> null

// tail -> 4 -> null
// head -> 4 -> null

// tail -> 5 -> 4 ->
// head -> 4 -> 5 -> null

// tail: null
// head: null

// tail: {value: 4, node: null}
// head: {value: 4, node: null}

// tail: {value: 5, node: null}
// head: {value: 4, node: tail}

// tail: {value: 6, node: null}
// list.head.next = {value: 5, nude: tail}
// head: {value: 4, node: list.head.next}