class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        for (let i = n-1; i >= 0; i--) {
            let currM = m - 1;
            const newNum1 = nums2[i];
            while(currM >= 0 && newNum1 < nums1[currM]) {
                nums1[currM + 1] = nums1[currM];
                currM--;
            }
            nums1[currM + 1] = newNum1;
            m++;
        }
    }
}
