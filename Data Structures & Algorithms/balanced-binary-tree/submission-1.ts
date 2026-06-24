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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        return this.getHeight(root) != -1;
    }

    getHeight(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        if ( leftHeight === -1 || rightHeight === -1 || Math.abs(rightHeight - leftHeight) > 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
