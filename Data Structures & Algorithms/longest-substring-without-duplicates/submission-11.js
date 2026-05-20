class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 1;
        let maxL = 1;
        let substr = s[l];
        while ( r < s.length ){ 
            if (!substr.includes(s[r])){ 
                substr = s.slice(l, r + 1);
                maxL = Math.max(maxL, r - l + 1);
            } else {
                l++;
                r = l;
                substr = s[l];
            }
            r++;
        }
        return s.length && maxL;
    }
}
