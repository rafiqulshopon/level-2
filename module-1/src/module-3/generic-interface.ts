// generic interface

interface ICrush<T> {
  name: string;
  boyfriend: T;
}

const crushName: ICrush<boolean> = {
  name: 'ABC',
  boyfriend: false,
};

const crushName2: ICrush<string> = {
  name: 'XYZ',
  boyfriend: 'Monu',
};

interface IBoyfriend {
  name: string;
  salary: number;
}

const crushName3: ICrush<IBoyfriend> = {
  name: 'XYZ',
  boyfriend: {
    name: 'Monu',
    salary: 1000000000,
  },
};
