import { Form, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="title">Your Title*</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" rows={3}></textarea>
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
