import Math_Multiplication from './MathClasses/Math_Multiplication/Math_Multiplication';
import Math_Division from './MathClasses/Math_Division/Math_Division';
import Math_Subtraction from './MathClasses/Math_Subtraction/Math_Subtraction';
import Math_Addition from './MathClasses/Math_Addition/Math_Addition';
import MathClass from './MathClasses/Math/MathClass';

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

    public calculate(mathOperation: MathOperation): void {
        this.mathOperation = mathOperation;
        switch (this.mathOperation.operator) {
            case '+':
                const operation_add = new Math_Addition(this.mathOperation.a, this.mathOperation.b);
                this.operate(operation_add);
                break;
            case '-':
                const operation_subst = new Math_Subtraction(this.mathOperation.a, this.mathOperation.b);
                this.operate(operation_subst);
                break;
            case '*':
                const operation_multi = new Math_Multiplication(this.mathOperation.a, this.mathOperation.b);
                this.operate(operation_multi);
                break;
            case '/':
                const operation_div = new Math_Division(this.mathOperation.a, this.mathOperation.b);
                this.operate(operation_div);
                break;
        }
    }

    public getResult(): string {
        return this.result;
    }

    public getError(): string {
        return this.error;
    }

    private operate(math: MathClass) {
        math.doCalculations();
        const error = math.getError();
        if (error) {
            this.error = error;
        } else {
            this.result = math.getResult().toString();
        }
    }
}
