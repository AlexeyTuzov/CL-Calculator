export interface IOperator {
    sign: string;
    priority: number;
    mightBeFirst: boolean;
    unaryOnly: boolean;
}

const Operators = [
    {
        sign:'+',
        priority: 2,
        mightBeFirst: false,
        unaryOnly: false
    },
    {
        sign:'-',
        priority: 2,
        mightBeFirst: true,
        unaryOnly: false
    },
    {
        sign:'*',
        priority: 1,
        mightBeFirst: false,
        unaryOnly: false
    },
    {
        sign: '/',
        priority: 1,
        mightBeFirst: false,
        unaryOnly: false
    }
];
export default Operators;
