class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sSanitized = s.replaceAll(/\W/g, '').toLowerCase();
        console.log(sSanitized);
        for(let p1 = 0, p2 = sSanitized.length - 1; p1 < p2; p1++ , p2--){
            console.log(p1, p2)
            if(sSanitized[p1] !== sSanitized[p2]) return false;
        }
        return true;
    }
}
