import Link from "next/link";
import getFormattedDate from "../../../lib/getFormattedDate";
import React from "react";

export interface Blogpost {
  id: string;
  title: string;
  date: string;
}

interface PostsLinkProps {
  blogPost: Blogpost;
}

const PostsLink: React.FC<PostsLinkProps> = ({ blogPost }) => {
  const { id, title, date } = blogPost;
  const formattedDate = getFormattedDate(date);

  return (
    <>
      <h3>
        <Link href={`/blog/${id}`}>{title}</Link>
      </h3>
      <span>{formattedDate}</span>
    </>
  );
};

export default PostsLink;
