class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let lo = 0, hi = nums.length;
        while(lo <= hi) {
            const mid = Math.floor((lo+hi)/2);
            console.log(lo, hi, mid);
            if (nums[mid] === target){
                return mid;
            } else if(nums[mid] < target){
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return -1;
    }
}
