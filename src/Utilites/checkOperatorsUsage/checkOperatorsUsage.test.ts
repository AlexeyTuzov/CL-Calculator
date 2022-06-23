jest.mock('../../Modules/Math_Operations/OperatorsList', () => {
    return [
        {
            operator: '+',
            priority: 2,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            operator: '-',
            priority: 2,
            mightBeFirst: true,
            unaryOnly: false
        },
        {
            operator: '*',
            priority: 1,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            operator: '/',
            priority: 1,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            operator: '**',
            priority: 0,
            mightBeFirst: false,
            unaryOnly: false
        },
        {
            operator: 'sin',
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
        expect(checkOperatorsUsage('(1+2)-3*((4+2)/2)')).toBe('Correct');
        expect(checkOperatorsUsage('-1+2-3')).toBe('Correct');
        expect(checkOperatorsUsage('-1+2-3')).toBe('Correct');
        expect(checkOperatorsUsage('-0.1+0.22-3.33')).toBe('Correct');
        expect(checkOperatorsUsage('-(1+2)-3')).toBe('Correct');
        expect(checkOperatorsUsage('-(-1+2)-3')).toBe('Correct');
        expect(checkOperatorsUsage('1+-2-3')).toBe('Two or more operators in a row');


    });
    it('support multiple operator symbols if it is specified', () => {
        expect(checkOperatorsUsage('-2**2-3.33')).toBe('Correct');
        expect(checkOperatorsUsage('-10//2-3.33')).toBe('Two or more operators in a row');
    });
    it('unary only operators can stand only before numbers', () => {
        expect(checkOperatorsUsage('sin(30)-0.5')).toBe('Correct');
        expect(checkOperatorsUsage('sin30-0.5')).toBe('Correct');
        expect(checkOperatorsUsage('-0.5+30sin')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('(-0.5+30)*sin')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('(-0.5+30)sin')).toBe('Wrong operators statement');
    });
    it('catch an error if binary operator being used without first operand', () => {
        expect(checkOperatorsUsage('(-1)*42')).toBe('Correct');
        expect(checkOperatorsUsage('-1*42')).toBe('Correct');
        expect(checkOperatorsUsage('(*1)*42')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('/1*42')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('42*(1+(/2))')).toBe('Wrong operators statement');
    });
    it('catch an error if binary operator being used without second operand', () => {
        expect(checkOperatorsUsage('1+2-3*')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('((1-2))-3*)')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('((1-2+))-3)')).toBe('Wrong operators statement');
        expect(checkOperatorsUsage('((1-2-))-3)')).toBe('Wrong operators statement');
    });
});
