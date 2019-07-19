import BSTNode from './BSTNode';

export class BST<T extends number | string> {
  public root: BSTNode<T> | null;

  public constructor() {
    this.root = null;
  }

  /**
   * Inserts a node into the tree.
   * @param data The data to insert into the tree.
   */
  public insert = (data: T): void => {
    const node = this.root;

    if (node === null) {
      this.root = new BSTNode(data);
      return;
    }

    this._insertNode(node, data);
  };

  /**
   * Finds the smallest item in the tree.
   */
  public findMin = (): T | null => {
    let current = this.root;

    if (current === null) {
      return null;
    }

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  };

  /**
   * Finds the largest item in the tree.
   */
  public findMax = (): T | null => {
    let current = this.root;

    if (current === null) {
      return null;
    }

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  };

  /**
   * Search for a node with given data.
   * @param data The data you want to find in the tree.
   * @returns Tree node or null
   */
  public search = (data: T): BSTNode<T> | null => {
    let current = this.root;

    if (current === null) {
      return null;
    }

    while (current.data !== data) {
      current = data < current.data ? current.left : current.right;
    }

    return current;
  };

  /**
   * Whether the tree contains the given data.
   * @param data The data you want to find exists in the tree.
   * @returns True or false
   */
  public contains = (data: T): boolean => {
    let current = this.root;

    while (current !== null) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }

    return false;
  };

  /**
   * Remove the given data from the tree and ensures the tree remains a BST.
   * @param data The data you want to remove from the tree.
   */
  public remove = (data: T): void => {
    this.root = this._removeNode(this.root, data);
  };

  /**
   * Determines if the tree is balanced.
   * @returns True or false
   */
  public isBalanced = (): boolean =>
    this._findMinHeight() >= this._findMaxHeight() - 1;

  /**
   * Get the root node of the tree.
   */
  public getRootNode = (): BSTNode<T> | null => this.root;

  /**
   * Searches the tree in order from least to greatest.
   * @returns An array of the data in the tree.
   */
  public inOrder = (): T[] | null => {
    if (this.root === null) {
      return null;
    }

    const result: T[] = [];

    const traverseInOrder = (node: BSTNode<T> | null): void => {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    };

    traverseInOrder(this.root);
    return result;
  };

  /**
   * Searches the tree in pre-order.
   * @returns An array of the data in the tree.
   */
  public preOrder = (): T[] | null => {
    if (this.root === null) {
      return null;
    }

    const result: T[] = [];

    const traversePreOrder = (node: BSTNode<T> | null): void => {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    };

    traversePreOrder(this.root);
    return result;
  };

  /**
   * Searches the tree in pre-order.
   * @returns An array of the data in the tree.
   */
  public postOrder = (): T[] | null => {
    if (this.root === null) {
      return null;
    }

    const result: T[] = [];

    const traversePostOrder = (node: BSTNode<T> | null): void => {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    };

    traversePostOrder(this.root);
    return result;
  };

  /**
   * Searches the tree level by level. Also known as Breadth First Search.
   * @returns An array of the data in the tree.
   */
  public levelOrder = (): T[] | null => {
    const result: T[] = [];
    const queue: BSTNode<T>[] = [];

    if (this.root === null) {
      return null;
    }

    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  };

  /**
   * Recursive helper method to find the right place to insert a node into the tree.
   * @param node The node to start search on.
   * @param data Data to insert into the tree.
   */
  private _insertNode = (node: BSTNode<T>, data: T): null | void => {
    if (data === node.data) {
      return;
    }

    if (data < node.data) {
      if (node.left === null) {
        node.left = new BSTNode(data);
        return;
      }
      if (node.left !== null) {
        return this._insertNode(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new BSTNode(data);
        return;
      }
      if (node.right !== null) {
        return this._insertNode(node.right, data);
      }
    }
    return null;
  };

  /**
   * Recursive helper method that swaps nodes in order to remove the given data.
   * @param node The node to start from.
   * @param data The data to remove.
   */
  private _removeNode = (node: BSTNode<T>, data: T): BSTNode<T> | null => {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      // node has no children
      if (node.left === null && node.right === null) {
        return null;
      }

      // node has no left child
      if (node.left === null) {
        return node.right;
      }

      // node has no right child
      if (node.right === null) {
        return node.left;
      }

      // node has two children
      let tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }

      node.data = tempNode.data;
      node.right = this._removeNode(node.right, tempNode.data);
      return node;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }

    node.right = this._removeNode(node.right, data);
    return node;
  };

  /**
   * Recursive helper method used to determine if the tree is balanced by comparing it with `_findMaxHeight`.
   */
  private _findMinHeight = (node = this.root): number => {
    if (node === null) {
      return -1;
    }

    const left = this._findMinHeight(node.left);
    const right = this._findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    }
    return right + 1;
  };

  /**
   * Recursive helper method used to determine if the tree is balanced by comparing it with `_findMinHeight`.
   */
  private _findMaxHeight = (node = this.root): number => {
    if (node === null) {
      return -1;
    }

    const left = this._findMaxHeight(node.left);
    const right = this._findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    }
    return right + 1;
  };
}

export default BST;
