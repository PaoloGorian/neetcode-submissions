/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {        
        if (!root) {
            return null;
        }
        if (root.val > key) {
            root.left = this.deleteNode(root.left, key);
        } else if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (!(root.right && root.left)) {
                if (root.right) return root.right;
                else if (root.left) return root.left;
                else return null;
            } else {        
                const min = this.findMin(root.right);
                root.val = min.val;
                root.right = this.deleteNode(root.right, min.val);
            }
        }
        return root;
    }

    findMin(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        } else if (root.left) {
            return this.findMin(root.left);
        }
        return root;
    }
}
