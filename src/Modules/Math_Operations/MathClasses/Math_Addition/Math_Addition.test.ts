import Math_Addition from './Math_Addition';

describe('Math_Addition', () => {

    let instance: Math_Addition;

    it('adding two numbers', () => {
        instance = new Math_Addition(42, 53);
        instance.doCalculations();
        expect(instance.getResult()).toBe(95);
        instance = new Math_Addition(0.78, 0.22);
        instance.doCalculations();
        expect(instance.getResult()).toBe(1);
    });
    it('catch an error if one of operands is out of safe numbers range', () => {
       instance = new Math_Addition(9007199254740995, 42);
       instance.doCalculations();
       expect(instance.getError()).toBe('One of operands is out of JS-supported safe number range');
    });
});
