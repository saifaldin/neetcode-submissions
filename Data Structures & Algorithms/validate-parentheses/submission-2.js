class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const open = ['(', '[', '{'];

        for(let i = 0; i < s.length; i++){
            if(open.includes(s[i])) {
                stack.push(s[i]);
            }
            else if (
                (stack.at(-1) === '(' && s[i] === ')') ||
                (stack.at(-1) === '[' && s[i] === ']') ||
                (stack.at(-1) === '{' && s[i] === '}')
                ) {
                    stack.pop();
            }
            else {
                console.log(stack)
                return false
            };
        }
        return stack.length === 0;
    }
}
