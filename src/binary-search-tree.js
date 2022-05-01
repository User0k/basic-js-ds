const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addNode(this._root, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      };

      if (node.data === data) {
        return data;
      };

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      };

      return node;
    };
  }

  has(data) {
    return searchNode(this._root, data);

    function searchNode(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data ?
        searchNode(node.left, data) :
        searchNode(node.right, data);
    };
  }

  find(data) {
    return searchNode(this._root, data);

    function searchNode(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data ?
        searchNode(node.left, data) :
        searchNode(node.right, data);
    };
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    };
  }

  min() {
    if (!this._root) return;

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this._root) return;

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};


// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
