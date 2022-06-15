import findFirstNestedExp from './findFirstNestedExpression';

describe('findFirstNestedExpression', () => {

    it('return first nested expression in parentheses', () => {
        expect(findFirstNestedExp('(1+2)*(3+4)')).toBe('1+2');
        expect(findFirstNestedExp('(3+4)+3-((2*(3-4))-1)')).toBe('3+4');
        expect(findFirstNestedExp('((2*(3-4))-1)')).toBe('3-4');
        expect(findFirstNestedExp('(1+(2-3+(5/10)))+2')).toBe('5/10');
        expect(findFirstNestedExp('-1*((2+3)+4)')).toBe('2+3');
        expect(findFirstNestedExp('(((1+2)))')).toBe('1+2');
    });
});
