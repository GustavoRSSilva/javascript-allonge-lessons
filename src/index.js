(
  () => console.log('Welcome')
)();

//  Why you should avoid using floating point equations with javascript
console.log('why you should avoid using floating point equations on Js');
console.log(`the some of 1.0 + 1.0 + 1.0 equals to ${1.0 + 1.0 + 1.0}`);
console.log('while the some of decimals numbers is:');
console.log(`0.1 + 0.1 + 0.1 = ${0.1 + 0.1 + 0.1}\n`);

//  pag11
console.log('result void 0');
console.log(void 0);
console.log('\n');

console.log('(() => {})():');
console.log((() => {})());
console.log('\n');

//  pag17
console.log('function and bodies eg:');
console.log('((room, board) => room + board)(800,150):');
console.log(((room, board) => room + board)(800,150));
console.log('\n');

//  pag18
console.log('in the function ((diameter) => diameter+ 3.14)(1+1) the 1+1');
console.log('is revolved first, then is proced to the function result\n');

//  pag21
console.log(`Closures and scopes`);
console.log('((x) => (y) => x)(2)(4) :');
console.log(((x) => (y) => x)(2)(4));
console.log('\n');
//  pag22
console.log('Functions that contain no free variables are called pure funtions.');
console.log('Functions that contain one or more free variables are called closures.');


//  pag 24
console.log('(x) => \n  (x,y) => \n    (w,z) => \n      (w) => \n        x + y + z');
console.log(`Here the children overrides the parent this the equasion\n`);

//  pag 26
console.log('anonymous functions are the functions without name (ex: (diameter) => diameter * 3.14159265)\n');

//  pag 36
console.log('const shadow values inside blocks and functions');
console.log('((diameter) => {\n const Pi = 3.14159265;\n if (true) {\n  const Pi = 3;\n }\n return diamenter * PI})(2);\n}');

const diam = ((diamenter) => {
  const PI = 3.14159265;
  if (true) {
    const PI = 3;
  }

  return PI * diamenter
})(2);
console.log(`result = ${diam}\n`);


//  pag 40
const double = function repeat (str) {
  return str + str;
}
console.log('const double = function repeat (str) {\n return str + str;\n}')
console.log(`double.name = ${double.name}`);
console.log('double: enviroment name');
console.log('repeat: function expression name\n');
console.log('\n');
//  pag22
console.log('Functions that contain no free variables are called pure funtions.');
console.log('Functions that contain one or more free variables are called closures.');


//  pag44
console.log('function trueDat () { return trun } <- function deplacration');
console.log('(function trueDat () { return trun }) <- expression, the function name trueDat is not evaluated outside the parentesis.');

//  pag45
console.log('Combinatior: Higher-order function that uses only function applications and earlier defined combinators to define a result from its arguments. This means that a combinator is a function and combines multiples functions passed througth the arguments\n');
console.log('ex: const compose = (a, b) => (c) => a(b(c))');

//  pag46
console.log('Decorator: is higher-order function that takes one function as argument and returns another function.');
console.log('ex: const not = (fn) => (x) => !fn(x)');

//  pag48
console.log('Composition, in order to avoid spaghetti code, developer can use composition (chaining two or more function together).');
console.log('ex: const cookAndEat = (food) => eat(cook(food))');

//  pag51
console.log('Magic names.');
console.log('const plus = function (a, b) {\n return arguments[0] + arguments[1]\n}');
console.log('plus(2,3)');
console.log('//=> 5\n');
console.log('const args = function (a, b) {\n return arguments + arguments[1]\n}');
console.log('args(2,3)');
console.log('//=> { 0: 2, 1: 3 }\n');

// pag53
console.log('Magic name and fat arrows. The magic names this and arguments have a different behavion when you invoke a function that was defined with a fat arrow: intead of being bound  when the function is invoked, the fat arrow function always acquired the binding of this and arguments from its enclosing scope');
console.log('const func1 = (function() {\n return (function() { return arguments[0]; })(\'inner\');\n})(\'outer\');');
const func1 = (function() {
  return (function() { return arguments[0]; })('inner');
})('outer');
console.log(func1);
console.log();
console.log('const func2 = (function() {\n return (() => arguments[0])(\'inner\');\n})(\'outer\');');
const func2 = (function() {
  return (() => arguments[0])('inner');
})('outer');
console.log(func2);
console.log('If we use fat arrow, arguments will be defined in the outer enviroment, the one defined with function. And thus arguments[0] will refer to \'outer\', not to \'inner\'\n');

