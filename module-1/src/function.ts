function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(5, 6);

const sum = (num1: number, num2: number): number => num1 + num2;

// spread operator

const myFriends = ['rohit', 'sajib', 'sahad'];

const otherFriends = ['azaan', 'muhib', 'siam'];

myFriends.push(...otherFriends);

// console.log(myFriends);

// rest operator

const greetingFriends = (...friend: string[]): void => {
  friend.map((name) => {
    return console.log(` Hi ${name} \n `);
  });
};

greetingFriends(...myFriends, 'kabbo', 'siyam', 'jibon');
