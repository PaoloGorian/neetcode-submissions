/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let low = 1;
        let high = n;
        let mid;

        while (low <= high) {            
            mid = Math.round((low + high) / 2);
            const guessed = guess(mid);
            if (guessed === 1) {
                low = mid + 1;                                             
            } else if (guessed === -1) {
                high = mid - 1;   
            } else {
                return mid;
            }
        }
    }
}
