import readline from 'readline-sync';

export default class InputProcessor {

    private input: string;

    constructor() {
        this.input = '';
    }

    public ask() {
        const answer: string = readline.question('Enter the expression: ');
        this.setInput(answer);
        this.askForRepeat();
    }

    public getInput() {
        return this.input;
    }

    private askForRepeat() {
        if (readline.keyInYN('Continue calculations?')) this.ask();
    }

    private setInput(input: string) {
        this.input = input;
    }

}



