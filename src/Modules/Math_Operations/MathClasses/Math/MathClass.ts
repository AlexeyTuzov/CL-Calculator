export default abstract class MathClass {

    protected a: number;
    protected b: number;
    protected result: number;
    protected error: string;
    protected coefficient: number;

    protected constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
        this.result = 0;
        this.error = '';
        this.coefficient = 0;
    };

    public getResult(): number {
        if (this.coefficient) this.result /= (Math.pow(10, this.coefficient));
        return this.result;
    }

    public getError(): string {
        return this.error;
    }

    public doCalculations(): void {
        this.normalizeFractions();
        this.checkTheNumbers()
        if (!this.error) {
            this.calculate();
        }
    }

    protected calculate(): void {}

    private normalizeFractions(): void {
        while (this.a.toString().match(/\./) || this.b.toString().match(/\./)) {
            this.a = +(this.a * 10).toFixed(10);
            this.b = +(this.b * 10).toFixed(10);
            this.coefficient++;
        }
    }

    private checkTheNumbers(): void {
        if (this.a > 9007199254740991 ||
            this.b > 9007199254740991 ||
            this.a < -9007199254740991 ||
            this.b < -9007199254740991) {
            this.error = 'One of operands is out of JS-supported safe number range';
        }
    }
}
