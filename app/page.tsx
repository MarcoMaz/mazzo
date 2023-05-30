import Posts from './components/Posts'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header></header>
      <nav></nav>
      <main className={styles.main}>
        <Posts />
      </main>
      <footer></footer>
    </>
  )
}