//  pag61
console.log('borrowed from linux shell commands, tap takes a value and returns a function that always return the value, but if you pass an function, it will exetute the function and then return the value.\n');
console.log('const tap = (value) =>\n (fn) => (\n  typeof(fn) === \'function\' && fn(value),\n value\n)');

const tap = (value) =>
  (fn) => (
    typeof(fn) === 'function' && fn(value),
    value
  )

console.log('tap(\'expresso\')((it) => console.log(`Our drink is ${it}`))');
console.log(tap('expresso')((it) => console.log(`Our drink is ${it}`)));
console.log('tap(\'expresso\')()');
console.log(tap('expresso')());

//  pag63
console.log('A common problem in javascript is checking for null or undefined while all other values includin 0, [] and false woll be called something, for that we can create the function:');
console.log('const isSomething = (value) => value !== null !! value !== void 0');


//  pag65
console.log('A function that sometimes is needed, is the function once. I will execute the givn function only one time');
console.log('const once = (fn) => {\n let done = false;\r  return function(){\n    return done ? void 0 : ((done = true), fn.apply(this, arguments))\n  }\n}');


console.log(' Note: fn.length = the number of arguments expected by the function.');
//  pag66
console.log('Left variant Fucntions');
console.log('const abcc = (a, b, ...c) =>{\n console.log(a);\n console.log(b);\n console.log(c);}');
const abcc = (a, b, ...c) => {console.log(a); console.log(b); console.log(c);}
console.log('result equals for abcc(1, 2, 3, 4, 5):');
abcc(1, 2, 3, 4, 5);
console.log(('however ECMAScript 2015 only allows gather parameters from the end of the list. This is not allowed'));
console.log('const abcc = (..a, b, c) =>{\n console.log(a);\n console.log(b);\n console.log(c);}');
console.log('returns //=> unexpected token');

//  pag68
console.log('Overcoming limtiations!!');
console.log('we can gather the last argumentof a function using this functions:');
console.log('const leftVariadic = (fn) => {');
console.log(' if (fn.length < 1) {');
console.log('  return fn;');
console.log(' }');
console.log(' else {');
console.log('  return function (...args) {');
console.log('   const gathered = args.slice(0, args.length - fn.length + 1),');
console.log('   const spread = args.slice(args.length - fn.length + 1);');
console.log('   return fn.apply(this, [gathered.concat(spread)])');
console.log(' }');
console.log('this way we turn around the ladt argument into the first of an function!!');

//  pag72
 console.log('The && and || operators are binary infix operators that perform "logical and" and "logical or" respectively:');

 console.log(`false && false = ${false && false}`);
 console.log(`false && true = ${false && true}`);
 console.log(`true && false = ${true && false}`);
 console.log(`true && true = ${true && true}`);

 console.log(`false || false = ${false || false}`);
 console.log(`false || true = ${false || true}`);
 console.log(`true || false = ${true || false}`);
 console.log(`true || true = ${true || true}`);

//  pag74
console.log('The !! turns any variable into a true or flase, ex !!currentUser, return if there is a user or not (does not return null)');
console.log('&& evaluates if left-hand expression and if it is false, it will return false, ex: 0 && 1 => 0, if the left is true, it will evalute the right side, and return it.');
console.log('|| evaluates if left-hand expression and if it is true, it will return true, ex: 1 || 2 => 2, if the left is false, it will evalute the right side, and return it.');

//  pag75
console.log('const even = (n) => n === 0 || (n !== 1 && even(n-2))');
const even = (n) => n === 0 || (n !== 1 && even(n-2));
console.log(`even(42) = ${even(42)}`);

//  pag79
console.log('Arrays are sorted collection of values.');
console.log('An array cannot be compared directly, [2 + 2] === [2 + 2] //=> false');

//  pag81
console.log('We can extract arrays from arrays, ex: const [car, ...crd] = [1, 2, 3].');
