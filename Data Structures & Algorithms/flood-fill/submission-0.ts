class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(
        image: number[][],
        sr: number,
        sc: number,
        color: number,
    ): number[][] {
        const startingColor = image[sr][sc];
        if (startingColor === color) {
            return image;
        }
        const dfs = (r: number, c: number) => {
            if (r < 0 || c < 0 || r > image.length-1 || c > image[0].length-1 || image[r][c] !== startingColor ) {
                return;            
            }
            image[r][c] = color;
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }
        dfs(sr, sc);
        return image;
    }    
}
