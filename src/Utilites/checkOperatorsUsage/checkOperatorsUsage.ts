import Operators from '../../Modules/Math_Operations/OperatorsList';
import shieldSymbols from '../shieldSymbols/shieldSymbols';

const checkOperatorsUsage = (expression: string): string => {

    let errorMessage: string = '';

    const allOperatorsArray = Operators.map(item => item.sign);

    const symbolsArray: RegExpMatchArray | null = expression.match(/[^\d.]+/g);
    if (symbolsArray) {
        const withoutParentheses = symbolsArray.map(item => item.replace(/[()]/g, '' ));
        const withoutEmptyElements = withoutParentheses.filter(item => item !== '');
        withoutEmptyElements.forEach(item => {
            const isItOperator = allOperatorsArray.find(operator => operator === item);
            if (!isItOperator) {
                errorMessage = 'Incorrect character in expression';
            }
        });
    }

    if (errorMessage) return errorMessage;

    const unaryOnlyOperatorsArray = Operators.filter(item => item.unaryOnly).map(item => item.sign);
    unaryOnlyOperatorsArray.forEach(item => {
        let shielded = shieldSymbols(item);
        let errorStatement: string = String.raw`.*${shielded}($|\))`;
        if (expression.match(RegExp(errorStatement))) {
            errorMessage = 'Wrong unary only operators statement';
        }
    });

    if (errorMessage) return errorMessage;

    const cantStandFirstOperatorsArray = Operators.filter(item => !item.mightBeFirst).map(item => item.sign);
    cantStandFirstOperatorsArray.forEach(item => {
        let shielded = shieldSymbols(item);
        let errorStatement: string = String.raw`(^|\()${shielded}`;
        if (expression.match(RegExp(errorStatement))) {
            errorMessage = 'Wrong operators statement';
        }
    });

    return errorMessage ? errorMessage : 'Correct';
}

export default checkOperatorsUsage;
