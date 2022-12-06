function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var head = new Node(7, null, null);
var node13 = new Node(13, null, null);
var node11 = new Node(11, null, null);
var node10 = new Node(10, null, null);
var node1 = new Node(1, null, null);

head.next = node13;
node13.next = node11;
node11.next = node10;
node10.next = node1;

head.random = null;
node13.random = head;
node11.random = node1;
node10.random = node11;
node1.random = head;

/**
 * @param {Node} head
 * @return {Node}
 */

// Solution.
// We use 2 passes.
// First pass we could create a copy of each node in the
// original array then store it inside a hash
// map so we could retrieve later on.

// We can not store the hash map like 0: new Node(), 1: new Node()
// because when 2nd pass happen we could not retrieve the random pointer.

// So we should store the hash map like this
// {oldNode: new Node(), oldNode2: new Node(), ...}
// So when 2nd pass we still can retrieve the random pointer by access the
// hash map [oldNode].random.
var copyRandomList = function (head) {
  // Create a hash map by looping through the list
  const mapOldToNewNode = new Map();
  // Add null value to store the end of the list
  mapOldToNewNode.set(null, null);
  let cur = head;
  while (cur) {
    mapOldToNewNode.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;
  while (cur) {
    mapOldToNewNode.get(cur).next = mapOldToNewNode.get(cur.next);
    mapOldToNewNode.get(cur).random = mapOldToNewNode.get(cur.random);
    cur = cur.next;
  }
  return mapOldToNewNode.get(head);
};

console.log(copyRandomList(head));
