class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const sortedNums = nums.sort();
        const freqs = {};
        for(const num of sortedNums){ 
            if(!freqs[num]) freqs[num] = 1;
            else freqs[num] += 1;
            console.log(freqs);
        }
        const sortedFreqs = Object.values(freqs).sort((a,b) => b - a );
        const topKFreqs = sortedFreqs.slice(0,k);
        const result = [];
        console.log(sortedFreqs, topKFreqs);
            for(const topFreq of topKFreqs){
                for(const key of Object.keys(freqs)){
                    if (freqs[key] === topFreq){
                        result.push(key);
                        delete freqs[key];
                    }
                }
            }
        return result;
    }
}
