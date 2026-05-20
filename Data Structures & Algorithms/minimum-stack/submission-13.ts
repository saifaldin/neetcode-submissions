class MinStack {
    stack: number[];
    min: number;
    length: number;
    minStack: number[];
    constructor() {
        this.stack = [];
        this.min = Infinity;
        this.length = 0;
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        const tempMin = Math.min(this.min, val);
        if(tempMin !== this.min || val === this.min){
            this.min = tempMin;
            this.minStack.push(tempMin);
        }
        this.length++;
    }

    /**
     * @return {void}
     */
    pop(): void {
        const last = this.stack.pop();
        if (this.min === last){
            this.minStack.pop();
            this.min = typeof this.minStack.at(-1) === 'number' ? this.minStack.at(-1) : Infinity;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;   
    }
}
