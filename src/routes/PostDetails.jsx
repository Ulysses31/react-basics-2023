import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>The request post could not bu found.</p>
          <p>
            <Link to="/" className={classes.btn}>
              OK
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.title}>{post.title}</p>
        <p className={classes.body}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
