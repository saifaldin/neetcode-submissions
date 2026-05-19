class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const results = [];
        const numSorted = nums.sort((a , b) => a - b);
        console.log(numSorted);
        for(let i = 0; i < numSorted.length; i++){
            const number = numSorted[i];
            if(number > 0) {
                break;
            }
            if (i > 0 && numSorted[i] === numSorted[i - 1]) continue;

            let p1 = i + 1, p2 = numSorted.length - 1;
            while (p1 < p2) {
                if (i === p1) {
                    p1++;
                    continue;
                }
                if (i === p2) {
                    p2--;
                    continue;
                }
                if (numSorted[i] + numSorted[p1] + numSorted[p2] > 0) {
                    p2--;
                }else if (numSorted[i] + numSorted[p1] + numSorted[p2] < 0) {
                    p1++;
                }else{
                    results.push([numSorted[i], numSorted[p1], numSorted[p2]]);
                    p1++;
                    p2--;
                    while (p1 < p2 && numSorted[p1] === numSorted[p1 - 1]) {
                        p1++;
                    }
                }
            }
        }
        return results;
    }
}
