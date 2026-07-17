/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }
        const startNode = new Node(node.val);

        const clones = new Map();
        clones.set(node, startNode);

        const queue = new Queue();
        queue.enqueue(node);

        while(!queue.isEmpty()) {
            const currOrig = queue.dequeue();
            const currClone = clones.get(currOrig);
            for (const n of currOrig.neighbors) {
                if (!clones.has(n)) {             
                    clones.set(n, new Node(n.val));       
                    queue.enqueue(n);
                }
                currClone.neighbors.push(clones.get(n))
            }
        }
        return startNode;
    }
}
