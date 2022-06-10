import InputProcessor from './InputProcessor';
import readline from 'readline-sync';

describe('Input Processor:', () => {

    let mockInputProcessorInstance: InputProcessor;
    readline.question = jest.fn();
    readline.keyInYN = jest.fn();
    jest.mock('./InputProcessor');

    beforeEach(() => {
        mockInputProcessorInstance = new InputProcessor();
    })

    it('ask user for an expression to calculate', () => {
        mockInputProcessorInstance.ask();
        expect(readline.question).toBeCalled();
    });
    it('set user\'s input', () => {
        readline.question = jest.fn().mockImplementationOnce(() => '(1+2)-3');
        mockInputProcessorInstance.ask();
        expect(mockInputProcessorInstance.getInput()).toBe('(1+2)-3');
    });
    it('get user\'s input', () => {
        mockInputProcessorInstance['input'] = '(2-3)+1';
        expect(mockInputProcessorInstance.getInput()).toBe('(2-3)+1');
    });
    it('when user press \'y\' repeat calculations', () => {
        readline.keyInYN = jest.fn().mockImplementationOnce(() => true);
        const mockAsk = jest.spyOn(mockInputProcessorInstance, 'ask');
        mockInputProcessorInstance.ask();
        expect(mockAsk).toBeCalledTimes(2);
    })
});
