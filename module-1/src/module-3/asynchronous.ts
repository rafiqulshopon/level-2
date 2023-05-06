// Mocking

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'Data is fetced!';
    if (data) {
      resolve(data);
    } else {
      reject('Failed to fetch data!');
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// Api call

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();
