import Posts from './components/Posts'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>
        {/* HI! section */}
      </header>
      <nav></nav>
      <main className={styles.main}>
        {/* SELECTED WORKS */}
        <Posts />
      </main>
      <footer>
        {/* WRITE ME HERE */}
      </footer>
    </>
  )
}
