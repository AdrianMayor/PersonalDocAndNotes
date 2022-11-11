export const sendPost = async (item) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    "Content-Type": "application/json",
    body: item,
  });

  return response;
};
