import PropTypes from "prop-types";
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enterBody, setEnterBody] = useState("");
  const [enterTitle, setEnterTitle] = useState("");

  function bodyChangeHandler(event) {
    setEnterBody(event.target.value);
  }
  function textChangeHandler(event) {
    setEnterTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      userId: 1,
      body: enterBody,
      title: enterTitle,
    };

    onAddPost(postData);

    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Your Title*</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={textChangeHandler}
          required
        />
      </p>{" "}
      <p>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          rows={3}
          onChange={bodyChangeHandler}
        ></textarea>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddPost: PropTypes.func.isRequired,
};

export default NewPost;
