// const rollNumber1: number[] = [1, 2, 3, 4, 5];
// const rollNumber2: Array<number> = [1, 2, 3, 4, 5];

// const rollNumber3: string[] = ['1', '2', '3', '4', '5'];
// const rollNumber4: Array<string> = ['1', '2', '3', '4', '5'];
// const rollNumber5: Array<boolean> = [true, false];

// const userNameAndRolll: Array<{ name: string; roll: number }> = [
//   { name: 'rafiqul', roll: 52 },
// ];

// Generic type

type GenericType<T> = Array<T>;

const rollNumber6: GenericType<number> = [1, 2, 3, 4, 5];
const rollNumber7: GenericType<string> = ['1', '2', '3', '4', '5'];

type NameRollType = { name: string; roll: number };

const userNameAndRolll: GenericType<NameRollType> = [
  { name: 'rafiqul', roll: 52 },
];

// generic tuple

type GenericTupleType<X, Y> = [X, Y];

const tupleUser: GenericTupleType<string, string> = ['rafiqul', 'shopon'];

const userSalary: GenericTupleType<{ name: string; salary: number }, string> = [
  {
    name: 'Rafiqul',
    salary: 1000000000000000,
  },
  'shopon',
];
