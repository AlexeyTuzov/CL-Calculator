import MathOperator from './MathOperator';
import Math_Addition from './MathClasses/Math_Addition/Math_Addition';
import Math_Division from './MathClasses/Math_Division/Math_Division';
import Math_Multiplication from './MathClasses/Math_Multiplication/Math_Multiplication';
import Math_Subtraction from './MathClasses/Math_Subtraction/Math_Subtraction';

let mockDoCalculations = jest.fn();
let mockGetResult = jest.fn();
let mockGetError = jest.fn();

jest.mock('./MathClasses/Math_Addition/Math_Addition', () => {
    return jest.fn().mockImplementation(() => {
        return {
            doCalculations: mockDoCalculations,
            getResult: mockGetResult,
            getError: mockGetError
        }
    });
});
jest.mock('./MathClasses/Math_Division/Math_Division', () => {
    return jest.fn().mockImplementation(() => {
        return {
            doCalculations: mockDoCalculations,
            getResult: mockGetResult,
            getError: mockGetError
        }
    });
});
jest.mock('./MathClasses/Math_Multiplication/Math_Multiplication', () => {
    return jest.fn().mockImplementation(() => {
        return {
            doCalculations: mockDoCalculations,
            getResult: mockGetResult,
            getError: mockGetError
        }
    });
});
jest.mock('./MathClasses/Math_Subtraction/Math_Subtraction', () => {
    return jest.fn().mockImplementation(() => {
        return {
            doCalculations: mockDoCalculations,
            getResult: mockGetResult,
            getError: mockGetError
        }
    });
});


describe('MathOperator', () => {

    let mathOperator: MathOperator;

    beforeEach(() => {
        mathOperator = new MathOperator();
    });

    afterEach(() => {
        mockDoCalculations.mockRestore();
        mockGetResult.mockRestore();
        mockGetError.mockRestore();
    })

    it('create addition math operation', () => {
        mockGetResult.mockImplementationOnce(() => 66);
        mockGetError.mockImplementationOnce(() => '');
        mathOperator.calculate({
            a: 42,
            b: 24,
            operator: '+'
        });
        expect(Math_Addition).toHaveBeenCalledTimes(1);
        expect(mathOperator.getResult()).toBe('66');
    });
    it('create subtraction math operation', () => {
        mockGetResult.mockImplementationOnce(() => 18);
        mockGetError.mockImplementationOnce(() => '');
        mathOperator.calculate({
            a: 42,
            b: 24,
            operator: '-'
        });
        expect(Math_Subtraction).toHaveBeenCalledTimes(1);
        expect(mathOperator.getResult()).toBe('18');
    });
    it('create multiplication math operation', () => {
        mockGetResult.mockImplementationOnce(() => 25);
        mockGetError.mockImplementationOnce(() => '');
        mathOperator.calculate({
            a: 5,
            b: 5,
            operator: '*'
        });
        expect(Math_Multiplication).toHaveBeenCalledTimes(1);
        expect(mathOperator.getResult()).toBe('25');
    });
    it('create division math operation', () => {
        mockGetResult.mockImplementationOnce(() => 5);
        mockGetError.mockImplementationOnce(() => '');
        mathOperator.calculate({
            a: 125,
            b: 25,
            operator: '/'
        });
        expect(Math_Division).toHaveBeenCalledTimes(1);
        expect(mathOperator.getResult()).toBe('5');
    });
    it('catch an error if it is occurred during the calculations', () => {
       mockGetError.mockImplementationOnce(() => 'One of operands is out of JS-supported safe number range');
       mathOperator.calculate( {
           a: 9007199254740995,
           b: 42,
           operator: '+'
       });
       expect(mathOperator.getError()).toBe('One of operands is out of JS-supported safe number range');
    });
});
