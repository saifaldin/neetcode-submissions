class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  binarySearch(nums: number[], target: number, lo: number, hi: number) {
    while (hi >= lo){ 
        const mid = Math.floor((hi + lo) / 2);
        if(target === nums[mid]) return mid;
        else if(target < nums[mid]) hi = mid - 1;
        else lo = mid + 1
    }
    return -1;
  }

  search(nums: number[], target: number): number {
    let hi = nums.length - 1, lo = 0;
    while(hi > lo) {
        const mid = Math.floor((hi + lo)/2);
        if(nums[mid] > nums[hi]){
            lo = mid + 1
        } else {
            hi = mid;
        }
    }
    const pivot = lo;
    const resultLeft = this.binarySearch(nums, target, 0, pivot - 1);
    if(resultLeft !== -1) return resultLeft;
    return this.binarySearch(nums, target, pivot, nums.length - 1);
  }
}
