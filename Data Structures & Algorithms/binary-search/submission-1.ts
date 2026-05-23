class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let lo = 0, hi = nums.length - 1;
        let index = -1;
        while (lo <= hi) {
            const mid = Math.floor((hi + lo) / 2);
            console.log(lo, hi, mid);
            if (nums[mid] === target) {
                index = mid;
                break;
            } 
            if (target > nums[mid]) {
                lo = mid + 1;
            } else { 
                hi = mid - 1;
            }
        }   
        return index;
    }
}
