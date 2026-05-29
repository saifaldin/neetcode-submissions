class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  binarySearch(nums: number[], target: number) {
    let hi = nums.length - 1, lo = 0;
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
    console.log(nums.slice(0,pivot), nums.slice(pivot, nums.length))
    const resultLeft = this.binarySearch(nums.slice(0,pivot), target);
    if(resultLeft !== -1) return resultLeft;
    const resultRight = this.binarySearch(nums.slice(pivot, nums.length), target);
    return resultRight === -1 ? -1 : resultRight + nums.slice(0,pivot).length;
  }
}
