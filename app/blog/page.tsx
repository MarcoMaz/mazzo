import { usePathname } from 'next/navigation';

import PostsLists from "../components/templates/PostsList/PostsList";

const Posts = () => {

  return (
    <div>
      <PostsLists />
    </div>
  );
};

export default Posts;
