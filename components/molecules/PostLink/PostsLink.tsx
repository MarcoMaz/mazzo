import Link from "next/link";
import getFormattedDate from "../../../lib/getFormattedDate";
import React from "react";

interface Blogpost {
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
    <li>
      <strong>
        <Link href={`/blog/${id}`}>{title}</Link>
      </strong>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
};

export default PostsLink;
