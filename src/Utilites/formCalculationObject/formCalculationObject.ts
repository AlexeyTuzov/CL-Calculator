import { MathOperation } from '../../Modules/Math_Operations/MathOperator';

const formCalculationObject = (currentOperation: string): MathOperation => {
    const mathOperation: MathOperation = {
        a: 0,
        b: 0,
        operator: ''
    }
    let operation = currentOperation;
    const aOperandMatch: RegExpMatchArray | null = operation.match(/^-?[\d.]+/);
    if (aOperandMatch) {
        mathOperation.a = +operation.slice(0, aOperandMatch[0].length);
        operation = operation.slice(aOperandMatch[0].length);
    }
    const operatorMatch: RegExpMatchArray | null = operation.match(/^\D*/);
    if (operatorMatch) {
        let isThereUnaryMinus: RegExpMatchArray | null = operatorMatch[0].match(/-$/);
        if (isThereUnaryMinus) {
            mathOperation.operator = operation.slice(0, operatorMatch[0].length - 1);
            operation = operation.slice(operatorMatch[0].length - 1);
        } else {
            mathOperation.operator = operation.slice(0, operatorMatch[0].length);
            operation = operation.slice(operatorMatch[0].length);
        }
    }
    const bOperandMatch: RegExpMatchArray | null = operation.match(/^-?[\d.]+/);
    if (bOperandMatch) {
        mathOperation.b = +operation.slice(0, bOperandMatch[0].length);
    }
    return mathOperation;
}

export default formCalculationObject;
