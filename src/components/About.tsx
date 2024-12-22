import styles from '../styles/Card.module.css'

function About() {
  return (
    <>
      <div className={styles.card} id={styles.about}>
        <h2 className={styles.card_title}>
          About:
        </h2>
        <ul className={styles.card_list}>
          <li className={styles.card_item}>C/C++</li>
          <p className={styles.card_text}>I know all the basics from pointers to multithreaded programming.</p>
          <li className={styles.card_item}>Python:</li>
          <p className={styles.card_text}>Numpy, pandas, mathplotlib, pytorch, bs4, requests.</p>
          <li className={styles.card_item}>WebDev:</li>
          <p className={styles.card_text}>I know a little bit how sites work and how to make my own one.</p>
        </ul>
      </div>
    </>
  )
}

export default About