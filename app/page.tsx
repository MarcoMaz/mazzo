import Hi from "./components/templates/Hi/Hi";
import PostsLists from "./components/templates/PostsList/PostsList";

export default function Home() {

  return (
    <div className="container">
      <Hi />
      <main>
        <PostsLists />
      </main>
    </div>
  );
}
