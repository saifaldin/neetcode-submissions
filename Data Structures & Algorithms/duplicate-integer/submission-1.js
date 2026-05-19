class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        const numMap = new Map();
        nums.forEach(num => numMap.has(num) ? numMap.set(num, numMap.get(num) + 1): numMap.set(num, 1));
        return !!Array.from(numMap.values()).find(val => val > 1);
    }
}
