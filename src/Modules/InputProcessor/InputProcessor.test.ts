import InputProcessor from './InputProcessor';
import readline from 'readline-sync';

describe('Input Processor:', () => {

    let mockInputProcessor: InputProcessor;
    readline.question = jest.fn();
    readline.keyInYN = jest.fn();

    beforeEach(() => {
        mockInputProcessor = new InputProcessor();
        readline.question = jest.fn().mockImplementation(() => '(1+2)-3');
    });

    it('ask user for an expression to calculate', () => {
        mockInputProcessor.ask();
        expect(readline.question).toBeCalled();
    });
    it('trim empty spaces in user\'s input', () => {
        readline.question = jest.fn().mockImplementationOnce(() => '( 1 + 2 ) / 3 ');
        mockInputProcessor.ask();
        expect(mockInputProcessor.getInput()).toBe('(1+2)/3');
    });
    it('set user\'s input', () => {
        mockInputProcessor.ask();
        expect(mockInputProcessor.getInput()).toBe('(1+2)-3');
    });
    it('get user\'s input', () => {
        mockInputProcessor['input'] = '(2-3)+1';
        expect(mockInputProcessor.getInput()).toBe('(2-3)+1');
    });
    it('when user press \'y\' repeat calculations', () => {
        readline.keyInYN = jest.fn().mockImplementationOnce(() => true);
        const mockAsk = jest.spyOn(mockInputProcessor, 'ask');
        mockInputProcessor.askForRepeat();
        expect(mockAsk).toBeCalledTimes(1);
    });
});
