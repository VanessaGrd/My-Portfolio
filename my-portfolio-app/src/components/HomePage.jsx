import logo from "../assets/logoVG.png";
import picture from "../assets/picture.png";
import linkedin from "../assets/linkedin.png";
import pictureRandom from "../assets/pictureRandom.jpg"
import github from "../assets/github.png";
import styles from "./HomePage.module.css";
import { Link, NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <header className={styles.header}>
        <ul className={styles.navbar}>
          <li>
            <a href="#aboutMe">A propos</a>

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
        <img className={styles.logo} src={logo} alt="logo" />

        <div className={styles.about}>
          <div className={styles.aboutBlock}>
          <div className={styles.title}>
            <h1>Front-End Developer</h1>
            <h2>
              Bonjour, Je suis Vanessa Giraud, développeuse front-end basée à
              Lyon.
            </h2>

            <div className={styles.logoContainer}>
              <img
                className={styles.logoLinkedin}
                src={linkedin}
                alt="logo-linkedin"
              />

              <img
                className={styles.logoGithub}
                src={github}
                alt="logo-linkedin"
              />
            </div>
          </div>
          <img className={styles.picture} src={picture} alt="" />
          </div>
          <div className={styles.skills}>
            <p>Stack</p>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node JS</li>
              <li>Express</li>
              <li>My SQL</li>
              <li>Esprit d'équipe</li>
              <li>Créativité</li>
              <li>Soif de connaissances</li>
            </ul>
          </div>
        

        </div>

        <section className={styles.about} id="aboutMe">
          <div className={styles.aboutContainer}>
            <img src={pictureRandom} alt="pictureRandom" />
            <div className={styles.aboutText}>
              <h3>A propos de moi</h3>
              <p>Après 15 années dans le milieu médical je m'oriente vers un métier qui m'a toujours attirée, développeur web ! 👩🏼‍💻 <br /><br />
C'est la mise en place et le paramétrage d'un logiciel de rendez-vous d'imagerie qui a confirmé mon choix de me lancer dans le développement. <br /><br />
Désormais pleinement épanouie dans cette nouvelle voie, je recherche une entreprise qui me permettra d'exprimer ma créativité et de partager un bon esprit d'équipe. </p>
            </div>
          </div>
         
        </section>
      </body>
    </main>
  );
}

export default HomePage;
