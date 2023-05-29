import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: Blogpost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li>
      <strong>
        <Link href={`/posts/${id}`}>{title}</Link>
      </strong>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
}
