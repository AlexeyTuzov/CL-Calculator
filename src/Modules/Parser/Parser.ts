import Calculator from '../Calculator/Calculator';
import OperatorsList from '../Math_Operations/OperatorsList';
import findFirstNestedExp from '../../Utilites/findFirstNestedExpression';

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
            let inputHasOperators: boolean = this.checkOperators();
            if (inputHasOperators) {
                let nestedExpression: string = findFirstNestedExp(input);
                this.calculator.calculate(nestedExpression);
                this.intermediateResult = this.calculator.getResult();
                this.pasteResult(nestedExpression);
            } else {
                this.result = findFirstNestedExp(this.input);
                break;
            }
        }
    }

    public getResult(): string {
        return this.error ? this.error : this.result;
    }

    private checkOperators(): boolean {
        let hasOperators: boolean = false;
        Array.from(this.input).forEach((item: string) => {
            let operatorFound: string | undefined = OperatorsList.find(operator =>
                operator === item &&
                operator != '(' &&
                operator != ')');
            if (operatorFound) {
                hasOperators = true;
            }
        });
        return hasOperators;
    }

    private pasteResult(nestedExpression: string): void {
        this.input = this.input.replace(`(${nestedExpression})`, this.intermediateResult);
    }
}
