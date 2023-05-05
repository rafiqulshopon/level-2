type DeveloperType = {
  name: string;
  age?: number;
  profession: string;
  company: string;
};

const developer1: DeveloperType = {
  name: 'Rafiqul',
  age: 26,
  profession: 'JavaScript Developer',
  company: 'Gain Solutions',
};

const developer2: DeveloperType = {
  name: 'Imran',
  age: 27,
  profession: 'Associate Software Engineer',
  company: 'Apsis',
};

type CourseNameType = string;

const courseName: CourseNameType = 'Next Level Web Development';

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
