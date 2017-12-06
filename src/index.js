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

//  pag82
console.log('const oneTwoThree = ["one", "two, "three]');
console.log('["zero, ...oneTwoThree"] = ["zero", "one", "two", "three"]');

//  pag83
console.log('const [what] = []');
console.log('what\n //=> undefined');


console.log('const [...arr] = []');
console.log('arr\n //=> []');

//  pag84
console.log('const description = (nameAndOccupation) => {\n  if (nameAndOccupation.length < 2) {\n    return ["", "occupation missing"];\n  }\nelse {\n    const [[fist, last] , occupation] = nameAndOccupation;\n    return [fist, occupation];\n  }\n}');

const description = (nameAndOccupation) => {
  if (nameAndOccupation.length < 2) {
    return ['', 'occupation missing'];
  } else {
    const [[fist, last] , occupation] = nameAndOccupation;
    return [fist, occupation];
  }
}
console.log('const [reg, status] => descrition([["reginald", "braithwaite"], "programmer"]);');
console.log('reg \n//=> "reginald"');
console.log('status \n//=> "programmer"');

//  pag85
console.log('const numbers = (...nums) => nums');
console.log('numbers(1, 2, 3, 4)\n// => [1, 2, 3, 4]');

//  pag86
console.log('Recursion is the root of computation, it trades description for time - Allan Perlis');
console.log('[] //=> []');
console.log('["braz", ...[]] //=> ["braz"]');
console.log('["braz", ...["braz"]] //=> ["braz", "braz"]');
console.log('["braz", ...["foo", "bar"]] //=> ["braz", "foo", "bar"]');

//  pag87
console.log('const [first, ...rest] = []\n first //=> undefined\n rest //=> []');

console.log('recursive, needs a stop condition');
console.log('const length ([first, ...rest]) => {\n return first === undefined ? 0 : 1 + lenght(rest)\n}');
console.log('recursive algorithms follow the "divide and conquer" strategy for solving a problem:');
console.log('1- Divide the problem into smaller problems.');
console.log('2- If a small problem is solvable, solve the small problem.');
console.log('3- If a smaller problem is not solvable, divide and conquer that problem.');
console.log('4- When all the small problems are solved, compo the solution into one big solution.');

//  pag92
console.log('const sumSquare = ([first, ...rest]) => { return first === undefined ? [] : [first * first, sumSquare(rest)]; }');

//  pag96
console.log('Tail-call optimization: occurs when an fucntion\'s last act is to invoke abitehr function abd the return the whatever the other function returns. this methor is optimal to be user with recursivese functions.');
const maybe = (fn) =>
  function(...args) {
    if (arg.length === 0) {
      return;
    } else {
      for (let args of args) {
        if (arg === null) {
          return;
        }
        return fn.apply(this,  arg)
      }
    }
}
console.log('const maybe = (fn) => {\n  function(...args) {\n    if (arg.length === 0) {\n      return;\n    } else {\n      for (let args of args) {\n        if (arg === null) {\n          return;\n        }\n        return fn.apply(this,  arg)\n      }\n    }\n  }\n}');

//  pag97
console.log('converting to Tail call (Length)');
const lengthDelaysWork = ([first, ...rest], numberToBeAdded) => {
  if (rest === undefined) {
    return numberToBeAdded;
  }

  return lengthDelaysWork(rest, numberToBeAdded + 1);
}
console.log('const lengthDelaysWork = ([first, ...rest], numberToBeAdded) => {\n  if (rest === undefined) {\n    return numberToBeAdded;\n  }\n  return lengthDelaysWork(restm numberToBeAdded + 1);\n}');


// pag99
console.log('We should use recursive, creating a stack of value every time it iterates, thats filigree.');

//  page101
console.log('we had previous seen that destruction parameters works the same way as descruction assigments Now we learned that w can create a default parameters asssigment.');
console.log('const [first, secont = "two"] = ["one"]');
console.log('first //=> "one", second //=> "two"');

console.log('const [first, secont = "two"] = ["one", "primus"]');
console.log('first //=> "one", second //=> "primus"');

//  pag103
console.log('now , with the help of Tail call, we see the mapWith function:');
console.log('const mapWith = (fn, [first, ...rest], prepend = []) => first === undefined ? return prepend : mapWith(fn, rest, [...prepend, fn(first)]);');
const mapWithTC = (fn, [first, ...rest], prepend = []) => first === undefined ? prepend : mapWithTC(fn, rest, [...prepend, fn(first)]);
console.log(mapWithTC((x) => x * x, [1, 2, 3, 4, 5]));

console.log('even this way, when we try with large array, we discover that this is very slow, slower than the .map');
console.log('The Javascript Engine actually copies the elements from prepend into the new array one at a time.');

