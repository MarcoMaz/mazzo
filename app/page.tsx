import IntroSection from "../components/templates/IntroSection/IntroSection";
import PostsSection from "../components/templates/PostsSection/PostsSection";

export default function Home() {

  return (
    <div className="container">
      <IntroSection />
      <main>
        <section>
          <PostsSection />
        </section>
      </main>
    </div>
  );
}
