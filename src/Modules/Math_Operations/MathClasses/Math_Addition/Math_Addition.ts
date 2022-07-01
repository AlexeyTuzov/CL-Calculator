import MathClass from '../Math/MathClass';

export default class Math_Addition extends MathClass {
    constructor(a: number, b: number) {
        super(a, b);
    }

    protected calculate(): void {
        this.result = this.a + this.b;
    }
}
