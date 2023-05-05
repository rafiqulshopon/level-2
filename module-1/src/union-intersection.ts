type NoobDeveloperType = {
  name: string;
};

// type JuniorDeveloperType = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

// here | refers to union type, & referes to intersection type

type JuniorDeveloperType = NoobDeveloperType & {
  expertise: string;
  experience: number;
};

type NextLevelDeveloperType = JuniorDeveloperType & {
  leasderShipYear: number;
  aws: boolean;
  level: 'junior' | 'mid' | 'senior';
};

const devloperName: NoobDeveloperType | JuniorDeveloperType = {
  name: 'Rafiqul',
  expertise: 'javascript',
  experience: 1,
};

const nextDeveloper: NextLevelDeveloperType = {
  name: 'next level',
  aws: true,
  leasderShipYear: 2,
  expertise: 'javascript',
  experience: 1,
  level: 'senior',
};
