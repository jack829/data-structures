var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 1;
  // Implement the methods below

  someInstance.enqueue = function(value){
    count += 1;
    storage[count] = value;
  };

  someInstance.dequeue = function(){
    var remove = storage[first];
    delete storage[first];
    first += 1;
    return remove;
  };

  someInstance.size = function(){
    if(count-(first-1) >= 0){
      return count-(first-1);
    } else {
      return 0;
    }
  };

  return someInstance;
};
