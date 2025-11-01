type Operations = {
  add: (a: number, b: number) => number;
  substract: (a: number, b: number) => number;
};
let mathOperations: Operations = {
  add: (a: number, b: number) => {
    return a + b;
  },
  substract: (a: number, b: number) => {
    return a - b;
  },
};

// this can be simplified with generics (see below)
// type Results = {
//   add: number;
//   substract: number;
// };
type Results<T> = {
  [Key in keyof T]?: number; // you can make types optional here (optional mapping)
};
let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  substract: mathOperations.add(4, 2),
};

// Optional mapping
type Results1<T> = {
  [Key in keyof T]?: number; // you can make types optional here
};
let mathResults1: Results1<Operations> = {
  add: mathOperations.add(1, 2), // now properties are optional
};

type Operations2 = {
  add?: (a: number, b: number) => number;
  substract?: (a: number, b: number) => number;
};
type Results2<T> = {
  [Key in keyof T]-?: number; // you can make types required
};
let mathResults2: Results2<Operations2> = {
  add: mathOperations.add(1, 2), // now properties are required
  substract: mathOperations.add(4, 2),
};

type Results3<T> = {
  readonly [Key in keyof T]: number; // you can make/remove types readonly
  //   -readonly [Key in keyof T]: number; // you can make/remove types readonly
};
