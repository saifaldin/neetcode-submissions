class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let hi = nums.length - 1, lo = 0;
        while (hi > lo){
            const mid = Math.floor((hi + lo) / 2);
            if(nums[mid] < nums[hi]){
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return nums[lo];
    }
}
