import MathOperator from '../Math_Operations/MathOperator';
import Calculator from './Calculator';

let mockCalculate = jest.fn();
let mockGetResult = jest.fn();
let mockGetError = jest.fn();
jest.mock('../Math_Operations/MathOperator', () => {
    return jest.fn().mockImplementation(() => {
        return {
            calculate: mockCalculate,
            getResult: mockGetResult,
            getError: mockGetError
        }
    });
});

describe('Calculator', () => {

    let mockCalculator: Calculator;

    beforeEach(() => {
        mockCalculator = new Calculator();
    });

    afterEach(() => {
       mockCalculate.mockRestore();
       mockGetResult.mockRestore();
       mockGetError.mockRestore();
    });

    it('create an instance of Math Operator', () => {
        expect(MathOperator).toHaveBeenCalledTimes(1);
    });
    it('get result after calculations', () => {
        mockCalculator['result'] = '42';
        expect(mockCalculator.getResult()).toBe('42');
    });
    it('return error in case of wrong symbol in expression', () => {
        mockGetError.mockImplementationOnce(() => 'Incorrect character in expression');
        mockCalculator.calculate('qw42');
        expect(mockCalculator.getError()).toBe('Incorrect character in expression');
    });
    it('return error in case of Math Operator error', () => {
        mockGetError.mockImplementationOnce(() => 'Divided by zero');
        mockCalculator.calculate('42/0');
        expect(mockCalculator.getError()).toBe('Divided by zero');
    })
    it('return an incoming expression if no operators are found', () => {
        mockCalculator.calculate('42');
        expect(mockCalculator.getResult()).toBe('42');
    });
    it('return an incoming expression if only operator is unary minus', () => {
        mockCalculator.calculate('-42');
        expect(mockCalculator.getResult()).toBe('-42');
    });

    it('create Math Operation object and pass correct data into it', () => {
        mockGetResult.mockImplementationOnce(() => '66.5');
        mockCalculator.calculate('42+24.5');
        expect(mockCalculate).toHaveBeenCalledTimes(1);
        expect(mockCalculate).toHaveBeenCalledWith({ a: 42, b: 24.5, operator: '+' });
        expect(mockCalculator.getResult()).toBe('66.5');
    });
});
