// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

type Role = 'admin' | 'editor' | 'guest';
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = 'guest'; //0 => admin, 1 => guest

userRole = 'admin';

let possibleResults: [1 | -1, number]; // [1, -1]
possibleResults = [1, -1];

function access(role: Role) {
  //
}
export {};
