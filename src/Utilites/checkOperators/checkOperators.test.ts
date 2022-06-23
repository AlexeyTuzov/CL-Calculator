import checkOperators from './checkOperators';

describe('checkOperators', () => {

    it('check if there are operators in expression', () => {
        expect(checkOperators('1+2')).toBe(true);
        expect(checkOperators('(0.12)*(1+2)')).toBe(true);
        expect(checkOperators('42')).toBe(false);
        expect(checkOperators('(21)(32.5)')).toBe(false);
        expect(checkOperators('-42')).toBe(false);
        expect(checkOperators('(-0.42)')).toBe(false);
        expect(checkOperators('-0.42-(-0.5)')).toBe(true);
    });
});
