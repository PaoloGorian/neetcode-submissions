/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxQ = new MaxPriorityQueue();
        for (const stone of stones) {
            maxQ.enqueue(stone);
        }
        while(maxQ.size() > 1) {
            const max1 = maxQ.dequeue();
            const max2 = maxQ.dequeue();

            if (max1 !== max2) {
                maxQ.enqueue(max1 - max2)
            }
        }
        return maxQ.size() > 0 ? maxQ.dequeue() : 0;
    }
}
