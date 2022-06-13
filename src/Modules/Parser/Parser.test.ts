import Parser from './Parser';
import Calculator from '../Calculator/Calculator';
import { mocked } from 'jest-mock';

jest.mock('../Calculator/Calculator');
jest.mock('./Parser');

describe('Parser', () => {

    let mockParser = mocked(Parser, true);

    beforeEach(() => {
    
    });

    it('creates an instance of Calculator', () => {
    
        expect(Calculator).toHaveBeenCalledTimes(1);
    });

    it('find most nested parentheses expression', () => {
       // mockParser.parseUserInput('(1+2*(3-2))');
    });
});