type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = 'name' | 'age' | 'address'; // manual

type NewTypeUsingKeyOf = keyof PersonType;
