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
console.log('1. We call oneTwoThree() and get an iterator');
console.log('2. The iterator is in a nascent or in a "newBorn" state.');
console.log('3. When we call interator.next(), the bpdy of our generator  begins to be evaluated.');
console.log('4.The body of our generators runs until it returns, ends, or encounters a yield statement, which is yield 1.');
console.log('- The iterator suspends its execution.');
console.log('- the iterator wraps 1 in {done: false, value: 1} and returns that from the call to the .next().');
console.log('- The rest of the program continues along its way until it ,+makes another call to iterator .next().');
console.log('- The iterator resumes execution from the point where it yieled last value.');
console.log('5.The body of our generators runs until it returns, ends, or encounters a yield statement, which is yield 2.');
console.log('- The iterator suspends its execution.');
console.log('- the iterator wraps 2 in {done: false, value: 2} and returns that from the call to the .next().');
console.log('- The rest of the program continues along its way until it ,+makes another call to iterator .next().');
console.log('- The iterator resumes execution from the point where it yieled last value.');
console.log('6.The body of our generators runs until it returns, ends, or encounters a yield statement, which is yield 2.');
console.log('- The iterator suspends its execution.');
console.log('- the iterator wraps 3 in {done: false, value: 3} and returns that from the call to the .next().');
console.log('- The rest of the program continues along its way until it ,+makes another call to iterator .next().');
console.log('- The iterator resumes execution from the point where it yieled last value.');
console.log('6.The body of our generators runs until it returns, ends, or encounters a yield statement, there are no more lines of code, so it ends');
console.log('- the iterator return {done: true} from the call to .next(), and every call to this iterator\'s .next() methods will return {done: true} from now on.');
console.log('This behaviour is not unique to javascript, generators are called coroutines in other languages.');
console.log('Coroutine are computer program components the generalize subroutines for nonpreemptive multitasking, by allowin multiples entry points for suspending and resuming execution at certaint locations. Coroutines are well-suited for implementing more familiar program components such as cooperative tasks, exeptions, event loop, iterators, inifite lists and pipes.');

const threeNumbers = {
  [Symbol.iterator]: function * () {
    yield 1;
    yield 2;
    yield 3;
  }
};

console.log('const threeNumbers = {\n  [Symbol.iterator]: function * () {\n    yield 1;\n    yield 2;\n    yield 3;\n  }\n};');
console.log('[...threeNumbers]');
console.log([...threeNumbers]);


// const fibonacci = {
//   [Symbol.iterator]: () => {
//     let a = 0, b = 1, state = 0;

//     return {
//       next: () => {
//         switch (state) {
//           case 0:
//             state = 1;
//             return {value: a};
//           case 1:
//             state = 2;
//             return {value: b};
//           case 2:
//             [a, b] = [b, a + b];
//             return {value: b};
//         }
//       }
//     }
//   }
// }

// for (let n of fibonacci) {
//   console.log(n);
// }

console.log('const fibonacci = {\n  [Symbol.iterator]: () => {\n    let a = 0, b = 1, state = 0;\n    return {\n      next: () => {\n        switch (state) {\n          case 0:\n            state = 1;\n            return {value: a};\n          case 1:\n            state = 2;\n            return {value: b};\n          case 2:\n            [a, b] = [b, a + b];\n            return {value: b};\n        }\n      }\n    }\n  }\n}\nfor (let n of fibonacci) {\n  console.log(n);\n');


// const mapWith = (fn, iterable) => {
//   ({
//     [Symbol.iterator]: () => {
//       const iterator = iterable[Symbol.iterator]();
//       return {
//         next: () => {
//           const {done, value} = iterator.next();
//           return ({ done: done, value: done ? undefined : fn(value)});
//         }
//       }
//     }
//   })
// }

console.log('const mapWith = (fn, iterable) => {\n  ({\n    [Symbol.iterator]: () => {\n      const iterator = iterable[Symbol.iterator]();\n      return {\n        next: () => {\n          const {done, value} = iterator.next();\n          return ({ done: done, value: done ? undefined : fn(value)});\n        }\n      }\n    }\n  })\n}');

console.log('Or you can do this way');

// function * mapWith (fn, iterable) {
//   for (const element of iterable) {
//     yield fn(element);
//   }
// }

console.log('function * mapWith (fn, iterable) {\n  for (const element of iterable) {\n    yield fn(element);\n  }\n}');