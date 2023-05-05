// const searchName = (value: string | null) => {
//   if (value === null) {
//     console.log('There is nothing to search');
//   } else {
//     console.log('Searching...');
//   }
// };

// searchName(null);

//  unknown type
const getMyCarSpeed = (speed: unknown): void => {
  if (typeof speed === 'number') {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  } else if (typeof speed === 'string') {
    const [value] = speed.split(' ');
    const convertedSpeed = (parseInt(value) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  } else {
    console.log('Please input the correct speed type');
  }
};

getMyCarSpeed(56);
getMyCarSpeed('56 KMPH');
getMyCarSpeed(true);

// never type
// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError('Error occured!');
