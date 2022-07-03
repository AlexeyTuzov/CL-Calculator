import Operators, { IOperator } from '../../Modules/Math_Operations/OperatorsList';
import shieldSymbols from '../shieldSymbols/shieldSymbols';

const checkOperatorsUsage = (expression: string): string => {

    let errorMessage: string = '';

    const allOperatorsSigns = Operators.map(item => item.sign);

    const symbolsArray: RegExpMatchArray | null = expression.match(/[^\d.]+/g);
    if (symbolsArray) {
        symbolsArray.forEach(sequence => {
            const isItOperator = allOperatorsSigns.find(operatorSign => operatorSign === sequence);
            if (!isItOperator) {
                let firstSign: IOperator | undefined;
                let secondSign: IOperator | undefined;
                let theRestOfSequence: string = '';
                Operators.forEach(firstOperator => {
                    const shieldedSign = shieldSymbols(firstOperator.sign);
                    const firstMatch: string = String.raw`^${shieldedSign}`;
                    if (sequence.match(RegExp(firstMatch))) {
                        firstSign = firstOperator;
                        theRestOfSequence = sequence.slice(firstOperator.sign.length);
                    }
                });
                Operators.forEach(secondOperator => {
                    const shieldedSign = shieldSymbols(secondOperator.sign);
                    const secondMatch: string = String.raw`^${shieldedSign}`;
                    if (theRestOfSequence.match(RegExp(secondMatch))) {
                        secondSign = secondOperator;
                        theRestOfSequence = theRestOfSequence.slice(secondOperator.sign.length);
                    }
                });
                if (theRestOfSequence.length > 0 && theRestOfSequence !== '-') {
                    errorMessage = 'Wrong operators statement';
                } else if (theRestOfSequence === '-' && secondSign?.sign === '-') {
                    errorMessage = 'Wrong operators statement';
                } else if (firstSign && secondSign) {
                    if ((firstSign.unaryOnly && secondSign.sign !== '-') ||
                        (!firstSign.unaryOnly && !secondSign.unaryOnly && secondSign.sign !== '-')) {
                        errorMessage = 'Wrong operators statement';
                    }
                } else {
                    errorMessage = 'Incorrect character in expression';
                }
            }
        });
    }

    if (errorMessage) return errorMessage;

    allOperatorsSigns.forEach(item => {
        let shielded = shieldSymbols(item);
        let errorStatement: string = String.raw`.*${shielded}$`;
        if (expression.match(RegExp(errorStatement))) {
            errorMessage = 'Wrong operators statement';
        }
    });

    if (errorMessage) return errorMessage;

    const cantStandFirstOperatorsArray = Operators.filter(item => !item.mightBeFirst).map(item => item.sign);
    cantStandFirstOperatorsArray.forEach(item => {
        let shielded = shieldSymbols(item);
        let errorStatement: string = String.raw`^${shielded}`;
        if (expression.match(RegExp(errorStatement))) {
            errorMessage = 'Wrong operators statement';
        }
    });

    return errorMessage ? errorMessage : 'Correct';
}

export default checkOperatorsUsage;
