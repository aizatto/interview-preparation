/**
 *
 * Requires:
 * - Recursion
 * - Binary Tree Node
 *
 * Properties:
 * - Recursive
 * - Data Structure
 * - Doesn't handle duplicates by default
 *
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree
 */

class BinarySearchTree {

  private root?: BinarySearchTreeNode;

  constructor() {
    this.root = null;
  }

  insert(value: Number): this {
    if (this.root) {
      this.root.insert(value);
    } else {
      this.root = new BinarySearchTreeNode(value);
    }
    return this;
  }

  values(): Number[] {
    if (this.root) {
      return this.root.values();
    } 
      return [];
    
  }

}

class BinarySearchTreeNode {
  private value: Number;

  private left?: BinarySearchTreeNode;

  private right?: BinarySearchTreeNode;

  constructor(value: Number) {
    this.value = value;
  }

  insert(value: Number): BinarySearchTreeNode {
    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }

      this.left = new BinarySearchTreeNode(value);
      return this.left;
    }

    if (this.value < value) {
      if (this.right) {
        return this.right.insert(value);
      }

      this.right = new BinarySearchTreeNode(value);
      return this.right;
    }

    return this;
  }

  /**
   * Also known as traversing the tree
   */
  values(): Number[] {
    const values = [];

    if (this.left) {
      values.push(...this.left.values());
    }

    values.push(this.value);

    if (this.right) {
      values.push(...this.right.values());
    }

    return values;
  }

}

const bstTree = new BinarySearchTree()
  .insert(5)
  .insert(3)
  .insert(1)
  .insert(2)
  .insert(4);

console.log(bstTree.values());
