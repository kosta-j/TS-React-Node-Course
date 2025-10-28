// function overloads
function getLength(val: string): string;
function getLength(val: any[]): number;
//

function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numOfWords = getLength('sdfs sd sdf d sdfdd df');
numOfWords.length; // see row 1-2
const numItems = ['sdf', 'qwe', 'ewew   '];
