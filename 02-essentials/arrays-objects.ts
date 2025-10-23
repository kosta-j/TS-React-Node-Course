let hobbies = ['Sports', 'Cooking'];
// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;
users = [1, 'Max'];
users = [1, 2];
users = ['1', 'Max'];

let possibleResults: [number, number]; // [1, -1]
possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Max',
  age: 10,
  hobbies: ['Sports', 'Fishing'],
  role: {
    description: 'admin',
    id: 1,
  },
};

let val: {} = 'text'; // type {} == non-null or non-underfind value

let data: Record<string, number | string>; // generic type Record == value should be an Object
data = {
  entry1: '',
  entry2: 2,
};

export {};
