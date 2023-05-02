import logo from "../assets/logoVG.png";
import picture from "../assets/picture.png";
import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <header className={styles.header}>
        <ul className={styles.navbar}>
          <li>
            <NavLink to="/Presentation">Présentation </NavLink>
          </li>
          <li>
            <NavLink to="/Réalisations">Réalisations </NavLink>
          </li>
          <li>
            <NavLink to="/CV">CV </NavLink>
          </li>
        </ul>
      </header>
      <body>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
          <img className={styles.picture} src={picture} alt="" />
        </div>
        <div className={styles.about}>
          <div className={styles.title}>
            <h1>
              Bonjour, je suis <span>Vanessa Giraud,</span>
            </h1>
            <h2>développeuse web Javascript/React, HTML et CSS à Lyon.</h2>
          </div>
          <div className={styles.subtitle}>
            <h3>A propos de moi</h3>
            <p>
              Après 15 années dans le milieu médical, j’ai changé de voie pour
              me reconvertir dans le développement web ! <br /><br />
              Une formation intensive à la Wild Code School et un stage, m’ont
              permis de m’épanouir dans ce nouveau métier.
            </p>
          </div>
        </div>
      </body>
    </main>
  );
}

export default HomePage;
