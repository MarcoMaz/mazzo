import Posts from "./components/Posts";

import Hi from "./components/templates/Hi/Hi";
import SelectedWorks from "./components/templates/SelectedWorks/SelectedWorks";
import WriteMe from "./components/templates/WriteMe/WriteMe";

export default function Home() {
  return (
    <>
      <Hi />
      <nav></nav>
      <main>
        <SelectedWorks />
        {/* <Posts /> */}
      </main>
      <WriteMe />
    </>
  );
}
