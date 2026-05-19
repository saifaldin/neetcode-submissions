class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();
        s.split('').forEach(num => sMap.has(num) ? sMap.set(num, sMap.get(num) + 1): sMap.set(num, 1));
        t.split('').forEach(num => tMap.has(num) ? tMap.set(num, tMap.get(num) + 1): tMap.set(num, 1));        
        for (const value of sMap.keys()){
            console.log(value, sMap.get(value), tMap.get(value) );
            if (sMap.get(value) !== tMap.get(value)){
                return false;
            }else{
                sMap.delete(value);
                tMap.delete(value);
            }
        }
        console.log([...sMap.values(), ...tMap.values()]);
        return  [...sMap.values(), ...tMap.values()].length === 0;
    }
}


