import readline from 'readline-sync';

export default class InputProcessor {

    private input: string;

    constructor() {
        this.input = '';
    }

    public ask(): void {
        this.input = readline.question('Enter the expression: ');
        this.trimSpaces();
    }

    public getInput(): string {
        return this.input;
    }

    public askForRepeat(): void {
        if (readline.keyInYN('Continue calculations?')) this.ask();
    }

    private trimSpaces(): void {
        this.input = this.input.replace(/\s+/g, '');
    }
}



