// type alias - commonly used for primitive data type
type User = {
  name: string;
  age: number;
};

// interface - commonly used for Object data type
interface IUser {
  name: string;
  age: number;
}

// extends IUser property with its own value
interface IExtendedUser extends IUser {
  phone: number;
}

const user11: IExtendedUser = {
  name: 'rafiqul',
  age: 26,
  phone: 11111111,
};

console.log(user11);

type addNumberType = (num1: number, num2: number) => number;

const addNumber: addNumberType = (num1, num2) => num1 + num2;

// we can convert type alias addNumberType to Interface too

interface IAddNumber {
  (num1: number, num2: number): number;
}

const addNumber1: IAddNumber = (num1, num2) => num1 + num2;

// suggestion - will use type alias in function as it seems to be more clean than interface

// array - type alias
type rollNumberType = number[];
const rollNumbers: rollNumberType = [1, 2, 3, 4, 5, 6];

// array - interface

interface IRollNumber {
  [index: number]: number;
}
const rollNumber: IRollNumber = [1, 2, 3, 4, 5, 6];

// will use interface for object
