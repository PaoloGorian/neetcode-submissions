class Solution {
    private memo: Map<number, number> = new Map();
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n === 1) {
            return 1;
        }
        if (n === 2) {
            return 2;
        }
        if (this.memo.has(n)) return this.memo.get(n)!;
        let steps;
        if (n > 2) {
            steps = this.climbStairs(n-1) + this.climbStairs(n-2);
        }
        this.memo.set(n, steps);
        return steps;
    }
}
