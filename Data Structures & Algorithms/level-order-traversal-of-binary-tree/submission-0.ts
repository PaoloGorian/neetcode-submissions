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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return [];
        }

        let res: number[][] = [];
        let queue: TreeNode[] = [root];
        
        while(queue.length > 0) {
            const level = [];
            const length = queue.length;
            for (let i = 0; i < length; i++) {
                let curr = queue.shift();
                level.push(curr.val);
                
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            }
            res.push(level);
        }

        return res;
    }
}
