class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        const operands = ['+', '-', '*', '/'];
        for(let i = 0; i < tokens.length; i++){
            if(operands.includes(tokens[i])){
                const c1 = stack.pop();
                const c2 = stack.pop();
                stack.push(parseInt(eval(`${c2} ${tokens[i]} ${c1}`)))
            } else {
                stack.push(tokens[i]);
            }
        }
        return stack[0];
    }
}
