class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures: number[]): number[] {
    const monostack = [];
    const results = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
      const currtemp = temperatures[i];

      while(monostack.length > 0 && monostack.at(-1)[0] < currtemp){
        const [_, indx] = monostack.pop();
        results[indx] = i - indx;
      }

      monostack.push([temperatures[i], i]);
    }
    return results;
  }
}
