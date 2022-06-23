import shieldSymbols from './shieldSymbols';

describe ('Shield exception symbols for RegExp', () => {

    it('shield special symbols for RegExp', () => {
        expect(shieldSymbols('1[2]3'))
            .toBe('1\\[2\\]3');
        expect(shieldSymbols('1+2/3*4'))
            .toBe('1\\+2\\/3\\*4');
        expect(shieldSymbols('1^2$3|4?5'))
            .toBe('1\\^2\\$3\\|4\\?5');
    });
});
