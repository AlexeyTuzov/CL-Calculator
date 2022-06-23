import Operators, { IOperator } from '../../../Modules/Math_Operations/OperatorsList';
import shieldSymbols from '../../shieldSymbols/shieldSymbols';

const checkDuplicatedOperators = (expression: string): boolean => {
    const foundOperatorsArray: IOperator[] | null = [];
    let operatorsString: string = expression;
    while (operatorsString.length > 0) {
        Operators.forEach(operator => {
            let shieldedSign = shieldSymbols(operator.sign)
            let operatorMatch: string = String.raw`^${shieldedSign}`;
            if (operatorsString.match(RegExp(operatorMatch))) {
                operatorsString = operatorsString.slice(operator.sign.length);
                foundOperatorsArray.push(operator);
            }
        });
        if (foundOperatorsArray.length === 0) {
            break;
        }
    }
    let error: boolean = false;
    foundOperatorsArray.reduce((prev: IOperator | null, current: IOperator) => {
        if (prev && current) {
            error = error || (prev.unaryOnly && !current.mightBeFirst);
            error = error || (prev.unaryOnly && current.unaryOnly);
        }
        return current;
    }, null);

    return error;
}

export default checkDuplicatedOperators
