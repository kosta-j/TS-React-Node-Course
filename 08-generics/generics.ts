let names: Array<string> = ['Max', 'Anna'];

type Datastore<T> = {
  [key: string]: T;
};

let store: Datastore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

function merge<T>(a: T, b: T) {
  return [a, b];
}
const ids = merge<number>(1, 2); //<number> is not necessary since ts ca infer this types

// multiple generics
function merge1<T, U>(a: T, b: U) {
  return [a, b];
}
const ids1 = merge1<number, string>(1, 'Max'); //<number> is not necessary since ts ca infer this types

// constraints:
function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}
const merged = mergeObj({ uderName: 'Max' }, { age: 35 });

// constraints with multiple generics:
function mergeObj1<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}
const merged1 = mergeObj({ uderName: 'Max' }, { age: 35 });

// generic classes & interfaces:
class User<T> {
  constructor(public id: T) {} // id can be string | number for example
}
const user = new User('1');
const user1 = new User(1);
