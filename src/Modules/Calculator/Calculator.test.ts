import Calculator from './Calculator';
import MathOperator from '../Math_Operations/MathOperator';

jest.mock('../Math_Operations/MathOperator');

describe('Calculator', () => {

    let mockCalculator: Calculator;

    beforeEach(() => {
        mockCalculator = new Calculator();
    });

    it('create an instance of Math Operator', () => {
        expect(MathOperator).toHaveBeenCalledTimes(1);
    });
    it('get result after calculations', () => {
        mockCalculator['result'] = '42';
        expect(mockCalculator.getResult()).toBe('42');
    });
    it('return error if it has been occurred', () => {
        mockCalculator['result'] = 'NaN';
        mockCalculator['error'] = 'Calculations went wrong';
        expect(mockCalculator.getResult()).toBe('Calculations went wrong');
    });
    it('return an incoming expression if no operators are found', () => {
        mockCalculator.calculate('42');
        expect(mockCalculator.getResult()).toBe('42');
    });
    it('return an error if divided by zero', () => {
        mockCalculator['mathOperation'] = {
            a: 2,
            b: 0,
            operator: '/'
        };
        expect(mockCalculator.getResult()).toBe('Divided by zero');
    });
    it('return an error in case of wrong operators statement', () => {
        mockCalculator.calculate('2+4*');
        expect(mockCalculator.getResult()).toBe('Wrong operators statement');
        mockCalculator.calculate('/2+4');
        expect(mockCalculator.getResult()).toBe('Wrong operators statement');
    });
    it('paste 0 as first argument if exp begins with + or -', () => {
        mockCalculator.calculate('-2');
        expect(mockCalculator['MathOperator'].calculate).toHaveBeenCalledWith({ a: 0, b: 2, operator: '-' });
    });
    it('define operators priority', () => {
        mockCalculator.calculate('-2+3*4');
        expect(mockCalculator['MathOperator'].calculate).toHaveBeenCalledWith({ a: 3, b: 4, operator: '*' });
    });
    it('work with a fractions', () => {
        mockCalculator.calculate('0.2+0.1');
        expect(mockCalculator['MathOperator'].calculate).toHaveBeenCalledWith({ a: 0.2, b: 0.1, operator: '+' });
    });
});
