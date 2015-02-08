var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  if (bucket === undefined){
    bucket = [];
  }
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      return;
    }
  }
  bucket.push([k,v]);
  this._storage[i] = bucket;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for(var j = 0;j<bucket.length;j++){
    if(bucket[j] && bucket[j][0] === k){
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for(var j = 0; j < bucket.length ; j++){
    if(bucket[j] && bucket[j][0] === k){
      delete bucket[j];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 remove: average- O(1), worst case-O(N)
 retrieve: average- O(1), worst case-O(N)
 */
