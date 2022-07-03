import Operators from '../../Modules/Math_Operations/OperatorsList';
import shieldSymbols from '../shieldSymbols/shieldSymbols';

const findFirstHighPriorityOperation = (expression: string): string => {

    let sortedByPriority = Operators.sort((a, b) => {
        return a.priority - b.priority;
    });

    let sortedByUnary = sortedByPriority.sort((a, b) => {
        if (a.unaryOnly && !b.unaryOnly) return -1;
        if (!a.unaryOnly && b.unaryOnly) return 1;
        else return 0;
    });

    let operationExpressions = sortedByUnary.map(operator => {
        let shieldedSign = shieldSymbols(operator.sign);
        if (operator.unaryOnly) return String.raw`${shieldedSign}(-*\d+\.?\d*|\d+)`;
        else  return String.raw`(-?\d+\.?\d*|\d+)${shieldedSign}(-?\d+\.?\d*|\d+)`;
    });

    let matchArray: RegExpMatchArray | null;
    let highPriorityExpression: string = '';

    operationExpressions.find(item => {
        matchArray = expression.match(RegExp(item));
        if (matchArray) {
            highPriorityExpression = matchArray[0];
            return matchArray[0];
        } else {
            return '';
        }
    });

    return highPriorityExpression;
}

export default findFirstHighPriorityOperation;
