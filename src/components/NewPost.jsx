import PropTypes from "prop-types";
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enterBody, setEnterBody] = useState("");
  const [enterText, setEnterText] = useState("");

  function bodyChangeHandler(event) {
    setEnterBody(event.target.value);
  }
  function textChangeHandler(event) {
    setEnterText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enterBody,
      text: enterText,
    };

    onAddPost(postData);

    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          name="body"
          rows={3}
          onChange={bodyChangeHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name*</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={textChangeHandler}
          required
        />
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
