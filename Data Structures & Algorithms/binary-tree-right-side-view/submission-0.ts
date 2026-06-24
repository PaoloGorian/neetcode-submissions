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
    rightSideView(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }
        const res = [];
        const queue = [root];

        while(queue.length) {
            const size = queue.length;
            const level = [];
            for (let i=0; i < size; i++) {
                const curr = queue.shift();
                level.push(curr.val);
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            }
            res.push(level.pop());
        }
        return res;
    }
}
