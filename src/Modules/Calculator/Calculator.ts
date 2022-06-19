import MathOperator from '../Math_Operations/MathOperator';
import { MathOperation } from '../Math_Operations/MathOperator';

export default class Calculator {

private expression: string;
private error: string;
private result: string;
private mathOperation: MathOperation;
private MathOperator: MathOperator

    constructor() {
        this.error = '';
        this.expression = '';
        this.result = '';
        this.mathOperation = {
            a: 0,
            b: 0,
            operator: ''
        };
        this.MathOperator = new MathOperator();
    }

    public calculate(expression: string): void {

    }

    public getResult(): string {
        return this.error ? this.error : this.result;
    }
}
