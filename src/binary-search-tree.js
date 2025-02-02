const { Node } = require('../extensions/list-tree.js');
class BinarySearchTree {
  constructor() {    
    this.myRoot = null;    
  } 

  root() {
    if(this.myRoot) return this.myRoot
    else return null;
  }

  
  add(data) {    
    this.myRoot = addWithin(this.myRoot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }    
  }


  has(data) {    
    return searchWithin(this.myRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      return data < node.data ?
      searchWithin(node.left, data):
      searchWithin(node.right, data);
    }
  }

  find(data) {
    if(!this.myRoot) return false;

    let current = this.myRoot;
    let found = false;
    while(current && !found){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right;
      } else {
        found = current;
      } 
    }
    if(!found) return null;
    return found;
  }
  
  remove(data) {
    this.myRoot = removeNode(this.myRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {    
    if (!this.myRoot) {
      return;
    }  

    let node = this.myRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {    
    if (!this.myRoot) {
      return;
    }  

    let node = this.myRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};