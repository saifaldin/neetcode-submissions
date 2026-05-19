class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedToStrs = {};
        for(const str of strs) {
            const sortedStr = str.split('').sort().join();
            if(sortedToStrs[sortedStr]) sortedToStrs[sortedStr].push(str);
            else sortedToStrs[sortedStr] = [str];
        }
        return Object.values(sortedToStrs);
    }
}
