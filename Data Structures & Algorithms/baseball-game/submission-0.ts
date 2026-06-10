class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let record: number[] = [];
        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];
            if (op === 'C') {
                record.pop();
            } else if (op === 'D') {
                record.push(record[record.length - 1] * 2);
            } else if (op === '+') {
                record.push(record[record.length - 1] + record[record.length - 2]);
            } else {
                record.push(parseInt(op));
            }
        }
        let ans = 0;
        for (let score of record) {
            ans += score;
        }
        return ans;
    }
}