export const getList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const body = await response.json();

  return body;
};
