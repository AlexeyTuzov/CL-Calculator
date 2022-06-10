import OutputProcessor from './OutputProcessor';

describe('Output Processor', () => {

    let mockOutputProcessor: OutputProcessor;
    const spyConsole = jest.spyOn(console, 'log');
    jest.mock('./OutputProcessor');

    beforeEach(() => {
        mockOutputProcessor = new OutputProcessor();
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
    it('log error message', () => {
        mockOutputProcessor['errorMessage'] = 'Oops! Some error occurred!';
        mockOutputProcessor.logError();
        expect(spyConsole).toBeCalledWith('Oops! Some error occurred!');
    });
});
