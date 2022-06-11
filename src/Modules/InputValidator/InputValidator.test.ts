import InputValidator from './InputValidator';

describe('Input Validator', () => {

    jest.mock('./InputValidator');
    let mockInputValidator: InputValidator;

    beforeEach(() => {
        mockInputValidator = new InputValidator();
    });

    it('get validation results', () => {
        mockInputValidator['error'] = 'Some error';
        expect(mockInputValidator.getValidationResult()).toBe('Some error');
    });

    describe('check parentheses', () => {
        it('catch error if parentheses are not closed', () => {
            mockInputValidator.validate('((1+2)/3');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong parentheses statement!');
        });
        it('catch error if parentheses are not opened', () => {
            mockInputValidator.validate('(1+2)/3)+4');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong parentheses statement!');
        });
        it('catch error if order of parentheses is wrong', () => {
            mockInputValidator.validate(')(1+2)+5(');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong parentheses statement!');
        });
        it('catch error if there is no operator between parentheses', () => {
            mockInputValidator.validate('(1+2)(3*4)');
            expect(mockInputValidator.getValidationResult()).toBe('No operator between parentheses');
        });
    });

    describe('check symbols', () => {
        it('catch error if incorrect symbols are found', () => {
            mockInputValidator.validate('(1+2)-4/5*0.8x');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong symbol has been found in an expression');
        });
        it('catch error if two math operators in a row', () => {
            mockInputValidator.validate('(1+2)-4/5*/0.8');
            expect(mockInputValidator.getValidationResult()).toBe('Two or more math operators in a row');
        });
    });

    describe('check fractions', () => {
        it('fraction has only one dot', () => {
            mockInputValidator.validate('(0.1+0.2)/0.3.4');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong decimal fraction in an expression');
        });
        it('dot in right position', () => {
            mockInputValidator.validate('(0.1+2.)/0.3');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong decimal fraction in an expression');
        });
        it('dot in right position', () => {
            mockInputValidator.validate('(0.1+.2)/0.3');
            expect(mockInputValidator.getValidationResult()).toBe('Wrong decimal fraction in an expression');
        });
    });
});
