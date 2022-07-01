import Math_Subtraction from './Math_Subtraction';

describe('Math_Subtraction', () => {

    let instance: Math_Subtraction;

    it('adding two numbers', () => {
        instance = new Math_Subtraction(42, 53);
        instance.doCalculations();
        expect(instance.getResult()).toBe(-11);
        instance = new Math_Subtraction(0.78, 0.22);
        instance.doCalculations();
        expect(instance.getResult()).toBe(0.56);
    });
    it('catch an error if one of operands is out of safe numbers range', () => {
        instance = new Math_Subtraction(9007199254740995, 42);
        instance.doCalculations();
        expect(instance.getError()).toBe('One of operands is out of JS-supported safe number range');
    });
});
