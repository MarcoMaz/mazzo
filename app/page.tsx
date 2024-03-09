import Hi from "./components/templates/Hi/Hi";
import PostsLists from "./components/templates/PostsList/PostsList";
import SelectedWorks from "./components/templates/SelectedWorks/SelectedWorks";

export default function Home() {

  return (
    <div className="container">
      <Hi />
      <main>
        <PostsLists />
        <SelectedWorks />
      </main>
    </div>
  );
}
