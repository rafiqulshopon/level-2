class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.address = address;
    this.age = age;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student('rafiqul', 25, 'Mirpur 12');

// class Teacher {
//   name: string;
//   age: number;
//   address: string;
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.designation = designation;
//   }
//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours}`;
//   }
//   takeClasses(classNo: number): string {
//     return `This ${this.name} will take ${classNo}`;
//   }
// }

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(classNo: number): string {
    return `This ${this.name} will take ${classNo}`;
  }
}

const teacher1 = new Teacher('Shofiq', 50, 'Narayanganj', 'Science Teacher');
