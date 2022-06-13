export default class Calculator {

private expression: string;
private error: string;
private result: string;
private mathOperation: {
    a: number,
    b: number,
    operator: string
}

    constructor() {
        this.error = '';
        this.expression = '';
        this.result = '';
        this.mathOperation = {
            a: 0,
            b: 0,
            operator: ''
        };
    }

    public calculate(expression: string): void {

    }

    public getResult(): string {
        return this.error ? this.error : this.result;
    }
}