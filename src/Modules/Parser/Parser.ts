import Calculator from '../Calculator/Calculator';
import findFirstNestedExp from '../../Utilites/findFirstNestedExpression/findFirstNestedExpression';
import checkOperators from '../../Utilites/checkOperators/checkOperators';

export default class Parser {

    private input: string;
    private error: string;
    private result: string;
    private intermediateResult: string;
    private calculator: Calculator;

    constructor() {
        this.input = '';
        this.error = '';
        this.result = '';
        this.intermediateResult = '';
        this.calculator = new Calculator();
    }

    public parseUserInput(input: string): void {
        this.input = input;
        while (true) {
            let inputHasOperators: boolean = checkOperators(this.input);
            if (inputHasOperators) {
                let nestedExpression: string = findFirstNestedExp(input);
                this.calculator.calculate(nestedExpression);
                let errorMessage: string = this.calculator.getError();
                if (errorMessage) {
                    this.error = errorMessage;
                    break;
                } else {
                    this.intermediateResult = this.calculator.getResult();
                    this.pasteResult(nestedExpression);
                }
            } else {
                this.result = findFirstNestedExp(this.input);
                break;
            }
        }
    }

    public getResult(): string {
        return this.error ? this.error : this.result;
    }

    private pasteResult(nestedExpression: string): void {
        this.input = this.input.replace(`(${nestedExpression})`, this.intermediateResult);
    }
}
