import Posts from "./components/Posts";
import Hi from "./components/sections/Hi/Hi";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <Hi />
      </header>
      <nav></nav>
      <main className={styles.main}>
        {/* SELECTED WORKS */}
        <Posts />
      </main>
      <footer>{/* WRITE ME HERE */}</footer>
    </>
  );
}
