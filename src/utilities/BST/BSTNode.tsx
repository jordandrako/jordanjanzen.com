export class BSTNode<T extends number | string> {
  public data: T;
  public left: BSTNode<T> | null;
  public right: BSTNode<T> | null;

  public constructor(data: T, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export default BSTNode;
