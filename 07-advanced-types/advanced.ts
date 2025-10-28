// index types

type DataStore = {
  [prop: string]: boolean | number;
};

let someObj: Record<string, boolean | number>; // this is essentially the same as row 3

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
// store.name = 'Max'; // not allowed

// const types
let roles = ['user', 'admin', 'editor'] as const; // makes array readonly
// roles.push('test'); // not allowed
const firstRole = roles[0];

// satisfies keyword
const dataEntries = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// dataEntries.entry3; // without satisfies there would be no error, since ts has generic(or index) type
