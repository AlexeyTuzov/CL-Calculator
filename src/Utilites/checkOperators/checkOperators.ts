const checkOperators = (expression: string): boolean => {
    let isOperators: boolean = false;
    let nonNumericSymbol: RegExp = /[^\d.()]/;

    Array.from(expression).reduce((prev: string, current: string) => {
        if (current.match(nonNumericSymbol)) {
            isOperators = isOperators || !(current === '-' && prev === '' || prev === '(');
        }
        return current;
    }, '');
    return isOperators;
}

export default checkOperators;
