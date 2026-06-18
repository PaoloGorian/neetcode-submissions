/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pair[]): Pair[] {
        if (pairs.length === 0) {
            return [];
        }
        if (pairs.length === 1) {
            return pairs;
        }
        const start = 0;
        const end = pairs.length;
        const m = Math.floor((end - start) / 2);
        const first = pairs.slice(0, m);
        const last = pairs.slice(m);
        
        const firstSorted = this.mergeSort(first);
        const lastSorted = this.mergeSort(last);

        let i = 0;
        let j = 0;
        const res = [];
        while (i < firstSorted.length || j < lastSorted.length) {
            if (i >= firstSorted.length) {
                res.push(lastSorted[j]);
                j++;
            }
            else if (j >= lastSorted.length) {
                res.push(firstSorted[i]);
                i++;
            }
            else if (firstSorted[i].key <= lastSorted[j].key) {
                res.push(firstSorted[i])
                i++;
            } else {
                res.push(lastSorted[j]);
                j++;
            }
        }
        return res;        
    }
}
