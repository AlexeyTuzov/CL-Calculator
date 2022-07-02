import Main from './Main';
import InputValidator from '../InputValidator/InputValidator';
import InputProcessor from '../InputProcessor/InputProcessor';
import OutputProcessor from '../OutputProcessor/OutputProcessor';
import Parser from '../Parser/Parser';

let mockValidate = jest.fn();
let mockGetValidationResult = jest.fn();
let mockAsk = jest.fn();
let mockGetInput = jest.fn();
let mockAskForRepeat = jest.fn();
let mockLogResult = jest.fn();
let mockLogError = jest.fn();
let mockSetResult = jest.fn();
let mockSetError = jest.fn();
let mockParseUserInput = jest.fn();
let mockGetResult = jest.fn();

jest.mock('../InputValidator/InputValidator', () => {
    return jest.fn().mockImplementation(() => {
        return {
            validate: mockValidate,
            getValidationResult: mockGetValidationResult
        }
    })
});
jest.mock('../InputProcessor/InputProcessor', () => {
    return jest.fn().mockImplementation(() => {
        return {
            ask: mockAsk,
            getInput: mockGetInput,
            askForRepeat: mockAskForRepeat
        }
    })
});
jest.mock('../OutputProcessor/OutputProcessor', () => {
    return jest.fn().mockImplementation(() => {
        return {
            logResult: mockLogResult,
            logError: mockLogError,
            setResult: mockSetResult,
            setError: mockSetError
        }
    })
});
jest.mock('../Parser/Parser', () => {
    return jest.fn().mockImplementation(() => {
        return {
            parseUserInput: mockParseUserInput,
            getResult: mockGetResult
        }
    })
});

describe('Main', () => {

    let mockMain: Main;

    beforeEach(() => {
        mockMain = new Main();
    });

    afterEach(() => {
        mockValidate.mockRestore();
        mockGetValidationResult.mockRestore();
        mockAsk.mockRestore();
        mockGetInput.mockRestore();
        mockAskForRepeat.mockRestore();
        mockLogResult.mockRestore();
        mockLogError.mockRestore();
        mockSetResult.mockRestore();
        mockSetError.mockRestore();
        mockParseUserInput.mockRestore();
        mockGetResult.mockRestore();
    });

    it('create instances of required classes', () => {
        expect(InputProcessor).toHaveBeenCalledTimes(1);
        expect(InputValidator).toHaveBeenCalledTimes(1);
        expect(OutputProcessor).toHaveBeenCalledTimes(1);
        expect(Parser).toHaveBeenCalledTimes(1);
    });

    it('provide right sequence of commands', () => {
        mockMain.start();
        expect(mockAsk).toHaveBeenCalledTimes(1);
        expect(mockValidate).toHaveBeenCalledTimes(1);
        expect(mockParseUserInput).toHaveBeenCalledTimes(1);
        expect(mockSetResult).toHaveBeenCalledTimes(1);
        expect(mockLogResult).toHaveBeenCalledTimes(1);
    });
    it('log error if it has been occurred', () => {
        mockGetValidationResult.mockImplementationOnce(() => 'Divided by zero');
        mockMain.start();
        expect(mockAsk).toHaveBeenCalledTimes(1);
        expect(mockGetValidationResult).toHaveBeenCalledTimes(1);
        expect(mockSetError).toHaveBeenCalledTimes(1);
        expect(mockLogError).toHaveBeenCalledTimes(1);
    });

});
