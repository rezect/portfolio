import styles from '../styles/Footer.module.css'
import tgLogo from '../../public/Logo.png'

function Footer() {
  return (
    <>
      <h1 className={styles.footer_title}>Contacts</h1>
      <a href='https://t.me/rezect' target='_blank' rel='noreferrer' className={styles.footer_link}>
        <img src={tgLogo} className={styles.footer_logo}/>
      </a>
    </>
  )
}

export default Footer