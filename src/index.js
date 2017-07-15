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

// TODO
const func1 = (function() {
  return (function() { return arguments[0]; })('inner');
})('outer');
console.log(func1);

const func2 = (function() {
  return (() => arguments[0])('inner');
})('outer');
console.log(func2);

//  pag61
const tap = (value) =>
  (fn) => (
    typeof(fn) === 'function' && fn(value),
    value
  )

console.log(tap('expresso')((it) => console.log(`Our drink is ${it}`)));
console.log(tap('expresso')());
