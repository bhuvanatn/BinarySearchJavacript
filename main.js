class MainNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }
insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new MainNode(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new MainNode(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new MainNode(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

   contains(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }




  delete(data) {
    const deleteNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = deleteNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else {
        node.right = deleteNode(node.right, data);
        return node;
      }
    }
    this.root = deleteNode(this.root, data);
  }
}

const bs = new BinarySearch();

bs.insert(9);
bs.insert(3);
bs.insert(16);
bs.insert(4);
bs.insert(7);
bs.insert(20);
bs.insert(9);
bs.insert(2);
bs.insert(10);

bs.delete(16);

console.log("Contains:", bs.contains(16));
console.log("Contains:", bs.contains(2));
console.log("Contains:", bs.contains(92));