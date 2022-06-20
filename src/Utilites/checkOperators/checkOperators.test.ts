import checkOperators from './checkOperators';

describe('checkOperators', () => {

    it('check if there are operators in an expression', () => {
        expect(checkOperators('1+2')).toBe(true);
        expect(checkOperators('(12)*(1+2)')).toBe(true);
        expect(checkOperators('42')).toBe(false);
        expect(checkOperators('(21)(32)')).toBe(false);
    });
});
