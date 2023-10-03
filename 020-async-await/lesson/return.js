const fetchData = async () => {
  return "hello!";
};

const result = fetchData();
console.log(result); // Promise { 'hello!' }

result
  .then((value) => {
    console.log(value);
  }) // hello!
  .catch((err) => {
    console.error(err);
  });

const useHello = async () => {
  const result = await fetchData();
  console.log(result);
};

useHello(); // hello!
