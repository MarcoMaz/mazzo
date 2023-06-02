import Posts from "./components/Posts";

import Hi from "./components/organisms/Hi/Hi";
import SelectedWorks from "./components/organisms/SelectedWorks/SelectedWorks";
import WriteMe from "./components/organisms/WriteMe/WriteMe";

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
