class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const joined = matrix.join(',').split(',').map(Number);
        console.log(joined);
        let hi = joined.length - 1;
        let lo = 0;
        let result = false;
        while ( lo <= hi ){
            const mid = Math.floor((lo + hi) / 2);
            if(joined[mid] === target) {
                return true;
            } else if (joined[mid] < target){
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return result;
    }
}
