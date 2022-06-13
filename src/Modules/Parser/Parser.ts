import Calculator from "../Calculator/Calculator";
import OperatorsList from "../Math_Operations/OperatorsList";

export default class Parser {

    private input: string;
    private error: string;
    private result: string;
    private calculator: Calculator;
    

    constructor() {
        this.input = '';
        this.error = '';
        this.result = '';
        this.calculator = new Calculator();
    }

    public parseUserInput(input: string): void {
        this.checkOperators();
    }

    public getResult(): string {
        return this.result;
    }

    private checkOperators() {

    }

    private calculateMostNestedExpression(): void {

    }

    private findMostNestedExpression(expression: string): string {
        return ''
    }



}