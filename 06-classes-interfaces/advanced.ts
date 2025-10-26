// example #1 - getters
class User1 {
  constructor(private firstName: string, private lastName: string) {}
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const konstantin1 = new User1('Konstantin', 'Zhukov');
console.log(konstantin1.fullName);

// example #2 - getters
class User2 {
  private _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (!name.trim()) throw new Error('Invalid name');
    this._firstName = name;
  }
  set lastName(name: string) {
    if (!name.trim()) throw new Error('Invalid name');
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }
}

const konstantin2 = new User2();
konstantin2.firstName = 'Kos';
konstantin2.lastName = 'Zhukov';
console.log(konstantin2.fullName);

// example #3 - static props
class User3 {
  private _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (!name.trim()) throw new Error('Invalid name');
    this._firstName = name;
  }
  set lastName(name: string) {
    if (!name.trim()) throw new Error('Invalid name');
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

  static eid = 'USER';
  static greet() {
    console.log('Hello');
  }
}

console.log(User3.eid);
User3.greet();

// example #4 - inheritance, protected props
class User4 {
  protected _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (!name.trim()) throw new Error('Invalid name');
    this._firstName = name;
  }
  set lastName(name: string) {
    if (!name.trim()) throw new Error('Invalid name');
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

  static eid = 'USER';
  static greet() {
    console.log('Hello');
  }
}

class Employee extends User4 {
  constructor(public jobTitle: string) {
    super();
    //   super.firstName = 'Stan'
  }

  work() {
    console.log(this._firstName);
  }
}

// abstract classes

abstract class UIElement {
  constructor(public identifier: 'string') {}

  clone() {
    // logic to duplicate UI element
  }
}

// let uiElement = new UIElement {} // you get an error since you can only extend abstart classes

class Drawer extends UIElement {
  constructor(public identifier: 'string', public position: 'left' | 'right') {
    super(identifier);
  }
}