//  pag107
console.log('Linked Lists:');
console.log('They came from the Link language, that use the [first, ...rest] principle');
console.log('ex: [1, [2, [3, [4, [5, null]]]]]');
console.log('This Way:');
console.log('const node5 = [5, null],\n      node4 = [4, node5],\n      node3 = [3, node4],\n      node2 = [2, node3],\n      node1 = [1, node2]');
console.log('In Javascript it is stil much faster to get all the elements execpt the head from a linkedLin than an Array!!');

//  pag108
console.log('So why arrays?');
console.log('Well Linked Lists are fast for a few things, likw taking off the first elemntes from na array, but nt for iterating over an list: point and chasing througth memory is quit a bit slower thanincrementing an index');

//  pag109
console.log('POJO - Plain Old Javascript Ojects');
console.log('Lists are the "oldest" data structure in the hisorty of high level languages, because they map very close to the way the hardware is organized in a computer.');
console.log('In Javascript an object is a map from string keys to values');

//  pag110
console.log('Javascrit as a listeral syntax for creating objects .This object maps values to the keys year, month and day:');
console.log('{ year: 2012, month: 6, day: 14 }');
console.log('{ year: 2012, month: 6, day: 14 } === { year: 2012, month: 6, day: 14 } //=> false');
console.log('{ year: 2012, month: 6, day: 14 }["day"] //=> 14');

//  pag111
console.log('Expressions are used for key as well:');
console.log('{ ["p" + "i"]: 3,14 } //=> { pi: 3,14 }');

//  pag115
console.log('Revising linked lists:');
console.log('const oneTwoThree = { first: one, rest: { first: 2, rest: { first: 3, rest: EMPTY }}}');
console.log('oneTwoThree.first //=> 1');
console.log('oneTwoThree.rest.first //=> 2');


console.log('sloopycope = (node) => node === EMPTY ? EMPTY : { first: node.first, rest: slopycopy(node.rest) \nor\n');
console.log('const copy2 = (node, delayed = EMPTY) =>\n node === EMPTY ?\n  delayed\n  : copy2(node.rest, { first: node.first, rest: delayed})');


//  pag118
console.log('InJavascript almost every type can mutate.');
console.log('const name = { first: "Gustavo", last: "Silva" }');
console.log('name.middle = "Rios" //=> {{ first: "Gustavo", last: "Silva", middle: "Rios"  }}');

//  pag120
console.log('You can motate a const, but cannot rebind it');

console.log('const allHallowEve = [2012, 10, 31]');
console.log('(function (halloween)) => {\n halloween = [2013, 10, 31]\n}(allHallowEve)');
console.log('allHallowEve \n//=> [2012, 10, 31] ');

console.log('but can mutate:');
console.log('const allHallowEve = [2012, 10, 31]');
console.log('(function (halloween)) => {\n halloween[0] = 2013\n}(allHallowEve)');
console.log('allHallowEve \n//=> [2013, 10, 31] ');

//  pag122
console.log('const oneTwoFive = [1, 2, 3, 4, 5]');
console.log('const [one, two, threeToFive] = oneToFive');
console.log('threeToFive[0] = "three"');
console.log('threeToFive[1] = "four"');
console.log('threeToFive[2] = "five"');
console.log('// => ["three", "four", "five"]');
console.log('this is a safe way to mutate the array');


console.log('Avoiding motation: in general it is easier to reason about data doesnt change. Just use the data and the less time we have to think about mutating it, the safer it will be.');

console.log('Reassignment');
console.log('Javascript allows you tu re-assign value bound to paramenters');
console.log('Javascript does not permit us to rebind a name that has been bound with const. We can shadown it by using const to declare a new bidding with a few functions or block scope, ut we cannot rebind a name that was bound with const in a existing scope.');


console.log('let age = 50 \nage = 53 \n//=> 53');

//  pag127
console.log('Mixing Let and const');
console.log('Some programmers dislike deliberately shadowing variables. The suggestions is that shadowing a variable is confusing code.');

console.log('(() => {  let age = 49; \n if (true) { const age = 53 } \nage = 51;\n return age\n  })');
console.log('//=> 51');

console.log('(() => {  cosnt age = 49; \n if (true) { **let age = 53** } \nage = 51;\n return age\n  })');
console.log('//=> ERROR: age is read-only');

console.log('Var looks alot like Let');
console.log('vai is function scoped, nto block scoped');

console.log('var introductions = [], names = ["Karl" , "Frederich", "Gauss"]\n for(var i = 0; i < names.length; i++)\n introductions[i] = (soAndSo) => `hello, ${soAndSo}` my name is ${introductions[i]}\n}');
console.log('introductions[1]("Reginald") //=> "hello, Reginald my name is undefined"');


