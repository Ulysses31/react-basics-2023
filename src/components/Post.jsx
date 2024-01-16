import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, title, body }) {
  return (
    <li className={classes.post}>
      <Link to={id.toString()}>
        <p className={classes.title}>{title}</p>
        <p className={classes.body}>{body.substring(0, 100)}...</p>
      </Link>
    </li>
  );
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
