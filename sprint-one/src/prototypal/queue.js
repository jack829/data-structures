var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.first = 1;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.count += 1;
    this.storage[this.count] = value;
  },
  dequeue: function(){
    var remove = this.storage[this.first];
    delete this.storage[this.first];
    this.first += 1;
    return remove;
  },
  size: function(){
    return Math.max(0,this.count-this.first+1);
  }
};