console.log('let introductions = [], names = ["Karl" , "Frederich", "Gauss"]\n for(let i = 0; i < names.length; i++)\n introductions[i] = (soAndSo) => `hello, ${soAndSo}` my name is ${introductions[i]}\n}');
console.log('introductions[1]("Reginald") //=> "hello, Reginald my name is Frederich"');

//  pag141
console.log('Tortoise and the rabbit - Algorith to detect a loop in a linked list, in constant space.');

const tortoiseAndHare = (aPair) => {
  let tortoisePair = aPair,
  harePair = aPair.rest;
  while (true) {
    if (isEmpty(tortoisePair) || isEmpty(harePair)) {
      return false;
    }

    if(tortoisePair.first === harePair.first) {
      return true;
    }

    harePair = harePair.rest;
    if(isEmpty(harePair)) {
      return false;
    }

    if(tortoisePair.first === harePair.first) {
      return true;
    }
    tortoisePair = tortoisePair.rest;
    harePair = harePair.rest;
  }
}

console.log('const tortoiseAndHare = (aPair) => {\n  let tortoisePair = aPair,\n  harePair = aPair.rest;\n  while (true) {\n    if (isEmpty(tortoisePair) || isEmpty(harePair)) {\n      return false;\n    }\n    if(tortoisePair.first === harePair.first) {\n      return true;\n    }\n    harePair = harePair.rest;\n    if(isEmpty(harePair)) {\n      return false;\n    }\n    if(tortoisePair.first === harePair.first) {\n      return true;\n    }\n    tortoisePair = tortoisePair.rest;\n    harePair = harePair.rest;\n  }\n}');


console.log('const aList = list(1, 2, 3, 4, 5)');
console.log('tortoiseAndHare(aList) //=> false');
console.log('forceAppend(aList, aList.rest.rest)');
console.log('tortoiseAndHare(aList) //=> true');

//  pag146
console.log('We should never, mix and array iteration with the some of some of its parts.');

//  pag150

const fibonacciIterator = () => {
  let previous = 0,
  current = 1;
  return () => {
    const value = current;
    [previous, current] = [current, current + previous];
    return { done: false, value };
  }
}
console.log('const fibonacciIterator = () => {\n  let previous = 0,\n  current = 1;\n  return () => {\n    const value = current;\n    [previous, current] = [current, current + previous];\n    return { done: false, value };\n  }\n}');

//  pag151
console.log('A ideia, a function that that an iterator and returns another iterator.');
const take151 = (iterator, numberToTake) => {
  let count = 0;
  return () => {
    if (++count <= numberToTake) {
      return iterator;
    } else {
      return { done: true };
    }
  }
}

console.log('const take151 = (iterator, numberToTake) => {\n  let count = 0;\n  return () => {\n    if (++count <= numberToTake) {\n      return iterator;\n    } else {\n      return { done: true };\n    }\n  }\n}');

const toArray151 = (iterator) => {
  let eachIteration ,
    array = [];

  while (eachIteration = iterator(), !eachIteration.done) {
    array.push(eachIteration.value);
  }

  return array;
}

console.log('const toArray151 = (iterator) {\n  let eachIteration ,\n    array = [];\n while (eachIteration = iterator(), !eachIteration.done) {\n    array.push(eachIteration.value);\n  }\n  return array;\n}');


console.log('the Krestel and the idiot, create a function that always returns the same value');
const k = (x) => (y) => (x);
const fortyTwo = k(42);
fortyTwo(6)
fortyTwo('hello');
console.log('const k = (x) => (y) => (x);');
console.log('const fortyTwo = k(42);');
console.log('fortyTwo(6)');
console.log(fortyTwo(6));
console.log('fortyTwo(\'hello\');');
console.log(fortyTwo('hello'));


console.log('This is very interisting, given two values, we can say that K always returns the first value k(x)(y) => x');
console.log('Now, an interesting this happens when we pass functions to each parameter. Considere K(i). From what we just wrote, k(x)(y) => x, so k(i)(x) => i. Makes sense. Now let\'s tack one more invocation on : What is k(i)(x)(y)? IF K(i)(x) => i, then K(i)(x)(y) => i(y) witch is y.');

//  pag163
console.log('Say please');
console.log('We keep using the aPair === EMPTY ? doSomething: doSomethingElse');
console.log('We can reserve this isntead of asking a pair if it is empty and then deciding what to do, we can ask the pair to do it for us. Here\'s length again');
const length163 = (list) => list(
  () => null,
  (aPair => 1 + length163(aPair(rest)))
);


//  pag167
console.log('Instead of directly manipulating part of an entity, pass it as a function and have it call our function with the part we want');
console.log('And instead of testing some property os an entity and making a choise of our own ? : (or if), pass the entity the work we want done for each case and lt it test itself.');

//  pag170
console.log('const mapWith = (fn) => (list) => list.map(fn)');
