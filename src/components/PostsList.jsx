import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // fetch posts
    async function getPosts() {
      setIsFetching(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const resData = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      setPosts(resData);
      setIsFetching(false);
    }

    getPosts();
  }, []);

  async function addPostHandler(postData) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error();
    }
    setPosts((existingPosts) => [resData, ...existingPosts]);
  }

  return (
    <div>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {isFetching ? (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h2>Loading posts...</h2>
        </div>
      ) : posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
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

PostsList.propTypes = {
  isPosting: PropTypes.bool.isRequired,
  onStopPosting: PropTypes.func.isRequired,
};

export default PostsList;
