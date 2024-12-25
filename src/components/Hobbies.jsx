import styles from '../styles/Card.module.css'

function Hobbies() {
  return (
    <>
      <div className={styles.card} id="hobbies">
        <h2 className={styles.card_title}>
          My Hobbies:
        </h2>
        <ul className={styles.card_list}>
          <li className={styles.card_item}>All kinds of developing</li>
          <p className={styles.card_text}>I'm learning a little bit about all areas of development.</p>
          <li className={styles.card_item}>Sport</li>
          <p className={styles.card_text}>I like to ride a bike and do bench press.</p>
          <li className={styles.card_item}>Psycology</li>
          <p className={styles.card_text}>I'm improving my emotional intelligence.</p>
        </ul>
      </div>
    </>
  )
}

export default Hobbies