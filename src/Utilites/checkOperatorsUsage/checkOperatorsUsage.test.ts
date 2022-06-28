jest.mock('../../Modules/Math_Operations/OperatorsList', () => {
    return [
        {
            sign: '+',
            priority: 2,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            sign: '-',
            priority: 2,
            mightBeFirst: true,
            unaryOnly: false
        },
        {
            sign: '*',
            priority: 1,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            sign: '/',
            priority: 1,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            sign: '**',
            priority: 0,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            sign: 'sin',
            priority: 0,
            mightBeFirst: true,
            unaryOnly: true
        }
    ];
});

import checkOperatorsUsage from './checkOperatorsUsage';

describe('Check operators statement', () => {

    it('check operators statement and their correct usage', () => {
        expect(checkOperatorsUsage('1+2-3')).toBe('Correct');
        expect(checkOperatorsUsage('1+2-3*4+2/sin2')).toBe('Correct');
        expect(checkOperatorsUsage('-1+2-3')).toBe('Correct');
        expect(checkOperatorsUsage('-0.1+0.22-3.33')).toBe('Correct');
        expect(checkOperatorsUsage('1+-2-3')).toBe('Wrong operators statement');
    });
    it('support multiple operator symbols if it is specified', () => {
        expect(checkOperatorsUsage('-2**2-3.33')).toBe('Correct');
        expect(checkOperatorsUsage('-10//2-3.33')).toBe('Wrong operators statement');
    });
    it('unary only operators can stand only before numbers', () => {
        expect(checkOperatorsUsage('sin30-0.5')).toBe('Correct');
        expect(checkOperatorsUsage('sin-0.5')).toBe('Correct');
        expect(checkOperatorsUsage('sin-1')).toBe('Correct');
        expect(checkOperatorsUsage('sin--1')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('-0.5+30sin')).toBe('Wrong operators statement');
    });
    it('catch an error if binary operator being used without first operand', () => {
        expect(checkOperatorsUsage('-1*42')).toBe('Correct');
        expect(checkOperatorsUsage('*1*42')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('/1*42')).toBe('Wrong operators statement');
    });
    it('catch an error if binary operator being used without second operand', () => {
        expect(checkOperatorsUsage('1+2-3*')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('1-2-3**')).toBe('Wrong operators statement');
    });
    it('catch an error if incorrect character in expression', () => {
        expect(checkOperatorsUsage('qwerty1+2')).toBe('Incorrect character in expression');
        expect(checkOperatorsUsage('-sin+1+2')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('-sin-1+2')).toBe('Correct');
    });
});
