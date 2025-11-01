type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProps<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val === null)
    throw new Error('Accessing undefined value');
  return val;
}

const user = { name: 'Max', age: 35 };
const val = getProps(user, 'age');

const data = { id: 1, isStored: true, values: [1, -3, 23] };
const isStored = getProps(data, 'isStored');
