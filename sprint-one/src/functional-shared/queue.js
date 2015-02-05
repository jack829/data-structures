var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    count: 0,
    first: 1,
    storage: {}
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.count += 1;
    this.storage[count] = value;
  },
  dequeue: function(){
    var remove = this.storage[first];
    delete this.storage[first];
    this.first += 1;
    return remove;
  },
  size: function(){
    if(this.count-(this.first-1) >= 0){
      return this.count-(this.first-1);
    } else {
      return 0;
    }
  }
};



