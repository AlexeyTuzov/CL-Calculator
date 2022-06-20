import findFirstHighPriorityOperation from './findFirstHighPriorityOperation';

describe('findFirstHighPriorityOperation', () => {

    it('find and return first math operation with highest priority', () => {
        expect(findFirstHighPriorityOperation('1+2-3')).toBe('1+2');
        expect(findFirstHighPriorityOperation('1+2*3')).toBe('2*3');
        expect(findFirstHighPriorityOperation('1/2-3')).toBe('1/2');
        expect(findFirstHighPriorityOperation('0.1+0.2-0.3')).toBe('0.1+0.2');
        expect(findFirstHighPriorityOperation('0.1+0.2/0.3+0.4')).toBe('0.2/0.3');
        expect(findFirstHighPriorityOperation('0.1+0.2/0.3+0.4*0.5')).toBe('0.2/0.3');
    });
});
