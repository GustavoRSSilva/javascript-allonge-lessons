(
  () => console.log('Welcome')
)();

// Why you should avoid using floating point equations with javascript
console.log('why you should avoid using floating point equations on Js');
console.log(`the some of 1.0 + 1.0 + 1.0 equals to ${1.0 + 1.0 + 1.0}`);
console.log('while the some of decimals numbers is:');
console.log(`0.1 + 0.1 + 0.1 = ${0.1 + 0.1 + 0.1}`);


// TODO
const func1 = (function() {
  return (function() { return arguments[0]; })('inner');
})('outer');
console.log(func1);

const func2 = (function() {
  return (() => arguments[0])('inner');
})('outer');
console.log(func2);
