class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        nums.forEach((num, i) => {
            numsMap.set(num, i);
        });
        for (let i = 0; i < nums.length; i++){
            const index1 = i;
            const index2 = numsMap.get(target - nums[i]);
            if(index2 && index1 !== index2){
                return [index1, index2];
            }
        }
    }
}
