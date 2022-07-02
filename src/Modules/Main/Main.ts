import InputProcessor from '../InputProcessor/InputProcessor';
import InputValidator from '../InputValidator/InputValidator';
import OutputProcessor from '../OutputProcessor/OutputProcessor';
import Parser from '../Parser/Parser';

export default class Main {

    private inputProcessor: InputProcessor;
    private inputValidator: InputValidator;
    private outputProcessor: OutputProcessor;
    private parser: Parser;
    private inputString: string;
    private outputString: string;
    constructor() {
        this.inputProcessor = new InputProcessor();
        this.inputValidator = new InputValidator();
        this.outputProcessor = new OutputProcessor();
        this.parser = new Parser();
        this.inputString = '';
        this.outputString = '';
    }

    public start() {
        this.inputProcessor.ask();
        this.inputString = this.inputProcessor.getInput();
        this.inputValidator.validate(this.inputString);
        const validationError: string = this.inputValidator.getValidationResult();
            if (validationError) {
                this.outputProcessor.setError(validationError);
                this.outputProcessor.logError();
            } else {
                this.parser.parseUserInput(this.inputString);
                this.outputString = this.parser.getResult();
                this.outputProcessor.setResult(this.outputString);
                this.outputProcessor.logResult();
            }

        this.inputProcessor.askForRepeat();
    }
}
