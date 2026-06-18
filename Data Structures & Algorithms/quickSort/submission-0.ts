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
    quickSort(pairs: Pair[]): Pair[] {
        this.sort(pairs, 0, pairs.length - 1);
        return pairs;
    }

    sort(arr: Pair[], s: number, e: number): void {
        if (e - s + 1 <= 1) {
            return;
        }

        let pivot = arr[e];
        let left = s;

        for (let i = s; i < e; i++) {
            if (arr[i].key < pivot.key) {
                let tmp = arr[left];
                arr[left] = arr[i];
                arr[i] = tmp;
                left++;
            }
        }

        arr[e] = arr[left];
        arr[left] = pivot;

        this.sort(arr, s, left - 1);
        this.sort(arr, left + 1, e);
    }
}
