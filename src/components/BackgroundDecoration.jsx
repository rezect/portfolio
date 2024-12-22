import styles from '../styles/BackgroundDecoration.module.css'

function BackgroundDecoration() {
  return (
    <div className={styles.background_decoration}>
      <div className={styles.decoration_element} id={styles.element1}></div>
      <div className={styles.decoration_element} id={styles.element2}></div>
      <div className={styles.decoration_element} id={styles.element3}></div>
    </div>
  )
}

export default BackgroundDecoration