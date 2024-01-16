import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <div>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </div>
  );
}

export default PostsList;
