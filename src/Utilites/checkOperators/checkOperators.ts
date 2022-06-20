import OperatorsList from '../../Modules/Math_Operations/OperatorsList';

const checkOperators = (expression: string): boolean => {
    let isOperators: boolean = false;
    Array.from(expression).forEach((item: string) => {
        let operatorFound: string | undefined = OperatorsList.find(operator =>
            operator === item &&
            operator != '(' &&
            operator != ')');
        if (operatorFound) {
            isOperators = true;
        }
    });
    return isOperators;
}

export default checkOperators;
