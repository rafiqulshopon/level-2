// keyof guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 == 'number' && typeof param2 == 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add('1', '2');
add(1, 2);

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: 'admin';
};

function getUser(user: NormalUserType | AdminUserType) {
  if ('role' in user) {
    return `This ${user.name} is an ${user.role}`;
  } else {
    return `This is a normal user`;
  }
}

const normalUser: NormalUserType = { name: 'Rafiqul' };

const adminUser: AdminUserType = { name: 'Shopon', role: 'admin' };

// instanceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log('Making sound');
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I'm barking`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeo() {
    console.log(`I'm meowing`);
  }
}

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeo;
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog('Husky', 'dog');
const animal2 = new Cat('Persian', 'cat');
