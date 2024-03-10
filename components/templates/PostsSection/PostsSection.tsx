import { headers } from "next/headers";

import { getPrevNextPosts, getSortedPostsData } from "@/lib/posts";
import PostsList from "../../molecules/PostsList/PostsList";
import Link from "next/link";

const PostsSection = () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const postId = activePath ? activePath.split("/")[2] : null; // Extract post ID from path

  const title = activePath === "/blog" ? "Blog" : "Latest Posts";

  const posts = getSortedPostsData();

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <PostsList key={post.id} post={post} />
        ))}
      </ul>
      {activePath === "/" ? <Link href={"/blog"}>All Blog Posts</Link> : null}
    </>
  );
};

export default PostsSection;
