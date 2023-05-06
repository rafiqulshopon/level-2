// spread operator

interface IMandatory {
  name: string;
  age: number;
}

const getMyInfo = <T extends IMandatory>(info: T) => {
  const address = 'Mirpur 12';

  const newData = { ...info, address };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
};

const myInfo: MyInfoType = {
  name: 'Rafiqul',
  age: 26,
};

const response4 = getMyInfo<MyInfoType>(myInfo);

console.log(response4);
