export default class OutputProcessor {

    private result: number;
    private errorMessage: string;

    constructor() {
        this.result = 0;
        this.errorMessage = '';
    }

    public logResult(): void {
        console.log(`Result is: ${this.result}`);
    }

    public logError(): void {
        console.log(this.errorMessage);
    }

    public setResult(result: number): void {
        this.result = result;
    }

    public setError(error: string): void {
        this.errorMessage = error;
    }
}
