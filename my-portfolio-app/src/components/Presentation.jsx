import picture from "../assets/picture.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import pictureRandom from "../assets/pictureRandom.jpg";
import styles from "./Presentation.module.css";

function Presentation() {
  return (
  <>
  <div className={styles.presentation}>
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
      <figure className={styles.figure}>
      <img className={styles.picture} src={picture} alt="" />
      </figure>
    </div>
    <div className={styles.skills}>
      <p>Stack</p>
<div className={styles.hardSkills}>
      <ul>
        <li>#HTML</li>
        <li>#CSS</li>
        <li>#Javascript</li>
        <li>#React</li>
        <li>#NodeJS</li>
        <li>#Express</li>
        <li>#MySQL</li>
        </ul>
        </div>
        <div className={styles.softSkills}>
          <ul>
        <li>#Esprit d'équipe</li>
        <li>#Créativité</li>
        <li>#Soif de connaissances</li>
      </ul>
      </div>
    </div>
  </div>

  
</>
  )}

  export default Presentation;