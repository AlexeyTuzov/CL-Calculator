import MathOperator from '../Math_Operations/MathOperator';
import { MathOperation } from '../Math_Operations/MathOperator';
import OperatorsList from '../Math_Operations/OperatorsList';
import checkOperators from '../../Utilites/checkOperators/checkOperators';

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
        this.expression = expression;
        while(true) {
            let expHasOperators = checkOperators(this.expression);
            if (expHasOperators) {
                break;
            } else {
                this.result = this.expression;
                break;
            }
        }
    }

    public getResult(): string {
        return this.error ? this.error : this.result;
    }

    private findFirstHighPriorityOperation(): string {

    }

    private checkOperatorsStatement(): boolean {

    }

    private isDividedByZero(): boolean {

    }


}
