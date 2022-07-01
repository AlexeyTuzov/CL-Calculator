import Math_Division from './Math_Division';

describe('Math_Division', () => {

    let instance: Math_Division;

    it('dividing two numbers', () => {
        instance = new Math_Division(42, 6);
        instance.doCalculations();
        expect(instance.getResult()).toBe(7);
        instance = new Math_Division(0.96, 3);
        instance.doCalculations();
        expect(instance.getResult()).toBe(0.32);
    });
    it('catch an error if one of operands is out of safe numbers range', () => {
        instance = new Math_Division(9007199254740995, 42);
        instance.doCalculations();
        expect(instance.getError()).toBe('One of operands is out of JS-supported safe number range');
    });
    it('catch an error if divided by zero', () => {
       instance = new Math_Division(42, 0);
       instance.doCalculations();
       expect(instance.getError()).toBe('Divided by zero');
    });
});
