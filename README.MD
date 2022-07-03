# Command line calculator for Byndyusoft company (test task)

## Getting started
1. Download files from repo
2. Get into downloaded folder and install all dependencies by command 'npm i'
3. Build and run project by command 'npm run start'
4. You may also check test coverage and results by command 'npm run test'

## Usage

1. Math operations such as '+' '-' '*' '-' are available for now, but functionality may be extended in future
2. You may use parentheses as well, but You will get notified if You try to use empty ones, f.e. '()' because it has no sense in Maths
3. Make sure You write a decimal fractions correctly - (0.2, not .2) otherwise, You will get notified too

## Extensions

1. I tried to make functionality as easy to extend as possible. If You need to add some other operations, such as 'sin', 'cos', 'sqrt' etc. just follow few next steps:
> - Add operator description in a file 'src/Modules/Math_Operations/OperatorsList.ts'
> - Create a folder 'src/Modules/Math_Operations/Math_<name_of_new_operator>'
> - Create there .ts file with Your logic and .test.ts with tests
> - Import created file into a 'src/Modules/Math_Operator.ts' and add operator symbol(s) into a switch...case construction similar to an existing ones
> - Add Your test case to 'src/Modules/Math_Operator.test.ts'

###Happy hacking!
