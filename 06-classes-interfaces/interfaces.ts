interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// interface declaration merging
// interface Authenticatable {
//   role: string;
// }

/* extending interface: */
interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {
  // you can add more properties than you have described in interface
  constructor(
    public email: string,
    public password: string,
    public name: string
  ) {}

  login() {}
  logout() {}
}

let user: Authenticatable = {
  email: 'test@TextDecoderStream.ru',
  password: 'password',
  //   role: 'admin',

  login() {},
  logout() {},
};

// ensuring base types with interface
function authenticate(user: Authenticatable) {
  user.login();
}
