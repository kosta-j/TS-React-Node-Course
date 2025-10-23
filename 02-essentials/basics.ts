let userName;
let userAge = 41;
//
userName = 'Max';
// userAge = '41';

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10');
add(9, 6);
// add(9, '6');

export {};
