export interface MathOperation {
    a: number;
    b: number;
    operator: string;
}

export default class MathOperator {

    private mathOperation: MathOperation;
    private error: string;
    private result: string;

    constructor() {
        this.mathOperation = {
            a: 0,
            b: 0,
            operator: ''
        };
        this.error = '';
        this.result = '';
    }

    public calculate(operation: MathOperation): string {
        return this.result;
    }

    public getResult(): string {
        return this.result;
    }

    public getError(): string {
        return this.error;
    }

}
