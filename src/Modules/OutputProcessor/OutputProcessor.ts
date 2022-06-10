export default class OutputProcessor {

    private result: number;
    private errorMessage: string;

    constructor() {
        this.result = 0;
        this.errorMessage = '';
    }

    public logResult() {
        console.log(`Result is: ${this.result}`);
    }

    public setResult(result: number) {
        this.result = result;
    }

    public logError() {
        console.log(this.errorMessage);
    }
}
