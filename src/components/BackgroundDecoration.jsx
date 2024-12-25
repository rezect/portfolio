import styles from '../styles/BackgroundDecoration.module.css'

function BackgroundDecoration() {
  return (
    <div className={styles.background_decoration}>
      <div className={styles.decoration_element} id="hobbies_decoration"></div>
      <div className={styles.decoration_element} id="about_decoration"></div>
      <div className={styles.decoration_element} id="skills_decoration"></div>
    </div>
  )
}

export default BackgroundDecoration