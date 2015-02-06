var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.first = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.count += 1;
    this.storage[this.count] = value;
  };
Queue.prototype.dequeue = function(){
    var remove = this.storage[this.first];
    delete this.storage[this.first];
    this.first += 1;
    return remove;
  };
Queue.prototype.size = function(){
    return Math.max(0, this.count-this.first +1);
  };
  


