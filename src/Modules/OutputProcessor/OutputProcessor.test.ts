import OutputProcessor from './OutputProcessor';

describe('Output Processor', () => {

    jest.mock('./OutputProcessor');
    let mockOutputProcessor: OutputProcessor;
    let spyConsole: jest.SpyInstance;

    beforeEach(() => {
        mockOutputProcessor = new OutputProcessor();
        spyConsole = jest.spyOn(console, 'log');
    });

    it('set calculations result', () => {
        mockOutputProcessor.setResult(42);
        mockOutputProcessor.logResult();
        expect(spyConsole).toBeCalledWith('Result is: 42');

    });
    it('log calculations result', () => {
        mockOutputProcessor.logResult();
        expect(spyConsole).toBeCalled();
    });
    it('set error message', () => {
       mockOutputProcessor.setError('Oops! Some error occurred!');
       mockOutputProcessor.logError();
       expect(spyConsole).toBeCalledWith('Oops! Some error occurred!');
    });
    it('log error message', () => {
        mockOutputProcessor['errorMessage'] = 'Oops! Some error occurred!';
        mockOutputProcessor.logError();
        expect(spyConsole).toBeCalledWith('Oops! Some error occurred!');
    });
});
