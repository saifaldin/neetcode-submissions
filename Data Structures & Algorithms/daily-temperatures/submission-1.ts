class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let l = 0, r = 1;
        const results = [];
        while (l < temperatures.length){
            let counter = 0;
            while (r < temperatures.length){
                if (temperatures[r] > temperatures[l] || 
                    r === temperatures.length - 1){
                    if(temperatures[r] > temperatures[l]) results.push(r - l);
                    else results.push(0);
                    break;
                } 
                counter++;
                r++;
            }
            l++;
            r = l;
        }
        return results;
    }
}
