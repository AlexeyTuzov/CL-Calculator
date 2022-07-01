import Math_Multiplication from './Math_Multiplication';

describe('Math_Multiplication', () => {

    let instance: Math_Multiplication;

    it('adding two numbers', () => {
        instance = new Math_Multiplication(42, 53);
        instance.doCalculations();
        expect(instance.getResult()).toBe(2226);
        instance = new Math_Multiplication(0.78, 0.22);
        instance.doCalculations();
        expect(instance.getResult()).toBe(0.1716);
    });
    it('catch an error if one of operands is out of safe numbers range', () => {
        instance = new Math_Multiplication(9007199254740995, 42);
        instance.doCalculations();
        expect(instance.getError()).toBe('One of operands is out of JS-supported safe number range');
    });
});
