export async function loader({ params }) {
  console.log(params);

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.postId
  );
  const resData = await response.json();
  return resData;
}
