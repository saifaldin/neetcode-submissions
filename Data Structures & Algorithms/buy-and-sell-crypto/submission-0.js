class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const results = [0];

        for(let i = 0; i < prices.length; i++){
            for (let j = i+1; j< prices.length; j++){
                const diff = prices[j] - prices[i];
                if(diff > 0) results.push(diff);
            }
        }
        return Math.max(...results);
    }
}
