class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxRight = -1;
        const replaced = [];
        for (let i = arr.length - 1; i >= 0; i--) {                        
            replaced.unshift(maxRight);
            if (arr[i] > maxRight) {
                maxRight = arr[i];
            }
        }
        return replaced;
    }
}
