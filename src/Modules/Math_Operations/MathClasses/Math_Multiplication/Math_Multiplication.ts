import MathClass from '../Math/MathClass';

export default class Math_Multiplication extends MathClass {
    constructor(a: number, b: number) {
        super(a, b);
    }

    public getResult(): number {
        if (this.coefficient) this.result /= (Math.pow(100, this.coefficient));
        return this.result;
    }

    protected calculate(): void {
        this.result = this.a * this.b;
    }
}
