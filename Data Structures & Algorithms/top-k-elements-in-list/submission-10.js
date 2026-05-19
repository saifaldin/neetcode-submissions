class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (const num of nums) {
            if (!freq[num]) freq[num] = 1;
            else freq[num] += 1;
        }
        const topK = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0,k).map(v => v[0]);
        return topK;
    }
}
