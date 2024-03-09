import { headers } from "next/headers";

import { getSortedPostsData } from "@/lib/posts";
import ListItem from "../../ListItem";

const PostsLists = () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const title = activePath === "/blog" ? "Blog" : "Latest Posts";

  const posts = getSortedPostsData();

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostsLists;
