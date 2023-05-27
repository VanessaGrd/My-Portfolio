import logo from "../assets/logoVG.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={styles.header}>

      <ul className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />
<div className={styles.navbarLinks}>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          {" "}
          <a href="#projects">Réalisations</a>
        </li>
        <li>
          <a href="#CV">CV</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li></div>

      </ul>
      </header>
    </>
  );
}

export default Navbar;
