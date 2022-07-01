import MathClass from '../Math/MathClass';

export default class Math_Division extends MathClass {
    constructor(a: number, b: number) {
        super(a, b);
    }

    public getResult(): number {
        return this.result;
    }

    protected calculate(): void {
        if (this.b === 0) {
            this.error = 'Divided by zero';
        } else {
            this.result = this.a / this.b;
        }
    }
}
