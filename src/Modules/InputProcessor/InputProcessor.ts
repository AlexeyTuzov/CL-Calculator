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

    public askForRepeat(): boolean | string {
        return (readline.keyInYN('Continue calculations?'));
    }

    private trimSpaces(): void {
        this.input = this.input.replace(/\s+/g, '');
    }
}



