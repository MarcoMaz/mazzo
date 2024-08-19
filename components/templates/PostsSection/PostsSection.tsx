import { headers } from 'next/headers';

import './PostsSection.css';

import { getSortedPostsData } from '../../../lib/posts';
import PostLink from '../../molecules/PostsLink/PostsLink';
import Link from 'next/link';

const PostsSection = () => {
  const headersList = headers();
  const activePath = headersList.get('x-invoke-path');
  const title = activePath === '/blog' ? 'Blog' : 'Latest Posts';

  const posts = getSortedPostsData();

  return (
    <div className='posts-section'>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostLink blogPost={post} />
          </li>
        ))}
      </ul>
      {activePath === '/' ? <Link href={'/blog'}>All Blog Posts</Link> : null}
    </div>
  );
};

export default PostsSection;
