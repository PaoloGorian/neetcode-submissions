class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if (grid[0][0] === 1) {
            return -1;
        }
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const queue = new Queue();
        queue.enqueue([0, 0, 1]);
        while(!queue.isEmpty()) {
            const current = queue.dequeue();
            const cCol = current[0];
            const cRow = current[1];
            const dist = current[2];
            const adjacent = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            if (cRow === ROWS -1 && cCol === COLS -1 ) {
                return dist;
            }
            for (let i = 0; i < adjacent.length; i++) {
                const nextCol = cCol + adjacent[i][0];
                const nextRow = cRow + adjacent[i][1];
                if (
                    nextCol === COLS ||
                    nextRow === ROWS ||
                    Math.min(nextCol, nextRow) < 0 ||
                    grid[nextRow][nextCol] === 1
                    ) {
                        continue;
                }
                queue.enqueue([nextCol, nextRow, dist + 1]);
                grid[nextRow][nextCol] = 1;
            }
        }
        return -1;
    }
}
