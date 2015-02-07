describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.removeHead).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
    expect(doublyLinkedList.addToHead).to.be.a("function");
    expect(doublyLinkedList.removeTail).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added by addToTail", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(true);
    expect(doublyLinkedList.contains(8)).to.equal(false);
  });

  it('should not contain a value that was removed by removeHead', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(5)).to.equal(false);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

 // add more tests here to test the functionality of doublyLinkedList

  it('should designate a new head when new nodes are added to the head', function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });



  it('should return the value of the former tail when removeTail is called', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.tail.value).to.equal(7);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(6);
  });

  it('should not contain a value that was removed by removeTail', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(4)).to.equal(false);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(7)).to.equal(false);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it("should contain a value that was added by addToHead", function(){
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(true);
    expect(doublyLinkedList.contains(8)).to.equal(false);
  });


 
});
