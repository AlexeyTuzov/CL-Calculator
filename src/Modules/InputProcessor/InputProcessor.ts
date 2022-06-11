import readline from 'readline-sync';

export default class InputProcessor {

    private input: string;

    constructor() {
        this.input = '';
    }

    public ask(): void {
        const answer: string = readline.question('Enter the expression: ');
        this.setInput(answer);
        this.trimSpaces();
    }

    public getInput(): string {
        return this.input;
    }

    public askForRepeat(): void {
        if (readline.keyInYN('Continue calculations?')) this.ask();
    }

    private setInput(input: string): void {
        this.input = input;
    }

    private trimSpaces(): void {
        this.input = this.input.replace(/\s+/g, '');
    }
}



