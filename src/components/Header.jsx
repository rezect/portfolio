import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Hi, I`m rezect</h1>
      <nav className={styles.nav}>
        <button className={styles.nav_button}>Home</button>
        <button className={styles.nav_button}>Hobbies</button>
        <button className={styles.nav_button}>Skills</button>
      </nav>
    </header>
  )
}

export default Header