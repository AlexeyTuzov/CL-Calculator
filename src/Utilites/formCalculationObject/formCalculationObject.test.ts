import formCalculationObject from './formCalculationObject';

describe('Form calculation object', () => {
    it('create calculation object from string correctly', () => {
        expect(formCalculationObject('123+321')).toEqual( {
            a: 123,
            b: 321,
            operator: '+'
        });
        expect(formCalculationObject('12.3/3.21')).toEqual( {
            a: 12.3,
            b: 3.21,
            operator: '/'
        });
        expect(formCalculationObject('12-3')).toEqual( {
            a: 12,
            b: 3,
            operator: '-'
        });
        expect(formCalculationObject('0.1**4')).toEqual( {
            a: 0.1,
            b: 4,
            operator: '**'
        });
        expect(formCalculationObject('sin2')).toEqual( {
            a: 0,
            b: 2,
            operator: 'sin'
        });
        expect(formCalculationObject('sin-1')).toEqual( {
            a: 0,
            b: -1,
            operator: 'sin'
        });
        expect(formCalculationObject('11+-3')).toEqual( {
            a: 11,
            b: -3,
            operator: '+'
        });
        expect(formCalculationObject('-11-3')).toEqual( {
            a: -11,
            b: 3,
            operator: '-'
        });
    });
});
