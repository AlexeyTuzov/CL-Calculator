import MathOperator from '../Math_Operations/MathOperator';
import { MathOperation } from '../Math_Operations/MathOperator';
import findFirstHighPriorityOperation
    from '../../Utilites/findFirstHighPriorityOperation/findFirstHighPriorityOperation';
import checkOperators from '../../Utilites/checkOperators/checkOperators';
import checkOperatorsUsage from '../../Utilites/checkOperatorsUsage/checkOperatorsUsage';
import formCalculationObject from '../../Utilites/formCalculationObject/formCalculationObject';

export default class Calculator {

private expression: string;
private error: string;
private result: string;
private intermediateResult: string;
private mathOperation: MathOperation;
private MathOperator: MathOperator;

    constructor() {
        this.error = '';
        this.expression = '';
        this.result = '';
        this.intermediateResult = '';
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
                    this.mathOperation = formCalculationObject(currentOperation);
                    this.MathOperator.calculate(this.mathOperation);
                    let errorMessage: string = this.MathOperator.getError();
                    if (errorMessage) {
                        this.error = errorMessage;
                        break;
                    } else {
                        this.intermediateResult = this.MathOperator.getResult();
                        this.pasteResult(currentOperation);
                    }
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

    private checkIfOperatorsCorrect(): boolean {
        let checkResult: string = checkOperatorsUsage(this.expression);
        this.error = checkResult === 'Correct' ? '' : checkResult;
        return !this.error;
    }

    private pasteResult(currentOperation: string): void {
        this.expression = this.expression.replace(`${currentOperation}`, this.intermediateResult);
    }
}
