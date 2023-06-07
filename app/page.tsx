import Image from "next/image";
import Posts from "./components/Posts";

import Hi from "./components/templates/Hi/Hi";
import SelectedWorks from "./components/templates/SelectedWorks/SelectedWorks";
import WriteMe from "./components/templates/WriteMe/WriteMe";

export default function Home() {
  return (
    <>
      <nav>
        <ul className="ul-top">
          <li>
            <a href="#hi">Hi!</a>
          </li>
          <li>
            <a href="#selected-works">Selected Works</a>
          </li>
        </ul>
        <ul className="ul-bottom">
          <li>
            <a href="#write-me">Write me</a>
          </li>
        </ul>
      </nav>
      <Hi />
      <main>
        <SelectedWorks />
        {/* <Posts /> */}
      </main>
      <WriteMe />
    </>
  );
}
