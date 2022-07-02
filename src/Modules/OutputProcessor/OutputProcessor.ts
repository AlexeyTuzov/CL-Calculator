export default class OutputProcessor {

    private result: string;
    private errorMessage: string;

    constructor() {
        this.result = '';
        this.errorMessage = '';
    }

    public logResult(): void {
        console.log(`Result is: ${this.result}`);
    }

    public logError(): void {
        console.log(this.errorMessage);
    }

    public setResult(result: string): void {
        this.result = result;
    }

    public setError(error: string): void {
        this.errorMessage = error;
    }
}
