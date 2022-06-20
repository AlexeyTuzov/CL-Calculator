import { OperatorsPriorities } from '../../Modules/Math_Operations/OperatorsList';

interface IPriorities {
    operator: string;
    priority: number;
}

const findFirstHighPriorityOperation = (expression: string): string => {

    let prioritiesArray: string[] = [];

    let firstPriority: IPriorities[] = OperatorsPriorities.filter(item => item.priority === 1);
    let firstPrioritySymbols: string = firstPriority.map(item => item.operator).join('');
    let firstOperation: string = String.raw`(\d+\.?\d*|\d+)[${firstPrioritySymbols}](\d+\.?\d*|\d+)`;
    prioritiesArray.push(firstOperation);

    let secondPriority: IPriorities[] = OperatorsPriorities.filter(item => item.priority === 2);
    let secondPrioritySymbols: string = secondPriority.map(item => item.operator).join('');
    let secondOperation: string = String.raw`(\d+\.?\d*|\d+)[${secondPrioritySymbols}](\d+\.?\d*|\d+)`;
    prioritiesArray.push(secondOperation);

    let matchArray: RegExpMatchArray | null;
    let highPriorityExpression: string = '';

    prioritiesArray.find(item => {
        matchArray = expression.match(RegExp(item));
        if (matchArray) {
            highPriorityExpression = matchArray[0];
            return matchArray[0];
        } else {
            return '';
        }
    });

    return highPriorityExpression;

}

export default findFirstHighPriorityOperation;
