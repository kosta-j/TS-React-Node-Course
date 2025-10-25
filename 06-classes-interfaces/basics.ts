// 1st approach:
class User1 {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

// 2nd approach:
class User2 {
  constructor(public name: string, public age: number) {}
}

const max = new User1('Max', 39);
const fred = new User2('Fred', 41);

console.log(max, fred);

// public and private properties:
class User3 {
  public hobbies1: string[] = [];
  hobbies2: string[] = []; // both are equal - properties are public by default
  constructor(public name: string, private age: number) {}

  greet() {
    console.log('My age is: ' + this.age);
  }
}

// readonly properties:
class User4 {
  readonly hobbies: string[] = [];

  constructor(public name: string, private readonly age: number) {}

  greet() {
    console.log('My age is: ' + this.age);
  }
}

const eddie = new User4('Eddie', 21);

eddie.hobbies = []; // you can't reassign readonly object
eddie.hobbies.push('new hobby'); // but this works
