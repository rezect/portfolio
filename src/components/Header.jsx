import styles from "../styles/Header.module.css";
import PropTypes from "prop-types";

function setSkillsToMain(activeCard, setActiveCard) {
  if (activeCard === "skills") {
    return;
  }

  const mainSection = document.getElementById(activeCard);
  const currentSection = document.getElementById("skills");
  const mainSectionDec = document.getElementById(activeCard + "_decoration");
  const currentSectionDec = document.getElementById("skills_decoration");

  setActiveCard("skills");

  mainSection.style.opacity = "0.1";
  currentSection.style.opacity = "1";

  mainSection.style.zIndex = "0";
  currentSection.style.zIndex = "1";

  mainSectionDec.style.opacity = "0.1";
  currentSectionDec.style.opacity = "1";
}

function setAboutToMain(activeCard, setActiveCard) {
  if (activeCard === "about") {
    return;
  }

  const mainSection = document.getElementById(activeCard);
  const currentSection = document.getElementById("about");
  const mainSectionDec = document.getElementById(activeCard + "_decoration");
  const currentSectionDec = document.getElementById("about_decoration");

  setActiveCard("about");

  mainSection.style.opacity = "0.1";
  currentSection.style.opacity = "1";

  mainSection.style.zIndex = "0";
  currentSection.style.zIndex = "1";
  
  mainSectionDec.style.opacity = "0.1";
  currentSectionDec.style.opacity = "1";
}

function setHobbiesToMain(activeCard, setActiveCard) {
  if (activeCard === "hobbies") {
    return;
  }

  const mainSection = document.getElementById(activeCard);
  const currentSection = document.getElementById("hobbies");
  const mainSectionDec = document.getElementById(activeCard + "_decoration");
  const currentSectionDec = document.getElementById("hobbies_decoration");

  setActiveCard("hobbies");

  mainSection.style.opacity = "0.1";
  currentSection.style.opacity = "1";

  mainSection.style.zIndex = "0";
  currentSection.style.zIndex = "1";

  mainSectionDec.style.opacity = "0.1";
  currentSectionDec.style.opacity = "1";
}

function Header({ activeCard, setActiveCard }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Hi, I`m rezect</h1>
      <nav className={styles.nav}>
        <button
          className={styles.nav_button}
          onClick={() => setHobbiesToMain(activeCard, setActiveCard)}
        >
          Hobbies
        </button>
        <button
          className={styles.nav_button}
          onClick={() => setAboutToMain(activeCard, setActiveCard)}
        >
          About
        </button>
        <button
          className={styles.nav_button}
          onClick={() => setSkillsToMain(activeCard, setActiveCard)}
        >
          Skills
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setPagesOrder: PropTypes.func,
};

export default Header;
