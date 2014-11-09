function Node(element){
  this.element = element;
  this.next = null;
}

function linkedL (){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

function find(item){
  var currNode = this.head;
  while (currentNode.element != item){
    currNode = currNode.next;
  }
  return currNode.next;
}

function insert(newElement, item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}


var cities = new linkedL();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russelville");
cities.display();
