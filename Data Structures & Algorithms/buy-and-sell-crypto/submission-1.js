class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Brute

        // const results = [0];
        // for(let i = 0; i < prices.length; i++){
        //     for (let j = i+1; j< prices.length; j++){
        //         const diff = prices[j] - prices[i];
        //         if(diff > 0) results.push(diff);
        //     }
        // }
        // return Math.max(...results);

        // Two Pointers

        let l = 0, r = 1, maxP = 0;

        while(r < prices.length){ 
            if (prices[r] > prices[l]){
                const diff = prices[r] - prices[l];
                maxP = Math.max(maxP, diff);
            } else {
                l = r;
            }
            r++;
        }
        return maxP;
    }
}
