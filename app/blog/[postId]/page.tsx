import "./page.css";

import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData, getPrevNextPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);
  const { prevPost, nextPost } = getPrevNextPosts(postId as string);

  return (
    <main>
      <section className="post">
        <h1>{title}</h1>
        <span>{pubDate}</span>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        {prevPost && (
          <Link href={`/blog/${prevPost.id}`}>
            Previous Post: {prevPost.title}
          </Link>
        )}
        {nextPost && (
          <Link href={`/blog/${nextPost.id}`}>Next Post: {nextPost.title}</Link>
        )}
      </section>
    </main>
  );
}
