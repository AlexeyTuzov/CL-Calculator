const shieldSymbols = (expression: string) => {
    const exceptions: string[] = ['[', ']', '/', '^', '$', '|', '?', '*', '+'];
    const result = Array.from(expression).map(item => {
        let foundException: string | undefined = exceptions.find(ex => ex === item);
            return foundException ? `\\${item}` : item;
    });
    return result.join('');
}

export default shieldSymbols;
