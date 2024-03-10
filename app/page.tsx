import IntroSection from "../components/templates/IntroSection/IntroSection";
import PostsLists from "../components/templates/PostsSection/PostsSection";

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
