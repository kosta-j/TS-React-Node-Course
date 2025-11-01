type StringArray = string[];
// type ElementType = StringArray[number];
type ElementType<T extends any[]> = T[number];
type Example1 = ElementType<StringArray>; // type string

let text = 1;
// type Example2 = ElementType<typeof text>; // here will be an error

type GetElementType<T> = T extends any[] ? T[number] : never;
type Example3 = GetElementType<typeof text>; // now here will be type never

// another example
type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;
function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }
  throw new Error('No first name and/or last name found');
}

const name1 = getFullName({}); // type never
const name2 = getFullName({ firstName: 'Max', lastName: 'Musterman' }); // type string
