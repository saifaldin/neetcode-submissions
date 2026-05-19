class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sarr = s.split('').sort();
        const tarr = t.split('').sort();
        if (JSON.stringify(sarr) === JSON.stringify(tarr)) return true;
        return false;
    }
}


