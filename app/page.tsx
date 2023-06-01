import Posts from "./components/Posts";

import Hi from "./components/sections/Hi/Hi";
import SelectedWorks from "./components/sections/SelectedWorks/SelectedWorks";
import WriteMe from "./components/sections/WriteMe/WriteMe";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Hi />
      </header>
      <nav></nav>
      <main className={styles.main}>
        <SelectedWorks />
        {/* <Posts /> */}
      </main>
      <footer>
        <WriteMe />
      </footer>
    </>
  );
}
