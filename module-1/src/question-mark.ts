// Nullish Coeslancing Operator - it will work only for null & undefined values

const isAuthenticatedUser = null;

const userName = isAuthenticatedUser ?? 'Guest';

// console.log(userName);

type Player = {
  name: string;
  club: string;
  country: string;
  salary: {
    weekly: '350 pound';
    monthly: number;
    yearly?: '';
  };
};

const player1: Player = {
  name: 'Benzema',
  club: 'Real Madrid',
  country: 'France',
  salary: {
    weekly: '350 pound',
    monthly: 1500,
  },
};

const yearlySalary = player1?.salary?.yearly ?? '350k';

console.log(yearlySalary);
