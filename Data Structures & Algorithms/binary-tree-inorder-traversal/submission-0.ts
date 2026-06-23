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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }
        let array = [];
        let left;
        if (root.left) {
            left = this.inorderTraversal(root.left);
            array.push(...left);
        }
        array.push(root.val);
        let right;
        if (root.right) {
            right = this.inorderTraversal(root.right);
            array.push(...right);
        }
        
        return array;
    }
}
