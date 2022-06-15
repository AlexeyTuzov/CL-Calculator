import Parser from './Parser';
import Calculator from '../Calculator/Calculator';

jest.mock('../Calculator/Calculator');

describe('Parser', () => {

    let mockParser: Parser;

    beforeEach(() => {
        mockParser = new Parser();
    });

    it('create an instance of Calculator', () => {
        expect(Calculator).toHaveBeenCalledTimes(1);
    });
    it('get result after calculations', () => {
        mockParser['result'] = '42';
        expect(mockParser.getResult()).toBe('42');
    });
    it('return error if it is occurred', () => {
        mockParser['result'] = 'NaN';
        mockParser['error'] = 'Divided by zero';
        expect(mockParser.getResult()).toBe('Divided by zero');
    });
    it('return an input in case of no math operators', () => {
       mockParser.parseUserInput('(42)');
       expect(mockParser.getResult()).toBe('42');
    });

});
