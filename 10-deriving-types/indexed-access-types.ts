// const appUser = {
//   name: 'Max',
//   age: 23,
//   permissions: [
//     {
//       id: 'p1',
//       title: 'Admin',
//       description: 'Admin access',
//     },
//   ],
// };
// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

// type Perms = { id: string; title: string; description: string }[];
type Perms = AppUser['permissions']; // this equals
type Perm = Perms[number]; // so you can get type of permitions item type

type Names = string[];
type Name = Names[number];
