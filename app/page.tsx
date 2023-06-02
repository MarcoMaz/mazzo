import Posts from "./components/Posts";

import Hi from "./components/templates/Hi/Hi";
import SelectedWorks from "./components/templates/SelectedWorks/SelectedWorks";
import WriteMe from "./components/templates/WriteMe/WriteMe";

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
      <WriteMe />
    </>
  );
}
