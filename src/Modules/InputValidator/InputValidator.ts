import OperatorsList from '../Math_Operations/OperatorsList';

export default class InputValidator {

    private error: string;

    constructor() {
        this.error = '';
    }

    public validate(input: string) {
        this.checkParentheses(input);
        this.checkFractions(input);
    }

    public getValidationResult(): string {
        return this.error;
    }

    private checkParentheses(input: string): void {

        let parenthesesCount: number = 0;
        let parenthesesArray: RegExpMatchArray | null = input.match(/[()]/g);
        parenthesesArray?.forEach(item => {
            if (item === '(') parenthesesCount++;
            else parenthesesCount--;
            if (parenthesesCount < 0) this.error = 'Wrong parentheses statement!';
        });
        if (parenthesesCount != 0) {
            this.error = 'Wrong parentheses statement!';
        }

        if (this.error) return;

        Array.from(input).reduce((prev: string, current: string) => {
            if (prev === ')' && current === '(') {
                this.error = 'No operator between parentheses';
            }
            if (prev === '(' && current === ')') {
                this.error = 'Empty parentheses in an expression';
            }
            return current;
        }, '');
    }

    private checkFractions(input: string): void {

        let dotsDuplicationMatch: RegExpMatchArray | null = input.match(/\d+\.\d+\./);
        if (dotsDuplicationMatch) {
            this.error = 'Duplicated decimal dot in an expression';
        }

        let dotIncorrectMatch: RegExpMatchArray | null = input.match(/\D\.\d|\d\.\D/);
        if (dotIncorrectMatch) {
            this.error = 'Wrong decimal fraction in an expression';
        }
    }
}
