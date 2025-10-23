function generateError(msg?: string) {
  throw new Error();
}

generateError();

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

let input = '';

const didProvideInput = input ?? false;

export {};
