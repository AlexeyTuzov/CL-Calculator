let greedyRegExp: RegExp = /\(.+\)/;
let lazyRegExp: RegExp = /\(.+?\)/;

const findFirstNestedExp = (str: string): string => {
    let matches: RegExpMatchArray | null = str.match(lazyRegExp);
    if (!matches) {
        return str;
    } else {
        let parenthesesCheckSum: number = 0;
        Array.from(matches[0]).forEach((char: string) => {
            if (char === '(') parenthesesCheckSum++;
            if (char === ')') parenthesesCheckSum--;
        });
        if (parenthesesCheckSum === 0) {
            let trimmedParentheses = matches[0].slice(1, matches[0].length - 1);
            return findFirstNestedExp(trimmedParentheses);
        } else {
            matches = str.match(greedyRegExp)!;
            let trimmedParentheses = matches[0].slice(1, matches[0].length - 1);
            return findFirstNestedExp(trimmedParentheses);
        }
    }
}

export default findFirstNestedExp;
