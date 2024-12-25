import styles from '../styles/Card.module.css'

function About() {
  return (
    <>
      <div className={styles.card} id="about">
        <h2 className={styles.card_title}>
          About:
        </h2>
        <ul className={styles.card_list}>
          <p className={styles.card_text}>My name is Ilya, I am a aspiring developer. I don't have a specific type of direction yet, but most of all I am proficient in C++. I am a second-year student at the Moscow Aviation Institute. I'm trying to find myself in this fast-paced big city. If you are interested in my skills or just want to chat, write to me in telegram - @rezect.</p>
        </ul>
      </div>
    </>
  )
}

export default About