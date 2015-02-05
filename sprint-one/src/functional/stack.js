var Stack = function(){
  var someInstance = {};
  var count = 0; 
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count += 1;
    storage[count] = value;
  };

  someInstance.pop = function(){
    var remove = storage[count];
    delete storage[count];
    if (count){
      count -= 1;
    }
    return remove;
  };

  someInstance.size = function(){
    return count;
  };
 
  return someInstance;
};
