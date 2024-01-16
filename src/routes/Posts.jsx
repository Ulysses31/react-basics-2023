import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <div>
      <main>
        <Outlet />
        <PostsList />
      </main>
    </div>
  );
}

export default Posts;
