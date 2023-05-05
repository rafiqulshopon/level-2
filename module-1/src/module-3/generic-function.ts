const createArray = (param: string): string[] => {
  return [param];
};

// generic type function
const createArray1 = <T>(param: T): T[] => {
  return [param];
};

// type Name = { name: string };
interface IName {
  name: string;
}
const response1 = createArray1<string>('Bangladesh');
const response2 = createArray1<IName>({ name: 'Bangladesh' });

// arrow function
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

// normal function
function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const response3 = createArray2<string, string>('Bangladesh', 'BD');

// console.log(response3);

// spread operator

const getMyInfo = <T>(info: T) => {
  const address = 'Mirpur 12';

  const newData = { ...info, address };
  return newData;
};

const myInfo = {
  name: 'Rafiqul',
  age: 26,
};

const response4 = getMyInfo(myInfo);

console.log(response4);
