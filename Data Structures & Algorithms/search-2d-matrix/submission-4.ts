class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rhi = matrix.length - 1, rlo = 0;
        let foundRow = -1;
        while (rhi >= rlo){
            const rmid = Math.floor((rhi + rlo) / 2);
            const rmidHiBound = matrix[rmid].length - 1;
            if(target <= matrix[rmid][rmidHiBound] && target >= matrix[rmid][0]) {
                foundRow = rmid;
                break;
            } else if (target > matrix[rmid][rmidHiBound]) {
                rlo = rmid + 1;
            } else {
                rhi = rmid - 1;
            }
        }
        if (foundRow === -1) return false;

        let hi = matrix[foundRow].length - 1, lo = 0;
        while ( hi >= lo ){ 
            const mid = Math.floor((hi + lo) / 2);
            if(target === matrix[foundRow][mid]){
                return true;
            } else if (target > matrix[foundRow][mid]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return false;
    }
}
