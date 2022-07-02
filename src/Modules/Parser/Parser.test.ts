import Calculator from '../Calculator/Calculator';
import Parser from './Parser';

let mockGetError = jest.fn();
let mockCalculate = jest.fn();
let mockGetResult = jest.fn();
jest.mock('../Calculator/Calculator', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getResult: mockGetResult,
            calculate: mockCalculate,
            getError: mockGetError
        }
    });
});

describe('Parser', () => {

    let mockParser: Parser;

    beforeEach(() => {
        mockParser = new Parser();
    });

    afterEach(() => {
        mockGetResult.mockRestore();
        mockCalculate.mockRestore();
        mockGetError.mockRestore();
    })

    it('create an instance of Calculator', () => {
        expect(Calculator).toHaveBeenCalledTimes(1);
    });
    it('get result after calculations', () => {
        mockParser['result'] = '42';
        expect(mockParser.getResult()).toBe('42');
    });
    it('return error if it has been occurred', () => {
        mockGetError.mockImplementationOnce(() => 'Calculations went wrong');
        mockParser.parseUserInput('1/0');
        expect(mockParser.getResult()).toBe('Calculations went wrong');
    });

    it('return an input in case of no math operators', () => {
        mockParser.parseUserInput('(42)');
        expect(mockParser.getResult()).toBe('42');
    });
    it('parse input and save a result', () => {
        mockGetResult.mockImplementationOnce(() => '42');
        mockParser.parseUserInput('(2*21)');
        expect(mockCalculate).toHaveBeenCalledTimes(1);
        expect(mockCalculate).toHaveBeenCalledWith('2*21');
        expect(mockGetResult).toHaveBeenCalledTimes(1);
        expect(mockParser.getResult()).toBe('42');
    });
    it('remove redundant parentheses', () => {
        mockParser['input'] = '(6)';
        mockParser['intermediateResult'] = '6';
        mockParser['pasteResult']('6');
        expect(mockParser['input']).toBe('6');
    });
    it('parse input without parentheses and save a result', () => {
        mockGetResult.mockImplementationOnce(() => '23');
        mockParser.parseUserInput('2+21');
        expect(mockCalculate).toHaveBeenCalledTimes(1);
        expect(mockCalculate).toHaveBeenCalledWith('2+21');
        expect(mockGetResult).toHaveBeenCalledTimes(1);
        expect(mockParser.getResult()).toBe('23');
    });
});
