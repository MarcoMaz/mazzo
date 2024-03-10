import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import React from "react";

interface PostsListProps {
  post: Blogpost;
}

const PostsList: React.FC<PostsListProps> = ({ post }) => {
  const { id, title, date } = post;
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

export default PostsList