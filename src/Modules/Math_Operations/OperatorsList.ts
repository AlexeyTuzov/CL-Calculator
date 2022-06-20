const OperatorsList: string[] = ['+', '-', '*', '/', '(', ')'];

export const OperatorsPriorities = [
    {
        operator:'+',
        priority: 2
    },
    {
        operator:'-',
        priority: 2
    },
    {
        operator:'*',
        priority: 1
    },
    {
        operator: '/',
        priority: 1
    }
];
export default OperatorsList;
