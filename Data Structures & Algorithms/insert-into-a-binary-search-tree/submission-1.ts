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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        const newNode = new TreeNode(val);
        if (!root) {
            return newNode;
        }
        let curr = root;
        let parentNode;
        while (curr) {
                parentNode = curr;
            if (curr.val > val) {
                curr = curr.left;
            } else if (curr.val < val) {
                curr = curr.right;
            }
        }
        
        if (parentNode.val > val) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;
        }
        return root;
    }
}
