import { getSortedPostsData } from "@/lib/posts";

import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();

  return (
    <div>
      Posts:
      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
