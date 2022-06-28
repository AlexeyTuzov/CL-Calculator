import MathOperator from '../Math_Operations/MathOperator';
import { MathOperation } from '../Math_Operations/MathOperator';
import Operators from '../Math_Operations/OperatorsList';
import findFirstHighPriorityOperation
    from '../../Utilites/findFirstHighPriorityOperation/findFirstHighPriorityOperation';
import checkOperators from '../../Utilites/checkOperators/checkOperators';
import checkOperatorsUsage from '../../Utilites/checkOperatorsUsage/checkOperatorsUsage';

export default class Calculator {

private expression: string;
private error: string;
private result: string;
private mathOperation: MathOperation;
private MathOperator: MathOperator;

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
                if (this.checkIfOperatorsCorrect()) {
                    let currentOperation = findFirstHighPriorityOperation(this.expression);
                } else {
                    break;
                }
            } else {
                this.result = this.expression;
                break;
            }
        }
    }

    public getResult(): string {
        return this.result;
    }

    public getError(): string {
        return this.error;
    }

    private formCalculationsObject(currentOperation: string): void {
        let
    }

    private checkIfOperatorsCorrect(): boolean {
        let checkResult: string = checkOperatorsUsage(this.expression);
        this.error = checkResult === 'Correct' ? '' : checkResult;
        return !this.error;
    }


}
