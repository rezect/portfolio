import styles from '../styles/Footer.module.css'
import tgLogo from '/telegram-logo.png'
import githubLogo from '/github-mark.png'

function Footer() {
  return (
    <>
      <h1 className={styles.footer_title}>Contacts</h1>
      <div className={styles.footer}>
        <a href='https://t.me/rezect' target='_blank' rel='noreferrer' className={styles.footer_link}>
          <img src={tgLogo} className={styles.footer_logo}/>
        </a>
        <a href='https://github.com/rezect' target='_blank' rel='noreferrer' className={styles.footer_link}>
          <img src={githubLogo} className={styles.footer_logo}/>
        </a>
      </div>
    </>
  )
}

export default Footer