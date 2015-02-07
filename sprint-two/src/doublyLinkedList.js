var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      var temp = list.tail;
      list.tail = list.tail.next;
      list.tail.previous = temp;
    }
  };
  // null <- 1 -> null

  // null <- 1 -> <- 2 -> null
  //      (head)   (tail)

  // null <- 1 -> <- 2 ->  <- 3 ->  null
  //      (head)           (tail)

  list.addToHead = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.head = Node(value);
      list.tail.previous = list.head;
    }
  };

  list.removeHead = function(){
    var remove = list.head.value;
    list.head = list.head.next;
    return remove;
  };

  list.removeTail = function(){
    var remove = list.tail.value;
    if (list.tail.previous){
      list.tail = list.tail.previous;
      list.tail.next = null;
    } 
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
  node.previous = null;

  return node;
};