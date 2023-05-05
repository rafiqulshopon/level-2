const KgToGram = (param: string | number): string | number | undefined => {
  if (typeof param === 'string') {
    const value = parseFloat(param) * 1000;
    return `Converted value is ${value}`;
  }
  if (typeof param === 'number') {
    const value = param * 1000;
    return `Converted value is ${value}`;
  }
};

const resultConsole = KgToGram(1000) as number; // type assertion
const resultConsole1 = <string>KgToGram('1000'); // simpler way to define type assertion, won't work on tsx file extension

console.log(resultConsole);
console.log(resultConsole1);
