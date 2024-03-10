import IntroSection from "../components/templates/IntroSection/IntroSection";
import PostsLists from "../components/templates/PostsList/PostsList";

export default function Home() {

  return (
    <div className="container">
      <IntroSection />
      <main>
        <PostsLists />
      </main>
    </div>
  );
}
