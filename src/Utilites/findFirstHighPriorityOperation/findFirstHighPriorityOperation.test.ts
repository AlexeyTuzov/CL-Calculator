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

import findFirstHighPriorityOperation from './findFirstHighPriorityOperation';

describe('findFirstHighPriorityOperation', () => {

    it('find and return first math operation with highest priority', () => {
        expect(findFirstHighPriorityOperation('1+2-3')).toBe('1+2');
        expect(findFirstHighPriorityOperation('1+2*3')).toBe('2*3');
        expect(findFirstHighPriorityOperation('1/2-3')).toBe('1/2');
        expect(findFirstHighPriorityOperation('0.1+0.2-0.3')).toBe('0.1+0.2');
        expect(findFirstHighPriorityOperation('0.1+0.2/0.3+0.4')).toBe('0.2/0.3');
        expect(findFirstHighPriorityOperation('0.1+0.2/0.3+0.4-0.5')).toBe('0.2/0.3');
        expect(findFirstHighPriorityOperation('12+sin1*13')).toBe('sin1');
        expect(findFirstHighPriorityOperation('12+sin-1*13')).toBe('sin-1');
        expect(findFirstHighPriorityOperation('11+-3-8')).toBe('11+-3');
        expect(findFirstHighPriorityOperation('-12-12')).toBe('-12-12');
    });
});
