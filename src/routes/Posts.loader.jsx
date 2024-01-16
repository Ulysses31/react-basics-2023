export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resData = await response.json();
  return resData;
}
