import MathClass from './MathClass';

describe('Math class (abstract)', () => {

    class SomeOperation extends MathClass {
        constructor(a: number, b: number) {
            super(a, b);
            this.a = a;
            this.b = b;
        }

        protected calculate() {
            this.setResult(this.a + this.b);
        }
    }

    let someOperationInstance: SomeOperation;

    it('normalize fractions', () => {
        someOperationInstance = new SomeOperation(0.1, 0.2);
        someOperationInstance.doCalculations();
        expect(someOperationInstance.getResult()).toBe(0.3);
        someOperationInstance = new SomeOperation(0.123, 0.321);
        someOperationInstance.doCalculations();
        expect(someOperationInstance.getResult()).toBe(0.444);
    });
    it('catch an error if one of operands is out of safe numbers range', () => {
        someOperationInstance = new SomeOperation(123, 9007199254740995);
        someOperationInstance.doCalculations();
        expect(someOperationInstance.getError()).toBe('One of operands is out of JS-supported safe number range');
        someOperationInstance = new SomeOperation(-9007199254740995, 42);
        someOperationInstance.doCalculations();
        expect(someOperationInstance.getError()).toBe('One of operands is out of JS-supported safe number range');
    })

});
