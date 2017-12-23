//  pag190
const collectionSum = (collection) => {
  const iterator = collection[Symbol.iterator]();
  let eachIteration,
    sum = 0;
  while ((eachIteration = iterator.next()), !eachIteration.done) {
    sum += eachIteration.value;
  }
  return sum;
};
console.log('const collectionSum = (collection) => {\n  const iterator = collection[Symbol.iterator]();\n  let eachIteration, sum = 0;\n  while ((eachIteration = iterator.next()), !eachIteration.done) {\n    sum += eachIteration.value;\n  }\n  return sum;\n}');
console.log(collectionSum([1, 2, 3]));

//  pag197
const filterWith = (fn, iterable) => {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      do {
        const { done, value } = iterator.next();
      } while (!done && !fn(value));
      return { done, value };
    },
  };
};
console.log('const filterWith = (fn, iterable) => {\n  const iterator = iterable[Symbol.iterator]();\n  return {\n    next () {\n      do {\n        const { done, value } = iterator.next();\n      } while(!done && !fn(value));\n      return { done,value };\n    }\n  }\n');

//  pag203
console.log('recursive iterators');
console.log('Iterators maintain state, that\'s what they do. Generators have to manage the exact same amount of state.');

const isIterable = (something) => !!something[Symbol.iterator];

const generate = (iterable) => {
  for (const element of iterable) {
    if (isIterable(element)) {
      generate(element);
    } else {
      console.log(element);
    }
  }
};


generate([1, [2, [3, 4], 5]]);


//  pag205
// const fibonacci = () => {
//   let a,b;
//
//   console.log(a = 0);
//   console.log(b = 1);
//
//   while (true) {
//     [a, b] = [b, a + b];
//     console.log(b);
//   }
// }
console.log('const fibonacci = () => {\n  let a,b;\n  console.log(a = 0);\n  console.log(b = 1);\n  while (true) {\n    [a, b] = [b, a + b];\n    console.log(b);\n  }\n}');

console.log('another way');

// let a, b, state = 0;
//
// const fibonacci = () => {
//   switch (state) {
//     case 0:
//       state = 1;
//       return a = 0;
//     case 1:
//       state = 2;
//       return b = 1;
//     case 2:
//       [a, b] = [b, a + b];
//       return b;
//   }
// }

console.log('let a, b, state = 0;\n\nconst fibonacci = () => {\n  switch (state) {\n    case 0:\n      state = 1;\n      return a = 0;\n    case 1:\n      state = 2;\n      return b = 1;\n    case 2:\n      [a, b] = [b, a + b];\n      return b;\n  }\n}');

//  pag207
console.log('Javascrit generators');
console.log('An iterator written in a generator style is called generator.');
console.log('We declate the function using the function * syntax');
console.log('We do not return values or outputs them to the console. We "yeild" the value using the yield keyword.');

function* empty() {}

console.log(empty().next());

function* only(something) {
  yield something;
}


const yooo = only('yoo');

console.log('const yooo = only("yoo");');
console.log(yooo.next());
console.log(yooo.next());


const oneTwoThree = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log('const oneTwoThree = function * () {\n  yield 1;\n  yield 2;\n  yield 3;\n}');
console.log(oneTwoThree().next());
console.log(oneTwoThree().next());
console.log(oneTwoThree().next());
console.log(oneTwoThree().next());

const iterator123 = oneTwoThree();
console.log('const iterator123 = oneTwoThree();');
console.log(iterator123.next());
console.log(iterator123.next());
console.log(iterator123.next());
console.log(iterator123.next());

console.log('Generators behave very differently form normal functions, what happens semantically');
console.log('1- We call oneTwoThree() and get an iterator');
console.log('2- The iterator is in a nascent or in a "newBorn" state.');
console.log('3- When we call interator.next(), the bpdy of our generator  begins to be evaluated.');

